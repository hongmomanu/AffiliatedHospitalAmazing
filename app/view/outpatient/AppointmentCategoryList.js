Ext.define('AffiliatedHospital.view.outpatient.AppointmentCategoryList', {
    extend: 'Ext.List',
    //alias: 'widget.doctors',
    xtype:'appointmentcategorylist',
    //cls: 'x-contacts',
    config: {
        //title: '医生圈',
        //cls: 'x-contacts',
        variableHeights: true,
        itemId:'appointmentcategorylist',
        //refreshHeightOnUpdate :false,
        scrollToTopOnRefresh :true,
        //grouped:true,
        //indexBar:true,
        store: 'AppointmentCategorys',

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