"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[9876],{22918:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>r});var n=o(87462),i=(o(67294),o(3905));o(8209);const a={},l="Logging",s={unversionedId:"about/development/logging",id:"about/development/logging",title:"Logging",description:"We are using zap as a logger in this project. We currently rely on its built-in NewDevelopment() and NewProduction() default configs, which are enabled in any of the executable packages that live in cmd.",source:"@site/docs/about/development/logging.md",sourceDirName:"about/development",slug:"/about/development/logging",permalink:"/mymove-docs/docs/about/development/logging",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/about/development/logging.md",tags:[],version:"current",frontMatter:{},sidebar:"aboutSidebar",previous:{title:"How to Create & Submit a Pull Request (PR)",permalink:"/mymove-docs/docs/about/development/how-to-create-and-submit-PR"},next:{title:"Makefile",permalink:"/mymove-docs/docs/about/development/makefile"}},p={},r=[{value:"Log files",id:"log-files",level:2}],m={toc:r},d="wrapper";function g(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"logging"},"Logging"),(0,i.kt)("p",null,"We are using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/uber-go/zap"},"zap")," as a logger in this project. We currently rely on its built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"NewDevelopment()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"NewProduction()")," default configs, which are enabled in any of the executable packages that live in ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd"),"."),(0,i.kt)("p",null,"This means that logging ",(0,i.kt)("em",{parentName:"p"},"is not")," set up from within models or other packages unless the files in ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd")," are also being loaded. ",(0,i.kt)("em",{parentName:"p"},"If you attempt to call ",(0,i.kt)("inlineCode",{parentName:"em"},"zap.L()")," or ",(0,i.kt)("inlineCode",{parentName:"em"},"zap.S()")," without a configured logger, nothing will appear on the screen.")),(0,i.kt)("p",null,"If you need to see some output during the development process (say, for debugging purposes), it is best to use the standard lib ",(0,i.kt)("inlineCode",{parentName:"p"},"fmt")," package to print to the screen. You will also need to pass ",(0,i.kt)("inlineCode",{parentName:"p"},"-v")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"go test")," so that it prints all output, even from passing tests. The simplest way to do this is to run ",(0,i.kt)("inlineCode",{parentName:"p"},"go test")," yourself by passing it which files to run, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"go test pkg/models/* -v"),"."),(0,i.kt)("h2",{id:"log-files"},"Log files"),(0,i.kt)("p",null,"In development mode, logs from the ",(0,i.kt)("inlineCode",{parentName:"p"},"milmove")," process are written to ",(0,i.kt)("inlineCode",{parentName:"p"},"logs/dev.log"),"."))}g.isMDXComponent=!0}}]);