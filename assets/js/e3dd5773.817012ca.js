"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[6248],{84220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));n(8209);const o={sidebar_position:2},s="Acceptance testing notifications",c={unversionedId:"backend/testing/acceptance-testing-notifications",id:"backend/testing/acceptance-testing-notifications",title:"Acceptance testing notifications",description:"Acceptance testing notifications involves four steps",source:"@site/docs/backend/testing/acceptance-testing-notifications.md",sourceDirName:"backend/testing",slug:"/backend/testing/acceptance-testing-notifications",permalink:"/mymove-docs/docs/backend/testing/acceptance-testing-notifications",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/testing/acceptance-testing-notifications.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"backendSidebar",previous:{title:"Acceptance testing Syncada",permalink:"/mymove-docs/docs/backend/testing/acceptance-testing-syncada-edi-invoicing"},next:{title:"Acceptance testing payment requests",permalink:"/mymove-docs/docs/backend/testing/acceptance-testing-payment-requests"}},r={},l=[{value:"1. Creating a subscription for an event",id:"1-creating-a-subscription-for-an-event",level:2},{value:"Inserting a subscription using SQL",id:"inserting-a-subscription-using-sql",level:3},{value:"2. Start the server and webhook-client",id:"2-start-the-server-and-webhook-client",level:2},{value:"3. Creating a notification for that event",id:"3-creating-a-notification-for-that-event",level:2},{value:"4. Checking that the notification was sent to the Prime",id:"4-checking-that-the-notification-was-sent-to-the-prime",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"acceptance-testing-notifications"},"Acceptance testing notifications"),(0,a.kt)("p",null,"Acceptance testing notifications involves four steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Creating a subscription for an event"),(0,a.kt)("li",{parentName:"ol"},"Start the server and webhook-client"),(0,a.kt)("li",{parentName:"ol"},"Creating a notification for that event"),(0,a.kt)("li",{parentName:"ol"},"Checking that the notification was sent to the Prime")),(0,a.kt)("p",null,"This needs to be done in devlocal and not on staging as we are unable to get the webhook-client on staging until we have infra support."),(0,a.kt)("h2",{id:"1-creating-a-subscription-for-an-event"},"1. Creating a subscription for an event"),(0,a.kt)("p",null,"Subscriptions are store in the ",(0,a.kt)("inlineCode",{parentName:"p"},"webhook_subscriptions")," table."),(0,a.kt)("p",null,"Currently we have no endpoint to access these. Instead, we just add them into the database."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"We do not have any subscriptions live on staging")),(0,a.kt)("h3",{id:"inserting-a-subscription-using-sql"},"Inserting a subscription using SQL"),(0,a.kt)("p",null,"Here's the SQL to insert a subscription for a ",(0,a.kt)("inlineCode",{parentName:"p"},"PaymentRequest.Update")," event."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:"{5}","{5}":!0},"INSERT INTO public.webhook_subscriptions\n(id,subscriber_id,status,event_key,callback_url,created_at,updated_at)\nVALUES\n('5cd33db4-9441-4d2d-bd7c-f9efd9ce310c','5db13bb4-6d29-4bdb-bc81-262f4513ecf6',\n'ACTIVE','PaymentRequest.Update','https://primelocal:9443/support/v1/webhook-notify',\n'2020-08-24 18:31:29.171','2020-08-24 18:31:29.171');\n")),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"psql-dev")," to do the insertion. On the command prompt in the MilMove\nrepo, call ",(0,a.kt)("inlineCode",{parentName:"p"},"psql-dev")," to start a prompt on the Postgres database."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'>_ psql-dev\npsql (12.1, server 12.2 (Debian 12.2-2.pgdg100+1))\nType "help" for help.\n')),(0,a.kt)("p",null,"Then paste the SQL command from above, you should see the following response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"dev_db=<paste command here>\nINSERT 0 1\n")),(0,a.kt)("p",null,'If you do not, you may need to get the right subscriber ID from your db, with the name "Prime McPrime Contractor"'),(0,a.kt)("p",null,"Once you are successful in adding the subscription, use ",(0,a.kt)("inlineCode",{parentName:"p"},"\\q")," to exit the ",(0,a.kt)("inlineCode",{parentName:"p"},"psql-dev")," prompt."),(0,a.kt)("h2",{id:"2-start-the-server-and-webhook-client"},"2. Start the server and webhook-client"),(0,a.kt)("p",null,"Start the MilMove server with ",(0,a.kt)("inlineCode",{parentName:"p"},"make server_run")),(0,a.kt)("p",null,"Start the webhook client in a separate terminal with the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"webhook-client webhook-notify --period 20 --insecure\n")),(0,a.kt)("admonition",{title:"Troubleshooting",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you do not have ",(0,a.kt)("inlineCode",{parentName:"p"},"webhook-client")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"$PATH"),", you will need to run the\nfollowing make commands to create the needed binary."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Check if webhook-client is in your $PATH"',title:'"Check',if:!0,"webhook-client":!0,is:!0,in:!0,your:!0,'$PATH"':!0},"which webhook-client\n")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Remove and build webhook-client binary"',title:'"Remove',and:!0,build:!0,"webhook-client":!0,'binary"':!0},"rm -rvf bin/webhook-client && make bin/webhook-client\n"))),(0,a.kt)("p",null,"The client will run and check every 20 seconds for new notifications to send.\nWhen it finds a pending notification, and an active subscription, it will send\nit to the server."),(0,a.kt)("p",null,"At first, it may not find any notifications, and you should see the following\nevery 20s:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'2020-08-25T21:43:17.175Z    DEBUG   webhook/webhook.go:146  Notification Check: {"Num notifications found": 0}\n')),(0,a.kt)("h2",{id:"3-creating-a-notification-for-that-event"},"3. Creating a notification for that event"),(0,a.kt)("p",null,'To create a notification, you will use an endpoint that has the trigger added. For example, the above subscription was for "PaymentRequest.Update". That can be triggered by the ',(0,a.kt)("inlineCode",{parentName:"p"},"updatePaymentRequestStatus")," endpoint."),(0,a.kt)("p",null,"Using Postman, send an update to that endpoint. Set the status to\n",(0,a.kt)("inlineCode",{parentName:"p"},"'SENT_TO_GEX'"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:'{7} title="Sample request"',"{7}":!0,title:'"Sample','request"':!0},'PATCH /support/v1/payment-requests/a2c34dba-015f-4f96-a38b-0c0b9272e208/status HTTP/1.1\nHost: https://primelocal:9443\nContent-Type: application/json\nIf-Match: MjAyMC0wOC0yNVQxODo1MToxMi42ODgwODha\n\n{\n    "status": "SENT_TO_GEX",\n    "rejectionReason": ""\n}\n')),(0,a.kt)("p",null,"Be sure to use the proper etag which you can get from the ",(0,a.kt)("inlineCode",{parentName:"p"},"ListMTOPaymentRequests")," endpoint."),(0,a.kt)("p",null,"If your notification was successful, you should see an entry in the server log:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"2020-08-25T18:51:12.742Z    INFO    event/notification.go:145   event.NotificationEventHandler: Notification created and stored.\n")),(0,a.kt)("h2",{id:"4-checking-that-the-notification-was-sent-to-the-prime"},"4. Checking that the notification was sent to the Prime"),(0,a.kt)("p",null,"Once the notification is created, check the client to see that it sends it successfully!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:"{3}","{3}":!0},'2020-08-25T21:44:57.173Z    DEBUG   webhook/webhook.go:146  Notification Check: {"Num notifications found": 1}\n2020-08-25T21:44:57.177Z    DEBUG   webhook/webhook.go:161  Subscription Check! {"Num subscriptions found": 1}\n2020-08-25T21:44:57.192Z    INFO    webhook/webhook.go:125  Notification successfully sent: {"Status": "200 OK", "Body": "{\\"id\\":\\"0586dde3-df69-4b1e-8cc5-49bc83764600\\",\\"triggeredAt\\":\\"0001-01-01T00:00:00.000Z\\"}\\n"}\n')))}u.isMDXComponent=!0}}]);