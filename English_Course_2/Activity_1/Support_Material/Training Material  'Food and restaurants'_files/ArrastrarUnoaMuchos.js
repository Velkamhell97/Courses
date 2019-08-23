//js Arrastrar Soltar
var ElementosArrastrarC4P2 = "mcRecuadro";

var ElementosColisionC4P2 = [
	"mcRecuadroColision1",
	"mcRecuadroColision2",
	"mcRecuadroColision3",
    "mcRecuadroColision4",
    "mcRecuadroColision5"
];
 
//Si no se necesita textos dejar vacio el array
var juegoColisionTextosMoverC4P2 = [
    "Yogurt",
	"Ice cream",
	"Butter",
	"Strawberry",
	"Grapes",
	"Coconut",
	"Sausages",
	"Salmon",
	"Tuna",
	"Lettuce",
	"Onion",
	"Carrots",
    "Pasta",
	"Bread",
	"Rice"
];

//los elementos se almacenan por el nombre de instancia de colisionColision seguido por un numero consecutivo
//se debe ingresar el texto del elemento mover correcto, o la instancia del objeto mover
var juegoColisionElementosCorrectosC4P2 = {
	"mcRecuadroColision1": [
        "Yogurt",
		"Ice cream",
		"Butter"
    ],
	"mcRecuadroColision2": [
        "Strawberry",
		"Grapes",
		"Coconut"
    ],
	"mcRecuadroColision3": [
        "Sausages",
		"Salmon",
		"Tuna"
    ],
    "mcRecuadroColision4": [
        "Lettuce",
		"Onion",
		"Carrots"
    ],
    "mcRecuadroColision5": [
        "Pasta",
		"Bread",
		"Rice"
    ]
};

var juegoColisionMensajesC4P2 = {
	"gano": "Mensaje gano",
	"perdio": "Mensaje perdio" //se peuden cargar desde un archivo Html
};
var juegoColisionElementosColisionC4P2 = [];
var juegoColisionElementosMoverC4P2 = [];
var juegoColisionIntentosC4P2 = 7;
var juegoColisionEstadoJuegoC4P2 = "perdio";
var estadoColisionFinalC4P2 = false;
  
function juegoColisionCargar() 
{
	estadoColisionFinalC4P2 = true;
	juegoColisionReiniciar();
	juegoColisionConfigurar();
	juegoColisionCargarElementos();
	juegoColisionIniciar();
};
 
function juegoColisionReiniciar() 
{
	juegoColisionElementosColisionC4P2 = [];
	juegoColisionElementosMoverC4P2 = [];
	juegoColisionIntentosC4P2 = 7;
	var juegoColisionEstadoJuegoC4P2 = "perdio";
};

function juegoColisionConfigurar() 
{
	Options.collision({
		intentosMalos: 2,
		ocultarElementos: false,
		duplicarElementos: false
	});
	Options.positionArray({
		distanciaEntreElementos: 3
	});
};

function juegoColisionCargarElementos() 
{
	Display.addChild(ElementosColisionC4P2[0]);
	Display.addChild(ElementosColisionC4P2[1]);
	Display.addChild(ElementosColisionC4P2[2]);
    Display.addChild(ElementosColisionC4P2[3]);
    Display.addChild(ElementosColisionC4P2[4]);
	Display.position(ElementosColisionC4P2[0], 93,  330);
	Display.position(ElementosColisionC4P2[1], 262, 330);
	Display.position(ElementosColisionC4P2[2], 429, 330);
    Display.position(ElementosColisionC4P2[3], 590, 330);
    Display.position(ElementosColisionC4P2[4], 752, 330);
	juegoColisionElementosMoverC4P2 = Display.addChildArray(ElementosArrastrarC4P2, "Stage", 15);
	juegoColisionCargarTextos();
	juegoColisionAnimacionIn();
};

function juegoColisionEliminarElementos() 
{
	Display.removeChildArray(juegoColisionElementosMoverC4P2);
};

function juegoColisionCargarTextos() 
{
	Text.load(juegoColisionElementosMoverC4P2, juegoColisionTextosMoverC4P2, "middle center");
};


function juegoColisionAnimacionIn() 
{
	TweenMax.allFrom(juegoColisionElementosMoverC4P2, 0.01, {
		alpha: 1,
        x:160,
        y:130,
	});
};

function juegoColisionAnimacionOut() 
{
	TweenMax.allTo(juegoColisionElementosMoverC4P2, 0.01, {
        
		alpha: 0,
        x:1000,
        y:130
	});
};
 
function juegoColisionIniciar() 
{
	Collision.load(juegoColisionElementosMoverC4P2, ElementosColisionC4P2, juegoColisionElementosCorrectosC4P2);
	Collision.finish(juegoColisionFinJuego);
	Collision.stateCollision(juegoColisionEstadoDeColision);
	juegoColisionDesordenarElementos();
	Display.positionArray(juegoColisionElementosMoverC4P2, 80, 115, "x", 5);
};

function juegoColisionDesordenarElementos() 
{
	//comentar para no desernear los elementos
	//juegoColisionElementosColisionC4P2 = Arrays.random(juegoColisionElementosColisionC4P2);
	juegoColisionElementosMoverC4P2 = Arrays.random(juegoColisionElementosMoverC4P2);
};

function juegoColisionEstadoDeColision(colisionMala) 
{
	if (!colisionMala) 
    {
		juegoColisionIntentosC4P2--;
	}
};

function juegoColisionFinJuego() 
{
    if(juegoColisionIntentosC4P2 <= 0)
    {
      estado = "perdio";
    }
    else
    {
      estado = "gano";
    }
    
    estadoPuntero1 = 1;
    validarEstadoCampos();
};

function juegoColisionCargarMensaje() 
{
	cargarVentanaEscribirCont3pag1();
    Display.get("escribirMensaje").stop("mal");
    Text.load("escribirMensaje", "Incorrecto, Intente de nuevo.", "middle center");
    Event.click("escribirMensaje.cerrar", cerrarVentanaEscribirCont3pag1);
    Button.over("escribirMensaje.cerrar");
};

function juegoColisionCargarMensajeFin() 
{
	cargarVentanaEscribirCont3pag1();
    Display.get("escribirMensaje").stop("mal");
    Text.load("escribirMensaje", "Perdio", "middle center");
    Event.click("escribirMensaje.cerrar", cerrarVentanaEscribirCont3pag1);
    Button.over("escribirMensaje.cerrar");
    
    juegoColisionAnimacionOut();
}

function juegoColisionEliminarMensaje() 
{
	Display.removeChild("escribirMensaje");
};

function juegoColisionListenerMensaje() 
{
	Event.click("escribirMensaje.cerrar", juegoColisionCerrarMensaje);
	Button.over("escribirMensaje.cerrar");
};

function juegoColisionCargarTextoMensaje() 
{
	Display.get("escribirMensaje").stop(juegoColisionEstadoJuegoC4P2);
	var textoMensaje = juegoColisionMensajesC4P2[juegoColisionEstadoJuegoC4P2];
	if (textoMensaje.indexOf("textos/") !== -1) {
		$.ajax({
			url: textoMensaje + ".html",
			success: function (archivo) {
				Text.load("colisionMensaje", archivo);
			}
		});
	} else {
		Text.load("escribirMensaje", textoMensaje, "middle center");
	}
};

function juegoColisionMensajeIn() 
{
	TweenMax.from("escribirMensaje", 0.5, {
		scaleX: 0,
		scaleY: 0,
		alpha: 0,
	});
}

function juegoColisionMensajeOut() {
	TweenMax.to("escribirMensaje", 0.5, {
		alpha: 0,
		onComplete: juegoColisionEliminarMensaje
	});
}

function juegoColisionCerrarMensaje() 
{
	juegoColisionMensajeOut();
	Timer.load(0.6, finJuegoArrastrarUnoaMuchos);
};

function finJuegoArrastrarUnoaMuchos() 
{
    
	//alert("fin");
	var contador;
	var limite = ElementosColisionC4P2.length;
	for (contador = 0; contador < limite; contador++) 
    {
		Display.removeChild(ElementosColisionC4P2[contador]);
	}
};

function removeJuegoColision() 
{
	var contador;
	var limite = ElementosColisionC4P2.length;
	for (contador = 0; contador < limite; contador++) 
    {
		Display.removeChild(ElementosColisionC4P2[contador]);
	}
	if (juegoColisionElementosMoverC4P2.length > 0) 
    {
		var contador2;
		var limite2 = juegoColisionElementosMoverC4P2.length;
		for (contador2 = 0; contador2 < limite2; contador2++) 
        {
			Display.removeChild(juegoColisionElementosMoverC4P2[contador2]);
		}
	}
};