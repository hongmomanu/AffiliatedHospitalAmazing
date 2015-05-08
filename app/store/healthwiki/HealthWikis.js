Ext.define('AffiliatedHospital.store.healthwiki.HealthWikis', {
    extend: 'Ext.data.Store',
    config: {
        model: 'AffiliatedHospital.model.healthwiki.HealthWiki',
        data : [
            {name: "疾病库",    _id: 1},
            {name: "药物库",    _id: 2},
            {name: "急救库",    _id: 3},
            {name: "化验单解读",    _id: 4},
            {name: "健康小工具",    _id: 5}

        ]

    }
});
