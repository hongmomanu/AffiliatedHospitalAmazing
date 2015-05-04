Ext.define('AffiliatedHospital.view.Main', {
    //extend: 'Ext.tab.Panel',
    extend: 'Ext.NavigationView',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Ajax',
        'Ext.Video'
    ],
    config: {

        fullscreen: true,
        scrollable: 'vertical',

        height: '100%',
        width: '100%',
        style: {
            'padding': '1px'
        },
        centered: true,

        items: [
            {

                xtype:'tabpanel',
                tabBarPosition: 'bottom',
                title:'绍兴文理学院附属医院',
                //activeItem:0,
                fullscreen : true,
                //layout : 'fit',

                items: [
                    {
                        title: '首页',
                        iconCls: 'home',
                        //xtype:'navigationview',
                        styleHtmlContent: true,
                        scrollable: true,
                        itemId: 'homepage',
                        //styleHtmlContent: true,
                        layout: 'vbox',

                        items: [
                            {
                                xtype : 'container',
                                title : '宝宝喂养记',
                                flex:1,
                                style : 'background-color: #FFFFFF',
                                layout : {
                                    type : 'vbox',
                                    align : 'center'
                                },
                                items : [{
                                    xtype : 'panel',
                                    margin : '40 0 0 0',
                                    cls : 'home',
                                    defaults : {
                                        xtype : 'panel',
                                        layout : 'hbox'
                                    },
                                    items : [{
                                        defaults : {
                                            xtype : 'panel',
                                            margin : 10
                                        },
                                        items : [{
                                            xtype : 'button',
                                            text : '门诊预约',
                                            iconAlign : 'top',
                                            icon : "resources/icons/muru.png",
                                            handler : function() {
                                            }
                                        }, {
                                            xtype : 'button',
                                            text : '预约签到',
                                            iconAlign : 'top',
                                            icon : "resources/icons/weinai.png",
                                            handler : function() {
                                            }
                                        }, {
                                            xtype : 'button',
                                            text : '取报告单',
                                            iconAlign : 'top',
                                            icon : "resources/icons/niaobu.png",
                                            handler : function() {
                                            }
                                        }]
                                    }, {
                                        defaults : {
                                            xtype : 'panel',
                                            margin : 10
                                        },
                                        items : [{
                                            xtype : 'button',
                                            text : '消费记录',
                                            iconAlign : 'top',
                                            icon : "resources/icons/tiwen.png",
                                            handler : function() {
                                            }
                                        }, {
                                            xtype : 'button',
                                            text : '诊疗记录',
                                            iconAlign : 'top',
                                            icon : "resources/icons/shuijiao.png",
                                            handler : function() {
                                            }
                                        }, {
                                            xtype : 'button',
                                            text : '健康百科',
                                            iconAlign : 'top',
                                            icon : "resources/icons/about.png",
                                            handler : function() {
                                                // Ext.Msg.alert('关于', '欢迎使用《宝宝喂养记》<br/>版本：1.0-20140620<br/>作者：LionGIS@163.com', Ext.emptyFn);
                                            }

                                        }]
                                    }, {
                                        defaults : {
                                            xtype : 'panel',
                                            margin : 10
                                        },
                                        items : [{
                                            xtype : 'button',
                                            text : '医院导航',
                                            iconAlign : 'top',
                                            icon : "resources/icons/tiwen.png",
                                            handler : function() {
                                            }
                                        }, {
                                            xtype : 'button',
                                            text : '医院动态',
                                            iconAlign : 'top',
                                            icon : "resources/icons/shuijiao.png",
                                            handler : function() {
                                            }
                                        }, {
                                            xtype : 'button',
                                            text : '专家介绍',
                                            iconAlign : 'top',
                                            icon : "resources/icons/about.png",
                                            handler : function() {
                                            }

                                        }]
                                    }]

                                }]
                            }

                        ]
                    }
                ]

            }


        ]





    }
});