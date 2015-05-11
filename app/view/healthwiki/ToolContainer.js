Ext.define('AffiliatedHospital.view.healthwiki.ToolContainer', {
    extend: 'Ext.Container',
    //alias: 'widget.doctors',
    xtype:'toolcontainer',

    config: {

        fullscreen: true,

        height:'100%',
        width:'100%',


        padding:10,

        scrollable:true,

        layout:'fit',


        title:'toolcontainer',


        items: [

        {
            title: '首页',
            iconCls: 'home',
            //xtype:'navigationview',
            styleHtmlContent: true,
            scrollable: true,
            //itemId: 'homepage',
            //styleHtmlContent: true,
            layout: 'vbox',


            items: [
                {
                    xtype : 'container',
                    title : '',
                    flex:1,
                    height: '100%',
                    width: '100%',
                    centered: true,
                    style : 'background-color: #FFFFFF',
                    layout : {
                        type : 'vbox',
                        align : 'center'
                    },
                    items : [{
                        xtype : 'container',

                        margin : '-20 0 0 0',
                        cls : 'home',
                        defaults : {
                            xtype : 'container',
                            layout : 'hbox'
                        },
                        centered: true,

                        items : [{
                            defaults : {
                                xtype : 'container',
                                margin : 20
                            },

                            items : [{
                                xtype : 'button',
                                text : 'BMI自测',
                                iconAlign : 'top',
                                icon : "resources/icons/muru.png",
                                itemId:'bmi'
                            }, {
                                xtype : 'button',
                                text : '预产期自测',
                                itemId:'born',
                                iconAlign : 'top',
                                icon : "resources/icons/weinai.png"
                            }]
                        }]

                    }]
                }

            ]
        }
    ]





    }
});