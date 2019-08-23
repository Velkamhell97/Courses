function verificarPagActual() 
{
    paginaCont1 = 0;
    PaginaActual = Presentation.getCurrentPage();
    
    /******************************************************************/
    /************************** Act 1 CONTENIDO 1**********************/
    if (PaginaActual == 4) 
    { // Pagina 4
        Display.addChild("caja1");
        TweenMax.to(Display.get("caja1"), 0.01, {
        alpha:0,
        y: 180,
        onComplete: function () 
        {
            TweenMax.to(Display.get("caja1"), 1, {
            alpha: 1});
            Display.get("caja1").play();
        }
      });
        
        Event.click(btnContenido1Pag4, cargarAudioCont1Pag4);
    }
    
    /******************************************************************/
    /************************** Act 2 CONTENIDO 1**********************/
    if (PaginaActual == 5) 
    { // Pagina 5
        Display.addChild("caja2");
        TweenMax.to(Display.get("caja2"), 0.01, {
        alpha:0,
        y: 190,
        onComplete: function () 
        {
            TweenMax.to(Display.get("caja2"), 1, {
            alpha: 1});
            Display.get("caja2").play();
        }
      });
        Event.click(btnContenido1Pag5, cargarAudioCont1Pag5);
    }
    
    /******************************************************************/
    /************************** Act 3 CONTENIDO 1**********************/
    if (PaginaActual == 6) 
    { // Pagina 6
        Display.addChild("caja3");
        TweenMax.to(Display.get("caja3"), 0.01, {
        alpha:0,
        y: 170,
        onComplete: function () 
        {
            TweenMax.to(Display.get("caja3"), 1, {
            alpha: 1});
            Display.get("caja3").play();
        }
      });
        Event.click(btnContenido1Pag6, cargarAudioCont1Pag6);
    }
    
    /******************************************************************/
    /************************** Act 4 CONTENIDO 1**********************/
    if (PaginaActual == 7) 
    { // Pagina 7
        Display.addChild("caja4");
        TweenMax.to(Display.get("caja4"), 0.01, {
        alpha:0,
        y: 110,
        onComplete: function () 
        {
            TweenMax.to(Display.get("caja4"), 1, {
            alpha: 1});
            Display.get("caja4").play();
        }
      });
        Event.click(btnContenido1Pag7, cargarAudioCont1Pag7);
    }
    
    /******************************************************************/
    /************************** Act 5 CONTENIDO 1**********************/
    if (PaginaActual == 8) 
    { // Pagina 8
        Display.addChild("caja5");
        TweenMax.to(Display.get("caja5"), 0.01, {
        alpha:0,
        y: 110,
        onComplete: function () 
        {
            TweenMax.to(Display.get("caja5"), 1, {
            alpha: 1});
            Display.get("caja5").play();
        }
      });
        Event.click(btnContenido1Pag8, cargarAudioCont1Pag8);
    }
    
    /******************************************************************/
    /************************** Act 6 CONTENIDO 1**********************/
    if (PaginaActual == 10) 
    { // Pagina 10
        Display.addChild("caja6");
        TweenMax.to(Display.get("caja6"), 0.01, {
        alpha:0,
        y: 90,
        onComplete: function () 
        {
            TweenMax.to(Display.get("caja6"), 1, {
            alpha: 1});
            Display.get("caja6").play();
        }
      });
        Event.click(btnContenido1Pag10, cargarAudioCont1Pag10);
    }
    
    /******************************************************************/
    /************************** Act 7 CONTENIDO 1**********************/
    if (PaginaActual == 11) 
    { // Pagina 11
        Display.addChild("caja7");
        TweenMax.to(Display.get("caja7"), 0.01, {
        alpha:0,
        y: 110,
        onComplete: function () 
        {
            TweenMax.to(Display.get("caja7"), 1, {
            alpha: 1});
            Display.get("caja7").play();
        }
      });
        Event.click(btnContenido1Pag11, cargarAudioCont1Pag11);
    }
 
    /******************************************************************/
    /************************** Act 3 CONTENIDO 1**********************/
    if (PaginaActual == 17) 
    { // Pagina 11
      TweenLite.to(Display.get(menuContenidos[0]), 1, {
            alpha: 1,
            x: -1500,
            y: 80,
            onComplete: function () 
            {
              Display.addChild("fondo2");
              Display.zIndex("menu");
              TweenMax.to(Display.get("fondo2"), 0.1, {
              alpha: 0,
              onComplete: function () 
                        {
                          TweenMax.to(Display.get("fondo2"), 1, {
                          alpha: 1,
                          onComplete: function ()
                              {
                                  paginaCont1 = 17;
                                  Display.addChild("cuadroDialogo");
                                  Display.position("cuadroDialogo", 640, 70);
                                  Talk.load("cuadroDialogo");
                                  Talk.folderText("edge_includes/Textos/contenido1/dialogo1/Texto", 7);
                                  Talk.finish(cerrarTorta1);
                              }
                          });
                        }
              });
            }
        });
        
    }
    
    /******************************************************************/
    /************************** Act 8 CONTENIDO 1**********************/
    if (PaginaActual == 21) 
    { // Pagina 20
        Display.addChild("caja8");
        TweenMax.to(Display.get("caja8"), 0.01, {
        alpha:0,
        y: 110,
        onComplete: function () 
        {
            TweenMax.to(Display.get("caja8"), 1, {
            alpha: 1});
            Display.get("caja8").play();
        }
      });
        Event.click(btnContenido1Pag20, cargarAudioCont1Pag20);
    }
    
    /******************************************************************/
    /************************** Act 9 CONTENIDO 1**********************/
    if (PaginaActual == 22) 
    { // Pagina 21
        Display.addChild("caja9");
        TweenMax.to(Display.get("caja9"), 0.01, {
        alpha:0,
        y: 110,
        onComplete: function () 
        {
            TweenMax.to(Display.get("caja9"), 1, {
            alpha: 1});
            Display.get("caja9").play();
        }
      });
        Event.click(btnContenido1Pag21, cargarAudioCont1Pag21);
    }
    
     /******************************************************************/
    /************************** Act 10 CONTENIDO 1**********************/
    if (PaginaActual == 23) 
    { // Pagina 22
        Display.addChild("caja10");
        TweenMax.to(Display.get("caja10"), 0.01, {
        alpha:0,
        y: 110,
        onComplete: function () 
        {
            TweenMax.to(Display.get("caja10"), 1, {
            alpha: 1});
            Display.get("caja10").play();
        }
      });
        Event.click(btnContenido1Pag22, cargarAudioCont1Pag22);
    }
    
    /******************************************************************/
    /************************** Act 11 CONTENIDO 1**********************/
    if (PaginaActual == 24) 
    { // Pagina 23
        Display.addChild("caja11");
        TweenMax.to(Display.get("caja11"), 0.01, {
        alpha:0,
        y: 110,
        onComplete: function () 
        {
            TweenMax.to(Display.get("caja11"), 1, {
            alpha: 1});
            Display.get("caja11").play();
        }
      });
        Event.click(btnContenido1Pag23, cargarAudioCont1Pag23);
    }
    
    /******************************************************************/
    /************************** Act 3 CONTENIDO 1**********************/
    if (PaginaActual == 34) 
    { // Pagina 3
      TweenLite.to(Display.get(menuContenidos[0]), 1, {
            alpha: 1,
            x: -1500,
            y: 80,
            onComplete: function () 
            {
              Display.addChild("fondo3");
              Display.zIndex("menu");
              TweenMax.to(Display.get("fondo3"), 0.1, {
              alpha: 0,
              onComplete: function () 
                        {
                          TweenMax.to(Display.get("fondo3"), 1, {
                          alpha: 1,
                          onComplete: function ()
                              {
                                  paginaCont1 = 34;
                                  Display.addChild("globoDialogo2");
                                  Display.position("globoDialogo2", 710, 130);
                                  Talk.load("globoDialogo2");
                                  //Talk.folderText("edge_includes/textoGlobo2/Texto", 9);
                                  Talk.folderText("edge_includes/Textos/contenido1/dialogo2/Texto", 9);
                                  Talk.finish(cerrarTorta1);
                              }
                          });
                        }
              });
            }
        });
    }

    /******************************************************************/
    else 
    {
        cerrarTorta1();
    }
    /******************************************************************/
    Display.zIndex("menu");
};

function cargarAudioCont1Pag4(e) 
{
    var elementoActual = e.getName().substr(3, 2);
    Sound.play(audiosCont1Pag4[elementoActual]);
    
};

function cargarAudioCont1Pag5(e) 
{
    var elementoActual = e.getName().substr(3, 2);
    Sound.play(audiosCont1Pag5[elementoActual]);
    
};

function cargarAudioCont1Pag6(e) 
{
    var elementoActual = e.getName().substr(3, 2);
    Sound.play(audiosCont1Pag6[elementoActual]);
    

};

function cargarAudioCont1Pag7(e) 
{
    var elementoActual = e.getName().substr(3, 2);
    Sound.play(audiosCont1Pag7[elementoActual]);
    
  
};

function cargarAudioCont1Pag8(e) 
{
    var elementoActual = e.getName().substr(3, 2);
    Sound.play(audiosCont1Pag8[elementoActual]);
    
    
};

function cargarAudioCont1Pag10(e) 
{
    var elementoActual = e.getName().substr(3, 2);
    Sound.play(audiosCont1Pag10[elementoActual]);
    
    
};

function cargarAudioCont1Pag11(e) 
{
    var elementoActual = e.getName().substr(3, 2);
    Sound.play(audiosCont1Pag11[elementoActual]);
    
  
};

function cargarAudioCont1Pag20(e) 
{
    var elementoActual = e.getName().substr(3, 2);
    Sound.play(audiosCont1Pag20[elementoActual]);
    
   
};

function cargarAudioCont1Pag21(e) 
{
    var elementoActual = e.getName().substr(3, 2);
    Sound.play(audiosCont1Pag21[elementoActual]);
    
   
};

function cargarAudioCont1Pag22(e) 
{
    var elementoActual = e.getName().substr(3, 2);
    Sound.play(audiosCont1Pag22[elementoActual]);
    
   
};

function cargarAudioCont1Pag23(e) 
{
    var elementoActual = e.getName().substr(3, 2);
    Sound.play(audiosCont1Pag23[elementoActual]);
    
 
};

// REMUEVE POR COMPLETO ESTOS ELEMENTOS
function cerrarTorta1() 
{
    
    if (PaginaActual != 4) 
    {
      Display.removeChild("caja1");
    }
    
    if (PaginaActual != 5) 
    {
      Display.removeChild("caja2");
    }
    
    if (PaginaActual != 6) 
    {
      Display.removeChild("caja3");
    }
    
    if (PaginaActual != 7) 
    {
      Display.removeChild("caja4");
    }
    
    if (PaginaActual != 8) 
    {
      Display.removeChild("caja5");
    }
    
    if (PaginaActual != 10) 
    {
      Display.removeChild("caja6");
    }
    
    if (PaginaActual != 11) 
    {
      Display.removeChild("caja7");
    }
    
    if(paginaCont1 == 17)
    {
       Display.removeChild("cuadroDialogo");
       Display.removeChild("fondo2");
        
       Presentation.reload(18);
        
       TweenLite.to(Display.get(menuContenidos[0]), 1, {
            alpha: 1,
            x: 0,
            y: 80
        });
    }
    
    if (PaginaActual != 21) 
    {
      Display.removeChild("caja8");
    }
    
    if (PaginaActual != 22) 
    {
      Display.removeChild("caja9");
    }
    
    if (PaginaActual != 23) 
    {
      Display.removeChild("caja10");
    }
    
    if (PaginaActual != 24) 
    {
      Display.removeChild("caja11");
    }
    
     if(paginaCont1 == 34)
    {
       Display.removeChild("globoDialogo2");
       Display.removeChild("fondo3");
        
        TweenLite.to(Display.get("globoIntro"), 1, {
                alpha: 1
            });
        
        Display.get("menu.menuPuntero").show();
        TweenLite.to(Display.get("menu.menuPuntero"), 1, {
        x: 72,
        onComplete: function()
            {
              Display.get("menu.menuPuntero").play();
            }
        });
        
        salirOver();
        //cargarOverBtnSeleccionado();
    }
     
    paginaCont1 = 0;
};

function cerrarContenidosCont1() 
{
    Display.removeChild("globoDialogo2");
    Display.removeChild("cuadroDialogo");
    
    Display.removeChild("caja1");
    Display.removeChild("caja2");
    Display.removeChild("caja3");
    Display.removeChild("caja4");
    Display.removeChild("caja5");
    Display.removeChild("caja6");
    Display.removeChild("caja7");
    Display.removeChild("caja8");
    Display.removeChild("caja9");
    Display.removeChild("caja10");
    Display.removeChild("caja11");
};