"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[2910],{26913:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=o(87462),t=(o(67294),o(3905));o(8209);const i={title:"0081 Use ASDF to Manage Node and Golang versions in Development"},s="Use ASDF to Manage Node and Golang versions in Development",l={unversionedId:"adrs/use-asdf-to-manage-node-and-golang-versions-in-development",id:"adrs/use-asdf-to-manage-node-and-golang-versions-in-development",title:"0081 Use ASDF to Manage Node and Golang versions in Development",description:"This ADR supersedes ADR-0046 and ADR-0056",source:"@site/docs/adrs/0081-use-asdf-to-manage-node-and-golang-versions-in-development.md",sourceDirName:"adrs",slug:"/adrs/use-asdf-to-manage-node-and-golang-versions-in-development",permalink:"/mymove-docs/docs/adrs/use-asdf-to-manage-node-and-golang-versions-in-development",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/adrs/0081-use-asdf-to-manage-node-and-golang-versions-in-development.md",tags:[],version:"current",sidebarPosition:81,frontMatter:{title:"0081 Use ASDF to Manage Node and Golang versions in Development"},sidebar:"adrsSidebar",previous:{title:"0080 API Versioning Code Organization",permalink:"/mymove-docs/docs/adrs/api-versioning-based-on-test-run"},next:{title:"0082 Use Flipt for Feature Flags",permalink:"/mymove-docs/docs/adrs/use-flipt-feature-flags"}},r={},d=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"Do nothing, keep using asdf for golang and nodenv for node",id:"do-nothing-keep-using-asdf-for-golang-and-nodenv-for-node",level:3},{value:"Use asdf to manage golang and node versions",id:"use-asdf-to-manage-golang-and-node-versions",level:3}],u={toc:d},g="wrapper";function m(e){let{components:n,...o}=e;return(0,t.kt)(g,(0,a.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"use-asdf-to-manage-node-and-golang-versions-in-development"},"Use ASDF to Manage Node and Golang versions in Development"),(0,t.kt)("admonition",{type:"info"},(0,t.kt)("p",{parentName:"admonition"},"This ADR supersedes ",(0,t.kt)("a",{parentName:"p",href:"/mymove-docs/docs/adrs/use-nodenv"},"ADR-0046")," and ",(0,t.kt)("a",{parentName:"p",href:"/mymove-docs/docs/adrs/use-asdf-to-manage-golang-versions-in-development"},"ADR-0056"))),(0,t.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Do nothing, keep using asdf for golang and nodenv for node"),(0,t.kt)("li",{parentName:"ul"},"Use asdf to manage golang and node versions")),(0,t.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Chosen Alternative: Use ",(0,t.kt)("a",{parentName:"li",href:"https://asdf-vm.com/"},"asdf")," to manage golang and node versions")),(0,t.kt)("p",null,"ADR-0056 notes that the original author would like to see asdf used for other tools (presumably such as node)"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Admittedly we are not yet taking advantage of ",(0,t.kt)("inlineCode",{parentName:"p"},"asdf")," for other tools, but I would like to see that happen.")),(0,t.kt)("p",null,"ADR-0056 also lists the following as a disadvantage of using asdf for golang and node:"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"installing node, yarn, or golang with asdf and another one of the similar tools can cause conflicts depending on which\nof the version manager tools is first in a particular path.")),(0,t.kt)("p",null,"This is actually an advantage of using asdf, since one of the difficulties of managing asdf ",(0,t.kt)("em",{parentName:"p"},"and")," node is the obfuscation\nof which version will be shimmed by which tool. Picking and using ",(0,t.kt)("em",{parentName:"p"},"one")," tool is the solution. Since asdf is already required\nfor managing go, and it is capable of managing node, it is the logical choice."),(0,t.kt)("p",null,'If you have a capable tool, Alton Brown would recommend throwing the redundant "unitasker" out:'),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"I have railed against unitaskers for 20 years."),(0,t.kt)("p",{parentName:"blockquote"},"I've come around to liking them as strategic gifts for people you don't like."),(0,t.kt)("ul",{parentName:"blockquote"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://www.npr.org/sections/thesalt/2015/12/23/460833325/the-unitasker-kitchen-gadgets-alton-brown-loves-to-loathe"},"Alton Brown on NPR's All Things Considered")))),(0,t.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,t.kt)("h3",{id:"do-nothing-keep-using-asdf-for-golang-and-nodenv-for-node"},"Do nothing, keep using asdf for golang and nodenv for node"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"+")," requires no effort or decision energy"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"+")," has no impact on day-to-day operations of any onboarded engineers"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"+")," has no chance of introducing new issues because no changes would be made"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"-")," keeps relatively higher cognitive load around tooling"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"-")," Truss seems to prefer asdf on newer projects, so engineers onboarding from another project in the future will likely have to juggle multiple node version managers"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"-")," Provides no incentive to revisit onboarding instructions and scripting, which is ",(0,t.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/pull/11053/files#r1261749313"},"currently outdated or over-engineered, even for existing installation of golang via asdf"))),(0,t.kt)("h3",{id:"use-asdf-to-manage-golang-and-node-versions"},"Use asdf to manage golang and node versions"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"+")," asdf is already used for managing golang, so all engineers are familiar with the tool and are using it today"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"+")," simplifies environment setup"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"+")," reduces the number of tools required to maintain the project"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"+")," can be rolled out such that engineers can continue using nodenv until they choose to switch"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"+")," switching from nodenv to asdf is trivial"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"+")," Truss seems to prefer asdf on newer projects, so engineers onboarding from another project in the future will not likely have to juggle multiple node version managers"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"-")," without proper socialization and documentation updates, could add confusion"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"-")," changes core tooling that engineers have likely been using for some time")))}m.isMDXComponent=!0}}]);