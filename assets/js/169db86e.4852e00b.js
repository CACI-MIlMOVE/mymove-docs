"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[819],{24886:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=a(58168),n=(a(96540),a(15680));a(41873);const r={sidebar_position:7},s="How to run the GHC Transit Time Import and Verify Data",o={unversionedId:"backend/guides/ghc/ghc-transit-time-import",id:"backend/guides/ghc/ghc-transit-time-import",title:"How to run the GHC Transit Time Import and Verify Data",description:"To support loading GHC Transit Time data you can use the bin/ghc-transit-time-parser to do so.",source:"@site/docs/backend/guides/ghc/ghc-transit-time-import.md",sourceDirName:"backend/guides/ghc",slug:"/backend/guides/ghc/ghc-transit-time-import",permalink:"/mymove-docs/docs/backend/guides/ghc/ghc-transit-time-import",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/backend/guides/ghc/ghc-transit-time-import.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"backendSidebar",previous:{title:"How to run the GHC Pricing Import and Verify Data",permalink:"/mymove-docs/docs/backend/guides/ghc/ghc-pricing-import"},next:{title:"How data will be imported into production",permalink:"/mymove-docs/docs/backend/guides/ghc/ghc-import-pricing-production"}},l={},p=[{value:"Running the parser",id:"running-the-parser",level:2},{value:"Verifying the data",id:"verifying-the-data",level:2},{value:"1. Make sure csv data matches expectation",id:"1-make-sure-csv-data-matches-expectation",level:3},{value:"Useful Command Options",id:"useful-command-options",level:2}],m={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.yg)(d,(0,i.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"how-to-run-the-ghc-transit-time-import-and-verify-data"},"How to run the GHC Transit Time Import and Verify Data"),(0,n.yg)("p",null,"To support loading GHC Transit Time data you can use the ",(0,n.yg)("inlineCode",{parentName:"p"},"bin/ghc-transit-time-parser")," to do so."),(0,n.yg)("h2",{id:"running-the-parser"},"Running the parser"),(0,n.yg)("p",null,"You will need to build the parser first."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"make bin/ghc-transit-time-parser\n")),(0,n.yg)("p",null,"Once built you can run the command."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"bin/ghc-transit-time-parser --display --filename [path to your file]/Appendix_C\\(i\\)_-_Transit_Time_Tables.xlsx\n")),(0,n.yg)("p",null,"Once complete move on to the next section to verify the import"),(0,n.yg)("h2",{id:"verifying-the-data"},"Verifying the data"),(0,n.yg)("p",null,"The script will output the transit time table model."),(0,n.yg)("p",null,"To do the verification, open the newly created csv file located in the directory where the parser was ran."),(0,n.yg)("h3",{id:"1-make-sure-csv-data-matches-expectation"},"1. Make sure csv data matches expectation"),(0,n.yg)("p",null,"The pricing parser will output the csv file, compare this to the data in the spreadsheet. For example the csv data is found in the pricing template sheet ",(0,n.yg)("inlineCode",{parentName:"p"},"domestic"),"."),(0,n.yg)("p",null,"Once you find the main source of the information you can verify that the number of rows reported in the summary is the same as the number of rows in the matching table."),(0,n.yg)("p",null,"Pricing parser output example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},'2020-03-18T02:59:31.535Z        INFO    transittime/parse_transit_times.go:69           {"DomesticTransitTime": {"ID":"493fae77-e55c-4d9d-aa3a-1641558e8a2b","MaxDaysTransitTime":32,"WeightLbsLower":8000,"WeightLbsUpper":0,"DistanceMilesLower":6751,"DistanceMilesUpper":7000}}\n2020/03/18 02:59:31 File created:\n2020/03/18 02:59:31 1_hhg_domestic_transit_times_domestic_20200318025931.csv\n2020/03/18 02:59:31 Completed processing sheet index 1 with Description HHG Domestic Transit Times\n')),(0,n.yg)("h2",{id:"useful-command-options"},"Useful Command Options"),(0,n.yg)("p",null,"You can run the parser with the ",(0,n.yg)("inlineCode",{parentName:"p"},"--help")," flag to see all possible options. Below is a selection of the most commonly needed flags:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"--filename string")," ",(0,n.yg)("strong",{parentName:"li"},"Required"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Filename (including path) of the XLSX to parse for the GHC transit time data import"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"--save-csv"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Save output of XLSX sheets to CSV file (default true)"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"--display"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Display output of parsed info (default false)"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"--db-env string"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},'Database environment: container, test, development (default "development")'))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"--db-name string"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},'Database name (default "dev_db")'))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"--db-host string"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},'Database hostname (default "localhost")'))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"--db-port int"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Database port (default 5432)"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"--db-user string"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},'Database username (default "postgres")'))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"--db-password string"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Database password")))))}u.isMDXComponent=!0}}]);