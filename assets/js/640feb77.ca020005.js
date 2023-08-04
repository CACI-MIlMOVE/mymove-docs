"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[0],{62077:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=o(87462),n=(o(67294),o(3905));o(8209);const a={sidebar_position:1},i="Locust",l={unversionedId:"tools/locust/locust",id:"tools/locust/locust",title:"Locust",description:"Overview",source:"@site/docs/tools/locust/locust.md",sourceDirName:"tools/locust",slug:"/tools/locust/",permalink:"/mymove-docs/docs/tools/locust/",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/tools/locust/locust.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"toolsSidebar",previous:{title:"Redocusaurus",permalink:"/mymove-docs/docs/tools/docusaurus/redocusaurus"},next:{title:"Running Load Tests",permalink:"/mymove-docs/docs/tools/locust/running-load-tests"}},r={},d=[{value:"Overview",id:"overview",level:2},{value:"How It Works",id:"how-it-works",level:2},{value:"Terminology",id:"terminology",level:2},{value:"Locustfile",id:"locustfile",level:3},{value:"User",id:"user",level:3},{value:"Task",id:"task",level:3},{value:"TaskSet",id:"taskset",level:3},{value:"Tag",id:"tag",level:3},{value:"References",id:"references",level:2}],u={toc:d},h="wrapper";function c(e){let{components:t,...o}=e;return(0,n.kt)(h,(0,s.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"locust"},"Locust"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"We use a tool called ",(0,n.kt)("a",{parentName:"p",href:"https://docs.locust.io/en/stable/"},"locust")," to load test the MilMove app. This enables us to gather\ndata about responses times, finding breakpoints, and assessing the overall health of the system."),(0,n.kt)("p",null,"There are more ",(0,n.kt)("a",{parentName:"p",href:"https://dp3.atlassian.net/wiki/spaces/MT/pages/1439137811/Load+Testing"},"docs on load testing available in confluence"),".\nThe docs there cover things like deploying to AWS, looking at logs in AWS, restoring the AWS database, and locust best\npractices. "),(0,n.kt)("p",null,"We also have a recording reviewing how to run load tests, working with load tests, etc. It's available in our Google\nDrive: ",(0,n.kt)("a",{parentName:"p",href:"https://drive.google.com/drive/folders/1xaxzAvnyBRfg4ZLVH1mLVvhuTrjfPYjQ"},"Load Testing 2022-01-20 Recording"),"."),(0,n.kt)("h2",{id:"how-it-works"},"How It Works"),(0,n.kt)("p",null,"Locust allows us to write the logic for our load tests using python code. We define the types of users we want to use in\nour load tests, the tasks they should perform, and whether a task's outcome should be considered successful or not."),(0,n.kt)("p",null,"When you run ",(0,n.kt)("inlineCode",{parentName:"p"},"locust"),", you will need to define how total many users you want locust to spawn for this load test run, the\nrate at which they should spawn, and which server you want to target. This can be done either via the command line or\nthe web-based UI. "),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"./running-load-tests"},"Running Load Tests")," for more information on running ",(0,n.kt)("inlineCode",{parentName:"p"},"locust")," and\n",(0,n.kt)("a",{parentName:"p",href:"./working-with-load-tests"},"Working With Load Tests")," for more information on working on the codebase."),(0,n.kt)("p",null,"The existing load tests only interact with APIs exposed by the MilMove app (a.k.a. the ",(0,n.kt)("inlineCode",{parentName:"p"},"mymove")," server, both are used in\nthese docs). We are not testing the front-end (client/browser) as of this writing."),(0,n.kt)("h2",{id:"terminology"},"Terminology"),(0,n.kt)("h3",{id:"locustfile"},"Locustfile"),(0,n.kt)("p",null,"Locust uses files called ",(0,n.kt)("inlineCode",{parentName:"p"},"locustfiles")," as the entry point for your load tests. They are python files that define some\nhigher level things like the types of users you want to run, custom arguments for the command line, and functions that\nyou want to run at different points in the ",(0,n.kt)("inlineCode",{parentName:"p"},"locust")," lifecycle. For more information on ",(0,n.kt)("inlineCode",{parentName:"p"},"locustfiles")," and what they\nshould look like, see the ",(0,n.kt)("a",{parentName:"p",href:"./locustfile"},"Locustfile")," page."),(0,n.kt)("h3",{id:"user"},"User"),(0,n.kt)("p",null,"Users in locust are defined by classes that define the attributes that distinguish users form each other, e.g. what\ntasks they should perform."),(0,n.kt)("h3",{id:"task"},"Task"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Tasks")," are the actions that you want the load test user to take. These can define things like making calls to different\nAPI endpoints to do things like retrieve data, make changes, etc. These can be defined at a user level, or at a\n",(0,n.kt)("inlineCode",{parentName:"p"},"TaskSet")," level, with some slight differences between how tasks are defined in each context."),(0,n.kt)("h3",{id:"taskset"},"TaskSet"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"TaskSets")," are collections of ",(0,n.kt)("inlineCode",{parentName:"p"},"tasks")," that a user can perform. For more information on ",(0,n.kt)("inlineCode",{parentName:"p"},"TaskSets")," and what they should\nlook like, see the ",(0,n.kt)("a",{parentName:"p",href:"./taskset"},"TaskSet")," page."),(0,n.kt)("h3",{id:"tag"},"Tag"),(0,n.kt)("p",null,'Tasks can be "tagged" with keywords that you can then use to only run load tests that match a given keyword, or set of\nkeywords. Alternatively, they can be used to exclude certain load tests from running based on their tags.'),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.locust.io/en/stable/index.html"},"Locust Documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/pull/1597"},"Original Load Testing PR"))))}c.isMDXComponent=!0}}]);