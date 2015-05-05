Ext.define('AffiliatedHospital.store.outpatient.AppointmentCategoryChildren', {
    extend: 'Ext.data.Store',
    config: {
        model: 'AffiliatedHospital.model.outpatient.AppointmentCategoryChild',
        autoLoad: false,
        //sorters: '_id',
        /*grouper: {
            groupFn: function(record) {
                return record.get('userinfo').sectionname;
            }
        },*/
        proxy: {
            type: 'ajax',
            url: Globle_Variable.serverurl+"hospital/getappointmentcategorychild"
        }
    }
});
