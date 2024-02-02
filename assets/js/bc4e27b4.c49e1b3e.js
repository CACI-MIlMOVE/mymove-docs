"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[9024],{79222:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=t(45072),n=(t(11504),t(95788));t(10880);const i={sidebar_position:7},r="How to upgrade Node",d={unversionedId:"backend/guides/how-to/upgrade-node",id:"backend/guides/how-to/upgrade-node",title:"How to upgrade Node",description:"1. Submit a PR that updates node to the new version in https://github.com/transcom/circleci-docker/. Here's an example.",source:"@site/docs/backend/guides/how-to/upgrade-node.md",sourceDirName:"backend/guides/how-to",slug:"/backend/guides/how-to/upgrade-node",permalink:"/mymove-docs/docs/backend/guides/how-to/upgrade-node",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/backend/guides/how-to/upgrade-node.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"backendSidebar",previous:{title:"How to Set Up a Feature Flag",permalink:"/mymove-docs/docs/backend/guides/how-to/set-up-a-feature-flag"},next:{title:"How to revert a change",permalink:"/mymove-docs/docs/backend/guides/how-to/revert-a-change"}},s={},c=[],m={toc:c},l="wrapper";function p(e){let{components:o,...t}=e;return(0,n.yg)(l,(0,a.c)({},m,t,{components:o,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"how-to-upgrade-node"},"How to upgrade Node"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Submit a PR that updates node to the new version in ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/transcom/circleci-docker/"},"https://github.com/transcom/circleci-docker/"),". ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/transcom/circleci-docker/pull/130"},"Here's an example"),"."),(0,n.yg)("li",{parentName:"ol"},"Look for the hash here: ",(0,n.yg)("a",{parentName:"li",href:"https://hub.docker.com/r/milmove/circleci-docker/tags"},"https://hub.docker.com/r/milmove/circleci-docker/tags")),(0,n.yg)("li",{parentName:"ol"},"In the transcom/mymove repo, create a PR to update node. ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/transcom/mymove/pull/6878"},"Here's an example")," && ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/transcom/mymove/pull/6904"},"this PR"))),(0,n.yg)("p",null,"Things to modify:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Bump the nodejs version in ",(0,n.yg)("inlineCode",{parentName:"li"},".tool-versions")," and ",(0,n.yg)("inlineCode",{parentName:"li"},".node_version")," (some folks may still be using nodenv to manage node)"),(0,n.yg)("li",{parentName:"ul"},"Modify the instances of ",(0,n.yg)("inlineCode",{parentName:"li"},"milmove/circleci-docker:milmove-app-")," and replace the hash w/ the one found in step 2. (I used the PR branch name rather than hash so it would pull any changes I made over on the ",(0,n.yg)("inlineCode",{parentName:"li"},"circleci-docker")," PR without having to update the hash each time I made a change)"),(0,n.yg)("li",{parentName:"ul"},"update ",(0,n.yg)("inlineCode",{parentName:"li"},"check-node-version")," and ",(0,n.yg)("inlineCode",{parentName:"li"},"prereqs")),(0,n.yg)("li",{parentName:"ul"},"Do a find and replace to update references of the prior node version with the new node version")),(0,n.yg)("ol",{start:4},(0,n.yg)("li",{parentName:"ol"},"Run ",(0,n.yg)("inlineCode",{parentName:"li"},"make clean build")," and verify that the desired version of Node is being used"),(0,n.yg)("li",{parentName:"ol"},"Get reviews for the 2 PRs to check your work."),(0,n.yg)("li",{parentName:"ol"},"Merge the PR from step 1"),(0,n.yg)("li",{parentName:"ol"},"Find the new image hash from the Docker hub"),(0,n.yg)("li",{parentName:"ol"},"Update the transcom/mymove PR to use the hash from step 7"),(0,n.yg)("li",{parentName:"ol"},"Test again to make sure everything works as expected."),(0,n.yg)("li",{parentName:"ol"},"Announce in #prac-engineering that you will be updating node and any\ninstructions ",(0,n.yg)("a",{parentName:"li",href:"https://ustcdp3.slack.com/archives/CP6PTUPQF/p1624996730029000"},"An example slack\nmessage")),(0,n.yg)("li",{parentName:"ol"},"Merge the PR in transcom/mymove")))}p.isMDXComponent=!0}}]);