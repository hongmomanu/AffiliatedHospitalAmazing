Ext.define('AffiliatedHospital.store.wisdomcare.PossibleIlls', {
    extend: 'Ext.data.Store',
    config: {
        model: 'AffiliatedHospital.model.wisdomcare.PossibleIll',
        autoLoad: false,
        //sorters: '_id',
        /*grouper: {
            groupFn: function(record) {
                return record.get('userinfo').sectionname;
            }
        },*/
        proxy: {
            type: 'ajax',
            url: Globle_Variable.serverurl+"hospital/getpossibleills"
        }
    }
});
