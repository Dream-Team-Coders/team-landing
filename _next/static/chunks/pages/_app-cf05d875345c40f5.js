(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return i(5284)}])},3740:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(6495).Z,n=i(2648).Z,o=i(1598).Z,s=i(7273).Z,a=o(i(7294)),l=n(i(2636)),c=i(7757),u=i(3735),d=i(3341);i(4210);var f=n(i(7746));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,i,n,o,s,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===i&&s(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,o=!1;n.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}function v(e){let[t,i]=a.version.split("."),r=parseInt(t,10),n=parseInt(i,10);return r>18||18===r&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let x=a.forwardRef((e,t)=>{var{imgAttributes:i,heightInt:n,widthInt:o,qualityInt:l,className:c,imgStyle:u,blurStyle:d,isLazy:f,fetchPriority:g,fill:h,placeholder:m,loading:x,srcString:b,config:w,unoptimized:j,loader:y,onLoadRef:_,onLoadingCompleteRef:E,setBlurComplete:S,setShowAltText:C,onLoad:N,onError:z}=e,k=s(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return x=f?"lazy":x,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},k,v(g),{loading:x,width:o,height:n,decoding:"async","data-nimg":h?"fill":"1",className:c,style:r({},u,d)},i,{ref:a.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(z&&(e.src=e.src),e.complete&&p(e,b,m,_,E,S,j))},[b,m,_,E,S,z,j,t]),onLoad:e=>{let t=e.currentTarget;p(t,b,m,_,E,S,j)},onError:e=>{C(!0),"blur"===m&&S(!0),z&&z(e)}})))}),b=a.forwardRef((e,t)=>{let i,n;var o,{src:p,sizes:b,unoptimized:w=!1,priority:j=!1,loading:y,className:_,quality:E,width:S,height:C,fill:N,style:z,onLoad:k,onLoadingComplete:P,placeholder:R="empty",blurDataURL:O,fetchPriority:I,layout:M,objectFit:A,objectPosition:L,lazyBoundary:D,lazyRoot:B}=e,F=s(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let T=a.useContext(d.ImageConfigContext),W=a.useMemo(()=>{let e=g||T||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:i})},[T]),Z=F,q=Z.loader||f.default;delete Z.loader;let G="__next_img_default"in q;if(G){if("custom"===W.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=q;q=t=>{let{config:i}=t,r=s(t,["config"]);return e(r)}}if(M){"fill"===M&&(N=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(z=r({},z,e));let t={responsive:"100vw",fill:"100vw"}[M];t&&!b&&(b=t)}let U="",V=m(S),H=m(C);if("object"==typeof(o=p)&&(h(o)||void 0!==o.src)){let e=h(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(i=e.blurWidth,n=e.blurHeight,O=O||e.blurDataURL,U=e.src,!N){if(V||H){if(V&&!H){let t=V/e.width;H=Math.round(e.height*t)}else if(!V&&H){let t=H/e.height;V=Math.round(e.width*t)}}else V=e.width,H=e.height}}let J=!j&&("lazy"===y||void 0===y);(!(p="string"==typeof p?p:U)||p.startsWith("data:")||p.startsWith("blob:"))&&(w=!0,J=!1),W.unoptimized&&(w=!0),G&&p.endsWith(".svg")&&!W.dangerouslyAllowSVG&&(w=!0),j&&(I="high");let[X,Y]=a.useState(!1),[$,K]=a.useState(!1),Q=m(E),ee=Object.assign(N?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:L}:{},$?{}:{color:"transparent"},z),et="blur"===R&&O&&!X?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:V,heightInt:H,blurWidth:i,blurHeight:n,blurDataURL:O,objectFit:ee.objectFit}),'")')}:{},ei=function(e){let{config:t,src:i,unoptimized:r,width:n,quality:o,sizes:s,loader:a}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,i){let{deviceSizes:r,allSizes:n}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let o=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:o,kind:"x"}}(t,n,s),u=l.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:l.map((e,r)=>"".concat(a({config:t,src:i,quality:o,width:e})," ").concat("w"===c?e:r+1).concat(c)).join(", "),src:a({config:t,src:i,quality:o,width:l[u]})}}({config:W,src:p,unoptimized:w,width:V,quality:Q,sizes:b,loader:q}),er=p,en=a.useRef(k);a.useEffect(()=>{en.current=k},[k]);let eo=a.useRef(P);a.useEffect(()=>{eo.current=P},[P]);let es=r({isLazy:J,imgAttributes:ei,heightInt:H,widthInt:V,qualityInt:Q,className:_,imgStyle:ee,blurStyle:et,loading:y,config:W,fetchPriority:I,fill:N,unoptimized:w,placeholder:R,loader:q,srcString:er,onLoadRef:en,onLoadingCompleteRef:eo,setBlurComplete:Y,setShowAltText:K},Z);return a.default.createElement(a.default.Fragment,null,a.default.createElement(x,Object.assign({},es,{ref:t})),j?a.default.createElement(l.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+ei.src+ei.srcSet+ei.sizes,rel:"preload",as:"image",href:ei.srcSet?void 0:ei.src,imageSrcSet:ei.srcSet,imageSizes:ei.sizes,crossOrigin:Z.crossOrigin},v(I)))):null)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:n,blurDataURL:o,objectFit:s}=e,a=r||t,l=n||i,c=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&n?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function i(e){let{config:t,src:i,width:r,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(r,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},3067:function(e,t,i){"use strict";var r=i(5893);let n=e=>{let{title:t,isDark:i}=e;return(0,r.jsx)("button",{className:"w-fit h-fit text-base py-2 px-5 rounded ".concat(i?"bg-btns-dark text-white":"border border-btns-light"),children:t})};t.Z=n},5284:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return d}});var r=i(5893);i(7952);var n=i(3067);let o=e=>{let{title:t,isActive:i}=e;return(0,r.jsx)("button",{className:"font-inter text-base ".concat(i&&"text-links-blue"),children:t})};var s=i(5675),a=i.n(s),l={src:"/_next/static/media/logo.8471f4ed.svg",height:44,width:30,blurWidth:0,blurHeight:0};let c=()=>(0,r.jsxs)("div",{className:"flex justify-between items-center w-full h-24 px-8",children:[(0,r.jsxs)("div",{className:"flex items-center uppercase font w-fit",children:[(0,r.jsx)(a(),{className:"mr-4",src:l,alt:"Logo"}),(0,r.jsx)("span",{className:"text-2xl font-inter",children:"СтройКонтроль"})]}),(0,r.jsxs)("div",{className:"flex items-center gap-x-5",children:[(0,r.jsx)(o,{title:"Главная",isActive:!0}),(0,r.jsx)(o,{title:"О нас"}),(0,r.jsx)(o,{title:"Продукция"}),(0,r.jsx)(o,{title:"Процесс"}),(0,r.jsx)(o,{title:"Надёжность"}),(0,r.jsx)(o,{title:"Клинты"}),(0,r.jsx)(o,{title:"Связаться с нами"}),(0,r.jsx)(n.Z,{title:"Заказать демо",isDark:!0})]})]}),u=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:"flex flex-col items-center",children:(0,r.jsxs)("div",{className:"flex flex-col justify-center items-center w-[1440px]",children:[(0,r.jsx)(c,{}),(0,r.jsx)("div",{className:"flex flex-col justify-center items-center w-[1056px]",children:t})]})})};function d(e){let{Component:t,pageProps:i}=e,{getLayout:n}=t;return n?n((0,r.jsx)(t,{...i})):(0,r.jsx)(u,{children:(0,r.jsx)(t,{...i})})}},7952:function(){},5675:function(e,t,i){e.exports=i(3740)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);