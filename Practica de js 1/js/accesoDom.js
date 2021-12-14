
		var elemento = document.createElement("div");
		var padre = document.getElementById("contenedor");
		var referencia = document.getElementsByTagName("div")[0];

		padre.insertBefore(elemento,referencia);
		elemento.setAttribute("class","azul");