Ext.define('AffiliatedHospital.view.wisdomcare.PossibleIllList', {
    extend: 'Ext.List',
    //alias: 'widget.doctors',
    xtype:'possibleilllist',
    initialize : function() {

        var me = this;
        me.setStore(Ext.create('AffiliatedHospital.store.wisdomcare.PossibleIlls'));

        me.callParent(arguments);

    },
    //cls: 'x-contacts',
    config: {
        title: 'ill',
        //cls: 'x-contacts',
        variableHeights: true,
        itemId:'possibleilllist',
        //refreshHeightOnUpdate :false,
        scrollToTopOnRefresh :true,
        //grouped:true,
        //indexBar:true,
        store: 'PossibleIlls',

        listeners: {
            painted: function(){

                this.fireEvent('viewshow', this);


            }
        },

        items: [
            {
                xtype: 'toolbar',
                docked: 'top',

                items: [
                    {
                        xtype: 'searchfield',
                        width:120,
                        placeHolder: '输入症状...',
                        listeners: {
                            scope: this,
                            clearicontap: function(){
                                var mainview=Ext.Viewport.down('main');

                                mainview.down('possibleilllist').getStore().clearFilter();

                            },
                            keyup: function(field){
                                //get the store and the value of the field
                                var mainview=Ext.Viewport.down('main');
                                var value = field.getValue(),
                                    store = mainview.down('possibleilllist').getStore();

                                //first clear any current filters on the store. If there is a new value, then suppress the refresh event
                                store.clearFilter(!!value);

                                //check if a value is set first, as if it isnt we dont have to do anything
                                if (value) {
                                    //the user could have entered spaces, so we must split them so we can loop through them all
                                    var searches = value.split(','),
                                        regexps = [],
                                        i, regex;

                                    //loop them all
                                    for (i = 0; i < searches.length; i++) {
                                        //if it is nothing, continue
                                        if (!searches[i]) continue;

                                        regex = searches[i].trim();
                                        regex = regex.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");

                                        //if found, create a new regular expression which is case insenstive
                                        regexps.push(new RegExp(regex.trim(), 'i'));
                                    }

                                    //now filter the store by passing a method
                                    //the passed method will be called for each record in the store
                                    store.filter(function(record) {
                                        var matched = [];

                                        //loop through each of the regular expressions
                                        for (i = 0; i < regexps.length; i++) {
                                            var search = regexps[i],
                                                didMatch = search.test(record.get('name') );

                                            //if it matched the first or last name, push it into the matches array
                                            matched.push(didMatch);
                                        }

                                        return (regexps.length && matched.indexOf(true) !== -1);
                                    });
                                }
                            }
                        }
                    }/*,
                    { xtype: 'spacer' }*/
                ]
            }

        ],

        itemTpl: [
            '<div class="headshot">',
            '{name}',
            '</div>'
        ].join('')
    }
});