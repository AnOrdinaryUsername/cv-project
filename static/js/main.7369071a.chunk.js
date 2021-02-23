(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{179:function(e,t,n){},180:function(e,t,n){},181:function(e,t,n){},182:function(e,t,n){},183:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),r=n(40),o=n.n(r),c=(n(69),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,184)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),r(e),o(e)}))}),l=n(29),s=n(4),u=n(5),d=n(6),h=n(3),m=n(8),b=n(7),p=n(11),j=n(12),f=(n(31),n(0)),g=function(){return Object(f.jsx)("button",{className:"button submit",children:"Submit"})},O=n(64),v=n(30),x=n.n(v),y=n(63),C=n.n(y),k=(n(178),n(179),function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={editorHtml:a.props.initialValue,theme:"snow"},a.handleEditorChange=a.handleEditorChange.bind(Object(h.a)(a)),a}return Object(d.a)(n,[{key:"handleEditorChange",value:function(e){var t=this,n=this.props,a=n.onChange,i=n.name;this.setState({editorHtml:e},(function(){return a(i,t.state.editorHtml)}))}},{key:"render",value:function(){return Object(f.jsx)("div",{className:"text-editor",children:Object(f.jsx)(C.a,{theme:this.state.theme,onChange:this.handleEditorChange,value:this.state.editorHtml,modules:n.modules,formats:n.formats,bounds:".text-editor",id:this.props.id,placeholder:this.props.placeholder})})}}]),n}(a.Component));k.modules={toolbar:[["bold","italic","underline","strike"],[{list:"bullet"}],["clean"]],clipboard:{matchVisual:!1}},k.formats=["bold","italic","underline","strike","list","bullet"];var w=k,S=(n(180),function(e){var t=e.animation,n=e.initialValue,a=void 0===n?"":n,i=e.isRequired,r=e.label,o=e.name,c=e.onChange,l=e.placeholder,u=e.type,d=e.value,h={};switch(u){case"text":h.pattern="^\\p{L}*$",h.type="text";break;case"email":h.type="email";break;case"tel":h.type="tel";break;case"editor":break;default:throw new Error("Unknown input type passed to <Input />.")}var m=null,b=x()();return m="editor"===u?Object(f.jsx)(w,{id:b,onChange:c,initialValue:a,name:o,placeholder:l}):Object(f.jsx)("input",Object(s.a)(Object(s.a)({autoComplete:"on",id:b,name:o,placeholder:l,required:i,value:d},h),{},{onChange:c})),Object(f.jsxs)("div",{className:"input ".concat(t),children:[Object(f.jsx)("label",{htmlFor:b,children:r}),m]})}),N=function(e){var t=e.onClick;return Object(f.jsxs)("button",{className:"button button--md new-info",onClick:t,children:[Object(f.jsx)(j.a,{icon:p.c}),"Add more information"]})},I=(n(62),function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={isPresent:!0},a.deleteNewInfo=a.deleteNewInfo.bind(Object(h.a)(a)),a.handleInputChange=a.handleInputChange.bind(Object(h.a)(a)),a}return Object(d.a)(n,[{key:"deleteNewInfo",value:function(){window.confirm("Are you sure you want to delete this item?")&&this.setState({isPresent:!this.state.isPresent})}},{key:"handleInputChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.props.onChange(n,a)}},{key:"render",value:function(){var e=this,t=this.props,n=t.inputs,a=t.enableAnimation,i=t.includeDelete,r=t.onChange,o=this.state.isPresent;return Object(f.jsx)(f.Fragment,{children:o&&Object(f.jsxs)("div",{className:"new-inputs",children:[n.map((function(t,n){var i=a?"text-anim-".concat(n+1):"",o="editor"===t.type;return t.row?Object(f.jsx)("div",{className:"row ".concat(i),children:t.row.map((function(t){return Object(f.jsx)(S,Object(s.a)(Object(s.a)({},t),{},{onChange:o?r:e.handleInputChange}))}))}):Object(f.jsx)(S,Object(s.a)(Object(s.a)({animation:i},t),{},{onChange:o?r:e.handleInputChange}))})),i&&Object(f.jsx)("button",{className:"button button--sm delete text-anim-4",onClick:this.deleteNewInfo,children:"Delete"})]})})}}]),n}(a.Component)),F=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={info:[]},a.addNewInfo=a.addNewInfo.bind(Object(h.a)(a)),a}return Object(d.a)(n,[{key:"addNewInfo",value:function(e){var t=this;e.preventDefault();var n=JSON.parse(JSON.stringify(this.props.inputs));n.forEach((function(e){var n=t.state.info.length;return e.row&&e.row.forEach((function(e){return e.name="".concat(e.name).concat(n.toString())})),e.name="".concat(e.name).concat(n.toString())}));var a=Object(f.jsx)(I,{inputs:n,enableAnimation:!0,includeDelete:!0,onChange:this.props.onChange},x()()),i=[].concat(Object(O.a)(this.state.info),[a]);this.setState({info:i})}},{key:"render",value:function(){var e=this.props.legend,t=e.title,n=e.description,a="Personal Information"===t,i=Object(f.jsx)(I,{inputs:this.props.inputs,enableAnimation:!1,includeDelete:!1,onChange:this.props.onChange}),r=this.state.info;return Object(f.jsxs)("fieldset",{children:[Object(f.jsxs)("legend",{className:"legend",children:[Object(f.jsx)("h2",{children:t}),Object(f.jsx)("p",{children:n})]}),Object(f.jsxs)("div",{className:"input-container",children:[i,0!==r.length&&r.map((function(e){return e})),!a&&Object(f.jsx)(N,{onClick:this.addNewInfo})]})]})}}]),n}(a.Component),E=(n(181),function(e){var t=e.children,n=e.onSubmit;return Object(f.jsx)("section",{className:"form-container",children:Object(f.jsx)("form",{className:"form form--round",onSubmit:n,children:t})})}),q=(n(182),function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).formSection=[{legend:{title:"Personal Information",description:"Share your contact information so companies know how to reach you."},inputs:[{row:[{type:"text",label:"First Name",isRequired:!0,name:"firstName",placeholder:"e.g. Biggy"},{type:"text",label:"Last Name",isRequired:!0,name:"lastName",placeholder:"e.g. Enterprise"}]},{row:[{type:"email",label:"Email address",isRequired:!0,name:"email",placeholder:"e.g. enterprise6@email.com"},{type:"tel",label:"Phone Number",isRequired:!0,name:"phoneNumber",placeholder:"e.g. (123) 456-7890"}]},{type:"text",label:"Residence",isRequired:!0,name:"residence",placeholder:"e.g. Newport News, US"}]},{legend:{title:"Education History",description:"Having a degree demonstrates an ability to learn. Although not required, you may include it if you wish to share."},inputs:[{row:[{type:"text",label:"School Name",isRequired:!1,name:"schoolName",placeholder:"e.g. Harvard University"},{type:"text",label:"Field of Study",isRequired:!1,name:"fieldOfStudy",placeholder:"e.g. Computer Science, B.S."}]},{type:"text",label:"Date",isRequired:!1,name:"educationDate",placeholder:"e.g. 05/12/1938-02/17/1947"},{type:"editor",label:"Details",initialValue:"<ul><li><strong>Current GPA</strong>: 4.0</li><li><strong>Projects</strong>: Facebook clone, Battleship</li></ul>",name:"educationEditor",placeholder:"List all descriptions of important academic achievements in bullet points."}]},{legend:{title:"Work Experience",description:"Employers love practical experience. Show them what skills you bring to the table."},inputs:[{row:[{type:"text",label:"Company Name",isRequired:!1,name:"companyName",placeholder:"e.g. US Navy"},{type:"text",label:"Job Title",isRequired:!1,name:"jobTitle",placeholder:"e.g. Aircraft Carrier"}]},{type:"text",label:"Date",isRequired:!1,name:"workDate",placeholder:"e.g. 05/12/1938-02/17/1947"},{type:"editor",label:"Details",initialValue:"<ul><li>Coordinated movement of air wings at the Battle of Midway.</li></ul>",name:"workEditor",placeholder:"List all descriptions of applied skills and roles in bullet points."}]}],a.state={},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)(E,{onSubmit:this.props.onSubmit,children:[this.formSection.map((function(t,n){return Object(a.createElement)(F,Object(s.a)(Object(s.a)({},t),{},{onChange:e.props.onChange,key:n}))})),Object(f.jsx)(g,{})]})}}]),n}(a.Component)),A=function(e){var t=e.themeState,n=e.clickHandler;return Object(f.jsx)("button",{"aria-label":t?"Activate dark theme":"Activate light theme",onClick:n,children:Object(f.jsx)(j.a,{icon:t?p.e:p.b})})},R=document.documentElement,T=function(){var e="light",t=localStorage.getItem("theme"),n=window.matchMedia("(prefers-color-scheme: dark)");return t?(R.setAttribute("data-theme","light"),"dark"===t&&(e="dark")):n.matches&&(e="dark"),"dark"===e?(R.setAttribute("data-theme","dark"),!1):(R.setAttribute("data-theme","light"),!0)}(),D=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={isLightTheme:T},e.changeTheme=e.changeTheme.bind(Object(h.a)(e)),e}return Object(d.a)(n,[{key:"changeTheme",value:function(){var e=this;this.setState({isLightTheme:!this.state.isLightTheme},(function(){var t=e.state.isLightTheme?"light":"dark";R.setAttribute("data-theme",t),localStorage.setItem("theme",t)}))}},{key:"render",value:function(){var e=this.state.isLightTheme;return Object(f.jsx)("header",{children:Object(f.jsx)(A,{themeState:e,clickHandler:this.changeTheme})})}}]),n}(a.Component),L=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={isSubmitted:!1},e.submitForm=e.submitForm.bind(Object(h.a)(e)),e.handleFieldChange=e.handleFieldChange.bind(Object(h.a)(e)),e}return Object(d.a)(n,[{key:"submitForm",value:function(){this.setState({isSubmitted:!this.state.isSubmitted})}},{key:"handleFieldChange",value:function(e,t){this.setState((function(n){return Object(s.a)(Object(s.a)({},n),{},Object(l.a)({},e,t))}))}},{key:"render",value:function(){var e=this.state.isSubmitted;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(D,{}),Object(f.jsxs)("main",{children:[!e&&Object(f.jsx)(q,{onSubmit:this.submitForm,onChange:this.handleFieldChange}),e&&Object(f.jsx)("p",{children:"test"})]})]})}}]),n}(a.Component);o.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root")),c()},31:function(e,t,n){},62:function(e,t,n){},69:function(e,t,n){}},[[183,1,2]]]);
//# sourceMappingURL=main.7369071a.chunk.js.map