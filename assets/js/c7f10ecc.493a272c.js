"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[3601],{91974:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=o(58168),n=(o(96540),o(15680));o(41873);const a={title:"0080 API Versioning Code Organization",description:"How to implement API Versioning"},s=void 0,r={unversionedId:"adrs/api-versioning-based-on-test-run",id:"adrs/api-versioning-based-on-test-run",title:"0080 API Versioning Code Organization",description:"How to implement API Versioning",source:"@site/docs/adrs/0080-api-versioning-based-on-test-run.md",sourceDirName:"adrs",slug:"/adrs/api-versioning-based-on-test-run",permalink:"/mymove-docs/docs/adrs/api-versioning-based-on-test-run",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/adrs/0080-api-versioning-based-on-test-run.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{title:"0080 API Versioning Code Organization",description:"How to implement API Versioning"},sidebar:"adrsSidebar",previous:{title:"0079 Update strategy for maintaining code test coverage",permalink:"/mymove-docs/docs/adrs/develop-strategy-for-ensuring-code-test-coverage"},next:{title:"0081 Use ASDF to Manage Node and Golang versions in Development",permalink:"/mymove-docs/docs/adrs/use-asdf-to-manage-node-and-golang-versions-in-development"}},d={},l=[{value:"File/Code Organization",id:"filecode-organization",level:2},{value:"Swagger Organization",id:"swagger-organization",level:3},{value:"Handler Organization",id:"handler-organization",level:3},{value:"Services Organization",id:"services-organization",level:3}],c={toc:l},g="wrapper";function h(e){let{components:i,...o}=e;return(0,n.yg)(g,(0,t.A)({},c,o,{components:i,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Note:")," This ADR updates and supersedes the sections of ",(0,n.yg)("a",{parentName:"p",href:"/mymove-docs/docs/adrs/api-versioning"},"ADR0078 API Versioning")," about code organization."),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Previously we wrote ",(0,n.yg)("a",{parentName:"em",href:"/mymove-docs/docs/adrs/api-versioning"},"ADR0078 API Versioning")," that suggested some approaches for how to handle API versioning. While it did include some code samples for what some of the different choices would potentially look like, without going through an practical change it would be hard to evaluate what the implications of these choices would be. As a result of our ",(0,n.yg)("a",{parentName:"em",href:"https://github.com/transcom/mymove/pull/10952"},"test run"),", we decided that there were some areas that could be improved on.")),(0,n.yg)("h1",{id:"how-to-implement-api-versioning-for-prime-api"},"How to implement API Versioning for Prime API"),(0,n.yg)("p",null,"Everything in the ",(0,n.yg)("a",{parentName:"p",href:"/mymove-docs/docs/adrs/api-versioning"},"previous ADR")," outside of the file organization strategy is accurate and reflects the process that we follow for API versioning."),(0,n.yg)("h2",{id:"filecode-organization"},"File/Code Organization"),(0,n.yg)("h3",{id:"swagger-organization"},"Swagger Organization"),(0,n.yg)("p",null,"We are continuing to leverage ",(0,n.yg)("a",{parentName:"p",href:"https://transcom.github.io/mymove-docs/docs/adrs/api-versioning#swagger-organization"},"Option 2: Have an entirely separate version 2 swagger file")," from the original ADR."),(0,n.yg)("p",null,"Going through this approach we were able to confirm the existing pros and cons."),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Pros: It would be easier to keep the definitions separate and avoid accidental introduction of breaking changes. It would enable us to use the generated code for our handlers and payload/model files."),(0,n.yg)("p",{parentName:"blockquote"},"Cons: More generated files to manage")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Additional Recommendations:")," Try and reference existing definitions when possible and create new versions of the definitions when something changes. This should help identify the definitions that have been modified from version to version. You can see an example in this ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pull/10952/files#diff-ccf222ad69199a6edb2088799e4ac7f8118591dc804aff747293bf1e81262940"},"PR"),". Having to copy over existing definitions from the previous version can be tedious and if this is done in the main yaml file it can make it hard to quickly identify what fields are being modified."),(0,n.yg)("h3",{id:"handler-organization"},"Handler Organization"),(0,n.yg)("p",null,"There are no updates to this section."),(0,n.yg)("h3",{id:"services-organization"},"Services Organization"),(0,n.yg)("p",null,"This is where the largest deviation is."),(0,n.yg)("p",null,"Previously we were suggesting to go with ",(0,n.yg)("a",{parentName:"p",href:"https://transcom.github.io/mymove-docs/docs/adrs/api-versioning#services-organization"},"Option 3: Creating subdirectories and using flags"),". This approach had the following pros and cons:"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Pros: Clear delineation between the two versions. There would not need to be a break from how we are currently utilizing our services and interfaces. We would only need to pull in the changed services into our subdirectories, which would lead to less code duplication."),(0,n.yg)("p",{parentName:"blockquote"},"Cons: Repetitive code. Naming questions arise, in order to delineate the new from the old. Difficulty when dealing with more complicated services, especially when we use a service in another service.")),(0,n.yg)("p",null,"Through this test run, we realized that the flagging system had an additional con. It obfuscated complexity and enabled the flag to be misused. If you take a look at the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/transcom/mymove/compare/0c4be3b...8ad4aed#diff-a2ee24d035b334c22da8c32ee512e2ec1308300bc7b80f0e9f466d13e997dd49"},"example PR")," for this suggested option you'll see that the default behavior of the service is to call the v2 service when the flag is not set. This meant that all tests would likely need to have this flag set in some obfuscated initialization code while still making the flag overridable. This added additional complexity and made it so that we could theoretically add a conditional for the flag throughout our codebase. This opens the possibility for code to branch out in a myriad of ways even when we only wanted this functionality to be used in a specific way. The way that we introduced the flag was also a bit questionable. We added it to the app context which was bringing http/routing concerns to the app context which should probably remain separated."),(0,n.yg)("p",null,"Because of these findings we decided to go with a new option."),(0,n.yg)("p",null,"Option 4: Only create new services if they are needed and shift any shared logic into reusable functions. These new services won't be versioned and will be added like existing functions. (Eg. if we have a service for fetching orders we might create a separate ",(0,n.yg)("inlineCode",{parentName:"p"},"fetchOrdersWithAddresses")," function that has the same core functionality but also fetches all of the child addresses.)"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Pros: It allows flexibility. We can let endpoints utilize existing services or utilize the newly created service."),(0,n.yg)("li",{parentName:"ul"},"Cons: Sometimes the shared portions of existing functions don't have clear logical break points and it can be easy to have arbitrary functions that don't do a complete \"unit\" of work.")))}h.isMDXComponent=!0}}]);