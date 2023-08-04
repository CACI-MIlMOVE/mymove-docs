"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[2136],{85387:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));t(8209);const l={},r="Direnv",i={unversionedId:"about/application-setup/base-setup/direnv",id:"about/application-setup/base-setup/direnv",title:"Direnv",description:"For managing local environment variables, we're using direnv.",source:"@site/docs/about/application-setup/01-base-setup/06-direnv.md",sourceDirName:"about/application-setup/01-base-setup",slug:"/about/application-setup/base-setup/direnv",permalink:"/mymove-docs/docs/about/application-setup/base-setup/direnv",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/about/application-setup/01-base-setup/06-direnv.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"aboutSidebar",previous:{title:"AWS Services",permalink:"/mymove-docs/docs/about/application-setup/base-setup/aws-services"},next:{title:"Manual Setup vs. Nix Setup",permalink:"/mymove-docs/docs/about/application-setup/manual-vs-nix"}},p={},s=[{value:"Helpful variables for <code>.envrc.local</code>",id:"helpful-variables-for-envrclocal",level:2},{value:"Troubleshooting direnv &amp; chamber",id:"troubleshooting-direnv--chamber",level:2}],m={toc:s},c="wrapper";function u(e){let{components:a,...t}=e;return(0,o.kt)(c,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"direnv"},"Direnv"),(0,o.kt)("p",null,"For managing local environment variables, we're using ",(0,o.kt)("a",{parentName:"p",href:"https://direnv.net/"},"direnv"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"direnv allow\n")),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"This will load up the ",(0,o.kt)("inlineCode",{parentName:"li"},".envrc")," file. It should complain that you have missing variables. We'll fix that next.")))),(0,o.kt)("p",null,"To fix the missing variables issue, you can do one of the following things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Let ",(0,o.kt)("inlineCode",{parentName:"p"},"direnv")," get secret values with ",(0,o.kt)("inlineCode",{parentName:"p"},"chamber"),". To enable this, run:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cp .envrc.chamber.template .envrc.chamber\n")),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"that this method does not work for users of the ",(0,o.kt)("inlineCode",{parentName:"p"},"fish")," shell unless you replace ",(0,o.kt)("inlineCode",{parentName:"p"},"direnv allow")," with"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"direnv export fish | source\n"))),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"if you have a very poor internet connection, this method may be problematic to you."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"An alternative is to add a ",(0,o.kt)("inlineCode",{parentName:"p"},".envrc.local")," file. Then run:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"DISABLE_AWS_VAULT_WRAPPER=1 AWS_REGION=us-gov-west-1 aws-vault exec transcom-gov-dev -- chamber env app-devlocal >> .envrc.local\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you don't have access to ",(0,o.kt)("inlineCode",{parentName:"p"},"chamber"),", you can also run"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"touch .envrc.local\n")),(0,o.kt)("p",{parentName:"li"},"then add any values that the output from ",(0,o.kt)("inlineCode",{parentName:"p"},"direnv")," asks you to define."))),(0,o.kt)("h2",{id:"helpful-variables-for-envrclocal"},"Helpful variables for ",(0,o.kt)("inlineCode",{parentName:"h2"},".envrc.local")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Increase concurrency of ",(0,o.kt)("inlineCode",{parentName:"p"},"golangci-lint"),"; defaults to 6 on dev machines and to 1 in CircleCI."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"export GOLANGCI_LINT_CONCURRENCY=8\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enable go code debugging in goland"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"export GOLAND=1\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Silence SQL logs locally; we default this to be true in ",(0,o.kt)("inlineCode",{parentName:"p"},".envrc")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"export DB_DEBUG=0\n")))),(0,o.kt)("h2",{id:"troubleshooting-direnv--chamber"},"Troubleshooting direnv & chamber"),(0,o.kt)("p",null,"Make sure you have the latest version of Chamber that supports the ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," command\noption. You may run into the following error if the version of Chamber you have\ninstalled does not support ",(0,o.kt)("inlineCode",{parentName:"p"},"env"),". The error presents itself because of the\n",(0,o.kt)("inlineCode",{parentName:"p"},"chamber")," commands that ",(0,o.kt)("inlineCode",{parentName:"p"},"direnv")," runs as part of the ",(0,o.kt)("inlineCode",{parentName:"p"},".envrc.*")," files shown\nabove."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'>_ cd mymove\ndirenv: loading .envrc.chamber\nError: unknown command "env" for "chamber"\nRun \'chamber --help\' for usage.\n')))}u.isMDXComponent=!0}}]);