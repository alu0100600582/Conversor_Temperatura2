"use strict";function Medida(t,e){this.valor_=t,this.tipo_=e}function Temperatura(t,e){Medida.call(this,t,e)}function calculate(){var t=new Temperatura,e=inicial.value;if(e){var r=/^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([fFcC])/,o=e.match(r);if(o){var i=new Temperatura;i.set_valor(parseFloat(o[1])),i.set_tipo(o[2]),"c"==i.get_tipo()||"C"==i.get_tipo()?(t.set_valor(i.convertirF()),t.set_tipo("F")):(t.set_valor(i.convertirC()),t.set_tipo("C"));var a=t.mostrar();converted.innerHTML=a}else converted.innerHTML="ERROR! Prueba con algo como esto '-4.2C' "}else converted.innerHTML=""}Temperatura.prototype=new Medida,Medida.prototype.get_valor=function(){return this.valor_},Medida.prototype.get_tipo=function(){return this.tipo_},Medida.prototype.set_valor=function(t){this.valor_=t},Medida.prototype.set_tipo=function(t){this.tipo_=t},Temperatura.prototype.convertirF=function(){return 9*this.get_valor()/5+32},Temperatura.prototype.convertirC=function(){return 5*(this.get_valor()-32)/9},Temperatura.prototype.mostrar=function(){var t=this.get_valor()+" "+this.get_tipo();return t};