Ext.define('AffiliatedHospital.view.outpatient.AppointmentCategoryChildList', {
    extend: 'Ext.List',
    //alias: 'widget.doctors',
    xtype:'appointmentcategorychildlist',
    //cls: 'x-contacts',
    config: {
        //title: '医生圈',
        //cls: 'demo-list',
        variableHeights: true,
        onItemDisclosure : {//若配置该项，list每一项的右侧都会出现一个小图标。其他功能请查看api
            handler : function(record, btn, index) {
                //alert('点击小按钮触发的事件');
                console.log(record)
            }
        },
        itemId:'appointmentcategorychildlist',
        //refreshHeightOnUpdate :false,
        scrollToTopOnRefresh :true,
        //grouped:true,
        //indexBar:true,
        store: 'AppointmentCategoryChildren',

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