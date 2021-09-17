(self.webpackChunk=self.webpackChunk||[]).push([[55993],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,y=f["".concat(u,".").concat(m)]||f[m]||p[m]||i;return r?n.createElement(y,o(o({ref:t},s),{},{components:r})):n.createElement(y,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1080:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>u,metadata:()=>c,toc:()=>s,default:()=>f});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o=["components"],l={id:"fetch-query",title:"fetchQuery",original_id:"fetch-query"},u=void 0,c={unversionedId:"fetch-query",id:"version-v10.1.2/fetch-query",isDocsHomePage:!1,title:"fetchQuery",description:"You can use the fetchQuery function to imperatively make GraphQL Requests. This is useful for cases where you want to make requests outside of React but still utilize the Relay store and network layer.",source:"@site/versioned_docs/version-v10.1.2/Modern-fetchQuery.md",sourceDirName:".",slug:"/fetch-query",permalink:"/docs/v10.1.2/fetch-query",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v10.1.2/Modern-fetchQuery.md",version:"v10.1.2",lastUpdatedBy:"Steven Chaitoff",lastUpdatedAt:1631903083,formattedLastUpdatedAt:"9/17/2021",frontMatter:{id:"fetch-query",title:"fetchQuery",original_id:"fetch-query"},sidebar:"version-v10.1.2/docs",previous:{title:"Relay Store",permalink:"/docs/v10.1.2/relay-store"},next:{title:"Routing",permalink:"/docs/v10.1.2/routing"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Return Value",id:"return-value",children:[]}],p={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchQuery")," function to imperatively make GraphQL Requests. This is useful for cases where you want to make requests outside of React but still utilize the Relay store and network layer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import {fetchQuery, graphql} from 'relay-runtime';\n\nconst query = graphql`\n  query ExampleQuery($pageID: ID!) {\n    page(id: $pageID) {\n      name\n    }\n  }\n`;\n\nconst variables = {\n  pageID: '110798995619330',\n};\n\nfetchQuery(environment, query, variables)\n  .then(data => {\n    // access the graphql response\n  });\n")),(0,i.kt)("h2",{id:"arguments"},"Arguments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"environment"),": The ",(0,i.kt)("a",{parentName:"li",href:"./relay-environment"},"Relay Environment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query"),": The ",(0,i.kt)("inlineCode",{parentName:"li"},"graphql")," tagged query. ",(0,i.kt)("strong",{parentName:"li"},"Note:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"relay-compiler")," enforces the query to be named as ",(0,i.kt)("inlineCode",{parentName:"li"},"<FileName>Query"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"variables"),": Object containing set of variables to pass to the GraphQL query, i.e. a mapping from variable name to value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cacheConfig?"),": Optional object containing a set of cache configuration options, i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"force: true")," requires the fetch to be issued regardless of the state of any configured response cache. See ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/relay-runtime/lib/util/RelayRuntimeTypes.d.ts#L22-L35"},"the types")," for more ",(0,i.kt)("inlineCode",{parentName:"li"},"cacheConfig")," options.")),(0,i.kt)("h2",{id:"return-value"},"Return Value"),(0,i.kt)("p",null,"The function returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," that resolves with an object containing data obtained from the query."))}f.isMDXComponent=!0}}]);