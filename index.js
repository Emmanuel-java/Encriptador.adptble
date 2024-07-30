function encriptar () {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

if (texto.length != 0) {
    swal ({
        title: "Encriptando...!",
        text: "Tu texto fue ¡Encriptado!",
        icon: "success",
        button: "Ok",
      });
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con exito";
    parrafo.textContent = "";
    muñeco.src = "./img/hacker.jpg";
    } else {
        muñeco.src = "https://media.tenor.com/w8ZeawIWMvoAAAAj/magnifying-glass-searching.gif";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado"
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar",
        swal("Tienes que ingresar un texto", "El que tu quieras :D");
    }
}
function desencriptar () {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

if (texto.length != 0) {
    swal({
        title: "Desencriptando...!",
        text: "Tu texto fue ¡Desencriptado!",
        icon: "success",
        button: "Ok",
      });
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con exito";
    parrafo.textContent = "";
    muñeco.src = "./img/desencriptado.jpg";
    } else {
        muñeco.src = "https://media.tenor.com/w8ZeawIWMvoAAAAj/magnifying-glass-searching.gif";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado"
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
        swal("Tienes que ingresar un texto", "El que tu quieras :D");
    }
}
function limpiar() {
    let muñeco = document.getElementById("muñeco");
    let tituloMensaje = document.getElementById("titulo-mensaje");
let parrafo = document.getElementById("parrafo");
    document.getElementById("texto").value = "";
    swal({
        title: "limpiando...!",
        text: "ahora puede escribir otro texto!",
        icon: "success",
        button: "Ok",
      });
      muñeco.src = "https://media.tenor.com/w8ZeawIWMvoAAAAj/magnifying-glass-searching.gif"
      tituloMensaje.textContent = "Ningun mensaje fue encontrado"
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"    
}     