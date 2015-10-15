"use strict";


function Medida (valor, tipo) {
  this.valor_ = valor;
  this.tipo_ = tipo;
}

function Temperatura (valor, tipo) {
  Medida.call(this, valor, tipo);
}
//Temperatura hereda de Medida
Temperatura.prototype = new Medida();
//Getters
Medida.prototype.get_valor = function(){return this.valor_;}
Medida.prototype.get_tipo = function(){return this.tipo_;}
//Setters
Medida.prototype.set_valor = function(valor){this.valor_ = valor;}
Medida.prototype.set_tipo = function(tipo){this.tipo_ = tipo;}

//C a F
Temperatura.prototype.to_f = function(){
  return ((this.get_valor()*9)/5)+32;
}
//F a C
Temperatura.prototype.to_c = function(){
  return ((this.get_valor()-32)*5)/9;
}

// Muestra el resultado final
Temperatura.prototype.mostrar = function(){
  var result = this.get_valor() + " " + this.get_tipo();
  document.getElementById("converted").innerHTML = result;
}

function calculate(){
  var result = new Temperatura();
  var temp = inicial.value;

  if (temp){
    var exp_regular = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([fFcC])/;
    var valor = temp.match(exp_regular);

    if (valor){
      var t = new Temperatura();

      t.set_valor(parseFloat(valor[1]));
      t.set_tipo(valor[2]);

      if (t.get_tipo() == 'c' || t.get_tipo() == 'C'){
        result.set_valor(t.to_f());
        result.set_tipo("F");
      }
      else{
        result.set_valor(t.to_c());
        result.set_tipo("C");
      }
      result.mostrar();
    }
    else {
      converted.innerHTML = "ERROR! Prueba con algo como esto '-4.2C' ";
    }
  }
  else
    converted.innerHTML = "";
}
