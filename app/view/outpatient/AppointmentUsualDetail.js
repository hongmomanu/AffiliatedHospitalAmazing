Ext.define('AffiliatedHospital.view.outpatient.AppointmentUsualDetail', {
    extend: 'Ext.Container',
    //alias: 'widget.doctors',
    xtype:'appointmentusualdetail',
    config: {

        fullscreen: true,

        title:' ',
        layout:'fit',
        items:[

            {
                layout:'fit',
                items:[

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
                                itemId:'datetimetitle',
                                align: 'center',
                                html: '<div style="font-size: small; font-weight: bold;text-align: center">2015-12-20</div>'
                            }
                        ]
                    },{

                        xtype: 'reservedoctortimes'/*,
                         height:400*/
                    }

                ]

                }


        ]

    }
});