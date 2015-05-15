Ext.define('AffiliatedHospital.view.outpatient.ExpertViewList', {
    extend: 'Ext.List',
    //alias: 'widget.doctors',
    xtype:'expertviewlist',
    //cls: 'x-contacts',
    config: {
        title: '专家简介',
        //cls: 'x-contacts',
        emptyText:'无相关内容',
        variableHeights: true,
        itemId:'expertviewlist',
        //refreshHeightOnUpdate :false,
        scrollToTopOnRefresh :true,
        //grouped:true,
        //indexBar:true,
        store: 'ExpertViews',

        listeners: {
            painted: function(){

                this.fireEvent('viewshow', this);
            }
        },

        items: [],
        itemTpl: [
            '<div class="headshot">',
            '{name}',
            '</div>'
        ].join('')
    }
});