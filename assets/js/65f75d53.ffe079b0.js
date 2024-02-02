"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[7616],{17384:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>r});var t=n(45072),i=(n(11504),n(95788));n(10880);const o={title:"0002 Go package management"},l="Use dep to manage go dependencies",d={unversionedId:"adrs/go-package-management",id:"adrs/go-package-management",title:"0002 Go package management",description:"NOTE: Golang has explicitly moved to go mod and this project has as well, making this ADR obsolete.",source:"@site/docs/adrs/0002-go-package-management.md",sourceDirName:"adrs",slug:"/adrs/go-package-management",permalink:"/mymove-docs/docs/adrs/go-package-management",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/adrs/0002-go-package-management.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"0002 Go package management"},sidebar:"adrsSidebar",previous:{title:"0001 Go ORM",permalink:"/mymove-docs/docs/adrs/go-orm"},next:{title:"0003 Go path and project layout",permalink:"/mymove-docs/docs/adrs/go-path-and-project-layout"}},s={},r=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"Glide",id:"glide",level:3},{value:"Dep",id:"dep",level:3},{value:"VirtualGo",id:"virtualgo",level:3}],m={toc:r},p="wrapper";function g(e){let{components:a,...n}=e;return(0,i.yg)(p,(0,t.c)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"use-dep-to-manage-go-dependencies"},"Use dep to manage go dependencies"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"NOTE:")," Golang has explicitly moved to ",(0,i.yg)("inlineCode",{parentName:"p"},"go mod")," and this project has as well, making this ADR obsolete."),(0,i.yg)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"glide"),(0,i.yg)("li",{parentName:"ul"},"dep"),(0,i.yg)("li",{parentName:"ul"},"virtualgo")),(0,i.yg)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,i.yg)("p",null,"The official Golang package manager ",(0,i.yg)("inlineCode",{parentName:"p"},"dep")," will be used to manage server dependencies. ",(0,i.yg)("inlineCode",{parentName:"p"},"dep ensure")," will be used to install all dependencies, ",(0,i.yg)("inlineCode",{parentName:"p"},"Godep.toml")," will only be used to add required packages and to pin versions when incompatibilities are found. In the normal course of things, most dependencies will not need to be added to ",(0,i.yg)("inlineCode",{parentName:"p"},"Godep.toml")," and we will rely on ensure's ability to automatically detect dependencies from imports."),(0,i.yg)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,i.yg)("h3",{id:"glide"},"Glide"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"+")," It is fairly mature"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"+")," It uses the go-standard ./vendor library so it works fine with all of the build and install tooling"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"+")," We've used it before and it has worked fine"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"-")," It is not the official dependency management tool from the language authors"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"-")," It has no way of encoding dependencies on non-imported tools (like linters or our migrator)")),(0,i.yg)("h3",{id:"dep"},"Dep"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"+")," It is the official dependency management tool"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"+")," ",(0,i.yg)("inlineCode",{parentName:"li"},"dep ensure")," is nicely designed, automatically doing what you expect for all the code that you * import"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"+/-")," It has some support for encoding dev dependencies that are not imported",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"This is still not ideal, it will fetch version-pinned sources for those dependencies but will not build/* install them independently"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"-")," It is still fairly new and unfinished. The docs say that it is ready for production use but it has a long roadmap")),(0,i.yg)("h3",{id:"virtualgo"},"VirtualGo"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"+")," It works with dep and adds more isolation to your development environment"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"+")," It allows you to actually install version-locked tools that are not imported by your code"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"-")," It is another tool that would have to be installed and managed by all developers")))}g.isMDXComponent=!0}}]);