/**********************************************************************************/
/**********************************************************************************/
/************************** Juego Colision 1 a 1 *********************************/
function JCUnoaUno() {
    Elementos1 = Display.addChildArray(ElementoArrastrar, "Stage", Textos.length);
    Text.load(Elementos1, Textos, "middle center");
    Elementos2 = Display.addChildArray(ElementoObjetivo, "Stage", Textos.length);
    Temporal1 = Elementos1;
    Temporal1 = Arrays.random(Temporal1);
    Display.positionArray(Temporal1, PosicionInicialX, PosicionInicialY, "y", 1);
    Temporal2 = Elementos2;

    Display.addChildArray(Temporal2);
    for (var f = 0; f < Temporal2.length; f++) {
        Display.position(Temporal2[f], PosicionesElementosX[f], PosicionesElementosY[f]);
    }
    //Display.positionArray(Elementos2, 0, 0, "y", 2);
    Collision.load(Elementos1, Elementos2);
    Collision.stateCollision(juegoColisionEstadoDeColision);
    Collision.finish(final);
    //juegoColisionUnoaUnoMostrarIntentos();
    JCUnoaUnoAnimacionIn();
}

function juegoColisionEstadoDeColision(colisionMala) {
    ////console.log("colsionmala", colisionMala);

    if (!colisionMala) {
        conadormalas++;
        ////console.log(conadormalas);
    } else {

    }
}

function final(resultado) {
    ////console.log(conadormalas, "/", cantidadPuntos);
    if (conadormalas > cantidadPuntos) {
        juegoColisionUnoaUnoEstadoJuego = "perdio";
        Sound.play("media/mensajes/perdio");
        juegoColisionUnoaUnoCargarMensaje();
        //JCUnContadorActividades++;
        VerificarJuegoArrastrarysoltar();
    } else {
        juegoColisionUnoaUnoEstadoJuego = "gano";
        Sound.play("media/mensajes/gano");
        //JCUnContadorActividades++;
        VerificarJuegoArrastrarysoltar();
        juegoColisionUnoaUnoCargarMensaje();
    }
}

function VerificarJuegoArrastrarysoltar() {
    var contador = 0;
    JCUnContadorActividades[JCUnPosicionArray] = "true";
    ////console.log(JCUnContadorActividades);
    for (var i = 0; i < JCUnContadorActividades.length; i++) {
        if (JCUnContadorActividades[i] == "true") {
            contador++;
        }
    }
    ////console.log(contador);
    //console.log(JCUnCantidadActividades);
    if (contador == JCUnCantidadActividades) {
        if (PosicionFinalPresentacion) {
            PosicionFinalPresentacion = false;
            juegoColisionUnoaUnoCargarMensaje();
        }
    }
}



function juegoColisionUnoaUnoMostrarIntentos() {
    if (juegoColisionUnoaUnoIntentos >= 0) {
        Text.load("contenido5.Intentos", juegoColisionUnoaUnoIntentos, "middle center size24");
    }
}

function juegoColisionUnoaUnoCargarMensaje() {
    Display.addChild("modal");
    Display.position("modal", 0, 0);
    Display.addChild("mensaje");
    Display.position("mensaje", 209, 190);
    juegoColisionUnoaUnoCargarTextoMensaje();
    juegoColisionUnoaUnoListenerMensaje();
    juegoColisionUnoaUnoMensajeIn();
}


function juegoColisionUnoaUnoListenerMensaje() {
    Event.click("mensaje.cerrar", juegoColisionUnoaUnoCerrarMensaje);
    Button.over("mensaje.cerrar");
}

function juegoColisionUnoaUnoCerrarMensaje() {
    Event.removeClick("mensaje.cerrar", juegoColisionUnoaUnoCerrarMensaje);
    Display.removeChild("mensaje");
    Display.removeChild("modal");
    finalJuegoTotal = true;
    funcionAnimarFlecha();
    JCUnContadorActividades = [];
    conadormalas = 0;
    JCUnCantidadActividades = 2;
    ////console.log("entra a juegoColisionUnoaUnoCerrarMensaje");
}

function juegoColisionUnoaUnoCargarTextoMensaje() {
    Display.get("mensaje").stop(juegoColisionUnoaUnoEstadoJuego);
    var textoMensaje = juegoColisionUnoaUnoMensajes[juegoColisionUnoaUnoEstadoJuego];
    if (textoMensaje.indexOf("textos/") !== -1) {
        $.ajax({
            url: textoMensaje + ".html",
            success: function (archivo) {
                Text.load("colisionMensaje", archivo);
            }
        });
    } else {
        Text.load("mensaje", textoMensaje, "middle center size24 bold");
    }
}

function juegoColisionUnoaUnoMensajeIn() {
    TweenMax.from("mensaje", 0.5, {
        scaleX: 0,
        scaleY: 0,
        alpha: 0,
        ease: Cubic.easeOut
    });
    TweenMax.from("modal", 0.5, {
        alpha: 0
        //onComplete: juegoColisionEliminarMensaje
    });
}

function juegoColisionUnoaUnoMensajeOut() {
    TweenMax.to("mensaje", 0.5, {
        alpha: 0
        //onComplete: juegoColisionEliminarMensaje
    });
    TweenMax.to("modal", 0.5, {
        alpha: 0
        //onComplete: juegoColisionEliminarMensaje
    });

}

function juegoColisionCerrarMensaje() {
    Event.removeClick("mensaje.cerrar", juegoColisionCerrarMensaje);
    juegoColisionUnoaUnoMensajeOut();
    Timer.load(0.6, fin);
}



function removeJuegoColisionUnoaUno() {
    PosicionFinalPresentacion = false;
    JPAudioRemoverElemento();
    if (JPEstadoActivoActividad3) {
        JPEstadoActivoActividad3 = false;
        Display.removeChild(JPContenedorPrincipalActividad3);
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
        if (Temporal2.length != 0) {
            for (var f = 0; f < Temporal2.length; f++) {
                Display.removeChild(Temporal2[f]);
                Display.removeChild(Temporal1[f]);
            }
        }
        //Collision.remove();
    }
    if (estadoJuego1UnoaUno == true) {
        estadoJuego1UnoaUno = false;
        if (Temporal2.length != 0) {
            for (var f = 0; f < Temporal2.length; f++) {
                Display.removeChild(Temporal2[f]);
                Display.removeChild(Temporal1[f]);
            }
        }
        //Collision.remove();
    }
    if (estadoJuego4UnoaUno == true) {
        estadoJuego4UnoaUno = false;
        if (Temporal2.length != 0) {
            for (var f = 0; f < Temporal2.length; f++) {
                Display.removeChild(Temporal2[f]);
                Display.removeChild(Temporal1[f]);
            }
        }
        //Collision.remove();
    }
    //---------------------------------
    if (estadoJuego1bUnomuchos == true) {
        if (Temporal2.length != 0) {
            for (var f = 0; f < Temporal2.length; f++) {
                Display.removeChild(Temporal2[f]);
                Display.removeChild(Temporal1[f]);
            }
        }

        //Collision.remove();
    }

    if (estadoJuego11bUnomuchos == true) {
        if (Temporal2.length != 0) {
            for (var f = 0; f < Temporal2.length; f++) {
                Display.removeChild(Temporal2[f]);
                Display.removeChild(Temporal1[f]);
            }
        }
        //Collision.remove();
    }

}

/*------------------------Actividad arrastrar y soltar boton 1 submenu3-------------------------*/
function JCUnoaUnoActividad1() {
    Options.positionArray({
        distanciaEntreElementos: 0.2
    });
    Elementos1 = Display.addChildArray(ElementoArrastrar, "Stage", Textos1.length);
    Elementos2 = Display.addChildArray(ElementoObjetivo, "Stage", Textos1.length);
    Temporal1 = Elementos1;
    Temporal2 = Elementos2;
    Text.load(Temporal1, Textos1, "middle center");
    Text.load(Temporal2, Textos2, "middle center size16");
    Temporal1 = Arrays.random(Temporal1);
    Display.positionArray(Temporal1, 110, 210, "x", 1);
    Display.positionArray(Temporal2, 530, 210, "x", 1);
    Collision.load(Elementos1, Elementos2);
    Collision.stateCollision(juegoColisionEstadoDeColisionA1);
    Collision.finish(finalA1);
    JCUnoaUnoAnimacionIn();
}

function JCUnoaUnoAnimacionIn() {

    for (var xd = 0; xd < Temporal1.length; xd++) {
        TweenMax.from(Temporal1[xd], 0.9, {
            scaleX: 0,
            scaleY: 0,
            alpha: 0,
            ease: Cubic.easeOut
        });
    }
    for (var xd = 0; xd < Temporal2.length; xd++) {
        TweenMax.from(Temporal2[xd], 0.9, {
            scaleX: 0,
            scaleY: 0,
            alpha: 0,
            ease: Cubic.easeOut
        });
    }
}

function JCUnoaUnoAnimacionOut() {
    for (var xd = 0; xd < Temporal1.length; xd++) {
        TweenMax.to(Temporal1[xd], 0.5, {
            scaleX: 0,
            scaleY: 0,
            alpha: 0
        });
    }
    for (var xd = 0; xd < Temporal2.length; xd++) {
        TweenMax.to(Temporal2[xd], 0.5, {
            scaleX: 0,
            scaleY: 0,
            alpha: 0
        });
    }
}

function juegoColisionEstadoDeColisionA1(colisionMala) {
    if (!colisionMala) {
        conadormalas++;
        ////console.log(conadormalas);
    } else {}

}

function finalA1(resultado) {
    if (conadormalas > cantidadPuntos) {
        juegoColisionUnoaUnoEstadoJuego = "perdio";
        
        verificarA1();
    } else {
        juegoColisionUnoaUnoEstadoJuego = "gano";
        
        verificarA1();
    }

}

function verificarA1() {
    var contador = 0;
    JCUnContadorActividades[JCUnPosicionArray] = "true";
    ////console.log(JCUnContadorActividades);
    for (var i = 0; i < JCUnContadorActividades.length; i++) {
        if (JCUnContadorActividades[i] == "true") {
            contador++;
        }
    }
    ////console.log(contador);
    ////console.log(JCUnCantidadActividades);
    if (contador == JCUnCantidadActividades) {
        if (PosicionFinalPresentacion) {
            PosicionFinalPresentacion = false;
            juegoColisionA1CargarMensaje();
        }
    }
}


function juegoColisionA1CargarMensaje() {
    Display.addChild("modal");
    Display.position("modal", 0, 5);
    Display.addChild("mensaje");
    Display.position("mensaje", 209, 190);
    juegoColisionUnoaUnoA1CargarTextoMensaje();
    juegoColisionUnoaUnoA1ListenerMensaje();
    juegoColisionUnoaUnoA1MensajeIn();
}


function juegoColisionUnoaUnoA1ListenerMensaje() {
    Event.click("mensaje.cerrar", juegoColisionUnoaUnoA1CerrarMensaje);
    Button.over("mensaje.cerrar");
}

function juegoColisionUnoaUnoA1CerrarMensaje() {
    Event.removeClick("mensaje.cerrar", juegoColisionUnoaUnoA1CerrarMensaje);
    Display.removeChild("mensaje");
    Display.removeChild("modal");
    finalJuegoTotal = true;
    funcionAnimarFlecha();
    JCUnContadorActividades = [];
    conadormalas = 0;
    JCUnCantidadActividades = 2;
    ////console.log("entra a", juegoColisionUnoaUnoA1CerrarMensaje);
}

function ResetjuegoColisionUnoaUnoA1() {
    JCUnContadorActividades = [];
    conadormalas = 0;
    JCUnCantidadActividades = 2;
}

function juegoColisionUnoaUnoA1CargarTextoMensaje() {
    Display.get("mensaje").stop(juegoColisionUnoaUnoEstadoJuego);
    var textoMensaje = juegoColisionUnoaUnoMensajes[juegoColisionUnoaUnoEstadoJuego];
    Sound.play("media/mensajes/"+juegoColisionUnoaUnoEstadoJuego);
    if (textoMensaje.indexOf("textos/") !== -1) {
        $.ajax({
            url: textoMensaje + ".html",
            success: function (archivo) {
                Text.load("colisionMensaje", archivo);
            }
        });
    } else {
        Text.load("mensaje", textoMensaje, "middle center size24 bold");
    }
}

function juegoColisionUnoaUnoA1MensajeIn() {
    TweenMax.from("mensaje", 0.5, {
        scaleX: 0,
        scaleY: 0,
        alpha: 0
    });
    TweenMax.from("modal", 0.5, {
        alpha: 0
    });
}

function juegoColisionUnoaUnoA1MensajeOut() {
    TweenMax.to("mensaje", 0.5, {
        alpha: 0
    });
    TweenMax.to("modal", 0.5, {
        alpha: 0
    });
}

function juegoColisionCerrarA1Mensaje() {
    juegoColisionMensajeOut();
    Timer.load(0.6, fin);
}

//--------------------------------------------------------------

/********************* JUEGO ARRASTRAR Y SOLTAR DE MUCHOS A MUCHOS *******************/
function juegoColisionCargar() {
    UpNivelMenu();
    //juegoColisionContadorActividades++;
    estadoColisionFinal = true;
    juegoColisionReiniciar();
    juegoColisionConfigurar();
    juegoColisionCargarElementos();
    juegoColisionIniciar();
}

function juegoColisionReiniciar() {
    juegoColisionElementosColision = [];
    juegoColisionElementosMover = [];
    juegoColisionIntentos = 1;
    var juegoColisionEstadoJuego = "perdio";
}

function juegoColisionConfigurar() {
    Options.positionArray({
        distanciaEntreElementos: 3
    });
}

function juegoColisionCargarElementos() {
    //Display.addChild("preguntas1Intentos");
    for (var c = 0; c < ElementosColision.length; c++) {
        Display.addChild(ElementosColision[c]);
        Display.position(ElementosColision[c], PosicionesElementosX1[c], PosicionesElementosY1[c]);
        if (Display.get(Display.getName(ElementosColision[c]) + ".BtnPlay" + c)) {
            Button.over(Display.getName(ElementosColision[c]) + ".BtnPlay" + c, true);
            elementosBotones.push(Display.getName(ElementosColision[c]) + ".BtnPlay" + c);
            //Event.click(Display.getName(ElementosColision[c]) + ".BtnPlay" + c, PlayAudios);
        }
    }
    //Display.position("preguntas1Intentos", 803, 520);
    //juegoColisionElementosColision = Display.addChildArray("colisionColision", "Stage", 3);

    juegoColisionElementosMover = Display.addChildArray(ElementosArrastrar, "Stage", juegoColisionTextosMover.length);
    juegoColisionCargarTextos();
    juegoColisionAnimacionIn();
}




function juegoColisionEliminarElementos() {
    //Display.removeChildArray(juegoColisionElementosColision);
    Display.removeChildArray(juegoColisionElementosMover);
    //Display.removeChild("colisionVentana");
}

function juegoColisionCargarTextos() {
    //Comentar la linea que no necesite carga de textos juegoColisionComentarTextos
    //Text.load(juegoColisionElementosColision, juegoColisionTextosColision, "middle center");
    Text.load(juegoColisionElementosMover, juegoColisionTextosMover, "middle center size14");
}

function juegoColisionCargarFotogramas() {
    /*for (var numeroElemento = 0; numeroElemento < juegoColisionElementosMover.length; numeroElemento++) {
        juegoColisionElementosMover[numeroElemento].stop(1000 * numeroElemento);
    }
    for (var numeroColision = 0; numeroColision < juegoColisionElementosColision.length; numeroColision++) {
        juegoColisionElementosColision[numeroColision].stop(1000 * numeroColision);
    }*/
}

function juegoColisionAnimacionIn() {
    /*TweenMax.from("colisionVentana", 1, {
        scaleX: 0,
        scaleY: 0,
        alpha: 0,
        ease: Cubic.easeOut
    });*/
    /*TweenMax.allFrom(juegoColisionElementosColision, 1, {
        scaleX: 1.2,
        scaleY: 1.2,
        alpha: 0,
        ease: Cubic.easeOut
    });*/
    TweenMax.allFrom(juegoColisionElementosMover, 1, {
        scaleX: 1.2,
        scaleY: 1.2,
        alpha: 0,
        ease: Cubic.easeOut
    });
}

function juegoColisionAnimacionOut() {
    /*TweenMax.allTo(juegoColisionElementosColision, 0.5, {
        alpha: 0,
        ease: Cubic.easeOut,
        onComplete: juegoColisionEliminarElementos
    });*/
    TweenMax.allTo(juegoColisionElementosMover, 0.5, {
        alpha: 0,
        ease: Cubic.easeOut
    });
    /*TweenMax.to("colisionVentana", 1, {
        scaleX: 0,
        scaleY: 0,
        alpha: 0,
        ease: Cubic.easeOut
    });*/
}

function juegoColisionIniciar() {
    Collision.load(juegoColisionElementosMover, ElementosColision, juegoColisionElementosCorrectos);
    //Collision.load(juegoColisionElementosMover, juegoColisionElementosColision);
    Collision.finish(juegoColisionFinJuego);
    Collision.stateCollision(juegoColisionEstadoDeColisionMaM);
    juegoColisionDesordenarElementos();
    //Display.positionArray(juegoColisionElementosColision, 660, 148, "y", 4);
    if (juegoColisionElementosMover.length >= 14 || juegoColisionElementosMover.length >= 12) {
        Display.positionArray(juegoColisionElementosMover, PosicionesInicialElementosX1, PosicionesInicialElementosY1, "y", 3);
    } else {
        Display.positionArray(juegoColisionElementosMover, PosicionesInicialElementosX2, PosicionesInicialElementosY2, "y", 2);
    }
   
    if (Display.get("subMenu4")) {
        Display.zIndex("subMenu4");
    }
    //Display.position(colisionVentana, 18, 79);
    Display.get(juegoColisionContenedorIntentos).hide();
    unionArray()
}

function juegoColisionEstadoDeColisionMaM(OPcolisionMala) {
    if (!OPcolisionMala) {
        //mostrarMensajeMal();
        conadormalas++;
        ////console.log(conadormalas);
    } else {

    }
}

function juegoColisionFinJuego(gano) {
    if (conadormalas > cantidadPuntos) {
        juegoColisionEstadoJuego = "perdio";
        verificarJuegoColisionMuchosaMuchos();
    } else {
        juegoColisionEstadoJuego = "gano";
        verificarJuegoColisionMuchosaMuchos();
    }

    //Timer.load(2, juegoColisionAnimacionOut);
    //juegoColisionCargarMensaje();
}

function verificarJuegoColisionMuchosaMuchos() {
    ////console.log("!", juegoColisionContadorActividades);
    ////console.log("&", juegoColisionCantidadActividades);
    juegoColisionContadorActividades[PosicionArrayJuegoMaM] = "true";

    var contador = 0;
    ////console.log(juegoColisionContadorActividades);
    for (var i = 0; i < juegoColisionContadorActividades.length; i++) {
        if (juegoColisionContadorActividades[i] == "true") {
            contador++;
        }
    }
    ////console.log(contador);
    ////console.log(juegoColisionCantidadActividades);
    if (contador == juegoColisionCantidadActividades) {
        console.log(PosicionFinalPresentacion);
        if (PosicionFinalPresentacion) {
            PosicionFinalPresentacion = false;
            juegoColisionCargarMensaje();
        }
    }
}

function juegoColisionDesordenarElementos() {
    //comentar para no desernear los elementos
    //juegoColisionElementosColision = Arrays.random(juegoColisionElementosColision);
     if (ElementosArrastrar == "mcRecuadroPronun") {
        for (var d = 0; d < juegoColisionElementosMover.length; d++) {
            var nuevoboton = "BtnPlay";
            var nuevoElemento = Display.addChild(nuevoboton, juegoColisionElementosMover[d]);
            elementosBotones2.push(nuevoElemento);
            Display.position(nuevoElemento, 107, 10);
            Button.over(elementosBotones, true);
            //Event.click(nuevoElemento, JuegoColisionPlay);
        }
    }
    juegoColisionElementosMover = Arrays.random(juegoColisionElementosMover);
}

function RestaurarJuegoColisionMuchosaMuchos() {
    juegoColisionCantidadActividades = 0;
    juegoColisionContadorActividades = [];
    conadormalas = 0;
}

function juegoColisionCargarMensaje() {
    Display.addChild("modal");
    Display.position("modal", 0, 0);
    Display.addChild("mensaje");
    Display.position("mensaje", 209, 190);
    juegoColisionCargarTextoMensaje();
    juegoColisionListenerMensaje();
    juegoColisionMensajeIn();
}



function juegoColisionListenerMensaje() {
    Event.click("mensaje.cerrar", juegoColisionCerrarMensaje);
    Button.over("mensaje.cerrar");
}

function juegoColisionCargarTextoMensaje() {
    Display.get("mensaje").stop(juegoColisionEstadoJuego);
    var textoMensaje = juegoColisionMensajes[juegoColisionEstadoJuego];
    Sound.play("media/mensajes/"+juegoColisionEstadoJuego);
    if (textoMensaje.indexOf("textos/") !== -1) {
        $.ajax({
            url: textoMensaje + ".html",
            success: function (archivo) {
                Text.load("colisionMensaje", archivo);
            }
        });
    } else {
        Text.load("mensaje", textoMensaje, "middle center size24 bold");
    }
}

function juegoColisionMensajeIn() {
    TweenMax.from("mensaje", 0.5, {
        scaleX: 0,
        scaleY: 0,
        alpha: 0,
        ease: Cubic.easeOut
    });
    TweenMax.from("modal", 0.5, {
        alpha: 0
    });
}

function juegoColisionMensajeOut() {
    TweenMax.to("mensaje", 0.5, {
        alpha: 0,
        onComplete: juegoColisionEliminarMensaje
    });
    TweenMax.to("modal", 0.5, {
        alpha: 0
    });
}

function juegoColisionEliminarMensaje() {
    Display.removeChild("mensaje");
    Display.removeChild("modal");
    ////console.log("entra a", juegoColisionEliminarMensaje);
    finalJuegoTotal = true;
    funcionAnimarFlecha();
    juegoColisionCantidadActividades = 0;
    juegoColisionContadorActividades = [];
    conadormalas = 0;
}

function juegoColisionCerrarMensaje() {
    juegoColisionMensajeOut();
    Timer.load(0.6, fin);
}

function fin() {

    var contador;
    var limite = ElementosColision.length;
    for (contador = 0; contador < limite; contador++) {
        //Display.removeChild(ElementosColision[contador]);
    }
}

function removeJuegoColision() {
    //PosicionFinalPresentacion = false;
    UpNivelMenu();
    Display.get(juegoColisionContenedorIntentos).hide();
    if (ElementosColision != undefined || ElementosColision.length != 0) {
        var contador;
        var limite = ElementosColision.length;
        for (contador = 0; contador < limite; contador++) {
            Display.removeChild(ElementosColision[contador]);
        }
        if (juegoColisionElementosMover.length > 0) {
            var contador2;
            var limite2 = juegoColisionElementosMover.length;
            for (contador2 = 0; contador2 < limite2; contador2++) {
                Display.removeChild(juegoColisionElementosMover[contador2]);
            }
        }
    }
}

function unionArray() {
    elementosBotonesTotal = elementosBotones.concat(elementosBotones2);

    PlayAudios();
}

function PlayAudios() {
    console.log(elementosBotonesTotal.length);
    Sound.playButtons(elementosBotonesTotal, JASArrayAudios);
}