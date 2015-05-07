/**
 * Created by jack on 14-11-18.
 * main Controller used by Terminal app
 */
Ext.define('AffiliatedHospital.controller.HealthWiki', {
    extend: 'Ext.app.Controller',

    config: {
        views: [
            'healthwiki.HealthWikiList'
        ],
        requires: [


        ],
        models: [
            'healthwiki.HealthWiki'
        ],
        stores: [
            'healthwiki.HealthWikis'

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
    onHealthWikiItemSelect:function(list, index, node, record){
        console.log(record);
        if(record.get("_id")==1){

        }
        /*var nav=this.getNav();
        var deptview=this.getPossibledeptlistview();
        var store=deptview.getStore();
        store.removeAll();
        Ext.each(record.get('depts'),function(item){
            store.add({name:item});
        })*/


    }



});