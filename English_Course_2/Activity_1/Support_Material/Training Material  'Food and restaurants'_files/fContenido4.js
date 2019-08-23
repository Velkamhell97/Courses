function verificarPagActual4() 
{ 
	 PaginaActualMenu4 = Presentation.getCurrentPage();
    
     
    if (nivelActiCont4 == 1) 
    { 
    
       estado = "";
       cerrarContenidosCont4();
         
       if(PaginaActualMenu4 == 1)
       {
          estado = ""; 
         cerrarContenidosCont4();
       }
         
       if(PaginaActualMenu4 == 2)
       {
         estado = "";
         juegoColisionCargar();
       }
    }
        
    else if (nivelActiCont4 == 2) 
    {  
       estado = "";
       cerrarContenidosCont4();
       //cargarBotonVerificar();
       //Event.click(Display.get("botonVerificar"), validacionCamposCont4Pag2);
        
        JESOpcionesBuenas = [
       "any",
       "some",
       "some",
       "any",
       "any",
       "some",
       "some",
       "some",
       "any"    
       ];
        
      buenasInput = 6;
    }
 
    else if (nivelActiCont4 == 3) 
    {
       estado = "";
       cerrarContenidosCont4();
        
       if(PaginaActualMenu4 == 1)
       {
         cerrarBotonVerificar();
       }
         
       if(PaginaActualMenu4 == 2)
       {
          cerrarBotonVerificar();
         //cargarBotonVerificar();
         //Event.click(Display.get("botonVerificar"), validacionCamposCont4Pag4);
           
       JESOpcionesBuenas = [
       "3",
       "1",
       "5",
       "2",
       "6",
       "4"   
       ];
        
      buenasInput = 4;
       }
    }
    
     else if (nivelActiCont4 == 4)  
     {  
       estado = "";
       cerrarContenidosCont4();
         
       if(PaginaActualMenu4 == 1)
       {
         juegoColisionAnimacionOut();
       }
        
       if(PaginaActualMenu4 == 2)
       {
         ArrastrarCont4Pag7();
       }
        
    }
    Display.zIndex("subMenu1");
    Display.zIndex("menu");
};

function cerrarContenidosCont4() 
{
    malasArr = 0;
    cerrarBotonVerificar();
    // ELEMENTOS DE COLISION INVISBLES EN EL SLIDE 2
    Display.removeChildArray(juegoColisionElementosMoverC4P2);
    Display.removeChild(ElementosColisionC4P2[0]);
    Display.removeChild(ElementosColisionC4P2[1]);
    Display.removeChild(ElementosColisionC4P2[2]);
    Display.removeChild(ElementosColisionC4P2[3]);
    Display.removeChild(ElementosColisionC4P2[4]);
    
    Display.removeChild("Recuadro2Texto1");
    Display.removeChildArray (ElementoArrastrar2);
    Display.removeChildArray (ElementoObjetivo2);
    Display.removeChildArray (TemporalP1);
    Display.removeChildArray (TemporalP2);
};

// CIERRA LA VENTANA DEL CONTENEDOR ACTUAL EN ESTE CASO LA 4
function salirContenido4() 
{
      cerrarContenidosCont4();
      TweenLite.to(Display.get(menuContenidos[3]), 1, {
            alpha: 1,
            x: -1500,
            y: 80,
            onComplete: function () 
            {
              Display.removeChild(menuContenidos[3]);
            }
      });
        
        TweenLite.to(Display.get("globoIntro"), 1, {
                alpha: 1
            });
        
        salirOver();
        //cargarOverBtnSeleccionado(); 
};