(function(e){function t(t){for(var n,a,c=t[0],o=t[1],l=t[2],u=0,d=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==i[c]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},i={app:0},s=[];function c(e){return o.p+"js/"+({Dashboard:"Dashboard",Login:"Login",Signup:"Signup"}[e]||e)+"."+{Dashboard:"9094edc8",Login:"766d1421",Signup:"3fb0607c"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],r={Dashboard:1,Login:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({Dashboard:"Dashboard",Login:"Login",Signup:"Signup"}[e]||e)+"."+{Dashboard:"286b597c",Login:"fc1d15d9",Signup:"31d6cfe0"}[e]+".css",i=o.p+n,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var l=s[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===i))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===n||u===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[e],p.parentNode.removeChild(p),r(s)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=c(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}i[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0c0f":function(e,t,r){},"562e":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("5530"),a=(r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("2b0e")),i=r("2f62"),s=r("8aa5"),c=r("bf4e"),o=r.n(c),l=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),u=r("bfa9"),d=r("1da1"),p=(r("96cf"),r("c740"),r("a434"),r("b0c0"),r("fb6a"),r("99af"),{state:{recipes:[],editRecipe:[],recipeToDelete:[]},mutations:{pushNewRecipe:function(e,t){e.recipes.push(t)},setDeleteRecipe:function(e,t){e.recipeToDelete=t},updateRecipe:function(e,t){var r=e.recipes.findIndex((function(e){return e.id===t.id}));-1!==r?e.recipes.splice(r,1,t):console.error("UpdateRecipe - Can't find index.")},updateEditRecipe:function(e,t){e.editRecipe=t},deleteRecipe:function(e,t){var r=e.recipes.findIndex((function(e){return e===t}));-1!==r?e.recipes.splice(r,1):console.error("Can't find index to delete.")},loadedRecipes:function(e,t){e.recipes=t},addLikeCount:function(e,t){var r=e.recipes.findIndex((function(e){return e.id===t.id}));-1!==r?e.recipes[r].likes+=1:console.error("Couldn't find Recipe to Like")},dislikeCount:function(e,t){var r=e.recipes.findIndex((function(e){return e.id===t.id}));-1!==r?e.recipes[r].likes-=1:console.error("Couldn't find Recipe to Like")}},actions:{updateEditRecipe:function(e,t){var r=e.commit;r("updateEditRecipe",t)},setDeleteRecipe:function(e,t){var r=e.commit;r("setDeleteRecipe",t)},retrieveRecipes:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){var r,n,a,i,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,r("setIsLoading",!0),t.prev=2,t.next=5,s["database"]().ref("recipes").once("value");case 5:for(c in n=t.sent,a=[],i=n.val(),i)a.push({id:c,likes:i[c].likes,label:i[c].label,date:i[c].date,image:i[c].image,imageUrl:i[c].imageUrl,ingredients:i[c].ingredients,url:i[c].url,numOfPeople:i[c].numOfPeople,vegetarian:i[c].vegetarian,creatorId:i[c].creatorId});r("setIsLoading",!1),r("loadedRecipes",a),t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](2),r("setIsLoading",!1),r("setAlert",{message:t.t0.message,type:"error"});case 17:case"end":return t.stop()}}),t,null,[[2,13]])})))()},pushNewRecipe:function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function r(){var n,a,i,c,o,l,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,n("setIsLoading",!0),r.prev=2,r.next=5,s["database"]().ref("recipes").push(t);case 5:return c=r.sent,i=c.key,o=t.image.name,l=o.slice(o.lastIndexOf(".")),u="recipes/".concat(c.key,".").concat(l),r.next=12,s["storage"]().ref(u).put(t.image);case 12:return r.next=14,s["storage"]().ref(u).getDownloadURL();case 14:return a=r.sent,t.id=i,t.image=0,t.imageUrl=a,r.next=20,s["database"]().ref("recipes").child(i).update(t);case 20:n("setAlert",{message:"You have added a new recipe successfully!",type:"success"}),n("setIsLoading",!1),n("pushNewRecipe",t),r.next=29;break;case 25:r.prev=25,r.t0=r["catch"](2),n("setIsLoading",!1),n("setAlert",{message:r.t0.message,type:"error"});case 29:case"end":return r.stop()}}),r,null,[[2,25]])})))()},updateRecipe:function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function r(){var n,a,i,c,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.commit,n("setIsLoading",!0),r.prev=2,!t.image){r.next=13;break}return i=t.image.name,c=i.slice(i.lastIndexOf(".")),o="recipes/".concat(t.id,".").concat(c),r.next=9,s["storage"]().ref(o).put(t.image);case 9:return r.next=11,s["storage"]().ref(o).getDownloadURL();case 11:a=r.sent,t.imageUrl=a;case 13:return r.next=15,s["database"]().ref("recipes").child(t.id).update(t);case 15:n("updateRecipe",t),n("setAlert",{message:"You have updated your recipe successfully!",type:"success"}),n("setIsLoading",!1),r.next=24;break;case 20:r.prev=20,r.t0=r["catch"](2),n("setIsLoading",!1),n("setAlert",{message:r.t0.message,type:"error"});case 24:case"end":return r.stop()}}),r,null,[[2,20]])})))()},deleteRecipe:function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,n("setIsLoading",!0),r.prev=2,r.next=5,s["database"]().ref("recipes").child(t.id).remove();case 5:n("setAlert",{message:"You have deleted your recipe successfully!",type:"success"}),n("setIsLoading",!1),n("deleteRecipe",t),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](2),n("setIsLoading",!1),n("setAlert",{message:r.t0.message,type:"error"});case 14:case"end":return r.stop()}}),r,null,[[2,10]])})))()},addLikeCount:function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function r(){var a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.commit,a("setIsLoading",!0),i=Object(n["a"])({},t),r.prev=3,i.likes+=1,i.image=0,r.next=8,s["database"]().ref("recipes").child(t.id).update(i);case 8:a("setIsLoading",!1),a("addLikeCount",t),r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](3),a("setIsLoading",!1),a("setAlert",{message:r.t0.message,type:"error"});case 16:case"end":return r.stop()}}),r,null,[[3,12]])})))()},dislikeCount:function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function r(){var a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.commit,a("setIsLoading",!0),i=Object(n["a"])({},t),r.prev=3,i.likes-=1,i.image=0,r.next=8,s["database"]().ref("recipes").child(t.id).update(i);case 8:a("setIsLoading",!1),a("dislikeCount",t),r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](3),a("setIsLoading",!1),a("setAlert",{message:r.t0.message,type:"error"});case 16:case"end":return r.stop()}}),r,null,[[3,12]])})))()}},getters:{recipes:function(e){return e.recipes},editRecipe:function(e){return e.editRecipe},recipeToDelete:function(e){return e.recipeToDelete}}}),f={state:{isLoading:!1,drawer:!1,alert:{message:"",type:""},dialog:{isActive:!1,mode:""}},mutations:{setDialog:function(e,t){e.dialog.isActive=t.isActive,e.dialog.mode=t.mode},setIsLoading:function(e,t){e.isLoading=t},setAlert:function(e,t){e.alert.message=t.message,e.alert.type=t.type},setDrawer:function(e,t){e.drawer=t},clearAlert:function(e){e.alert.message="",e.alert.type=""},clearDialog:function(e){e.dialog.isActive=!1,e.dialog.mode=""}},actions:{setIsLoading:function(e,t){var r=e.commit;r("setIsLoading",t)},setDrawer:function(e,t){var r=e.commit;r("setDrawer",t)},setDialog:function(e,t){var r=e.commit;r("setDialog",t)},setError:function(e,t){var r=e.commit;r("setAlert",t)},clearAlert:function(e){var t=e.commit;t("clearAlert")},clearDialog:function(e){var t=e.commit;t("clearDialog")}},getters:{isLoading:function(e){return e.isLoading},drawer:function(e){return e.drawer},alert:function(e){return e.alert},dialog:function(e){return e.dialog}}},g=(r("7db0"),{state:{user:null},mutations:{likeRecipe:function(e,t){var r=t.id,n=e.user.favRecipes;e.user.favRecipes.findIndex((function(e){return e.id===r}))>=0||n.push(t)},dislikeRecipe:function(e,t){var r=e.user.favRecipes;r.splice(r.findIndex((function(e){return e.id===t.id})),1)},setUser:function(e,t){e.user=t}},actions:{autoSignin:function(e,t){var r=e.commit;r("setUser",{id:t.uid,favRecipes:[],fbKeys:{}})},fetchUserData:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){var r,n,a,i,c,o,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n=e.getters,r("setIsLoading",!0),t.prev=2,t.next=5,s["database"]().ref("/users/".concat(n.user.id,"/favRecipes/")).once("value");case 5:for(o in a=t.sent,i=a.val(),c=[],i)c.push({id:i[o].id,fbKey:i[o].fbKey});l={id:n.user.id,favRecipes:c},r("setIsLoading",!1),r("setUser",l),t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](2),r("setIsLoading",!1),r("setAlert",{message:t.t0.message,type:"error"});case 18:case"end":return t.stop()}}),t,null,[[2,14]])})))()},likeRecipe:function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function r(){var n,a,i,c,o,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.getters,n("setIsLoading",!0),i=a.user,c={id:t.id,fbKey:null},o="/users/".concat(i.id,"/favRecipes/"),r.prev=5,r.next=8,s["database"]().ref(o).push(c);case 8:return l=r.sent,c.fbKey=l.key,r.next=12,s["database"]().ref(o).child(l.key).update(c);case 12:n("setIsLoading",!1),n("likeRecipe",c),r.next=20;break;case 16:r.prev=16,r.t0=r["catch"](5),n("setIsLoading",!1),n("setAlert",{message:r.t0.message,type:"error"});case 20:case"end":return r.stop()}}),r,null,[[5,16]])})))()},dislikeRecipe:function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function r(){var n,a,i,c,o,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.commit,a=e.getters,n("setIsLoading",!0),i=a.user,c=i.favRecipes.find((function(e){return e.id===t.id})),c.fbKey){r.next=8;break}return o="Can't like a recipe without a FbKey",n("setAlert",{message:o}),r.abrupt("return");case 8:return l=c.fbKey,r.prev=9,r.next=12,s["database"]().ref("/users/".concat(i.id,"/favRecipes/")).child(l).remove();case 12:n("setIsLoading",!1),n("dislikeRecipe",c),r.next=20;break;case 16:r.prev=16,r.t0=r["catch"](9),n("setIsLoading",!1),n("setAlert",{message:r.t0.message,type:"error"});case 20:case"end":return r.stop()}}),r,null,[[9,16]])})))()},logUserOut:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,t.next=4,s["auth"]().signOut();case 4:r("setAlert",{message:"You have logged out successfully!",type:"success"}),r("setUser",null),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),r("setAlert",{message:t.t0.message,type:"error"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()},signUserUp:function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function r(){var n,a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,n("setIsLoading",!0),r.prev=2,r.next=5,s["auth"]().createUserWithEmailAndPassword(t.email,t.password);case 5:a=r.sent,n("setAlert",{message:"You have registered successfully!",type:"success"}),n("setIsLoading",!1),n("setUser",{id:a.user.uid,favRecipes:[],fbKeys:{}}),r.next=16;break;case 11:r.prev=11,r.t0=r["catch"](2),i=r.t0.message,n("setIsLoading",!1),n("setAlert",{message:i,type:"error"});case 16:case"end":return r.stop()}}),r,null,[[2,11]])})))()},signUserIn:function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function r(){var n,a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,n("setIsLoading",!0),r.prev=2,r.next=5,s["auth"]().signInWithEmailAndPassword(t.email,t.password);case 5:a=r.sent,n("setIsLoading",!1),n("setAlert",{message:"You have logged in successfully!",type:"success"}),n("setUser",{id:a.user.uid,favRecipes:[],fbKeys:{}}),r.next=16;break;case 11:r.prev=11,r.t0=r["catch"](2),i=r.t0.message,n("setIsLoading",!1),n("setAlert",{message:i,type:"error"});case 16:case"end":return r.stop()}}),r,null,[[2,11]])})))()},googleSignUserIn:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){var r,n,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,r("setIsLoading",!0),t.prev=2,n=new s["auth"].GoogleAuthProvider,t.next=6,s["auth"]().signInWithPopup(n);case 6:a=t.sent,r("setIsLoading",!1),r("setAlert",{message:"You have logged in successfully!",type:"success"}),r("setUser",{id:a.user.uid,favRecipes:[],fbKeys:{}}),t.next=17;break;case 12:t.prev=12,t.t0=t["catch"](2),i=t.t0.message,r("setIsLoading",!1),r("setAlert",{message:i,type:"error"});case 17:case"end":return t.stop()}}),t,null,[[2,12]])})))()}},getters:{user:function(e){return e.user},loggedIn:function(e){return null!==e.user&&void 0!==e.user}}});a["a"].use(i["a"]);var m=new u["a"]({key:"store"}),v=new i["a"].Store({strict:!0,plugins:[m.plugin],modules:{recipes:p,shared:f,user:g}});a["a"].use(l["a"]);var h=[{path:"*",name:"notfound",redirect:"/"},{path:"/",name:"Dashboard",component:function(){return r.e("Dashboard").then(r.bind(null,"7277"))}},{path:"/login",name:"Login",component:function(){return r.e("Login").then(r.bind(null,"562a"))},meta:{requiredVisitor:!0}},{path:"/signup",name:"Signup",component:function(){return r.e("Signup").then(r.bind(null,"ad8b"))},meta:{requiredVisitor:!0}}],b=new l["a"]({routes:h});b.beforeEach((function(e,t,r){e.matched.some((function(e){return e.meta.requiresAuth}))?v.getters.loggedIn?r():r({name:"Dashboard"}):e.matched.some((function(e){return e.meta.requiredVisitor}))&&v.getters.loggedIn?r({name:"Dashboard"}):r()}));var w=b,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[e.dialog.isActive?r("main-dialog"):e._e(),r("main-header"),r("main-nav"),r("v-main",[r("app-alert",{on:{dismissed:e.onDismissed}}),r("router-view")],1)],1)},y=[],k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app-bar",{attrs:{app:"",color:"#F9F5F3",light:""}},[r("v-app-bar-nav-icon",{on:{click:function(t){return t.stopPropagation(),e.setDrawer(!e.drawer)}}}),r("div",{staticClass:"d-flex align-center"},[r("router-link",{attrs:{to:"/"}},[r("v-img",{staticClass:"shrink mr-2 d-none d-md-block",attrs:{alt:"LOGO",contain:"",src:"http://forkify.netlify.com/img/logo.png",transition:"scale-transition",width:"140"}})],1)],1),r("v-spacer"),r("div",{staticClass:"flex-wrap"},[e.loggedIn?r("div",[r("v-btn",{staticClass:"btn-primary mr-5 mr-sm-5",attrs:{loading:e.isLoading,disabled:e.isLoading},on:{click:function(t){e.loader="loading"}},scopedSlots:e._u([{key:"loader",fn:function(){return[r("span",{staticClass:"custom-loader"},[r("v-icon",{attrs:{light:""}},[e._v("mdi-reload")])],1)]},proxy:!0}],null,!1,1789483978)},[e._v(" Reload "),r("v-icon",[e._v("mdi-reload")])],1),r("v-btn",{staticClass:"btn-primary",on:{click:e.onLogOut}},[e._v(" Logout ")])],1):r("div",[r("v-btn",{staticClass:"btn-primary mr-5 mr-sm-5",attrs:{to:"/login"}},[e._v(" Login ")]),r("v-btn",{staticClass:"btn-primary",attrs:{to:"/signup"}},[e._v(" signup ")])],1)])],1)},R=[],O={data:function(){return{loader:null}},watch:{loader:function(){this.$router.go()}},computed:Object(n["a"])({},Object(i["c"])(["loggedIn","isLoading","drawer"])),methods:Object(n["a"])(Object(n["a"])({},Object(i["b"])(["setDrawer","logUserOut"])),{},{onLogOut:function(){this.logUserOut()}})},I=O,L=r("2877"),j=r("6544"),D=r.n(j),_=r("40dc"),A=r("5bc1"),C=r("8336"),V=r("132d"),U=r("adda"),E=r("2fa4"),S=Object(L["a"])(I,k,R,!1,null,null,null),P=S.exports;D()(S,{VAppBar:_["a"],VAppBarNavIcon:A["a"],VBtn:C["a"],VIcon:V["a"],VImg:U["a"],VSpacer:E["a"]});var q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-navigation-drawer",{attrs:{fixed:"",left:"",temporary:"",color:"#F9F5F3"},model:{value:e.getDrawer,callback:function(t){e.getDrawer=t},expression:"getDrawer"}},[r("v-list",{attrs:{nav:"",dense:""}},[e.loggedIn?r("v-list-item-group",{attrs:{"active-class":"text--accent-4"}},e._l(e.loggedInListItems,(function(e){return r("app-list-item",{key:e.title,attrs:{item:e}})})),1):r("v-list-item-group",{attrs:{"active-class":"text--accent-4"}},e._l(e.loggedOutListItems,(function(e){return r("app-list-item",{key:e.title,attrs:{item:e}})})),1)],1)],1)},T=[],$={data:function(){return{group:null,loggedInListItems:[{title:"Dashboard",icon:"mdi-view-dashboard",url:"/dashboard"}],loggedOutListItems:[{title:"Dashboard",icon:"mdi-view-dashboard",url:"/dashboard"},{title:"Login",icon:"mdi-login",url:"/login"},{title:"Signup",icon:"mdi-account-plus-outline",url:"/signup"}]}},computed:Object(n["a"])(Object(n["a"])({},Object(i["c"])(["loggedIn","drawer"])),{},{getDrawer:{get:function(){return this.drawer},set:function(e){return e!==this.drawer&&this.setDrawer(e),e}}}),methods:Object(n["a"])({},Object(i["b"])(["setDrawer"]))},F=$,N=r("8860"),z=r("1baa"),M=r("f774"),B=Object(L["a"])(F,q,T,!1,null,null,null),K=B.exports;D()(B,{VList:N["a"],VListItemGroup:z["a"],VNavigationDrawer:M["a"]});var J={name:"App",components:{MainHeader:P,MainNav:K},computed:Object(n["a"])({},Object(i["c"])(["isLoading","dialog","loggedIn"])),watch:{loggedIn:function(e){if(e)return this.$router.push({name:"Dashboard"})}},methods:Object(n["a"])(Object(n["a"])({},Object(i["b"])(["clearAlert"])),{},{onDismissed:function(){this.clearAlert()}})},Y=J,H=(r("5c0b"),r("7496")),G=r("f6c4"),W=Object(L["a"])(Y,x,y,!1,null,null,null),X=W.exports;D()(W,{VApp:H["a"],VMain:G["a"]});var Z={apiKey:"AIzaSyDi108tJqykuO9THGDnCKvJgrRJpohuDfo",authDomain:"abnrecipe.firebaseapp.com",databaseURL:"https://abnrecipe.firebaseio.com",projectId:"abnrecipe",storageBucket:"gs://abnrecipe.appspot.com/",messagingSenderId:"1025678886368",appId:"1:1025678886368:web:5dcbdeb553d91a80505785",measurementId:"G-3WZJ8TDB7X"},Q=r("9483");Object(Q["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var ee=r("f309");a["a"].use(ee["a"]);var te=new ee["a"]({}),re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.alert.type?r("v-alert",{staticClass:"alert",attrs:{transition:"scroll-y-transition","max-width":"300px",type:e.alert.type,prominent:"",dismissible:"",value:!0},on:{input:e.onClose}},[e._v(" "+e._s(e.alert.message)+" ")]):e._e()},ne=[],ae={computed:Object(n["a"])({},Object(i["c"])(["alert"])),watch:{alert:{handler:function(e){var t=this;if(e.message||e.type)return setTimeout((function(){t.clearAlert()}),3200)},deep:!0}},methods:Object(n["a"])(Object(n["a"])({},Object(i["b"])(["clearAlert"])),{},{onClose:function(){this.$emit("dismissed")}})},ie=ae,se=(r("b528"),r("0798")),ce=Object(L["a"])(ie,re,ne,!1,null,null,null),oe=ce.exports;D()(ce,{VAlert:se["a"]});var le=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:e.dialog.isActive,callback:function(t){e.$set(e.dialog,"isActive",t)},expression:"dialog.isActive"}},["edit"===e.dialog.mode?r("form-edit"):"create"===e.dialog.mode?r("form-create"):"deleteRecipe"===e.dialog.mode?r("card-confirm"):e._e()],1)],1)},ue=[],de=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{ref:"form",attrs:{"lazy-validation":""}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[e._v("Edit recipe")])]),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[r("v-file-input",{attrs:{rules:e.rules.image,"show-size":!0,color:"#f48982",accept:"image/*",placeholder:"Edit an recipe image","prepend-icon":"mdi-camera",label:"Recipe Image"},on:{change:e.onFilePicked}})],1),r("img",{attrs:{src:e.recipe.imageUrl,rules:e.rules.imageUrl,height:"150"}}),r("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[r("v-text-field",{attrs:{label:"Instructions url*",rules:e.rules.url,"error-messages":e.validURL,"prepend-icon":"mdi-link",required:"",color:"#f48982"},model:{value:e.recipe.url,callback:function(t){e.$set(e.recipe,"url",t)},expression:"recipe.url"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Headline*",rules:e.rules.label,"prepend-icon":"mdi-page-layout-header",required:"",color:"#f48982"},model:{value:e.recipe.label,callback:function(t){e.$set(e.recipe,"label",t)},expression:"recipe.label"}})],1),e._l(e.recipe.ingredients,(function(t,n){return r("v-col",{key:n,attrs:{cols:"12"}},[r("v-btn",{staticClass:"mx-2",attrs:{right:"","x-small":"",absolute:"",fab:"",dark:"",color:"green"},on:{click:function(t){return e.recipe.ingredients.push({value:""})}}},[r("v-icon",{attrs:{dark:""}},[e._v("mdi-plus")])],1),e.recipe.ingredients.length>1?r("v-btn",{staticClass:"mx-2 right-2",attrs:{right:"","x-small":"",absolute:"",fab:"",dark:"",color:"red"},on:{click:function(t){return e.recipe.ingredients.splice(n,1)}}},[r("v-icon",{attrs:{dark:""}},[e._v("mdi-minus")])],1):e._e(),r("v-text-field",{attrs:{label:"Ingredients*","prepend-icon":"mdi-page-layout-body",required:"",rules:e.rules.ingredients,relative:"",color:"#f48982"},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"ingredient.value"}})],1)})),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-select",{attrs:{items:["1-2","3-6","7-10","11+"],"prepend-icon":"mdi-account-group",rules:e.rules.numOfPeople,color:"#f48982",label:"Number of diners*",required:""},model:{value:e.recipe.numOfPeople,callback:function(t){e.$set(e.recipe,"numOfPeople",t)},expression:"recipe.numOfPeople"}})],1),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-checkbox",{attrs:{"prepend-icon":e.leaf,label:"Vegetarian?",color:"green"},model:{value:e.recipe.vegetarian,callback:function(t){e.$set(e.recipe,"vegetarian",t)},expression:"recipe.vegetarian"}})],1)],2)],1),r("small",[e._v("*indicates required field")])],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{text:"",color:"error"},on:{click:e.closeModalRecipe}},[e._v("Cancel")]),r("v-btn",{attrs:{text:"",color:"green",disabled:e.isChange},on:{click:e.pushUpdate}},[e._v(" Update ")])],1)],1)],1)},pe=[],fe=(r("ac1f"),r("466d"),r("4d63"),r("25f0"),{name:"EditForm",data:function(){return{recipe:null,rules:{url:[function(e){return!!e||"Url is required"}],label:[function(e){return!!e||"Headline is required"},function(e){return!e||e.length>=3||"Minimum length is 3 characters"}],ingredients:[function(e){return!!e||"Ingredient is required"},function(e){return!e||e.length>=3||"Minimum length is 3 characters"}],numOfPeople:[function(e){return!!e||"This feild is required"}],vegetarian:[function(e){return!!e||"This feild is required"}],image:[function(e){return!e||e.size<2e6||"Avatar size should be less than 2 MB!"},function(e){return!e||e.type.match("image.*")||"Images only!"}],imageUrl:[function(e){return!!e||"You reuqire to have a valid image!"}]},unexpected:""}},created:function(){this.recipe=JSON.parse(JSON.stringify(this.editRecipe))},computed:Object(n["a"])(Object(n["a"])({},Object(i["c"])(["editRecipe"])),{},{leaf:function(){return this.recipe.vegetarian?"mdi-leaf":"mdi-leaf-off"},isChange:function(){return JSON.stringify(this.editRecipe)===JSON.stringify(this.recipe)},validURL:function(){var e=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");if(this.recipe.url)return e.test(this.recipe.url)?"":"Enter a valid URL!"}}),methods:Object(n["a"])(Object(n["a"])({},Object(i["b"])(["updateRecipe","updateEditRecipe","setDialog","clearDialog"])),{},{closeModalRecipe:function(){this.clearDialog(),this.updateEditRecipe([]),this.$refs.form.resetValidation()},pushUpdate:function(){var e=this.$refs.form.validate();e&&(this.recipe.imageUrl||this.recipe.image)&&(this.updateRecipe(this.recipe),this.closeModalRecipe())},onFilePicked:function(e){var t=this;if(e){if(!e.type.match("image.*"))return this.recipe.imageUrl="",this.recipe.image=0,alert("Images only!");var r=new FileReader;r.addEventListener("load",(function(){t.recipe.imageUrl=r.result})),r.readAsDataURL(e),this.recipe.image=e}}})}),ge=fe,me=(r("9cf1"),r("b0af")),ve=r("99d9"),he=r("ac7c"),be=r("62ad"),we=r("a523"),xe=r("23a7"),ye=r("4bd4"),ke=r("0fd9"),Re=r("b974"),Oe=r("8654"),Ie=Object(L["a"])(ge,de,pe,!1,null,null,null),Le=Ie.exports;D()(Ie,{VBtn:C["a"],VCard:me["a"],VCardActions:ve["a"],VCardText:ve["b"],VCardTitle:ve["c"],VCheckbox:he["a"],VCol:be["a"],VContainer:we["a"],VFileInput:xe["a"],VForm:ye["a"],VIcon:V["a"],VRow:ke["a"],VSelect:Re["a"],VSpacer:E["a"],VTextField:Oe["a"]});var je=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{ref:"form",attrs:{"lazy-validation":""}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[e._v("Create recipe")])]),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[r("v-file-input",{attrs:{rules:e.rules.image,"show-size":!0,color:"#f48982",accept:"image/*",placeholder:"Pick an recipe image*","prepend-icon":"mdi-camera",label:"Recipe Image",required:""},on:{change:e.onFilePicked}})],1),r("img",{attrs:{alt:e.recipe.label,src:e.recipe.imageUrl,height:"150"}}),r("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[r("v-text-field",{attrs:{label:"Instructions url*",rules:e.rules.url,"error-messages":e.validURL,"prepend-icon":"mdi-link",required:"",color:"#f48982"},model:{value:e.recipe.url,callback:function(t){e.$set(e.recipe,"url",t)},expression:"recipe.url"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Headline*",rules:e.rules.label,"prepend-icon":"mdi-page-layout-header",required:"",color:"#f48982"},model:{value:e.recipe.label,callback:function(t){e.$set(e.recipe,"label",t)},expression:"recipe.label"}})],1),e._l(e.recipe.ingredients,(function(t,n){return r("v-col",{key:n,attrs:{cols:"12"}},[r("v-btn",{staticClass:"mx-2",attrs:{right:"","x-small":"",absolute:"",fab:"",dark:"",color:"green"},on:{click:function(t){return e.recipe.ingredients.push({value:""})}}},[r("v-icon",{attrs:{dark:""}},[e._v("mdi-plus")])],1),e.recipe.ingredients.length>1?r("v-btn",{staticClass:"mx-2 right-2",attrs:{right:"","x-small":"",absolute:"",fab:"",dark:"",color:"red"},on:{click:function(t){return e.recipe.ingredients.splice(n,1)}}},[r("v-icon",{attrs:{dark:""}},[e._v("mdi-minus")])],1):e._e(),r("v-text-field",{attrs:{label:"Ingredients*","prepend-icon":"mdi-page-layout-body",required:"",rules:e.rules.ingredients,relative:"",color:"#f48982"},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"ingredient.value"}})],1)})),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-select",{attrs:{items:["1-2","3-6","7-10","11+"],"prepend-icon":"mdi-account-group",rules:e.rules.numOfPeople,color:"#f48982",label:"Number of diners*",required:""},model:{value:e.recipe.numOfPeople,callback:function(t){e.$set(e.recipe,"numOfPeople",t)},expression:"recipe.numOfPeople"}})],1),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-checkbox",{attrs:{"prepend-icon":e.leaf,label:"Vegetarian?",color:"green"},model:{value:e.recipe.vegetarian,callback:function(t){e.$set(e.recipe,"vegetarian",t)},expression:"recipe.vegetarian"}})],1)],2)],1),r("small",[e._v("*indicates required field")])],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{text:"",color:"error"},on:{click:e.closeModalRecipe}},[e._v("CANCEL")]),r("v-btn",{attrs:{text:"",color:"green"},on:{click:e.addNewRecipe}},[e._v("CREATE")])],1)],1)],1)},De=[],_e={name:"CreateRecipe",data:function(){return{recipe:{image:null,imageUrl:"https://via.placeholder.com/150",url:"",label:"",ingredients:[{value:""}],vegetarian:!1,numOfPeople:"",likes:0},rules:{url:[function(e){return!!e||"Url is required"}],label:[function(e){return!!e||"Headline is required"},function(e){return!e||e.length>=3||"Minimum length is 3 characters"}],ingredients:[function(e){return!!e||"Ingredient is required"},function(e){return!e||e.length>=3||"Minimum length is 3 characters"}],numOfPeople:[function(e){return!!e||"This feild is required"}],vegetarian:[function(e){return!!e||"This feild is required"}],image:[function(e){return!!e||"Image is required!"},function(e){return!e||e.size<2e6||"Avatar size should be less than 2 MB!"},function(e){return!e||!e.type||e.type.match("image.*")||"Images only!"}]}}},computed:Object(n["a"])(Object(n["a"])({},Object(i["c"])(["user"])),{},{leaf:function(){return this.recipe.vegetarian?"mdi-leaf":"mdi-leaf-off"},validURL:function(){var e=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");if(this.recipe.url)return e.test(this.recipe.url)?"":"Enter a valid URL!"}}),methods:Object(n["a"])(Object(n["a"])({},Object(i["b"])(["pushNewRecipe","setDialog","clearDialog"])),{},{closeModalRecipe:function(){this.clearDialog(),this.$refs.form.resetValidation()},addNewRecipe:function(){var e=new Date,t=("00"+e.getDate()).slice(-2),r=("00"+(e.getMonth()+1)).slice(-2),n=e.getFullYear(),a=("00"+e.getHours()).slice(-2),i=("00"+e.getMinutes()).slice(-2),s=("00"+e.getSeconds()).slice(-2),c="".concat(t,"/").concat(r,"/").concat(n,"  ").concat(a,":").concat(i,":").concat(s);this.recipe.date=c,this.recipe.creatorId=this.user.id;var o=this.$refs.form.validate();o&&(this.pushNewRecipe(this.recipe),this.closeModalRecipe())},onFilePicked:function(e){var t=this;if(e){if(!e.type.match("image.*"))return this.recipe.imageUrl="",this.recipe.image=0,alert("Images only!");var r=new FileReader;r.addEventListener("load",(function(){t.recipe.imageUrl=r.result})),r.readAsDataURL(e),this.recipe.image=e}}})},Ae=_e,Ce=(r("63fa"),Object(L["a"])(Ae,je,De,!1,null,null,null)),Ve=Ce.exports;D()(Ce,{VBtn:C["a"],VCard:me["a"],VCardActions:ve["a"],VCardText:ve["b"],VCardTitle:ve["c"],VCheckbox:he["a"],VCol:be["a"],VContainer:we["a"],VFileInput:xe["a"],VForm:ye["a"],VIcon:V["a"],VRow:ke["a"],VSelect:Re["a"],VSpacer:E["a"],VTextField:Oe["a"]});var Ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[e._v(' Are you sure you want to delete "'+e._s(e.recipeToDelete.label)+'"? ')]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"error",text:""},on:{click:function(t){return e.clearDialog()}}},[e._v(" Disagree ")]),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.onDelete}},[e._v(" Agree ")])],1)],1)},Ee=[],Se={computed:Object(n["a"])({},Object(i["c"])(["dialog","recipeToDelete"])),methods:Object(n["a"])(Object(n["a"])({},Object(i["b"])(["deleteRecipe","setDialog","clearDialog"])),{},{onDelete:function(){this.deleteRecipe(this.recipeToDelete),this.clearDialog()}})},Pe=Se,qe=Object(L["a"])(Pe,Ue,Ee,!1,null,null,null),Te=qe.exports;D()(qe,{VBtn:C["a"],VCard:me["a"],VCardActions:ve["a"],VCardTitle:ve["c"],VSpacer:E["a"]});var $e={name:"Dialog",components:{FormEdit:Le,FormCreate:Ve,CardConfirm:Te},computed:Object(n["a"])({},Object(i["c"])(["dialog"]))},Fe=$e,Ne=(r("9de0"),r("169a")),ze=Object(L["a"])(Fe,le,ue,!1,null,null,null),Me=ze.exports;D()(ze,{VDialog:Ne["a"],VRow:ke["a"]});var Be=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-list-item",{attrs:{to:e.item.url}},[r("v-list-item-icon",[r("v-icon",[e._v(e._s(e.item.icon))])],1),r("v-list-item-content",[r("v-list-item-title",[e._v(" "+e._s(e.item.title)+" ")])],1)],1)},Ke=[],Je={props:{item:{type:Object,requeird:!0,default:function(){}}}},Ye=Je,He=r("da13"),Ge=r("5d23"),We=r("34c3"),Xe=Object(L["a"])(Ye,Be,Ke,!1,null,null,null),Ze=Xe.exports;D()(Xe,{VIcon:V["a"],VListItem:He["a"],VListItemContent:Ge["a"],VListItemIcon:We["a"],VListItemTitle:Ge["b"]}),a["a"].use(o.a),a["a"].config.productionTip=!1,a["a"].component("app-alert",oe),a["a"].component("main-dialog",Me),a["a"].component("app-list-item",Ze),new a["a"]({store:v,router:w,vuetify:te,render:function(e){return e(X)},methods:Object(n["a"])({},Object(i["b"])(["retrieveRecipes","autoSignin","clearSuccess","fetchUserData"])),computed:Object(n["a"])({},Object(i["c"])(["success"])),created:function(){var e=this;s["initializeApp"](Z),s["auth"]().onAuthStateChanged((function(t){t&&(e.autoSignin(t),e.fetchUserData())})),this.retrieveRecipes()}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"63fa":function(e,t,r){"use strict";r("f944")},"9c0c":function(e,t,r){},"9cf1":function(e,t,r){"use strict";r("562e")},"9de0":function(e,t,r){"use strict";r("bfaf")},b528:function(e,t,r){"use strict";r("0c0f")},bfaf:function(e,t,r){},f944:function(e,t,r){}});
//# sourceMappingURL=app.865d4299.js.map