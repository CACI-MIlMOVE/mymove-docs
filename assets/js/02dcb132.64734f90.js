"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[9320],{82834:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=a(45072),t=(a(11504),a(95788));a(10880);const s={sidebar_position:4},l="How To Manage Docker Locally",i={unversionedId:"backend/guides/how-to/manage-docker-locally",id:"backend/guides/how-to/manage-docker-locally",title:"How To Manage Docker Locally",description:"There is a lot to know about Docker and how to use it.  You can always read Docker Documentation",source:"@site/docs/backend/guides/how-to/manage-docker-locally.md",sourceDirName:"backend/guides/how-to",slug:"/backend/guides/how-to/manage-docker-locally",permalink:"/mymove-docs/docs/backend/guides/how-to/manage-docker-locally",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/backend/guides/how-to/manage-docker-locally.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"backendSidebar",previous:{title:"How to manage dependencies with go mod",permalink:"/mymove-docs/docs/backend/guides/how-to/manage-dependencies-with-go-mod"},next:{title:"How to manage Golang with asdf",permalink:"/mymove-docs/docs/backend/guides/how-to/manage-golang-with-asdf"}},c={},d=[{value:"Managing the system",id:"managing-the-system",level:2}],r={toc:d},u="wrapper";function g(e){let{components:o,...a}=e;return(0,t.yg)(u,(0,n.c)({},r,a,{components:o,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"how-to-manage-docker-locally"},"How To Manage Docker Locally"),(0,t.yg)("p",null,"There is a lot to know about Docker and how to use it.  You can always read ",(0,t.yg)("a",{parentName:"p",href:"https://docs.docker.com/"},"Docker Documentation"),"\nat the source.  However, here are some helpful tips."),(0,t.yg)("h2",{id:"managing-the-system"},"Managing the system"),(0,t.yg)("p",null,"Docker on Mac starts you off with a 64GB disk image by default. As you use docker it may begin to complain about\nhaving no space or running out of space. To fix this you will need to prune:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"$ docker system prune\nWARNING! This will remove:\n        - all stopped containers\n        - all networks not used by at least one container\n        - all dangling images\n        - all dangling build cache\nAre you sure you want to continue? [y/N]\n")),(0,t.yg)("p",null,"This will clean up your system of the typical things that cause you to run out of space. However, docker also\nuses volumes to manage its storage and the volumes take up space as well. You can fix this with:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"docker system prune --volumes\nWARNING! This will remove:\n        - all stopped containers\n        - all networks not used by at least one container\n        - all volumes not used by at least one container\n        - all dangling images\n        - all dangling build cache\nAre you sure you want to continue? [y/N]\n")),(0,t.yg)("p",null,"This free up GB of space on the disk image."))}g.isMDXComponent=!0}}]);