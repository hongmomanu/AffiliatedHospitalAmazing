Ext.define('AffiliatedHospital.view.healthwiki.AssayClassifyList', {
    extend: 'Ext.List',
    //alias: 'widget.doctors',
    xtype:'assayclassifylist',
    initialize : function(arguments) {

        var me = this;
        me.setStore(Ext.create('AffiliatedHospital.store.healthwiki.AssayClassifys'));
        me.callParent(arguments);

    },
    //cls: 'x-contacts',
    config: {
        title: '',
        //cls: 'x-contacts',
        variableHeights: true,
        //itemId:'drugclassifylist',
        /*onItemDisclosure : {//若配置该项，list每一项的右侧都会出现一个小图标。其他功能请查看api
            handler : function(record, btn, index) {

                this.select(index);
            }
        },*/
        //refreshHeightOnUpdate :false,
        scrollToTopOnRefresh :true,
        //grouped:true,
        //indexBar:true,
        //store: 'DrugClassifys',

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