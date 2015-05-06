Ext.define('AffiliatedHospital.view.wisdomcare.PossibleIllList', {
    extend: 'Ext.List',
    //alias: 'widget.doctors',
    xtype:'possibleilllist',
    //cls: 'x-contacts',
    config: {
        //title: '医生圈',
        //cls: 'x-contacts',
        variableHeights: true,
        itemId:'possibleilllist',
        //refreshHeightOnUpdate :false,
        scrollToTopOnRefresh :true,
        //grouped:true,
        //indexBar:true,
        store: 'PossibleIlls',

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