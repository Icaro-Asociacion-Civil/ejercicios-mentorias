const iguales = require('./functiones/1.iguales');
const mayor_que_90 = require('./functiones/2.mayor-que-90');
const par_o_impar = require('./functiones/3.par-o-impar');
const deficiente = require('./functiones/4.deficiente');

console.log(iguales(3, 5));
console.log('======================');
console.log(iguales(123.456, 123.456));
console.log('======================');
console.log(mayor_que_90(89.99999));
console.log('======================');
console.log(mayor_que_90(90));
console.log('======================');
console.log(mayor_que_90(90.0000000001));
console.log('======================');
console.log(par_o_impar(89));
console.log('======================');
console.log(par_o_impar(6));
console.log('======================');
console.log(deficiente(36));
console.log('======================');
console.log(deficiente(1));
console.log('======================');
console.log(deficiente(8));