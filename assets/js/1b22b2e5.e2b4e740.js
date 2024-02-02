"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[8942],{93548:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(45072),i=(a(11504),a(95788));a(10880);const o={title:"0020 Using Swagger to manage server route authentication",description:"Stick with what we have"},r="Using Swagger to manage server route authentication",l={unversionedId:"adrs/swagger-auth",id:"adrs/swagger-auth",title:"0020 Using Swagger to manage server route authentication",description:"Stick with what we have",source:"@site/docs/adrs/0020-swagger-auth.md",sourceDirName:"adrs",slug:"/adrs/swagger-auth",permalink:"/mymove-docs/docs/adrs/swagger-auth",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/adrs/0020-swagger-auth.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"0020 Using Swagger to manage server route authentication",description:"Stick with what we have"},sidebar:"adrsSidebar",previous:{title:"0019 Range Slider React Component",permalink:"/mymove-docs/docs/adrs/client-rangeslider"},next:{title:"0021 Temporary use and plan for expunging Social Security Numbers in the prototype",permalink:"/mymove-docs/docs/adrs/ssn-use"}},s={},u=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives  optional ",id:"pros-and-cons-of-the-alternatives--optional-",level:2},{value:"<em>Stick with what we have</em>",id:"stick-with-what-we-have",level:3},{value:"<em>Implement one of the security methods as defined in OpenAPI 2.0</em>",id:"implement-one-of-the-security-methods-as-defined-in-openapi-20",level:3},{value:"<em>Upgrade to OpenAPI 3.0</em>",id:"upgrade-to-openapi-30",level:3}],m={toc:u},g="wrapper";function d(e){let{components:t,...a}=e;return(0,i.yg)(g,(0,n.c)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"using-swagger-to-manage-server-route-authentication"},"Using Swagger to manage server route authentication"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"User Story:")," ",(0,i.yg)("a",{parentName:"p",href:"https://www.pivotaltracker.com/story/show/155131958"},"155131958")),(0,i.yg)("p",null,"Swagger and OpenAPI allow for defining route security and authentication through the same YAML file we use to define the rest of our API. Doing so would enhance Swagger's usage benefit of having information about our API be in a single centralized place, and would also allow us to possibly rely on tooling to generate some amount of authentication-related code for us."),(0,i.yg)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("em",{parentName:"li"},"Stick with what we have")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("em",{parentName:"li"},"Implement one of the security methods as defined in OpenAPI 2.0")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("em",{parentName:"li"},"Upgrade to OpenAPI 3.0"))),(0,i.yg)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Chosen Alternative: ",(0,i.yg)("em",{parentName:"li"},"Stick with what we have")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("em",{parentName:"li"},"After doing some research, trying to implement route security through OpenAPI version 2 or 3 came with too many consequences and the benefits weren't valuable enough to be worth it. OpenAPI 2.0 only supports a few authentication schemes: basic (user/pass), API key, and OAuth 2.0. OpenAPI 3.0 supports bearer auth and cookie auth, but is unsupported by go-swagger."))),(0,i.yg)("h2",{id:"pros-and-cons-of-the-alternatives--optional-"},"Pros and Cons of the Alternatives "),(0,i.yg)("h3",{id:"stick-with-what-we-have"},(0,i.yg)("em",{parentName:"h3"},"Stick with what we have")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"+")," ",(0,i.yg)("em",{parentName:"li"},"Doesn't require shoehorning into some other auth model")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"+")," ",(0,i.yg)("em",{parentName:"li"},"Still lets us control route security, just not as defined in Swagger YAML files")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"-")," ",(0,i.yg)("em",{parentName:"li"},"Route security isn't centralized with other API descriptors")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"-")," ",(0,i.yg)("em",{parentName:"li"},"Need to do all auth middleware manually"))),(0,i.yg)("h3",{id:"implement-one-of-the-security-methods-as-defined-in-openapi-20"},(0,i.yg)("em",{parentName:"h3"},"Implement one of the security methods as defined in OpenAPI 2.0")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"+")," ",(0,i.yg)("em",{parentName:"li"},"Get to define route security in our Swagger YAML file")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"+")," ",(0,i.yg)("em",{parentName:"li"},"Some amount of auth checking is taken care of by go-swagger")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"-")," ",(0,i.yg)("em",{parentName:"li"},"Doesn't directly support our current JWT auth system, would have to jury rig around ",(0,i.yg)("inlineCode",{parentName:"em"},"apiKey"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"-")," ",(0,i.yg)("em",{parentName:"li"},"Much of the code around token creation/renewal would still be manual"))),(0,i.yg)("h3",{id:"upgrade-to-openapi-30"},(0,i.yg)("em",{parentName:"h3"},"Upgrade to OpenAPI 3.0")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"+")," ",(0,i.yg)("em",{parentName:"li"},"Can define security in swagger without any fundamental changes to our current system")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"------")," ",(0,i.yg)("em",{parentName:"li"},"go-swagger, a library we rely on heavily, would be unusable"))))}d.isMDXComponent=!0}}]);