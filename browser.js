// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r,n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return n({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,f=o.__defineGetter__,i=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__,l=e,y=function(r,n,t){var e,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(a.call(r,n)||c.call(r,n)?(e=r.__proto__,r.__proto__=o,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&f&&f.call(r,n,t.get),p&&i&&i.call(r,n,t.set),r},p=t()?l:y,v=function(r,n,t){p(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})},b=function(r){return r!=r},s=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY,w=s,N=d,A=function(r){return r===w||r===N},_="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),m=Object.prototype.toString,h=m,U=function(r){return h.call(r)},g=Object.prototype.hasOwnProperty,j=function(r,n){return null!=r&&g.call(r,n)},I="function"==typeof Symbol?Symbol.toStringTag:"",O=j,S=I,E=m,F=U,T=function(r){var n,t,e;if(null==r)return E.call(r);t=r[S],n=O(r,S);try{r[S]=void 0}catch(n){return E.call(r)}return e=E.call(r),n?r[S]=t:delete r[S],e},H=_&&"symbol"==typeof Symbol.toStringTag?T:F,G=H,P="function"==typeof Uint32Array,L="function"==typeof Uint32Array?Uint32Array:null,M=function(r){return P&&r instanceof Uint32Array||"[object Uint32Array]"===G(r)},V=L,W=function(){var r,n;if("function"!=typeof V)return!1;try{n=new V(n=[1,3.14,-3.14,4294967296,4294967297]),r=M(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},k="function"==typeof Uint32Array?Uint32Array:void 0,x=function(){throw new Error("not implemented")},Y=W()?k:x,C=H,q="function"==typeof Float64Array,z="function"==typeof Float64Array?Float64Array:null,B=function(r){return q&&r instanceof Float64Array||"[object Float64Array]"===C(r)},D=z,J=function(){var r,n;if("function"!=typeof D)return!1;try{n=new D([1,3.14,-3.14,NaN]),r=B(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r},K="function"==typeof Float64Array?Float64Array:void 0,Q=function(){throw new Error("not implemented")},R=J()?K:Q,X=H,Z="function"==typeof Uint8Array,$="function"==typeof Uint8Array?Uint8Array:null,rr=function(r){return Z&&r instanceof Uint8Array||"[object Uint8Array]"===X(r)},nr=$,tr=function(){var r,n;if("function"!=typeof nr)return!1;try{n=new nr(n=[1,3.14,-3.14,256,257]),r=rr(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},er="function"==typeof Uint8Array?Uint8Array:void 0,or=function(){throw new Error("not implemented")},ur=tr()?er:or,fr=H,ir="function"==typeof Uint16Array,ar="function"==typeof Uint16Array?Uint16Array:null,cr=function(r){return ir&&r instanceof Uint16Array||"[object Uint16Array]"===fr(r)},lr=ar,yr=function(){var r,n;if("function"!=typeof lr)return!1;try{n=new lr(n=[1,3.14,-3.14,65536,65537]),r=cr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},pr="function"==typeof Uint16Array?Uint16Array:void 0,vr=function(){throw new Error("not implemented")},br={uint16:yr()?pr:vr,uint8:ur};(r=new br.uint16(1))[0]=4660;var sr,dr,wr=52===new br.uint8(r.buffer)[0],Nr=Y,Ar=!0===wr?1:0,_r=new R(1),mr=new Nr(_r.buffer),hr=function(r){return _r[0]=r,mr[Ar]},Ur=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},gr=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7},jr=function(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*Ur(u),e+=o*o*gr(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))},Ir=-.16666666666666632,Or=function(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(Ir+o*t):r-(o*(.5*n-e*t)-n-e*Ir)},Sr=Y,Er=!0===wr?0:1,Fr=new R(1),Tr=new Sr(Fr.buffer),Hr=function(r){return Fr[0]=r,Tr[Er]};!0===wr?(sr=1,dr=0):(sr=0,dr=1);var Gr,Pr,Lr=Y,Mr={HIGH:sr,LOW:dr},Vr=new R(1),Wr=new Lr(Vr.buffer),kr=Mr.HIGH,xr=Mr.LOW,Yr=function(r,n){return Wr[kr]=r,Wr[xr]=n,Vr[0]},Cr=Yr,qr=Math.floor;!0===wr?(Gr=1,Pr=0):(Gr=0,Pr=1);var zr=Y,Br={HIGH:Gr,LOW:Pr},Dr=new R(1),Jr=new zr(Dr.buffer),Kr=Br.HIGH,Qr=Br.LOW,Rr=function(r,n){return Dr[0]=n,r[0]=Jr[Kr],r[1]=Jr[Qr],r},Xr=function(r,n){return 1===arguments.length?Rr([0,0],r):Rr(r,n)},Zr=Xr,$r=hr,rn=Cr,nn=[0,0],tn=function(r,n){var t,e;return Zr(nn,r),t=nn[0],t&=2147483647,e=$r(n),rn(t|=e&=2147483648,nn[1])},en=function(r){return Math.abs(r)},on=A,un=b,fn=en,an=function(r,n){return un(n)||on(n)?(r[0]=n,r[1]=0,r):0!==n&&fn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)},cn=function(r,n){return 1===arguments.length?an([0,0],r):an(r,n)},ln=hr,yn=function(r){var n=ln(r);return(n=(2146435072&n)>>>20)-1023|0},pn=s,vn=d,bn=b,sn=A,dn=tn,wn=cn,Nn=yn,An=Xr,_n=Cr,mn=[0,0],hn=[0,0],Un=function(r,n){var t,e;return 0===n||0===r||bn(r)||sn(r)?r:(wn(mn,r),n+=mn[1],(n+=Nn(r=mn[0]))<-1074?dn(0,r):n>1023?r<0?vn:pn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,An(hn,r),t=hn[0],t&=2148532223,e*_n(t|=n+1023<<20,hn[1])))},gn=Un,jn=function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t},In=qr,On=gn,Sn=function(r){return jn(0,r)},En=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Fn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Tn=16777216,Hn=5.960464477539063e-8,Gn=Sn(20),Pn=Sn(20),Ln=Sn(20),Mn=Sn(20);function Vn(r,n,t,e,o,u,f,i,a){var c,l,y,p,v,b,s,d,w;for(p=u,w=e[t],d=t,v=0;d>0;v++)l=Hn*w|0,Mn[v]=w-Tn*l|0,w=e[d-1]+l,d-=1;if(w=On(w,o),w-=8*In(.125*w),w-=s=0|w,y=0,o>0?(s+=v=Mn[t-1]>>24-o,Mn[t-1]-=v<<24-o,y=Mn[t-1]>>23-o):0===o?y=Mn[t-1]>>23:w>=.5&&(y=2),y>0){for(s+=1,c=0,v=0;v<t;v++)d=Mn[v],0===c?0!==d&&(c=1,Mn[v]=16777216-d):Mn[v]=16777215-d;if(o>0)switch(o){case 1:Mn[t-1]&=8388607;break;case 2:Mn[t-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=On(1,o)))}if(0===w){for(d=0,v=t-1;v>=u;v--)d|=Mn[v];if(0===d){for(b=1;0===Mn[u-b];b++);for(v=t+1;v<=t+b;v++){for(a[i+v]=En[f+v],l=0,d=0;d<=i;d++)l+=r[d]*a[i+(v-d)];e[v]=l}return Vn(r,n,t+=b,e,o,u,f,i,a)}}if(0===w)for(t-=1,o-=24;0===Mn[t];)t-=1,o-=24;else(w=On(w,-o))>=Tn?(l=Hn*w|0,Mn[t]=w-Tn*l|0,o+=24,Mn[t+=1]=l):Mn[t]=0|w;for(l=On(1,o),v=t;v>=0;v--)e[v]=l*Mn[v],l*=Hn;for(v=t;v>=0;v--){for(l=0,b=0;b<=p&&b<=t-v;b++)l+=Fn[b]*e[v+b];Ln[t-v]=l}for(l=0,v=t;v>=0;v--)l+=Ln[v];for(n[0]=0===y?l:-l,l=Ln[0]-l,v=1;v<=t;v++)l+=Ln[v];return n[1]=0===y?l:-l,7&s}var Wn=function(r,n,t,e){var o,u,f,i,a,c,l;for((u=(t-3)/24|0)<0&&(u=0),i=t-24*(u+1),c=u-(f=e-1),l=f+4,a=0;a<=l;a++)Gn[a]=c<0?0:En[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=f;c++)o+=r[c]*Gn[f+(a-c)];Pn[a]=o}return Vn(r,n,4,Pn,i,4,u,f,Gn)},kn=Math.round,xn=hr,Yn=hr,Cn=Hr,qn=Cr,zn=Wn,Bn=function(r,n,t){var e,o,u,f,i;return u=r-1.5707963267341256*(e=kn(.6366197723675814*r)),f=6077100506506192e-26*e,i=n>>20|0,t[0]=u-f,i-(xn(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((o=u)-(u=o-(f=6077100506303966e-26*e))-f),t[0]=u-f,i-(xn(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((o=u)-(u=o-(f=20222662487111665e-37*e))-f),t[0]=u-f)),t[1]=u-t[0]-f,e},Dn=1.5707963267341256,Jn=6077100506506192e-26,Kn=2*Jn,Qn=3*Jn,Rn=4*Jn,Xn=[0,0,0],Zn=[0,0],$n=function(r,n){var t,e,o,u,f,i,a;if((o=2147483647&Yn(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Bn(r,o,n):o<=1073928572?r>0?(a=r-Dn,n[0]=a-Jn,n[1]=a-n[0]-Jn,1):(a=r+Dn,n[0]=a+Jn,n[1]=a-n[0]+Jn,-1):r>0?(a=r-2*Dn,n[0]=a-Kn,n[1]=a-n[0]-Kn,2):(a=r+2*Dn,n[0]=a+Kn,n[1]=a-n[0]+Kn,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Bn(r,o,n):r>0?(a=r-3*Dn,n[0]=a-Qn,n[1]=a-n[0]-Qn,3):(a=r+3*Dn,n[0]=a+Qn,n[1]=a-n[0]+Qn,-3):1075388923===o?Bn(r,o,n):r>0?(a=r-4*Dn,n[0]=a-Rn,n[1]=a-n[0]-Rn,4):(a=r+4*Dn,n[0]=a+Rn,n[1]=a-n[0]+Rn,-4);if(o<1094263291)return Bn(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=Cn(r),a=qn(o-((e=(o>>20)-1046)<<20|0),t),f=0;f<2;f++)Xn[f]=0|a,a=16777216*(a-Xn[f]);for(Xn[2]=a,u=3;0===Xn[u-1];)u-=1;return i=zn(Xn,Zn,e,u),r<0?(n[0]=-Zn[0],n[1]=-Zn[1],-i):(n[0]=Zn[0],n[1]=Zn[1],i)},rt=hr,nt=jr,tt=Or,et=$n,ot=[0,0],ut=hr,ft=jr,it=Or,at=$n,ct=[0,0],lt=3.141592653589793,yt=b,pt=A,vt=function(r){var n;if(n=rt(r),(n&=2147483647)<=1072243195)return n<1044381696?1:nt(r,0);if(n>=2146435072)return NaN;switch(3&et(r,ot)){case 0:return nt(ot[0],ot[1]);case 1:return-tt(ot[0],ot[1]);case 2:return-nt(ot[0],ot[1]);default:return tt(ot[0],ot[1])}},bt=function(r){var n;if(n=ut(r),(n&=2147483647)<=1072243195)return n<1045430272?r:it(r,0);if(n>=2146435072)return NaN;switch(3&at(r,ct)){case 0:return it(ct[0],ct[1]);case 1:return ft(ct[0],ct[1]);case 2:return-it(ct[0],ct[1]);default:return-ft(ct[0],ct[1])}},st=en,dt=tn,wt=lt,Nt=function(r){var n,t;return yt(r)||pt(r)?NaN:0===(n=st(t=r%2))||1===n?dt(0,t):n<.25?bt(wt*t):n<.75?dt(vt(wt*(n=.5-n)),t):n<1.25?(t=dt(1,t)-t,bt(wt*t)):n<1.75?-dt(vt(wt*(n-=1.5)),t):(t-=dt(2,t),bt(wt*t))},At=b,_t=A,mt=function(r){return At(r)?NaN:_t(r)?0:0===r?1:Nt(r)/(3.141592653589793*r)},ht=Math.ceil,Ut=qr,gt=ht,jt=gn,It=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},Ot=b,St=function(r){return r<0?gt(r):Ut(r)},Et=d,Ft=s,Tt=function(r,n,t){var e,o,u;return u=(e=r-n)-(o=e*e)*It(o),jt(1-(n-e*u/(2-u)-r),t)},Ht=1.4426950408889634,Gt=1/(1<<28),Pt=function(r){var n;return Ot(r)||r===Ft?r:r===Et?0:r>709.782712893384?Ft:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Gt?1+r:(n=St(r<0?Ht*r-.5:Ht*r+.5),Tt(r-.6931471803691238*n,1.9082149292705877e-10*n,n))};function Lt(r,n,t){var e;return b(e=t*r)||b(n)||t<0||en(e)>1?NaN:Pt(n*r)/mt(e)}var Mt=function(r){return function(){return r}},Vt=b,Wt=Pt,kt=Mt,xt=b,Yt=Pt,Ct=function(r,n){return Vt(r)||Vt(n)?NaN:Wt(n*r)};v(Ct,"factory",(function(r){return xt(r)?kt(NaN):function(n){return xt(n)?NaN:Yt(r*n)}}));var qt=Ct;return v(Lt,"factory",(function(r,n){return b(r)||b(n)||n<0?Mt(NaN):0===n?qt.factory(r):function(t){var e=n*t;return en(e)>1?NaN:Pt(r*t)/mt(e)}})),Lt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).mgf=n();
//# sourceMappingURL=browser.js.map
