Ext.define('AffiliatedHospital.view.healthwiki.AssayDetail', {
    extend: 'Ext.tab.Panel',
    //alias: 'widget.doctors',
    xtype:'assaydetail',

    config: {

        //fullscreen: true,

        height:'100%',
        width:'100%',

        padding:10,

        scrollable:true,

        fullscreen: true,


        title:'IllDetail',

        //tabBarPosition: 'top',
        tabBar: {

            //scrollable:'horizontal',
            //scrollBar:'true',
            docked:'top',
            layout: {
                pack: 'center'
            }

        },

        defaults: {
            styleHtmlContent: true
        },

        items: [
            {
                title: '项目介绍',
                //iconCls: 'home',
                html: 'Home Screen'
            },
            {
                title: '正常值参考',
                //iconCls: 'user',
                html: 'Contact Screen'
            },
            {
                title: '临床意义',
                //iconCls: 'user',
                html: 'Contact Screen'

            }
        ]



    }
});