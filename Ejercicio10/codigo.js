"use strict";

// var cadena = "La ruta nos aporto otro paso natural";

const esPalindromo = (cadena) => {
    const nuevaCadena = cadena.replace(/[\W_]/g, "").toLowerCase();
    // --> El método replace() devuelve una nueva cadena con algunas o todas las coincidencias de un patrón, siendo cada una de estas coincidencias reemplazadas por remplazo. El patrón puede ser una cadena o una RegExp, y el reemplazo puede ser una cadena o una función que será llamada para cada coincidencia. Si el patrón es una cadena, sólo la primera coincidencia será reemplazada. La cadena original permanecerá inalterada.

    const cadenaInvertida = nuevaCadena.split("").reverse().join("");

    return nuevaCadena == cadenaInvertida ? "es palindromo" : "no es palindromo";
}

console.log(esPalindromo("hola que tal"));