/*---------------------- Actividad 1 Arrastrar y Soltar Boton 4 --------*/
function JASActividad4() {
    PosicionFinalPresentacion=false;
    UpNivelMenu();
	JCUnPosicionArray=0;
	cantidadPuntos=6;
	 Options.collision({
        intentosMalos: 6,
        ocultarElementos: false,

    });
    //funcionocultarAnimarFlecha();
    //JCUnoaUnoAnimacionOut();
    Display.get(JESBotonVerificar).hide();
    if (estadoJuego3UnoaUno == true) {
        estadoJuego3UnoaUno = false;
        for (var f = 0; f < Temporal2.length; f++) {
            Display.removeChild(Temporal2[f]);
            Display.removeChild(Temporal1[f]);
        }
        //Collision.remove();
    }
    /*if (estadoJuego1UnoaUno == true) {
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
    }*/
    estadoJuego3UnoaUno = true;
    Display.removeChild(JPAudiocontenedor, "contenido4");
    Display.removeChild(JPaudioventanaMensaje);
    Display.removeChild(JPaudiosventanaModal);
    JPAudioRemoverElemento();
    juegoColisionUnoaUnoIntentos = 1;
    ElementoArrastrar = "mcRecuadroLargocolision";
    ElementoObjetivo = "mcRecuadroLargocolision";
    juegoColisionMensajes = {
        "bien": "Mensaje Correcto",
        "mal": "Mensaje Incorrecto",
        "gano": "Very good job. Keep it up!",
        "perdio": "You can do better, try again!"
    };
    Textos1 = [
 "03 / 12 / 1483",
 "06 / 29 / 1939",
 "08 / 27 / 1973",
 "07 / 01 / 1736",
 "11 / 29 / 2005"
];

    Textos2 = [
 "March twelve, fourteen eighty-three.",
 "The twenty nine of June, nineteen thirty-nine.",
 "The twenty-seventh of August, nineteen seventy-three.",
 "July first, seventeen thirty-six.",
 "November the twenty-ninth, twenty oh five."
];

    /*"July the first, seventeen thirty-six",
	"The twenty-seventh of August, nineteen seventy-three ",
	"January the fourteenth, twenty twenty-five ",
	"November the twenty-ninth twenty oh five",
	"February the fifth two thousand"*/

    Elementos1;
    Elementos2;
    Temporal1 = [];
    Temporal2 = [];
    if (estadoJuego3UnoaUno) {
        Timer.load(TiempoEntrada, function () {
            ArrastrarSoltar4 = new JCUnoaUnoActividad1();
        });
    }
}
/*---------------------- Fin Actividad 1 Arrastrar y Soltar Boton 4 --------*/

/*---------------------- Actividad 2 Arrastrar y Soltar Boton 4 --------*/
function JASActividad5() {
    PosicionFinalPresentacion=true;
    TiempoEntrada = 0.4;
    UpNivelMenu();
	JCUnPosicionArray=1;
    JCUnoaUnoAnimacionOut();
    Display.removeChild(JPAudiocontenedor, "contenido4");
    Display.removeChild(JPaudioventanaMensaje);
    Display.removeChild(JPaudiosventanaModal);
    JPAudioRemoverElemento();
    estadoJuego4UnoaUno = true;
    if (JPEstadoActivoActividad3) {
        JPEstadoActivoActividad3 = false;
        JPEliminarMensajeActividad3();
        Display.removeChild(JPContenedorPrincipalActividad3);
    }
    juegoColisionUnoaUnoIntentos = 1;
    ElementoArrastrar = "mcRecuadroLargocolision";
    ElementoObjetivo = "mcRecuadroLargocolision";
    juegoColisionUnoaUnoMensajes = {
        "bien": "Mensaje Correcto",
        "mal": "Mensaje Incorrecto",
        "gano": "Very good job. Keep it up!",
        "perdio": "You can do better, try again!"
    };
    Textos1 = [
 "10 / 13 / 1206",
 "12 / 31 / 2013 ",
 "02 / 05 / 2000",
 "04 / 02 / 1983",
 "01 / 14 / 2025"
];

    Textos2 = [
 "October thirteenth, twelve oh six.",
 "The thirty first of December, twenty thirteen.",
 "February the fifth, two thousand.",
 "The second of April, nineteen eighty-three.",
 "January fourteenth, twenty twenty-five."
];

    Elementos1;
    Elementos2;
    Temporal1 = [];
    Temporal2 = [];
    ArrastrarSoltar5 = new JCUnoaUnoActividad1();
}

function JASRemover() {
    for (var f = 0; f < Temporal2.length; f++) {
        Display.removeChild(Temporal2[f]);
        Display.removeChild(Temporal1[f]);
    }
}
/*---------------------- Fin Actividad 2 Arrastrar y Soltar Boton 4 --------*/

/*------------------- Actividad 1 escribir Boton 4 -------------*/
function JESActividad1() {
    //quitar comentario
    PosicionFinalPresentacion=false;
	JESPosicionArray=0;
    UpNivelMenu();
    JESCantidadActividades = 2;
    funcionocultarAnimarFlecha();
    if (JPAudioEstadoJuego) {
        JPAudioRemoverElemento();
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
    if (JPEstadoActivoActividad3) {
        JPEstadoActivoActividad3 = false;
        JPEliminarMensajeActividad3();
        Display.removeChild(JPContenedorPrincipalActividad3);
    }
    Display.get(JESBotonVerificar).hide();
    JESOpcionesBuenas = [
 "was",
 "was",
 "were",
 "were",
 "was"
];

    JESIdinputs = [
 "input1",
 "input2",
 "input3",
 "input4",
 "input5"
];

    //este puede estar en un archivo HTML independiente o se envia como un string.
    JESmensajes = {
        "bien": "Mensaje Correcto",
        "mal": "Mensaje Incorrecto",
        "gano": "Very good job. Keep it up!",
        "perdio": "You can do better, try again!"
    };

    JESBotonVerificar = "contenido4.btnVerificar";
    JESContenedorIntentos = "contenido4.intentos.contenedor";
    JESContenedorPrincipal = "contenido4";
    JESidFormulario;
    JESValues = [];
    JESbuenas = 0;
    JESIntentos = 1;
    JESestadoJuego = "perdio";
    JESventanaMensaje = "mensaje";
    JESventanaModal = "modal";
    JESActividad1A = new JuegoEscribirCargar();
}
/*------------------- Fin Actividad 1 escribir Boton 4-------------*/

/*------------------- Actividad 2 Escribir Boton4 --------------- */
function JESActividad2() {
    PosicionFinalPresentacion=true;
    //Quitar comentario
	JESPosicionArray=1;
    UpNivelMenu();
    funcionocultarAnimarFlecha();
    if (JPAudioEstadoJuego) {
        JPAudioRemoverElemento();
    }
    if (estadoJuego3UnoaUno == true) {
        estadoJuego3UnoaUno = false;
        for (var f = 0; f < Temporal2.length; f++) {
            Display.removeChild(Temporal2[f]);
            Display.removeChild(Temporal1[f]);
        }
        //Collision.remove();
    }
    Display.get(JESBotonVerificar).hide();
    JESOpcionesBuenas = [
 "was",
 "were",
 "were",
 "was",
 "were",
 "was"
];

    JESIdinputs = [
 "input1",
 "input2",
 "input3",
 "input4",
 "input5",
 "input6"
];

    //este puede estar en un archivo HTML independiente o se envia como un string.
    JESmensajes = {
        "bien": "Mensaje Correcto",
        "mal": "Mensaje Incorrecto",
        "gano": "Very good job. Keep it up!",
        "perdio": "You can do better, try again!"
    };

    JESBotonVerificar = "contenido4.btnVerificar";
    JESContenedorIntentos = "contenido4.intentos.contenedor";
    JESContenedorPrincipal = "contenido4";
    JESidFormulario;
    JESValues = [];
    JESbuenas = 0;
    JESIntentos = 1;
    JESestadoJuego = "perdio";
    JESventanaMensaje = "mensaje";
    JESventanaModal = "modal";
    JESActividad2A = new JuegoEscribirCargar();
}

/*------------------- Fin Actividad 2 Escribir Boton4 --------------- */

/*************************** JUEGO SELECT *********************/

function LSActividad1() {
    PosicionFinalPresentacion=false;
    UpNivelMenu();
	LSPosicionArray=0;
    if (JPAudioEstadoJuego) {
        JPAudioRemoverElemento();
    }
	LSContadorActividades
    funcionocultarAnimarFlecha();
    estadofinaljuego = true;
    contenedorJuegoLS = "contenido4"; //se almacena el nombre del contenedor del juego.
    rutaJuegoLS = "Textos/practica1/Texto3"; //se almacena la ruta del archivo HTML en el que se encuentra el juego.
    botonVerificarLS = "contenido4.btnVerificar"; //se almacena la ruta del botón verificar del juego.
    contenedorIntentosLS = "contenido4.intentos.contenedor"; //se almacena la ruta del contenedor de los intentos.
    ventanaMensajeLS = "mensaje"; //se almacena el nombre de la ventana de los mensajes.
    cantidadSlideLS = 1; //variable donde indicamos la cantidad de slide en el que se encuentra el juego.
    intentosLS = 1; //cantidad de intentos que tiene el juego.

    IdinputsLS = [
 "select0",
 "select1",
 "select2"
];

    //este puede estar en un archivo HTML independiente o se envia como un string.
    mensajesLS = {
        "bien": "Mensaje Correcto",
        "mal": "Mensaje Incorrecto",
        "gano": "Very good job. Keep it up!",
        "perdio": "You can do better, try again!"
    };
    seleccionLS; //almacena todos los archivos del formulario.
    valoresLS = []; //almacena los valores seleccionados en el select.
    buenasLS = 0; //variable que almacena cuantas selecciones correctas hay.
    estadoJuegoLS = "perdio"; //me envia el estado del juego (Correcto, Perdio o Incorrecto).
    Actividad1LS = new JuegoListaSelectCargar();
}

function LSActividad2() {
    PosicionFinalPresentacion=false;
    UpNivelMenu();
    funcionocultarAnimarFlecha();
	LSPosicionArray=1;
    if (JPAudioEstadoJuego) {
        JPAudioRemoverElemento();
    }
    if (estadoJuego3UnoaUno == true) {
        estadoJuego3UnoaUno = false;
        for (var f = 0; f < Temporal2.length; f++) {
            Display.removeChild(Temporal2[f]);
            Display.removeChild(Temporal1[f]);
        }
        //Collision.remove();
    }
    estadofinaljuego = true;
    contenedorJuegoLS = "contenido4"; //se almacena el nombre del contenedor del juego.
    rutaJuegoLS = "Textos/practica1/Texto3"; //se almacena la ruta del archivo HTML en el que se encuentra el juego.
    botonVerificarLS = "contenido4.btnVerificar"; //se almacena la ruta del botón verificar del juego.
    contenedorIntentosLS = "contenido4.intentos.contenedor"; //se almacena la ruta del contenedor de los intentos.
    ventanaMensajeLS = "mensaje"; //se almacena el nombre de la ventana de los mensajes.
    cantidadSlideLS = 1; //variable donde indicamos la cantidad de slide en el que se encuentra el juego.
    intentosLS = 1; //cantidad de intentos que tiene el juego.

    IdinputsLS = [
 "select0",
 "select1",
 "select2",
 "select3"
];

    //este puede estar en un archivo HTML independiente o se envia como un string.
    mensajesLS = {
        "bien": "Mensaje Correcto",
        "mal": "Mensaje Incorrecto",
        "gano": "Very good job. Keep it up!",
        "perdio": "You can do better, try again!"
    };


    seleccionLS; //almacena todos los archivos del formulario.
    valoresLS = []; //almacena los valores seleccionados en el select.
    buenasLS = 0; //variable que almacena cuantas selecciones correctas hay.
    estadoJuegoLS = "perdio"; //me envia el estado del juego (Correcto, Perdio o Incorrecto).
    Actividad2LS = new JuegoListaSelectCargar();
}

function LSActividad3() {
    PosicionFinalPresentacion=false;
    UpNivelMenu();
	LSPosicionArray=2;
    funcionocultarAnimarFlecha();
    if (JPAudioEstadoJuego) {
        JPAudioRemoverElemento();
    }
    if (estadoJuego3UnoaUno == true) {
        estadoJuego3UnoaUno = false;
        for (var f = 0; f < Temporal2.length; f++) {
            Display.removeChild(Temporal2[f]);
            Display.removeChild(Temporal1[f]);
        }
        //Collision.remove();
    }
    estadofinaljuego = true;
    contenedorJuegoLS = "contenido4"; //se almacena el nombre del contenedor del juego.
    rutaJuegoLS = "Textos/practica1/Texto3"; //se almacena la ruta del archivo HTML en el que se encuentra el juego.
    botonVerificarLS = "contenido4.btnVerificar"; //se almacena la ruta del botón verificar del juego.
    contenedorIntentosLS = "contenido4.intentos.contenedor"; //se almacena la ruta del contenedor de los intentos.
    ventanaMensajeLS = "mensaje"; //se almacena el nombre de la ventana de los mensajes.
    cantidadSlideLS = 1; //variable donde indicamos la cantidad de slide en el que se encuentra el juego.
    intentosLS = 1; //cantidad de intentos que tiene el juego.

    IdinputsLS = [
 "select0",
 "select1",
 "select2"
];

    //este puede estar en un archivo HTML independiente o se envia como un string.
    mensajesLS = {
        "bien": "Mensaje Correcto",
        "mal": "Mensaje Incorrecto",
        "gano": "Very good job. Keep it up!",
        "perdio": "You can do better, try again!"
    };


    seleccionLS; //almacena todos los archivos del formulario.
    valoresLS = []; //almacena los valores seleccionados en el select.
    buenasLS = 0; //variable que almacena cuantas selecciones correctas hay.
    estadoJuegoLS = "perdio"; //me envia el estado del juego (Correcto, Perdio o Incorrecto).
    Actividad2LS = new JuegoListaSelectCargar();
}

function LSActividad4() {
    PosicionFinalPresentacion=false;
    UpNivelMenu();
	LSPosicionArray=3;
    funcionocultarAnimarFlecha();
    if (JPAudioEstadoJuego) {
        JPAudioRemoverElemento();
    }
    if (estadoJuego3UnoaUno == true) {
        estadoJuego3UnoaUno = false;
        for (var f = 0; f < Temporal2.length; f++) {
            Display.removeChild(Temporal2[f]);
            Display.removeChild(Temporal1[f]);
        }
        //Collision.remove();
    }
    estadofinaljuego = true;
    contenedorJuegoLS = "contenido4"; //se almacena el nombre del contenedor del juego.
    rutaJuegoLS = "Textos/practica1/Texto3"; //se almacena la ruta del archivo HTML en el que se encuentra el juego.
    botonVerificarLS = "contenido4.btnVerificar"; //se almacena la ruta del botón verificar del juego.
    contenedorIntentosLS = "contenido4.intentos.contenedor"; //se almacena la ruta del contenedor de los intentos.
    ventanaMensajeLS = "mensaje"; //se almacena el nombre de la ventana de los mensajes.
    cantidadSlideLS = 1; //variable donde indicamos la cantidad de slide en el que se encuentra el juego.
    intentosLS = 1; //cantidad de intentos que tiene el juego.

    IdinputsLS = [
 "select0",
 "select1"
];

    //este puede estar en un archivo HTML independiente o se envia como un string.
    mensajesLS = {
        "bien": "Mensaje Correcto",
        "mal": "Mensaje Incorrecto",
        "gano": "Very good job. Keep it up!",
        "perdio": "You can do better, try again!"
    };


    seleccionLS; //almacena todos los archivos del formulario.
    valoresLS = []; //almacena los valores seleccionados en el select.
    buenasLS = 0; //variable que almacena cuantas selecciones correctas hay.
    estadoJuegoLS = "perdio"; //me envia el estado del juego (Correcto, Perdio o Incorrecto).
    Actividad2LS = new JuegoListaSelectCargar();
}

function LSActividad5() {
    PosicionFinalPresentacion=true;
    UpNivelMenu();
	LSPosicionArray=4;
    funcionocultarAnimarFlecha();
    if (JPAudioEstadoJuego) {
        JPAudioRemoverElemento();
    }
    if (estadoJuego3UnoaUno == true) {
        estadoJuego3UnoaUno = false;
        for (var f = 0; f < Temporal2.length; f++) {
            Display.removeChild(Temporal2[f]);
            Display.removeChild(Temporal1[f]);
        }
        //Collision.remove();
    }
    estadofinaljuego = true;
    contenedorJuegoLS = "contenido4"; //se almacena el nombre del contenedor del juego.
    rutaJuegoLS = "Textos/practica1/Texto3"; //se almacena la ruta del archivo HTML en el que se encuentra el juego.
    botonVerificarLS = "contenido4.btnVerificar"; //se almacena la ruta del botón verificar del juego.
    contenedorIntentosLS = "contenido4.intentos.contenedor"; //se almacena la ruta del contenedor de los intentos.
    ventanaMensajeLS = "mensaje"; //se almacena el nombre de la ventana de los mensajes.
    cantidadSlideLS = 1; //variable donde indicamos la cantidad de slide en el que se encuentra el juego.
    intentosLS = 1; //cantidad de intentos que tiene el juego.

    IdinputsLS = [
 "select0",
 "select1",
 "select2"
];

    //este puede estar en un archivo HTML independiente o se envia como un string.
    mensajesLS = {
        "bien": "Mensaje Correcto",
        "mal": "Mensaje Incorrecto",
        "gano": "Very good job. Keep it up!",
        "perdio": "You can do better, try again!"
    };


    seleccionLS; //almacena todos los archivos del formulario.
    valoresLS = []; //almacena los valores seleccionados en el select.
    buenasLS = 0; //variable que almacena cuantas selecciones correctas hay.
    estadoJuegoLS = "perdio"; //me envia el estado del juego (Correcto, Perdio o Incorrecto).
    Actividad2LS = new JuegoListaSelectCargar();
}
/***********************************************************************************/
/*************************************************************************************************/
/***************************** MODULOS DE CARGA DE LAS DIFERENTES ACTIVIDADES ********************/
/*************************************************************************************************/

/*---------------------- Actividad 1 Audios Boton 4 --------*/
function JPAudioActividad1() {
    PosicionFinalPresentacion=false;
    UpNivelMenu();
	JPAUPosicionArray=0;
    funcionocultarAnimarFlecha();
    JPAudioOpcion = 0;
    if (estadoJuego2UnoaUno == true) {
        estadoJuego2UnoaUno = false;
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
    if (estadoJuego3UnoaUno == true) {
        estadoJuego3UnoaUno = false;
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
    estadoJuego1PreguntasAudio = true;
    Display.removeChild(JPAudiocontenedor, "contenido4");
    Display.removeChild(JPaudioventanaMensaje);
    Display.removeChild(JPaudiosventanaModal);
    JPAudiosBtn = [
  "mcJuegoPreguntasBoton41.BtnJuegoPreguntasAudio.btnA",
  "mcJuegoPreguntasBoton41.BtnJuegoPreguntasAudio.btnB",
  "mcJuegoPreguntasBoton41.BtnJuegoPreguntasAudio.btnC",
  "mcJuegoPreguntasBoton41.BtnJuegoPreguntasAudio.btnD"
];


    JParrayAudios = [
  "media/practica1/Practica1d/botones/audio1"

];

    //este puede estar en un archivo HTML independiente o se envia como un string.
    JPAudiomensajes = {
        "bien": "Mensaje Correcto",
        "mal": "Mensaje Incorrecto",
        "gano": "Very good job. Keep it up!",
        "perdio": "You can do better, try again!"
    };
    arrayFunciones = [
        [1, finJPAudios]
    ];

    JPAudiocontenedor = "mcJuegoPreguntasBoton41";
    JPaudioBotonPlay = "mcJuegoPreguntasBoton41.audioBotonPlay1";
    JPaudioContenedorTexto = "contenido4.mcJuegoPreguntasBoton41.contenedor";
    JPaudioventanaMensaje = "mensaje";
    JPaudiosventanaModal = "modal";
    JPAudioestadoJuego = "perdio";
    JPContadorRutaAudios = 0;
    JPAudioIntentos = 1;
    JPAudiosBuenos = 0;
    JPAudiosContenedorintentosPreguntas = "contenido4.intentos.contenedor";
    JPSiguienteactividad;
    JPAudioEstadoJuego = false;
    JPSiguienteactividad = new JuegoAudios();
}
/*---------------------- Fin Actividad 1 Audios Boton 4 --------*/

/*---------------------- Actividad 2 Audios Boton 4 --------*/
function JPAudioActividad2() {
    PosicionFinalPresentacion=false;
    UpNivelMenu();
    JPAudioOpcion = 1;
	JPAUPosicionArray=1;
    funcionocultarAnimarFlecha();
    if (estadoJuego2UnoaUno == true) {
        estadoJuego2UnoaUno = false;
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
    if (estadoJuego3UnoaUno == true) {
        estadoJuego3UnoaUno = false;
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
    estadoJuego2PreguntasAudio = true;
    Display.removeChild(JPAudiocontenedor, "contenido4");
    Display.removeChild(JPaudioventanaMensaje);
    Display.removeChild(JPaudiosventanaModal);
    JPAudiosBtn = [
  "mcJuegoPreguntasBoton42.BtnJuegoPreguntasAudio.btnA",
  "mcJuegoPreguntasBoton42.BtnJuegoPreguntasAudio.btnB",
  "mcJuegoPreguntasBoton42.BtnJuegoPreguntasAudio.btnC",
  "mcJuegoPreguntasBoton42.BtnJuegoPreguntasAudio.btnD"
];

    JParrayAudios = [
  "media/practica1/Practica1d/botones/audio2"
];

    //este puede estar en un archivo HTML independiente o se envia como un string.
    JPAudiomensajes = {
        "bien": "Mensaje Correcto",
        "mal": "Mensaje Incorrecto",
        "gano": "Very good job. Keep it up!",
        "perdio": "You can do better, try again!"
    };

    arrayFunciones = [
        [1, finJPAudios]
    ];

    JPAudiocontenedor = "mcJuegoPreguntasBoton42";
    JPaudioBotonPlay = "mcJuegoPreguntasBoton42.audioBotonPlay2";
    JPaudioContenedorTexto = "contenido4.mcJuegoPreguntasBoton42.contenedor";
    JPaudioventanaMensaje = "mensaje";
    JPaudiosventanaModal = "modal";
    JPAudioestadoJuego = "perdio";
    JPContadorRutaAudios = 0;
    JPAudioIntentos = 1;
    JPAudiosBuenos = 0;
    JPAudiosContenedorintentosPreguntas = "contenido4.intentos.contenedor";
    JPSiguienteactividad;
    JPAudioEstadoJuego = false;
    JPSiguienteactividad = new JuegoAudios();
}
/*---------------------- Fin Actividad 2 Audios Boton 4 --------*/

/*---------------------- Actividad 3 Audios Boton 4 --------*/
function JPAudioActividad3() {
    PosicionFinalPresentacion=false;
    UpNivelMenu();
    JPAudioOpcion = 2;
	JPAUPosicionArray=2;
    if (estadoJuego2UnoaUno == true) {
        estadoJuego2UnoaUno = false;
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
    if (estadoJuego3UnoaUno == true) {
        estadoJuego3UnoaUno = false;
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
    estadoJuego3PreguntasAudio = true;
    Display.removeChild(JPAudiocontenedor, "contenido4");
    Display.removeChild(JPaudioventanaMensaje);
    Display.removeChild(JPaudiosventanaModal);
    JPAudiosBtn = [
  "mcJuegoPreguntasBoton43.BtnJuegoPreguntasAudio.btnA",
  "mcJuegoPreguntasBoton43.BtnJuegoPreguntasAudio.btnB",
  "mcJuegoPreguntasBoton43.BtnJuegoPreguntasAudio.btnC",
  "mcJuegoPreguntasBoton43.BtnJuegoPreguntasAudio.btnD"
];


    JParrayAudios = [
  "media/practica1/Practica1d/botones/audio3"
];

    //este puede estar en un archivo HTML independiente o se envia como un string.
    JPAudiomensajes = {
        "bien": "Mensaje Correcto",
        "mal": "Mensaje Incorrecto",
        "gano": "Very good job. Keep it up!",
        "perdio": "You can do better, try again!"
    };

    arrayFunciones = [
        [1, finJPAudios]
    ];

    JPAudiocontenedor = "mcJuegoPreguntasBoton43";
    JPaudioBotonPlay = "mcJuegoPreguntasBoton43.audioBotonPlay3";
    JPaudioContenedorTexto = "contenido4.mcJuegoPreguntasBoton43.contenedor";
    JPaudioventanaMensaje = "mensaje";
    JPaudiosventanaModal = "modal";
    JPAudioestadoJuego = "perdio";
    JPContadorRutaAudios = 0;
    JPAudioIntentos = 1;
    JPAudiosBuenos = 0;
    JPAudiosContenedorintentosPreguntas = "contenido4.intentos.contenedor";
    JPSiguienteactividad;
    JPAudioEstadoJuego = false;
    JPSiguienteactividad = new JuegoAudios();
}
/*---------------------- Fin Actividad 3 Audios Boton 4 --------*/

/*---------------------- Actividad 4 Audios Boton 4 --------*/
function JPAudioActividad4() {
    PosicionFinalPresentacion=false;
    UpNivelMenu();
    JPAudioOpcion = 3;
	JPAUPosicionArray=3;
    if (estadoJuego2UnoaUno == true) {
        estadoJuego2UnoaUno = false;
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
    if (estadoJuego3UnoaUno == true) {
        estadoJuego3UnoaUno = false;
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
    estadoJuego4PreguntasAudio = true;
    Display.removeChild(JPAudiocontenedor, "contenido4");
    Display.removeChild(JPaudioventanaMensaje);
    Display.removeChild(JPaudiosventanaModal);
    JPAudiosBtn = [
  "mcJuegoPreguntasBoton44.BtnJuegoPreguntasAudio.btnA",
  "mcJuegoPreguntasBoton44.BtnJuegoPreguntasAudio.btnB",
  "mcJuegoPreguntasBoton44.BtnJuegoPreguntasAudio.btnC",
  "mcJuegoPreguntasBoton44.BtnJuegoPreguntasAudio.btnD"
];


    JParrayAudios = [
  "media/practica1/Practica1d/botones/audio4"
];

    //este puede estar en un archivo HTML independiente o se envia como un string.
    JPAudiomensajes = {
        "bien": "Mensaje Correcto",
        "mal": "Mensaje Incorrecto",
        "gano": "Very good job. Keep it up!",
        "perdio": "You can do better, try again!"
    };

    arrayFunciones = [
        [1, finJPAudios]
    ];

    JPAudiocontenedor = "mcJuegoPreguntasBoton44";
    JPaudioBotonPlay = "mcJuegoPreguntasBoton44.audioBotonPlay4";
    JPaudioContenedorTexto = "contenido4.mcJuegoPreguntasBoton44.contenedor";
    JPaudioventanaMensaje = "mensaje";
    JPaudiosventanaModal = "modal";
    JPAudioestadoJuego = "perdio";
    JPContadorRutaAudios = 0;
    JPAudioIntentos = 1;
    JPAudiosBuenos = 0;
    JPAudiosContenedorintentosPreguntas = "contenido4.intentos.contenedor";
    JPSiguienteactividad;
    JPAudioEstadoJuego = false;
    JPSiguienteactividad = new JuegoAudios();
}
/*---------------------- Fin Actividad 4 Audios Boton 4 --------*/

/*---------------------- Actividad 5 Audios Boton 4 --------*/
function JPAudioActividad5() {
    PosicionFinalPresentacion=true;
    UpNivelMenu();
    funcionocultarAnimarFlecha();
    JPAudioOpcion = 4;
	JPAUPosicionArray=4;
    if (estadoJuego2UnoaUno == true) {
        estadoJuego2UnoaUno = false;
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
    if (estadoJuego3UnoaUno == true) {
        estadoJuego3UnoaUno = false;
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
    estadoJuego5PreguntasAudio = true;
    Display.removeChild(JPAudiocontenedor, "contenido4");
    Display.removeChild(JPaudioventanaMensaje);
    Display.removeChild(JPaudiosventanaModal);
    JPAudiosBtn = [
  "mcJuegoPreguntasBoton45.BtnJuegoPreguntasAudio.btnA",
  "mcJuegoPreguntasBoton45.BtnJuegoPreguntasAudio.btnB",
  "mcJuegoPreguntasBoton45.BtnJuegoPreguntasAudio.btnC",
  "mcJuegoPreguntasBoton45.BtnJuegoPreguntasAudio.btnD"
];


    JParrayAudios = [
  "media/practica1/Practica1d/botones/audio5"
];

    //este puede estar en un archivo HTML independiente o se envia como un string.
    JPAudiomensajes = {
        "bien": "Mensaje Correcto",
        "mal": "Mensaje Incorrecto",
        "gano": "Very good job. Keep it up!",
        "perdio": "You can do better, try again!"
    };

    arrayFunciones = [
        [1, finJPAudios]
    ];

    JPAudiocontenedor = "mcJuegoPreguntasBoton45";
    JPaudioBotonPlay = "mcJuegoPreguntasBoton45.audioBotonPlay5";
    JPaudioContenedorTexto = "contenido4.mcJuegoPreguntasBoton45.contenedor";
    JPaudioventanaMensaje = "mensaje";
    JPaudiosventanaModal = "modal";
    JPAudioestadoJuego = "perdio";
    JPContadorRutaAudios = 0;
    JPAudioIntentos = 1;
    JPAudiosBuenos = 0;
    JPAudiosContenedorintentosPreguntas = "contenido4.intentos.contenedor";
    JPSiguienteactividad;
    JPAudioEstadoJuego = false;
    JPSiguienteactividad = new JuegoAudios();
}
/*---------------------- Fin Actividad 5 Audios Boton 4 --------*/
