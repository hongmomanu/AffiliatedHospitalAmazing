Ext.define('AffiliatedHospital.view.outpatient.SoftAbout', {
    extend: 'Ext.Container',
    //alias: 'widget.doctors',
    xtype:'softabout',

    //cls: 'x-contacts',
    config: {

        title:'关于',
        style:{
            'padding':'1px'
        },

        layout: 'fit',

        fullscreen: true,

        items:[

            {
                xtype: 'container',
                layout: 'fit',
                items:[

                    {
                        xtype:'fieldset',
                        instructions:'Copyright @2015绍兴市文理学院附属医院',
                        centered: true,
                        padding:5,
                        defaults:{
                            labelWidth:'130px',
                            labelAlign:'left'
                        },

                        items:[
                            {
                                xtype:'button',
                                //width:245,
                                margin:'0 5 0 5',
                                itemId:'showprovision',
                                iconCls:'fa fa-key',
                                //centered :true,
                                text:'服务条款'
                            },

                            {
                                xtype:'button',
                                //width:245,
                                margin:'5 5 0 5',
                                itemId:'about',
                                iconCls:'fa fa-info-circle',
                                //centered :true,
                                text:'关于我们'
                            }
                        ]
                    }
                ]

            }
        ]


    }
});