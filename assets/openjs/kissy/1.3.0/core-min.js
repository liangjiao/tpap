/*! caja-kissy  */
KISSY.add("openjs/kissy/1.3.0/core",function(t){function n(n){function r(n){this.inner=t.all(n)}n.markCtor(t.Anim),n.grantMethod(t.Anim,"run"),n.grantMethod(t.Anim,"stop"),n.grantMethod(t.Anim,"isRunning"),n.grantMethod(t.Anim,"isPaused"),n.grantMethod(t.Anim,"pause"),n.grantMethod(t.Anim,"resume"),n.markCtor(r);var o="index getDOMNodes getDOMNode end equals add item slice scrollTop scrollLeft height width appendTo prependTo insertBefore insertAfter animate stop run pause resume isRunning isPaused show hide toggle fadeIn fadeOut fadeToggle slideDown slideUp slideToggle filter test clone empty replaceWith parent hasClass addClass removeClass replaceClass toggleClass val text each toggle offset scrollIntoView next prev first last siblings children contains remove  innerWidth innerHeight outerWidth outerHeight on delegate detach fire all len attr removeAttr hasAttr data hasData removeData".split(" "),i=t.EventObject||t.Event.DOMEventObject;n.markCtor(i),n.grantMethod(i,"halt"),n.grantMethod(i,"preventDefault"),n.grantMethod(i,"stopImmediatePropagation"),n.grantMethod(i,"stopPropagation");var a="altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which axis type".split(" ");return t.each(a,function(t){n.grantRead(i.prototype,t)}),function(i){function a(n,e){var r=[];return e=e?a(e):[],r=t.isString(n)?t.query(n,e[0]||i.mod):t.query(n)}function s(t){return i.frame.imports.tameNode___(t,!0)}function u(){function t(n){return n.target&&(n.target=s(n.target)),n.relatedTarget&&(n.relatedTarget=s(n.relatedTarget)),n.currentTarget&&(n.currentTarget=s(n.currentTarget)),t.handle.call(this,n)}return t}var c=n.markFunction(function(n,e,r,o){var i=u();i.handle=r,r.__event_tag=r.__event_tag||[];var s=a(n);t.each(s,function(t){r.__event_tag.push({fn:i,el:t,scope:o||t})}),t.Event.on(s,e,i,o)}),p=n.markFunction(function(n,e,r,o,i){var s=u();s.handle=o,o.__event_tag=o.__event_tag||[];var c=a(n);t.each(c,function(t){o.__event_tag.push({fn:s,el:t,filter:r,scope:i||t})}),t.Event.delegate(c,e,r,s,i)}),l=n.markFunction(function(n,e,r,o){var i=a(n);if(r)for(var s=r.__event_tag||[],u=s.length-1;u>=0;u--){var c=s[u],p=o||c.el;c.scope===p&&t.inArray(c.el,i)&&(t.Event.remove(c.el,e,c.fn,o),s.splice(u,1))}else t.Event.remove(i,e)});return r.prototype.on=function(t,n,e){var r=this,o=r.inner.getDOMNodes();return c(o,t,n,e),this},r.prototype.delegate=function(t,n,e,r){var o=this,i=o.inner.inner.getDOMNodes();return p(i,t,e,r),this},r.prototype.detach=function(t,n,e){var r=this,o=r.inner.getDOMNodes();return l(o,t,n,e),this},r.prototype.getDOMNodes=function(){var n=[];return t.each(this.inner.getDOMNodes(),function(t){n.push(s(t))}),n},r.prototype.getDOMNode=function(){return s(this.inner.getDOMNode())},r.prototype.each=function(t){return this.inner.each(function(n,e){t.call(r,new r(n),e)}),this},r.prototype.slice=function(t,n){return new r(this.inner.slice(t,n))},r.prototype.stop=function(){return this.inner.stop.apply(this.inner,arguments),this},r.prototype.remove=function(){return this.inner.remove(),this},r.prototype.scrollIntoView=function(){var n=t.makeArray(arguments);return n[2]&&(n[2]=a(n[2])),this.inner.scrollIntoView.apply(this.inner,n),this},r.prototype.val=function(){return void 0!==arguments[0]?(this.inner.val(arguments[0]),this):this.inner.val()},r.prototype.text=function(){return arguments[0]?(this.inner.text(arguments[0]),this):this.inner.text()},r.prototype.offset=function(){return this.inner.offset()},r.prototype.replaceWith=function(t){return t.inner?this.inner.replaceWith(t.inner):this.inner.replaceWith(a(t)),this},r.prototype.empty=function(){return this.inner.empty(),this},t.each("appendTo prependTo insertBefore insertAfter".split(" "),function(t){r.prototype[t]=function(n){return this.inner[t](a(n.inner)),this}}),r.prototype.data=function(t,n){return void 0===n?this.inner.data(t):(this.inner.data(t,cajaAFTB.untame(n)),this)},r.prototype.removeData=function(t){return this.inner.removeData(t),this},r.prototype.hasData=function(t,n){return this.inner.hasData(t,cajaAFTB.untame(n))},r.prototype.add=function(t){return t.inner?new r(this.inner.add(t.inner)):new r(this.inner.add(a(t)))},r.prototype.parent=function(n){if(n=n||1,t.isNumber(n)||t.isString(n)){var e=this.inner.parent(n);return t.one(i.mod).contains(e)?new r(e):new r(i.mod)}return t.log("only string or number is supported"),this},r.prototype.attr=function(n,e){return t.startsWith(n,"data-")?void 0===e?this.inner.attr(n):(this.inner.attr(n,e),this):(t.log("data-\u5f00\u5934\u7684\u4f2a\u5c5e\u6027\u624d\u88ab\u652f\u6301!"),void 0)},r.prototype.removeAttr=function(n){return t.startsWith(n,"data-")?(this.inner.removeAttr(n),this):(t.log("data-\u5f00\u5934\u7684\u4f2a\u5c5e\u6027\u624d\u88ab\u652f\u6301!"),void 0)},r.prototype.hasAttr=function(n,e,r){return t.isString(e)&&t.startsWith(e,"data-")?this.inner.hasAttr(a(n),e,cajaAFTB.untame(r)):void 0},t.each("filter next prev first last siblings children".split(" "),function(n){r.prototype[n]=function(e){return t.isFunction(e)?(t.log("filter\u53c2\u6570\u5fc5\u987b\u662f\u5b57\u7b26\u4e32"),this):new r(this.inner[n](e))}}),r.prototype.len=function(){return this.inner.length},r.prototype.scrollTop=function(t){return this.inner.scrollTop(t)},r.prototype.innerWidth=function(){return this.inner.innerWidth()},r.prototype.innerHeight=function(){return this.inner.innerHeight()},r.prototype.outerWidth=function(){return this.inner.outerWidth()},r.prototype.outerHeight=function(){return this.inner.outerHeight()},r.prototype.pause=function(t){return this.inner.pause(t),this},r.prototype.isPaused=function(){return this.inner.isPaused()},r.prototype.isRunning=function(){return this.inner.isRunning()},r.prototype.resume=function(t){return this.inner.resume(t),this},r.prototype.isPaused=function(){return this.inner.isPaused()},r.prototype.contains=function(t){return t.inner?this.inner.contains(t.inner):this.inner.contains(a(t))},r.prototype.scrollLeft=function(t){return this.inner.scrollLeft(t)},r.prototype.height=function(t){return this.inner.height(t)},r.prototype.width=function(t){return this.inner.width(t)},r.prototype.fire=function(){return this.inner.fire.apply(this.inner,arguments),this},t.each("show hide toggle fadeIn fadeOut fadeToggle slideDown slideUp slideToggle".split(" "),function(t){r.prototype[t]=function(){return this.inner[t].apply(this.inner,arguments),this}}),r.prototype.animate=function(){var n=t.makeArray(arguments);return t.isObject(n[0])&&(n[0]=cajaAFTB.untame(n[0])),this.inner.animate(n[0],n[1],n[2],n[3]),this},r.prototype.addClass=function(t){return this.inner.addClass(t),this},r.prototype.hasClass=function(t){return this.inner.hasClass(t)},r.prototype.removeClass=function(t){return this.inner.removeClass(t),this},r.prototype.toggleClass=function(t){return this.inner.toggleClass(t),this},r.prototype.replaceClass=function(t,n){return this.inner.replaceClass(t,n),this},r.prototype.equals=function(t){return this.inner.equals(t.inner)},r.prototype.all=function(t){var n=new r(this.inner.all(t));return this.inner.all(t).__parent&&(n.inner.__parent=this.inner.all(t).__parent),n},r.prototype.end=function(){return new r(this.inner.end())},r.prototype.item=function(t){return new r(this.inner.item(t))},r.prototype.index=function(){return this.inner.index(arguments[0])},r.prototype.clone=function(){return new r(this.inner.clone.apply(this.inner,arguments))},r.prototype.test=function(n){return t.isFunction(n)?(this.inner.test(function(t,e){return n(s(t),e)}),void 0):this.inner.test(n,i.mod)},t.each(o,function(t){n.grantMethod(r,t)}),{unparam:n.markFunction(function(n){return t.unparam(n)}),param:n.markFunction(function(n,e,r,o){return t.param(cajaAFTB.untame(n),e,r,o)}),unEscapeHTML:n.markFunction(function(n){return t.unEscapeHTML(n)}),escapeHTML:n.markFunction(function(n){return t.escapeHTML(n)}),substitute:n.markFunction(function(n,e){return t.substitute(n,cajaAFTB.untame(e))}),DOM:{get:n.markFunction(function(t,n){var e=a(t,n);return s(e[0],!0)}),query:n.markFunction(function(n,e){var r=a(n,e);return t.each(r,function(t,n){r[n]=s(t,!0)}),r}),text:n.markFunction(function(n,e){return t.DOM.text(a(n),e)}),offset:n.markFunction(function(n,e){return t.DOM.offset(a(n),e)}),hasClass:n.markFunction(function(n,e){return t.DOM.hasClass(a(n),e)}),addClass:n.markFunction(function(n,e){return t.DOM.addClass(a(n),e)}),removeClass:n.markFunction(function(n,e){return t.DOM.removeClass(a(n),e)}),toggleClass:n.markFunction(function(n,e){return t.DOM.toggleClass(a(n),e)}),replaceClass:n.markFunction(function(n,e,r){return t.DOM.replaceClass(a(n),e,r)}),data:n.markFunction(function(n,e,r){return t.DOM.data(a(n),e,cajaAFTB.untame(r))}),hasData:n.markFunction(function(n,e){return t.DOM.hasData(a(n),e)}),removeData:n.markFunction(function(n,e){return t.DOM.removeData(a(n),e)}),attr:n.markFunction(function(n,e,r){return t.isString(e)&&t.startsWith(e,"data-")?t.DOM.attr(a(n),e,r):void 0}),hasAttr:n.markFunction(function(n,e){return t.DOM.hasAttr(a(n),e)}),removeAttr:n.markFunction(function(n,e){return t.isString(e)&&t.startsWith(e,"data-")?t.DOM.removeAttr(a(n),e):void 0}),css:n.markFunction(function(n,r,o){var i=a(n);t.each(i,function(n){var i=cajaAFTB.checkCss(n,r,o);!0===i?e.css(n,r,o):t.log(i)})})},io:n.markFunction(function(n){var e=cajaAFTB.untame(n);e.data=cajaAFTB.untame(e.data);var r=e.url;return"/"!==r.charAt(0)&&(r=cajaAFTB.rewriteURL(r,null,null,{XML_ATTR:"href"})),"json"!==e.dataType&&"jsonp"!==e.dataType&&(e.dataType="jsonp"),r?t.io(t.mix(e)):function(){t.log("url \u4e0d\u5728\u767d\u540d\u5355\u4e2d.")}}),UA:t.clone(t.UA),log:n.markFunction(function(){t.log.apply(t,arguments)}),Event:{add:c,on:c,remove:l,detach:l,delegate:p,fire:n.markFunction(function(n,e){t.Event.fire(a(n),e)})},Anim:n.markFunction(function(){var n=t.makeArray(arguments);return n[0]=a(n[0])[0],t.isObject(n[1])&&(n[1]=cajaAFTB.untame(n[1])),t.Anim.apply(window,n)}),JSON:{parse:n.markFunction(function(n){return t.JSON.parse(n)}),stringify:n.markFunction(function(n){return t.JSON.stringify(cajaAFTB.untame(n))})},all:n.markFunction(function(){return new r(a(arguments[0]))}),alert:n.markFunction(function(t){alert(t)}),kissy:!0}}}var e=t.DOM;return t.Event,n},{requires:["core"]});