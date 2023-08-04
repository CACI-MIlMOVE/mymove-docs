"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[4720],{28408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>r});var o=n(87462),a=(n(67294),n(3905));n(8209);const i={sidebar_position:17},c="Time in Golang",l={unversionedId:"backend/guides/golang-time",id:"backend/guides/golang-time",title:"Time in Golang",description:"Clock Dependency",source:"@site/docs/backend/guides/golang-time.md",sourceDirName:"backend/guides",slug:"/backend/guides/golang-time",permalink:"/mymove-docs/docs/backend/guides/golang-time",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/backend/guides/golang-time.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"backendSidebar",previous:{title:"Switching over to Nix",permalink:"/mymove-docs/docs/backend/guides/switching-over-to-nix"},next:{title:"Loop Iteration in Golang",permalink:"/mymove-docs/docs/backend/guides/golang-loops"}},s={},r=[{value:"Clock Dependency",id:"clock-dependency",level:2},{value:"Setting the Mock Clock",id:"setting-the-mock-clock",level:3},{value:"MilMove Calendar Utilities",id:"milmove-calendar-utilities",level:2}],m={toc:r},k="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"time-in-golang"},"Time in Golang"),(0,a.kt)("h2",{id:"clock-dependency"},"Clock Dependency"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"time.Now()"),' can cause a lot of side effects in a codebase. One example is that you can\'t test the "current" time that happened in a function you called in the past.'),(0,a.kt)("p",null,"For example, let's say we have the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package mypackage\n\nimport "time"\n\nfunc MyTimeFunc() time.Time {\n    return time.Now()\n}\n\nfunc TestMyTimeFunc(t *testing.T) {\n    if MyTimeFunc() != time.Now() {\n        // This will error!\n        // The time in the function and the test happen at different times\n        t.Errorf("time was not now")\n  }\n}\n')),(0,a.kt)("p",null,"How do we test the contents of the return here? If we want to assert the time we need a way to know what ",(0,a.kt)("inlineCode",{parentName:"p"},"time.Now()")," was when the function was called."),(0,a.kt)("p",null,"Instead of directly using the ",(0,a.kt)("inlineCode",{parentName:"p"},"time")," package, we can pass a clock as a\ndependency and call ",(0,a.kt)("inlineCode",{parentName:"p"},".Now()")," on that. Then in our tests, we can assert against\nthat clock! The clock can be anything as long as it adheres to the ",(0,a.kt)("inlineCode",{parentName:"p"},"clock.Clock"),"\ninterface as defined in the ",(0,a.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/facebookgo/clock#Clock"},(0,a.kt)("inlineCode",{parentName:"a"},"facebookgo/clock"),"\npackage"),". We could, for\nexample, make the clock always return the year 0, or the 2019 New Year, or maybe\nyour birthday! In this clock package, there are two clocks."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The real clock where ",(0,a.kt)("inlineCode",{parentName:"li"},"clock.Now()")," will call ",(0,a.kt)("inlineCode",{parentName:"li"},"time.Now()"),"."),(0,a.kt)("li",{parentName:"ul"},"A mock clock where ",(0,a.kt)("inlineCode",{parentName:"li"},"clock.Now()")," always returns epoch time.\nWe'll show later how to change that!")),(0,a.kt)("p",null,"Let's look at the example above with the ",(0,a.kt)("inlineCode",{parentName:"p"},"clock")," package."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package mypackage\n\nimport "fmt"\nimport "time"\n\nimport "github.com/facebookgo/clock"\n\nfunc MyTimeFunc(clock clock.Clock) time.Time {\n    return clock.Now()\n}\n\n// Then our caller\nfunc main() {\n    // clock.New() creates a clock that uses the time package\n    // it will output current time when .Now() is called\n    fmt.Print(MyTimeFunc(clock.New()))\n}\n')),(0,a.kt)("p",null,"Then in our tests we can use a mock clock that freezes ",(0,a.kt)("inlineCode",{parentName:"p"},".Now()")," at epoch time:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func TestMyTimeFunc(t *testing.T) {\n    testClock := clock.NewMock()\n    if MyTimeFunc(testClock) != testClock.Now() {\n        // both should equal epoch time, we won\'t hit this error\n        t.Errorf("time was not now")\n  }\n}\n')),(0,a.kt)("p",null,"Cool, but what if I want to use a different date?"),(0,a.kt)("p",null,"Say my test relies on our ",(0,a.kt)("inlineCode",{parentName:"p"},"TestYear")," constant. The ",(0,a.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/facebookgo/clock#Mock"},"clock.Mock clock")," allows us to add durations to the clock and set the current time. Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"clock.Clock")," interface does not allow this, it needs to happen before passing the mock clock through the interface parameter."),(0,a.kt)("h3",{id:"setting-the-mock-clock"},"Setting the Mock Clock"),(0,a.kt)("p",null,"Here's an example using the test above and setting the time to September 30 of TestYear:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func TestMyTimeFunc(t *testing.T) {\n    testClock := clock.NewMock()\n    dateToTest := time.Date(TestYear, time.September, 30, 0, 0, 0, 0, time.UTC)\n    timeDiff := dateToTest.Sub(c.Now())\n    testClock.Add(timeDiff)\n    if MyTimeFunc(testClock) != testClock.Now() {\n        // both will now be September 30 of TestYear\n        // we\'ll pass the test again\n        t.Errorf("time was not now")\n  }\n}\n')),(0,a.kt)("h2",{id:"milmove-calendar-utilities"},"MilMove Calendar Utilities"),(0,a.kt)("p",null,"The MilMove project has a set of date/calendar utility to help develop and test.\nYou can find them in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/tree/main/pkg/dates"},"dates\npackage")),(0,a.kt)("p",null,"For testing, we also have ",(0,a.kt)("inlineCode",{parentName:"p"},"TestYear")," in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/main/pkg/testdatagen/constants.go"},"constants package"),", which should be used instead of the current year."))}d.isMDXComponent=!0}}]);