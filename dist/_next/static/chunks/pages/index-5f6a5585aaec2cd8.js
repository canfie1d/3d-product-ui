(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(1393)}])},1393:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return L}});var r=o(4051),t=o.n(r),a=o(5893),l=o(9008),i=o(7294),c=o(6135),s=o(6665),u=o(2261),d=o(1217),f=o(9477),m=function(e){var n=e.materialColor,o=e.materialPath,r=e.modelPath,t=e.scale,l=void 0===t?40:t,c=e.position,s=void 0===c?[0,0,0]:c,m=(0,i.useRef)(),h=(0,u.z)(d.E,r),_=(0,i.useState)(!1),p=_[0],x=_[1];return(0,i.useEffect)((function(){o&&h.scene.traverse((function(e){if(e.material&&"Logo"===e.material.name){var n=o.replace("public/","");e.material.map=(new f.TextureLoader).load(n),e.material.map.flipY=!1}}))}),[o,h.scene]),(0,i.useEffect)((function(){n&&h.scene.traverse((function(e){e.material&&"Mug"===e.material.name&&e.material.color.setHex(n)}))}),[n,h.scene]),(0,u.x)((function(e,n){return m.current.rotation.y+=.003})),(0,a.jsx)("primitive",{ref:m,object:h.scene,position:s,scale:p?1*l:l,onPointerOver:function(e){return x(!0)},onPointerOut:function(e){return x(!1)}})},h=function(e){var n=e.materialColor,o=e.modelPath,r=e.scale,t=void 0===r?40:r,l=e.position,u=void 0===l?[0,0,0]:l,d=e.materialPath;return(0,a.jsx)("div",{style:{width:"100vh",height:"100%"},children:(0,a.jsxs)(c.Xz,{children:[(0,a.jsx)("ambientLight",{intensity:.5}),(0,a.jsx)("spotLight",{position:[10,10,10],angle:.15,penumbra:1}),(0,a.jsx)("pointLight",{position:[-10,-10,-10]}),(0,a.jsxs)(i.Suspense,{fallback:null,children:[(0,a.jsx)(m,{materialColor:n,modelPath:o,scale:t,position:u,materialPath:d}),(0,a.jsx)(s.z,{})]})]})})},_=o(7160),p=o.n(_),x=(new(o(8687).GraphQLClient)("https://api.github.com/graphql",{headers:{Authorization:"Bearer ".concat("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")}}),{headers:{"content-type":"multipart/form-data"},onUploadProgress:function(e){console.log("Current progress:",Math.round(100*e.loaded/e.total))}}),v=o(9669),g=o.n(v),j=function(e){var n=(0,i.useRef)(null),o=(0,i.useRef)(null);return(0,a.jsxs)("form",{ref:o,children:[(0,a.jsx)("button",{type:"button",onClick:function(){var e;null===(e=n.current)||void 0===e||e.click()},children:e.children}),(0,a.jsx)("input",{accept:e.acceptedFileTypes,multiple:e.allowMultipleFiles,name:e.uploadFileName,onChange:function(n){var r,t;if(null===(r=n.target.files)||void 0===r?void 0:r.length){var a=new FormData;Array.from(n.target.files).forEach((function(e){a.append(n.target.name,e)})),e.onChange(a),null===(t=o.current)||void 0===t||t.reset()}},ref:n,style:{display:"none"},type:"file"})]})};j.defaultProps={acceptedFileTypes:"",allowMultipleFiles:!1};var N=j,b=o(5803),C=o.n(b),w=function(e){var n=e.id,o=void 0===n?"colorPicker":n,r=e.className,t=e.onChange,l=e.labelClassName,c=e.inputClassName,s=e.showGradient,u=(0,i.useState)("#ffffff"),d=u[0],f=u[1],m=function(e){var n=e.target.value;f(n),t(n)};if(s){return(0,a.jsxs)("div",{className:r,style:{background:"linear-gradient(60deg, red, orange, yellow, green, blue, indigo, violet)"},children:[(0,a.jsx)("input",{id:o,type:"color",value:d,onChange:m,className:c}),(0,a.jsx)("label",{className:l,htmlFor:o})]})}return(0,a.jsxs)("div",{className:r,children:[(0,a.jsx)("label",{className:l,style:{paddingRight:"10px"},htmlFor:"colorPicker",children:"Color"}),(0,a.jsx)("input",{id:o,type:"color",value:d,onChange:m,className:c})]})},y=function(e){var n=e.onChange,o=e.colors,r=(0,i.useState)("#ffffff"),t=r[0],l=r[1],c=function(e){l(e),n(e)};return(0,a.jsxs)("fieldset",{id:"color-chooser",className:C().container,children:[(0,a.jsx)("legend",{children:"Color"}),o.map((function(e,n){return"custom"===e?(0,a.jsx)(w,{onChange:c,className:"".concat(C().color," ").concat(!o.includes(t)&&C()["color-selected"]),inputClassName:C().hidden,labelClassName:C()["color-label"],showGradient:!0}):(0,a.jsxs)("div",{className:"".concat(C().color," ").concat(t===e&&C()["color-selected"]),style:{backgroundColor:e},children:[(0,a.jsx)("label",{className:C()["color-label"],htmlFor:"color-".concat(n)}),(0,a.jsx)("input",{id:"color-".concat(n),type:"radio",value:e,onChange:function(){return c(e)},checked:t===e,className:C().hidden})]},"radio-".concat(n))}))]})},k=o(7393),P=o.n(k),H=function(e){var n=e.children;return(0,a.jsx)("div",{className:P().container,children:i.Children.map(n,(function(e){return(0,a.jsx)("div",{className:P().column,children:e})}))})};function E(e,n,o,r,t,a,l){try{var i=e[a](l),c=i.value}catch(s){return void o(s)}i.done?n(c):Promise.resolve(c).then(r,t)}var L=function(){var e=(0,i.useState)(void 0),n=e[0],o=e[1],r=(0,i.useState)(void 0),c=r[0],s=r[1],u=function(){var e,n=(e=t().mark((function e(n){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g().post("/api/upload",n,x);case 2:r=e.sent,o(r.data.file.path);case 4:case"end":return e.stop()}}),e)})),function(){var n=this,o=arguments;return new Promise((function(r,t){var a=e.apply(n,o);function l(e){E(a,r,t,l,i,"next",e)}function i(e){E(a,r,t,l,i,"throw",e)}l(void 0)}))});return function(e){return n.apply(this,arguments)}}();return(0,a.jsxs)("div",{className:p().container,children:[(0,a.jsxs)(l.default,{children:[(0,a.jsx)("title",{children:"Assmeble Mugs"}),(0,a.jsx)("meta",{name:"description",content:"Assemble makes coffee mugs"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.png"})]}),(0,a.jsxs)("main",{className:p().main,children:[(0,a.jsxs)("div",{className:"".concat(p().border," ").concat(p()["w-100"],"}"),children:[(0,a.jsx)("h1",{className:p().title,children:"Assemble Inc."}),(0,a.jsxs)("p",{className:p().description,children:["We make ",(0,a.jsx)("s",{children:"web apps"})," coffee mugs"]})]}),(0,a.jsx)("div",{className:"".concat(p().border," ").concat(p()["inherit-height"]),children:(0,a.jsx)(h,{scale:40,modelPath:"/assets/coffee-mug.gltf",materialPath:n,materialColor:c})}),(0,a.jsxs)(H,{children:[(0,a.jsxs)("div",{className:p().flex,children:[(0,a.jsx)("div",{className:p().column,children:(0,a.jsx)("span",{children:"Image"})}),(0,a.jsx)("div",{className:p().column,children:(0,a.jsx)(N,{uploadFileName:"file",onChange:u,children:"Customize"})})]}),(0,a.jsx)(y,{colors:["#ffffff","#ff0000","#ffff00","#00ff00","#0000ff","#000000","custom"],onChange:function(e){var n=e.replace("#","0x");s(n)}})]})]})]})}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",border:"Home_border__siNOS","inherit-height":"Home_inherit-height__9nrRa","w-100":"Home_w-100___UO7T","mt-2":"Home_mt-2__dfCIk",flex:"Home_flex__XpVr_",column:"Home_column__Bx5cY",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},5803:function(e){e.exports={container:"color-chooser_container__o3qd7","color-label":"color-chooser_color-label__XBuys",color:"color-chooser_color__xKD2G","color-input":"color-chooser_color-input__3k4ed","color-selected":"color-chooser_color-selected__Gf7sy",hidden:"color-chooser_hidden__7g48L"}},7393:function(e){e.exports={container:"controller_container__XGwir",column:"controller_column__AxUTb"}}},function(e){e.O(0,[737,633,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);