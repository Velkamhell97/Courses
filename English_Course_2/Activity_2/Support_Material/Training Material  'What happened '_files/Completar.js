/**********************************************************************************************/
/********************************** JUEGO COMPLETAR ********************************************/
/**********************************************************************************************/
/*------------------- Actividad 2 Escribir Boton 5 --------------- */
function JuegoEscribirCargar() {
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
    if (JPEstadoActivoActividad3) {
        JPEstadoActivoActividad3 = false;
        JPEliminarMensajeActividad3();
        Display.removeChild(JPContenedorPrincipalActividad3);
    }
    if (estadoJuegoPreguntasSinAudio1) {
        RemoverPreguntasSinAudio();
    }
    if (estadoJuegoPreguntasSinAudio2) {
        RemoverPreguntasSinAudio();
    }
    if (estadoJuegoPreguntasSinAudio3) {
        RemoverPreguntasSinAudio();
    }
    //JESmostrarIntentos();
};

/*------------------- Fin Actividad 2 Escribir Boton 5 --------------- */

//verifica los valores seleccionados y los almacena en "valores".
function verificarInput() {
    JESidFormulario = document.getElementById("forminput");
    JESValues.length = 0;

    for (var i = 0; i < JESidFormulario.length; ++i) {
        var child = JESidFormulario[i];
        if (child.tagName == "INPUT") {
            if (child.value !== "" && child.value !== " ") {
                JESValues.push(child.value.replace(/^\s+|\s+$/gm, ''));
                if (JESValues.length == JESidFormulario.length) {
                    JESactivarBtnVerificar();
                } else {
                    JESdesactivaBtnVerificar();
                }
            }
        }
    }
};

function JESactivarBtnVerificar() {
    Display.get(JESBotonVerificar).show();
    Display.get(JESBotonVerificar).stop("activo");
    Button.over(JESBotonVerificar, true);
    Event.click(JESBotonVerificar, JESvarificarJuego);
    JESbuenas = 0;
}

function JESdesactivaBtnVerificar() {
    Display.get(JESBotonVerificar).hide();
    Display.get(JESBotonVerificar).stop("activo");
    Button.over(JESBotonVerificar, false);
    Event.removeClick(JESBotonVerificar, JESvarificarJuego);
}

//verificasi el se contesto correcto o no.
function JESvarificarJuego() {
    //var expreg = new RegExp("^/i/t/g$");
    var Texto;
    var espacios;
    var elemento;
    for (var i = 0; i < JESValues.length; ++i) {
        Texto = JESValues[i];
        espacios = Texto.replace(/^\s+|\s+$/gm, '');
        Texto = espacios.toLowerCase();
        elemento = document.getElementById(JESIdinputs[i]);
        if (Texto === JESOpcionesBuenas[i]) {
            elemento.setAttribute("readonly", "true");
            elemento.className = "bien";
           
            JESbuenas++;
        } else {
            elemento.setAttribute("readonly", "true");
            elemento.className = "mal";
            
        }
        JESContadorInputs++;
    }
    JESdesactivaBtnVerificar();
    JESContadorGlobal.push(JESbuenas);
    JESVerificar();
};

function JESVerificar() {
    var contador = 0;
    JESContadorActividades[JESPosicionArray] = "true";
    for (var i = 0; i < JESContadorActividades.length; i++) {
        if (JESContadorActividades[i] == "true") {
            contador++;
        }
    }
    //console.log(JESCantidadActividades);
    //console.log(JESContadorActividades);
    if (JESCantidadActividades == contador) {
        var resultado = 0;
        for (var i = 0; i < JESContadorGlobal.length; i++) {
            resultado += JESContadorGlobal[i];
        }
        if (Math.round((JESContadorInputs % 2) == 0)) {
            if (resultado >= Math.round((JESContadorInputs / 2) + 1)) {
                JESestadoJuego = "gano";
                Sound.play("media/mensajes/gano");
            } else {
                JESestadoJuego = "perdio";
                Sound.play("media/mensajes/perdio");
            }
        } else {
            if (resultado >= Math.round((JESContadorInputs / 2))) {
                JESestadoJuego = "gano";
                Sound.play("media/mensajes/gano");
            } else {
                JESestadoJuego = "perdio";
                Sound.play("media/mensajes/perdio");
            }
        }

        //JESmostrarIntentos();
        if (PosicionFinalPresentacion) {
            PosicionFinalPresentacion = false;
            JEScargarMensaje();
        }
        
    }
};

function JESmostrarIntentos() {
    Display.get(JESContenedorIntentos).hide();
    Text.load(JESContenedorIntentos, JESIntentos, "middle center size24 bold");
};

function JEScargarMensaje() {
    Display.addChild(JESventanaModal);
    Display.position(JESventanaModal, 0, 0);
    Display.addChild(JESventanaMensaje);
    Display.position(JESventanaMensaje, 209, 190);
    JEScargarTextoMensaje();
    JESlistenerMensaje();
    JESmensajeIn();
};

//Carga los textos de los mensajes
function JEScargarTextoMensaje() {
    Display.get(JESventanaMensaje).stop(JESestadoJuego);
    //Display.get(ventanaMensajeLS + ".btnCerrar").stop(estadoJuegoLS);
    var textoMensajeJES = JESmensajes[JESestadoJuego];
    //permite identificar si es un archivo HTML o si es un string.
    if (textoMensajeJES.indexOf("textos/") !== -1) {
        $.ajax({
            url: textoMensajeJES + ".html",
            success: function (archivo) {
                Text.load(JESventanaMensaje, archivo);
            }
        });
    } else {
        Text.load(JESventanaMensaje, textoMensajeJES, "middle center size24 bold");
    }
};

function JESlistenerMensaje() {
    if (JESestadoJuego == "perdio") {
        Sound.play("media/mensajes/perdio");
        Event.click(JESventanaMensaje + ".cerrar", JEScerrarMensaje);
        Button.over(JESventanaMensaje + ".cerrar", true);
    } else {
        Sound.play("media/mensajes/gano");
        Event.click(JESventanaMensaje + ".cerrar", JEScerrarMensaje);
        Button.over(JESventanaMensaje + ".cerrar", true);
    }
};

function JESmensajeIn() {
    TweenMax.from(JESventanaMensaje, 0.5, {
        scaleX: 0,
        scaleY: 0,
        alpha: 0
    });
    TweenMax.from(JESventanaModal, 1, {
        alpha: 0
    });
};


function JESmensajeOut() {
    TweenMax.to(JESventanaMensaje, 0.5, {
        alpha: 0,
        onComplete: JESeliminarMensaje
    });
    TweenMax.to(JESventanaModal, 1, {
        alpha: 0
    });
};

function JESeliminarMensaje() {
    Display.removeChild(JESventanaMensaje);
    Display.removeChild(JESventanaModal);
    finalJuegoTotal = true;
    funcionAnimarFlecha();
    JESContadorGlobal = [];
    JESbuenas = 0;
    JESContadorInputs = 0;
    JESContadorActividades = [];
    for (var i = 0; i < JESValues.length; ++i) {
        document.getElementById(JESIdinputs[i]).setAttribute("readonly", "true");
    }
    Display.get(JESBotonVerificar).hide();
    Event.removeClick(JESBotonVerificar, JESvarificarJuego);
    //console.log(".....JESeliminarMensaje");
};

function JESResetVaribles() {
    //console.log("entra aca");
    JESContadorGlobal = [];
    JESbuenas = 0;
    JESContadorInputs = 0;
    JESContadorActividades = [];
    JESCantidadActividades = 0;
}

function JEScerrarMensaje() {
    Event.removeClick(JESventanaMensaje + ".cerrar", JEScerrarMensaje);
    JESmensajeOut();
};

function JEScerrarMensajePerdio() {
    TweenMax.to(JESventanaMensaje, 0.5, {
        alpha: 0
    });
    TweenMax.to(JESventanaModal, 1, {
        alpha: 0
    });
    Timer.load(0.6, JESfinalJuego);
};

function JESfinalJuego() {
    JESeliminarMensaje();
};