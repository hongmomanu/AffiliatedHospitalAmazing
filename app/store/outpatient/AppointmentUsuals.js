Ext.define('AffiliatedHospital.store.outpatient.AppointmentUsuals', {
    extend: 'Ext.data.Store',
    config: {
        model: 'AffiliatedHospital.model.outpatient.AppointmentUsual',
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
