Ext.define('AffiliatedHospital.view.outpatient.UserDateInfoList', {
    extend: 'Ext.List',
    //alias: 'widget.doctors',
    xtype:'userdateinfolist',
    initialize : function() {

        var me = this;
        me.setStore(Ext.create('AffiliatedHospital.store.outpatient.UserDateInfos'));

        me.callParent(arguments);

    },
    config: {

        variableHeights: true,
        itemId:'userdateinfolist',
        //refreshHeightOnUpdate :false,
        scrollToTopOnRefresh :true,
        title:'预约查询',
        emptyText: '<div>暂无预约信息</div>',
        listeners: {
            painted: function(){

                this.fireEvent('viewshow', this);
            }
        },

        items: [

        ],
        itemTpl: [
            '<table width="100%" height="100%"><tr>',

            '<td width="40%">',

            '<div style="font-size: x-small;color:#122D3A">',
            '预约医生',
            '</div>',
            '<div class="headshot" >{ysmc}',
            '</div>',
            '</td>',

            '<td width="60%">',
            '<div style="font-size: x-small;color: #122D3A">',
            '预约时间段',
            '</div>',
            '<div style="text-align: left">',
            '{yyrq}',
            '</div>' ,
            '<div style="text-align:left;font-size:small;color: #122D3A">',
            '{yytime}',
            '</div>' ,
            '</td>',

            /*'<td width="25%">',
            '<div style="text-align: right;padding: 5px;background-color: #0064a9;color: white;">',
            '{num}',
            '</div></td>',*/


            '</tr></table>'


        ].join('')
    }
});