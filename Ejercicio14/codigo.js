"use strict";
// Devuelve un nodeLista pero puedo iterar como un array.
const enlaces = document.querySelectorAll("a");
// Numero de enlaces.
console.log(`Numero de enlaces: ${enlaces.length}`);
// El penultimo nodo.
const penultimo = enlaces.length - 2;

let contador = 0;
let expEnlace = /^http[s]?:\/\/prueba[/]?$/;

for (let i = 0; i < enlaces.length; i++) {
  //   if (enlaces[i].getAttribute("href") === "http://prueba"|| enlaces[i].getAttribute("href")==="http://prueba")
  //    contador += 1; //Seria lo mismo que contador++
  if (expEnlace.test(enlaces[i].getAttribute("href"))) contador += 1;
}

console.log(`Numero de enlaces "http://prueba: ${contador}`);

// Obtener el tercer parrafo
const parrafos = document.querySelectorAll("p");
// const parrafo3 = document.querySelector("body p + p + p");

const parrafo3 = parrafos[2];
// for (let i = 0; i < parrafo3.childNodes.length; i++) {
//     console.log(parrafo3.childNodes[0])
// }
const hijos = parrafo3.childNodes;
let contador2 = 0;
hijos.forEach(
    elemento=> {
      if(elemento.nodeName==="A"){
    contador2++;
  }
});
console.log(`Numero de enlaces del tercer parrafo: ${contador2}`);
