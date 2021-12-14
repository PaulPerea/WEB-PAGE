(function(){
	//Variables
	var lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput");
		btnNuevaTarea = document.getElementById("btn-agregar");

	//Funciones
	var agregarTarea = function() {
		alert("agregarTarea");
	};
	var comprobarInput = function() {
		alert("comprobarInput");
	}
	var eliminarTarea = function() {
		alert("eliminarTarea");
	}

	//Eventos

	//Agregar tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);

	//Comprobar input
	tareaInput.addEventListener("click", comprobarInput);

	//Borrando elementos de la lista
	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eliminarTarea);
	}
	alert("yaaa");
}());