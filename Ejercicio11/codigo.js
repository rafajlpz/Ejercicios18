"use strict";

import { Estudiante } from "./Estudiante.js";
//Para crear las variables tiene que tener this.
import{Persona} from "./Persona.js"

const output = document.querySelector(".output");



let p1 = new Persona("Rafa", 27, "h");
let p2 = new Persona("David", 20, "h");
let p3 = new Persona("Paula", 18, "f");
let p4 = new Persona("Pepito Pérez", 24, "h");
let personas = [
    new Persona("Paco Pepe", 28, "h"),
    new Persona("Pikachu", 19, "h"),
    new Estudiante("Estudiante", 20, "f", "Matemáticas"),
]

console.log(p1, p2, p3, personas);



console.log(personas[1].obtDetaller());

for (let i = 0; i < personas.length; i++) {
    output.innerHTML += personas[i].obtDetaller();
}