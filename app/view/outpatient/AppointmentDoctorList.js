Ext.define('AffiliatedHospital.view.outpatient.AppointmentDoctorList', {
    extend: 'Ext.List',
    //alias: 'widget.doctors',
    xtype:'appointmentdoctorlist',
    config: {

        variableHeights: true,
        itemId:'appointmentdoctorlist',
        //refreshHeightOnUpdate :false,
        scrollToTopOnRefresh :true,
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
            '<div class="headshot">',
            '{name}',
            '</div>',
            '<div>',
            '{info}',
            '</div>',


        ].join('')
    }
});