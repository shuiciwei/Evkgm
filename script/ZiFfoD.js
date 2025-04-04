(function(c,b,a,e){var d=c(b);
c.fn.lazyload=function(f){var h=this;
var i;
var g={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:true,appear:null,load:null,afterLoad:function(){c.noop()
},placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};
function j(){var k=0;
h.each(function(){var l=c(this);
if(g.skip_invisible&&!l.is(":visible")){return
}if(c.abovethetop(this,g)||c.leftofbegin(this,g)){}else{if(!c.belowthefold(this,g)&&!c.rightoffold(this,g)){l.trigger("appear");
k=0
}else{if(++k>g.failure_limit){return false
}}}})
}if(f){if(e!==f.failurelimit){f.failure_limit=f.failurelimit;
delete f.failurelimit
}if(e!==f.effectspeed){f.effect_speed=f.effectspeed;
delete f.effectspeed
}c.extend(g,f)
}i=(g.container===e||g.container===b)?d:c(g.container);
if(0===g.event.indexOf("scroll")){i.bind(g.event,function(){return j()
})
}this.each(function(){var k=this;
var l=c(k);
k.loaded=false;
if(l.attr("src")===e||l.attr("src")===false){if(l.is("img")){l.attr("src",g.placeholder)
}}l.one("appear",function(){if(!this.loaded){if(g.appear){var m=h.length;
g.appear.call(k,m,g)
}c("<img />").bind("load",function(){var o=l.attr("data-"+g.data_attribute);
l.hide();
if(l.is("img")){l.attr("src",o)
}else{l.css("background-image","url('"+o+"')")
}l[g.effect](g.effect_speed);
k.loaded=true;
var n=c.grep(h,function(q){return !q.loaded
});
h=c(n);
if(g.load){var p=h.length;
g.load.call(k,p,g)
}g.afterLoad()
}).attr("src",l.attr("data-"+g.data_attribute))
}});
if(0!==g.event.indexOf("scroll")){l.bind(g.event,function(){if(!k.loaded){l.trigger("appear")
}})
}});
d.bind("resize",function(){j()
});
if((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)){d.bind("pageshow",function(k){if(k.originalEvent&&k.originalEvent.persisted){h.each(function(){c(this).trigger("appear")
})
}})
}c(a).ready(function(){j()
});
return this
};
c.belowthefold=function(g,h){var f;
if(h.container===e||h.container===b){f=(b.innerHeight?b.innerHeight:d.height())+d.scrollTop()
}else{f=c(h.container).offset().top+c(h.container).height()
}return f<=c(g).offset().top-h.threshold
};
c.rightoffold=function(g,h){var f;
if(h.container===e||h.container===b){f=d.width()+d.scrollLeft()
}else{f=c(h.container).offset().left+c(h.container).width()
}return f<=c(g).offset().left-h.threshold
};
c.abovethetop=function(g,h){var f;
if(h.container===e||h.container===b){f=d.scrollTop()
}else{f=c(h.container).offset().top
}return f>=c(g).offset().top+h.threshold+c(g).height()
};
c.leftofbegin=function(g,h){var f;
if(h.container===e||h.container===b){f=d.scrollLeft()
}else{f=c(h.container).offset().left
}return f>=c(g).offset().left+h.threshold+c(g).width()
};
c.inviewport=function(f,g){return !c.rightoffold(f,g)&&!c.leftofbegin(f,g)&&!c.belowthefold(f,g)&&!c.abovethetop(f,g)
};
c.extend(c.expr[":"],{"below-the-fold":function(f){return c.belowthefold(f,{threshold:0})
},"above-the-top":function(f){return !c.belowthefold(f,{threshold:0})
},"right-of-screen":function(f){return c.rightoffold(f,{threshold:0})
},"left-of-screen":function(f){return !c.rightoffold(f,{threshold:0})
},"in-viewport":function(f){return c.inviewport(f,{threshold:0})
},"above-the-fold":function(f){return !c.belowthefold(f,{threshold:0})
},"right-of-fold":function(f){return c.rightoffold(f,{threshold:0})
},"left-of-fold":function(f){return !c.rightoffold(f,{threshold:0})
}})
})(jQuery,window,document);