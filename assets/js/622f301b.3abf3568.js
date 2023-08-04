"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[5817],{62286:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=a(87462),n=(a(67294),a(3905));a(8209);const r={sidebar_position:6},o="How to run the GHC Pricing Import and Verify Data",l={unversionedId:"backend/guides/ghc/ghc-pricing-import",id:"backend/guides/ghc/ghc-pricing-import",title:"How to run the GHC Pricing Import and Verify Data",description:"To support loading GHC Pricing data you can use the bin/ghc-pricing-parser to do so.",source:"@site/docs/backend/guides/ghc/ghc-pricing-import.md",sourceDirName:"backend/guides/ghc",slug:"/backend/guides/ghc/ghc-pricing-import",permalink:"/mymove-docs/docs/backend/guides/ghc/ghc-pricing-import",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/backend/guides/ghc/ghc-pricing-import.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"backendSidebar",previous:{title:"GHC Pricing Parser",permalink:"/mymove-docs/docs/backend/guides/ghc/ghc-pricing-parser"},next:{title:"How to run the GHC Transit Time Import and Verify Data",permalink:"/mymove-docs/docs/backend/guides/ghc/ghc-transit-time-import"}},s={},p=[{value:"Running the parser",id:"running-the-parser",level:2},{value:"Verifying the data",id:"verifying-the-data",level:2},{value:"Tips",id:"tips",level:3},{value:"1. Make sure table total row count matches expectation",id:"1-make-sure-table-total-row-count-matches-expectation",level:3},{value:"2. Verify two row matches",id:"2-verify-two-row-matches",level:3},{value:"Useful Command Options",id:"useful-command-options",level:2}],m={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-run-the-ghc-pricing-import-and-verify-data"},"How to run the GHC Pricing Import and Verify Data"),(0,n.kt)("p",null,"To support loading GHC Pricing data you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"bin/ghc-pricing-parser")," to do so."),(0,n.kt)("h2",{id:"running-the-parser"},"Running the parser"),(0,n.kt)("p",null,"You will need to build the parser first."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"make bin/ghc-pricing-parser\n")),(0,n.kt)("p",null,"Once built you can run the command. This command will take some time, the sample data XLSX used below takes 5-6 minutes to complete."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'ghc-pricing-parser --filename pkg/parser/pricing/fixtures/pricing_template_2019-09-19_fake-data.xlsx --contract-code=UNIQUECODE --contract-name="Unique Name"\n')),(0,n.kt)("p",null,"Once complete move on to the next section to verify the import"),(0,n.kt)("h2",{id:"verifying-the-data"},"Verifying the data"),(0,n.kt)("p",null,"The script will output the summary of the staging tables and the rate engine tables that were used for the import. The summary will include the total number of rows inserted as well as a sample of two rows. The goal here is to spot check the data as an additional verification of the data import."),(0,n.kt)("p",null,"To do the verification follow the below steps for each of the ",(0,n.kt)("inlineCode",{parentName:"p"},"re_*")," tables. It's not required to do so for the ",(0,n.kt)("inlineCode",{parentName:"p"},"stage_*")," temporary tables but if there is a discrepancy a summary of those is also printed out to help in finding where the issue is. The examples below use the ",(0,n.kt)("inlineCode",{parentName:"p"},"re_shipment_type_prices")," table as an example."),(0,n.kt)("h3",{id:"tips"},"Tips"),(0,n.kt)("p",null,"If you are having trouble locating the start of the Rate Engine Table summary you can search for ",(0,n.kt)("inlineCode",{parentName:"p"},"Stage table import into rate engine tables complete")," in the output.\nYou only need to look into the Stage / Temp table summary if you wish to debug why the data was inaccurately parsed into the rate engine tables. The heading for those is ",(0,n.kt)("inlineCode",{parentName:"p"},"XLSX to stage table parsing complete")),(0,n.kt)("h3",{id:"1-make-sure-table-total-row-count-matches-expectation"},"1. Make sure table total row count matches expectation"),(0,n.kt)("p",null,"The pricing parser will output total rows imported, compare this to the number of rows with data in the spreadsheet. For example for the ",(0,n.kt)("inlineCode",{parentName:"p"},"re_shipment_type_prices")," table the data is found in the pricing template sheet ",(0,n.kt)("inlineCode",{parentName:"p"},"5a) Access. and Add. Prices"),". This can be determined by checking the matching import file ",(0,n.kt)("inlineCode",{parentName:"p"},"pkg/services/ghcimport/import_re_shipment_type_prices.go")," and seeing which staging data table feeds this rate engine table."),(0,n.kt)("p",null,"A couple of notes, there are many service items that represent one row in the original XLSX. For example ",(0,n.kt)("inlineCode",{parentName:"p"},"re_domestic_accessorial_prices")," comes from a table in sheet ",(0,n.kt)("em",{parentName:"p"},"5a")," of the spreadsheet and has the service item ",(0,n.kt)("em",{parentName:"p"},"Shuttle Service"),". The Service item for shuttle service is split into Origin and Destination records. Second note some rate engine tables require data from more than one sheet."),(0,n.kt)("p",null,"Once you find the main source of the information you can verify that the number of rows reported in the summary is the same as the number of rows in the matching table."),(0,n.kt)("p",null,"Pricing parser output example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'2020-02-27T17:13:21.044Z  INFO  ghc-pricing-parser/main.go:273  ----\n2020-02-27T17:13:21.049Z  INFO  ghc-pricing-parser/main.go:312  re_shipment_type_prices (ReShipmentTypePrice)  {"row count": 7}\n')),(0,n.kt)("h3",{id:"2-verify-two-row-matches"},"2. Verify two row matches"),(0,n.kt)("p",null,"If the number of rows matches you can then move to verifying the two rows are as expected."),(0,n.kt)("p",null,"Pricing parser output example with first and second row (note that these are two sample rows and not\nin any particular order relative to the spreadsheet):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'2020-02-27T17:13:21.044Z  INFO  ghc-pricing-parser/main.go:273  ----\n2020-02-27T17:13:21.049Z  INFO  ghc-pricing-parser/main.go:312  re_shipment_type_prices (ReShipmentTypePrice)  {"row count": 7}\n2020-02-27T17:13:21.049Z  INFO  ghc-pricing-parser/main.go:314  first:  {"ReShipmentTypePrice": {"id":"b93c75b2-559b-4990-8a24-a4ac9b40d7c4","contract_id":"7beb7e1b-b5d7-48e4-bd62-82ebf2f6bd96","service_id":"dbd3a39a-6bb9-42da-b81a-9229df7019cf","market":"C","factor":1.2,"created_at":"2020-02-27T17:13:20.884717Z","updated_at":"2020-02-27T17:13:20.88472Z","Contract":{"id":"00000000-0000-0000-0000-000000000000","code":"","name":"","created_at":"0001-01-01T00:00:00Z","updated_at":"0001-01-01T00:00:00Z"},"Service":{"id":"00000000-0000-0000-0000-000000000000","code":"","name":"","created_at":"0001-01-01T00:00:00Z","updated_at":"0001-01-01T00:00:00Z"}}}\n2020-02-27T17:13:21.049Z  INFO  ghc-pricing-parser/main.go:317  second:  {"ReShipmentTypePrice": {"id":"e4b94491-072f-40d5-8915-7877c0a64014","contract_id":"7beb7e1b-b5d7-48e4-bd62-82ebf2f6bd96","service_id":"0e45b6f5-f2f5-4235-94e4-7b4cb899eb5d","market":"C","factor":1.1,"created_at":"2020-02-27T17:13:20.888991Z","updated_at":"2020-02-27T17:13:20.888993Z","Contract":{"id":"00000000-0000-0000-0000-000000000000","code":"","name":"","created_at":"0001-01-01T00:00:00Z","updated_at":"0001-01-01T00:00:00Z"},"Service":{"id":"00000000-0000-0000-0000-000000000000","code":"","name":"","created_at":"0001-01-01T00:00:00Z","updated_at":"0001-01-01T00:00:00Z"}}}\n')),(0,n.kt)("h2",{id:"useful-command-options"},"Useful Command Options"),(0,n.kt)("p",null,"You can run the parser with the ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," flag to see all possible options. Below is a selection of the most commonly needed flags:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--filename string")," ",(0,n.kt)("strong",{parentName:"li"},"Required"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Filename (including path) of the XLSX to parse for the GHC rate engine data import"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--contract-code string")," ",(0,n.kt)("strong",{parentName:"li"},"Required"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Contract code to use for this import"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--contract-name string"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Contract name to use for this import; if not provided, the contract-code value will be used"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--display"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Display output of parsed info (default false)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--save-csv"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Save output of XLSX sheets to CSV file (default false)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--verify"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Perform sheet format verification -- but does not validate data (default true)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--re-import"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Perform the import from staging tables to GHC rate engine tables (default true)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--use-temp-tables"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Make the staging tables be temp tables that don't persist after import (default true)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--drop"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Drop any existing staging tables prior to creating them; useful when turning ",(0,n.kt)("inlineCode",{parentName:"li"},"--use-temp-tables")," off (default false)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--db-env string"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'Database environment: container, test, development (default "development")'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--db-name string"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'Database name (default "dev_db")'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--db-host string"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'Database hostname (default "localhost")'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--db-port int"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Database port (default 5432)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--db-user string"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'Database username (default "postgres")'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--db-password string"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Database password")))))}c.isMDXComponent=!0}}]);