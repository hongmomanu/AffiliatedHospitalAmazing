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

        var successFunc = function (response, action) {
            var res=JSON.parse(response.responseText);
            Ext.each(res,function(item){
                store.add(item);
            })

        };
        var failFunc = function (response, action) {
            Ext.Msg.alert('获取数据失败', '服务器连接异常，请稍后再试', Ext.emptyFn);

        };
        var url = "hospital/getdeptsbycode";
        var depts=record.get("depts");
        var codes=depts.indexOf(",")>=0?depts.split(","):[depts,depts];

        var params = {
            codes:codes
        };
        CommonUtil.ajaxSend(params, url, successFunc, failFunc, 'POST');






    },
    onPossibledeptSelect:function(list, index, node, record){

        var outController=this.getApplication().getController('Outpatient');
        outController.onAppointmentChildSelect(list, index, node, record);
        /*var nav=this.getNav();
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
        nav.push(this.doctorView);*/

    }



});