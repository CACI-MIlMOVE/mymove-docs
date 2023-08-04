"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[9051],{85754:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>r});var n=o(87462),a=(o(67294),o(3905));o(8209);const i={sidebar_position:9},s="How to Soft Delete",d={unversionedId:"backend/guides/how-to/soft-delete",id:"backend/guides/how-to/soft-delete",title:"How to Soft Delete",description:"Due to our contractual obligations with the federal government, we must be able to access deleted data even several years after it\u2019s been used in the system. For this reason, MilMove is shifting away from hard deleting data and adopting the practice to soft delete instead. Soft delete functionality has not yet been implemented throughout the entire codebase but it is expected to be the sole deletion method moving forward.",source:"@site/docs/backend/guides/how-to/soft-delete.md",sourceDirName:"backend/guides/how-to",slug:"/backend/guides/how-to/soft-delete",permalink:"/mymove-docs/docs/backend/guides/how-to/soft-delete",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/backend/guides/how-to/soft-delete.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"backendSidebar",previous:{title:"How to revert a change",permalink:"/mymove-docs/docs/backend/guides/how-to/revert-a-change"},next:{title:"How to Upgrade Go Version",permalink:"/mymove-docs/docs/backend/guides/how-to/upgrade-go-version"}},l={},r=[{value:"How Soft Delete Works",id:"how-soft-delete-works",level:2},{value:"Prerequisites for Soft Delete",id:"prerequisites-for-soft-delete",level:2},{value:"Querying for non-deleted records",id:"querying-for-non-deleted-records",level:2},{value:"Using Soft Delete",id:"using-soft-delete",level:2}],c={toc:r},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-soft-delete"},"How to Soft Delete"),(0,a.kt)("p",null,"Due to our contractual obligations with the federal government, we must be able to access deleted data even several years after it\u2019s been used in the system. For this reason, MilMove is shifting away from hard deleting data and adopting the practice to soft delete instead. Soft delete functionality has not yet been implemented throughout the entire codebase but it is expected to be the sole deletion method moving forward."),(0,a.kt)("p",null,"Please note that soft delete is to be treated like a hard delete in the regard that the process should never be reversed or that data can be 'un-deleted'."),(0,a.kt)("h2",{id:"how-soft-delete-works"},"How Soft Delete Works"),(0,a.kt)("p",null,"MilMove's implementation of soft delete takes in a model, sets a time stamp to its ",(0,a.kt)("inlineCode",{parentName:"p"},"DeletedAt")," field, before cascading down to its children and repeating the process until there are no longer children to 'delete'."),(0,a.kt)("h2",{id:"prerequisites-for-soft-delete"},"Prerequisites for Soft Delete"),(0,a.kt)("p",null,"To use soft delete, a model and its children (or foreign key associations) must possess a ",(0,a.kt)("inlineCode",{parentName:"p"},"DeletedAt")," field that corresponds to the ",(0,a.kt)("inlineCode",{parentName:"p"},"deleted_at")," column of their table within the database."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type ExampleModel struct {\n    ...\n    DeletedAt   *time.Time  `db:"deleted_at"`\n\n}\n')),(0,a.kt)("p",null,"If this has not been done, one must ",(0,a.kt)("a",{parentName:"p",href:"/mymove-docs/docs/backend/setup/database-migrations"},"create a migration")," to make these changes."),(0,a.kt)("h2",{id:"querying-for-non-deleted-records"},"Querying for non-deleted records"),(0,a.kt)("p",null,"Records that have been soft deleted will still exist in the database, so we must filter them out in our database queries if we want to omit deleted data."),(0,a.kt)("p",null,"The Pop ORM has a chain-able method called ",(0,a.kt)("a",{parentName:"p",href:"https://gobuffalo.io/documentation/database/scoping/"},"Scope")," that we can use to append the where clause(s) to only include non-deleted records."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func FindShipment(ctx context.Context, shipmentID uuid.UUID) {\n    var shipments models.MTOShipments\n    ctx.DB().Scope(utilities.ExcludeDeletedScope()).All(&shipments)\n}\n")),(0,a.kt)("p",null,"Sometimes you will need to qualify the deleted_at column with the model(s) that you care about to avoid an ambiguous column SQL error. You can achieve this by passing in the models themselves to the ExcludeDeletedScope method. ExcludeDeletedScope will look up the proper table name of the model, using either reflection or the TableName() override specified in the model file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func FindDocumentsWithUploads(ctx context.Context, uploaderID uuid.UUID) {\n    var documents models.Documents\n    ctx.DB().Scope(utilities.ExcludeDeletedScope(models.Document{}, models.UserUpload{})).\n        Join("user_uploads", "user_uploads.document_id = documents.id").\n        All(&documents)\n}\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Unfortunately this will not filter any eager loaded associations, you will still need to iterate through the results and filter them out or append them separately."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// This will not filter the eagerly loaded MTOShipments\nfunc FindMoveWithShipments(ctx context.Context, moveID uuid.UUID) {\n    var move models.Move\n    ctx.DB().Scope(utilities.ExcludeDeletedScope(models.MTOShipment{})).Eager(MTOShipments).Find(&move, moveID)\n}\n")),(0,a.kt)("p",{parentName:"admonition"},"You should fall back to using a normal where clause if using an alias in your query or writing a RawQuery."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// If a table is given an alias name then the scope may fail to work as intended\nfunc FindAllServiceMembersWithDocuments(ctx context.Context) {\n    var serviceMembers []models.ServiceMember\n    ctx.DB().Scope(utilities.ExcludeDeletedScope(models.Document{}, models.UserUpload{}).\n        Join("documents docs", "documents.service_member_id = service_members.id").\n        Join("user_uploads uu", "uu.document_id = docs.id").\n        All(&serviceMembers);\n}\n'))),(0,a.kt)("p",null,"For further details you can find the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/0002defdbdeebf29c3afdaa1fd939dc457071a3d/pkg/db/utilities/utilities.go#L150"},"ExcludeDeletedScope")," code in the pkg/db/utilities/utilities.go file."),(0,a.kt)("h2",{id:"using-soft-delete"},"Using Soft Delete"),(0,a.kt)("p",null,"In order to use MilMove's soft delete method, one must import the following package"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package models\n\nimport (\n    "github.com/transcom/mymove/pkg/db/utilities"\n)\n')),(0,a.kt)("p",null,"It is recommended that any use of soft delete be wrapped in a transaction. This is to rollback the deletion should any error arise."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func DeleteExampleModel(db *pop.Connection, exampleModel *ExampleModel) error {\n    return db.Transaction(func(db *pop.Connection) error {\n        return utilities.SoftDestroy(db, exampleModel)\n    })\n}\n")))}m.isMDXComponent=!0}}]);