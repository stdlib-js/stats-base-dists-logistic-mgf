// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,f=e.__defineSetter__,i=e.__lookupGetter__,a=e.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(i.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),v&&f&&f.call(r,n,t.set),r};function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function y(r){return r!=r}var v=Number.POSITIVE_INFINITY,p=Number.NEGATIVE_INFINITY;function b(r){return r===v||r===p}var s,d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),w=Object.prototype.toString,N=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",A=d&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return w.call(r);t=r[_],u=_,n=null!=(o=r)&&N.call(o,u);try{r[_]=void 0}catch(n){return w.call(r)}return e=w.call(r),n?r[_]=t:delete r[_],e}:function(r){return w.call(r)},h="function"==typeof Uint32Array,m="function"==typeof Uint32Array?Uint32Array:null,U="function"==typeof Uint32Array?Uint32Array:void 0;s=function(){var r,n,t;if("function"!=typeof m)return!1;try{n=new m(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(h&&t instanceof Uint32Array||"[object Uint32Array]"===A(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?U:function(){throw new Error("not implemented")};var g,j=s,I="function"==typeof Float64Array,O="function"==typeof Float64Array?Float64Array:null,S="function"==typeof Float64Array?Float64Array:void 0;g=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O([1,3.14,-3.14,NaN]),t=n,r=(I&&t instanceof Float64Array||"[object Float64Array]"===A(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E,F=g,T="function"==typeof Uint8Array,H="function"==typeof Uint8Array?Uint8Array:null,G="function"==typeof Uint8Array?Uint8Array:void 0;E=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,256,257]),t=n,r=(T&&t instanceof Uint8Array||"[object Uint8Array]"===A(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P,M=E,x="function"==typeof Uint16Array,L="function"==typeof Uint16Array?Uint16Array:null,V="function"==typeof Uint16Array?Uint16Array:void 0;P=function(){var r,n,t;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,65536,65537]),t=n,r=(x&&t instanceof Uint16Array||"[object Uint16Array]"===A(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?V:function(){throw new Error("not implemented")};var W,k={uint16:P,uint8:M};(W=new k.uint16(1))[0]=4660;var Y=52===new k.uint8(W.buffer)[0],C=!0===Y?1:0,q=new F(1),z=new j(q.buffer);function B(r){return q[0]=r,z[C]}function D(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))}var J=-.16666666666666632;function K(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(J+o*t):r-(o*(.5*n-e*t)-n-e*J)}var Q,R,X=!0===Y?0:1,Z=new F(1),$=new j(Z.buffer);!0===Y?(Q=1,R=0):(Q=0,R=1);var rr={HIGH:Q,LOW:R},nr=new F(1),tr=new j(nr.buffer),er=rr.HIGH,or=rr.LOW;function ur(r,n){return tr[er]=r,tr[or]=n,nr[0]}var fr,ir,ar=Math.floor;!0===Y?(fr=1,ir=0):(fr=0,ir=1);var cr={HIGH:fr,LOW:ir},lr=new F(1),yr=new j(lr.buffer),vr=cr.HIGH,pr=cr.LOW;function br(r,n){return lr[0]=n,r[0]=yr[vr],r[1]=yr[pr],r}function sr(r,n){return 1===arguments.length?br([0,0],r):br(r,n)}var dr=[0,0];function wr(r,n){var t,e;return sr(dr,r),t=dr[0],t&=2147483647,e=B(n),ur(t|=e&=2147483648,dr[1])}function Nr(r){return Math.abs(r)}function _r(r,n){return y(n)||b(n)?(r[0]=n,r[1]=0,r):0!==n&&Nr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var Ar=[0,0],hr=[0,0];function mr(r,n){var t,e;return 0===n||0===r||y(r)||b(r)?r:(function(r,n){1===arguments.length?_r([0,0],r):_r(r,n)}(Ar,r),n+=Ar[1],n+=function(r){var n=B(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Ar[0]),n<-1074?wr(0,r):n>1023?r<0?p:v:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,sr(hr,r),t=hr[0],t&=2148532223,e*ur(t|=n+1023<<20,hr[1])))}function Ur(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var gr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],jr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ir=16777216,Or=5.960464477539063e-8,Sr=Ur(20),Er=Ur(20),Fr=Ur(20),Tr=Ur(20);function Hr(r,n,t,e,o,u,f,i,a){var c,l,y,v,p,b,s,d,w;for(v=u,w=e[t],d=t,p=0;d>0;p++)l=Or*w|0,Tr[p]=w-Ir*l|0,w=e[d-1]+l,d-=1;if(w=mr(w,o),w-=8*ar(.125*w),w-=s=0|w,y=0,o>0?(s+=p=Tr[t-1]>>24-o,Tr[t-1]-=p<<24-o,y=Tr[t-1]>>23-o):0===o?y=Tr[t-1]>>23:w>=.5&&(y=2),y>0){for(s+=1,c=0,p=0;p<t;p++)d=Tr[p],0===c?0!==d&&(c=1,Tr[p]=16777216-d):Tr[p]=16777215-d;if(o>0)switch(o){case 1:Tr[t-1]&=8388607;break;case 2:Tr[t-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=mr(1,o)))}if(0===w){for(d=0,p=t-1;p>=u;p--)d|=Tr[p];if(0===d){for(b=1;0===Tr[u-b];b++);for(p=t+1;p<=t+b;p++){for(a[i+p]=gr[f+p],l=0,d=0;d<=i;d++)l+=r[d]*a[i+(p-d)];e[p]=l}return Hr(r,n,t+=b,e,o,u,f,i,a)}}if(0===w)for(t-=1,o-=24;0===Tr[t];)t-=1,o-=24;else(w=mr(w,-o))>=Ir?(l=Or*w|0,Tr[t]=w-Ir*l|0,o+=24,Tr[t+=1]=l):Tr[t]=0|w;for(l=mr(1,o),p=t;p>=0;p--)e[p]=l*Tr[p],l*=Or;for(p=t;p>=0;p--){for(l=0,b=0;b<=v&&b<=t-p;b++)l+=jr[b]*e[p+b];Fr[t-p]=l}for(l=0,p=t;p>=0;p--)l+=Fr[p];for(n[0]=0===y?l:-l,l=Fr[0]-l,p=1;p<=t;p++)l+=Fr[p];return n[1]=0===y?l:-l,7&s}function Gr(r,n,t,e){var o,u,f,i,a,c,l;for((u=(t-3)/24|0)<0&&(u=0),i=t-24*(u+1),c=u-(f=e-1),l=f+4,a=0;a<=l;a++)Sr[a]=c<0?0:gr[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=f;c++)o+=r[c]*Sr[f+(a-c)];Er[a]=o}return Hr(r,n,4,Er,i,4,u,f,Sr)}var Pr=Math.round;function Mr(r,n,t){var e,o,u,f,i;return u=r-1.5707963267341256*(e=Pr(.6366197723675814*r)),f=6077100506506192e-26*e,i=n>>20|0,t[0]=u-f,i-(B(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((o=u)-(u=o-(f=6077100506303966e-26*e))-f),t[0]=u-f,i-(B(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((o=u)-(u=o-(f=20222662487111665e-37*e))-f),t[0]=u-f)),t[1]=u-t[0]-f,e}var xr=1.5707963267341256,Lr=6077100506506192e-26,Vr=2*Lr,Wr=3*Lr,kr=4*Lr,Yr=[0,0,0],Cr=[0,0];function qr(r,n){var t,e,o,u,f,i,a;if((o=2147483647&B(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Mr(r,o,n):o<=1073928572?r>0?(a=r-xr,n[0]=a-Lr,n[1]=a-n[0]-Lr,1):(a=r+xr,n[0]=a+Lr,n[1]=a-n[0]+Lr,-1):r>0?(a=r-2*xr,n[0]=a-Vr,n[1]=a-n[0]-Vr,2):(a=r+2*xr,n[0]=a+Vr,n[1]=a-n[0]+Vr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Mr(r,o,n):r>0?(a=r-3*xr,n[0]=a-Wr,n[1]=a-n[0]-Wr,3):(a=r+3*xr,n[0]=a+Wr,n[1]=a-n[0]+Wr,-3):1075388923===o?Mr(r,o,n):r>0?(a=r-4*xr,n[0]=a-kr,n[1]=a-n[0]-kr,4):(a=r+4*xr,n[0]=a+kr,n[1]=a-n[0]+kr,-4);if(o<1094263291)return Mr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Z[0]=r,$[X]}(r),a=ur(o-((e=(o>>20)-1046)<<20|0),t),f=0;f<2;f++)Yr[f]=0|a,a=16777216*(a-Yr[f]);for(Yr[2]=a,u=3;0===Yr[u-1];)u-=1;return i=Gr(Yr,Cr,e,u),r<0?(n[0]=-Cr[0],n[1]=-Cr[1],-i):(n[0]=Cr[0],n[1]=Cr[1],i)}var zr=[0,0];function Br(r){var n;if(n=B(r),(n&=2147483647)<=1072243195)return n<1044381696?1:D(r,0);if(n>=2146435072)return NaN;switch(3&qr(r,zr)){case 0:return D(zr[0],zr[1]);case 1:return-K(zr[0],zr[1]);case 2:return-D(zr[0],zr[1]);default:return K(zr[0],zr[1])}}var Dr=[0,0];function Jr(r){var n;if(n=B(r),(n&=2147483647)<=1072243195)return n<1045430272?r:K(r,0);if(n>=2146435072)return NaN;switch(3&qr(r,Dr)){case 0:return K(Dr[0],Dr[1]);case 1:return D(Dr[0],Dr[1]);case 2:return-K(Dr[0],Dr[1]);default:return-D(Dr[0],Dr[1])}}var Kr=3.141592653589793;function Qr(r){return y(r)?NaN:b(r)?0:0===r?1:function(r){var n,t;return y(r)||b(r)?NaN:0===(n=Nr(t=r%2))||1===n?wr(0,t):n<.25?Jr(Kr*t):n<.75?wr(Br(Kr*(n=.5-n)),t):n<1.25?(t=wr(1,t)-t,Jr(Kr*t)):n<1.75?-wr(Br(Kr*(n-=1.5)),t):(t-=wr(2,t),Jr(Kr*t))}(r)/(Kr*r)}var Rr=Math.ceil;function Xr(r){return r<0?Rr(r):ar(r)}var Zr=1.4426950408889634,$r=1/(1<<28);function rn(r){var n;return y(r)||r===v?r:r===p?0:r>709.782712893384?v:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<$r?1+r:function(r,n,t){var e,o,u,f;return mr(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(f=o)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=Xr(r<0?Zr*r-.5:Zr*r+.5)),1.9082149292705877e-10*n,n)}function nn(r,n,t){var e;return y(e=t*r)||y(n)||t<0||Nr(e)>1?NaN:rn(n*r)/Qr(e)}function tn(r){return function(){return r}}function en(r){return y(r)?tn(NaN):function(n){return y(n)?NaN:rn(r*n)}}function on(r,n){return y(r)||y(n)||n<0?tn(NaN):0===n?en(r):function(t){var e=n*t;return Nr(e)>1?NaN:rn(r*t)/Qr(e)}}l((function(r,n){return y(r)||y(n)?NaN:rn(n*r)}),"factory",en),l(nn,"factory",on),r.default=nn,r.factory=on,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).mgf={});
//# sourceMappingURL=index.js.map
