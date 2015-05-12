Ext.define('AffiliatedHospital.store.outpatient.ReserveDoctorTimes', {
    extend: 'Ext.data.Store',
    config: {
        model: 'AffiliatedHospital.model.outpatient.ReserveDoctorTime',
        autoLoad: false//,
        //sorters: '_id',
        /*grouper: {
            groupFn: function(record) {
                return record.get('userinfo').sectionname;
            }
        },*/
        /*proxy: {
            type: 'ajax',
            url: Globle_Variable.serverurl+"hospital/getreservedoctortimes"
        }*/
    }
});
