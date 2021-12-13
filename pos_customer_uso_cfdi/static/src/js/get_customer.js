odoo.define('pos_customer_uso_cfdi.get_customer', function(require) {
    "use strict";

    /*
    firts_name.onchange =function()  {
        console.log("ENTRA AL ONCHANGE")
      }

    
    document.getElementById("FirstNameInput").onchange = function() {
        console.log("ENTRA ONCHANGE")
        //var firts_name = document.getElementById("FirstNameInput").value
        //var second_name = document.getElementById("SecondNameInput").value
        //var last_name = document.getElementById("SurnameInput").value
        //var second_last_name = document.getElementById("SecondSurnameNameInput").value
        //fullname = firts_name + second_name + last_name + second_last_name
    };
    */

    var models = require('point_of_sale.models');
    models.load_fields("res.partner", ['first_name','second_name','last_name','second_last_name','name']);

    var _super_order = models.Order.prototype;
    models.Order = models.Order.extend({
        initialize: function() {
            _super_order.initialize.apply(this, arguments);
            if (this.pos.config.default_partner_id) {
            	this.set_client(this.pos.db.get_partner_by_id(this.pos.config.default_partner_id[0]));
            }
        },
        
    });
    /*
    var firts_name = document.getElementById("FirstNameInput");
    var second_name = document.getElementById("SecondNameInput");
    var last_name = document.getElementById("SurnameInput");
    var second_last_name = document.getElementById("SecondSurnameNameInput");
    var fullname = document.getElementsByName("name")[0];
    */
    

    
});