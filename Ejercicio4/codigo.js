"use strict";

//ARRAY
var valores = [true, 5, false, "hola", "adios", 2];

//Variables
var num1 = valores[1];
var num2 = valores[5];
var hola = valores[3];
var adios = valores[4];

//Codigos, preguntas.
console.log(hola.length);
console.log(adios.length);

const quienEsMayor = () => {
    //for (let i = 0; i < adios.length; i++) {
        if (hola.length > adios.length) {
            console.log("hola es mayor")
        } else {
            console.log("adios es mayor")
        }
    //}
}
quienEsMayor();

console.log(valores[0] && valores[2]);
console.log(valores[0] || valores[2]);

const suma = num1+num2;
console.log(suma);

const resta = num1-num2;
console.log(resta);

const multiplicacion = num1*num2;
console.log(multiplicacion)

const division = num1/num2;
console.log(division);