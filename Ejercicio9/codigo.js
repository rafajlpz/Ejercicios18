"use strict";

// let texto = "Cadena de Texto Prueba";


// const regmayusMinus = {
    
//     "mayus": /^[A-Z]*$/,
//     "minus": /^[a-z]*$/,
// }

// const cadenaTexto = (texto) => {
//     if (regmayusMinus.mayus.test(texto)) {
//         console.log("La cadena contiene mayusculas");
//     } else { 
//         console.log("La cadena no contiene mayusculas.");
//     }
// }

// cadenaTexto();

let texto = "asfdsdf asdfasfsa "


const cadenaTexto = () =>{
    if(texto == texto.toUpperCase()){
        console.log("La cadena tiene solo MAYUSCULAS")
    }else{
        console.log("La cadena tiene solo MINUSCULAS")
    }
}

cadenaTexto();