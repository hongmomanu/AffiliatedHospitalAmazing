Ext.define('AffiliatedHospital.store.outpatient.UserDateInfos', {
    extend: 'Ext.data.Store',
    config: {
        model: 'AffiliatedHospital.model.outpatient.UserDateInfo',
        autoLoad: true//,
        //sorters: 'time',
        /*grouper: {
            groupFn: function(record) {
                return record.get('time');
            }
        },*/
       /* proxy: {
            type: 'ajax',
            url: Globle_Variable.serverurl+"hospital/getappointmentcategorydoctorsss"
        }*/
    }
});
