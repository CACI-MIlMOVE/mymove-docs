"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[9800],{82664:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=t(45072),a=(t(11504),t(95788));t(10880);const i={},s="How to Debug Go in VSCode",l={unversionedId:"backend/guides/how-to/debug-go-with-vscode",id:"backend/guides/how-to/debug-go-with-vscode",title:"How to Debug Go in VSCode",description:"This guide will illustrate how to debug Go code in the MyMove repo with VSCode with the help of the VSCode Go extension. You can find more information about using the Go extension here.",source:"@site/docs/backend/guides/how-to/debug-go-with-vscode.md",sourceDirName:"backend/guides/how-to",slug:"/backend/guides/how-to/debug-go-with-vscode",permalink:"/mymove-docs/docs/backend/guides/how-to/debug-go-with-vscode",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/backend/guides/how-to/debug-go-with-vscode.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"How to Create a Custom Go Linter",permalink:"/mymove-docs/docs/backend/guides/how-to/create-a-custom-linter"},next:{title:"How to Switch from nodenv to asdf for Managing Node Versions",permalink:"/mymove-docs/docs/backend/guides/how-to/switch-from-nodenv-to-asdf"}},r={},u=[{value:"Debugging a Single Test",id:"debugging-a-single-test",level:2},{value:"Add a launch configuration to your launch.json",id:"add-a-launch-configuration-to-your-launchjson",level:3},{value:"Set up your extensions",id:"set-up-your-extensions",level:3},{value:"Run the test db",id:"run-the-test-db",level:3},{value:"Et voila!",id:"et-voila",level:3},{value:"Debugging the Local Server",id:"debugging-the-local-server",level:2},{value:"Add an attach configuration to your launch.json",id:"add-an-attach-configuration-to-your-launchjson",level:3},{value:"Build the server with debug flags",id:"build-the-server-with-debug-flags",level:3},{value:"Et voila...again!",id:"et-voilaagain",level:3}],d={toc:u},g="wrapper";function h(e){let{components:o,...t}=e;return(0,a.yg)(g,(0,n.c)({},d,t,{components:o,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"how-to-debug-go-in-vscode"},"How to Debug Go in VSCode"),(0,a.yg)("p",null,"This guide will illustrate how to debug Go code in the MyMove repo with VSCode with the help of the VSCode Go extension. You can find more information about using the Go extension ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/golang/vscode-go/blob/master/docs/debugging.md"},"here"),"."),(0,a.yg)("p",null,"The launch.json file specifies VSCode's debugging configurations. We'll be setting up VSCode to debug both the local server and any single Go test using the following example launch.json"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n   "version": "0.2.0",\n   "configurations": [\n      {\n         "name": "Test Current File",\n         "type": "go",\n         "request": "launch",\n         "mode": "test",\n         "program": "${relativeFileDirname}",\n         "showLog": true\n      },\n      {\n         "name": "Debug Server",\n         "type": "go",\n         "request": "attach",\n         "mode": "local",\n         "processId": "milmove_gin"\n      }\n   ]\n}\n')),(0,a.yg)("h2",{id:"debugging-a-single-test"},"Debugging a Single Test"),(0,a.yg)("p",null,"When working on a feature or addressing a test failure, it can often be convenient to focus on one test at a time. The following steps will configure VSCode to launch and debug a single Go test."),(0,a.yg)("h3",{id:"add-a-launch-configuration-to-your-launchjson"},"Add a launch configuration to your launch.json"),(0,a.yg)("p",null,'Add the "launch" configuration from the example launch.json to your configurations. This config will automatically debug whichever Go test file you have open for editing in VSCode.'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n   "name": "Test Current File",\n   "type": "go",\n   "request": "launch",\n   "mode": "test",\n   "program": "${relativeFileDirname}",\n   "showLog": true\n}\n')),(0,a.yg)("h3",{id:"set-up-your-extensions"},"Set up your extensions"),(0,a.yg)("p",null,"You'll also need a couple of extensions:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"The ",(0,a.yg)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=golang.go"},"Go extension")," from the Go Team at Google"),(0,a.yg)("li",{parentName:"ol"},"A direnv extension so that you have access to the correct environment variables -- ",(0,a.yg)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=Rubymaniac.vscode-direnv"},"here is one")," that requires that you have direnv already installed. Make sure to use its ",(0,a.yg)("inlineCode",{parentName:"li"},"direnv allow")," command after installing in order to load your environment variables")),(0,a.yg)("h3",{id:"run-the-test-db"},"Run the test db"),(0,a.yg)("p",null,"Many of the Go tests require the test db to be running, which you can start with",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"make server_test_setup")),(0,a.yg)("h3",{id:"et-voila"},"Et voila!"),(0,a.yg)("p",null,'Simply open the Go test file you want to debug and select your "Test Current File" configuration from the "Run and Debug" menu in the sidebar.'),(0,a.yg)("h2",{id:"debugging-the-local-server"},"Debugging the Local Server"),(0,a.yg)("p",null,"You can also attach to a running process like the MilMove backend server."),(0,a.yg)("h3",{id:"add-an-attach-configuration-to-your-launchjson"},"Add an attach configuration to your launch.json"),(0,a.yg)("p",null,'Add the "attach" configuration from the example launch.json to your configurations. This config will identify a process by its process_id (in this case, the milmove backend server) and attach to it.'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n   "name": "Debug Server",\n   "type": "go",\n   "request": "attach",\n   "mode": "local",\n   "processId": "milmove_gin"\n}\n')),(0,a.yg)("h3",{id:"build-the-server-with-debug-flags"},"Build the server with debug flags"),(0,a.yg)("p",null,"The server should be built with the flag ",(0,a.yg)("inlineCode",{parentName:"p"},'-gcflags=all="-N -l"')," in order to skip some build optimizations and make debugging easier. You can enable this every time you build the server with Makefile tasks by setting an environment variable:",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"export GOLAND=1")),(0,a.yg)("h3",{id:"et-voilaagain"},"Et voila...again!"),(0,a.yg)("p",null,"Run the server and the VSCode debug configuration and put a break point on a familiar handler/endpoint. You should see that the debugger has successfully connected to the process, and you should be able to hit that break point by performing an action or sending a request that corresponds to that handler/endpoint."))}h.isMDXComponent=!0}}]);