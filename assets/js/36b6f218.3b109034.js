"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[8381],{11730:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var a=i(87462),n=(i(67294),i(3905));i(8209);const o={sidebar_position:16},l="Switching over to Nix",s={unversionedId:"backend/guides/switching-over-to-nix",id:"backend/guides/switching-over-to-nix",title:"Switching over to Nix",description:"As a developer on the MilMove project, I would like to not have to maintain to separate sets of local environment setups (our original setup instructions and nix). So to that end, this is to investigate what it would take to fully switch over to nix.",source:"@site/docs/backend/guides/switching-over-to-nix.md",sourceDirName:"backend/guides",slug:"/backend/guides/switching-over-to-nix",permalink:"/mymove-docs/docs/backend/guides/switching-over-to-nix",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/guides/switching-over-to-nix.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"backendSidebar",previous:{title:"Roles and Permissions",permalink:"/mymove-docs/docs/backend/guides/roles-and-permissions"},next:{title:"Time in Golang",permalink:"/mymove-docs/docs/backend/guides/golang-time"}},r={},h=[{value:"OS Considerations",id:"os-considerations",level:2},{value:"Pros",id:"pros",level:2},{value:"Cons",id:"cons",level:2},{value:"What Would It Take To Switch Over",id:"what-would-it-take-to-switch-over",level:2}],d={toc:h},u="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"switching-over-to-nix"},"Switching over to Nix"),(0,n.kt)("p",null,"As a developer on the MilMove project, I would like to not have to maintain to separate sets of local environment setups (our original setup instructions and nix). So to that end, this is to investigate what it would take to fully switch over to nix."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://dp3.atlassian.net/browse/MB-8725"},"Relevant JIRA ticket")),(0,n.kt)("h2",{id:"os-considerations"},"OS Considerations"),(0,n.kt)("p",null,"Nix is only available for MacOS and Linux."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MacOS",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"We already only really have instructions and helpful info for setting this project up on MacOS."))),(0,n.kt)("li",{parentName:"ul"},"Linux",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Our instructions might work for linux, but they may or may not need a few tweaks for this."))),(0,n.kt)("li",{parentName:"ul"},"Windows",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"We do not have any instructions for getting this working in Windows as is. Just the fact that our main interface for working on the project is ",(0,n.kt)("inlineCode",{parentName:"li"},"make")," makes it so that we don't immediately support Windows. It ",(0,n.kt)("em",{parentName:"li"},"can")," be installed on Windows, but it can be a pain to do so, and we don't point to helpful docs for how to do this.")))),(0,n.kt)("p",null,"With the above in mind, switching from our current flow to ",(0,n.kt)("inlineCode",{parentName:"p"},"nix")," would not really change our OS support."),(0,n.kt)("h2",{id:"pros"},"Pros"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Having a single way of setting up locally means fewer things we have to keep up to date.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"We have several scripts that check versions of software that we could stop maintaining since nix declares the versions we want and installs them."),(0,n.kt)("li",{parentName:"ul"},"We have some makefile commands that exist just to run these scripts that check versions so we can get rid of those."))),(0,n.kt)("li",{parentName:"ul"},"We also have several tools that we don't have version checks for in the repo so it's easy for people to have different versions of things. That will still be possible in the ",(0,n.kt)("inlineCode",{parentName:"li"},"nix")," setup because there's a few packages needed before you can even use the ",(0,n.kt)("inlineCode",{parentName:"li"},"nix")," setup we have like ",(0,n.kt)("inlineCode",{parentName:"li"},"direnv"),", but at least the number will be much smaller, and we could also have that in version control possibly and just handle it slightly differently (e.g. have people use that file to install the first dependencies like ",(0,n.kt)("inlineCode",{parentName:"li"},"direnv")," globally, then have them use the existing ",(0,n.kt)("inlineCode",{parentName:"li"},"nix")," setup."),(0,n.kt)("li",{parentName:"ul"},"We could use something like ",(0,n.kt)("inlineCode",{parentName:"li"},"niv")," to keep our packages up to date:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://nixos.org/guides/towards-reproducibility-pinning-nixpkgs.html"},"NixPkgs - Towards Reproducibility")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nmattia/niv/"},(0,n.kt)("inlineCode",{parentName:"a"},"niv")," - GitHub Repo")))),(0,n.kt)("li",{parentName:"ul"},"Set up is quicker with ",(0,n.kt)("inlineCode",{parentName:"li"},"nix")," than our current process.")),(0,n.kt)("h2",{id:"cons"},"Cons"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Nix is something that is new to most people on the project vs ",(0,n.kt)("inlineCode",{parentName:"li"},"homebrew")," which is more ubiquitous, at least among Mac devs."),(0,n.kt)("li",{parentName:"ul"},"Installation is via executing a ",(0,n.kt)("inlineCode",{parentName:"li"},"curl")," shell script.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"It's something we've talked about being a limitation for full adoption and\nthat we should consider contributing to ",(0,n.kt)("inlineCode",{parentName:"li"},"nix")," by making it possible to\ninstall via ",(0,n.kt)("inlineCode",{parentName:"li"},"homebrew")," or some other method."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://trussworks.slack.com/archives/C01KTH6HP7D/p1611793387004800"},"Slack thread with more info"),"."))),(0,n.kt)("li",{parentName:"ul"},"Packages in ",(0,n.kt)("inlineCode",{parentName:"li"},"nix")," can lag behind their counterparts in ",(0,n.kt)("inlineCode",{parentName:"li"},"homebrew"),". This means that if we do switch, we either have to be ok with being behind, or we need to be willing to make contributions to ",(0,n.kt)("inlineCode",{parentName:"li"},"nix")," to update the packages we care about."),(0,n.kt)("li",{parentName:"ul"},"Finding the hashes for any given package version can be a pain.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"We have a ",(0,n.kt)("a",{parentName:"li",href:"https://ahobson.github.io/nix-package-search/#/search"},"package search setup by Truss")," that can help with this, but ideally we could do it easier.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"You can also use it on your command line like so:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sSfL https://ahobson.github.io/nix-package-search/nix/nixpkgs-unstable/all_packages.csv | grep 'awscli2'\n"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"niv")," is another way we could mitigate this issue.")))),(0,n.kt)("h2",{id:"what-would-it-take-to-switch-over"},"What Would It Take To Switch Over"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We have a lot of hard-coded paths for packages.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"E.g. the path to ",(0,n.kt)("inlineCode",{parentName:"li"},"pre-commit")," in our ",(0,n.kt)("inlineCode",{parentName:"li"},"Makefile"),", or the path to ",(0,n.kt)("inlineCode",{parentName:"li"},"opensc")," in the CAC scripts."),(0,n.kt)("li",{parentName:"ul"},"These are hard-coded for where ",(0,n.kt)("inlineCode",{parentName:"li"},"homebrew")," installs things, so we would need to update them to look in a few more places, or preferably, update them to use built in commands like ",(0,n.kt)("inlineCode",{parentName:"li"},"type")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"command")," to find their paths.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/a/85250"},"Stack Exchange: Finding the Path of an Executable")))))),(0,n.kt)("li",{parentName:"ul"},"We need to decide if we are ok with the way it's installed now, or if we want to go through the effort of contributing another installation method."),(0,n.kt)("li",{parentName:"ul"},"We would need an ADR stating our intention to switch and reasoning behind the switch (this document could easily feed that one)."),(0,n.kt)("li",{parentName:"ul"},"Need to decide if we would make it more of a gradual switch or have a switchover date (or more likely week).",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A gradual switch could work well in that as people come across issues with their current install, we could point them at the instructions for switching over to ",(0,n.kt)("inlineCode",{parentName:"li"},"nix"),", which should hopefully let them be on their way in under an hour.")))))}p.isMDXComponent=!0}}]);