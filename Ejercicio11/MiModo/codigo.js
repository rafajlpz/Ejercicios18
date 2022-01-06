"use strict";

class Persona{
    constructor(nombre='Sin nombre', edad =0, genero ='F|M'){

    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    }
    obtDetalles() {
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
class Estudiante extends Persona{
    constructor(curso, grupo){
        super(nombre, edad, genero);

        this.curso = curso;
        this.grupo = grupo;
    }
    registrar(){
        
    }
}
class Profesor extends Persona{
    constructor(asignatura, nivel){
        super(nombre, edad, genero)

        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar(){
        
    }
}

const output = document.querySelector(".output");

let personas = [
    new Persona ('Rafael', 27, 'M'),
    new Persona ('Valeria', 22, 'F')
];

for(let i = 0; i<personas.length; i++){
    output.innerHTML += personas[i].obtDetalles(); //Que muestre cada persona que hay en personas y muestre sus detalles con la funciona obDetalles. //
    //Con el + en innerHTML obtenemos en este caso las dos personas.
}