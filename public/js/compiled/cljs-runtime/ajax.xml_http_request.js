goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__44477 = e.target.readyState;
var fexpr__44476 = new cljs.core.PersistentArrayMap(null, 6, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276),new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),true], null);
return (fexpr__44476.cljs$core$IFn$_invoke$arity$1 ? fexpr__44476.cljs$core$IFn$_invoke$arity$1(G__44477) : fexpr__44476.call(null,G__44477));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__44483,handler){
var map__44484 = p__44483;
var map__44484__$1 = (((((!((map__44484 == null))))?(((((map__44484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44484):map__44484);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44484__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44484__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44484__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44484__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44484__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44484__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44484__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__44482_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__44482_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___44511 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___44511)){
var response_type_44512 = temp__5735__auto___44511;
(this$__$1.responseType = cljs.core.name(response_type_44512));
} else {
}

var seq__44489_44513 = cljs.core.seq(headers);
var chunk__44490_44514 = null;
var count__44491_44515 = (0);
var i__44492_44516 = (0);
while(true){
if((i__44492_44516 < count__44491_44515)){
var vec__44499_44517 = chunk__44490_44514.cljs$core$IIndexed$_nth$arity$2(null,i__44492_44516);
var k_44518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44499_44517,(0),null);
var v_44519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44499_44517,(1),null);
this$__$1.setRequestHeader(k_44518,v_44519);


var G__44520 = seq__44489_44513;
var G__44521 = chunk__44490_44514;
var G__44522 = count__44491_44515;
var G__44523 = (i__44492_44516 + (1));
seq__44489_44513 = G__44520;
chunk__44490_44514 = G__44521;
count__44491_44515 = G__44522;
i__44492_44516 = G__44523;
continue;
} else {
var temp__5735__auto___44524 = cljs.core.seq(seq__44489_44513);
if(temp__5735__auto___44524){
var seq__44489_44525__$1 = temp__5735__auto___44524;
if(cljs.core.chunked_seq_QMARK_(seq__44489_44525__$1)){
var c__4609__auto___44526 = cljs.core.chunk_first(seq__44489_44525__$1);
var G__44527 = cljs.core.chunk_rest(seq__44489_44525__$1);
var G__44528 = c__4609__auto___44526;
var G__44529 = cljs.core.count(c__4609__auto___44526);
var G__44530 = (0);
seq__44489_44513 = G__44527;
chunk__44490_44514 = G__44528;
count__44491_44515 = G__44529;
i__44492_44516 = G__44530;
continue;
} else {
var vec__44502_44531 = cljs.core.first(seq__44489_44525__$1);
var k_44532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44502_44531,(0),null);
var v_44533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44502_44531,(1),null);
this$__$1.setRequestHeader(k_44532,v_44533);


var G__44534 = cljs.core.next(seq__44489_44525__$1);
var G__44535 = null;
var G__44536 = (0);
var G__44537 = (0);
seq__44489_44513 = G__44534;
chunk__44490_44514 = G__44535;
count__44491_44515 = G__44536;
i__44492_44516 = G__44537;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4185__auto__ = body;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
