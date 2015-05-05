Ext.define('AffiliatedHospital.store.outpatient.AppointmentDoctors', {
    extend: 'Ext.data.Store',
    config: {
        model: 'AffiliatedHospital.model.outpatient.AppointmentDoctor',
        autoLoad: false,
        //sorters: '_id',
        /*grouper: {
            groupFn: function(record) {
                return record.get('userinfo').sectionname;
            }
        },*/
        proxy: {
            type: 'ajax',
            url: Globle_Variable.serverurl+"hospital/getappointmentcategorydoctors"
        }
    }
});
