(this["webpackJsonpmovie-search-app"]=this["webpackJsonpmovie-search-app"]||[]).push([[0],{15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),n=a(5),s=a.n(n),i=(a(15),a(6)),l=a(7),o=a(10),u=a(9),j=a(3),b=a.n(j),p=a(8),d=a(4),h=a(0);function m(e){var t=e.movie;return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(t.poster_path),alt:t.title+" poster"}),Object(h.jsxs)("div",{className:"card--content",children:[Object(h.jsx)("h3",{className:"card--title",children:t.title}),Object(h.jsx)("p",{children:Object(h.jsxs)("small",{children:["RELEASE DATE: ",t.release_date]})}),Object(h.jsx)("p",{children:Object(h.jsxs)("small",{children:["RATING: ",t.vote_average]})}),Object(h.jsx)("p",{className:"card--desc",children:t.overview})]})]})}function v(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)([]),s=Object(d.a)(n,2),i=s[0],l=s[1],o=function(){var e=Object(p.a)(b.a.mark((function e(t){var c,r,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c="https://api.themoviedb.org/3/search/movie?api_key=7da55198e9f6a9e978c3bbd42071789c&language=en-US&query=".concat(a,"&page=1&include_adult=false"),e.prev=2,e.next=5,fetch(c);case 5:return r=e.sent,e.next=8,r.json();case 8:n=e.sent,l(n.results),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("form",{className:"form",onSubmit:o,children:[Object(h.jsx)("label",{className:"label",htmlFor:"query",children:"Movie Name"}),Object(h.jsx)("input",{className:"input",type:"text",name:"query",placeholder:"Enter your movie here",value:a,onChange:function(e){return r(e.target.value)}}),Object(h.jsx)("button",{className:"button",type:"submit",children:"Search"})]}),Object(h.jsx)("div",{className:"card-list",children:i.filter((function(e){return e.poster_path})).map((function(e){return Object(h.jsx)(m,{movie:e},e.id)}))})]})}var O=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"title",children:"Movie Search Application"}),Object(h.jsx)(v,{})]})}}]),a}(r.a.Component);s.a.render(Object(h.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.15b1b963.chunk.js.map