"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[7059],{70414:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var i=a(87462),n=(a(67294),a(3905));a(8209);const s={sidebar_position:3},l="API Style Guide",r={unversionedId:"api/guides/api-style-guide",id:"api/guides/api-style-guide",title:"API Style Guide",description:"We really need a comprehensive style guide, but in the meanwhile this page will collect useful bits of style related info.",source:"@site/docs/api/guides/api-style-guide.md",sourceDirName:"api/guides",slug:"/api/guides/api-style-guide",permalink:"/mymove-docs/docs/api/guides/api-style-guide",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/api/guides/api-style-guide.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"apiSidebar",previous:{title:"API Errors",permalink:"/mymove-docs/docs/api/guides/api-errors"},next:{title:"Creating an Endpoint",permalink:"/mymove-docs/docs/api/guides/guide-to-creating-an-endpoint"}},o={},p=[{value:"Paths",id:"paths",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<strong>Case</strong>",id:"case",level:3},{value:"<strong>Special Parameters</strong>",id:"special-parameters",level:3},{value:"Values",id:"values",level:2},{value:"Tags",id:"tags",level:2},{value:"<strong>Dates</strong>",id:"dates",level:3},{value:"Convert dates to timestamps when comparing with timestamps",id:"convert-dates-to-timestamps-when-comparing-with-timestamps",level:3},{value:"Serialization",id:"serialization",level:3}],m={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"api-style-guide"},"API Style Guide"),(0,n.kt)("p",null,"We really need a comprehensive style guide, but in the meanwhile this page will collect useful bits of style related info."),(0,n.kt)("h2",{id:"paths"},"Paths"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use kebab-case for all paths. This is a common convention.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In addition, since we use camelCase for parameter names, if you have parameters in your path, they will be camelCase. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Think of the path as pointing to a resource. A common pattern is ",(0,n.kt)("inlineCode",{parentName:"p"},"/resources/{resourceID}"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use the plural version of a resource name unless the resource in question is a singleton within the system (for example, the overall status of the system might be ",(0,n.kt)("inlineCode",{parentName:"p"},"/status"),"). This keeps it consistent in the way you refer to particular resources."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"'/mto-shipments/{mtoShipmentID}/addresses/{addressID}':\n")))),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("h3",{id:"case"},(0,n.kt)("strong",{parentName:"h3"},"Case")),(0,n.kt)("p",null,"Consistency is important and using mixed cases is confusing. We selected camelCase because it's predominant in the code base and required the least amount of effort to implement. ",(0,n.kt)("a",{parentName:"p",href:"/mymove-docs/docs/adrs/params-styling"},"ADR 0044 Params Styling")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use camelCase for all API parameters in the body and path.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use all-caps for ID unless the whole parameter is an id. So we use ",(0,n.kt)("inlineCode",{parentName:"p"},"moveTaskOrderID")," but we also use ",(0,n.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"  id:\n    format: uuid\n    type: string\n  moveTaskOrderID:\n    format: uuid\n    type: string\n")))),(0,n.kt)("h3",{id:"special-parameters"},(0,n.kt)("strong",{parentName:"h3"},"Special Parameters")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"All PUT and PATCH updates should have an eTag in the request. This is required to enforce optimistic locking. In the yaml, we mark these as ",(0,n.kt)("inlineCode",{parentName:"p"},"readOnly: true"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"All endpoints should properly populate the ",(0,n.kt)("inlineCode",{parentName:"p"},"produces")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"consumes")," properties in the yaml. This is most usually set to ",(0,n.kt)("inlineCode",{parentName:"p"},"application/json"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"  consumes:\n    - application/json\n  produces:\n    - application/json\n")))),(0,n.kt)("h2",{id:"values"},"Values"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Enum values should be ALL_CAPS with underscores. ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"    enum:\n      - RELEASING_AGENT\n      - RECEIVING_AGENT\n")),(0,n.kt)("h2",{id:"tags"},"Tags"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use camelCase for the tags. Typically use object names for tags to group all endpoints associated with the object like ",(0,n.kt)("inlineCode",{parentName:"li"},"paymentRequest"),".")),(0,n.kt)("h3",{id:"dates"},(0,n.kt)("strong",{parentName:"h3"},"Dates")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use Swagger supported date formats, ",(0,n.kt)("inlineCode",{parentName:"p"},"date-time")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"date"),", depending on whether we need to store an exact timestamp of the event. ",(0,n.kt)("a",{parentName:"p",href:"/mymove-docs/docs/adrs/swagger-date-formats"},"ADR 0051 Swagger Date Formats")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"    requestedPickupDate:\n      format: date\n      type: string\n    updatedAt:\n      format: date-time\n      type: string\n      readOnly: true\n")))),(0,n.kt)("p",null,"Note that ",(0,n.kt)("strong",{parentName:"p"},"in the database"),", we use the following recommendations. ",(0,n.kt)("a",{parentName:"p",href:"/mymove-docs/docs/adrs/prime-time"},"ADR 0043 Prime Time")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use timestamps when recording when an action has occurred. Examples include ",(0,n.kt)("inlineCode",{parentName:"p"},"created_at"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"updated_at"),", etc. values")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use dates when accepting a scheduled date from the Prime. Examples include ",(0,n.kt)("inlineCode",{parentName:"p"},"scheduled_pickup_date"),", etc. Dates are typically formatted as ",(0,n.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," strings in payloads")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Note that ",(0,n.kt)("inlineCode",{parentName:"p"},"updatedAt")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"createdAt")," should always be marked ",(0,n.kt)("inlineCode",{parentName:"p"},"readOnly: true"),". This is because we do not use any values the caller passes in, but instead calculate them ourselves."))),(0,n.kt)("h3",{id:"convert-dates-to-timestamps-when-comparing-with-timestamps"},"Convert dates to timestamps when comparing with timestamps"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Interpret a date in Pacific time to convert it to a naive timestamp")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use beginning-of-day (12:00:00 am) or end-of-day (11:59:59 pm) depending on operation being performed. In general, use the most forgiving interpretation:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If you\u2019re calculating if a date is more than 10 days in the future, use end-of-day."),(0,n.kt)("li",{parentName:"ul"},"If you\u2019re calculating if a date is more than 2 days ago, use beginning-of-day.")))),(0,n.kt)("h3",{id:"serialization"},"Serialization"),(0,n.kt)("p",null,"Use ",(0,n.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc3339"},"RFC3339")," unless you have a reason not to. It handles both dates and timestamps. ",(0,n.kt)("inlineCode",{parentName:"p"},"ISO8601")," is roughly equivalent for the purposes of this document; however, it contains many optional features and it is recommended that projects move to ",(0,n.kt)("inlineCode",{parentName:"p"},"RFC3339")," to avoid potential issues resulting from this complexity."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Date example: ",(0,n.kt)("inlineCode",{parentName:"li"},"2007-11-13T00:00:00Z")," (Note that this includes zeroed out hours, minutes, etc.)"),(0,n.kt)("li",{parentName:"ul"},"Timestamp example: ",(0,n.kt)("inlineCode",{parentName:"li"},"2007-11-13T09:13:00Z"))))}u.isMDXComponent=!0}}]);