Ext.define('AffiliatedHospital.view.healthwiki.CommonDrugList', {
    extend: 'Ext.List',
    //alias: 'widget.doctors',
    xtype:'commondruglist',
    //cls: 'x-contacts',
    config: {
        title: '常见药物',
        //cls: 'x-contacts',
        variableHeights: true,
        itemId:'commondruglist',
        onItemDisclosure : {//若配置该项，list每一项的右侧都会出现一个小图标。其他功能请查看api
            handler : function(record, btn, index) {

                this.select(index);
            }
        },
        //refreshHeightOnUpdate :false,
        scrollToTopOnRefresh :true,
        //grouped:true,
        //indexBar:true,
        store: 'CommonDrugs',

        listeners: {
            painted: function(){

                this.fireEvent('viewshow', this);
            }
        },

        items: [


        ],

        itemTpl: [
            '<div class="headshot">',
            '{name}',
            '</div>'
        ].join('')
    }
});