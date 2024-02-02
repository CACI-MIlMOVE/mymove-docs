"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[3828],{9460:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=t(45072),r=(t(11504),t(95788));t(10880);const i={sidebar_position:12},l="Importing tariff400ng data for the year",o={unversionedId:"backend/guides/tariff400ng-yearly-import",id:"backend/guides/tariff400ng-yearly-import",title:"Importing tariff400ng data for the year",description:"Related PRs",source:"@site/docs/backend/guides/tariff400ng-yearly-import.md",sourceDirName:"backend/guides",slug:"/backend/guides/tariff400ng-yearly-import",permalink:"/mymove-docs/docs/backend/guides/tariff400ng-yearly-import",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/backend/guides/tariff400ng-yearly-import.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"backendSidebar",previous:{title:"Troubleshoot GEX Connection",permalink:"/mymove-docs/docs/backend/guides/troubleshoot-gex-connection"},next:{title:"Precommit Hooks",permalink:"/mymove-docs/docs/backend/guides/troubleshoot-precommit-hook-failures"}},s={},d=[{value:"Related PRs",id:"related-prs",level:2},{value:"Tables that need to be updated with the new data",id:"tables-that-need-to-be-updated-with-the-new-data",level:2},{value:"Obtain yearly rates <code>xlsx</code> file from USTRANSCOM",id:"obtain-yearly-rates-xlsx-file-from-ustranscom",level:2},{value:"Importing <code>full_packs</code>, <code>full_unpacks</code>, <code>linehauls</code>, <code>service_areas</code>, and <code>shorthauls</code>",id:"importing-full_packs-full_unpacks-linehauls-service_areas-and-shorthauls",level:2},{value:"Extract data from <code>xlsx</code> file via <code>Ruby</code> scripts",id:"extract-data-from-xlsx-file-via-ruby-scripts",level:3},{value:"Load dumped tables into local database",id:"load-dumped-tables-into-local-database",level:3},{value:"Setup local database",id:"setup-local-database",level:4},{value:"Transform to our schema",id:"transform-to-our-schema",level:4},{value:"Add additional <code>sit</code> data to <code>tariff400ng_service_areas</code> table",id:"add-additional-sit-data-to-tariff400ng_service_areas-table",level:2},{value:"Adding data",id:"adding-data",level:3},{value:"Importing <code>item_rates</code>",id:"importing-item_rates",level:2},{value:"Transform data from <code>xlsx</code> file",id:"transform-data-from-xlsx-file",level:3},{value:"Fix certain item rates. Update <code>weight_lbs_lower</code> and update <code>rate_cents</code> for specific codes",id:"fix-certain-item-rates-update-weight_lbs_lower-and-update-rate_cents-for-specific-codes",level:3},{value:"Prepare the migration",id:"prepare-the-migration",level:2},{value:"Sync zip3s and service areas",id:"sync-zip3s-and-service-areas",level:2},{value:"Run your new migration(s)",id:"run-your-new-migrations",level:2},{value:"Spot check for correct data",id:"spot-check-for-correct-data",level:2},{value:"Test",id:"test",level:2}],p={toc:d},c="wrapper";function g(e){let{components:a,...i}=e;return(0,r.yg)(c,(0,n.c)({},p,i,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"importing-tariff400ng-data-for-the-year"},"Importing tariff400ng data for the year"),(0,r.yg)("h2",{id:"related-prs"},"Related PRs"),(0,r.yg)("p",null,"For reference, here are the PRs from previous year's imports:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"2018 data load (multiple PRs): ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/transcom/mymove/pull/338"},"338"),", ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/transcom/mymove/pull/382"},"382"),",\n",(0,r.yg)("a",{parentName:"li",href:"https://github.com/transcom/mymove/pull/1286"},"1286"),", ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/transcom/mymove/pull/1313"},"1313")),(0,r.yg)("li",{parentName:"ul"},"2019 data load (multiple PRs): ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/transcom/mymove/pull/2036"},"2036"),", ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/transcom/mymove/pull/2060"},"2060")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/transcom/mymove/pull/3845"},"2020 data load"),": Note that this one is different than the others because\nit doesn't use ",(0,r.yg)("inlineCode",{parentName:"li"},"uuid_generate_v4")," (to keep UUIDs the same across all environments)")),(0,r.yg)("h2",{id:"tables-that-need-to-be-updated-with-the-new-data"},"Tables that need to be updated with the new data"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"tariff400ng_full_pack_rates")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"tariff400ng_full_unpack_rates")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"tariff400ng_linehaul_rates")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"tariff400ng_service_areas")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"tariff400ng_shorthaul_rates")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"tariff400ng_item_rates")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"tariff400ng_zip3s"),": This table is not scoped by date like the others above, but you should try to sync\nit up with the spreadsheet in case any zips or service areas have changed.")),(0,r.yg)("h2",{id:"obtain-yearly-rates-xlsx-file-from-ustranscom"},"Obtain yearly rates ",(0,r.yg)("inlineCode",{parentName:"h2"},"xlsx")," file from USTRANSCOM"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Visit: ",(0,r.yg)("a",{parentName:"li",href:"https://www.ustranscom.mil/dp3/hhg.cfm"},"https://www.ustranscom.mil/dp3/hhg.cfm")," (for some reason, I had to load hit this url twice... the first visit redirected to another page)."),(0,r.yg)("li",{parentName:"ol"},"Look under \u201cSpecial Requirements and Rates Team\u201d -> \u201cDomestic\u201d -> \u201c400NG Baseline Rates\u201d and download yearly rate file."),(0,r.yg)("li",{parentName:"ol"},"Copy the file to USTC MilMove Google drive: USTC MilMove -> Data -> Rate Engine pre GHC")),(0,r.yg)("h2",{id:"importing-full_packs-full_unpacks-linehauls-service_areas-and-shorthauls"},"Importing ",(0,r.yg)("inlineCode",{parentName:"h2"},"full_packs"),", ",(0,r.yg)("inlineCode",{parentName:"h2"},"full_unpacks"),", ",(0,r.yg)("inlineCode",{parentName:"h2"},"linehauls"),", ",(0,r.yg)("inlineCode",{parentName:"h2"},"service_areas"),", and ",(0,r.yg)("inlineCode",{parentName:"h2"},"shorthauls")),(0,r.yg)("h3",{id:"extract-data-from-xlsx-file-via-ruby-scripts"},"Extract data from ",(0,r.yg)("inlineCode",{parentName:"h3"},"xlsx")," file via ",(0,r.yg)("inlineCode",{parentName:"h3"},"Ruby")," scripts"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Clone the Truss fork of the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/trussworks/move.mil"},"move.mil repository"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Run ",(0,r.yg)("inlineCode",{parentName:"p"},"bin/setup")," on the command line and make sure there were no errors in populating the seed data.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Add the new ",(0,r.yg)("inlineCode",{parentName:"p"},"xlsx")," file to the ",(0,r.yg)("inlineCode",{parentName:"p"},"lib/data")," directory in the following format: ",(0,r.yg)("inlineCode",{parentName:"p"},"{YEAR} 400NG Baseline Rate.xlsx"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open ",(0,r.yg)("inlineCode",{parentName:"p"},"db/seeds.rb"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Near the bottom of the file, you'll see some commented code that imports baseline rates for previous years. Add the following and change the date range as needed:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-ruby"},"puts '-- Seeding 2020 400NG baseline rates...'\nSeeds::BaselineRates.new(\n  date_range: Range.new(Date.parse('2020-05-15'), Date.parse('2021-05-14')),\n  file_path: Rails.root.join('lib', 'data', '2020 400NG Baseline Rates.xlsx')\n).seed!\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Run ",(0,r.yg)("inlineCode",{parentName:"p"},"rails db:reset")," to drop the database, re-run migrations, and re-run the seeds import.  You may want to run\nPostgres on a different port than the default (5432) if you want to have your milmove DB up at the same time.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Dump the tables: ",(0,r.yg)("inlineCode",{parentName:"p"},"pg_dump --inserts -t full_packs -t full_unpacks -t linehauls -t service_areas -t shorthauls --no-owner --no-tablespaces move_mil_development > 400ng_temp_tables.sql")," .\nAdd in ",(0,r.yg)("inlineCode",{parentName:"p"},"-p <port>")," if you used a different port for Postgres."))),(0,r.yg)("h3",{id:"load-dumped-tables-into-local-database"},"Load dumped tables into local database"),(0,r.yg)("p",null,"Given that we want to predetermine the UUIDs for all inserted rows, we will use our local ",(0,r.yg)("inlineCode",{parentName:"p"},"dev_db")," as a staging\narea for the import, then use ",(0,r.yg)("inlineCode",{parentName:"p"},"pg_dump")," to create the migration after we're done with all transformations."),(0,r.yg)("h4",{id:"setup-local-database"},"Setup local database"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Go to your local ",(0,r.yg)("inlineCode",{parentName:"li"},"milmove")," clone."),(0,r.yg)("li",{parentName:"ol"},"Reset your local database: ",(0,r.yg)("inlineCode",{parentName:"li"},"make db_dev_reset db_dev_migrate"),"."),(0,r.yg)("li",{parentName:"ol"},"Drop the contents of the tariff tables we're going to be importing (so we can later ",(0,r.yg)("inlineCode",{parentName:"li"},"pg_dump")," their entire contents):",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"Run ",(0,r.yg)("inlineCode",{parentName:"li"},"psql-dev")),(0,r.yg)("li",{parentName:"ol"},"In psql, run: ",(0,r.yg)("inlineCode",{parentName:"li"},"truncate tariff400ng_full_pack_rates, tariff400ng_full_unpack_rates, tariff400ng_item_rates, tariff400ng_linehaul_rates, tariff400ng_service_areas, tariff400ng_shorthaul_rates;")))),(0,r.yg)("li",{parentName:"ol"},"Import the data you dumped from the Ruby-generated database by doing: ",(0,r.yg)("inlineCode",{parentName:"li"},"\\i path/to/400ng_temp_tables.sql"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},'If the above command fails with an "unrecognized configuration parameter", try commenting out the corresponding ',(0,r.yg)("inlineCode",{parentName:"li"},"SET")," line near the top of the SQL file. You may have a mismatch between the Postgres version used for the export and the one used for the import."))),(0,r.yg)("li",{parentName:"ol"},"You should now have both the MilMove ",(0,r.yg)("inlineCode",{parentName:"li"},"tariff400ng_*")," tables (empty) as well as the new temp tables generated above.")),(0,r.yg)("h4",{id:"transform-to-our-schema"},"Transform to our schema"),(0,r.yg)("p",null,"The next phase is to transform the temporary tables into the format expected by our ",(0,r.yg)("inlineCode",{parentName:"p"},"tariff400ng_*")," tables.\nTo do so, you can run the script below.  Save it as ",(0,r.yg)("inlineCode",{parentName:"p"},"tariff400ng_cleanup.sql")," and run it in psql: ",(0,r.yg)("inlineCode",{parentName:"p"},"\\i tariff400ng_cleanup.sql")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- Pack rates\nINSERT INTO tariff400ng_full_pack_rates\nSELECT\n    uuid_generate_v4() as id,\n    schedule,\n    LOWER(weight_lbs) as weight_lbs_lower,\n    UPPER(weight_lbs) as weight_lbs_upper,\n    CAST((rate * 100) as INTEGER) as rate_cents,\n    LOWER(effective) as effective_date_lower,\n    UPPER(effective) as effective_date_upper,\n    created_at,\n    updated_at\nFROM full_packs;\n\n-- Unpack rates\nINSERT INTO tariff400ng_full_unpack_rates\nSELECT\n    uuid_generate_v4() as id,\n    schedule,\n    CAST((rate * 100000) as INTEGER) as rate_millicents,\n    LOWER(effective) as effective_date_lower,\n    UPPER(effective) as effective_date_upper,\n    created_at,\n    updated_at\nFROM full_unpacks;\n\n-- Linehaul\nINSERT INTO tariff400ng_linehaul_rates\nSELECT\n    uuid_generate_v4() as id,\n    LOWER(dist_mi) as distance_miles_lower,\n    UPPER(dist_mi) as distance_miles_upper,\n    LOWER(weight_lbs) as weight_lbs_lower,\n    UPPER(weight_lbs) as weight_lbs_upper,\n    CAST((rate * 100) as INTEGER) as rate_cents,\n    LOWER(effective) as effective_date_lower,\n    UPPER(effective) as effective_date_upper,\n    CAST(type as TEXT) as type,\n    created_at,\n    updated_at\nFROM linehauls;\n\n-- Service areas\nINSERT INTO tariff400ng_service_areas\nSELECT\n    uuid_generate_v4() as id,\n    service_area,\n    name,\n    services_schedule,\n    CAST((linehaul_factor * 100) as INTEGER) as linehaul_factor,\n    CAST((orig_dest_service_charge * 100) as INTEGER) as service_charge_cents,\n    LOWER(effective) as effective_date_lower,\n    UPPER(effective) as effective_date_upper,\n    created_at,\n    updated_at\nFROM service_areas;\n\n-- Shorthauls\nINSERT INTO tariff400ng_shorthaul_rates\nSELECT\n    uuid_generate_v4() as id,\n    LOWER(cwt_mi) as cwt_miles_lower,\n    UPPER(cwt_mi) as cwt_miles_upper,\n    CAST((rate * 100) as INTEGER) as rate_cents,\n    LOWER(effective) as effective_date_lower,\n    UPPER(effective) as effective_date_upper,\n    created_at,\n    updated_at\nFROM shorthauls;\n")),(0,r.yg)("p",null,"At this point, stop to spot check that all ",(0,r.yg)("inlineCode",{parentName:"p"},"tariff400ng_*")," tables have the number of records that\nyou would expect based on the contents of the Ruby-generated tables as well as the source spreadsheet."),(0,r.yg)("h2",{id:"add-additional-sit-data-to-tariff400ng_service_areas-table"},"Add additional ",(0,r.yg)("inlineCode",{parentName:"h2"},"sit")," data to ",(0,r.yg)("inlineCode",{parentName:"h2"},"tariff400ng_service_areas")," table"),(0,r.yg)("p",null,"The extracted data from the Ruby scripts doesn't contain all the data we need.\nWe also need ",(0,r.yg)("inlineCode",{parentName:"p"},"185A SIT First Day & Whouse"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"185B SIT Addl Days"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"SIT PD Schedule"),"\nfound on the ",(0,r.yg)("inlineCode",{parentName:"p"},"Geographical Schedule")," sheet."),(0,r.yg)("h3",{id:"adding-data"},"Adding data"),(0,r.yg)("p",null,"From the ",(0,r.yg)("inlineCode",{parentName:"p"},"Geographical Schedule")," sheet, copy the service area number, 185A, 185B, and SIT PD Schedule columns and\ntransform it into the ",(0,r.yg)("inlineCode",{parentName:"p"},"SELECT")," statements in the template below.  Save this completed template to a\n",(0,r.yg)("inlineCode",{parentName:"p"},"tariff400ng_fix_service_areas.sql")," file."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE FUNCTION update_sit_rates(\n    service_area_number text,\n    sit_185a_rate_cents integer,\n    sit_185b_rate_cents integer,\n    sit_pd_schedule integer\n) RETURNS void language plpgsql AS $$\nBEGIN\n    UPDATE tariff400ng_service_areas\n    SET\n        sit_185A_rate_cents = $2,\n        sit_185B_rate_cents = $3,\n        sit_pd_schedule = $4\n    WHERE tariff400ng_service_areas.service_area = $1\n      AND tariff400ng_service_areas.effective_date_lower = '2020-05-15';\nEND $$;\n\nSELECT update_sit_rates('4', 2004, 070, 2);\nSELECT update_sit_rates('8', 1538, 048, 2);\n-- More rows here\n\nDROP FUNCTION update_sit_rates;\n")),(0,r.yg)("p",null,"A few notes:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"There are many ways to do this transformation depending on your preferred tools.  One way is to download a CSV from\nthe ",(0,r.yg)("inlineCode",{parentName:"li"},"Geographical Schedule")," sheet, load that into Numbers locally, then just copy the four columns of interest to GoLand.\nThen, you can use GoLand to search and replace using a regex to transform it to the needed format.  Example regex search and replace:\n",(0,r.yg)("inlineCode",{parentName:"li"},"^([0-9]+)\\t+\\$([0-9]+)\\.([0-9]+)\\t+\\$([0-9]+)\\.([0-9]+)\\t+([0-9])")," to ",(0,r.yg)("inlineCode",{parentName:"li"},"SELECT update_sit_rates('$1', $2$3, $4$5, $6);")),(0,r.yg)("li",{parentName:"ul"},"Note that the rates in the document are in dollars, but we store the rates in cents in our ",(0,r.yg)("inlineCode",{parentName:"li"},"tariff400ng_service_areas")," table,\nso make sure you adjust accordingly."),(0,r.yg)("li",{parentName:"ul"},"Run this sql file with psql by either doing ",(0,r.yg)("inlineCode",{parentName:"li"},"psql-dev < tariff400ng_fix_service_areas.sql")," or (if already in psql)\n",(0,r.yg)("inlineCode",{parentName:"li"},"\\i tariff400ng_fix_service_areas.sql")," .")),(0,r.yg)("p",null,"Spot check the ",(0,r.yg)("inlineCode",{parentName:"p"},"tariff400ng_service_areas")," table to make sure the data is as expected."),(0,r.yg)("h2",{id:"importing-item_rates"},"Importing ",(0,r.yg)("inlineCode",{parentName:"h2"},"item_rates")),(0,r.yg)("h3",{id:"transform-data-from-xlsx-file"},"Transform data from ",(0,r.yg)("inlineCode",{parentName:"h3"},"xlsx")," file"),(0,r.yg)("p",null,"We're going to make use of the work that Patrick Stanger delivered in ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pull/1286"},"this PR"),"."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Open ",(0,r.yg)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1Zp--NWMr6VYrRlCn8Bi4_Ab4wXFKjxYl/edit#gid=1235758365"},"this google sheet")," alongside the 400ng data you have received for the upcoming year."),(0,r.yg)("li",{parentName:"ol"},"Visit the ",(0,r.yg)("inlineCode",{parentName:"li"},"Accessorials")," tab in both spreadsheets."),(0,r.yg)("li",{parentName:"ol"},'In the new data sheet, within the main section and the Alaska waterhaul section, copy all the values to the left of where it says "weight". Start with the cells marked in the screenshot below:\n',(0,r.yg)("img",{alt:"accessorials sheet",src:t(41760).c,width:"3242",height:"1634"})),(0,r.yg)("li",{parentName:"ol"},"Paste those values into the corresponding ",(0,r.yg)("inlineCode",{parentName:"li"},"Accessorials")," tab in the other sheet."),(0,r.yg)("li",{parentName:"ol"},"Repeat this same process for the ",(0,r.yg)("inlineCode",{parentName:"li"},"Additional Rates")," tab. Starting at the cell marked in the screenshot below:\n",(0,r.yg)("img",{alt:"additional rates sheet",src:t(87296).c,width:"2776",height:"1732"})),(0,r.yg)("li",{parentName:"ol"},"Head over to the ",(0,r.yg)("inlineCode",{parentName:"li"},"migration work")," tab. Here, you'll find that queries have been generated for you to insert records into the ",(0,r.yg)("inlineCode",{parentName:"li"},"milmove")," database."),(0,r.yg)("li",{parentName:"ol"},"Change the ",(0,r.yg)("inlineCode",{parentName:"li"},"effective_date_lower")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"effective_date_upper")," in row 2 to be the correct dates."),(0,r.yg)("li",{parentName:"ol"},"Copy all of the values in the ",(0,r.yg)("inlineCode",{parentName:"li"},"query")," column for both the ",(0,r.yg)("inlineCode",{parentName:"li"},"Additional Rates")," table at the top of the sheet and the ",(0,r.yg)("inlineCode",{parentName:"li"},"Accessorials")," table below it to\na file called ",(0,r.yg)("inlineCode",{parentName:"li"},"tariff400ng_item_rates.sql"),'.  A few rows may have "#REF!" errors due to 125B/125D no longer being included on the ',(0,r.yg)("inlineCode",{parentName:"li"},"Accessorials")," tab unlike\nprevious years; you should skip those."),(0,r.yg)("li",{parentName:"ol"},"Run ",(0,r.yg)("inlineCode",{parentName:"li"},"tariff400ng_item_rates.sql")," against your local database as you've done with other SQL files.")),(0,r.yg)("p",null,"Spot check the ",(0,r.yg)("inlineCode",{parentName:"p"},"tariff400ng_item_rates")," table to make sure the data is as expected."),(0,r.yg)("h3",{id:"fix-certain-item-rates-update-weight_lbs_lower-and-update-rate_cents-for-specific-codes"},"Fix certain item rates. Update ",(0,r.yg)("inlineCode",{parentName:"h3"},"weight_lbs_lower")," and update ",(0,r.yg)("inlineCode",{parentName:"h3"},"rate_cents")," for specific codes"),(0,r.yg)("p",null,"There are a few item rates whose values are not correctly interpreted correctly by the spreadsheet.  These can be\nfixed by running this SQL script against your local database (alternatively, you could address this in the spreadsheet\nprior to inserting it into the database):"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- These charges are subject to a min of 1,000lbs, so that rate should apply to weights < 1,000 also\nUPDATE tariff400ng_item_rates\nSET weight_lbs_lower = 0\nWHERE weight_lbs_lower = 1000\n  AND code IN ('125A', '125C', '210A', '210D', '225A', '225B')\n  AND effective_date_lower = '2020-05-15';\n\n-- These rates were assumed to be listed in cents but they were in dollars, though they were already scaled by 10\n-- because they contained decimal values\nUPDATE tariff400ng_item_rates\nSET rate_cents = rate_cents * 10\nWHERE code IN ('125C', '210D', '225B')\n  AND effective_date_lower = '2020-05-15';\n\n-- These rates were assumed to be listed in cents but they were in dollars\nUPDATE tariff400ng_item_rates\nSET rate_cents = rate_cents * 100\nWHERE code IN ('125A', '210A', '225A')\n  AND effective_date_lower = '2020-05-15';\n")),(0,r.yg)("p",null,"Spot check the ",(0,r.yg)("inlineCode",{parentName:"p"},"tariff400ng_item_rates")," table to make sure the data is as expected after these fixes."),(0,r.yg)("h2",{id:"prepare-the-migration"},"Prepare the migration"),(0,r.yg)("p",null,"Now we should have all the data imported, transformed, and cleaned.  We can now dump the appropriate tables that\nwill ultimately become our migration:"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"pg_dump -t tariff400ng_full_pack_rates -t tariff400ng_full_unpack_rates -t tariff400ng_item_rates -t tariff400ng_linehaul_rates -t tariff400ng_service_areas -t tariff400ng_shorthaul_rates --no-owner --no-tablespaces -h localhost -U postgres -W --data-only dev_db > new_2020_400ng_data.sql")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/mymove-docs/docs/backend/setup/database-migrations#creating-a-migration"},"Create a new migration")," using the usual process and copy this data into it."),(0,r.yg)("p",null,"Note that we use the ",(0,r.yg)("inlineCode",{parentName:"p"},"COPY")," mechanism here to insert rows into the database -- this is much faster than ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT")," on\nlarge data sets."),(0,r.yg)("h2",{id:"sync-zip3s-and-service-areas"},"Sync zip3s and service areas"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"Base Point City")," tab of the 400NG spreadsheet contains zip3s, service areas, and base point cities/states.\nUsing your preferred tools, compare this data against the current state of the ",(0,r.yg)("inlineCode",{parentName:"p"},"tariff400ng_zip3s")," table to see if\nany corrections/additions/deletions need to be made."),(0,r.yg)("p",null,"This query may be helpful in getting the current table into a format that's similar to the spreadsheet to make\ndiffs easier:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"select basepoint_city, state, service_area, string_agg(zip3, ',' order by zip3)\nfrom tariff400ng_zip3s\ngroup by basepoint_city, state, service_area\norder by basepoint_city;\n")),(0,r.yg)("p",null,"If there are any changes to be made, make a separate migration to address and include in your PR."),(0,r.yg)("h2",{id:"run-your-new-migrations"},"Run your new migration(s)"),(0,r.yg)("p",null,"Now we can test out our migration(s) by resetting and migrating our local database.\nIf you want to be able to get back to the current state of your database,\nconsider using our ",(0,r.yg)("inlineCode",{parentName:"p"},"db-backup")," script to make a backup before you begin (",(0,r.yg)("inlineCode",{parentName:"p"},"db-restore")," can restore it later)."),(0,r.yg)("p",null,"Once you're ready, run ",(0,r.yg)("inlineCode",{parentName:"p"},"make db_dev_reset db_dev_migrate")," and make sure it completes successfully."),(0,r.yg)("h2",{id:"spot-check-for-correct-data"},"Spot check for correct data"),(0,r.yg)("p",null,"Ensure the data loaded looks correct by checking a count of row numbers grouped by date."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"select effective_date_lower, effective_date_upper, count(*) from tariff400ng_full_pack_rates group by effective_date_lower, effective_date_upper order by effective_date_lower DESC;"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"select effective_date_lower, effective_date_upper, count(*) from tariff400ng_full_unpack_rates group by effective_date_lower, effective_date_upper order by effective_date_lower DESC;"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"select effective_date_lower, effective_date_upper, count(*) from tariff400ng_item_rates group by effective_date_lower, effective_date_upper order by effective_date_lower DESC;"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"select effective_date_lower, effective_date_upper, count(*) from tariff400ng_linehaul_rates group by effective_date_lower, effective_date_upper order by effective_date_lower DESC;"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"select effective_date_lower, effective_date_upper, count(*) from tariff400ng_service_areas group by effective_date_lower, effective_date_upper order by effective_date_lower DESC;"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"select effective_date_lower, effective_date_upper, count(*) from tariff400ng_shorthaul_rates group by effective_date_lower, effective_date_upper order by effective_date_lower DESC;")))),(0,r.yg)("p",null,"Also, look at the data in the context of previous year's data to see if the format/trends look reasonable:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"select * from tariff400ng_full_pack_rates order by weight_lbs_lower, schedule, effective_date_lower;"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"select * from tariff400ng_full_unpack_rates order by schedule, effective_date_lower;"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"select * from tariff400ng_item_rates where schedule is null order by code, schedule, weight_lbs_lower, effective_date_lower;"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"select * from tariff400ng_item_rates where schedule is not null order by code, schedule, weight_lbs_lower, effective_date_lower;"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"select * from tariff400ng_linehaul_rates order by distance_miles_lower, weight_lbs_lower, type, effective_date_lower;"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"select * from tariff400ng_service_areas order by service_area, effective_date_lower;"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"select * from tariff400ng_shorthaul_rates order by cwt_miles_lower, effective_date_lower;")))),(0,r.yg)("h2",{id:"test"},"Test"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Deploy branch in ",(0,r.yg)("inlineCode",{parentName:"li"},"experimental"),"."),(0,r.yg)("li",{parentName:"ol"},"Create a move for a date that is between the ",(0,r.yg)("inlineCode",{parentName:"li"},"effective_date_lower")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"effective_date_upper"),"."),(0,r.yg)("li",{parentName:"ol"},"Watch the console and ensure the app doesn't throw any errors.")))}g.isMDXComponent=!0},41760:(e,a,t)=>{t.d(a,{c:()=>n});const n=t.p+"assets/images/accessorials_spreadsheet-4ed6b9d28908049301f081ca7bbdf74d.png"},87296:(e,a,t)=>{t.d(a,{c:()=>n});const n=t.p+"assets/images/additional_rates_spreadsheet-70f3b09ff87592e9cae1a7a6892ee59d.png"}}]);