/*
 * JavaScript Document
 * @autor Alejandro CastaÃ±o.
 * Fecha de creaciÃ³n: Martes 22 / Julio, 2014
 *
 *@modifico: Bryan Mauricio Giraldo.
 *@fecha: Junio 26, 2015
 */
/*global console, Display, Event, Timer, Text, Button, Presentation, TweenMax, document, $, alert,Options*/
/************** AGREGA TODOS LOS SIMBOLOS AL STAGE **************/
function Main() {
    Options.pagination({
        size: 16,
        weight: "bold",
        aling: "center",
        color: "#000000"
    });

    cargarEscenas();
    Display.addChild("mcPrecarga");
    Timer.load(3, quitarPrecargaManual);
}

/************** AGREGA TODAS LAS ESCENAS PREVIAMENTE **************/
function cargarEscenas() {

    /*Display.addChild("fondo1");
     TweenMax.to(Display.get("fondo1"), 0.01, {
             alpha: 1});*/
    Display.addChild("mcEscena1");
    TweenMax.to(Display.get("mcEscena1.globoIntro"), 0.01, {
        alpha: 0
    });
    Display.get("mcEscena1.mcEscena1_1").play(0);
    //Display.get("mcEscena1.mcEscena1_1").stop("fin");
    Event.verifyPosition("mcEscena1.mcEscena1_1", "fin", cargarMenuSup);
    //cargarMenuSup();

};

function cargarMenuSup() {

    Display.addChild("mcBienvenida");
    TweenLite.to(Display.get("mcBienvenida"), 0.01, {
        alpha: 1,
        x: 0,
        y: 1000
    });
    Timer.load(1.5, cargarInicio); // Carga desde el inicio.
    menuSup = Display.addChild("menu");
    menuSup.play();
    Event.click(Display.get("menu.BotonInicio.btnInicio"), Iniciar);
    silenciar();

};

function Iniciar() {
    nivelMenu = 0;
    resetVariablesFV();
    JESResetVaribles();
    ResetjuegoColisionUnoaUnoA1();
    RestaurarJuegoColisionMuchosaMuchos();
    reinicarTipoPregunta1();
    reinicarTipoPregunta3();
    reinicarTipoPregunta2();
    Display.removeChildAll(Display.getChildren("Stage"));
    cargarEscenas();
    Event.removeClick(Display.get("menu.BotonInicio.btnInicio"), Iniciar);
};

function verificarMenu(e) {
    refBoton = Display.getName(e);
    Posicion = btnPrincipales.indexOf("menu." + refBoton);
    funcioncall = functionesRetornoMenu[Posicion];
    funcioncall();
};

/************** QUITA LA PRECARGA MANUAL **************/
function quitarPrecargaManual() {
    Display.removeChild("mcPrecarga");
};

/************** FUNCION SILENCIAR **************/
function silenciar() {
    overBtnAudio();
    overBtnIncio();
    nivelAudioInicio = 0;
    Sound.buttonMute("menu.BotonSonido");
    Button.over("menu.botonSonido", true);
};

/************** CARGA LA FUNCION DE BIENVENIDA **************/
function cargarInicio() {
    TweenLite.to(Display.get("mcBienvenida"), 1, {
        alpha: 1,
        x: 0,
        y: 80
    });
    Button.over("mcBienvenida.ventana.botonAdelante", true);
    Presentation.load("mcBienvenida", "mcBienvenida.ventana.botonAtras", "mcBienvenida.ventana.botonAdelante", "mcBienvenida.ventana.paginacion");
    Presentation.folderText("Textos/bienvenida/Texto", 1);
    Presentation.finish(iniciarJuego);
    Event.listener(Display.get("mcBienvenida.ventana.botonAdelante"), "mouseOver", fOverNav);
    Event.listener(Display.get("mcBienvenida.ventana.botonAdelante"), "mouseOut", fOutNav);
};

//******************************************//
/************** INICIA EL JUEGO **************/
function iniciarJuego() {
    TweenLite.to(Display.get("mcBienvenida"), 0.5, {
        alpha: 1,
        x: 0,
        y: 680,
        onComplete: AnimaGlobo
    });
};

function AnimaGlobo() {
    salirOver();
    if (Display.get("mcBienvenida")) {
        Display.removeChild("mcBienvenida");
    }
    TweenLite.to(Display.get("contenido" + nivelMenu), 1, {
        alpha: 1,
        x: 0,
        y: 680,
        onComplete: function () {
            //nivelMenu = 0;
            Display.removeChild("contenido" + nivelMenu);
            asignarEventosBotones();
        }
    });
    Display.get("mcEscena1.globoIntro.globoIntro").show();
    //Presentation.load("mcBienvenida.globoIntro", "null", "null", "null");
    //Presentation.
    TweenLite.to(Display.get("mcEscena1.globoIntro"), 1, {
        alpha: 1,
        onComplete: mostrarMenuPuntero
    });
}



/*********************************************************************************/
/********************************* FUNCION INTRODUCCION ***************************/
/*********************************************************************************/
function introductionCargar() {
    NivelUpMenuPrincipal();
    Data.clear();
    ContadorActualActividades = [];
    removerMenuPuntero();
    $("body").unbind("keyup", verificar);
    Event.removeListener(menuContenidos[2] + ".ventana.botonAtras", "mousedown", verificar);
    Event.removeListener(menuContenidos[2] + ".ventana.botonAdelante", "mousedown", verificar);
    $("body").unbind("keyup", verificar2);
    Event.removeListener(menuContenidos[3] + ".ventana.botonAtras", "mousedown", verificar2);
    Event.removeListener(menuContenidos[3] + ".ventana.botonAdelante", "mousedown", verificar2);
    $("body").unbind("keyup", verificar3);
    Event.removeListener(menuContenidos[4] + ".ventana.botonAtras", "mousedown", verificar3);
    Event.removeListener(menuContenidos[4] + ".ventana.botonAdelante", "mousedown", verificar3);
    EliminarSubmenus();
    if (nivelMenu != 1) {
        moverContenidosY();
        if (Display.get("contenido1")) {
            Display.removeChild("contenido1");
            var contenedor1 = Display.addChild("contenido1");
            TweenMax.to(contenedor1, 0.01, {
                alpha: 0,
                x: -1500,
                y: 80,
                onComplete: function () {
                    TweenMax.to(contenedor1, 1, {
                        alpha: 1,
                        x: 0,
                        y: 80
                    });
                }
            });
        }
        overBtnContenidos();
        nivelMenu = 1;
    } else {
        Display.removeChild("contenido1");
        moverContenidosY();
        var contenedor1 = Display.addChild("contenido1");
        TweenMax.to(contenedor1, 0.01, {
            alpha: 0,
            x: -1500,
            y: 80,
            onComplete: function () {
                TweenMax.to(contenedor1, 1, {
                    alpha: 1,
                    x: 0,
                    y: 80
                });
            }
        });
    }
    if (Display.get("mcJuegoPreguntas")) {
        Display.removeChild("mcJuegoPreguntas");
    }
    if (estadoFuegoFv) {
        RemoverJuegoFV();
    }
    if (estadoColisionFinal) {
        removeJuegoColision();
    }
    if (estadoJuego3UnoaUno == true) {
        estadoJuego3UnoaUno = false;
        for (var f = 0; f < Temporal2.length; f++) {
            Display.removeChild(Temporal2[f]);
            Display.removeChild(Temporal1[f]);
        }
        //Collision.remove();
    }
    if (estadoJuego1UnoaUno == true) {
        estadoJuego1UnoaUno = false;
        for (var f = 0; f < Temporal2.length; f++) {
            Display.removeChild(Temporal2[f]);
            Display.removeChild(Temporal1[f]);
        }
        //Collision.remove();
    }
    if (estadoJuego4UnoaUno == true) {
        estadoJuego4UnoaUno = false;
        for (var f = 0; f < Temporal2.length; f++) {
            Display.removeChild(Temporal2[f]);
            Display.removeChild(Temporal1[f]);
        }
        //Collision.remove();
    }
    if (JPContenedorPrincipal.length != 0) {
        JPRemoverActividad3();
    }
    if(Boolean(Display.get("mcJuegoPreguntasAudios1"))){
        Display.removeChild("mcJuegoPreguntasAudios1");
    }if(Boolean(Display.get("mcJuegoPreguntasAudios2"))){
        Display.removeChild("mcJuegoPreguntasAudios2");
    }
    Button.over(menuContenidos[0] + ".ventana.botonAdelante", true);
    Display.get(menuContenidos[0]).stop("normal");
    Presentation.load(menuContenidos[0], menuContenidos[0] + ".ventana.botonAtras", menuContenidos[0] + ".ventana.botonAdelante", menuContenidos[0] + ".ventana.paginacion");
    Presentation.folderText("Textos/introduccion/Texto", 38);
    Display.get(menuContenidos[0]).stop("normal");
    Presentation.finish(AnimaGlobo);
    Display.zIndex(menuSup);
    resetVariablesFV();
    JESResetVaribles();
    //Presentation.finish(animarEscena2);
};

function saluda(){
    alert('hola');
    salirOver();
    if (Display.get("mcBienvenida")) {
        Display.removeChild("mcBienvenida");
    }
    TweenLite.to(Display.get("contenido" + nivelMenu), 1, {
        alpha: 1,
        x: 0,
        y: 680,
        onComplete: function () {
            //nivelMenu = 0;
            Display.removeChild("contenido" + nivelMenu);
            asignarEventosBotones();
        }
    });
    Display.get("mcEscena1.globoIntro.globoIntro").show();
}

function animarEscena2() {
    Display.get("mcEscena1").play("Escena2");
    Display.get("mcEscena1.mcEscena2").play(0);
    Display.get("mcEscena1.globoIntro").hide();
    if (Display.get("mcBienvenida")) {
        Display.removeChild("mcBienvenida");
    }
    TweenLite.to(Display.get("contenido" + nivelMenu), 1, {
        alpha: 1,
        x: 0,
        y: 680,
        onComplete: function () {
            Display.removeChild("contenido" + nivelMenu);
        }
    });
};

function animarEscena3() {
    Display.get("mcEscena1").play("Escena3");
    Display.get("mcEscena1.mcEscena3").play(0);
    Display.get("mcEscena1.globoIntro").hide();
    if (Display.get("mcBienvenida")) {
        Display.removeChild("mcBienvenida");
    }
    TweenLite.to(Display.get("contenido" + nivelMenu), 1, {
        alpha: 1,
        x: 0,
        y: 680,
        onComplete: function () {
            Display.removeChild("contenido" + nivelMenu);
        }
    });
    if (Temporal2.length != 0) {
        Display.removeChildArray(Temporal2);
    }
};
/*********************************************************************************/
/*********************************************************************************/
/********************************* FUNCION CONTEXTUALIZACION ***************************/
/*********************************************************************************/
function contextualizationCargar() {
    NivelUpMenuPrincipal();
    Data.clear();
    ContadorActualActividades = [];
    removerMenuPuntero();
    $("body").unbind("keyup", verificar);
    Event.removeListener(menuContenidos[2] + ".ventana.botonAtras", "mousedown", verificar);
    Event.removeListener(menuContenidos[2] + ".ventana.botonAdelante", "mousedown", verificar);
    $("body").unbind("keyup", verificar2);
    Event.removeListener(menuContenidos[3] + ".ventana.botonAtras", "mousedown", verificar2);
    Event.removeListener(menuContenidos[3] + ".ventana.botonAdelante", "mousedown", verificar2);
    $("body").unbind("keyup", verificar3);
    Event.removeListener(menuContenidos[4] + ".ventana.botonAtras", "mousedown", verificar3);
    Event.removeListener(menuContenidos[4] + ".ventana.botonAdelante", "mousedown", verificar3);
    EliminarSubmenus();
    if (nivelMenu != 2) {
        moverContenidosY();
        if (Display.get("contenido2")) {
            Display.removeChild("contenido2");
            var contenedor2 = Display.addChild("contenido2");
            Display.get("contenido2.ventana").stop("normal");
            TweenMax.to(contenedor2, 0.01, {
                alpha: 0,
                x: -1500,
                y: 80,
                onComplete: function () {
                    TweenMax.to(contenedor2, 1, {
                        alpha: 1,
                        x: 0,
                        y: 80
                    });
                }
            });
        }
        overBtnContenidos();
        nivelMenu = 2;
    } else {
        Display.removeChild("contenido2");
        moverContenidosY();
        var contenedor2 = Display.addChild("contenido2");
        Display.get("contenido2.ventana").stop("normal");
        TweenMax.to(contenedor2, 0.01, {
            alpha: 0,
            x: -1500,
            y: 80,
            onComplete: function () {
                TweenMax.to(contenedor2, 1, {
                    alpha: 1,
                    x: 0,
                    y: 80
                });
            }
        });
    }
    if (Display.get("mcJuegoPreguntas")) {
        Display.removeChild("mcJuegoPreguntas");
    }
    if (estadoFuegoFv) {
        RemoverJuegoFV();
    }
    if (estadoColisionFinal) {
        removeJuegoColision();
    }
    if (estadoJuego3UnoaUno == true) {
        estadoJuego3UnoaUno = false;
        for (var f = 0; f < Temporal2.length; f++) {
            Display.removeChild(Temporal2[f]);
            Display.removeChild(Temporal1[f]);
        }
        //Collision.remove();
    }
    if (estadoJuego1UnoaUno == true) {
        estadoJuego1UnoaUno = false;
        for (var f = 0; f < Temporal2.length; f++) {
            Display.removeChild(Temporal2[f]);
            Display.removeChild(Temporal1[f]);
        }
        //Collision.remove();
    }
    if (estadoJuego4UnoaUno == true) {
        estadoJuego4UnoaUno = false;
        for (var f = 0; f < Temporal2.length; f++) {
            Display.removeChild(Temporal2[f]);
            Display.removeChild(Temporal1[f]);
        }
        //Collision.remove();
    }
    if (JPContenedorPrincipal != 0) {
        JPRemoverActividad3();
    }
    if (Temporal2.length != 0) {
        Display.removeChildArray(Temporal2);
    }
    if(Boolean(Display.get("mcJuegoPreguntasAudios1"))){
        Display.removeChild("mcJuegoPreguntasAudios1");
    }if(Boolean(Display.get("mcJuegoPreguntasAudios2"))){
        Display.removeChild("mcJuegoPreguntasAudios2");
    }
    Presentation.remove();
    Button.over(menuContenidos[1] + ".ventana.botonAdelante", true);
    Display.get(menuContenidos[1]).stop("normal");
    Presentation.load(menuContenidos[1], menuContenidos[1] + ".ventana.botonAtras", menuContenidos[1] + ".ventana.botonAdelante", menuContenidos[1] + ".ventana.paginacion");
    Presentation.folderText("Textos/contextualizacion/Texto", 2);
    Presentation.finish(AnimaGlobo);
    resetVariablesFV();
    JESResetVaribles();
    Display.zIndex(menuSup);
    //Presentation.finish(animarEscena3);
};


/*********************************************************************************/
/********************************* FUNCION COMPRENSION ***************************/
/*********************************************************************************/
function comprehensionCargar() {
    NivelUpMenuPrincipal();
    Data.clear();
    ContadorActualActividades = [];
    removerMenuPuntero();
    JuegoFvEstadoContadorGlobal = [];
    $("body").unbind("keyup", verificar);
    Event.removeListener(menuContenidos[2] + ".ventana.botonAtras", "mousedown", verificar);
    Event.removeListener(menuContenidos[2] + ".ventana.botonAdelante", "mousedown", verificar);
    $("body").unbind("keyup", verificar2);
    Event.removeListener(menuContenidos[3] + ".ventana.botonAtras", "mousedown", verificar2);
    Event.removeListener(menuContenidos[3] + ".ventana.botonAdelante", "mousedown", verificar2);
    $("body").unbind("keyup", verificar3);
    Event.removeListener(menuContenidos[4] + ".ventana.botonAtras", "mousedown", verificar3);
    Event.removeListener(menuContenidos[4] + ".ventana.botonAdelante", "mousedown", verificar3);
    EliminarSubmenus();
    if (nivelMenu != 3) {
        moverContenidosY();
        if (Display.get("contenido3")) {
            Display.removeChild("contenido3");
            var contenedor3 = Display.addChild("contenido3");
            Display.get("contenido3.ventana").stop("Juegos");
            TweenMax.to(contenedor3, 0.01, {
                alpha: 0,
                x: -1500,
                y: 80,
                onComplete: function () {
                    TweenMax.to(contenedor3, 1, {
                        alpha: 1,
                        x: 0,
                        y: 80
                            //onComplete: JuegoFVActividad1
                    });
                }
            });
        }
        overBtnContenidos();
        nivelMenu = 3;
    } else {
        Display.removeChild("contenido3");
        moverContenidosY();
        var contenedor3 = Display.addChild("contenido3");
        Display.get("contenido3.ventana").stop("Juegos");
        TweenMax.to(contenedor3, 0.01, {
            alpha: 0,
            x: -1500,
            y: 80,
            onComplete: function () {
                TweenMax.to(contenedor3, 1, {
                    alpha: 1,
                    x: 0,
                    y: 80
                });
            }
        });
    }
    if (Display.get("mcJuegoPreguntas")) {
        Display.removeChild("mcJuegoPreguntas");
    }
    if (estadoFuegoFv) {
        RemoverJuegoFV();
    }
    if (estadoColisionFinal) {
        removeJuegoColision();
    }
    if (estadoJuego3UnoaUno == true) {
        estadoJuego3UnoaUno = false;
        for (var f = 0; f < Temporal2.length; f++) {
            Display.removeChild(Temporal2[f]);
            Display.removeChild(Temporal1[f]);
        }
        //Collision.remove();
    }
    if (estadoJuego1UnoaUno == true) {
        estadoJuego1UnoaUno = false;
        for (var f = 0; f < Temporal2.length; f++) {
            Display.removeChild(Temporal2[f]);
            Display.removeChild(Temporal1[f]);
        }
        //Collision.remove();
    }
    if (estadoJuego4UnoaUno == true) {
        estadoJuego4UnoaUno = false;
        for (var f = 0; f < Temporal2.length; f++) {
            Display.removeChild(Temporal2[f]);
            Display.removeChild(Temporal1[f]);
        }
        //Collision.remove();
    }
    resetVariablesFV();
    JuegoFvEstadoContadorActividades = 2;

    var arrayFunciones3 = [
     [1, JuegoFVActividad1],
     [2, JuegoFVActividad2]
  ];
    if (JPContenedorPrincipal.length != 0) {
        JPRemoverActividad3();
    }
    if (Temporal2.length != 0) {
        Display.removeChildArray(Temporal2);
    }
    if(Boolean(Display.get("mcJuegoPreguntasAudios1"))){
        Display.removeChild("mcJuegoPreguntasAudios1");
    }if(Boolean(Display.get("mcJuegoPreguntasAudios2"))){
        Display.removeChild("mcJuegoPreguntasAudios2");
    }

    Display.removeChild(JPAudiocontenedor, "contenido4");
    Presentation.remove();
    Button.over(menuContenidos[2] + ".ventana.botonAdelante", true);
    Presentation.load(menuContenidos[2], menuContenidos[2] + ".ventana.botonAtras", menuContenidos[2] + ".ventana.botonAdelante", null);
    Presentation.folderText("Textos/comprension/FalsoVerdadero", 2);
    Presentation.functionReturn(arrayFunciones3);
    $("body").bind("keyup", verificar);
    Event.listener(menuContenidos[2] + ".ventana.botonAtras", "mousedown", verificar);
    Event.listener(menuContenidos[2] + ".ventana.botonAdelante", "mousedown", verificar);
    Display.zIndex(menuSup);
};


/*********************************************************************************/
/********************************* FUNCION PRACTICA 1 ***************************/
/*********************************************************************************/
function practiceOneCargar() {
    NivelUpMenuPrincipal();
    EstadoNormalBotones();
    Data.clear();
    resetVariablesFV();
    JESResetVaribles();
    JESCantidadActividades = 2;
    ContadorActualActividades = [];
    removerMenuPuntero();
    Display.removeChild("mcJuegoPreguntasBoton41", "contenido4");
    $("body").unbind("keyup", verificar);
    Event.removeListener(menuContenidos[2] + ".ventana.botonAtras", "mousedown", verificar);
    Event.removeListener(menuContenidos[2] + ".ventana.botonAdelante", "mousedown", verificar);
    $("body").unbind("keyup", verificar2);
    Event.removeListener(menuContenidos[3] + ".ventana.botonAtras", "mousedown", verificar2);
    Event.removeListener(menuContenidos[3] + ".ventana.botonAdelante", "mousedown", verificar2);
    $("body").unbind("keyup", verificar3);
    Event.removeListener(menuContenidos[4] + ".ventana.botonAtras", "mousedown", verificar3);
    Event.removeListener(menuContenidos[4] + ".ventana.botonAdelante", "mousedown", verificar3);
    if (nivelMenu != 4) {
        moverContenidosY();
        if (Display.get("contenido4")) {
            Display.removeChild("contenido4");
            var contenedor4 = Display.addChild("contenido4");
            Display.get("contenido4.ventana").stop("Juegos");
            TweenMax.to(contenedor4, 0.01, {
                alpha: 0,
                x: -1500,
                y: 80,
                onComplete: function () {
                    TweenMax.to(contenedor4, 1, {
                        alpha: 1,
                        x: 0,
                        y: 80
                    });
                }
            });
            CargarsubMenu(refBoton);
        }
        overBtnContenidos();
        nivelMenu = 4;
    } else {
        Display.removeChild("contenido4");
        moverContenidosY();
        var contenedor4 = Display.addChild("contenido4");
        Display.get("contenido4.ventana").stop("Juegos");
        TweenMax.to(contenedor4, 0.01, {
            alpha: 0,
            x: -1500,
            y: 80,
            onComplete: function () {
                TweenMax.to(contenedor4, 1, {
                    alpha: 1,
                    x: 0,
                    y: 80
                });
            }
        });
        CargarsubMenu(refBoton);
    }
    if (Display.get("mcJuegoPreguntas")) {
        Display.removeChild("mcJuegoPreguntas");
    }
    if (estadoFuegoFv) {
        RemoverJuegoFV();
    }
    if (estadoColisionFinal) {
        removeJuegoColision();
    }
    if (estadoJuego3UnoaUno == true) {
        estadoJuego3UnoaUno = false;
        for (var f = 0; f < Temporal2.length; f++) {
            Display.removeChild(Temporal2[f]);
            Display.removeChild(Temporal1[f]);
        }
        //Collision.remove();
    }
    if (estadoJuego1UnoaUno == true) {
        estadoJuego1UnoaUno = false;
        for (var f = 0; f < Temporal2.length; f++) {
            Display.removeChild(Temporal2[f]);
            Display.removeChild(Temporal1[f]);
        }
        //Collision.remove();
    }
    if (estadoJuego4UnoaUno == true) {
        estadoJuego4UnoaUno = false;
        for (var f = 0; f < Temporal2.length; f++) {
            Display.removeChild(Temporal2[f]);
            Display.removeChild(Temporal1[f]);
        }
        //Collision.remove();
    }
    var arrayFunciones2 = [
     [1, JESActividad1],
     [2, JESActividad2]
 ];
    if (JPContenedorPrincipal != 0) {
        JPRemoverActividad3();
    }
    if (Temporal2.length != 0) {
        Display.removeChildArray(Temporal2);
    }
    if(Boolean(Display.get("mcJuegoPreguntasAudios1"))){
        Display.removeChild("mcJuegoPreguntasAudios1");
    }if(Boolean(Display.get("mcJuegoPreguntasAudios2"))){
        Display.removeChild("mcJuegoPreguntasAudios2");
    }
    TemporalBotones = ArrayBotonesSubMenu1["menuBoton4"][0];
    Display.get("subMenu1.btnSubmenu1a").play(0);
    Button.over(menuContenidos[3] + ".ventana.botonAdelante", true);
    Presentation.load(menuContenidos[3], menuContenidos[3] + ".ventana.botonAtras", menuContenidos[3] + ".ventana.botonAdelante", null);
    //Display.get(menuContenidos[3] + ".ventana.botonAtras").hide();
    //Display.get(menuContenidos[3] + ".ventana.botonAdelante").hide();
    Presentation.folderText("Textos/practica1/Practica1a/Texto", 2);
    Presentation.functionReturn(arrayFunciones2);

    Display.zIndex(menuSup);
};

/*********************************************************************************/
/********************************* FUNCION PRACTICA 2 ***************************/
/*********************************************************************************/
function practiceTwoCargar() {
    NivelUpMenuPrincipal();
    EstadoNormalBotones();
    Data.clear();
    resetVariablesFV();
    JESResetVaribles();
    JESCantidadActividades = 2;
    ContadorActualActividades = [];
    removerMenuPuntero();
    Display.removeChild("mcJuegoPreguntasBoton41", "contenido4");
    $("body").unbind("keyup", verificar);
    Event.removeListener(menuContenidos[2] + ".ventana.botonAtras", "mousedown", verificar);
    Event.removeListener(menuContenidos[2] + ".ventana.botonAdelante", "mousedown", verificar);
    $("body").unbind("keyup", verificar2);
    Event.removeListener(menuContenidos[3] + ".ventana.botonAtras", "mousedown", verificar2);
    Event.removeListener(menuContenidos[3] + ".ventana.botonAdelante", "mousedown", verificar2);
    $("body").unbind("keyup", verificar3);
    Event.removeListener(menuContenidos[4] + ".ventana.botonAtras", "mousedown", verificar3);
    Event.removeListener(menuContenidos[4] + ".ventana.botonAdelante", "mousedown", verificar3);
    if (nivelMenu != 5) {
        moverContenidosY();
        if (Display.get("contenido5")) {
            Display.removeChild("contenido5");
            var contenedor5 = Display.addChild("contenido5");
            Display.get("contenido5.ventana").stop("Juegos");
            TweenMax.to(contenedor5, 0.01, {
                alpha: 0,
                x: -1500,
                y: 80,
                onComplete: function () {
                    TweenMax.to(contenedor5, 1, {
                        alpha: 1,
                        x: 0,
                        y: 80
                    });
                }
            });
            CargarsubMenu(refBoton);
        }
        overBtnContenidos();
        nivelMenu = 5;
    } else {
        Display.removeChild("contenido5");
        moverContenidosY();
        var contenedor5 = Display.addChild("contenido5");
        Display.get("contenido5.ventana").stop("Juegos");
        TweenMax.to(contenedor5, 0.01, {
            alpha: 0,
            x: -1500,
            y: 80,
            onComplete: function () {
                TweenMax.to(contenedor5, 1, {
                    alpha: 1,
                    x: 0,
                    y: 80
                });
            }
        });
        CargarsubMenu(refBoton);
    }
    if (Display.get("mcJuegoPreguntas")) {
        Display.removeChild("mcJuegoPreguntas");
    }
    if (estadoFuegoFv) {
        RemoverJuegoFV();
    }
    if (estadoColisionFinal) {
        removeJuegoColision();
    }
    if (estadoJuego3UnoaUno == true) {
        estadoJuego3UnoaUno = false;
        for (var f = 0; f < Temporal2.length; f++) {
            Display.removeChild(Temporal2[f]);
            Display.removeChild(Temporal1[f]);
        }
        //Collision.remove();
    }
    if (estadoJuego1UnoaUno == true) {
        estadoJuego1UnoaUno = false;
        for (var f = 0; f < Temporal2.length; f++) {
            Display.removeChild(Temporal2[f]);
            Display.removeChild(Temporal1[f]);
        }
        //Collision.remove();
    }
    if (estadoJuego4UnoaUno == true) {
        estadoJuego4UnoaUno = false;
        for (var f = 0; f < Temporal2.length; f++) {
            Display.removeChild(Temporal2[f]);
            Display.removeChild(Temporal1[f]);
        }
        //Collision.remove();
    }
    var arrayFuncionesPractica2 = [
  [1, JESActividad3a],
  [2, JESActividad7a]
];
    if (JPContenedorPrincipal != 0) {
        JPRemoverActividad3();
    }
    if (Temporal2.length != 0 && Temporal1.length != 0) {
        Display.removeChildArray(Temporal2);
        Display.removeChildArray(Temporal1);
    }
    if(Boolean(Display.get("mcJuegoPreguntasAudios1"))){
        Display.removeChild("mcJuegoPreguntasAudios1");
    }if(Boolean(Display.get("mcJuegoPreguntasAudios2"))){
        Display.removeChild("mcJuegoPreguntasAudios2");
    }
    TemporalBotones = ArrayBotonesSubMenu1["menuBoton5"][0];
    Display.get("subMenu2.btnSubmenu1b").play(0);
    Button.over(menuContenidos[4] + ".ventana.botonAdelante", true);
    Presentation.load(menuContenidos[4], menuContenidos[4] + ".ventana.botonAtras", menuContenidos[4] + ".ventana.botonAdelante", null);
    Presentation.folderText("Textos/practica2/Practica2a/Texto", 2);
    Display.get(menuContenidos[4]).stop("Juegos");
    Presentation.functionReturn(arrayFuncionesPractica2);

    Display.zIndex(menuSup);
};

/*********************************************************************************/
/********************************* FUNCION PRACTICA 3 ***************************/
/*********************************************************************************/
function practiceThreeCargar() {
    NivelUpMenuPrincipal();
    EstadoNormalBotones();
    Data.clear();
    resetVariablesFV();
    JESResetVaribles();
    JESCantidadActividades = 1;
    ContadorActualActividades = [];
    removerMenuPuntero();
    Display.removeChild("mcJuegoPreguntasBoton41", "contenido4");
    $("body").unbind("keyup", verificar);
    Event.removeListener(menuContenidos[2] + ".ventana.botonAtras", "mousedown", verificar);
    Event.removeListener(menuContenidos[2] + ".ventana.botonAdelante", "mousedown", verificar);
    $("body").unbind("keyup", verificar2);
    Event.removeListener(menuContenidos[3] + ".ventana.botonAtras", "mousedown", verificar2);
    Event.removeListener(menuContenidos[3] + ".ventana.botonAdelante", "mousedown", verificar2);
    $("body").unbind("keyup", verificar3);
    Event.removeListener(menuContenidos[4] + ".ventana.botonAtras", "mousedown", verificar3);
    Event.removeListener(menuContenidos[4] + ".ventana.botonAdelante", "mousedown", verificar3);
    if (nivelMenu != 6) {
        moverContenidosY();
        if (Display.get("contenido6")) {
            Display.removeChild("contenido6");
            var contenedor6 = Display.addChild("contenido6");
            Display.get("contenido6.ventana").stop("Juegos");
            TweenMax.to(contenedor6, 0.01, {
                alpha: 0,
                x: -1500,
                y: 80,
                onComplete: function () {
                    TweenMax.to(contenedor6, 1, {
                        alpha: 1,
                        x: 0,
                        y: 80
                    });
                }
            });
            CargarsubMenu(refBoton);
        }
        overBtnContenidos();
        nivelMenu = 6;
    } else {
        Display.removeChild("contenido6");
        var contenedor6 = Display.addChild("contenido6");
        Display.get("contenido6.ventana").stop("Juegos");
        TweenMax.to(contenedor6, 0.01, {
            alpha: 0,
            x: -1500,
            y: 80,
            onComplete: function () {
                TweenMax.to(contenedor6, 1, {
                    alpha: 1,
                    x: 0,
                    y: 80
                });
            }
        });
        CargarsubMenu(refBoton);
    }
    if (Display.get("mcJuegoPreguntas")) {
        Display.removeChild("mcJuegoPreguntas");
    }
    if (estadoFuegoFv) {
        RemoverJuegoFV();
    }
    if (estadoColisionFinal) {
        removeJuegoColision();
    }
    if (estadoJuego3UnoaUno == true) {
        estadoJuego3UnoaUno = false;
        for (var f = 0; f < Temporal2.length; f++) {
            Display.removeChild(Temporal2[f]);
            Display.removeChild(Temporal1[f]);
        }
        //Collision.remove();
    }
    if (estadoJuego1UnoaUno == true) {
        estadoJuego1UnoaUno = false;
        for (var f = 0; f < Temporal2.length; f++) {
            Display.removeChild(Temporal2[f]);
            Display.removeChild(Temporal1[f]);
        }
        //Collision.remove();
    }
    if (estadoJuego4UnoaUno == true) {
        estadoJuego4UnoaUno = false;
        for (var f = 0; f < Temporal2.length; f++) {
            Display.removeChild(Temporal2[f]);
            Display.removeChild(Temporal1[f]);
        }
        //Collision.remove();
    }

    if (Temporal2.length != 0 && Temporal1.length != 0) {
        Display.removeChildArray(Temporal2);
        Display.removeChildArray(Temporal1);
    }
    var arrayFunciones = [
     [1, JESActividad5a]
  ];
    if (JPContenedorPrincipal != 0) {
        JPRemoverActividad3();
    }
    if(Boolean(Display.get("mcJuegoPreguntasAudios1"))){
        Display.removeChild("mcJuegoPreguntasAudios1");
    }if(Boolean(Display.get("mcJuegoPreguntasAudios2"))){
        Display.removeChild("mcJuegoPreguntasAudios2");
    }
    TemporalBotones = ArrayBotonesSubMenu1["menuBoton6"][0];
    Display.get("subMenu3.btnSubmenu1c").play(0);
    Button.over(menuContenidos[5] + ".ventana.botonAdelante", true);
    Presentation.load(menuContenidos[5], menuContenidos[5] + ".ventana.botonAtras", menuContenidos[5] + ".ventana.botonAdelante", null);
    Display.get(menuContenidos[5] + ".ventana.botonAtras").hide();
    Display.get(menuContenidos[5] + ".ventana.botonAdelante").hide();
    Presentation.folderText("Textos/practica3/Practica3a/Texto", 1);
    Presentation.functionReturn(arrayFunciones);

    Display.zIndex(menuSup);
};

/*********************************************************************************/
/********************************* FUNCION PRONUNCIACION ***************************/
/*********************************************************************************/
function PonunciationCargar() {
    NivelUpMenuPrincipal();
    EstadoNormalBotones();
    Data.clear();
    ContadorActualActividades = [];
    juegoColisionCantidadActividades = 2;
    removerMenuPuntero();
    $("body").unbind("keyup", verificar);
    Event.removeListener(menuContenidos[2] + ".ventana.botonAtras", "mousedown", verificar);
    Event.removeListener(menuContenidos[2] + ".ventana.botonAdelante", "mousedown", verificar);
    $("body").unbind("keyup", verificar2);
    Event.removeListener(menuContenidos[3] + ".ventana.botonAtras", "mousedown", verificar2);
    Event.removeListener(menuContenidos[3] + ".ventana.botonAdelante", "mousedown", verificar2);
    $("body").unbind("keyup", verificar3);
    Event.removeListener(menuContenidos[4] + ".ventana.botonAtras", "mousedown", verificar3);
    Event.removeListener(menuContenidos[4] + ".ventana.botonAdelante", "mousedown", verificar3);
    if (nivelMenu != 7) {
        moverContenidosY();
        if (Display.get("contenido7")) {
            Display.removeChild("contenido7");
            var contenedor7 = Display.addChild("contenido7");
            Display.get("contenido7.ventana").stop("Juegos");
            TweenMax.to(contenedor7, 0.01, {
                alpha: 0,
                x: -1500,
                y: 80,
                onComplete: function () {
                    TweenMax.to(contenedor7, 1, {
                        alpha: 1,
                        x: 0,
                        y: 80
                    });
                }
            });
            CargarsubMenu(refBoton);
        }
        overBtnContenidos();
        nivelMenu = 7;
    } else {
        moverContenidosY();
        var contenedor7 = Display.addChild("contenido7");
        Display.get("contenido7.ventana").stop("Juegos");
        TweenMax.to(contenedor7, 0.01, {
            alpha: 0,
            x: -1500,
            y: 80,
            onComplete: function () {
                TweenMax.to(contenedor7, 1, {
                    alpha: 1,
                    x: 0,
                    y: 80
                });
            }
        });
        CargarsubMenu(refBoton);
    }
    if (estadoFuegoFv) {
        RemoverJuegoFV();
    }
    if (estadoColisionFinal) {
        removeJuegoColision();
    }
    if (estadoJuego3UnoaUno == true) {
        estadoJuego3UnoaUno = false;
        for (var f = 0; f < Temporal2.length; f++) {
            Display.removeChild(Temporal2[f]);
            Display.removeChild(Temporal1[f]);
        }
        //Collision.remove();
    }
    if (estadoJuego1UnoaUno == true) {
        estadoJuego1UnoaUno = false;
        for (var f = 0; f < Temporal2.length; f++) {
            Display.removeChild(Temporal2[f]);
            Display.removeChild(Temporal1[f]);
        }
        //Collision.remove();
    }
    if (estadoJuego4UnoaUno == true) {
        estadoJuego4UnoaUno = false;
        for (var f = 0; f < Temporal2.length; f++) {
            Display.removeChild(Temporal2[f]);
            Display.removeChild(Temporal1[f]);
        }
        //Collision.remove();
    }
    if (Display.get("mcJuegoPreguntas1")) {
        Display.removeChild("mcJuegoPreguntas1");
    }
    if (Display.get("mcJuegoPreguntas2")) {
        Display.removeChild("mcJuegoPreguntas2");
    }
    if (Display.get("mcJuegoPreguntas3")) {
        Display.removeChild("mcJuegoPreguntas3");
    }
    if (Temporal2.length != 0 && Temporal1.length != 0) {
        Display.removeChildArray(Temporal2);
        Display.removeChildArray(Temporal1);
    }
    if(Boolean(Display.get("mcJuegoPreguntasAudios1"))){
        Display.removeChild("mcJuegoPreguntasAudios1");
    }if(Boolean(Display.get("mcJuegoPreguntasAudios2"))){
        Display.removeChild("mcJuegoPreguntasAudios2");
    }
    /*var arrayFunciones = [
  [6, removeJuegoColision],
  [7, JASActividad1d],
  [8, removeJuegoColision],
  [9, JASActividad1e],
  [10, removeJuegoColision],

  */

    if (JPContenedorPrincipal != 0) {
        JPRemoverActividad3();
    }
    if (Display.get("mcJuegoPreguntas")) {
        Display.removeChild("mcJuegoPreguntas");
    }
    var arrayFunciones = [
     [1, removeJuegoColision],
     [2, removeJuegoColision],
     [3, JASActividad1bRay],
     [4, JASActividad11b]
 ];
    TemporalBotones = ArrayBotonesSubMenu1["menuBoton7"][0];
    Display.get("subMenu4.btnSubmenu1d").play(0);
    Button.over(menuContenidos[6] + ".ventana.botonAdelante", true);
    /*Presentation.load(menuContenidos[6], menuContenidos[6] + ".ventana.botonAtras", menuContenidos[6] + ".ventana.botonAdelante", menuContenidos[6] + ".ventana.paginacion");*/
    Presentation.load(menuContenidos[6], menuContenidos[6] + ".ventana.botonAtras", menuContenidos[6] + ".ventana.botonAdelante", null);
    Presentation.folderText("Textos/pronunciacion/Practica1d/Texto", 4);
    Presentation.functionReturn(arrayFunciones);
    resetVariablesFV();
    JESResetVaribles();
    Display.zIndex(menuSup);
};


/***************** Mueve de posicion todos los contendos actuales ******************/
function moverContenidosY() {
    /*cerrarVentanaEscribirCont3pag1();
    cerrarTorta1();

    Display.removeChild("caja1");
    Display.removeChild("caja2");
    Display.removeChild("caja3");

    Display.removeChild("Cont3ABCD");
    Display.removeChild("Cont3Check");*/

    TweenLite.to(Display.get("mcBienvenida"), 1, {
        alpha: 1,
        x: 0,
        y: 1000,
        onComplete: function () {
            Display.removeChild("mcBienvenida");
        }
    });

    TweenLite.to(Display.get("mcEscena1.globoIntro"), 0.5, {
        alpha: 0
    });
    TweenLite.to(Display.get("mcEscena1.mcEscena2.mcGlobo2"), 0.5, {
        alpha: 0
    });
    TweenLite.to(Display.get("mcEscena1.mcEscena3.mcGlobo3"), 0.5, {
        alpha: 0
    });
    Display.removeChild("contenido1");
    Display.removeChild("contenido2");
    Display.removeChild("contenido3");
    Display.removeChild("contenido4");
    Display.removeChild("contenido5");
    Display.removeChild("contenido6");
    Display.removeChild("contenido7");
};


/***************** Mueve de posicion todos los contendos actuales ******************/
function CargarsubMenu(elementoacargar) {
    ElementoSubmenu = elementoacargar;
    //Display.position(submenuContenidos[elementoacargar], 0, 627);
    EliminarSubmenus();
    Display.addChild(String(ArraySubMenu1[elementoacargar]));
    Display.zIndex(String(ArraySubMenu1[elementoacargar]));
    TweenMax.to(String(ArraySubMenu1[elementoacargar]), 0.01, {
        alpha: 0,
        x: 0,
        y: 700,
        onComplete: function () {
            TweenMax.to(String(ArraySubMenu1[elementoacargar]), 1, {
                alpha: 1,
                x: 0,
                y: 580
            });
        }
    });
    Display.get(String(ArraySubMenu1[elementoacargar])).play(0);

    /*Button.over(String(refElementoContenedor + "." + subMenuBotones[elementoacargar][f]), true);
	Event.listener("subMenu1.btnSubmenu1a", "mouseover", MensajeSubMenuOver);*/
    for (var f = 0; f < ArrayBotonesSubMenu1[elementoacargar].length; f++) {
        var refElementoContenedor = ArraySubMenu1[elementoacargar];
        Event.click(String(refElementoContenedor + "." + ArrayBotonesSubMenu1[elementoacargar][f]), MensajeSubMenu);
        //Button.over(String(refElementoContenedor + "." + subMenuBotones[elementoacargar][f]), true);
        //Display.get(String(refElementoContenedor + "." + subMenuBotones[elementoacargar][f])).hide();
    }


};

function EliminarSubmenus() {
    if (Display.get("subMenu1")) {
        Display.removeChild("subMenu1");
    }
    if (Display.get("subMenu2")) {
        Display.removeChild("subMenu2");
    }
    if (Display.get("subMenu3")) {
        Display.removeChild("subMenu3");
    }
    if (Display.get("subMenu4")) {
        Display.removeChild("subMenu4");
    }
}

function EstadoNormalBotones() {
    if (ElementoSubmenu != undefined || ArrayBotonesSubMenu1.length != undefined) {
        for (var f = 0; f < ArrayBotonesSubMenu1[ElementoSubmenu].length; f++) {
            Display.get(ArraySubMenu1[ElementoSubmenu] + "." + ArrayBotonesSubMenu1[ElementoSubmenu][f]).stop("normal");
        }
    }
}

function MensajeSubMenu(e) {
    EstadoNormalBotones();
    for (var f = 0; f < ArrayBotonesSubMenu1[ElementoSubmenu].length; f++) {
        Event.removeClick(String(ArraySubMenu1[ElementoSubmenu] + "." + ArrayBotonesSubMenu1[ElementoSubmenu][f]), MensajeSubMenu);
    }
    NivelUpMenuPrincipal();
    UpNivelMenu();
    JuegoLSreset();
    Display.zIndex(menuSup);
    if (Temporal2.length != 0 && Temporal1.length != 0) {
        Display.removeChildArray(Temporal2);
        Display.removeChildArray(Temporal1);
    }
    resetVariablesFV();
    JESResetVaribles();
    ResetjuegoColisionUnoaUnoA1();
    RestaurarJuegoColisionMuchosaMuchos();
    reinicarTipoPregunta1();
    reinicarTipoPregunta3();
    reinicarTipoPregunta2();
    Display.zIndex(String(ArraySubMenu1[ElementoSubmenu]));
    Display.get(e).play(0);
    TemporalBotones = Display.getName(e);
    ////console.log("Nombre", TemporalBotones);
    //Event.removeClick(Display.get(e), MensajeSubMenu);
    switch (Display.getName(e)) {
        case "btnSubmenu1a":
            /*----------------------------------- Boton Submenu1 Boton 1 ---------------------------*/
            UpNivelMenu();
            JESCantidadActividades = 2;
            $("body").unbind("keyup", verificar2);
            Event.removeListener(menuContenidos[3] + ".ventana.botonAtras", "mousedown", verificar2);
            Event.removeListener(menuContenidos[3] + ".ventana.botonAdelante", "mousedown", verificar2);
            Display.zIndex(String(ArraySubMenu1[ElementoSubmenu]));
            var arrayFunciones2 = [
     [1, JESActividad1],
     [2, JESActividad2]
 ];
            Display.get("contenido4.ventana").stop("Juego");
            Display.get(menuContenidos[3] + ".ventana.botonAtras").hide();
            Button.over(menuContenidos[3] + ".ventana.botonAdelante", true);
            Presentation.load(menuContenidos[3], menuContenidos[3] + ".ventana.botonAtras", menuContenidos[3] + ".ventana.botonAdelante", null);
            Presentation.folderText("Textos/practica1/Practica1a/Texto", 2);
            Presentation.functionReturn(arrayFunciones2);

            animacionContenidoSubmenu();
            break;
        case "btnSubmenu2a":
            /*----------------------------------- Boton Submenu2 Boton 1 ---------------------------*/
            UpNivelMenu();
            removeJuegoColisionUnoaUno();
            $("body").unbind("keyup", verificar2);
            Event.removeListener(menuContenidos[3] + ".ventana.botonAtras", "mousedown", verificar2);
            Event.removeListener(menuContenidos[3] + ".ventana.botonAdelante", "mousedown", verificar2);
            Display.zIndex(String(ArraySubMenu1[ElementoSubmenu]));
            var arrayFunciones = [
    [1, removeJuegoColisionUnoaUno],
    [2, LSActividad1],
        [3, LSActividad2],
        [4, LSActividad3],
        [5, LSActividad4],
        [6, LSActividad5]

   ];
            Display.get("contenido4.ventana").stop("Juego");
            Display.get(menuContenidos[3] + ".ventana.botonAtras").hide();
            Button.over(menuContenidos[3] + ".ventana.botonAdelante", true);
            Presentation.load(menuContenidos[3], menuContenidos[3] + ".ventana.botonAtras", menuContenidos[3] + ".ventana.botonAdelante", null);
            Presentation.folderText("Textos/practica1/Practica1b/Texto", 6);
            Presentation.functionReturn(arrayFunciones);
            animacionContenidoSubmenu();
            break;
        case "btnSubmenu3a":
            /*----------------------------------- Boton Submenu3 Boton 1 ---------------------------*/
            UpNivelMenu();
            TiempoEntrada = 1.2;
            removeJuegoColisionUnoaUno();
            JCUnCantidadActividades = 2;
            $("body").unbind("keyup", verificar2);
            Event.removeListener(menuContenidos[3] + ".ventana.botonAtras", "mousedown", verificar2);
            Event.removeListener(menuContenidos[3] + ".ventana.botonAdelante", "mousedown", verificar2);
            Display.zIndex(String(ArraySubMenu1[ElementoSubmenu]));
            var arrayFunciones = [
    [1, JASActividad4],
        [2, JASActividad5]
   ];
            Display.get("contenido4.ventana").stop("Juego");
            Display.get(menuContenidos[3] + ".ventana.botonAtras").hide();
            Button.over(menuContenidos[3] + ".ventana.botonAdelante", true);
            Presentation.load(menuContenidos[3], menuContenidos[3] + ".ventana.botonAtras", menuContenidos[3] + ".ventana.botonAdelante", null);
            Presentation.folderText("Textos/practica1/Practica1c/Texto", 2);
            Presentation.functionReturn(arrayFunciones);
            animacionContenidoSubmenu();
            break;
        case "btnSubmenu4a":
            /*----------------------------------- Boton Submenu4 Boton 1 ---------------------------*/
            UpNivelMenu();
            removeJuegoColisionUnoaUno();
            if (Display.get(JESBotonVerificar) != undefined) {
                Display.get(JESBotonVerificar).hide();
            }

            Display.zIndex(String(ArraySubMenu1[ElementoSubmenu]));
            var arrayFunciones = [
  [1, JPAudioActividad1],
     [2, JPAudioActividad2],
     [3, JPAudioActividad3],
     [4, JPAudioActividad4],
     [5, JPAudioActividad5]
   ];
            Display.get("contenido4.ventana").stop("Juego");
            Display.get(menuContenidos[3] + ".ventana.botonAtras").hide();
            Button.over(menuContenidos[3] + ".ventana.botonAdelante", true);
            Presentation.load(menuContenidos[3], menuContenidos[3] + ".ventana.botonAtras", menuContenidos[3] + ".ventana.botonAdelante", null);
            Presentation.folderText("Textos/practica1/Practica1d/Texto", 5);
            Presentation.functionReturn(arrayFunciones);
            $("body").bind("keyup", verificar2);
            Event.listener(menuContenidos[3] + ".ventana.botonAtras", "mousedown", verificar2);
            Event.listener(menuContenidos[3] + ".ventana.botonAdelante", "mousedown", verificar2);
            animacionContenidoSubmenu();
            break;
        case "btnSubmenu1b":
            /*----------------------------------- Boton Submenu1 Boton 2 ---------------------------*/
            UpNivelMenu();
            JESCantidadActividades = 2;
            RemoverPreguntasSinAudio();
            removeJuegoColisionUnoaUno();
            $("body").unbind("keyup", verificar2);
            Event.removeListener(menuContenidos[3] + ".ventana.botonAtras", "mousedown", verificar2);
            Event.removeListener(menuContenidos[3] + ".ventana.botonAdelante", "mousedown", verificar2);
            Display.zIndex(String(ArraySubMenu1[ElementoSubmenu]));
            var arrayFunciones7 = [
  [1, JESActividad3a],
  [2, JESActividad7a]
];
            Display.get("contenido5.ventana").stop("Juego");
            Display.get(menuContenidos[4] + ".ventana.botonAtras").hide();
            Button.over(menuContenidos[4] + ".ventana.botonAdelante", true);
            Presentation.load(menuContenidos[4], menuContenidos[4] + ".ventana.botonAtras", menuContenidos[4] + ".ventana.botonAdelante", null);
            Presentation.folderText("Textos/practica2/Practica2a/Texto", 2);
            Presentation.functionReturn(arrayFunciones7);
            animacionContenidoSubmenu();
            break;
        case "btnSubmenu2b":
            /*----------------------------------- Boton Submenu2 Boton 2 ---------------------------*/
            UpNivelMenu();
            RemoverPreguntasSinAudio();
            removeJuegoColisionUnoaUno();
            JESCantidadActividades = 1;
            $("body").unbind("keyup", verificar2);
            Event.removeListener(menuContenidos[3] + ".ventana.botonAtras", "mousedown", verificar2);
            Event.removeListener(menuContenidos[3] + ".ventana.botonAdelante", "mousedown", verificar2);
            Display.zIndex(String(ArraySubMenu1[ElementoSubmenu]));
            var arrayFunciones = [
  [1, JESActividad3b],
];
            Display.get("contenido5.ventana").stop("Juego");
            Display.get(menuContenidos[4] + ".ventana.botonAtras").hide();
            Button.over(menuContenidos[4] + ".ventana.botonAdelante", true);
            Presentation.load(menuContenidos[4], menuContenidos[4] + ".ventana.botonAtras", menuContenidos[4] + ".ventana.botonAdelante", null);
            Presentation.folderText("Textos/practica2/Practica2b/Texto", 1);
            Presentation.functionReturn(arrayFunciones);
            animacionContenidoSubmenu();
            break;
        case "btnSubmenu3b":
            /*----------------------------------- Boton Submenu3 Boton 2 ---------------------------*/
            UpNivelMenu();
            TiempoEntrada = 1.2;
            RemoverPreguntasSinAudio();
            removeJuegoColisionUnoaUno();
            $("body").unbind("keyup", verificar2);
            Event.removeListener(menuContenidos[3] + ".ventana.botonAtras", "mousedown", verificar2);
            Event.removeListener(menuContenidos[3] + ".ventana.botonAdelante", "mousedown", verificar2);
            Display.zIndex(String(ArraySubMenu1[ElementoSubmenu]));
            var arrayFuncionesBoton2 = [
  [1, JASActividad1],
  [2, JASActividad2]
];
            Display.get("contenido5.ventana").stop("Juego");
            Display.get(menuContenidos[4] + ".ventana.botonAtras").hide();
            Button.over(menuContenidos[4] + ".ventana.botonAdelante", true);
            Presentation.load(menuContenidos[4], menuContenidos[4] + ".ventana.botonAtras", menuContenidos[4] + ".ventana.botonAdelante", null);
            Presentation.folderText("Textos/practica2/Practica2c/Texto", 2);
            Presentation.functionReturn(arrayFuncionesBoton2);
            $("body").bind("keyup", verificar3);
            Event.listener(menuContenidos[4] + ".ventana.botonAtras", "mousedown", verificar3);
            Event.listener(menuContenidos[4] + ".ventana.botonAdelante", "mousedown", verificar3);
            animacionContenidoSubmenu();
            break;
        case "btnSubmenu4b":
            /*----------------------------------- Boton Submenu4 Boton 2 ---------------------------*/
            UpNivelMenu();
            TiempoEntrada = 1.1;
            RemoverPreguntasSinAudio();
            removeJuegoColisionUnoaUno();
            JPAudiosContadorActividades3 = [];
            JPAudiosCantidadActividades3 = 2;
            $("body").unbind("keyup", verificar2);
            Event.removeListener(menuContenidos[3] + ".ventana.botonAtras", "mousedown", verificar2);
            Event.removeListener(menuContenidos[3] + ".ventana.botonAdelante", "mousedown", verificar2);
            Display.zIndex(String(ArraySubMenu1[ElementoSubmenu]));
            var arrayFunciones = [
    [1, JPCargarActividad1a],
   [2, JPCargarActividad2a]
  ];
            Display.get("contenido5.ventana").stop("Juego");
            Display.get(menuContenidos[4] + ".ventana.botonAtras").hide();
            Button.over(menuContenidos[4] + ".ventana.botonAdelante", true);
            Presentation.load(menuContenidos[4], menuContenidos[4] + ".ventana.botonAtras", menuContenidos[4] + ".ventana.botonAdelante", null);
            Presentation.folderText("Textos/practica2/Practica2d/Texto", 2);
            Presentation.functionReturn(arrayFunciones);
            animacionContenidoSubmenu();
            break;
        case "btnSubmenu1c":
            /*----------------------------------- Boton Submenu1 Boton 3 ---------------------------*/
            UpNivelMenu();
            //console.log("Nombre", TemporalBotones);
            JESCantidadActividades = 1;
            JPRemoverActividad3();
            $("body").unbind("keyup", verificar2);
            Event.removeListener(menuContenidos[3] + ".ventana.botonAtras", "mousedown", verificar2);
            Event.removeListener(menuContenidos[3] + ".ventana.botonAdelante", "mousedown", verificar2);
            Display.zIndex(String(ArraySubMenu1[ElementoSubmenu]));
            var arrayFunciones = [
     [1, JESActividad5a]
  ];
            Display.get("contenido6.ventana").stop("Juego");
            Display.get(menuContenidos[5] + ".ventana.botonAtras").hide();
            Button.over(menuContenidos[5] + ".ventana.botonAdelante", true);
            Presentation.load(menuContenidos[5], menuContenidos[5] + ".ventana.botonAtras", menuContenidos[5] + ".ventana.botonAdelante", null);
            Display.get(menuContenidos[5] + ".ventana.botonAtras").hide();
            Display.get(menuContenidos[5] + ".ventana.botonAdelante").hide();
            Presentation.folderText("Textos/practica3/Practica3a/Texto", 1);
            Presentation.functionReturn(arrayFunciones);

            animacionContenidoSubmenu();
            break;
        case "btnSubmenu2c":
            /*----------------------------------- Boton Submenu2 Boton 3 ---------------------------*/
            UpNivelMenu();
            JESCantidadActividades = 1;
            JPRemoverActividad3();
            $("body").unbind("keyup", verificar2);
            Event.removeListener(menuContenidos[3] + ".ventana.botonAtras", "mousedown", verificar2);
            Event.removeListener(menuContenidos[3] + ".ventana.botonAdelante", "mousedown", verificar2);
            Display.zIndex(String(ArraySubMenu1[ElementoSubmenu]));
            var arrayFunciones = [
     [1, JESActividad6a]
  ];
            Display.get("contenido6.ventana").stop("Juego");
            Display.get(menuContenidos[5] + ".ventana.botonAtras").hide();
            Button.over(menuContenidos[5] + ".ventana.botonAdelante", true);
            Presentation.load(menuContenidos[5], menuContenidos[5] + ".ventana.botonAtras", menuContenidos[5] + ".ventana.botonAdelante", null);
            Display.get(menuContenidos[5] + ".ventana.botonAtras").hide();
            Display.get(menuContenidos[5] + ".ventana.botonAdelante").hide();
            Presentation.folderText("Textos/practica3/Practica3b/Texto", 1);
            Presentation.functionReturn(arrayFunciones);

            animacionContenidoSubmenu();
            break;
        case "btnSubmenu3c":
            /*----------------------------------- Boton Submenu3 Boton 3 ---------------------------*/
            UpNivelMenu();
            JPAudiosContadorGlobal = [];
            JPAudiosContadorActividades2 = [];
            JPAudiosCantidadActividades2 = 3;
            TiempoEntrada = 1.4;
            JPRemoverActividad3();
            $("body").unbind("keyup", verificar2);
            Event.removeListener(menuContenidos[3] + ".ventana.botonAtras", "mousedown", verificar2);
            Event.removeListener(menuContenidos[3] + ".ventana.botonAdelante", "mousedown", verificar2);
            Display.zIndex(String(ArraySubMenu1[ElementoSubmenu]));
            var arrayFunciones = [
     [1, JPCargarActividad1],
      [2, JPCargarActividad2],
      [3, JPCargarActividad3]
  ];
            Display.get("contenido6.ventana").stop("Juego");
            Display.get(menuContenidos[5] + ".ventana.botonAtras").hide();
            Button.over(menuContenidos[5] + ".ventana.botonAdelante", true);
            Presentation.load(menuContenidos[5], menuContenidos[5] + ".ventana.botonAtras", menuContenidos[5] + ".ventana.botonAdelante", null);
            Presentation.folderText("Textos/practica3/Practica3c/Texto", 3);
            Presentation.functionReturn(arrayFunciones);

            animacionContenidoSubmenu();
            break;
        case "btnSubmenu1d":
            /*----------------------------------- Boton Submenu1 Boton 4 ---------------------------*/
            UpNivelMenu();
            removeJuegoColision();
            juegoColisionCantidadActividades = 2;
            $("body").unbind("keyup", verificar2);
            Event.removeListener(menuContenidos[3] + ".ventana.botonAtras", "mousedown", verificar2);
            Event.removeListener(menuContenidos[3] + ".ventana.botonAdelante", "mousedown", verificar2);
            Display.zIndex(String(ArraySubMenu1[ElementoSubmenu]));
            var arrayFunciones = [
   [1, removeJuegoColision],
    [2, removeJuegoColision],
     [3, JASActividad1bRay],
     [4, JASActividad11b]
 ];
            Display.get("contenido7.ventana").stop("Juego");
            Presentation.load(menuContenidos[6], menuContenidos[6] + ".ventana.botonAtras", menuContenidos[6] + ".ventana.botonAdelante", null);
            Presentation.folderText("Textos/pronunciacion/Practica1d/Texto", 4);
            Presentation.functionReturn(arrayFunciones);
            animacionContenidoSubmenu();
            break;
        case "btnSubmenu2d":
            /*----------------------------------- Boton Submenu2 Boton 4 ---------------------------*/
            UpNivelMenu();
            removeJuegoColision();
            juegoColisionCantidadActividades = 2;
            $("body").unbind("keyup", verificar2);
            Event.removeListener(menuContenidos[3] + ".ventana.botonAtras", "mousedown", verificar2);
            Event.removeListener(menuContenidos[3] + ".ventana.botonAdelante", "mousedown", verificar2);
            Display.zIndex(String(ArraySubMenu1[ElementoSubmenu]));
            var arrayFunciones = [
  [1, removeJuegoColision],
  [2, JASActividad1d],
  [3, JASActividad12d]
   ];
            Display.get("contenido7.ventana").stop("Juego");
            Presentation.load(menuContenidos[6], menuContenidos[6] + ".ventana.botonAtras", menuContenidos[6] + ".ventana.botonAdelante", null);
            Presentation.folderText("Textos/pronunciacion/Practica2d/Texto", 3);
            Presentation.functionReturn(arrayFunciones);
            animacionContenidoSubmenu();
            break;
        case "btnSubmenu3d":
            /*----------------------------------- Boton Submenu3 Boton 4 ---------------------------*/
            UpNivelMenu();
            removeJuegoColision();
            juegoColisionCantidadActividades = 1;
            $("body").unbind("keyup", verificar2);
            Event.removeListener(menuContenidos[3] + ".ventana.botonAtras", "mousedown", verificar2);
            Event.removeListener(menuContenidos[3] + ".ventana.botonAdelante", "mousedown", verificar2);
            Display.zIndex(String(ArraySubMenu1[ElementoSubmenu]));
            var arrayFunciones = [
   [1, removeJuegoColision],
     [2, JASActividad1e]
  ];
            Display.get("contenido7.ventana").stop("Juego");
            Presentation.load(menuContenidos[6], menuContenidos[6] + ".ventana.botonAtras", menuContenidos[6] + ".ventana.botonAdelante", null);
            Presentation.folderText("Textos/pronunciacion/Practica3d/Texto", 2);
            Presentation.functionReturn(arrayFunciones);
            animacionContenidoSubmenu();
            break;
        case "btnSubmenu4d":
            /*----------------------------------- Boton Submenu4 Boton 4 ---------------------------*/
            UpNivelMenu();
            $("body").unbind("keyup", verificar2);
            Event.removeListener(menuContenidos[6] + ".ventana.botonAtras", "mousedown", verificar2);
            Event.removeListener(menuContenidos[6] + ".ventana.botonAdelante", "mousedown", verificar2);
            removeJuegoColision();
            Display.zIndex(String(ArraySubMenu1[ElementoSubmenu]));
            Display.get("contenido7.ventana").stop("Juego");
            Presentation.load(menuContenidos[6], menuContenidos[6] + ".ventana.botonAtras", menuContenidos[6] + ".ventana.botonAdelante", null);
            Presentation.folderText("Textos/pronunciacion/Practica4d/Texto", 2);
            var arrayFunciones = [
            [2, verificarNavegador],
            [4, verificarultimaPagina]
  ];
            Presentation.functionReturn(arrayFunciones);
            animacionContenidoSubmenu();
            cargarReconocimiento();
            break;
    }


};

//Mensaje
function verificarNavegador() {
    Display.get(menuContenidos[6]).hide();    
    if (Core.browser.chrome == false) {
        Display.addChild("mensajeNavegador");
        Event.click("mensajeNavegador.cerrar", cerrarMensajeNavegador);
    } else {
        Display.addChild("mensajeNavegador2");
        Event.click("mensajeNavegador2.cerrar", cerrarMensajeNavegador);
    }
}

function cerrarMensajeNavegador() {
    Display.removeChild("mensajeNavegador");
    Display.removeChild("mensajeNavegador2");
    Display.get(menuContenidos[6]).show();
    cargarReconocimiento();

}

function cargarReconocimiento() {
    Timer.load(5, function () {
        Sound.speakState(ResultSpeak);
    });
}

function ResultSpeak(result) {
    console.log(result);
    if (result == false) {
        //alert("Falso");
        Display.addChild("mensajeIncorrecto");
        Display.position("mensajeIncorrecto", 216, 185);
        Sound.play("media/mensajes/mal");

        TweenMax.to("mensajeIncorrecto", 1, {
            x: 1050,
            ease: Cubic.easeIn,
            delay: 2,
            onComplete: removerIncorrecto
        });
    } else {
        //alert("Verdadero");
        Display.addChild("mensajeCorrecto");
        Display.position("mensajeCorrecto", 216, 185);
        Sound.play("media/mensajes/bien");
        TweenMax.to("mensajeCorrecto", 1, {
            x: 1050,
            ease: Cubic.easeIn,
            delay: 2,
            onComplete: removerCorrecto
        });
    }
}

function removerCorrecto() {
    Display.removeChild("mensajeCorrecto");
}

function removerIncorrecto() {
    Display.removeChild("mensajeIncorrecto");

}

function verificarultimaPagina() {
    if (Presentation.getCurrentPage() == 4) {
        finalJuegoTotal = true;
        funcionAnimarFlecha();
    }
}

function funcionAnimarFlecha() {
    //Display.get(ArrayFlechaSubMenu1[ElementoSubmenu]).play(0);

    //console.log(ArraySubMenu1[ElementoSubmenu] + "." + TemporalBotones);
    if (finalJuegoTotal) {
        finalJuegoTotal = false;
        console.log("Temmporala boton Animacion",ArraySubMenu1[ElementoSubmenu] + "." + TemporalBotones);
        TweenMax.to(ArraySubMenu1[ElementoSubmenu] + "." + TemporalBotones, 0.5, {
            scaleX: 0.7,
            scaleY: 0.7,
            onComplete: animarMano
        });
    }
}

function animarMano() {

    if (ElementoSubmenu != undefined || TemporalBotones != undefined) {
        var posicion = ArrayBotonesSubMenu1[ElementoSubmenu].indexOf(TemporalBotones);
        //console.log("cantidad" + ContadorActualActividades.length);
        //console.log(posicion);
        ContadorActualActividades[posicion] = true;
        //console.log("elementos2" + "/" + ContadorActualActividades);
        verificarFinal();

    }
    if (estadoFuegoFv2 == true) {
        estadoFuegoFv2 = false;
        mostrarMenuPuntero();
        salirOver();
    }
}

function verificarFinal() {
    contadorOpciones = 0;
    //console.log("elementos", ContadorActualActividades);
    for (var f = 0; f < ContadorActualActividades.length; f++) {
        //console.log(ContadorActualActividades[f]);
        if (ContadorActualActividades[f] == true) {
            contadorOpciones++;
            //console.log("es true" + contadorOpciones);
            if (contadorOpciones == ArrayBotonesSubMenu1[ElementoSubmenu].length) {
                mostrarMenuPuntero();
                salirOver();
            }

        }
    }

}

function funcionocultarAnimarFlecha() {
    Display.get(ArrayFlechaSubMenu1[ElementoSubmenu]).stop(0);
    TweenMax.to(String(ArrayFlechaSubMenu1[ElementoSubmenu]), 0.5, {
        alpha: 0
    });
}


function animacionContenidoSubmenu() {
    TweenMax.to(menuContenidos[nivelMenu - 1], 0.01, {
        alpha: 0,
        x: -1500,
        y: 80,
        onComplete: function () {
            TweenMax.to(menuContenidos[nivelMenu - 1], 1, {
                alpha: 1,
                x: 0,
                y: 80,
                onComplete: reasignaevento
            });
        }
    });
};

function reasignaevento() {
    for (var f = 0; f < ArrayBotonesSubMenu1[ElementoSubmenu].length; f++) {
        var refElementoContenedor = ArraySubMenu1[ElementoSubmenu];
        Event.click(String(refElementoContenedor + "." + ArrayBotonesSubMenu1[ElementoSubmenu][f]), MensajeSubMenu);
        //Button.over(String(refElementoContenedor + "." + subMenuBotones[elementoacargar][f]), true);
        //Display.get(String(refElementoContenedor + "." + subMenuBotones[elementoacargar][f])).hide();
    }
}

function UpNivelMenu() {
    Display.zIndex(ArraySubMenu1[ElementoSubmenu]);
}

function NivelUpMenuPrincipal() {
    Display.zIndex("menu", "Stage");
}

function verificar(event) {
    if (event.type == "keyup") {
        if (event.which == 37 && Presentation.getCurrentPage() == 2) {
            RemoverElementos();
        }
        if (event.which == 39 && Presentation.getCurrentPage() == 1) {
            RemoverElementos();
        }
    } else {
        if (Display.getName(event) == "botonAtras" && Presentation.getCurrentPage() == 2) {
            RemoverElementos();
        }
        if (Display.getName(event) == "botonAdelante" && Presentation.getCurrentPage() == 1) {
            RemoverElementos();
        }
    }
}

function verificar2(event) {
    if (event.type == "keyup") {
        if (event.which == 37 && Presentation.getCurrentPage() != 1) {
            JPAudioRemoverElemento();
        }
        if (event.which == 39 && Presentation.getCurrentPage() != 5) {
            JPAudioRemoverElemento();
        }
        if (event.which == 37 && Presentation.getCurrentPage() != 1) {
            JPAudioRemoverElemento();
        }
        if (event.which == 39 && Presentation.getCurrentPage() != 5) {
            JPAudioRemoverElemento();
        }
    } else {
        if (Display.getName(event) == "botonAtras" && Presentation.getCurrentPage() != 5) {
            JPAudioRemoverElemento();
        }
        if (Display.getName(event) == "botonAdelante" && Presentation.getCurrentPage() != 5) {
            JPAudioRemoverElemento();
        }
    }
}

function verificar3(event) {
    if (event.type == "keyup") {
        if (event.which == 37 && Presentation.getCurrentPage() == 2) {
            Display.removeChildArray(Temporal2);
            Display.removeChildArray(Temporal1);
        }
        if (event.which == 39 && Presentation.getCurrentPage() == 1) {
            TiempoEntrada = 0.4;
            Display.removeChildArray(Temporal2);
            Display.removeChildArray(Temporal1);
        }
    } else {
        if (Display.getName(event) == "botonAtras" && Presentation.getCurrentPage() == 2) {
            Display.removeChildArray(Temporal2);
            Display.removeChildArray(Temporal1);
        }
        if (Display.getName(event) == "botonAdelante" && Presentation.getCurrentPage() == 1) {
            TiempoEntrada = 0.4;
            Display.removeChildArray(Temporal2);
            Display.removeChildArray(Temporal1);
        }
    }
}

function mostrarMenuPuntero() {
    if (Display.get("menuPuntero")) {
        Display.removeChild("menuPuntero");
        ContadorActualActividades = [];
        contadorOpciones = 0;
        Display.addChild("menuPuntero");
    } else {
        Display.addChild("menuPuntero");
    }
    //console.log(nivelMenu);
    switch (nivelMenu) {
        case 0:
            Display.position("menuPuntero", 209, 11);
            break;
        case 1:
            Display.position("menuPuntero", 270, 11);
            break;
        case 2:
            Display.position("menuPuntero", 330, 11);
            break;
        case 3:
            Display.position("menuPuntero", 390, 11);
            break;
        case 4:
            Display.position("menuPuntero", 445, 11);
            break;
        case 5:
            Display.position("menuPuntero", 510, 11);
            break;
        case 6:
            Display.position("menuPuntero", 570, 11);
            break;
        case 7:
            Display.position("menuPuntero", 837, 11);
            break;
    }
    Timer.load(0.8, function () {
        Display.get("menuPuntero").play();
    });
}

function removerMenuPuntero() {
    Display.get("menuPuntero").hide();
    Display.get("menuPuntero").stop();
    contadorOpciones = 0;
    ContadorActualActividades = [];
    //Display.removeChild(Puntero);
}

function MensajeSubMenuOut(e) {
    //Display.get(e).stop("Out");
    //Event.removeListener(Display.get(e), MensajeSubMenuOut);
    //Event.listener(Display.get(e), MensajeSubMenuOver);
};




/*global jQuery,console,Sound,window,navigator,Core,document,Display,Options,Timer,Event,TweenMax,Audio,Button,webkitSpeechRecognition*/
/*jshint -W020*/

/**
Controlar el flujo de los audios utilizados en la multimedia, reproducir los audios en los distintos navegadores, la libreria permite manejar un unico canal de audio.


@@class Sound
*/
(function ($) {

    Sound = {};

    var funcionRetornoAudioTerminado = function () {};
    var cargaAudioAjax = null;
    var estadoMute = false;
    var botonDeSonido = $();
    var estadosDeBotonSonido = {
        "normal": 0,
        "silencio": 1000
    };
    var tiposDeAudios = {
        'mp3': 'audio/mpeg',
        'ogg': 'audio/ogg',
        'wav': 'audio/wav',
        'aac': 'audio/aac',
        'm4a': 'audio/x-m4a'
    };
    var botonesPlay = [];
    var rutaAudiosDeBotones = {};
    var reconocimientoDeVoz;
    var botonMicrofono;
    var conteendorTextoReconocimiento = "";
    var listTextMicrophone = {};
    var textoValidarReconocimiento;
    var funcionRetornoReconocimiento;

    /**
    Habilita el microfono para poder realizar una grabación de audio y luego poder escucharla.
    @method Sound.microphone
    */
    Sound.microphone = function () {
        if (navegadorSoportaMedia()) {
            $("body").append("<video id='video' autoplay></video>");
            window.URL = window.URL || window.webkitURL;
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
            navigator.getUserMedia({
                video: true,
                audio: true
            }, function (media) {
                $("video").attr("src", window.URL.createObjectURL(media));
            }, function () {
                console.erro("paila no sirve");
            });
        } else {
            console.error("Sound.microphone: El navegador no soporta esta opcion.");
        }
    };

    function navegadorSoportaMedia() {
        return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
    }


    /**
    @method Sound.play
    @param rutaAudio {String} Ruta donde se encuentra el audio.
    @param funcionRetorno {Function} Funcion a ejecutar cuando termine el audio.
    @example
        //Para reproducir un audio llamado sonido
        Sound.play("media/presentacion/sonido");
        //Para retornar una funcion cuando finalize el audio
        Sound.play("media/sonido", finAudio);
        function finAudio (){
            console.log("audio finalizado");
        };  
    */
    Sound.play = function (rutaAudio, funcionRetorno) {
        try {
            reproducirAudio(rutaAudio, funcionRetorno);
        } catch (error) {
            console.error("Sound.play: " + error);
        }
    };

    /**
    Finaliza la ejecucion de un audio, limpia y elimina los audios qeu se hallan cargado.
    @method Sound.stop
    @example
        //Para detener todos los audios que se encuentre sonando
        stopAudio();
    */
    Sound.stop = function () {
        try {
            detenerSonido();
        } catch (error) {
            console.error("Sound.stop: " + error);
        }
    };

    /**
    Indica el estado del audio.
    @method Sound.mute
    @param estado {Boolean} Indica si se activa o no.
    @example
        //para silenciar por completo un audio 
        Sound.mute(false);
        //para reactivar un audio de nuevo y que este continue en la misma posicion
        Sound.mute(true);
    */
    Sound.mute = function (estado) {
        try {
            silenciarAudio(estado);
        } catch (error) {
            console.error("Sound.mute: " + error);
        }
    };

    /**
    Elemento que controla el sonido, se debe pasar un simbolo que en su linea de tiempo tenga los estados del boton como etiqueta (normal y silencio)
    o en posicion de segundos (0 segundos y 1 segundo).
    @method Sound.buttonMute
    @param elemento {(String|Object)} Elemento que controlara el sonido.
    @example
        //Para indicar que un simbolo realizara las funciones de boton de audio
        Sound.buttonMute("Menu.botonSonido");
    */
    Sound.buttonMute = function (elemento) {
        try {
            cargarBotonMute(elemento);
        } catch (error) {
            console.error("Sound.button: " + error);
        }
    };

    /**
    Permite reproducir audios por cada boton que se presione 
    @method Sound.playButtons
    */
    Sound.playButtons = function (botones, audios) {
        try {
            cargarBotonesDeAudios(botones, audios);
        } catch (error) {
            console.error("Sound.playButtons: " + error);
        }
    };

    /**
    @method Sound.stopPlayButtons
    */
    Sound.stopPlayButtons = function () {
        try {
            pausarAudiosBotonPlay();
        } catch (error) {
            console.error("Sound.stopPlayButtons: " + error);
        }
    };

    /**
    @method Sound.removePlayButtons
    */
    Sound.removePlayButtons = function () {
        try {
            eliminarBotonesDeAudios();
        } catch (error) {
            console.error("Sound.removePlayButtons: " + error);
        }
    };

    /**
    Carga una barra de audio con un control de volumen y progreso, ideal para las actividades de escucha
    @method Sound.controls
    */
    Sound.controls = function (contenedor) {
        try {
            cargarControlAudio(contenedor);
        } catch (error) {
            console.error("Sound.controls: " + error);
        }
    };

    /**
    Habilita el microfono para el reconocimiento de voz
    @method Sound.speak
    */
    Sound.speak = function (boton, contenedor) {
        try {
            cargarHablar(boton, contenedor);
        } catch (error) {
            console.error("Sound.speak: " + error);
        }
    };

    /**
    Carga el texto para validar en el reconocimiento de voz
    @method Sound.speakText
    */
    Sound.speakText = function (textoValidar, elemento) {
        try {
            cargarTextoReconocimiento(textoValidar, elemento);
        } catch (error) {
            console.error("Sound.speakText: " + error);
        }
    };

    /**
    Indica si el texto fue correcto o no 
    @method Sound.speakState
    */
    Sound.speakState = function (funcionRetorno) {
        try {
            cargarFuncionEstadoReconocimiento(funcionRetorno);
        } catch (error) {
            console.error("Sound.speakState: " + error);
        }
    };

    /**
    @method Sound.updateProgress
    @private
    */
    Sound.updateProgress = function (elementoAudio) {
        try {
            actualizarProgresoAudio(elementoAudio);
        } catch (error) {
            console.error("Sound.updateProgress: " + error);
        }
    };

    Sound.speakClose = function () {
        listTextMicrophone = {};
    }


    /**
    @method Sound.positionBarAudio
    @private
    */
    Sound.positionBarAudio = function (contenedorProgreso, evento) {
        try {
            posicionarBarraDeAudio(contenedorProgreso, evento);
        } catch (error) {
            console.error("Sound.positionBarAudio: " + error);
        }
    };

    function reproducirAudio(rutaAudio, funcionRetorno) {
        var extension = "mp3";
        if (Core.browser.firefox) {
            extension = "ogg";
        }
        rutaAudio += "." + extension;
        funcionRetornoAudioTerminado = funcionRetorno || function () {};
        detenerSonido();
        var tipoAudio = tiposDeAudios[extension];
        $.when(
            $.get(rutaAudio)
        ).then(function () {
            var etiquetaHtmlAudio = "<audio id='codecraft-audio' " +
                "preload='auto' type='" + tipoAudio + "'" +
                "src='" + rutaAudio + "'></audio>";
            $("body").append(etiquetaHtmlAudio);
            if ($('#codecraft-audio').length > 0) {
                document.getElementById('codecraft-audio').muted = estadoMute;
                document.getElementById('codecraft-audio').play();
                $('#codecraft-audio').bind('ended', sonidoFinalizado);
            }
        }, sonidoNoEncontrado);
    }

    function detenerSonido() {
        if (document.getElementById('codecraft-audio') !== null) {
            $('#codecraft-audio').unbind('ended');
            document.getElementById('codecraft-audio').pause();
            //document.getElementById('codecraft-audio').currentTime = 0;
        }
        $('#codecraft-audio').remove();
        if (cargaAudioAjax !== null) {
            cargaAudioAjax.abort();
            cargaAudioAjax = null;
        }
    }

    function silenciarAudio(estado) {
        estadoMute = estado;
        var elementoAudio = document.getElementById('codecraft-audio');
        if (elementoAudio !== null) {
            elementoAudio.muted = estadoMute;
        }
        cambiarEstadoDeBoton();
    }

    function cargarBotonMute(elemento) {
        botonDeSonido = Display.get(elemento);
        if (botonDeSonido.getLabelPosition("normal") !== undefined) {
            estadosDeBotonSonido.normal = botonDeSonido.getLabelPosition("normal");
        }
        if (botonDeSonido.getLabelPosition("silencio") !== undefined) {
            estadosDeBotonSonido.silencio = botonDeSonido.getLabelPosition("silencio");
        }
        cambiarEstadoDeBoton();
        botonDeSonido.bind("mouseup", botonSonidoPresionado);
        botonDeSonido.css({
            "cursor": "pointer"
        });
    }

    function sonidoFinalizado() {
        $('#codecraft-audio').remove();
        funcionRetornoAudioTerminado();
        funcionRetornoAudioTerminado = function () {};
    }

    function cambiarEstadoDeBoton() {
        if (estadoMute) {
            botonDeSonido.stop(estadosDeBotonSonido.silencio);
        } else {
            botonDeSonido.stop(estadosDeBotonSonido.normal);
        }
    }

    function botonSonidoPresionado() {
        silenciarAudio(!estadoMute);
    }

    function cargarBotonesDeAudios(botones, audios) {
        botonesPlay = botones;
        rutaAudiosDeBotones = {};
        for (var i = 0; i < botonesPlay.length; i++) {
            var botonActual = Display.get(botonesPlay[i]);
            var idDelBoton = botonActual.attr("id");
            rutaAudiosDeBotones[idDelBoton] = audios[i];
        }
        cargarAudiosBotonesPlay();
    }

    function cargarAudiosBotonesPlay() {
        for (var i = 0; i < botonesPlay.length; i++) {
            var botonActual = Display.get(botonesPlay[i]);
            var idDelBoton = botonActual.attr("id");
            var nombreDelAudio = rutaAudiosDeBotones[idDelBoton];
            cargarAudioBotonesPlayEnDom(nombreDelAudio, idDelBoton);
        }
        listenerBotonesPlay();
    }

    function cargarAudioBotonesPlayEnDom(rutaAudio, idDelAudio) {
        var extension = "mp3";
        if (Core.browser.firefox) {
            extension = "ogg";
        }
        rutaAudio += "." + extension;
        var tipoAudio = tiposDeAudios[extension];
        $.when(
            $.get(rutaAudio)
        ).then(function () {
            var funcionProgreso = ($("#" + idDelAudio).parent().parent().hasClass("boton-play")) ? "Sound.updateProgress(this)" : "";
            var etiquetaHtmlAudio = "<audio id='audio-" + idDelAudio + "' preload='auto' type='" + tipoAudio + "' src='" + rutaAudio + "' ontimeupdate='" + funcionProgreso + "'></audio>";
            $("body").append(etiquetaHtmlAudio);
            rutaAudiosDeBotones[idDelAudio] = document.getElementById('audio-' + idDelAudio);
            if ($('#audio-' + idDelAudio).length > 0) {
                $('#audio-' + idDelAudio).bind('ended', sonidoBotonesPlayFinalizado);
            }
        });
    }

    function listenerBotonesPlay() {
        Event.click(botonesPlay, botonPlayPresionado);
    }

    function botonPlayPresionado(botonPresionado) {
        var idDelBoton = botonPresionado.attr("id");
        var audioActual = rutaAudiosDeBotones[idDelBoton];
        if (tipoDeVariable(audioActual) !== "string") {
            if (audioActual.paused) {
                pausarAudiosBotonPlay();
                audioActual.play();
                botonPresionado.stop("pause");
            } else {
                audioActual.pause();
                audioActual.currentTime = 0;
                botonPresionado.stop("play");
            }
        }
    }

    function pausarAudiosBotonPlay() {
        for (var i = 0; i < botonesPlay.length; i++) {
            var botonActual = Display.get(botonesPlay[i]);
            var idDelBoton = botonActual.attr("id");
            var audioActual = rutaAudiosDeBotones[idDelBoton];
            if (tipoDeVariable(audioActual) !== "string") {
                botonActual.stop("play");
                audioActual.pause();
                audioActual.currentTime = 0;
            }
        }
    }

    function eliminarBotonesDeAudios() {
        pausarAudiosBotonPlay();
        for (var i = 0; i < botonesPlay.length; i++) {
            var botonActual = Display.get(botonesPlay[i]);
            var idDelBoton = botonActual.attr("id");
            $('#audio-' + idDelBoton).remove();
        }
        eliminarListenerBotonesPlay();
        botonesPlay = [];
        rutaAudiosDeBotones = {};
    }

    function eliminarListenerBotonesPlay() {
        Event.removeClick(botonesPlay);
    }

    function sonidoBotonesPlayFinalizado() {
        pausarAudiosBotonPlay();
    }



    var cargarControl;
    var contenedorControl = $("body");

    function cargarControlAudio(contenedor) {
        contenedorControl = Display.get(contenedor);
        cargarControl = true;
    }

    function sonidoNoEncontrado() {
        $('#codecraft-audio').remove();
        //reproducirAudio(Options.sound().rutaAudioVacio, funcionRetornoAudioTerminado);
        Timer.load(Options.sound().tiempoAudio, funcionRetornoAudioTerminado);
    }

    function tipoDeVariable(elemento) {
        return $.type(elemento);
    }

    function cargarHablar(boton, contenedor) {
        if (soportaReconocimiento()) {
            funcionRetornoReconocimiento = function () {};
            //textoValidarReconocimiento = "";
            botonMicrofono = Display.get(boton);
            botonMicrofono.stop("desactivado");
            //conteendorTextoReconocimiento = Display.get(contenedor);
            contenedor = Display.get(contenedor + "." + Options.containerText());
            if (contenedor.length > 0) {
                //conteendorTextoReconocimiento = contenedor;
            }
            reconocimientoDeVoz = new webkitSpeechRecognition();
            reconocimientoDeVoz.onresult = function (event) {
                if (event.results.length > 0) {
                    conteendorTextoReconocimiento = event.results[0][0].transcript;
                }
                validarTextoReconocimiento();
            };
            reconocimientoDeVoz.onend = function () {
                Timer.load(0.5, function () {
                    symbolCurrentMicrophone.stop("desactivado");
                });
            };
            reconocimientoDeVoz.onerror = function () {
                symbolCurrentMicrophone.stop("desactivado");
            };
            listenerDeReconocimientoDeVoz();
        }
    }

    function soportaReconocimiento() {
        if (Core.browser.chrome) {
            return true;
        }
        return false;
    }

    var currentMicrophone = null;
    var symbolCurrentMicrophone = null;

    function validarTextoReconocimiento() {
        textoValidarReconocimiento = listTextMicrophone[currentMicrophone];
        var textoContenedor = conteendorTextoReconocimiento.toLowerCase();
        var estadoRespuesta = false;
        if (textoContenedor === textoValidarReconocimiento) {
            estadoRespuesta = true;
        }
        //console.log(textoContenedor);
        //console.log(textoValidarReconocimiento);
        funcionRetornoReconocimiento(estadoRespuesta);
    }

    function listenerDeReconocimientoDeVoz() {
        Event.click(botonMicrofono, iniciarReconocimientoDeVoz);
        Button.over(botonMicrofono);
    }

    function iniciarReconocimientoDeVoz(microphonePress) {
        currentMicrophone = Display.getName(microphonePress);
        symbolCurrentMicrophone = microphonePress;
        microphonePress.stop("activado");
        reconocimientoDeVoz.lang = "en-US";
        reconocimientoDeVoz.start();
    }

    function cargarTextoReconocimiento(textoValidar, elemento) {
        listTextMicrophone[Display.getName(elemento)] = textoValidar.toLowerCase();
    }

    function cargarFuncionEstadoReconocimiento(funcionRetorno) {
        funcionRetornoReconocimiento = funcionRetorno;
    }

    function actualizarProgresoAudio(elementoAudio) {
        var idAudio = "control-audio-" + elementoAudio.id.substr(6);
        elementoAudio = document.getElementById(elementoAudio.id);
        var barraDeProgreso = $("#" + idAudio + " .barra-progreso");
        var sliderDeProgreso = $("#" + idAudio + " .slider-audio");
        var porcentajeAudio = (elementoAudio.currentTime / elementoAudio.duration);
        var tamanoBarra = sliderDeProgreso.outerWidth() * porcentajeAudio;
        barraDeProgreso.width(Math.round(tamanoBarra) + "px");
    }

    function posicionarBarraDeAudio(contenedorProgreso, evento) {
        var idAudio = contenedorProgreso.id.substr(21);
        var audioActual = rutaAudiosDeBotones[idAudio];
        var botonPlay = $("#" + idAudio);
        var contenedor = $("#" + contenedorProgreso.id);
        var tamanoContendor = contenedor.outerWidth();
        var posicionDelClick = evento.pageX - contenedor.offset().left;
        var porcentajeAudio = (posicionDelClick / tamanoContendor);
        posicionarAudio(idAudio, porcentajeAudio);
        if (audioActual.paused) {
            pausarAudiosBotonPlay();
            audioActual.play();
            botonPlay.stop("pause");
        }
    }

    function posicionarAudio(idAudio, porcentajeAudio) {
        var elementoAudio = document.getElementById("audio-" + idAudio);
        elementoAudio.currentTime = elementoAudio.duration * porcentajeAudio;
    }

})(jQuery);