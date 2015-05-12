Ext.define('AffiliatedHospital.model.outpatient.AppointmentDoctor', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            '_id',
            'name',
            'time',
            'ysdm',
            'ksdm',
            'photo',
            'zblb',
            'num',
            'info'
        ]
    }
});
