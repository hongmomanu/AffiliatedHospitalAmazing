Ext.define('AffiliatedHospital.view.healthwiki.BornDetail', {
    extend: 'Ext.Container',
    //alias: 'widget.doctors',
    xtype:'borndetail',

    config: {

        //fullscreen: true,

        title:'预产期自测',
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
                                '预产期自测可以帮你比较准确的掌握宝宝的出生日期，但只有5%的宝宝会正好在预产期当天出生</div>'
                            }
                        ]
                    },
                    {
                        xtype:'formpanel',
                        itemId:'caculateform',
                        flex:1,
                        padding:5,

                        //fullscreen: true,
                        items: [
                            {

                                labelWidth:'50%',
                                xtype: 'datepickerfield',
                                label: '最后一次月经日期',
                                name: 'monthday',
                                value: new Date()


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
                        text: '预产期计算'
                    },
                    {
                        xtype:'panel',
                        padding:5,
                        itemId:'result',
                        flex:4,
                        html:''
                    }


                ]


    }
});