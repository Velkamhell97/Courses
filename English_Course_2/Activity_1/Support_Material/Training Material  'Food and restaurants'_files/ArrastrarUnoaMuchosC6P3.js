// JavaScript Document
/*
 * Descripción: Juego arrastrar y soltar
 * @Autor: Diego Fernando Piedrahita Trujillo.
 * Fecha de creación: Septiembre 19, 2014
 */
/*global console, Options, Display, Text, Collision, Arrays, Sound, Timer, TweenMax, Cubic, cargarRetroalimentacionMensaje, salirContenido6*/
/****************************************************************************************** 
 * Variables de configuracion del sistema
 ******************************************************************************************/
var objetoMover2C = "pronunciacionMover2";
var posicionMover2C = {
    x: 65,
    y: 105
};
var botonPlayMover2C = "btnPlay";
var ejeMover2C = "x";
var cantidadMover2C = 7;

var objetoColision2C = "pronunciacionColision";

var posicionColision2C = {
    x: 235,
    y: 240
};
var botonPlayColision2C = "btnPlay";
var ejeColision2C = "x";

var ejePosicionColision2C = "y";
var distanciaObjetosColision2C = 5;


var textosColision2C = [
    "<span class= " + "simbPronunciacion" + "><b></b></span>",
    "<span class= " + "simbPronunciacion" + "><b></b></span>",
    "<span class= " + "simbPronunciacion" + "><b></b></span>"
];
var textosMover2C = [
    "<u>Break</u>fast",
    "<u>Car</u>ton",
    "Low-fat",
    "<u>Brocc</u>oli",
    "<u>Mush</u>room",
    "<u>Dinn</u>er",
    "<u>Me</u>lon",
    "Home<u>made</u>",
    "<u>Saus</u>age",
    "<u>Co</u>conut",
    "<u>Cu</u>cumber",
    "<u>Vege</u>table",
    "Po<u>ta</u>to"
]; 
//los elementos se almacenan por el nombre de instancia del nombre del simbolo a colicionar (pronunciacionColisiones) seguido por un numero consecutivo
var elementosCorrectos2C = {
    "pronunciacionColision": [
        "<u>Break</u>fast",
        "<u>Car</u>ton",
        "Low-fat",
        "<u>Brocc</u>oli",
        "<u>Mush</u>room",
        "<u>Dinn</u>er",
        "<u>Me</u>lon",
        "Home<u>made</u>",
        "<u>Saus</u>age"
    ],
    "pronunciacionColision1": [
        "<u>Co</u>conut",
        "<u>Cu</u>cumber",
        "<u>Vege</u>table"
    ],
    "pronunciacionColision2": [
        "Po<u>ta</u>to"
    ]
};

/****************************************************************************************** 
 * Audios de los botones
 ******************************************************************************************/
var audiosAS2C = [
    "media/contenido6/tabla2/audio19",
    "media/contenido6/tabla2/audio20",
    "media/contenido6/tabla2/audio21",
    "media/contenido6/tabla2/audio22",
    "media/contenido6/tabla2/audio23",
    "media/contenido6/tabla2/audio24",
    "media/contenido6/tabla2/audio25",
    "media/contenido6/tabla2/audio26",
    "media/contenido6/tabla2/audio27",
    "media/contenido6/tabla2/audio28",
    "media/contenido6/tabla2/audio29",
    "media/contenido6/tabla2/audio30",
    "media/contenido6/tabla2/audio31",
    "media/contenido6/tabla2/audio32",
    "media/contenido6/tabla2/audio33",
    //Audios de los botones del cuadro de colision
    "media/contenido6/tabla2/audio34",
    "media/contenido6/tabla2/audio35",
    "media/contenido6/tabla2/audio36"
];

/****************************************************************************************** 
 * Variables del sistema
 ******************************************************************************************/
var elementosMover2C;
var elementosColision2C;
var botonesPlayAS2C;
var contMal2C;
var estadoJuegoAS2C;
/******************************************************************************************
 * Inicia el juego de listas desplegables.
 ******************************************************************************************/
//Carga el juego.
function cargarJuegoAS2C() 
{
    configurarJuegoAS2C();
    cargarElementosAS2C();
}

function configurarJuegoAS2C() 
{
    Options.collision(
    {
        ejePosicionEnColision: ejePosicionColision2C
    });
}

function cargarElementosAS2C() 
{
    contMal2C = 0;
    Display.get("contenidoActividades.btnVerificar").hide();
    Display.zIndex("menu");
    iniciarColisiones2C();
}

function almacenarMover2C() 
{    
    Options.positionArray(
    {
        distanciaEntreElementos: distanciaObjetosColision2C
    });
           
    elementosMover2C = Display.addChildArray(objetoMover2C, "Stage", textosMover2C.length);
    elementosColision2C = Display.addChildArray(objetoColision2C, "Stage", textosColision2C.length);
    
    Display.addChild("pic1");
    Display.position("pic1", 270, 200);
    
    Display.addChild("pic2");
    Display.position("pic2", 460, 200);
    
    Display.addChild("pic3");
    Display.position("pic3", 655, 200);
    Display.zIndex("subMenu1");
    cargarTextos2C();
}

//la carga de los textos de los elementos es opcional, puede ser reemplazada por funciones que detienen elementos.
function cargarTextos2C() 
{
    Text.load(elementosColision2C, textosColision2C, "middle center");
    Text.load(elementosMover2C, textosMover2C, "middle");
}

//Esta funcion permite recorrer un objeto cada segundo.
function cargarObjetoFotogramas2C() 
{
    Display.stopFrame(elementosMover2C, 0, true);
}

function iniciarColisiones2C() 
{
    almacenarMover2C();
    //la comprobacion se hace con el array de textos elementosCorrectos.
    Collision.load(elementosMover2C, elementosColision2C, elementosCorrectos2C);
    Collision.finish(finJuegoColision2C);
    Collision.stateCollision(estadoColision2C);
    //despues de cargar textos y el juego de colision se desordena el array para posicionarlo
    cargarBotonesAS2C();
    cargarAudioAS2C();
    desordenarElementosMover2C();
    Display.positionArray(elementosColision2C, posicionColision2C.x, posicionColision2C.y, ejeColision2C);
    Display.positionArray(elementosMover2C, posicionMover2C.x, posicionMover2C.y, ejeMover2C, cantidadMover2C);
    
    
    Display.get(elementosColision2C[0]).stop("largo");
    Display.get(elementosColision2C[1]).stop("largo");
    Display.get(elementosColision2C[2]).stop("largo");
}

function desordenarElementosMover2C() 
{
    elementosMover2C = Arrays.random(elementosMover2C);
}

function estadoColision2C(bien2C) 
{    
    if (bien2C) 
    {
        
    } else 
    {
        
        contMal2C++;
    }
}
 
function cargarBotonesAS2C() 
{
    botonesPlayAS2C = [];
    for (var i = 0; i < elementosMover2C.length; i++) 
    {
        var elementoActual2C = elementosMover2C[i];
        botonesPlayAS2C[i] = elementoActual2C.getName(true) + "." + botonPlayMover;
    }
    for (var j = 0; j < elementosColision2C.length; j++) 
    {
        var elementoActual2aC = elementosColision2C[j];
        botonesPlayAS2C.push(elementoActual2aC.getName(true) + "." + botonPlayColision);
    }
}

function cargarAudioAS2C() 
{
    Sound.playButtons(botonesPlayAS2C, audiosAS2C);
}

function eliminarAudio2C() 
{
    Sound.removePlayButtons();
}

 
/****************************************************************************************** 
 * Validar el juego
 ******************************************************************************************/
function finJuegoColision2C() 
{
    if (contMal2C >= 8) 
    {
        estadoJuegoAS2C = "incorrecto";
        estado = "perdio";
    } 
    else 
    {
        estadoJuegoAS2C = "correcto";
        estado = "gano";
    }
    
    estadoPuntero4 = 1;
    Display.zIndex("subMenu1");
    validarEstadoCampos();
    //cargarRetroalimentacionMensaje(estadoJuegoAS);
}

function cerrarVentanaRetroalimentacion2C() 
{
    //salirContenido6();
    eliminarAudio2C();    
    //funcion siguiente.
}