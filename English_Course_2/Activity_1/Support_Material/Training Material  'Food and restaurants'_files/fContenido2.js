
function verificarPagActual2() 
{
    PaginaActual = Presentation.getCurrentPage();
    
    /******************************************************************/
    /************************** Act 1 CONTENIDO 1**********************/
    if (PaginaActual == 2) 
    { // Pagina 2
             
    }
}

function salirContenido2() 
{
      TweenLite.to(Display.get(menuContenidos[1]), 1, {
            alpha: 1,
            x: -1500,
            y: 80,
            onComplete: function () 
            {
              Display.removeChild(menuContenidos[1]);
            }
      });
        
        TweenLite.to(Display.get("globoIntro"), 1, {
                alpha: 1
            });
        
      Display.get("menu.menuPuntero").show();
      TweenLite.to(Display.get("menu.menuPuntero"), 1, {
        x: 144,
        onComplete: function()
            {
              Display.get("menu.menuPuntero").play();
            }
        });
    
        salirOver();
        //cargarOverBtnSeleccionado(); 
};
 