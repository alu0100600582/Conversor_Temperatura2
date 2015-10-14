"use strict";

function Medida (valor, exp, tipo) {
  var valor_ = valor;
  var exp_ = exp;
  var tipo_ = tipo;

  this.get_valor = function() {return valor_;}
	this.get_exp = function() {return exp_;}
  this.get_tipo = function() {return tipo_;}

  this.set_valor = function(valor) {valor_ = valor;}
  this.set_exp = function(exp) {exp_ = exp;}
  this.set_tipo = function(tipo) {tipo_ = tipo;}
}


function Temperatura (valor, exp, tipo) {
  Medida.call(this, valor, exp, tipo);
}

//Herencia
Temperatura.prototype = new Medida();



function calculate(){
  var result;
  var ini_temp = document.getElementsByName("ini_temp")[0].value;
  var exp_regular = /(^[-+]?\d+(?:\.\d*)?)(?:[eE]?([-+]?\d+))?\s*([fFcC])/;

  // comprobamos que el valor introducido haga match con la expresion regular
  var valor = ini_temp.match(exp_regular);

  var temp = new Temperatura(valor[1],valor[2],valor[3]);
  if(temp != null){

    temp.set_valor(parseFloat(temp.get_valor()));

    if (temp.get_exp() !== undefined){
      temp.set_exp(parseInt(temp.get_exp()));

      if (temp.get_exp()<0){
        temp.set_exp(temp.get_exp()*-1);
        var i = 1, div = 10;

        while(i < temp.get_exp()){
          div = div * 10;
          i++;
        }

        if(div !== 0) {
          temp.set_valor(temp.get_valor()/div);
          alert(temp.get_valor());
        }


      } else {
        var i = 1, div = 10;

        while(i < temp.get_exp()){
          div = div * 10;
          i++;
        }
        if(div !== 0) temp.set_valor(temp.get_valor()*div);
      }
    }

    if(temp.get_tipo() === 'c' || temp.get_tipo() === 'C'){
      // C a F
      var temp_final = new Temperatura(((temp.get_valor()*9)/5)+32,1,"F");
      var result = temp_final.get_valor() + " Farenheit ";
    } else {
      // F a C
      var temp_final = new Temperatura(((temp.get_valor()-32)*5)/9,1,"C");
      var result = temp_final.get_valor() + " Celsius " ;
    }

    converted.innerHTML = result;

  } else {
    converted.innerHTML = "ERROR! Prueba con algo como esto '-4.2C' ";
  }
}
