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
var objetoMover = "pronunciacionMover";
var posicionMover = {
    x: 70,
    y: 130
};
var botonPlayMover = "btnPlay";
var ejeMover = "x";
var cantidadMover = 6;

var objetoColision = "pronunciacionColisiones";

var posicionColision = {
    x: 235,
    y: 290
};
var botonPlayColision = "btnPlay";
var ejeColision = "x";

var ejePosicionColision = "y";
var distanciaObjetosColision = 5;


var textosColision = [
    "<span class= " + "simbPronunciacion" + "><b>oʊ</b></span>",
    "<span class= " + "simbPronunciacion" + "><b>ɔ</b></span>",
    "<span class= " + "simbPronunciacion" + "><b>ɔr</b></span>"
];
var textosMover = [
    "<u>Au</u>bergine",
    "Man<u>go</u>",
    "<u>Fro</u>zen",
    "Avoca<u>do</u>",
    "Pota<u>to</u>",
    "<u>Yo</u>ghurt",
    "<u>Cau</u>liflower",
    "<u>Sau</u>sage",
    "Raw",
    "Salt",
    "Fork",
    "Prawns"
];
//los elementos se almacenan por el nombre de instancia del nombre del simbolo a colicionar (pronunciacionColisiones) seguido por un numero consecutivo
var elementosCorrectos = {
    "pronunciacionColisiones": [
        "<u>Au</u>bergine",
        "Man<u>go</u>",
        "<u>Fro</u>zen",
        "Avoca<u>do</u>",
        "Pota<u>to</u>",
        "<u>Yo</u>ghurt"
    ],
    "pronunciacionColisiones1": [
        "<u>Cau</u>liflower",
        "<u>Sau</u>sage",
        "Raw",
        "Salt"
    ],
    "pronunciacionColisiones2": [
        "Fork",
        "Prawns"
    ]
};

/****************************************************************************************** 
 * Audios de los botones
 ******************************************************************************************/
var audiosAS = [
    "media/contenido6/tabla1/audio1",
    "media/contenido6/tabla1/audio2",
    "media/contenido6/tabla1/audio3",
    "media/contenido6/tabla1/audio4",
    "media/contenido6/tabla1/audio5",
    "media/contenido6/tabla1/audio6",
    "media/contenido6/tabla1/audio7",
    "media/contenido6/tabla1/audio8",
    "media/contenido6/tabla1/audio9",
    "media/contenido6/tabla1/audio10",
    "media/contenido6/tabla1/audio11",
    "media/contenido6/tabla1/audio12",
    "media/contenido6/tabla1/audio16",
    "media/contenido6/tabla1/audio17",
    "media/contenido6/tabla1/audio18",
    //Audios de los botones del cuadro de colision
    "media/contenido6/tabla1/audio16",
    "media/contenido6/tabla1/audio17",
    "media/contenido6/tabla1/audio18"
];

/****************************************************************************************** 
 * Variables del sistema
 ******************************************************************************************/
var elementosMover;
var elementosColision;
var botonesPlayAS;
var contMal;
var estadoJuegoAS;
/******************************************************************************************
 * Inicia el juego de listas desplegables.
 ******************************************************************************************/
//Carga el juego.
function cargarJuegoAS() {
     
    configurarJuegoAS();
    cargarElementosAS();
}

function configurarJuegoAS() 
{
    Options.collision(
    {
        ejePosicionEnColision: ejePosicionColision
    });
}

function cargarElementosAS() 
{
    contMal = 0;
    Display.get("contenidoActividades.btnVerificar").hide();
    Display.zIndex("menu");
    iniciarColisiones();
}

function almacenarMover() 
{    
    Options.positionArray(
    {
        distanciaEntreElementos: distanciaObjetosColision
    });
    
    elementosMover = Display.addChildArray(objetoMover, "Stage", textosMover.length);
    elementosColision = Display.addChildArray(objetoColision, "Stage", textosColision.length);

    cargarTextos();
    //cargarObjetoFotogramas();//Se usa solo si se necesita.
    Display.zIndex("subMenu1");
}

//la carga de los textos de los elementos es opcional, puede ser reemplazada por funciones que detienen elementos.
function cargarTextos() 
{
    Text.load(elementosColision, textosColision, "middle center");
    Text.load(elementosMover, textosMover, "middle");
}

//Esta funcion permite recorrer un objeto cada segundo.
function cargarObjetoFotogramas() 
{
    Display.stopFrame(elementosMover, 0, true);
}

function iniciarColisiones() 
{
    almacenarMover();
    //la comprobacion se hace con el array de textos elementosCorrectos.
    Collision.load(elementosMover, elementosColision, elementosCorrectos);
    Collision.finish(finJuegoColision);
    Collision.stateCollision(estadoColision);
    //despues de cargar textos y el juego de colision se desordena el array para posicionarlo
    cargarBotonesAS();
    cargarAudioAS();
    desordenarElementosMover();
    Display.positionArray(elementosColision, posicionColision.x, posicionColision.y, ejeColision);
    Display.positionArray(elementosMover, posicionMover.x, posicionMover.y, ejeMover,       cantidadMover);
    
}

function desordenarElementosMover() 
{
    elementosMover = Arrays.random(elementosMover);
}

function estadoColision(bien) 
{
    if (bien) 
    {
        
    } else 
    {
       
        contMal++;
    }
}
 
function cargarBotonesAS() 
{
    botonesPlayAS = [];
    for (var i = 0; i < elementosMover.length; i++) 
    {
        var elementoActual = elementosMover[i];
        botonesPlayAS[i] = elementoActual.getName(true) + "." + botonPlayMover;
    }
    for (var j = 0; j < elementosColision.length; j++) 
    {
        var elementoActual2 = elementosColision[j];
        botonesPlayAS.push(elementoActual2.getName(true) + "." + botonPlayColision);
    }
}

function cargarAudioAS() 
{
    Sound.playButtons(botonesPlayAS, audiosAS);
}

function eliminarAudio() 
{
    Sound.removePlayButtons();
}


/****************************************************************************************** 
 * Validar el juego
 ******************************************************************************************/
function finJuegoColision() 
{
    if (contMal >= 7) 
    {
        estadoJuegoAS = "incorrecto";
        estado = "perdio";
    } 
    else 
    {
        estadoJuegoAS = "correcto";
        estado = "gano";
    }
    
    estadoPuntero1 = 1;
    Display.zIndex("subMenu1");
    validarEstadoCampos();
    //cargarRetroalimentacionMensaje(estadoJuegoAS);
}

function cerrarVentanaRetroalimentacion() 
{
    //salirContenido6();
    eliminarAudio();
    //funcion siguiente.
}