(this.webpackJsonplook=this.webpackJsonplook||[]).push([[0],{109:function(e,t,n){},160:function(e,t,n){},162:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(9),o=n.n(a),i=(n(109),n(93)),s=n(11),l=n(42),d=n(57),u=n(193),h=n(201),j=n(204),p=n(163),m=n(58),g=n(196),b=n(198),x=n(202),O=n(200),f=n(199),v=n(203),y=n(2),w=Object(u.a)({root:{maxWidth:345}});function I(e){var t=w(),n=[];return e.items.forEach((function(e){console.log(e.link);var r="";void 0!==e.photo&&(r=e.photo.smallThumbnail),n.push(Object(y.jsx)("div",{style:{display:"block"},children:Object(y.jsxs)(g.a,{className:t.root,children:[Object(y.jsxs)(b.a,{children:[Object(y.jsx)(f.a,{component:"img",alt:e.title,height:"140",image:r,title:e.title}),Object(y.jsxs)(O.a,{children:[Object(y.jsxs)(h.a,{gutterBottom:!0,variant:"h5",component:"h2",children:[" ",e.title,"  "]}),Object(y.jsxs)(h.a,{variant:"body2",color:"textSecondary",component:"p",children:[" ",e.author," "]})]})]}),Object(y.jsx)(x.a,{children:Object(y.jsx)(v.a,{size:"small",color:"primary",href:e.link,children:" Go to Book "})})]})}))})),Object(y.jsx)("div",{children:n})}var S,k,C=n(41),R=n.n(C),B=Object(u.a)((function(e){return{root4:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function E(e){var t=Object(m.b)(S||(S=Object(d.a)(["from{\n        width: 350px;\n    }\n    to{\n        width: ","px;\n    }"])),300*e+350);return m.a.div(k||(k=Object(d.a)(["\n    border:yellow 2px solid;\n    border-radius: 3px;\n    font-size : 40px;\n    background-color:rgba(42, 148, 197, 0.63);\n    width: 200px;\n    height: 70px;\n    position: relative;\n    animation-name: ",";\n    animation-duration: 7s;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n  "])),t)}var N=function(e){var t,n=B(),c="happy",a=0,o="happy",i=0,s=Object(r.useState)([]),d=Object(l.a)(s,2),u=d[0],m=d[1];if(t=localStorage.getItem("photos"),localStorage.getItem("photos")){t=JSON.parse(localStorage.getItem("photos"));var g={angry:0,disgust:0,fear:0,happy:0,sad:0,surprise:0,neutral:0},b={angry:0,disgust:0,fear:0,happy:0,sad:0,surprise:0,neutral:0};t.forEach((function(e){g[e[0].state]+=1,b[e[1].state]+=1})),["angry","disgust","fear","happy","sad","surprise","neutral"].forEach((function(e){a<b[e]&&(c=e,a=b[e]),i<g[e]&&(o=e,i=g[e])}));var x=i/t.length*100,O=a/t.length*100,f={angry:"\ud83d\ude20",disgust:"\ud83e\udd22",fear:"\ud83d\ude31",happy:"\ud83d\ude01",sad:"\u2639\ufe0f",surprise:"\ud83d\ude2e",neutral:"\ud83d\ude10"},v=[];R.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(o,"+inauthor:keyes&key=AIzaSyCuZr0YMzeP9337Lj2zVVeg5ew1C9eUFaw")).then((function(e){for(var t=e.data.items,n=0;n<6;n++){var r={title:t[n].volumeInfo.title,author:t[n].volumeInfo.authors[0],link:t[n].volumeInfo.previewLink,photo:t[n].volumeInfo.imageLinks};v.push(r)}m(v)})).catch((function(e){return console.log(e)}));var w=E(g.sad/t.length),S=E(g.happy/t.length),k=E(g.neutral/t.length),C=E(g.angry/t.length);return Object(y.jsxs)("div",{children:[Object(y.jsxs)(j.a,{children:[Object(y.jsxs)(p.a,{className:n.paper,children:[Object(y.jsx)("br",{}),Object(y.jsxs)(S,{children:[" Happy \ud83d\ude01 ",(g.happy/t.length*100).toFixed(1),"% "]}),Object(y.jsxs)(k,{children:[" Neutral\ud83d\ude10",(g.neutral/t.length*100).toFixed(1),"% "]}),Object(y.jsxs)(w,{children:[" Sad \u2639\ufe0f",(g.sad/t.length*100).toFixed(1),"% "]}),Object(y.jsxs)(C,{children:[" Angry \ud83d\ude20",(g.angry/t.length*100).toFixed(1),"% "]}),Object(y.jsx)("br",{})]}),Object(y.jsxs)(p.a,{className:n.paper,children:[Object(y.jsxs)("h1",{children:["Looking very ",o,"!! Here are few books you would prefer to read!"]}),Object(y.jsx)(j.a,{container:!0,spacing:3,children:Object(y.jsx)(I,{items:u})})]})]}),Object(y.jsxs)(j.a,{container:!0,spacing:3,children:[Object(y.jsx)(j.a,{item:!0,xs:6,children:Object(y.jsx)(p.a,{className:n.paper,children:Object(y.jsxs)(h.a,{gutterBottom:!0,variant:"h5",component:"h1",children:[x,"% ",f[o]," ",o," "]})})}),Object(y.jsx)(j.a,{item:!0,xs:6,children:Object(y.jsx)(p.a,{className:n.paper,children:Object(y.jsxs)(h.a,{gutterBottom:!0,variant:"h5",component:"h1",children:[O,"% ",f[c],c," "]})})})]})]})}return Object(y.jsx)("div",{})},A=n(206),T=n(205),D=Object(u.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},root2:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}},root3:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})),L=function(e){var t=D(),n=Object(r.useState)(null),c=Object(l.a)(n,2),a=c[0],o=c[1],i=Object(r.useState)([]),s=Object(l.a)(i,2),d=s[0],u=s[1];return Object(r.useEffect)((function(){var e=localStorage.getItem("photos");if(localStorage.getItem("photos")){e=JSON.parse(localStorage.getItem("photos")),console.log(e);var n=[];e.forEach((function(e){var r=e[0],c=e[1];n.push(Object(y.jsx)("div",{className:t.root3,children:Object(y.jsxs)(j.a,{container:!0,spacing:3,children:[Object(y.jsx)(j.a,{item:!0,xs:6,children:Object(y.jsxs)(p.a,{className:t.paper,children:[r.emoji,Object(y.jsxs)(h.a,{gutterBottom:!0,variant:"h5",component:"h2",children:[r.state," "]})]})}),Object(y.jsx)(j.a,{item:!0,xs:6,children:Object(y.jsxs)(p.a,{className:t.paper,children:[c.emoji,Object(y.jsxs)(h.a,{gutterBottom:!0,variant:"h5",component:"h2",children:[c.state," "]})]})})]})}))})),u(n)}else d.push(Object(y.jsx)("div",{children:" "}))}),[localStorage.getItem("photos")]),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:t.root3,children:Object(y.jsxs)(j.a,{container:!0,spacing:4,children:[Object(y.jsx)(j.a,{item:!0,xs:3,children:Object(y.jsx)(v.a,{id:"createbtn",onClick:function(){var t=Object(A.a)();e.history.push("/room/".concat(t))},variant:"contained",color:"primary",children:"Create Room"})}),Object(y.jsxs)(j.a,{item:!0,xs:3,children:[Object(y.jsx)(T.a,{required:!0,id:"roomId",label:"Enter RoomId",defaultValue:"",onChange:function(e){return o(e.target.value)}}),Object(y.jsx)(v.a,{id:"joinbtn",onClick:function(){console.log(a),e.history.push("/room/".concat(a))},variant:"contained",color:"secondary",children:" Join ROOM"})]}),Object(y.jsx)(j.a,{item:!0,xs:3,children:Object(y.jsx)(v.a,{id:"hangbtn",variant:"contained",disabled:!0,children:" Hang Up "})})]})}),Object(y.jsx)(N,{}),Object(y.jsx)("div",{children:d})]})},F=n(92),U=n.n(F),z=function(e){var t=500,n=500,r=localStorage.getItem("cam"),c=document.getElementById("video"),a=document.getElementById("partnerVideo"),o=document.getElementById("canvas"),i=document.getElementById("partnerCanvas"),s=(document.getElementById("photo"),document.getElementById("startbutton"),[]);function l(){var e=o.getContext("2d");e.fillStyle="#AAA",e.fillRect(0,0,o.width,o.height);o.toDataURL("image/png");var r=i.getContext("2d");r.fillStyle="#AAA",r.fillRect(0,0,o.width,o.height),function(){var e=o.getContext("2d"),r=i.getContext("2d");o.width=t,o.height=n,e.drawImage(c,0,0,t,n);var l=o.toDataURL("image/png");s.push(l),i.width=t,i.height=n,r.drawImage(a,0,0,t,n),l=i.toDataURL("image/png"),s.push(l)}()}return r&&null!=c&&(o.setAttribute("width",t),o.setAttribute("height",n),i.setAttribute("width",t),i.setAttribute("height",n)),null!==c&&l(),s},P=Object(u.a)({root:{maxWidth:345},media:{height:140}}),J=function(e){var t=P(),n=Object(r.useRef)(),c=Object(r.useRef)(),a=Object(r.useRef)(),o=Object(r.useRef)(),i=Object(r.useRef)(),s=Object(r.useRef)(),l=[];function d(e){var t=new RTCPeerConnection({iceServers:[{urls:"stun:stun.stunprotocol.org"},{urls:"turn:numb.viagenie.ca",credential:"muazkh",username:"webrtc@live.com"}]});return t.onicecandidate=m,t.ontrack=w,t.onnegotiationneeded=function(){return function(e){a.current.createOffer().then((function(e){return a.current.setLocalDescription(e)})).then((function(){var t={target:e,caller:o.current.id,sdp:a.current.localDescription};o.current.emit("offer",t)})).catch((function(e){return console.log(e)}))}(e)},t}function u(e){a.current=d();var t=new RTCSessionDescription(e.sdp);a.current.setRemoteDescription(t).then((function(){s.current.getTracks().forEach((function(e){return a.current.addTrack(e,s.current)}))})).then((function(){return a.current.createAnswer()})).then((function(e){return a.current.setLocalDescription(e)})).then((function(){var t={target:e.caller,caller:o.current.id,sdp:a.current.localDescription};o.current.emit("answer",t)}))}function p(e){var t=new RTCSessionDescription(e.sdp);a.current.setRemoteDescription(t).catch((function(e){return console.log(e)}))}function m(e){if(e.candidate){var t={target:i.current,candidate:e.candidate};o.current.emit("ice-candidate",t)}}function f(e){var t=new RTCIceCandidate(e);a.current.addIceCandidate(t).catch((function(e){return console.log(e)}))}function w(e){c.current.srcObject=e.streams[0]}return Object(r.useEffect)((function(){navigator.mediaDevices.getUserMedia({audio:!0,video:!0}).then((function(t){n.current.srcObject=t,s.current=t,localStorage.setItem("cam",!0),o.current=U.a.connect("/"),o.current.emit("join room",e.match.params.roomID),o.current.on("other user",(function(e){!function(e){a.current=d(e),s.current.getTracks().forEach((function(e){return a.current.addTrack(e,s.current)}))}(e),i.current=e})),o.current.on("user joined",(function(e){i.current=e})),o.current.on("offer",u),o.current.on("answer",p),o.current.on("ice-candidate",f)}))}),[]),Object(y.jsxs)(j.a,{container:!0,spacing:1,children:[Object(y.jsx)(j.a,{item:!0,xs:6,children:Object(y.jsxs)(g.a,{className:t.root,children:[Object(y.jsxs)(b.a,{children:[Object(y.jsx)("video",{id:"video",autoPlay:!0,ref:n,width:"100%",height:"100%"}),Object(y.jsxs)(O.a,{children:[Object(y.jsx)(h.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"User"}),Object(y.jsxs)(h.a,{variant:"body2",color:"textSecondary",component:"p",children:["room Id : ",e.match.params.roomID]})]})]}),Object(y.jsxs)(x.a,{children:[Object(y.jsx)(v.a,{size:"small",variant:"contained",color:"primary",id:"startbutton",onClick:function(){if("undefined"!==n.current&&"indefined"!==c){var e=0;alert("moment capturing started!");var t=setInterval((function(){var n=z(),r={headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*"}},c="",a="",o={angry:"\ud83d\ude20",disgust:"\ud83e\udd22",fear:"\ud83d\ude31",happy:"\ud83d\ude01",sad:"\u2639\ufe0f",surprise:"\ud83d\ude2e",neutral:"\ud83d\ude10"},i=[{state:"neutral",emoji:"\ud83d\ude10",baseurl:"photo[0]"},{state:"neutral",emoji:"\ud83d\ude10",baseurl:"photo[1]"}];R.a.post("http://143.110.249.208:1111/",{baseurl:n[0]},r).then((function(e){console.log(e),c=e.data,i[0].state=c.slice(0,c.length-3),i[0].emoji=o[i[0].state]})).catch((function(e){return console.log(e)})),R.a.post("http://143.110.249.208:1111/",{baseurl:n[1]},r).then((function(e){console.log(e),a=e.data,i[1].state=a.slice(0,a.length-3),i[1].emoji=o[i[1].state]})).catch((function(e){return console.log(e)})),l.push(i),e++;var s=localStorage.getItem("cam");7===e&&s&&clearInterval(t)}),6e3)}},children:"Start Capture Moments!"}),Object(y.jsx)(v.a,{size:"small",variant:"contained",color:"secondary",id:"hangbtn",onClick:function(){localStorage.setItem("cam",!1),document.getElementById("video").srcObject.getTracks().forEach((function(e){e.stop()})),null===!c.current&&c.current.srcObject.getTracks().forEach((function(e){return e.stop()})),null===!a.current&&a.current.close(),console.log("cam closed!!"),localStorage.setItem("photos",JSON.stringify(l)),setTimeout(e.history.push("/"),6e4)},children:"Hang Up"})]})]})}),Object(y.jsx)(j.a,{item:!0,xs:6,children:Object(y.jsx)(g.a,{className:t.root,children:Object(y.jsxs)(b.a,{children:[Object(y.jsx)("video",{id:"partnerVideo",autoPlay:!0,ref:c,width:"100%",height:"100%"}),Object(y.jsx)(O.a,{children:Object(y.jsx)(h.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Partner"})})]})})}),Object(y.jsx)(j.a,{item:!0,xs:12,children:[]})]})},M=(n(160),Object(u.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})));var V=function(){var e=M();return Object(y.jsx)("div",{className:e.root,children:Object(y.jsxs)(j.a,{container:!0,spacing:3,children:[Object(y.jsx)(j.a,{item:!0,xs:12,children:Object(y.jsx)(p.a,{className:e.paper,children:Object(y.jsx)(h.a,{gutterBottom:!0,variant:"h3",component:"h2",children:"LOOK "})})}),Object(y.jsx)(j.a,{item:!0,xs:12,children:Object(y.jsx)(p.a,{className:e.paper,children:Object(y.jsx)(i.a,{children:Object(y.jsxs)(s.c,{children:[Object(y.jsx)(s.a,{path:"/",exact:!0,component:L}),Object(y.jsx)(s.a,{path:"/room/:roomID",component:J})]})})})}),Object(y.jsx)(j.a,{item:!0,xs:12,children:Object(y.jsxs)(p.a,{className:e.paper,children:[Object(y.jsx)(h.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"recent captured moment! "}),Object(y.jsxs)("div",{id:"pictures",children:[Object(y.jsx)("img",{id:"photo"}),Object(y.jsx)("canvas",{id:"canvas",width:"320",height:"240"}),Object(y.jsx)("canvas",{id:"partnerCanvas",width:"320",height:"240"})]})]})})]})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,208)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};o.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(V,{})}),document.getElementById("root")),G()}},[[162,1,2]]]);
//# sourceMappingURL=main.2a55a63e.chunk.js.map