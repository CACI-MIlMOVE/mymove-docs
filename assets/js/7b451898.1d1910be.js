"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[2448],{28516:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>l,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var t=o(45072),s=(o(11504),o(95788));o(10880);const i={title:"0016 Browser Support for Prototype"},n="Browser Support for Prototype",a={unversionedId:"adrs/Browser-Support",id:"adrs/Browser-Support",title:"0016 Browser Support for Prototype",description:"User Story: 155599293",source:"@site/docs/adrs/0016-Browser-Support.md",sourceDirName:"adrs",slug:"/adrs/Browser-Support",permalink:"/mymove-docs/docs/adrs/Browser-Support",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/adrs/0016-Browser-Support.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"0016 Browser Support for Prototype"},sidebar:"adrsSidebar",previous:{title:"0015 Session storage/handling",permalink:"/mymove-docs/docs/adrs/session-storage"},next:{title:"0017 Client side route restriction based on authentication",permalink:"/mymove-docs/docs/adrs/react-router-redux-authentication"}},l={},p=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"Support only latest browser versions supported by operating systems",id:"support-only-latest-browser-versions-supported-by-operating-systems",level:3},{value:"Extend support to older versions of Internet Explorer (IE 9 &amp; 10)",id:"extend-support-to-older-versions-of-internet-explorer-ie-9--10",level:3},{value:"Specific Minimum Version Requirements",id:"specific-minimum-version-requirements",level:2},{value:"Minimum Browser Requirements",id:"minimum-browser-requirements",level:3},{value:"Windows 10",id:"windows-10",level:4},{value:"Windows 10, macOS 10.12+",id:"windows-10-macos-1012",level:4},{value:"macOS 10.12+",id:"macos-1012",level:4},{value:"iOS 10+",id:"ios-10",level:4},{value:"Android 7+",id:"android-7",level:4},{value:"Browsers for Development and Testing",id:"browsers-for-development-and-testing",level:2}],d={toc:p},u="wrapper";function m(e){let{components:r,...o}=e;return(0,s.yg)(u,(0,t.c)({},d,o,{components:r,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"browser-support-for-prototype"},"Browser Support for Prototype"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"User Story:")," 155599293"),(0,s.yg)("admonition",{type:"info"},(0,s.yg)("p",{parentName:"admonition"},"This ADR has been superseded by the internal documentation around ",(0,s.yg)("a",{parentName:"p",href:"https://dp3.atlassian.net/wiki/spaces/MT/pages/1714552858/Supported+Browsers+for+MilMove+DRAF"},"Supported\nBrowsers for MilMove"),"\ud83d\udd12.")),(0,s.yg)("p",null,"There are dozen of browsers supported on multiple operating systems.  We need to manage the level of dev and testing effort required to support additional browsers and the overall impact to the user"),(0,s.yg)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},"Support only latest browser versions supported by operating systems (Internet Explorer 11, Edge, Chrome, Safari, and Firefox for desktop operating systems, Safari for iOS, and Chrome for Android)")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},"Extend support to older versions of Internet Explorer (IE 9 & 10)"))),(0,s.yg)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Chosen Alternative: ",(0,s.yg)("strong",{parentName:"li"},"Support only latest browser versions supported by operating systems")),(0,s.yg)("li",{parentName:"ul"},"These browsers support a vast majority of the potential users of the product"),(0,s.yg)("li",{parentName:"ul"},"Consequences. There is a small risk that a service member could access the system with an unsupported browser.  The user may not experience any issues, but possibly could incur display issues or prevent them from finishing the a process.  The user would have to start over using a supported browser.")),(0,s.yg)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,s.yg)("h3",{id:"support-only-latest-browser-versions-supported-by-operating-systems"},"Support only latest browser versions supported by operating systems"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"+")," Covers a majority of browsers current used for internet access"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"+")," Limits testing scope and combinations by limiting browser versions"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"+")," The mobile browsers selected represent a dominant market share on their respective mobile OS"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"-")," Slight risk of a service member unable to complete their process by using an unsupported browser")),(0,s.yg)("h3",{id:"extend-support-to-older-versions-of-internet-explorer-ie-9--10"},"Extend support to older versions of Internet Explorer (IE 9 & 10)"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"+")," Reduces the likelihood of a service member not completing the process buy using an unsupported browser"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"+")," The mobile browsers selected represent a dominant market share on their respective mobile OS"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"-")," Extra coding effort to support older IE versions"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"-")," Extra testing effort to support older browsers")),(0,s.yg)("h2",{id:"specific-minimum-version-requirements"},"Specific Minimum Version Requirements"),(0,s.yg)("p",null,"The following browsers will be considered ",(0,s.yg)("em",{parentName:"p"},"minimum requirements"),", meaning that issues that arise in browsers that don't meet these requirements will not be prioritized above other work. Problems that crop up in browsers that do meet these requirements will be prioritized based on their severity: cosmetic issues are generally less important, while functionality breakage is considered a critical bug."),(0,s.yg)("h3",{id:"minimum-browser-requirements"},"Minimum Browser Requirements"),(0,s.yg)("h4",{id:"windows-10"},"Windows 10"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"IE 11, Edge 12+")),(0,s.yg)("h4",{id:"windows-10-macos-1012"},"Windows 10, macOS 10.12+"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Chrome 64+"),(0,s.yg)("li",{parentName:"ul"},"Firefox 58+")),(0,s.yg)("h4",{id:"macos-1012"},"macOS 10.12+"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Safari 10+")),(0,s.yg)("h4",{id:"ios-10"},"iOS 10+"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Mobile Safari (Locked to OS version)")),(0,s.yg)("h4",{id:"android-7"},"Android 7+"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Chrome for Android 56+")),(0,s.yg)("h2",{id:"browsers-for-development-and-testing"},"Browsers for Development and Testing"),(0,s.yg)("p",null,"The development team will be developing using the latest version of Google Chrome or Firefox and will be regularly testing the application in:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Latest Google Chrome (macOS 10.13)"),(0,s.yg)("li",{parentName:"ul"},"Latest Firefox (macOS 10.13)"),(0,s.yg)("li",{parentName:"ul"},"Latest iOS Safari (iOS 11)"),(0,s.yg)("li",{parentName:"ul"},"Latest Chrome (Android 8)"),(0,s.yg)("li",{parentName:"ul"},"Internet Explorer 11 (Windows 10)")))}m.isMDXComponent=!0}}]);