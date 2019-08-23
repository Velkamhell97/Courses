

/**************************** Funcion Over Menu Inferior ***************************/
function asignarEventosBotonesSubmenu() 
{
    Event.listener(btnSubmenu, "mouseOver", fOver2);
    Event.listener(btnSubmenu, "mouseOut", fOut2);
    Event.listener(btnSubmenu, "mouseDown", botonDown2);
}; 
 
function fOver2(e) 
{
    Event.removeListener(e, "mouseOver", fOver2);
    e.play("sobre");

    var overAyuda = Display.get("subMenu1." + e.getName() + "Ayuda");
    overAyuda.show();
    overAyuda.play("sobre");
}

function fOut2(e) 
{
    Event.listener(e, "mouseOver", fOver2);
    Event.listener(btnSubmenu, "mouseDown", botonDown2);
    e.play("sobreSalir");

    var outAyuda = Display.get("subMenu1." + e.getName() + "Ayuda");
    outAyuda.play("sobreSalir");
    //Timer.load(2, ocultarOverBtn);
}
 
function ocultarOverBtn(e) 
{
  Display.get("subMenu1.menuBoton1Ayuda").hide();
  Display.get("subMenu1.menuBoton2Ayuda").hide();
  Display.get("subMenu1.menuBoton3Ayuda").hide();
  Display.get("subMenu1.menuBoton4Ayuda").hide();
}



function botonDown2(e) 
{
    for (var j = 0; j < btnSubmenu.length; j++) 
    {
        if ("subMenu1." + "menuBoton" + j == "subMenu1." + e.getName()) 
        {
            Event.removeListener(e, "mouseOver", fOver);
            Event.removeListener(btnSubmenu, "mouseDown", botonDown2);
        }
    }
    var icono = Display.get("subMenu1." + e.getName() + ".icono");
    var btnPressed = Display.get("subMenu1." + e.getName() + ".btnPressed");

    salirOver2();
    icono.play("sobre");
    btnPressed.play("sobre");
};

function salirOver2() 
{
    for (var m = 0; m <= 6; m++) 
    {
        var iconoJ = Display.get("subMenu1." + "menuBoton" + m + ".icono");
        var btnPressedJ = Display.get("subMenu1." + "menuBoton" + m + ".btnPressed");
        btnPressedJ.stop(0);
        iconoJ.stop(0);
    }
}

function cargarBtnSubSeleccionado() 
{
    var iconoSel = Display.get("subMenu1.menuBoton1.icono");
    var btnPressedSel = Display.get("subMenu1.menuBoton1.btnPressed");
    iconoSel.play("sobre");
    btnPressedSel.play("sobre");
};

function cargarOverBtnSubSeleccionado() 
{
        var iconoUp = Display.get("subMenu1." + "menuBoton" + nivelSubMenu + ".icono");
        var btnPressedUp = Display.get("subMenu1." + "menuBoton" + nivelSubMenu + ".btnPressed");
        iconoUp.play("sobre");
        btnPressedUp.play("sobre");
};
