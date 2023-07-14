"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[4625],{48514:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=a(87462),n=(a(67294),a(3905));a(8209);const o={title:"0043 Handling time in the Prime API"},l="*Handling time in the Prime API*",s={unversionedId:"adrs/prime-time",id:"adrs/prime-time",title:"0043 Handling time in the Prime API",description:"Definitions",source:"@site/docs/adrs/0043-prime-time.md",sourceDirName:"adrs",slug:"/adrs/prime-time",permalink:"/mymove-docs/docs/adrs/prime-time",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0043-prime-time.md",tags:[],version:"current",sidebarPosition:43,frontMatter:{title:"0043 Handling time in the Prime API"},sidebar:"adrsSidebar",previous:{title:"0042 Use If-Match / E-tags for optimistic locking",permalink:"/mymove-docs/docs/adrs/optimistic-locking"},next:{title:"0044 Use camelCase for API params",permalink:"/mymove-docs/docs/adrs/params-styling"}},r={},d=[{value:"Definitions",id:"definitions",level:2},{value:"Background",id:"background",level:2},{value:"Proposed Solution",id:"proposed-solution",level:2},{value:"Convert dates to timestamps when comparing with timestamps",id:"convert-dates-to-timestamps-when-comparing-with-timestamps",level:3},{value:"Serialization",id:"serialization",level:3},{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Chosen Alternative: Use proposed rules to convert dates to timestamps as needed",id:"chosen-alternative-use-proposed-rules-to-convert-dates-to-timestamps-as-needed",level:3},{value:"Pros and Cons of the Alternatives  optional ",id:"pros-and-cons-of-the-alternatives--optional-",level:2},{value:"Store all time values as timestamps",id:"store-all-time-values-as-timestamps",level:3},{value:"Record a timezone in the database for all dates",id:"record-a-timezone-in-the-database-for-all-dates",level:3}],m={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"handling-time-in-the-prime-api"},(0,n.kt)("em",{parentName:"h1"},"Handling time in the Prime API")),(0,n.kt)("h2",{id:"definitions"},"Definitions"),(0,n.kt)("p",null,"Date"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A time value that only includes year, month, and day"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"DATE")," in postgres")),(0,n.kt)("p",null,"Timestamp"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A more granular time value that also includes hours, minutes, seconds, and smaller units"),(0,n.kt)("li",{parentName:"ul"},"The smallest unit supported by timestamps varies by system; OS, database, and programming language can differ"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TIMESTAMP")," in postgres")),(0,n.kt)("h2",{id:"background"},"Background"),(0,n.kt)("p",null,"Our system currently works with time values at two levels of resolution: date and timestamp. Date values typically result from an explicit day selection in the UI (\u201cwhat day do you want your shipment picked up?\u201d), while timestamps are typically generated implicitly by the system to record when a certain action occurred."),(0,n.kt)("p",null,"The problem arises when we need to perform operations that mix these two types. For example, try to answer this question: Is ",(0,n.kt)("inlineCode",{parentName:"p"},"2020-01-20T16:00:00")," more than one day after ",(0,n.kt)("inlineCode",{parentName:"p"},"2020-01-19"),"? Answering this requires that we convert one of these values to the other\u2019s resolution; we can either convert ",(0,n.kt)("inlineCode",{parentName:"p"},"2020-01-20T16:00:00")," to a date (perhaps by truncating its hours, minutes, and seconds) or convert ",(0,n.kt)("inlineCode",{parentName:"p"},"2020-01-19")," to a timestamp by \u201cadding\u201d precision and giving it values for the more granular subfields."),(0,n.kt)("p",null,"In order to ensure that we handle operations that involve multiple levels of time resolution consistently throughout the system, we need to have clear guidelines for how to do so."),(0,n.kt)("p",null,"An alternative to this is to prevent the system from storing temporal values in two different types. Doing this will just move the complexity around the system, though, since the backend only working with timestamps would then require the UI and API consumers to define and\nimplement their own conversions between the two date types."),(0,n.kt)("h2",{id:"proposed-solution"},"Proposed Solution"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use timestamps when recording when an action has occurred. Examples include created_at, updated_at, etc. values")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use dates when accepting a scheduled date from the Prime. Examples include scheduled move date, scheduled pickup date, etc. Dates are typically formatted as ",(0,n.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," strings in payloads"))),(0,n.kt)("h3",{id:"convert-dates-to-timestamps-when-comparing-with-timestamps"},"Convert dates to timestamps when comparing with timestamps"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Interpret a date in Pacific time to convert it to a naive timestamp")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use beginning-of-day (12:00:00 am) or end-of-day (11:59:59 pm) depending on operation being performed. In general, use the most forgiving interpretation:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If you\u2019re calculating if a date is more than 10 days in the future, use end-of-day."),(0,n.kt)("li",{parentName:"ul"},"If you\u2019re calculating if a date is more than 2 days ago, use beginning-of-day.")))),(0,n.kt)("h3",{id:"serialization"},"Serialization"),(0,n.kt)("p",null,"Use ",(0,n.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc3339"},"RFC3339")," unless you have a reason not to. It handles both dates and timestamps. ",(0,n.kt)("inlineCode",{parentName:"p"},"ISO8601")," is roughly equivalent for the purposes of this document; however, it contains many optional features and it is recommended that projects move to ",(0,n.kt)("inlineCode",{parentName:"p"},"RFC3339")," to avoid potential issues resulting from this complexity."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Date example: ",(0,n.kt)("inlineCode",{parentName:"li"},"2007-11-13T00:00:00Z")," (Note that this includes zeroed out hours, minutes, etc.)"),(0,n.kt)("li",{parentName:"ul"},"Timestamp example: ",(0,n.kt)("inlineCode",{parentName:"li"},"2007-11-13T09:13:00Z"))),(0,n.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Store all time values as timestamps"),(0,n.kt)("li",{parentName:"ul"},"Record a timezone in the database for all dates")),(0,n.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,n.kt)("h3",{id:"chosen-alternative-use-proposed-rules-to-convert-dates-to-timestamps-as-needed"},"Chosen Alternative: Use proposed rules to convert dates to timestamps as needed"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," This allows us to build on top of our existing database and its data, which is already mixing date and timestamps."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," We can start with a simple approach of interpreting all dates in pacific time and layer on a more timezone-aware approach later as required by business rules."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Logic that uses values at both levels of resolution will need to follow the guidelines defined here, which due to its complexity is more likely to be lead to bugs. We can mitigate this by defining and using some well-tested and documented helpers.")),(0,n.kt)("h2",{id:"pros-and-cons-of-the-alternatives--optional-"},"Pros and Cons of the Alternatives "),(0,n.kt)("h3",{id:"store-all-time-values-as-timestamps"},"Store all time values as timestamps"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," This makes comparisons trivial as all time values are at the same level of granularity"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Moving logic from the database to the application is trivial, since there is no involved logic to translate."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," We already have a lot of date values we'd need to migrate to this approach"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Would require the semantics of data to change, e.g. we would store a time that was the end of the selected day for requested pickup date. That value could then be used to determine if a pickup actually happened before that time."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," We would need to be able to translate from day selected in the UI to timestamps in the database, probably using either the user's local time or a timezone determined from the geographic location of the relevant event.")),(0,n.kt)("h3",{id:"record-a-timezone-in-the-database-for-all-dates"},"Record a timezone in the database for all dates"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," We would have all the data needed to properly interpret dates in the database, which would simplify some calculations we need to do."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," This adds complexity to the Prime API for consumers, as they would need to provide a timezone or location for every date."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," We already have a lot of date values we'd need to migrate to this approach")))}u.isMDXComponent=!0}}]);