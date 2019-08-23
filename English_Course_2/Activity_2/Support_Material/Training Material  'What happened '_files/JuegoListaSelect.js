//Carga el juego.
/*------------------ Actividad 1 Select Boton 4 --------- */
function JuegoListaSelectCargar() {

	if (JPAudioEstadoJuego) {
		JPAudioRemoverElemento();
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
	Display.get(JESBotonVerificar).hide();
	/*Presentation.load(contenedorJuegoLS, contenedorJuegoLS + ".ventana.botonAtras", contenedorJuegoLS + ".ventana.botonAdelante", contenedorJuegoLS + "ventana.paginacion");*/
	/*Presentation.folderText(rutaJuegoLS, cantidadSlideLS);*/
	mostrarIntentosLS();
};
/*------------------ Fin Actividad 1 Select Boton 4 --------- */

//Muestra los intentos.
function mostrarIntentosLS() {
	Text.load(contenedorIntentosLS, intentosLS, "middle center size24");
};

//Agrega la ventana de los mensajes y llama las demas funciones.
function cargarMensajeLS() {
	Display.addChild("modal");
	Display.position(ventanaMensajeLS, 0, 0);
	Display.addChild(ventanaMensajeLS);
	Display.position(ventanaMensajeLS, 209, 190);
	cargarTextoMensajeLS();
	listenerMensajeLS();
	mensajeInLS();
};

//Carga los textos de los mensajes
function cargarTextoMensajeLS() {
	Display.get(ventanaMensajeLS).stop(estadoJuegoLS);
	//Display.get(ventanaMensajeLS + ".btnCerrar").stop(estadoJuegoLS);
	var textoMensajeLS = mensajesLS[estadoJuegoLS];

	//permite identificar si es un archivo HTML o si es un string.
	if (textoMensajeLS.indexOf("textos/") !== -1) {
		$.ajax({
			url: textoMensajeLS + ".html",
			success: function (archivo) {
				Text.load(ventanaMensajeLS, archivo);
			}
		});
	} else {
		Text.load(ventanaMensajeLS, textoMensajeLS, "middle center size24");
	}
};

//agrega el listener al botón cerrar de los mensajes.
function listenerMensajeLS() {
	if (estadoJuegoLS == "perdio") {
        Sound.play("media/mensajes/perdio");
		Event.click(ventanaMensajeLS + ".cerrar", mensajeOutLS);
		Button.over(ventanaMensajeLS + ".cerrar", true);
        
	} else {
        Sound.play("media/mensajes/gano");
		Event.click(ventanaMensajeLS + ".cerrar", mensajeOutLS);
		Button.over(ventanaMensajeLS + ".cerrar", true);
        
	}
};

//Animacion de entrada de los mensajes.
function mensajeInLS() {
	TweenMax.from(ventanaMensajeLS, 0.5, {
		scaleX: 0,
		scaleY: 0,
		alpha: 0
	});
};

//Animacion de salida de los mensajes.
function mensajeOutLS() {
	//console.log("entra a mensajeOutLS");
	Event.removeClick(ventanaMensajeLS + ".cerrar", mensajeOutLS);
	TweenMax.to(ventanaMensajeLS, 0.5, {
		alpha: 0,
		onComplete: eliminarMensajeLS
	});
};

//remueve la ventana de los mensajes
function eliminarMensajeLS() {
	Display.removeChild(ventanaMensajeLS);
	Display.removeChild("modal");
	finalJuegoTotal = true;
	funcionAnimarFlecha();
	LSContadorGlobal = [];
	LSContadorActividades = [];
	LSCantidadActividades = 5;
	//console.log("eliminarMensajeLS");
};


//verifica los valores seleccionados y los almacena en "valores".
function verificarSelect() {
	seleccionLS = document.getElementById("formulario");
	valoresLS.length = 0;

	for (var i = 0; i < seleccionLS.length; ++i) {
		var child = seleccionLS[i];
		if (child[child.selectedIndex].value !== "") {
			valoresLS.push(child.value);
			if (valoresLS.length == seleccionLS.length) {
				LSactivarBtnVerificar();
			}
		}
	}
};

//activa el boton verificar.
function LSactivarBtnVerificar() {
	buenasLS = 0;
	Display.get(botonVerificarLS).show();
	Display.get(botonVerificarLS).stop("activo");
	Button.over(botonVerificarLS, true);
	Event.click(botonVerificarLS, varificarJuegoLS);
};

//desactivar el boton verificar.
function LSdescativarBtnVerificar() {
	Display.get(botonVerificarLS).hide();
	Display.get(botonVerificarLS).stop("activo");
	Button.over(botonVerificarLS, false);
	Event.removeClick(botonVerificarLS, varificarJuegoLS);
};

//verificasi el se contesto correcto o no.
function varificarJuegoLS() {
	var idformulario = document.getElementById("formulario");
	for (var i = 0; i < idformulario.length; ++i) {
		var child = idformulario[i];
		if (child.tagName == "SELECT") {
			for (var i = 0; i < valoresLS.length; ++i) {
				if (valoresLS[i] === "1") {
					document.getElementById("select" + i).setAttribute("disable", "true");
					document.getElementById("select" + i).disabled = true;
					document.getElementById("select" + i).className = "selectCorrecto";
					buenasLS++;
				} else {
					document.getElementById("select" + i).setAttribute("disable", "true");
					document.getElementById("select" + i).disabled = true;
					document.getElementById("select" + i).className = "selectIncorrecto"; //le asigna la sombra roja a los select.
				}
			}
		}
	}

	LSContadorGlobal[LSPosicionArray]=buenasLS;
	console.log(LSContadorGlobal);
	LSdescativarBtnVerificar();
	LSVerificar();
};

function LSVerificar() {
	LSContadorActividades[LSPosicionArray] = "true";
	var contador = 0;
	//console.log(LSContadorActividades);
	for (var i = 0; i < LSContadorActividades.length; i++) {
		if (LSContadorActividades[i] == "true") {
			contador++;
		}
	}
	if (contador == LSCantidadActividades) {
		var resultado = 0;
		for (var i = 0; i < LSContadorGlobal.length; i++) {
			resultado += LSContadorGlobal[i];
		}
		console.log(resultado);
		console.log(Math.round(15 % 2));
		if (Math.round((15 % 2) == 1)) {
			console.log(resultado);
			console.log(Math.round((15 / 2) + 1));
			if (resultado >= Math.round((15 / 2) + 1)) {
				estadoJuegoLS = "gano";
                Sound.play("media/mensajes/gano");
			} else {
				estadoJuegoLS = "perdio";
                Sound.play("media/mensajes/perdio");
			}
		}
		if (PosicionFinalPresentacion) {
			PosicionFinalPresentacion = false;
			cargarMensajeLS();
		}

	}
}

function JuegoLSreset() {
	LSContadorGlobal = [];
	LSContadorActividades = [];
	LSCantidadActividades = 5;
}
