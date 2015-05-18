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
            'outpatient.AppointmentUsualList',
            'outpatient.AppointmentDoctorDetail',
            'outpatient.AppointmentUsualDetail',
            'outpatient.Dateform',
            'outpatient.HospitalInfoView',
            'outpatient.HospitalNewsList',
            'outpatient.ExpertViewList',
            'outpatient.ExpertViewDoctorList',
            'outpatient.UserDateInfoList',
            'outpatient.ReserveDoctorTimes',
            'outpatient.HospitalNewsDetail',
            'outpatient.ExpertViewDetail',
            'outpatient.Login',
            'outpatient.QrCodeView',
            'outpatient.ReserveViewLayout'
        ],
        requires: [
            'Ext.ux.slidenavigation.View'

        ],
        models: [

            'outpatient.AppointmentCategory',
            'outpatient.AppointmentDoctor',
            'outpatient.AppointmentUsual',
            'outpatient.UserDateInfo',
            'outpatient.ReserveDoctorTime',
            'outpatient.Login',
            'outpatient.ExpertView',
            'outpatient.HospitalNew',
            'outpatient.ExpertViewDoctor',
            'outpatient.DateForm',
            'outpatient.AppointmentCategoryChild'


        ],
        stores: [

            'outpatient.AppointmentCategorys',
            'outpatient.AppointmentDoctors',
            'outpatient.AppointmentUsuals',
            'outpatient.UserDateInfos',
            'outpatient.ExpertViews',
            'outpatient.HospitalNews',
            'outpatient.ExpertViewDoctors',
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
            appointmentusualview: {
                itemtap: 'onAppointmentUsualSelect'
            },
            reservedoctortimesview: {
                itemtap: 'onAppointmentTimeSelect'
            },
            hospitalnewslistview: {
                itemtap: 'onHospitalNewsSelect'
            },
            expertviewlistview: {
                itemtap: 'onExpertViewSelect'
            },
            expertviewdoctorlistview: {
                itemtap: 'onExpertdoctorViewSelect'
            },
            appointmentcategorychildview: {
                itemtap: 'onAppointmentChildSelect'
            },
            loginbtn: {
                tap: 'loginFunc'
            },
            datesendbtn: {
                tap: 'datesendFunc'
            }

        },
        refs: {

            nav: 'main',
            appointmentcategoryview:'main #appointmentcategorylist',
            appointmentdoctorview:'main #appointmentdoctorlist',
            expertviewlistview:'main #expertviewlist',
            expertviewdoctorlistview:'main #expertviewdoctorlist',
            appointmentusualview:'main #appointmentusuallist',
            reservedoctortimesview:'main #reservedoctortimes',
            hospitalnewslistview:'main #hospitalnewslist',
            loginbtn:'loginform #userlogin',
            datesendbtn:'dateform #datesend',
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

    loginFunc:function(btn){

        var formpanel=btn.up('formpanel');
        CommonUtil.addMessage();
        var me=this;
        var valid = CommonUtil.valid('AffiliatedHospital.model.outpatient.Login', formpanel);

        if(valid){

            Ext.Viewport.mask({ xtype: 'loadmask',
                message: "加载数据中..." });


            var url=Globle_Variable.soapurl;
            var fields=[

                {name:'mzhm',value:formpanel.getValues().cardnum.trim()}

            ];
            var successFunc = function (response, action) {

                Ext.Viewport.unmask();
                var xml=$.parseXML(response.responseText);

                try{
                    var userinfo=$($.parseXML($(xml).find('of_brxxResult').text())).find('brxx_row');
                    var brxm=userinfo.find('brxm').text();
                    var brid=userinfo.find('brid').text();
                    var mzhm=userinfo.find('mzhm').text();
                    var sfzh=userinfo.find('sfzh').text();
                    var jtdh=userinfo.find('jtdh').text();
                    if(brxm.trim()===formpanel.getValues().name.trim()){
                        var user={
                            brxm:brxm,
                            brid:brid,
                            mzhm:mzhm,
                            jtdh:jtdh,
                            sfzh:sfzh
                        };
                        localStorage.user=JSON.stringify(user);
                        Globle_Variable.user=user;
                        var menu=Ext.Viewport.down('mainmenu');
                        menu.getMenuItems()[0].hidden=true;
                        menu.getMenuItems()[1].hidden=false;

                        Ext.Msg.alert("提示信息","登录成功!",function(){

                            me.getNav().pop();


                        });
                    }else{

                        Ext.Msg.alert("提示信息","姓名与卡号不符!");
                    }

                }catch(e){
                    Ext.Msg.alert("提示信息","卡号错误!");

                }



            };
            var failFunc = function (form, action) {
                Ext.Viewport.unmask();
                Ext.Msg.alert("提示信息","获取数据失败");
            };
            CommonUtil.soapCommon(url,'of_brxx','n_yy',fields,successFunc,failFunc);



        }

        //alert(1);
    },

    datesendFunc:function(btn){
        var formpanel=btn.up('formpanel');
        CommonUtil.addMessage();
        var me=this;
        var valid = CommonUtil.valid('AffiliatedHospital.model.outpatient.DateForm', formpanel);
        console.log(formpanel.getValues())
        if(valid){

            Ext.Viewport.mask({ xtype: 'loadmask',
                message: "加载数据中..." });


            var url=Globle_Variable.soapurl;
            var fields=[

                {name:'yyrq',value:formpanel.getValues().yyrq.split("---")[0].trim()+":10"},
                {name:'zblb',value:formpanel.getValues().zblb},
                {name:'ksdm',value:formpanel.getValues().ksdm},
                {name:'ysdm',value:formpanel.getValues().ysdm},
                {name:'brid',value:formpanel.getValues().brid},
                {name:'yylxrm',value:formpanel.getValues().yylxrm},
                {name:'yylxdh',value:formpanel.getValues().yylxdh}

            ];
            var successFunc = function (response, action) {

                Ext.Viewport.unmask();

                var xml=$.parseXML(response.responseText);

                var result=$(xml).find('of_yydjResult').text();

                Ext.Msg.alert("提示信息",result,function(){

                    var mainCotroller=me.getApplication().getController('Main');
                    mainCotroller.returnhomemenuFunc();

                });

                //console.log(xml);

            };
            var failFunc = function (form, action) {
                Ext.Viewport.unmask();
                Ext.Msg.alert("提示信息","获取数据失败");
            };
            CommonUtil.soapCommon(url,'of_yydj','n_yy',fields,successFunc,failFunc);



        }



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
        if(record.raw["type"]==1){
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
                {name:'ksdm',value:record.raw['deptcode']},
                {name:'zblb',value:0},
                {name:'ysdm',value:"0"}

            ];
            var successFunc = function (response, action) {

                Ext.Viewport.unmask();
                var xml=$.parseXML(response.responseText);
                var result=[];
                var datedata=[{text:'全部日期',value:'all'}];
                var store=me.doctorView.getStore();
                var dateview=me.doctorView.down('#datedata');
                var timetypeview=me.doctorView.down('#timetype');
                try{

                    var resultrows=$($.parseXML($(xml).find('of_pbxxResult').text())).find('pbxx_row');
                    resultrows.each(function(i,item){
                        var time=Ext.Date.format(new Date($(item).find('gzrq').text()),'Y-m-d');
                        var data={
                            name:$(item).find('ygxm').text(),
                            time:time,
                            ysdm:$(item).find('ysdm').text(),
                            ksdm:$(item).find('ksdm').text(),
                            zblb:$(item).find('zblb').text(),
                            photo:$(item).find('photo').text()
                        };

                        result.push(data);
                    });

                    timetypeview.reset();
                    store.clearFilter();
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

                }catch(e){

                    timetypeview.reset();
                    store.clearFilter();
                    store.setData(result);
                    dateview.setOptions(datedata);

                }


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


            this.doctorView.setTitle(record.raw['name']);
            nav.push(this.doctorView);

        }
        else{
            if(!this.usualAppointView){
                this.usualAppointView=Ext.create('AffiliatedHospital.view.outpatient.AppointmentUsualList');

            }
            var ksmc=record.raw['name'];
            var ksdm=record.raw['deptcode'];
            var result=[];
            var datedata=[{text:'全部日期',value:'all'}];
            var store=this.usualAppointView.getStore();
            var dateview=this.usualAppointView.down('#datedata');
            var timetypeview=this.usualAppointView.down('#timetype');

            var now=new Date();
            for(var i=1;i<11;i++){
                var time=Ext.Date.add(now,Ext.Date.DAY,i);
                var timestr=Ext.Date.format(time,'Y-m-d');
                result.push({ksmc:ksmc,time:timestr,zblb:1,ksdm:ksdm});
                result.push({ksmc:ksmc,time:timestr,zblb:2,ksdm:ksdm});
            }

            timetypeview.reset();
            store.clearFilter();
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

            this.usualAppointView.setTitle(record.raw['name']);
            nav.push(this.usualAppointView);

        }


    },

    onAppointmentUsualSelect:function(list,index,node,record){

        var nav=this.getNav();
        var me=this;
        if(!this.usualDetailView){
            this.usualDetailView=Ext.create('AffiliatedHospital.view.outpatient.AppointmentUsualDetail');
        }
        this.usualDetailView.setTitle(record.get('ksmc'));
        nav.push(this.usualDetailView);


        var datetimetitle=this.usualDetailView.down('#datetimetitle');
        var str='<div style="font-size: small; font-weight: bold;text-align: center">'+record.get('time')+'</div>'
        datetimetitle.setHtml(str);


        Ext.Viewport.mask({ xtype: 'loadmask',
            message: "加载数据中..." });


        var url=Globle_Variable.soapurl;

        var fields=[

            {name:'ksdm',value:record.get('ksdm')},
            {name:'zblb',value:record.get('zblb')},
            {name:'pbrq',value:record.get('time')}

        ];
        var result=[];
        var successFunc = function (response, action) {

            Ext.Viewport.unmask();
            var xml=$.parseXML(response.responseText);
            try{
                var resultrows=$($.parseXML($(xml).find('of_pbsj_ptResult').text())).find('yysj_row');
                resultrows.each(function(i,item){

                    var data={
                        pbrq:$(item).find('pbrq').text(),
                        time:$(item).find('sjjg').text(),
                        num:$(item).find('hdrs').text()-$(item).find('yyrs').text(),
                        ksdm:$(item).find('ksdm').text(),
                        zblb:$(item).find('zblb').text(),
                        ysdm:'PT'
                    };

                    result.push(data);
                });
            }catch(e){

            }




            var timestore=me.getReservedoctortimesview().getStore();

            timestore.setData(result);

        };
        var failFunc = function (form, action) {
            var timestore=me.getReservedoctortimesview().getStore();

            timestore.setData(result);

            Ext.Viewport.unmask();
            Ext.Msg.alert("提示信息","获取数据失败");
        };
        CommonUtil.soapCommon(url,'of_pbsj_pt','n_yy',fields,successFunc,failFunc);


    },
    onAppointmentDoctorSelect:function(list, index, node, record){

        var nav=this.getNav();
        var me=this;
        if(!this.doctorDetailView){
            this.doctorDetailView=Ext.create('AffiliatedHospital.view.outpatient.AppointmentDoctorDetail');
        }
        this.doctorDetailView.setTitle(record.get('name'));
        nav.push(this.doctorDetailView);

        var doctoinforitem=this.doctorDetailView.down('#doctorinfo');

        var datetimetitle=this.doctorDetailView.down('#datetimetitle');
        var str='<div style="font-size: small; font-weight: bold;text-align: center">'+record.get('time')+'</div>'
        datetimetitle.setHtml(str);


        Ext.Viewport.mask({ xtype: 'loadmask',
            message: "加载数据中..." });


        var url=Globle_Variable.soapurl;
        var fields=[

            {name:'ysdm',value:record.get('ysdm')}

        ];
        var successFunc = function (response, action) {

            Ext.Viewport.unmask();
            var xml=$.parseXML(response.responseText);

            var doctorinfo=$($.parseXML($(xml).find('of_ysxxResult').text())).find('ysjj').text();
            var str='<div style="font-size:smaller;color:darkgrey;margin: 5px;">'+doctorinfo+'</div>';
            doctoinforitem.setHtml(str);


        };
        var failFunc = function (form, action) {
            Ext.Viewport.unmask();
            Ext.Msg.alert("提示信息","获取数据失败");
        };
        CommonUtil.soapCommon(url,'of_ysxx','n_yy',fields,successFunc,failFunc);







        var fields=[

            {name:'ysdm',value:record.get('ysdm')},
            {name:'ksdm',value:record.get('ksdm')},
            {name:'zblb',value:record.get('zblb')},
            {name:'pbrq',value:record.get('time')}

        ];
        var result=[];
        var successFunc = function (response, action) {

            Ext.Viewport.unmask();
            var xml=$.parseXML(response.responseText);

            try{
                var resultrows=$($.parseXML($(xml).find('of_pbsjResult').text())).find('yysj_row');
                resultrows.each(function(i,item){

                    var data={
                        pbrq:$(item).find('pbrq').text(),
                        time:$(item).find('sjjg').text(),
                        num:$(item).find('hdrs').text()-$(item).find('yyrs').text(),
                        ksdm:$(item).find('ksdm').text(),
                        zblb:$(item).find('zblb').text(),
                        ysdm:$(item).find('ysdm').text()
                    };

                    result.push(data);
                });
            }catch(e){

            }


            var timestore=me.getReservedoctortimesview().getStore();

            timestore.setData(result);

        };
        var failFunc = function (form, action) {
            var timestore=me.getReservedoctortimesview().getStore();

            timestore.setData(result);

            Ext.Viewport.unmask();
            Ext.Msg.alert("提示信息","获取数据失败");
        };
        CommonUtil.soapCommon(url,'of_pbsj','n_yy',fields,successFunc,failFunc);



        /*var timestore=this.getReservedoctortimesview().getStore();
        timestore.load({
            //define the parameters of the store:
            params: {
                pid: record.get("_id")
            },
            scope: this,
            callback: function (records, operation, success) {}
        });*/


    },

    onExpertViewSelect:function(list, index, node, record){
        if(!this.expertdoctorView){
            this.expertdoctorView=Ext.create('AffiliatedHospital.view.outpatient.ExpertViewDoctorList');
        }
        this.expertdoctorView.setTitle(record.get('name'));
        var store=this.expertdoctorView.getStore();
        store.add(record.get('data'))
        this.getNav().push(this.expertdoctorView);

    },

    onExpertdoctorViewSelect:function(list,index,node,record){

        if(!this.expertViewDetail){
            this.expertViewDetail=Ext.create('AffiliatedHospital.view.outpatient.ExpertViewDetail');
        }
        this.expertViewDetail.setTitle(record.get('name'));
        var me=this;

        Ext.Viewport.mask({ xtype: 'loadmask',
            message: "加载数据中..." });


        var url=Globle_Variable.soapurl;
        var fields=[

            {name:'ysdm',value:record.get('code')}

        ];
        var successFunc = function (response, action) {

            Ext.Viewport.unmask();
            var xml=$.parseXML(response.responseText);
            var  xmlitem=$($.parseXML($(xml).find('of_ysxxResult').text()));
            var doctorinfo=xmlitem.find('ysjj').text();
            var photo=xmlitem.find('photo').text();
            var str='<img  style="float:left;"  onError="this.src=\'resources/icons/noperson.gif\';"  src="'+Globle_Variable.websourceurl+photo+'"><div style="font-size:smaller;color:#122D3A;margin: 5px;">'+doctorinfo+'</div>';
            //doctoinforitem.setHtml(str);
            me.expertViewDetail.setHtml(str);


        };
        var failFunc = function (form, action) {
            Ext.Viewport.unmask();
            Ext.Msg.alert("提示信息","获取数据失败");
        };
        CommonUtil.soapCommon(url,'of_ysxx','n_yy',fields,successFunc,failFunc);




        //var str="";
        //this.expertViewDetail.setHtml("<iframe width='100%' height='100%' src='http://0575fy.com/i.php?s=/d_appon_id_178_kid_42'>")

        this.getNav().push(this.expertViewDetail);


    },

    onHospitalNewsSelect:function(list, index, node, record){
        var me=this;
        if(!this.hospitalnewsDetailView){

            this.hospitalnewsDetailView=Ext.create('AffiliatedHospital.view.outpatient.HospitalNewsDetail');
            //console.log(this.loginView);
        }

        Ext.Viewport.mask({ xtype: 'loadmask',
            message: "下载中..." });
        $.get(record.get('data'),null,function(a){
            Ext.Viewport.unmask();
            var item=$(a).find('.news_content2');
            me.hospitalnewsDetailView.setHtml('<div style="margin: 5px;">'+item.html()+'</div>');
        });
        this.hospitalnewsDetailView.setTitle(record.get('title'));

        this.getNav().push(this.hospitalnewsDetailView);



    },

    onAppointmentTimeSelect:function(list, index, node, record){

        //console.log(record);

        if(Globle_Variable.user){

            if(!this.dateformView){

                this.dateformView=Ext.create('AffiliatedHospital.view.outpatient.Dateform');
                //console.log(this.loginView);
            }

            var view=list.getParent().getParent();

            //var titleitem=this.doctorDetailView.down('#datetimetitle');
            var titleitem=view.down('#datetimetitle');

            var formdata={

                //yyzj:this.doctorDetailView.getTitle(),
                yyzj:view.getTitle(),
                yyrq:$(titleitem.getHtml()).text()+" "+record.get('time'),
                yylxdh:Globle_Variable.user.jtdh,
                yylxrm:Globle_Variable.user.brxm,
                brid:Globle_Variable.user.brid,
                ysdm:record.get('ysdm'),
                ksdm: record.get('ksdm'),
                zblb:record.get('zblb')
            };
            var form=this.dateformView.down('formpanel');

            form.setValues(formdata);

            this.getNav().push(this.dateformView);



        }else{

            var mainCotroller=this.getApplication().getController('Main');
            mainCotroller.loginShow();
        }

        //alert(1);


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