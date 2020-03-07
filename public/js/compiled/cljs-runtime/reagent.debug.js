goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__44632__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__44632 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44633__i = 0, G__44633__a = new Array(arguments.length -  0);
while (G__44633__i < G__44633__a.length) {G__44633__a[G__44633__i] = arguments[G__44633__i + 0]; ++G__44633__i;}
  args = new cljs.core.IndexedSeq(G__44633__a,0,null);
} 
return G__44632__delegate.call(this,args);};
G__44632.cljs$lang$maxFixedArity = 0;
G__44632.cljs$lang$applyTo = (function (arglist__44634){
var args = cljs.core.seq(arglist__44634);
return G__44632__delegate(args);
});
G__44632.cljs$core$IFn$_invoke$arity$variadic = G__44632__delegate;
return G__44632;
})()
);

(o.error = (function() { 
var G__44635__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__44635 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44639__i = 0, G__44639__a = new Array(arguments.length -  0);
while (G__44639__i < G__44639__a.length) {G__44639__a[G__44639__i] = arguments[G__44639__i + 0]; ++G__44639__i;}
  args = new cljs.core.IndexedSeq(G__44639__a,0,null);
} 
return G__44635__delegate.call(this,args);};
G__44635.cljs$lang$maxFixedArity = 0;
G__44635.cljs$lang$applyTo = (function (arglist__44641){
var args = cljs.core.seq(arglist__44641);
return G__44635__delegate(args);
});
G__44635.cljs$core$IFn$_invoke$arity$variadic = G__44635__delegate;
return G__44635;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
