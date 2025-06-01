"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=v(function(D,o){
var m=require('@stdlib/strided-base-reinterpret-complex64/dist'),R=require('@stdlib/complex-float32-base-scale/dist').strided;function _(e,r,a,i,j){var t,s,q,u;if(e<=0||r===1)return a;for(t=m(a,0),s=j*2,q=i*2,u=0;u<e;u++)R(r,t,1,s,t,1,s),s+=q;return a}o.exports=_
});var f=v(function(F,d){
var E=require('@stdlib/strided-base-stride2offset/dist'),O=n();function b(e,r,a,i){return O(e,r,a,i,E(e,i))}d.exports=b
});var x=v(function(G,p){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=f(),k=n();g(l,"ndarray",k);p.exports=l
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=x(),c,y=z(w(__dirname,"./native.js"));A(y)?c=B:c=y;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
