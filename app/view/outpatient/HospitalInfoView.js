Ext.define('AffiliatedHospital.view.outpatient.HospitalInfoView', {
    extend: 'Ext.Container',
    //alias: 'widget.doctors',
    xtype:'hospitalinfoview',
    config: {

        fullscreen: true,

        title:'医院导航',
        layout:'vbox',
        items:[
            {
                flex:0.8,
                //itemId:'doctorinfo',
                //scrollable:true,
                layout:'hbox',
                items: [
                    {
                        flex:1,
                        html:'<div style="text-align: center;"><i class="fa fa-plus fa-3x"></i></div>'
                    },
                    {
                        flex:3 ,
                        html:'<div style="margin: 5px;"><strong>绍兴文理学院附属医院</strong> </div><div style="font-size:smaller;color:darkgrey;margin: 5px;"><strong> 医院地址：</strong>绍兴市平江路575号</div>'

                    }

                ]
            },
            {
                flex:1.2,
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        //height:20,
                        minHeight: '1em',
                        centered:true,
                        layout : 'fit',

                        items: [
                            {
                                xtype: 'label',
                                centered:true,
                                //itemId:'datetimetitle',
                                //align: 'center',
                                html: '<div style="font-size: small; font-weight: bold;text-align: left">医院交通</div>'
                            }
                        ]
                    },{

                        html:'<div style="font-size:smaller;color:#122D3A;margin: 5px;">医院地址：绍兴市平江路575<br/>号公交线路：11、22、36、88路直达，35路到达交通事故处理中心路口</div>'
                    }

                ]
                //html:'Second Panel'/*,

            }
            ,
            {
                flex:1,
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        //height:20,
                        minHeight: '1em',
                        centered:true,
                        layout : 'fit',

                        items: [
                            {
                                xtype: 'label',
                                centered:true,
                                //itemId:'datetimetitle',
                                //align: 'center',
                                html: '<div style="font-size: small; font-weight: bold;text-align: left">医院电话</div>'
                            }
                        ]
                    },{

                        html:'<div style="font-size:smaller;color:#122D3A;margin: 5px;">急诊电话：<a href="#">0575-88619919</a><br/>问询电话：<a href="#">0575-88619828</a>  <a href="#">0575-88619999</a></div>'
                    }

                ]
                //html:'Second Panel'/*,

            }
            ,
            {
                flex:3,
                scrollable:true,
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        //height:20,
                        minHeight: '1em',
                        centered:true,
                        layout : 'fit',

                        items: [
                            {
                                xtype: 'label',
                                centered:true,
                                //itemId:'datetimetitle',
                                //align: 'center',
                                html: '<div style="font-size: small; font-weight: bold;text-align: left">医院简介</div>'
                            }
                        ]
                    },{

                        html:'<div style="font-size:smaller;color:#122D3A;margin: 5px;"> <strong>绍兴文理学院附属医院</strong>是一所经省卫生厅批准设立的，集医疗、教学、科研、急救、预防、保健于一体的综合性医院，属政府办非营利性医院，为绍兴市、县医保定点单位和绍兴市交通事故救护中心。<br />'+
                        '医院地处风景秀丽、环境优雅的会稽山麓&mdash;&mdash;绍兴城东经济开发区。现有建筑面积近40000㎡，其中4层门诊大楼12000㎡，4层医技大楼4400㎡，12层住院大楼16000㎡。<br />'+
'医院内设中央空调系统、中心供氧系统、中心吸引系统、中心智能化信息管理系统及净化手术中心、闭路电视、虚拟电话网络系统等。现代化的建筑设计，花园式和宾馆化的结构布局，功能齐全的配套设施，为病人创造了一个整洁安静、舒适安全的诊疗环境。<br /></div>'
                    }

                ]
                //html:'Second Panel'/*,

            }

        ]

    }
});