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
                id: record.get("_id")
            },

            scope: this,

            callback: function (records, operation, success) {

            }
        });

    },

    onAppointmentChildSelect:function(list, index, node, record){
        var nav=this.getNav();
        if(!this.doctorView){
            this.doctorView=Ext.create('AffiliatedHospital.view.outpatient.AppointmentDoctorList');
        }

        var store=this.doctorView.getStore();
        store.load({
            //define the parameters of the store:
            params: {
                pid: record.get("_id")
            },
            scope: this,
            callback: function (records, operation, success) {}
        });
        this.doctorView.setTitle(record.get('name'));
        nav.push(this.doctorView);

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