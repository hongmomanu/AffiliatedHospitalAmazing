Ext.define('AffiliatedHospital.view.outpatient.SoftAbout', {
    extend: 'Ext.Container',
    //alias: 'widget.doctors',
    xtype:'softabout',

    //cls: 'x-contacts',
    config: {
        title: '关于我们',
        fullscreen: true,
        scrollable:true,
        //centered :true,
        layout: {
            type: 'fit',
            align: 'middle'
        },

        items:[

            {

                xtype: 'container',
                layout: 'vbox',
                items:[

                    {
                        xtype:'button',
                        centered :true,
                        text:'服务条款'
                    },{
                        xtype:'button',
                        centered :true,
                        text:'关于我们'
                    }

                ]
            }


        ]

        //html:'<div style="text-align: center;padding-top: 30px;" id="biggercode"></div>'
        //cls: 'x-contacts',

    }
});