Ext.define('AffiliatedHospital.store.healthwiki.AidClassifys', {
    extend: 'Ext.data.Store',
    config: {
        model: 'AffiliatedHospital.model.healthwiki.DrugClassify',
        autoLoad:false,
        proxy: {
            type: 'ajax',
            url: Globle_Variable.serverurl+"hospital/getaidclassifybypid"
        }

    }
});
