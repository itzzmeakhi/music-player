(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{18:function(t,e,n){},24:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n.n(c),i=n(13),r=n.n(i),s=(n(18),n(3)),o=n(7),u=n(5),l="SKIP_BACK",j="SKIP_FORWARD",b=n(6),d=n(4),f=(n(24),n(0)),h=function(t){var e=t.currentSong,n=t.isPlaying,a=t.setIsPlaying,i=t.songs,r=t.setSongs,h=t.favorites,p=t.setFavorites,v=t.isInFavorites,O=t.favoriteSongs,m=Object(c.useRef)(null),g=h.some((function(t){return t.favoriteId===e.id})),x=Object(c.useState)({currentTime:0,duration:0,percentAnimation:0}),S=Object(o.a)(x,2),y=S[0],I=S[1],F=function(t){return Math.floor(t/60)+":"+("0"+Math.floor(t%60)).slice(-2)},A=function(t){var e=t.target,n=e.currentTime,c=e.duration,a=Math.round(Math.round(n)/Math.round(c)*100);I(Object(s.a)(Object(s.a)({},y),{},{currentTime:n,duration:c,percentAnimation:a}))},C=function(t){var n=Object(u.a)(i);v&&O.length>0&&(n=Object(u.a)(O));var c=n.findIndex((function(t){return t.id===e.id})),a=c;t===j?a=(c+1)%n.length:t===l&&-1===(a=(c-1)%n.length)&&(a=n.length-1);var o=n[a],b=i.map((function(t){return Object(s.a)(Object(s.a)({},t),{},{active:t.id===o.id})}));r(Object(u.a)(b))},k={transform:"translateX(".concat(y.percentAnimation,"%)")};return Object(f.jsxs)("div",{className:"player-container",children:[Object(f.jsxs)("div",{className:"favorite-controls",children:[Object(f.jsx)(b.a,{size:"1x",icon:d.e}),Object(f.jsx)(b.a,{size:"1x",style:{color:"".concat(g?"#ee5253":"#000")},onClick:function(){var t=e.id;if(g){var n=h.filter((function(t){return t.favoriteId!==e.id}));p(Object(u.a)(n))}else p([].concat(Object(u.a)(h),[{favoriteId:t}]))},icon:d.f})]}),Object(f.jsxs)("div",{className:"time-controls",children:[Object(f.jsx)("p",{children:F(y.currentTime)}),Object(f.jsxs)("div",{className:"track",style:{background:"linear-gradient(to right, ".concat(e.color[0],", ").concat(e.color[1],")")},children:[Object(f.jsx)("input",{min:0,max:y.duration||0,value:y.currentTime,onChange:function(t){var e=t.target.value;m.current.currentTime=e,I(Object(s.a)(Object(s.a)({},y),{},{currentTime:e}))},type:"range"}),Object(f.jsx)("div",{className:"animate-track",style:k})]}),Object(f.jsx)("p",{children:y.duration?F(y.duration):"0.00"})]}),Object(f.jsxs)("div",{className:"player-controls",children:[Object(f.jsx)(b.a,{size:"2x",onClick:function(){return C(l)},icon:d.a}),Object(f.jsx)(b.a,{size:"2x",onClick:function(){n?m.current.pause():m.current.play(),a(!n)},icon:n?d.h:d.i}),Object(f.jsx)(b.a,{size:"2x",onClick:function(){return C(j)},icon:d.b})]}),Object(f.jsx)("audio",{preload:"auto",onLoadedData:function(){n&&m.current.play()},onLoadedMetadata:A,onTimeUpdate:A,onEnded:function(){var t=Object(u.a)(i);v&&O.length>0&&(t=Object(u.a)(O));var n=t.findIndex((function(t){return t.id===e.id})),c=t[(n+1)%t.length],a=i.map((function(t){return Object(s.a)(Object(s.a)({},t),{},{active:t.id===c.id})}));r(Object(u.a)(a))},src:e.audio,ref:m})]})},p=(n(26),function(t){var e=t.currentSong;return Object(f.jsxs)("div",{className:"song-container",children:[Object(f.jsx)("img",{src:e.cover,alt:e.name}),Object(f.jsx)("h2",{children:e.name}),Object(f.jsx)("h3",{children:e.artist})]})}),v=(n(27),function(t){var e=t.song,n=t.setActiveSong,c=t.libraryStatus,a=t.setLibraryStatus;return Object(f.jsxs)("div",{className:"library-song ".concat(e.active?"selected":""),onClick:function(){n(e.id),a(!c)},children:[Object(f.jsx)("img",{src:e.cover,alt:e.name}),Object(f.jsxs)("div",{className:"song-description",children:[Object(f.jsx)("h3",{children:e.name}),Object(f.jsx)("h4",{children:e.artist})]})]})}),O=(n(28),function(t){var e=t.name,n=t.songs,a=t.favoriteSongs,i=t.libraryStatus,r=t.setLibraryStatus,l=t.setSongs,j=t.defaultAccordionStatus,h=t.isFavorites,p=t.setIsInFavorites,O=Object(c.useState)(j),m=Object(o.a)(O,2),g=m[0],x=m[1],S=function(t){var e=n.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{active:e.id===t})}));l(Object(u.a)(e))},y=h?Object(u.a)(a):Object(u.a)(n);return Object(f.jsxs)("div",{className:"library-section",onClick:function(){return p(h)},children:[Object(f.jsxs)("div",{className:"library-accordions",onClick:function(){return x(!g)},children:[Object(f.jsx)("h2",{children:e}),Object(f.jsx)(b.a,{icon:g?d.d:d.c})]}),g&&y.map((function(t){return Object(f.jsx)(v,{song:t,setActiveSong:S,libraryStatus:i,setLibraryStatus:r},t.id)}))]})}),m=(n(29),function(t){var e=t.songs,n=t.setSongs,c=t.libraryStatus,a=t.setLibraryStatus,i=t.setIsInFavorites,r=t.favoriteSongs,s="#fff",o="#fff";e.map((function(t){return t.active&&(s=t.color[0],o=t.color[1]),t}));var u={backgroundImage:"linear-gradient(to right, ".concat(s,", ").concat(o,")")};return Object(f.jsxs)("div",{className:"library ".concat(c?"active":""),style:u,children:[Object(f.jsxs)("div",{className:"library-header",children:[Object(f.jsx)("h2",{children:"Library"}),Object(f.jsx)(b.a,{onClick:function(){return a(!a)},icon:d.j,size:"1x"})]}),Object(f.jsx)(O,{name:"Songs",songs:e,favoriteSongs:r,libraryStatus:c,setLibraryStatus:a,defaultAccordionStatus:!0,setSongs:n,isFavorites:!1,setIsInFavorites:i}),Object(f.jsx)(O,{name:"Favorites",songs:e,favoriteSongs:r,libraryStatus:c,setLibraryStatus:a,defaultAccordionStatus:!1,setSongs:n,isFavorites:!0,setIsInFavorites:i})]})}),g=(n(30),function(t){var e=t.libraryStatus,n=t.setLibraryStatus;return Object(f.jsxs)("nav",{children:[Object(f.jsx)("h1",{children:"iMusic"}),Object(f.jsxs)("button",{onClick:function(){return n(!e)},children:["Library \xa0",Object(f.jsx)(b.a,{icon:d.g})]})]})}),x=n(34),S=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(x.a)()},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(x.a)()},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(x.a)()},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(x.a)()},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(x.a)()},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(x.a)()}]},y=(n(31),function(){var t=Object(c.useState)(S().map((function(t,e){return Object(s.a)(Object(s.a)({},t),{},{active:0===e})}))),e=Object(o.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)(!1),r=Object(o.a)(i,2),u=r[0],l=r[1],j=Object(c.useState)(!1),b=Object(o.a)(j,2),d=b[0],v=b[1],O=Object(c.useState)([]),x=Object(o.a)(O,2),y=x[0],I=x[1],F=Object(c.useState)(!1),A=Object(o.a)(F,2),C=A[0],k=A[1],L=n[n.findIndex((function(t){return t.active}))],N=y.length>0?n.filter((function(t){return y.some((function(e){return e.favoriteId===t.id}))})):[];return Object(f.jsxs)("div",{className:"".concat(d?"library-active":""),children:[Object(f.jsx)(g,{libraryStatus:d,setLibraryStatus:v}),Object(f.jsx)(p,{currentSong:L}),Object(f.jsx)(h,{isPlaying:u,setIsPlaying:l,currentSong:L,songs:n,favoriteSongs:N,setSongs:a,favorites:y,isInFavorites:C,setFavorites:I}),Object(f.jsx)(m,{songs:n,setSongs:a,libraryStatus:d,favoriteSongs:N,setIsInFavorites:k,setLibraryStatus:v})]})}),I=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),i(t),r(t)}))};r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root")),I()}},[[32,1,2]]]);
//# sourceMappingURL=main.b7480135.chunk.js.map