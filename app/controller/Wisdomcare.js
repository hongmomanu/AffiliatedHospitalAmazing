/**
 * Created by jack on 14-11-18.
 * main Controller used by Terminal app
 */
Ext.define('AffiliatedHospital.controller.Wisdomcare', {
    extend: 'Ext.app.Controller',

    config: {
        views: [
            'wisdomcare.PossibleIllList',
            'wisdomcare.PossibleDeptList',
            'wisdomcare.PossibleIllViewLayout'
        ],
        requires: [


        ],
        models: [
            'wisdomcare.PossibleIll',
            'wisdomcare.PossibleDept'
        ],
        stores: [
            'wisdomcare.PossibleIlls',
            'wisdomcare.PossibleDepts'

        ],
        control: {
            nav: {
                initialize: 'initRender'
            },
            possibleilllistview: {
                itemtap: 'onPossibleillSelect'
            },
            possibledeptlistview: {
                itemtap: 'onPossibledeptSelect'
            }

        },
        refs: {

            nav: 'main',
            possibleilllistview:'main #possibleilllist',
            possibledeptlistview:'main #possibledeptlist'



        }
    },


    initRender: function () {


    },
    onPossibleillSelect:function(list, index, node, record){
        var nav=this.getNav();
        var deptview=this.getPossibledeptlistview();
        var store=deptview.getStore();
        store.removeAll();
        Ext.each(record.get('depts'),function(item){
            store.add({name:item});
        })


    },
    onPossibledeptSelect:function(list, index, node, record){
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

    }



});