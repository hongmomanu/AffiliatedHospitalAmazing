/**
 * Created by jack on 14-11-18.
 * main Controller used by Terminal app
 */
Ext.define('AffiliatedHospital.controller.HealthWiki', {
    extend: 'Ext.app.Controller',

    config: {
        views: [
            'healthwiki.HealthWikiList',
            'healthwiki.DrugBaseList',
            'healthwiki.CommonDrugList',
            'healthwiki.DrugClassifyList',
            'healthwiki.DrugList',
            'healthwiki.DrugDetail',
            'healthwiki.IllDetail'
        ],
        requires: [


        ],
        models: [
            'healthwiki.HealthWiki',
            'healthwiki.CommonDrug',
            'healthwiki.Drug',
            'healthwiki.DrugClassify',
            'healthwiki.DrugBase'
        ],
        stores: [
            'healthwiki.HealthWikis',
            'healthwiki.CommonDrugs',
            'healthwiki.DrugClassifys',
            'healthwiki.Drugs',
            'healthwiki.DrugBases'

        ],
        control: {
            nav: {
                initialize: 'initRender'
            },
            healthwikilistview: {
                itemtap: 'onHealthWikiItemSelect'
            }

        },
        refs: {

            nav: 'main',
            healthwikilistview:'main #healthwikilist'

        }
    },


    initRender: function () {
    },
    onDrugSelect:function(list,index,node,record){
        //console.log(record);
        if(!this.drugdetailview){
            this.drugdetailview=Ext.create('AffiliatedHospital.view.healthwiki.DrugDetail');
        }
        this.drugdetailview.setTitle(record.get('name'));
        this.getNav().push(this.drugdetailview);
        var form=this.drugdetailview.down('formpanel');

        var successFunc = function (response, action) {
            var res=JSON.parse(response.responseText);
            form.setValues(res);
            /*about.setHtml('<div style="font-size:smaller;color:darkgrey;margin: 5px;">'+res.about+'</div>');
            detail.getInnerAt(0).setHtml('<div style="font-size:smaller;color: dimgray;">'+res.illreasion+'</div>');
            detail.getInnerAt(1).setHtml('<div style="font-size:smaller;color: dimgray;">'+res.illdescription+'</div>');
            detail.getInnerAt(2).setHtml('<div style="font-size:smaller;color: dimgray;">'+res.checking+'</div>');
            detail.getInnerAt(3).setHtml('<div style="font-size:smaller;color: dimgray;">'+res.diagnosis+'</div>');
            detail.getInnerAt(4).setHtml('<div style="font-size:smaller;color: dimgray;">'+res.prevention+'</div>');
            detail.getInnerAt(5).setHtml('<div style="font-size:smaller;color: dimgray;">'+res.complication+'</div>');
            detail.getInnerAt(6).setHtml('<div style="font-size:smaller;color: dimgray;">'+res.treatment+'</div>');*/
        };
        var failFunc = function (response, action) {
            Ext.Msg.alert('获取数据失败', '服务器连接异常，请稍后再试', Ext.emptyFn);

        };
        var url = "hospital/getdrugdetailbyid";
        var params = {
            drugid:record.get("_id")
        };
        CommonUtil.ajaxSend(params, url, successFunc, failFunc, 'POST');




    },
    onCommonDrugSelect:function(list,index,node,record){

        if(!this.drugview){
            this.drugview=Ext.create('AffiliatedHospital.view.healthwiki.DrugList');
            this.drugview.on({
                itemtap: {fn: this.onDrugSelect, scope: this, single: false}
            });

        }
        var store=this.drugview.getStore();
        store.load({
            params: {
                pid: record.get("_id")
            }
        });
        //this.possibleillview.setTitle(record.get('name'));
        this.getNav().push(this.drugview);


    },
    onDrugBaseSelect:function(list,index,node,record){

        if(record.get("_id")==1){
            if(!this.commondrugview){
                this.commondrugview=Ext.create('AffiliatedHospital.view.healthwiki.CommonDrugList');
                this.commondrugview.on({
                    itemtap: {fn: this.onCommonDrugSelect, scope: this, single: false}
                });

            }
            var store=this.commondrugview.getStore();
            store.load();
            this.getNav().push(this.commondrugview);

        }else if(record.get("_id")==2){


        }

    },
    onPssibleillSelect:function(list,index,node,record){
        if(!this.illdetailview){
            this.illdetailview=Ext.create('AffiliatedHospital.view.healthwiki.IllDetail');
        }
        this.illdetailview.setTitle(record.get('name'));
        this.getNav().push(this.illdetailview);
        var about=this.illdetailview.down('#about');
        var detail=this.illdetailview.down('#detail');
        var depts=this.illdetailview.down('#depts');
        depts.removeAll();
        var me=this;
        Ext.each(record.get('depts'),function(item){
            depts.add( {
                xtype: 'button',
                text: item,
                handler:function(){

                    var nav=me.getNav();
                    if(!me.doctorView){
                        me.doctorView=Ext.create('AffiliatedHospital.view.outpatient.AppointmentDoctorList');
                    }

                    var store=me.doctorView.getStore();
                    store.load({
                        //define the parameters of the store:
                        params: {
                            pid: record.get("_id")
                        },
                        scope: me,
                        callback: function (records, operation, success) {}
                    });
                    me.doctorView.setTitle(record.get('name'));
                    nav.push(me.doctorView);


                },
                //width:'50%',
                badgeText: '预约'
            });
        });

        detail.setActiveItem(0);
        var successFunc = function (response, action) {
            var res=JSON.parse(response.responseText);
            about.setHtml('<div style="font-size:smaller;color:darkgrey;margin: 5px;">'+res.about+'</div>');
            detail.getInnerAt(0).setHtml('<div style="font-size:smaller;color: dimgray;">'+res.illreasion+'</div>');
            detail.getInnerAt(1).setHtml('<div style="font-size:smaller;color: dimgray;">'+res.illdescription+'</div>');
            detail.getInnerAt(2).setHtml('<div style="font-size:smaller;color: dimgray;">'+res.checking+'</div>');
            detail.getInnerAt(3).setHtml('<div style="font-size:smaller;color: dimgray;">'+res.diagnosis+'</div>');
            detail.getInnerAt(4).setHtml('<div style="font-size:smaller;color: dimgray;">'+res.prevention+'</div>');
            detail.getInnerAt(5).setHtml('<div style="font-size:smaller;color: dimgray;">'+res.complication+'</div>');
            detail.getInnerAt(6).setHtml('<div style="font-size:smaller;color: dimgray;">'+res.treatment+'</div>');
        };
        var failFunc = function (response, action) {
            Ext.Msg.alert('获取数据失败', '服务器连接异常，请稍后再试', Ext.emptyFn);

        };
        var url = "hospital/getilldetailbyid";
        var params = {
            illid:record.get("_id")
        };
        CommonUtil.ajaxSend(params, url, successFunc, failFunc, 'POST');

    },
    onHealthWikiItemSelect:function(list, index, node, record){
        if(record.get("_id")==1){
            if(!this.possibleillview){
                this.possibleillview=Ext.create('AffiliatedHospital.view.wisdomcare.PossibleIllList',
                    {
                        itemId:'possibleilllist1',
                        onItemDisclosure : {//若配置该项，list每一项的右侧都会出现一个小图标。其他功能请查看api
                            handler : function(record, btn, index) {

                                this.select(index);
                            }
                        }
                    });
                this.possibleillview.on({
                    itemtap: {fn: this.onPssibleillSelect, scope: this, single: false}
                });

            }
            this.possibleillview.setTitle(record.get('name'));
            this.getNav().push(this.possibleillview);

        }else if(record.get("_id")==2){

            if(!this.drugbaseview){
                this.drugbaseview=Ext.create('AffiliatedHospital.view.healthwiki.DrugBaseList');
                this.drugbaseview.on({
                    itemtap: {fn: this.onDrugBaseSelect, scope: this, single: false}
                });

            }
            //this.possibleillview.setTitle(record.get('name'));
            this.getNav().push(this.drugbaseview);



        }



    }



});