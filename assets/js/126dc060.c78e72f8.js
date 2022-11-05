"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7737],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var r=o.createContext({}),c=function(t){var e=o.useContext(r),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=c(t.components);return o.createElement(r.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,r=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=c(n),g=a,h=d["".concat(r,".").concat(g)]||d[g]||p[g]||i;return n?o.createElement(h,s(s({ref:e},u),{},{components:n})):o.createElement(h,s({ref:e},u))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var r in e)hasOwnProperty.call(e,r)&&(l[r]=e[r]);l.originalType=t,l.mdxType="string"==typeof t?t:a,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1283:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={},s="AWS Cognito",l={unversionedId:"authenticate/oauth/backend-oauth2-0012-cognito",id:"authenticate/oauth/backend-oauth2-0012-cognito",title:"AWS Cognito",description:"Find AWS Cognito integration example in the following Caddyfile",source:"@site/docs/authenticate/oauth/81-backend-oauth2-0012-cognito.md",sourceDirName:"authenticate/oauth",slug:"/authenticate/oauth/backend-oauth2-0012-cognito",permalink:"/docs/authenticate/oauth/backend-oauth2-0012-cognito",draft:!1,editUrl:"https://github.com/authp/authp.github.io/edit/main/docs/authenticate/oauth/81-backend-oauth2-0012-cognito.md",tags:[],version:"current",sidebarPosition:81,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Keycloak",permalink:"/docs/authenticate/oauth/backend-oauth2-0011-keycloak"},next:{title:"Discord",permalink:"/docs/authenticate/oauth/backend-oauth2-0013-discord"}},r={},c=[{value:"Cognito User Pool",id:"cognito-user-pool",level:2},{value:"Cognito Client",id:"cognito-client",level:2},{value:"Cognito User",id:"cognito-user",level:2},{value:"User Login",id:"user-login",level:2}],u={toc:c};function p(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,o.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aws-cognito"},"AWS Cognito"),(0,a.kt)("p",null,"Find AWS Cognito integration example in the following ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/greenpau/caddy-auth-docs/blob/main/assets/conf/oauth/cognito/Caddyfile"},(0,a.kt)("inlineCode",{parentName:"a"},"Caddyfile")),"\nand associated ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/greenpau/caddy-auth-docs/blob/main/assets/conf/oauth/cognito/caddy.env"},"environment file"),"."),(0,a.kt)("h2",{id:"cognito-user-pool"},"Cognito User Pool"),(0,a.kt)("p",null,"Follow the below screenshots to create new Cognito user pool."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS Cognito",src:n(8938).Z,width:"1186",height:"607"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS Cognito",src:n(846).Z,width:"1170",height:"635"})),(0,a.kt)("p",null,"Here, add custom attribute ",(0,a.kt)("inlineCode",{parentName:"p"},"roles")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"timezone"),".\nIt would help with role-based access."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS Cognito",src:n(7630).Z,width:"861",height:"813"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS Cognito",src:n(1677).Z,width:"1169",height:"751"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS Cognito",src:n(8151).Z,width:"1141",height:"786"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS Cognito",src:n(5306).Z,width:"1170",height:"730"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS Cognito",src:n(2867).Z,width:"1183",height:"369"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS Cognito",src:n(6849).Z,width:"1178",height:"363"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS Cognito",src:n(356).Z,width:"1167",height:"677"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS Cognito",src:n(5649).Z,width:"1128",height:"719"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS Cognito",src:n(6817).Z,width:"1183",height:"479"})),(0,a.kt)("p",null,"Review your selection."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS Cognito",src:n(7446).Z,width:"1163",height:"692"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS Cognito",src:n(5464).Z,width:"1143",height:"362"})),(0,a.kt)("p",null,"Note the User Pool ID and update your environment file with it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export COGNITO_US_EAST_1_POOL_ID=us-east-1_UFeMzbuJe\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS Cognito",src:n(1096).Z,width:"1161",height:"328"})),(0,a.kt)("p",null,'Next, browse to "App Integration", "App client settings". Enable Cognito User Pool\nand update relevant URL.'),(0,a.kt)("p",null,"For example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Set "Callback URL(s)" to ',(0,a.kt)("inlineCode",{parentName:"li"},"https://auth.myfiosgateway.com:8443/oauth2/cognito-us-east-1/authorization-code-callback")),(0,a.kt)("li",{parentName:"ul"},'Set "Sign out URL(s)" to ',(0,a.kt)("inlineCode",{parentName:"li"},"https://auth.myfiosgateway.com:8443/logout"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS Cognito",src:n(786).Z,width:"1682",height:"807"})),(0,a.kt)("p",null,"Next, create a random string for your Cognito domain and save it.\nThis step is mandatory for a working OAuth integration."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS Cognito",src:n(1797).Z,width:"1426",height:"651"})),(0,a.kt)("h2",{id:"cognito-client"},"Cognito Client"),(0,a.kt)("p",null,"During this step, you will extract Client ID and Secret and update environment file with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export COGNITO_US_EAST_1_CLIENT_ID=2jvuq8gkhfoh7u4fdfihiditj5\nexport COGNITO_US_EAST_1_CLIENT_SECRET=ldjkr0pn1jmo9lule3ge06ju13rhmsffda1vama1f80frlcvplf\n")),(0,a.kt)("p",null,'Note the "App client id" and click "Show Details".'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS Cognito",src:n(5979).Z,width:"1164",height:"484"})),(0,a.kt)("p",null,'Not the "App client secret".'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS Cognito",src:n(8e3).Z,width:"1148",height:"449"})),(0,a.kt)("h2",{id:"cognito-user"},"Cognito User"),(0,a.kt)("p",null,"During this step, you will create a user."),(0,a.kt)("p",null,'Click "Create user".'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS Cognito",src:n(9599).Z,width:"1161",height:"475"})),(0,a.kt)("p",null,"Follow the selections below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS Cognito",src:n(9969).Z,width:"607",height:"502"})),(0,a.kt)("p",null,"After creating the user, the user will have ",(0,a.kt)("inlineCode",{parentName:"p"},"FORCE_CHANGE_PASSWORD")," status.\nWe will overwrite it via command-line."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS Cognito",src:n(8106).Z,width:"1335",height:"436"})),(0,a.kt)("p",null,"Open AWS CloudShell."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS Cognito",src:n(7556).Z,width:"1328",height:"474"})),(0,a.kt)("p",null,"Run the following commands in the terminal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export TARGET_POOL="us-east-1_UFeMzbuJe"\nexport TARGET_USER="jsmith"\nexport TARGET_USER_NAME="John Smith"\naws cognito-idp admin-set-user-password --user-pool-id ${TARGET_POOL} --username ${TARGET_USER} --password "The@Password" --permanent\naws cognito-idp admin-update-user-attributes --user-pool-id ${TARGET_POOL} --username ${TARGET_USER} \\\n  --user-attributes Name="name",Value="${TARGET_USER_NAME}" \\\n  --user-attributes Name="custom:roles",Value="authp/admin|authp/user" \\\n  --user-attributes Name="custom:timezone",Value="America/New_York"\naws cognito-idp admin-get-user --user-pool-id ${TARGET_POOL} --username ${TARGET_USER}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"roles")," are being separated by ",(0,a.kt)("inlineCode",{parentName:"p"},"|")," (pipe)."),(0,a.kt)("p",null,"The above command set permanent user password (i.e. no need to do password change),\nset custom roles and timezone."),(0,a.kt)("p",null,"Next, run the following command to review the created user:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"aws cognito-idp admin-get-user --user-pool-id ${TARGET_POOL} --username ${TARGET_USER}\n")),(0,a.kt)("p",null,"The output follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Username": "jsmith",\n    "UserAttributes": [\n        {\n            "Name": "sub",\n            "Value": "55ddc31e-b818-4136-8fb8-84cfb31af537"\n        },\n        {\n            "Name": "custom:roles",\n            "Value": "authp/admin|authp/user"\n        },\n        {\n            "Name": "custom:timezone",\n            "Value": "America/New_York"\n        },\n        {\n            "Name": "email_verified",\n            "Value": "true"\n        },\n        {\n            "Name": "name",\n            "Value": "John Smith"\n        },\n        {\n            "Name": "email",\n            "Value": "jsmith@authcrunch.com"\n        }\n    ],\n    "UserCreateDate": "2022-04-23T17:12:05.282000+00:00",\n    "UserLastModifiedDate": "2022-04-23T17:30:43.896000+00:00",\n    "Enabled": true,\n    "UserStatus": "CONFIRMED"\n}\n')),(0,a.kt)("h2",{id:"user-login"},"User Login"),(0,a.kt)("p",null,'Finally, start Caddy and browse to authentication portal.\nClick "AWS Cognito US" link to initiate authentication.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS Cognito",src:n(6178).Z,width:"455",height:"434"})),(0,a.kt)("p",null,"You will be redirected to AWS Cognito for authentication."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS Cognito",src:n(6097).Z,width:"545",height:"520"})),(0,a.kt)("p",null,'You will be redirected back to authentication portal after successful authentication.\nClick "My Identity" to see the contents of your user token.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS Cognito",src:n(4239).Z,width:"436",height:"450"})),(0,a.kt)("p",null,"The token will contain your name email. However, the custom roles and timezone will not be there."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS Cognito",src:n(9820).Z,width:"652",height:"899"})))}p.isMDXComponent=!0},5979:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/cognito_client_1-5b9938a17a3c8f5c8a386a1dd54735ce.png"},8e3:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/cognito_client_2-af1a13910028660897d324a25f9fe92b.png"},9599:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/cognito_user_1-18c202118ad6101aa1890f0136c2838d.png"},9969:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/cognito_user_2-dace5a7dd2abd999ba9a451e3c2afe5f.png"},8106:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/cognito_user_3-cc0ed0a1100e8517f65efb3202f9b958.png"},7556:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/cognito_user_4-5f7710600136beaa243b6ced02aaed45.png"},6178:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/cognito_user_login_1-aa374942942a3d845495750e730b6916.png"},6097:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/cognito_user_login_2-9ab8c6dfb69aef94dd14896f3e770881.png"},4239:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/cognito_user_login_3-76951b7c4744423fd7c7a2d96df814ba.png"},9820:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/cognito_user_login_4-cf6d313547f2d1eb8dcb407701913010.png"},8938:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/cognito_user_pool_1-e34066845e96cd3a0393dbe0e6a5f107.png"},5649:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/cognito_user_pool_10-e11fd21fe869749670ddfb78da272d08.png"},6817:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/cognito_user_pool_11-fb5e2e274580facc4acdf71791045869.png"},7446:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/cognito_user_pool_12-75cb2d75593880b6a030c4b5dd715f09.png"},5464:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/cognito_user_pool_13-e355626e83275ff6964290b8b6444ada.png"},1096:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/cognito_user_pool_14-9bf0c9f3a7d014ef54c03dc42c78efa8.png"},786:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/cognito_user_pool_15-6e2ec1095998c3c2b2fece1bc78c0fab.png"},1797:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/cognito_user_pool_16-c7905bfcad1ef014efe168690b548453.png"},846:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/cognito_user_pool_2-a9df67aa03362e22212caba69fd41044.png"},7630:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/cognito_user_pool_3-8805efea31e7d4b7efa8e8841ed497a4.png"},1677:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/cognito_user_pool_4-54c0d8d02b70f1ad0d69a15c28135bfa.png"},8151:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/cognito_user_pool_5-adcb608915d346520d743dba907ef0f0.png"},5306:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/cognito_user_pool_6-28e32deb1ce2192f4a7d025cdd8dab92.png"},2867:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/cognito_user_pool_7-15c5091681ba03f7912fa7fbf9307b7e.png"},6849:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/cognito_user_pool_8-9b28b53132a3fd6ce4bf0d0d1976aca2.png"},356:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/cognito_user_pool_9-035155a8a9a5155ad3d7749fef66f765.png"}}]);