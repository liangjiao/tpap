//Popup
var olay = KISSY.Overlay.Popup({
        srcNode:'.od-overlay',
        trigger : '.od-img-download',//配置Popup的触发器
        triggerType : 'mouse',    //触发类型
        align : {
            node : '.od-img-download',
            points : ['cc', 'cc'],
            offset : [0, 0]
        }
    }
);






//Dialog
var dlay = KISSY.Overlay.Dialog({
        width: 400,
        headerContent: 'THIS IS TITLE',
        bodyContent: '<iframe scrolling="no" height="200" width="398" frameborder="0" name="popupIframe" src="http://favorite.taobao.com/popup/add_collection.htm?id=10166801469&amp;itemtype=1&amp;scjjc=1&amp;_tb_token_=3b38ed73a7775&amp;t=1305543755536"></iframe>THIS IS CONTENT',
        mask: true,
        align: {
           // points: ['cc', 'cc']
        }
		
    }
);

dlay.move(200,300);
dlay.show();

