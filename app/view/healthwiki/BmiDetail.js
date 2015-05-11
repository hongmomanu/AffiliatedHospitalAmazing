Ext.define('AffiliatedHospital.view.healthwiki.BmiDetail', {
    extend: 'Ext.Container',
    //alias: 'widget.doctors',
    xtype:'bmidetail',

    config: {

        //fullscreen: true,

        title:' BMI自测',
        layout:'vbox',
        items:[

                    {
                        docked: 'top',
                        flex:1,
                        xtype: 'titlebar',
                        //height:20,
                        //minHeight: '1em',
                        items: [
                            {
                                xtype: 'label',
                                html: '<div style="color:black;padding:5px;font-size: small;font-weight: bold;background-color: #ffca43">' +
                                '身高质量指数是目前国际上常用的衡量人体胖廋程度以及是否健康的一个标准</div>'
                            }
                        ]
                    },
                    {
                        xtype:'formpanel',
                        itemId:'caculateform',
                        flex:2,
                        //fullscreen: true,
                        items: [
                            {
                                name: 'height',
                                xtype: 'numberfield',
                                label: '身高(厘米)',
                                value: 170,
                                minValue: 100,
                                maxValue: 210,
                                stepValue: 1


                            },
                            {
                                name: 'weight',
                                xtype: 'numberfield',
                                value: 60,
                                minValue: 30,
                                maxValue: 150,
                                stepValue: 1,
                                label: '体重(公斤)'
                            }
                        ]
                    },
                    {
                        xtype:'button',
                        itemId:'caculate',
                        style: {
                            padding:5
                        },
                        flex:0.7,
                        ui:'confirm',
                        text: 'BMI计算'
                    },
                    {
                        xtype:'panel',
                        padding:5,
                        itemId:'result',
                        flex:6,
                        html:''
                    }


                ]


    }
});