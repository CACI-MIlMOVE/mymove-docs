"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[944],{31184:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=t(45072),i=(t(11504),t(95788));t(10880);const r={sidebar_position:8},o="Using factories to generate data for front-end tests",s={unversionedId:"frontend/testing/using-factories-to-generate-data-for-frontend-tests",id:"frontend/testing/using-factories-to-generate-data-for-frontend-tests",title:"Using factories to generate data for front-end tests",description:"Writing a new factory",source:"@site/docs/frontend/testing/using-factories-to-generate-data-for-frontend-tests.md",sourceDirName:"frontend/testing",slug:"/frontend/testing/using-factories-to-generate-data-for-frontend-tests",permalink:"/mymove-docs/docs/frontend/testing/using-factories-to-generate-data-for-frontend-tests",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/frontend/testing/using-factories-to-generate-data-for-frontend-tests.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"frontendSidebar",previous:{title:"Writing Tests using React Testing Library and Jest",permalink:"/mymove-docs/docs/frontend/testing/writing-tests-using-react-testing-library-and-jest"},next:{title:"Writing Playwright Tests for MilMove",permalink:"/mymove-docs/docs/frontend/testing/writing-playwright-tests-for-milmove"}},l={},d=[{value:"Writing a new factory",id:"writing-a-new-factory",level:2},{value:"Build and post-build",id:"build-and-post-build",level:3},{value:"Fields",id:"fields",level:3},{value:"Literals",id:"literals",level:4},{value:"Functions",id:"functions",level:4},{value:"Objects",id:"objects",level:4},{value:"Subfactories",id:"subfactories",level:3},{value:"Traits",id:"traits",level:3},{value:"PostBuild",id:"postbuild",level:3},{value:"To fake() or not to fake()",id:"to-fake-or-not-to-fake",level:3},{value:"Basic generators and Helpers",id:"basic-generators-and-helpers",level:3},{value:"Importing configuration from swagger yaml files",id:"importing-configuration-from-swagger-yaml-files",level:3},{value:"Using a factory for mocking test data",id:"using-a-factory-for-mocking-test-data",level:2},{value:"Overrides",id:"overrides",level:3},{value:"Traits",id:"traits-1",level:3},{value:"Lazy overrides",id:"lazy-overrides",level:3},{value:"Field customization precedence",id:"field-customization-precedence",level:3},{value:"Naming mock data",id:"naming-mock-data",level:3},{value:"Use with Storybook and Happo",id:"use-with-storybook-and-happo",level:2}],u={toc:d},p="wrapper";function c(e){let{components:a,...t}=e;return(0,i.yg)(p,(0,n.c)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"using-factories-to-generate-data-for-front-end-tests"},"Using factories to generate data for front-end tests"),(0,i.yg)("h2",{id:"writing-a-new-factory"},"Writing a new factory"),(0,i.yg)("p",null,"Create and export a const called ",(0,i.yg)("inlineCode",{parentName:"p"},"{OBJECT_}FIELDS"),". This constant should be an object whose keys are CAPITAL_SNAKE_CASE and whose values are the actual, camelCase names of the fields, e.g. ",(0,i.yg)("inlineCode",{parentName:"p"},"MY_FIELD: myField"),". This makes using the factory easy, since the keys in question will be available to the user's IDE."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"  const MY_OBJECT_FIELDS = {\n    ID: 'id',\n    MY_FIELD: 'myField',\n  }\n")),(0,i.yg)("p",null,"Create a const called ",(0,i.yg)("inlineCode",{parentName:"p"},"{object}Factory"),", giving it a camelCase name. This const is a function that"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"takes params"),(0,i.yg)("li",{parentName:"ul"},"returns a ",(0,i.yg)("inlineCode",{parentName:"li"},"baseFactory"),", into which is passed an object containing",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"fields"),": the fields your factory returns"),(0,i.yg)("li",{parentName:"ul"},"any other configuration passable to the ",(0,i.yg)("inlineCode",{parentName:"li"},"build()")," functions ",(0,i.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/@jackfranklin/test-data-bot"},"here"),", such as ",(0,i.yg)("inlineCode",{parentName:"li"},"postBuild")," or ",(0,i.yg)("inlineCode",{parentName:"li"},"traits"),"."),(0,i.yg)("li",{parentName:"ul"},"the spread params: ",(0,i.yg)("inlineCode",{parentName:"li"},"...params"),".")))),(0,i.yg)("p",null,"Export your factory by default."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"  const myObjectFactory = (params) => {\n    return baseFactory({\n      [BASE_FIELDS.FIELDS]: {\n        [MY_OBJECT_FIELDS.ID]: '...',\n        [MY_OBJECT_FIELDS.MY_FIELD]: '...',\n      },\n      // optional postBuild and traits...,\n      ...params\n    })\n  }\n")),(0,i.yg)("h3",{id:"build-and-post-build"},"Build and post-build"),(0,i.yg)("p",null,"Factories generate data in two phases, the build and the post-build. Most values can be generated in the build phase. Use postBuild when the value of one field should be based on the value of another generated value."),(0,i.yg)("h3",{id:"fields"},"Fields"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"fields")," object defines the structure and values of the object your factory will return. This happens at build time. Values of this object can be literals, functions, or another object containing either."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"  [BASE_FIELDS.FIELDS]: {\n    [OBJECT_FIELDS.FIELD_1]: 'value',\n    [OBJECT_FIELDS.FIELD_2]: myCoolFunction,\n    [OBJECT_FIELDS.FIELD_3]: {\n      [SUBOBJECT_FIELDS.FIELD_1]: 'value',\n    }\n  }\n")),(0,i.yg)("h4",{id:"literals"},"Literals"),(0,i.yg)("p",null,"If your field's value is a literal, the factory will always return that value. For example:"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"[OBJECT_FIELDS.FIELD_1]: 'value'")),(0,i.yg)("p",null,"will always set the value of ",(0,i.yg)("inlineCode",{parentName:"p"},"[OBJECT_FIELDS.FIELD_1]")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"'my value'")," by default."),(0,i.yg)("h4",{id:"functions"},"Functions"),(0,i.yg)("p",null,"Functions will be evaluated and the field set to their value. This is handy when a hardcoded value shouldn't be set, which is usually the case. You might generate an ID with a function, for example."),(0,i.yg)("p",null,"Note: pass in the name of a function or an anonymous function. The builder will handle executing the function for you."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"[OBJECT_FIELDS.FIELD_2]: myCoolFunction,")),(0,i.yg)("p",null,"or"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"[OBJECT_FIELDS.FIELD_2]: () => 'my cool return value',")),(0,i.yg)("h4",{id:"objects"},"Objects"),(0,i.yg)("p",null,"Fields can be set to objects and their values will be set recursively."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"  [OBJECT_FIELDS.FIELD_3]: {\n    [SUBOBJECT_FIELDS.FIELD_1]: 'value',\n  }\n")),(0,i.yg)("h3",{id:"subfactories"},"Subfactories"),(0,i.yg)("p",null,"If your object has fields that themselves can be generated by a factory, you can pass in a factory function as the value of that field:"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"[OBJECT_FIELDS.SUBOBJECT_FIELD]: (args) => subobjectFactory(args)")),(0,i.yg)("p",null,"Be sure not to call the function, or its override features will not work."),(0,i.yg)("p",null,"Note that traits are not currently supported for subfactories."),(0,i.yg)("h3",{id:"traits"},"Traits"),(0,i.yg)("p",null,"Traits are a way to set a number of fields at a time easily. The values of a trait's overrides will override any that the factory generates by default."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"[BASE_FIELDS.TRAITS]: {\n    [OBJECT_TRAITS.MY_TRAIT]: {\n      [BASE_FIELDS.OVERRIDES]: {\n        [OBJECT_FIELDS.FIRST_FIELD_TO_OVERRIDE]: 'overrideValue',\n        [OBJECT_FIELDS.SECOND_FIELD_TO_OVERRIDE]: 'overrideValue',\n      }\n    }\n}\n")),(0,i.yg)("p",null,"Note that the structure of these traits is the same as the object passed into a factory when it is actually called (see below)."),(0,i.yg)("p",null,"Traits are used by setting the ",(0,i.yg)("inlineCode",{parentName:"p"},"useTraits")," key to an array of traits when the factory is called, which are executed in order (see below)."),(0,i.yg)("h3",{id:"postbuild"},"PostBuild"),(0,i.yg)("p",null,"The postBuild function can be used to set values on the object based on other generated values."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"[BASE_FIELDS.FIELDS]: {\n  [OBJECT_FIELDS.STATE]: getRandomState,\n},\n[BASE_FIELDS.POST_BUILD]: (object) => {\n  object[OBJECT_FIELDS.POSTAL_CODE] = getPostalCodeFromState(object[OBJECT_FIELDS.STATE]);\n}\n")),(0,i.yg)("h3",{id:"to-fake-or-not-to-fake"},"To fake() or not to fake()"),(0,i.yg)("p",null,"When declaring fields, the function that returns their values will usually be wrapped in ",(0,i.yg)("inlineCode",{parentName:"p"},"fake()"),", which is a wrapper for test-data-bot's ",(0,i.yg)("inlineCode",{parentName:"p"},"perBuild()")," function."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"  [BASE_FIELDS.FIELDS]: {\n    [OBJECT_FIELDS.STATE]: fake(getRandomState)\n  }\n")),(0,i.yg)("p",null,"This ensures that for successive calls to the same generator, unique values are generated."),(0,i.yg)("p",null,"Note that ",(0,i.yg)("inlineCode",{parentName:"p"},"fake()")," can only be used in the build phase. It is out-of-scope post-build. In the post-build phase, just call a function directly."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"  [BASE_FIELDS.POST_BUILD]: (object) => {\n    [OBJECT_FIELDS.POSTAL_CODE]: getPostalCodeFromState(object.state)\n  }\n")),(0,i.yg)("p",null,"Note: passing a factory function to ",(0,i.yg)("inlineCode",{parentName:"p"},"fake()")," is an antipattern. Factories handle their own uniqueness constraints. Set the factory function directly as the property."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"[BASE_FIELDS.FIELDS]: {\n  [OBJECT_FIELDS.ADDRESS]: (addressParams) => addressFactory(addressParams)\n}\n")),(0,i.yg)("h3",{id:"basic-generators-and-helpers"},"Basic generators and Helpers"),(0,i.yg)("p",null,"We use ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/faker-js/faker"},"faker")," to generate basic data."),(0,i.yg)("p",null,"A number of helpers are also available for generating common data types that are not directly available from faker. A simple example is GBLOCs, which simply generators four capital letters:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"// helpers.js\nexport const gblocHelper = (f) => f.random.alpha({ count: 4, casing: 'upper' });\n\n// factory.js\n[BASE_FIELDS.FIELDS]: {\n  [OBJECT_FIELDS.GBLOC]: fake(gblocHelper),\n}\n")),(0,i.yg)("h3",{id:"importing-configuration-from-swagger-yaml-files"},"Importing configuration from swagger yaml files"),(0,i.yg)("p",null,"We use js-yaml to import specs from swagger yaml files. This can be useful for importing a set of available values that have already been defined in swagger."),(0,i.yg)("p",null,"For example, the ",(0,i.yg)("inlineCode",{parentName:"p"},"stateHelper")," imports the set of states defined in the ",(0,i.yg)("inlineCode",{parentName:"p"},"internal.yml"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"const spec = getInternalSpec();\n\nexport const stateHelper = () => oneOf(...spec.definitions.Address.properties.state.enum).call();\n")),(0,i.yg)("h2",{id:"using-a-factory-for-mocking-test-data"},"Using a factory for mocking test data"),(0,i.yg)("p",null,"A factory can be used simply by calling it, which will return its default configuration."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"const object = objectFactory();")),(0,i.yg)("p",null,"A number of options are available to pass when a factory is called."),(0,i.yg)("h3",{id:"overrides"},"Overrides"),(0,i.yg)("p",null,"Overrides explicitly set values on an object at build time. The key is available via ",(0,i.yg)("inlineCode",{parentName:"p"},"BASE_FIELDS"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"{\n  [BASE_FIELDS.OVERRIDES]: {\n    [MY_OBJECT_FIELDS.FIELD]: 'my value to override',\n  }\n}\n")),(0,i.yg)("h3",{id:"traits-1"},"Traits"),(0,i.yg)("p",null,"Use traits by setting the ",(0,i.yg)("inlineCode",{parentName:"p"},"useTraits")," key to an array of traits. Traits are applied in order, overriding any default values, before postBuild is executed."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"{ [BASE_FIELDS.USE_TRAITS]: [MY_OBJECT_TRAITS.TRAIT_1, MY_OBJECT_TRAITS.TRAIT_2] }")),(0,i.yg)("h3",{id:"lazy-overrides"},"Lazy overrides"),(0,i.yg)("p",null,"Lazy overrides explicitly set values on an object at postBuild time, taking precedent over any set at build time."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"{\n  [BASE_FIELDS.LAZY_OVERRIDES]: {\n    [MY_OBJECT_FIELDS.FIELD]: 'my higher priority value',\n  }\n}\n")),(0,i.yg)("h3",{id:"field-customization-precedence"},"Field customization precedence"),(0,i.yg)("p",null,"The order of precedence of field customizations is:"),(0,i.yg)("p",null,"defaults < overrides < traits < lazy overrides"),(0,i.yg)("p",null,"So, setting a value via a trait takes precedence over setting a value on the same field with an override, etc."),(0,i.yg)("h3",{id:"naming-mock-data"},"Naming mock data"),(0,i.yg)("p",null,"Be sure to prefix your test data with ",(0,i.yg)("inlineCode",{parentName:"p"},"mock"),". Without the prefix, jest will complain about out-of-scope variables."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"const mockObject = objectFactory()")),(0,i.yg)("h2",{id:"use-with-storybook-and-happo"},"Use with Storybook and Happo"),(0,i.yg)("p",null,"Test data that will be visible in a Storybook component should be overridden with deterministic data. Otherwise, on every subsequent run, Happo will register the difference as a failure."),(0,i.yg)("p",null,"For example, on the homepage of the customer site, when there is as an approved PPM, the first part of the PPM's ID is displayed. Using a factory's default random generator would cause this ID to change on every run."),(0,i.yg)("p",null,"Instead, do"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"const ppmShipment = ppmShipmentFactory({\n  [BASE_FIELDS.OVERRIDES]: {\n    [PPM_FIELDS.ID]: 'abcd1234-0000-0000-0000-000000000000',\n  },\n})\n")))}c.isMDXComponent=!0}}]);