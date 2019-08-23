/*------------------- Actividad 1 Escribir Boton 6 --------------- */
function JESActividad5a() {
        PosicionFinalPresentacion = true;
        UpNivelMenu();
        funcionocultarAnimarFlecha();
        JESPosicionArray = 0;
        Display.get(JESBotonVerificar).hide();
        JESOpcionesBuenas = [
  "e",
 "h",
 "c",
 "d",
 "b",
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

        JESBotonVerificar = "contenido6.escribirVerificar";
        JESContenedorIntentos = "contenido6.Intentos.contenedor";
        JESContenedorPrincipal = "contenido6";
        JESidFormulario;
        JESValues = [];
        JESbuenas = 0;
        JESIntentos = 2;
        JESestadoJuego = "perdio";
        JESventanaMensaje = "mensaje";
        JESventanaModal = "modal";
        JESActividad5A = new JuegoEscribirCargar();
    }
    /*------------------- Fin Actividad 1 Escribir Boton 6 --------------- */

/*------------------- Actividad 2 Escribir Boton 6 --------------- */
function JESActividad6a() {
        PosicionFinalPresentacion = true;
        UpNivelMenu();
        JESPosicionArray = 0;
        /*if (estadoJuegoPreguntasSinAudio1) {
		RemoverPreguntasSinAudio();
	}
	if (estadoJuegoPreguntasSinAudio2) {
		RemoverPreguntasSinAudio();
	}
	if (estadoJuegoPreguntasSinAudio3) {
		RemoverPreguntasSinAudio();
	}*/
        //Display.get(JESBotonVerificar).hide();
        JESOpcionesBuenas = [
 "but",
 "because",
 "so",
 "althought",
 "because",
 "althought",
 "but"
];

        JESIdinputs = [
 "input1",
 "input2",
 "input3",
 "input4",
 "input5",
 "input6",
 "input7"
];

        //este puede estar en un archivo HTML independiente o se envia como un string.
        JESmensajes = {
            "bien": "Mensaje Correcto",
            "mal": "Mensaje Incorrecto",
            "gano": "Very good job. Keep it up!",
            "perdio": "You can do better, try again!"
        };

        JESBotonVerificar = "contenido6.escribirVerificar";
        JESContenedorIntentos = "contenido6.Intentos.contenedor";
        JESContenedorPrincipal = "contenido6";
        JESidFormulario;
        JESValues = [];
        JESbuenas = 0;
        JESIntentos = 1;
        JESestadoJuego = "perdio";
        JESventanaMensaje = "mensaje";
        JESventanaModal = "modal";
        JESActividad6A = new JuegoEscribirCargar();
    }
    /*------------------- Fin Actividad 2 Escribir Boton 6 --------------- */
    /*------------------- Actividad 3 Escribir Boton 6 --------------- */
function JESActividad4a() {
        UpNivelMenu();
        Display.get(JESBotonVerificar).hide();
        JESOpcionesBuenas = [
 "*",
 "because",
 "so",
 "althought",
 "because",
 "so",
 "but"
];

        JESIdinputs = [
 "input1",
 "input2",
 "input3",
 "input4",
 "input5",
 "input6",
 "input7",
 "input8"
];

        //este puede estar en un archivo HTML independiente o se envia como un string.
        JESmensajes = {
            "bien": "Mensaje Correcto",
            "mal": "Mensaje Incorrecto",
            "gano": "Very good job. Keep it up!",
            "perdio": "You can do better, try again!"
        };

        JESBotonVerificar = "contenido6.escribirVerificar";
        JESContenedorIntentos = "contenido6.Intentos.contenedor";
        JESContenedorPrincipal = "contenido6";
        JESidFormulario;
        JESValues = [];
        JESbuenas = 0;
        JESIntentos = 1;
        JESestadoJuego = "perdio";
        JESventanaMensaje = "mensaje";
        JESventanaModal = "modal";
        JESActividad4A = new JuegoEscribirCargar();
    }
    /*------------------- Fin Actividad 3 Escribir Boton 6 --------------- */


/*************************************************************************************************/
/***************************** ACTIVIDADES JUEGOS SIN AUDIO **************************************/
/*************************************************************************************************/
/*------------------- Actividad 1 Preguntas Audios Boton 6 --------------- */
function JuegoPreguntasSinAudio1() {
    UpNivelMenu();
    JPAudiosContadorActividades++;
    /*if (estadoJuegoPreguntasSinAudio2) {
		RemoverPreguntasSinAudio();
	}*/
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
    estadoJuegoPreguntasSinAudio1 = true;
    if (Display.get(JPContenedorPrincipal)) {
        //Display.get("mcJuegoPreguntas1").hide();
        Display.removeChild(JPContenedorPrincipal);
        Display.addChild(JPContenedorPrincipal);
        Display.position(JPContenedorPrincipal, 70, 190);
        JPcontadorIntentos();
        Timer.load(0.8, JPAnimacionCargarPreguntas);

    } else {
        Display.addChild(JPContenedorPrincipal);
        Display.position(JPContenedorPrincipal, 70, 190);
        JPcontadorIntentos();
        Timer.load(0.8, JPAnimacionCargarPreguntas);
    }
}

/*------------------- Fin Actividad 1 Preguntas Audios Boton 6 --------------- */


/*------------------- Actividad 2 Preguntas Audios Boton 6 ---------------*/
function JuegoPreguntasSinAudio2() {
        UpNivelMenu();
        if (Display.get("mcJuegoPreguntas1")) {
            Display.removeChild("mcJuegoPreguntas1");
        }
        /*if (estadoJuegoPreguntasSinAudio1) {
		RemoverPreguntasSinAudio();
	}
	if (estadoJuegoPreguntasSinAudio3) {
		RemoverPreguntasSinAudio();
	}*/
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
        estadoJuegoPreguntasSinAudio2 = true;
        /*if (Display.get("mcJuegoPreguntas1")) {
		Display.removeChild("mcJuegoPreguntas1");
	}*/
        if (Display.get("mcJuegoPreguntas3")) {
            Display.removeChild("mcJuegoPreguntas3");
        }
        if (Display.get("mcJuegoPreguntas2")) {
            Display.removeChild("mcJuegoPreguntas2");
            Display.addChild("mcJuegoPreguntas2");
            Display.position("mcJuegoPreguntas2", 70, 130);
            TweenMax.to("mcJuegoPreguntas2", 0.01, {
                alpha: 1
            });
        } else {
            Display.addChild("mcJuegoPreguntas2");
            Display.position("mcJuegoPreguntas2", 70, 130);
            TweenMax.to("mcJuegoPreguntas2", 0.01, {
                alpha: 1
            });
        }
    }
    /*------------------- Fin Actividad 2 Preguntas Audios Boton 6 ---------------*/

function JPCargarActividad1() {
    PosicionFinalPresentacion = false;
    if (Display.get("mcJuegoPreguntas1")) {
        Display.removeChild("mcJuegoPreguntas1");
    }
    if (Display.get("mcJuegoPreguntas3")) {
        Display.removeChild("mcJuegoPreguntas3");
    }
    if (Display.get("mcJuegoPreguntas2")) {
        Display.removeChild("mcJuegoPreguntas2");
    }
    UpNivelMenu();
    JPAudiosPosicion2 = 0;
    if (Display.get("mcJuegoPreguntas2")) {
        Display.removeChild("mcJuegoPreguntas2");
    }
    JPBotonesPreguntas = {
        "Pregunta1": [
    "mcJuegoPreguntas1.pregunta1.btn0A0",
    "mcJuegoPreguntas1.pregunta1.btn0B1",
    "mcJuegoPreguntas1.pregunta1.btn0C0"
    ],
        "Pregunta2": [
    "mcJuegoPreguntas1.pregunta2.btn1A0",
    "mcJuegoPreguntas1.pregunta2.btn1B0",
    "mcJuegoPreguntas1.pregunta2.btn1C1"
    ]

    };

    JPSubindiceBotonesPreguntas = [
    "Pregunta1",
    "Pregunta2"
];
    //varible elementos*/
    JPContenedorPrincipal = "mcJuegoPreguntas1";
    JContenedorintentosPreguntas = "contenido6.Intentos.contenedor";
    JPventanaMensaje = "mensaje";
    JPventanaModal = "modal";
    JPBotonVerificar = "mcJuegoPreguntas1.escribirVerificar";

    //este puede estar en un archivo HTML independiente o se envia como un string.
    JPmensajes = {
        "bien": "Mensaje Correcto",
        "mal": "Mensaje Incorrecto",
        "gano": "Very good job. Keep it up!",
        "perdio": "You can do better, try again!"
    };

    JPcontadoresClick = 0;
    JPcontadorgrupos = 2;
    JPintentos = 3;
    JPtemp = [];
    JPtemp2 = [];
    JPElementoTemporal = [];
    JPPuntosBuenos = 0;
    JPPuntosMalos = 0;
    JPclasificaGrupo = [];
    JPNombre;
    JPSubgrupo;
    JPcontadorActividades = 0;
    JPestadoJuego = "perdio"; //me envia el estado del juego (Correcto, Perdio o Incorrecto).
    Timer.load(TiempoEntrada, function () {
        actividad2 = new JuegoPreguntasSinAudio1();
    });
}

/*------------------- Fin Actividad 2 Preguntas Boton 6 --------------- */


/* ----------------------------- Actividad 2 preguntas sin audios Boton6 ------------ */
function JPCargarActividad2() {
    PosicionFinalPresentacion = false;
    if (Display.get("mcJuegoPreguntas1")) {
        Display.removeChild("mcJuegoPreguntas1");
    }
    if (Display.get("mcJuegoPreguntas3")) {
        Display.removeChild("mcJuegoPreguntas3");
    }
    if (Display.get("mcJuegoPreguntas2")) {
        Display.removeChild("mcJuegoPreguntas2");
    }
    UpNivelMenu();
    JPAudiosPosicion2 = 1;
    TiempoEntrada = 0.4;
    JPBotonesPreguntas = {
        "Pregunta3": [
    "mcJuegoPreguntas2.pregunta3.btn0A0",
    "mcJuegoPreguntas2.pregunta3.btn0B1",
    "mcJuegoPreguntas2.pregunta3.btn0C0"
    ],
        "Pregunta4": [
    "mcJuegoPreguntas2.pregunta4.btn1A1",
    "mcJuegoPreguntas2.pregunta4.btn1B0",
    "mcJuegoPreguntas2.pregunta4.btn1C0"
    ]

    };

    JPSubindiceBotonesPreguntas = [
    "Pregunta3",
    "Pregunta4"
];
    if (Display.get(JPventanaMensaje) || Display.get(JPventanaModal)) {
        Display.removeChild(JPventanaMensaje);
        Display.removeChild(JPventanaModal);
    }
    //JPEliminarMensaje();
    estadoJPSinAudio1 = false;
    Display.removeChild(JPContenedorPrincipal);
    JPventanaMensaje = "mensaje";
    JPventanaModal = "modal";
    JPContenedorPrincipal = "mcJuegoPreguntas2";
    JContenedorintentosPreguntas = "contenido6.Intentos.contenedor";
    JPBotonVerificar = "mcJuegoPreguntas2.escribirVerificar";

    JPcontadoresClick = 0;
    JPcontadorgrupos = 2;
    JPintentos = 1;
    JPtemp = [];
    JPtemp2 = [];
    JPElementoTemporal = [];
    JPPuntosBuenos = 0;
    JPPuntosMalos = 0;
    JPclasificaGrupo = [];
    JPNombre = "";
    JPSubgrupo = "";
    JPestadoJuego = "perdio"; //me envia el estado del juego (Correcto, Perdio o Incorrecto).
    actividad2 = new JuegoPreguntasSinAudio1();
}

/* -----------------------------Fin  BOTON 6 --------------- */
/*------------------- Actividad 3 Preguntas  Boton 6 ---------------*/
function JPCargarActividad3() {
    PosicionFinalPresentacion = true;
    if (Display.get("mcJuegoPreguntas1")) {
        Display.removeChild("mcJuegoPreguntas1");
    }
    if (Display.get("mcJuegoPreguntas3")) {
        Display.removeChild("mcJuegoPreguntas3");
    }
    if (Display.get("mcJuegoPreguntas2")) {
        Display.removeChild("mcJuegoPreguntas2");
    }
    UpNivelMenu();
    TiempoEntrada = 0.4;
    JPAudiosPosicion2 = 2;
    /*if (estadoJuegoPreguntasSinAudio2) {
		RemoverPreguntasSinAudio();
	}*/
    if (JPcontadorActividades <= JPCambioDeActividades.length) {
        JPcontadorActividades++;
    }
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
    if (JPcontadorActividades <= JPCambioDeActividades.length) {
        JPcontadorActividades++;
    }
    if (Display.get(JPventanaMensaje) || Display.get(JPventanaModal)) {
        Display.removeChild(JPventanaMensaje);
        Display.removeChild(JPventanaModal);
    }
    if (Display.get(JPventanaMensaje) || Display.get(JPventanaModal)) {
        Display.removeChild(JPventanaMensaje);
        Display.removeChild(JPventanaModal);
    }
    //JPEliminarMensaje();
    Display.removeChild(JPContenedorPrincipal);
    estadoJuegoPreguntasSinAudio3 = true;
    if (Display.get("mcJuegoPreguntas1")) {
        Display.removeChild("mcJuegoPreguntas1");
    }
    if (Display.get("mcJuegoPreguntas2")) {
        Display.removeChild("mcJuegoPreguntas2");
    }
    JPventanaMensaje = "mensaje";
    JPventanaModal = "modal";
    JPContenedorPrincipal = "mcJuegoPreguntas3";
    JContenedorintentosPreguntas = "contenido6.Intentos.contenedor";
    JPBotonVerificar = "mcJuegoPreguntas3.escribirVerificar";
    JPBotonesPreguntas = {
        "Pregunta5": [
    "mcJuegoPreguntas3.pregunta5.btn0A0",
    "mcJuegoPreguntas3.pregunta5.btn0B0",
    "mcJuegoPreguntas3.pregunta5.btn0C1"
    ],
        "Pregunta6": [
    "mcJuegoPreguntas3.pregunta6.btn1A1",
    "mcJuegoPreguntas3.pregunta6.btn1B0",
    "mcJuegoPreguntas3.pregunta6.btn1C0"
    ],
        "Pregunta7": [
    "mcJuegoPreguntas3.pregunta7.btn2A0",
    "mcJuegoPreguntas3.pregunta7.btn2B1",
    "mcJuegoPreguntas3.pregunta7.btn2C0"
    ],

    };

    JPSubindiceBotonesPreguntas = [
    "Pregunta5",
    "Pregunta6",
    "Pregunta7"
];
    JPcontadoresClick = 0;
    JPcontadorgrupos = 3;
    JPintentos = 1;
    JPtemp = [];
    JPtemp2 = [];
    JPElementoTemporal = [];
    JPPuntosBuenos = 0;
    JPPuntosMalos = 0;
    JPclasificaGrupo = [];
    JPNombre = "";
    JPSubgrupo = "";
    JPestadoJuego = "perdio"; //me envia el estado del juego (Correcto, Perdio o Incorrecto).
    actividad2 = new JuegoPreguntasSinAudio1();
}

function JPCargarActividad3a() {
        UpNivelMenu();
        if (Display.get("mcJuegoPreguntas1")) {
            Display.removeChild("mcJuegoPreguntas1");
        }
        if (Display.get("mcJuegoPreguntas3")) {
            Display.removeChild("mcJuegoPreguntas3");
        }
        if (Display.get("mcJuegoPreguntas2")) {
            Display.removeChild("mcJuegoPreguntas2");
        }
        if (JPcontadorActividades <= JPCambioDeActividades.length) {
            JPcontadorActividades++;
        }

        //JPEliminarMensaje();
        if (Display.get(JPventanaMensaje) || Display.get(JPventanaModal)) {
            Display.removeChild(JPventanaMensaje);
            Display.removeChild(JPventanaModal);
        }
        Display.removeChild(JPContenedorPrincipal);
        JPventanaMensaje = "mensaje";
        JPventanaModal = "modal";
        JPContenedorPrincipal = "mcJuegoPreguntas3";
        JContenedorintentosPreguntas = "contenido6.Intentos.contenedor";
        JPBotonVerificar = "mcJuegoPreguntas3.escribirVerificar";
        JPBotonesPreguntas = {
            "Pregunta5": [
    "mcJuegoPreguntas3.pregunta5.btn0A0",
    "mcJuegoPreguntas3.pregunta5.btn0B1",
    "mcJuegoPreguntas3.pregunta5.btn0C0"
    ],
            "Pregunta6": [
    "mcJuegoPreguntas3.pregunta6.btn1A1",
    "mcJuegoPreguntas3.pregunta6.btn1B0",
    "mcJuegoPreguntas3.pregunta6.btn1C0"
    ],
            "Pregunta7": [
    "mcJuegoPreguntas3.pregunta7.btn2A1",
    "mcJuegoPreguntas3.pregunta7.btn2B0",
    "mcJuegoPreguntas3.pregunta7.btn2C0"
    ],

        };

        JPSubindiceBotonesPreguntas = [
    "Pregunta5",
    "Pregunta6",
    "Pregunta7"
];
        JPcontadoresClick = 0;
        JPcontadorgrupos = 3;
        JPintentos = 1;
        JPtemp = [];
        JPtemp2 = [];
        JPElementoTemporal = [];
        JPPuntosBuenos = 0;
        JPPuntosMalos = 0;
        JPclasificaGrupo = [];
        JPNombre = "";
        JPSubgrupo = "";
        JPestadoJuego = "perdio"; //me envia el estado del juego (Correcto, Perdio o Incorrecto).
        actividad3Actividad3 = new JuegoPreguntasSinAudio3();
    }
    /*------------------- Fin Actividad 3 Preguntas Audios Boton 6 ---------------*/