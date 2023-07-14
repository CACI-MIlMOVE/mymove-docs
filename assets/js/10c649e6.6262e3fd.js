"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[9736],{60307:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var i=o(87462),a=(o(67294),o(3905));o(8209);const n={title:"0003 Go path and project layout"},r="Put mymove into the standard GOPATH, eliminate server and client directories",l={unversionedId:"adrs/go-path-and-project-layout",id:"adrs/go-path-and-project-layout",title:"0003 Go path and project layout",description:"The server component of mymove is written in Go. Go is very particular about where source code can live to allow for a standard way of fetching and building dependencies. We need to decide how we want to build the server, and how to fit into the go ecosystem to do so.",source:"@site/docs/adrs/0003-go-path-and-project-layout.md",sourceDirName:"adrs",slug:"/adrs/go-path-and-project-layout",permalink:"/mymove-docs/docs/adrs/go-path-and-project-layout",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0003-go-path-and-project-layout.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"0003 Go path and project layout"},sidebar:"adrsSidebar",previous:{title:"0002 Go package management",permalink:"/mymove-docs/docs/adrs/go-package-management"},next:{title:"0004 Use Both Absolute and Relative Paths for Imports",permalink:"/mymove-docs/docs/adrs/path-imports"}},d={},s=[{value:"Deprecations",id:"deprecations",level:2},{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"Putting the server source directly into the GOPATH",id:"putting-the-server-source-directly-into-the-gopath",level:3},{value:"Using Make to set a custom GOPATH for all go-related commands",id:"using-make-to-set-a-custom-gopath-for-all-go-related-commands",level:3},{value:"Putting the client and the server code together at the top level of mymove",id:"putting-the-client-and-the-server-code-together-at-the-top-level-of-mymove",level:3},{value:"Segregating server and client code into their own directories",id:"segregating-server-and-client-code-into-their-own-directories",level:3}],c={toc:s},h="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(h,(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"put-mymove-into-the-standard-gopath-eliminate-server-and-client-directories"},"Put mymove into the standard GOPATH, eliminate server and client directories"),(0,a.kt)("p",null,"The server component of mymove is written in Go. Go is very particular about where source code can live to allow for a standard way of fetching and building dependencies. We need to decide how we want to build the server, and how to fit into the go ecosystem to do so."),(0,a.kt)("h2",{id:"deprecations"},"Deprecations"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," The part of this ADR referencing ",(0,a.kt)("inlineCode",{parentName:"p"},"$GOPATH")," is now deprecated in favor of ",(0,a.kt)("a",{parentName:"p",href:"/mymove-docs/docs/adrs/go-path-and-project-layout-revisited"},"ADR0037")),(0,a.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Putting the server source directly into the go path"),(0,a.kt)("li",{parentName:"ul"},"Using ",(0,a.kt)("inlineCode",{parentName:"li"},"make")," to set the GOPATH as being the ./server directory"),(0,a.kt)("li",{parentName:"ul"},"getting rid of the ./server directory all together and making the server exist at the top level of mymove")),(0,a.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,a.kt)("p",null,"mymove should reside in your GOPATH in the directory go expects: ",(0,a.kt)("inlineCode",{parentName:"p"},"$GOPATH/src/github.com/transcom/mymove"),". Developers may put their GOPATH wherever they wish, but if they put it somewhere other than the default of ~/go, they should set $GOPATH correctly in their shell's profile. (and either way should add $GOPATH/bin to their path)"),(0,a.kt)("p",null,"Within the mymove directory, server and client code exist together at the top level. This means that all internal go imports will look like this one for API: ",(0,a.kt)("inlineCode",{parentName:"p"},"github.com/transcom/mymove/pkg/api")),(0,a.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,a.kt)("h3",{id:"putting-the-server-source-directly-into-the-gopath"},"Putting the server source directly into the GOPATH"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," This is what is widely expected of go code and is what all of Go's tooling expects"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," ",(0,a.kt)("inlineCode",{parentName:"li"},"go install")," will install into the standard $GOBIN which makes it easy to access by adding that to your path in you shell's profile"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," All developers ",(0,a.kt)("em",{parentName:"li"},"must")," checkout the source code into a very specific directory, and using symlinks to get to that directory can cause some go tooling to fail"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," It is possible (though this is mitigated by proper use of dep) for your code to accidentally rely on code that has been installed via ",(0,a.kt)("inlineCode",{parentName:"li"},"go get")," which is not pinned to any version and could be potentially missing from another developer's machine. (though that would be caught by CI)")),(0,a.kt)("h3",{id:"using-make-to-set-a-custom-gopath-for-all-go-related-commands"},"Using Make to set a custom GOPATH for all go-related commands"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Developers can checkout mymove anywhere they like and have building work"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," All our dependencies are fully isolated from any other go code on the system"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Every invocation of go build and go install leaves detritus in mymove subdirectories"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," All go code has to be put under an ",(0,a.kt)("inlineCode",{parentName:"li"},"src")," directory in the custom GOPATH"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Import paths would be shorter, but non-standard. Go expects you to include GitHub in your import paths.")),(0,a.kt)("h3",{id:"putting-the-client-and-the-server-code-together-at-the-top-level-of-mymove"},"Putting the client and the server code together at the top level of mymove"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Tooling that expects to be able to find vendored dependencies at the top level of a project now can"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Dependencies (and tools) are now clearly for the entire project, not just one piece of it. i.e. It should be easy to use node based tools on our go code, now"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," The Makefile doesn't require going into different directories to do its work"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," You can use all our tools directly, outside of the Makefile, without GOPATH magic"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," A layer of hierarchy has been removed, so it is less clear what certain directories mean")),(0,a.kt)("h3",{id:"segregating-server-and-client-code-into-their-own-directories"},"Segregating server and client code into their own directories"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," It is more clear how the client and the server have their code grouped together"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Even if we'd moved ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," up to the top level to remedy the tooling problem, we'd have to have a second ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," in the client directory and we'd end up with duplicated commands between the two"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," If we didn't pull their dependency management up to the top level, it would limit our tool choices somewhat")))}m.isMDXComponent=!0}}]);