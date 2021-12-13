odoo.define('pos_customer_uso_cfdi.partner_form', function(require) {
    "use strict";

    $(document).ready(function(){
        document.getElementById("FirstNameInput").onchange = function() {concatenate()};
        document.getElementById("SecondNameInput").onchange = function() {concatenate()};
        document.getElementById("SurnameInput").onchange = function() {concatenate()};
        document.getElementById("SecondSurnameNameInput").onchange = function() {concatenate()};
        
        var CompanyType = document.getElementById("TypeCompany")
        //document.getElementsByName("name")[0].readOnly = true;

        CompanyType.onchange = function(){
            if(CompanyType.value == 'person'){
                var firts_name = document.getElementById("DivFirstNameInput").style.display = '';
                var second_name = document.getElementById("DivSecondNameInput").style.display = '';
                var last_name = document.getElementById("DivSurnameInput").style.display = '';
                var second_last_name = document.getElementById("DivSecondSurnameNameInput").style.display = '';
                document.getElementsByName("name")[0].value = '';
            }
            else{
                var firts_name = document.getElementById("FirstNameInput").value = '';
                var second_name = document.getElementById("SecondNameInput").value = '';
                var last_name = document.getElementById("SurnameInput").value = '';
                var second_last_name = document.getElementById("SecondSurnameNameInput").value = '';

                var firts_name = document.getElementById("DivFirstNameInput").style.display = 'none';
                var second_name = document.getElementById("DivSecondNameInput").style.display = 'none';
                var last_name = document.getElementById("DivSurnameInput").style.display = 'none';
                var second_last_name = document.getElementById("DivSecondSurnameNameInput").style.display = 'none';
                document.getElementsByName("name")[0].readOnly = false;
            }
        }

        function concatenate() {
        var firts_name = document.getElementById("FirstNameInput").value;
        var second_name = document.getElementById("SecondNameInput").value;
        var last_name = document.getElementById("SurnameInput").value;
        var second_last_name = document.getElementById("SecondSurnameNameInput").value;

        document.getElementsByName("name")[0].value = firts_name +' '+ second_name + ' '+ last_name +' '+ second_last_name;
        }
      });

    
});