"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[6288],{76960:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var a=t(45072),i=(t(11504),t(95788));t(10880);const o={title:"0014 Go Dependency Management"},s="Go Dependency Management",d={unversionedId:"adrs/go-dependency-management",id:"adrs/go-dependency-management",title:"0014 Go Dependency Management",description:"Our code depends on other code. Handlers need database connections, the auth handlers need to know our URL. There has to be a way for code to get access to its dependencies, we have chosen to go down an explicit route where code is initialized with all its dependencies passed into the initializer. This makes our dependency tree very explicit and makes testing individual components easier.",source:"@site/docs/adrs/0014-go-dependency-management.md",sourceDirName:"adrs",slug:"/adrs/go-dependency-management",permalink:"/mymove-docs/docs/adrs/go-dependency-management",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/adrs/0014-go-dependency-management.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"0014 Go Dependency Management"},sidebar:"adrsSidebar",previous:{title:"0013 REST API Updates",permalink:"/mymove-docs/docs/adrs/rest-api-updates"},next:{title:"0015 Session storage/handling",permalink:"/mymove-docs/docs/adrs/session-storage"}},r={},l=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"Explicitly encode dependencies in initializers for code that needs it",id:"explicitly-encode-dependencies-in-initializers-for-code-that-needs-it",level:3},{value:"Create a package for every dependency and use a package function to get access to the global you need",id:"create-a-package-for-every-dependency-and-use-a-package-function-to-get-access-to-the-global-you-need",level:3},{value:"Use package globals to store dependencies for each package that needs them",id:"use-package-globals-to-store-dependencies-for-each-package-that-needs-them",level:3}],c={toc:l},p="wrapper";function g(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,a.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"go-dependency-management"},"Go Dependency Management"),(0,i.yg)("p",null,"Our code depends on other code. Handlers need database connections, the auth handlers need to know our URL. There has to be a way for code to get access to its dependencies, we have chosen to go down an explicit route where code is initialized with all its dependencies passed into the initializer. This makes our dependency tree very explicit and makes testing individual components easier."),(0,i.yg)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Explicitly encode dependencies in initializers for code that needs it. Wire up the resulting object graph in main.go"),(0,i.yg)("li",{parentName:"ul"},"Create a package for every dependency and use a package function to get access to the global you need"),(0,i.yg)("li",{parentName:"ul"},"Use package globals to store dependencies for each package that needs them, set those in main.go")),(0,i.yg)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Chosen Alternative: ",(0,i.yg)("strong",{parentName:"li"},"Explicitly encode dependencies in initializers for code that needs it"))),(0,i.yg)("p",null,"For things like handlers, we create an initializer for them that takes their dependencies as arguments (db and logger, at this time). Then, when they run, they have access to their dependencies they were created with. The purpose of main.go is to wire up all of our dependencies. There you create the db connection and give it to the handlers when you create them. This is mirrored in package tests, when you test a handler, you configure it when you create it by passing in its dependencies."),(0,i.yg)("p",null,"In our first pass, the swagger handlers all require the same dependencies so we have created a single struct that encodes them and type alias the individual handlers to it. In the future if different handlers require different deps, they can be transparently turned into their own structs."),(0,i.yg)("p",null,"If there were a dependency we needed to mock out for tests, this strategy would allow for that quite nicely. Once could simply define an interface that the dependency is expected to follow and then pass either the real dependency or the mock one into the initializer."),(0,i.yg)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,i.yg)("h3",{id:"explicitly-encode-dependencies-in-initializers-for-code-that-needs-it"},"Explicitly encode dependencies in initializers for code that needs it"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"+")," Instances are always created with all their dependencies explicitly handed to them."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"+")," It's very difficult to not wire up dependencies correctly"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"+")," Different instances can be very easily configured differently."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"+")," Testing different components is made simpler by allowing you to configure them each at init time rather than relying on globals."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"-")," More verbose, for things like the logger that are true globals it's redundant to pass them in to each one."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"-")," Care needs to be taken in considering the thread safety of dependencies being given separately instances")),(0,i.yg)("h3",{id:"create-a-package-for-every-dependency-and-use-a-package-function-to-get-access-to-the-global-you-need"},"Create a package for every dependency and use a package function to get access to the global you need"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"+")," This is basically how the zap logger works by default, so it's a common pattern"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"+")," No need to configure some of our code at all, it will just work as is, calling the globals."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"-")," It is not clear when you initialize a function that it depends on one of these globals being initialized")),(0,i.yg)("h3",{id:"use-package-globals-to-store-dependencies-for-each-package-that-needs-them"},"Use package globals to store dependencies for each package that needs them"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"+")," Different packages can have different dependencies"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"-")," Each package needs to declare its dependencies"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"-")," Nothing prompts initialization of a package before it is used."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"-")," This is sort of the worst of both worlds.")))}g.isMDXComponent=!0}}]);