(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{173:function(e,t,n){},181:function(e,t,n){},182:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(49),i=n.n(a),o=n(57),s=n(43),u=n(22),l=n(55),j=n(64),d=Object(l.c)({name:"user",initialState:{user:null,credential:null},reducers:{setUser:function(e,t){e.user=t.payload.user,e.credential=j.a.credentialFromResult(t.payload)},removeUser:function(e){e.user=null,e.credential=null}}}),b=d.actions,h=b.setUser,f=b.removeUser,O=function(e){return e.user.user},p=function(e){return e.user.credential},x=d.reducer,m=function(){var e=Object(s.c)(O);return{isAuth:!!e,user:e,credential:Object(s.c)(p)}},v=n(11),g=n(249),w=n(232),E=n(251),y=n(101),k=n(252),C=n(253),I=n(139),R=n(245),D=n(246),S=n(241),A=n(247),L=n(128),_=n.n(L),T=n(111),P=n.n(T),M=n(94),N="/login",U="/videochat",G="/chat",z="/home",V=function(){return Object(s.b)()},W=s.c,Y=n(4),H=["Chat","Home","Videochat"],F=["Profile","Logout"],Q=function(){var e=m(),t=e.isAuth,n=e.user,c=V(),a=Object(u.g)(),i=r.a.useState(null),s=Object(v.a)(i,2),l=s[0],j=s[1],d=r.a.useState(null),b=Object(v.a)(d,2),h=b[0],O=b[1],p=function(e){switch(e.currentTarget.textContent){case"Chat":a("chat");break;case"Home":a("home");break;case"Videochat":a("videochat")}j(null)},x=function(e){switch(e.currentTarget.textContent){case"Logout":c(f())}O(null)};return Object(Y.jsx)("header",{children:Object(Y.jsx)(g.a,{position:"static",children:Object(Y.jsx)(w.a,{maxWidth:"xl",children:Object(Y.jsxs)(E.a,{disableGutters:!0,children:[Object(Y.jsx)(P.a,{sx:{display:{xs:"none",md:"flex"},mr:1}}),Object(Y.jsx)(y.a,{variant:"h6",noWrap:!0,sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",flexGrow:1,fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"Chat"}),Object(Y.jsxs)(k.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[Object(Y.jsx)(C.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){j(e.currentTarget)},color:"inherit",children:Object(Y.jsx)(_.a,{})}),Object(Y.jsx)(I.a,{id:"menu-appbar",anchorEl:l,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(l),onClose:p,sx:{display:{xs:"block",md:"none"}},children:H.map((function(e){return Object(Y.jsx)(R.a,{onClick:p,children:Object(Y.jsx)(y.a,{textAlign:"center",children:e})},e)}))})]}),Object(Y.jsx)(P.a,{sx:{display:{xs:"flex",md:"none"},mr:1}}),Object(Y.jsx)(y.a,{variant:"h5",noWrap:!0,sx:{mr:2,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"Chat"}),Object(Y.jsx)(k.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:H.map((function(e){return Object(Y.jsx)(D.a,{onClick:p,sx:{my:2,color:"white",display:"block"},children:e},e)}))}),Object(Y.jsx)(k.a,{sx:{flexGrow:0},children:t&&n?Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(S.a,{title:"Open settings",children:Object(Y.jsx)(C.a,{onClick:function(e){O(e.currentTarget)},sx:{p:0},children:Object(Y.jsx)(A.a,{alt:"Remy Sharp",src:n.photoURL||""})})}),Object(Y.jsx)(I.a,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:h,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(h),onClose:x,children:F.map((function(e){return Object(Y.jsx)(R.a,{onClick:x,children:Object(Y.jsx)(y.a,{textAlign:"center",children:e})},Object(M.a)())}))})]}):Object(Y.jsx)(D.a,{children:Object(Y.jsx)(o.b,{to:N,children:"Login"})})})]})})})})},B=Object(c.memo)((function(){return Object(Y.jsx)("div",{children:Object(Y.jsx)("h1",{children:"HOME PAGE"})})})),J=r.a.memo((function(){return Object(Y.jsx)("div",{children:Object(Y.jsx)("h1",{children:"NOT FOUND PAGE"})})})),X=n(1),q=n.n(X),K=n(6),Z=n(248),$=n(130),ee=n(65),te=Object($.a)({apiKey:"AIzaSyAXfGe3IcD2w0YbDN7wLLQ6ElaSTcfsYkQ",authDomain:"chat-react-eaa0f.firebaseapp.com",projectId:"chat-react-eaa0f",storageBucket:"chat-react-eaa0f.appspot.com",messagingSenderId:"254749271243",appId:"1:254749271243:web:17ecfe4efe5f947fd1674e",measurementId:"G-0RNETXFQ7W"}),ne={app:te,database:Object(ee.a)(te,"https://chat-react-eaa0f-default-rtdb.europe-west1.firebasedatabase.app")},ce=Object(l.c)({name:"firebase",initialState:ne,reducers:{}}),re=function(e){return e.firebaseApp.app},ae=function(e){return e.firebaseApp.database},ie=ce.reducer,oe=Object(c.memo)((function(){var e=Object(s.c)(re),t=Object(j.b)(e),n=V(),r=Object(u.g)(),a=Object(c.useCallback)(Object(K.a)(q.a.mark((function e(){var c,a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=new j.a,e.next=4,Object(j.c)(t,c);case 4:a=e.sent,n(h(a)),r(G),e.next=13;break;case 9:throw e.prev=9,e.t0=e.catch(0),console.log(e.t0),new Error("some issue with sing in with google");case 13:case"end":return e.stop()}}),e,null,[[0,9]])}))),[t,r]);return Object(Y.jsx)(w.a,{children:Object(Y.jsx)(Z.a,{alignItems:"center",justifyContent:"center",display:"flex",style:{height:window.innerHeight-64},children:Object(Y.jsx)(Z.a,{style:{width:400,background:"lightgray"},container:!0,alignItems:"center",direction:"column",children:Object(Y.jsx)(k.a,{p:5,children:Object(Y.jsx)(D.a,{variant:"outlined",onClick:a,children:"Sing in with google"})})})})})})),se=n(20),ue=n(242),le=n(131),je=n.n(le),de=Object(c.memo)((function(){var e,t=m().user,n=Object(s.c)(ae),r=Object(ee.d)(n,"posts"),a=Object(c.useState)([]),i=Object(v.a)(a,2),o=i[0],u=i[1],l=Object(c.useState)(""),j=Object(v.a)(l,2),d=j[0],b=j[1];return Object(c.useEffect)((function(){e=Object(ee.b)(r,(function(e){u((function(t){return[].concat(Object(se.a)(t),[e.val()])}))}))}),[]),Object(c.useEffect)((function(){return function(){e()}}),[]),Object(Y.jsx)(w.a,{children:Object(Y.jsxs)(Z.a,{container:!0,alignItems:"center",justifyContent:"center",direction:"column",display:"flex",style:{height:window.innerHeight-64},children:[Object(Y.jsx)("div",{style:{width:"80%",height:"70vh",border:"1px solid gray",overflowY:"auto"},children:o.map((function(e){return Object(Y.jsxs)("div",{style:{margin:10,border:(null===t||void 0===t?void 0:t.uid)===e.uID?"2px solid green":"2px solid red",marginLeft:(null===t||void 0===t?void 0:t.uid)===e.uID?"auto":"10px",width:"fit-content",padding:5},children:[Object(Y.jsxs)(Z.a,{container:!0,children:[Object(Y.jsx)(A.a,{src:e.profile_picture}),Object(Y.jsx)("div",{children:e.username})]}),Object(Y.jsx)("div",{children:e.message})]},Object(M.a)())}))}),Object(Y.jsxs)(Z.a,{container:!0,alignItems:"flex-end",direction:"column",style:{width:"80%"},children:[Object(Y.jsx)(ue.a,{style:{marginTop:10},fullWidth:!0,maxRows:1,multiline:!0,size:"small",id:"outlined-basic",label:"Enter message",variant:"outlined",value:d,onChange:function(e){var t=e.target;return b(t.value)}}),Object(Y.jsx)(D.a,{variant:"contained",size:"small",onClick:function(){var e=Object(ee.c)(r);Object(ee.e)(e,{uID:null===t||void 0===t?void 0:t.uid,username:null===t||void 0===t?void 0:t.displayName,email:null===t||void 0===t?void 0:t.email,profile_picture:null===t||void 0===t?void 0:t.photoURL,message:d}),b("")},endIcon:Object(Y.jsx)(je.a,{}),children:"Send"})]})]})})})),be=(n(173),n(39)),he=n.n(be),fe=n(137),Oe=Object(fe.a)("https://react-online-chat-sign-server.herokuapp.com:1488",{"force new connection":!0,reconnetionAttempts:"Infinity",timeout:15e3,transports:["websocket"]}),pe={socket:Oe,rooms:[]},xe=Object(l.b)("videochat/updateRooms",function(){var e=Object(K.a)(q.a.mark((function e(t,n){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,n.dispatch)(ve(t));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),me=Object(l.c)({name:"videochat",initialState:pe,reducers:{setRooms:function(e,t){e.rooms=t.payload}}}),ve=me.actions.setRooms,ge=function(e){return e.videochat.rooms},we=function(e){return e.videochat.socket},Ee=me.reducer,ye=n(254),ke=n(255),Ce=n(256),Ie=n(238),Re=n(239),De=n(133),Se=n.n(De),Ae=n(134),Le=n.n(Ae),_e=n(135),Te=n.n(_e),Pe=n(244),Me=Object(c.memo)((function(e){var t=e.rooms,n=Object(u.g)(),r=Object(c.useCallback)((function(){n("".concat(U,"/").concat(Object(Pe.a)()))}),[]),a=Object(c.useCallback)((function(e){n("".concat(U,"/").concat(e))}),[]);return Object(Y.jsx)(w.a,{children:Object(Y.jsxs)(Z.a,{container:!0,alignItems:"center",justifyContent:"center",direction:"column",display:"flex",style:{height:window.innerHeight-68},children:[Object(Y.jsx)(ye.a,{sx:{width:"100%",overflowY:"auto",height:"70vh",padding:0},component:"nav","aria-labelledby":"avalible-rooms",subheader:Object(Y.jsx)(ke.a,{component:"div",id:"nested-list-subheader",children:"Avalible rooms"}),children:t.map((function(e){return Object(Y.jsx)(S.a,{title:"Click to join room",children:Object(Y.jsxs)(Ce.a,{onClick:function(){a(e)},children:[Object(Y.jsx)(Ie.a,{children:Object(Y.jsx)(Se.a,{})}),Object(Y.jsx)(Re.a,{sx:{wordWrap:"break-word"},primary:e}),Object(Y.jsx)(Ie.a,{children:Object(Y.jsx)(Le.a,{})})]})},e)}))}),Object(Y.jsx)(D.a,{variant:"outlined",endIcon:Object(Y.jsx)(Te.a,{}),onClick:r,children:"Create room"})]})})})),Ne=Object(c.memo)((function(){var e=W(ge),t=W(we),n=V();return Object(c.useEffect)((function(){t.on(he.a.SHARE_ROOMS,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.rooms,c=void 0===t?[]:t;n(xe(c))})),Oe.emit(he.a.REQUEST_ROOMS)}),[]),Object(Y.jsx)(Me,{rooms:e})})),Ue=n(240),Ge=n(2),ze=n(136),Ve="LOCAL_VIDEO",We=function(e){var t=function(e){var t=Object(c.useState)(e),n=Object(v.a)(t,2),r=n[0],a=n[1],i=Object(c.useRef)((function(e){return e})),o=Object(c.useCallback)((function(e,t){i.current=t,a((function(t){return"function"===typeof e?e(t):e}))}),[]);return Object(c.useEffect)((function(){i.current&&i.current(r)}),[r]),[r,o]}([]),n=Object(v.a)(t,2),r=n[0],a=n[1],i=Object(c.useRef)({}),o=Object(c.useRef)(null),s=Object(c.useRef)(Object(Ge.a)({},Ve,null)),u=Object(c.useCallback)((function(e,t){r.includes(e)||a((function(t){return[].concat(Object(se.a)(t),[e])}),t)}),[r,a]);Object(c.useEffect)((function(){function e(){return(e=Object(K.a)(q.a.mark((function e(t){var n,c,r;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.peerID,c=t.createOffer,!(n in i.current)){e.next=3;break}return e.abrupt("return",console.warn("Already connected to peer ".concat(n)));case 3:i.current[n]=new RTCPeerConnection({iceServers:Object(ze.freeice)()}),i.current[n].onicecandidate=function(e){e.candidate&&Oe.emit(he.a.RELAY_ICE,{peerID:n,iceCandidate:e.candidate})},r=0,i.current[n].ontrack=function(){var e=Object(K.a)(q.a.mark((function e(t){var a,l,j,d;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=Object(v.a)(t.streams,1),l=a[0],2===(r+=1)&&u(n,(function(){var e=s.current[n];e&&(e.srcObject=l)})),(j=o.current)&&j.getTracks().forEach((function(e){i.current[n].addTrack(e,j)})),!c){e.next=12;break}return e.next=8,i.current[n].createOffer();case 8:return d=e.sent,e.next=11,i.current[n].setLocalDescription(d);case 11:Oe.emit(he.a.RELAY_SDP,{peerID:n,sessionDescription:d});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Oe.on(he.a.ADD_PEER,(function(t){return e.apply(this,arguments)}))}),[]),Object(c.useEffect)((function(){Oe.on(he.a.REMOVE_PEER,(function(e){var t=e.peerID;i.current[t]&&i.current[t].close(),delete i.current[t],delete s.current[t],a((function(e){return e.filter((function(e){return e!==t}))}))}))}),[]),Object(c.useEffect)((function(){function e(){return(e=Object(K.a)(q.a.mark((function e(t){var n,c,r;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.peerID,c=t.sessionDescription,e.next=3,i.current[n].setRemoteDescription(new RTCSessionDescription(c));case 3:if("offer"!==c.type){e.next=10;break}return e.next=6,i.current[n].createAnswer();case 6:return r=e.sent,e.next=9,i.current[n].setLocalDescription(r);case 9:Oe.emit(he.a.RELAY_SDP,{peerID:n,sessionDescription:r});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Oe.on(he.a.SESSION_DESCRIPTION,(function(t){return e.apply(this,arguments)}))}),[]),Object(c.useEffect)((function(){Oe.on(he.a.ICE_CANDIDATE,(function(e){var t=e.peerID,n=e.iceCandidate;i.current[t].addIceCandidate(new RTCIceCandidate(n))}))}),[]),Object(c.useEffect)((function(){function t(){return(t=Object(K.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({audio:!0,video:{width:{min:1024,ideal:1280,max:1920},height:{min:576,ideal:720,max:1080}}});case 2:t=e.sent,o.current=t,u(Ve,(function(){var e=s.current.LOCAL_VIDEO;e&&o.current&&(e.volume=0,e.srcObject=o.current)}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){return t.apply(this,arguments)}().then((function(){return Oe.emit(he.a.JOIN,{room:e})})).catch((function(e){return console.error("Error getting userMedia",e)})),function(){o&&o.current&&(o.current.getTracks().forEach((function(e){e.stop()})),Oe.emit(he.a.LEAVE))}}),[e]);var l=Object(c.useCallback)((function(e,t){s.current[e]=t}),[]);return{clients:r,provideMediaRef:l}};var Ye=Object(c.memo)((function(){var e=Object(u.h)().id||"",t=We(e),n=t.clients,c=t.provideMediaRef,r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=Array.from({length:e}).reduce((function(e,t,n,c){return n%2===0&&e.push(c.slice(n,n+2)),e}),[]),n=t.length,c="".concat(100/n,"%");return t.map((function(e,t,n){return t===n.length-1&&1===e.length?[{width:"100%",height:c}]:e.map((function(){return{width:"50%",height:c}}))})).flat()}(n.length);return Object(Y.jsxs)(Ue.a,{children:[Object(Y.jsx)("h1",{children:"Videochat room"}),Object(Y.jsx)("h1",{children:e}),Object(Y.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",height:"70vh"},children:n.map((function(e,t){return Object(Y.jsx)("div",{style:r[t],children:Object(Y.jsx)("video",{ref:function(t){c(e,t)},width:"100%",height:"100%",autoPlay:!0,playsInline:!0,muted:e===Ve})},e)}))})]})})),He=Object(c.memo)((function(){var e=m().isAuth;return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(Q,{}),e?Object(Y.jsxs)(u.d,{children:[Object(Y.jsx)(u.b,{path:"/",element:Object(Y.jsx)(u.a,{to:z,replace:!0})}),Object(Y.jsx)(u.b,{path:z,element:Object(Y.jsx)(B,{})}),Object(Y.jsx)(u.b,{path:U,element:Object(Y.jsx)(Ne,{})}),Object(Y.jsx)(u.b,{path:"".concat(U,"/:id"),element:Object(Y.jsx)(Ye,{})}),Object(Y.jsx)(u.b,{path:G,element:Object(Y.jsx)(de,{})}),Object(Y.jsx)(u.b,{path:"*",element:Object(Y.jsx)(J,{})})]}):Object(Y.jsxs)(u.d,{children:[Object(Y.jsx)(u.b,{path:"/",element:Object(Y.jsx)(u.a,{to:z,replace:!0})}),Object(Y.jsx)(u.b,{path:z,element:Object(Y.jsx)(B,{})}),Object(Y.jsx)(u.b,{path:N,element:Object(Y.jsx)(oe,{})}),Object(Y.jsx)(u.b,{path:"*",element:Object(Y.jsx)(J,{})})]})]})})),Fe=Object(l.a)({reducer:{user:x,firebaseApp:ie,videochat:Ee},middleware:function(e){return e({serializableCheck:{ignoredActions:["user/setUser"],ignoredPaths:["user.user","user.credential","firebaseApp.app","firebaseApp.database","videochat.socket"]}})}});n(181);i.a.render(Object(Y.jsx)(o.a,{children:Object(Y.jsx)(s.a,{store:Fe,children:Object(Y.jsx)(r.a.StrictMode,{children:Object(Y.jsx)(He,{})})})}),document.getElementById("root"))},39:function(e,t){e.exports={JOIN:"join",LEAVE:"leave",SHARE_ROOMS:"share-rooms",REQUEST_ROOMS:"request-rooms",ADD_PEER:"add-peer",REMOVE_PEER:"remove-peer",RELAY_SDP:"relay-sdp",RELAY_ICE:"relay-ice",ICE_CANDIDATE:"ice-candidate",SESSION_DESCRIPTION:"session-desription"}}},[[182,1,2]]]);
//# sourceMappingURL=main.63dda474.chunk.js.map