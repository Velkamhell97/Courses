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
var objetoMover2b = "pronunciacionMover2";
var posicionMover2b = {
    x: 120,
    y: 140
};
var botonPlayMover2b = "btnPlay";
var ejeMover2b = "x";
var cantidadMover2b = 6;

var objetoColision2b = "pronunciacionColisiones";

var posicionColision2b = {
    x: 330,
    y: 280
};
var botonPlayColision2b = "btnPlay";
var ejeColision2b = "x";

var ejePosicionColision2b = "y";
var distanciaObjetosColision2b = 8;


var textosColision2b = [
    "<span class= " + "simbPronunciacion" + "><b>r</b></span>",
    "<span class= " + "simbPronunciacion" + "><b>l</b></span>",
];
var textosMover2b = [
    "D<u>r</u>ink",
    "Marga<u>r</u>ine",
    "<u>R</u>ice",
    "Ca<u>r</u>ton",
    "Ga<u>r</u>lic",
    "Blackbe<u>rr</u>y",
    "C<u>r</u>eam",
    "Sa<u>l</u>t",
    "Bott<u>l</u>e",
    "<u>L</u>ettuce",
    "<u>L</u>unch"
];
//los elementos se almacenan por el nombre de instancia del nombre del simbolo a colicionar (pronunciacionColisiones) seguido por un numero consecutivo
var elementosCorrectos2b = {
    "pronunciacionColisiones": [
        "D<u>r</u>ink",
        "Marga<u>r</u>ine",
        "<u>R</u>ice",
        "Ca<u>r</u>ton",
        "Ga<u>r</u>lic",
        "Blackbe<u>rr</u>y",
        "C<u>r</u>eam"
    ],
    "pronunciacionColisiones1": [
        "Sa<u>l</u>t",
        "Bott<u>l</u>e",
        "<u>L</u>ettuce",
        "<u>L</u>unch"
    ],
};

/****************************************************************************************** 
 * Audios de los botones
 ******************************************************************************************/
var audiosAS2b = [
    "media/contenido6/tabla2b/audio1",
    "media/contenido6/tabla2b/audio2",
    "media/contenido6/tabla2b/audio3",
    "media/contenido6/tabla2b/audio4",
    "media/contenido6/tabla2b/audio5",
    "media/contenido6/tabla2b/audio6",
    "media/contenido6/tabla2b/audio7",
    "media/contenido6/tabla2b/audio8",
    "media/contenido6/tabla2b/audio9",
    "media/contenido6/tabla2b/audio10",
    "media/contenido6/tabla2b/audio11",
    "media/contenido6/tabla2b/audio12",
    "media/contenido6/tabla2b/audio13",
    "media/contenido6/tabla2b/audio14",
    "media/contenido6/tabla2b/audio15",
    //Audios de los botones del cuadro de colision
    "media/contenido6/tabla2b/audio16",
    "media/contenido6/tabla2b/audio17",
    "media/contenido6/tabla2b/audio18"
];

/****************************************************************************************** 
 * Variables del sistema
 ******************************************************************************************/
var elementosMover2b;
var elementosColision2b;
var botonesPlayAS2b;
//var contMal2b;
var estadoJuegoAS2b;
/******************************************************************************************
 * Inicia el juego de listas desplegables.
 ******************************************************************************************/
//Carga el juego.
function cargarJuegoAS2b() {
    
    configurarJuegoAS2b();
    cargarElementosAS2b();
    
    console.log("contMal2: ", contMal2);
}

function configurarJuegoAS2b() 
{
    Options.collision(
    {
        ejePosicionEnColision: ejePosicionColision2b
    });
}

function cargarElementosAS2b() 
{
    //contMal2 = 0;
    Display.get("contenidoActividades.btnVerificar").hide();
    Display.zIndex("menu");
    iniciarColisiones2b();
}

function almacenarMover2b() 
{    
    Options.positionArray(
    {
        distanciaEntreElementos: distanciaObjetosColision2b
    });
    
    elementosMover2b = Display.addChildArray(objetoMover2b, "Stage", textosMover2b.length);
    elementosColision2b = Display.addChildArray(objetoColision2b, "Stage", textosColision2b.length);

    cargarTextos2b();
    //cargarObjetoFotogramas();//Se usa solo si se necesita.
    Display.zIndex("subMenu1");
}

//la carga de los textos de los elementos es opcional, puede ser reemplazada por funciones que detienen elementos.
function cargarTextos2b() 
{
    Text.load(elementosColision2b, textosColision2b, "middle center");
    Text.load(elementosMover2b, textosMover2b, "middle");
}

//Esta funcion permite recorrer un objeto cada segundo.
function cargarObjetoFotogramas2b() 
{
    Display.stopFrame(elementosMover2b, 0, true);
}

function iniciarColisiones2b() 
{
    almacenarMover2b();
    //la comprobacion se hace con el array de textos elementosCorrectos.
    Collision.load(elementosMover2b, elementosColision2b, elementosCorrectos2b);
    Collision.finish(finJuegoColision2b);
    Collision.stateCollision(estadoColision2b);
    //despues de cargar textos y el juego de colision se desordena el array para posicionarlo
    cargarBotonesAS2b();
    cargarAudioAS2b();
    desordenarElementosMover2b();
    Display.positionArray(elementosColision2b, posicionColision2b.x, posicionColision2b.y, ejeColision2b);
    Display.positionArray(elementosMover2b, posicionMover2b.x, posicionMover2b.y, ejeMover2, cantidadMover2b);
    
}

function desordenarElementosMover2b() 
{
    elementosMover2b = Arrays.random(elementosMover2b);
}

function estadoColision2b(bien2b) 
{
    if (bien2b) 
    {
        
    } else 
    {
       
        contMal2b++;
    }
    
    console.log("contMal2b: ", contMal2b);
}

function cargarBotonesAS2b() 
{
    botonesPlayAS2b = [];
    for (var i = 0; i < elementosMover2b.length; i++) 
    {
        var elementoActual2b = elementosMover2b[i];
        botonesPlayAS2b[i] = elementoActual2b.getName(true) + "." + botonPlayMover;
    }
    for (var j = 0; j < elementosColision2b.length; j++) 
    {
        var elementoActual2ab = elementosColision2b[j];
        botonesPlayAS2b.push(elementoActual2ab.getName(true) + "." + botonPlayColision);
    }
}

function cargarAudioAS2b() 
{
    Sound.playButtons(botonesPlayAS2b, audiosAS2b);
}

function eliminarAudio2b() 
{
    Sound.removePlayButtons();
}


/****************************************************************************************** 
 * Validar el juego
 ******************************************************************************************/
function finJuegoColision2b() 
{
    sumContMal = contMal2 + contMal2b;
    
    if (sumContMal >= 11) 
    {
        estadoJuegoAS2b = "incorrecto";
        estado = "perdio";
    } 
    else 
    {
        estadoJuegoAS2b = "correcto";
        estado = "gano";
    }
    
    estadoPuntero3 = 1;
    
    if(estadoContMal == true)
    {
      validarEstadoCampos();
      contMal2 = 0;
      contMal2b = 0;
      sumContMal = 0;
      estadoContMal = false;
    }
    //cargarRetroalimentacionMensaje(estadoJuegoAS);
    Display.zIndex("subMenu1");
    console.log("sumContMal: ", sumContMal);
}

function cerrarVentanaRetroalimentacion2b() 
{
    //salirContenido6();
    eliminarAudio2b();
    //funcion siguiente.
}