"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[2663],{80897:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var i=o(87462),s=(o(67294),o(3905));o(8209);const n={},a="PII Best Practices",r={unversionedId:"about/development/pii-best-practices",id:"about/development/pii-best-practices",title:"PII Best Practices",description:"Server side: any downloadable content passed to the client should by default have an inline content disposition (like PDFs).",source:"@site/docs/about/development/pii-best-practices.md",sourceDirName:"about/development",slug:"/about/development/pii-best-practices",permalink:"/mymove-docs/docs/about/development/pii-best-practices",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/about/development/pii-best-practices.md",tags:[],version:"current",frontMatter:{},sidebar:"aboutSidebar",previous:{title:"Manual Redeploys and Other Helpful Information in an Emergency",permalink:"/mymove-docs/docs/about/development/manual-redeploys"},next:{title:"Storybook",permalink:"/mymove-docs/docs/about/development/storybook"}},l={},d=[{value:"More about content dispositions",id:"more-about-content-dispositions",level:2},{value:"More about browser settings",id:"more-about-browser-settings",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...o}=e;return(0,s.kt)(p,(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"pii-best-practices"},"PII Best Practices"),(0,s.kt)("p",null,"Server side: any downloadable content passed to the client should by default have an inline content disposition (like PDFs)."),(0,s.kt)("p",null,"Client side: before accessing any prod environment, fix your browser settings to display PDFs, not use an external app."),(0,s.kt)("h2",{id:"more-about-content-dispositions"},"More about content dispositions"),(0,s.kt)("p",null,"An inline disposition tells the browser to display a file inline if it can. If you instead set an attachment disposition, the browser will download the file even when it is capable of displaying the data itself. If an engineer downloads PII instead of letting their browser display it, this will cause a security incident. So make sure content like PDFs are passed to the client with inline dispositions. You can read more in ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition",title:"MDN: Content-Disposition Headers"},"the official Mozilla docs"),"."),(0,s.kt)("h2",{id:"more-about-browser-settings"},"More about browser settings"),(0,s.kt)("p",null,"Even if an inline disposition is set, most browsers still allow you to override that behavior and automatically download certain file types."),(0,s.kt)("p",null,'Before working with the prod environment, ensure you have changed your settings to display PDFs in the browser. In most browsers, you can find the relevant setting by searching "PDF" in the settings menu.'))}u.isMDXComponent=!0}}]);