Ext.define('AffiliatedHospital.store.healthwiki.AssayClassifys', {
    extend: 'Ext.data.Store',
    config: {
        model: 'AffiliatedHospital.model.healthwiki.AssayClassify',
        autoLoad:false,
        proxy: {
            type: 'ajax',
            url: Globle_Variable.serverurl+"hospital/getassayclassifybypid"
        }

    }
});
