/*!
	Colorbox v1.5.10 - 2014-06-26
	jQuery lightbox and modal window plugin
	(c) 2014 Jack Moore - http://www.jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(N,l,ab){var P={html:false,photo:false,iframe:false,inline:false,transition:"elastic",speed:300,fadeOut:300,width:false,initialWidth:"600",innerWidth:false,maxWidth:false,height:false,initialHeight:"450",innerHeight:false,maxHeight:false,scalePhotos:true,scrolling:true,opacity:0.9,preloading:true,className:false,overlayClose:true,escKey:true,arrowKey:true,top:false,bottom:false,left:false,right:false,fixed:false,data:undefined,closeButton:true,fastIframe:true,open:false,reposition:true,loop:true,slideshow:false,slideshowAuto:true,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:false,retinaUrl:false,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:true,trapFocus:true,onOpen:false,onLoad:false,onComplete:false,onCleanup:false,onClosed:false,rel:function(){return this.rel
},href:function(){return N(this).attr("href")
},title:function(){return this.title
}},x="colorbox",X="cbox",s=X+"Element",aa=X+"_open",e=X+"_load",Y=X+"_complete",w=X+"_cleanup",ah=X+"_closed",i=X+"_purge",V,al,am,d,L,q,b,U,c,af,S,k,h,p,v,ac,u,W,z,C,J=N("<a/>"),aj,an,n,g,a,M,o,E,ad,R,A,Q,ai="div",H=0,ae={},ag;
function K(ao,ar,aq){var ap=l.createElement(ao);
if(ar){ap.id=X+ar
}if(aq){ap.style.cssText=aq
}return N(ap)
}function t(){return ab.innerHeight?ab.innerHeight:N(ab).height()
}function B(ap,ao){if(ao!==Object(ao)){ao={}
}this.cache={};
this.el=ap;
this.value=function(aq){var ar;
if(this.cache[aq]===undefined){ar=N(this.el).attr("data-cbox-"+aq);
if(ar!==undefined){this.cache[aq]=ar
}else{if(ao[aq]!==undefined){this.cache[aq]=ao[aq]
}else{if(P[aq]!==undefined){this.cache[aq]=P[aq]
}}}}return this.cache[aq]
};
this.get=function(aq){var ar=this.value(aq);
return N.isFunction(ar)?ar.call(this.el,this):ar
}
}function G(ap){var ao=c.length,aq=(M+ap)%ao;
return(aq<0)?ao+aq:aq
}function T(ao,ap){return Math.round((/%/.test(ao)?((ap==="x"?af.width():t())/100):1)*parseInt(ao,10))
}function D(ap,ao){return ap.get("photo")||ap.get("photoRegex").test(ao)
}function F(ap,ao){return ap.get("retinaUrl")&&ab.devicePixelRatio>1?ao.replace(ap.get("photoRegex"),ap.get("retinaSuffix")):ao
}function ak(ao){if("contains" in al[0]&&!al[0].contains(ao.target)&&ao.target!==V[0]){ao.stopPropagation();
al.focus()
}}function m(ao){if(m.str!==ao){al.add(V).removeClass(m.str).addClass(ao);
m.str=ao
}}function O(ao){M=0;
if(ao&&ao!==false&&ao!=="nofollow"){c=N("."+s).filter(function(){var ap=N.data(this,x);
var aq=new B(this,ap);
return(aq.get("rel")===ao)
});
M=c.index(aj.el);
if(M===-1){c=c.add(aj.el);
M=c.length-1
}}else{c=N(aj.el)
}}function I(ao){N(l).trigger(ao);
J.triggerHandler(ao)
}var y=(function(){var ap,at=X+"Slideshow_",ax="click."+X,av;
function aq(){clearTimeout(av)
}function aw(){if(aj.get("loop")||c[M+1]){aq();
av=setTimeout(Q.next,aj.get("slideshowSpeed"))
}}function ao(){ac.html(aj.get("slideshowStop")).unbind(ax).one(ax,au);
J.bind(Y,aw).bind(e,aq);
al.removeClass(at+"off").addClass(at+"on")
}function au(){aq();
J.unbind(Y,aw).unbind(e,aq);
ac.html(aj.get("slideshowStart")).unbind(ax).one(ax,function(){Q.next();
ao()
});
al.removeClass(at+"on").addClass(at+"off")
}function ar(){ap=false;
ac.hide();
aq();
J.unbind(Y,aw).unbind(e,aq);
al.removeClass(at+"off "+at+"on")
}return function(){if(ap){if(!aj.get("slideshow")){J.unbind(w,ar);
ar()
}}else{if(aj.get("slideshow")&&c[1]){ap=true;
J.one(w,ar);
if(aj.get("slideshowAuto")){ao()
}else{au()
}ac.show()
}}}
}());
function f(ap){var ao;
if(!R){ao=N(ap).data(x);
aj=new B(ap,ao);
O(aj.get("rel"));
if(!E){E=ad=true;
m(aj.get("className"));
al.css({visibility:"hidden",display:"block",opacity:""});
S=K(ai,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden");
d.css({width:"",height:""}).append(S);
an=L.height()+U.height()+d.outerHeight(true)-d.height();
n=q.width()+b.width()+d.outerWidth(true)-d.width();
g=S.outerHeight(true);
a=S.outerWidth(true);
var au=T(aj.get("initialWidth"),"x");
var aq=T(aj.get("initialHeight"),"y");
var at=aj.get("maxWidth");
var ar=aj.get("maxHeight");
aj.w=(at!==false?Math.min(au,T(at,"x")):au)-a-n;
aj.h=(ar!==false?Math.min(aq,T(ar,"y")):aq)-g-an;
S.css({width:"",height:aj.h});
Q.position();
I(aa);
aj.get("onOpen");
C.add(p).hide();
al.focus();
if(aj.get("trapFocus")){if(l.addEventListener){l.addEventListener("focus",ak,true);
J.one(ah,function(){l.removeEventListener("focus",ak,true)
})
}}if(aj.get("returnFocus")){J.one(ah,function(){N(aj.el).focus()
})
}}V.css({opacity:parseFloat(aj.get("opacity"))||"",cursor:aj.get("overlayClose")?"pointer":"",visibility:"visible"}).show();
if(aj.get("closeButton")){z.html(aj.get("close")).appendTo(d)
}else{z.appendTo("<div/>")
}Z()
}}function r(){if(!al&&l.body){ag=false;
af=N(ab);
al=K(ai).attr({id:x,"class":N.support.opacity===false?X+"IE":"",role:"dialog",tabindex:"-1"}).hide();
V=K(ai,"Overlay").hide();
h=N([K(ai,"LoadingOverlay")[0],K(ai,"LoadingGraphic")[0]]);
am=K(ai,"Wrapper");
d=K(ai,"Content").append(p=K(ai,"Title"),v=K(ai,"Current"),W=N('<button type="button"/>').attr({id:X+"Previous"}),u=N('<button type="button"/>').attr({id:X+"Next"}),ac=K("button","Slideshow"),h);
z=N('<button type="button"/>').attr({id:X+"Close"});
am.append(K(ai).append(K(ai,"TopLeft"),L=K(ai,"TopCenter"),K(ai,"TopRight")),K(ai,false,"clear:left").append(q=K(ai,"MiddleLeft"),d,b=K(ai,"MiddleRight")),K(ai,false,"clear:left").append(K(ai,"BottomLeft"),U=K(ai,"BottomCenter"),K(ai,"BottomRight"))).find("div div").css({"float":"left"});
k=K(ai,false,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;");
C=u.add(W).add(v).add(ac);
N(l.body).append(V,al.append(am,k))
}}function j(){function ao(ap){if(!(ap.which>1||ap.shiftKey||ap.altKey||ap.metaKey||ap.ctrlKey)){ap.preventDefault();
f(this)
}}if(al){if(!ag){ag=true;
u.click(function(){Q.next()
});
W.click(function(){Q.prev()
});
z.click(function(){Q.close()
});
V.click(function(){if(aj.get("overlayClose")){Q.close()
}});
N(l).bind("keydown."+X,function(aq){var ap=aq.keyCode;
if(E&&aj.get("escKey")&&ap===27){aq.preventDefault();
Q.close()
}if(E&&aj.get("arrowKey")&&c[1]&&!aq.altKey){if(ap===37){aq.preventDefault();
W.click()
}else{if(ap===39){aq.preventDefault();
u.click()
}}}});
if(N.isFunction(N.fn.on)){N(l).on("click."+X,"."+s,ao)
}else{N("."+s).live("click."+X,ao)
}}return true
}return false
}if(N[x]){return
}N(r);
Q=N.fn[x]=N[x]=function(ao,ar){var ap;
var aq=this;
ao=ao||{};
if(N.isFunction(aq)){aq=N("<a/>");
ao.open=true
}else{if(!aq[0]){return aq
}}if(!aq[0]){return aq
}r();
if(j()){if(ar){ao.onComplete=ar
}aq.each(function(){var at=N.data(this,x)||{};
N.data(this,x,N.extend(at,ao))
}).addClass(s);
ap=new B(aq[0],ao);
if(ap.get("open")){f(aq[0])
}}return aq
};
Q.position=function(aq,at){var aw,ay=0,ap=0,au=al.offset(),ao,ar;
af.unbind("resize."+X);
al.css({top:-90000,left:-90000});
ao=af.scrollTop();
ar=af.scrollLeft();
if(aj.get("fixed")){au.top-=ao;
au.left-=ar;
al.css({position:"fixed"})
}else{ay=ao;
ap=ar;
al.css({position:"absolute"})
}if(aj.get("right")!==false){ap+=Math.max(af.width()-aj.w-a-n-T(aj.get("right"),"x"),0)
}else{if(aj.get("left")!==false){ap+=T(aj.get("left"),"x")
}else{ap+=Math.round(Math.max(af.width()-aj.w-a-n,0)/2)
}}if(aj.get("bottom")!==false){ay+=Math.max(t()-aj.h-g-an-T(aj.get("bottom"),"y"),0)
}else{if(aj.get("top")!==false){ay+=T(aj.get("top"),"y")
}else{ay+=Math.round(Math.max(t()-aj.h-g-an,0)/2)
}}al.css({top:au.top,left:au.left,visibility:"visible"});
am[0].style.width=am[0].style.height="9999px";
function ax(){L[0].style.width=U[0].style.width=d[0].style.width=(parseInt(al[0].style.width,10)-n)+"px";
d[0].style.height=q[0].style.height=b[0].style.height=(parseInt(al[0].style.height,10)-an)+"px"
}aw={width:aj.w+a+n,height:aj.h+g+an,top:ay,left:ap};
if(aq){var av=0;
N.each(aw,function(az){if(aw[az]!==ae[az]){av=aq;
return
}});
aq=av
}ae=aw;
if(!aq){al.css(aw)
}al.dequeue().animate(aw,{duration:aq||0,complete:function(){ax();
ad=false;
am[0].style.width=(aj.w+a+n)+"px";
am[0].style.height=(aj.h+g+an)+"px";
if(aj.get("reposition")){setTimeout(function(){af.bind("resize."+X,Q.position)
},1)
}if(at){at()
}},step:ax})
};
Q.resize=function(ap){var ao;
if(E){ap=ap||{};
if(ap.width){aj.w=T(ap.width,"x")-a-n
}if(ap.innerWidth){aj.w=T(ap.innerWidth,"x")
}S.css({width:aj.w});
if(ap.height){aj.h=T(ap.height,"y")-g-an
}if(ap.innerHeight){aj.h=T(ap.innerHeight,"y")
}if(!ap.innerHeight&&!ap.height){ao=S.scrollTop();
S.css({height:"auto"});
aj.h=S.height()
}S.css({height:aj.h});
if(ao){S.scrollTop(ao)
}Q.position(aj.get("transition")==="none"?0:aj.get("speed"))
}};
Q.prep=function(ap){if(!E){return
}var at,aq=aj.get("transition")==="none"?0:aj.get("speed");
S.remove();
S=K(ai,"LoadedContent").append(ap);
function ao(){aj.w=aj.w||S.width();
aj.w=aj.mw&&aj.mw<aj.w?aj.mw:aj.w;
return aj.w
}function ar(){aj.h=aj.h||S.height();
aj.h=aj.mh&&aj.mh<aj.h?aj.mh:aj.h;
return aj.h
}S.hide().appendTo(k.show()).css({width:ao(),overflow:aj.get("scrolling")?"auto":"hidden"}).css({height:ar()}).prependTo(d);
k.hide();
N(o).css({"float":"none"});
m(aj.get("className"));
at=function(){var aw=c.length,av,au;
if(!E){return
}function ax(){if(N.support.opacity===false){al[0].style.removeAttribute("filter")
}}au=function(){clearTimeout(A);
h.hide();
I(Y);
aj.get("onComplete")
};
p.html(aj.get("title")).show();
S.show();
if(aw>1){if(typeof aj.get("current")==="string"){v.html(aj.get("current").replace("{current}",M+1).replace("{total}",aw)).show()
}u[(aj.get("loop")||M<aw-1)?"show":"hide"]().html(aj.get("next"));
W[(aj.get("loop")||M)?"show":"hide"]().html(aj.get("previous"));
y();
if(aj.get("preloading")){N.each([G(-1),G(1)],function(){var ay,az=c[this],aA=new B(az,N.data(az,x)),aB=aA.get("href");
if(aB&&D(aA,aB)){aB=F(aA,aB);
ay=l.createElement("img");
ay.src=aB
}})
}}else{C.hide()
}if(aj.get("iframe")){av=l.createElement("iframe");
N(av).attr("allow","autoplay");
if("frameBorder" in av){av.frameBorder=0
}if("allowTransparency" in av){av.allowTransparency="true"
}if(!aj.get("scrolling")){av.scrolling="no"
}N(av).attr({src:aj.get("href"),name:(new Date()).getTime(),"class":X+"Iframe",allowFullScreen:true}).one("load",au).appendTo(S);
J.one(i,function(){av.src="//about:blank"
});
if(aj.get("fastIframe")){N(av).trigger("load")
}}else{au()
}if(aj.get("transition")==="fade"){al.fadeTo(aq,1,ax)
}else{ax()
}};
if(aj.get("transition")==="fade"){al.fadeTo(aq,0,function(){Q.position(0,at)
})
}else{Q.position(aq,at)
}};
function Z(){var ar,at,aq=Q.prep,ap,au=++H;
ad=true;
o=false;
I(i);
I(e);
aj.get("onLoad");
aj.h=aj.get("height")?T(aj.get("height"),"y")-g-an:aj.get("innerHeight")&&T(aj.get("innerHeight"),"y");
aj.w=aj.get("width")?T(aj.get("width"),"x")-a-n:aj.get("innerWidth")&&T(aj.get("innerWidth"),"x");
aj.mw=aj.w;
aj.mh=aj.h;
if(aj.get("maxWidth")){aj.mw=T(aj.get("maxWidth"),"x")-a-n;
aj.mw=aj.w&&aj.w<aj.mw?aj.w:aj.mw
}if(aj.get("maxHeight")){aj.mh=T(aj.get("maxHeight"),"y")-g-an;
aj.mh=aj.h&&aj.h<aj.mh?aj.h:aj.mh
}ar=aj.get("href");
A=setTimeout(function(){h.show()
},100);
if(aj.get("inline")){var ao=N(ar);
ap=N("<div>").hide().insertBefore(ao);
J.one(i,function(){ap.replaceWith(ao)
});
aq(ao)
}else{if(aj.get("iframe")){aq(" ")
}else{if(aj.get("html")){aq(aj.get("html"))
}else{if(D(aj,ar)){ar=F(aj,ar);
o=new Image();
N(o).addClass(X+"Photo").bind("error",function(){aq(K(ai,"Error").html(aj.get("imgError")))
}).one("load",function(){if(au!==H){return
}setTimeout(function(){var av;
N.each(["alt","longdesc","aria-describedby"],function(ax,ay){var aw=N(aj.el).attr(ay)||N(aj.el).attr("data-"+ay);
if(aw){o.setAttribute(ay,aw)
}});
if(aj.get("retinaImage")&&ab.devicePixelRatio>1){o.height=o.height/ab.devicePixelRatio;
o.width=o.width/ab.devicePixelRatio
}if(aj.get("scalePhotos")){at=function(){o.height-=o.height*av;
o.width-=o.width*av
};
if(aj.mw&&o.width>aj.mw){av=(o.width-aj.mw)/o.width;
at()
}if(aj.mh&&o.height>aj.mh){av=(o.height-aj.mh)/o.height;
at()
}}if(aj.h){o.style.marginTop=Math.max(aj.mh-o.height,0)/2+"px"
}if(c[1]&&(aj.get("loop")||c[M+1])){o.style.cursor="pointer";
o.onclick=function(){Q.next()
}
}o.style.width=o.width+"px";
o.style.height=o.height+"px";
aq(o)
},1)
});
o.src=ar
}else{if(ar){k.load(ar,aj.get("data"),function(aw,av){if(au===H){aq(av==="error"?K(ai,"Error").html(aj.get("xhrError")):N(this).contents())
}})
}}}}}}Q.next=function(){if(!ad&&c[1]&&(aj.get("loop")||c[M+1])){M=G(1);
f(c[M])
}};
Q.prev=function(){if(!ad&&c[1]&&(aj.get("loop")||M)){M=G(-1);
f(c[M])
}};
Q.close=function(){if(E&&!R){R=true;
E=false;
I(w);
aj.get("onCleanup");
af.unbind("."+X);
V.fadeTo(aj.get("fadeOut")||0,0);
al.stop().fadeTo(aj.get("fadeOut")||0,0,function(){al.hide();
V.hide();
I(i);
S.remove();
setTimeout(function(){R=false;
I(ah);
aj.get("onClosed")
},1)
})
}};
Q.remove=function(){if(!al){return
}al.stop();
N[x].close();
al.stop(false,true).remove();
V.remove();
R=false;
al=null;
N("."+s).removeData(x).removeClass(s);
N(l).unbind("click."+X).unbind("keydown."+X)
};
Q.element=function(){return N(aj.el)
};
Q.settings=P
}(jQuery,document,window));