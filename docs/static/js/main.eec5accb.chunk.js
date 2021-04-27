(this["webpackJsonptca-dnd-dice"]=this["webpackJsonptca-dnd-dice"]||[]).push([[0],{104:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(10),i=t.n(c),r=(t(96),t(70)),s=t(30),o=t(18),j=t(137),d=t(105),b=t(143),u=t(144),O=t(145),x=t(146),m=t(147),h=t(148),v=t(149),p=t(61),f=t(150),g=t(81),N=t.n(g),D=t(82),y=t.n(D),C=t(83),k=t.n(C),R=t(140),A=t(142),S=t(80),w=t.n(S),L=t(79),B=t.n(L),F=t(15),G=t(4),P=Object(j.a)({root:{position:"fixed",bottom:"0",width:"100%"}});var I=function(){var e=P(),a=Object(F.f)(),t=Object(l.useState)(0),n=Object(o.a)(t,2),c=n[0],i=n[1],r=function(e){a.push(e)};return Object(G.jsxs)(R.a,{showLabels:!0,value:c,onChange:function(e,a){i(a)},className:e.root,children:[Object(G.jsx)(A.a,{label:"Add Dice",value:"/addDie",onClick:function(){return r("/addDie")},icon:Object(G.jsx)(B.a,{})}),Object(G.jsx)(A.a,{label:"Add Roll",value:"/addRoll",onClick:function(){return r("/addRoll")},icon:Object(G.jsx)(w.a,{})})]})},T=Object(j.a)({list:{margin:"0 0 2em 0"},statLabel:{paddingBottom:"0"},stat:{paddingTop:"0",maxWidth:"60%",margin:"0 0 0 2em"}}),q=function(e){var a,t=e.appDiceNames,n=e.appData,c=T(),i=Object(l.useState)(!0),r=Object(o.a)(i,2),s=r[0],j=r[1],g=function(){j(!s)},D=function(e){return a=(a=(a=n.allRolls.filter((function(a){return a.dieName==e}))).filter((function(e){return null!==e.roll}))).map((function(e){return e.roll})),console.log(e+" rolls: "+a),a},C=function(e){var a=D(e).reduce((function(e,a){return e+a}),0)/D(e).length;return a||"Never rolled"},R=function(e){return D(e).filter((function(e){return 1==e})).length},A=t.map((function(e){return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(d.a,{button:!0,onClick:g,children:[Object(G.jsx)(b.a,{children:Object(G.jsx)(N.a,{})}),Object(G.jsx)(u.a,{primary:e}),s?Object(G.jsx)(y.a,{}):Object(G.jsx)(k.a,{})]}),Object(G.jsx)(O.a,{}),Object(G.jsx)(x.a,{in:s,children:Object(G.jsxs)(m.a,{component:"div",disablePadding:!0,children:[Object(G.jsx)(d.a,{className:c.statLabel,children:Object(G.jsx)(u.a,{primary:"Average Roll:"})}),Object(G.jsx)(d.a,{className:c.stat,children:Object(G.jsx)(u.a,{primary:C(e)})}),Object(G.jsx)(d.a,{className:c.statLabel,children:Object(G.jsx)(u.a,{primary:"20's Rolled:"})}),Object(G.jsx)(d.a,{className:c.stat,children:Object(G.jsx)(u.a,{primary:(a=e,D(a).filter((function(e){return 20==e})).length)})}),Object(G.jsx)(d.a,{className:c.statLabel,children:Object(G.jsx)(u.a,{primary:"1's Rolled:"})}),Object(G.jsx)(d.a,{className:c.stat,children:Object(G.jsx)(u.a,{primary:R(e)})})]})}),Object(G.jsx)(O.a,{})]});var a}));return Object(G.jsxs)("div",{children:[Object(G.jsx)(h.a,{position:"static",children:Object(G.jsx)(v.a,{children:Object(G.jsx)(p.a,{variant:"h6",children:"Dice"})})}),Object(G.jsx)(f.a,{children:Object(G.jsx)(m.a,{className:c.list,children:A})}),Object(G.jsx)(I,{})]})},E=t(151),H=t(161),J=t(156),W=t(160),M=t(159),V=t(60),z=t.n(V),K=function(e){return Object(G.jsx)(M.a,Object(s.a)({elevation:6,variant:"filled"},e))},Q=Object(j.a)({root:{height:400,margin:16,textAlign:"center"}}),U=function(e){var a=e.appAddData,t=Q(),n=Object(F.f)(),c=Object(l.useState)(!1),i=Object(o.a)(c,2),r=i[0],s=i[1],j=function(e,a){"clickaway"!==a&&s(!1)},d=Object(l.useState)(""),b=Object(o.a)(d,2),u=b[0],O=b[1];return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(h.a,{position:"static",children:Object(G.jsxs)(v.a,{children:[Object(G.jsx)(E.a,{onClick:function(){return n.goBack()},children:Object(G.jsx)(z.a,{})}),Object(G.jsx)(p.a,{variant:"h6",children:"Add Die"})]})}),Object(G.jsx)(f.a,{children:Object(G.jsxs)("div",{className:t.root,children:[Object(G.jsx)(H.a,{required:!0,id:"new-die-name",label:"Die Name - Required",placeholder:"Enter die name",variant:"outlined",margin:"normal",position:"center",value:u.dieName,onChange:function(e){var a={name:e.target.value};O(a)}}),Object(G.jsx)("br",{}),Object(G.jsx)("br",{}),Object(G.jsx)(J.a,{variant:"contained",color:"secondary",onClick:function(){if(!u.name)return alert("Please enter a name!");console.log(u.name),a({roll:null,die:u.name}),s(!0)},children:"Add Die"}),Object(G.jsx)(W.a,{open:r,autoHideDuration:3e3,onClose:j,children:Object(G.jsx)(K,{onClose:j,severity:"success",children:"Die added!"})})]})})]})},X=t(56),Y=t(157),Z=t(164),$=t(154),_=t(163),ee=t(158),ae=function(e){return Object(G.jsx)(M.a,Object(s.a)({elevation:6,variant:"filled"},e))},te=Object(j.a)({root:{textAlign:"center"},slider:{height:500,margin:"1em"},formControl:{minWidth:120},button:{display:"Block",margin:"1em auto"}}),le=[{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"},{value:10,label:"10"},{value:11,label:"11"},{value:12,label:"12"},{value:13,label:"13"},{value:14,label:"14"},{value:15,label:"15"},{value:16,label:"16"},{value:17,label:"17"},{value:18,label:"18"},{value:19,label:"19"},{value:20,label:"20"}],ne=function(e){var a=e.appAddData,t=e.appDiceNames,n=te(),c=Object(F.f)(),i=Object(l.useState)(!1),r=Object(o.a)(i,2),j=r[0],d=r[1],b=function(e,a){"clickaway"!==a&&d(!1)},u=t.map((function(e){return Object(G.jsx)(Y.a,{value:e,children:e})})),O=Object(l.useState)(10),x=Object(o.a)(O,2),m=x[0],g=x[1],N=Object(l.useState)(""),D=Object(o.a)(N,2),y=D[0],C=D[1],k={roll:m,die:y},R=Object(l.useState)(k),A=Object(o.a)(R,2),S=A[0],w=A[1],L=function(e,a){var t=Object(s.a)(Object(s.a)({},S),{},Object(X.a)({},e,a));w(t)};return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(h.a,{position:"static",children:Object(G.jsxs)(v.a,{children:[Object(G.jsx)(E.a,{onClick:function(){return c.goBack()},children:Object(G.jsx)(z.a,{})}),Object(G.jsx)(p.a,{variant:"h6",children:"Add Roll"})]})}),Object(G.jsxs)(f.a,{className:n.root,children:[Object(G.jsx)("div",{className:n.slider,children:Object(G.jsx)(Z.a,{valueLabelDisplay:"auto",step:1,marks:le,min:1,max:20,orientation:"vertical",onChange:function(e,a){g(a),L("roll",a)},defaultValue:10,value:m})}),Object(G.jsxs)($.a,{className:n.formControl,children:[Object(G.jsx)(_.a,{id:"die-select-label",children:"Die"}),Object(G.jsxs)(ee.a,{labelId:"die-select-label",id:"die-select",value:y,onChange:function(e){C(e.target.value),L("die",e.target.value)},children:[Object(G.jsx)(Y.a,{value:"",children:Object(G.jsx)("em",{children:"None"})}),u]})]}),Object(G.jsx)(J.a,{className:n.button,variant:"contained",color:"secondary",onClick:function(){if(!S.die)return alert("Please choose a die!");console.log(S.die),console.log(S.roll),a(S),d(!0)},children:"Add Roll"}),Object(G.jsx)(W.a,{open:j,autoHideDuration:3e3,onClose:b,children:Object(G.jsx)(ae,{onClose:b,severity:"success",children:"Roll added!"})})]})]})},ce=t(42),ie=function(){var e=Object(l.useState)({allRolls:[{dieName:"Blue Speckled",roll:5,time:"9pm on saturday"},{dieName:"Green and Gold",roll:13,time:"9:30pm on saturday"},{dieName:"Green and Gold",roll:19,time:"10:30pm on saturday"},{dieName:"Green and Gold",roll:8,time:"11:30pm on saturday"}]}),a=Object(o.a)(e,2),t=a[0],n=a[1];console.log(t);var c=function(e){n(Object(s.a)(Object(s.a)({},t),{},{allRolls:[].concat(Object(r.a)(t.allRolls),[{dieName:e.die,roll:e.roll,time:Date.now()}])})),console.log(t)},i=t.allRolls.map((function(e){return e.dieName}));return i=Object(r.a)(new Set(i)),console.log("dice names: "+i),Object(G.jsx)(ce.a,{children:Object(G.jsxs)(F.c,{children:[Object(G.jsx)(F.a,{path:"/addRoll",children:Object(G.jsx)(ne,{appAddData:c,appDiceNames:i})}),Object(G.jsx)(F.a,{path:"/addDie",children:Object(G.jsx)(U,{appAddData:c})}),Object(G.jsx)(F.a,{path:"/",children:Object(G.jsx)(q,{appDiceNames:i,appData:t})})]})})},re=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,165)).then((function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,c=a.getLCP,i=a.getTTFB;t(e),l(e),n(e),c(e),i(e)}))};i.a.render(Object(G.jsx)(n.a.StrictMode,{children:Object(G.jsx)(ie,{})}),document.getElementById("root")),re()},96:function(e,a,t){}},[[104,1,2]]]);
//# sourceMappingURL=main.eec5accb.chunk.js.map