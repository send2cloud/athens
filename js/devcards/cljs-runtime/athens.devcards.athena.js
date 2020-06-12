goog.provide('athens.devcards.athena');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.devcards.buttons');
goog.require('athens.devcards.db');
goog.require('athens.events');
goog.require('athens.router');
goog.require('athens.style');
goog.require('athens.subs');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('garden.color');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('stylefy.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.athena","athens.devcards.athena",-1935975160),new cljs.core.Keyword(null,"Import-Styles","Import-Styles",584958882)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Import-Styles",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.t_athens$devcards$athena50751 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.athena.t_athens$devcards$athena50751 = (function (meta50752){
this.meta50752 = meta50752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.athena.t_athens$devcards$athena50751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50753,meta50752__$1){
var self__ = this;
var _50753__$1 = this;
return (new athens.devcards.athena.t_athens$devcards$athena50751(meta50752__$1));
}));

(athens.devcards.athena.t_athens$devcards$athena50751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50753){
var self__ = this;
var _50753__$1 = this;
return self__.meta50752;
}));

(athens.devcards.athena.t_athens$devcards$athena50751.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.athena.t_athens$devcards$athena50751.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47891__auto__,devcard_opts__47892__auto__){
var self__ = this;
var this__47891__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47892__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47910__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.style.base_styles], null);
if(cljs.core.fn_QMARK_(v__47910__auto__)){
return (function (data_atom__47911__auto__,owner__47912__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47910__auto__,data_atom__47911__auto__,owner__47912__auto__], null));
});
} else {
return reagent.core.as_element(v__47910__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47892__auto__))], 0))], 0));
}));

(athens.devcards.athena.t_athens$devcards$athena50751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50752","meta50752",457984313,null)], null);
}));

(athens.devcards.athena.t_athens$devcards$athena50751.cljs$lang$type = true);

(athens.devcards.athena.t_athens$devcards$athena50751.cljs$lang$ctorStr = "athens.devcards.athena/t_athens$devcards$athena50751");

(athens.devcards.athena.t_athens$devcards$athena50751.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.athena/t_athens$devcards$athena50751");
}));

/**
 * Positional factory function for athens.devcards.athena/t_athens$devcards$athena50751.
 */
athens.devcards.athena.__GT_t_athens$devcards$athena50751 = (function athens$devcards$athena$__GT_t_athens$devcards$athena50751(meta50752){
return (new athens.devcards.athena.t_athens$devcards$athena50751(meta50752));
});

}

return (new athens.devcards.athena.t_athens$devcards$athena50751(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.athena","athens.devcards.athena",-1935975160),new cljs.core.Keyword(null,"Instantiate-app-db","Instantiate-app-db",-1843494547)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Instantiate-app-db",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Using re-frame, even though DevCards </3 re-frame. Not using re-frame elsewhere for subs, but will probably\n  need refactoring or real isolation later.\n\n  - https://github.com/athensresearch/athens/issues/126\n  - https://github.com/bhauman/devcards/issues/105\n  - https://github.com/bhauman/devcards/pull/131/\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.t_athens$devcards$athena50754 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.athena.t_athens$devcards$athena50754 = (function (meta50755){
this.meta50755 = meta50755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.athena.t_athens$devcards$athena50754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50756,meta50755__$1){
var self__ = this;
var _50756__$1 = this;
return (new athens.devcards.athena.t_athens$devcards$athena50754(meta50755__$1));
}));

(athens.devcards.athena.t_athens$devcards$athena50754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50756){
var self__ = this;
var _50756__$1 = this;
return self__.meta50755;
}));

(athens.devcards.athena.t_athens$devcards$athena50754.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.athena.t_athens$devcards$athena50754.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47891__auto__,devcard_opts__47892__auto__){
var self__ = this;
var this__47891__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47892__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47910__auto__ = null;
if(cljs.core.fn_QMARK_(v__47910__auto__)){
return (function (data_atom__47911__auto__,owner__47912__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47910__auto__,data_atom__47911__auto__,owner__47912__auto__], null));
});
} else {
return reagent.core.as_element(v__47910__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47892__auto__))], 0))], 0));
}));

(athens.devcards.athena.t_athens$devcards$athena50754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50755","meta50755",-932713768,null)], null);
}));

(athens.devcards.athena.t_athens$devcards$athena50754.cljs$lang$type = true);

(athens.devcards.athena.t_athens$devcards$athena50754.cljs$lang$ctorStr = "athens.devcards.athena/t_athens$devcards$athena50754");

(athens.devcards.athena.t_athens$devcards$athena50754.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.athena/t_athens$devcards$athena50754");
}));

/**
 * Positional factory function for athens.devcards.athena/t_athens$devcards$athena50754.
 */
athens.devcards.athena.__GT_t_athens$devcards$athena50754 = (function athens$devcards$athena$__GT_t_athens$devcards$athena50754(meta50755){
return (new athens.devcards.athena.t_athens$devcards$athena50754(meta50755));
});

}

return (new athens.devcards.athena.t_athens$devcards$athena50754(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
var G__50757_50795 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-rfdb","init-rfdb",-460710127)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50757_50795) : re_frame.core.dispatch.call(null,G__50757_50795));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.athena","athens.devcards.athena",-1935975160),new cljs.core.Keyword(null,"Instantiate-Dsdb","Instantiate-Dsdb",-544389239)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Instantiate-Dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.t_athens$devcards$athena50758 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.athena.t_athens$devcards$athena50758 = (function (meta50759){
this.meta50759 = meta50759;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.athena.t_athens$devcards$athena50758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50760,meta50759__$1){
var self__ = this;
var _50760__$1 = this;
return (new athens.devcards.athena.t_athens$devcards$athena50758(meta50759__$1));
}));

(athens.devcards.athena.t_athens$devcards$athena50758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50760){
var self__ = this;
var _50760__$1 = this;
return self__.meta50759;
}));

(athens.devcards.athena.t_athens$devcards$athena50758.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.athena.t_athens$devcards$athena50758.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47891__auto__,devcard_opts__47892__auto__){
var self__ = this;
var this__47891__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47892__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47910__auto__ = null;
if(cljs.core.fn_QMARK_(v__47910__auto__)){
return (function (data_atom__47911__auto__,owner__47912__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47910__auto__,data_atom__47911__auto__,owner__47912__auto__], null));
});
} else {
return reagent.core.as_element(v__47910__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47892__auto__))], 0))], 0));
}));

(athens.devcards.athena.t_athens$devcards$athena50758.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50759","meta50759",854941195,null)], null);
}));

(athens.devcards.athena.t_athens$devcards$athena50758.cljs$lang$type = true);

(athens.devcards.athena.t_athens$devcards$athena50758.cljs$lang$ctorStr = "athens.devcards.athena/t_athens$devcards$athena50758");

(athens.devcards.athena.t_athens$devcards$athena50758.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.athena/t_athens$devcards$athena50758");
}));

/**
 * Positional factory function for athens.devcards.athena/t_athens$devcards$athena50758.
 */
athens.devcards.athena.__GT_t_athens$devcards$athena50758 = (function athens$devcards$athena$__GT_t_athens$devcards$athena50758(meta50759){
return (new athens.devcards.athena.t_athens$devcards$athena50758(meta50759));
});

}

return (new athens.devcards.athena.t_athens$devcards$athena50758(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.conn !== 'undefined')){
} else {
athens.devcards.athena.conn = athens.devcards.db.new_conn();
}
athens.devcards.db.posh_conn_BANG_(athens.devcards.athena.conn);
athens.devcards.athena.handler = (function athens$devcards$athena$handler(){
var n = (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.devcards.athena.conn)) + (1));
var n_child = (n + (1));
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.athena.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("node","title","node/title",628940777),["Test Page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","string","block/string",-2066596447),["Test Block",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_child)].join(''),new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_child)].join('')], null)], null)], null)], null));
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.athena","athens.devcards.athena",-1935975160),new cljs.core.Keyword(null,"Create-Page","Create-Page",-1525048441)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Create-Page",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Press button and then search \"test\" ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.t_athens$devcards$athena50761 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.athena.t_athens$devcards$athena50761 = (function (meta50762){
this.meta50762 = meta50762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.athena.t_athens$devcards$athena50761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50763,meta50762__$1){
var self__ = this;
var _50763__$1 = this;
return (new athens.devcards.athena.t_athens$devcards$athena50761(meta50762__$1));
}));

(athens.devcards.athena.t_athens$devcards$athena50761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50763){
var self__ = this;
var _50763__$1 = this;
return self__.meta50762;
}));

(athens.devcards.athena.t_athens$devcards$athena50761.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.athena.t_athens$devcards$athena50761.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47891__auto__,devcard_opts__47892__auto__){
var self__ = this;
var this__47891__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47892__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47910__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),athens.devcards.athena.handler,new cljs.core.Keyword(null,"label","label",1718410804),"Create Test Pages and Blocks"], null)], null);
if(cljs.core.fn_QMARK_(v__47910__auto__)){
return (function (data_atom__47911__auto__,owner__47912__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47910__auto__,data_atom__47911__auto__,owner__47912__auto__], null));
});
} else {
return reagent.core.as_element(v__47910__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47892__auto__))], 0))], 0));
}));

(athens.devcards.athena.t_athens$devcards$athena50761.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50762","meta50762",-156703400,null)], null);
}));

(athens.devcards.athena.t_athens$devcards$athena50761.cljs$lang$type = true);

(athens.devcards.athena.t_athens$devcards$athena50761.cljs$lang$ctorStr = "athens.devcards.athena/t_athens$devcards$athena50761");

(athens.devcards.athena.t_athens$devcards$athena50761.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.athena/t_athens$devcards$athena50761");
}));

/**
 * Positional factory function for athens.devcards.athena/t_athens$devcards$athena50761.
 */
athens.devcards.athena.__GT_t_athens$devcards$athena50761 = (function athens$devcards$athena$__GT_t_athens$devcards$athena50761(meta50762){
return (new athens.devcards.athena.t_athens$devcards$athena50761(meta50762));
});

}

return (new athens.devcards.athena.t_athens$devcards$athena50761(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.athena","athens.devcards.athena",-1935975160),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.t_athens$devcards$athena50764 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.athena.t_athens$devcards$athena50764 = (function (meta50765){
this.meta50765 = meta50765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.athena.t_athens$devcards$athena50764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50766,meta50765__$1){
var self__ = this;
var _50766__$1 = this;
return (new athens.devcards.athena.t_athens$devcards$athena50764(meta50765__$1));
}));

(athens.devcards.athena.t_athens$devcards$athena50764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50766){
var self__ = this;
var _50766__$1 = this;
return self__.meta50765;
}));

(athens.devcards.athena.t_athens$devcards$athena50764.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.athena.t_athens$devcards$athena50764.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47891__auto__,devcard_opts__47892__auto__){
var self__ = this;
var this__47891__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47892__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47910__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button,athens.devcards.athena.conn], null);
if(cljs.core.fn_QMARK_(v__47910__auto__)){
return (function (data_atom__47911__auto__,owner__47912__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47910__auto__,data_atom__47911__auto__,owner__47912__auto__], null));
});
} else {
return reagent.core.as_element(v__47910__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47892__auto__))], 0))], 0));
}));

(athens.devcards.athena.t_athens$devcards$athena50764.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50765","meta50765",-258440901,null)], null);
}));

(athens.devcards.athena.t_athens$devcards$athena50764.cljs$lang$type = true);

(athens.devcards.athena.t_athens$devcards$athena50764.cljs$lang$ctorStr = "athens.devcards.athena/t_athens$devcards$athena50764");

(athens.devcards.athena.t_athens$devcards$athena50764.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.athena/t_athens$devcards$athena50764");
}));

/**
 * Positional factory function for athens.devcards.athena/t_athens$devcards$athena50764.
 */
athens.devcards.athena.__GT_t_athens$devcards$athena50764 = (function athens$devcards$athena$__GT_t_athens$devcards$athena50764(meta50765){
return (new athens.devcards.athena.t_athens$devcards$athena50764(meta50765));
});

}

return (new athens.devcards.athena.t_athens$devcards$athena50764(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.athena.container_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"left","left",-399115937)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"64","64",977820579).cljs$core$IFn$_invoke$arity$1(athens.style.DEPTH_SHADOWS),", 0 0 0 1px ",garden.color.opacify(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936).cljs$core$IFn$_invoke$arity$1(athens.style.HSL_COLORS),cljs.core.first(athens.style.OPACITIES))], null)], null),"60vh","translate(-50%, -50%)","50%","hidden","784px",new cljs.core.Keyword(null,"app-bg-color","app-bg-color",168697297).cljs$core$IFn$_invoke$arity$1(athens.style.HSL_COLORS),(2),"flex","fixed","4px","column","50%"]);
athens.devcards.athena.athena_input_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["49px","#433F38","38px",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),"::placeholder",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(athens.style.OPACITIES,(2))], null)], null),"300","100%","text","24px",new cljs.core.Keyword(null,"link-color","link-color",1347118056).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS),"-0.03em",(0),"4px 4px 0 0"]);
athens.devcards.athena.results_list_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"app-bg-color","app-bg-color",168697297).cljs$core$IFn$_invoke$arity$1(athens.style.HSL_COLORS),new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"100%"], null);
athens.devcards.athena.results_heading_style = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 18px",new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"app-bg-color","app-bg-color",168697297).cljs$core$IFn$_invoke$arity$1(athens.style.HSL_COLORS),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"position","position",-2011731912),"sticky",new cljs.core.Keyword(null,"top","top",-1856271961),"0",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0 1px 0 0 ",garden.color.opacify(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936).cljs$core$IFn$_invoke$arity$1(athens.style.HSL_COLORS),0.12)], null)], null),new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid",garden.color.opacify(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936).cljs$core$IFn$_invoke$arity$1(athens.style.HSL_COLORS),0.12)], null)], null)], null);
athens.devcards.athena.result_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"grid-template","grid-template",-268181948),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),new cljs.core.Keyword(null,"border-top","border-top",-158897573)],["\"title icon\" \"preview icon\"",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"link-color","link-color",1347118056).cljs$core$IFn$_invoke$arity$1(athens.style.HSL_COLORS),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"app-bg-color","app-bg-color",168697297).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS)], null)], null),"all .05s ease",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"title",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"header-text-color","header-text-color",-2100972680).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null),new cljs.core.Keyword(null,"preview","preview",451279890),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"-webkit-box-orient","-webkit-box-orient",-2043252050),new cljs.core.Keyword(null,"word-break","word-break",-407281356),new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"-webkit-line-clamp","-webkit-line-clamp",438845631)],["ellipsis",garden.color.opacify(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(athens.style.OPACITIES,(3))),"wrap","hidden","vertical","break-word","preview","-webkit-box","1"]),new cljs.core.Keyword(null,"link-leader","link-leader",-1261639700),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"icon",new cljs.core.Keyword(null,"color","color",1011675173),"transparent",new cljs.core.Keyword(null,"margin","margin",-995903681),"auto auto"], null)], null),"0 12px",garden.color.opacify(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936).cljs$core$IFn$_invoke$arity$1(athens.style.HSL_COLORS),0.02),"8px 32px",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.Keyword(null,".preview",".preview",351053960),new cljs.core.Keyword(null,".link-leader",".link-leader",-1886712257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"inherit !important"], null)], null)], null)], null),"grid","1fr auto",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",garden.color.opacify(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936).cljs$core$IFn$_invoke$arity$1(athens.style.HSL_COLORS),0.12)], null)], null)]);
athens.devcards.athena.result_highlight_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"inherit",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null);
athens.devcards.athena.hint_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"inherit",new cljs.core.Keyword(null,"opacity","opacity",397153780),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(athens.style.OPACITIES,(3)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kbd","kbd",316156875),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"uppercase",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"inherit",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(600),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid rgba(67, 63, 56, 0.25)",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 4px"], null)], null)], null)], null);
athens.devcards.athena.athena_prompt = (function athens$devcards$athena$athena_prompt(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
var G__50767 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-athena","toggle-athena",102452770)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50767) : re_frame.core.dispatch.call(null,G__50767));
}),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Search], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Find or Create a Page"], null)], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px"], null)], null)], null);
});
/**
 * More options here https://clojuredocs.org/clojure.core/re-pattern
 */
athens.devcards.athena.re_case_insensitive = (function athens$devcards$athena$re_case_insensitive(query){
return cljs.core.re_pattern(["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join(''));
});
athens.devcards.athena.search_in_block_title = (function athens$devcards$athena$search_in_block_title(db,query){
var G__50768 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?node","?node",-1927699885,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","uid","block/uid",-1623585167)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?query-pattern","?query-pattern",-1202525912,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?node","?node",-1927699885,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?txt","?txt",-116144703,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?query-pattern","?query-pattern",-1202525912,null),new cljs.core.Symbol(null,"?txt","?txt",-116144703,null))], null)], null);
var G__50769 = db;
var G__50770 = athens.devcards.athena.re_case_insensitive(query);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__50768,G__50769,G__50770) : datascript.core.q.call(null,G__50768,G__50769,G__50770));
});
athens.devcards.athena.get_parent_node = (function athens$devcards$athena$get_parent_node(block){
var b = block;
while(true){
if(cljs.core.truth_(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(b))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","parent","block/parent",-918309064),b);
} else {
var G__50799 = cljs.core.first(new cljs.core.Keyword("block","_children","block/_children",1128070632).cljs$core$IFn$_invoke$arity$1(b));
b = G__50799;
continue;
}
break;
}
});
athens.devcards.athena.search_in_block_content = (function athens$devcards$athena$search_in_block_content(db,query){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50771_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50771_SHARP_,new cljs.core.Keyword("block","_children","block/_children",1128070632));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.devcards.athena.get_parent_node,(function (){var G__50772 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","_children","block/_children",1128070632),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?query-pattern","?query-pattern",-1202525912,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?txt","?txt",-116144703,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?query-pattern","?query-pattern",-1202525912,null),new cljs.core.Symbol(null,"?txt","?txt",-116144703,null))], null)], null);
var G__50773 = db;
var G__50774 = athens.devcards.athena.re_case_insensitive(query);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__50772,G__50773,G__50774) : datascript.core.q.call(null,G__50772,G__50773,G__50774));
})()));
});
athens.devcards.athena.highlight_match = (function athens$devcards$athena$highlight_match(query,txt){
var query_pattern = athens.devcards.athena.re_case_insensitive(["((?<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query),")|(?=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query),"))"].join(''));
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,part){
if(cljs.core.truth_(cljs.core.re_find(query_pattern,part))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.athena.result_highlight_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),part], null);
} else {
return part;
}
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(txt,query_pattern));
});
athens.devcards.athena.recent = (function athens$devcards$athena$recent(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.athena.results_heading_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Recent"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.athena.hint_style),"Press ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kbd","kbd",316156875),"shift + enter"], null)," to open in right sidebar."], null)], null);
});
athens.devcards.athena.athena = (function athens$devcards$athena$athena(conn){
var _STAR_cache = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var _STAR_match = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var db = datascript.core.db(conn);
var athena_QMARK_ = (function (){var G__50775 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athena","athena",-1523991628)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50775) : re_frame.core.subscribe.call(null,G__50775));
})();
var handler = (function (e){
var query = e.target.value;
if(clojure.string.blank_QMARK_(query)){
return cljs.core.reset_BANG_(_STAR_match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query,null], null));
} else {
var result = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_cache),query);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var G__50776 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pages","pages",-285406513),athens.devcards.athena.search_in_block_title(db,query)], null);
if(cljs.core.truth_(cljs.core.count(query))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50776,new cljs.core.Keyword(null,"blocks","blocks",-610462153),athens.devcards.athena.search_in_block_content(db,query));
} else {
return G__50776;
}
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_STAR_cache,cljs.core.assoc,query,result);

return cljs.core.reset_BANG_(_STAR_match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query,result], null));
}
});
if(cljs.core.truth_(cljs.core.deref(athena_QMARK_))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.athena.container_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.athena.athena_input_style,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"search",new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Find or Create Page",new cljs.core.Keyword(null,"on-change","on-change",-732046149),handler], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.athena.recent], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var vec__50777 = cljs.core.deref(_STAR_match);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50777,(0),null);
var map__50780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50777,(1),null);
var map__50780__$1 = (((((!((map__50780 == null))))?(((((map__50780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50780):map__50780);
var result = map__50780__$1;
var pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50780__$1,new cljs.core.Keyword(null,"pages","pages",-285406513));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50780__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
if(cljs.core.truth_(result)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.athena.results_list_style),(function (){var iter__4582__auto__ = (function athens$devcards$athena$athena_$_iter__50782(s__50783){
return (new cljs.core.LazySeq(null,(function (){
var s__50783__$1 = s__50783;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50783__$1);
if(temp__5735__auto__){
var s__50783__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50783__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50783__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50785 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50784 = (0);
while(true){
if((i__50784 < size__4581__auto__)){
var vec__50786 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50784);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50786,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50786,(1),null);
cljs.core.chunk_append(b__50785,(function (){var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(x);
var page_title = (function (){var or__4185__auto__ = new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(x);
}
})();
var block_uid = (function (){var or__4185__auto__ = new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(x);
}
})();
var block_string = new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(x);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.athena.result_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__50784,parent,page_title,block_uid,block_string,vec__50786,i,x,c__4580__auto__,size__4581__auto__,b__50785,s__50783__$2,temp__5735__auto__,vec__50777,query,map__50780,map__50780__$1,result,pages,blocks,_STAR_cache,_STAR_match,db,athena_QMARK_,handler){
return (function (){
return athens.router.navigate_page(block_uid);
});})(i__50784,parent,page_title,block_uid,block_string,vec__50786,i,x,c__4580__auto__,size__4581__auto__,b__50785,s__50783__$2,temp__5735__auto__,vec__50777,query,map__50780,map__50780__$1,result,pages,blocks,_STAR_cache,_STAR_match,db,athena_QMARK_,handler))
], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.title","h4.title",-103059385),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.athena.result_style,new cljs.core.Keyword(null,"title","title",636505583)),athens.devcards.athena.highlight_match(query,page_title)], null),(cljs.core.truth_(block_string)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.preview","span.preview",391484430),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.athena.result_style,new cljs.core.Keyword(null,"preview","preview",451279890)),athens.devcards.athena.highlight_match(query,block_string)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.link-leader","span.link-leader",-227077341),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.athena.result_style,new cljs.core.Keyword(null,"link-leader","link-leader",-1261639700)),"->"], null)], null);
})());

var G__50804 = (i__50784 + (1));
i__50784 = G__50804;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50785),athens$devcards$athena$athena_$_iter__50782(cljs.core.chunk_rest(s__50783__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50785),null);
}
} else {
var vec__50789 = cljs.core.first(s__50783__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50789,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50789,(1),null);
return cljs.core.cons((function (){var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(x);
var page_title = (function (){var or__4185__auto__ = new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(x);
}
})();
var block_uid = (function (){var or__4185__auto__ = new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(x);
}
})();
var block_string = new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(x);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.athena.result_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (parent,page_title,block_uid,block_string,vec__50789,i,x,s__50783__$2,temp__5735__auto__,vec__50777,query,map__50780,map__50780__$1,result,pages,blocks,_STAR_cache,_STAR_match,db,athena_QMARK_,handler){
return (function (){
return athens.router.navigate_page(block_uid);
});})(parent,page_title,block_uid,block_string,vec__50789,i,x,s__50783__$2,temp__5735__auto__,vec__50777,query,map__50780,map__50780__$1,result,pages,blocks,_STAR_cache,_STAR_match,db,athena_QMARK_,handler))
], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.title","h4.title",-103059385),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.athena.result_style,new cljs.core.Keyword(null,"title","title",636505583)),athens.devcards.athena.highlight_match(query,page_title)], null),(cljs.core.truth_(block_string)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.preview","span.preview",391484430),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.athena.result_style,new cljs.core.Keyword(null,"preview","preview",451279890)),athens.devcards.athena.highlight_match(query,block_string)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.link-leader","span.link-leader",-227077341),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.athena.result_style,new cljs.core.Keyword(null,"link-leader","link-leader",-1261639700)),"->"], null)], null);
})(),athens$devcards$athena$athena_$_iter__50782(cljs.core.rest(s__50783__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.take.cljs$core$IFn$_invoke$arity$2((40),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((20),pages),blocks))));
})()], null);
} else {
return null;
}
})], null)], null);
} else {
return null;
}
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.athena","athens.devcards.athena",-1935975160),new cljs.core.Keyword(null,"Athena-Prompt","Athena-Prompt",-1346277474)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Athena-Prompt",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Must press again to close. Doesn't go away if you click outside.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.t_athens$devcards$athena50792 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.athena.t_athens$devcards$athena50792 = (function (meta50793){
this.meta50793 = meta50793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.athena.t_athens$devcards$athena50792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50794,meta50793__$1){
var self__ = this;
var _50794__$1 = this;
return (new athens.devcards.athena.t_athens$devcards$athena50792(meta50793__$1));
}));

(athens.devcards.athena.t_athens$devcards$athena50792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50794){
var self__ = this;
var _50794__$1 = this;
return self__.meta50793;
}));

(athens.devcards.athena.t_athens$devcards$athena50792.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.athena.t_athens$devcards$athena50792.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47891__auto__,devcard_opts__47892__auto__){
var self__ = this;
var this__47891__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47892__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47910__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.athena.athena_prompt], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.athena.athena,athens.devcards.athena.conn], null)], null);
if(cljs.core.fn_QMARK_(v__47910__auto__)){
return (function (data_atom__47911__auto__,owner__47912__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47910__auto__,data_atom__47911__auto__,owner__47912__auto__], null));
});
} else {
return reagent.core.as_element(v__47910__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47892__auto__))], 0))], 0));
}));

(athens.devcards.athena.t_athens$devcards$athena50792.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50793","meta50793",-1982604648,null)], null);
}));

(athens.devcards.athena.t_athens$devcards$athena50792.cljs$lang$type = true);

(athens.devcards.athena.t_athens$devcards$athena50792.cljs$lang$ctorStr = "athens.devcards.athena/t_athens$devcards$athena50792");

(athens.devcards.athena.t_athens$devcards$athena50792.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.athena/t_athens$devcards$athena50792");
}));

/**
 * Positional factory function for athens.devcards.athena/t_athens$devcards$athena50792.
 */
athens.devcards.athena.__GT_t_athens$devcards$athena50792 = (function athens$devcards$athena$__GT_t_athens$devcards$athena50792(meta50793){
return (new athens.devcards.athena.t_athens$devcards$athena50792(meta50793));
});

}

return (new athens.devcards.athena.t_athens$devcards$athena50792(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.athena.js.map