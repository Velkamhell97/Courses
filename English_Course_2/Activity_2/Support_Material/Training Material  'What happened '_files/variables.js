/*jslint devel: true, ass: true, bitwise: true, eqeq: true, plusplus: true, regexp: true, sloppy: true, stupid: false, sub: true, todo: true, vars: true, white: true*/
/**********************************************************************************************/
/************************* VARIABLEA MAIN *********************************************/
/**********************************************************************************************/
//Nombre de los botones que se encuentran en menu, tambien pueden ser objetos cargados con addChildArray.
var btnPrincipales = [
       "menu.menuBoton1",
       "menu.menuBoton2",
       "menu.menuBoton3",
       "menu.menuBoton4",
       "menu.menuBoton5",
       "menu.menuBoton6",
       "menu.menuBoton7"
      ];

// Menu de contenidos
var menuContenidos = [
        "contenido1",
       "contenido2",
       "contenido3",
       "contenido4",
       "contenido5",
       "contenido6",
       "contenido7"
    ];

// Menu de contenidos
var ArraySubMenu1 = {
	"menuBoton4": [
    "subMenu1"
  ],
	"menuBoton5": [
    "subMenu2"
  ],
	"menuBoton6": [
    "subMenu3"
 ],
	"menuBoton7": [
    "subMenu4"
 ]
}

// Menu de contenidos
var ArrayFlechaSubMenu1 = {
	"menuBoton4": [
    "subMenu1.flecha1"
  ],
	"menuBoton5": [
    "subMenu2.flecha2"
  ],
	"menuBoton6": [
    "subMenu3.flecha3"
 ],
	"menuBoton7": [
    "subMenu4.flecha4"
 ]
}

var ArrayBotonesSubMenu1 = {
	"menuBoton4": [
    "btnSubmenu1a",
    "btnSubmenu2a",
    "btnSubmenu3a",
    "btnSubmenu4a"
  ],
	"menuBoton5": [
    "btnSubmenu1b",
    "btnSubmenu2b",
    "btnSubmenu3b",
    "btnSubmenu4b"
  ],
	"menuBoton6": [
    "btnSubmenu1c",
    "btnSubmenu2c",
    "btnSubmenu3c"
 ],
	"menuBoton7": [
    "btnSubmenu1d",
    "btnSubmenu2d",
    "btnSubmenu3d",
    "btnSubmenu4d"
 ]
}

JESmensajes = {
	"bien": "Mensaje Correcto",
	"mal": "Mensaje Incorrecto",
	"perdio": "You can do better. Try  again.",
	"gano": "Very good job. Keep it up."
};
var ElementoSubmenu;
var refBoton;
var Posicion;
var funcioncall;
var TiempoEntrada;
var TemporalBotones;
var finalJuegoTotal = false;
var btnActual = ""; // Determina cuál es la sección actual.
var nivelMenu = 0;
var ArrayTemporalBotones = [];
var elementosBotones = [];
var elementosBotones2 = [];
var elementosBotonesTotal = [];
//funciones que retornan cada uno de los botones cuando es presionado, en este caso los bloques de cada seccion.
var functionesRetornoMenu = [
 introductionCargar,
 contextualizationCargar,
 comprehensionCargar,
 practiceOneCargar,
 practiceTwoCargar,
 practiceThreeCargar,
 PonunciationCargar
];
var conadormalas = 0;
var cantidadPuntos;
var estadoBienvenida = 0;
var contadorOpciones = 0;
var PosicionFinalPresentacion=false;
var arrayBotonesPreguntasAudio = [
 "mcJuegoPreguntas.BtnJuegoPreguntasAudio.btnA",
 "mcJuegoPreguntas.BtnJuegoPreguntasAudio.btnB",
 "mcJuegoPreguntas.BtnJuegoPreguntasAudio.btnC",
 "mcJuegoPreguntas.BtnJuegoPreguntasAudio.btnD"
];


var JPAudioOpcion = 0;

var btnNavContenidosAde = ["contenido1.ventana.botonAdelante",
                           "contenido2.ventana.botonAdelante",
                           "contenido3.ventana.botonAdelante",
                           "contenido4.ventana.botonAdelante",
                           "contenido5.ventana.botonAdelante",
                           "contenido6.ventana.botonAdelante",
                           "contenido7.ventana.botonAdelante"];

var btnNavContenidosAtr = ["contenido1.ventana.botonAtras",
                           "contenido2.ventana.botonAtras",
                           "contenido3.ventana.botonAtras",
                           "contenido4.ventana.botonAtras",
                           "contenido5.ventana.botonAtras",
                           "contenido6.ventana.botonAtras",
                           "contenido7.ventana.botonAtras"];

var ContadorActualActividades = [];
/**********************************************************************************************/
/****************************************** VARIABLE JUEGO COMPLETAR *************************/
/**********************************************************************************************/
var JESOpcionesBuenas;
var JESIdinputs;
//este puede estar en un archivo HTML independiente o se envia como un string.
var JESmensajes;
var JESBotonVerificar;
var JESContenedorIntentos;
var JESContenedorPrincipal;
var JESidFormulario;
var JESValues;
var JESbuenas;
var JESIntentos;
var JESestadoJuego;
var JESventanaMensaje;
var JESventanaModal;
var JESActividad1A;
var JESActividad2A;
var JESActividad3A;
var JESActividad4A;
var JESActividad5A;
var JESActividad6A;
var JESActividad7A;
var JESContadorGlobal = [];
var JESContadorInputs = 0;
var JESContadorActividades = 0;
var JESCantidadActividades = [];
var JESPosicionArray;
//var JESCantidadActividades = 0;
/************************************** FIN ***************************************************/
/************************* Variables Juego Arrarar y soltar 1 a muchos ******************************/
var JASArrayAudios = [];
//js Arrastrar Soltar
var ArrastrarSoltar1;
var ArrastrarSoltar2;
var ArrastrarSoltar3;
var ArrastrarSoltar4;
var ArrastrarSoltar5;
var ArrastrarSoltar6;
var ArrastrarSoltar7;
var ArrastrarSoltar8;
var ArrastrarSoltar81;
var ArrastrarSoltar9;
var ArrastrarSoltar10;
var estadoJuego1UnoaUno = false;
var estadoJuego2UnoaUno = false;
var estadoJuego3UnoaUno = false;
var estadoJuego4UnoaUno = false;
var estadoJuego1bUnomuchos = false;
var estadoJuego11bUnomuchos = false;
var estadoJuego1cUnomuchos = false;

var ElementosArrastrar;
var ElementosColision = [];
var PosicionesElementosX1 = [];
var PosicionesElementosY1 = [];
var PosicionesElementosX1 = [];
var PosicionesInicialElementosX1;
var PosicionesInicialElementosY1;
var PosicionesInicialElementosX2;
var PosicionesInicialElementosY2;
//Si no se necesita textos dejar vacio el array
var juegoColisionTextosMover;

//los elementos se almacenan por el nombre de instancia de colisionColision seguido por un numero consecutivo
//se debe ingresar el texto del elemento mover correcto, o la instancia del objeto mover
var juegoColisionElementosCorrectos;

var juegoColisionMensajes;
var juegoColisionElementosColision = [];
var juegoColisionElementosMover = [];
var juegoColisionIntentos;
var juegoColisionContenedorIntentos;
var juegoColisionEstadoJuego;
var estadoColisionFinal;
var juegoColisionContadorGlobal;
var PosicionArrayJuegoMaM;
var juegoColisionContadorActividades = [];
var juegoColisionCantidadActividades = 2;
/******************************************** fin ****************************/


/************************************* Varibles Juego Colision 1 a 1 ********************************/
var ElementoArrastrar;
var ElementoObjetivo;
var Textos;
var PosicionesElementosX;
var PosicionesElementosY;
var Elementos1;
var Elementos2;
var Temporal1 = [];
var Temporal2 = [];
var juegoColisionUnoaUnoEstadoJuego = "perdio";
var PosicionInicialX;
var PosicionInicialY;
var juegoColisionUnoaUnoIntentos;
var juegoColisionUnoaUnoMensajes = [];
var estadoInAnimacion = false;
var Textos1;
var Textos2;
var JCUnPosicionArray;
var JCUnContadorGlobal;
var JCUnContadorActividades = [];
var JCUnCantidadActividades = 2;
/*********************************** fin **********************************************************/

/**********************************************************************************************/
/****************************************** VARIABLE JUEGO FALSO VERDADERO ******************/
/**********************************************************************************************/
/*global Display,Cubic,TweenMax,Event,Arrays,console,Text,Button,$,Timer,Options,Back,cambiarPractica1*/
var resultado;
var ElementosValidacionFinal;
var resul;
var boton;
var JuegoFVactividad2;
var JuegoFVactividad1;
//JuegoFV
//llamar a la funcion JuegoFVCargar();
var arrayVisibles;
var estadoFuegoFv;
var estadoFuegoFv2;
var JuegoFVVentana;
var JuegoFVPosicionVentana;
var JuegoFVBotonVerificar;
var JuegoFVBotonContinuar;
var JuegoFVPosicionVerificar;
var JuegoFVMensaje;
var JuegoFVPosicionMensaje;
var JuegoFVBotonCerrar;
var JuegoFVModal;
var JuegoFVCheck;
var JuegoFVPosicionCheck;
var conprensionDistanciaCheck;
var JuegoFVRespuestasCorrectas;
var refPagina;
var JuegoFVMensajes;
var JuegoFVTextoPregunta;
//var JuegoFVFondo = "escena2";
var JuegoFVFuncionFinal;
var posicionArray;
var JuegoFVBotones;
var JuegoFVOpcionesSeleccionadas;
var JuegoFVIntentos;
var JuegoFVIntentos2;
var JuegoFVIntentosBuenos;
var JuegoFVIntentosMalos;
var JuegoFVResultado;
var JuegoFVMensajesCargados;
var JuegoFVJuegoTermino;
var JuegoFvContenedorIntentos;
var JuegoFvEstadoActividad1 = false;
var JuegoFvEstadoActividad2 = false;
var JuegoFvEstadoContadorGlobal = [];
var JuegoFvEstadoContadorActividades = 2;
var JuegoFvEstadoCantidadActividades = [];
var JuegoFvPosicionArray;
/**********************************************************************************************/
/************************************** VARIABLES JUEGO SELECT ********************************/
/*********************************************************************************************/


// JavaScript Document
/**
 * Descripción:
 * Clase para realizar la interacción con el usuario.
 * @autor: Diego Fernando Piedrahita Trujillo.
 * Fecha de creación: Septiembre 1, 2014
 */
/*global console, Display, Event, Timer, Text, Button, Presentation, TweenMax, document, $, alert*/
/*jshint -W032 */
/******************************************************************************************
 * Inicia el juego de listas desplegables.
 ******************************************************************************************/
var contenedorJuegoLS; //se almacena el nombre del contenedor del juego.
var rutaJuegoLS; //se almacena la ruta del archivo HTML en el que se encuentra el juego.
var botonVerificarLS; //se almacena la ruta del botón verificar del juego.
var contenedorIntentosLS; //se almacena la ruta del contenedor de los intentos.
var ventanaMensajeLS; //se almacena el nombre de la ventana de los mensajes.
var cantidadSlideLS; //variable donde indicamos la cantidad de slide en el que se encuentra el juego.
var intentosLS; //cantidad de intentos que tiene el juego.
var IdinputsLS;
//este puede estar en un archivo HTML independiente o se envia como un string.
var mensajesLS;
var seleccionLS; //almacena todos los archivos del formulario.
var valoresLS = []; //almacena los valores seleccionados en el select.
var buenasLS = 0; //variable que almacena cuantas selecciones correctas hay.
var estadoJuegoLS; //me envia el estado del juego (Correcto, Perdio o Incorrecto).
var Actividad1LS;
var Actividad2LS;
var estadofinaljuego;
var LSContadorGlobal;
var LSContadorActividades = [];
var LSCantidadActividades = 5;
var LSPosicionArray;
/************************************* FIN *********************************************/

/**************************** JUEGOS CON AUDIOS ************************************/
/**********************************************************************************************/
/************************************** VARIABLES JUEGO PREGUNTA CON AUDIOS *******************/
/*********************************************************************************************/
var estadoJuego1PreguntasAudio = false; //Variables que controlan
var estadoJuego2PreguntasAudio = false;
var estadoJuego3PreguntasAudio = false;
var estadoJuego4PreguntasAudio = false;
var estadoJPSinAudio1 = false;
var estadoJuegoPreguntasSinAudio = false;
var estadoJuegoPreguntasSinAudio2 = false;

var JPCambioDeActividades = [
 JPCargarActividad1,
 JPCargarActividad2,
 JPCargarActividad3
];
var JPaudioRutashtml;
var JPAudiosBtn;
var JParrayAudios;
var JPAudiomensajes;
var arrayFunciones;
var JPAudiocontenedor;
var JPaudioBotonPlay;
var JPaudioContenedorTexto;
var JPaudioventanaMensaje;
var JPaudiosventanaModal;
var JPAudioestadoJuego;
var JPContadorRutaAudios;
var JPAudioIntentos;
var JPAudiosBuenos;
var JPAudiosContenedorintentosPreguntas;
var JPSiguienteactividad;
var JPAudioEstadoJuego = false;
var actividad2;
var JPAudioOpcion;
var JPAUPosicionArray;
var JPAUContadorGlobal = [];
var JPAUContadorActividades = [];
var JPAUCantidadActividades = 5;
var JPAUEstadoJuego;
var JPAUReelemento;
/************************************* FIN *********************************************/

/*************************************************************************************************/
/***************************** Juegos  de preguntas sin audios ***********************************/
/*************************************************************************************************/
//------------------  ----------------
/************************ Actividad 1 ******************/
// variables de control para los juegos.
var estadoJuegoPreguntasSinAudio1 = false; // variable que controla  cuando termina la actividad1 y de pregunta sin audio.
var estadoJuegoPreguntasSinAudio2 = false; // variable que controla  cuando termina la actividad2 y de pregunta sin audio.
var estadoJuegoPreguntasSinAudio3 = false; // variable que controla  cuando termina la actividad2 y de pregunta sin audio.

// variables para el juego.
var JPBotonesPreguntas;

var JPSubindiceBotonesPreguntas;
//varible elementos*/
var JPContenedorPrincipal = [];
var JContenedorintentosPreguntas;
var JPventanaMensaje;
var JPventanaModal;
var JPBotonVerificar;
//este puede estar en un archivo HTML independiente o se envia como un string.
var JPmensajes;
var JPcontadoresClick;
var JPcontadorgrupos;
var JPintentos;
var JPtemp = [];
var JPtemp2 = [];
var JPElementoTemporal = [];
var JPPuntosBuenos;
var JPPuntosMalos;
var JPclasificaGrupo = [];
var JPNombre;
var JPSubgrupo;
var JPcontadorActividades;
var JPestadoJuego = "perdio"; //me envia el estado del juego (Correcto, Perdio o Incorrecto).
var JPAudiosContadorGlobal = [];
var JPAudiosPosicion;
var JPAudiosContadorActividades = [];
var JPAudiosCantidadActividades = 2;
/*------------------------ seguna tipo de actividad------------------------------*/
var JPAudiosPosicion2;
var JPAudiosContadorActividades2 = [];
var JPAudiosCantidadActividades2 = 5;
/*------------------------ seguna tipo de actividad------------------------------*/
var JPAudiosPosicion3;
var JPAudiosContadorActividades3 = [];
var JPAudiosCantidadActividades3 = 2;
/********************************* FIN ********************************************/

/*************************************************************************************************/
/***************************** VARIABLE Juegos  de preguntas con audios **************************/
/*************************************************************************************************/
var JPBotonesPreguntasActividad3;
var JPBotonesAudioActividad3;
var JPAudiosActividad3;
var JPSubindiceBotonesPreguntasActividad3;
var JPContenedorPrincipalActividad3;
var JContenedorintentosPreguntasActividad3;
var JPventanaMensajeActividad3;
var JPventanaModalActividad3;
var JPBotonVerificarActividad3;
var JPmensajesActividad3;
var JPCambioDeActividadesActividad3;
var JPcontadoresClickActividad3;
var JPcontadorgruposActividad3;
var JPintentosActividad3;
var JPtempActividad3;
var JPtemp2Actividad3;
var JPElementoTemporalActividad3;
var JPPuntosBuenosActividad3;
var JPPuntosMalosActividad3;
var JPclasificaGrupoActividad3;
var JPNombreActividad3;
var JPSubgrupoActividad3;
var JPcontadorActividad3;
var JPestadoJuegoActividad3;
var actividad3Actividad3;
var actividad2Actividad3;
var actividad1Actividad3;
var JPEstadoActivoActividad3;
var JPContadorGlobal = [];
var JPContadorActividades = 0;
var JPCantidadActividades = 2;
/********************************* FIN ********************************************/
