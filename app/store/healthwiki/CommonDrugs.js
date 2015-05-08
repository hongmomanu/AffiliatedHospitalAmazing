Ext.define('AffiliatedHospital.store.healthwiki.CommonDrugs', {
    extend: 'Ext.data.Store',
    config: {
        model: 'AffiliatedHospital.model.healthwiki.CommonDrug',
        autoLoad:false,
        proxy: {
            type: 'ajax',
            url: Globle_Variable.serverurl+"hospital/getcommondrugs"
        }

    }
});
