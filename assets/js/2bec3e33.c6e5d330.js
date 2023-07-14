"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[6929],{12998:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var r=a(87462),i=(a(67294),a(3905));a(8209);const n={sidebar_position:3},s="Structure",o={unversionedId:"backend/guides/service-objects/structure",id:"backend/guides/service-objects/structure",title:"Structure",description:"This page will primarily cover how service objects are structured and a general overview of what each file is.",source:"@site/docs/backend/guides/service-objects/structure.md",sourceDirName:"backend/guides/service-objects",slug:"/backend/guides/service-objects/structure",permalink:"/mymove-docs/docs/backend/guides/service-objects/structure",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/guides/service-objects/structure.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"backendSidebar",previous:{title:"Getting Started",permalink:"/mymove-docs/docs/backend/guides/service-objects/getting-started"},next:{title:"Set Up Service Subpackage and Interface",permalink:"/mymove-docs/docs/backend/guides/service-objects/set-up-service-subpackage-and-interface"}},c={},l=[{value:"Data/Utility Service Objects High Level Structure",id:"datautility-service-objects-high-level-structure",level:2},{value:"Data Service Objects High Level Structure",id:"data-service-objects-high-level-structure",level:3},{value:"Utility Service Objects High Level Structure",id:"utility-service-objects-high-level-structure",level:3},{value:"Orchestrator Service Objects High Level Structure",id:"orchestrator-service-objects-high-level-structure",level:2},{value:"Service Object Subpackage Structure",id:"service-object-subpackage-structure",level:2},{value:"Service Object Naming",id:"service-object-naming",level:3}],p={toc:l},h="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(h,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"structure"},"Structure"),(0,i.kt)("p",null,"This page will primarily cover how service objects are structured and a general overview of what each file is.\nDetails for actually working with the different files will be covered in the next pages."),(0,i.kt)("p",null,"All types of service objects should be in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/tree/main/pkg/services"},(0,i.kt)("inlineCode",{parentName:"a"},"mymove")," ",(0,i.kt)("inlineCode",{parentName:"a"},"./pkg/services"))," directory, but their\nstructure within there will vary based on the type of service object you're working with."),(0,i.kt)("p",null,"Our service objects are composed of an interface that is defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"services")," package as well as a subpackage\nthat contains the implementation logic, validation logic, and tests. This pattern is useful to avoid import cycles.\nIt also keeps a given service's functionality grouped together in a subpackage with ",(0,i.kt)("inlineCode",{parentName:"p"},"services")," without having to put\nall our code in one huge pile. Finally, interfaces are the only objects in Go that can be effectively mocked, so\nthis is advantageous for our testing."),(0,i.kt)("admonition",{title:"Stuttering",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"You might notice that there's a lot of redundancy in our naming scheme. This is commonly referred to as\n",(0,i.kt)("strong",{parentName:"p"},'"stuttering"')," and is considered an anti-pattern in most languages and frameworks."),(0,i.kt)("p",{parentName:"admonition"},"We may at some point try to move away from this convention, but it is preferable to be consistent with our\nless-than-ideal naming scheme for now.")),(0,i.kt)("h2",{id:"datautility-service-objects-high-level-structure"},"Data/Utility Service Objects High Level Structure"),(0,i.kt)("p",null,"Data and utility service objects follow the same structure pattern, with just naming being different, so they'll be\ncovered together at first."),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"mymove")," ",(0,i.kt)("inlineCode",{parentName:"p"},"./pkg/services")," directory you should see several subdirectories (",(0,i.kt)("inlineCode",{parentName:"p"},"Go")," subpackages) and singular\n",(0,i.kt)("inlineCode",{parentName:"p"},"Go")," files at the end. The names of these solo ",(0,i.kt)("inlineCode",{parentName:"p"},"Go")," files should match that of a directory above. So for our example\nof having service objects for our ",(0,i.kt)("inlineCode",{parentName:"p"},"Pet")," model, we'd have a subpackage ",(0,i.kt)("inlineCode",{parentName:"p"},"pet")," and a corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"pet.go")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:"{5,8}","{5,8}":!0},"mymove/\n\u251c\u2500\u2500 pkg/\n\u2502   \u251c\u2500\u2500 services/\n\u2502   \u2502   \u251c\u2500\u2500 ...\n\u2502   \u2502   \u251c\u2500\u2500 pet/       <- a subpackage for the set of service objects related to the `Pet` model\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 ...\n\u2502   \u2502   \u251c\u2500\u2500 ...\n\u2502   \u2502   \u251c\u2500\u2500 pet.go     <- the interface in the services package for the `Pet` data service objects\n\u2502   \u2502   \u251c\u2500\u2500 ...\n")),(0,i.kt)("h3",{id:"data-service-objects-high-level-structure"},"Data Service Objects High Level Structure"),(0,i.kt)("p",null,"The names of the file + subpackage should match the database table name, but in singular form. E.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"pet")," service\nobject for the ",(0,i.kt)("inlineCode",{parentName:"p"},"pet")," table."),(0,i.kt)("p",null,"Each of these subpackages handles the operations for one particular data model. This helps us keep track of our\ndatabase interactions and allows for different parts of the codebase to interact with models while re-using the same\nvalidation and functionality."),(0,i.kt)("h3",{id:"utility-service-objects-high-level-structure"},"Utility Service Objects High Level Structure"),(0,i.kt)("p",null,"The names of the file + subpackage should match the function the service object serves, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch"),"."),(0,i.kt)("p",null,"Each of these subpackages should focus on the functionality they're meant to serve. It helps us have logic we can\nre-use across service objects."),(0,i.kt)("h2",{id:"orchestrator-service-objects-high-level-structure"},"Orchestrator Service Objects High Level Structure"),(0,i.kt)("p",null,"Orchestrator service objects are similar overall to the other types of service objects, but the top level structure\nand naming are slightly different. "),(0,i.kt)("p",null,"We have an ",(0,i.kt)("inlineCode",{parentName:"p"},"orchestrators")," subpackage inside ",(0,i.kt)("inlineCode",{parentName:"p"},"services")," that holds the subpackages for each orchestrator. This helps\nus separate out the ",(0,i.kt)("inlineCode",{parentName:"p"},"orchestrators"),' from the other more "common" service objects (i.e. pre-existing service object\ntypes that existed before ',(0,i.kt)("inlineCode",{parentName:"p"},"orchestrators")," were added). "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:"{5}","{5}":!0},"mymove/\n\u251c\u2500\u2500 pkg/\n\u2502   \u251c\u2500\u2500 services/\n\u2502   \u2502   \u251c\u2500\u2500 ...\n\u2502   \u2502   \u251c\u2500\u2500 orchestrators/            <- subpackage that contains each of the orchestrator subpackages\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 ...\n\u2502   \u2502   \u251c\u2500\u2500 ...\n")),(0,i.kt)("p",null,"As for the corresponding interface in the ",(0,i.kt)("inlineCode",{parentName:"p"},"services")," package, we use a standalone file with the orchestrator name\nfollowed by ",(0,i.kt)("inlineCode",{parentName:"p"},"_orchestrator")," to identify it more easily as an orchestrator."),(0,i.kt)("p",null,"So for our example, we have a regular set of data-type service objects for our ",(0,i.kt)("inlineCode",{parentName:"p"},"Pet")," model, but we'll also have\norchestrators for pets that will handle calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"Cat")," service objects as needed. The pet orchestrator will look\nlike this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:"{8,9,17}","{8,9,17}":!0},"mymove/\n\u251c\u2500\u2500 pkg/\n\u2502   \u251c\u2500\u2500 services/\n\u2502   \u2502   \u251c\u2500\u2500 ...\n\u2502   \u2502   \u251c\u2500\u2500 cat/                      <- subpackage for `Cat` data service objects \n\u2502   \u2502   \u2502   \u251c\u2500\u2500 ...\n\u2502   \u2502   \u251c\u2500\u2500 ...\n\u2502   \u2502   \u251c\u2500\u2500 orchestrators/            <- subpackage that contains each of the orchestrator subpackages\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 pet/                  <- subpackage a set of orchestrators related to pets\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 ...               <- implementation of orchestrator service objects\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 ...\n\u2502   \u2502   \u251c\u2500\u2500 pet/                      <- subpackage for `Pet` data service objects\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 ...\n\u2502   \u2502   \u251c\u2500\u2500 ...\n\u2502   \u2502   \u251c\u2500\u2500 cat.go\n\u2502   \u2502   \u251c\u2500\u2500 pet.go\n\u2502   \u2502   \u251c\u2500\u2500 pet_orchestrator.go       <- the interface in the services package for a single set of orchestrators\n\u2502   \u2502   \u251c\u2500\u2500 ...\n")),(0,i.kt)("p",null,"So in our example above, we have an orchestrator service subpackage called ",(0,i.kt)("inlineCode",{parentName:"p"},"pet")," that lives in the ",(0,i.kt)("inlineCode",{parentName:"p"},"orchestrators"),"\nsubpackage. This subpackage will contain all the implementation files for the ",(0,i.kt)("inlineCode",{parentName:"p"},"orchestrator"),". It has a corresponding\ninterface file called ",(0,i.kt)("inlineCode",{parentName:"p"},"pet_orchestrator.go")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"services")," package."),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"services/orchestrators/pet/")," set of service objects is separate and different from the\n",(0,i.kt)("inlineCode",{parentName:"p"},"services/pet/")," service objects. The ",(0,i.kt)("inlineCode",{parentName:"p"},"services/pet/")," service objects are for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Pet")," model data service objects,\nwhile the ",(0,i.kt)("inlineCode",{parentName:"p"},"orchestrators")," service objects will be the ones that orchestrate the ",(0,i.kt)("inlineCode",{parentName:"p"},"Pet")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Cat")," service objects.\nThis makes it easier to re-use the logic as needed, e.g. allowing both the internal and ghc APIs to interact with\npets similarly.  "),(0,i.kt)("h2",{id:"service-object-subpackage-structure"},"Service Object Subpackage Structure"),(0,i.kt)("p",null,"Below is the expected structure of a subpackage. For this diagram, we're using the ",(0,i.kt)("inlineCode",{parentName:"p"},"pet"),", but other\ntypes should be similar. The only difference will be naming. "),(0,i.kt)("p",null,"In the sections below we'll get into naming a bit, but the difference to know is that when we say something should be\nnamed ",(0,i.kt)("inlineCode",{parentName:"p"},"<service_object_name>_whatever"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"service_object_name")," will be the full name for data and util type service\nobjects, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"pet_whatever"),", while for orchestrator type service objects, the ",(0,i.kt)("inlineCode",{parentName:"p"},"service_object_name")," will be\nshortened a bit so instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"pet_orchestrator_whatever"),", it will be ",(0,i.kt)("inlineCode",{parentName:"p"},"pet_whatever"),". This helps cut down a bit on\nthe ",(0,i.kt)("strong",{parentName:"p"},"stuttering"),", at least with respect to the word ",(0,i.kt)("inlineCode",{parentName:"p"},"orchestrator"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"mymove/\n\u251c\u2500\u2500 pkg/\n\u2502   \u251c\u2500\u2500 services/\n\u2502   \u2502   \u251c\u2500\u2500 pet                             <- subpackage for a set of service objects\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 pet_creator.go              <- service object, `PetCreator`, that handles creating pets\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 pet_creator_test.go         <- tests for `PetCreator` service object\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 pet_service_test.go         <- boilerplate testing suite setup\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 pet_updater.go              <- service object, `PetUpdater`, that handles updating pets\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 pet_updater_test.go         <- tests for `PetUpdater` service object\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 rules.go                    <- contains functions that check data to ensure it is valid\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 rules_test.go               <- tests for rules.go\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 validation.go               <- boilerplate for validating data; uses functions defined in rules.go\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 validation_test.go          <- tests for boilerplate\n\u2502   \u2502   \u251c\u2500\u2500 ...\n")),(0,i.kt)("p",null,"In the example above, we have a few files that should be common across service objects:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"rules.go"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"validation.go"),", and their test files are related to data validation. We will go more in depth on\nthese files in a later section: ",(0,i.kt)("a",{parentName:"li",href:"/docs/backend/guides/service-objects/validation"},"Service Validation"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"pet_service_test.go")," file is boilerplate for setting up the testing suite for the package and should be\nnamed something like ",(0,i.kt)("inlineCode",{parentName:"li"},"<service_object_name>_service_test.go"))),(0,i.kt)("h3",{id:"service-object-naming"},"Service Object Naming"),(0,i.kt)("p",null,"The rest of the files are implementing service objects. There should be a file that implements a service object and\nthe corresponding file containing the tests. So in the example above, we have a cat creator service object defined\nin ",(0,i.kt)("inlineCode",{parentName:"p"},"cat_creator.go")," and the corresponding tests in ",(0,i.kt)("inlineCode",{parentName:"p"},"cat_creator_test.go"),". We name these files based on the main\n",(0,i.kt)("strong",{parentName:"p"},"action")," that the service object will perform so in this example, it ",(0,i.kt)("strong",{parentName:"p"},"creates")," pets, so it's a ",(0,i.kt)("strong",{parentName:"p"},"creator"),".\nThese names will also be reflected in the interfaces we define for the service objects."))}d.isMDXComponent=!0}}]);