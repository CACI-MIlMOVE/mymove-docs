"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[8141],{91018:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>r,toc:()=>u});var i=s(87462),a=(s(67294),s(3905));s(8209);const n={title:"0011 Test Suites"},o="Test Suites",r={unversionedId:"adrs/test-suites",id:"adrs/test-suites",title:"0011 Test Suites",description:"User Story: 155076695",source:"@site/docs/adrs/0011-test-suites.md",sourceDirName:"adrs",slug:"/adrs/test-suites",permalink:"/mymove-docs/docs/adrs/test-suites",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0011-test-suites.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"0011 Test Suites"},sidebar:"adrsSidebar",previous:{title:"0010 Isolate Test Access to Database",permalink:"/mymove-docs/docs/adrs/isolate-test-access-to-database"},next:{title:"0012 The TSP Data Models",permalink:"/mymove-docs/docs/adrs/tsp-data-models"}},l={},u=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives  optional ",id:"pros-and-cons-of-the-alternatives--optional-",level:2},{value:"Use subtests in the style suggested on the Go Blog",id:"use-subtests-in-the-style-suggested-on-the-go-blog",level:3},{value:"Write our own suite-like functionality",id:"write-our-own-suite-like-functionality",level:3},{value:"Require that tests perform all setup and teardown themselves",id:"require-that-tests-perform-all-setup-and-teardown-themselves",level:3}],d={toc:u},p="wrapper";function m(e){let{components:t,...s}=e;return(0,a.kt)(p,(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"test-suites"},"Test Suites"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"User Story:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.pivotaltracker.com/story/show/155076695"},"155076695")),(0,a.kt)("p",null,"Go's built in ",(0,a.kt)("inlineCode",{parentName:"p"},"testing")," package does not support setup, teardown, etc. functionality that is provided by xUnit testing frameworks. In order to ensure that our test are running in a clean database, we want to call ",(0,a.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/gobuffalo/pop#Connection.TruncateAll"},(0,a.kt)("inlineCode",{parentName:"a"},"TruncateAll()"))," before each test executes (for more background, see ADR #0010)."),(0,a.kt)("p",null,"Running code before or after ",(0,a.kt)("em",{parentName:"p"},"all")," tests is supported by ",(0,a.kt)("inlineCode",{parentName:"p"},"go test")," by defining a ",(0,a.kt)("inlineCode",{parentName:"p"},"TestMain")," function, but this only allows for code to be run once at the very beginning and end of test execution and not before or after each test. Our requirement is for per-test setup and teardown, which is not supported."),(0,a.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use the ",(0,a.kt)("a",{parentName:"li",href:"https://godoc.org/github.com/stretchr/testify/suite"},"suite")," from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/stretchr/testify"},"Testify")),(0,a.kt)("li",{parentName:"ul"},"Use subtests in the style suggested ",(0,a.kt)("a",{parentName:"li",href:"https://blog.golang.org/subtests#TOC_6."},"on the Go Blog")),(0,a.kt)("li",{parentName:"ul"},"Write our own suite-like functionality"),(0,a.kt)("li",{parentName:"ul"},"Require that tests perform all setup and teardown themselves")),(0,a.kt)("p",null,"We did not consider adopting ",(0,a.kt)("a",{parentName:"p",href:"https://awesome-go.com/#testing"},"another Go testing framework"),", as we wanted as thin of a layer on top of ",(0,a.kt)("inlineCode",{parentName:"p"},"testing")," as possible."),(0,a.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Chosen Alternative: ",(0,a.kt)("strong",{parentName:"p"},"Use the suite functionality from Testify"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The API provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"testify.suite"),", which involves using a ",(0,a.kt)("inlineCode",{parentName:"p"},"struct")," to represent the suite and declaring tests as methods on it fits nicely with our use case. It also provides a place for suite- or test-level state should we need it.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Although a bit of extra code is needed so that it is picked up by ",(0,a.kt)("inlineCode",{parentName:"p"},"go test"),", once a suite is setup the developer experience of ",(0,a.kt)("em",{parentName:"p"},"put a test in the right place and it will be detected and run")," is preserved.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It is worth noting that Testify is maintained but not as actively as we might like. This is a risk, but it would be possible to replace its functionality with our own code without too much difficulty. We will address this in the future once we have some experience with using this approach.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Providing setup/teardown per-test functionality is familiar to developers who have worked with xUnit-style testing libraries in the past."))),(0,a.kt)("h2",{id:"pros-and-cons-of-the-alternatives--optional-"},"Pros and Cons of the Alternatives "),(0,a.kt)("h3",{id:"use-subtests-in-the-style-suggested-on-the-go-blog"},"Use subtests in the style suggested ",(0,a.kt)("a",{parentName:"h3",href:"https://blog.golang.org/subtests#TOC_6."},"on the Go Blog")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Does not rely on external dependencies."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+"),' Appeals to our desire to do things "the Go way".'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Would require us to write some custom code to wrap each test as subtests still only execute the setup or teardown once."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Adds friction to writing a test as new tests may not be automatically detected and will need to be manually registered in order to run."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Test-driven tests (another possible way to structure tests) don't seem like a good fit for our integration-style tests that tend to be very long.")),(0,a.kt)("h3",{id:"write-our-own-suite-like-functionality"},"Write our own suite-like functionality"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Avoids adding an external dependency to the project."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Provides an opportunity to customize the suite API to suit the project's needs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Requires writing non-trivial code for a problem we are just starting to understand.")),(0,a.kt)("h3",{id:"require-that-tests-perform-all-setup-and-teardown-themselves"},"Require that tests perform all setup and teardown themselves"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Makes all behavior associated with a test visible within the test body."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Obscures the intent of a test by requiring boilerplate to be places in each test."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Changing setup and teardown that affect multiple tests can require making changes to the body of tests, leading to maintenance issues in the long term.")))}m.isMDXComponent=!0}}]);