/**
 * Created by jack on 14-11-18.
 * main Controller used by Terminal app
 */
Ext.define('AffiliatedHospital.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        views: [
            'Main'
        ],
        models: [




        ],
        stores: [




        ],
        control: {
            nav: {
                initialize: 'initRender'
            },
            installpatientbtn:{
                tap:'installpatient'
            },
            installdoctorbtn:{
                tap:'installdoctor'
            }

        },
        refs: {

            nav: '#main',
            homepage:'#main #homepage',
            installpatientbtn:'#main #installpatient',
            installdoctorbtn:'#main #installdoctor'
        }
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
        alert(1);
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