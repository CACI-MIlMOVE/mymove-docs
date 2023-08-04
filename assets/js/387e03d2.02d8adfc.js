"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[2493],{6056:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>n,toc:()=>p});var o=c(87462),i=(c(67294),c(3905));c(8209);const l={},s="Deploy App Client TLS",n={unversionedId:"tools/cicd/circleci/deploy-app-client-tls",id:"tools/cicd/circleci/deploy-app-client-tls",title:"Deploy App Client TLS",description:"Configuration",source:"@site/docs/tools/cicd/circleci/deploy-app-client-tls.md",sourceDirName:"tools/cicd/circleci",slug:"/tools/cicd/circleci/deploy-app-client-tls",permalink:"/mymove-docs/docs/tools/cicd/circleci/deploy-app-client-tls",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/tools/cicd/circleci/deploy-app-client-tls.md",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"CircleCI",permalink:"/mymove-docs/docs/tools/cicd/circleci"},next:{title:"GitHub Actions",permalink:"/mymove-docs/docs/tools/cicd/github_actions"}},a={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Extra Notes",id:"extra-notes",level:2}],r={toc:p},d="wrapper";function m(e){let{components:t,...c}=e;return(0,i.kt)(d,(0,o.Z)({},r,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploy-app-client-tls"},"Deploy App Client TLS"),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"reference",reference:!0},"https://github.com/transcom/mymove/blob/7914158b070c8a733cc94a8cf3e4c4747855ea26/.circleci/config.yml#L1747-L1765\n")),(0,i.kt)("h2",{id:"extra-notes"},"Extra Notes"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy-app-client-tls-steps")," does two separate commit checks at different times. The first check occurs before anything is deployed to AWS and makes use of ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts/compare-deployed-commit"),". The second check happens after the deploy and uses ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts/check-deployed-commit"),". Both scripts make use of our tls certificates."))}m.isMDXComponent=!0}}]);