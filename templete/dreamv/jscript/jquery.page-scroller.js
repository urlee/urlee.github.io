/*  ================================================================================
 *
 *  jQuery Page Scroller -version 3.0.9
 *  http://coliss.com/articles/build-websites/operation/javascript/296.html
 *  (c)2011 coliss.com
 *
 *  この作品は、クリエイティブ・コモンズの表示 2.1 日本ライセンスの下で
 *  ライセンスされています。
 *  この使用許諾条件を見るには、http://creativecommons.org/licenses/by-sa/2.1/jp/を
 *  チェックするか、クリエイティブ･コモンズに郵便にてお問い合わせください。
 *  住所は：559 Nathan Abbott Way, Stanford, California 94305, USA です。
 *
================================================================================  */


/*  ================================================================================
TOC
============================================================
Ooption
Page Scroller
============================================================
this script requires jQuery 1.3-1.4.4(http://jquery.com/)
================================================================================  */


/*  ================================================================================
Ooption
================================================================================  */
var virtualTopId = "top",
    virtualTop,
    adjTraverser,
    adjPosition,
    callExternal = "pSc",
    delayExternal= 200,
    adjSpeed = 1;

/* option example
======================================================================  */
//  virtualTop = 0;    // virtual top's left position = 0
//  virtualTop = 1;    // virtual top's left position = vertical movement
//  adjTraverser = 0;  // left position = 0
//  adjTraverser = 1;  // horizontal movement.
//  adjPosition = -26;

/*  ================================================================================
Page Scroller
================================================================================  */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('(c($){7 F=$.H.F,E=$.H.E,G=$.H.G,w=$.H.w;$.H.1Q({E:c(){3(!6[0])1s();3(6[0]==j)b 1p.1N||$.1m&&5.A.1q||5.h.1q;3(6[0]==5)b((5.A&&5.1o=="1t")?5.A.1r:5.h.1r);b E.1z(6,1A)},F:c(){3(!6[0])1s();3(6[0]==j)b 1p.1X||$.1m&&5.A.1n||5.h.1n;3(6[0]==5)b((5.A&&5.1o=="1t")?5.A.1y:5.h.1y);b F.1z(6,1A)},G:c(){3(!6[0])b V;7 k=5.S?5.S(6[0].z):5.1v(6[0].z);7 l=1w 1a();l.x=k.1x;1d((k=k.1c)!=X){l.x+=k.1x}3((l.x*0)==0)b(l.x);i b(6[0].z)},w:c(){3(!6[0])b V;7 k=5.S?5.S(6[0].z):5.1v(6[0].z);7 l=1w 1a();l.y=k.1e;1d((k=k.1c)!=X){l.y+=k.1e}3((l.y*0)==0)b(l.y);i b(6[0].z)}})})(26);$(c(){$(\'a[r^="#"], 27[r^="#"]\').25(\'.1j a[r^="#"], a[r^="#"].1j\').1g(c(){7 d=Q.20+Q.1Z;7 I=((6.r).21(0,(((6.r).11)-((6.14).11)))).O((6.r).1J("//")+2);3(d.J("?")!=-1)U=d.O(0,(d.J("?")));i U=d;3(I.J("?")!=-1)W=I.O(0,(I.J("?")));i W=I;3(W==U){f.Z((6.14).23(1));b 1O}});$("h").1g(c(){f.P()})});6.q=X;7 f={19:c(C){3(C=="x")b(($(5).E())-($(j).E()));i 3(C=="y")b(($(5).F())-($(j).F()))},Y:c(C){3(C=="x")b(j.17||5.h.v||5.h.K.v);i 3(C=="y")b(j.28||5.h.1B||5.h.K.1B)},R:c(o,m,D,p,s){7 q;3(q)N(q);7 1F=16*1Y;7 T=f.Y(\'x\');7 L=f.Y(\'y\');3(!o||o<0)o=0;3(!m||m<0)m=0;3(!D)D=$.1E.22?10:$.1E.24?8:9;3(!p)p=0+T;3(!s)s=0+L;p+=(o-T)/D;3(p<0)p=0;s+=(m-L)/D;3(s<0)s=0;7 13=B.1C(p);7 12=B.1C(s);j.1R(13,12);3((B.1H(B.1G(T-o))<1)&&(B.1H(B.1G(L-m))<1)){N(6.q);j.1b(o,m)}i 3((13!=o)||(12!=m))6.q=1i("f.R("+o+","+m+","+D+","+p+","+s+")",1F);i N(6.q)},P:c(){N(6.q)},1T:c(e){f.P()},Z:c(n){f.P();7 u,t;3(!!n){3(n==1V){u=(M==0)?0:(M==1)?j.17||5.h.v||5.h.K.v:$(\'#\'+n).G();t=((M==0)||(M==1))?0:$(\'#\'+n).w()}i{u=(1K==0)?0:(1K==1)?($(\'#\'+n).G()):j.17||5.h.v||5.h.K.v;t=1I?($(\'#\'+n).w())+1I:($(\'#\'+n).w())}7 18=f.19(\'x\');7 15=f.19(\'y\');3(((u*0)==0)||((t*0)==0)){7 1k=(u<1)?0:(u>18)?18:u;7 1u=(t<1)?0:(t>15)?15:t;f.R(1k,1u)}i Q.14=n}i f.R(0,0)},1l:c(){7 d=Q.r;7 1f=d.1J("#",0);7 1M=d.1W(1D);d=d.1L(/</g,\'&1S;\');d=d.1L(/>/g,\'&1U;\');3(!!1M){1h=d.O(d.J("?"+1D)+4,d.11);1P=1i("f.Z(1h)",29)}3(!1f)j.1b(0,0);i b V}};$(f.1l);',62,134,'|||if||document|this|var||||return|function|usrUrl||coliss||body|else|window|obj|tagCoords|toY|idName|toX|frX|pageScrollTimer|href|frY|anchorY|anchorX|scrollLeft|top|||id|documentElement|Math|type|frms|width|height|left|fn|anchorPath|lastIndexOf|parentNode|actY|virtualTop|clearTimeout|slice|stopScroll|location|pageScroll|getElementById|actX|usrUrlOmitQ|true|anchorPathOmitQ|null|getWindowOffset|toAnchor||length|posY|posX|hash|dMaxY||pageXOffset|dMaxX|getScrollRange|Object|scroll|offsetParent|while|offsetTop|checkAnchor|click|anchorId|setTimeout|nopscr|setX|initPageScroller|boxModel|clientHeight|compatMode|self|clientWidth|scrollWidth|error|CSS1Compat|setY|all|new|offsetLeft|scrollHeight|apply|arguments|scrollTop|ceil|callExternal|browser|spd|abs|floor|adjPosition|indexOf|adjTraverser|replace|checkPageScroller|innerWidth|false|timerID|extend|scrollTo|lt|cancelScroll|gt|virtualTopId|match|innerHeight|adjSpeed|pathname|hostname|substring|mozilla|substr|opera|not|jQuery|area|pageYOffset|delayExternal'.split('|'),0,{}));


