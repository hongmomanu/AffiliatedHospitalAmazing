Ext.define('AffiliatedHospital.view.outpatient.AppsDownLoad', {
    extend: 'Ext.Container',
    //alias: 'widget.doctors',
    xtype:'appsdownload',

    //cls: 'x-contacts',
    config: {

        title:'app下载',
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
                        defaults:{
                            labelWidth:'130px',
                            labelAlign:'left'
                        },

                        items:[
                            {
                                xtype:'button',
                                width:245,
                                margin:5,
                                itemId:'doctorclient',
                                //centered :true,
                                text:'e医通医生客户端'
                            },

                            {
                                xtype:'button',
                                width:245,
                                margin:5,
                                itemId:'patientclient',
                                //centered :true,
                                text:'e医通患者客户端'
                            }
                        ]
                    }
                ]

            }
        ]


    }
});