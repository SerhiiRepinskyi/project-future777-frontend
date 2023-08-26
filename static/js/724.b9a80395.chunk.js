"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[724],{724:function(e,t,r){r.d(t,{ZP:function(){return G}});var n=r(3433),o=r(9439),a=r(3366),i=r(7462),u=r(2791),s=r(9791),l=r(2564),c=r(5438),f=r(7666),m=r(2561),d=s.Z,p=function(e){return"theme"!==e},h=function(e){return"string"===typeof e&&e.charCodeAt(0)>96?d:p},v=function(e,t,r){var n;if(t){var o=t.shouldForwardProp;n=e.__emotion_forwardProp&&o?function(t){return e.__emotion_forwardProp(t)&&o(t)}:o}return"function"!==typeof n&&r&&(n=e.__emotion_forwardProp),n},_=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return(0,c.hC)(t,r,n),(0,m.L)((function(){return(0,c.My)(t,r,n)})),null},y=function e(t,r){var n,o,a=t.__emotion_real===t,s=a&&t.__emotion_base||t;void 0!==r&&(n=r.label,o=r.target);var m=v(t,r,a),d=m||h(s),p=!d("as");return function(){var y=arguments,g=a&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==n&&g.push("label:"+n+";"),null==y[0]||void 0===y[0].raw)g.push.apply(g,y);else{0,g.push(y[0][0]);for(var b=y.length,w=1;w<b;w++)g.push(y[w],y[0][w])}var Z=(0,l.w)((function(e,t,r){var n=p&&e.as||s,a="",i=[],v=e;if(null==e.theme){for(var y in v={},e)v[y]=e[y];v.theme=u.useContext(l.T)}"string"===typeof e.className?a=(0,c.fp)(t.registered,i,e.className):null!=e.className&&(a=e.className+" ");var b=(0,f.O)(g.concat(i),t.registered,v);a+=t.key+"-"+b.name,void 0!==o&&(a+=" "+o);var w=p&&void 0===m?h(n):d,Z={};for(var k in e)p&&"as"===k||w(k)&&(Z[k]=e[k]);return Z.className=a,Z.ref=r,u.createElement(u.Fragment,null,u.createElement(_,{cache:t,serialized:b,isStringTag:"string"===typeof n}),u.createElement(n,Z))}));return Z.displayName=void 0!==n?n:"Styled("+("string"===typeof s?s:s.displayName||s.name||"Component")+")",Z.defaultProps=t.defaultProps,Z.__emotion_real=Z,Z.__emotion_base=s,Z.__emotion_styles=g,Z.__emotion_forwardProp=m,Object.defineProperty(Z,"toString",{value:function(){return"."+o}}),Z.withComponent=function(t,n){return e(t,(0,i.Z)({},r,n,{shouldForwardProp:v(Z,n,!0)})).apply(void 0,g)},Z}}.bind();function g(e,t){return y(e,t)}["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){y[e]=y(e)}));var b=function(e,t){Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},w=r(5080),Z=r(1122),k=["variant"];function P(e){return 0===e.length}function S(e){var t=e.variant,r=(0,a.Z)(e,k),n=t||"";return Object.keys(r).sort().forEach((function(t){n+="color"===t?P(n)?e[t]:(0,Z.Z)(e[t]):"".concat(P(n)?t:(0,Z.Z)(t)).concat((0,Z.Z)(e[t].toString()))})),n}var C=r(104),T=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function N(e){return"string"===typeof e&&e.charCodeAt(0)>96}var A=function(e,t){return t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null},E=function(e,t){var r=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(r=t.components[e].variants);var n={};return r.forEach((function(e){var t=S(e.props);n[t]=e.style})),n},O=function(e,t,r,n){var o,a=e.ownerState,i=void 0===a?{}:a,u=[],s=null==r||null==(o=r.components)||null==(o=o[n])?void 0:o.variants;return s&&s.forEach((function(r){var n=!0;Object.keys(r.props).forEach((function(t){i[t]!==r.props[t]&&e[t]!==r.props[t]&&(n=!1)})),n&&u.push(t[S(r.props)])})),u};function x(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}var I=(0,w.Z)(),j=function(e){return e?e.charAt(0).toLowerCase()+e.slice(1):e};function F(e){var t,r=e.defaultTheme,n=e.theme,o=e.themeId;return t=n,0===Object.keys(t).length?r:n[o]||n}function R(e){return e?function(t,r){return r[e]}:null}var q=r(6482),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.themeId,r=e.defaultTheme,u=void 0===r?I:r,s=e.rootShouldForwardProp,l=void 0===s?x:s,c=e.slotShouldForwardProp,f=void 0===c?x:c,m=function(e){return(0,C.Z)((0,i.Z)({},e,{theme:F((0,i.Z)({},e,{defaultTheme:u,themeId:t}))}))};return m.__mui_systemSx=!0,function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};b(e,(function(e){return e.filter((function(e){return!(null!=e&&e.__mui_systemSx)}))}));var s,c=r.name,d=r.slot,p=r.skipVariantsResolver,h=r.skipSx,v=r.overridesResolver,_=void 0===v?R(j(d)):v,y=(0,a.Z)(r,T),w=void 0!==p?p:d&&"Root"!==d&&"root"!==d||!1,Z=h||!1;var k=x;"Root"===d||"root"===d?k=l:d?k=f:N(e)&&(k=void 0);var P=g(e,(0,i.Z)({shouldForwardProp:k,label:s},y)),S=function(r){for(var a=arguments.length,s=new Array(a>1?a-1:0),l=1;l<a;l++)s[l-1]=arguments[l];var f=s?s.map((function(e){return"function"===typeof e&&e.__emotion_real!==e?function(r){return e((0,i.Z)({},r,{theme:F((0,i.Z)({},r,{defaultTheme:u,themeId:t}))}))}:e})):[],d=r;c&&_&&f.push((function(e){var r=F((0,i.Z)({},e,{defaultTheme:u,themeId:t})),n=A(c,r);if(n){var a={};return Object.entries(n).forEach((function(t){var n=(0,o.Z)(t,2),u=n[0],s=n[1];a[u]="function"===typeof s?s((0,i.Z)({},e,{theme:r})):s})),_(e,a)}return null})),c&&!w&&f.push((function(e){var r=F((0,i.Z)({},e,{defaultTheme:u,themeId:t}));return O(e,E(c,r),r,c)})),Z||f.push(m);var p=f.length-s.length;if(Array.isArray(r)&&p>0){var h=new Array(p).fill("");(d=[].concat((0,n.Z)(r),(0,n.Z)(h))).raw=[].concat((0,n.Z)(r.raw),(0,n.Z)(h))}else"function"===typeof r&&r.__emotion_real!==r&&(d=function(e){return r((0,i.Z)({},e,{theme:F((0,i.Z)({},e,{defaultTheme:u,themeId:t}))}))});var v=P.apply(void 0,[d].concat((0,n.Z)(f)));return e.muiName&&(v.muiName=e.muiName),v};return P.withConfig&&(S.withConfig=P.withConfig),S}}({themeId:r(988).Z,defaultTheme:q.Z,rootShouldForwardProp:function(e){return x(e)&&"classes"!==e}}),G=z}}]);
//# sourceMappingURL=724.b9a80395.chunk.js.map