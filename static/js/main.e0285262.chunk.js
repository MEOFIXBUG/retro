(this.webpackJsonpretro=this.webpackJsonpretro||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(0),c=a.n(n),s=a(11),i=a.n(s),o=(a(44),a(45),a(26)),j=a.n(o),d=a(30),b=a(14),l=a(76),u=a(81),m=a(82),O=a(85),h=a(80),x=a(79),p=a(23),f=a(78),v=a(84),g=a(83),y=a(22),N=a(27),S=a.n(N),k=a(33),w=a.n(k),B=a(32),E=a.n(B),G=Object(l.a)((function(e){return{root:{maxWidth:345},avatar:{backgroundColor:y.a[500]},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})}}}));function A(e){var t=G(),a=new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"long",day:"2-digit"});return Object(r.jsxs)(O.a,{className:t.root,children:[Object(r.jsx)(f.a,{avatar:Object(r.jsx)(v.a,{"aria-label":"recipe",className:t.avatar,children:e.item.byName.slice(0,1)}),action:Object(r.jsx)(g.a,{"aria-label":"remove",children:Object(r.jsx)(E.a,{})}),subheader:a.format(Date.parse(e.item.createdAt))}),Object(r.jsx)(x.a,{children:Object(r.jsx)(p.a,{variant:"title",color:"textSecondary",component:"h2",children:e.item.byName})}),Object(r.jsx)(h.a,{disableSpacing:!0,children:e.item.mine?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(g.a,{"aria-label":"publish",children:Object(r.jsx)(w.a,{})}),Object(r.jsx)(g.a,{"aria-label":"share",children:Object(r.jsx)(S.a,{})})]}):Object(r.jsx)(g.a,{className:t.expand,children:Object(r.jsx)(S.a,{color:"primary"})})})]})}var D=Object(l.a)((function(e){return{cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)}}}));function F(){var e=D(),t=Object(n.useState)(null),a=Object(b.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)(!1),o=Object(b.a)(i,2),l=o[0],O=o[1],h=Object(n.useState)([]),x=Object(b.a)(h,2),p=x[0],f=x[1];return Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://retrov8.herokuapp.com/api/boards");case 2:return t=e.sent,e.next=5,t.json();case 5:(a=e.sent).success?(O(!0),f(a.data)):(O(!0),s(a.message));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c?Object(r.jsxs)("div",{children:["Error: ",c]}):l?Object(r.jsx)(u.a,{className:e.cardGrid,maxWidth:"md",children:Object(r.jsx)(m.a,{container:!0,spacing:4,children:p.map((function(e){return Object(r.jsx)(m.a,{item:!0,xs:12,sm:6,md:4,children:Object(r.jsx)(A,{item:e})},e.id)}))})}):Object(r.jsx)("div",{children:"Loading..."})}var I=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(F,{})})};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(I,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.e0285262.chunk.js.map