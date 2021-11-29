(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),s=n.n(r),o=n(9),i=n(2),u=n(10),b=n(4),m=n.n(b),l=n(0);function j(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],u=s[1],b=function(e){switch(e.target.name){case"name":c(e.target.value);break;case"number":u(e.target.value)}};return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault()},className:m.a.form,children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("h3",{children:"Name"}),Object(l.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:b,value:n,className:m.a.input}),Object(l.jsx)("h3",{children:"Number"}),Object(l.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:b,value:o,className:m.a.input})]}),Object(l.jsx)("button",{type:"submit",className:m.a.button,children:"Add contact"})]})}function d(e){var t=e.onChange,n=e.value;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{children:"Find contacts by name"}),Object(l.jsx)("input",{type:"text",name:"filter",onChange:t,value:n})]})}var h=n(6),O=n.n(h);function f(e){var t=e.contacts,n=e.onClick;return Object(l.jsx)("ul",{className:O.a.list,children:t.map((function(e){return Object(l.jsxs)("li",{id:e.id,className:O.a.item,children:[Object(l.jsxs)("p",{children:[e.name,": ",e.number]}),Object(l.jsx)("button",{onClick:n,className:O.a.button,children:"Delete"})]},e.id)}))})}var p=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}];var x=function(){var e=Object(a.useState)(p),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),b=s[0],m=s[1],h=Object(a.useState)([]),O=Object(i.a)(h,2),x=O[0],C=O[1];return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("contacts"));e&&c(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]),Object(a.useEffect)((function(){C(""!==b?n.filter((function(e){return e.name.toLowerCase().includes(b.toLowerCase())})):n)}),[b,n]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Phonebook"}),Object(l.jsx)(j,{onSubmit:function(e){if(n.some((function(t){return t.name.toLowerCase()===e.name.toLowerCase()})))return alert("".concat(e.name," is already in cotacts"));c((function(t){return t.concat({id:Object(u.a)(),name:e.name,number:e.number})}))}}),Object(l.jsx)("h2",{children:"Contacts"}),Object(l.jsx)(d,{onChange:function(e){m(e.target.value)},value:b}),Object(l.jsx)(f,{contacts:x,onClick:function(e){var t=n.map((function(e){return e.id})).indexOf(e.target.parentElement.id),a=Object(o.a)(n);a.splice(t,1),c(a)}})]})};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))},4:function(e,t,n){e.exports={form:"ContactForm_form__ZCQOn",input:"ContactForm_input__fLfnA",button:"ContactForm_button__b-Lz8"}},6:function(e,t,n){e.exports={list:"ContactList_list__3klDv",item:"ContactList_item__Vgfiy",button:"ContactList_button__LBmrO"}}},[[16,1,2]]]);
//# sourceMappingURL=main.39f2cd16.chunk.js.map