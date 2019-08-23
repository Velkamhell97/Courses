/*------------ Actividad  1 falso verdadero Boton 1-------- */
function JuegoFVActividad1() {
    PosicionFinalPresentacion=false;
	JuegoFvEstadoActividad1 = true;
	JuegoFvPosicionArray=0;
	/*global Display,Cubic,TweenMax,Event,Arrays,console,Text,Button,$,Timer,Options,Back,cambiarPractica1*/
	resultado = ["1", "0", "1", "0", "1"];
	ElementosValidacionFinal = [];
	resul = [];
	boton;
	JuegoFVactividad2;
	JuegoFVactividad1;
	//JuegoFV
	JuegoFvContenedorIntentos = "contenido3.Intentos.contenedor";
	//llamar a la funcion JuegoFVCargar();
	arrayVisibles;
	estadoFuegoFv = false;
	JuegoFVVentana = "mcBienvenida";
	JuegoFVPosicionVentana = {
		x: 17,
		y: 40
	};
	JuegoFVBotonVerificar = "escribirVerificar";
	JuegoFVBotonContinuar = "contenido3.BtnNext";
	JuegoFVPosicionVerificar = {
		x: 693,
		y: 518
	};
	JuegoFVMensaje = "mensaje";
	JuegoFVPosicionMensaje = {
		x: 233,
		y: 170
	};
	JuegoFVBotonCerrar = "mensaje.cerrar";
	JuegoFVModal = "modal";
	JuegoFVCheck = "btnFalseTrue";
	JuegoFVPosicionCheck = {
		x: 728,
		y: 268
	};
	conprensionDistanciaCheck = 12;
	JuegoFVContenedorIntentos = "";
	JuegoFVIntentosMalos = 2;
	JuegoFVIntentos2 = 2;
	JuegoFVRespuestasCorrectas = [
 false,
 false,
 true,
 false,
 false
];
	refPagina = 0;
	JuegoFVMensajes = {
		"bien": "Bien",
		"mal": "Mal",
		"excelente": "Very good job. Keep it up!",
		"perdio": "You can do better, try again!"
	};
	JuegoFVTextoPregunta = [
 "Textos/comprension/FalsoVerdadero"
         ];
	//var JuegoFVFondo = "escena2";
	JuegoFVFuncionFinal = function () {};
	posicionArray;

	/**
No modificable
*/

	var JuegoFVBotones;
	var JuegoFVOpcionesSeleccionadas;
	var JuegoFVIntentos;
	var JuegoFVIntentosBuenos;
	var JuegoFVResultado;
	var JuegoFVMensajesCargados;
	var JuegoFVJuegoTermino;
	JuegoFVactividad1 = new JuegoFVCargar();
}

/*------------  Fin Actividad 1 falso verdadero Boton 1-------- */


/*------------ Actividad  2 falso verdadero Boton 1-------- */
function JuegoFVActividad2() {
    PosicionFinalPresentacion=true;
	JuegoFvPosicionArray=1;
	JuegoFvEstadoActividad2 = true;
	resultado = ["0", "1", "0", "1"];
	ElementosValidacionFinal = [];
	resul = [];
	boton;
	JuegoFVactividad2;
	JuegoFVactividad1;
	//JuegoFV
	//llamar a la funcion JuegoFVCargar();
	arrayVisibles;
	estadoFuegoFv = false;
	JuegoFVVentana = "mcBienvenida";
	JuegoFVPosicionVentana = {
		x: 17,
		y: 40
	};
	JuegoFVBotonVerificar = "escribirVerificar";
	JuegoFVBotonContinuar = "contenido3.BtnNext";
	JuegoFVPosicionVerificar = {
		x: 693,
		y: 518
	};
	JuegoFVMensaje = "mensaje";
	JuegoFVPosicionMensaje = {
		x: 233,
		y: 170
	};
	JuegoFVBotonCerrar = "mensaje.cerrar";
	JuegoFVModal = "modal";
	JuegoFVCheck = "btnFalseTrue";
	JuegoFVPosicionCheck = {
		x: 742,
		y: 270
	};
	conprensionDistanciaCheck = 12;
	JuegoFVContenedorIntentos = "";
	JuegoFVIntentosMalos = 2;
	JuegoFVIntentos2 = 2;
	JuegoFVRespuestasCorrectas = [
    false,
    false,
    false,
    true
];
	refPagina = 0;
	JuegoFVMensajes = {
		"bien": "Bien",
		"mal": "Mal",
		"excelente": "Very good job. Keep it up!",
		"perdio": "You can do better, try again!"
	};
	JuegoFVTextoPregunta = [
       "Textos/comprension/FalsoVerdadero2"];
	//var JuegoFVFondo = "escena2";
	JuegoFVFuncionFinal = function () {};
	posicionArray;

	/**
No modificable
*/
	var JuegoFVBotones;
	var JuegoFVOpcionesSeleccionadas;
	var JuegoFVIntentos;
	var JuegoFVIntentosBuenos;
	var JuegoFVResultado;
	var JuegoFVMensajesCargados;
	var JuegoFVJuegoTermino;
	JuegoFVactividad2 = new JuegoFVCargar();
}


function RemoverElementos() {
	if (JuegoFvEstadoActividad2 != false || JuegoFvEstadoActividad1 != false) {
		RemoverJuegoFV();
	}
	RemoverJuegoFV();
	//RemoverJuegoFV();
	/*if (Presentation.getCurrentPage() == 1) {
		JuegoFVActividad1();
	}
	if (Presentation.getCurrentPage() == 2) {
		JuegoFVActividad2();
	}*/
}
/*------------ Fin Actividad  2 falso verdadero Boton 1-------- */
