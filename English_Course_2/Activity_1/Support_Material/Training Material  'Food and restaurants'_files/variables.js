var estadoPuntero1 = 0;
var estadoPuntero2 = 0;
var estadoPuntero2b = 0;
var estadoPuntero3 = 0;
var estadoPuntero4 = 0;
var valorTotalEstadoPuntero = 0;
var valorTotalEstadoPunteroMenu6 = 0;

var estadoReincio = 0;
var nivelActiCont3;
var nivelActiCont4;
var nivelActiCont5;
var nivelActiCont6;

var estadoArrayC6 = 0;

var estadoVentanaActiviades = 0;

var contMal2 = 0;
var contMal2b = 0;
var sumContMal = 0;
var estadoContMal = false;
var buenasInput = 0;

var JESOpcionesBuenas;
var buenas = 0;
var buenas2 = 0;
var buenas3 = 0;
var buenas4 = 0;

/********************************* ARRAY MENU SUPERIOR ***************************/
var btnPrincipales = ["menu.menuBoton1",
                      "menu.menuBoton2",
                      "menu.menuBoton3",
                      "menu.menuBoton4",
                      "menu.menuBoton5",
                      "menu.menuBoton6"];

/********************************* ARRAY MENU INFERIOR ***************************/
var btnSubmenu = ["subMenu1.menuBoton1",
                  "subMenu1.menuBoton2",
                  "subMenu1.menuBoton3",
                  "subMenu1.menuBoton4"];

var btnVerify = Display.addChild("botonVerificar");
 
var btnActual = ""; // Determina cuál es la sección actual.
var nivelMenu = 0;
var nivelSubMenu = 0;
var nivelAudioInicio = 0;
var menuSup;
var estadoArrayFV = 0;
var estadoArrayFV2 = 0;
 
// Menu de contenidos
/********************************* ARRAY CONTENIDOS ***************************/
var menuContenidos = ["contenido1",
                      "contenido2",
                      "contenido3",
                      "contenido4",
                      "contenido5",
                      "contenido6"];

/********************** ARRAY OVER BTNs ADELANTE Y ATRAS ************************/
var btnNavContenidosAde = ["contenido1.ventana.botonAdelante",
                           "contenido2.ventana.botonAdelante",
                           "contenido3.ventana.botonAdelante",
                           "contenido4.ventana.botonAdelante",
                           "contenido5.ventana.botonAdelante",
                           "contenido6.ventana.botonAdelante"];

var btnNavContenidosAtr = ["contenido1.ventana.botonAtras",
                           "contenido2.ventana.botonAtras",
                           "contenido3.ventana.botonAtras",
                           "contenido4.ventana.botonAtras",
                           "contenido5.ventana.botonAtras",
                           "contenido6.ventana.botonAtras"];
/*******************************************************************************/

//funciones que retornan cada uno de los botones cuando es presionado, en este caso los bloques de cada seccion.
var functionesRetornoMenu = [
                      introductionCargar,
                      contextualizationCargar,
                      comprehensionCargar,
                      practiceOneCargar,
                      practiceTwoCargar,
                      practiceThreeCargar];

// FUNCION RETURN 1
var arrayFunintroductionCargar = [
    [0, verificarPagActual]
    ];

var arrayCont1Pag11= [
    [0, cerrarTorta1]
    ];
/*******************************/
// FUNCION RETURN 2
var arrayContextualizationCargar = [
    [0, verificarPagActual2]
    ];
/*******************************/
// FUNCION RETURN 3
var arrayComprehensionCargar = [
    [0, verificarPagActual3]
    ];
/*******************************/
// FUNCION RETURN 4
var arrayPractice1 = [
    [0, verificarPagActual4]
    ];
/*******************************/
// FUNCION RETURN 5
var arrayPractice2 = [
    [0, verificarPagActual5]
    ];

/*******************************/
// FUNCION RETURN 6
var arrayPronunciation = [
    [0, verificarPagActual6]
    ];
/*******************************/


var estadoBienvenida = 0;
var PaginaActual;
var PaginaActualMenu3;
var PaginaActualMenu4;
var PaginaActualMenu5;
var paginaCont1;
var paginaCont3;
var nivelEscribir = -1;


/*********************************************************************************/
/************************** ARRAY CONTENIDO 1 PAGINA 4 ***************************/
/*********************************************************************************/
var audiosCont1Pag4 = [" ",
                       "media/contenido1/act1/sonido1",
                       "media/contenido1/act1/sonido2",
                       "media/contenido1/act1/sonido3",
                       "media/contenido1/act1/sonido4",
                       "media/contenido1/act1/sonido5",
                       "media/contenido1/act1/sonido6"];
    
var btnContenido1Pag4 = [
                         "caja1.img1",
                         "caja1.img2",
                         "caja1.img3",
                         "caja1.img4",
                         "caja1.img5",
                         "caja1.img6"];

/*********************************************************************************/
/************************** ARRAY CONTENIDO 1 PAGINA 5 ***************************/
/*********************************************************************************/
var audiosCont1Pag5 = [" ",
                       "media/contenido1/act2/sonido1",
                       "media/contenido1/act2/sonido2",
                       "media/contenido1/act2/sonido3",
                       "media/contenido1/act2/sonido4",
                       "media/contenido1/act2/sonido5",
                       "media/contenido1/act2/sonido6",
                       "media/contenido1/act2/sonido7",
                       "media/contenido1/act2/sonido8",
                       "media/contenido1/act2/sonido9",
                       "media/contenido1/act2/sonido10",
                       "media/contenido1/act2/sonido11",
                       "media/contenido1/act2/sonido12",
                       "media/contenido1/act2/sonido13",
                       "media/contenido1/act2/sonido14"];
    
var btnContenido1Pag5 = [
                         "caja2.img1",
                         "caja2.img2",
                         "caja2.img3",
                         "caja2.img4",
                         "caja2.img5",
                         "caja2.img6",
                         "caja2.img7",
                         "caja2.img8",
                         "caja2.img9",
                         "caja2.img10",
                         "caja2.img11",
                         "caja2.img12",
                         "caja2.img13",
                         "caja2.img14"];

/*********************************************************************************/
/************************** ARRAY CONTENIDO 1 PAGINA 6 ***************************/
/*********************************************************************************/
var audiosCont1Pag6 = [ " ",
                        "media/contenido1/act3/sonido1",
                        "media/contenido1/act3/sonido2",
                        "media/contenido1/act3/sonido3",
                        "media/contenido1/act3/sonido4",
                        "media/contenido1/act3/sonido5",
                        "media/contenido1/act3/sonido6",
                        "media/contenido1/act3/sonido7"];

var btnContenido1Pag6 = [
                         "caja3.img1",
                         "caja3.img2",
                         "caja3.img3",
                         "caja3.img4",
                         "caja3.img5",
                         "caja3.img6",
                         "caja3.img7"];
/*********************************************************************************/
/*********************************************************************************/

/*********************************************************************************/
/************************** ARRAY CONTENIDO 1 PAGINA 7 ***************************/
/*********************************************************************************/
var audiosCont1Pag7 = [ " ",
                        "media/contenido1/act4/sonido1",
                        "media/contenido1/act4/sonido2",
                        "media/contenido1/act4/sonido3",
                        "media/contenido1/act4/sonido4"];

var btnContenido1Pag7 = [
                         "caja4.img1",
                         "caja4.img2",
                         "caja4.img3",
                         "caja4.img4"];
/*********************************************************************************/
/*********************************************************************************/

/*********************************************************************************/
/************************** ARRAY CONTENIDO 1 PAGINA 8 ***************************/
/*********************************************************************************/
var audiosCont1Pag8 = [" ",
                       "media/contenido1/act5/sonido1",
                       "media/contenido1/act5/sonido2",
                       "media/contenido1/act5/sonido3",
                       "media/contenido1/act5/sonido4",
                       "media/contenido1/act5/sonido5",
                       "media/contenido1/act5/sonido6",
                       "media/contenido1/act5/sonido7",
                       "media/contenido1/act5/sonido8",
                       "media/contenido1/act5/sonido9",
                       "media/contenido1/act5/sonido10",
                       "media/contenido1/act5/sonido11",
                       "media/contenido1/act5/sonido12",
                       "media/contenido1/act5/sonido13",
                       "media/contenido1/act5/sonido14",
                       "media/contenido1/act5/sonido15",
                       "media/contenido1/act5/sonido16",
                       "media/contenido1/act5/sonido17",
                       "media/contenido1/act5/sonido18"];
    
var btnContenido1Pag8 = [
                         "caja5.img1",
                         "caja5.img2",
                         "caja5.img3",
                         "caja5.img4",
                         "caja5.img5",
                         "caja5.img6",
                         "caja5.img7",
                         "caja5.img8",
                         "caja5.img9",
                         "caja5.img10",
                         "caja5.img11",
                         "caja5.img12",
                         "caja5.img13",
                         "caja5.img14",
                         "caja5.img15",
                         "caja5.img16",
                         "caja5.img17",
                         "caja5.img18"];

/*********************************************************************************/
/************************** ARRAY CONTENIDO 1 PAGINA 10 ***************************/
/*********************************************************************************/
var audiosCont1Pag10 = [" ",
                       "media/contenido1/act6/sonido1",
                       "media/contenido1/act6/sonido2",
                       "media/contenido1/act6/sonido3",
                       "media/contenido1/act6/sonido4",
                       "media/contenido1/act6/sonido5",
                       "media/contenido1/act6/sonido6",
                       "media/contenido1/act6/sonido7",
                       "media/contenido1/act6/sonido8",
                       "media/contenido1/act6/sonido9",
                       "media/contenido1/act6/sonido10"];
    
var btnContenido1Pag10 = [
                         "caja6.img1",
                         "caja6.img2",
                         "caja6.img3",
                         "caja6.img4",
                         "caja6.img5",
                         "caja6.img6",
                         "caja6.img7",
                         "caja6.img8",
                         "caja6.img9",
                         "caja6.img10"];

/*********************************************************************************/
/************************** ARRAY CONTENIDO 1 PAGINA 11 ***************************/
/*********************************************************************************/
var audiosCont1Pag11 = [" ",
                       "media/contenido1/act7/sonido1",
                       "media/contenido1/act7/sonido2",
                       "media/contenido1/act7/sonido3",
                       "media/contenido1/act7/sonido4",
                       "media/contenido1/act7/sonido5",
                       "media/contenido1/act7/sonido6",
                       "media/contenido1/act7/sonido7",
                       "media/contenido1/act7/sonido8",
                       "media/contenido1/act7/sonido9",
                       "media/contenido1/act7/sonido10"];
    
var btnContenido1Pag11 = [
                         "caja7.img1",
                         "caja7.img2",
                         "caja7.img3",
                         "caja7.img4",
                         "caja7.img5",
                         "caja7.img6",
                         "caja7.img7",
                         "caja7.img8",
                         "caja7.img9",
                         "caja7.img10"];

/*********************************************************************************/
/************************** ARRAY CONTENIDO 1 PAGINA 21 ***************************/
/*********************************************************************************/
var audiosCont1Pag20 = [" ",
                       "media/contenido1/act8/sonido1",
                       "media/contenido1/act8/sonido2",
                       "media/contenido1/act8/sonido3",
                       "media/contenido1/act8/sonido4",
                       "media/contenido1/act8/sonido5",
                       "media/contenido1/act8/sonido6",
                       "media/contenido1/act8/sonido7",
                       "media/contenido1/act8/sonido8",
                       "media/contenido1/act8/sonido9",
                       "media/contenido1/act8/sonido10",
                       "media/contenido1/act8/sonido11"];
    
var btnContenido1Pag20 = [
                         "caja8.img1",
                         "caja8.img2",
                         "caja8.img3",
                         "caja8.img4",
                         "caja8.img5",
                         "caja8.img6",
                         "caja8.img7",
                         "caja8.img8",
                         "caja8.img9",
                         "caja8.img10",
                         "caja8.img11"];

/*********************************************************************************/
/************************** ARRAY CONTENIDO 1 PAGINA 22 ***************************/
/*********************************************************************************/
var audiosCont1Pag21 = [" ",
                       "media/contenido1/act9/sonido1",
                       "media/contenido1/act9/sonido2",
                       "media/contenido1/act9/sonido3",
                       "media/contenido1/act9/sonido4",
                       "media/contenido1/act9/sonido5",
                       "media/contenido1/act9/sonido6",
                       "media/contenido1/act9/sonido7",
                       "media/contenido1/act9/sonido8",
                       "media/contenido1/act9/sonido9",
                       "media/contenido1/act9/sonido10",
                       "media/contenido1/act9/sonido11",
                       "media/contenido1/act9/sonido12"];
    
var btnContenido1Pag21 = [
                         "caja9.img1",
                         "caja9.img2",
                         "caja9.img3",
                         "caja9.img4",
                         "caja9.img5",
                         "caja9.img6",
                         "caja9.img7",
                         "caja9.img8",
                         "caja9.img9",
                         "caja9.img10",
                         "caja9.img11",
                         "caja9.img12"];

/*********************************************************************************/
/************************** ARRAY CONTENIDO 1 PAGINA 23 ***************************/
/*********************************************************************************/
var audiosCont1Pag22 = [" ",
                       "media/contenido1/act10/sonido1",
                       "media/contenido1/act10/sonido2",
                       "media/contenido1/act10/sonido3",
                       "media/contenido1/act10/sonido4",
                       "media/contenido1/act10/sonido5",
                       "media/contenido1/act10/sonido6",
                       "media/contenido1/act10/sonido7",
                       "media/contenido1/act10/sonido8",
                       "media/contenido1/act10/sonido9",
                       "media/contenido1/act10/sonido10",
                       "media/contenido1/act10/sonido11",
                       "media/contenido1/act10/sonido12"];
    
var btnContenido1Pag22 = [
                         "caja10.img1",
                         "caja10.img2",
                         "caja10.img3",
                         "caja10.img4",
                         "caja10.img5",
                         "caja10.img6",
                         "caja10.img7",
                         "caja10.img8",
                         "caja10.img9",
                         "caja10.img10",
                         "caja10.img11",
                         "caja10.img12"];

/*********************************************************************************/
/************************** ARRAY CONTENIDO 1 PAGINA 24 ***************************/
/*********************************************************************************/
var audiosCont1Pag23 = [" ",
                       "media/contenido1/act11/sonido1",
                       "media/contenido1/act11/sonido2",
                       "media/contenido1/act11/sonido3",
                       "media/contenido1/act11/sonido4",
                       "media/contenido1/act11/sonido5",
                       "media/contenido1/act11/sonido6",
                       "media/contenido1/act11/sonido7",
                       "media/contenido1/act11/sonido8",
                       "media/contenido1/act11/sonido9",
                       "media/contenido1/act11/sonido10"];
    
var btnContenido1Pag23 = [
                         "caja11.img1",
                         "caja11.img2",
                         "caja11.img3",
                         "caja11.img4",
                         "caja11.img5",
                         "caja11.img6",
                         "caja11.img7",
                         "caja11.img8",
                         "caja11.img9",
                         "caja11.img10"];

/*********************************************************************************/
/************************** ARRAY CONTENIDO 3 PAGINA 2 ***************************/
/*********************************************************************************/
var arrayCont3Pag2Pregunta1 = [
                       "Cont3ABCD.pregunta1.btn1A",
                       "Cont3ABCD.pregunta1.btn1B",
                       "Cont3ABCD.pregunta1.btn1C"];
var arrayCont3Pag2Pregunta2 = [
                       "Cont3ABCD.pregunta2.btn2A",
                       "Cont3ABCD.pregunta2.btn2B",
                       "Cont3ABCD.pregunta2.btn2C"];
var arrayCont3Pag2Pregunta3 = [
                       "Cont3ABCD.pregunta3.btn3A",
                       "Cont3ABCD.pregunta3.btn3B",
                       "Cont3ABCD.pregunta3.btn3C"];
var arrayCont3Pag2Pregunta4 = [
                       "Cont3ABCD.pregunta4.btn4A",
                       "Cont3ABCD.pregunta4.btn4B",
                       "Cont3ABCD.pregunta4.btn4C"];
 
/*********************************************************************************/
var elementoActualbtnCheck;
var intentosCheck = 0;

var pBuenasCheck = 0;
var pMalasCheck = 0;


var arrayCont3Pag4 = [
                       "Cont3Check.btn1",
                       "Cont3Check.btn2",
                       "Cont3Check.btn3",
                       "Cont3Check.btn4",
                       "Cont3Check.btn5",
                       "Cont3Check.btn6"];

var contFallos = 0;
var bandera = false; 
var cantCamposEscribir = 0; 

/************** VARIABLES ABCD CONTENIDO 3 **************/
var intentosRestantes = 3;
var estado = "";

var p1 = 1;
var p2 = 2;
var p3 = 3;
var p4 = 4;
var estadoP;
var intentosP1 = 0;
var intentosP2 = 0;
var intentosP3 = 0;
var intentosP4 = 0;
var numIntValidar = 0;
var validarCadena;
var validarCadenaCheck;
var nombreP1;
var nombreP2;
var nombreP3;
var nombreP4;
var estadoP1;
var estadoP2;
var estadoP3;
var estadoP4;
var intRestantes = 3;

var nombreCheck1 = 0;
var nombreCheck2 = 0;
var nombreCheck3 = 0;
var nombreCheck4 = 0;
var nombreCheck5 = 0;
var nombreCheck6 = 0;

var arrayNombreChecks = [" ", nombreCheck1, nombreCheck2, nombreCheck3, nombreCheck4, nombreCheck5, nombreCheck6];
/********************************************************/
// JavaScript Document





/*************************************************/




