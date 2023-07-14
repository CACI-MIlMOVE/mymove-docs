"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[7919],{49950:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));a(8209);const o={title:"0024 Model Authorization and Handler Design",description:"Multiple decision outcomes"},r="Model Authorization and Handler Design",l={unversionedId:"adrs/model-authorization-and-handler-design",id:"adrs/model-authorization-and-handler-design",title:"0024 Model Authorization and Handler Design",description:"Multiple decision outcomes",source:"@site/docs/adrs/0024-model-authorization-and-handler-design.md",sourceDirName:"adrs",slug:"/adrs/model-authorization-and-handler-design",permalink:"/mymove-docs/docs/adrs/model-authorization-and-handler-design",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0024-model-authorization-and-handler-design.md",tags:[],version:"current",sidebarPosition:24,frontMatter:{title:"0024 Model Authorization and Handler Design",description:"Multiple decision outcomes"},sidebar:"adrsSidebar",previous:{title:"0023 Representing Dollar Values in Go and the Database",permalink:"/mymove-docs/docs/adrs/representing-dollar-values"},next:{title:"0025 Client Side Feature Flags using Custom JavaScript",permalink:"/mymove-docs/docs/adrs/client-side-feature-flags"}},d={},s=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons",id:"pros-and-cons",level:2},{value:"Validation happens in the models",id:"validation-happens-in-the-models",level:3},{value:"Validation happens in per-base-model middleware",id:"validation-happens-in-per-base-model-middleware",level:3},{value:"Validation happens in a generalized middleware",id:"validation-happens-in-a-generalized-middleware",level:3}],m={toc:s},h="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(h,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"model-authorization-and-handler-design"},"Model Authorization and Handler Design"),(0,i.kt)("p",null,"Users should only have access to records that they are authorized to see. Its important that our system for implementing that constraint is robust and easy to use. In fact, it's important that the system be difficult to misuse and to encourage handlers that correctly protect our data."),(0,i.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,i.kt)("p",null,"We conducted a white-boarding session to demonstrate three different options:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"All validation happens in the models. Handlers call model functions to fetch and create models that are scoped to the current user.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Validation happens in per-base-model middleware (e.g. everything that is hung off a move would share one piece of middleware) passing the validated model into the handler and rejecting unauthorized requests.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A generalized middleware that uses reflection to reject unauthorized requests before the handler gets run."))),(0,i.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Handlers get models through fetchers that accept an authenticated user, fetchers handle authorization"),(0,i.kt)("li",{parentName:"ul"},"Fetchers return generic errors, handlers have helper function to convert generic errors into responses"),(0,i.kt)("li",{parentName:"ul"},"Creator functions are hung from parent models, if available, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"serviceMember.CreateBackupContact()"))),(0,i.kt)("h2",{id:"pros-and-cons"},"Pros and Cons"),(0,i.kt)("h3",{id:"validation-happens-in-the-models"},"Validation happens in the models"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," No additional middleware is needed, we are on rails with go-swagger"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," These patterns can be used no matter where in the stack models are needed. (e.g. the rate engine, or any other entry point besides handlers)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," A handler could ignore those patterns and access data incorrectly")),(0,i.kt)("h3",{id:"validation-happens-in-per-base-model-middleware"},"Validation happens in per-base-model middleware"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Handlers are only run when access is allowed, it's much more difficult for a handler to access data it is not supposed to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Handlers are slimmer and their requirements are encoded in their arguments"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," It's difficult to know how to implement this with go-swagger"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," data accessors other than handlers have to re-implement this.")),(0,i.kt)("h3",{id:"validation-happens-in-a-generalized-middleware"},"Validation happens in a generalized middleware"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," We could write this once and never have to update it"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Putting the fetched models into the context is a common go pattern"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," It might be complex to implement, and reflection is always worrisome"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," data accessors other than handlers have to re-implement this.")))}p.isMDXComponent=!0}}]);