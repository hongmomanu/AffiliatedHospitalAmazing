Ext.define('AffiliatedHospital.view.healthwiki.IllDetail', {
    extend: 'Ext.Container',
    //alias: 'widget.doctors',
    xtype:'illdetail',

    config: {

        fullscreen: true,

        title:'IllDetail',
        layout:'vbox',
        items:[
            {
                flex:1,
                itemId:'about',
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        //height:20,
                        minHeight: '1em',
                        items: [
                            {
                                xtype: 'label',
                                html: '<div style="font-size: small;font-weight: bold;">概况</div>'
                            }
                        ]
                    }

                ],

                html: '<div style="font-size:smaller;color:darkgrey;margin: 5px;">专业特长：眼底病诊疗，视网膜、玻璃体手术、糖尿病视网膜病激光诊疗</div>'
                /*xtype:'appointmentcategorylist',
             style: 'background-color: #5E99CC;'*/
            },

            {
                flex:1,
                itemId:'depts',
                scrollable:true,
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',

                        //height:20,
                        minHeight: '1em',
                        items: [
                            {
                                xtype: 'label',
                                html: '<div style="font-size: small;font-weight: bold;">科室</div>'
                            }
                        ]
                    }

                ]/*,
                html: '<div style="font-size:smaller;color:darkgrey;margin: 5px;">专业特长：眼底病诊疗，视网膜、玻璃体手术、糖尿病视网膜病激光诊疗</div>'
               */ /*xtype:'appointmentcategorylist',
                 style: 'background-color: #5E99CC;'*/
            },

            {
                flex:5,
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
                                centered:true,
                                align: 'center',
                                html: '<div style="font-size: small; font-weight: bold;text-align: center">详细信息</div>'
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
                                title: '病因描述',
                                scrollable:true,
                                iconCls: 'home',
                                html: ''
                            },
                            {
                                title: '病症描述',
                                iconCls: 'user',
                                scrollable:true,
                                html: ''
                            },
                            {
                                title: '检查',
                                scrollable:true,
                                iconCls: 'home',
                                html: ''
                            },
                            {
                                title: '诊断与鉴别',
                                scrollable:true,
                                iconCls: 'user',
                                html: ''
                            },
                            {
                                title: '预防',
                                scrollable:true,
                                iconCls: 'home',
                                html: ''
                            },
                            {
                                title: '并发症',
                                iconCls: 'user',
                                scrollable:true,
                                html: ''
                            },
                            {
                                title: '治疗',
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