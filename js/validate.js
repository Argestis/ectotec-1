function validateForm() {
    var nombre    = document.forms["myForm"]["nombre"].value;
    var email     = document.forms["myForm"]["email"].value;
    var telefono  = document.forms["myForm"]["telefono"].value;
    var fecha     = document.forms["myForm"]["fecha"].value;
    var temp      = document.forms["myForm"]["temp"].value;
    var errors    = [];


    document.getElementById('error-msg').innerHTML = "";

    if (nombre == "") {
      document.forms["myForm"]["nombre"].classList.add("no-valid");
      errors.push('El campo nombre es requerido.');
    }
    else{
      document.forms["myForm"]["nombre"].classList.remove("no-valid");
    }

    function validateEmail(email)
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    if (email == "") {
      document.forms["myForm"]["email"].classList.add("no-valid");
      errors.push('El campo de correo electronico es requerido.');
    }
    else if(validateEmail(email) ==  false){
      document.forms["myForm"]["email"].classList.add("no-valid");
      errors.push('El campo de correo electronico contiene una dirección no valida.');
    }
    else{
      document.forms["myForm"]["email"].classList.remove("no-valid");
    }

    function validatePhone(telefono)
    {
        var re = /^[1-9+#()][0-9+#()]*$/;
        return re.test(telefono);
    }

    if (telefono == "") {
      document.forms["myForm"]["telefono"].classList.add("no-valid");
      errors.push('El campo de telefono electronico es requerido.');
    }
    else if(validatePhone(telefono) == false){
      document.forms["myForm"]["telefono"].classList.add("no-valid");
      errors.push('El campo de telefono contiene un formato incorrecto.');
    }
    else{
      document.forms["myForm"]["telefono"].classList.remove("no-valid");
    }

    if (fecha == "") {
      document.forms["myForm"]["fecha"].classList.add("no-valid");
      errors.push('El campo de fecha es requerido.');
    }
    else{
      document.forms["myForm"]["forLocation"].classList.remove("locacion-requerida");
    }
    if (temp == "") {
      document.forms["myForm"]["forLocation"].classList.add("locacion-requerida");
      errors.push('La locación es requerida.');
    }
    else{
      document.forms["myForm"]["temp"].classList.remove("no-valid");
    }

    if (errors.length > 0){
      for (i = 0; i < errors.length; i++) {
          document.getElementById('error-msg').innerHTML += "<li>" + errors[i] + "</li><br>";
      };
    }
    else {
            document.getElementById('form-wrap').classList.add("hide");
            document.getElementById('success').classList.remove("hide");

            var app = angular.module('mymsg', ['gm']);

            app.controller('mymsgCtrl', function($scope) {
              $scope.nombre    = document.forms["myForm"]["nombre"].value;
              $scope.correo    = document.forms["myForm"]["email"].value;
              $scope.direccion = document.forms["myForm"]["temp"].value;
              $scope.fecha     = document.forms["myForm"]["fecha"].value;
            });
            angular.element(document).ready(function() {
                angular.bootstrap(document.getElementById('success'), ['mymsg']);
            });
    }

}
