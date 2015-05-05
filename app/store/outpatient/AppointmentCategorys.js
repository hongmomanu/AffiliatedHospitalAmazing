Ext.define('AffiliatedHospital.store.outpatient.AppointmentCategorys', {
    extend: 'Ext.data.Store',
    config: {
        model: 'AffiliatedHospital.model.outpatient.AppointmentCategory',
        autoLoad: true,
        //sorters: '_id',
        /*grouper: {
            groupFn: function(record) {
                return record.get('userinfo').sectionname;
            }
        },*/
        proxy: {
            type: 'ajax',
            url: Globle_Variable.serverurl+"hospital/getappointmentcategory"
        }
    }
});
