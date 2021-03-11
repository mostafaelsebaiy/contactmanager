(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(32),s=a.n(c),o=a(4),i=a(5),l=a(7),u=a(6),h=a(8),d=a.n(h),j=a(13),p=a(35),b=a(17),m=a(14),O=a.n(m),f=a(0),v=r.a.createContext(),x=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(b.a)(Object(b.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});case"Add_CONTACT":return Object(b.a)(Object(b.a)({},e),{},{contacts:[t.payload].concat(Object(p.a)(e.contacts))});case"UPDATE_CONTACT":return Object(b.a)(Object(b.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}},y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],dispatch:function(t){return e.setState((function(e){return x(e,t)}))}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(f.jsx)(v.Provider,{value:this.state,children:this.props.children})}}]),a}(n.Component),g=v.Consumer,C=a(15),N=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showContactInfo:!1},e.onShowClick=function(t){e.setState({showContactInfo:!e.state.showContactInfo})},e.onDeleteClick=function(){var e=Object(j.a)(d.a.mark((function e(t,a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({type:"DELETE_CONTACT",payload:t});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.email,r=t.name,c=t.phone,s=this.state.showContactInfo;return Object(f.jsx)(g,{children:function(t){var o=t.dispatch;return Object(f.jsxs)("div",{className:"card card-body mb-3",children:[Object(f.jsxs)("h1",{children:[r,"  ",Object(f.jsx)("i",{onClick:e.onShowClick,className:"fas fa-sort-down",style:{cursor:"pointer"}}),Object(f.jsx)("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,a,o)}),Object(f.jsx)(C.b,{to:"/edit/contact/".concat(a),children:Object(f.jsx)("i",{className:"fas fa-pencil-alt",style:{color:"black",cursor:"pointer",float:"right",marginRight:"1 rem"}})})]}),s?Object(f.jsxs)("ul",{className:"list-group",children:[Object(f.jsxs)("li",{className:"list-group-item",children:["Email:",n]}),Object(f.jsxs)("li",{className:"list-group-item",children:["Phone:",c]})]}):null]})}})}}]),a}(n.Component),k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(f.jsx)(g,{children:function(e){var t=e.contacts;return Object(f.jsxs)(r.a.Fragment,{children:[Object(f.jsxs)("h1",{className:"display-4 mb-2",children:[Object(f.jsx)("span",{className:"text-danger",children:"Contact"}),"  List"]}),t.map((function(e){return Object(f.jsx)(N,{contact:e},e.id)}))]})}})}}]),a}(n.Component),E=a(2),w=a(18),S=a(34),A=a.n(S),T=function(e){var t=e.label,a=e.name,n=e.type,r=e.placeholder,c=e.value,s=e.onChange,o=e.error;return Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:a,children:t}),Object(f.jsx)("input",{type:n,name:a,className:A()("form-control from-control-lg ",{"is-invalid":o}),placeholder:r,value:c,onChange:s}),o&&Object(f.jsx)("div",{className:"invalid-feedback",children:o})]})};T.defaultProps={type:"text"};var P=T,D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onSumbit=function(){var t=Object(j.a)(d.a.mark((function t(a,n){var r,c,s,o,i,l;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.email,s=r.name,o=r.phone,""!==s){t.next=5;break}return e.setState({errors:{name:"Name is requiured"}}),t.abrupt("return");case 5:if(""!==c){t.next=8;break}return e.setState({errors:{email:"Email is requiured"}}),t.abrupt("return");case 8:if(""!==o){t.next=11;break}return e.setState({errors:{phone:"Phone is requiured"}}),t.abrupt("return");case 11:return i={email:c,name:s,phone:o},t.next=14,O.a.post("https://jsonplaceholder.typicode.com/users",i);case 14:l=t.sent,a({type:"Add_CONTACT",payload:l.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 18:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.onChange=function(t){e.setState(Object(w.a)({},t.target.name,t.target.value))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,r=t.phone,c=t.errors;return Object(f.jsx)(g,{children:function(t){var s=t.dispatch;return Object(f.jsxs)("div",{className:"card mb-3",children:[Object(f.jsx)("div",{className:"card-header",children:"Add contact"}),Object(f.jsx)("div",{className:"card-body",children:Object(f.jsxs)("form",{onSubmit:e.onSumbit.bind(e,s),children:[Object(f.jsx)(P,{label:"Name",name:"name",placeholder:"Enter Name",value:a,onChange:e.onChange,error:c.name}),Object(f.jsx)(P,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:n,onChange:e.onChange,error:c.email}),Object(f.jsx)(P,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:r,onChange:e.onChange,error:c.phone}),Object(f.jsx)("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"})]})})]})}})}}]),a}(n.Component),q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onSumbit=function(){var t=Object(j.a)(d.a.mark((function t(a,n){var r,c,s,o,i,l,u;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.email,s=r.name,o=r.phone,""!==s){t.next=5;break}return e.setState({errors:{name:"Name is requiured"}}),t.abrupt("return");case 5:if(""!==c){t.next=8;break}return e.setState({errors:{email:"Email is requiured"}}),t.abrupt("return");case 8:if(""!==o){t.next=11;break}return e.setState({errors:{phone:"Phone is requiured"}}),t.abrupt("return");case 11:return i={name:s,email:c,phone:o},l=e.props.match.params.id,t.next=15,O.a.put("https://jsonplaceholder.typicode.com/users/".concat(l),i);case 15:u=t.sent,a({type:"UPDATE_CONTACT",payload:u.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 19:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.onChange=function(t){e.setState(Object(w.a)({},t.target.name,t.target.value))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,O.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({email:n.email,name:n.name,phone:n.phone});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,r=t.phone,c=t.errors;return Object(f.jsx)(g,{children:function(t){var s=t.dispatch;return Object(f.jsxs)("div",{className:"card mb-3",children:[Object(f.jsx)("div",{className:"card-header",children:"Edit contact"}),Object(f.jsx)("div",{className:"card-body",children:Object(f.jsxs)("form",{onSubmit:e.onSumbit.bind(e,s),children:[Object(f.jsx)(P,{label:"Name",name:"name",placeholder:"Enter Name",value:a,onChange:e.onChange,error:c.name}),Object(f.jsx)(P,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:n,onChange:e.onChange,error:c.email}),Object(f.jsx)(P,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:r,onChange:e.onChange,error:c.phone}),Object(f.jsx)("input",{type:"submit",value:"Edit Contact",className:"btn btn-light btn-block"})]})})]})}})}}]),a}(n.Component),F=function(e){var t=e.branding;return Object(f.jsx)("nav",{className:"navbar navbar-expand-sm \r navbar-dark bg-danger mb-3 py-0",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("a",{href:"/",className:"navbar-brand",children:t}),Object(f.jsx)("div",{children:Object(f.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsxs)(C.b,{to:"/",className:"nav-link",children:[Object(f.jsx)("i",{className:"fas fa-home"}),"  Home"]})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsxs)(C.b,{to:"/add/contact",className:"nav-link",children:[Object(f.jsx)("i",{className:"fas fa-plus"})," Add"]})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsxs)(C.b,{to:"/about",className:"nav-link",children:[Object(f.jsx)("i",{className:"fas fa-question"}),"About"]})})]})})]})})};F.defaultProps={branding:"My App"};var _=F,I=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:"display-4",children:"About contact manager"}),Object(f.jsx)("p",{className:"lead",children:"sipmle add to manage contatc"}),Object(f.jsx)("p",{className:"text-secondary",children:"version 1.5.5"})]})},L=function(){return Object(f.jsxs)("div",{children:[Object(f.jsxs)("h1",{children:[Object(f.jsx)("span",{className:"text-danger",children:"400 "}),"Page Not Found"]}),Object(f.jsx)("p",{className:"lead",children:"sorry, that page does not exist"})]})},M=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",body:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts/1").then((function(e){return e.json()})).then((function(t){return e.setState({title:t.title,body:t.body})}))}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:t}),Object(f.jsx)("p",{children:a})]})}}]),a}(n.Component),B=(a(68),a(69),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(f.jsx)(y,{children:Object(f.jsx)(C.a,{children:Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(_,{branding:"Contact Manager 1"}),Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)(E.c,{children:[Object(f.jsx)(E.a,{exact:!0,path:"/",component:k}),Object(f.jsx)(E.a,{exact:!0,path:"/about",component:I}),Object(f.jsx)(E.a,{exact:!0,path:"/add/contact",component:D}),Object(f.jsx)(E.a,{exact:!0,path:"/edit/contact/:id",component:q}),Object(f.jsx)(E.a,{exact:!0,path:"/test",component:M}),Object(f.jsx)(E.a,{component:L})]})})]})})})}}]),a}(n.Component)),J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,71)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(B,{})}),document.getElementById("root")),J()}},[[70,1,2]]]);
//# sourceMappingURL=main.27efa461.chunk.js.map