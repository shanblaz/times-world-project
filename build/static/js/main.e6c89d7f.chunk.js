(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{116:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),i=c(67),d=c.n(i),a=(c(86),c(87),c(8)),l=c(68),r=c.n(l),j=c(48),o=c(69),b=c(137),x=c(141),u=c(140),h=c(139),v=c(74),O=c.n(v),m=c(73),f=c.n(m),p=c(1),g=["children","value","index"];function y(e){var t=e.children,c=e.value,n=e.index,s=Object(o.a)(e,g);return Object(p.jsx)("div",Object(j.a)(Object(j.a)({role:"tabpanel",hidden:c!==n,id:"".concat(n),"aria-labelledby":"".concat(n)},s),{},{children:c===n&&Object(p.jsx)(h.a,{sx:{p:3},children:Object(p.jsx)(u.a,{children:t})})}))}function N(e){var t,c,s=Object(n.useState)(0),i=Object(a.a)(s,2),d=i[0],l=i[1],r=Object(n.useState)({}),o=Object(a.a)(r,2),u=o[0],v=o[1];Object(n.useEffect)((function(){v(e.data)}),[e]);return console.log(d,"vvvvv"),Object(p.jsxs)(h.a,{sx:{width:"100%"},children:[Object(p.jsx)(h.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(p.jsx)(b.a,{style:{overflow:"auto"},value:d,onChange:function(e,t){l(t)},"aria-label":"basic tabs example",children:null===u||void 0===u||null===(t=u.table_menu_list)||void 0===t?void 0:t.map((function(e,t){return Object(p.jsx)(x.a,Object(j.a)({label:e.menu_category},function(e){return{id:"".concat(e),tabindex:"".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}(e.menu_category_id)))}))})}),null===u||void 0===u||null===(c=u.table_menu_list)||void 0===c?void 0:c.map((function(e,t){return Object(p.jsx)(y,{value:d,index:t,children:e.category_dishes.map((function(e){return Object(p.jsxs)("div",{className:"w-100 d-flex border-bottom mb-3",children:[Object(p.jsxs)("div",{className:"col-9 d-flex",children:[Object(p.jsx)("div",{style:{padding:"0px 5px"},children:2===e.dish_Type?Object(p.jsx)("img",{alt:"veg",style:{width:"15px"},src:"/images/grrend.png"}):Object(p.jsx)("img",{alt:"non veg",style:{width:"15px"},src:"/images/redd.png"})}),Object(p.jsxs)("div",{className:"w-100",children:[Object(p.jsx)("div",{style:{fontWeight:"600"},className:"text-start",children:e.dish_name}),Object(p.jsxs)("div",{style:{fontWeight:"500"},className:"d-flex justify-content-between",children:[Object(p.jsx)("div",{children:e.dish_currency+" "+e.dish_price}),Object(p.jsx)("div",{children:e.dish_calories+" Calories"})]}),Object(p.jsx)("div",{style:{fontSize:"12px",color:"grey"},className:"text-start",children:e.dish_description}),Object(p.jsx)("div",{className:"text-start",children:e.dish_Availability?Object(p.jsxs)("div",{className:"fd-add-sbs mobile-fd-add-sbs",children:[Object(p.jsx)("div",{className:"fd-subtract",children:Object(p.jsx)(f.a,{onClick:function(){return e.count=(e.count?e.count:0)-1}})}),Object(p.jsx)("div",{className:"fd-counter",children:e.count?e.count:0}),Object(p.jsx)("div",{className:"fd-add",children:Object(p.jsx)(O.a,{onClick:function(){return e.count=(e.count?e.count:0)+1}})})]}):Object(p.jsx)("div",{style:{color:"red"},children:"Not available"})})]})]}),Object(p.jsx)("div",{style:{height:"100px"},className:"col-3 d-flex justify-content-end",children:Object(p.jsx)("div",{style:{height:"80px",width:"130px",overflow:"hidden",borderRadius:"10px"},children:Object(p.jsx)("img",{alt:"dishes",style:{width:"100%",borderRadius:"5px"},src:e.dish_image})})})]})}))})}))]})}var _=c(76),w=c.n(_),C=c(75),k=c.n(C);var S=function(){var e=Object(n.useState)(0),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){r()({method:"get",url:"https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099"}).then((function(e){console.log(e),s(e.data[0])}))}),[]),Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"d-flex justify-content-between p-3",children:[Object(p.jsxs)("div",{className:"align-items-center d-flex h4",children:[Object(p.jsx)("div",{className:"p-2 d-block d-md-none",children:Object(p.jsx)(k.a,{})}),"UNI Resto Cafe"]}),Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsx)("div",{className:"h6 p-1",children:"My Orders"}),Object(p.jsxs)("div",{children:[Object(p.jsx)(w.a,{}),Object(p.jsx)("div",{className:"cartCount",children:"2"})]})]})]}),Object(p.jsx)(N,{data:c})]})};var F=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(S,{})})},B=(c(115),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,142)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,d=t.getTTFB;c(e),n(e),s(e),i(e),d(e)}))});d.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(F,{})}),document.getElementById("root")),B()},86:function(e,t,c){},87:function(e,t,c){}},[[116,1,2]]]);
//# sourceMappingURL=main.e6c89d7f.chunk.js.map