"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[1232],{7496:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=i(45072),n=(i(11504),i(95788));i(10880);const r={title:"0073 Use Templates for SQL Queries",description:"Decision outcome: Establish a pattern for SQL query template artifacts\n"},l="Use Templates for SQL Queries",o={unversionedId:"adrs/using-templates-for-sql-queries",id:"adrs/using-templates-for-sql-queries",title:"0073 Use Templates for SQL Queries",description:"Decision outcome: Establish a pattern for SQL query template artifacts\n",source:"@site/docs/adrs/0073-using-templates-for-sql-queries.md",sourceDirName:"adrs",slug:"/adrs/using-templates-for-sql-queries",permalink:"/mymove-docs/docs/adrs/using-templates-for-sql-queries",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/adrs/0073-using-templates-for-sql-queries.md",tags:[],version:"current",sidebarPosition:73,frontMatter:{title:"0073 Use Templates for SQL Queries",description:"Decision outcome: Establish a pattern for SQL query template artifacts\n"},sidebar:"adrsSidebar",previous:{title:"0072 Using React-App-Rewired",permalink:"/mymove-docs/docs/adrs/using-react-app-rewired"},next:{title:"0074 Refactor Move Event's Details Rendering ",permalink:"/mymove-docs/docs/adrs/move-history-details-refactor"}},s={},m=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Decision Drivers",id:"decision-drivers",level:2},{value:"Do not <del>try to reinvent the wheel</del> circumvent Pop - ADR 0001",id:"do-not-try-to-reinvent-the-wheel-circumvent-pop---adr-0001",level:4},{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"<em>Do nothing</em>",id:"do-nothing",level:3},{value:"<em>Utilize a SQL Template Engine</em>",id:"utilize-a-sql-template-engine",level:3},{value:"<em>Build out our own SQL Templating architecture</em>",id:"build-out-our-own-sql-templating-architecture",level:3},{value:"<em>A hybrid approach using an external library implemented to work with Pop</em>",id:"a-hybrid-approach-using-an-external-library-implemented-to-work-with-pop",level:3}],p={toc:m},g="wrapper";function d(e){let{components:t,...i}=e;return(0,n.yg)(g,(0,a.c)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"use-templates-for-sql-queries"},"Use Templates for SQL Queries"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"User Story:")," ",(0,n.yg)("em",{parentName:"p"},(0,n.yg)("a",{parentName:"em",href:"https://dp3.atlassian.net/browse/MB-12577"},"MB-12577"))," \ud83d\udd12 and follow-up ",(0,n.yg)("em",{parentName:"p"},(0,n.yg)("a",{parentName:"em",href:"https://dp3.atlassian.net/browse/MB-13923"},"MB-13923"))),(0,n.yg)("h2",{id:"problem-statement"},"Problem Statement"),(0,n.yg)("p",null,"The Go method which fetches a move's data change history contains a very large SQL query in which it sets up the data that is being tracked by the database triggers whenever data changes in tables.\nThe problem with such a large SQL statement in Go code is that it is essentially a string with no SQL linting or checking. This also means that developers lose the benefit of potential syntax highlighting when writing SQL queries."),(0,n.yg)("h2",{id:"decision-drivers"},"Decision Drivers"),(0,n.yg)("h4",{id:"do-not-try-to-reinvent-the-wheel-circumvent-pop---adr-0001"},"Do not ",(0,n.yg)("del",{parentName:"h4"},"try to reinvent the wheel")," circumvent Pop - ",(0,n.yg)("a",{parentName:"h4",href:"/mymove-docs/docs/adrs/go-orm"},"ADR 0001")),(0,n.yg)("p",null,"While evaluating potential options and opportunities, one key consideration is how the chosen approach will work with the existing ORM architecture ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/gobuffalo/pop"},"(Pop)"),"."),(0,n.yg)("p",null,"In order to achieve the best return value with the least effort, the chosen approach should not require excessive refactoring or removal of the Pop ORM pattern if at all possible."),(0,n.yg)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"bold denotes chosen"))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"Do nothing")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"Utilize a SQL Template Engine")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Build out our own SQL Templating architecture")," - chosen approach updated with ",(0,n.yg)("a",{parentName:"li",href:"https://dp3.atlassian.net/browse/MB-13923"},"MB-13923")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("del",{parentName:"li"},(0,n.yg)("strong",{parentName:"del"},"A hybrid approach using an external library implemented to work with Pop"))," - this approach was initially chosen, but mid-implementation, a new direction became prefered. ")),(0,n.yg)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Chosen Alternative: ",(0,n.yg)("del",{parentName:"li"},(0,n.yg)("em",{parentName:"del"},"A hybrid approach using an external library implemented to work with Pop"))," ",(0,n.yg)("em",{parentName:"li"},"Build out our own SQL Templating architecture")),(0,n.yg)("li",{parentName:"ul"},"Positive Outcomes: ",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"We will have a SQL templating pattern that is easy to implement without requiring major refactor, provides us with linting opportunities and better code visualization, and may be very useful in the future if we end up implementing additional complex queries."))),(0,n.yg)("li",{parentName:"ul"},"Consequences: ",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"If this new templating is not utilized elsewhere we will likely continue defaulting to writing SQL queries as strings in the Go code, which is our current pattern. "))),(0,n.yg)("li",{parentName:"ul"},"Other considerations:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"The templating pattern must be clearly documented in order to be easily adopted."))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"Updated with ",(0,n.yg)("a",{parentName:"em",href:"https://dp3.atlassian.net/browse/MB-13923"},"MB-13923"))," Utilizes Go's ",(0,n.yg)("inlineCode",{parentName:"li"},"embed")," directive, embedding all .SQL files at compile time for read-only access.")),(0,n.yg)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,n.yg)("h3",{id:"do-nothing"},(0,n.yg)("em",{parentName:"h3"},"Do nothing")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," ",(0,n.yg)("em",{parentName:"li"},"There's no work to be done so teams can focus on other work.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-")," ",(0,n.yg)("em",{parentName:"li"},"Existing SQL is embedded in Go files as strings"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-")," The current approach to SQL queries means that we cannot benefit\nfrom linting, checking, or potentially useful IDE visualization when formatting\nqueries"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-")," Long queries become more and more difficult to maintain")))),(0,n.yg)("h3",{id:"utilize-a-sql-template-engine"},(0,n.yg)("em",{parentName:"h3"},"Utilize a SQL Template Engine")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," ",(0,n.yg)("em",{parentName:"li"},"Simple setup.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," ",(0,n.yg)("em",{parentName:"li"},"The syntax is simple and easy to learn."),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," Ongoing SQL work should be more consistent, and have positive impacts\nfor onboarding efforts."))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-")," ",(0,n.yg)("em",{parentName:"li"},"The most readily applicable templating engine may not be consistently maintained/supported."),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-")," ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/Davmuz/gqt"},"Go SQL Templates")," most recent commit was 6 years ago")))),(0,n.yg)("h3",{id:"build-out-our-own-sql-templating-architecture"},(0,n.yg)("em",{parentName:"h3"},"Build out our own SQL Templating architecture")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," ",(0,n.yg)("em",{parentName:"li"},"Allows engineering team to take ownership of the templating design.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-")," ",(0,n.yg)("del",{parentName:"li"},(0,n.yg)("em",{parentName:"del"},"Additional effort to build out initially"))," ",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," In further testing, this approach proved to be much less effort than the initially chosen approach."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," Once established, future SQL query work following the determined pattern should\nbe more consistent, and have positive impacts for onboarding efforts.")))),(0,n.yg)("h3",{id:"a-hybrid-approach-using-an-external-library-implemented-to-work-with-pop"},(0,n.yg)("em",{parentName:"h3"},"A hybrid approach using an external library implemented to work with Pop")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," ",(0,n.yg)("em",{parentName:"li"},"Simple setup.")," "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," ",(0,n.yg)("em",{parentName:"li"},"The level of effort necessary to initiate refactor is low.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," ",(0,n.yg)("em",{parentName:"li"},"The syntax is simple and easy to learn."),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," Ongoing SQL work should be more consistent, and have positive impacts\nfor onboarding efforts."))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," ",(0,n.yg)("em",{parentName:"li"},"Allows engineering team to take ownership of the templating design.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," ",(0,n.yg)("em",{parentName:"li"},"Significantly less effort to build out initially than completely designing our own"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," Once established, future SQL query work following the determined pattern should\nbe more consistent, and have positive impacts for onboarding efforts."))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-")," ",(0,n.yg)("strong",{parentName:"li"},"Requires file I/O read each time move history is accessed, which is inefficient."))))}d.isMDXComponent=!0}}]);