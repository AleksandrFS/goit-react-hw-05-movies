"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{839:function(t,r,n){var e=n(689),a=n(87),c=n(184);r.Z=function(t){var r=t.movies,n=(0,e.TH)();return(0,c.jsx)("div",{children:(0,c.jsx)("ul",{children:r.map((function(t){return(0,c.jsx)(a.rU,{to:"/movies/".concat(t.id),state:{from:n},children:(0,c.jsx)("li",{children:t.title})},t.id)}))})})}},130:function(t,r,n){n.d(r,{HI:function(){return p},aV:function(){return d},j8:function(){return o},tx:function(){return v},zv:function(){return f}});var e=n(861),a=n(757),c=n.n(a),u=n(243),s="7b4562665a42dd00b8be25ed9e213510",i="https://api.themoviedb.org/3/movie/",o=function(){var t=(0,e.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat("https://api.themoviedb.org/3/trending/movie/day?api_key=").concat(s));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i).concat(r,"?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i).concat(r,"/credits?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i).concat(r,"/reviews?api_key=").concat(s));case 2:return n=t.sent,console.log(n.data.results),t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(r,"&api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},415:function(t,r,n){n.r(r);var e=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),i=n(130),o=n(839),p=n(184);r.default=function(){var t=(0,s.useState)([]),r=(0,a.Z)(t,2),n=r[0],c=r[1],f=(0,s.useState)(""),v=(0,a.Z)(f,2),d=v[0],h=v[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,e.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.j8)();case 3:r=t.sent,c(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),h(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{children:"Trending today"}),n.length>0&&(0,p.jsx)(o.Z,{movies:n}),d&&(0,p.jsx)("p",{children:"Some server error occurred"})]})}}}]);
//# sourceMappingURL=415.567e2777.chunk.js.map