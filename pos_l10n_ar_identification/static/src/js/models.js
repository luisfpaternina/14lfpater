odoo.define('pos_l10n_ar_identification.models', function (require) {
    "use strict";

    var models = require('point_of_sale.models');

    models.load_fields('res.partner', ['first_name',
                                          'last_name']);
    
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    console.log(models)
}); 
