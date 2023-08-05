let bandera = true;
function borde() {
  let imagen = document.getElementById("myimg");
  if (bandera) {
    imagen.classList.add("myborder");
    bandera = false;
  } else {
    imagen.classList.remove("myborder");
    bandera = true;
  }
}

function validar() {
  let s1 = document.querySelector("#input1").value;
  let s2 = document.querySelector("#input2").value;
  let s3 = document.querySelector("#input3").value;
  let sum = Number(s1) + Number(s2) + Number(s3);
  let par = document.querySelector("#p-texto");
  if (sum <= 10) {
    par.innerHTML = "Llevas " + sum + " stickers";
  } else {
    par.innerHTML = "Llevas demasiados stickers";
  }
}

function ingresar() {
  let d1 = document.querySelector("#slct1").value;
  let d2 = document.querySelector("#slct2").value;
  let d3 = document.querySelector("#slct3").value;
  let pswrd = d1 + d2 + d3;
  let verif = document.querySelector("#p-pass");
  if (pswrd == "911") {
    verif.innerHTML = "password 1 correcto";
  } else if (pswrd == "714") {
    verif.innerHTML = "password 2 correcto";
  } else {
    verif.innerHTML = "password incorrecto";
  }
}
