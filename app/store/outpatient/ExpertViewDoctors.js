Ext.define('AffiliatedHospital.store.outpatient.ExpertViewDoctors', {
    extend: 'Ext.data.Store',
    config: {
        model: 'AffiliatedHospital.model.outpatient.ExpertViewDoctor',
        autoLoad: false
        //sorters: '_id',
        /*grouper: {
            groupFn: function(record) {
                return record.get('userinfo').sectionname;
            }
        },*/

    }
});
