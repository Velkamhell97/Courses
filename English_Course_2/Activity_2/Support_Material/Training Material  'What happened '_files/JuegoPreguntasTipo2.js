function JPConfigurar() {
    for (var df = 0; df < JPSubindiceBotonesPreguntas.length; df++) {
        for (var dj = 0; dj < JPBotonesPreguntas[JPSubindiceBotonesPreguntas[df]].length; dj++) {
            Event.click(JPBotonesPreguntas[JPSubindiceBotonesPreguntas[df]], JPOpcionValidar);
            Button.over(JPBotonesPreguntas[JPSubindiceBotonesPreguntas[df]], true);
        }
    }
}

function JPOpcionValidar(e) {
    JPNombre = Display.getName(e).substring(Display.getName(e).length, Display.getName(e).length - 1);
    JPSubgrupo = Display.getName(e).substr(3, 1);
    for (var dc = 0; dc < JPBotonesPreguntas[String(JPSubindiceBotonesPreguntas[JPSubgrupo])].length; dc++) {
        Display.get(JPBotonesPreguntas[String(JPSubindiceBotonesPreguntas[JPSubgrupo])][dc]).play("unselect");
    }
    Display.get(e).play("select");
    JPtemp[JPSubgrupo] = JPNombre;
    JPElementoTemporal[JPSubgrupo] = Display.get(e);
    if (JPtemp2[JPSubgrupo] != JPSubindiceBotonesPreguntas[JPSubgrupo]) {
        JPtemp2[JPSubgrupo] = (JPSubindiceBotonesPreguntas[JPSubgrupo]);
        JPcontadoresClick++;
        JPclasificaGrupo.push(JPSubindiceBotonesPreguntas[JPSubgrupo]);
        if (JPclasificaGrupo.length == JPcontadorgrupos) {
            Display.get(JPBotonVerificar).show();
            Event.click(JPBotonVerificar, JPValidar);
        }
    }
}

function JPValidar() {
    var subElemento;
    JPPuntosBuenos = 0;
    Display.get(JPBotonVerificar).hide();
    Event.removeClick(JPBotonVerificar, JPValidar);
    for (var dh = 0; dh < JPtemp.length; dh++) {
        if (JPtemp[dh] == "1") {
            JPPuntosBuenos++;
            Display.get(JPElementoTemporal[dh]).stop("bueno");
            subElemento = Display.getName(JPElementoTemporal[dh]).substr(3, 1);
            for (var dc = 0; dc < JPBotonesPreguntas[String(JPSubindiceBotonesPreguntas[subElemento])].length; dc++) {
                Event.removeClick(JPBotonesPreguntas[String(JPSubindiceBotonesPreguntas[subElemento])][dc], JPOpcionValidar);
                Button.over(JPBotonesPreguntas[String(JPSubindiceBotonesPreguntas[subElemento])][dc], false);
            }
            Event.removeClick(JPElementoTemporal[dh], JPValidar);
            Button.over(JPElementoTemporal[dh], false);
        } else {
            JPPuntosMalos++;
            subElemento = Display.getName(JPElementoTemporal[dh]).substr(3, 1);
            for (var dc = 0; dc < JPBotonesPreguntas[String(JPSubindiceBotonesPreguntas[subElemento])].length; dc++) {
                Event.removeClick(JPBotonesPreguntas[String(JPSubindiceBotonesPreguntas[subElemento])][dc], JPOpcionValidar);
                Button.over(JPBotonesPreguntas[String(JPSubindiceBotonesPreguntas[subElemento])][dc], false);
            }
            Event.removeClick(JPElementoTemporal[dh], JPValidar);
            Button.over(JPElementoTemporal[dh], false);
            Display.get(JPElementoTemporal[dh]).stop("malo");
        }
    }
    JPAudiosContadorGlobal.push(JPPuntosBuenos);
    JAPverificarJuegos();
}


function JAPverificarJuegos() {
    var contador = 0;
    JPAudiosContadorActividades2[JPAudiosPosicion2] = "true";
    //console.log(JPAudiosContadorActividades2);
    for (var i = 0; i < JPAudiosContadorActividades2.length; i++) {
        if (JPAudiosContadorActividades2[i] == "true") {
            contador++;
        }
    }
    if (contador == JPAudiosCantidadActividades2) {
        var resultado2 = 0;
        for (var i = 0; i < JPAudiosContadorGlobal.length; i++) {
            resultado2 += JPAudiosContadorGlobal[i];
        }
        //console.log(Math.round((JPtemp.length % 2)));
        if (Math.round((JPtemp.length % 2) == 0)) {
            if (JPPuntosBuenos >= Math.round((JPtemp.length / 2))) {
                JPestadoJuego = "gano";
            } else {
                JPestadoJuego = "perdio";
            }
        } else {
            if (JPPuntosBuenos >= Math.round((JPtemp.length / 2) + 1)) {
                JPestadoJuego = "gano";
            } else {
                JPestadoJuego = "perdio";
            }
        }
        if (PosicionFinalPresentacion) {
            PosicionFinalPresentacion = false;
            cargarMensajeJP();
            JPtemp = [];
            JPElementoTemporal = [];
        }
    }

}

function reinicarTipoPregunta2() {
    contador = 0;
    JPAudiosCantidadActividades2 = 5;
    JPAudiosContadorActividades2 = [];
    JPAudiosContadorGlobal = [];
}

//Agrega la ventana de los mensajes y llama las demas funciones.
function cargarMensajeJP() {
    Display.addChild(JPventanaModal);
    Display.position(JPventanaModal, 0, 0);
    Display.addChild(JPventanaMensaje);
    Display.position(JPventanaMensaje, 209, 190);
    cargarTextoMensajeJP();
    JPListenerMensaje();
    mensajeInJP();
};

//Carga los textos de los mensajes
function cargarTextoMensajeJP() {
    Display.get(JPventanaMensaje).stop(JPestadoJuego);
    //Display.get(ventanaMensajeLS + ".btnCerrar").stop(estadoJuegoLS);
    var textoMensajeJP = JPmensajes[JPestadoJuego];
    //permite identificar si es un archivo HTML o si es un string.
    if (textoMensajeJP.indexOf("Textos/") !== -1) {
        $.ajax({
            url: textoMensajeJP + ".html",
            success: function (archivo) {
                Text.load(JPventanaMensaje, archivo);
            }
        });
    } else {
        Text.load(JPventanaMensaje, textoMensajeJP, "middle center size24 bold");
    }
};


function JPEliminarMensaje() {
    Display.removeChild(JPventanaMensaje);
    Display.removeChild(JPventanaModal);
    finalJuegoTotal = true;
    funcionAnimarFlecha();
    //console.log("JPEliminarMensaje");
    Display.get(JPBotonVerificar).hide();
}

function JPListenerMensaje() {
    if (JPestadoJuego == "perdio") {
        Sound.play("media/mensajes/perdio");
        Event.click(JPventanaMensaje + ".cerrar", mensajeOutJP);
        Button.over(JPventanaMensaje + ".cerrar", true);
       
    } else {
        Sound.play("media/mensajes/gano");
        Event.click(JPventanaMensaje + ".cerrar", mensajeOutJP);
        Button.over(JPventanaMensaje + ".cerrar", true);
        
    }
}

//Animacion de entrada de los mensajes.
function mensajeInJP() {
    TweenMax.from(JPventanaMensaje, 0.5, {
        scaleX: 0,
        scaleY: 0,
        alpha: 0
    });
    TweenMax.to(JPventanaModal, 1, {
        alpha: 1
    });
};

//Animacion de salida de los mensajes.
function mensajeOutJP() {
    TweenMax.to(JPventanaMensaje, 0.5, {
        alpha: 0,
        onComplete: JPEliminarMensaje
    });
    TweenMax.to(JPventanaModal, 1, {
        alpha: 0
    });
};

function JPCerrarMensaje() {
    mensajeOutJP();
    Display.removeChild(JPventanaMensaje);
    Display.removeChild(JPventanaModal);
    Display.get(JPBotonVerificar).hide();
    finalJuegoTotal = true;
    funcionAnimarFlecha();

}

function finalJuegoJP() {
    JPestadoJuego = "gano";
    Timer.load(0.3, cargarMensajeJP);
}

function finalJuegoJPGano() {
    JPestadoJuego = "gano";
    Timer.load(0.3, cargarMensajeJP);
}

function JPcontadorIntentos() {
    Text.load(JContenedorintentosPreguntas, JPintentos, "middle center size24");
}