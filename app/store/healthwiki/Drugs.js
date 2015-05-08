Ext.define('AffiliatedHospital.store.healthwiki.Drugs', {
    extend: 'Ext.data.Store',
    config: {
        model: 'AffiliatedHospital.model.healthwiki.Drug',
        autoLoad:false,
        proxy: {
            type: 'ajax',
            url: Globle_Variable.serverurl+"hospital/getdrugsbypid"
        }

    }
});
