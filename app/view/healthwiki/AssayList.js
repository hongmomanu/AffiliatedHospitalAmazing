Ext.define('AffiliatedHospital.view.healthwiki.AssayList', {
    extend: 'Ext.List',
    //alias: 'widget.doctors',
    xtype:'assaylist',
    //cls: 'x-contacts',
    config: {
        title: '',
        //cls: 'x-contacts',
        variableHeights: true,
        itemId:'assaylist',
        onItemDisclosure : {//若配置该项，list每一项的右侧都会出现一个小图标。其他功能请查看api
            handler : function(record, btn, index) {

                this.select(index);
            }
        },
        //refreshHeightOnUpdate :false,
        scrollToTopOnRefresh :true,
        //grouped:true,
        //indexBar:true,
        store: 'Assays',

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