Ext.define('AffiliatedHospital.view.outpatient.Login', {

    extend: 'Ext.Container',
    xtype: 'loginform',
    //xtype: 'navigationview',
    //autoDestroy: true,


    config: {

        fullscreen: true,

        title:'用户登录',
        layout:'vbox',
        height: '100%',
        width: '100%',
        style: {
            'padding': '1px'
        },


        items:[
            {
                title: '用户登录',
                xtype:'formpanel',
                flex:1,

                itemId:'loginformcontent',
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
                                //title: '医生登录',
                                //centered: true,
                                instructions: '请填写信息',
                                defaults: {
                                    labelAlign:'top'/*,
                                    labelWidth: '150px'*/
                                },
                                items: [
                                    {
                                        xtype: 'textfield',

                                        name: 'name',
                                        label: '姓名',
                                        placeHolder: '请输入姓名',
                                        required: true,
                                        clearIcon: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        name: 'cardnum',
                                        label: '社保卡或健康卡卡号',
                                        placeHolder: '请输入卡号',
                                        required: true,
                                        clearIcon: true
                                    }
                                ]
                            }
                            ,
                            {
                                xtype: 'spacer'
                            },
                            {
                                xtype: 'button',
                                margin:15,
                                width:'90%',

                                text: '登录',
                                ui:'confirm',
                                itemId: 'userlogin'
                            }

                        ]

                    }

                ]

            }

        ]

    }
});