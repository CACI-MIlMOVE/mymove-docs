"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[8334],{29932:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=i(87462),n=(i(67294),i(3905));i(8209);const o={title:"0042 Use If-Match / E-tags for optimistic locking",description:"Decision outcome: Use E-tags for optimistic locking\n"},r="Use If-Match / E-tags for optimistic locking",s={unversionedId:"adrs/optimistic-locking",id:"adrs/optimistic-locking",title:"0042 Use If-Match / E-tags for optimistic locking",description:"Decision outcome: Use E-tags for optimistic locking\n",source:"@site/docs/adrs/0042-optimistic-locking.md",sourceDirName:"adrs",slug:"/adrs/optimistic-locking",permalink:"/mymove-docs/docs/adrs/optimistic-locking",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/adrs/0042-optimistic-locking.md",tags:[],version:"current",sidebarPosition:42,frontMatter:{title:"0042 Use If-Match / E-tags for optimistic locking",description:"Decision outcome: Use E-tags for optimistic locking\n"},sidebar:"adrsSidebar",previous:{title:"0041 Front End Form Library",permalink:"/mymove-docs/docs/adrs/front-end-form-library"},next:{title:"0043 Handling time in the Prime API",permalink:"/mymove-docs/docs/adrs/prime-time"}},l={},d=[{value:"Desired Outcomes",id:"desired-outcomes",level:2},{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Chosen Alternative: Use E-tags for optimistic locking",id:"chosen-alternative-use-e-tags-for-optimistic-locking",level:3},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"Use Last-Modified / If-Unmodified-Since for optimistic locking",id:"use-last-modified--if-unmodified-since-for-optimistic-locking",level:3},{value:"Use E-tags for optimistic locking",id:"use-e-tags-for-optimistic-locking",level:3},{value:"do nothing or last request wins",id:"do-nothing-or-last-request-wins",level:3},{value:"References",id:"references",level:2}],c={toc:d},m="wrapper";function h(e){let{components:t,...i}=e;return(0,n.kt)(m,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-if-match--e-tags-for-optimistic-locking"},"Use If-Match / E-tags for optimistic locking"),(0,n.kt)("p",null,"The system needs to be robust in the face of conflicting attempts to update/access the same data."),(0,n.kt)("h2",{id:"desired-outcomes"},"Desired Outcomes"),(0,n.kt)("p",null,"The data in the system is always coherent and current, even or especially when two users attempt to modify the same entity, e.g. a TOO and an agent for the Prime access the same Service Item."),(0,n.kt)("p",null,"Any user who is attempting to update stale data, i.e. a record that has already been updated by another user, is given and meaningful message telling them what has happened and a clear way to recover from the situation, e.g. the current data is reloaded and they are able to continue with their intended changes."),(0,n.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use Last-Modified / If-Unmodified-Since for optimistic locking"),(0,n.kt)("li",{parentName:"ul"},"Use E-tags for optimistic locking"),(0,n.kt)("li",{parentName:"ul"},"do nothing or last request wins")),(0,n.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,n.kt)("h3",{id:"chosen-alternative-use-e-tags-for-optimistic-locking"},"Chosen Alternative: Use E-tags for optimistic locking"),(0,n.kt)("p",null,"Using E-tags provides us with a simple way to prevent users from updating stale data while avoiding the risk of different programming languages parsing timestamps differently. For example, Ruby's default ",(0,n.kt)("inlineCode",{parentName:"p"},"DateTime.parse")," method doesn't includes microseconds by default. Go's ",(0,n.kt)("inlineCode",{parentName:"p"},"time.Time()")," conversion function does. To avoid this, we're doing the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Each record has an ",(0,n.kt)("inlineCode",{parentName:"li"},"updated_at")," timestamp, which is effectively a version number."),(0,n.kt)("li",{parentName:"ul"},"Before sending a record's payload to the client, we base64 encode that timestamp so that the client doesn't know they're dealing with a timestamp - they only have to worry about storing a string."),(0,n.kt)("li",{parentName:"ul"},"The client sends a ",(0,n.kt)("inlineCode",{parentName:"li"},"PUT")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"PATCH")," along with the record's base64 encoded E-tag in the ",(0,n.kt)("inlineCode",{parentName:"li"},"If-Match")," header of the request."),(0,n.kt)("li",{parentName:"ul"},"We query for the given record's ",(0,n.kt)("inlineCode",{parentName:"li"},"updated_at")," value in the database, base64 encode it and compare it against the ",(0,n.kt)("inlineCode",{parentName:"li"},"If-Match")," header."),(0,n.kt)("li",{parentName:"ul"},"If they don't match, we return a ",(0,n.kt)("inlineCode",{parentName:"li"},"412 Precondition Failed"),", indicating to the client that they need to re-fetch the record that they're attempting to update."),(0,n.kt)("li",{parentName:"ul"},"If they do match, we update the record and return the updated payload ",(0,n.kt)("strong",{parentName:"li"},"including the new E-tag as a part of the payload body"))),(0,n.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,n.kt)("h3",{id:"use-last-modified--if-unmodified-since-for-optimistic-locking"},"Use Last-Modified / If-Unmodified-Since for optimistic locking"),(0,n.kt)("p",null,"Every response (for single resources) contains a ",(0,n.kt)("inlineCode",{parentName:"p"},"Last-Modified header")," with a HTTP date. (If aggregate results are sent, the last modified is an attribute included with each item.) When requesting an update using a PUT or PATCH request, the client has to provide the Last-Modified value of the resource via the header If-Unmodified-Since. The server rejects the request (via HTTP/1.1 412 Precondition failed), if the last modified date of the entity is after the given date in the header."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," This follows standard/best conventions for REST APIs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," This guarantees that data is coherent and current."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," We already store the last modified timestamp."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," This will require more work on the client to handle rejection. In particular we will need to make sure the prime understands how this works."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Updates will require a read to confirm that the client was working with the most recent copy."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Different programming languages have different default behavior when dealing with timestamps. This presents a risk since we don't know what language the Prime will build their API client in. This puts even more responsibility on clients of the API to tread carefully.")),(0,n.kt)("h3",{id:"use-e-tags-for-optimistic-locking"},"Use E-tags for optimistic locking"),(0,n.kt)("p",null,"We implement optimistic locking using the ",(0,n.kt)("inlineCode",{parentName:"p"},"If-Match")," header. If the ETag header does not match the value of the resource on the server, the server rejects the change with a 412 Precondition Failed error. The client is therefore notified of the error, and can try the request again after updating their local copy of the resource."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," This takes advantage of ETag HTTP header and follows standard/best conventions for REST APIs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," This guarantees that data is coherent and current."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Identifiers are opaque, allowing us to avoid the issue of different date parsing rules in other programming environments."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," This will require more work on the client to handle rejection. In particular we will need to make sure the prime understands how this works."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Updates will require a read to confirm that the client was working with the most recent copy.")),(0,n.kt)("h3",{id:"do-nothing-or-last-request-wins"},"do nothing or last request wins"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Locking may not be needed if most resources are immutable, or if changes made by different parties are on different attributes"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Since we will have a complete change record, we will be able to detect cases where one user has overridden the changes of another user"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," since the contractor will be developing an independent system there is a greater, uncontrollable risk that they will work with stale data")),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sookocheff.com/post/api/optimistic-locking-in-a-rest-api/"},"Optimistic Locking in a REST API")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://opensource.zalando.com/restful-api-guidelines/index.html#optimistic-locking"},"RESTful API and Event Scheme Guidelines"))))}h.isMDXComponent=!0}}]);