"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[629],{9629:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(5671),r=n(3144),s=n(136),i=n(516),o=n(2791),c=n(9101),l=n(9672),u="ContactForm_form__KzdFV",d="ContactForm_text__aMzhx",m="ContactForm_input__JOooa",h="ContactForm_btn__XTb9d",_=n(184),p=function(e){(0,s.Z)(n,e);var t=(0,i.Z)(n);function n(){var e;(0,a.Z)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={name:"",number:""},e.enteredNewContact=function(t){e.setState({name:t.currentTarget.value})},e.enteredNewNumber=function(t){e.setState({number:t.currentTarget.value})},e.onSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.setState({name:"",number:""})},e}return(0,r.Z)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("form",{onSubmit:this.onSubmit,className:u,children:[(0,_.jsx)("p",{className:d,children:"Name"}),(0,_.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:this.enteredNewContact,value:t,className:m}),(0,_.jsx)("p",{className:d,children:"Number"}),(0,_.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:this.enteredNewNumber,value:n,className:m}),(0,_.jsx)("button",{type:"submit",className:h,children:"Add contact"})]})})}}]),n}(o.Component),f=(0,c.$j)(null,(function(e){return{onSubmit:function(t){return e((0,l.Gm)(t))}}}))(p),C=n(6694),N="Filter_container__GEwi4",b="Filter_text__g362e",x="Filter_input__TUqDk";var j=(0,c.$j)((function(e){return{filterValue:e.phonebook.filter}}),(function(e){return{onChangeFilter:function(t){return e(C.Z.filterByName(t.currentTarget.value))}}}))((function(e){var t=e.filterValue,n=e.onChangeFilter;return(0,_.jsxs)("div",{className:N,children:[(0,_.jsx)("h3",{className:b,children:"Find:"}),(0,_.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:n,value:t,className:x})]})})),v="ContactList_list__qvDDi",g="ContactList_listItem__iwxrk",k="ContactList_contact__iCjIM";var w=function(){var e=(0,c.I0)();(0,o.useEffect)((function(){e((0,l.sb)())}),[e]);var t=(0,c.v9)((function(e){return e.phonebook.userContacts})),n=t.map((function(t){return(0,_.jsxs)("li",{className:g,children:[(0,_.jsxs)("p",{className:k,children:[t.name,": ",t.number]}),(0,_.jsx)("button",{value:t.id,onClick:function(){return e((0,l.E5)(t.id))},children:"Delete"})]},t.id)}));return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{children:"CONTACTS MUST BE HERE"}),0===t.length?(0,_.jsx)("p",{children:"No contacts yet"}):(0,_.jsx)("ul",{className:v,children:n})]})},F={container:"PhonebookPage_container__7DaBQ",header:"PhonebookPage_header__-mERG",filterContainer:"PhonebookPage_filterContainer__ZYcUL",addNewContactContainer:"PhonebookPage_addNewContactContainer__bZBNw"},y=function(){return(0,_.jsxs)("div",{className:F.container,children:[(0,_.jsxs)("header",{className:F.header,children:[(0,_.jsx)("div",{className:F.filterContainer,children:(0,_.jsx)(j,{})}),(0,_.jsx)("div",{className:F.addNewContactContainer,children:(0,_.jsx)(f,{})})]}),(0,_.jsx)("div",{className:F.content,children:(0,_.jsx)(w,{})})]})}}}]);
//# sourceMappingURL=629.b974f6b4.chunk.js.map