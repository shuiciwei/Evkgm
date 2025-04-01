(function(d,f,g){var e=d.phoenixSite||(d.phoenixSite={});
var b=e.prodGroup||(e.prodGroup={});
var a={};
var c=d.$_phoenix==g;
f.extend(b,{init:function(h){f.extend(a,h);
b.bindFrontEvent()
},bindFrontEvent:function(){var j=a.widgetClass;
var i=a.hasGroup;
var h=function(l){var l=l;
var k="";
l.each(function(){_that=f(this);
var o=_that.find(".prodGroupBox");
var n=parseInt(_that.width());
var m=parseInt(_that.height());
if(n<=500){k="prodGroup_phone"
}else{if(n<=750){k="prodGroup_ipad"
}else{if(n<=1600){k="prodGroup_pc"
}}}var p=o.attr("widthName");
o.attr("widthName",k).removeClass(p).addClass(k)
})
};
h(f("."+j));
f(d).resize(function(){h(f("."+j))
})
}})
})(window,jQuery);