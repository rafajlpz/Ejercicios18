"use strict";


class Persona {
    /**
     * 
     * @param {String} name Nombre completo de la persona
     * @param {Number} age Numero, edad.
     * @param {String} genero Genero de la persona, F|M
     */
    constructor(name = "Sin nombre", age = 0, genero = "F|M") {
        this.nombre = name;
        this.edad = age;
        this.genero = genero;
    }
    /**
     * 
     * @returns {string} - Las propiedades de la clase Persona
     */
    obtDetaller() {
        return `
            <ul class="campos">
                <li class="campo">
                    Nombre: ${this.nombre}
                </li>
                <li class="campo">
                    Edad: ${this.edad}
                </li>
                <li class="campo">
                    Genero: ${this.genero}
                </li>
            </ul>
            `;
    }
}

export {Persona};