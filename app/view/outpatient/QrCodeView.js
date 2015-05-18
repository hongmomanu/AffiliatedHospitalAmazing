Ext.define('AffiliatedHospital.view.outpatient.QrCodeView', {
    extend: 'Ext.Container',
    //alias: 'widget.doctors',
    xtype:'qrcodeview',

    //cls: 'x-contacts',
    config: {
        title: '二维码',
        fullscreen: true,
        scrollable:true,

        html:'<div style="text-align: center;padding-top: 30px;" id="biggercode"></div>'
        //cls: 'x-contacts',

    }
});