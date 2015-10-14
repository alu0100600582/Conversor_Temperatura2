"use strict"; 

function Medida (valor, tipo) {
  this.valor_ = valor;
  this.tipo_ = tipo;
}

function Temperatura (valor, tipo) {
  this.base = Medida;
  this.base(valor, tipo);
}

var temp = new Temperatura(4,"F");

alert("Valor: " + temp.valor_ + "\nTipo: " + temp.tipo_);























/*function calculate() {
  var result;
  var temp = original.value;
  var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;


  var m = temp.match(regexp);

  if (m) {
    var num = m[1];
    var type = m[2];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      result = result.toFixed(1)+" Farenheit"
    }
    else {
      result = (num - 32)*5/9;
      result = result.toFixed(1)+" Celsius"
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR! Prueba con algo como esto '-4.2C' ";
  }
}
*/
