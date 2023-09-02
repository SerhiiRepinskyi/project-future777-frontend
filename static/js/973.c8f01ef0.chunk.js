"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[973],{1955:function(n,e,t){t.d(e,{b:function(){return o}});var r=t(2022),o={useRegisterMutation:r.l4,useLogInMutation:r.e9,useLogOutMutation:r.$n,useAvatarUserMutation:r.b$,useGetCurrentUserQuery:r.XC,useHelpUserMutation:r.Zq,useThemeUserMutation:r.Ce,useUpdateUserMutation:r.kD,useGetBoardsQuery:r.aH,useGetBoardByIdQuery:r.cu,useAddBoardsMutation:r.vN,useDeleteBoardByIdMutation:r.r4,useUpdateBoardByIdMutation:r.cU,useAddColumnMutation:r.ch,useUpdateColumnByIdMutation:r.yg,useDeleteColumnByIdMutation:r.wC,useGetAllCardsQuery:r.PA,useAddCardMutation:r.B9,useUpdateCardByIdMutation:r.$P,useDeleteCardByIdMutation:r.cO,useUpdateCardColumnByIdMutation:r.Iz}},844:function(n,e,t){t.d(e,{Ai:function(){return l},NB:function(){return p},dH:function(){return d},i6:function(){return c}});t(2791);var r=t(6151),o=t(4554),i=t(3400),a=t(4596),s=t(184),l=function(n){var e=n.title,t=n.onClick,i=n.type;return(0,s.jsxs)(r.Z,{onClick:t,type:i,variant:"contained",disableElevation:!0,sx:{display:"flex",gap:"8px",color:"#161616",fontFamily:"Poppins, sans-serif",alignItems:"center",textTransform:"none",borderRadius:"8px",letterSpacing:"-0.02em",fontSize:"14px",background:" var(--button-bg-color)",lineHeight:"21px",fontWeight:"500",fontStyle:"normal",width:"100%",height:"56px","&:hover":{background:"var( --button-bg-color-hover)"}},children:[(0,s.jsx)(o.Z,{sx:{width:"28px",height:"28px",background:"var(--icon-plus-bg-color)",borderRadius:"6px",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,s.jsx)("svg",{width:"14",height:"14",stroke:"var(--icon-plus-color)",children:(0,s.jsx)("use",{href:a.Z+"#icon-add"})})}),e]})},d=function(n){var e=n.title,t=n.onClick,o=n.type;return(0,s.jsx)(r.Z,{type:o,onClick:t,disableElevation:!0,sx:{display:"flex",color:"#161616",fontFamily:"Poppins, sans-serif",alignItems:"center",textTransform:"none",borderRadius:"8px",marginTop:"24px",letterSpacing:"-0.02em",fontSize:"14px",background:"var(--button-bg-color)",lineHeight:"21px",fontWeight:"500",fontStyle:"normal",width:"100%",height:"56px","&:hover":{background:"var( --button-bg-color-hover)"}},children:e})},c=function(n){var e=n.onClick;return(0,s.jsxs)(r.Z,{onClick:e,variant:"contained",disableElevation:!0,sx:{display:"flex",gap:"8px",color:"var(--primary-text-color)",fontFamily:"Poppins, sans-serif",alignItems:"center",textTransform:"none",borderRadius:"8px",letterSpacing:"-0.02em",fontSize:"14px",background:"var(--button-add-bg-color)",lineHeight:"21px",fontWeight:"500",fontStyle:"normal",width:"334px",height:"56px","&:hover":{background:"var(--button-add-bg-color)"}},children:[(0,s.jsx)(o.Z,{sx:{width:"28px",height:"28px",background:"var(--button-add-box-color)",borderRadius:"6px",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,s.jsx)("svg",{width:"14",height:"14",stroke:"var(--icon-add-color)",children:(0,s.jsx)("use",{href:a.Z+"#icon-add"})})}),"Add another column"]})},p=function(n){var e=n.onClick;return(0,s.jsx)(i.Z,{type:"button",onClick:e,sx:{width:"40px",height:"36px",borderRadius:"6px",background:"var(--sidebar-icon-plus-bg-color)","&:hover, &:focus":{background:"var(--sidebar-icon-plus-bg-color-HOVER-FOCUS)"}},children:(0,s.jsx)("svg",{width:"20",height:"20",stroke:"var(--sidebar-icon-plus-color)",children:(0,s.jsx)("use",{href:a.Z+"#icon-add"})})})}},841:function(n,e,t){t.d(e,{p:function(){return y},l:function(){return j}});var r,o,i=t(168),a=t(7630),s=t(2554),l=(0,s.F4)(r||(r=(0,i.Z)(["\n  0% {transform: translateY(-25px)}\n\n  20% {transform: translateY(0px)}\n  80% {transform: translateY(0px)}\n\n  100% {transform: translateY(25px)}\n"]))),d=(0,s.F4)(o||(o=(0,i.Z)(["\n  0% {transform: translateX(-200px)}\n  100% {transform: translateY(0px)}\n"]))),c=(0,a.ZP)("svg")({fill:"var(--sidebar-icon-logo-color)",width:"12px",height:"16px",animation:"".concat(l," 6s infinite"),animationTimingFunction:"ease"}),p=(0,a.ZP)("div")((function(n){return{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px",width:"110px",transform:"translateX(-135px)",animation:n.isSidebarShown?"".concat(d," 300ms"):"none",animationTimingFunction:"ease",animationFillMode:"forwards"}})),u=(0,a.ZP)("div")({width:"32px",height:"32px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"var(--sidebar-icon-logo-bg-color)",borderRadius:"8px",overflow:"hidden"}),x=(0,a.ZP)("p")({margin:"0px",color:"var(--sidebar-primary-text-color)",fontFamily:"Poppins",fontSize:"16px",fontWeight:600,letterSpacing:"-0.64px"}),h=(0,a.ZP)("div")({display:"flex",justifyContent:"space-between",alignItems:"center",gap:"14px"}),f=(0,a.ZP)("div")({display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#161616",borderRadius:"8px"}),g=(0,a.ZP)("svg")({fill:"#ffffff"}),m=(0,a.ZP)("p")({margin:"0px",color:"#161616",fontFamily:"Poppins",fontWeight:600,letterSpacing:"-0.64px"}),b=t(4596),v=t(184),y=function(n){var e=n.sx,t=n.isSidebarShown;return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(p,{sx:e,isSidebarShown:t,children:[(0,v.jsx)(u,{children:(0,v.jsx)(c,{children:(0,v.jsx)("use",{href:b.Z+"#icon-logo-lightning"})})}),(0,v.jsx)(x,{children:"Task Pro"})]})})},j=function(n){var e=n.style;return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(h,{style:e,sx:{width:{0:166,768:222}},children:[(0,v.jsx)(f,{sx:{width:{0:40,768:48},height:{0:40,768:48}},children:(0,v.jsx)(g,{sx:{width:{0:15,768:18},height:{0:20,768:24}},children:(0,v.jsx)("use",{href:b.Z+"#icon-logo-lightning"})})}),(0,v.jsx)(m,{sx:{fontSize:{0:28,768:40},letterSpacing:{0:-1.12,768:-1.6}},children:"Task Pro"})]})})}},2821:function(n,e,t){t.d(e,{NT:function(){return y},RN:function(){return Z},SY:function(){return v},f$:function(){return m},fb:function(){return h},l_:function(){return g},pU:function(){return b},tN:function(){return f},vz:function(){return j}});var r,o,i,a,s,l,d,c,p,u=t(168),x=t(6088),h=x.Z.button(r||(r=(0,u.Z)(["\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: rgba(255, 255, 255, 0.5);\n\n  background-color: transparent;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    border: 1px solid #ffffff;\n    color: rgba(255, 255, 255, 1);\n  }\n"]))),f=x.Z.form(o||(o=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  margin-bottom: 24px;\n"]))),g=x.Z.input(i||(i=(0,u.Z)(["\n  resize: none;\n  color: #ffffff;\n  padding: 14px 14px;\n  background-color: transparent;\n  border: 1px solid rgba(190, 219, 176, 0.4);\n  border-radius: 8px;\n  margin-bottom: 10px;\n  :focus {\n    border: 1px solid #bedbb0;\n    outline: none;\n  }\n  ::placeholder {\n    color: #ffffff;\n    opacity: 30%;\n  }\n"]))),m=x.Z.svg(a||(a=(0,u.Z)(["\n  width: 18px;\n  height: 18px;\n  // stroke: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    stroke: #bedbb0;\n  }\n"]))),b=x.Z.ul(s||(s=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  margin-bottom: 14px;\n"]))),v=x.Z.ul(l||(l=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  margin-bottom: 14px;\n  width: 260px;\n"]))),y=x.Z.li(d||(d=(0,u.Z)(["\n  display: flex;\n  width: 28px;\n  height: 28px;\n  border-radius: 14px;\n\n  &:hover,\n  &:focus {\n    border-radius: 5px;\n    background-color: #bedbb0;\n  }\n"]))),j=x.Z.img(c||(c=(0,u.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 5px;\n  cursor: pointer;\n"]))),Z=x.Z.li(p||(p=(0,u.Z)(["\n  display: flex;\n  width: 20px;\n  height: 20px;\n  align-items: center; \n  justify-content: center;\n\n  &:hover,\n  &:focus {\n    border-radius: 5px;\n    background-color: rgba(190, 219, 176, 0.2);\n  }\n"])))},9245:function(n,e,t){var r=t(1413),o=t(5193),i=t(5607),a=t(4554),s=t(890),l=t(4596),d=t(2821),c=t(184),p={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:350,borderRadius:2,border:"1px solid rgba(190, 219, 176, 0.50)",background:"#151515",padding:3},u={color:"#FFF",fontSize:18,fontStyle:"normal",fontWeight:500,lineHeight:"normal",letterSpacing:-.36,marginBottom:3};e.Z=function(n){var e=n.title,t=n.open,x=n.handleClose,h=n.children,f=(0,o.Z)("(min-width: 1440px)");return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i.Z,{open:t,onClose:x,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,c.jsxs)(a.Z,{sx:(0,r.Z)((0,r.Z)({},p),{},{width:f?350:335}),children:[(0,c.jsx)(s.Z,{variant:"h2",sx:u,children:e}),(0,c.jsx)(d.fb,{type:"button",onClick:x,children:(0,c.jsx)("svg",{style:{stroke:"currentcolor"},width:"18",height:"18",children:(0,c.jsx)("use",{href:l.Z+"#icon-x-close"})})}),h]})})})}},9884:function(n,e,t){t.d(e,{H:function(){return r},p:function(){return o}});var r=260,o=225},9534:function(n,e,t){t.r(e),t.d(e,{default:function(){return fe}});var r,o,i,a,s,l,d,c,p,u,x,h,f,g,m,b,v,y,j,Z,w,k,S,C=t(9439),P=t(4554),F=t(4395),T=t(2791),z=t(9884),I=t(6459),M=t(9953),B=t(168),R=t(7630),_=t(2554),E=(0,_.F4)(r||(r=(0,B.Z)(["\n  0% {transform: translateX(-250px)}\n  100% {transform: translateX(0px)}\n"]))),U=(0,_.F4)(o||(o=(0,B.Z)(["\n  0% {transform: translateX(250px)}\n  100% {transform: translateX(0px)}\n"]))),A=(0,_.F4)(i||(i=(0,B.Z)(["\n  0% {transform: translateY(-250px)}\n  100% {transform: translateY(0px)}\n"]))),W=(0,_.F4)(a||(a=(0,B.Z)(["\n  0%, 100% {\n    transform: translateX(0);\n  }\n  10%, 30%, 50%, 70%, 90% {\n    transform: translateX(-2px);\n   \n  }\n  20%, 40%, 60%, 80% {\n    transform: translateX(2px);\n  \n  }\n\n"]))),H=(0,R.ZP)("p")((function(n){return{margin:"0px",color:"var(--sidebar-secondary-text-color)",fontFamily:"Poppins",fontSize:"12px",fontWeight:400,letterSpacing:"-0.24px",transform:"translateX(250px)",animation:n.isSidebarShown?"".concat(U," 400ms"):"none",animationTimingFunction:"ease",animationFillMode:"forwards"}})),N=(0,R.ZP)("div")({paddingBottom:"14px",paddingTop:"14px",borderTop:"1px solid var(--sidebar-border-color)",borderBottom:"1px solid var(--sidebar-border-color)",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px"}),D=(0,R.ZP)("p")((function(n){return{margin:"0px",color:"var(--sidebar-primary-text-color)",fontFamily:"Poppins",fontSize:"14px",fontWeight:500,letterSpacing:"-0.28px",transform:"translateX(-250px)",animation:n.isSidebarShown?"".concat(E," 400ms"):"none",animationTimingFunction:"ease",animationFillMode:"forwards"}})),X=(0,R.ZP)("div")({borderRadius:"8px",display:"flex",flexDirection:"column",justifyContent:"left",backgroundColor:"var(--sidebar-secondary-bg-color)",overflow:"hidden"}),L=(0,R.ZP)("img")((function(n){return{width:"54px",height:"78px",marginBottom:"14px",transform:"translateY(250px)",animation:n.isSidebarShown?"".concat(A," 400ms"):"none",animationTimingFunction:"ease",animationFillMode:"forwards"}})),Y=(0,R.ZP)("p")((function(n){return{margin:"0px",color:"var(--sidebar-primary-text-color)",fontFamily:"Poppins",fontWeight:400,letterSpacing:-.15,"& span":{color:"var(--button-bg-color)"},transform:"translateX(-250px)",animation:n.isSidebarShown?"".concat(E," 400ms"):"none",animationTimingFunction:"ease",animationFillMode:"forwards"}})),q=(0,R.ZP)("button")((function(n){return{padding:0,width:"94px",height:"20px",display:"flex",gap:"8px",justifyContent:"space-between",alignItems:"center",color:"var(--sidebar-primary-text-color)",backgroundColor:"transparent",fontFamily:"Poppins",fontSize:"12px",fontWeight:500,lineHeight:1.5,letterSpacing:"-0.24px",border:"none",cursor:"pointer","&:hover, &:focus":{textDecoration:"underline",outline:"none"},transform:"translateX(250px)",animation:n.isSidebarShown?"".concat(U," 400ms"):"none",animationTimingFunction:"ease",animationFillMode:"forwards"}})),O=(0,R.ZP)("svg")((function(n){return{stroke:"var(--sidebar-primary-text-color)",width:"20px",height:"20px",animation:n.startAnimation?"".concat(W," 1s  ease-out"):"none","&:hover, &:focus":{textDecoration:"underline",outline:"none"}}})),G="SidebarCustomScroll_container__EnYRA",$=t.p+"static/media/aloe-vera.cc5a28fb2310459bfc04.png",Q=t(4596),V=t(841),J=t(844),K=t(493),nn=t(5021),en=t(6278),tn=(0,_.F4)(s||(s=(0,B.Z)(["\n  0% {transform: rotate(0deg)}\n  100% {transform: rotate(360deg)}\n"]))),rn=(0,R.ZP)("div")({paddingTop:"20px",paddingBottom:"20px",width:"100%",display:"flex",flexDirection:"row",gap:"8px",justifyContent:"space-between",alignItems:"center",overflow:"hidden"}),on=(0,R.ZP)("svg")((function(n){return{width:"18px",height:"18px",display:"flex",justifyContent:"center",alignItems:"center",stroke:"var(--sidebar-primary-text-color)",animation:n.startAnimation?"".concat(tn," 1s  ease-out"):"none"}})),an=(0,R.ZP)("svg")({width:"16px",height:"16px",display:"flex",justifyContent:"center",alignItems:"center"}),sn=(0,R.ZP)("div")({overflow:"hidden",whiteSpace:"nowrap"}),ln=(0,R.ZP)("p")((function(n){var e=n.titleWidth,t=n.titleWrapWidth,r=n.current,o=(0,_.F4)(l||(l=(0,B.Z)(["\n    0% { transform: translateX(0px); }\n    100% { transform: translateX(","px); }\n  "])),t-e);return{margin:"0px",color:"var(--sidebar-primary-text-color)",fontFamily:"Poppins",fontSize:"14px",fontStyle:"normal",fontWeight:"500",letterSpacing:"-0.28px",animationName:e>=t&&r?o:"none",animationDuration:"".concat(30*e,"ms"),animationTimingFunction:"linear",animationIterationCount:"infinite",animationDirection:"alternate"}})),dn=t(7762),cn=t(184),pn=function(n){var e=n.title,t=n.setTitleWidth,r=(0,T.useRef)(null);return(0,T.useEffect)((function(){var n=new ResizeObserver((function(n){var e,o=(0,dn.Z)(n);try{for(o.s();!(e=o.n()).done;){var i=e.value;i.target===r.current&&t(i.contentRect.width)}}catch(a){o.e(a)}finally{o.f()}})),e=r.current;return e&&n.observe(e),function(){e&&n.unobserve(e)}}),[t]),(0,cn.jsx)("span",{ref:r,style:{position:"absolute",top:"-9999px",left:"-9999px",visibility:"hidden",whiteSpace:"nowrap"},children:e})},un=t(763),xn=t(1955),hn=t(4165),fn=t(5861),gn=t(5705),mn=t(890),bn=t(2821),vn=t(6727),yn=t(9245),jn=["#icon-Project","#icon-star","#icon-loading","#icon-puzzle","#icon-container","#icon-lightning","#icon-colors","#icon-hexagon"],Zn=["https://res.cloudinary.com/dpurp913m/image/upload/v1693060747/teamProject/bcg-laptop-22_w6d1ix.jpg","https://res.cloudinary.com/dpurp913m/image/upload/v1693060747/teamProject/bcg-laptop-21_lhyxtz.jpg","https://res.cloudinary.com/dpurp913m/image/upload/v1693060747/teamProject/bcg-laptop-23_nvf3nr.jpg","https://res.cloudinary.com/dpurp913m/image/upload/v1693060747/teamProject/bcg-laptop-19_jgsoar.jpg","https://res.cloudinary.com/dpurp913m/image/upload/v1693060746/teamProject/bcg-laptop-18_lz8hnp.jpg","https://res.cloudinary.com/dpurp913m/image/upload/v1693060746/teamProject/bcg-laptop-16_hbougf.jpg","https://res.cloudinary.com/dpurp913m/image/upload/v1693060746/teamProject/bcg-laptop-15_p5qieq.jpg","https://res.cloudinary.com/dpurp913m/image/upload/v1693060746/teamProject/bcg-laptop-13_kzosan.jpg","https://res.cloudinary.com/dpurp913m/image/upload/v1693060746/teamProject/bcg-laptop-12_nehdkx.jpg","https://res.cloudinary.com/dpurp913m/image/upload/v1693060747/teamProject/bcg-laptop-24_ob1z2m.jpg","https://res.cloudinary.com/dpurp913m/image/upload/v1693060747/teamProject/bcg-laptop-25_cdzpq5.jpg","https://res.cloudinary.com/dpurp913m/image/upload/v1693060747/teamProject/bcg-laptop-20_je1cm3.jpg","https://res.cloudinary.com/dpurp913m/image/upload/v1693060746/teamProject/bcg-laptop-17_ypzhw7.jpg","https://res.cloudinary.com/dpurp913m/image/upload/v1693060746/teamProject/bcg-laptop-14_gvggrl.jpg","https://res.cloudinary.com/dpurp913m/image/upload/v1693060746/teamProject/bcg-laptop-11_rfi4bm.jpg"],wn=t(5048),kn=t(3065),Sn=t(7689),Cn={color:"#FFF",fontSize:14,fontStyle:"normal",fontWeight:500,lineHeight:"normal",letterSpacing:-.36},Pn=function(n){var e=n.board,t=void 0===e?{}:e,r=n.boardTitle,o=n.boardId,i=void 0===o?"":o,a=n.open,s=n.handleClose,l=(0,wn.I0)(),d=(0,T.useState)(jn[0]),c=(0,C.Z)(d,2),p=c[0],u=c[1],x=(0,T.useState)(t.icon),h=(0,C.Z)(x,2),f=h[0],g=h[1],m=(0,T.useState)(t.background),b=(0,C.Z)(m,2),v=b[0],y=b[1],j=(0,T.useState)(t.icon),Z=(0,C.Z)(j,2),w=Z[0],k=Z[1],S=(0,T.useState)(Zn[0]),P=(0,C.Z)(S,2),F=P[0],z=P[1],I=(0,T.useState)(0),M=(0,C.Z)(I,2),B=M[0],R=M[1],_=xn.b.useAddBoardsMutation(),E=(0,C.Z)(_,1)[0],U=xn.b.useUpdateBoardByIdMutation(),A=(0,C.Z)(U,1)[0],W=(0,Sn.s0)(),H=function(){var n=(0,fn.Z)((0,hn.Z)().mark((function n(e){var t,o,a,d;return(0,hn.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,t={title:e,icon:f,iconId:p,background:B,backgroundURL:F},"New board"!==r){n.next=9;break}return n.next=5,E(t);case 5:o=n.sent,l((0,kn.ik)(o)),a=o.data._id,W("/home/".concat(a));case 9:if("Edit board"!==r){n.next=14;break}return n.next=12,A({boardId:i,FormData:t});case 12:d=n.sent,l((0,kn.ik)(d));case 14:s(),n.next=20;break;case 17:n.prev=17,n.t0=n.catch(0),console.log(n.t0);case 20:D.handleReset();case 21:case"end":return n.stop()}}),n,null,[[0,17]])})));return function(e){return n.apply(this,arguments)}}(),N=vn.Ry({title:vn.Z_().min(2,"Must be more then 2 symbols").required("Title is required").matches(/^(\w*)$/,"Title may contain only letters, apostrophe, dash and spaces."),description:vn.Z_()}),D=(0,gn.TA)({initialValues:{title:""},onSubmit:function(n){var e=n.title;return H(e)},validationSchema:N});return(0,cn.jsx)(cn.Fragment,{children:(0,cn.jsx)(yn.Z,{title:r,open:a,handleClose:s,children:(0,cn.jsxs)(bn.tN,{onSubmit:D.handleSubmit,children:[(0,cn.jsx)(bn.l_,{id:"title",name:"title",placeholder:t?t.title:"Title",onChange:D.handleChange,onBlur:D.handleBlur,value:D.values.title}),(0,cn.jsx)(mn.Z,{variant:"h2",sx:Cn,children:"Icons"}),(0,cn.jsx)(bn.pU,{children:jn.map((function(n,e){return(0,cn.jsx)(bn.RN,{onClick:function(){return function(n,e){u(n),g(e),k(e)}(n,e)},isSelected:w===e,children:(0,cn.jsx)(bn.f$,{children:(0,cn.jsx)("use",{href:Q.Z+n,style:{stroke:w===e?"#FFFFFF":"rgba(255, 255, 255, 0.5)",transition:"stroke 0.2s ease"}})})},n)}))}),(0,cn.jsx)(mn.Z,{variant:"h2",sx:Cn,children:"Background"}),(0,cn.jsxs)(bn.SY,{children:[(0,cn.jsx)(bn.NT,{}),Zn.map((function(n,e){return(0,cn.jsx)(bn.NT,{onClick:function(){z(n),R(e),y(e)},children:(0,cn.jsx)(bn.vz,{src:n,alt:"background picture",style:{border:"2px solid ".concat(v===e?"white":"transparent")}})},n)}))]}),(0,cn.jsx)(J.Ai,{title:"New board"===r?"Create":"Edit",type:"submit"})]})})})},Fn=function(n){var e=n.board,t=n.current,r=e._id,o=e.icon,i=e.title,a=(0,T.useState)(!1),s=(0,C.Z)(a,2),l=s[0],d=s[1],c=(0,T.useState)(0),p=(0,C.Z)(c,2),u=p[0],x=p[1],h=(0,T.useState)(130),f=(0,C.Z)(h,2),g=f[0],m=f[1],b=(0,T.useState)(window.innerWidth),v=(0,C.Z)(b,2),y=v[0],j=v[1],Z=(0,T.useState)(!0),w=(0,C.Z)(Z,2),k=w[0],S=w[1],F=(0,T.useState)(!1),z=(0,C.Z)(F,2),I=z[0],M=z[1],B=xn.b.useDeleteBoardByIdMutation(),R=(0,C.Z)(B,1)[0],_=(0,un.debounce)((function(){j(window.innerWidth)}),200);(0,T.useEffect)((function(){var n=Math.floor(8001*Math.random())+7e3,e=setInterval((function(){S(!0),setTimeout((function(){S(!1)}),1e3)}),n);return function(){clearInterval(e)}}),[]),(0,T.useEffect)((function(){return window.addEventListener("resize",_),function(){window.removeEventListener("resize",_)}}),[_]),(0,T.useEffect)((function(){m(y<=320?85:y<=768?120:130)}),[y,i]);var E=function(){return M(!I)};return(0,cn.jsxs)(cn.Fragment,{children:[(0,cn.jsx)(pn,{title:i,setTitleWidth:x}),(0,cn.jsxs)(rn,{onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)},sx:{pl:{0:1.75,768:3},pr:{0:1.75,768:3},backgroundColor:t?"var(--sidebar-board-item-bg-color-CURRENT)":"transparent"},children:[(0,cn.jsxs)(P.Z,{sx:{display:"flex",flexDirection:"row",gap:{0:.5,768:1},alignItems:"center"},children:[(0,cn.jsx)(on,{startAnimation:k,sx:{opacity:t?1:.5},children:(0,cn.jsx)("use",{href:Q.Z+o})}),(0,cn.jsx)(sn,{sx:{width:t?{0:85,320:"calc(60vw - 105px)",375:120,768:130}:{0:135,320:"calc(60vw - 55px)",375:170,768:180}},children:(0,cn.jsx)(ln,{sx:{opacity:t?1:.5},titleWidth:u,titleWrapWidth:g,current:t,children:i})})]}),l&&(0,cn.jsx)(P.Z,{sx:{position:"absolute",right:0,width:"4px",height:"100%",backgroundColor:"var(--sidebar-board-item-bg-color-AFTER)",opacity:.4,borderRadius:"4px 0px 0px 4px"}}),t&&(0,cn.jsx)(P.Z,{sx:{position:"absolute",right:0,width:"4px",height:"100%",backgroundColor:"var(--sidebar-board-item-bg-color-AFTER)",borderRadius:"4px 0px 0px 4px"}}),t&&(0,cn.jsxs)(K.Z,{disablePadding:!0,sx:{display:"flex",flexDirection:"row",gap:1,alignItems:"center",justifyContent:"center"},children:[(0,cn.jsx)(nn.ZP,{disablePadding:!0,children:(0,cn.jsx)(en.Z,{sx:{p:0,m:0,pointerEvents:"auto",backgroundColor:"transparent",opacity:.5,stroke:"var(--sidebar-primary-text-color)","&:hover, &:focus":{opacity:1,backgroundColor:"transparent"}},onClick:function(n){n.stopPropagation(),E()},children:(0,cn.jsx)(an,{children:(0,cn.jsx)("use",{href:Q.Z+"#icon-pencil"})})})}),(0,cn.jsx)(nn.ZP,{disablePadding:!0,children:(0,cn.jsx)(en.Z,{sx:{p:0,m:0,pointerEvents:"auto",backgroundColor:"transparent",opacity:.5,stroke:"var(--sidebar-primary-text-color)","&:hover, &:focus":{opacity:1,backgroundColor:"transparent"}},onClick:function(n){n.stopPropagation(),R(r)},children:(0,cn.jsx)(an,{children:(0,cn.jsx)("use",{href:Q.Z+"#icon-trash"})})})})]})]}),(0,cn.jsx)(Pn,{board:e,boardTitle:"Edit board",open:I,handleClose:E})]})},Tn=function(){var n=(0,Sn.s0)(),e=xn.b.useGetBoardsQuery().data,t=(0,T.useState)(""),r=(0,C.Z)(t,2),o=r[0],i=r[1];(0,T.useEffect)((function(){var n=(null===e||void 0===e?void 0:e.length)>0?e[(null===e||void 0===e?void 0:e.length)-1]._id:"";i(n)}),[e]);return(0,cn.jsx)(cn.Fragment,{children:(0,cn.jsx)(K.Z,{disablePadding:!0,sx:{display:"flex",flexDirection:"column-reverse",gap:.5,mb:3},children:null===e||void 0===e?void 0:e.map((function(e){return(0,cn.jsx)(nn.ZP,{disablePadding:!0,children:(0,cn.jsx)(en.Z,{sx:{p:0,m:0,pointerEvents:o===e._id?"none":"auto","&:hover, &:focus":{backgroundColor:"var(--sidebar-board-item-bg-color-CURRENT)"}},onClick:function(){return t=e._id,i(t),void n("/home/".concat(t));var t},children:(0,cn.jsx)(Fn,{board:e,current:o===e._id})})},e._id)}))})})},zn=t(6088),In=zn.Z.button(d||(d=(0,B.Z)(["\n  display: flex;\n  gap: 14px;\n  padding: 0px;\n  justify-content: center;\n  align-items: center;\n  height: 32px;\n  width: 105px;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n\n  color: var(--sidebar-icon-logout-color);\n  &:hover,\n  &:focus {\n    color: var(--sidebar-icon-logout-color-HOVER-FOCUS);\n  }\n"]))),Mn=zn.Z.span(c||(c=(0,B.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--sidebar-primary-text-color);\n  font-family: 'Poppins';\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"]))),Bn=zn.Z.svg(p||(p=(0,B.Z)(["\n  width: 32px;\n  height: 32px;\n  fill: none;\n  stroke: currentColor;\n"]))),Rn=t(2600),_n=t(8104),En=function(){var n=(0,wn.I0)(),e=(0,Rn.$n)(),t=(0,C.Z)(e,1)[0],r=function(){var e=(0,fn.Z)((0,hn.Z)().mark((function e(){return(0,hn.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t().unwrap();case 3:n((0,_n.kS)()),n((0,_n.nf)(!1)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),n((0,_n.sT)(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,cn.jsx)(cn.Fragment,{children:(0,cn.jsxs)(In,{onClick:r,children:[(0,cn.jsx)(Bn,{width:"32px",height:"32px",children:(0,cn.jsx)("use",{href:"".concat(Q.Z,"#icon-logout")})}),(0,cn.jsx)(Mn,{children:"Log out"})]})})},Un=t(1413),An=t(5193),Wn=t(5607),Hn=t(1686),Nn=t.n(Hn),Dn=zn.Z.div(u||(u=(0,B.Z)(["\n  padding: 0px;\n  display: flex;\n  flex-direction: column;\n  font-family: Poppins;\n"]))),Xn=zn.Z.form(x||(x=(0,B.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0px;\n  \n"]))),Ln=zn.Z.input(h||(h=(0,B.Z)(["\n  width: 100%;\n  padding: 14px 18px;\n  margin-bottom:14px;\n  font-family: Poppins;\n  font-size: 14px;\n  line-height: normal;\n  letter-spacing: -0.28px;\n\n  color: rgba(255, 255, 255, 1);\n  border-radius: 8px;\n  opacity: 0.4;\n  border: 1px solid rgba(190, 219, 176, 1);\n\n  background: #1f1f1f;\n  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);\n \n\n  &::placeholder {\n    color: #fff;\n    font-size: 14px;\n    font-family: 'Poppins';\n    letter-spacing: -0.28px;\n  }\n    &:-webkit-autofill {\n    -webkit-box-shadow: 0 0 0px 1000px #1f1f1f inset !important;\n    background-color: #1f1f1f !important;\n    -webkit-text-fill-color: rgba(255, 255, 255, 1);\n  \n  opacity: 0.4;\n  border: 1px solid rgba(190, 219, 176, 1);\n  }\n   &:-webkit-autofill:active {\n    box-shadow: none;\n    background-color: #151515;\n    // opacity: 1;\n     -webkit-text-fill-color: #fff;!important;\n  }\n\n  &:focus {\n    opacity: 1;\n    outline: none;\n    }\n\n"]))),Yn=zn.Z.textarea(f||(f=(0,B.Z)(["\n  display: flex;\n  min-height: 155px;\n   font-family: Poppins;\n  font-size: 14px;\n  line-height: normal;\n  letter-spacing: -0.28px;\n  color: rgba(255, 255, 255, 1);\n  border-radius: 8px;\n  opacity: 0.4;\n  border: 1px solid rgba(190, 219, 176, 1);\n  resize: none;\n  padding: 14px 14px;\n  background-color: transparent;\n  text-align: top;\n  :focus {\n    border: 2px solid #bedbb0;\n    outline: none;\n  }\n  &::placeholder {\n    color: #fff;\n    font-size: 14px;\n    font-family: 'Poppins';\n    letter-spacing: -0.28px;\n  }\n   &:focus {\n    opacity: 1;\n    outline: none;\n   \n   &:-webkit-autofill:active {\n    -webkit-box-shadow: 0 0 0px 1000px #1f1f1f inset !important;\n    background-color: #1f1f1f !important;\n    -webkit-text-fill-color: rgba(255, 255, 255, 1);\n"]))),qn=(zn.Z.div(g||(g=(0,B.Z)(["\n  display: flex;\n  gap: 4px;\n"]))),{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:350,borderRadius:2,border:"1px solid rgba(190, 219, 176, 0.50)",background:"#151515",padding:3}),On={color:"#FFF",fontSize:18,fontStyle:"normal",fontWeight:500,lineHeight:"normal",letterSpacing:-.36,marginBottom:3,fontFamily:"Poppins"},Gn=function(n){var e=n.open,t=n.handleClose,r=(0,An.Z)("(min-width: 1440px)"),o=(0,wn.I0)(),i=xn.b.useHelpUserMutation(),a=(0,C.Z)(i,1)[0],s=function(){var n=(0,fn.Z)((0,hn.Z)().mark((function n(){return(0,hn.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a({email:d.values.email,comment:d.values.comment});case 3:n.sent&&(t(),Hn.Report.success("Email successfully sent","Our developer has engaged in an epic battle to provide you with an answer. Brace yourself for the victory writing, and in the meantime, hold tight!","Ok")),d.resetForm(),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),400===n.t0.status?console.log("All field must be filled in"):(console.log("An error occurred:",n.t0.data.message),o((0,_n.sT)(n.t0)));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),l=vn.Ry({email:vn.Z_().email().required("Email is required"),comment:vn.Z_().required("Comment is required")}),d=(0,gn.TA)({initialValues:{email:"",comment:""},onSubmit:function(n){var e=n.title;return s(e)},validationSchema:l});return(0,cn.jsx)(Dn,{children:(0,cn.jsx)(Wn.Z,{open:e,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,cn.jsxs)(P.Z,{sx:(0,Un.Z)((0,Un.Z)({},qn),{},{width:r?400:335}),children:[(0,cn.jsx)(mn.Z,{variant:"h2",sx:On,children:"Need help"}),(0,cn.jsx)(bn.fb,{type:"button",onClick:t,children:(0,cn.jsx)("svg",{style:{stroke:"currentcolor"},width:"18",height:"18",children:(0,cn.jsx)("use",{href:Q.Z+"#icon-x-close"})})}),(0,cn.jsxs)(Xn,{onSubmit:d.handleSubmit,children:[(0,cn.jsx)(Ln,{id:"email",name:"email",placeholder:"Email address",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.email}),(0,cn.jsx)(Yn,{id:"comment",name:"comment",placeholder:"Comment",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.comment}),(0,cn.jsx)(J.dH,{title:"Send",type:"submit",sx:{marginTop:24},onClick:function(){""===d.values.email&&Nn().Notify.warning("Email field must be filled in")||""===d.values.comment&&Nn().Notify.warning("Comment field must be filled in")},children:"Send"})]})]})})})},$n=function(n){var e=n.isSidebarShown,t=(0,T.useState)(!1),r=(0,C.Z)(t,2),o=r[0],i=r[1],a=(0,T.useState)(!1),s=(0,C.Z)(a,2),l=s[0],d=s[1],c=(0,T.useState)(!0),p=(0,C.Z)(c,2),u=p[0],x=p[1];(0,T.useEffect)((function(){var n=setInterval((function(){x(!0),setTimeout((function(){x(!1)}),1e3)}),7e3);return function(){clearInterval(n)}}),[]);var h=function(){return i(!o)},f=function(){return d(!l)};return(0,cn.jsxs)(cn.Fragment,{children:[(0,cn.jsxs)(P.Z,{className:G,sx:{overflowX:"hidden",pt:3,pb:3,display:"flex",flexGrow:1,flexDirection:"column",justifyContent:"space-between"},children:[(0,cn.jsxs)(P.Z,{children:[(0,cn.jsxs)(P.Z,{sx:{pl:{0:1.75,768:3},pr:{0:1.75,768:3}},children:[(0,cn.jsx)(V.p,{sx:{mb:7.5},isSidebarShown:e}),(0,cn.jsx)(H,{sx:{mb:1},isSidebarShown:e,children:"My boards"}),(0,cn.jsxs)(N,{sx:{mb:5},children:[(0,cn.jsxs)(D,{isSidebarShown:e,children:["Create a ",(0,cn.jsx)("br",{})," new board"]}),(0,cn.jsx)(J.NB,{onClick:h})]})]}),(0,cn.jsx)(Tn,{})]}),(0,cn.jsxs)(P.Z,{sx:{pl:{0:1.75,768:3},pr:{0:1.75,768:3}},children:[(0,cn.jsxs)(X,{sx:{p:{0:1.75,768:2.5},mb:3},children:[(0,cn.jsx)(L,{src:$,alt:"aloe vera",isSidebarShown:e}),(0,cn.jsxs)(Y,{isSidebarShown:e,sx:{mb:2.25,fontSize:{0:"12px",768:"14px"},lineHeight:{0:"16px",768:"20px"}},children:["If you need help with ",(0,cn.jsx)("span",{children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),(0,cn.jsxs)(q,{type:"button",isSidebarShown:e,onClick:f,children:[(0,cn.jsx)(O,{startAnimation:u,children:(0,cn.jsx)("use",{href:Q.Z+"#icon-help"})}),"Need help?"]})]}),(0,cn.jsx)(En,{})]})]}),(0,cn.jsx)(Pn,{boardTitle:"New board",open:o,handleClose:h}),(0,cn.jsx)(Gn,{open:l,handleClose:f})]})},Qn=function(n){var e=Object.assign({},((0,I.Z)(n),n)),t=e.window,r=e.isMobileSidebar,o=e.handleSidebarToggle,i=void 0!==t?function(){return t().document.body}:void 0;return(0,cn.jsxs)(P.Z,{component:"nav",sx:{width:{1440:z.H},flexShrink:{1440:0}},"aria-label":"sidebar options",children:[(0,cn.jsx)(M.ZP,{container:i,variant:"temporary",open:r,onClose:o,ModalProps:{keepMounted:!0},slotProps:{backdrop:{style:{backgroundColor:"var(--sidebar-backdrop-color)"}}},sx:{display:{0:"block",1440:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",boxShadow:"none",border:"none",overflowX:"hidden",width:{0:192,320:"60vw",375:z.p,768:z.H},backgroundColor:"var(--sidebar-primary-bg-color)"}},children:(0,cn.jsx)($n,{isSidebarShown:r})}),(0,cn.jsx)(M.ZP,{variant:"permanent",open:!0,sx:{display:{0:"none",1440:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",boxShadow:"none",border:"none",overflowX:"hidden",width:z.H,backgroundColor:"var(--sidebar-primary-bg-color)"}},children:(0,cn.jsx)($n,{isSidebarShown:!0})})]})},Vn=zn.Z.header(m||(m=(0,B.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  max-width: 100%;\n  width: auto;\n  height:68px;\n  padding: 18px 24px;\n  background: var(--header-bg-color);\n  color: var(--primary-text-color);\n\n  @media (max-width: 1440px) {\n    padding: 18px 32px;\n  }\n  @media (max-width: 768px) {\n    padding: 14px 20px;\n    height:60px;\n  }\n"]))),Jn=zn.Z.div(b||(b=(0,B.Z)(["\n  position: relative;\n  display: inline-block;\n  width: 70px;\n  height: auto;\n  margin-right: 14px;\n  margin-left: auto;\n"]))),Kn=zn.Z.div(v||(v=(0,B.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--primary-text-color);\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: -0.28px;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  svg {\n    stroke: var(--header-theme-color);\n  }\n  &:hover {\n    color: var(--header-theme-color);\n  }\n"]))),ne=zn.Z.ul(y||(y=(0,B.Z)(["\n  position: absolute;\n  top: 45px;\n  left: -12px;\n  margin: 0px;\n  max-height: 0px;\n  padding: 0 44px 0 18px;\n  background: var(--modal-bg-color);\n  overflow: hidden;\n  list-style: none;\n  border-radius: 8px;\n\n  &.visible {\n    width: 100px;\n    max-height: 107px;\n    padding: 18px 44px 18px 18px;\n  }\n"]))),ee=zn.Z.button(j||(j=(0,B.Z)(["\n  border: none;\n  background: transparent;\n  text-transform: capitalize;\n  cursor: ",";\n  color: ",";\n  }\n"])),(function(n){return n.disabled?"":"pointer"}),(function(n){return n.selected?"var(--button-bg-color)":"var(--secondary-text-color)"})),te=t(3400),re=t(8008),oe=function(n){var e=n.handleSidebarToggle;return(0,cn.jsx)(cn.Fragment,{children:(0,cn.jsx)(te.Z,{color:"inherit","aria-label":"open sidebar options",edge:"start",onClick:e,sx:{width:32,height:32,display:{1440:"none"}},children:(0,cn.jsx)(re.Z,{})})})},ie=zn.Z.div(Z||(Z=(0,B.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]))),ae=zn.Z.p(w||(w=(0,B.Z)(["\n    margin-right: 8px;\n    color: var(--primary-text-color);\n    font-size: 14px;\n    font-weight: 500;\n    letter-spacing: -0.28px;\n"]))),se=zn.Z.div(k||(k=(0,B.Z)(["\n    width: 32px;\n    height: 32px;\n    background: var(--primary-text-color);\n    border-radius: 8px;\n"]))),le=zn.Z.img(S||(S=(0,B.Z)(["\n    width: 32px;\n    height: 32px;\n    border-radius: 8px;\n"]))),de=function(n){var e=n.name,t=void 0===e?"User":e,r=n.avatarURL;return(0,cn.jsxs)(ie,{children:[(0,cn.jsx)(ae,{children:t}),(0,cn.jsx)("div",{children:r?(0,cn.jsx)(le,{src:r,alt:"User Avatar"}):(0,cn.jsx)(se,{})})]})},ce=function(n){return n.auth.user},pe=function(n){return n.auth.isLoggedIn},ue=function(n){var e=n.handleSidebarToggle,t=(0,wn.v9)(ce),r=t.avatarURL,o=t.name,i=t.theme,a=(0,T.useState)(!1),s=(0,C.Z)(a,2),l=s[0],d=s[1],c=(0,T.useState)(i),p=(0,C.Z)(c,2),u=p[0],x=p[1];(0,T.useEffect)((function(){return document.body.classList.add(u),function(){document.body.classList.remove(u)}}),[u]);var h=function(n){x(n.target.value),d(!l)};return(0,cn.jsxs)(Vn,{children:[(0,cn.jsx)(oe,{handleSidebarToggle:e}),(0,cn.jsxs)(Jn,{children:[(0,cn.jsxs)(Kn,{onClick:function(){d(!l)},children:[(0,cn.jsx)("p",{children:"Theme"}),(0,cn.jsx)("svg",{width:"16px",height:"16px",children:(0,cn.jsx)("use",{href:Q.Z+"#icon-drop-down"})})]}),(0,cn.jsx)(ne,{className:l?"visible":"",children:["light","dark","violet"].map((function(n){return(0,cn.jsx)("li",{children:(0,cn.jsx)(ee,{selected:u===n,disabled:u===n,value:n,onClick:h,children:n})},n)}))})]}),(0,cn.jsx)(de,{name:o,avatarURL:r})]})},xe=t(6151),he=function(){var n=(0,T.useState)(!1),e=(0,C.Z)(n,2),t=e[0],r=e[1],o=function(){return r(!t)};return(0,cn.jsxs)(cn.Fragment,{children:[(0,cn.jsx)(P.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",pt:{0:9.25,768:11,1440:9.75},pb:{0:3,768:4,1440:1},pl:{0:2.5,768:4,1440:3},pr:{0:2.5,768:4,1440:3},height:"100vh",width:{0:"100vw",1440:"calc(100vw - ".concat(z.H,"px)")},flexGrow:1,backgroundColor:"var(--primary-bg-color)"},children:(0,cn.jsx)(P.Z,{sx:{width:"486px"},children:(0,cn.jsxs)(mn.Z,{sx:{padding:0,margin:0,color:"var(--secondary-text-color)",textAlign:"center",fontFamily:"Poppins",fontSize:{0:"12px",768:"14px"},fontStyle:"normal",fontWeight:400,lineHeight:{0:"16px",768:"18px"},letterSpacing:{0:"-0.24px",768:"-0.28px"}},children:["Before starting your project, it is essential"," ",(0,cn.jsx)(xe.Z,{onClick:o,type:"button",sx:{verticalAlign:"baseline",padding:0,margin:0,color:"var(--default-screen-page-link-color)",backgroundColor:"transparent",fontFamily:"Poppins",border:"none",cursor:"pointer",textDecoration:"none",outline:"none",textTransform:"lowercase",fontSize:{0:"12px",768:"14px"},"&:hover, &:focus":{textDecoration:"underline",backgroundColor:"transparent"}},children:"to create a board"})," ","to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})})}),(0,cn.jsx)(Pn,{boardTitle:"New board",open:t,handleClose:o})]})},fe=function(){var n=(0,wn.v9)(pe),e=(0,T.useState)(!1),t=(0,C.Z)(e,2),r=t[0],o=t[1],i=function(){return o(!r)},a=xn.b.useGetBoardsQuery().data;return n&&(0,cn.jsxs)(P.Z,{sx:{display:"flex",overflowX:"hidden"},children:[(0,cn.jsx)(F.Z,{position:"fixed",sx:{width:{1440:"calc(100% - ".concat(z.H,"px)")},height:{768:68},ml:{1440:"".concat(z.H,"px")},boxShadow:"none",backgroundColor:"#161616"},children:(0,cn.jsx)(ue,{handleSidebarToggle:i})}),(0,cn.jsx)(Qn,{isMobileSidebar:r,handleSidebarToggle:i}),0===(null===a||void 0===a?void 0:a.length)?(0,cn.jsx)(he,{}):(0,cn.jsx)(Sn.j3,{})]})}}}]);
//# sourceMappingURL=973.c8f01ef0.chunk.js.map