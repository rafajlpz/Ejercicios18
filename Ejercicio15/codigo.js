"use strict";

const muestra = () => {
  const span = document.querySelector("span.adicional");
  // span.className = "adicional visible";
  // span.classList.add()
  // span.classList.remove()
  span.classList.toggle("oculto"); //Efecto de abrir-cerrar

  const enlace = document.querySelector(".enlace");
  enlace.style.display = "none";
};
