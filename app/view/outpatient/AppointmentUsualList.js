Ext.define('AffiliatedHospital.view.outpatient.AppointmentUsualList', {
    extend: 'Ext.List',
    //alias: 'widget.doctors',
    xtype:'appointmentusuallist',
    initialize : function() {

        var me = this;
        me.setStore(Ext.create('AffiliatedHospital.store.outpatient.AppointmentUsuals'));

        me.callParent(arguments);

    },
    config: {

        variableHeights: true,
        itemId:'appointmentusuallist',
        //refreshHeightOnUpdate :false,
        scrollToTopOnRefresh :true,
        title:'',
        emptyText: '<div>无相关内容</div>',
        //grouped:true,
        //indexBar:true,
        //store: 'AppointmentDoctors',

        listeners: {
            painted: function(){

                this.fireEvent('viewshow', this);
            }
        },

        items: [
            {
                xtype: 'toolbar',
                height:25,
                //cls:'nopadding-toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'selectfield',
                        itemId:'datedata',

                        listeners : {
                            change : {// 内容改变

                                fn : function(obj, newValue, oldValue, eOpts) {
                                    var liststore=obj.up('appointmentusuallist').getStore();
                                    liststore.clearFilter();
                                    var typevalue=obj.up('appointmentusuallist').down('#timetype').getValue();
                                    if(newValue!=='all'){
                                        liststore.filter('time',newValue);

                                    }
                                    if(typevalue!=='all'){
                                        liststore.filter('zblb',typevalue);
                                    }


                                }
                            }
                        },
                        width:155/*,
                        options: (function(){
                            var data=[{text:'全部日期',value:'all'}];
                            var now=new Date();
                            for(var i=1;i<11;i++){
                                var time=Ext.Date.add(now,Ext.Date.DAY,i);
                                var timestr=Ext.Date.format(time,'Y-m-d');
                                data.push({text:timestr,value:timestr});
                            }
                            return data;
                        })()*/
                    },
                    {
                        xtype: 'selectfield',
                        width:120,
                        itemId:'timetype',
                        listeners : {
                            change : {// 内容改变

                                fn : function(obj, newValue, oldValue, eOpts) {
                                    var liststore=obj.up('appointmentusuallist').getStore();
                                    liststore.clearFilter();

                                    if(newValue!=='all'){
                                        liststore.filter('zblb',newValue);

                                    }

                                    var datedatavalue =obj.up('appointmentusuallist').down('#datedata').getValue();

                                    if(datedatavalue!=='all'){
                                        liststore.filter('time',datedatavalue);
                                    }


                                }
                            }
                        },
                        options: [
                            {text:'全天',value:'all'},
                            {text:'上午',value:'1'},
                            {text:'下午',value:'2'}
                        ]
                    }

                ]
            }
        ],
        itemTpl: [
            '<table width="100%" height="100%"><tr>',

            '<td width="40%">',
            '<div class="headshot" style="text-align: center;">{ksmc}',
            '</div>',
            '</td>',

            '<td width="60%">',
            '<div style="text-align: left">',
            '{time}',
            '<tpl if="zblb == 1">',
            '<p>上午</p>',
            '<tpl else>',
            '<p>下午</p>',
            '</tpl>',
            '</div></td>',

            /*'<td width="25%">',
            '<div style="text-align: right;padding: 5px;background-color: #0064a9;color: white;">',
            '{num}',
            '</div></td>',*/


            '</tr></table>'


        ].join('')
    }
});