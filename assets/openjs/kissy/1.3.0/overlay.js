/**
 * @fileOverview 组件的安全适配器
 */
KISSY.add(function (S, Overlay, Dialog, Popup) {
    var DOM = S.DOM,
    Event = S.Event;

    /**
     * 提供一个init方法，名字任取(匿名也可以), 最后模块return即可, 用来初始化适配器
     * 初始化方法需要返回一个函数, 用来为每个js模块提供适配对象
     * ps: 页面中可能会有多个安全沙箱环境。init方法内执行的可以理解为所有沙箱共享的一些内容对象，主要提供最原始的安全适配对象和方法。(执行一次,所有沙箱共享)
     *     init返回的函数可以理解是为每个沙箱提供的安全适配对象。(执行多次，每个沙箱对对象的操作不影响其他沙箱)
     * @param frameGroup 页面中的沙箱环境，frame即为沙箱，frameGroup为沙箱组，沙箱的公共环境(一个沙箱可以理解是一个JS模块的之星环境, frameGroup就是页面中所有模块的公共环境)
     * @returns {Function} 获取实际的适配对象
     */
    function init(frameGroup) {
        /**
         * 对原始构造函数做一层封装然后再暴露给第三方环境(门面模式)
         * 所以这里可以写一个SafeConstruector，相当于继承KISSY的组件，并且显示的声明要开放哪些api
         * 这个构造函数对象就是我们适配代码中要暴露给第三方环境的代码。 
         */
        function SafePopup(config) {
            this.inner = new Overlay.Popup(config);
        }
		
		SafePopup.prototype.move = function () {
            this.inner.move();
        };
		SafePopup.prototype.center = function () {
            this.inner.center();
        };
        SafePopup.prototype.show = function () {
            this.inner.show();
        };
        SafePopup.prototype.hide = function () {
            this.inner.hide();
        };
        SafePopup.prototype.render = function () {
            this.inner.render();
        };
        SafePopup.prototype.destroy = function () {
            this.inner.destroy();
        };
		
		SafePopup.prototype.on = function(type, fnc){
            this.inner.on(type, frameGroup.markFunction(function(){
                fnc.call();
            }));
        };
	
        //---- 封装的构造函数编写完成后，就需要让"第三方环境认识" 需要调用markCtor标记一下，让容器认识
        frameGroup.markCtor(SafePopup);//frameGroup.markCor 标记构造函数

        //构造函数实例的方法，需要grantMethod ，加入白名单，没有授权的方法，不可以使用，容器不认识	
		frameGroup.grantMethod(SafePopup, "move");
		frameGroup.grantMethod(SafePopup, "center");
		frameGroup.grantMethod(SafePopup, "show");
        frameGroup.grantMethod(SafePopup, "hide");
		frameGroup.grantMethod(SafePopup, "render");
		frameGroup.grantMethod(SafePopup, "destroy");
		frameGroup.grantMethod(SafePopup, "on");
		
		function SafeDialog(config) {
            this.inner = new Overlay.Dialog(config);
        }
		SafeDialog.prototype.move = function () {
            this.inner.move();
        };
		SafeDialog.prototype.center = function () {
            this.inner.center();
        };
		
		 SafeDialog.prototype.show = function () {
            this.inner.show();
        };
        SafeDialog.prototype.hide = function () {
            this.inner.hide();
        };
        SafeDialog.prototype.render = function () {
            this.inner.render();
        };
        SafeDialog.prototype.destroy = function () {
            this.inner.destroy();
        };
		
		SafeDialog.prototype.on = function(type, fnc){
            this.inner.on(type, frameGroup.markFunction(function(){
                fnc.call();
            }));
        };
		
		 //---- 封装的构造函数编写完成后，就需要让"第三方环境认识" 需要调用markCtor标记一下，让容器认识
        frameGroup.markCtor(SafeDialog);//frameGroup.markCor 标记构造函数

        //构造函数实例的方法，需要grantMethod ，加入白名单，没有授权的方法，不可以使用，容器不认识
		frameGroup.grantMethod(SafeDialog, "move");
		frameGroup.grantMethod(SafeDialog, "center");
		frameGroup.grantMethod(SafeDialog, "show");
        frameGroup.grantMethod(SafeDialog, "hide");
		frameGroup.grantMethod(SafeDialog, "render");
		frameGroup.grantMethod(SafeDialog, "destroy");
		frameGroup.grantMethod(SafeDialog, "on");
	

		
        /**
         * @param context 上下文
         * @param context.mod 沙箱的模块范围，所有操作必须限定到模块范围之内去执行
         * @param context.frame 单个模块的沙箱
         * @return {Object} 实际的组件对象
         */
        return function (context) {

            //最终需要返回给 ISV使用的API，这是真正第三方调用的API，kissy:true意思是这是KISSY这个对象的一个属性
			
			return {
                Overlay: {
                    Popup: frameGroup.markFunction(function () {
                        var args = S.makeArray(arguments);			
                        var config = cajaAFTB.untame(args[0]);	
							config={
								srcNode: DOM.get(config.srcNode,context.mod),
								trigger: DOM.get(config.trigger,context.mod),
								triggerType:config.triggerType,
								align:config.align!=null ? {
									node: DOM.get(config.align.node,context.mod),
									points:config.align.points,
									offset:config.align.offset
								} : null,
								prefixCls: config.prefixCls==null ? 'ks-': config.prefixCls
								};
                        return new SafePopup(config);
                    }),
					Dialog: frameGroup.markFunction(function () {
                        var args = S.makeArray(arguments);			
                        var config = cajaAFTB.untame(args[0]);			
						config={
								srcNode: DOM.get(config.srcNode,context.mod),
								trigger: DOM.get(config.trigger,context.mod),
								triggerType:config.triggerType,
								align:config.align!=null ? {	
									points:config.align.points
								} : null,
								width:config.width,
								height:config.height,
								headerContent:cajaAFTB.sanitizeHtml(config.headerContent),
								bodyContent:cajaAFTB.sanitizeHtml(config.bodyContent)
								};
                        return new SafeDialog(config);
                    })
                },
                kissy:true
            }

        }
    }
    return init;
}, {
    requires: ['overlay']
});