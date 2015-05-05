Ext.define('AffiliatedHospital.view.outpatient.AppointmentCategoryChildList', {
    extend: 'Ext.List',
    //alias: 'widget.doctors',
    xtype:'appointmentcategorychildlist',
    //cls: 'x-contacts',
    config: {
        //title: '医生圈',
        //cls: 'x-contacts',
        variableHeights: true,
        itemId:'appointmentcategorychildlist',
        //refreshHeightOnUpdate :false,
        scrollToTopOnRefresh :true,
        //grouped:true,
        //indexBar:true,
        store: 'AppointmentCategoryChildren',

        listeners: {
            painted: function(){

                this.fireEvent('viewshow', this);
            }
        },

        items: [],
        itemTpl: [
            '<div class="headshot">',
            '{name}',
            '</div>'
        ].join('')
    }
});