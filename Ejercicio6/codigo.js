"use strict";

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var DNI = prompt("Introduce DNI sin letra");
//var letra = prompt("Introduce letra de DNI");

// if(isNaN(DNI)===false){ //es número
//     DNI = Number(DNI);
//     if (DNI < 0 || DNI > 99999999) {//calculamos letra
//     }else{

//     }

// }else{//No son números

// }

let regDni = /^[0-9]{1,8}$/;
if(regDni.test(DNI)){
    DNI = Number(DNI);
    alert(DNI)
}else{
    alert("Introduce un numero válido")
}

// if (DNI < 0 || DNI > 99999999) {
//     alert("El numero proporcionado no es valido");

// }
// if (letra !== "string") {
//     alert("Introduce una letra.");
// }
