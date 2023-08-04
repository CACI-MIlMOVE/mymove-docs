"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[7043],{97987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var l=n(87462),a=(n(67294),n(3905));n(8209);const o={sidebar_position:3},i="Running Locust Locally",s={unversionedId:"tools/locust/running-locust-locally",id:"tools/locust/running-locust-locally",title:"Running Locust Locally",description:"This section covers running locust locally, whether pointing at a local mymove server or the load test environment",source:"@site/docs/tools/locust/running-locust-locally.md",sourceDirName:"tools/locust",slug:"/tools/locust/running-locust-locally",permalink:"/mymove-docs/docs/tools/locust/running-locust-locally",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/tools/locust/running-locust-locally.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"toolsSidebar",previous:{title:"Running Load Tests",permalink:"/mymove-docs/docs/tools/locust/running-load-tests"},next:{title:"Local Load Test Setup",permalink:"/mymove-docs/docs/tools/locust/local-load-test-setup"}},r={},u=[{value:"Setup",id:"setup",level:2},{value:"Locust CLI",id:"locust-cli",level:2},{value:"Running Without The Web UI",id:"running-without-the-web-ui",level:3},{value:"Running With Tags",id:"running-with-tags",level:3},{value:"Examples",id:"examples",level:3},{value:"Resources",id:"resources",level:3},{value:"Workflow Tags",id:"workflow-tags",level:3},{value:"Running Preset Load Tests",id:"running-preset-load-tests",level:2}],p={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"running-locust-locally"},"Running Locust Locally"),(0,a.kt)("p",null,"This section covers running ",(0,a.kt)("inlineCode",{parentName:"p"},"locust")," locally, whether pointing at a local ",(0,a.kt)("inlineCode",{parentName:"p"},"mymove")," server or the load test environment\n",(0,a.kt)("inlineCode",{parentName:"p"},"mymove")," server. We specify which we want to point at by defining the ",(0,a.kt)("inlineCode",{parentName:"p"},"host"),". So if you want to run against the local\n",(0,a.kt)("inlineCode",{parentName:"p"},"mymove")," server, you'll use ",(0,a.kt)("inlineCode",{parentName:"p"},"local"),", while the load test env will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"dp3")," value. You can define the host either in\nthe UI in the appropriate field, or via the command line using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--host")," option, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"--host local"),"."),(0,a.kt)("p",null,"You can invoke the ",(0,a.kt)("inlineCode",{parentName:"p"},"locust")," command directly to run the load tests (either , or you can use some presets we\nhave defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Makefile"),"."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"Follow the instructions in ",(0,a.kt)("a",{parentName:"p",href:"./local-load-test-setup"},"Local Load Test Setup"),"."),(0,a.kt)("h2",{id:"locust-cli"},"Locust CLI"),(0,a.kt)("p",null,"If you want more control over the parameters for a load test, you will need to invoke the ",(0,a.kt)("inlineCode",{parentName:"p"},"locust")," command directly.\nThis will look something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"locust -f <path_to_locustfile>.py --host <local/dp3>\n")),(0,a.kt)("p",null,"Ex:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"locust -f locustfiles/prime.py --host local\n")),(0,a.kt)("h3",{id:"running-without-the-web-ui"},"Running Without The Web UI"),(0,a.kt)("p",null,"To run the load tests without the web interface you will need to specify a few things that would otherwise have been\ninput via the interface."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add the ",(0,a.kt)("inlineCode",{parentName:"li"},"--headless")," tag to turn off the UI."),(0,a.kt)("li",{parentName:"ul"},"Add the ",(0,a.kt)("inlineCode",{parentName:"li"},"-u")," (or ",(0,a.kt)("inlineCode",{parentName:"li"},"--users"),") option to specify the total number of users.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("admonition",{parentName:"li",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Note that this option can also be used when running with the web UI and will serve as a starting value."))))),(0,a.kt)("li",{parentName:"ul"},"Add the ",(0,a.kt)("inlineCode",{parentName:"li"},"-r")," (or ",(0,a.kt)("inlineCode",{parentName:"li"},"--spawn-rate"),") option to specify the number of users that should be added per\nsecond.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("admonition",{parentName:"li",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Note that this option can also be used when running with the web UI and will serve as a starting value."))))),(0,a.kt)("li",{parentName:"ul"},"Add the ",(0,a.kt)("inlineCode",{parentName:"li"},"-t")," (or ",(0,a.kt)("inlineCode",{parentName:"li"},"--run-time"),") option to specify how long the tests should run for, e.g. (300s,\n20m, 3h, 1h30m, etc.)")),(0,a.kt)("h3",{id:"running-with-tags"},"Running With Tags"),(0,a.kt)("p",null,"There are other options that can be useful such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-T")," (or ",(0,a.kt)("inlineCode",{parentName:"li"},"--tags"),") to specify which load tests to run based on their tags.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"You can see a load test's tag by looking at the task definition and looking for ",(0,a.kt)("inlineCode",{parentName:"li"},'@tag("myTag")'),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"So in this case you would use ",(0,a.kt)("inlineCode",{parentName:"li"},"-T myTag")))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-E")," (or ",(0,a.kt)("inlineCode",{parentName:"li"},"--exclude-tags"),") to specify which load tests to exclude based on their tags.")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,"The command will also take a list (or single one) of ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," classes at the end."),(0,a.kt)("p",null,"So a full command could look like:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Running a subset of the prime load tests, with only the prime user, and without the UI:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"locust -f locustfiles/prime.py --host local --headless -u 1000 -r 50 -t 30s -T listMoves PrimeUser\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Starting the locust web UI with the host, number of users, and spawn rate pre-set for office load tests:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"locust -f locustfiles/office.py --host local -u 100 -r 2\n")))),(0,a.kt)("h3",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can see more information on the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.locust.io/en/stable/running-without-web-ui.html#running-without-web-ui"},"locust running without the web UI docs"),"."),(0,a.kt)("li",{parentName:"ul"},"For more CLI config options, refer to the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.locust.io/en/stable/configuration.html"},"locust configuration docs"),".")),(0,a.kt)("h3",{id:"workflow-tags"},"Workflow Tags"),(0,a.kt)("p",null,"There are several workflows defined as tags, so you can use those tags in the ",(0,a.kt)("inlineCode",{parentName:"p"},"locust")," command as shown above. Listed\nbelow are the available workflows tags to test."),(0,a.kt)("p",null,"Prime API Workflow Tags"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hhgMove"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This workflow simulates how an HHG move would flow through the PrimeAPI. This workflow\nutilizes both PrimeAPI and SupportAPI tasks."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"createMTOShipmentWorkflow"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This work flow tests the PrimeAPI ",(0,a.kt)("inlineCode",{parentName:"li"},"create_mto_shipment")," endpoint. It creates or selects an\nexisting move, then creates shipments on the selected move.")))),(0,a.kt)("h2",{id:"running-preset-load-tests"},"Running Preset Load Tests"),(0,a.kt)("p",null,"Default commands for each ",(0,a.kt)("inlineCode",{parentName:"p"},"locustfile")," are available in the Makefile to make rerunning common preset tests easier. These\nall use the UI and default to the ",(0,a.kt)("inlineCode",{parentName:"p"},"local")," host (but the host can be changed in the UI). These commands include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Prime and Support API load tests - runs the load tests for ",(0,a.kt)("inlineCode",{parentName:"p"},"locustfiles/prime.py"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"make load_test_prime\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Office/GHC API load tests - runs the load tests for ",(0,a.kt)("inlineCode",{parentName:"p"},"locustfiles/office.py")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"make load_test_office\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Customer/Internal API load tests - runs load tests for ",(0,a.kt)("inlineCode",{parentName:"p"},"locustfiles/milmove.py")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"make load_test_milmove\n")))),(0,a.kt)("p",null,"Each of these commands opens the Locust interface for initiating and monitoring the tests, set to\n",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8089"},"http://localhost:8089"),". Using this interface, you can set the number of users to simulate, their spawn rate, and the\nhost to target. Then start and stop the test at will."))}c.isMDXComponent=!0}}]);