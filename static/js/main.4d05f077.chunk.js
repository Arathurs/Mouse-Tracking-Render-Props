(this["webpackJsonprender-props"]=this["webpackJsonprender-props"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(7),c=n.n(o),i=(n(13),n(1)),u=n(2),s=n(4),l=n(3),h=n(5),p=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleMouseMove=r.handleMouseMove.bind(Object(h.a)(r)),r.state={x:0,y:0},r}return Object(u.a)(n,[{key:"handleMouseMove",value:function(e){this.setState({x:e.clientX,y:e.clientY})}},{key:"render",value:function(){return a.a.createElement("div",{style:{height:"100vh"},onMouseMove:this.handleMouseMove},this.props.render(this.state))}}]),n}(a.a.Component),m=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.mouse;return a.a.createElement("img",{src:"/public/img/chimp.png",style:{position:"absolute",left:e.x,top:e.y},alt:"He's going BANANASSSS!!!"})}}]),n}(a.a.Component),v=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Move the mouse around!"),a.a.createElement(p,{render:function(e){return a.a.createElement(m,{mouse:e})}}))}}]),n}(a.a.Component);var d=function(){return a.a.createElement(v,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.4d05f077.chunk.js.map