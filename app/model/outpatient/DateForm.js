Ext.define('AffiliatedHospital.model.outpatient.DateForm', {
    extend: 'Ext.data.Model',
    requires: [],
    config: {
        fields: [
            {
                name: 'yylxdh',
                type: 'string'
            },

            {
                name: 'yylxrm',
                type: 'string'
            }
           ],
        validations: [
            {
                field: 'yylxrm',
                type: 'presence',
                message: '请输入姓名!'
            },
            {
                field: 'yylxdh',
                type: 'presence',
                message: '请输入电话号码!'
            }]
    },
    //添加自定义验证
    validate: function (options) {
        var me = this;
        var errors = me.callParent(arguments);

        return errors;
    }
});