/*! caja-kissy  */
(function(n,t){var e=window.cajaAFTB||{},r=t;e.untame=function(n){if(r.isObject(n)||r.isArray(n)){var t=r.isObject(n)?{}:[];for(var o in n)if(n.hasOwnProperty(o)){var i=""+o;"TAMED_TWIN___"==i||(t[o]=e.untame(n[o]))}return t}return n},e.rewriteURL=function(n,t,e,o){var i=window.cajaConfig&&cajaConfig.uri||{white_list:[".taobao.com",".taobao.net",".alipay.com",".alibaba.com",".alimama.com",".koubei.com",".alisoft.com",".taobaocdn.com",".taobaocdn.net",".tbcdn.cn",".tmall.com",".hitao.com"],black_list:["s.click.alimama.com","gouwu.alimama.com","cam.taoke.alimama.com","tms.taoke.alimama.com","search8.taobao.com","p.alimama.com","z.alimama.com","t.alimama.com","s.click.taobao.com","huoban.taobao.com","login.taobao.com","member1.taobao.com","oauth.taobao.com","container.api.taoabo.com","to.taobao.com"]};if(o){if(n=r.trim(n),"src"===o.XML_ATTR)return n;if(void 0!==o.CSS_PROP)return n;var a=/^http[s]?:\/\//;if(0!==n.length&&a.test(n))if("href"!==o.XML_ATTR);else{for(var s=0,u=i.black_list.length;u>s;s++)if(-1!==n.indexOf(i.black_list[s]))return;for(var c=n.replace(a,""),l=c.lastIndexOf("/"),d=-1===l?c:c.substring(0,l),s=0,u=i.white_list.length;u>s;s++)if(-1!==d.indexOf(i.white_list[s]))return n}}},e.tameNode=null,e.sanitizeHtml=null,e.checkCss=null,window.cajaAFTB=e})(caja,KISSY);