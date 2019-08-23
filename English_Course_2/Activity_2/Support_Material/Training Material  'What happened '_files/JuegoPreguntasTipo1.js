/* --- codigo para el juego que tiene preguntas con audio ----*/
function JuegoAudios() {
    if (estadofinaljuego) {
        if (Display.get("contenido4.btnVerificar")) {
            Display.get("contenido4.btnVerificar").hide();
        }
    }
    JPAudioEstadoJuego = true;
    console.log(JPAudiocontenedor);
    if (Display.get(JPAudiocontenedor)) {
        Display.removeChild(JPAudiocontenedor);
    }
    if (JPAudiocontenedor == undefined || JPAudiocontenedor == null) {
        var elemento = Presentation.getCurrentPage();
        JPAudiocontenedor = "mcJuegoPreguntasBoton4" + elemento;
    }
    Display.addChild(JPAudiocontenedor, "contenido4");
    Display.position(JPAudiocontenedor, 50, 50);
    Button.over(JPaudioBotonPlay, true);
    AnimacionInJPAudios();
    //Button.over(arrayBotonesPreguntasAudio);
    //Sound.playButtons("mcJuegoPreguntas.audioBotonPlay","media/Audiosjuego4/Sonido");
    JPAudioConfigurarOpciones(JPAudioOpcion);
    Event.click(arrayBotonesPreguntasAudio, eventoBotonClick);
    Button.over(arrayBotonesPreguntasAudio, true);
    Event.click(arrayBotonesPreguntasAudio, JPAudioConfigurarOpciones);
    //Event.click(JPaudioBotonPlay, BotonPlay);
    BotonPlay();
    //JPAudioscontadorIntentos();
};

function cargarMensajeJPaudios() {
    Display.addChild(JPaudiosventanaModal);
    Display.position(JPaudiosventanaModal, 0, 0);
    Display.addChild(JPaudioventanaMensaje);
    Display.position(JPaudioventanaMensaje, 209, 190);
    cargarTextoMensajeJPAudios();
    JPAudiosListenerMensaje();
    mensajeInJPAudios();
};

function JPAudiosListenerMensaje() {
    if (JPAudioestadoJuego != "gano") {
        Sound.play("media/mensajes/gano");
        Event.click(JPaudioventanaMensaje + ".cerrar", mensajeOutJPAudios);
        Button.over(JPaudioventanaMensaje + ".cerrar", true);
        
    } else {
        Sound.play("media/mensajes/perdio");
        Event.click(JPaudioventanaMensaje + ".cerrar", mensajeFinalOutJPAudios);
        Button.over(JPaudioventanaMensaje + ".cerrar", true);
        
    }
}

function cargarTextoMensajeJPAudios() {
    Display.get(JPaudioventanaMensaje).stop(JPAudioestadoJuego);
    var textoMensajeJPAudios = JPAudiomensajes[JPAudioestadoJuego];
    //permite identificar si es un archivo HTML o si es un string.
    if (textoMensajeJPAudios.indexOf("Textos/") !== -1) {
        $.ajax({
            url: textoMensajeJPAudios + ".html",
            success: function (archivo) {
                Text.load(JPAudiocontenedor, archivo);
            }
        });
    } else {
        Text.load(JPaudioventanaMensaje, textoMensajeJPAudios, "middle center size24 bold");
    }
};

//Animacion de entrada de los mensajes.
function AnimacionInJPAudios() {
    TweenMax.from(JPAudiocontenedor, 0.5, {
        scaleX: 0,
        scaleY: 0,
        alpha: 0
    });
}
//Animacion de entrada de los mensajes.
function mensajeInJPAudios() {
    TweenMax.from(JPaudioventanaMensaje, 0.5, {
        scaleX: 0,
        scaleY: 0,
        alpha: 0
    });
    TweenMax.from(JPventanaModal, 1, {
        alpha: 1
    });
};

//Animacion de salida de los mensajes.
function mensajeOutJPAudios() {
    if (JPAudioestadoJuego != "perdio") {
        TweenMax.to(JPaudioventanaMensaje, 0.5, {
            alpha: 0,
            onComplete: eliminarMensajeJPAudio
        });
        TweenMax.to(JPventanaModal, 1, {
            alpha: 0
        });
    } else {
        TweenMax.to(JPaudioventanaMensaje, 0.5, {
            alpha: 0,
            onComplete: finJPAudios
        });
        TweenMax.to(JPventanaModal, 1, {
            alpha: 0
        });
    }

};

//Animacion de salida de los mensajes.
function mensajeFinalOutJPAudios() {
    TweenMax.to(JPaudioventanaMensaje, 0.5, {
        alpha: 0,
        onComplete: finJPAudios
    });
    TweenMax.to(JPventanaModal, 1, {
        alpha: 0
    });
};

//remueve la ventana de los mensajes
function eliminarMensajeJPAudio() {
    Display.removeChild(JPaudioventanaMensaje);
    Display.removeChild(JPaudiosventanaModal);
    //console.log(eliminarMensajeJPAudio);
    finalJuegoTotal = true;
    funcionAnimarFlecha();
};

function eventoBotonClick(e) {
    Display.get(Display.get(e)).stop("select");
};

function eventoBotonNormal(e) {
    Display.get(Display.get(e)).stop(0);
};

function BotonPlay() {
    var Botones = [];
    Botones[0] = JPaudioBotonPlay;
    console.log(JParrayAudios);
    console.log(Botones);
    Sound.playButtons(Botones, JParrayAudios);
    //Sound.playButtons(JPaudioBotonPlay,JParrayAudios);
    /*Sound.play(JParrayAudios[JPContadorRutaAudios]);
	Display.get(Display.get(e)).stop("silencio");
	Event.removeListener(Display.get(e), "mouseUp", BotonPlay);
	Event.listener(Display.get(e), "mouseUp", BotonStop);*/
};

function BotonStop() {
    /*Sound.stop(JParrayAudios[JPContadorRutaAudios]);
	Display.get(Display.get(e)).stop("normal");
	Event.removeListener(Display.get(e), "mouseUp", BotonStop);
	Event.listener(Display.get(e), "mouseUp", BotonPlay);*/
};

function JPAudioscontadorIntentos() {
    Text.load(JPAudiosContenedorintentosPreguntas, JPAudioIntentos, "middle center");
}

function JPAudioConfigurarOpciones(Opcion) {
    switch (Opcion) {
    case 0:
        //alert('b');
        Correctas(Display.get(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnC"));
        Mala(Display.get(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnA"));
        Mala(Display.get(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnB"));
        Mala(Display.get(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnD"));
        break;
    case 1:
        //alert('a');
        Correctas(Display.get(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnB"));
        Mala(Display.get(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnA"));
        Mala(Display.get(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnC"));
        Mala(Display.get(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnD"));
        break;
    case 2:
        //alert('A');
        Correctas(Display.get(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnD"));
        Mala(Display.get(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnB"));
        Mala(Display.get(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnC"));
        Mala(Display.get(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnA"));
        break;
    case 3:
        //alert('B');
        Correctas(Display.get(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnD"));
        Mala(Display.get(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnB"));
        Mala(Display.get(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnC"));
        Mala(Display.get(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnA"));
        break;
    case 4:
        //alert('B');
        Correctas(Display.get(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnC"));
        Mala(Display.get(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnA"));
        Mala(Display.get(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnD"));
        Mala(Display.get(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnB"));
        break;
    }
};

function Correctas(OpcionCorrecta) {
    //alert(Display.getName(OpcionCorrecta));
    //Display.get(OpcionCorrecta).stop("unselect");
    //Button.over(OpcionCorrecta, true);
    Event.click(OpcionCorrecta, JPAudiosfbuenas);
};

function Mala(OpcionMala) {
    //alert(Display.getName(OpcionMala));
    //Display.get(OpcionMala).stop("unselect");
    //Button.over(OpcionMala, true);
    Event.click(OpcionMala, JPAudiosfmalas);
};

function JPAudiosRemoverListener() {
    for (var dc = 0; dc < JPAudiosBtn.length; dc++) {
        //Button.over(JPAudiosBtn[dc], false);
        Event.removeClick(JPAudiosBtn[dc], JPAudiosfmalas);
        Event.removeClick(JPAudiosBtn[dc], JPAudiosfbuenas);
    }
}

function JPAudiosfbuenas(elemento) {
    JPAUReelemento = elemento;
    for (var dc = 0; dc < JPAudiosBtn.length; dc++) {
        Display.get(JPAudiosBtn[dc]).play("unselect");
    }
    Display.get(elemento).play("select");
    JPAUEstadoJuego = "bueno";
    Display.get(JPAudiocontenedor + ".escribirVerificar").show();
    Event.click(JPAudiocontenedor + ".escribirVerificar", validarJuegoPreguntas);
    Button.over(JPAudiocontenedor + ".escribirVerificar", true);
    //VerificarJuegoPreguntas();
    //cargarMensajeJPaudios();
};

function JPAudiosfmalas(elemento) {
    JPAUReelemento = elemento;
    for (var dc = 0; dc < JPAudiosBtn.length; dc++) {
        Display.get(JPAudiosBtn[dc]).play("unselect");
    }
    Display.get(elemento).play("select");
    JPAUEstadoJuego = "malo";
    //Display.get(elemento).stop("malo");
    //JPAudioestadoJuego = "perdio";
    Display.get(JPAudiocontenedor + ".escribirVerificar").show();
    Event.click(JPAudiocontenedor + ".escribirVerificar", validarJuegoPreguntas);
    Button.over(JPAudiocontenedor + ".escribirVerificar", true);
    //JPAudioIntentos--;
    //JPAudioscontadorIntentos();
    //JPremoverEventos();
    ///VerificarJuegoPreguntas();
    //cargarMensajeJPaudios();
};

function validarJuegoPreguntas(elemento) {
    JPremoverEventos();
    if (JPAUEstadoJuego == "bueno") {
        JPAudiosBuenos++;
        JPAUContadorGlobal.push(JPAudiosBuenos);
    }
    Event.removeClick(elemento, validarJuegoPreguntas);
    Display.get(JPAUReelemento).stop(JPAUEstadoJuego);
    Display.get(elemento).hide();
    VerificarJuegoPreguntas();
}

function VerificarJuegoPreguntas() {
    //var JPContadorGlobal = [];
    var contador = 0;
    JPAUContadorActividades[JPAUPosicionArray] = "true";
    //console.log(JPAUContadorActividades);
    for (var i = 0; i < JPAUContadorActividades.length; i++) {
        if (JPAUContadorActividades[i] == "true") {
            contador++;
        }
    }
    if (contador == JPAUCantidadActividades) {
        var resultado = 0;
        for (var i = 0; i < JPAUContadorGlobal.length; i++) {
            resultado += JPAUContadorGlobal[i];
        }
        console.log(Math.round((JPAUCantidadActividades % 2)));
        if (Math.round((JPAUCantidadActividades % 2) == 1)) {
			console.log("redondeo"+Math.round((JPAUCantidadActividades /2)));
			console.log("resultado"+resultado);
            if (resultado >= Math.round((JPAUCantidadActividades / 2)+1)) {
                JPAudioestadoJuego = "gano";
                Sound.play("media/mensajes/gano");
            } else {
                JPAudioestadoJuego = "perdio";
                Sound.play("media/mensajes/perdio");
            }
        }
        if (PosicionFinalPresentacion) {
            PosicionFinalPresentacion = false;
            cargarMensajeJPaudios();
        }
    }
}

function reinicarTipoPregunta1() {
    contador = 0;
    JPAUContadorGlobal = [];
    JPAUContadorActividades = [];
    JPAUCantidadActividades = 5;
}


function finJPAudios() {
    Display.removeChild(JPaudioventanaMensaje);
    Display.removeChild(JPaudiosventanaModal);
    finalJuegoTotal = true;
    funcionAnimarFlecha();
    JPAUContadorGlobal = [];
    contador = 0;
    JPAUContadorActividades = [];
    JPAUCantidadActividades = 5;
    JPremoverEventos();
    //console.log("finJPAudios");
}


function JPremoverEventos() {
    Event.removeClick(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnD", JPAudiosfmalas);
    Event.removeClick(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnA", JPAudiosfmalas);
    Event.removeClick(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnB", JPAudiosfmalas);
    Event.removeClick(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnC", JPAudiosfmalas);
    Event.removeClick(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnA", JPAudiosfbuenas);
    Event.removeClick(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnB", JPAudiosfbuenas);
    Event.removeClick(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnC", JPAudiosfbuenas);
    Event.removeClick(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnD", JPAudiosfbuenas);
    Button.over(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnA", false);
    Button.over(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnB", false);
    Button.over(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnC", false);
    Button.over(JPAudiocontenedor + ".BtnJuegoPreguntasAudio.btnD", false);
}


function JPAudioAtras() {
    if (JPAudioOpcion != 0) {
        JPAudioOpcion--;
    }
}

function JPAudioAdelante() {
    if (JPAudioOpcion != 4) {
        JPAudioOpcion++;
    }
}

function JPAnimacionCargarPreguntas() {
    TweenMax.from(JPContenedorPrincipal, 0.5, {
        scaleX: 1,
        scaleY: 1,
        alpha: 1,
        onComplete: JPConfigurar
    });
}

function RemoverPreguntasSinAudio() {
    estadoJuegoPreguntasSinAudio = false;
    if (Display.get(JPContenedorPrincipal)) {
        TweenMax.to(JPContenedorPrincipal, 0.01, {
            alpha: 0,
            onComplete: function () {
                Display.removeChild(JPContenedorPrincipal);
            }
        });
    }
    if (Display.get("mcJuegoPreguntas2")) {
        Display.removeChild("mcJuegoPreguntas2");
        TweenMax.to("mcJuegoPreguntas2", 0.01, {
            alpha: 0,
            onComplete: function () {
                Display.removeChild("mcJuegoPreguntas2");
            }
        });
    }
}
/* ----------------------------- fin preguntas sin audios ----------------------------- */


/* ----------------- Funcion para remover los elementos de la actividad de audio -------------- */
function JPAudioRemoverElemento() {
    if (Display.get(JPAudiocontenedor)) {
        Display.removeChild(JPAudiocontenedor, "contenido4");
    }
    if (Display.get("mensaje")) {
        Display.removeChild(JPaudioventanaMensaje);
    }
    if (Display.get("modal")) {
        Display.removeChild(JPaudiosventanaModal);
    }

}
