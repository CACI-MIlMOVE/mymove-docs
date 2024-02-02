"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[1596],{25804:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var n=o(45072),r=(o(11504),o(95788));o(10880);const s={sidebar_position:5},d="How To Store Data in Redux",a={unversionedId:"frontend/guides/how-to-store-api-data-on-the-front-end",id:"frontend/guides/how-to-store-api-data-on-the-front-end",title:"How To Store Data in Redux",description:"The specific layout of data within the Redux store should generally be considered an implementation detail and we should strive to avoid coupling any Components to this structure directly. Selectors provide the best way to decouple component data access from store layout.",source:"@site/docs/frontend/guides/how-to-store-api-data-on-the-front-end.md",sourceDirName:"frontend/guides",slug:"/frontend/guides/how-to-store-api-data-on-the-front-end",permalink:"/mymove-docs/docs/frontend/guides/how-to-store-api-data-on-the-front-end",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/frontend/guides/how-to-store-api-data-on-the-front-end.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"frontendSidebar",previous:{title:"How we use React Query",permalink:"/mymove-docs/docs/frontend/guides/how-we-use-react-query"},next:{title:"How To Store UI State in Redux",permalink:"/mymove-docs/docs/frontend/guides/store-ui-state-in-redux"}},i={},u=[],p={toc:u},c="wrapper";function l(e){let{components:t,...o}=e;return(0,r.yg)(c,(0,n.c)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"how-to-store-data-in-redux"},"How To Store Data in Redux"),(0,r.yg)("p",null,"The specific layout of data within the Redux store should generally be considered an implementation detail and we should strive to avoid coupling any Components to this structure directly. Selectors provide the best way to decouple component data access from store layout."),(0,r.yg)("p",null,"The current layout of data in Redux, however, is the following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},"{\n    entities: {\n        shipments: {\n            '123e4567-e89b-12d3-a456-426655440000': { /* shipment properties */ },\n        },\n        addresses: {\n            '123e4567-e89b-12d3-a456-426655440000': { /* address properties */ },\n        }\n    },\n    requests: {\n       byID: {\n           'req_0': { /* request properties */},\n           'req_1': { /* request properties */},\n       },\n       errored: {\n           'req_1': { /* request properties */},\n       },\n       lastErrorByLabel: {\n           'ShipmentForm.loadShipments': { /* error properties */ },\n       }\n    },\n    ui: {\n        'currentShipmentID': '123e4567-e89b-12d3-a456-426655440000',\n    },\n}\n")))}l.isMDXComponent=!0}}]);