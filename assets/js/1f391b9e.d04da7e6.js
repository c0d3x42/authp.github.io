"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3085],{7979:function(e,n,a){a.r(n),a.d(n,{default:function(){return u}});var t=a(7294),l=a(4334),i=a(4922),c=a(7717),r=a(5585),s=a(7588),m=a(3664),o="mdxPageWrapper_3qD3";var u=function(e){var n=e.content,a=n.frontMatter,u=n.metadata,d=a.title,v=a.description,f=a.wrapperClassName,g=a.hide_table_of_contents,N=u.permalink;return t.createElement(i.Z,{title:d,description:v,permalink:N,wrapperClassName:null!=f?f:m.kM.wrapper.mdxPages,pageClassName:m.kM.page.mdxPage},t.createElement("main",{className:"container container--fluid margin-vert--lg"},t.createElement("div",{className:(0,l.Z)("row",o)},t.createElement("div",{className:(0,l.Z)("col",!g&&"col--8")},t.createElement(c.Zo,{components:r.Z},t.createElement(n,null))),!g&&n.toc&&t.createElement("div",{className:"col col--2"},t.createElement(s.Z,{toc:n.toc,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level})))))}},7588:function(e,n,a){a.d(n,{Z:function(){return o}});var t=a(7462),l=a(3366),i=a(7294),c=a(4334),r=a(5002),s="tableOfContents_35-E",m=["className"];var o=function(e){var n=e.className,a=(0,l.Z)(e,m);return i.createElement("div",{className:(0,c.Z)(s,"thin-scrollbar",n)},i.createElement(r.Z,(0,t.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,n,a){a.d(n,{Z:function(){return m}});var t=a(7462),l=a(3366),i=a(7294),c=a(3664),r=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var n=e.toc,a=e.className,t=e.linkClassName,l=e.isChild;return n.length?i.createElement("ul",{className:l?void 0:a},n.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=t?t:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:t}))}))):null}function m(e){var n=e.toc,a=e.className,m=void 0===a?"table-of-contents table-of-contents__left-border":a,o=e.linkClassName,u=void 0===o?"table-of-contents__link":o,d=e.linkActiveClassName,v=void 0===d?void 0:d,f=e.minHeadingLevel,g=e.maxHeadingLevel,N=(0,l.Z)(e,r),k=(0,c.LU)(),_=null!=f?f:k.tableOfContents.minHeadingLevel,p=null!=g?g:k.tableOfContents.maxHeadingLevel,C=(0,c.DA)({toc:n,minHeadingLevel:_,maxHeadingLevel:p}),E=(0,i.useMemo)((function(){if(u&&v)return{linkClassName:u,linkActiveClassName:v,minHeadingLevel:_,maxHeadingLevel:p}}),[u,v,_,p]);return(0,c.Si)(E),i.createElement(s,(0,t.Z)({toc:C,className:m,linkClassName:u},N))}},4922:function(e,n,a){a.d(n,{Z:function(){return r}});var t=a(7294),l=a(3938),i=a(9105),c=a(5977);function r(e){(0,c.TH)();return t.createElement(t.Fragment,null,t.createElement(i.Z,null,t.createElement("meta",{property:"google-site-verification",content:"VnGnUPzlKD0BatpTv3Ik0ax09Ph7WOggw6Fu_OF_2M0"})),t.createElement(l.Z,e))}}}]);