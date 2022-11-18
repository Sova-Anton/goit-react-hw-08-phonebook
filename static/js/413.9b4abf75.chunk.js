"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[413],{3413:function(e,o,t){t.r(o),t.d(o,{default:function(){return Y}});var n=t(7205),a=t(3793),r=t(7311),l=t(4942),i=t(1048),c=t(2793),d=t(2791),s=t(8182),u=t(4419),m=t(529),p=t(4565),h=t(9853),b=t(277),f=t(5513),v=t(5878),Z=t(1217);function g(e){return(0,Z.Z)("MuiFormControlLabel",e)}var x=(0,v.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),k=t(40),y=t(3329),C=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","slotProps","value"],P=(0,b.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState;return[(0,l.Z)({},"& .".concat(x.label),o.label),o.root,o["labelPlacement".concat((0,h.Z)(t.labelPlacement))]]}})((function(e){var o=e.theme,t=e.ownerState;return(0,c.Z)((0,l.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(x.disabled),{cursor:"default"}),"start"===t.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===t.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===t.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,l.Z)({},"& .".concat(x.label),(0,l.Z)({},"&.".concat(x.disabled),{color:(o.vars||o).palette.text.disabled})))})),S=d.forwardRef((function(e,o){var t,n=(0,f.Z)({props:e,name:"MuiFormControlLabel"}),a=n.className,r=n.componentsProps,l=void 0===r?{}:r,b=n.control,v=n.disabled,Z=n.disableTypography,x=n.label,S=n.labelPlacement,w=void 0===S?"end":S,j=n.slotProps,F=void 0===j?{}:j,R=(0,i.Z)(n,C),z=(0,m.Z)(),I=v;"undefined"===typeof I&&"undefined"!==typeof b.props.disabled&&(I=b.props.disabled),"undefined"===typeof I&&z&&(I=z.disabled);var B={disabled:I};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof b.props[e]&&"undefined"!==typeof n[e]&&(B[e]=n[e])}));var M=(0,k.Z)({props:n,muiFormControl:z,states:["error"]}),N=(0,c.Z)({},n,{disabled:I,labelPlacement:w,error:M.error}),L=function(e){var o=e.classes,t=e.disabled,n=e.labelPlacement,a=e.error,r={root:["root",t&&"disabled","labelPlacement".concat((0,h.Z)(n)),a&&"error"],label:["label",t&&"disabled"]};return(0,u.Z)(r,g,o)}(N),O=null!=(t=F.typography)?t:l.typography,W=x;return null==W||W.type===p.Z||Z||(W=(0,y.jsx)(p.Z,(0,c.Z)({component:"span"},O,{className:(0,s.Z)(L.label,null==O?void 0:O.className),children:W}))),(0,y.jsxs)(P,(0,c.Z)({className:(0,s.Z)(L.root,a),ownerState:N,ref:o},R,{children:[d.cloneElement(b,B),W]}))})),w=t(2065),j=t(885),F=t(4938),R=t(1126);function z(e){return(0,Z.Z)("PrivateSwitchBase",e)}(0,v.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var I=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],B=(0,b.ZP)(R.Z)((function(e){var o=e.ownerState;return(0,c.Z)({padding:9,borderRadius:"50%"},"start"===o.edge&&{marginLeft:"small"===o.size?-3:-12},"end"===o.edge&&{marginRight:"small"===o.size?-3:-12})})),M=(0,b.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),N=d.forwardRef((function(e,o){var t=e.autoFocus,n=e.checked,a=e.checkedIcon,r=e.className,l=e.defaultChecked,d=e.disabled,p=e.disableFocusRipple,b=void 0!==p&&p,f=e.edge,v=void 0!==f&&f,Z=e.icon,g=e.id,x=e.inputProps,k=e.inputRef,C=e.name,P=e.onBlur,S=e.onChange,w=e.onFocus,R=e.readOnly,N=e.required,L=e.tabIndex,O=e.type,W=e.value,E=(0,i.Z)(e,I),T=(0,F.Z)({controlled:n,default:Boolean(l),name:"SwitchBase",state:"checked"}),q=(0,j.Z)(T,2),H=q[0],D=q[1],V=(0,m.Z)(),_=d;V&&"undefined"===typeof _&&(_=V.disabled);var A="checkbox"===O||"radio"===O,G=(0,c.Z)({},e,{checked:H,disabled:_,disableFocusRipple:b,edge:v}),J=function(e){var o=e.classes,t=e.checked,n=e.disabled,a=e.edge,r={root:["root",t&&"checked",n&&"disabled",a&&"edge".concat((0,h.Z)(a))],input:["input"]};return(0,u.Z)(r,z,o)}(G);return(0,y.jsxs)(B,(0,c.Z)({component:"span",className:(0,s.Z)(J.root,r),centerRipple:!0,focusRipple:!b,disabled:_,tabIndex:null,role:void 0,onFocus:function(e){w&&w(e),V&&V.onFocus&&V.onFocus(e)},onBlur:function(e){P&&P(e),V&&V.onBlur&&V.onBlur(e)},ownerState:G,ref:o},E,{children:[(0,y.jsx)(M,(0,c.Z)({autoFocus:t,checked:n,defaultChecked:l,className:J.input,disabled:_,id:A&&g,name:C,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var o=e.target.checked;D(o),S&&S(e,o)}},readOnly:R,ref:k,required:N,ownerState:G,tabIndex:L,type:O},"checkbox"===O&&void 0===W?{}:{value:W},x)),H?a:Z]}))})),L=t(1245),O=(0,L.Z)((0,y.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),W=(0,L.Z)((0,y.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),E=(0,L.Z)((0,y.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function T(e){return(0,Z.Z)("MuiCheckbox",e)}var q=(0,v.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),H=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],D=(0,b.ZP)(N,{shouldForwardProp:function(e){return(0,b.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState;return[o.root,t.indeterminate&&o.indeterminate,"default"!==t.color&&o["color".concat((0,h.Z)(t.color))]]}})((function(e){var o,t=e.theme,n=e.ownerState;return(0,c.Z)({color:(t.vars||t).palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===n.color?t.vars.palette.action.activeChannel:t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,w.Fq)("default"===n.color?t.palette.action.active:t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&(o={},(0,l.Z)(o,"&.".concat(q.checked,", &.").concat(q.indeterminate),{color:(t.vars||t).palette[n.color].main}),(0,l.Z)(o,"&.".concat(q.disabled),{color:(t.vars||t).palette.action.disabled}),o))})),V=(0,y.jsx)(W,{}),_=(0,y.jsx)(O,{}),A=(0,y.jsx)(E,{}),G=d.forwardRef((function(e,o){var t,n,a=(0,f.Z)({props:e,name:"MuiCheckbox"}),r=a.checkedIcon,l=void 0===r?V:r,m=a.color,p=void 0===m?"primary":m,b=a.icon,v=void 0===b?_:b,Z=a.indeterminate,g=void 0!==Z&&Z,x=a.indeterminateIcon,k=void 0===x?A:x,C=a.inputProps,P=a.size,S=void 0===P?"medium":P,w=a.className,j=(0,i.Z)(a,H),F=g?k:v,R=g?k:l,z=(0,c.Z)({},a,{color:p,indeterminate:g,size:S}),I=function(e){var o=e.classes,t=e.indeterminate,n=e.color,a={root:["root",t&&"indeterminate","color".concat((0,h.Z)(n))]},r=(0,u.Z)(a,T,o);return(0,c.Z)({},o,r)}(z);return(0,y.jsx)(D,(0,c.Z)({type:"checkbox",inputProps:(0,c.Z)({"data-indeterminate":g},C),icon:d.cloneElement(F,{fontSize:null!=(t=F.props.fontSize)?t:S}),checkedIcon:d.cloneElement(R,{fontSize:null!=(n=R.props.fontSize)?n:S}),ownerState:z,ref:o,className:(0,s.Z)(I.root,w)},j,{classes:I}))})),J=t(6015),K=t(803),Q=t(9434),U=t(9273),X=function(){var e=(0,Q.I0)();return(0,y.jsxs)(K.Z,{component:"main",maxWidth:"xs",children:[(0,y.jsx)(a.ZP,{}),(0,y.jsxs)(J.Z,{sx:{paddingTop:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,y.jsx)(p.Z,{component:"h1",variant:"h5",children:"Sign in"}),(0,y.jsxs)(J.Z,{component:"form",onSubmit:function(o){o.preventDefault();var t=o.currentTarget;e((0,U.Ib)({email:t.elements.email.value,password:t.elements.password.value})),t.reset()},noValidate:!0,sx:{mt:1},children:[(0,y.jsx)(r.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),(0,y.jsx)(r.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),(0,y.jsx)(S,{control:(0,y.jsx)(G,{value:"remember",color:"primary"}),label:"Remember me"}),(0,y.jsx)(n.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"})]})]})]})};function Y(){return(0,y.jsx)("div",{children:(0,y.jsx)(X,{})})}},3793:function(e,o,t){var n=t(885),a=t(2793),r=t(2791),l=t(5513),i=t(3928),c=t(3329),d=function(e,o){return(0,a.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},o&&!e.vars&&{colorScheme:e.palette.mode})},s=function(e){return(0,a.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}})};o.ZP=function(e){var o=(0,l.Z)({props:e,name:"MuiCssBaseline"}),t=o.children,u=o.enableColorScheme,m=void 0!==u&&u;return(0,c.jsxs)(r.Fragment,{children:[(0,c.jsx)(i.Z,{styles:function(e){return function(e){var o,t,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],l={};r&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach((function(o){var t,a=(0,n.Z)(o,2),r=a[0],i=a[1];l[e.getColorSchemeSelector(r).replace(/\s*&/,"")]={colorScheme:null==(t=i.palette)?void 0:t.mode}}));var i=(0,a.Z)({html:d(e,r),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,a.Z)({margin:0},s(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},l),c=null==(o=e.components)||null==(t=o.MuiCssBaseline)?void 0:t.styleOverrides;return c&&(i=[i,c]),i}(e,m)}}),t]})}}}]);
//# sourceMappingURL=413.9b4abf75.chunk.js.map