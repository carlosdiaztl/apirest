let validadoresModelo = {
//Validación que permite solo números
soloNumeros: function (valor) {
    if (valor != "") return /(^[0-9]*$)/.test(valor);
    else return true;
  },
  //Valida que solo permita texto
  soloTexto: function (valor) {
    return /^[A-Za-z\á\é\í\ó\ú\ü\Á\É\Í\Ó\Ú\Ü\'\s\xF1\xD1]+$/.test(valor);
  },
}

module.exports = validadoresModelo; 