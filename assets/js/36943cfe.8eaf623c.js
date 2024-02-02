"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[1136],{26636:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var t=n(45072),i=(n(11504),n(95788));n(10880);const r={sidebar_position:11},s="API Parsers",o={unversionedId:"tools/locust/api-parsers",id:"tools/locust/api-parsers",title:"API Parsers",description:"Internally, the fake data generator is using an APIParser class. It parses an API specification",source:"@site/docs/tools/locust/api-parsers.md",sourceDirName:"tools/locust",slug:"/tools/locust/api-parsers",permalink:"/mymove-docs/docs/tools/locust/api-parsers",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/tools/locust/api-parsers.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"toolsSidebar",previous:{title:"Fake Data Generation",permalink:"/mymove-docs/docs/tools/locust/fake-data-generation"},next:{title:"How To Generate Mocks with Mockery",permalink:"/mymove-docs/docs/tools/mockery/generate-mocks-with-mockery"}},l={},p=[{value:"References",id:"references",level:2}],d={toc:p},m="wrapper";function h(e){let{components:a,...n}=e;return(0,i.yg)(m,(0,t.c)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"api-parsers"},"API Parsers"),(0,i.yg)("p",null,"Internally, the fake data generator is using an ",(0,i.yg)("inlineCode",{parentName:"p"},"APIParser")," class. It parses an API specification\n(",(0,i.yg)("inlineCode",{parentName:"p"},".yaml"),") file using a path or URL using the ",(0,i.yg)("inlineCode",{parentName:"p"},"prance")," library to create a fully-resolved dictionary\nof its Swagger specification. "),(0,i.yg)("admonition",{title:"YAML Parsing Differences",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"One thing that is important to note is that ",(0,i.yg)("inlineCode",{parentName:"p"},"prance")," is different from the tool we use to lint the ",(0,i.yg)("inlineCode",{parentName:"p"},"yaml")," files in the\n",(0,i.yg)("inlineCode",{parentName:"p"},"mymove")," repo, which is ",(0,i.yg)("inlineCode",{parentName:"p"},"spectral"),". They parse the files a bit differently and so there have been times when one will\nfail think something is valid while the other one breaks. ")),(0,i.yg)("p",null,"The main methods of the ",(0,i.yg)("inlineCode",{parentName:"p"},"APIParser")," class are:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"get_request_body"),": Returns the full Swagger specification of the request body for a given\nendpoint. Requires the ",(0,i.yg)("inlineCode",{parentName:"p"},"path")," and the ",(0,i.yg)("inlineCode",{parentName:"p"},"method")," (",(0,i.yg)("inlineCode",{parentName:"p"},"post"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"get"),", etc.) to be passed in. Returns an\nempty dictionary if no matching request found."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\n"""\nExample of using APIParser.get_request_body\n"""\nfrom utils.parsers import APIParser\n')))),(0,i.yg)("p",null,'  parser = APIParser(\napi_file="',(0,i.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/transcom/mymove/main/swagger/prime.yaml%22"},'https://raw.githubusercontent.com/transcom/mymove/main/swagger/prime.yaml"'),")"),(0,i.yg)("p",null,'  parser.get_request_body(path="/mto-shipments", method="post")'),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'\n* `get_response_body`: Returns the full Swagger specification of the response for a given endpoint.\nRequires the `path` and the `method` (`post`, `get`, etc.). Optionally accepts the `status` code\nfor the response, which defaults to `"200"`. Returns an empty dictionary if no matching response\nis found.\n\n```python\n# -*- coding: utf-8 -*-\n"""\nExample of using APIParser.get_response_body\n"""\nfrom utils.parsers import APIParser\n\nparser = APIParser(\n  api_file="https://raw.githubusercontent.com/transcom/mymove/main/swagger/prime.yaml")\n\nparser.get_response_body(path="/mto-service-items", method="post", status="201")\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"get_definition"),": Returns the full Swagger specification for a specific definition. Requires\nthe ",(0,i.yg)("inlineCode",{parentName:"p"},"name")," of the definition to be passed in. Returns ",(0,i.yg)("inlineCode",{parentName:"p"},"None")," if no matching definition is found."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\n"""\nExample of using APIParser.get_definition\n"""\nfrom utils.parsers import APIParser\n')))),(0,i.yg)("p",null,'  parser = APIParser(\napi_file="',(0,i.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/transcom/mymove/main/swagger/prime.yaml%22"},'https://raw.githubusercontent.com/transcom/mymove/main/swagger/prime.yaml"'),")"),(0,i.yg)("p",null,'  parser.get_definition(name="MoveTaskOrder")'),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'\n* `generate_fake_request`: Takes in the endpoint `path` and `method` and returns a JSONType object\nwith the fields and fake data for the request. Uses the `faker` library to generate the data. Can\noptionally accept a dictionary of `overrides` for any fields that need to have specific values\nset, or a boolean `require_all` that indicates that all fields should be filled, even if not\nrequired.\n\n```python\n# -*- coding: utf-8 -*-\n"""\nExample of using APIParser.generate_fake_request\n"""\nfrom utils.parsers import APIParser\n\n\nparser = APIParser(\n  api_file="https://raw.githubusercontent.com/transcom/mymove/main/swagger/prime.yaml")\n\nparser.generate_fake_request(path="/mto-service-items", method="post",\n                             overrides={"modelType": "MTOServiceItemDDSFIT"})\n')),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"* The fake data generator shown earlier uses this method when you call\n  `fake_data_generator.generate_fake_request_data`.\n")),(0,i.yg)("p",null,"We don't use the ",(0,i.yg)("inlineCode",{parentName:"p"},"APIParser")," class directly though, we define subclasses that use its functionality\nwith the specific needs for each API specification. These live in the ",(0,i.yg)("inlineCode",{parentName:"p"},"utils/parsers.py")," file. We\nhave these defined:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"PrimeAPIParser")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SupportAPIParser")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"GHCAPIParser")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"InternalAPIParser"))),(0,i.yg)("p",null,"Each one defines what API specification the parser should look at, and can optionally use the hooks\nthat are built-in to the ",(0,i.yg)("inlineCode",{parentName:"p"},"APIParser")," class to define custom behavior. Here is a sample parser:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\n"""\nSample API parser\n"""\nfrom utils.parsers import APIParser\n\n\nclass GHCAPIParser(APIParser):\n    """\n    Sample Parser class for the GHC API.\n    """\n    \n    api_file = "https://raw.githubusercontent.com/transcom/mymove/main/swagger/ghc.yaml"\n    \n    def _custom_field_validation(self, api_field, object_def):\n        """\n        This hook is for changes you want to make to a specific field, regardless of which endpoint it is used in.\n        These are PRE-DATA changes and will be used to generate the data you want for this field whenever you call the\n        generate_fake_data method.\n        """\n        # Example:\n        if api_field.name == "agents":\n            try:\n                api_field.max_items == 2  # let\'s say we never want more than two agents, regardless of what the YAML says\n            except AttributeError:\n                pass  # this wasn\'t the field type we were expecting -- should log as well\n\n    def _custom_body_validation(self, body):\n        """\n        This hook is for changes you want to make to a specific APIEndpointBody class (defined in utils/fields.py).\n        These are PRE-DATA changes and will be used to generate the data you want for this endpoint whenever you call\n        the generate_fake_data method.\n        """\n        # Example:\n        if body.path.endswith("status") and body.method == "patch":\n            if body.body_field.object_fields:  # make sure we have the right BaseAPIField type\n                status_field = body.body_field.get_field("status")\n                \n                if status_field and status_field.options:  # check that we have the field and it is an EnumField\n                    try:\n                        # status will already be SUBMITTED and can\'t be changed back, so let\'s just remove that option:\n                        status_field.options.remove("SUBMITTED")\n                    except ValueError:\n                        pass  # it\'s not in the list, so we\'re good\n\n    def _custom_request_validation(self, path, method, request_data):\n        """\n        This hook is for changes you want to make to the data for a specific endpoint AFTER generation. This code\n        manipulates actual data and may not apply to every request.\n        """\n        # Example:\n        if path == "/move-task-orders/{moveTaskOrderID}" and method == "patch":\n            if request_data.get("isCanceled"):  # check if this value was set and if it\'s True\n                request_data["availableToPrimeAt"] = None\n')),(0,i.yg)("p",null,"We have all the parsers we need for now defined, but if you have a need to add a new one follow\nthese steps (all in the ",(0,i.yg)("inlineCode",{parentName:"p"},"utils/parsers.py")," file):"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Add your new parser, subclassing ",(0,i.yg)("inlineCode",{parentName:"li"},"APIParser")," and defining whatever things you need."),(0,i.yg)("li",{parentName:"ol"},"Add a key/value pair to the ",(0,i.yg)("inlineCode",{parentName:"li"},"APIKey")," enum."),(0,i.yg)("li",{parentName:"ol"},"Go to ",(0,i.yg)("inlineCode",{parentName:"li"},"get_api_parsers")," and add your new parser to the ",(0,i.yg)("inlineCode",{parentName:"li"},"parser_classes")," dict, giving it the key\nyou defined in ",(0,i.yg)("inlineCode",{parentName:"li"},"APIKey")," and the value of your new parser class (un-initialized)."),(0,i.yg)("li",{parentName:"ol"},"Now you should be able to use your new parser with the fake data generator! You'll use your new\n",(0,i.yg)("inlineCode",{parentName:"li"},"APIKey.<key>")," when using the fake data generator.")),(0,i.yg)("h2",{id:"references"},"References"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://pypi.org/project/prance/"},"Prance Documentation"))))}h.isMDXComponent=!0}}]);