(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{FuVC:function(e,t,s){"use strict";s.r(t),s.d(t,"TaskModule",(function(){return ye}));var r=s("ofXK"),n=s("fXoL"),a=s("LRne"),o=s("HDdC"),i=s("bOdf"),l=s("pLZG"),c=s("lJxs");class u{}class d{}class p{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?()=>{this.headers=new Map,e.split("\n").forEach(e=>{const t=e.indexOf(":");if(t>0){const s=e.slice(0,t),r=s.toLowerCase(),n=e.slice(t+1).trim();this.maybeSetNormalizedName(s,r),this.headers.has(r)?this.headers.get(r).push(n):this.headers.set(r,[n])}})}:()=>{this.headers=new Map,Object.keys(e).forEach(t=>{let s=e[t];const r=t.toLowerCase();"string"==typeof s&&(s=[s]),s.length>0&&(this.headers.set(r,s),this.maybeSetNormalizedName(t,r))})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof p?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){const t=new p;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof p?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){const t=e.name.toLowerCase();switch(e.op){case"a":case"s":let s=e.value;if("string"==typeof s&&(s=[s]),0===s.length)return;this.maybeSetNormalizedName(e.name,t);const r=("a"===e.op?this.headers.get(t):void 0)||[];r.push(...s),this.headers.set(t,r);break;case"d":const n=e.value;if(n){let e=this.headers.get(t);if(!e)return;e=e.filter(e=>-1===n.indexOf(e)),0===e.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,e)}else this.headers.delete(t),this.normalizedNames.delete(t)}}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}}class h{encodeKey(e){return b(e)}encodeValue(e){return b(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}function b(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}class f{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new h,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(e,t){const s=new Map;return e.length>0&&e.split("&").forEach(e=>{const r=e.indexOf("="),[n,a]=-1==r?[t.decodeKey(e),""]:[t.decodeKey(e.slice(0,r)),t.decodeValue(e.slice(r+1))],o=s.get(n)||[];o.push(a),s.set(n,o)}),s}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{const s=e.fromObject[t];this.map.set(t,Array.isArray(s)?s:[s])})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const t=this.encoder.encodeKey(e);return this.map.get(e).map(e=>t+"="+this.encoder.encodeValue(e)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const t=new f({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat([e]),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const t=("a"===e.op?this.map.get(e.param):void 0)||[];t.push(e.value),this.map.set(e.param,t);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let t=this.map.get(e.param)||[];const s=t.indexOf(e.value);-1!==s&&t.splice(s,1),t.length>0?this.map.set(e.param,t):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}function m(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function y(e){return"undefined"!=typeof Blob&&e instanceof Blob}function g(e){return"undefined"!=typeof FormData&&e instanceof FormData}class w{constructor(e,t,s,r){let n;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||r?(this.body=void 0!==s?s:null,n=r):n=s,n&&(this.reportProgress=!!n.reportProgress,this.withCredentials=!!n.withCredentials,n.responseType&&(this.responseType=n.responseType),n.headers&&(this.headers=n.headers),n.params&&(this.params=n.params)),this.headers||(this.headers=new p),this.params){const e=this.params.toString();if(0===e.length)this.urlWithParams=t;else{const s=t.indexOf("?");this.urlWithParams=t+(-1===s?"?":s<t.length-1?"&":"")+e}}else this.params=new f,this.urlWithParams=t}serializeBody(){return null===this.body?null:m(this.body)||y(this.body)||g(this.body)||"string"==typeof this.body?this.body:this.body instanceof f?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||g(this.body)?null:y(this.body)?this.body.type||null:m(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof f?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||Array.isArray(this.body)?"application/json":null}clone(e={}){const t=e.method||this.method,s=e.url||this.url,r=e.responseType||this.responseType,n=void 0!==e.body?e.body:this.body,a=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,o=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let i=e.headers||this.headers,l=e.params||this.params;return void 0!==e.setHeaders&&(i=Object.keys(e.setHeaders).reduce((t,s)=>t.set(s,e.setHeaders[s]),i)),e.setParams&&(l=Object.keys(e.setParams).reduce((t,s)=>t.set(s,e.setParams[s]),l)),new w(t,s,n,{params:l,headers:i,reportProgress:o,responseType:r,withCredentials:a})}}var v=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}({});class S{constructor(e,t=200,s="OK"){this.headers=e.headers||new p,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||s,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class C extends S{constructor(e={}){super(e),this.type=v.ResponseHeader}clone(e={}){return new C({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class T extends S{constructor(e={}){super(e),this.type=v.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new T({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class R extends S{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?"Http failure during parsing for "+(e.url||"(unknown url)"):`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}function k(e,t){return{body:t,headers:e.headers,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}let x=(()=>{class e{constructor(e){this.handler=e}request(e,t,s={}){let r;if(e instanceof w)r=e;else{let n=void 0;n=s.headers instanceof p?s.headers:new p(s.headers);let a=void 0;s.params&&(a=s.params instanceof f?s.params:new f({fromObject:s.params})),r=new w(e,t,void 0!==s.body?s.body:null,{headers:n,params:a,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials})}const n=Object(a.a)(r).pipe(Object(i.a)(e=>this.handler.handle(e)));if(e instanceof w||"events"===s.observe)return n;const o=n.pipe(Object(l.a)(e=>e instanceof T));switch(s.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return o.pipe(Object(c.a)(e=>{if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body}));case"blob":return o.pipe(Object(c.a)(e=>{if(null!==e.body&&!(e.body instanceof Blob))throw new Error("Response is not a Blob.");return e.body}));case"text":return o.pipe(Object(c.a)(e=>{if(null!==e.body&&"string"!=typeof e.body)throw new Error("Response is not a string.");return e.body}));case"json":default:return o.pipe(Object(c.a)(e=>e.body))}case"response":return o;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:(new f).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,s={}){return this.request("PATCH",e,k(s,t))}post(e,t,s={}){return this.request("POST",e,k(s,t))}put(e,t,s={}){return this.request("PUT",e,k(s,t))}}return e.\u0275fac=function(t){return new(t||e)(n.ac(u))},e.\u0275prov=n.Ib({token:e,factory:e.\u0275fac}),e})();class N{constructor(e,t){this.next=e,this.interceptor=t}handle(e){return this.interceptor.intercept(e,this.next)}}const O=new n.q("HTTP_INTERCEPTORS");let E=(()=>{class e{intercept(e,t){return t.handle(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Ib({token:e,factory:e.\u0275fac}),e})();const P=/^\)\]\}',?\n/;class I{}let H=(()=>{class e{constructor(){}build(){return new XMLHttpRequest}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Ib({token:e,factory:e.\u0275fac}),e})(),j=(()=>{class e{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");return new o.a(t=>{const s=this.xhrFactory.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((e,t)=>s.setRequestHeader(e,t.join(","))),e.headers.has("Accept")||s.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const t=e.detectContentTypeHeader();null!==t&&s.setRequestHeader("Content-Type",t)}if(e.responseType){const t=e.responseType.toLowerCase();s.responseType="json"!==t?t:"text"}const r=e.serializeBody();let n=null;const a=()=>{if(null!==n)return n;const t=1223===s.status?204:s.status,r=s.statusText||"OK",a=new p(s.getAllResponseHeaders()),o=function(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(s)||e.url;return n=new C({headers:a,status:t,statusText:r,url:o}),n},o=()=>{let{headers:r,status:n,statusText:o,url:i}=a(),l=null;204!==n&&(l=void 0===s.response?s.responseText:s.response),0===n&&(n=l?200:0);let c=n>=200&&n<300;if("json"===e.responseType&&"string"==typeof l){const e=l;l=l.replace(P,"");try{l=""!==l?JSON.parse(l):null}catch(u){l=e,c&&(c=!1,l={error:u,text:l})}}c?(t.next(new T({body:l,headers:r,status:n,statusText:o,url:i||void 0})),t.complete()):t.error(new R({error:l,headers:r,status:n,statusText:o,url:i||void 0}))},i=e=>{const{url:r}=a(),n=new R({error:e,status:s.status||0,statusText:s.statusText||"Unknown Error",url:r||void 0});t.error(n)};let l=!1;const c=r=>{l||(t.next(a()),l=!0);let n={type:v.DownloadProgress,loaded:r.loaded};r.lengthComputable&&(n.total=r.total),"text"===e.responseType&&s.responseText&&(n.partialText=s.responseText),t.next(n)},u=e=>{let s={type:v.UploadProgress,loaded:e.loaded};e.lengthComputable&&(s.total=e.total),t.next(s)};return s.addEventListener("load",o),s.addEventListener("error",i),e.reportProgress&&(s.addEventListener("progress",c),null!==r&&s.upload&&s.upload.addEventListener("progress",u)),s.send(r),t.next({type:v.Sent}),()=>{s.removeEventListener("error",i),s.removeEventListener("load",o),e.reportProgress&&(s.removeEventListener("progress",c),null!==r&&s.upload&&s.upload.removeEventListener("progress",u)),s.readyState!==s.DONE&&s.abort()}})}}return e.\u0275fac=function(t){return new(t||e)(n.ac(I))},e.\u0275prov=n.Ib({token:e,factory:e.\u0275fac}),e})();const z=new n.q("XSRF_COOKIE_NAME"),F=new n.q("XSRF_HEADER_NAME");class A{}let M=(()=>{class e{constructor(e,t,s){this.doc=e,this.platform=t,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Object(r.B)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}return e.\u0275fac=function(t){return new(t||e)(n.ac(r.c),n.ac(n.C),n.ac(z))},e.\u0275prov=n.Ib({token:e,factory:e.\u0275fac}),e})(),L=(()=>{class e{constructor(e,t){this.tokenService=e,this.headerName=t}intercept(e,t){const s=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||s.startsWith("http://")||s.startsWith("https://"))return t.handle(e);const r=this.tokenService.getToken();return null===r||e.headers.has(this.headerName)||(e=e.clone({headers:e.headers.set(this.headerName,r)})),t.handle(e)}}return e.\u0275fac=function(t){return new(t||e)(n.ac(A),n.ac(F))},e.\u0275prov=n.Ib({token:e,factory:e.\u0275fac}),e})(),K=(()=>{class e{constructor(e,t){this.backend=e,this.injector=t,this.chain=null}handle(e){if(null===this.chain){const e=this.injector.get(O,[]);this.chain=e.reduceRight((e,t)=>new N(e,t),this.backend)}return this.chain.handle(e)}}return e.\u0275fac=function(t){return new(t||e)(n.ac(d),n.ac(n.r))},e.\u0275prov=n.Ib({token:e,factory:e.\u0275fac}),e})(),U=(()=>{class e{static disable(){return{ngModule:e,providers:[{provide:L,useClass:E}]}}static withOptions(t={}){return{ngModule:e,providers:[t.cookieName?{provide:z,useValue:t.cookieName}:[],t.headerName?{provide:F,useValue:t.headerName}:[]]}}}return e.\u0275mod=n.Kb({type:e}),e.\u0275inj=n.Jb({factory:function(t){return new(t||e)},providers:[L,{provide:O,useExisting:L,multi:!0},{provide:A,useClass:M},{provide:z,useValue:"XSRF-TOKEN"},{provide:F,useValue:"X-XSRF-TOKEN"}]}),e})(),J=(()=>{class e{}return e.\u0275mod=n.Kb({type:e}),e.\u0275inj=n.Jb({factory:function(t){return new(t||e)},providers:[x,{provide:u,useClass:K},j,{provide:d,useExisting:j},H,{provide:I,useExisting:H}],imports:[[U.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),e})();var D=s("tyNb");let q=(()=>{class e{constructor(e){this.http=e}getTasks(){return this.http.get("assets/Task.json").toPromise().then(e=>e.data).then(e=>e)}}return e.\u0275fac=function(t){return new(t||e)(n.ac(x))},e.\u0275prov=n.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var B=s("rEr+"),_=s("7zfz"),X=s("3Pt+");let V=(()=>{let e=class{constructor(e,t){this.el=e,this.ngModel=t}ngDoCheck(){this.updateFilledState()}onInput(e){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}};return e.\u0275fac=function(t){return new(t||e)(n.Mb(n.l),n.Mb(X.e,8))},e.\u0275dir=n.Hb({type:e,selectors:[["","pInputText",""]],hostVars:10,hostBindings:function(e,t){1&e&&n.dc("input",(function(e){return t.onInput(e)})),2&e&&n.Eb("ui-inputtext",!0)("ui-corner-all",!0)("ui-state-default",!0)("ui-widget",!0)("ui-state-filled",t.filled)}}),e})(),G=(()=>{let e=class{};return e.\u0275mod=n.Kb({type:e}),e.\u0275inj=n.Jb({factory:function(t){return new(t||e)},imports:[[r.b]]}),e})();const W=["dt"];function $(e,t){if(1&e){const e=n.Tb();n.Sb(0,"div",7),n.Sb(1,"input",8),n.dc("input",(function(t){return n.zc(e),n.gc(),n.yc(1).filterGlobal(t.target.value,"contains")})),n.Rb(),n.Sb(2,"button",9),n.Hc(3,"Create Task"),n.Rb(),n.Rb()}}function Q(e,t){1&e&&(n.Sb(0,"colgroup"),n.Nb(1,"col",10),n.Nb(2,"col",11),n.Nb(3,"col",10),n.Nb(4,"col",10),n.Nb(5,"col",10),n.Nb(6,"col",10),n.Nb(7,"col",10),n.Nb(8,"col",10),n.Nb(9,"col",10),n.Nb(10,"col",10),n.Rb())}function Y(e,t){1&e&&(n.Sb(0,"tr"),n.Sb(1,"th",12),n.Hc(2,"Status "),n.Nb(3,"p-sortIcon",13),n.Rb(),n.Sb(4,"th",14),n.Hc(5,"P "),n.Nb(6,"p-sortIcon",15),n.Rb(),n.Sb(7,"th",16),n.Hc(8,"Process "),n.Nb(9,"p-sortIcon",17),n.Rb(),n.Sb(10,"th",18),n.Hc(11,"Key "),n.Nb(12,"p-sortIcon",19),n.Rb(),n.Sb(13,"th",20),n.Hc(14,"Created "),n.Nb(15,"p-sortIcon",21),n.Rb(),n.Sb(16,"th",22),n.Hc(17,"Summary "),n.Nb(18,"p-sortIcon",23),n.Rb(),n.Sb(19,"th",24),n.Hc(20,"Assignee "),n.Nb(21,"p-sortIcon",25),n.Rb(),n.Sb(22,"th",26),n.Hc(23,"Creator "),n.Nb(24,"p-sortIcon",27),n.Rb(),n.Sb(25,"th",28),n.Hc(26,"Start Date "),n.Nb(27,"p-sortIcon",29),n.Rb(),n.Sb(28,"th",30),n.Hc(29,"Deadline "),n.Nb(30,"p-sortIcon",31),n.Rb(),n.Rb())}function Z(e,t){if(1&e&&(n.Sb(0,"tr",32),n.Sb(1,"td"),n.Sb(2,"span"),n.Hc(3),n.hc(4,"uppercase"),n.Rb(),n.Rb(),n.Sb(5,"td"),n.Hc(6),n.Rb(),n.Sb(7,"td"),n.Sb(8,"span",33),n.Hc(9),n.Rb(),n.Rb(),n.Sb(10,"td"),n.Hc(11),n.Rb(),n.Sb(12,"td"),n.Sb(13,"span",33),n.Hc(14),n.Rb(),n.Rb(),n.Sb(15,"td"),n.Sb(16,"span",33),n.Hc(17),n.Rb(),n.Rb(),n.Sb(18,"td"),n.Sb(19,"span",33),n.Hc(20),n.Rb(),n.Rb(),n.Sb(21,"td"),n.Hc(22),n.Rb(),n.Sb(23,"td"),n.Hc(24),n.Rb(),n.Sb(25,"td"),n.Hc(26),n.Rb(),n.Rb()),2&e){const e=t.$implicit;n.zb(2),n.Bb("task-badge status-"+e.status),n.zb(1),n.Ic(n.ic(4,12,e.status)),n.zb(3),n.Ic(e.p),n.zb(3),n.Ic(e.process.name),n.zb(2),n.Jc(" ",e.key," "),n.zb(3),n.Ic(e.createddate),n.zb(3),n.Ic(e.summary),n.zb(3),n.Ic(e.assignee),n.zb(2),n.Ic(e.creator.name),n.zb(2),n.Ic(e.startdate),n.zb(2),n.Ic(e.deadline)}}function ee(e,t){1&e&&(n.Sb(0,"tr"),n.Sb(1,"td",34),n.Hc(2,"No task found."),n.Rb(),n.Rb())}const te=function(){return[10,25,50]},se=function(){return["assignee","process.name","creator.name","status"]},re=[{path:"",component:(()=>{class e{constructor(e){this.taskServiceService=e,this.loading=!0,this.first=0}ngOnInit(){this.taskServiceService.getTasks().then(e=>{this.tasks=e,this.loading=!1}),this.representatives=[{name:"Amy Elsner"},{name:"Anna Fali"},{name:"Asiya Javayant"},{name:"Bernardo Dominic"},{name:"Elwin Sharvill"},{name:"Ioni Bowcher"},{name:"Ivan Magalhaes"},{name:"Onyama Limba"},{name:"Stephen Shaw"},{name:"XuXue Feng"}],this.statuses=[{label:"Unqualified",value:"unqualified"},{label:"Qualified",value:"qualified"},{label:"New",value:"new"},{label:"Negotiation",value:"negotiation"},{label:"Renewal",value:"renewal"},{label:"Proposal",value:"proposal"}]}onActivityChange(e){const t=e.target.value;if(t&&t.trim().length){const e=parseInt(t);isNaN(e)||this.table.filter(e,"activity","gte")}}onDateSelect(e){this.table.filter(this.formatDate(e),"date","equals")}formatDate(e){let t=e.getMonth()+1,s=e.getDate();return t<10&&(t="0"+t),s<10&&(s="0"+s),e.getFullYear()+"-"+t+"-"+s}onRepresentativeChange(e){this.table.filter(e.value,"representative","in")}}return e.\u0275fac=function(t){return new(t||e)(n.Mb(q))},e.\u0275cmp=n.Gb({type:e,selectors:[["task"]],viewQuery:function(e,t){var s;1&e&&n.Lc(W,!0),2&e&&n.xc(s=n.ec())&&(t.table=s.first)},decls:7,vars:14,consts:[["dataKey","id","styleClass","ui-table-task","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","selection","rowHover","rows","showCurrentPageReport","rowsPerPageOptions","loading","first","paginator","filterDelay","globalFilterFields","scrollable","selectionChange","firstChange"],["dt",""],["pTemplate","caption"],["pTemplate","colgroup"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[1,"ui-table-globalfilter-container","search"],["pInputText","","type","text","placeholder","Search Task",3,"input"],["type","button",1,"btn","btn-primary","create-task-btn"],[2,"width","150px"],[2,"width","80px"],["pSortableColumn","status"],["field","status"],["pSortableColumn","p"],["field","p"],["pSortableColumn","process.name"],["field","process.name"],["pSortableColumn","key"],["field","key"],["pSortableColumn","date"],["field","date"],["pSortableColumn","summary"],["field","summary"],["pSortableColumn","assignee"],["field","assignee"],["pSortableColumn","creator.name"],["field","creator.name"],["pSortableColumn","startdate"],["field","startdate"],["pSortableColumn","deadline"],["field","deadline"],[1,"ui-selectable-row"],[2,"vertical-align","middle","margin-left",".5em"],["colspan","8",2,"text-align","left"]],template:function(e,t){1&e&&(n.Sb(0,"p-table",0,1),n.dc("selectionChange",(function(e){return t.selectedTasks=e}))("firstChange",(function(e){return t.first=e})),n.Fc(2,$,4,0,"ng-template",2),n.Fc(3,Q,11,0,"ng-template",3),n.Fc(4,Y,31,0,"ng-template",4),n.Fc(5,Z,27,14,"ng-template",5),n.Fc(6,ee,3,0,"ng-template",6),n.Rb()),2&e&&n.mc("value",t.tasks)("selection",t.selectedTasks)("rowHover",!0)("rows",10)("showCurrentPageReport",!1)("rowsPerPageOptions",n.pc(12,te))("loading",t.loading)("first",t.first)("paginator",!0)("filterDelay",0)("globalFilterFields",n.pc(13,se))("scrollable",!0)},directives:[B.c,_.d,V,B.b,B.a],pipes:[r.r],styles:[".search[_ngcontent-%COMP%]{text-align:left}.ui-inputtext[_ngcontent-%COMP%]{font-weight:400;width:50%!important}.create-task-btn[_ngcontent-%COMP%], .search-btn[_ngcontent-%COMP%]{padding:7px 15px;margin-left:10px}.create-task-btn[_ngcontent-%COMP%]{float:right;font-weight:600;color:#fff;background-color:#005684;border-color:#005684}.status-open[_ngcontent-%COMP%]{background-color:#dfe1e5;border-color:#dfe1e5;color:#42526e}.status-in[_ngcontent-%COMP%], .status-open[_ngcontent-%COMP%]{padding:2px 10px;border-radius:4px}.status-in[_ngcontent-%COMP%]{background-color:#deebff;border-color:#deebff;color:#0747a6}.status-archived[_ngcontent-%COMP%], .status-closed[_ngcontent-%COMP%]{background-color:#e3fcef;border-color:#e3fcef;color:#064;padding:2px 10px;border-radius:4px}.status-specified[_ngcontent-%COMP%]{background-color:#dfe1e5;border-color:#dfe1e5;color:#42526e;padding:2px 10px;border-radius:4px}"]}),e})()}];let ne=(()=>{class e{}return e.\u0275mod=n.Kb({type:e}),e.\u0275inj=n.Jb({factory:function(t){return new(t||e)},imports:[[D.e.forChild(re)],D.e]}),e})();s("YyRF"),s("R0Ic");let ae=(()=>{let e=class{};return e.\u0275mod=n.Kb({type:e}),e.\u0275inj=n.Jb({factory:function(t){return new(t||e)},imports:[[r.b],_.e]}),e})(),oe=(()=>{let e=class{};return e.\u0275mod=n.Kb({type:e}),e.\u0275inj=n.Jb({factory:function(t){return new(t||e)},imports:[[r.b]]}),e})(),ie=(()=>{let e=class{};return e.\u0275mod=n.Kb({type:e}),e.\u0275inj=n.Jb({factory:function(t){return new(t||e)},imports:[[r.b,oe,_.e],oe,_.e]}),e})(),le=(()=>{let e=class{};return e.\u0275mod=n.Kb({type:e}),e.\u0275inj=n.Jb({factory:function(t){return new(t||e)},imports:[[r.b]]}),e})();s("t2ka");var ce=s("vxfF"),ue=s("xlun");let de=(()=>{let e=class{};return e.\u0275mod=n.Kb({type:e}),e.\u0275inj=n.Jb({factory:function(t){return new(t||e)},imports:[[r.b,_.e,ce.d,ue.b],_.e,ce.d]}),e})(),pe=(()=>{let e=class{};return e.\u0275mod=n.Kb({type:e}),e.\u0275inj=n.Jb({factory:function(t){return new(t||e)},imports:[[r.b,D.e],D.e]}),e})(),he=(()=>{let e=class{};return e.\u0275mod=n.Kb({type:e}),e.\u0275inj=n.Jb({factory:function(t){return new(t||e)},imports:[[r.b],_.e]}),e})();var be=s("arFO");let fe=(()=>{let e=class{};return e.\u0275mod=n.Kb({type:e}),e.\u0275inj=n.Jb({factory:function(t){return new(t||e)},imports:[[r.b]]}),e})();var me=s("6t4m");let ye=(()=>{class e{}return e.\u0275mod=n.Kb({type:e}),e.\u0275inj=n.Jb({factory:function(t){return new(t||e)},providers:[q],imports:[[r.b,ne,B.d,B.d,ie,le,he,de,pe,be.b,oe,ae,G,fe,J,me.b]]}),e})()}}]);