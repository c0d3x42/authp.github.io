"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3502],{3905:function(e,t,n){n.d(t,{kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4295:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={},l="Password Management",s={unversionedId:"authenticate/local/password-management",id:"authenticate/local/password-management",isDocsHomePage:!1,title:"Password Management",description:"An administrator may change the password directly in",source:"@site/docs/authenticate/local/30-password-management.md",sourceDirName:"authenticate/local",slug:"/authenticate/local/password-management",permalink:"/docs/authenticate/local/password-management",editUrl:"https://github.com/authp/authp.github.io/edit/main/docs/authenticate/local/30-password-management.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Identity Store",permalink:"/docs/authenticate/local/identity-store"},next:{title:"LDAP Configuration",permalink:"/docs/authenticate/ldap/ldap"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"password-management"},"Password Management"),(0,o.kt)("p",null,"An administrator may change the password directly in\n",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/caddy/auth/local/users.json")," file."),(0,o.kt)("p",null,"First, download ",(0,o.kt)("inlineCode",{parentName:"p"},"bcrypt-cli"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go get -u github.com/bitnami/bcrypt-cli\n")),(0,o.kt)("p",null,"Then, use it to generate a new password:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ echo -n "password123" | bcrypt-cli -c 10\n$2a$10$OVnOaHDkcOXfbUZPFh5qt.yJqUt6pl9uJaqEMxxM.vS5fY/cZNmsq\n')),(0,o.kt)("p",null,"Finally, replace the newly generated password is user database file."))}d.isMDXComponent=!0}}]);