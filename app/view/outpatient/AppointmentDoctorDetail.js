Ext.define('AffiliatedHospital.view.outpatient.AppointmentDoctorDetail', {
    extend: 'Ext.Container',
    //alias: 'widget.doctors',
    xtype:'appointmentdoctordetail',
    config: {

        fullscreen: true,

        title:'Doctor',
        layout:'vbox',
        items:[
            {
                flex:1,
                itemId:'doctorinfo',
                scrollable:true,
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        //height:20,
                        minHeight: '1em',
                        centered:true,
                        items: [
                            {
                                xtype: 'label',
                                html: '<div style="font-size: small;font-weight: bold;text-align: center;">[医生简介]</div>'
                            }
                        ]
                    }

                ],

                html: '<div style="font-size:smaller;color:darkgrey;margin: 5px;">专业特长：眼底病诊疗，视网膜、玻璃体手术、糖尿病视网膜病激光诊疗</div>'
                /*xtype:'appointmentcategorylist',
             style: 'background-color: #5E99CC;'*/
            },
            {
                flex:1.5,
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
                                itemId:'datetimetitle',
                                align: 'center',
                                html: '<div style="font-size: small; font-weight: bold;text-align: center">2015-12-20</div>'
                            }
                        ]
                    },{

                        xtype: 'reservedoctortimes',
                        height:300
                    }

                ]
                //html:'Second Panel'/*,

            }

        ]

    }
});