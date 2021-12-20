"use strict";

import {Persona} from "./Persona.js";

export class Estudiante extends Persona {
    constructor(nombre,edad,genero,course="Informática"){
        super(nombre,edad,genero);
        this.curso = course;
        this.grupo = "C";
    }
}

// registar(course,group){
//     this.curso = course;
//     this.grupo = group;
// }