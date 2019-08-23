/* ----------------------------- fin preguntas 2 sin audios ----------------------------- */
/* -----------------------------  Fin Actividad 2 preguntas sin audios Fotograma 2 ------------ */
/* ----------------------------- Actividad 2 preguntas sin audios Fotograma 2 ------------ */
/*--------------------------------------------------------------*/
/************************ Actividad3 ******************/
function JuegoPreguntasSinAudio3() {
    estadoJuegoPreguntasSinAudio3 = true;
    if (Display.get(JPContenedorPrincipalActividad3)) {
        //Display.get("mcJuegoPreguntas1").hide();
        Display.removeChild(JPContenedorPrincipalActividad3);
        Display.addChild(JPContenedorPrincipalActividad3);
        Display.position(JPContenedorPrincipalActividad3, 70, 190);
        //JPcontadorIntentosActividad3();
        Timer.load(0.8, JPAnimacionCargarPreguntasActividad3);

    } else {
        Display.addChild(JPContenedorPrincipalActividad3);
        Display.position(JPContenedorPrincipalActividad3, 70, 190);
        JPcontadorIntentosActividad3();
        Timer.load(0.8, JPAnimacionCargarPreguntasActividad3);
    }
}

function JPAnimacionCargarPreguntasActividad3() {
    TweenMax.from(JPContenedorPrincipal, 0.5, {
        scaleX: 1,
        scaleY: 1,
        alpha: 1,
        onComplete: JPConfigurarActividad3
    });
}

function JPConfigurarActividad3() {
    for (var df = 0; df < JPSubindiceBotonesPreguntasActividad3.length; df++) {
        for (var dj = 0; dj < JPBotonesPreguntasActividad3[JPSubindiceBotonesPreguntasActividad3[df]].length; dj++) {
            Event.click(JPBotonesPreguntasActividad3[JPSubindiceBotonesPreguntasActividad3[df]], JPOpcionValidarActividad3);
            Button.over(JPBotonesPreguntasActividad3[JPSubindiceBotonesPreguntasActividad3[df]], true);
        }
    }
    for (var dj = 0; dj < BotonPlayActividad3.length; dj++) {
        Button.over(BotonPlayActividad3[dj], true);
    }

    //Event.click(JPBotonesAudioActividad3, BotonPlayActividad3);
    BotonPlayActividad3();
}

function JPOpcionValidarActividad3(e) {
    JPNombreActividad3 = Display.getName(e).substring(Display.getName(e).length, Display.getName(e).length - 1);
    JPSubgrupoActividad3 = Display.getName(e).substr(3, 1);
    for (var dc = 0; dc < JPBotonesPreguntasActividad3[String(JPSubindiceBotonesPreguntasActividad3[JPSubgrupoActividad3])].length; dc++) {
        Display.get(JPBotonesPreguntasActividad3[String(JPSubindiceBotonesPreguntasActividad3[JPSubgrupoActividad3])][dc]).play("unselect");
    }
    Display.get(e).play("select");
    JPtempActividad3[JPSubgrupoActividad3] = JPNombreActividad3;
    JPElementoTemporalActividad3[JPSubgrupoActividad3] = Display.get(e);
    if (JPtemp2Actividad3[JPSubgrupoActividad3] != JPSubindiceBotonesPreguntasActividad3[JPSubgrupoActividad3]) {
        JPtemp2Actividad3[JPSubgrupoActividad3] = (JPSubindiceBotonesPreguntasActividad3[JPSubgrupoActividad3]);
        JPcontadoresClickActividad3++;
        JPclasificaGrupoActividad3.push(JPSubindiceBotonesPreguntasActividad3[JPSubgrupoActividad3]);
        if (JPclasificaGrupoActividad3.length == JPcontadorgruposActividad3) {
            Display.zIndex("subMenu2");
            Display.get(JPBotonVerificarActividad3).show();
            Event.click(JPBotonVerificarActividad3, JPValidarActividad3);
        }
    }
}

function JPValidarActividad3() {
    Event.removeClick(JPBotonVerificarActividad3, JPValidarActividad3);
    for (var dh = 0; dh < JPtempActividad3.length; dh++) {
        if (JPtempActividad3[dh] == "1") {
            JPPuntosBuenosActividad3++;
            Display.get(JPElementoTemporalActividad3[dh]).stop("bueno");
            var subElementoActividad3 = Display.getName(JPElementoTemporalActividad3[dh]).substr(3, 1)
            for (var dc = 0; dc < JPBotonesPreguntasActividad3[String(JPSubindiceBotonesPreguntasActividad3[subElementoActividad3])].length; dc++) {
                Event.removeClick(JPBotonesPreguntasActividad3[String(JPSubindiceBotonesPreguntasActividad3[subElementoActividad3])][dc], JPValidarActividad3);
                Button.over(JPBotonesPreguntasActividad3[String(JPSubindiceBotonesPreguntasActividad3[subElementoActividad3])][dc], false);
            }
            Event.removeClick(JPElementoTemporalActividad3[dh], JPValidarActividad3);
            Button.over(JPElementoTemporalActividad3[dh], false);
        } else {
            JPPuntosMalosActividad3++;
            var subElementoActividad3 = Display.getName(JPElementoTemporalActividad3[dh]).substr(3, 1)
            for (var dc = 0; dc < JPBotonesPreguntasActividad3[String(JPSubindiceBotonesPreguntasActividad3[subElementoActividad3])].length; dc++) {
                Event.removeClick(JPBotonesPreguntasActividad3[String(JPSubindiceBotonesPreguntasActividad3[subElementoActividad3])][dc], JPValidarActividad3);
                Button.over(JPBotonesPreguntasActividad3[String(JPSubindiceBotonesPreguntasActividad3[subElementoActividad3])][dc], false);
            }
            Event.removeClick(JPElementoTemporalActividad3[dh], JPValidarActividad3);
            Button.over(JPElementoTemporalActividad3[dh], false);
            Display.get(JPElementoTemporalActividad3[dh]).stop("malo");
        }
    }
    Display.get(JPBotonVerificarActividad3).hide();
    JPContadorGlobal.push(JPPuntosBuenosActividad3);
    Display.get(JPBotonVerificarActividad3).hide();
    JPAVerificar();
}


function JPAVerificar() {
    var contador = 0;
    JPAudiosContadorActividades3[JPAudiosPosicion3] = "true";
    //console.log(JPAudiosContadorActividades3);
    for (var i = 0; i < JPAudiosContadorActividades3.length; i++) {
        if (JPAudiosContadorActividades3[i] == "true") {
            contador++;
        }
    }

    if (contador == JPAudiosCantidadActividades) {
        var resultado3 = 0;
        for (var i = 0; i < JPContadorGlobal.length; i++) {
            resultado3 += JPContadorGlobal[i];
            //console.log("resultado" + resultado3);
        }
        //console.log(Math.round(5 % 2));
        if (Math.round((5 % 2) == 1)) {
            if (resultado3 >= Math.round((5 / 2) + 1)) {
                Sound.play("media/mensajes/gano");
                JPestadoJuegoActividad3 = "gano";
            } else {
                Sound.play("media/mensajes/perdio");
                JPestadoJuegoActividad3 = "perdio";
            }
        }
        if (PosicionFinalPresentacion) {
            PosicionFinalPresentacion = false;
            cargarMensajeJPActividad3();
            JPtempActividad3 = [];
            JPElementoTemporalActividad3 = [];
            UpNivelMenu();
        }
    }
}

function reinicarTipoPregunta3() {
    contador = 0;
    JPAudiosCantidadActividades3 = 0;
    JPAudiosContadorActividades3 = [];
    JPContadorGlobal = [];
}

function BotonPlayActividad3() {
    Sound.playButtons(JPBotonesAudioActividad3, JPAudiosActividad3);
    /*var temporal = [];
	for (var i = 0; i < JPBotonesAudioActividad3.length; i++) {
		temporal[i] = JPBotonesAudioActividad3[i];
	}
	Event.removeClick(Display.get(e), BotonPlayActividad3);
	for (var dh = 0; dh < JPBotonesAudioActividad3.length; dh++) {
		Display.get(JPBotonesAudioActividad3[dh]).stop("normal");
	}

	Sound.stop();
	var nombre = Display.getName(e);
	var posicion = JPBotonesAudioActividad3.indexOf(JPContenedorPrincipalActividad3 + "." + nombre);
	temporal.splice(posicion, 1);
	Event.click(temporal, BotonPlayActividad3);
	temporal = [];
	Sound.play(JPAudiosActividad3[posicion]);
	Display.get(Display.get(e)).stop("silencio");
	Event.click(Display.get(e), BotonStopActividad3);*/
};

function BotonStopActividad3(e) {
    var temporal = [];
    for (var i = 0; i < JPBotonesAudioActividad3.length; i++) {
        temporal[i] = JPBotonesAudioActividad3[i];
    }
    var nombre = Display.getName(e);
    var posicion = JPBotonesAudioActividad3.indexOf(JPContenedorPrincipalActividad3 + "." + nombre);
    temporal.splice(posicion, 1);
    Event.click(temporal, BotonStopActividad3);
    Sound.stop(JPAudiosActividad3[posicion]);
    Display.get(Display.get(e)).stop("normal");
    Event.removeClick(Display.get(e), BotonStopActividad3);
    Event.click(Display.get(e), BotonPlayActividad3);
};

//Agrega la ventana de los mensajes y llama las demas funciones.
function cargarMensajeJPActividad3() {
    Display.addChild(JPventanaModalActividad3);
    Display.position(JPventanaModalActividad3, 0, 0);
    Display.addChild(JPventanaMensajeActividad3);
    Display.position(JPventanaMensajeActividad3, 209, 190);
    cargarTextoMensajeJPActividad3();
    JPListenerMensajeActividad3();
    mensajeInJPActividad3();
};

//Carga los textos de los mensajes
function cargarTextoMensajeJPActividad3() {
    Display.get(JPventanaMensajeActividad3).stop(JPestadoJuegoActividad3);
    //Display.get(ventanaMensajeLS + ".btnCerrar").stop(estadoJuegoLS);
    var textoMensajeJPActividad3 = JPmensajesActividad3[JPestadoJuegoActividad3];
    //permite identificar si es un archivo HTML o si es un string.
    if (textoMensajeJPActividad3.indexOf("Textos/") !== -1) {
        $.ajax({
            url: textoMensajeJPActividad3 + ".html",
            success: function (archivo) {
                Text.load(JPventanaMensajeActividad3, archivo);
            }
        });
    } else {
        Text.load(JPventanaMensajeActividad3, textoMensajeJPActividad3, "middle center size24 bold");
    }
};


function JPEliminarMensajeActividad3() {
    Display.removeChild(JPventanaMensajeActividad3);
    Display.removeChild(JPventanaModalActividad3);
    finalJuegoTotal = true;
    funcionAnimarFlecha();
    JPContadorGlobal = [];
    contador = 0;
    JPAudiosContadorActividades = [];
    JPAudiosCantidadActividades = 2;
    //console.log("JPEliminarMensajeActividad3");
    Display.get(JPBotonVerificarActividad3).hide();
}

function JPListenerMensajeActividad3() {
    if (JPestadoJuegoActividad3 == "perdio") {
        Sound.play("media/mensajes/perdio");
        Event.click(JPventanaMensajeActividad3 + ".cerrar", mensajeOutJPActividad3);
        Button.over(JPventanaMensajeActividad3 + ".cerrar", true);
        
    } else {
        Sound.play("media/mensajes/gano");
        Event.click(JPventanaMensajeActividad3 + ".cerrar", mensajeOutJPActividad3);
        Button.over(JPventanaMensajeActividad3 + ".cerrar", true);
        
    }
}

//Animacion de entrada de los mensajes.
function mensajeInJPActividad3() {
    TweenMax.from(JPventanaMensajeActividad3, 0.5, {
        scaleX: 0,
        scaleY: 0,
        alpha: 0
    });
    TweenMax.from(JPventanaModalActividad3, 1, {
        alpha: 0
    });
};

//Animacion de salida de los mensajes.
function mensajeOutJPActividad3() {
    Event.removeClick(JPventanaMensajeActividad3 + ".cerrar", mensajeOutJPActividad3);
    TweenMax.to(JPventanaMensajeActividad3, 0.5, {
        alpha: 0,
        onComplete: JPEliminarMensajeActividad3
    });
    TweenMax.to(JPventanaModalActividad3, 1, {
        alpha: 0
    });
};


function finalJuegoJPActividad3() {
    JPestadoJuegoActividad3 = "gano";
    Timer.load(0.3, cargarMensajeJPActividad3);
}

function finalJuegoJPGanoActividad3() {
    JPestadoJuegoActividad3 = "gano";
    Timer.load(0.3, cargarMensajeJPActividad3);
}

function JPcontadorIntentosActividad3() {
    Text.load(JContenedorintentosPreguntasActividad3, JPintentosActividad3, "middle center size24");
}

function JPRemoverActividad3() {
    Display.removeChild(JPContenedorPrincipal);
}

/* ------------------------- Fin actividad 3 ---------------------- */