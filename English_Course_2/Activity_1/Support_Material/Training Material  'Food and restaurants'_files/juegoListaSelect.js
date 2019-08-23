
var contenedorJuegoLS = "contenido5"; //se almacena el nombre del contenedor del juego.
var rutaJuegoLS = "edge_includes/Textos/contenido5/juegoListaSelect/Texto"; //se almacena la ruta del archivo HTML en el que se encuentra el juego.
var botonVerificarLS = "botonVerificar"; //se almacena la ruta del botón verificar del juego.
//var contenedorIntentosLS = "contenido4.intentos.intentoText"; //se almacena la ruta del contenedor de los intentos.
var ventanaMensajeLS = "escribirMensaje"; //se almacena el nombre de la ventana de los mensajes.
var cantidadSlideLS = 1; //variable donde indicamos la cantidad de slide en el que se encuentra el juego.
var intentosLS = 3; //cantidad de intentos que tiene el juego.


var mensajesLS = {
	"correcto": "Mensaje Correcto",
	"incorrecto": "Mensaje Incorrecto",
	"perdio": "Mensaje Perdio"
};

/****************************************************************************************** 
 * Variables del sistema
 ******************************************************************************************/
var seleccionLS; //almacena todos los archivos del formulario.
var valoresLS = []; //almacena los valores seleccionados en el select.
var buenasLS = 0; //variable que almacena cuantas selecciones correctas hay.
var estadoJuegoLS; //me envia el estado del juego (Correcto, Perdio o Incorrecto).

/******************************************************************************************
 * Inicia el juego de listas desplegables.
 ******************************************************************************************/
//Carga el juego.
function cargarJuegoListaSelect() 
{
	mostrarIntentosLS();
};

//Muestra los intentos.
function mostrarIntentosLS() 
{
	//Text.load(contenedorIntentosLS, intentosLS, "middle center size24");
};

//Agrega la ventana de los mensajes y llama las demas funciones.
function cargarMensajeLS() 
{
	Display.addChild(ventanaMensajeLS);
    Display.position(ventanaMensajeLS, 233, 204);
	cargarTextoMensajeLS();
	listenerMensajeLS();
	mensajeInLS();
};

//Carga los textos de los mensajes
function cargarTextoMensajeLS() 
{
	Display.get(ventanaMensajeLS).stop(estadoJuegoLS);
	Display.get(ventanaMensajeLS + ".btnCerrar").stop(estadoJuegoLS);
	var textoMensajeLS = mensajesLS[estadoJuegoLS];

	//permite identificar si es un archivo HTML o si es un string.
	if (textoMensajeLS.indexOf("textos/") !== -1) 
    {
		$.ajax({
			url: textoMensajeLS + ".html",
			success: function (archivo) {
				Text.load(ventanaMensajeLS, archivo);
			}
		});
	} 
    else 
    {
		Text.load(ventanaMensajeLS, textoMensajeLS, "middle center");
	}
};

//agrega el listener al botón cerrar de los mensajes.
function listenerMensajeLS() 
{
	if (estadoJuegoLS == "perdio") {
		Event.click(ventanaMensajeLS + ".cerrar", cerrarMensajeLSPerdio);
		Button.over(ventanaMensajeLS + ".cerrar", true);
	} else {
		Event.click(ventanaMensajeLS + ".cerrar", cerrarMensajeLS);
		Button.over(ventanaMensajeLS + ".cerrar", true);
	}
};

//Animacion de entrada de los mensajes.
function mensajeInLS() {
	TweenMax.from(ventanaMensajeLS, 0.5, {
		scaleX: 0,
		scaleY: 0,
		alpha: 0
	});
};

//Animacion de salida de los mensajes.
function mensajeOutLS() {
	TweenMax.to(ventanaMensajeLS, 0.5, {
		alpha: 0,
		onComplete: eliminarMensajeLS
	});
};

//remueve la ventana de los mensajes
function eliminarMensajeLS() {
	Display.removeChild(ventanaMensajeLS);
};

//verifica si gano o perdio.
function cerrarMensajeLS() {
	mensajeOutLS();

	if (intentosLS <= 0) {
		estadoJuegoLS = "perdio";
		Timer.load(0.6, cargarMensajeLS);
	} else if (estadoJuegoLS === "correcto") {
		Timer.load(0.6, finalJuegoLS);
	}
};

function cerrarMensajeLSPerdio() {
	mensajeOutLS();
	Timer.load(0.6, finalJuegoLS);
};

/******************************************************************************************
 * Inicia la logica del juego
 ******************************************************************************************/

//verifica los valores seleccionados y los almacena en "valores".
function verificarSelect() {
	seleccionLS = document.getElementById("formulario");
	valoresLS.length = 0;

	for (var i = 0; i < seleccionLS.length; ++i) 
    {
		var child = seleccionLS[i];
        
		if (child[child.selectedIndex].value !== "") 
        {
			valoresLS.push(child.value);
            
			if (valoresLS.length == seleccionLS.length) 
            {
				activarBtnVerificar();
			}
		}
	}
};
 
//activa el boton verificar.
function activarBtnVerificar() 
{ 
	buenasLS = 0;
    cargarBotonVerificar();
    Event.click(Display.get("botonVerificar"), varificarJuegoLS);
};

//verificasi el se contesto correcto o no.
function varificarJuegoLS() 
{
	for (var i = 0; i < valoresLS.length; ++i) 
    {
		if (valoresLS[i] === "1") 
        {
			document.getElementById("select" + i).disabled = true; //inhabilita los select que estan correctos.
			document.getElementById("select" + i).className = "selectCorrecto"; //le asigna la sombra verde a los select.
			buenasLS++;
		} else 
        {
			document.getElementById("select" + i).className = "selectIncorrecto"; //le asigna la sombra roja a los select.
            document.getElementById("select" + i).disabled = true; //inhabilita los select que estan correctos.
		}
	}


	if (buenasLS >= 4) 
    {
		//estadoJuegoLS = "correcto";
        estado = "gano";
	} 
    else 
    {
        estado = "perdio";
		//estadoJuegoLS = "incorrecto";
		//intentosLS--;
	}
    

    estadoPuntero3 = 1;
    validarEstadoCampos();
    
	//mostrarIntentosLS();
	//cargarMensajeLS();
};

//aqui iria lo que quieren que haga el juego apenas termine.
function finalJuegoLS() 
{
    cerrarBotonVerificar();
    //Display.removeChild(botonVerificarLS);
};
/******************************************************************************************/