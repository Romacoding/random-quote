goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__38892 = arguments.length;
switch (G__38892) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38893 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38893 = (function (f,blockable,meta38894){
this.f = f;
this.blockable = blockable;
this.meta38894 = meta38894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38895,meta38894__$1){
var self__ = this;
var _38895__$1 = this;
return (new cljs.core.async.t_cljs$core$async38893(self__.f,self__.blockable,meta38894__$1));
}));

(cljs.core.async.t_cljs$core$async38893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38895){
var self__ = this;
var _38895__$1 = this;
return self__.meta38894;
}));

(cljs.core.async.t_cljs$core$async38893.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38893.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38893.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async38893.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async38893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta38894","meta38894",779742255,null)], null);
}));

(cljs.core.async.t_cljs$core$async38893.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38893.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38893");

(cljs.core.async.t_cljs$core$async38893.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38893");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38893.
 */
cljs.core.async.__GT_t_cljs$core$async38893 = (function cljs$core$async$__GT_t_cljs$core$async38893(f__$1,blockable__$1,meta38894){
return (new cljs.core.async.t_cljs$core$async38893(f__$1,blockable__$1,meta38894));
});

}

return (new cljs.core.async.t_cljs$core$async38893(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__38898 = arguments.length;
switch (G__38898) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__38900 = arguments.length;
switch (G__38900) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__38902 = arguments.length;
switch (G__38902) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_40389 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40389) : fn1.call(null,val_40389));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40389) : fn1.call(null,val_40389));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__38904 = arguments.length;
switch (G__38904) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___40421 = n;
var x_40422 = (0);
while(true){
if((x_40422 < n__4666__auto___40421)){
(a[x_40422] = x_40422);

var G__40423 = (x_40422 + (1));
x_40422 = G__40423;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38907 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38907 = (function (flag,meta38908){
this.flag = flag;
this.meta38908 = meta38908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38909,meta38908__$1){
var self__ = this;
var _38909__$1 = this;
return (new cljs.core.async.t_cljs$core$async38907(self__.flag,meta38908__$1));
}));

(cljs.core.async.t_cljs$core$async38907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38909){
var self__ = this;
var _38909__$1 = this;
return self__.meta38908;
}));

(cljs.core.async.t_cljs$core$async38907.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38907.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async38907.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38907.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async38907.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta38908","meta38908",-1832280931,null)], null);
}));

(cljs.core.async.t_cljs$core$async38907.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38907.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38907");

(cljs.core.async.t_cljs$core$async38907.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38907");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38907.
 */
cljs.core.async.__GT_t_cljs$core$async38907 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async38907(flag__$1,meta38908){
return (new cljs.core.async.t_cljs$core$async38907(flag__$1,meta38908));
});

}

return (new cljs.core.async.t_cljs$core$async38907(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38910 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38910 = (function (flag,cb,meta38911){
this.flag = flag;
this.cb = cb;
this.meta38911 = meta38911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38912,meta38911__$1){
var self__ = this;
var _38912__$1 = this;
return (new cljs.core.async.t_cljs$core$async38910(self__.flag,self__.cb,meta38911__$1));
}));

(cljs.core.async.t_cljs$core$async38910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38912){
var self__ = this;
var _38912__$1 = this;
return self__.meta38911;
}));

(cljs.core.async.t_cljs$core$async38910.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38910.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async38910.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38910.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async38910.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta38911","meta38911",-1293211896,null)], null);
}));

(cljs.core.async.t_cljs$core$async38910.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38910");

(cljs.core.async.t_cljs$core$async38910.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38910");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38910.
 */
cljs.core.async.__GT_t_cljs$core$async38910 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async38910(flag__$1,cb__$1,meta38911){
return (new cljs.core.async.t_cljs$core$async38910(flag__$1,cb__$1,meta38911));
});

}

return (new cljs.core.async.t_cljs$core$async38910(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38913_SHARP_){
var G__38915 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38913_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__38915) : fret.call(null,G__38915));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38914_SHARP_){
var G__38916 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38914_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__38916) : fret.call(null,G__38916));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40461 = (i + (1));
i = G__40461;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40464 = arguments.length;
var i__4790__auto___40465 = (0);
while(true){
if((i__4790__auto___40465 < len__4789__auto___40464)){
args__4795__auto__.push((arguments[i__4790__auto___40465]));

var G__40466 = (i__4790__auto___40465 + (1));
i__4790__auto___40465 = G__40466;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__38919){
var map__38920 = p__38919;
var map__38920__$1 = (((((!((map__38920 == null))))?(((((map__38920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38920):map__38920);
var opts = map__38920__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq38917){
var G__38918 = cljs.core.first(seq38917);
var seq38917__$1 = cljs.core.next(seq38917);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38918,seq38917__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__38923 = arguments.length;
switch (G__38923) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38832__auto___40506 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38833__auto__ = (function (){var switch__38733__auto__ = (function (state_38947){
var state_val_38948 = (state_38947[(1)]);
if((state_val_38948 === (7))){
var inst_38943 = (state_38947[(2)]);
var state_38947__$1 = state_38947;
var statearr_38949_40510 = state_38947__$1;
(statearr_38949_40510[(2)] = inst_38943);

(statearr_38949_40510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38948 === (1))){
var state_38947__$1 = state_38947;
var statearr_38950_40515 = state_38947__$1;
(statearr_38950_40515[(2)] = null);

(statearr_38950_40515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38948 === (4))){
var inst_38926 = (state_38947[(7)]);
var inst_38926__$1 = (state_38947[(2)]);
var inst_38927 = (inst_38926__$1 == null);
var state_38947__$1 = (function (){var statearr_38951 = state_38947;
(statearr_38951[(7)] = inst_38926__$1);

return statearr_38951;
})();
if(cljs.core.truth_(inst_38927)){
var statearr_38952_40522 = state_38947__$1;
(statearr_38952_40522[(1)] = (5));

} else {
var statearr_38953_40523 = state_38947__$1;
(statearr_38953_40523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38948 === (13))){
var state_38947__$1 = state_38947;
var statearr_38954_40524 = state_38947__$1;
(statearr_38954_40524[(2)] = null);

(statearr_38954_40524[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38948 === (6))){
var inst_38926 = (state_38947[(7)]);
var state_38947__$1 = state_38947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38947__$1,(11),to,inst_38926);
} else {
if((state_val_38948 === (3))){
var inst_38945 = (state_38947[(2)]);
var state_38947__$1 = state_38947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38947__$1,inst_38945);
} else {
if((state_val_38948 === (12))){
var state_38947__$1 = state_38947;
var statearr_38955_40531 = state_38947__$1;
(statearr_38955_40531[(2)] = null);

(statearr_38955_40531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38948 === (2))){
var state_38947__$1 = state_38947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38947__$1,(4),from);
} else {
if((state_val_38948 === (11))){
var inst_38936 = (state_38947[(2)]);
var state_38947__$1 = state_38947;
if(cljs.core.truth_(inst_38936)){
var statearr_38956_40538 = state_38947__$1;
(statearr_38956_40538[(1)] = (12));

} else {
var statearr_38957_40539 = state_38947__$1;
(statearr_38957_40539[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38948 === (9))){
var state_38947__$1 = state_38947;
var statearr_38958_40543 = state_38947__$1;
(statearr_38958_40543[(2)] = null);

(statearr_38958_40543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38948 === (5))){
var state_38947__$1 = state_38947;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38959_40547 = state_38947__$1;
(statearr_38959_40547[(1)] = (8));

} else {
var statearr_38960_40548 = state_38947__$1;
(statearr_38960_40548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38948 === (14))){
var inst_38941 = (state_38947[(2)]);
var state_38947__$1 = state_38947;
var statearr_38961_40549 = state_38947__$1;
(statearr_38961_40549[(2)] = inst_38941);

(statearr_38961_40549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38948 === (10))){
var inst_38933 = (state_38947[(2)]);
var state_38947__$1 = state_38947;
var statearr_38962_40551 = state_38947__$1;
(statearr_38962_40551[(2)] = inst_38933);

(statearr_38962_40551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38948 === (8))){
var inst_38930 = cljs.core.async.close_BANG_(to);
var state_38947__$1 = state_38947;
var statearr_38963_40552 = state_38947__$1;
(statearr_38963_40552[(2)] = inst_38930);

(statearr_38963_40552[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38734__auto__ = null;
var cljs$core$async$state_machine__38734__auto____0 = (function (){
var statearr_38964 = [null,null,null,null,null,null,null,null];
(statearr_38964[(0)] = cljs$core$async$state_machine__38734__auto__);

(statearr_38964[(1)] = (1));

return statearr_38964;
});
var cljs$core$async$state_machine__38734__auto____1 = (function (state_38947){
while(true){
var ret_value__38735__auto__ = (function (){try{while(true){
var result__38736__auto__ = switch__38733__auto__(state_38947);
if(cljs.core.keyword_identical_QMARK_(result__38736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38736__auto__;
}
break;
}
}catch (e38965){if((e38965 instanceof Object)){
var ex__38737__auto__ = e38965;
var statearr_38966_40553 = state_38947;
(statearr_38966_40553[(5)] = ex__38737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38965;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40554 = state_38947;
state_38947 = G__40554;
continue;
} else {
return ret_value__38735__auto__;
}
break;
}
});
cljs$core$async$state_machine__38734__auto__ = function(state_38947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38734__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38734__auto____1.call(this,state_38947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38734__auto____0;
cljs$core$async$state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38734__auto____1;
return cljs$core$async$state_machine__38734__auto__;
})()
})();
var state__38834__auto__ = (function (){var statearr_38967 = (f__38833__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38833__auto__.cljs$core$IFn$_invoke$arity$0() : f__38833__auto__.call(null));
(statearr_38967[(6)] = c__38832__auto___40506);

return statearr_38967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38834__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__38968){
var vec__38969 = p__38968;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38969,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38969,(1),null);
var job = vec__38969;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__38832__auto___40557 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38833__auto__ = (function (){var switch__38733__auto__ = (function (state_38976){
var state_val_38977 = (state_38976[(1)]);
if((state_val_38977 === (1))){
var state_38976__$1 = state_38976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38976__$1,(2),res,v);
} else {
if((state_val_38977 === (2))){
var inst_38973 = (state_38976[(2)]);
var inst_38974 = cljs.core.async.close_BANG_(res);
var state_38976__$1 = (function (){var statearr_38978 = state_38976;
(statearr_38978[(7)] = inst_38973);

return statearr_38978;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38976__$1,inst_38974);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____0 = (function (){
var statearr_38979 = [null,null,null,null,null,null,null,null];
(statearr_38979[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__);

(statearr_38979[(1)] = (1));

return statearr_38979;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____1 = (function (state_38976){
while(true){
var ret_value__38735__auto__ = (function (){try{while(true){
var result__38736__auto__ = switch__38733__auto__(state_38976);
if(cljs.core.keyword_identical_QMARK_(result__38736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38736__auto__;
}
break;
}
}catch (e38980){if((e38980 instanceof Object)){
var ex__38737__auto__ = e38980;
var statearr_38981_40558 = state_38976;
(statearr_38981_40558[(5)] = ex__38737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38980;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40559 = state_38976;
state_38976 = G__40559;
continue;
} else {
return ret_value__38735__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__ = function(state_38976){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____1.call(this,state_38976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__;
})()
})();
var state__38834__auto__ = (function (){var statearr_38982 = (f__38833__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38833__auto__.cljs$core$IFn$_invoke$arity$0() : f__38833__auto__.call(null));
(statearr_38982[(6)] = c__38832__auto___40557);

return statearr_38982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38834__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__38983){
var vec__38984 = p__38983;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38984,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38984,(1),null);
var job = vec__38984;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___40567 = n;
var __40568 = (0);
while(true){
if((__40568 < n__4666__auto___40567)){
var G__38987_40569 = type;
var G__38987_40570__$1 = (((G__38987_40569 instanceof cljs.core.Keyword))?G__38987_40569.fqn:null);
switch (G__38987_40570__$1) {
case "compute":
var c__38832__auto___40573 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40568,c__38832__auto___40573,G__38987_40569,G__38987_40570__$1,n__4666__auto___40567,jobs,results,process,async){
return (function (){
var f__38833__auto__ = (function (){var switch__38733__auto__ = ((function (__40568,c__38832__auto___40573,G__38987_40569,G__38987_40570__$1,n__4666__auto___40567,jobs,results,process,async){
return (function (state_39000){
var state_val_39001 = (state_39000[(1)]);
if((state_val_39001 === (1))){
var state_39000__$1 = state_39000;
var statearr_39002_40575 = state_39000__$1;
(statearr_39002_40575[(2)] = null);

(statearr_39002_40575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39001 === (2))){
var state_39000__$1 = state_39000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39000__$1,(4),jobs);
} else {
if((state_val_39001 === (3))){
var inst_38998 = (state_39000[(2)]);
var state_39000__$1 = state_39000;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39000__$1,inst_38998);
} else {
if((state_val_39001 === (4))){
var inst_38990 = (state_39000[(2)]);
var inst_38991 = process(inst_38990);
var state_39000__$1 = state_39000;
if(cljs.core.truth_(inst_38991)){
var statearr_39003_40576 = state_39000__$1;
(statearr_39003_40576[(1)] = (5));

} else {
var statearr_39004_40577 = state_39000__$1;
(statearr_39004_40577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39001 === (5))){
var state_39000__$1 = state_39000;
var statearr_39005_40579 = state_39000__$1;
(statearr_39005_40579[(2)] = null);

(statearr_39005_40579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39001 === (6))){
var state_39000__$1 = state_39000;
var statearr_39006_40583 = state_39000__$1;
(statearr_39006_40583[(2)] = null);

(statearr_39006_40583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39001 === (7))){
var inst_38996 = (state_39000[(2)]);
var state_39000__$1 = state_39000;
var statearr_39007_40586 = state_39000__$1;
(statearr_39007_40586[(2)] = inst_38996);

(statearr_39007_40586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__40568,c__38832__auto___40573,G__38987_40569,G__38987_40570__$1,n__4666__auto___40567,jobs,results,process,async))
;
return ((function (__40568,switch__38733__auto__,c__38832__auto___40573,G__38987_40569,G__38987_40570__$1,n__4666__auto___40567,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____0 = (function (){
var statearr_39008 = [null,null,null,null,null,null,null];
(statearr_39008[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__);

(statearr_39008[(1)] = (1));

return statearr_39008;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____1 = (function (state_39000){
while(true){
var ret_value__38735__auto__ = (function (){try{while(true){
var result__38736__auto__ = switch__38733__auto__(state_39000);
if(cljs.core.keyword_identical_QMARK_(result__38736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38736__auto__;
}
break;
}
}catch (e39009){if((e39009 instanceof Object)){
var ex__38737__auto__ = e39009;
var statearr_39010_40596 = state_39000;
(statearr_39010_40596[(5)] = ex__38737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39009;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40603 = state_39000;
state_39000 = G__40603;
continue;
} else {
return ret_value__38735__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__ = function(state_39000){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____1.call(this,state_39000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__;
})()
;})(__40568,switch__38733__auto__,c__38832__auto___40573,G__38987_40569,G__38987_40570__$1,n__4666__auto___40567,jobs,results,process,async))
})();
var state__38834__auto__ = (function (){var statearr_39011 = (f__38833__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38833__auto__.cljs$core$IFn$_invoke$arity$0() : f__38833__auto__.call(null));
(statearr_39011[(6)] = c__38832__auto___40573);

return statearr_39011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38834__auto__);
});})(__40568,c__38832__auto___40573,G__38987_40569,G__38987_40570__$1,n__4666__auto___40567,jobs,results,process,async))
);


break;
case "async":
var c__38832__auto___40604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40568,c__38832__auto___40604,G__38987_40569,G__38987_40570__$1,n__4666__auto___40567,jobs,results,process,async){
return (function (){
var f__38833__auto__ = (function (){var switch__38733__auto__ = ((function (__40568,c__38832__auto___40604,G__38987_40569,G__38987_40570__$1,n__4666__auto___40567,jobs,results,process,async){
return (function (state_39024){
var state_val_39025 = (state_39024[(1)]);
if((state_val_39025 === (1))){
var state_39024__$1 = state_39024;
var statearr_39026_40605 = state_39024__$1;
(statearr_39026_40605[(2)] = null);

(statearr_39026_40605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (2))){
var state_39024__$1 = state_39024;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39024__$1,(4),jobs);
} else {
if((state_val_39025 === (3))){
var inst_39022 = (state_39024[(2)]);
var state_39024__$1 = state_39024;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39024__$1,inst_39022);
} else {
if((state_val_39025 === (4))){
var inst_39014 = (state_39024[(2)]);
var inst_39015 = async(inst_39014);
var state_39024__$1 = state_39024;
if(cljs.core.truth_(inst_39015)){
var statearr_39027_40606 = state_39024__$1;
(statearr_39027_40606[(1)] = (5));

} else {
var statearr_39028_40607 = state_39024__$1;
(statearr_39028_40607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (5))){
var state_39024__$1 = state_39024;
var statearr_39029_40608 = state_39024__$1;
(statearr_39029_40608[(2)] = null);

(statearr_39029_40608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (6))){
var state_39024__$1 = state_39024;
var statearr_39030_40609 = state_39024__$1;
(statearr_39030_40609[(2)] = null);

(statearr_39030_40609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (7))){
var inst_39020 = (state_39024[(2)]);
var state_39024__$1 = state_39024;
var statearr_39031_40616 = state_39024__$1;
(statearr_39031_40616[(2)] = inst_39020);

(statearr_39031_40616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__40568,c__38832__auto___40604,G__38987_40569,G__38987_40570__$1,n__4666__auto___40567,jobs,results,process,async))
;
return ((function (__40568,switch__38733__auto__,c__38832__auto___40604,G__38987_40569,G__38987_40570__$1,n__4666__auto___40567,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____0 = (function (){
var statearr_39032 = [null,null,null,null,null,null,null];
(statearr_39032[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__);

(statearr_39032[(1)] = (1));

return statearr_39032;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____1 = (function (state_39024){
while(true){
var ret_value__38735__auto__ = (function (){try{while(true){
var result__38736__auto__ = switch__38733__auto__(state_39024);
if(cljs.core.keyword_identical_QMARK_(result__38736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38736__auto__;
}
break;
}
}catch (e39033){if((e39033 instanceof Object)){
var ex__38737__auto__ = e39033;
var statearr_39034_40623 = state_39024;
(statearr_39034_40623[(5)] = ex__38737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39033;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40624 = state_39024;
state_39024 = G__40624;
continue;
} else {
return ret_value__38735__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__ = function(state_39024){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____1.call(this,state_39024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__;
})()
;})(__40568,switch__38733__auto__,c__38832__auto___40604,G__38987_40569,G__38987_40570__$1,n__4666__auto___40567,jobs,results,process,async))
})();
var state__38834__auto__ = (function (){var statearr_39035 = (f__38833__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38833__auto__.cljs$core$IFn$_invoke$arity$0() : f__38833__auto__.call(null));
(statearr_39035[(6)] = c__38832__auto___40604);

return statearr_39035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38834__auto__);
});})(__40568,c__38832__auto___40604,G__38987_40569,G__38987_40570__$1,n__4666__auto___40567,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38987_40570__$1)].join('')));

}

var G__40625 = (__40568 + (1));
__40568 = G__40625;
continue;
} else {
}
break;
}

var c__38832__auto___40626 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38833__auto__ = (function (){var switch__38733__auto__ = (function (state_39057){
var state_val_39058 = (state_39057[(1)]);
if((state_val_39058 === (7))){
var inst_39053 = (state_39057[(2)]);
var state_39057__$1 = state_39057;
var statearr_39059_40627 = state_39057__$1;
(statearr_39059_40627[(2)] = inst_39053);

(statearr_39059_40627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39058 === (1))){
var state_39057__$1 = state_39057;
var statearr_39060_40628 = state_39057__$1;
(statearr_39060_40628[(2)] = null);

(statearr_39060_40628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39058 === (4))){
var inst_39038 = (state_39057[(7)]);
var inst_39038__$1 = (state_39057[(2)]);
var inst_39039 = (inst_39038__$1 == null);
var state_39057__$1 = (function (){var statearr_39061 = state_39057;
(statearr_39061[(7)] = inst_39038__$1);

return statearr_39061;
})();
if(cljs.core.truth_(inst_39039)){
var statearr_39062_40629 = state_39057__$1;
(statearr_39062_40629[(1)] = (5));

} else {
var statearr_39063_40636 = state_39057__$1;
(statearr_39063_40636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39058 === (6))){
var inst_39038 = (state_39057[(7)]);
var inst_39043 = (state_39057[(8)]);
var inst_39043__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_39044 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39045 = [inst_39038,inst_39043__$1];
var inst_39046 = (new cljs.core.PersistentVector(null,2,(5),inst_39044,inst_39045,null));
var state_39057__$1 = (function (){var statearr_39064 = state_39057;
(statearr_39064[(8)] = inst_39043__$1);

return statearr_39064;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39057__$1,(8),jobs,inst_39046);
} else {
if((state_val_39058 === (3))){
var inst_39055 = (state_39057[(2)]);
var state_39057__$1 = state_39057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39057__$1,inst_39055);
} else {
if((state_val_39058 === (2))){
var state_39057__$1 = state_39057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39057__$1,(4),from);
} else {
if((state_val_39058 === (9))){
var inst_39050 = (state_39057[(2)]);
var state_39057__$1 = (function (){var statearr_39065 = state_39057;
(statearr_39065[(9)] = inst_39050);

return statearr_39065;
})();
var statearr_39066_40637 = state_39057__$1;
(statearr_39066_40637[(2)] = null);

(statearr_39066_40637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39058 === (5))){
var inst_39041 = cljs.core.async.close_BANG_(jobs);
var state_39057__$1 = state_39057;
var statearr_39067_40638 = state_39057__$1;
(statearr_39067_40638[(2)] = inst_39041);

(statearr_39067_40638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39058 === (8))){
var inst_39043 = (state_39057[(8)]);
var inst_39048 = (state_39057[(2)]);
var state_39057__$1 = (function (){var statearr_39068 = state_39057;
(statearr_39068[(10)] = inst_39048);

return statearr_39068;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39057__$1,(9),results,inst_39043);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____0 = (function (){
var statearr_39069 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39069[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__);

(statearr_39069[(1)] = (1));

return statearr_39069;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____1 = (function (state_39057){
while(true){
var ret_value__38735__auto__ = (function (){try{while(true){
var result__38736__auto__ = switch__38733__auto__(state_39057);
if(cljs.core.keyword_identical_QMARK_(result__38736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38736__auto__;
}
break;
}
}catch (e39070){if((e39070 instanceof Object)){
var ex__38737__auto__ = e39070;
var statearr_39071_40641 = state_39057;
(statearr_39071_40641[(5)] = ex__38737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39070;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40646 = state_39057;
state_39057 = G__40646;
continue;
} else {
return ret_value__38735__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__ = function(state_39057){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____1.call(this,state_39057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__;
})()
})();
var state__38834__auto__ = (function (){var statearr_39072 = (f__38833__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38833__auto__.cljs$core$IFn$_invoke$arity$0() : f__38833__auto__.call(null));
(statearr_39072[(6)] = c__38832__auto___40626);

return statearr_39072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38834__auto__);
}));


var c__38832__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38833__auto__ = (function (){var switch__38733__auto__ = (function (state_39110){
var state_val_39111 = (state_39110[(1)]);
if((state_val_39111 === (7))){
var inst_39106 = (state_39110[(2)]);
var state_39110__$1 = state_39110;
var statearr_39112_40647 = state_39110__$1;
(statearr_39112_40647[(2)] = inst_39106);

(statearr_39112_40647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39111 === (20))){
var state_39110__$1 = state_39110;
var statearr_39113_40648 = state_39110__$1;
(statearr_39113_40648[(2)] = null);

(statearr_39113_40648[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39111 === (1))){
var state_39110__$1 = state_39110;
var statearr_39114_40649 = state_39110__$1;
(statearr_39114_40649[(2)] = null);

(statearr_39114_40649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39111 === (4))){
var inst_39075 = (state_39110[(7)]);
var inst_39075__$1 = (state_39110[(2)]);
var inst_39076 = (inst_39075__$1 == null);
var state_39110__$1 = (function (){var statearr_39115 = state_39110;
(statearr_39115[(7)] = inst_39075__$1);

return statearr_39115;
})();
if(cljs.core.truth_(inst_39076)){
var statearr_39116_40650 = state_39110__$1;
(statearr_39116_40650[(1)] = (5));

} else {
var statearr_39117_40651 = state_39110__$1;
(statearr_39117_40651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39111 === (15))){
var inst_39088 = (state_39110[(8)]);
var state_39110__$1 = state_39110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39110__$1,(18),to,inst_39088);
} else {
if((state_val_39111 === (21))){
var inst_39101 = (state_39110[(2)]);
var state_39110__$1 = state_39110;
var statearr_39118_40654 = state_39110__$1;
(statearr_39118_40654[(2)] = inst_39101);

(statearr_39118_40654[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39111 === (13))){
var inst_39103 = (state_39110[(2)]);
var state_39110__$1 = (function (){var statearr_39119 = state_39110;
(statearr_39119[(9)] = inst_39103);

return statearr_39119;
})();
var statearr_39120_40655 = state_39110__$1;
(statearr_39120_40655[(2)] = null);

(statearr_39120_40655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39111 === (6))){
var inst_39075 = (state_39110[(7)]);
var state_39110__$1 = state_39110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39110__$1,(11),inst_39075);
} else {
if((state_val_39111 === (17))){
var inst_39096 = (state_39110[(2)]);
var state_39110__$1 = state_39110;
if(cljs.core.truth_(inst_39096)){
var statearr_39121_40658 = state_39110__$1;
(statearr_39121_40658[(1)] = (19));

} else {
var statearr_39122_40659 = state_39110__$1;
(statearr_39122_40659[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39111 === (3))){
var inst_39108 = (state_39110[(2)]);
var state_39110__$1 = state_39110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39110__$1,inst_39108);
} else {
if((state_val_39111 === (12))){
var inst_39085 = (state_39110[(10)]);
var state_39110__$1 = state_39110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39110__$1,(14),inst_39085);
} else {
if((state_val_39111 === (2))){
var state_39110__$1 = state_39110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39110__$1,(4),results);
} else {
if((state_val_39111 === (19))){
var state_39110__$1 = state_39110;
var statearr_39123_40661 = state_39110__$1;
(statearr_39123_40661[(2)] = null);

(statearr_39123_40661[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39111 === (11))){
var inst_39085 = (state_39110[(2)]);
var state_39110__$1 = (function (){var statearr_39124 = state_39110;
(statearr_39124[(10)] = inst_39085);

return statearr_39124;
})();
var statearr_39125_40663 = state_39110__$1;
(statearr_39125_40663[(2)] = null);

(statearr_39125_40663[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39111 === (9))){
var state_39110__$1 = state_39110;
var statearr_39126_40664 = state_39110__$1;
(statearr_39126_40664[(2)] = null);

(statearr_39126_40664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39111 === (5))){
var state_39110__$1 = state_39110;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39127_40665 = state_39110__$1;
(statearr_39127_40665[(1)] = (8));

} else {
var statearr_39128_40667 = state_39110__$1;
(statearr_39128_40667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39111 === (14))){
var inst_39088 = (state_39110[(8)]);
var inst_39088__$1 = (state_39110[(2)]);
var inst_39089 = (inst_39088__$1 == null);
var inst_39090 = cljs.core.not(inst_39089);
var state_39110__$1 = (function (){var statearr_39129 = state_39110;
(statearr_39129[(8)] = inst_39088__$1);

return statearr_39129;
})();
if(inst_39090){
var statearr_39130_40669 = state_39110__$1;
(statearr_39130_40669[(1)] = (15));

} else {
var statearr_39131_40670 = state_39110__$1;
(statearr_39131_40670[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39111 === (16))){
var state_39110__$1 = state_39110;
var statearr_39132_40671 = state_39110__$1;
(statearr_39132_40671[(2)] = false);

(statearr_39132_40671[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39111 === (10))){
var inst_39082 = (state_39110[(2)]);
var state_39110__$1 = state_39110;
var statearr_39133_40672 = state_39110__$1;
(statearr_39133_40672[(2)] = inst_39082);

(statearr_39133_40672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39111 === (18))){
var inst_39093 = (state_39110[(2)]);
var state_39110__$1 = state_39110;
var statearr_39134_40673 = state_39110__$1;
(statearr_39134_40673[(2)] = inst_39093);

(statearr_39134_40673[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39111 === (8))){
var inst_39079 = cljs.core.async.close_BANG_(to);
var state_39110__$1 = state_39110;
var statearr_39135_40674 = state_39110__$1;
(statearr_39135_40674[(2)] = inst_39079);

(statearr_39135_40674[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____0 = (function (){
var statearr_39136 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39136[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__);

(statearr_39136[(1)] = (1));

return statearr_39136;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____1 = (function (state_39110){
while(true){
var ret_value__38735__auto__ = (function (){try{while(true){
var result__38736__auto__ = switch__38733__auto__(state_39110);
if(cljs.core.keyword_identical_QMARK_(result__38736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38736__auto__;
}
break;
}
}catch (e39137){if((e39137 instanceof Object)){
var ex__38737__auto__ = e39137;
var statearr_39138_40675 = state_39110;
(statearr_39138_40675[(5)] = ex__38737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39137;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40676 = state_39110;
state_39110 = G__40676;
continue;
} else {
return ret_value__38735__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__ = function(state_39110){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____1.call(this,state_39110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38734__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38734__auto__;
})()
})();
var state__38834__auto__ = (function (){var statearr_39139 = (f__38833__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38833__auto__.cljs$core$IFn$_invoke$arity$0() : f__38833__auto__.call(null));
(statearr_39139[(6)] = c__38832__auto__);

return statearr_39139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38834__auto__);
}));

return c__38832__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__39141 = arguments.length;
switch (G__39141) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__39143 = arguments.length;
switch (G__39143) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__39145 = arguments.length;
switch (G__39145) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__38832__auto___40692 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38833__auto__ = (function (){var switch__38733__auto__ = (function (state_39171){
var state_val_39172 = (state_39171[(1)]);
if((state_val_39172 === (7))){
var inst_39167 = (state_39171[(2)]);
var state_39171__$1 = state_39171;
var statearr_39173_40693 = state_39171__$1;
(statearr_39173_40693[(2)] = inst_39167);

(statearr_39173_40693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39172 === (1))){
var state_39171__$1 = state_39171;
var statearr_39174_40697 = state_39171__$1;
(statearr_39174_40697[(2)] = null);

(statearr_39174_40697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39172 === (4))){
var inst_39148 = (state_39171[(7)]);
var inst_39148__$1 = (state_39171[(2)]);
var inst_39149 = (inst_39148__$1 == null);
var state_39171__$1 = (function (){var statearr_39175 = state_39171;
(statearr_39175[(7)] = inst_39148__$1);

return statearr_39175;
})();
if(cljs.core.truth_(inst_39149)){
var statearr_39176_40701 = state_39171__$1;
(statearr_39176_40701[(1)] = (5));

} else {
var statearr_39177_40705 = state_39171__$1;
(statearr_39177_40705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39172 === (13))){
var state_39171__$1 = state_39171;
var statearr_39178_40710 = state_39171__$1;
(statearr_39178_40710[(2)] = null);

(statearr_39178_40710[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39172 === (6))){
var inst_39148 = (state_39171[(7)]);
var inst_39154 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39148) : p.call(null,inst_39148));
var state_39171__$1 = state_39171;
if(cljs.core.truth_(inst_39154)){
var statearr_39179_40713 = state_39171__$1;
(statearr_39179_40713[(1)] = (9));

} else {
var statearr_39180_40715 = state_39171__$1;
(statearr_39180_40715[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39172 === (3))){
var inst_39169 = (state_39171[(2)]);
var state_39171__$1 = state_39171;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39171__$1,inst_39169);
} else {
if((state_val_39172 === (12))){
var state_39171__$1 = state_39171;
var statearr_39181_40717 = state_39171__$1;
(statearr_39181_40717[(2)] = null);

(statearr_39181_40717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39172 === (2))){
var state_39171__$1 = state_39171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39171__$1,(4),ch);
} else {
if((state_val_39172 === (11))){
var inst_39148 = (state_39171[(7)]);
var inst_39158 = (state_39171[(2)]);
var state_39171__$1 = state_39171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39171__$1,(8),inst_39158,inst_39148);
} else {
if((state_val_39172 === (9))){
var state_39171__$1 = state_39171;
var statearr_39182_40723 = state_39171__$1;
(statearr_39182_40723[(2)] = tc);

(statearr_39182_40723[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39172 === (5))){
var inst_39151 = cljs.core.async.close_BANG_(tc);
var inst_39152 = cljs.core.async.close_BANG_(fc);
var state_39171__$1 = (function (){var statearr_39183 = state_39171;
(statearr_39183[(8)] = inst_39151);

return statearr_39183;
})();
var statearr_39184_40725 = state_39171__$1;
(statearr_39184_40725[(2)] = inst_39152);

(statearr_39184_40725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39172 === (14))){
var inst_39165 = (state_39171[(2)]);
var state_39171__$1 = state_39171;
var statearr_39185_40728 = state_39171__$1;
(statearr_39185_40728[(2)] = inst_39165);

(statearr_39185_40728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39172 === (10))){
var state_39171__$1 = state_39171;
var statearr_39186_40729 = state_39171__$1;
(statearr_39186_40729[(2)] = fc);

(statearr_39186_40729[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39172 === (8))){
var inst_39160 = (state_39171[(2)]);
var state_39171__$1 = state_39171;
if(cljs.core.truth_(inst_39160)){
var statearr_39187_40730 = state_39171__$1;
(statearr_39187_40730[(1)] = (12));

} else {
var statearr_39188_40731 = state_39171__$1;
(statearr_39188_40731[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38734__auto__ = null;
var cljs$core$async$state_machine__38734__auto____0 = (function (){
var statearr_39189 = [null,null,null,null,null,null,null,null,null];
(statearr_39189[(0)] = cljs$core$async$state_machine__38734__auto__);

(statearr_39189[(1)] = (1));

return statearr_39189;
});
var cljs$core$async$state_machine__38734__auto____1 = (function (state_39171){
while(true){
var ret_value__38735__auto__ = (function (){try{while(true){
var result__38736__auto__ = switch__38733__auto__(state_39171);
if(cljs.core.keyword_identical_QMARK_(result__38736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38736__auto__;
}
break;
}
}catch (e39190){if((e39190 instanceof Object)){
var ex__38737__auto__ = e39190;
var statearr_39191_40732 = state_39171;
(statearr_39191_40732[(5)] = ex__38737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39190;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40737 = state_39171;
state_39171 = G__40737;
continue;
} else {
return ret_value__38735__auto__;
}
break;
}
});
cljs$core$async$state_machine__38734__auto__ = function(state_39171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38734__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38734__auto____1.call(this,state_39171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38734__auto____0;
cljs$core$async$state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38734__auto____1;
return cljs$core$async$state_machine__38734__auto__;
})()
})();
var state__38834__auto__ = (function (){var statearr_39192 = (f__38833__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38833__auto__.cljs$core$IFn$_invoke$arity$0() : f__38833__auto__.call(null));
(statearr_39192[(6)] = c__38832__auto___40692);

return statearr_39192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38834__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__38832__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38833__auto__ = (function (){var switch__38733__auto__ = (function (state_39213){
var state_val_39214 = (state_39213[(1)]);
if((state_val_39214 === (7))){
var inst_39209 = (state_39213[(2)]);
var state_39213__$1 = state_39213;
var statearr_39215_40738 = state_39213__$1;
(statearr_39215_40738[(2)] = inst_39209);

(statearr_39215_40738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39214 === (1))){
var inst_39193 = init;
var state_39213__$1 = (function (){var statearr_39216 = state_39213;
(statearr_39216[(7)] = inst_39193);

return statearr_39216;
})();
var statearr_39217_40739 = state_39213__$1;
(statearr_39217_40739[(2)] = null);

(statearr_39217_40739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39214 === (4))){
var inst_39196 = (state_39213[(8)]);
var inst_39196__$1 = (state_39213[(2)]);
var inst_39197 = (inst_39196__$1 == null);
var state_39213__$1 = (function (){var statearr_39218 = state_39213;
(statearr_39218[(8)] = inst_39196__$1);

return statearr_39218;
})();
if(cljs.core.truth_(inst_39197)){
var statearr_39219_40745 = state_39213__$1;
(statearr_39219_40745[(1)] = (5));

} else {
var statearr_39220_40746 = state_39213__$1;
(statearr_39220_40746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39214 === (6))){
var inst_39193 = (state_39213[(7)]);
var inst_39196 = (state_39213[(8)]);
var inst_39200 = (state_39213[(9)]);
var inst_39200__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_39193,inst_39196) : f.call(null,inst_39193,inst_39196));
var inst_39201 = cljs.core.reduced_QMARK_(inst_39200__$1);
var state_39213__$1 = (function (){var statearr_39221 = state_39213;
(statearr_39221[(9)] = inst_39200__$1);

return statearr_39221;
})();
if(inst_39201){
var statearr_39222_40748 = state_39213__$1;
(statearr_39222_40748[(1)] = (8));

} else {
var statearr_39223_40749 = state_39213__$1;
(statearr_39223_40749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39214 === (3))){
var inst_39211 = (state_39213[(2)]);
var state_39213__$1 = state_39213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39213__$1,inst_39211);
} else {
if((state_val_39214 === (2))){
var state_39213__$1 = state_39213;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39213__$1,(4),ch);
} else {
if((state_val_39214 === (9))){
var inst_39200 = (state_39213[(9)]);
var inst_39193 = inst_39200;
var state_39213__$1 = (function (){var statearr_39224 = state_39213;
(statearr_39224[(7)] = inst_39193);

return statearr_39224;
})();
var statearr_39225_40754 = state_39213__$1;
(statearr_39225_40754[(2)] = null);

(statearr_39225_40754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39214 === (5))){
var inst_39193 = (state_39213[(7)]);
var state_39213__$1 = state_39213;
var statearr_39226_40755 = state_39213__$1;
(statearr_39226_40755[(2)] = inst_39193);

(statearr_39226_40755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39214 === (10))){
var inst_39207 = (state_39213[(2)]);
var state_39213__$1 = state_39213;
var statearr_39227_40756 = state_39213__$1;
(statearr_39227_40756[(2)] = inst_39207);

(statearr_39227_40756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39214 === (8))){
var inst_39200 = (state_39213[(9)]);
var inst_39203 = cljs.core.deref(inst_39200);
var state_39213__$1 = state_39213;
var statearr_39228_40757 = state_39213__$1;
(statearr_39228_40757[(2)] = inst_39203);

(statearr_39228_40757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__38734__auto__ = null;
var cljs$core$async$reduce_$_state_machine__38734__auto____0 = (function (){
var statearr_39229 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39229[(0)] = cljs$core$async$reduce_$_state_machine__38734__auto__);

(statearr_39229[(1)] = (1));

return statearr_39229;
});
var cljs$core$async$reduce_$_state_machine__38734__auto____1 = (function (state_39213){
while(true){
var ret_value__38735__auto__ = (function (){try{while(true){
var result__38736__auto__ = switch__38733__auto__(state_39213);
if(cljs.core.keyword_identical_QMARK_(result__38736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38736__auto__;
}
break;
}
}catch (e39230){if((e39230 instanceof Object)){
var ex__38737__auto__ = e39230;
var statearr_39231_40759 = state_39213;
(statearr_39231_40759[(5)] = ex__38737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39230;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40760 = state_39213;
state_39213 = G__40760;
continue;
} else {
return ret_value__38735__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38734__auto__ = function(state_39213){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38734__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38734__auto____1.call(this,state_39213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38734__auto____0;
cljs$core$async$reduce_$_state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38734__auto____1;
return cljs$core$async$reduce_$_state_machine__38734__auto__;
})()
})();
var state__38834__auto__ = (function (){var statearr_39232 = (f__38833__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38833__auto__.cljs$core$IFn$_invoke$arity$0() : f__38833__auto__.call(null));
(statearr_39232[(6)] = c__38832__auto__);

return statearr_39232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38834__auto__);
}));

return c__38832__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__38832__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38833__auto__ = (function (){var switch__38733__auto__ = (function (state_39238){
var state_val_39239 = (state_39238[(1)]);
if((state_val_39239 === (1))){
var inst_39233 = cljs.core.async.reduce(f__$1,init,ch);
var state_39238__$1 = state_39238;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39238__$1,(2),inst_39233);
} else {
if((state_val_39239 === (2))){
var inst_39235 = (state_39238[(2)]);
var inst_39236 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_39235) : f__$1.call(null,inst_39235));
var state_39238__$1 = state_39238;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39238__$1,inst_39236);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__38734__auto__ = null;
var cljs$core$async$transduce_$_state_machine__38734__auto____0 = (function (){
var statearr_39240 = [null,null,null,null,null,null,null];
(statearr_39240[(0)] = cljs$core$async$transduce_$_state_machine__38734__auto__);

(statearr_39240[(1)] = (1));

return statearr_39240;
});
var cljs$core$async$transduce_$_state_machine__38734__auto____1 = (function (state_39238){
while(true){
var ret_value__38735__auto__ = (function (){try{while(true){
var result__38736__auto__ = switch__38733__auto__(state_39238);
if(cljs.core.keyword_identical_QMARK_(result__38736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38736__auto__;
}
break;
}
}catch (e39241){if((e39241 instanceof Object)){
var ex__38737__auto__ = e39241;
var statearr_39242_40768 = state_39238;
(statearr_39242_40768[(5)] = ex__38737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39241;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40769 = state_39238;
state_39238 = G__40769;
continue;
} else {
return ret_value__38735__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__38734__auto__ = function(state_39238){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__38734__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__38734__auto____1.call(this,state_39238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__38734__auto____0;
cljs$core$async$transduce_$_state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__38734__auto____1;
return cljs$core$async$transduce_$_state_machine__38734__auto__;
})()
})();
var state__38834__auto__ = (function (){var statearr_39243 = (f__38833__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38833__auto__.cljs$core$IFn$_invoke$arity$0() : f__38833__auto__.call(null));
(statearr_39243[(6)] = c__38832__auto__);

return statearr_39243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38834__auto__);
}));

return c__38832__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__39245 = arguments.length;
switch (G__39245) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38832__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38833__auto__ = (function (){var switch__38733__auto__ = (function (state_39270){
var state_val_39271 = (state_39270[(1)]);
if((state_val_39271 === (7))){
var inst_39252 = (state_39270[(2)]);
var state_39270__$1 = state_39270;
var statearr_39272_40772 = state_39270__$1;
(statearr_39272_40772[(2)] = inst_39252);

(statearr_39272_40772[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39271 === (1))){
var inst_39246 = cljs.core.seq(coll);
var inst_39247 = inst_39246;
var state_39270__$1 = (function (){var statearr_39273 = state_39270;
(statearr_39273[(7)] = inst_39247);

return statearr_39273;
})();
var statearr_39274_40774 = state_39270__$1;
(statearr_39274_40774[(2)] = null);

(statearr_39274_40774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39271 === (4))){
var inst_39247 = (state_39270[(7)]);
var inst_39250 = cljs.core.first(inst_39247);
var state_39270__$1 = state_39270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39270__$1,(7),ch,inst_39250);
} else {
if((state_val_39271 === (13))){
var inst_39264 = (state_39270[(2)]);
var state_39270__$1 = state_39270;
var statearr_39275_40775 = state_39270__$1;
(statearr_39275_40775[(2)] = inst_39264);

(statearr_39275_40775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39271 === (6))){
var inst_39255 = (state_39270[(2)]);
var state_39270__$1 = state_39270;
if(cljs.core.truth_(inst_39255)){
var statearr_39276_40777 = state_39270__$1;
(statearr_39276_40777[(1)] = (8));

} else {
var statearr_39277_40778 = state_39270__$1;
(statearr_39277_40778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39271 === (3))){
var inst_39268 = (state_39270[(2)]);
var state_39270__$1 = state_39270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39270__$1,inst_39268);
} else {
if((state_val_39271 === (12))){
var state_39270__$1 = state_39270;
var statearr_39278_40780 = state_39270__$1;
(statearr_39278_40780[(2)] = null);

(statearr_39278_40780[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39271 === (2))){
var inst_39247 = (state_39270[(7)]);
var state_39270__$1 = state_39270;
if(cljs.core.truth_(inst_39247)){
var statearr_39279_40786 = state_39270__$1;
(statearr_39279_40786[(1)] = (4));

} else {
var statearr_39280_40787 = state_39270__$1;
(statearr_39280_40787[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39271 === (11))){
var inst_39261 = cljs.core.async.close_BANG_(ch);
var state_39270__$1 = state_39270;
var statearr_39281_40788 = state_39270__$1;
(statearr_39281_40788[(2)] = inst_39261);

(statearr_39281_40788[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39271 === (9))){
var state_39270__$1 = state_39270;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39282_40790 = state_39270__$1;
(statearr_39282_40790[(1)] = (11));

} else {
var statearr_39283_40791 = state_39270__$1;
(statearr_39283_40791[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39271 === (5))){
var inst_39247 = (state_39270[(7)]);
var state_39270__$1 = state_39270;
var statearr_39284_40793 = state_39270__$1;
(statearr_39284_40793[(2)] = inst_39247);

(statearr_39284_40793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39271 === (10))){
var inst_39266 = (state_39270[(2)]);
var state_39270__$1 = state_39270;
var statearr_39285_40797 = state_39270__$1;
(statearr_39285_40797[(2)] = inst_39266);

(statearr_39285_40797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39271 === (8))){
var inst_39247 = (state_39270[(7)]);
var inst_39257 = cljs.core.next(inst_39247);
var inst_39247__$1 = inst_39257;
var state_39270__$1 = (function (){var statearr_39286 = state_39270;
(statearr_39286[(7)] = inst_39247__$1);

return statearr_39286;
})();
var statearr_39287_40798 = state_39270__$1;
(statearr_39287_40798[(2)] = null);

(statearr_39287_40798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38734__auto__ = null;
var cljs$core$async$state_machine__38734__auto____0 = (function (){
var statearr_39288 = [null,null,null,null,null,null,null,null];
(statearr_39288[(0)] = cljs$core$async$state_machine__38734__auto__);

(statearr_39288[(1)] = (1));

return statearr_39288;
});
var cljs$core$async$state_machine__38734__auto____1 = (function (state_39270){
while(true){
var ret_value__38735__auto__ = (function (){try{while(true){
var result__38736__auto__ = switch__38733__auto__(state_39270);
if(cljs.core.keyword_identical_QMARK_(result__38736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38736__auto__;
}
break;
}
}catch (e39289){if((e39289 instanceof Object)){
var ex__38737__auto__ = e39289;
var statearr_39290_40799 = state_39270;
(statearr_39290_40799[(5)] = ex__38737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39289;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40800 = state_39270;
state_39270 = G__40800;
continue;
} else {
return ret_value__38735__auto__;
}
break;
}
});
cljs$core$async$state_machine__38734__auto__ = function(state_39270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38734__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38734__auto____1.call(this,state_39270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38734__auto____0;
cljs$core$async$state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38734__auto____1;
return cljs$core$async$state_machine__38734__auto__;
})()
})();
var state__38834__auto__ = (function (){var statearr_39291 = (f__38833__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38833__auto__.cljs$core$IFn$_invoke$arity$0() : f__38833__auto__.call(null));
(statearr_39291[(6)] = c__38832__auto__);

return statearr_39291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38834__auto__);
}));

return c__38832__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39292 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39292 = (function (ch,cs,meta39293){
this.ch = ch;
this.cs = cs;
this.meta39293 = meta39293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39294,meta39293__$1){
var self__ = this;
var _39294__$1 = this;
return (new cljs.core.async.t_cljs$core$async39292(self__.ch,self__.cs,meta39293__$1));
}));

(cljs.core.async.t_cljs$core$async39292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39294){
var self__ = this;
var _39294__$1 = this;
return self__.meta39293;
}));

(cljs.core.async.t_cljs$core$async39292.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39292.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async39292.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39292.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async39292.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async39292.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async39292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39293","meta39293",-1559761019,null)], null);
}));

(cljs.core.async.t_cljs$core$async39292.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39292");

(cljs.core.async.t_cljs$core$async39292.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async39292");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39292.
 */
cljs.core.async.__GT_t_cljs$core$async39292 = (function cljs$core$async$mult_$___GT_t_cljs$core$async39292(ch__$1,cs__$1,meta39293){
return (new cljs.core.async.t_cljs$core$async39292(ch__$1,cs__$1,meta39293));
});

}

return (new cljs.core.async.t_cljs$core$async39292(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__38832__auto___40811 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38833__auto__ = (function (){var switch__38733__auto__ = (function (state_39429){
var state_val_39430 = (state_39429[(1)]);
if((state_val_39430 === (7))){
var inst_39425 = (state_39429[(2)]);
var state_39429__$1 = state_39429;
var statearr_39431_40816 = state_39429__$1;
(statearr_39431_40816[(2)] = inst_39425);

(statearr_39431_40816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (20))){
var inst_39328 = (state_39429[(7)]);
var inst_39340 = cljs.core.first(inst_39328);
var inst_39341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39340,(0),null);
var inst_39342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39340,(1),null);
var state_39429__$1 = (function (){var statearr_39432 = state_39429;
(statearr_39432[(8)] = inst_39341);

return statearr_39432;
})();
if(cljs.core.truth_(inst_39342)){
var statearr_39433_40821 = state_39429__$1;
(statearr_39433_40821[(1)] = (22));

} else {
var statearr_39434_40822 = state_39429__$1;
(statearr_39434_40822[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (27))){
var inst_39372 = (state_39429[(9)]);
var inst_39370 = (state_39429[(10)]);
var inst_39377 = (state_39429[(11)]);
var inst_39297 = (state_39429[(12)]);
var inst_39377__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39370,inst_39372);
var inst_39378 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39377__$1,inst_39297,done);
var state_39429__$1 = (function (){var statearr_39435 = state_39429;
(statearr_39435[(11)] = inst_39377__$1);

return statearr_39435;
})();
if(cljs.core.truth_(inst_39378)){
var statearr_39436_40825 = state_39429__$1;
(statearr_39436_40825[(1)] = (30));

} else {
var statearr_39437_40826 = state_39429__$1;
(statearr_39437_40826[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (1))){
var state_39429__$1 = state_39429;
var statearr_39438_40827 = state_39429__$1;
(statearr_39438_40827[(2)] = null);

(statearr_39438_40827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (24))){
var inst_39328 = (state_39429[(7)]);
var inst_39347 = (state_39429[(2)]);
var inst_39348 = cljs.core.next(inst_39328);
var inst_39306 = inst_39348;
var inst_39307 = null;
var inst_39308 = (0);
var inst_39309 = (0);
var state_39429__$1 = (function (){var statearr_39439 = state_39429;
(statearr_39439[(13)] = inst_39347);

(statearr_39439[(14)] = inst_39308);

(statearr_39439[(15)] = inst_39309);

(statearr_39439[(16)] = inst_39306);

(statearr_39439[(17)] = inst_39307);

return statearr_39439;
})();
var statearr_39440_40830 = state_39429__$1;
(statearr_39440_40830[(2)] = null);

(statearr_39440_40830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (39))){
var state_39429__$1 = state_39429;
var statearr_39444_40833 = state_39429__$1;
(statearr_39444_40833[(2)] = null);

(statearr_39444_40833[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (4))){
var inst_39297 = (state_39429[(12)]);
var inst_39297__$1 = (state_39429[(2)]);
var inst_39298 = (inst_39297__$1 == null);
var state_39429__$1 = (function (){var statearr_39445 = state_39429;
(statearr_39445[(12)] = inst_39297__$1);

return statearr_39445;
})();
if(cljs.core.truth_(inst_39298)){
var statearr_39446_40834 = state_39429__$1;
(statearr_39446_40834[(1)] = (5));

} else {
var statearr_39447_40835 = state_39429__$1;
(statearr_39447_40835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (15))){
var inst_39308 = (state_39429[(14)]);
var inst_39309 = (state_39429[(15)]);
var inst_39306 = (state_39429[(16)]);
var inst_39307 = (state_39429[(17)]);
var inst_39324 = (state_39429[(2)]);
var inst_39325 = (inst_39309 + (1));
var tmp39441 = inst_39308;
var tmp39442 = inst_39306;
var tmp39443 = inst_39307;
var inst_39306__$1 = tmp39442;
var inst_39307__$1 = tmp39443;
var inst_39308__$1 = tmp39441;
var inst_39309__$1 = inst_39325;
var state_39429__$1 = (function (){var statearr_39448 = state_39429;
(statearr_39448[(18)] = inst_39324);

(statearr_39448[(14)] = inst_39308__$1);

(statearr_39448[(15)] = inst_39309__$1);

(statearr_39448[(16)] = inst_39306__$1);

(statearr_39448[(17)] = inst_39307__$1);

return statearr_39448;
})();
var statearr_39449_40836 = state_39429__$1;
(statearr_39449_40836[(2)] = null);

(statearr_39449_40836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (21))){
var inst_39351 = (state_39429[(2)]);
var state_39429__$1 = state_39429;
var statearr_39453_40838 = state_39429__$1;
(statearr_39453_40838[(2)] = inst_39351);

(statearr_39453_40838[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (31))){
var inst_39377 = (state_39429[(11)]);
var inst_39381 = done(null);
var inst_39382 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39377);
var state_39429__$1 = (function (){var statearr_39454 = state_39429;
(statearr_39454[(19)] = inst_39381);

return statearr_39454;
})();
var statearr_39455_40839 = state_39429__$1;
(statearr_39455_40839[(2)] = inst_39382);

(statearr_39455_40839[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (32))){
var inst_39372 = (state_39429[(9)]);
var inst_39369 = (state_39429[(20)]);
var inst_39371 = (state_39429[(21)]);
var inst_39370 = (state_39429[(10)]);
var inst_39384 = (state_39429[(2)]);
var inst_39385 = (inst_39372 + (1));
var tmp39450 = inst_39369;
var tmp39451 = inst_39371;
var tmp39452 = inst_39370;
var inst_39369__$1 = tmp39450;
var inst_39370__$1 = tmp39452;
var inst_39371__$1 = tmp39451;
var inst_39372__$1 = inst_39385;
var state_39429__$1 = (function (){var statearr_39456 = state_39429;
(statearr_39456[(9)] = inst_39372__$1);

(statearr_39456[(20)] = inst_39369__$1);

(statearr_39456[(21)] = inst_39371__$1);

(statearr_39456[(10)] = inst_39370__$1);

(statearr_39456[(22)] = inst_39384);

return statearr_39456;
})();
var statearr_39457_40842 = state_39429__$1;
(statearr_39457_40842[(2)] = null);

(statearr_39457_40842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (40))){
var inst_39397 = (state_39429[(23)]);
var inst_39401 = done(null);
var inst_39402 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39397);
var state_39429__$1 = (function (){var statearr_39458 = state_39429;
(statearr_39458[(24)] = inst_39401);

return statearr_39458;
})();
var statearr_39459_40850 = state_39429__$1;
(statearr_39459_40850[(2)] = inst_39402);

(statearr_39459_40850[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (33))){
var inst_39388 = (state_39429[(25)]);
var inst_39390 = cljs.core.chunked_seq_QMARK_(inst_39388);
var state_39429__$1 = state_39429;
if(inst_39390){
var statearr_39460_40854 = state_39429__$1;
(statearr_39460_40854[(1)] = (36));

} else {
var statearr_39461_40855 = state_39429__$1;
(statearr_39461_40855[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (13))){
var inst_39318 = (state_39429[(26)]);
var inst_39321 = cljs.core.async.close_BANG_(inst_39318);
var state_39429__$1 = state_39429;
var statearr_39462_40859 = state_39429__$1;
(statearr_39462_40859[(2)] = inst_39321);

(statearr_39462_40859[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (22))){
var inst_39341 = (state_39429[(8)]);
var inst_39344 = cljs.core.async.close_BANG_(inst_39341);
var state_39429__$1 = state_39429;
var statearr_39463_40863 = state_39429__$1;
(statearr_39463_40863[(2)] = inst_39344);

(statearr_39463_40863[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (36))){
var inst_39388 = (state_39429[(25)]);
var inst_39392 = cljs.core.chunk_first(inst_39388);
var inst_39393 = cljs.core.chunk_rest(inst_39388);
var inst_39394 = cljs.core.count(inst_39392);
var inst_39369 = inst_39393;
var inst_39370 = inst_39392;
var inst_39371 = inst_39394;
var inst_39372 = (0);
var state_39429__$1 = (function (){var statearr_39464 = state_39429;
(statearr_39464[(9)] = inst_39372);

(statearr_39464[(20)] = inst_39369);

(statearr_39464[(21)] = inst_39371);

(statearr_39464[(10)] = inst_39370);

return statearr_39464;
})();
var statearr_39465_40867 = state_39429__$1;
(statearr_39465_40867[(2)] = null);

(statearr_39465_40867[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (41))){
var inst_39388 = (state_39429[(25)]);
var inst_39404 = (state_39429[(2)]);
var inst_39405 = cljs.core.next(inst_39388);
var inst_39369 = inst_39405;
var inst_39370 = null;
var inst_39371 = (0);
var inst_39372 = (0);
var state_39429__$1 = (function (){var statearr_39466 = state_39429;
(statearr_39466[(9)] = inst_39372);

(statearr_39466[(20)] = inst_39369);

(statearr_39466[(21)] = inst_39371);

(statearr_39466[(10)] = inst_39370);

(statearr_39466[(27)] = inst_39404);

return statearr_39466;
})();
var statearr_39467_40872 = state_39429__$1;
(statearr_39467_40872[(2)] = null);

(statearr_39467_40872[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (43))){
var state_39429__$1 = state_39429;
var statearr_39468_40879 = state_39429__$1;
(statearr_39468_40879[(2)] = null);

(statearr_39468_40879[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (29))){
var inst_39413 = (state_39429[(2)]);
var state_39429__$1 = state_39429;
var statearr_39469_40880 = state_39429__$1;
(statearr_39469_40880[(2)] = inst_39413);

(statearr_39469_40880[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (44))){
var inst_39422 = (state_39429[(2)]);
var state_39429__$1 = (function (){var statearr_39470 = state_39429;
(statearr_39470[(28)] = inst_39422);

return statearr_39470;
})();
var statearr_39471_40887 = state_39429__$1;
(statearr_39471_40887[(2)] = null);

(statearr_39471_40887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (6))){
var inst_39361 = (state_39429[(29)]);
var inst_39360 = cljs.core.deref(cs);
var inst_39361__$1 = cljs.core.keys(inst_39360);
var inst_39362 = cljs.core.count(inst_39361__$1);
var inst_39363 = cljs.core.reset_BANG_(dctr,inst_39362);
var inst_39368 = cljs.core.seq(inst_39361__$1);
var inst_39369 = inst_39368;
var inst_39370 = null;
var inst_39371 = (0);
var inst_39372 = (0);
var state_39429__$1 = (function (){var statearr_39472 = state_39429;
(statearr_39472[(9)] = inst_39372);

(statearr_39472[(29)] = inst_39361__$1);

(statearr_39472[(20)] = inst_39369);

(statearr_39472[(21)] = inst_39371);

(statearr_39472[(10)] = inst_39370);

(statearr_39472[(30)] = inst_39363);

return statearr_39472;
})();
var statearr_39473_40888 = state_39429__$1;
(statearr_39473_40888[(2)] = null);

(statearr_39473_40888[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (28))){
var inst_39369 = (state_39429[(20)]);
var inst_39388 = (state_39429[(25)]);
var inst_39388__$1 = cljs.core.seq(inst_39369);
var state_39429__$1 = (function (){var statearr_39474 = state_39429;
(statearr_39474[(25)] = inst_39388__$1);

return statearr_39474;
})();
if(inst_39388__$1){
var statearr_39475_40889 = state_39429__$1;
(statearr_39475_40889[(1)] = (33));

} else {
var statearr_39476_40890 = state_39429__$1;
(statearr_39476_40890[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (25))){
var inst_39372 = (state_39429[(9)]);
var inst_39371 = (state_39429[(21)]);
var inst_39374 = (inst_39372 < inst_39371);
var inst_39375 = inst_39374;
var state_39429__$1 = state_39429;
if(cljs.core.truth_(inst_39375)){
var statearr_39477_40891 = state_39429__$1;
(statearr_39477_40891[(1)] = (27));

} else {
var statearr_39478_40892 = state_39429__$1;
(statearr_39478_40892[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (34))){
var state_39429__$1 = state_39429;
var statearr_39479_40893 = state_39429__$1;
(statearr_39479_40893[(2)] = null);

(statearr_39479_40893[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (17))){
var state_39429__$1 = state_39429;
var statearr_39480_40900 = state_39429__$1;
(statearr_39480_40900[(2)] = null);

(statearr_39480_40900[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (3))){
var inst_39427 = (state_39429[(2)]);
var state_39429__$1 = state_39429;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39429__$1,inst_39427);
} else {
if((state_val_39430 === (12))){
var inst_39356 = (state_39429[(2)]);
var state_39429__$1 = state_39429;
var statearr_39481_40901 = state_39429__$1;
(statearr_39481_40901[(2)] = inst_39356);

(statearr_39481_40901[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (2))){
var state_39429__$1 = state_39429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39429__$1,(4),ch);
} else {
if((state_val_39430 === (23))){
var state_39429__$1 = state_39429;
var statearr_39482_40902 = state_39429__$1;
(statearr_39482_40902[(2)] = null);

(statearr_39482_40902[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (35))){
var inst_39411 = (state_39429[(2)]);
var state_39429__$1 = state_39429;
var statearr_39483_40903 = state_39429__$1;
(statearr_39483_40903[(2)] = inst_39411);

(statearr_39483_40903[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (19))){
var inst_39328 = (state_39429[(7)]);
var inst_39332 = cljs.core.chunk_first(inst_39328);
var inst_39333 = cljs.core.chunk_rest(inst_39328);
var inst_39334 = cljs.core.count(inst_39332);
var inst_39306 = inst_39333;
var inst_39307 = inst_39332;
var inst_39308 = inst_39334;
var inst_39309 = (0);
var state_39429__$1 = (function (){var statearr_39484 = state_39429;
(statearr_39484[(14)] = inst_39308);

(statearr_39484[(15)] = inst_39309);

(statearr_39484[(16)] = inst_39306);

(statearr_39484[(17)] = inst_39307);

return statearr_39484;
})();
var statearr_39485_40904 = state_39429__$1;
(statearr_39485_40904[(2)] = null);

(statearr_39485_40904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (11))){
var inst_39328 = (state_39429[(7)]);
var inst_39306 = (state_39429[(16)]);
var inst_39328__$1 = cljs.core.seq(inst_39306);
var state_39429__$1 = (function (){var statearr_39486 = state_39429;
(statearr_39486[(7)] = inst_39328__$1);

return statearr_39486;
})();
if(inst_39328__$1){
var statearr_39487_40911 = state_39429__$1;
(statearr_39487_40911[(1)] = (16));

} else {
var statearr_39488_40912 = state_39429__$1;
(statearr_39488_40912[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (9))){
var inst_39358 = (state_39429[(2)]);
var state_39429__$1 = state_39429;
var statearr_39489_40913 = state_39429__$1;
(statearr_39489_40913[(2)] = inst_39358);

(statearr_39489_40913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (5))){
var inst_39304 = cljs.core.deref(cs);
var inst_39305 = cljs.core.seq(inst_39304);
var inst_39306 = inst_39305;
var inst_39307 = null;
var inst_39308 = (0);
var inst_39309 = (0);
var state_39429__$1 = (function (){var statearr_39490 = state_39429;
(statearr_39490[(14)] = inst_39308);

(statearr_39490[(15)] = inst_39309);

(statearr_39490[(16)] = inst_39306);

(statearr_39490[(17)] = inst_39307);

return statearr_39490;
})();
var statearr_39491_40914 = state_39429__$1;
(statearr_39491_40914[(2)] = null);

(statearr_39491_40914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (14))){
var state_39429__$1 = state_39429;
var statearr_39492_40915 = state_39429__$1;
(statearr_39492_40915[(2)] = null);

(statearr_39492_40915[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (45))){
var inst_39419 = (state_39429[(2)]);
var state_39429__$1 = state_39429;
var statearr_39493_40916 = state_39429__$1;
(statearr_39493_40916[(2)] = inst_39419);

(statearr_39493_40916[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (26))){
var inst_39361 = (state_39429[(29)]);
var inst_39415 = (state_39429[(2)]);
var inst_39416 = cljs.core.seq(inst_39361);
var state_39429__$1 = (function (){var statearr_39494 = state_39429;
(statearr_39494[(31)] = inst_39415);

return statearr_39494;
})();
if(inst_39416){
var statearr_39495_40917 = state_39429__$1;
(statearr_39495_40917[(1)] = (42));

} else {
var statearr_39496_40918 = state_39429__$1;
(statearr_39496_40918[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (16))){
var inst_39328 = (state_39429[(7)]);
var inst_39330 = cljs.core.chunked_seq_QMARK_(inst_39328);
var state_39429__$1 = state_39429;
if(inst_39330){
var statearr_39497_40919 = state_39429__$1;
(statearr_39497_40919[(1)] = (19));

} else {
var statearr_39498_40926 = state_39429__$1;
(statearr_39498_40926[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (38))){
var inst_39408 = (state_39429[(2)]);
var state_39429__$1 = state_39429;
var statearr_39499_40927 = state_39429__$1;
(statearr_39499_40927[(2)] = inst_39408);

(statearr_39499_40927[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (30))){
var state_39429__$1 = state_39429;
var statearr_39500_40928 = state_39429__$1;
(statearr_39500_40928[(2)] = null);

(statearr_39500_40928[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (10))){
var inst_39309 = (state_39429[(15)]);
var inst_39307 = (state_39429[(17)]);
var inst_39317 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39307,inst_39309);
var inst_39318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39317,(0),null);
var inst_39319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39317,(1),null);
var state_39429__$1 = (function (){var statearr_39501 = state_39429;
(statearr_39501[(26)] = inst_39318);

return statearr_39501;
})();
if(cljs.core.truth_(inst_39319)){
var statearr_39502_40929 = state_39429__$1;
(statearr_39502_40929[(1)] = (13));

} else {
var statearr_39503_40930 = state_39429__$1;
(statearr_39503_40930[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (18))){
var inst_39354 = (state_39429[(2)]);
var state_39429__$1 = state_39429;
var statearr_39504_40934 = state_39429__$1;
(statearr_39504_40934[(2)] = inst_39354);

(statearr_39504_40934[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (42))){
var state_39429__$1 = state_39429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39429__$1,(45),dchan);
} else {
if((state_val_39430 === (37))){
var inst_39397 = (state_39429[(23)]);
var inst_39297 = (state_39429[(12)]);
var inst_39388 = (state_39429[(25)]);
var inst_39397__$1 = cljs.core.first(inst_39388);
var inst_39398 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39397__$1,inst_39297,done);
var state_39429__$1 = (function (){var statearr_39505 = state_39429;
(statearr_39505[(23)] = inst_39397__$1);

return statearr_39505;
})();
if(cljs.core.truth_(inst_39398)){
var statearr_39506_40938 = state_39429__$1;
(statearr_39506_40938[(1)] = (39));

} else {
var statearr_39507_40939 = state_39429__$1;
(statearr_39507_40939[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39430 === (8))){
var inst_39308 = (state_39429[(14)]);
var inst_39309 = (state_39429[(15)]);
var inst_39311 = (inst_39309 < inst_39308);
var inst_39312 = inst_39311;
var state_39429__$1 = state_39429;
if(cljs.core.truth_(inst_39312)){
var statearr_39508_40942 = state_39429__$1;
(statearr_39508_40942[(1)] = (10));

} else {
var statearr_39509_40943 = state_39429__$1;
(statearr_39509_40943[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__38734__auto__ = null;
var cljs$core$async$mult_$_state_machine__38734__auto____0 = (function (){
var statearr_39510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39510[(0)] = cljs$core$async$mult_$_state_machine__38734__auto__);

(statearr_39510[(1)] = (1));

return statearr_39510;
});
var cljs$core$async$mult_$_state_machine__38734__auto____1 = (function (state_39429){
while(true){
var ret_value__38735__auto__ = (function (){try{while(true){
var result__38736__auto__ = switch__38733__auto__(state_39429);
if(cljs.core.keyword_identical_QMARK_(result__38736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38736__auto__;
}
break;
}
}catch (e39511){if((e39511 instanceof Object)){
var ex__38737__auto__ = e39511;
var statearr_39512_40944 = state_39429;
(statearr_39512_40944[(5)] = ex__38737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39511;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40945 = state_39429;
state_39429 = G__40945;
continue;
} else {
return ret_value__38735__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38734__auto__ = function(state_39429){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38734__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38734__auto____1.call(this,state_39429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38734__auto____0;
cljs$core$async$mult_$_state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38734__auto____1;
return cljs$core$async$mult_$_state_machine__38734__auto__;
})()
})();
var state__38834__auto__ = (function (){var statearr_39513 = (f__38833__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38833__auto__.cljs$core$IFn$_invoke$arity$0() : f__38833__auto__.call(null));
(statearr_39513[(6)] = c__38832__auto___40811);

return statearr_39513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38834__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__39515 = arguments.length;
switch (G__39515) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40963 = arguments.length;
var i__4790__auto___40964 = (0);
while(true){
if((i__4790__auto___40964 < len__4789__auto___40963)){
args__4795__auto__.push((arguments[i__4790__auto___40964]));

var G__40965 = (i__4790__auto___40964 + (1));
i__4790__auto___40964 = G__40965;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39520){
var map__39521 = p__39520;
var map__39521__$1 = (((((!((map__39521 == null))))?(((((map__39521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39521):map__39521);
var opts = map__39521__$1;
var statearr_39523_40966 = state;
(statearr_39523_40966[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_39524_40967 = state;
(statearr_39524_40967[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_39525_40968 = state;
(statearr_39525_40968[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39516){
var G__39517 = cljs.core.first(seq39516);
var seq39516__$1 = cljs.core.next(seq39516);
var G__39518 = cljs.core.first(seq39516__$1);
var seq39516__$2 = cljs.core.next(seq39516__$1);
var G__39519 = cljs.core.first(seq39516__$2);
var seq39516__$3 = cljs.core.next(seq39516__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39517,G__39518,G__39519,seq39516__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39526 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39526 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39527){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta39527 = meta39527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39528,meta39527__$1){
var self__ = this;
var _39528__$1 = this;
return (new cljs.core.async.t_cljs$core$async39526(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39527__$1));
}));

(cljs.core.async.t_cljs$core$async39526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39528){
var self__ = this;
var _39528__$1 = this;
return self__.meta39527;
}));

(cljs.core.async.t_cljs$core$async39526.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39526.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async39526.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39526.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39526.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39526.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39526.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39526.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta39527","meta39527",-626072693,null)], null);
}));

(cljs.core.async.t_cljs$core$async39526.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39526");

(cljs.core.async.t_cljs$core$async39526.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async39526");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39526.
 */
cljs.core.async.__GT_t_cljs$core$async39526 = (function cljs$core$async$mix_$___GT_t_cljs$core$async39526(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39527){
return (new cljs.core.async.t_cljs$core$async39526(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39527));
});

}

return (new cljs.core.async.t_cljs$core$async39526(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38832__auto___40979 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38833__auto__ = (function (){var switch__38733__auto__ = (function (state_39630){
var state_val_39631 = (state_39630[(1)]);
if((state_val_39631 === (7))){
var inst_39545 = (state_39630[(2)]);
var state_39630__$1 = state_39630;
var statearr_39632_40984 = state_39630__$1;
(statearr_39632_40984[(2)] = inst_39545);

(statearr_39632_40984[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (20))){
var inst_39557 = (state_39630[(7)]);
var state_39630__$1 = state_39630;
var statearr_39633_40989 = state_39630__$1;
(statearr_39633_40989[(2)] = inst_39557);

(statearr_39633_40989[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (27))){
var state_39630__$1 = state_39630;
var statearr_39634_40992 = state_39630__$1;
(statearr_39634_40992[(2)] = null);

(statearr_39634_40992[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (1))){
var inst_39532 = (state_39630[(8)]);
var inst_39532__$1 = calc_state();
var inst_39534 = (inst_39532__$1 == null);
var inst_39535 = cljs.core.not(inst_39534);
var state_39630__$1 = (function (){var statearr_39635 = state_39630;
(statearr_39635[(8)] = inst_39532__$1);

return statearr_39635;
})();
if(inst_39535){
var statearr_39636_41001 = state_39630__$1;
(statearr_39636_41001[(1)] = (2));

} else {
var statearr_39637_41002 = state_39630__$1;
(statearr_39637_41002[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (24))){
var inst_39604 = (state_39630[(9)]);
var inst_39581 = (state_39630[(10)]);
var inst_39590 = (state_39630[(11)]);
var inst_39604__$1 = (inst_39581.cljs$core$IFn$_invoke$arity$1 ? inst_39581.cljs$core$IFn$_invoke$arity$1(inst_39590) : inst_39581.call(null,inst_39590));
var state_39630__$1 = (function (){var statearr_39638 = state_39630;
(statearr_39638[(9)] = inst_39604__$1);

return statearr_39638;
})();
if(cljs.core.truth_(inst_39604__$1)){
var statearr_39639_41004 = state_39630__$1;
(statearr_39639_41004[(1)] = (29));

} else {
var statearr_39640_41005 = state_39630__$1;
(statearr_39640_41005[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (4))){
var inst_39548 = (state_39630[(2)]);
var state_39630__$1 = state_39630;
if(cljs.core.truth_(inst_39548)){
var statearr_39641_41006 = state_39630__$1;
(statearr_39641_41006[(1)] = (8));

} else {
var statearr_39642_41007 = state_39630__$1;
(statearr_39642_41007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (15))){
var inst_39575 = (state_39630[(2)]);
var state_39630__$1 = state_39630;
if(cljs.core.truth_(inst_39575)){
var statearr_39643_41008 = state_39630__$1;
(statearr_39643_41008[(1)] = (19));

} else {
var statearr_39644_41009 = state_39630__$1;
(statearr_39644_41009[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (21))){
var inst_39580 = (state_39630[(12)]);
var inst_39580__$1 = (state_39630[(2)]);
var inst_39581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39580__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39580__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39580__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39630__$1 = (function (){var statearr_39645 = state_39630;
(statearr_39645[(12)] = inst_39580__$1);

(statearr_39645[(10)] = inst_39581);

(statearr_39645[(13)] = inst_39582);

return statearr_39645;
})();
return cljs.core.async.ioc_alts_BANG_(state_39630__$1,(22),inst_39583);
} else {
if((state_val_39631 === (31))){
var inst_39612 = (state_39630[(2)]);
var state_39630__$1 = state_39630;
if(cljs.core.truth_(inst_39612)){
var statearr_39646_41011 = state_39630__$1;
(statearr_39646_41011[(1)] = (32));

} else {
var statearr_39647_41012 = state_39630__$1;
(statearr_39647_41012[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (32))){
var inst_39589 = (state_39630[(14)]);
var state_39630__$1 = state_39630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39630__$1,(35),out,inst_39589);
} else {
if((state_val_39631 === (33))){
var inst_39580 = (state_39630[(12)]);
var inst_39557 = inst_39580;
var state_39630__$1 = (function (){var statearr_39648 = state_39630;
(statearr_39648[(7)] = inst_39557);

return statearr_39648;
})();
var statearr_39649_41019 = state_39630__$1;
(statearr_39649_41019[(2)] = null);

(statearr_39649_41019[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (13))){
var inst_39557 = (state_39630[(7)]);
var inst_39564 = inst_39557.cljs$lang$protocol_mask$partition0$;
var inst_39565 = (inst_39564 & (64));
var inst_39566 = inst_39557.cljs$core$ISeq$;
var inst_39567 = (cljs.core.PROTOCOL_SENTINEL === inst_39566);
var inst_39568 = ((inst_39565) || (inst_39567));
var state_39630__$1 = state_39630;
if(cljs.core.truth_(inst_39568)){
var statearr_39650_41025 = state_39630__$1;
(statearr_39650_41025[(1)] = (16));

} else {
var statearr_39651_41030 = state_39630__$1;
(statearr_39651_41030[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (22))){
var inst_39589 = (state_39630[(14)]);
var inst_39590 = (state_39630[(11)]);
var inst_39588 = (state_39630[(2)]);
var inst_39589__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39588,(0),null);
var inst_39590__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39588,(1),null);
var inst_39591 = (inst_39589__$1 == null);
var inst_39592 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39590__$1,change);
var inst_39593 = ((inst_39591) || (inst_39592));
var state_39630__$1 = (function (){var statearr_39652 = state_39630;
(statearr_39652[(14)] = inst_39589__$1);

(statearr_39652[(11)] = inst_39590__$1);

return statearr_39652;
})();
if(cljs.core.truth_(inst_39593)){
var statearr_39653_41034 = state_39630__$1;
(statearr_39653_41034[(1)] = (23));

} else {
var statearr_39654_41035 = state_39630__$1;
(statearr_39654_41035[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (36))){
var inst_39580 = (state_39630[(12)]);
var inst_39557 = inst_39580;
var state_39630__$1 = (function (){var statearr_39655 = state_39630;
(statearr_39655[(7)] = inst_39557);

return statearr_39655;
})();
var statearr_39656_41040 = state_39630__$1;
(statearr_39656_41040[(2)] = null);

(statearr_39656_41040[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (29))){
var inst_39604 = (state_39630[(9)]);
var state_39630__$1 = state_39630;
var statearr_39657_41042 = state_39630__$1;
(statearr_39657_41042[(2)] = inst_39604);

(statearr_39657_41042[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (6))){
var state_39630__$1 = state_39630;
var statearr_39658_41047 = state_39630__$1;
(statearr_39658_41047[(2)] = false);

(statearr_39658_41047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (28))){
var inst_39600 = (state_39630[(2)]);
var inst_39601 = calc_state();
var inst_39557 = inst_39601;
var state_39630__$1 = (function (){var statearr_39659 = state_39630;
(statearr_39659[(15)] = inst_39600);

(statearr_39659[(7)] = inst_39557);

return statearr_39659;
})();
var statearr_39660_41057 = state_39630__$1;
(statearr_39660_41057[(2)] = null);

(statearr_39660_41057[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (25))){
var inst_39626 = (state_39630[(2)]);
var state_39630__$1 = state_39630;
var statearr_39661_41060 = state_39630__$1;
(statearr_39661_41060[(2)] = inst_39626);

(statearr_39661_41060[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (34))){
var inst_39624 = (state_39630[(2)]);
var state_39630__$1 = state_39630;
var statearr_39662_41062 = state_39630__$1;
(statearr_39662_41062[(2)] = inst_39624);

(statearr_39662_41062[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (17))){
var state_39630__$1 = state_39630;
var statearr_39663_41064 = state_39630__$1;
(statearr_39663_41064[(2)] = false);

(statearr_39663_41064[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (3))){
var state_39630__$1 = state_39630;
var statearr_39664_41065 = state_39630__$1;
(statearr_39664_41065[(2)] = false);

(statearr_39664_41065[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (12))){
var inst_39628 = (state_39630[(2)]);
var state_39630__$1 = state_39630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39630__$1,inst_39628);
} else {
if((state_val_39631 === (2))){
var inst_39532 = (state_39630[(8)]);
var inst_39537 = inst_39532.cljs$lang$protocol_mask$partition0$;
var inst_39538 = (inst_39537 & (64));
var inst_39539 = inst_39532.cljs$core$ISeq$;
var inst_39540 = (cljs.core.PROTOCOL_SENTINEL === inst_39539);
var inst_39541 = ((inst_39538) || (inst_39540));
var state_39630__$1 = state_39630;
if(cljs.core.truth_(inst_39541)){
var statearr_39665_41069 = state_39630__$1;
(statearr_39665_41069[(1)] = (5));

} else {
var statearr_39666_41070 = state_39630__$1;
(statearr_39666_41070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (23))){
var inst_39589 = (state_39630[(14)]);
var inst_39595 = (inst_39589 == null);
var state_39630__$1 = state_39630;
if(cljs.core.truth_(inst_39595)){
var statearr_39667_41072 = state_39630__$1;
(statearr_39667_41072[(1)] = (26));

} else {
var statearr_39668_41074 = state_39630__$1;
(statearr_39668_41074[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (35))){
var inst_39615 = (state_39630[(2)]);
var state_39630__$1 = state_39630;
if(cljs.core.truth_(inst_39615)){
var statearr_39669_41076 = state_39630__$1;
(statearr_39669_41076[(1)] = (36));

} else {
var statearr_39670_41077 = state_39630__$1;
(statearr_39670_41077[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (19))){
var inst_39557 = (state_39630[(7)]);
var inst_39577 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_39557);
var state_39630__$1 = state_39630;
var statearr_39671_41079 = state_39630__$1;
(statearr_39671_41079[(2)] = inst_39577);

(statearr_39671_41079[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (11))){
var inst_39557 = (state_39630[(7)]);
var inst_39561 = (inst_39557 == null);
var inst_39562 = cljs.core.not(inst_39561);
var state_39630__$1 = state_39630;
if(inst_39562){
var statearr_39672_41080 = state_39630__$1;
(statearr_39672_41080[(1)] = (13));

} else {
var statearr_39673_41088 = state_39630__$1;
(statearr_39673_41088[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (9))){
var inst_39532 = (state_39630[(8)]);
var state_39630__$1 = state_39630;
var statearr_39674_41089 = state_39630__$1;
(statearr_39674_41089[(2)] = inst_39532);

(statearr_39674_41089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (5))){
var state_39630__$1 = state_39630;
var statearr_39675_41090 = state_39630__$1;
(statearr_39675_41090[(2)] = true);

(statearr_39675_41090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (14))){
var state_39630__$1 = state_39630;
var statearr_39676_41091 = state_39630__$1;
(statearr_39676_41091[(2)] = false);

(statearr_39676_41091[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (26))){
var inst_39590 = (state_39630[(11)]);
var inst_39597 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_39590);
var state_39630__$1 = state_39630;
var statearr_39677_41092 = state_39630__$1;
(statearr_39677_41092[(2)] = inst_39597);

(statearr_39677_41092[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (16))){
var state_39630__$1 = state_39630;
var statearr_39678_41093 = state_39630__$1;
(statearr_39678_41093[(2)] = true);

(statearr_39678_41093[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (38))){
var inst_39620 = (state_39630[(2)]);
var state_39630__$1 = state_39630;
var statearr_39679_41094 = state_39630__$1;
(statearr_39679_41094[(2)] = inst_39620);

(statearr_39679_41094[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (30))){
var inst_39581 = (state_39630[(10)]);
var inst_39590 = (state_39630[(11)]);
var inst_39582 = (state_39630[(13)]);
var inst_39607 = cljs.core.empty_QMARK_(inst_39581);
var inst_39608 = (inst_39582.cljs$core$IFn$_invoke$arity$1 ? inst_39582.cljs$core$IFn$_invoke$arity$1(inst_39590) : inst_39582.call(null,inst_39590));
var inst_39609 = cljs.core.not(inst_39608);
var inst_39610 = ((inst_39607) && (inst_39609));
var state_39630__$1 = state_39630;
var statearr_39680_41100 = state_39630__$1;
(statearr_39680_41100[(2)] = inst_39610);

(statearr_39680_41100[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (10))){
var inst_39532 = (state_39630[(8)]);
var inst_39553 = (state_39630[(2)]);
var inst_39554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39553,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39553,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39553,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39557 = inst_39532;
var state_39630__$1 = (function (){var statearr_39681 = state_39630;
(statearr_39681[(16)] = inst_39556);

(statearr_39681[(17)] = inst_39555);

(statearr_39681[(7)] = inst_39557);

(statearr_39681[(18)] = inst_39554);

return statearr_39681;
})();
var statearr_39682_41101 = state_39630__$1;
(statearr_39682_41101[(2)] = null);

(statearr_39682_41101[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (18))){
var inst_39572 = (state_39630[(2)]);
var state_39630__$1 = state_39630;
var statearr_39683_41105 = state_39630__$1;
(statearr_39683_41105[(2)] = inst_39572);

(statearr_39683_41105[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (37))){
var state_39630__$1 = state_39630;
var statearr_39684_41106 = state_39630__$1;
(statearr_39684_41106[(2)] = null);

(statearr_39684_41106[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39631 === (8))){
var inst_39532 = (state_39630[(8)]);
var inst_39550 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_39532);
var state_39630__$1 = state_39630;
var statearr_39685_41107 = state_39630__$1;
(statearr_39685_41107[(2)] = inst_39550);

(statearr_39685_41107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__38734__auto__ = null;
var cljs$core$async$mix_$_state_machine__38734__auto____0 = (function (){
var statearr_39686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39686[(0)] = cljs$core$async$mix_$_state_machine__38734__auto__);

(statearr_39686[(1)] = (1));

return statearr_39686;
});
var cljs$core$async$mix_$_state_machine__38734__auto____1 = (function (state_39630){
while(true){
var ret_value__38735__auto__ = (function (){try{while(true){
var result__38736__auto__ = switch__38733__auto__(state_39630);
if(cljs.core.keyword_identical_QMARK_(result__38736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38736__auto__;
}
break;
}
}catch (e39687){if((e39687 instanceof Object)){
var ex__38737__auto__ = e39687;
var statearr_39688_41115 = state_39630;
(statearr_39688_41115[(5)] = ex__38737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39687;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41118 = state_39630;
state_39630 = G__41118;
continue;
} else {
return ret_value__38735__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38734__auto__ = function(state_39630){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38734__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38734__auto____1.call(this,state_39630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38734__auto____0;
cljs$core$async$mix_$_state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38734__auto____1;
return cljs$core$async$mix_$_state_machine__38734__auto__;
})()
})();
var state__38834__auto__ = (function (){var statearr_39689 = (f__38833__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38833__auto__.cljs$core$IFn$_invoke$arity$0() : f__38833__auto__.call(null));
(statearr_39689[(6)] = c__38832__auto___40979);

return statearr_39689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38834__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__39691 = arguments.length;
switch (G__39691) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__39694 = arguments.length;
switch (G__39694) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__39692_SHARP_){
if(cljs.core.truth_((p1__39692_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__39692_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__39692_SHARP_.call(null,topic)))){
return p1__39692_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__39692_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39695 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39695 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39696){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39696 = meta39696;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39697,meta39696__$1){
var self__ = this;
var _39697__$1 = this;
return (new cljs.core.async.t_cljs$core$async39695(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39696__$1));
}));

(cljs.core.async.t_cljs$core$async39695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39697){
var self__ = this;
var _39697__$1 = this;
return self__.meta39696;
}));

(cljs.core.async.t_cljs$core$async39695.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39695.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async39695.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39695.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async39695.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async39695.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async39695.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async39695.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39696","meta39696",422562071,null)], null);
}));

(cljs.core.async.t_cljs$core$async39695.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39695.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39695");

(cljs.core.async.t_cljs$core$async39695.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async39695");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39695.
 */
cljs.core.async.__GT_t_cljs$core$async39695 = (function cljs$core$async$__GT_t_cljs$core$async39695(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39696){
return (new cljs.core.async.t_cljs$core$async39695(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39696));
});

}

return (new cljs.core.async.t_cljs$core$async39695(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38832__auto___41231 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38833__auto__ = (function (){var switch__38733__auto__ = (function (state_39769){
var state_val_39770 = (state_39769[(1)]);
if((state_val_39770 === (7))){
var inst_39765 = (state_39769[(2)]);
var state_39769__$1 = state_39769;
var statearr_39771_41232 = state_39769__$1;
(statearr_39771_41232[(2)] = inst_39765);

(statearr_39771_41232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (20))){
var state_39769__$1 = state_39769;
var statearr_39772_41233 = state_39769__$1;
(statearr_39772_41233[(2)] = null);

(statearr_39772_41233[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (1))){
var state_39769__$1 = state_39769;
var statearr_39773_41234 = state_39769__$1;
(statearr_39773_41234[(2)] = null);

(statearr_39773_41234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (24))){
var inst_39748 = (state_39769[(7)]);
var inst_39757 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_39748);
var state_39769__$1 = state_39769;
var statearr_39774_41241 = state_39769__$1;
(statearr_39774_41241[(2)] = inst_39757);

(statearr_39774_41241[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (4))){
var inst_39700 = (state_39769[(8)]);
var inst_39700__$1 = (state_39769[(2)]);
var inst_39701 = (inst_39700__$1 == null);
var state_39769__$1 = (function (){var statearr_39775 = state_39769;
(statearr_39775[(8)] = inst_39700__$1);

return statearr_39775;
})();
if(cljs.core.truth_(inst_39701)){
var statearr_39776_41247 = state_39769__$1;
(statearr_39776_41247[(1)] = (5));

} else {
var statearr_39777_41248 = state_39769__$1;
(statearr_39777_41248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (15))){
var inst_39742 = (state_39769[(2)]);
var state_39769__$1 = state_39769;
var statearr_39778_41254 = state_39769__$1;
(statearr_39778_41254[(2)] = inst_39742);

(statearr_39778_41254[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (21))){
var inst_39762 = (state_39769[(2)]);
var state_39769__$1 = (function (){var statearr_39779 = state_39769;
(statearr_39779[(9)] = inst_39762);

return statearr_39779;
})();
var statearr_39780_41263 = state_39769__$1;
(statearr_39780_41263[(2)] = null);

(statearr_39780_41263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (13))){
var inst_39724 = (state_39769[(10)]);
var inst_39726 = cljs.core.chunked_seq_QMARK_(inst_39724);
var state_39769__$1 = state_39769;
if(inst_39726){
var statearr_39781_41271 = state_39769__$1;
(statearr_39781_41271[(1)] = (16));

} else {
var statearr_39782_41272 = state_39769__$1;
(statearr_39782_41272[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (22))){
var inst_39754 = (state_39769[(2)]);
var state_39769__$1 = state_39769;
if(cljs.core.truth_(inst_39754)){
var statearr_39783_41280 = state_39769__$1;
(statearr_39783_41280[(1)] = (23));

} else {
var statearr_39784_41281 = state_39769__$1;
(statearr_39784_41281[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (6))){
var inst_39700 = (state_39769[(8)]);
var inst_39748 = (state_39769[(7)]);
var inst_39750 = (state_39769[(11)]);
var inst_39748__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_39700) : topic_fn.call(null,inst_39700));
var inst_39749 = cljs.core.deref(mults);
var inst_39750__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39749,inst_39748__$1);
var state_39769__$1 = (function (){var statearr_39785 = state_39769;
(statearr_39785[(7)] = inst_39748__$1);

(statearr_39785[(11)] = inst_39750__$1);

return statearr_39785;
})();
if(cljs.core.truth_(inst_39750__$1)){
var statearr_39786_41296 = state_39769__$1;
(statearr_39786_41296[(1)] = (19));

} else {
var statearr_39787_41297 = state_39769__$1;
(statearr_39787_41297[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (25))){
var inst_39759 = (state_39769[(2)]);
var state_39769__$1 = state_39769;
var statearr_39788_41302 = state_39769__$1;
(statearr_39788_41302[(2)] = inst_39759);

(statearr_39788_41302[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (17))){
var inst_39724 = (state_39769[(10)]);
var inst_39733 = cljs.core.first(inst_39724);
var inst_39734 = cljs.core.async.muxch_STAR_(inst_39733);
var inst_39735 = cljs.core.async.close_BANG_(inst_39734);
var inst_39736 = cljs.core.next(inst_39724);
var inst_39710 = inst_39736;
var inst_39711 = null;
var inst_39712 = (0);
var inst_39713 = (0);
var state_39769__$1 = (function (){var statearr_39789 = state_39769;
(statearr_39789[(12)] = inst_39711);

(statearr_39789[(13)] = inst_39713);

(statearr_39789[(14)] = inst_39712);

(statearr_39789[(15)] = inst_39710);

(statearr_39789[(16)] = inst_39735);

return statearr_39789;
})();
var statearr_39790_41305 = state_39769__$1;
(statearr_39790_41305[(2)] = null);

(statearr_39790_41305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (3))){
var inst_39767 = (state_39769[(2)]);
var state_39769__$1 = state_39769;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39769__$1,inst_39767);
} else {
if((state_val_39770 === (12))){
var inst_39744 = (state_39769[(2)]);
var state_39769__$1 = state_39769;
var statearr_39791_41306 = state_39769__$1;
(statearr_39791_41306[(2)] = inst_39744);

(statearr_39791_41306[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (2))){
var state_39769__$1 = state_39769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39769__$1,(4),ch);
} else {
if((state_val_39770 === (23))){
var state_39769__$1 = state_39769;
var statearr_39792_41309 = state_39769__$1;
(statearr_39792_41309[(2)] = null);

(statearr_39792_41309[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (19))){
var inst_39700 = (state_39769[(8)]);
var inst_39750 = (state_39769[(11)]);
var inst_39752 = cljs.core.async.muxch_STAR_(inst_39750);
var state_39769__$1 = state_39769;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39769__$1,(22),inst_39752,inst_39700);
} else {
if((state_val_39770 === (11))){
var inst_39710 = (state_39769[(15)]);
var inst_39724 = (state_39769[(10)]);
var inst_39724__$1 = cljs.core.seq(inst_39710);
var state_39769__$1 = (function (){var statearr_39793 = state_39769;
(statearr_39793[(10)] = inst_39724__$1);

return statearr_39793;
})();
if(inst_39724__$1){
var statearr_39794_41310 = state_39769__$1;
(statearr_39794_41310[(1)] = (13));

} else {
var statearr_39795_41311 = state_39769__$1;
(statearr_39795_41311[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (9))){
var inst_39746 = (state_39769[(2)]);
var state_39769__$1 = state_39769;
var statearr_39796_41312 = state_39769__$1;
(statearr_39796_41312[(2)] = inst_39746);

(statearr_39796_41312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (5))){
var inst_39707 = cljs.core.deref(mults);
var inst_39708 = cljs.core.vals(inst_39707);
var inst_39709 = cljs.core.seq(inst_39708);
var inst_39710 = inst_39709;
var inst_39711 = null;
var inst_39712 = (0);
var inst_39713 = (0);
var state_39769__$1 = (function (){var statearr_39797 = state_39769;
(statearr_39797[(12)] = inst_39711);

(statearr_39797[(13)] = inst_39713);

(statearr_39797[(14)] = inst_39712);

(statearr_39797[(15)] = inst_39710);

return statearr_39797;
})();
var statearr_39798_41314 = state_39769__$1;
(statearr_39798_41314[(2)] = null);

(statearr_39798_41314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (14))){
var state_39769__$1 = state_39769;
var statearr_39802_41316 = state_39769__$1;
(statearr_39802_41316[(2)] = null);

(statearr_39802_41316[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (16))){
var inst_39724 = (state_39769[(10)]);
var inst_39728 = cljs.core.chunk_first(inst_39724);
var inst_39729 = cljs.core.chunk_rest(inst_39724);
var inst_39730 = cljs.core.count(inst_39728);
var inst_39710 = inst_39729;
var inst_39711 = inst_39728;
var inst_39712 = inst_39730;
var inst_39713 = (0);
var state_39769__$1 = (function (){var statearr_39803 = state_39769;
(statearr_39803[(12)] = inst_39711);

(statearr_39803[(13)] = inst_39713);

(statearr_39803[(14)] = inst_39712);

(statearr_39803[(15)] = inst_39710);

return statearr_39803;
})();
var statearr_39804_41330 = state_39769__$1;
(statearr_39804_41330[(2)] = null);

(statearr_39804_41330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (10))){
var inst_39711 = (state_39769[(12)]);
var inst_39713 = (state_39769[(13)]);
var inst_39712 = (state_39769[(14)]);
var inst_39710 = (state_39769[(15)]);
var inst_39718 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39711,inst_39713);
var inst_39719 = cljs.core.async.muxch_STAR_(inst_39718);
var inst_39720 = cljs.core.async.close_BANG_(inst_39719);
var inst_39721 = (inst_39713 + (1));
var tmp39799 = inst_39711;
var tmp39800 = inst_39712;
var tmp39801 = inst_39710;
var inst_39710__$1 = tmp39801;
var inst_39711__$1 = tmp39799;
var inst_39712__$1 = tmp39800;
var inst_39713__$1 = inst_39721;
var state_39769__$1 = (function (){var statearr_39805 = state_39769;
(statearr_39805[(12)] = inst_39711__$1);

(statearr_39805[(13)] = inst_39713__$1);

(statearr_39805[(14)] = inst_39712__$1);

(statearr_39805[(15)] = inst_39710__$1);

(statearr_39805[(17)] = inst_39720);

return statearr_39805;
})();
var statearr_39806_41342 = state_39769__$1;
(statearr_39806_41342[(2)] = null);

(statearr_39806_41342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (18))){
var inst_39739 = (state_39769[(2)]);
var state_39769__$1 = state_39769;
var statearr_39807_41343 = state_39769__$1;
(statearr_39807_41343[(2)] = inst_39739);

(statearr_39807_41343[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (8))){
var inst_39713 = (state_39769[(13)]);
var inst_39712 = (state_39769[(14)]);
var inst_39715 = (inst_39713 < inst_39712);
var inst_39716 = inst_39715;
var state_39769__$1 = state_39769;
if(cljs.core.truth_(inst_39716)){
var statearr_39808_41344 = state_39769__$1;
(statearr_39808_41344[(1)] = (10));

} else {
var statearr_39809_41345 = state_39769__$1;
(statearr_39809_41345[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38734__auto__ = null;
var cljs$core$async$state_machine__38734__auto____0 = (function (){
var statearr_39810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39810[(0)] = cljs$core$async$state_machine__38734__auto__);

(statearr_39810[(1)] = (1));

return statearr_39810;
});
var cljs$core$async$state_machine__38734__auto____1 = (function (state_39769){
while(true){
var ret_value__38735__auto__ = (function (){try{while(true){
var result__38736__auto__ = switch__38733__auto__(state_39769);
if(cljs.core.keyword_identical_QMARK_(result__38736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38736__auto__;
}
break;
}
}catch (e39811){if((e39811 instanceof Object)){
var ex__38737__auto__ = e39811;
var statearr_39812_41347 = state_39769;
(statearr_39812_41347[(5)] = ex__38737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39811;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41348 = state_39769;
state_39769 = G__41348;
continue;
} else {
return ret_value__38735__auto__;
}
break;
}
});
cljs$core$async$state_machine__38734__auto__ = function(state_39769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38734__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38734__auto____1.call(this,state_39769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38734__auto____0;
cljs$core$async$state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38734__auto____1;
return cljs$core$async$state_machine__38734__auto__;
})()
})();
var state__38834__auto__ = (function (){var statearr_39813 = (f__38833__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38833__auto__.cljs$core$IFn$_invoke$arity$0() : f__38833__auto__.call(null));
(statearr_39813[(6)] = c__38832__auto___41231);

return statearr_39813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38834__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__39815 = arguments.length;
switch (G__39815) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__39817 = arguments.length;
switch (G__39817) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__39819 = arguments.length;
switch (G__39819) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__38832__auto___41361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38833__auto__ = (function (){var switch__38733__auto__ = (function (state_39858){
var state_val_39859 = (state_39858[(1)]);
if((state_val_39859 === (7))){
var state_39858__$1 = state_39858;
var statearr_39860_41362 = state_39858__$1;
(statearr_39860_41362[(2)] = null);

(statearr_39860_41362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (1))){
var state_39858__$1 = state_39858;
var statearr_39861_41363 = state_39858__$1;
(statearr_39861_41363[(2)] = null);

(statearr_39861_41363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (4))){
var inst_39822 = (state_39858[(7)]);
var inst_39824 = (inst_39822 < cnt);
var state_39858__$1 = state_39858;
if(cljs.core.truth_(inst_39824)){
var statearr_39862_41364 = state_39858__$1;
(statearr_39862_41364[(1)] = (6));

} else {
var statearr_39863_41365 = state_39858__$1;
(statearr_39863_41365[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (15))){
var inst_39854 = (state_39858[(2)]);
var state_39858__$1 = state_39858;
var statearr_39864_41366 = state_39858__$1;
(statearr_39864_41366[(2)] = inst_39854);

(statearr_39864_41366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (13))){
var inst_39847 = cljs.core.async.close_BANG_(out);
var state_39858__$1 = state_39858;
var statearr_39865_41367 = state_39858__$1;
(statearr_39865_41367[(2)] = inst_39847);

(statearr_39865_41367[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (6))){
var state_39858__$1 = state_39858;
var statearr_39866_41368 = state_39858__$1;
(statearr_39866_41368[(2)] = null);

(statearr_39866_41368[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (3))){
var inst_39856 = (state_39858[(2)]);
var state_39858__$1 = state_39858;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39858__$1,inst_39856);
} else {
if((state_val_39859 === (12))){
var inst_39844 = (state_39858[(8)]);
var inst_39844__$1 = (state_39858[(2)]);
var inst_39845 = cljs.core.some(cljs.core.nil_QMARK_,inst_39844__$1);
var state_39858__$1 = (function (){var statearr_39867 = state_39858;
(statearr_39867[(8)] = inst_39844__$1);

return statearr_39867;
})();
if(cljs.core.truth_(inst_39845)){
var statearr_39868_41369 = state_39858__$1;
(statearr_39868_41369[(1)] = (13));

} else {
var statearr_39869_41370 = state_39858__$1;
(statearr_39869_41370[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (2))){
var inst_39821 = cljs.core.reset_BANG_(dctr,cnt);
var inst_39822 = (0);
var state_39858__$1 = (function (){var statearr_39870 = state_39858;
(statearr_39870[(7)] = inst_39822);

(statearr_39870[(9)] = inst_39821);

return statearr_39870;
})();
var statearr_39871_41372 = state_39858__$1;
(statearr_39871_41372[(2)] = null);

(statearr_39871_41372[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (11))){
var inst_39822 = (state_39858[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_39858,(10),Object,null,(9));
var inst_39831 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_39822) : chs__$1.call(null,inst_39822));
var inst_39832 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_39822) : done.call(null,inst_39822));
var inst_39833 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_39831,inst_39832);
var state_39858__$1 = state_39858;
var statearr_39872_41373 = state_39858__$1;
(statearr_39872_41373[(2)] = inst_39833);


cljs.core.async.impl.ioc_helpers.process_exception(state_39858__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (9))){
var inst_39822 = (state_39858[(7)]);
var inst_39835 = (state_39858[(2)]);
var inst_39836 = (inst_39822 + (1));
var inst_39822__$1 = inst_39836;
var state_39858__$1 = (function (){var statearr_39873 = state_39858;
(statearr_39873[(7)] = inst_39822__$1);

(statearr_39873[(10)] = inst_39835);

return statearr_39873;
})();
var statearr_39874_41374 = state_39858__$1;
(statearr_39874_41374[(2)] = null);

(statearr_39874_41374[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (5))){
var inst_39842 = (state_39858[(2)]);
var state_39858__$1 = (function (){var statearr_39875 = state_39858;
(statearr_39875[(11)] = inst_39842);

return statearr_39875;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39858__$1,(12),dchan);
} else {
if((state_val_39859 === (14))){
var inst_39844 = (state_39858[(8)]);
var inst_39849 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_39844);
var state_39858__$1 = state_39858;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39858__$1,(16),out,inst_39849);
} else {
if((state_val_39859 === (16))){
var inst_39851 = (state_39858[(2)]);
var state_39858__$1 = (function (){var statearr_39876 = state_39858;
(statearr_39876[(12)] = inst_39851);

return statearr_39876;
})();
var statearr_39877_41380 = state_39858__$1;
(statearr_39877_41380[(2)] = null);

(statearr_39877_41380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (10))){
var inst_39826 = (state_39858[(2)]);
var inst_39827 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_39858__$1 = (function (){var statearr_39878 = state_39858;
(statearr_39878[(13)] = inst_39826);

return statearr_39878;
})();
var statearr_39879_41382 = state_39858__$1;
(statearr_39879_41382[(2)] = inst_39827);


cljs.core.async.impl.ioc_helpers.process_exception(state_39858__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (8))){
var inst_39840 = (state_39858[(2)]);
var state_39858__$1 = state_39858;
var statearr_39880_41385 = state_39858__$1;
(statearr_39880_41385[(2)] = inst_39840);

(statearr_39880_41385[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38734__auto__ = null;
var cljs$core$async$state_machine__38734__auto____0 = (function (){
var statearr_39881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39881[(0)] = cljs$core$async$state_machine__38734__auto__);

(statearr_39881[(1)] = (1));

return statearr_39881;
});
var cljs$core$async$state_machine__38734__auto____1 = (function (state_39858){
while(true){
var ret_value__38735__auto__ = (function (){try{while(true){
var result__38736__auto__ = switch__38733__auto__(state_39858);
if(cljs.core.keyword_identical_QMARK_(result__38736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38736__auto__;
}
break;
}
}catch (e39882){if((e39882 instanceof Object)){
var ex__38737__auto__ = e39882;
var statearr_39883_41386 = state_39858;
(statearr_39883_41386[(5)] = ex__38737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39882;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41389 = state_39858;
state_39858 = G__41389;
continue;
} else {
return ret_value__38735__auto__;
}
break;
}
});
cljs$core$async$state_machine__38734__auto__ = function(state_39858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38734__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38734__auto____1.call(this,state_39858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38734__auto____0;
cljs$core$async$state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38734__auto____1;
return cljs$core$async$state_machine__38734__auto__;
})()
})();
var state__38834__auto__ = (function (){var statearr_39884 = (f__38833__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38833__auto__.cljs$core$IFn$_invoke$arity$0() : f__38833__auto__.call(null));
(statearr_39884[(6)] = c__38832__auto___41361);

return statearr_39884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38834__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__39887 = arguments.length;
switch (G__39887) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38832__auto___41393 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38833__auto__ = (function (){var switch__38733__auto__ = (function (state_39919){
var state_val_39920 = (state_39919[(1)]);
if((state_val_39920 === (7))){
var inst_39898 = (state_39919[(7)]);
var inst_39899 = (state_39919[(8)]);
var inst_39898__$1 = (state_39919[(2)]);
var inst_39899__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39898__$1,(0),null);
var inst_39900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39898__$1,(1),null);
var inst_39901 = (inst_39899__$1 == null);
var state_39919__$1 = (function (){var statearr_39921 = state_39919;
(statearr_39921[(9)] = inst_39900);

(statearr_39921[(7)] = inst_39898__$1);

(statearr_39921[(8)] = inst_39899__$1);

return statearr_39921;
})();
if(cljs.core.truth_(inst_39901)){
var statearr_39922_41394 = state_39919__$1;
(statearr_39922_41394[(1)] = (8));

} else {
var statearr_39923_41399 = state_39919__$1;
(statearr_39923_41399[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39920 === (1))){
var inst_39888 = cljs.core.vec(chs);
var inst_39889 = inst_39888;
var state_39919__$1 = (function (){var statearr_39924 = state_39919;
(statearr_39924[(10)] = inst_39889);

return statearr_39924;
})();
var statearr_39925_41400 = state_39919__$1;
(statearr_39925_41400[(2)] = null);

(statearr_39925_41400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39920 === (4))){
var inst_39889 = (state_39919[(10)]);
var state_39919__$1 = state_39919;
return cljs.core.async.ioc_alts_BANG_(state_39919__$1,(7),inst_39889);
} else {
if((state_val_39920 === (6))){
var inst_39915 = (state_39919[(2)]);
var state_39919__$1 = state_39919;
var statearr_39926_41401 = state_39919__$1;
(statearr_39926_41401[(2)] = inst_39915);

(statearr_39926_41401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39920 === (3))){
var inst_39917 = (state_39919[(2)]);
var state_39919__$1 = state_39919;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39919__$1,inst_39917);
} else {
if((state_val_39920 === (2))){
var inst_39889 = (state_39919[(10)]);
var inst_39891 = cljs.core.count(inst_39889);
var inst_39892 = (inst_39891 > (0));
var state_39919__$1 = state_39919;
if(cljs.core.truth_(inst_39892)){
var statearr_39928_41402 = state_39919__$1;
(statearr_39928_41402[(1)] = (4));

} else {
var statearr_39929_41403 = state_39919__$1;
(statearr_39929_41403[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39920 === (11))){
var inst_39889 = (state_39919[(10)]);
var inst_39908 = (state_39919[(2)]);
var tmp39927 = inst_39889;
var inst_39889__$1 = tmp39927;
var state_39919__$1 = (function (){var statearr_39930 = state_39919;
(statearr_39930[(11)] = inst_39908);

(statearr_39930[(10)] = inst_39889__$1);

return statearr_39930;
})();
var statearr_39931_41404 = state_39919__$1;
(statearr_39931_41404[(2)] = null);

(statearr_39931_41404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39920 === (9))){
var inst_39899 = (state_39919[(8)]);
var state_39919__$1 = state_39919;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39919__$1,(11),out,inst_39899);
} else {
if((state_val_39920 === (5))){
var inst_39913 = cljs.core.async.close_BANG_(out);
var state_39919__$1 = state_39919;
var statearr_39932_41407 = state_39919__$1;
(statearr_39932_41407[(2)] = inst_39913);

(statearr_39932_41407[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39920 === (10))){
var inst_39911 = (state_39919[(2)]);
var state_39919__$1 = state_39919;
var statearr_39933_41408 = state_39919__$1;
(statearr_39933_41408[(2)] = inst_39911);

(statearr_39933_41408[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39920 === (8))){
var inst_39900 = (state_39919[(9)]);
var inst_39898 = (state_39919[(7)]);
var inst_39899 = (state_39919[(8)]);
var inst_39889 = (state_39919[(10)]);
var inst_39903 = (function (){var cs = inst_39889;
var vec__39894 = inst_39898;
var v = inst_39899;
var c = inst_39900;
return (function (p1__39885_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__39885_SHARP_);
});
})();
var inst_39904 = cljs.core.filterv(inst_39903,inst_39889);
var inst_39889__$1 = inst_39904;
var state_39919__$1 = (function (){var statearr_39934 = state_39919;
(statearr_39934[(10)] = inst_39889__$1);

return statearr_39934;
})();
var statearr_39935_41412 = state_39919__$1;
(statearr_39935_41412[(2)] = null);

(statearr_39935_41412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38734__auto__ = null;
var cljs$core$async$state_machine__38734__auto____0 = (function (){
var statearr_39936 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39936[(0)] = cljs$core$async$state_machine__38734__auto__);

(statearr_39936[(1)] = (1));

return statearr_39936;
});
var cljs$core$async$state_machine__38734__auto____1 = (function (state_39919){
while(true){
var ret_value__38735__auto__ = (function (){try{while(true){
var result__38736__auto__ = switch__38733__auto__(state_39919);
if(cljs.core.keyword_identical_QMARK_(result__38736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38736__auto__;
}
break;
}
}catch (e39937){if((e39937 instanceof Object)){
var ex__38737__auto__ = e39937;
var statearr_39938_41417 = state_39919;
(statearr_39938_41417[(5)] = ex__38737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39937;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41419 = state_39919;
state_39919 = G__41419;
continue;
} else {
return ret_value__38735__auto__;
}
break;
}
});
cljs$core$async$state_machine__38734__auto__ = function(state_39919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38734__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38734__auto____1.call(this,state_39919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38734__auto____0;
cljs$core$async$state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38734__auto____1;
return cljs$core$async$state_machine__38734__auto__;
})()
})();
var state__38834__auto__ = (function (){var statearr_39939 = (f__38833__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38833__auto__.cljs$core$IFn$_invoke$arity$0() : f__38833__auto__.call(null));
(statearr_39939[(6)] = c__38832__auto___41393);

return statearr_39939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38834__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__39941 = arguments.length;
switch (G__39941) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38832__auto___41425 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38833__auto__ = (function (){var switch__38733__auto__ = (function (state_39965){
var state_val_39966 = (state_39965[(1)]);
if((state_val_39966 === (7))){
var inst_39947 = (state_39965[(7)]);
var inst_39947__$1 = (state_39965[(2)]);
var inst_39948 = (inst_39947__$1 == null);
var inst_39949 = cljs.core.not(inst_39948);
var state_39965__$1 = (function (){var statearr_39967 = state_39965;
(statearr_39967[(7)] = inst_39947__$1);

return statearr_39967;
})();
if(inst_39949){
var statearr_39968_41426 = state_39965__$1;
(statearr_39968_41426[(1)] = (8));

} else {
var statearr_39969_41427 = state_39965__$1;
(statearr_39969_41427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39966 === (1))){
var inst_39942 = (0);
var state_39965__$1 = (function (){var statearr_39970 = state_39965;
(statearr_39970[(8)] = inst_39942);

return statearr_39970;
})();
var statearr_39971_41435 = state_39965__$1;
(statearr_39971_41435[(2)] = null);

(statearr_39971_41435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39966 === (4))){
var state_39965__$1 = state_39965;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39965__$1,(7),ch);
} else {
if((state_val_39966 === (6))){
var inst_39960 = (state_39965[(2)]);
var state_39965__$1 = state_39965;
var statearr_39972_41439 = state_39965__$1;
(statearr_39972_41439[(2)] = inst_39960);

(statearr_39972_41439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39966 === (3))){
var inst_39962 = (state_39965[(2)]);
var inst_39963 = cljs.core.async.close_BANG_(out);
var state_39965__$1 = (function (){var statearr_39973 = state_39965;
(statearr_39973[(9)] = inst_39962);

return statearr_39973;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39965__$1,inst_39963);
} else {
if((state_val_39966 === (2))){
var inst_39942 = (state_39965[(8)]);
var inst_39944 = (inst_39942 < n);
var state_39965__$1 = state_39965;
if(cljs.core.truth_(inst_39944)){
var statearr_39974_41451 = state_39965__$1;
(statearr_39974_41451[(1)] = (4));

} else {
var statearr_39975_41452 = state_39965__$1;
(statearr_39975_41452[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39966 === (11))){
var inst_39942 = (state_39965[(8)]);
var inst_39952 = (state_39965[(2)]);
var inst_39953 = (inst_39942 + (1));
var inst_39942__$1 = inst_39953;
var state_39965__$1 = (function (){var statearr_39976 = state_39965;
(statearr_39976[(8)] = inst_39942__$1);

(statearr_39976[(10)] = inst_39952);

return statearr_39976;
})();
var statearr_39977_41456 = state_39965__$1;
(statearr_39977_41456[(2)] = null);

(statearr_39977_41456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39966 === (9))){
var state_39965__$1 = state_39965;
var statearr_39978_41461 = state_39965__$1;
(statearr_39978_41461[(2)] = null);

(statearr_39978_41461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39966 === (5))){
var state_39965__$1 = state_39965;
var statearr_39979_41462 = state_39965__$1;
(statearr_39979_41462[(2)] = null);

(statearr_39979_41462[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39966 === (10))){
var inst_39957 = (state_39965[(2)]);
var state_39965__$1 = state_39965;
var statearr_39980_41464 = state_39965__$1;
(statearr_39980_41464[(2)] = inst_39957);

(statearr_39980_41464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39966 === (8))){
var inst_39947 = (state_39965[(7)]);
var state_39965__$1 = state_39965;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39965__$1,(11),out,inst_39947);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38734__auto__ = null;
var cljs$core$async$state_machine__38734__auto____0 = (function (){
var statearr_39981 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39981[(0)] = cljs$core$async$state_machine__38734__auto__);

(statearr_39981[(1)] = (1));

return statearr_39981;
});
var cljs$core$async$state_machine__38734__auto____1 = (function (state_39965){
while(true){
var ret_value__38735__auto__ = (function (){try{while(true){
var result__38736__auto__ = switch__38733__auto__(state_39965);
if(cljs.core.keyword_identical_QMARK_(result__38736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38736__auto__;
}
break;
}
}catch (e39982){if((e39982 instanceof Object)){
var ex__38737__auto__ = e39982;
var statearr_39983_41486 = state_39965;
(statearr_39983_41486[(5)] = ex__38737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39982;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41492 = state_39965;
state_39965 = G__41492;
continue;
} else {
return ret_value__38735__auto__;
}
break;
}
});
cljs$core$async$state_machine__38734__auto__ = function(state_39965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38734__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38734__auto____1.call(this,state_39965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38734__auto____0;
cljs$core$async$state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38734__auto____1;
return cljs$core$async$state_machine__38734__auto__;
})()
})();
var state__38834__auto__ = (function (){var statearr_39984 = (f__38833__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38833__auto__.cljs$core$IFn$_invoke$arity$0() : f__38833__auto__.call(null));
(statearr_39984[(6)] = c__38832__auto___41425);

return statearr_39984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38834__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39986 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39986 = (function (f,ch,meta39987){
this.f = f;
this.ch = ch;
this.meta39987 = meta39987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39988,meta39987__$1){
var self__ = this;
var _39988__$1 = this;
return (new cljs.core.async.t_cljs$core$async39986(self__.f,self__.ch,meta39987__$1));
}));

(cljs.core.async.t_cljs$core$async39986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39988){
var self__ = this;
var _39988__$1 = this;
return self__.meta39987;
}));

(cljs.core.async.t_cljs$core$async39986.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39986.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39986.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39986.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39986.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39989 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39989 = (function (f,ch,meta39987,_,fn1,meta39990){
this.f = f;
this.ch = ch;
this.meta39987 = meta39987;
this._ = _;
this.fn1 = fn1;
this.meta39990 = meta39990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39991,meta39990__$1){
var self__ = this;
var _39991__$1 = this;
return (new cljs.core.async.t_cljs$core$async39989(self__.f,self__.ch,self__.meta39987,self__._,self__.fn1,meta39990__$1));
}));

(cljs.core.async.t_cljs$core$async39989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39991){
var self__ = this;
var _39991__$1 = this;
return self__.meta39990;
}));

(cljs.core.async.t_cljs$core$async39989.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39989.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async39989.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39989.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__39985_SHARP_){
var G__39992 = (((p1__39985_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__39985_SHARP_) : self__.f.call(null,p1__39985_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__39992) : f1.call(null,G__39992));
});
}));

(cljs.core.async.t_cljs$core$async39989.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39987","meta39987",968637356,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39986","cljs.core.async/t_cljs$core$async39986",323975838,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39990","meta39990",-909167449,null)], null);
}));

(cljs.core.async.t_cljs$core$async39989.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39989.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39989");

(cljs.core.async.t_cljs$core$async39989.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async39989");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39989.
 */
cljs.core.async.__GT_t_cljs$core$async39989 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39989(f__$1,ch__$1,meta39987__$1,___$2,fn1__$1,meta39990){
return (new cljs.core.async.t_cljs$core$async39989(f__$1,ch__$1,meta39987__$1,___$2,fn1__$1,meta39990));
});

}

return (new cljs.core.async.t_cljs$core$async39989(self__.f,self__.ch,self__.meta39987,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__39993 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__39993) : self__.f.call(null,G__39993));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async39986.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39986.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async39986.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39987","meta39987",968637356,null)], null);
}));

(cljs.core.async.t_cljs$core$async39986.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39986.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39986");

(cljs.core.async.t_cljs$core$async39986.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async39986");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39986.
 */
cljs.core.async.__GT_t_cljs$core$async39986 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39986(f__$1,ch__$1,meta39987){
return (new cljs.core.async.t_cljs$core$async39986(f__$1,ch__$1,meta39987));
});

}

return (new cljs.core.async.t_cljs$core$async39986(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39994 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39994 = (function (f,ch,meta39995){
this.f = f;
this.ch = ch;
this.meta39995 = meta39995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39996,meta39995__$1){
var self__ = this;
var _39996__$1 = this;
return (new cljs.core.async.t_cljs$core$async39994(self__.f,self__.ch,meta39995__$1));
}));

(cljs.core.async.t_cljs$core$async39994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39996){
var self__ = this;
var _39996__$1 = this;
return self__.meta39995;
}));

(cljs.core.async.t_cljs$core$async39994.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39994.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39994.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39994.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async39994.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39994.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async39994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39995","meta39995",-606938846,null)], null);
}));

(cljs.core.async.t_cljs$core$async39994.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39994");

(cljs.core.async.t_cljs$core$async39994.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async39994");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39994.
 */
cljs.core.async.__GT_t_cljs$core$async39994 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39994(f__$1,ch__$1,meta39995){
return (new cljs.core.async.t_cljs$core$async39994(f__$1,ch__$1,meta39995));
});

}

return (new cljs.core.async.t_cljs$core$async39994(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39997 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39997 = (function (p,ch,meta39998){
this.p = p;
this.ch = ch;
this.meta39998 = meta39998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39999,meta39998__$1){
var self__ = this;
var _39999__$1 = this;
return (new cljs.core.async.t_cljs$core$async39997(self__.p,self__.ch,meta39998__$1));
}));

(cljs.core.async.t_cljs$core$async39997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39999){
var self__ = this;
var _39999__$1 = this;
return self__.meta39998;
}));

(cljs.core.async.t_cljs$core$async39997.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39997.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39997.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39997.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39997.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async39997.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39997.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async39997.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39998","meta39998",757436899,null)], null);
}));

(cljs.core.async.t_cljs$core$async39997.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39997");

(cljs.core.async.t_cljs$core$async39997.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async39997");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39997.
 */
cljs.core.async.__GT_t_cljs$core$async39997 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39997(p__$1,ch__$1,meta39998){
return (new cljs.core.async.t_cljs$core$async39997(p__$1,ch__$1,meta39998));
});

}

return (new cljs.core.async.t_cljs$core$async39997(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__40001 = arguments.length;
switch (G__40001) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38832__auto___41613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38833__auto__ = (function (){var switch__38733__auto__ = (function (state_40022){
var state_val_40023 = (state_40022[(1)]);
if((state_val_40023 === (7))){
var inst_40018 = (state_40022[(2)]);
var state_40022__$1 = state_40022;
var statearr_40024_41615 = state_40022__$1;
(statearr_40024_41615[(2)] = inst_40018);

(statearr_40024_41615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (1))){
var state_40022__$1 = state_40022;
var statearr_40025_41616 = state_40022__$1;
(statearr_40025_41616[(2)] = null);

(statearr_40025_41616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (4))){
var inst_40004 = (state_40022[(7)]);
var inst_40004__$1 = (state_40022[(2)]);
var inst_40005 = (inst_40004__$1 == null);
var state_40022__$1 = (function (){var statearr_40026 = state_40022;
(statearr_40026[(7)] = inst_40004__$1);

return statearr_40026;
})();
if(cljs.core.truth_(inst_40005)){
var statearr_40027_41617 = state_40022__$1;
(statearr_40027_41617[(1)] = (5));

} else {
var statearr_40028_41618 = state_40022__$1;
(statearr_40028_41618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (6))){
var inst_40004 = (state_40022[(7)]);
var inst_40009 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40004) : p.call(null,inst_40004));
var state_40022__$1 = state_40022;
if(cljs.core.truth_(inst_40009)){
var statearr_40029_41619 = state_40022__$1;
(statearr_40029_41619[(1)] = (8));

} else {
var statearr_40030_41620 = state_40022__$1;
(statearr_40030_41620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (3))){
var inst_40020 = (state_40022[(2)]);
var state_40022__$1 = state_40022;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40022__$1,inst_40020);
} else {
if((state_val_40023 === (2))){
var state_40022__$1 = state_40022;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40022__$1,(4),ch);
} else {
if((state_val_40023 === (11))){
var inst_40012 = (state_40022[(2)]);
var state_40022__$1 = state_40022;
var statearr_40031_41624 = state_40022__$1;
(statearr_40031_41624[(2)] = inst_40012);

(statearr_40031_41624[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (9))){
var state_40022__$1 = state_40022;
var statearr_40032_41625 = state_40022__$1;
(statearr_40032_41625[(2)] = null);

(statearr_40032_41625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (5))){
var inst_40007 = cljs.core.async.close_BANG_(out);
var state_40022__$1 = state_40022;
var statearr_40033_41630 = state_40022__$1;
(statearr_40033_41630[(2)] = inst_40007);

(statearr_40033_41630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (10))){
var inst_40015 = (state_40022[(2)]);
var state_40022__$1 = (function (){var statearr_40034 = state_40022;
(statearr_40034[(8)] = inst_40015);

return statearr_40034;
})();
var statearr_40035_41631 = state_40022__$1;
(statearr_40035_41631[(2)] = null);

(statearr_40035_41631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (8))){
var inst_40004 = (state_40022[(7)]);
var state_40022__$1 = state_40022;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40022__$1,(11),out,inst_40004);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38734__auto__ = null;
var cljs$core$async$state_machine__38734__auto____0 = (function (){
var statearr_40036 = [null,null,null,null,null,null,null,null,null];
(statearr_40036[(0)] = cljs$core$async$state_machine__38734__auto__);

(statearr_40036[(1)] = (1));

return statearr_40036;
});
var cljs$core$async$state_machine__38734__auto____1 = (function (state_40022){
while(true){
var ret_value__38735__auto__ = (function (){try{while(true){
var result__38736__auto__ = switch__38733__auto__(state_40022);
if(cljs.core.keyword_identical_QMARK_(result__38736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38736__auto__;
}
break;
}
}catch (e40037){if((e40037 instanceof Object)){
var ex__38737__auto__ = e40037;
var statearr_40038_41632 = state_40022;
(statearr_40038_41632[(5)] = ex__38737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40037;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41633 = state_40022;
state_40022 = G__41633;
continue;
} else {
return ret_value__38735__auto__;
}
break;
}
});
cljs$core$async$state_machine__38734__auto__ = function(state_40022){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38734__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38734__auto____1.call(this,state_40022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38734__auto____0;
cljs$core$async$state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38734__auto____1;
return cljs$core$async$state_machine__38734__auto__;
})()
})();
var state__38834__auto__ = (function (){var statearr_40039 = (f__38833__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38833__auto__.cljs$core$IFn$_invoke$arity$0() : f__38833__auto__.call(null));
(statearr_40039[(6)] = c__38832__auto___41613);

return statearr_40039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38834__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40041 = arguments.length;
switch (G__40041) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__38832__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38833__auto__ = (function (){var switch__38733__auto__ = (function (state_40103){
var state_val_40104 = (state_40103[(1)]);
if((state_val_40104 === (7))){
var inst_40099 = (state_40103[(2)]);
var state_40103__$1 = state_40103;
var statearr_40105_41650 = state_40103__$1;
(statearr_40105_41650[(2)] = inst_40099);

(statearr_40105_41650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40104 === (20))){
var inst_40069 = (state_40103[(7)]);
var inst_40080 = (state_40103[(2)]);
var inst_40081 = cljs.core.next(inst_40069);
var inst_40055 = inst_40081;
var inst_40056 = null;
var inst_40057 = (0);
var inst_40058 = (0);
var state_40103__$1 = (function (){var statearr_40106 = state_40103;
(statearr_40106[(8)] = inst_40058);

(statearr_40106[(9)] = inst_40080);

(statearr_40106[(10)] = inst_40055);

(statearr_40106[(11)] = inst_40056);

(statearr_40106[(12)] = inst_40057);

return statearr_40106;
})();
var statearr_40107_41665 = state_40103__$1;
(statearr_40107_41665[(2)] = null);

(statearr_40107_41665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40104 === (1))){
var state_40103__$1 = state_40103;
var statearr_40108_41666 = state_40103__$1;
(statearr_40108_41666[(2)] = null);

(statearr_40108_41666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40104 === (4))){
var inst_40044 = (state_40103[(13)]);
var inst_40044__$1 = (state_40103[(2)]);
var inst_40045 = (inst_40044__$1 == null);
var state_40103__$1 = (function (){var statearr_40109 = state_40103;
(statearr_40109[(13)] = inst_40044__$1);

return statearr_40109;
})();
if(cljs.core.truth_(inst_40045)){
var statearr_40110_41667 = state_40103__$1;
(statearr_40110_41667[(1)] = (5));

} else {
var statearr_40111_41671 = state_40103__$1;
(statearr_40111_41671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40104 === (15))){
var state_40103__$1 = state_40103;
var statearr_40115_41676 = state_40103__$1;
(statearr_40115_41676[(2)] = null);

(statearr_40115_41676[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40104 === (21))){
var state_40103__$1 = state_40103;
var statearr_40116_41677 = state_40103__$1;
(statearr_40116_41677[(2)] = null);

(statearr_40116_41677[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40104 === (13))){
var inst_40058 = (state_40103[(8)]);
var inst_40055 = (state_40103[(10)]);
var inst_40056 = (state_40103[(11)]);
var inst_40057 = (state_40103[(12)]);
var inst_40065 = (state_40103[(2)]);
var inst_40066 = (inst_40058 + (1));
var tmp40112 = inst_40055;
var tmp40113 = inst_40056;
var tmp40114 = inst_40057;
var inst_40055__$1 = tmp40112;
var inst_40056__$1 = tmp40113;
var inst_40057__$1 = tmp40114;
var inst_40058__$1 = inst_40066;
var state_40103__$1 = (function (){var statearr_40117 = state_40103;
(statearr_40117[(8)] = inst_40058__$1);

(statearr_40117[(14)] = inst_40065);

(statearr_40117[(10)] = inst_40055__$1);

(statearr_40117[(11)] = inst_40056__$1);

(statearr_40117[(12)] = inst_40057__$1);

return statearr_40117;
})();
var statearr_40118_41678 = state_40103__$1;
(statearr_40118_41678[(2)] = null);

(statearr_40118_41678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40104 === (22))){
var state_40103__$1 = state_40103;
var statearr_40119_41679 = state_40103__$1;
(statearr_40119_41679[(2)] = null);

(statearr_40119_41679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40104 === (6))){
var inst_40044 = (state_40103[(13)]);
var inst_40053 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40044) : f.call(null,inst_40044));
var inst_40054 = cljs.core.seq(inst_40053);
var inst_40055 = inst_40054;
var inst_40056 = null;
var inst_40057 = (0);
var inst_40058 = (0);
var state_40103__$1 = (function (){var statearr_40120 = state_40103;
(statearr_40120[(8)] = inst_40058);

(statearr_40120[(10)] = inst_40055);

(statearr_40120[(11)] = inst_40056);

(statearr_40120[(12)] = inst_40057);

return statearr_40120;
})();
var statearr_40121_41681 = state_40103__$1;
(statearr_40121_41681[(2)] = null);

(statearr_40121_41681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40104 === (17))){
var inst_40069 = (state_40103[(7)]);
var inst_40073 = cljs.core.chunk_first(inst_40069);
var inst_40074 = cljs.core.chunk_rest(inst_40069);
var inst_40075 = cljs.core.count(inst_40073);
var inst_40055 = inst_40074;
var inst_40056 = inst_40073;
var inst_40057 = inst_40075;
var inst_40058 = (0);
var state_40103__$1 = (function (){var statearr_40122 = state_40103;
(statearr_40122[(8)] = inst_40058);

(statearr_40122[(10)] = inst_40055);

(statearr_40122[(11)] = inst_40056);

(statearr_40122[(12)] = inst_40057);

return statearr_40122;
})();
var statearr_40123_41682 = state_40103__$1;
(statearr_40123_41682[(2)] = null);

(statearr_40123_41682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40104 === (3))){
var inst_40101 = (state_40103[(2)]);
var state_40103__$1 = state_40103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40103__$1,inst_40101);
} else {
if((state_val_40104 === (12))){
var inst_40089 = (state_40103[(2)]);
var state_40103__$1 = state_40103;
var statearr_40124_41692 = state_40103__$1;
(statearr_40124_41692[(2)] = inst_40089);

(statearr_40124_41692[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40104 === (2))){
var state_40103__$1 = state_40103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40103__$1,(4),in$);
} else {
if((state_val_40104 === (23))){
var inst_40097 = (state_40103[(2)]);
var state_40103__$1 = state_40103;
var statearr_40125_41697 = state_40103__$1;
(statearr_40125_41697[(2)] = inst_40097);

(statearr_40125_41697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40104 === (19))){
var inst_40084 = (state_40103[(2)]);
var state_40103__$1 = state_40103;
var statearr_40126_41704 = state_40103__$1;
(statearr_40126_41704[(2)] = inst_40084);

(statearr_40126_41704[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40104 === (11))){
var inst_40069 = (state_40103[(7)]);
var inst_40055 = (state_40103[(10)]);
var inst_40069__$1 = cljs.core.seq(inst_40055);
var state_40103__$1 = (function (){var statearr_40127 = state_40103;
(statearr_40127[(7)] = inst_40069__$1);

return statearr_40127;
})();
if(inst_40069__$1){
var statearr_40128_41706 = state_40103__$1;
(statearr_40128_41706[(1)] = (14));

} else {
var statearr_40129_41709 = state_40103__$1;
(statearr_40129_41709[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40104 === (9))){
var inst_40091 = (state_40103[(2)]);
var inst_40092 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_40103__$1 = (function (){var statearr_40130 = state_40103;
(statearr_40130[(15)] = inst_40091);

return statearr_40130;
})();
if(cljs.core.truth_(inst_40092)){
var statearr_40131_41710 = state_40103__$1;
(statearr_40131_41710[(1)] = (21));

} else {
var statearr_40132_41712 = state_40103__$1;
(statearr_40132_41712[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40104 === (5))){
var inst_40047 = cljs.core.async.close_BANG_(out);
var state_40103__$1 = state_40103;
var statearr_40133_41713 = state_40103__$1;
(statearr_40133_41713[(2)] = inst_40047);

(statearr_40133_41713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40104 === (14))){
var inst_40069 = (state_40103[(7)]);
var inst_40071 = cljs.core.chunked_seq_QMARK_(inst_40069);
var state_40103__$1 = state_40103;
if(inst_40071){
var statearr_40134_41718 = state_40103__$1;
(statearr_40134_41718[(1)] = (17));

} else {
var statearr_40135_41719 = state_40103__$1;
(statearr_40135_41719[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40104 === (16))){
var inst_40087 = (state_40103[(2)]);
var state_40103__$1 = state_40103;
var statearr_40136_41721 = state_40103__$1;
(statearr_40136_41721[(2)] = inst_40087);

(statearr_40136_41721[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40104 === (10))){
var inst_40058 = (state_40103[(8)]);
var inst_40056 = (state_40103[(11)]);
var inst_40063 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_40056,inst_40058);
var state_40103__$1 = state_40103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40103__$1,(13),out,inst_40063);
} else {
if((state_val_40104 === (18))){
var inst_40069 = (state_40103[(7)]);
var inst_40078 = cljs.core.first(inst_40069);
var state_40103__$1 = state_40103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40103__$1,(20),out,inst_40078);
} else {
if((state_val_40104 === (8))){
var inst_40058 = (state_40103[(8)]);
var inst_40057 = (state_40103[(12)]);
var inst_40060 = (inst_40058 < inst_40057);
var inst_40061 = inst_40060;
var state_40103__$1 = state_40103;
if(cljs.core.truth_(inst_40061)){
var statearr_40137_41722 = state_40103__$1;
(statearr_40137_41722[(1)] = (10));

} else {
var statearr_40138_41723 = state_40103__$1;
(statearr_40138_41723[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__38734__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__38734__auto____0 = (function (){
var statearr_40139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40139[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38734__auto__);

(statearr_40139[(1)] = (1));

return statearr_40139;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38734__auto____1 = (function (state_40103){
while(true){
var ret_value__38735__auto__ = (function (){try{while(true){
var result__38736__auto__ = switch__38733__auto__(state_40103);
if(cljs.core.keyword_identical_QMARK_(result__38736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38736__auto__;
}
break;
}
}catch (e40140){if((e40140 instanceof Object)){
var ex__38737__auto__ = e40140;
var statearr_40141_41725 = state_40103;
(statearr_40141_41725[(5)] = ex__38737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40140;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41726 = state_40103;
state_40103 = G__41726;
continue;
} else {
return ret_value__38735__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38734__auto__ = function(state_40103){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38734__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38734__auto____1.call(this,state_40103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38734__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38734__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38734__auto__;
})()
})();
var state__38834__auto__ = (function (){var statearr_40142 = (f__38833__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38833__auto__.cljs$core$IFn$_invoke$arity$0() : f__38833__auto__.call(null));
(statearr_40142[(6)] = c__38832__auto__);

return statearr_40142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38834__auto__);
}));

return c__38832__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__40144 = arguments.length;
switch (G__40144) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__40146 = arguments.length;
switch (G__40146) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__40148 = arguments.length;
switch (G__40148) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38832__auto___41742 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38833__auto__ = (function (){var switch__38733__auto__ = (function (state_40172){
var state_val_40173 = (state_40172[(1)]);
if((state_val_40173 === (7))){
var inst_40167 = (state_40172[(2)]);
var state_40172__$1 = state_40172;
var statearr_40174_41743 = state_40172__$1;
(statearr_40174_41743[(2)] = inst_40167);

(statearr_40174_41743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40173 === (1))){
var inst_40149 = null;
var state_40172__$1 = (function (){var statearr_40175 = state_40172;
(statearr_40175[(7)] = inst_40149);

return statearr_40175;
})();
var statearr_40176_41744 = state_40172__$1;
(statearr_40176_41744[(2)] = null);

(statearr_40176_41744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40173 === (4))){
var inst_40152 = (state_40172[(8)]);
var inst_40152__$1 = (state_40172[(2)]);
var inst_40153 = (inst_40152__$1 == null);
var inst_40154 = cljs.core.not(inst_40153);
var state_40172__$1 = (function (){var statearr_40177 = state_40172;
(statearr_40177[(8)] = inst_40152__$1);

return statearr_40177;
})();
if(inst_40154){
var statearr_40178_41772 = state_40172__$1;
(statearr_40178_41772[(1)] = (5));

} else {
var statearr_40179_41774 = state_40172__$1;
(statearr_40179_41774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40173 === (6))){
var state_40172__$1 = state_40172;
var statearr_40180_41782 = state_40172__$1;
(statearr_40180_41782[(2)] = null);

(statearr_40180_41782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40173 === (3))){
var inst_40169 = (state_40172[(2)]);
var inst_40170 = cljs.core.async.close_BANG_(out);
var state_40172__$1 = (function (){var statearr_40181 = state_40172;
(statearr_40181[(9)] = inst_40169);

return statearr_40181;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40172__$1,inst_40170);
} else {
if((state_val_40173 === (2))){
var state_40172__$1 = state_40172;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40172__$1,(4),ch);
} else {
if((state_val_40173 === (11))){
var inst_40152 = (state_40172[(8)]);
var inst_40161 = (state_40172[(2)]);
var inst_40149 = inst_40152;
var state_40172__$1 = (function (){var statearr_40182 = state_40172;
(statearr_40182[(7)] = inst_40149);

(statearr_40182[(10)] = inst_40161);

return statearr_40182;
})();
var statearr_40183_41797 = state_40172__$1;
(statearr_40183_41797[(2)] = null);

(statearr_40183_41797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40173 === (9))){
var inst_40152 = (state_40172[(8)]);
var state_40172__$1 = state_40172;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40172__$1,(11),out,inst_40152);
} else {
if((state_val_40173 === (5))){
var inst_40149 = (state_40172[(7)]);
var inst_40152 = (state_40172[(8)]);
var inst_40156 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40152,inst_40149);
var state_40172__$1 = state_40172;
if(inst_40156){
var statearr_40185_41804 = state_40172__$1;
(statearr_40185_41804[(1)] = (8));

} else {
var statearr_40186_41805 = state_40172__$1;
(statearr_40186_41805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40173 === (10))){
var inst_40164 = (state_40172[(2)]);
var state_40172__$1 = state_40172;
var statearr_40187_41810 = state_40172__$1;
(statearr_40187_41810[(2)] = inst_40164);

(statearr_40187_41810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40173 === (8))){
var inst_40149 = (state_40172[(7)]);
var tmp40184 = inst_40149;
var inst_40149__$1 = tmp40184;
var state_40172__$1 = (function (){var statearr_40188 = state_40172;
(statearr_40188[(7)] = inst_40149__$1);

return statearr_40188;
})();
var statearr_40189_41814 = state_40172__$1;
(statearr_40189_41814[(2)] = null);

(statearr_40189_41814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38734__auto__ = null;
var cljs$core$async$state_machine__38734__auto____0 = (function (){
var statearr_40190 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40190[(0)] = cljs$core$async$state_machine__38734__auto__);

(statearr_40190[(1)] = (1));

return statearr_40190;
});
var cljs$core$async$state_machine__38734__auto____1 = (function (state_40172){
while(true){
var ret_value__38735__auto__ = (function (){try{while(true){
var result__38736__auto__ = switch__38733__auto__(state_40172);
if(cljs.core.keyword_identical_QMARK_(result__38736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38736__auto__;
}
break;
}
}catch (e40191){if((e40191 instanceof Object)){
var ex__38737__auto__ = e40191;
var statearr_40192_41821 = state_40172;
(statearr_40192_41821[(5)] = ex__38737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40191;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41825 = state_40172;
state_40172 = G__41825;
continue;
} else {
return ret_value__38735__auto__;
}
break;
}
});
cljs$core$async$state_machine__38734__auto__ = function(state_40172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38734__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38734__auto____1.call(this,state_40172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38734__auto____0;
cljs$core$async$state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38734__auto____1;
return cljs$core$async$state_machine__38734__auto__;
})()
})();
var state__38834__auto__ = (function (){var statearr_40193 = (f__38833__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38833__auto__.cljs$core$IFn$_invoke$arity$0() : f__38833__auto__.call(null));
(statearr_40193[(6)] = c__38832__auto___41742);

return statearr_40193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38834__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__40195 = arguments.length;
switch (G__40195) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38832__auto___41861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38833__auto__ = (function (){var switch__38733__auto__ = (function (state_40233){
var state_val_40234 = (state_40233[(1)]);
if((state_val_40234 === (7))){
var inst_40229 = (state_40233[(2)]);
var state_40233__$1 = state_40233;
var statearr_40235_41862 = state_40233__$1;
(statearr_40235_41862[(2)] = inst_40229);

(statearr_40235_41862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40234 === (1))){
var inst_40196 = (new Array(n));
var inst_40197 = inst_40196;
var inst_40198 = (0);
var state_40233__$1 = (function (){var statearr_40236 = state_40233;
(statearr_40236[(7)] = inst_40198);

(statearr_40236[(8)] = inst_40197);

return statearr_40236;
})();
var statearr_40237_41863 = state_40233__$1;
(statearr_40237_41863[(2)] = null);

(statearr_40237_41863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40234 === (4))){
var inst_40201 = (state_40233[(9)]);
var inst_40201__$1 = (state_40233[(2)]);
var inst_40202 = (inst_40201__$1 == null);
var inst_40203 = cljs.core.not(inst_40202);
var state_40233__$1 = (function (){var statearr_40238 = state_40233;
(statearr_40238[(9)] = inst_40201__$1);

return statearr_40238;
})();
if(inst_40203){
var statearr_40239_41864 = state_40233__$1;
(statearr_40239_41864[(1)] = (5));

} else {
var statearr_40240_41865 = state_40233__$1;
(statearr_40240_41865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40234 === (15))){
var inst_40223 = (state_40233[(2)]);
var state_40233__$1 = state_40233;
var statearr_40241_41866 = state_40233__$1;
(statearr_40241_41866[(2)] = inst_40223);

(statearr_40241_41866[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40234 === (13))){
var state_40233__$1 = state_40233;
var statearr_40242_41867 = state_40233__$1;
(statearr_40242_41867[(2)] = null);

(statearr_40242_41867[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40234 === (6))){
var inst_40198 = (state_40233[(7)]);
var inst_40219 = (inst_40198 > (0));
var state_40233__$1 = state_40233;
if(cljs.core.truth_(inst_40219)){
var statearr_40243_41868 = state_40233__$1;
(statearr_40243_41868[(1)] = (12));

} else {
var statearr_40244_41869 = state_40233__$1;
(statearr_40244_41869[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40234 === (3))){
var inst_40231 = (state_40233[(2)]);
var state_40233__$1 = state_40233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40233__$1,inst_40231);
} else {
if((state_val_40234 === (12))){
var inst_40197 = (state_40233[(8)]);
var inst_40221 = cljs.core.vec(inst_40197);
var state_40233__$1 = state_40233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40233__$1,(15),out,inst_40221);
} else {
if((state_val_40234 === (2))){
var state_40233__$1 = state_40233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40233__$1,(4),ch);
} else {
if((state_val_40234 === (11))){
var inst_40213 = (state_40233[(2)]);
var inst_40214 = (new Array(n));
var inst_40197 = inst_40214;
var inst_40198 = (0);
var state_40233__$1 = (function (){var statearr_40245 = state_40233;
(statearr_40245[(7)] = inst_40198);

(statearr_40245[(8)] = inst_40197);

(statearr_40245[(10)] = inst_40213);

return statearr_40245;
})();
var statearr_40246_41872 = state_40233__$1;
(statearr_40246_41872[(2)] = null);

(statearr_40246_41872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40234 === (9))){
var inst_40197 = (state_40233[(8)]);
var inst_40211 = cljs.core.vec(inst_40197);
var state_40233__$1 = state_40233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40233__$1,(11),out,inst_40211);
} else {
if((state_val_40234 === (5))){
var inst_40201 = (state_40233[(9)]);
var inst_40198 = (state_40233[(7)]);
var inst_40206 = (state_40233[(11)]);
var inst_40197 = (state_40233[(8)]);
var inst_40205 = (inst_40197[inst_40198] = inst_40201);
var inst_40206__$1 = (inst_40198 + (1));
var inst_40207 = (inst_40206__$1 < n);
var state_40233__$1 = (function (){var statearr_40247 = state_40233;
(statearr_40247[(12)] = inst_40205);

(statearr_40247[(11)] = inst_40206__$1);

return statearr_40247;
})();
if(cljs.core.truth_(inst_40207)){
var statearr_40248_41881 = state_40233__$1;
(statearr_40248_41881[(1)] = (8));

} else {
var statearr_40249_41882 = state_40233__$1;
(statearr_40249_41882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40234 === (14))){
var inst_40226 = (state_40233[(2)]);
var inst_40227 = cljs.core.async.close_BANG_(out);
var state_40233__$1 = (function (){var statearr_40251 = state_40233;
(statearr_40251[(13)] = inst_40226);

return statearr_40251;
})();
var statearr_40252_41889 = state_40233__$1;
(statearr_40252_41889[(2)] = inst_40227);

(statearr_40252_41889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40234 === (10))){
var inst_40217 = (state_40233[(2)]);
var state_40233__$1 = state_40233;
var statearr_40253_41890 = state_40233__$1;
(statearr_40253_41890[(2)] = inst_40217);

(statearr_40253_41890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40234 === (8))){
var inst_40206 = (state_40233[(11)]);
var inst_40197 = (state_40233[(8)]);
var tmp40250 = inst_40197;
var inst_40197__$1 = tmp40250;
var inst_40198 = inst_40206;
var state_40233__$1 = (function (){var statearr_40254 = state_40233;
(statearr_40254[(7)] = inst_40198);

(statearr_40254[(8)] = inst_40197__$1);

return statearr_40254;
})();
var statearr_40255_41894 = state_40233__$1;
(statearr_40255_41894[(2)] = null);

(statearr_40255_41894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38734__auto__ = null;
var cljs$core$async$state_machine__38734__auto____0 = (function (){
var statearr_40256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40256[(0)] = cljs$core$async$state_machine__38734__auto__);

(statearr_40256[(1)] = (1));

return statearr_40256;
});
var cljs$core$async$state_machine__38734__auto____1 = (function (state_40233){
while(true){
var ret_value__38735__auto__ = (function (){try{while(true){
var result__38736__auto__ = switch__38733__auto__(state_40233);
if(cljs.core.keyword_identical_QMARK_(result__38736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38736__auto__;
}
break;
}
}catch (e40257){if((e40257 instanceof Object)){
var ex__38737__auto__ = e40257;
var statearr_40258_41896 = state_40233;
(statearr_40258_41896[(5)] = ex__38737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40257;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41897 = state_40233;
state_40233 = G__41897;
continue;
} else {
return ret_value__38735__auto__;
}
break;
}
});
cljs$core$async$state_machine__38734__auto__ = function(state_40233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38734__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38734__auto____1.call(this,state_40233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38734__auto____0;
cljs$core$async$state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38734__auto____1;
return cljs$core$async$state_machine__38734__auto__;
})()
})();
var state__38834__auto__ = (function (){var statearr_40259 = (f__38833__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38833__auto__.cljs$core$IFn$_invoke$arity$0() : f__38833__auto__.call(null));
(statearr_40259[(6)] = c__38832__auto___41861);

return statearr_40259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38834__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__40261 = arguments.length;
switch (G__40261) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38832__auto___41916 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38833__auto__ = (function (){var switch__38733__auto__ = (function (state_40303){
var state_val_40304 = (state_40303[(1)]);
if((state_val_40304 === (7))){
var inst_40299 = (state_40303[(2)]);
var state_40303__$1 = state_40303;
var statearr_40305_41926 = state_40303__$1;
(statearr_40305_41926[(2)] = inst_40299);

(statearr_40305_41926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40304 === (1))){
var inst_40262 = [];
var inst_40263 = inst_40262;
var inst_40264 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40303__$1 = (function (){var statearr_40306 = state_40303;
(statearr_40306[(7)] = inst_40264);

(statearr_40306[(8)] = inst_40263);

return statearr_40306;
})();
var statearr_40307_41932 = state_40303__$1;
(statearr_40307_41932[(2)] = null);

(statearr_40307_41932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40304 === (4))){
var inst_40267 = (state_40303[(9)]);
var inst_40267__$1 = (state_40303[(2)]);
var inst_40268 = (inst_40267__$1 == null);
var inst_40269 = cljs.core.not(inst_40268);
var state_40303__$1 = (function (){var statearr_40308 = state_40303;
(statearr_40308[(9)] = inst_40267__$1);

return statearr_40308;
})();
if(inst_40269){
var statearr_40309_41934 = state_40303__$1;
(statearr_40309_41934[(1)] = (5));

} else {
var statearr_40310_41935 = state_40303__$1;
(statearr_40310_41935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40304 === (15))){
var inst_40293 = (state_40303[(2)]);
var state_40303__$1 = state_40303;
var statearr_40311_41936 = state_40303__$1;
(statearr_40311_41936[(2)] = inst_40293);

(statearr_40311_41936[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40304 === (13))){
var state_40303__$1 = state_40303;
var statearr_40312_41937 = state_40303__$1;
(statearr_40312_41937[(2)] = null);

(statearr_40312_41937[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40304 === (6))){
var inst_40263 = (state_40303[(8)]);
var inst_40288 = inst_40263.length;
var inst_40289 = (inst_40288 > (0));
var state_40303__$1 = state_40303;
if(cljs.core.truth_(inst_40289)){
var statearr_40313_41938 = state_40303__$1;
(statearr_40313_41938[(1)] = (12));

} else {
var statearr_40314_41939 = state_40303__$1;
(statearr_40314_41939[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40304 === (3))){
var inst_40301 = (state_40303[(2)]);
var state_40303__$1 = state_40303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40303__$1,inst_40301);
} else {
if((state_val_40304 === (12))){
var inst_40263 = (state_40303[(8)]);
var inst_40291 = cljs.core.vec(inst_40263);
var state_40303__$1 = state_40303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40303__$1,(15),out,inst_40291);
} else {
if((state_val_40304 === (2))){
var state_40303__$1 = state_40303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40303__$1,(4),ch);
} else {
if((state_val_40304 === (11))){
var inst_40267 = (state_40303[(9)]);
var inst_40271 = (state_40303[(10)]);
var inst_40281 = (state_40303[(2)]);
var inst_40282 = [];
var inst_40283 = inst_40282.push(inst_40267);
var inst_40263 = inst_40282;
var inst_40264 = inst_40271;
var state_40303__$1 = (function (){var statearr_40315 = state_40303;
(statearr_40315[(11)] = inst_40283);

(statearr_40315[(7)] = inst_40264);

(statearr_40315[(8)] = inst_40263);

(statearr_40315[(12)] = inst_40281);

return statearr_40315;
})();
var statearr_40316_41940 = state_40303__$1;
(statearr_40316_41940[(2)] = null);

(statearr_40316_41940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40304 === (9))){
var inst_40263 = (state_40303[(8)]);
var inst_40279 = cljs.core.vec(inst_40263);
var state_40303__$1 = state_40303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40303__$1,(11),out,inst_40279);
} else {
if((state_val_40304 === (5))){
var inst_40267 = (state_40303[(9)]);
var inst_40264 = (state_40303[(7)]);
var inst_40271 = (state_40303[(10)]);
var inst_40271__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40267) : f.call(null,inst_40267));
var inst_40272 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40271__$1,inst_40264);
var inst_40273 = cljs.core.keyword_identical_QMARK_(inst_40264,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_40274 = ((inst_40272) || (inst_40273));
var state_40303__$1 = (function (){var statearr_40317 = state_40303;
(statearr_40317[(10)] = inst_40271__$1);

return statearr_40317;
})();
if(cljs.core.truth_(inst_40274)){
var statearr_40318_41941 = state_40303__$1;
(statearr_40318_41941[(1)] = (8));

} else {
var statearr_40319_41942 = state_40303__$1;
(statearr_40319_41942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40304 === (14))){
var inst_40296 = (state_40303[(2)]);
var inst_40297 = cljs.core.async.close_BANG_(out);
var state_40303__$1 = (function (){var statearr_40321 = state_40303;
(statearr_40321[(13)] = inst_40296);

return statearr_40321;
})();
var statearr_40322_41943 = state_40303__$1;
(statearr_40322_41943[(2)] = inst_40297);

(statearr_40322_41943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40304 === (10))){
var inst_40286 = (state_40303[(2)]);
var state_40303__$1 = state_40303;
var statearr_40323_41944 = state_40303__$1;
(statearr_40323_41944[(2)] = inst_40286);

(statearr_40323_41944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40304 === (8))){
var inst_40267 = (state_40303[(9)]);
var inst_40263 = (state_40303[(8)]);
var inst_40271 = (state_40303[(10)]);
var inst_40276 = inst_40263.push(inst_40267);
var tmp40320 = inst_40263;
var inst_40263__$1 = tmp40320;
var inst_40264 = inst_40271;
var state_40303__$1 = (function (){var statearr_40324 = state_40303;
(statearr_40324[(7)] = inst_40264);

(statearr_40324[(8)] = inst_40263__$1);

(statearr_40324[(14)] = inst_40276);

return statearr_40324;
})();
var statearr_40325_41945 = state_40303__$1;
(statearr_40325_41945[(2)] = null);

(statearr_40325_41945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38734__auto__ = null;
var cljs$core$async$state_machine__38734__auto____0 = (function (){
var statearr_40326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40326[(0)] = cljs$core$async$state_machine__38734__auto__);

(statearr_40326[(1)] = (1));

return statearr_40326;
});
var cljs$core$async$state_machine__38734__auto____1 = (function (state_40303){
while(true){
var ret_value__38735__auto__ = (function (){try{while(true){
var result__38736__auto__ = switch__38733__auto__(state_40303);
if(cljs.core.keyword_identical_QMARK_(result__38736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38736__auto__;
}
break;
}
}catch (e40327){if((e40327 instanceof Object)){
var ex__38737__auto__ = e40327;
var statearr_40328_41946 = state_40303;
(statearr_40328_41946[(5)] = ex__38737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40327;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41947 = state_40303;
state_40303 = G__41947;
continue;
} else {
return ret_value__38735__auto__;
}
break;
}
});
cljs$core$async$state_machine__38734__auto__ = function(state_40303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38734__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38734__auto____1.call(this,state_40303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38734__auto____0;
cljs$core$async$state_machine__38734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38734__auto____1;
return cljs$core$async$state_machine__38734__auto__;
})()
})();
var state__38834__auto__ = (function (){var statearr_40329 = (f__38833__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38833__auto__.cljs$core$IFn$_invoke$arity$0() : f__38833__auto__.call(null));
(statearr_40329[(6)] = c__38832__auto___41916);

return statearr_40329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38834__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
