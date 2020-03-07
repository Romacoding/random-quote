goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__43746){
var map__43747 = p__43746;
var map__43747__$1 = (((((!((map__43747 == null))))?(((((map__43747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43747):map__43747);
var m = map__43747__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43747__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43747__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43750_43924 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43751_43925 = null;
var count__43752_43926 = (0);
var i__43753_43927 = (0);
while(true){
if((i__43753_43927 < count__43752_43926)){
var f_43928 = chunk__43751_43925.cljs$core$IIndexed$_nth$arity$2(null,i__43753_43927);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_43928], 0));


var G__43929 = seq__43750_43924;
var G__43930 = chunk__43751_43925;
var G__43931 = count__43752_43926;
var G__43932 = (i__43753_43927 + (1));
seq__43750_43924 = G__43929;
chunk__43751_43925 = G__43930;
count__43752_43926 = G__43931;
i__43753_43927 = G__43932;
continue;
} else {
var temp__5735__auto___43934 = cljs.core.seq(seq__43750_43924);
if(temp__5735__auto___43934){
var seq__43750_43935__$1 = temp__5735__auto___43934;
if(cljs.core.chunked_seq_QMARK_(seq__43750_43935__$1)){
var c__4609__auto___43936 = cljs.core.chunk_first(seq__43750_43935__$1);
var G__43937 = cljs.core.chunk_rest(seq__43750_43935__$1);
var G__43938 = c__4609__auto___43936;
var G__43939 = cljs.core.count(c__4609__auto___43936);
var G__43940 = (0);
seq__43750_43924 = G__43937;
chunk__43751_43925 = G__43938;
count__43752_43926 = G__43939;
i__43753_43927 = G__43940;
continue;
} else {
var f_43941 = cljs.core.first(seq__43750_43935__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_43941], 0));


var G__43942 = cljs.core.next(seq__43750_43935__$1);
var G__43943 = null;
var G__43944 = (0);
var G__43945 = (0);
seq__43750_43924 = G__43942;
chunk__43751_43925 = G__43943;
count__43752_43926 = G__43944;
i__43753_43927 = G__43945;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_43946 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_43946], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_43946)))?cljs.core.second(arglists_43946):arglists_43946)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43766_43947 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43767_43948 = null;
var count__43768_43949 = (0);
var i__43769_43950 = (0);
while(true){
if((i__43769_43950 < count__43768_43949)){
var vec__43782_43951 = chunk__43767_43948.cljs$core$IIndexed$_nth$arity$2(null,i__43769_43950);
var name_43952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43782_43951,(0),null);
var map__43785_43953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43782_43951,(1),null);
var map__43785_43954__$1 = (((((!((map__43785_43953 == null))))?(((((map__43785_43953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43785_43953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43785_43953):map__43785_43953);
var doc_43955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43785_43954__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43785_43954__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_43952], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_43956], 0));

if(cljs.core.truth_(doc_43955)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_43955], 0));
} else {
}


var G__43983 = seq__43766_43947;
var G__43984 = chunk__43767_43948;
var G__43985 = count__43768_43949;
var G__43986 = (i__43769_43950 + (1));
seq__43766_43947 = G__43983;
chunk__43767_43948 = G__43984;
count__43768_43949 = G__43985;
i__43769_43950 = G__43986;
continue;
} else {
var temp__5735__auto___43987 = cljs.core.seq(seq__43766_43947);
if(temp__5735__auto___43987){
var seq__43766_43988__$1 = temp__5735__auto___43987;
if(cljs.core.chunked_seq_QMARK_(seq__43766_43988__$1)){
var c__4609__auto___43989 = cljs.core.chunk_first(seq__43766_43988__$1);
var G__43990 = cljs.core.chunk_rest(seq__43766_43988__$1);
var G__43991 = c__4609__auto___43989;
var G__43992 = cljs.core.count(c__4609__auto___43989);
var G__43993 = (0);
seq__43766_43947 = G__43990;
chunk__43767_43948 = G__43991;
count__43768_43949 = G__43992;
i__43769_43950 = G__43993;
continue;
} else {
var vec__43787_43994 = cljs.core.first(seq__43766_43988__$1);
var name_43995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43787_43994,(0),null);
var map__43790_43996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43787_43994,(1),null);
var map__43790_43997__$1 = (((((!((map__43790_43996 == null))))?(((((map__43790_43996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43790_43996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43790_43996):map__43790_43996);
var doc_43998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43790_43997__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43999 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43790_43997__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_43995], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_43999], 0));

if(cljs.core.truth_(doc_43998)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_43998], 0));
} else {
}


var G__44000 = cljs.core.next(seq__43766_43988__$1);
var G__44001 = null;
var G__44002 = (0);
var G__44003 = (0);
seq__43766_43947 = G__44000;
chunk__43767_43948 = G__44001;
count__43768_43949 = G__44002;
i__43769_43950 = G__44003;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__43792 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__43793 = null;
var count__43794 = (0);
var i__43795 = (0);
while(true){
if((i__43795 < count__43794)){
var role = chunk__43793.cljs$core$IIndexed$_nth$arity$2(null,i__43795);
var temp__5735__auto___44011__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___44011__$1)){
var spec_44012 = temp__5735__auto___44011__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_44012)], 0));
} else {
}


var G__44013 = seq__43792;
var G__44014 = chunk__43793;
var G__44015 = count__43794;
var G__44016 = (i__43795 + (1));
seq__43792 = G__44013;
chunk__43793 = G__44014;
count__43794 = G__44015;
i__43795 = G__44016;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__43792);
if(temp__5735__auto____$1){
var seq__43792__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__43792__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__43792__$1);
var G__44017 = cljs.core.chunk_rest(seq__43792__$1);
var G__44018 = c__4609__auto__;
var G__44019 = cljs.core.count(c__4609__auto__);
var G__44020 = (0);
seq__43792 = G__44017;
chunk__43793 = G__44018;
count__43794 = G__44019;
i__43795 = G__44020;
continue;
} else {
var role = cljs.core.first(seq__43792__$1);
var temp__5735__auto___44021__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___44021__$2)){
var spec_44022 = temp__5735__auto___44021__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_44022)], 0));
} else {
}


var G__44023 = cljs.core.next(seq__43792__$1);
var G__44024 = null;
var G__44025 = (0);
var G__44026 = (0);
seq__43792 = G__44023;
chunk__43793 = G__44024;
count__43794 = G__44025;
i__43795 = G__44026;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__44039 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__44040 = cljs.core.ex_cause(t);
via = G__44039;
t = G__44040;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__43810 = datafied_throwable;
var map__43810__$1 = (((((!((map__43810 == null))))?(((((map__43810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43810):map__43810);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43810__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43810__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43810__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__43811 = cljs.core.last(via);
var map__43811__$1 = (((((!((map__43811 == null))))?(((((map__43811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43811):map__43811);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43811__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43811__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43811__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__43812 = data;
var map__43812__$1 = (((((!((map__43812 == null))))?(((((map__43812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43812):map__43812);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43812__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43812__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43812__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__43813 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__43813__$1 = (((((!((map__43813 == null))))?(((((map__43813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43813):map__43813);
var top_data = map__43813__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43813__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__43823 = phase;
var G__43823__$1 = (((G__43823 instanceof cljs.core.Keyword))?G__43823.fqn:null);
switch (G__43823__$1) {
case "read-source":
var map__43826 = data;
var map__43826__$1 = (((((!((map__43826 == null))))?(((((map__43826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43826):map__43826);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43826__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43826__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__43828 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__43828__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43828,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__43828);
var G__43828__$2 = (cljs.core.truth_((function (){var fexpr__43829 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43829.cljs$core$IFn$_invoke$arity$1 ? fexpr__43829.cljs$core$IFn$_invoke$arity$1(source) : fexpr__43829.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__43828__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__43828__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43828__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__43828__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__43830 = top_data;
var G__43830__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43830,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__43830);
var G__43830__$2 = (cljs.core.truth_((function (){var fexpr__43831 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43831.cljs$core$IFn$_invoke$arity$1 ? fexpr__43831.cljs$core$IFn$_invoke$arity$1(source) : fexpr__43831.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__43830__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__43830__$1);
var G__43830__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43830__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__43830__$2);
var G__43830__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43830__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__43830__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43830__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__43830__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__43832 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43832,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43832,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43832,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43832,(3),null);
var G__43835 = top_data;
var G__43835__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43835,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__43835);
var G__43835__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43835__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__43835__$1);
var G__43835__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43835__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__43835__$2);
var G__43835__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43835__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__43835__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43835__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__43835__$4;
}

break;
case "execution":
var vec__43836 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43836,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43836,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43836,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43836,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__43809_SHARP_){
var or__4185__auto__ = (p1__43809_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__43842 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43842.cljs$core$IFn$_invoke$arity$1 ? fexpr__43842.cljs$core$IFn$_invoke$arity$1(p1__43809_SHARP_) : fexpr__43842.call(null,p1__43809_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__43848 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__43848__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43848,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__43848);
var G__43848__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43848__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__43848__$1);
var G__43848__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43848__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__43848__$2);
var G__43848__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43848__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__43848__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43848__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__43848__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43823__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__43856){
var map__43858 = p__43856;
var map__43858__$1 = (((((!((map__43858 == null))))?(((((map__43858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43858):map__43858);
var triage_data = map__43858__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43858__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43858__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43858__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43858__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43858__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43858__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43858__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43858__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__43864 = phase;
var G__43864__$1 = (((G__43864 instanceof cljs.core.Keyword))?G__43864.fqn:null);
switch (G__43864__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__43865 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__43866 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43867 = loc;
var G__43868 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43869_44138 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43870_44139 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43871_44140 = true;
var _STAR_print_fn_STAR__temp_val__43872_44141 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43871_44140);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43872_44141);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43850_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43850_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43870_44139);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43869_44138);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__43865,G__43866,G__43867,G__43868) : format.call(null,G__43865,G__43866,G__43867,G__43868));

break;
case "macroexpansion":
var G__43880 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__43881 = cause_type;
var G__43882 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43883 = loc;
var G__43884 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43880,G__43881,G__43882,G__43883,G__43884) : format.call(null,G__43880,G__43881,G__43882,G__43883,G__43884));

break;
case "compile-syntax-check":
var G__43887 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__43888 = cause_type;
var G__43889 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43890 = loc;
var G__43891 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43887,G__43888,G__43889,G__43890,G__43891) : format.call(null,G__43887,G__43888,G__43889,G__43890,G__43891));

break;
case "compilation":
var G__43892 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__43893 = cause_type;
var G__43894 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43895 = loc;
var G__43896 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43892,G__43893,G__43894,G__43895,G__43896) : format.call(null,G__43892,G__43893,G__43894,G__43895,G__43896));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__43898 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__43899 = symbol;
var G__43900 = loc;
var G__43901 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43902_44152 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43903_44153 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43904_44154 = true;
var _STAR_print_fn_STAR__temp_val__43905_44155 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43904_44154);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43905_44155);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43855_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43855_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43903_44153);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43902_44152);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__43898,G__43899,G__43900,G__43901) : format.call(null,G__43898,G__43899,G__43900,G__43901));
} else {
var G__43914 = "Execution error%s at %s(%s).\n%s\n";
var G__43915 = cause_type;
var G__43916 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43917 = loc;
var G__43918 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43914,G__43915,G__43916,G__43917,G__43918) : format.call(null,G__43914,G__43915,G__43916,G__43917,G__43918));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43864__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
