Ext.define('AffiliatedHospital.store.healthwiki.DrugClassifys', {
    extend: 'Ext.data.Store',
    config: {
        model: 'AffiliatedHospital.model.healthwiki.DrugClassify',
        autoLoad:false,
        proxy: {
            type: 'ajax',
            url: Globle_Variable.serverurl+"hospital/getdrugclassifybypid"
        }

    }
});
