Ext.define('AffiliatedHospital.store.healthwiki.Aids', {
    extend: 'Ext.data.Store',
    config: {
        model: 'AffiliatedHospital.model.healthwiki.Aid',
        autoLoad:false,
        proxy: {
            type: 'ajax',
            url: Globle_Variable.serverurl+"hospital/getaidsbypid"
        }

    }
});
