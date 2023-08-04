"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[9031],{16239:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var t=r(87462),o=(r(67294),r(3905));r(8209);const i={sidebar_position:2},a="How to handle errors",s={unversionedId:"backend/guides/how-to/handle-errors",id:"backend/guides/how-to/handle-errors",title:"How to handle errors",description:"What we want",source:"@site/docs/backend/guides/how-to/handle-errors.md",sourceDirName:"backend/guides/how-to",slug:"/backend/guides/how-to/handle-errors",permalink:"/mymove-docs/docs/backend/guides/how-to/handle-errors",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/backend/guides/how-to/handle-errors.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"backendSidebar",previous:{title:"How to add an event trigger",permalink:"/mymove-docs/docs/backend/guides/how-to/add-an-event-trigger"},next:{title:"How to manage dependencies with go mod",permalink:"/mymove-docs/docs/backend/guides/how-to/manage-dependencies-with-go-mod"}},l={},d=[{value:"What we want",id:"what-we-want",level:2},{value:"How we&#39;re currently doing it",id:"how-were-currently-doing-it",level:2},{value:"Defining error models in Swagger",id:"defining-error-models-in-swagger",level:2},{value:"RFC #7807: Problem details for HTTP APIs",id:"rfc-7807-problem-details-for-http-apis",level:3},{value:"422 vs. 400",id:"422-vs-400",level:3},{value:"Error Titles",id:"error-titles",level:3},{value:"Example setups",id:"example-setups",level:2},{value:"Validation errors",id:"validation-errors",level:3},{value:"Move is not in a state to be approved",id:"move-is-not-in-a-state-to-be-approved",level:3}],p={toc:d},c="wrapper";function m(e){let{components:n,...r}=e;return(0,o.kt)(c,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-handle-errors"},"How to handle errors"),(0,o.kt)("h2",{id:"what-we-want"},"What we want"),(0,o.kt)("p",null,"When users of Milmove make a mistake, we need a way to guide them back to the\nhappy path. This means returning not only coherent response codes for our\nfront-end to consume, but more helpful detail around what went wrong. This will\nbecome increasingly important as we need to support users that will be using\nMilmove programmatically as opposed to using our own front-end."),(0,o.kt)("h2",{id:"how-were-currently-doing-it"},"How we're currently doing it"),(0,o.kt)("p",null,"We currently have two ways of generating error responses in our APIs:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Using the generated Swagger response methods that conform to our API contract\nas defined in our Swagger yaml file."),(0,o.kt)("li",{parentName:"ol"},"Using ",(0,o.kt)("inlineCode",{parentName:"li"},"handlers.ResponseForError")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"handlers.ResponseForVErrors"),", convenience functions\nwhich allow us to pass in any errors that are returned to us from model or\nservice code. They take on the responsibility of deciding which error code to\nreturn based on the error values we pass in.")),(0,o.kt)("p",null,"The approach in #2 is ergonomic, but makes it easy for our error handling to\ndrift from the API spec since the convenience functions write their own response\nheaders."),(0,o.kt)("h2",{id:"defining-error-models-in-swagger"},"Defining error models in Swagger"),(0,o.kt)("p",null,"We typically define error responses in our Swagger definition like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"400:\n  description: invalid request\n401:\n  description: request requires user authentication\n404:\n  description: office not found\n500:\n  description: server error\n")),(0,o.kt)("p",null,"This will tell ",(0,o.kt)("inlineCode",{parentName:"p"},"go-swagger")," to generate error response methods for each\nrespective status code, but we can take it further in order to reach our goal of\ngiving more robust, detailed responses to API consumers."),(0,o.kt)("p",null,"Both Swagger ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md"},"2.0")," and ",(0,o.kt)("a",{parentName:"p",href:"https://swagger.io/specification/#responseObject"},"3.0")," allow us to define error models like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"definitions:\n  ClientError:\n    type: object\n    properties:\n      title:\n        type: string\n      detail:\n        type: string\n      instance:\n        type: string\n        format: uuid\n    required:\n      - title\n      - detail\n      - instance\n  ValidationError:\n    allOf:\n      - $ref: '#/definitions/ClientError'\n      - type: object\n    properties:\n      invalid_fields:\n        type: object\n        additionalProperties:\n          type: string\n    required:\n      - invalid_fields\n")),(0,o.kt)("p",null,"With this approach, we can use generated code to add any data we'd like to an\nerror response."),(0,o.kt)("h3",{id:"rfc-7807-problem-details-for-http-apis"},(0,o.kt)("a",{parentName:"h3",href:"https://tools.ietf.org/html/rfc7807"},"RFC #7807"),": Problem details for HTTP APIs"),(0,o.kt)("p",null,"This RFC proposes some interesting ways of standardizing a way of providing\nbetter descriptions for API errors. We will use the concepts of an error\n",(0,o.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"detail"),", and extension fields in the rest of this document."),(0,o.kt)("h3",{id:"422-vs-400"},"422 vs. 400"),(0,o.kt)("p",null,"We currently return a ",(0,o.kt)("inlineCode",{parentName:"p"},"400 Bad Request")," for validation errors. ",(0,o.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc4918#section-11.2"},"It is recommended")," that we use ",(0,o.kt)("inlineCode",{parentName:"p"},"422 Unprocessable Entitity")," instead."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": If we choose to specify a format validation in our yaml documentation,\nSwagger will return its own ",(0,o.kt)("inlineCode",{parentName:"p"},"422"),"'s with a different format than the errors we\nreturn with ",(0,o.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"detail"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"instance")," fields. In these cases, we need to\nmake sure the client can handle both cases."),(0,o.kt)("h3",{id:"error-titles"},"Error Titles"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," property for the ",(0,o.kt)("inlineCode",{parentName:"p"},"ClientError")," should be a constant string that is used for all errors of that type. All custom messaging should be in the ",(0,o.kt)("inlineCode",{parentName:"p"},"detail")," property, or within the messages for the fields in ",(0,o.kt)("inlineCode",{parentName:"p"},"invalidFields"),". This helps increase consistency with our error messaging and ensures that the client always knows where to look for the pertinent information about the error."),(0,o.kt)("h2",{id:"example-setups"},"Example setups"),(0,o.kt)("h3",{id:"validation-errors"},"Validation errors"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\npost:\n  summary: create an office user\n  description: creates and returns an office user record\n  operationId: createOfficeUser\n  tags:\n    - office\n  parameters:\n    - in: body\n      name: officeUser\n      description: Office user information\n      schema:\n        $ref: '#/definitions/OfficeUserCreatePayload'\n  responses:\n    201:\n      description: Successfully created Office User\n      schema:\n        $ref: '#/definitions/OfficeUser'\n    422:\n      description: validation error\n      schema:\n        $ref: '#/definitions/ValidationError' #=> the interesting part\n    500:\n      description: internal server error\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func (h CreateOfficeUserHandler) Handle(params officeuserop.CreateOfficeUserParams) middleware.Responder {\n  // ...\n\n  createdOfficeUser, verrs, err := h.OfficeUserCreator.CreateOfficeUser(&officeUser, transportationIDFilter)\n  if verrs != nil {\n    payload := &adminmessages.ValidationError{\n      InvalidFields: handlers.NewValidationErrorsResponse(verrs).Errors,\n    }\n\n    payload.Title = handlers.FmtString(handlers.ValidationErrMessage)\n    payload.Detail = handlers.FmtString("The information you provided is invalid.")\n    payload.Instance = handlers.FmtUUID(h.GetTraceID())\n\n    return officeuserop.NewCreateOfficeUserUnprocessableEntity().WithPayload(payload)\n  }\n\n  if err != nil {\n    return officeuserop.NewCreateOfficeUserInternalServerError()\n  }\n\n  returnPayload := payloadForOfficeUserModel(*createdOfficeUser)\n  return officeuserop.NewCreateOfficeUserCreated().WithPayload(returnPayload)\n}\n')),(0,o.kt)("h3",{id:"move-is-not-in-a-state-to-be-approved"},"Move is not in a state to be approved"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"/moves/{moveId}/submit:\n  post:\n    summary: Submits a move for approval\n    description: Submits a move for approval by the office. The status of the move will be updated to SUBMITTED\n    operationId: submitMoveForApproval\n    tags:\n      - moves\n    parameters:\n      - name: moveId\n        in: path\n        type: string\n        format: uuid\n        required: true\n        description: UUID of the move\n      - name: submitMoveForApprovalPayload\n        in: body\n        required: true\n        schema:\n          $ref: '#/definitions/SubmitMoveForApprovalPayload'\n    responses:\n      200:\n        description: returns updated (submitted) move object\n        schema:\n          $ref: '#/definitions/MovePayload'\n      400:\n        description: invalid request\n      401:\n        description: must be authenticated to use this endpoint\n      403:\n        description: not authorized to approve this move\n      409:\n        description: the move is not in a state to be approved\n        schema:\n          $ref: '#/definitions/ClientError' #=> the interesting part\n      500:\n        description: server error\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func (h SubmitMoveHandler) Handle(params moveop.SubmitMoveForApprovalParams) middleware.Responder {\n  // ...\n\n  submitDate := time.Time(*params.SubmitMoveForApprovalPayload.PpmSubmitDate)\n  err = move.Submit(submitDate)\n  if err != nil {\n    payload := &internalmessages.ClientError{\n      Title:  handlers.FmtString(handlers.ConflictErrMessage),\n      Detail: handlers.FmtString("This move is not in a state to be approved - make sure the move is in state x before attempting to approve."),\n      Instance: handlers.FmtUUID(h.GetTraceID()),\n    }\n\n    return moveop.NewSubmitMoveForApprovalConflict().WithPayload(payload)\n  }\n\n  // ...\n}\n')))}m.isMDXComponent=!0}}]);