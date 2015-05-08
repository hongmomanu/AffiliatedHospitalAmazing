Ext.define('AffiliatedHospital.store.healthwiki.DrugBases', {
    extend: 'Ext.data.Store',
    config: {
        model: 'AffiliatedHospital.model.healthwiki.DrugBase',
        data : [
            {name: "常见药物",    _id: 1},
            {name: "药物分类",    _id: 2},
            {name: "用药须知",    _id: 3},
            {name: "抢救药物",    _id: 4}
        ]

    }
});
