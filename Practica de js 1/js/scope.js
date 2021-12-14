var variableGlobal = "Esta es global";

var miFuncion = function(){
	var variableLocal = "Esta es local";

	var funcionLocal = function(){
		//variableLocal = "Esta es variable local, dentro de otra variable";
		alert(variableLocal);
	}
	funcionLocal();
}
miFuncion();

//Las variables locales dentro de otras variables locales, se puede ver y buscar las variables de afuera
//pero no se puede mostrar variables locales desde afuera del metodo

//este metodo es para proteger tu codigo de terceros

(function(){

	//aqui se escrite todo el codigo para proteger

}())