/*! lazysizes - v4.1.5 */
;
!function(e,d){var f=d(e,e.document);
e.lazySizes=f,"object"==typeof module&&module.exports&&(module.exports=f)
}(window,function(al,ak){if(ak.getElementsByClassName){var aj,ai,ah=ak.documentElement,ag=al.Date,af=al.HTMLPictureElement,ae="addEventListener",ad="getAttribute",ac=al[ae],ab=al.setTimeout,aa=al.requestAnimationFrame||ab,Z=al.requestIdleCallback,Y=/^picture$/i,X=["load","error","lazyincluded","_lazyloaded"],W={},U=Array.prototype.forEach,S=function(d,c){return W[c]||(W[c]=new RegExp("(\\s|^)"+c+"(\\s|$)")),W[c].test(d[ad]("class")||"")&&W[c]
},Q=function(d,c){S(d,c)||d.setAttribute("class",(d[ad]("class")||"").trim()+" "+c)
},O=function(e,d){var f;
(f=S(e,d))&&e.setAttribute("class",(e[ad]("class")||"").replace(f," "))
},M=function(f,e,h){var g=h?ae:"removeEventListener";
h&&M(f,e),X.forEach(function(a){f[g](a,e)
})
},K=function(b,l,k,j,i){var c=ak.createEvent("Event");
return k||(k={}),k.instance=aj,c.initEvent(l,!j,!i),c.detail=k,b.dispatchEvent(c),c
},J=function(a,f){var d;
!af&&(d=al.picturefill||ai.pf)?(f&&f.src&&!a[ad]("srcset")&&a.setAttribute("srcset",f.src),d({reevaluate:!0,elements:[a]})):f&&f.src&&(a.src=f.src)
},I=function(d,c){return(getComputedStyle(d,null)||{})[c]
},H=function(e,d,f){for(f=f||e.offsetWidth;
f<ai.minSize&&d&&!e._lazysizesWidth;
){f=d.offsetWidth,d=d.parentNode
}return f
},G=function(){var b,n,m=[],l=[],k=m,j=function(){var a=k;
for(k=m.length?l:m,b=!0,n=!1;
a.length;
){a.shift()()
}b=!1
},i=function(c,a){b&&!a?c.apply(this,arguments):(k.push(c),n||(n=!0,(ak.hidden?ab:aa)(j)))
};
return i._lsFlush=j,i
}(),V=function(d,c){return c?function(){G(d)
}:function(){var a=this,e=arguments;
G(function(){d.apply(a,e)
})
}
},T=function(f){var d,n=0,m=ai.throttleDelay,l=ai.ricTimeout,k=function(){d=!1,n=ag.now(),f()
},j=Z&&l>49?function(){Z(k,{timeout:l}),l!==ai.ricTimeout&&(l=ai.ricTimeout)
}:V(function(){ab(k)
},!0);
return function(b){var c;
(b=!0===b)&&(l=33),d||(d=!0,c=m-(ag.now()-n),c<0&&(c=0),b||c<9?j():ab(j,c))
}
},R=function(h){var f,l,k=99,j=function(){f=null,h()
},i=function(){var b=ag.now()-l;
b<k?ab(i,k-b):(Z||j)(j)
};
return function(){l=ag.now(),f||(f=ab(i,k))
}
};
!function(){var a,d={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:0.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};
ai=al.lazySizesConfig||al.lazysizesConfig||{};
for(a in d){a in ai||(ai[a]=d[a])
}al.lazySizesConfig=ai,ab(function(){ai.init&&L()
})
}();
var P=function(){var at,ar,aq,ap,an,z,am,E,C,B,A,x,w,v,u=/^img$/i,t=/^iframe$/i,s="onscroll" in al&&!/(gle|ing)bot/.test(navigator.userAgent),r=0,n=0,k=0,j=-1,h=function(g){k--,g&&g.target&&M(g.target,h),(!g||k<0||!g.target)&&(k=0)
},f=function(l,y){var p,o=l,m="hidden"==I(ak.body,"visibility")||"hidden"!=I(l.parentNode,"visibility")&&"hidden"!=I(l,"visibility");
for(E-=y,A+=y,C-=y,B+=y;
m&&(o=o.offsetParent)&&o!=ak.body&&o!=ah;
){(m=(I(o,"opacity")||1)>0)&&"visible"!=I(o,"overflow")&&(p=o.getBoundingClientRect(),m=B>p.left&&C<p.right&&A>p.top-1&&E<p.bottom+1)
}return m
},e=function(){var az,ay,ax,aw,F,D,y,o,l,g=aj.elements;
if((ap=ai.loadMode)&&k<8&&(az=g.length)){ay=0,j++,null==w&&("expand" in ai||(ai.expand=ah.clientHeight>500&&ah.clientWidth>500?500:370),x=ai.expand,w=x*ai.expFactor),n<w&&k<1&&j>2&&ap>2&&!ak.hidden?(n=w,j=0):n=ap>1&&j>1&&k<6?x:r;
for(;
ay<az;
ay++){if(g[ay]&&!g[ay]._lazyRace){if(s){if((o=g[ay][ad]("data-expand"))&&(D=1*o)||(D=n),l!==D&&(z=innerWidth+D*v,am=innerHeight+D,y=-1*D,l=D),ax=g[ay].getBoundingClientRect(),(A=ax.bottom)>=y&&(E=ax.top)<=am&&(B=ax.right)>=y*v&&(C=ax.left)<=z&&(A||B||C||E)&&(ai.loadHidden||"hidden"!=I(g[ay],"visibility"))&&(ar&&k<3&&!o&&(ap<3||j<4)||f(g[ay],D))){if(q(g[ay]),F=!0,k>9){break
}}else{!F&&ar&&!aw&&k<4&&j<4&&ap>2&&(at[0]||ai.preloadAfterLoad)&&(at[0]||!o&&(A||B||C||E||"auto"!=g[ay][ad](ai.sizesAttr)))&&(aw=at[0]||g[ay])
}}else{q(g[ay])
}}}aw&&!F&&q(aw)
}},d=T(e),c=function(g){Q(g.target,ai.loadedClass),O(g.target,ai.loadingClass),M(g.target,a),K(g.target,"lazyloaded")
},b=V(c),a=function(g){b({target:g.target})
},i=function(l,g){try{l.contentWindow.location.replace(g)
}catch(m){l.src=g
}},av=function(l){var g,m=l[ad](ai.srcsetAttr);
(g=ai.customMedia[l[ad]("data-media")||l[ad]("media")])&&l.setAttribute("media",g),m&&l.setAttribute("srcset",m)
},au=V(function(aC,aB,aA,az,ay){var ax,aw,F,D,y,m;
(y=K(aC,"lazybeforeunveil",aB)).defaultPrevented||(az&&(aA?Q(aC,ai.autosizesClass):aC.setAttribute("sizes",az)),aw=aC[ad](ai.srcsetAttr),ax=aC[ad](ai.srcAttr),ay&&(F=aC.parentNode,D=F&&Y.test(F.nodeName||"")),m=aB.firesLoad||"src" in aC&&(aw||ax||D),y={target:aC},m&&(M(aC,h,!0),clearTimeout(aq),aq=ab(h,2500),Q(aC,ai.loadingClass),M(aC,a,!0)),D&&U.call(F.getElementsByTagName("source"),av),aw?aC.setAttribute("srcset",aw):ax&&!D&&(t.test(aC.nodeName)?i(aC,ax):aC.src=ax),ay&&(aw||D)&&J(aC,{src:ax})),aC._lazyRace&&delete aC._lazyRace,O(aC,ai.lazyClass),G(function(){(!m||aC.complete&&aC.naturalWidth>1)&&(m?h(y):k--,c(y))
},!0)
}),q=function(l){var g,p=u.test(l.nodeName),o=p&&(l[ad](ai.sizesAttr)||l[ad]("sizes")),m="auto"==o;
(!m&&ar||!p||!l[ad]("src")&&!l.srcset||l.complete||S(l,ai.errorClass)||!S(l,ai.lazyClass))&&(g=K(l,"lazyunveilread").detail,m&&N.updateElem(l,!0,l.offsetWidth),l._lazyRace=!0,k++,au(l,g,m,o,p))
},ao=function(){if(!ar){if(ag.now()-an<999){return void ab(ao,999)
}var g=R(function(){ai.loadMode=3,d()
});
ar=!0,ai.loadMode=3,d(),ac("scroll",function(){3==ai.loadMode&&(ai.loadMode=2),g()
},!0)
}};
return{_:function(){an=ag.now(),aj.elements=ak.getElementsByClassName(ai.lazyClass),at=ak.getElementsByClassName(ai.lazyClass+" "+ai.preloadClass),v=ai.hFac,ac("scroll",d,!0),ac("resize",d,!0),al.MutationObserver?new MutationObserver(d).observe(ah,{childList:!0,subtree:!0,attributes:!0}):(ah[ae]("DOMNodeInserted",d,!0),ah[ae]("DOMAttrModified",d,!0),setInterval(d,999)),ac("hashchange",d,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(g){ak[ae](g,d,!0)
}),/d$|^c/.test(ak.readyState)?ao():(ac("load",ao),ak[ae]("DOMContentLoaded",d),ab(ao,20000)),aj.elements.length?(e(),G._lsFlush()):d()
},checkElems:d,unveil:q}
}(),N=function(){var b,j=V(function(l,k,q,p){var o,n,m;
if(l._lazysizesWidth=p,p+="px",l.setAttribute("sizes",p),Y.test(k.nodeName||"")){for(o=k.getElementsByTagName("source"),n=0,m=o.length;
n<m;
n++){o[n].setAttribute("sizes",p)
}}q.detail.dataAttr||J(l,q.detail)
}),i=function(g,c,m){var l,k=g.parentNode;
k&&(m=H(g,k,m),l=K(g,"lazybeforesizes",{width:m,dataAttr:!!c}),l.defaultPrevented||(m=l.detail.width)&&m!==g._lazysizesWidth&&j(g,k,l,m))
},h=function(){var a,e=b.length;
if(e){for(a=0;
a<e;
a++){i(b[a])
}}},d=R(h);
return{_:function(){b=ak.getElementsByClassName(ai.autosizesClass),ac("resize",d)
},checkElems:d,updateElem:i}
}(),L=function(){L.i||(L.i=!0,N._(),P._())
};
return aj={cfg:ai,autoSizer:N,loader:P,init:L,uP:J,aC:Q,rC:O,hC:S,fire:K,gW:H,rAF:G}
}});