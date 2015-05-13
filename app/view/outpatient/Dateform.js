Ext.define('AffiliatedHospital.view.outpatient.Dateform', {

    extend: 'Ext.Container',
    xtype: 'dateform',
    //xtype: 'navigationview',
    //autoDestroy: true,


    config: {

        fullscreen: true,

        title:'预约确认',
        layout:'vbox',
        height: '100%',
        width: '100%',
        style: {
            'padding': '1px'
        },


        items:[
            {

                xtype:'formpanel',
                flex:1,

                itemId:'dateformcontent',
                //fullscreen: true,
                //layout: 'fit',
                items: [

                    {
                        xtype: 'container',
                        //layout: 'hbox',
                        //centered: true,

                        items:[
                            {
                                xtype: 'fieldset',
                                //centered: true,
                                //instructions: '请填写信息',
                                defaults: {
                                    labelAlign:'top'/*,
                                    labelWidth: '150px'*/
                                },
                                items: [
                                    {
                                        xtype: 'textfield',

                                        name: 'brid',
                                        label: '病例卡号',
                                        readOnly:true,
                                        //placeHolder: '请输入病例卡号',
                                        required: true,
                                        clearIcon: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        name: 'yylxrm',
                                        label: '预约联系人姓名',
                                        placeHolder: '请输入姓名',
                                        required: true,
                                        clearIcon: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        name: 'yylxdh',
                                        label: '预约联系人联系方式',
                                        placeHolder: '请输入联系方式',
                                        required: true,
                                        clearIcon: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        name: 'yyrq',
                                        label: '预约时间',
                                        readOnly:true,
                                        disabled:true,
                                        //placeHolder: '请输入联系方式',
                                        required: true,
                                        clearIcon: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        name: 'yyzj',
                                        label: '预约专家',
                                        readOnly:true,
                                        disabled:true,
                                        //placeHolder: '请输入联系方式',
                                        required: true,
                                        clearIcon: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        name: 'ysdm',
                                        label: 'hide',
                                        hidden:true
                                    },
                                    {
                                        xtype: 'textfield',
                                        name: 'ksdm',
                                        label: 'hide',
                                        hidden:true
                                    },
                                    {
                                        xtype: 'textfield',
                                        name: 'zblb',
                                        label: 'hide',
                                        hidden:true
                                    }
                                ]
                            }
                            ,
                            {
                                xtype: 'button',
                                margin:15,
                                width:'90%',

                                text: '提交',
                                ui:'confirm',
                                itemId: 'datesend'
                            }

                        ]

                    }

                ]

            }

        ]

    }
});