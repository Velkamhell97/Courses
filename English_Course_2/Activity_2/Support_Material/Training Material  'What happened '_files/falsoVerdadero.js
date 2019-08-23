function JuegoFVCargar() {
    JuegoFVReiniciar();
    JuegoFVOpciones();
    JuegoFVCargarElementos();
    estadoFuegoFv = true;
    estadoFuegoFv2 = true;
};

function JuegoFVReiniciar() {
    JuegoFVMensajesCargados = JuegoFVMensajes;
    JuegoFVJuegoTermino = false;
    JuegoFVIntentos = JuegoFVIntentosMalos;
};

function JuegoFVOpciones() {
    Options.positionArray({
        distanciaEntreElementos: conprensionDistanciaCheck
    });
};

function JuegoFVCargarElementos() {
    //Display.addChild(JuegoFVFondo);
    //Display.addChild(JuegoFVVentana);
    //Display.position(JuegoFVVentana, JuegoFVPosicionVentana.x, JuegoFVPosicionVentana.y);
    if (Display.get(JuegoFVBotonVerificar)) {
        Display.removeChild(JuegoFVBotonVerificar);
        Display.addChild(JuegoFVBotonVerificar);
        Display.position(JuegoFVBotonVerificar, JuegoFVPosicionVerificar.x, JuegoFVPosicionVerificar.y);
        //Display.get(JuegoFVBotonVerificar).hide();
    } else {
        Display.addChild(JuegoFVBotonVerificar);
        Display.position(JuegoFVBotonVerificar, JuegoFVPosicionVerificar.x, JuegoFVPosicionVerificar.y);
        //Display.get(JuegoFVBotonVerificar).hide();
    }
    JuegoFVMostrarIntentos();
    JuegoFVCargarTextoPregunta();
    JuegoFVAlmacenarBotones();
    JuegoFVPosicionarBotones();
    JuegoFVEstadoNormalBotones();
    JuegoFVOcultarSelecciones();
    JuegoFVListenerBotones();
    JuegoFVVerificarDesactivar();
    JuegoFVAnimacionIn();
};

function JuegoFVEliminarElementos() {
    //Display.removeChild(JuegoFVVentana);
    /*Display.get(JuegoFVBotonContinuar).show();
	Button.over(JuegoFVBotonContinuar, true);
	Display.zIndex(JuegoFVBotonContinuar);
	Event.click(JuegoFVBotonContinuar, JuegoFVActividad2);*/
    finalJuegoTotal = true;
    funcionAnimarFlecha();
    JuegoFvEstadoContadorGlobal = [];
    JuegoFvEstadoContadorActividades = 2;
    JuegoFvEstadoCantidadActividades = [];
    JuegoFVIntentosBuenos = 0;
    JuegoFVIntentosMalos = 0;
    Display.removeChild(JuegoFVBotonVerificar);
};

function JuegoFVMostrarIntentos() {
    Text.load(JuegoFvContenedorIntentos, JuegoFVIntentos2, "middle center size24");
}

function JuegoFVCargarTextoPregunta() {
    //Text.load(JuegoFVVentana, JuegoFVTextoPregunta);
    //Presentation.load("mcBienvenida", "mcBienvenida.ventana.botonAtras", "mcBienvenida.ventana.botonAdelante", "ventana.ventanaIntro.paginacion");
    //Presentation.folderText(JuegoFVTextoPregunta[refPagina], 1);
    //Text.load(JuegoFVVentana, "Textos/contenido3/FalsoVerdadero");
}

function JuegoFVAlmacenarBotones() {
    JuegoFVBotones = Display.addChildArray(JuegoFVCheck, "Stage", JuegoFVRespuestasCorrectas.length * 2);
};

function JuegoFVPosicionarBotones() {
    Display.positionArray(JuegoFVBotones, JuegoFVPosicionCheck.x + 10, JuegoFVPosicionCheck.y, "x", 2);
};

function JuegoFVEstadoNormalBotones() {
    for (var i = 0; i < JuegoFVBotones.length; i++) {
        var botonActual = JuegoFVBotones[i];
        botonActual.stop("normal");
    }
};

function JuegoFVOcultarSelecciones() {
    for (var i = 0; i < JuegoFVBotones.length; i++) {
        var botonActual = JuegoFVBotones[i];
        Display.get(botonActual.getName(true) + ".seleccion").hide();
    }
};

function JuegoFVListenerBotones() {
    Event.click(JuegoFVBotones, JuegoFVBotonesPresionado);
    Button.over(JuegoFVBotones);
};

function JuegoFVRemoveListenerBotones() {
    Event.removeClick(JuegoFVBotones, JuegoFVBotonesPresionado);
    Button.over(JuegoFVBotones, false);
};

function JuegoFVBotonesPresionado(boton) {
    //se le agrega un dijito de mas por que el array inicia en 0
    posicionArray = Arrays.indexOf(JuegoFVBotones, boton) + 1;
    var posicionArrayContario = posicionArray;
    if (posicionArray % 2 === 0) {
        posicionArrayContario = posicionArray - 2;
    }
    var botonContrario = JuegoFVBotones[posicionArrayContario];
    Display.get(boton.getName(true) + ".seleccion").show();
    Display.get(botonContrario.getName(true) + ".seleccion").hide();
    JuegoFVCantidadSelecciones();
};

function JuegoFVCantidadSelecciones() {
    var cantidadSelecciones = 0;
    for (var i = 0; i < JuegoFVBotones.length; i++) {
        var botonActual = JuegoFVBotones[i];
        if (Display.get(botonActual.getName(true) + ".seleccion").is(":visible")) {
            cantidadSelecciones += 1;
        }
    }
    if (cantidadSelecciones >= JuegoFVBotones.length / 2 && !JuegoFVJuegoTermino) {
        JuegoFVVerificarActivar();
    }
};

function JuegoFVVerificarActivar() {
    Display.get(JuegoFVBotonVerificar).css({
        "opacity": 1,
    });
    //Display.get(JuegoFVBotonVerificar).stop("activo");
    Display.get(JuegoFVBotonVerificar).show();
    Button.over(JuegoFVBotonVerificar, true);
    Event.click(JuegoFVBotonVerificar, JuegoFVAlmacenarRespuestas);
};

function JuegoFVVerificarDesactivar() {
    Display.get(JuegoFVBotonVerificar).css({
        "opacity": 0,
    });
    Event.removeClick(JuegoFVBotonVerificar, JuegoFVAlmacenarRespuestas);
    Button.over(JuegoFVBotonVerificar, false);
};

function JuegoFVAlmacenarRespuestas() {
    JuegoFVVerificarDesactivar();
    JuegoFVEstadoNormalBotones();
    JuegoFVOpcionesSeleccionadas = [];
    arrayVisibles = [];
    for (var i = 0; i < JuegoFVBotones.length; i++) {
        var botonActual = JuegoFVBotones[i];
        if (Display.get(botonActual.getName(true) + ".seleccion").is(":visible")) {

            arrayVisibles.push(i);

            if (i % 2 === 0) {
                JuegoFVOpcionesSeleccionadas.push(true);
            } else {
                JuegoFVOpcionesSeleccionadas.push(false);
            }
        }
    }
    JuegoFVVerificar();
};


function JuegoFVVerificar() {
    JuegoFVResultado = "bien";
    JuegoFVIntentosBuenos = 0;
    JuegoFVIntentosMalos = 0;
    for (var i = 0; i < JuegoFVRespuestasCorrectas.length; i++) {
        if (JuegoFVRespuestasCorrectas[i] === JuegoFVOpcionesSeleccionadas[i]) {
            JuegoFVBotones[arrayVisibles[i]].stop("bien");
            if (arrayVisibles[i] === 8) {
                Event.removeClick(JuegoFVBotones[arrayVisibles[i]], JuegoFVBotonesPresionado);
                Event.removeClick(JuegoFVBotones[arrayVisibles[i] + 1], JuegoFVBotonesPresionado);
            } else {
                Event.removeClick(JuegoFVBotones[arrayVisibles[i]], JuegoFVBotonesPresionado);
                Event.removeClick(JuegoFVBotones[arrayVisibles[i] - 1], JuegoFVBotonesPresionado);
            }
            JuegoFVIntentosBuenos++;
        } else {
            //JuegoFVIntentos -= 1;
            JuegoFVIntentosMalos++;
            JuegoFVResultado = "mal";
            JuegoFVBotones[arrayVisibles[i]].stop("mal");
            Event.removeClick(JuegoFVBotones[arrayVisibles[i]], JuegoFVBotonesPresionado);
            Event.removeClick(JuegoFVBotones[arrayVisibles[i] - 1], JuegoFVBotonesPresionado);
        }
    }
    JuegoFvEstadoContadorGlobal.push(JuegoFVIntentosBuenos);
    JuegoFVVerificarDesactivar();
    JuegoFVVerificarFinJuego();
};

function JuegoFVVerificarFinJuego() {
    var contador = 0;
    JuegoFvEstadoCantidadActividades[JuegoFvPosicionArray] = "true";
    for (var i = 0; i < JuegoFvEstadoCantidadActividades.length; i++) {
        if (JuegoFvEstadoCantidadActividades[i] == "true") {
            contador++;
        }
    }
    if (contador == JuegoFvEstadoContadorActividades) {
        var resultado1 = 0;
        for (var j = 0; j < JuegoFvEstadoContadorGlobal.length; j++) {
            resultado1 += JuegoFvEstadoContadorGlobal[j];
        }
        if (Math.round((9 % 2) == 1)) {
            if (resultado1 >= Math.round((9 / 2) + 1)) {
                JuegoFVResultado = "excelente";
                Sound.play("media/mensajes/gano");
            } else {
                JuegoFVResultado = "perdio";
                Sound.play("media/mensajes/perdio");
            }
            if (PosicionFinalPresentacion) {
                PosicionFinalPresentacion = false;
                JuegoFVCargarMensaje();
                JuegoFVCargarTextoMensaje();
            }
        }
    }
};

function JuegoFVCargarMensaje() {
    Display.addChild(JuegoFVModal);
    Display.addChild(JuegoFVMensaje);
    Display.position(JuegoFVMensaje, JuegoFVPosicionMensaje.x, JuegoFVPosicionMensaje.y);
    //JuegoFVVerificarFinJuego();
    JuegoFVMensajeIn();
    JuegoFVListenerMensaje();
};

function JuegoFVEliminarMensaje() {
    Display.removeChild(JuegoFVMensaje);
    Display.removeChild(JuegoFVModal);
    finalJuegoTotal = true;
    funcionAnimarFlecha();
    JuegoFvEstadoContadorGlobal = [];
    JuegoFvEstadoContadorActividades = 2;
    JuegoFvEstadoCantidadActividades = [];
    JuegoFVIntentosBuenos = 0;
    JuegoFVIntentosMalos = 0;
    ////console.log("!!!JESeliminarMensaje");
};

function resetVariablesFV() {
    JuegoFvEstadoContadorGlobal = [];
    JuegoFvEstadoContadorActividades = 2;
    JuegoFvEstadoCantidadActividades = [];
    JuegoFVIntentosBuenos = 0;
    JuegoFVIntentosMalos = 0;
}

function JuegoFVMensajeIn() {
    TweenMax.from(JuegoFVMensaje, 1, {
        scaleX: 0,
        scaleY: 0,
        ease: Cubic.easeOut
    });
    TweenMax.from(JuegoFVModal, 1, {
        alpha: 0
    });
    //Display.zIndex(JuegoFVMensaje);
};

function JuegoFVMensajeOut() {
    TweenMax.to(JuegoFVMensaje, 0.5, {
        scaleX: 0,
        scaleY: 0,
        ease: Cubic.easeIn,
        onComplete: JuegoFVEliminarMensaje
    });
    TweenMax.to(JuegoFVModal, 0.5, {
        alpha: 0
    });
};

function JuegoFVListenerMensaje() {
    Event.click(JuegoFVBotonCerrar, JuegoFVCerrarMensaje);
    Button.over(JuegoFVBotonCerrar);
};

function JuegoFVEliminarListenerMensaje() {
    Event.removeClick(JuegoFVBotonCerrar, JuegoFVCerrarMensaje);
    Button.over(JuegoFVBotonCerrar, false);
};

function JuegoFVCargarTextoMensaje() {
    Display.get(JuegoFVMensaje).stop(JuegoFVResultado);
    var mensaje = JuegoFVMensajesCargados[JuegoFVResultado];
    Text.load(JuegoFVMensaje, mensaje, "middle center size24 bold");
};

function JuegoFVCerrarMensaje() {
    if (JuegoFVResultado === "mal") {
        
        JuegoFVVerificarFinJuego();
        
    } else if (JuegoFVResultado === "bien") {
        
        JuegoFVVerificarFinJuego();
    } else {
        JuegoFVAnimacionOut();
        JuegoFVFinJuego();
    }
    JuegoFVEliminarListenerMensaje();
    JuegoFVMensajeOut();
};

function JuegoFVAnimacionIn() {
    /*TweenMax.from(JuegoFVVentana, 1, {
        scaleX: 0,
        scaleY: 0,
        alpha: 0,
        ease: Cubic.easeOut
    });*/
    TweenMax.from(JuegoFVBotonVerificar, 1, {
        scaleX: 0,
        scaleY: 0,
        delay: 0.5,
        alpha: 0,
        ease: Cubic.easeOut
    });
    TweenMax.allFrom(JuegoFVBotones, 1, {
        scaleX: 0,
        scaleY: 0,
        alpha: 0,
        delay: 1,
        ease: Back.easeOut
    });
};

function JuegoFVAnimacionOut() {
    /*TweenMax.allTo(JuegoFVBotones, 0.5, {
		scaleX: 0,
		scaleY: 0,
		alpha: 0,
		ease: Back.easeOut
	});*/
    TweenMax.to(JuegoFVVentana, 0.5, {
        scaleX: 0,
        scaleY: 0,
        alpha: 0,
        ease: Cubic.easeOut,
        onComplete: JuegoFVEliminarElementos
    });
    /*TweenMax.to(JuegoFVBotonVerificar, 0.5, {
		scaleX: 0,
		scaleY: 0,
		alpha: 0,
		ease: Cubic.easeOut,
		onComplete: JuegoFVEliminarElementos
	});*/
};

function JuegoFVFinJuego() {
    JuegoFVJuegoTermino = true;
    JuegoFVVerificarDesactivar();
    JuegoFVRemoveListenerBotones();
    JuegoFVFuncionFinal();
    finalJuegoTotal = true;
    funcionAnimarFlecha();
    JuegoFvEstadoContadorGlobal = [];
    JuegoFvEstadoContadorActividades = 2;
    JuegoFvEstadoCantidadActividades = [];
    JuegoFVIntentosBuenos = 0;
    JuegoFVIntentosMalos = 0;
};

function RemoverJuegoFV() {
    JuegoFVRemoveListenerBotones();
    /*TweenMax.to(JuegoFVBotones, 1, {
		scaleX: 0,
		scaleY: 0,
		alpha: 0,
		delay: 1,
		ease: Back.easeOut,
		onComplete:function(){

		}
	});*/
    if (JuegoFVBotones.length > 1) {
        Display.removeChildArray(JuegoFVBotones);
    }

};