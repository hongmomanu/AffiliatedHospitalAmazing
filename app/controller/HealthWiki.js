/**
 * Created by jack on 14-11-18.
 * main Controller used by Terminal app
 */
Ext.define('AffiliatedHospital.controller.HealthWiki', {
    extend: 'Ext.app.Controller',

    config: {
        views: [
            'healthwiki.HealthWikiList',
            'healthwiki.IllDetail'
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
    onPssibleillSelect:function(list,index,node,record){
        if(!this.illdetailview){
            this.illdetailview=Ext.create('AffiliatedHospital.view.healthwiki.IllDetail');
        }
        this.illdetailview.setTitle(record.get('name'));
        this.getNav().push(this.illdetailview);
        var about=this.illdetailview.down('#about');
        var detail=this.illdetailview.down('#detail');
        var depts=this.illdetailview.down('#depts');
        depts.removeAll();
        Ext.each(record.get('depts'),function(item){
            depts.add( {
                xtype: 'button',
                text: item,
                badgeText: '预约'
            });
        });

        detail.setActiveItem(0);
        var successFunc = function (response, action) {
            var res=JSON.parse(response.responseText);
            about.setHtml('<div style="font-size:smaller;color:darkgrey;margin: 5px;">'+res.about+'</div>');
            detail.getInnerAt(0).setHtml('<div style="font-size:smaller;color: dimgray;">'+res.illreasion+'</div>');
            detail.getInnerAt(1).setHtml('<div style="font-size:smaller;color: dimgray;">'+res.illdescription+'</div>');
            detail.getInnerAt(2).setHtml('<div style="font-size:smaller;color: dimgray;">'+res.checking+'</div>');
            detail.getInnerAt(3).setHtml('<div style="font-size:smaller;color: dimgray;">'+res.diagnosis+'</div>');
            detail.getInnerAt(4).setHtml('<div style="font-size:smaller;color: dimgray;">'+res.prevention+'</div>');
            detail.getInnerAt(5).setHtml('<div style="font-size:smaller;color: dimgray;">'+res.complication+'</div>');
            detail.getInnerAt(6).setHtml('<div style="font-size:smaller;color: dimgray;">'+res.treatment+'</div>');
        };
        var failFunc = function (response, action) {
            Ext.Msg.alert('获取数据失败', '服务器连接异常，请稍后再试', Ext.emptyFn);

        };
        var url = "hospital/getilldetailbyid";
        var params = {
            illid:record.get("_id")
        };
        CommonUtil.ajaxSend(params, url, successFunc, failFunc, 'POST');

    },
    onHealthWikiItemSelect:function(list, index, node, record){
        if(record.get("_id")==1){
            if(!this.possibleillview){
                this.possibleillview=Ext.create('AffiliatedHospital.view.wisdomcare.PossibleIllList',
                    {
                        itemId:'possibleilllist1',
                        onItemDisclosure : {//若配置该项，list每一项的右侧都会出现一个小图标。其他功能请查看api
                            handler : function(record, btn, index) {
                                //alert('点击小按钮触发的事件');
                                //console.log(record)
                                this.select(index);
                            }
                        }
                    });
                this.possibleillview.on({
                    itemtap: {fn: this.onPssibleillSelect, scope: this, single: false}
                });

            }
            this.possibleillview.setTitle(record.get('name'));
            this.getNav().push(this.possibleillview);


           // console.log("oo");
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