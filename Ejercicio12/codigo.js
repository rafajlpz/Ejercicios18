"use strict";

var maximo = 6;
var minimo = 1;

//=================Codigo Valido haciendo operacion resta y suma========================
// const dameNumero = () =>{
//     return Math.random()*(maximo-minimo)+minimo;
// }

const dameNumero = () => {
  return Math.floor(Math.random() * maximo) + minimo; // Math.floor devuelve el máximo entero menor o igual a un número. || Math.random retorna un punto flotante, un número pseudo-aleatorio dentro del rango [0, 1). Esto es, desde el 0 (Incluido) hasta el 1 pero sin incluirlo (excluido), el cual se puede escalar hasta el rango deseado.

  // console.log(dameNumero());
};
const lanzarDados = document.querySelector(".dados");

lanzarDados.onclick = () => {
  let resDado1 = dameNumero();
  let resDado2 = dameNumero();
  let suma = resDado2 + resDado1;
  let array = [];

  console.log(resDado1);
  console.log(resDado2);
  console.log("--------");
  console.log(suma);
  console.log("****************");

  for (let i = 0; i < 36000; i++) {
    // dameNumero();
    array.push(dameNumero()); //O .push(suma)
    console.log(array[i]);

    // for(let i=0;i<36000;i++){
    //     array.push(suma);
    //     console.log(array[i]);
    // }
  }
};

// dado2.onclick = () => {
//     dameNumero();
//     console.log(dameNumero());
// }
