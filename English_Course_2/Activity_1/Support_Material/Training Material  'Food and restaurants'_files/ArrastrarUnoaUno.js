var ElementoArrastrarC5P2 = "ElementosArrastrarCorto";
var ElementoObjetivoC5P2 =  "ElementosArrastrarCorto";
var TextosC5P2 = [
    'Are you ready to order',
    'What do you recommend',
    'will have',
    'would you like',
    'some dessert',
    'Can I have the bill'
];
 

var PosicionesElementosC5P2X = [
    348,
    483,
    453,
    399,
    475,
    435
];

var PosicionesElementosC5P2Y = [
    224,
    255,
    317,
    348,
    442,
    472
];
 
var ElementosC5P21;
var Elementos2C5P2;

var Temporal1C5P2 = [];
var Temporal2C5P2 = [];

var malasArr2 = 0;

 
function menuCargar() 
{
     Options.collision({
        intentosMalos: 2,
        ocultarElementos: false
    });

    Display.addChild("Recuadro");
    Display.position("Recuadro", 282, 100);
    ElementosC5P21 = Display.addChildArray(ElementoArrastrarC5P2, "Stage", 6);
    Text.load(ElementosC5P21, TextosC5P2, "middle center");
    Elementos2C5P2 = Display.addChildArray(ElementoObjetivoC5P2, "Stage", 6);
    Temporal1C5P2 = ElementosC5P21;
    Temporal1C5P2 = Arrays.random(Temporal1C5P2);
    Display.positionArray(Temporal1C5P2, 180, 130, "x", 3);
    Temporal2C5P2 = Elementos2C5P2;

    Display.addChildArray(Temporal2C5P2);
    for (var f = 0; f < Temporal2C5P2.length; f++) 
    {
        Display.position(Temporal2C5P2[f], PosicionesElementosC5P2X[f], PosicionesElementosC5P2Y[f]);
    }
   
    Collision.load(ElementosC5P21, Elementos2C5P2);
    Collision.stateCollision(funcionX);
    Collision.finish(verificarFinalC5);
}

function funcionX(estado) 
{
    if (estado) 
    {
       
    } 
    else 
    {
        
        malasArr2++;
    }
}

function verificarFinalC5() 
{
   if(malasArr2 >= 4)
    {
      estado = "perdio";
    }
    else
    {
      estado = "gano";
    }
    
    estadoPuntero1 = 1;
    validarEstadoCampos();
}
