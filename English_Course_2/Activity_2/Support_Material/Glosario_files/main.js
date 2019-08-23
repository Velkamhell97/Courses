/*global Adobe,window,Core*/
/*jshint -W020*/

/**
Permite una conexión con el API de Edge Animate

@class Adobe
@private
*/
(function (Edge) {

    Adobe = {};

    /**
    Se encarga de cargar la composicion utilizada en el codigo.
    
    @method Adobe.getComposition
    @param compId {String} Nombre de la composicion entregada en la funcion del AdobeEdge.bootstrapCallback.
    @private
    */
    Adobe.getComposition = function (compId) {
        return Edge.getComposition(compId);
    };

    Adobe.getSymbol = function (elemento) {
        return Edge.symbol.get(elemento);
    };

    Adobe.createSymbol = function (contenedor, nombreSimbolo) {
        return contenedor.createChildSymbol(nombreSimbolo, "Stage");
    };

    Adobe.getIdSymbol = function (simbolo) {
        return simbolo.ele.id;
    };

    Adobe.getCompositionSymbols = function (composicion) {
        return Edge.getCompositionSymbolDefns(composicion.compId);
    };

    Adobe.getPropertySymbol = function (nombreSimbolo) {

    };

})(window.AdobeEdge);
/*global Arrays,console,jQuery*/
/*jshint -W020*/

/**
Manipulación de arreglos.
@class Arrays
*/
(function ($) {

    Arrays = {};

    /**
    Realizar un indexOf dentro de un array, tambien puede realizar la busqueda dentro de un objeto pasando como parametro el key donde se busca.
    Si el elemento no se encuentra dentro del array se retorna -1.
    @method Arrays.indexOf
    @param array {Array} Arrays donde estan los elementos almacenados para la busqueda.
    @param elemento {*} Elemento que se desea buscar en el array.
    @param key {String} Llave del object donde se desea buscar.
    @return {Number} Number Posicion donde se encuentra el elemento.
    @example
        //se realiza una busqueda normal en un array
        var array = ["elemento1","elemento2", "elemento3"];
        Arrays.indexOf(array,"elemento2"); //retorna 1
        //se busca dentro de un multiarray
        var array = [
            ["elemento1","elemento2","elemento3"],
            ["elemento4","elemento5","elemento6"],
            ["elemento7","elemento8","elemento9"]
        ];
        Arrays.indexOf(array,"elemento5"); //retorna 1
        //se busca por key
        var array = [
            {"nombre": "elemento1", "posicion": 1},
            {"nombre": "elemento2", "posicion": 2},
            {"nombre": "elemento3", "posicion": 3}
        ];
        Arrays.indexOf(array, "elemento2", "nombre"); //retorna 1
    */
    Arrays.indexOf = function (array, elemento, key) {
        try {
            return buscarElementoEnArray(array, elemento, key);
        } catch (error) {
            console.error("Arrays.indexOf: " + error);
        }
    };

    /**
    @method Arrays.random
    @param array {Array} Array a desordenar.
    @return {Array} Array Array aleatorio.
    @example
        //desordenar un array
        var array = ["elemento1","elemento2","elemento3"];
        Arrays.random(array); //["elemento3","elemento1","elemento2"]
    */
    Arrays.random = function (array) {
        try {
            return arrayAleatorio(array);
        } catch (error) {
            console.error("Arrays.random: " + error);
        }
    };

    /**
    Rellena un array con el valor pasado en el parametro valor.
    @method Arrays.fill
    @param valor {*} Valor que almacenar en el array.
    @param [cantidad=10] {Number} Numero de campos del array a llenas.
    @param [posicionInicio=0] {Number} Numero de la posicion del array a iniciar el relleno.
    @return {Array} Array Nuevo array con el relleno.
    @example
        //se rellena un array con 10 boolean
        var array = Arrays.fill(true);
        //se rellena un array con 5 boolean
        var array = Arrays.fill(true,5);
        //se rellena un array con 5 boolean desde la posicion 2
        var array = Arrays.fill(true,5,2);// retorna [ , ,true,true,true,true,true]
    */
    Arrays.fill = function (valor, cantidad, posicionInio) {
        try {
            return rellenarArray(valor, cantidad, posicionInio);
        } catch (error) {
            console.error("Arrays.fill: " + error);
        }
    };

    function buscarElementoEnArray(array, elemento, key) {
        if (elemento === undefined) {
            return -1;
        }
        for (var i = 0; i < array.length; i++) {
            if (tipoDeVariable(array[i]) === 'array') {
                var posicionEnArray = buscarElementoEnArray(array[i], elemento, key);
                if (posicionEnArray !== -1) {
                    return i;
                }
            } else {
                if (key) {
                    if (array[i][key] === elemento) {
                        return i;
                    }
                }
                if (array[i] === elemento) {
                    return i;
                }
            }
        }
        return -1;
    }

    function arrayAleatorio(array) {
        var nuevoArray = [];
        var arrayClon = clonarArray(array);
        while (arrayClon.length > 0) {
            var numeroAlAzar = Math.floor((Math.random() * arrayClon.length));
            nuevoArray.push(arrayClon[numeroAlAzar]);
            arrayClon.splice(numeroAlAzar, 1);
        }
        return nuevoArray;
    }

    function clonarArray(array) {
        return array.slice();
    }

    function rellenarArray(valor, cantidad, posicionInio) {
        var array = [];
        cantidad = cantidad || 10;
        posicionInio = posicionInio || 0;
        for (var i = posicionInio; i < (posicionInio + cantidad); i++) {
            array.push(valor);
        }
        return array;
    }

    function tipoDeVariable(elemento) {
        return $.type(elemento);
    }

})(jQuery);
/*global console, jQuery,Button,Display,TweenMax,Options,Cubic*/
/*jshint -W020*/

/**
Maneja todo lo relacionado con los botones, animaciones o efectos de touch.
@class Button
*/
(function ($) {

    Button = {};

    var arrayElementosEfectoOver = [];

    /**
    Efecto de cursor activo para dar click.
    @method Button.click
    @param elemento {*} Elemento o elementos a aplicar el efecto del click.
    @param [estado=true] {(Boolean|Array)} Estado en que se encuentra el boton, false desactivado, true activo.
    @example
        //se pasa varios elementos para el estado true
        var elementos = ["elemento1","elemento2","elemento3"];
        Button.click(elementos);
        //se pasa varios elementos con diferentes estados
        var elementos = ["elemento1","elemento2","elemento3"];
        var estados = [true,false,true];
        Button.click(elementos,estados);
        //se pasa un unico elemento con un unico estado para desactivarlo
        Button.click("elemento",false);
    */
    Button.click = function (elemento, estado) {
        try {
            aplicarEfectoClick(elemento, estado);
        } catch (error) {
            console.error("Button.click: " + error);
        }
    };

    /**
    Para aplicar el efecto cuando el cursos se pase sobre un elemento diferente al que se trata de escalar se debe agregar un elemento en
    zonaDeColision, esto no es valido para elementos pasados dentro de un array.
    @method Button.over
    @param elemento {*} Elemento o elementos a aplicar el efecto de over.
    @param [estado=true] {(Boolean|Array)} Estado del efecto.
    @param zonaDeColision {(String|Object)} Elemento que activara el efecto de over.
    @example
        //over a un array de elementos
        var array = ["elemento1","elemento2"];
        Button.over(array);
        //se cambia el punto de colision
        Button.over("elemento",true,"elemento.colision");
        //se desactiva el over con false en el segundo parametro
        Button.over("elemento",false,"elemento.colision");
    */
    Button.over = function (elemento, estado, zonaDeColision) {
        try {
            aplicarEfectoOver(elemento, estado, zonaDeColision);
        } catch (error) {
            console.error("Button.over: " + error);
        }
    };

    function aplicarEfectoClick(elemento, activarClick) {
        activarClick = (activarClick === undefined) ? true : activarClick;
        if (tipoDeVariable(elemento) === 'array') {
            for (var i = 0; i < elemento.length; i++) {
                if (tipoDeVariable(activarClick) === 'array') {
                    aplicarEfectoClick(elemento[i], activarClick[i]);
                } else {
                    aplicarEfectoClick(elemento[i], activarClick);
                }
            }
        } else {
            elemento = Display.get(elemento);
            if (activarClick) {
                elemento.bind("mouseup", function () {
                    botonEfectoClickPresionado(elemento);
                });
                elemento.css({
                    "cursor": "pointer"
                });
            } else {
                elemento.unbind("mouseup", botonEfectoClickPresionado);
                elemento.css({
                    "cursor": "default"
                });
            }
        }
    }

    function botonEfectoClickPresionado(boton) {
        TweenMax.fromTo(boton, 0.1, {
            alpha: 1
        }, {
            alpha: 0.8,
            onComplete: function () {
                TweenMax.to(boton, 0.1, {
                    alpha: 1
                });
            }
        });
    }

    function aplicarEfectoOver(elemento, activarOver, zonaDeColision) {
        activarOver = (activarOver === undefined) ? true : activarOver;
        zonaDeColision = zonaDeColision || elemento;
        if (tipoDeVariable(elemento) === 'array') {
            aplicarEfectoOverEnArray(elemento, activarOver, zonaDeColision);
        } else {
            zonaDeColision = Display.get(zonaDeColision);
            elemento = Display.get(elemento);
            if (activarOver) {
                activarEfectoOver(elemento, zonaDeColision);
            } else {
                desactivarEfectoOver(zonaDeColision);
            }
        }
    }

    function aplicarEfectoOverEnArray(elemento, estado, zonaDeColision) {
        for (var i = 0; i < elemento.length; i++) {
            var nuevaZonaDeColision = zonaDeColision;
            var nuevoEstado = estado;
            if (tipoDeVariable(zonaDeColision) === 'array') {
                nuevaZonaDeColision = zonaDeColision[i];
            }
            if (tipoDeVariable(estado) === 'array') {
                nuevoEstado = estado[i];
            }
            aplicarEfectoOver(elemento[i], nuevoEstado, nuevaZonaDeColision);
        }
    }

    function activarEfectoOver(elemento, zonaDeColision) {
        zonaDeColision.bind("mouseover", function () {
            botonOverActivo(elemento);
        });
        zonaDeColision.bind("mouseout", function () {
            botonOutActivo(elemento);
        });
        zonaDeColision.css({
            "cursor": "pointer"
        });
        var propiedadesDelOver = {
            "elemento": Display.get(elemento),
            "colision": zonaDeColision,
            "idColision": zonaDeColision.attr("id")
        };
        arrayElementosEfectoOver.push(propiedadesDelOver);
    }

    function desactivarEfectoOver(zonaDeColision) {
        zonaDeColision.unbind("mouseover");
        zonaDeColision.unbind("mouseout");
        zonaDeColision.css({
            "cursor": "default"
        });
        eliminarElementoDeArrayEfectoOver(zonaDeColision);
    }

    function botonOverActivo(boton) {
        TweenMax.to(boton, 1, {
            scaleX: Options.button().scaleOver,
            scaleY: Options.button().scaleOver,
            ease: Cubic.easeOut
        });
    }

    function botonOutActivo(boton) {
        TweenMax.to(boton, 0.5, {
            scaleX: Options.button().scaleOut,
            scaleY: Options.button().scaleOut
        });
    }

    function eliminarElementoDeArrayEfectoOver(zonaDeColision) {
        for (var i = 0; i < arrayElementosEfectoOver.length; i++) {
            var propiedadesDelOver = arrayElementosEfectoOver[i];
            if (propiedadesDelOver.idColision === zonaDeColision.attr("id")) {
                TweenMax.to(propiedadesDelOver.elemento, 0, {
                    scaleX: Options.button().scaleOut,
                    scaleY: Options.button().scaleOut
                });
                arrayElementosEfectoOver.splice(i, 1);
                break;
            }
        }
    }

    function tipoDeVariable(elemento) {
        return $.type(elemento);
    }

})(jQuery);
/*global Collision,jQuery,console,Display,Options,Drag,Arrays,Event*/
/*jshint -W020*/

/**
Realiza los juegos de colisiones de objetos, y imanes.
@class Collision
*/
(function ($) {

    Collision = {};

    var colision;
    var elementosDrag;
    var elementosDragCorrectos;
    var posicionOrigenElementosDrag;
    var elementosDragEnColision;
    var elementoDragActual;
    var elementoColisionActual;
    var funcionFinal = function () {};
    var funcionRetornoEstado = function () {};
    var resultadoDeJuego = true;
    var intentosMalos;

    /**
    @method Collision.load
    @param elementosMover {Array}
    @param elementosColision {*}
    @param elementosCorrectos {Object} El key debe ser el nombre del elemento de colision al que corresponde.
    @example
        //se carga una colision de Uno a Uno
        var elementoMover = ["elemento1","elemento2","elemento3"];
        var elementoColision = ["colision1","colision2","colision3"];
        Collision.load(elementosMover, elementosColision);
        //carga la colision de Uno a Muchos
        var elementoMover = ["elemento1","elemento2","elemento3"];
        var elementoColision = Display.get("colision");
        var elementosCorrectos = {
            "colision":[
                "elemento1",
                "elemento3"
            ]
        };
        Collision.load(elementosMover, elementoColision, elementosCorrectos);
        //carga la colision de Muchos a Muchos
        var elementoMover = ["elemento1","elemento2","elemento3"];
        var elementoColision = ["colision","colision1"];
        var elementosCorrectos = {
            "colision":[
                "elemento1",
                "elemento3"
            ],
            "colision1":[
                "elemento2"
            ]
        };
        Collision.load(elementosMover, elementoColision, elementosCorrectos);
    */
    Collision.load = function (elementosMover, elementosColision, elementosCorrectos) {
        try {
            cargarColision(elementosMover, elementosColision, elementosCorrectos);
        } catch (error) {
            console.error("Collision.load: " + error);
        }
    };

    /**
    @method Collision.remove
    @example
        //se elimina la colision de un elemento despues de dar clic
        Collision.load(arrayMover,arrayColision);
        Event.listener("elemento","mousedown", eliminar);
        function eliminar(){
            Collision.remove();
        }
    */
    Collision.remove = function () {
        try {
            eliminarColision();
        } catch (error) {
            console.error("Collision.remove: " + error);
        }
    };

    /**
    Envia como parametro a la función un boolean indicando si la colision fue correcta o no.
    @method Collision.stateCollision
    @param funcionRetorno {Function} Funcion a ejecutar despues de verificar una colision.
    @example
        //se envia una funcion para mostrar un mensaje si contesto bien o mal
        Collision.stateCollision(funcionX);
        function funcionX (estado){
            if(estado){
                mostrarMensajeBien();
            }else {
                mostrarMensajeMal();
            }
        }
    */
    Collision.stateCollision = function (funcionRetorno) {
        try {
            cargarFuncionDeRetornoEstado(funcionRetorno);
        } catch (error) {
            console.error("Collision.stateCollision: " + error);
        }
    };

    /**
    Funcion que se ejecuta cuando termina el juego, envia como parametro a la funcion un booleano, true si se completo y false si perdio.
    @method Collision.finish
    @param funcion {Function} Funcion a retornar.
    @example
        //Se indica que al finalizar llame a la funcion final
        Collision.finish(final);
        function final(resultado){
            console.log(resultado); //imprime el boolean true si gana o false si perdio
        }
    */
    Collision.finish = function (funcion) {
        try {
            cargarFuncionDeRetorno(funcion);
        } catch (error) {
            console.error("Collision.finish: " + error);
        }
    };

    function cargarColision(elementosMover, elementosColision, elementosCorrectos) {
        if (tipoDeVariable(elementosColision) === "string") {
            elementosColision = [elementosColision];
        }
        colision = elementosColision.slice();
        elementosDrag = elementosMover.slice();
        crearArrayDeElementosPosicionados();
        elementosDragCorrectos = elementosCorrectos || crearArrayDeElementosCorrectos();
        posicionOrigenElementosDrag = {};
        funcionFinal = function () {};
        funcionRetornoEstado = function () {};
        resultadoDeJuego = true;
        intentosMalos = Options.collision().intentosMalos;
        comprobarArrayDeElementosCorrectos();
        Drag.load(elementosMover);
        Drag.functionReturnDrop(dropActivado);
        Drag.functionReturnStart(dragActivado);
    }

    function crearArrayDeElementosPosicionados() {
        elementosDragEnColision = {};
        for (var i = 0; i < colision.length; i++) {
            var nombreColision = Display.getName(colision[i]);
            elementosDragEnColision[nombreColision] = [];
        }
    }

    function crearArrayDeElementosCorrectos() {
        elementosDragCorrectos = {};
        for (var i = 0; i < colision.length; i++) {
            var nombreColision = Display.getName(colision[i]);
            elementosDragCorrectos[nombreColision] = [Display.get(elementosDrag[i])];
        }
        return elementosDragCorrectos;
    }

    function comprobarArrayDeElementosCorrectos() {
        for (var i = 0; i < colision.length; i++) {
            var nombreColision = Display.getName(colision[i]);
            if (elementosDragCorrectos[nombreColision] === undefined) {
                elementosDragCorrectos[nombreColision] = [];
            }
        }
    }

    function eliminarColision() {
        Drag.remove(elementosDrag);
        Drag.functionReturnStart(function () {});
        Drag.functionReturnDrag(function () {});
        Drag.functionReturnDrop(function () {});
        if (Options.collision().duplicarElementos) {
            $(".clon").remove();
            elementosDragEnColision = {};
        }
        elementosDrag = [];
    }

    function cargarFuncionDeRetornoEstado(funcion) {
        funcionRetornoEstado = funcion || function () {};
    }

    function cargarFuncionDeRetorno(funcion) {
        funcionFinal = funcion || function () {};
    }

    function dropActivado(elemento) {
        elementoDragActual = elemento;
        comprobarElementosColision();
    }

    function dragActivado() {
        almacenarPosicionOrigenElemento(); //se ejecuta una unica vez al inicio
        colisionEnEstadoNormal();
        dragEnEstadoNormal();
    }

    function almacenarPosicionOrigenElemento() {
        if ($.isEmptyObject(posicionOrigenElementosDrag)) {
            for (var i = 0; i < elementosDrag.length; i++) {
                var elementoActual = Display.get(elementosDrag[i]);
                posicionOrigenElementosDrag[elementoActual.getName()] = elementoActual.position();
            }
        }
    }

    function comprobarElementosColision() {
        var posicionOrigenElemento = posicionOrigenElementosDrag[elementoDragActual.getName()];
        for (var i = 0; i < colision.length; i++) {
            elementoColisionActual = Display.get(colision[i]);
            var nombreColisionActual = elementoColisionActual.getName();
            var colisionCorrecta = false;
            var arrayElementosCorrectos = elementosDragCorrectos[nombreColisionActual];
            if (colisionConCursor()) {
                for (var numeroElementoCorrecto = 0; numeroElementoCorrecto < arrayElementosCorrectos.length; numeroElementoCorrecto++) {
                    var elementoCorrecto = arrayElementosCorrectos[numeroElementoCorrecto];
                    if (comprobarElementoPorTexto(elementoCorrecto) || comprobarElementoPorId(elementoCorrecto)) {
                        colisionCorrecta = true;
                    }
                    if (colisionCorrecta) {
                        break;
                    }
                }
                if (colisionCorrecta) {
                    detenerFotogramaElementoMovido("bien");
                    detenerForogramaElementoColision("bien");
                    if (Options.collision().duplicarElementos) {
                        var clon = elementoDragActual.clone().appendTo("#Stage").addClass("clon");
                        clon.attr("padre", nombreColisionActual);
                        almacenarEnDragColision(nombreColisionActual, clon);
                        listenerClon();
                    } else {
                        almacenarEnDragColision(nombreColisionActual, elementoDragActual);
                    }
                } else {
                    intentosMalos -= 1;
                    detenerFotogramaElementoMovido("mal");
                    detenerForogramaElementoColision("mal");
                    Display.position(elementoDragActual, posicionOrigenElemento.x, posicionOrigenElemento.y);
                    eliminarDragDeColision();
                }
                posicionarDragEnColision();
                detectarFinalDelJuego();
                ejecutarFuncionEstado(colisionCorrecta);
                return;
            }
        }
        Display.position(elementoDragActual, posicionOrigenElemento.x, posicionOrigenElemento.y);
        eliminarDragDeColision();
        posicionarDragEnColision();
    }

    function colisionConCursor() {
        var posicionCursor = Drag.cursorPosition();
        var posicionColision = elementoColisionActual.position();
        var anchoColision = elementoColisionActual.outerWidth(true);
        var altoColision = elementoColisionActual.outerHeight(true);
        if (posicionCursor.x >= posicionColision.x && posicionCursor.x <= (anchoColision + posicionColision.x)) {
            if (posicionCursor.y >= posicionColision.y && posicionCursor.y <= (altoColision + posicionColision.y)) {
                return true;
            }
        }
        return false;
    }

    function detenerFotogramaElementoMovido(fotograma) {
        elementoDragActual.stop(fotograma);
    }

    function detenerForogramaElementoColision(fotograma) {
        elementoColisionActual.stop(fotograma);
    }

    function colisionEnEstadoNormal() {
        for (var i = 0; i < colision.length; i++) {
            elementoColisionActual = Display.get(colision[i]);
            var arrayElementoColision = elementosDragEnColision[elementoColisionActual.getName()];
            if (arrayElementoColision.length === 0) {
                detenerForogramaElementoColision("normal");
            }
        }
    }

    function dragEnEstadoNormal() {
        for (var i = 0; i < elementosDrag.length; i++) {
            elementoDragActual = Display.get(elementosDrag[i]);
            if (elementoDragEnPosicionOrigen()) {
                detenerFotogramaElementoMovido("normal");
            }
        }
    }

    function elementoDragEnPosicionOrigen() {
        var posicionOrigenDrag = posicionOrigenElementosDrag[elementoDragActual.getName()];
        var posicionDragActual = elementoDragActual.position();
        if (posicionDragActual.x === posicionOrigenDrag.x && posicionDragActual.y === posicionOrigenDrag.y) {
            return true;
        }
        return false;
    }

    function comprobarElementoPorTexto(elementoCorrecto) {
        var nombreElementoMovido = Display.getName(elementoDragActual, true);
        var contenedorTexto = elementoDragActual;
        if (!$.isEmptyObject(Display.get(nombreElementoMovido + "." + Options.containerText()))) {
            contenedorTexto = $("#" + elementoDragActual.attr('id') + "_" + Options.containerText() + " div");
        }
        if (elementoCorrecto === contenedorTexto.html()) {
            return true;
        }
        return false;
    }

    function comprobarElementoPorId(elementoCorrecto) {
        elementoCorrecto = Display.get(elementoCorrecto);
        if (elementoCorrecto.attr("id") === elementoDragActual.attr("id")) {
            return true;
        }
        return false;
    }

    function eliminarDragDeColision() {
        for (var i = 0; i < colision.length; i++) {
            var elementoColision = Display.get(colision[i]);
            var arrayElementos = elementosDragEnColision[elementoColision.getName()];
            var posicionEnArray = Arrays.indexOf(arrayElementos, elementoDragActual, elementoColision.getName());
            if (posicionEnArray !== -1) {
                elementosDragEnColision[elementoColision.getName()].splice(posicionEnArray, 1);
                break;
            }
        }
    }

    function posicionarDragEnColision() {
        for (var i = 0; i < colision.length; i++) {
            var elementoColision = Display.get(colision[i]);
            var arrayElementos = elementosDragEnColision[elementoColision.getName()];
            if (Options.collision().ocultarElementos) {
                ocultarDragEnColision(arrayElementos);
            } else {
                var eje = Options.collision().ejePosicionEnColision;
                Display.positionArray(arrayElementos, elementoColision.position().x, elementoColision.position().y, eje);
            }
        }
    }

    function ocultarDragEnColision(arrayElementos) {
        for (var i = 0; i < arrayElementos.length; i++) {
            arrayElementos[i].hide();
        }
    }

    function ejecutarFuncionEstado(estado) {
        funcionRetornoEstado(estado);
    }

    function listenerClon() {
        $.each(elementosDragEnColision, function (key, elementos) {
            Event.click(elementos, eliminarClon);
        });
    }

    function eliminarClon(boton) {
        var posicionElemento = Arrays.indexOf(elementosDragEnColision[boton.attr("padre")], boton);
        elementosDragEnColision[boton.attr("padre")].splice(posicionElemento, 1);
        boton.remove();
        posicionarDragEnColision();
    }

    function detectarFinalDelJuego() {
        if (intentosMalos <= 0) {
            resultadoDeJuego = false;
        }
        if (colisionElementosCompleta()) {
            finDelJuego();
        }
    }

    function colisionElementosCompleta() {
        var resultadoArray = true;
        for (var i = 0; i < colision.length; i++) {
            var nombreElementoColision = Display.getName(colision[i]);
            var elementosEnColision = elementosDragEnColision[nombreElementoColision];
            var elementosCorrectos = elementosDragCorrectos[nombreElementoColision];
            if (elementosEnColision.length !== elementosCorrectos.length) {
                resultadoArray = false;
            }
        }
        return resultadoArray;
    }

    function finDelJuego() {
        funcionRetornoEstado = function () {};
        eliminarColision();
        funcionFinal(resultadoDeJuego);
    }

    function tipoDeVariable(elemento) {
        return $.type(elemento);
    }

    function almacenarEnDragColision(posicion, elemento) {
        var eliminoPrimerElemento = false;
        if (elementosDragCorrectos[posicion].length <= elementosDragEnColision[posicion].length) {
            var elementoEliminar = elementosDragEnColision[posicion].shift();
            if (elementoEliminar.attr("padre")) {
                elementoEliminar.remove();
            }
            eliminoPrimerElemento = true;
        }
        elementosDragEnColision[posicion].push(elemento);
        return eliminoPrimerElemento;
    }

})(jQuery);
/*global Displa,$,console,jQuery,Concentrate,Timer,TweenLite,Linear,Text,Display,Button,Event,Options,Arrays,TweenMax, Cubic*/
/*jshint -W020*/

(function ($) {

    Concentrate = {};

    var contenedorDeTexto;
    var arrayCartas1;
    var arrayCartas2;
    var botonVerificar;
    var arrayDeTextos;
    var posicionActual;
    var arrayTextosCarta;
    var intentosMalos;
    var cantidadElementos;
    var todasLasCartas;
    var cantidadCartasPorEje;
    var cartasSeleccionadas;
    var funcionFinal;
    var simboloCarta1;
    var simboloCarta2;



    /**
    @method Concentrate.load
    @param ventana {(String|Object)} Ventana o contenedor donde cargara el Html del juego.

    */
    Concentrate.load = function (ventana) {
        try {
            guardarVariablesDelJuego(ventana);
        } catch (error) {
            console.error("Concentrate.load: " + error);
        }
    };

    /**
    Carga un array con las rutas de los archivos HTML que contienen las paginas del juego

    @method Concentrate.loadText
    @param textos {Array}
    */
    Concentrate.loadText = function (textos) {
        try {
            guardarArrayDeTextos(textos);
        } catch (error) {
            console.error("Concentrate.loadText: " + error);
        }
    };

    /**

    @method Concentrate.finish
    @param funcion {Function}
    */
    Concentrate.finish = function (funcion) {
        try {
            guardarFuncionFinal(funcion);
        } catch (error) {
            console.error("Concentrate.finish: " + error);
        }
    };

    /**
    Elimina el juego del concentrece.
    
    @method Concentrate.remove
    */
    Concentrate.remove = function () {
        try {
            eliminarListenerCartas();
            eliminarTodasCartas();
        } catch (error) {
            console.error("Concentrate.remove: " + error);
        }
    };

    function guardarVariablesDelJuego(ventana) {
        contenedorDeTexto = Text.containerText(ventana);
        arrayCartas1 = [];
        arrayCartas2 = [];
        botonVerificar = $();
        arrayDeTextos = [];
        posicionActual = 0;
        arrayTextosCarta = {
            "carta1": [],
            "carta2": []
        };
        cantidadElementos = 0;
        todasLasCartas = [];
        cantidadCartasPorEje = 0;
        cartasSeleccionadas = [];
        funcionFinal = function () {};
        intentosMalos = Options.concentrate().intentosMalos;
    }

    function guardarArrayDeTextos(textos) {
        arrayDeTextos = textos;
        cargarConcentrece();
    }

    function cargarConcentrece() {
        //Con el metodo "$.get" cargamos el archivo externo, el cual se pasa con "then" como una variable de string
        $.when($.get(arrayDeTextos[posicionActual] + ".html")).then(function (archivo) {
            Text.load(contenedorDeTexto, archivo);
            almacenarTextosElementos();
            simboloCarta1 = $("div[carta1]").attr("carta1");
            simboloCarta2 = $("div[carta2]").attr("carta2");
            cantidadElementos = $("concentrece").attr("cantidadDeCartas") / 2;
            cantidadCartasPorEje = $("concentrece").attr("porEje");
            cargarSimbolos();
            listenerCartas();
        });
    }

    function almacenarTextosElementos() {
        var textoCarta1 = [];
        var textoCarta2 = [];
        $("#" + contenedorDeTexto.attr("id") + " div[carta1]").each(function () {
            var texto = $(this).html().trim();
            if (texto.length > 1) {
                var textoSeparadoPor = $(this).attr("separadoPor") || ",";
                textoCarta1 = texto.split(textoSeparadoPor);
            }
            $(this).html("");
        });
        $("#" + contenedorDeTexto.attr("id") + " div[carta2]").each(function () {
            var texto = $(this).html().trim();
            if (texto.length > 1) {
                var textoSeparadoPor = $(this).attr("separadoPor") || ",";
                textoCarta2 = texto.split(textoSeparadoPor);
            }
            $(this).html("");
        });
        arrayTextosCarta.carta1 = textoCarta1;
        arrayTextosCarta.carta2 = textoCarta2;
    }

    function cargarSimbolos() {
        arrayCartas1 = Display.addChildArray(simboloCarta1, "Stage", cantidadElementos);
        arrayCartas2 = Display.addChildArray(simboloCarta2, "Stage", cantidadElementos);
        todasLasCartas = arrayCartas1.concat(arrayCartas2);
        desordenarCartas();
        moverSimboloAlContenedor();
        posicionarCartas();
        ocultarCartas();
        voltearTodasLasCartas();
    }

    function desordenarCartas() {
        todasLasCartas = Arrays.random(todasLasCartas);
    }

    function moverSimboloAlContenedor() {
        for (var i = 0; i < arrayCartas1.length; i++) {
            arrayCartas1[i].appendTo($("concentrece"));
            arrayCartas1[i].css({
                "position": "relative"
            });
            arrayCartas2[i].appendTo($("concentrece"));
            arrayCartas2[i].css({
                "position": "relative"
            });
        }
    }

    function posicionarCartas() {
        var posicionX = 0;
        var posicionY = 0;
        Display.positionArray(todasLasCartas, posicionX, posicionY, "x", cantidadCartasPorEje);
    }

    function ocultarCartas() {
        Display.stopFrame(todasLasCartas, 0, false);
    }

    function voltearTodasLasCartas() {
        TweenMax.allTo(todasLasCartas, 0, {
            rotationY: 180,
            ease: Cubic.easeInOut
        });
    }

    function listenerCartas() {
        Event.click(todasLasCartas, voltearCarta);
        Button.over(todasLasCartas);
    }

    function voltearCarta(carta) {
        Event.removeClick(carta);
        cartasSeleccionadas.push(carta);
        girarCartaAngulo1(carta);
        if (cartasSeleccionadas.length === 2) {
            eliminarListenerCartas();
            verficiarCartasSeleccionadas();
        }
    }

    function girarCartaAngulo1(cartaActual) {
        TweenLite.set(cartaActual, {
            transformPerspective: 300
        });
        TweenMax.to(cartaActual, 0.3, {
            rotationY: 90,
            ease: Cubic.easeIn,
            onComplete: cargarContenidoDenteoDelSimbolo,
            onCompleteParams: [cartaActual]
        });
    }

    function cargarContenidoDenteoDelSimbolo(cartaActual) {
        var posicionArrayCarta1 = Arrays.indexOf(arrayCartas1, cartaActual);
        var posicionArrayCarta2 = Arrays.indexOf(arrayCartas2, cartaActual);
        if (posicionArrayCarta1 !== -1) {
            if (arrayTextosCarta.carta1.length > 0) {
                //Carga textos si el array tiene
                Text.load(cartaActual, arrayTextosCarta.carta1[posicionArrayCarta1], "middle center");
                Display.stopFrame(cartaActual, 1);
            } else {
                //Detiene en fotogramas cuando se usa imagenes
                Display.stopFrame(cartaActual, posicionArrayCarta1 + 1);
            }
        }
        if (posicionArrayCarta2 !== -1) {
            if (arrayTextosCarta.carta2.length > 0) {
                Text.load(cartaActual, arrayTextosCarta.carta2[posicionArrayCarta2], "middle center");
                Display.stopFrame(cartaActual, 1);
            } else {
                Display.stopFrame(cartaActual, posicionArrayCarta2 + 1);
            }
        }
        girarCartaAngulo2(cartaActual);
    }

    function girarCartaAngulo2(cartaActual) {
        TweenMax.to(cartaActual, 0.3, {
            rotationY: 0,
            ease: Cubic.easeOut
        });
    }

    function eliminarListenerCartas() {
        Event.removeClick(todasLasCartas);
        Button.over(todasLasCartas, false);
    }

    function verficiarCartasSeleccionadas() {
        var posicionArrayCarta1 = buscarPosicionCarta(cartasSeleccionadas[0]);
        var posicionArrayCarta2 = buscarPosicionCarta(cartasSeleccionadas[1]);
        if (posicionArrayCarta1 === posicionArrayCarta2) {
            cambiarColorCarta("bien");
            eliminarCartasDelArray();
        } else {
            intentosMalos -= 1;
            Timer.load(Options.concentrate().tiempoDeEspera, girarCartaAngulo3);
            cambiarColorCarta("mal");
        }
    }

    function buscarPosicionCarta(carta) {
        var posicion;
        posicion = Arrays.indexOf(arrayCartas1, carta);
        if (posicion !== -1) {
            return posicion;
        }
        posicion = Arrays.indexOf(arrayCartas2, carta);
        if (posicion !== -1) {
            return posicion;
        }
        return posicion;
    }

    function eliminarCartasDelArray() {
        var posicion;
        for (var i = 0; i < cartasSeleccionadas.length; i++) {
            posicion = Arrays.indexOf(todasLasCartas, cartasSeleccionadas[i]);
            todasLasCartas.splice(posicion, 1);
        }
        //Se limpia la selección para poder seleccionar otras dos cartas nuevas.
        cartasSeleccionadas = [];
        verificarFinJuego();
    }

    function verificarFinJuego() {
        if (todasLasCartas.length === 0) {
            posicionActual += 1;
            if (posicionActual >= arrayDeTextos.length) {
                Timer.load(Options.concentrate().tiempoDeEspera, finDeJuego);
            } else {
                Timer.load(Options.concentrate().tiempoDeEspera, continuarJuegoNuevaPagina);
            }
        } else {
            listenerCartas();
        }
    }

    function finDeJuego() {
        var resultado = true;
        if (intentosMalos < 0) {
            resultado = false;
        }
        eliminarConcentrece();
        funcionFinal(resultado);
    }

    function eliminarConcentrece() {
        TweenMax.allTo(arrayCartas1.concat(arrayCartas2), 0.5, {
            scaleX: 0,
            scaleY: 0,
            alpha: 0,
            ease: Cubic.easeIn,
            onComplete: eliminarTodasCartas
        });
    }

    function eliminarTodasCartas() {
        Display.removeChildArray(arrayCartas1);
        Display.removeChildArray(arrayCartas2);
    }

    function continuarJuegoNuevaPagina() {
        eliminarConcentrece();
        Timer.load(0.6, cargarConcentrece);
    }

    function cambiarColorCarta(opcionCorrecta) {
        var color = Options.concentrate().colorMal;
        if (opcionCorrecta === "bien") {
            color = Options.concentrate().colorBien;
        }
        TweenMax.allTo(cartasSeleccionadas, 0.5, {
            boxShadow: "0px 0px 10px 3px " + color,
            ease: Cubic.easeOut
        });
    }

    function girarCartaAngulo3() {
        TweenMax.allTo(cartasSeleccionadas, 0.3, {
            rotationY: 90,
            ease: Cubic.easeIn,
            onComplete: girarCartaAngulo4
        });
    }

    function girarCartaAngulo4() {
        eliminarContenidoDentroDelSimbolo();
        TweenMax.allTo(cartasSeleccionadas, 0.3, {
            rotationY: 180,
            boxShadow: "0px 0px 10px 3px rgba(0, 0, 0, 0)",
            ease: Cubic.easeOut,
            onComplete: listenerCartas
        });
        cartasSeleccionadas = [];
    }

    function eliminarContenidoDentroDelSimbolo() {
        Display.stopFrame(cartasSeleccionadas, 0, false);
        Text.load(cartasSeleccionadas, "");
    }

    function guardarFuncionFinal(funcion) {
        funcionFinal = funcion;
    }

})(jQuery);
/*global Core,Main,AdobeEdge,Style,console,jQuery,Adobe,navigator,window,document,location*/
/*jshint -W020*/

AdobeEdge.bootstrapCallback(function (idComposicion) {
    Core.initialize(idComposicion);
    Main();
});

/**
@class Core
*/
(function ($) {

    Core = {};

    Core.composition = null;

    /**
    @member {Object} Core.symbols Retorna el objecto con todos los elementos de la biblioteca en el formato de edge.
    @example
        console.log(Core.symbols);
    */
    Core.symbols = {};

    /**
    @member {Object} Core.browser Indica que navegador se esta utilizando por medio de un boolean.
    @example
        //retorna true si se usa firefox
        Core.browser.firefox;
        //retorna true si se usa ie
        Core.browser.ie;
        //retorna true si se usa chrome
        Core.browser.chrome;
    */
    Core.browser = {
        "firefox": false,
        "chrome": false,
        "ie": false
    };

    /**
    @member {String} Core.url Ruta url del proyecto.
    */
    Core.url = "";

    Core.initialize = function (composicion) {
        try {
            guardarComposicion(composicion);
            guardarSimbolos();
            mostrarVersionCodeCraft();
            navegadorActual();
            Style.main();
            cargarUrlActual();
            eliminarPrecarga();
        } catch (error) {
            console.error("Core.initialize: " + error);
        }
    };

    /**
    Retorna las propiedades de un simbolo cargadas direcamente desde los js de Edge.
    Es util para acceder a propiedades de los elementos aunque estos no hallan cargado.
    @method Core.propertySymbol
    @param nombreSimbolo {String} Nombre de como aparece en la biblioteca
    @return {Object} Object Contiene las propiedades asignadas al simbolo desde el panel de propiedades de Edge.
    @example
        //acceder al ancho y alto de un elemento antes de cargarlo
        Core.propertySymbol("simbolo").width; //return 180px
        //retornar todo el style
        console.log(Core.propertySymbol("simbolo")); // {"width": "10px","height": "20px"}
    */
    Core.propertySymbol = function (nombreSimbolo) {
        try {
            return propiedadesDeSimbolo(nombreSimbolo);
        } catch (error) {
            console.error("Core.propertySymbol: " + error);
        }
    };

    function guardarComposicion(compisicion) {
        Core.composition = Adobe.getComposition(compisicion);
    }

    function guardarSimbolos() {
        Core.symbols = Adobe.getCompositionSymbols(Core.composition);
    }

    function mostrarVersionCodeCraft() {
        console.clear();
        console.info("CodeCraft - Nov/2015");
    }

    function navegadorActual() {
        if (navigator.userAgent.indexOf("Chrome") !== -1 || navigator.userAgent.indexOf("Safari") !== -1) {
            Core.browser.chrome = true;
        }
        if (navigator.userAgent.indexOf("Firefox") !== -1) {
            Core.browser.firefox = true;
        }
        if (navigator.userAgent.indexOf("MSIE") !== -1 || navigator.userAgent.indexOf("Trident") !== -1) {
            Core.browser.ie = true;
        }
    }

    function propiedadesDeSimbolo(nombreSimbolo) {
        var simbolo = Core.symbols[nombreSimbolo];
        var ancho = simbolo.states["Base State"]["${symbolSelector}"][1][2];
        var alto = simbolo.states["Base State"]["${symbolSelector}"][0][2];
        var propiedades = {
            "width": ancho,
            "height": alto
        };
        return propiedades;
    }

    function cargarUrlActual() {
        var rutaActual = location.href;
        var url = rutaActual.split('/');
        url.pop();
        Core.url = url.toString().replace(/[,]/g, "/");

        var URL = window.URL || (window.webkitURL);
        window.URL = URL;
    }

    function eliminarPrecarga() {
        $("#precarga").remove();
    }

    function ajustarVentana() {
        /*
        window.onload = function () {
            var innerWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var innerHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            var targetWidth = 1000;
            var targetHeight = 640;
            window.resizeBy(targetWidth - innerWidth, targetHeight - innerHeight);
        };
        */
    }

})(jQuery);
/*global jQuery,console,Data,window,localStorage*/
/*jshint -W020*/

/**
Maneja la informacion almacenada en el navegador.
@class Data
*/
(function ($) {

    Data = {};

    /**
    @method Data.set
    @param nombreVariable {String} Nombre para identificar el valor.
    @param valor {*} No soporta funciones ni elementos jQuery.
    @example
        //almacena un string
        Data.set("nombre","Felipe Zapata");
        //almacenar un numero
        Data.set("numero", 2333);
        //almaenar un array
        var array = ["elemento1","elemento2","elemento3"];
        Data.set("array",array);
        //almacenar un object
        var object = {
            "nombre": "felipe",
            "correo": "lacri@misnea.edu.co"
        };
        Data.set("datos",object);
    */
    Data.set = function (nombreVariable, valor) {
        try {
            almacenarValor(nombreVariable, valor);
        } catch (error) {
            console.error("Date.set: " + error);
        }
    };

    /**
    @method Data.get
    @param nombreVariable {String}
    @return {*} Valor Depende del contenido de la variable.
    @example
        //retornar una variable
        Data.get("variable");
    */
    Data.get = function (nombreVariable) {
        try {
            return obtenerValor(nombreVariable);
        } catch (error) {
            console.error("Date.get: " + error);
        }
    };

    /**
    @method Data.clear
    @param nombreVariable {String}
    @example
        //eliminar un valor de una variable
        Data.clear("variable1");
        //eliminar todas las variables
        Data.clear();
    */
    Data.clear = function (nombreVariable) {
        try {
            borrarDato(nombreVariable);
        } catch (error) {
            console.error("Data.clear: " + error);
        }
    };

    function almacenarValor(nombreVariable, valor) {
        soportaAlmacenamiento();
        localStorage.setItem(String(nombreVariable), JSON.stringify(valor));
    }

    function obtenerValor(nombreVariable) {
        soportaAlmacenamiento();
        return JSON.parse(localStorage.getItem(String(nombreVariable)));
    }

    function borrarDato(nombreVariable) {
        soportaAlmacenamiento();
        if (nombreVariable === undefined) {
            localStorage.clear();
        } else {
            localStorage.removeItem(nombreVariable);
        }
    }

    function soportaAlmacenamiento() {
        try {
            return 'localStorage' in window && window.localStorage !== null;
        } catch (error) {
            //si genera error, es por que el navegador no sorporta el almacenamiento
            return false;
        }
    }

    function tipoDeVariable(elemento) {
        return $.type(elemento);
    }

})(jQuery);
/*global jQuery,console,Display,Utils,Adobe,Options,window,Core,Menu,TweenMax,setTimeout*/
/*jshint -W020*/

/**
Maneja los elementos de la pantalla en la multimedia, permite cargarlos, eliminarlos, posicionarlos y optenerlos.
@class Display
*/
(function ($) {

    Display = {};

    var elementosAgregadosPantalla = [];
    var numeroZIndexActual = 1;

    /**
    Carga los simbolos de la biblioteca en la pantalla.
    Se puede cambiar la instancia del simbolo con el parametro "nuevoNombreSimbolo".
    Cuando se carga un simbolo al escenario y este ya fue cargado si no se pasa nombre nuevo, la libreria le asigna
    automaticamente el mismo nombre del simbolo seguido por un digito.
    Cuando se carga un elemento se crea una variable que lo contendra con el mismo nombre del elemento.
    @method Display.addChild
    @param nombreSimbolo {String} Nombre del simbolo que se va  cargar.
    @param contenedorSimbolo [contenedorSimbolo="Stage"] {(String|Object)} Nombre del contenedor donde se cargaran los elementos nuevos.
    @param nuevoNombreSimbolo {String} Nombre para el simbolo.
    @return {Object} El elemento que se agrego.
    @example
        //Para cargar un unico simbolo directamente al Stage de Edge Animate
        Display.addChild("Escena1");
        //Para cargar un simbolo dentro de otro simbolo llamado Escena1
        addchild("Elemento1","Escena1");
        //Para cargar un simbolo dentro de otro simbolo aniado
        Display.addChild("Elemento2", "Escena1.Elemento1");
        //se carga varias veces el mismo simbolo
        Display.addChild("simbolo");
        Display.addChild("simbolo");//el nombre de este simbolo es asignado automaticamente "simbolo1"
        Display.addChild("simbolo");//el nombre de este simbolo es asignado automaticamente "simbolo2"
        //se carga un simbolo y se le cambia el nombre
        Display.addChild("simbolo","Stage","nombreNuevo");
        //para agregar un elemento se puede usar
        var elementoPadre = Display.get("elementoPadre");
        elementoPadre.addChild("hijo");
    */
    Display.addChild = function (nombreSimbolo, contenedorSimbolo, nuevoNombreSimbolo) {
        try {
            if (nombreSimboloCorrecto(nombreSimbolo)) {
                return cargarSimbolo(nombreSimbolo, contenedorSimbolo, nuevoNombreSimbolo);
            }
        } catch (error) {
            console.error("Display.addChild: " + error);
        }
    };

    /**
    Realiza el mismo proceso de addChild aplicado a un Array.
    @method Display.addChildArray
    @param nombreSimbolo {String} Nombre del simbolo que se va  cargar.
    @param contenedor [contenedor="Stage"] {(String|Object)} Nombre del contenedor donde se cargaran los elementos nuevos.
    @param cantidad {Number} [default=1] Indica cuantos elementos de este simbolo se van a cargar
    @return {Object[]} Array de elementos que se agregaron.
    @example
        //se carga 3 simbolos de Escena1
        Display.addChild("Escena1","Stage",3);
        //se cargan 4 simbolos dentro de un elemento
        var botones = Display.addChild("botones","simbolo",4);
    */
    Display.addChildArray = function (nombreSimbolo, contenedor, cantidad) {
        try {
            return cargarArrayDeSimbolos(nombreSimbolo, contenedor, cantidad);
        } catch (error) {
            console.error("Display.addChildArray: " + error);
        }
    };

    /**
    @method Display.removeChild
    @param object {(String|Object)} Nombre o elemento a remover.
    @example
        //para eliminar un simbolo
        Display.removeChild("Escena1");
        //para eliminar un simbolo o elemento dentro de un simbolo
        Display.removeChild("Escena1.Elemento1");
        //para eliminar un objecto
        Display.removeChild(objetojQuery);
    */
    Display.removeChild = function (object) {
        try {
            eliminarSimbolo(object);
        } catch (error) {
            console.error("Display.removeChild: " + error);
        }
    };

    /**
    @method Display.removeChildArray
    @param array {(String[]|Object[])} Array con nombre o elemento a remover.
    @example
        //para eliminar un array de elementos
        var array = ["elemento1","elemento2","elemento3"];
        Display.removeChildArray(array);
    */
    Display.removeChildArray = function (array) {
        try {
            eliminarSimboloArray(array);
        } catch (error) {
            console.error("Display.removeChildArray: " + error);
        }
    };

    /**
    @method Display.removeChildAll
    @param excluir {Array} Elementos que no se eliminaran
    */
    Display.removeChildAll = function (excluir) {
        try {
            eliminarTodosLosSimbolos(excluir);
        } catch (error) {
            console.error("Display.removeChildAll: " + error);
        }
    };

    /**
    Posiciona un elemento en la pantalla.
    @method Display.position
    @param elemento {(String|Object|String[]|Object[])} Nombre del elemento o simbolo que se desea posicionar.
    @param posicionX [default=0] {Number} Posición del eje X para ubicar el elemento.
    @param posicionY [default=0] {Number} Posición del eje Y para ubicar el elemento.
    @example
        //Para ubicar un simbolo en la posicion 0 de X y 0 de Y
        Display.position("Escena1");
        //Para ubicar un simbolo en la posicion 150 de X y 200 de Y
        Display.position("Escena1",150 , 200);
    */
    Display.position = function (elemento, posicionX, posicionY) {
        try {
            posicionarElemento(elemento, posicionX, posicionY);
        } catch (error) {
            console.error("Display.position: " + error);
        }
    };

    /**
    Posiciona un array de elementos en la pantalla, esta opcion permite ajustar automaticamante en columnas o filas los elementos
    y distribuirlos de forma pareja, solo es necesario especificar la posicion inicial del primer elemento.
    @method Display.positionArray
    @param arrayElementos {(String[]|Object[])} Array de elementos o simbolos que se desea posicionar.
    @param posicionX [default=0] {Number} Posición del eje X para ubicar el primer elemento.
    @param posicionY [default=0] {Number} Posición del eje Y para ubicar el primer elemento.
    @param eje [default=x] {String} Indica en que sentido se distribuyen los elementos.
    @param limiteElementoPorEje [default=-1] {Number} India la cantidad de columnas maximas en el eje x o filas maximas en el eje y.
    */
    Display.positionArray = function (arrayElementos, posicionX, posicionY, eje, limiteElementoPorEje) {
        try {
            posicionarArray(arrayElementos, posicionX, posicionY, eje, limiteElementoPorEje);
        } catch (error) {
            console.error("Display.positionArray: " + error);
        }
    };

    /**
    Retorna un objeto de jQuery que se encuentre cargado en el Stage.
    @method Display.get
    @param nombreElemento {(String|Object)} Elemento que se quiere obtener.
    @return {Object} 
    @example
        //se oculta un elemento
        Display.get("elementoOcultar").hide();
        //se reproduce una animacion
        Display.get("animacion").play();
        //se oculta un elemento que estra dentro de otro
        Display.get("elemento1.elemento2.elementoOcultar").hide();
    */
    Display.get = function (nombreElemento) {
        try {
            return obtenerElemento(nombreElemento);
        } catch (error) {
            console.error("Display.get: " + error);
        }
    };

    /**
    Retorna el id de un elemento.
    @method Dislay.getId
    @param elemento {(String|Object)} Nombre del elemento o elemento.
    @return {String} Id del elemento sin el signo de #
    @example
        //id de un simbolo 
        var idSimbolo = Display.getId("simbolo1");
        //id de un elmento
        var idElemento = Display.getId("elemento1");
        //id de un elemento en una variable
        var elemento = Display.get("elemento");
        var idElemento = Display.getId(elemento);
        //id de un elemento dentro de un simbolo
        var idElemento = Display.getId("simbolo.elemento");
    */
    Display.getId = function (elemento) {
        try {
            return obtenerIdElemento(elemento);
        } catch (error) {
            console.error("Display.getId: " + error);
        }
    };

    /**
    Retorna el nombre o la instancia de un elemento.
    @method Display.getName
    @param elemento {(Object|String)} Elemento para averiguar el nombre o instancia asignados.
    @param nombreCompleto {Boolean} [default=false] Indica si quiere que se retorne la ruta completa del elemento.
    @return {String} Nombre o instancia del elemento
    @example
        //se retorna el nombre
        var nombre = Display.getName(ObjectJquery); //retorna string
        //para obtener la ruta copleta
        var elemento = Display.addChild("elemento","simbolo1.simbolo2");
        console.log(Display.getName(elemento,true)); //retorna "simbolo1.simbolo2.elemento"
        console.log(elemento.getName(true)); //retorna "simbolo1.simbolo2.elemento"
    */
    Display.getName = function (elemento, nombreCompleto) {
        try {
            return obtenerNombreElemento(elemento, nombreCompleto);
        } catch (error) {
            console.error("Display.getName: " + error);
        }
    };

    /**
    Cambia las posiciones del elemento1 por la del elemento2. Si se pasa como unico parametro el elemento1, se posicionara por encima de 
    todos los demas elementos.
    @method Display.zIndex
    @param elemento1 {(String|Object)} Elemento a posicionar por encima de los demas o cambiar de posicion con el elemento2.
    @param elemento2 {(String|Object)} Elemento para cambiar de posicion con el elemento1.
    @example
        //ubica el simbolo encima de todos los elementos
        Display.zIndex("simbolo");
        //cambia de posicion los dos elementos
        Display.zIndex("elementoAbajo","elementoArriba");
    */
    Display.zIndex = function (elemento1, elemento2) {
        try {
            cambiarNivelElemento(elemento1, elemento2);
        } catch (error) {
            console.error("Display.zIndex: " + error);
        }
    };

    /**
    Asigna un valor para reemplazar el valor actual de la variable que ajusta el index de los elementos.
    @method Display.setZIndex
    @param valor {Number} Valor a reemplazar el maximo numero del index.
    */
    Display.setZIndex = function (valor) {
        if (valor > numeroZIndexActual) {
            numeroZIndexActual = valor;
        }
    };

    /**
    Obtiene el valor actual del index maximo de los elementos.
    @method Display.getZIndex    
    @return {Number} Index maximo.
    */
    Display.getZIndex = function () {
        return numeroZIndexActual;
    };


    /**
     Retorna un Array con los hijos del elemento.
     @method Display.getChildren
     @param nombrePadre {String} Elemento que contiene los otros elementos.
     @return {Object} Contiene hijos, y nombres
     @example
        //Retornar los elementos de un simbolo
        console.log("simbolo");
        //Retorna
        Object = {
            hijos: ...,
            nombres: ...
        }
     */
    Display.getChildren = function (nombreSimbolo) {
        try {
            return obtenerHijosElemento(nombreSimbolo);
        } catch (error) {
            console.error("Displa.getChildren: " + error);
        }
    };

    /**
    @method Display.stopFrame
    @param elemento
    @param [frameInicial=0] {(Number|String)} El tiempo es estimado en segundos o la etiqueta en String.
    */
    Display.stopFrame = function (elemento, frameInicial, fotogramaSiguiente) {
        try {
            detenerEnFotograma(elemento, frameInicial, fotogramaSiguiente);
        } catch (error) {
            console.error("Display.stopFrame: " + error);
        }
    };

    Display.getProperty = function (elemento) {
        try {
            return obtenerPropiedadesSimboloCargado(elemento);
        } catch (error) {
            console.error("Display.getProperty: " + error);
        }
    };

    function nombreSimboloCorrecto(nombreSimbolo) {
        if (nombreSimbolo === "" || nombreSimbolo === " " || nombreSimbolo === null) {
            console.warn("Display.addChild: El nombre del simbolo no es correcto");
            return false;
        }
        return true;
    }

    function cargarSimbolo(nombreSimbolo, contenedorSimbolo, nuevoNombreSimbolo) {
        nuevoNombreSimbolo = nuevoNombreSimbolo || nombreSimbolo;
        contenedorSimbolo = contenedorSimbolo || "Stage";
        var numeroDeSimbolo = 0;
        if (estaElementoCargado(nombreSimbolo)) {
            numeroDeSimbolo = numeroDeSimboloNuevo(nombreSimbolo);
            nuevoNombreSimbolo = nombreSimbolo + numeroDeSimbolo;
        }
        contenedorSimbolo = convertirASimbolo(Display.get(contenedorSimbolo));
        var simboloNuevo = Adobe.createSymbol(contenedorSimbolo, nombreSimbolo);
        var elementoNuevo = $("#" + simboloNuevo.element.context.id);
        var propiedadesSimbolo = {
            "nombrePadre": nombreSimbolo,
            "numeroDeSimbolo": numeroDeSimbolo,
            "nombreSimbolo": nuevoNombreSimbolo,
            "simbolo": simboloNuevo,
            "id": elementoNuevo.attr("id")
        };
        elementosAgregadosPantalla.push(propiedadesSimbolo);
        posicionarNuevoSimbolo(nuevoNombreSimbolo);
        asignarDimensionesElemento(nuevoNombreSimbolo, nombreSimbolo);
        reposicionarMenu();
        return elementoNuevo;
    }

    function estaElementoCargado(nombreSimbolo) {
        return (Display.get(nombreSimbolo).attr("id"));
    }

    function numeroDeSimboloNuevo(nombreSimboloNuevo) {
        var posicionSimbolo = -1;
        for (var i = 0; i < elementosAgregadosPantalla.length; i++) {
            var propiedadesSimbolo = elementosAgregadosPantalla[i];
            if (propiedadesSimbolo.nombrePadre === nombreSimboloNuevo) {
                posicionSimbolo = i;
            }
        }
        var numeroDeSimboloActual = elementosAgregadosPantalla[posicionSimbolo].numeroDeSimbolo;
        return (numeroDeSimboloActual + 1);
    }

    function convertirASimbolo(elemento) {
        return Adobe.getSymbol(elemento);
    }

    function posicionarNuevoSimbolo(simbolo) {
        Display.get(simbolo).css({
            "z-index": numeroZIndexActual++,
            "position": "absolute",
            "top": "0px",
            "left": "0px"
        });
    }

    function asignarDimensionesElemento(nuevoNombreSimbolo, nombreSimbolo) {
        var propiedadesCss = Core.propertySymbol(nombreSimbolo);
        obtenerElemento(nuevoNombreSimbolo).css(propiedadesCss);
    }

    function reposicionarMenu() {
        Menu.reload();
    }

    function cargarArrayDeSimbolos(nombreSimbolo, contenedor, cantidad) {
        var array = [];
        for (var i = 0; i < cantidad; i++) {
            array.push(cargarSimbolo(nombreSimbolo, contenedor));
        }
        return array;
    }

    function eliminarSimbolo(object) {
        var nombreSimbolo = obtenerNombreElemento(object);
        if (nombreSimbolo !== "") {
            TweenMax.killTweensOf(object);
            var propiedadesSimbolo = obtenerPropiedadesSimboloCargado(nombreSimbolo);
            //Se elimina de la pantalla
            //propiedadesSimbolo.simbolo.deleteSymbol();
            obtenerElemento(object).remove();
            //Se elimina del array de los elementos utilizados por la code
            if (Utils.typeOf(object) === "string") {
                eliminarSimboloDeArrayPantalla(object);
            } else {
                eliminarSimboloDeArrayPantalla(nombreSimbolo);
            }
        }
    }

    function eliminarSimboloDeArrayPantalla(nombreSimbolo) {
        for (var i = 0; i < elementosAgregadosPantalla.length; i++) {
            var propiedadesSimbolo = elementosAgregadosPantalla[i];
            if (propiedadesSimbolo.nombreSimbolo === nombreSimbolo) {
                elementosAgregadosPantalla.splice(i, 1);
                break;
            }
        }
    }

    function eliminarSimboloArray(array) {
        for (var i = 0; i < array.length; i++) {
            if (tipoDeVariable(array[i]) === "array") {
                eliminarSimboloArray(array[i]);
            } else {
                eliminarSimbolo(array[i]);
            }
        }
    }

    function eliminarTodosLosSimbolos(elementosExcluir) {
        var elementosParaEliminar = [];
        for (var i = 0; i < elementosAgregadosPantalla.length; i++) {
            var elementoActual = $("#" + elementosAgregadosPantalla[i].id);
            var elementoNoExcluido = verificarElementoExcluido(elementoActual, elementosExcluir);
            if (elementoNoExcluido) {
                elementosParaEliminar.push(elementoActual);
            }
        }
        eliminarSimboloArray(elementosParaEliminar);
    }

    function verificarElementoExcluido(elementoActual, arrayElementoExluido) {
        for (var i = 0; i < arrayElementoExluido.length; i++) {
            var elementoActualExcluir = obtenerElemento(arrayElementoExluido[i]);
            if (elementoActual.attr("id") === elementoActualExcluir.attr("id")) {
                return false;
            }
        }
        return true;
    }

    function posicionarElemento(elemento, posicionX, posicionY) {
        posicionX = posicionX || 0;
        posicionY = posicionY || 0;
        if (tipoDeVariable(elemento) === 'array') {
            for (var i = 0; i < elemento.length; i++) {
                posicionarElemento(elemento[i], posicionX, posicionY);
            }
        } else {
            Display.get(elemento).css({
                "position": "absolute",
                "top": posicionY + "px",
                "left": posicionX + "px"
            });
        }
    }

    function posicionarArray(arrayElementos, posicionX, posicionY, eje, limiteElementoPorEje) {
        posicionX = posicionX || 0;
        posicionY = posicionY || 0;
        eje = eje || "x";
        limiteElementoPorEje = Number(limiteElementoPorEje) || -1;
        var limiteInicialPorEje = limiteElementoPorEje;
        var posicionXInicial = posicionX;
        var posicionYInicial = posicionY;
        for (var numeroDeElemento = 0; numeroDeElemento < arrayElementos.length; numeroDeElemento++) {
            var elemento = arrayElementos[numeroDeElemento];
            var dimensiones = obtenerDimensionesElemento(elemento);
            if (numeroDeElemento === limiteElementoPorEje) {
                limiteElementoPorEje += limiteInicialPorEje;
                if (eje === "x") {
                    posicionY += dimensiones.alto + Options.positionArray().distanciaEntreElementos;
                    posicionX = posicionXInicial;
                } else {
                    posicionX += dimensiones.ancho + Options.positionArray().distanciaEntreElementos;
                    posicionY = posicionYInicial;
                }
            }
            posicionarElemento(elemento, posicionX, posicionY);
            if (eje === "x") {
                posicionX += dimensiones.ancho + Options.positionArray().distanciaEntreElementos;
            } else {
                posicionY += dimensiones.alto + Options.positionArray().distanciaEntreElementos;
            }
        }
    }

    function obtenerDimensionesElemento(elemento) {
        var dimensiones = {
            "ancho": elemento.outerWidth(true),
            "alto": elemento.outerHeight(true)
        };
        return dimensiones;
    }

    function obtenerElemento(nombreElemento) {
        if (typeof nombreElemento === "string") {
            var id = Display.getId(nombreElemento);
            if (elementoExiste($("#" + id))) {
                return $("#" + id);
            }
            if (nombreElemento.substr(0, 5) === "Stage") {
                var idElementoStage = nombreElemento.replace(/[,.]/g, "_");
                return $("#" + idElementoStage);
            }
        } else {
            if (tipoDeVariable(nombreElemento) === "object") {
                return nombreElemento;
            }
        }
        return $();
    }

    function elementoExiste(elemento) {
        if (elemento.length > 0) {
            return true;
        }
        return false;
    }

    function obtenerIdElemento(elemento) {
        if (tipoDeVariable(elemento) === "string") {
            var posicion;
            var posicionPuntoNombre = elemento.indexOf(".");
            if (posicionPuntoNombre === -1) {
                posicionPuntoNombre = elemento.length;
            }
            var nombreSimboloPadre = elemento.substr(0, posicionPuntoNombre);
            var propiedadesSimbolo = obtenerPropiedadesSimboloCargado(nombreSimboloPadre);
            if (!$.isEmptyObject(propiedadesSimbolo)) {
                var id = propiedadesSimbolo.id + elemento.substr(posicionPuntoNombre).replace(/[,.]/g, "_");
                if (elementoExiste($("#" + id))) {
                    return id;
                }
            }
            if (elemento === "Stage") {
                return "Stage";
            }
        } else {
            if (!$.isEmptyObject(elemento) && elemento.attr("id")) {
                return elemento.attr("id");
            }
        }
        return "";
    }

    function obtenerPropiedadesSimboloCargado(nombreSimboloBuscar) {
        for (var i = 0; i < elementosAgregadosPantalla.length; i++) {
            var propiedadesSimbolo = elementosAgregadosPantalla[i];
            if (propiedadesSimbolo.nombreSimbolo === nombreSimboloBuscar) {
                return propiedadesSimbolo;
            }
        }
        return {};
    }

    function obtenerNombreElemento(elemento, nombreCompleto) {
        nombreCompleto = nombreCompleto || false;
        elemento = obtenerElemento(elemento);
        if (elemento.attr("id")) {
            var nombre = elemento.attr("id");
            nombre = nombre.replace(/[_]/g, ".");
            if (nombre === "Stage") {
                return "Stage";
            }
            var arrayNombre = nombre.split(".");
            //el id de un simbolo se conforma por "eid_" seguido de numeros aleatorios
            //el id de un elemento se conforma por "eid_" seguido de numeros aleatorios y el nombre de los elementos.
            if (arrayNombre.length > 2) {
                if (nombreCompleto) {
                    var nombreSimbolo = arrayNombre.splice(0, 2).toString();
                    nombreSimbolo = nombreSimbolo.replace(/,/g, "_");
                    nombreSimbolo = obtenerNombreElemento($("#" + nombreSimbolo));
                    nombre = arrayNombre.toString();
                    nombre = nombre.replace(/,/g, ".");
                    return nombreSimbolo + "." + nombre;
                } else {
                    return arrayNombre[arrayNombre.length - 1];
                }
            } else {
                return obtenerNombreSimbolo(elemento);
            }
        }
        return "";
    }

    function obtenerNombreSimbolo(simbolo) {
        var idSimbolo = simbolo.attr("id");
        for (var i = 0; i < elementosAgregadosPantalla.length; i++) {
            var propiedadesSimbolo = elementosAgregadosPantalla[i];
            if (propiedadesSimbolo.id === idSimbolo) {
                return propiedadesSimbolo.nombreSimbolo;
            }
        }
        return "";
    }

    function cambiarNivelElemento(elemento1, elemento2) {
        numeroZIndexActual += 1;
        var zIndexElemento1 = Display.get(elemento1).zIndex();
        var zIndexElemento2 = (Display.get(elemento2).length > 0) ? Display.get(elemento2).zIndex() : numeroZIndexActual;
        Display.get(elemento1).css({
            "z-index": zIndexElemento2
        });
        Display.get(elemento2).css({
            "z-index": zIndexElemento1
        });
    }

    function obtenerHijosElemento(nombreSimbolo) {
        var simbolo = Display.get(nombreSimbolo);
        var arraySimbolosHijos = simbolo.children();
        var nombresHijos = [];
        var elementosHijos = [];
        var idSimbolo = simbolo.attr("id");
        for (var i = 0; i < arraySimbolosHijos.length; i++) {
            var nombreHijoTemporar = Display.getName($("#" + arraySimbolosHijos[i].id));
            var elementoHijoTemporar = $("#" + arraySimbolosHijos[i].id);
            nombresHijos.push(nombreHijoTemporar);
            elementosHijos.push(elementoHijoTemporar);
        }
        var hijos = {
            "nombres": nombresHijos,
            "elementos": elementosHijos
        };
        return hijos;
    }

    function detenerEnFotograma(elemento, frameInicial, fotogramaSiguiente) {
        frameInicial = frameInicial || 0;
        fotogramaSiguiente = (fotogramaSiguiente === undefined) ? true : fotogramaSiguiente;
        if (Utils.typeOf(elemento) === "array") {
            for (var i = 0; i < elemento.length; i++) {
                detenerEnFotograma(elemento[i], frameInicial, fotogramaSiguiente);
                if (fotogramaSiguiente && Utils.typeOf(frameInicial) !== "string") {
                    frameInicial += 1;
                }
            }
        } else {
            $.when(elemento, frameInicial, fotogramaSiguiente).done(function (elemento, frameInicial, fotogramaSiguiente) {
                elemento = Display.get(elemento);
                if (Utils.typeOf(frameInicial) === "string") {
                    var posicion = elemento.getLabelPosition(frameInicial) / 1000;
                    frameInicial = posicion || frameInicial;
                }
                elemento.stop(frameInicial * 1000);
            });
        }
    }

    function tipoDeVariable(elemento) {
        return $.type(elemento);
    }

})(jQuery);
/*global Drag,console,Display,jQuery,Options*/
/*jshint -W020 */

/**
Permite mover los elementos en la pantalla.
@class Drag
*/
(function ($) {

    Drag = {};

    var funcionDeRetornoDrop = function () {};
    var funcionDeRetornoDrag = function () {};
    var funcionDeRetornoStart = function () {};
    var posicionInicial = {
        "x": 0,
        "y": 0
    };
    var posicionDeCursor = {
        "x": 0,
        "y": 0
    };

    /**
    Habilita la opcion de arrastrar y soltar un elemento, se puede pasar el elemento o un array con los elementos a mover.
    @method Drag.load
    @param elemento {*} Elementos o array de elementos para aplicar accion.
    @param [origen=true] {Boolean} Si se desea que el elemento retorne al punto de origen donde se tomo cuando se suelte.
    @param [limite=Stage] {(Object|String)} Elemento que limitara el movimiento del objeto
    */
    Drag.load = function (elemento, origen, limite) {
        try {
            cargarDrag(elemento, origen, limite);
        } catch (error) {
            console.error("Drag.load: " + error);
        }
    };

    /**
    @method Drag.remove
    @param elemento {*} Elemento o elementos a eliminar el evento del Drag.
    @example
        //eliminar Drag de un elemento
        Drag.remove("simbolo");
        //elimina Drag de un array
        var array = [elemento1, elemento2];
        Drag.remove(array);
    */
    Drag.remove = function (elemento) {
        try {
            eliminarDrag(elemento);
        } catch (error) {
            console.error("Drag.remove: " + error);
        }
    };

    /**
    Enl a funcion que retornara se pasa como parametro el elemento que se estaba arrastrando.
    @method Drag.functionReturnDrop
    @param funcion {Function} Funcion que se ejecutara.
    @example
        //se indica que cuando se suelte un elemento llame a la funcion
        Drag.functionReturnDrop (funcion);
    */
    Drag.functionReturnDrop = function (funcion) {
        try {
            cargarFuncionDrop(funcion);
        } catch (error) {
            console.error("Drag.functionReturnDrop: " + error);
        }
    };

    /**
    Enl a funcion que retornara se pasa como parametro el elemento que se estaba arrastrando.
    Se ejecuta mientras se este moviendo el elemento
    @method Drag.functionReturnDrag
    @param funcion {Function} Funcion que se ejecutara.
    @example
        //se ejecuta cuando se tome el elemento para arrastrar
        Drag.functionReturnDrag (funcion);
    */
    Drag.functionReturnDrag = function (funcion) {
        try {
            cargarFuncionDrag(funcion);
        } catch (error) {
            console.error("Drag.functionReturnDrag: " + error);
        }
    };

    /**
    Enl a funcion que retornara se pasa como parametro el elemento que se va a arrastrar.
    @method Drag.functionReturnStart
    @param funcion {Function} Funcion que se ejecutara.
    @example
        //se ejecuta cuando se tome el elemento para arrastrar
        Drag.functionReturnStart (funcion);
    */
    Drag.functionReturnStart = function (funcion) {
        try {
            cargarFuncionStart(funcion);
        } catch (error) {
            console.error("Drag.functionReturnDrag: " + error);
        }
    };

    /**
    Retorna la posicion actual del cursor.
    @method Drag.cursorPosition
    @return {Object} Posicion Posicion X y Y.
    @example
        Drag.cursorPosition().x;
        Drag.cursorPosition().y;
    */
    Drag.cursorPosition = function () {
        return posicionDeCursor;
    };

    function cargarDrag(elemento, retornarPosicionInicial, limiteParaDrag) {
        retornarPosicionInicial = (retornarPosicionInicial === undefined) ? true : retornarPosicionInicial;
        limiteParaDrag = limiteParaDrag || "Stage";
        if (tipoDeVariable(elemento) === 'array') {
            for (var i = 0; i < elemento.length; i++) {
                cargarDrag(elemento[i], retornarPosicionInicial, limiteParaDrag);
            }
        } else {
            elemento = Display.get(elemento);
            limiteParaDrag = Display.getId(limiteParaDrag);
            elemento.draggable({
                start: function (cursor) {
                    almacenarPosicionCursor(cursor);
                    posicionInicial.x = elemento.position().x;
                    posicionInicial.y = elemento.position().y;
                    Display.zIndex(elemento);
                    funcionDeRetornoStart(elemento);
                },
                drag: function (cursor) {
                    almacenarPosicionCursor(cursor);
                    funcionDeRetornoDrag(elemento);
                },
                axis: Options.drag().eje,
                stop: function (cursor) {
                    almacenarPosicionCursor(cursor);
                    if (retornarPosicionInicial) {
                        Display.position(elemento, posicionInicial.x, posicionInicial.y);
                    }
                    funcionDeRetornoDrop(elemento);
                },
                containment: "#" + limiteParaDrag
            });
            Display.get(elemento).css({
                "cursor": "pointer"
            });
        }
    }

    function almacenarPosicionCursor(cursor) {
        posicionDeCursor.x = cursor.pageX - $("#Stage").offset().left;
        posicionDeCursor.y = cursor.pageY - $("#Stage").offset().top;
    }

    function eliminarDrag(elemento) {
        if (tipoDeVariable(elemento) === 'array') {
            for (var i = 0; i < elemento.length; i++) {
                eliminarDrag(elemento[i]);
            }
        } else {
            elemento = Display.get(elemento);
            elemento.draggable('disable');
            elemento.css({
                "cursor": "default"
            });
        }
    }

    function cargarFuncionDrop(funcion) {
        funcion = funcion || function () {};
        funcionDeRetornoDrop = funcion;
    }

    function cargarFuncionDrag(funcion) {
        funcion = funcion || function () {};
        funcionDeRetornoDrag = funcion;
    }

    function cargarFuncionStart(funcion) {
        funcion = funcion || function () {};
        funcionDeRetornoStart = funcion;
    }

    function tipoDeVariable(elemento) {
        return $.type(elemento);
    }

})(jQuery);
/*global jQuery,console,Event,Display,setInterval,clearInterval*/
/*jshint -W020*/

/**
Maneja los eventos de los elementos de la multimedia.
@class Event
*/
(function ($) {

    Event = {};

    var eventosDeEnterFrame = [];
    var arrayElementosVerificarPosicion = [];

    /**
    @method Event.listener
    @param elemento {*} Elemento o elementos a aplicar el listener
    @param evento {String} Tipo de evento.
    @param funcion {Function} Funcion a ejecutar cuando se active el evento.
    @example
        //se aplica el evento de un elemento
        Event.listener("elemento","mouseUp", funcion1);
        //se aplica el evento a un grupo de elementos
        var elementos = ["elemento1","elemento2","elemento3"];
        Event.listener(elementos,"mouseDown", funcion);
        //se aplica un evento a un unico objeto
        Display.get("elemento").listener("mouseDown",funcion);
        //se aplica el evento de un elemento que se pasa como parametro de funcion
        function botonPresionado (elemento){
            elemento.hide();
        }
        //aplicar un listener a un objeto
        var elemento = Display.get("elemento");
        elemento.listener("mouseup",funcionRetorno);
    */
    Event.listener = function (elemento, evento, funcion) {
        try {
            aplicarListener(elemento, evento, funcion);
        } catch (error) {
            console.error("Event.listener: " + error);
        }
    };

    /**
    @method Event.removeListener
    @param elemento {*} Elemento o elementos a eliminar el listener.
    @param evento {String} Tipo de evento.
    @example
        //se elimina el evento de un elemento
        Event.removeListener("elemento","mouseUp");
        //se elimina el evento a un grupo de elementos
        var elementos = ["elemento1","elemento2","elemento3"];
        Event.removeListener(elementos,"mouseDown");
        //se elimina un evento a un unico objeto
        Display.get("elemento").removeListener("mouseDown");
        //se elimina el evento de un elemento que se pasa como parametro de funcion
        function botonPresionado (elemento){
            elemento.removeListener("mouseDown");
        }
    */
    Event.removeListener = function (elemento, evento) {
        try {
            eliminarListener(elemento, evento);
        } catch (error) {
            console.error("Event.removeListener: " + error);
        }
    };

    /**
    Cerifica cuando un elemento llego a un punto en la linea de tiempo.
    @method Event.verifyPosition
    @param elemento {(String|Object)} Elemento para verificar la posicion.
    @param posicionLineaTiempo {(String|Number)} Posicion a verificar en la linea de tiempo.
    @param funcionRetorno {(Function|Array)} Funcion o funciones a retornar.
    @example
        //se verifica si un simbolo pasa por un label
        Event.verifyPosition("simbolo","fin",funcion);
        //se verifica si un simbolo pasa por un label y se llama a varias funciones
        Event.verifyPosition("simbolo","fin",[funcion1, funcion2, funcion3]);
        //se verifica si el simbolo pasa por 2 segundos
        Event.verifyPosition("simbolo", 2000, funcion);
    */
    Event.verifyPosition = function (elemento, posicionLineaTiempo, funcionRetorno) {
        try {
            verificarPosicionElemento(elemento, posicionLineaTiempo, funcionRetorno);
        } catch (error) {
            console.error("Event.verifyPosition: " + error);
        }
    };

    /**
    @method Event.verifyPositionStop
    @param elemento {(String|Object)} Elemento a eliminar el evento.
    @example
        Event.verifyPositionStop("elemento");
    */
    Event.verifyPositionStop = function (elemento) {
        try {
            detenerVerificarPosicionElemento(elemento);
        } catch (error) {
            console.log("Event.verifyPositionStop: " + error);
        }
    };

    /**
    @method Event.click
    @param elemento {*} Elemento a aplicar el listener
    @param funcion {Function} Funcion a ejecutar cuando se active el evento.
    @example
        //se aplica el evento de un elemento
        Event.click("elemento", funcion1);
        //se aplica el evento a un objeto jQuery
        var elemento = Display.get("elemento");
        elemento.click(funcionRetorno);
    */
    Event.click = function (elemento, funcionRetorno) {
        try {
            cargarEventoClick(elemento, funcionRetorno);
        } catch (error) {
            console.error("Event.click: " + error);
        }
    };

    /**
    @method Event.removeClick
    @param elemento {*} Elemento a aplicar el listener
    @example
        //se eliminar el evento de un elemento
        Event.removeClick("elemento");
        //se elimina el evento a un objeto jQuery
        var elemento = Display.get("elemento");
        elemento.removeClick(funcionRetorno);
    */
    Event.removeClick = function (elemento) {
        try {
            eliminarEventoClick(elemento);
        } catch (error) {
            console.error("Event.removeClick: " + error);
        }
    };

    function aplicarListener(elemento, evento, funcion) {
        if (tipoDeVariable(elemento) === 'array') {
            for (var i = 0; i < elemento.length; i++) {
                aplicarListener(elemento[i], evento, funcion);
            }
        } else {
            elemento = Display.get(elemento);
            evento = evento.toLowerCase();
            if (evento === "enterframe") {
                aplicarEnterFrame(elemento, funcion);
            } else {
                var noExisteEvento = verificarSiEventoExiste(elemento, evento);
                if (noExisteEvento) {
                    elemento.bind(evento, function () {
                        funcion(elemento);
                    });
                }
            }
        }
    }

    function verificarSiEventoExiste(elemento, evento) {
        if (elemento[0] === undefined) {
            return false;
        }
        var eventosDelElemento = $._data(elemento[0], 'events');
        if (eventosDelElemento) {
            if (eventosDelElemento[evento]) {
                return false;
            }
        }
        return true;
    }

    function aplicarEnterFrame(elemento, funcionRetorno) {
        var tiempoEjecucion = setInterval(function () {
            funcionRetorno(elemento);
        }, 0.001);
        var propiedadesEnterFrame = {
            "idElemento": elemento.attr("id"),
            "tiempoEjecucion": tiempoEjecucion
        };
        eventosDeEnterFrame.push(propiedadesEnterFrame);
    }

    function eliminarListener(elemento, evento) {
        if (tipoDeVariable(elemento) === 'array') {
            for (var i = 0; i < elemento.length; i++) {
                eliminarListener(elemento[i], evento);
            }
        } else {
            elemento = Display.get(elemento);
            evento = evento.toLowerCase();
            if (evento === "enterframe") {
                eliminarEnterFrame(elemento);
            } else {
                elemento.unbind(evento);
            }
        }
    }

    function eliminarEnterFrame(elemento) {
        for (var i = 0; i < eventosDeEnterFrame.length; i++) {
            var propiedadesEnterFrame = eventosDeEnterFrame[i];
            if (propiedadesEnterFrame.idElemento === elemento.attr("id")) {
                clearInterval(propiedadesEnterFrame.tiempoEjecucion);
                eventosDeEnterFrame.splice(i, 1);
                break;
            }
        }
    }

    function verificarPosicionElemento(elemento, posicionLineaTiempo, funcionRetorno) {
        elemento = Display.get(elemento);
        if (typeof posicionLineaTiempo === "string") {
            posicionLineaTiempo = elemento.getLabelPosition(posicionLineaTiempo);
        }
        var propiedadesDeElemento = {
            "idElemento": elemento.attr("id"),
            "posicion": posicionLineaTiempo,
            "funcionRetorno": funcionRetorno
        };
        arrayElementosVerificarPosicion.push(propiedadesDeElemento);
        aplicarEnterFrame(elemento, enterFrameElemento);
    }

    function enterFrameElemento(elemento) {
        var propiedadesDeElemento = propiedadesElementoVerificar(elemento);
        var funcionRetorno = propiedadesDeElemento.funcionRetorno;
        var posicion = propiedadesDeElemento.posicion;
        //el -50 y +50 es para darle un promedio de acercamiento a la linea de tiempo, ya que la medida en milisegundos es dificil de obtener
        if (elemento.getPosition() >= (posicion - 50) && elemento.getPosition() <= (posicion + 50)) {
            if (tipoDeVariable(funcionRetorno) === 'array') {
                for (var i = 0; i < funcionRetorno.length; i++) {
                    funcionRetorno[i]();
                }
            } else {
                funcionRetorno();
            }
            if (arrayElementosVerificarPosicion.length > 0) {
                eliminarEnterFrame(elemento);
                eliminarElementoDeArrayVerificarPosicion(elemento);
            }
        }
    }

    function propiedadesElementoVerificar(elemento) {
        for (var i = 0; i < arrayElementosVerificarPosicion.length; i++) {
            var propiedadesDeElemento = arrayElementosVerificarPosicion[i];
            if (propiedadesDeElemento.idElemento === elemento.attr("id")) {
                return propiedadesDeElemento;
            }
        }
    }

    function eliminarElementoDeArrayVerificarPosicion(elemento) {
        for (var i = 0; i < arrayElementosVerificarPosicion.length; i++) {
            var propiedadesDeElemento = arrayElementosVerificarPosicion[i];
            if (propiedadesDeElemento.idElemento === elemento.attr("id")) {
                arrayElementosVerificarPosicion.splice(i, 1);
                break;
            }
        }
    }

    function detenerVerificarPosicionElemento(elemento) {
        elemento = Display.get(elemento);
        eliminarEnterFrame(elemento);
        eliminarElementoDeArrayVerificarPosicion(elemento);
    }

    function cargarEventoClick(elemento, funcionRetorno) {
        if (tipoDeVariable(elemento) === "array") {
            for (var i = 0; i < elemento.length; i++) {
                cargarEventoClick(elemento[i], funcionRetorno);
            }
        } else {
            aplicarListener(elemento, "mouseup", funcionRetorno);
            elemento = Display.get(elemento);
            elemento.css({
                "cursor": "pointer"
            });
        }
    }

    function eliminarEventoClick(elemento, funcionRetorno) {
        if (tipoDeVariable(elemento) === "array") {
            for (var i = 0; i < elemento.length; i++) {
                eliminarEventoClick(elemento[i], funcionRetorno);
            }
        } else {
            eliminarListener(elemento, "mouseup", funcionRetorno);
            elemento = Display.get(elemento);
            elemento.css({
                "cursor": "default"
            });
        }
    }

    function tipoDeVariable(elemento) {
        return $.type(elemento);
    }

})(jQuery);
/*global $,jQuery,Options,console,Html,Display,Utils,Button,Sound*/
/*jshint -W020*/

(function ($) {

    Html = {};


    Html.load = function () {
        cargarSimbolosEnContenedor();
        activarEfectosButtonOver();
        activarVentanaModal();
        colorNiveles();
        tipoDeNiveles();
        controlDeAudio();
        botonGrabarAudio();
        botonesDeAudio();
    };

    function cargarSimbolosEnContenedor() {
        $("[simbolo]").each(function () {
            if ($(this).children().length === 0) {
                var elemento = Display.addChild($(this).attr("simbolo"));
                if (elemento) {
                    elemento.appendTo($(this));
                    elemento.css({
                        "position": "relative"
                    });
                    $(this).css({
                        "width": elemento.width(),
                        "height": elemento.height()
                    });
                }
            }
        });
    }

    function activarEfectosButtonOver() {
        $("[buttonover]").each(function () {
            if ($(this).attr("id") === undefined) {
                $(this).attr("id", "id_buttonover_" + (Math.round(Math.random() * 100000000)));
            }
            Button.over($("#" + $(this).attr("id")));
        });
    }

    function activarVentanaModal() {
        $("[modal]").each(function () {
            if ($(this).attr("id") === undefined) {
                $(this).attr("id", "id_modal_" + (Math.round(Math.random() * 100000000)));
            }
            Utils.modal($(this), $(this).attr("modal"));
        });
    }

    function colorNiveles() {
        $("[negrilla], [bold]").each(function () {
            var tipoDeLinea = "normal";
            if ($(this).attr("negrilla") === "true" || $(this).attr("bold") === "true") {
                tipoDeLinea = "bold";
            }
            $(this).css({
                "font-weight": tipoDeLinea
            });
        });
    }

    function tipoDeNiveles() {
        $("ul[type=none], ol[type=none], li[type=none]").each(function () {
            $(this).css({
                "list-style-type": "none"
            });
        });
    }

    function botonGrabarAudio() {
        $("div[microfono]").each(function () {
            if ($(this).children().length === 0) {
                var textElement = $(this).text();
                $(this).html("");
                var elemento = Display.addChild($(this).attr("microfono"));
                if (elemento) {

                    elemento.appendTo($(this));

                    elemento.css({
                        "position": "relative"
                    });
                    $(this).css({
                        "width": elemento.width(),
                        "height": elemento.height()
                    });
                }
                Sound.speak(elemento);
                Sound.speakText(textElement, elemento);

            }
        });
    }

    function controlDeAudio() {
        $("control").each(function () {
            if ($(this).children().children().length <= 1) {
                var contenedorBoton = $(this).children();
                var botonDePlay = Display.addChild(contenedorBoton.attr("botonDePlay"));
                if (botonDePlay) {
                    botonDePlay.appendTo(contenedorBoton);
                    botonDePlay.css({
                        "position": "relative"
                    });
                    contenedorBoton.css({
                        "width": botonDePlay.width(),
                        "height": botonDePlay.height()
                    });
                }
                if ($(this).attr("fondo")) {
                    Options.controlAudio({
                        colorFondo: $(this).attr("fondo")
                    });
                }
                if ($(this).attr("barra")) {
                    Options.controlAudio({
                        colorBarra: $(this).attr("barra")
                    });
                }
                cargarControlDeAudio($(this));
            }
        });

    }

    function cargarControlDeAudio(contenedor) {
        var controles = [];
        var sonidos = [];
        var botonPlay = contenedor.children();
        var idAudio = "control-audio-" + botonPlay.children().attr("id");
        var etiquetasHtml = "<div class='audio-control' id='" + idAudio + "'>" +
            "<div class='boton-play'></div>" +
            "<div class='slider-audio' id='slider-" + idAudio + "' onClick='Sound.positionBarAudio(this,event)'>" +
            "<div class='barra-progreso'></div>" +
            "</div>" +
            "</div>";
        contenedor.append(etiquetasHtml);
        botonPlay.appendTo($("#" + idAudio + " .boton-play"));
        var anchoBotonPlay = botonPlay.width() + 5;
        $("#" + idAudio + " .slider-audio").css({
            "margin-left": anchoBotonPlay + "px"
        });
    }

    function botonesDeAudio() {
        Sound.loadButtonPlay();
    }

})(jQuery);
/*global jQuery,Sound,console,Input,Display,Options,Style,Timer,Text,Arrays,Button,Utils,Event,setTimeout*/
/*jshint -W020*/

/**
@class Input
*/
(function ($) {

    Input = {};

    var contenedorTexto;
    var intentosMalos;
    var funcionFinal;
    var funcionEstado;
    var inputs;
    var contenedorResultados;
    var resultadosActuales;
    var textosBuenos;
    var tipoDeInput;
    var intentosBuenos;
    var textosEscritos;
    var arraysTextosContendor;
    var botonVerificar;
    var resultadoDeJuego;
    var preguntaActual;

    /**
    @method Input.load
    @param contenedor {(String|Object)} Elemento donde se cargara el contenido para el juego
    @example
        Input.load("elemento.contenedor");
    */
    Input.load = function (contenedor) {
        try {
            cargarInput(contenedor);
        } catch (error) {
            console.error("Input.load: " + error);
        }
    };

    /**
    En el contenido el texto que se quiera escribir debe estar entre la etiqueta "completa" de la siguiente forma:
        Apreciado aprendiz como <completa>logro</completa> alcanzado en el <completa>desarrollo</completa>.
    Para el boton de verificacion debe tener el contendor el atributo "boton":
        <div boton><img src="images/verificar.png"/></div>
    Si se agrega * dentro de la etiqueta completa se valida cualquier texto que se agregue.
    @method Input.textVerify
    @param rutaTexto {String} URl o ubicacion del texto
    @example
        //se carga el texto1.html de la carpeta escribir
        Input.textVerify ("textos/escribir/texto1");
    */
    Input.textVerify = function (rutaTexto) {
        try {
            cargarArchivoDeTexto(rutaTexto);
        } catch (error) {
            console.error("Input.textVerify: " + error);
        }
    };

    /**
    Carga el boton de verificar como simbolo desde la ventana sin necesidad de estar en el HTML
    @method Input.button
    */
    Input.button = function (boton) {
        try {
            cargarBotonInput(boton);
        } catch (error) {
            console.error("Input.button: " + error);
        }
    };

    /**
    @method Input.remove
    @example
        Input.remove();
    */
    Input.remove = function () {
        try {
            eliminarInput();
        } catch (error) {
            console.error("Input.remove: " + error);
        }
    };

    /**
    Ejecuta la funcion cuando se presiona el boton de verificar y retorna la cantidad de intentos malos que lleva.
    @method Input.stateInput
    @param funcion {Function} Funcion a ejecutar cuando se presione el boton de verificar.
    @example
        Input.stateInput(funcion);
        function funcion(intentos){
            alert("intentos restantes: " + intentos);
        }
    */
    Input.stateInput = function (funcion) {
        try {
            cargarFuncionEstado(funcion);
        } catch (error) {
            console.error("Input.stateInput: " + error);
        }
    };

    /**
    Funcion que se ejecuta cuando termina el juego, envia como parametro a la funcion un booleano, true si se completo y false si perdio.
    @method Input.finish
    @param funcion {Function} Funcion a retornar.
    @example
        //Se indica que al finalizar llame a la funcion final
        Input.finish(final);
        function final(resultado){
            console.log(resultado); //imprime el boolean true si gana o false si perdio
        }
    */
    Input.finish = function (funcion) {
        try {
            cargarFuncionFinal(funcion);
        } catch (error) {
            console.error("Input.finish: " + error);
        }
    };

    function cargarInput(contenedor) {
        contenedorTexto = verificarContenedorTexto(contenedor);
        intentosMalos = Options.input().intentosMalos;
        funcionFinal = function () {};
        funcionEstado = function () {};
        botonVerificar = $();
        inputs = [];
        textosBuenos = {};
        textosEscritos = {};
        tipoDeInput = "input";
        resultadoDeJuego = true;
        arraysTextosContendor = [];
        preguntaActual = 0;
    }

    function eliminarInput() {
        eliminarListenerDeInputs();
        eliminarListenerBoton();
        desactivarBoton();
        inputs = [];
        textosBuenos = {};
        textosEscritos = {};
    }

    function verificarContenedorTexto(contenedor) {
        contenedor = Display.get(contenedor);
        var contenedorTexto = Display.get(contenedor.getName(true) + "." + Options.containerText());
        if (!$.isEmptyObject(contenedorTexto)) {
            return contenedorTexto;
        }
        return contenedor;
    }

    function cargarArchivoDeTexto(texto) {
        if (Utils.typeOf(texto) === "array") {
            arraysTextosContendor = texto;
            cargarArchivoDeTexto(arraysTextosContendor[preguntaActual]);
        } else {
            $.when($.get(texto + ".html")).then(function (archivo) {
                cargarTextoContenedor(archivo);
                almacenarInputsEnArray();
                almacenarTextAreaEnArray();
                almacenarSelectEnArray();
                almacenarBotonVerificar();
            });
        }
    }

    function cargarTextoContenedor(archivo) {
        Style.presentacion();
        Text.load(contenedorTexto, archivo);
        Style.contenedor(contenedorTexto);
    }

    function almacenarInputsEnArray() {
        var numeroInput = 0;
        $("completa").each(function () {
            tipoDeInput = "input";
            var tipoEscritura = $(this).attr("type") || "text";
            var textoBueno = $(this).html();
            var inputHtml = "<input id='input-" + numeroInput + "' type='" + tipoEscritura + "' />";
            var anchoDelInput;
            if (Options.input().anchoInput === "auto") {
                anchoDelInput = $(this).width() + 10;
            } else {
                anchoDelInput = Options.input().anchoInput;
            }
            $(this).html(inputHtml);
            inputHtml = $("#input-" + numeroInput);
            inputHtml.css({
                "width": anchoDelInput,
                "max-width": anchoDelInput,
                "padding-left": "4px",
                "padding-right": "4px"
            });
            inputHtml.addClass("form-control center");
            numeroInput += 1;
            inputs.push(inputHtml);
            var textoActualBueno = textoBueno.toLocaleLowerCase();
            textoActualBueno = textoActualBueno;
            textosBuenos[inputHtml.attr("id")] = textoActualBueno;
            textosEscritos[inputHtml.attr("id")] = "";
            verificarTipoInput(inputHtml);
        });
        listenerDeInputs();
    }

    function almacenarTextAreaEnArray() {
        contenedorResultados = [];
        resultadosActuales = {};
        var numeroTextArea = 0;
        var numeroResultado = 0;
        $("verificar").each(function () {
            tipoDeInput = "textarea";
            var textoBueno = $(this).html();
            var textAreaHtml = "<textarea id='textarea-" + numeroTextArea + "' rows='3'/>";
            $(this).html(textAreaHtml);
            textAreaHtml = $("#textarea-" + numeroTextArea);
            textAreaHtml.css({
                "resize": "none"
            });
            textAreaHtml.addClass("form-control");
            numeroTextArea += 1;
            inputs.push(textAreaHtml);
            var textoActualBueno = textoBueno.toLocaleLowerCase();
            textoActualBueno = textoActualBueno.split(/[,;.\-\_]/);
            textosBuenos[textAreaHtml.attr("id")] = textoActualBueno;
            textosEscritos[textAreaHtml.attr("id")] = "";
            verificarTipoInput(textAreaHtml);
        });
        $("resultado").each(function () {
            var resultado = "<div id='resultado-" + numeroResultado + "'/>";
            $(this).html(resultado);
            resultado = $("#resultado-" + numeroResultado);
            resultado.css({
                "overflow-y": "auto",
                "min-height": "60px",
                "max-height": "1000px",
                "padding": "10px",
                "border": "1px solid #C9C6C6",
                "border-radius": "5px",
                "margin-top": "15px",
                "background-color": "#F7F7F7"
            });
            contenedorResultados.push(resultado);
            resultadosActuales["textarea-" + numeroResultado] = [];
            numeroResultado += 1;
        });
        listenerDeInputs();
    }

    function almacenarSelectEnArray() {
        var numeroInput = 0;
        $("select").each(function () {
            tipoDeInput = "select";
            var selectHtml = $(this);
            selectHtml.attr("id", "select-" + numeroInput);
            selectHtml.addClass("form-control");
            selectHtml.css("cssText", "width: auto; display: inline !important");
            numeroInput += 1;
            inputs.push(selectHtml);
            var textoActualBueno = selectHtml.find("[correcta]").text();
            textosBuenos[selectHtml.attr("id")] = textoActualBueno;
            textosEscritos[selectHtml.attr("id")] = "";
        });
        if (tipoDeInput === "select") {
            cargarOpcionesDefectoSelect();
            listenerDeSelect();
        }
    }

    function cargarOpcionesDefectoSelect() {
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].append("<option selected='selected'> </option>");
        }
    }

    function listenerDeSelect() {
        for (var i = 0; i < inputs.length; i++) {
            var selectActual = inputs[i];
            selectActual.change(opcionesActivasSelect);
        }
    }

    function opcionesActivasSelect(selectActual) {
        var idSelectActivo = selectActual.target.id;
        textosEscritos[idSelectActivo] = $(this).val();
        if (selectLlenos()) {
            listenerBoton();
            activarBoton();
        }
    }

    function selectLlenos() {
        for (var i = 0; i < inputs.length; i++) {
            var selectActual = inputs[i];
            if (textosEscritos[selectActual.attr("id")] === "" || textosEscritos[selectActual.attr("id")] === " ") {
                return false;
            }
        }
        return true;
    }

    function verificarSelectSeleccionados() {
        var intentosActuales = intentosMalos;
        var intentosMostrarEstado = 0;
        intentosBuenos = 0;
        for (var i = 0; i < inputs.length; i++) {
            var idSelectActual = inputs[i].attr("id");
            var selectActual = inputs[i];
            if (textosEscritos[idSelectActual] === textosBuenos[idSelectActual]) {
                selectActual.addClass("input-bien");
                intentosBuenos += 1;
            } else {
                selectActual.addClass("input-mal");
                intentosMalos -= 1;
            }
        }
        if (!Options.input().errorPorInput && intentosActuales !== intentosMalos) {
            intentosMalos = intentosActuales - 1;
        }
        if (intentosMalos > 0) {
            intentosMostrarEstado = intentosMalos;
        }
        verificarFinJuego();
        funcionEstado(intentosMostrarEstado);
    }

    function almacenarBotonVerificar() {
        if (botonVerificar.length === 0) {
            $("[boton]").each(function () {
                botonVerificar = $(this);
            });
        }
        desactivarBoton();
    }

    function listenerDeInputs() {
        for (var i = 0; i < inputs.length; i++) {
            var inputActual = inputs[i];
            inputActual.keyup(llenarInput);
        }
    }

    function eliminarListenerDeInputs() {
        for (var i = 0; i < inputs.length; i++) {
            var inputActual = inputs[i];
            inputActual.unbind("keydown");
            inputActual.unbind("keyup");
        }
    }

    function listenerBoton() {
        switch (tipoDeInput) {
        case "input":
            Event.click(botonVerificar, verificarTextosEscritos);
            break;
        case "textarea":
            Event.click(botonVerificar, verificarTextosEscritosTextArea);
            break;
        case "select":
            Event.click(botonVerificar, verificarSelectSeleccionados);
            break;
        }
    }

    function eliminarListenerBoton() {
        Event.removeClick(botonVerificar);
    }

    function desactivarBoton() {
        Button.over(botonVerificar, false);
        botonVerificar.css({
            "opacity": Options.input().opacidadVerificar,
            "cursor": "default"
        });
    }

    function activarBoton() {
        Button.over(botonVerificar);
        botonVerificar.css({
            "opacity": 1,
            "cursor": "pointer"
        });
        Options.input().funcionActivarVerificar();
    }

    function llenarInput(input) {
        textosEscritos[$(this).attr("id")] = $(this).val().toLocaleLowerCase();
        if (inputsLlenos()) {
            listenerBoton();
            activarBoton();
        } else {
            desactivarBoton();
            eliminarListenerBoton();
        }
        if (tipoDeInput === "textarea") {
            llenarResultados($(this));
        }
    }

    function llenarResultados(inputActual) {
        var posicionResultado = inputActual.attr("id").substr(inputActual.attr("id").length - 1);
        var resultadoActual = contenedorResultados[posicionResultado];
        var textoResultado = inputActual.val().toLocaleLowerCase();
        var arrayTextos = textoResultado.split("-"); ///[,;.\-\_ ]/
        resultadosActuales[inputActual.attr("id")] = arrayTextos;
        textoResultado = "";
        for (var i = 0; i < arrayTextos.length; i++) {
            textoResultado += "<span id='" + inputActual.attr("id") + "-resultado-" + i + "' >" + arrayTextos[i] + "</span> - ";
        }
        textoResultado = textoResultado.substr(0, textoResultado.length - 2);
        resultadoActual.html(textoResultado);
    }

    function inputsLlenos() {
        for (var i = 0; i < inputs.length; i++) {
            var inputActual = inputs[i];
            if (textosEscritos[inputActual.attr("id")] === "") {
                return false;
            }
        }
        return true;
    }

    function verificarTextosEscritos() {
        var intentosMostrarEstado = 0;
        var intentosActuales = intentosMalos;
        intentosBuenos = 0;
        for (var numeroInput = 0; numeroInput < inputs.length; numeroInput++) {
            var inputActual = inputs[numeroInput];
            var nombreInput = inputActual.attr("id");
            var textoActualInput = textosEscritos[nombreInput].trim();
            var textoActualBueno = textosBuenos[nombreInput].trim();
            if (textoActualBueno === textoActualInput || textoActualBueno === "*") {
                intentosBuenos += 1;
                inputActual.addClass("input-bien");
            } else {
                intentosMalos -= 1;
                inputActual.addClass("input-mal");
            }
        }
        if (!Options.input().errorPorInput && intentosActuales !== intentosMalos) {
            intentosMalos = intentosActuales - 1;
        }
        if (intentosMalos > 0) {
            intentosMostrarEstado = intentosMalos;
        }
        verificarFinJuego();
        funcionEstado(intentosMostrarEstado);
    }

    function verificarTextosEscritosTextArea() {
        var intentosMostrarEstado = 0;
        var intentosActuales = intentosMalos;
        intentosBuenos = 0;
        for (var numeroInput = 0; numeroInput < inputs.length; numeroInput++) {
            var idDelInput = inputs[numeroInput].attr("id");
            var arrayResultado = resultadosActuales[idDelInput];
            var arrayTextosBuenos = textosBuenos[idDelInput];
            var todasLasOpcionesBuenas = true;
            for (var i = 0; i < arrayTextosBuenos.length; i++) {
                var textoActual = arrayResultado[i];
                if (textoActual !== undefined) {
                    textoActual = textoActual.trim();
                }
                if (Arrays.indexOf(arrayTextosBuenos, textoActual) !== -1) {
                    $("#" + idDelInput + "-resultado-" + i).css({
                        "color": "#75DD6C"
                    });
                } else {
                    intentosMalos -= 1;
                    todasLasOpcionesBuenas = false;
                    $("#" + idDelInput + "-resultado-" + i).css({
                        "color": "#F00"
                    });
                }
            }
            if (todasLasOpcionesBuenas) {
                intentosBuenos += 1;
            }
        }
        if (!Options.input().errorPorInput && intentosActuales !== intentosMalos) {
            intentosMalos = intentosActuales - 1;
        }
        if (intentosMalos > 0) {
            intentosMostrarEstado = intentosMalos;
        }
        verificarFinJuego();
        funcionEstado(intentosMostrarEstado);
    }

    function verificarFinJuego() {
        Sound.stopPlayButtons();
        Sound.stop();
        if (intentosMalos <= 0) {
            resultadoDeJuego = false;
        }
        if (arraysTextosContendor.length > 0) {
            desactivarInputParaEscribir();
            preguntaActual += 1;
            //Termina el juego
            if (preguntaActual >= arraysTextosContendor.length) {
                eliminarInput();
                Timer.load(Options.input().tiempoDeEspera, finDeJuego);
            } else {
                //Se carga otra pagina 
                eliminarInput();
                Timer.load(Options.input().tiempoDeEspera, function () {
                    cargarArchivoDeTexto(arraysTextosContendor[preguntaActual]);
                    Options.input().funcionCambioPagina();
                });
            }
        } else {
            if (intentosMalos <= -Options.input().intentosFinales) {
                retroalimentacion();
            }
            if (intentosBuenos >= inputs.length) {
                finDeJuego();
                desactivarInputParaEscribir();
            }
        }
    }

    function finDeJuego() {
        Sound.removePlayButtons();
        eliminarInput();
        funcionEstado = function () {};
        funcionFinal(resultadoDeJuego);
    }

    function cargarFuncionFinal(funcion) {
        funcionFinal = funcion || function () {};
    }

    function cargarFuncionEstado(funcion) {
        funcionEstado = funcion || function () {};
        funcionEstado(intentosMalos);
    }

    function verificarTipoInput(input) {
        if (input.attr("type") === "number") {
            input.bind("keyup", validarNumeros);
            input.attr({
                "max": input.attr("maxlength")
            });
        }
        if (textosBuenos[input.attr("id")] === "*") {
            input.attr({
                "maxlength": 100
            });
            input.css({
                "width": "150px"
            });
        }
    }

    function validarNumeros(teclado) {
        //Rango de numeros de 0 a 9
        if (teclado.keyCode < 48 || teclado.keyCode > 57 || teclado.keyCode === 9) {
            //si hay punto o la tecla de borrado o tabuladora
            if (teclado.keyCode == 190 || teclado.keyCode == 8 || teclado.keyCode === 9) {
                return true;
            } else {
                return false;
            }
        }
        return true;
    }

    function retroalimentacion() {
        desactivarBoton();
        eliminarListenerBoton();
        if (Options.input().mostrarOpcionesBuenas) {
            mostrarTextosBuenos();
            Timer.load(0.5, finDeJuego);
        } else {
            finDeJuego();
        }
        desactivarInputParaEscribir();
    }

    function mostrarTextosBuenos() {
        for (var i = 0; i < inputs.length; i++) {
            var inputActual = inputs[i];
            var textoActual;
            switch (tipoDeInput) {
            case "textarea":
                textoActual = textosBuenos[inputActual.attr("id")].toString();
                textoActual = textoActual.replace(/[,]/g, " - ");
                break;
            case "input":
                textoActual = textosBuenos[inputActual.attr("id")];
                break;
            }
            if (textoActual !== "*") {
                inputActual.val(textoActual);
            }
        }
    }

    function desactivarInputParaEscribir() {
        for (var i = 0; i < inputs.length; i++) {
            var inputActual = inputs[i];
            inputActual.attr("disabled", true);
        }
    }

    function cargarBotonInput(boton) {
        botonVerificar = Display.get(boton);
    }

})(jQuery);
/*global Adobe,Event,Display,jQuery*/

(function ($) {

    $.fn.extend({
        position: function () {
            var objecto = {
                "x": Number($(this).css("left").replace("px", "")),
                "y": Number($(this).css("top").replace("px", ""))
            };
            return objecto;
        },
        getPosition: function () {
            return Adobe.getSymbol($(this)).getPosition();
        },
        getLabelPosition: function (params) {
            return Adobe.getSymbol($(this)).getLabelPosition(params);
        },
        play: function (params) {
            if ($(this).length > 0) {
                Adobe.getSymbol($(this)).play(params);
            }
        },
        playReverse: function (params) {
            if ($(this).length > 0) {
                Adobe.getSymbol($(this)).playReverse(params);
            }
        },
        stop: function (params) {
            Adobe.getSymbol($(this)).stop(params);
        },
        variableValues: function () {
            return Adobe.getSymbol($(this)).variableValues;
        },
        listener: function (evento, funcion) {
            Event.listener($(this), evento, funcion);
        },
        removeListener: function (evento) {
            Event.removeListener($(this), evento);
        },
        click: function (funcionRetorno) {
            Event.click($(this), funcionRetorno);
        },
        removeClick: function () {
            Event.removeClick($(this));
        },
        addChild: function (simbolo) {
            Display.addChild(simbolo, $(this));
        },
        removeChild: function (elemento) {
            elemento = elemento || "";
            var elementoEliminar = $(this).attr("id");
            if (typeof elemento !== "string") {
                elemento = Display.getName(elemento);
            }
            if (elemento !== "") {
                elementoEliminar += "_" + elemento.replace([/./g], "_");
            }
            Display.removeChild($("#" + elementoEliminar));
        },
        getName: function (nombreCompleto) {
            nombreCompleto = nombreCompleto || false;
            return Display.getName($(this), nombreCompleto);
        }
    });

})(jQuery);
! function (t) {
    var o = "html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type='button'],input[type='reset'],input[type='submit']{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type='checkbox'],input[type='radio']{box-sizing:border-box;padding:0}input[type='number']::-webkit-inner-spin-button,input[type='number']::-webkit-outer-spin-button{height:auto}input[type='search']{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type='search']::-webkit-search-cancel-button,input[type='search']::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}*:before,*:after{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857143;color:#333;background-color:#fff}input,button,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#428bca;text-decoration:none}a:hover,a:focus{color:#2a6496;text-decoration:underline}a:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}figure{margin:0}img{vertical-align:middle}.img-responsive{display:block;width:100% 9;max-width:100%;height:auto}.img-rounded{border-radius:6px}.img-thumbnail{padding:4px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;display:inline-block;width:100% 9;max-width:100%;height:auto}.img-circle{border-radius:50%}hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,'Courier New',monospace}code{padding:2px 4px;font-size:90%;color:#c7254e;background-color:#f9f2f4;border-radius:4px}kbd{padding:2px 4px;font-size:90%;color:#fff;background-color:#333;border-radius:3px;box-shadow:inset 0 -1px 0 rgba(0,0,0,0.25)}kbd kbd{padding:0;font-size:100%;box-shadow:none}pre{display:block;padding:9.5px;margin:0 0 10px;font-size:13px;line-height:1.42857143;word-break:break-all;word-wrap:break-word;color:#333;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}pre code{padding:0;font-size:inherit;color:inherit;white-space:pre-wrap;background-color:transparent;border-radius:0}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}@media (min-width:768px){.container{width:750px}}@media (min-width:992px){.container{width:970px}}@media (min-width:1200px){.container{width:1170px}}.container-fluid{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}.row{margin-left:-15px;margin-right:-15px}.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12{position:relative;min-height:1px;padding-left:15px;padding-right:15px}.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12{float:left}.col-xs-12{width:100%}.col-xs-11{width:91.66666667%}.col-xs-10{width:83.33333333%}.col-xs-9{width:75%}.col-xs-8{width:66.66666667%}.col-xs-7{width:58.33333333%}.col-xs-6{width:50%}.col-xs-5{width:41.66666667%}.col-xs-4{width:33.33333333%}.col-xs-3{width:25%}.col-xs-2{width:16.66666667%}.col-xs-1{width:8.33333333%}.col-xs-pull-12{right:100%}.col-xs-pull-11{right:91.66666667%}.col-xs-pull-10{right:83.33333333%}.col-xs-pull-9{right:75%}.col-xs-pull-8{right:66.66666667%}.col-xs-pull-7{right:58.33333333%}.col-xs-pull-6{right:50%}.col-xs-pull-5{right:41.66666667%}.col-xs-pull-4{right:33.33333333%}.col-xs-pull-3{right:25%}.col-xs-pull-2{right:16.66666667%}.col-xs-pull-1{right:8.33333333%}.col-xs-pull-0{right:auto}.col-xs-push-12{left:100%}.col-xs-push-11{left:91.66666667%}.col-xs-push-10{left:83.33333333%}.col-xs-push-9{left:75%}.col-xs-push-8{left:66.66666667%}.col-xs-push-7{left:58.33333333%}.col-xs-push-6{left:50%}.col-xs-push-5{left:41.66666667%}.col-xs-push-4{left:33.33333333%}.col-xs-push-3{left:25%}.col-xs-push-2{left:16.66666667%}.col-xs-push-1{left:8.33333333%}.col-xs-push-0{left:auto}.col-xs-offset-12{margin-left:100%}.col-xs-offset-11{margin-left:91.66666667%}.col-xs-offset-10{margin-left:83.33333333%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-8{margin-left:66.66666667%}.col-xs-offset-7{margin-left:58.33333333%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-5{margin-left:41.66666667%}.col-xs-offset-4{margin-left:33.33333333%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-2{margin-left:16.66666667%}.col-xs-offset-1{margin-left:8.33333333%}.col-xs-offset-0{margin-left:0}@media (min-width:768px){.col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12{float:left}.col-sm-12{width:100%}.col-sm-11{width:91.66666667%}.col-sm-10{width:83.33333333%}.col-sm-9{width:75%}.col-sm-8{width:66.66666667%}.col-sm-7{width:58.33333333%}.col-sm-6{width:50%}.col-sm-5{width:41.66666667%}.col-sm-4{width:33.33333333%}.col-sm-3{width:25%}.col-sm-2{width:16.66666667%}.col-sm-1{width:8.33333333%}.col-sm-pull-12{right:100%}.col-sm-pull-11{right:91.66666667%}.col-sm-pull-10{right:83.33333333%}.col-sm-pull-9{right:75%}.col-sm-pull-8{right:66.66666667%}.col-sm-pull-7{right:58.33333333%}.col-sm-pull-6{right:50%}.col-sm-pull-5{right:41.66666667%}.col-sm-pull-4{right:33.33333333%}.col-sm-pull-3{right:25%}.col-sm-pull-2{right:16.66666667%}.col-sm-pull-1{right:8.33333333%}.col-sm-pull-0{right:auto}.col-sm-push-12{left:100%}.col-sm-push-11{left:91.66666667%}.col-sm-push-10{left:83.33333333%}.col-sm-push-9{left:75%}.col-sm-push-8{left:66.66666667%}.col-sm-push-7{left:58.33333333%}.col-sm-push-6{left:50%}.col-sm-push-5{left:41.66666667%}.col-sm-push-4{left:33.33333333%}.col-sm-push-3{left:25%}.col-sm-push-2{left:16.66666667%}.col-sm-push-1{left:8.33333333%}.col-sm-push-0{left:auto}.col-sm-offset-12{margin-left:100%}.col-sm-offset-11{margin-left:91.66666667%}.col-sm-offset-10{margin-left:83.33333333%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-8{margin-left:66.66666667%}.col-sm-offset-7{margin-left:58.33333333%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-5{margin-left:41.66666667%}.col-sm-offset-4{margin-left:33.33333333%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-2{margin-left:16.66666667%}.col-sm-offset-1{margin-left:8.33333333%}.col-sm-offset-0{margin-left:0}}@media (min-width:992px){.col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12{float:left}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}.col-md-pull-12{right:100%}.col-md-pull-11{right:91.66666667%}.col-md-pull-10{right:83.33333333%}.col-md-pull-9{right:75%}.col-md-pull-8{right:66.66666667%}.col-md-pull-7{right:58.33333333%}.col-md-pull-6{right:50%}.col-md-pull-5{right:41.66666667%}.col-md-pull-4{right:33.33333333%}.col-md-pull-3{right:25%}.col-md-pull-2{right:16.66666667%}.col-md-pull-1{right:8.33333333%}.col-md-pull-0{right:auto}.col-md-push-12{left:100%}.col-md-push-11{left:91.66666667%}.col-md-push-10{left:83.33333333%}.col-md-push-9{left:75%}.col-md-push-8{left:66.66666667%}.col-md-push-7{left:58.33333333%}.col-md-push-6{left:50%}.col-md-push-5{left:41.66666667%}.col-md-push-4{left:33.33333333%}.col-md-push-3{left:25%}.col-md-push-2{left:16.66666667%}.col-md-push-1{left:8.33333333%}.col-md-push-0{left:auto}.col-md-offset-12{margin-left:100%}.col-md-offset-11{margin-left:91.66666667%}.col-md-offset-10{margin-left:83.33333333%}.col-md-offset-9{margin-left:75%}.col-md-offset-8{margin-left:66.66666667%}.col-md-offset-7{margin-left:58.33333333%}.col-md-offset-6{margin-left:50%}.col-md-offset-5{margin-left:41.66666667%}.col-md-offset-4{margin-left:33.33333333%}.col-md-offset-3{margin-left:25%}.col-md-offset-2{margin-left:16.66666667%}.col-md-offset-1{margin-left:8.33333333%}.col-md-offset-0{margin-left:0}}@media (min-width:1200px){.col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12{float:left}.col-lg-12{width:100%}.col-lg-11{width:91.66666667%}.col-lg-10{width:83.33333333%}.col-lg-9{width:75%}.col-lg-8{width:66.66666667%}.col-lg-7{width:58.33333333%}.col-lg-6{width:50%}.col-lg-5{width:41.66666667%}.col-lg-4{width:33.33333333%}.col-lg-3{width:25%}.col-lg-2{width:16.66666667%}.col-lg-1{width:8.33333333%}.col-lg-pull-12{right:100%}.col-lg-pull-11{right:91.66666667%}.col-lg-pull-10{right:83.33333333%}.col-lg-pull-9{right:75%}.col-lg-pull-8{right:66.66666667%}.col-lg-pull-7{right:58.33333333%}.col-lg-pull-6{right:50%}.col-lg-pull-5{right:41.66666667%}.col-lg-pull-4{right:33.33333333%}.col-lg-pull-3{right:25%}.col-lg-pull-2{right:16.66666667%}.col-lg-pull-1{right:8.33333333%}.col-lg-pull-0{right:auto}.col-lg-push-12{left:100%}.col-lg-push-11{left:91.66666667%}.col-lg-push-10{left:83.33333333%}.col-lg-push-9{left:75%}.col-lg-push-8{left:66.66666667%}.col-lg-push-7{left:58.33333333%}.col-lg-push-6{left:50%}.col-lg-push-5{left:41.66666667%}.col-lg-push-4{left:33.33333333%}.col-lg-push-3{left:25%}.col-lg-push-2{left:16.66666667%}.col-lg-push-1{left:8.33333333%}.col-lg-push-0{left:auto}.col-lg-offset-12{margin-left:100%}.col-lg-offset-11{margin-left:91.66666667%}.col-lg-offset-10{margin-left:83.33333333%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-8{margin-left:66.66666667%}.col-lg-offset-7{margin-left:58.33333333%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-5{margin-left:41.66666667%}.col-lg-offset-4{margin-left:33.33333333%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-2{margin-left:16.66666667%}.col-lg-offset-1{margin-left:8.33333333%}.col-lg-offset-0{margin-left:0}}table{background-color:transparent}th{text-align:left}.table{width:100%;max-width:100%;margin-bottom:20px}.table>thead>tr>th,.table>tbody>tr>th,.table>tfoot>tr>th,.table>thead>tr>td,.table>tbody>tr>td,.table>tfoot>tr>td{padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd}.table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}.table>caption+thead>tr:first-child>th,.table>colgroup+thead>tr:first-child>th,.table>thead:first-child>tr:first-child>th,.table>caption+thead>tr:first-child>td,.table>colgroup+thead>tr:first-child>td,.table>thead:first-child>tr:first-child>td{border-top:0}.table>tbody+tbody{border-top:2px solid #ddd}.table .table{background-color:#fff}.table-condensed>thead>tr>th,.table-condensed>tbody>tr>th,.table-condensed>tfoot>tr>th,.table-condensed>thead>tr>td,.table-condensed>tbody>tr>td,.table-condensed>tfoot>tr>td{padding:5px}.table-bordered{border:1px solid #ddd}.table-bordered>thead>tr>th,.table-bordered>tbody>tr>th,.table-bordered>tfoot>tr>th,.table-bordered>thead>tr>td,.table-bordered>tbody>tr>td,.table-bordered>tfoot>tr>td{border:1px solid #ddd}.table-bordered>thead>tr>th,.table-bordered>thead>tr>td{border-bottom-width:2px}.table-striped>tbody>tr:nth-child(odd)>td,.table-striped>tbody>tr:nth-child(odd)>th{background-color:#f9f9f9}.table-hover>tbody>tr:hover>td,.table-hover>tbody>tr:hover>th{background-color:#f5f5f5}table col[class*='col-']{position:static;float:none;display:table-column}table td[class*='col-'],table th[class*='col-']{position:static;float:none;display:table-cell}.table>thead>tr>td.active,.table>tbody>tr>td.active,.table>tfoot>tr>td.active,.table>thead>tr>th.active,.table>tbody>tr>th.active,.table>tfoot>tr>th.active,.table>thead>tr.active>td,.table>tbody>tr.active>td,.table>tfoot>tr.active>td,.table>thead>tr.active>th,.table>tbody>tr.active>th,.table>tfoot>tr.active>th{background-color:#f5f5f5}.table-hover>tbody>tr>td.active:hover,.table-hover>tbody>tr>th.active:hover,.table-hover>tbody>tr.active:hover>td,.table-hover>tbody>tr:hover>.active,.table-hover>tbody>tr.active:hover>th{background-color:#e8e8e8}.table>thead>tr>td.success,.table>tbody>tr>td.success,.table>tfoot>tr>td.success,.table>thead>tr>th.success,.table>tbody>tr>th.success,.table>tfoot>tr>th.success,.table>thead>tr.success>td,.table>tbody>tr.success>td,.table>tfoot>tr.success>td,.table>thead>tr.success>th,.table>tbody>tr.success>th,.table>tfoot>tr.success>th{background-color:#dff0d8}.table-hover>tbody>tr>td.success:hover,.table-hover>tbody>tr>th.success:hover,.table-hover>tbody>tr.success:hover>td,.table-hover>tbody>tr:hover>.success,.table-hover>tbody>tr.success:hover>th{background-color:#d0e9c6}.table>thead>tr>td.info,.table>tbody>tr>td.info,.table>tfoot>tr>td.info,.table>thead>tr>th.info,.table>tbody>tr>th.info,.table>tfoot>tr>th.info,.table>thead>tr.info>td,.table>tbody>tr.info>td,.table>tfoot>tr.info>td,.table>thead>tr.info>th,.table>tbody>tr.info>th,.table>tfoot>tr.info>th{background-color:#d9edf7}.table-hover>tbody>tr>td.info:hover,.table-hover>tbody>tr>th.info:hover,.table-hover>tbody>tr.info:hover>td,.table-hover>tbody>tr:hover>.info,.table-hover>tbody>tr.info:hover>th{background-color:#c4e3f3}.table>thead>tr>td.warning,.table>tbody>tr>td.warning,.table>tfoot>tr>td.warning,.table>thead>tr>th.warning,.table>tbody>tr>th.warning,.table>tfoot>tr>th.warning,.table>thead>tr.warning>td,.table>tbody>tr.warning>td,.table>tfoot>tr.warning>td,.table>thead>tr.warning>th,.table>tbody>tr.warning>th,.table>tfoot>tr.warning>th{background-color:#fcf8e3}.table-hover>tbody>tr>td.warning:hover,.table-hover>tbody>tr>th.warning:hover,.table-hover>tbody>tr.warning:hover>td,.table-hover>tbody>tr:hover>.warning,.table-hover>tbody>tr.warning:hover>th{background-color:#faf2cc}.table>thead>tr>td.danger,.table>tbody>tr>td.danger,.table>tfoot>tr>td.danger,.table>thead>tr>th.danger,.table>tbody>tr>th.danger,.table>tfoot>tr>th.danger,.table>thead>tr.danger>td,.table>tbody>tr.danger>td,.table>tfoot>tr.danger>td,.table>thead>tr.danger>th,.table>tbody>tr.danger>th,.table>tfoot>tr.danger>th{background-color:#f2dede}.table-hover>tbody>tr>td.danger:hover,.table-hover>tbody>tr>th.danger:hover,.table-hover>tbody>tr.danger:hover>td,.table-hover>tbody>tr:hover>.danger,.table-hover>tbody>tr.danger:hover>th{background-color:#ebcccc}@media screen and (max-width:767px){.table-responsive{width:100%;margin-bottom:15px;overflow-y:hidden;overflow-x:auto;-ms-overflow-style:-ms-autohiding-scrollbar;border:1px solid #ddd;-webkit-overflow-scrolling:touch}.table-responsive>.table{margin-bottom:0}.table-responsive>.table>thead>tr>th,.table-responsive>.table>tbody>tr>th,.table-responsive>.table>tfoot>tr>th,.table-responsive>.table>thead>tr>td,.table-responsive>.table>tbody>tr>td,.table-responsive>.table>tfoot>tr>td{white-space:nowrap}.table-responsive>.table-bordered{border:0}.table-responsive>.table-bordered>thead>tr>th:first-child,.table-responsive>.table-bordered>tbody>tr>th:first-child,.table-responsive>.table-bordered>tfoot>tr>th:first-child,.table-responsive>.table-bordered>thead>tr>td:first-child,.table-responsive>.table-bordered>tbody>tr>td:first-child,.table-responsive>.table-bordered>tfoot>tr>td:first-child{border-left:0}.table-responsive>.table-bordered>thead>tr>th:last-child,.table-responsive>.table-bordered>tbody>tr>th:last-child,.table-responsive>.table-bordered>tfoot>tr>th:last-child,.table-responsive>.table-bordered>thead>tr>td:last-child,.table-responsive>.table-bordered>tbody>tr>td:last-child,.table-responsive>.table-bordered>tfoot>tr>td:last-child{border-right:0}.table-responsive>.table-bordered>tbody>tr:last-child>th,.table-responsive>.table-bordered>tfoot>tr:last-child>th,.table-responsive>.table-bordered>tbody>tr:last-child>td,.table-responsive>.table-bordered>tfoot>tr:last-child>td{border-bottom:0}}fieldset{padding:0;margin:0;border:0;min-width:0}legend{display:block;width:100%;padding:0;margin-bottom:20px;font-size:21px;line-height:inherit;color:#333;border:0;border-bottom:1px solid #e5e5e5}label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:bold}input[type='search']{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}input[type='radio'],input[type='checkbox']{margin:4px 0 0;margin-top:1px 9;line-height:normal}input[type='file']{display:block}input[type='range']{display:block;width:100%}select[multiple],select[size]{height:auto}input[type='file']:focus,input[type='radio']:focus,input[type='checkbox']:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}output{display:block;padding-top:7px;font-size:14px;line-height:1.42857143;color:#555}.form-control{display:block;width:100%;height:34px;padding:6px 12px;font-size:14px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);-webkit-transition:border-color ease-in-out .15s, box-shadow ease-in-out .15s;-o-transition:border-color ease-in-out .15s, box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s, box-shadow ease-in-out .15s}.form-control:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6)}.form-control::-moz-placeholder{color:#777;opacity:1}.form-control:-ms-input-placeholder{color:#777}.form-control::-webkit-input-placeholder{color:#777}.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{cursor:not-allowed;background-color:#eee;opacity:1}textarea.form-control{height:auto}input[type='search']{-webkit-appearance:none}input[type='date'],input[type='time'],input[type='datetime-local'],input[type='month']{line-height:34px;line-height:1.42857143 \x00}input[type='date'].input-sm,input[type='time'].input-sm,input[type='datetime-local'].input-sm,input[type='month'].input-sm{line-height:30px}input[type='date'].input-lg,input[type='time'].input-lg,input[type='datetime-local'].input-lg,input[type='month'].input-lg{line-height:46px}.form-group{margin-bottom:15px}.radio,.checkbox{position:relative;display:block;min-height:20px;margin-top:10px;margin-bottom:10px}.radio label,.checkbox label{padding-left:20px;margin-bottom:0;font-weight:normal;cursor:pointer}.radio input[type='radio'],.radio-inline input[type='radio'],.checkbox input[type='checkbox'],.checkbox-inline input[type='checkbox']{position:absolute;margin-left:-20px;margin-top:4px 9}.radio+.radio,.checkbox+.checkbox{margin-top:-5px}.radio-inline,.checkbox-inline{display:inline-block;padding-left:20px;margin-bottom:0;vertical-align:middle;font-weight:normal;cursor:pointer}.radio-inline+.radio-inline,.checkbox-inline+.checkbox-inline{margin-top:0;margin-left:10px}input[type='radio'][disabled],input[type='checkbox'][disabled],input[type='radio'].disabled,input[type='checkbox'].disabled,fieldset[disabled] input[type='radio'],fieldset[disabled] input[type='checkbox']{cursor:not-allowed}.radio-inline.disabled,.checkbox-inline.disabled,fieldset[disabled] .radio-inline,fieldset[disabled] .checkbox-inline{cursor:not-allowed}.radio.disabled label,.checkbox.disabled label,fieldset[disabled] .radio label,fieldset[disabled] .checkbox label{cursor:not-allowed}.form-control-static{padding-top:7px;padding-bottom:7px;margin-bottom:0}.form-control-static.input-lg,.form-control-static.input-sm{padding-left:0;padding-right:0}.input-sm,.form-horizontal .form-group-sm .form-control{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-sm{height:30px;line-height:30px}textarea.input-sm,select[multiple].input-sm{height:auto}.input-lg,.form-horizontal .form-group-lg .form-control{height:46px;padding:10px 16px;font-size:18px;line-height:1.33;border-radius:6px}select.input-lg{height:46px;line-height:46px}textarea.input-lg,select[multiple].input-lg{height:auto}.has-feedback{position:relative}.has-feedback .form-control{padding-right:42.5px}.form-control-feedback{position:absolute;top:25px;right:0;z-index:2;display:block;width:34px;height:34px;line-height:34px;text-align:center}.input-lg+.form-control-feedback{width:46px;height:46px;line-height:46px}.input-sm+.form-control-feedback{width:30px;height:30px;line-height:30px}.has-success .help-block,.has-success .control-label,.has-success .radio,.has-success .checkbox,.has-success .radio-inline,.has-success .checkbox-inline{color:#3c763d}.has-success .form-control{border-color:#3c763d;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.has-success .form-control:focus{border-color:#2b542c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #67b168;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #67b168}.has-success .input-group-addon{color:#3c763d;border-color:#3c763d;background-color:#dff0d8}.has-success .form-control-feedback{color:#3c763d}.has-warning .help-block,.has-warning .control-label,.has-warning .radio,.has-warning .checkbox,.has-warning .radio-inline,.has-warning .checkbox-inline{color:#8a6d3b}.has-warning .form-control{border-color:#8a6d3b;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.has-warning .form-control:focus{border-color:#66512c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #c0a16b;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #c0a16b}.has-warning .input-group-addon{color:#8a6d3b;border-color:#8a6d3b;background-color:#fcf8e3}.has-warning .form-control-feedback{color:#8a6d3b}.has-error .help-block,.has-error .control-label,.has-error .radio,.has-error .checkbox,.has-error .radio-inline,.has-error .checkbox-inline{color:#a94442}.has-error .form-control{border-color:#a94442;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.has-error .form-control:focus{border-color:#843534;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #ce8483;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #ce8483}.has-error .input-group-addon{color:#a94442;border-color:#a94442;background-color:#f2dede}.has-error .form-control-feedback{color:#a94442}.has-feedback label.sr-only~.form-control-feedback{top:0}.help-block{display:block;margin-top:5px;margin-bottom:10px;color:#737373}@media (min-width:768px){.form-inline .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .input-group{display:inline-table;vertical-align:middle}.form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn,.form-inline .input-group .form-control{width:auto}.form-inline .input-group>.form-control{width:100%}.form-inline .control-label{margin-bottom:0;vertical-align:middle}.form-inline .radio,.form-inline .checkbox{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.form-inline .radio label,.form-inline .checkbox label{padding-left:0}.form-inline .radio input[type='radio'],.form-inline .checkbox input[type='checkbox']{position:relative;margin-left:0}.form-inline .has-feedback .form-control-feedback{top:0}}.form-horizontal .radio,.form-horizontal .checkbox,.form-horizontal .radio-inline,.form-horizontal .checkbox-inline{margin-top:0;margin-bottom:0;padding-top:7px}.form-horizontal .radio,.form-horizontal .checkbox{min-height:27px}.form-horizontal .form-group{margin-left:-15px;margin-right:-15px}@media (min-width:768px){.form-horizontal .control-label{text-align:right;margin-bottom:0;padding-top:7px}}.form-horizontal .has-feedback .form-control-feedback{top:0;right:15px}@media (min-width:768px){.form-horizontal .form-group-lg .control-label{padding-top:14.3px}}@media (min-width:768px){.form-horizontal .form-group-sm .control-label{padding-top:6px}}.input-group{position:relative;display:table;border-collapse:separate}.input-group[class*='col-']{float:none;padding-left:0;padding-right:0}.input-group .form-control{position:relative;z-index:2;float:left;width:100%;margin-bottom:0}.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn{height:46px;padding:10px 16px;font-size:18px;line-height:1.33;border-radius:6px}select.input-group-lg>.form-control,select.input-group-lg>.input-group-addon,select.input-group-lg>.input-group-btn>.btn{height:46px;line-height:46px}textarea.input-group-lg>.form-control,textarea.input-group-lg>.input-group-addon,textarea.input-group-lg>.input-group-btn>.btn,select[multiple].input-group-lg>.form-control,select[multiple].input-group-lg>.input-group-addon,select[multiple].input-group-lg>.input-group-btn>.btn{height:auto}.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-group-sm>.form-control,select.input-group-sm>.input-group-addon,select.input-group-sm>.input-group-btn>.btn{height:30px;line-height:30px}textarea.input-group-sm>.form-control,textarea.input-group-sm>.input-group-addon,textarea.input-group-sm>.input-group-btn>.btn,select[multiple].input-group-sm>.form-control,select[multiple].input-group-sm>.input-group-addon,select[multiple].input-group-sm>.input-group-btn>.btn{height:auto}.input-group-addon,.input-group-btn,.input-group .form-control{display:table-cell}.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child),.input-group .form-control:not(:first-child):not(:last-child){border-radius:0}.input-group-addon,.input-group-btn{width:1%;white-space:nowrap;vertical-align:middle}.input-group-addon{padding:6px 12px;font-size:14px;font-weight:normal;line-height:1;color:#555;text-align:center;background-color:#eee;border:1px solid #ccc;border-radius:4px}.input-group-addon.input-sm{padding:5px 10px;font-size:12px;border-radius:3px}.input-group-addon.input-lg{padding:10px 16px;font-size:18px;border-radius:6px}.input-group-addon input[type='radio'],.input-group-addon input[type='checkbox']{margin-top:0}.input-group .form-control:first-child,.input-group-addon:first-child,.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group>.btn,.input-group-btn:first-child>.dropdown-toggle,.input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group-btn:last-child>.btn-group:not(:last-child)>.btn{border-bottom-right-radius:0;border-top-right-radius:0}.input-group-addon:first-child{border-right:0}.input-group .form-control:last-child,.input-group-addon:last-child,.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group>.btn,.input-group-btn:last-child>.dropdown-toggle,.input-group-btn:first-child>.btn:not(:first-child),.input-group-btn:first-child>.btn-group:not(:first-child)>.btn{border-bottom-left-radius:0;border-top-left-radius:0}.input-group-addon:last-child{border-left:0}.input-group-btn{position:relative;font-size:0;white-space:nowrap}.input-group-btn>.btn{position:relative}.input-group-btn>.btn+.btn{margin-left:-1px}.input-group-btn>.btn:hover,.input-group-btn>.btn:focus,.input-group-btn>.btn:active{z-index:2}.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group{margin-right:-1px}.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group{margin-left:-1px}.alert{padding:15px;margin-bottom:20px;border:1px solid transparent;border-radius:4px}.alert h4{margin-top:0;color:inherit}.alert .alert-link{font-weight:bold}.alert>p,.alert>ul{margin-bottom:0}.alert>p+p{margin-top:5px}.alert-dismissable,.alert-dismissible{padding-right:35px}.alert-dismissable .close,.alert-dismissible .close{position:relative;top:-2px;right:-21px;color:inherit}.alert-success{background-color:#dff0d8;border-color:#d6e9c6;color:#3c763d}.alert-success hr{border-top-color:#c9e2b3}.alert-success .alert-link{color:#2b542c}.alert-info{background-color:#d9edf7;border-color:#bce8f1;color:#31708f}.alert-info hr{border-top-color:#a6e1ec}.alert-info .alert-link{color:#245269}.alert-warning{background-color:#fcf8e3;border-color:#faebcc;color:#8a6d3b}.alert-warning hr{border-top-color:#f7e1b5}.alert-warning .alert-link{color:#66512c}.alert-danger{background-color:#f2dede;border-color:#ebccd1;color:#a94442}.alert-danger hr{border-top-color:#e4b9c0}.alert-danger .alert-link{color:#843534}.panel{margin-bottom:20px;background-color:#fff;border:1px solid transparent;border-radius:4px;-webkit-box-shadow:0 1px 1px rgba(0,0,0,0.05);box-shadow:0 1px 1px rgba(0,0,0,0.05)}.panel-body{padding:15px}.panel-heading{padding:10px 15px;border-bottom:1px solid transparent;border-top-right-radius:3px;border-top-left-radius:3px}.panel-heading>.dropdown .dropdown-toggle{color:inherit}.panel-title{margin-top:0;margin-bottom:0;font-size:16px;color:inherit}.panel-title>a{color:inherit}.panel-footer{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.list-group{margin-bottom:0}.panel>.list-group .list-group-item{border-width:1px 0;border-radius:0}.panel>.list-group:first-child .list-group-item:first-child{border-top:0;border-top-right-radius:3px;border-top-left-radius:3px}.panel>.list-group:last-child .list-group-item:last-child{border-bottom:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel-heading+.list-group .list-group-item:first-child{border-top-width:0}.list-group+.panel-footer{border-top-width:0}.panel>.table,.panel>.table-responsive>.table,.panel>.panel-collapse>.table{margin-bottom:0}.panel>.table:first-child,.panel>.table-responsive:first-child>.table:first-child{border-top-right-radius:3px;border-top-left-radius:3px}.panel>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table:first-child>thead:first-child>tr:first-child th:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:first-child{border-top-left-radius:3px}.panel>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table:first-child>thead:first-child>tr:first-child th:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:last-child{border-top-right-radius:3px}.panel>.table:last-child,.panel>.table-responsive:last-child>.table:last-child{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:first-child{border-bottom-left-radius:3px}.panel>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:last-child{border-bottom-right-radius:3px}.panel>.panel-body+.table,.panel>.panel-body+.table-responsive{border-top:1px solid #ddd}.panel>.table>tbody:first-child>tr:first-child th,.panel>.table>tbody:first-child>tr:first-child td{border-top:0}.panel>.table-bordered,.panel>.table-responsive>.table-bordered{border:0}.panel>.table-bordered>thead>tr>th:first-child,.panel>.table-responsive>.table-bordered>thead>tr>th:first-child,.panel>.table-bordered>tbody>tr>th:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:first-child,.panel>.table-bordered>tfoot>tr>th:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:first-child,.panel>.table-bordered>thead>tr>td:first-child,.panel>.table-responsive>.table-bordered>thead>tr>td:first-child,.panel>.table-bordered>tbody>tr>td:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:first-child,.panel>.table-bordered>tfoot>tr>td:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:first-child{border-left:0}.panel>.table-bordered>thead>tr>th:last-child,.panel>.table-responsive>.table-bordered>thead>tr>th:last-child,.panel>.table-bordered>tbody>tr>th:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:last-child,.panel>.table-bordered>tfoot>tr>th:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:last-child,.panel>.table-bordered>thead>tr>td:last-child,.panel>.table-responsive>.table-bordered>thead>tr>td:last-child,.panel>.table-bordered>tbody>tr>td:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:last-child,.panel>.table-bordered>tfoot>tr>td:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:last-child{border-right:0}.panel>.table-bordered>thead>tr:first-child>td,.panel>.table-responsive>.table-bordered>thead>tr:first-child>td,.panel>.table-bordered>tbody>tr:first-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>td,.panel>.table-bordered>thead>tr:first-child>th,.panel>.table-responsive>.table-bordered>thead>tr:first-child>th,.panel>.table-bordered>tbody>tr:first-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>th{border-bottom:0}.panel>.table-bordered>tbody>tr:last-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>td,.panel>.table-bordered>tfoot>tr:last-child>td,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>td,.panel>.table-bordered>tbody>tr:last-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>th,.panel>.table-bordered>tfoot>tr:last-child>th,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>th{border-bottom:0}.panel>.table-responsive{border:0;margin-bottom:0}.panel-group{margin-bottom:20px}.panel-group .panel{margin-bottom:0;border-radius:4px}.panel-group .panel+.panel{margin-top:5px}.panel-group .panel-heading{border-bottom:0}.panel-group .panel-heading+.panel-collapse>.panel-body{border-top:1px solid #ddd}.panel-group .panel-footer{border-top:0}.panel-group .panel-footer+.panel-collapse .panel-body{border-bottom:1px solid #ddd}.panel-default{border-color:#ddd}.panel-default>.panel-heading{color:#333;background-color:#f5f5f5;border-color:#ddd}.panel-default>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ddd}.panel-default>.panel-heading .badge{color:#f5f5f5;background-color:#333}.panel-default>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ddd}.panel-primary{border-color:#428bca}.panel-primary>.panel-heading{color:#fff;background-color:#428bca;border-color:#428bca}.panel-primary>.panel-heading+.panel-collapse>.panel-body{border-top-color:#428bca}.panel-primary>.panel-heading .badge{color:#428bca;background-color:#fff}.panel-primary>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#428bca}.panel-success{border-color:#d6e9c6}.panel-success>.panel-heading{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.panel-success>.panel-heading+.panel-collapse>.panel-body{border-top-color:#d6e9c6}.panel-success>.panel-heading .badge{color:#dff0d8;background-color:#3c763d}.panel-success>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#d6e9c6}.panel-info{border-color:#bce8f1}.panel-info>.panel-heading{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.panel-info>.panel-heading+.panel-collapse>.panel-body{border-top-color:#bce8f1}.panel-info>.panel-heading .badge{color:#d9edf7;background-color:#31708f}.panel-info>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#bce8f1}.panel-warning{border-color:#faebcc}.panel-warning>.panel-heading{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.panel-warning>.panel-heading+.panel-collapse>.panel-body{border-top-color:#faebcc}.panel-warning>.panel-heading .badge{color:#fcf8e3;background-color:#8a6d3b}.panel-warning>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#faebcc}.panel-danger{border-color:#ebccd1}.panel-danger>.panel-heading{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.panel-danger>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ebccd1}.panel-danger>.panel-heading .badge{color:#f2dede;background-color:#a94442}.panel-danger>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ebccd1}.embed-responsive{position:relative;display:block;height:0;padding:0;overflow:hidden}.embed-responsive .embed-responsive-item,.embed-responsive iframe,.embed-responsive embed,.embed-responsive object{position:absolute;top:0;left:0;bottom:0;height:100%;width:100%;border:0}.embed-responsive.embed-responsive-16by9{padding-bottom:56.25%}.embed-responsive.embed-responsive-4by3{padding-bottom:75%}.modal-open{overflow:hidden}.modal{display:none;overflow:hidden;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0}.modal.fade .modal-dialog{-webkit-transform:translate3d(0, -25%, 0);transform:translate3d(0, -25%, 0);-webkit-transition:-webkit-transform 0.3s ease-out;-moz-transition:-moz-transform 0.3s ease-out;-o-transition:-o-transform 0.3s ease-out;transition:transform 0.3s ease-out}.modal.in .modal-dialog{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;border:1px solid #999;border:1px solid rgba(0,0,0,0.2);border-radius:6px;-webkit-box-shadow:0 3px 9px rgba(0,0,0,0.5);box-shadow:0 3px 9px rgba(0,0,0,0.5);background-clip:padding-box;outline:0}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{opacity:0;filter:alpha(opacity=0)}.modal-backdrop.in{opacity:.5;filter:alpha(opacity=50)}.modal-header{padding:15px;border-bottom:1px solid #e5e5e5;min-height:16.42857143px}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.42857143}.modal-body{position:relative;padding:15px}.modal-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}.modal-footer .btn+.btn{margin-left:5px;margin-bottom:0}.modal-footer .btn-group .btn+.btn{margin-left:-1px}.modal-footer .btn-block+.btn-block{margin-left:0}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{-webkit-box-shadow:0 5px 15px rgba(0,0,0,0.5);box-shadow:0 5px 15px rgba(0,0,0,0.5)}.modal-sm{width:300px}}@media (min-width:992px){.modal-lg{width:900px}}.tooltip{position:absolute;z-index:1070;display:block;visibility:visible;font-size:12px;line-height:1.4;opacity:0;filter:alpha(opacity=0)}.tooltip.in{opacity:.9;filter:alpha(opacity=90)}.tooltip.top{margin-top:-3px;padding:5px 0}.tooltip.right{margin-left:3px;padding:0 5px}.tooltip.bottom{margin-top:3px;padding:5px 0}.tooltip.left{margin-left:-3px;padding:0 5px}.tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;text-decoration:none;background-color:#000;border-radius:4px}.tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.tooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-left .tooltip-arrow{bottom:0;left:5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-right .tooltip-arrow{bottom:0;right:5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000}.tooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000}.tooltip.bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-left .tooltip-arrow{top:0;left:5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-right .tooltip-arrow{top:0;right:5px;border-width:0 5px 5px;border-bottom-color:#000}.popover{position:absolute;top:0;left:0;z-index:1060;display:none;max-width:276px;padding:1px;text-align:left;background-color:#fff;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,0.2);border-radius:6px;-webkit-box-shadow:0 5px 10px rgba(0,0,0,0.2);box-shadow:0 5px 10px rgba(0,0,0,0.2);white-space:normal}.popover.top{margin-top:-10px}.popover.right{margin-left:10px}.popover.bottom{margin-top:10px}.popover.left{margin-left:-10px}.popover-title{margin:0;padding:8px 14px;font-size:14px;font-weight:normal;line-height:18px;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-radius:5px 5px 0 0}.popover-content{padding:9px 14px}.popover>.arrow,.popover>.arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover>.arrow{border-width:11px}.popover>.arrow:after{border-width:10px;content:''}.popover.top>.arrow{left:50%;margin-left:-11px;border-bottom-width:0;border-top-color:#999;border-top-color:rgba(0,0,0,0.25);bottom:-11px}.popover.top>.arrow:after{content:' ';bottom:1px;margin-left:-10px;border-bottom-width:0;border-top-color:#fff}.popover.right>.arrow{top:50%;left:-11px;margin-top:-11px;border-left-width:0;border-right-color:#999;border-right-color:rgba(0,0,0,0.25)}.popover.right>.arrow:after{content:' ';left:1px;bottom:-10px;border-left-width:0;border-right-color:#fff}.popover.bottom>.arrow{left:50%;margin-left:-11px;border-top-width:0;border-bottom-color:#999;border-bottom-color:rgba(0,0,0,0.25);top:-11px}.popover.bottom>.arrow:after{content:' ';top:1px;margin-left:-10px;border-top-width:0;border-bottom-color:#fff}.popover.left>.arrow{top:50%;right:-11px;margin-top:-11px;border-right-width:0;border-left-color:#999;border-left-color:rgba(0,0,0,0.25)}.popover.left>.arrow:after{content:' ';right:1px;border-right-width:0;border-left-color:#fff;bottom:-10px}.clearfix:before,.clearfix:after,.container:before,.container:after,.container-fluid:before,.container-fluid:after,.row:before,.row:after,.form-horizontal .form-group:before,.form-horizontal .form-group:after,.panel-body:before,.panel-body:after,.modal-footer:before,.modal-footer:after{content:' ';display:table}.clearfix:after,.container:after,.container-fluid:after,.row:after,.form-horizontal .form-group:after,.panel-body:after,.modal-footer:after{clear:both}.center-block{display:block;margin-left:auto;margin-right:auto}.pull-right{float:right !important}.pull-left{float:left !important}.hide{display:none !important}.show{display:block !important}.invisible{visibility:hidden}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.hidden{display:none !important;visibility:hidden !important}.affix{position:fixed;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}@-ms-viewport{width:device-width}.visible-xs,.visible-sm,.visible-md,.visible-lg{display:none !important}.visible-xs-block,.visible-xs-inline,.visible-xs-inline-block,.visible-sm-block,.visible-sm-inline,.visible-sm-inline-block,.visible-md-block,.visible-md-inline,.visible-md-inline-block,.visible-lg-block,.visible-lg-inline,.visible-lg-inline-block{display:none !important}@media (max-width:767px){.visible-xs{display:block !important}table.visible-xs{display:table}tr.visible-xs{display:table-row !important}th.visible-xs,td.visible-xs{display:table-cell !important}}@media (max-width:767px){.visible-xs-block{display:block !important}}@media (max-width:767px){.visible-xs-inline{display:inline !important}}@media (max-width:767px){.visible-xs-inline-block{display:inline-block !important}}@media (min-width:768px) and (max-width:991px){.visible-sm{display:block !important}table.visible-sm{display:table}tr.visible-sm{display:table-row !important}th.visible-sm,td.visible-sm{display:table-cell !important}}@media (min-width:768px) and (max-width:991px){.visible-sm-block{display:block !important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline{display:inline !important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline-block{display:inline-block !important}}@media (min-width:992px) and (max-width:1199px){.visible-md{display:block !important}table.visible-md{display:table}tr.visible-md{display:table-row !important}th.visible-md,td.visible-md{display:table-cell !important}}@media (min-width:992px) and (max-width:1199px){.visible-md-block{display:block !important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline{display:inline !important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline-block{display:inline-block !important}}@media (min-width:1200px){.visible-lg{display:block !important}table.visible-lg{display:table}tr.visible-lg{display:table-row !important}th.visible-lg,td.visible-lg{display:table-cell !important}}@media (min-width:1200px){.visible-lg-block{display:block !important}}@media (min-width:1200px){.visible-lg-inline{display:inline !important}}@media (min-width:1200px){.visible-lg-inline-block{display:inline-block !important}}@media (max-width:767px){.hidden-xs{display:none !important}}@media (min-width:768px) and (max-width:991px){.hidden-sm{display:none !important}}@media (min-width:992px) and (max-width:1199px){.hidden-md{display:none !important}}@media (min-width:1200px){.hidden-lg{display:none !important}}.visible-print{display:none !important}@media print{.visible-print{display:block !important}table.visible-print{display:table}tr.visible-print{display:table-row !important}th.visible-print,td.visible-print{display:table-cell !important}}.visible-print-block{display:none !important}@media print{.visible-print-block{display:block !important}}.visible-print-inline{display:none !important}@media print{.visible-print-inline{display:inline !important}}.visible-print-inline-block{display:none !important}@media print{.visible-print-inline-block{display:inline-block !important}}@media print{.hidden-print{display:none !important}}",
        e = "<div id='brostrap-twitter'><style>" + o + "</style></div>";
    t(document).ready(function () {
        t("body").prepend(e)
    })
}(jQuery);
/*!
 * VERSION: beta 1.9.3
 * DATE: 2013-04-02
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue || (window._gsQueue = [])).push(function () {
    "use strict";
    window._gsDefine("easing.Back", ["easing.Ease"], function (t) {
        var e, i, s, r = window.GreenSockGlobals || window,
            n = r.com.greensock,
            a = 2 * Math.PI,
            o = Math.PI / 2,
            h = n._class,
            l = function (e, i) {
                var s = h("easing." + e, function () {}, !0),
                    r = s.prototype = new t;
                return r.constructor = s, r.getRatio = i, s
            },
            _ = t.register || function () {},
            u = function (t, e, i, s) {
                var r = h("easing." + t, {
                    easeOut: new e,
                    easeIn: new i,
                    easeInOut: new s
                }, !0);
                return _(r, t), r
            },
            c = function (t, e, i) {
                this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
            },
            p = function (e, i) {
                var s = h("easing." + e, function (t) {
                        this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                    }, !0),
                    r = s.prototype = new t;
                return r.constructor = s, r.getRatio = i, r.config = function (t) {
                    return new s(t)
                }, s
            },
            f = u("Back", p("BackOut", function (t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
            }), p("BackIn", function (t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
            }), p("BackInOut", function (t) {
                return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
            })),
            m = h("easing.SlowMo", function (t, e, i) {
                e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
            }, !0),
            d = m.prototype = new t;
        return d.constructor = m, d.getRatio = function (t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, m.ease = new m(.7, .7), d.config = m.config = function (t, e, i) {
            return new m(t, e, i)
        }, e = h("easing.SteppedEase", function (t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function (t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
        }, d.config = e.config = function (t) {
            return new e(t)
        }, i = h("easing.RoughEase", function (e) {
            e = e || {};
            for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), p = u, f = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = f ? Math.random() : 1 / u * p, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), f ? s += Math.random() * r - .5 * r : p % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = {
                x: i,
                y: s
            };
            for (l.sort(function (t, e) {
                    return t.x - e.x
                }), o = new c(1, 1, null), p = u; --p > -1;) a = l[p], o = new c(a.x, a.y, o);
            this._prev = new c(0, 0, 0 !== o.t ? o : o.next)
        }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function (t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
            } else
                for (; e.prev && e.t >= t;) e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, d.config = function (t) {
            return new i(t)
        }, i.ease = new i, u("Bounce", l("BounceOut", function (t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), l("BounceIn", function (t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), l("BounceInOut", function (t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), u("Circ", l("CircOut", function (t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), l("CircIn", function (t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), l("CircInOut", function (t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), s = function (e, i, s) {
            var r = h("easing." + e, function (t, e) {
                    this._p1 = t || 1, this._p2 = e || s, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
                }, !0),
                n = r.prototype = new t;
            return n.constructor = r, n.getRatio = i, n.config = function (t, e) {
                return new r(t, e)
            }, r
        }, u("Elastic", s("ElasticOut", function (t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .3), s("ElasticIn", function (t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2))
        }, .3), s("ElasticInOut", function (t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .45)), u("Expo", l("ExpoOut", function (t) {
            return 1 - Math.pow(2, -10 * t)
        }), l("ExpoIn", function (t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), l("ExpoInOut", function (t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), u("Sine", l("SineOut", function (t) {
            return Math.sin(t * o)
        }), l("SineIn", function (t) {
            return -Math.cos(t * o) + 1
        }), l("SineInOut", function (t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })), h("easing.EaseLookup", {
            find: function (e) {
                return t.map[e]
            }
        }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), f
    }, !0)
}), window._gsDefine && window._gsQueue.pop()();
/*! jQuery UI - v1.11.1 - 2014-08-29
 * http://jqueryui.com
 * Includes: core.js, widget.js, mouse.js, draggable.js
 * Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
})(function (e) {
    function t(t, s) {
        var n, a, o, r = t.nodeName.toLowerCase();
        return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t)
    }

    function i(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
            return "hidden" === e.css(this, "visibility")
        }).length
    }
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.11.1",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        scrollParent: function (t) {
            var i = this.css("position"),
                s = "absolute" === i,
                n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                a = this.parents().filter(function () {
                    var t = e(this);
                    return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document)
        },
        uniqueId: function () {
            var e = 0;
            return function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++e)
                })
            }
        }(),
        removeUniqueId: function () {
            return this.each(function () {
                /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
            return function (i) {
                return !!e.data(i, t)
            }
        }) : function (t, i, s) {
            return !!e.data(t, s[3])
        },
        focusable: function (i) {
            return t(i, !isNaN(e.attr(i, "tabindex")))
        },
        tabbable: function (i) {
            var s = e.attr(i, "tabindex"),
                n = isNaN(s);
            return (n || s >= 0) && t(i, !n)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (t, i) {
        function s(t, i, s, a) {
            return e.each(n, function () {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            a = i.toLowerCase(),
            o = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + i] = function (t) {
            return void 0 === t ? o["inner" + i].call(this) : this.each(function () {
                e(this).css(a, s(this, t) + "px")
            })
        }, e.fn["outer" + i] = function (t, n) {
            return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function () {
                e(this).css(a, s(this, t, !0, n) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
        return function (i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
        focus: function (t) {
            return function (i, s) {
                return "number" == typeof i ? this.each(function () {
                    var t = this;
                    setTimeout(function () {
                        e(t).focus(), s && s.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        disableSelection: function () {
            var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function () {
                return this.bind(e + ".ui-disableSelection", function (e) {
                    e.preventDefault()
                })
            }
        }(),
        enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function (t) {
            if (void 0 !== t) return this.css("zIndex", t);
            if (this.length)
                for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
                    if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                    n = n.parent()
                }
            return 0
        }
    }), e.ui.plugin = {
        add: function (t, i, s) {
            var n, a = e.ui[t].prototype;
            for (n in s) a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]])
        },
        call: function (e, t, i, s) {
            var n, a = e.plugins[t];
            if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                for (n = 0; a.length > n; n++) e.options[a[n][0]] && a[n][1].apply(e.element, i)
        }
    };
    var s = 0,
        n = Array.prototype.slice;
    e.cleanData = function (t) {
        return function (i) {
            var s, n, a;
            for (a = 0; null != (n = i[a]); a++) try {
                s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove")
            } catch (o) {}
            t(i)
        }
    }(e.cleanData), e.widget = function (t, i, s) {
        var n, a, o, r, h = {},
            l = t.split(".")[0];
        return t = t.split(".")[1], n = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function (t) {
            return !!e.data(t, n)
        }, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function (e, t) {
            return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t)
        }, e.extend(o, a, {
            version: s.version,
            _proto: e.extend({}, s),
            _childConstructors: []
        }), r = new i, r.options = e.widget.extend({}, r.options), e.each(s, function (t, s) {
            return e.isFunction(s) ? (h[t] = function () {
                var e = function () {
                        return i.prototype[t].apply(this, arguments)
                    },
                    n = function (e) {
                        return i.prototype[t].apply(this, e)
                    };
                return function () {
                    var t, i = this._super,
                        a = this._superApply;
                    return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t
                }
            }(), void 0) : (h[t] = s, void 0)
        }), o.prototype = e.widget.extend(r, {
            widgetEventPrefix: a ? r.widgetEventPrefix || t : t
        }, h, {
            constructor: o,
            namespace: l,
            widgetName: t,
            widgetFullName: n
        }), a ? (e.each(a._childConstructors, function (t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o
    }, e.widget.extend = function (t) {
        for (var i, s, a = n.call(arguments, 1), o = 0, r = a.length; r > o; o++)
            for (i in a[o]) s = a[o][i], a[o].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
        return t
    }, e.widget.bridge = function (t, i) {
        var s = i.prototype.widgetFullName || t;
        e.fn[t] = function (a) {
            var o = "string" == typeof a,
                r = n.call(arguments, 1),
                h = this;
            return a = !o && r.length ? e.widget.extend.apply(null, [a].concat(r)) : a, o ? this.each(function () {
                var i, n = e.data(this, s);
                return "instance" === a ? (h = n, !1) : n ? e.isFunction(n[a]) && "_" !== a.charAt(0) ? (i = n[a].apply(n, r), i !== n && void 0 !== i ? (h = i && i.jquery ? h.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + a + "'")
            }) : this.each(function () {
                var t = e.data(this, s);
                t ? (t.option(a || {}), t._init && t._init()) : e.data(this, s, new i(a, this))
            }), h
        }
    }, e.Widget = function () {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function (t, i) {
            i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = s++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (e) {
                    e.target === i && this.destroy()
                }
            }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function () {
            return this.element
        },
        option: function (t, i) {
            var s, n, a, o = t;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (o = {}, s = t.split("."), t = s.shift(), s.length) {
                    for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) n[s[a]] = n[s[a]] || {}, n = n[s[a]];
                    if (t = s.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
                    n[t] = i
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    o[t] = i
                }
            return this._setOptions(o), this
        },
        _setOptions: function (e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function (e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function () {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function () {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function (t, i, s) {
            var n, a = this;
            "boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function (s, o) {
                function r() {
                    return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0
                }
                "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);
                var h = s.match(/^([\w:-]*)\s*(.*)$/),
                    l = h[1] + a.eventNamespace,
                    u = h[2];
                u ? n.delegate(u, l, r) : i.bind(l, r)
            })
        },
        _off: function (e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function (e, t) {
            function i() {
                return ("string" == typeof e ? s[e] : e).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function (t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function (t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function (t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function (t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function (t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (t, i, s) {
            var n, a, o = this.options[t];
            if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
                for (n in a) n in i || (i[n] = a[n]);
            return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function (t, i) {
        e.Widget.prototype["_" + t] = function (s, n, a) {
            "string" == typeof n && (n = {
                effect: n
            });
            var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
            n = n || {}, "number" == typeof n && (n = {
                duration: n
            }), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function (i) {
                e(this)[t](), a && a.call(s[0]), i()
            })
        }
    }), e.widget;
    var a = !1;
    e(document).mouseup(function () {
        a = !1
    }), e.widget("ui.mouse", {
        version: "1.11.1",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function (e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function (i) {
                return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (t) {
            if (!a) {
                this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                var i = this,
                    s = 1 === t.which,
                    n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
                return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    i.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
                    return i._mouseMove(e)
                }, this._mouseUpDelegate = function (e) {
                    return i._mouseUp(e)
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), a = !0, !0)) : !0
            }
        },
        _mouseMove: function (t) {
            return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : t.which ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
        },
        _mouseUp: function (t) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), a = !1, !1
        },
        _mouseDistanceMet: function (e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
            return !0
        }
    }), e.widget("ui.draggable", e.ui.mouse, {
        version: "1.11.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function () {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
        },
        _setOption: function (e, t) {
            this._super(e, t), "handle" === e && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function () {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy(), void 0)
        },
        _mouseCapture: function (t) {
            var i = this.document[0],
                s = this.options;
            try {
                i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && e(i.activeElement).blur()
            } catch (n) {}
            return this.helper || s.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(s.iframeFix === !0 ? "iframe" : s.iframeFix).each(function () {
                e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(e(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function (t) {
            var i = this.options;
            return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.offset.scroll = !1, e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
        },
        _mouseDrag: function (t, i) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (this._trigger("drag", t, s) === !1) return this._mouseUp({}), !1;
                this.position = s.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function (t) {
            var i = this,
                s = !1;
            return e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                i._trigger("stop", t) !== !1 && i._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(), !1
        },
        _mouseUp: function (t) {
            return e("div.ui-draggable-iframeFix").each(function () {
                this.parentNode.removeChild(this)
            }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.element.focus(), e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function (t) {
            return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _setHandleClassName: function () {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
        },
        _removeHandleClassName: function () {
            this.handleElement.removeClass("ui-draggable-handle")
        },
        _createHelper: function (t) {
            var i = this.options,
                s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
        },
        _adjustOffsetFromHelper: function (t) {
            "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _isRootNode: function (e) {
            return /(html|body)/i.test(e.tagName) || e === this.document[0]
        },
        _getParentOffset: function () {
            var t = this.offsetParent.offset(),
                i = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" !== this.cssPosition) return {
                top: 0,
                left: 0
            };
            var e = this.element.position(),
                t = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
                left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var t, i, s, n = this.options,
                a = this.document[0];
            return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === n.containment ? (this.containment = [0, 0, e(a).width() - this.helperProportions.width - this.margins.left, (e(a).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = e(n.containment), s = i[0], s && (t = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0)
        },
        _convertPositionTo: function (e, t) {
            t || (t = this.position);
            var i = "absolute" === e ? 1 : -1,
                s = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
                left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function (e, t) {
            var i, s, n, a, o = this.options,
                r = this._isRootNode(this.scrollParent[0]),
                h = e.pageX,
                l = e.pageY;
            return r && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), t && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, h = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a), "y" === o.axis && (h = this.originalPageX), "x" === o.axis && (l = this.originalPageY)), {
                top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
        },
        _trigger: function (t, i, s) {
            return s = s || this._uiHash(), e.ui.plugin.call(this, t, [i, s, this], !0), "drag" === t && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, i, s)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), e.ui.plugin.add("draggable", "connectToSortable", {
        start: function (t, i, s) {
            var n = s.options,
                a = e.extend({}, i, {
                    item: s.element
                });
            s.sortables = [], e(n.connectToSortable).each(function () {
                var i = e(this).sortable("instance");
                i && !i.options.disabled && (s.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }), i.refreshPositions(), i._trigger("activate", t, a))
            })
        },
        stop: function (t, i, s) {
            var n = e.extend({}, i, {
                item: s.element
            });
            e.each(s.sortables, function () {
                this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, n))
            })
        },
        drag: function (t, i, s) {
            var n = this;
            e.each(s.sortables, function () {
                var a = !1,
                    o = this;
                this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (a = !0, e.each(s.sortables, function () {
                    return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && e.contains(o.instance.element[0], this.instance.element[0]) && (a = !1), a
                })), a ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                    return i.helper[0]
                }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", t), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", t), s.dropped = !1)
            })
        }
    }), e.ui.plugin.add("draggable", "cursor", {
        start: function (t, i, s) {
            var n = e("body"),
                a = s.options;
            n.css("cursor") && (a._cursor = n.css("cursor")), n.css("cursor", a.cursor)
        },
        stop: function (t, i, s) {
            var n = s.options;
            n._cursor && e("body").css("cursor", n._cursor)
        }
    }), e.ui.plugin.add("draggable", "opacity", {
        start: function (t, i, s) {
            var n = e(i.helper),
                a = s.options;
            n.css("opacity") && (a._opacity = n.css("opacity")), n.css("opacity", a.opacity)
        },
        stop: function (t, i, s) {
            var n = s.options;
            n._opacity && e(i.helper).css("opacity", n._opacity)
        }
    }), e.ui.plugin.add("draggable", "scroll", {
        start: function (e, t, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
        },
        drag: function (t, i, s) {
            var n = s.options,
                a = !1,
                o = s.scrollParentNotHidden[0],
                r = s.document[0];
            o !== r && "HTML" !== o.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + o.offsetHeight - t.pageY < n.scrollSensitivity ? o.scrollTop = a = o.scrollTop + n.scrollSpeed : t.pageY - s.overflowOffset.top < n.scrollSensitivity && (o.scrollTop = a = o.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + o.offsetWidth - t.pageX < n.scrollSensitivity ? o.scrollLeft = a = o.scrollLeft + n.scrollSpeed : t.pageX - s.overflowOffset.left < n.scrollSensitivity && (o.scrollLeft = a = o.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (t.pageY - e(r).scrollTop() < n.scrollSensitivity ? a = e(r).scrollTop(e(r).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(r).scrollTop()) < n.scrollSensitivity && (a = e(r).scrollTop(e(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (t.pageX - e(r).scrollLeft() < n.scrollSensitivity ? a = e(r).scrollLeft(e(r).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(r).scrollLeft()) < n.scrollSensitivity && (a = e(r).scrollLeft(e(r).scrollLeft() + n.scrollSpeed)))), a !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(s, t)
        }
    }), e.ui.plugin.add("draggable", "snap", {
        start: function (t, i, s) {
            var n = s.options;
            s.snapElements = [], e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function () {
                var t = e(this),
                    i = t.offset();
                this !== s.element[0] && s.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            })
        },
        drag: function (t, i, s) {
            var n, a, o, r, h, l, u, d, c, p, f = s.options,
                m = f.snapTolerance,
                g = i.offset.left,
                v = g + s.helperProportions.width,
                y = i.offset.top,
                b = y + s.helperProportions.height;
            for (c = s.snapElements.length - 1; c >= 0; c--) h = s.snapElements[c].left, l = h + s.snapElements[c].width, u = s.snapElements[c].top, d = u + s.snapElements[c].height, h - m > v || g > l + m || u - m > b || y > d + m || !e.contains(s.snapElements[c].item.ownerDocument, s.snapElements[c].item) ? (s.snapElements[c].snapping && s.options.snap.release && s.options.snap.release.call(s.element, t, e.extend(s._uiHash(), {
                snapItem: s.snapElements[c].item
            })), s.snapElements[c].snapping = !1) : ("inner" !== f.snapMode && (n = m >= Math.abs(u - b), a = m >= Math.abs(d - y), o = m >= Math.abs(h - v), r = m >= Math.abs(l - g), n && (i.position.top = s._convertPositionTo("relative", {
                top: u - s.helperProportions.height,
                left: 0
            }).top - s.margins.top), a && (i.position.top = s._convertPositionTo("relative", {
                top: d,
                left: 0
            }).top - s.margins.top), o && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: h - s.helperProportions.width
            }).left - s.margins.left), r && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left - s.margins.left)), p = n || a || o || r, "outer" !== f.snapMode && (n = m >= Math.abs(u - y), a = m >= Math.abs(d - b), o = m >= Math.abs(h - g), r = m >= Math.abs(l - v), n && (i.position.top = s._convertPositionTo("relative", {
                top: u,
                left: 0
            }).top - s.margins.top), a && (i.position.top = s._convertPositionTo("relative", {
                top: d - s.helperProportions.height,
                left: 0
            }).top - s.margins.top), o && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: h
            }).left - s.margins.left), r && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: l - s.helperProportions.width
            }).left - s.margins.left)), !s.snapElements[c].snapping && (n || a || o || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, t, e.extend(s._uiHash(), {
                snapItem: s.snapElements[c].item
            })), s.snapElements[c].snapping = n || a || o || r || p)
        }
    }), e.ui.plugin.add("draggable", "stack", {
        start: function (t, i, s) {
            var n, a = s.options,
                o = e.makeArray(e(a.stack)).sort(function (t, i) {
                    return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
                });
            o.length && (n = parseInt(e(o[0]).css("zIndex"), 10) || 0, e(o).each(function (t) {
                e(this).css("zIndex", n + t)
            }), this.css("zIndex", n + o.length))
        }
    }), e.ui.plugin.add("draggable", "zIndex", {
        start: function (t, i, s) {
            var n = e(i.helper),
                a = s.options;
            n.css("zIndex") && (a._zIndex = n.css("zIndex")), n.css("zIndex", a.zIndex)
        },
        stop: function (t, i, s) {
            var n = s.options;
            n._zIndex && e(i.helper).css("zIndex", n._zIndex)
        }
    }), e.ui.draggable
});
/*!
 * VERSION: 0.1.6
 * DATE: 2013-02-13
 * UPDATES AND DOCS AT: http://www.greensock.com/jquery-gsap-plugin/
 *
 * Requires TweenLite version 1.8.0 or higher and CSSPlugin.
 *
 * @license Copyright (c) 2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
(function (t) {
    "use strict";
    var e, i, s, r = t.fn.animate,
        n = t.fn.stop,
        a = !0,
        o = function (t, e) {
            "function" == typeof t && this.each(t), e()
        },
        h = function (t, e, i, s, r) {
            r = "function" == typeof r ? r : null, e = "function" == typeof e ? e : null, (e || r) && (s[t] = r ? o : i.each, s[t + "Scope"] = i, s[t + "Params"] = r ? [e, r] : [e])
        },
        l = {
            overwrite: 1,
            delay: 1,
            useFrames: 1,
            runBackwards: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            autoCSS: 1
        },
        _ = function (t, e) {
            for (var i in l) l[i] && void 0 !== t[i] && (e[i] = t[i])
        },
        u = function (t) {
            return function (e) {
                return t.getRatio(e)
            }
        },
        c = {},
        f = function () {
            var r, n, a, o = window.GreenSockGlobals || window;
            if (e = o.TweenMax || o.TweenLite, e && (r = (e.version + ".0.0").split("."), n = !(Number(r[0]) > 0 && Number(r[1]) > 7), o = o.com.greensock, i = o.plugins.CSSPlugin, c = o.easing.Ease.map || {}), !e || !i || n) return e = null, !s && window.console && (window.console.log("The jquery.gsap.js plugin requires the TweenMax (or at least TweenLite and CSSPlugin) JavaScript file(s)." + (n ? " Version " + r.join(".") + " is too old." : "")), s = !0), void 0;
            if (t.easing) {
                for (a in c) t.easing[a] = u(c[a]);
                f = !1
            }
        };
    t.fn.animate = function (s, n, o, l) {
        if (s = s || {}, f && (f(), !e || !i)) return r.call(this, s, n, o, l);
        if (!a || s.skipGSAP === !0 || "object" == typeof n && "function" == typeof n.step || null != s.scrollTop || null != s.scrollLeft) return r.call(this, s, n, o, l);
        var u, p, m, d, g = t.speed(n, o, l),
            v = {
                ease: c[g.easing] || (g.easing === !1 ? c.linear : c.swing)
            },
            T = this,
            y = "object" == typeof n ? n.specialEasing : null;
        for (p in s) {
            if (u = s[p], u instanceof Array && c[u[1]] && (y = y || {}, y[p] = u[1], u = u[0]), "toggle" === u || "hide" === u || "show" === u) return r.call(this, s, n, o, l);
            v[-1 === p.indexOf("-") ? p : t.camelCase(p)] = u
        }
        if (y) {
            d = [];
            for (p in y) u = d[d.length] = {}, _(v, u), u.ease = c[y[p]] || v.ease, -1 !== p.indexOf("-") && (p = t.camelCase(p)), u[p] = v[p];
            0 === d.length && (d = null)
        }
        return m = function (i) {
            if (d)
                for (var s = d.length; --s > -1;) e.to(T, t.fx.off ? 0 : g.duration / 1e3, d[s]);
            h("onComplete", g.old, T, v, i), e.to(T, t.fx.off ? 0 : g.duration / 1e3, v)
        }, g.queue !== !1 ? T.queue(g.queue, m) : m(), T
    }, t.fn.stop = function (t, i) {
        if (n.call(this, t, i), e) {
            if (i)
                for (var s, r = e.getTweensOf(this), a = r.length; --a > -1;) s = r[a].totalTime() / r[a].totalDuration(), s > 0 && 1 > s && r[a].seek(r[a].totalDuration());
            e.killTweensOf(this)
        }
        return this
    }, t.gsap = {
        enabled: function (t) {
            a = t
        },
        version: "0.1.6"
    }
})(jQuery);
/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
! function (a) {
    function f(a, b) {
        if (!(a.originalEvent.touches.length > 1)) {
            a.preventDefault();
            var c = a.originalEvent.changedTouches[0],
                d = document.createEvent("MouseEvents");
            d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(d)
        }
    }
    if (a.support.touch = "ontouchend" in document, a.support.touch) {
        var e, b = a.ui.mouse.prototype,
            c = b._mouseInit,
            d = b._mouseDestroy;
        b._touchStart = function (a) {
            var b = this;
            !e && b._mouseCapture(a.originalEvent.changedTouches[0]) && (e = !0, b._touchMoved = !1, f(a, "mouseover"), f(a, "mousemove"), f(a, "mousedown"))
        }, b._touchMove = function (a) {
            e && (this._touchMoved = !0, f(a, "mousemove"))
        }, b._touchEnd = function (a) {
            e && (f(a, "mouseup"), f(a, "mouseout"), this._touchMoved || f(a, "click"), e = !1)
        }, b._mouseInit = function () {
            var b = this;
            b.element.bind({
                touchstart: a.proxy(b, "_touchStart"),
                touchmove: a.proxy(b, "_touchMove"),
                touchend: a.proxy(b, "_touchEnd")
            }), c.call(b)
        }, b._mouseDestroy = function () {
            var b = this;
            b.element.unbind({
                touchstart: a.proxy(b, "_touchStart"),
                touchmove: a.proxy(b, "_touchMove"),
                touchend: a.proxy(b, "_touchEnd")
            }), d.call(b)
        }
    }
}(jQuery);
var pipwerks = {};
pipwerks.UTILS = {};
pipwerks.debug = {
    isActive: true
};
pipwerks.SCORM = {
    version: null,
    handleCompletionStatus: true,
    handleExitMode: true,
    API: {
        handle: null,
        isFound: false
    },
    connection: {
        isActive: false
    },
    data: {
        completionStatus: null,
        exitStatus: null
    },
    debug: {}
};
pipwerks.SCORM.isAvailable = function () {
    return true
};
pipwerks.SCORM.API.find = function (f) {
    var b = null,
        c = 0,
        d = 500,
        g = "SCORM.API.find",
        e = pipwerks.UTILS.trace,
        a = pipwerks.SCORM;
    while ((!f.API && !f.API_1484_11) && (f.parent) && (f.parent != f) && (c <= d)) {
        c++;
        f = f.parent
    }
    if (a.version) {
        switch (a.version) {
        case "2004":
            if (f.API_1484_11) {
                b = f.API_1484_11
            } else {
                e(g + ": SCORM version 2004 was specified by user, but API_1484_11 cannot be found.")
            }
            break;
        case "1.2":
            if (f.API) {
                b = f.API
            } else {
                e(g + ": SCORM version 1.2 was specified by user, but API cannot be found.")
            }
            break
        }
    } else {
        if (f.API_1484_11) {
            a.version = "2004";
            b = f.API_1484_11
        } else {
            if (f.API) {
                a.version = "1.2";
                b = f.API
            }
        }
    }
    if (b) {
        e(g + ": API found. Version: " + a.version);
        e("API: " + b)
    } else {
        e(g + ": Error finding API. \nFind attempts: " + c + ". \nFind attempt limit: " + d)
    }
    return b
};
pipwerks.SCORM.API.get = function () {
    var b = null,
        d = window,
        a = pipwerks.SCORM,
        e = a.API.find,
        c = pipwerks.UTILS.trace;
    if (d.parent && d.parent != d) {
        b = e(d.parent)
    }
    if (!b && d.top.opener) {
        b = e(d.top.opener)
    }
    if (!b && d.top.opener && d.top.opener.document) {
        b = e(d.top.opener.document)
    }
    if (b) {
        a.API.isFound = true
    } else {
        c("API.get failed: Can't find the API!")
    }
    return b
};
pipwerks.SCORM.API.getHandle = function () {
    var a = pipwerks.SCORM.API;
    if (!a.handle && !a.isFound) {
        a.handle = a.get()
    }
    return a.handle
};
pipwerks.SCORM.connection.initialize = function () {
    var f = false,
        h = pipwerks.SCORM,
        c = h.data.completionStatus,
        d = pipwerks.UTILS.trace,
        i = pipwerks.UTILS.StringToBoolean,
        a = h.debug,
        g = "SCORM.connection.initialize ";
    d("connection.initialize called.");
    if (!h.connection.isActive) {
        var b = h.API.getHandle(),
            e = 0;
        if (b) {
            switch (h.version) {
            case "1.2":
                f = i(b.LMSInitialize(""));
                break;
            case "2004":
                f = i(b.Initialize(""));
                break
            }
            if (f) {
                e = a.getCode();
                if (e !== null && e === 0) {
                    h.connection.isActive = true;
                    if (h.handleCompletionStatus) {
                        c = h.status("get");
                        if (c) {
                            switch (c) {
                            case "not attempted":
                                h.status("set", "incomplete");
                                break;
                            case "unknown":
                                h.status("set", "incomplete");
                                break
                            }
                        }
                    }
                } else {
                    f = false;
                    d(g + "failed. \nError code: " + e + " \nError info: " + a.getInfo(e))
                }
            } else {
                e = a.getCode();
                if (e !== null && e !== 0) {
                    d(g + "failed. \nError code: " + e + " \nError info: " + a.getInfo(e))
                } else {
                    d(g + "failed: No response from server.")
                }
            }
        } else {
            d(g + "failed: API is null.")
        }
    } else {
        d(g + "aborted: Connection already active.")
    }
    return f
};
pipwerks.SCORM.connection.terminate = function () {
    var g = false,
        i = pipwerks.SCORM,
        c = i.data.exitStatus,
        d = i.data.completionStatus,
        e = pipwerks.UTILS.trace,
        j = pipwerks.UTILS.StringToBoolean,
        a = i.debug,
        h = "SCORM.connection.terminate ";
    if (i.connection.isActive) {
        var b = i.API.getHandle(),
            f = 0;
        if (b) {
            if (i.handleExitMode && !c) {
                if (d !== "completed" && d !== "passed") {
                    switch (i.version) {
                    case "1.2":
                        g = i.set("cmi.core.exit", "suspend");
                        break;
                    case "2004":
                        g = i.set("cmi.exit", "suspend");
                        break
                    }
                } else {
                    switch (i.version) {
                    case "1.2":
                        g = i.set("cmi.core.exit", "logout");
                        break;
                    case "2004":
                        g = i.set("cmi.exit", "normal");
                        break
                    }
                }
            }
            g = i.save();
            if (g) {
                switch (i.version) {
                case "1.2":
                    g = j(b.LMSFinish(""));
                    break;
                case "2004":
                    g = j(b.Terminate(""));
                    break
                }
                if (g) {
                    i.connection.isActive = false
                } else {
                    f = a.getCode();
                    e(h + "failed. \nError code: " + f + " \nError info: " + a.getInfo(f))
                }
            }
        } else {
            e(h + "failed: API is null.")
        }
    } else {
        e(h + "aborted: Connection already terminated.")
    }
    return g
};
pipwerks.SCORM.data.get = function (h) {
    var e = null,
        a = pipwerks.SCORM,
        d = pipwerks.UTILS.trace,
        c = a.debug,
        g = "SCORM.data.get(" + h + ") ";
    if (a.connection.isActive) {
        var b = a.API.getHandle(),
            f = 0;
        if (b) {
            switch (a.version) {
            case "1.2":
                e = b.LMSGetValue(h);
                break;
            case "2004":
                e = b.GetValue(h);
                break
            }
            f = c.getCode();
            if (e !== "" || f === 0) {
                switch (h) {
                case "cmi.core.lesson_status":
                case "cmi.completion_status":
                    a.data.completionStatus = e;
                    break;
                case "cmi.core.exit":
                case "cmi.exit":
                    a.data.exitStatus = e;
                    break
                }
            } else {
                d(g + "failed. \nError code: " + f + "\nError info: " + c.getInfo(f))
            }
        } else {
            d(g + "failed: API is null.")
        }
    } else {
        d(g + "failed: API connection is inactive.")
    }
    d(g + " value: " + e);
    return String(e)
};
pipwerks.SCORM.data.set = function (e, f) {
    var g = false,
        i = pipwerks.SCORM,
        c = pipwerks.UTILS.trace,
        j = pipwerks.UTILS.StringToBoolean,
        a = i.debug,
        h = "SCORM.data.set(" + e + ") ";
    if (i.connection.isActive) {
        var b = i.API.getHandle(),
            d = 0;
        if (b) {
            switch (i.version) {
            case "1.2":
                g = j(b.LMSSetValue(e, f));
                break;
            case "2004":
                g = j(b.SetValue(e, f));
                break
            }
            if (g) {
                if (e === "cmi.core.lesson_status" || e === "cmi.completion_status") {
                    i.data.completionStatus = f
                }
            } else {
                c(h + "failed. \nError code: " + d + ". \nError info: " + a.getInfo(d))
            }
        } else {
            c(h + "failed: API is null.")
        }
    } else {
        c(h + "failed: API connection is inactive.")
    }
    return g
};
pipwerks.SCORM.data.save = function () {
    var f = false,
        b = pipwerks.SCORM,
        d = pipwerks.UTILS.trace,
        a = pipwerks.UTILS.StringToBoolean,
        e = "SCORM.data.save failed";
    if (b.connection.isActive) {
        var c = b.API.getHandle();
        if (c) {
            switch (b.version) {
            case "1.2":
                f = a(c.LMSCommit(""));
                break;
            case "2004":
                f = a(c.Commit(""));
                break
            }
        } else {
            d(e + ": API is null.")
        }
    } else {
        d(e + ": API connection is inactive.")
    }
    return f
};
pipwerks.SCORM.status = function (e, b) {
    var g = false,
        a = pipwerks.SCORM,
        d = pipwerks.UTILS.trace,
        f = "SCORM.getStatus failed",
        c = "";
    if (e !== null) {
        switch (a.version) {
        case "1.2":
            c = "cmi.core.lesson_status";
            break;
        case "2004":
            c = "cmi.completion_status";
            break
        }
        switch (e) {
        case "get":
            g = a.data.get(c);
            break;
        case "set":
            if (b !== null) {
                g = a.data.set(c, b)
            } else {
                g = false;
                d(f + ": status was not specified.")
            }
            break;
        default:
            g = false;
            d(f + ": no valid action was specified.")
        }
    } else {
        d(f + ": action was not specified.")
    }
    return g
};
pipwerks.SCORM.debug.getCode = function () {
    var a = pipwerks.SCORM,
        b = a.API.getHandle(),
        d = pipwerks.UTILS.trace,
        c = 0;
    if (b) {
        switch (a.version) {
        case "1.2":
            c = parseInt(b.LMSGetLastError(), 10);
            break;
        case "2004":
            c = parseInt(b.GetLastError(), 10);
            break
        }
    } else {
        d("SCORM.debug.getCode failed: API is null.")
    }
    return c
};
pipwerks.SCORM.debug.getInfo = function (e) {
    var b = pipwerks.SCORM,
        c = b.API.getHandle(),
        d = pipwerks.UTILS.trace,
        a = "";
    if (c) {
        switch (b.version) {
        case "1.2":
            a = c.LMSGetErrorString(e.toString());
            break;
        case "2004":
            a = c.GetErrorString(e.toString());
            break
        }
    } else {
        d("SCORM.debug.getInfo failed: API is null.")
    }
    return String(a)
};
pipwerks.SCORM.debug.getDiagnosticInfo = function (e) {
    var b = pipwerks.SCORM,
        c = b.API.getHandle(),
        d = pipwerks.UTILS.trace,
        a = "";
    if (c) {
        switch (b.version) {
        case "1.2":
            a = c.LMSGetDiagnostic(e);
            break;
        case "2004":
            a = c.GetDiagnostic(e);
            break
        }
    } else {
        d("SCORM.debug.getDiagnosticInfo failed: API is null.")
    }
    return String(a)
};
pipwerks.SCORM.init = pipwerks.SCORM.connection.initialize;
pipwerks.SCORM.get = pipwerks.SCORM.data.get;
pipwerks.SCORM.set = pipwerks.SCORM.data.set;
pipwerks.SCORM.save = pipwerks.SCORM.data.save;
pipwerks.SCORM.quit = pipwerks.SCORM.connection.terminate;
pipwerks.UTILS.StringToBoolean = function (b) {
    var a = typeof b;
    switch (a) {
    case "object":
    case "string":
        return (/(true|1)/i).test(b);
    case "number":
        return !!b;
    case "boolean":
        return b;
    case "undefined":
        return null;
    default:
        return false
    }
};
pipwerks.UTILS.trace = function (a) {
    if (pipwerks.debug.isActive) {
        if (window.console && window.console.log) {
            console.log(a)
        } else {}
    }
};
/*!
 * VERSION: 1.13.1
 * DATE: 2014-07-19
 * UPDATES AND DOCS AT: http://www.greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = (typeof (module) !== "undefined" && module.exports && typeof (global) !== "undefined") ? global : this || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {

    "use strict";

    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (Animation, SimpleTimeline, TweenLite) {

        var _slice = function (a) { //don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
                var b = [],
                    l = a.length,
                    i;
                for (i = 0; i !== l; b.push(a[i++]));
                return b;
            },
            TweenMax = function (target, duration, vars) {


                //CodeCraft
                target = Display.get(target);



                TweenLite.call(this, target, duration, vars);
                this._cycle = 0;
                this._yoyo = (this.vars.yoyo === true);
                this._repeat = this.vars.repeat || 0;
                this._repeatDelay = this.vars.repeatDelay || 0;
                this._dirty = true; //ensures that if there is any repeat, the totalDuration will get recalculated to accurately report it.
                this.render = TweenMax.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)
            },
            _tinyNum = 0.0000000001,
            TweenLiteInternals = TweenLite._internals,
            _isSelector = TweenLiteInternals.isSelector,
            _isArray = TweenLiteInternals.isArray,
            p = TweenMax.prototype = TweenLite.to({}, 0.1, {}),
            _blankArray = [];

        TweenMax.version = "1.13.1";
        p.constructor = TweenMax;
        p.kill()._gc = false;
        TweenMax.killTweensOf = TweenMax.killDelayedCallsTo = TweenLite.killTweensOf;
        TweenMax.getTweensOf = TweenLite.getTweensOf;
        TweenMax.lagSmoothing = TweenLite.lagSmoothing;
        TweenMax.ticker = TweenLite.ticker;
        TweenMax.render = TweenLite.render;

        p.invalidate = function () {
            this._yoyo = (this.vars.yoyo === true);
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._uncache(true);
            return TweenLite.prototype.invalidate.call(this);
        };

        p.updateTo = function (vars, resetDuration) {
            var curRatio = this.ratio,
                p;
            if (resetDuration && this._startTime < this._timeline._time) {
                this._startTime = this._timeline._time;
                this._uncache(false);
                if (this._gc) {
                    this._enabled(true, false);
                } else {
                    this._timeline.insert(this, this._startTime - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
                }
            }
            for (p in vars) {
                this.vars[p] = vars[p];
            }
            if (this._initted) {
                if (resetDuration) {
                    this._initted = false;
                } else {
                    if (this._gc) {
                        this._enabled(true, false);
                    }
                    if (this._notifyPluginsOfEnabled && this._firstPT) {
                        TweenLite._onPluginEvent("_onDisable", this); //in case a plugin like MotionBlur must perform some cleanup tasks
                    }
                    if (this._time / this._duration > 0.998) { //if the tween has finished (or come extremely close to finishing), we just need to rewind it to 0 and then render it again at the end which forces it to re-initialize (parsing the new vars). We allow tweens that are close to finishing (but haven't quite finished) to work this way too because otherwise, the values are so small when determining where to project the starting values that binary math issues creep in and can make the tween appear to render incorrectly when run backwards. 
                        var prevTime = this._time;
                        this.render(0, true, false);
                        this._initted = false;
                        this.render(prevTime, true, false);
                    } else if (this._time > 0) {
                        this._initted = false;
                        this._init();
                        var inv = 1 / (1 - curRatio),
                            pt = this._firstPT,
                            endValue;
                        while (pt) {
                            endValue = pt.s + pt.c;
                            pt.c *= inv;
                            pt.s = endValue - pt.c;
                            pt = pt._next;
                        }
                    }
                }
            }
            return this;
        };

        p.render = function (time, suppressEvents, force) {
            if (!this._initted)
                if (this._duration === 0 && this.vars.repeat) { //zero duration tweens that render immediately have render() called from TweenLite's constructor, before TweenMax's constructor has finished setting _repeat, _repeatDelay, and _yoyo which are critical in determining totalDuration() so we need to call invalidate() which is a low-kb way to get those set properly.
                    this.invalidate();
                }
            var totalDur = (!this._dirty) ? this._totalDuration : this.totalDuration(),
                prevTime = this._time,
                prevTotalTime = this._totalTime,
                prevCycle = this._cycle,
                duration = this._duration,
                prevRawPrevTime = this._rawPrevTime,
                isComplete, callback, pt, cycleDuration, r, type, pow, rawPrevTime, i;
            if (time >= totalDur) {
                this._totalTime = totalDur;
                this._cycle = this._repeat;
                if (this._yoyo && (this._cycle & 1) !== 0) {
                    this._time = 0;
                    this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
                } else {
                    this._time = duration;
                    this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
                }
                if (!this._reversed) {
                    isComplete = true;
                    callback = "onComplete";
                }
                if (duration === 0)
                    if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
                        if (this._startTime === this._timeline._duration) { //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
                            time = 0;
                        }
                        if (time === 0 || prevRawPrevTime < 0 || prevRawPrevTime === _tinyNum)
                            if (prevRawPrevTime !== time) {
                                force = true;
                                if (prevRawPrevTime > _tinyNum) {
                                    callback = "onReverseComplete";
                                }
                            }
                        this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
                    }

            } else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
                this._totalTime = this._time = this._cycle = 0;
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
                if (prevTotalTime !== 0 || (duration === 0 && prevRawPrevTime > 0 && prevRawPrevTime !== _tinyNum)) {
                    callback = "onReverseComplete";
                    isComplete = this._reversed;
                }
                if (time < 0) {
                    this._active = false;
                    if (duration === 0)
                        if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
                            if (prevRawPrevTime >= 0) {
                                force = true;
                            }
                            this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
                        }
                } else if (!this._initted) { //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
                    force = true;
                }
            } else {
                this._totalTime = this._time = time;

                if (this._repeat !== 0) {
                    cycleDuration = duration + this._repeatDelay;
                    this._cycle = (this._totalTime / cycleDuration) >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but Flash reports it as 0.79999999!)
                    if (this._cycle !== 0)
                        if (this._cycle === this._totalTime / cycleDuration) {
                            this._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
                        }
                    this._time = this._totalTime - (this._cycle * cycleDuration);
                    if (this._yoyo)
                        if ((this._cycle & 1) !== 0) {
                            this._time = duration - this._time;
                        }
                    if (this._time > duration) {
                        this._time = duration;
                    } else if (this._time < 0) {
                        this._time = 0;
                    }
                }

                if (this._easeType) {
                    r = this._time / duration;
                    type = this._easeType;
                    pow = this._easePower;
                    if (type === 1 || (type === 3 && r >= 0.5)) {
                        r = 1 - r;
                    }
                    if (type === 3) {
                        r *= 2;
                    }
                    if (pow === 1) {
                        r *= r;
                    } else if (pow === 2) {
                        r *= r * r;
                    } else if (pow === 3) {
                        r *= r * r * r;
                    } else if (pow === 4) {
                        r *= r * r * r * r;
                    }

                    if (type === 1) {
                        this.ratio = 1 - r;
                    } else if (type === 2) {
                        this.ratio = r;
                    } else if (this._time / duration < 0.5) {
                        this.ratio = r / 2;
                    } else {
                        this.ratio = 1 - (r / 2);
                    }

                } else {
                    this.ratio = this._ease.getRatio(this._time / duration);
                }

            }

            if (prevTime === this._time && !force && prevCycle === this._cycle) {
                if (prevTotalTime !== this._totalTime)
                    if (this._onUpdate)
                        if (!suppressEvents) { //so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
                            this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _blankArray);
                        }
                return;
            } else if (!this._initted) {
                this._init();
                if (!this._initted || this._gc) { //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
                    return;
                } else if (!force && this._firstPT && ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration))) { //we stick it in the queue for rendering at the very end of the tick - this is a performance optimization because browsers invalidate styles and force a recalculation if you read, write, and then read style data (so it's better to read/read/read/write/write/write than read/write/read/write/read/write). The down side, of course, is that usually you WANT things to render immediately because you may have code running right after that which depends on the change. Like imagine running TweenLite.set(...) and then immediately after that, creating a nother tween that animates the same property to another value; the starting values of that 2nd tween wouldn't be accurate if lazy is true.
                    this._time = prevTime;
                    this._totalTime = prevTotalTime;
                    this._rawPrevTime = prevRawPrevTime;
                    this._cycle = prevCycle;
                    TweenLiteInternals.lazyTweens.push(this);
                    this._lazy = time;
                    return;
                }
                //_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
                if (this._time && !isComplete) {
                    this.ratio = this._ease.getRatio(this._time / duration);
                } else if (isComplete && this._ease._calcEnd) {
                    this.ratio = this._ease.getRatio((this._time === 0) ? 0 : 1);
                }
            }
            if (this._lazy !== false) {
                this._lazy = false;
            }

            if (!this._active)
                if (!this._paused && this._time !== prevTime && time >= 0) {
                    this._active = true; //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
                }
            if (prevTotalTime === 0) {
                if (this._initted === 2 && time > 0) {
                    //this.invalidate();
                    this._init(); //will just apply overwriting since _initted of (2) means it was a from() tween that had immediateRender:true
                }
                if (this._startAt) {
                    if (time >= 0) {
                        this._startAt.render(time, suppressEvents, force);
                    } else if (!callback) {
                        callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
                    }
                }
                if (this.vars.onStart)
                    if (this._totalTime !== 0 || duration === 0)
                        if (!suppressEvents) {
                            this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _blankArray);
                        }
            }

            pt = this._firstPT;
            while (pt) {
                if (pt.f) {
                    pt.t[pt.p](pt.c * this.ratio + pt.s);
                } else {
                    pt.t[pt.p] = pt.c * this.ratio + pt.s;
                }
                pt = pt._next;
            }

            if (this._onUpdate) {
                if (time < 0)
                    if (this._startAt && this._startTime) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
                        this._startAt.render(time, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
                    }
                if (!suppressEvents)
                    if (this._totalTime !== prevTotalTime || isComplete) {
                        this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _blankArray);
                    }
            }
            if (this._cycle !== prevCycle)
                if (!suppressEvents)
                    if (!this._gc)
                        if (this.vars.onRepeat) {
                            this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || _blankArray);
                        }
            if (callback)
                if (!this._gc || force) { //check gc because there's a chance that kill() could be called in an onUpdate
                    if (time < 0 && this._startAt && !this._onUpdate && this._startTime) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
                        this._startAt.render(time, suppressEvents, force);
                    }
                    if (isComplete) {
                        if (this._timeline.autoRemoveChildren) {
                            this._enabled(false, false);
                        }
                        this._active = false;
                    }
                    if (!suppressEvents && this.vars[callback]) {
                        this.vars[callback].apply(this.vars[callback + "Scope"] || this, this.vars[callback + "Params"] || _blankArray);
                    }
                    if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) { //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
                        this._rawPrevTime = 0;
                    }
                }
        };

        //---- STATIC FUNCTIONS -----------------------------------------------------------------------------------------------------------

        TweenMax.to = function (target, duration, vars) {
            return new TweenMax(target, duration, vars);
        };

        TweenMax.from = function (target, duration, vars) {
            vars.runBackwards = true;
            vars.immediateRender = (vars.immediateRender != false);
            return new TweenMax(target, duration, vars);
        };

        TweenMax.fromTo = function (target, duration, fromVars, toVars) {
            toVars.startAt = fromVars;
            toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
            return new TweenMax(target, duration, toVars);
        };

        TweenMax.staggerTo = TweenMax.allTo = function (targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
            stagger = stagger || 0;
            var delay = vars.delay || 0,
                a = [],
                finalComplete = function () {
                    if (vars.onComplete) {
                        vars.onComplete.apply(vars.onCompleteScope || this, arguments);
                    }
                    onCompleteAll.apply(onCompleteAllScope || this, onCompleteAllParams || _blankArray);
                },
                l, copy, i, p;
            if (!_isArray(targets)) {
                if (typeof (targets) === "string") {
                    targets = TweenLite.selector(targets) || targets;
                }
                if (_isSelector(targets)) {
                    targets = _slice(targets);
                }
            }
            l = targets.length;
            for (i = 0; i < l; i++) {
                copy = {};
                for (p in vars) {
                    copy[p] = vars[p];
                }
                copy.delay = delay;
                if (i === l - 1 && onCompleteAll) {
                    copy.onComplete = finalComplete;
                }
                a[i] = new TweenMax(targets[i], duration, copy);
                delay += stagger;
            }
            return a;
        };

        TweenMax.staggerFrom = TweenMax.allFrom = function (targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
            vars.runBackwards = true;
            vars.immediateRender = (vars.immediateRender != false);
            return TweenMax.staggerTo(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
        };

        TweenMax.staggerFromTo = TweenMax.allFromTo = function (targets, duration, fromVars, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
            toVars.startAt = fromVars;
            toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
            return TweenMax.staggerTo(targets, duration, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
        };

        TweenMax.delayedCall = function (delay, callback, params, scope, useFrames) {
            return new TweenMax(callback, 0, {
                delay: delay,
                onComplete: callback,
                onCompleteParams: params,
                onCompleteScope: scope,
                onReverseComplete: callback,
                onReverseCompleteParams: params,
                onReverseCompleteScope: scope,
                immediateRender: false,
                useFrames: useFrames,
                overwrite: 0
            });
        };

        TweenMax.set = function (target, vars) {
            return new TweenMax(target, 0, vars);
        };

        TweenMax.isTweening = function (target) {
            return (TweenLite.getTweensOf(target, true).length > 0);
        };

        var _getChildrenOf = function (timeline, includeTimelines) {
                var a = [],
                    cnt = 0,
                    tween = timeline._first;
                while (tween) {
                    if (tween instanceof TweenLite) {
                        a[cnt++] = tween;
                    } else {
                        if (includeTimelines) {
                            a[cnt++] = tween;
                        }
                        a = a.concat(_getChildrenOf(tween, includeTimelines));
                        cnt = a.length;
                    }
                    tween = tween._next;
                }
                return a;
            },
            getAllTweens = TweenMax.getAllTweens = function (includeTimelines) {
                return _getChildrenOf(Animation._rootTimeline, includeTimelines).concat(_getChildrenOf(Animation._rootFramesTimeline, includeTimelines));
            };

        TweenMax.killAll = function (complete, tweens, delayedCalls, timelines) {
            if (tweens == null) {
                tweens = true;
            }
            if (delayedCalls == null) {
                delayedCalls = true;
            }
            var a = getAllTweens((timelines != false)),
                l = a.length,
                allTrue = (tweens && delayedCalls && timelines),
                isDC, tween, i;
            for (i = 0; i < l; i++) {
                tween = a[i];
                if (allTrue || (tween instanceof SimpleTimeline) || ((isDC = (tween.target === tween.vars.onComplete)) && delayedCalls) || (tweens && !isDC)) {
                    if (complete) {
                        tween.totalTime(tween._reversed ? 0 : tween.totalDuration());
                    } else {
                        tween._enabled(false, false);
                    }
                }
            }
        };

        TweenMax.killChildTweensOf = function (parent, complete) {
            if (parent == null) {
                return;
            }
            var tl = TweenLiteInternals.tweenLookup,
                a, curParent, p, i, l;
            if (typeof (parent) === "string") {
                parent = TweenLite.selector(parent) || parent;
            }
            if (_isSelector(parent)) {
                parent = _slice(parent);
            }
            if (_isArray(parent)) {
                i = parent.length;
                while (--i > -1) {
                    TweenMax.killChildTweensOf(parent[i], complete);
                }
                return;
            }
            a = [];
            for (p in tl) {
                curParent = tl[p].target.parentNode;
                while (curParent) {
                    if (curParent === parent) {
                        a = a.concat(tl[p].tweens);
                    }
                    curParent = curParent.parentNode;
                }
            }
            l = a.length;
            for (i = 0; i < l; i++) {
                if (complete) {
                    a[i].totalTime(a[i].totalDuration());
                }
                a[i]._enabled(false, false);
            }
        };

        var _changePause = function (pause, tweens, delayedCalls, timelines) {
            tweens = (tweens !== false);
            delayedCalls = (delayedCalls !== false);
            timelines = (timelines !== false);
            var a = getAllTweens(timelines),
                allTrue = (tweens && delayedCalls && timelines),
                i = a.length,
                isDC, tween;
            while (--i > -1) {
                tween = a[i];
                if (allTrue || (tween instanceof SimpleTimeline) || ((isDC = (tween.target === tween.vars.onComplete)) && delayedCalls) || (tweens && !isDC)) {
                    tween.paused(pause);
                }
            }
        };

        TweenMax.pauseAll = function (tweens, delayedCalls, timelines) {
            _changePause(true, tweens, delayedCalls, timelines);
        };

        TweenMax.resumeAll = function (tweens, delayedCalls, timelines) {
            _changePause(false, tweens, delayedCalls, timelines);
        };

        TweenMax.globalTimeScale = function (value) {
            var tl = Animation._rootTimeline,
                t = TweenLite.ticker.time;
            if (!arguments.length) {
                return tl._timeScale;
            }
            value = value || _tinyNum; //can't allow zero because it'll throw the math off
            tl._startTime = t - ((t - tl._startTime) * tl._timeScale / value);
            tl = Animation._rootFramesTimeline;
            t = TweenLite.ticker.frame;
            tl._startTime = t - ((t - tl._startTime) * tl._timeScale / value);
            tl._timeScale = Animation._rootTimeline._timeScale = value;
            return value;
        };


        //---- GETTERS / SETTERS ----------------------------------------------------------------------------------------------------------

        p.progress = function (value) {
            return (!arguments.length) ? this._time / this.duration() : this.totalTime(this.duration() * ((this._yoyo && (this._cycle & 1) !== 0) ? 1 - value : value) + (this._cycle * (this._duration + this._repeatDelay)), false);
        };

        p.totalProgress = function (value) {
            return (!arguments.length) ? this._totalTime / this.totalDuration() : this.totalTime(this.totalDuration() * value, false);
        };

        p.time = function (value, suppressEvents) {
            if (!arguments.length) {
                return this._time;
            }
            if (this._dirty) {
                this.totalDuration();
            }
            if (value > this._duration) {
                value = this._duration;
            }
            if (this._yoyo && (this._cycle & 1) !== 0) {
                value = (this._duration - value) + (this._cycle * (this._duration + this._repeatDelay));
            } else if (this._repeat !== 0) {
                value += this._cycle * (this._duration + this._repeatDelay);
            }
            return this.totalTime(value, suppressEvents);
        };

        p.duration = function (value) {
            if (!arguments.length) {
                return this._duration; //don't set _dirty = false because there could be repeats that haven't been factored into the _totalDuration yet. Otherwise, if you create a repeated TweenMax and then immediately check its duration(), it would cache the value and the totalDuration would not be correct, thus repeats wouldn't take effect.
            }
            return Animation.prototype.duration.call(this, value);
        };

        p.totalDuration = function (value) {
            if (!arguments.length) {
                if (this._dirty) {
                    //instead of Infinity, we use 999999999999 so that we can accommodate reverses
                    this._totalDuration = (this._repeat === -1) ? 999999999999 : this._duration * (this._repeat + 1) + (this._repeatDelay * this._repeat);
                    this._dirty = false;
                }
                return this._totalDuration;
            }
            return (this._repeat === -1) ? this : this.duration((value - (this._repeat * this._repeatDelay)) / (this._repeat + 1));
        };

        p.repeat = function (value) {
            if (!arguments.length) {
                return this._repeat;
            }
            this._repeat = value;
            return this._uncache(true);
        };

        p.repeatDelay = function (value) {
            if (!arguments.length) {
                return this._repeatDelay;
            }
            this._repeatDelay = value;
            return this._uncache(true);
        };

        p.yoyo = function (value) {
            if (!arguments.length) {
                return this._yoyo;
            }
            this._yoyo = value;
            return this;
        };


        return TweenMax;

    }, true);








    /*
     * ----------------------------------------------------------------
     * TimelineLite
     * ----------------------------------------------------------------
     */
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (Animation, SimpleTimeline, TweenLite) {

        var TimelineLite = function (vars) {
                SimpleTimeline.call(this, vars);
                this._labels = {};
                this.autoRemoveChildren = (this.vars.autoRemoveChildren === true);
                this.smoothChildTiming = (this.vars.smoothChildTiming === true);
                this._sortChildren = true;
                this._onUpdate = this.vars.onUpdate;
                var v = this.vars,
                    val, p;
                for (p in v) {
                    val = v[p];
                    if (_isArray(val))
                        if (val.join("").indexOf("{self}") !== -1) {
                            v[p] = this._swapSelfInParams(val);
                        }
                }
                if (_isArray(v.tweens)) {
                    this.add(v.tweens, 0, v.align, v.stagger);
                }
            },
            _tinyNum = 0.0000000001,
            TweenLiteInternals = TweenLite._internals,
            _isSelector = TweenLiteInternals.isSelector,
            _isArray = TweenLiteInternals.isArray,
            _lazyTweens = TweenLiteInternals.lazyTweens,
            _lazyRender = TweenLiteInternals.lazyRender,
            _blankArray = [],
            _globals = _gsScope._gsDefine.globals,
            _copy = function (vars) {
                var copy = {},
                    p;
                for (p in vars) {
                    copy[p] = vars[p];
                }
                return copy;
            },
            _pauseCallback = function (tween, callback, params, scope) {
                tween._timeline.pause(tween._startTime);
                if (callback) {
                    callback.apply(scope || tween._timeline, params || _blankArray);
                }
            },
            _slice = function (a) { //don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
                var b = [],
                    l = a.length,
                    i;
                for (i = 0; i !== l; b.push(a[i++]));
                return b;
            },
            p = TimelineLite.prototype = new SimpleTimeline();

        TimelineLite.version = "1.13.1";
        p.constructor = TimelineLite;
        p.kill()._gc = false;

        /* might use later...
        //translates a local time inside an animation to the corresponding time on the root/global timeline, factoring in all nesting and timeScales.
        function localToGlobal(time, animation) {
        	while (animation) {
        		time = (time / animation._timeScale) + animation._startTime;
        		animation = animation.timeline;
        	}
        	return time;
        }

        //translates the supplied time on the root/global timeline into the corresponding local time inside a particular animation, factoring in all nesting and timeScales
        function globalToLocal(time, animation) {
        	var scale = 1;
        	time -= localToGlobal(0, animation);
        	while (animation) {
        		scale *= animation._timeScale;
        		animation = animation.timeline;
        	}
        	return time * scale;
        }
        */

        p.to = function (target, duration, vars, position) {
            var Engine = (vars.repeat && _globals.TweenMax) || TweenLite;
            return duration ? this.add(new Engine(target, duration, vars), position) : this.set(target, vars, position);
        };

        p.from = function (target, duration, vars, position) {
            return this.add(((vars.repeat && _globals.TweenMax) || TweenLite).from(target, duration, vars), position);
        };

        p.fromTo = function (target, duration, fromVars, toVars, position) {
            var Engine = (toVars.repeat && _globals.TweenMax) || TweenLite;
            return duration ? this.add(Engine.fromTo(target, duration, fromVars, toVars), position) : this.set(target, toVars, position);
        };

        p.staggerTo = function (targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
            var tl = new TimelineLite({
                    onComplete: onCompleteAll,
                    onCompleteParams: onCompleteAllParams,
                    onCompleteScope: onCompleteAllScope,
                    smoothChildTiming: this.smoothChildTiming
                }),
                i;
            if (typeof (targets) === "string") {
                targets = TweenLite.selector(targets) || targets;
            }
            if (_isSelector(targets)) { //senses if the targets object is a selector. If it is, we should translate it into an array.
                targets = _slice(targets);
            }
            stagger = stagger || 0;
            for (i = 0; i < targets.length; i++) {
                if (vars.startAt) {
                    vars.startAt = _copy(vars.startAt);
                }
                tl.to(targets[i], duration, _copy(vars), i * stagger);
            }
            return this.add(tl, position);
        };

        p.staggerFrom = function (targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
            vars.immediateRender = (vars.immediateRender != false);
            vars.runBackwards = true;
            return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
        };

        p.staggerFromTo = function (targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
            toVars.startAt = fromVars;
            toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
            return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
        };

        p.call = function (callback, params, scope, position) {
            return this.add(TweenLite.delayedCall(0, callback, params, scope), position);
        };

        p.set = function (target, vars, position) {
            position = this._parseTimeOrLabel(position, 0, true);
            if (vars.immediateRender == null) {
                vars.immediateRender = (position === this._time && !this._paused);
            }
            return this.add(new TweenLite(target, 0, vars), position);
        };

        TimelineLite.exportRoot = function (vars, ignoreDelayedCalls) {
            vars = vars || {};
            if (vars.smoothChildTiming == null) {
                vars.smoothChildTiming = true;
            }
            var tl = new TimelineLite(vars),
                root = tl._timeline,
                tween, next;
            if (ignoreDelayedCalls == null) {
                ignoreDelayedCalls = true;
            }
            root._remove(tl, true);
            tl._startTime = 0;
            tl._rawPrevTime = tl._time = tl._totalTime = root._time;
            tween = root._first;
            while (tween) {
                next = tween._next;
                if (!ignoreDelayedCalls || !(tween instanceof TweenLite && tween.target === tween.vars.onComplete)) {
                    tl.add(tween, tween._startTime - tween._delay);
                }
                tween = next;
            }
            root.add(tl, 0);
            return tl;
        };

        p.add = function (value, position, align, stagger) {
            var curTime, l, i, child, tl, beforeRawTime;
            if (typeof (position) !== "number") {
                position = this._parseTimeOrLabel(position, 0, true, value);
            }
            if (!(value instanceof Animation)) {
                if ((value instanceof Array) || (value && value.push && _isArray(value))) {
                    align = align || "normal";
                    stagger = stagger || 0;
                    curTime = position;
                    l = value.length;
                    for (i = 0; i < l; i++) {
                        if (_isArray(child = value[i])) {
                            child = new TimelineLite({
                                tweens: child
                            });
                        }
                        this.add(child, curTime);
                        if (typeof (child) !== "string" && typeof (child) !== "function") {
                            if (align === "sequence") {
                                curTime = child._startTime + (child.totalDuration() / child._timeScale);
                            } else if (align === "start") {
                                child._startTime -= child.delay();
                            }
                        }
                        curTime += stagger;
                    }
                    return this._uncache(true);
                } else if (typeof (value) === "string") {
                    return this.addLabel(value, position);
                } else if (typeof (value) === "function") {
                    value = TweenLite.delayedCall(0, value);
                } else {
                    throw ("Cannot add " + value + " into the timeline; it is not a tween, timeline, function, or string.");
                }
            }

            SimpleTimeline.prototype.add.call(this, value, position);

            //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
            if (this._gc || this._time === this._duration)
                if (!this._paused)
                    if (this._duration < this.duration()) {
                        //in case any of the ancestors had completed but should now be enabled...
                        tl = this;
                        beforeRawTime = (tl.rawTime() > value._startTime); //if the tween is placed on the timeline so that it starts BEFORE the current rawTime, we should align the playhead (move the timeline). This is because sometimes users will create a timeline, let it finish, and much later append a tween and expect it to run instead of jumping to its end state. While technically one could argue that it should jump to its end state, that's not what users intuitively expect.
                        while (tl._timeline) {
                            if (beforeRawTime && tl._timeline.smoothChildTiming) {
                                tl.totalTime(tl._totalTime, true); //moves the timeline (shifts its startTime) if necessary, and also enables it.
                            } else if (tl._gc) {
                                tl._enabled(true, false);
                            }
                            tl = tl._timeline;
                        }
                    }

            return this;
        };

        p.remove = function (value) {
            if (value instanceof Animation) {
                return this._remove(value, false);
            } else if (value instanceof Array || (value && value.push && _isArray(value))) {
                var i = value.length;
                while (--i > -1) {
                    this.remove(value[i]);
                }
                return this;
            } else if (typeof (value) === "string") {
                return this.removeLabel(value);
            }
            return this.kill(null, value);
        };

        p._remove = function (tween, skipDisable) {
            SimpleTimeline.prototype._remove.call(this, tween, skipDisable);
            var last = this._last;
            if (!last) {
                this._time = this._totalTime = this._duration = this._totalDuration = 0;
            } else if (this._time > last._startTime + last._totalDuration / last._timeScale) {
                this._time = this.duration();
                this._totalTime = this._totalDuration;
            }
            return this;
        };

        p.append = function (value, offsetOrLabel) {
            return this.add(value, this._parseTimeOrLabel(null, offsetOrLabel, true, value));
        };

        p.insert = p.insertMultiple = function (value, position, align, stagger) {
            return this.add(value, position || 0, align, stagger);
        };

        p.appendMultiple = function (tweens, offsetOrLabel, align, stagger) {
            return this.add(tweens, this._parseTimeOrLabel(null, offsetOrLabel, true, tweens), align, stagger);
        };

        p.addLabel = function (label, position) {
            this._labels[label] = this._parseTimeOrLabel(position);
            return this;
        };

        p.addPause = function (position, callback, params, scope) {
            return this.call(_pauseCallback, ["{self}", callback, params, scope], this, position);
        };

        p.removeLabel = function (label) {
            delete this._labels[label];
            return this;
        };

        p.getLabelTime = function (label) {
            return (this._labels[label] != null) ? this._labels[label] : -1;
        };

        p._parseTimeOrLabel = function (timeOrLabel, offsetOrLabel, appendIfAbsent, ignore) {
            var i;
            //if we're about to add a tween/timeline (or an array of them) that's already a child of this timeline, we should remove it first so that it doesn't contaminate the duration().
            if (ignore instanceof Animation && ignore.timeline === this) {
                this.remove(ignore);
            } else if (ignore && ((ignore instanceof Array) || (ignore.push && _isArray(ignore)))) {
                i = ignore.length;
                while (--i > -1) {
                    if (ignore[i] instanceof Animation && ignore[i].timeline === this) {
                        this.remove(ignore[i]);
                    }
                }
            }
            if (typeof (offsetOrLabel) === "string") {
                return this._parseTimeOrLabel(offsetOrLabel, (appendIfAbsent && typeof (timeOrLabel) === "number" && this._labels[offsetOrLabel] == null) ? timeOrLabel - this.duration() : 0, appendIfAbsent);
            }
            offsetOrLabel = offsetOrLabel || 0;
            if (typeof (timeOrLabel) === "string" && (isNaN(timeOrLabel) || this._labels[timeOrLabel] != null)) { //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
                i = timeOrLabel.indexOf("=");
                if (i === -1) {
                    if (this._labels[timeOrLabel] == null) {
                        return appendIfAbsent ? (this._labels[timeOrLabel] = this.duration() + offsetOrLabel) : offsetOrLabel;
                    }
                    return this._labels[timeOrLabel] + offsetOrLabel;
                }
                offsetOrLabel = parseInt(timeOrLabel.charAt(i - 1) + "1", 10) * Number(timeOrLabel.substr(i + 1));
                timeOrLabel = (i > 1) ? this._parseTimeOrLabel(timeOrLabel.substr(0, i - 1), 0, appendIfAbsent) : this.duration();
            } else if (timeOrLabel == null) {
                timeOrLabel = this.duration();
            }
            return Number(timeOrLabel) + offsetOrLabel;
        };

        p.seek = function (position, suppressEvents) {
            return this.totalTime((typeof (position) === "number") ? position : this._parseTimeOrLabel(position), (suppressEvents !== false));
        };

        p.stop = function () {
            return this.paused(true);
        };

        p.gotoAndPlay = function (position, suppressEvents) {
            return this.play(position, suppressEvents);
        };

        p.gotoAndStop = function (position, suppressEvents) {
            return this.pause(position, suppressEvents);
        };

        p.render = function (time, suppressEvents, force) {
            if (this._gc) {
                this._enabled(true, false);
            }
            var totalDur = (!this._dirty) ? this._totalDuration : this.totalDuration(),
                prevTime = this._time,
                prevStart = this._startTime,
                prevTimeScale = this._timeScale,
                prevPaused = this._paused,
                tween, isComplete, next, callback, internalForce;
            if (time >= totalDur) {
                this._totalTime = this._time = totalDur;
                if (!this._reversed)
                    if (!this._hasPausedChild()) {
                        isComplete = true;
                        callback = "onComplete";
                        if (this._duration === 0)
                            if (time === 0 || this._rawPrevTime < 0 || this._rawPrevTime === _tinyNum)
                                if (this._rawPrevTime !== time && this._first) {
                                    internalForce = true;
                                    if (this._rawPrevTime > _tinyNum) {
                                        callback = "onReverseComplete";
                                    }
                                }
                    }
                this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
                time = totalDur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7.

            } else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
                this._totalTime = this._time = 0;
                if (prevTime !== 0 || (this._duration === 0 && this._rawPrevTime !== _tinyNum && (this._rawPrevTime > 0 || (time < 0 && this._rawPrevTime >= 0)))) {
                    callback = "onReverseComplete";
                    isComplete = this._reversed;
                }
                if (time < 0) {
                    this._active = false;
                    if (this._rawPrevTime >= 0 && this._first) { //when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
                        internalForce = true;
                    }
                    this._rawPrevTime = time;
                } else {
                    this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.

                    time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
                    if (!this._initted) {
                        internalForce = true;
                    }
                }

            } else {
                this._totalTime = this._time = this._rawPrevTime = time;
            }
            if ((this._time === prevTime || !this._first) && !force && !internalForce) {
                return;
            } else if (!this._initted) {
                this._initted = true;
            }

            if (!this._active)
                if (!this._paused && this._time !== prevTime && time > 0) {
                    this._active = true; //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
                }

            if (prevTime === 0)
                if (this.vars.onStart)
                    if (this._time !== 0)
                        if (!suppressEvents) {
                            this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _blankArray);
                        }

            if (this._time >= prevTime) {
                tween = this._first;
                while (tween) {
                    next = tween._next; //record it here because the value could change after rendering...
                    if (this._paused && !prevPaused) { //in case a tween pauses the timeline when rendering
                        break;
                    } else if (tween._active || (tween._startTime <= this._time && !tween._paused && !tween._gc)) {
                        if (!tween._reversed) {
                            tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
                        } else {
                            tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
                        }
                    }
                    tween = next;
                }
            } else {
                tween = this._last;
                while (tween) {
                    next = tween._prev; //record it here because the value could change after rendering...
                    if (this._paused && !prevPaused) { //in case a tween pauses the timeline when rendering
                        break;
                    } else if (tween._active || (tween._startTime <= prevTime && !tween._paused && !tween._gc)) {
                        if (!tween._reversed) {
                            tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
                        } else {
                            tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
                        }
                    }
                    tween = next;
                }
            }

            if (this._onUpdate)
                if (!suppressEvents) {
                    if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
                        _lazyRender();
                    }
                    this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _blankArray);
                }

            if (callback)
                if (!this._gc)
                    if (prevStart === this._startTime || prevTimeScale !== this._timeScale)
                        if (this._time === 0 || totalDur >= this.totalDuration()) { //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
                            if (isComplete) {
                                if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
                                    _lazyRender();
                                }
                                if (this._timeline.autoRemoveChildren) {
                                    this._enabled(false, false);
                                }
                                this._active = false;
                            }
                            if (!suppressEvents && this.vars[callback]) {
                                this.vars[callback].apply(this.vars[callback + "Scope"] || this, this.vars[callback + "Params"] || _blankArray);
                            }
                        }
        };

        p._hasPausedChild = function () {
            var tween = this._first;
            while (tween) {
                if (tween._paused || ((tween instanceof TimelineLite) && tween._hasPausedChild())) {
                    return true;
                }
                tween = tween._next;
            }
            return false;
        };

        p.getChildren = function (nested, tweens, timelines, ignoreBeforeTime) {
            ignoreBeforeTime = ignoreBeforeTime || -9999999999;
            var a = [],
                tween = this._first,
                cnt = 0;
            while (tween) {
                if (tween._startTime < ignoreBeforeTime) {
                    //do nothing
                } else if (tween instanceof TweenLite) {
                    if (tweens !== false) {
                        a[cnt++] = tween;
                    }
                } else {
                    if (timelines !== false) {
                        a[cnt++] = tween;
                    }
                    if (nested !== false) {
                        a = a.concat(tween.getChildren(true, tweens, timelines));
                        cnt = a.length;
                    }
                }
                tween = tween._next;
            }
            return a;
        };

        p.getTweensOf = function (target, nested) {
            var disabled = this._gc,
                a = [],
                cnt = 0,
                tweens, i;
            if (disabled) {
                this._enabled(true, true); //getTweensOf() filters out disabled tweens, and we have to mark them as _gc = true when the timeline completes in order to allow clean garbage collection, so temporarily re-enable the timeline here.
            }
            tweens = TweenLite.getTweensOf(target);
            i = tweens.length;
            while (--i > -1) {
                if (tweens[i].timeline === this || (nested && this._contains(tweens[i]))) {
                    a[cnt++] = tweens[i];
                }
            }
            if (disabled) {
                this._enabled(false, true);
            }
            return a;
        };

        p._contains = function (tween) {
            var tl = tween.timeline;
            while (tl) {
                if (tl === this) {
                    return true;
                }
                tl = tl.timeline;
            }
            return false;
        };

        p.shiftChildren = function (amount, adjustLabels, ignoreBeforeTime) {
            ignoreBeforeTime = ignoreBeforeTime || 0;
            var tween = this._first,
                labels = this._labels,
                p;
            while (tween) {
                if (tween._startTime >= ignoreBeforeTime) {
                    tween._startTime += amount;
                }
                tween = tween._next;
            }
            if (adjustLabels) {
                for (p in labels) {
                    if (labels[p] >= ignoreBeforeTime) {
                        labels[p] += amount;
                    }
                }
            }
            return this._uncache(true);
        };

        p._kill = function (vars, target) {
            if (!vars && !target) {
                return this._enabled(false, false);
            }
            var tweens = (!target) ? this.getChildren(true, true, false) : this.getTweensOf(target),
                i = tweens.length,
                changed = false;
            while (--i > -1) {
                if (tweens[i]._kill(vars, target)) {
                    changed = true;
                }
            }
            return changed;
        };

        p.clear = function (labels) {
            var tweens = this.getChildren(false, true, true),
                i = tweens.length;
            this._time = this._totalTime = 0;
            while (--i > -1) {
                tweens[i]._enabled(false, false);
            }
            if (labels !== false) {
                this._labels = {};
            }
            return this._uncache(true);
        };

        p.invalidate = function () {
            var tween = this._first;
            while (tween) {
                tween.invalidate();
                tween = tween._next;
            }
            return this;
        };

        p._enabled = function (enabled, ignoreTimeline) {
            if (enabled === this._gc) {
                var tween = this._first;
                while (tween) {
                    tween._enabled(enabled, true);
                    tween = tween._next;
                }
            }
            return SimpleTimeline.prototype._enabled.call(this, enabled, ignoreTimeline);
        };

        p.duration = function (value) {
            if (!arguments.length) {
                if (this._dirty) {
                    this.totalDuration(); //just triggers recalculation
                }
                return this._duration;
            }
            if (this.duration() !== 0 && value !== 0) {
                this.timeScale(this._duration / value);
            }
            return this;
        };

        p.totalDuration = function (value) {
            if (!arguments.length) {
                if (this._dirty) {
                    var max = 0,
                        tween = this._last,
                        prevStart = 999999999999,
                        prev, end;
                    while (tween) {
                        prev = tween._prev; //record it here in case the tween changes position in the sequence...
                        if (tween._dirty) {
                            tween.totalDuration(); //could change the tween._startTime, so make sure the tween's cache is clean before analyzing it.
                        }
                        if (tween._startTime > prevStart && this._sortChildren && !tween._paused) { //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
                            this.add(tween, tween._startTime - tween._delay);
                        } else {
                            prevStart = tween._startTime;
                        }
                        if (tween._startTime < 0 && !tween._paused) { //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
                            max -= tween._startTime;
                            if (this._timeline.smoothChildTiming) {
                                this._startTime += tween._startTime / this._timeScale;
                            }
                            this.shiftChildren(-tween._startTime, false, -9999999999);
                            prevStart = 0;
                        }
                        end = tween._startTime + (tween._totalDuration / tween._timeScale);
                        if (end > max) {
                            max = end;
                        }
                        tween = prev;
                    }
                    this._duration = this._totalDuration = max;
                    this._dirty = false;
                }
                return this._totalDuration;
            }
            if (this.totalDuration() !== 0)
                if (value !== 0) {
                    this.timeScale(this._totalDuration / value);
                }
            return this;
        };

        p.usesFrames = function () {
            var tl = this._timeline;
            while (tl._timeline) {
                tl = tl._timeline;
            }
            return (tl === Animation._rootFramesTimeline);
        };

        p.rawTime = function () {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale;
        };

        return TimelineLite;

    }, true);









    /*
     * ----------------------------------------------------------------
     * TimelineMax
     * ----------------------------------------------------------------
     */
    _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (TimelineLite, TweenLite, Ease) {

        var TimelineMax = function (vars) {
                TimelineLite.call(this, vars);
                this._repeat = this.vars.repeat || 0;
                this._repeatDelay = this.vars.repeatDelay || 0;
                this._cycle = 0;
                this._yoyo = (this.vars.yoyo === true);
                this._dirty = true;
            },
            _tinyNum = 0.0000000001,
            _blankArray = [],
            TweenLiteInternals = TweenLite._internals,
            _lazyTweens = TweenLiteInternals.lazyTweens,
            _lazyRender = TweenLiteInternals.lazyRender,
            _easeNone = new Ease(null, null, 1, 0),
            p = TimelineMax.prototype = new TimelineLite();

        p.constructor = TimelineMax;
        p.kill()._gc = false;
        TimelineMax.version = "1.13.1";

        p.invalidate = function () {
            this._yoyo = (this.vars.yoyo === true);
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._uncache(true);
            return TimelineLite.prototype.invalidate.call(this);
        };

        p.addCallback = function (callback, position, params, scope) {
            return this.add(TweenLite.delayedCall(0, callback, params, scope), position);
        };

        p.removeCallback = function (callback, position) {
            if (callback) {
                if (position == null) {
                    this._kill(null, callback);
                } else {
                    var a = this.getTweensOf(callback, false),
                        i = a.length,
                        time = this._parseTimeOrLabel(position);
                    while (--i > -1) {
                        if (a[i]._startTime === time) {
                            a[i]._enabled(false, false);
                        }
                    }
                }
            }
            return this;
        };

        p.tweenTo = function (position, vars) {
            vars = vars || {};
            var copy = {
                    ease: _easeNone,
                    overwrite: (vars.delay ? 2 : 1),
                    useFrames: this.usesFrames(),
                    immediateRender: false
                }, //note: set overwrite to 1 (true/all) by default unless there's a delay so that we avoid a racing situation that could happen if, for example, an onmousemove creates the same tweenTo() over and over again.
                duration, p, t;
            for (p in vars) {
                copy[p] = vars[p];
            }
            copy.time = this._parseTimeOrLabel(position);
            duration = (Math.abs(Number(copy.time) - this._time) / this._timeScale) || 0.001;
            t = new TweenLite(this, duration, copy);
            copy.onStart = function () {
                t.target.paused(true);
                if (t.vars.time !== t.target.time() && duration === t.duration()) { //don't make the duration zero - if it's supposed to be zero, don't worry because it's already initting the tween and will complete immediately, effectively making the duration zero anyway. If we make duration zero, the tween won't run at all.
                    t.duration(Math.abs(t.vars.time - t.target.time()) / t.target._timeScale);
                }
                if (vars.onStart) { //in case the user had an onStart in the vars - we don't want to overwrite it.
                    vars.onStart.apply(vars.onStartScope || t, vars.onStartParams || _blankArray);
                }
            };
            return t;
        };

        p.tweenFromTo = function (fromPosition, toPosition, vars) {
            vars = vars || {};
            fromPosition = this._parseTimeOrLabel(fromPosition);
            vars.startAt = {
                onComplete: this.seek,
                onCompleteParams: [fromPosition],
                onCompleteScope: this
            };
            vars.immediateRender = (vars.immediateRender !== false);
            var t = this.tweenTo(toPosition, vars);
            return t.duration((Math.abs(t.vars.time - fromPosition) / this._timeScale) || 0.001);
        };

        p.render = function (time, suppressEvents, force) {
            if (this._gc) {
                this._enabled(true, false);
            }
            var totalDur = (!this._dirty) ? this._totalDuration : this.totalDuration(),
                dur = this._duration,
                prevTime = this._time,
                prevTotalTime = this._totalTime,
                prevStart = this._startTime,
                prevTimeScale = this._timeScale,
                prevRawPrevTime = this._rawPrevTime,
                prevPaused = this._paused,
                prevCycle = this._cycle,
                tween, isComplete, next, callback, internalForce, cycleDuration;
            if (time >= totalDur) {
                if (!this._locked) {
                    this._totalTime = totalDur;
                    this._cycle = this._repeat;
                }
                if (!this._reversed)
                    if (!this._hasPausedChild()) {
                        isComplete = true;
                        callback = "onComplete";
                        if (this._duration === 0)
                            if (time === 0 || prevRawPrevTime < 0 || prevRawPrevTime === _tinyNum)
                                if (prevRawPrevTime !== time && this._first) {
                                    internalForce = true;
                                    if (prevRawPrevTime > _tinyNum) {
                                        callback = "onReverseComplete";
                                    }
                                }
                    }
                this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
                if (this._yoyo && (this._cycle & 1) !== 0) {
                    this._time = time = 0;
                } else {
                    this._time = dur;
                    time = dur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7. We cannot do less then 0.0001 because the same issue can occur when the duration is extremely large like 999999999999 in which case adding 0.00000001, for example, causes it to act like nothing was added.
                }

            } else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
                if (!this._locked) {
                    this._totalTime = this._cycle = 0;
                }
                this._time = 0;
                if (prevTime !== 0 || (dur === 0 && prevRawPrevTime !== _tinyNum && (prevRawPrevTime > 0 || (time < 0 && prevRawPrevTime >= 0)) && !this._locked)) { //edge case for checking time < 0 && prevRawPrevTime >= 0: a zero-duration fromTo() tween inside a zero-duration timeline (yeah, very rare)
                    callback = "onReverseComplete";
                    isComplete = this._reversed;
                }
                if (time < 0) {
                    this._active = false;
                    if (prevRawPrevTime >= 0 && this._first) { //when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
                        internalForce = true;
                    }
                    this._rawPrevTime = time;
                } else {
                    this._rawPrevTime = (dur || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
                    time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
                    if (!this._initted) {
                        internalForce = true;
                    }
                }

            } else {
                if (dur === 0 && prevRawPrevTime < 0) { //without this, zero-duration repeating timelines (like with a simple callback nested at the very beginning and a repeatDelay) wouldn't render the first time through.
                    internalForce = true;
                }
                this._time = this._rawPrevTime = time;
                if (!this._locked) {
                    this._totalTime = time;
                    if (this._repeat !== 0) {
                        cycleDuration = dur + this._repeatDelay;
                        this._cycle = (this._totalTime / cycleDuration) >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but it gets reported as 0.79999999!)
                        if (this._cycle !== 0)
                            if (this._cycle === this._totalTime / cycleDuration) {
                                this._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
                            }
                        this._time = this._totalTime - (this._cycle * cycleDuration);
                        if (this._yoyo)
                            if ((this._cycle & 1) !== 0) {
                                this._time = dur - this._time;
                            }
                        if (this._time > dur) {
                            this._time = dur;
                            time = dur + 0.0001; //to avoid occasional floating point rounding error
                        } else if (this._time < 0) {
                            this._time = time = 0;
                        } else {
                            time = this._time;
                        }
                    }
                }
            }

            if (this._cycle !== prevCycle)
                if (!this._locked) {
                    /*
                    make sure children at the end/beginning of the timeline are rendered properly. If, for example,
                    a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
                    would get transated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
                    could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
                    we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
                    ensure that zero-duration tweens at the very beginning or end of the TimelineMax work.
                    */
                    var backwards = (this._yoyo && (prevCycle & 1) !== 0),
                        wrap = (backwards === (this._yoyo && (this._cycle & 1) !== 0)),
                        recTotalTime = this._totalTime,
                        recCycle = this._cycle,
                        recRawPrevTime = this._rawPrevTime,
                        recTime = this._time;

                    this._totalTime = prevCycle * dur;
                    if (this._cycle < prevCycle) {
                        backwards = !backwards;
                    } else {
                        this._totalTime += dur;
                    }
                    this._time = prevTime; //temporarily revert _time so that render() renders the children in the correct order. Without this, tweens won't rewind correctly. We could arhictect things in a "cleaner" way by splitting out the rendering queue into a separate method but for performance reasons, we kept it all inside this method.

                    this._rawPrevTime = (dur === 0) ? prevRawPrevTime - 0.0001 : prevRawPrevTime;
                    this._cycle = prevCycle;
                    this._locked = true; //prevents changes to totalTime and skips repeat/yoyo behavior when we recursively call render()
                    prevTime = (backwards) ? 0 : dur;
                    this.render(prevTime, suppressEvents, (dur === 0));
                    if (!suppressEvents)
                        if (!this._gc) {
                            if (this.vars.onRepeat) {
                                this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || _blankArray);
                            }
                        }
                    if (wrap) {
                        prevTime = (backwards) ? dur + 0.0001 : -0.0001;
                        this.render(prevTime, true, false);
                    }
                    this._locked = false;
                    if (this._paused && !prevPaused) { //if the render() triggered callback that paused this timeline, we should abort (very rare, but possible)
                        return;
                    }
                    this._time = recTime;
                    this._totalTime = recTotalTime;
                    this._cycle = recCycle;
                    this._rawPrevTime = recRawPrevTime;
                }

            if ((this._time === prevTime || !this._first) && !force && !internalForce) {
                if (prevTotalTime !== this._totalTime)
                    if (this._onUpdate)
                        if (!suppressEvents) { //so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
                            this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _blankArray);
                        }
                return;
            } else if (!this._initted) {
                this._initted = true;
            }

            if (!this._active)
                if (!this._paused && this._totalTime !== prevTotalTime && time > 0) {
                    this._active = true; //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
                }

            if (prevTotalTime === 0)
                if (this.vars.onStart)
                    if (this._totalTime !== 0)
                        if (!suppressEvents) {
                            this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _blankArray);
                        }

            if (this._time >= prevTime) {
                tween = this._first;
                while (tween) {
                    next = tween._next; //record it here because the value could change after rendering...
                    if (this._paused && !prevPaused) { //in case a tween pauses the timeline when rendering
                        break;
                    } else if (tween._active || (tween._startTime <= this._time && !tween._paused && !tween._gc)) {
                        if (!tween._reversed) {
                            tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
                        } else {
                            tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
                        }

                    }
                    tween = next;
                }
            } else {
                tween = this._last;
                while (tween) {
                    next = tween._prev; //record it here because the value could change after rendering...
                    if (this._paused && !prevPaused) { //in case a tween pauses the timeline when rendering
                        break;
                    } else if (tween._active || (tween._startTime <= prevTime && !tween._paused && !tween._gc)) {
                        if (!tween._reversed) {
                            tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
                        } else {
                            tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
                        }
                    }
                    tween = next;
                }
            }

            if (this._onUpdate)
                if (!suppressEvents) {
                    if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
                        _lazyRender();
                    }
                    this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _blankArray);
                }
            if (callback)
                if (!this._locked)
                    if (!this._gc)
                        if (prevStart === this._startTime || prevTimeScale !== this._timeScale)
                            if (this._time === 0 || totalDur >= this.totalDuration()) { //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
                                if (isComplete) {
                                    if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
                                        _lazyRender();
                                    }
                                    if (this._timeline.autoRemoveChildren) {
                                        this._enabled(false, false);
                                    }
                                    this._active = false;
                                }
                                if (!suppressEvents && this.vars[callback]) {
                                    this.vars[callback].apply(this.vars[callback + "Scope"] || this, this.vars[callback + "Params"] || _blankArray);
                                }
                            }
        };

        p.getActive = function (nested, tweens, timelines) {
            if (nested == null) {
                nested = true;
            }
            if (tweens == null) {
                tweens = true;
            }
            if (timelines == null) {
                timelines = false;
            }
            var a = [],
                all = this.getChildren(nested, tweens, timelines),
                cnt = 0,
                l = all.length,
                i, tween;
            for (i = 0; i < l; i++) {
                tween = all[i];
                if (tween.isActive()) {
                    a[cnt++] = tween;
                }
            }
            return a;
        };


        p.getLabelAfter = function (time) {
            if (!time)
                if (time !== 0) { //faster than isNan()
                    time = this._time;
                }
            var labels = this.getLabelsArray(),
                l = labels.length,
                i;
            for (i = 0; i < l; i++) {
                if (labels[i].time > time) {
                    return labels[i].name;
                }
            }
            return null;
        };

        p.getLabelBefore = function (time) {
            if (time == null) {
                time = this._time;
            }
            var labels = this.getLabelsArray(),
                i = labels.length;
            while (--i > -1) {
                if (labels[i].time < time) {
                    return labels[i].name;
                }
            }
            return null;
        };

        p.getLabelsArray = function () {
            var a = [],
                cnt = 0,
                p;
            for (p in this._labels) {
                a[cnt++] = {
                    time: this._labels[p],
                    name: p
                };
            }
            a.sort(function (a, b) {
                return a.time - b.time;
            });
            return a;
        };


        //---- GETTERS / SETTERS -------------------------------------------------------------------------------------------------------

        p.progress = function (value) {
            return (!arguments.length) ? this._time / this.duration() : this.totalTime(this.duration() * ((this._yoyo && (this._cycle & 1) !== 0) ? 1 - value : value) + (this._cycle * (this._duration + this._repeatDelay)), false);
        };

        p.totalProgress = function (value) {
            return (!arguments.length) ? this._totalTime / this.totalDuration() : this.totalTime(this.totalDuration() * value, false);
        };

        p.totalDuration = function (value) {
            if (!arguments.length) {
                if (this._dirty) {
                    TimelineLite.prototype.totalDuration.call(this); //just forces refresh
                    //Instead of Infinity, we use 999999999999 so that we can accommodate reverses.
                    this._totalDuration = (this._repeat === -1) ? 999999999999 : this._duration * (this._repeat + 1) + (this._repeatDelay * this._repeat);
                }
                return this._totalDuration;
            }
            return (this._repeat === -1) ? this : this.duration((value - (this._repeat * this._repeatDelay)) / (this._repeat + 1));
        };

        p.time = function (value, suppressEvents) {
            if (!arguments.length) {
                return this._time;
            }
            if (this._dirty) {
                this.totalDuration();
            }
            if (value > this._duration) {
                value = this._duration;
            }
            if (this._yoyo && (this._cycle & 1) !== 0) {
                value = (this._duration - value) + (this._cycle * (this._duration + this._repeatDelay));
            } else if (this._repeat !== 0) {
                value += this._cycle * (this._duration + this._repeatDelay);
            }
            return this.totalTime(value, suppressEvents);
        };

        p.repeat = function (value) {
            if (!arguments.length) {
                return this._repeat;
            }
            this._repeat = value;
            return this._uncache(true);
        };

        p.repeatDelay = function (value) {
            if (!arguments.length) {
                return this._repeatDelay;
            }
            this._repeatDelay = value;
            return this._uncache(true);
        };

        p.yoyo = function (value) {
            if (!arguments.length) {
                return this._yoyo;
            }
            this._yoyo = value;
            return this;
        };

        p.currentLabel = function (value) {
            if (!arguments.length) {
                return this.getLabelBefore(this._time + 0.00000001);
            }
            return this.seek(value, true);
        };

        return TimelineMax;

    }, true);









    /*
     * ----------------------------------------------------------------
     * BezierPlugin
     * ----------------------------------------------------------------
     */
    (function () {

        var _RAD2DEG = 180 / Math.PI,
            _r1 = [],
            _r2 = [],
            _r3 = [],
            _corProps = {},
            Segment = function (a, b, c, d) {
                this.a = a;
                this.b = b;
                this.c = c;
                this.d = d;
                this.da = d - a;
                this.ca = c - a;
                this.ba = b - a;
            },
            _correlate = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
            cubicToQuadratic = function (a, b, c, d) {
                var q1 = {
                        a: a
                    },
                    q2 = {},
                    q3 = {},
                    q4 = {
                        c: d
                    },
                    mab = (a + b) / 2,
                    mbc = (b + c) / 2,
                    mcd = (c + d) / 2,
                    mabc = (mab + mbc) / 2,
                    mbcd = (mbc + mcd) / 2,
                    m8 = (mbcd - mabc) / 8;
                q1.b = mab + (a - mab) / 4;
                q2.b = mabc + m8;
                q1.c = q2.a = (q1.b + q2.b) / 2;
                q2.c = q3.a = (mabc + mbcd) / 2;
                q3.b = mbcd - m8;
                q4.b = mcd + (d - mcd) / 4;
                q3.c = q4.a = (q3.b + q4.b) / 2;
                return [q1, q2, q3, q4];
            },
            _calculateControlPoints = function (a, curviness, quad, basic, correlate) {
                var l = a.length - 1,
                    ii = 0,
                    cp1 = a[0].a,
                    i, p1, p2, p3, seg, m1, m2, mm, cp2, qb, r1, r2, tl;
                for (i = 0; i < l; i++) {
                    seg = a[ii];
                    p1 = seg.a;
                    p2 = seg.d;
                    p3 = a[ii + 1].d;

                    if (correlate) {
                        r1 = _r1[i];
                        r2 = _r2[i];
                        tl = ((r2 + r1) * curviness * 0.25) / (basic ? 0.5 : _r3[i] || 0.5);
                        m1 = p2 - (p2 - p1) * (basic ? curviness * 0.5 : (r1 !== 0 ? tl / r1 : 0));
                        m2 = p2 + (p3 - p2) * (basic ? curviness * 0.5 : (r2 !== 0 ? tl / r2 : 0));
                        mm = p2 - (m1 + (((m2 - m1) * ((r1 * 3 / (r1 + r2)) + 0.5) / 4) || 0));
                    } else {
                        m1 = p2 - (p2 - p1) * curviness * 0.5;
                        m2 = p2 + (p3 - p2) * curviness * 0.5;
                        mm = p2 - (m1 + m2) / 2;
                    }
                    m1 += mm;
                    m2 += mm;

                    seg.c = cp2 = m1;
                    if (i !== 0) {
                        seg.b = cp1;
                    } else {
                        seg.b = cp1 = seg.a + (seg.c - seg.a) * 0.6; //instead of placing b on a exactly, we move it inline with c so that if the user specifies an ease like Back.easeIn or Elastic.easeIn which goes BEYOND the beginning, it will do so smoothly.
                    }

                    seg.da = p2 - p1;
                    seg.ca = cp2 - p1;
                    seg.ba = cp1 - p1;

                    if (quad) {
                        qb = cubicToQuadratic(p1, cp1, cp2, p2);
                        a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
                        ii += 4;
                    } else {
                        ii++;
                    }

                    cp1 = m2;
                }
                seg = a[ii];
                seg.b = cp1;
                seg.c = cp1 + (seg.d - cp1) * 0.4; //instead of placing c on d exactly, we move it inline with b so that if the user specifies an ease like Back.easeOut or Elastic.easeOut which goes BEYOND the end, it will do so smoothly.
                seg.da = seg.d - seg.a;
                seg.ca = seg.c - seg.a;
                seg.ba = cp1 - seg.a;
                if (quad) {
                    qb = cubicToQuadratic(seg.a, cp1, seg.c, seg.d);
                    a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
                }
            },
            _parseAnchors = function (values, p, correlate, prepend) {
                var a = [],
                    l, i, p1, p2, p3, tmp;
                if (prepend) {
                    values = [prepend].concat(values);
                    i = values.length;
                    while (--i > -1) {
                        if (typeof ((tmp = values[i][p])) === "string")
                            if (tmp.charAt(1) === "=") {
                                values[i][p] = prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)); //accommodate relative values. Do it inline instead of breaking it out into a function for speed reasons
                            }
                    }
                }
                l = values.length - 2;
                if (l < 0) {
                    a[0] = new Segment(values[0][p], 0, 0, values[(l < -1) ? 0 : 1][p]);
                    return a;
                }
                for (i = 0; i < l; i++) {
                    p1 = values[i][p];
                    p2 = values[i + 1][p];
                    a[i] = new Segment(p1, 0, 0, p2);
                    if (correlate) {
                        p3 = values[i + 2][p];
                        _r1[i] = (_r1[i] || 0) + (p2 - p1) * (p2 - p1);
                        _r2[i] = (_r2[i] || 0) + (p3 - p2) * (p3 - p2);
                    }
                }
                a[i] = new Segment(values[i][p], 0, 0, values[i + 1][p]);
                return a;
            },
            bezierThrough = function (values, curviness, quadratic, basic, correlate, prepend) {
                var obj = {},
                    props = [],
                    first = prepend || values[0],
                    i, p, a, j, r, l, seamless, last;
                correlate = (typeof (correlate) === "string") ? "," + correlate + "," : _correlate;
                if (curviness == null) {
                    curviness = 1;
                }
                for (p in values[0]) {
                    props.push(p);
                }
                //check to see if the last and first values are identical (well, within 0.05). If so, make seamless by appending the second element to the very end of the values array and the 2nd-to-last element to the very beginning (we'll remove those segments later)
                if (values.length > 1) {
                    last = values[values.length - 1];
                    seamless = true;
                    i = props.length;
                    while (--i > -1) {
                        p = props[i];
                        if (Math.abs(first[p] - last[p]) > 0.05) { //build in a tolerance of +/-0.05 to accommodate rounding errors. For example, if you set an object's position to 4.945, Flash will make it 4.9
                            seamless = false;
                            break;
                        }
                    }
                    if (seamless) {
                        values = values.concat(); //duplicate the array to avoid contaminating the original which the user may be reusing for other tweens
                        if (prepend) {
                            values.unshift(prepend);
                        }
                        values.push(values[1]);
                        prepend = values[values.length - 3];
                    }
                }
                _r1.length = _r2.length = _r3.length = 0;
                i = props.length;
                while (--i > -1) {
                    p = props[i];
                    _corProps[p] = (correlate.indexOf("," + p + ",") !== -1);
                    obj[p] = _parseAnchors(values, p, _corProps[p], prepend);
                }
                i = _r1.length;
                while (--i > -1) {
                    _r1[i] = Math.sqrt(_r1[i]);
                    _r2[i] = Math.sqrt(_r2[i]);
                }
                if (!basic) {
                    i = props.length;
                    while (--i > -1) {
                        if (_corProps[p]) {
                            a = obj[props[i]];
                            l = a.length - 1;
                            for (j = 0; j < l; j++) {
                                r = a[j + 1].da / _r2[j] + a[j].da / _r1[j];
                                _r3[j] = (_r3[j] || 0) + r * r;
                            }
                        }
                    }
                    i = _r3.length;
                    while (--i > -1) {
                        _r3[i] = Math.sqrt(_r3[i]);
                    }
                }
                i = props.length;
                j = quadratic ? 4 : 1;
                while (--i > -1) {
                    p = props[i];
                    a = obj[p];
                    _calculateControlPoints(a, curviness, quadratic, basic, _corProps[p]); //this method requires that _parseAnchors() and _setSegmentRatios() ran first so that _r1, _r2, and _r3 values are populated for all properties
                    if (seamless) {
                        a.splice(0, j);
                        a.splice(a.length - j, j);
                    }
                }
                return obj;
            },
            _parseBezierData = function (values, type, prepend) {
                type = type || "soft";
                var obj = {},
                    inc = (type === "cubic") ? 3 : 2,
                    soft = (type === "soft"),
                    props = [],
                    a, b, c, d, cur, i, j, l, p, cnt, tmp;
                if (soft && prepend) {
                    values = [prepend].concat(values);
                }
                if (values == null || values.length < inc + 1) {
                    throw "invalid Bezier data";
                }
                for (p in values[0]) {
                    props.push(p);
                }
                i = props.length;
                while (--i > -1) {
                    p = props[i];
                    obj[p] = cur = [];
                    cnt = 0;
                    l = values.length;
                    for (j = 0; j < l; j++) {
                        a = (prepend == null) ? values[j][p] : (typeof ((tmp = values[j][p])) === "string" && tmp.charAt(1) === "=") ? prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)) : Number(tmp);
                        if (soft)
                            if (j > 1)
                                if (j < l - 1) {
                                    cur[cnt++] = (a + cur[cnt - 2]) / 2;
                                }
                        cur[cnt++] = a;
                    }
                    l = cnt - inc + 1;
                    cnt = 0;
                    for (j = 0; j < l; j += inc) {
                        a = cur[j];
                        b = cur[j + 1];
                        c = cur[j + 2];
                        d = (inc === 2) ? 0 : cur[j + 3];
                        cur[cnt++] = tmp = (inc === 3) ? new Segment(a, b, c, d) : new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
                    }
                    cur.length = cnt;
                }
                return obj;
            },
            _addCubicLengths = function (a, steps, resolution) {
                var inc = 1 / resolution,
                    j = a.length,
                    d, d1, s, da, ca, ba, p, i, inv, bez, index;
                while (--j > -1) {
                    bez = a[j];
                    s = bez.a;
                    da = bez.d - s;
                    ca = bez.c - s;
                    ba = bez.b - s;
                    d = d1 = 0;
                    for (i = 1; i <= resolution; i++) {
                        p = inc * i;
                        inv = 1 - p;
                        d = d1 - (d1 = (p * p * da + 3 * inv * (p * ca + inv * ba)) * p);
                        index = j * resolution + i - 1;
                        steps[index] = (steps[index] || 0) + d * d;
                    }
                }
            },
            _parseLengthData = function (obj, resolution) {
                resolution = resolution >> 0 || 6;
                var a = [],
                    lengths = [],
                    d = 0,
                    total = 0,
                    threshold = resolution - 1,
                    segments = [],
                    curLS = [], //current length segments array
                    p, i, l, index;
                for (p in obj) {
                    _addCubicLengths(obj[p], a, resolution);
                }
                l = a.length;
                for (i = 0; i < l; i++) {
                    d += Math.sqrt(a[i]);
                    index = i % resolution;
                    curLS[index] = d;
                    if (index === threshold) {
                        total += d;
                        index = (i / resolution) >> 0;
                        segments[index] = curLS;
                        lengths[index] = total;
                        d = 0;
                        curLS = [];
                    }
                }
                return {
                    length: total,
                    lengths: lengths,
                    segments: segments
                };
            },



            BezierPlugin = _gsScope._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.3",
                API: 2,
                global: true,

                //gets called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
                init: function (target, vars, tween) {
                    this._target = target;
                    if (vars instanceof Array) {
                        vars = {
                            values: vars
                        };
                    }
                    this._func = {};
                    this._round = {};
                    this._props = [];
                    this._timeRes = (vars.timeResolution == null) ? 6 : parseInt(vars.timeResolution, 10);
                    var values = vars.values || [],
                        first = {},
                        second = values[0],
                        autoRotate = vars.autoRotate || tween.vars.orientToBezier,
                        p, isFunc, i, j, prepend;

                    this._autoRotate = autoRotate ? (autoRotate instanceof Array) ? autoRotate : [["x", "y", "rotation", ((autoRotate === true) ? 0 : Number(autoRotate) || 0)]] : null;
                    for (p in second) {
                        this._props.push(p);
                    }

                    i = this._props.length;
                    while (--i > -1) {
                        p = this._props[i];

                        this._overwriteProps.push(p);
                        isFunc = this._func[p] = (typeof (target[p]) === "function");
                        first[p] = (!isFunc) ? parseFloat(target[p]) : target[((p.indexOf("set") || typeof (target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3))]();
                        if (!prepend)
                            if (first[p] !== values[0][p]) {
                                prepend = first;
                            }
                    }
                    this._beziers = (vars.type !== "cubic" && vars.type !== "quadratic" && vars.type !== "soft") ? bezierThrough(values, isNaN(vars.curviness) ? 1 : vars.curviness, false, (vars.type === "thruBasic"), vars.correlate, prepend) : _parseBezierData(values, vars.type, first);
                    this._segCount = this._beziers[p].length;

                    if (this._timeRes) {
                        var ld = _parseLengthData(this._beziers, this._timeRes);
                        this._length = ld.length;
                        this._lengths = ld.lengths;
                        this._segments = ld.segments;
                        this._l1 = this._li = this._s1 = this._si = 0;
                        this._l2 = this._lengths[0];
                        this._curSeg = this._segments[0];
                        this._s2 = this._curSeg[0];
                        this._prec = 1 / this._curSeg.length;
                    }

                    if ((autoRotate = this._autoRotate)) {
                        this._initialRotations = [];
                        if (!(autoRotate[0] instanceof Array)) {
                            this._autoRotate = autoRotate = [autoRotate];
                        }
                        i = autoRotate.length;
                        while (--i > -1) {
                            for (j = 0; j < 3; j++) {
                                p = autoRotate[i][j];
                                this._func[p] = (typeof (target[p]) === "function") ? target[((p.indexOf("set") || typeof (target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3))] : false;
                            }
                            p = autoRotate[i][2];
                            this._initialRotations[i] = this._func[p] ? this._func[p].call(this._target) : this._target[p];
                        }
                    }
                    this._startRatio = tween.vars.runBackwards ? 1 : 0; //we determine the starting ratio when the tween inits which is always 0 unless the tween has runBackwards:true (indicating it's a from() tween) in which case it's 1.
                    return true;
                },

                //called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
                set: function (v) {
                    var segments = this._segCount,
                        func = this._func,
                        target = this._target,
                        notStart = (v !== this._startRatio),
                        curIndex, inv, i, p, b, t, val, l, lengths, curSeg;
                    if (!this._timeRes) {
                        curIndex = (v < 0) ? 0 : (v >= 1) ? segments - 1 : (segments * v) >> 0;
                        t = (v - (curIndex * (1 / segments))) * segments;
                    } else {
                        lengths = this._lengths;
                        curSeg = this._curSeg;
                        v *= this._length;
                        i = this._li;
                        //find the appropriate segment (if the currently cached one isn't correct)
                        if (v > this._l2 && i < segments - 1) {
                            l = segments - 1;
                            while (i < l && (this._l2 = lengths[++i]) <= v) {}
                            this._l1 = lengths[i - 1];
                            this._li = i;
                            this._curSeg = curSeg = this._segments[i];
                            this._s2 = curSeg[(this._s1 = this._si = 0)];
                        } else if (v < this._l1 && i > 0) {
                            while (i > 0 && (this._l1 = lengths[--i]) >= v) {}
                            if (i === 0 && v < this._l1) {
                                this._l1 = 0;
                            } else {
                                i++;
                            }
                            this._l2 = lengths[i];
                            this._li = i;
                            this._curSeg = curSeg = this._segments[i];
                            this._s1 = curSeg[(this._si = curSeg.length - 1) - 1] || 0;
                            this._s2 = curSeg[this._si];
                        }
                        curIndex = i;
                        //now find the appropriate sub-segment (we split it into the number of pieces that was defined by "precision" and measured each one)
                        v -= this._l1;
                        i = this._si;
                        if (v > this._s2 && i < curSeg.length - 1) {
                            l = curSeg.length - 1;
                            while (i < l && (this._s2 = curSeg[++i]) <= v) {}
                            this._s1 = curSeg[i - 1];
                            this._si = i;
                        } else if (v < this._s1 && i > 0) {
                            while (i > 0 && (this._s1 = curSeg[--i]) >= v) {}
                            if (i === 0 && v < this._s1) {
                                this._s1 = 0;
                            } else {
                                i++;
                            }
                            this._s2 = curSeg[i];
                            this._si = i;
                        }
                        t = (i + (v - this._s1) / (this._s2 - this._s1)) * this._prec;
                    }
                    inv = 1 - t;

                    i = this._props.length;
                    while (--i > -1) {
                        p = this._props[i];
                        b = this._beziers[p][curIndex];
                        val = (t * t * b.da + 3 * inv * (t * b.ca + inv * b.ba)) * t + b.a;
                        if (this._round[p]) {
                            val = Math.round(val);
                        }
                        if (func[p]) {
                            target[p](val);
                        } else {
                            target[p] = val;
                        }
                    }

                    if (this._autoRotate) {
                        var ar = this._autoRotate,
                            b2, x1, y1, x2, y2, add, conv;
                        i = ar.length;
                        while (--i > -1) {
                            p = ar[i][2];
                            add = ar[i][3] || 0;
                            conv = (ar[i][4] === true) ? 1 : _RAD2DEG;
                            b = this._beziers[ar[i][0]];
                            b2 = this._beziers[ar[i][1]];

                            if (b && b2) { //in case one of the properties got overwritten.
                                b = b[curIndex];
                                b2 = b2[curIndex];

                                x1 = b.a + (b.b - b.a) * t;
                                x2 = b.b + (b.c - b.b) * t;
                                x1 += (x2 - x1) * t;
                                x2 += ((b.c + (b.d - b.c) * t) - x2) * t;

                                y1 = b2.a + (b2.b - b2.a) * t;
                                y2 = b2.b + (b2.c - b2.b) * t;
                                y1 += (y2 - y1) * t;
                                y2 += ((b2.c + (b2.d - b2.c) * t) - y2) * t;

                                val = notStart ? Math.atan2(y2 - y1, x2 - x1) * conv + add : this._initialRotations[i];

                                if (func[p]) {
                                    target[p](val);
                                } else {
                                    target[p] = val;
                                }
                            }
                        }
                    }
                }
            }),
            p = BezierPlugin.prototype;


        BezierPlugin.bezierThrough = bezierThrough;
        BezierPlugin.cubicToQuadratic = cubicToQuadratic;
        BezierPlugin._autoCSS = true; //indicates that this plugin can be inserted into the "css" object using the autoCSS feature of TweenLite
        BezierPlugin.quadraticToCubic = function (a, b, c) {
            return new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
        };

        BezierPlugin._cssRegister = function () {
            var CSSPlugin = _gsScope._gsDefine.globals.CSSPlugin;
            if (!CSSPlugin) {
                return;
            }
            var _internals = CSSPlugin._internals,
                _parseToProxy = _internals._parseToProxy,
                _setPluginRatio = _internals._setPluginRatio,
                CSSPropTween = _internals.CSSPropTween;
            _internals._registerComplexSpecialProp("bezier", {
                parser: function (t, e, prop, cssp, pt, plugin) {
                    if (e instanceof Array) {
                        e = {
                            values: e
                        };
                    }
                    plugin = new BezierPlugin();
                    var values = e.values,
                        l = values.length - 1,
                        pluginValues = [],
                        v = {},
                        i, p, data;
                    if (l < 0) {
                        return pt;
                    }
                    for (i = 0; i <= l; i++) {
                        data = _parseToProxy(t, values[i], cssp, pt, plugin, (l !== i));
                        pluginValues[i] = data.end;
                    }
                    for (p in e) {
                        v[p] = e[p]; //duplicate the vars object because we need to alter some things which would cause problems if the user plans to reuse the same vars object for another tween.
                    }
                    v.values = pluginValues;
                    pt = new CSSPropTween(t, "bezier", 0, 0, data.pt, 2);
                    pt.data = data;
                    pt.plugin = plugin;
                    pt.setRatio = _setPluginRatio;
                    if (v.autoRotate === 0) {
                        v.autoRotate = true;
                    }
                    if (v.autoRotate && !(v.autoRotate instanceof Array)) {
                        i = (v.autoRotate === true) ? 0 : Number(v.autoRotate);
                        v.autoRotate = (data.end.left != null) ? [["left", "top", "rotation", i, false]] : (data.end.x != null) ? [["x", "y", "rotation", i, false]] : false;
                    }
                    if (v.autoRotate) {
                        if (!cssp._transform) {
                            cssp._enableTransforms(false);
                        }
                        data.autoRotate = cssp._target._gsTransform;
                    }
                    plugin._onInitTween(data.proxy, v, cssp._tween);
                    return pt;
                }
            });
        };

        p._roundProps = function (lookup, value) {
            var op = this._overwriteProps,
                i = op.length;
            while (--i > -1) {
                if (lookup[op[i]] || lookup.bezier || lookup.bezierThrough) {
                    this._round[op[i]] = value;
                }
            }
        };

        p._kill = function (lookup) {
            var a = this._props,
                p, i;
            for (p in this._beziers) {
                if (p in lookup) {
                    delete this._beziers[p];
                    delete this._func[p];
                    i = a.length;
                    while (--i > -1) {
                        if (a[i] === p) {
                            a.splice(i, 1);
                        }
                    }
                }
            }
            return this._super._kill.call(this, lookup);
        };

    }());









    /*
     * ----------------------------------------------------------------
     * CSSPlugin
     * ----------------------------------------------------------------
     */
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (TweenPlugin, TweenLite) {

        /** @constructor **/
        var CSSPlugin = function () {
                TweenPlugin.call(this, "css");
                this._overwriteProps.length = 0;
                this.setRatio = CSSPlugin.prototype.setRatio; //speed optimization (avoid prototype lookup on this "hot" method)
            },
            _hasPriority, //turns true whenever a CSSPropTween instance is created that has a priority other than 0. This helps us discern whether or not we should spend the time organizing the linked list or not after a CSSPlugin's _onInitTween() method is called.
            _suffixMap, //we set this in _onInitTween() each time as a way to have a persistent variable we can use in other methods like _parse() without having to pass it around as a parameter and we keep _parse() decoupled from a particular CSSPlugin instance
            _cs, //computed style (we store this in a shared variable to conserve memory and make minification tighter
            _overwriteProps, //alias to the currently instantiating CSSPlugin's _overwriteProps array. We use this closure in order to avoid having to pass a reference around from method to method and aid in minification.
            _specialProps = {},
            p = CSSPlugin.prototype = new TweenPlugin("css");

        p.constructor = CSSPlugin;
        CSSPlugin.version = "1.13.1";
        CSSPlugin.API = 2;
        CSSPlugin.defaultTransformPerspective = 0;
        CSSPlugin.defaultSkewType = "compensated";
        p = "px"; //we'll reuse the "p" variable to keep file size down
        CSSPlugin.suffixMap = {
            top: p,
            right: p,
            bottom: p,
            left: p,
            width: p,
            height: p,
            fontSize: p,
            padding: p,
            margin: p,
            perspective: p,
            lineHeight: ""
        };


        var _numExp = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
            _relNumExp = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            _valuesExp = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, //finds all the values that begin with numbers or += or -= and then a number. Includes suffixes. We use this to split complex values apart like "1px 5px 20px rgb(255,102,51)"
            _NaNExp = /[^\d\-\.]/g,
            _suffixExp = /(?:\d|\-|\+|=|#|\.)*/g,
            _opacityExp = /opacity *= *([^)]*)/i,
            _opacityValExp = /opacity:([^;]*)/i,
            _alphaFilterExp = /alpha\(opacity *=.+?\)/i,
            _rgbhslExp = /^(rgb|hsl)/,
            _capsExp = /([A-Z])/g,
            _camelExp = /-([a-z])/gi,
            _urlExp = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, //for pulling out urls from url(...) or url("...") strings (some browsers wrap urls in quotes, some don't when reporting things like backgroundImage)
            _camelFunc = function (s, g) {
                return g.toUpperCase();
            },
            _horizExp = /(?:Left|Right|Width)/i,
            _ieGetMatrixExp = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            _ieSetMatrixExp = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            _commasOutsideParenExp = /,(?=[^\)]*(?:\(|$))/gi, //finds any commas that are not within parenthesis
            _DEG2RAD = Math.PI / 180,
            _RAD2DEG = 180 / Math.PI,
            _forcePT = {},
            _doc = document,
            _tempDiv = _doc.createElement("div"),
            _tempImg = _doc.createElement("img"),
            _internals = CSSPlugin._internals = {
                _specialProps: _specialProps
            }, //provides a hook to a few internal methods that we need to access from inside other plugins
            _agent = navigator.userAgent,
            _autoRound,
            _reqSafariFix, //we won't apply the Safari transform fix until we actually come across a tween that affects a transform property (to maintain best performance).

            _isSafari,
            _isFirefox, //Firefox has a bug that causes 3D transformed elements to randomly disappear unless a repaint is forced after each update on each element.
            _isSafariLT6, //Safari (and Android 4 which uses a flavor of Safari) has a bug that prevents changes to "top" and "left" properties from rendering properly if changed on the same frame as a transform UNLESS we set the element's WebkitBackfaceVisibility to hidden (weird, I know). Doing this for Android 3 and earlier seems to actually cause other problems, though (fun!)
            _ieVers,
            _supportsOpacity = (function () { //we set _isSafari, _ieVers, _isFirefox, and _supportsOpacity all in one function here to reduce file size slightly, especially in the minified version.
                var i = _agent.indexOf("Android"),
                    d = _doc.createElement("div"),
                    a;

                _isSafari = (_agent.indexOf("Safari") !== -1 && _agent.indexOf("Chrome") === -1 && (i === -1 || Number(_agent.substr(i + 8, 1)) > 3));
                _isSafariLT6 = (_isSafari && (Number(_agent.substr(_agent.indexOf("Version/") + 8, 1)) < 6));
                _isFirefox = (_agent.indexOf("Firefox") !== -1);

                if ((/MSIE ([0-9]{1,}[\.0-9]{0,})/).exec(_agent)) {
                    _ieVers = parseFloat(RegExp.$1);
                }

                d.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>";
                a = d.getElementsByTagName("a")[0];
                return a ? /^0.55/.test(a.style.opacity) : false;
            }()),
            _getIEOpacity = function (v) {
                return (_opacityExp.test(((typeof (v) === "string") ? v : (v.currentStyle ? v.currentStyle.filter : v.style.filter) || "")) ? (parseFloat(RegExp.$1) / 100) : 1);
            },
            _log = function (s) { //for logging messages, but in a way that won't throw errors in old versions of IE.
                if (window.console) {
                    console.log(s);
                }
            },
            _prefixCSS = "", //the non-camelCase vendor prefix like "-o-", "-moz-", "-ms-", or "-webkit-"
            _prefix = "", //camelCase vendor prefix like "O", "ms", "Webkit", or "Moz".

            // @private feed in a camelCase property name like "transform" and it will check to see if it is valid as-is or if it needs a vendor prefix. It returns the corrected camelCase property name (i.e. "WebkitTransform" or "MozTransform" or "transform" or null if no such property is found, like if the browser is IE8 or before, "transform" won't be found at all)
            _checkPropPrefix = function (p, e) {
                e = e || _tempDiv;
                var s = e.style,
                    a, i;
                if (s[p] !== undefined) {
                    return p;
                }
                p = p.charAt(0).toUpperCase() + p.substr(1);
                a = ["O", "Moz", "ms", "Ms", "Webkit"];
                i = 5;
                while (--i > -1 && s[a[i] + p] === undefined) {}
                if (i >= 0) {
                    _prefix = (i === 3) ? "ms" : a[i];
                    _prefixCSS = "-" + _prefix.toLowerCase() + "-";
                    return _prefix + p;
                }
                return null;
            },

            _getComputedStyle = _doc.defaultView ? _doc.defaultView.getComputedStyle : function () {},

            /**
             * @private Returns the css style for a particular property of an element. For example, to get whatever the current "left" css value for an element with an ID of "myElement", you could do:
             * var currentLeft = CSSPlugin.getStyle( document.getElementById("myElement"), "left");
             *
             * @param {!Object} t Target element whose style property you want to query
             * @param {!string} p Property name (like "left" or "top" or "marginTop", etc.)
             * @param {Object=} cs Computed style object. This just provides a way to speed processing if you're going to get several properties on the same element in quick succession - you can reuse the result of the getComputedStyle() call.
             * @param {boolean=} calc If true, the value will not be read directly from the element's "style" property (if it exists there), but instead the getComputedStyle() result will be used. This can be useful when you want to ensure that the browser itself is interpreting the value.
             * @param {string=} dflt Default value that should be returned in the place of null, "none", "auto" or "auto auto".
             * @return {?string} The current property value
             */
            _getStyle = CSSPlugin.getStyle = function (t, p, cs, calc, dflt) {
                var rv;
                if (!_supportsOpacity)
                    if (p === "opacity") { //several versions of IE don't use the standard "opacity" property - they use things like filter:alpha(opacity=50), so we parse that here.
                        return _getIEOpacity(t);
                    }
                if (!calc && t.style[p]) {
                    rv = t.style[p];
                } else if ((cs = cs || _getComputedStyle(t))) {
                    rv = cs[p] || cs.getPropertyValue(p) || cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase());
                } else if (t.currentStyle) {
                    rv = t.currentStyle[p];
                }
                return (dflt != null && (!rv || rv === "none" || rv === "auto" || rv === "auto auto")) ? dflt : rv;
            },

            /**
             * @private Pass the target element, the property name, the numeric value, and the suffix (like "%", "em", "px", etc.) and it will spit back the equivalent pixel number.
             * @param {!Object} t Target element
             * @param {!string} p Property name (like "left", "top", "marginLeft", etc.)
             * @param {!number} v Value
             * @param {string=} sfx Suffix (like "px" or "%" or "em")
             * @param {boolean=} recurse If true, the call is a recursive one. In some browsers (like IE7/8), occasionally the value isn't accurately reported initially, but if we run the function again it will take effect.
             * @return {number} value in pixels
             */
            _convertToPixels = _internals.convertToPixels = function (t, p, v, sfx, recurse) {
                if (sfx === "px" || !sfx) {
                    return v;
                }
                if (sfx === "auto" || !v) {
                    return 0;
                }
                var horiz = _horizExp.test(p),
                    node = t,
                    style = _tempDiv.style,
                    neg = (v < 0),
                    pix, cache, time;
                if (neg) {
                    v = -v;
                }
                if (sfx === "%" && p.indexOf("border") !== -1) {
                    pix = (v / 100) * (horiz ? t.clientWidth : t.clientHeight);
                } else {
                    style.cssText = "border:0 solid red;position:" + _getStyle(t, "position") + ";line-height:0;";
                    if (sfx === "%" || !node.appendChild) {
                        node = t.parentNode || _doc.body;
                        cache = node._gsCache;
                        time = TweenLite.ticker.frame;
                        if (cache && horiz && cache.time === time) { //performance optimization: we record the width of elements along with the ticker frame so that we can quickly get it again on the same tick (seems relatively safe to assume it wouldn't change on the same tick)
                            return cache.width * v / 100;
                        }
                        style[(horiz ? "width" : "height")] = v + sfx;
                    } else {
                        style[(horiz ? "borderLeftWidth" : "borderTopWidth")] = v + sfx;
                    }
                    node.appendChild(_tempDiv);
                    pix = parseFloat(_tempDiv[(horiz ? "offsetWidth" : "offsetHeight")]);
                    node.removeChild(_tempDiv);
                    if (horiz && sfx === "%" && CSSPlugin.cacheWidths !== false) {
                        cache = node._gsCache = node._gsCache || {};
                        cache.time = time;
                        cache.width = pix / v * 100;
                    }
                    if (pix === 0 && !recurse) {
                        pix = _convertToPixels(t, p, v, sfx, true);
                    }
                }
                return neg ? -pix : pix;
            },
            _calculateOffset = _internals.calculateOffset = function (t, p, cs) { //for figuring out "top" or "left" in px when it's "auto". We need to factor in margin with the offsetLeft/offsetTop
                if (_getStyle(t, "position", cs) !== "absolute") {
                    return 0;
                }
                var dim = ((p === "left") ? "Left" : "Top"),
                    v = _getStyle(t, "margin" + dim, cs);
                return t["offset" + dim] - (_convertToPixels(t, p, parseFloat(v), v.replace(_suffixExp, "")) || 0);
            },

            // @private returns at object containing ALL of the style properties in camelCase and their associated values.
            _getAllStyles = function (t, cs) {
                var s = {},
                    i, tr;
                if ((cs = cs || _getComputedStyle(t, null))) {
                    if ((i = cs.length)) {
                        while (--i > -1) {
                            s[cs[i].replace(_camelExp, _camelFunc)] = cs.getPropertyValue(cs[i]);
                        }
                    } else { //Opera behaves differently - cs.length is always 0, so we must do a for...in loop.
                        for (i in cs) {
                            s[i] = cs[i];
                        }
                    }
                } else if ((cs = t.currentStyle || t.style)) {
                    for (i in cs) {
                        if (typeof (i) === "string" && s[i] === undefined) {
                            s[i.replace(_camelExp, _camelFunc)] = cs[i];
                        }
                    }
                }
                if (!_supportsOpacity) {
                    s.opacity = _getIEOpacity(t);
                }
                tr = _getTransform(t, cs, false);
                s.rotation = tr.rotation;
                s.skewX = tr.skewX;
                s.scaleX = tr.scaleX;
                s.scaleY = tr.scaleY;
                s.x = tr.x;
                s.y = tr.y;
                if (_supports3D) {
                    s.z = tr.z;
                    s.rotationX = tr.rotationX;
                    s.rotationY = tr.rotationY;
                    s.scaleZ = tr.scaleZ;
                }
                if (s.filters) {
                    delete s.filters;
                }
                return s;
            },

            // @private analyzes two style objects (as returned by _getAllStyles()) and only looks for differences between them that contain tweenable values (like a number or color). It returns an object with a "difs" property which refers to an object containing only those isolated properties and values for tweening, and a "firstMPT" property which refers to the first MiniPropTween instance in a linked list that recorded all the starting values of the different properties so that we can revert to them at the end or beginning of the tween - we don't want the cascading to get messed up. The forceLookup parameter is an optional generic object with properties that should be forced into the results - this is necessary for className tweens that are overwriting others because imagine a scenario where a rollover/rollout adds/removes a class and the user swipes the mouse over the target SUPER fast, thus nothing actually changed yet and the subsequent comparison of the properties would indicate they match (especially when px rounding is taken into consideration), thus no tweening is necessary even though it SHOULD tween and remove those properties after the tween (otherwise the inline styles will contaminate things). See the className SpecialProp code for details.
            _cssDif = function (t, s1, s2, vars, forceLookup) {
                var difs = {},
                    style = t.style,
                    val, p, mpt;
                for (p in s2) {
                    if (p !== "cssText")
                        if (p !== "length")
                            if (isNaN(p))
                                if (s1[p] !== (val = s2[p]) || (forceLookup && forceLookup[p]))
                                    if (p.indexOf("Origin") === -1)
                                        if (typeof (val) === "number" || typeof (val) === "string") {
                                            difs[p] = (val === "auto" && (p === "left" || p === "top")) ? _calculateOffset(t, p) : ((val === "" || val === "auto" || val === "none") && typeof (s1[p]) === "string" && s1[p].replace(_NaNExp, "") !== "") ? 0 : val; //if the ending value is defaulting ("" or "auto"), we check the starting value and if it can be parsed into a number (a string which could have a suffix too, like 700px), then we swap in 0 for "" or "auto" so that things actually tween.
                                            if (style[p] !== undefined) { //for className tweens, we must remember which properties already existed inline - the ones that didn't should be removed when the tween isn't in progress because they were only introduced to facilitate the transition between classes.
                                                mpt = new MiniPropTween(style, p, style[p], mpt);
                                            }
                                        }
                }
                if (vars) {
                    for (p in vars) { //copy properties (except className)
                        if (p !== "className") {
                            difs[p] = vars[p];
                        }
                    }
                }
                return {
                    difs: difs,
                    firstMPT: mpt
                };
            },
            _dimensions = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            },
            _margins = ["marginLeft", "marginRight", "marginTop", "marginBottom"],

            /**
             * @private Gets the width or height of an element
             * @param {!Object} t Target element
             * @param {!string} p Property name ("width" or "height")
             * @param {Object=} cs Computed style object (if one exists). Just a speed optimization.
             * @return {number} Dimension (in pixels)
             */
            _getDimension = function (t, p, cs) {
                var v = parseFloat((p === "width") ? t.offsetWidth : t.offsetHeight),
                    a = _dimensions[p],
                    i = a.length;
                cs = cs || _getComputedStyle(t, null);
                while (--i > -1) {
                    v -= parseFloat(_getStyle(t, "padding" + a[i], cs, true)) || 0;
                    v -= parseFloat(_getStyle(t, "border" + a[i] + "Width", cs, true)) || 0;
                }
                return v;
            },

            // @private Parses position-related complex strings like "top left" or "50px 10px" or "70% 20%", etc. which are used for things like transformOrigin or backgroundPosition. Optionally decorates a supplied object (recObj) with the following properties: "ox" (offsetX), "oy" (offsetY), "oxp" (if true, "ox" is a percentage not a pixel value), and "oxy" (if true, "oy" is a percentage not a pixel value)
            _parsePosition = function (v, recObj) {
                if (v == null || v === "" || v === "auto" || v === "auto auto") { //note: Firefox uses "auto auto" as default whereas Chrome uses "auto".
                    v = "0 0";
                }
                var a = v.split(" "),
                    x = (v.indexOf("left") !== -1) ? "0%" : (v.indexOf("right") !== -1) ? "100%" : a[0],
                    y = (v.indexOf("top") !== -1) ? "0%" : (v.indexOf("bottom") !== -1) ? "100%" : a[1];
                if (y == null) {
                    y = "0";
                } else if (y === "center") {
                    y = "50%";
                }
                if (x === "center" || (isNaN(parseFloat(x)) && (x + "").indexOf("=") === -1)) { //remember, the user could flip-flop the values and say "bottom center" or "center bottom", etc. "center" is ambiguous because it could be used to describe horizontal or vertical, hence the isNaN(). If there's an "=" sign in the value, it's relative.
                    x = "50%";
                }
                if (recObj) {
                    recObj.oxp = (x.indexOf("%") !== -1);
                    recObj.oyp = (y.indexOf("%") !== -1);
                    recObj.oxr = (x.charAt(1) === "=");
                    recObj.oyr = (y.charAt(1) === "=");
                    recObj.ox = parseFloat(x.replace(_NaNExp, ""));
                    recObj.oy = parseFloat(y.replace(_NaNExp, ""));
                }
                return x + " " + y + ((a.length > 2) ? " " + a[2] : "");
            },

            /**
             * @private Takes an ending value (typically a string, but can be a number) and a starting value and returns the change between the two, looking for relative value indicators like += and -= and it also ignores suffixes (but make sure the ending value starts with a number or +=/-= and that the starting value is a NUMBER!)
             * @param {(number|string)} e End value which is typically a string, but could be a number
             * @param {(number|string)} b Beginning value which is typically a string but could be a number
             * @return {number} Amount of change between the beginning and ending values (relative values that have a "+=" or "-=" are recognized)
             */
            _parseChange = function (e, b) {
                return (typeof (e) === "string" && e.charAt(1) === "=") ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(b);
            },

            /**
             * @private Takes a value and a default number, checks if the value is relative, null, or numeric and spits back a normalized number accordingly. Primarily used in the _parseTransform() function.
             * @param {Object} v Value to be parsed
             * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
             * @return {number} Parsed value
             */
            _parseVal = function (v, d) {
                return (v == null) ? d : (typeof (v) === "string" && v.charAt(1) === "=") ? parseInt(v.charAt(0) + "1", 10) * Number(v.substr(2)) + d : parseFloat(v);
            },

            /**
             * @private Translates strings like "40deg" or "40" or 40rad" or "+=40deg" or "270_short" or "-90_cw" or "+=45_ccw" to a numeric radian angle. Of course a starting/default value must be fed in too so that relative values can be calculated properly.
             * @param {Object} v Value to be parsed
             * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
             * @param {string=} p property name for directionalEnd (optional - only used when the parsed value is directional ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation). Property name would be "rotation", "rotationX", or "rotationY"
             * @param {Object=} directionalEnd An object that will store the raw end values for directional angles ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation.
             * @return {number} parsed angle in radians
             */
            _parseAngle = function (v, d, p, directionalEnd) {
                var min = 0.000001,
                    cap, split, dif, result;
                if (v == null) {
                    result = d;
                } else if (typeof (v) === "number") {
                    result = v;
                } else {
                    cap = 360;
                    split = v.split("_");
                    dif = Number(split[0].replace(_NaNExp, "")) * ((v.indexOf("rad") === -1) ? 1 : _RAD2DEG) - ((v.charAt(1) === "=") ? 0 : d);
                    if (split.length) {
                        if (directionalEnd) {
                            directionalEnd[p] = d + dif;
                        }
                        if (v.indexOf("short") !== -1) {
                            dif = dif % cap;
                            if (dif !== dif % (cap / 2)) {
                                dif = (dif < 0) ? dif + cap : dif - cap;
                            }
                        }
                        if (v.indexOf("_cw") !== -1 && dif < 0) {
                            dif = ((dif + cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
                        } else if (v.indexOf("ccw") !== -1 && dif > 0) {
                            dif = ((dif - cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
                        }
                    }
                    result = d + dif;
                }
                if (result < min && result > -min) {
                    result = 0;
                }
                return result;
            },

            _colorLookup = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            },

            _hue = function (h, m1, m2) {
                h = (h < 0) ? h + 1 : (h > 1) ? h - 1 : h;
                return ((((h * 6 < 1) ? m1 + (m2 - m1) * h * 6 : (h < 0.5) ? m2 : (h * 3 < 2) ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * 255) + 0.5) | 0;
            },

            /**
             * @private Parses a color (like #9F0, #FF9900, or rgb(255,51,153)) into an array with 3 elements for red, green, and blue. Also handles rgba() values (splits into array of 4 elements of course)
             * @param {(string|number)} v The value the should be parsed which could be a string like #9F0 or rgb(255,102,51) or rgba(255,0,0,0.5) or it could be a number like 0xFF00CC or even a named color like red, blue, purple, etc.
             * @return {Array.<number>} An array containing red, green, and blue (and optionally alpha) in that order.
             */
            _parseColor = function (v) {
                var c1, c2, c3, h, s, l;
                if (!v || v === "") {
                    return _colorLookup.black;
                }
                if (typeof (v) === "number") {
                    return [v >> 16, (v >> 8) & 255, v & 255];
                }
                if (v.charAt(v.length - 1) === ",") { //sometimes a trailing commma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
                    v = v.substr(0, v.length - 1);
                }
                if (_colorLookup[v]) {
                    return _colorLookup[v];
                }
                if (v.charAt(0) === "#") {
                    if (v.length === 4) { //for shorthand like #9F0
                        c1 = v.charAt(1),
                            c2 = v.charAt(2),
                            c3 = v.charAt(3);
                        v = "#" + c1 + c1 + c2 + c2 + c3 + c3;
                    }
                    v = parseInt(v.substr(1), 16);
                    return [v >> 16, (v >> 8) & 255, v & 255];
                }
                if (v.substr(0, 3) === "hsl") {
                    v = v.match(_numExp);
                    h = (Number(v[0]) % 360) / 360;
                    s = Number(v[1]) / 100;
                    l = Number(v[2]) / 100;
                    c2 = (l <= 0.5) ? l * (s + 1) : l + s - l * s;
                    c1 = l * 2 - c2;
                    if (v.length > 3) {
                        v[3] = Number(v[3]);
                    }
                    v[0] = _hue(h + 1 / 3, c1, c2);
                    v[1] = _hue(h, c1, c2);
                    v[2] = _hue(h - 1 / 3, c1, c2);
                    return v;
                }
                v = v.match(_numExp) || _colorLookup.transparent;
                v[0] = Number(v[0]);
                v[1] = Number(v[1]);
                v[2] = Number(v[2]);
                if (v.length > 3) {
                    v[3] = Number(v[3]);
                }
                return v;
            },
            _colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b"; //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.

        for (p in _colorLookup) {
            _colorExp += "|" + p + "\\b";
        }
        _colorExp = new RegExp(_colorExp + ")", "gi");

        /**
         * @private Returns a formatter function that handles taking a string (or number in some cases) and returning a consistently formatted one in terms of delimiters, quantity of values, etc. For example, we may get boxShadow values defined as "0px red" or "0px 0px 10px rgb(255,0,0)" or "0px 0px 20px 20px #F00" and we need to ensure that what we get back is described with 4 numbers and a color. This allows us to feed it into the _parseComplex() method and split the values up appropriately. The neat thing about this _getFormatter() function is that the dflt defines a pattern as well as a default, so for example, _getFormatter("0px 0px 0px 0px #777", true) not only sets the default as 0px for all distances and #777 for the color, but also sets the pattern such that 4 numbers and a color will always get returned.
         * @param {!string} dflt The default value and pattern to follow. So "0px 0px 0px 0px #777" will ensure that 4 numbers and a color will always get returned.
         * @param {boolean=} clr If true, the values should be searched for color-related data. For example, boxShadow values typically contain a color whereas borderRadius don't.
         * @param {boolean=} collapsible If true, the value is a top/left/right/bottom style one that acts like margin or padding, where if only one value is received, it's used for all 4; if 2 are received, the first is duplicated for 3rd (bottom) and the 2nd is duplicated for the 4th spot (left), etc.
         * @return {Function} formatter function
         */
        var _getFormatter = function (dflt, clr, collapsible, multi) {
                if (dflt == null) {
                    return function (v) {
                        return v;
                    };
                }
                var dColor = clr ? (dflt.match(_colorExp) || [""])[0] : "",
                    dVals = dflt.split(dColor).join("").match(_valuesExp) || [],
                    pfx = dflt.substr(0, dflt.indexOf(dVals[0])),
                    sfx = (dflt.charAt(dflt.length - 1) === ")") ? ")" : "",
                    delim = (dflt.indexOf(" ") !== -1) ? " " : ",",
                    numVals = dVals.length,
                    dSfx = (numVals > 0) ? dVals[0].replace(_numExp, "") : "",
                    formatter;
                if (!numVals) {
                    return function (v) {
                        return v;
                    };
                }
                if (clr) {
                    formatter = function (v) {
                        var color, vals, i, a;
                        if (typeof (v) === "number") {
                            v += dSfx;
                        } else if (multi && _commasOutsideParenExp.test(v)) {
                            a = v.replace(_commasOutsideParenExp, "|").split("|");
                            for (i = 0; i < a.length; i++) {
                                a[i] = formatter(a[i]);
                            }
                            return a.join(",");
                        }
                        color = (v.match(_colorExp) || [dColor])[0];
                        vals = v.split(color).join("").match(_valuesExp) || [];
                        i = vals.length;
                        if (numVals > i--) {
                            while (++i < numVals) {
                                vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
                            }
                        }
                        return pfx + vals.join(delim) + delim + color + sfx + (v.indexOf("inset") !== -1 ? " inset" : "");
                    };
                    return formatter;

                }
                formatter = function (v) {
                    var vals, a, i;
                    if (typeof (v) === "number") {
                        v += dSfx;
                    } else if (multi && _commasOutsideParenExp.test(v)) {
                        a = v.replace(_commasOutsideParenExp, "|").split("|");
                        for (i = 0; i < a.length; i++) {
                            a[i] = formatter(a[i]);
                        }
                        return a.join(",");
                    }
                    vals = v.match(_valuesExp) || [];
                    i = vals.length;
                    if (numVals > i--) {
                        while (++i < numVals) {
                            vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
                        }
                    }
                    return pfx + vals.join(delim) + sfx;
                };
                return formatter;
            },

            /**
             * @private returns a formatter function that's used for edge-related values like marginTop, marginLeft, paddingBottom, paddingRight, etc. Just pass a comma-delimited list of property names related to the edges.
             * @param {!string} props a comma-delimited list of property names in order from top to left, like "marginTop,marginRight,marginBottom,marginLeft"
             * @return {Function} a formatter function
             */
            _getEdgeParser = function (props) {
                props = props.split(",");
                return function (t, e, p, cssp, pt, plugin, vars) {
                    var a = (e + "").split(" "),
                        i;
                    vars = {};
                    for (i = 0; i < 4; i++) {
                        vars[props[i]] = a[i] = a[i] || a[(((i - 1) / 2) >> 0)];
                    }
                    return cssp.parse(t, vars, pt, plugin);
                };
            },

            // @private used when other plugins must tween values first, like BezierPlugin or ThrowPropsPlugin, etc. That plugin's setRatio() gets called first so that the values are updated, and then we loop through the MiniPropTweens  which handle copying the values into their appropriate slots so that they can then be applied correctly in the main CSSPlugin setRatio() method. Remember, we typically create a proxy object that has a bunch of uniquely-named properties that we feed to the sub-plugin and it does its magic normally, and then we must interpret those values and apply them to the css because often numbers must get combined/concatenated, suffixes added, etc. to work with css, like boxShadow could have 4 values plus a color.
            _setPluginRatio = _internals._setPluginRatio = function (v) {
                this.plugin.setRatio(v);
                var d = this.data,
                    proxy = d.proxy,
                    mpt = d.firstMPT,
                    min = 0.000001,
                    val, pt, i, str;
                while (mpt) {
                    val = proxy[mpt.v];
                    if (mpt.r) {
                        val = Math.round(val);
                    } else if (val < min && val > -min) {
                        val = 0;
                    }
                    mpt.t[mpt.p] = val;
                    mpt = mpt._next;
                }
                if (d.autoRotate) {
                    d.autoRotate.rotation = proxy.rotation;
                }
                //at the end, we must set the CSSPropTween's "e" (end) value dynamically here because that's what is used in the final setRatio() method.
                if (v === 1) {
                    mpt = d.firstMPT;
                    while (mpt) {
                        pt = mpt.t;
                        if (!pt.type) {
                            pt.e = pt.s + pt.xs0;
                        } else if (pt.type === 1) {
                            str = pt.xs0 + pt.s + pt.xs1;
                            for (i = 1; i < pt.l; i++) {
                                str += pt["xn" + i] + pt["xs" + (i + 1)];
                            }
                            pt.e = str;
                        }
                        mpt = mpt._next;
                    }
                }
            },

            /**
             * @private @constructor Used by a few SpecialProps to hold important values for proxies. For example, _parseToProxy() creates a MiniPropTween instance for each property that must get tweened on the proxy, and we record the original property name as well as the unique one we create for the proxy, plus whether or not the value needs to be rounded plus the original value.
             * @param {!Object} t target object whose property we're tweening (often a CSSPropTween)
             * @param {!string} p property name
             * @param {(number|string|object)} v value
             * @param {MiniPropTween=} next next MiniPropTween in the linked list
             * @param {boolean=} r if true, the tweened value should be rounded to the nearest integer
             */
            MiniPropTween = function (t, p, v, next, r) {
                this.t = t;
                this.p = p;
                this.v = v;
                this.r = r;
                if (next) {
                    next._prev = this;
                    this._next = next;
                }
            },

            /**
             * @private Most other plugins (like BezierPlugin and ThrowPropsPlugin and others) can only tween numeric values, but CSSPlugin must accommodate special values that have a bunch of extra data (like a suffix or strings between numeric values, etc.). For example, boxShadow has values like "10px 10px 20px 30px rgb(255,0,0)" which would utterly confuse other plugins. This method allows us to split that data apart and grab only the numeric data and attach it to uniquely-named properties of a generic proxy object ({}) so that we can feed that to virtually any plugin to have the numbers tweened. However, we must also keep track of which properties from the proxy go with which CSSPropTween values and instances. So we create a linked list of MiniPropTweens. Each one records a target (the original CSSPropTween), property (like "s" or "xn1" or "xn2") that we're tweening and the unique property name that was used for the proxy (like "boxShadow_xn1" and "boxShadow_xn2") and whether or not they need to be rounded. That way, in the _setPluginRatio() method we can simply copy the values over from the proxy to the CSSPropTween instance(s). Then, when the main CSSPlugin setRatio() method runs and applies the CSSPropTween values accordingly, they're updated nicely. So the external plugin tweens the numbers, _setPluginRatio() copies them over, and setRatio() acts normally, applying css-specific values to the element.
             * This method returns an object that has the following properties:
             *  - proxy: a generic object containing the starting values for all the properties that will be tweened by the external plugin.  This is what we feed to the external _onInitTween() as the target
             *  - end: a generic object containing the ending values for all the properties that will be tweened by the external plugin. This is what we feed to the external plugin's _onInitTween() as the destination values
             *  - firstMPT: the first MiniPropTween in the linked list
             *  - pt: the first CSSPropTween in the linked list that was created when parsing. If shallow is true, this linked list will NOT attach to the one passed into the _parseToProxy() as the "pt" (4th) parameter.
             * @param {!Object} t target object to be tweened
             * @param {!(Object|string)} vars the object containing the information about the tweening values (typically the end/destination values) that should be parsed
             * @param {!CSSPlugin} cssp The CSSPlugin instance
             * @param {CSSPropTween=} pt the next CSSPropTween in the linked list
             * @param {TweenPlugin=} plugin the external TweenPlugin instance that will be handling tweening the numeric values
             * @param {boolean=} shallow if true, the resulting linked list from the parse will NOT be attached to the CSSPropTween that was passed in as the "pt" (4th) parameter.
             * @return An object containing the following properties: proxy, end, firstMPT, and pt (see above for descriptions)
             */
            _parseToProxy = _internals._parseToProxy = function (t, vars, cssp, pt, plugin, shallow) {
                var bpt = pt,
                    start = {},
                    end = {},
                    transform = cssp._transform,
                    oldForce = _forcePT,
                    i, p, xp, mpt, firstPT;
                cssp._transform = null;
                _forcePT = vars;
                pt = firstPT = cssp.parse(t, vars, pt, plugin);
                _forcePT = oldForce;
                //break off from the linked list so the new ones are isolated.
                if (shallow) {
                    cssp._transform = transform;
                    if (bpt) {
                        bpt._prev = null;
                        if (bpt._prev) {
                            bpt._prev._next = null;
                        }
                    }
                }
                while (pt && pt !== bpt) {
                    if (pt.type <= 1) {
                        p = pt.p;
                        end[p] = pt.s + pt.c;
                        start[p] = pt.s;
                        if (!shallow) {
                            mpt = new MiniPropTween(pt, "s", p, mpt, pt.r);
                            pt.c = 0;
                        }
                        if (pt.type === 1) {
                            i = pt.l;
                            while (--i > 0) {
                                xp = "xn" + i;
                                p = pt.p + "_" + xp;
                                end[p] = pt.data[xp];
                                start[p] = pt[xp];
                                if (!shallow) {
                                    mpt = new MiniPropTween(pt, xp, p, mpt, pt.rxp[xp]);
                                }
                            }
                        }
                    }
                    pt = pt._next;
                }
                return {
                    proxy: start,
                    end: end,
                    firstMPT: mpt,
                    pt: firstPT
                };
            },



            /**
             * @constructor Each property that is tweened has at least one CSSPropTween associated with it. These instances store important information like the target, property, starting value, amount of change, etc. They can also optionally have a number of "extra" strings and numeric values named xs1, xn1, xs2, xn2, xs3, xn3, etc. where "s" indicates string and "n" indicates number. These can be pieced together in a complex-value tween (type:1) that has alternating types of data like a string, number, string, number, etc. For example, boxShadow could be "5px 5px 8px rgb(102, 102, 51)". In that value, there are 6 numbers that may need to tween and then pieced back together into a string again with spaces, suffixes, etc. xs0 is special in that it stores the suffix for standard (type:0) tweens, -OR- the first string (prefix) in a complex-value (type:1) CSSPropTween -OR- it can be the non-tweening value in a type:-1 CSSPropTween. We do this to conserve memory.
             * CSSPropTweens have the following optional properties as well (not defined through the constructor):
             *  - l: Length in terms of the number of extra properties that the CSSPropTween has (default: 0). For example, for a boxShadow we may need to tween 5 numbers in which case l would be 5; Keep in mind that the start/end values for the first number that's tweened are always stored in the s and c properties to conserve memory. All additional values thereafter are stored in xn1, xn2, etc.
             *  - xfirst: The first instance of any sub-CSSPropTweens that are tweening properties of this instance. For example, we may split up a boxShadow tween so that there's a main CSSPropTween of type:1 that has various xs* and xn* values associated with the h-shadow, v-shadow, blur, color, etc. Then we spawn a CSSPropTween for each of those that has a higher priority and runs BEFORE the main CSSPropTween so that the values are all set by the time it needs to re-assemble them. The xfirst gives us an easy way to identify the first one in that chain which typically ends at the main one (because they're all prepende to the linked list)
             *  - plugin: The TweenPlugin instance that will handle the tweening of any complex values. For example, sometimes we don't want to use normal subtweens (like xfirst refers to) to tween the values - we might want ThrowPropsPlugin or BezierPlugin some other plugin to do the actual tweening, so we create a plugin instance and store a reference here. We need this reference so that if we get a request to round values or disable a tween, we can pass along that request.
             *  - data: Arbitrary data that needs to be stored with the CSSPropTween. Typically if we're going to have a plugin handle the tweening of a complex-value tween, we create a generic object that stores the END values that we're tweening to and the CSSPropTween's xs1, xs2, etc. have the starting values. We store that object as data. That way, we can simply pass that object to the plugin and use the CSSPropTween as the target.
             *  - setRatio: Only used for type:2 tweens that require custom functionality. In this case, we call the CSSPropTween's setRatio() method and pass the ratio each time the tween updates. This isn't quite as efficient as doing things directly in the CSSPlugin's setRatio() method, but it's very convenient and flexible.
             * @param {!Object} t Target object whose property will be tweened. Often a DOM element, but not always. It could be anything.
             * @param {string} p Property to tween (name). For example, to tween element.width, p would be "width".
             * @param {number} s Starting numeric value
             * @param {number} c Change in numeric value over the course of the entire tween. For example, if element.width starts at 5 and should end at 100, c would be 95.
             * @param {CSSPropTween=} next The next CSSPropTween in the linked list. If one is defined, we will define its _prev as the new instance, and the new instance's _next will be pointed at it.
             * @param {number=} type The type of CSSPropTween where -1 = a non-tweening value, 0 = a standard simple tween, 1 = a complex value (like one that has multiple numbers in a comma- or space-delimited string like border:"1px solid red"), and 2 = one that uses a custom setRatio function that does all of the work of applying the values on each update.
             * @param {string=} n Name of the property that should be used for overwriting purposes which is typically the same as p but not always. For example, we may need to create a subtween for the 2nd part of a "clip:rect(...)" tween in which case "p" might be xs1 but "n" is still "clip"
             * @param {boolean=} r If true, the value(s) should be rounded
             * @param {number=} pr Priority in the linked list order. Higher priority CSSPropTweens will be updated before lower priority ones. The default priority is 0.
             * @param {string=} b Beginning value. We store this to ensure that it is EXACTLY what it was when the tween began without any risk of interpretation issues.
             * @param {string=} e Ending value. We store this to ensure that it is EXACTLY what the user defined at the end of the tween without any risk of interpretation issues.
             */
            CSSPropTween = _internals.CSSPropTween = function (t, p, s, c, next, type, n, r, pr, b, e) {
                this.t = t; //target
                this.p = p; //property
                this.s = s; //starting value
                this.c = c; //change value
                this.n = n || p; //name that this CSSPropTween should be associated to (usually the same as p, but not always - n is what overwriting looks at)
                if (!(t instanceof CSSPropTween)) {
                    _overwriteProps.push(this.n);
                }
                this.r = r; //round (boolean)
                this.type = type || 0; //0 = normal tween, -1 = non-tweening (in which case xs0 will be applied to the target's property, like tp.t[tp.p] = tp.xs0), 1 = complex-value SpecialProp, 2 = custom setRatio() that does all the work
                if (pr) {
                    this.pr = pr;
                    _hasPriority = true;
                }
                this.b = (b === undefined) ? s : b;
                this.e = (e === undefined) ? s + c : e;
                if (next) {
                    this._next = next;
                    next._prev = this;
                }
            },

            /**
             * Takes a target, the beginning value and ending value (as strings) and parses them into a CSSPropTween (possibly with child CSSPropTweens) that accommodates multiple numbers, colors, comma-delimited values, etc. For example:
             * sp.parseComplex(element, "boxShadow", "5px 10px 20px rgb(255,102,51)", "0px 0px 0px red", true, "0px 0px 0px rgb(0,0,0,0)", pt);
             * It will walk through the beginning and ending values (which should be in the same format with the same number and type of values) and figure out which parts are numbers, what strings separate the numeric/tweenable values, and then create the CSSPropTweens accordingly. If a plugin is defined, no child CSSPropTweens will be created. Instead, the ending values will be stored in the "data" property of the returned CSSPropTween like: {s:-5, xn1:-10, xn2:-20, xn3:255, xn4:0, xn5:0} so that it can be fed to any other plugin and it'll be plain numeric tweens but the recomposition of the complex value will be handled inside CSSPlugin's setRatio().
             * If a setRatio is defined, the type of the CSSPropTween will be set to 2 and recomposition of the values will be the responsibility of that method.
             *
             * @param {!Object} t Target whose property will be tweened
             * @param {!string} p Property that will be tweened (its name, like "left" or "backgroundColor" or "boxShadow")
             * @param {string} b Beginning value
             * @param {string} e Ending value
             * @param {boolean} clrs If true, the value could contain a color value like "rgb(255,0,0)" or "#F00" or "red". The default is false, so no colors will be recognized (a performance optimization)
             * @param {(string|number|Object)} dflt The default beginning value that should be used if no valid beginning value is defined or if the number of values inside the complex beginning and ending values don't match
             * @param {?CSSPropTween} pt CSSPropTween instance that is the current head of the linked list (we'll prepend to this).
             * @param {number=} pr Priority in the linked list order. Higher priority properties will be updated before lower priority ones. The default priority is 0.
             * @param {TweenPlugin=} plugin If a plugin should handle the tweening of extra properties, pass the plugin instance here. If one is defined, then NO subtweens will be created for any extra properties (the properties will be created - just not additional CSSPropTween instances to tween them) because the plugin is expected to do so. However, the end values WILL be populated in the "data" property, like {s:100, xn1:50, xn2:300}
             * @param {function(number)=} setRatio If values should be set in a custom function instead of being pieced together in a type:1 (complex-value) CSSPropTween, define that custom function here.
             * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parseComplex() call.
             */
            _parseComplex = CSSPlugin.parseComplex = function (t, p, b, e, clrs, dflt, pt, pr, plugin, setRatio) {
                //DEBUG: _log("parseComplex: "+p+", b: "+b+", e: "+e);
                b = b || dflt || "";
                pt = new CSSPropTween(t, p, 0, 0, pt, (setRatio ? 2 : 1), null, false, pr, b, e);
                e += ""; //ensures it's a string
                var ba = b.split(", ").join(",").split(" "), //beginning array
                    ea = e.split(", ").join(",").split(" "), //ending array
                    l = ba.length,
                    autoRound = (_autoRound !== false),
                    i, xi, ni, bv, ev, bnums, enums, bn, rgba, temp, cv, str;
                if (e.indexOf(",") !== -1 || b.indexOf(",") !== -1) {
                    ba = ba.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
                    ea = ea.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
                    l = ba.length;
                }
                if (l !== ea.length) {
                    //DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
                    ba = (dflt || "").split(" ");
                    l = ba.length;
                }
                pt.plugin = plugin;
                pt.setRatio = setRatio;
                for (i = 0; i < l; i++) {
                    bv = ba[i];
                    ev = ea[i];
                    bn = parseFloat(bv);

                    //if the value begins with a number (most common). It's fine if it has a suffix like px
                    if (bn || bn === 0) {
                        pt.appendXtra("", bn, _parseChange(ev, bn), ev.replace(_relNumExp, ""), (autoRound && ev.indexOf("px") !== -1), true);

                        //if the value is a color
                    } else if (clrs && (bv.charAt(0) === "#" || _colorLookup[bv] || _rgbhslExp.test(bv))) {
                        str = ev.charAt(ev.length - 1) === "," ? ")," : ")"; //if there's a comma at the end, retain it.
                        bv = _parseColor(bv);
                        ev = _parseColor(ev);
                        rgba = (bv.length + ev.length > 6);
                        if (rgba && !_supportsOpacity && ev[3] === 0) { //older versions of IE don't support rgba(), so if the destination alpha is 0, just use "transparent" for the end color
                            pt["xs" + pt.l] += pt.l ? " transparent" : "transparent";
                            pt.e = pt.e.split(ea[i]).join("transparent");
                        } else {
                            if (!_supportsOpacity) { //old versions of IE don't support rgba().
                                rgba = false;
                            }
                            pt.appendXtra((rgba ? "rgba(" : "rgb("), bv[0], ev[0] - bv[0], ",", true, true)
                                .appendXtra("", bv[1], ev[1] - bv[1], ",", true)
                                .appendXtra("", bv[2], ev[2] - bv[2], (rgba ? "," : str), true);
                            if (rgba) {
                                bv = (bv.length < 4) ? 1 : bv[3];
                                pt.appendXtra("", bv, ((ev.length < 4) ? 1 : ev[3]) - bv, str, false);
                            }
                        }

                    } else {
                        bnums = bv.match(_numExp); //gets each group of numbers in the beginning value string and drops them into an array

                        //if no number is found, treat it as a non-tweening value and just append the string to the current xs.
                        if (!bnums) {
                            pt["xs" + pt.l] += pt.l ? " " + bv : bv;

                            //loop through all the numbers that are found and construct the extra values on the pt.
                        } else {
                            enums = ev.match(_relNumExp); //get each group of numbers in the end value string and drop them into an array. We allow relative values too, like +=50 or -=.5
                            if (!enums || enums.length !== bnums.length) {
                                //DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
                                return pt;
                            }
                            ni = 0;
                            for (xi = 0; xi < bnums.length; xi++) {
                                cv = bnums[xi];
                                temp = bv.indexOf(cv, ni);
                                pt.appendXtra(bv.substr(ni, temp - ni), Number(cv), _parseChange(enums[xi], cv), "", (autoRound && bv.substr(temp + cv.length, 2) === "px"), (xi === 0));
                                ni = temp + cv.length;
                            }
                            pt["xs" + pt.l] += bv.substr(ni);
                        }
                    }
                }
                //if there are relative values ("+=" or "-=" prefix), we need to adjust the ending value to eliminate the prefixes and combine the values properly.
                if (e.indexOf("=") !== -1)
                    if (pt.data) {
                        str = pt.xs0 + pt.data.s;
                        for (i = 1; i < pt.l; i++) {
                            str += pt["xs" + i] + pt.data["xn" + i];
                        }
                        pt.e = str + pt["xs" + i];
                    }
                if (!pt.l) {
                    pt.type = -1;
                    pt.xs0 = pt.e;
                }
                return pt.xfirst || pt;
            },
            i = 9;


        p = CSSPropTween.prototype;
        p.l = p.pr = 0; //length (number of extra properties like xn1, xn2, xn3, etc.
        while (--i > 0) {
            p["xn" + i] = 0;
            p["xs" + i] = "";
        }
        p.xs0 = "";
        p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null;


        /**
         * Appends and extra tweening value to a CSSPropTween and automatically manages any prefix and suffix strings. The first extra value is stored in the s and c of the main CSSPropTween instance, but thereafter any extras are stored in the xn1, xn2, xn3, etc. The prefixes and suffixes are stored in the xs0, xs1, xs2, etc. properties. For example, if I walk through a clip value like "rect(10px, 5px, 0px, 20px)", the values would be stored like this:
         * xs0:"rect(", s:10, xs1:"px, ", xn1:5, xs2:"px, ", xn2:0, xs3:"px, ", xn3:20, xn4:"px)"
         * And they'd all get joined together when the CSSPlugin renders (in the setRatio() method).
         * @param {string=} pfx Prefix (if any)
         * @param {!number} s Starting value
         * @param {!number} c Change in numeric value over the course of the entire tween. For example, if the start is 5 and the end is 100, the change would be 95.
         * @param {string=} sfx Suffix (if any)
         * @param {boolean=} r Round (if true).
         * @param {boolean=} pad If true, this extra value should be separated by the previous one by a space. If there is no previous extra and pad is true, it will automatically drop the space.
         * @return {CSSPropTween} returns itself so that multiple methods can be chained together.
         */
        p.appendXtra = function (pfx, s, c, sfx, r, pad) {
            var pt = this,
                l = pt.l;
            pt["xs" + l] += (pad && l) ? " " + pfx : pfx || "";
            if (!c)
                if (l !== 0 && !pt.plugin) { //typically we'll combine non-changing values right into the xs to optimize performance, but we don't combine them when there's a plugin that will be tweening the values because it may depend on the values being split apart, like for a bezier, if a value doesn't change between the first and second iteration but then it does on the 3rd, we'll run into trouble because there's no xn slot for that value!
                    pt["xs" + l] += s + (sfx || "");
                    return pt;
                }
            pt.l++;
            pt.type = pt.setRatio ? 2 : 1;
            pt["xs" + pt.l] = sfx || "";
            if (l > 0) {
                pt.data["xn" + l] = s + c;
                pt.rxp["xn" + l] = r; //round extra property (we need to tap into this in the _parseToProxy() method)
                pt["xn" + l] = s;
                if (!pt.plugin) {
                    pt.xfirst = new CSSPropTween(pt, "xn" + l, s, c, pt.xfirst || pt, 0, pt.n, r, pt.pr);
                    pt.xfirst.xs0 = 0; //just to ensure that the property stays numeric which helps modern browsers speed up processing. Remember, in the setRatio() method, we do pt.t[pt.p] = val + pt.xs0 so if pt.xs0 is "" (the default), it'll cast the end value as a string. When a property is a number sometimes and a string sometimes, it prevents the compiler from locking in the data type, slowing things down slightly.
                }
                return pt;
            }
            pt.data = {
                s: s + c
            };
            pt.rxp = {};
            pt.s = s;
            pt.c = c;
            pt.r = r;
            return pt;
        };

        /**
         * @constructor A SpecialProp is basically a css property that needs to be treated in a non-standard way, like if it may contain a complex value like boxShadow:"5px 10px 15px rgb(255, 102, 51)" or if it is associated with another plugin like ThrowPropsPlugin or BezierPlugin. Every SpecialProp is associated with a particular property name like "boxShadow" or "throwProps" or "bezier" and it will intercept those values in the vars object that's passed to the CSSPlugin and handle them accordingly.
         * @param {!string} p Property name (like "boxShadow" or "throwProps")
         * @param {Object=} options An object containing any of the following configuration options:
         *                      - defaultValue: the default value
         *                      - parser: A function that should be called when the associated property name is found in the vars. This function should return a CSSPropTween instance and it should ensure that it is properly inserted into the linked list. It will receive 4 paramters: 1) The target, 2) The value defined in the vars, 3) The CSSPlugin instance (whose _firstPT should be used for the linked list), and 4) A computed style object if one was calculated (this is a speed optimization that allows retrieval of starting values quicker)
         *                      - formatter: a function that formats any value received for this special property (for example, boxShadow could take "5px 5px red" and format it to "5px 5px 0px 0px red" so that both the beginning and ending values have a common order and quantity of values.)
         *                      - prefix: if true, we'll determine whether or not this property requires a vendor prefix (like Webkit or Moz or ms or O)
         *                      - color: set this to true if the value for this SpecialProp may contain color-related values like rgb(), rgba(), etc.
         *                      - priority: priority in the linked list order. Higher priority SpecialProps will be updated before lower priority ones. The default priority is 0.
         *                      - multi: if true, the formatter should accommodate a comma-delimited list of values, like boxShadow could have multiple boxShadows listed out.
         *                      - collapsible: if true, the formatter should treat the value like it's a top/right/bottom/left value that could be collapsed, like "5px" would apply to all, "5px, 10px" would use 5px for top/bottom and 10px for right/left, etc.
         *                      - keyword: a special keyword that can [optionally] be found inside the value (like "inset" for boxShadow). This allows us to validate beginning/ending values to make sure they match (if the keyword is found in one, it'll be added to the other for consistency by default).
         */
        var SpecialProp = function (p, options) {
                options = options || {};
                this.p = options.prefix ? _checkPropPrefix(p) || p : p;
                _specialProps[p] = _specialProps[this.p] = this;
                this.format = options.formatter || _getFormatter(options.defaultValue, options.color, options.collapsible, options.multi);
                if (options.parser) {
                    this.parse = options.parser;
                }
                this.clrs = options.color;
                this.multi = options.multi;
                this.keyword = options.keyword;
                this.dflt = options.defaultValue;
                this.pr = options.priority || 0;
            },

            //shortcut for creating a new SpecialProp that can accept multiple properties as a comma-delimited list (helps minification). dflt can be an array for multiple values (we don't do a comma-delimited list because the default value may contain commas, like rect(0px,0px,0px,0px)). We attach this method to the SpecialProp class/object instead of using a private _createSpecialProp() method so that we can tap into it externally if necessary, like from another plugin.
            _registerComplexSpecialProp = _internals._registerComplexSpecialProp = function (p, options, defaults) {
                if (typeof (options) !== "object") {
                    options = {
                        parser: defaults
                    }; //to make backwards compatible with older versions of BezierPlugin and ThrowPropsPlugin
                }
                var a = p.split(","),
                    d = options.defaultValue,
                    i, temp;
                defaults = defaults || [d];
                for (i = 0; i < a.length; i++) {
                    options.prefix = (i === 0 && options.prefix);
                    options.defaultValue = defaults[i] || d;
                    temp = new SpecialProp(a[i], options);
                }
            },

            //creates a placeholder special prop for a plugin so that the property gets caught the first time a tween of it is attempted, and at that time it makes the plugin register itself, thus taking over for all future tweens of that property. This allows us to not mandate that things load in a particular order and it also allows us to log() an error that informs the user when they attempt to tween an external plugin-related property without loading its .js file.
            _registerPluginProp = function (p) {
                if (!_specialProps[p]) {
                    var pluginName = p.charAt(0).toUpperCase() + p.substr(1) + "Plugin";
                    _registerComplexSpecialProp(p, {
                        parser: function (t, e, p, cssp, pt, plugin, vars) {
                            var pluginClass = (_gsScope.GreenSockGlobals || _gsScope).com.greensock.plugins[pluginName];
                            if (!pluginClass) {
                                _log("Error: " + pluginName + " js file not loaded.");
                                return pt;
                            }
                            pluginClass._cssRegister();
                            return _specialProps[p].parse(t, e, p, cssp, pt, plugin, vars);
                        }
                    });
                }
            };


        p = SpecialProp.prototype;

        /**
         * Alias for _parseComplex() that automatically plugs in certain values for this SpecialProp, like its property name, whether or not colors should be sensed, the default value, and priority. It also looks for any keyword that the SpecialProp defines (like "inset" for boxShadow) and ensures that the beginning and ending values have the same number of values for SpecialProps where multi is true (like boxShadow and textShadow can have a comma-delimited list)
         * @param {!Object} t target element
         * @param {(string|number|object)} b beginning value
         * @param {(string|number|object)} e ending (destination) value
         * @param {CSSPropTween=} pt next CSSPropTween in the linked list
         * @param {TweenPlugin=} plugin If another plugin will be tweening the complex value, that TweenPlugin instance goes here.
         * @param {function=} setRatio If a custom setRatio() method should be used to handle this complex value, that goes here.
         * @return {CSSPropTween=} First CSSPropTween in the linked list
         */
        p.parseComplex = function (t, b, e, pt, plugin, setRatio) {
            var kwd = this.keyword,
                i, ba, ea, l, bi, ei;
            //if this SpecialProp's value can contain a comma-delimited list of values (like boxShadow or textShadow), we must parse them in a special way, and look for a keyword (like "inset" for boxShadow) and ensure that the beginning and ending BOTH have it if the end defines it as such. We also must ensure that there are an equal number of values specified (we can't tween 1 boxShadow to 3 for example)
            if (this.multi)
                if (_commasOutsideParenExp.test(e) || _commasOutsideParenExp.test(b)) {
                    ba = b.replace(_commasOutsideParenExp, "|").split("|");
                    ea = e.replace(_commasOutsideParenExp, "|").split("|");
                } else if (kwd) {
                ba = [b];
                ea = [e];
            }
            if (ea) {
                l = (ea.length > ba.length) ? ea.length : ba.length;
                for (i = 0; i < l; i++) {
                    b = ba[i] = ba[i] || this.dflt;
                    e = ea[i] = ea[i] || this.dflt;
                    if (kwd) {
                        bi = b.indexOf(kwd);
                        ei = e.indexOf(kwd);
                        if (bi !== ei) {
                            e = (ei === -1) ? ea : ba;
                            e[i] += " " + kwd;
                        }
                    }
                }
                b = ba.join(", ");
                e = ea.join(", ");
            }
            return _parseComplex(t, this.p, b, e, this.clrs, this.dflt, pt, this.pr, plugin, setRatio);
        };

        /**
         * Accepts a target and end value and spits back a CSSPropTween that has been inserted into the CSSPlugin's linked list and conforms with all the conventions we use internally, like type:-1, 0, 1, or 2, setting up any extra property tweens, priority, etc. For example, if we have a boxShadow SpecialProp and call:
         * this._firstPT = sp.parse(element, "5px 10px 20px rgb(2550,102,51)", "boxShadow", this);
         * It should figure out the starting value of the element's boxShadow, compare it to the provided end value and create all the necessary CSSPropTweens of the appropriate types to tween the boxShadow. The CSSPropTween that gets spit back should already be inserted into the linked list (the 4th parameter is the current head, so prepend to that).
         * @param {!Object} t Target object whose property is being tweened
         * @param {Object} e End value as provided in the vars object (typically a string, but not always - like a throwProps would be an object).
         * @param {!string} p Property name
         * @param {!CSSPlugin} cssp The CSSPlugin instance that should be associated with this tween.
         * @param {?CSSPropTween} pt The CSSPropTween that is the current head of the linked list (we'll prepend to it)
         * @param {TweenPlugin=} plugin If a plugin will be used to tween the parsed value, this is the plugin instance.
         * @param {Object=} vars Original vars object that contains the data for parsing.
         * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parse() call.
         */
        p.parse = function (t, e, p, cssp, pt, plugin, vars) {
            return this.parseComplex(t.style, this.format(_getStyle(t, this.p, _cs, false, this.dflt)), this.format(e), pt, plugin);
        };

        /**
         * Registers a special property that should be intercepted from any "css" objects defined in tweens. This allows you to handle them however you want without CSSPlugin doing it for you. The 2nd parameter should be a function that accepts 3 parameters:
         *  1) Target object whose property should be tweened (typically a DOM element)
         *  2) The end/destination value (could be a string, number, object, or whatever you want)
         *  3) The tween instance (you probably don't need to worry about this, but it can be useful for looking up information like the duration)
         *
         * Then, your function should return a function which will be called each time the tween gets rendered, passing a numeric "ratio" parameter to your function that indicates the change factor (usually between 0 and 1). For example:
         *
         * CSSPlugin.registerSpecialProp("myCustomProp", function(target, value, tween) {
         *      var start = target.style.width;
         *      return function(ratio) {
         *              target.style.width = (start + value * ratio) + "px";
         *              console.log("set width to " + target.style.width);
         *          }
         * }, 0);
         *
         * Then, when I do this tween, it will trigger my special property:
         *
         * TweenLite.to(element, 1, {css:{myCustomProp:100}});
         *
         * In the example, of course, we're just changing the width, but you can do anything you want.
         *
         * @param {!string} name Property name (or comma-delimited list of property names) that should be intercepted and handled by your function. For example, if I define "myCustomProp", then it would handle that portion of the following tween: TweenLite.to(element, 1, {css:{myCustomProp:100}})
         * @param {!function(Object, Object, Object, string):function(number)} onInitTween The function that will be called when a tween of this special property is performed. The function will receive 4 parameters: 1) Target object that should be tweened, 2) Value that was passed to the tween, 3) The tween instance itself (rarely used), and 4) The property name that's being tweened. Your function should return a function that should be called on every update of the tween. That function will receive a single parameter that is a "change factor" value (typically between 0 and 1) indicating the amount of change as a ratio. You can use this to determine how to set the values appropriately in your function.
         * @param {number=} priority Priority that helps the engine determine the order in which to set the properties (default: 0). Higher priority properties will be updated before lower priority ones.
         */
        CSSPlugin.registerSpecialProp = function (name, onInitTween, priority) {
            _registerComplexSpecialProp(name, {
                parser: function (t, e, p, cssp, pt, plugin, vars) {
                    var rv = new CSSPropTween(t, p, 0, 0, pt, 2, p, false, priority);
                    rv.plugin = plugin;
                    rv.setRatio = onInitTween(t, e, cssp._tween, p);
                    return rv;
                },
                priority: priority
            });
        };








        //transform-related methods and properties
        var _transformProps = ("scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent").split(","),
            _transformProp = _checkPropPrefix("transform"), //the Javascript (camelCase) transform property, like msTransform, WebkitTransform, MozTransform, or OTransform.
            _transformPropCSS = _prefixCSS + "transform",
            _transformOriginProp = _checkPropPrefix("transformOrigin"),
            _supports3D = (_checkPropPrefix("perspective") !== null),
            Transform = _internals.Transform = function () {
                this.skewY = 0;
            },

            /**
             * Parses the transform values for an element, returning an object with x, y, z, scaleX, scaleY, scaleZ, rotation, rotationX, rotationY, skewX, and skewY properties. Note: by default (for performance reasons), all skewing is combined into skewX and rotation but skewY still has a place in the transform object so that we can record how much of the skew is attributed to skewX vs skewY. Remember, a skewY of 10 looks the same as a rotation of 10 and skewX of -10.
             * @param {!Object} t target element
             * @param {Object=} cs computed style object (optional)
             * @param {boolean=} rec if true, the transform values will be recorded to the target element's _gsTransform object, like target._gsTransform = {x:0, y:0, z:0, scaleX:1...}
             * @param {boolean=} parse if true, we'll ignore any _gsTransform values that already exist on the element, and force a reparsing of the css (calculated style)
             * @return {object} object containing all of the transform properties/values like {x:0, y:0, z:0, scaleX:1...}
             */
            _getTransform = _internals.getTransform = function (t, cs, rec, parse) {
                if (t._gsTransform && rec && !parse) {
                    return t._gsTransform; //if the element already has a _gsTransform, use that. Note: some browsers don't accurately return the calculated style for the transform (particularly for SVG), so it's almost always safest to just use the values we've already applied rather than re-parsing things.
                }
                var tm = rec ? t._gsTransform || new Transform() : new Transform(),
                    invX = (tm.scaleX < 0), //in order to interpret things properly, we need to know if the user applied a negative scaleX previously so that we can adjust the rotation and skewX accordingly. Otherwise, if we always interpret a flipped matrix as affecting scaleY and the user only wants to tween the scaleX on multiple sequential tweens, it would keep the negative scaleY without that being the user's intent.
                    min = 0.00002,
                    rnd = 100000,
                    minAngle = 179.99,
                    minPI = minAngle * _DEG2RAD,
                    zOrigin = _supports3D ? parseFloat(_getStyle(t, _transformOriginProp, cs, false, "0 0 0").split(" ")[2]) || tm.zOrigin || 0 : 0,
                    s, m, i, n, dec, scaleX, scaleY, rotation, skewX, difX, difY, difR, difS;
                if (_transformProp) {
                    s = _getStyle(t, _transformPropCSS, cs, true);
                } else if (t.currentStyle) {
                    //for older versions of IE, we need to interpret the filter portion that is in the format: progid:DXImageTransform.Microsoft.Matrix(M11=6.123233995736766e-17, M12=-1, M21=1, M22=6.123233995736766e-17, sizingMethod='auto expand') Notice that we need to swap b and c compared to a normal matrix.
                    s = t.currentStyle.filter.match(_ieGetMatrixExp);
                    s = (s && s.length === 4) ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), (tm.x || 0), (tm.y || 0)].join(",") : "";
                }
                if (!s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)") { //if no transforms are applied, just use the defaults to optimize performance (no need to parse).
                    tm = {
                        x: 0,
                        y: 0,
                        z: 0,
                        scaleX: 1,
                        scaleY: 1,
                        scaleZ: 1,
                        skewX: 0,
                        perspective: 0,
                        rotation: 0,
                        rotationX: 0,
                        rotationY: 0,
                        zOrigin: 0
                    };
                } else {
                    //split the matrix values out into an array (m for matrix)
                    m = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [];
                    i = m.length;
                    while (--i > -1) {
                        n = Number(m[i]);
                        m[i] = (dec = n - (n |= 0)) ? ((dec * rnd + (dec < 0 ? -0.5 : 0.5)) | 0) / rnd + n : n; //convert strings to Numbers and round to 5 decimal places to avoid issues with tiny numbers. Roughly 20x faster than Number.toFixed(). We also must make sure to round before dividing so that values like 0.9999999999 become 1 to avoid glitches in browser rendering and interpretation of flipped/rotated 3D matrices. And don't just multiply the number by rnd, floor it, and then divide by rnd because the bitwise operations max out at a 32-bit signed integer, thus it could get clipped at a relatively low value (like 22,000.00000 for example).
                    }
                    if (m.length === 16) {

                        //we'll only look at these position-related 6 variables first because if x/y/z all match, it's relatively safe to assume we don't need to re-parse everything which risks losing important rotational information (like rotationX:180 plus rotationY:180 would look the same as rotation:180 - there's no way to know for sure which direction was taken based solely on the matrix3d() values)
                        var a13 = m[8],
                            a23 = m[9],
                            a33 = m[10],
                            a14 = m[12],
                            a24 = m[13],
                            a34 = m[14];

                        //we manually compensate for non-zero z component of transformOrigin to work around bugs in Safari
                        if (tm.zOrigin) {
                            a34 = -tm.zOrigin;
                            a14 = a13 * a34 - m[12];
                            a24 = a23 * a34 - m[13];
                            a34 = a33 * a34 + tm.zOrigin - m[14];
                        }

                        //only parse from the matrix if we MUST because not only is it usually unnecessary due to the fact that we store the values in the _gsTransform object, but also because it's impossible to accurately interpret rotationX, rotationY, rotationZ, scaleX, and scaleY if all are applied, so it's much better to rely on what we store. However, we must parse the first time that an object is tweened. We also assume that if the position has changed, the user must have done some styling changes outside of CSSPlugin, thus we force a parse in that scenario.
                        if (!rec || parse || tm.rotationX == null) {
                            var a11 = m[0],
                                a21 = m[1],
                                a31 = m[2],
                                a41 = m[3],
                                a12 = m[4],
                                a22 = m[5],
                                a32 = m[6],
                                a42 = m[7],
                                a43 = m[11],
                                angle = Math.atan2(a32, a33),
                                xFlip = (angle < -minPI || angle > minPI),
                                t1, t2, t3, cos, sin, yFlip, zFlip;
                            tm.rotationX = angle * _RAD2DEG;
                            //rotationX
                            if (angle) {
                                cos = Math.cos(-angle);
                                sin = Math.sin(-angle);
                                t1 = a12 * cos + a13 * sin;
                                t2 = a22 * cos + a23 * sin;
                                t3 = a32 * cos + a33 * sin;
                                a13 = a12 * -sin + a13 * cos;
                                a23 = a22 * -sin + a23 * cos;
                                a33 = a32 * -sin + a33 * cos;
                                a43 = a42 * -sin + a43 * cos;
                                a12 = t1;
                                a22 = t2;
                                a32 = t3;
                            }
                            //rotationY
                            angle = Math.atan2(a13, a11);
                            tm.rotationY = angle * _RAD2DEG;
                            if (angle) {
                                yFlip = (angle < -minPI || angle > minPI);
                                cos = Math.cos(-angle);
                                sin = Math.sin(-angle);
                                t1 = a11 * cos - a13 * sin;
                                t2 = a21 * cos - a23 * sin;
                                t3 = a31 * cos - a33 * sin;
                                a23 = a21 * sin + a23 * cos;
                                a33 = a31 * sin + a33 * cos;
                                a43 = a41 * sin + a43 * cos;
                                a11 = t1;
                                a21 = t2;
                                a31 = t3;
                            }
                            //rotationZ
                            angle = Math.atan2(a21, a22);
                            tm.rotation = angle * _RAD2DEG;
                            if (angle) {
                                zFlip = (angle < -minPI || angle > minPI);
                                cos = Math.cos(-angle);
                                sin = Math.sin(-angle);
                                a11 = a11 * cos + a12 * sin;
                                t2 = a21 * cos + a22 * sin;
                                a22 = a21 * -sin + a22 * cos;
                                a32 = a31 * -sin + a32 * cos;
                                a21 = t2;
                            }

                            if (zFlip && xFlip) {
                                tm.rotation = tm.rotationX = 0;
                            } else if (zFlip && yFlip) {
                                tm.rotation = tm.rotationY = 0;
                            } else if (yFlip && xFlip) {
                                tm.rotationY = tm.rotationX = 0;
                            }

                            tm.scaleX = ((Math.sqrt(a11 * a11 + a21 * a21) * rnd + 0.5) | 0) / rnd;
                            tm.scaleY = ((Math.sqrt(a22 * a22 + a23 * a23) * rnd + 0.5) | 0) / rnd;
                            tm.scaleZ = ((Math.sqrt(a32 * a32 + a33 * a33) * rnd + 0.5) | 0) / rnd;
                            tm.skewX = 0;
                            tm.perspective = a43 ? 1 / ((a43 < 0) ? -a43 : a43) : 0;
                            tm.x = a14;
                            tm.y = a24;
                            tm.z = a34;
                        }

                    } else if ((!_supports3D || parse || !m.length || tm.x !== m[4] || tm.y !== m[5] || (!tm.rotationX && !tm.rotationY)) && !(tm.x !== undefined && _getStyle(t, "display", cs) === "none")) { //sometimes a 6-element matrix is returned even when we performed 3D transforms, like if rotationX and rotationY are 180. In cases like this, we still need to honor the 3D transforms. If we just rely on the 2D info, it could affect how the data is interpreted, like scaleY might get set to -1 or rotation could get offset by 180 degrees. For example, do a TweenLite.to(element, 1, {css:{rotationX:180, rotationY:180}}) and then later, TweenLite.to(element, 1, {css:{rotationX:0}}) and without this conditional logic in place, it'd jump to a state of being unrotated when the 2nd tween starts. Then again, we need to honor the fact that the user COULD alter the transforms outside of CSSPlugin, like by manually applying new css, so we try to sense that by looking at x and y because if those changed, we know the changes were made outside CSSPlugin and we force a reinterpretation of the matrix values. Also, in Webkit browsers, if the element's "display" is "none", its calculated style value will always return empty, so if we've already recorded the values in the _gsTransform object, we'll just rely on those.
                        var k = (m.length >= 6),
                            a = k ? m[0] : 1,
                            b = m[1] || 0,
                            c = m[2] || 0,
                            d = k ? m[3] : 1;
                        tm.x = m[4] || 0;
                        tm.y = m[5] || 0;
                        scaleX = Math.sqrt(a * a + b * b);
                        scaleY = Math.sqrt(d * d + c * c);
                        rotation = (a || b) ? Math.atan2(b, a) * _RAD2DEG : tm.rotation || 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
                        skewX = (c || d) ? Math.atan2(c, d) * _RAD2DEG + rotation : tm.skewX || 0;
                        difX = scaleX - Math.abs(tm.scaleX || 0);
                        difY = scaleY - Math.abs(tm.scaleY || 0);
                        if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
                            if (invX) {
                                scaleX *= -1;
                                skewX += (rotation <= 0) ? 180 : -180;
                                rotation += (rotation <= 0) ? 180 : -180;
                            } else {
                                scaleY *= -1;
                                skewX += (skewX <= 0) ? 180 : -180;
                            }
                        }
                        difR = (rotation - tm.rotation) % 180; //note: matching ranges would be very small (+/-0.0001) or very close to 180.
                        difS = (skewX - tm.skewX) % 180;
                        //if there's already a recorded _gsTransform in place for the target, we should leave those values in place unless we know things changed for sure (beyond a super small amount). This gets around ambiguous interpretations, like if scaleX and scaleY are both -1, the matrix would be the same as if the rotation was 180 with normal scaleX/scaleY. If the user tweened to particular values, those must be prioritized to ensure animation is consistent.
                        if (tm.skewX === undefined || difX > min || difX < -min || difY > min || difY < -min || (difR > -minAngle && difR < minAngle && (difR * rnd) | 0 !== 0) || (difS > -minAngle && difS < minAngle && (difS * rnd) | 0 !== 0)) {
                            tm.scaleX = scaleX;
                            tm.scaleY = scaleY;
                            tm.rotation = rotation;
                            tm.skewX = skewX;
                        }
                        if (_supports3D) {
                            tm.rotationX = tm.rotationY = tm.z = 0;
                            tm.perspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0;
                            tm.scaleZ = 1;
                        }
                    }
                    tm.zOrigin = zOrigin;

                    //some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 0 in these cases. The conditional logic here is faster than calling Math.abs(). Also, browsers tend to render a SLIGHTLY rotated object in a fuzzy way, so we need to snap to exactly 0 when appropriate.
                    for (i in tm) {
                        if (tm[i] < min)
                            if (tm[i] > -min) {
                                tm[i] = 0;
                            }
                    }
                }
                //DEBUG: _log("parsed rotation: "+(tm.rotationX)+", "+(tm.rotationY)+", "+(tm.rotation)+", scale: "+tm.scaleX+", "+tm.scaleY+", "+tm.scaleZ+", position: "+tm.x+", "+tm.y+", "+tm.z+", perspective: "+tm.perspective);
                if (rec) {
                    t._gsTransform = tm; //record to the object's _gsTransform which we use so that tweens can control individual properties independently (we need all the properties to accurately recompose the matrix in the setRatio() method)
                }
                tm.xPercent = tm.yPercent = 0;
                return tm;
            },

            //for setting 2D transforms in IE6, IE7, and IE8 (must use a "filter" to emulate the behavior of modern day browser transforms)
            _setIETransformRatio = function (v) {
                var t = this.data, //refers to the element's _gsTransform object
                    ang = -t.rotation * _DEG2RAD,
                    skew = ang + t.skewX * _DEG2RAD,
                    rnd = 100000,
                    a = ((Math.cos(ang) * t.scaleX * rnd) | 0) / rnd,
                    b = ((Math.sin(ang) * t.scaleX * rnd) | 0) / rnd,
                    c = ((Math.sin(skew) * -t.scaleY * rnd) | 0) / rnd,
                    d = ((Math.cos(skew) * t.scaleY * rnd) | 0) / rnd,
                    style = this.t.style,
                    cs = this.t.currentStyle,
                    filters, val;
                if (!cs) {
                    return;
                }
                val = b; //just for swapping the variables an inverting them (reused "val" to avoid creating another variable in memory). IE's filter matrix uses a non-standard matrix configuration (angle goes the opposite way, and b and c are reversed and inverted)
                b = -c;
                c = -val;
                filters = cs.filter;
                style.filter = ""; //remove filters so that we can accurately measure offsetWidth/offsetHeight
                var w = this.t.offsetWidth,
                    h = this.t.offsetHeight,
                    clip = (cs.position !== "absolute"),
                    m = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + b + ", M21=" + c + ", M22=" + d,
                    ox = t.x + (w * t.xPercent / 100),
                    oy = t.y + (h * t.yPercent / 100),
                    dx, dy;

                //if transformOrigin is being used, adjust the offset x and y
                if (t.ox != null) {
                    dx = ((t.oxp) ? w * t.ox * 0.01 : t.ox) - w / 2;
                    dy = ((t.oyp) ? h * t.oy * 0.01 : t.oy) - h / 2;
                    ox += dx - (dx * a + dy * b);
                    oy += dy - (dx * c + dy * d);
                }

                if (!clip) {
                    m += ", sizingMethod='auto expand')";
                } else {
                    dx = (w / 2);
                    dy = (h / 2);
                    //translate to ensure that transformations occur around the correct origin (default is center).
                    m += ", Dx=" + (dx - (dx * a + dy * b) + ox) + ", Dy=" + (dy - (dx * c + dy * d) + oy) + ")";
                }
                if (filters.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1) {
                    style.filter = filters.replace(_ieSetMatrixExp, m);
                } else {
                    style.filter = m + " " + filters; //we must always put the transform/matrix FIRST (before alpha(opacity=xx)) to avoid an IE bug that slices part of the object when rotation is applied with alpha.
                }

                //at the end or beginning of the tween, if the matrix is normal (1, 0, 0, 1) and opacity is 100 (or doesn't exist), remove the filter to improve browser performance.
                if (v === 0 || v === 1)
                    if (a === 1)
                        if (b === 0)
                            if (c === 0)
                                if (d === 1)
                                    if (!clip || m.indexOf("Dx=0, Dy=0") !== -1)
                                        if (!_opacityExp.test(filters) || parseFloat(RegExp.$1) === 100)
                                            if (filters.indexOf("gradient(" && filters.indexOf("Alpha")) === -1) {
                                                style.removeAttribute("filter");
                                            }

                                            //we must set the margins AFTER applying the filter in order to avoid some bugs in IE8 that could (in rare scenarios) cause them to be ignored intermittently (vibration).
                if (!clip) {
                    var mult = (_ieVers < 8) ? 1 : -1, //in Internet Explorer 7 and before, the box model is broken, causing the browser to treat the width/height of the actual rotated filtered image as the width/height of the box itself, but Microsoft corrected that in IE8. We must use a negative offset in IE8 on the right/bottom
                        marg, prop, dif;
                    dx = t.ieOffsetX || 0;
                    dy = t.ieOffsetY || 0;
                    t.ieOffsetX = Math.round((w - ((a < 0 ? -a : a) * w + (b < 0 ? -b : b) * h)) / 2 + ox);
                    t.ieOffsetY = Math.round((h - ((d < 0 ? -d : d) * h + (c < 0 ? -c : c) * w)) / 2 + oy);
                    for (i = 0; i < 4; i++) {
                        prop = _margins[i];
                        marg = cs[prop];
                        //we need to get the current margin in case it is being tweened separately (we want to respect that tween's changes)
                        val = (marg.indexOf("px") !== -1) ? parseFloat(marg) : _convertToPixels(this.t, prop, parseFloat(marg), marg.replace(_suffixExp, "")) || 0;
                        if (val !== t[prop]) {
                            dif = (i < 2) ? -t.ieOffsetX : -t.ieOffsetY; //if another tween is controlling a margin, we cannot only apply the difference in the ieOffsets, so we essentially zero-out the dx and dy here in that case. We record the margin(s) later so that we can keep comparing them, making this code very flexible.
                        } else {
                            dif = (i < 2) ? dx - t.ieOffsetX : dy - t.ieOffsetY;
                        }
                        style[prop] = (t[prop] = Math.round(val - dif * ((i === 0 || i === 2) ? 1 : mult))) + "px";
                    }
                }
            },

            _set3DTransformRatio = _internals.set3DTransformRatio = function (v) {
                var t = this.data, //refers to the element's _gsTransform object
                    style = this.t.style,
                    angle = t.rotation * _DEG2RAD,
                    sx = t.scaleX,
                    sy = t.scaleY,
                    sz = t.scaleZ,
                    x = t.x,
                    y = t.y,
                    z = t.z,
                    perspective = t.perspective,
                    a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34, a41, a42, a43,
                    zOrigin, rnd, cos, sin, t1, t2, t3, t4;
                if (v === 1 || v === 0)
                    if (t.force3D === "auto")
                        if (!t.rotationY && !t.rotationX && sz === 1 && !perspective && !z) { //on the final render (which could be 0 for a from tween), if there are no 3D aspects, render in 2D to free up memory and improve performance especially on mobile devices
                            _set2DTransformRatio.call(this, v);
                            return;
                        }
                if (_isFirefox) {
                    var n = 0.0001;
                    if (sx < n && sx > -n) { //Firefox has a bug (at least in v25) that causes it to render the transparent part of 32-bit PNG images as black when displayed inside an iframe and the 3D scale is very small and doesn't change sufficiently enough between renders (like if you use a Power4.easeInOut to scale from 0 to 1 where the beginning values only change a tiny amount to begin the tween before accelerating). In this case, we force the scale to be 0.00002 instead which is visually the same but works around the Firefox issue.
                        sx = sz = 0.00002;
                    }
                    if (sy < n && sy > -n) {
                        sy = sz = 0.00002;
                    }
                    if (perspective && !t.z && !t.rotationX && !t.rotationY) { //Firefox has a bug that causes elements to have an odd super-thin, broken/dotted black border on elements that have a perspective set but aren't utilizing 3D space (no rotationX, rotationY, or z).
                        perspective = 0;
                    }
                }
                if (angle || t.skewX) {
                    cos = Math.cos(angle);
                    sin = Math.sin(angle);
                    a11 = cos;
                    a21 = sin;
                    if (t.skewX) {
                        angle -= t.skewX * _DEG2RAD;
                        cos = Math.cos(angle);
                        sin = Math.sin(angle);
                        if (t.skewType === "simple") { //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
                            t1 = Math.tan(t.skewX * _DEG2RAD);
                            t1 = Math.sqrt(1 + t1 * t1);
                            cos *= t1;
                            sin *= t1;
                        }
                    }
                    a12 = -sin;
                    a22 = cos;

                } else if (!t.rotationY && !t.rotationX && sz === 1 && !perspective) { //if we're only translating and/or 2D scaling, this is faster...
                    style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") + x + "px," + y + "px," + z + "px)" + ((sx !== 1 || sy !== 1) ? " scale(" + sx + "," + sy + ")" : "");
                    return;
                } else {
                    a11 = a22 = 1;
                    a12 = a21 = 0;
                }
                a33 = 1;
                a13 = a14 = a23 = a24 = a31 = a32 = a34 = a41 = a42 = 0;
                a43 = (perspective) ? -1 / perspective : 0;
                zOrigin = t.zOrigin;
                rnd = 100000;
                angle = t.rotationY * _DEG2RAD;
                if (angle) {
                    cos = Math.cos(angle);
                    sin = Math.sin(angle);
                    a31 = a33 * -sin;
                    a41 = a43 * -sin;
                    a13 = a11 * sin;
                    a23 = a21 * sin;
                    a33 *= cos;
                    a43 *= cos;
                    a11 *= cos;
                    a21 *= cos;
                }
                angle = t.rotationX * _DEG2RAD;
                if (angle) {
                    cos = Math.cos(angle);
                    sin = Math.sin(angle);
                    t1 = a12 * cos + a13 * sin;
                    t2 = a22 * cos + a23 * sin;
                    t3 = a32 * cos + a33 * sin;
                    t4 = a42 * cos + a43 * sin;
                    a13 = a12 * -sin + a13 * cos;
                    a23 = a22 * -sin + a23 * cos;
                    a33 = a32 * -sin + a33 * cos;
                    a43 = a42 * -sin + a43 * cos;
                    a12 = t1;
                    a22 = t2;
                    a32 = t3;
                    a42 = t4;
                }
                if (sz !== 1) {
                    a13 *= sz;
                    a23 *= sz;
                    a33 *= sz;
                    a43 *= sz;
                }
                if (sy !== 1) {
                    a12 *= sy;
                    a22 *= sy;
                    a32 *= sy;
                    a42 *= sy;
                }
                if (sx !== 1) {
                    a11 *= sx;
                    a21 *= sx;
                    a31 *= sx;
                    a41 *= sx;
                }
                if (zOrigin) {
                    a34 -= zOrigin;
                    a14 = a13 * a34;
                    a24 = a23 * a34;
                    a34 = a33 * a34 + zOrigin;
                }
                //we round the x, y, and z slightly differently to allow even larger values.
                a14 = (t1 = (a14 += x) - (a14 |= 0)) ? ((t1 * rnd + (t1 < 0 ? -0.5 : 0.5)) | 0) / rnd + a14 : a14;
                a24 = (t1 = (a24 += y) - (a24 |= 0)) ? ((t1 * rnd + (t1 < 0 ? -0.5 : 0.5)) | 0) / rnd + a24 : a24;
                a34 = (t1 = (a34 += z) - (a34 |= 0)) ? ((t1 * rnd + (t1 < 0 ? -0.5 : 0.5)) | 0) / rnd + a34 : a34;
                style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d(") + [(((a11 * rnd) | 0) / rnd), (((a21 * rnd) | 0) / rnd), (((a31 * rnd) | 0) / rnd), (((a41 * rnd) | 0) / rnd), (((a12 * rnd) | 0) / rnd), (((a22 * rnd) | 0) / rnd), (((a32 * rnd) | 0) / rnd), (((a42 * rnd) | 0) / rnd), (((a13 * rnd) | 0) / rnd), (((a23 * rnd) | 0) / rnd), (((a33 * rnd) | 0) / rnd), (((a43 * rnd) | 0) / rnd), a14, a24, a34, (perspective ? (1 + (-a34 / perspective)) : 1)].join(",") + ")";
            },

            _set2DTransformRatio = _internals.set2DTransformRatio = function (v) {
                var t = this.data, //refers to the element's _gsTransform object
                    targ = this.t,
                    style = targ.style,
                    x = t.x,
                    y = t.y,
                    prefix = "",
                    ang, skew, rnd, sx, sy;
                if (t.rotationX || t.rotationY || t.z || t.force3D === true || (t.force3D === "auto" && v !== 1 && v !== 0)) { //if a 3D tween begins while a 2D one is running, we need to kick the rendering over to the 3D method. For example, imagine a yoyo-ing, infinitely repeating scale tween running, and then the object gets rotated in 3D space with a different tween.
                    this.setRatio = _set3DTransformRatio;
                    _set3DTransformRatio.call(this, v);
                    return;
                }

                if (!t.rotation && !t.skewX) {
                    style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + t.scaleX + ",0,0," + t.scaleY + "," + x + "," + y + ")";
                } else {
                    ang = t.rotation * _DEG2RAD;
                    skew = ang - t.skewX * _DEG2RAD;
                    rnd = 100000;
                    sx = t.scaleX * rnd;
                    sy = t.scaleY * rnd;
                    //some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 5 decimal places.
                    style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + (((Math.cos(ang) * sx) | 0) / rnd) + "," + (((Math.sin(ang) * sx) | 0) / rnd) + "," + (((Math.sin(skew) * -sy) | 0) / rnd) + "," + (((Math.cos(skew) * sy) | 0) / rnd) + "," + x + "," + y + ")";
                }
            };

        _registerComplexSpecialProp("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
            parser: function (t, e, p, cssp, pt, plugin, vars) {
                if (cssp._transform) {
                    return pt;
                } //only need to parse the transform once, and only if the browser supports it.
                var m1 = cssp._transform = _getTransform(t, _cs, true, vars.parseTransform),
                    style = t.style,
                    min = 0.000001,
                    i = _transformProps.length,
                    v = vars,
                    endRotations = {},
                    m2, skewY, copy, orig, has3D, hasChange, dr;
                if (typeof (v.transform) === "string" && _transformProp) { //for values like transform:"rotate(60deg) scale(0.5, 0.8)"
                    copy = _tempDiv.style; //don't use the original target because it might be SVG in which case some browsers don't report computed style correctly.
                    copy[_transformProp] = v.transform;
                    copy.display = "block"; //if display is "none", the browser often refuses to report the transform properties correctly.
                    copy.position = "absolute";
                    _doc.body.appendChild(_tempDiv);
                    m2 = _getTransform(_tempDiv, null, false);
                    _doc.body.removeChild(_tempDiv);
                } else if (typeof (v) === "object") { //for values like scaleX, scaleY, rotation, x, y, skewX, and skewY or transform:{...} (object)
                    m2 = {
                        scaleX: _parseVal((v.scaleX != null) ? v.scaleX : v.scale, m1.scaleX),
                        scaleY: _parseVal((v.scaleY != null) ? v.scaleY : v.scale, m1.scaleY),
                        scaleZ: _parseVal(v.scaleZ, m1.scaleZ),
                        x: _parseVal(v.x, m1.x),
                        y: _parseVal(v.y, m1.y),
                        z: _parseVal(v.z, m1.z),
                        xPercent: _parseVal(v.xPercent, m1.xPercent),
                        yPercent: _parseVal(v.yPercent, m1.yPercent),
                        perspective: _parseVal(v.transformPerspective, m1.perspective)
                    };
                    dr = v.directionalRotation;
                    if (dr != null) {
                        if (typeof (dr) === "object") {
                            for (copy in dr) {
                                v[copy] = dr[copy];
                            }
                        } else {
                            v.rotation = dr;
                        }
                    }
                    if (typeof (v.x) === "string" && v.x.indexOf("%") !== -1) {
                        m2.x = 0;
                        m2.xPercent = _parseVal(v.x, m1.xPercent);
                    }
                    if (typeof (v.y) === "string" && v.y.indexOf("%") !== -1) {
                        m2.y = 0;
                        m2.yPercent = _parseVal(v.y, m1.yPercent);
                    }

                    m2.rotation = _parseAngle(("rotation" in v) ? v.rotation : ("shortRotation" in v) ? v.shortRotation + "_short" : ("rotationZ" in v) ? v.rotationZ : m1.rotation, m1.rotation, "rotation", endRotations);
                    if (_supports3D) {
                        m2.rotationX = _parseAngle(("rotationX" in v) ? v.rotationX : ("shortRotationX" in v) ? v.shortRotationX + "_short" : m1.rotationX || 0, m1.rotationX, "rotationX", endRotations);
                        m2.rotationY = _parseAngle(("rotationY" in v) ? v.rotationY : ("shortRotationY" in v) ? v.shortRotationY + "_short" : m1.rotationY || 0, m1.rotationY, "rotationY", endRotations);
                    }
                    m2.skewX = (v.skewX == null) ? m1.skewX : _parseAngle(v.skewX, m1.skewX);

                    //note: for performance reasons, we combine all skewing into the skewX and rotation values, ignoring skewY but we must still record it so that we can discern how much of the overall skew is attributed to skewX vs. skewY. Otherwise, if the skewY would always act relative (tween skewY to 10deg, for example, multiple times and if we always combine things into skewX, we can't remember that skewY was 10 from last time). Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of -10 degrees.
                    m2.skewY = (v.skewY == null) ? m1.skewY : _parseAngle(v.skewY, m1.skewY);
                    if ((skewY = m2.skewY - m1.skewY)) {
                        m2.skewX += skewY;
                        m2.rotation += skewY;
                    }
                }

                if (_supports3D && v.force3D != null) {
                    m1.force3D = v.force3D;
                    hasChange = true;
                }

                m1.skewType = v.skewType || m1.skewType || CSSPlugin.defaultSkewType;

                has3D = (m1.force3D || m1.z || m1.rotationX || m1.rotationY || m2.z || m2.rotationX || m2.rotationY || m2.perspective);
                if (!has3D && v.scale != null) {
                    m2.scaleZ = 1; //no need to tween scaleZ.
                }

                while (--i > -1) {
                    p = _transformProps[i];
                    orig = m2[p] - m1[p];
                    if (orig > min || orig < -min || _forcePT[p] != null) {
                        hasChange = true;
                        pt = new CSSPropTween(m1, p, m1[p], orig, pt);
                        if (p in endRotations) {
                            pt.e = endRotations[p]; //directional rotations typically have compensated values during the tween, but we need to make sure they end at exactly what the user requested
                        }
                        pt.xs0 = 0; //ensures the value stays numeric in setRatio()
                        pt.plugin = plugin;
                        cssp._overwriteProps.push(pt.n);
                    }
                }

                orig = v.transformOrigin;
                if (orig || (_supports3D && has3D && m1.zOrigin)) { //if anything 3D is happening and there's a transformOrigin with a z component that's non-zero, we must ensure that the transformOrigin's z-component is set to 0 so that we can manually do those calculations to get around Safari bugs. Even if the user didn't specifically define a "transformOrigin" in this particular tween (maybe they did it via css directly).
                    if (_transformProp) {
                        hasChange = true;
                        p = _transformOriginProp;
                        orig = (orig || _getStyle(t, p, _cs, false, "50% 50%")) + ""; //cast as string to avoid errors
                        pt = new CSSPropTween(style, p, 0, 0, pt, -1, "transformOrigin");
                        pt.b = style[p];
                        pt.plugin = plugin;
                        if (_supports3D) {
                            copy = m1.zOrigin;
                            orig = orig.split(" ");
                            m1.zOrigin = ((orig.length > 2 && !(copy !== 0 && orig[2] === "0px")) ? parseFloat(orig[2]) : copy) || 0; //Safari doesn't handle the z part of transformOrigin correctly, so we'll manually handle it in the _set3DTransformRatio() method.
                            pt.xs0 = pt.e = orig[0] + " " + (orig[1] || "50%") + " 0px"; //we must define a z value of 0px specifically otherwise iOS 5 Safari will stick with the old one (if one was defined)!
                            pt = new CSSPropTween(m1, "zOrigin", 0, 0, pt, -1, pt.n); //we must create a CSSPropTween for the _gsTransform.zOrigin so that it gets reset properly at the beginning if the tween runs backward (as opposed to just setting m1.zOrigin here)
                            pt.b = copy;
                            pt.xs0 = pt.e = m1.zOrigin;
                        } else {
                            pt.xs0 = pt.e = orig;
                        }

                        //for older versions of IE (6-8), we need to manually calculate things inside the setRatio() function. We record origin x and y (ox and oy) and whether or not the values are percentages (oxp and oyp).
                    } else {
                        _parsePosition(orig + "", m1);
                    }
                }

                if (hasChange) {
                    cssp._transformType = (has3D || this._transformType === 3) ? 3 : 2; //quicker than calling cssp._enableTransforms();
                }
                return pt;
            },
            prefix: true
        });

        _registerComplexSpecialProp("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: true,
            color: true,
            multi: true,
            keyword: "inset"
        });

        _registerComplexSpecialProp("borderRadius", {
            defaultValue: "0px",
            parser: function (t, e, p, cssp, pt, plugin) {
                e = this.format(e);
                var props = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    style = t.style,
                    ea1, i, es2, bs2, bs, es, bn, en, w, h, esfx, bsfx, rel, hn, vn, em;
                w = parseFloat(t.offsetWidth);
                h = parseFloat(t.offsetHeight);
                ea1 = e.split(" ");
                for (i = 0; i < props.length; i++) { //if we're dealing with percentages, we must convert things separately for the horizontal and vertical axis!
                    if (this.p.indexOf("border")) { //older browsers used a prefix
                        props[i] = _checkPropPrefix(props[i]);
                    }
                    bs = bs2 = _getStyle(t, props[i], _cs, false, "0px");
                    if (bs.indexOf(" ") !== -1) {
                        bs2 = bs.split(" ");
                        bs = bs2[0];
                        bs2 = bs2[1];
                    }
                    es = es2 = ea1[i];
                    bn = parseFloat(bs);
                    bsfx = bs.substr((bn + "").length);
                    rel = (es.charAt(1) === "=");
                    if (rel) {
                        en = parseInt(es.charAt(0) + "1", 10);
                        es = es.substr(2);
                        en *= parseFloat(es);
                        esfx = es.substr((en + "").length - (en < 0 ? 1 : 0)) || "";
                    } else {
                        en = parseFloat(es);
                        esfx = es.substr((en + "").length);
                    }
                    if (esfx === "") {
                        esfx = _suffixMap[p] || bsfx;
                    }
                    if (esfx !== bsfx) {
                        hn = _convertToPixels(t, "borderLeft", bn, bsfx); //horizontal number (we use a bogus "borderLeft" property just because the _convertToPixels() method searches for the keywords "Left", "Right", "Top", and "Bottom" to determine of it's a horizontal or vertical property, and we need "border" in the name so that it knows it should measure relative to the element itself, not its parent.
                        vn = _convertToPixels(t, "borderTop", bn, bsfx); //vertical number
                        if (esfx === "%") {
                            bs = (hn / w * 100) + "%";
                            bs2 = (vn / h * 100) + "%";
                        } else if (esfx === "em") {
                            em = _convertToPixels(t, "borderLeft", 1, "em");
                            bs = (hn / em) + "em";
                            bs2 = (vn / em) + "em";
                        } else {
                            bs = hn + "px";
                            bs2 = vn + "px";
                        }
                        if (rel) {
                            es = (parseFloat(bs) + en) + esfx;
                            es2 = (parseFloat(bs2) + en) + esfx;
                        }
                    }
                    pt = _parseComplex(style, props[i], bs + " " + bs2, es + " " + es2, false, "0px", pt);
                }
                return pt;
            },
            prefix: true,
            formatter: _getFormatter("0px 0px 0px 0px", false, true)
        });
        _registerComplexSpecialProp("backgroundPosition", {
            defaultValue: "0 0",
            parser: function (t, e, p, cssp, pt, plugin) {
                var bp = "background-position",
                    cs = (_cs || _getComputedStyle(t, null)),
                    bs = this.format(((cs) ? _ieVers ? cs.getPropertyValue(bp + "-x") + " " + cs.getPropertyValue(bp + "-y") : cs.getPropertyValue(bp) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), //Internet Explorer doesn't report background-position correctly - we must query background-position-x and background-position-y and combine them (even in IE10). Before IE9, we must do the same with the currentStyle object and use camelCase
                    es = this.format(e),
                    ba, ea, i, pct, overlap, src;
                if ((bs.indexOf("%") !== -1) !== (es.indexOf("%") !== -1)) {
                    src = _getStyle(t, "backgroundImage").replace(_urlExp, "");
                    if (src && src !== "none") {
                        ba = bs.split(" ");
                        ea = es.split(" ");
                        _tempImg.setAttribute("src", src); //set the temp <img>'s src to the background-image so that we can measure its width/height
                        i = 2;
                        while (--i > -1) {
                            bs = ba[i];
                            pct = (bs.indexOf("%") !== -1);
                            if (pct !== (ea[i].indexOf("%") !== -1)) {
                                overlap = (i === 0) ? t.offsetWidth - _tempImg.width : t.offsetHeight - _tempImg.height;
                                ba[i] = pct ? (parseFloat(bs) / 100 * overlap) + "px" : (parseFloat(bs) / overlap * 100) + "%";
                            }
                        }
                        bs = ba.join(" ");
                    }
                }
                return this.parseComplex(t.style, bs, es, pt, plugin);
            },
            formatter: _parsePosition
        });
        _registerComplexSpecialProp("backgroundSize", {
            defaultValue: "0 0",
            formatter: _parsePosition
        });
        _registerComplexSpecialProp("perspective", {
            defaultValue: "0px",
            prefix: true
        });
        _registerComplexSpecialProp("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: true
        });
        _registerComplexSpecialProp("transformStyle", {
            prefix: true
        });
        _registerComplexSpecialProp("backfaceVisibility", {
            prefix: true
        });
        _registerComplexSpecialProp("userSelect", {
            prefix: true
        });
        _registerComplexSpecialProp("margin", {
            parser: _getEdgeParser("marginTop,marginRight,marginBottom,marginLeft")
        });
        _registerComplexSpecialProp("padding", {
            parser: _getEdgeParser("paddingTop,paddingRight,paddingBottom,paddingLeft")
        });
        _registerComplexSpecialProp("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (t, e, p, cssp, pt, plugin) {
                var b, cs, delim;
                if (_ieVers < 9) { //IE8 and earlier don't report a "clip" value in the currentStyle - instead, the values are split apart into clipTop, clipRight, clipBottom, and clipLeft. Also, in IE7 and earlier, the values inside rect() are space-delimited, not comma-delimited.
                    cs = t.currentStyle;
                    delim = _ieVers < 8 ? " " : ",";
                    b = "rect(" + cs.clipTop + delim + cs.clipRight + delim + cs.clipBottom + delim + cs.clipLeft + ")";
                    e = this.format(e).split(",").join(delim);
                } else {
                    b = this.format(_getStyle(t, this.p, _cs, false, this.dflt));
                    e = this.format(e);
                }
                return this.parseComplex(t.style, b, e, pt, plugin);
            }
        });
        _registerComplexSpecialProp("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: true,
            multi: true
        });
        _registerComplexSpecialProp("autoRound,strictUnits", {
            parser: function (t, e, p, cssp, pt) {
                return pt;
            }
        }); //just so that we can ignore these properties (not tween them)
        _registerComplexSpecialProp("border", {
            defaultValue: "0px solid #000",
            parser: function (t, e, p, cssp, pt, plugin) {
                return this.parseComplex(t.style, this.format(_getStyle(t, "borderTopWidth", _cs, false, "0px") + " " + _getStyle(t, "borderTopStyle", _cs, false, "solid") + " " + _getStyle(t, "borderTopColor", _cs, false, "#000")), this.format(e), pt, plugin);
            },
            color: true,
            formatter: function (v) {
                var a = v.split(" ");
                return a[0] + " " + (a[1] || "solid") + " " + (v.match(_colorExp) || ["#000"])[0];
            }
        });
        _registerComplexSpecialProp("borderWidth", {
            parser: _getEdgeParser("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }); //Firefox doesn't pick up on borderWidth set in style sheets (only inline).
        _registerComplexSpecialProp("float,cssFloat,styleFloat", {
            parser: function (t, e, p, cssp, pt, plugin) {
                var s = t.style,
                    prop = ("cssFloat" in s) ? "cssFloat" : "styleFloat";
                return new CSSPropTween(s, prop, 0, 0, pt, -1, p, false, 0, s[prop], e);
            }
        });

        //opacity-related
        var _setIEOpacityRatio = function (v) {
            var t = this.t, //refers to the element's style property
                filters = t.filter || _getStyle(this.data, "filter"),
                val = (this.s + this.c * v) | 0,
                skip;
            if (val === 100) { //for older versions of IE that need to use a filter to apply opacity, we should remove the filter if opacity hits 1 in order to improve performance, but make sure there isn't a transform (matrix) or gradient in the filters.
                if (filters.indexOf("atrix(") === -1 && filters.indexOf("radient(") === -1 && filters.indexOf("oader(") === -1) {
                    t.removeAttribute("filter");
                    skip = (!_getStyle(this.data, "filter")); //if a class is applied that has an alpha filter, it will take effect (we don't want that), so re-apply our alpha filter in that case. We must first remove it and then check.
                } else {
                    t.filter = filters.replace(_alphaFilterExp, "");
                    skip = true;
                }
            }
            if (!skip) {
                if (this.xn1) {
                    t.filter = filters = filters || ("alpha(opacity=" + val + ")"); //works around bug in IE7/8 that prevents changes to "visibility" from being applied properly if the filter is changed to a different alpha on the same frame.
                }
                if (filters.indexOf("pacity") === -1) { //only used if browser doesn't support the standard opacity style property (IE 7 and 8). We omit the "O" to avoid case-sensitivity issues
                    if (val !== 0 || !this.xn1) { //bugs in IE7/8 won't render the filter properly if opacity is ADDED on the same frame/render as "visibility" changes (this.xn1 is 1 if this tween is an "autoAlpha" tween)
                        t.filter = filters + " alpha(opacity=" + val + ")"; //we round the value because otherwise, bugs in IE7/8 can prevent "visibility" changes from being applied properly.
                    }
                } else {
                    t.filter = filters.replace(_opacityExp, "opacity=" + val);
                }
            }
        };
        _registerComplexSpecialProp("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function (t, e, p, cssp, pt, plugin) {
                var b = parseFloat(_getStyle(t, "opacity", _cs, false, "1")),
                    style = t.style,
                    isAutoAlpha = (p === "autoAlpha");
                if (typeof (e) === "string" && e.charAt(1) === "=") {
                    e = ((e.charAt(0) === "-") ? -1 : 1) * parseFloat(e.substr(2)) + b;
                }
                if (isAutoAlpha && b === 1 && _getStyle(t, "visibility", _cs) === "hidden" && e !== 0) { //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
                    b = 0;
                }
                if (_supportsOpacity) {
                    pt = new CSSPropTween(style, "opacity", b, e - b, pt);
                } else {
                    pt = new CSSPropTween(style, "opacity", b * 100, (e - b) * 100, pt);
                    pt.xn1 = isAutoAlpha ? 1 : 0; //we need to record whether or not this is an autoAlpha so that in the setRatio(), we know to duplicate the setting of the alpha in order to work around a bug in IE7 and IE8 that prevents changes to "visibility" from taking effect if the filter is changed to a different alpha(opacity) at the same time. Setting it to the SAME value first, then the new value works around the IE7/8 bug.
                    style.zoom = 1; //helps correct an IE issue.
                    pt.type = 2;
                    pt.b = "alpha(opacity=" + pt.s + ")";
                    pt.e = "alpha(opacity=" + (pt.s + pt.c) + ")";
                    pt.data = t;
                    pt.plugin = plugin;
                    pt.setRatio = _setIEOpacityRatio;
                }
                if (isAutoAlpha) { //we have to create the "visibility" PropTween after the opacity one in the linked list so that they run in the order that works properly in IE8 and earlier
                    pt = new CSSPropTween(style, "visibility", 0, 0, pt, -1, null, false, 0, ((b !== 0) ? "inherit" : "hidden"), ((e === 0) ? "hidden" : "inherit"));
                    pt.xs0 = "inherit";
                    cssp._overwriteProps.push(pt.n);
                    cssp._overwriteProps.push(p);
                }
                return pt;
            }
        });


        var _removeProp = function (s, p) {
                if (p) {
                    if (s.removeProperty) {
                        if (p.substr(0, 2) === "ms") { //Microsoft browsers don't conform to the standard of capping the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
                            p = "M" + p.substr(1);
                        }
                        s.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
                    } else { //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
                        s.removeAttribute(p);
                    }
                }
            },
            _setClassNameRatio = function (v) {
                this.t._gsClassPT = this;
                if (v === 1 || v === 0) {
                    this.t.setAttribute("class", (v === 0) ? this.b : this.e);
                    var mpt = this.data, //first MiniPropTween
                        s = this.t.style;
                    while (mpt) {
                        if (!mpt.v) {
                            _removeProp(s, mpt.p);
                        } else {
                            s[mpt.p] = mpt.v;
                        }
                        mpt = mpt._next;
                    }
                    if (v === 1 && this.t._gsClassPT === this) {
                        this.t._gsClassPT = null;
                    }
                } else if (this.t.getAttribute("class") !== this.e) {
                    this.t.setAttribute("class", this.e);
                }
            };
        _registerComplexSpecialProp("className", {
            parser: function (t, e, p, cssp, pt, plugin, vars) {
                var b = t.getAttribute("class") || "", //don't use t.className because it doesn't work consistently on SVG elements; getAttribute("class") and setAttribute("class", value") is more reliable.
                    cssText = t.style.cssText,
                    difData, bs, cnpt, cnptLookup, mpt;
                pt = cssp._classNamePT = new CSSPropTween(t, p, 0, 0, pt, 2);
                pt.setRatio = _setClassNameRatio;
                pt.pr = -11;
                _hasPriority = true;
                pt.b = b;
                bs = _getAllStyles(t, _cs);
                //if there's a className tween already operating on the target, force it to its end so that the necessary inline styles are removed and the class name is applied before we determine the end state (we don't want inline styles interfering that were there just for class-specific values)
                cnpt = t._gsClassPT;
                if (cnpt) {
                    cnptLookup = {};
                    mpt = cnpt.data; //first MiniPropTween which stores the inline styles - we need to force these so that the inline styles don't contaminate things. Otherwise, there's a small chance that a tween could start and the inline values match the destination values and they never get cleaned.
                    while (mpt) {
                        cnptLookup[mpt.p] = 1;
                        mpt = mpt._next;
                    }
                    cnpt.setRatio(1);
                }
                t._gsClassPT = pt;
                pt.e = (e.charAt(1) !== "=") ? e : b.replace(new RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ((e.charAt(0) === "+") ? " " + e.substr(2) : "");
                if (cssp._tween._duration) { //if it's a zero-duration tween, there's no need to tween anything or parse the data. In fact, if we switch classes temporarily (which we must do for proper parsing) and the class has a transition applied, it could cause a quick flash to the end state and back again initially in some browsers.
                    t.setAttribute("class", pt.e);
                    difData = _cssDif(t, bs, _getAllStyles(t), vars, cnptLookup);
                    t.setAttribute("class", b);
                    pt.data = difData.firstMPT;
                    t.style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
                    pt = pt.xfirst = cssp.parse(t, difData.difs, pt, plugin); //we record the CSSPropTween as the xfirst so that we can handle overwriting propertly (if "className" gets overwritten, we must kill all the properties associated with the className part of the tween, so we can loop through from xfirst to the pt itself)
                }
                return pt;
            }
        });


        var _setClearPropsRatio = function (v) {
            if (v === 1 || v === 0)
                if (this.data._totalTime === this.data._totalDuration && this.data.data !== "isFromStart") { //this.data refers to the tween. Only clear at the END of the tween (remember, from() tweens make the ratio go from 1 to 0, so we can't just check that and if the tween is the zero-duration one that's created internally to render the starting values in a from() tween, ignore that because otherwise, for example, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in).
                    var s = this.t.style,
                        transformParse = _specialProps.transform.parse,
                        a, p, i, clearTransform;
                    if (this.e === "all") {
                        s.cssText = "";
                        clearTransform = true;
                    } else {
                        a = this.e.split(",");
                        i = a.length;
                        while (--i > -1) {
                            p = a[i];
                            if (_specialProps[p]) {
                                if (_specialProps[p].parse === transformParse) {
                                    clearTransform = true;
                                } else {
                                    p = (p === "transformOrigin") ? _transformOriginProp : _specialProps[p].p; //ensures that special properties use the proper browser-specific property name, like "scaleX" might be "-webkit-transform" or "boxShadow" might be "-moz-box-shadow"
                                }
                            }
                            _removeProp(s, p);
                        }
                    }
                    if (clearTransform) {
                        _removeProp(s, _transformProp);
                        if (this.t._gsTransform) {
                            delete this.t._gsTransform;
                        }
                    }

                }
        };
        _registerComplexSpecialProp("clearProps", {
            parser: function (t, e, p, cssp, pt) {
                pt = new CSSPropTween(t, p, 0, 0, pt, 2);
                pt.setRatio = _setClearPropsRatio;
                pt.e = e;
                pt.pr = -10;
                pt.data = cssp._tween;
                _hasPriority = true;
                return pt;
            }
        });

        p = "bezier,throwProps,physicsProps,physics2D".split(",");
        i = p.length;
        while (i--) {
            _registerPluginProp(p[i]);
        }








        p = CSSPlugin.prototype;
        p._firstPT = null;

        //gets called when the tween renders for the first time. This kicks everything off, recording start/end values, etc.
        p._onInitTween = function (target, vars, tween) {
            if (!target.nodeType) { //css is only for dom elements
                return false;
            }
            this._target = target;
            this._tween = tween;
            this._vars = vars;
            _autoRound = vars.autoRound;
            _hasPriority = false;
            _suffixMap = vars.suffixMap || CSSPlugin.suffixMap;
            _cs = _getComputedStyle(target, "");
            _overwriteProps = this._overwriteProps;
            var style = target.style,
                v, pt, pt2, first, last, next, zIndex, tpt, threeD;
            if (_reqSafariFix)
                if (style.zIndex === "") {
                    v = _getStyle(target, "zIndex", _cs);
                    if (v === "auto" || v === "") {
                        //corrects a bug in [non-Android] Safari that prevents it from repainting elements in their new positions if they don't have a zIndex set. We also can't just apply this inside _parseTransform() because anything that's moved in any way (like using "left" or "top" instead of transforms like "x" and "y") can be affected, so it is best to ensure that anything that's tweening has a z-index. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly. Plus zIndex is less memory-intensive.
                        this._addLazySet(style, "zIndex", 0);
                    }
                }

            if (typeof (vars) === "string") {
                first = style.cssText;
                v = _getAllStyles(target, _cs);
                style.cssText = first + ";" + vars;
                v = _cssDif(target, v, _getAllStyles(target)).difs;
                if (!_supportsOpacity && _opacityValExp.test(vars)) {
                    v.opacity = parseFloat(RegExp.$1);
                }
                vars = v;
                style.cssText = first;
            }
            this._firstPT = pt = this.parse(target, vars, null);

            if (this._transformType) {
                threeD = (this._transformType === 3);
                if (!_transformProp) {
                    style.zoom = 1; //helps correct an IE issue.
                } else if (_isSafari) {
                    _reqSafariFix = true;
                    //if zIndex isn't set, iOS Safari doesn't repaint things correctly sometimes (seemingly at random).
                    if (style.zIndex === "") {
                        zIndex = _getStyle(target, "zIndex", _cs);
                        if (zIndex === "auto" || zIndex === "") {
                            this._addLazySet(style, "zIndex", 0);
                        }
                    }
                    //Setting WebkitBackfaceVisibility corrects 3 bugs:
                    // 1) [non-Android] Safari skips rendering changes to "top" and "left" that are made on the same frame/render as a transform update.
                    // 2) iOS Safari sometimes neglects to repaint elements in their new positions. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly.
                    // 3) Safari sometimes displayed odd artifacts when tweening the transform (or WebkitTransform) property, like ghosts of the edges of the element remained. Definitely a browser bug.
                    //Note: we allow the user to override the auto-setting by defining WebkitBackfaceVisibility in the vars of the tween.
                    if (_isSafariLT6) {
                        this._addLazySet(style, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (threeD ? "visible" : "hidden"));
                    }
                }
                pt2 = pt;
                while (pt2 && pt2._next) {
                    pt2 = pt2._next;
                }
                tpt = new CSSPropTween(target, "transform", 0, 0, null, 2);
                this._linkCSSP(tpt, null, pt2);
                tpt.setRatio = (threeD && _supports3D) ? _set3DTransformRatio : _transformProp ? _set2DTransformRatio : _setIETransformRatio;
                tpt.data = this._transform || _getTransform(target, _cs, true);
                _overwriteProps.pop(); //we don't want to force the overwrite of all "transform" tweens of the target - we only care about individual transform properties like scaleX, rotation, etc. The CSSPropTween constructor automatically adds the property to _overwriteProps which is why we need to pop() here.
            }

            if (_hasPriority) {
                //reorders the linked list in order of pr (priority)
                while (pt) {
                    next = pt._next;
                    pt2 = first;
                    while (pt2 && pt2.pr > pt.pr) {
                        pt2 = pt2._next;
                    }
                    if ((pt._prev = pt2 ? pt2._prev : last)) {
                        pt._prev._next = pt;
                    } else {
                        first = pt;
                    }
                    if ((pt._next = pt2)) {
                        pt2._prev = pt;
                    } else {
                        last = pt;
                    }
                    pt = next;
                }
                this._firstPT = first;
            }
            return true;
        };


        p.parse = function (target, vars, pt, plugin) {
            var style = target.style,
                p, sp, bn, en, bs, es, bsfx, esfx, isStr, rel;
            for (p in vars) {
                es = vars[p]; //ending value string
                sp = _specialProps[p]; //SpecialProp lookup.
                if (sp) {
                    pt = sp.parse(target, es, p, this, pt, plugin, vars);

                } else {
                    bs = _getStyle(target, p, _cs) + "";
                    isStr = (typeof (es) === "string");
                    if (p === "color" || p === "fill" || p === "stroke" || p.indexOf("Color") !== -1 || (isStr && _rgbhslExp.test(es))) { //Opera uses background: to define color sometimes in addition to backgroundColor:
                        if (!isStr) {
                            es = _parseColor(es);
                            es = ((es.length > 3) ? "rgba(" : "rgb(") + es.join(",") + ")";
                        }
                        pt = _parseComplex(style, p, bs, es, true, "transparent", pt, 0, plugin);

                    } else if (isStr && (es.indexOf(" ") !== -1 || es.indexOf(",") !== -1)) {
                        pt = _parseComplex(style, p, bs, es, true, null, pt, 0, plugin);

                    } else {
                        bn = parseFloat(bs);
                        bsfx = (bn || bn === 0) ? bs.substr((bn + "").length) : ""; //remember, bs could be non-numeric like "normal" for fontWeight, so we should default to a blank suffix in that case.

                        if (bs === "" || bs === "auto") {
                            if (p === "width" || p === "height") {
                                bn = _getDimension(target, p, _cs);
                                bsfx = "px";
                            } else if (p === "left" || p === "top") {
                                bn = _calculateOffset(target, p, _cs);
                                bsfx = "px";
                            } else {
                                bn = (p !== "opacity") ? 0 : 1;
                                bsfx = "";
                            }
                        }

                        rel = (isStr && es.charAt(1) === "=");
                        if (rel) {
                            en = parseInt(es.charAt(0) + "1", 10);
                            es = es.substr(2);
                            en *= parseFloat(es);
                            esfx = es.replace(_suffixExp, "");
                        } else {
                            en = parseFloat(es);
                            esfx = isStr ? es.substr((en + "").length) || "" : "";
                        }

                        if (esfx === "") {
                            esfx = (p in _suffixMap) ? _suffixMap[p] : bsfx; //populate the end suffix, prioritizing the map, then if none is found, use the beginning suffix.
                        }

                        es = (en || en === 0) ? (rel ? en + bn : en) + esfx : vars[p]; //ensures that any += or -= prefixes are taken care of. Record the end value before normalizing the suffix because we always want to end the tween on exactly what they intended even if it doesn't match the beginning value's suffix.

                        //if the beginning/ending suffixes don't match, normalize them...
                        if (bsfx !== esfx)
                            if (esfx !== "")
                                if (en || en === 0)
                                    if (bn) { //note: if the beginning value (bn) is 0, we don't need to convert units!
                                        bn = _convertToPixels(target, p, bn, bsfx);
                                        if (esfx === "%") {
                                            bn /= _convertToPixels(target, p, 100, "%") / 100;
                                            if (vars.strictUnits !== true) { //some browsers report only "px" values instead of allowing "%" with getComputedStyle(), so we assume that if we're tweening to a %, we should start there too unless strictUnits:true is defined. This approach is particularly useful for responsive designs that use from() tweens.
                                                bs = bn + "%";
                                            }

                                        } else if (esfx === "em") {
                                            bn /= _convertToPixels(target, p, 1, "em");

                                            //otherwise convert to pixels.
                                        } else if (esfx !== "px") {
                                            en = _convertToPixels(target, p, en, esfx);
                                            esfx = "px"; //we don't use bsfx after this, so we don't need to set it to px too.
                                        }
                                        if (rel)
                                            if (en || en === 0) {
                                                es = (en + bn) + esfx; //the changes we made affect relative calculations, so adjust the end value here.
                                            }
                                    }

                        if (rel) {
                            en += bn;
                        }

                        if ((bn || bn === 0) && (en || en === 0)) { //faster than isNaN(). Also, previously we required en !== bn but that doesn't really gain much performance and it prevents _parseToProxy() from working properly if beginning and ending values match but need to get tweened by an external plugin anyway. For example, a bezier tween where the target starts at left:0 and has these points: [{left:50},{left:0}] wouldn't work properly because when parsing the last point, it'd match the first (current) one and a non-tweening CSSPropTween would be recorded when we actually need a normal tween (type:0) so that things get updated during the tween properly.
                            pt = new CSSPropTween(style, p, bn, en - bn, pt, 0, p, (_autoRound !== false && (esfx === "px" || p === "zIndex")), 0, bs, es);
                            pt.xs0 = esfx;
                            //DEBUG: _log("tween "+p+" from "+pt.b+" ("+bn+esfx+") to "+pt.e+" with suffix: "+pt.xs0);
                        } else if (style[p] === undefined || !es && (es + "" === "NaN" || es == null)) {
                            _log("invalid " + p + " tween value: " + vars[p]);
                        } else {
                            pt = new CSSPropTween(style, p, en || bn || 0, 0, pt, -1, p, false, 0, bs, es);
                            pt.xs0 = (es === "none" && (p === "display" || p.indexOf("Style") !== -1)) ? bs : es; //intermediate value should typically be set immediately (end value) except for "display" or things like borderTopStyle, borderBottomStyle, etc. which should use the beginning value during the tween.
                            //DEBUG: _log("non-tweening value "+p+": "+pt.xs0);
                        }
                    }
                }
                if (plugin)
                    if (pt && !pt.plugin) {
                        pt.plugin = plugin;
                    }
            }
            return pt;
        };


        //gets called every time the tween updates, passing the new ratio (typically a value between 0 and 1, but not always (for example, if an Elastic.easeOut is used, the value can jump above 1 mid-tween). It will always start and 0 and end at 1.
        p.setRatio = function (v) {
            var pt = this._firstPT,
                min = 0.000001,
                val, str, i;

            //at the end of the tween, we set the values to exactly what we received in order to make sure non-tweening values (like "position" or "float" or whatever) are set and so that if the beginning/ending suffixes (units) didn't match and we normalized to px, the value that the user passed in is used here. We check to see if the tween is at its beginning in case it's a from() tween in which case the ratio will actually go from 1 to 0 over the course of the tween (backwards).
            if (v === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0)) {
                while (pt) {
                    if (pt.type !== 2) {
                        pt.t[pt.p] = pt.e;
                    } else {
                        pt.setRatio(v);
                    }
                    pt = pt._next;
                }

            } else if (v || !(this._tween._time === this._tween._duration || this._tween._time === 0) || this._tween._rawPrevTime === -0.000001) {
                while (pt) {
                    val = pt.c * v + pt.s;
                    if (pt.r) {
                        val = Math.round(val);
                    } else if (val < min)
                        if (val > -min) {
                            val = 0;
                        }
                    if (!pt.type) {
                        pt.t[pt.p] = val + pt.xs0;
                    } else if (pt.type === 1) { //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
                        i = pt.l;
                        if (i === 2) {
                            pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2;
                        } else if (i === 3) {
                            pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3;
                        } else if (i === 4) {
                            pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4;
                        } else if (i === 5) {
                            pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4 + pt.xn4 + pt.xs5;
                        } else {
                            str = pt.xs0 + val + pt.xs1;
                            for (i = 1; i < pt.l; i++) {
                                str += pt["xn" + i] + pt["xs" + (i + 1)];
                            }
                            pt.t[pt.p] = str;
                        }

                    } else if (pt.type === -1) { //non-tweening value
                        pt.t[pt.p] = pt.xs0;

                    } else if (pt.setRatio) { //custom setRatio() for things like SpecialProps, external plugins, etc.
                        pt.setRatio(v);
                    }
                    pt = pt._next;
                }

                //if the tween is reversed all the way back to the beginning, we need to restore the original values which may have different units (like % instead of px or em or whatever).
            } else {
                while (pt) {
                    if (pt.type !== 2) {
                        pt.t[pt.p] = pt.b;
                    } else {
                        pt.setRatio(v);
                    }
                    pt = pt._next;
                }
            }
        };

        /**
         * @private
         * Forces rendering of the target's transforms (rotation, scale, etc.) whenever the CSSPlugin's setRatio() is called.
         * Basically, this tells the CSSPlugin to create a CSSPropTween (type 2) after instantiation that runs last in the linked
         * list and calls the appropriate (3D or 2D) rendering function. We separate this into its own method so that we can call
         * it from other plugins like BezierPlugin if, for example, it needs to apply an autoRotation and this CSSPlugin
         * doesn't have any transform-related properties of its own. You can call this method as many times as you
         * want and it won't create duplicate CSSPropTweens.
         *
         * @param {boolean} threeD if true, it should apply 3D tweens (otherwise, just 2D ones are fine and typically faster)
         */
        p._enableTransforms = function (threeD) {
            this._transformType = (threeD || this._transformType === 3) ? 3 : 2;
            this._transform = this._transform || _getTransform(this._target, _cs, true); //ensures that the element has a _gsTransform property with the appropriate values.
        };

        var lazySet = function (v) {
            this.t[this.p] = this.e;
            this.data._linkCSSP(this, this._next, null, true); //we purposefully keep this._next even though it'd make sense to null it, but this is a performance optimization, as this happens during the while (pt) {} loop in setRatio() at the bottom of which it sets pt = pt._next, so if we null it, the linked list will be broken in that loop.
        };
        /** @private Gives us a way to set a value on the first render (and only the first render). **/
        p._addLazySet = function (t, p, v) {
            var pt = this._firstPT = new CSSPropTween(t, p, 0, 0, this._firstPT, 2);
            pt.e = v;
            pt.setRatio = lazySet;
            pt.data = this;
        };

        /** @private **/
        p._linkCSSP = function (pt, next, prev, remove) {
            if (pt) {
                if (next) {
                    next._prev = pt;
                }
                if (pt._next) {
                    pt._next._prev = pt._prev;
                }
                if (pt._prev) {
                    pt._prev._next = pt._next;
                } else if (this._firstPT === pt) {
                    this._firstPT = pt._next;
                    remove = true; //just to prevent resetting this._firstPT 5 lines down in case pt._next is null. (optimized for speed)
                }
                if (prev) {
                    prev._next = pt;
                } else if (!remove && this._firstPT === null) {
                    this._firstPT = pt;
                }
                pt._next = next;
                pt._prev = prev;
            }
            return pt;
        };

        //we need to make sure that if alpha or autoAlpha is killed, opacity is too. And autoAlpha affects the "visibility" property.
        p._kill = function (lookup) {
            var copy = lookup,
                pt, p, xfirst;
            if (lookup.autoAlpha || lookup.alpha) {
                copy = {};
                for (p in lookup) { //copy the lookup so that we're not changing the original which may be passed elsewhere.
                    copy[p] = lookup[p];
                }
                copy.opacity = 1;
                if (copy.autoAlpha) {
                    copy.visibility = 1;
                }
            }
            if (lookup.className && (pt = this._classNamePT)) { //for className tweens, we need to kill any associated CSSPropTweens too; a linked list starts at the className's "xfirst".
                xfirst = pt.xfirst;
                if (xfirst && xfirst._prev) {
                    this._linkCSSP(xfirst._prev, pt._next, xfirst._prev._prev); //break off the prev
                } else if (xfirst === this._firstPT) {
                    this._firstPT = pt._next;
                }
                if (pt._next) {
                    this._linkCSSP(pt._next, pt._next._next, xfirst._prev);
                }
                this._classNamePT = null;
            }
            return TweenPlugin.prototype._kill.call(this, copy);
        };



        //used by cascadeTo() for gathering all the style properties of each child element into an array for comparison.
        var _getChildStyles = function (e, props, targets) {
            var children, i, child, type;
            if (e.slice) {
                i = e.length;
                while (--i > -1) {
                    _getChildStyles(e[i], props, targets);
                }
                return;
            }
            children = e.childNodes;
            i = children.length;
            while (--i > -1) {
                child = children[i];
                type = child.type;
                if (child.style) {
                    props.push(_getAllStyles(child));
                    if (targets) {
                        targets.push(child);
                    }
                }
                if ((type === 1 || type === 9 || type === 11) && child.childNodes.length) {
                    _getChildStyles(child, props, targets);
                }
            }
        };

        /**
         * Typically only useful for className tweens that may affect child elements, this method creates a TweenLite
         * and then compares the style properties of all the target's child elements at the tween's start and end, and
         * if any are different, it also creates tweens for those and returns an array containing ALL of the resulting
         * tweens (so that you can easily add() them to a TimelineLite, for example). The reason this functionality is
         * wrapped into a separate static method of CSSPlugin instead of being integrated into all regular className tweens
         * is because it creates entirely new tweens that may have completely different targets than the original tween,
         * so if they were all lumped into the original tween instance, it would be inconsistent with the rest of the API
         * and it would create other problems. For example:
         *  - If I create a tween of elementA, that tween instance may suddenly change its target to include 50 other elements (unintuitive if I specifically defined the target I wanted)
         *  - We can't just create new independent tweens because otherwise, what happens if the original/parent tween is reversed or pause or dropped into a TimelineLite for tight control? You'd expect that tween's behavior to affect all the others.
         *  - Analyzing every style property of every child before and after the tween is an expensive operation when there are many children, so this behavior shouldn't be imposed on all className tweens by default, especially since it's probably rare that this extra functionality is needed.
         *
         * @param {Object} target object to be tweened
         * @param {number} Duration in seconds (or frames for frames-based tweens)
         * @param {Object} Object containing the end values, like {className:"newClass", ease:Linear.easeNone}
         * @return {Array} An array of TweenLite instances
         */
        CSSPlugin.cascadeTo = function (target, duration, vars) {
            var tween = TweenLite.to(target, duration, vars),
                results = [tween],
                b = [],
                e = [],
                targets = [],
                _reservedProps = TweenLite._internals.reservedProps,
                i, difs, p;
            target = tween._targets || tween.target;
            _getChildStyles(target, b, targets);
            tween.render(duration, true);
            _getChildStyles(target, e);
            tween.render(0, true);
            tween._enabled(true);
            i = targets.length;
            while (--i > -1) {
                difs = _cssDif(targets[i], b[i], e[i]);
                if (difs.firstMPT) {
                    difs = difs.difs;
                    for (p in vars) {
                        if (_reservedProps[p]) {
                            difs[p] = vars[p];
                        }
                    }
                    results.push(TweenLite.to(targets[i], duration, difs));
                }
            }
            return results;
        };

        TweenPlugin.activate([CSSPlugin]);
        return CSSPlugin;

    }, true);









    /*
     * ----------------------------------------------------------------
     * RoundPropsPlugin
     * ----------------------------------------------------------------
     */
    (function () {

        var RoundPropsPlugin = _gsScope._gsDefine.plugin({
                propName: "roundProps",
                priority: -1,
                API: 2,

                //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
                init: function (target, value, tween) {
                    this._tween = tween;
                    return true;
                }

            }),
            p = RoundPropsPlugin.prototype;

        p._onInitAllProps = function () {
            var tween = this._tween,
                rp = (tween.vars.roundProps instanceof Array) ? tween.vars.roundProps : tween.vars.roundProps.split(","),
                i = rp.length,
                lookup = {},
                rpt = tween._propLookup.roundProps,
                prop, pt, next;
            while (--i > -1) {
                lookup[rp[i]] = 1;
            }
            i = rp.length;
            while (--i > -1) {
                prop = rp[i];
                pt = tween._firstPT;
                while (pt) {
                    next = pt._next; //record here, because it may get removed
                    if (pt.pg) {
                        pt.t._roundProps(lookup, true);
                    } else if (pt.n === prop) {
                        this._add(pt.t, prop, pt.s, pt.c);
                        //remove from linked list
                        if (next) {
                            next._prev = pt._prev;
                        }
                        if (pt._prev) {
                            pt._prev._next = next;
                        } else if (tween._firstPT === pt) {
                            tween._firstPT = next;
                        }
                        pt._next = pt._prev = null;
                        tween._propLookup[prop] = rpt;
                    }
                    pt = next;
                }
            }
            return false;
        };

        p._add = function (target, p, s, c) {
            this._addTween(target, p, s, s + c, p, true);
            this._overwriteProps.push(p);
        };

    }());









    /*
     * ----------------------------------------------------------------
     * AttrPlugin
     * ----------------------------------------------------------------
     */
    _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.3.3",

        //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
        init: function (target, value, tween) {
            var p, start, end;
            if (typeof (target.setAttribute) !== "function") {
                return false;
            }
            this._target = target;
            this._proxy = {};
            this._start = {}; // we record start and end values exactly as they are in case they're strings (not numbers) - we need to be able to revert to them cleanly.
            this._end = {};
            for (p in value) {
                this._start[p] = this._proxy[p] = start = target.getAttribute(p);
                end = this._addTween(this._proxy, p, parseFloat(start), value[p], p);
                this._end[p] = end ? end.s + end.c : value[p];
                this._overwriteProps.push(p);
            }
            return true;
        },

        //called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
        set: function (ratio) {
            this._super.setRatio.call(this, ratio);
            var props = this._overwriteProps,
                i = props.length,
                lookup = (ratio === 1) ? this._end : ratio ? this._proxy : this._start,
                p;
            while (--i > -1) {
                p = props[i];
                this._target.setAttribute(p, lookup[p] + "");
            }
        }

    });









    /*
     * ----------------------------------------------------------------
     * DirectionalRotationPlugin
     * ----------------------------------------------------------------
     */
    _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.2.1",
        API: 2,

        //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
        init: function (target, value, tween) {
            if (typeof (value) !== "object") {
                value = {
                    rotation: value
                };
            }
            this.finals = {};
            var cap = (value.useRadians === true) ? Math.PI * 2 : 360,
                min = 0.000001,
                p, v, start, end, dif, split;
            for (p in value) {
                if (p !== "useRadians") {
                    split = (value[p] + "").split("_");
                    v = split[0];
                    start = parseFloat((typeof (target[p]) !== "function") ? target[p] : target[((p.indexOf("set") || typeof (target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3))]());
                    end = this.finals[p] = (typeof (v) === "string" && v.charAt(1) === "=") ? start + parseInt(v.charAt(0) + "1", 10) * Number(v.substr(2)) : Number(v) || 0;
                    dif = end - start;
                    if (split.length) {
                        v = split.join("_");
                        if (v.indexOf("short") !== -1) {
                            dif = dif % cap;
                            if (dif !== dif % (cap / 2)) {
                                dif = (dif < 0) ? dif + cap : dif - cap;
                            }
                        }
                        if (v.indexOf("_cw") !== -1 && dif < 0) {
                            dif = ((dif + cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
                        } else if (v.indexOf("ccw") !== -1 && dif > 0) {
                            dif = ((dif - cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
                        }
                    }
                    if (dif > min || dif < -min) {
                        this._addTween(target, p, start, start + dif, p);
                        this._overwriteProps.push(p);
                    }
                }
            }
            return true;
        },

        //called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
        set: function (ratio) {
            var pt;
            if (ratio !== 1) {
                this._super.setRatio.call(this, ratio);
            } else {
                pt = this._firstPT;
                while (pt) {
                    if (pt.f) {
                        pt.t[pt.p](this.finals[pt.p]);
                    } else {
                        pt.t[pt.p] = this.finals[pt.p];
                    }
                    pt = pt._next;
                }
            }
        }

    })._autoCSS = true;









    /*
     * ----------------------------------------------------------------
     * EasePack
     * ----------------------------------------------------------------
     */
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (Ease) {

        var w = (_gsScope.GreenSockGlobals || _gsScope),
            gs = w.com.greensock,
            _2PI = Math.PI * 2,
            _HALF_PI = Math.PI / 2,
            _class = gs._class,
            _create = function (n, f) {
                var C = _class("easing." + n, function () {}, true),
                    p = C.prototype = new Ease();
                p.constructor = C;
                p.getRatio = f;
                return C;
            },
            _easeReg = Ease.register || function () {}, //put an empty function in place just as a safety measure in case someone loads an OLD version of TweenLite.js where Ease.register doesn't exist.
            _wrap = function (name, EaseOut, EaseIn, EaseInOut, aliases) {
                var C = _class("easing." + name, {
                    easeOut: new EaseOut(),
                    easeIn: new EaseIn(),
                    easeInOut: new EaseInOut()
                }, true);
                _easeReg(C, name);
                return C;
            },
            EasePoint = function (time, value, next) {
                this.t = time;
                this.v = value;
                if (next) {
                    this.next = next;
                    next.prev = this;
                    this.c = next.v - value;
                    this.gap = next.t - time;
                }
            },

            //Back
            _createBack = function (n, f) {
                var C = _class("easing." + n, function (overshoot) {
                        this._p1 = (overshoot || overshoot === 0) ? overshoot : 1.70158;
                        this._p2 = this._p1 * 1.525;
                    }, true),
                    p = C.prototype = new Ease();
                p.constructor = C;
                p.getRatio = f;
                p.config = function (overshoot) {
                    return new C(overshoot);
                };
                return C;
            },

            Back = _wrap("Back",
                _createBack("BackOut", function (p) {
                    return ((p = p - 1) * p * ((this._p1 + 1) * p + this._p1) + 1);
                }),
                _createBack("BackIn", function (p) {
                    return p * p * ((this._p1 + 1) * p - this._p1);
                }),
                _createBack("BackInOut", function (p) {
                    return ((p *= 2) < 1) ? 0.5 * p * p * ((this._p2 + 1) * p - this._p2) : 0.5 * ((p -= 2) * p * ((this._p2 + 1) * p + this._p2) + 2);
                })
            ),


            //SlowMo
            SlowMo = _class("easing.SlowMo", function (linearRatio, power, yoyoMode) {
                power = (power || power === 0) ? power : 0.7;
                if (linearRatio == null) {
                    linearRatio = 0.7;
                } else if (linearRatio > 1) {
                    linearRatio = 1;
                }
                this._p = (linearRatio !== 1) ? power : 0;
                this._p1 = (1 - linearRatio) / 2;
                this._p2 = linearRatio;
                this._p3 = this._p1 + this._p2;
                this._calcEnd = (yoyoMode === true);
            }, true),
            p = SlowMo.prototype = new Ease(),
            SteppedEase, RoughEase, _createElastic;

        p.constructor = SlowMo;
        p.getRatio = function (p) {
            var r = p + (0.5 - p) * this._p;
            if (p < this._p1) {
                return this._calcEnd ? 1 - ((p = 1 - (p / this._p1)) * p) : r - ((p = 1 - (p / this._p1)) * p * p * p * r);
            } else if (p > this._p3) {
                return this._calcEnd ? 1 - (p = (p - this._p3) / this._p1) * p : r + ((p - r) * (p = (p - this._p3) / this._p1) * p * p * p);
            }
            return this._calcEnd ? 1 : r;
        };
        SlowMo.ease = new SlowMo(0.7, 0.7);

        p.config = SlowMo.config = function (linearRatio, power, yoyoMode) {
            return new SlowMo(linearRatio, power, yoyoMode);
        };


        //SteppedEase
        SteppedEase = _class("easing.SteppedEase", function (steps) {
            steps = steps || 1;
            this._p1 = 1 / steps;
            this._p2 = steps + 1;
        }, true);
        p = SteppedEase.prototype = new Ease();
        p.constructor = SteppedEase;
        p.getRatio = function (p) {
            if (p < 0) {
                p = 0;
            } else if (p >= 1) {
                p = 0.999999999;
            }
            return ((this._p2 * p) >> 0) * this._p1;
        };
        p.config = SteppedEase.config = function (steps) {
            return new SteppedEase(steps);
        };


        //RoughEase
        RoughEase = _class("easing.RoughEase", function (vars) {
            vars = vars || {};
            var taper = vars.taper || "none",
                a = [],
                cnt = 0,
                points = (vars.points || 20) | 0,
                i = points,
                randomize = (vars.randomize !== false),
                clamp = (vars.clamp === true),
                template = (vars.template instanceof Ease) ? vars.template : null,
                strength = (typeof (vars.strength) === "number") ? vars.strength * 0.4 : 0.4,
                x, y, bump, invX, obj, pnt;
            while (--i > -1) {
                x = randomize ? Math.random() : (1 / points) * i;
                y = template ? template.getRatio(x) : x;
                if (taper === "none") {
                    bump = strength;
                } else if (taper === "out") {
                    invX = 1 - x;
                    bump = invX * invX * strength;
                } else if (taper === "in") {
                    bump = x * x * strength;
                } else if (x < 0.5) { //"both" (start)
                    invX = x * 2;
                    bump = invX * invX * 0.5 * strength;
                } else { //"both" (end)
                    invX = (1 - x) * 2;
                    bump = invX * invX * 0.5 * strength;
                }
                if (randomize) {
                    y += (Math.random() * bump) - (bump * 0.5);
                } else if (i % 2) {
                    y += bump * 0.5;
                } else {
                    y -= bump * 0.5;
                }
                if (clamp) {
                    if (y > 1) {
                        y = 1;
                    } else if (y < 0) {
                        y = 0;
                    }
                }
                a[cnt++] = {
                    x: x,
                    y: y
                };
            }
            a.sort(function (a, b) {
                return a.x - b.x;
            });

            pnt = new EasePoint(1, 1, null);
            i = points;
            while (--i > -1) {
                obj = a[i];
                pnt = new EasePoint(obj.x, obj.y, pnt);
            }

            this._prev = new EasePoint(0, 0, (pnt.t !== 0) ? pnt : pnt.next);
        }, true);
        p = RoughEase.prototype = new Ease();
        p.constructor = RoughEase;
        p.getRatio = function (p) {
            var pnt = this._prev;
            if (p > pnt.t) {
                while (pnt.next && p >= pnt.t) {
                    pnt = pnt.next;
                }
                pnt = pnt.prev;
            } else {
                while (pnt.prev && p <= pnt.t) {
                    pnt = pnt.prev;
                }
            }
            this._prev = pnt;
            return (pnt.v + ((p - pnt.t) / pnt.gap) * pnt.c);
        };
        p.config = function (vars) {
            return new RoughEase(vars);
        };
        RoughEase.ease = new RoughEase();


        //Bounce
        _wrap("Bounce",
            _create("BounceOut", function (p) {
                if (p < 1 / 2.75) {
                    return 7.5625 * p * p;
                } else if (p < 2 / 2.75) {
                    return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
                } else if (p < 2.5 / 2.75) {
                    return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
                }
                return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
            }),
            _create("BounceIn", function (p) {
                if ((p = 1 - p) < 1 / 2.75) {
                    return 1 - (7.5625 * p * p);
                } else if (p < 2 / 2.75) {
                    return 1 - (7.5625 * (p -= 1.5 / 2.75) * p + 0.75);
                } else if (p < 2.5 / 2.75) {
                    return 1 - (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375);
                }
                return 1 - (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375);
            }),
            _create("BounceInOut", function (p) {
                var invert = (p < 0.5);
                if (invert) {
                    p = 1 - (p * 2);
                } else {
                    p = (p * 2) - 1;
                }
                if (p < 1 / 2.75) {
                    p = 7.5625 * p * p;
                } else if (p < 2 / 2.75) {
                    p = 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
                } else if (p < 2.5 / 2.75) {
                    p = 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
                } else {
                    p = 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
                }
                return invert ? (1 - p) * 0.5 : p * 0.5 + 0.5;
            })
        );


        //CIRC
        _wrap("Circ",
            _create("CircOut", function (p) {
                return Math.sqrt(1 - (p = p - 1) * p);
            }),
            _create("CircIn", function (p) {
                return -(Math.sqrt(1 - (p * p)) - 1);
            }),
            _create("CircInOut", function (p) {
                return ((p *= 2) < 1) ? -0.5 * (Math.sqrt(1 - p * p) - 1) : 0.5 * (Math.sqrt(1 - (p -= 2) * p) + 1);
            })
        );


        //Elastic
        _createElastic = function (n, f, def) {
            var C = _class("easing." + n, function (amplitude, period) {
                    this._p1 = amplitude || 1;
                    this._p2 = period || def;
                    this._p3 = this._p2 / _2PI * (Math.asin(1 / this._p1) || 0);
                }, true),
                p = C.prototype = new Ease();
            p.constructor = C;
            p.getRatio = f;
            p.config = function (amplitude, period) {
                return new C(amplitude, period);
            };
            return C;
        };
        _wrap("Elastic",
            _createElastic("ElasticOut", function (p) {
                return this._p1 * Math.pow(2, -10 * p) * Math.sin((p - this._p3) * _2PI / this._p2) + 1;
            }, 0.3),
            _createElastic("ElasticIn", function (p) {
                return -(this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin((p - this._p3) * _2PI / this._p2));
            }, 0.3),
            _createElastic("ElasticInOut", function (p) {
                return ((p *= 2) < 1) ? -0.5 * (this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin((p - this._p3) * _2PI / this._p2)) : this._p1 * Math.pow(2, -10 * (p -= 1)) * Math.sin((p - this._p3) * _2PI / this._p2) * 0.5 + 1;
            }, 0.45)
        );


        //Expo
        _wrap("Expo",
            _create("ExpoOut", function (p) {
                return 1 - Math.pow(2, -10 * p);
            }),
            _create("ExpoIn", function (p) {
                return Math.pow(2, 10 * (p - 1)) - 0.001;
            }),
            _create("ExpoInOut", function (p) {
                return ((p *= 2) < 1) ? 0.5 * Math.pow(2, 10 * (p - 1)) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
            })
        );


        //Sine
        _wrap("Sine",
            _create("SineOut", function (p) {
                return Math.sin(p * _HALF_PI);
            }),
            _create("SineIn", function (p) {
                return -Math.cos(p * _HALF_PI) + 1;
            }),
            _create("SineInOut", function (p) {
                return -0.5 * (Math.cos(Math.PI * p) - 1);
            })
        );

        _class("easing.EaseLookup", {
            find: function (s) {
                return Ease.map[s];
            }
        }, true);

        //register the non-standard eases
        _easeReg(w.SlowMo, "SlowMo", "ease,");
        _easeReg(RoughEase, "RoughEase", "ease,");
        _easeReg(SteppedEase, "SteppedEase", "ease,");

        return Back;

    }, true);


});

if (_gsScope._gsDefine) {
    _gsScope._gsQueue.pop()();
} //necessary in case TweenLite was already loaded separately.









/*
 * ----------------------------------------------------------------
 * Base classes like TweenLite, SimpleTimeline, Ease, Ticker, etc.
 * ----------------------------------------------------------------
 */
(function (window, moduleName) {

    "use strict";
    var _globals = window.GreenSockGlobals = window.GreenSockGlobals || window;
    if (_globals.TweenLite) {
        return; //in case the core set of classes is already loaded, don't instantiate twice.
    }
    var _namespace = function (ns) {
            var a = ns.split("."),
                p = _globals,
                i;
            for (i = 0; i < a.length; i++) {
                p[a[i]] = p = p[a[i]] || {};
            }
            return p;
        },
        gs = _namespace("com.greensock"),
        _tinyNum = 0.0000000001,
        _slice = function (a) { //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
            var b = [],
                l = a.length,
                i;
            for (i = 0; i !== l; b.push(a[i++]));
            return b;
        },
        _emptyFunc = function () {},
        _isArray = (function () { //works around issues in iframe environments where the Array global isn't shared, thus if the object originates in a different window/iframe, "(obj instanceof Array)" will evaluate false. We added some speed optimizations to avoid Object.prototype.toString.call() unless it's absolutely necessary because it's VERY slow (like 20x slower)
            var toString = Object.prototype.toString,
                array = toString.call([]);
            return function (obj) {
                return obj != null && (obj instanceof Array || (typeof (obj) === "object" && !!obj.push && toString.call(obj) === array));
            };
        }()),
        a, i, p, _ticker, _tickerActive,
        _defLookup = {},

        /**
         * @constructor
         * Defines a GreenSock class, optionally with an array of dependencies that must be instantiated first and passed into the definition.
         * This allows users to load GreenSock JS files in any order even if they have interdependencies (like CSSPlugin extends TweenPlugin which is
         * inside TweenLite.js, but if CSSPlugin is loaded first, it should wait to run its code until TweenLite.js loads and instantiates TweenPlugin
         * and then pass TweenPlugin to CSSPlugin's definition). This is all done automatically and internally.
         *
         * Every definition will be added to a "com.greensock" global object (typically window, but if a window.GreenSockGlobals object is found,
         * it will go there as of v1.7). For example, TweenLite will be found at window.com.greensock.TweenLite and since it's a global class that should be available anywhere,
         * it is ALSO referenced at window.TweenLite. However some classes aren't considered global, like the base com.greensock.core.Animation class, so
         * those will only be at the package like window.com.greensock.core.Animation. Again, if you define a GreenSockGlobals object on the window, everything
         * gets tucked neatly inside there instead of on the window directly. This allows you to do advanced things like load multiple versions of GreenSock
         * files and put them into distinct objects (imagine a banner ad uses a newer version but the main site uses an older one). In that case, you could
         * sandbox the banner one like:
         *
         * <script>
         *     var gs = window.GreenSockGlobals = {}; //the newer version we're about to load could now be referenced in a "gs" object, like gs.TweenLite.to(...). Use whatever alias you want as long as it's unique, "gs" or "banner" or whatever.
         * </script>
         * <script src="js/greensock/v1.7/TweenMax.js"></script>
         * <script>
         *     window.GreenSockGlobals = window._gsQueue = null; //reset it back to null (along with the special _gsQueue variable) so that the next load of TweenMax affects the window and we can reference things directly like TweenLite.to(...)
         * </script>
         * <script src="js/greensock/v1.6/TweenMax.js"></script>
         * <script>
         *     gs.TweenLite.to(...); //would use v1.7
         *     TweenLite.to(...); //would use v1.6
         * </script>
         *
         * @param {!string} ns The namespace of the class definition, leaving off "com.greensock." as that's assumed. For example, "TweenLite" or "plugins.CSSPlugin" or "easing.Back".
         * @param {!Array.<string>} dependencies An array of dependencies (described as their namespaces minus "com.greensock." prefix). For example ["TweenLite","plugins.TweenPlugin","core.Animation"]
         * @param {!function():Object} func The function that should be called and passed the resolved dependencies which will return the actual class for this definition.
         * @param {boolean=} global If true, the class will be added to the global scope (typically window unless you define a window.GreenSockGlobals object)
         */
        Definition = function (ns, dependencies, func, global) {
            this.sc = (_defLookup[ns]) ? _defLookup[ns].sc : []; //subclasses
            _defLookup[ns] = this;
            this.gsClass = null;
            this.func = func;
            var _classes = [];
            this.check = function (init) {
                var i = dependencies.length,
                    missing = i,
                    cur, a, n, cl;
                while (--i > -1) {
                    if ((cur = _defLookup[dependencies[i]] || new Definition(dependencies[i], [])).gsClass) {
                        _classes[i] = cur.gsClass;
                        missing--;
                    } else if (init) {
                        cur.sc.push(this);
                    }
                }
                if (missing === 0 && func) {
                    a = ("com.greensock." + ns).split(".");
                    n = a.pop();
                    cl = _namespace(a.join("."))[n] = this.gsClass = func.apply(func, _classes);

                    //exports to multiple environments
                    if (global) {
                        _globals[n] = cl; //provides a way to avoid global namespace pollution. By default, the main classes like TweenLite, Power1, Strong, etc. are added to window unless a GreenSockGlobals is defined. So if you want to have things added to a custom object instead, just do something like window.GreenSockGlobals = {} before loading any GreenSock files. You can even set up an alias like window.GreenSockGlobals = windows.gs = {} so that you can access everything like gs.TweenLite. Also remember that ALL classes are added to the window.com.greensock object (in their respective packages, like com.greensock.easing.Power1, com.greensock.TweenLite, etc.)
                        if (typeof (define) === "function" && define.amd) { //AMD
                            define((window.GreenSockAMDPath ? window.GreenSockAMDPath + "/" : "") + ns.split(".").pop(), [], function () {
                                return cl;
                            });
                        } else if (ns === moduleName && typeof (module) !== "undefined" && module.exports) { //node
                            module.exports = cl;
                        }
                    }
                    for (i = 0; i < this.sc.length; i++) {
                        this.sc[i].check();
                    }
                }
            };
            this.check(true);
        },

        //used to create Definition instances (which basically registers a class that has dependencies).
        _gsDefine = window._gsDefine = function (ns, dependencies, func, global) {
            return new Definition(ns, dependencies, func, global);
        },

        //a quick way to create a class that doesn't have any dependencies. Returns the class, but first registers it in the GreenSock namespace so that other classes can grab it (other classes might be dependent on the class).
        _class = gs._class = function (ns, func, global) {
            func = func || function () {};
            _gsDefine(ns, [], function () {
                return func;
            }, global);
            return func;
        };

    _gsDefine.globals = _globals;



    /*
     * ----------------------------------------------------------------
     * Ease
     * ----------------------------------------------------------------
     */
    var _baseParams = [0, 0, 1, 1],
        _blankArray = [],
        Ease = _class("easing.Ease", function (func, extraParams, type, power) {
            this._func = func;
            this._type = type || 0;
            this._power = power || 0;
            this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams;
        }, true),
        _easeMap = Ease.map = {},
        _easeReg = Ease.register = function (ease, names, types, create) {
            var na = names.split(","),
                i = na.length,
                ta = (types || "easeIn,easeOut,easeInOut").split(","),
                e, name, j, type;
            while (--i > -1) {
                name = na[i];
                e = create ? _class("easing." + name, null, true) : gs.easing[name] || {};
                j = ta.length;
                while (--j > -1) {
                    type = ta[j];
                    _easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease();
                }
            }
        };

    p = Ease.prototype;
    p._calcEnd = false;
    p.getRatio = function (p) {
        if (this._func) {
            this._params[0] = p;
            return this._func.apply(null, this._params);
        }
        var t = this._type,
            pw = this._power,
            r = (t === 1) ? 1 - p : (t === 2) ? p : (p < 0.5) ? p * 2 : (1 - p) * 2;
        if (pw === 1) {
            r *= r;
        } else if (pw === 2) {
            r *= r * r;
        } else if (pw === 3) {
            r *= r * r * r;
        } else if (pw === 4) {
            r *= r * r * r * r;
        }
        return (t === 1) ? 1 - r : (t === 2) ? r : (p < 0.5) ? r / 2 : 1 - (r / 2);
    };

    //create all the standard eases like Linear, Quad, Cubic, Quart, Quint, Strong, Power0, Power1, Power2, Power3, and Power4 (each with easeIn, easeOut, and easeInOut)
    a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"];
    i = a.length;
    while (--i > -1) {
        p = a[i] + ",Power" + i;
        _easeReg(new Ease(null, null, 1, i), p, "easeOut", true);
        _easeReg(new Ease(null, null, 2, i), p, "easeIn" + ((i === 0) ? ",easeNone" : ""));
        _easeReg(new Ease(null, null, 3, i), p, "easeInOut");
    }
    _easeMap.linear = gs.easing.Linear.easeIn;
    _easeMap.swing = gs.easing.Quad.easeInOut; //for jQuery folks


    /*
     * ----------------------------------------------------------------
     * EventDispatcher
     * ----------------------------------------------------------------
     */
    var EventDispatcher = _class("events.EventDispatcher", function (target) {
        this._listeners = {};
        this._eventTarget = target || this;
    });
    p = EventDispatcher.prototype;

    p.addEventListener = function (type, callback, scope, useParam, priority) {
        priority = priority || 0;
        var list = this._listeners[type],
            index = 0,
            listener, i;
        if (list == null) {
            this._listeners[type] = list = [];
        }
        i = list.length;
        while (--i > -1) {
            listener = list[i];
            if (listener.c === callback && listener.s === scope) {
                list.splice(i, 1);
            } else if (index === 0 && listener.pr < priority) {
                index = i + 1;
            }
        }
        list.splice(index, 0, {
            c: callback,
            s: scope,
            up: useParam,
            pr: priority
        });
        if (this === _ticker && !_tickerActive) {
            _ticker.wake();
        }
    };

    p.removeEventListener = function (type, callback) {
        var list = this._listeners[type],
            i;
        if (list) {
            i = list.length;
            while (--i > -1) {
                if (list[i].c === callback) {
                    list.splice(i, 1);
                    return;
                }
            }
        }
    };

    p.dispatchEvent = function (type) {
        var list = this._listeners[type],
            i, t, listener;
        if (list) {
            i = list.length;
            t = this._eventTarget;
            while (--i > -1) {
                listener = list[i];
                if (listener.up) {
                    listener.c.call(listener.s || t, {
                        type: type,
                        target: t
                    });
                } else {
                    listener.c.call(listener.s || t);
                }
            }
        }
    };


    /*
     * ----------------------------------------------------------------
     * Ticker
     * ----------------------------------------------------------------
     */
    var _reqAnimFrame = window.requestAnimationFrame,
        _cancelAnimFrame = window.cancelAnimationFrame,
        _getTime = Date.now || function () {
            return new Date().getTime();
        },
        _lastUpdate = _getTime();

    //now try to determine the requestAnimationFrame and cancelAnimationFrame functions and if none are found, we'll use a setTimeout()/clearTimeout() polyfill.
    a = ["ms", "moz", "webkit", "o"];
    i = a.length;
    while (--i > -1 && !_reqAnimFrame) {
        _reqAnimFrame = window[a[i] + "RequestAnimationFrame"];
        _cancelAnimFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"];
    }

    _class("Ticker", function (fps, useRAF) {
        var _self = this,
            _startTime = _getTime(),
            _useRAF = (useRAF !== false && _reqAnimFrame),
            _lagThreshold = 500,
            _adjustedLag = 33,
            _fps, _req, _id, _gap, _nextTime,
            _tick = function (manual) {
                var elapsed = _getTime() - _lastUpdate,
                    overlap, dispatch;
                if (elapsed > _lagThreshold) {
                    _startTime += elapsed - _adjustedLag;
                }
                _lastUpdate += elapsed;
                _self.time = (_lastUpdate - _startTime) / 1000;
                overlap = _self.time - _nextTime;
                if (!_fps || overlap > 0 || manual === true) {
                    _self.frame++;
                    _nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
                    dispatch = true;
                }
                if (manual !== true) { //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
                    _id = _req(_tick);
                }
                if (dispatch) {
                    _self.dispatchEvent("tick");
                }
            };

        EventDispatcher.call(_self);
        _self.time = _self.frame = 0;
        _self.tick = function () {
            _tick(true);
        };

        _self.lagSmoothing = function (threshold, adjustedLag) {
            _lagThreshold = threshold || (1 / _tinyNum); //zero should be interpreted as basically unlimited
            _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
        };

        _self.sleep = function () {
            if (_id == null) {
                return;
            }
            if (!_useRAF || !_cancelAnimFrame) {
                clearTimeout(_id);
            } else {
                _cancelAnimFrame(_id);
            }
            _req = _emptyFunc;
            _id = null;
            if (_self === _ticker) {
                _tickerActive = false;
            }
        };

        _self.wake = function () {
            if (_id !== null) {
                _self.sleep();
            } else if (_self.frame > 10) { //don't trigger lagSmoothing if we're just waking up, and make sure that at least 10 frames have elapsed because of the iOS bug that we work around below with the 1.5-second setTimout().
                _lastUpdate = _getTime() - _lagThreshold + 5;
            }
            _req = (_fps === 0) ? _emptyFunc : (!_useRAF || !_reqAnimFrame) ? function (f) {
                return setTimeout(f, ((_nextTime - _self.time) * 1000 + 1) | 0);
            } : _reqAnimFrame;
            if (_self === _ticker) {
                _tickerActive = true;
            }
            _tick(2);
        };

        _self.fps = function (value) {
            if (!arguments.length) {
                return _fps;
            }
            _fps = value;
            _gap = 1 / (_fps || 60);
            _nextTime = this.time + _gap;
            _self.wake();
        };

        _self.useRAF = function (value) {
            if (!arguments.length) {
                return _useRAF;
            }
            _self.sleep();
            _useRAF = value;
            _self.fps(_fps);
        };
        _self.fps(fps);

        //a bug in iOS 6 Safari occasionally prevents the requestAnimationFrame from working initially, so we use a 1.5-second timeout that automatically falls back to setTimeout() if it senses this condition.
        setTimeout(function () {
            if (_useRAF && (!_id || _self.frame < 5)) {
                _self.useRAF(false);
            }
        }, 1500);
    });

    p = gs.Ticker.prototype = new gs.events.EventDispatcher();
    p.constructor = gs.Ticker;


    /*
     * ----------------------------------------------------------------
     * Animation
     * ----------------------------------------------------------------
     */
    var Animation = _class("core.Animation", function (duration, vars) {
        this.vars = vars = vars || {};
        this._duration = this._totalDuration = duration || 0;
        this._delay = Number(vars.delay) || 0;
        this._timeScale = 1;
        this._active = (vars.immediateRender === true);
        this.data = vars.data;
        this._reversed = (vars.reversed === true);

        if (!_rootTimeline) {
            return;
        }
        if (!_tickerActive) { //some browsers (like iOS 6 Safari) shut down JavaScript execution when the tab is disabled and they [occasionally] neglect to start up requestAnimationFrame again when returning - this code ensures that the engine starts up again properly.
            _ticker.wake();
        }

        var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
        tl.add(this, tl._time);

        if (this.vars.paused) {
            this.paused(true);
        }
    });

    _ticker = Animation.ticker = new gs.Ticker();
    p = Animation.prototype;
    p._dirty = p._gc = p._initted = p._paused = false;
    p._totalTime = p._time = 0;
    p._rawPrevTime = -1;
    p._next = p._last = p._onUpdate = p._timeline = p.timeline = null;
    p._paused = false;


    //some browsers (like iOS) occasionally drop the requestAnimationFrame event when the user switches to a different tab and then comes back again, so we use a 2-second setTimeout() to sense if/when that condition occurs and then wake() the ticker.
    var _checkTimeout = function () {
        if (_tickerActive && _getTime() - _lastUpdate > 2000) {
            _ticker.wake();
        }
        setTimeout(_checkTimeout, 2000);
    };
    _checkTimeout();


    p.play = function (from, suppressEvents) {
        if (from != null) {
            this.seek(from, suppressEvents);
        }
        return this.reversed(false).paused(false);
    };

    p.pause = function (atTime, suppressEvents) {
        if (atTime != null) {
            this.seek(atTime, suppressEvents);
        }
        return this.paused(true);
    };

    p.resume = function (from, suppressEvents) {
        if (from != null) {
            this.seek(from, suppressEvents);
        }
        return this.paused(false);
    };

    p.seek = function (time, suppressEvents) {
        return this.totalTime(Number(time), suppressEvents !== false);
    };

    p.restart = function (includeDelay, suppressEvents) {
        return this.reversed(false).paused(false).totalTime(includeDelay ? -this._delay : 0, (suppressEvents !== false), true);
    };

    p.reverse = function (from, suppressEvents) {
        if (from != null) {
            this.seek((from || this.totalDuration()), suppressEvents);
        }
        return this.reversed(true).paused(false);
    };

    p.render = function (time, suppressEvents, force) {
        //stub - we override this method in subclasses.
    };

    p.invalidate = function () {
        return this;
    };

    p.isActive = function () {
        var tl = this._timeline, //the 2 root timelines won't have a _timeline; they're always active.
            startTime = this._startTime,
            rawTime;
        return (!tl || (!this._gc && !this._paused && tl.isActive() && (rawTime = tl.rawTime()) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale));
    };

    p._enabled = function (enabled, ignoreTimeline) {
        if (!_tickerActive) {
            _ticker.wake();
        }
        this._gc = !enabled;
        this._active = this.isActive();
        if (ignoreTimeline !== true) {
            if (enabled && !this.timeline) {
                this._timeline.add(this, this._startTime - this._delay);
            } else if (!enabled && this.timeline) {
                this._timeline._remove(this, true);
            }
        }
        return false;
    };


    p._kill = function (vars, target) {
        return this._enabled(false, false);
    };

    p.kill = function (vars, target) {
        this._kill(vars, target);
        return this;
    };

    p._uncache = function (includeSelf) {
        var tween = includeSelf ? this : this.timeline;
        while (tween) {
            tween._dirty = true;
            tween = tween.timeline;
        }
        return this;
    };

    p._swapSelfInParams = function (params) {
        var i = params.length,
            copy = params.concat();
        while (--i > -1) {
            if (params[i] === "{self}") {
                copy[i] = this;
            }
        }
        return copy;
    };

    //----Animation getters/setters --------------------------------------------------------

    p.eventCallback = function (type, callback, params, scope) {
        if ((type || "").substr(0, 2) === "on") {
            var v = this.vars;
            if (arguments.length === 1) {
                return v[type];
            }
            if (callback == null) {
                delete v[type];
            } else {
                v[type] = callback;
                v[type + "Params"] = (_isArray(params) && params.join("").indexOf("{self}") !== -1) ? this._swapSelfInParams(params) : params;
                v[type + "Scope"] = scope;
            }
            if (type === "onUpdate") {
                this._onUpdate = callback;
            }
        }
        return this;
    };

    p.delay = function (value) {
        if (!arguments.length) {
            return this._delay;
        }
        if (this._timeline.smoothChildTiming) {
            this.startTime(this._startTime + value - this._delay);
        }
        this._delay = value;
        return this;
    };

    p.duration = function (value) {
        if (!arguments.length) {
            this._dirty = false;
            return this._duration;
        }
        this._duration = this._totalDuration = value;
        this._uncache(true); //true in case it's a TweenMax or TimelineMax that has a repeat - we'll need to refresh the totalDuration.
        if (this._timeline.smoothChildTiming)
            if (this._time > 0)
                if (this._time < this._duration)
                    if (value !== 0) {
                        this.totalTime(this._totalTime * (value / this._duration), true);
                    }
        return this;
    };

    p.totalDuration = function (value) {
        this._dirty = false;
        return (!arguments.length) ? this._totalDuration : this.duration(value);
    };

    p.time = function (value, suppressEvents) {
        if (!arguments.length) {
            return this._time;
        }
        if (this._dirty) {
            this.totalDuration();
        }
        return this.totalTime((value > this._duration) ? this._duration : value, suppressEvents);
    };

    p.totalTime = function (time, suppressEvents, uncapped) {
        if (!_tickerActive) {
            _ticker.wake();
        }
        if (!arguments.length) {
            return this._totalTime;
        }
        if (this._timeline) {
            if (time < 0 && !uncapped) {
                time += this.totalDuration();
            }
            if (this._timeline.smoothChildTiming) {
                if (this._dirty) {
                    this.totalDuration();
                }
                var totalDuration = this._totalDuration,
                    tl = this._timeline;
                if (time > totalDuration && !uncapped) {
                    time = totalDuration;
                }
                this._startTime = (this._paused ? this._pauseTime : tl._time) - ((!this._reversed ? time : totalDuration - time) / this._timeScale);
                if (!tl._dirty) { //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
                    this._uncache(false);
                }
                //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The startTime of that child would get pushed out, but one of the ancestors may have completed.
                if (tl._timeline) {
                    while (tl._timeline) {
                        if (tl._timeline._time !== (tl._startTime + tl._totalTime) / tl._timeScale) {
                            tl.totalTime(tl._totalTime, true);
                        }
                        tl = tl._timeline;
                    }
                }
            }
            if (this._gc) {
                this._enabled(true, false);
            }
            if (this._totalTime !== time || this._duration === 0) {
                this.render(time, suppressEvents, false);
                if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
                    _lazyRender();
                }
            }
        }
        return this;
    };

    p.progress = p.totalProgress = function (value, suppressEvents) {
        return (!arguments.length) ? this._time / this.duration() : this.totalTime(this.duration() * value, suppressEvents);
    };

    p.startTime = function (value) {
        if (!arguments.length) {
            return this._startTime;
        }
        if (value !== this._startTime) {
            this._startTime = value;
            if (this.timeline)
                if (this.timeline._sortChildren) {
                    this.timeline.add(this, value - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
                }
        }
        return this;
    };

    p.timeScale = function (value) {
        if (!arguments.length) {
            return this._timeScale;
        }
        value = value || _tinyNum; //can't allow zero because it'll throw the math off
        if (this._timeline && this._timeline.smoothChildTiming) {
            var pauseTime = this._pauseTime,
                t = (pauseTime || pauseTime === 0) ? pauseTime : this._timeline.totalTime();
            this._startTime = t - ((t - this._startTime) * this._timeScale / value);
        }
        this._timeScale = value;
        return this._uncache(false);
    };

    p.reversed = function (value) {
        if (!arguments.length) {
            return this._reversed;
        }
        if (value != this._reversed) {
            this._reversed = value;
            this.totalTime(((this._timeline && !this._timeline.smoothChildTiming) ? this.totalDuration() - this._totalTime : this._totalTime), true);
        }
        return this;
    };

    p.paused = function (value) {
        if (!arguments.length) {
            return this._paused;
        }
        if (value != this._paused)
            if (this._timeline) {
                if (!_tickerActive && !value) {
                    _ticker.wake();
                }
                var tl = this._timeline,
                    raw = tl.rawTime(),
                    elapsed = raw - this._pauseTime;
                if (!value && tl.smoothChildTiming) {
                    this._startTime += elapsed;
                    this._uncache(false);
                }
                this._pauseTime = value ? raw : null;
                this._paused = value;
                this._active = this.isActive();
                if (!value && elapsed !== 0 && this._initted && this.duration()) {
                    this.render((tl.smoothChildTiming ? this._totalTime : (raw - this._startTime) / this._timeScale), true, true); //in case the target's properties changed via some other tween or manual update by the user, we should force a render.
                }
            }
        if (this._gc && !value) {
            this._enabled(true, false);
        }
        return this;
    };


    /*
     * ----------------------------------------------------------------
     * SimpleTimeline
     * ----------------------------------------------------------------
     */
    var SimpleTimeline = _class("core.SimpleTimeline", function (vars) {
        Animation.call(this, 0, vars);
        this.autoRemoveChildren = this.smoothChildTiming = true;
    });

    p = SimpleTimeline.prototype = new Animation();
    p.constructor = SimpleTimeline;
    p.kill()._gc = false;
    p._first = p._last = null;
    p._sortChildren = false;

    p.add = p.insert = function (child, position, align, stagger) {
        var prevTween, st;
        child._startTime = Number(position || 0) + child._delay;
        if (child._paused)
            if (this !== child._timeline) { //we only adjust the _pauseTime if it wasn't in this timeline already. Remember, sometimes a tween will be inserted again into the same timeline when its startTime is changed so that the tweens in the TimelineLite/Max are re-ordered properly in the linked list (so everything renders in the proper order).
                child._pauseTime = child._startTime + ((this.rawTime() - child._startTime) / child._timeScale);
            }
        if (child.timeline) {
            child.timeline._remove(child, true); //removes from existing timeline so that it can be properly added to this one.
        }
        child.timeline = child._timeline = this;
        if (child._gc) {
            child._enabled(true, true);
        }
        prevTween = this._last;
        if (this._sortChildren) {
            st = child._startTime;
            while (prevTween && prevTween._startTime > st) {
                prevTween = prevTween._prev;
            }
        }
        if (prevTween) {
            child._next = prevTween._next;
            prevTween._next = child;
        } else {
            child._next = this._first;
            this._first = child;
        }
        if (child._next) {
            child._next._prev = child;
        } else {
            this._last = child;
        }
        child._prev = prevTween;
        if (this._timeline) {
            this._uncache(true);
        }
        return this;
    };

    p._remove = function (tween, skipDisable) {
        if (tween.timeline === this) {
            if (!skipDisable) {
                tween._enabled(false, true);
            }

            if (tween._prev) {
                tween._prev._next = tween._next;
            } else if (this._first === tween) {
                this._first = tween._next;
            }
            if (tween._next) {
                tween._next._prev = tween._prev;
            } else if (this._last === tween) {
                this._last = tween._prev;
            }
            tween._next = tween._prev = tween.timeline = null;

            if (this._timeline) {
                this._uncache(true);
            }
        }
        return this;
    };

    p.render = function (time, suppressEvents, force) {
        var tween = this._first,
            next;
        this._totalTime = this._time = this._rawPrevTime = time;
        while (tween) {
            next = tween._next; //record it here because the value could change after rendering...
            if (tween._active || (time >= tween._startTime && !tween._paused)) {
                if (!tween._reversed) {
                    tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
                } else {
                    tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
                }
            }
            tween = next;
        }
    };

    p.rawTime = function () {
        if (!_tickerActive) {
            _ticker.wake();
        }
        return this._totalTime;
    };

    /*
     * ----------------------------------------------------------------
     * TweenLite
     * ----------------------------------------------------------------
     */
    var TweenLite = _class("TweenLite", function (target, duration, vars) {
            Animation.call(this, duration, vars);
            this.render = TweenLite.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)

            if (target == null) {
                throw "Cannot tween a null target.";
            }

            this.target = target = (typeof (target) !== "string") ? target : TweenLite.selector(target) || target;

            var isSelector = (target.jquery || (target.length && target !== window && target[0] && (target[0] === window || (target[0].nodeType && target[0].style && !target.nodeType)))),
                overwrite = this.vars.overwrite,
                i, targ, targets;

            this._overwrite = overwrite = (overwrite == null) ? _overwriteLookup[TweenLite.defaultOverwrite] : (typeof (overwrite) === "number") ? overwrite >> 0 : _overwriteLookup[overwrite];

            if ((isSelector || target instanceof Array || (target.push && _isArray(target))) && typeof (target[0]) !== "number") {
                this._targets = targets = _slice(target); //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
                this._propLookup = [];
                this._siblings = [];
                for (i = 0; i < targets.length; i++) {
                    targ = targets[i];
                    if (!targ) {
                        targets.splice(i--, 1);
                        continue;
                    } else if (typeof (targ) === "string") {
                        targ = targets[i--] = TweenLite.selector(targ); //in case it's an array of strings
                        if (typeof (targ) === "string") {
                            targets.splice(i + 1, 1); //to avoid an endless loop (can't imagine why the selector would return a string, but just in case)
                        }
                        continue;
                    } else if (targ.length && targ !== window && targ[0] && (targ[0] === window || (targ[0].nodeType && targ[0].style && !targ.nodeType))) { //in case the user is passing in an array of selector objects (like jQuery objects), we need to check one more level and pull things out if necessary. Also note that <select> elements pass all the criteria regarding length and the first child having style, so we must also check to ensure the target isn't an HTML node itself.
                        targets.splice(i--, 1);
                        this._targets = targets = targets.concat(_slice(targ));
                        continue;
                    }
                    this._siblings[i] = _register(targ, this, false);
                    if (overwrite === 1)
                        if (this._siblings[i].length > 1) {
                            _applyOverwrite(targ, this, null, 1, this._siblings[i]);
                        }
                }

            } else {
                this._propLookup = {};
                this._siblings = _register(target, this, false);
                if (overwrite === 1)
                    if (this._siblings.length > 1) {
                        _applyOverwrite(target, this, null, 1, this._siblings);
                    }
            }
            if (this.vars.immediateRender || (duration === 0 && this._delay === 0 && this.vars.immediateRender !== false)) {
                this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
                this.render(-this._delay);
            }
        }, true),
        _isSelector = function (v) {
            return (v.length && v !== window && v[0] && (v[0] === window || (v[0].nodeType && v[0].style && !v.nodeType))); //we cannot check "nodeType" if the target is window from within an iframe, otherwise it will trigger a security error in some browsers like Firefox.
        },
        _autoCSS = function (vars, target) {
            var css = {},
                p;
            for (p in vars) {
                if (!_reservedProps[p] && (!(p in target) || p === "transform" || p === "x" || p === "y" || p === "width" || p === "height" || p === "className" || p === "border") && (!_plugins[p] || (_plugins[p] && _plugins[p]._autoCSS))) { //note: <img> elements contain read-only "x" and "y" properties. We should also prioritize editing css width/height rather than the element's properties.
                    css[p] = vars[p];
                    delete vars[p];
                }
            }
            vars.css = css;
        };

    p = TweenLite.prototype = new Animation();
    p.constructor = TweenLite;
    p.kill()._gc = false;

    //----TweenLite defaults, overwrite management, and root updates ----------------------------------------------------

    p.ratio = 0;
    p._firstPT = p._targets = p._overwrittenProps = p._startAt = null;
    p._notifyPluginsOfEnabled = p._lazy = false;

    TweenLite.version = "1.13.1";
    TweenLite.defaultEase = p._ease = new Ease(null, null, 1, 1);
    TweenLite.defaultOverwrite = "auto";
    TweenLite.ticker = _ticker;
    TweenLite.autoSleep = true;
    TweenLite.lagSmoothing = function (threshold, adjustedLag) {
        _ticker.lagSmoothing(threshold, adjustedLag);
    };

    TweenLite.selector = window.$ || window.jQuery || function (e) {
        var selector = window.$ || window.jQuery;
        if (selector) {
            TweenLite.selector = selector;
            return selector(e);
        }
        return (typeof (document) === "undefined") ? e : (document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById((e.charAt(0) === "#") ? e.substr(1) : e));
    };

    var _lazyTweens = [],
        _lazyLookup = {},
        _internals = TweenLite._internals = {
            isArray: _isArray,
            isSelector: _isSelector,
            lazyTweens: _lazyTweens
        }, //gives us a way to expose certain private values to other GreenSock classes without contaminating tha main TweenLite object.
        _plugins = TweenLite._plugins = {},
        _tweenLookup = _internals.tweenLookup = {},
        _tweenLookupNum = 0,
        _reservedProps = _internals.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1
        },
        _overwriteLookup = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        },
        _rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline(),
        _rootTimeline = Animation._rootTimeline = new SimpleTimeline(),
        _lazyRender = _internals.lazyRender = function () {
            var i = _lazyTweens.length;
            _lazyLookup = {};
            while (--i > -1) {
                a = _lazyTweens[i];
                if (a && a._lazy !== false) {
                    a.render(a._lazy, false, true);
                    a._lazy = false;
                }
            }
            _lazyTweens.length = 0;
        };

    _rootTimeline._startTime = _ticker.time;
    _rootFramesTimeline._startTime = _ticker.frame;
    _rootTimeline._active = _rootFramesTimeline._active = true;
    setTimeout(_lazyRender, 1); //on some mobile devices, there isn't a "tick" before code runs which means any lazy renders wouldn't run before the next official "tick".

    Animation._updateRoot = TweenLite.render = function () {
        var i, a, p;
        if (_lazyTweens.length) { //if code is run outside of the requestAnimationFrame loop, there may be tweens queued AFTER the engine refreshed, so we need to ensure any pending renders occur before we refresh again.
            _lazyRender();
        }
        _rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, false, false);
        _rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, false, false);
        if (_lazyTweens.length) {
            _lazyRender();
        }
        if (!(_ticker.frame % 120)) { //dump garbage every 120 frames...
            for (p in _tweenLookup) {
                a = _tweenLookup[p].tweens;
                i = a.length;
                while (--i > -1) {
                    if (a[i]._gc) {
                        a.splice(i, 1);
                    }
                }
                if (a.length === 0) {
                    delete _tweenLookup[p];
                }
            }
            //if there are no more tweens in the root timelines, or if they're all paused, make the _timer sleep to reduce load on the CPU slightly
            p = _rootTimeline._first;
            if (!p || p._paused)
                if (TweenLite.autoSleep && !_rootFramesTimeline._first && _ticker._listeners.tick.length === 1) {
                    while (p && p._paused) {
                        p = p._next;
                    }
                    if (!p) {
                        _ticker.sleep();
                    }
                }
        }
    };

    _ticker.addEventListener("tick", Animation._updateRoot);

    var _register = function (target, tween, scrub) {
            var id = target._gsTweenID,
                a, i;
            if (!_tweenLookup[id || (target._gsTweenID = id = "t" + (_tweenLookupNum++))]) {
                _tweenLookup[id] = {
                    target: target,
                    tweens: []
                };
            }
            if (tween) {
                a = _tweenLookup[id].tweens;
                a[(i = a.length)] = tween;
                if (scrub) {
                    while (--i > -1) {
                        if (a[i] === tween) {
                            a.splice(i, 1);
                        }
                    }
                }
            }
            return _tweenLookup[id].tweens;
        },

        _applyOverwrite = function (target, tween, props, mode, siblings) {
            var i, changed, curTween, l;
            if (mode === 1 || mode >= 4) {
                l = siblings.length;
                for (i = 0; i < l; i++) {
                    if ((curTween = siblings[i]) !== tween) {
                        if (!curTween._gc)
                            if (curTween._enabled(false, false)) {
                                changed = true;
                            }
                    } else if (mode === 5) {
                        break;
                    }
                }
                return changed;
            }
            //NOTE: Add 0.0000000001 to overcome floating point errors that can cause the startTime to be VERY slightly off (when a tween's time() is set for example)
            var startTime = tween._startTime + _tinyNum,
                overlaps = [],
                oCount = 0,
                zeroDur = (tween._duration === 0),
                globalStart;
            i = siblings.length;
            while (--i > -1) {
                if ((curTween = siblings[i]) === tween || curTween._gc || curTween._paused) {
                    //ignore
                } else if (curTween._timeline !== tween._timeline) {
                    globalStart = globalStart || _checkOverlap(tween, 0, zeroDur);
                    if (_checkOverlap(curTween, globalStart, zeroDur) === 0) {
                        overlaps[oCount++] = curTween;
                    }
                } else if (curTween._startTime <= startTime)
                    if (curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime)
                        if (!((zeroDur || !curTween._initted) && startTime - curTween._startTime <= 0.0000000002)) {
                            overlaps[oCount++] = curTween;
                        }
            }

            i = oCount;
            while (--i > -1) {
                curTween = overlaps[i];
                if (mode === 2)
                    if (curTween._kill(props, target)) {
                        changed = true;
                    }
                if (mode !== 2 || (!curTween._firstPT && curTween._initted)) {
                    if (curTween._enabled(false, false)) { //if all property tweens have been overwritten, kill the tween.
                        changed = true;
                    }
                }
            }
            return changed;
        },

        _checkOverlap = function (tween, reference, zeroDur) {
            var tl = tween._timeline,
                ts = tl._timeScale,
                t = tween._startTime;
            while (tl._timeline) {
                t += tl._startTime;
                ts *= tl._timeScale;
                if (tl._paused) {
                    return -100;
                }
                tl = tl._timeline;
            }
            t /= ts;
            return (t > reference) ? t - reference : ((zeroDur && t === reference) || (!tween._initted && t - reference < 2 * _tinyNum)) ? _tinyNum : ((t += tween.totalDuration() / tween._timeScale / ts) > reference + _tinyNum) ? 0 : t - reference - _tinyNum;
        };


    //---- TweenLite instance methods -----------------------------------------------------------------------------

    p._init = function () {
        var v = this.vars,
            op = this._overwrittenProps,
            dur = this._duration,
            immediate = !!v.immediateRender,
            ease = v.ease,
            i, initPlugins, pt, p, startVars;
        if (v.startAt) {
            if (this._startAt) {
                this._startAt.render(-1, true); //if we've run a startAt previously (when the tween instantiated), we should revert it so that the values re-instantiate correctly particularly for relative tweens. Without this, a TweenLite.fromTo(obj, 1, {x:"+=100"}, {x:"-=100"}), for example, would actually jump to +=200 because the startAt would run twice, doubling the relative change.
                this._startAt.kill();
            }
            startVars = {};
            for (p in v.startAt) { //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, 1, from, to).fromTo(e, 1, to, from);
                startVars[p] = v.startAt[p];
            }
            startVars.overwrite = false;
            startVars.immediateRender = true;
            startVars.lazy = (immediate && v.lazy !== false);
            startVars.startAt = startVars.delay = null; //no nesting of startAt objects allowed (otherwise it could cause an infinite loop).
            this._startAt = TweenLite.to(this.target, 0, startVars);
            if (immediate) {
                if (this._time > 0) {
                    this._startAt = null; //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in TimelineLite/Max instances where immediateRender was false (which is the default in the convenience methods like from()).
                } else if (dur !== 0) {
                    return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a TimelineLite or TimelineMax, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
                }
            }
        } else if (v.runBackwards && dur !== 0) {
            //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
            if (this._startAt) {
                this._startAt.render(-1, true);
                this._startAt.kill();
                this._startAt = null;
            } else {
                pt = {};
                for (p in v) { //copy props into a new object and skip any reserved props, otherwise onComplete or onUpdate or onStart could fire. We should, however, permit autoCSS to go through.
                    if (!_reservedProps[p] || p === "autoCSS") {
                        pt[p] = v[p];
                    }
                }
                pt.overwrite = 0;
                pt.data = "isFromStart"; //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
                pt.lazy = (immediate && v.lazy !== false);
                pt.immediateRender = immediate; //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
                this._startAt = TweenLite.to(this.target, 0, pt);
                if (!immediate) {
                    this._startAt._init(); //ensures that the initial values are recorded
                    this._startAt._enabled(false); //no need to have the tween render on the next cycle. Disable it because we'll always manually control the renders of the _startAt tween.
                } else if (this._time === 0) {
                    return;
                }
            }
        }
        this._ease = ease = (!ease) ? TweenLite.defaultEase : (ease instanceof Ease) ? ease : (typeof (ease) === "function") ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenLite.defaultEase;
        if (v.easeParams instanceof Array && ease.config) {
            this._ease = ease.config.apply(ease, v.easeParams);
        }
        this._easeType = this._ease._type;
        this._easePower = this._ease._power;
        this._firstPT = null;

        if (this._targets) {
            i = this._targets.length;
            while (--i > -1) {
                if (this._initProps(this._targets[i], (this._propLookup[i] = {}), this._siblings[i], (op ? op[i] : null))) {
                    initPlugins = true;
                }
            }
        } else {
            initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op);
        }

        if (initPlugins) {
            TweenLite._onPluginEvent("_onInitAllProps", this); //reorders the array in order of priority. Uses a static TweenPlugin method in order to minimize file size in TweenLite
        }
        if (op)
            if (!this._firstPT)
                if (typeof (this.target) !== "function") { //if all tweening properties have been overwritten, kill the tween. If the target is a function, it's probably a delayedCall so let it live.
                    this._enabled(false, false);
                }
        if (v.runBackwards) {
            pt = this._firstPT;
            while (pt) {
                pt.s += pt.c;
                pt.c = -pt.c;
                pt = pt._next;
            }
        }
        this._onUpdate = v.onUpdate;
        this._initted = true;
    };

    p._initProps = function (target, propLookup, siblings, overwrittenProps) {
        var p, i, initPlugins, plugin, pt, v;
        if (target == null) {
            return false;
        }

        if (_lazyLookup[target._gsTweenID]) {
            _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
        }

        if (!this.vars.css)
            if (target.style)
                if (target !== window && target.nodeType)
                    if (_plugins.css)
                        if (this.vars.autoCSS !== false) { //it's so common to use TweenLite/Max to animate the css of DOM elements, we assume that if the target is a DOM element, that's what is intended (a convenience so that users don't have to wrap things in css:{}, although we still recommend it for a slight performance boost and better specificity). Note: we cannot check "nodeType" on the window inside an iframe.
                            _autoCSS(this.vars, target);
                        }
        for (p in this.vars) {
            v = this.vars[p];
            if (_reservedProps[p]) {
                if (v)
                    if ((v instanceof Array) || (v.push && _isArray(v)))
                        if (v.join("").indexOf("{self}") !== -1) {
                            this.vars[p] = v = this._swapSelfInParams(v, this);
                        }

            } else if (_plugins[p] && (plugin = new _plugins[p]())._onInitTween(target, this.vars[p], this)) {

                //t - target 		[object]
                //p - property 		[string]
                //s - start			[number]
                //c - change		[number]
                //f - isFunction	[boolean]
                //n - name			[string]
                //pg - isPlugin 	[boolean]
                //pr - priority		[number]
                this._firstPT = pt = {
                    _next: this._firstPT,
                    t: plugin,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: true,
                    n: p,
                    pg: true,
                    pr: plugin._priority
                };
                i = plugin._overwriteProps.length;
                while (--i > -1) {
                    propLookup[plugin._overwriteProps[i]] = this._firstPT;
                }
                if (plugin._priority || plugin._onInitAllProps) {
                    initPlugins = true;
                }
                if (plugin._onDisable || plugin._onEnable) {
                    this._notifyPluginsOfEnabled = true;
                }

            } else {
                this._firstPT = propLookup[p] = pt = {
                    _next: this._firstPT,
                    t: target,
                    p: p,
                    f: (typeof (target[p]) === "function"),
                    n: p,
                    pg: false,
                    pr: 0
                };
                pt.s = (!pt.f) ? parseFloat(target[p]) : target[((p.indexOf("set") || typeof (target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3))]();
                pt.c = (typeof (v) === "string" && v.charAt(1) === "=") ? parseInt(v.charAt(0) + "1", 10) * Number(v.substr(2)) : (Number(v) - pt.s) || 0;
            }
            if (pt)
                if (pt._next) {
                    pt._next._prev = pt;
                }
        }

        if (overwrittenProps)
            if (this._kill(overwrittenProps, target)) { //another tween may have tried to overwrite properties of this tween before init() was called (like if two tweens start at the same time, the one created second will run first)
                return this._initProps(target, propLookup, siblings, overwrittenProps);
            }
        if (this._overwrite > 1)
            if (this._firstPT)
                if (siblings.length > 1)
                    if (_applyOverwrite(target, this, propLookup, this._overwrite, siblings)) {
                        this._kill(propLookup, target);
                        return this._initProps(target, propLookup, siblings, overwrittenProps);
                    }
        if (this._firstPT)
            if ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration)) { //zero duration tweens don't lazy render by default; everything else does.
                _lazyLookup[target._gsTweenID] = true;
            }
        return initPlugins;
    };

    p.render = function (time, suppressEvents, force) {
        var prevTime = this._time,
            duration = this._duration,
            prevRawPrevTime = this._rawPrevTime,
            isComplete, callback, pt, rawPrevTime;
        if (time >= duration) {
            this._totalTime = this._time = duration;
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
            if (!this._reversed) {
                isComplete = true;
                callback = "onComplete";
            }
            if (duration === 0)
                if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
                    if (this._startTime === this._timeline._duration) { //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
                        time = 0;
                    }
                    if (time === 0 || prevRawPrevTime < 0 || prevRawPrevTime === _tinyNum)
                        if (prevRawPrevTime !== time) {
                            force = true;
                            if (prevRawPrevTime > _tinyNum) {
                                callback = "onReverseComplete";
                            }
                        }
                    this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
                }

        } else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
            this._totalTime = this._time = 0;
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
            if (prevTime !== 0 || (duration === 0 && prevRawPrevTime > 0 && prevRawPrevTime !== _tinyNum)) {
                callback = "onReverseComplete";
                isComplete = this._reversed;
            }
            if (time < 0) {
                this._active = false;
                if (duration === 0)
                    if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
                        if (prevRawPrevTime >= 0) {
                            force = true;
                        }
                        this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
                    }
            } else if (!this._initted) { //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
                force = true;
            }
        } else {
            this._totalTime = this._time = time;

            if (this._easeType) {
                var r = time / duration,
                    type = this._easeType,
                    pow = this._easePower;
                if (type === 1 || (type === 3 && r >= 0.5)) {
                    r = 1 - r;
                }
                if (type === 3) {
                    r *= 2;
                }
                if (pow === 1) {
                    r *= r;
                } else if (pow === 2) {
                    r *= r * r;
                } else if (pow === 3) {
                    r *= r * r * r;
                } else if (pow === 4) {
                    r *= r * r * r * r;
                }

                if (type === 1) {
                    this.ratio = 1 - r;
                } else if (type === 2) {
                    this.ratio = r;
                } else if (time / duration < 0.5) {
                    this.ratio = r / 2;
                } else {
                    this.ratio = 1 - (r / 2);
                }

            } else {
                this.ratio = this._ease.getRatio(time / duration);
            }
        }

        if (this._time === prevTime && !force) {
            return;
        } else if (!this._initted) {
            this._init();
            if (!this._initted || this._gc) { //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
                return;
            } else if (!force && this._firstPT && ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration))) {
                this._time = this._totalTime = prevTime;
                this._rawPrevTime = prevRawPrevTime;
                _lazyTweens.push(this);
                this._lazy = time;
                return;
            }
            //_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
            if (this._time && !isComplete) {
                this.ratio = this._ease.getRatio(this._time / duration);
            } else if (isComplete && this._ease._calcEnd) {
                this.ratio = this._ease.getRatio((this._time === 0) ? 0 : 1);
            }
        }
        if (this._lazy !== false) { //in case a lazy render is pending, we should flush it because the new render is occurring now (imagine a lazy tween instantiating and then immediately the user calls tween.seek(tween.duration()), skipping to the end - the end render would be forced, and then if we didn't flush the lazy render, it'd fire AFTER the seek(), rendering it at the wrong time.
            this._lazy = false;
        }
        if (!this._active)
            if (!this._paused && this._time !== prevTime && time >= 0) {
                this._active = true; //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
            }
        if (prevTime === 0) {
            if (this._startAt) {
                if (time >= 0) {
                    this._startAt.render(time, suppressEvents, force);
                } else if (!callback) {
                    callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
                }
            }
            if (this.vars.onStart)
                if (this._time !== 0 || duration === 0)
                    if (!suppressEvents) {
                        this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _blankArray);
                    }
        }
        pt = this._firstPT;
        while (pt) {
            if (pt.f) {
                pt.t[pt.p](pt.c * this.ratio + pt.s);
            } else {
                pt.t[pt.p] = pt.c * this.ratio + pt.s;
            }
            pt = pt._next;
        }

        if (this._onUpdate) {
            if (time < 0)
                if (this._startAt && this._startTime) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
                    this._startAt.render(time, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
                }
            if (!suppressEvents)
                if (this._time !== prevTime || isComplete) {
                    this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _blankArray);
                }
        }

        if (callback)
            if (!this._gc || force) { //check _gc because there's a chance that kill() could be called in an onUpdate
                if (time < 0 && this._startAt && !this._onUpdate && this._startTime) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
                    this._startAt.render(time, suppressEvents, force);
                }
                if (isComplete) {
                    if (this._timeline.autoRemoveChildren) {
                        this._enabled(false, false);
                    }
                    this._active = false;
                }
                if (!suppressEvents && this.vars[callback]) {
                    this.vars[callback].apply(this.vars[callback + "Scope"] || this, this.vars[callback + "Params"] || _blankArray);
                }
                if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) { //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
                    this._rawPrevTime = 0;
                }
            }
    };

    p._kill = function (vars, target) {
        if (vars === "all") {
            vars = null;
        }
        if (vars == null)
            if (target == null || target === this.target) {
                this._lazy = false;
                return this._enabled(false, false);
            }
        target = (typeof (target) !== "string") ? (target || this._targets || this.target) : TweenLite.selector(target) || target;
        var i, overwrittenProps, p, pt, propLookup, changed, killProps, record;
        if ((_isArray(target) || _isSelector(target)) && typeof (target[0]) !== "number") {
            i = target.length;
            while (--i > -1) {
                if (this._kill(vars, target[i])) {
                    changed = true;
                }
            }
        } else {
            if (this._targets) {
                i = this._targets.length;
                while (--i > -1) {
                    if (target === this._targets[i]) {
                        propLookup = this._propLookup[i] || {};
                        this._overwrittenProps = this._overwrittenProps || [];
                        overwrittenProps = this._overwrittenProps[i] = vars ? this._overwrittenProps[i] || {} : "all";
                        break;
                    }
                }
            } else if (target !== this.target) {
                return false;
            } else {
                propLookup = this._propLookup;
                overwrittenProps = this._overwrittenProps = vars ? this._overwrittenProps || {} : "all";
            }

            if (propLookup) {
                killProps = vars || propLookup;
                record = (vars !== overwrittenProps && overwrittenProps !== "all" && vars !== propLookup && (typeof (vars) !== "object" || !vars._tempKill)); //_tempKill is a super-secret way to delete a particular tweening property but NOT have it remembered as an official overwritten property (like in BezierPlugin)
                for (p in killProps) {
                    if ((pt = propLookup[p])) {
                        if (pt.pg && pt.t._kill(killProps)) {
                            changed = true; //some plugins need to be notified so they can perform cleanup tasks first
                        }
                        if (!pt.pg || pt.t._overwriteProps.length === 0) {
                            if (pt._prev) {
                                pt._prev._next = pt._next;
                            } else if (pt === this._firstPT) {
                                this._firstPT = pt._next;
                            }
                            if (pt._next) {
                                pt._next._prev = pt._prev;
                            }
                            pt._next = pt._prev = null;
                        }
                        delete propLookup[p];
                    }
                    if (record) {
                        overwrittenProps[p] = 1;
                    }
                }
                if (!this._firstPT && this._initted) { //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
                    this._enabled(false, false);
                }
            }
        }
        return changed;
    };

    p.invalidate = function () {
        if (this._notifyPluginsOfEnabled) {
            TweenLite._onPluginEvent("_onDisable", this);
        }
        this._firstPT = null;
        this._overwrittenProps = null;
        this._onUpdate = null;
        this._startAt = null;
        this._initted = this._active = this._notifyPluginsOfEnabled = this._lazy = false;
        this._propLookup = (this._targets) ? {} : [];
        return this;
    };

    p._enabled = function (enabled, ignoreTimeline) {
        if (!_tickerActive) {
            _ticker.wake();
        }
        if (enabled && this._gc) {
            var targets = this._targets,
                i;
            if (targets) {
                i = targets.length;
                while (--i > -1) {
                    this._siblings[i] = _register(targets[i], this, true);
                }
            } else {
                this._siblings = _register(this.target, this, true);
            }
        }
        Animation.prototype._enabled.call(this, enabled, ignoreTimeline);
        if (this._notifyPluginsOfEnabled)
            if (this._firstPT) {
                return TweenLite._onPluginEvent((enabled ? "_onEnable" : "_onDisable"), this);
            }
        return false;
    };


    //----TweenLite static methods -----------------------------------------------------

    TweenLite.to = function (target, duration, vars) {
        return new TweenLite(target, duration, vars);
    };

    TweenLite.from = function (target, duration, vars) {
        vars.runBackwards = true;
        vars.immediateRender = (vars.immediateRender != false);
        return new TweenLite(target, duration, vars);
    };

    TweenLite.fromTo = function (target, duration, fromVars, toVars) {
        toVars.startAt = fromVars;
        toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
        return new TweenLite(target, duration, toVars);
    };

    TweenLite.delayedCall = function (delay, callback, params, scope, useFrames) {
        return new TweenLite(callback, 0, {
            delay: delay,
            onComplete: callback,
            onCompleteParams: params,
            onCompleteScope: scope,
            onReverseComplete: callback,
            onReverseCompleteParams: params,
            onReverseCompleteScope: scope,
            immediateRender: false,
            useFrames: useFrames,
            overwrite: 0
        });
    };

    TweenLite.set = function (target, vars) {
        return new TweenLite(target, 0, vars);
    };

    TweenLite.getTweensOf = function (target, onlyActive) {
        if (target == null) {
            return [];
        }
        target = (typeof (target) !== "string") ? target : TweenLite.selector(target) || target;
        var i, a, j, t;
        if ((_isArray(target) || _isSelector(target)) && typeof (target[0]) !== "number") {
            i = target.length;
            a = [];
            while (--i > -1) {
                a = a.concat(TweenLite.getTweensOf(target[i], onlyActive));
            }
            i = a.length;
            //now get rid of any duplicates (tweens of arrays of objects could cause duplicates)
            while (--i > -1) {
                t = a[i];
                j = i;
                while (--j > -1) {
                    if (t === a[j]) {
                        a.splice(i, 1);
                    }
                }
            }
        } else {
            a = _register(target).concat();
            i = a.length;
            while (--i > -1) {
                if (a[i]._gc || (onlyActive && !a[i].isActive())) {
                    a.splice(i, 1);
                }
            }
        }
        return a;
    };

    TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = function (target, onlyActive, vars) {

        //CodeCraft
        target = Display.get(target);


        if (typeof (onlyActive) === "object") {
            vars = onlyActive; //for backwards compatibility (before "onlyActive" parameter was inserted)
            onlyActive = false;
        }
        var a = TweenLite.getTweensOf(target, onlyActive),
            i = a.length;
        while (--i > -1) {
            a[i]._kill(vars, target);
        }
    };



    /*
     * ----------------------------------------------------------------
     * TweenPlugin   (could easily be split out as a separate file/class, but included for ease of use (so that people don't need to include another <script> call before loading plugins which is easy to forget)
     * ----------------------------------------------------------------
     */
    var TweenPlugin = _class("plugins.TweenPlugin", function (props, priority) {
        this._overwriteProps = (props || "").split(",");
        this._propName = this._overwriteProps[0];
        this._priority = priority || 0;
        this._super = TweenPlugin.prototype;
    }, true);

    p = TweenPlugin.prototype;
    TweenPlugin.version = "1.10.1";
    TweenPlugin.API = 2;
    p._firstPT = null;

    p._addTween = function (target, prop, start, end, overwriteProp, round) {
        var c, pt;
        if (end != null && (c = (typeof (end) === "number" || end.charAt(1) !== "=") ? Number(end) - start : parseInt(end.charAt(0) + "1", 10) * Number(end.substr(2)))) {
            this._firstPT = pt = {
                _next: this._firstPT,
                t: target,
                p: prop,
                s: start,
                c: c,
                f: (typeof (target[prop]) === "function"),
                n: overwriteProp || prop,
                r: round
            };
            if (pt._next) {
                pt._next._prev = pt;
            }
            return pt;
        }
    };

    p.setRatio = function (v) {
        var pt = this._firstPT,
            min = 0.000001,
            val;
        while (pt) {
            val = pt.c * v + pt.s;
            if (pt.r) {
                val = Math.round(val);
            } else if (val < min)
                if (val > -min) { //prevents issues with converting very small numbers to strings in the browser
                    val = 0;
                }
            if (pt.f) {
                pt.t[pt.p](val);
            } else {
                pt.t[pt.p] = val;
            }
            pt = pt._next;
        }
    };

    p._kill = function (lookup) {
        var a = this._overwriteProps,
            pt = this._firstPT,
            i;
        if (lookup[this._propName] != null) {
            this._overwriteProps = [];
        } else {
            i = a.length;
            while (--i > -1) {
                if (lookup[a[i]] != null) {
                    a.splice(i, 1);
                }
            }
        }
        while (pt) {
            if (lookup[pt.n] != null) {
                if (pt._next) {
                    pt._next._prev = pt._prev;
                }
                if (pt._prev) {
                    pt._prev._next = pt._next;
                    pt._prev = null;
                } else if (this._firstPT === pt) {
                    this._firstPT = pt._next;
                }
            }
            pt = pt._next;
        }
        return false;
    };

    p._roundProps = function (lookup, value) {
        var pt = this._firstPT;
        while (pt) {
            if (lookup[this._propName] || (pt.n != null && lookup[pt.n.split(this._propName + "_").join("")])) { //some properties that are very plugin-specific add a prefix named after the _propName plus an underscore, so we need to ignore that extra stuff here.
                pt.r = value;
            }
            pt = pt._next;
        }
    };

    TweenLite._onPluginEvent = function (type, tween) {
        var pt = tween._firstPT,
            changed, pt2, first, last, next;
        if (type === "_onInitAllProps") {
            //sorts the PropTween linked list in order of priority because some plugins need to render earlier/later than others, like MotionBlurPlugin applies its effects after all x/y/alpha tweens have rendered on each frame.
            while (pt) {
                next = pt._next;
                pt2 = first;
                while (pt2 && pt2.pr > pt.pr) {
                    pt2 = pt2._next;
                }
                if ((pt._prev = pt2 ? pt2._prev : last)) {
                    pt._prev._next = pt;
                } else {
                    first = pt;
                }
                if ((pt._next = pt2)) {
                    pt2._prev = pt;
                } else {
                    last = pt;
                }
                pt = next;
            }
            pt = tween._firstPT = first;
        }
        while (pt) {
            if (pt.pg)
                if (typeof (pt.t[type]) === "function")
                    if (pt.t[type]()) {
                        changed = true;
                    }
            pt = pt._next;
        }
        return changed;
    };

    TweenPlugin.activate = function (plugins) {
        var i = plugins.length;
        while (--i > -1) {
            if (plugins[i].API === TweenPlugin.API) {
                _plugins[(new plugins[i]())._propName] = plugins[i];
            }
        }
        return true;
    };

    //provides a more concise way to define plugins that have no dependencies besides TweenPlugin and TweenLite, wrapping common boilerplate stuff into one function (added in 1.9.0). You don't NEED to use this to define a plugin - the old way still works and can be useful in certain (rare) situations.
    _gsDefine.plugin = function (config) {
        if (!config || !config.propName || !config.init || !config.API) {
            throw "illegal plugin definition.";
        }
        var propName = config.propName,
            priority = config.priority || 0,
            overwriteProps = config.overwriteProps,
            map = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_roundProps",
                initAll: "_onInitAllProps"
            },
            Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin",
                function () {
                    TweenPlugin.call(this, propName, priority);
                    this._overwriteProps = overwriteProps || [];
                }, (config.global === true)),
            p = Plugin.prototype = new TweenPlugin(propName),
            prop;
        p.constructor = Plugin;
        Plugin.API = config.API;
        for (prop in map) {
            if (typeof (config[prop]) === "function") {
                p[map[prop]] = config[prop];
            }
        }
        Plugin.version = config.version;
        TweenPlugin.activate([Plugin]);
        return Plugin;
    };


    //now run through all the dependencies discovered and if any are missing, log that to the console as a warning. This is why it's best to have TweenLite load last - it can check all the dependencies for you.
    a = window._gsQueue;
    if (a) {
        for (i = 0; i < a.length; i++) {
            a[i]();
        }
        for (p in _defLookup) {
            if (!_defLookup[p].func) {
                window.console.log("GSAP encountered missing dependency: com.greensock." + p);
            }
        }
    }

    _tickerActive = false; //ensures that the first official animation forces a ticker.tick() to update the time when it is instantiated

})((typeof (module) !== "undefined" && module.exports && typeof (global) !== "undefined") ? global : this || window, "TweenMax");
/*global jQuery,console,Lms*/
/*jshint -W020*/

/**
Administra las opciones que brinda el lms y el api del scorm para acceder a rutas del lms, y variables como nombre del aprendiz.
@class Lms
*/
(function ($) {

    Lms = {};

})(jQuery);
/*global Display,Utils,Core,Event,document,Match,console,jQuery,Timer,Text,Options,Button,Arrays*/
/*jshint -W020*/


/**
Realiza los juegos de relacionar parejas por medio de lineas, esta son cargadas por medio de documentos HTML extenos con la funcion Text.load
la logica del juego permite realizar multiples slide o juegos por paginas, validando todos como si fuera un solo juego.
Se debe configurar las opciones del juego por medio de <b>{@link Options.match}</b>.
@class Match
@example
    //Opciones disponibles:
        intentosMalos: 1,
        eje: "x",
        colorLinea: "#000",
        colorFondo: "#fff",
        anchoDeLinea: 5

*/
(function ($) {

    Match = {};

    var preguntaActual;
    var contenedorDeTexto;
    //Es un multiarray que se encarga de guardar las relaciones que hay con los elementos de origen y destino.
    var relacionesDeLineas;
    //Es un multiarray que guarda las relaciones que debe validar.
    var relacionesDeLineasCorrectas;
    //Guarda las posiciones de la linea que se esta dibujando con respecto a los simbolos de colision.
    var relacionActual;
    var lineasDibujadas;
    var textosParaSimbolos;
    var botonVerificar;
    var funcionFinal;
    var intentosMalos;
    var arrayTextos;
    //Reepresenta el elemento canvas desde Jquery.
    var contenedorCanvas;
    var simbolosOrigen;
    var simbolosDestino;
    var ejePosicion;
    var cantidadElementos;
    var posicionFotogramaOrigen;
    var posicionFotogramaDestino;
    //Reepresenta el elemento canvas directamente con el document.getElementById.
    var canvas;
    var linea;
    //Se utiliza para indicar cuando el cursos o mouse esta presionado para dibujar.
    var clicActivo = false;
    //Las cordenadas hacen referenca a la posicion del mouse para realizar el match.
    var coordenadasNuevas = {
        x: 0,
        y: 0
    };
    var coordenadasActuales = {
        x: 0,
        y: 0
    };
    var coordenadasOrigen = {
        x: 0,
        y: 0
    };
    //Donde queda el mouse cuando se esta moviendo, se utiliza para ver con que objeto colisiono.
    var posicionDeCursor = {
        x: 0,
        y: 0
    };
    var resultado;

    /**
    La ejecución no se inicia hasta no cargar los textos con la funcion {@link Match.loadText}, 
    no es necesario especificar la ruta del simbolo donde carga el contenido si este internamente 
    ya tiene la instancia por defecto "contenedor", de no tenerla se debe especificar la ruta completa. 
    Los simbolos deben tener en su linea de tiempo las etiquetas "normal", "mal" y "bien" para hacer uso de la retroalimentacion.

    @method Match.load
    @param ventana {(String|Object)} Contenedor donde cargara el HTML del juego.
    @param simboloOrigen {String} Nombre en la biblioteca del elemento.
    @param simboloDestino {String} Nombre en la biblioteca del elemento.
    @tutorial Match-load
    @example
        //se carga el Match para la ventana del juego
        Match.load("ventanaJuego", "simboloOrigen", "simboloDestino");
        //si no se tiene el nombre del contenedor por defecto se agrega la ruta completa
        Match.load("ventanaJuego.contenedorDeTexto", "simboloOrigen", "simboloDestino");
    */
    Match.load = function (ventana, simboloOrigen, simboloDestino) {
        try {
            guardarVariablesJuego(ventana, simboloOrigen, simboloDestino);
        } catch (error) {
            console.error("Match.load: " + error);
        }
    };

    /**
    Carga el documento HTML que contiene la estructura donde se encuentra el juego, el contenedor del canvas y 
    el contenedor de los simbolos de origen y destino, se debe especificar el nombre completo del archivo pero sin
    la extensión html. Esta función se debe ejecutar despues del {@link Match.load}

    @method Match.loadText
    @param textos {Array} Array con las rutas de los textos en html para cargar por pagina.
    @example
        //se carga el array con los textos para inciar el juego.
        var arrayTextos = [
            "textos/juego/texto1",
            "textos/juego/texto2"
        ];
        Match.loadText(arrayTextos);
        //el documento HTML debe contener las etiquetas div con los atributos "origen" y "destino" para ubicar los simbolos,
        //"match" sera donde se carga el canvas se puede confugurar el alto y ancho del canvas segun se necesite.
        &lt;div&gt;
            &lt;div class='row'&gt;
                &lt;div class="col-lg-8 col-lg-offset-2"&gt;
                    &lt;div origen&gt;&lt;/div&gt;
                    &lt;div destino&gt;&lt;/div&gt;
                    &lt;div&gt;
                        &lt;match alto="150"&gt;&lt;/match&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        //para cargar los textos dentro de cada elemento se extibren separados por coma (,) dentro de cada div
        &lt;div&gt;
            &lt;div class='row'&gt;
                &lt;div class="col-lg-8 col-lg-offset-2"&gt;
                    &lt;div origen&gt;texto1,texto2,texto3&lt;/div&gt;
                    &lt;div destino&gt;colision1,colision2,colision3&lt;/div&gt;
                    &lt;div&gt;
                        &lt;match alto="150"&gt;&lt;/match&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    */
    Match.loadText = function (textos) {
        try {
            guardarArrayTextos(textos);
        } catch (error) {
            console.error("Match.loadText: " + error);
        }
    };

    /**
    Carga el boton encargado de verificar si las relaciones son las correctas, puede sercargado como un simbolo independiente
    o dentro del archivo HTML que contiene el texto.

    @method Match.button
    @param boton {(String|Object)} Elemento que ejecutara la función para verificar si la relación es la correcta
    @example
        //se agrega el boton de verificar que esta dentro de la ventana de juego.
        Match.button("ventanaJuego.botonVerificar");
        //se carga directamente desde el archivo html cargado a Match.loadText con el atributo <b>boton</b>
        &lt;div&gt;
            &lt;div class='row'&gt;
                &lt;div class="col-lg-8 col-lg-offset-2"&gt;
                    &lt;div origen&gt;&lt;/div&gt;
                    &lt;div destino&gt;&lt;/div&gt;
                    &lt;div&gt;
                        &lt;match alto="150"&gt;&lt;/match&gt;
                    &lt;/div&gt;
                    &lt;div simbolo="boton" <b>boton</b>&gt;&lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    */
    Match.button = function (boton) {
        try {
            guardarBoton(boton);
        } catch (error) {
            console.error("Match.button: " + error);
        }
    };

    /**
    Carga la funcion que se ejecutara cuanto termine el juego, la función que se ejecute entregara como parametro un Boolean indicando con 
    <i>false</i> si perdio y <i>true</i> si gano.

    @method Match.finish
    @param funcion {Function} Funcion a retornar cuando termine el juego.
    @example
        //se agrega la funcion a retornar cuando termine el juego
        Match.finish(juegoTerminado);
        //se crea la funcion con la condición para verificar el resultado
        function juegoTerminado (ganoJuego){
            if(ganoJuego){
                //gano
            } else {
                //perdio
            }
        }
    */
    Match.finish = function (funcion) {
        try {
            cargarFuncionFinal(funcion);
        } catch (error) {
            console.error("Match.finish: " + error);
        }
    };

    /**
    La función se encarga de eliminar el juego de Match y todos los elementos que se cargaron con el.

    @method Match.remove
    @example
        //se elimina el Match por completo
        Match.remove();
    */
    Match.remove = function () {
        try {
            limpiarCanvas();
        } catch (error) {
            console.error("Match.remove: " + error);
        }
    };

    function guardarVariablesJuego(ventana) {
        preguntaActual = 0;
        contenedorDeTexto = Text.containerText(ventana);
        reiniciarVariables();
        botonVerificar = $();
        funcionFinal = function () {};
        intentosMalos = Options.match().intentosMalos;
    }

    function reiniciarVariables() {
        contenedorCanvas = $();
        ejePosicion = "x";
        cantidadElementos = 0;
        posicionFotogramaOrigen = 0;
        posicionFotogramaDestino = 0;
        relacionesDeLineas = [];
        relacionesDeLineasCorrectas = [];
        relacionActual = [];
        lineasDibujadas = [];
        textosParaSimbolos = {
            "origen": [],
            "destino": []
        };
    }

    function guardarArrayTextos(textos) {
        arrayTextos = textos;
        cargarPregunta();
    }

    function cargarPregunta() {
        $.when($.get(arrayTextos[preguntaActual] + ".html")).then(function (archivo) {
            Text.load(contenedorDeTexto, archivo);
            contenedorDeTexto.css({
                "-ms-user-select": "none",
                "-khtml-user-select": "none",
                "-moz-user-select": "none",
                "-webkit-user-select": "none",
                "user-select": "none"
            });
            almacenarTextosElementos();
            cargarCanvas();
            cargarSimbolos();
            configurarLineas();
            redibujarLineas();
            contenedorCanvas.mousedown(function (cursor) {
                clicActivo = true;
                linea.save();
                coordenadasNuevas = capturarPosicionMouse(cursor);
                coordenadasOrigen = capturarPosicionMouse(cursor);
                coordenadasActuales = capturarPosicionMouse(cursor);
            });
            listenerCanvas();
        });
    }

    function almacenarTextosElementos() {
        var textosOrigen = [];
        var textoDestino = [];
        $("#" + contenedorDeTexto.attr("id") + " div[origen]").each(function () {
            var texto = $(this).html();
            var textoSeparadoPor = $(this).attr("separadopor");
            if (textoSeparadoPor) {
                textosOrigen = texto.split(textoSeparadoPor);
            } else {
                textosOrigen = texto.split(",");
            }
            $(this).html("");
        });
        $("#" + contenedorDeTexto.attr("id") + " div[destino]").each(function () {
            var texto = $(this).html();
            var textoSeparadoPor = $(this).attr("separadopor");
            if (textoSeparadoPor) {
                textoDestino = texto.split(textoSeparadoPor);
            } else {
                textoDestino = texto.split(",");
            }
            $(this).html("");
        });
        textosParaSimbolos.origen = textosOrigen;
        textosParaSimbolos.destino = textoDestino;
    }

    function cargarCanvas() {
        var match = $("#" + contenedorDeTexto.attr("id") + " match");
        var anchoCanvas = match.attr("ancho") || contenedorDeTexto.width();
        var altoCanvas = match.attr("alto") || contenedorDeTexto.height();
        var etiquetasHtml = "<canvas id='match' width='" + anchoCanvas + "' height='" + altoCanvas + "'></canvas>";
        ejePosicion = match.attr("eje");
        cantidadElementos = match.attr("cantidadDeElementos");
        match.parent().html(etiquetasHtml);
        contenedorCanvas = $("#match");
        contenedorCanvas.css({
            "cursor": "pointer",
            "position": "absolute"
        });
    }

    function cargarSimbolos() {
        var contenedorSimbolosDestino = $("#" + contenedorDeTexto.attr("id") + " div[destino]");
        var contenedorSimbolosOrigen = $("#" + contenedorDeTexto.attr("id") + " div[origen]");
        posicionFotogramaDestino = contenedorSimbolosDestino.attr("fotograma") || 0;
        posicionFotogramaOrigen = contenedorSimbolosOrigen.attr("fotograma") || 0;
        simbolosDestino = Display.addChildArray(contenedorSimbolosDestino.attr("destino"), "Stage", cantidadElementos);
        simbolosOrigen = Display.addChildArray(contenedorSimbolosOrigen.attr("origen"), "Stage", cantidadElementos);
        for (var i = 0; i < simbolosDestino.length; i++) {
            relacionesDeLineasCorrectas.push([simbolosOrigen[i].getName(true), simbolosDestino[i].getName(true)]);
            moverSimboloAContenedor(simbolosOrigen[i], contenedorSimbolosOrigen);
            moverSimboloAContenedor(simbolosDestino[i], contenedorSimbolosDestino);
        }
        cargarContenidoDentroDeSimbolo();
        desordenarElementos();
        posicionarSimbolos();
        redimensionarCanvas();
    }

    function moverSimboloAContenedor(simboloAMover, contenedor) {
        simboloAMover.appendTo(contenedor);
        simboloAMover.css({
            "position": "relative"
        });
    }

    function cargarContenidoDentroDeSimbolo() {
        Text.load(simbolosOrigen, textosParaSimbolos.origen, "middle center size" + Options.match().tamanoFuente);
        Text.load(simbolosDestino, textosParaSimbolos.destino, "middle center size" + Options.match().tamanoFuente);
        Display.stopFrame(simbolosOrigen, "normal");
        Display.stopFrame(simbolosDestino, "normal");
        if (Display.get(simbolosOrigen[0].getName(true) + ".imagen").length > 0) {
            detenerFotogramaImagen(simbolosOrigen, posicionFotogramaOrigen);
        }
        if (Display.get(simbolosDestino[0].getName(true) + ".imagen").length > 0) {
            detenerFotogramaImagen(simbolosDestino, posicionFotogramaDestino);
        }
        Display.zIndex(contenedorCanvas);
    }

    function detenerFotogramaImagen(arrayDeElementos, numeroFotograma) {
        arrayDeElementos = arrayDeElementos.slice();
        for (var i = 0; i < arrayDeElementos.length; i++) {
            arrayDeElementos[i] = Display.get(arrayDeElementos[i].getName(true) + ".imagen");
        }
        Display.stopFrame(arrayDeElementos, parseInt(numeroFotograma), true);
    }

    function desordenarElementos() {
        simbolosDestino = Arrays.random(simbolosDestino);
        simbolosOrigen = Arrays.random(simbolosOrigen);
    }

    /**
    Los simbolos de origen se posicionan en la parte superios o al lado izquierdo y siempre en (0,0), mientras que 
    los simbolos de destino se posicionan dependiendo el ancho o largo del canvas segun el eje en el que se carga.
    */
    function posicionarSimbolos() {
        var posicionX = 0;
        var posicionY = 0;
        var posicionXSimboloOrigen = 0;
        if (Core.browser.firefox) {
            posicionXSimboloOrigen = 15;
        }
        var simbolo = simbolosOrigen[0];
        var cssContenedor;
        if (ejePosicion === "x") {
            posicionY = simbolo.height() + contenedorCanvas.height();
        } else {
            posicionX = simbolo.width() + contenedorCanvas.width();
            if (Core.browser.firefox) {
                posicionX += 15;
            }
        }
        Display.positionArray(simbolosOrigen, posicionXSimboloOrigen, 0, ejePosicion, simbolosOrigen.length);
        Display.positionArray(simbolosDestino, posicionX, posicionY, ejePosicion, simbolosDestino.length);
    }

    /**
    Ajusta las dimensiones iniciales del canvas para que queden dentro del area de dibujo de los elementos de origen y destino
    despues de que se cargan y se posicionan en el contenedor.
    */
    function redimensionarCanvas() {
        var anchoActual = contenedorCanvas.width();
        var altoActual = contenedorCanvas.height();
        if (ejePosicion === "x") {
            anchoActual = simbolosOrigen[simbolosOrigen.length - 1].position().x - simbolosOrigen[0].position().x + simbolosOrigen[0].width();
            altoActual = simbolosDestino[0].position().y - simbolosOrigen[0].position().y + simbolosOrigen[0].height();
        } else {
            anchoActual = simbolosDestino[0].position().x - simbolosOrigen[0].position().x + simbolosOrigen[0].width();
            altoActual = simbolosOrigen[simbolosOrigen.length - 1].position().y - simbolosOrigen[0].position().y + simbolosOrigen[0].height();
        }
        contenedorCanvas.attr("width", anchoActual);
        contenedorCanvas.attr("height", altoActual);
    }

    function configurarLineas() {
        canvas = document.getElementById("match");
        linea = canvas.getContext("2d");
        linea.strokeStyle = Options.match().colorLinea;
        linea.lineWidth = Options.match().anchoDeLinea;
        linea.lineCap = "round";
        linea.fillStyle = Options.match().colorFondo;
        linea.fillRect(0, 0, canvas.width, canvas.height);
    }

    function redibujarLineas() {
        clicActivo = false;
        if (relacionActual.length === 2 && relacionActual[0] && relacionActual[1]) {
            var cordenadasDeLinea = {
                "origen": cordenadasLineaFinal("origen"),
                "destino": cordenadasLineaFinal("destino")
            };
            existeLinea();
            relacionesDeLineas.push(relacionActual);
            lineasDibujadas.push(cordenadasDeLinea);
            relacionesCompletas();
        }
        relacionActual = [];
        linea.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < lineasDibujadas.length; i++) {
            var origen = lineasDibujadas[i].origen;
            var destino = lineasDibujadas[i].destino;
            linea.beginPath();
            linea.moveTo(origen.x, origen.y);
            linea.lineTo(destino.x, destino.y);
            linea.stroke();
            linea.closePath();
        }
    }

    function cordenadasLineaFinal(posicionArray) {
        posicionArray = (posicionArray === "origen") ? 0 : 1;
        var simbolo = relacionActual[posicionArray];
        var origen = false;
        var coordenadas = {
            "x": 0,
            "y": 0
        };
        for (var i = 0; i < simbolosOrigen.length; i++) {
            if (simbolosOrigen[i].getName(true) === simbolo) {
                simbolo = simbolosOrigen[i];
                origen = true;
                break;
            }
            if (simbolosDestino[i].getName(true) === simbolo) {
                simbolo = simbolosDestino[i];
                break;
            }
        }
        if (ejePosicion === "y") {
            if (origen) {
                coordenadas.y = simbolo.position().y + (simbolo.height() / 2);
                coordenadas.x = simbolo.position().x + simbolo.width();
            } else {
                coordenadas.y = simbolo.position().y + (simbolo.height() / 2);
                coordenadas.x = simbolo.position().x;
            }
            if (Core.browser.firefox) {
                coordenadas.x -= 15;
            }
        } else {
            if (origen) {
                coordenadas.y = simbolo.position().y + simbolo.height();
                coordenadas.x = simbolo.position().x + (simbolo.width() / 2);
            } else {
                coordenadas.y = simbolo.position().y;
                coordenadas.x = simbolo.position().x + (simbolo.width() / 2);
            }
        }
        return coordenadas;
    }

    /**
    Elimina del array de las lineas y los elementos que relaciono las posiciones donde esten los elementos que se seleccionaron
    de momento si se encuentran en el array
    */
    function existeLinea() {
        var posicionArray;
        posicionArray = Arrays.indexOf(relacionesDeLineas, relacionActual[0]);
        if (posicionArray !== -1) {
            relacionesDeLineas.splice(posicionArray, 1);
            lineasDibujadas.splice(posicionArray, 1);
        }
        posicionArray = Arrays.indexOf(relacionesDeLineas, relacionActual[1]);
        if (posicionArray !== -1) {
            relacionesDeLineas.splice(posicionArray, 1);
            lineasDibujadas.splice(posicionArray, 1);
        }
    }

    function relacionesCompletas() {
        if (relacionesDeLineas.length >= simbolosOrigen.length) {
            listenerVerificar();
        } else {
            eliminarListenerVerificar();
        }
    }

    function listenerVerificar() {
        Event.click(botonVerificar, verificarRelaciones);
        Button.over(botonVerificar);
        Options.match().funcionActivarVerificar();
    }

    function verificarRelaciones() {
        detenerEnFotograma();
        for (var i = 0; i < relacionesDeLineasCorrectas.length; i++) {
            var posicionOrigen = Arrays.indexOf(relacionesDeLineas, relacionesDeLineasCorrectas[i][0]);
            var posicionDestino = Arrays.indexOf(relacionesDeLineas, relacionesDeLineasCorrectas[i][1]);
            if (posicionDestino !== posicionOrigen) {
                intentosMalos -= 1;
                Display.stopFrame(relacionesDeLineas[posicionDestino], "mal");
                Display.stopFrame(relacionesDeLineas[posicionOrigen], "mal");
            }
        }
        verificarFinJuego();
    }

    function detenerEnFotograma() {
        Display.stopFrame(simbolosDestino, "bien");
        Display.stopFrame(simbolosOrigen, "bien");
    }

    function verificarFinJuego() {
        eliminarListenerVerificar();
        eliminarListenerCanvas();
        preguntaActual += 1;
        if (preguntaActual >= arrayTextos.length) {
            Timer.load(Options.match().tiempoDeEspera, finDeJuego);
        } else {
            Timer.load(Options.match().tiempoDeEspera, continuarJuego);
        }
    }

    function eliminarListenerCanvas() {
        $(document).unbind("mouseup");
        contenedorCanvas.unbind("mousedown");
        contenedorCanvas.unbind("mousemove");
    }

    function finDeJuego() {
        resultado = true;
        if (intentosMalos < 0) {
            resultado = false;
        }
        limpiarCanvas();
        reiniciarVariables();
        funcionFinal(resultado);
        funcionFinal = function () {};
    }

    function limpiarCanvas() {
        if (linea) {
            linea.clearRect(0, 0, canvas.width, canvas.height);
            eliminarListenerCanvas();
            eliminarElementos();
            eliminarListenerVerificar();
        }
    }

    function eliminarElementos() {
        Display.removeChildArray(simbolosDestino);
        Display.removeChildArray(simbolosOrigen);
        $("#match").remove();
    }

    function eliminarListenerVerificar() {
        Event.removeClick(botonVerificar);
        Button.over(botonVerificar, false);
    }

    function continuarJuego() {
        limpiarCanvas();
        reiniciarVariables();
        cargarPregunta();
    }

    function listenerCanvas() {
        $(document).mouseup(guardarRelacionDestino);
        $(document).mouseup(redibujarLineas);
        contenedorCanvas.mousedown(guardarRelacionOrigen);
        contenedorCanvas.mousemove(function (cursor) {
            dibujarLinea(cursor);
        });
    }

    function guardarRelacionDestino() {
        var padreSimboloOrigen = Display.getProperty(relacionActual[0]).nombrePadre;
        var padreSimboloActual;
        for (var i = 0; i < simbolosOrigen.length; i++) {
            padreSimboloActual = Display.getProperty(simbolosOrigen[i].getName(true)).nombrePadre;
            if (cursorSobreSimbolo(simbolosOrigen[i]) && padreSimboloActual !== padreSimboloOrigen) {
                relacionActual[1] = simbolosOrigen[i].getName(true);
                break;
            }
            padreSimboloActual = Display.getProperty(simbolosDestino[i].getName(true)).nombrePadre;
            if (cursorSobreSimbolo(simbolosDestino[i]) && padreSimboloActual !== padreSimboloOrigen) {
                relacionActual[1] = simbolosDestino[i].getName(true);
                break;
            }
        }
    }

    function guardarRelacionOrigen() {
        relacionActual = [];
        for (var i = 0; i < simbolosOrigen.length; i++) {
            if (cursorSobreSimbolo(simbolosOrigen[i])) {
                relacionActual[0] = simbolosOrigen[i].getName(true);
                break;
            }
            if (cursorSobreSimbolo(simbolosDestino[i])) {
                relacionActual[0] = simbolosDestino[i].getName(true);
                break;
            }
        }
    }

    function dibujarLinea(cursor) {
        if (clicActivo) {
            linea.beginPath();
            linea.moveTo(coordenadasActuales.x, coordenadasActuales.y);
            linea.lineTo(coordenadasNuevas.x, coordenadasNuevas.y);
            linea.stroke();
            linea.closePath();
            coordenadasActuales.x = coordenadasNuevas.x;
            coordenadasActuales.y = coordenadasNuevas.y;
            coordenadasNuevas = capturarPosicionMouse(cursor);
        }
    }

    function capturarPosicionMouse(cursor) {
        posicionDeCursor = {
            "x": cursor.pageX - contenedorCanvas.parent().offset().left,
            "y": cursor.pageY - contenedorCanvas.parent().offset().top
        };
        return posicionDeCursor;
    }

    function cursorSobreSimbolo(simbolo) {
        var posicionColision = simbolo.position();
        var anchoColision = simbolo.outerWidth(true);
        var altoColision = simbolo.outerHeight(true);
        if (posicionDeCursor.x >= posicionColision.x && posicionDeCursor.x <= (anchoColision + posicionColision.x)) {
            if (posicionDeCursor.y >= posicionColision.y && posicionDeCursor.y <= (altoColision + posicionColision.y)) {
                return true;
            }
        }
        return false;
    }

    function guardarBoton(boton) {
        botonVerificar = Display.get(boton);
    }

    function cargarFuncionFinal(funcion) {
        funcionFinal = funcion || function () {};
    }

})(jQuery);
/*global jQuery,Drag,console,Match,Menu,Display,Order,Collision,Message,Event,Options,Button,TweenMax,Text,Cubic,Sound,Talk,Presentation*/
/*jshint -W020*/

/**
Controla menus
@class Menu
*/
(function ($) {

    Menu = {};

    var botonesMenu;
    var mensajeEmergente;
    var contenedorPadreMensaje;
    var contenedorPadreDeMenu;
    var textosMensajesBotones;
    var funcionesBoton;
    var botonActual;
    var limpiarPantalla;
    var elementosExluir;
    var posicionActualMenu;
    var funcionRetornoBotonesPresionados;

    /**
    @method Menu.load
    @param arrayBotones {Array} Botones del menu.
    @param [elementoMensaje=Object] {(String|Object)} Popup donde se mostraran los mensajes.
    */
    Menu.load = function (arrayBotones, elementoMensaje) {
        try {
            cargarMenu(arrayBotones, elementoMensaje);
        } catch (error) {
            console.error("Menu.load: " + error);
        }
    };

    /**
    @method Menu.messageTextLoad
    @param textos {Object} Cada key del objecto debe ser el nombre del boton.
    @example 
        //se cargan los mensajes
        var mensajesBotones = {
            "boton1": "Mensaje del boton 1",
            "boton2": "Mensaje del boton 2",
            "boton3": "Mensaje del boton 3"
        };
        //se carga al menu
        Menu.messageTextLoad(mensajesBotones);
    */
    Menu.messageTextLoad = function (textos) {
        try {
            almacenarTextosMensajesArray(textos);
        } catch (error) {
            console.error("Menu.messageTextLoad: " + error);
        }
    };

    /**
    El nombre de los key del objeto deben ser el nombre de los botones.
    @method Menu.functionButtonMenu
    @param funciones {Object} Por cada key almacena la funcion a ejecutar al presionar un boton
    @example
        //se crea el objeto con las funciones a retornar
        var funciones = {
            "boton1": funcionDeBoton1,
            "boton2": funcionDeBoton2,
            "boton3": funcionDeBoton3
        };
        //se carga al menu
        Menu.functionButtonMenu(funciones);
    */
    Menu.functionButtonMenu = function (funciones) {
        try {
            guardarFuncionesBotones(funciones);
        } catch (error) {
            console.error("Menu.functionButtonMenu: " + error);
        }
    };

    /**
    @method Menu.clearDisplay
    @param excluir {Array} Elemento que no se van a eliminar
    */
    Menu.clearDisplay = function (excluir) {
        try {
            cargarElementosExcluir(excluir);
        } catch (error) {
            console.error("Menu.clearDisplay: " + error);
        }
    };

    /**
    Retornoa o reposiciona el menu
    @method Menu.position
    */
    Menu.position = function (posicionActual) {
        try {
            return obtenerPosicionMenu(posicionActual);
        } catch (error) {
            console.error("Menu.position: " + error);
        }
    };

    /**
    Funcion que se ejecuta siempre que se active una opcion del menu
    @method Menu.functionReturn
    */
    Menu.functionReturn = function (funcion) {
        try {
            cargarFunctionReturn(funcion);
        } catch (error) {
            console.error("Menu.functionReturn: " + error);
        }
    };

    /**
    Recarga el menu y lo reposiciona
    @method Menu.reload
    */
    Menu.reload = function () {
        try {
            reposicionarMenu();
        } catch (error) {
            console.error("Menu.reload: " + error);
        }
    };

    function cargarMenu(arrayBotones, elementoMensaje) {
        botonesMenu = convertirStringAElementos(arrayBotones);
        mensajeEmergente = elementoMensaje || $();
        funcionRetornoBotonesPresionados = function () {};
        limpiarPantalla = false;
        funcionesBoton = {};
        textosMensajesBotones = {};
        botonActual = $();
        cargarPadreMensaje();
        cargarPadreMenu();
        listener();
        contenedorPadreMensaje.hide();
        posicionActualMenu = "";
    }

    function convertirStringAElementos(arrayBotones) {
        var arrayBotonesNuevos = [];
        for (var i = 0; i < arrayBotones.length; i++) {
            var boton = Display.get(arrayBotones[i]);
            arrayBotonesNuevos.push(boton);
        }
        return arrayBotonesNuevos;
    }

    function cargarPadreMensaje() {
        mensajeEmergente = Display.get(mensajeEmergente);
        contenedorPadreMensaje = mensajeEmergente;
        var contenedorTexto = Display.get(mensajeEmergente.getName(true) + "." + Options.containerText());
        if (!$.isEmptyObject(contenedorTexto)) {
            mensajeEmergente = contenedorTexto;
        }
    }

    function cargarPadreMenu() {
        contenedorPadreDeMenu = botonesMenu[0].parent();
    }

    function listener() {
        for (var i = 0; i < botonesMenu.length; i++) {
            var boton = botonesMenu[i];
            boton.click(botonMenuPresionado);
            aplicarMouseEventBoton(boton);
            boton.css({
                "cursor": "pointer"
            });
        }
        Button.over(botonesMenu);
    }

    function botonMenuPresionado(botonPresionado) {
        limpiezaDePantalla();
        botonActual = botonPresionado;
        var nombreBotonPresionado = botonActual.getName();
        posicionActualMenu = nombreBotonPresionado;
        funcionRetornoBotonesPresionados();
        var funcionRetorno = funcionesBoton[nombreBotonPresionado];
        if (funcionRetorno) {
            funcionRetorno(botonPresionado);
        }
        Display.zIndex(contenedorPadreDeMenu);
        botonesEnEstadoNormal();
        if (botonPresionado.getLabelPosition("activo")) {
            botonPresionado.stop("activo");
        }
    }

    function limpiezaDePantalla() {
        Sound.removePlayButtons();
        Sound.stop();
        Message.remove();
        Presentation.remove();
        Order.remove();
        Collision.remove();
        Match.remove();
        Talk.remove();
        if (limpiarPantalla) {
            Display.removeChildAll(elementosExluir);
        }
    }

    function aplicarMouseEventBoton(boton) {
        boton.bind("mouseover", function () {
            cargarTexosMensajeEmergente(boton);
        });
        boton.bind("mouseout", mensajeAnimacionOut);
    }

    function almacenarTextosMensajesArray(objetoTextos) {
        textosMensajesBotones = objetoTextos;
    }

    function guardarFuncionesBotones(funciones) {
        funcionesBoton = funciones;
    }

    function botonesEnEstadoNormal() {
        for (var i = 0; i < botonesMenu.length; i++) {
            if (botonesMenu[i].getLabelPosition("normal")) {
                botonesMenu[i].stop("normal");
            } else {
                botonesMenu[i].stop(0);
            }
        }
    }

    function cargarTexosMensajeEmergente(botonOver) {
        var nombreBotonPresionado = botonOver.getName();
        var mensajeDeBoton = textosMensajesBotones[nombreBotonPresionado];
        if (mensajeDeBoton) {
            contenedorPadreMensaje.show();
            var posicionBoton = botonOver.position();
            contenedorPadreMensaje.css({
                "top": posicionBoton.y + "px",
                "left": posicionBoton.x + "px",
                "position": "absolute"
            });
            TweenMax.to(contenedorPadreMensaje, 0, {
                scaleX: 1,
                scaleY: 1,
                alpha: 1
            });
            mensajeAnimacionIn();
            Text.load(mensajeEmergente, mensajeDeBoton, "middle center");
        }
    }

    function mensajeAnimacionIn() {
        TweenMax.killTweensOf(contenedorPadreMensaje);
        TweenMax.fromTo(contenedorPadreMensaje, 0.5, {
            scaleX: 0,
            scaleY: 0,
            alpha: 0
        }, {
            scaleX: 1,
            scaleY: 1,
            alpha: 1,
            ease: Cubic.easeOut
        });
    }

    function mensajeAnimacionOut() {
        TweenMax.to(contenedorPadreMensaje, 0.2, {
            scaleX: 0,
            scaleY: 0,
            alpha: 0
        });
    }

    function cargarElementosExcluir(excluir) {
        excluir = excluir || [];
        limpiarPantalla = true;
        elementosExluir = excluir;
        elementosExluir.push(contenedorPadreDeMenu);
    }

    function obtenerPosicionMenu(posicionActual) {
        if (posicionActual) {
            var botonActual = Display.get(posicionActual);
            if (botonActual.length > 0) {

            } else {
                posicionActualMenu = "";
            }
            botonesEnEstadoNormal();
        }
        return posicionActualMenu;
    }

    function cargarFunctionReturn(funcion) {
        funcionRetornoBotonesPresionados = funcion;
    }

    function reposicionarMenu() {
        if (contenedorPadreDeMenu) {
            Display.zIndex(contenedorPadreDeMenu);
        }
    }

})(jQuery);
/*global jQuery,console,Message,Display,window,Text,Event,Button,TweenMax,Cubic,document,Presentation*/
/*jshint -W020*/

/**
Encargada del manejo de los mensajes emergentes de las multimedias, mensajes de progreso, fin de juego o de visualizacion de respuestas.
@class Message
*/
(function ($) {

    Message = {};

    var contenedorPadre;
    var botonCerrarMensaje;
    var modal = $();
    var contendorCargadoStage = false;
    var funcionRetorno = function () {};
    var modalVisible = true;
    var modalSobreMenu = false;

    /**
    Carga una ventana de mensaje realizando las animaciones correspondientes y cargando el texto.
    @method Message.load
    @param contenedorMensaje {(Object|String)}
    @param textoMensaje {String} Texto o ruta del archivo html para cargar
    @param botonCerrar {(Object|String)} 
    */
    Message.load = function (contenedorMensaje, textoMensaje, botonCerrar) {
        try {
            cargarModal();
            cargarContenido(contenedorMensaje, textoMensaje);
            listenerContenedor(botonCerrar);
        } catch (error) {
            console.error("Message.load: " + error);
        }
    };

    /**
    Elimina la ventana de mensaje, al eliminar no realiaza las animaciones simplemente la desaparece al isntante, eliminandola
    del DOM.
    @method Message.remove
    @example
        Message.remove();
    */
    Message.remove = function () {
        try {
            eliminarMensaje();
        } catch (error) {
            console.error("Message.remove: " + error);
        }
    };

    /**
    Oculta o muestra la ventana modal detras de la ventana del mensaje, esta funcion debera ser ejecutada antes de cargar
    el mensaje con Message.load para que tenga efecto.
    @method Message.modal
    @param visible {Boolean} Indicar si quiere que este visible el fondo o pantalla modal del mensaje.
    @example
        //Activar la pantalla modal del mensaje.
        Message.modal(true);
        //Desactivar la pantalla modal del mensaje.
        Message.modal(false);
    */
    Message.modal = function (visible) {
        try {
            activarModal(visible);
        } catch (error) {
            console.error("Message.modal: " + error);
        }
    };

    /**
    Ubica la ventana del mensaje sobre el menu principal
    @method Message.onMenu
    */
    Message.onMenu = function (sobreMenu) {
        try {
            cargarModalSobreMenu(sobreMenu);
        } catch (error) {
            console.error("Message.onMenu: " + error);
        }
    };

    /**
    Ejecuta una funcion cuando se cierre la ventana del mesaje por completo
    @method Message.finish 
    @param funcion {Function} Funcion a ejecutar cuando se cierre la ventana de modal
    @example
        function funcionDelMensaje(){
            console.log("ventana mensaje cerrada");
        }
        Message.finish(funcionDelMensaje);
    */
    Message.finish = function (funcion) {
        try {
            cargarFuncionRetorno(funcion);
        } catch (error) {
            console.error("Message.functionReturn: " + error);
        }
    };

    function cargarModal() {
        var html = '<div id="modal-mensaje"></div>';
        if (modalVisible) {
            $("#Stage").append(html);
            modal = $("#modal-mensaje");
            modal.css({
                //"z-index": Display.setZIndex(Display.getZIndex() + 1),
                "width": window.innerWidth + "px",
                "height": window.innerHeight + "px",
                "position": "absolute",
                "background-color": "rgba(136, 135, 135, 0.85)",
                "margin": "auto",
                "left": window.pageXOffset + "px",
                "top": window.pageYOffset + "px",
                "cursor": "pointer"
            });
            Display.zIndex(modal);
        }
    }

    function eliminarModal() {
        TweenMax.killTweensOf(modal);
        modal.remove();
        modal = $();
    }

    function cargarContenido(contenedorMensaje, textoMensaje) {
        modalSobreMenu = false;
        funcionRetorno = function () {};
        contendorCargadoStage = false;
        contenedorPadre = Display.get(contenedorMensaje);
        if (contenedorPadre.length === 0) {
            contenedorPadre = Display.addChild(contenedorMensaje);
            contendorCargadoStage = true;
        }
        Text.load(contenedorPadre, textoMensaje);
        Display.zIndex(contenedorPadre);
        posicionarContenedor();
        mensajeAnimacionIn();
        Presentation.pause();
        cargarModalSobreMenu();
    }

    function posicionarContenedor() {
        var anchoContenedor = contenedorPadre.width();
        var atloContenedor = contenedorPadre.height();
        var posicionX = 500 - (anchoContenedor / 2);
        var posicionY = 320 - (atloContenedor / 2);
        Display.position(contenedorPadre, posicionX, posicionY);
    }

    function listenerContenedor(botonCerrar) {
        botonCerrarMensaje = Display.get(botonCerrar);
        Event.click(botonCerrarMensaje, cerrarMensaje);
        Button.over(botonCerrarMensaje);
        $(document).keyup(function (teclado) {
            //boton ESC
            if (teclado.keyCode === 27) {
                cerrarMensaje();
            }
        });
    }

    function cerrarMensaje() {
        removeListenerContenedor();
        mensajeAnimacionOut();
        modalAnimacionOut();
    }

    function removeListenerContenedor() {
        Event.removeClick(botonCerrarMensaje);
        Button.over(botonCerrarMensaje, false);
    }

    function mensajeAnimacionOut() {
        TweenMax.to(contenedorPadre, 0.5, {
            scaleX: 0,
            scaleY: 0,
            ease: Cubic.easeIn,
            onComplete: eliminarMensaje
        });
    }

    function eliminarMensaje() {
        eliminarModal();
        if (contendorCargadoStage) {
            Display.removeChild(contenedorPadre);
        }
        funcionRetorno();
        funcionRetorno = function () {};
        Presentation.play();
    }

    function modalAnimacionOut() {
        TweenMax.to(modal, 0.5, {
            alpha: 0,
            delay: 0.2,
            ease: Cubic.easeIn
        });
    }

    function mensajeAnimacionIn() {
        TweenMax.from(contenedorPadre, 1, {
            scaleX: 0,
            scaleY: 0,
            ease: Cubic.easeOut
        });
    }

    function cargarFuncionRetorno(funcion) {
        funcionRetorno = funcion;
    }

    function activarModal(estadoModal) {
        modalVisible = estadoModal;
    }

    function cargarModalSobreMenu(sobreMenu) {
        modalSobreMenu = (sobreMenu === undefined) ? false : sobreMenu;
        if (modalSobreMenu) {
            Display.zIndex(modal);
            Display.zIndex(contenedorPadre);
        }
    }


})(jQuery);
/*global jQuery,console,Options*/
/*jshint -W020*/

/**
Permite configurar o personalizar las opciones de la libreria, como hojas de estilo.
@class Options
*/
(function ($) {

    Options = {};

    var opcionesPaginador = {
        "size": 16,
        "weight": "normal",
        "aling": "center",
        "color": "#000000"
    };
    var opcionesTitulo = {
        "size": 24,
        "weight": "bold",
        "color": "#000000"
    };
    var opcionesTexto = {
        "size": 18,
        "aling": "justify",
        "sizeFuente": 14,
        "lineHeight": 1.2,
        "weight": "normal",
        "color": "#000000"
    };
    var opcionesBotones = {
        "scaleOver": 1.1,
        "scaleOut": 1
    };
    var opcionesAudio = {
        "tiempoAudio": 5,
        "rutaAudio": "media",
        "rutaAudioVacio": "media/vacio"
    };
    var opcionesPositionArray = {
        "distanciaEntreElementos": 10
    };
    var opcionesColision = {
        "intentosMalos": 1,
        "duplicarElementos": false,
        "ocultarElementos": false,
        "ejePosicionEnColision": "y"
    };
    var opcionesInput = {
        "intentosMalos": 1,
        "opacidadVerificar": 0.5,
        "mostrarOpcionesBuenas": true,
        "errorPorInput": true,
        "intentosFinales": 0,
        "tiempoDeEspera": 3,
        "anchoInput": "auto",
        "funcionActivarVerificar": function () {},
        "funcionCambioPagina": function () {}
    };
    var opcionesDrag = {
        "eje": "xy"
    };
    var opcionesOrdenar = {
        "intentosMalos": 1,
        "eje": "x",
        "errorPorFrase": false,
        "tiempoDeEspera": 3,
        "size": 18,
        "separadoPor": ","
    };
    var opcionesMatch = {
        "intentosMalos": 1,
        "eje": "x",
        "colorLinea": "#000",
        "colorFondo": "#fff",
        "anchoDeLinea": 5,
        "tiempoDeEspera": 3,
        "tamanoFuente": 18,
        "funcionActivarVerificar": function () {}
    };
    var opcionesConcentrece = {
        "intentosMalos": 1,
        "tiempoDeEspera": 3,
        "colorBien": "rgba(64, 232, 85, 0.701961)",
        "colorMal": "rgba(232, 64, 64, 0.701961)"
    };
    var opcionesControlAudio = {
        "colorFondo": "9B9B9B",
        "colorBarra": "65C8D0"
    };
    var fuenteTexto = "Arial, 'Helvetica Neue', Helvetica, sans-serif";
    var nombreContenedorTexto = "contenedor";

    /**
    Personaliza el css de la libreria aplicando el efecto a los titulos de las presentaciones.
    @method Options.title
    @param opciones {Object} Carga las propiedades a modificar del elemento.
    @return {Object} Object Opciones actuales.
    @example
        //Propiedades permitidas para cambiar.
        Options.title({
            size: 24,
            weight: "bold",
            color: "#000000"
        });
        //para ver el contenido o las opciones actuales
        console.log(Options.title());
    */
    Options.title = function (opciones) {
        if (opciones !== undefined) {
            opcionesTitulo = $.extend({}, opcionesTitulo, opciones);
        }
        return opcionesTitulo;
    };

    /**
    Personaliza el css de la libreria aplicando el efecto a los textos de las presentaciones y conversaciones.
    @method Options.text
    @param opciones {Object} Carga las propiedades a modificar del elemento.
    @return {Object} Object Opciones actuales.
    @example
        //Propiedades permitidas para cambiar.
         Options.text({
            size: 18,
            aling: "justify",
            sizeFuente: 14, //Utilizado para los pies de paginas de las imagenes referenciando Fuente. Fuente: SENA, Fuente: Fotolia(2014)
            lineHeight: 1.2, //Espacio entre saltos de linea o interlineado
            weight: "normal", //para negrilla use bold
            color: "#000000"
        });
        //para ver el contenido o las opciones actuales
        console.log(Options.text());
    */
    Options.text = function (opciones) {
        if (opciones !== undefined) {
            opcionesTexto = $.extend({}, opcionesTexto, opciones);
        }
        return opcionesTexto;
    };

    /**
    Personaliza el css de la libreria aplicando el efecto a la paginación del las presentaciones.
    @method Options.pagination
    @param opciones {Object} Carga las propiedades a modificar del elemento.
    @return {Object} Object Opciones actuales.
    @example
        //Propiedades permitidas para cambiar.
        Options.pagination({
            size: 16,
            weight: "normal",
            aling: "center",
            color: "#000000"
        });
        //para ver el contenido o las opciones actuales
        console.log(Options.pagination());
    */
    Options.pagination = function (opciones) {
        if (opciones !== undefined) {
            opcionesPaginador = $.extend({}, opcionesPaginador, opciones);
        }
        return opcionesPaginador;
    };

    /**
    Personaliza las opciones de los audios.
    @method Options.opcionesAudio
    @param opciones {Object} Carga las propiedades a modificar del elemento.
    @return {Object} Object Opciones actuales.
    @example
        //Propiedades permitidas para cambiar.
        Options.opcionesAudio({
             tiempoAudio: 5, //Timer que reemplaza un audio que no se encuentra
             rutaAudio: "media", //donde se almacenan los audios
             rutaAudioVacio: "media/vacio" //cuando no se encuentre un audio se reemplazara por este
        });
        //para ver el contenido o las opciones actuales
        console.log(Options.opcionesAudio());
    */
    Options.sound = function (opciones) {
        if (opciones !== undefined) {
            opcionesAudio = $.extend({}, opcionesAudio, opciones);
        }
        return opcionesAudio;
    };

    /**
    Personaliza el tipo de fuente a usar en toda la presentación para los textos cargados dinamicamente.
    @method Options.font
    @param [fuente=Arial] {String} Cadena de texto con el nombre de la fuente a utilizar.
    realiza el return.
    @return {String} String Si no se pasa parametro a la funcion retorna las fuentes permitidas.
    @example
        //se cambia el tipo de fuente
        Options.font("ComicSans");
        //se retorna el tipo de fuente
        console.log(Options.font());
    */
    Options.font = function (fuente) {
        if (fuente !== undefined && typeof fuente === "string") {
            fuenteTexto = fuente;
        }
        return fuenteTexto;
    };

    /**
    Personaliza el nombre del contenedor por defecto para cargar los textos dinamicos con la clase Text.
    @method Options.containerText 
    @param [nombre=contenedor] {String} Cadena de texto con el nombre a utilizar por defecto para los contenedores de texto.
    @return {String} String Si no se pasa parametro a la funcion retorna el nombre por defecto del contendor de texto de la funcion Text.load.
    @example
        //se cambia el nombre por defecto del contenedor
        Options.textContainer("contenedorTexto");
        //se retorna el nombre del contenedor
        console.log(Options.textContainer());
    */
    Options.containerText = function (nombre) {
        if (nombre !== undefined && typeof nombre === "string") {
            nombreContenedorTexto = nombre;
        }
        return nombreContenedorTexto;
    };

    /**
    Aplica las opciones para todos los botones de la multimedia.
    @method Options.button
    @param opciones {Object} Carga las propiedades a modificar del elemento.
    @return {Object} Object Opciones actuales.
    @example
        //Propiedades permitidas para cambiar.
        Options.button({
            scaleOver: 1.1,
            scaleOut: 1
        });
        //para ver el contenido o las opciones actuales
        console.log(Options.button());
    */
    Options.button = function (opciones) {
        if (opciones !== undefined) {
            opcionesBotones = $.extend({}, opcionesBotones, opciones);
        }
        return opcionesBotones;
    };

    /**
    Aplica las opciones para posicionar un array de elementos.
    @method Options.positionArray
    @param opciones {Object} Carga las propiedades a modificar del elemento.
    @return {Object} Object Opciones actuales.
    @example
        //Propiedades permitidas para cambiar.
        Options.positionArray({
            distanciaEntreElementos: 10
        });
        //para ver el contenido o las opciones actuales
        console.log(Options.positionArray());
    */
    Options.positionArray = function (opciones) {
        if (opciones !== undefined) {
            opcionesPositionArray = $.extend({}, opcionesPositionArray, opciones);
        }
        return opcionesPositionArray;
    };

    /**
    Aplica las opciones para todos el juego de colision.
    @method Options.collision
    @param opciones {Object} Carga las propiedades a modificar del elemento.
    @return {Object} Object Opciones actuales.
    @example
        //Propiedades permitidas para cambiar.
        Options.collision({
            intentosMalos: 1,
            duplicarElementos: false,
            ocultarElementos: false,
            ejePosicionEnColision: "y"
        });
        //para ver el contenido o las opciones actuales
        console.log(Options.collision());
    */
    Options.collision = function (opciones) {
        if (opciones !== undefined) {
            opcionesColision = $.extend({}, opcionesColision, opciones);
        }
        return opcionesColision;
    };

    /**
    Aplica las opciones para todos el juego de input o escritura por teclado.
    @method Options.input
    @param opciones {Object} Carga las propiedades a modificar del elemento.
    @return {Object} Object Opciones actuales.
    @example
        //Propiedades permitidas para cambiar.
        Options.input({
            intentosMalos: 1,
            opacidadVerificar: 0.5,
            mostrarOpcionesBuenas: true,
            errorPorInput: true,
            intentosFinales:0,
            tiempoDeEspera: 3,
            anchoInput: "auto",
            funcionActivarVerificar: function(){},
            funcionCambioPagina: function () {}
        });
        //para ver el contenido o las opciones actuales
        console.log(Options.collision());
    */
    Options.input = function (opciones) {
        if (opciones !== undefined) {
            opcionesInput = $.extend({}, opcionesInput, opciones);
        }
        return opcionesInput;
    };

    /**
    Aplica las opciones del drag.
    @method Options.drag
    @param opciones {Object} Carga las propiedades a modificar del elemento.
    @return {Object} Object Opciones actuales.
    @example
        //Propiedades permitidas para cambiar.
        Options.drag({
            eje: "xy"
        });
        //para ver el contenido o las opciones actuales
        console.log(Options.drag());
    */
    Options.drag = function (opciones) {
        if (opciones !== undefined) {
            opcionesDrag = $.extend({}, opcionesDrag, opciones);
        }
        return opcionesDrag;
    };

    /**
    Aplica las opciones de juegos de ordenar.
    @method Options.order
    @param opciones {Object} Carga las propiedades a modificar del elemento.
    @return {Object} Object Opciones actuales.
    @example
        //Propiedades permitidas para cambiar.
        Options.order({
            intentosMalos: 1,
            eje: "x",
            errorPorFrase: false,
            tiempoDeEspera: 3,
            size: 18,
            separadoPor: ","
        });
        //para ver el contenido o las opciones actuales
        console.log(Options.order());
    */
    Options.order = function (opciones) {
        if (opciones !== undefined) {
            opcionesOrdenar = $.extend({}, opcionesOrdenar, opciones);
        }
        return opcionesOrdenar;
    };

    /**
    Aplica las opciones de juegos de relacion o match.
    @method Options.match
    @param opciones {Object} Carga las propiedades a modificar del elemento.
    @return {Object} Object Opciones actuales.
    @example
        //Propiedades permitidas para cambiar.
        Options.match({
            intentosMalos: 1,
            eje: "x",
            cantidadElementos: 1,
            colorLinea: "#000",
            colorFondo: "#fff",
            anchoDeLinea: 5,
            tamanoFuente: 18,
            funcionActivarVerificar: function(){}
        });
        //para ver el contenido o las opciones actuales
        console.log(Options.match());
    */
    Options.match = function (opciones) {
        if (opciones !== undefined) {
            opcionesMatch = $.extend({}, opcionesMatch, opciones);
        }
        return opcionesMatch;
    };

    /**
    Aplica las opciones de juegos de relacion o match.
    @method Options.concentrate
    @param opciones {Object} Carga las propiedades a modificar del elemento.
    @return {Object} Object Opciones actuales.
    @example
        //Propiedades permitidas para cambiar.
        Options.concentrate({
            intentosMalos: 1,
            tiempoDeEspera: 3,
            colorBien: "rgba(64, 232, 85, 0.701961)",
            colorMal: "rgba(232, 64, 64, 0.701961)"
        });
        //para ver el contenido o las opciones actuales
        console.log(Options.match());
    */
    Options.concentrate = function (opciones) {
        if (opciones !== undefined) {
            opcionesMatch = $.extend({}, opcionesConcentrece, opciones);
        }
        return opcionesConcentrece;
    };

    /**
    Aplica las opciones para las barra de control de audio.

    @method Options.controlAudio
    @param opciones {Object} Carga las propiedades a modificar del elemento.
    @return {Object} Object Opciones actuales.
    @example
        //Propiedades permitidas para cambiar.
        Options.controlAudio({
            colorFondo: "9B9B9B",
            colorBarra: "65C8D0"
        });
        //para ver el contenido o las opciones actuales
        console.log(Options.controlAudio());
    */
    Options.controlAudio = function (opciones) {
        if (opciones !== undefined) {
            opcionesControlAudio = $.extend({}, opcionesControlAudio, opciones);
        }
        return opcionesControlAudio;
    };

})(jQuery);
/*global console,jQuery,Order,Display,Drag,Button,Text,Arrays,Timer,Event,Options*/
/*jshint -W020*/

/**
Juego de ordenar palabras o fraces.
@class Order
*/
(function ($) {

    Order = {};

    var funcionEstado;
    var funcionFinal;
    var simboloElementoOrdenar;
    var colisionActual;
    var botonVerificar;
    var resultado;
    var intentosActuales;
    var intentosMalos;
    var posicionElementoActual;
    var contenedorLimite;
    var contenedorPadre;
    var preguntaActual;
    var arrayTextosElementos;
    var arrayElementosParaMover = [];
    var posicionSimboloOrdenar;
    var posicionSimboloOrdenarInicial;
    var fraceActualDelDrag;
    var posicionOrigen;
    var posicionEnDrag;



    /**
    @method Order.load
    @param nombreSimbolo {Array} Elementos que contienen el los textos a ordenar.
    @param posicionSimbolo {Object} Posicion donde se ubicara el simbolo.
    @param [limite=Stage] {String} Limite en el que se mueven los elementos.
    */
    Order.load = function (nombreSimbolo, posicionSimbolo, limite) {
        try {
            cargarOrdenar(nombreSimbolo, posicionSimbolo, limite);
        } catch (error) {
            console.error("Order.load: " + error);
        }
    };

    /**
    @method Order.textVerify
    */
    Order.textVerify = function (texto) {
        try {
            cargarArchivoDeTexto(texto);
        } catch (error) {
            console.error("Order.textVerify: " + error);
        }
    };

    /**
    Identifica cual es el boton que se encarga de verificar el estado de las palabras ordenadas.
    @method Order.button
    @param boton {*} Elemento que verificara el estado de las palabras ordenadas.
    @example
        var boton = Display.get("boton");
        Order.button(boton);
    */
    Order.button = function (boton) {
        try {
            cargarBoton(boton);
        } catch (error) {
            console.error("Order.button: " + error);
        }
    };

    /**
    Ejecuta la funcion cuando se presiona el boton de verificar y retorna la cantidad de intentos malos que lleva.
    @method Order.stateOrder
    @param funcion {Function} Funcion a ejecutar cuando se presione el boton de verificar.
    @example
        Order.stateOrder(funcion);
        function funcion(intentos){
            alert("intentos restantes: " + intentos);
        }
    */
    Order.stateOrder = function (funcion) {
        try {
            cargarFuncionEstado(funcion);
        } catch (error) {
            console.error("Order.stateOrder: " + error);
        }
    };

    /**
    Retorna un boolean indicando si gano o perdio la actividad.
    @method Order.finish
    @param funcion {Function} Funcion de retorno cuando termina el juego.
    @example
        Order.finish(funcionFinal);
        function funcionFinal (gano){
            if(gano){
                alert("gano");
            } else {
                alert("perdio");
            }
        }
    */
    Order.finish = function (funcion) {
        try {
            cargarFuncionFinal(funcion);
        } catch (error) {
            console.error("Order.finish: " + error);
        }
    };

    /**
    Automaticamente al terminar el juego se ejecuta esta funcion.
    @method Order.remove
    @example
        //se detiene el juego antes de finalizar
        Order.remove();
    */
    Order.remove = function () {
        try {
            eliminarOrdenar();
        } catch (error) {
            console.error("Order.remove: " + error);
        }
    };

    function cargarOrdenar(nombreDelSimboloOrdenar, posicionDeSimbolo, limite) {
        reiniciarOpciones();
        contenedorLimite = limite || "Stage";
        contenedorPadre = Display.get(contenedorLimite).parent();
        if (contenedorLimite === "Stage") {
            contenedorPadre = "Stage";
        }
        simboloElementoOrdenar = nombreDelSimboloOrdenar;
        posicionSimboloOrdenarInicial = posicionDeSimbolo;
    }

    function reiniciarOpciones() {
        funcionEstado = function () {};
        funcionFinal = function () {};
        posicionSimboloOrdenar = {};
        botonVerificar = $();
        preguntaActual = 0;
        arrayTextosElementos = [];
        arrayElementosParaMover = [];
        intentosMalos = Options.order().intentosMalos;
    }

    function cargarArchivoDeTexto(textos) {
        arrayTextosElementos = textos.slice();
        cargarTextoBuenoEnArray();
    }

    function cargarTextoBuenoEnArray() {
        posicionSimboloOrdenar = {
            x: posicionSimboloOrdenarInicial.x,
            y: posicionSimboloOrdenarInicial.y
        };
        $.when($.get(arrayTextosElementos[preguntaActual] + ".html")).then(function (archivo) {
            Text.load(contenedorPadre, archivo);
            var elementosOrdenar = $("#" + contenedorPadre.attr("id") + " ordenar");
            var textosBuenos = [];
            arrayElementosParaMover[preguntaActual] = [];
            elementosOrdenar.each(function () {
                var separarTextosPor = $(this).attr("separadopor");
                var texto = $(this).html();
                if (separarTextosPor) {
                    textosBuenos.push(texto.split(separarTextosPor));
                } else {
                    textosBuenos.push(texto.split(Options.order().separadoPor));
                }
                cargarElementosParaOrdenar(textosBuenos[textosBuenos.length - 1].length);
            });
            arrayTextosElementos[preguntaActual] = textosBuenos;
            cargarTextosElementosOrdenar();
            almacenarPosicionOrigen();
            reposicionarElementos();
            cargarDrag();
            cargarListenerBotonVerificar();
            organizarContenedorDeElementos();
        });
    }

    function cargarElementosParaOrdenar(numeroElementos) {
        var arrayElementosNuevos = Display.addChildArray(simboloElementoOrdenar, contenedorPadre, numeroElementos);
        arrayElementosParaMover[preguntaActual].push(arrayElementosNuevos);
        Display.positionArray(arrayElementosNuevos, posicionSimboloOrdenar.x, posicionSimboloOrdenar.y);
        posicionSimboloOrdenar.y += Display.get(simboloElementoOrdenar).height() + 10;
    }

    function organizarContenedorDeElementos() {
        var anchoCaja = Display.get(simboloElementoOrdenar).height() + 10;
        $("#" + contenedorPadre.attr("id") + " td").css({
            "height": anchoCaja + "px"
        });
        $("#" + contenedorPadre.attr("id") + " ordenar").remove();
    }

    function cargarTextosElementosOrdenar() {
        var elementosOrdenar = arrayElementosParaMover[preguntaActual];
        var textoOrdenar = arrayTextosElementos[preguntaActual];
        for (var i = 0; i < elementosOrdenar.length; i++) {
            Text.load(elementosOrdenar[i], textoOrdenar[i], "middle center size" + Options.order().size);
        }
    }

    function almacenarPosicionOrigen() {
        posicionOrigen = {};
        posicionEnDrag = [];
        var elementosOrdenar = arrayElementosParaMover[preguntaActual];
        for (var fraceActual = 0; fraceActual < elementosOrdenar.length; fraceActual++) {
            var elementosDeFrace = elementosOrdenar[fraceActual];
            var posicionesElementosDeFrace = [];
            for (var i = 0; i < elementosDeFrace.length; i++) {
                var elementoActual = Display.get(elementosDeFrace[i]);
                posicionOrigen[elementoActual.getName()] = elementoActual.position();
                posicionesElementosDeFrace.push(elementoActual.position());
            }
            posicionesElementosDeFrace = Arrays.random(posicionesElementosDeFrace);
            posicionEnDrag.push(posicionesElementosDeFrace);
        }
    }

    function reposicionarElementos() {
        var elementosOrdenar = arrayElementosParaMover[preguntaActual];
        for (var fraceActual = 0; fraceActual < elementosOrdenar.length; fraceActual++) {
            var elementosDeFrace = elementosOrdenar[fraceActual];
            for (var i = 0; i < elementosDeFrace.length; i++) {
                var elementoActual = Display.get(elementosDeFrace[i]);
                var posicionActual = posicionEnDrag[fraceActual][i];
                Display.position(elementoActual, posicionActual.x, posicionActual.y);
            }
        }
    }

    function cargarDrag() {
        Options.drag({
            eje: Options.order().eje
        });
        var elementosOrdenar = arrayElementosParaMover[preguntaActual];
        Drag.load(elementosOrdenar, false, contenedorLimite);
        Drag.functionReturnStart(almacenarPosicionElementoActual);
        Drag.functionReturnDrag(detectarColisionConElementos);
        Drag.functionReturnDrop(reposicionarElementos);
    }

    function almacenarPosicionElementoActual(elemento) {
        posicionElementoActual = elemento.position();
        var elementosOrdenar = arrayElementosParaMover[preguntaActual];
        for (var fraceActual = 0; fraceActual < elementosOrdenar.length; fraceActual++) {
            var elementosDeFrace = elementosOrdenar[fraceActual];
            for (var i = 0; i < elementosDeFrace.length; i++) {
                var elementoActual = Display.get(elementosDeFrace[i]);
                if (elementoActual.attr("id") === elemento.attr("id")) {
                    fraceActualDelDrag = fraceActual;
                    break;
                }
            }
        }
    }

    function detectarColisionConElementos(elemento) {
        var elementosOrdenar = arrayElementosParaMover[preguntaActual];
        for (var fraceActual = 0; fraceActual < elementosOrdenar[fraceActualDelDrag].length; fraceActual++) {
            var elementoActual = Display.get(elementosOrdenar[fraceActualDelDrag][fraceActual]);
            colisionActual = elementoActual;
            if (elementoActual.attr("id") !== elemento.attr("id") && colisionConCursor()) {
                intercambiarPosicionElementos(fraceActualDelDrag);
            }
        }
    }

    function colisionConCursor() {
        var posicionCursor = Drag.cursorPosition();
        var posicionColision = colisionActual.position();
        var anchoColision = colisionActual.outerWidth(true);
        var altoColision = colisionActual.outerHeight(true);
        if (Options.order().eje === "x") {
            if (posicionCursor.x >= posicionColision.x && posicionCursor.x <= (anchoColision + posicionColision.x)) {
                return true;
            }
        } else {
            if (posicionCursor.y >= posicionColision.y && posicionCursor.y <= (altoColision + posicionColision.y)) {
                return true;
            }
        }
        return false;
    }

    function intercambiarPosicionElementos(fraceActual) {
        var posicionElementoColision = colisionActual.position();
        var posicionArrayColision;
        var posicionArrayActual;
        for (var i = 0; i < posicionEnDrag[fraceActual].length; i++) {
            var posicion = posicionEnDrag[fraceActual][i];
            if (posicion.x === posicionElementoColision.x && Options.order().eje === "x") {
                posicionArrayColision = i;
            }
            if (posicion.y === posicionElementoColision.y && Options.order().eje === "y") {
                posicionArrayColision = i;
            }
            if (posicion.x === posicionElementoActual.x && Options.order().eje === "x") {
                posicionArrayActual = i;
            }
            if (posicion.y === posicionElementoActual.y && Options.order().eje === "y") {
                posicionArrayActual = i;
            }
        }
        posicionEnDrag[fraceActual][posicionArrayActual] = posicionElementoColision;
        posicionEnDrag[fraceActual][posicionArrayColision] = posicionElementoActual;
        posicionElementoActual = posicionElementoColision;
        reposicionarElementos();
    }

    function cargarBoton(boton) {
        botonVerificar = Display.get(boton);
    }

    function cargarListenerBotonVerificar() {
        Event.click(botonVerificar, verificarOrdenDeElementos);
        Button.over(botonVerificar);
    }

    function verificarOrdenDeElementos() {
        intentosActuales = 0;
        var elementosOrdenar = arrayElementosParaMover[preguntaActual];
        var intentoPorFrase = 0;
        for (var fraceActual = 0; fraceActual < elementosOrdenar.length; fraceActual++) {
            var elementosDeFrace = elementosOrdenar[fraceActual];
            for (var i = 0; i < elementosDeFrace.length; i++) {
                var elementoActual = Display.get(elementosDeFrace[i]);
                var posicionActual = elementoActual.position();
                var posicionBien = posicionOrigen[elementoActual.getName()];
                if (posicionBien.x === posicionActual.x && posicionBien.y === posicionActual.y) {
                    detenerFotogramaElementoMovido(elementoActual, "bien");
                } else {
                    detenerFotogramaElementoMovido(elementoActual, "mal");
                    intentoPorFrase += 1;
                }
            }
            verificarIntentos(intentoPorFrase);
            intentoPorFrase = 0;
        }
        verificarFinJuego();
        funcionEstado(intentosActuales);
    }

    function detenerFotogramaElementoMovido(elemento, fotograma) {
        elemento.stop(fotograma);
    }

    function verificarIntentos(intentoPorFrase) {
        intentoPorFrase = Math.round(intentoPorFrase / 2);
        if (Options.order().errorPorFrase && intentoPorFrase > 0) {
            intentosMalos -= 1;
        } else {
            intentosMalos -= intentoPorFrase;
        }
        intentosActuales = intentosMalos;
        if (intentosMalos < 0) {
            intentosActuales = 0;
        }
    }

    function verificarFinJuego() {
        eliminarOrdenar();
        preguntaActual += 1;
        if (preguntaActual >= arrayTextosElementos.length) {
            Timer.load(Options.order().tiempoDeEspera, finDeJuego);
        } else {
            Timer.load(Options.order().tiempoDeEspera, function () {
                eliminarElementosOrdenar();
                cargarTextoBuenoEnArray();
            });
        }
    }

    function finDeJuego() {
        resultado = true;
        if (intentosMalos < 1) {
            resultado = false;
        }
        eliminarOrdenar();
        eliminarElementosOrdenar();
        funcionEstado = function () {};
        funcionFinal(resultado);
    }

    function eliminarElementosOrdenar() {
        var elementosOrdenar = arrayElementosParaMover[preguntaActual - 1];
        arrayElementosParaMover = [];
        Display.removeChildArray(elementosOrdenar);
    }

    function cargarFuncionEstado(funcion) {
        funcionEstado = funcion || function () {};
        funcionEstado(intentosMalos);
    }

    function cargarFuncionFinal(funcion) {
        funcionFinal = funcion || function () {};
    }

    function eliminarOrdenar() {
        eliminarListenerBotonVerificar();
        Options.drag({
            eje: "xy"
        });
        var elementosOrdenar = arrayElementosParaMover;
        Drag.remove(elementosOrdenar);
        Drag.functionReturnStart(function () {});
        Drag.functionReturnDrag(function () {});
        Drag.functionReturnDrop(function () {});
    }

    function eliminarListenerBotonVerificar() {
        Event.removeClick(botonVerificar);
        Button.over(botonVerificar, false);
    }

})(jQuery);
/*global jQuery,console,Presentation,Button,Text,Display,Event,Timer,TweenMax,Style,Sound,Cubic,Utils,Options,Core,Blob,window,Worker,document,Html,setInterval,clearInterval,Arrays*/
/*jshint -W020*/


/**
Maneja las presentaciones de las multimedias.
Antes de hacer el llamado a alguna funcion de esta clase se debe de cargar el simbolo previamente, luego declara el container con la funcion
Presentation.container, despues de carga el texto con Presentation.folderText.
@class Presentation
*/
(function ($) {


    Presentation = {};

    var botonAtras = $();
    var botonAdelante = $();
    var paginacion = $();
    var contenedorPresentacion = $();
    var paginaActual;
    var arrayFuncionesDeRetorno = [];
    var funcionFinal = function () {};
    var rutaCarpetaTextos;
    var cantidadDePaginas;
    var arrayTextosCargados;
    var arrayDeEnlacesHtml;
    var opcionFuncionFinalActivada;
    var numeroDeArchivo;
    var barraDesplazadora;
    var abecedario = ["", "a", "b", "c", "d", "e", "f"];
    var letraActual;
    //Almacena el numero y lera de la pagina para la carga del audio
    var nombreDePagina;

    /**
    En la paginacion se pasa la ruta completa del contenedor, se recomienda almacenar este contenedor dentro de un simbolo.
    El simbolo que almacena todos los elementos de la presentación o conversación debe haber sido cargado antes de ejecutar esta funcion.
    @method Presentation.load
    @param contenedor {(String|Object)} Nombre del contenedor donde se cargara el texto.
    @param botonAtras {(String|Object)} Nombre del boton para realizar la navegación hacia atras.
    @param botonAdelante {(String|Object)} Nombre del boton para realizar la navegación hacia adelante.
    @param [paginacion=null] {(String|Object)} Nombre de contenedor de la paginación.
    @example
        //se carga una ventana de presentacion
        Presentation.load("ventana.contenedor","ventana.botonAtras","ventana.botonAdelante","ventana.paginacion.texto");
        //se carga una ventana de presentacion pero sin paginacion
        Presentation.load("ventana.contenedor","ventana.botonAtras","ventana.botonAdelante");
    */
    Presentation.load = function (contenedor, botonAtras, botonAdelante, paginacion) {
        try {
            cargarPresentacion(contenedor, botonAtras, botonAdelante, paginacion);
        } catch (error) {
            console.error("Presentation.load: " + error);
        }
    };

    /**
    La ruta de la carpeta estar completa hasta el nombre del archivo, cada archivo debe terminar con un numero que indica la pagina a la que 
    reepresenta seguido de la extension .html (texto1.html, texto2.html....), pero no se debe escribir en la ruta el numero ni extension del archivo.
    Si por algun error se olvido agregar el numero correcto de la pagina se puede agregar despues del numero una letra del alfabeto para indicar que 
    esa pagina sera la continuacion (texto1a.html, texto1b.html, texto2.html,texto3.html ....), si se realiza esta accion en el parametro de 
    cantidadArchivos se debe cambiar el valor, de momento solo se puede hacer el cambio hasta la letra f.
    @method Presentation.folderText
    @param rutaCarpeta {String} Ruta donde se almacena el texto.
    @param [cantidadArchivos=1] {Number} Numero de paginas que tiene la presentacion o conversacion.
    @example
        //se cargan los textos normales de una presentacion
        Presentation.folderText("textos/presentacion/texto",5); //5 paginas
    */
    Presentation.folderText = function (rutaCarpeta, cantidadArchivos) {
        try {
            cargarCarpetaDeTextos(rutaCarpeta, cantidadArchivos);
        } catch (error) {
            console.error("Presentation.folderText: " + error);
        }
    };

    /**
    Al eliminar no se elimina el texto de las ventanas de contenido ni se modifica su estado actual.
    @method Presentation.remove
    @example
        //se elimina una conversacion
        Presentation.remove();
    */
    Presentation.remove = function () {
        try {
            eliminarPresentacion();
        } catch (error) {
            console.error("Presentation.remove: " + error);
        }
    };

    /**
    Recarga la presentación a la pagina iniciar, se puede indicar en que pagina cargar la presentacion.
    @method Presentation.reload
    @param pagina {Number} Pagina donde se desea cargar la presentacion.
    @example
        //se le indica que carge la presentacion en la pagina 5
        Presentation.reload(5);
        //se carga todo la presentacion desde el inicio
        Presentation.reload();
    */
    Presentation.reload = function (pagina) {
        try {
            recargarPagina(pagina);
        } catch (error) {
            console.error("Presentation.reload: " + error);
        }
    };

    /**
    @method Presentation.functionReturn
    @param arrayPaginaFuncion {Array} Conjunto de paginas y funciones a ejecutar.
    @example
        //se crea el array con las funciones a retornar en cada pagina y se envia a la funcion
        var arrayFunciones = [
            [1, funcion1], //pagina 1 ejecuta la funcion1
            [2, funcion2], //pagina 2 ejecuta la funcion2
            [3, funcion3] //pagina 3 ejecuta la funcion3
        ];
        Presentation.functionReturn (arrayFunciones);
        
        //se indica que ejecute una funcion siempre que cambie de pagina
        var arrayFunciones = [
            [-1, funcion] //cuando cambie pagina ejecuta la funcion tambien puede ser 0 en vez de -1
        ];
        Presentation.functionReturn (arrayFunciones);
    */
    Presentation.functionReturn = function (arrayPaginaFuncion) {
        try {
            arrayFuncionesDeRetorno = arrayPaginaFuncion;
        } catch (error) {
            console.error("Presentation.functionReturn: " + error);
        }
    };

    /**
    @method Presentation.finish
    @param funcion {Function} Funcion a ajecutar cuando termina la ventana.
    @example
        //hablitamos el ultimo boton de la presentacion y ejecutamos una funcion
        Presentation.finish(funcionFinal);
        function funcionFinal (){
            //Termino la presentacion
        }
    */
    Presentation.finish = function (funcion) {
        try {
            cargarFuncionFinal(funcion);
        } catch (error) {
            console.error("Presentation.finish: " + error);
        }
    };

    /**
    @method Presentation.getCurrentPage
    @return {Number} Number Pagina actual
    @example
        //se llama a la funcion para ver que pagina esta la presentacion
        console.log(Presentation.getCurrentPage()); //esto retorna el numero de la pagina actual
    */
    Presentation.getCurrentPage = function () {
        return paginaActual;
    };

    /**
    Carga una barra de slide para cambiar pagina como un scroll
    @method Presentation.slider
    */
    Presentation.slider = function (contenedor) {
        try {
            cargarSlider(contenedor);
        } catch (error) {
            console.error("Presentation.slider: " + error);
        }
    };

    /**
    Pausa de una forma temporar la carga de paginas y los listener para la presentacion
    @method Presentation.pause
    */
    Presentation.pause = function () {
        try {
            pausarPresentacion();
        } catch (error) {
            console.error("Presentation.pause: " + error);
        }
    };

    /**
    Continua con la presentacion.
    @method Presentation.play
    */
    Presentation.play = function () {
        try {
            continuarPresentacion();
        } catch (error) {
            console.error("Presentation.play: " + error);
        }
    };

    function cargarPresentacion(contenedor, botonAtrasNuevo, botonAdelanteNuevo, paginacionNueva) {
        eliminarPresentacion();
        botonAtras = Display.get(botonAtrasNuevo);
        botonAdelante = Display.get(botonAdelanteNuevo);
        paginacion = Display.get(paginacionNueva);
        contenedorPresentacion = Display.get(contenedor);
        paginaActual = 1;
        nombreDePagina = [];
        funcionFinal = function () {};
        //se oculta la paginacion para que no aparesca antes de tiempo
        paginacion.hide();
        verificarContenedorPresentacion();
    }

    function verificarContenedorPresentacion() {
        var contenedorTexto = Display.get(Display.getName(contenedorPresentacion) + "." + Options.containerText());
        if (!$.isEmptyObject(contenedorTexto)) {
            contenedorPresentacion = contenedorTexto;
        }
    }

    function cargarCarpetaDeTextos(rutaCarpeta, cantidadArchivos) {
        cantidadDePaginas = cantidadArchivos || 1;
        rutaCarpetaTextos = rutaCarpeta;
        paginaActual = 1;
        arrayTextosCargados = [];
        numeroDeArchivo = 1;
        letraActual = 0;
        if (rutaCarpeta === "null" || rutaCarpeta.length < 1) {
            arrayTextosCargados = Arrays.fill("", cantidadArchivos);
            primerArchivoCargado();
        } else {
            cargarArchivo();
        }
    }

    function cargarArchivo() {
        var ruta = rutaCarpetaTextos + numeroDeArchivo + abecedario[letraActual] + ".html";
        $.when($.get(ruta)).then(function (archivo) {
            //Carga el documento de texto bien
            arrayTextosCargados.push(archivo);
            nombreDePagina.push(numeroDeArchivo + abecedario[letraActual]);
            if (numeroDeArchivo === 1 && letraActual === 0) {
                primerArchivoCargado();
            }
            letraActual += 1;
            verificarArchivosCargados();
        }, function () {
            //No encuentra el documento de texto
            if (numeroDeArchivo === 1 && letraActual === 0) {
                primerArchivoCargado();
            }
            numeroDeArchivo += 1;
            letraActual = 0;
            verificarArchivosCargados();
        });
    }

    function primerArchivoCargado() {
        cambiarPagina();
        animacionContenedorIn();
        cargarListener();
        verificarPaginaCargada();
    }

    function verificarArchivosCargados() {
        if (numeroDeArchivo <= cantidadDePaginas) {
            cargarArchivo();
        }
    }

    function eliminarPresentacion() {
        Sound.stop();
        botonSlider.remove();
        limpiarContenedorDeTextos();
        arrayFuncionesDeRetorno = [];
        arrayTextosCargados = [];
        opcionFuncionFinalActivada = false;
        eliminarListener();
        botonAtras = $();
        botonAdelante = $();
        paginacion = $();
        botonSlider = $();
        contenedorPresentacion = $();
        barraDesplazadora = $();
        paginaActual = 1;
    }

    function cargarFuncionFinal(funcion) {
        opcionFuncionFinalActivada = true;
        funcionFinal = funcion;
        verificarPaginaCargada();
    }

    function cargarListener() {
        Event.click(botonAdelante, cambiarPaginaConBoton);
        Event.click(botonAtras, cambiarPaginaConBoton);
        if (botonAdelante.length > 0) {
            $("body").bind("keyup", cambiarPaginaConTeclado);
            $("body").focus();
        }
    }

    function eliminarListener() {
        Event.removeClick(botonAdelante);
        Event.removeClick(botonAtras);
        $("body").unbind("keyup");
    }

    function limpiarContenedorDeTextos() {
        //se habilita la opcion de eliminar los audios si se esta ejecutando un Sound.playButtons
        Sound.removePlayButtons();
        $("[buttonover]").each(function () {
            if ($(this).attr("id") !== undefined) {
                Button.over($("#" + $(this).attr("id")), false);
            }
        });
        $("[simbolo]").each(function () {
            Display.removeChild($(this).attr("simbolo"));
        });
    }

    function cambiarPaginaConBoton(boton) {
        if (boton.attr("id") === botonAdelante.attr("id")) {
            //adelante
            if (paginaActual === cantidadDePaginas) {
                eliminarPresentacion();
                funcionFinal();
            } else {
                paginaActual += 1;
                verificarPaginaCargada();
                animacionContenedorOut();
            }
        } else {
            //atras
            paginaActual -= 1;
            verificarPaginaCargada();
            animacionContenedorOut();
        }
    }

    function cambiarPaginaConTeclado(tecla) {
        if (tecla.keyCode === 39 && paginaActual === cantidadDePaginas && opcionFuncionFinalActivada) {
            eliminarPresentacion();
            funcionFinal();
        }
        //atras
        if (tecla.keyCode === 37 && paginaActual > 1) {
            paginaActual -= 1;
            verificarPaginaCargada();
            animacionContenedorOut();
        }
        //adelante
        if (tecla.keyCode === 39 && paginaActual < cantidadDePaginas) {
            paginaActual += 1;
            verificarPaginaCargada();
            animacionContenedorOut();
        }
    }

    function verificarPaginaCargada() {
        cargarTextoPaginacion();
        mostrarPaginacion();
        visualizarBotones();
    }

    function mostrarPaginacion() {
        if (cantidadDePaginas > 1) {
            paginacion.show();
        }
    }

    function cargarTextoPaginacion() {
        var textoPaginacion = paginaActual + "/" + cantidadDePaginas;
        //se organiza para insertar un cero a la paginacion si es menor de 10
        if (cantidadDePaginas > 9 && paginaActual < 10) {
            textoPaginacion = "<span style='opacity:0;'>0</span>" + paginaActual + "/" + cantidadDePaginas;
        }
        Text.load(paginacion, textoPaginacion, "middle center");
        Style.paginacion(paginacion);
    }

    function visualizarBotones() {
        if (paginaActual >= cantidadDePaginas) {
            botonAdelante.hide();
            botonAtras.show();
        } else if (paginaActual <= 1) {
            botonAdelante.show();
            botonAtras.hide();
        } else {
            botonAdelante.show();
            botonAtras.show();
        }
        if (cantidadDePaginas === 1) {
            botonAtras.hide();
            botonAdelante.hide();
            ocultarPaginacion();
        }
        if (opcionFuncionFinalActivada && paginaActual === cantidadDePaginas) {
            botonAdelante.show();
        }
    }

    function ocultarPaginacion() {
        paginacion.hide();
    }

    function animacionContenedorIn() {
        mostrarPaginacion();
        TweenMax.to(contenedorPresentacion, 0.5, {
            alpha: 1,
            ease: Cubic.easeOut
        });
    }

    function animacionContenedorOut() {
        TweenMax.to(contenedorPresentacion, 0.5, {
            alpha: 0,
            onComplete: animacionContenedorOutCompleta
        });
    }

    function animacionContenedorOutCompleta() {
        cambiarPagina();
        animacionContenedorIn();
        if (botonSliderInactivo) {
            moverPosicionSlide();
        }
    }

    function cambiarPagina() {
        limpiarContenedorDeTextos();
        cargarTextosContenedor();
        cargarAudios();
        centrarContenido();
        ocultarEnlacesHtml();
        organizarNivelesTextos();
        mostrarEnlacesHtml();
        animarElementosContenedor();
        cargarFuncionesDeRetorno();
        Html.load();
    }

    function cargarTextosContenedor() {
        if (arrayTextosCargados[paginaActual - 1] !== undefined) {
            contenedorPresentacion.html("<div>" + arrayTextosCargados[paginaActual - 1] + "</div>");
        } else {
            contenedorPresentacion.html("<div><b><i>Pagina no encontrada.</i></b></div>");
        }
        Style.presentacion();
        Style.contenedor(contenedorPresentacion);
    }

    function cargarAudios() {
        var rutaAudio = rutaCarpetaTextos.split("/");
        rutaAudio.pop();
        rutaAudio.shift();
        rutaAudio = rutaAudio.toString();
        rutaAudio = rutaAudio.replace(/[,]/g, "/");
        rutaAudio = Options.sound().rutaAudio + "/" + rutaAudio + "/audio" + nombreDePagina[paginaActual - 1];
        Sound.play(rutaAudio);
    }

    function centrarContenido() {
        $(".contenedor-presentacion .middle").each(function () {
            $(this).parent().addClass("middleparent");
        });
    }

    function ocultarEnlacesHtml() {
        arrayDeEnlacesHtml = $("#" + contenedorPresentacion.attr('id') + " a");
        if (arrayDeEnlacesHtml.length > 0) {
            $(arrayDeEnlacesHtml).hide();
        }
    }

    function organizarNivelesTextos() {
        $(".contenedor-presentacion ul, .contenedor-presentacion ol, .contenedor-presentacion ol+ul, .contenedor-presentacion ul+ol").each(function () {
            var anchoElemento = $(this).outerWidth(true);
            var elementoPadre = $(this).parent();
            var anchoPadreDelElemento = elementoPadre.outerWidth(true);
            if (elementoPadre.context.parentNode.localName === "li") {
                elementoPadre = $(elementoPadre.context.parentNode.parentNode);
                anchoPadreDelElemento = elementoPadre.outerWidth(true) + 9;
            }
            var diferencia = anchoPadreDelElemento - anchoElemento - 10;
            //se indentifica que se usa un elemento OL y se da el espacio pare evitar que la viñeta quede fuera
            if ($(this)[0].nodeName === "OL") {
                diferencia = diferencia - 5;
            }
            //se aplica el css para mover la viñeta
            $(this).css({
                "margin-left": "-" + diferencia + "px"
            });
            //se ajusta con las caracteristicas independientes del navegador
            if (Core.browser.ie || Core.browser.firefox) {
                $(this).css({
                    "width": (anchoPadreDelElemento - diferencia + 10) + "px"
                });
            }
        });
    }

    function mostrarEnlacesHtml() {
        if (arrayDeEnlacesHtml.length > 0) {
            $(arrayDeEnlacesHtml).show();
        }
    }

    function animarElementosContenedor() {
        $("[delay]").each(function () {
            if ($(this).attr("scaleout") !== undefined) {
                TweenMax.fromTo($(this), 0.5, {
                    alpha: 0,
                    scaleX: 0,
                    scaleY: 0
                }, {
                    alpha: 1,
                    scaleX: $(this).attr("scaleout"),
                    scaleY: $(this).attr("scaleout"),
                    delay: $(this).attr("delay"),
                    onComplete: $(this).attr("oncomplete")
                });
            } else {
                TweenMax.fromTo($(this), 0.5, {
                    alpha: 0
                }, {
                    alpha: 1,
                    delay: $(this).attr("delay"),
                    onComplete: $(this).attr("oncomplete")
                });
            }
        });
    }

    function cargarFuncionesDeRetorno() {
        for (var i = 0; i < arrayFuncionesDeRetorno.length; i++) {
            if (arrayFuncionesDeRetorno[i][0] === paginaActual) {
                arrayFuncionesDeRetorno[i][1]();
            }
            //se verifica si se quiere ejecutar una funcion siempre se que se cambia de pagina
            if (arrayFuncionesDeRetorno[i][0] === -1 || arrayFuncionesDeRetorno[i][0] === 0) {
                arrayFuncionesDeRetorno[i][1]();
            }
        }
    }

    function recargarPagina(pagina) {
        paginaActual = pagina || 1;
        verificarPaginaCargada();
        animacionContenedorOut();
    }

    var contenedorBarraDesplazadora;
    var botonSlider = $();
    var arrayPosicionSlide = [];
    var botonSliderInactivo = true;

    function cargarSlider(contenedor) {
        contenedorBarraDesplazadora = Display.get(contenedor);
        var idContendor = Display.getId(contenedor);
        var htmlSlider = "<div id='" + idContendor + "_botonSlider'></div>";
        contenedorBarraDesplazadora.prepend(htmlSlider);
        botonSlider = $("#" + idContendor + "_botonSlider");
        Style.slider(botonSlider, contenedorBarraDesplazadora);
        var anchoContenedor = contenedorBarraDesplazadora.width();
        anchoContenedor = Math.round(anchoContenedor / cantidadDePaginas);
        botonSlider.css({
            "cursor": "pointer"
        });
        arrayPosicionSlide = [];
        var posicionActual = botonSlider.position().x;
        for (var i = 0; i < cantidadDePaginas; i++) {
            arrayPosicionSlide.push(posicionActual);
            posicionActual += anchoContenedor;
            posicionActual = Math.round(posicionActual);
        }
        botonSlider.draggable({
            axis: "x",
            containment: "#" + idContendor,
            grid: [anchoContenedor, 1],
            start: function () {
                botonSliderInactivo = false;
            },
            stop: function () {
                botonSliderInactivo = true;
            },
            drag: function () {
                var posicionBoton = Math.round(botonSlider.position().x);
                var posicionDePagina = Arrays.indexOf(arrayPosicionSlide, posicionBoton);
                if (posicionDePagina !== -1) {
                    paginaActual = posicionDePagina + 1;
                    verificarPaginaCargada();
                    animacionContenedorOut();
                }
            }
        });
    }

    function moverPosicionSlide() {
        Display.position(botonSlider, arrayPosicionSlide[paginaActual - 1], 0);
    }

    function pausarPresentacion() {
        eliminarListener();
    }

    function continuarPresentacion() {
        cargarListener();
    }

})(jQuery);
/*global jQuery,console,Scorm,pipwerks*/
/*jshint -W020*/

/**
@class Scorm
*/
(function ($) {

    Scorm = {};

    var conexionScorm;

    /**
    Inicia el Scorm dentro del LMS.
    @method Scorm.initialize
    @example
        //se ejecuta al inicio del constructor
        function Main(){
            Scorm.initialize();
        }
    */
    Scorm.initialize = function () {
        try {
            iniciarScorm();
        } catch (error) {
            console.error("Scorm.initialize: No se puede iniciar el conexionScorm en la multimedia" + error);
        }
    };

    /**
    Califica el conexionScorm dentro del LMS en el rango de 0 a 100.
    @method Scorm.qualify
    @param {(String|Number)} nota Valor de la nota
    @example
        Scorm.qualify("100");
        //si pierde se le puede calificar con cero
        Scorm.qualify("0");
    */
    Scorm.qualify = function (nota) {
        try {
            calificar(nota);
        } catch (error) {
            console.error("Scorm.Qualify: " + error);
        }
    };

    /**
    Cierra el Scorm.
    @method Scorm.close
    @example
        Scorm.close();
    */
    Scorm.close = function () {
        try {
            cerrarScorm();
        } catch (error) {
            console.error("Scorm.close: " + error);
        }
    };

    function iniciarScorm() {
        conexionScorm = pipwerks.SCORM;
        conexionScorm.init();
    }

    function calificar(nota) {
        if (typeof nota === "number") {
            nota = nota.toString();
        }
        conexionScorm.set("cmi.core.score.raw", nota);
    }

    function cerrarScorm() {
        conexionScorm.set("cmi.core.lesson_status", "completed");
        conexionScorm.quit();
    }

})(jQuery);
/*global jQuery,console,Sound,window,navigator,Core,document,Display,Options,Timer,Event,TweenMax,Audio,Button,webkitSpeechRecognition*/
/*jshint -W020*/

/**
La clase se encarga de controlar el flujo de los audios utilizados en la multimedia, reproducir los audios en los distintos navegadores, y 
su manipulación.
@class Sound
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
    Carga el microfono para realizar el proceso de grabación, esta opción solo esta habilitada para los navegadores Chrome y Firefox.

    @method Sound.speak
    @param boton {(String|Object)} Simbolo que ejecuta la funcion del boton de grabación.
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
    @method Sound.updateProgress
    @private
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
        try {
            removerMicrofonoReconocimiento();
        } catch (error) {
            console.error("Sound.speakClose: " + error);
        }
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


    Sound.loadButtonPlay = function () {
        try {
            cargarBotonesAudioHtml();
        } catch (error) {
            console.error("Sound.loadButtonPlay: " + error);
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
        Button.over(botonesPlay);
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
        Button.over(botonesPlay, false);
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

        //console.log("Microfono: " + textoContenedor);
        //console.log("texto: " + textoValidarReconocimiento);

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

    var cantMicrofonos = 0;

    function cargarTextoReconocimiento(textoValidar, elemento) {
        listTextMicrophone[Display.getName(elemento)] = textoValidar.toLowerCase();

        cantMicrofonos++;
    }

    function cargarFuncionEstadoReconocimiento(funcionRetorno) {
        funcionRetornoReconocimiento = funcionRetorno;
    }

    function removerMicrofonoReconocimiento() {

        for (var r = 0; r < cantMicrofonos; r++) {
            console.log("btnMicrofono" + r);
            Display.removeChild("btnMicrofono" + r);
            Event.removeClick("btnMicrofono" + r, iniciarReconocimientoDeVoz);
            Button.over("btnMicrofono" + r, false);
        }

        listTextMicrophone = [];
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

    function cargarBotonesAudioHtml() {
        var botonesAudio = [];
        var sonidos = [];
        $("[audio]").each(function () {
            if ($(this).attr("audio")) {
                botonesAudio.push($(this).children());
                sonidos.push($(this).attr("audio"));
                //$(this).attr("audio", null);
            }
        });
        if (botonesAudio.length > 0) {
            cargarBotonesDeAudios(botonesAudio, sonidos);
        }
    }

})(jQuery);
/*global jQuery,console,Style,Options,Core,Display*/
/*jshint -W020*/

/**
Encargada de cargar los estilos CSS por defecto a los elementos de la multimedia. Las funciones son cargadas por defecto en la libreria.
<br/>
Lista de clases:
<ul>
    <li><b>title:</b> Para titulos, agrega negrilla y el tamaño de fuente.</li>
    <li><b>middle:</b> Centra elementos verticalmente.</li>
    <li><b>center:</b> Centra elementos horizontalmente.</li>
    <li><b>bold:</b> Agrega negrilla a los textos.</li>
    <li><b>negrilla:</b> Agrega negrilla a los textos.</li>
    <li><b>left:</b> Alinea a la izquierda.</li>
    <li><b>right:</b> Alinea a la derecha.</li>
    <li><b>negro:</b> Agrega el color negro a los textos.</li>
    <li><b>texto:</b> Agrega la fuente y tamaño por defecto a los textos normales.</li>
    <li><b>fuente:</b> Agrega el tamaño para los textos de pie de imagenes utilizados para indicar Fuente SENA o Fuente fotolia.</li>
    <li><b>color#####:</b> Agrega el color en Hexa a la fuente, colorFFF, color032FF</li>
    <li><b>size#####:</b> Ajusta el tamaño de la fuente de un texto en px, size12, size24, size18</li>
</ul>

@class Style
*/
(function ($) {

    Style = {};

    Style.paginacion = function (paginacion) {
        paginacion = $("#" + paginacion.attr("id") + " div");
        paginacion.css({
            "font-family": Options.font(),
            "font-size": Options.pagination().size + "px",
            "font-weight": Options.pagination().weight,
            "text-align": Options.pagination().aling,
            "color": Options.pagination().color
        });
    };

    Style.main = function () {
        $("#estilo-codecraft-main").remove();

        var estilo = "" +
            "<div id='estilo-codecraft-main'>" +
            "<style>" +
            //Enlaces
            "a,a:link, a:hover, a:active, a:visited{color: #0000FF; text-decoration: underline !important;}" +
            //Textos y alineaciones
            ".middle{" +
            "display: table-cell !important;" +
            "display: inline-block;" +
            "vertical-align: middle !important;" +
            "height: inherit;" +
            "width: inherit;" +
            "}" +

            ".middleparent{" +
            "display: table;" +
            "}" +

            ".center{" +
            "text-align: center !important;" +
            "}" +

            ".left{" +
            "text-align: left !important;" +
            "}" +

            ".right{" +
            "text-align: right !important;" +
            "}" +

            ".negro{" +
            "color: #000;" +
            "}" +

            ".bold{" +
            "font-weight: bold;" +
            "}" +

            ".texto{" +
            "font-weight: " + Options.text().weight + ";" +
            "color: " + Options.text().color + ";" +
            "font-family: " + Options.font() + ";" +
            "-mz-font-family:" + Options.font() + ";" +
            "-webkit-font-family:" + Options.font() + ";" +
            "-ms-font-family:" + Options.font() + ";" +
            "font-size:" + Options.text().size + "px;" +
            "text-rendering: optimizelegibility;" +
            "-webkit-text-rendering: optimizelegibility;" +
            "-moz-text-rendering: optimizelegibility;" +
            "-ms-text-rendering: optimizelegibility;" +
            "text-align: " + Options.text().aling + ";" +
            "line-height:" + Options.text().lineHeight + ";" +
            "}" +

            "#menu{" +
            "display: none;" +
            "width: 170px;" +
            "padding: 5px;" +
            "background: #FFFFFF;" +
            "border: 1px solid #D3D3D3;" +
            "border-radius: 5px;" +
            "-moz-border-radius: 5px;" +
            "-webkit-border-radius: 5px;" +
            "position: absolute;" +
            "}" +
            "#menu ul{" +
            "color: #000000;" +
            "border: none;" +
            "list-style-type: none;" +
            "margin: 0px;" +
            "padding: 0px;" +
            "}" +
            "#menu ul hr{" +
            "margin: 0px;" +
            "padding: 0px;" +
            "}" +
            "#menu ul li{" +
            "padding: 7px;" +
            "font-size: 12px;" +
            "}  " +
            "#menu ul li:hover{  " +
            "background-color: #638fff;  " +
            "color: #fff;  " +
            "cursor: pointer;  " +
            "}" +

            ".form-control{  " +
            "color: " + Options.text().color + " !important;" +
            "font-size:" + Options.text().size + "px !important;" +
            "display: inherit !important;" +
            "}" +

            ".input-mal{" +
            "border-color: #F00 !important;" +
            "box-shadow: 0px 0px 7px #F00 !important;" +
            "}" +

            ".input-bien{" +
            "border-color: #75DD6C !important;" +
            "box-shadow: 0px 0px 7px #75DD6C !important;" +
            "}" +

            "#modal-mensaje{" +
            "width: 1000px;" +
            "height: 640px;" +
            "}" +

            " </style>" +
            " </div>";
        $("body").prepend(estilo);
    };

    Style.presentacion = function () {
        $("#estilo-codecraft-presentaciones").remove();

        var estiloPresentacion = "" +

            "<div id='estilo-codecraft-presentaciones'>" +

            "<style>.contenedor-presentacion{" +
            "font-weight: " + Options.text().weight + ";" +
            "color: " + Options.text().color + ";" +
            "font-family: " + Options.font() + ";" +
            "-mz-font-family:" + Options.font() + ";" +
            "-webkit-font-family:" + Options.font() + ";" +
            "-ms-font-family:" + Options.font() + ";" +
            "font-size:" + Options.text().size + "px;" +
            "text-rendering: optimizelegibility;" +
            "-webkit-text-rendering: optimizelegibility;" +
            "-moz-text-rendering: optimizelegibility;" +
            "-ms-text-rendering: optimizelegibility;" +
            "text-align: " + Options.text().aling + ";" +
            "line-height:" + Options.text().lineHeight + ";" +
            "}</style>" +

            "<style>.title, .title p, .title span, .title div{" +
            "font-weight: " + Options.title().weight + " !important;" +
            "color: " + Options.title().color + ";" +
            "font-family:" + Options.font() + ";" +
            "font-size:" + Options.title().size + "px;" +
            "margin-top: 0px !important;" +
            "}</style>" +

            "<style>ol,ul {" +
            "font-weight: bold;" +
            "font-family: " + Options.font() + ";" +
            "}</style>" +


            "<style>p,ol p,ul p {" +
            "font-weight: normal;" +
            "font-family: " + Options.font() + ";" +
            "text-align: justify;" +
            "margin-top: 0px !important;" +
            "}</style>" +

            "<style>.justify{" +
            "text-align: justify;" +
            "}</style>" +

            "<style>.fuente{" +
            "font-size:" + Options.text().sizeFuente + "px;" +
            "}</style>" +

            "<style>.center{" +
            "text-align: center !important;" +
            "}</style>" +

            "<style>img.center{" +
            "text-align: center !important;" +
            "display: block;" +
            "margin: auto;" +
            "}</style>" +

            "<style>.none{" +
            "list-style: none;" +
            "}</style>" +


            //Estilo para controladores de play

            "<style>" +
            ".audio-control{" +
            "margin-bottom: 10px;" +
            "background-color: #" + Options.controlAudio().colorFondo + ";" +
            "height: 34px;" +
            "border-radius: 8px;" +
            "padding: 5px;" +
            "box-shadow: 0px 5px 5px rgba(105, 105, 105, 0.88);" +
            "}" +

            ".barra-progreso{" +
            "height: 8px;" +
            "width: 0px;" +
            "background-color: #" + Options.controlAudio().colorBarra + ";" +
            "border-radius: 5px;" +
            "box-shadow: inset 0px 0px 5px #797979 ;" +
            "}" +

            ".slider-audio{" +
            "border: 3px solid #F7F7F7;" +
            "background-color: #E0E0E0;" +
            "border-radius: 5px;" +
            "margin-right: 5px;" +
            "margin-left: 30px;" +
            "height: 14px;" +
            "position: relative;" +
            "margin-top: 4px;" +
            "}" +

            ".boton-play{" +
            "float: left;" +
            "}" +

            "</style>";


        /**
        Se carga el codigo para alinear las url de los contenidos o textos que traten de sobre salir del contenedor.
        Se verifica el navegador que se esta ejecutando para cargas las clases css que le correspondan a la version del navegador.
        */
        if (Core.browser.chrome) {
            estiloPresentacion += "" +
                "<style>a{" +
                "word-break:break-all;" +
                "white-space:pre-wrap;" +
                "}</style";
        }
        if (Core.browser.firefox) {
            estiloPresentacion += "" +
                "<style>a{" +
                "-moz-hyphens: auto;" +
                "hyphens: auto;" +
                "}</style";
        }
        if (Core.browser.ie) {
            estiloPresentacion += "" +
                "<style>a{" +
                "hyphens: auto;" +
                "-ms-hyphens: auto;" +
                "}</style";
        }

        estiloPresentacion += "</div>";
        $("body").prepend(estiloPresentacion);
        verificarColorFuente();
        verificarColorResaltado();
        verificarTamanoFuente();
    };

    Style.contenedor = function (contenedor) {
        contenedor.addClass("contenedor-presentacion");
        $(".contenedor-presentacion>div").css({
            "width": "inherit",
            "height": "inherit"
        });
    };

    Style.slider = function (boton, contenedorPadre) {
        var anchoAltoBoton = contenedorPadre.height() * 2;
        var marginBoton = anchoAltoBoton / 4;
        contenedorPadre.css({
            "border-radius": "5px",
            "border": "1px solid rgb(216, 216, 216)",
            "background-color": "rgb(240, 240, 240)"
        });
        boton.css({
            "width": anchoAltoBoton + "px",
            "height": anchoAltoBoton + "px",
            "border": "2px solid #CACACA",
            "border-radius": "5px",
            "background-color": "#fff",
            "margin-left": "-" + marginBoton + "px",
            "margin-top": "-" + marginBoton + "px",
            "position": "absolute",
            "top": 0,
            "left": 0
        });
    };

    function verificarColorFuente() {
        $("[class]").each(function () {
            var arrayClasesCSS = $(this).attr("class").split(" ");
            for (var i = 0; i < arrayClasesCSS.length; i++) {
                var claseActual = arrayClasesCSS[i];
                if (claseActual.indexOf("color") !== -1) {
                    var colorFuente = claseActual.substr(5);
                    asignarColorFuente(colorFuente, $(this));
                }
            }
        });
    }

    function asignarColorFuente(colorFuente, contenedor) {
        contenedor.css({
            "color": "#" + colorFuente
        });
    }

    function verificarColorResaltado() {
        $("[class]").each(function () {
            var arrayClasesCSS = $(this).attr("class").split(" ");
            for (var i = 0; i < arrayClasesCSS.length; i++) {
                var claseActual = arrayClasesCSS[i];
                if (claseActual.indexOf("resaltado") !== -1) {
                    var colorResaltado = claseActual.substr(9);
                    asignarColorResaltado(colorResaltado, $(this));
                }
            }
        });
    }

    function asignarColorResaltado(colorResaltado, contenedor) {
        contenedor.css({
            "background-color": "#" + colorResaltado
        });
    }

    function verificarTamanoFuente() {
        $("[class]").each(function () {
            var arrayClasesCSS = $(this).attr("class").split(" ");
            for (var i = 0; i < arrayClasesCSS.length; i++) {
                var claseActual = arrayClasesCSS[i];
                if (claseActual.indexOf("size") !== -1) {
                    var tamanoFuente = claseActual.substr(4);
                    asignarTamanoFuente(tamanoFuente, $(this));
                }
            }
        });
    }

    function asignarTamanoFuente(tamanoFuente, contenedor) {
        contenedor.css({
            "font-size": tamanoFuente + "px"
        });
    }

})(jQuery);
/*global jQuery,console,Talk,Display,Event,Timer,TweenMax,Style,Sound,Back,Options,Core,Arrays,clearInterval,setInterval,document,window,Html*/
/*jshint -W020*/

/**
Encargada del manejo de las conversaciones entre los personajes.

@class Talk
*/
(function ($) {

    Talk = {};

    var contenedorConversacion;
    //Simbolo que almacena los globos y contenedor del texto de la conversación.
    var contenedorPadre;
    var paginaActual;
    var cantidadDePaginas;
    var rutaCarpetaTextos;
    var arrayFuncionesDeRetorno = [];
    var arrayTextosCargados;
    var funcionFinal;
    var opcionFuncionFinalActivada;
    var arrayDeEnlacesHtml;
    var intervaloTiempo = setInterval(function () {}, 0);
    var numeroDeArchivo;
    var tiempoDelIntervalo = 10;

    /**
    Carga el contenedor donde se agregara el texto de los simbolos para la conversación, el simbolo del contenedor debe estar conformado por
    las imagenes de los globos y el recuadro donde cargan los textos.
    
    @method Talk.load
    @param contenedor {String} Nombre del contenedor del globo o los textos
    @example
        //se carga una conversacion de globos
        Talk.load("globos");
    */
    Talk.load = function (contenedor) {
        try {
            cargarConversacion(contenedor);
        } catch (error) {
            console.error("talk.load: " + error);
        }
    };

    /**
    La ruta de la carpeta estar completa hasta el nombre del archivo, cada archivo debe terminar con un numero que indica la pagina a la que 
    reepresenta seguido de la extension .html (texto1.html, texto2.html....), pero no se debe escribir en la ruta el numero ni extension del archivo.
    Si por algun error se olvido agregar el numero correcto de la pagina se puede agregar despues del numero una letra del alfabeto para indicar que 
    esa pagina sera la continuacion (texto1a.html, texto1b.html, texto2.html,texto3.html ....), si se realiza esta accion en el parametro de 
    cantidadArchivos se debe cambiar el valor, de momento solo se puede hacer el cambio hasta la letra f.
    @method Talk.folderText
    @param rutaCarpeta {String} Ruta donde se almacena el texto.
    @param [cantidadArchivos=1] {Number} Numero de paginas que tiene la presentacion o conversacion.
    @example
        //se cargan los textos normales de una presentacion
        Talk.folderText("textos/presentacion/texto",5); //5 paginas
    */
    Talk.folderText = function (rutaCarpeta, cantidadArchivos) {
        try {
            cargarCarpetaDeTextos(rutaCarpeta, cantidadArchivos);
        } catch (error) {
            console.error("Talk.folderText: " + error);
        }
    };

    /**
    Al eliminar no se elimina el texto de las ventanas de contenido ni se modifica su estado actual.
    @method Talk.remove
    @example
        //se elimina una conversacion
        Talk.remove();
    */
    Talk.remove = function () {
        try {
            eliminarConversacion();
        } catch (error) {
            console.error("talk.remove: " + error);
        }
    };

    /**
    Recarga la presentación a la pagina iniciar, se puede indicar en que pagina cargar la presentacion.
    @method Talk.reload
    @param pagina {Number} Pagina donde se desea cargar la presentacion.
    @example
        //se le indica que carge la presentacion en la pagina 5
        Talk.reload(5);
        //se carga todo la presentacion desde el inicio
        Talk.reload();
    */
    Talk.reload = function (pagina) {

    };

    /**
    @method Talk.functionReturn
    @param arrayPaginaFuncion {Array} Conjunto de paginas y funciones a ejecutar.
    @example
        //se crea el array con las funciones a retornar en cada pagina y se envia a la funcion
        var arrayFunciones = [
            [1, funcion1], //pagina 1 ejecuta la funcion1
            [2, funcion2], //pagina 2 ejecuta la funcion2
            [3, funcion3] //pagina 3 ejecuta la funcion3
        ];
        Talk.functionReturn (arrayFunciones);
        
        //se indica que ejecute una funcion siempre que cambie de pagina
        var arrayFunciones = [
            [-1, funcion] //cuando cambie pagina ejecuta la funcion tambien puede ser 0 en vez de -1
        ];
        Talk.functionReturn (arrayFunciones);
    */
    Talk.functionReturn = function (arrayPaginaFuncion) {
        try {
            arrayFuncionesDeRetorno = arrayPaginaFuncion;
        } catch (error) {
            console.error("Talk.functionReturn: " + error);
        }
    };

    /**
    @method Talk.finish
    @param funcion {Function} Funcion a ajecutar cuando termina la ventana.
    @example
        //hablitamos el ultimo boton de la presentacion y ejecutamos una funcion
        Talk.finish(funcionFinal);
        function funcionFinal (){
            //Termino la presentacion
        }
    */
    Talk.finish = function (funcion) {
        try {
            cargarFuncionFinal(funcion);
        } catch (error) {
            console.error("Talk.finish: " + error);
        }
    };

    function cargarFuncionFinal(funcion) {
        opcionFuncionFinalActivada = true;
        funcionFinal = funcion;
    }

    /**
    @method Talk.getCurrentPage
    @return {Number} Number Pagina actual
    @example
        //se llama a la funcion para ver que pagina esta la presentacion
        console.log(Talk.getCurrentPage()); //esto retorna el numero de la pagina actual
    */
    Talk.getCurrentPage = function () {
        return paginaActual;
    };

    function cargarConversacion(contenedor) {
        Talk.remove();
        contenedorConversacion = Display.get(contenedor);
        verificarContenedorConversacion();
        contenedor = contenedorConversacion.getName(true);
        paginaActual = 1;
        if (contenedor.indexOf(".") !== -1) {
            var array = contenedor.split(".");
            array.splice(array.length - 1);
            contenedor = array.toString();
            contenedor = contenedor.replace(",", ".");
        }
        contenedorPadre = Display.get(contenedor);
        contenedorPadre.stop((paginaActual - 1) * 1000);
        contenedorPadre.hide();
    }

    function eliminarConversacion() {
        Sound.stop();
        limpiarContenedorDeTextos();
        contenedorConversacion = $();
        contenedorPadre = $();
        paginaActual = 1;
        cantidadDePaginas = 1;
        rutaCarpetaTextos = "";
        arrayFuncionesDeRetorno = [];
        arrayTextosCargados = [];
        funcionFinal = function () {};
        opcionFuncionFinalActivada = false;
    }

    function verificarContenedorConversacion() {
        var contenedorTexto = Display.get(contenedorConversacion.getName(true) + "." + Options.containerText());
        if (!$.isEmptyObject(contenedorTexto)) {
            contenedorConversacion = contenedorTexto;
        }
    }

    function cargarCarpetaDeTextos(rutaCarpeta, cantidadArchivos) {
        if (rutaCarpeta === "null" || rutaCarpeta.length < 1) {
            arrayTextosCargados = Arrays.fill("", cantidadArchivos);
            primerArchivoCargado();
        } else {
            cantidadDePaginas = cantidadArchivos || 1;
            rutaCarpetaTextos = rutaCarpeta;
            paginaActual = 1;
            arrayTextosCargados = [];
            numeroDeArchivo = 1;
            intervaloTiempo = setInterval(function () {
                cargarArchivo(numeroDeArchivo);
            }, tiempoDelIntervalo);
        }
    }

    function cargarArchivo(numeroDeArchivo) {
        var ruta = rutaCarpetaTextos + numeroDeArchivo + ".html";
        $.ajax({
            url: ruta,
            async: false,
            success: function (archivo) {
                arrayTextosCargados[numeroDeArchivo - 1] = archivo;
                if (numeroDeArchivo === 1) {
                    primerArchivoCargado();
                }
                numeroDeArchivo += 1;
                clearInterval(intervaloTiempo);
                intervaloTiempo = setInterval(function () {
                    cargarArchivo(numeroDeArchivo);
                }, tiempoDelIntervalo);
            },
            error: function () {
                if (numeroDeArchivo === 1) {
                    primerArchivoCargado();
                }
                numeroDeArchivo += 1;
                clearInterval(intervaloTiempo);
                intervaloTiempo = setInterval(function () {
                    cargarArchivo(numeroDeArchivo);
                }, tiempoDelIntervalo);
            }
        });
        if (numeroDeArchivo > cantidadDePaginas) {
            clearInterval(intervaloTiempo);
        }
    }

    function primerArchivoCargado() {
        cambiarPagina();
        animacionGloboIn();
    }

    function limpiarContenedorDeTextos() {
        $("[simbolo]").each(function () {
            Display.removeChild($(this).attr("simbolo"));
        });
    }

    function audioCompleto() {
        if (paginaActual < cantidadDePaginas) {
            paginaActual += 1;
            animacionGloboOut();
        } else {
            TweenMax.to(contenedorPadre, 0.5, {
                alpha: 0,
                scaleX: 0,
                scaleY: 0,
                onComplete: funcionFinal
            });
        }
    }

    function animacionGloboIn() {
        contenedorPadre.show();
        TweenMax.fromTo(contenedorPadre, 0.5, {
            alpha: 0,
            scaleX: 0,
            scaleY: 0
        }, {
            alpha: 1,
            scaleX: 1,
            scaleY: 1,
            ease: Back.easeOut
        });
    }

    function animacionGloboOut() {
        TweenMax.to(contenedorPadre, 0.5, {
            alpha: 0,
            scaleX: 0,
            scaleY: 0,
            onComplete: animacionGloboOutCompleto
        });
    }

    function animacionGloboOutCompleto() {
        contenedorPadre.stop((paginaActual - 1) * 1000);
        cambiarPagina();
        animacionGloboIn();
    }

    function cambiarPagina() {
        limpiarContenedorDeTextos();
        cargarTextosContenedor();
        centrarContenido();
        ocultarEnlacesHtml();
        organizarNivelesTextos();
        mostrarEnlacesHtml();
        animarElementosContenedor();
        cargarFuncionesDeRetorno();
        cargarAudios();
        Html.load();
    }

    function cargarTextosContenedor() {
        Style.presentacion();
        if (arrayTextosCargados[paginaActual - 1] !== undefined) {
            contenedorConversacion.html("<div>" + arrayTextosCargados[paginaActual - 1] + "</div>");
        } else {
            contenedorConversacion.html("<div><b><i>Pagina no encontrada.</i></b></div>");
        }
        Style.contenedor(contenedorConversacion);
    }

    function cargarAudios() {
        var rutaAudio = rutaCarpetaTextos.split("/");
        rutaAudio.pop();
        rutaAudio.shift();
        rutaAudio = rutaAudio.toString();
        rutaAudio = rutaAudio.replace(/[,]/g, "/");
        rutaAudio = Options.sound().rutaAudio + "/" + rutaAudio + "/audio" + paginaActual;
        Sound.play(rutaAudio, audioCompleto);
    }

    function centrarContenido() {
        $(".middle").each(function () {
            $(this).parent().addClass("middleparent");
        });
    }

    function ocultarEnlacesHtml() {
        arrayDeEnlacesHtml = $("#" + contenedorConversacion.attr('id') + " a");
        if (arrayDeEnlacesHtml.length > 0) {
            $(arrayDeEnlacesHtml).hide();
        }
    }

    function organizarNivelesTextos() {
        //se ocultan las viñetas de estilo none
        $("ul[type=none], ol[type=none]").each(function () {
            $(this).css({
                "list-style-type": "none"
            });
        });
        $("ul,ol, ol+ul, ul+ol").each(function () {
            var anchoElemento = $(this).outerWidth(true);
            var elementoPadre = $(this).parent();
            var anchoPadreDelElemento = elementoPadre.outerWidth(true);
            if (elementoPadre.context.parentNode.localName === "li") {
                elementoPadre = $(elementoPadre.context.parentNode.parentNode);
                anchoPadreDelElemento = elementoPadre.outerWidth(true) + 9;
            }
            var diferencia = anchoPadreDelElemento - anchoElemento - 10;
            //se indentifica que se usa un elemento OL y se da el espacio pare evitar que la viñeta quede fuera
            if ($(this)[0].nodeName === "OL") {
                diferencia = diferencia - 5;
            }
            //se aplica el css para mover la viñeta
            $(this).css({
                "margin-left": "-" + diferencia + "px"
            });
            //se ajusta con las caracteristicas independientes del navegador
            if (Core.browser.ie || Core.browser.firefox) {
                $(this).css({
                    "width": (anchoPadreDelElemento - diferencia + 10) + "px"
                });
            }
        });
    }

    function mostrarEnlacesHtml() {
        if (arrayDeEnlacesHtml.length > 0) {
            $(arrayDeEnlacesHtml).show();
        }
    }

    function animarElementosContenedor() {
        $("[delay]").each(function () {
            if ($(this).attr("scaleout") !== undefined) {
                TweenMax.fromTo($(this), 0.5, {
                    alpha: 0,
                    scaleX: 0,
                    scaleY: 0
                }, {
                    alpha: 1,
                    scaleX: $(this).attr("scaleout"),
                    scaleY: $(this).attr("scaleout"),
                    delay: $(this).attr("delay"),
                    onComplete: $(this).attr("oncomplete")
                });
            } else {
                TweenMax.fromTo($(this), 0.5, {
                    alpha: 0
                }, {
                    alpha: 1,
                    delay: $(this).attr("delay"),
                    onComplete: $(this).attr("oncomplete")
                });
            }
        });
    }

    function cargarFuncionesDeRetorno() {
        for (var i = 0; i < arrayFuncionesDeRetorno.length; i++) {
            if (arrayFuncionesDeRetorno[i][0] === paginaActual) {
                arrayFuncionesDeRetorno[i][1]();
            }
            //se verifica si se quiere ejecutar una funcion siempre se que se cambia de pagina
            if (arrayFuncionesDeRetorno[i][0] === -1 || arrayFuncionesDeRetorno[i][0] === 0) {
                arrayFuncionesDeRetorno[i][1]();
            }
        }
    }

})(jQuery);
/*global jQuery,Utils,console,Text,Style,Options,Display,Button,Worker,window,document,BlobBuilder,Blob,Core,Html,setTimeout*/
/*jshint -W020*/


/**
Permite cargar los textos dentro de un elemento por medio de documentos externos o variables de tipo String almacenadas en arrays.

@class Text
*/
(function ($) {

    Text = {};

    var arrayTextos;
    var cantidadDeArchivos;
    var numeroDeArchivo;
    var intervaloTiempo = 0;
    var tiempoDelIntervalo = 10;

    /**
    Permite cargar el texto a un elemento desde un String o ruta de un archivo HTML, por defecto el busca la instancia de un contenedor 
    almacenada en {@link Options.containerText}, si no encuentra el elemento con la instancia por defecto tomara la ruta o elemento como contenedor.

    @method Text.load
    @param elemento {*} Elemento o elementos a aplicar el texto.
    @param texto {(String|Array)} Texto a cargar.
    @param clasesCss {String} Nombre de las clases CSS a aplicar al texto.
    @example
        //El simbolo tiene internamente un recuadro con instancia contenedor que es el nombre por defecto
        Text.load("mensaje.texto","Texto de prueba","middle center");
        //El simbolo tiene internamente un recuadro con instancia <b>texto</b> por lo que se cambia primero el contenedor
        Options.containerText("texto");
        Text.load("mensaje","Texto de prueba","middle center");
        //Se carga los textos a un array
        var arrayElementos = ["elemento1","elemento2","elemento3"];
        var arrayTexto = ["texto1","texto2","texto3"];
        Text.load(arrayElementos,arrayTexto);
        //Para cambiar el tamaño de la fuente a 24 px se usa <b>size24</b>
        Text.load("elementoContendor","texto", "middle center <b>size24</b>");
        //Para cargar los textos desde un archivo HTML debe iniciar con la ruta por defecto <b>textos</b>
        Text.load("elementoContendor","<b>textos</b>/ruta/archivoHTML","middle center");
    */
    Text.load = function (elemento, texto, clasesCss) {
        try {
            cargarTexto(elemento, texto, clasesCss);
        } catch (error) {
            console.error("Text.load: " + error);
        }
    };

    /**
    Se encarga de verificar si tiene el contenedor por defecto y retorna el elemento para agregar el texto, de no encontrar
    el contenedor por defecto utiliza el mismo simbolo.

    @method Text.containerText
    @param contenedor {(String|Object)} Elemento para verificar si cuenta con contenedor.
    @example
        //se guarda un simbolo que internamente tiene un elemento con instancia por defecto de la libreria
        var ventanaContenedor = Text.containerText(contenedorOriginal);
    */
    Text.containerText = function (contenedor) {
        try {
            return verificarContenedorTexto(contenedor);
        } catch (error) {
            console.error("Text.containerText: " + error);
        }
    };

    function cargarTexto(elemento, texto, clasesCss) {
        if (Utils.typeOf(elemento) === 'array') {
            for (var i = 0; i < elemento.length; i++) {
                var nuevoTexto = texto;
                if (Utils.typeOf(texto) === 'array') {
                    nuevoTexto = texto[i] || "";
                }
                cargarTexto(elemento[i], nuevoTexto, clasesCss);
            }
        } else {
            texto = String(texto);
            clasesCss = clasesCss || "";
            var contenedor = verificarContenedorTexto(elemento);
            if (texto.indexOf("textos/") !== -1) {
                $.when(
                    $.get(texto + ".html")
                ).then(function (archivo) {
                    contenedor.html("<div class='" + clasesCss + " texto'>" + archivo + "</div>");
                    AgregarDimensionesContendor(contenedor, clasesCss);
                    Html.load();
                });
            } else {
                contenedor.html("<div class='" + clasesCss + " texto'>" + texto + "</div>");
                AgregarDimensionesContendor(contenedor, clasesCss);
                Html.load();
            }
            Style.presentacion();
        }
    }

    function AgregarDimensionesContendor(contenedor, clasesCss) {
        if (contenedor.attr('id')) {
            $("#" + contenedor.attr('id') + ">div").css({
                "width": contenedor.width() + "px",
                "height": contenedor.height() + "px"
            });
        }
    }

    function cargarArchivo(rutaArchivo, contenedor, key) {
        rutaArchivo += ".html";
        $.ajax({
            url: rutaArchivo,
            async: false,
            success: function (archivo) {
                if (key !== undefined) {
                    contenedor[key] = archivo;
                } else {
                    contenedor = archivo;
                }
            }
        });
    }

    /**
    Se encarga de retornar el contenedor por defecto para los textos si este existe, de lo contario retorna el mismo elemento.
    */
    function verificarContenedorTexto(contenedor) {
        var elementoJquery = Display.get(contenedor);
        var nombreContenedor = Display.getName(contenedor, true);
        var contenedorTexto = $("#" + elementoJquery.attr('id'));
        if (Display.get(nombreContenedor + "." + Options.containerText()).length > 0) {
            contenedorTexto = $("#" + elementoJquery.attr('id') + "_" + Options.containerText());
        }
        return contenedorTexto;
    }

})(jQuery);
/*global Timer,Utils,jQuery,console,setTimeout,clearTimeout,window*/
/*jshint -W020*/

/**
Ejecuta funciones en intervalos de tiempo medidos en segundos.

@class Timer
*/
(function ($) {

    Timer = {};

    var arrayTiempoEnEjecucion = [];

    /**
    DESARROLLO
    @method Timer.chronometer
    */
    Timer.chronometer = function (segundos, funcionRetorno, retroceso) {
        try {
            ejecutarCronometro(segundos, funcionRetorno, retroceso);
        } catch (error) {
            console.error("Timer.chronometer: " + error);
        }
    };

    /**
    Permite ejecutar funciones después de un tiempo trascurrido en segundos.

    @method Timer.load
    @param segundos {Number} Tiempo en segundos.
    @param funcionRetorno {(Function|Array)} Funcion o funciones a retornar.
    @param [nombreTimer=Radom] {String} Nombre para identificar el timer, debe ser unico.
    @return {String} String Nombre asignado al timer para su identificacion.
    @example
        //Se ejecuta un timer para que después de 2 segundos llame a una funcion
        Timer.load(2,funcion);
        //Se le asigna un nombre al timer
        Timer.load(2,funcion,"timerParaFuncion");
        //Se retorna varias funciones
        Timer.load(2,[funcion1,funcion2]);
        var arrayFunciones = [
            funcion1,
            funcion2,
            funcion3
        ];
        Timer.load(3, arrayFunciones);
        //Se almacena el nombre del timer
        var tiempo = Timer.load(2,funcion);
    */
    Timer.load = function (segundos, funcionRetorno, nombreTimer) {
        try {
            return ejecutarTiempo(segundos, funcionRetorno, nombreTimer);
        } catch (error) {
            console.error("Timer.load: " + error);
        }
    };

    /**
    Detiene un timer o todos los timer que se estan ejecutando, cuando no se pasa un elemento al parametro nombre se elimina todos los timer.
    
    @method Timer.stop
    @param nombreTiempo {String} Nombre asignado el timer.
    @example
        //Detiene un tiempo que se esta ejecutando
        Timer.stop("timerParaFuncion");
        //Detiene un timer por medio de variable
        var tiempo = Timer.load(2,funcion);
        Timer.stop(tiempo);
        //Detiene todos los timer ejecutados
        Timer.stop();
    */
    Timer.stop = function (nombreTiempo) {
        try {
            detenerTiempo(nombreTiempo);
        } catch (error) {
            console.error("Timer.stop: " + error);
        }
    };

    function ejecutarCronometro(segundos, funcionRetorno, retroceso) {

    }

    function ejecutarTiempo(segundos, funcionRetorno, nombreTimer) {
        nombreTimer = nombreTimer || "timer" + segundos + "-" + Math.floor((Math.random() * 100000000) + 1);
        if (timerNoExiste(nombreTimer)) {
            segundos = segundos * 1000;
            var tiempoEjecucion = setTimeout(function () {
                tiempoCompleto(nombreTimer);
            }, segundos);
            var propiedadesDeTiempo = {
                "tiempo": tiempoEjecucion,
                "funcion": funcionRetorno,
                "nombreTiempo": nombreTimer
            };
            arrayTiempoEnEjecucion.push(propiedadesDeTiempo);
        }
        return nombreTimer;
    }

    function timerNoExiste(nombreTiempo) {
        for (var i = 0; i < arrayTiempoEnEjecucion.length; i++) {
            var propiedadesDeTiempo = arrayTiempoEnEjecucion[i];
            if (propiedadesDeTiempo.nombreTiempo === nombreTiempo) {
                return true;
            }
        }
        return true;
    }

    function tiempoCompleto(nombreTiempo) {
        for (var i = 0; i < arrayTiempoEnEjecucion.length; i++) {
            var propiedadesDeTiempo = arrayTiempoEnEjecucion[i];
            if (propiedadesDeTiempo.nombreTiempo === nombreTiempo) {
                ejecutarFuncionesRetorno(propiedadesDeTiempo.funcion);
                clearTimeout(propiedadesDeTiempo.timeout);
                arrayTiempoEnEjecucion.splice(i, 1);
                return true;
            }
        }
    }

    /**
    Cuando se pasa un array como parametro para retornar funciones, se recorre el array y se ejecuta una por una.
    */
    function ejecutarFuncionesRetorno(funcionRetorno) {
        if (Utils.typeOf(funcionRetorno) === 'array') {
            for (var i = 0; i < funcionRetorno.length; i++) {
                funcionRetorno[i]();
            }
        } else {
            funcionRetorno();
        }
    }

    function detenerTiempo(nombreTiempo) {
        if (!nombreTiempo) {
            //se borra todos los timer
            arrayTiempoEnEjecucion.forEach(function (tiempo) {
                clearTimeout(tiempo.timeout);
            });
            arrayTiempoEnEjecucion = [];
        } else {
            for (var i = 0; i < arrayTiempoEnEjecucion.length; i++) {
                var propiedadesDeTiempo = arrayTiempoEnEjecucion[i];
                if (propiedadesDeTiempo.nombreTiempo === nombreTiempo) {
                    clearTimeout(propiedadesDeTiempo.timeout);
                    arrayTiempoEnEjecucion.splice(i, 1);
                    break;
                }
            }
        }
    }

})(jQuery);
/*global Utils,console,jQuery,Display,window,Cubic,document,TweenMax,Timer,Button,Presentation,Text*/
/*jshint -W020*/

/**
Maneja opciones como la generacion de numeros, manejo de widget.

@class Utils
*/
(function ($) {

    Utils = {};

    var utilsModalActivo = null;

    /**
    Permite mostar un elemento del Stage aplicando una mascara para posicionarlo sobre los demas, tambien se puede indicar el tamaño 
    de la escala del elemento.

    @method Utils.modal
    @param elemento {(Object|String)} Elemento que se va a mostrar aparte en una ventana modal.
    @param escala {Number} Valor de escala que se quiere aplicar al elemento
    @example
        //Se escala a 4 un elemento.
        Utils.modal("mensaje.elemento",4); 
        //Para cargar por medio de un documento HTML y indicar la escala de 1.2
        &lt;div&gt;
            &lt;div class='row'&gt;
                &lt;div class="col-lg-8 col-lg-offset-2"&gt;
                    &lt;div <b>modal="1.2"</b>&gt;
                        &lt;div simbolo="nombresimbolo"&gt;&lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    */
    Utils.modal = function (elemento, escala) {
        try {
            cargarModal(elemento, escala);
        } catch (error) {
            console.error("Utils.modal: " + error);
        }
    };

    /**
    Carga un elemento como modal pero sin necesidad de dar clic como en {@link Utils.modal}.
    
    @method Utils.modalActive
    @param elemento {(String|Object)} Elemento que se va a activar.
    @param escala {Number} Valor de la escala que se quiere aplicar al elemento.
    @example
        //Se carga un elemento desde biblioteca
        Utils.modalActive("simboloDeBiblioteca", 1.2);
        //Para cargar un elemento ya creado desde un objeto
        var simbolo = Display.get("simboloCargado");
        Utils.modalActive(simbolo, 1.2);
    */
    Utils.modalActive = function (elemento, escala) {
        try {
            modalActivo(elemento, escala);
        } catch (error) {
            console.error("Utils.modalActive: " + error);
        }
    };

    /**
    Genera un array con numeros desde su valor iniciar hasta el rango epecificado.
    
    @method Utils.numbers
    @param [numeroInicial=0] {Number} Desde donde inicia la generación de numeros.
    @param [numeroFinal=100] {Number}Hasta donde finaliza la generación de numeros.
    @return {Array} Array Numeros generados.
    @example
        //Almacena un array con numeros de 1 a 100;
        var array = Utils.numbers(1, 100);
    */
    Utils.numbers = function (numeroInicial, numeroFinal) {
        try {
            return generarNumeros(numeroInicial, numeroFinal);
        } catch (error) {
            console.error("Utils.numbers: " + error);
        }
    };

    /**
    Genera un numero aleatorio entre un rango especificado.
    
    @method Utils.numberRandom
    @param [numeroInicial=0] {Number} Desde donde inicia la generación de numeros.
    @param [numeroFinal=100] {Number} Hasta donde finaliza la generación de numeros.
    @return {Number} Number Numero generado alaetoriamente.
    @example
        //Generar un numero de 0 a 100
        console.log(Utils.numberRandom());
        //Generar un numero aleatorio entre 1 y 10
        console.log(Utils.numberRandom(1,10));
    */
    Utils.numberRandom = function (numeroInicial, numeroFinal) {
        try {
            return Utils.numberRandom(numeroInicial, numeroFinal);
        } catch (error) {
            console.error("Utils.numberRandom: " + error);
        }
    };

    /**
    Identifica el tipo de valor de la variable y lo retorna un un string.
    
    @method Utils.typeOf
    @param elemento {*} Elemento a averiguar el tipo de valor
    @return {String} String Tipo de valor
    @example
        Utils.typeOf("hola"); //string
        Utils.typeOf(["campo1","campo2"]); //array
        Utils.typeOf($("elemento")); //object
    */
    Utils.typeOf = function (elemento) {
        try {
            return tipoDeVariable(elemento);
        } catch (error) {
            console.error("Utils.typeOf: " + error);
        }
    };


    function cargarModal(elemento, escala) {
        escala = escala || 1;
        if (typeof elemento === "string") {
            elemento = Display.get(elemento);
        }
        elemento.bind("mouseup", function () {
            modalActivo(elemento, escala);
        });
    }

    function modalActivo(elementoModal, escalaElemento) {
        if (tipoDeVariable(elementoModal) === "string" && Display.get(elementoModal).length > 0) {
            var contenedorTexto = "<div id='code-contendor-texto'></div>";
            $("body").append(contenedorTexto);
            contenedorTexto = $("#code-contendor-texto");
            contenedorTexto.append(elementoModal);
            elementoModal = contenedorTexto;
        }
        //Se clona para evitar modificar el elemento original que ya esta cargado en el escenario
        utilsModalActivo = Display.get(elementoModal).clone();
        utilsModalActivo.find(".img-responsive").removeClass("img-responsive");
        utilsModalActivo.find(".row").removeClass("row");
        escalaElemento = escalaElemento || 1;

        var codigoHtml = "" +
            "<div id='modal-modal'></div>" +
            "<div id='modal-boton-cerrar'><p>x</p></div>" +
            "<div id='modal-panel' class='panel'>" +
            "<div class='center middle' id='modal-contendor-contenido'>" +
            utilsModalActivo.html() +
            "</div>" +
            "</div >";
        //Carga elementos
        $("body").append(codigoHtml);
        $("#modal-panel").hide();

        //se agrega css a la ventana modal para mejorarla y ponerla de pantalla completa
        $("#modal-modal").css({
            "z-index": Display.setZIndex(Display.getZIndex() + 1),
            "width": window.innerWidth + "px",
            "height": window.innerHeight + "px",
            "position": "absolute",
            "background-color": "rgba(136, 135, 135, 0.85)",
            "margin": "auto",
            "left": window.pageXOffset + "px",
            "top": window.pageYOffset + "px",
            "cursor": "pointer"
        });
        $("#modal-panel").css({
            "z-index": Display.setZIndex(Display.getZIndex() + 1),
            "position": "absolute",
            "margin": "0px",
            "padding": "10px",
            "top": ((window.innerHeight - $("#modal-panel").height()) / 2) + "px",
            "left": ((window.innerWidth - $("#modal-panel").width()) / 2) + "px",
            "box-shadow": "0px 0px 10px rgba(0, 0, 0, 0.8)",
            "border": "none",
            "width": (utilsModalActivo.width() + 20) + "px",
            "height": (utilsModalActivo.height() + 20) + "px",
            //se escala
            "transform": "scale(" + escalaElemento + ", " + escalaElemento + ")"
        });
        $("#modal-boton-cerrar").css({
            "z-index": Display.setZIndex(Display.getZIndex() + 1),
            "font-size": "30px",
            "position": "absolute",
            "top": "15px",
            "left": (window.innerWidth - 45) + "px",
            "color": "#fff",
            "padding": "0",
            "font-family": "'cursive,Arial'",
            "text-shadow": "2px 2px 4px #DEDEDE",
            "cursor": "pointer",
        });
        $("#modal-contendor-contenido").css({
            "position": "absolute",
            "top": "10px",
            "left": "10px"
        });
        //se hace la animacion y se reposiciona el elemento con la carga
        Timer.load(0.5, function () {
            $("#modal-panel").show();
            modalReposicionar();
            TweenMax.from($("#modal-panel"), 0.5, {
                scaleX: 0,
                scaleY: 0,
                alpha: 0,
                ease: Cubic.easeout
            });
        });
        //Carga los listener
        $("#modal-boton-cerrar").on("click", function () {
            modalCerrar();
        });
        $("#modal-contenedor").on("click", function () {
            modalCerrar();
        });
        $(window).resize(modalReposicionar);
        $(window).scroll(modalReposicionar);
        $(document).keyup(function (e) {
            if (e.keyCode === 27) {
                modalCerrar();
            }
        });
        //se verifica si esta activo la presentacion y se elimina el listener
        if (Presentation.getCurrentPage() !== null) {
            Presentation.pause();
        }
    }

    function modalCerrar() {
        $("#modal-modal").remove();
        $("#modal-panel").remove();
        $("#modal-boton-cerrar").remove();
        $(window).off("resize", modalReposicionar);
        $(window).off("scroll", modalReposicionar);
        //se verifica si esta activo la presentacion y se carga el listener
        if (Presentation.getCurrentPage() !== null) {
            Presentation.play();
        }
    }

    function modalReposicionar() {
        try {
            $("#modal-panel").css({
                "top": ((window.innerHeight - $("#modal-panel").height()) / 2) + "px",
                "left": ((window.innerWidth - $("#modal-panel").width()) / 2) + "px"
            });
            $("#modal-modal").css({
                "width": window.innerWidth + "px",
                "height": window.innerHeight + "px",
                "left": window.pageXOffset + "px",
                "top": window.pageYOffset + "px"
            });
        } catch (error) {
            console.error("modalReposicionar: " + error);
        }
    }


    function generarNumeros(numeroInicial, numeroFinal) {
        numeroInicial = numeroInicial || 0;
        numeroFinal = numeroFinal || 100;
        var arrayDeNumeros = [];
        for (var i = numeroInicial; i < numeroFinal + 1; i++) {
            arrayDeNumeros.push(i);
        }
        return arrayDeNumeros;
    }

    function generarNumeroAleatorio(numeroInicial, numeroFinal) {
        numeroInicial = numeroInicial || 0;
        numeroFinal = numeroFinal || 100;
        return Math.floor((Math.random() * numeroFinal) + numeroInicial);
    }

    function tipoDeVariable(elemento) {
        return $.type(elemento);
    }

})(jQuery);
/*global Video,jQuery*/
/*jshint -W020*/

/**
Controla la camara, tambien la integración de video en las multimedias.

@class Video
*/
(function ($) {

    Video = {};

})(jQuery);
/*global Display,Event,Presentation,Message,Button*/

//nombre del bloque mensaje
//nombre funcion a cargar mensajeCargar(tipoDeMensaje, funcionDeRetorno);

var mensajeVentana = "ventanaMensaje";
var mensajeBotonAdelante = "ventanaMensaje.btnClose";

var mensajeMensajes = {
    "introduccion": "textos/mensajes/introduccion",
    "navegadorCorrecto": "textos/mensajes/navegadorCorrecto",
    "navegadorIncorrecto": "textos/mensajes/navegadorIncorrecto",
    "speakCorrecto": "textos/mensajes/speakCorrecto",
    "speakIncorrecto": "textos/mensajes/speakIncorrecto"
};

/********************************/

function mensajeCargar(tipoDeMensaje, funcionDeRetorno) {
    Message.modal(false);
    Message.load(mensajeVentana, mensajeMensajes[tipoDeMensaje], mensajeBotonAdelante);
    mensajeAudioBienMal(tipoDeMensaje);
    Message.onMenu(true);

    if (funcionDeRetorno != "") {
        Message.finish(funcionDeRetorno);
    }

    mensajeListenerBoton();
    Display.zIndex(menuAudioInicio);
}

function mensajeListenerBoton() {
    Button.over(mensajeBotonAdelante);
}

function mensajeAudioBienMal(tipoDeMensaje){
    if(tipoDeMensaje == "speakCorrecto"){
        Sound.play("media/mensajes/sonido1");
    }else if(tipoDeMensaje == "speakIncorrecto"){
        Sound.play("media/mensajes/sonido2");
    }
}
/*global Display,Presentation,Event,Arrays,TweenMax,Cubic,comP1JuegoCargar*/

//nombre del bloque venPre
//funcion a ejecutar venPreCargar(rutaTexto, cantidadPaginas, funcionRetorno);

var venPreVentana = "ventanaPresentacion";
var venPreBotonAtras = "";
var venPreBotonAdelante = "";
var venPrePaginacion = "";

var venPreFuncionFinal;
var venPreRutaTextosPresentacion;
var venPreCantidadPaginas;

/**
 * Functión que recibe los parametros para iniciar la presentación.
 */
function venPreCargar(rutaTexto, cantidadPaginas, funcionRetorno) {
    venPreReiniciar();

    venPreRutaTextosPresentacion = rutaTexto;
    venPreCantidadPaginas = cantidadPaginas;
    venPreFuncionFinal = funcionRetorno;
    venPreVentanaIn();
}

function venPreReiniciar() {
    venPreFuncionFinal = function () {};
    venPreRutaTextosPresentacion = "";
    venPreCantidadPaginas = 1;
}

function venPreVentanaIn() {
    Display.addChild(venPreVentana);
    TweenMax.from(venPreVentana, 1.5, {
        x: -1000,
        ease: Cubic.easeOut
    });
    Display.zIndex(menuAudioInicio);
    presentacionLoad();
}

function presentacionLoad() {
    Presentation.load(venPreVentana, venPreBotonAtras, venPreBotonAdelante, venPrePaginacion);
    Button.over(venPreBotonAdelante);
    Presentation.folderText(venPreRutaTextosPresentacion, venPreCantidadPaginas);
    Presentation.finish(venPreVentanaOut);
}

function venPreVentanaOut() {
    TweenMax.to(venPreVentana, 1.5, {
        x: 1050,
        ease: Cubic.easeIn,
        onComplete: function () {
            Display.removeChild(venPreVentana);
            venPreFuncionFinal();
        }
    });
}
/**
 * Clase principal para realizar la interacción con el usuario.
 * @autor: Diego Fernando Piedrahita T.
 * @fecha: octubre 29, 2015
 */

var escenarioInicial = "escenario";
var menuAudioInicio = "menuInicio";
var menuBotonSonido = "menuInicio.btnSonido";
var menuBotonInicio = "menuInicio.btnInicio";

var introRutaText = "textos/inicio/texto";
var introTipoDeMensaje = "introduccion";
var introCantidadPaginas = 1;
var introFuncionFinal = mostrarMenuGlosario;

function Main() {
    bienvenidaCargar();
}

/**
 * Bloque de bienvenida
 */
function bienvenidaCargar() {
    Display.addChild(escenarioInicial);
    cargarMenuInicio();
}

function cargarMenuInicio() {
    Display.addChild(menuAudioInicio);
    TweenLite.to(Display.get(menuAudioInicio), 0, {
        scaleX: 0,
        scaleY: 0,
        alpha: 0,
        onComplete: function () {
            TweenLite.to(Display.get(menuAudioInicio), 1.5, {
                scaleX: 1,
                scaleY: 1,
                alpha: 1,
                ease: Cubic.easeOut,
                onComplete: function () {
                    Timer.load(1, mostrarIntroduccion);

                    Button.over(menuBotonSonido);
                    Button.over(menuBotonInicio);
                    Sound.buttonMute(menuBotonSonido);
                    Event.click(menuBotonInicio, menuVolverInicio);
                }
            });
        }
    });

    Display.zIndex(menuAudioInicio);
}

function mostrarIntroduccion() {
    mensajeCargar(introTipoDeMensaje, introFuncionFinal);
}

function menuVolverInicio() {
    removerListener();
    Button.over(menuBotonSonido, false);
    Button.over(menuBotonInicio, false);
    Event.removeClick(menuBotonInicio, menuVolverInicio);
    var noEliminar = [
        escenarioInicial
        ];
    Message.remove();
    Presentation.remove();
    Display.removeChildAll(noEliminar);

    cargarMenuInicio();
}

function removerGlosario() {
    var noEliminar = [
        escenarioInicial,
        menuAudioInicio,
        menuBotonSonido,
        menuAudioInicio,
        menuGlosario
        ];
    Message.remove();
    Presentation.remove();
    Display.removeChildAll(noEliminar);

    mostrarMenuVerbos();
}

/**
 * Clase principal para realizar la interacción con el usuario.
 * @autor: Diego Fernando Piedrahita T.
 * @fecha: octubre 29, 2015
 */

var menuGlosario = "menuGlosario";
var menuGlosarioBotones = [
    "menuGlosario.botonAB",
    "menuGlosario.botonCE",
    "menuGlosario.botonFH",
    "menuGlosario.botonIO",
    "menuGlosario.botonPS",
    "menuGlosario.botonTZ"
];

var menuVerbos = "menuVerbos";
var menuVerbosBotones = [
    "menuVerbos.botonVerb1",
    "menuVerbos.botonVerb2"
];

var menuGlosarioCantPaginas = 1;
var menuGlosarioRetorno = mostrarMenuGlosario;


var selectBoton = "";
var textBoton = "";
var selectVerbBoton = "";
var carpetaBoton = "";

function mostrarMenuGlosario() {
    Display.addChild(menuGlosario);
    Display.position(menuGlosario, 485, 312);

    Display.get(menuGlosario).play();
    Event.verifyPosition(menuGlosario, "agregarListener", agregarListenerMenuGlosario)
}

function agregarListenerMenuGlosario() {
    Event.click(menuGlosarioBotones, seleccionarBotonMenu);
    Event.listener(menuGlosarioBotones, "mouseOver", botonesOver);
    Event.listener(menuGlosarioBotones, "mouseOut", botonesOut);
}

/**
   Metodo donde se ve el efecto de over del boton selecionado.

   @method botonesOver
   @param boton {Objet} toma el valor del boton seleccionado.
*/
function botonesOver(boton) {
    botonSeleccionado = boton.getName(true);
    Display.get(botonSeleccionado).stop("over");
}

/**
   Metodo donde permite volver al estado normal del boton selecionado.

   @method botonesOut
   @param boton {Objet} toma el valor del boton seleccionado.
*/
function botonesOut(boton) {
    botonSeleccionado = boton.getName(true);
    Display.get(botonSeleccionado).stop("out");
}

/**
   Metodo donde permite volver al estado normal del boton selecionado.

   @method seleccionarBotonMenu
   @param boton {Objet} toma el valor del boton seleccionado.
*/
function seleccionarBotonMenu(boton) {
    removerListener();
    selectBoton = boton.getName(true);
    textBoton = boton.getName();

    for (var k = 0; k < menuGlosarioBotones.length; k++) {
        Display.get(menuGlosarioBotones[k]).stop("out");
        Display.get(menuGlosarioBotones[k] + ".btnInt").stop("normal");
    }

    Display.get(selectBoton + ".btnInt").stop("press");
    ocultarMenuGlosario();
}

function ocultarMenuGlosario() {
    Display.get(menuGlosario).play("ocultarMenu");
    Event.verifyPosition(menuGlosario, "mostrarText", mostrarMenuVerbos)
}

function mostrarMenuVerbos() {
    Display.addChild(menuVerbos);
    if (selectVerbBoton != "") {
        Display.get(selectVerbBoton + ".btnInt").stop("press");
    }

    TweenMax.from(menuVerbos, 1.5, {
        x: -1000,
        ease: Cubic.easeOut,
        onComplete: function () {
            Button.over("menuVerbos.btnNext");
            Event.click("menuVerbos.btnNext", ocultarMenuVerbos);
            Event.click(menuVerbosBotones, ocultarMenuVerbos);
            Event.listener(menuVerbosBotones, "mouseOver", botonesOver);
            Event.listener(menuVerbosBotones, "mouseOut", botonesOut);
        }
    });
    Display.zIndex(menuAudioInicio);
}

function ocultarMenuVerbos(boton) {
    Button.over("menuVerbos.btnNext", false);
    Event.removeClick("menuVerbos.btnNext", ocultarMenuVerbos);
    Event.removeClick(menuVerbosBotones, ocultarMenuVerbos);
    Event.removeListener(menuVerbosBotones, "mouseOver", botonesOver);
    Event.removeListener(menuVerbosBotones, "mouseOut", botonesOut);

    selectVerbBoton = boton.getName(true);
    carpetaBoton = boton.getName();
    TweenMax.to(menuVerbos, 1.5, {
        x: 1050,
        ease: Cubic.easeIn,
        onComplete: function () {
            Display.removeChild(menuVerbos);

            if (carpetaBoton == "btnNext") {
                selectVerbBoton = "";
                mostrarMenuGlosario();
            } else {
                validarNavegador();
            }
        }
    });
}

function validarNavegador() {
    var valiNavegMensaje = "navegadorIncorrecto";

    if (Core.browser.chrome == true) {
        valiNavegMensaje = "navegadorCorrecto";
    }
    mensajeCargar(valiNavegMensaje, cargarContenidos);
}

function cargarContenidos() {
    venPreCargar("textos/" + textBoton + "/" + carpetaBoton + "/texto", menuGlosarioCantPaginas, validarNavegador);
    Event.click("ventanaPresentacion.btnNext", removerGlosario);
    Display.get("ventanaPresentacion.icono").stop(textBoton);
    console.log("El boton essss  " + textBoton);
    Timer.load(5, function () {
        Sound.speakState(resultadoSpeak);
    });
}

function resultadoSpeak(result) {
    console.log("result: " + result);
    var valiSpeakMensaje = "speakIncorrecto";
    if (result) {
        var valiSpeakMensaje = "speakCorrecto";
    }
    mensajeCargar(valiSpeakMensaje, "");
}

function removerListener() {
    Event.removeClick(menuGlosarioBotones, seleccionarBotonMenu);
    Event.removeListener(menuGlosarioBotones, "mouseOver", botonesOver);
    Event.removeListener(menuGlosarioBotones, "mouseOut", botonesOut);
}

