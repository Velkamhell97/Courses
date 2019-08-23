// ***************************************  VARIABLES PREGUNTA 1 ******************************************** //
var ElementoArrastrar2 = "elementoArrastrarCont4";
var ElementoObjetivo2  = "elementoArrastrarCont4";
var TextosP1 = ['I', 'don’t', 'eat', 'much', 'meat',
                'There', 'are', 'a', 'lot', 'of', 'hot dogs',
                'Would', 'you', 'like', 'some', 'coffee?',
                'There', 'aren’t', 'many', 'restaurants', 'in', 'the', 'hotel',
                'I', 'don´t', 'like', 'any', 'tomatoes', 'in', 'my', 'salad',
                'Can', 'I', 'have', 'some', 'orange', 'juice', 'please?'
               ];

// POSICION FIJA DE LOS OBJETIVOS 
var PosicionesElementosP1X = [160, 250, 340, 430, 520,
                              160, 250, 340, 430, 520, 610,
                              160, 250, 340, 430, 520,
                              160, 250, 340, 430, 520, 610, 700,
                              160, 250, 340, 430, 520, 610, 700, 790,
                              160, 250, 340, 430, 520, 610, 700
                             ];
                                
var PosicionesElementosP1Y = [165, 165, 165, 165, 165, 
                              228, 228, 228, 228, 228, 228,
                              292, 292, 292, 292, 292,
                              353, 353, 353, 353, 353, 353, 353,
                              415, 415, 415, 415, 415, 415, 415, 415,
                              478, 478, 478, 478, 478, 478, 478
                             ];

// POSICION DINAMICA DE LOS ELEMENTOS DE ARRASTRE
                                   
var PosicionesElementosQ1X = [430, 520, 340, 160, 250,
                              430, 610, 250, 160, 520, 340,
                              250, 160, 520, 430, 340,
                              520, 250, 430, 340, 160, 700, 610,
                              160, 430, 340, 250, 520, 790, 700, 610,
                              250, 340, 160, 610, 700, 430, 520
                             ];
                                    
var PosicionesElementosQ1Y = [140, 140, 140, 140, 140,
                              205, 205, 205, 205, 205, 205,
                              270, 270, 270, 270, 270,
                              330, 330, 330, 330, 330, 330, 330,
                              390, 390, 390, 390, 390, 390, 390, 390,
                              455, 455, 455, 455, 455, 455, 455
                             ];

var ElementosP1; 
var ElementosP2;
var TemporalP1 = []; 
var TemporalP2 = [];

var malasArr = 0;

  
// ***************************************  VALIDA PREGUNTA 1 ******************************************** //
function ArrastrarCont4Pag7() 
{
     Options.collision({
        intentosMalos: 2,
        ocultarElementos: false});
    
    Display.addChild("Recuadro2Texto1");
    Display.position("Recuadro2Texto1", 160, 170);

    ElementosP1 = Display.addChildArray(ElementoArrastrar2, "Stage", 38);
    Text.load(ElementosP1, TextosP1, "middle center");
    
    ElementosP2 = Display.addChildArray(ElementoObjetivo2, "Stage", 38);
    
    TemporalP1 = ElementosP1;
    TemporalP2 = ElementosP2;

    Display.addChildArray(TemporalP2);
    for (var f = 0; f < TemporalP2.length; f++) 
    {
        Display.position(TemporalP2[f], PosicionesElementosP1X[f], PosicionesElementosP1Y[f]);
        Display.position(TemporalP1[f], PosicionesElementosQ1X[f], PosicionesElementosQ1Y[f]);
    }
   
    Collision.load(ElementosP1, ElementosP2);
    Collision.stateCollision(funcionP1X);
    Collision.finish(verificarfinal);
}


// **************************************************************************************************** //
 
// **************************************** ESTADO PREGUNTA 1************************************* //
function funcionP1X(estadoP1) 
{
    if (estadoP1) 
    {
        
    } else 
    {
        malasArr++;
    }
    
}

function verificarfinal() 
{
    if(malasArr >= 14)
    {
      estado = "perdio";
    }
    else
    {
      estado = "gano";
    }
    
    estadoPuntero4 = 1;
    validarEstadoCampos();
}
