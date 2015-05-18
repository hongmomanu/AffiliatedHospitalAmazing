Ext.define('AffiliatedHospital.view.menu.MainMenu', {
    extend: 'Ext.ux.ActionOverFlowMenuButton',
    xtype:'mainmenu',
    alias: 'widget.mainmenus',

    requires: [

    ],

    config: {

        docked: 'right',
        align:'right',
        iconCls:'home',
        //border:0,
        menuItems: [

            {
                text: '用户登录',
                iconCls: 'user',
                hidden:Globle_Variable.user,
                itemId:'loginmenu',
                scope: this,
                handler: function() {

                    var mainview=Ext.Viewport.down('main');
                    mainview.fireEvent('loginmenu', mainview);



                }
            },
            {
                text: '用户退出',
                itemId:'logoutmenu',
                iconCls: 'user',
                hidden:!Globle_Variable.user,
                scope: this,
                handler: function() {
                    var mainview=Ext.Viewport.down('main');
                    mainview.fireEvent('logoutmenu', mainview);
                }
            },

            {
                xtype: 'button',
                ui: 'plain',
                text: '______',
                disabled: true,
                cls: 'separator'
            },{
                text: '返回首页',
                iconCls: 'home',
                scope: this,
                handler: function(item) {



                    var mainview=Ext.Viewport.down('main');
                    mainview.fireEvent('returnhomemenu', mainview);

                }
            }, {
                text: '软件分享',
                iconCls: 'organize',
                scope: this,
                handler: function() {
                    var mainview=Ext.Viewport.down('main');
                    mainview.fireEvent('showqrcode', mainview);
                    //Ext.Viewport.hideMenu('right');
                    /*Ext.getCmp('searchBar').hide();
                     this.container.setActiveItem(1);
                     this.getBBMStore().clearFilter();*/
                }
            },
            {
                text: '常用软件',
                iconCls: 'download',
                scope: this,
                handler: function() {
                    Ext.Viewport.hideMenu('right');
                    /* Ext.getCmp('searchBar').hide();
                     this.container.setActiveItem(1);
                     this.getBBMStore().clearFilter();*/
                }
            },
            {
                text: '关于我们',
                iconCls: 'info',
                scope: this,
                handler: function() {
                    var mainview=Ext.Viewport.down('main');
                    mainview.fireEvent('showabout', mainview);
                    //Ext.Viewport.hideMenu('right');
                    /*Ext.getCmp('searchBar').hide();
                     this.container.setActiveItem(1);
                     this.getBBMStore().clearFilter();*/
                }
            }]

    }
});