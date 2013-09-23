//Popup
var olay = KISSY.Overlay.Popup({
        srcNode:'.ks-dpop',
        trigger : '.ks-img-download',//配置Popup的触发器
        triggerType : 'mouse',    //触发类型
        align : {
            node : '.ks-img-download',
            points : ['cc', 'cc'],
            offset : [0, 0]
        }
    }
);



//Dialog
var dlay = KISSY.Overlay.Dialog({
        width: 400,
        headerContent: '标题',
        bodyContent: '<iframe scrolling="no" height="200" width="398" frameborder="0" name="popupIframe" src="http://favorite.taobao.com/popup/add_collection.htm?id=10166801469&amp;itemtype=1&amp;scjjc=1&amp;_tb_token_=3b38ed73a7775&amp;t=1305543755536"></iframe>',
        mask: true,
        align: {
            points: ['cc', 'cc']
        }
    }
);

//dlay.show();


//Overlay
var overlay = KISSY.Overlay.Overlay({
            elStyle:{
                border:"2px solid gray",
                lineHeight:0
            },
            width:120, //配置高和宽
            height:120,
			headerContent: '标题',
			bodyContent: 'tester',
			mask: true,
			align: {
				points: ['cc', 'cc']
			},
            effect:{
                effect:"slide", //popup层显示动画效果，slide是展开，也可以"fade"渐变
                duration:0.5
            }
        }

);

overlay.show();