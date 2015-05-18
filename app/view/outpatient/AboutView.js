Ext.define('AffiliatedHospital.view.outpatient.AboutView', {
    extend: 'Ext.Container',
    //alias: 'widget.doctors',
    xtype:'aboutview',

    //cls: 'x-contacts',
    config: {

        title:'关于我们',
        style:{
            'padding':'1px'
        },
        scrollable:true,

        layout: 'fit',

        fullscreen: true,

        html:'<div style="font-size:smaller;color:darkgrey;margin: 5px;">绍兴文理学院附属医院门户网站是为老百姓了解邵逸夫医院所提供的一个窗口。同时也是为选择来我院就诊的患者和家属提供医疗服务信息的一个途径。在这个门户网站您就能了解我院特色、专家信息、地理位置、交通路线；在您到达我院前还能充分了解挂号、就诊、检查等信息以及就诊检查的注意事项和准备工作；了解住院手续,病房规章制度等内容。 平时也能从网上获得健康知识、体检信息。希望我们的网站信息对您有所帮助。</div>'


    }
});