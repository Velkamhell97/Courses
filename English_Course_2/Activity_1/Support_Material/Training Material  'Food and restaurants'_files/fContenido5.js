function verificarPagActual5() 
{    
    PaginaActualMenu5 = Presentation.getCurrentPage();
    cerrarContenidosCont5();
    /************************** Act 1 CONTENIDO 1**********************/
    if (nivelActiCont5 == 1) 
    {
       
      if (PaginaActualMenu5 == 1) 
      { 
         estado = "";
         cerrarContenidosCont5();
      }
        
      if (PaginaActualMenu5 == 2) 
      { 
         cerrarBotonVerificar();
         estado = "";
         menuCargar();
      }
    }
     
    else if (nivelActiCont5 == 2) 
    {
         cerrarBotonVerificar();
         estado = "";
         //cargarBotonVerificar();
         //Event.click(Display.get("botonVerificar"), validacionCamposCont5Pag2);
        
       JESOpcionesBuenas = [
       "1",
       "4",
       "2",
       "3"
       ];
    
       buenasInput = 3;
    }
    
    else if (nivelActiCont5 == 3) 
    {
         cerrarBotonVerificar();
         estado = "";
         cargarJuegoListaSelect();
    }
    

    else if (nivelActiCont5 == 4) 
    { 
        cerrarBotonVerificar();
        
       if(PaginaActualMenu5 == 1)
       {
         if(estadoArrayFV2 == 1)
         {
          estado = ""; 
          Display.removeChildArray(JuegoFVBotones2);
          estadoArrayFV2 = 0;
         }
       }
         
       if(PaginaActualMenu5 == 2)
       {
         cerrarBotonVerificar();
         estado = ""; 
         cargarJuegoFV2();
         estadoArrayFV2 = 1;
       }
    }
  
    Display.zIndex("subMenu1");
    Display.zIndex("menu");
};
  d

function salirContenido5() 
{
      cerrarContenidosCont5();
      TweenLite.to(Display.get(menuContenidos[4]), 1, {
            alpha: 1,
            x: -1500,
            y: 80,
            onComplete: function () 
            {
              Display.removeChild(menuContenidos[4]);
            }
      });
        
        TweenLite.to(Display.get("globoIntro"), 1, {
                alpha: 1
            });
        
        salirOver();
        //cargarOverBtnSeleccionado(); 
};

function cerrarContenidosCont5() 
{
      cerrarBotonVerificar();
      Display.removeChild("Recuadro");
      Display.removeChildArray (ElementoArrastrarC5P2);
      Display.removeChildArray (ElementoObjetivoC5P2);
      Display.removeChildArray (Temporal1C5P2);
      Display.removeChildArray (Temporal2C5P2);
};

