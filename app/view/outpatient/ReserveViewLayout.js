Ext.define('AffiliatedHospital.view.outpatient.ReserveViewLayout', {
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
        title:'手记预约',
        layout:'hbox',
        items:[
            {
             flex:2,
             html: 'First Panel',
             style: 'background-color: #5E99CC;'
            },
            {
                flex:5,
                html: 'Second Panel',
            }

        ]




    }
});