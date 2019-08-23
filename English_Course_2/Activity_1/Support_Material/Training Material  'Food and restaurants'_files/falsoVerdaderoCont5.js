

var JuegoFVBotonVerificar2 = "ventanaActividades.botonVerificar"; //Se almacena la ruta del boton verificar.

var JuegoFVMensaje2 = "escribirMensaje";
var JuegoFVBotonCerrar2 = "escribirMensaje.cerrar";
var JuegoFVCheck2 = "btnFalseTrue"; //Nombre del simbolo de los recuadros de chequeo.
//Posición de los recuadros de chequeo.
var JuegoFVPosicionCheck2 = {
	x: 670,
	y: 245
};
var distanciaCheck2 = 2; //Distancia entre los recuadros de chequeo.
//Respuestas correctas en su respectivo orden.
var JuegoFVRespuestasCorrectas2 = [
    false,
    false,
	true,
    false
];
var intentosFV2 = 3; //cantidad de intentos que tiene el juego.

//este puede estar en un archivo HTML independiente o se envia como un string.
var JuegoFVMensajes2 = {
	"correcto": "Bien....",
	"incorrecto": "Mal....",
	"perdio": "Perdio..."
};
var JuegoFVFuncionFinal2 = function () {};

/****************************************************************************************** 
 * Variables del sistema
 ******************************************************************************************/
var arrayVisibles2;
var posicionArray2;
var JuegoFVBotones2;
var JuegoFVOpcionesSeleccionadas2;
var JuegoFVIntentosBuenos2;
var JuegoFVResultado2;
var JuegoFVMensajesCargados2;
var JuegoFVJuegoTermino2;

/******************************************************************************************
 * Inicia el juego de listas desplegables.
 ******************************************************************************************/
//Carga el juego.
function cargarJuegoFV2() 
{
	JuegoFVJuegoTermino2 = false;
	JuegoFVOpciones2();
	JuegoFVCargarElementos2();
	mostrarIntentosFV2();
};

function JuegoFVOpciones2() 
{
	Options.positionArray({
		distanciaEntreElementos: distanciaCheck2
	});
};

//Muestra los intentos.
function mostrarIntentosFV2() 
{
	if (intentosFV2 <= 0) {
		intentosFV2 = 0;
	}
};

function JuegoFVCargarElementos2() {
	JuegoFVAlmacenarBotones2();
	JuegoFVPosicionarBotones2();
	JuegoFVEstadoNormalBotones2();
	JuegoFVOcultarSelecciones2();
	JuegoFVListenerBotones2();
	JuegoFVVerificarDesactivar2();
	JuegoFVAnimacionIn2();
};

function JuegoFVAlmacenarBotones2() {
	JuegoFVBotones2 = Display.addChildArray(JuegoFVCheck2, "Stage", JuegoFVRespuestasCorrectas2.length * 2);
};

function JuegoFVPosicionarBotones2() {
	Display.positionArray(JuegoFVBotones2, JuegoFVPosicionCheck2.x, JuegoFVPosicionCheck2.y, "x", 2);
};

function JuegoFVEstadoNormalBotones2() {
	for (var i = 0; i < JuegoFVBotones2.length; i++) {
		var botonActual2 = JuegoFVBotones2[i];
		botonActual2.stop("normal");
	}
};

function JuegoFVOcultarSelecciones2() {
	for (var i = 0; i < JuegoFVBotones2.length; i++) {
		var botonActual2 = JuegoFVBotones2[i];
		Display.get(botonActual2.getName(true) + ".seleccion").hide();
	}
};

function JuegoFVListenerBotones2() {
	Event.click(JuegoFVBotones2, JuegoFVBotonesPresionado2);
	Button.over(JuegoFVBotones2);
};

function JuegoFVRemoveListenerBotones2() {
	Event.removeClick(JuegoFVBotones2, JuegoFVBotonesPresionado2);
	Button.over(JuegoFVBotones2, false);
};

function JuegoFVBotonesPresionado2(boton) {
	posicionArray2 = Arrays.indexOf(JuegoFVBotones2, boton) + 1;
	var posicionArrayContario2 = posicionArray2;
	if (posicionArray2 % 2 === 0) {
		posicionArrayContario2 = posicionArray2 - 2;
	}
	var botonContrario2 = JuegoFVBotones2[posicionArrayContario2];
	Display.get(boton.getName(true) + ".seleccion").show();
	Display.get(botonContrario2.getName(true) + ".seleccion").hide();
	JuegoFVCantidadSelecciones2();
};

function JuegoFVCantidadSelecciones2() {
	var cantidadSelecciones2 = 0;
	for (var i = 0; i < JuegoFVBotones2.length; i++) {
		var botonActual2 = JuegoFVBotones2[i];
		if (Display.get(botonActual2.getName(true) + ".seleccion").is(":visible")) {
			cantidadSelecciones2 += 1;
		}
	}
	if (cantidadSelecciones2 >= JuegoFVBotones2.length / 2 && !JuegoFVJuegoTermino2) {
		JuegoFVVerificarActivar2();
	}
};
 
function JuegoFVVerificarActivar2() 
{
	Display.get(JuegoFVBotonVerificar2).show();
    Button.over(JuegoFVBotonVerificar2, true);
	Display.get(JuegoFVBotonVerificar2).play();
	Event.click(JuegoFVBotonVerificar2, JuegoFVAlmacenarRespuestas2);
}

function JuegoFVVerificarDesactivar2() 
{
	Display.get(JuegoFVBotonVerificar2).hide();
	Button.over(JuegoFVBotonVerificar2, false);
	Event.removeClick(JuegoFVBotonVerificar2, JuegoFVAlmacenarRespuestas2);
};

function JuegoFVAlmacenarRespuestas2() {
	JuegoFVEstadoNormalBotones2();
	JuegoFVOpcionesSeleccionadas2 = [];
	arrayVisibles2 = [];
	for (var i = 0; i < JuegoFVBotones2.length; i++) {
		var botonActual2 = JuegoFVBotones2[i];
		if (Display.get(botonActual2.getName(true) + ".seleccion").is(":visible")) {

			arrayVisibles2.push(i);

			if (i % 2 === 0) {
				JuegoFVOpcionesSeleccionadas2.push(true);
			} else {
				JuegoFVOpcionesSeleccionadas2.push(false);
			}
		}
	}
	JuegoFVVerificar2();
};
 
//array que nos permite remover el evento clic cuando sean verdaderas la selecciones y permanece los evento clic a los que estan malas
function JuegoFVVerificar2() 
{
	JuegoFVResultado2 = "correcto";
	JuegoFVIntentosBuenos2 = 0;
	for (var i = 0; i < JuegoFVRespuestasCorrectas2.length; i++) 
    {
		if (JuegoFVRespuestasCorrectas2[i] === JuegoFVOpcionesSeleccionadas2[i]) 
        {
			JuegoFVBotones2[arrayVisibles2[i]].stop("bien");
			if (JuegoFVRespuestasCorrectas2[i]) 
            {
				Event.removeClick(JuegoFVBotones2[arrayVisibles2[i]], JuegoFVBotonesPresionado2);
				Event.removeClick(JuegoFVBotones2[arrayVisibles2[i] + 1], JuegoFVBotonesPresionado2);
			} 
            else 
            {
				Event.removeClick(JuegoFVBotones2[arrayVisibles2[i]], JuegoFVBotonesPresionado2);
				Event.removeClick(JuegoFVBotones2[arrayVisibles2[i] - 1], JuegoFVBotonesPresionado2);
			}
			JuegoFVIntentosBuenos2++;
		} else 
        {
			JuegoFVResultado2 = "incorrecto";
			JuegoFVBotones2[arrayVisibles2[i]].stop("mal");
		}
	}
	JuegoFVCargarMensaje2();
};

function JuegoFVCargarMensaje2() 
{
	//Display.addChild(JuegoFVMensaje);
	//Display.get(JuegoFVMensaje).stop(JuegoFVResultado);
	//Display.get(JuegoFVBotonCerrar).stop(JuegoFVResultado);
	JuegoFVVerificarFinJuego2();
	//JuegoFVMensajeIn();
	//JuegoFVListenerMensaje();
};

//funcion donde le damos las condiciones para que salgan las ventanas correspondiente
function JuegoFVVerificarFinJuego2() 
{
	if (JuegoFVIntentosBuenos2 >= 3) 
        {
            estado = "gano";
		} 
        else
        {
            estado = "perdio";
		}
    
    estadoPuntero4 = 1;
    validarEstadoCampos();
    JuegoFVFinJuego2();
};

function JuegoFVMensajeIn2() 
{
	TweenMax.from(JuegoFVMensaje2, 1, 
    {
		scaleX: 0,
		scaleY: 0,
		ease: Cubic.easeOut
	});
};

function JuegoFVMensajeOut2() {
	TweenMax.to(JuegoFVMensaje2, 0.5, {
		scaleX: 0,
		scaleY: 0,
		ease: Cubic.easeIn,
		onComplete: JuegoFVEliminarMensaje2
	});
};

function JuegoFVEliminarMensaje2() 
{
	Display.removeChild(JuegoFVMensaje2);
};

function JuegoFVListenerMensaje2() 
{
	if (JuegoFVResultado2 == "perdio") 
    { 
		Event.click(JuegoFVBotonCerrar2, JuegoFVCerrarMensajePerdio2);
		Button.over(JuegoFVBotonCerrar2, true);
	} else 
    {
		Event.click(JuegoFVBotonCerrar2, JuegoFVCerrarMensaje2);
		Button.over(JuegoFVBotonCerrar2, true);
	}
};

function JuegoFVEliminarListenerMensaje2() {
	Event.removeClick(JuegoFVBotonCerrar2, JuegoFVCerrarMensaje2);
	Button.over(JuegoFVBotonCerrar2, false);
};

function JuegoFVCargarTextoMensaje2() 
{
	Display.get(JuegoFVMensaje2).stop(JuegoFVResultado2);
	var mensaje = JuegoFVMensajes2[JuegoFVResultado2];
	Text.load(JuegoFVMensaje2, mensaje2, "middle center");
};

//verifica si gano o perdio.
function JuegoFVCerrarMensaje2() {
	JuegoFVEliminarListenerMensaje2();
	JuegoFVMensajeOut2();
	if (intentosFV2 <= 0) {
		JuegoFVResultado2 = "perdio";
		Timer.load(0.6, JuegoFVCargarMensaje2);
	} else if (JuegoFVResultado2 === "correcto") {
		Timer.load(0.6, JuegoFVFinJuego2);
	}
};

function JuegoFVCerrarMensajePerdio2() {
	JuegoFVEliminarListenerMensaje2();
	JuegoFVMensajeOut2();
	Timer.load(0.6, JuegoFVFinJuego2);
};

function JuegoFVAnimacionIn2() {
	
    Display.get(JuegoFVBotonVerificar2).show();
    
	TweenMax.from(JuegoFVBotonVerificar2, 1, {
		scaleX: 0,
		scaleY: 0,
		delay: 0.5,
		alpha: 0,
		ease: Cubic.easeOut
	});

	TweenMax.allFrom(JuegoFVBotones2, 0.5, {
		scaleX: 0,
		scaleY: 0,
		alpha: 0,
		delay: 1,
		ease: Back.easeOut
	});
};

function JuegoFVAnimacionOut2() 
{
	Display.get(JuegoFVBotonVerificar2).hide();
};

function JuegoFVFinJuego2() 
{
	JuegoFVAnimacionOut2();
	JuegoFVJuegoTermino2 = true;
	JuegoFVVerificarDesactivar2();
	JuegoFVRemoveListenerBotones2();
	//Display.removeChildArray(JuegoFVBotones2);
	JuegoFVFuncionFinal2();
};