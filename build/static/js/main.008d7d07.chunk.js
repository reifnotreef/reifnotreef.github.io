(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t(19),i=t.n(a),c=t(5),o=t.n(c),s=t(8),l=t(15),d=t(12),u=t.n(d),j=t(21),h=t.n(j),b=t(0),p=function(e){var n,t,r=e.project;return Object(b.jsxs)("section",{className:"project-card",style:{borderTop:"1px solid black"},children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:"project-name",style:{display:"inline-block",margin:0},children:r.name}),Object(b.jsx)("a",{className:"project-links",target:"_blank",rel:"noopener noreferrer",href:r.url,style:{display:"inline-block",paddingLeft:"1rem"},children:Object(b.jsx)(u.a,{htmlColor:"black"})}),""!==r.homepageUrl?Object(b.jsx)("a",{className:"project-links",target:"_blank",rel:"noopener noreferrer",href:r.homepageUrl,children:Object(b.jsx)(h.a,{htmlColor:"black"})}):Object(b.jsx)(b.Fragment,{})]}),Object(b.jsx)("p",{className:"project-description",style:{maxWidth:"60rem"},children:r.description}),Object(b.jsx)("p",{className:"project-languages",children:"Languages: "}),Object(b.jsx)("ul",{children:null===r||void 0===r||null===(n=r.languages)||void 0===n||null===(t=n.edges)||void 0===t?void 0:t.map((function(e,n){var t;return Object(b.jsx)("li",{children:null===e||void 0===e||null===(t=e.node)||void 0===t?void 0:t.name},n)}))})]},r.id)},m=t(53),f=t(16),x=t.n(f),O=function(){var e=Object(s.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x()("https://api.github.com/graphql",{method:"POST",body:JSON.stringify({query:'query {\n  user(login: "reifnotreef") {\n    pinnedItems(first: 6, types: [REPOSITORY]) {\n      totalCount\n      edges {\n        node {\n          ... on Repository {\n            homepageUrl\n            name\n            description\n            id\n            url\n            languages(first: 6) {\n              edges {\n                node {\n                  name\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}'}),headers:{Authorization:"Bearer ".concat("ccafb4426821540a8f0d1b90d7e68edb7c69bfad")}}).then((function(e){return e.json()})).then((function(e){var n,t,r,a;return null===e||void 0===e||null===(n=e.data)||void 0===n||null===(t=n.user)||void 0===t||null===(r=t.pinnedItems)||void 0===r||null===(a=r.edges)||void 0===a?void 0:a.map((function(e){return null===e||void 0===e?void 0:e.node}))}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(r.useState)([]),n=Object(l.a)(e,2),t=n[0],a=n[1],i=function(){var e=Object(s.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){i()}),[]),Object(b.jsx)("section",{className:"projects-container",children:t&&t.length>0?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("section",{className:"projects-header",children:Object(b.jsx)("h1",{children:"Projects"})}),t.map((function(e){return Object(b.jsx)(p,{project:e},e.id)}))]}):Object(b.jsx)(m.a,{variant:"rect",animation:"pulse",height:"100%",width:"100%"})})},v=t(16),y=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("https://api.github.com/graphql",{method:"POST",body:JSON.stringify({query:'query {\n    user(login: "reifnotreef") {\n      bio\n      avatarUrl\n      email\n      isHireable\n      name\n      company\n    }\n  }'}),headers:{Authorization:"Bearer ".concat("ccafb4426821540a8f0d1b90d7e68edb7c69bfad")}}).then((function(e){return e.json()})).then((function(e){return e.data.user})).catch((function(e){return console.error(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=t(23),w=t.n(k),N=t(22),C=t.n(N),S=function(){var e=Object(r.useState)(),n=Object(l.a)(e,2),t=n[0],a=n[1];return Object(r.useEffect)((function(){y().then((function(e){return a(e)}))}),[]),null==t?Object(b.jsx)(m.a,{variant:"circle",animation:"pulse",height:"20rem",width:"20rem"}):Object(b.jsxs)("section",{className:"header-container",children:[Object(b.jsx)("img",{src:t.avatarUrl,alt:"me",className:"profile-image",style:{height:"20rem",width:"20rem",borderRadius:"50%",marginLeft:"auto",marginRight:"auto",display:"block"}}),Object(b.jsxs)("div",{className:"header-copy",children:[Object(b.jsx)("h4",{children:t.name}),Object(b.jsxs)("p",{children:["hirable:"," ",!0===t.isHireable?Object(b.jsx)(C.a,{className:"hireable-icon",htmlColor:"black",style:{display:"inline-block",position:"relative",top:"5px"}}):Object(b.jsx)(w.a,{className:"hireable-icon",htmlColor:"black",style:{display:"inline-block",position:"relative",top:"5px"}})]}),Object(b.jsxs)("p",{style:{maxWidth:"60rem"},children:["about me: ",t.bio]}),Object(b.jsxs)("p",{style:{maxWidth:"60rem"},children:["company: ",Object(b.jsx)("a",{href:t.company,style:{textDecoration:"none"},children:"Dottid"})]})]})]})},q=(t(41),t(24)),R=t.n(q),_=t(25),T=t.n(_),U=t(26),J=t.n(U),P=t(27),B=t.n(P),E=function(){return Object(b.jsx)("div",{style:{width:"100%",position:"fixed",bottom:0,height:"2rem",paddingTop:"0.25rem",backgroundColor:"black",display:"flex",justifyContent:"center"},className:"navigation-container",children:Object(b.jsxs)("div",{style:{width:"60rem",display:"flex",justifyContent:"space-evenly"},children:[Object(b.jsx)("a",{href:"#root",children:Object(b.jsx)(R.a,{htmlColor:"white"})}),Object(b.jsx)("a",{href:"mailto:bridgerrhammond@gmail.com",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)(T.a,{htmlColor:"white"})}),Object(b.jsx)("a",{href:"https://github.com/reifnotreef",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)(u.a,{htmlColor:"white"})}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/bridgerhammond/",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)(J.a,{htmlColor:"white"})}),Object(b.jsx)("a",{href:"https://github.com/reifnotreef/reifnotreef.github.io/raw/deploy/img/BRH_Resume.pdf",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)(B.a,{htmlColor:"white"})})]})})},F=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(S,{}),Object(b.jsx)(g,{}),Object(b.jsx)(E,{})]})};i.a.render(Object(b.jsx)(F,{}),document.querySelector("#root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.008d7d07.chunk.js.map