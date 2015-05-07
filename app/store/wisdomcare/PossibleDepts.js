Ext.define('AffiliatedHospital.store.wisdomcare.PossibleDepts', {
    extend: 'Ext.data.Store',
    config: {
        model: 'AffiliatedHospital.model.wisdomcare.PossibleDept',
        autoLoad: true
        //sorters: '_id',
        /*grouper: {
            groupFn: function(record) {
                return record.get('userinfo').sectionname;
            }
        },*/

    }
});
