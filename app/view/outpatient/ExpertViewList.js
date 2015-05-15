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
        onItemDisclosure : {//若配置该项，list每一项的右侧都会出现一个小图标。其他功能请查看api
            handler : function(record, btn, index) {
                //alert('点击小按钮触发的事件');
                //console.log(record)
                this.select(index);
            }
        },
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
            '{name}({data.length})',
            '</div>'
        ].join('')
    }
});