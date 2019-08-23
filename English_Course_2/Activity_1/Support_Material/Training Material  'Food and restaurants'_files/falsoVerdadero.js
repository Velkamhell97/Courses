

var JuegoFVBotonVerificar = "ventanaActividades.botonVerificar"; //Se almacena la ruta del boton verificar.

var JuegoFVMensaje = "escribirMensaje";
var JuegoFVBotonCerrar = "escribirMensaje.cerrar";
var JuegoFVCheck = "btnFalseTrue"; //Nombre del simbolo de los recuadros de chequeo.
//Posición de los recuadros de chequeo.
var JuegoFVPosicionCheck = {
	x: 670,
	y: 245
};
var distanciaCheck = 2; //Distancia entre los recuadros de chequeo.
//Respuestas correctas en su respectivo orden.
var JuegoFVRespuestasCorrectas = [
    true,
    false,
	true,
    true
];
var intentosFV = 3; //cantidad de intentos que tiene el juego.

//este puede estar en un archivo HTML independiente o se envia como un string.
var JuegoFVMensajes = {
	"correcto": "Bien....",
	"incorrecto": "Mal....",
	"perdio": "Perdio..."
};
var JuegoFVFuncionFinal = function () {};
 
/****************************************************************************************** 
 * Variables del sistema
 ******************************************************************************************/
var arrayVisibles;
var posicionArray;
var JuegoFVBotones;
var JuegoFVOpcionesSeleccionadas;
var JuegoFVIntentosBuenos;
var JuegoFVResultado;
var JuegoFVMensajesCargados;
var JuegoFVJuegoTermino;

/******************************************************************************************
 * Inicia el juego de listas desplegables.
 ******************************************************************************************/
//Carga el juego.
function cargarJuegoFV() 
{
	JuegoFVJuegoTermino = false;
	JuegoFVOpciones();
	JuegoFVCargarElementos();
	mostrarIntentosFV();
};

function JuegoFVOpciones() {
	Options.positionArray({
		distanciaEntreElementos: distanciaCheck
	});
};

//Muestra los intentos.
function mostrarIntentosFV() {
	if (intentosFV <= 0) {
		intentosFV = 0;
	}
};

function JuegoFVCargarElementos() {
	JuegoFVAlmacenarBotones();
	JuegoFVPosicionarBotones();
	JuegoFVEstadoNormalBotones();
	JuegoFVOcultarSelecciones();
	JuegoFVListenerBotones();
	JuegoFVVerificarDesactivar();
	JuegoFVAnimacionIn();
};

function JuegoFVAlmacenarBotones() {
	JuegoFVBotones = Display.addChildArray(JuegoFVCheck, "Stage", JuegoFVRespuestasCorrectas.length * 2);
};

function JuegoFVPosicionarBotones() {
	Display.positionArray(JuegoFVBotones, JuegoFVPosicionCheck.x, JuegoFVPosicionCheck.y, "x", 2);
};

function JuegoFVEstadoNormalBotones() {
	for (var i = 0; i < JuegoFVBotones.length; i++) {
		var botonActual = JuegoFVBotones[i];
		botonActual.stop("normal");
	}
};

function JuegoFVOcultarSelecciones() {
	for (var i = 0; i < JuegoFVBotones.length; i++) {
		var botonActual = JuegoFVBotones[i];
		Display.get(botonActual.getName(true) + ".seleccion").hide();
	}
};

function JuegoFVListenerBotones() {
	Event.click(JuegoFVBotones, JuegoFVBotonesPresionado);
	Button.over(JuegoFVBotones);
};

function JuegoFVRemoveListenerBotones() {
	Event.removeClick(JuegoFVBotones, JuegoFVBotonesPresionado);
	Button.over(JuegoFVBotones, false);
};

function JuegoFVBotonesPresionado(boton) {
	posicionArray = Arrays.indexOf(JuegoFVBotones, boton) + 1;
	var posicionArrayContario = posicionArray;
	if (posicionArray % 2 === 0) {
		posicionArrayContario = posicionArray - 2;
	}
	var botonContrario = JuegoFVBotones[posicionArrayContario];
	Display.get(boton.getName(true) + ".seleccion").show();
	Display.get(botonContrario.getName(true) + ".seleccion").hide();
	JuegoFVCantidadSelecciones();
};

function JuegoFVCantidadSelecciones() {
	var cantidadSelecciones = 0;
	for (var i = 0; i < JuegoFVBotones.length; i++) {
		var botonActual = JuegoFVBotones[i];
		if (Display.get(botonActual.getName(true) + ".seleccion").is(":visible")) {
			cantidadSelecciones += 1;
		}
	}
	if (cantidadSelecciones >= JuegoFVBotones.length / 2 && !JuegoFVJuegoTermino) {
		JuegoFVVerificarActivar();
	}
};

function JuegoFVVerificarActivar() 
{
	Display.get(JuegoFVBotonVerificar).show();
    Button.over(JuegoFVBotonVerificar, true);
	Display.get(JuegoFVBotonVerificar).play();
	Event.click(JuegoFVBotonVerificar, JuegoFVAlmacenarRespuestas);
}

function JuegoFVVerificarDesactivar() 
{
	Display.get(JuegoFVBotonVerificar).hide();
	Button.over(JuegoFVBotonVerificar, false);
	Event.removeClick(JuegoFVBotonVerificar, JuegoFVAlmacenarRespuestas);
};

function JuegoFVAlmacenarRespuestas() 
{
	JuegoFVEstadoNormalBotones();
	JuegoFVOpcionesSeleccionadas = [];
	arrayVisibles = [];
	for (var i = 0; i < JuegoFVBotones.length; i++) 
    {
		var botonActual = JuegoFVBotones[i];
		if (Display.get(botonActual.getName(true) + ".seleccion").is(":visible")) 
        {
			arrayVisibles.push(i);

			if (i % 2 === 0) {
				JuegoFVOpcionesSeleccionadas.push(true);
			} else {
				JuegoFVOpcionesSeleccionadas.push(false);
			}
		}
	}
    
	JuegoFVVerificar();
};

//array que nos permite remover el evento clic cuando sean verdaderas la selecciones y permanece los evento clic a los que estan malas
function JuegoFVVerificar() 
{
	JuegoFVResultado = "correcto";
	JuegoFVIntentosBuenos = 0;
	for (var i = 0; i < JuegoFVRespuestasCorrectas.length; i++) 
    {
		if (JuegoFVRespuestasCorrectas[i] === JuegoFVOpcionesSeleccionadas[i]) 
        {
			JuegoFVBotones[arrayVisibles[i]].stop("bien");
			if (JuegoFVRespuestasCorrectas[i]) 
            {
                
				Event.removeClick(JuegoFVBotones[arrayVisibles[i]], JuegoFVBotonesPresionado);
				Event.removeClick(JuegoFVBotones[arrayVisibles[i] + 1], JuegoFVBotonesPresionado);
			} 
            else 
            {
                    
				Event.removeClick(JuegoFVBotones[arrayVisibles[i]], JuegoFVBotonesPresionado);
				Event.removeClick(JuegoFVBotones[arrayVisibles[i] - 1], JuegoFVBotonesPresionado);
			}
			JuegoFVIntentosBuenos++;
		} else 
        {
                
			JuegoFVResultado = "incorrecto";
			JuegoFVBotones[arrayVisibles[i]].stop("mal");
		}
	}
	JuegoFVCargarMensaje();
};

function JuegoFVCargarMensaje() 
{
	//Display.addChild(JuegoFVMensaje);
	//Display.get(JuegoFVMensaje).stop(JuegoFVResultado);
	//Display.get(JuegoFVBotonCerrar).stop(JuegoFVResultado);
	JuegoFVVerificarFinJuego();
	//JuegoFVMensajeIn();
	//JuegoFVListenerMensaje();
};
 
//funcion donde le damos las condiciones para que salgan las ventanas correspondiente
function JuegoFVVerificarFinJuego() 
{
	
		if (JuegoFVIntentosBuenos >= 3) 
        {
            estado = "gano";
              
		} 
        else
        {
            estado = "perdio";
            
		}
 
    estadoPuntero4 = 1;
    validarEstadoCampos();
    JuegoFVFinJuego();

};

function JuegoFVMensajeIn() 
{
	TweenMax.from(JuegoFVMensaje, 1, 
    {
		scaleX: 0,
		scaleY: 0,
		ease: Cubic.easeOut
	});
};

function JuegoFVMensajeOut() {
	TweenMax.to(JuegoFVMensaje, 0.5, {
		scaleX: 0,
		scaleY: 0,
		ease: Cubic.easeIn,
		onComplete: JuegoFVEliminarMensaje
	});
};

function JuegoFVEliminarMensaje() 
{
	Display.removeChild(JuegoFVMensaje);
};

function JuegoFVListenerMensaje() 
{
	if (JuegoFVResultado == "perdio") 
    {
		Event.click(JuegoFVBotonCerrar, JuegoFVCerrarMensajePerdio);
		Button.over(JuegoFVBotonCerrar, true);
	} else 
    {
		Event.click(JuegoFVBotonCerrar, JuegoFVCerrarMensaje);
		Button.over(JuegoFVBotonCerrar, true);
	}
};

function JuegoFVEliminarListenerMensaje() {
	Event.removeClick(JuegoFVBotonCerrar, JuegoFVCerrarMensaje);
	Button.over(JuegoFVBotonCerrar, false);
};

function JuegoFVCargarTextoMensaje() 
{
	Display.get(JuegoFVMensaje).stop(JuegoFVResultado);
	var mensaje = JuegoFVMensajes[JuegoFVResultado];
	Text.load(JuegoFVMensaje, mensaje, "middle center");
};

//verifica si gano o perdio.
function JuegoFVCerrarMensaje() {
	JuegoFVEliminarListenerMensaje();
	JuegoFVMensajeOut();
	if (intentosFV <= 0) {
		JuegoFVResultado = "perdio";
        
		Timer.load(0.6, JuegoFVCargarMensaje);
	} else if (JuegoFVResultado === "correcto") {
		Timer.load(0.6, JuegoFVFinJuego);
	}
};

function JuegoFVCerrarMensajePerdio() {
	JuegoFVEliminarListenerMensaje();
	JuegoFVMensajeOut();
	Timer.load(0.6, JuegoFVFinJuego);
};

function JuegoFVAnimacionIn() {
	
    Display.get(JuegoFVBotonVerificar).show();
    
	TweenMax.from(JuegoFVBotonVerificar, 1, {
		scaleX: 0,
		scaleY: 0,
		delay: 0.5,
		alpha: 0,
		ease: Cubic.easeOut
	});

	TweenMax.allFrom(JuegoFVBotones, 0.5, {
		scaleX: 0,
		scaleY: 0,
		alpha: 0,
		delay: 1,
		ease: Back.easeOut
	});
};

function JuegoFVAnimacionOut() 
{
	Display.get(JuegoFVBotonVerificar).hide();
};

function JuegoFVFinJuego() 
{
	JuegoFVAnimacionOut();
	JuegoFVJuegoTermino = true;
	JuegoFVVerificarDesactivar();
	JuegoFVRemoveListenerBotones();
	//Display.removeChildArray(JuegoFVBotones);
	JuegoFVFuncionFinal();
};