/**
 * Created by jack on 14-11-18.
 * main Controller used by Terminal app
 */
Ext.define('AffiliatedHospital.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        views: [
            'Main',
            'menu.MainMenu'
        ],
        requires: [
            'Ext.ux.ActionOverFlowMenuButton',
            'Ext.ux.ContextMenu',
            'Ext.ux.TabMenuButton',
            'Ext.ux.ApplicationMenu',
            'Ext.Toolbar',
            'Ext.field.Text',
            'Ext.data.Store',
            'Ext.dataview.List'
        ],
        models: [




        ],
        stores: [




        ],
        control: {
            nav: {
                initialize: 'initRender',
                returnhomemenu:'returnhomemenuFunc',
                logoutmenu:'logoutShow',
                loginmenu:'loginShow'
            },
            installpatientbtn:{
                tap:'installpatient'
            },
            installdoctorbtn:{
                tap:'installdoctor'
            },
            outpatientreservebtn:{
                tap:'outpatientReserveShow'
            },
            possibleillbtn:{
                tap:'possibleIllShow'
            },
            datequerybtn:{
                tap:'datequeryShow'
            },
            healthwikibtn:{
                tap:'healthwikiShow'
            }

        },
        refs: {

            nav: 'main',
            reservenavsplitbtn:'main #reservenav',
            homepage:'main #homepage',
            outpatientreservebtn:'main #outpatientreserve',
            possibleillbtn:'main #possibleill',
            datequerybtn:'main #datequery',
            healthwikibtn:'main #healthwiki',
            installpatientbtn:'main #installpatient',
            installdoctorbtn:'main #installdoctor'
        }
    },
    returnhomemenuFunc:function(){
        Ext.Viewport.hideMenu('right');
        var nav=this.getNav();
        nav.pop(nav.getInnerItems().length - 1);

    },
    loginShow:function(){

        Ext.Viewport.hideMenu('right');

        if(!this.loginView){
            this.loginView=Ext.create('AffiliatedHospital.view.outpatient.Login');
            //console.log(this.loginView);
        }

        this.getNav().push(this.loginView);
        //this.outpatientReserveShow()

    },
    logoutShow:function(){

        Globle_Variable.user=null;
        localStorage.user="";
        var menu=Ext.Viewport.down('mainmenu');
        menu.getMenuItems()[0].hidden=false;
        menu.getMenuItems()[1].hidden=true;
        Ext.Viewport.hideMenu('right');
        Ext.Msg.alert("提示信息","退出成功!")


    },
    outpatientReserveShow:function(){

        if(!this.reserveView){
            //this.reserveView=Ext.create('AffiliatedHospital.view.outpatient.ReserveView');
            this.reserveView=Ext.create('AffiliatedHospital.view.outpatient.ReserveViewLayout');
            /*this.getNav().push(this.reserveView);
            var btn=this.getReservenavsplitbtn();
            btn.fireEvent('release');*/
            //console.log(this.getrReservenavsplitbtn())
        }
        this.getNav().push(this.reserveView);


        //var reserveView=Ext.create('AffiliatedHospital.view.outpatient.ReserveView');

    },
    possibleIllShow:function(){

        if(!this.possibleIllView){
            //this.reserveView=Ext.create('AffiliatedHospital.view.outpatient.ReserveView');
            this.possibleIllView=Ext.create('AffiliatedHospital.view.wisdomcare.PossibleIllViewLayout');
            /*this.getNav().push(this.reserveView);
            var btn=this.getReservenavsplitbtn();
            btn.fireEvent('release');*/
            //console.log(this.getrReservenavsplitbtn())
        }
        this.getNav().push(this.possibleIllView);


        //var reserveView=Ext.create('AffiliatedHospital.view.outpatient.ReserveView');

    },
    datequeryShow:function(){

        if(!Globle_Variable.user){
            Ext.Msg.alert("提示信息","你还未登录!");

        }else{
            if(!this.userdateinfoView){
                this.userdateinfoView=Ext.create('AffiliatedHospital.view.outpatient.UserDateInfoList');
            }

            this.getNav().push(this.userdateinfoView);

            var store=this.userdateinfoView.getStore();

            var url=Globle_Variable.soapurl;
            var fields=[
                {name:'mzhm',value:Globle_Variable.user.mzhm}
            ];

            Ext.Viewport.mask({ xtype: 'loadmask',
                message: "加载数据中..." });

            var successFunc = function (response, action) {

                var xml=$.parseXML(response.responseText);
                //console.log(xml);
                var data_arr=[];
                try{
                    var resultrows=$($.parseXML($(xml).find('of_yycxResult').text())).find('d_yycx_row');


                    resultrows.each(function(i,item){
                        var time=new Date($(item).find('yyrq').text());
                        var time2=Ext.Date.add(time,Ext.Date.HOUR,1);
                        //var hour=time.getHours();
                        var item_data={
                            yyrq:Ext.Date.format(time,'Y-m-d'),
                            ysmc:$(item).find('ysmc').text(),
                            ksmc:$(item).find('ksmc').text(),
                            yytime:Ext.Date.format(time,'h:i')+ " -- "+Ext.Date.format(time2,'h:i')

                        };

                        data_arr.push(item_data);

                    })
                }catch(e){

                }finally{
                    //console.log(data_arr)
                    Ext.Viewport.unmask();
                    store.setData(data_arr);
                }



            };
            var failFunc = function (form, action) {
                Ext.Msg.alert("提示信息","查询失败");
            };
            CommonUtil.soapCommon(url,'of_yycx','n_yy',fields,successFunc,failFunc);

        }





    },
    healthwikiShow:function(){
        if(!this.healthwikiView){
            this.healthwikiView=Ext.create('AffiliatedHospital.view.healthwiki.HealthWikiList');

        }
        this.getNav().push(this.healthwikiView);

    },

    installdoctor:function(){
        this.installapk(Globle_Variable.serverurl+"download/doctor.apk");

    },
    installpatient:function(){
        this.installapk(Globle_Variable.serverurl+"download/patient.apk");
    },
    installapk:function(url){

        Ext.Viewport.mask({ xtype: 'loadmask',
            message: "下载中..." });

        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0,gotFS , function(){});
        function gotFS(fileSystem) {

            fileSystem.root.getFile("patient.apk", {create: true, exclusive: false}, gotFileEntry,  function(){

            });

            function gotFileEntry(fileEntry) {


                var fileTransfer = new FileTransfer();
                var uri = encodeURI(url);

                fileTransfer.download(
                    uri,
                    fileEntry.toInternalURL(),
                    function(entry) {
                        //console.log("download complete: " + entry.fullPath);
                        Ext.Viewport.unmask();
                        //Ext.Msg.alert("succ",entry.fullPath);
                        cordova.plugins.fileOpener2.open(
                            fileEntry.toInternalURL(),
                            'application/vnd.android.package-archive'
                        );




                    },
                    function(error) {
                        Ext.Msg.alert("失败","程序下载失败"+error.code);
                        Ext.Viewport.unmask();
                        //Ext.Msg.alert("失败","程序下载失败");

                    },
                    false,
                    {
                        headers: {
                            "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
                        }
                    }
                );




            }

        }

    },

    orientationChange:function(){
        Ext.Msg.alert("changed");

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


    }

});