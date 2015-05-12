Ext.define('AffiliatedHospital.store.outpatient.AppointmentDoctors', {
    extend: 'Ext.data.Store',
    config: {
        model: 'AffiliatedHospital.model.outpatient.AppointmentDoctor',
        autoLoad: false,
        sorters: 'time'//,
        /*grouper: {
            groupFn: function(record) {
                return record.get('time');
            }
        },*/
        /*proxy: {
            type: 'ajax',
            url: Globle_Variable.serverurl+"hospital/getappointmentcategorydoctors"
        }*/
    }
});
