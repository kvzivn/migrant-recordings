(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),l=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=g(t||a||[]);return r&&r.src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),a=p(t);return m[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,S=b&&window.IntersectionObserver,v=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function R(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+d+s+o+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=d.default.createElement(V,(0,l.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?d.default.createElement("picture",null,i(r),o):o})),V=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));V.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var j=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&S&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(y||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=p(t))&&(m[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,S=e.Tag,v=e.itemProp,w=e.loading,x=e.draggable,O=m||h;if(!O)return null;var j=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,H=(0,l.default)({opacity:j?1:0,transition:k?"opacity "+b+"ms":"none"},o),C="boolean"==typeof y?"lightgray":y,T={transitionDelay:b+"ms"},W=(0,l.default)({opacity:this.state.imgLoaded?0:1},k&&T,o,f),P={title:t,alt:this.state.isVisible?"":a,style:W,className:p,itemProp:v},q=this.state.isHydrated?g(O):O[0];if(m)return d.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:q.maxWidth?q.maxWidth+"px":null,maxHeight:q.maxHeight?q.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},d.default.createElement(S,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),C&&d.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&T)}),q.base64&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:P,imageVariants:O,generateSources:L}),q.tracedSVG&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:P,imageVariants:O,generateSources:R}),this.state.isVisible&&d.default.createElement("picture",null,E(O),d.default.createElement(V,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:w},q,{imageVariants:O}))}}));if(h){var N=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete N.display,d.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},C&&d.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},k&&T)}),q.base64&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:P,imageVariants:O,generateSources:L}),q.tracedSVG&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:P,imageVariants:O,generateSources:R}),this.state.isVisible&&d.default.createElement("picture",null,E(O),d.default.createElement(V,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:w},q,{imageVariants:O}))}}))}return null},t}(d.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),H=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function C(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}j.propTypes={resolutions:k,sizes:H,fixed:C(c.default.oneOfType([k,c.default.arrayOf(k)])),fluid:C(c.default.oneOfType([H,c.default.arrayOf(H)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var T=j;t.default=T},OyPq:function(e,t,a){e.exports=a.p+"static/listen-0fa6e6436e043d587d02e432bc30e804.jpg"},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=(a("Wbzz"),a("Bl7J")),s=(a("9eSz"),a("vrFN"),a("wEa+")),o=a.n(s),l=a("OyPq"),d=a.n(l);t.default=function(){var e,t=Object(r.createRef)(null),a=Object(r.createRef)(null),s=Object(r.createRef)(null),l=Object(r.createRef)(null),c=Object(r.createRef)(null),u=Object(r.useState)(null),f=u[0],p=u[1],g=Object(r.useState)(!1),m=(g[0],g[1],Object(r.useState)(!1)),h=m[0],y=m[1],b=function(){return i.a.createElement("img",{ref:l,src:d.a,alt:"listen",style:{position:"absolute",top:"-6.25rem",transform:"scale(.75) translateX(-5px)",left:0,transition:"opacity 1s ease-in-out"}})},S={about:"Migrant Recordings field recording studio.",contact:"mail@migrant.audio",listen:i.a.createElement(b,null)};Object(r.useEffect)((function(){s.current.style.transition="opacity 1s ease-in-out .5s",s.current.style.opacity=1}),[]);var v=function(e){var r=e.page;return i.a.createElement("div",{style:{color:"black",textDecoration:"none",minWidth:"200px",textAlign:"center"},onClick:function(){return p(e=r),void("listen"===e&&h?(y(!1),c.current.pause(),t.current.style.transition="transform 1s ease-in-out 1s",t.current.style.transform="translateY(0)",a.current.style.transition="opacity 1s ease-in-out",a.current.style.opacity=0):"listen"===e?(y(!0),c.current.play(),t.current.style.transition="transform 1s ease-in-out",t.current.style.transform="translateY(10rem)",a.current.style.transition="opacity 1s ease-in-out 1s",a.current.style.opacity=1):(t.current.style.transition="transform 1s ease-in-out",t.current.style.transform="translateY(10rem)",a.current.style.transition="opacity 1s ease-in-out 1s",a.current.style.opacity=1));var e}},"listen"===r?h?"pause":"listen":r)};return i.a.createElement(n.a,null,i.a.createElement("audio",{id:"myAudio",ref:c},i.a.createElement("source",{src:"recording.mp3",type:"audio/mpeg"}),"Your browser does not support the audio element."),i.a.createElement("main",{ref:s,style:{marginTop:"12rem",position:"relative",opacity:0}},i.a.createElement("nav",{style:(e={maxWidth:"100%",width:"770px",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"2rem",fontWeight:"600",fontFamily:"Lato",letterSpacing:".025em",color:"black",textTransform:"uppercase"},e.fontFamily="Kefa",e.cursor="pointer",e.userSelect="none",e)},i.a.createElement(v,{page:"about"}),i.a.createElement(v,{page:"contact"}),i.a.createElement(v,{page:"listen"})),i.a.createElement("h2",{ref:a,style:{position:"absolute",top:"7.5rem",width:"100%",margin:"0 auto",display:"block",textAlign:"center",fontWeight:"500",letterSpacing:".035em",fontSize:"1.5rem",color:"black",fontFamily:"Kefa",lineHeight:1.5,opacity:0,transition:"opacity 1s ease-in-out 1s"}},S[f]),i.a.createElement("img",{ref:t,src:o.a,alt:"",style:{position:"relative",marginLeft:"auto",marginRight:"auto",transition:"transform 1s ease-in-out",zIndex:-1}})))}},"wEa+":function(e,t,a){e.exports=a.p+"static/logo-4d70f7961f34fe441bd8800d14216955.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-c9fd7638fe8c2e56f58c.js.map