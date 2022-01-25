"use strict";

const formulario = document.querySelector("#myForm");

formulario.onsubmit = (e) => {
  e.preventDefault();

  let fechaInput = document.querySelector("#fecha");
  let fecha = fechaInput.value;
  let email = fecha.value;

  const correo = "dasdasd";
  const expFecha = /^\d{1,2}\/[0-9]{1,2}\/\d{1,4}$/;
  const expEmail = /^\w+\W?\w?@\w+.\w{1,3}$/;
  console.log(correo,expEmail.test(correo))

  if ((expFecha.test(fecha)) && (expEmail.test(email))){
    console.log(fecha);
    console.log(email);
  } else {
    alert("Debes indicar la fecha de la siguiente forma XX/XX/XXXX");
  }
};
