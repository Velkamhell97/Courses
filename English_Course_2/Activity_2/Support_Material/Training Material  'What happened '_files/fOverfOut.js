/************** FUNCION OVER Y OUT DE LA BIENVENIDA **************/
function fOverNav(e) {
    var overbtnNav = Display.get("mcBienvenida.ventana.botonAdelante");
    overbtnNav.play("sobre");
}

function fOutNav(e) {
    var overbtnNav = Display.get("mcBienvenida.ventana.botonAdelante");
    overbtnNav.play("sobreOver");
}

/**************************** Funcion Over Menu Superior ***************************/
function asignarEventosBotones()
{
	Event.click(btnPrincipales, verificarMenu);
    Event.listener(btnPrincipales, "mouseOver", fOver);
    Event.listener(btnPrincipales, "mouseOut", fOut);
    Event.listener(btnPrincipales, "mouseDown", botonDown);
};

function fOver(e) {
    Event.removeListener(e, "mouseOver", fOver);
    e.play("sobre");

    var overAyuda = Display.get("menu." + e.getName() + "Ayuda");
    overAyuda.play("salir");
}

function fOut(e) {
    Event.listener(e, "mouseOver", fOver);
    Event.listener(btnPrincipales, "mouseDown", botonDown);
    e.play("sobreSalir");

    var outAyuda = Display.get("menu." + e.getName() + "Ayuda");
    outAyuda.play("sobreSalir");
}

function botonDown(e) {
    for (var j = 0; j < btnPrincipales.length; j++)
    {
        if ("menu." + "menuBoton" + j == "menu." + e.getName()) {
            Event.removeListener(e, "mouseOver", fOver);
            Event.removeListener(btnPrincipales, "mouseDown", botonDown);
        }
    }
    var icono = Display.get("menu." + e.getName() + ".icono");
    var btnPressed = Display.get("menu." + e.getName() + "Over");

    salirOver();
    icono.play("sobre");
    btnPressed.play("sobre");
};

function salirOver()
{
    for (var m = 0; m <= 7; m++)
    {
        var iconoJ = Display.get("menu." + "menuBoton" + m + ".icono");
        var btnPressedJ = Display.get("menu." + "menuBoton" + m + "Over");
        btnPressedJ.stop(0);
        iconoJ.stop(0);
    }
}

function cargarOverBtnSeleccionado()
{
        var iconoUp = Display.get("menu." + "menuBoton" + nivelMenu + ".icono");
        var btnPressedUp = Display.get("menu." + "menuBoton" + nivelMenu + "Over");
        iconoUp.play("sobre");
        btnPressedUp.play("sobre");
};

/**********************************************************************************/

/*********************************************************************************/
/***************************** FUNCION OVER CONTENIDOS ***************************/
/*********************************************************************************/
function overBtnContenidos()
{
    Display.zIndex(menuSup);
    Event.listener(btnNavContenidosAde, "mouseOver", fOverNavCont);
    Event.listener(btnNavContenidosAde, "mouseOut", fOutNavCont);
    Event.listener(btnNavContenidosAtr, "mouseOver", fOverNavContAtr);
    Event.listener(btnNavContenidosAtr, "mouseOut", fOutNavContAtr);
};

function fOverNavCont(e) {
    var numContenido = menuContenidos[nivelMenu - 1].substr(9, 9);
    var overbtnNavCont = Display.get("contenido" + numContenido + ".ventana.botonAdelante");
    overbtnNavCont.play("sobre");
};

function fOutNavCont(e) {
    var numContenido = menuContenidos[nivelMenu - 1].substr(9, 9);
    var overbtnNavCont = Display.get("contenido" + numContenido + ".ventana.botonAdelante");
    overbtnNavCont.play("sobreOver");
};

function fOverNavContAtr(e) {
    var numContenido = menuContenidos[nivelMenu - 1].substr(9, 9);
    var overbtnNavContAtr = Display.get("contenido" + numContenido + ".ventana.botonAtras");
    overbtnNavContAtr.play("sobre");
};

function fOutNavContAtr(e) {
    var numContenido = menuContenidos[nivelMenu - 1].substr(9, 9);
    var overbtnNavContAtr = Display.get("contenido" + numContenido + ".ventana.botonAtras");
    overbtnNavContAtr.play("sobreOver");
};

/*********************************************************************************/
/******************************** FUNCION OVER AUDIO *****************************/
/*********************************************************************************/
function overBtnAudio() {
    Event.listener(Display.get("menu.BotonSonido.btnAudio"), "mouseOver", fOverNavAudio);
    Event.listener(Display.get("menu.BotonSonido.btnAudio"), "mouseOut", fOutNavAudio);
};

function fOverNavAudio(e) {
    var btnIcon = Display.get("menu.BotonSonido.btnAudio");
    btnIcon.play("sobre");
};

function fOutNavAudio(e) {
    var btnIcon = Display.get("menu.BotonSonido.btnAudio");
    btnIcon.play("sobreOver");
};

/*********************************************************************************/
/**************************** FUNCION OVER INICIO ********************************/
/*********************************************************************************/
function overBtnIncio() {
    Event.listener(Display.get("menu.BotonInicio.btnInicio"), "mouseOver", fOverNavInicio);
    Event.listener(Display.get("menu.BotonInicio.btnInicio"), "mouseOut", fOutNavIncio);
};

function fOverNavInicio(e) {
    var btnIcon = Display.get("menu.BotonInicio.btnInicio");
    btnIcon.play("sobre");
};

function fOutNavIncio(e) {
    var btnIcon = Display.get("menu.BotonInicio.btnInicio");
    btnIcon.play("sobreOver");
};
/*********************************************************************************/
