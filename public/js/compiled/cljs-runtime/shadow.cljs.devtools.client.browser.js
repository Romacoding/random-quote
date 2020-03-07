goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42602 = arguments.length;
var i__4790__auto___42603 = (0);
while(true){
if((i__4790__auto___42603 < len__4789__auto___42602)){
args__4795__auto__.push((arguments[i__4790__auto___42603]));

var G__42605 = (i__4790__auto___42603 + (1));
i__4790__auto___42603 = G__42605;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq42404){
var G__42405 = cljs.core.first(seq42404);
var seq42404__$1 = cljs.core.next(seq42404);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42405,seq42404__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__42408){
var map__42409 = p__42408;
var map__42409__$1 = (((((!((map__42409 == null))))?(((((map__42409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42409):map__42409);
var src = map__42409__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42409__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42409__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__42412 = cljs.core.seq(sources);
var chunk__42413 = null;
var count__42414 = (0);
var i__42415 = (0);
while(true){
if((i__42415 < count__42414)){
var map__42424 = chunk__42413.cljs$core$IIndexed$_nth$arity$2(null,i__42415);
var map__42424__$1 = (((((!((map__42424 == null))))?(((((map__42424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42424):map__42424);
var src = map__42424__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42424__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42424__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42424__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42424__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e42429){var e_42608 = e42429;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42608);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42608.message)].join('')));
}

var G__42609 = seq__42412;
var G__42610 = chunk__42413;
var G__42611 = count__42414;
var G__42612 = (i__42415 + (1));
seq__42412 = G__42609;
chunk__42413 = G__42610;
count__42414 = G__42611;
i__42415 = G__42612;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42412);
if(temp__5735__auto__){
var seq__42412__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42412__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42412__$1);
var G__42613 = cljs.core.chunk_rest(seq__42412__$1);
var G__42614 = c__4609__auto__;
var G__42615 = cljs.core.count(c__4609__auto__);
var G__42616 = (0);
seq__42412 = G__42613;
chunk__42413 = G__42614;
count__42414 = G__42615;
i__42415 = G__42616;
continue;
} else {
var map__42436 = cljs.core.first(seq__42412__$1);
var map__42436__$1 = (((((!((map__42436 == null))))?(((((map__42436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42436):map__42436);
var src = map__42436__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42436__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42436__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42436__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42436__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e42439){var e_42618 = e42439;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42618);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42618.message)].join('')));
}

var G__42619 = cljs.core.next(seq__42412__$1);
var G__42620 = null;
var G__42621 = (0);
var G__42622 = (0);
seq__42412 = G__42619;
chunk__42413 = G__42620;
count__42414 = G__42621;
i__42415 = G__42622;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__42441 = cljs.core.seq(js_requires);
var chunk__42442 = null;
var count__42443 = (0);
var i__42444 = (0);
while(true){
if((i__42444 < count__42443)){
var js_ns = chunk__42442.cljs$core$IIndexed$_nth$arity$2(null,i__42444);
var require_str_42624 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42624);


var G__42625 = seq__42441;
var G__42626 = chunk__42442;
var G__42627 = count__42443;
var G__42628 = (i__42444 + (1));
seq__42441 = G__42625;
chunk__42442 = G__42626;
count__42443 = G__42627;
i__42444 = G__42628;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42441);
if(temp__5735__auto__){
var seq__42441__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42441__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42441__$1);
var G__42629 = cljs.core.chunk_rest(seq__42441__$1);
var G__42630 = c__4609__auto__;
var G__42631 = cljs.core.count(c__4609__auto__);
var G__42632 = (0);
seq__42441 = G__42629;
chunk__42442 = G__42630;
count__42443 = G__42631;
i__42444 = G__42632;
continue;
} else {
var js_ns = cljs.core.first(seq__42441__$1);
var require_str_42633 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42633);


var G__42634 = cljs.core.next(seq__42441__$1);
var G__42635 = null;
var G__42636 = (0);
var G__42637 = (0);
seq__42441 = G__42634;
chunk__42442 = G__42635;
count__42443 = G__42636;
i__42444 = G__42637;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__42448 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__42448) : callback.call(null,G__42448));
} else {
var G__42449 = shadow.cljs.devtools.client.env.files_url();
var G__42450 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__42451 = "POST";
var G__42452 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__42453 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__42449,G__42450,G__42451,G__42452,G__42453);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__42460){
var map__42461 = p__42460;
var map__42461__$1 = (((((!((map__42461 == null))))?(((((map__42461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42461):map__42461);
var msg = map__42461__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42461__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42461__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__42464 = info;
var map__42464__$1 = (((((!((map__42464 == null))))?(((((map__42464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42464):map__42464);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42464__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42464__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42466(s__42467){
return (new cljs.core.LazySeq(null,(function (){
var s__42467__$1 = s__42467;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42467__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__42472 = cljs.core.first(xs__6292__auto__);
var map__42472__$1 = (((((!((map__42472 == null))))?(((((map__42472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42472):map__42472);
var src = map__42472__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42472__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42472__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__42467__$1,map__42472,map__42472__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__42464,map__42464__$1,sources,compiled,map__42461,map__42461__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42466_$_iter__42468(s__42469){
return (new cljs.core.LazySeq(null,((function (s__42467__$1,map__42472,map__42472__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__42464,map__42464__$1,sources,compiled,map__42461,map__42461__$1,msg,info,reload_info){
return (function (){
var s__42469__$1 = s__42469;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__42469__$1);
if(temp__5735__auto____$1){
var s__42469__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42469__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__42469__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__42471 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__42470 = (0);
while(true){
if((i__42470 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__42470);
cljs.core.chunk_append(b__42471,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__42641 = (i__42470 + (1));
i__42470 = G__42641;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42471),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42466_$_iter__42468(cljs.core.chunk_rest(s__42469__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42471),null);
}
} else {
var warning = cljs.core.first(s__42469__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42466_$_iter__42468(cljs.core.rest(s__42469__$2)));
}
} else {
return null;
}
break;
}
});})(s__42467__$1,map__42472,map__42472__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__42464,map__42464__$1,sources,compiled,map__42461,map__42461__$1,msg,info,reload_info))
,null,null));
});})(s__42467__$1,map__42472,map__42472__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__42464,map__42464__$1,sources,compiled,map__42461,map__42461__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42466(cljs.core.rest(s__42467__$1)));
} else {
var G__42642 = cljs.core.rest(s__42467__$1);
s__42467__$1 = G__42642;
continue;
}
} else {
var G__42643 = cljs.core.rest(s__42467__$1);
s__42467__$1 = G__42643;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__42475_42644 = cljs.core.seq(warnings);
var chunk__42476_42645 = null;
var count__42477_42646 = (0);
var i__42478_42647 = (0);
while(true){
if((i__42478_42647 < count__42477_42646)){
var map__42483_42648 = chunk__42476_42645.cljs$core$IIndexed$_nth$arity$2(null,i__42478_42647);
var map__42483_42649__$1 = (((((!((map__42483_42648 == null))))?(((((map__42483_42648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42483_42648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42483_42648):map__42483_42648);
var w_42650 = map__42483_42649__$1;
var msg_42651__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42483_42649__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42483_42649__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42483_42649__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42483_42649__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42654)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42652),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42653),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42651__$1)].join(''));


var G__42656 = seq__42475_42644;
var G__42657 = chunk__42476_42645;
var G__42658 = count__42477_42646;
var G__42659 = (i__42478_42647 + (1));
seq__42475_42644 = G__42656;
chunk__42476_42645 = G__42657;
count__42477_42646 = G__42658;
i__42478_42647 = G__42659;
continue;
} else {
var temp__5735__auto___42660 = cljs.core.seq(seq__42475_42644);
if(temp__5735__auto___42660){
var seq__42475_42661__$1 = temp__5735__auto___42660;
if(cljs.core.chunked_seq_QMARK_(seq__42475_42661__$1)){
var c__4609__auto___42662 = cljs.core.chunk_first(seq__42475_42661__$1);
var G__42663 = cljs.core.chunk_rest(seq__42475_42661__$1);
var G__42664 = c__4609__auto___42662;
var G__42665 = cljs.core.count(c__4609__auto___42662);
var G__42666 = (0);
seq__42475_42644 = G__42663;
chunk__42476_42645 = G__42664;
count__42477_42646 = G__42665;
i__42478_42647 = G__42666;
continue;
} else {
var map__42486_42667 = cljs.core.first(seq__42475_42661__$1);
var map__42486_42668__$1 = (((((!((map__42486_42667 == null))))?(((((map__42486_42667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42486_42667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42486_42667):map__42486_42667);
var w_42669 = map__42486_42668__$1;
var msg_42670__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42486_42668__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42671 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42486_42668__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42486_42668__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42486_42668__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42673)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42671),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42672),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42670__$1)].join(''));


var G__42675 = cljs.core.next(seq__42475_42661__$1);
var G__42676 = null;
var G__42677 = (0);
var G__42678 = (0);
seq__42475_42644 = G__42675;
chunk__42476_42645 = G__42676;
count__42477_42646 = G__42677;
i__42478_42647 = G__42678;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__42488){
var map__42489 = p__42488;
var map__42489__$1 = (((((!((map__42489 == null))))?(((((map__42489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42489):map__42489);
var src = map__42489__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42489__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42489__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__42491){
var map__42493 = p__42491;
var map__42493__$1 = (((((!((map__42493 == null))))?(((((map__42493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42493):map__42493);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42493__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__42495){
var map__42496 = p__42495;
var map__42496__$1 = (((((!((map__42496 == null))))?(((((map__42496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42496):map__42496);
var rc = map__42496__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42496__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__42458_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__42458_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__42499){
var map__42500 = p__42499;
var map__42500__$1 = (((((!((map__42500 == null))))?(((((map__42500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42500):map__42500);
var msg = map__42500__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42500__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__42502 = cljs.core.seq(updates);
var chunk__42504 = null;
var count__42505 = (0);
var i__42506 = (0);
while(true){
if((i__42506 < count__42505)){
var path = chunk__42504.cljs$core$IIndexed$_nth$arity$2(null,i__42506);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42538_42682 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42541_42683 = null;
var count__42542_42684 = (0);
var i__42543_42685 = (0);
while(true){
if((i__42543_42685 < count__42542_42684)){
var node_42686 = chunk__42541_42683.cljs$core$IIndexed$_nth$arity$2(null,i__42543_42685);
var path_match_42687 = shadow.cljs.devtools.client.browser.match_paths(node_42686.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42687)){
var new_link_42688 = (function (){var G__42549 = node_42686.cloneNode(true);
G__42549.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42687),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42549;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42687], 0));

goog.dom.insertSiblingAfter(new_link_42688,node_42686);

goog.dom.removeNode(node_42686);


var G__42689 = seq__42538_42682;
var G__42690 = chunk__42541_42683;
var G__42691 = count__42542_42684;
var G__42692 = (i__42543_42685 + (1));
seq__42538_42682 = G__42689;
chunk__42541_42683 = G__42690;
count__42542_42684 = G__42691;
i__42543_42685 = G__42692;
continue;
} else {
var G__42693 = seq__42538_42682;
var G__42694 = chunk__42541_42683;
var G__42695 = count__42542_42684;
var G__42696 = (i__42543_42685 + (1));
seq__42538_42682 = G__42693;
chunk__42541_42683 = G__42694;
count__42542_42684 = G__42695;
i__42543_42685 = G__42696;
continue;
}
} else {
var temp__5735__auto___42697 = cljs.core.seq(seq__42538_42682);
if(temp__5735__auto___42697){
var seq__42538_42698__$1 = temp__5735__auto___42697;
if(cljs.core.chunked_seq_QMARK_(seq__42538_42698__$1)){
var c__4609__auto___42699 = cljs.core.chunk_first(seq__42538_42698__$1);
var G__42700 = cljs.core.chunk_rest(seq__42538_42698__$1);
var G__42701 = c__4609__auto___42699;
var G__42702 = cljs.core.count(c__4609__auto___42699);
var G__42703 = (0);
seq__42538_42682 = G__42700;
chunk__42541_42683 = G__42701;
count__42542_42684 = G__42702;
i__42543_42685 = G__42703;
continue;
} else {
var node_42705 = cljs.core.first(seq__42538_42698__$1);
var path_match_42706 = shadow.cljs.devtools.client.browser.match_paths(node_42705.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42706)){
var new_link_42707 = (function (){var G__42550 = node_42705.cloneNode(true);
G__42550.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42706),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42550;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42706], 0));

goog.dom.insertSiblingAfter(new_link_42707,node_42705);

goog.dom.removeNode(node_42705);


var G__42708 = cljs.core.next(seq__42538_42698__$1);
var G__42709 = null;
var G__42710 = (0);
var G__42711 = (0);
seq__42538_42682 = G__42708;
chunk__42541_42683 = G__42709;
count__42542_42684 = G__42710;
i__42543_42685 = G__42711;
continue;
} else {
var G__42712 = cljs.core.next(seq__42538_42698__$1);
var G__42713 = null;
var G__42714 = (0);
var G__42715 = (0);
seq__42538_42682 = G__42712;
chunk__42541_42683 = G__42713;
count__42542_42684 = G__42714;
i__42543_42685 = G__42715;
continue;
}
}
} else {
}
}
break;
}


var G__42716 = seq__42502;
var G__42717 = chunk__42504;
var G__42718 = count__42505;
var G__42719 = (i__42506 + (1));
seq__42502 = G__42716;
chunk__42504 = G__42717;
count__42505 = G__42718;
i__42506 = G__42719;
continue;
} else {
var G__42720 = seq__42502;
var G__42721 = chunk__42504;
var G__42722 = count__42505;
var G__42723 = (i__42506 + (1));
seq__42502 = G__42720;
chunk__42504 = G__42721;
count__42505 = G__42722;
i__42506 = G__42723;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42502);
if(temp__5735__auto__){
var seq__42502__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42502__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42502__$1);
var G__42724 = cljs.core.chunk_rest(seq__42502__$1);
var G__42725 = c__4609__auto__;
var G__42726 = cljs.core.count(c__4609__auto__);
var G__42727 = (0);
seq__42502 = G__42724;
chunk__42504 = G__42725;
count__42505 = G__42726;
i__42506 = G__42727;
continue;
} else {
var path = cljs.core.first(seq__42502__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42552_42729 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42555_42730 = null;
var count__42556_42731 = (0);
var i__42557_42732 = (0);
while(true){
if((i__42557_42732 < count__42556_42731)){
var node_42733 = chunk__42555_42730.cljs$core$IIndexed$_nth$arity$2(null,i__42557_42732);
var path_match_42734 = shadow.cljs.devtools.client.browser.match_paths(node_42733.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42734)){
var new_link_42735 = (function (){var G__42562 = node_42733.cloneNode(true);
G__42562.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42734),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42562;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42734], 0));

goog.dom.insertSiblingAfter(new_link_42735,node_42733);

goog.dom.removeNode(node_42733);


var G__42736 = seq__42552_42729;
var G__42737 = chunk__42555_42730;
var G__42738 = count__42556_42731;
var G__42739 = (i__42557_42732 + (1));
seq__42552_42729 = G__42736;
chunk__42555_42730 = G__42737;
count__42556_42731 = G__42738;
i__42557_42732 = G__42739;
continue;
} else {
var G__42740 = seq__42552_42729;
var G__42741 = chunk__42555_42730;
var G__42742 = count__42556_42731;
var G__42743 = (i__42557_42732 + (1));
seq__42552_42729 = G__42740;
chunk__42555_42730 = G__42741;
count__42556_42731 = G__42742;
i__42557_42732 = G__42743;
continue;
}
} else {
var temp__5735__auto___42744__$1 = cljs.core.seq(seq__42552_42729);
if(temp__5735__auto___42744__$1){
var seq__42552_42745__$1 = temp__5735__auto___42744__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42552_42745__$1)){
var c__4609__auto___42746 = cljs.core.chunk_first(seq__42552_42745__$1);
var G__42747 = cljs.core.chunk_rest(seq__42552_42745__$1);
var G__42748 = c__4609__auto___42746;
var G__42749 = cljs.core.count(c__4609__auto___42746);
var G__42750 = (0);
seq__42552_42729 = G__42747;
chunk__42555_42730 = G__42748;
count__42556_42731 = G__42749;
i__42557_42732 = G__42750;
continue;
} else {
var node_42751 = cljs.core.first(seq__42552_42745__$1);
var path_match_42753 = shadow.cljs.devtools.client.browser.match_paths(node_42751.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42753)){
var new_link_42754 = (function (){var G__42565 = node_42751.cloneNode(true);
G__42565.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42753),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42565;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42753], 0));

goog.dom.insertSiblingAfter(new_link_42754,node_42751);

goog.dom.removeNode(node_42751);


var G__42755 = cljs.core.next(seq__42552_42745__$1);
var G__42756 = null;
var G__42757 = (0);
var G__42758 = (0);
seq__42552_42729 = G__42755;
chunk__42555_42730 = G__42756;
count__42556_42731 = G__42757;
i__42557_42732 = G__42758;
continue;
} else {
var G__42759 = cljs.core.next(seq__42552_42745__$1);
var G__42760 = null;
var G__42761 = (0);
var G__42762 = (0);
seq__42552_42729 = G__42759;
chunk__42555_42730 = G__42760;
count__42556_42731 = G__42761;
i__42557_42732 = G__42762;
continue;
}
}
} else {
}
}
break;
}


var G__42763 = cljs.core.next(seq__42502__$1);
var G__42764 = null;
var G__42765 = (0);
var G__42766 = (0);
seq__42502 = G__42763;
chunk__42504 = G__42764;
count__42505 = G__42765;
i__42506 = G__42766;
continue;
} else {
var G__42767 = cljs.core.next(seq__42502__$1);
var G__42768 = null;
var G__42769 = (0);
var G__42770 = (0);
seq__42502 = G__42767;
chunk__42504 = G__42768;
count__42505 = G__42769;
i__42506 = G__42770;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__42567){
var map__42568 = p__42567;
var map__42568__$1 = (((((!((map__42568 == null))))?(((((map__42568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42568):map__42568);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42568__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42568__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__42571,done){
var map__42572 = p__42571;
var map__42572__$1 = (((((!((map__42572 == null))))?(((((map__42572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42572):map__42572);
var msg = map__42572__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42572__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42572__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42572__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42572__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__42574){
var map__42575 = p__42574;
var map__42575__$1 = (((((!((map__42575 == null))))?(((((map__42575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42575):map__42575);
var src = map__42575__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42575__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e42577){var e = e42577;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__42578,done){
var map__42579 = p__42578;
var map__42579__$1 = (((((!((map__42579 == null))))?(((((map__42579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42579):map__42579);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42579__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42579__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__42582){
var map__42583 = p__42582;
var map__42583__$1 = (((((!((map__42583 == null))))?(((((map__42583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42583):map__42583);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42583__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42583__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__42586,done){
var map__42587 = p__42586;
var map__42587__$1 = (((((!((map__42587 == null))))?(((((map__42587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42587):map__42587);
var msg = map__42587__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42587__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__42589_42779 = type;
var G__42589_42780__$1 = (((G__42589_42779 instanceof cljs.core.Keyword))?G__42589_42779.fqn:null);
switch (G__42589_42780__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__42591 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__42592 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__42593 = "POST";
var G__42594 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__42595 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__42591,G__42592,G__42593,G__42594,G__42595);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__42597 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__42596 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__42596.cljs$core$IFn$_invoke$arity$1 ? fexpr__42596.cljs$core$IFn$_invoke$arity$1(G__42597) : fexpr__42596.call(null,G__42597));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e42599){var e = e42599;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___42788 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___42788)){
var s_42790 = temp__5735__auto___42788;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_42790.onclose = (function (e){
return null;
}));

s_42790.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
