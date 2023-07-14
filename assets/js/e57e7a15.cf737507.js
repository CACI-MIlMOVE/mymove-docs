"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[9153],{65174:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));a(8209);const i={},r="Test Data Generator",s={unversionedId:"about/development/test-data-generator",id:"about/development/test-data-generator",title:"Test Data Generator",description:"When creating new features, it is helpful to have sample data for the feature to interact with. The TSP Award Queue is an example of that--it matches shipments to TSPs, and it's hard to tell if it's working without some shipments and TSPs in the database!",source:"@site/docs/about/development/test-data-generator.md",sourceDirName:"about/development",slug:"/about/development/test-data-generator",permalink:"/mymove-docs/docs/about/development/test-data-generator",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/about/development/test-data-generator.md",tags:[],version:"current",frontMatter:{},sidebar:"aboutSidebar",previous:{title:"Storybook",permalink:"/mymove-docs/docs/about/development/storybook"},next:{title:"Testing",permalink:"/mymove-docs/docs/about/development/testing"}},l={},d=[],m={toc:d},u="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"test-data-generator"},"Test Data Generator"),(0,o.kt)("p",null,"When creating new features, it is helpful to have sample data for the feature to interact with. The TSP Award Queue is an example of that--it matches shipments to TSPs, and it's hard to tell if it's working without some shipments and TSPs in the database!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"make bin/generate-test-data")," will build the fake data generator binary"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'bin/generate-test-data --named-scenario="dev_seed"')," will populate the development database with a handful of users in various stages of progress along the flow. The emails are named accordingly (see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/blob/main/pkg/testdatagen/scenario/devseed.go"},(0,o.kt)("inlineCode",{parentName:"a"},"devseed.go")),"). Alternatively, run ",(0,o.kt)("inlineCode",{parentName:"li"},"make db_dev_e2e_populate")," to reset your db and populate it."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bin/generate-test-data")," will run binary and create a preconfigured set of test data. To determine the data scenario you'd like to use, check out scenarios in the ",(0,o.kt)("inlineCode",{parentName:"li"},"testdatagen")," package. Each scenario contains a description of what data will be created when the scenario is run. Pass the scenario in as a flag to the generate-test-data function. A sample command: ",(0,o.kt)("inlineCode",{parentName:"li"},"./bin/generate-test-data --scenario=2"),".")),(0,o.kt)("p",null,"There is also a package (",(0,o.kt)("inlineCode",{parentName:"p"},"/pkg/testdatagen"),") that can be imported to create arbitrary test data. This could be used in tests, so as not to duplicate functionality."),(0,o.kt)("p",null,"Currently, scenarios have the following numbers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--scenario=1")," for Award Queue Scenario 1"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--scenario=2")," for Award Queue Scenario 2"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--scenario=3")," for Duty Station Scenario"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--scenario=4")," for PPM or PPM SIT Estimate Scenario (can also use Rate Engine Scenarios for Estimates)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--scenario=5")," for Rate Engine Scenario 1"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--scenario=6")," for Rate Engine Scenario 2"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--scenario=7")," for TSP test data")))}p.isMDXComponent=!0}}]);