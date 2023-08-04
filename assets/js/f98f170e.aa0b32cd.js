"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[7913],{18996:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>p,metadata:()=>r,toc:()=>l});var i=a(87462),o=(a(67294),a(3905));a(8209);const p={},n="Prime API",r={unversionedId:"about/application-setup/additional-setup/prime-api",id:"about/application-setup/additional-setup/prime-api",title:"Prime API",description:"The API that the Prime will use is authenticated via mutual TSL so there are a few things you need to do to interact",source:"@site/docs/about/application-setup/07-additional-setup/prime-api.md",sourceDirName:"about/application-setup/07-additional-setup",slug:"/about/application-setup/additional-setup/prime-api",permalink:"/mymove-docs/docs/about/application-setup/additional-setup/prime-api",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/about/application-setup/07-additional-setup/prime-api.md",tags:[],version:"current",frontMatter:{},sidebar:"aboutSidebar",previous:{title:"Orders Gateway",permalink:"/mymove-docs/docs/about/application-setup/additional-setup/orders-gateway"},next:{title:"API / Swagger",permalink:"/mymove-docs/docs/about/development/api-and-swagger"}},s={},l=[],m={toc:l},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prime-api"},"Prime API"),(0,o.kt)("p",null,"The API that the Prime will use is authenticated via mutual TSL so there are a few things you need to do to interact\nwith it in a local environment."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure that the ",(0,o.kt)("inlineCode",{parentName:"p"},"primelocal")," alias is setup for localhost"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Check your ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/hosts")," file for an entry for ",(0,o.kt)("inlineCode",{parentName:"li"},"primelocal"),"."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"make server_run\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Access the Prime API using the devlocal-mtls certs. There is a script that shows you how to do this with curl\nat ",(0,o.kt)("inlineCode",{parentName:"p"},"./scripts/prime-api"),". For instance to call the ",(0,o.kt)("inlineCode",{parentName:"p"},"move-task-orders")," endpoint, run"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./scripts/prime-api move-task-orders\n")))))}u.isMDXComponent=!0}}]);