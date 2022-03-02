Search.setIndex({docnames:["devguide/contributing","devguide/index","examples","index","installation","overview","releasenotes/index","releasenotes/template","releasenotes/v0.3.0","releasenotes/v0.4.0","src/index","src/modules","src/saltproc","src/saltproc.app","src/saltproc.depcode","src/saltproc.materialflow","src/saltproc.process","src/saltproc.reactor","src/saltproc.separator","src/saltproc.simulation","src/saltproc.sparger","src/saltproc.tests","src/saltproc.tests.test_app","src/saltproc.tests.test_depcode","src/saltproc.tests.test_materialflow","src/saltproc.tests.test_process","src/saltproc.tests.test_separator","src/saltproc.tests.test_simulation","src/saltproc.tests.test_sparger","src/saltproc.version"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["devguide/contributing.rst","devguide/index.rst","examples.rst","index.rst","installation.rst","overview.rst","releasenotes/index.rst","releasenotes/template.rst","releasenotes/v0.3.0.rst","releasenotes/v0.4.0.rst","src/index.rst","src/modules.rst","src/saltproc.rst","src/saltproc.app.rst","src/saltproc.depcode.rst","src/saltproc.materialflow.rst","src/saltproc.process.rst","src/saltproc.reactor.rst","src/saltproc.separator.rst","src/saltproc.simulation.rst","src/saltproc.sparger.rst","src/saltproc.tests.rst","src/saltproc.tests.test_app.rst","src/saltproc.tests.test_depcode.rst","src/saltproc.tests.test_materialflow.rst","src/saltproc.tests.test_process.rst","src/saltproc.tests.test_separator.rst","src/saltproc.tests.test_simulation.rst","src/saltproc.tests.test_sparger.rst","src/saltproc.version.rst"],objects:{"":[[12,0,0,"-","saltproc"]],"saltproc.app":[[13,1,1,"","parse_arguments"],[13,1,1,"","read_dot"],[13,1,1,"","read_feeds_from_input"],[13,1,1,"","read_main_input"],[13,1,1,"","read_processes_from_input"],[13,1,1,"","refill"],[13,1,1,"","reprocessing"],[13,1,1,"","run"]],"saltproc.depcode":[[14,2,1,"","Depcode"],[14,2,1,"","DepcodeSerpent"]],"saltproc.depcode.Depcode":[[14,3,1,"","__init__"],[14,3,1,"","read_dep_comp"],[14,3,1,"","read_depcode_info"],[14,3,1,"","read_depcode_step_param"],[14,3,1,"","run_depcode"],[14,3,1,"","switch_to_next_geometry"],[14,3,1,"","write_depcode_input"],[14,3,1,"","write_mat_file"]],"saltproc.depcode.DepcodeSerpent":[[14,3,1,"","__init__"],[14,3,1,"","change_sim_par"],[14,3,1,"","convert_nuclide_name_serpent_to_zam"],[14,3,1,"","create_iter_matfile"],[14,3,1,"","create_nuclide_name_map_zam_to_serpent"],[14,3,1,"","get_nuc_name"],[14,3,1,"","insert_path_to_geometry"],[14,3,1,"","read_dep_comp"],[14,3,1,"","read_depcode_info"],[14,3,1,"","read_depcode_step_param"],[14,3,1,"","read_plaintext_file"],[14,3,1,"","replace_burnup_parameters"],[14,3,1,"","run_depcode"],[14,3,1,"","switch_to_next_geometry"],[14,3,1,"","write_depcode_input"],[14,3,1,"","write_mat_file"]],"saltproc.materialflow":[[15,2,1,"","Materialflow"]],"saltproc.materialflow.Materialflow":[[15,3,1,"","__add__"],[15,3,1,"","__deepcopy__"],[15,3,1,"","__eq__"],[15,3,1,"","__init__"],[15,3,1,"","__rmul__"],[15,3,1,"","copy_pymat_attrs"],[15,3,1,"","get_mass"],[15,3,1,"","print_attr"],[15,3,1,"","scale_matflow"]],"saltproc.process":[[16,2,1,"","Process"]],"saltproc.process.Process":[[16,3,1,"","__init__"],[16,3,1,"","calc_rem_efficiency"],[16,3,1,"","check_mass_conservation"],[16,3,1,"","rem_elements"]],"saltproc.reactor":[[17,2,1,"","Reactor"]],"saltproc.reactor.Reactor":[[17,3,1,"","__init__"]],"saltproc.separator":[[18,2,1,"","Separator"]],"saltproc.separator.Separator":[[18,3,1,"","__init__"],[18,3,1,"id0","calc_rem_efficiency"],[18,4,1,"","db"],[18,4,1,"","deltap"],[18,3,1,"id1","description"],[18,4,1,"","do"],[18,4,1,"","dp"],[18,3,1,"id2","eff"],[18,4,1,"id3","k"],[18,4,1,"","q_he"],[18,4,1,"","q_salt"],[18,4,1,"","temp_room"]],"saltproc.simulation":[[19,2,1,"","Simulation"]],"saltproc.simulation.Simulation":[[19,3,1,"","__init__"],[19,3,1,"","check_restart"],[19,3,1,"","check_switch_geo_trigger"],[19,3,1,"","read_k_eds_delta"],[19,3,1,"","store_after_repr"],[19,3,1,"","store_mat_data"],[19,3,1,"","store_run_init_info"],[19,3,1,"","store_run_step_info"]],"saltproc.sparger":[[20,2,1,"","Sparger"]],"saltproc.sparger.Sparger":[[20,3,1,"","__init__"],[20,4,1,"","area"],[20,3,1,"id0","calc_rem_efficiency"],[20,4,1,"","db"],[20,3,1,"id1","description"],[20,4,1,"id2","diffusivity"],[20,4,1,"","dp"],[20,3,1,"id3","eff"],[20,3,1,"id4","eps"],[20,4,1,"id5","exp_const"],[20,4,1,"id6","gas_const"],[20,4,1,"id7","h_const"],[20,4,1,"","length"],[20,4,1,"","q_he"],[20,4,1,"","q_salt"],[20,3,1,"id8","sherwood"],[20,4,1,"id9","temp_room"],[20,4,1,"","temp_salt"]],"saltproc.tests":[[22,0,0,"-","test_app"],[23,0,0,"-","test_depcode"],[24,0,0,"-","test_materialflow"],[25,0,0,"-","test_process"],[26,0,0,"-","test_separator"],[27,0,0,"-","test_simulation"],[28,0,0,"-","test_sparger"]],"saltproc.tests.test_app":[[22,1,1,"","test_read_dot"],[22,1,1,"","test_read_feeds_from_input"],[22,1,1,"","test_read_main_input"],[22,1,1,"","test_read_processes_from_input"],[22,1,1,"","test_refill"],[22,1,1,"","test_reprocessing"]],"saltproc.tests.test_depcode":[[23,1,1,"","test_change_sim_par"],[23,1,1,"","test_convert_nuclide_name_serpent_to_zam"],[23,1,1,"","test_create_iter_matfile"],[23,1,1,"","test_create_nuclide_name_map_zam_to_serpent"],[23,1,1,"","test_get_nuc_name"],[23,1,1,"","test_insert_path_to_geometry"],[23,1,1,"","test_read_dep_comp"],[23,1,1,"","test_read_depcode_info"],[23,1,1,"","test_read_depcode_step_param"],[23,1,1,"","test_read_plaintext_file"],[23,1,1,"","test_replace_burnup_parameters"],[23,1,1,"","test_switch_to_next_geometry"],[23,1,1,"","test_write_depcode_input"],[23,1,1,"","test_write_mat_file"]],"saltproc.tests.test_materialflow":[[24,1,1,"","test_copy_pymat_attrs"],[24,1,1,"","test_get_mass"],[24,1,1,"","test_scale_matflow"]],"saltproc.tests.test_process":[[25,1,1,"","test_rem_elements"]],"saltproc.tests.test_separator":[[26,1,1,"","test_rem_elements"]],"saltproc.tests.test_simulation":[[27,1,1,"","test_check_switch_geo_trigger"],[27,1,1,"","test_read_k_eds_delta"],[27,1,1,"","test_store_after_repr"],[27,1,1,"","test_store_mat_data"],[27,1,1,"","test_store_run_init_info"],[27,1,1,"","test_store_run_step_info"]],"saltproc.tests.test_sparger":[[28,1,1,"","test_rem_elements"]],saltproc:[[13,0,0,"-","app"],[14,0,0,"-","depcode"],[15,0,0,"-","materialflow"],[16,0,0,"-","process"],[17,0,0,"-","reactor"],[18,0,0,"-","separator"],[19,0,0,"-","simulation"],[20,0,0,"-","sparger"],[21,0,0,"-","tests"],[29,0,0,"-","version"]]},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute"},terms:{"0":[4,6,15,17,18,19,20],"001":[18,20],"005":[18,20],"02":18,"05":20,"06":20,"09":20,"09c":14,"1":[0,4,5,15,17,18,19,20],"10":20,"10000000":5,"11":[4,5],"110m1":14,"1234":0,"135":20,"14":4,"15":20,"1900":20,"1968":20,"2":[3,4,5,8,15,18,20],"20":14,"2015":20,"2021":5,"2245":20,"23":8,"2300":20,"235":15,"238":15,"242m":14,"242m1":14,"29":8,"298":20,"2e5":18,"2nd":8,"3":[0,3,4,5,6,14,16,17,18,20],"31":4,"314":20,"36":20,"37":8,"3cm":18,"3e":20,"4":[5,6,20],"400000":18,"41":8,"4399":20,"45":8,"47":8,"471101":14,"47310":14,"48":8,"49":8,"4981":20,"4e5":18,"5":[0,4],"50":[8,14],"5194":20,"53":8,"54":8,"5e":20,"5e5":18,"6":0,"61":8,"63":8,"64":8,"66":8,"6e":20,"6th":14,"71":8,"75":8,"8":20,"86":8,"89":8,"9":19,"90":8,"900":[15,18,20],"92":8,"92235":14,"922350":14,"952421":14,"982510":14,"9920000":5,"abstract":[8,14],"case":19,"class":[4,8,9,14,15,16,17,18,19,20],"default":[4,18,19,20],"do":[0,18],"export":0,"final":[4,19],"float":[13,14,15,16,17,18,20],"function":[4,5,9,13,14,16,18,19,20,27],"import":[14,15],"int":[13,14,15,19],"long":4,"new":[0,1,3,5,14,15],"return":[4,13,14,15,16,18,19,20],"short":0,"switch":[0,14,19],"true":[14,16,19],"void":[15,18],"while":[0,5],A:[2,5],At:0,For:14,If:[0,1,4,14,16,19],In:[0,2,5,18,20],Is:[0,14,19],It:[3,5],No:20,On:14,Or:10,The:[0,1,2,4,7,8,9,14,15],Then:13,There:3,These:[7,9],To:[0,4,5],__:8,__add__:15,__deepcopy__:15,__eq__:15,__init__:[14,15,16,17,18,19,20],__rmul__:15,__string__:8,_dep:[5,14],aaa:14,abachma2:9,abc:14,about:[3,14,15,17],abov:2,accept:14,acp:20,activ:[0,4,14,19],active_cycl:[9,14],ad:[0,5,8,9,13,15],adapt:0,add:[0,5,8,14,19],addit:[0,8],address:8,adher:0,adjust:5,adjust_geo:[9,19],after:[8,13,14,16,19],after_mat:19,after_reproc:5,ag:14,against:9,all:[0,1,4,13,14],alpha:18,alreadi:[3,8],also:[0,3,14,19],although:5,am:14,an:[0,1,5,8,19],anaconda:0,analysi:[8,18,20],andrewryh:8,ani:[4,5,16],anoth:0,api:[3,5],app:[5,8,9,11,12],append:19,appli:[8,13,16],applic:4,ar:[0,2,4,5,7,9,15,20],area:[18,20],aren:0,arfc:[4,8],argument:13,arrai:17,assign:8,assum:[0,4],atmo:20,atom:14,atoms_per_molecul:15,attempt:8,attr:15,attribut:[9,14,15,18,20],attributit:15,autodoc:0,autogener:10,automat:[0,10],avail:[0,3,4],averag:20,back:5,bare:0,base:[14,15,16,17,18,19,20],bash:9,becom:19,been:9,befor:1,before_reproc:5,begin:[5,14,19],beginn:0,behavior:0,being:16,below:[5,19],besid:5,best:5,beta_:5,beta_eff_:5,better:9,between:[13,18,19],bit:0,bitshuffl:19,blosc:19,bone:0,bool:[14,15,19],box:4,branch:[0,8],breed:19,breeder:2,bring:8,brook:[18,20],brows:[0,3,10],bsd:3,bubbl:[18,20],bug:3,build:[0,4],burnabl:[5,13,14,15,16,19],burnup:[15,19],c:[0,4],calc_rem_effici:[16,18,20],calcul:[3,5,8,14,16,18,20],caleb:[18,20],call:8,can:[0,2,3,4,5,16],cannot:4,capabl:[5,8],capac:[5,16],carlo:[3,5,14],castom:16,cd:[2,4],cfd:[18,20],chang:[0,1,5,8,14,16],change_sim_par:14,changelog:8,charact:14,check:[0,1,4,9,14,16,27],check_mass_conserv:16,check_restart:[9,19],check_switch_geo_trigg:[19,27],chem:20,chemic:[13,14,20],chen:[18,20],child:19,ci:[0,8],circul:20,cite:3,claus:3,clean:19,cli:4,click:10,clone:[0,4],cm:[5,16,17,20],code:[2,3,5,7,8,9,13,14,19],codenam:[9,14],coeffici:20,com:[4,8],come:20,command:[0,4,5,13],comment:0,commit:0,comp:15,compar:[8,15,19],compat:[0,5,8],compel:0,compil:20,complet:[0,8],complevel:19,complib:19,compltex:4,compon:[2,5,15,16],composit:[5,13,14,16,19],compound:15,compress:19,compression_param:19,compris:5,comput:0,concaten:14,concret:0,conda:[0,4],condit:19,conserv:16,consid:0,consist:[8,27],constant:[16,20],contactor:[18,20],contain:[0,1,2,8,13,14,15,17,18,19,20,21],content:[11,14],continuum:0,contractor:[18,20],contribut:[1,3,7,8,9],contributor:[1,3],control:[5,14,15,19],conveni:4,convert_nuclide_name_serpent_to_zam:[9,14],cool:0,copi:[14,15],copy_pymat_attr:15,copyright:0,core:[13,14,17,19],core_inlet:13,core_numb:19,core_outlet:13,corr:20,correct:4,correl:[8,18,20],correspond:[15,27],could:0,coupl:[3,5],cours:2,creat:[0,4,5,8,14],create_iter_matfil:14,create_nuclide_map_serpent_to_zam:9,create_nuclide_name_map_zam_to_serp:[9,14],critic:19,cross:[8,18,19,20],cruft:8,cumul:[14,17,19],current:[0,3,5,7,9,14,16,17,19],current_depstep_idx:14,current_tim:19,current_timestep:19,curv:14,cycl:[14,19],d:[13,14,17,20],dash:14,data:[4,5,9,13,14,16,19],databas:[19,27],date:[3,8],daystep:14,db:[18,20],db_file:9,db_name:9,db_path:[9,19],db_saltproc:19,decai:14,deep:15,defin:[5,14,16,19,20],definit:5,delai:[5,19],delta:19,deltap:18,densiti:[15,19,20],dep:14,dep_dict:14,dep_end_tim:14,dep_step:[14,19],dep_step_length_cumul:[9,17],depcod:[5,8,9,11,12,19],depcode_inp:9,depcodeserp:[8,9,14],depend:[0,4],depenend:4,depet:19,depl_hist:9,deplet:[3,5,12,13,14,15,17,19],depstep:14,descib:15,describ:[0,13,16],descript:[0,2,13,16,18,20],design:[5,8],detail:[0,2],detect:0,determin:19,develop:[3,5,20],diamet:[18,20],dict:[13,14,15,16,18,19,20],dictionari:[9,13,14,15,18,19,20],differ:[18,20],difficulti:0,diffus:20,direct:13,directli:[3,5],directori:[0,2,4,19],dissert:20,distribut:0,dive:10,doc:[8,9,10],docpag:3,docstr:[0,8,27],document:[0,4,8,10],doesn:19,doi:20,don:0,done:0,dot:[2,13],dot_fil:13,download:[0,4],dp:[18,20],driver:5,drop:19,due:4,dure:14,e:[5,8],each:[0,5,13,14,15,17,18,19,20],ecosystem:3,eff:[5,18,20],effect:[1,5],effic:16,effici:[1,5,8,13,16,18,20],efficiecni:16,effort:5,el_nam:[16,18,20],element:[13,16,18,20],emploi:5,enabl:[3,5],encapsul:9,encourag:0,end:[5,14,15,19],enforc:0,enhanc:0,enough:0,entrainment_separ:5,entri:27,env:4,environ:4,ep:[16,20],eq:20,equal:[15,16],escienc:3,evalu:[18,20],exampl:[0,3,5,8,14],excit:14,exec_path:[9,14],execut:[0,4,14,19],exist:[0,5,18,19,20],exit:[18,20],exp_const:20,expect:0,explain:0,explan:0,explic:27,exponenti:20,extract:[13,16,18,20],extracted_mass:13,f:[4,15,20],facil:16,factor:[5,15,19],failur:0,fals:[14,16,19],familiar:1,faster:4,featur:[3,5],feed:[5,13],feed_pure_gd:27,feedback:0,feel:0,fertil:5,few:0,file:[0,2,3,4,5,8,9,10,13,14,16,19],file_data:14,file_path:14,filenam:[0,19],filter:19,find:[1,3,8,14],first:[5,12],first_geometry_fil:14,fissil:5,fission:[4,19],fix:[0,5],flag:[14,19],fletcher32:19,flexibl:[5,8],flow:[5,15,16,18,20],flowrat:[15,17],focus:0,follow:[0,4,5,7,9,19,20],forg:0,form:[14,15],format:[3,8,9,13,14],found:[3,4],fraction:[5,15,16,18],fresh:[5,13],from:[0,4,5,8,10,13,14,15,16,18,19,20,27],fuel:[3,5,12,13,16,20],full:[0,4,8],g:[5,13,15,16,17],ga:[18,20],gas_const:20,gener:[10,18,20],geo_fil:[9,14],geo_file_path:9,geometri:[5,8,14,19],get:[0,1],get_mass:15,get_nuc_nam:14,get_tra_or_dec:9,gh1234:0,git:[1,4],github:[0,3,4,8],give:0,given:[5,14],go:0,good:[0,3],gram:19,graph:13,guid:[3,8],gwenche:9,h5:19,h5_file:9,h:[5,8,20],h_const:20,ha:[4,15],handl:[16,19],have:[0,4,9,19],haven:8,hdf5:[5,19],heavi:5,heavili:3,helium:[18,20],henri:20,here:1,histori:14,hold:[13,14,19],how:[0,3,4],html:0,http:[0,8,20],human:14,i:[2,5,8,13],id:15,idea:[0,3],ideal:0,identifi:19,ignor:4,implement:[0,5],implicitli:27,improv:[0,8],in_out_stream:5,inact:[14,19],inactive_cycl:[9,14],includ:[0,3,8,14],incorrect:8,index:[3,10],individu:4,induc:4,inevit:5,inflow:16,info:14,inform:[1,3,4,14,15,17,18,19,20],init:19,initi:[14,15,16,17,18,19,20],initial_data:[16,18,20],inititi:13,inject:5,inlet:18,input:[2,5,8,9,13,14,16,19,27],input_data:14,input_path:9,insert:14,insert_path_to_geometri:14,insid:19,insititut:3,inspir:3,instal:[0,3,8],instanc:[8,14,18,19,20],instead:[0,8,14],integ:15,integr:[4,8,14,21],integration_test:[4,9],interfac:14,io:0,irradi:13,isomer:4,isotop:[5,8,14,15,16,18,20],issu:[0,3,8],iter:[14,19],iter_inputfil:[9,14],iter_matfil:[9,14],its:[16,27],jaiqi:20,jbae11:8,jeff:4,jiaqi:[8,18,20],jl:18,json:[2,9,13,16],jsonschema:[4,9],just:[0,4,14,16],k:[15,18,20],keep:[0,16],keff:19,keff_:5,keff_bd:5,kei:[13,14,15,16,18,19,20],kelvin:[18,20],kg:20,kgu:15,kind:0,kinemat:20,kl:20,kl_const:20,know:[0,4],kr:[5,8,20],kwarg:[16,18,20],l:16,label:0,laboratori:20,lastli:14,latest:[0,8],law:20,least_significant_digit:19,length:20,let:4,letter:14,level:[14,17,19],librari:[3,4,8],licens:0,like:5,line:[13,14],link:10,liquid:[3,5,12,18,20],list:[13,14,19],ll:1,load:14,local:0,locat:0,logic:5,loss:[5,13],lukeseifert:9,m3:20,m:[5,14,16,18,20],mai:[1,19],main:[2,13],main_inp_fil:13,maintain:5,major:5,make:[0,1,3,5,8,9,13],mamba:4,manag:4,mani:3,map:[14,19],march:5,mass:[5,13,15,16,17,19,20],mass_flowr:[5,9,15,16,17,19],master:[0,8],mat:[13,14,19],mat_nam:[8,13],match:[19,27],materi:[5,13,14,15,16,19],materialflow:[11,12,13,14,16,19],matplotlib:[0,3,4],matur:5,maximum:16,mcnp:5,md:8,mehmeturkmen:8,memo:15,memori:19,messag:0,meta:14,metadata:[15,19],metast:14,method:[9,14,18,19,20],mileston:[18,20],mini:0,miniconda:0,minumum:0,minut:0,mismatch:16,mode:[14,19],model:[3,5],modifi:[5,14],modul:[3,4,8,10,11],mol:20,molten:[2,5,12],moment:[14,19],mont:[3,5,14],more:4,move:9,mpi:[14,19],msbr:[2,8,20],msbr_main:2,msr:5,mu:20,much:0,multi:5,multipl:[5,8,15,19],multipli:15,multivers:3,munkm:9,must:[0,16,19],mwd:15,n:[0,13],n_:17,name:[5,8,13,14,16,18,19,20],nation:20,necessari:4,need:[0,1],networkx:[0,3,4],neutron:[4,5,14,19],neutron_pop:9,new_mat_comp:15,newli:14,next:[14,19],node:[13,14,19],node_numb:19,none:[14,15,19],normal:17,notat:[4,14],note:[0,1,3],now:[5,9],npop:[9,14],nuc_cod:14,nuc_nam:14,nuc_zzaaam:14,nuc_zzaam:14,nuclear:3,nuclid:[14,15],nuclide_map:14,number:[2,5,13,14,19,20],number_r:20,number_sc:20,number_sh:20,numpi:[0,3,4],oak:20,obj:[15,16],object:[5,8,9,13,14,15,16,17,18,19,20],obtain:15,off:0,omp:[14,19],onc:[0,4],one:[0,14,19],ones:4,onli:[8,14],onlin:[3,5,9],open:[0,3,5,12],openmc:[3,5,9],oper:15,optim:19,option:[4,14,15,19],optional_paramet:16,org:20,orient:[8,14],ornl:20,other:[14,15,19],otherwis:[14,19],ouput:14,our:[0,3,5,18,19],out:[4,14,19],outflow:16,outlet:18,output:[5,14],overrid:[15,18,20],overview:[3,8],own:0,p:[14,16],pa:[18,20],packag:[0,3,4,5,8,9,10,11],page:[0,3,4],panda:0,paper:19,parallel:19,param:14,paramet:[13,14,15,16,17,18,19,20],parent:[15,18,20],pars:[5,13,14],parse_argu:13,particl:14,particular:0,pass:[0,5],patch:8,path:[0,2,13,14,19],paths_list:13,peebl:20,peopl:[7,9],pep8:[0,8],per:[14,19],perform:[4,5,13,19],ph:20,phase:20,phy:20,pip:4,pipe:[18,20],plaintext:14,pleas:[0,1,3,4],plot:[18,20],pltdict:[18,20],point:[0,3],poison:[5,16],polici:0,popul:[14,19],possibl:13,potenti:5,power:[2,14,17,19],power_level:[9,17],pr:[0,8],precalcul:4,precursor:19,predict:19,prepar:[9,14,18,20],present:2,preserv:15,pressur:18,previou:19,previous:9,print:15,print_attr:15,problem:0,process:[4,5,8,11,12,13,18,19,20,27],process_j312:9,product:[4,7,9],progress:1,project:[3,5],properti:[13,14,18,19,20],provid:[0,2,4,18,20],publicli:4,pull:8,purlei:8,purpos:[18,20],py:[0,2,9],pydotplu:[0,3,4],pyne:[0,3,4,5,15],pyrk:0,pytabl:[0,4,19],pytest:[0,4],python:[0,2,3,4,8,15],q:0,q_he:[18,20],q_salt:[18,20],quick:0,quickli:4,r:20,rang:18,rate:[5,15,16,18,20],ratio:19,re:[1,9],reactiv:[5,14],reactor:[2,3,5,11,12,14,19],reactor_inp:9,read:[13,14,19],read_at_end:14,read_dep_comp:[9,14],read_depcode_info:[9,14],read_depcode_step_param:14,read_depcode_templ:9,read_dot:[8,13],read_feeds_from_input:13,read_k_eds_delta:19,read_main_input:13,read_plaintext_fil:[9,14],read_processes_from_input:13,read_repcode_step_param:9,readabl:[0,14],readili:4,readm:[4,8],real:[18,20],recommend:[0,4],record:5,recurs:15,refactor:[8,9],refer:[0,19],refil:[5,13],refilled_mat:13,regress:4,reimplement:4,rel:[5,15],releas:[0,1,3],releasenot:0,relev:0,reli:[1,3],rem_eff:[18,20],rem_el:16,remov:[5,8,9,13,16,18,20],removal_tb_di:27,renam:9,repeat:5,replac:14,replace_burnup_paramet:14,repo:0,report:[3,18,20],repositori:[0,4,8],repres:[14,15,19],reprocess:[2,3,5,13,16,19],reproduc:0,requir:[4,9],requr:0,rerun:14,respect:[14,20],restart:[14,19],restart_flag:[9,19],result:[4,19],rewrit:14,reynold:20,rho:20,ridg:20,right:[4,10,13],room:[18,20],root:[0,4],rst:8,rtd:4,rtype:20,run:[2,4,5,8,13,14,19],run_depcod:[5,14],runsim_no_reproc:9,runth:19,s:[3,4,5,8,14,15,16,17,18,20],salt:[2,5,12,18,20],saltproc:[0,1,2,4,7,8,9],saltproc_mat:14,saltproc_reactor:14,sander:20,saw:0,scale:[5,15],scale_matflow:15,scaling_factor:15,schema:9,scheme:[2,13],schmidt:20,scientif:3,scipi:0,script:[4,8],search:3,section:[8,18,19,20],see:[0,4],select:27,self:[0,5,15],sensit:[8,18,20],separ:[0,5,8,11,12,20],serpent2:[8,14],serpent:[2,3,4,5,8,14,19],server:0,set:[14,19],setup:2,sever:8,sh:9,shablona:3,sherwood:20,should:0,show:0,shuffl:19,signatur:9,significantli:4,sim_depcod:19,sim_info:14,sim_nam:[9,19],similarli:2,simul:[4,5,9,11,12,13,14,18,20],simulation_inp:9,simulation_paramet:5,singl:[14,16],size:[14,19],slide:20,slope:18,small:3,snippet:0,so:[0,1],softwar:[0,1,3],solut:3,solv:4,solvent:20,solver:4,some:[0,19],someth:0,soon:5,sophist:5,sourc:[0,2,3,4,5,10,12,13,14,15,16,17,18,19,20,22,23,24,25,26,27,28],space:0,sparg:[5,8],sparger:[5,8,11,12,18],specif:[5,14,16,19,20],sphinx:[0,3,4],spontan:4,src:15,sss2:14,sss_meta_zzz:9,stabl:14,standard:8,start:[0,1,3,14,19],state:[4,14,17],step:[5,14,15,17,19],still:5,store:[5,14,19,27],store_after_repr:19,store_after_repr_:27,store_at_end:19,store_mat_data:19,store_mat_data_:27,store_run_init_info:[9,19,27],store_run_step_info:[9,19,27],str:[13,14,16,18,19,20],stream:[5,13,16,19],strictli:0,string:[14,20],structur:[4,9,13],strucutr:3,subcrit:19,submodul:11,subpackag:[11,21],subprocess:14,suggest:3,suit:[0,4],sum:15,superfici:18,support:[5,9],sure:[0,1,8],swirl:18,switch_tim:19,switch_to_next_geometri:[9,14],symbol:14,syntax:8,system:[2,3,5,8,13,16],t:[0,8,16,19],tab:0,tabl:5,take:0,tap:2,tap_main:2,tap_object:2,target:[5,8,13,15,16,18,20],task:19,teddi:8,temp:15,temp_room:[18,20],temp_salt:[18,20],temperatur:[15,18,19,20],templat:[0,3,8,14],template_data:14,template_fil:9,template_inputfile_path:[9,14],template_path:9,terminoigi:1,test:[8,9,11,12,14],test_app:[12,21],test_change_sim_par:23,test_check_switch_geo_trigg:[9,27],test_convert_nuclide_name_serpent_to_zam:23,test_copy_pymat_attr:24,test_create_iter_matfil:23,test_create_nuclide_name_map_zam_to_serp:23,test_depcod:[12,21],test_get_mass:24,test_get_nuc_nam:23,test_insert_path_to_geometri:23,test_materialflow:[12,21],test_no_reproc_run:9,test_process:[12,21],test_read_dep_comp:23,test_read_depcode_info:23,test_read_depcode_step_param:23,test_read_dot:22,test_read_feeds_from_input:22,test_read_k_eds_delta:27,test_read_main_input:22,test_read_plaintext_fil:23,test_read_processes_from_input:22,test_refil:22,test_rem_el:[25,26,28],test_replace_burnup_paramet:23,test_reprocess:22,test_scale_matflow:24,test_separ:[12,21],test_simul:[12,21],test_sparg:[12,21],test_store_after_repr:[9,27],test_store_mat_data:[9,27],test_store_run_init_info:[9,27],test_store_run_step_info:[9,27],test_switch_to_next_geometri:23,test_write_depcode_input:23,test_write_mat_fil:23,thei:0,them:[0,4,14],theme:4,thi:[0,1,4,5,7,8,9,10,13,14,18,19,20,21,27],those:0,though:0,thread:19,through:[4,5,17],throughout:5,time:[0,4,14,17,19],timestep:19,titl:19,tm:20,tn:20,tool:[4,5,12],total:[15,16,17],transatom:2,transfer:20,translat:0,transport:[5,14],troubl:4,two:[4,14,15],type:[4,13,14,15,16,18,19,20,27],typo:[8,9],ui:8,uncheck:27,under:[3,5],understand:1,unit:[4,5,21,27],univers:[3,20],untest:9,up:[3,5,8,13],updat:[1,8,9,14,16],uranium:15,us:[0,1,3,4,5,8,9,13,14,16,18,19,20],usag:19,user:[5,14,16,19],v0:6,valu:[4,13,14,15,16,18,19,20,27],variabl:[4,8],variou:[5,8,15],vector:15,veloc:[18,20],verifi:9,version:[0,3,4,5,9,11,12,19,20],viscos:20,vitabl:4,vl:20,void_frac:15,void_fract:19,vol:15,volum:[5,9,16,17,19],volumetr:[18,20],w:17,wa:[0,16],wai:0,want:[0,4],washington:3,wast:[5,13,16,19],waste_bypass:27,waste_core_inlet:27,waste_core_outlet:27,waste_dict:[13,19],waste_heat_exchang:27,waste_stream:16,water:20,we:[0,1,3,4,5,19],weight:[14,16],welcom:[0,1,3],well:4,what:0,when:[0,19],where:[0,4],which:[2,3,4,8,13,14,15,16,19],wiht:19,wiki:4,within:[1,3,4,19],work:[0,1,19],workflow:1,would:0,write:[0,14],write_depcode_input:[9,14],write_mat_fil:[9,14],www:0,x1:17,x:[15,16],xe:[5,8,20],xenon:20,xsdata:4,y:15,yardasol:[8,9],yield:4,yml:[4,8],you:[0,1,4,8],your:[3,4,8],yourself:1,zoericht:9,zzaaam:14},titles:["Contributing","Developer\u2019s Guide","Examples","SaltProc","Installation","Overview","Release Notes","Release notes for vx.x.x","Release notes for v0.3.0","Release notes for v0.4.0","SaltProc API","saltproc","saltproc package","saltproc.app module","saltproc.depcode module","saltproc.materialflow module","saltproc.process module","saltproc.reactor module","saltproc.separator module","saltproc.simulation module","saltproc.sparger module","saltproc.tests package","saltproc.tests.test_app module","saltproc.tests.test_depcode module","saltproc.tests.test_materialflow module","saltproc.tests.test_process module","saltproc.tests.test_separator module","saltproc.tests.test_simulation module","saltproc.tests.test_sparger module","saltproc.version module"],titleterms:{"0":[8,9],"3":8,"4":9,"new":[7,8,9],The:5,acknowledg:3,api:[7,9,10],app:13,bug:[0,7,8,9],carlo:0,chang:[7,9],citat:3,code:0,commit:8,configur:4,content:[12,21],contribut:0,contributor:[7,8,9],cross:4,depcod:14,depend:[7,9],develop:[0,1],discuss:0,doc:0,document:3,environ:0,exampl:2,featur:[0,7,8,9],fix:[7,8,9],flake8:0,futur:5,get:3,guid:1,help:0,how:5,indic:3,instal:4,instruct:0,licens:3,list:8,materialflow:15,meta:0,modul:[12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],mont:0,more:0,note:[6,7,8,9,18,20],overview:5,packag:[12,21],process:16,pull:0,python:[7,9],reactor:17,refer:[18,20],releas:[6,7,8,9],report:0,request:0,review:[7,9],run:0,s:1,saltproc:[3,5,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],script:[7,9],section:4,separ:18,serpent:0,set:0,setup:0,simul:19,sparger:20,style:0,submodul:[12,21],subpackag:12,summari:[7,9],tabl:3,test:[0,4,21,22,23,24,25,26,27,28],test_app:22,test_depcod:23,test_materialflow:24,test_process:25,test_separ:26,test_simul:27,test_sparg:28,thank:0,touch:3,up:0,updat:5,v0:[8,9],version:29,vx:7,work:5,x:7,your:0}})