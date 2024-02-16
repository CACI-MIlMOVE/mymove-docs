"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[59],{25644:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>p});var l=i(58168),n=(i(96540),i(15680));i(41873);const t={title:"0031 CSS Tooling",description:"Decision outcome: Sass with CSS Modules\n"},s="*CSS Tooling*",o={unversionedId:"adrs/css-tooling",id:"adrs/css-tooling",title:"0031 CSS Tooling",description:"Decision outcome: Sass with CSS Modules\n",source:"@site/docs/adrs/0031-css-tooling.md",sourceDirName:"adrs",slug:"/adrs/css-tooling",permalink:"/mymove-docs/docs/adrs/css-tooling",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/adrs/0031-css-tooling.md",tags:[],version:"current",sidebarPosition:31,frontMatter:{title:"0031 CSS Tooling",description:"Decision outcome: Sass with CSS Modules\n"},sidebar:"adrsSidebar",previous:{title:"0030 IAM Authentication for Database",permalink:"/mymove-docs/docs/adrs/rds-iam"},next:{title:"0032 CSRF Protection for the Application",permalink:"/mymove-docs/docs/adrs/csrf-protection"}},r={},p=[{value:"Decision Drivers",id:"decision-drivers",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"<em>CSS-in-JS</em>",id:"css-in-js",level:3},{value:"<em>CSS Modules</em>",id:"css-modules",level:3},{value:"<em>Sass</em>",id:"sass",level:3},{value:"<em>LESS</em>",id:"less",level:3}],m={toc:p},d="wrapper";function u(e){let{components:a,...i}=e;return(0,n.yg)(d,(0,l.A)({},m,i,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"css-tooling"},(0,n.yg)("em",{parentName:"h1"},"CSS Tooling")),(0,n.yg)("p",null,"Currently there is not consistency in how we are using CSS in our React code.  We are using vanilla CSS.  This causes problems with name collisions and overlap of class names.  We also have styles that are repeated that could be shared for various components and elements.  Our CSS code ends up difficult to read."),(0,n.yg)("p",null,"It would be helpful to have the option to use variables and calculations and to scope classes locally."),(0,n.yg)("h2",{id:"decision-drivers"},"Decision Drivers"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Allows use of variables"),(0,n.yg)("li",{parentName:"ul"},"Allows local scoping of classes"),(0,n.yg)("li",{parentName:"ul"},"Ease of implementation"),(0,n.yg)("li",{parentName:"ul"},"High usage and support"),(0,n.yg)("li",{parentName:"ul"},"Likelihood for familiarity for client inheriting the app"),(0,n.yg)("li",{parentName:"ul"},"Quick learning curve")),(0,n.yg)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,n.yg)("p",null,"Chosen Alternative: ",(0,n.yg)("strong",{parentName:"p"},"Sass with CSS Modules")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Justification:")," Sass and CSS Modules are easy to learn and implement with minimal learning curve")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"They are built into create-react-app 2")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Sass allows variables, mixins, and calculations")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"CSS Modules allows local scoping of classes")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Sass and CSS Modules come in the box with Create React App 2")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Sass has high usage and support")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Likelihood for familiarity with Sass for client inheriting the app")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"In combination, we fill two of our most pressing needs: use of variables and local scoping of classes")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Consequences:")," We need to update to create-react-app 2 first before implementing")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Engineers not familiar with Sass will need to learn it"))),(0,n.yg)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"CSS-in-JS")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"LESS"))),(0,n.yg)("p",null,"Resources:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://medium.com/@pioul/modular-css-with-react-61638ae9ea3e"},"Modular CSS with React")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://www.keycdn.com/blog/sass-vs-less/"},"CSS Preprocessors \u2013 Sass vs LESS")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://blog.bitsrc.io/how-to-use-sass-and-css-modules-with-create-react-app-83fa8b805e5e"},"How to use Sass and CSS Modules with create-react-app")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://hackernoon.com/all-you-need-to-know-about-css-in-js-984a72d48ebc"},"All You Need to KNow about CSS-in-JS"))),(0,n.yg)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,n.yg)("h3",{id:"css-in-js"},(0,n.yg)("em",{parentName:"h3"},"CSS-in-JS")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," Scoped locally by default: Styles can live in separate, modular files that get imported into JS modules using regular import statements"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-")," Steeper learning curve"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-")," Less likely client will be familiar and be able to easily pick up")),(0,n.yg)("h3",{id:"css-modules"},(0,n.yg)("em",{parentName:"h3"},"CSS Modules")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," all class names are scoped locally by default"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-")," variables require additional plugin")),(0,n.yg)("h3",{id:"sass"},(0,n.yg)("em",{parentName:"h3"},"Sass")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," Cleaner code with reusable pieces and variables"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," Saves you time"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," Easier to maintain code with snippets and libraries"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," Calculations and logic"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," More organized and easy to setup"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," Integrated into Create React App 2"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," can use variables and mixins"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," backwards compatible (can change ",(0,n.yg)("inlineCode",{parentName:"li"},".css")," files to ",(0,n.yg)("inlineCode",{parentName:"li"},".sass")," or ",(0,n.yg)("inlineCode",{parentName:"li"},".scss")," file)"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," Quick learning curve"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," growing in popularity (and support)"),(0,n.yg)("li",{parentName:"ul"},"written in Ruby")),(0,n.yg)("h3",{id:"less"},(0,n.yg)("em",{parentName:"h3"},"LESS")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," Cleaner code with reusable pieces and variables"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," Saves you time"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," Easier to maintain code with snippets and libraries"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," Calculations and logic"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," More organized and easy to setup"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," Can use variables"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," Backwards compatible (can change ",(0,n.yg)("inlineCode",{parentName:"li"},".css")," files to .less file)"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+")," written in Javascript, so easy to extend"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-")," Not automatically accessible in Create React App 2")))}u.isMDXComponent=!0}}]);