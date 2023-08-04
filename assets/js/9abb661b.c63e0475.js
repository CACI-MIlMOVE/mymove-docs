"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[323],{68588:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var l=a(87462),n=(a(67294),a(3905));a(8209);const o={},i="MilMove Local Client",p={unversionedId:"about/application-setup/run-the-app/milmove-local-client",id:"about/application-setup/run-the-app/milmove-local-client",title:"MilMove Local Client",description:"Commands in this section:",source:"@site/docs/about/application-setup/05-run-the-app/02-milmove-local-client.md",sourceDirName:"about/application-setup/05-run-the-app",slug:"/about/application-setup/run-the-app/milmove-local-client",permalink:"/mymove-docs/docs/about/application-setup/run-the-app/milmove-local-client",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/about/application-setup/05-run-the-app/02-milmove-local-client.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"aboutSidebar",previous:{title:"Server",permalink:"/mymove-docs/docs/about/application-setup/run-the-app/server"},next:{title:"Dependencies",permalink:"/mymove-docs/docs/about/application-setup/dependencies/"}},r={},s=[],c={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"milmove-local-client"},"MilMove Local Client"),(0,n.kt)("p",null,"Commands in this section:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"make client_build\n")),(0,n.kt)("p",null,"and"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"make client_run\n")),(0,n.kt)("p",null,"These will start the webpack dev server, serving the frontend on port 3000. If paired with"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"make server_run\n")),(0,n.kt)("p",null,"then the whole app will work, the webpack dev server proxies all API calls through to the server."),(0,n.kt)("p",null,"If both the server and client are running, you should be able to view the Swagger UI at\n",(0,n.kt)("a",{parentName:"p",href:"http://milmovelocal:3000/swagger-ui/internal.html"},"http://milmovelocal:3000/swagger-ui/internal.html"),". If it does not, try running"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"make client_build\n")),(0,n.kt)("p",null,"(this only needs to be run the first time)."),(0,n.kt)("p",null,"Dependencies are managed by ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn"),". To add a new dependency, use"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add\n")))}m.isMDXComponent=!0}}]);