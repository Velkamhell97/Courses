 
var JESValues = [];
var JESidFormulario; //id formulario

function verificarInputs()  
{  
    JESidFormulario = document.getElementById("forminput");
    
    JESValues.length = 0;
    
    for (var i = 0; i < JESidFormulario.length; ++i) 
    {
        var child = JESidFormulario[i];
        if (child.tagName == "INPUT") 
        {
            if (child.value !== "" && child.value !== " ") 
            {
                JESValues.push(child.value.replace(/^\s+|\s+$/gm, ''));
                
                if (JESValues.length == JESidFormulario.length) 
                {
                    Display.addChild("botonVerificar");
                    Display.position("botonVerificar", 805, 512);
                    Display.get("botonVerificar").play();
                    Event.click(Display.get("botonVerificar"), validacionCamposCont3Pag1);
                    
                } 
                else 
                {
                    // Do nothing..
                }
            }
        }
    }   
}

function validacionCamposCont3Pag1()  
{
    Event.removeClick(Display.get("botonVerificar"), validacionCamposCont3Pag1);
    
    var Texto;
    var espacios;
    
    for (var i = 0; i < JESValues.length; ++i) 
    {
        Texto = JESValues[i];
        espacios = Texto.replace(/^\s+|\s+$/gm, '');
        Texto = espacios.toLowerCase();
        
        if (Texto == JESOpcionesBuenas[i]) 
        {
            document.getElementById("input" + (i + 1)).setAttribute("readonly", "true");
            document.getElementById("input" + (i + 1)).className = "bien";
            document.getElementById("input" + (i + 1)).style.color="green";
            buenas++;
        } 
        else 
        {
            document.getElementById("input" + (i + 1)).setAttribute("readonly", "true");
            document.getElementById("input" + (i + 1)).className = "mal";
            document.getElementById("input" + (i + 1)).style.color="red";
        }
    }
    
     Timer.load(0.2, validarGanaOpierde);
};

function validarGanaOpierde()  
{ 
   if(buenas >= buenasInput)
   {
       estado = "gano";
   }
   else
   {
       estado = "perdio";
   }
    
   estadoPuntero1 = 1; 
   estadoPuntero2 = 1;
   estadoPuntero3 = 1;
   estadoPuntero2 = 1;
    
   validarEstadoCampos();
   buenas = 0;
   buenasInput = 0;
 
}
