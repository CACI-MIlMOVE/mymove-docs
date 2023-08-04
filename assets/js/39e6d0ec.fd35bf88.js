"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[2227],{6980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));n(8209);const r={sidebar_position:7},s="Writing Tests using React Testing Library and Jest",o={unversionedId:"frontend/testing/writing-tests-using-react-testing-library-and-jest",id:"frontend/testing/writing-tests-using-react-testing-library-and-jest",title:"Writing Tests using React Testing Library and Jest",description:"This guide will cover preferred strategies for testing using React Testing Library (RTL).",source:"@site/docs/frontend/testing/writing-tests-using-react-testing-library-and-jest.md",sourceDirName:"frontend/testing",slug:"/frontend/testing/writing-tests-using-react-testing-library-and-jest",permalink:"/mymove-docs/docs/frontend/testing/writing-tests-using-react-testing-library-and-jest",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/frontend/testing/writing-tests-using-react-testing-library-and-jest.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"frontendSidebar",previous:{title:"Writing Frontend Tests: Enzyme and React Testing Library",permalink:"/mymove-docs/docs/frontend/testing/writing-frontend-tests-enzyme-and-react-testing-library"},next:{title:"Using factories to generate data for front-end tests",permalink:"/mymove-docs/docs/frontend/testing/using-factories-to-generate-data-for-frontend-tests"}},l={},d=[{value:"Resources",id:"resources",level:2},{value:"Using Screen",id:"using-screen",level:2},{value:"Using getBy or findBy over queryBy",id:"using-getby-or-findby-over-queryby",level:2},{value:"Using await",id:"using-await",level:2},{value:"Using Table Driven Tests",id:"using-table-driven-tests",level:2},{value:"Using Jest",id:"using-jest",level:2},{value:"jest.fn()",id:"jestfn",level:3},{value:"jest.mockImplementationOnce()",id:"jestmockimplementationonce",level:3},{value:"Using userEvent",id:"using-userevent",level:2},{value:"Performance considerations",id:"performance-considerations",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"writing-tests-using-react-testing-library-and-jest"},"Writing Tests using React Testing Library and Jest"),(0,a.kt)("p",null,"This guide will cover preferred strategies for testing using React Testing Library (RTL).\n",(0,a.kt)("a",{parentName:"p",href:"/mymove-docs/docs/frontend/testing/writing-frontend-tests-for-milmove"},"This wiki")," covers strategies for how MilMove writes tests."),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("p",null,"The React Testing Library documentation is a great resource, specifically; ",(0,a.kt)("a",{parentName:"p",href:"https://testing-library.com/docs/queries/about"},"the queries section"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kentcdodds.com/blog/common-mistakes-with-react-testing-library"},"This article")," by Kent C. Dodds is also a useful reference. Familiarity with this article is recommended. Some of the following sections will be repeats of this article, but are once again highlighted here as they are common requests in code reviews."),(0,a.kt)("p",null,"One of the things we'd like to try is to use ARIA roles as much as possible. To that end, here are some MDN docs for roles: ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles")),(0,a.kt)("h2",{id:"using-screen"},"Using Screen"),(0,a.kt)("p",null,"Use screen for querying and debugging. This helps prevent having to keep the destructure up to date from adding or removing queries. "),(0,a.kt)("p",null,"Yes, good:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"screen.getByRole(...)\n")),(0,a.kt)("p",null,"No, avoid:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const { getByRole } = ...\n")),(0,a.kt)("h2",{id:"using-getby-or-findby-over-queryby"},"Using getBy or findBy over queryBy"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"getBy...")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"findBy...")," when something is expected to be in the document. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"queryBy...")," when something is not expected to be in the document. This is because ",(0,a.kt)("inlineCode",{parentName:"p"},"getBy...")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"findBy...")," will throw errors if they don't find what they are looking for, while ",(0,a.kt)("inlineCode",{parentName:"p"},"queryBy...")," will return null."),(0,a.kt)("p",null,"Note: After the first ",(0,a.kt)("inlineCode",{parentName:"p"},"await screen.findBy*"),", the rest can be ",(0,a.kt)("inlineCode",{parentName:"p"},"screen.getBy*")," without ",(0,a.kt)("inlineCode",{parentName:"p"},"await"),". The only time you need to then do ",(0,a.kt)("inlineCode",{parentName:"p"},"await screen.findBy*")," again should be if you make changes to the page and need to wait for the updates to take effect."),(0,a.kt)("p",null,"Yes, good:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"expect(await screen.findByRole('heading', { name: 'Some heading', level: 2 })).toBeInTheDocument();\nexpect(await screen.queryByRole('heading', { name: 'Some heading not in the document', level: 2 })).not.toBeInTheDocument();\n")),(0,a.kt)("p",null,"No, avoid:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"expect(await screen.queryByRole('heading', { name: 'Some heading', level: 2 })).toBeInTheDocument();\n")),(0,a.kt)("h2",{id:"using-await"},"Using await"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"await")," in combination with ",(0,a.kt)("inlineCode",{parentName:"p"},"findBy...")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"waitFor")," with 'getBy'. ",(0,a.kt)("inlineCode",{parentName:"p"},"findBy...")," queries use ",(0,a.kt)("inlineCode",{parentName:"p"},"waitFor")," under the hood, so it is far easier to read ",(0,a.kt)("inlineCode",{parentName:"p"},"await screen.findBy...")," than ",(0,a.kt)("inlineCode",{parentName:"p"},"await waitFor(() => screen.getBy...)...")," "),(0,a.kt)("p",null,"Yes, good: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"await screen.findByRole('heading', { name: 'Some heading', level: 2 }));\n")),(0,a.kt)("p",null,"No, avoid: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"await waitFor(() => screen.getByRole('heading', { name: 'Some heading', level: 2 }));\n")),(0,a.kt)("h2",{id:"using-table-driven-tests"},"Using Table Driven Tests"),(0,a.kt)("p",null,"Sometimes you want to test repetitive things, such as verifying that each field will have an appropriate error message when not filled out. To that end, you can use table driven tests."),(0,a.kt)("p",null,"Please wrap your table driven tests inside of a describe! It makes them easier to read when printed out to the screen. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"describe('description of what the table driven test is doing', () => {\n  it.each([\n    ['some data that you want checked', 'usually the expected value'],\n    ['some other data that you want checked', 'some other value'],\n  ])('this is a table test for %s', async (data, expectedValue) => {\n    // Insert test that you want repeated for every item in the list.\n  });\n});\n")),(0,a.kt)("h2",{id:"using-jest"},"Using Jest"),(0,a.kt)("h3",{id:"jestfn"},"jest.fn()"),(0,a.kt)("p",null,"jest.fn() is commonly used as a placeholder function for when a component takes in a function as a prop. "),(0,a.kt)("h3",{id:"jestmockimplementationonce"},"jest.mockImplementationOnce()"),(0,a.kt)("h2",{id:"using-userevent"},"Using userEvent"),(0,a.kt)("p",null,"Generally, prefer ",(0,a.kt)("inlineCode",{parentName:"p"},"userEvent")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"fireEvent"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"userEvent"),"s are designed to mock complex user interaction, and may wrap a number of low-level ",(0,a.kt)("inlineCode",{parentName:"p"},"fireEvent")," methods. For example, prefer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"await userEvent.type(textBox, 'My verbose description');\n")),(0,a.kt)("p",null,"to "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"fireEvent.change(textBox, {target: {value: 'My verbose description'}});\n")),(0,a.kt)("p",null,"because the former attempts to mimic all key and focus events that would fire when a user actually types into the field."),(0,a.kt)("p",null,"Note: userEvent returns a promise, so you need to utilize ",(0,a.kt)("inlineCode",{parentName:"p"},"await")," when calling and refrain from using in ",(0,a.kt)("inlineCode",{parentName:"p"},"waitFor")," blocks."),(0,a.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,a.kt)("p",null,"Note that there may be multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"userEvent"),"s that lead to similar outcomes, but that take different amounts of time to accomplish, for example ",(0,a.kt)("a",{parentName:"p",href:"https://testing-library.com/docs/ecosystem-user-event/#typeelement-text-options"},"type()")," and ",(0,a.kt)("a",{parentName:"p",href:"https://testing-library.com/docs/ecosystem-user-event/#pasteelement-text-eventinit-options"},"paste()"),"."),(0,a.kt)("p",null,"Compare the above use of ",(0,a.kt)("inlineCode",{parentName:"p"},"type()")," to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"await userEvent.paste(textBox, 'My verbose description');\n")),(0,a.kt)("p",null,"If the given form validates on every change, using ",(0,a.kt)("inlineCode",{parentName:"p"},".type()")," will validate for every character, while using ",(0,a.kt)("inlineCode",{parentName:"p"},".paste()")," will only validate once. If you find that using ",(0,a.kt)("inlineCode",{parentName:"p"},".type()")," is a bottleneck on your test, and both ",(0,a.kt)("inlineCode",{parentName:"p"},".paste()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".type()")," are otherwise appropriate, ",(0,a.kt)("inlineCode",{parentName:"p"},".paste()")," may be preferred."))}u.isMDXComponent=!0}}]);