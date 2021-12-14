
var elemento = document.createElement("li"),
	contenido = document.createTextNode("Nuevo Texto");

elemento.appendChild(contenido);

var padre = document.getElementsByTagName("li")[0].parentNode,
	referencia = document.getElementsByTagName("li")[0];

padre.replaceChild(elemento,referencia);