"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[8755],{2149:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=a(87462),n=(a(67294),a(3905));a(8209);const i={title:"0079 Update strategy for maintaining code test coverage",description:"Decision outcome: The Happo Approach\n"},r="Update strategy for maintaining code test coverage",s={unversionedId:"adrs/develop-strategy-for-ensuring-code-test-coverage",id:"adrs/develop-strategy-for-ensuring-code-test-coverage",title:"0079 Update strategy for maintaining code test coverage",description:"Decision outcome: The Happo Approach\n",source:"@site/docs/adrs/0079-develop-strategy-for-ensuring-code-test-coverage.md",sourceDirName:"adrs",slug:"/adrs/develop-strategy-for-ensuring-code-test-coverage",permalink:"/mymove-docs/docs/adrs/develop-strategy-for-ensuring-code-test-coverage",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/adrs/0079-develop-strategy-for-ensuring-code-test-coverage.md",tags:[],version:"current",sidebarPosition:79,frontMatter:{title:"0079 Update strategy for maintaining code test coverage",description:"Decision outcome: The Happo Approach\n"},sidebar:"adrsSidebar",previous:{title:"0078 API Versioning",permalink:"/mymove-docs/docs/adrs/api-versioning"},next:{title:"0080 API Versioning Code Organization",permalink:"/mymove-docs/docs/adrs/api-versioning-based-on-test-run"}},l={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Scenarios that result in a test coverage decrease",id:"scenarios-that-result-in-a-test-coverage-decrease",level:3},{value:"Test Coverage Objectives",id:"test-coverage-objectives",level:2},{value:"Considered Options",id:"considered-options",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"<em>Do nothing</em>",id:"do-nothing",level:3},{value:"<em>Lenience for Tiny Coverage Decreases</em>",id:"lenience-for-tiny-coverage-decreases",level:3},{value:"Closing Notes",id:"closing-notes",level:2}],d={toc:c},m="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"update-strategy-for-maintaining-code-test-coverage"},"Update strategy for maintaining code test coverage"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"User Story:")," ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://dp3.atlassian.net/browse/MB-16176"},"MB-16176"))," \ud83d\udd12"),(0,n.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,n.kt)("p",null,"Our current system of maintaining test coverage involves measuring the current total test coverage and ensuring that any given PR does not decrease the total coverage.\nThis strategy has obvious benefits in preventing test coverage from going down, but it has also introduced roadblocks in the PR workflow. To understand this, it's helpful to understand the scenarios that might result in a decrease in total coverage."),(0,n.kt)("h3",{id:"scenarios-that-result-in-a-test-coverage-decrease"},"Scenarios that result in a test coverage decrease"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Removal of code that is ",(0,n.kt)("em",{parentName:"strong"},"more")," tested than the total coverage.")," If the total coverage is 77.0% and a block of code that is tested at 100% is deleted, the average coverage goes down."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Addition of code that is ",(0,n.kt)("em",{parentName:"strong"},"less")," tested than the total coverage and ",(0,n.kt)("em",{parentName:"strong"},"should be tested more"),".")," This is the scenario that we want to address with our code coverage strategy."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Addition of code that is ",(0,n.kt)("em",{parentName:"strong"},"less")," tested than the total coverage and ",(0,n.kt)("em",{parentName:"strong"},"doesn't need to be tested more"),".")," The difference between this scenario and scenario 2 can be subjective, but one can imagine a scenario in which a Go database model is created and doesn't require any tests.")),(0,n.kt)("p",null,"Our current strategy of never allowing the total coverage to decrease attempts to address scenario 2, but it also unfairly flags scenarios 1 and 3. We also have the option to manually reset the test coverage floor, but determining whether that is appropriate (i.e. discerning which scenario is applicable to a given PR) can be difficult and time-consuming. Furthermore, any combination of the three scenarios can be applicable to a given PR -- it doesn't have to be just one -- which can make it extra difficult to decide whether a coverage decrease is legitimate."),(0,n.kt)("h2",{id:"test-coverage-objectives"},"Test Coverage Objectives"),(0,n.kt)("p",null,"To improve upon the current coverage strategy and address the scenarios above, we propose that our coverage strategy aims to address the following objectives:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Reduce the amount of new and updated code that is not tested enough (scenario 2)"),(0,n.kt)("li",{parentName:"ul"},"Provide folks with the flexibility to easily override strict coverage enforcement in scenarios that don't require it"),(0,n.kt)("li",{parentName:"ul"},"Provide folks with easier access to context that allows them to distinguish between less-tested code that should be tested more (scenario 2) and less-tested code that doesn't need to be tested more (scenario 3)"),(0,n.kt)("li",{parentName:"ul"},"Address the above objectives with little effort"),(0,n.kt)("li",{parentName:"ul"},"Reassess the impact of the chosen option in the future (at least once, a month after the decision)")),(0,n.kt)("h2",{id:"considered-options"},"Considered Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Do nothing")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"The Happo Approach")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Lenience for Tiny Coverage Decreases"))),(0,n.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,n.kt)("p",null,"Chosen Option: ",(0,n.kt)("em",{parentName:"p"},"The Happo Approach")),(0,n.kt)("p",null,"Our approach to Happo changes is currently the following: the Happo PR check is not a required check, but it reports failures and includes an easily-accessible link on the PR to Happo diffs which provide context around visual changes. Something similar could be implemented for code coverage checks with the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Make the code coverage checks optional so that failures do not block a PR"),(0,n.kt)("li",{parentName:"ol"},"Generate a link automatically on the PR (perhaps through a comment) that provides more context behind the failure (including, but not limited to, the go-coverage.html artifact generated in circle-ci)")),(0,n.kt)("p",null,"This strategy acknowleges that while a required coverage check seems to strictly ensure a lower coverage limit, scenarios 2 and 3 may often result in coverage decreases set manually when folks reset the limit. It also acknowledges that understanding code coverage and creating rules around it is difficult to do automatically and thus leaves enforcement entirely to PR creators and reviewers."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," ",(0,n.kt)("em",{parentName:"li"},"Low-medium effort")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," ",(0,n.kt)("em",{parentName:"li"},"Provides a way to maintain high test coverage")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," ",(0,n.kt)("em",{parentName:"li"},"Does not unnecessarily block PRs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," ",(0,n.kt)("em",{parentName:"li"},"Provides easily-accessible context behind coverage decreases, at least with server coverage")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," ",(0,n.kt)("em",{parentName:"li"},"Requires a cultural enforcement of coverage maintenance"))),(0,n.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,n.kt)("h3",{id:"do-nothing"},(0,n.kt)("em",{parentName:"h3"},"Do nothing")),(0,n.kt)("p",null,"Continue blocking PRs that decrease test coverage."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," ",(0,n.kt)("em",{parentName:"li"},"No implementation effort")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," ",(0,n.kt)("em",{parentName:"li"},"Provides a way to maintain current test coverage and never decrease it")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," ",(0,n.kt)("em",{parentName:"li"},"Provides a way to override failures with a commit")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," ",(0,n.kt)("em",{parentName:"li"},"Blocks PRs unnecessarily")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," ",(0,n.kt)("em",{parentName:"li"},"Difficult to determine whether failures are legitimate"))),(0,n.kt)("h3",{id:"lenience-for-tiny-coverage-decreases"},(0,n.kt)("em",{parentName:"h3"},"Lenience for Tiny Coverage Decreases")),(0,n.kt)("p",null,"This strategy is sort of a middle ground between the current strategy and the Happo Approach in that it blocks PRs with coverage changes > 0.1%, and it reports changes <=0.1%. It can be implemented with the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Alter the current PR-required code coverage check to block coverage decreases > 0.1%"),(0,n.kt)("li",{parentName:"ol"},"Generate a comment automatically on the PR that reports any coverage decrease and provides more context behind coverage changes (including, but not limited to, the go-coverage.html artifact generated in circle-ci)"),(0,n.kt)("li",{parentName:"ol"},"As with Happo checks, socialize a cultural rule for preventing tiny coverage decreases. PR creators and reviewers would be tasked with investigating tiny decreases with the help of the artifacts provided in step 2.")),(0,n.kt)("p",null,"The goal of this strategy is to completely prevent most coverage decreases while leaving space for tiny coverage decreases to not immediately block a PR."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," ",(0,n.kt)("em",{parentName:"li"},"Low-medium effort")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," ",(0,n.kt)("em",{parentName:"li"},"Provides a way to maintain high test coverage")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," ",(0,n.kt)("em",{parentName:"li"},"Does not unnecessarily block PRs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," ",(0,n.kt)("em",{parentName:"li"},"Provides easily-accessible context behind coverage decreases, at least with server coverage")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," ",(0,n.kt)("em",{parentName:"li"},"Requires a cultural enforcement of coverage maintenance")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," ",(0,n.kt)("em",{parentName:"li"},"The significance of 0.1% coverage change is vague and perhaps a poor measure of impact on a codebase"))),(0,n.kt)("h2",{id:"closing-notes"},"Closing Notes"),(0,n.kt)("p",null,"This ADR prescribes a couple of additional outcomes to support whichever approach is chosen:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Additional documentation will be created to provide information about our test coverage checks, including an explanation of why coverage might decrease for a PR and how to access and understand the artifacts produced by the coverage checks."),(0,n.kt)("li",{parentName:"ul"},"A check-in will be planned for one month after the implementation of the chosen decision to review its impacts on test coverage. Plans for more follow-ups or a check-in cadence can also be reviewed then.")))}p.isMDXComponent=!0}}]);