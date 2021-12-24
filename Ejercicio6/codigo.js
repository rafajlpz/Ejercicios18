"use strict";

// const DNI = prompt("Introduce DNI sin letra");
//var letra = prompt("Introduce letra de DNI");

// if(isNaN(DNI)===false){ //es número
//     DNI = Number(DNI);
//     if (DNI < 0 || DNI > 99999999) {//calculamos letra
//     }else{

//     }

// }else{//No son números

// }



// let regDni = /^[0-9]{8}$/;
// if(regDni.test(DNI)){
//     DNI = Number(DNI);
//     alert(DNI)
// }else{
//     alert("Introduce un numero válido")
// }


const calcular = (param) => {
    if (isNaN(param)) {
        alert("No es un numero")
        calcular(param);
    } else {
        if (param < 0 || param > 99999999) {
            return "";
        } else {
            const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
            const resto = param % 23;
            const letra = letras[resto];
            return letra;
        }
    }

}

let quieresSerguir = true;
    while(quieresSerguir){
        const n = prompt('Introduce numero para obtener la letra.');
        const letra = calcular(n);
        alert(letra);
        quieresSerguir=confirm("Quieres seguir haciendo calculos?");
    }



//var regLetra = prompt("Introduce letra");


//typeof(redLetra);

// if (DNI < 0 || DNI > 99999999) {
//     alert("El numero proporcionado no es valido");

// }
// if (letra !== "string") {
//     alert("Introduce una letra.");
// }
