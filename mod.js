// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,a=e.__defineSetter__,f=e.__lookupGetter__,i=e.__lookupSetter__;var c=t,v=function(r,n,t){var c,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((v="value"in t)&&(f.call(r,n)||i.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),l="get"in t,y="set"in t,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&u&&u.call(r,n,t.get),y&&a&&a.call(r,n,t.set),r},l=n()?c:v;var y=function(r,n,t){l(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(r){return r!=r},b=Number.POSITIVE_INFINITY,w=Number.NEGATIVE_INFINITY,s=b,N=w;var A=function(r){return r===s||r===N};var _=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var d=function(){return _&&"symbol"==typeof Symbol.toStringTag},h=Object.prototype.toString,m=h;var U=function(r){return m.call(r)},j=Object.prototype.hasOwnProperty;var g=function(r,n){return null!=r&&j.call(r,n)},I="function"==typeof Symbol?Symbol.toStringTag:"",O=g,S=I,E=h;var F=U,H=function(r){var n,t,e;if(null==r)return E.call(r);t=r[S],n=O(r,S);try{r[S]=void 0}catch(n){return E.call(r)}return e=E.call(r),n?r[S]=t:delete r[S],e},T=d()?H:F,G=T,P="function"==typeof Uint32Array;var L="function"==typeof Uint32Array?Uint32Array:null,M=function(r){return P&&r instanceof Uint32Array||"[object Uint32Array]"===G(r)},V=L;var W=function(){var r,n;if("function"!=typeof V)return!1;try{n=new V(n=[1,3.14,-3.14,4294967296,4294967297]),r=M(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var k="function"==typeof Uint32Array?Uint32Array:void 0,x=function(){throw new Error("not implemented")},Y=W()?k:x,C=T,q="function"==typeof Float64Array;var z="function"==typeof Float64Array?Float64Array:null,B=function(r){return q&&r instanceof Float64Array||"[object Float64Array]"===C(r)},D=z;var J=function(){var r,n;if("function"!=typeof D)return!1;try{n=new D([1,3.14,-3.14,NaN]),r=B(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var K="function"==typeof Float64Array?Float64Array:void 0,Q=function(){throw new Error("not implemented")},R=J()?K:Q,X=T,Z="function"==typeof Uint8Array;var $="function"==typeof Uint8Array?Uint8Array:null,rr=function(r){return Z&&r instanceof Uint8Array||"[object Uint8Array]"===X(r)},nr=$;var tr=function(){var r,n;if("function"!=typeof nr)return!1;try{n=new nr(n=[1,3.14,-3.14,256,257]),r=rr(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var er="function"==typeof Uint8Array?Uint8Array:void 0,or=function(){throw new Error("not implemented")},ur=tr()?er:or,ar=T,fr="function"==typeof Uint16Array;var ir="function"==typeof Uint16Array?Uint16Array:null,cr=function(r){return fr&&r instanceof Uint16Array||"[object Uint16Array]"===ar(r)},vr=ir;var lr=function(){var r,n;if("function"!=typeof vr)return!1;try{n=new vr(n=[1,3.14,-3.14,65536,65537]),r=cr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var yr,pr="function"==typeof Uint16Array?Uint16Array:void 0,br=function(){throw new Error("not implemented")},wr={uint16:lr()?pr:br,uint8:ur};(yr=new wr.uint16(1))[0]=4660;var sr=52===new wr.uint8(yr.buffer)[0],Nr=Y,Ar=!0===sr?1:0,_r=new R(1),dr=new Nr(_r.buffer);var hr=function(r){return _r[0]=r,dr[Ar]};var mr=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},Ur=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var jr=function(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*mr(u),e+=o*o*Ur(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))},gr=-.16666666666666632;var Ir=function(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(gr+o*t):r-(o*(.5*n-e*t)-n-e*gr)},Or=Y,Sr=!0===sr?0:1,Er=new R(1),Fr=new Or(Er.buffer);var Hr,Tr,Gr=function(r){return Er[0]=r,Fr[Sr]};!0===sr?(Hr=1,Tr=0):(Hr=0,Tr=1);var Pr=Y,Lr={HIGH:Hr,LOW:Tr},Mr=new R(1),Vr=new Pr(Mr.buffer),Wr=Lr.HIGH,kr=Lr.LOW;var xr,Yr,Cr=function(r,n){return Vr[Wr]=r,Vr[kr]=n,Mr[0]},qr=Cr,zr=Math.floor;!0===sr?(xr=1,Yr=0):(xr=0,Yr=1);var Br=Y,Dr={HIGH:xr,LOW:Yr},Jr=new R(1),Kr=new Br(Jr.buffer),Qr=Dr.HIGH,Rr=Dr.LOW;var Xr=function(r,n){return Jr[0]=n,r[0]=Kr[Qr],r[1]=Kr[Rr],r};var Zr=function(r,n){return 1===arguments.length?Xr([0,0],r):Xr(r,n)},$r=Zr,rn=hr,nn=qr,tn=[0,0];var en=function(r,n){var t,e;return $r(tn,r),t=tn[0],t&=2147483647,e=rn(n),nn(t|=e&=2147483648,tn[1])};var on=function(r){return Math.abs(r)},un=A,an=p,fn=on;var cn=function(r,n){return an(n)||un(n)?(r[0]=n,r[1]=0,r):0!==n&&fn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var vn=hr;var ln=function(r){var n=vn(r);return(n=(2146435072&n)>>>20)-1023|0},yn=b,pn=w,bn=p,wn=A,sn=en,Nn=function(r,n){return 1===arguments.length?cn([0,0],r):cn(r,n)},An=ln,_n=Zr,dn=qr,hn=[0,0],mn=[0,0];var Un=function(r,n){var t,e;return 0===n||0===r||bn(r)||wn(r)?r:(Nn(hn,r),n+=hn[1],(n+=An(r=hn[0]))<-1074?sn(0,r):n>1023?r<0?pn:yn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,_n(mn,r),t=mn[0],t&=2148532223,e*dn(t|=n+1023<<20,mn[1])))},jn=Un;var gn=function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t};var In=zr,On=jn,Sn=function(r){return gn(0,r)},En=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Fn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Hn=5.960464477539063e-8,Tn=Sn(20),Gn=Sn(20),Pn=Sn(20),Ln=Sn(20);function Mn(r,n,t,e,o,u,a,f,i){var c,v,l,y,p,b,w,s,N;for(y=u,N=e[t],s=t,p=0;s>0;p++)v=Hn*N|0,Ln[p]=N-16777216*v|0,N=e[s-1]+v,s-=1;if(N=On(N,o),N-=8*In(.125*N),N-=w=0|N,l=0,o>0?(w+=p=Ln[t-1]>>24-o,Ln[t-1]-=p<<24-o,l=Ln[t-1]>>23-o):0===o?l=Ln[t-1]>>23:N>=.5&&(l=2),l>0){for(w+=1,c=0,p=0;p<t;p++)s=Ln[p],0===c?0!==s&&(c=1,Ln[p]=16777216-s):Ln[p]=16777215-s;if(o>0)switch(o){case 1:Ln[t-1]&=8388607;break;case 2:Ln[t-1]&=4194303}2===l&&(N=1-N,0!==c&&(N-=On(1,o)))}if(0===N){for(s=0,p=t-1;p>=u;p--)s|=Ln[p];if(0===s){for(b=1;0===Ln[u-b];b++);for(p=t+1;p<=t+b;p++){for(i[f+p]=En[a+p],v=0,s=0;s<=f;s++)v+=r[s]*i[f+(p-s)];e[p]=v}return Mn(r,n,t+=b,e,o,u,a,f,i)}}if(0===N)for(t-=1,o-=24;0===Ln[t];)t-=1,o-=24;else(N=On(N,-o))>=16777216?(v=Hn*N|0,Ln[t]=N-16777216*v|0,o+=24,Ln[t+=1]=v):Ln[t]=0|N;for(v=On(1,o),p=t;p>=0;p--)e[p]=v*Ln[p],v*=Hn;for(p=t;p>=0;p--){for(v=0,b=0;b<=y&&b<=t-p;b++)v+=Fn[b]*e[p+b];Pn[t-p]=v}for(v=0,p=t;p>=0;p--)v+=Pn[p];for(n[0]=0===l?v:-v,v=Pn[0]-v,p=1;p<=t;p++)v+=Pn[p];return n[1]=0===l?v:-v,7&w}var Vn=function(r,n,t,e){var o,u,a,f,i,c,v;for(4,(u=(t-3)/24|0)<0&&(u=0),f=t-24*(u+1),c=u-(a=e-1),v=a+4,i=0;i<=v;i++)Tn[i]=c<0?0:En[c],c+=1;for(i=0;i<=4;i++){for(o=0,c=0;c<=a;c++)o+=r[c]*Tn[a+(i-c)];Gn[i]=o}return 4,Mn(r,n,4,Gn,f,4,u,a,Tn)},Wn=Math.round,kn=hr;var xn=hr,Yn=Gr,Cn=qr,qn=Vn,zn=function(r,n,t){var e,o,u,a,f;return u=r-1.5707963267341256*(e=Wn(.6366197723675814*r)),a=6077100506506192e-26*e,f=n>>20|0,t[0]=u-a,f-(kn(t[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((o=u)-(u=o-(a=6077100506303966e-26*e))-a),t[0]=u-a,f-(kn(t[0])>>20&2047)>49&&(a=84784276603689e-45*e-((o=u)-(u=o-(a=20222662487111665e-37*e))-a),t[0]=u-a)),t[1]=u-t[0]-a,e},Bn=1.5707963267341256,Dn=6077100506506192e-26,Jn=2*Dn,Kn=4*Dn,Qn=[0,0,0],Rn=[0,0];var Xn=function(r,n){var t,e,o,u,a,f,i;if((o=2147483647&xn(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?zn(r,o,n):o<=1073928572?r>0?(i=r-Bn,n[0]=i-Dn,n[1]=i-n[0]-Dn,1):(i=r+Bn,n[0]=i+Dn,n[1]=i-n[0]+Dn,-1):r>0?(i=r-2*Bn,n[0]=i-Jn,n[1]=i-n[0]-Jn,2):(i=r+2*Bn,n[0]=i+Jn,n[1]=i-n[0]+Jn,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?zn(r,o,n):r>0?(i=r-3*Bn,n[0]=i-1.8231301519518578e-10,n[1]=i-n[0]-1.8231301519518578e-10,3):(i=r+3*Bn,n[0]=i+1.8231301519518578e-10,n[1]=i-n[0]+1.8231301519518578e-10,-3):1075388923===o?zn(r,o,n):r>0?(i=r-4*Bn,n[0]=i-Kn,n[1]=i-n[0]-Kn,4):(i=r+4*Bn,n[0]=i+Kn,n[1]=i-n[0]+Kn,-4);if(o<1094263291)return zn(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=Yn(r),i=Cn(o-((e=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)Qn[a]=0|i,i=16777216*(i-Qn[a]);for(Qn[2]=i,u=3;0===Qn[u-1];)u-=1;return f=qn(Qn,Rn,e,u),r<0?(n[0]=-Rn[0],n[1]=-Rn[1],-f):(n[0]=Rn[0],n[1]=Rn[1],f)},Zn=hr,$n=jr,rt=Ir,nt=Xn,tt=[0,0];var et=hr,ot=jr,ut=Ir,at=Xn,ft=[0,0];var it=p,ct=A,vt=function(r){var n;if(n=Zn(r),(n&=2147483647)<=1072243195)return n<1044381696?1:$n(r,0);if(n>=2146435072)return NaN;switch(3&nt(r,tt)){case 0:return $n(tt[0],tt[1]);case 1:return-rt(tt[0],tt[1]);case 2:return-$n(tt[0],tt[1]);default:return rt(tt[0],tt[1])}},lt=function(r){var n;if(n=et(r),(n&=2147483647)<=1072243195)return n<1045430272?r:ut(r,0);if(n>=2146435072)return NaN;switch(3&at(r,ft)){case 0:return ut(ft[0],ft[1]);case 1:return ot(ft[0],ft[1]);case 2:return-ut(ft[0],ft[1]);default:return-ot(ft[0],ft[1])}},yt=on,pt=en,bt=3.141592653589793;var wt=function(r){var n,t;return it(r)||ct(r)?NaN:0===(n=yt(t=r%2))||1===n?pt(0,t):n<.25?lt(bt*t):n<.75?pt(vt(bt*(n=.5-n)),t):n<1.25?(t=pt(1,t)-t,lt(bt*t)):n<1.75?-pt(vt(bt*(n-=1.5)),t):(t-=pt(2,t),lt(bt*t))},st=p,Nt=A;var At=function(r){return st(r)?NaN:Nt(r)?0:0===r?1:wt(r)/(3.141592653589793*r)},_t=Math.ceil,dt=zr,ht=_t;var mt=jn,Ut=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var jt=p,gt=function(r){return r<0?ht(r):dt(r)},It=w,Ot=b,St=function(r,n,t){var e,o,u;return u=(e=r-n)-(o=e*e)*Ut(o),mt(1-(n-e*u/(2-u)-r),t)};var Et=function(r){var n;return jt(r)||r===Ot?r:r===It?0:r>709.782712893384?Ot:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(n=gt(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),St(r-.6931471803691238*n,1.9082149292705877e-10*n,n))};function Ft(r,n,t){var e;return p(e=t*r)||p(n)||t<0||on(e)>1?NaN:Et(n*r)/At(e)}var Ht=function(r){return function(){return r}},Tt=p,Gt=Et;var Pt=Ht,Lt=p,Mt=Et;var Vt=function(r){return Lt(r)?Pt(NaN):function(n){if(Lt(n))return NaN;return Mt(r*n)}};function Wt(r,n){return p(r)||p(n)||n<0?Ht(NaN):0===n?Vt(r):function(t){var e=n*t;if(on(e)>1)return NaN;return Et(r*t)/At(e)}}y((function(r,n){return Tt(r)||Tt(n)?NaN:Gt(n*r)}),"factory",Vt),y(Ft,"factory",Wt);export{Ft as default,Wt as factory};
//# sourceMappingURL=mod.js.map
