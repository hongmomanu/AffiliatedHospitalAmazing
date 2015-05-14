Ext.define('AffiliatedHospital.view.outpatient.ReserveDoctorTimes', {
    extend: 'Ext.DataView',
    xtype:'reservedoctortimes',
    requires: [

    ],

    config: {
        store: 'ReserveDoctorTimes',
        itemId:'reservedoctortimes',
        emptyText: '<div>无相关内容</div>',
        cls:'columnlist2',
        itemTpl: [
            '<div class="item" style="vertical-align: middle;background-color: lightskyblue;margin: 5px;text-align: center" >',
            '<div style="padding:4px;vertical-align: middle;text-align: center;display: inline-block;width: 30px;height: 30px;border: 1px solid red;border-radius: 15px;background-color: dodgerblue;">{num}</div>',
            '<div class="description" style="padding:4px;display: inline-block;text-align: center;vertical-align: middle;">{time}</div>',
            '</div>'
        ].join("")
    }
});