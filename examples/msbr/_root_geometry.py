import openmc
import numpy as np

def shared_root_geometry():
    cr_boundary = openmc.model.rectangular_prism(15.24*2, 15.24*2)
    core_base = openmc.ZPlane(z0=0.0, name='core_base')
    core_top = openmc.ZPlane(z0=449.58, name='core_top')

    s1 = openmc.model.IsogonalOctagon(center=(0.0,0.0), r1=208.28, r2=222.71, name='base_octader')
    s2 = openmc.model.IsogonalOctagon(center=(0.0,0.0), r1=218.44, r2=215.53, name='smaller_octader')
    s3 = openmc.model.IsogonalOctagon(center=(0.0,0.0), r1=228.60, r2=193.97, name='smallest_octader')

    zone_i_boundary = (s1, s2, s3)

    zone_ii_boundary = openmc.ZCylinder(r=256.032, name='iib_boundary')
    annulus_boundary = openmc.ZCylinder(r=261.112, name='annulus_boundary')
    lower_plenum_boundary = openmc.ZPlane(z0=-7.62, name='lower_plenum_boundary')

    zone_bounds = (cr_boundary, zone_i_boundary, zone_ii_boundary)
    core_bounds = (annulus_boundary, lower_plenum_boundary, core_base, core_top)
    radial_reflector_boundary = openmc.ZCylinder(r=338.328, name='radial_reflector_boundary')
    bottom_reflector_boundary = openmc.ZPlane(z0=-76.2, name='bottom_axial_reflector_boundary')
    top_reflector_boundary = openmc.ZPlane(z0=525.78, name='top_axial_reflector_boundary')
    reflector_bounds = (radial_reflector_boundary,
                        bottom_reflector_boundary,
                        top_reflector_boundary)

    radial_vessel_boundary = openmc.ZCylinder(r=343.408, name='radial_vessel_wall', boundary_type='vacuum')
    bottom_vessel_boundary = openmc.ZPlane(z0=-81.28, name='bottom_vessel_wall', boundary_type='vacuum')
    top_vessel_boundary = openmc.ZPlane(z0=530.86, name='top_vessel_wall', boundary_type='vacuum')

    vessel_bounds = (radial_vessel_boundary,
                     bottom_vessel_boundary,
                     top_vessel_boundary)

    return zone_bounds, core_bounds, reflector_bounds, vessel_bounds

def zoneIIB(zone_i_boundary, zone_ii_boundary, annulus_boundary, core_base, core_top, moder, fuel, optimized):
    # Large elements
    large_angular_width = 3.538
    large_half_w = large_angular_width / 2
    large_positions = np.linspace(0, 315, 8)
    r_outer = 256.032
    r_big1 = 229.6
    r_big2 = 223.6
    rb_1 = (r_big1, r_outer)
    rb_2 = (r_big2, r_outer)
    big_radii = [rb_1, rb_2] * 4
    small_radii = (207.28, r_outer)

    r_hole = 3.0875
    hole_args = ({'x0': 242.679, 'y0': 0.0, 'r': r_hole},
                 {'x0': 171.60, 'y0': 171.60, 'r': r_hole},
                 {'x0': 0.0, 'y0': 242.679, 'r': r_hole},
                 {'x0': -171.60, 'y0': 171.60, 'r': r_hole},
                 {'x0': -242.679, 'y0': 0.0, 'r': r_hole},
                 {'x0': -171.60, 'y0': -171.60, 'r': r_hole},
                 {'x0': 0.0, 'y0': -242.697, 'r': r_hole},
                 {'x0': 171.60, 'y0': -171.60, 'r': r_hole})

    # Small elements
    small_angular_width = 0.96
    adjacent_angular_offset = 0.675 #27/40
    small_elems_per_octant = 25

    elem_cells = []
    zone_iib_reg = None
    for i, pos in enumerate(large_positions):
        pos = np.round(pos, 3)
        r1_big, r2_big = big_radii[i]
        t1_big = np.round(pos - large_half_w, 3)
        t2_big = np.round(pos + large_half_w, 3)
        s1 = openmc.model.CylinderSector(r1_big, r2_big, t1_big, t2_big, name=f'iib_large_element_{pos}')
        s2 = openmc.ZCylinder(**hole_args[i])

        elem_cells.append(openmc.Cell(fill=moder, region=(-s1 & +s2), name=f'iib_large_element_{pos}'))
        elem_cells.append(openmc.Cell(fill=fuel, region=(-s2), name=f'iib_large_element_fuel_hole_{pos}'))

        t1_small = np.round(t2_big + adjacent_angular_offset, 3)
        r1_small, r2_small = small_radii

        if optimized:
            # Inter element fuel channel
            s3 = openmc.model.CylinderSector(r1_small, r2_small, t2_big, t1_small)
            cpos = t2_big + (adjacent_angular_offset / 2)
            cpos = np.round(cpos, 3)
            elem_cells.append(openmc.Cell(fill=fuel, region=-s3, name=f'inter_element_fuel_channel_{cpos}'))

            s4 = openmc.model.CylinderSector(r1_small, r1_big, t1_big, t2_big)
            elem_cells.append(openmc.Cell(fill=fuel, region=-s4, name=f'inter_element_fuel_channel_{pos}'))
        else:
            if isinstance(zone_iib_reg, openmc.Region):
                zone_iib_reg = zone_iib_reg & +s1
            else:
                zone_iib_reg = +s1

        for i in range(0, small_elems_per_octant):
            t2_small = np.round(t1_small + small_angular_width, 3)

            # reflector element
            pos = t2_small - (small_angular_width / 2)
            pos = np.round(pos, 3)
            s5 = openmc.model.CylinderSector(r1_small, r2_small, t1_small, t2_small, name=f'iib_small_element_{pos}')
            elem_cells.append(openmc.Cell(fill=moder, region=-s5, name=f'iib_small_element_{pos}'))

            t1_small = np.round(t2_small + adjacent_angular_offset, 3)

            if optimized:
                # inter-element fuel channel
                cpos = t2_small + (adjacent_angular_offset/2)
                cpos = np.round(cpos, 3)
                s6 = openmc.model.CylinderSector(r1_small, r2_small, t2_small, t1_small,  name=f'inter_element_fuel_channel_{cpos}')
                elem_cells.append(openmc.Cell(fill=fuel, region=-s6, name=f'inter_element_fuel_channel_{cpos}'))
            else:
                zone_iib_reg = zone_iib_reg & +s5

    #universe_id=10
    iib = openmc.Universe(name='zone_iib', cells=elem_cells)
    s1, s2, s3 = zone_i_boundary
    if optimized:
        oct1_maxy, oct1_miny, oct1_maxx, oct1_minx, oct1_ur, oct1_br, oct1_bl, oct1_ul = list((-s1).get_surfaces().values())
        oct2_maxy, oct2_miny, oct2_maxx, oct2_minx, oct2_ur, oct2_br, oct2_bl, oct2_ul = list((-s3).get_surfaces().values())
        oct3_maxy, oct3_miny, oct3_maxx, oct3_minx, oct3_ur, oct3_br, oct3_bl, oct3_ul = list((-s2).get_surfaces().values())

        cap_r =(+oct3_maxx & -zone_ii_boundary)

        c23_urr = (+oct2_maxx & -oct3_maxx & -oct3_ur & +oct2_ur)
        c12_urr = (+oct1_maxx & -oct3_maxx & -oct2_ur & +oct1_ur)
        cap_ur = (-oct3_maxy & -oct3_maxx & -oct1_ur & -zone_ii_boundary)
        c12_uru = (+oct1_maxy & -oct3_maxy & -oct2_ur & +oct1_ur)
        c23_uru = (+oct2_maxy & -oct3_maxy & -oct3_ur & +oct2_ur)

        cap_u = (+oct3_maxy & -zone_ii_boundary)

        c23_ulu = (+oct2_maxy & -oct3_maxy & +oct3_ul & -oct2_ul)
        c12_ulu = (+oct1_maxy & -oct3_maxy & +oct2_ul & -oct1_ul)
        cap_ul = (-oct3_maxy & +oct3_minx & +oct1_ul & -zone_ii_boundary)
        c12_ull = (-oct1_minx & +oct3_minx & +oct2_ul & -oct1_ul)
        c23_ull = (-oct2_minx & +oct3_minx & +oct3_ul & -oct2_ul)

        cap_l = (-oct3_minx & -zone_ii_boundary)

        c23_bll = (-oct2_minx & +oct3_minx & +oct3_bl & -oct2_bl)
        c12_bll = (-oct1_minx & +oct3_minx & +oct2_bl & -oct1_bl)
        cap_bl  = (+oct3_minx & +oct3_miny & +oct1_bl & -zone_ii_boundary)
        c12_blb = (-oct1_miny & +oct3_miny & +oct2_bl & -oct1_bl)
        c23_blb = (-oct2_miny & +oct3_miny & +oct3_bl & -oct2_bl)

        cap_b = (-oct3_miny & -zone_ii_boundary)

        c23_brb = (-oct2_miny & +oct3_miny & -oct3_br & +oct2_br)
        c12_brb = (-oct1_miny & +oct3_miny & -oct2_br & +oct1_br)
        cap_rb = (-oct3_maxx & +oct3_miny & -oct1_br & -zone_ii_boundary)
        c12_brr = (+oct1_maxx & -oct3_maxx & -oct2_br & +oct1_br)
        c23_brr = (+oct2_maxx & -oct3_maxx & -oct3_br & +oct2_br)

        regs = ([cap_r, 'cap_r'], [c23_urr, '23_urr'], [c12_urr, '12_urr'],
                [cap_ur, 'cap_ur'], [c12_uru, '12_uru'], [c23_uru, '23_uru'],
                [cap_u, 'cap_u'], [c23_ulu, '23_ulu'], [c12_ulu, '12_ulu'],
                [cap_ul, 'cap_ul'], [c12_ull, '12_ull'], [c23_ull, '23_ull'],
                [cap_l, 'cap_l'], [c23_bll, '23_bll'], [c12_bll, '12_bll'],
                [cap_bl, 'cap_bl'], [c12_blb, '12_blb'], [c23_blb, '23_blb'],
                [cap_b, 'cap_b'], [c23_brb, '23_brb'], [c12_brb, '12_brb'],
                [cap_rb, 'cap_rb'], [c12_brr, '12_brr'], [c23_brr, '23_brr'])

        iib_cells = []
        for reg, name in regs:
            iib_cells.append(openmc.Cell(fill=iib, region=(reg & +core_base & -core_top), name=f'zone_iib_{name}'))


    else:
        iib.add_cell(openmc.Cell(fill=fuel, region=zone_iib_reg, name='zone_iib_fuel'))
        iib_cells = [openmc.Cell(fill=iib, region=(+s1 & +s2 & +s3 &
                                                   -zone_ii_boundary &
                                                   +core_base &
                                                   -core_top), name='zone_iib')]
    return iib_cells

def annulus(zone_ii_boundary, annulus_boundary, core_base, core_top, fuel):
    annulus_reg = +zone_ii_boundary & -annulus_boundary & +core_base & -core_top
    c1 = openmc.Cell(fill=fuel, region=annulus_reg, name='annulus')
    return c1

def lower_plenum(core_base, lower_plenum_boundary, annulus_boundary, fuel):
    lower_plenum_reg = -core_base & +lower_plenum_boundary & -annulus_boundary
    c1 = openmc.Cell(fill=fuel, region=lower_plenum_reg, name='lower_plenum')
    return c1

def reflectors(annulus_boundary,
               radial_reflector_boundary,
               lower_plenum_boundary,
               bottom_reflector_boundary,
               core_top,
               top_reflector_boundary,
               moder):
    radial_reflector_reg = +annulus_boundary & -radial_reflector_boundary & +bottom_reflector_boundary & -top_reflector_boundary
    bottom_reflector_reg = -annulus_boundary & -lower_plenum_boundary & +bottom_reflector_boundary
    top_reflector_reg = -annulus_boundary & +core_top & -top_reflector_boundary

    c1 = openmc.Cell(fill=moder, region=radial_reflector_reg, name='radial_reflector')
    c2 = openmc.Cell(fill=moder, region=bottom_reflector_reg, name='bottom_axial_reflector')
    c3 = openmc.Cell(fill=moder, region=top_reflector_reg, name='top_axial_reflector')
    return c1, c2, c3

def vessel(radial_reflector_boundary,
           radial_vessel_boundary,
           bottom_vessel_boundary,
           top_vessel_boundary,
           top_reflector_boundary,
           bottom_reflector_boundary,
           hast):
    radial_vessel_reg = +radial_reflector_boundary & -radial_vessel_boundary & -top_vessel_boundary & +bottom_vessel_boundary
    bottom_vessel_reg = -radial_reflector_boundary & -bottom_reflector_boundary & +bottom_vessel_boundary
    top_vessel_reg = -radial_reflector_boundary & -top_vessel_boundary & +top_reflector_boundary

    c1 = openmc.Cell(fill=hast, region=radial_vessel_reg, name='radial_vessel_wall')
    c2 = openmc.Cell(fill=hast, region=bottom_vessel_reg, name='bottom_vessel_wall')
    c3 = openmc.Cell(fill=hast, region=top_vessel_reg, name='top_vessel_wall')
    return c1, c2, c3
