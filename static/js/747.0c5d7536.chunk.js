"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[747],{2747:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var a=n(9439),s=n(2791),r=n(9983),i=n(828),o=n(7107),c=n(7012),l=n(6520),d=n(6151),u=n(9434),m=n(8820),_=n(9672),h={container:"ContactForm_container__OAAjE",additionalSection:"ContactForm_additionalSection__03qCV",title:"ContactForm_title__TDnO+",form:"ContactForm_form__KzdFV",text:"ContactForm_text__aMzhx",input:"ContactForm_input__JOooa",btnContainer:"ContactForm_btnContainer__3jQQH",btn:"ContactForm_btn__XTb9d",space:"ContactForm_space__7wRyQ",saveBtn:"ContactForm_saveBtn__r1gei"},x=n(184),p=function(e){var t=e.onClose,n=(0,s.useState)(""),i=(0,a.Z)(n,2),o=i[0],c=i[1],l=(0,s.useState)(""),d=(0,a.Z)(l,2),p=d[0],j=d[1],b=(0,s.useState)(!1),v=(0,a.Z)(b,2),f=v[0],C=v[1],N=(0,u.I0)();return(0,x.jsxs)("div",{className:h.container,children:[(0,x.jsxs)("div",{className:h.additionalSection,children:[(0,x.jsx)("h2",{className:h.title,children:"This card belongs to..."}),(0,x.jsx)("div",{className:h.btnContainer,children:(0,x.jsx)("button",{type:"button",className:"".concat(h.btn," ").concat(h.closeBtn),onClick:function(){return t()},children:(0,x.jsx)(r.Pd.Provider,{value:{size:"40px",color:"rgb(211, 65, 65)"},children:(0,x.jsx)(m.cq1,{})})})})]}),(0,x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),N((0,_.Gm)({name:o,number:p})),c(""),j(""),f&&(C(!1),t())},className:h.form,children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{className:h.text,children:"Name"}),(0,x.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(e){return c(e.currentTarget.value)},value:o,className:h.input})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{className:h.text,children:"Number"}),(0,x.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(e){return j(e.currentTarget.value)},value:p,className:h.input})]}),(0,x.jsxs)("div",{className:h.btnContainer,children:[(0,x.jsxs)("button",{type:"submit",className:"".concat(h.btn," ").concat(h.saveBtn),children:[(0,x.jsx)("span",{children:"Save and continue"}),(0,x.jsx)(r.Pd.Provider,{value:{size:"30px",color:"rgb(83, 182, 70)"},children:(0,x.jsx)(m.Lfi,{})})]}),(0,x.jsx)("div",{className:h.space}),(0,x.jsx)("div",{className:h.test,children:(0,x.jsxs)("button",{type:"submit",className:"".concat(h.btn," ").concat(h.saveBtn),onClick:function(){return C(!0)},children:[(0,x.jsx)("span",{children:"Save and close"}),(0,x.jsx)(r.Pd.Provider,{value:{size:"30px",color:"rgb(83, 182, 70)"},children:(0,x.jsx)(m.dEn,{})})]})})]})]})]})},j=n(4942),b=n(2130),v=n(6694),f="Filter_container__GEwi4",C=(0,o.Z)({typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"',"Permanent Marker","Indie Flower"].join(",")},palette:{neutral:{main:"rgb(70, 70, 70)"}}});var N=function(){var e,t=(0,s.useState)(""),n=(0,a.Z)(t,2),r=(n[0],n[1]),i=(0,u.I0)();return(0,s.useEffect)((function(){r(""),i(v.Z.filterByName(""))}),[]),(0,x.jsx)("div",{className:f,children:(0,x.jsx)(c.Z,{theme:C,children:(0,x.jsx)(b.Z,{id:"filled-basic",label:"Find",variant:"filled",placeholder:"Some name...",onChange:function(e){r(e.target.value),i(v.Z.filterByName(e.target.value))},sx:(e={"& .MuiFormLabel-root":{color:"yellow",borderColor:"yellow"},"& .MuiInputLabel-root":{color:"yellow",borderColor:"yellow"}},(0,j.Z)(e,"& .MuiInputLabel-root",{color:"rgb(10, 4, 128)"}),(0,j.Z)(e,"& .MuiInputLabel-animated",{}),(0,j.Z)(e,"&::before .MuiInputBase-input",{}),(0,j.Z)(e,"& .MuiFilledInput-input",{color:"rgb(10, 4, 128)",fontFamily:"Indie Flower"}),e)})})})},g=n(4651),Z=n(6053),y={container:"EditContact_container__T8Fg8",additionalSection:"EditContact_additionalSection__fEL6g",title:"EditContact_title__i8k8Y",form:"EditContact_form__9hhiL",text:"EditContact_text__NtYNZ",input:"EditContact_input__cqKS-",btnContainer:"EditContact_btnContainer__10sCE",btn:"EditContact_btn__5uu1m",space:"EditContact_space__ZqGpC",saveBtn:"EditContact_saveBtn__O7EAv"},F=function(e){var t=e.editedContact,n=e.onClose,r=(0,u.I0)(),i=(0,s.useState)(t.name),o=(0,a.Z)(i,2),c=o[0],l=o[1],d=(0,s.useState)(t.number),m=(0,a.Z)(d,2),h=m[0],p=m[1];return(0,x.jsxs)("div",{className:y.container,children:[(0,x.jsxs)("div",{className:y.additionalSection,children:[(0,x.jsx)("h2",{className:y.title,children:"Looks like something needs to be fixed..."}),(0,x.jsx)("div",{className:y.btnContainer,children:(0,x.jsxs)("button",{type:"button",className:"".concat(y.btn," ").concat(y.closeBtn),onClick:function(){return n()},children:["...although no, I thought :",")"]})})]}),(0,x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r((0,_.km)({id:t.id,name:c,number:h})),n()},className:y.form,children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{className:y.text,children:"Name"}),(0,x.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(e){return l(e.currentTarget.value)},value:c,className:y.input})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{className:y.text,children:"Number"}),(0,x.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(e){return p(e.currentTarget.value)},value:h,className:y.input})]}),(0,x.jsx)("button",{type:"submit",children:"...yes, much better now!"})]})]})},k=n(7872),S="Brace_braceContainer__gK8wn",P="Brace_brace__VfYp0",w="Brace_wholeContainer__NrIus",B="Brace_whole__dMRCu",E="Brace_left__T-dlu",I="Brace_right__0SPWk",L=function(e){var t=e.number,n=e.step,a=void 0===n?100:n,s=Array.from({length:Number(t)},(function(e,t){return 135+Number(a)*t}));return(0,x.jsx)("div",{children:s.map((function(e){return(0,x.jsxs)("div",{className:S,style:{top:e},children:[(0,x.jsx)("div",{className:P}),(0,x.jsxs)("div",{className:w,children:[(0,x.jsx)("div",{className:"".concat(B," ").concat(E)}),(0,x.jsx)("div",{className:"".concat(B," ").concat(I)})]})]},e)}))})},M="ContactList_refContainer__LnJ1I",A="ContactList_list__qvDDi",z="ContactList_listItem__iwxrk",q="ContactList_listItem__infoBlock__QsJN6",T="ContactList_listItem__buttonBlock__quXgM",D="ContactList_contact__iCjIM",R="ContactList_btn__X8LEF",O="ContactList_notFound__yAgSc",G="ContactList_p1__jjGnM",J="ContactList_p2__M-M9z",Q="ContactList_p3__zCFmF",U=115;var K=function(){var e=(0,s.useState)(!1),t=(0,a.Z)(e,2),n=t[0],i=t[1],o=(0,s.useState)(null),c=(0,a.Z)(o,2),d=c[0],m=c[1],h=(0,s.useState)(null),p=(0,a.Z)(h,2),j=p[0],b=p[1],v=(0,u.I0)(),f=(0,s.createRef)(),C=(0,s.createRef)();(0,s.useEffect)((function(){v((0,_.sb)())}),[v]);var N=(0,u.v9)((function(e){return e.phonebook.userContacts})),y=(0,u.v9)((function(e){return e.phonebook.filter})),S=""===y?N:N.filter((function(e){return e.name.includes(y)}));(0,s.useEffect)((function(){var e=C.current.getBoundingClientRect().height;console.log(Math.floor(e/U)),0!==Math.floor(e/130)?b(Math.floor(e/U)):b(3)}),[C,S,y]);var P=S.map((function(e){return(0,x.jsxs)("li",{className:z,children:[(0,x.jsxs)("div",{className:q,children:[(0,x.jsxs)("p",{className:D,children:[e.name,":"]}),(0,x.jsx)("p",{className:D,children:e.number})]}),(0,x.jsxs)("div",{className:T,children:[(0,x.jsx)(l.Z,{title:"Edit",arrow:!0,children:(0,x.jsx)("button",{className:R,value:e.id,onClick:function(){return t=e.id,n=e.name,a=e.number,i(!0),void m({id:t,name:n,number:a});var t,n,a},children:(0,x.jsx)(r.Pd.Provider,{value:{size:"30px",color:"rgb(1, 65, 65)"},children:(0,x.jsx)(Z.Uf_,{})})})}),(0,x.jsx)(l.Z,{title:"Delete",arrow:!0,children:(0,x.jsx)("button",{className:R,value:e.id,onClick:function(){return v((0,_.E5)(e.id))},children:(0,x.jsx)(r.Pd.Provider,{value:{size:"40px",color:"rgb(211, 65, 65)"},children:(0,x.jsx)(g.S1K,{})})})})]})]},e.id)}));return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:M,ref:C,children:0===S.length?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(L,{number:j,step:U}),(0,x.jsxs)("div",{className:O,children:[(0,x.jsx)("p",{className:G,children:"No such people have been found."}),(0,x.jsx)("p",{className:J,children:"Maybe try something else?"}),(0,x.jsxs)("p",{className:Q,children:["Or is it a ",(0,x.jsx)("span",{children:"sign"})," that it's time to",(0,x.jsx)("span",{children:"make new friends"})," :D"]})]})]}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(L,{number:j,step:U}),(0,x.jsx)("ul",{className:A,ref:f,children:P})]})}),n&&(0,x.jsx)(k.Z,{onClose:function(){return i(!n)},children:(0,x.jsx)(F,{editedContact:d,onClose:function(){return i(!n)}})})]})},X="PhonebookPage_content__I0IXl",Y="PhonebookPage_header__-mERG",V="PhonebookPage_filterContainer__ZYcUL",H="PhonebookPage_addNewContactContainer__bZBNw",$="PhonebookPage_decor__OdA0v",W=(0,o.Z)({palette:{neutral:{main:"rgb(89, 89, 89)"}}}),ee=function(){var e=(0,s.useState)(!1),t=(0,a.Z)(e,2),n=t[0],o=t[1];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:$}),(0,x.jsxs)("div",{className:X,children:[(0,x.jsxs)("header",{className:Y,children:[(0,x.jsx)("div",{className:V,children:(0,x.jsx)(N,{})}),(0,x.jsx)("div",{className:H,children:(0,x.jsx)(c.Z,{theme:W,children:(0,x.jsx)(l.Z,{title:"Add contacts",arrow:!0,children:(0,x.jsx)(d.Z,{color:"neutral",onClick:function(){return o(!n)},children:(0,x.jsx)(r.Pd.Provider,{value:{size:"40px",color:"rgb(89, 89, 89)"},children:(0,x.jsx)(i.BQ4,{})})})})})})]}),(0,x.jsx)(K,{})]}),n&&(0,x.jsx)(k.Z,{onClose:function(){return o(!n)},children:(0,x.jsx)(p,{onClose:function(){return o(!n)}})})]})}}}]);
//# sourceMappingURL=747.0c5d7536.chunk.js.map