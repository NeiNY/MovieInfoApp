(this["webpackJsonpMovie-info-app"]=this["webpackJsonpMovie-info-app"]||[]).push([[0],{28:function(e,t,a){e.exports=a(40)},33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),l=(a(33),a(1)),i=(a(34),function(){return r.a.createElement("footer",{className:"App-footer row text-center"},r.a.createElement("span",null,"Developed by ",r.a.createElement("a",{href:"https://github.com/NeiNY"},"Vlad Kryazevskih")),r.a.createElement("div",null,"Using: React, Redux, Bootstrap & API",r.a.createElement("a",{href:"http://www.omdbapi.com/"}," OMDB")))}),s=a(9),m=function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement(s.b,{to:"/",className:"col-3 text-center"},"Movies"))},u=a(15),p=a(16),d=a(18),E=a(17),v=a(7),f=function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchMovie(this.props.match.params.id)}},{key:"render",value:function(){var e=this.props.movie;return r.a.createElement("div",{className:"card mb-2 col-xl-8",style:{width:"1000px"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"text-center col-md-6"},r.a.createElement("img",{src:e.Poster,className:"img-fluid col-10",alt:e.Title})),r.a.createElement("div",{className:"card-body text-start col-md-6"},r.a.createElement("h5",{className:"card-title"},e.Title),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Genre:")," ",e.Genre),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Released:")," ",e.Released),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Rated:")," ",e.Rated),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"IMDB Rating:")," ",e.imdbRating),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Director:")," ",e.Director),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Writer:")," ",e.Writer),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Actors:")," ",e.Actors)))))}}]),a}(n.Component),h={fetchMovie:function(e){return function(t){return fetch("http://www.omdbapi.com/?apikey=f151a0ab&i=".concat(e)).then((function(e){return e.json()})).then((function(e){return t({type:"MOVIE/FETCH_MOVIE",payload:e})})).catch((function(e){return console.log(e)}))}}},g=Object(v.b)((function(e){return{movie:e.movies.movie}}),h)(f);var b=function(){return r.a.createElement("div",{className:"spinner-border text-center",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading..."))},O=function(e){var t=e.movie;return r.a.createElement("div",{className:"card m-1 col-sm-6",style:{width:"18rem"}},r.a.createElement(s.b,{to:"/movie/"+t.imdbID},r.a.createElement("img",{src:t.Poster,className:"card-img-top img-fluid",alt:t.Title}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.Title),r.a.createElement("small",{className:"text-muted"},t.Year))))},N=Object(v.b)((function(e){return{movies:e.movies.movies,loading:e.app.loading}}))((function(e){var t=e.movies,a=e.loading;return r.a.createElement(r.a.Fragment,null,void 0!==t&&t.length?t.map((function(e,t){return r.a.createElement(O,{key:t,movie:e})})):a&&void 0!==t?r.a.createElement(b,null):r.a.createElement("h2",{className:"text-center"},"Write title of movie"))})),y=function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).changeInputHandler=function(t){e.props.searchMovie(t.target.value)},e.submitHandler=function(t){t.preventDefault(),e.props.fetchMovies(e.props.text),e.props.setLoading()},e}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.submitHandler,className:"row my-4 col-11 col-lg-6"},r.a.createElement("input",{type:"text",className:"form-control search col",onChange:this.changeInputHandler,placeholder:"Search..."}),r.a.createElement("button",{className:"btn btn-primary col-3 mx-1"},"Search"))}}]),a}(n.Component),w={searchMovie:function(e){return function(t){t({type:"MOVIE/SEACRH_MOVIE",payload:e})}},fetchMovies:function(e){return function(t){return fetch("http://www.omdbapi.com/?apikey=f151a0ab&s=".concat(e)).then((function(e){return e.json()})).then((function(e){return t({type:"MOVIE/FETCH_MOVIES",payload:e.Search})})).catch((function(e){return console.log(e)}))}},setLoading:function(){return{type:"APP/LOADING"}}},j=Object(v.b)((function(e){return{text:e.movies.text}}),w)(y);var M=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement("div",{className:"App-main row col-10 offset-1 d-flex justify-content-center"},r.a.createElement(j,null),r.a.createElement("div",{className:"App-main row col-md-12 d-flex justify-content-center"},r.a.createElement(l.a,{exact:!0,path:"/",component:N}),r.a.createElement(l.a,{exact:!0,path:"/movie/:id",component:g}))),r.a.createElement(i,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(8),I=a(27),_=a(6),A={loading:!1},V={text:"",movies:[],loading:!1,movie:[]},D=Object(x.c)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVIE/SEACRH_MOVIE":return Object(_.a)(Object(_.a)({},e),{},{text:t.payload,loading:!1});case"MOVIE/FETCH_MOVIES":return Object(_.a)(Object(_.a)({},e),{},{movies:t.payload,loading:!1});case"MOVIE/FETCH_MOVIE":return Object(_.a)(Object(_.a)({},e),{},{movie:t.payload,loading:!1});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/LOADING":return Object(_.a)(Object(_.a)({},e),{},{loading:!0});default:return e}}}),S=[I.a],R=Object(x.e)(D,{},Object(x.d)(x.a.apply(void 0,S),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));o.a.render(r.a.createElement(v.a,{store:R},r.a.createElement(s.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.63d4f445.chunk.js.map