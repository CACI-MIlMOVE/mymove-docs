"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[9500],{80684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=n(45072),a=(n(11504),n(95788));n(10880);const i={sidebar_position:1},l="Designers's guide to setting up app locally",r={unversionedId:"frontend/setup/designers-guide-to-setting-up-app-locally",id:"frontend/setup/designers-guide-to-setting-up-app-locally",title:"Designers's guide to setting up app locally",description:"Installing XCode Developer Tools",source:"@site/docs/frontend/setup/designers-guide-to-setting-up-app-locally.md",sourceDirName:"frontend/setup",slug:"/frontend/setup/designers-guide-to-setting-up-app-locally",permalink:"/mymove-docs/docs/frontend/setup/designers-guide-to-setting-up-app-locally",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/frontend/setup/designers-guide-to-setting-up-app-locally.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"frontendSidebar",previous:{title:"MilMove Frontend",permalink:"/mymove-docs/docs/frontend"},next:{title:"How to Use and Run Storybook",permalink:"/mymove-docs/docs/frontend/setup/run-storybook"}},s={},d=[{value:"Installing XCode Developer Tools",id:"installing-xcode-developer-tools",level:2},{value:"Installing Homebrew",id:"installing-homebrew",level:2},{value:"Setting up Git",id:"setting-up-git",level:2},{value:"Cloning the mymove repository from GitHub",id:"cloning-the-mymove-repository-from-github",level:2},{value:"Installing Docker",id:"installing-docker",level:2},{value:"Installing other prerequisites",id:"installing-other-prerequisites",level:2},{value:"Defining your environment variables with the .envrc.local",id:"defining-your-environment-variables-with-the-envrclocal",level:2},{value:"System Requirements",id:"system-requirements",level:2},{value:"Installing language tools using asdf",id:"installing-language-tools-using-asdf",level:2},{value:"Hooking up your path and version managers to your terminal .zshrc file",id:"hooking-up-your-path-and-version-managers-to-your-terminal-zshrc-file",level:2},{value:"Adding the custom app hostname entries",id:"adding-the-custom-app-hostname-entries",level:2},{value:"Setting up the database",id:"setting-up-the-database",level:2},{value:"Building the application",id:"building-the-application",level:2},{value:"Starting the application",id:"starting-the-application",level:2},{value:"Launching Storybook",id:"launching-storybook",level:2},{value:"Reviewing a PR/branch",id:"reviewing-a-prbranch",level:2}],u={toc:d},p="wrapper";function h(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,o.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"designerss-guide-to-setting-up-app-locally"},"Designers's guide to setting up app locally"),(0,a.yg)("h2",{id:"installing-xcode-developer-tools"},"Installing XCode Developer Tools"),(0,a.yg)("p",null,"XCode is development software from Apple usually used to design and build macOS and iOS applications.  We aren't using it for that purpose but it installs other important things we need."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Open the Terminal application which lives inside your Finder > Applications > Utilities folder. It may be useful to drag this to your dock for quick access or you can search for it through the Spotlight icon in your menubar.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"In the terminal copy and paste this line ",(0,a.yg)("inlineCode",{parentName:"p"},"xcode-select --install")," and press enter.  It should prompt you to agree to the license and install XCode software."))),(0,a.yg)("h2",{id:"installing-homebrew"},"Installing Homebrew"),(0,a.yg)("p",null,"Homebrew is like the app store for installing developer libraries and command line tools on a macOS computer."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"From inside the Terminal copy and past this line ",(0,a.yg)("inlineCode",{parentName:"li"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"')," and press enter.")),(0,a.yg)("h2",{id:"setting-up-git"},"Setting up Git"),(0,a.yg)("p",null,"Git is the version control software we use to track changes to our code and manage collaboration.  We use Git in conjunction with GitHub, which provides a centrally hosted place where we create Pull Requests and integrate with things like CircleCi for running tests and Happo for generating visual diffs from Storybook."),(0,a.yg)("p",null,"Git is likely already installed on your computer but you do have the option of using one of many graphical tools to interact with it such as ",(0,a.yg)("a",{parentName:"p",href:"https://desktop.github.com/"},"GitHub Desktop"),".  You should already have a GitHub account, which you'll need to comment on and approve pull requests on GitHub and Happo diffs."),(0,a.yg)("p",null,"If you are using git from the terminal it is worth configuring your user settings in case you do end up wanting to ever work on features:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"From the Terminal set the user email and user name to match your GitHub account by changing the values in quotes below one line at a time.")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},'git config --global user.email "trussel@truss.works"')),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},'git config --global user.name "Trusty Trussel"')),(0,a.yg)("h2",{id:"cloning-the-mymove-repository-from-github"},"Cloning the mymove repository from GitHub"),(0,a.yg)("p",null,"Now that we have Git installed it's time to clone the mymove repository from GitHub and make a copy with all of the history and branches on your local computer."),(0,a.yg)("p",null,"From the Terminal:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Switch to your home folder by typing ",(0,a.yg)("inlineCode",{parentName:"li"},"cd ~")," and pressing enter.  Your home folder is located at /Users/username/ and is usually displayed on the favorites sidebar in the Finder."),(0,a.yg)("li",{parentName:"ol"},"Clone the mymove repo by copy and pasting ",(0,a.yg)("inlineCode",{parentName:"li"},"git clone https://github.com/transcom/mymove.git")," and pressing enter.  This should create a folder named mymove inside your home folder."),(0,a.yg)("li",{parentName:"ol"},"To change folders to the newly created mymove folder run the command ",(0,a.yg)("inlineCode",{parentName:"li"},"cd mymove"),".")),(0,a.yg)("p",null,"Using GitHub Desktop:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Visit ",(0,a.yg)("inlineCode",{parentName:"li"},"https://github.com/transcom/mymove"),' in your browser and click on the green Code button that should be prominently displayed.  Click on that will have a link to "Open with GitHub Desktop"')),(0,a.yg)("h2",{id:"installing-docker"},"Installing Docker"),(0,a.yg)("p",null,"Docker is a container framework we use for running different services like databases and the mymove app in a predictable and isolated way.  We use it to package everything together when we build and ship the app to environments like experimental, staging, and production to run on Amazon's web servers."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Follow this link ",(0,a.yg)("a",{parentName:"li",href:"https://download.docker.com/mac/stable/Docker.dmg"},"https://download.docker.com/mac/stable/Docker.dmg")," in your browser that will prompt you to download the Docker installer."),(0,a.yg)("li",{parentName:"ol"},"When the download is finished, open it from your downloads folder if it didn't start automatically and follow the install instructions."),(0,a.yg)("li",{parentName:"ol"},"When it's finished, it should add a whale icon with tetris looking pieces on top.")),(0,a.yg)("h2",{id:"installing-other-prerequisites"},"Installing other prerequisites"),(0,a.yg)("p",null,"For the sake of time let's try to install all of these dependencies at once. Some of these may not be 100% necessary but it may be easier than trying to track down what's missing later."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"From your Terminal copy and paste the command below and press the enter key")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"brew install asdf awscli bash chamber jq asdf yarn pre-commit shellcheck postgresql opensc circleci direnv entr aws-vault watchman")),(0,a.yg)("h2",{id:"defining-your-environment-variables-with-the-envrclocal"},"Defining your environment variables with the .envrc.local"),(0,a.yg)("p",null,"Environment variables define things such as database credentials, security certificates, API keys, and feature flags that can vary between environment (local, experimental, staging, production)."),(0,a.yg)("p",null,"Most developers have AWS credentials that are able to keep these values synced and up to date. In the scenario you don't have AWS permissions we will need to create a file with these pre-defined values filled in. This file could become outdated as values change, get added or removed. We should take care not to share this file publicly eventhough most of the values are not the same secrets we use elsewhere."),(0,a.yg)("p",null,"For steps on how to setup AWS creds with Chamber click ",(0,a.yg)("a",{parentName:"p",href:"https://dp3.atlassian.net/wiki/spaces/MT/pages/1249542242/0030+How+to+Manage+Secrets+with+Chamber"},"here")),(0,a.yg)("h2",{id:"system-requirements"},"System Requirements"),(0,a.yg)("p",null,"Click on the link to ",(0,a.yg)("a",{parentName:"p",href:"/mymove-docs/docs/adrs/Browser-Support"},"ADR 0016 Browser Support")," to view list of supported browsers."),(0,a.yg)("h2",{id:"installing-language-tools-using-asdf"},"Installing language tools using asdf"),(0,a.yg)("p",null,"asdf is a version manager we used to simplify installing and upgrading dependencies such as Go and Node."),(0,a.yg)("p",null,"To enable asdf for installing and setting the Go version run this command ",(0,a.yg)("strong",{parentName:"p"},"from inside your mymove")," folder:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"asdf plugin add golang && asdf plugin add nodejs && asdf install && asdf global $(cat .tool-versions | grep golang)\n")),(0,a.yg)("p",null,"The current tool versions being used on the project is inside the .tool-versions file."),(0,a.yg)("h2",{id:"hooking-up-your-path-and-version-managers-to-your-terminal-zshrc-file"},"Hooking up your path and version managers to your terminal .zshrc file"),(0,a.yg)("p",null,"In order for certain tools to autoload every time we open the terminal (or open a new terminal tab), we need to add them to a special file named .zshrc located in our home folder."),(0,a.yg)("p",null,"To create the file and open it for editing run the command ",(0,a.yg)("inlineCode",{parentName:"p"},"touch ~/.zshrc && open -a TextEdit ~/.zshrc")),(0,a.yg)("p",null,"Paste the following values at the end of your file if it is not empty and save:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'source /usr/local/opt/asdf/asdf.sh\nexport GOPATH=${GOPATH:-$(go env GOPATH)}\nexport PATH=$(go env GOPATH)/bin:$PATH\neval "$(direnv hook zsh)"\n')),(0,a.yg)("p",null,"You will need to restart your terminal or close and open a new window."),(0,a.yg)("p",null,"The next time you switch the the mymove folder in your terminal you will be prompted to run ",(0,a.yg)("inlineCode",{parentName:"p"},"direnv allow")," for it to autoload the environment variables."),(0,a.yg)("h2",{id:"adding-the-custom-app-hostname-entries"},"Adding the custom app hostname entries"),(0,a.yg)("p",null,"Similar to how the mymove app is broken up into different hosts in the deployed environments (admin.move.mil, office.move.mil, and my.move.mil) we need to mimic this setup in our local system.  Normally when you are accessing a locally served app you can access it by entering the localhost value in the browser URL bar but this is not true in our case."),(0,a.yg)("p",null,"To create unique local hosts for each app run the following command in your terminal:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},'echo "127.0.0.1 milmovelocal\\n\\\n127.0.0.1 officelocal\\n\\\n127.0.0.1 adminlocal\\n\\\n127.0.0.1 orderslocal\\n\\\n127.0.0.1 primelocal" | sudo tee -a /etc/hosts\n')),(0,a.yg)("h2",{id:"setting-up-the-database"},"Setting up the database"),(0,a.yg)("p",null,"The mymove application uses a Postgres database to store persistent data.  Locally you can run it with no test data or there are a couple of seed scenario files that are helpful to create test users, moves, payment requests, etc... to make it easier to perform different tasks."),(0,a.yg)("p",null,"The first time you want to start the database you need to run ",(0,a.yg)("inlineCode",{parentName:"p"},"make db_dev_run")," to download the database Docker image.  You can check that the container named milmove-db-dev exists from the Docker dashboard in your menubar.  The milmove-db-dev container should now be green and have a status of running."),(0,a.yg)("p",null,"To apply migrations (think of these as all of the incremental versioned tracked changes to the database going back to 2018) and load test data you can use the command ",(0,a.yg)("inlineCode",{parentName:"p"},"make db_dev_e2e_populate"),".  This may take a while if it is the first time but will subsequently only apply new changes when possible."),(0,a.yg)("h2",{id:"building-the-application"},"Building the application"),(0,a.yg)("p",null,"The first time setting up the application you will likely need to build required libraries but usually not in subsequent runs."),(0,a.yg)("p",null,"To build required server binaries you must run: ",(0,a.yg)("inlineCode",{parentName:"p"},"make build_tools && make server_build")),(0,a.yg)("p",null,"To build required client libraries you must run: ",(0,a.yg)("inlineCode",{parentName:"p"},"make client_build")),(0,a.yg)("h2",{id:"starting-the-application"},"Starting the application"),(0,a.yg)("p",null,"The application is divided into a backend server, which is written in Go and exposes our APIs, and a frontend client that is developed in React.  To run the application we must always have both of these service running in addition to the database to access it."),(0,a.yg)("p",null,"In one terminal tab (command+t) you can start the server with the command ",(0,a.yg)("inlineCode",{parentName:"p"},"make server_run"),"."),(0,a.yg)("p",null,"In another terminal tab you can start the client with the command ",(0,a.yg)("inlineCode",{parentName:"p"},"make client_run"),"."),(0,a.yg)("p",null,"When the client is ready it should open a new browser window taking you to the customer homepage ",(0,a.yg)("a",{parentName:"p",href:"http://milmovelocal:3000"},"http://milmovelocal:3000")),(0,a.yg)("p",null,"You can access the other applications such as the office or admin app at:\n",(0,a.yg)("a",{parentName:"p",href:"http://officelocal:3000"},"http://officelocal:3000"),"\nor\n",(0,a.yg)("a",{parentName:"p",href:"http://adminlocal:3000"},"http://adminlocal:3000")),(0,a.yg)("h2",{id:"launching-storybook"},"Launching Storybook"),(0,a.yg)("p",null,"To launch the standalone Storybook site use the command ",(0,a.yg)("inlineCode",{parentName:"p"},"make storybook")," and it will become accessible at the URL ",(0,a.yg)("a",{parentName:"p",href:"http://localhost:6006"},"http://localhost:6006")),(0,a.yg)("h2",{id:"reviewing-a-prbranch"},"Reviewing a PR/branch"),(0,a.yg)("p",null,"By default you have a copy of the source code of the ",(0,a.yg)("inlineCode",{parentName:"p"},"main")," branch in your mymove folder.  This is the branch that gets autodeployed to staging when PRs are merged.  This will get out of date fairly quickly as code gets merged frequently.  To update to what is the latest code on GitHub you should run ",(0,a.yg)("inlineCode",{parentName:"p"},"git fetch")," periodically on this branch."),(0,a.yg)("p",null,"Once you have synced with GitHub you want to switch to the branch of the Pull Request.  The name of the branch is found at the top of the GitHub PR page."),(0,a.yg)("p",null,"If the branch of my PR was named ",(0,a.yg)("inlineCode",{parentName:"p"},"mb-1000-create-customer-header-storybook-component")," then my command would be:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"git checkout mb-1000-create-customer-header-storybook-component")),(0,a.yg)("p",null,"If your server and client are running when you switch between branches, it will attempt to rebuild the files on the fly.  Sometimes there will be no issues with this auto-reloading but when there is, you may need to run ",(0,a.yg)("inlineCode",{parentName:"p"},"git checkout .")," to restore some files that weren't regenerated."),(0,a.yg)("p",null,"Other times if there was a new database migration you may need to repopulate your database with ",(0,a.yg)("inlineCode",{parentName:"p"},"make db_dev_e2e_populate")),(0,a.yg)("p",null,"If a a new frontend library was install in the meantime you may need to run ",(0,a.yg)("inlineCode",{parentName:"p"},"yarn install")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"make clean && make client_build"),"."))}h.isMDXComponent=!0}}]);