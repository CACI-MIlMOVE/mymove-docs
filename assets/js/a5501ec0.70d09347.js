"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[7600],{55008:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=o(87462),a=(o(67294),o(3905));o(8209);const i={sidebar_position:6},s="Working With Load Tests",l={unversionedId:"tools/locust/working-with-load-tests",id:"tools/locust/working-with-load-tests",title:"Working With Load Tests",description:"There are two main things to keep in mind when it comes to load testing with locust and how we have our load tests",source:"@site/docs/tools/locust/working-with-load-tests.md",sourceDirName:"tools/locust",slug:"/tools/locust/working-with-load-tests",permalink:"/mymove-docs/docs/tools/locust/working-with-load-tests",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/tools/locust/working-with-load-tests.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"toolsSidebar",previous:{title:"Running Locust from AWS",permalink:"/mymove-docs/docs/tools/locust/running-locust-from-aws"},next:{title:"Locustfile",permalink:"/mymove-docs/docs/tools/locust/locustfile"}},r={},d=[],u={toc:d},p="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"working-with-load-tests"},"Working With Load Tests"),(0,a.kt)("p",null,"There are two main things to keep in mind when it comes to load testing with ",(0,a.kt)("inlineCode",{parentName:"p"},"locust")," and how we have our load tests\nstructured. In order to run a load test, you need:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a ",(0,a.kt)("inlineCode",{parentName:"li"},"locustfile")," which serves as the entry point and defines your ",(0,a.kt)("inlineCode",{parentName:"li"},"User")," classes."),(0,a.kt)("li",{parentName:"ul"},"a task set file which serves to define ",(0,a.kt)("inlineCode",{parentName:"li"},"TaskSet"),"s, which are the work the users should perform.")),(0,a.kt)("p",null,"The docs below will go over each of these so that you can understand our existing files and either create more or edit\nthem as needed."),(0,a.kt)("p",null,"One thing to note is that ",(0,a.kt)("inlineCode",{parentName:"p"},"locust")," has a concept of ",(0,a.kt)("inlineCode",{parentName:"p"},"host")," that differs a bit from how we use it. ",(0,a.kt)("inlineCode",{parentName:"p"},"locust")," defaults to\nusing ",(0,a.kt)("inlineCode",{parentName:"p"},"host")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"User"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"TaskSet")," context as a base domain to then add on to when you make requests, but because we\nhave a need to make requests outside the ",(0,a.kt)("inlineCode",{parentName:"p"},"User"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"TaskSet")," context, we've taken a slightly different approach."),(0,a.kt)("p",null,"We use ",(0,a.kt)("inlineCode",{parentName:"p"},"locust"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"host")," value as a key to know which ",(0,a.kt)("inlineCode",{parentName:"p"},"mymove")," server we want to target (mentioned in the\n",(0,a.kt)("a",{parentName:"p",href:"./running-locust-locally"},"Running Locust Locally")," section). We use ",(0,a.kt)("inlineCode",{parentName:"p"},"locust"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"host")," value combined with an ",(0,a.kt)("inlineCode",{parentName:"p"},"Enum"),"\ncalled ",(0,a.kt)("inlineCode",{parentName:"p"},"MilMoveEnv")," to know what environment we're targeting. Then we combine it with a helper class called\n",(0,a.kt)("inlineCode",{parentName:"p"},"MilMoveRequestPreparer")," which helps us build proper URLs and enables us to make requests more easily in and out of the\n",(0,a.kt)("inlineCode",{parentName:"p"},"User"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"TaskSet")," context."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./locustfile"},"Locustfile")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./taskset"},"TaskSet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./adding-or-editing-load-tests"},"Adding or Editing Load Tests")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./fake-data-generation"},"Fake Data Generation"))))}m.isMDXComponent=!0}}]);