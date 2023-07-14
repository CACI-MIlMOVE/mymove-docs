"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[410],{78698:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>m});var o=a(87462),r=(a(67294),a(3905));a(8209);const n={title:"0009 Generate forms from swagger definitions of payload"},i="Generate forms from swagger definitions of payload",s={unversionedId:"adrs/form-creation-from-swagger",id:"adrs/form-creation-from-swagger",title:"0009 Generate forms from swagger definitions of payload",description:"User Story: #154407746",source:"@site/docs/adrs/0009-form-creation-from-swagger.md",sourceDirName:"adrs",slug:"/adrs/form-creation-from-swagger",permalink:"/mymove-docs/docs/adrs/form-creation-from-swagger",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0009-form-creation-from-swagger.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"0009 Generate forms from swagger definitions of payload"},sidebar:"adrsSidebar",previous:{title:"0008 Use go-swagger To Route, Parse, And Validate API Endpoints",permalink:"/mymove-docs/docs/adrs/go-swagger"},next:{title:"0010 Isolate Test Access to Database",permalink:"/mymove-docs/docs/adrs/isolate-test-access-to-database"}},l={},m=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives  optional ",id:"pros-and-cons-of-the-alternatives--optional-",level:2},{value:"<em>alternative 1</em>",id:"alternative-1",level:3},{value:"Uniforms",id:"uniforms",level:3},{value:"react-jsonschema-form",id:"react-jsonschema-form",level:3}],d={toc:m},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"generate-forms-from-swagger-definitions-of-payload"},"Generate forms from swagger definitions of payload"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"User Story:")," #154407746"),(0,r.kt)("p",null,"For the first phase development we wanted to create very basic forms to enter data for a model that matches the printed forms 1299, 1797, and 2278. The first of these had many fields and so we decided that it would be nice if we could generate the view based on the swagger model definition and potentially another source of data for UI specific information (such as grouping). (Manually generating this form would be error-prone and tedious.) There are a number of libraries out there that support doing this with JSON Schema (of which Swagger is a subset), but it might be better for us to roll our own so that we can support ",(0,r.kt)("inlineCode",{parentName:"p"},"redux-forms")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"uswds"),"."),(0,r.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In house form creation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vazco/uniforms"},"Uniforms")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mozilla-services/react-jsonschema-form"},"react-jsonschema-form"))),(0,r.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In House"),(0,r.kt)("li",{parentName:"ul"},"The other libraries were not easy to integrate with ",(0,r.kt)("inlineCode",{parentName:"li"},"redux-forms")," and expected other styling libraries (such as bootstrap)."),(0,r.kt)("li",{parentName:"ul"},"This will require more maintenance on our part and we may want to reconsider should our needs become more advanced.")),(0,r.kt)("h2",{id:"pros-and-cons-of-the-alternatives--optional-"},"Pros and Cons of the Alternatives "),(0,r.kt)("h3",{id:"alternative-1"},(0,r.kt)("em",{parentName:"h3"},"[alternative 1]")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," complete control over look and feel"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," current implementation is very simple"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-")," we may need more advanced features for future work")),(0,r.kt)("h3",{id:"uniforms"},"Uniforms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," support for many schema formats"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," under active development"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," has rich language"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-")," built for meteor and may have features we don't need")),(0,r.kt)("h3",{id:"react-jsonschema-form"},"react-jsonschema-form"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," nice addition of separate schema for UI specific concerns"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," under active development"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-")," use of bootstrap did not play well with USWDS in exploration")))}u.isMDXComponent=!0}}]);