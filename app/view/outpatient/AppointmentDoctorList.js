Ext.define('AffiliatedHospital.view.outpatient.AppointmentDoctorList', {
    extend: 'Ext.List',
    //alias: 'widget.doctors',
    xtype:'appointmentdoctorlist',
    config: {

        variableHeights: true,
        itemId:'appointmentdoctorlist',
        //refreshHeightOnUpdate :false,
        scrollToTopOnRefresh :true,
        title:'Doctor',
        //grouped:true,
        //indexBar:true,
        store: 'AppointmentDoctors',

        listeners: {
            painted: function(){

                this.fireEvent('viewshow', this);
            }
        },

        items: [],
        itemTpl: [
            '<table width="100%" height="100%"><tr>',
            '<td width="40%">',
            '<div class="headshot">{name}',
            '</div>',
            '<div>',
            '{info}',
            '</div></td>',

            '<td width="35%">',
            '<div style="text-align: left">',
            '{time}',
            '</div></td>',

            '<td width="25%">',
            '<div style="text-align: right;padding: 5px;background-color: #0064a9;color: white;">',
            '{num}',
            '</div></td>',


            '</tr></table>'


        ].join('')
    }
});