"use strict";

var maximo = 6;
var minimo = 1;

//=================Codigo Valido haciendo operacion resta y suma========================
// const dameNumero = () =>{
//     return Math.random()*(maximo-minimo)+minimo;
// }


const dameNumero = () => {
    return Math.floor(Math.random() * maximo) + minimo;
}

// console.log(dameNumero());

const lanzarDados = document.querySelector(".dados");

lanzarDados.onclick = () => {

    let resDado1 = dameNumero();
    let resDado2 = dameNumero();
    let suma = resDado2 + resDado1;
    let array = [];

    console.log(resDado1);
    console.log(resDado2);
    console.log("--------")
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
}

// dado2.onclick = () => {
//     dameNumero();
//     console.log(dameNumero());
// }