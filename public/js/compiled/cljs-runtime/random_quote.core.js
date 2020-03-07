goog.provide('random_quote.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('reagent.core');
if((typeof random_quote !== 'undefined') && (typeof random_quote.core !== 'undefined') && (typeof random_quote.core.app_state !== 'undefined')){
} else {
random_quote.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Learn everyday",new cljs.core.Keyword(null,"author","author",2111686192),"Roman Ostash"], null));
}
random_quote.core.fetch_link_BANG_ = (function random_quote$core$fetch_link_BANG_(state){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("https://quote-garden.herokuapp.com/quotes/random",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (data){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,"quoteText"));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"author","author",2111686192),cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,"quoteAuthor"));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p__32025){
var map__32026 = p__32025;
var map__32026__$1 = (((((!((map__32026 == null))))?(((((map__32026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32026):map__32026);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32026__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32026__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log(status,status_text);
})], null)], 0));
});
random_quote.core.get_tweet_link = (function random_quote$core$get_tweet_link(state){
return ["https://twitter.com/intent/tweet?hashtags=quote&text=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))].join('');
});
random_quote.core.my_quote = (function random_quote$core$my_quote(state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Random Quote Generator"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.quote","div.quote",-2075927990),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.quote-container","div.quote-container",-996943952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.quote-content","p.quote-content",-794391600),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.quote-author","p.quote-author",761632699),new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.quote-buttons","div.quote-buttons",-209494041),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),random_quote.core.get_tweet_link(state),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"tweet"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return random_quote.core.fetch_link_BANG_(state);
})], null),"next quote"], null)], null)], null)], null);
});
random_quote.core.start = (function random_quote$core$start(){
var G__32028 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [random_quote.core.my_quote,random_quote.core.app_state], null);
var G__32029 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__32028,G__32029) : reagent.core.render_component.call(null,G__32028,G__32029));
});
random_quote.core.init = (function random_quote$core$init(){
return random_quote.core.start();
});
goog.exportSymbol('random_quote.core.init', random_quote.core.init);
random_quote.core.stop = (function random_quote$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=random_quote.core.js.map
