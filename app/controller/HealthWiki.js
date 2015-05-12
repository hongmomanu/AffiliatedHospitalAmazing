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
            'healthwiki.AssayClassifyList',
            'healthwiki.AidClassifyList',

            'healthwiki.AidDetail',
            'healthwiki.DrugList',
            'healthwiki.AidList',
            'healthwiki.BmiDetail',
            'healthwiki.BornDetail',
            'healthwiki.ToolContainer',
            'healthwiki.AssayList',
            'healthwiki.DrugDetail',
            'healthwiki.AssayDetail',
            'healthwiki.IllDetail'
        ],
        requires: [


        ],
        models: [
            'healthwiki.HealthWiki',
            'healthwiki.CommonDrug',
            'healthwiki.Drug',
            'healthwiki.Aid',
            'healthwiki.Assay',
            'healthwiki.DrugClassify',
            'healthwiki.AssayClassify',
            'healthwiki.AidClassify',
            'healthwiki.DrugBase'
        ],
        stores: [
            'healthwiki.HealthWikis',
            'healthwiki.CommonDrugs',
            'healthwiki.DrugClassifys',
            'healthwiki.AssayClassifys',
            'healthwiki.AidClassifys',
            'healthwiki.Drugs',
            'healthwiki.Aids',
            'healthwiki.Assays',
            'healthwiki.DrugBases'

        ],
        control: {
            nav: {
                initialize: 'initRender'
            },
            healthwikilistview: {
                itemtap: 'onHealthWikiItemSelect'
            },
            bmibtn:{

                tap:'showbmiview'
            },
            bornbtn:{

                tap:'showbornview'
            },
            bmicaculatebtn:{
                tap:'makebmicaculate'
            },
            borncaculatebtn:{
                tap:'makeborncaculate'
            }

        },
        refs: {

            nav: 'main',
            bmibtn:'toolcontainer #bmi',
            bornbtn:'toolcontainer #born',
            bmicaculatebtn:'bmidetail #caculate',
            borncaculatebtn:'borndetail #caculate',
            resultpanel:'bmidetail #result',
            bornresultpanel:'borndetail #result',
            caculateform:'bmidetail #caculateform',
            borncaculateform:'borndetail #caculateform',
            healthwikilistview:'main #healthwikilist'

        }
    },


    initRender: function () {
        testobj=this;
    },
    showbmiview:function(){
        if(!this.bmidetailview){
            this.bmidetailview=Ext.create('AffiliatedHospital.view.healthwiki.BmiDetail');
        }
        this.getNav().push(this.bmidetailview);
    },
    showbornview:function(){
        if(!this.borndetailview){
            this.borndetailview=Ext.create('AffiliatedHospital.view.healthwiki.BornDetail');
        }
        this.getNav().push(this.borndetailview);

    },
    makebmicaculate:function(){

        var height=this.getCaculateform().getValues()['height'];
        var weight=this.getCaculateform().getValues()['weight'];
        var value=(weight/(height*height)*10000).toFixed(1);
        var html="<div style='color: #006bb6'>您的BMI值为："+value+"</div>";
        html+="<div><div>过  低：小于18.5 "+(value<18.5?"<i class=\"fa fa-check\"></i>":"")+"</div>" +
        "<div>正  常：18.5～23.9 "+((value>=18.5&&value<24)?"<i class=\"fa fa-check\"></i>":"")+"</div>" +
        "<div>超  重：24.0～27.9 "+((value>=24.0&&value<28)?"<i class=\"fa fa-check\"></i>":"")+"</div>" +
        "<div>肥  胖：大于28 "+(value>=28?"<i class=\"fa fa-check\"></i>":"")+"</div></div>";
        this.getResultpanel().setHtml(html);
        //alert(3);
    },
    makeborncaculate:function(btn){

        var time=this.getBorncaculateform().getValues()["monthday"];
        var borntime=Ext.Date.add(time,Ext.Date.DAY,280);
        var bornstr=Ext.Date.format(borntime,'Y-m-d');
        var html="<div style='color: #006bb6'>您的预产期将是：</div><div style='color: darkred'>" +
            bornstr
            "</div>";
        this.getBornresultpanel().setHtml(html);

    },



    soapTest:function(){


        var url=Globle_Variable.soapurl;
        var fields=[
            //{name:'mzhm',value:'A003300005409'}
            /*{name:'pbrq',value:'2015-05-15'},
            {name:'ksdm',value:'38'},
            {name:'zblb',value:1},*/
            {name:'ysdm',value:"424"}

        ];
        var successFunc = function (response, action) {

            var xml=$.parseXML(response.responseText);
            console.log(xml)
            /*var resultrows=$($.parseXML($(xml).find('of_yyks_ptResult').text())).find('yyks_row');

            resultrows.each(function(i,item){

                console.log($(item).find('ksdm').text()+$(item).find('ksmc').text());

            })*/

            Ext.Msg.alert("提示信息","网页发布成功");
        };
        var failFunc = function (form, action) {
            Ext.Msg.alert("提示信息","发布失败");
        };
        CommonUtil.soapCommon(url,'of_ysxx','n_yy',fields,successFunc,failFunc);

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
        this.drugview.setTitle(record.get('name'));
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


            if(!this.drugclassifysview){
                this.drugclassifysview=Ext.create('AffiliatedHospital.view.healthwiki.DrugClassifyList',
                    {

                        onItemDisclosure : {//若配置该项，list每一项的右侧都会出现一个小图标。其他功能请查看api
                            handler : function(record, btn, index) {

                                this.select(index);
                            }
                        }
                    }
                );
                this.drugclassifysview.on({
                    itemtap: {fn: this.onDrugClassifySelect, scope: this, single: false}
                });

            }
            var store=this.drugclassifysview.getStore();
            store.load({
                params: {
                    pid: 'root'
                }
            });
            this.getNav().push(this.drugclassifysview);


        }

    },
    onAidBaseSelect:function(list,index,node,record){

        if(record.get('counts')>0){
            var view=Ext.create('AffiliatedHospital.view.healthwiki.AidClassifyList',{

                onItemDisclosure : {//若配置该项，list每一项的右侧都会出现一个小图标。其他功能请查看api
                    handler : function(record, btn, index) {

                        this.select(index);
                    }
                }
            });
            var store=view.getStore();
            store.load({
                params: {
                    pid:record.get('_id')
                }
            });
            this.getNav().push(view);
            view.on({
                itemtap: {fn: this.onAidBaseSelect, scope: this, single: false}
            });
        }
        else{
            this.onAidLeafSelect (list,index,node,record);
        }


    },
    onAidLeafSelect:function(list,index,node,record){

        if(!this.aidlistview){
            this.aidlistview=Ext.create('AffiliatedHospital.view.healthwiki.AidList');
            this.aidlistview.on({
                itemtap: {fn: this.onAidSelect, scope: this, single: false}
            });
        }
        this.aidlistview.setTitle(record.get('name'));
        var store=this.aidlistview.getStore();
        store.load({
            params: {
                pid:record.get('_id')
            }
        });
        this.getNav().push(this.aidlistview);

    },
    onAssaySelect:function(list,index,node,record){

        if(!this.assaydetailview){
            this.assaydetailview=Ext.create('AffiliatedHospital.view.healthwiki.AssayDetail');
        }
        this.assaydetailview.setTitle(record.get('name'));
        this.getNav().push(this.assaydetailview);
        var me=this;
        var successFunc = function (response, action) {
            var res=JSON.parse(response.responseText);
            //console.log(res);
            me.assaydetailview.getInnerAt(0).setHtml(res.info);
            me.assaydetailview.getInnerAt(1).setHtml(res.normalvalue);
            me.assaydetailview.getInnerAt(2).setHtml(res.meaning);
        };
        var failFunc = function (response, action) {
            Ext.Msg.alert('获取数据失败', '服务器连接异常，请稍后再试', Ext.emptyFn);
        };
        var url = "hospital/getassaydetailbyid";
        var params = {
            pid:record.get("_id")
        };
        CommonUtil.ajaxSend(params, url, successFunc, failFunc, 'POST');
    },
    onAidSelect:function(list,index,node,record){

        if(!this.aiddetailview){
            this.aiddetailview=Ext.create('AffiliatedHospital.view.healthwiki.AidDetail');
        }
        this.aiddetailview.setTitle(record.get('name'));
        this.getNav().push(this.aiddetailview);
        var me=this;
        var successFunc = function (response, action) {
            var res=JSON.parse(response.responseText);
            me.aiddetailview.setHtml(res.content);
        };
        var failFunc = function (response, action) {
            Ext.Msg.alert('获取数据失败', '服务器连接异常，请稍后再试', Ext.emptyFn);

        };
        var url = "hospital/getaiddetailbyid";
        var params = {
            pid:record.get("_id")
        };
        CommonUtil.ajaxSend(params, url, successFunc, failFunc, 'POST');

    },
    onDrugClassifySelect:function(list,index,node,record){
        //
        //console.log(record);
        if(record.get('counts')>0){
            var view=Ext.create('AffiliatedHospital.view.healthwiki.DrugClassifyList',{

                onItemDisclosure : {//若配置该项，list每一项的右侧都会出现一个小图标。其他功能请查看api
                    handler : function(record, btn, index) {

                        this.select(index);
                    }
                }
            });
            var store=view.getStore();
            store.load({
                params: {
                    pid:record.get('_id')
                }
            });
            this.getNav().push(view);
            console.log(record.get('counts'));
            view.on({
                itemtap: {fn: this.onDrugClassifySelect, scope: this, single: false}
            });
        }
        else{
            this.onCommonDrugSelect (list,index,node,record);
        }



    },onAssayClassifySelect:function(list,index,node,record){
        //
        //console.log(record);
        if(record.get('counts')>0){
            var view=Ext.create('AffiliatedHospital.view.healthwiki.AssayClassifyList',{

                onItemDisclosure : {//若配置该项，list每一项的右侧都会出现一个小图标。其他功能请查看api
                    handler : function(record, btn, index) {

                        this.select(index);
                    }
                }
            });
            var store=view.getStore();
            store.load({
                params: {
                    pid:record.get('_id')
                }
            });
            view.setTitle(record.get("name"));
            this.getNav().push(view);

            view.on({
                itemtap: {fn: this.onAssayClassifySelect, scope: this, single: false}
            });
        }
        else{
            this.onAssayLeafSelect (list,index,node,record);
            //alert(22);
        }



    },
    onAssayLeafSelect:function(list,index,node,record){

        if(!this.assaylistview){
            this.assaylistview=Ext.create('AffiliatedHospital.view.healthwiki.AssayList');
            this.assaylistview.on({
                itemtap: {fn: this.onAssaySelect, scope: this, single: false}
            });
        }
        this.assaylistview.setTitle(record.get('name'));
        var store=this.assaylistview.getStore();
        store.load({
            params: {
                pid:record.get('_id')
            }
        });
        this.getNav().push(this.assaylistview);

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
        var typeid=record.get("_id");
        if(typeid==1){
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

        }else if(typeid==2){

            if(!this.drugbaseview){
                this.drugbaseview=Ext.create('AffiliatedHospital.view.healthwiki.DrugBaseList');
                this.drugbaseview.on({
                    itemtap: {fn: this.onDrugBaseSelect, scope: this, single: false}
                });

            }
            //this.possibleillview.setTitle(record.get('name'));
            this.getNav().push(this.drugbaseview);



        }else if(typeid==3){

            if(!this.aidbaseview){
                this.aidbaseview=Ext.create('AffiliatedHospital.view.healthwiki.AidClassifyList');
                this.aidbaseview.on({
                    itemtap: {fn: this.onAidBaseSelect, scope: this, single: false}
                });

            }
            var store=this.aidbaseview.getStore();
            store.load({
                params: {
                    pid: 'root'
                }
            });
            this.aidbaseview.setTitle(record.get('name'));
            this.getNav().push(this.aidbaseview);

        }else if(typeid==4){
            if(!this.assayclassifysview){
                this.assayclassifysview=Ext.create('AffiliatedHospital.view.healthwiki.AssayClassifyList',
                    {

                        onItemDisclosure : {//若配置该项，list每一项的右侧都会出现一个小图标。其他功能请查看api
                            handler : function(record, btn, index) {

                                this.select(index);
                            }
                        }
                    }
                );
                this.assayclassifysview.on({
                    itemtap: {fn: this.onAssayClassifySelect, scope: this, single: false}
                });

            }
            this.assayclassifysview.setTitle(record.get('name'));
            var store=this.assayclassifysview.getStore();
            store.load({
                params: {
                    pid: 'root'
                }
            });
            this.getNav().push(this.assayclassifysview);


        }else if(typeid==5){

            if(!this.toolview){
                this.toolview=Ext.create('AffiliatedHospital.view.healthwiki.ToolContainer');


            }
            this.toolview.setTitle(record.get('name'));
            this.getNav().push(this.toolview);

        }



    }



});