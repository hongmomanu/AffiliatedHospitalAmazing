/**
 * Created by jack on 14-11-18.
 * main Controller used by Terminal app
 */
Ext.define('AffiliatedHospital.controller.Wisdomcare', {
    extend: 'Ext.app.Controller',

    config: {
        views: [
            'wisdomcare.PossibleIllList',
            'wisdomcare.PossibleIllViewLayout'
        ],
        requires: [


        ],
        models: [
            'wisdomcare.PossibleIll'
        ],
        stores: [
            'wisdomcare.PossibleIlls'

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


    }



});