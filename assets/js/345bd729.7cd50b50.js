"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[5499],{26090:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=a(87462),n=(a(67294),a(3905));a(8209);const o={title:"0015 Session storage/handling"},i="Session storage/handling",r={unversionedId:"adrs/session-storage",id:"adrs/session-storage",title:"0015 Session storage/handling",description:"User Story: 155140012",source:"@site/docs/adrs/0015-session-storage.md",sourceDirName:"adrs",slug:"/adrs/session-storage",permalink:"/mymove-docs/docs/adrs/session-storage",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/adrs/0015-session-storage.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"0015 Session storage/handling"},sidebar:"adrsSidebar",previous:{title:"0014 Go Dependency Management",permalink:"/mymove-docs/docs/adrs/go-dependency-management"},next:{title:"0016 Browser Support for Prototype",permalink:"/mymove-docs/docs/adrs/Browser-Support"}},l={},d=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives  optional ",id:"pros-and-cons-of-the-alternatives--optional-",level:2},{value:"Encode our session data in a JSON web token that&#39;s stored on the client",id:"encode-our-session-data-in-a-json-web-token-thats-stored-on-the-client",level:3},{value:"Encode session data in a secure cookie using gorilla/sessions",id:"encode-session-data-in-a-secure-cookie-using-gorillasessions",level:3},{value:"Store session data server-side in Redis or an equivalent cache store",id:"store-session-data-server-side-in-redis-or-an-equivalent-cache-store",level:3}],c={toc:d},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,s.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"session-storagehandling"},"Session storage/handling"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"User Story:")," ",(0,n.kt)("a",{parentName:"p",href:"https://www.pivotaltracker.com/story/show/155140012"},"155140012")),(0,n.kt)("p",null,"We want our users to be able to log in to our site and have that authentication backed by ",(0,n.kt)("a",{parentName:"p",href:"http://www.login.gov"},"http://www.login.gov"),". We also want that authentication to spawn a session that persists until the user logs out or until a designated amount of time elapses."),(0,n.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Encode our session data in a JSON web token that's stored on the client"),(0,n.kt)("li",{parentName:"ul"},"Encode session data in a secure cookie using gorilla/sessions"),(0,n.kt)("li",{parentName:"ul"},"Store session data server-side in Redis or an equivalent cache store")),(0,n.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Chosen Alternative: ",(0,n.kt)("strong",{parentName:"p"},"Encode our session data in a JSON web token that's stored on the client"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Ultimately the real choice comes down to whether we want to store session information in a stateful or a stateless manner. A conventional stateful store backed by Redis or Memcached creates both a natural performance bottleneck and a single point of failure for session management. Alternatively, in a stateless system the server is only responsible for creating, reading, and verifying information that is securely stored on the client as a cookie. This makes stateless session storage, through JSON web tokens or some other means, an obvious choice.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Storing sessions in encrypted cookies adds a bit of computational latency for encrypting and decrypting tokens, but this is easily outweighed by its advantages in contributing to a reliable, scalable architecture.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"We looked at a couple Go libraries that would allow us to easily implement client-side session storage: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dgrijalva/jwt-go"},"jwt-go")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gorilla/sessions"},"gorilla/sessions")," cookie stores. Gorilla adds some convenience around setting/retrieving client-side tokens, but the requisite data storage implementation (one-time-read flash messages) felt clumsy and wasn't necessary for our uses. jwt-go leaves us to set/retrieve cookies on our own, but the JWT claims data structure and expiration handling, including combined parsing and claims validation, doesn't leave many loopholes for accidentally dealing with an expired session. Since cookie handling is relatively simple through the ",(0,n.kt)("inlineCode",{parentName:"p"},"http")," library, we opted for the jwt-go library."))),(0,n.kt)("h2",{id:"pros-and-cons-of-the-alternatives--optional-"},"Pros and Cons of the Alternatives "),(0,n.kt)("h3",{id:"encode-our-session-data-in-a-json-web-token-thats-stored-on-the-client"},"Encode our session data in a JSON web token that's stored on the client"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Stateless session management"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Provides structure for token expiration"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Data is self contained in token"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Vulnerable to replay attacks")),(0,n.kt)("h3",{id:"encode-session-data-in-a-secure-cookie-using-gorillasessions"},"Encode session data in a secure cookie using gorilla/sessions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Stateless session management"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Handles cookie setting/retrieval for us"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Flash data storage is awkward")),(0,n.kt)("h3",{id:"store-session-data-server-side-in-redis-or-an-equivalent-cache-store"},"Store session data server-side in Redis or an equivalent cache store"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Maintain control over session state"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Less data being transmitted to/from client"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Single point of failure"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Requires maintenance to avoid ballooning"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Not terribly scalable")))}m.isMDXComponent=!0}}]);