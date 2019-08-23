/*------------------- Actividad 1 Arrastrar y Soltar Boton 7 --------------- */
function JASActividad1bRay() {
	//bien
    PosicionFinalPresentacion=false;
	elementosBotonesTotal = [];
	elementosBotones = [];
	elementosBotones2 = [];
	cantidadPuntos = 9;
	Options.collision({
		intentosMalos: 9,
		ocultarElementos: false

	});
	UpNivelMenu();
	removeJuegoColision();
	estadoJuego1bUnomuchos = true;
	juegoColisionCantidadActividades = 2;
	PosicionArrayJuegoMaM = 0;
	ElementosArrastrar = "mcRecuadroPronun";
	ElementosColision = [
 "mcRecuadroColision1",
 "mcRecuadroColision2",
 "mcRecuadroColision3"
];

	JASArrayAudios = [
 "media/pronunciacion/Practica1d/botones2/U",
 "media/pronunciacion/Practica1d/botones2/um",
 "media/pronunciacion/Practica1d/botones2/A",
 "media/pronunciacion/Practica1d/botones2/July",
 "media/pronunciacion/Practica1d/botones2/Month",
 "media/pronunciacion/Practica1d/botones2/Grew",
 "media/pronunciacion/Practica1d/botones2/Stood",
 "media/pronunciacion/Practica1d/botones2/Shoot",
 "media/pronunciacion/Practica1d/botones2/One",
 "media/pronunciacion/Practica1d/botones2/Understand",
 "media/pronunciacion/Practica1d/botones2/ScubaDiving",
 "media/pronunciacion/Practica1d/botones2/Wrung",
 "media/pronunciacion/Practica1d/botones2/Shoot"


 ];

	PosicionesElementosX1 = [
    593,
    414,
    235
];

	PosicionesElementosY1 = [
    309,
    309,
    309
];

	//Si no se necesita textos dejar vacio el array
	juegoColisionTextosMover = [
 "<u>Ju</u>ly",
"Month",
"Grew",
"Stood",
"Shoot",
"Won",
"<u>Un</u>derstand",
"<u>Scu</u>ba diving",
"Wrung",
"Shook"
];
	//PosicionesInicialElementosX1 = 109;
	//PosicionesInicialElementosY1 = 116;
	PosicionesInicialElementosX2 = 139;
	PosicionesInicialElementosY2 = 148;
	//los elementos se almacenan por el nombre de instancia de colisionColision seguido por un numero consecutivo
	//se debe ingresar el texto del elemento mover correcto, o la instancia del objeto mover
	juegoColisionElementosCorrectos = {
		"mcRecuadroColision3": [
        "<u>Ju</u>ly",
        "Stood",
        "Shook"
    ],
		"mcRecuadroColision2": [
        "Grew",
        "Shoot",
        "<u>Scu</u>ba diving"
    ],
		"mcRecuadroColision1": [
        "Month",
        "Won",
        "<u>Un</u>derstand",
        "Wrung"
    ]
	};

	juegoColisionMensajes = {
		"perdio": "You can do better. Try  again.",
		"gano": "Very good job. Keep it up."
	};
	juegoColisionElementosColision = [];
	juegoColisionElementosMover = [];
	juegoColisionIntentos = 1;
	juegoColisionContenedorIntentos = "contenido7.Intentos";
	juegoColisionEstadoJuego = "perdio";
	estadoColisionFinal = false;
	ArrastrarSoltar6 = new juegoColisionCargar();
}

/************************* fin juego 1 Arrastrar y soltar Boton 7 ****************************/

/*------------------- Actividad 11 Arrastrar y Soltar Boton 7 --------------- */
function JASActividad11b() {
	//bien
    PosicionFinalPresentacion=true;
	elementosBotonesTotal = [];
	elementosBotones = [];
	elementosBotones2 = [];
	UpNivelMenu();
	removeJuegoColision();
	estadoJuego11bUnomuchos = true;
	PosicionArrayJuegoMaM = 1;
	ElementosArrastrar = "mcRecuadroPronun";
	ElementosColision = [
 "mcRecuadroColision1",
 "mcRecuadroColision2",
 "mcRecuadroColision3"
];

	JASArrayAudios = [
 "media/pronunciacion/Practica1d/botones3/U",
 "media/pronunciacion/Practica1d/botones3/um",
 "media/pronunciacion/Practica1d/botones3/A",
 "media/pronunciacion/Practica1d/botones3/Shut",
 "media/pronunciacion/Practica1d/botones3/February",
 "media/pronunciacion/Practica1d/botones3/Stung",
 "media/pronunciacion/Practica1d/botones3/Understood",
 "media/pronunciacion/Practica1d/botones3/June",
 "media/pronunciacion/Practica1d/botones3/Cut",
 "media/pronunciacion/Practica1d/botones3/Blew"
        
 ];

	PosicionesElementosX1 = [
    593,
    414,
    235
];

	PosicionesElementosY1 = [
    309,
    309,
    309
];

	//Si no se necesita textos dejar vacio el array
	juegoColisionTextosMover = [
"Shut",
"Feb<u>ru</u>ary",
"Stung",
"Under<u>stood</u>",
"June",
"Cut",
"Blew"

];


	PosicionesInicialElementosX1 = 178;
	PosicionesInicialElementosY1 = 116;
	PosicionesInicialElementosX2 = 209;
	PosicionesInicialElementosY2 = 148;

	//los elementos se almacenan por el nombre de instancia de colisionColision seguido por un numero consecutivo
	//se debe ingresar el texto del elemento mover correcto, o la instancia del objeto mover
	juegoColisionElementosCorrectos = {
		"mcRecuadroColision3": [
        "Under<u>stood</u>"
    ],
		"mcRecuadroColision2": [
        "Feb<u>ru</u>ary",
"June",
"Blew"
    ],
		"mcRecuadroColision1": [
        "Shut",
"Stung",
"Cut"
    ]
	};

	juegoColisionMensajes = {
		"perdio": "You can do better. Try  again.",
		"gano": "Very good job. Keep it up."
	};
	juegoColisionElementosColision = [];
	juegoColisionElementosMover = [];
	juegoColisionIntentos = 1;
	juegoColisionContenedorIntentos = "contenido7.Intentos";
	juegoColisionEstadoJuego = "perdio";
	estadoColisionFinal = false;
	ArrastrarSoltar9 = new juegoColisionCargar();
}

/************************* fin juego 11 Arrastrar y soltar Boton 7 ****************************/
/*------------------- Actividad 2 Arrastrar y Soltar Boton 7 --------------- */
function JASActividad1c() {
	elementosBotonesTotal = [];
	elementosBotones = [];
	elementosBotones2 = [];
	juegoColisionCantidadActividades = 2;
	UpNivelMenu();
	removeJuegoColision();
	estadoJuego1bUnomuchos = true;
	PosicionArrayJuegoMaM = 0;
	ElementosArrastrar = "mcRecuadroPronun";
	ElementosColision = [
 "mcRecuadroColision1a",
 "mcRecuadroColision2a",
 "mcRecuadroColision3a"
];

	JASArrayAudios = [
        "media/pronunciacion/Practica1d/botones3/F",
        "media/pronunciacion/Practica1d/botones3/V",
        "media/pronunciacion/Practica1d/botones3/B",
        "media/pronunciacion/Practica1d/botones3/Bed",
        "media/pronunciacion/Practica1d/botones3/Listen",
        "media/pronunciacion/Practica1d/botones3/Leaf",
        "media/pronunciacion/Practica1d/botones3/February",
        "media/pronunciacion/Practica1d/botones3/Feed",
        "media/pronunciacion/Practica1d/botones3/Dinner",
        "media/pronunciacion/Practica1d/botones3/Midnight",
        "media/pronunciacion/Practica1d/botones3/December",
        "media/pronunciacion/Practica1d/botones3/Teeth",
        "media/pronunciacion/Practica1d/botones3/Exercise",
        "media/pronunciacion/Practica1d/botones3/Clean",
        "media/pronunciacion/Practica1d/botones3/Breakfast",
        "media/pronunciacion/Practica1d/botones3/Letter"
        
        
 ];

	PosicionesElementosX1 = [
    632,
    370,
    107
];

	PosicionesElementosY1 = [
    325,
    325,
    325
];
	//Si no se necesita textos dejar vacio el array
	juegoColisionTextosMover = [
"Bed",
"Listen",
"Geese",
"Leaf",
"February",
"Feed",
"Dinner",
"Midnight",
"December",
"Teeth",
"Exercise",
"Clean",
"Breakfast",
"Letter"
];

	PosicionesInicialElementosX1 = 109;
	PosicionesInicialElementosY1 = 116;
	PosicionesInicialElementosX2 = 89;
	PosicionesInicialElementosY2 = 148;
	//los elementos se almacenan por el nombre de instancia de colisionColision seguido por un numero consecutivo
	//se debe ingresar el texto del elemento mover correcto, o la instancia del objeto mover
	juegoColisionElementosCorrectos = {
		"mcRecuadroColision1a": [
  "Bed",
  "February",
  "Exercise",
  "Breakfast",
  "Letter"
    ],
		"mcRecuadroColision2a": [
  "Leaf",
  "Geese",
  "Feed",
  "Teeth",
  "Clean"
    ],
		"mcRecuadroColision3a": [
        "Midnight",
        "Dinner",
        "December"
    ]
	};

	juegoColisionMensajes = {
		"perdio": "You can do better. Try  again.",
		"gano": "Very good job. Keep it up."
	};
	juegoColisionElementosColision = [];
	juegoColisionElementosMover = [];
	juegoColisionIntentos = 1;
	juegoColisionContenedorIntentos = "contenido7.Intentos";
	juegoColisionEstadoJuego = "perdio";
	estadoColisionFinal = false;
	ArrastrarSoltar7 = new juegoColisionCargar();
}

/************************* fin juego 2 Arrastrar y soltar Boton 7 ****************************/
/*------------------- Actividad 3 Arrastrar y Soltar Boton 7 --------------- */
function JASActividad1d() {
    PosicionFinalPresentacion=false;
	elementosBotonesTotal = [];
	elementosBotones = [];
	elementosBotones2 = [];
	juegoColisionCantidadActividades = 2;
	UpNivelMenu();
	cantidadPuntos = 9;
	Options.collision({
		intentosMalos: 9,
		ocultarElementos: false

	});
	PosicionArrayJuegoMaM = 1;
	NivelUpMenuPrincipal();
	removeJuegoColision();
	estadoJuego1bUnomuchos = true;
	ElementosArrastrar = "mcRecuadroPronun";
	ElementosColision = [
 "mcRecuadroColision1a",
 "mcRecuadroColision2a",
 "mcRecuadroColision3a"
];

	JASArrayAudios = [
        "media/pronunciacion/Practica2d/botones1/F",
        "media/pronunciacion/Practica2d/botones1/V",
        "media/pronunciacion/Practica2d/botones1/B",
        "media/pronunciacion/Practica2d/botones1/Dive",
        "media/pronunciacion/Practica2d/botones1/February",
        "media/pronunciacion/Practica2d/botones1/Fall",
        "media/pronunciacion/Practica2d/botones1/November",
        "media/pronunciacion/Practica2d/botones1/Feed",
        "media/pronunciacion/Practica2d/botones1/Bring",
        "media/pronunciacion/Practica2d/botones1/Forgot",
        "media/pronunciacion/Practica2d/botones1/Vacation",
        "media/pronunciacion/Practica2d/botones1/Forgave",
        "media/pronunciacion/Practica2d/botones1/Build"
        
 ];

	PosicionesElementosX1 = [
    227,
    406,
    585
];

	PosicionesElementosY1 = [
    309,
    309,
    309
];
	//Si no se necesita textos dejar vacio el array
	juegoColisionTextosMover = [
"Di<u>v</u>e",
"Fe<u>b</u>ruary",
"<u>F</u>all",
"No<u>v</u>ember",
"<u>F</u>eed",
"<u>B</u>ring",
"<u>F</u>orgot",
"<u>V</u>acation",
"Forga<u>v</u>e",
"<u>B</u>uild"
];


	PosicionesInicialElementosX1 = 109;
	PosicionesInicialElementosY1 = 116;
	PosicionesInicialElementosX2 = 129;
	PosicionesInicialElementosY2 = 148;
	//los elementos se almacenan por el nombre de instancia de colisionColision seguido por un numero consecutivo
	//se debe ingresar el texto del elemento mover correcto, o la instancia del objeto mover
	juegoColisionElementosCorrectos = {
		"mcRecuadroColision1a": [
     "<u>F</u>all",
     "<u>F</u>eed",
     "<u>F</u>orgot"
    ],
		"mcRecuadroColision2a": [
        "Di<u>v</u>e",
        "No<u>v</u>ember",
        "<u>V</u>acation",
        "Forga<u>v</u>e"

    ],
		"mcRecuadroColision3a": [
        "Fe<u>b</u>ruary",
        "<u>B</u>ring",
        "<u>B</u>uild"
    ]
	};

	juegoColisionMensajes = {
		"perdio": "You can do better. Try  again.",
		"gano": "Very good job. Keep it up."
	};
	juegoColisionElementosColision = [];
	juegoColisionElementosMover = [];
	juegoColisionIntentos = 1;
	juegoColisionContenedorIntentos = "contenido7.Intentos";
	juegoColisionEstadoJuego = "perdio";
	estadoColisionFinal = false;
	ArrastrarSoltar8 = new juegoColisionCargar();
}

/*------------------- FIN Actividad 3 Arrastrar y Soltar Boton 7 --------------- */
/*------------------- Actividad 3 Arrastrar y Soltar Boton 7 --------------- */
function JASActividad12d() {
    PosicionFinalPresentacion=true;
	elementosBotonesTotal = [];
	elementosBotones = [];
	elementosBotones2 = [];
	UpNivelMenu();
	NivelUpMenuPrincipal();
	removeJuegoColision();
	Options.positionArray({
		distanciaEntreElementos: 2
	});
	juegoColisionCantidadActividades = 2;
	PosicionArrayJuegoMaM = 2;
	estadoJuego1bUnomuchos = true;
	ElementosArrastrar = "mcRecuadroPronun";
	ElementosColision = [
 "mcRecuadroColision1b",
 "mcRecuadroColision2b",
 "mcRecuadroColision3b"
];

	JASArrayAudios = [
        
        "media/pronunciacion/Practica2d/botones2/F",
        "media/pronunciacion/Practica2d/botones2/V",
        "media/pronunciacion/Practica2d/botones2/B",
        "media/pronunciacion/Practica2d/botones2/Fly",
        "media/pronunciacion/Practica2d/botones2/ScubaDiving",
        "media/pronunciacion/Practica2d/botones2/November",
        "media/pronunciacion/Practica2d/botones2/Drove",
        "media/pronunciacion/Practica2d/botones2/Broke",
        "media/pronunciacion/Practica2d/botones2/Fight",
        "media/pronunciacion/Practica2d/botones2/ScubaDiving",
        "media/pronunciacion/Practica2d/botones2/Finishing",
        "media/pronunciacion/Practica2d/botones2/Have",
        "media/pronunciacion/Practica2d/botones2/Left",
        "media/pronunciacion/Practica2d/botones2/Weave"
        
 ];

	PosicionesElementosX1 = [
    227,
    406,
    585
];

	PosicionesElementosY1 = [
    316,
    316,
    316
];
	//Si no se necesita textos dejar vacio el array
	juegoColisionTextosMover = [
"<u>F</u>ly",
"Scu<u>b</u>a diving",
"No<u>v</u>ember",
"Dro<u>ve</u>",
"<u>B</u>roke",
"<u>F</u>ight",
"Scuba di<u>v</u>ing",
"<u>F</u>inishing",
"Ha<u>v</u>e",
"Le<u>f</u>t",
"Wea<u>v</u>e"
];
	PosicionesInicialElementosX1 = 0;
	PosicionesInicialElementosY1 = 116;
	PosicionesInicialElementosX2 = 80;//mover elemento
	PosicionesInicialElementosY2 = 148;
	//los elementos se almacenan por el nombre de instancia de colisionColision seguido por un numero consecutivo
	//se debe ingresar el texto del elemento mover correcto, o la instancia del objeto mover
	juegoColisionElementosCorrectos = {
		"mcRecuadroColision1b": [
        "<u>F</u>ly",
        "Le<u>f</u>t",
        "<u>F</u>ight",
        "<u>F</u>inishing"
    ],
		"mcRecuadroColision2b": [
            "Scuba di<u>v</u>ing",
            "No<u>v</u>ember",
            "Ha<u>v</u>e",
            "Dro<u>ve</u>",
            "Wea<u>v</u>e"
    ],
		"mcRecuadroColision3b": [
            "Scu<u>b</u>a diving",
            "<u>B</u>roke"
    ]
	};

	juegoColisionMensajes = {
		"perdio": "You can do better. Try  again.",
		"gano": "Very good job. Keep it up."
	};
	juegoColisionElementosColision = [];
	juegoColisionElementosMover = [];
	juegoColisionIntentos = 1;
	juegoColisionContenedorIntentos = "contenido7.Intentos";
	juegoColisionEstadoJuego = "perdio";
	estadoColisionFinal = false;
	ArrastrarSoltar10 = new juegoColisionCargar();
}
/*------------------- Actividad 4 Arrastrar y Soltar Boton 7 --------------- */
function JASActividad1e() {
    PosicionFinalPresentacion = true;
	elementosBotonesTotal = [];
	elementosBotones = [];
	elementosBotones2 = [];
	UpNivelMenu();
	removeJuegoColision();
	juegoColisionCantidadActividades = 1;
	estadoJuego1bUnomuchos = true;
	PosicionArrayJuegoMaM = 0;
	cantidadPuntos = 4;
	Options.collision({
		intentosMalos: 4,
		ocultarElementos: false

	});
	ElementosArrastrar = "mcRecuadroPronun";
	ElementosColision = [
 "mcRecuadroColision4",
 "mcRecuadroColision5",
 "mcRecuadroColision6",
 "mcRecuadroColision7"
];

	JASArrayAudios = [
        "media/pronunciacion/Practica3d/botones/audio1",
        "media/pronunciacion/Practica3d/botones/audio1",
        "media/pronunciacion/Practica3d/botones/audio1",
        "media/pronunciacion/Practica3d/botones/audio1",
        "media/pronunciacion/Practica3d/botones/January",
        "media/pronunciacion/Practica3d/botones/November",
        "media/pronunciacion/Practica3d/botones/August",
        "media/pronunciacion/Practica3d/botones/Swimming",
        "media/pronunciacion/Practica3d/botones/Arise",
        "media/pronunciacion/Practica3d/botones/JetSking",
        "media/pronunciacion/Practica3d/botones/July",
        "media/pronunciacion/Practica3d/botones/Vacation",
        "media/pronunciacion/Practica3d/botones/Become",
        "media/pronunciacion/Practica3d/botones/Decade"
        
 ];
	PosicionesElementosX1 = [
    152,
    331,
    510,
   689
];

	PosicionesElementosY1 = [
    308,
    308,
    308,
    308,
];
	//Si no se necesita textos dejar vacio el array
	juegoColisionTextosMover = [
"<u>Jan</u>uary",
"No<u>vem</u>ber",
"Au<u>gust</u>",
"<u>Swimm</u>ing",
"A<u>rise</u>",
"<u>Jet</u> skiing",
"<u>Ju</u>ly",
"Va<u>ca</u>tion",
"Be<u>come</u>",
"<u>Deca</u>de"
];
	PosicionesInicialElementosX2 = 139;
	PosicionesInicialElementosY2 = 148;
	//los elementos se almacenan por el nombre de instancia de colisionColision seguido por un numero consecutivo
	//se debe ingresar el texto del elemento mover correcto, o la instancia del objeto mover

	juegoColisionElementosCorrectos = {
		"mcRecuadroColision4": [
        "Au<u>gust</u>",
        "<u>Jet</u> skiing",
        "<u>Swimm</u>ing",
        "<u>Deca</u>de"


    ],
		"mcRecuadroColision5": [
        "A<u>rise</u>",
        "<u>Ju</u>ly",
        "Be<u>come</u>"

    ],
		"mcRecuadroColision6": [
        "Va<u>ca</u>tion",
        "No<u>vem</u>ber"


    ],
		"mcRecuadroColision7": [
         "<u>Jan</u>uary"

    ]
	};

	juegoColisionMensajes = {
		"perdio": "You can do better. Try  again.",
		"gano": "Very good job. Keep it up."
	};
	juegoColisionElementosColision = [];
	juegoColisionElementosMover = [];
	juegoColisionIntentos = 1;
	juegoColisionContenedorIntentos = "contenido7.Intentos";
	juegoColisionEstadoJuego = "perdio";
	estadoColisionFinal = false;
	ArrastrarSoltar81 = new juegoColisionCargar();
}

/*------------------- FIN Actividad 4 Arrastrar y Soltar Boton 7 --------------- */
