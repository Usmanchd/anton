(this.webpackJsonpanton=this.webpackJsonpanton||[]).push([[0],[,,function(e,t,n){e.exports={container:"style_container__1b-EM",textContainer:"style_textContainer__93kDy",text:"style_text__jQYuz",whatWeDoing:"style_whatWeDoing__1HSeB",doingStuff:"style_doingStuff__2jDhK",doingText:"style_doingText__lKG-A",inCenter:"style_inCenter__pB0tf"}},,,,,function(e,t,n){e.exports={container:"style_container__2oVgC",personChanger:"style_personChanger__2wPzE"}},function(e,t,n){e.exports={arrContainer:"style_arrContainer__3JPFA",upDown:"style_upDown__-HYQF",hide:"style_hide__24dm9"}},function(e,t,n){e.exports={pos:"style_pos__2irF2",container:"style_container__3D1Oz"}},,,function(e,t,n){e.exports={logo:"style_logo__2VfkE"}},function(e,t,n){e.exports={main:"style_main__2ZF50"}},,,,,,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(11),o=n.n(s),r=n(12),i=n.n(r),l=n(0),j=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:i.a.logo,children:Object(l.jsx)("a",{href:"#",children:"Piri.ai"})})})},u=n(10),d=n(3),b=n(7),x=n.n(b),f=function(e){var t=e.url,n=e.handleMouse,c=e.pos;return Object(l.jsxs)("div",{className:x.a.container,style:c,children:[Object(l.jsx)("img",{src:t,alt:"Person",height:"100%"}),Object(l.jsx)("div",{onMouseEnter:function(){return n(!1)},onMouseLeave:function(){return n(!0)},className:x.a.personChanger})]})},O=function(){return Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"42.011",height:"23.011",viewBox:"0 0 42.011 23.011",children:Object(l.jsx)("path",{fill:"#fff",d:"M42.011 2.082l-2.093-2.093-18.918 18.918-18.918-18.918-2.093 2.093 20.929 20.929.082-.082.082.082z"})})},g=n(8),h=n.n(g),p=function(){var e=Object(c.useState)(1),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(1),o=Object(d.a)(s,2),r=o[0],i=o[1],j=Object(c.useState)([!0,!0]),b=Object(d.a)(j,2),x=b[0],g=b[1],p=Object(c.useState)(!0),_=Object(d.a)(p,2),v=_[0],m=_[1],y=Object(c.useState)(38),w=Object(d.a)(y,2),C=w[0],N=w[1];Object(c.useEffect)((function(){window.addEventListener("scroll",(function(){if(window.scrollY>550)return m(!1);m(!(window.scrollY>430));var e=window.scrollY/25;N(e+38),e>0&&g([!0,!0])}))}),[]);var M=function(e,t){if(console.log(e),!(C>38)){if("boy"===e){var n=Object(u.a)(x);return n[0]=t,g(n),a((function(e){return e>3?2:e+1}))}var c=Object(u.a)(x);return c[1]=t,g(c),i((function(e){return e>3?2:e+1}))}};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(f,{handleMouse:function(e){return M("boy",e)},url:"".concat("/anton","/assets/images/boy",1,".png"),pos:{right:"".concat(C,"%"),opacity:x[0]?1:0}}),Object(l.jsx)(f,{handleMouse:function(e){return M("boy",e)},url:"".concat("/anton","/assets/images/boy",2,".png"),pos:{right:"".concat(C,"%"),opacity:2!==n||x[0]?0:1}}),Object(l.jsx)(f,{handleMouse:function(e){return M("boy",e)},url:"".concat("/anton","/assets/images/boy",3,".png"),pos:{right:"".concat(C,"%"),opacity:3!==n||x[0]?0:1}}),Object(l.jsx)(f,{handleMouse:function(e){return M("boy",e)},url:"".concat("/anton","/assets/images/boy",4,".png"),pos:{right:"".concat(C,"%"),opacity:4!==n||x[0]?0:1}})]}),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(f,{handleMouse:function(e){return M("girl",e)},url:"".concat("/anton","/assets/images/girl",1,".png"),pos:{left:"".concat(C+10,"%"),opacity:x[1]?1:0}}),Object(l.jsx)(f,{handleMouse:function(e){return M("girl",e)},url:"".concat("/anton","/assets/images/girl",2,".png"),pos:{left:"".concat(C+10,"%"),opacity:2!==r||x[1]?0:1}}),Object(l.jsx)(f,{handleMouse:function(e){return M("girl",e)},url:"".concat("/anton","/assets/images/girl",3,".png"),pos:{left:"".concat(C+10,"%"),opacity:3!==r||x[1]?0:1}}),Object(l.jsx)(f,{handleMouse:function(e){return M("girl",e)},url:"".concat("/anton","/assets/images/girl",4,".png"),pos:{left:"".concat(C+10,"%"),opacity:4!==r||x[1]?0:1}})]}),Object(l.jsx)("div",{onClick:function(){document.body.scrollTop=550,document.documentElement.scrollTop=550},className:"".concat(h.a.arrContainer," ").concat(v?"":h.a.hide),children:Object(l.jsx)(O,{})})]})},_=n(9),v=n.n(_),m=function(){return Object(l.jsx)("div",{className:v.a.pos,children:Object(l.jsx)("div",{className:v.a.container})})};function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0px",n=Object(c.useState)(!1),a=Object(d.a)(n,2),s=a[0],o=a[1];return Object(c.useEffect)((function(){var n=new IntersectionObserver((function(e){var t=Object(d.a)(e,1)[0];o(t.isIntersecting)}),{rootMargin:t});e.current&&n.observe(e.current);var c=e.current;return function(){c&&(null===n||void 0===n||n.unobserve(c))}}),[e,t]),s}var w=n(2),C=n.n(w),N=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=Object(c.useRef)(),a=Object(c.useRef)(),s=Object(c.useRef)(),o=Object(c.useRef)(),r=Object(c.useRef)(),i=Object(c.useRef)(),j=Object(c.useRef)(),u=Object(c.useRef)(),d=y(e,"-250px"),b=y(t,"-250px"),x=y(n,"-250px"),f=y(a,"-250px"),O=y(s,"-250px"),g=y(o,"-250px"),h=y(r,"-250px"),p=y(i,"-250px"),_=y(j,"-250px"),v=y(u,"-250px");return Object(l.jsxs)("div",{id:"textContent",children:[Object(l.jsx)("div",{className:C.a.container,children:Object(l.jsx)("div",{className:C.a.textContainer,children:Object(l.jsxs)("div",{className:"".concat(C.a.text," ").concat(d?C.a.inCenter:""),ref:e,children:["Former Manhattan agency directors turned Brooklyn",Object(l.jsx)("nobr",{children:"hands-on"})," designers."]})})}),Object(l.jsxs)("div",{className:C.a.doingStuff,children:[Object(l.jsx)("div",{className:"".concat(C.a.whatWeDoing," ").concat(b?C.a.inCenter:""),ref:t,children:"What we \u2764 doing"}),Object(l.jsx)("div",{className:"".concat(C.a.doingText," ").concat(x?C.a.inCenter:""),ref:n,children:"Design"}),Object(l.jsx)("div",{className:"".concat(C.a.doingText," ").concat(O?C.a.inCenter:""),ref:s,children:"Products"}),Object(l.jsx)("div",{className:"".concat(C.a.doingText," ").concat(f?C.a.inCenter:""),ref:a,children:"Digital"}),Object(l.jsx)("div",{className:"".concat(C.a.doingText," ").concat(g?C.a.inCenter:""),ref:o,children:"UX"}),Object(l.jsx)("div",{className:"".concat(C.a.doingText," ").concat(h?C.a.inCenter:""),ref:r,children:"Photography"}),Object(l.jsx)("div",{className:"".concat(C.a.doingText," ").concat(p?C.a.inCenter:""),ref:i,children:"Video"}),Object(l.jsx)("div",{className:"".concat(C.a.doingText," ").concat(_?C.a.inCenter:""),ref:j,children:"Lectures"}),Object(l.jsx)("div",{className:"".concat(C.a.doingText," ").concat(v?C.a.inCenter:""),ref:u,children:"Workshops"})]})]})},M=n(13),T=n.n(M),S=function(){return Object(l.jsxs)("article",{className:T.a.main,children:[Object(l.jsx)(j,{}),Object(l.jsx)(m,{}),Object(l.jsx)(p,{}),Object(l.jsx)(N,{})]})};var D=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(S,{})})};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(D,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.6b906b6b.chunk.js.map