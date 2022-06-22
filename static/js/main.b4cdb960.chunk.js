(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{149:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(42),i=n.n(a),s=n(55),o=n(38),l=n(21),j=n(62),u=n(66),d=Object(j.b)({name:"userAuth",initialState:{user:null,credential:null},reducers:{setUser:function(e,t){e.user=t.payload.user,e.credential=u.a.credentialFromResult(t.payload)},removeUser:function(e){e.user=null,e.credential=null}}}),b=d.actions,h=b.setUser,x=b.removeUser,p=function(e){return e.user.user},O=function(e){return e.user.credential},f=d.reducer,m=function(){var e=Object(o.c)(p);return{isAuth:!!e,user:e,credential:Object(o.c)(O)}},g=n(11),v=n(215),y=n(211),w=n(217),k=n(218),A=n(219),C=n(220),S=n(113),I=n(210),E=n(212),D=n(207),G=n(213),z=n(111),L=n.n(z),U=n(94),F=n.n(U),T=n(83),W="/login",P="/chat",R="/home",N=function(){return Object(o.b)()},B=(o.c,n(4)),M=["Products","Pricing"],H=["Profile","Account","Dashboard","Logout"],Q=function(){var e=m(),t=e.isAuth,n=e.user,c=N(),a=r.a.useState(null),i=Object(g.a)(a,2),o=i[0],l=i[1],j=r.a.useState(null),u=Object(g.a)(j,2),d=u[0],b=u[1],h=function(){l(null)},p=function(e){switch(e.currentTarget.textContent){case"Logout":c(x())}b(null)};return Object(B.jsx)("header",{children:Object(B.jsx)(v.a,{position:"static",children:Object(B.jsx)(y.a,{maxWidth:"xl",children:Object(B.jsxs)(w.a,{disableGutters:!0,children:[Object(B.jsx)(F.a,{sx:{display:{xs:"none",md:"flex"},mr:1}}),Object(B.jsx)(k.a,{variant:"h6",noWrap:!0,sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",flexGrow:1,fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"Chat roulette"}),Object(B.jsxs)(A.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[Object(B.jsx)(C.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){l(e.currentTarget)},color:"inherit",children:Object(B.jsx)(L.a,{})}),Object(B.jsx)(S.a,{id:"menu-appbar",anchorEl:o,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(o),onClose:h,sx:{display:{xs:"block",md:"none"}},children:M.map((function(e){return Object(B.jsx)(I.a,{onClick:h,children:Object(B.jsx)(k.a,{textAlign:"center",children:e})},e)}))})]}),Object(B.jsx)(F.a,{sx:{display:{xs:"flex",md:"none"},mr:1}}),Object(B.jsx)(k.a,{variant:"h5",noWrap:!0,sx:{mr:2,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"Chat roulette"}),Object(B.jsx)(A.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:M.map((function(e){return Object(B.jsx)(E.a,{onClick:h,sx:{my:2,color:"white",display:"block"},children:e},e)}))}),Object(B.jsx)(A.a,{sx:{flexGrow:0},children:t&&n?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(D.a,{title:"Open settings",children:Object(B.jsx)(C.a,{onClick:function(e){b(e.currentTarget)},sx:{p:0},children:Object(B.jsx)(G.a,{alt:"Remy Sharp",src:n.photoURL||""})})}),Object(B.jsx)(S.a,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:d,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(d),onClose:p,children:H.map((function(e){return Object(B.jsx)(I.a,{onClick:p,children:Object(B.jsx)(k.a,{textAlign:"center",children:e})},Object(T.a)())}))})]}):Object(B.jsx)(E.a,{children:Object(B.jsx)(s.b,{to:W,children:"Login"})})})]})})})})},Y=Object(c.memo)((function(){return Object(B.jsx)("div",{children:Object(B.jsx)("h1",{children:"HOME PAGE"})})})),J=r.a.memo((function(){return Object(B.jsx)("div",{children:Object(B.jsx)("h1",{children:"NOT FOUND PAGE"})})})),X=n(1),_=n.n(X),K=n(6),q=n(214),V=n(112),Z=n(54),$=Object(V.a)({apiKey:"AIzaSyAXfGe3IcD2w0YbDN7wLLQ6ElaSTcfsYkQ",authDomain:"chat-react-eaa0f.firebaseapp.com",projectId:"chat-react-eaa0f",storageBucket:"chat-react-eaa0f.appspot.com",messagingSenderId:"254749271243",appId:"1:254749271243:web:17ecfe4efe5f947fd1674e",measurementId:"G-0RNETXFQ7W"}),ee={app:$,database:Object(Z.a)($,"https://chat-react-eaa0f-default-rtdb.europe-west1.firebasedatabase.app")},te=Object(j.b)({name:"firebase",initialState:ee,reducers:{}}),ne=function(e){return e.firebaseApp.app},ce=function(e){return e.firebaseApp.database},re=te.reducer,ae=Object(c.memo)((function(){var e=Object(o.c)(ne),t=Object(u.b)(e),n=N(),r=Object(l.g)(),a=Object(c.useCallback)(Object(K.a)(_.a.mark((function e(){var c,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=new u.a,e.next=4,Object(u.c)(t,c);case 4:a=e.sent,n(h(a)),r(P),e.next=13;break;case 9:throw e.prev=9,e.t0=e.catch(0),console.log(e.t0),new Error("some issue with sing in with google");case 13:case"end":return e.stop()}}),e,null,[[0,9]])}))),[t,r]);return Object(B.jsx)(y.a,{children:Object(B.jsx)(q.a,{alignItems:"center",justifyContent:"center",display:"flex",style:{height:window.innerHeight-64},children:Object(B.jsx)(q.a,{style:{width:400,background:"lightgray"},container:!0,alignItems:"center",direction:"column",children:Object(B.jsx)(A.a,{p:5,children:Object(B.jsx)(E.a,{variant:"outlined",onClick:a,children:"Sing in with google"})})})})})})),ie=n(18),se=n(208),oe=Object(c.memo)((function(){var e,t=m().user,n=Object(o.c)(ce),r=Object(Z.d)(n,"posts"),a=Object(c.useState)([]),i=Object(g.a)(a,2),s=i[0],l=i[1],j=Object(c.useState)(""),u=Object(g.a)(j,2),d=u[0],b=u[1];return Object(c.useEffect)((function(){e=Object(Z.b)(r,(function(e){l((function(t){return[].concat(Object(ie.a)(t),[e.val()])}))}))}),[]),Object(c.useEffect)((function(){return function(){e()}}),[]),Object(B.jsx)(y.a,{children:Object(B.jsxs)(q.a,{container:!0,alignItems:"center",justifyContent:"center",direction:"column",display:"flex",style:{height:window.innerHeight-64},children:[Object(B.jsx)("div",{style:{width:"80%",height:"70vh",border:"1px solid gray",overflowY:"auto"},children:s.map((function(e){return Object(B.jsxs)("div",{style:{margin:10,border:(null===t||void 0===t?void 0:t.uid)===e.uID?"2px solid green":"2px solid red",marginLeft:(null===t||void 0===t?void 0:t.uid)===e.uID?"auto":"10px",width:"fit-content",padding:5},children:[Object(B.jsxs)(q.a,{container:!0,children:[Object(B.jsx)(G.a,{src:e.profile_picture}),Object(B.jsx)("div",{children:e.username})]}),Object(B.jsx)("div",{children:e.message})]},Object(T.a)())}))}),Object(B.jsxs)(q.a,{container:!0,alignItems:"flex-end",direction:"column",style:{width:"80%"},children:[Object(B.jsx)(se.a,{style:{marginTop:10},fullWidth:!0,maxRows:1,multiline:!0,size:"small",id:"outlined-basic",label:"Enter message",variant:"outlined",value:d,onChange:function(e){var t=e.target;return b(t.value)}}),Object(B.jsx)(E.a,{size:"small",onClick:function(){var e=Object(Z.c)(r);Object(Z.e)(e,{uID:null===t||void 0===t?void 0:t.uid,username:null===t||void 0===t?void 0:t.displayName,email:null===t||void 0===t?void 0:t.email,profile_picture:null===t||void 0===t?void 0:t.photoURL,message:d}),b("")},children:"Send"})]})]})})})),le=(n(149),Object(c.memo)((function(){var e=m().isAuth;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(Q,{}),e?Object(B.jsxs)(l.d,{children:[Object(B.jsx)(l.b,{path:"/",element:Object(B.jsx)(l.a,{to:R,replace:!0})}),Object(B.jsx)(l.b,{path:R,element:Object(B.jsx)(Y,{})}),Object(B.jsx)(l.b,{path:P,element:Object(B.jsx)(oe,{})}),Object(B.jsx)(l.b,{path:"*",element:Object(B.jsx)(J,{})})]}):Object(B.jsxs)(l.d,{children:[Object(B.jsx)(l.b,{path:"/",element:Object(B.jsx)(l.a,{to:R,replace:!0})}),Object(B.jsx)(l.b,{path:R,element:Object(B.jsx)(Y,{})}),Object(B.jsx)(l.b,{path:W,element:Object(B.jsx)(ae,{})}),Object(B.jsx)(l.b,{path:"*",element:Object(B.jsx)(J,{})})]})]})}))),je=Object(j.a)({reducer:{user:f,firebaseApp:re},middleware:function(e){return e({serializableCheck:{ignoredActions:["userAuth/setUser"],ignoredPaths:["user.user","user.credential","firebaseApp.app","firebaseApp.database"]}})}});n(150);i.a.render(Object(B.jsx)(s.a,{children:Object(B.jsx)(o.a,{store:je,children:Object(B.jsx)(r.a.StrictMode,{children:Object(B.jsx)(le,{})})})}),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.b4cdb960.chunk.js.map