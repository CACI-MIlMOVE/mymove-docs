"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[6712],{52600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>g});var s=n(45072),o=(n(11504),n(95788));n(10880);const a={sidebar_position:22},r="Debugging SQL Tests",i={unversionedId:"backend/guides/debugging-sql-tests",id:"backend/guides/debugging-sql-tests",title:"Debugging SQL Tests",description:"Overview",source:"@site/docs/backend/guides/debugging-sql-tests.md",sourceDirName:"backend/guides",slug:"/backend/guides/debugging-sql-tests",permalink:"/mymove-docs/docs/backend/guides/debugging-sql-tests",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/backend/guides/debugging-sql-tests.md",tags:[],version:"current",sidebarPosition:22,frontMatter:{sidebar_position:22},sidebar:"backendSidebar",previous:{title:"WIP server-side validation",permalink:"/mymove-docs/docs/backend/guides/wip-server-side-validation"},next:{title:"History and Audit Logging Guide",permalink:"/mymove-docs/docs/backend/guides/guide-to-history-and-audit-logging"}},l={},g=[{value:"Overview",id:"overview",level:2},{value:"Database Setup",id:"database-setup",level:2},{value:"Log All SQL Statements",id:"log-all-sql-statements",level:2}],d={toc:g},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,s.c)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"debugging-sql-tests"},"Debugging SQL Tests"),(0,o.yg)("h2",{id:"overview"},"Overview"),(0,o.yg)("p",null,"Sometimes, when refactoring or changing code, you get an unexpected\nsql error, like ",(0,o.yg)("inlineCode",{parentName:"p"},"sql: transaction has already been committed or rolled\nback"),". Below is one technique for figuring out what is going on."),(0,o.yg)("h2",{id:"database-setup"},"Database Setup"),(0,o.yg)("p",null,"Each of our tests should run in a transaction, which means trying to\nfigure out the state of the database after the tests finish is hard\nsince it is reset. Each package runs its tests in a clone of the\ndatabase."),(0,o.yg)("p",null,"After you run ",(0,o.yg)("inlineCode",{parentName:"p"},"make server_test_setup"),", you should see a docker\ncontainer running with the name ",(0,o.yg)("inlineCode",{parentName:"p"},"milmove-db-test")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"$ docker docker ps -f name=milmove-db-test\n")),(0,o.yg)("p",null,"You can connect to that docker container and see the databases.\nSomething like"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"$ docker exec -it milmove-db-test psql -U postgres -l\n                                 List of databases\n   Name    |  Owner   | Encoding |  Collate   |   Ctype    |   Access privileges\n-----------+----------+----------+------------+------------+-----------------------\n postgres  | postgres | UTF8     | en_US.utf8 | en_US.utf8 |\n template0 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +\n           |          |          |            |            | postgres=CTc/postgres\n template1 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +\n           |          |          |            |            | postgres=CTc/postgres\n test_db   | postgres | UTF8     | en_US.utf8 | en_US.utf8 |\n(4 rows)\n")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"test_db")," is the template database. Now, run your failing test\n(and only your failing test)."),(0,o.yg)("p",null,"Something like"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"$ go test ./pkg/handlers/internalapi/ -testify.m TestCancelMoveHandler\nok      github.com/transcom/mymove/pkg/handlers/internalapi 0.929s\n")),(0,o.yg)("p",null,"Now look at your databases again"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker exec -it milmove-db-test psql -U postgres -l\n                                 List of databases\n   Name    |  Owner   | Encoding |  Collate   |   Ctype    |   Access privileges\n-----------+----------+----------+------------+------------+-----------------------\n postgres  | postgres | UTF8     | en_US.utf8 | en_US.utf8 |\n template0 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +\n           |          |          |            |            | postgres=CTc/postgres\n template1 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +\n           |          |          |            |            | postgres=CTc/postgres\n test_db   | postgres | UTF8     | en_US.utf8 | en_US.utf8 |\n test_db_1 | postgres | UTF8     | en_US.utf8 | en_US.utf8 |\n(5 rows)\n")),(0,o.yg)("p",null,"Note the ",(0,o.yg)("inlineCode",{parentName:"p"},"test_db_1")," database, which is a clone of the pristine\n",(0,o.yg)("inlineCode",{parentName:"p"},"test_db")," instance and is what is used for your test."),(0,o.yg)("h2",{id:"log-all-sql-statements"},"Log All SQL Statements"),(0,o.yg)("p",null,"Now, we are going to tell postgres to log every single SQL statement:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker exec -it milmove-db-test psql -U postgres \\\n  -c \"ALTER DATABASE test_db_1 SET log_statement = 'all'\"\n")),(0,o.yg)("p",null,"In one terminal window, let's watch the logs"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"$ docker logs -f milmove-db-test\n...\n2022-03-30 19:35:05.603 UTC [149] STATEMENT:  ALTER DATABASE test_db_1 SET log_statment = 'all'\n")),(0,o.yg)("p",null,"Ok! Now we can run our test again (in another terminal window)"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"$ go test ./pkg/handlers/internalapi/ -testify.m TestCancelMoveHandler\nok      github.com/transcom/mymove/pkg/handlers/internalapi 0.929s\n")),(0,o.yg)("p",null,"You can see every single SQL statement!"),(0,o.yg)("p",null,"If you want to try and figure out which SQL statement is being called\nwhere, add something like ..."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"    _, err = appCtx.DB().Store.Exec(\"SET LOCAL drew.foo = 'after function foo'\")\n    if err != nil {\n      // return the error, abort, or something\n      return err\n    }\n")),(0,o.yg)("p",null,"Now you can run your test again and look for that in the logs."))}u.isMDXComponent=!0}}]);