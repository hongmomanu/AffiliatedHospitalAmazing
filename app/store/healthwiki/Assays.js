Ext.define('AffiliatedHospital.store.healthwiki.Assays', {
    extend: 'Ext.data.Store',
    config: {
        model: 'AffiliatedHospital.model.healthwiki.Assay',
        autoLoad:false,
        proxy: {
            type: 'ajax',
            url: Globle_Variable.serverurl+"hospital/getassaysbypid"
        }


    }
});
