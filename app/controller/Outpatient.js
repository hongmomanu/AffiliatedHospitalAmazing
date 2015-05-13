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
            'outpatient.Dateform',
            'outpatient.ReserveDoctorTimes',
            'outpatient.Login',
            'outpatient.ReserveViewLayout'
        ],
        requires: [
            'Ext.ux.slidenavigation.View'

        ],
        models: [

            'outpatient.AppointmentCategory',
            'outpatient.AppointmentDoctor',
            'outpatient.ReserveDoctorTime',
            'outpatient.Login',
            'outpatient.DateForm',
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
            reservedoctortimesview:'main #reservedoctortimes',
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

        if(valid){

            /*Ext.Viewport.mask({ xtype: 'loadmask',
                message: "加载数据中..." });


            var url=Globle_Variable.soapurl;
            var fields=[

                {name:'mzhm',value:formpanel.getValues().cardnum.trim()}

            ];
            var successFunc = function (response, action) {

                Ext.Viewport.unmask();
                var xml=$.parseXML(response.responseText);

            };
            var failFunc = function (form, action) {
                Ext.Viewport.unmask();
                Ext.Msg.alert("提示信息","获取数据失败");
            };
            CommonUtil.soapCommon(url,'of_brxx','n_yy',fields,successFunc,failFunc);*/



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
                         ksdm:$(item).find('ksdm').text(),
                         zblb:$(item).find('zblb').text(),
                         photo:$(item).find('photo').text()
                     };

                     result.push(data);
                 });
                var store=me.doctorView.getStore();
                var dateview=me.doctorView.down('#datedata');
                var timetypeview=me.doctorView.down('#timetype');
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
        var successFunc = function (response, action) {

            Ext.Viewport.unmask();
            var xml=$.parseXML(response.responseText);
            var resultrows=$($.parseXML($(xml).find('of_pbsjResult').text())).find('yysj_row');
            var result=[];
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

            var timestore=me.getReservedoctortimesview().getStore();

            timestore.setData(result);

        };
        var failFunc = function (form, action) {
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

    onAppointmentTimeSelect:function(list, index, node, record){

        console.log(record);

        if(Globle_Variable.user){

            if(!this.dateformView){
                this.dateformView=Ext.create('AffiliatedHospital.view.outpatient.Dateform');
                //console.log(this.loginView);
            }

            var titleitem=this.doctorDetailView.down('#datetimetitle');

            var formdata={

                yyzj:this.doctorDetailView.getTitle(),
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