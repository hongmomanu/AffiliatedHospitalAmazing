Ext.define('AffiliatedHospital.view.outpatient.AppointmentDoctorList', {
    extend: 'Ext.List',
    //alias: 'widget.doctors',
    xtype:'appointmentdoctorlist',
    config: {

        variableHeights: true,
        itemId:'appointmentdoctorlist',
        //refreshHeightOnUpdate :false,
        scrollToTopOnRefresh :true,
        title:'Doctor',
        //grouped:true,
        //indexBar:true,
        store: 'AppointmentDoctors',

        listeners: {
            painted: function(){

                this.fireEvent('viewshow', this);
            }
        },

        items: [
            {
                xtype: 'toolbar',
                height:25,
                cls:'nopadding-toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'selectfield',
                        width:125,
                        options: (function(){
                            var data=[{text:'全部日期',value:'all'}];
                            var now=new Date();
                            for(var i=0;i<10;i++){
                                var time=Ext.Date.add(now,Ext.Date.DAY,i);
                                var timestr=Ext.Date.format(time,'Y-m-d');
                                data.push({text:timestr,value:timestr});
                            }
                            return data;
                        })()
                    },
                    {
                        xtype: 'selectfield',
                        width:65,
                        options: [
                            {text:'全天',value:'day'},
                            {text:'上午',value:'am'},
                            {text:'下午',value:'pm'}
                        ]
                    },
                    {
                        xtype: 'selectfield',
                        width:95,
                        options: [
                            {text:'正副主任',value:'all'},
                            {text:'正主任',value:'m'},
                            {text:'副主任',value:'a'}
                        ]
                    }




                ]
            }
        ],
        itemTpl: [
            '<table width="100%" height="100%"><tr>',
            '<td width="40%">',
            '<div class="headshot">{name}',
            '</div>',
            '<div>',
            '{info}',
            '</div></td>',

            '<td width="35%">',
            '<div style="text-align: left">',
            '{time}',
            '</div></td>',

            '<td width="25%">',
            '<div style="text-align: right;padding: 5px;background-color: #0064a9;color: white;">',
            '{num}',
            '</div></td>',


            '</tr></table>'


        ].join('')
    }
});