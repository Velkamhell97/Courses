function verificarPagActual6() {
    PaginaActual = Presentation.getCurrentPage();
    //estadoArrayC6 = 0;
    console.log(PaginaActual);
    console.log(nivelActiCont6);

    if (nivelActiCont6 == 1) {
        if (PaginaActual == 1) {
            cerrarContenidosCont6();
        } else if (PaginaActual == 2) {
            cerrarContenidosCont6();
        } else if (PaginaActual == 3) {
            estado = "";
            cerrarContenidosCont6();
            estadoArrayC6 = 1;
            cargarJuegoAS();
        }
    } else if (nivelActiCont6 == 2) {
        if (PaginaActual == 1) {
            cerrarContenidosCont6();
        } else if (PaginaActual == 2) {
            estado = "";
            cerrarContenidosCont6();
            estadoArrayC6 = 2;
            cargarJuegoAS2();
        } else if (PaginaActual == 3) {
            estado = "";
            cerrarContenidosCont6();
            estadoArrayC6 = 3;
            cargarJuegoAS2b();
        }
    } else if (nivelActiCont6 == 3) {
        if (PaginaActual == 1) {
            cerrarContenidosCont6();
            Display.addChild("pic1");
            Display.position("pic1", 200, 250);

            Display.addChild("pic2");
            Display.position("pic2", 460, 250);

            Display.addChild("pic3");
            Display.position("pic3", 740, 250);
        } else if (PaginaActual == 2) {
            estado = "";
            cerrarContenidosCont6();
            estadoArrayC6 = 4;
            Display.zIndex(Display.get("ventanaActividades"));
            Display.zIndex(Display.get("menu"));
            cargarJuegoAS2C();
        }

    } else if (nivelActiCont6 == 4) {

        if (PaginaActual == 2) {
            verificarNavegador();
        }
        if (nivelActiCont6 == 4) {
            if (PaginaActual == 4) {
                Display.get("ventanaActividades.botonAdelante").hide();
                Display.get("menu.menuPuntero").play();
            } else {
                Display.get("ventanaActividades.botonAdelante").show();
            }
        }
        if (PaginaActual == 5) {
            TweenLite.to(Display.get("subMenu1.menuBoton4"), 1, {
                scaleX: 0.7
                , scaleY: 0.7
            });

            Display.get("menu.menuPuntero").show();
            TweenLite.to(Display.get("menu.menuPuntero"), 1, {
                x: 640
                , y: -10
                , onComplete: function () {
                    Display.get("menu.menuPuntero").play();
                }
            });
        }
    }

    //Display.zIndex("subMenu1");
}

function cerrarContenidosCont6() {
    Display.zIndex(Display.get("menu"));
    cerrarBotonVerificar();
    Display.removeChild("pic1");
    Display.removeChild("pic2");
    Display.removeChild("pic3");

    if (estadoArrayC6 == 1) {
        Display.removeChildArray(elementosColision);
        Display.removeChildArray(elementosMover);
    } else if (estadoArrayC6 == 2) {
        Display.removeChildArray(elementosColision2);
        Display.removeChildArray(elementosMover2);
    } else if (estadoArrayC6 == 3) {
        Display.removeChildArray(elementosColision2b);
        Display.removeChildArray(elementosMover2b);
    } else if (estadoArrayC6 == 4) {
        Display.removeChildArray(elementosColision2C);
        Display.removeChildArray(elementosMover2C);
    }
    estadoArrayC6 = 0;
};

function salirContenido6() {
    TweenLite.to(Display.get(menuContenidos[5]), 1, {
        alpha: 1
        , x: -1500
        , y: 80
        , onComplete: function () {
            Display.removeChild(menuContenidos[5]);
        }
    });

    TweenLite.to(Display.get("globoIntro"), 1, {
        alpha: 1
    });

    salirOver();
    //cargarOverBtnSeleccionado(); 
};