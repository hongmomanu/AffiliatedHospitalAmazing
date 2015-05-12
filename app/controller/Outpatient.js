/**
 * Created by jack on 14-11-18.
 * main Controller used by Terminal app
 */
Ext.define('AffiliatedHospital.controller.Outpatient', {
    extend: 'Ext.app.Controller',

    config: {
        views: [
            //'outpatient.ReserveView',
            'outpatient.AppointmentCategoryList',
            'outpatient.AppointmentCategoryChildList',
            'outpatient.AppointmentDoctorList',
            'outpatient.AppointmentDoctorDetail',
            'outpatient.ReserveDoctorTimes',
            'outpatient.ReserveViewLayout'
        ],
        requires: [
            'Ext.ux.slidenavigation.View'

        ],
        models: [

            'outpatient.AppointmentCategory',
            'outpatient.AppointmentDoctor',
            'outpatient.ReserveDoctorTime',
            'outpatient.AppointmentCategoryChild'


        ],
        stores: [

            'outpatient.AppointmentCategorys',
            'outpatient.AppointmentDoctors',
            'outpatient.ReserveDoctorTimes',
            'outpatient.AppointmentCategoryChildren'


        ],
        control: {
            nav: {
                initialize: 'initRender'
            },
            appointmentcategoryview: {
                itemtap: 'onAppointmentSelect'
            },
            appointmentdoctorview: {
                itemtap: 'onAppointmentDoctorSelect'
            },
            reservedoctortimesview: {
                itemtap: 'onAppointmentTimeSelect'
            },
            appointmentcategorychildview: {
                itemtap: 'onAppointmentChildSelect'
            }

        },
        refs: {

            nav: 'main',
            appointmentcategoryview:'main #appointmentcategorylist',
            appointmentdoctorview:'main #appointmentdoctorlist',
            reservedoctortimesview:'main #reservedoctortimes',
            appointmentcategorychildview:'main #appointmentcategorychildlist'


        }
    },


    initRender: function () {

        // Application menu

        //alert(1);
       /* var me=this;
        testobj=me.getNav();
        setTimeout(function(){
            me.getNav().setActiveItem(0);
        },500);*/
       /* setTimeout(function(){
            Ext.get('homepage').setHeight((Ext.getBody().getHeight()-50));

        },500);


        Ext.Viewport.on('orientationchange', function(){
            Ext.get('homepage').setHeight((Ext.getBody().getHeight()-50));

        }, this, {buffer: 50 });
*/


    },

    onAppointmentSelect:function(list, index, node, record){
        var childview = this.getAppointmentcategorychildview();
        var store = childview.getStore();
        store.load({
            //define the parameters of the store:
            params: {
                pid: record.get("_id")
            },

            scope: this,

            callback: function (records, operation, success) {

            }
        });

    },

    onAppointmentChildSelect:function(list, index, node, record){
        var nav=this.getNav();
        var me=this;
        console.log(record);
        if(record.get("type")==1){
            if(!this.doctorView){
                this.doctorView=Ext.create('AffiliatedHospital.view.outpatient.AppointmentDoctorList');
            }


            Ext.Viewport.mask({ xtype: 'loadmask',
                message: "加载数据中..." });

            var appoint_time=Ext.Date.add(new Date(),Ext.Date.DAY,1);
            var appoint_time_str=Ext.Date.format(appoint_time,'Y-m-d');
            var url=Globle_Variable.soapurl;
            var fields=[
                //{name:'mzhm',value:'A003300005409'}
                {name:'pbrq',value:appoint_time_str},
                {name:'ksdm',value:record.get('deptcode')},
                {name:'zblb',value:0},
                {name:'ysdm',value:"0"}

            ];
            var successFunc = function (response, action) {

                Ext.Viewport.unmask();
                var xml=$.parseXML(response.responseText);
                var result=[];
                var datedata=[{text:'全部日期',value:'all'}];
                var resultrows=$($.parseXML($(xml).find('of_pbxxResult').text())).find('pbxx_row');
                 resultrows.each(function(i,item){
                     var time=Ext.Date.format(new Date($(item).find('gzrq').text()),'Y-m-d');
                     var data={
                         name:$(item).find('ygxm').text(),
                         time:time,
                         ysdm:$(item).find('ysdm').text(),
                         zblb:$(item).find('zblb').text(),
                         photo:$(item).find('photo').text()
                     };

                     result.push(data);
                 });
                var store=me.doctorView.getStore();
                var dateview=me.doctorView.down('#datedata');
                store.setData(result);

                store.data.each(function(item){
                    var data={text:item.get("time"),value:item.get("time")};
                    if(Ext.Array.every(datedata, function(itemdata){
                            if(itemdata.text ===item.get("time")){
                                return false ;
                            }else {
                                return true;
                            }
                        })){
                        datedata.push(data);
                    }

                });
                dateview.setOptions(datedata);

            };
            var failFunc = function (form, action) {
                Ext.Viewport.unmask();
                Ext.Msg.alert("提示信息","获取数据失败");
            };
            CommonUtil.soapCommon(url,'of_pbxx','n_yy',fields,successFunc,failFunc);



           /* var store=this.doctorView.getStore();
            store.load({
                //define the parameters of the store:
                params: {
                    pid: record.get("_id")
                },
                scope: this,
                callback: function (records, operation, success) {}
            });*/


            this.doctorView.setTitle(record.get('name'));
            nav.push(this.doctorView);

        }


    },

    onAppointmentDoctorSelect:function(list, index, node, record){

        var nav=this.getNav();
        if(!this.doctorDetailView){
            this.doctorDetailView=Ext.create('AffiliatedHospital.view.outpatient.AppointmentDoctorDetail');
        }
        nav.push(this.doctorDetailView);
        testobj=this;
        var timestore=this.getReservedoctortimesview().getStore();
        timestore.load({
            //define the parameters of the store:
            params: {
                pid: record.get("_id")
            },
            scope: this,
            callback: function (records, operation, success) {}
        });


    },

    onAppointmentTimeSelect:function(list, index, node, record){

        alert(1);

       /* var nav=this.getNav();
        if(!this.doctorDetailView){
            this.doctorDetailView=Ext.create('AffiliatedHospital.view.outpatient.AppointmentDoctorDetail');
        }
        nav.push(this.doctorDetailView);
        testobj=this;
        var timestore=this.getReservedoctortimesview().getStore();
        timestore.load({
            //define the parameters of the store:
            params: {
                pid: record.get("_id")
            },
            scope: this,
            callback: function (records, operation, success) {}
        });*/


    }

});