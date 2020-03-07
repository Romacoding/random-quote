goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__40424 = coll;
var G__40425 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__40424,G__40425) : shadow.dom.lazy_native_coll_seq.call(null,G__40424,G__40425));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__40438 = arguments.length;
switch (G__40438) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__40441 = arguments.length;
switch (G__40441) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__40446 = arguments.length;
switch (G__40446) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__40448 = arguments.length;
switch (G__40448) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__40450 = arguments.length;
switch (G__40450) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__40451 = document;
var G__40452 = shadow.dom.dom_node(el);
return goog.dom.contains(G__40451,G__40452);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__40453 = shadow.dom.dom_node(parent);
var G__40454 = shadow.dom.dom_node(el);
return goog.dom.contains(G__40453,G__40454);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__40455 = shadow.dom.dom_node(el);
var G__40456 = cls;
return goog.dom.classlist.add(G__40455,G__40456);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__40457 = shadow.dom.dom_node(el);
var G__40458 = cls;
return goog.dom.classlist.remove(G__40457,G__40458);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__40460 = arguments.length;
switch (G__40460) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__40462 = shadow.dom.dom_node(el);
var G__40463 = cls;
return goog.dom.classlist.toggle(G__40462,G__40463);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e40467){if((e40467 instanceof Object)){
var e = e40467;
return console.log("didnt support attachEvent",el,e);
} else {
throw e40467;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__40468 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__40469 = null;
var count__40470 = (0);
var i__40471 = (0);
while(true){
if((i__40471 < count__40470)){
var el = chunk__40469.cljs$core$IIndexed$_nth$arity$2(null,i__40471);
var handler_40975__$1 = ((function (seq__40468,chunk__40469,count__40470,i__40471,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__40468,chunk__40469,count__40470,i__40471,el))
;
var G__40478_40976 = el;
var G__40479_40977 = cljs.core.name(ev);
var G__40480_40978 = handler_40975__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__40478_40976,G__40479_40977,G__40480_40978) : shadow.dom.dom_listen.call(null,G__40478_40976,G__40479_40977,G__40480_40978));


var G__40980 = seq__40468;
var G__40981 = chunk__40469;
var G__40982 = count__40470;
var G__40983 = (i__40471 + (1));
seq__40468 = G__40980;
chunk__40469 = G__40981;
count__40470 = G__40982;
i__40471 = G__40983;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40468);
if(temp__5735__auto__){
var seq__40468__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40468__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40468__$1);
var G__40985 = cljs.core.chunk_rest(seq__40468__$1);
var G__40986 = c__4609__auto__;
var G__40987 = cljs.core.count(c__4609__auto__);
var G__40988 = (0);
seq__40468 = G__40985;
chunk__40469 = G__40986;
count__40470 = G__40987;
i__40471 = G__40988;
continue;
} else {
var el = cljs.core.first(seq__40468__$1);
var handler_40990__$1 = ((function (seq__40468,chunk__40469,count__40470,i__40471,el,seq__40468__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__40468,chunk__40469,count__40470,i__40471,el,seq__40468__$1,temp__5735__auto__))
;
var G__40481_40993 = el;
var G__40482_40994 = cljs.core.name(ev);
var G__40483_40995 = handler_40990__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__40481_40993,G__40482_40994,G__40483_40995) : shadow.dom.dom_listen.call(null,G__40481_40993,G__40482_40994,G__40483_40995));


var G__40997 = cljs.core.next(seq__40468__$1);
var G__40998 = null;
var G__40999 = (0);
var G__41000 = (0);
seq__40468 = G__40997;
chunk__40469 = G__40998;
count__40470 = G__40999;
i__40471 = G__41000;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__40485 = arguments.length;
switch (G__40485) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__40486 = shadow.dom.dom_node(el);
var G__40487 = cljs.core.name(ev);
var G__40488 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__40486,G__40487,G__40488) : shadow.dom.dom_listen.call(null,G__40486,G__40487,G__40488));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__40489 = shadow.dom.dom_node(el);
var G__40490 = cljs.core.name(ev);
var G__40491 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__40489,G__40490,G__40491) : shadow.dom.dom_listen_remove.call(null,G__40489,G__40490,G__40491));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__40493 = cljs.core.seq(events);
var chunk__40494 = null;
var count__40495 = (0);
var i__40496 = (0);
while(true){
if((i__40496 < count__40495)){
var vec__40503 = chunk__40494.cljs$core$IIndexed$_nth$arity$2(null,i__40496);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40503,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40503,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__41014 = seq__40493;
var G__41015 = chunk__40494;
var G__41016 = count__40495;
var G__41017 = (i__40496 + (1));
seq__40493 = G__41014;
chunk__40494 = G__41015;
count__40495 = G__41016;
i__40496 = G__41017;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40493);
if(temp__5735__auto__){
var seq__40493__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40493__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40493__$1);
var G__41020 = cljs.core.chunk_rest(seq__40493__$1);
var G__41021 = c__4609__auto__;
var G__41022 = cljs.core.count(c__4609__auto__);
var G__41023 = (0);
seq__40493 = G__41020;
chunk__40494 = G__41021;
count__40495 = G__41022;
i__40496 = G__41023;
continue;
} else {
var vec__40507 = cljs.core.first(seq__40493__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40507,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40507,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__41026 = cljs.core.next(seq__40493__$1);
var G__41027 = null;
var G__41028 = (0);
var G__41029 = (0);
seq__40493 = G__41026;
chunk__40494 = G__41027;
count__40495 = G__41028;
i__40496 = G__41029;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__40511 = cljs.core.seq(styles);
var chunk__40512 = null;
var count__40513 = (0);
var i__40514 = (0);
while(true){
if((i__40514 < count__40513)){
var vec__40532 = chunk__40512.cljs$core$IIndexed$_nth$arity$2(null,i__40514);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40532,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40532,(1),null);
var G__40535_41031 = dom;
var G__40536_41032 = cljs.core.name(k);
var G__40537_41033 = (((v == null))?"":v);
goog.style.setStyle(G__40535_41031,G__40536_41032,G__40537_41033);


var G__41036 = seq__40511;
var G__41037 = chunk__40512;
var G__41038 = count__40513;
var G__41039 = (i__40514 + (1));
seq__40511 = G__41036;
chunk__40512 = G__41037;
count__40513 = G__41038;
i__40514 = G__41039;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40511);
if(temp__5735__auto__){
var seq__40511__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40511__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40511__$1);
var G__41043 = cljs.core.chunk_rest(seq__40511__$1);
var G__41044 = c__4609__auto__;
var G__41045 = cljs.core.count(c__4609__auto__);
var G__41046 = (0);
seq__40511 = G__41043;
chunk__40512 = G__41044;
count__40513 = G__41045;
i__40514 = G__41046;
continue;
} else {
var vec__40540 = cljs.core.first(seq__40511__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40540,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40540,(1),null);
var G__40544_41048 = dom;
var G__40545_41049 = cljs.core.name(k);
var G__40546_41050 = (((v == null))?"":v);
goog.style.setStyle(G__40544_41048,G__40545_41049,G__40546_41050);


var G__41053 = cljs.core.next(seq__40511__$1);
var G__41054 = null;
var G__41055 = (0);
var G__41056 = (0);
seq__40511 = G__41053;
chunk__40512 = G__41054;
count__40513 = G__41055;
i__40514 = G__41056;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__40550_41058 = key;
var G__40550_41059__$1 = (((G__40550_41058 instanceof cljs.core.Keyword))?G__40550_41058.fqn:null);
switch (G__40550_41059__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_41078 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_41078,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_41078,"aria-");
}
})())){
el.setAttribute(ks_41078,value);
} else {
(el[ks_41078] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__40555 = shadow.dom.dom_node(el);
var G__40556 = cls;
return goog.dom.classlist.contains(G__40555,G__40556);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__40560){
var map__40561 = p__40560;
var map__40561__$1 = (((((!((map__40561 == null))))?(((((map__40561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40561):map__40561);
var props = map__40561__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40561__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__40563 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40563,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40563,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40563,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__40566 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__40566,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__40566;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__40574 = arguments.length;
switch (G__40574) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__40578){
var vec__40580 = p__40578;
var seq__40581 = cljs.core.seq(vec__40580);
var first__40582 = cljs.core.first(seq__40581);
var seq__40581__$1 = cljs.core.next(seq__40581);
var nn = first__40582;
var first__40582__$1 = cljs.core.first(seq__40581__$1);
var seq__40581__$2 = cljs.core.next(seq__40581__$1);
var np = first__40582__$1;
var nc = seq__40581__$2;
var node = vec__40580;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40584 = nn;
var G__40585 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__40584,G__40585) : create_fn.call(null,G__40584,G__40585));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40587 = nn;
var G__40588 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__40587,G__40588) : create_fn.call(null,G__40587,G__40588));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__40589 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40589,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40589,(1),null);
var seq__40592_41108 = cljs.core.seq(node_children);
var chunk__40593_41109 = null;
var count__40594_41110 = (0);
var i__40595_41111 = (0);
while(true){
if((i__40595_41111 < count__40594_41110)){
var child_struct_41116 = chunk__40593_41109.cljs$core$IIndexed$_nth$arity$2(null,i__40595_41111);
var children_41117 = shadow.dom.dom_node(child_struct_41116);
if(cljs.core.seq_QMARK_(children_41117)){
var seq__40617_41119 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_41117));
var chunk__40619_41120 = null;
var count__40620_41121 = (0);
var i__40621_41122 = (0);
while(true){
if((i__40621_41122 < count__40620_41121)){
var child_41123 = chunk__40619_41120.cljs$core$IIndexed$_nth$arity$2(null,i__40621_41122);
if(cljs.core.truth_(child_41123)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41123);


var G__41124 = seq__40617_41119;
var G__41125 = chunk__40619_41120;
var G__41126 = count__40620_41121;
var G__41127 = (i__40621_41122 + (1));
seq__40617_41119 = G__41124;
chunk__40619_41120 = G__41125;
count__40620_41121 = G__41126;
i__40621_41122 = G__41127;
continue;
} else {
var G__41128 = seq__40617_41119;
var G__41129 = chunk__40619_41120;
var G__41130 = count__40620_41121;
var G__41131 = (i__40621_41122 + (1));
seq__40617_41119 = G__41128;
chunk__40619_41120 = G__41129;
count__40620_41121 = G__41130;
i__40621_41122 = G__41131;
continue;
}
} else {
var temp__5735__auto___41132 = cljs.core.seq(seq__40617_41119);
if(temp__5735__auto___41132){
var seq__40617_41133__$1 = temp__5735__auto___41132;
if(cljs.core.chunked_seq_QMARK_(seq__40617_41133__$1)){
var c__4609__auto___41134 = cljs.core.chunk_first(seq__40617_41133__$1);
var G__41135 = cljs.core.chunk_rest(seq__40617_41133__$1);
var G__41136 = c__4609__auto___41134;
var G__41137 = cljs.core.count(c__4609__auto___41134);
var G__41138 = (0);
seq__40617_41119 = G__41135;
chunk__40619_41120 = G__41136;
count__40620_41121 = G__41137;
i__40621_41122 = G__41138;
continue;
} else {
var child_41139 = cljs.core.first(seq__40617_41133__$1);
if(cljs.core.truth_(child_41139)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41139);


var G__41140 = cljs.core.next(seq__40617_41133__$1);
var G__41141 = null;
var G__41142 = (0);
var G__41143 = (0);
seq__40617_41119 = G__41140;
chunk__40619_41120 = G__41141;
count__40620_41121 = G__41142;
i__40621_41122 = G__41143;
continue;
} else {
var G__41144 = cljs.core.next(seq__40617_41133__$1);
var G__41145 = null;
var G__41146 = (0);
var G__41147 = (0);
seq__40617_41119 = G__41144;
chunk__40619_41120 = G__41145;
count__40620_41121 = G__41146;
i__40621_41122 = G__41147;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_41117);
}


var G__41151 = seq__40592_41108;
var G__41152 = chunk__40593_41109;
var G__41153 = count__40594_41110;
var G__41154 = (i__40595_41111 + (1));
seq__40592_41108 = G__41151;
chunk__40593_41109 = G__41152;
count__40594_41110 = G__41153;
i__40595_41111 = G__41154;
continue;
} else {
var temp__5735__auto___41155 = cljs.core.seq(seq__40592_41108);
if(temp__5735__auto___41155){
var seq__40592_41156__$1 = temp__5735__auto___41155;
if(cljs.core.chunked_seq_QMARK_(seq__40592_41156__$1)){
var c__4609__auto___41157 = cljs.core.chunk_first(seq__40592_41156__$1);
var G__41158 = cljs.core.chunk_rest(seq__40592_41156__$1);
var G__41159 = c__4609__auto___41157;
var G__41160 = cljs.core.count(c__4609__auto___41157);
var G__41161 = (0);
seq__40592_41108 = G__41158;
chunk__40593_41109 = G__41159;
count__40594_41110 = G__41160;
i__40595_41111 = G__41161;
continue;
} else {
var child_struct_41162 = cljs.core.first(seq__40592_41156__$1);
var children_41163 = shadow.dom.dom_node(child_struct_41162);
if(cljs.core.seq_QMARK_(children_41163)){
var seq__40630_41164 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_41163));
var chunk__40632_41165 = null;
var count__40633_41166 = (0);
var i__40634_41167 = (0);
while(true){
if((i__40634_41167 < count__40633_41166)){
var child_41168 = chunk__40632_41165.cljs$core$IIndexed$_nth$arity$2(null,i__40634_41167);
if(cljs.core.truth_(child_41168)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41168);


var G__41169 = seq__40630_41164;
var G__41170 = chunk__40632_41165;
var G__41171 = count__40633_41166;
var G__41172 = (i__40634_41167 + (1));
seq__40630_41164 = G__41169;
chunk__40632_41165 = G__41170;
count__40633_41166 = G__41171;
i__40634_41167 = G__41172;
continue;
} else {
var G__41173 = seq__40630_41164;
var G__41174 = chunk__40632_41165;
var G__41175 = count__40633_41166;
var G__41176 = (i__40634_41167 + (1));
seq__40630_41164 = G__41173;
chunk__40632_41165 = G__41174;
count__40633_41166 = G__41175;
i__40634_41167 = G__41176;
continue;
}
} else {
var temp__5735__auto___41177__$1 = cljs.core.seq(seq__40630_41164);
if(temp__5735__auto___41177__$1){
var seq__40630_41178__$1 = temp__5735__auto___41177__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40630_41178__$1)){
var c__4609__auto___41179 = cljs.core.chunk_first(seq__40630_41178__$1);
var G__41180 = cljs.core.chunk_rest(seq__40630_41178__$1);
var G__41181 = c__4609__auto___41179;
var G__41182 = cljs.core.count(c__4609__auto___41179);
var G__41183 = (0);
seq__40630_41164 = G__41180;
chunk__40632_41165 = G__41181;
count__40633_41166 = G__41182;
i__40634_41167 = G__41183;
continue;
} else {
var child_41184 = cljs.core.first(seq__40630_41178__$1);
if(cljs.core.truth_(child_41184)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41184);


var G__41185 = cljs.core.next(seq__40630_41178__$1);
var G__41186 = null;
var G__41187 = (0);
var G__41188 = (0);
seq__40630_41164 = G__41185;
chunk__40632_41165 = G__41186;
count__40633_41166 = G__41187;
i__40634_41167 = G__41188;
continue;
} else {
var G__41189 = cljs.core.next(seq__40630_41178__$1);
var G__41190 = null;
var G__41191 = (0);
var G__41192 = (0);
seq__40630_41164 = G__41189;
chunk__40632_41165 = G__41190;
count__40633_41166 = G__41191;
i__40634_41167 = G__41192;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_41163);
}


var G__41194 = cljs.core.next(seq__40592_41156__$1);
var G__41195 = null;
var G__41196 = (0);
var G__41197 = (0);
seq__40592_41108 = G__41194;
chunk__40593_41109 = G__41195;
count__40594_41110 = G__41196;
i__40595_41111 = G__41197;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__40639 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__40639);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__40642 = cljs.core.seq(node);
var chunk__40643 = null;
var count__40644 = (0);
var i__40645 = (0);
while(true){
if((i__40645 < count__40644)){
var n = chunk__40643.cljs$core$IIndexed$_nth$arity$2(null,i__40645);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__41202 = seq__40642;
var G__41203 = chunk__40643;
var G__41204 = count__40644;
var G__41205 = (i__40645 + (1));
seq__40642 = G__41202;
chunk__40643 = G__41203;
count__40644 = G__41204;
i__40645 = G__41205;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40642);
if(temp__5735__auto__){
var seq__40642__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40642__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40642__$1);
var G__41207 = cljs.core.chunk_rest(seq__40642__$1);
var G__41208 = c__4609__auto__;
var G__41209 = cljs.core.count(c__4609__auto__);
var G__41210 = (0);
seq__40642 = G__41207;
chunk__40643 = G__41208;
count__40644 = G__41209;
i__40645 = G__41210;
continue;
} else {
var n = cljs.core.first(seq__40642__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__41211 = cljs.core.next(seq__40642__$1);
var G__41212 = null;
var G__41213 = (0);
var G__41214 = (0);
seq__40642 = G__41211;
chunk__40643 = G__41212;
count__40644 = G__41213;
i__40645 = G__41214;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__40652 = shadow.dom.dom_node(new$);
var G__40653 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__40652,G__40653);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__40657 = arguments.length;
switch (G__40657) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__40662 = arguments.length;
switch (G__40662) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__40668 = arguments.length;
switch (G__40668) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41235 = arguments.length;
var i__4790__auto___41236 = (0);
while(true){
if((i__4790__auto___41236 < len__4789__auto___41235)){
args__4795__auto__.push((arguments[i__4790__auto___41236]));

var G__41240 = (i__4790__auto___41236 + (1));
i__4790__auto___41236 = G__41240;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__40680_41242 = cljs.core.seq(nodes);
var chunk__40681_41243 = null;
var count__40682_41244 = (0);
var i__40683_41245 = (0);
while(true){
if((i__40683_41245 < count__40682_41244)){
var node_41246 = chunk__40681_41243.cljs$core$IIndexed$_nth$arity$2(null,i__40683_41245);
fragment.appendChild(shadow.dom._to_dom(node_41246));


var G__41249 = seq__40680_41242;
var G__41250 = chunk__40681_41243;
var G__41251 = count__40682_41244;
var G__41252 = (i__40683_41245 + (1));
seq__40680_41242 = G__41249;
chunk__40681_41243 = G__41250;
count__40682_41244 = G__41251;
i__40683_41245 = G__41252;
continue;
} else {
var temp__5735__auto___41253 = cljs.core.seq(seq__40680_41242);
if(temp__5735__auto___41253){
var seq__40680_41255__$1 = temp__5735__auto___41253;
if(cljs.core.chunked_seq_QMARK_(seq__40680_41255__$1)){
var c__4609__auto___41256 = cljs.core.chunk_first(seq__40680_41255__$1);
var G__41257 = cljs.core.chunk_rest(seq__40680_41255__$1);
var G__41258 = c__4609__auto___41256;
var G__41259 = cljs.core.count(c__4609__auto___41256);
var G__41260 = (0);
seq__40680_41242 = G__41257;
chunk__40681_41243 = G__41258;
count__40682_41244 = G__41259;
i__40683_41245 = G__41260;
continue;
} else {
var node_41262 = cljs.core.first(seq__40680_41255__$1);
fragment.appendChild(shadow.dom._to_dom(node_41262));


var G__41267 = cljs.core.next(seq__40680_41255__$1);
var G__41268 = null;
var G__41269 = (0);
var G__41270 = (0);
seq__40680_41242 = G__41267;
chunk__40681_41243 = G__41268;
count__40682_41244 = G__41269;
i__40683_41245 = G__41270;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq40678){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40678));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__40685_41273 = cljs.core.seq(scripts);
var chunk__40686_41274 = null;
var count__40687_41275 = (0);
var i__40688_41276 = (0);
while(true){
if((i__40688_41276 < count__40687_41275)){
var vec__40698_41277 = chunk__40686_41274.cljs$core$IIndexed$_nth$arity$2(null,i__40688_41276);
var script_tag_41278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40698_41277,(0),null);
var script_body_41279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40698_41277,(1),null);
eval(script_body_41279);


var G__41282 = seq__40685_41273;
var G__41283 = chunk__40686_41274;
var G__41284 = count__40687_41275;
var G__41285 = (i__40688_41276 + (1));
seq__40685_41273 = G__41282;
chunk__40686_41274 = G__41283;
count__40687_41275 = G__41284;
i__40688_41276 = G__41285;
continue;
} else {
var temp__5735__auto___41286 = cljs.core.seq(seq__40685_41273);
if(temp__5735__auto___41286){
var seq__40685_41287__$1 = temp__5735__auto___41286;
if(cljs.core.chunked_seq_QMARK_(seq__40685_41287__$1)){
var c__4609__auto___41288 = cljs.core.chunk_first(seq__40685_41287__$1);
var G__41289 = cljs.core.chunk_rest(seq__40685_41287__$1);
var G__41290 = c__4609__auto___41288;
var G__41291 = cljs.core.count(c__4609__auto___41288);
var G__41292 = (0);
seq__40685_41273 = G__41289;
chunk__40686_41274 = G__41290;
count__40687_41275 = G__41291;
i__40688_41276 = G__41292;
continue;
} else {
var vec__40702_41293 = cljs.core.first(seq__40685_41287__$1);
var script_tag_41294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40702_41293,(0),null);
var script_body_41295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40702_41293,(1),null);
eval(script_body_41295);


var G__41298 = cljs.core.next(seq__40685_41287__$1);
var G__41299 = null;
var G__41300 = (0);
var G__41301 = (0);
seq__40685_41273 = G__41298;
chunk__40686_41274 = G__41299;
count__40687_41275 = G__41300;
i__40688_41276 = G__41301;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__40706){
var vec__40707 = p__40706;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40707,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40707,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__40711 = shadow.dom.dom_node(el);
var G__40712 = cls;
return goog.dom.getAncestorByClass(G__40711,G__40712);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__40716 = arguments.length;
switch (G__40716) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__40718 = shadow.dom.dom_node(el);
var G__40719 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__40718,G__40719);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__40720 = shadow.dom.dom_node(el);
var G__40721 = cljs.core.name(tag);
var G__40722 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__40720,G__40721,G__40722);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__40724 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__40724);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__40726 = shadow.dom.dom_node(dom);
var G__40727 = value;
return goog.dom.forms.setValue(G__40726,G__40727);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__40733 = cljs.core.seq(style_keys);
var chunk__40734 = null;
var count__40735 = (0);
var i__40736 = (0);
while(true){
if((i__40736 < count__40735)){
var it = chunk__40734.cljs$core$IIndexed$_nth$arity$2(null,i__40736);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__41317 = seq__40733;
var G__41318 = chunk__40734;
var G__41319 = count__40735;
var G__41320 = (i__40736 + (1));
seq__40733 = G__41317;
chunk__40734 = G__41318;
count__40735 = G__41319;
i__40736 = G__41320;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40733);
if(temp__5735__auto__){
var seq__40733__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40733__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40733__$1);
var G__41321 = cljs.core.chunk_rest(seq__40733__$1);
var G__41322 = c__4609__auto__;
var G__41323 = cljs.core.count(c__4609__auto__);
var G__41324 = (0);
seq__40733 = G__41321;
chunk__40734 = G__41322;
count__40735 = G__41323;
i__40736 = G__41324;
continue;
} else {
var it = cljs.core.first(seq__40733__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__41325 = cljs.core.next(seq__40733__$1);
var G__41326 = null;
var G__41327 = (0);
var G__41328 = (0);
seq__40733 = G__41325;
chunk__40734 = G__41326;
count__40735 = G__41327;
i__40736 = G__41328;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k40741,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__40747 = k40741;
var G__40747__$1 = (((G__40747 instanceof cljs.core.Keyword))?G__40747.fqn:null);
switch (G__40747__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40741,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__40750){
var vec__40751 = p__40750;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40751,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40751,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40740){
var self__ = this;
var G__40740__$1 = this;
return (new cljs.core.RecordIter((0),G__40740__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__40758 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__40758(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40742,other40743){
var self__ = this;
var this40742__$1 = this;
return (((!((other40743 == null)))) && ((this40742__$1.constructor === other40743.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40742__$1.x,other40743.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40742__$1.y,other40743.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40742__$1.__extmap,other40743.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__40740){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__40761 = cljs.core.keyword_identical_QMARK_;
var expr__40762 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__40764 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__40765 = expr__40762;
return (pred__40761.cljs$core$IFn$_invoke$arity$2 ? pred__40761.cljs$core$IFn$_invoke$arity$2(G__40764,G__40765) : pred__40761.call(null,G__40764,G__40765));
})())){
return (new shadow.dom.Coordinate(G__40740,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__40766 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__40767 = expr__40762;
return (pred__40761.cljs$core$IFn$_invoke$arity$2 ? pred__40761.cljs$core$IFn$_invoke$arity$2(G__40766,G__40767) : pred__40761.call(null,G__40766,G__40767));
})())){
return (new shadow.dom.Coordinate(self__.x,G__40740,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__40740),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__40740){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__40740,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__40744){
var extmap__4478__auto__ = (function (){var G__40771 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40744,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__40744)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40771);
} else {
return G__40771;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__40744),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__40744),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__40773 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__40773);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__40776 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__40776);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__40779 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__40779);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k40782,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__40789 = k40782;
var G__40789__$1 = (((G__40789 instanceof cljs.core.Keyword))?G__40789.fqn:null);
switch (G__40789__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40782,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__40792){
var vec__40794 = p__40792;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40794,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40794,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40781){
var self__ = this;
var G__40781__$1 = this;
return (new cljs.core.RecordIter((0),G__40781__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__40801 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__40801(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40783,other40784){
var self__ = this;
var this40783__$1 = this;
return (((!((other40784 == null)))) && ((this40783__$1.constructor === other40784.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40783__$1.w,other40784.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40783__$1.h,other40784.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40783__$1.__extmap,other40784.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__40781){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__40802 = cljs.core.keyword_identical_QMARK_;
var expr__40803 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__40805 = new cljs.core.Keyword(null,"w","w",354169001);
var G__40806 = expr__40803;
return (pred__40802.cljs$core$IFn$_invoke$arity$2 ? pred__40802.cljs$core$IFn$_invoke$arity$2(G__40805,G__40806) : pred__40802.call(null,G__40805,G__40806));
})())){
return (new shadow.dom.Size(G__40781,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__40807 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__40808 = expr__40803;
return (pred__40802.cljs$core$IFn$_invoke$arity$2 ? pred__40802.cljs$core$IFn$_invoke$arity$2(G__40807,G__40808) : pred__40802.call(null,G__40807,G__40808));
})())){
return (new shadow.dom.Size(self__.w,G__40781,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__40781),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__40781){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__40781,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__40785){
var extmap__4478__auto__ = (function (){var G__40809 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40785,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__40785)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40809);
} else {
return G__40809;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__40785),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__40785),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__40810 = shadow.dom.dom_node(el);
return goog.style.getSize(G__40810);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__41405 = (i + (1));
var G__41406 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__41405;
ret = G__41406;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40817){
var vec__40818 = p__40817;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40818,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40818,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__40824 = arguments.length;
switch (G__40824) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__40828_41413 = new_node;
var G__40829_41414 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__40828_41413,G__40829_41414);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__40831_41415 = new_node;
var G__40832_41416 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__40831_41415,G__40832_41416);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__41421 = ps;
var G__41422 = (i + (1));
el__$1 = G__41421;
i = G__41422;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__40837 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__40837);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__40840 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__40840);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__40841 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__40841);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__40843 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40843,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40843,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40843,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__40846_41428 = cljs.core.seq(props);
var chunk__40847_41429 = null;
var count__40848_41430 = (0);
var i__40849_41431 = (0);
while(true){
if((i__40849_41431 < count__40848_41430)){
var vec__40860_41432 = chunk__40847_41429.cljs$core$IIndexed$_nth$arity$2(null,i__40849_41431);
var k_41433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40860_41432,(0),null);
var v_41434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40860_41432,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_41433);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_41433),v_41434);


var G__41440 = seq__40846_41428;
var G__41441 = chunk__40847_41429;
var G__41442 = count__40848_41430;
var G__41443 = (i__40849_41431 + (1));
seq__40846_41428 = G__41440;
chunk__40847_41429 = G__41441;
count__40848_41430 = G__41442;
i__40849_41431 = G__41443;
continue;
} else {
var temp__5735__auto___41444 = cljs.core.seq(seq__40846_41428);
if(temp__5735__auto___41444){
var seq__40846_41445__$1 = temp__5735__auto___41444;
if(cljs.core.chunked_seq_QMARK_(seq__40846_41445__$1)){
var c__4609__auto___41446 = cljs.core.chunk_first(seq__40846_41445__$1);
var G__41447 = cljs.core.chunk_rest(seq__40846_41445__$1);
var G__41448 = c__4609__auto___41446;
var G__41449 = cljs.core.count(c__4609__auto___41446);
var G__41450 = (0);
seq__40846_41428 = G__41447;
chunk__40847_41429 = G__41448;
count__40848_41430 = G__41449;
i__40849_41431 = G__41450;
continue;
} else {
var vec__40864_41453 = cljs.core.first(seq__40846_41445__$1);
var k_41454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40864_41453,(0),null);
var v_41455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40864_41453,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_41454);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_41454),v_41455);


var G__41457 = cljs.core.next(seq__40846_41445__$1);
var G__41458 = null;
var G__41459 = (0);
var G__41460 = (0);
seq__40846_41428 = G__41457;
chunk__40847_41429 = G__41458;
count__40848_41430 = G__41459;
i__40849_41431 = G__41460;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__40869 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40869,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40869,(1),null);
var seq__40873_41465 = cljs.core.seq(node_children);
var chunk__40875_41466 = null;
var count__40876_41467 = (0);
var i__40877_41468 = (0);
while(true){
if((i__40877_41468 < count__40876_41467)){
var child_struct_41473 = chunk__40875_41466.cljs$core$IIndexed$_nth$arity$2(null,i__40877_41468);
if((!((child_struct_41473 == null)))){
if(typeof child_struct_41473 === 'string'){
var text_41477 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41477),child_struct_41473].join(''));
} else {
var children_41478 = shadow.dom.svg_node(child_struct_41473);
if(cljs.core.seq_QMARK_(children_41478)){
var seq__40905_41479 = cljs.core.seq(children_41478);
var chunk__40907_41480 = null;
var count__40908_41481 = (0);
var i__40909_41482 = (0);
while(true){
if((i__40909_41482 < count__40908_41481)){
var child_41487 = chunk__40907_41480.cljs$core$IIndexed$_nth$arity$2(null,i__40909_41482);
if(cljs.core.truth_(child_41487)){
node.appendChild(child_41487);


var G__41488 = seq__40905_41479;
var G__41489 = chunk__40907_41480;
var G__41490 = count__40908_41481;
var G__41491 = (i__40909_41482 + (1));
seq__40905_41479 = G__41488;
chunk__40907_41480 = G__41489;
count__40908_41481 = G__41490;
i__40909_41482 = G__41491;
continue;
} else {
var G__41493 = seq__40905_41479;
var G__41494 = chunk__40907_41480;
var G__41495 = count__40908_41481;
var G__41496 = (i__40909_41482 + (1));
seq__40905_41479 = G__41493;
chunk__40907_41480 = G__41494;
count__40908_41481 = G__41495;
i__40909_41482 = G__41496;
continue;
}
} else {
var temp__5735__auto___41500 = cljs.core.seq(seq__40905_41479);
if(temp__5735__auto___41500){
var seq__40905_41501__$1 = temp__5735__auto___41500;
if(cljs.core.chunked_seq_QMARK_(seq__40905_41501__$1)){
var c__4609__auto___41502 = cljs.core.chunk_first(seq__40905_41501__$1);
var G__41503 = cljs.core.chunk_rest(seq__40905_41501__$1);
var G__41504 = c__4609__auto___41502;
var G__41505 = cljs.core.count(c__4609__auto___41502);
var G__41506 = (0);
seq__40905_41479 = G__41503;
chunk__40907_41480 = G__41504;
count__40908_41481 = G__41505;
i__40909_41482 = G__41506;
continue;
} else {
var child_41507 = cljs.core.first(seq__40905_41501__$1);
if(cljs.core.truth_(child_41507)){
node.appendChild(child_41507);


var G__41511 = cljs.core.next(seq__40905_41501__$1);
var G__41512 = null;
var G__41513 = (0);
var G__41514 = (0);
seq__40905_41479 = G__41511;
chunk__40907_41480 = G__41512;
count__40908_41481 = G__41513;
i__40909_41482 = G__41514;
continue;
} else {
var G__41515 = cljs.core.next(seq__40905_41501__$1);
var G__41516 = null;
var G__41517 = (0);
var G__41518 = (0);
seq__40905_41479 = G__41515;
chunk__40907_41480 = G__41516;
count__40908_41481 = G__41517;
i__40909_41482 = G__41518;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41478);
}
}


var G__41519 = seq__40873_41465;
var G__41520 = chunk__40875_41466;
var G__41521 = count__40876_41467;
var G__41522 = (i__40877_41468 + (1));
seq__40873_41465 = G__41519;
chunk__40875_41466 = G__41520;
count__40876_41467 = G__41521;
i__40877_41468 = G__41522;
continue;
} else {
var G__41523 = seq__40873_41465;
var G__41524 = chunk__40875_41466;
var G__41525 = count__40876_41467;
var G__41526 = (i__40877_41468 + (1));
seq__40873_41465 = G__41523;
chunk__40875_41466 = G__41524;
count__40876_41467 = G__41525;
i__40877_41468 = G__41526;
continue;
}
} else {
var temp__5735__auto___41527 = cljs.core.seq(seq__40873_41465);
if(temp__5735__auto___41527){
var seq__40873_41528__$1 = temp__5735__auto___41527;
if(cljs.core.chunked_seq_QMARK_(seq__40873_41528__$1)){
var c__4609__auto___41529 = cljs.core.chunk_first(seq__40873_41528__$1);
var G__41530 = cljs.core.chunk_rest(seq__40873_41528__$1);
var G__41531 = c__4609__auto___41529;
var G__41532 = cljs.core.count(c__4609__auto___41529);
var G__41533 = (0);
seq__40873_41465 = G__41530;
chunk__40875_41466 = G__41531;
count__40876_41467 = G__41532;
i__40877_41468 = G__41533;
continue;
} else {
var child_struct_41534 = cljs.core.first(seq__40873_41528__$1);
if((!((child_struct_41534 == null)))){
if(typeof child_struct_41534 === 'string'){
var text_41535 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41535),child_struct_41534].join(''));
} else {
var children_41537 = shadow.dom.svg_node(child_struct_41534);
if(cljs.core.seq_QMARK_(children_41537)){
var seq__40920_41539 = cljs.core.seq(children_41537);
var chunk__40922_41540 = null;
var count__40923_41541 = (0);
var i__40924_41542 = (0);
while(true){
if((i__40924_41542 < count__40923_41541)){
var child_41544 = chunk__40922_41540.cljs$core$IIndexed$_nth$arity$2(null,i__40924_41542);
if(cljs.core.truth_(child_41544)){
node.appendChild(child_41544);


var G__41545 = seq__40920_41539;
var G__41546 = chunk__40922_41540;
var G__41547 = count__40923_41541;
var G__41548 = (i__40924_41542 + (1));
seq__40920_41539 = G__41545;
chunk__40922_41540 = G__41546;
count__40923_41541 = G__41547;
i__40924_41542 = G__41548;
continue;
} else {
var G__41549 = seq__40920_41539;
var G__41550 = chunk__40922_41540;
var G__41551 = count__40923_41541;
var G__41552 = (i__40924_41542 + (1));
seq__40920_41539 = G__41549;
chunk__40922_41540 = G__41550;
count__40923_41541 = G__41551;
i__40924_41542 = G__41552;
continue;
}
} else {
var temp__5735__auto___41553__$1 = cljs.core.seq(seq__40920_41539);
if(temp__5735__auto___41553__$1){
var seq__40920_41554__$1 = temp__5735__auto___41553__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40920_41554__$1)){
var c__4609__auto___41555 = cljs.core.chunk_first(seq__40920_41554__$1);
var G__41556 = cljs.core.chunk_rest(seq__40920_41554__$1);
var G__41557 = c__4609__auto___41555;
var G__41558 = cljs.core.count(c__4609__auto___41555);
var G__41559 = (0);
seq__40920_41539 = G__41556;
chunk__40922_41540 = G__41557;
count__40923_41541 = G__41558;
i__40924_41542 = G__41559;
continue;
} else {
var child_41561 = cljs.core.first(seq__40920_41554__$1);
if(cljs.core.truth_(child_41561)){
node.appendChild(child_41561);


var G__41562 = cljs.core.next(seq__40920_41554__$1);
var G__41563 = null;
var G__41564 = (0);
var G__41565 = (0);
seq__40920_41539 = G__41562;
chunk__40922_41540 = G__41563;
count__40923_41541 = G__41564;
i__40924_41542 = G__41565;
continue;
} else {
var G__41566 = cljs.core.next(seq__40920_41554__$1);
var G__41567 = null;
var G__41568 = (0);
var G__41569 = (0);
seq__40920_41539 = G__41566;
chunk__40922_41540 = G__41567;
count__40923_41541 = G__41568;
i__40924_41542 = G__41569;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41537);
}
}


var G__41570 = cljs.core.next(seq__40873_41528__$1);
var G__41571 = null;
var G__41572 = (0);
var G__41573 = (0);
seq__40873_41465 = G__41570;
chunk__40875_41466 = G__41571;
count__40876_41467 = G__41572;
i__40877_41468 = G__41573;
continue;
} else {
var G__41574 = cljs.core.next(seq__40873_41528__$1);
var G__41575 = null;
var G__41576 = (0);
var G__41577 = (0);
seq__40873_41465 = G__41574;
chunk__40875_41466 = G__41575;
count__40876_41467 = G__41576;
i__40877_41468 = G__41577;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__40931_41578 = shadow.dom._to_svg;
var G__40932_41579 = "string";
var G__40933_41580 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__40931_41578,G__40932_41579,G__40933_41580);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__40935_41587 = shadow.dom._to_svg;
var G__40936_41588 = "null";
var G__40937_41589 = (function (_){
return null;
});
goog.object.set(G__40935_41587,G__40936_41588,G__40937_41589);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41590 = arguments.length;
var i__4790__auto___41591 = (0);
while(true){
if((i__4790__auto___41591 < len__4789__auto___41590)){
args__4795__auto__.push((arguments[i__4790__auto___41591]));

var G__41592 = (i__4790__auto___41591 + (1));
i__4790__auto___41591 = G__41592;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq40940){
var G__40941 = cljs.core.first(seq40940);
var seq40940__$1 = cljs.core.next(seq40940);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40941,seq40940__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__40947 = arguments.length;
switch (G__40947) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__40949_41597 = shadow.dom.dom_node(el);
var G__40950_41598 = cljs.core.name(event);
var G__40951_41599 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__40949_41597,G__40950_41598,G__40951_41599) : shadow.dom.dom_listen.call(null,G__40949_41597,G__40950_41598,G__40951_41599));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__38832__auto___41600 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38833__auto__ = (function (){var switch__38733__auto__ = (function (state_40956){
var state_val_40957 = (state_40956[(1)]);
if((state_val_40957 === (1))){
var state_40956__$1 = state_40956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40956__$1,(2),once_or_cleanup);
} else {
if((state_val_40957 === (2))){
var inst_40953 = (state_40956[(2)]);
var inst_40954 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_40956__$1 = (function (){var statearr_40958 = state_40956;
(statearr_40958[(7)] = inst_40953);

return statearr_40958;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40956__$1,inst_40954);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__38734__auto__ = null;
var shadow$dom$state_machine__38734__auto____0 = (function (){
var statearr_40959 = [null,null,null,null,null,null,null,null];
(statearr_40959[(0)] = shadow$dom$state_machine__38734__auto__);

(statearr_40959[(1)] = (1));

return statearr_40959;
});
var shadow$dom$state_machine__38734__auto____1 = (function (state_40956){
while(true){
var ret_value__38735__auto__ = (function (){try{while(true){
var result__38736__auto__ = switch__38733__auto__(state_40956);
if(cljs.core.keyword_identical_QMARK_(result__38736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38736__auto__;
}
break;
}
}catch (e40960){if((e40960 instanceof Object)){
var ex__38737__auto__ = e40960;
var statearr_40961_41611 = state_40956;
(statearr_40961_41611[(5)] = ex__38737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40960;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41612 = state_40956;
state_40956 = G__41612;
continue;
} else {
return ret_value__38735__auto__;
}
break;
}
});
shadow$dom$state_machine__38734__auto__ = function(state_40956){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__38734__auto____0.call(this);
case 1:
return shadow$dom$state_machine__38734__auto____1.call(this,state_40956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__38734__auto____0;
shadow$dom$state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__38734__auto____1;
return shadow$dom$state_machine__38734__auto__;
})()
})();
var state__38834__auto__ = (function (){var statearr_40962 = (f__38833__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38833__auto__.cljs$core$IFn$_invoke$arity$0() : f__38833__auto__.call(null));
(statearr_40962[(6)] = c__38832__auto___41600);

return statearr_40962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38834__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
