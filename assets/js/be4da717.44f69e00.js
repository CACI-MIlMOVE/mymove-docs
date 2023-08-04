"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[7098],{59912:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>d,toc:()=>l});var o=a(87462),s=(a(67294),a(3905));a(8209);const n={title:"0051 Use only Swagger supported formats for dates"},r="Use only Swagger supported formats for dates",d={unversionedId:"adrs/swagger-date-formats",id:"adrs/swagger-date-formats",title:"0051 Use only Swagger supported formats for dates",description:"In our Swagger yaml files we should only be using date formats that are supported by Swagger.",source:"@site/docs/adrs/0051-swagger-date-formats.md",sourceDirName:"adrs",slug:"/adrs/swagger-date-formats",permalink:"/mymove-docs/docs/adrs/swagger-date-formats",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/adrs/0051-swagger-date-formats.md",tags:[],version:"current",sidebarPosition:51,frontMatter:{title:"0051 Use only Swagger supported formats for dates"},sidebar:"adrsSidebar",previous:{title:"0050 Fork & maintain react-file-viewer under @trussworks",permalink:"/mymove-docs/docs/adrs/doc-viewer-fork"},next:{title:"0052 Use data-testid as an attribute for finding components in tests",permalink:"/mymove-docs/docs/adrs/use-data-testid"}},i={},l=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"Leave everything as is. Continue to use unsupported date formats, namely <code>datetime</code>",id:"leave-everything-as-is-continue-to-use-unsupported-date-formats-namely-datetime",level:3},{value:"Use Swagger supported date formats, <code>date-time</code> or <code>date</code>, depending on whether we need to store an exact timestamp of the event",id:"use-swagger-supported-date-formats-date-time-or-date-depending-on-whether-we-need-to-store-an-exact-timestamp-of-the-event",level:3}],m={toc:l},u="wrapper";function p(e){let{components:t,...a}=e;return(0,s.kt)(u,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"use-only-swagger-supported-formats-for-dates"},"Use only Swagger supported formats for dates"),(0,s.kt)("p",null,"In our Swagger yaml files we should only be using date formats that are supported by Swagger."),(0,s.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Leave everything as is. Continue to use unsupported date formats, namely, ",(0,s.kt)("inlineCode",{parentName:"li"},"datetime"))),(0,s.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Chosen Alternative: ",(0,s.kt)("strong",{parentName:"li"},"Use Swagger supported date formats, ",(0,s.kt)("inlineCode",{parentName:"strong"},"date-time")," or ",(0,s.kt)("inlineCode",{parentName:"strong"},"date"),", depending on whether we need to store an exact timestamp of the event."))),(0,s.kt)("p",null,"This option will assure that we are using Swagger supported data types"),(0,s.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,s.kt)("h3",{id:"leave-everything-as-is-continue-to-use-unsupported-date-formats-namely-datetime"},"Leave everything as is. Continue to use unsupported date formats, namely ",(0,s.kt)("inlineCode",{parentName:"h3"},"datetime")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"+")," No changes needed to be done."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"-")," Leads to inconsistent data type usage for what should be similar data."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"-")," Using a data type format that is not supported by Swagger.")),(0,s.kt)("h3",{id:"use-swagger-supported-date-formats-date-time-or-date-depending-on-whether-we-need-to-store-an-exact-timestamp-of-the-event"},"Use Swagger supported date formats, ",(0,s.kt)("inlineCode",{parentName:"h3"},"date-time")," or ",(0,s.kt)("inlineCode",{parentName:"h3"},"date"),", depending on whether we need to store an exact timestamp of the event"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"+")," Makes correct use of Swagger data types."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"+")," Maintains consistency in how we format dates in our APIs."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"-")," Requires changes to yaml files.")))}p.isMDXComponent=!0}}]);