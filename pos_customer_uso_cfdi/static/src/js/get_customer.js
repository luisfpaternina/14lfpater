odoo.define('pos_customer_uso_cfdi.get_customer', function(require) {
    "use strict";

    var models = require('point_of_sale.models');
    models.load_fields("res.partner", ['first_name','second_name','last_name','second_last_name','fullname']);

    surname = document.getElementById("SurnameInput")
    second_surname = document.getElementById("SecondSurnameNameInput")

    console.log("ENTRADA JS")

    var _super_order = models.Order.prototype;
    models.Order = models.Order.extend({
        initialize: function() {
            _super_order.initialize.apply(this, arguments);
            if (this.pos.config.default_partner_id) {
            	this.set_client(this.pos.db.get_partner_by_id(this.pos.config.default_partner_id[0]));
            }
        },
        
    });
});