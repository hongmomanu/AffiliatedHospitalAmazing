/**
 * Created by jack on 14-11-18.
 * main Controller used by Terminal app
 */
Ext.define('AffiliatedHospital.controller.Outpatient', {
    extend: 'Ext.app.Controller',

    config: {
        views: [
            'outpatient.ReserveView',
            'outpatient.ReserveViewLayout'
        ],
        requires: [
            'Ext.ux.slidenavigation.View'
        ],
        models: [




        ],
        stores: [




        ],
        control: {
            nav: {
                initialize: 'initRender'
            }

        },
        refs: {

            nav: 'main'


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


    }

});