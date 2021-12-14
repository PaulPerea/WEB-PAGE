var elemento = document.createElement("h2");
var contenido = document.createTextNode("Este es nuestro titular");

elemento.appendChild(contenido);
elemento.setAttribute("align","center");
document.getElementById("subtitulo").appendChild(elemento);