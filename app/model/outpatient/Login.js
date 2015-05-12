Ext.define('AffiliatedHospital.model.outpatient.Login', {
    extend: 'Ext.data.Model',
    requires: [],
    config: {
        fields: [
            {
                name: 'name',
                type: 'string'
            },


            {
                name: 'cardnum',
                type: 'string'
            }

           ],
        validations: [
            {
                field: 'name',
                type: 'presence',
                message: '请输入姓名!'
            },
            {
                field: 'cardnum',
                type: 'presence',
                message: '请输入卡号!'
            }]
    },
    //添加自定义验证
    validate: function (options) {
        var me = this;
        var errors = me.callParent(arguments);

        return errors;
    }
});