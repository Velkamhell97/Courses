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
var objetoMover2 = "pronunciacionMover2";
var posicionMover2 = {
    x: 120,
    y: 140
};
var botonPlayMover2 = "btnPlay";
var ejeMover2 = "x";
var cantidadMover2 = 6;

var objetoColision2 = "pronunciacionColisiones";

var posicionColision2 = {
    x: 330,
    y: 280
};
var botonPlayColision2 = "btnPlay";
var ejeColision2 = "x";

var ejePosicionColision2 = "y";
var distanciaObjetosColision2 = 8;


var textosColision2 = [
    "<span class= " + "simbPronunciacion" + "><b>r</b></span>",
    "<span class= " + "simbPronunciacion" + "><b>l</b></span>",
];
var textosMover2 = [
    "Aspa<u>r</u>agus",
    "Strawbe<u>rr</u>y",
    "B<u>r</u>occoli",
    "<u>R</u>aw",
    "Che<u>rr</u>y",
    "G<u>r</u>ape",
    "<u>R</u>eservation",
    "Ce<u>l</u>ery",
    "Gar<u>l</u>ic",
    "<u>L</u>amb",
    "Mi<u>l</u>k"
];
//los elementos se almacenan por el nombre de instancia del nombre del simbolo a colicionar (pronunciacionColisiones) seguido por un numero consecutivo
var elementosCorrectos2 = {
    "pronunciacionColisiones": [
        "Aspa<u>r</u>agus",
        "Strawbe<u>rr</u>y",
        "B<u>r</u>occoli",
        "<u>R</u>aw",
        "Che<u>rr</u>y",
        "G<u>r</u>ape",
        "<u>R</u>eservation"
    ],
    "pronunciacionColisiones1": [
        "Ce<u>l</u>ery",
        "Gar<u>l</u>ic",
        "<u>L</u>amb",
        "Mi<u>l</u>k"
    ],
};

/****************************************************************************************** 
 * Audios de los botones
 ******************************************************************************************/
var audiosAS2 = [
    "media/contenido6/tabla2/audio1",
    "media/contenido6/tabla2/audio2",
    "media/contenido6/tabla2/audio3",
    "media/contenido6/tabla2/audio4",
    "media/contenido6/tabla2/audio5",
    "media/contenido6/tabla2/audio6",
    "media/contenido6/tabla2/audio7",
    "media/contenido6/tabla2/audio8",
    "media/contenido6/tabla2/audio9",
    "media/contenido6/tabla2/audio10",
    "media/contenido6/tabla2/audio11",
    "media/contenido6/tabla2/audio12",
    "media/contenido6/tabla2/audio13",
    "media/contenido6/tabla2/audio14",
    "media/contenido6/tabla2/audio15",
    //Audios de los botones del cuadro de colision
    "media/contenido6/tabla2/audio16",
    "media/contenido6/tabla2/audio17",
    "media/contenido6/tabla2/audio18"
];

/****************************************************************************************** 
 * Variables del sistema
 ******************************************************************************************/
var elementosMover2;
var elementosColision2;
var botonesPlayAS2;
//var contMal2;
var estadoJuegoAS2;
/******************************************************************************************
 * Inicia el juego de listas desplegables.
 ******************************************************************************************/
//Carga el juego.
function cargarJuegoAS2() {
    
    configurarJuegoAS2();
    cargarElementosAS2();
}

function configurarJuegoAS2() 
{
    Options.collision(
    {
        ejePosicionEnColision: ejePosicionColision2
    });
}

function cargarElementosAS2() 
{
    //contMal2 = 0;
    Display.get("contenidoActividades.btnVerificar").hide();
    Display.zIndex("menu");
    iniciarColisiones2();
}

function almacenarMover2() 
{    
    Options.positionArray(
    {
        distanciaEntreElementos: distanciaObjetosColision2
    });
    
    elementosMover2 = Display.addChildArray(objetoMover2, "Stage", textosMover2.length);
    elementosColision2 = Display.addChildArray(objetoColision2, "Stage", textosColision2.length);

    cargarTextos2();
    //cargarObjetoFotogramas();//Se usa solo si se necesita.
    Display.zIndex("subMenu1");
}

//la carga de los textos de los elementos es opcional, puede ser reemplazada por funciones que detienen elementos.
function cargarTextos2() 
{
    Text.load(elementosColision2, textosColision2, "middle center");
    Text.load(elementosMover2, textosMover2, "middle");
}

//Esta funcion permite recorrer un objeto cada segundo.
function cargarObjetoFotogramas2() 
{
    Display.stopFrame(elementosMover2, 0, true);
}

function iniciarColisiones2() 
{
    almacenarMover2();
    //la comprobacion se hace con el array de textos elementosCorrectos.
    Collision.load(elementosMover2, elementosColision2, elementosCorrectos2);
    Collision.finish(finJuegoColision2);
    Collision.stateCollision(estadoColision2);
    //despues de cargar textos y el juego de colision se desordena el array para posicionarlo
    cargarBotonesAS2();
    cargarAudioAS2();
    desordenarElementosMover2();
    Display.positionArray(elementosColision2, posicionColision2.x, posicionColision2.y, ejeColision2);
    Display.positionArray(elementosMover2, posicionMover2.x, posicionMover2.y, ejeMover2, cantidadMover2);
    
}

function desordenarElementosMover2() 
{
    elementosMover2 = Arrays.random(elementosMover2);
}

function estadoColision2(bien2) 
{
    if (bien2) 
    {
        
    } else 
    {
       
        contMal2++;
    }
    
    console.log("contMal2: ", contMal2);
}

function cargarBotonesAS2() 
{
    botonesPlayAS2 = [];
    for (var i = 0; i < elementosMover2.length; i++) 
    {
        var elementoActual2 = elementosMover2[i];
        botonesPlayAS2[i] = elementoActual2.getName(true) + "." + botonPlayMover;
    }
    for (var j = 0; j < elementosColision2.length; j++) 
    {
        var elementoActual2a = elementosColision2[j];
        botonesPlayAS2.push(elementoActual2a.getName(true) + "." + botonPlayColision);
    }
}

function cargarAudioAS2() 
{
    Sound.playButtons(botonesPlayAS2, audiosAS2);
}

function eliminarAudio2() 
{
    Sound.removePlayButtons();
}


/****************************************************************************************** 
 * Validar el juego
 ******************************************************************************************/
function finJuegoColision2() 
{
    if (contMal2 >= 6) 
    {
        estadoJuegoAS2 = "incorrecto";
        estado = "perdio";
    } 
    else 
    {
        estadoJuegoAS2 = "correcto";
        estado = "gano";
    }
    
    estadoContMal = true;
    Display.zIndex("subMenu1");
    estadoPuntero2 = 1;
    //validarEstadoCampos();
    //cargarRetroalimentacionMensaje(estadoJuegoAS);
}

function cerrarVentanaRetroalimentacion2() 
{
    //salirContenido6();
    eliminarAudio2();
    //funcion siguiente.
}