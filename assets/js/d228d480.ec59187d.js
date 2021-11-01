"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1889],{3905:function(e,t,n){n.d(t,{kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9852:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={sidebar_position:10},s="Path-Based Access Lists",l={unversionedId:"authorize/path-acl",id:"authorize/path-acl",isDocsHomePage:!1,title:"Path-Based Access Lists",description:"There are application that specify ACL in its own body, e.g.",source:"@site/docs/authorize/path-acl.md",sourceDirName:"authorize",slug:"/authorize/path-acl",permalink:"/docs/authorize/path-acl",editUrl:"https://github.com/authp/authp.github.io/edit/main/docs/authorize/path-acl.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Access Lists and Role-based Access Control (RBAC)",permalink:"/docs/authorize/acl-rbac"},next:{title:"HTTP Headers",permalink:"/docs/authorize/headers"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"path-based-access-lists"},"Path-Based Access Lists"),(0,i.kt)("p",null,"There are application that specify ACL in its own body, e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "iat": 1532093588,\n  "jti": "705b6f50-8c21-11e8-9bcb-595326422d60",\n  "sub": "jamie",\n  "exp": "1532179987",\n  "role": "users",\n  "acl": {\n    "paths": {\n      "/*/users/**": {},\n      "/*/conversations/**": {},\n      "/*/sessions/**": {},\n      "/*/devices/**": {},\n      "/*/image/**": {},\n      "/*/media/**": {},\n      "/*/applications/**": {},\n      "/*/push/**": {},\n      "/*/knocking/**": {}\n    }\n  },\n  "application_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab"\n}\n')),(0,i.kt)("p",null,"To enable the validation of whether the requested path matches one\nof the paths in JWT token claims, use the following Caddyfile\ndirective:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"authorize {\n   validate path acl\n}\n")),(0,i.kt)("p",null,"The asterisk ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," signs get converted to the following regex patterns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"*"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"[a-zA-Z0-9_.~-]+")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"**"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"[a-zA-Z0-9_/.~-]+"))))}d.isMDXComponent=!0}}]);