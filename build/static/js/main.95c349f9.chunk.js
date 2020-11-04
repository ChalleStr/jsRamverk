(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{217:function(e,t){},237:function(e,t,a){},238:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),o=a.n(l),c=a(88),s=a(6),i=a(30),m=a(25),h=a(36),u=a(86),d=a.n(u),p=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){fetch("https://me-api.charlottestrand.me/").then((function(e){return e.json()})).then((function(e){return l(e.about)}))})),r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement("img",{className:"img-me",src:d.a,alt:"Charlotte"}),r.a.createElement("div",{className:"me-div"},r.a.createElement("h1",null,"Om mig"),r.a.createElement("p",null,a))))},b=a(16),E=a(17),g=a(18),v=a(7),f=a(20),k=a(19),C=a(12),y=a(5),w=function(e){Object(f.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).state={kmom:""},n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(v.a)(n)),n}return Object(g.a)(a,[{key:"handleInputChange",value:function(e){this.setState(Object(b.a)({},e.target.name,"number"===e.target.type?parseInt(e.target.value):e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.history.push("/reports/week/"+this.state.kmom)}},{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"me-div"},r.a.createElement("h3",null,"Show reports"),r.a.createElement(y.a,{onSubmit:this.handleSubmit},r.a.createElement(y.a.Group,{controlId:"formBasicNumber"},r.a.createElement(y.a.Label,null,"Week:"),r.a.createElement(y.a.Control,{type:"number",name:"kmom",onChange:this.handleInputChange})),r.a.createElement(C.a,{variant:"primary",type:"submit"},"Get report")))))}}]),a}(r.a.Component),O={token:""},j=function(e){Object(f.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).state={week_nr:"",kmom_text:""},n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n.handleChange=n.handleChange.bind(Object(v.a)(n)),n.handleUpdateClick=n.handleUpdateClick.bind(Object(v.a)(n)),n}return Object(g.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,"number"===e.target.type?parseInt(e.target.value):e.target.value))}},{key:"handleUpdateClick",value:function(){this.props.history.push("/reports/add")}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),console.log(this.state),console.log(O.token),fetch("https://me-api.charlottestrand.me/reports/update",{method:"PUT",headers:{"x-access-token":O.token,"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify({week_nr:this.state.week_nr,kmom_text:this.state.kmom_text})}).then((function(e){return e.json()})).then((function(e){e.data?t.props.history.push("/reports/week/"+t.state.week_nr):e.error&&console.log(e.error)})).catch((function(e){console.log("Error:",e.message)}))}},{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"me-div"},r.a.createElement("h4",null,"Update report"),r.a.createElement(y.a,{onSubmit:this.handleSubmit},r.a.createElement(y.a.Group,{controlId:"formBasicNumber"},r.a.createElement(y.a.Label,null,"Choose a week (number):"),r.a.createElement(y.a.Control,{type:"number",name:"week_nr",onChange:this.handleChange,required:!0})),r.a.createElement(y.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(y.a.Label,null,"Text:"),r.a.createElement(y.a.Control,{as:"textarea",rows:"30",name:"kmom_text",onChange:this.handleChange,required:!0})),r.a.createElement(C.a,{className:"my-button",variant:"secondary",onClick:this.handleUpdateClick},"Go back")," ",r.a.createElement(C.a,{variant:"primary",type:"submit"},"Update")))))}}]),a}(r.a.Component),S=function(e){Object(f.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).state={email:"",password:""},n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(v.a)(n)),n}return Object(g.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(b.a)({},n,a))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),console.log(this.state),console.log(this.state.email),console.log(this.state.password),fetch("https://me-api.charlottestrand.me/register/",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify({email:this.state.email,password:this.state.password})}).then((function(e){return e.json()})).then((function(e){return t.setState}))}},{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"me-div"},r.a.createElement("h3",null,"Register new user"),r.a.createElement(y.a,{onSubmit:this.handleSubmit},r.a.createElement(y.a.Group,{controlId:"formBasicEmail"},r.a.createElement(y.a.Label,null,"E-mail:"),r.a.createElement(y.a.Control,{type:"email",name:"email",placeholder:"Enter email",value:this.state.email,onChange:this.handleInputChange,required:!0})),r.a.createElement(y.a.Group,{controlId:"formBasicPassword"},r.a.createElement(y.a.Label,null,"Password:"),r.a.createElement(y.a.Control,{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleInputChange,required:!0})),r.a.createElement(C.a,{variant:"primary",type:"submit"},"Register")))))}}]),a}(r.a.Component),N=function(e){Object(f.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).state={email:"",password:""},n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(v.a)(n)),n}return Object(g.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(b.a)({},n,a))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),console.log(this.state),console.log(this.state.email),console.log(this.state.password),fetch("https://me-api.charlottestrand.me/login/",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify({email:this.state.email,password:this.state.password})}).then((function(e){return e.json()})).then((function(e){console.log(e.data.token),O.token=e.data.token,t.props.history.push("/reports/add")})).catch((function(e){console.error(e),console.log("Error logging in.")}))}},{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"me-div"},r.a.createElement("h3",null,"Admin login"),r.a.createElement(y.a,{onSubmit:this.handleSubmit},r.a.createElement(y.a.Group,{controlId:"formBasicEmail"},r.a.createElement(y.a.Label,null,"E-mail:"),r.a.createElement(y.a.Control,{type:"email",name:"email",placeholder:"Enter email",value:this.state.email,onChange:this.handleInputChange,required:!0})),r.a.createElement(y.a.Group,{controlId:"formBasicPassword"},r.a.createElement(y.a.Label,null,"Password:"),r.a.createElement(y.a.Control,{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleInputChange,required:!0})),r.a.createElement(C.a,{variant:"primary",type:"submit"},"Login")))))}}]),a}(r.a.Component),I=function(e){Object(f.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).state={week_nr:"",kmom_text:""},n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n.handleChange=n.handleChange.bind(Object(v.a)(n)),n.handleUpdateClick=n.handleUpdateClick.bind(Object(v.a)(n)),n}return Object(g.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,"number"===e.target.type?parseInt(e.target.value):e.target.value))}},{key:"handleUpdateClick",value:function(){this.props.history.push("/reports/update")}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),console.log(this.state),console.log(O.token),fetch("https://me-api.charlottestrand.me/reports/add",{method:"POST",headers:{"x-access-token":O.token,"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify({week_nr:this.state.week_nr,kmom_text:this.state.kmom_text})}).then((function(e){201===e.status?(console.log("Det funkade!"),t.props.history.push("/reports/week/"+t.state.week_nr)):t.setState({status:"Funkade ej"})})).catch((function(e){console.error("Error: ",e)}))}},{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"me-div"},r.a.createElement("h2",null,"Welcome!"),r.a.createElement("p",null,"To update an existing report, click here:","  ",r.a.createElement(C.a,{variant:"secondary",onClick:this.handleUpdateClick},"Update reports")),r.a.createElement("h4",null,"New report"),r.a.createElement(y.a,{onSubmit:this.handleSubmit},r.a.createElement(y.a.Group,{controlId:"formBasicNumber"},r.a.createElement(y.a.Label,null,"Week (number):"),r.a.createElement(y.a.Control,{type:"number",name:"week_nr",onChange:this.handleChange,required:!0})),r.a.createElement(y.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(y.a.Label,null,"Text:"),r.a.createElement(y.a.Control,{as:"textarea",rows:"30",name:"kmom_text",onChange:this.handleChange,required:!0})),r.a.createElement(C.a,{variant:"primary",type:"submit"},"Submit")))))}}]),a}(r.a.Component),x=a(87),_=a.n(x),L=function(e){var t=e.match.params.kmom,a=Object(n.useState)(""),l=Object(h.a)(a,2),o=l[0],c=l[1];return Object(n.useEffect)((function(){fetch("https://me-api.charlottestrand.me/reports/week/".concat(t)).then((function(e){return e.json()})).then((function(e){c(e.data.kmom_text)})).catch((function(e){window.alert("There is no report with this week number!"),console.log("No report data:",e.message)}))})),r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,r.a.createElement("strong",null,"Week ",t)),r.a.createElement("div",{className:"content"},r.a.createElement(_.a,{source:o}))))},T=function(){return r.a.createElement(c.a,null,r.a.createElement(i.a,{className:"navbar",variant:"dark"},r.a.createElement(i.a.Brand,{href:"/"},"Charlotte"),r.a.createElement(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(i.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(m.a,{className:"navbar"},r.a.createElement(m.a.Link,{className:"navbar-link",href:"/"},"Hem"),r.a.createElement(m.a.Link,{href:"/"},"Me"),r.a.createElement(m.a.Link,{href:"/reports/show"},"Reports"),r.a.createElement(m.a.Link,{href:"/register"},"Register"),r.a.createElement(m.a.Link,{href:"/login"},"Login")))),r.a.createElement(s.a,{exact:!0,path:"/",component:p}),r.a.createElement(s.a,{path:"/reports/show",component:w}),r.a.createElement(s.a,{path:"/reports/add",component:I}),r.a.createElement(s.a,{path:"/reports/update",component:j}),r.a.createElement(s.a,{path:"/reports/week/:kmom",component:L}),r.a.createElement(s.a,{path:"/register",component:S}),r.a.createElement(s.a,{path:"/login",component:N}))};a(237),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(T,null),document.querySelector("#home")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,t,a){e.exports=a.p+"static/media/charlottestrand.664e77e5.jpg"},90:function(e,t,a){e.exports=a(238)}},[[90,1,2]]]);
//# sourceMappingURL=main.95c349f9.chunk.js.map