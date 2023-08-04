"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[4786],{28591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=n(87462),r=(n(67294),n(3905));n(8209);const o={sidebar_position:6},s="Writing Frontend Tests: Enzyme and React Testing Library",a={unversionedId:"frontend/testing/writing-frontend-tests-enzyme-and-react-testing-library",id:"frontend/testing/writing-frontend-tests-enzyme-and-react-testing-library",title:"Writing Frontend Tests: Enzyme and React Testing Library",description:"We use both Enzyme and React Testing Library (RTL) to create unit/component-level tests. These two libraries work off very different philosophies, but can be used within the same files without conflict.",source:"@site/docs/frontend/testing/writing-frontend-tests-enzyme-and-react-testing-library.md",sourceDirName:"frontend/testing",slug:"/frontend/testing/writing-frontend-tests-enzyme-and-react-testing-library",permalink:"/mymove-docs/docs/frontend/testing/writing-frontend-tests-enzyme-and-react-testing-library",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/frontend/testing/writing-frontend-tests-enzyme-and-react-testing-library.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"frontendSidebar",previous:{title:"Writing Frontend Tests for MilMove",permalink:"/mymove-docs/docs/frontend/testing/writing-frontend-tests-for-milmove"},next:{title:"Writing Tests using React Testing Library and Jest",permalink:"/mymove-docs/docs/frontend/testing/writing-tests-using-react-testing-library-and-jest"}},l={},d=[{value:"Enzyme",id:"enzyme",level:2},{value:"React Testing Library",id:"react-testing-library",level:2},{value:"Why not choose one or the other?",id:"why-not-choose-one-or-the-other",level:2},{value:"When should I use Enzyme? When should I use RTL?",id:"when-should-i-use-enzyme-when-should-i-use-rtl",level:2},{value:"Resources",id:"resources",level:2},{value:"On moving from Enzyme to RTL",id:"on-moving-from-enzyme-to-rtl",level:3},{value:"React Testing Library",id:"react-testing-library-1",level:3},{value:"Enzyme",id:"enzyme-1",level:3}],c={toc:d},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"writing-frontend-tests-enzyme-and-react-testing-library"},"Writing Frontend Tests: Enzyme and React Testing Library"),(0,r.kt)("p",null,"We use both Enzyme and React Testing Library (RTL) to create unit/component-level tests. These two libraries work off very different philosophies, but can be used within the same files without conflict. "),(0,r.kt)("p",null,"We now favor RTL over Enzyme and over time the code base will reflect this change."),(0,r.kt)("h2",{id:"enzyme"},"Enzyme"),(0,r.kt)("p",null,"Most of our tests are currently written in Enzyme. This was the initial testing library of choice for the frontend."),(0,r.kt)("p",null,"While we have largely used it to test component user interactions, it is also well-suited to test component internals. However, this style of testing has been deprecated by the React team in favor of RTL."),(0,r.kt)("h2",{id:"react-testing-library"},"React Testing Library"),(0,r.kt)("p",null,"This library focuses on user-oriented component-level tests. You cannot test component state or internals with RTL. Instead, you test how the user interacts with the component and what the results are that are reflected to the user."),(0,r.kt)("p",null,"This is the testing library recommended by the React team."),(0,r.kt)("h2",{id:"why-not-choose-one-or-the-other"},"Why not choose one or the other?"),(0,r.kt)("p",null,"Migrating all of our tests to RTL will require effort spread out over time. There is also a learning curve for those who either have learned Enzyme or are unfamiliar with writing tests while they get up to speed with RTL. "),(0,r.kt)("p",null,"Since both libraries can coexist, we chose to move forward with RTL rather than wait for a full migration away from Enzyme."),(0,r.kt)("h2",{id:"when-should-i-use-enzyme-when-should-i-use-rtl"},"When should I use Enzyme? When should I use RTL?"),(0,r.kt)("p",null,"In general and within reason, if you are writing a new test, it should be written with RTL."),(0,r.kt)("p",null,"Exceptions to this case include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lack of RTL knowledge/understanding that significantly slows development time on a particular story."),(0,r.kt)("li",{parentName:"ul"},"Deadlines where existing Enzyme tests can be quickly modified/duplicated to expedite completion of a story."),(0,r.kt)("li",{parentName:"ul"},"Rare cases where Enzyme is better suited to testing a particular component interaction.")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("h3",{id:"on-moving-from-enzyme-to-rtl"},"On moving from Enzyme to RTL"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://testing-library.com/docs/react-testing-library/migrate-from-enzyme"},"Migrate from Enzyme")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/enzyme-vs-react-testing-library-a-mindset-shift/"},"Enyzme vs RTL, a mindset shift")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.wisdomgeek.com/development/web-development/javascript/how-to-unit-test-private-non-exported-function-in-javascript/"},"Sometimes we really do need to test an internal function")),(0,r.kt)("h3",{id:"react-testing-library-1"},"React Testing Library"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kentcdodds.com/blog/write-tests"},"Write tests. Not too many. Mostly integration.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kentcdodds.com/blog/introducing-the-react-testing-library"},"Introducing the react-testing-library")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://testing-library.com/docs/react-testing-library/intro/"},"React Testing Library official documentation")),(0,r.kt)("h3",{id:"enzyme-1"},"Enzyme"),(0,r.kt)("p",null,"For Enzyme resources see our guide on ",(0,r.kt)("a",{parentName:"p",href:"/mymove-docs/docs/frontend/testing/unit-test-react-components"},"How To Unit Test React Components")))}h.isMDXComponent=!0}}]);