/* 
 * JavaScript Document 
 * @autor Alejandro Castaño.
 * Fecha de creación: Martes 22 / Julio, 2014
 */
               
/************** AGREGA TODOS LOS SIMBOLOS AL STAGE **************/
function Main() 
{
        Options.pagination({
            size: 16,
            weight: "bold",
            aling: "center",
            color: "#000000"
        });
 
        cargarEscenas();
        Display.addChild("mcPrecarga");
        Timer.load(4, quitarPrecargaManual);
    };
  
/************** AGREGA TODAS LAS ESCENAS PREVIAMENTE **************/
function cargarEscenas() 
{
    Display.addChild("intro");
    TweenMax.to(Display.get("intro"), 0.01, {
             alpha: 1,
             x:-1122,
             y:-503
     });
};

function cargarMenuSup() 
{
  Display.addChild("menu");
  Display.get("menu").play();
  Display.zIndex("menu");
};

/************** QUITA LA PRECARGA MANUAL **************/
function quitarPrecargaManual() 
{
    Display.removeChild("mcPrecarga");
    cargarIntro(); // Carga desde el inicio.
    //cargarInicio();
};

/************** FUNCION SILENCIAR **************/
function silenciar() 
{
    Sound.buttonMute("menu.BotonSonido");
};


function cargarIntro() 
{
   Display.get("intro").play();
   Timer.load(16, cargarFondo1);
}

function cargarFondo1() 
{
  TweenMax.to(Display.get("intro"), 2, {
             alpha: 0,
             onComplete: function()
             { 
               Display.removeChild("intro");
             }
     });
    
  Display.addChild("fondo1"); 
  TweenMax.to(Display.get("fondo1"), 0.01, {
             alpha: 0,
             onComplete: function()
             { 
              TweenMax.to(Display.get("fondo1"), 1, {
               alpha: 1});
               cargarInicio();
             }
  });
}
/************** CARGA LA FUNCION DE BIENVENIDA **************/
function cargarInicio() 
{
    estadoReincio = 0;
    Display.addChild("mcBienvenida");
    TweenLite.to(Display.get("mcBienvenida"), 0.01, {
        alpha: 0,
        x: 0,
        y: 1000,
        onComplete: function(){
            TweenLite.to(Display.get("mcBienvenida"), 1, {
                alpha: 1,
                x: 0,
                y: 80,
                onComplete: function()
                {
                   cargarMenuSup();
                }
                
            });
        }
    });
    
    Button.over("mcBienvenida.botonAdelante", true);
    Presentation.load("mcBienvenida", "mcBienvenida.botonAtras", "mcBienvenida.botonAdelante", null);

    Presentation.folderText("edge_includes/Textos/Introduccion/Texto", 1);

    Presentation.finish(iniciarJuego);
};
  
//******************************************//
/************** INCIA EL JUEGO **************/
function iniciarJuego() 
{
    estadoReincio = 1;
     
    TweenLite.to(Display.get("mcBienvenida"), 0.5, {
        alpha: 1,
        x: 0,
        y: 1000,
        onComplete: function () {
            Display.removeChild("mcBienvenida");
            
             Display.addChild("globoIntro");
             TweenLite.to(Display.get("globoIntro"), 0.01, {
             alpha: 0,
             x: 590,
             y: 350,
             onComplete: function()
              {
                TweenLite.to(Display.get("globoIntro"), 1, {
                alpha: 1
                });
                Display.get("menu.menuPuntero").play();
              }
             });
        }
    });
    
  cargarEventosMenuSup();
    
  silenciar();
  Event.click(Display.get("menu.BotonInicio"), fCargarReinicio);
  //Button.over(Display.get("menu.BotonInicio"), true);
  //Event.listener(Display.get("ventanaActividades.botonAdelante"), "mouseOver", fOverNav);
  //Event.listener(Display.get("ventanaActividades.botonAdelante"), "mouseOut", fOutNav);
  asignarEventosBotones();
};

function cargarEventosMenuSup() 
{
  for (var k = 0; k < btnPrincipales.length; k++) 
  {
     Event.click(btnPrincipales[k], functionesRetornoMenu[k]);
  }
};

function fCargarReinicio() 
{
   moverContenidosY();
   moverContenidosSubmenu();
   Display.removeChild("menu");
   Display.removeChild("globoIntro");
   //Display.removeChild("flecha");
   //Display.removeChild("flecha2");
   Display.removeChild("fondo2");
   Display.removeChild("fondo3");
   cargarIntroReincio();
}
 
function cargarIntroReincio() 
{
    
  Display.addChild("menu");
  TweenMax.to(Display.get("fondo1"), 1, {
             alpha: 0,
             onComplete: function()
             { 
               Display.removeChild("fondo1");
             }
     });
  Display.addChild("intro");
  TweenMax.to(Display.get("intro"), 0.01, {
             alpha: 0,
             x:-1122,
             y:-503,
             onComplete: function()
             { 
               TweenMax.to(Display.get("intro"), 1, {
                alpha: 1});
                cargarIntro();
             }
  });
}
/*********************************************************************************/
/********************************* BLOQUEOS **************************************/
/*********************************************************************************/
function activarSeguridad() 
{
   Display.get("menu.bloqueo").show();
   Display.get("subMenu1.bloqueo2").show();
   Timer.load(2, desactivarSeguridad);
};

function desactivarSeguridad() 
{
   Display.get("menu.bloqueo").hide();
   Display.get("subMenu1.bloqueo2").hide();
};
 
/*********************************************************************************/
/********************************* FUNCION CONTENIDO 1 ***************************/
/*********************************************************************************/
function introductionCargar() 
{
    Display.get("menu.menuPuntero").hide();
    activarSeguridad();
    estadoReincio = 1;
    
    
        moverContenidosY();
        var contenedor1 = Display.addChild("contenido1");
        TweenMax.to(contenedor1, 0.01, {
        alpha:0,
        x: -1500,
        y: 80,
        onComplete: function () 
        {
            TweenMax.to(contenedor1, 1, {
            alpha: 1,
            x:0,
            y:80
          });
        }
      });
    
    
    overBtnContenidos();
    nivelMenu = 1;

    //Button.over("contenido1.ventana.botonAdelante", true);

    Presentation.load("contenido1", "contenido1.ventana.botonAtras", "contenido1.ventana.botonAdelante", "contenido1.ventana.paginacion");

    Presentation.folderText("edge_includes/Textos/contenido1/Texto", 34);

    Presentation.functionReturn(arrayFunintroductionCargar);
};

  
/*********************************************************/
/*********************************************************************************/
/********************************* FUNCION CONTENIDO 2 ***************************/
/*********************************************************************************/
function contextualizationCargar() 
{
    Display.get("menu.menuPuntero").hide();
    activarSeguridad();
    estadoReincio = 1;
    
        moverContenidosY();
        var contenedor2 = Display.addChild("contenido2");
        TweenMax.to(contenedor2, 0.01, {
        alpha:0,
        x: -1500,
        y: 80,
        onComplete: function () 
        {
            TweenMax.to(contenedor2, 1, {
            alpha: 1,
            x:0,
            y:80});
        }
      });
    

    overBtnContenidos();
    nivelMenu = 2;
    
     Presentation.load("contenido2", "contenido2.ventana.botonAtras", "contenido2.ventana.botonAdelante", "contenido2.ventana.paginacion");

    Presentation.folderText("edge_includes/Textos/contenido2/Texto", 3);

    Presentation.functionReturn(arrayContextualizationCargar);
    Presentation.finish(salirContenido2);
    
    Display.zIndex("menu");
};


/*********************************************************************************/
/*********************** FUNCION (((((CONTENIDO 3))))) ***************************/
/*********************************************************************************/
function comprehensionCargar() 
{ 
    Display.get("menu.menuPuntero").hide();
    activarSeguridad();
    estadoReincio = 1;
    
        moverContenidosY();
        var subMenu1 = Display.addChild("subMenu1");
        TweenMax.to(subMenu1, 0.01, {
        alpha:0,
        x: 0,
        y: 700,
        onComplete: function () 
        {
            TweenMax.to(subMenu1, 1, {
            alpha: 1,
            x:0,
            y:570});
        }
      });
   
    
    cargarBtnSubSeleccionado();
    cargarPractice1Acti1();
    Event.click("subMenu1.menuBoton1", cargarPractice1Acti1);
    Event.click("subMenu1.menuBoton2", cargarPractice1Acti2);
    Event.click("subMenu1.menuBoton3", cargarPractice1Acti3);
    Event.click("subMenu1.menuBoton4", cargarPractice1Acti4);
    
    asignarEventosBotonesSubmenu();
    overBtnContenidos();
    nivelMenu = 3;
};

/*********************************************************************************/
/***************************** ACTIVIDAD 1 CONTENIDO 3 ***************************/
/*********************************************************************************/
function cargarPractice1Acti1() 
{
   activarSeguridad();
   nivelSubMenu = 1;
    
   moverContenidosSubmenu();
   Display.removeChild("ventanaActividades");
   nivelActiCont3 = 1;
   var ventanaActividades = Display.addChild("ventanaActividades");  
   Display.zIndex("subMenu1");
        TweenMax.to(ventanaActividades, 0.01, {
        alpha:0,
        x: -1500,
        y: 75,
        onComplete: function () 
        {
            TweenMax.to(ventanaActividades, 1, {
            alpha: 1,
            x:0,
            y:75,
            onComplete: function () 
            {
                 acti1Practice1();
            }        
         });
        }
      });
};

function acti1Practice1() 
{
   Presentation.load("ventanaActividades", null, null, null);
   Presentation.folderText("edge_includes/Textos/contenido3/act1/Texto", 1);
   verificarPagActual3();
};

/*********************************************************************************/
/***************************** ACTIVIDAD 2 CONTENIDO 3 ***************************/
/*********************************************************************************/

function cargarPractice1Acti2() 
{
   activarSeguridad();
   nivelSubMenu = 2;
    
   moverContenidosSubmenu();
   Display.removeChild("ventanaActividades");
   nivelActiCont3 = 2;
   var ventanaActividades = Display.addChild("ventanaActividades");  
   Display.zIndex("subMenu1");
        TweenMax.to(ventanaActividades, 0.01, {
        alpha:0,
        x: -1500,
        y: 75,
        onComplete: function () 
        {
            TweenMax.to(ventanaActividades, 1, {
            alpha: 1,
            x:0,
            y:75,
            onComplete: function () 
            {
                 acti2Practice1();
            }
          });
        }
      });
};

function acti2Practice1() 
{
   Presentation.load("ventanaActividades", null, null, null);
   Presentation.folderText("edge_includes/Textos/contenido3/act2/Texto", 1);
   verificarPagActual3();
};

/*********************************************************************************/
/***************************** ACTIVIDAD 3 CONTENIDO 3 ***************************/
/*********************************************************************************/

function cargarPractice1Acti3() 
{
   activarSeguridad();
   nivelSubMenu = 3;
    
   moverContenidosSubmenu();
   Display.removeChild("ventanaActividades");
   nivelActiCont3 = 3;
   var ventanaActividades = Display.addChild("ventanaActividades");  
   Display.zIndex("subMenu1");
        TweenMax.to(ventanaActividades, 0.01, {
        alpha:0,
        x: -1500,
        y: 75,
        onComplete: function () 
        {
            TweenMax.to(ventanaActividades, 1, {
            alpha: 1,
            x:0,
            y:75,
            onComplete: function () 
            {
                 acti3Practice1();
            }
          });
        }
      });
};

function acti3Practice1() 
{
   Presentation.load("ventanaActividades", null, null, null);
   Presentation.folderText("edge_includes/Textos/contenido3/act3/Texto", 1);
   verificarPagActual3();
};

/*********************************************************************************/
/***************************** ACTIVIDAD 1 CONTENIDO 4 ***************************/
/*********************************************************************************/

function cargarPractice1Acti4() 
{
   activarSeguridad();
   nivelSubMenu = 4;
    
   moverContenidosSubmenu();
   Display.removeChild("ventanaActividades");
   nivelActiCont3 = 4;
   var ventanaActividades = Display.addChild("ventanaActividades");  
   Display.zIndex("subMenu1");
        TweenMax.to(ventanaActividades, 0.01, {
        alpha:0,
        x: -1500,
        y: 75,
        onComplete: function () 
        {
            TweenMax.to(ventanaActividades, 1, {
            alpha: 1,
            x:0,
            y:75,
            onComplete: function () 
            {
                 acti4Practice1();
            }
          });
        }
      });
};

function acti4Practice1() 
{
   Presentation.load("ventanaActividades", null, null, null);
   Presentation.folderText("edge_includes/Textos/contenido3/act4/Texto", 1);
   verificarPagActual3();
};

/*********************************************************************************/
/*************** FUNCION (((((((((CONTENIDO 4))))))))) ***************************/
/*********************************************************************************/
function practiceOneCargar() 
{
    Display.get("menu.menuPuntero").hide();
    activarSeguridad();
    estadoReincio = 1;
    
    
        moverContenidosY();
        var subMenu1 = Display.addChild("subMenu1");
        TweenMax.to(subMenu1, 0.01, {
        alpha:0,
        x: 0,
        y: 700,
        onComplete: function () 
        {
            TweenMax.to(subMenu1, 1, {
            alpha: 1,
            x:0,
            y:570});
        }
      });
  
    
    cargarBtnSubSeleccionado();
    cargarPractice2Acti1();
    Event.click("subMenu1.menuBoton1", cargarPractice2Acti1);
    Event.click("subMenu1.menuBoton2", cargarPractice2Acti2);
    Event.click("subMenu1.menuBoton3", cargarPractice2Acti3);
    Event.click("subMenu1.menuBoton4", cargarPractice2Acti4);
    asignarEventosBotonesSubmenu();

    overBtnContenidos();
    nivelMenu = 4;
};

/*********************************************************************************/
/************************ ACTIVIDAD 1 CONTENIDO 4 ********************************/
/*********************************************************************************/
function cargarPractice2Acti1() 
{
   activarSeguridad();
   nivelSubMenu = 1;
    
   moverContenidosSubmenu();
   Display.removeChild("ventanaActividades");
   nivelActiCont4 = 1;
   var ventanaActividades = Display.addChild("ventanaActividades");  
   Display.zIndex("subMenu1");
        TweenMax.to(ventanaActividades, 0.01, {
        alpha:0,
        x: -1500,
        y: 75,
        onComplete: function () 
        {
            TweenMax.to(ventanaActividades, 1, {
            alpha: 1,
            x:0,
            y:75,
            onComplete: function () 
            {
                 acti1Practice2();
            }        
         });
        }
      });
};

function acti1Practice2() 
{
   asignarEventosVentanaActividades();
   Presentation.load("ventanaActividades", "ventanaActividades.botonAtras", "ventanaActividades.botonAdelante", null);
   Presentation.folderText("edge_includes/Textos/contenido4/act1/Texto", 2);
   Presentation.functionReturn(arrayPractice1);
   verificarPagActual4();
};

/*********************************************************************************/
/***************************** ACTIVIDAD 2 CONTENIDO 4 ***************************/
/*********************************************************************************/
function cargarPractice2Acti2() 
{
   activarSeguridad();
   nivelSubMenu = 2;
    
   moverContenidosSubmenu();
   Display.removeChild("ventanaActividades");
   nivelActiCont4 = 2;
   var ventanaActividades = Display.addChild("ventanaActividades");  
   Display.zIndex("subMenu1");
        TweenMax.to(ventanaActividades, 0.01, {
        alpha:0,
        x: -1500,
        y: 75,
        onComplete: function () 
        {
            TweenMax.to(ventanaActividades, 1, {
            alpha: 1,
            x:0,
            y:75,
            onComplete: function () 
            {
                 acti2Practice2();
            }        
         });
        }
      });
}

function acti2Practice2() 
{
   Presentation.load("ventanaActividades", null, null, null);
   Presentation.folderText("edge_includes/Textos/contenido4/act2/Texto", 1);
   verificarPagActual4();
};

/*********************************************************************************/
/***************************** ACTIVIDAD 3 CONTENIDO 4 ***************************/
/*********************************************************************************/
function cargarPractice2Acti3() 
{
   activarSeguridad();
   nivelSubMenu = 3;
    
   moverContenidosSubmenu();
   Display.removeChild("ventanaActividades");
   nivelActiCont4 = 3;
   var ventanaActividades = Display.addChild("ventanaActividades");  
   Display.zIndex("subMenu1");
        TweenMax.to(ventanaActividades, 0.01, {
        alpha:0,
        x: -1500,
        y: 75,
        onComplete: function () 
        {
            TweenMax.to(ventanaActividades, 1, {
            alpha: 1,
            x:0,
            y:75,
            onComplete: function () 
            {
                 acti3Practice2();
            }        
         });
        }
      });
}
 
function acti3Practice2() 
{
   asignarEventosVentanaActividades();
   Presentation.load("ventanaActividades", "ventanaActividades.botonAtras", "ventanaActividades.botonAdelante", null);
   Presentation.folderText("edge_includes/Textos/contenido4/act3/Texto", 2);
   Presentation.functionReturn(arrayPractice1);
   verificarPagActual4();
};

/*********************************************************************************/
/***************************** ACTIVIDAD 4 CONTENIDO 4 ***************************/
/*********************************************************************************/
function cargarPractice2Acti4() 
{
   activarSeguridad();
   nivelSubMenu = 4;
    
   moverContenidosSubmenu();
   Display.removeChild("ventanaActividades");
   nivelActiCont4 = 4;
   var ventanaActividades = Display.addChild("ventanaActividades");  
   Display.zIndex("subMenu1");
        TweenMax.to(ventanaActividades, 0.01, {
        alpha:0,
        x: -1500,
        y: 75,
        onComplete: function () 
        {
            TweenMax.to(ventanaActividades, 1, {
            alpha: 1,
            x:0,
            y:75,
            onComplete: function () 
            {
                 acti4Practice2();
            }        
         });
        }
      });
}

function acti4Practice2() 
{
   asignarEventosVentanaActividades();
   Presentation.load("ventanaActividades", "ventanaActividades.botonAtras", "ventanaActividades.botonAdelante", null);
   Presentation.folderText("edge_includes/Textos/contenido4/act4/Texto", 2);
   Presentation.functionReturn(arrayPractice1);
   verificarPagActual4();
};

/*********************************************************************************/
/******************** FUNCION (((((((CONTENIDO 5)))))) ***************************/
/*********************************************************************************/
function practiceTwoCargar() 
{
    Display.get("menu.menuPuntero").hide();
    activarSeguridad();
    estadoReincio = 1;
    
   
        moverContenidosY();
        var subMenu1 = Display.addChild("subMenu1");
        TweenMax.to(subMenu1, 0.01, {
        alpha:0,
        x: 0,
        y: 700,
        onComplete: function () 
        {
            TweenMax.to(subMenu1, 1, {
            alpha: 1,
            x:0,
            y:570});
        }
      });
  
    
    cargarBtnSubSeleccionado();
    cargarPractice3Acti1();
    Event.click("subMenu1.menuBoton1", cargarPractice3Acti1);
    Event.click("subMenu1.menuBoton2", cargarPractice3Acti2);
    Event.click("subMenu1.menuBoton3", cargarPractice3Acti3);
    Event.click("subMenu1.menuBoton4", cargarPractice3Acti4);
    asignarEventosBotonesSubmenu();

    overBtnContenidos();
    nivelMenu = 5;
};

/*********************************************************************************/
/************************ ACTIVIDAD 1 CONTENIDO 5 ********************************/
/*********************************************************************************/
function cargarPractice3Acti1() 
{
   activarSeguridad();
   nivelSubMenu = 1;
    
   moverContenidosSubmenu();
   Display.removeChild("ventanaActividades");
   nivelActiCont5 = 1;
   var ventanaActividades = Display.addChild("ventanaActividades");  
   Display.zIndex("subMenu1");
        TweenMax.to(ventanaActividades, 0.01, {
        alpha:0,
        x: -1500,
        y: 75,
        onComplete: function () 
        {
            TweenMax.to(ventanaActividades, 1, {
            alpha: 1,
            x:0,
            y:75,
            onComplete: function () 
            {
                 acti1Practice3();
            }        
         });
        }
      });
};

function acti1Practice3() 
{
   asignarEventosVentanaActividades();
   Presentation.load("ventanaActividades", "ventanaActividades.botonAtras", "ventanaActividades.botonAdelante", null);
   Presentation.folderText("edge_includes/Textos/contenido5/act1/Texto", 2);
   Presentation.functionReturn(arrayPractice2);
   verificarPagActual5();
};

/*********************************************************************************/
/************************ ACTIVIDAD 2 CONTENIDO 5 ********************************/
/*********************************************************************************/
function cargarPractice3Acti2() 
{
   activarSeguridad();
   nivelSubMenu = 2;
    
   moverContenidosSubmenu();
   Display.removeChild("ventanaActividades");
   nivelActiCont5 = 2;
   var ventanaActividades = Display.addChild("ventanaActividades");  
   Display.zIndex("subMenu1");
        TweenMax.to(ventanaActividades, 0.01, {
        alpha:0,
        x: -1500,
        y: 75,
        onComplete: function () 
        {
            TweenMax.to(ventanaActividades, 1, {
            alpha: 1,
            x:0,
            y:75,
            onComplete: function () 
            {
                 acti2Practice3();
            }        
         });
        }
      });
};

function acti2Practice3() 
{
   Presentation.load("ventanaActividades", null, null, null);
   Presentation.folderText("edge_includes/Textos/contenido5/act2/Texto", 1);
   verificarPagActual5();
};

/*********************************************************************************/
/************************ ACTIVIDAD 3 CONTENIDO 5 ********************************/
/*********************************************************************************/
function cargarPractice3Acti3() 
{
   activarSeguridad();
   nivelSubMenu = 3;
    
   moverContenidosSubmenu();
   Display.removeChild("ventanaActividades");
   nivelActiCont5 = 3;
   var ventanaActividades = Display.addChild("ventanaActividades");  
   Display.zIndex("subMenu1");
        TweenMax.to(ventanaActividades, 0.01, {
        alpha:0,
        x: -1500,
        y: 75,
        onComplete: function () 
        {
            TweenMax.to(ventanaActividades, 1, {
            alpha: 1,
            x:0,
            y:75,
            onComplete: function () 
            {
                 acti3Practice3();
            }        
         });
        }
      });
};

function acti3Practice3() 
{
   Presentation.load("ventanaActividades", null, null, null);
   Presentation.folderText("edge_includes/Textos/contenido5/act3/Texto", 1);
   verificarPagActual5();
};

/*********************************************************************************/
/************************ ACTIVIDAD 4 CONTENIDO 5 ********************************/
/*********************************************************************************/
function cargarPractice3Acti4() 
{
   activarSeguridad();
   nivelSubMenu = 4;
    
   moverContenidosSubmenu();
   Display.removeChild("ventanaActividades");
   nivelActiCont5 = 4;
   var ventanaActividades = Display.addChild("ventanaActividades");  
   Display.zIndex("subMenu1");
        TweenMax.to(ventanaActividades, 0.01, {
        alpha:0,
        x: -1500,
        y: 75,
        onComplete: function () 
        {
            TweenMax.to(ventanaActividades, 1, {
            alpha: 1,
            x:0,
            y:75,
            onComplete: function () 
            {
                 acti4Practice3();
            }        
         });
        }
      });
};

function acti4Practice3() 
{
   asignarEventosVentanaActividades();
   Presentation.load("ventanaActividades", "ventanaActividades.botonAtras", "ventanaActividades.botonAdelante", null);
   Presentation.folderText("edge_includes/Textos/contenido5/act4/Texto", 2);
   Presentation.functionReturn(arrayPractice2);
   verificarPagActual5();
};

 
/*********************************************************************************/
/********************************* FUNCION CONTENIDO 6 ***************************/
/*********************************************************************************/
function practiceThreeCargar() 
{
    Display.get("menu.menuPuntero").hide();
    activarSeguridad();
    estadoReincio = 1;
    

        moverContenidosY();
        var subMenu1 = Display.addChild("subMenu1");
        TweenMax.to(subMenu1, 0.01, {
        alpha:0,
        x: 0,
        y: 700,
        onComplete: function () 
        {
            TweenMax.to(subMenu1, 1, {
            alpha: 1,
            x:0,
            y:570});
        }
      });

    
    cargarBtnSubSeleccionado();
    cargarPractice4Acti1();
    Event.click("subMenu1.menuBoton1", cargarPractice4Acti1);
    Event.click("subMenu1.menuBoton2", cargarPractice4Acti2);
    Event.click("subMenu1.menuBoton3", cargarPractice4Acti3);
    Event.click("subMenu1.menuBoton4", cargarPractice4Acti4);
    asignarEventosBotonesSubmenu();

    overBtnContenidos();
    nivelMenu = 6;
};

/*********************************************************************************/
/************************ ACTIVIDAD 1 CONTENIDO 6 ********************************/
/*********************************************************************************/
function cargarPractice4Acti1() 
{
   activarSeguridad();
   nivelSubMenu = 1;
    
   moverContenidosSubmenu();
   Display.removeChild("ventanaActividades");
   nivelActiCont6 = 1;
   var ventanaActividades = Display.addChild("ventanaActividades"); 
       
   Display.zIndex("subMenu1");
        TweenMax.to(ventanaActividades, 0.01, {
        alpha:0,
        x: -1500,
        y: 75,
        onComplete: function () 
        {
            TweenMax.to(ventanaActividades, 1, {
            alpha: 1,
            x:0,
            y:75,
            onComplete: function () 
            {
                 acti1Practice4();
            }        
         });
        }
      });
};

function acti1Practice4() 
{
   asignarEventosVentanaActividades();
   Presentation.load("ventanaActividades", "ventanaActividades.botonAtras", "ventanaActividades.botonAdelante", null);
   Presentation.folderText("edge_includes/Textos/contenido6/act1a/Texto", 3);
   Presentation.functionReturn(arrayPronunciation);
   verificarPagActual6();
};

/*********************************************************************************/
/************************ ACTIVIDAD 2 CONTENIDO 6 ********************************/
/*********************************************************************************/
function cargarPractice4Acti2() 
{
   activarSeguridad();
   nivelSubMenu = 2;
    
   moverContenidosSubmenu();
   Display.removeChild("ventanaActividades");
   nivelActiCont6 = 2;
   var ventanaActividades = Display.addChild("ventanaActividades");  
   Display.zIndex("subMenu1");
        TweenMax.to(ventanaActividades, 0.01, {
        alpha:0,
        x: -1500,
        y: 75,
        onComplete: function () 
        {
            TweenMax.to(ventanaActividades, 1, {
            alpha: 1,
            x:0,
            y:75,
            onComplete: function () 
            {
                 acti2Practice4();
            }        
         });
        }
      });
};

function acti2Practice4() 
{
   asignarEventosVentanaActividades();
   Presentation.load("ventanaActividades", "ventanaActividades.botonAtras", "ventanaActividades.botonAdelante", null);
   Presentation.folderText("edge_includes/Textos/contenido6/act2a/Texto", 3);
   Presentation.functionReturn(arrayPronunciation);
   verificarPagActual6();
};

/*********************************************************************************/
/************************ ACTIVIDAD 3 CONTENIDO 6 ********************************/
/*********************************************************************************/
function cargarPractice4Acti3() 
{
   activarSeguridad();
   nivelSubMenu = 3;
    
   moverContenidosSubmenu();
   Display.removeChild("ventanaActividades");
   nivelActiCont6 = 3;
   var ventanaActividades = Display.addChild("ventanaActividades");  
   Display.zIndex("subMenu1");
        TweenMax.to(ventanaActividades, 0.01, {
        alpha:0,
        x: -1500,
        y: 75,
        onComplete: function () 
        {
            TweenMax.to(ventanaActividades, 1, {
            alpha: 1,
            x:0,
            y:75,
            onComplete: function () 
            {
                 acti3Practice4();
            }        
         });
        }
      });
};

function acti3Practice4() 
{
   asignarEventosVentanaActividades();
   Presentation.load("ventanaActividades", "ventanaActividades.botonAtras", "ventanaActividades.botonAdelante", null);
   Presentation.folderText("edge_includes/Textos/contenido6/act3a/Texto", 2);
   Presentation.functionReturn(arrayPronunciation);
   verificarPagActual6();
};

/*********************************************************************************/
/************************ ACTIVIDAD 4 CONTENIDO 6 ********************************/
/*********************************************************************************/
function cargarPractice4Acti4() 
{
  
   activarSeguridad();
   nivelSubMenu = 4;
    
   moverContenidosSubmenu();
   cargarReconocimiento();
   Display.removeChild("ventanaActividades");
   nivelActiCont6 = 4;
   var ventanaActividades = Display.addChild("ventanaActividades");  
   Display.zIndex("subMenu1");
        TweenMax.to(ventanaActividades, 0.01, {
        alpha:0,
        x: -1500,
        y: 75,
        onComplete: function () 
        {
            TweenMax.to(ventanaActividades, 1, {
            alpha: 1,
            x:0,
            y:75,
            onComplete: function () 
            {
                 acti4Practice4();
            }        
         });
        }
      });
};

//Mensaje
function verificarNavegador(){
   Display.get("ventanaActividades").hide();         
    if(Core.browser.chrome == false)
    {
        Display.addChild("mensajeNavegador");
        Event.click("mensajeNavegador.cerrar",cerrarMensajeNavegador);
        /*Display.zIndex("mensajeNavegador");
        Display.zIndex("subMenu1");
        Display.zIndex("menu");*/
    }
    else
    {
        Display.addChild("mensajeNavegador2");
        Event.click("mensajeNavegador2.cerrar",cerrarMensajeNavegador);
        /*Display.zIndex("mensajeNavegador2");
        Display.zIndex("subMenu1");
        Display.zIndex("menu");*/
    }  
}
  

function cerrarMensajeNavegador(){
    Display.zIndex("menu");
    Display.removeChild("mensajeNavegador");
    Display.removeChild("mensajeNavegador2");
    Display.get("ventanaActividades").show();
    //continuarPresentacion();
    Timer.load(5, function () {
    Sound.speakState(ResultSpeak);
    });
      
}

function acti4Practice4() 
{ 
   asignarEventosVentanaActividades();
   Presentation.load("ventanaActividades", "ventanaActividades.botonAtras", "ventanaActividades.botonAdelante", null);
   Presentation.folderText("edge_includes/Textos/contenido6/act4a/Texto", 4);
   Presentation.functionReturn(arrayPronunciation);
   verificarPagActual6();
   Presentation.finish(salirMenuReferencias);
};


function cargarReconocimiento(){

Timer.load(5, function () {
       Sound.speakState(ResultSpeak);
    });

}


function ResultSpeak(result) {
    console.log(result);
    if(result == false)
    {
        
       
       Display.addChild("escribirMensajeMalo");
       Sound.play("media/mensajes/audio5");
        TweenMax.to("escribirMensajeMalo", 1, {
        x: 1050,
        ease: Cubic.easeIn,
        delay: 2,
        onComplete: PronunciacionJuegoCCerrarMensaje
        });    
        
    }
    else
    {

        
       Display.addChild("escribirMensajeBueno");
        Sound.play("media/mensajes/audio4");
        TweenMax.to("escribirMensajeBueno", 1, {
        x: 1050,
        ease: Cubic.easeIn,
        delay: 2,
        onComplete: PronunciacionJuegoCCerrarMensaje2
        });    
        
    
    }
}


function PronunciacionJuegoCCerrarMensaje(){

Display.removeChild("escribirMensajeMalo");

}

function PronunciacionJuegoCCerrarMensaje2(){

Display.removeChild("escribirMensajeBueno");

}



function salirMenuReferencias() 
{
   Display.get("menu.menuPuntero").show();
   TweenLite.to(Display.get("menu.menuPuntero"), 1, {
   x: 362,
   onComplete: function()
         {
            Display.get("menu.menuPuntero").play();
         }
    });
    Display.zIndex("menu");
}

function asignarEventosVentanaActividades() 
{
   Event.listener(Display.get("ventanaActividades.botonAdelante"), "mouseOver", fOverNav);
   Event.listener(Display.get("ventanaActividades.botonAdelante"), "mouseOut", fOutNav);
   Event.listener(Display.get("ventanaActividades.botonAtras"), "mouseOver", fOverNavAtras);
   Event.listener(Display.get("ventanaActividades.botonAtras"), "mouseOut", fOutNavAtras);
};
 
/***********************************************************************************/
/***************** Mueve de posicion todos los contendos actuales ******************/
function moverContenidosY() 
{ 
    estadoPuntero1 = 0;
    estadoPuntero2 = 0;
    estadoPuntero3 = 0;
    estadoPuntero4 = 0;
    valorTotalEstadoPuntero = 0;
    
    Display.removeChild("ventanaActividades");
    Display.removeChild("subMenu1");
    Display.removeChild("fondo2");
    Display.removeChild("fondo3");
    //Display.removeChild("flecha2");
    
    Display.removeChild("pic1");
    Display.removeChild("pic2");
    Display.removeChild("pic3");
    
    cerrarVentanaEscribirCont3pag1(); // CIERRA VENTANA MENSAJES
    cerrarTorta1(); // CIERRA CONTENIDOS 1
    
    cerrarContenidosCont1();
    cerrarContenidosCont3();
    cerrarContenidosCont4();
    cerrarContenidosCont5(); 
    cerrarContenidosCont6(); 
    
    juegoColisionAnimacionOut();
     
    TweenLite.to(Display.get("mcBienvenida"), 1, {
        alpha: 1,
        x: 0,
        y: 1000,
        onComplete: function () {
            Display.removeChild("mcBienvenida");
        }});

    TweenLite.to(Display.get("globoIntro"), 0.5, {
        alpha: 0});
    
    Display.removeChild("globoDialogo2");
    Display.removeChild("cuadroDialogo");
    Display.removeChild("contenido1");
    Display.removeChild("contenido2");
    Display.removeChild("contenido6");
    
    if(estadoArrayFV == 1)
    {
       Display.removeChildArray(JuegoFVBotones);
       estadoArrayFV = 0;
    }
    
    if(estadoArrayFV2 == 1)
    {
       Display.removeChildArray(JuegoFVBotones2);
       estadoArrayFV2 = 0;
    }
};

function moverContenidosSubmenu() 
{
   /*TweenLite.to(Display.get("flecha"), 0.5, {
                alpha: 0
            });
    Display.removeChild("flecha2");*/
    
   cerrarBotonVerificar();
   cerrarContenidosCont3();
   cerrarContenidosCont4();
   cerrarContenidosCont5();
   cerrarContenidosCont6();
  
   if(estadoArrayFV == 1)
   {
       Display.removeChildArray(JuegoFVBotones);
       estadoArrayFV = 0;
   }
    
   if(estadoArrayFV2 == 1)
   {
       Display.removeChildArray(JuegoFVBotones2);
       estadoArrayFV2 = 0;
   }
   
    estadoArrayC6 = 0;
};

//************************************************//
function cargarVentanaEscribirCont3pag1() 
{
  Display.addChild("mascara");
  Display.addChild("escribirMensaje");
  TweenLite.to(Display.get("escribirMensaje"), 0.01, {
            alpha: 0,
            x: -1000,
            y: 204,
            onComplete: function(){
                TweenLite.to(Display.get("escribirMensaje"), 0.5, {
                x: 233,
                alpha:1
                });
            }
        });
};
 
function verificarEstadoBtnSubmenus() 
{
  if(nivelSubMenu == 1)
  {
       TweenLite.to(Display.get("subMenu1.menuBoton1"), 1, {
        scaleX: 0.7,
        scaleY: 0.7
        });
  }
    
  if(nivelSubMenu == 2)
  {
       TweenLite.to(Display.get("subMenu1.menuBoton2"), 1, {
        scaleX: 0.7,
        scaleY: 0.7
        });
  }
    
  if(nivelSubMenu == 3)
  {
       TweenLite.to(Display.get("subMenu1.menuBoton3"), 1, {
        scaleX: 0.7,
        scaleY: 0.7
        });
  }
    
  if(nivelSubMenu == 4)
  {
       TweenLite.to(Display.get("subMenu1.menuBoton4"), 1, {
        scaleX: 0.7,
        scaleY: 0.7
        });
  }
}
 
function cerrarVentanaEscribirCont3pag1() 
{
    cerrarBotonVerificar();
     Display.removeChild("mascara");
     TweenLite.to(Display.get("escribirMensaje"), 0.5, {
            x: 1500,
            onComplete: function()
                {
                  Display.removeChild("escribirMensaje");
                }
         });
        
        verificarEstadoBtnSubmenus();
    
        valorTotalEstadoPuntero = estadoPuntero1 + estadoPuntero2 + estadoPuntero3 + estadoPuntero4;
        
        if(valorTotalEstadoPuntero >= 4)
        {
            if(nivelMenu == 3)
            {
                Display.get("menu.menuPuntero").show();
                TweenLite.to(Display.get("menu.menuPuntero"), 1, {
                x: 218,
                onComplete: function()
                    {
                      Display.get("menu.menuPuntero").play();
                    }
                });
            }
            
            if(nivelMenu == 4)
            {
                Display.get("menu.menuPuntero").show();
                TweenLite.to(Display.get("menu.menuPuntero"), 1, {
                x: 288,
                onComplete: function()
                    {
                      Display.get("menu.menuPuntero").play();
                    }
                });
            }
            
            if(nivelMenu == 5)
            {
                Display.get("menu.menuPuntero").show();
                TweenLite.to(Display.get("menu.menuPuntero"), 1, {
                x: 362,
                onComplete: function()
                    {
                      Display.get("menu.menuPuntero").play();
                    }
                });
            }
            
            if(nivelMenu == 6)
            {
                /*Display.get("menu.menuPuntero").show();
                TweenLite.to(Display.get("menu.menuPuntero"), 1, {
                x: 430,
                onComplete: function()
                    {
                      Display.get("menu.menuPuntero").play();
                    }
                });*/
            }
            
            estadoPuntero1 = 0;
            estadoPuntero2 = 0;
            estadoPuntero3 = 0;
            estadoPuntero4 = 0;
            valorTotalEstadoPuntero = 0;
            
            contMal2 = 0;
            contMal2b = 0;
            sumContMal = 0;
            estadoContMal = false;
            
            salirOver();
        }

};
//******************************// VALIDAR BUENAS Y MALAS //*******************//
function validarEstadoCampos()
{ 
  estadoVentanaActiviades = 1;
  cargarVentanaEscribirCont3pag1();
    
  if(estado == "gano")
  {
    Display.get("escribirMensaje").stop("bien");   
    Text.load("escribirMensaje", "Congratulations! Right answer!", "middle center size24 bold");
    Sound.play("media/mensajes/audio4");
    Event.click("escribirMensaje.cerrar", cerrarVentanaEscribirCont3pag1);
    Button.over("escribirMensaje.cerrar");
    cerrarBotonVerificar();
    //cerrarSubmenu();
    cargarOverBtnSubSeleccionado();
    estado = "";
  }    

  if(estado == "perdio")
  {
     Display.get("escribirMensaje").stop("mal");
     Text.load("escribirMensaje", "Sorry, try again! You can do it better!", "middle center size24 bold");
     Sound.play("media/mensajes/audio5");
     Event.click("escribirMensaje.cerrar", cerrarVentanaEscribirCont3pag1);
     Button.over("escribirMensaje.cerrar");
     cerrarBotonVerificar();
     //cerrarSubmenu();
     cargarOverBtnSubSeleccionado();
     estado = "";
  }
};

function cerrarVentanaActividades()
{ 
    moverContenidosSubmenu();
    TweenLite.to(Display.get("ventanaActividades"), 0.5, {
            x: 1500,
            onComplete: function()
                {
                   Display.removeChild("ventanaActividades");
                   subirSubmenu();
                }
         });
};
 
//*******************************************************************************//
//************************* VENTANA ACTIVIDADES *********************************//
//*******************************************************************************//

//*******************************************************************************//
function cargarBotonVerificar() 
{
  var btnVerificar = Display.addChild("botonVerificar"); 
  Button.over(btnVerificar);
  TweenLite.to(btnVerificar, 0.01, {
            alpha: 0,
            x: 805,
            y: 512,
            onComplete: function(){
                TweenLite.to(btnVerificar, 1, {
                x: 805,
                alpha:1
                });
                btnVerificar.play("inicio");
            }
        });
};
 
function cerrarBotonVerificar() 
{
    Display.get("ventanaActividades.botonVerificar").hide;
    Display.removeChild("botonVerificar");  
};


function cerrarSubmenu() 
{
  TweenMax.to(Display.get("subMenu1"), 1, {
        alpha:0,
        x: 0,
        y: 700
      });
}

function subirSubmenu() 
{
  TweenMax.to(Display.get("subMenu1"), 1, {
        alpha:1,
        x: 0,
        y: 570,
            onComplete: function(){
                /*TweenLite.to(Display.get("flecha"), 0.5, {
                alpha: 1
            });*/
          }
      });
     Display.get("subMenu1").play();
     cargarOverBtnSubSeleccionado();
    
}

/*global jQuery,console,Sound,window,navigator,Core,document,Display,Options,Timer,Event,TweenMax,Audio,Button,webkitSpeechRecognition*/
/*jshint -W020*/

/**
Controlar el flujo de los audios utilizados en la multimedia, reproducir los audios en los distintos navegadores, la libreria permite manejar un unico canal de audio.


@@class Sound
*/
(function ($) {

    Sound = {};

    var funcionRetornoAudioTerminado = function () {};
    var cargaAudioAjax = null;
    var estadoMute = false;
    var botonDeSonido = $();
    var estadosDeBotonSonido = {
        "normal": 0,
        "silencio": 1000
    };
    var tiposDeAudios = {
        'mp3': 'audio/mpeg',
        'ogg': 'audio/ogg',
        'wav': 'audio/wav',
        'aac': 'audio/aac',
        'm4a': 'audio/x-m4a'
    };
    var botonesPlay = [];
    var rutaAudiosDeBotones = {};
    var reconocimientoDeVoz;
    var botonMicrofono;
    var conteendorTextoReconocimiento = "";
    var listTextMicrophone = {};
    var textoValidarReconocimiento;
    var funcionRetornoReconocimiento;

    /**
    Habilita el microfono para poder realizar una grabación de audio y luego poder escucharla.
    @method Sound.microphone
    */
    Sound.microphone = function () {
        if (navegadorSoportaMedia()) {
            $("body").append("<video id='video' autoplay></video>");
            window.URL = window.URL || window.webkitURL;
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
            navigator.getUserMedia({
                video: true,
                audio: true
            }, function (media) {
                $("video").attr("src", window.URL.createObjectURL(media));
            }, function () {
                console.erro("paila no sirve");
            });
        } else {
            console.error("Sound.microphone: El navegador no soporta esta opcion.");
        }
    };

    function navegadorSoportaMedia() {
        return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
    }


    /**
    @method Sound.play
    @param rutaAudio {String} Ruta donde se encuentra el audio.
    @param funcionRetorno {Function} Funcion a ejecutar cuando termine el audio.
    @example
        //Para reproducir un audio llamado sonido
        Sound.play("media/presentacion/sonido");
        //Para retornar una funcion cuando finalize el audio
        Sound.play("media/sonido", finAudio);
        function finAudio (){
            console.log("audio finalizado");
        };  
    */
    Sound.play = function (rutaAudio, funcionRetorno) {
        try {
            reproducirAudio(rutaAudio, funcionRetorno);
        } catch (error) {
            console.error("Sound.play: " + error);
        }
    };

    /**
    Finaliza la ejecucion de un audio, limpia y elimina los audios qeu se hallan cargado.
    @method Sound.stop
    @example
        //Para detener todos los audios que se encuentre sonando
        stopAudio();
    */
    Sound.stop = function () {
        try {
            detenerSonido();
        } catch (error) {
            console.error("Sound.stop: " + error);
        }
    };

    /**
    Indica el estado del audio.
    @method Sound.mute
    @param estado {Boolean} Indica si se activa o no.
    @example
        //para silenciar por completo un audio 
        Sound.mute(false);
        //para reactivar un audio de nuevo y que este continue en la misma posicion
        Sound.mute(true);
    */
    Sound.mute = function (estado) {
        try {
            silenciarAudio(estado);
        } catch (error) {
            console.error("Sound.mute: " + error);
        }
    };

    /**
    Elemento que controla el sonido, se debe pasar un simbolo que en su linea de tiempo tenga los estados del boton como etiqueta (normal y silencio)
    o en posicion de segundos (0 segundos y 1 segundo).
    @method Sound.buttonMute
    @param elemento {(String|Object)} Elemento que controlara el sonido.
    @example
        //Para indicar que un simbolo realizara las funciones de boton de audio
        Sound.buttonMute("Menu.botonSonido");
    */
    Sound.buttonMute = function (elemento) {
        try {
            cargarBotonMute(elemento);
        } catch (error) {
            console.error("Sound.button: " + error);
        }
    };

    /**
    Permite reproducir audios por cada boton que se presione 
    @method Sound.playButtons
    */
    Sound.playButtons = function (botones, audios) {
        try {
            cargarBotonesDeAudios(botones, audios);
        } catch (error) {
            console.error("Sound.playButtons: " + error);
        }
    };

    /**
    @method Sound.stopPlayButtons
    */
    Sound.stopPlayButtons = function () {
        try {
            pausarAudiosBotonPlay();
        } catch (error) {
            console.error("Sound.stopPlayButtons: " + error);
        }
    };

    /**
    @method Sound.removePlayButtons
    */
    Sound.removePlayButtons = function () {
        try {
            eliminarBotonesDeAudios();
        } catch (error) {
            console.error("Sound.removePlayButtons: " + error);
        }
    };

    /**
    Carga una barra de audio con un control de volumen y progreso, ideal para las actividades de escucha
    @method Sound.controls
    */
    Sound.controls = function (contenedor) {
        try {
            cargarControlAudio(contenedor);
        } catch (error) {
            console.error("Sound.controls: " + error);
        }
    };

    /**
    Habilita el microfono para el reconocimiento de voz
    @method Sound.speak
    */
    Sound.speak = function (boton, contenedor) {
        try {
            cargarHablar(boton, contenedor);
        } catch (error) {
            console.error("Sound.speak: " + error);
        }
    };

    /**
    Carga el texto para validar en el reconocimiento de voz
    @method Sound.speakText
    */
    Sound.speakText = function (textoValidar, elemento) {
        try {
            cargarTextoReconocimiento(textoValidar, elemento);
        } catch (error) {
            console.error("Sound.speakText: " + error);
        }
    };

    /**
    Indica si el texto fue correcto o no 
    @method Sound.speakState
    */
    Sound.speakState = function (funcionRetorno) {
        try {
            cargarFuncionEstadoReconocimiento(funcionRetorno);
        } catch (error) {
            console.error("Sound.speakState: " + error);
        }
    };

    /**
    @method Sound.updateProgress
    @private
    */
    Sound.updateProgress = function (elementoAudio) {
        try {
            actualizarProgresoAudio(elementoAudio);
        } catch (error) {
            console.error("Sound.updateProgress: " + error);
        }
    };

    Sound.speakClose = function () {
        listTextMicrophone = {};
    }


    /**
    @method Sound.positionBarAudio
    @private
    */
    Sound.positionBarAudio = function (contenedorProgreso, evento) {
        try {
            posicionarBarraDeAudio(contenedorProgreso, evento);
        } catch (error) {
            console.error("Sound.positionBarAudio: " + error);
        }
    };

    function reproducirAudio(rutaAudio, funcionRetorno) {
        var extension = "mp3";
        if (Core.browser.firefox) {
            extension = "ogg";
        }
        rutaAudio += "." + extension;
        funcionRetornoAudioTerminado = funcionRetorno || function () {};
        detenerSonido();
        var tipoAudio = tiposDeAudios[extension];
        $.when(
            $.get(rutaAudio)
        ).then(function () {
            var etiquetaHtmlAudio = "<audio id='codecraft-audio' " +
                "preload='auto' type='" + tipoAudio + "'" +
                "src='" + rutaAudio + "'></audio>";
            $("body").append(etiquetaHtmlAudio);
            if ($('#codecraft-audio').length > 0) {
                document.getElementById('codecraft-audio').muted = estadoMute;
                document.getElementById('codecraft-audio').play();
                $('#codecraft-audio').bind('ended', sonidoFinalizado);
            }
        }, sonidoNoEncontrado);
    }

    function detenerSonido() {
        if (document.getElementById('codecraft-audio') !== null) {
            $('#codecraft-audio').unbind('ended');
            document.getElementById('codecraft-audio').pause();
            //document.getElementById('codecraft-audio').currentTime = 0;
        }
        $('#codecraft-audio').remove();
        if (cargaAudioAjax !== null) {
            cargaAudioAjax.abort();
            cargaAudioAjax = null;
        }
    }

    function silenciarAudio(estado) {
        estadoMute = estado;
        var elementoAudio = document.getElementById('codecraft-audio');
        if (elementoAudio !== null) {
            elementoAudio.muted = estadoMute;
        }
        cambiarEstadoDeBoton();
    }

    function cargarBotonMute(elemento) {
        botonDeSonido = Display.get(elemento);
        if (botonDeSonido.getLabelPosition("normal") !== undefined) {
            estadosDeBotonSonido.normal = botonDeSonido.getLabelPosition("normal");
        }
        if (botonDeSonido.getLabelPosition("silencio") !== undefined) {
            estadosDeBotonSonido.silencio = botonDeSonido.getLabelPosition("silencio");
        }
        cambiarEstadoDeBoton();
        botonDeSonido.bind("mouseup", botonSonidoPresionado);
        botonDeSonido.css({
            "cursor": "pointer"
        });
    }

    function sonidoFinalizado() {
        $('#codecraft-audio').remove();
        funcionRetornoAudioTerminado();
        funcionRetornoAudioTerminado = function () {};
    }

    function cambiarEstadoDeBoton() {
        if (estadoMute) {
            botonDeSonido.stop(estadosDeBotonSonido.silencio);
        } else {
            botonDeSonido.stop(estadosDeBotonSonido.normal);
        }
    }

    function botonSonidoPresionado() {
        silenciarAudio(!estadoMute);
    }

    function cargarBotonesDeAudios(botones, audios) {
        botonesPlay = botones;
        rutaAudiosDeBotones = {};
        for (var i = 0; i < botonesPlay.length; i++) {
            var botonActual = Display.get(botonesPlay[i]);
            var idDelBoton = botonActual.attr("id");
            rutaAudiosDeBotones[idDelBoton] = audios[i];
        }
        cargarAudiosBotonesPlay();
    }

    function cargarAudiosBotonesPlay() {
        for (var i = 0; i < botonesPlay.length; i++) {
            var botonActual = Display.get(botonesPlay[i]);
            var idDelBoton = botonActual.attr("id");
            var nombreDelAudio = rutaAudiosDeBotones[idDelBoton];
            cargarAudioBotonesPlayEnDom(nombreDelAudio, idDelBoton);
        }
        listenerBotonesPlay();
    }

    function cargarAudioBotonesPlayEnDom(rutaAudio, idDelAudio) {
        var extension = "mp3";
        if (Core.browser.firefox) {
            extension = "ogg";
        }
        rutaAudio += "." + extension;
        var tipoAudio = tiposDeAudios[extension];
        $.when(
            $.get(rutaAudio)
        ).then(function () {
            var funcionProgreso = ($("#" + idDelAudio).parent().parent().hasClass("boton-play")) ? "Sound.updateProgress(this)" : "";
            var etiquetaHtmlAudio = "<audio id='audio-" + idDelAudio + "' preload='auto' type='" + tipoAudio + "' src='" + rutaAudio + "' ontimeupdate='" + funcionProgreso + "'></audio>";
            $("body").append(etiquetaHtmlAudio);
            rutaAudiosDeBotones[idDelAudio] = document.getElementById('audio-' + idDelAudio);
            if ($('#audio-' + idDelAudio).length > 0) {
                $('#audio-' + idDelAudio).bind('ended', sonidoBotonesPlayFinalizado);
            }
        });
    }

    function listenerBotonesPlay() {
        Event.click(botonesPlay, botonPlayPresionado);
    }

    function botonPlayPresionado(botonPresionado) {
        var idDelBoton = botonPresionado.attr("id");
        var audioActual = rutaAudiosDeBotones[idDelBoton];
        if (tipoDeVariable(audioActual) !== "string") {
            if (audioActual.paused) {
                pausarAudiosBotonPlay();
                audioActual.play();
                botonPresionado.stop("pause");
            } else {
                audioActual.pause();
                audioActual.currentTime = 0;
                botonPresionado.stop("play");
            }
        }
    }

    function pausarAudiosBotonPlay() {
        for (var i = 0; i < botonesPlay.length; i++) {
            var botonActual = Display.get(botonesPlay[i]);
            var idDelBoton = botonActual.attr("id");
            var audioActual = rutaAudiosDeBotones[idDelBoton];
            if (tipoDeVariable(audioActual) !== "string") {
                botonActual.stop("play");
                audioActual.pause();
                audioActual.currentTime = 0;
            }
        }
    }

    function eliminarBotonesDeAudios() {
        pausarAudiosBotonPlay();
        for (var i = 0; i < botonesPlay.length; i++) {
            var botonActual = Display.get(botonesPlay[i]);
            var idDelBoton = botonActual.attr("id");
            $('#audio-' + idDelBoton).remove();
        }
        eliminarListenerBotonesPlay();
        botonesPlay = [];
        rutaAudiosDeBotones = {};
    }

    function eliminarListenerBotonesPlay() {
        Event.removeClick(botonesPlay);
    }

    function sonidoBotonesPlayFinalizado() {
        pausarAudiosBotonPlay();
    }



    var cargarControl;
    var contenedorControl = $("body");

    function cargarControlAudio(contenedor) {
        contenedorControl = Display.get(contenedor);
        cargarControl = true;
    }

    function sonidoNoEncontrado() {
        $('#codecraft-audio').remove();
        //reproducirAudio(Options.sound().rutaAudioVacio, funcionRetornoAudioTerminado);
        Timer.load(Options.sound().tiempoAudio, funcionRetornoAudioTerminado);
    }

    function tipoDeVariable(elemento) {
        return $.type(elemento);
    }

    function cargarHablar(boton, contenedor) {
        if (soportaReconocimiento()) {
            funcionRetornoReconocimiento = function () {};
            //textoValidarReconocimiento = "";
            botonMicrofono = Display.get(boton);
            botonMicrofono.stop("desactivado");
            //conteendorTextoReconocimiento = Display.get(contenedor);
            contenedor = Display.get(contenedor + "." + Options.containerText());
            if (contenedor.length > 0) {
                //conteendorTextoReconocimiento = contenedor;
            }
            reconocimientoDeVoz = new webkitSpeechRecognition();
            reconocimientoDeVoz.onresult = function (event) {
                if (event.results.length > 0) {
                    conteendorTextoReconocimiento = event.results[0][0].transcript;
                }
                validarTextoReconocimiento();
            };
            reconocimientoDeVoz.onend = function () {
                Timer.load(0.5, function () {
                    symbolCurrentMicrophone.stop("desactivado");
                });
            };
            reconocimientoDeVoz.onerror = function () {
                symbolCurrentMicrophone.stop("desactivado");
            };
            listenerDeReconocimientoDeVoz();
        }
    }

    function soportaReconocimiento() {
        if (Core.browser.chrome) {
            return true;
        }
        return false;
    }

    var currentMicrophone = null;
    var symbolCurrentMicrophone = null;

    function validarTextoReconocimiento() {
        textoValidarReconocimiento = listTextMicrophone[currentMicrophone];
        var textoContenedor = conteendorTextoReconocimiento.toLowerCase();
        var estadoRespuesta = false;
        if (textoContenedor === textoValidarReconocimiento) {
            estadoRespuesta = true;
        }
        //console.log(textoContenedor);
        //console.log(textoValidarReconocimiento);
        funcionRetornoReconocimiento(estadoRespuesta);
    }

    function listenerDeReconocimientoDeVoz() {
        Event.click(botonMicrofono, iniciarReconocimientoDeVoz);
        Button.over(botonMicrofono);
    }

    function iniciarReconocimientoDeVoz(microphonePress) {
        currentMicrophone = Display.getName(microphonePress);
        symbolCurrentMicrophone = microphonePress;
        microphonePress.stop("activado");
        reconocimientoDeVoz.lang = "en-US";
        reconocimientoDeVoz.start();
    }

    function cargarTextoReconocimiento(textoValidar, elemento) {
        listTextMicrophone[Display.getName(elemento)] = textoValidar.toLowerCase();
    }

    function cargarFuncionEstadoReconocimiento(funcionRetorno) {
        funcionRetornoReconocimiento = funcionRetorno;
    }

    function actualizarProgresoAudio(elementoAudio) {
        var idAudio = "control-audio-" + elementoAudio.id.substr(6);
        elementoAudio = document.getElementById(elementoAudio.id);
        var barraDeProgreso = $("#" + idAudio + " .barra-progreso");
        var sliderDeProgreso = $("#" + idAudio + " .slider-audio");
        var porcentajeAudio = (elementoAudio.currentTime / elementoAudio.duration);
        var tamanoBarra = sliderDeProgreso.outerWidth() * porcentajeAudio;
        barraDeProgreso.width(Math.round(tamanoBarra) + "px");
    }

    function posicionarBarraDeAudio(contenedorProgreso, evento) {
        var idAudio = contenedorProgreso.id.substr(21);
        var audioActual = rutaAudiosDeBotones[idAudio];
        var botonPlay = $("#" + idAudio);
        var contenedor = $("#" + contenedorProgreso.id);
        var tamanoContendor = contenedor.outerWidth();
        var posicionDelClick = evento.pageX - contenedor.offset().left;
        var porcentajeAudio = (posicionDelClick / tamanoContendor);
        posicionarAudio(idAudio, porcentajeAudio);
        if (audioActual.paused) {
            pausarAudiosBotonPlay();
            audioActual.play();
            botonPlay.stop("pause");
        }
    }

    function posicionarAudio(idAudio, porcentajeAudio) {
        var elementoAudio = document.getElementById("audio-" + idAudio);
        elementoAudio.currentTime = elementoAudio.duration * porcentajeAudio;
    }

})(jQuery);

