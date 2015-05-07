Ext.define('AffiliatedHospital.view.wisdomcare.PossibleIllViewLayout', {
    extend: 'Ext.Container',

    requires: [
        'Ext.Container',
        'Ext.MessageBox',
        'Ext.Panel',
        'Ext.Toolbar',
        'Ext.event.publisher.Dom'
    ],

    config: {
        fullscreen: true,

        title:'智能分诊',
        layout:'hbox',
        items:[
            {
                flex:1,
                xtype:'possibleilllist'/*,
                style: 'background-color: #5E99CC;'*/
            },
            {
                flex:1,
                //html: 'Second Panel'
                xtype: 'possibledeptlist'
            }

        ]




    }
});