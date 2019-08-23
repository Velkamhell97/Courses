/*------------------- Actividad 1 Arrastrar y Soltar Boton 5 --------------- */
function JASActividad1() {
    PosicionFinalPresentacion=false;
	UpNivelMenu();
    if(Boolean(Display.get("mcJuegoPreguntasAudios1"))){
        Display.removeChild("mcJuegoPreguntasAudios1");
    }if(Boolean(Display.get("mcJuegoPreguntasAudios2"))){
        Display.removeChild("mcJuegoPreguntasAudios2");
    }
	if(Temporal2.length!=0 && Temporal1.length!=0)  {
		Display.removeChild(Temporal2[f]);
		Display.removeChild(Temporal1[f]);
	}
	cantidadPuntos = 6;
	JCUnPosicionArray = 0;
	Options.collision({
		intentosMalos: 6,
		ocultarElementos: false,

	});
	if (estadoJuego2UnoaUno == true) {
		estadoJuego2UnoaUno = false;
		for (var f = 0; f < Temporal2.length; f++) {
			Display.removeChild(Temporal2[f]);
			Display.removeChild(Temporal1[f]);
		}
		//Collision.remove();
	}
	Display.get(JESBotonVerificar).hide();
	Display.get(JESBotonVerificar).css("margin-top","35%");
	if (JPEstadoActivoActividad3) {
		JPEstadoActivoActividad3 = false;
		//JPEliminarMensajeActividad3();
		if (Display.get(JPventanaMensajeActividad3)) {
			Display.removeChild(JPventanaMensajeActividad3);
			Display.removeChild(JPventanaModalActividad3);
		}
		Display.removeChild(JPContenedorPrincipalActividad3);
	}
    
	juegoColisionUnoaUnoIntentos = 1;
	PosicionInicialX = 145;
	PosicionInicialY = 195;
	estadoJuego1UnoaUno = true;
	ElementoArrastrar = "mcRecuadro";
	ElementoObjetivo = "mcRecuadro";
	juegoColisionUnoaUnoMensajes = {
		"bien": "Mensaje Correcto",
		"mal": "Mensaje Incorrecto",
		"gano": "Very good job. Keep it up!",
		"perdio": "You can do better, try again!"
	};
	Textos = [
    "ran",
 "painted",
 "saw",
 "taught",
 "broke",
];
	PosicionesElementosX = [
    216,
    228,
    187,
    265,
    210
];

	PosicionesElementosY = [
    256,
    307,
    360,
    410,
    464
];
	Elementos1;
	Elementos2;
	Temporal1 = [];
	Temporal2 = [];
	Timer.load(TiempoEntrada, function () {
		ArrastrarSoltar1 = new JCUnoaUno();
	});
}
/*------------------- Fin Actividad 1 Arrastrar y Soltar Boton 5 --------------- */

/*------------------- Actividad 2 Arrastrar y Soltar Boton 5 --------------- */
function JASActividad2() {
    if(Boolean(Display.get("mcJuegoPreguntasAudios1"))){
        Display.removeChild("mcJuegoPreguntasAudios1");
    }if(Boolean(Display.get("mcJuegoPreguntasAudios2"))){
        Display.removeChild("mcJuegoPreguntasAudios2");
    }
    PosicionFinalPresentacion=true;
	UpNivelMenu();
	JASRemover();
	JCUnPosicionArray = 1;
	if(Temporal2.length!=0 && Temporal1.length!=0)  {
		Display.removeChild(Temporal2[f]);
		Display.removeChild(Temporal1[f]);
	}
	if (JPEstadoActivoActividad3) {
		JPEstadoActivoActividad3 = false;
		//JPEliminarMensajeActividad3();
		if (Display.get(JPventanaMensajeActividad3)) {
			Display.removeChild(JPventanaMensajeActividad3);
			Display.removeChild(JPventanaModalActividad3);
		}
		Display.removeChild(JPContenedorPrincipalActividad3);
	}
	if (estadoJuego1UnoaUno == true) {
		estadoJuego1UnoaUno = false;
		for (var f = 0; f < Temporal2.length; f++) {
			Display.removeChild(Temporal2[f]);
			Display.removeChild(Temporal1[f]);
		}
		//Collision.remove();
	}
	JESmensajes = {
		"bien": "Mensaje Correcto",
		"mal": "Mensaje Incorrecto",
		"gano": "Very good job. Keep it up!",
		"perdio": "You can do better, try again!"
	};
	juegoColisionUnoaUnoIntentos = 3;
	PosicionInicialX = 78;
	PosicionInicialY = 198;
	estadoJuego2UnoaUno = true;
	ElementoArrastrar = "mcRecuadro";
	ElementoObjetivo = "mcRecuadro";
	juegoColisionUnoaUnoMensajes = {
		"bien": "Mensaje Correcto",
		"mal": "Mensaje Incorrecto",
		"gano": "Very good job. Keep it up!",
		"perdio": "You can do better, try again!"
	};
	Textos = [
  "cooked",
    "went",
  "stayed",
  "bought",
  "drank",
  "sent"
];
	PosicionesElementosX = [
    324,
    142,
    577,
    185,
    290,
    174
];

	PosicionesElementosY = [
    255,
    308,
    308,
    360,
    409,
 463
];
	Elementos1;
	Elementos2;
	Temporal1 = [];
	Temporal2 = [];
	ArrastrarSoltar2 = new JCUnoaUno();
}
/*------------------- Fin Actividad 2 Arrastrar y Soltar Boton 5 --------------- */


/*------------------- Actividad 1 Escribir Boton 5 --------------- */
function JESActividad3a() {
    if(Boolean(Display.get("mcJuegoPreguntasAudios1"))){
        Display.removeChild("mcJuegoPreguntasAudios1");
    }if(Boolean(Display.get("mcJuegoPreguntasAudios2"))){
        Display.removeChild("mcJuegoPreguntasAudios2");
    }
    PosicionFinalPresentacion=false;
	UpNivelMenu();
	JESPosicionArray = 0;
	funcionocultarAnimarFlecha();
	Display.get(JESBotonVerificar).hide();
	JESOpcionesBuenas = [
 "ran",
 "studied",
 "became",
 "began",
 "talked",
 "cried",
 "forgot",
 "built",
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

	JESBotonVerificar = "contenido5.escribirVerificar";
	JESContenedorIntentos = "contenido5.Intentos.contenedor";
	JESContenedorPrincipal = "contenido5";
	JESidFormulario;
	JESValues = [];
	JESbuenas = 0;
	JESIntentos = 1;
	JESestadoJuego = "perdio";
	JESventanaMensaje = "mensaje";
	JESventanaModal = "modal";
	JESActividad3A = new JuegoEscribirCargar();
}
/*------------------- Fin Actividad 1 Escribir Boton 5 --------------- */

/*------------------- Actividad 2 Escribir Boton 5 --------------- */
function JESActividad7a() {
    if(Boolean(Display.get("mcJuegoPreguntasAudios1"))){
        Display.removeChild("mcJuegoPreguntasAudios1");
    }if(Boolean(Display.get("mcJuegoPreguntasAudios2"))){
        Display.removeChild("mcJuegoPreguntasAudios2");
    }
    PosicionFinalPresentacion=true;
	UpNivelMenu();
	JESPosicionArray = 1;
	JESOpcionesBuenas = [
 "spoke",
 "had",
 "went",
 "ate",
 "watched",
 "planned",
 "fixed"
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

	JESBotonVerificar = "contenido5.escribirVerificar";
	JESContenedorIntentos = "contenido5.Intentos.contenedor";
	JESContenedorPrincipal = "contenido5";
	JESidFormulario;
	JESValues = [];
	JESbuenas = 0;
	JESIntentos = 1;
	JESestadoJuego = "perdio";
	JESventanaMensaje = "mensaje";
	JESventanaModal = "modal";
	JESActividad7A = new JuegoEscribirCargar();
}
/*------------------- Fin Actividad 2 Escribir Boton 5 --------------- */

/*------------------- Actividad 2 Escribir Boton 5 --------------- */
function JESActividad3b() {
    if(Boolean(Display.get("mcJuegoPreguntasAudios1"))){
        Display.removeChild("mcJuegoPreguntasAudios1");
    }if(Boolean(Display.get("mcJuegoPreguntasAudios2"))){
        Display.removeChild("mcJuegoPreguntasAudios2");
    }
    PosicionFinalPresentacion=true;
	UpNivelMenu();
	funcionocultarAnimarFlecha();
	JESPosicionArray = 0;
	Display.get(JESBotonVerificar).hide();
	JESOpcionesBuenas = [
 "went",
 "paid",
 "called",
 "said",
 "talked",
 "told",
 "was",
 "swam"
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

	JESBotonVerificar = "contenido5.escribirVerificar";
	JESContenedorIntentos = "contenido5.Intentos.contenedor";
	JESContenedorPrincipal = "contenido5";
	JESidFormulario;
	JESValues = [];
	JESbuenas = 0;
	JESIntentos = 1;
	JESestadoJuego = "perdio";
	JESventanaMensaje = "mensaje";
	JESventanaModal = "modal";
	JESActividad4A = new JuegoEscribirCargar();
}
/*------------------- Fin Actividad 2 Escribir Boton 5 --------------- */

/*------------------- Actividad 1 Preguntas Boton 5 --------------- */
function JPCargarActividad1a() {
    PosicionFinalPresentacion=false;
	UpNivelMenu();
	JPAudiosPosicion3 = 0;
	funcionocultarAnimarFlecha();
	/*if (JPcontadorActividades <= JPCambioDeActividades.length) {
		JPcontadorActividades++;
	}*/
   if(Boolean(Display.get("mcJuegoPreguntasAudios1"))){
        Display.removeChild("mcJuegoPreguntasAudios1");
    }if(Boolean(Display.get("mcJuegoPreguntasAudios2"))){
        Display.removeChild("mcJuegoPreguntasAudios2");
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
	JPEstadoActivoActividad1 = true;
	//JPEliminarMensajeActividad3();
	if (Display.get(JPventanaMensajeActividad3)) {
		Display.removeChild(JPventanaMensajeActividad3);
		Display.removeChild(JPventanaModalActividad3);
	}
	Display.removeChild(JPContenedorPrincipalActividad3);
	JPBotonesPreguntasActividad3 = {
		"BotonesJuegoAudio1a": [
    "mcJuegoPreguntasAudios1.BotonesJuegoAudio1a.btn0A0",
    "mcJuegoPreguntasAudios1.BotonesJuegoAudio1a.btn0B1",
    "mcJuegoPreguntasAudios1.BotonesJuegoAudio1a.btn0C0",
    "mcJuegoPreguntasAudios1.BotonesJuegoAudio1a.btn0D0"
    ],
		"BotonesJuegoAudio1b": [
    "mcJuegoPreguntasAudios1.BotonesJuegoAudio2a.btn1A0",
    "mcJuegoPreguntasAudios1.BotonesJuegoAudio2a.btn1B0",
    "mcJuegoPreguntasAudios1.BotonesJuegoAudio2a.btn1C1",
    "mcJuegoPreguntasAudios1.BotonesJuegoAudio2a.btn1D0"
    ],
		"BotonesJuegoAudio1c": [
    "mcJuegoPreguntasAudios1.BotonesJuegoAudio3a.btn2A0",
    "mcJuegoPreguntasAudios1.BotonesJuegoAudio3a.btn2B1",
    "mcJuegoPreguntasAudios1.BotonesJuegoAudio3a.btn2C0",
    "mcJuegoPreguntasAudios1.BotonesJuegoAudio3a.btn2D0"
    ]

	};

	JPBotonesAudioActividad3 = [
 "mcJuegoPreguntasAudios1.audioBotonPlay1",
 "mcJuegoPreguntasAudios1.audioBotonPlay2",
 "mcJuegoPreguntasAudios1.audioBotonPlay3"
];

	JPAudiosActividad3 = [
  "media/practica2/Practica2d/botones/audio1",
  "media/practica2/Practica2d/botones/audio2",
  "media/practica2/Practica2d/botones/audio3"
  
];

	JPSubindiceBotonesPreguntasActividad3 = [
    "BotonesJuegoAudio1a",
    "BotonesJuegoAudio1b",
    "BotonesJuegoAudio1c"
];
	//varible elementos*/
	JPContenedorPrincipalActividad3 = "mcJuegoPreguntasAudios1";
	JContenedorintentosPreguntasActividad3 = "contenido5.Intentos.contenedor";
	JPventanaMensajeActividad3 = "mensaje";
	JPventanaModalActividad3 = "modal";
	JPBotonVerificarActividad3 = "mcJuegoPreguntasAudios1.escribirVerificar";

	JPmensajesActividad3 = {
		"bien": "Mensaje Correcto",
		"mal": "Mensaje Incorrecto",
		"gano": "Very good job. Keep it up!",
		"perdio": "You can do better, try again!"
	};
	JPCambioDeActividadesActividad3 = [
 //JPCargarActividad2,
 //JPCargarActividad3
];
	JPcontadoresClickActividad3 = 0;
	JPcontadorgruposActividad3 = 3;
	JPintentosActividad3 = 1;
	JPtempActividad3 = [];
	JPtemp2Actividad3 = [];
	JPElementoTemporalActividad3 = [];
	JPPuntosBuenosActividad3 = 0;
	JPclasificaGrupoActividad3 = [];
	JPNombreActividad3;
	JPSubgrupoActividad3;
	JPcontadorActividad3 = 0;
	JPestadoJuegoActividad3 = "perdio"; //me envia el estado del juego (Correcto, Perdio o Incorrecto).
	Timer.load(TiempoEntrada, function () {
		actividad1Actividad2 = new JuegoPreguntasSinAudio3();
	});

}
/*------------------- Fin Actividad 1 Preguntas Boton 5 --------------- */
/*------------------- Actividad 2 Preguntas Boton 5 --------------- */
function JPCargarActividad2a() {
    if(Boolean(Display.get("mcJuegoPreguntasAudios1"))){
        Display.removeChild("mcJuegoPreguntasAudios1");
    }if(Boolean(Display.get("mcJuegoPreguntasAudios2"))){
        Display.removeChild("mcJuegoPreguntasAudios2");
    }
    PosicionFinalPresentacion=true;
	UpNivelMenu();
	TiempoEntrada = 0.1;
	JPAudiosPosicion3 = 1;
	funcionocultarAnimarFlecha();
	/*if (JPcontadorActividades <= JPCambioDeActividades.length) {
		JPcontadorActividades++;
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
	JPEstadoActivoActividad2a = true;
	//JPEliminarMensajeActividad3();
	Display.removeChild(JPContenedorPrincipalActividad3);
	JPventanaMensajeActividad3 = "mensaje";
	JPventanaModalActividad3 = "modal";
	JPContenedorPrincipalActividad3 = "mcJuegoPreguntasAudios2";
	JContenedorintentosPreguntasActividad3 = "contenido5.Intentos.contenedor";
	JPBotonVerificarActividad3 = "mcJuegoPreguntasAudios2.escribirVerificar";
	JPBotonesPreguntasActividad3 = {
		"BotonesJuegoAudio2a": [
    "mcJuegoPreguntasAudios2.BotonesJuegoAudio2a.btn0A0",
    "mcJuegoPreguntasAudios2.BotonesJuegoAudio2a.btn0B0",
    "mcJuegoPreguntasAudios2.BotonesJuegoAudio2a.btn0C1",
    "mcJuegoPreguntasAudios2.BotonesJuegoAudio2a.btn0D0"
    ],
		"BotonesJuegoAudio2b": [
    "mcJuegoPreguntasAudios2.BotonesJuegoAudio2b.btn1A1",
    "mcJuegoPreguntasAudios2.BotonesJuegoAudio2b.btn1B0",
    "mcJuegoPreguntasAudios2.BotonesJuegoAudio2b.btn1C0",
    "mcJuegoPreguntasAudios2.BotonesJuegoAudio2b.btn1D0"
    ]

	};

	JPBotonesAudioActividad3 = [
 "mcJuegoPreguntasAudios2.audioBotonPlay1",
 "mcJuegoPreguntasAudios2.audioBotonPlay2"
];

	JPAudiosActividad3 = [
 "media/practica2/Practica2d/botones/audio4",
 "media/practica2/Practica2d/botones/audio5"
];

	JPSubindiceBotonesPreguntasActividad3 = [
    "BotonesJuegoAudio2a",
    "BotonesJuegoAudio2b"
];
	JPcontadoresClickActividad3 = 0;
	JPcontadorgruposActividad3 = 2;
	JPintentosActividad3 = 1;
	JPtempActividad3 = [];
	JPtemp2Actividad3 = [];
	JPElementoTemporalActividad3 = [];
	JPPuntosBuenosActividad3 = 0;
	JPPuntosMalosActividad3 = 0;
	JPclasificaGrupoActividad3 = [];
	JPNombreActividad3 = "";
	JPSubgrupoActividad3 = "";
	JPestadoJuegoActividad3 = "perdio"; //me envia el estado del juego (Correcto, Perdio o Incorrecto).
	actividad2Actividad2 = new JuegoPreguntasSinAudio3();
}
