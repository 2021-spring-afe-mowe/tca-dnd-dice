(this["webpackJsonptca-dnd-dice"]=this["webpackJsonptca-dnd-dice"]||[]).push([[0],{100:function(e,a,t){},108:function(e,a,t){"use strict";t.r(a);var c=t(0),l=t.n(c),n=t(10),i=t.n(n),s=(t(100),t(74)),r=t(30),j=t(18),o=t(140),d=t(109),b=t(147),u=t(148),O=t(145),x=t(149),h=t(150),m=t(151),v=t(152),f=t(64),p=t(153),g=t(84),N=t.n(g),y=t(85),D=t.n(y),C=t(86),R=t.n(C),S=t(62),k=t.n(S),A=t(15),L=t(143),w=t(146),F=t(83),B=t.n(F),P=t(2),T=Object(o.a)({root:{position:"fixed",bottom:"0",width:"100%"}}),I=function(){var e=T(),a=Object(A.f)(),t=Object(c.useState)(0),l=Object(j.a)(t,2),n=l[0],i=l[1],s=function(e){a.push(e)};return Object(P.jsxs)(L.a,{showLabels:!0,value:n,onChange:function(e,a){i(a)},className:e.root,children:[Object(P.jsx)(O.a,{}),Object(P.jsx)(w.a,{label:"Add Dice",value:"/addDie",onClick:function(){return s("/addDie")},icon:Object(P.jsx)(B.a,{color:"secondary"})}),Object(P.jsx)(w.a,{label:"Add Roll",value:"/addRoll",onClick:function(){return s("/addRoll")},icon:Object(P.jsx)(k.a,{color:"secondary"})})]})},q=Object(o.a)({list:{margin:"0 0 2em 0"},dieName:{fontSize:"24px"},statLabel:{paddingBottom:"0",color:"#424242"},stat:{paddingTop:"0",maxWidth:"60%",margin:"0 0 0 2em",color:"#008573"},noStats:{textAlign:"center",margin:"4em auto"}}),z=function(e){var a,t=e.appDiceNames,l=e.appData,n=q(),i=Object(A.f)(),s=Object(c.useState)(!1),r=Object(j.a)(s,2),o=r[0],g=r[1],y=function(){g(!o)},C=function(e){return a=(a=(a=l.allRolls.filter((function(a){return a.dieName===e}))).filter((function(e){return null!==e.roll}))).map((function(e){return e.roll})),console.log(e+" rolls: "+a),a},S=function(e){var a=C(e).reduce((function(e,a){return e+a}),0)/C(e).length;return a?a.toFixed(1):"Never rolled"},L=function(e){return C(e).filter((function(e){return 20===e})).length},w=function(e){return C(e).filter((function(e){return 1===e})).length},F=function(e){var a=C(e)[C(e).length-1];return a||"Never rolled"},B=t.map((function(e){return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(d.a,{button:!0,onClick:y,children:[Object(P.jsx)(b.a,{children:Object(P.jsx)(N.a,{color:"secondary"})}),Object(P.jsx)(u.a,{primary:e,className:n.dieName}),o?Object(P.jsx)(D.a,{}):Object(P.jsx)(R.a,{})]}),Object(P.jsx)(O.a,{}),Object(P.jsx)(x.a,{in:o,children:Object(P.jsxs)(h.a,{component:"div",disablePadding:!0,children:[Object(P.jsx)(d.a,{className:n.statLabel,children:Object(P.jsx)(u.a,{primary:"Average Roll:"})}),Object(P.jsx)(d.a,{className:n.stat,children:Object(P.jsx)(u.a,{primary:S(e)})}),Object(P.jsx)(d.a,{className:n.statLabel,children:Object(P.jsx)(u.a,{primary:"Times Rolled:"})}),Object(P.jsx)(d.a,{className:n.stat,children:Object(P.jsx)(u.a,{primary:(a=e,C(a).length)})}),Object(P.jsx)(d.a,{className:n.statLabel,children:Object(P.jsx)(u.a,{primary:"20's Rolled:"})}),Object(P.jsx)(d.a,{className:n.stat,children:Object(P.jsx)(u.a,{primary:L(e)})}),Object(P.jsx)(d.a,{className:n.statLabel,children:Object(P.jsx)(u.a,{primary:"1's Rolled:"})}),Object(P.jsx)(d.a,{className:n.stat,children:Object(P.jsx)(u.a,{primary:w(e)})}),Object(P.jsx)(d.a,{className:n.statLabel,children:Object(P.jsx)(u.a,{primary:"Last Roll:"})}),Object(P.jsx)(d.a,{className:n.stat,children:Object(P.jsx)(u.a,{primary:F(e)})})]})}),Object(P.jsx)(O.a,{})]});var a}));return 0==t.length?Object(P.jsxs)("div",{children:[Object(P.jsx)(m.a,{position:"static",children:Object(P.jsx)(v.a,{children:Object(P.jsx)(f.a,{variant:"h6",children:"Dice"})})}),Object(P.jsxs)(p.a,{className:n.noStats,onClick:function(){return e="/addRoll",void i.push(e);var e},children:[Object(P.jsx)(k.a,{style:{fontSize:40},color:"Secondary"}),Object(P.jsx)(f.a,{color:"textSecondary",children:"Add dice to see stats!"})]}),Object(P.jsx)(I,{})]}):Object(P.jsxs)("div",{children:[Object(P.jsx)(m.a,{position:"static",children:Object(P.jsx)(v.a,{children:Object(P.jsx)(f.a,{variant:"h6",children:"Dice"})})}),Object(P.jsx)(p.a,{children:Object(P.jsx)(h.a,{className:n.list,children:B})}),Object(P.jsx)(I,{})]})},E=t(154),H=t(165),J=t(159),W=t(164),M=t(163),V=t(63),G=t.n(V),K=function(e){return Object(P.jsx)(M.a,Object(r.a)({elevation:6,variant:"filled"},e))},Q=Object(o.a)({root:{height:400,margin:16,textAlign:"center"}}),U=function(e){var a=e.appAddData,t=Q(),l=Object(A.f)(),n=Object(c.useState)(!1),i=Object(j.a)(n,2),s=i[0],r=i[1],o=function(e,a){"clickaway"!==a&&r(!1)},d=Object(c.useState)(""),b=Object(j.a)(d,2),u=b[0],O=b[1];return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(m.a,{position:"static",children:Object(P.jsxs)(v.a,{children:[Object(P.jsx)(E.a,{onClick:function(){return l.goBack()},children:Object(P.jsx)(G.a,{})}),Object(P.jsx)(f.a,{variant:"h6",children:"Add Die"})]})}),Object(P.jsx)(p.a,{children:Object(P.jsxs)("div",{className:t.root,children:[Object(P.jsx)(H.a,{required:!0,id:"new-die-name",label:"Die Name - Required",placeholder:"Enter die name",variant:"outlined",margin:"normal",position:"center",value:u.dieName,onChange:function(e){var a={name:e.target.value};O(a)}}),Object(P.jsx)("br",{}),Object(P.jsx)("br",{}),Object(P.jsx)(J.a,{variant:"contained",color:"secondary",onClick:function(){if(!u.name)return alert("Please enter a name!");console.log(u.name),a({roll:null,die:u.name}),r(!0)},children:"Add Die"}),Object(P.jsx)(W.a,{open:s,autoHideDuration:3e3,onClose:o,children:Object(P.jsx)(K,{onClose:o,severity:"success",children:"Die added!"})})]})})]})},X=t(56),Y=t(160),Z=t(168),$=t(157),_=t(167),ee=t(162),ae=function(e){return Object(P.jsx)(M.a,Object(r.a)({elevation:6,variant:"filled"},e))},te=Object(o.a)({root:{textAlign:"center"},slider:{height:500,margin:"1em"},formControl:{minWidth:120},button:{display:"Block",margin:"1em auto 4em auto"}}),ce=[{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"},{value:10,label:"10"},{value:11,label:"11"},{value:12,label:"12"},{value:13,label:"13"},{value:14,label:"14"},{value:15,label:"15"},{value:16,label:"16"},{value:17,label:"17"},{value:18,label:"18"},{value:19,label:"19"},{value:20,label:"20"}],le=function(e){var a=e.appAddData,t=e.appDiceNames,l=te(),n=Object(A.f)(),i=Object(c.useState)(!1),s=Object(j.a)(i,2),o=s[0],d=s[1],b=function(e,a){"clickaway"!==a&&d(!1)},u=t.map((function(e){return Object(P.jsx)(Y.a,{value:e,children:e})})),O=Object(c.useState)(10),x=Object(j.a)(O,2),h=x[0],g=x[1],N=Object(c.useState)(""),y=Object(j.a)(N,2),D=y[0],C=y[1],R={roll:h,die:D},S=Object(c.useState)(R),k=Object(j.a)(S,2),L=k[0],w=k[1],F=function(e,a){var t=Object(r.a)(Object(r.a)({},L),{},Object(X.a)({},e,a));w(t)};return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(m.a,{position:"static",children:Object(P.jsxs)(v.a,{children:[Object(P.jsx)(E.a,{onClick:function(){return n.goBack()},children:Object(P.jsx)(G.a,{})}),Object(P.jsx)(f.a,{variant:"h6",children:"Add Roll"})]})}),Object(P.jsxs)(p.a,{className:l.root,children:[Object(P.jsx)("div",{className:l.slider,children:Object(P.jsx)(Z.a,{valueLabelDisplay:"auto",step:1,marks:ce,min:1,max:20,orientation:"vertical",onChange:function(e,a){g(a),F("roll",a)},defaultValue:10,value:h})}),Object(P.jsxs)($.a,{className:l.formControl,children:[Object(P.jsx)(_.a,{id:"die-select-label",children:"Die"}),Object(P.jsxs)(ee.a,{labelId:"die-select-label",id:"die-select",value:D,onChange:function(e){C(e.target.value),F("die",e.target.value)},children:[Object(P.jsx)(Y.a,{value:"",children:Object(P.jsx)("em",{children:"None"})}),u]})]}),Object(P.jsx)(J.a,{className:l.button,variant:"contained",color:"secondary",onClick:function(){if(!L.die)return alert("Please choose a die!");console.log(L.die),console.log(L.roll),a(L),d(!0)},children:"Add Roll"}),Object(P.jsx)(W.a,{open:o,autoHideDuration:3e3,onClose:b,children:Object(P.jsx)(ae,{onClose:b,severity:"success",children:"Roll added!"})})]})]})},ne=t(42),ie=t(87),se=t(161),re=Object(ie.a)({palette:{primary:{main:"#b71c1c"},secondary:{main:"#00bfa5",contrastText:"#fff"}}}),je=function(){var e=Object(c.useState)({allRolls:[]}),a=Object(j.a)(e,2),t=a[0],l=a[1];console.log(t);var n=function(e){l(Object(r.a)(Object(r.a)({},t),{},{allRolls:[].concat(Object(s.a)(t.allRolls),[{dieName:e.die,roll:e.roll,time:Date.now()}])})),console.log(t)},i=t.allRolls.map((function(e){return e.dieName}));return i=Object(s.a)(new Set(i)),console.log("dice names: "+i),Object(P.jsx)(se.a,{theme:re,children:Object(P.jsx)(ne.a,{children:Object(P.jsxs)(A.c,{children:[Object(P.jsx)(A.a,{path:"/addRoll",children:Object(P.jsx)(le,{appAddData:n,appDiceNames:i})}),Object(P.jsx)(A.a,{path:"/addDie",children:Object(P.jsx)(U,{appAddData:n})}),Object(P.jsx)(A.a,{path:"/",children:Object(P.jsx)(z,{appDiceNames:i,appData:t})})]})})})},oe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,169)).then((function(a){var t=a.getCLS,c=a.getFID,l=a.getFCP,n=a.getLCP,i=a.getTTFB;t(e),c(e),l(e),n(e),i(e)}))};i.a.render(Object(P.jsx)(l.a.StrictMode,{children:Object(P.jsx)(je,{})}),document.getElementById("root")),oe()}},[[108,1,2]]]);
//# sourceMappingURL=main.f579acc7.chunk.js.map