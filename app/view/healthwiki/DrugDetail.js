Ext.define('AffiliatedHospital.view.healthwiki.DrugDetail', {
    extend: 'Ext.Container',
    //alias: 'widget.doctors',
    xtype:'drugdetail',

    config: {

        fullscreen: true,

        title:'IllDetail',
        layout:'vbox',
        items:[
            {
                flex:2,
                itemId:'about',
                layout:'fit',
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        //height:20,
                        minHeight: '1em',
                        items: [
                            {
                                xtype: 'label',
                                html: '<div style="font-size: small;font-weight: bold;">概述</div>'
                            }
                        ]
                    },
                    {
                        xtype:'formpanel',

                        //fullscreen: true,
                        items: [
                            {
                                xtype: 'textfield',
                                name: 'name',
                                readOnly:true,
                                label: '药物名称'
                            },
                            {
                                xtype: 'textfield',
                                name: 'drugtype',
                                readOnly:true,
                                label: '药物类型'
                            },
                            {
                                xtype: 'textfield',
                                readOnly:true,
                                name: 'drugelement',
                                label: '药物成分'
                            },
                            {
                                xtype: 'textfield',
                                readOnly:true,
                                name: 'drugdose',
                                label: '剂量'
                            }
                        ]
                    }

                ]/*,

                html: '<div style="font-size:smaller;color:darkgrey;margin: 5px;">专业特长：眼底病诊疗，视网膜、玻璃体手术、糖尿病视网膜病激光诊疗</div>'
               */
            },



            {
                flex:3,
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        //height:20,
                        minHeight: '1em',
                        centered:true,
                        layout : 'fit',
                        items: [
                            {
                                xtype: 'label',
                                //centered:true,
                                align: 'center',
                                html: '<div style="font-size: small; font-weight: bold;text-align: left">其他</div>'
                            }
                        ]
                    },
                    {
                        xtype: 'tabpanel',
                        height:'100%',
                        width:'100%',
                        itemId:'detail',
                        //layout : 'fit',
                        //fullscreen: true,
                        //tabBarPosition: 'bottom',
                        tabBar: {

                            scrollable:'horizontal',
                            scrollBar:'true',
                            docked:'bottom',
                            layout: {
                                pack: 'center'
                            }

                        },

                        defaults: {
                            styleHtmlContent: true
                        },
                        items: [
                            {
                                title: '适应症',
                                scrollable:true,
                                iconCls: 'home',
                                html: ''
                            },
                            {
                                title: '禁忌',
                                iconCls: 'user',
                                scrollable:true,
                                html: ''
                            },
                            {
                                title: '注意事项',
                                scrollable:true,
                                iconCls: 'home',
                                html: ''
                            },
                            {
                                title: '不良反应',
                                scrollable:true,
                                iconCls: 'user',
                                html: ''
                            }
                        ]
                    }

                ]
                //html:'Second Panel'/*,

            }

        ]

    }
});