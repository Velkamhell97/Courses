function verificarPagActual3() {
    paginaCont3 = 0;
    PaginaActualMenu3 = Presentation.getCurrentPage();
    /************************** Act 1 CONTENIDO 1**********************/
    if (nivelActiCont3 == 1) {
        cerrarBotonVerificar();
        paginaCont3 = 1;
        estado = "";

        JESOpcionesBuenas = [
       "a",
       "j",
       "j",
       "m"
       ];

        buenasInput = 3;
        //cargarBotonVerificar();
        //Event.click(Display.get("botonVerificar"), validacionCamposCont3Pag1);
    } else if (nivelActiCont3 == 2) {
        cerrarBotonVerificar();
        estado = "";
        cargarFuncionABDC();
    } else if (nivelActiCont3 == 3) {
        cerrarBotonVerificar();
        estado = "";
        cargarFuncionCheck();
    } else if (nivelActiCont3 == 4) {
        cerrarBotonVerificar();
        estado = "";
        cargarJuegoFV();
        estadoArrayFV = 1;
    }

    Display.zIndex("subMenu1");
    Display.zIndex("menu");
};

function salirContenido3() {
    TweenLite.to(Display.get(menuContenidos[2]), 1, {
        alpha: 1,
        x: -1500,
        y: 80,
        onComplete: function () {
            Display.removeChild(menuContenidos[2]);
        }
    });

    TweenLite.to(Display.get("globoIntro"), 1, {
        alpha: 1
    });

    salirOver();
    //cargarOverBtnSeleccionado(); 
};

/*********************************************************************************/
/*********************************************************************************/
/********************************* JUEGO DE ESCRIBIR *****************************/
/*********************************************************************************/
/*********************************************************************************/
/**
 * Las siguientes cuatro funciones contienen la lógica para los juegos que se desarrollan con escritura.
 */
function escribirCargar(cantCampos) {
    // Configuración inicial de variables.
    bandera = false;
    contFallos = 0;
    cantCamposEscribir = cantCampos;
    // Configuración de las entradas de texto.
    Options.input({
        intentosMalos: cantCamposEscribir, // Cantidad de campos para escribir.
        opacidadVerificar: 0,
        mostrarOpcionesBuenas: true
    });
    escribirIniciar(); // Cargo los contenidos.
};

function escribirIniciar() {
    Input.load(menuContenidos[2]);
    Input.textVerify("edge_includes/Textos/contenido3/escribir/Texto1");
    Input.stateInput(escribirMostrarIntentos);
    Input.finish(escribirFinJuego);
};

function escribirMostrarIntentos(intentosRestantes) {
    if (bandera) {
        contFallos = cantCamposEscribir - intentosRestantes;
        mostrarRetroalimentacion();
    } else {
        bandera = true;
    }
};

/**
 * En los tipos de actividad de escritura, "gano" siempre va a ser true.
 */
function escribirFinJuego(gano) {
    if (gano) {
        mostrarRetroalimentacion();
    }
};

function mostrarRetroalimentacion() {
    if (contFallos >= 0 && contFallos <= 1) {
        cargarVentanaEscribirCont3pag1();
        Display.get("escribirMensaje").stop("bien");

        Text.load("escribirMensaje", "Excellent job. Keep on practicing. / Excelente trabajo. Siga practicando.", "middle center");
    }
    if (contFallos >= 2 && contFallos <= 3) {
        cargarVentanaEscribirCont3pag1();
        Display.get("escribirMensaje").stop("mal");

        Text.load("escribirMensaje", "Not bad. Try again and improve this result. / Nada mal. Intente de nuevo y mejore este resultado.", "middle center");
    }
    if (contFallos >= 4) {
        cargarVentanaEscribirCont3pag1();
        Display.get("escribirMensaje").stop("mal");

        Text.load("escribirMensaje", "You can do better. Try again. / Lo puede hacer mejor. Intente de nuevo.", "middle center");
    }

    Event.click("escribirMensaje.cerrar", cerrarVentanaEscribirCont3pag1);
    Button.over("escribirMensaje.cerrar");
};


/*********************************************************************************/
/*********************************************************************************/
/********************************* JUEGO DE CHECKEAR *****************************/
/*********************************************************************************/
/*********************************************************************************/
/**********************VARIABLES ***********************/
var arrayCont3Pag4 = [
                       "Cont3Check.btn1",
                       "Cont3Check.btn2",
                       "Cont3Check.btn3",
                       "Cont3Check.btn4",
                       "Cont3Check.btn5",
                       "Cont3Check.btn6"
                      ];
var OpcionesCorrectas = [
    "btn2",
    "btn3",
    "btn4",
    "btn5"
];


var almacenarespuestaBuenas = [

];


var almacenarespuestaMalas = [

];
var pBuenasCheck = 0;
var pMalasCheck = 0;



var JPAudiosActividad3 = [
 "media/Textos/contenido4/audio1"
];

function cargarFuncionCheck() {
    reiniciarVariablesCheck();
    estadoActCheck1 = true;
    Display.addChild("Cont3Check");
    TweenMax.to(Display.get("Cont3Check"), 0.1, {
        alpha: 0,
        x: 350,
        y: 230,
        onComplete: function () {
            TweenMax.to(Display.get("Cont3Check"), 1, {
                alpha: 1
            });
            Display.get("Cont3Check").play("inicio");
        }
    });
    cargarBotonVerificar();
    //Display.addChild("botonVerificar"); 
    Display.get("botonVerificar").hide();
    //Display.position("botonVerificar", 210, 110);
    Event.click(arrayCont3Pag4, validarBotonesCont3Check);
    Event.click(Display.get("botonVerificar"), validarRespuestasCheck);

}

function validarBotonesCont3Check(e) {
    Display.get("botonVerificar").show();
    var NombreBoton = Display.getName(e);
    console.log(OpcionesCorrectas.indexOf(NombreBoton));
    Display.get(e).stop("bueno");
    Event.removeClick(Display.get("Cont3Check." + NombreBoton), validarBotonesCont3Check);
    Event.click(Display.get("Cont3Check." + NombreBoton), quitarSeleccion);
    if (OpcionesCorrectas.indexOf(NombreBoton) != -1) {
        console.log("buena");
        pBuenasCheck++;
        if (almacenarespuestaBuenas.indexOf(NombreBoton) == -1) {
            almacenarespuestaBuenas.push(NombreBoton);
        } else {

        }

    } else {
        console.log("mala");
        pMalasCheck++;
        if (almacenarespuestaMalas.indexOf(NombreBoton) == -1) {
            almacenarespuestaMalas.push(NombreBoton);
        } else {

        }
    }
    console.log(almacenarespuestaBuenas);
    console.log(almacenarespuestaMalas);
}

function quitarSeleccion(e) {

    var NombreBotonDes = Display.getName(e);
    console.log(NombreBotonDes);
    if (almacenarespuestaBuenas.indexOf(NombreBotonDes) != -1) {
        console.log("esta en Buena en la posicion", almacenarespuestaBuenas.indexOf(NombreBotonDes));
        almacenarespuestaBuenas.splice(almacenarespuestaBuenas.indexOf(NombreBotonDes), 1);
        pBuenasCheck--;
    }
    if (almacenarespuestaMalas.indexOf(NombreBotonDes) != -1) {
        console.log("esta en malas en la posicion", almacenarespuestaMalas.indexOf(NombreBotonDes));
        almacenarespuestaMalas.splice(almacenarespuestaMalas.indexOf(NombreBotonDes), 1);
        pMalasCheck--;
    }
    console.log(almacenarespuestaBuenas.length);
    console.log(almacenarespuestaMalas.length);
    console.log(almacenarespuestaMalas);
    console.log(almacenarespuestaBuenas);
    Event.removeClick(Display.get(e), quitarSeleccion);
    Event.click(Display.get(e), validarBotonesCont3Check);
    /*pBuenasCheck--;
    pMalasCheck = 0;*/
    e.stop("normal");
    validarBotonVerificar();
}


function validarBotonVerificar() {
    if (almacenarespuestaBuenas.length == 0 || almacenarespuestaMalas == 0) {
        Display.get("botonVerificar").hide();
    } else {
        Display.get("botonVerificar").show();
    }
}

function validarRespuestasCheck() {
    Button.over("botonVerificar", true);
    Event.removeClick(arrayCont3Pag4, validarBotonesCont3Check);
    Event.removeClick(Display.get("botonVerificar"), validarRespuestasCheck);
    for (var t = 0; t < almacenarespuestaBuenas.length; t++) {
        Event.removeClick(Display.get("Cont3Check." + almacenarespuestaBuenas[t]), validarBotonesCont3Check);
        Display.get("Cont3Check." + almacenarespuestaBuenas[t]).stop("buena");
    }
    for (var r = 0; r < almacenarespuestaMalas.length; r++) {
        Event.removeClick(Display.get("Cont3Check." + almacenarespuestaMalas[r]), validarBotonesCont3Check);
        Display.get("Cont3Check." + almacenarespuestaMalas[r]).stop("malo");
    }
    Display.get("botonVerificar").hide();
    //cargarVentanaEscribirCont3pag1P();
    /*Event.click("mensaje.cerrar", cerrarVentanaEscribirCont3pag1P);
    Button.over("mensaje.cerrar");*/

    console.log(pBuenasCheck + "%" + pMalasCheck);
    if (pBuenasCheck >= 4 && pMalasCheck <= 1) {
        estado = "gano";
        /*console.log("gano");
        Display.get("mensaje").stop("gano");
        Text.load("mensaje", "Very good job. Keep it up!", "middle center size24");
        Sound.play("media/mensajes/gano");*/
        Event.removeClick(arrayCont3Pag4, validarBotonesCont3Check);

    } else {
        estado = "perdio";
        /*console.log("perdio");
        Display.get("mensaje").stop("perdio");
        Text.load("mensaje", "You can do better, try again!", "middle center size24");
        Sound.play("media/mensajes/perdio");*/
        Event.removeClick(arrayCont3Pag4, validarBotonesCont3Check);

        //    }
        console.log(pBuenasCheck);
        console.log(pMalasCheck);
        almacenarespuestaBuenas = [

];


        almacenarespuestaMalas = [

];
        pBuenasCheck = 0;
        pMalasCheck = 0;
        //reiniciarVariablesCheck();
    }
    estadoPuntero3 = 1;
    validarEstadoCampos();
}

function cargarVentanaEscribirCont3pag1P() {
    //Display.addChild("mascara");
    Display.addChild("mensaje");
    TweenLite.to(Display.get("mensaje"), 0.01, {
        alpha: 0,
        x: -1000,
        y: 204,
        onComplete: function () {
            TweenLite.to(Display.get("mensaje"), 0.5, {
                x: 233,
                alpha: 1
            });
        }
    });
};

function cerrarVentanaEscribirCont3pag1P() {
    //Display.removeChild("mascara");
    Display.removeChild("botonVerificar");
    Event.removeClick(arrayCont3Pag4, validarBotonesCont3Check);
    TweenLite.to(Display.get("mensaje"), 0.5, {
        x: 1500,
        onComplete: function () {
            Display.removeChild("mensaje");
        }
    });
    finalJuegoTotal = true;
    funcionAnimarFlecha();
};

function reiniciarVariablesCheck() {
    console.log("entra2........", almacenarespuestaBuenas.length);
    console.log("entra1........", almacenarespuestaMalas.length);
    arrayCont3Pag4 = [
                       "Cont3Check.btn1",
                       "Cont3Check.btn2",
                       "Cont3Check.btn3",
                       "Cont3Check.btn4",
                       "Cont3Check.btn5",
                       "Cont3Check.btn6"
                      ];
    OpcionesCorrectas = [
    "btn2",
    "btn3",
    "btn4",
    "btn5"
];


    almacenarespuestaBuenas = [

];


    almacenarespuestaMalas = [

];
    pBuenasCheck = 0;
    pMalasCheck = 0;



    JPAudiosActividad3 = [
 "media/Textos/contenido4/audio1"
];
    //eliminarChec1();
}

function removerCheck1() {

    //RemoverJuegoFV();
    if (Presentation.getCurrentPage() == 1) {
        Display.removeChild("Cont3Check");
    }
    if (Presentation.getCurrentPage() == 2) {
        reiniciarVariablesCheck();
        cargarFuncionCheck();
    }
}

/**********************************************************/








/*********************************************************************************/
/*********************************************************************************/
/********************************* JUEGO DE ABCD**********************************/
/*********************************************************************************/
/*********************************************************************************/

function cargarFuncionABDC() {
    /************************** Act 1 CONTENIDO 1**********************/
    Display.addChild("Cont3ABCD");
    TweenMax.to(Display.get("Cont3ABCD"), 0.1, {
        alpha: 0,
        x: 80,
        y: 120,
        onComplete: function () {
            TweenMax.to(Display.get("Cont3ABCD"), 1, {
                alpha: 1
            });
            Display.get("Cont3ABCD").play("inicio");
        }
    });

    Event.click(arrayCont3Pag2Pregunta1, validarBotonesCont3Pag2);
    Event.click(arrayCont3Pag2Pregunta2, validarBotonesCont3Pag2);
    Event.click(arrayCont3Pag2Pregunta3, validarBotonesCont3Pag2);
    Event.click(arrayCont3Pag2Pregunta4, validarBotonesCont3Pag2);
};

function validarBotonesCont3Pag2(e) {
    var elementoActualbtn = e.getName().substr(4, 1);
    var numActualbtn = e.getName().substr(3, 1);
    validarCadena = "Cont3ABCD.pregunta" + numActualbtn + ".btn" + numActualbtn + elementoActualbtn;

    numIntValidar = intentosP1 + intentosP2 + intentosP3 + intentosP4;

    /************************** PREGUNTA 1 **********************/
    if (p1 == numActualbtn) {
        Display.get("Cont3ABCD.pregunta1.btn1A").play("unselect");
        Display.get("Cont3ABCD.pregunta1.btn1B").play("unselect");
        Display.get("Cont3ABCD.pregunta1.btn1C").play("unselect");
        e.play("select");
        estadoP = 1;
        intentosP1 = 0;
        nombreP1 = "Cont3ABCD.pregunta" + numActualbtn + ".btn" + numActualbtn + elementoActualbtn;

        if (arrayCont3Pag2Pregunta1[1] == validarCadena) {
            estadoP1 = "bien1";
            intentosP1 = 1;
        } else {
            estadoP1 = "mal1";
            intentosP1 = 1;
        }
    }

    /************************** PREGUNTA 2 **********************/
    if (p2 == numActualbtn) {
        Display.get("Cont3ABCD.pregunta2.btn2A").play("unselect");
        Display.get("Cont3ABCD.pregunta2.btn2B").play("unselect");
        Display.get("Cont3ABCD.pregunta2.btn2C").play("unselect");
        e.play("select");
        estadoP = 2;
        intentosP2 = 0;
        nombreP2 = "Cont3ABCD.pregunta" + numActualbtn + ".btn" + numActualbtn + elementoActualbtn;

        if (arrayCont3Pag2Pregunta2[2] == validarCadena) {
            estadoP2 = "bien2";
            intentosP2 = 1;
        } else {
            estadoP2 = "mal2";
            intentosP2 = 1;
        }
    }

    /************************** PREGUNTA 3 **********************/
    if (p3 == numActualbtn) {
        Display.get("Cont3ABCD.pregunta3.btn3A").play("unselect");
        Display.get("Cont3ABCD.pregunta3.btn3B").play("unselect");
        Display.get("Cont3ABCD.pregunta3.btn3C").play("unselect");
        e.play("select");
        estadoP = 3;
        intentosP3 = 0;
        nombreP3 = "Cont3ABCD.pregunta" + numActualbtn + ".btn" + numActualbtn + elementoActualbtn;

        if (arrayCont3Pag2Pregunta3[2] == validarCadena) {
            estadoP3 = "bien3";
            intentosP3 = 1;
        } else {
            estadoP3 = "mal3";
            intentosP3 = 1;
        }
    };

    /************************** PREGUNTA 4 **********************/
    if (p4 == numActualbtn) {
        Display.get("Cont3ABCD.pregunta4.btn4A").play("unselect");
        Display.get("Cont3ABCD.pregunta4.btn4B").play("unselect");
        Display.get("Cont3ABCD.pregunta4.btn4C").play("unselect");
        e.play("select");
        estadoP = 4;
        intentosP4 = 0;
        nombreP4 = "Cont3ABCD.pregunta" + numActualbtn + ".btn" + numActualbtn + elementoActualbtn;

        if (arrayCont3Pag2Pregunta4[0] == validarCadena) {
            estadoP4 = "bien4";
            intentosP4 = 1;
        } else {
            estadoP4 = "mal4";
            intentosP4 = 1;
        }
    }

    if (numIntValidar == 3) {
        cargarBotonVerificar();
        Event.click(Display.get("botonVerificar"), validarRespuestasABCD);
    }

};

function validarRespuestasABCD() {
    var pBuenos = 0;
    var pMalos = 0;
    intRestantes--;

    /************************** VALIDA 1 **********************/
    if (estadoP1 == "bien1") {
        pBuenos++;
        Display.get(nombreP1).stop("bueno");
    }
    if (estadoP1 == "mal1") {
        pMalos++;
        Display.get(nombreP1).stop("malo");
    }

    /************************** VALIDA 2 **********************/
    if (estadoP2 == "bien2") {
        pBuenos++;
        Display.get(nombreP2).stop("bueno");
    }
    if (estadoP2 == "mal2") {
        pMalos++;
        Display.get(nombreP2).stop("malo");
    }

    /************************** VALIDA 3 **********************/
    if (estadoP3 == "bien3") {
        pBuenos++;
        Display.get(nombreP3).stop("bueno");
    }
    if (estadoP3 == "mal3") {
        pMalos++;
        Display.get(nombreP3).stop("malo");
    }

    /************************** VALIDA 4 **********************/
    if (estadoP4 == "bien4") {
        pBuenos++;
        Display.get(nombreP4).stop("bueno");
    }
    if (estadoP4 == "mal4") {
        pMalos++;
        Display.get(nombreP4).stop("malo");
    }


    /************************** VALIDA SI GANA O PIERDE **********************/

    if (pBuenos >= 3) {
        estado = "gano";
    } else {
        estado = "perdio";
    }

    estadoPuntero2 = 1;
    validarEstadoCampos();
    reniciarVariablesABCD();

    Event.removeClick(arrayCont3Pag2Pregunta1, validarBotonesCont3Pag2);
    Event.removeClick(arrayCont3Pag2Pregunta2, validarBotonesCont3Pag2);
    Event.removeClick(arrayCont3Pag2Pregunta3, validarBotonesCont3Pag2);
    Event.removeClick(arrayCont3Pag2Pregunta4, validarBotonesCont3Pag2);

};

function reniciarVariablesABCD() {
    numIntValidar = 0;
    intRestantes = 3;
    intentosP1 = 0;
    intentosP2 = 0;
    intentosP3 = 0;
    intentosP4 = 0;
    pBuenos = 0;
    pMalos = 0;
}

/************************** Act 2 CONTENIDO 3**********************/
/******************************************************************/
function cargarCuestionarioABCD() {
    Display.addChild("Cont3ABCD");
    TweenMax.to(Display.get("Cont3ABCD"), 0.01, {
        alpha: 0,
        x: 300,
        y: 150,
        onComplete: function () {
            TweenMax.to(Display.get("Cont3ABCD"), 1, {
                alpha: 1
            });
        }
    });
};

function cerrarContenidosCont3() {
    cerrarBotonVerificar();
    Display.removeChild("Recuadro2Texto1");
    Display.removeChild("Cont3Check");
    Display.removeChild("Cont3ABCD");
};