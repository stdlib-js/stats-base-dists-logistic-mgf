// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var c=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,h,"e"),t=l.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,y,"e-0$1"),r.alternate&&(t=l.call(t,g,"$1."),t=l.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):f.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var A=String.fromCharCode,N=Array.isArray;function _(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,n,t,a,o,c,f,s,l,p,y,g,d;if(!N(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,s=0;s<r.length;s++)if("string"==typeof(t=r[s]))c+=t;else{if(e=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(f=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[f],10),f+=1,_(t.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[f],10),f+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[f],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!_(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(o)?String(t.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,y=t.width,g=t.padRight,d=void 0,(d=y-p.length)<0?p:p=g?p+m(d):m(d)+p)),c+=t.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,n,t,i;for(n=[],i=0,t=S.exec(r);t;)(e=r.slice(i,S.lastIndex-t[0].length)).length&&n.push(e),n.push(I(t)),i=S.lastIndex,t=S.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function x(r){var e,n;if("string"!=typeof r)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return U.apply(null,e)}var F=Object.prototype,j=F.toString,T=F.__defineGetter__,O=F.__defineSetter__,V=F.__lookupGetter__,$=F.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===j.call(n))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,e)||$.call(r,e)?(t=r.__proto__,r.__proto__=F,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,n.get),o&&O&&O.call(r,e,n.set),r};function H(r,e,n){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function W(r){return r!=r}var C=Number.POSITIVE_INFINITY,L=Number.NEGATIVE_INFINITY;function P(r){return r===C||r===L}var R,M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),Z=Object.prototype.toString,X=Object.prototype.hasOwnProperty,Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"",q=M&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return Z.call(r);n=r[z],a=z,e=null!=(i=r)&&X.call(i,a);try{r[z]=void 0}catch(e){return Z.call(r)}return t=Z.call(r),e?r[z]=n:delete r[z],t}:function(r){return Z.call(r)},B="function"==typeof Uint32Array,D="function"==typeof Uint32Array?Uint32Array:null,J="function"==typeof Uint32Array?Uint32Array:void 0;R=function(){var r,e,n;if("function"!=typeof D)return!1;try{e=new D(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(B&&n instanceof Uint32Array||"[object Uint32Array]"===q(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?J:function(){throw new Error("not implemented")};var K,Q=R,rr="function"==typeof Float64Array,er="function"==typeof Float64Array?Float64Array:null,nr="function"==typeof Float64Array?Float64Array:void 0;K=function(){var r,e,n;if("function"!=typeof er)return!1;try{e=new er([1,3.14,-3.14,NaN]),n=e,r=(rr&&n instanceof Float64Array||"[object Float64Array]"===q(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var tr,ir=K,ar="function"==typeof Uint8Array,or="function"==typeof Uint8Array?Uint8Array:null,ur="function"==typeof Uint8Array?Uint8Array:void 0;tr=function(){var r,e,n;if("function"!=typeof or)return!1;try{e=new or(e=[1,3.14,-3.14,256,257]),n=e,r=(ar&&n instanceof Uint8Array||"[object Uint8Array]"===q(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var cr,fr=tr,sr="function"==typeof Uint16Array,lr="function"==typeof Uint16Array?Uint16Array:null,pr="function"==typeof Uint16Array?Uint16Array:void 0;cr=function(){var r,e,n;if("function"!=typeof lr)return!1;try{e=new lr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(sr&&n instanceof Uint16Array||"[object Uint16Array]"===q(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var yr,gr={uint16:cr,uint8:fr};(yr=new gr.uint16(1))[0]=4660;var dr=52===new gr.uint8(yr.buffer)[0],vr=!0===dr?1:0,hr=new ir(1),wr=new Q(hr.buffer);function br(r){return hr[0]=r,wr[vr]}function mr(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var Ar=-.16666666666666632,Nr=.00833333333332249,_r=-.0001984126982985795,Er=27557313707070068e-22,Ur=-2.5050760253406863e-8,Sr=1.58969099521155e-10;function Ir(r,e){var n,t,i;return n=Nr+(i=r*r)*(_r+i*Er)+i*(i*i)*(Ur+i*Sr),t=i*r,0===e?r+t*(Ar+i*n):r-(i*(.5*e-t*n)-e-t*Ar)}var kr,xr,Fr=2147483647,jr=2146435072,Tr=1048575,Or=!0===dr?0:1,Vr=new ir(1),$r=new Q(Vr.buffer);!0===dr?(kr=1,xr=0):(kr=0,xr=1);var Gr={HIGH:kr,LOW:xr},Hr=new ir(1),Wr=new Q(Hr.buffer),Cr=Gr.HIGH,Lr=Gr.LOW;function Pr(r,e){return Wr[Cr]=r,Wr[Lr]=e,Hr[0]}var Rr,Mr,Zr=Math.floor,Xr=1023,Yr=1023,zr=-1023,qr=-1074,Br=2147483648;!0===dr?(Rr=1,Mr=0):(Rr=0,Mr=1);var Dr={HIGH:Rr,LOW:Mr},Jr=new ir(1),Kr=new Q(Jr.buffer),Qr=Dr.HIGH,re=Dr.LOW;function ee(r,e,n,t){return Jr[0]=r,e[t]=Kr[Qr],e[t+n]=Kr[re],e}function ne(r){return ee(r,[0,0],1,0)}H(ne,"assign",ee);var te=[0,0];function ie(r,e){var n,t;return ne.assign(r,te,1,0),n=te[0],n&=Fr,t=br(e),Pr(n|=t&=Br,te[1])}var ae=22250738585072014e-324;function oe(r){return Math.abs(r)}var ue=4503599627370496;function ce(r,e,n,t){return W(r)||P(r)?(e[t]=r,e[t+n]=0,e):0!==r&&oe(r)<ae?(e[t]=r*ue,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}H((function(r){return ce(r,[0,0],1,0)}),"assign",ce);var fe=2220446049250313e-31,se=2148532223,le=[0,0],pe=[0,0];function ye(r,e){var n,t;return 0===e||0===r||W(r)||P(r)?r:(ce(r,le,1,0),r=le[0],e+=le[1],e+=function(r){var e=br(r);return(e=(e&jr)>>>20)-Xr|0}(r),e<qr?ie(0,r):e>Yr?r<0?L:C:(e<=zr?(e+=52,t=fe):t=1,ne.assign(r,pe,1,0),n=pe[0],n&=se,t*Pr(n|=e+Xr<<20,pe[1])))}function ge(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var de=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ve=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],he=16777216,we=5.960464477539063e-8,be=ge(20),me=ge(20),Ae=ge(20),Ne=ge(20);function _e(r,e,n,t,i,a,o,u,c){var f,s,l,p,y,g,d,v,h;for(p=a,h=t[n],v=n,y=0;v>0;y++)s=we*h|0,Ne[y]=h-he*s|0,h=t[v-1]+s,v-=1;if(h=ye(h,i),h-=8*Zr(.125*h),h-=d=0|h,l=0,i>0?(d+=y=Ne[n-1]>>24-i,Ne[n-1]-=y<<24-i,l=Ne[n-1]>>23-i):0===i?l=Ne[n-1]>>23:h>=.5&&(l=2),l>0){for(d+=1,f=0,y=0;y<n;y++)v=Ne[y],0===f?0!==v&&(f=1,Ne[y]=16777216-v):Ne[y]=16777215-v;if(i>0)switch(i){case 1:Ne[n-1]&=8388607;break;case 2:Ne[n-1]&=4194303}2===l&&(h=1-h,0!==f&&(h-=ye(1,i)))}if(0===h){for(v=0,y=n-1;y>=a;y--)v|=Ne[y];if(0===v){for(g=1;0===Ne[a-g];g++);for(y=n+1;y<=n+g;y++){for(c[u+y]=de[o+y],s=0,v=0;v<=u;v++)s+=r[v]*c[u+(y-v)];t[y]=s}return _e(r,e,n+=g,t,i,a,o,u,c)}}if(0===h)for(n-=1,i-=24;0===Ne[n];)n-=1,i-=24;else(h=ye(h,-i))>=he?(s=we*h|0,Ne[n]=h-he*s|0,i+=24,Ne[n+=1]=s):Ne[n]=0|h;for(s=ye(1,i),y=n;y>=0;y--)t[y]=s*Ne[y],s*=we;for(y=n;y>=0;y--){for(s=0,g=0;g<=p&&g<=n-y;g++)s+=ve[g]*t[y+g];Ae[n-y]=s}for(s=0,y=n;y>=0;y--)s+=Ae[y];for(e[0]=0===l?s:-s,s=Ae[0]-s,y=1;y<=n;y++)s+=Ae[y];return e[1]=0===l?s:-s,7&d}function Ee(r,e,n,t){var i,a,o,u,c,f,s;for((a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),f=a-(o=t-1),s=o+4,c=0;c<=s;c++)be[c]=f<0?0:de[f],f+=1;for(c=0;c<=4;c++){for(i=0,f=0;f<=o;f++)i+=r[f]*be[o+(c-f)];me[c]=i}return _e(r,e,4,me,u,4,a,o,be)}var Ue=Math.round,Se=.6366197723675814,Ie=1.5707963267341256,ke=6077100506506192e-26,xe=6077100506303966e-26,Fe=20222662487959506e-37,je=20222662487111665e-37,Te=84784276603689e-45,Oe=2047;function Ve(r,e,n){var t,i,a,o,u;return a=r-(t=Ue(r*Se))*Ie,o=t*ke,u=e>>20|0,n[0]=a-o,u-(br(n[0])>>20&Oe)>16&&(o=t*Fe-((i=a)-(a=i-(o=t*xe))-o),n[0]=a-o,u-(br(n[0])>>20&Oe)>49&&(o=t*Te-((i=a)-(a=i-(o=t*je))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var $e=0,Ge=16777216,He=1.5707963267341256,We=6077100506506192e-26,Ce=2*We,Le=3*We,Pe=4*We,Re=598523,Me=1072243195,Ze=1073928572,Xe=1074752122,Ye=1074977148,ze=1075183036,qe=1075388923,Be=1075594811,De=1094263291,Je=[0,0,0],Ke=[0,0];function Qe(r,e){var n,t,i,a,o,u,c;if((i=br(r)&Fr|0)<=Me)return e[0]=r,e[1]=0,0;if(i<=Xe)return(i&Tr)===Re?Ve(r,i,e):i<=Ze?r>0?(c=r-He,e[0]=c-We,e[1]=c-e[0]-We,1):(c=r+He,e[0]=c+We,e[1]=c-e[0]+We,-1):r>0?(c=r-2*He,e[0]=c-Ce,e[1]=c-e[0]-Ce,2):(c=r+2*He,e[0]=c+Ce,e[1]=c-e[0]+Ce,-2);if(i<=Be)return i<=ze?i===Ye?Ve(r,i,e):r>0?(c=r-3*He,e[0]=c-Le,e[1]=c-e[0]-Le,3):(c=r+3*He,e[0]=c+Le,e[1]=c-e[0]+Le,-3):i===qe?Ve(r,i,e):r>0?(c=r-4*He,e[0]=c-Pe,e[1]=c-e[0]-Pe,4):(c=r+4*He,e[0]=c+Pe,e[1]=c-e[0]+Pe,-4);if(i<De)return Ve(r,i,e);if(i>=jr)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return Vr[0]=r,$r[Or]}(r),c=Pr(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)Je[o]=0|c,c=(c-Je[o])*Ge;for(Je[2]=c,a=3;Je[a-1]===$e;)a-=1;return u=Ee(Je,Ke,t,a),r<0?(e[0]=-Ke[0],e[1]=-Ke[1],-u):(e[0]=Ke[0],e[1]=Ke[1],u)}var rn=[0,0],en=2147483647,nn=1072243195,tn=1044381696,an=2146435072;function on(r){var e;if(e=br(r),(e&=en)<=nn)return e<tn?1:mr(r,0);if(e>=an)return NaN;switch(3&Qe(r,rn)){case 0:return mr(rn[0],rn[1]);case 1:return-Ir(rn[0],rn[1]);case 2:return-mr(rn[0],rn[1]);default:return Ir(rn[0],rn[1])}}var un=1072243195,cn=1045430272,fn=[0,0];function sn(r){var e;if(e=br(r),(e&=Fr)<=un)return e<cn?r:Ir(r,0);if(e>=jr)return NaN;switch(3&Qe(r,fn)){case 0:return Ir(fn[0],fn[1]);case 1:return mr(fn[0],fn[1]);case 2:return-Ir(fn[0],fn[1]);default:return-mr(fn[0],fn[1])}}var ln=3.141592653589793;function pn(r){return W(r)?NaN:P(r)?0:0===r?1:function(r){var e,n;return W(r)||P(r)?NaN:0===(e=oe(n=r%2))||1===e?ie(0,n):e<.25?sn(ln*n):e<.75?ie(on(ln*(e=.5-e)),n):e<1.25?(n=ie(1,n)-n,sn(ln*n)):e<1.75?-ie(on(ln*(e-=1.5)),n):(n-=ie(2,n),sn(ln*n))}(r)/(ln*r)}var yn=Math.ceil;function gn(r){return r<0?yn(r):Zr(r)}var dn=.6931471803691238,vn=1.9082149292705877e-10,hn=1.4426950408889634,wn=709.782712893384,bn=-745.1332191019411,mn=1/(1<<28),An=-mn;function Nn(r){var e;return W(r)||r===C?r:r===L?0:r>wn?C:r<bn?0:r>An&&r<mn?1+r:function(r,e,n){var t,i,a,o;return ye(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-(e=gn(r<0?hn*r-.5:hn*r+.5))*dn,e*vn,e)}function _n(r,e,n){var t;return W(t=n*r)||W(e)||n<0||oe(t)>1?NaN:Nn(e*r)/pn(t)}function En(r){return function(){return r}}function Un(r){return W(r)?En(NaN):function(e){return W(e)?NaN:Nn(r*e)}}return H((function(r,e){return W(r)||W(e)?NaN:Nn(e*r)}),"factory",Un),H(_n,"factory",(function(r,e){return W(r)||W(e)||e<0?En(NaN):0===e?Un(r):function(n){var t=e*n;return oe(t)>1?NaN:Nn(r*n)/pn(t)}})),_n},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).mgf=e();
//# sourceMappingURL=browser.js.map
