(function (Edge) {
    Adobe = {};
    Adobe.getComposition = function (compId) {
        return Edge.getComposition(compId)
    };
    Adobe.getSymbol = function (elemento) {
        return Edge.symbol.get(elemento)
    };
    Adobe.createSymbol = function (contenedor, nombreSimbolo) {
        return contenedor.createChildSymbol(nombreSimbolo, "Stage")
    };
    Adobe.getCompositionSymbols = function (composicion) {
        return Edge.getCompositionSymbolDefns(composicion.compId)
    }
})(window.AdobeEdge);
(function ($) {
    Arrays = {};
    Arrays.indexOf = function (array, elemento, key) {
        try {
            return buscarElementoEnArray(array, elemento, key)
        } catch (error) {
            console.error("Arrays.indexOf: " + error)
        }
    };
    Arrays.random = function (array) {
        try {
            return arrayAleatorio(array)
        } catch (error) {
            console.error("Arrays.random: " + error)
        }
    };
    Arrays.fill = function (valor, cantidad, posicionInio) {
        try {
            return rellenarArray(valor, cantidad, posicionInio)
        } catch (error) {
            console.error("Arrays.fill: " + error)
        }
    };

    function buscarElementoEnArray(array, elemento, key) {
        if (elemento === undefined) {
            return -1
        }
        for (var i = 0; i < array.length; i++) {
            if (tipoDeVariable(array[i]) === "array") {
                var posicionEnArray = buscarElementoEnArray(array[i], elemento, key);
                if (posicionEnArray !== -1) {
                    return posicionEnArray
                }
            } else {
                if (array[i][key] === elemento || array[i] === elemento) {
                    return i
                }
            }
        }
        return -1
    }

    
    function arrayAleatorio(array) {
        var nuevoArray = [];
        var arrayClon = clonarArray(array);
        while (arrayClon.length > 0) {
            var numeroAlAzar = Math.floor((Math.random() * arrayClon.length));
            nuevoArray.push(arrayClon[numeroAlAzar]);
            arrayClon.splice(numeroAlAzar, 1)
        }
        return nuevoArray
    }

    function clonarArray(array) {
        return array.slice()
    }

    function rellenarArray(valor, cantidad, posicionInio) {
        var array = [];
        cantidad = cantidad || 10;
        posicionInio = posicionInio || 0;
        for (var i = posicionInio; i < (posicionInio + cantidad); i++) {
            array.push(valor)
        }
        return array
    }

    function tipoDeVariable(elemento) {
        return $.type(elemento)
    }
})(jQuery);
(function ($) {
    Button = {};
    var arrayElementosEfectoOver = [];
    Button.click = function (elemento, estado) {
        try {
            aplicarEfectoClick(elemento, estado)
        } catch (error) {
            console.error("Button.click: " + error)
        }
    };
    Button.over = function (elemento, estado, zonaDeColision) {
        try {
            aplicarEfectoOver(elemento, estado, zonaDeColision)
        } catch (error) {
            console.error("Button.over: " + error)
        }
    };

    function aplicarEfectoClick(elemento, activarClick) {
        activarClick = (activarClick === undefined) ? true : activarClick;
        if (tipoDeVariable(elemento) === "array") {
            for (var i = 0; i < elemento.length; i++) {
                if (tipoDeVariable(activarClick) === "array") {
                    aplicarEfectoClick(elemento[i], activarClick[i])
                } else {
                    aplicarEfectoClick(elemento[i], activarClick)
                }
            }
        } else {
            elemento = Display.get(elemento);
            if (activarClick) {
                elemento.bind("mouseup", function () {
                    botonEfectoClickPresionado(elemento)
                });
                elemento.css({
                    cursor: "pointer"
                })
            } else {
                elemento.unbind("mouseup", botonEfectoClickPresionado);
                elemento.css({
                    cursor: "default"
                })
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
                })
            }
        })
    }

    function aplicarEfectoOver(elemento, activarOver, zonaDeColision) {
        activarOver = (activarOver === undefined) ? true : activarOver;
        zonaDeColision = zonaDeColision || elemento;
        if (tipoDeVariable(elemento) === "array") {
            aplicarEfectoOverEnArray(elemento, activarOver, zonaDeColision)
        } else {
            zonaDeColision = Display.get(zonaDeColision);
            elemento = Display.get(elemento);
            if (activarOver) {
                activarEfectoOver(elemento, zonaDeColision)
            } else {
                desactivarEfectoOver(zonaDeColision)
            }
        }
    }

    function aplicarEfectoOverEnArray(elemento, estado, zonaDeColision) {
        for (var i = 0; i < elemento.length; i++) {
            var nuevaZonaDeColision = zonaDeColision;
            var nuevoEstado = estado;
            if (tipoDeVariable(zonaDeColision) === "array") {
                nuevaZonaDeColision = zonaDeColision[i]
            }
            if (tipoDeVariable(estado) === "array") {
                nuevoEstado = estado[i]
            }
            aplicarEfectoOver(elemento[i], nuevoEstado, nuevaZonaDeColision)
        }
    }

    function activarEfectoOver(elemento, zonaDeColision) {
        zonaDeColision.bind("mouseover", function () {
            botonOverActivo(elemento)
        });
        zonaDeColision.bind("mouseout", function () {
            botonOutActivo(elemento)
        });
        zonaDeColision.css({
            cursor: "pointer"
        });
        var propiedadesDelOver = {
            elemento: Display.get(elemento),
            colision: zonaDeColision,
            idColision: zonaDeColision.attr("id")
        };
        arrayElementosEfectoOver.push(propiedadesDelOver)
    }

    function desactivarEfectoOver(zonaDeColision) {
        zonaDeColision.unbind("mouseover");
        zonaDeColision.unbind("mouseout");
        zonaDeColision.css({
            cursor: "default"
        });
        eliminarElementoDeArrayEfectoOver(zonaDeColision)
    }

    function botonOverActivo(boton) {
        TweenMax.to(boton, 1, {
            scaleX: Options.button().scaleOver,
            scaleY: Options.button().scaleOver,
            ease: Cubic.easeOut
        })
    }

    function botonOutActivo(boton) {
        TweenMax.to(boton, 0.5, {
            scaleX: Options.button().scaleOut,
            scaleY: Options.button().scaleOut
        })
    }

    function eliminarElementoDeArrayEfectoOver(zonaDeColision) {
        for (var i = 0; i < arrayElementosEfectoOver.length; i++) {
            var propiedadesDelOver = arrayElementosEfectoOver[i];
            if (propiedadesDelOver.idColision === zonaDeColision.attr("id")) {
                arrayElementosEfectoOver.splice(i, 1);
                break
            }
        }
    }

    function tipoDeVariable(elemento) {
        return $.type(elemento)
    }
})(jQuery);
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
    Collision.load = function (elementosMover, elementosColision, elementosCorrectos) {
        try {
            cargarColision(elementosMover, elementosColision, elementosCorrectos)
        } catch (error) {
            console.error("Collision.load: " + error)
        }
    };
    Collision.remove = function () {
        try {
            eliminarColision()
        } catch (error) {
            console.error("Collision.remove: " + error)
        }
    };
    Collision.stateCollision = function (funcionRetorno) {
        try {
            cargarFuncionDeRetornoEstado(funcionRetorno)
        } catch (error) {
            console.error("Collision.stateCollision: " + error)
        }
    };
    Collision.finish = function (funcion) {
        try {
            cargarFuncionDeRetorno(funcion)
        } catch (error) {
            console.error("Collision.finish: " + error)
        }
    };

    function cargarColision(elementosMover, elementosColision, elementosCorrectos) {
        if (tipoDeVariable(elementosColision) === "string") {
            elementosColision = [elementosColision]
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
        Drag.functionReturnStart(dragActivado)
    }

    function crearArrayDeElementosPosicionados() {
        elementosDragEnColision = {};
        for (var i = 0; i < colision.length; i++) {
            var nombreColision = Display.getName(colision[i]);
            elementosDragEnColision[nombreColision] = []
        }
    }

    function crearArrayDeElementosCorrectos() {
        elementosDragCorrectos = {};
        for (var i = 0; i < colision.length; i++) {
            var nombreColision = Display.getName(colision[i]);
            elementosDragCorrectos[nombreColision] = [Display.get(elementosDrag[i])]
        }
        return elementosDragCorrectos
    }

    function comprobarArrayDeElementosCorrectos() {
        for (var i = 0; i < colision.length; i++) {
            var nombreColision = Display.getName(colision[i]);
            if (elementosDragCorrectos[nombreColision] === undefined) {
                elementosDragCorrectos[nombreColision] = []
            }
        }
    }

    function eliminarColision() {
        Drag.remove(elementosDrag);
        if (Options.collision().duplicarElementos) {
            $(".clon").remove();
            elementosDragEnColision = {}
        }
    }

    function cargarFuncionDeRetornoEstado(funcion) {
        funcionRetornoEstado = funcion || function () {}
    }

    function cargarFuncionDeRetorno(funcion) {
        funcionFinal = funcion || function () {}
    }

    function dropActivado(elemento) {
        elementoDragActual = elemento;
        comprobarElementosColision()
    }

    function dragActivado() {
        almacenarPosicionOrigenElemento();
        colisionEnEstadoNormal();
        dragEnEstadoNormal()
    }

    function almacenarPosicionOrigenElemento() {
        if ($.isEmptyObject(posicionOrigenElementosDrag)) {
            for (var i = 0; i < elementosDrag.length; i++) {
                var elementoActual = Display.get(elementosDrag[i]);
                posicionOrigenElementosDrag[elementoActual.getName()] = elementoActual.position()
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
                        colisionCorrecta = true
                    }
                    if (colisionCorrecta) {
                        break
                    }
                }
                if (colisionCorrecta) {
                    detenerFotogramaElementoMovido("bien");
                    detenerForogramaElementoColision("bien");
                    if(Options.collision().habilitarArrastrarCorrecto){
                        Drag.remove(elementoDragActual);
                    }
                    if (Options.collision().duplicarElementos) {
                        var clon = elementoDragActual.clone().appendTo("#Stage").addClass("clon");
                        clon.attr("padre", nombreColisionActual);
                        almacenarEnDragColision(nombreColisionActual, clon);
                        listenerClon()
                    } else {
                        almacenarEnDragColision(nombreColisionActual, elementoDragActual)
                    }
                } else {
                    intentosMalos -= 1;
                    detenerFotogramaElementoMovido("mal");
                    detenerForogramaElementoColision("mal");
                    Display.position(elementoDragActual, posicionOrigenElemento.x, posicionOrigenElemento.y);
                    eliminarDragDeColision()
                }
                posicionarDragEnColision();
                detectarFinalDelJuego();
                ejecutarFuncionEstado(colisionCorrecta);
                return
            }
        }
        Display.position(elementoDragActual, posicionOrigenElemento.x, posicionOrigenElemento.y);
        eliminarDragDeColision();
        posicionarDragEnColision()
    }

    function colisionConCursor() {
        var posicionCursor = Drag.cursorPosition();
        var posicionColision = elementoColisionActual.position();
        var anchoColision = elementoColisionActual.outerWidth(true);
        var altoColision = elementoColisionActual.outerHeight(true);
        if (posicionCursor.x >= posicionColision.x && posicionCursor.x <= (anchoColision + posicionColision.x)) {
            if (posicionCursor.y >= posicionColision.y && posicionCursor.y <= (altoColision + posicionColision.y)) {
                return true
            }
        }
        return false
    }

    function detenerFotogramaElementoMovido(fotograma) {
        elementoDragActual.stop(fotograma)
    }

    function detenerForogramaElementoColision(fotograma) {
        elementoColisionActual.stop(fotograma)
    }

    function colisionEnEstadoNormal() {
        for (var i = 0; i < colision.length; i++) {
            elementoColisionActual = Display.get(colision[i]);
            var arrayElementoColision = elementosDragEnColision[elementoColisionActual.getName()];
            if (arrayElementoColision.length === 0) {
                detenerForogramaElementoColision("normal")
            }
        }
    }

    function dragEnEstadoNormal() {
        for (var i = 0; i < elementosDrag.length; i++) {
            elementoDragActual = Display.get(elementosDrag[i]);
            if (elementoDragEnPosicionOrigen()) {
                detenerFotogramaElementoMovido("normal")
            }
        }
    }

    function elementoDragEnPosicionOrigen() {
        var posicionOrigenDrag = posicionOrigenElementosDrag[elementoDragActual.getName()];
        var posicionDragActual = elementoDragActual.position();
        if (posicionDragActual.x === posicionOrigenDrag.x && posicionDragActual.y === posicionOrigenDrag.y) {
            return true
        }
        return false
    }

    function comprobarElementoPorTexto(elementoCorrecto) {
        var nombreElementoMovido = Display.getName(elementoDragActual, true);
        var contenedorTexto = elementoDragActual;
        if (!$.isEmptyObject(Display.get(nombreElementoMovido + "." + Options.containerText()))) {
            contenedorTexto = $("#" + elementoDragActual.attr("id") + "_" + Options.containerText() + " div")
        }
        if (elementoCorrecto === contenedorTexto.html()) {
            return true
        }
        return false
    }

    function comprobarElementoPorId(elementoCorrecto) {
        elementoCorrecto = Display.get(elementoCorrecto);
        if (elementoCorrecto.attr("id") === elementoDragActual.attr("id")) {
            return true
        }
        return false
    }

    function eliminarDragDeColision() {
        for (var i = 0; i < colision.length; i++) {
            var elementoColision = Display.get(colision[i]);
            var arrayElementos = elementosDragEnColision[elementoColision.getName()];
            var posicionEnArray = Arrays.indexOf(arrayElementos, elementoDragActual, elementoColision.getName());
            if (posicionEnArray !== -1) {
                elementosDragEnColision[elementoColision.getName()].splice(posicionEnArray, 1);
                break
            }
        }
    }

    function posicionarDragEnColision() {
        for (var i = 0; i < colision.length; i++) {
            var elementoColision = Display.get(colision[i]);
            var arrayElementos = elementosDragEnColision[elementoColision.getName()];
            if (Options.collision().ocultarElementos) {
                ocultarDragEnColision(arrayElementos)
            } else {
                var eje = Options.collision().ejePosicionEnColision;
                Display.positionArray(arrayElementos, elementoColision.position().x, elementoColision.position().y, eje)
            }
        }
    }

    function ocultarDragEnColision(arrayElementos) {
        for (var i = 0; i < arrayElementos.length; i++) {
            arrayElementos[i].hide()
        }
    }

    function ejecutarFuncionEstado(estado) {
        funcionRetornoEstado(estado)
    }

    function listenerClon() {
        $.each(elementosDragEnColision, function (key, elementos) {
            Event.click(elementos, eliminarClon)
        })
    }

    function eliminarClon(boton) {
        var posicionElemento = Arrays.indexOf(elementosDragEnColision[boton.attr("padre")], boton);
        elementosDragEnColision[boton.attr("padre")].splice(posicionElemento, 1);
        boton.remove();
        posicionarDragEnColision()
    }

    function detectarFinalDelJuego() {
        if (intentosMalos <= 0) {
            resultadoDeJuego = false
        }
        if (colisionElementosCompleta()) {
            finDelJuego()
        }
    }

    function colisionElementosCompleta() {
        var resultadoArray = true;
        for (var i = 0; i < colision.length; i++) {
            var nombreElementoColision = Display.getName(colision[i]);
            var elementosEnColision = elementosDragEnColision[nombreElementoColision];
            var elementosCorrectos = elementosDragCorrectos[nombreElementoColision];
            if (elementosEnColision.length !== elementosCorrectos.length) {
                resultadoArray = false
            }
        }
        return resultadoArray
    }

    function finDelJuego() {
        funcionRetornoEstado = function () {};
        eliminarColision();
        funcionFinal(resultadoDeJuego)
    }

    function tipoDeVariable(elemento) {
        return $.type(elemento)
    }

    function almacenarEnDragColision(posicion, elemento) {
        var eliminoPrimerElemento = false;
        if (elementosDragCorrectos[posicion].length <= elementosDragEnColision[posicion].length) {
            var elementoEliminar = elementosDragEnColision[posicion].shift();
            if (elementoEliminar.attr("padre")) {
                elementoEliminar.remove()
            }
            eliminoPrimerElemento = true
        }
        elementosDragEnColision[posicion].push(elemento);
        return eliminoPrimerElemento
    }
})(jQuery);
AdobeEdge.bootstrapCallback(function (idComposicion) {
    Core.initialize(idComposicion);
    Main()
});
(function ($) {
    Core = {};
    Core.composition = null;
    Core.symbols = {};
    Core.browser = {
        firefox: false,
        chrome: false,
        ie: false
    };
    Core.url = "";
    Core.initialize = function (composicion) {
        try {
            guardarComposicion(composicion);
            guardarSimbolos();
            mostrarVersionCodeCraft();
            navegadorActual();
            Style.main();
            cargarUrlActual()
        } catch (error) {
            console.error("Core.initialize: " + error)
        }
    };
    Core.propertySymbol = function (nombreSimbolo) {
        try {
            return propiedadesDeSimbolo(nombreSimbolo)
        } catch (error) {
            console.error("Core.propertySymbol: " + error)
        }
    };

    function guardarComposicion(compisicion) {
        Core.composition = Adobe.getComposition(compisicion)
    }

    function guardarSimbolos() {
        Core.symbols = Adobe.getCompositionSymbols(Core.composition)
    }

    function mostrarVersionCodeCraft() {
        console.clear();
        console.info("コードクラフト")
    }

    function navegadorActual() {
        if (navigator.userAgent.indexOf("Chrome") !== -1 || navigator.userAgent.indexOf("Safari") !== -1) {
            Core.browser.chrome = true
        }
        if (navigator.userAgent.indexOf("Firefox") !== -1) {
            Core.browser.firefox = true
        }
        if (navigator.userAgent.indexOf("MSIE") !== -1 || navigator.userAgent.indexOf("Trident") !== -1) {
            Core.browser.ie = true
        }
    }

    function propiedadesDeSimbolo(nombreSimbolo) {
        var simbolo = Core.symbols[nombreSimbolo];
        var ancho = simbolo.states["Base State"]["${symbolSelector}"][1][2];
        var alto = simbolo.states["Base State"]["${symbolSelector}"][0][2];
        var propiedades = {
            width: ancho,
            height: alto
        };
        return propiedades
    }

    function cargarUrlActual() {
        var rutaActual = location.href;
        var url = rutaActual.split("/");
        url.pop();
        Core.url = url.toString().replace(/[,]/g, "/");
        var URL = window.URL || (window.webkitURL);
        window.URL = URL
    }

    function ajustarVentana() {}
})(jQuery);
(function ($) {
    Data = {};
    Data.set = function (nombreVariable, valor) {
        try {
            almacenarValor(nombreVariable, valor)
        } catch (error) {
            console.error("Date.set: " + error)
        }
    };
    Data.get = function (nombreVariable) {
        try {
            return obtenerValor(nombreVariable)
        } catch (error) {
            console.error("Date.get: " + error)
        }
    };
    Data.clear = function (nombreVariable) {
        try {
            borrarDato(nombreVariable)
        } catch (error) {
            console.error("Data.clear: " + error)
        }
    };

    function almacenarValor(nombreVariable, valor) {
        soportaAlmacenamiento();
        localStorage.setItem(String(nombreVariable), JSON.stringify(valor))
    }

    function obtenerValor(nombreVariable) {
        soportaAlmacenamiento();
        return JSON.parse(localStorage.getItem(String(nombreVariable)))
    }

    function borrarDato(nombreVariable) {
        soportaAlmacenamiento();
        if (nombreVariable === undefined) {
            localStorage.clear()
        } else {
            localStorage.removeItem(nombreVariable)
        }
    }

    function soportaAlmacenamiento() {
        try {
            return "localStorage" in window && window.localStorage !== null
        } catch (error) {
            return false
        }
    }

    function tipoDeVariable(elemento) {
        return $.type(elemento)
    }
})(jQuery);
(function ($) {
    Display = {};
    var elementosAgregadosPantalla = [];
    var numeroZIndexActual = 1;
    Display.addChild = function (nombreSimbolo, contenedorSimbolo, nuevoNombreSimbolo) {
        try {
            if (nombreSimboloCorrecto(nombreSimbolo)) {
                return cargarSimbolo(nombreSimbolo, contenedorSimbolo, nuevoNombreSimbolo)
            }
        } catch (error) {
            console.error("Display.addChild: " + error)
        }
    };
    Display.addChildArray = function (nombreSimbolo, contenedor, cantidad) {
        try {
            return cargarArrayDeSimbolos(nombreSimbolo, contenedor, cantidad)
        } catch (error) {
            console.error("Display.addChildArray: " + error)
        }
    };
    Display.removeChild = function (object) {
        try {
            eliminarSimbolo(object)
        } catch (error) {
            console.error("Display.removeChild: " + error)
        }
    };
    Display.removeChildArray = function (array) {
        try {
            eliminarSimboloArray(array)
        } catch (error) {
            console.error("Display.removeChildArray: " + error)
        }
    };
    Display.removeChildAll = function (excluir) {
        try {
            eliminarTodosLosSimbolos(excluir)
        } catch (error) {
            console.error("Display.removeChildAll: " + error)
        }
    };
    Display.position = function (elemento, posicionX, posicionY) {
        try {
            posicionarElemento(elemento, posicionX, posicionY)
        } catch (error) {
            console.error("Display.position: " + error)
        }
    };
    Display.positionArray = function (arrayElementos, posicionX, posicionY, eje, limiteElementoPorEje) {
        try {
            posicionarArray(arrayElementos, posicionX, posicionY, eje, limiteElementoPorEje)
        } catch (error) {
            console.error("Display.positionArray: " + error)
        }
    };
    Display.get = function (nombreElemento) {
        try {
            return obtenerElemento(nombreElemento)
        } catch (error) {
            console.error("Display.get: " + error)
        }
    };
    Display.getId = function (elemento) {
        try {
            return obtenerIdElemento(elemento)
        } catch (error) {
            console.error("Display.getId: " + error)
        }
    };
    Display.getName = function (elemento, nombreCompleto) {
        try {
            return obtenerNombreElemento(elemento, nombreCompleto)
        } catch (error) {
            console.error("Display.getName: " + error)
        }
    };
    Display.zIndex = function (elemento1, elemento2) {
        try {
            cambiarNivelElemento(elemento1, elemento2)
        } catch (error) {
            console.error("Display.zIndex: " + error)
        }
    };
    Display.setZIndex = function (valor) {
        if (valor > numeroZIndexActual) {
            numeroZIndexActual = valor
        }
    };
    Display.getZIndex = function () {
        return numeroZIndexActual
    };
    Display.getChildren = function (nombreSimbolo) {
        try {
            return obtenerHijosElemento(nombreSimbolo)
        } catch (error) {
            console.error("Displa.getChildren: " + error)
        }
    };
    Display.stopFrame = function (elemento, frameInicial, fotogramaSiguiente) {
        try {
            detenerEnFotograma(elemento, frameInicial, fotogramaSiguiente)
        } catch (error) {
            console.error("Display.stopFrame: " + error)
        }
    };

    function nombreSimboloCorrecto(nombreSimbolo) {
        if (nombreSimbolo === "" || nombreSimbolo === " " || nombreSimbolo === null) {
            console.warn("Display.addChild: El nombre del simbolo no es correcto");
            return false
        }
        return true
    }

    function cargarSimbolo(nombreSimbolo, contenedorSimbolo, nuevoNombreSimbolo) {
        nuevoNombreSimbolo = nuevoNombreSimbolo || nombreSimbolo;
        contenedorSimbolo = contenedorSimbolo || "Stage";
        var numeroDeSimbolo = 0;
        if (estaElementoCargado(nombreSimbolo)) {
            numeroDeSimbolo = numeroDeSimboloNuevo(nombreSimbolo);
            nuevoNombreSimbolo = nombreSimbolo + numeroDeSimbolo
        }
        contenedorSimbolo = convertirASimbolo(Display.get(contenedorSimbolo));
        var simboloNuevo = Adobe.createSymbol(contenedorSimbolo, nombreSimbolo);
        var elementoNuevo = $("#" + simboloNuevo.element.context.id);
        var propiedadesSimbolo = {
            nombrePadre: nombreSimbolo,
            numeroDeSimbolo: numeroDeSimbolo,
            nombreSimbolo: nuevoNombreSimbolo,
            simbolo: simboloNuevo,
            id: elementoNuevo.attr("id")
        };
        elementosAgregadosPantalla.push(propiedadesSimbolo);
        posicionarNuevoSimbolo(nuevoNombreSimbolo);
        window[nuevoNombreSimbolo] = elementoNuevo;
        asignarDimensionesElemento(nuevoNombreSimbolo, nombreSimbolo);
        reposicionarMenu();
        return window[nuevoNombreSimbolo]
    }

    function estaElementoCargado(nombreSimbolo) {
        return (Display.get(nombreSimbolo).attr("id"))
    }

    function numeroDeSimboloNuevo(nombreSimboloNuevo) {
        var posicionSimbolo = -1;
        for (var i = 0; i < elementosAgregadosPantalla.length; i++) {
            var propiedadesSimbolo = elementosAgregadosPantalla[i];
            if (propiedadesSimbolo.nombrePadre === nombreSimboloNuevo) {
                posicionSimbolo = i
            }
        }
        var numeroDeSimboloActual = elementosAgregadosPantalla[posicionSimbolo].numeroDeSimbolo;
        return (numeroDeSimboloActual + 1)
    }

    function convertirASimbolo(elemento) {
        return Adobe.getSymbol(elemento)
    }

    function posicionarNuevoSimbolo(simbolo) {
        Display.get(simbolo).css({
            "z-index": numeroZIndexActual++,
            position: "absolute",
            top: "0px",
            left: "0px"
        })
    }

    function asignarDimensionesElemento(nuevoNombreSimbolo, nombreSimbolo) {
        var propiedadesCss = Core.propertySymbol(nombreSimbolo);
        window[nuevoNombreSimbolo].css(propiedadesCss)
    }

    function reposicionarMenu() {
        Menu.reload()
    }

    function cargarArrayDeSimbolos(nombreSimbolo, contenedor, cantidad) {
        var array = [];
        for (var i = 0; i < cantidad; i++) {
            array.push(cargarSimbolo(nombreSimbolo, contenedor))
        }
        return array
    }

    function eliminarSimbolo(object) {
        if (Display.get(object).length > 0) {
            TweenMax.killTweensOf(object);
            var nombreSimbolo = Display.getName(object);
            var propiedadesSimbolo = obtenerPropiedadesSimboloCargado(nombreSimbolo);
            if (!$.isEmptyObject(propiedadesSimbolo)) {
                propiedadesSimbolo.simbolo.deleteSymbol();
                eliminarSimboloDeArrayPantalla(nombreSimbolo)
            } else {
                Display.get(object).remove()
            } if (nombreSimbolo !== "") {
                window[nombreSimbolo] = $()
            }
        }
    }

    function eliminarSimboloDeArrayPantalla(nombreSimbolo) {
        for (var i = 0; i < elementosAgregadosPantalla.length; i++) {
            var propiedadesSimbolo = elementosAgregadosPantalla[i];
            if (propiedadesSimbolo.nombreSimbolo === nombreSimbolo) {
                elementosAgregadosPantalla.splice(i, 1);
                break
            }
        }
    }

    function eliminarSimboloArray(array) {
        for (var i = 0; i < array.length; i++) {
            if (tipoDeVariable(array[i]) === "array") {
                eliminarSimboloArray(array[i])
            } else {
                eliminarSimbolo(array[i])
            }
        }
    }

    function eliminarTodosLosSimbolos(elementosExcluir) {
        var elementosParaEliminar = [];
        for (var i = 0; i < elementosAgregadosPantalla.length; i++) {
            var elementoActual = $("#" + elementosAgregadosPantalla[i].id);
            var elementoNoExcluido = verificarElementoExcluido(elementoActual, elementosExcluir);
            if (elementoNoExcluido) {
                elementosParaEliminar.push(elementoActual)
            }
        }
        eliminarSimboloArray(elementosParaEliminar)
    }

    function verificarElementoExcluido(elementoActual, arrayElementoExluido) {
        for (var i = 0; i < arrayElementoExluido.length; i++) {
            var elementoActualExcluir = obtenerElemento(arrayElementoExluido[i]);
            if (elementoActual.attr("id") === elementoActualExcluir.attr("id")) {
                return false
            }
        }
        return true
    }

    function posicionarElemento(elemento, posicionX, posicionY) {
        posicionX = posicionX || 0;
        posicionY = posicionY || 0;
        if (tipoDeVariable(elemento) === "array") {
            for (var i = 0; i < elemento.length; i++) {
                posicionarElemento(elemento[i], posicionX, posicionY)
            }
        } else {
            Display.get(elemento).css({
                position: "absolute",
                top: posicionY + "px",
                left: posicionX + "px"
            })
        }
    }

    function posicionarArray(arrayElementos, posicionX, posicionY, eje, limiteElementoPorEje) {
        posicionX = posicionX || 0;
        posicionY = posicionY || 0;
        eje = eje || "x";
        limiteElementoPorEje = limiteElementoPorEje || -1;
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
                    posicionX = posicionXInicial
                } else {
                    posicionX += dimensiones.ancho + Options.positionArray().distanciaEntreElementos;
                    posicionY = posicionYInicial
                }
            }
            posicionarElemento(elemento, posicionX, posicionY);
            if (eje === "x") {
                posicionX += dimensiones.ancho + Options.positionArray().distanciaEntreElementos
            } else {
                posicionY += dimensiones.alto + Options.positionArray().distanciaEntreElementos
            }
        }
    }

    function obtenerDimensionesElemento(elemento) {
        var dimensiones = {
            ancho: elemento.outerWidth(true),
            alto: elemento.outerHeight(true)
        };
        return dimensiones
    }

    function obtenerElemento(nombreElemento) {
        if (typeof nombreElemento === "string") {
            var id = Display.getId(nombreElemento);
            if (elementoExiste($("#" + id))) {
                return $("#" + id)
            }
            if (nombreElemento.substr(0, 5) === "Stage") {
                var idElementoStage = nombreElemento.replace(/[,.]/g, "_");
                return $("#" + idElementoStage)
            }
        } else {
            if (tipoDeVariable(nombreElemento) === "object") {
                return nombreElemento
            }
        }
        return $()
    }

    function elementoExiste(elemento) {
        if (elemento.length > 0) {
            return true
        }
        return false
    }

    function obtenerIdElemento(elemento) {
        if (tipoDeVariable(elemento) === "string") {
            var posicion;
            var posicionPuntoNombre = elemento.indexOf(".");
            if (posicionPuntoNombre === -1) {
                posicionPuntoNombre = elemento.length
            }
            var nombreSimboloPadre = elemento.substr(0, posicionPuntoNombre);
            var propiedadesSimbolo = obtenerPropiedadesSimboloCargado(nombreSimboloPadre);
            if (!$.isEmptyObject(propiedadesSimbolo)) {
                var id = propiedadesSimbolo.id + elemento.substr(posicionPuntoNombre).replace(/[,.]/g, "_");
                if (elementoExiste($("#" + id))) {
                    return id
                }
            }
            if (elemento === "Stage") {
                return "Stage"
            }
        } else {
            if (!$.isEmptyObject(elemento) && elemento.attr("id")) {
                return elemento.attr("id")
            }
        }
        return ""
    }

    function obtenerPropiedadesSimboloCargado(nombreSimboloBuscar) {
        for (var i = 0; i < elementosAgregadosPantalla.length; i++) {
            var propiedadesSimbolo = elementosAgregadosPantalla[i];
            if (propiedadesSimbolo.nombreSimbolo === nombreSimboloBuscar) {
                return propiedadesSimbolo
            }
        }
        return {}
    }

    function obtenerNombreElemento(elemento, nombreCompleto) {
        nombreCompleto = nombreCompleto || false;
        elemento = Display.get(elemento);
        if (elemento.attr("id")) {
            var nombre = elemento.attr("id");
            nombre = nombre.replace(/[_]/g, ".");
            if (nombre === "Stage") {
                return "Stage"
            }
            var arrayNombre = nombre.split(".");
            if (arrayNombre.length > 2) {
                if (nombreCompleto) {
                    var nombreSimbolo = arrayNombre.splice(0, 2).toString();
                    nombreSimbolo = nombreSimbolo.replace(/,/g, "_");
                    nombreSimbolo = obtenerNombreElemento($("#" + nombreSimbolo));
                    nombre = arrayNombre.toString();
                    nombre = nombre.replace(/,/g, ".");
                    return nombreSimbolo + "." + nombre
                } else {
                    return arrayNombre[arrayNombre.length - 1]
                }
            } else {
                return obtenerNombreSimbolo(elemento)
            }
        }
        return ""
    }

    function obtenerNombreSimbolo(simbolo) {
        var idSimbolo = simbolo.attr("id");
        for (var i = 0; i < elementosAgregadosPantalla.length; i++) {
            var propiedadesSimbolo = elementosAgregadosPantalla[i];
            if (propiedadesSimbolo.id === idSimbolo) {
                return propiedadesSimbolo.nombreSimbolo
            }
        }
        return ""
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
        })
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
            elementosHijos.push(elementoHijoTemporar)
        }
        var hijos = {
            nombres: nombresHijos,
            elementos: elementosHijos
        };
        return hijos
    }

    function detenerEnFotograma(elemento, frameInicial, fotogramaSiguiente) {
        frameInicial = frameInicial || 0;
        fotogramaSiguiente = (fotogramaSiguiente === undefined) ? true : fotogramaSiguiente;
        if (tipoDeVariable(elemento) === "array") {
            for (var i = 0; i < elemento.length; i++) {
                detenerEnFotograma(elemento[i], frameInicial, fotogramaSiguiente);
                if (fotogramaSiguiente) {
                    frameInicial += 1
                }
            }
        } else {
            $.when(elemento, frameInicial, fotogramaSiguiente).done(function (elemento, frameInicial, fotogramaSiguiente) {
                elemento = Display.get(elemento);
                if (tipoDeVariable(frameInicial) === "string") {
                    frameInicial = elemento.getLabelPosition(frameInicial)
                }
                elemento[0].edgeSymbol.stop(frameInicial * 1000)
            })
        }
    }

    function tipoDeVariable(elemento) {
        return $.type(elemento)
    }
})(jQuery);
(function ($) {
    Drag = {};
    var funcionDeRetornoDrop = function () {};
    var funcionDeRetornoDrag = function () {};
    var funcionDeRetornoStart = function () {};
    var posicionInicial = {
        x: 0,
        y: 0
    };
    var posicionDeCursor = {
        x: 0,
        y: 0
    };
    Drag.load = function (elemento, origen, limite) {
        try {
            cargarDrag(elemento, origen, limite)
        } catch (error) {
            console.error("Drag.load: " + error)
        }
    };
    Drag.remove = function (elemento) {
        try {
            eliminarDrag(elemento)
        } catch (error) {
            console.error("Drag.remove: " + error)
        }
    };
    Drag.functionReturnDrop = function (funcion) {
        try {
            cargarFuncionDrop(funcion)
        } catch (error) {
            console.error("Drag.functionReturnDrop: " + error)
        }
    };
    Drag.functionReturnDrag = function (funcion) {
        try {
            cargarFuncionDrag(funcion)
        } catch (error) {
            console.error("Drag.functionReturnDrag: " + error)
        }
    };
    Drag.functionReturnStart = function (funcion) {
        try {
            cargarFuncionStart(funcion)
        } catch (error) {
            console.error("Drag.functionReturnDrag: " + error)
        }
    };
    Drag.cursorPosition = function () {
        return posicionDeCursor
    };

    function cargarDrag(elemento, retornarPosicionInicial, limiteParaDrag) {
        retornarPosicionInicial = (retornarPosicionInicial === undefined) ? true : retornarPosicionInicial;
        limiteParaDrag = limiteParaDrag || "Stage";
        if (tipoDeVariable(elemento) === "array") {
            for (var i = 0; i < elemento.length; i++) {
                cargarDrag(elemento[i], retornarPosicionInicial, limiteParaDrag)
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
                    funcionDeRetornoStart(elemento)
                },
                drag: function (cursor) {
                    almacenarPosicionCursor(cursor);
                    funcionDeRetornoDrag(elemento)
                },
                axis: Options.drag().eje,
                stop: function (cursor) {
                    almacenarPosicionCursor(cursor);
                    if (retornarPosicionInicial) {
                        Display.position(elemento, posicionInicial.x, posicionInicial.y)
                    }
                    funcionDeRetornoDrop(elemento)
                },
                containment: "#" + limiteParaDrag
            });
            Display.get(elemento).css({
                cursor: "pointer"
            })
        }
    }

    function almacenarPosicionCursor(cursor) {
        posicionDeCursor.x = cursor.pageX - $("#Stage").offset().left;
        posicionDeCursor.y = cursor.pageY - $("#Stage").offset().top
    }

    function eliminarDrag(elemento) {
        if (tipoDeVariable(elemento) === "array") {
            for (var i = 0; i < elemento.length; i++) {
                eliminarDrag(elemento[i])
            }
        } else {
            elemento = Display.get(elemento);
            elemento.draggable("disable");
            elemento.css({
                cursor: "default"
            })
        }
    }

    function cargarFuncionDrop(funcion) {
        funcion = funcion || function () {};
        funcionDeRetornoDrop = funcion
    }

    function cargarFuncionDrag(funcion) {
        funcion = funcion || function () {};
        funcionDeRetornoDrag = funcion
    }

    function cargarFuncionStart(funcion) {
        funcion = funcion || function () {};
        funcionDeRetornoStart = funcion
    }

    function tipoDeVariable(elemento) {
        return $.type(elemento)
    }
})(jQuery);
(function ($) {
    Event = {};
    var eventosDeEnterFrame = [];
    var arrayElementosVerificarPosicion = [];
    Event.listener = function (elemento, evento, funcion) {
        try {
            aplicarListener(elemento, evento, funcion)
        } catch (error) {
            console.error("Event.listener: " + error)
        }
    };
    Event.removeListener = function (elemento, evento) {
        try {
            eliminarListener(elemento, evento)
        } catch (error) {
            console.error("Event.removeListener: " + error)
        }
    };
    Event.verifyPosition = function (elemento, posicionLineaTiempo, funcionRetorno) {
        try {
            verificarPosicionElemento(elemento, posicionLineaTiempo, funcionRetorno)
        } catch (error) {
            console.error("Event.verifyPosition: " + error)
        }
    };
    Event.verifyPositionStop = function (elemento) {
        try {
            detenerVerificarPosicionElemento(elemento)
        } catch (error) {
            console.log("Event.verifyPositionStop: " + error)
        }
    };
    Event.click = function (elemento, funcionRetorno) {
        try {
            cargarEventoClick(elemento, funcionRetorno)
        } catch (error) {
            console.error("Event.click: " + error)
        }
    };
    Event.removeClick = function (elemento) {
        try {
            eliminarEventoClick(elemento)
        } catch (error) {
            console.error("Event.removeClick: " + error)
        }
    };

    function aplicarListener(elemento, evento, funcion) {
        if (tipoDeVariable(elemento) === "array") {
            for (var i = 0; i < elemento.length; i++) {
                aplicarListener(elemento[i], evento, funcion)
            }
        } else {
            elemento = Display.get(elemento);
            evento = evento.toLowerCase();
            if (evento === "enterframe") {
                aplicarEnterFrame(elemento, funcion)
            } else {
                var noExisteEvento = verificarSiEventoExiste(elemento, evento);
                if (noExisteEvento) {
                    elemento.bind(evento, function () {
                        funcion(elemento)
                    })
                }
            }
        }
    }

    function verificarSiEventoExiste(elemento, evento) {
        if (elemento[0] === undefined) {
            return false
        }
        var eventosDelElemento = $._data(elemento[0], "events");
        if (eventosDelElemento) {
            if (eventosDelElemento[evento]) {
                return false
            }
        }
        return true
    }

    function aplicarEnterFrame(elemento, funcionRetorno) {
        var tiempoEjecucion = setInterval(function () {
            funcionRetorno(elemento)
        }, 0.001);
        var propiedadesEnterFrame = {
            idElemento: elemento.attr("id"),
            tiempoEjecucion: tiempoEjecucion
        };
        eventosDeEnterFrame.push(propiedadesEnterFrame)
    }

    function eliminarListener(elemento, evento) {
        if (tipoDeVariable(elemento) === "array") {
            for (var i = 0; i < elemento.length; i++) {
                eliminarListener(elemento[i], evento)
            }
        } else {
            elemento = Display.get(elemento);
            evento = evento.toLowerCase();
            if (evento === "enterframe") {
                eliminarEnterFrame(elemento)
            } else {
                elemento.unbind(evento)
            }
        }
    }

    function eliminarEnterFrame(elemento) {
        for (var i = 0; i < eventosDeEnterFrame.length; i++) {
            var propiedadesEnterFrame = eventosDeEnterFrame[i];
            if (propiedadesEnterFrame.idElemento === elemento.attr("id")) {
                clearInterval(propiedadesEnterFrame.tiempoEjecucion);
                eventosDeEnterFrame.splice(i, 1);
                break
            }
        }
    }

    function verificarPosicionElemento(elemento, posicionLineaTiempo, funcionRetorno) {
        elemento = Display.get(elemento);
        if (typeof posicionLineaTiempo === "string") {
            posicionLineaTiempo = elemento.getLabelPosition(posicionLineaTiempo)
        }
        var propiedadesDeElemento = {
            idElemento: elemento.attr("id"),
            posicion: posicionLineaTiempo,
            funcionRetorno: funcionRetorno
        };
        arrayElementosVerificarPosicion.push(propiedadesDeElemento);
        aplicarEnterFrame(elemento, enterFrameElemento)
    }

    function enterFrameElemento(elemento) {
        var propiedadesDeElemento = propiedadesElementoVerificar(elemento);
        var funcionRetorno = propiedadesDeElemento.funcionRetorno;
        var posicion = propiedadesDeElemento.posicion;
        if (elemento.getPosition() >= (posicion - 50) && elemento.getPosition() <= (posicion + 50)) {
            if (tipoDeVariable(funcionRetorno) === "array") {
                for (var i = 0; i < funcionRetorno.length; i++) {
                    funcionRetorno[i]()
                }
            } else {
                funcionRetorno()
            } if (arrayElementosVerificarPosicion.length > 0) {
                eliminarEnterFrame(elemento);
                eliminarElementoDeArrayVerificarPosicion(elemento)
            }
        }
    }

    function propiedadesElementoVerificar(elemento) {
        for (var i = 0; i < arrayElementosVerificarPosicion.length; i++) {
            var propiedadesDeElemento = arrayElementosVerificarPosicion[i];
            if (propiedadesDeElemento.idElemento === elemento.attr("id")) {
                return propiedadesDeElemento
            }
        }
    }

    function eliminarElementoDeArrayVerificarPosicion(elemento) {
        for (var i = 0; i < arrayElementosVerificarPosicion.length; i++) {
            var propiedadesDeElemento = arrayElementosVerificarPosicion[i];
            if (propiedadesDeElemento.idElemento === elemento.attr("id")) {
                arrayElementosVerificarPosicion.splice(i, 1);
                break
            }
        }
    }

    function detenerVerificarPosicionElemento(elemento) {
        elemento = Display.get(elemento);
        eliminarEnterFrame(elemento);
        eliminarElementoDeArrayVerificarPosicion(elemento)
    }

    function cargarEventoClick(elemento, funcionRetorno) {
        if (tipoDeVariable(elemento) === "array") {
            for (var i = 0; i < elemento.length; i++) {
                cargarEventoClick(elemento[i], funcionRetorno)
            }
        } else {
            aplicarListener(elemento, "mouseup", funcionRetorno);
            elemento = Display.get(elemento);
            elemento.css({
                cursor: "pointer"
            })
        }
    }

    function eliminarEventoClick(elemento, funcionRetorno) {
        if (tipoDeVariable(elemento) === "array") {
            for (var i = 0; i < elemento.length; i++) {
                eliminarEventoClick(elemento[i], funcionRetorno)
            }
        } else {
            eliminarListener(elemento, "mouseup", funcionRetorno);
            elemento = Display.get(elemento);
            elemento.css({
                cursor: "default"
            })
        }
    }

    function tipoDeVariable(elemento) {
        return $.type(elemento)
    }
})(jQuery);
(function ($) {
    Html = {};
    Html.load = function () {
        cargarSimbolosEnContenedor();
        activarEfectosButtonOver();
        activarVentanaModal();
        colorNiveles();
        botonesDeAudio()
        botonGrabarAudio();
    };
    
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

    function cargarSimbolosEnContenedor() {
        $("[simbolo]").each(function () {
            if ($(this).children().length === 0) {
                var elemento = Display.addChild($(this).attr("simbolo"));
                if (elemento) {
                    elemento.appendTo($(this));
                    elemento.css({
                        position: "relative"
                    });
                    $(this).css({
                        width: elemento.width(),
                        height: elemento.height()
                    })
                }
            }
        })
    }

    function activarEfectosButtonOver() {
        $("[buttonover]").each(function () {
            if ($(this).attr("id") === undefined) {
                $(this).attr("id", "id_buttonover_" + (Math.round(Math.random() * 100000000)))
            }
            Button.over($("#" + $(this).attr("id")))
        })
    }

    function activarVentanaModal() {
        $("[modal]").each(function () {
            if ($(this).attr("id") === undefined) {
                $(this).attr("id", "id_modal_" + (Math.round(Math.random() * 100000000)))
            }
            Utils.modal($(this), $(this).attr("modal"))
        })
    }

    function colorNiveles() {
        $("[negrilla], [bold]").each(function () {
            var tipoDeLinea = "normal";
            if ($(this).attr("negrilla") === "true" || $(this).attr("bold") === "true") {
                tipoDeLinea = "bold"
            }
            $(this).css({
                "font-weight": tipoDeLinea
            })
        })
    }

    function botonesDeAudio() {
        var botonesAudio = [];
        var sonidos = [];
        $("[audio]").each(function () {
            botonesAudio.push($(this).children());
            sonidos.push($(this).attr("audio"))
        });
        if (botonesAudio.length > 0) {
            Sound.playButtons(botonesAudio, sonidos)
        }
    }
})(jQuery);
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
    var textoDeContenedor;
    var botonVerificar;
    var resultadoDeJuego;
    Input.load = function (contenedor) {
        try {
            cargarInput(contenedor)
        } catch (error) {
            console.error("Input.load: " + error)
        }
    };
    Input.textVerify = function (rutaTexto) {
        try {
            cargarArchivoDeTexto(rutaTexto)
        } catch (error) {
            console.error("Input.textVerify: " + error)
        }
    };
    Input.button = function (boton) {
        try {
            cargarBotonInput(boton)
        } catch (error) {
            console.error("Input.button: " + error)
        }
    };
    Input.remove = function () {
        try {
            eliminarInput()
        } catch (error) {
            console.error("Input.remove: " + error)
        }
    };
    Input.stateInput = function (funcion) {
        try {
            cargarFuncionEstado(funcion)
        } catch (error) {
            console.error("Input.stateInput: " + error)
        }
    };
    Input.finish = function (funcion) {
        try {
            cargarFuncionFinal(funcion)
        } catch (error) {
            console.error("Input.finish: " + error)
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
        textoDeContenedor = ""
    }

    function eliminarInput() {
        eliminarListenerDeInputs();
        eliminarListenerBoton();
        desactivarBoton()
    }

    function verificarContenedorTexto(contenedor) {
        contenedor = Display.get(contenedor);
        var contenedorTexto = Display.get(contenedor.getName(true) + "." + Options.containerText());
        if (!$.isEmptyObject(contenedorTexto)) {
            return contenedorTexto
        }
        return contenedor
    }

    function cargarArchivoDeTexto(texto) {
        $.ajax({
            url: texto + ".html",
            success: function (archivo) {
                textoDeContenedor = archivo;
                cargarTextoContenedor();
                almacenarInputsEnArray();
                almacenarTextAreaEnArray();
                almacenarSelectEnArray()
            },
            error: function (error) {
                console.error("Archivo para verificar textos de input no cargado")
            }
        })
    }

    function cargarTextoContenedor() {
        Style.presentacion();
        Text.load(contenedorTexto, textoDeContenedor);
        Style.contenedor(contenedorTexto)
    }

    function almacenarInputsEnArray() {
        var numeroInput = 0;
        $("completa").each(function () {
            tipoDeInput = "input";
            var tipoEscritura = $(this).attr("type") || "text";
            var textoBueno = $(this).html();
            var inputHtml = "<input id='input-" + numeroInput + "' type='" + tipoEscritura + "' />";
            var anchoDelInput = $(this).width() + 10;
            $(this).html(inputHtml);
            inputHtml = $("#input-" + numeroInput);
            inputHtml.css({
                width: anchoDelInput,
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
            verificarTipoInput(inputHtml)
        });
        almacenarBotonVerificar();
        listenerDeInputs()
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
                resize: "none"
            });
            textAreaHtml.addClass("form-control");
            numeroTextArea += 1;
            inputs.push(textAreaHtml);
            var textoActualBueno = textoBueno.toLocaleLowerCase();
            textoActualBueno = textoActualBueno.split(/[,;.\-\_]/);
            textosBuenos[textAreaHtml.attr("id")] = textoActualBueno;
            textosEscritos[textAreaHtml.attr("id")] = "";
            verificarTipoInput(textAreaHtml)
        });
        $("resultado").each(function () {
            var resultado = "<div id='resultado-" + numeroResultado + "'/>";
            $(this).html(resultado);
            resultado = $("#resultado-" + numeroResultado);
            resultado.css({
                "overflow-y": "auto",
                "min-height": "60px",
                "max-height": "1000px",
                padding: "10px",
                border: "1px solid #C9C6C6",
                "border-radius": "5px",
                "margin-top": "15px",
                "background-color": "#F7F7F7"
            });
            contenedorResultados.push(resultado);
            resultadosActuales["textarea-" + numeroResultado] = [];
            numeroResultado += 1
        });
        almacenarBotonVerificar();
        listenerDeInputs()
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
            textosEscritos[selectHtml.attr("id")] = ""
        });
        cargarOpcionesDefectoSelect();
        listenerDeSelect();
        almacenarBotonVerificar()
    }

    function cargarOpcionesDefectoSelect() {
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].append("<option selected='selected'> </option>")
        }
    }

    function listenerDeSelect() {
        for (var i = 0; i < inputs.length; i++) {
            var selectActual = inputs[i];
            selectActual.change(opcionesActivasSelect)
        }
    }

    function opcionesActivasSelect(selectActual) {
        var idSelectActivo = selectActual.target.id;
        textosEscritos[idSelectActivo] = $(this).val();
        if (selectLlenos()) {
            listenerBoton();
            activarBoton()
        }
    }

    function selectLlenos() {
        for (var i = 0; i < inputs.length; i++) {
            var selectActual = inputs[i];
            if (textosEscritos[selectActual.attr("id")] === "" || textosEscritos[selectActual.attr("id")] === " ") {
                return false
            }
        }
        return true
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
                intentosBuenos += 1
            } else {
                selectActual.addClass("input-mal");
                intentosMalos -= 1
            }
        }
        if (!Options.input().errorPorInput && intentosActuales !== intentosMalos) {
            intentosMalos = intentosActuales - 1
        }
        if (intentosMalos > 0) {
            intentosMostrarEstado = intentosMalos
        }
        verificarFinJuego();
        funcionEstado(intentosMostrarEstado)
    }

    function almacenarBotonVerificar() {
        if (botonVerificar.length === 0) {
            $("[boton]").each(function () {
                botonVerificar = $(this)
            })
        }
        desactivarBoton()
    }

    function listenerDeInputs() {
        for (var i = 0; i < inputs.length; i++) {
            var inputActual = inputs[i];
            inputActual.keyup(llenarInput)
        }
    }

    function eliminarListenerDeInputs() {
        for (var i = 0; i < inputs.length; i++) {
            var inputActual = inputs[i];
            inputActual.unbind("keydown");
            inputActual.unbind("keyup")
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
            break
        }
    }

    function eliminarListenerBoton() {
        Event.removeClick(botonVerificar)
    }

    function desactivarBoton() {
        Button.over(botonVerificar, false);
        botonVerificar.css({
            opacity: Options.input().opacidadVerificar,
            cursor: "default"
        })
    }

    function activarBoton() {
        Button.over(botonVerificar);
        botonVerificar.css({
            opacity: 1,
            cursor: "pointer"
        })
    }

    function llenarInput(input) {
        textosEscritos[$(this).attr("id")] = $(this).val().toLocaleLowerCase();
        if (inputsLlenos()) {
            listenerBoton();
            activarBoton()
        } else {
            desactivarBoton();
            eliminarListenerBoton()
        } if (tipoDeInput === "textarea") {
            llenarResultados($(this))
        }
    }

    function llenarResultados(inputActual) {
        var posicionResultado = inputActual.attr("id").substr(inputActual.attr("id").length - 1);
        var resultadoActual = contenedorResultados[posicionResultado];
        var textoResultado = inputActual.val().toLocaleLowerCase();
        var arrayTextos = textoResultado.split("-");
        resultadosActuales[inputActual.attr("id")] = arrayTextos;
        textoResultado = "";
        for (var i = 0; i < arrayTextos.length; i++) {
            textoResultado += "<span id='" + inputActual.attr("id") + "-resultado-" + i + "' >" + arrayTextos[i] + "</span> - "
        }
        textoResultado = textoResultado.substr(0, textoResultado.length - 2);
        resultadoActual.html(textoResultado)
    }

    function inputsLlenos() {
        for (var i = 0; i < inputs.length; i++) {
            var inputActual = inputs[i];
            if (textosEscritos[inputActual.attr("id")] === "") {
                return false
            }
        }
        return true
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
            if (textoActualBueno === textoActualInput.toLowerCase() || textoActualBueno === "*") {
                intentosBuenos += 1;
                inputActual.addClass("input-bien")
            } else {
                intentosMalos -= 1;
                inputActual.addClass("input-mal")
            }
        }
        if (!Options.input().errorPorInput && intentosActuales !== intentosMalos) {
            intentosMalos = intentosActuales - 1
        }
        if (intentosMalos > 0) {
            intentosMostrarEstado = intentosMalos
        }
        verificarFinJuego();
        funcionEstado(intentosMostrarEstado)
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
                    textoActual = textoActual.trim()
                }
                if (Arrays.indexOf(arrayTextosBuenos, textoActual) !== -1) {
                    $("#" + idDelInput + "-resultado-" + i).css({
                        color: "#75DD6C"
                    })
                } else {
                    intentosMalos -= 1;
                    todasLasOpcionesBuenas = false;
                    $("#" + idDelInput + "-resultado-" + i).css({
                        color: "#F00"
                    })
                }
            }
            if (todasLasOpcionesBuenas) {
                intentosBuenos += 1
            }
        }
        if (!Options.input().errorPorInput && intentosActuales !== intentosMalos) {
            intentosMalos = intentosActuales - 1
        }
        if (intentosMalos > 0) {
            intentosMostrarEstado = intentosMalos
        }
        verificarFinJuego();
        funcionEstado(intentosMostrarEstado)
    }

    function verificarFinJuego() {
        if (intentosMalos <= 0) {
            resultadoDeJuego = false
        }
        if (intentosMalos <= -Options.input().intentosFinales) {
            retroalimentacion()
        }
        if (intentosBuenos >= inputs.length) {
            finDeJuego();
            desactivarInputParaEscribir()
        }
    }

    function finDeJuego() {
        eliminarInput();
        funcionEstado = function () {};
        funcionFinal(resultadoDeJuego)
    }

    function cargarFuncionFinal(funcion) {
        funcionFinal = funcion || function () {}
    }

    function cargarFuncionEstado(funcion) {
        funcionEstado = funcion || function () {};
        funcionEstado(intentosMalos)
    }

    function verificarTipoInput(input) {
        if (input.attr("type") === "number") {
            input.bind("keyup", validarNumeros);
            input.attr({
                max: input.attr("maxlength")
            })
        }
        if (textosBuenos[input.attr("id")] === "*") {
            input.attr({
                maxlength: 100
            });
            input.css({
                width: "150px"
            })
        }
    }

    function validarNumeros(teclado) {
        if (teclado.keyCode < 48 || teclado.keyCode > 57 || teclado.keyCode === 9) {
            if (teclado.keyCode == 190 || teclado.keyCode == 8 || teclado.keyCode === 9) {
                return true
            } else {
                return false
            }
        }
        return true
    }

    function retroalimentacion() {
        desactivarBoton();
        eliminarListenerBoton();
        if (Options.input().mostrarOpcionesBuenas) {
            mostrarTextosBuenos();
            Timer.load(0.5, finDeJuego)
        } else {
            finDeJuego()
        }
        desactivarInputParaEscribir()
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
                break
            }
            if (textoActual !== "*") {
                inputActual.val(textoActual)
            }
        }
    }

    function desactivarInputParaEscribir() {
        for (var i = 0; i < inputs.length; i++) {
            var inputActual = inputs[i];
            inputActual.attr("disabled", true)
        }
    }

    function cargarBotonInput(boton) {
        botonVerificar = Display.get(boton)
    }
})(jQuery);
(function ($) {
    $.fn.extend({
        position: function () {
            var objecto = {
                x: Number($(this).css("left").replace("px", "")),
                y: Number($(this).css("top").replace("px", ""))
            };
            return objecto
        },
        getPosition: function () {
            return Adobe.getSymbol($(this)).getPosition()
        },
        getLabelPosition: function (params) {
            return Adobe.getSymbol($(this)).getLabelPosition(params)
        },
        play: function (params) {
            if ($(this).length > 0) {
                Adobe.getSymbol($(this)).play(params)
            }
        },
        playReverse: function (params) {
            if ($(this).length > 0) {
                Adobe.getSymbol($(this)).playReverse(params)
            }
        },
        stop: function (params) {
            if ($(this).length > 0) {
                Adobe.getSymbol($(this)).stop(params)
            }
        },
        variableValues: function () {
            return Adobe.getSymbol($(this)).variableValues
        },
        listener: function (evento, funcion) {
            Event.listener($(this), evento, funcion)
        },
        removeListener: function (evento) {
            Event.removeListener($(this), evento)
        },
        click: function (funcionRetorno) {
            Event.click($(this), funcionRetorno)
        },
        removeClick: function () {
            Event.removeClick($(this))
        },
        addChild: function (simbolo) {
            Display.addChild(simbolo, $(this))
        },
        removeChild: function (elemento) {
            elemento = elemento || "";
            var elementoEliminar = $(this).attr("id");
            if (typeof elemento !== "string") {
                elemento = Display.getName(elemento)
            }
            if (elemento !== "") {
                elementoEliminar += "_" + elemento.replace([/./g], "_")
            }
            Display.removeChild($("#" + elementoEliminar))
        },
        getName: function (nombreCompleto) {
            nombreCompleto = nombreCompleto || false;
            return Display.getName($(this), nombreCompleto)
        }
    })
})(jQuery);
! function (t) {
    var o = "html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type='button'],input[type='reset'],input[type='submit']{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type='checkbox'],input[type='radio']{box-sizing:border-box;padding:0}input[type='number']::-webkit-inner-spin-button,input[type='number']::-webkit-outer-spin-button{height:auto}input[type='search']{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type='search']::-webkit-search-cancel-button,input[type='search']::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:separate;border-spacing:0}td,th{padding:0}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}*:before,*:after{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857143;color:#333;background-color:#fff}input,button,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#428bca;text-decoration:none}a:hover,a:focus{color:#2a6496;text-decoration:underline}a:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}figure{margin:0}img{vertical-align:middle}.img-responsive{display:block;width:100% 9;max-width:100%;height:auto}.img-rounded{border-radius:6px}.img-thumbnail{padding:4px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;display:inline-block;width:100% 9;max-width:100%;height:auto}.img-circle{border-radius:50%}hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,'Courier New',monospace}code{padding:2px 4px;font-size:90%;color:#c7254e;background-color:#f9f2f4;border-radius:4px}kbd{padding:2px 4px;font-size:90%;color:#fff;background-color:#333;border-radius:3px;box-shadow:inset 0 -1px 0 rgba(0,0,0,0.25)}kbd kbd{padding:0;font-size:100%;box-shadow:none}pre{display:block;padding:9.5px;margin:0 0 10px;font-size:13px;line-height:1.42857143;word-break:break-all;word-wrap:break-word;color:#333;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}pre code{padding:0;font-size:inherit;color:inherit;white-space:pre-wrap;background-color:transparent;border-radius:0}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}@media (min-width:768px){.container{width:750px}}@media (min-width:992px){.container{width:970px}}@media (min-width:1200px){.container{width:1170px}}.container-fluid{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}.row{margin-left:-15px;margin-right:-15px}.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12{position:relative;min-height:1px;padding-left:15px;padding-right:15px}.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12{float:left}.col-xs-12{width:100%}.col-xs-11{width:91.66666667%}.col-xs-10{width:83.33333333%}.col-xs-9{width:75%}.col-xs-8{width:66.66666667%}.col-xs-7{width:58.33333333%}.col-xs-6{width:50%}.col-xs-5{width:41.66666667%}.col-xs-4{width:33.33333333%}.col-xs-3{width:25%}.col-xs-2{width:16.66666667%}.col-xs-1{width:8.33333333%}.col-xs-pull-12{right:100%}.col-xs-pull-11{right:91.66666667%}.col-xs-pull-10{right:83.33333333%}.col-xs-pull-9{right:75%}.col-xs-pull-8{right:66.66666667%}.col-xs-pull-7{right:58.33333333%}.col-xs-pull-6{right:50%}.col-xs-pull-5{right:41.66666667%}.col-xs-pull-4{right:33.33333333%}.col-xs-pull-3{right:25%}.col-xs-pull-2{right:16.66666667%}.col-xs-pull-1{right:8.33333333%}.col-xs-pull-0{right:auto}.col-xs-push-12{left:100%}.col-xs-push-11{left:91.66666667%}.col-xs-push-10{left:83.33333333%}.col-xs-push-9{left:75%}.col-xs-push-8{left:66.66666667%}.col-xs-push-7{left:58.33333333%}.col-xs-push-6{left:50%}.col-xs-push-5{left:41.66666667%}.col-xs-push-4{left:33.33333333%}.col-xs-push-3{left:25%}.col-xs-push-2{left:16.66666667%}.col-xs-push-1{left:8.33333333%}.col-xs-push-0{left:auto}.col-xs-offset-12{margin-left:100%}.col-xs-offset-11{margin-left:91.66666667%}.col-xs-offset-10{margin-left:83.33333333%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-8{margin-left:66.66666667%}.col-xs-offset-7{margin-left:58.33333333%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-5{margin-left:41.66666667%}.col-xs-offset-4{margin-left:33.33333333%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-2{margin-left:16.66666667%}.col-xs-offset-1{margin-left:8.33333333%}.col-xs-offset-0{margin-left:0}@media (min-width:768px){.col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12{float:left}.col-sm-12{width:100%}.col-sm-11{width:91.66666667%}.col-sm-10{width:83.33333333%}.col-sm-9{width:75%}.col-sm-8{width:66.66666667%}.col-sm-7{width:58.33333333%}.col-sm-6{width:50%}.col-sm-5{width:41.66666667%}.col-sm-4{width:33.33333333%}.col-sm-3{width:25%}.col-sm-2{width:16.66666667%}.col-sm-1{width:8.33333333%}.col-sm-pull-12{right:100%}.col-sm-pull-11{right:91.66666667%}.col-sm-pull-10{right:83.33333333%}.col-sm-pull-9{right:75%}.col-sm-pull-8{right:66.66666667%}.col-sm-pull-7{right:58.33333333%}.col-sm-pull-6{right:50%}.col-sm-pull-5{right:41.66666667%}.col-sm-pull-4{right:33.33333333%}.col-sm-pull-3{right:25%}.col-sm-pull-2{right:16.66666667%}.col-sm-pull-1{right:8.33333333%}.col-sm-pull-0{right:auto}.col-sm-push-12{left:100%}.col-sm-push-11{left:91.66666667%}.col-sm-push-10{left:83.33333333%}.col-sm-push-9{left:75%}.col-sm-push-8{left:66.66666667%}.col-sm-push-7{left:58.33333333%}.col-sm-push-6{left:50%}.col-sm-push-5{left:41.66666667%}.col-sm-push-4{left:33.33333333%}.col-sm-push-3{left:25%}.col-sm-push-2{left:16.66666667%}.col-sm-push-1{left:8.33333333%}.col-sm-push-0{left:auto}.col-sm-offset-12{margin-left:100%}.col-sm-offset-11{margin-left:91.66666667%}.col-sm-offset-10{margin-left:83.33333333%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-8{margin-left:66.66666667%}.col-sm-offset-7{margin-left:58.33333333%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-5{margin-left:41.66666667%}.col-sm-offset-4{margin-left:33.33333333%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-2{margin-left:16.66666667%}.col-sm-offset-1{margin-left:8.33333333%}.col-sm-offset-0{margin-left:0}}@media (min-width:992px){.col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12{float:left}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}.col-md-pull-12{right:100%}.col-md-pull-11{right:91.66666667%}.col-md-pull-10{right:83.33333333%}.col-md-pull-9{right:75%}.col-md-pull-8{right:66.66666667%}.col-md-pull-7{right:58.33333333%}.col-md-pull-6{right:50%}.col-md-pull-5{right:41.66666667%}.col-md-pull-4{right:33.33333333%}.col-md-pull-3{right:25%}.col-md-pull-2{right:16.66666667%}.col-md-pull-1{right:8.33333333%}.col-md-pull-0{right:auto}.col-md-push-12{left:100%}.col-md-push-11{left:91.66666667%}.col-md-push-10{left:83.33333333%}.col-md-push-9{left:75%}.col-md-push-8{left:66.66666667%}.col-md-push-7{left:58.33333333%}.col-md-push-6{left:50%}.col-md-push-5{left:41.66666667%}.col-md-push-4{left:33.33333333%}.col-md-push-3{left:25%}.col-md-push-2{left:16.66666667%}.col-md-push-1{left:8.33333333%}.col-md-push-0{left:auto}.col-md-offset-12{margin-left:100%}.col-md-offset-11{margin-left:91.66666667%}.col-md-offset-10{margin-left:83.33333333%}.col-md-offset-9{margin-left:75%}.col-md-offset-8{margin-left:66.66666667%}.col-md-offset-7{margin-left:58.33333333%}.col-md-offset-6{margin-left:50%}.col-md-offset-5{margin-left:41.66666667%}.col-md-offset-4{margin-left:33.33333333%}.col-md-offset-3{margin-left:25%}.col-md-offset-2{margin-left:16.66666667%}.col-md-offset-1{margin-left:8.33333333%}.col-md-offset-0{margin-left:0}}@media (min-width:1200px){.col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12{float:left}.col-lg-12{width:100%}.col-lg-11{width:91.66666667%}.col-lg-10{width:83.33333333%}.col-lg-9{width:75%}.col-lg-8{width:66.66666667%}.col-lg-7{width:58.33333333%}.col-lg-6{width:50%}.col-lg-5{width:41.66666667%}.col-lg-4{width:33.33333333%}.col-lg-3{width:25%}.col-lg-2{width:16.66666667%}.col-lg-1{width:8.33333333%}.col-lg-pull-12{right:100%}.col-lg-pull-11{right:91.66666667%}.col-lg-pull-10{right:83.33333333%}.col-lg-pull-9{right:75%}.col-lg-pull-8{right:66.66666667%}.col-lg-pull-7{right:58.33333333%}.col-lg-pull-6{right:50%}.col-lg-pull-5{right:41.66666667%}.col-lg-pull-4{right:33.33333333%}.col-lg-pull-3{right:25%}.col-lg-pull-2{right:16.66666667%}.col-lg-pull-1{right:8.33333333%}.col-lg-pull-0{right:auto}.col-lg-push-12{left:100%}.col-lg-push-11{left:91.66666667%}.col-lg-push-10{left:83.33333333%}.col-lg-push-9{left:75%}.col-lg-push-8{left:66.66666667%}.col-lg-push-7{left:58.33333333%}.col-lg-push-6{left:50%}.col-lg-push-5{left:41.66666667%}.col-lg-push-4{left:33.33333333%}.col-lg-push-3{left:25%}.col-lg-push-2{left:16.66666667%}.col-lg-push-1{left:8.33333333%}.col-lg-push-0{left:auto}.col-lg-offset-12{margin-left:100%}.col-lg-offset-11{margin-left:91.66666667%}.col-lg-offset-10{margin-left:83.33333333%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-8{margin-left:66.66666667%}.col-lg-offset-7{margin-left:58.33333333%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-5{margin-left:41.66666667%}.col-lg-offset-4{margin-left:33.33333333%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-2{margin-left:16.66666667%}.col-lg-offset-1{margin-left:8.33333333%}.col-lg-offset-0{margin-left:0}}table{background-color:transparent}th{text-align:left}.table{width:100%;max-width:100%;margin-bottom:20px}.table>thead>tr>th,.table>tbody>tr>th,.table>tfoot>tr>th,.table>thead>tr>td,.table>tbody>tr>td,.table>tfoot>tr>td{padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd}.table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}.table>caption+thead>tr:first-child>th,.table>colgroup+thead>tr:first-child>th,.table>thead:first-child>tr:first-child>th,.table>caption+thead>tr:first-child>td,.table>colgroup+thead>tr:first-child>td,.table>thead:first-child>tr:first-child>td{border-top:0}.table>tbody+tbody{border-top:2px solid #ddd}.table .table{background-color:#fff}.table-condensed>thead>tr>th,.table-condensed>tbody>tr>th,.table-condensed>tfoot>tr>th,.table-condensed>thead>tr>td,.table-condensed>tbody>tr>td,.table-condensed>tfoot>tr>td{padding:5px}.table-bordered{border:1px solid #ddd}.table-bordered>thead>tr>th,.table-bordered>tbody>tr>th,.table-bordered>tfoot>tr>th,.table-bordered>thead>tr>td,.table-bordered>tbody>tr>td,.table-bordered>tfoot>tr>td{border:1px solid #ddd}.table-bordered>thead>tr>th,.table-bordered>thead>tr>td{border-bottom-width:2px}.table-striped>tbody>tr:nth-child(odd)>td,.table-striped>tbody>tr:nth-child(odd)>th{background-color:#f9f9f9}.table-hover>tbody>tr:hover>td,.table-hover>tbody>tr:hover>th{background-color:#f5f5f5}table col[class*='col-']{position:static;float:none;display:table-column}table td[class*='col-'],table th[class*='col-']{position:static;float:none;display:table-cell}.table>thead>tr>td.active,.table>tbody>tr>td.active,.table>tfoot>tr>td.active,.table>thead>tr>th.active,.table>tbody>tr>th.active,.table>tfoot>tr>th.active,.table>thead>tr.active>td,.table>tbody>tr.active>td,.table>tfoot>tr.active>td,.table>thead>tr.active>th,.table>tbody>tr.active>th,.table>tfoot>tr.active>th{background-color:#f5f5f5}.table-hover>tbody>tr>td.active:hover,.table-hover>tbody>tr>th.active:hover,.table-hover>tbody>tr.active:hover>td,.table-hover>tbody>tr:hover>.active,.table-hover>tbody>tr.active:hover>th{background-color:#e8e8e8}.table>thead>tr>td.success,.table>tbody>tr>td.success,.table>tfoot>tr>td.success,.table>thead>tr>th.success,.table>tbody>tr>th.success,.table>tfoot>tr>th.success,.table>thead>tr.success>td,.table>tbody>tr.success>td,.table>tfoot>tr.success>td,.table>thead>tr.success>th,.table>tbody>tr.success>th,.table>tfoot>tr.success>th{background-color:#dff0d8}.table-hover>tbody>tr>td.success:hover,.table-hover>tbody>tr>th.success:hover,.table-hover>tbody>tr.success:hover>td,.table-hover>tbody>tr:hover>.success,.table-hover>tbody>tr.success:hover>th{background-color:#d0e9c6}.table>thead>tr>td.info,.table>tbody>tr>td.info,.table>tfoot>tr>td.info,.table>thead>tr>th.info,.table>tbody>tr>th.info,.table>tfoot>tr>th.info,.table>thead>tr.info>td,.table>tbody>tr.info>td,.table>tfoot>tr.info>td,.table>thead>tr.info>th,.table>tbody>tr.info>th,.table>tfoot>tr.info>th{background-color:#d9edf7}.table-hover>tbody>tr>td.info:hover,.table-hover>tbody>tr>th.info:hover,.table-hover>tbody>tr.info:hover>td,.table-hover>tbody>tr:hover>.info,.table-hover>tbody>tr.info:hover>th{background-color:#c4e3f3}.table>thead>tr>td.warning,.table>tbody>tr>td.warning,.table>tfoot>tr>td.warning,.table>thead>tr>th.warning,.table>tbody>tr>th.warning,.table>tfoot>tr>th.warning,.table>thead>tr.warning>td,.table>tbody>tr.warning>td,.table>tfoot>tr.warning>td,.table>thead>tr.warning>th,.table>tbody>tr.warning>th,.table>tfoot>tr.warning>th{background-color:#fcf8e3}.table-hover>tbody>tr>td.warning:hover,.table-hover>tbody>tr>th.warning:hover,.table-hover>tbody>tr.warning:hover>td,.table-hover>tbody>tr:hover>.warning,.table-hover>tbody>tr.warning:hover>th{background-color:#faf2cc}.table>thead>tr>td.danger,.table>tbody>tr>td.danger,.table>tfoot>tr>td.danger,.table>thead>tr>th.danger,.table>tbody>tr>th.danger,.table>tfoot>tr>th.danger,.table>thead>tr.danger>td,.table>tbody>tr.danger>td,.table>tfoot>tr.danger>td,.table>thead>tr.danger>th,.table>tbody>tr.danger>th,.table>tfoot>tr.danger>th{background-color:#f2dede}.table-hover>tbody>tr>td.danger:hover,.table-hover>tbody>tr>th.danger:hover,.table-hover>tbody>tr.danger:hover>td,.table-hover>tbody>tr:hover>.danger,.table-hover>tbody>tr.danger:hover>th{background-color:#ebcccc}@media screen and (max-width:767px){.table-responsive{width:100%;margin-bottom:15px;overflow-y:hidden;overflow-x:auto;-ms-overflow-style:-ms-autohiding-scrollbar;border:1px solid #ddd;-webkit-overflow-scrolling:touch}.table-responsive>.table{margin-bottom:0}.table-responsive>.table>thead>tr>th,.table-responsive>.table>tbody>tr>th,.table-responsive>.table>tfoot>tr>th,.table-responsive>.table>thead>tr>td,.table-responsive>.table>tbody>tr>td,.table-responsive>.table>tfoot>tr>td{white-space:nowrap}.table-responsive>.table-bordered{border:0}.table-responsive>.table-bordered>thead>tr>th:first-child,.table-responsive>.table-bordered>tbody>tr>th:first-child,.table-responsive>.table-bordered>tfoot>tr>th:first-child,.table-responsive>.table-bordered>thead>tr>td:first-child,.table-responsive>.table-bordered>tbody>tr>td:first-child,.table-responsive>.table-bordered>tfoot>tr>td:first-child{border-left:0}.table-responsive>.table-bordered>thead>tr>th:last-child,.table-responsive>.table-bordered>tbody>tr>th:last-child,.table-responsive>.table-bordered>tfoot>tr>th:last-child,.table-responsive>.table-bordered>thead>tr>td:last-child,.table-responsive>.table-bordered>tbody>tr>td:last-child,.table-responsive>.table-bordered>tfoot>tr>td:last-child{border-right:0}.table-responsive>.table-bordered>tbody>tr:last-child>th,.table-responsive>.table-bordered>tfoot>tr:last-child>th,.table-responsive>.table-bordered>tbody>tr:last-child>td,.table-responsive>.table-bordered>tfoot>tr:last-child>td{border-bottom:0}}fieldset{padding:0;margin:0;border:0;min-width:0}legend{display:block;width:100%;padding:0;margin-bottom:20px;font-size:21px;line-height:inherit;color:#333;border:0;border-bottom:1px solid #e5e5e5}label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:bold}input[type='search']{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}input[type='radio'],input[type='checkbox']{margin:4px 0 0;margin-top:1px 9;line-height:normal}input[type='file']{display:block}input[type='range']{display:block;width:100%}select[multiple],select[size]{height:auto}input[type='file']:focus,input[type='radio']:focus,input[type='checkbox']:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}output{display:block;padding-top:7px;font-size:14px;line-height:1.42857143;color:#555}.form-control{display:block;width:100%;height:34px;padding:6px 12px;font-size:14px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);-webkit-transition:border-color ease-in-out .15s, box-shadow ease-in-out .15s;-o-transition:border-color ease-in-out .15s, box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s, box-shadow ease-in-out .15s}.form-control:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6)}.form-control::-moz-placeholder{color:#777;opacity:1}.form-control:-ms-input-placeholder{color:#777}.form-control::-webkit-input-placeholder{color:#777}.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{cursor:not-allowed;background-color:#eee;opacity:1}textarea.form-control{height:auto}input[type='search']{-webkit-appearance:none}input[type='date'],input[type='time'],input[type='datetime-local'],input[type='month']{line-height:34px;line-height:1.42857143 \x00}input[type='date'].input-sm,input[type='time'].input-sm,input[type='datetime-local'].input-sm,input[type='month'].input-sm{line-height:30px}input[type='date'].input-lg,input[type='time'].input-lg,input[type='datetime-local'].input-lg,input[type='month'].input-lg{line-height:46px}.form-group{margin-bottom:15px}.radio,.checkbox{position:relative;display:block;min-height:20px;margin-top:10px;margin-bottom:10px}.radio label,.checkbox label{padding-left:20px;margin-bottom:0;font-weight:normal;cursor:pointer}.radio input[type='radio'],.radio-inline input[type='radio'],.checkbox input[type='checkbox'],.checkbox-inline input[type='checkbox']{position:absolute;margin-left:-20px;margin-top:4px 9}.radio+.radio,.checkbox+.checkbox{margin-top:-5px}.radio-inline,.checkbox-inline{display:inline-block;padding-left:20px;margin-bottom:0;vertical-align:middle;font-weight:normal;cursor:pointer}.radio-inline+.radio-inline,.checkbox-inline+.checkbox-inline{margin-top:0;margin-left:10px}input[type='radio'][disabled],input[type='checkbox'][disabled],input[type='radio'].disabled,input[type='checkbox'].disabled,fieldset[disabled] input[type='radio'],fieldset[disabled] input[type='checkbox']{cursor:not-allowed}.radio-inline.disabled,.checkbox-inline.disabled,fieldset[disabled] .radio-inline,fieldset[disabled] .checkbox-inline{cursor:not-allowed}.radio.disabled label,.checkbox.disabled label,fieldset[disabled] .radio label,fieldset[disabled] .checkbox label{cursor:not-allowed}.form-control-static{padding-top:7px;padding-bottom:7px;margin-bottom:0}.form-control-static.input-lg,.form-control-static.input-sm{padding-left:0;padding-right:0}.input-sm,.form-horizontal .form-group-sm .form-control{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-sm{height:30px;line-height:30px}textarea.input-sm,select[multiple].input-sm{height:auto}.input-lg,.form-horizontal .form-group-lg .form-control{height:46px;padding:10px 16px;font-size:18px;line-height:1.33;border-radius:6px}select.input-lg{height:46px;line-height:46px}textarea.input-lg,select[multiple].input-lg{height:auto}.has-feedback{position:relative}.has-feedback .form-control{padding-right:42.5px}.form-control-feedback{position:absolute;top:25px;right:0;z-index:2;display:block;width:34px;height:34px;line-height:34px;text-align:center}.input-lg+.form-control-feedback{width:46px;height:46px;line-height:46px}.input-sm+.form-control-feedback{width:30px;height:30px;line-height:30px}.has-success .help-block,.has-success .control-label,.has-success .radio,.has-success .checkbox,.has-success .radio-inline,.has-success .checkbox-inline{color:#3c763d}.has-success .form-control{border-color:#3c763d;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.has-success .form-control:focus{border-color:#2b542c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #67b168;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #67b168}.has-success .input-group-addon{color:#3c763d;border-color:#3c763d;background-color:#dff0d8}.has-success .form-control-feedback{color:#3c763d}.has-warning .help-block,.has-warning .control-label,.has-warning .radio,.has-warning .checkbox,.has-warning .radio-inline,.has-warning .checkbox-inline{color:#8a6d3b}.has-warning .form-control{border-color:#8a6d3b;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.has-warning .form-control:focus{border-color:#66512c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #c0a16b;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #c0a16b}.has-warning .input-group-addon{color:#8a6d3b;border-color:#8a6d3b;background-color:#fcf8e3}.has-warning .form-control-feedback{color:#8a6d3b}.has-error .help-block,.has-error .control-label,.has-error .radio,.has-error .checkbox,.has-error .radio-inline,.has-error .checkbox-inline{color:#a94442}.has-error .form-control{border-color:#a94442;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.has-error .form-control:focus{border-color:#843534;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #ce8483;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #ce8483}.has-error .input-group-addon{color:#a94442;border-color:#a94442;background-color:#f2dede}.has-error .form-control-feedback{color:#a94442}.has-feedback label.sr-only~.form-control-feedback{top:0}.help-block{display:block;margin-top:5px;margin-bottom:10px;color:#737373}@media (min-width:768px){.form-inline .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .input-group{display:inline-table;vertical-align:middle}.form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn,.form-inline .input-group .form-control{width:auto}.form-inline .input-group>.form-control{width:100%}.form-inline .control-label{margin-bottom:0;vertical-align:middle}.form-inline .radio,.form-inline .checkbox{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.form-inline .radio label,.form-inline .checkbox label{padding-left:0}.form-inline .radio input[type='radio'],.form-inline .checkbox input[type='checkbox']{position:relative;margin-left:0}.form-inline .has-feedback .form-control-feedback{top:0}}.form-horizontal .radio,.form-horizontal .checkbox,.form-horizontal .radio-inline,.form-horizontal .checkbox-inline{margin-top:0;margin-bottom:0;padding-top:7px}.form-horizontal .radio,.form-horizontal .checkbox{min-height:27px}.form-horizontal .form-group{margin-left:-15px;margin-right:-15px}@media (min-width:768px){.form-horizontal .control-label{text-align:right;margin-bottom:0;padding-top:7px}}.form-horizontal .has-feedback .form-control-feedback{top:0;right:15px}@media (min-width:768px){.form-horizontal .form-group-lg .control-label{padding-top:14.3px}}@media (min-width:768px){.form-horizontal .form-group-sm .control-label{padding-top:6px}}.input-group{position:relative;display:table;border-collapse:separate}.input-group[class*='col-']{float:none;padding-left:0;padding-right:0}.input-group .form-control{position:relative;z-index:2;float:left;width:100%;margin-bottom:0}.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn{height:46px;padding:10px 16px;font-size:18px;line-height:1.33;border-radius:6px}select.input-group-lg>.form-control,select.input-group-lg>.input-group-addon,select.input-group-lg>.input-group-btn>.btn{height:46px;line-height:46px}textarea.input-group-lg>.form-control,textarea.input-group-lg>.input-group-addon,textarea.input-group-lg>.input-group-btn>.btn,select[multiple].input-group-lg>.form-control,select[multiple].input-group-lg>.input-group-addon,select[multiple].input-group-lg>.input-group-btn>.btn{height:auto}.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-group-sm>.form-control,select.input-group-sm>.input-group-addon,select.input-group-sm>.input-group-btn>.btn{height:30px;line-height:30px}textarea.input-group-sm>.form-control,textarea.input-group-sm>.input-group-addon,textarea.input-group-sm>.input-group-btn>.btn,select[multiple].input-group-sm>.form-control,select[multiple].input-group-sm>.input-group-addon,select[multiple].input-group-sm>.input-group-btn>.btn{height:auto}.input-group-addon,.input-group-btn,.input-group .form-control{display:table-cell}.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child),.input-group .form-control:not(:first-child):not(:last-child){border-radius:0}.input-group-addon,.input-group-btn{width:1%;white-space:nowrap;vertical-align:middle}.input-group-addon{padding:6px 12px;font-size:14px;font-weight:normal;line-height:1;color:#555;text-align:center;background-color:#eee;border:1px solid #ccc;border-radius:4px}.input-group-addon.input-sm{padding:5px 10px;font-size:12px;border-radius:3px}.input-group-addon.input-lg{padding:10px 16px;font-size:18px;border-radius:6px}.input-group-addon input[type='radio'],.input-group-addon input[type='checkbox']{margin-top:0}.input-group .form-control:first-child,.input-group-addon:first-child,.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group>.btn,.input-group-btn:first-child>.dropdown-toggle,.input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group-btn:last-child>.btn-group:not(:last-child)>.btn{border-bottom-right-radius:0;border-top-right-radius:0}.input-group-addon:first-child{border-right:0}.input-group .form-control:last-child,.input-group-addon:last-child,.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group>.btn,.input-group-btn:last-child>.dropdown-toggle,.input-group-btn:first-child>.btn:not(:first-child),.input-group-btn:first-child>.btn-group:not(:first-child)>.btn{border-bottom-left-radius:0;border-top-left-radius:0}.input-group-addon:last-child{border-left:0}.input-group-btn{position:relative;font-size:0;white-space:nowrap}.input-group-btn>.btn{position:relative}.input-group-btn>.btn+.btn{margin-left:-1px}.input-group-btn>.btn:hover,.input-group-btn>.btn:focus,.input-group-btn>.btn:active{z-index:2}.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group{margin-right:-1px}.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group{margin-left:-1px}.alert{padding:15px;margin-bottom:20px;border:1px solid transparent;border-radius:4px}.alert h4{margin-top:0;color:inherit}.alert .alert-link{font-weight:bold}.alert>p,.alert>ul{margin-bottom:0}.alert>p+p{margin-top:5px}.alert-dismissable,.alert-dismissible{padding-right:35px}.alert-dismissable .close,.alert-dismissible .close{position:relative;top:-2px;right:-21px;color:inherit}.alert-success{background-color:#dff0d8;border-color:#d6e9c6;color:#3c763d}.alert-success hr{border-top-color:#c9e2b3}.alert-success .alert-link{color:#2b542c}.alert-info{background-color:#d9edf7;border-color:#bce8f1;color:#31708f}.alert-info hr{border-top-color:#a6e1ec}.alert-info .alert-link{color:#245269}.alert-warning{background-color:#fcf8e3;border-color:#faebcc;color:#8a6d3b}.alert-warning hr{border-top-color:#f7e1b5}.alert-warning .alert-link{color:#66512c}.alert-danger{background-color:#f2dede;border-color:#ebccd1;color:#a94442}.alert-danger hr{border-top-color:#e4b9c0}.alert-danger .alert-link{color:#843534}.panel{margin-bottom:20px;background-color:#fff;border:1px solid transparent;border-radius:4px;-webkit-box-shadow:0 1px 1px rgba(0,0,0,0.05);box-shadow:0 1px 1px rgba(0,0,0,0.05)}.panel-body{padding:15px}.panel-heading{padding:10px 15px;border-bottom:1px solid transparent;border-top-right-radius:3px;border-top-left-radius:3px}.panel-heading>.dropdown .dropdown-toggle{color:inherit}.panel-title{margin-top:0;margin-bottom:0;font-size:16px;color:inherit}.panel-title>a{color:inherit}.panel-footer{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.list-group{margin-bottom:0}.panel>.list-group .list-group-item{border-width:1px 0;border-radius:0}.panel>.list-group:first-child .list-group-item:first-child{border-top:0;border-top-right-radius:3px;border-top-left-radius:3px}.panel>.list-group:last-child .list-group-item:last-child{border-bottom:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel-heading+.list-group .list-group-item:first-child{border-top-width:0}.list-group+.panel-footer{border-top-width:0}.panel>.table,.panel>.table-responsive>.table,.panel>.panel-collapse>.table{margin-bottom:0}.panel>.table:first-child,.panel>.table-responsive:first-child>.table:first-child{border-top-right-radius:3px;border-top-left-radius:3px}.panel>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table:first-child>thead:first-child>tr:first-child th:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:first-child{border-top-left-radius:3px}.panel>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table:first-child>thead:first-child>tr:first-child th:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:last-child{border-top-right-radius:3px}.panel>.table:last-child,.panel>.table-responsive:last-child>.table:last-child{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:first-child{border-bottom-left-radius:3px}.panel>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:last-child{border-bottom-right-radius:3px}.panel>.panel-body+.table,.panel>.panel-body+.table-responsive{border-top:1px solid #ddd}.panel>.table>tbody:first-child>tr:first-child th,.panel>.table>tbody:first-child>tr:first-child td{border-top:0}.panel>.table-bordered,.panel>.table-responsive>.table-bordered{border:0}.panel>.table-bordered>thead>tr>th:first-child,.panel>.table-responsive>.table-bordered>thead>tr>th:first-child,.panel>.table-bordered>tbody>tr>th:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:first-child,.panel>.table-bordered>tfoot>tr>th:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:first-child,.panel>.table-bordered>thead>tr>td:first-child,.panel>.table-responsive>.table-bordered>thead>tr>td:first-child,.panel>.table-bordered>tbody>tr>td:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:first-child,.panel>.table-bordered>tfoot>tr>td:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:first-child{border-left:0}.panel>.table-bordered>thead>tr>th:last-child,.panel>.table-responsive>.table-bordered>thead>tr>th:last-child,.panel>.table-bordered>tbody>tr>th:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:last-child,.panel>.table-bordered>tfoot>tr>th:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:last-child,.panel>.table-bordered>thead>tr>td:last-child,.panel>.table-responsive>.table-bordered>thead>tr>td:last-child,.panel>.table-bordered>tbody>tr>td:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:last-child,.panel>.table-bordered>tfoot>tr>td:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:last-child{border-right:0}.panel>.table-bordered>thead>tr:first-child>td,.panel>.table-responsive>.table-bordered>thead>tr:first-child>td,.panel>.table-bordered>tbody>tr:first-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>td,.panel>.table-bordered>thead>tr:first-child>th,.panel>.table-responsive>.table-bordered>thead>tr:first-child>th,.panel>.table-bordered>tbody>tr:first-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>th{border-bottom:0}.panel>.table-bordered>tbody>tr:last-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>td,.panel>.table-bordered>tfoot>tr:last-child>td,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>td,.panel>.table-bordered>tbody>tr:last-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>th,.panel>.table-bordered>tfoot>tr:last-child>th,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>th{border-bottom:0}.panel>.table-responsive{border:0;margin-bottom:0}.panel-group{margin-bottom:20px}.panel-group .panel{margin-bottom:0;border-radius:4px}.panel-group .panel+.panel{margin-top:5px}.panel-group .panel-heading{border-bottom:0}.panel-group .panel-heading+.panel-collapse>.panel-body{border-top:1px solid #ddd}.panel-group .panel-footer{border-top:0}.panel-group .panel-footer+.panel-collapse .panel-body{border-bottom:1px solid #ddd}.panel-default{border-color:#ddd}.panel-default>.panel-heading{color:#333;background-color:#f5f5f5;border-color:#ddd}.panel-default>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ddd}.panel-default>.panel-heading .badge{color:#f5f5f5;background-color:#333}.panel-default>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ddd}.panel-primary{border-color:#428bca}.panel-primary>.panel-heading{color:#fff;background-color:#428bca;border-color:#428bca}.panel-primary>.panel-heading+.panel-collapse>.panel-body{border-top-color:#428bca}.panel-primary>.panel-heading .badge{color:#428bca;background-color:#fff}.panel-primary>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#428bca}.panel-success{border-color:#d6e9c6}.panel-success>.panel-heading{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.panel-success>.panel-heading+.panel-collapse>.panel-body{border-top-color:#d6e9c6}.panel-success>.panel-heading .badge{color:#dff0d8;background-color:#3c763d}.panel-success>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#d6e9c6}.panel-info{border-color:#bce8f1}.panel-info>.panel-heading{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.panel-info>.panel-heading+.panel-collapse>.panel-body{border-top-color:#bce8f1}.panel-info>.panel-heading .badge{color:#d9edf7;background-color:#31708f}.panel-info>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#bce8f1}.panel-warning{border-color:#faebcc}.panel-warning>.panel-heading{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.panel-warning>.panel-heading+.panel-collapse>.panel-body{border-top-color:#faebcc}.panel-warning>.panel-heading .badge{color:#fcf8e3;background-color:#8a6d3b}.panel-warning>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#faebcc}.panel-danger{border-color:#ebccd1}.panel-danger>.panel-heading{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.panel-danger>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ebccd1}.panel-danger>.panel-heading .badge{color:#f2dede;background-color:#a94442}.panel-danger>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ebccd1}.embed-responsive{position:relative;display:block;height:0;padding:0;overflow:hidden}.embed-responsive .embed-responsive-item,.embed-responsive iframe,.embed-responsive embed,.embed-responsive object{position:absolute;top:0;left:0;bottom:0;height:100%;width:100%;border:0}.embed-responsive.embed-responsive-16by9{padding-bottom:56.25%}.embed-responsive.embed-responsive-4by3{padding-bottom:75%}.modal-open{overflow:hidden}.modal{display:none;overflow:hidden;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0}.modal.fade .modal-dialog{-webkit-transform:translate3d(0, -25%, 0);transform:translate3d(0, -25%, 0);-webkit-transition:-webkit-transform 0.3s ease-out;-moz-transition:-moz-transform 0.3s ease-out;-o-transition:-o-transform 0.3s ease-out;transition:transform 0.3s ease-out}.modal.in .modal-dialog{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;border:1px solid #999;border:1px solid rgba(0,0,0,0.2);border-radius:6px;-webkit-box-shadow:0 3px 9px rgba(0,0,0,0.5);box-shadow:0 3px 9px rgba(0,0,0,0.5);background-clip:padding-box;outline:0}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{opacity:0;filter:alpha(opacity=0)}.modal-backdrop.in{opacity:.5;filter:alpha(opacity=50)}.modal-header{padding:15px;border-bottom:1px solid #e5e5e5;min-height:16.42857143px}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.42857143}.modal-body{position:relative;padding:15px}.modal-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}.modal-footer .btn+.btn{margin-left:5px;margin-bottom:0}.modal-footer .btn-group .btn+.btn{margin-left:-1px}.modal-footer .btn-block+.btn-block{margin-left:0}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{-webkit-box-shadow:0 5px 15px rgba(0,0,0,0.5);box-shadow:0 5px 15px rgba(0,0,0,0.5)}.modal-sm{width:300px}}@media (min-width:992px){.modal-lg{width:900px}}.tooltip{position:absolute;z-index:1070;display:block;visibility:visible;font-size:12px;line-height:1.4;opacity:0;filter:alpha(opacity=0)}.tooltip.in{opacity:.9;filter:alpha(opacity=90)}.tooltip.top{margin-top:-3px;padding:5px 0}.tooltip.right{margin-left:3px;padding:0 5px}.tooltip.bottom{margin-top:3px;padding:5px 0}.tooltip.left{margin-left:-3px;padding:0 5px}.tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;text-decoration:none;background-color:#000;border-radius:4px}.tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.tooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-left .tooltip-arrow{bottom:0;left:5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-right .tooltip-arrow{bottom:0;right:5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000}.tooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000}.tooltip.bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-left .tooltip-arrow{top:0;left:5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-right .tooltip-arrow{top:0;right:5px;border-width:0 5px 5px;border-bottom-color:#000}.popover{position:absolute;top:0;left:0;z-index:1060;display:none;max-width:276px;padding:1px;text-align:left;background-color:#fff;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,0.2);border-radius:6px;-webkit-box-shadow:0 5px 10px rgba(0,0,0,0.2);box-shadow:0 5px 10px rgba(0,0,0,0.2);white-space:normal}.popover.top{margin-top:-10px}.popover.right{margin-left:10px}.popover.bottom{margin-top:10px}.popover.left{margin-left:-10px}.popover-title{margin:0;padding:8px 14px;font-size:14px;font-weight:normal;line-height:18px;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-radius:5px 5px 0 0}.popover-content{padding:9px 14px}.popover>.arrow,.popover>.arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover>.arrow{border-width:11px}.popover>.arrow:after{border-width:10px;content:''}.popover.top>.arrow{left:50%;margin-left:-11px;border-bottom-width:0;border-top-color:#999;border-top-color:rgba(0,0,0,0.25);bottom:-11px}.popover.top>.arrow:after{content:' ';bottom:1px;margin-left:-10px;border-bottom-width:0;border-top-color:#fff}.popover.right>.arrow{top:50%;left:-11px;margin-top:-11px;border-left-width:0;border-right-color:#999;border-right-color:rgba(0,0,0,0.25)}.popover.right>.arrow:after{content:' ';left:1px;bottom:-10px;border-left-width:0;border-right-color:#fff}.popover.bottom>.arrow{left:50%;margin-left:-11px;border-top-width:0;border-bottom-color:#999;border-bottom-color:rgba(0,0,0,0.25);top:-11px}.popover.bottom>.arrow:after{content:' ';top:1px;margin-left:-10px;border-top-width:0;border-bottom-color:#fff}.popover.left>.arrow{top:50%;right:-11px;margin-top:-11px;border-right-width:0;border-left-color:#999;border-left-color:rgba(0,0,0,0.25)}.popover.left>.arrow:after{content:' ';right:1px;border-right-width:0;border-left-color:#fff;bottom:-10px}.clearfix:before,.clearfix:after,.container:before,.container:after,.container-fluid:before,.container-fluid:after,.row:before,.row:after,.form-horizontal .form-group:before,.form-horizontal .form-group:after,.panel-body:before,.panel-body:after,.modal-footer:before,.modal-footer:after{content:' ';display:table}.clearfix:after,.container:after,.container-fluid:after,.row:after,.form-horizontal .form-group:after,.panel-body:after,.modal-footer:after{clear:both}.center-block{display:block;margin-left:auto;margin-right:auto}.pull-right{float:right !important}.pull-left{float:left !important}.hide{display:none !important}.show{display:block !important}.invisible{visibility:hidden}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.hidden{display:none !important;visibility:hidden !important}.affix{position:fixed;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}@-ms-viewport{width:device-width}.visible-xs,.visible-sm,.visible-md,.visible-lg{display:none !important}.visible-xs-block,.visible-xs-inline,.visible-xs-inline-block,.visible-sm-block,.visible-sm-inline,.visible-sm-inline-block,.visible-md-block,.visible-md-inline,.visible-md-inline-block,.visible-lg-block,.visible-lg-inline,.visible-lg-inline-block{display:none !important}@media (max-width:767px){.visible-xs{display:block !important}table.visible-xs{display:table}tr.visible-xs{display:table-row !important}th.visible-xs,td.visible-xs{display:table-cell !important}}@media (max-width:767px){.visible-xs-block{display:block !important}}@media (max-width:767px){.visible-xs-inline{display:inline !important}}@media (max-width:767px){.visible-xs-inline-block{display:inline-block !important}}@media (min-width:768px) and (max-width:991px){.visible-sm{display:block !important}table.visible-sm{display:table}tr.visible-sm{display:table-row !important}th.visible-sm,td.visible-sm{display:table-cell !important}}@media (min-width:768px) and (max-width:991px){.visible-sm-block{display:block !important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline{display:inline !important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline-block{display:inline-block !important}}@media (min-width:992px) and (max-width:1199px){.visible-md{display:block !important}table.visible-md{display:table}tr.visible-md{display:table-row !important}th.visible-md,td.visible-md{display:table-cell !important}}@media (min-width:992px) and (max-width:1199px){.visible-md-block{display:block !important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline{display:inline !important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline-block{display:inline-block !important}}@media (min-width:1200px){.visible-lg{display:block !important}table.visible-lg{display:table}tr.visible-lg{display:table-row !important}th.visible-lg,td.visible-lg{display:table-cell !important}}@media (min-width:1200px){.visible-lg-block{display:block !important}}@media (min-width:1200px){.visible-lg-inline{display:inline !important}}@media (min-width:1200px){.visible-lg-inline-block{display:inline-block !important}}@media (max-width:767px){.hidden-xs{display:none !important}}@media (min-width:768px) and (max-width:991px){.hidden-sm{display:none !important}}@media (min-width:992px) and (max-width:1199px){.hidden-md{display:none !important}}@media (min-width:1200px){.hidden-lg{display:none !important}}.visible-print{display:none !important}@media print{.visible-print{display:block !important}table.visible-print{display:table}tr.visible-print{display:table-row !important}th.visible-print,td.visible-print{display:table-cell !important}}.visible-print-block{display:none !important}@media print{.visible-print-block{display:block !important}}.visible-print-inline{display:none !important}@media print{.visible-print-inline{display:inline !important}}.visible-print-inline-block{display:none !important}@media print{.visible-print-inline-block{display:inline-block !important}}@media print{.hidden-print{display:none !important}}",
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
            }, _ = t.register || function () {}, u = function (t, e, i, s) {
                var r = h("easing." + t, {
                    easeOut: new e,
                    easeIn: new i,
                    easeInOut: new s
                }, !0);
                return _(r, t), r
            }, c = function (t, e, i) {
                this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
            }, p = function (e, i) {
                var s = h("easing." + e, function (t) {
                    this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                }, !0),
                    r = s.prototype = new t;
                return r.constructor = s, r.getRatio = i, r.config = function (t) {
                    return new s(t)
                }, s
            }, f = u("Back", p("BackOut", function (t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
            }), p("BackIn", function (t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
            }), p("BackInOut", function (t) {
                return 1 > (t *= 2) ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2) : 0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
            })),
            m = h("easing.SlowMo", function (t, e, i) {
                e = e || 0 === e ? e : 0.7, null == t ? t = 0.7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
            }, !0),
            d = m.prototype = new t;
        return d.constructor = m, d.getRatio = function (t) {
            var e = t + (0.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, m.ease = new m(0.7, 0.7), d.config = m.config = function (t, e, i) {
            return new m(t, e, i)
        }, e = h("easing.SteppedEase", function (t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function (t) {
            return 0 > t ? t = 0 : t >= 1 && (t = 0.999999999), (this._p2 * t >> 0) * this._p1
        }, d.config = e.config = function (t) {
            return new e(t)
        }, i = h("easing.RoughEase", function (e) {
            e = e || {};
            for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), p = u, f = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? 0.4 * e.strength : 0.4; --p > -1;) {
                i = f ? Math.random() : 1 / u * p, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : 0.5 > i ? (n = 2 * i, r = 0.5 * n * n * g) : (n = 2 * (1 - i), r = 0.5 * n * n * g), f ? s += Math.random() * r - 0.5 * r : p % 2 ? s += 0.5 * r : s -= 0.5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = {
                    x: i,
                    y: s
                }
            }
            for (l.sort(function (t, e) {
                return t.x - e.x
            }), o = new c(1, 1, null), p = u; --p > -1;) {
                a = l[p], o = new c(a.x, a.y, o)
            }
            this._prev = new c(0, 0, 0 !== o.t ? o : o.next)
        }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function (t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) {
                    e = e.next
                }
                e = e.prev
            } else {
                for (; e.prev && e.t >= t;) {
                    e = e.prev
                }
            }
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, d.config = function (t) {
            return new i(t)
        }, i.ease = new i, u("Bounce", l("BounceOut", function (t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375
        }), l("BounceIn", function (t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375)
        }), l("BounceInOut", function (t) {
            var e = 0.5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375, e ? 0.5 * (1 - t) : 0.5 * t + 0.5
        })), u("Circ", l("CircOut", function (t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), l("CircIn", function (t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), l("CircInOut", function (t) {
            return 1 > (t *= 2) ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
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
        }, 0.3), s("ElasticIn", function (t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2))
        }, 0.3), s("ElasticInOut", function (t) {
            return 1 > (t *= 2) ? -0.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : 0.5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, 0.45)), u("Expo", l("ExpoOut", function (t) {
            return 1 - Math.pow(2, -10 * t)
        }), l("ExpoIn", function (t) {
            return Math.pow(2, 10 * (t - 1)) - 0.001
        }), l("ExpoInOut", function (t) {
            return 1 > (t *= 2) ? 0.5 * Math.pow(2, 10 * (t - 1)) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), u("Sine", l("SineOut", function (t) {
            return Math.sin(t * o)
        }), l("SineIn", function (t) {
            return -Math.cos(t * o) + 1
        }), l("SineInOut", function (t) {
            return -0.5 * (Math.cos(Math.PI * t) - 1)
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
        return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !! o && i(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t)
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
    }(e.fn.removeData)), e.ui.ie = !! /msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
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
            if (void 0 !== t) {
                return this.css("zIndex", t)
            }
            if (this.length) {
                for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
                    if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) {
                        return s
                    }
                    n = n.parent()
                }
            }
            return 0
        }
    }), e.ui.plugin = {
        add: function (t, i, s) {
            var n, a = e.ui[t].prototype;
            for (n in s) {
                a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]])
            }
        },
        call: function (e, t, i, s) {
            var n, a = e.plugins[t];
            if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)) {
                for (n = 0; a.length > n; n++) {
                    e.options[a[n][0]] && a[n][1].apply(e.element, i)
                }
            }
        }
    };
    var s = 0,
        n = Array.prototype.slice;
    e.cleanData = function (t) {
        return function (i) {
            var s, n, a;
            for (a = 0; null != (n = i[a]); a++) {
                try {
                    s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove")
                } catch (o) {}
            }
            t(i)
        }
    }(e.cleanData), e.widget = function (t, i, s) {
        var n, a, o, r, h = {}, l = t.split(".")[0];
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
                }, n = function (e) {
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
        for (var i, s, a = n.call(arguments, 1), o = 0, r = a.length; r > o; o++) {
            for (i in a[o]) {
                s = a[o][i], a[o].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s)
            }
        }
        return t
    }, e.widget.bridge = function (t, i) {
        var s = i.prototype.widgetFullName || t;
        e.fn[t] = function (a) {
            var o = "string" == typeof a,
                r = n.call(arguments, 1),
                h = this;
            return a = !o && r.length ? e.widget.extend.apply(null, [a].concat(r)) : a, o ? this.each(function () {
                var i, n = e.data(this, s);
                return "instance" === a ? (h = n, !1) : n ? e.isFunction(n[a]) && "_" !== a.charAt(0) ? (i = n[a].apply(n, r), i !== n && void 0 !== i ? (h = i && i.jquery ? h.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + a + "'")
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
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function () {
            return this.element
        },
        option: function (t, i) {
            var s, n, a, o = t;
            if (0 === arguments.length) {
                return e.widget.extend({}, this.options)
            }
            if ("string" == typeof t) {
                if (o = {}, s = t.split("."), t = s.shift(), s.length) {
                    for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) {
                        n[s[a]] = n[s[a]] || {}, n = n[s[a]]
                    }
                    if (t = s.pop(), 1 === arguments.length) {
                        return void 0 === n[t] ? null : n[t]
                    }
                    n[t] = i
                } else {
                    if (1 === arguments.length) {
                        return void 0 === this.options[t] ? null : this.options[t]
                    }
                    o[t] = i
                }
            }
            return this._setOptions(o), this
        },
        _setOptions: function (e) {
            var t;
            for (t in e) {
                this._setOption(t, e[t])
            }
            return this
        },
        _setOption: function (e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !! t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
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
            if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent) {
                for (n in a) {
                    n in i || (i[n] = a[n])
                }
            }
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
                    zIndex: 1000
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
                if (this._trigger("drag", t, s) === !1) {
                    return this._mouseUp({}), !1
                }
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
            return this.options.handle ? !! e(t.target).closest(this.element.find(this.options.handle)).length : !0
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
            if ("relative" !== this.cssPosition) {
                return {
                    top: 0,
                    left: 0
                }
            }
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
            for (c = s.snapElements.length - 1; c >= 0; c--) {
                h = s.snapElements[c].left, l = h + s.snapElements[c].width, u = s.snapElements[c].top, d = u + s.snapElements[c].height, h - m > v || g > l + m || u - m > b || y > d + m || !e.contains(s.snapElements[c].item.ownerDocument, s.snapElements[c].item) ? (s.snapElements[c].snapping && s.options.snap.release && s.options.snap.release.call(s.element, t, e.extend(s._uiHash(), {
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
    var e, i, s, r = t.fn.animate,
        n = t.fn.stop,
        a = !0,
        o = function (t, e) {
            "function" == typeof t && this.each(t), e()
        }, h = function (t, e, i, s, r) {
            r = "function" == typeof r ? r : null, e = "function" == typeof e ? e : null, (e || r) && (s[t] = r ? o : i.each, s[t + "Scope"] = i, s[t + "Params"] = r ? [e, r] : [e])
        }, l = {
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
        }, _ = function (t, e) {
            for (var i in l) {
                l[i] && void 0 !== t[i] && (e[i] = t[i])
            }
        }, u = function (t) {
            return function (e) {
                return t.getRatio(e)
            }
        }, c = {}, f = function () {
            var r, n, a, o = window.GreenSockGlobals || window;
            if (e = o.TweenMax || o.TweenLite, e && (r = (e.version + ".0.0").split("."), n = !(Number(r[0]) > 0 && Number(r[1]) > 7), o = o.com.greensock, i = o.plugins.CSSPlugin, c = o.easing.Ease.map || {}), !e || !i || n) {
                return e = null, !s && window.console && (window.console.log("The jquery.gsap.js plugin requires the TweenMax (or at least TweenLite and CSSPlugin) JavaScript file(s)." + (n ? " Version " + r.join(".") + " is too old." : "")), s = !0), void 0
            }
            if (t.easing) {
                for (a in c) {
                    t.easing[a] = u(c[a])
                }
                f = !1
            }
        };
    t.fn.animate = function (s, n, o, l) {
        if (s = s || {}, f && (f(), !e || !i)) {
            return r.call(this, s, n, o, l)
        }
        if (!a || s.skipGSAP === !0 || "object" == typeof n && "function" == typeof n.step || null != s.scrollTop || null != s.scrollLeft) {
            return r.call(this, s, n, o, l)
        }
        var u, p, m, d, g = t.speed(n, o, l),
            v = {
                ease: c[g.easing] || (g.easing === !1 ? c.linear : c.swing)
            }, T = this,
            y = "object" == typeof n ? n.specialEasing : null;
        for (p in s) {
            if (u = s[p], u instanceof Array && c[u[1]] && (y = y || {}, y[p] = u[1], u = u[0]), "toggle" === u || "hide" === u || "show" === u) {
                return r.call(this, s, n, o, l)
            }
            v[-1 === p.indexOf("-") ? p : t.camelCase(p)] = u
        }
        if (y) {
            d = [];
            for (p in y) {
                u = d[d.length] = {}, _(v, u), u.ease = c[y[p]] || v.ease, -1 !== p.indexOf("-") && (p = t.camelCase(p)), u[p] = v[p]
            }
            0 === d.length && (d = null)
        }
        return m = function (i) {
            if (d) {
                for (var s = d.length; --s > -1;) {
                    e.to(T, t.fx.off ? 0 : g.duration / 1000, d[s])
                }
            }
            h("onComplete", g.old, T, v, i), e.to(T, t.fx.off ? 0 : g.duration / 1000, v)
        }, g.queue !== !1 ? T.queue(g.queue, m) : m(), T
    }, t.fn.stop = function (t, i) {
        if (n.call(this, t, i), e) {
            if (i) {
                for (var s, r = e.getTweensOf(this), a = r.length; --a > -1;) {
                    s = r[a].totalTime() / r[a].totalDuration(), s > 0 && 1 > s && r[a].seek(r[a].totalDuration())
                }
            }
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
    } if (b) {
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
var _gsScope = (typeof (module) !== "undefined" && module.exports && typeof (global) !== "undefined") ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (Animation, SimpleTimeline, TweenLite) {
        var _slice = function (a) {
            var b = [],
                l = a.length,
                i;
            for (i = 0; i !== l; b.push(a[i++])) {}
            return b
        }, TweenMax = function (target, duration, vars) {
                target = Display.get(target);
                TweenLite.call(this, target, duration, vars);
                this._cycle = 0;
                this._yoyo = (this.vars.yoyo === true);
                this._repeat = this.vars.repeat || 0;
                this._repeatDelay = this.vars.repeatDelay || 0;
                this._dirty = true;
                this.render = TweenMax.prototype.render
            }, _tinyNum = 1e-10,
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
            return TweenLite.prototype.invalidate.call(this)
        };
        p.updateTo = function (vars, resetDuration) {
            var curRatio = this.ratio,
                p;
            if (resetDuration && this._startTime < this._timeline._time) {
                this._startTime = this._timeline._time;
                this._uncache(false);
                if (this._gc) {
                    this._enabled(true, false)
                } else {
                    this._timeline.insert(this, this._startTime - this._delay)
                }
            }
            for (p in vars) {
                this.vars[p] = vars[p]
            }
            if (this._initted) {
                if (resetDuration) {
                    this._initted = false
                } else {
                    if (this._gc) {
                        this._enabled(true, false)
                    }
                    if (this._notifyPluginsOfEnabled && this._firstPT) {
                        TweenLite._onPluginEvent("_onDisable", this)
                    }
                    if (this._time / this._duration > 0.998) {
                        var prevTime = this._time;
                        this.render(0, true, false);
                        this._initted = false;
                        this.render(prevTime, true, false)
                    } else {
                        if (this._time > 0) {
                            this._initted = false;
                            this._init();
                            var inv = 1 / (1 - curRatio),
                                pt = this._firstPT,
                                endValue;
                            while (pt) {
                                endValue = pt.s + pt.c;
                                pt.c *= inv;
                                pt.s = endValue - pt.c;
                                pt = pt._next
                            }
                        }
                    }
                }
            }
            return this
        };
        p.render = function (time, suppressEvents, force) {
            if (!this._initted) {
                if (this._duration === 0 && this.vars.repeat) {
                    this.invalidate()
                }
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
                    this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0
                } else {
                    this._time = duration;
                    this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1
                } if (!this._reversed) {
                    isComplete = true;
                    callback = "onComplete"
                }
                if (duration === 0) {
                    if (this._initted || !this.vars.lazy || force) {
                        if (this._startTime === this._timeline._duration) {
                            time = 0
                        }
                        if (time === 0 || prevRawPrevTime < 0 || prevRawPrevTime === _tinyNum) {
                            if (prevRawPrevTime !== time) {
                                force = true;
                                if (prevRawPrevTime > _tinyNum) {
                                    callback = "onReverseComplete"
                                }
                            }
                        }
                        this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum
                    }
                }
            } else {
                if (time < 1e-7) {
                    this._totalTime = this._time = this._cycle = 0;
                    this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
                    if (prevTotalTime !== 0 || (duration === 0 && prevRawPrevTime > 0 && prevRawPrevTime !== _tinyNum)) {
                        callback = "onReverseComplete";
                        isComplete = this._reversed
                    }
                    if (time < 0) {
                        this._active = false;
                        if (duration === 0) {
                            if (this._initted || !this.vars.lazy || force) {
                                if (prevRawPrevTime >= 0) {
                                    force = true
                                }
                                this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum
                            }
                        }
                    } else {
                        if (!this._initted) {
                            force = true
                        }
                    }
                } else {
                    this._totalTime = this._time = time;
                    if (this._repeat !== 0) {
                        cycleDuration = duration + this._repeatDelay;
                        this._cycle = (this._totalTime / cycleDuration) >> 0;
                        if (this._cycle !== 0) {
                            if (this._cycle === this._totalTime / cycleDuration) {
                                this._cycle--
                            }
                        }
                        this._time = this._totalTime - (this._cycle * cycleDuration);
                        if (this._yoyo) {
                            if ((this._cycle & 1) !== 0) {
                                this._time = duration - this._time
                            }
                        }
                        if (this._time > duration) {
                            this._time = duration
                        } else {
                            if (this._time < 0) {
                                this._time = 0
                            }
                        }
                    }
                    if (this._easeType) {
                        r = this._time / duration;
                        type = this._easeType;
                        pow = this._easePower;
                        if (type === 1 || (type === 3 && r >= 0.5)) {
                            r = 1 - r
                        }
                        if (type === 3) {
                            r *= 2
                        }
                        if (pow === 1) {
                            r *= r
                        } else {
                            if (pow === 2) {
                                r *= r * r
                            } else {
                                if (pow === 3) {
                                    r *= r * r * r
                                } else {
                                    if (pow === 4) {
                                        r *= r * r * r * r
                                    }
                                }
                            }
                        } if (type === 1) {
                            this.ratio = 1 - r
                        } else {
                            if (type === 2) {
                                this.ratio = r
                            } else {
                                if (this._time / duration < 0.5) {
                                    this.ratio = r / 2
                                } else {
                                    this.ratio = 1 - (r / 2)
                                }
                            }
                        }
                    } else {
                        this.ratio = this._ease.getRatio(this._time / duration)
                    }
                }
            } if (prevTime === this._time && !force && prevCycle === this._cycle) {
                if (prevTotalTime !== this._totalTime) {
                    if (this._onUpdate) {
                        if (!suppressEvents) {
                            this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _blankArray)
                        }
                    }
                }
                return
            } else {
                if (!this._initted) {
                    this._init();
                    if (!this._initted || this._gc) {
                        return
                    } else {
                        if (!force && this._firstPT && ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration))) {
                            this._time = prevTime;
                            this._totalTime = prevTotalTime;
                            this._rawPrevTime = prevRawPrevTime;
                            this._cycle = prevCycle;
                            TweenLiteInternals.lazyTweens.push(this);
                            this._lazy = time;
                            return
                        }
                    } if (this._time && !isComplete) {
                        this.ratio = this._ease.getRatio(this._time / duration)
                    } else {
                        if (isComplete && this._ease._calcEnd) {
                            this.ratio = this._ease.getRatio((this._time === 0) ? 0 : 1)
                        }
                    }
                }
            } if (this._lazy !== false) {
                this._lazy = false
            }
            if (!this._active) {
                if (!this._paused && this._time !== prevTime && time >= 0) {
                    this._active = true
                }
            }
            if (prevTotalTime === 0) {
                if (this._initted === 2 && time > 0) {
                    this._init()
                }
                if (this._startAt) {
                    if (time >= 0) {
                        this._startAt.render(time, suppressEvents, force)
                    } else {
                        if (!callback) {
                            callback = "_dummyGS"
                        }
                    }
                }
                if (this.vars.onStart) {
                    if (this._totalTime !== 0 || duration === 0) {
                        if (!suppressEvents) {
                            this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _blankArray)
                        }
                    }
                }
            }
            pt = this._firstPT;
            while (pt) {
                if (pt.f) {
                    pt.t[pt.p](pt.c * this.ratio + pt.s)
                } else {
                    pt.t[pt.p] = pt.c * this.ratio + pt.s
                }
                pt = pt._next
            }
            if (this._onUpdate) {
                if (time < 0) {
                    if (this._startAt && this._startTime) {
                        this._startAt.render(time, suppressEvents, force)
                    }
                }
                if (!suppressEvents) {
                    if (this._totalTime !== prevTotalTime || isComplete) {
                        this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _blankArray)
                    }
                }
            }
            if (this._cycle !== prevCycle) {
                if (!suppressEvents) {
                    if (!this._gc) {
                        if (this.vars.onRepeat) {
                            this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || _blankArray)
                        }
                    }
                }
            }
            if (callback) {
                if (!this._gc || force) {
                    if (time < 0 && this._startAt && !this._onUpdate && this._startTime) {
                        this._startAt.render(time, suppressEvents, force)
                    }
                    if (isComplete) {
                        if (this._timeline.autoRemoveChildren) {
                            this._enabled(false, false)
                        }
                        this._active = false
                    }
                    if (!suppressEvents && this.vars[callback]) {
                        this.vars[callback].apply(this.vars[callback + "Scope"] || this, this.vars[callback + "Params"] || _blankArray)
                    }
                    if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) {
                        this._rawPrevTime = 0
                    }
                }
            }
        };
        TweenMax.to = function (target, duration, vars) {
            return new TweenMax(target, duration, vars)
        };
        TweenMax.from = function (target, duration, vars) {
            vars.runBackwards = true;
            vars.immediateRender = (vars.immediateRender != false);
            return new TweenMax(target, duration, vars)
        };
        TweenMax.fromTo = function (target, duration, fromVars, toVars) {
            toVars.startAt = fromVars;
            toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
            return new TweenMax(target, duration, toVars)
        };
        TweenMax.staggerTo = TweenMax.allTo = function (targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
            stagger = stagger || 0;
            var delay = vars.delay || 0,
                a = [],
                finalComplete = function () {
                    if (vars.onComplete) {
                        vars.onComplete.apply(vars.onCompleteScope || this, arguments)
                    }
                    onCompleteAll.apply(onCompleteAllScope || this, onCompleteAllParams || _blankArray)
                }, l, copy, i, p;
            if (!_isArray(targets)) {
                if (typeof (targets) === "string") {
                    targets = TweenLite.selector(targets) || targets
                }
                if (_isSelector(targets)) {
                    targets = _slice(targets)
                }
            }
            l = targets.length;
            for (i = 0; i < l; i++) {
                copy = {};
                for (p in vars) {
                    copy[p] = vars[p]
                }
                copy.delay = delay;
                if (i === l - 1 && onCompleteAll) {
                    copy.onComplete = finalComplete
                }
                a[i] = new TweenMax(targets[i], duration, copy);
                delay += stagger
            }
            return a
        };
        TweenMax.staggerFrom = TweenMax.allFrom = function (targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
            vars.runBackwards = true;
            vars.immediateRender = (vars.immediateRender != false);
            return TweenMax.staggerTo(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope)
        };
        TweenMax.staggerFromTo = TweenMax.allFromTo = function (targets, duration, fromVars, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
            toVars.startAt = fromVars;
            toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
            return TweenMax.staggerTo(targets, duration, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope)
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
            })
        };
        TweenMax.set = function (target, vars) {
            return new TweenMax(target, 0, vars)
        };
        TweenMax.isTweening = function (target) {
            return (TweenLite.getTweensOf(target, true).length > 0)
        };
        var _getChildrenOf = function (timeline, includeTimelines) {
            var a = [],
                cnt = 0,
                tween = timeline._first;
            while (tween) {
                if (tween instanceof TweenLite) {
                    a[cnt++] = tween
                } else {
                    if (includeTimelines) {
                        a[cnt++] = tween
                    }
                    a = a.concat(_getChildrenOf(tween, includeTimelines));
                    cnt = a.length
                }
                tween = tween._next
            }
            return a
        }, getAllTweens = TweenMax.getAllTweens = function (includeTimelines) {
                return _getChildrenOf(Animation._rootTimeline, includeTimelines).concat(_getChildrenOf(Animation._rootFramesTimeline, includeTimelines))
            };
        TweenMax.killAll = function (complete, tweens, delayedCalls, timelines) {
            if (tweens == null) {
                tweens = true
            }
            if (delayedCalls == null) {
                delayedCalls = true
            }
            var a = getAllTweens((timelines != false)),
                l = a.length,
                allTrue = (tweens && delayedCalls && timelines),
                isDC, tween, i;
            for (i = 0; i < l; i++) {
                tween = a[i];
                if (allTrue || (tween instanceof SimpleTimeline) || ((isDC = (tween.target === tween.vars.onComplete)) && delayedCalls) || (tweens && !isDC)) {
                    if (complete) {
                        tween.totalTime(tween._reversed ? 0 : tween.totalDuration())
                    } else {
                        tween._enabled(false, false)
                    }
                }
            }
        };
        TweenMax.killChildTweensOf = function (parent, complete) {
            if (parent == null) {
                return
            }
            var tl = TweenLiteInternals.tweenLookup,
                a, curParent, p, i, l;
            if (typeof (parent) === "string") {
                parent = TweenLite.selector(parent) || parent
            }
            if (_isSelector(parent)) {
                parent = _slice(parent)
            }
            if (_isArray(parent)) {
                i = parent.length;
                while (--i > -1) {
                    TweenMax.killChildTweensOf(parent[i], complete)
                }
                return
            }
            a = [];
            for (p in tl) {
                curParent = tl[p].target.parentNode;
                while (curParent) {
                    if (curParent === parent) {
                        a = a.concat(tl[p].tweens)
                    }
                    curParent = curParent.parentNode
                }
            }
            l = a.length;
            for (i = 0; i < l; i++) {
                if (complete) {
                    a[i].totalTime(a[i].totalDuration())
                }
                a[i]._enabled(false, false)
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
                    tween.paused(pause)
                }
            }
        };
        TweenMax.pauseAll = function (tweens, delayedCalls, timelines) {
            _changePause(true, tweens, delayedCalls, timelines)
        };
        TweenMax.resumeAll = function (tweens, delayedCalls, timelines) {
            _changePause(false, tweens, delayedCalls, timelines)
        };
        TweenMax.globalTimeScale = function (value) {
            var tl = Animation._rootTimeline,
                t = TweenLite.ticker.time;
            if (!arguments.length) {
                return tl._timeScale
            }
            value = value || _tinyNum;
            tl._startTime = t - ((t - tl._startTime) * tl._timeScale / value);
            tl = Animation._rootFramesTimeline;
            t = TweenLite.ticker.frame;
            tl._startTime = t - ((t - tl._startTime) * tl._timeScale / value);
            tl._timeScale = Animation._rootTimeline._timeScale = value;
            return value
        };
        p.progress = function (value) {
            return (!arguments.length) ? this._time / this.duration() : this.totalTime(this.duration() * ((this._yoyo && (this._cycle & 1) !== 0) ? 1 - value : value) + (this._cycle * (this._duration + this._repeatDelay)), false)
        };
        p.totalProgress = function (value) {
            return (!arguments.length) ? this._totalTime / this.totalDuration() : this.totalTime(this.totalDuration() * value, false)
        };
        p.time = function (value, suppressEvents) {
            if (!arguments.length) {
                return this._time
            }
            if (this._dirty) {
                this.totalDuration()
            }
            if (value > this._duration) {
                value = this._duration
            }
            if (this._yoyo && (this._cycle & 1) !== 0) {
                value = (this._duration - value) + (this._cycle * (this._duration + this._repeatDelay))
            } else {
                if (this._repeat !== 0) {
                    value += this._cycle * (this._duration + this._repeatDelay)
                }
            }
            return this.totalTime(value, suppressEvents)
        };
        p.duration = function (value) {
            if (!arguments.length) {
                return this._duration
            }
            return Animation.prototype.duration.call(this, value)
        };
        p.totalDuration = function (value) {
            if (!arguments.length) {
                if (this._dirty) {
                    this._totalDuration = (this._repeat === -1) ? 999999999999 : this._duration * (this._repeat + 1) + (this._repeatDelay * this._repeat);
                    this._dirty = false
                }
                return this._totalDuration
            }
            return (this._repeat === -1) ? this : this.duration((value - (this._repeat * this._repeatDelay)) / (this._repeat + 1))
        };
        p.repeat = function (value) {
            if (!arguments.length) {
                return this._repeat
            }
            this._repeat = value;
            return this._uncache(true)
        };
        p.repeatDelay = function (value) {
            if (!arguments.length) {
                return this._repeatDelay
            }
            this._repeatDelay = value;
            return this._uncache(true)
        };
        p.yoyo = function (value) {
            if (!arguments.length) {
                return this._yoyo
            }
            this._yoyo = value;
            return this
        };
        return TweenMax
    }, true);
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
                if (_isArray(val)) {
                    if (val.join("").indexOf("{self}") !== -1) {
                        v[p] = this._swapSelfInParams(val)
                    }
                }
            }
            if (_isArray(v.tweens)) {
                this.add(v.tweens, 0, v.align, v.stagger)
            }
        }, _tinyNum = 1e-10,
            TweenLiteInternals = TweenLite._internals,
            _isSelector = TweenLiteInternals.isSelector,
            _isArray = TweenLiteInternals.isArray,
            _lazyTweens = TweenLiteInternals.lazyTweens,
            _lazyRender = TweenLiteInternals.lazyRender,
            _blankArray = [],
            _globals = _gsScope._gsDefine.globals,
            _copy = function (vars) {
                var copy = {}, p;
                for (p in vars) {
                    copy[p] = vars[p]
                }
                return copy
            }, _pauseCallback = function (tween, callback, params, scope) {
                tween._timeline.pause(tween._startTime);
                if (callback) {
                    callback.apply(scope || tween._timeline, params || _blankArray)
                }
            }, _slice = function (a) {
                var b = [],
                    l = a.length,
                    i;
                for (i = 0; i !== l; b.push(a[i++])) {}
                return b
            }, p = TimelineLite.prototype = new SimpleTimeline();
        TimelineLite.version = "1.13.1";
        p.constructor = TimelineLite;
        p.kill()._gc = false;
        p.to = function (target, duration, vars, position) {
            var Engine = (vars.repeat && _globals.TweenMax) || TweenLite;
            return duration ? this.add(new Engine(target, duration, vars), position) : this.set(target, vars, position)
        };
        p.from = function (target, duration, vars, position) {
            return this.add(((vars.repeat && _globals.TweenMax) || TweenLite).from(target, duration, vars), position)
        };
        p.fromTo = function (target, duration, fromVars, toVars, position) {
            var Engine = (toVars.repeat && _globals.TweenMax) || TweenLite;
            return duration ? this.add(Engine.fromTo(target, duration, fromVars, toVars), position) : this.set(target, toVars, position)
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
                targets = TweenLite.selector(targets) || targets
            }
            if (_isSelector(targets)) {
                targets = _slice(targets)
            }
            stagger = stagger || 0;
            for (i = 0; i < targets.length; i++) {
                if (vars.startAt) {
                    vars.startAt = _copy(vars.startAt)
                }
                tl.to(targets[i], duration, _copy(vars), i * stagger)
            }
            return this.add(tl, position)
        };
        p.staggerFrom = function (targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
            vars.immediateRender = (vars.immediateRender != false);
            vars.runBackwards = true;
            return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope)
        };
        p.staggerFromTo = function (targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
            toVars.startAt = fromVars;
            toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
            return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope)
        };
        p.call = function (callback, params, scope, position) {
            return this.add(TweenLite.delayedCall(0, callback, params, scope), position)
        };
        p.set = function (target, vars, position) {
            position = this._parseTimeOrLabel(position, 0, true);
            if (vars.immediateRender == null) {
                vars.immediateRender = (position === this._time && !this._paused)
            }
            return this.add(new TweenLite(target, 0, vars), position)
        };
        TimelineLite.exportRoot = function (vars, ignoreDelayedCalls) {
            vars = vars || {};
            if (vars.smoothChildTiming == null) {
                vars.smoothChildTiming = true
            }
            var tl = new TimelineLite(vars),
                root = tl._timeline,
                tween, next;
            if (ignoreDelayedCalls == null) {
                ignoreDelayedCalls = true
            }
            root._remove(tl, true);
            tl._startTime = 0;
            tl._rawPrevTime = tl._time = tl._totalTime = root._time;
            tween = root._first;
            while (tween) {
                next = tween._next;
                if (!ignoreDelayedCalls || !(tween instanceof TweenLite && tween.target === tween.vars.onComplete)) {
                    tl.add(tween, tween._startTime - tween._delay)
                }
                tween = next
            }
            root.add(tl, 0);
            return tl
        };
        p.add = function (value, position, align, stagger) {
            var curTime, l, i, child, tl, beforeRawTime;
            if (typeof (position) !== "number") {
                position = this._parseTimeOrLabel(position, 0, true, value)
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
                            })
                        }
                        this.add(child, curTime);
                        if (typeof (child) !== "string" && typeof (child) !== "function") {
                            if (align === "sequence") {
                                curTime = child._startTime + (child.totalDuration() / child._timeScale)
                            } else {
                                if (align === "start") {
                                    child._startTime -= child.delay()
                                }
                            }
                        }
                        curTime += stagger
                    }
                    return this._uncache(true)
                } else {
                    if (typeof (value) === "string") {
                        return this.addLabel(value, position)
                    } else {
                        if (typeof (value) === "function") {
                            value = TweenLite.delayedCall(0, value)
                        } else {
                            throw ("Cannot add " + value + " into the timeline; it is not a tween, timeline, function, or string.")
                        }
                    }
                }
            }
            SimpleTimeline.prototype.add.call(this, value, position);
            if (this._gc || this._time === this._duration) {
                if (!this._paused) {
                    if (this._duration < this.duration()) {
                        tl = this;
                        beforeRawTime = (tl.rawTime() > value._startTime);
                        while (tl._timeline) {
                            if (beforeRawTime && tl._timeline.smoothChildTiming) {
                                tl.totalTime(tl._totalTime, true)
                            } else {
                                if (tl._gc) {
                                    tl._enabled(true, false)
                                }
                            }
                            tl = tl._timeline
                        }
                    }
                }
            }
            return this
        };
        p.remove = function (value) {
            if (value instanceof Animation) {
                return this._remove(value, false)
            } else {
                if (value instanceof Array || (value && value.push && _isArray(value))) {
                    var i = value.length;
                    while (--i > -1) {
                        this.remove(value[i])
                    }
                    return this
                } else {
                    if (typeof (value) === "string") {
                        return this.removeLabel(value)
                    }
                }
            }
            return this.kill(null, value)
        };
        p._remove = function (tween, skipDisable) {
            SimpleTimeline.prototype._remove.call(this, tween, skipDisable);
            var last = this._last;
            if (!last) {
                this._time = this._totalTime = this._duration = this._totalDuration = 0
            } else {
                if (this._time > last._startTime + last._totalDuration / last._timeScale) {
                    this._time = this.duration();
                    this._totalTime = this._totalDuration
                }
            }
            return this
        };
        p.append = function (value, offsetOrLabel) {
            return this.add(value, this._parseTimeOrLabel(null, offsetOrLabel, true, value))
        };
        p.insert = p.insertMultiple = function (value, position, align, stagger) {
            return this.add(value, position || 0, align, stagger)
        };
        p.appendMultiple = function (tweens, offsetOrLabel, align, stagger) {
            return this.add(tweens, this._parseTimeOrLabel(null, offsetOrLabel, true, tweens), align, stagger)
        };
        p.addLabel = function (label, position) {
            this._labels[label] = this._parseTimeOrLabel(position);
            return this
        };
        p.addPause = function (position, callback, params, scope) {
            return this.call(_pauseCallback, ["{self}", callback, params, scope], this, position)
        };
        p.removeLabel = function (label) {
            delete this._labels[label];
            return this
        };
        p.getLabelTime = function (label) {
            return (this._labels[label] != null) ? this._labels[label] : -1
        };
        p._parseTimeOrLabel = function (timeOrLabel, offsetOrLabel, appendIfAbsent, ignore) {
            var i;
            if (ignore instanceof Animation && ignore.timeline === this) {
                this.remove(ignore)
            } else {
                if (ignore && ((ignore instanceof Array) || (ignore.push && _isArray(ignore)))) {
                    i = ignore.length;
                    while (--i > -1) {
                        if (ignore[i] instanceof Animation && ignore[i].timeline === this) {
                            this.remove(ignore[i])
                        }
                    }
                }
            } if (typeof (offsetOrLabel) === "string") {
                return this._parseTimeOrLabel(offsetOrLabel, (appendIfAbsent && typeof (timeOrLabel) === "number" && this._labels[offsetOrLabel] == null) ? timeOrLabel - this.duration() : 0, appendIfAbsent)
            }
            offsetOrLabel = offsetOrLabel || 0;
            if (typeof (timeOrLabel) === "string" && (isNaN(timeOrLabel) || this._labels[timeOrLabel] != null)) {
                i = timeOrLabel.indexOf("=");
                if (i === -1) {
                    if (this._labels[timeOrLabel] == null) {
                        return appendIfAbsent ? (this._labels[timeOrLabel] = this.duration() + offsetOrLabel) : offsetOrLabel
                    }
                    return this._labels[timeOrLabel] + offsetOrLabel
                }
                offsetOrLabel = parseInt(timeOrLabel.charAt(i - 1) + "1", 10) * Number(timeOrLabel.substr(i + 1));
                timeOrLabel = (i > 1) ? this._parseTimeOrLabel(timeOrLabel.substr(0, i - 1), 0, appendIfAbsent) : this.duration()
            } else {
                if (timeOrLabel == null) {
                    timeOrLabel = this.duration()
                }
            }
            return Number(timeOrLabel) + offsetOrLabel
        };
        p.seek = function (position, suppressEvents) {
            return this.totalTime((typeof (position) === "number") ? position : this._parseTimeOrLabel(position), (suppressEvents !== false))
        };
        p.stop = function () {
            return this.paused(true)
        };
        p.gotoAndPlay = function (position, suppressEvents) {
            return this.play(position, suppressEvents)
        };
        p.gotoAndStop = function (position, suppressEvents) {
            return this.pause(position, suppressEvents)
        };
        p.render = function (time, suppressEvents, force) {
            if (this._gc) {
                this._enabled(true, false)
            }
            var totalDur = (!this._dirty) ? this._totalDuration : this.totalDuration(),
                prevTime = this._time,
                prevStart = this._startTime,
                prevTimeScale = this._timeScale,
                prevPaused = this._paused,
                tween, isComplete, next, callback, internalForce;
            if (time >= totalDur) {
                this._totalTime = this._time = totalDur;
                if (!this._reversed) {
                    if (!this._hasPausedChild()) {
                        isComplete = true;
                        callback = "onComplete";
                        if (this._duration === 0) {
                            if (time === 0 || this._rawPrevTime < 0 || this._rawPrevTime === _tinyNum) {
                                if (this._rawPrevTime !== time && this._first) {
                                    internalForce = true;
                                    if (this._rawPrevTime > _tinyNum) {
                                        callback = "onReverseComplete"
                                    }
                                }
                            }
                        }
                    }
                }
                this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum;
                time = totalDur + 0.0001
            } else {
                if (time < 1e-7) {
                    this._totalTime = this._time = 0;
                    if (prevTime !== 0 || (this._duration === 0 && this._rawPrevTime !== _tinyNum && (this._rawPrevTime > 0 || (time < 0 && this._rawPrevTime >= 0)))) {
                        callback = "onReverseComplete";
                        isComplete = this._reversed
                    }
                    if (time < 0) {
                        this._active = false;
                        if (this._rawPrevTime >= 0 && this._first) {
                            internalForce = true
                        }
                        this._rawPrevTime = time
                    } else {
                        this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum;
                        time = 0;
                        if (!this._initted) {
                            internalForce = true
                        }
                    }
                } else {
                    this._totalTime = this._time = this._rawPrevTime = time
                }
            } if ((this._time === prevTime || !this._first) && !force && !internalForce) {
                return
            } else {
                if (!this._initted) {
                    this._initted = true
                }
            } if (!this._active) {
                if (!this._paused && this._time !== prevTime && time > 0) {
                    this._active = true
                }
            }
            if (prevTime === 0) {
                if (this.vars.onStart) {
                    if (this._time !== 0) {
                        if (!suppressEvents) {
                            this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _blankArray)
                        }
                    }
                }
            }
            if (this._time >= prevTime) {
                tween = this._first;
                while (tween) {
                    next = tween._next;
                    if (this._paused && !prevPaused) {
                        break
                    } else {
                        if (tween._active || (tween._startTime <= this._time && !tween._paused && !tween._gc)) {
                            if (!tween._reversed) {
                                tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force)
                            } else {
                                tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force)
                            }
                        }
                    }
                    tween = next
                }
            } else {
                tween = this._last;
                while (tween) {
                    next = tween._prev;
                    if (this._paused && !prevPaused) {
                        break
                    } else {
                        if (tween._active || (tween._startTime <= prevTime && !tween._paused && !tween._gc)) {
                            if (!tween._reversed) {
                                tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force)
                            } else {
                                tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force)
                            }
                        }
                    }
                    tween = next
                }
            } if (this._onUpdate) {
                if (!suppressEvents) {
                    if (_lazyTweens.length) {
                        _lazyRender()
                    }
                    this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _blankArray)
                }
            }
            if (callback) {
                if (!this._gc) {
                    if (prevStart === this._startTime || prevTimeScale !== this._timeScale) {
                        if (this._time === 0 || totalDur >= this.totalDuration()) {
                            if (isComplete) {
                                if (_lazyTweens.length) {
                                    _lazyRender()
                                }
                                if (this._timeline.autoRemoveChildren) {
                                    this._enabled(false, false)
                                }
                                this._active = false
                            }
                            if (!suppressEvents && this.vars[callback]) {
                                this.vars[callback].apply(this.vars[callback + "Scope"] || this, this.vars[callback + "Params"] || _blankArray)
                            }
                        }
                    }
                }
            }
        };
        p._hasPausedChild = function () {
            var tween = this._first;
            while (tween) {
                if (tween._paused || ((tween instanceof TimelineLite) && tween._hasPausedChild())) {
                    return true
                }
                tween = tween._next
            }
            return false
        };
        p.getChildren = function (nested, tweens, timelines, ignoreBeforeTime) {
            ignoreBeforeTime = ignoreBeforeTime || -9999999999;
            var a = [],
                tween = this._first,
                cnt = 0;
            while (tween) {
                if (tween._startTime < ignoreBeforeTime) {} else {
                    if (tween instanceof TweenLite) {
                        if (tweens !== false) {
                            a[cnt++] = tween
                        }
                    } else {
                        if (timelines !== false) {
                            a[cnt++] = tween
                        }
                        if (nested !== false) {
                            a = a.concat(tween.getChildren(true, tweens, timelines));
                            cnt = a.length
                        }
                    }
                }
                tween = tween._next
            }
            return a
        };
        p.getTweensOf = function (target, nested) {
            var disabled = this._gc,
                a = [],
                cnt = 0,
                tweens, i;
            if (disabled) {
                this._enabled(true, true)
            }
            tweens = TweenLite.getTweensOf(target);
            i = tweens.length;
            while (--i > -1) {
                if (tweens[i].timeline === this || (nested && this._contains(tweens[i]))) {
                    a[cnt++] = tweens[i]
                }
            }
            if (disabled) {
                this._enabled(false, true)
            }
            return a
        };
        p._contains = function (tween) {
            var tl = tween.timeline;
            while (tl) {
                if (tl === this) {
                    return true
                }
                tl = tl.timeline
            }
            return false
        };
        p.shiftChildren = function (amount, adjustLabels, ignoreBeforeTime) {
            ignoreBeforeTime = ignoreBeforeTime || 0;
            var tween = this._first,
                labels = this._labels,
                p;
            while (tween) {
                if (tween._startTime >= ignoreBeforeTime) {
                    tween._startTime += amount
                }
                tween = tween._next
            }
            if (adjustLabels) {
                for (p in labels) {
                    if (labels[p] >= ignoreBeforeTime) {
                        labels[p] += amount
                    }
                }
            }
            return this._uncache(true)
        };
        p._kill = function (vars, target) {
            if (!vars && !target) {
                return this._enabled(false, false)
            }
            var tweens = (!target) ? this.getChildren(true, true, false) : this.getTweensOf(target),
                i = tweens.length,
                changed = false;
            while (--i > -1) {
                if (tweens[i]._kill(vars, target)) {
                    changed = true
                }
            }
            return changed
        };
        p.clear = function (labels) {
            var tweens = this.getChildren(false, true, true),
                i = tweens.length;
            this._time = this._totalTime = 0;
            while (--i > -1) {
                tweens[i]._enabled(false, false)
            }
            if (labels !== false) {
                this._labels = {}
            }
            return this._uncache(true)
        };
        p.invalidate = function () {
            var tween = this._first;
            while (tween) {
                tween.invalidate();
                tween = tween._next
            }
            return this
        };
        p._enabled = function (enabled, ignoreTimeline) {
            if (enabled === this._gc) {
                var tween = this._first;
                while (tween) {
                    tween._enabled(enabled, true);
                    tween = tween._next
                }
            }
            return SimpleTimeline.prototype._enabled.call(this, enabled, ignoreTimeline)
        };
        p.duration = function (value) {
            if (!arguments.length) {
                if (this._dirty) {
                    this.totalDuration()
                }
                return this._duration
            }
            if (this.duration() !== 0 && value !== 0) {
                this.timeScale(this._duration / value)
            }
            return this
        };
        p.totalDuration = function (value) {
            if (!arguments.length) {
                if (this._dirty) {
                    var max = 0,
                        tween = this._last,
                        prevStart = 999999999999,
                        prev, end;
                    while (tween) {
                        prev = tween._prev;
                        if (tween._dirty) {
                            tween.totalDuration()
                        }
                        if (tween._startTime > prevStart && this._sortChildren && !tween._paused) {
                            this.add(tween, tween._startTime - tween._delay)
                        } else {
                            prevStart = tween._startTime
                        } if (tween._startTime < 0 && !tween._paused) {
                            max -= tween._startTime;
                            if (this._timeline.smoothChildTiming) {
                                this._startTime += tween._startTime / this._timeScale
                            }
                            this.shiftChildren(-tween._startTime, false, -9999999999);
                            prevStart = 0
                        }
                        end = tween._startTime + (tween._totalDuration / tween._timeScale);
                        if (end > max) {
                            max = end
                        }
                        tween = prev
                    }
                    this._duration = this._totalDuration = max;
                    this._dirty = false
                }
                return this._totalDuration
            }
            if (this.totalDuration() !== 0) {
                if (value !== 0) {
                    this.timeScale(this._totalDuration / value)
                }
            }
            return this
        };
        p.usesFrames = function () {
            var tl = this._timeline;
            while (tl._timeline) {
                tl = tl._timeline
            }
            return (tl === Animation._rootFramesTimeline)
        };
        p.rawTime = function () {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        };
        return TimelineLite
    }, true);
    _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (TimelineLite, TweenLite, Ease) {
        var TimelineMax = function (vars) {
            TimelineLite.call(this, vars);
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._cycle = 0;
            this._yoyo = (this.vars.yoyo === true);
            this._dirty = true
        }, _tinyNum = 1e-10,
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
            return TimelineLite.prototype.invalidate.call(this)
        };
        p.addCallback = function (callback, position, params, scope) {
            return this.add(TweenLite.delayedCall(0, callback, params, scope), position)
        };
        p.removeCallback = function (callback, position) {
            if (callback) {
                if (position == null) {
                    this._kill(null, callback)
                } else {
                    var a = this.getTweensOf(callback, false),
                        i = a.length,
                        time = this._parseTimeOrLabel(position);
                    while (--i > -1) {
                        if (a[i]._startTime === time) {
                            a[i]._enabled(false, false)
                        }
                    }
                }
            }
            return this
        };
        p.tweenTo = function (position, vars) {
            vars = vars || {};
            var copy = {
                ease: _easeNone,
                overwrite: (vars.delay ? 2 : 1),
                useFrames: this.usesFrames(),
                immediateRender: false
            }, duration, p, t;
            for (p in vars) {
                copy[p] = vars[p]
            }
            copy.time = this._parseTimeOrLabel(position);
            duration = (Math.abs(Number(copy.time) - this._time) / this._timeScale) || 0.001;
            t = new TweenLite(this, duration, copy);
            copy.onStart = function () {
                t.target.paused(true);
                if (t.vars.time !== t.target.time() && duration === t.duration()) {
                    t.duration(Math.abs(t.vars.time - t.target.time()) / t.target._timeScale)
                }
                if (vars.onStart) {
                    vars.onStart.apply(vars.onStartScope || t, vars.onStartParams || _blankArray)
                }
            };
            return t
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
            return t.duration((Math.abs(t.vars.time - fromPosition) / this._timeScale) || 0.001)
        };
        p.render = function (time, suppressEvents, force) {
            if (this._gc) {
                this._enabled(true, false)
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
                    this._cycle = this._repeat
                }
                if (!this._reversed) {
                    if (!this._hasPausedChild()) {
                        isComplete = true;
                        callback = "onComplete";
                        if (this._duration === 0) {
                            if (time === 0 || prevRawPrevTime < 0 || prevRawPrevTime === _tinyNum) {
                                if (prevRawPrevTime !== time && this._first) {
                                    internalForce = true;
                                    if (prevRawPrevTime > _tinyNum) {
                                        callback = "onReverseComplete"
                                    }
                                }
                            }
                        }
                    }
                }
                this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum;
                if (this._yoyo && (this._cycle & 1) !== 0) {
                    this._time = time = 0
                } else {
                    this._time = dur;
                    time = dur + 0.0001
                }
            } else {
                if (time < 1e-7) {
                    if (!this._locked) {
                        this._totalTime = this._cycle = 0
                    }
                    this._time = 0;
                    if (prevTime !== 0 || (dur === 0 && prevRawPrevTime !== _tinyNum && (prevRawPrevTime > 0 || (time < 0 && prevRawPrevTime >= 0)) && !this._locked)) {
                        callback = "onReverseComplete";
                        isComplete = this._reversed
                    }
                    if (time < 0) {
                        this._active = false;
                        if (prevRawPrevTime >= 0 && this._first) {
                            internalForce = true
                        }
                        this._rawPrevTime = time
                    } else {
                        this._rawPrevTime = (dur || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum;
                        time = 0;
                        if (!this._initted) {
                            internalForce = true
                        }
                    }
                } else {
                    if (dur === 0 && prevRawPrevTime < 0) {
                        internalForce = true
                    }
                    this._time = this._rawPrevTime = time;
                    if (!this._locked) {
                        this._totalTime = time;
                        if (this._repeat !== 0) {
                            cycleDuration = dur + this._repeatDelay;
                            this._cycle = (this._totalTime / cycleDuration) >> 0;
                            if (this._cycle !== 0) {
                                if (this._cycle === this._totalTime / cycleDuration) {
                                    this._cycle--
                                }
                            }
                            this._time = this._totalTime - (this._cycle * cycleDuration);
                            if (this._yoyo) {
                                if ((this._cycle & 1) !== 0) {
                                    this._time = dur - this._time
                                }
                            }
                            if (this._time > dur) {
                                this._time = dur;
                                time = dur + 0.0001
                            } else {
                                if (this._time < 0) {
                                    this._time = time = 0
                                } else {
                                    time = this._time
                                }
                            }
                        }
                    }
                }
            } if (this._cycle !== prevCycle) {
                if (!this._locked) {
                    var backwards = (this._yoyo && (prevCycle & 1) !== 0),
                        wrap = (backwards === (this._yoyo && (this._cycle & 1) !== 0)),
                        recTotalTime = this._totalTime,
                        recCycle = this._cycle,
                        recRawPrevTime = this._rawPrevTime,
                        recTime = this._time;
                    this._totalTime = prevCycle * dur;
                    if (this._cycle < prevCycle) {
                        backwards = !backwards
                    } else {
                        this._totalTime += dur
                    }
                    this._time = prevTime;
                    this._rawPrevTime = (dur === 0) ? prevRawPrevTime - 0.0001 : prevRawPrevTime;
                    this._cycle = prevCycle;
                    this._locked = true;
                    prevTime = (backwards) ? 0 : dur;
                    this.render(prevTime, suppressEvents, (dur === 0));
                    if (!suppressEvents) {
                        if (!this._gc) {
                            if (this.vars.onRepeat) {
                                this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || _blankArray)
                            }
                        }
                    }
                    if (wrap) {
                        prevTime = (backwards) ? dur + 0.0001 : -0.0001;
                        this.render(prevTime, true, false)
                    }
                    this._locked = false;
                    if (this._paused && !prevPaused) {
                        return
                    }
                    this._time = recTime;
                    this._totalTime = recTotalTime;
                    this._cycle = recCycle;
                    this._rawPrevTime = recRawPrevTime
                }
            }
            if ((this._time === prevTime || !this._first) && !force && !internalForce) {
                if (prevTotalTime !== this._totalTime) {
                    if (this._onUpdate) {
                        if (!suppressEvents) {
                            this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _blankArray)
                        }
                    }
                }
                return
            } else {
                if (!this._initted) {
                    this._initted = true
                }
            } if (!this._active) {
                if (!this._paused && this._totalTime !== prevTotalTime && time > 0) {
                    this._active = true
                }
            }
            if (prevTotalTime === 0) {
                if (this.vars.onStart) {
                    if (this._totalTime !== 0) {
                        if (!suppressEvents) {
                            this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _blankArray)
                        }
                    }
                }
            }
            if (this._time >= prevTime) {
                tween = this._first;
                while (tween) {
                    next = tween._next;
                    if (this._paused && !prevPaused) {
                        break
                    } else {
                        if (tween._active || (tween._startTime <= this._time && !tween._paused && !tween._gc)) {
                            if (!tween._reversed) {
                                tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force)
                            } else {
                                tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force)
                            }
                        }
                    }
                    tween = next
                }
            } else {
                tween = this._last;
                while (tween) {
                    next = tween._prev;
                    if (this._paused && !prevPaused) {
                        break
                    } else {
                        if (tween._active || (tween._startTime <= prevTime && !tween._paused && !tween._gc)) {
                            if (!tween._reversed) {
                                tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force)
                            } else {
                                tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force)
                            }
                        }
                    }
                    tween = next
                }
            } if (this._onUpdate) {
                if (!suppressEvents) {
                    if (_lazyTweens.length) {
                        _lazyRender()
                    }
                    this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _blankArray)
                }
            }
            if (callback) {
                if (!this._locked) {
                    if (!this._gc) {
                        if (prevStart === this._startTime || prevTimeScale !== this._timeScale) {
                            if (this._time === 0 || totalDur >= this.totalDuration()) {
                                if (isComplete) {
                                    if (_lazyTweens.length) {
                                        _lazyRender()
                                    }
                                    if (this._timeline.autoRemoveChildren) {
                                        this._enabled(false, false)
                                    }
                                    this._active = false
                                }
                                if (!suppressEvents && this.vars[callback]) {
                                    this.vars[callback].apply(this.vars[callback + "Scope"] || this, this.vars[callback + "Params"] || _blankArray)
                                }
                            }
                        }
                    }
                }
            }
        };
        p.getActive = function (nested, tweens, timelines) {
            if (nested == null) {
                nested = true
            }
            if (tweens == null) {
                tweens = true
            }
            if (timelines == null) {
                timelines = false
            }
            var a = [],
                all = this.getChildren(nested, tweens, timelines),
                cnt = 0,
                l = all.length,
                i, tween;
            for (i = 0; i < l; i++) {
                tween = all[i];
                if (tween.isActive()) {
                    a[cnt++] = tween
                }
            }
            return a
        };
        p.getLabelAfter = function (time) {
            if (!time) {
                if (time !== 0) {
                    time = this._time
                }
            }
            var labels = this.getLabelsArray(),
                l = labels.length,
                i;
            for (i = 0; i < l; i++) {
                if (labels[i].time > time) {
                    return labels[i].name
                }
            }
            return null
        };
        p.getLabelBefore = function (time) {
            if (time == null) {
                time = this._time
            }
            var labels = this.getLabelsArray(),
                i = labels.length;
            while (--i > -1) {
                if (labels[i].time < time) {
                    return labels[i].name
                }
            }
            return null
        };
        p.getLabelsArray = function () {
            var a = [],
                cnt = 0,
                p;
            for (p in this._labels) {
                a[cnt++] = {
                    time: this._labels[p],
                    name: p
                }
            }
            a.sort(function (a, b) {
                return a.time - b.time
            });
            return a
        };
        p.progress = function (value) {
            return (!arguments.length) ? this._time / this.duration() : this.totalTime(this.duration() * ((this._yoyo && (this._cycle & 1) !== 0) ? 1 - value : value) + (this._cycle * (this._duration + this._repeatDelay)), false)
        };
        p.totalProgress = function (value) {
            return (!arguments.length) ? this._totalTime / this.totalDuration() : this.totalTime(this.totalDuration() * value, false)
        };
        p.totalDuration = function (value) {
            if (!arguments.length) {
                if (this._dirty) {
                    TimelineLite.prototype.totalDuration.call(this);
                    this._totalDuration = (this._repeat === -1) ? 999999999999 : this._duration * (this._repeat + 1) + (this._repeatDelay * this._repeat)
                }
                return this._totalDuration
            }
            return (this._repeat === -1) ? this : this.duration((value - (this._repeat * this._repeatDelay)) / (this._repeat + 1))
        };
        p.time = function (value, suppressEvents) {
            if (!arguments.length) {
                return this._time
            }
            if (this._dirty) {
                this.totalDuration()
            }
            if (value > this._duration) {
                value = this._duration
            }
            if (this._yoyo && (this._cycle & 1) !== 0) {
                value = (this._duration - value) + (this._cycle * (this._duration + this._repeatDelay))
            } else {
                if (this._repeat !== 0) {
                    value += this._cycle * (this._duration + this._repeatDelay)
                }
            }
            return this.totalTime(value, suppressEvents)
        };
        p.repeat = function (value) {
            if (!arguments.length) {
                return this._repeat
            }
            this._repeat = value;
            return this._uncache(true)
        };
        p.repeatDelay = function (value) {
            if (!arguments.length) {
                return this._repeatDelay
            }
            this._repeatDelay = value;
            return this._uncache(true)
        };
        p.yoyo = function (value) {
            if (!arguments.length) {
                return this._yoyo
            }
            this._yoyo = value;
            return this
        };
        p.currentLabel = function (value) {
            if (!arguments.length) {
                return this.getLabelBefore(this._time + 1e-8)
            }
            return this.seek(value, true)
        };
        return TimelineMax
    }, true);
    (function () {
        var _RAD2DEG = 180 / Math.PI,
            _r1 = [],
            _r2 = [],
            _r3 = [],
            _corProps = {}, Segment = function (a, b, c, d) {
                this.a = a;
                this.b = b;
                this.c = c;
                this.d = d;
                this.da = d - a;
                this.ca = c - a;
                this.ba = b - a
            }, _correlate = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
            cubicToQuadratic = function (a, b, c, d) {
                var q1 = {
                    a: a
                }, q2 = {}, q3 = {}, q4 = {
                        c: d
                    }, mab = (a + b) / 2,
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
                return [q1, q2, q3, q4]
            }, _calculateControlPoints = function (a, curviness, quad, basic, correlate) {
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
                        mm = p2 - (m1 + (((m2 - m1) * ((r1 * 3 / (r1 + r2)) + 0.5) / 4) || 0))
                    } else {
                        m1 = p2 - (p2 - p1) * curviness * 0.5;
                        m2 = p2 + (p3 - p2) * curviness * 0.5;
                        mm = p2 - (m1 + m2) / 2
                    }
                    m1 += mm;
                    m2 += mm;
                    seg.c = cp2 = m1;
                    if (i !== 0) {
                        seg.b = cp1
                    } else {
                        seg.b = cp1 = seg.a + (seg.c - seg.a) * 0.6
                    }
                    seg.da = p2 - p1;
                    seg.ca = cp2 - p1;
                    seg.ba = cp1 - p1;
                    if (quad) {
                        qb = cubicToQuadratic(p1, cp1, cp2, p2);
                        a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
                        ii += 4
                    } else {
                        ii++
                    }
                    cp1 = m2
                }
                seg = a[ii];
                seg.b = cp1;
                seg.c = cp1 + (seg.d - cp1) * 0.4;
                seg.da = seg.d - seg.a;
                seg.ca = seg.c - seg.a;
                seg.ba = cp1 - seg.a;
                if (quad) {
                    qb = cubicToQuadratic(seg.a, cp1, seg.c, seg.d);
                    a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3])
                }
            }, _parseAnchors = function (values, p, correlate, prepend) {
                var a = [],
                    l, i, p1, p2, p3, tmp;
                if (prepend) {
                    values = [prepend].concat(values);
                    i = values.length;
                    while (--i > -1) {
                        if (typeof ((tmp = values[i][p])) === "string") {
                            if (tmp.charAt(1) === "=") {
                                values[i][p] = prepend[p] + Number(tmp.charAt(0) + tmp.substr(2))
                            }
                        }
                    }
                }
                l = values.length - 2;
                if (l < 0) {
                    a[0] = new Segment(values[0][p], 0, 0, values[(l < -1) ? 0 : 1][p]);
                    return a
                }
                for (i = 0; i < l; i++) {
                    p1 = values[i][p];
                    p2 = values[i + 1][p];
                    a[i] = new Segment(p1, 0, 0, p2);
                    if (correlate) {
                        p3 = values[i + 2][p];
                        _r1[i] = (_r1[i] || 0) + (p2 - p1) * (p2 - p1);
                        _r2[i] = (_r2[i] || 0) + (p3 - p2) * (p3 - p2)
                    }
                }
                a[i] = new Segment(values[i][p], 0, 0, values[i + 1][p]);
                return a
            }, bezierThrough = function (values, curviness, quadratic, basic, correlate, prepend) {
                var obj = {}, props = [],
                    first = prepend || values[0],
                    i, p, a, j, r, l, seamless, last;
                correlate = (typeof (correlate) === "string") ? "," + correlate + "," : _correlate;
                if (curviness == null) {
                    curviness = 1
                }
                for (p in values[0]) {
                    props.push(p)
                }
                if (values.length > 1) {
                    last = values[values.length - 1];
                    seamless = true;
                    i = props.length;
                    while (--i > -1) {
                        p = props[i];
                        if (Math.abs(first[p] - last[p]) > 0.05) {
                            seamless = false;
                            break
                        }
                    }
                    if (seamless) {
                        values = values.concat();
                        if (prepend) {
                            values.unshift(prepend)
                        }
                        values.push(values[1]);
                        prepend = values[values.length - 3]
                    }
                }
                _r1.length = _r2.length = _r3.length = 0;
                i = props.length;
                while (--i > -1) {
                    p = props[i];
                    _corProps[p] = (correlate.indexOf("," + p + ",") !== -1);
                    obj[p] = _parseAnchors(values, p, _corProps[p], prepend)
                }
                i = _r1.length;
                while (--i > -1) {
                    _r1[i] = Math.sqrt(_r1[i]);
                    _r2[i] = Math.sqrt(_r2[i])
                }
                if (!basic) {
                    i = props.length;
                    while (--i > -1) {
                        if (_corProps[p]) {
                            a = obj[props[i]];
                            l = a.length - 1;
                            for (j = 0; j < l; j++) {
                                r = a[j + 1].da / _r2[j] + a[j].da / _r1[j];
                                _r3[j] = (_r3[j] || 0) + r * r
                            }
                        }
                    }
                    i = _r3.length;
                    while (--i > -1) {
                        _r3[i] = Math.sqrt(_r3[i])
                    }
                }
                i = props.length;
                j = quadratic ? 4 : 1;
                while (--i > -1) {
                    p = props[i];
                    a = obj[p];
                    _calculateControlPoints(a, curviness, quadratic, basic, _corProps[p]);
                    if (seamless) {
                        a.splice(0, j);
                        a.splice(a.length - j, j)
                    }
                }
                return obj
            }, _parseBezierData = function (values, type, prepend) {
                type = type || "soft";
                var obj = {}, inc = (type === "cubic") ? 3 : 2,
                    soft = (type === "soft"),
                    props = [],
                    a, b, c, d, cur, i, j, l, p, cnt, tmp;
                if (soft && prepend) {
                    values = [prepend].concat(values)
                }
                if (values == null || values.length < inc + 1) {
                    throw "invalid Bezier data"
                }
                for (p in values[0]) {
                    props.push(p)
                }
                i = props.length;
                while (--i > -1) {
                    p = props[i];
                    obj[p] = cur = [];
                    cnt = 0;
                    l = values.length;
                    for (j = 0; j < l; j++) {
                        a = (prepend == null) ? values[j][p] : (typeof ((tmp = values[j][p])) === "string" && tmp.charAt(1) === "=") ? prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)) : Number(tmp);
                        if (soft) {
                            if (j > 1) {
                                if (j < l - 1) {
                                    cur[cnt++] = (a + cur[cnt - 2]) / 2
                                }
                            }
                        }
                        cur[cnt++] = a
                    }
                    l = cnt - inc + 1;
                    cnt = 0;
                    for (j = 0; j < l; j += inc) {
                        a = cur[j];
                        b = cur[j + 1];
                        c = cur[j + 2];
                        d = (inc === 2) ? 0 : cur[j + 3];
                        cur[cnt++] = tmp = (inc === 3) ? new Segment(a, b, c, d) : new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c)
                    }
                    cur.length = cnt
                }
                return obj
            }, _addCubicLengths = function (a, steps, resolution) {
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
                        steps[index] = (steps[index] || 0) + d * d
                    }
                }
            }, _parseLengthData = function (obj, resolution) {
                resolution = resolution >> 0 || 6;
                var a = [],
                    lengths = [],
                    d = 0,
                    total = 0,
                    threshold = resolution - 1,
                    segments = [],
                    curLS = [],
                    p, i, l, index;
                for (p in obj) {
                    _addCubicLengths(obj[p], a, resolution)
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
                        curLS = []
                    }
                }
                return {
                    length: total,
                    lengths: lengths,
                    segments: segments
                }
            }, BezierPlugin = _gsScope._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.3",
                API: 2,
                global: true,
                init: function (target, vars, tween) {
                    this._target = target;
                    if (vars instanceof Array) {
                        vars = {
                            values: vars
                        }
                    }
                    this._func = {};
                    this._round = {};
                    this._props = [];
                    this._timeRes = (vars.timeResolution == null) ? 6 : parseInt(vars.timeResolution, 10);
                    var values = vars.values || [],
                        first = {}, second = values[0],
                        autoRotate = vars.autoRotate || tween.vars.orientToBezier,
                        p, isFunc, i, j, prepend;
                    this._autoRotate = autoRotate ? (autoRotate instanceof Array) ? autoRotate : [["x", "y", "rotation", ((autoRotate === true) ? 0 : Number(autoRotate) || 0)]] : null;
                    for (p in second) {
                        this._props.push(p)
                    }
                    i = this._props.length;
                    while (--i > -1) {
                        p = this._props[i];
                        this._overwriteProps.push(p);
                        isFunc = this._func[p] = (typeof (target[p]) === "function");
                        first[p] = (!isFunc) ? parseFloat(target[p]) : target[((p.indexOf("set") || typeof (target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3))]();
                        if (!prepend) {
                            if (first[p] !== values[0][p]) {
                                prepend = first
                            }
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
                        this._prec = 1 / this._curSeg.length
                    }
                    if ((autoRotate = this._autoRotate)) {
                        this._initialRotations = [];
                        if (!(autoRotate[0] instanceof Array)) {
                            this._autoRotate = autoRotate = [autoRotate]
                        }
                        i = autoRotate.length;
                        while (--i > -1) {
                            for (j = 0; j < 3; j++) {
                                p = autoRotate[i][j];
                                this._func[p] = (typeof (target[p]) === "function") ? target[((p.indexOf("set") || typeof (target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3))] : false
                            }
                            p = autoRotate[i][2];
                            this._initialRotations[i] = this._func[p] ? this._func[p].call(this._target) : this._target[p]
                        }
                    }
                    this._startRatio = tween.vars.runBackwards ? 1 : 0;
                    return true
                },
                set: function (v) {
                    var segments = this._segCount,
                        func = this._func,
                        target = this._target,
                        notStart = (v !== this._startRatio),
                        curIndex, inv, i, p, b, t, val, l, lengths, curSeg;
                    if (!this._timeRes) {
                        curIndex = (v < 0) ? 0 : (v >= 1) ? segments - 1 : (segments * v) >> 0;
                        t = (v - (curIndex * (1 / segments))) * segments
                    } else {
                        lengths = this._lengths;
                        curSeg = this._curSeg;
                        v *= this._length;
                        i = this._li;
                        if (v > this._l2 && i < segments - 1) {
                            l = segments - 1;
                            while (i < l && (this._l2 = lengths[++i]) <= v) {}
                            this._l1 = lengths[i - 1];
                            this._li = i;
                            this._curSeg = curSeg = this._segments[i];
                            this._s2 = curSeg[(this._s1 = this._si = 0)]
                        } else {
                            if (v < this._l1 && i > 0) {
                                while (i > 0 && (this._l1 = lengths[--i]) >= v) {}
                                if (i === 0 && v < this._l1) {
                                    this._l1 = 0
                                } else {
                                    i++
                                }
                                this._l2 = lengths[i];
                                this._li = i;
                                this._curSeg = curSeg = this._segments[i];
                                this._s1 = curSeg[(this._si = curSeg.length - 1) - 1] || 0;
                                this._s2 = curSeg[this._si]
                            }
                        }
                        curIndex = i;
                        v -= this._l1;
                        i = this._si;
                        if (v > this._s2 && i < curSeg.length - 1) {
                            l = curSeg.length - 1;
                            while (i < l && (this._s2 = curSeg[++i]) <= v) {}
                            this._s1 = curSeg[i - 1];
                            this._si = i
                        } else {
                            if (v < this._s1 && i > 0) {
                                while (i > 0 && (this._s1 = curSeg[--i]) >= v) {}
                                if (i === 0 && v < this._s1) {
                                    this._s1 = 0
                                } else {
                                    i++
                                }
                                this._s2 = curSeg[i];
                                this._si = i
                            }
                        }
                        t = (i + (v - this._s1) / (this._s2 - this._s1)) * this._prec
                    }
                    inv = 1 - t;
                    i = this._props.length;
                    while (--i > -1) {
                        p = this._props[i];
                        b = this._beziers[p][curIndex];
                        val = (t * t * b.da + 3 * inv * (t * b.ca + inv * b.ba)) * t + b.a;
                        if (this._round[p]) {
                            val = Math.round(val)
                        }
                        if (func[p]) {
                            target[p](val)
                        } else {
                            target[p] = val
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
                            if (b && b2) {
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
                                    target[p](val)
                                } else {
                                    target[p] = val
                                }
                            }
                        }
                    }
                }
            }),
            p = BezierPlugin.prototype;
        BezierPlugin.bezierThrough = bezierThrough;
        BezierPlugin.cubicToQuadratic = cubicToQuadratic;
        BezierPlugin._autoCSS = true;
        BezierPlugin.quadraticToCubic = function (a, b, c) {
            return new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c)
        };
        BezierPlugin._cssRegister = function () {
            var CSSPlugin = _gsScope._gsDefine.globals.CSSPlugin;
            if (!CSSPlugin) {
                return
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
                        }
                    }
                    plugin = new BezierPlugin();
                    var values = e.values,
                        l = values.length - 1,
                        pluginValues = [],
                        v = {}, i, p, data;
                    if (l < 0) {
                        return pt
                    }
                    for (i = 0; i <= l; i++) {
                        data = _parseToProxy(t, values[i], cssp, pt, plugin, (l !== i));
                        pluginValues[i] = data.end
                    }
                    for (p in e) {
                        v[p] = e[p]
                    }
                    v.values = pluginValues;
                    pt = new CSSPropTween(t, "bezier", 0, 0, data.pt, 2);
                    pt.data = data;
                    pt.plugin = plugin;
                    pt.setRatio = _setPluginRatio;
                    if (v.autoRotate === 0) {
                        v.autoRotate = true
                    }
                    if (v.autoRotate && !(v.autoRotate instanceof Array)) {
                        i = (v.autoRotate === true) ? 0 : Number(v.autoRotate);
                        v.autoRotate = (data.end.left != null) ? [["left", "top", "rotation", i, false]] : (data.end.x != null) ? [["x", "y", "rotation", i, false]] : false
                    }
                    if (v.autoRotate) {
                        if (!cssp._transform) {
                            cssp._enableTransforms(false)
                        }
                        data.autoRotate = cssp._target._gsTransform
                    }
                    plugin._onInitTween(data.proxy, v, cssp._tween);
                    return pt
                }
            })
        };
        p._roundProps = function (lookup, value) {
            var op = this._overwriteProps,
                i = op.length;
            while (--i > -1) {
                if (lookup[op[i]] || lookup.bezier || lookup.bezierThrough) {
                    this._round[op[i]] = value
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
                            a.splice(i, 1)
                        }
                    }
                }
            }
            return this._super._kill.call(this, lookup)
        }
    }());
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (TweenPlugin, TweenLite) {
        var CSSPlugin = function () {
            TweenPlugin.call(this, "css");
            this._overwriteProps.length = 0;
            this.setRatio = CSSPlugin.prototype.setRatio
        }, _hasPriority, _suffixMap, _cs, _overwriteProps, _specialProps = {}, p = CSSPlugin.prototype = new TweenPlugin("css");
        p.constructor = CSSPlugin;
        CSSPlugin.version = "1.13.1";
        CSSPlugin.API = 2;
        CSSPlugin.defaultTransformPerspective = 0;
        CSSPlugin.defaultSkewType = "compensated";
        p = "px";
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
            _valuesExp = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            _NaNExp = /[^\d\-\.]/g,
            _suffixExp = /(?:\d|\-|\+|=|#|\.)*/g,
            _opacityExp = /opacity *= *([^)]*)/i,
            _opacityValExp = /opacity:([^;]*)/i,
            _alphaFilterExp = /alpha\(opacity *=.+?\)/i,
            _rgbhslExp = /^(rgb|hsl)/,
            _capsExp = /([A-Z])/g,
            _camelExp = /-([a-z])/gi,
            _urlExp = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            _camelFunc = function (s, g) {
                return g.toUpperCase()
            }, _horizExp = /(?:Left|Right|Width)/i,
            _ieGetMatrixExp = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            _ieSetMatrixExp = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            _commasOutsideParenExp = /,(?=[^\)]*(?:\(|$))/gi,
            _DEG2RAD = Math.PI / 180,
            _RAD2DEG = 180 / Math.PI,
            _forcePT = {}, _doc = document,
            _tempDiv = _doc.createElement("div"),
            _tempImg = _doc.createElement("img"),
            _internals = CSSPlugin._internals = {
                _specialProps: _specialProps
            }, _agent = navigator.userAgent,
            _autoRound, _reqSafariFix, _isSafari, _isFirefox, _isSafariLT6, _ieVers, _supportsOpacity = (function () {
                var i = _agent.indexOf("Android"),
                    d = _doc.createElement("div"),
                    a;
                _isSafari = (_agent.indexOf("Safari") !== -1 && _agent.indexOf("Chrome") === -1 && (i === -1 || Number(_agent.substr(i + 8, 1)) > 3));
                _isSafariLT6 = (_isSafari && (Number(_agent.substr(_agent.indexOf("Version/") + 8, 1)) < 6));
                _isFirefox = (_agent.indexOf("Firefox") !== -1);
                if ((/MSIE ([0-9]{1,}[\.0-9]{0,})/).exec(_agent)) {
                    _ieVers = parseFloat(RegExp.$1)
                }
                d.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>";
                a = d.getElementsByTagName("a")[0];
                return a ? /^0.55/.test(a.style.opacity) : false
            }()),
            _getIEOpacity = function (v) {
                return (_opacityExp.test(((typeof (v) === "string") ? v : (v.currentStyle ? v.currentStyle.filter : v.style.filter) || "")) ? (parseFloat(RegExp.$1) / 100) : 1)
            }, _log = function (s) {
                if (window.console) {
                    console.log(s)
                }
            }, _prefixCSS = "",
            _prefix = "",
            _checkPropPrefix = function (p, e) {
                e = e || _tempDiv;
                var s = e.style,
                    a, i;
                if (s[p] !== undefined) {
                    return p
                }
                p = p.charAt(0).toUpperCase() + p.substr(1);
                a = ["O", "Moz", "ms", "Ms", "Webkit"];
                i = 5;
                while (--i > -1 && s[a[i] + p] === undefined) {}
                if (i >= 0) {
                    _prefix = (i === 3) ? "ms" : a[i];
                    _prefixCSS = "-" + _prefix.toLowerCase() + "-";
                    return _prefix + p
                }
                return null
            }, _getComputedStyle = _doc.defaultView ? _doc.defaultView.getComputedStyle : function () {}, _getStyle = CSSPlugin.getStyle = function (t, p, cs, calc, dflt) {
                var rv;
                if (!_supportsOpacity) {
                    if (p === "opacity") {
                        return _getIEOpacity(t)
                    }
                }
                if (!calc && t.style[p]) {
                    rv = t.style[p]
                } else {
                    if ((cs = cs || _getComputedStyle(t))) {
                        rv = cs[p] || cs.getPropertyValue(p) || cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase())
                    } else {
                        if (t.currentStyle) {
                            rv = t.currentStyle[p]
                        }
                    }
                }
                return (dflt != null && (!rv || rv === "none" || rv === "auto" || rv === "auto auto")) ? dflt : rv
            }, _convertToPixels = _internals.convertToPixels = function (t, p, v, sfx, recurse) {
                if (sfx === "px" || !sfx) {
                    return v
                }
                if (sfx === "auto" || !v) {
                    return 0
                }
                var horiz = _horizExp.test(p),
                    node = t,
                    style = _tempDiv.style,
                    neg = (v < 0),
                    pix, cache, time;
                if (neg) {
                    v = -v
                }
                if (sfx === "%" && p.indexOf("border") !== -1) {
                    pix = (v / 100) * (horiz ? t.clientWidth : t.clientHeight)
                } else {
                    style.cssText = "border:0 solid red;position:" + _getStyle(t, "position") + ";line-height:0;";
                    if (sfx === "%" || !node.appendChild) {
                        node = t.parentNode || _doc.body;
                        cache = node._gsCache;
                        time = TweenLite.ticker.frame;
                        if (cache && horiz && cache.time === time) {
                            return cache.width * v / 100
                        }
                        style[(horiz ? "width" : "height")] = v + sfx
                    } else {
                        style[(horiz ? "borderLeftWidth" : "borderTopWidth")] = v + sfx
                    }
                    node.appendChild(_tempDiv);
                    pix = parseFloat(_tempDiv[(horiz ? "offsetWidth" : "offsetHeight")]);
                    node.removeChild(_tempDiv);
                    if (horiz && sfx === "%" && CSSPlugin.cacheWidths !== false) {
                        cache = node._gsCache = node._gsCache || {};
                        cache.time = time;
                        cache.width = pix / v * 100
                    }
                    if (pix === 0 && !recurse) {
                        pix = _convertToPixels(t, p, v, sfx, true)
                    }
                }
                return neg ? -pix : pix
            }, _calculateOffset = _internals.calculateOffset = function (t, p, cs) {
                if (_getStyle(t, "position", cs) !== "absolute") {
                    return 0
                }
                var dim = ((p === "left") ? "Left" : "Top"),
                    v = _getStyle(t, "margin" + dim, cs);
                return t["offset" + dim] - (_convertToPixels(t, p, parseFloat(v), v.replace(_suffixExp, "")) || 0)
            }, _getAllStyles = function (t, cs) {
                var s = {}, i, tr;
                if ((cs = cs || _getComputedStyle(t, null))) {
                    if ((i = cs.length)) {
                        while (--i > -1) {
                            s[cs[i].replace(_camelExp, _camelFunc)] = cs.getPropertyValue(cs[i])
                        }
                    } else {
                        for (i in cs) {
                            s[i] = cs[i]
                        }
                    }
                } else {
                    if ((cs = t.currentStyle || t.style)) {
                        for (i in cs) {
                            if (typeof (i) === "string" && s[i] === undefined) {
                                s[i.replace(_camelExp, _camelFunc)] = cs[i]
                            }
                        }
                    }
                } if (!_supportsOpacity) {
                    s.opacity = _getIEOpacity(t)
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
                    s.scaleZ = tr.scaleZ
                }
                if (s.filters) {
                    delete s.filters
                }
                return s
            }, _cssDif = function (t, s1, s2, vars, forceLookup) {
                var difs = {}, style = t.style,
                    val, p, mpt;
                for (p in s2) {
                    if (p !== "cssText") {
                        if (p !== "length") {
                            if (isNaN(p)) {
                                if (s1[p] !== (val = s2[p]) || (forceLookup && forceLookup[p])) {
                                    if (p.indexOf("Origin") === -1) {
                                        if (typeof (val) === "number" || typeof (val) === "string") {
                                            difs[p] = (val === "auto" && (p === "left" || p === "top")) ? _calculateOffset(t, p) : ((val === "" || val === "auto" || val === "none") && typeof (s1[p]) === "string" && s1[p].replace(_NaNExp, "") !== "") ? 0 : val;
                                            if (style[p] !== undefined) {
                                                mpt = new MiniPropTween(style, p, style[p], mpt)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (vars) {
                    for (p in vars) {
                        if (p !== "className") {
                            difs[p] = vars[p]
                        }
                    }
                }
                return {
                    difs: difs,
                    firstMPT: mpt
                }
            }, _dimensions = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            }, _margins = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            _getDimension = function (t, p, cs) {
                var v = parseFloat((p === "width") ? t.offsetWidth : t.offsetHeight),
                    a = _dimensions[p],
                    i = a.length;
                cs = cs || _getComputedStyle(t, null);
                while (--i > -1) {
                    v -= parseFloat(_getStyle(t, "padding" + a[i], cs, true)) || 0;
                    v -= parseFloat(_getStyle(t, "border" + a[i] + "Width", cs, true)) || 0
                }
                return v
            }, _parsePosition = function (v, recObj) {
                if (v == null || v === "" || v === "auto" || v === "auto auto") {
                    v = "0 0"
                }
                var a = v.split(" "),
                    x = (v.indexOf("left") !== -1) ? "0%" : (v.indexOf("right") !== -1) ? "100%" : a[0],
                    y = (v.indexOf("top") !== -1) ? "0%" : (v.indexOf("bottom") !== -1) ? "100%" : a[1];
                if (y == null) {
                    y = "0"
                } else {
                    if (y === "center") {
                        y = "50%"
                    }
                } if (x === "center" || (isNaN(parseFloat(x)) && (x + "").indexOf("=") === -1)) {
                    x = "50%"
                }
                if (recObj) {
                    recObj.oxp = (x.indexOf("%") !== -1);
                    recObj.oyp = (y.indexOf("%") !== -1);
                    recObj.oxr = (x.charAt(1) === "=");
                    recObj.oyr = (y.charAt(1) === "=");
                    recObj.ox = parseFloat(x.replace(_NaNExp, ""));
                    recObj.oy = parseFloat(y.replace(_NaNExp, ""))
                }
                return x + " " + y + ((a.length > 2) ? " " + a[2] : "")
            }, _parseChange = function (e, b) {
                return (typeof (e) === "string" && e.charAt(1) === "=") ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(b)
            }, _parseVal = function (v, d) {
                return (v == null) ? d : (typeof (v) === "string" && v.charAt(1) === "=") ? parseInt(v.charAt(0) + "1", 10) * Number(v.substr(2)) + d : parseFloat(v)
            }, _parseAngle = function (v, d, p, directionalEnd) {
                var min = 0.000001,
                    cap, split, dif, result;
                if (v == null) {
                    result = d
                } else {
                    if (typeof (v) === "number") {
                        result = v
                    } else {
                        cap = 360;
                        split = v.split("_");
                        dif = Number(split[0].replace(_NaNExp, "")) * ((v.indexOf("rad") === -1) ? 1 : _RAD2DEG) - ((v.charAt(1) === "=") ? 0 : d);
                        if (split.length) {
                            if (directionalEnd) {
                                directionalEnd[p] = d + dif
                            }
                            if (v.indexOf("short") !== -1) {
                                dif = dif % cap;
                                if (dif !== dif % (cap / 2)) {
                                    dif = (dif < 0) ? dif + cap : dif - cap
                                }
                            }
                            if (v.indexOf("_cw") !== -1 && dif < 0) {
                                dif = ((dif + cap * 9999999999) % cap) - ((dif / cap) | 0) * cap
                            } else {
                                if (v.indexOf("ccw") !== -1 && dif > 0) {
                                    dif = ((dif - cap * 9999999999) % cap) - ((dif / cap) | 0) * cap
                                }
                            }
                        }
                        result = d + dif
                    }
                } if (result < min && result > -min) {
                    result = 0
                }
                return result
            }, _colorLookup = {
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
            }, _hue = function (h, m1, m2) {
                h = (h < 0) ? h + 1 : (h > 1) ? h - 1 : h;
                return ((((h * 6 < 1) ? m1 + (m2 - m1) * h * 6 : (h < 0.5) ? m2 : (h * 3 < 2) ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * 255) + 0.5) | 0
            }, _parseColor = function (v) {
                var c1, c2, c3, h, s, l;
                if (!v || v === "") {
                    return _colorLookup.black
                }
                if (typeof (v) === "number") {
                    return [v >> 16, (v >> 8) & 255, v & 255]
                }
                if (v.charAt(v.length - 1) === ",") {
                    v = v.substr(0, v.length - 1)
                }
                if (_colorLookup[v]) {
                    return _colorLookup[v]
                }
                if (v.charAt(0) === "#") {
                    if (v.length === 4) {
                        c1 = v.charAt(1), c2 = v.charAt(2), c3 = v.charAt(3);
                        v = "#" + c1 + c1 + c2 + c2 + c3 + c3
                    }
                    v = parseInt(v.substr(1), 16);
                    return [v >> 16, (v >> 8) & 255, v & 255]
                }
                if (v.substr(0, 3) === "hsl") {
                    v = v.match(_numExp);
                    h = (Number(v[0]) % 360) / 360;
                    s = Number(v[1]) / 100;
                    l = Number(v[2]) / 100;
                    c2 = (l <= 0.5) ? l * (s + 1) : l + s - l * s;
                    c1 = l * 2 - c2;
                    if (v.length > 3) {
                        v[3] = Number(v[3])
                    }
                    v[0] = _hue(h + 1 / 3, c1, c2);
                    v[1] = _hue(h, c1, c2);
                    v[2] = _hue(h - 1 / 3, c1, c2);
                    return v
                }
                v = v.match(_numExp) || _colorLookup.transparent;
                v[0] = Number(v[0]);
                v[1] = Number(v[1]);
                v[2] = Number(v[2]);
                if (v.length > 3) {
                    v[3] = Number(v[3])
                }
                return v
            }, _colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (p in _colorLookup) {
            _colorExp += "|" + p + "\\b"
        }
        _colorExp = new RegExp(_colorExp + ")", "gi");
        var _getFormatter = function (dflt, clr, collapsible, multi) {
            if (dflt == null) {
                return function (v) {
                    return v
                }
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
                    return v
                }
            }
            if (clr) {
                formatter = function (v) {
                    var color, vals, i, a;
                    if (typeof (v) === "number") {
                        v += dSfx
                    } else {
                        if (multi && _commasOutsideParenExp.test(v)) {
                            a = v.replace(_commasOutsideParenExp, "|").split("|");
                            for (i = 0; i < a.length; i++) {
                                a[i] = formatter(a[i])
                            }
                            return a.join(",")
                        }
                    }
                    color = (v.match(_colorExp) || [dColor])[0];
                    vals = v.split(color).join("").match(_valuesExp) || [];
                    i = vals.length;
                    if (numVals > i--) {
                        while (++i < numVals) {
                            vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i]
                        }
                    }
                    return pfx + vals.join(delim) + delim + color + sfx + (v.indexOf("inset") !== -1 ? " inset" : "")
                };
                return formatter
            }
            formatter = function (v) {
                var vals, a, i;
                if (typeof (v) === "number") {
                    v += dSfx
                } else {
                    if (multi && _commasOutsideParenExp.test(v)) {
                        a = v.replace(_commasOutsideParenExp, "|").split("|");
                        for (i = 0; i < a.length; i++) {
                            a[i] = formatter(a[i])
                        }
                        return a.join(",")
                    }
                }
                vals = v.match(_valuesExp) || [];
                i = vals.length;
                if (numVals > i--) {
                    while (++i < numVals) {
                        vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i]
                    }
                }
                return pfx + vals.join(delim) + sfx
            };
            return formatter
        }, _getEdgeParser = function (props) {
                props = props.split(",");
                return function (t, e, p, cssp, pt, plugin, vars) {
                    var a = (e + "").split(" "),
                        i;
                    vars = {};
                    for (i = 0; i < 4; i++) {
                        vars[props[i]] = a[i] = a[i] || a[(((i - 1) / 2) >> 0)]
                    }
                    return cssp.parse(t, vars, pt, plugin)
                }
            }, _setPluginRatio = _internals._setPluginRatio = function (v) {
                this.plugin.setRatio(v);
                var d = this.data,
                    proxy = d.proxy,
                    mpt = d.firstMPT,
                    min = 0.000001,
                    val, pt, i, str;
                while (mpt) {
                    val = proxy[mpt.v];
                    if (mpt.r) {
                        val = Math.round(val)
                    } else {
                        if (val < min && val > -min) {
                            val = 0
                        }
                    }
                    mpt.t[mpt.p] = val;
                    mpt = mpt._next
                }
                if (d.autoRotate) {
                    d.autoRotate.rotation = proxy.rotation
                }
                if (v === 1) {
                    mpt = d.firstMPT;
                    while (mpt) {
                        pt = mpt.t;
                        if (!pt.type) {
                            pt.e = pt.s + pt.xs0
                        } else {
                            if (pt.type === 1) {
                                str = pt.xs0 + pt.s + pt.xs1;
                                for (i = 1; i < pt.l; i++) {
                                    str += pt["xn" + i] + pt["xs" + (i + 1)]
                                }
                                pt.e = str
                            }
                        }
                        mpt = mpt._next
                    }
                }
            }, MiniPropTween = function (t, p, v, next, r) {
                this.t = t;
                this.p = p;
                this.v = v;
                this.r = r;
                if (next) {
                    next._prev = this;
                    this._next = next
                }
            }, _parseToProxy = _internals._parseToProxy = function (t, vars, cssp, pt, plugin, shallow) {
                var bpt = pt,
                    start = {}, end = {}, transform = cssp._transform,
                    oldForce = _forcePT,
                    i, p, xp, mpt, firstPT;
                cssp._transform = null;
                _forcePT = vars;
                pt = firstPT = cssp.parse(t, vars, pt, plugin);
                _forcePT = oldForce;
                if (shallow) {
                    cssp._transform = transform;
                    if (bpt) {
                        bpt._prev = null;
                        if (bpt._prev) {
                            bpt._prev._next = null
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
                            pt.c = 0
                        }
                        if (pt.type === 1) {
                            i = pt.l;
                            while (--i > 0) {
                                xp = "xn" + i;
                                p = pt.p + "_" + xp;
                                end[p] = pt.data[xp];
                                start[p] = pt[xp];
                                if (!shallow) {
                                    mpt = new MiniPropTween(pt, xp, p, mpt, pt.rxp[xp])
                                }
                            }
                        }
                    }
                    pt = pt._next
                }
                return {
                    proxy: start,
                    end: end,
                    firstMPT: mpt,
                    pt: firstPT
                }
            }, CSSPropTween = _internals.CSSPropTween = function (t, p, s, c, next, type, n, r, pr, b, e) {
                this.t = t;
                this.p = p;
                this.s = s;
                this.c = c;
                this.n = n || p;
                if (!(t instanceof CSSPropTween)) {
                    _overwriteProps.push(this.n)
                }
                this.r = r;
                this.type = type || 0;
                if (pr) {
                    this.pr = pr;
                    _hasPriority = true
                }
                this.b = (b === undefined) ? s : b;
                this.e = (e === undefined) ? s + c : e;
                if (next) {
                    this._next = next;
                    next._prev = this
                }
            }, _parseComplex = CSSPlugin.parseComplex = function (t, p, b, e, clrs, dflt, pt, pr, plugin, setRatio) {
                b = b || dflt || "";
                pt = new CSSPropTween(t, p, 0, 0, pt, (setRatio ? 2 : 1), null, false, pr, b, e);
                e += "";
                var ba = b.split(", ").join(",").split(" "),
                    ea = e.split(", ").join(",").split(" "),
                    l = ba.length,
                    autoRound = (_autoRound !== false),
                    i, xi, ni, bv, ev, bnums, enums, bn, rgba, temp, cv, str;
                if (e.indexOf(",") !== -1 || b.indexOf(",") !== -1) {
                    ba = ba.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
                    ea = ea.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
                    l = ba.length
                }
                if (l !== ea.length) {
                    ba = (dflt || "").split(" ");
                    l = ba.length
                }
                pt.plugin = plugin;
                pt.setRatio = setRatio;
                for (i = 0; i < l; i++) {
                    bv = ba[i];
                    ev = ea[i];
                    bn = parseFloat(bv);
                    if (bn || bn === 0) {
                        pt.appendXtra("", bn, _parseChange(ev, bn), ev.replace(_relNumExp, ""), (autoRound && ev.indexOf("px") !== -1), true)
                    } else {
                        if (clrs && (bv.charAt(0) === "#" || _colorLookup[bv] || _rgbhslExp.test(bv))) {
                            str = ev.charAt(ev.length - 1) === "," ? ")," : ")";
                            bv = _parseColor(bv);
                            ev = _parseColor(ev);
                            rgba = (bv.length + ev.length > 6);
                            if (rgba && !_supportsOpacity && ev[3] === 0) {
                                pt["xs" + pt.l] += pt.l ? " transparent" : "transparent";
                                pt.e = pt.e.split(ea[i]).join("transparent")
                            } else {
                                if (!_supportsOpacity) {
                                    rgba = false
                                }
                                pt.appendXtra((rgba ? "rgba(" : "rgb("), bv[0], ev[0] - bv[0], ",", true, true).appendXtra("", bv[1], ev[1] - bv[1], ",", true).appendXtra("", bv[2], ev[2] - bv[2], (rgba ? "," : str), true);
                                if (rgba) {
                                    bv = (bv.length < 4) ? 1 : bv[3];
                                    pt.appendXtra("", bv, ((ev.length < 4) ? 1 : ev[3]) - bv, str, false)
                                }
                            }
                        } else {
                            bnums = bv.match(_numExp);
                            if (!bnums) {
                                pt["xs" + pt.l] += pt.l ? " " + bv : bv
                            } else {
                                enums = ev.match(_relNumExp);
                                if (!enums || enums.length !== bnums.length) {
                                    return pt
                                }
                                ni = 0;
                                for (xi = 0; xi < bnums.length; xi++) {
                                    cv = bnums[xi];
                                    temp = bv.indexOf(cv, ni);
                                    pt.appendXtra(bv.substr(ni, temp - ni), Number(cv), _parseChange(enums[xi], cv), "", (autoRound && bv.substr(temp + cv.length, 2) === "px"), (xi === 0));
                                    ni = temp + cv.length
                                }
                                pt["xs" + pt.l] += bv.substr(ni)
                            }
                        }
                    }
                }
                if (e.indexOf("=") !== -1) {
                    if (pt.data) {
                        str = pt.xs0 + pt.data.s;
                        for (i = 1; i < pt.l; i++) {
                            str += pt["xs" + i] + pt.data["xn" + i]
                        }
                        pt.e = str + pt["xs" + i]
                    }
                }
                if (!pt.l) {
                    pt.type = -1;
                    pt.xs0 = pt.e
                }
                return pt.xfirst || pt
            }, i = 9;
        p = CSSPropTween.prototype;
        p.l = p.pr = 0;
        while (--i > 0) {
            p["xn" + i] = 0;
            p["xs" + i] = ""
        }
        p.xs0 = "";
        p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null;
        p.appendXtra = function (pfx, s, c, sfx, r, pad) {
            var pt = this,
                l = pt.l;
            pt["xs" + l] += (pad && l) ? " " + pfx : pfx || "";
            if (!c) {
                if (l !== 0 && !pt.plugin) {
                    pt["xs" + l] += s + (sfx || "");
                    return pt
                }
            }
            pt.l++;
            pt.type = pt.setRatio ? 2 : 1;
            pt["xs" + pt.l] = sfx || "";
            if (l > 0) {
                pt.data["xn" + l] = s + c;
                pt.rxp["xn" + l] = r;
                pt["xn" + l] = s;
                if (!pt.plugin) {
                    pt.xfirst = new CSSPropTween(pt, "xn" + l, s, c, pt.xfirst || pt, 0, pt.n, r, pt.pr);
                    pt.xfirst.xs0 = 0
                }
                return pt
            }
            pt.data = {
                s: s + c
            };
            pt.rxp = {};
            pt.s = s;
            pt.c = c;
            pt.r = r;
            return pt
        };
        var SpecialProp = function (p, options) {
            options = options || {};
            this.p = options.prefix ? _checkPropPrefix(p) || p : p;
            _specialProps[p] = _specialProps[this.p] = this;
            this.format = options.formatter || _getFormatter(options.defaultValue, options.color, options.collapsible, options.multi);
            if (options.parser) {
                this.parse = options.parser
            }
            this.clrs = options.color;
            this.multi = options.multi;
            this.keyword = options.keyword;
            this.dflt = options.defaultValue;
            this.pr = options.priority || 0
        }, _registerComplexSpecialProp = _internals._registerComplexSpecialProp = function (p, options, defaults) {
                if (typeof (options) !== "object") {
                    options = {
                        parser: defaults
                    }
                }
                var a = p.split(","),
                    d = options.defaultValue,
                    i, temp;
                defaults = defaults || [d];
                for (i = 0; i < a.length; i++) {
                    options.prefix = (i === 0 && options.prefix);
                    options.defaultValue = defaults[i] || d;
                    temp = new SpecialProp(a[i], options)
                }
            }, _registerPluginProp = function (p) {
                if (!_specialProps[p]) {
                    var pluginName = p.charAt(0).toUpperCase() + p.substr(1) + "Plugin";
                    _registerComplexSpecialProp(p, {
                        parser: function (t, e, p, cssp, pt, plugin, vars) {
                            var pluginClass = (_gsScope.GreenSockGlobals || _gsScope).com.greensock.plugins[pluginName];
                            if (!pluginClass) {
                                _log("Error: " + pluginName + " js file not loaded.");
                                return pt
                            }
                            pluginClass._cssRegister();
                            return _specialProps[p].parse(t, e, p, cssp, pt, plugin, vars)
                        }
                    })
                }
            };
        p = SpecialProp.prototype;
        p.parseComplex = function (t, b, e, pt, plugin, setRatio) {
            var kwd = this.keyword,
                i, ba, ea, l, bi, ei;
            if (this.multi) {
                if (_commasOutsideParenExp.test(e) || _commasOutsideParenExp.test(b)) {
                    ba = b.replace(_commasOutsideParenExp, "|").split("|");
                    ea = e.replace(_commasOutsideParenExp, "|").split("|")
                } else {
                    if (kwd) {
                        ba = [b];
                        ea = [e]
                    }
                }
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
                            e[i] += " " + kwd
                        }
                    }
                }
                b = ba.join(", ");
                e = ea.join(", ")
            }
            return _parseComplex(t, this.p, b, e, this.clrs, this.dflt, pt, this.pr, plugin, setRatio)
        };
        p.parse = function (t, e, p, cssp, pt, plugin, vars) {
            return this.parseComplex(t.style, this.format(_getStyle(t, this.p, _cs, false, this.dflt)), this.format(e), pt, plugin)
        };
        CSSPlugin.registerSpecialProp = function (name, onInitTween, priority) {
            _registerComplexSpecialProp(name, {
                parser: function (t, e, p, cssp, pt, plugin, vars) {
                    var rv = new CSSPropTween(t, p, 0, 0, pt, 2, p, false, priority);
                    rv.plugin = plugin;
                    rv.setRatio = onInitTween(t, e, cssp._tween, p);
                    return rv
                },
                priority: priority
            })
        };
        var _transformProps = ("scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent").split(","),
            _transformProp = _checkPropPrefix("transform"),
            _transformPropCSS = _prefixCSS + "transform",
            _transformOriginProp = _checkPropPrefix("transformOrigin"),
            _supports3D = (_checkPropPrefix("perspective") !== null),
            Transform = _internals.Transform = function () {
                this.skewY = 0
            }, _getTransform = _internals.getTransform = function (t, cs, rec, parse) {
                if (t._gsTransform && rec && !parse) {
                    return t._gsTransform
                }
                var tm = rec ? t._gsTransform || new Transform() : new Transform(),
                    invX = (tm.scaleX < 0),
                    min = 0.00002,
                    rnd = 100000,
                    minAngle = 179.99,
                    minPI = minAngle * _DEG2RAD,
                    zOrigin = _supports3D ? parseFloat(_getStyle(t, _transformOriginProp, cs, false, "0 0 0").split(" ")[2]) || tm.zOrigin || 0 : 0,
                    s, m, i, n, dec, scaleX, scaleY, rotation, skewX, difX, difY, difR, difS;
                if (_transformProp) {
                    s = _getStyle(t, _transformPropCSS, cs, true)
                } else {
                    if (t.currentStyle) {
                        s = t.currentStyle.filter.match(_ieGetMatrixExp);
                        s = (s && s.length === 4) ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), (tm.x || 0), (tm.y || 0)].join(",") : ""
                    }
                } if (!s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)") {
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
                    }
                } else {
                    m = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [];
                    i = m.length;
                    while (--i > -1) {
                        n = Number(m[i]);
                        m[i] = (dec = n - (n |= 0)) ? ((dec * rnd + (dec < 0 ? -0.5 : 0.5)) | 0) / rnd + n : n
                    }
                    if (m.length === 16) {
                        var a13 = m[8],
                            a23 = m[9],
                            a33 = m[10],
                            a14 = m[12],
                            a24 = m[13],
                            a34 = m[14];
                        if (tm.zOrigin) {
                            a34 = -tm.zOrigin;
                            a14 = a13 * a34 - m[12];
                            a24 = a23 * a34 - m[13];
                            a34 = a33 * a34 + tm.zOrigin - m[14]
                        }
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
                                a32 = t3
                            }
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
                                a31 = t3
                            }
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
                                a21 = t2
                            }
                            if (zFlip && xFlip) {
                                tm.rotation = tm.rotationX = 0
                            } else {
                                if (zFlip && yFlip) {
                                    tm.rotation = tm.rotationY = 0
                                } else {
                                    if (yFlip && xFlip) {
                                        tm.rotationY = tm.rotationX = 0
                                    }
                                }
                            }
                            tm.scaleX = ((Math.sqrt(a11 * a11 + a21 * a21) * rnd + 0.5) | 0) / rnd;
                            tm.scaleY = ((Math.sqrt(a22 * a22 + a23 * a23) * rnd + 0.5) | 0) / rnd;
                            tm.scaleZ = ((Math.sqrt(a32 * a32 + a33 * a33) * rnd + 0.5) | 0) / rnd;
                            tm.skewX = 0;
                            tm.perspective = a43 ? 1 / ((a43 < 0) ? -a43 : a43) : 0;
                            tm.x = a14;
                            tm.y = a24;
                            tm.z = a34
                        }
                    } else {
                        if ((!_supports3D || parse || !m.length || tm.x !== m[4] || tm.y !== m[5] || (!tm.rotationX && !tm.rotationY)) && !(tm.x !== undefined && _getStyle(t, "display", cs) === "none")) {
                            var k = (m.length >= 6),
                                a = k ? m[0] : 1,
                                b = m[1] || 0,
                                c = m[2] || 0,
                                d = k ? m[3] : 1;
                            tm.x = m[4] || 0;
                            tm.y = m[5] || 0;
                            scaleX = Math.sqrt(a * a + b * b);
                            scaleY = Math.sqrt(d * d + c * c);
                            rotation = (a || b) ? Math.atan2(b, a) * _RAD2DEG : tm.rotation || 0;
                            skewX = (c || d) ? Math.atan2(c, d) * _RAD2DEG + rotation : tm.skewX || 0;
                            difX = scaleX - Math.abs(tm.scaleX || 0);
                            difY = scaleY - Math.abs(tm.scaleY || 0);
                            if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
                                if (invX) {
                                    scaleX *= -1;
                                    skewX += (rotation <= 0) ? 180 : -180;
                                    rotation += (rotation <= 0) ? 180 : -180
                                } else {
                                    scaleY *= -1;
                                    skewX += (skewX <= 0) ? 180 : -180
                                }
                            }
                            difR = (rotation - tm.rotation) % 180;
                            difS = (skewX - tm.skewX) % 180;
                            if (tm.skewX === undefined || difX > min || difX < -min || difY > min || difY < -min || (difR > -minAngle && difR < minAngle && (difR * rnd) | 0 !== 0) || (difS > -minAngle && difS < minAngle && (difS * rnd) | 0 !== 0)) {
                                tm.scaleX = scaleX;
                                tm.scaleY = scaleY;
                                tm.rotation = rotation;
                                tm.skewX = skewX
                            }
                            if (_supports3D) {
                                tm.rotationX = tm.rotationY = tm.z = 0;
                                tm.perspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0;
                                tm.scaleZ = 1
                            }
                        }
                    }
                    tm.zOrigin = zOrigin;
                    for (i in tm) {
                        if (tm[i] < min) {
                            if (tm[i] > -min) {
                                tm[i] = 0
                            }
                        }
                    }
                } if (rec) {
                    t._gsTransform = tm
                }
                tm.xPercent = tm.yPercent = 0;
                return tm
            }, _setIETransformRatio = function (v) {
                var t = this.data,
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
                    return
                }
                val = b;
                b = -c;
                c = -val;
                filters = cs.filter;
                style.filter = "";
                var w = this.t.offsetWidth,
                    h = this.t.offsetHeight,
                    clip = (cs.position !== "absolute"),
                    m = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + b + ", M21=" + c + ", M22=" + d,
                    ox = t.x + (w * t.xPercent / 100),
                    oy = t.y + (h * t.yPercent / 100),
                    dx, dy;
                if (t.ox != null) {
                    dx = ((t.oxp) ? w * t.ox * 0.01 : t.ox) - w / 2;
                    dy = ((t.oyp) ? h * t.oy * 0.01 : t.oy) - h / 2;
                    ox += dx - (dx * a + dy * b);
                    oy += dy - (dx * c + dy * d)
                }
                if (!clip) {
                    m += ", sizingMethod='auto expand')"
                } else {
                    dx = (w / 2);
                    dy = (h / 2);
                    m += ", Dx=" + (dx - (dx * a + dy * b) + ox) + ", Dy=" + (dy - (dx * c + dy * d) + oy) + ")"
                } if (filters.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1) {
                    style.filter = filters.replace(_ieSetMatrixExp, m)
                } else {
                    style.filter = m + " " + filters
                } if (v === 0 || v === 1) {
                    if (a === 1) {
                        if (b === 0) {
                            if (c === 0) {
                                if (d === 1) {
                                    if (!clip || m.indexOf("Dx=0, Dy=0") !== -1) {
                                        if (!_opacityExp.test(filters) || parseFloat(RegExp.$1) === 100) {
                                            if (filters.indexOf("gradient(" && filters.indexOf("Alpha")) === -1) {
                                                style.removeAttribute("filter")
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (!clip) {
                    var mult = (_ieVers < 8) ? 1 : -1,
                        marg, prop, dif;
                    dx = t.ieOffsetX || 0;
                    dy = t.ieOffsetY || 0;
                    t.ieOffsetX = Math.round((w - ((a < 0 ? -a : a) * w + (b < 0 ? -b : b) * h)) / 2 + ox);
                    t.ieOffsetY = Math.round((h - ((d < 0 ? -d : d) * h + (c < 0 ? -c : c) * w)) / 2 + oy);
                    for (i = 0; i < 4; i++) {
                        prop = _margins[i];
                        marg = cs[prop];
                        val = (marg.indexOf("px") !== -1) ? parseFloat(marg) : _convertToPixels(this.t, prop, parseFloat(marg), marg.replace(_suffixExp, "")) || 0;
                        if (val !== t[prop]) {
                            dif = (i < 2) ? -t.ieOffsetX : -t.ieOffsetY
                        } else {
                            dif = (i < 2) ? dx - t.ieOffsetX : dy - t.ieOffsetY
                        }
                        style[prop] = (t[prop] = Math.round(val - dif * ((i === 0 || i === 2) ? 1 : mult))) + "px"
                    }
                }
            }, _set3DTransformRatio = _internals.set3DTransformRatio = function (v) {
                var t = this.data,
                    style = this.t.style,
                    angle = t.rotation * _DEG2RAD,
                    sx = t.scaleX,
                    sy = t.scaleY,
                    sz = t.scaleZ,
                    x = t.x,
                    y = t.y,
                    z = t.z,
                    perspective = t.perspective,
                    a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34, a41, a42, a43, zOrigin, rnd, cos, sin, t1, t2, t3, t4;
                if (v === 1 || v === 0) {
                    if (t.force3D === "auto") {
                        if (!t.rotationY && !t.rotationX && sz === 1 && !perspective && !z) {
                            _set2DTransformRatio.call(this, v);
                            return
                        }
                    }
                }
                if (_isFirefox) {
                    var n = 0.0001;
                    if (sx < n && sx > -n) {
                        sx = sz = 0.00002
                    }
                    if (sy < n && sy > -n) {
                        sy = sz = 0.00002
                    }
                    if (perspective && !t.z && !t.rotationX && !t.rotationY) {
                        perspective = 0
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
                        if (t.skewType === "simple") {
                            t1 = Math.tan(t.skewX * _DEG2RAD);
                            t1 = Math.sqrt(1 + t1 * t1);
                            cos *= t1;
                            sin *= t1
                        }
                    }
                    a12 = -sin;
                    a22 = cos
                } else {
                    if (!t.rotationY && !t.rotationX && sz === 1 && !perspective) {
                        style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") + x + "px," + y + "px," + z + "px)" + ((sx !== 1 || sy !== 1) ? " scale(" + sx + "," + sy + ")" : "");
                        return
                    } else {
                        a11 = a22 = 1;
                        a12 = a21 = 0
                    }
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
                    a21 *= cos
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
                    a42 = t4
                }
                if (sz !== 1) {
                    a13 *= sz;
                    a23 *= sz;
                    a33 *= sz;
                    a43 *= sz
                }
                if (sy !== 1) {
                    a12 *= sy;
                    a22 *= sy;
                    a32 *= sy;
                    a42 *= sy
                }
                if (sx !== 1) {
                    a11 *= sx;
                    a21 *= sx;
                    a31 *= sx;
                    a41 *= sx
                }
                if (zOrigin) {
                    a34 -= zOrigin;
                    a14 = a13 * a34;
                    a24 = a23 * a34;
                    a34 = a33 * a34 + zOrigin
                }
                a14 = (t1 = (a14 += x) - (a14 |= 0)) ? ((t1 * rnd + (t1 < 0 ? -0.5 : 0.5)) | 0) / rnd + a14 : a14;
                a24 = (t1 = (a24 += y) - (a24 |= 0)) ? ((t1 * rnd + (t1 < 0 ? -0.5 : 0.5)) | 0) / rnd + a24 : a24;
                a34 = (t1 = (a34 += z) - (a34 |= 0)) ? ((t1 * rnd + (t1 < 0 ? -0.5 : 0.5)) | 0) / rnd + a34 : a34;
                style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d(") + [(((a11 * rnd) | 0) / rnd), (((a21 * rnd) | 0) / rnd), (((a31 * rnd) | 0) / rnd), (((a41 * rnd) | 0) / rnd), (((a12 * rnd) | 0) / rnd), (((a22 * rnd) | 0) / rnd), (((a32 * rnd) | 0) / rnd), (((a42 * rnd) | 0) / rnd), (((a13 * rnd) | 0) / rnd), (((a23 * rnd) | 0) / rnd), (((a33 * rnd) | 0) / rnd), (((a43 * rnd) | 0) / rnd), a14, a24, a34, (perspective ? (1 + (-a34 / perspective)) : 1)].join(",") + ")"
            }, _set2DTransformRatio = _internals.set2DTransformRatio = function (v) {
                var t = this.data,
                    targ = this.t,
                    style = targ.style,
                    x = t.x,
                    y = t.y,
                    prefix = "",
                    ang, skew, rnd, sx, sy;
                if (t.rotationX || t.rotationY || t.z || t.force3D === true || (t.force3D === "auto" && v !== 1 && v !== 0)) {
                    this.setRatio = _set3DTransformRatio;
                    _set3DTransformRatio.call(this, v);
                    return
                }
                if (!t.rotation && !t.skewX) {
                    style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + t.scaleX + ",0,0," + t.scaleY + "," + x + "," + y + ")"
                } else {
                    ang = t.rotation * _DEG2RAD;
                    skew = ang - t.skewX * _DEG2RAD;
                    rnd = 100000;
                    sx = t.scaleX * rnd;
                    sy = t.scaleY * rnd;
                    style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + (((Math.cos(ang) * sx) | 0) / rnd) + "," + (((Math.sin(ang) * sx) | 0) / rnd) + "," + (((Math.sin(skew) * -sy) | 0) / rnd) + "," + (((Math.cos(skew) * sy) | 0) / rnd) + "," + x + "," + y + ")"
                }
            };
        _registerComplexSpecialProp("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
            parser: function (t, e, p, cssp, pt, plugin, vars) {
                if (cssp._transform) {
                    return pt
                }
                var m1 = cssp._transform = _getTransform(t, _cs, true, vars.parseTransform),
                    style = t.style,
                    min = 0.000001,
                    i = _transformProps.length,
                    v = vars,
                    endRotations = {}, m2, skewY, copy, orig, has3D, hasChange, dr;
                if (typeof (v.transform) === "string" && _transformProp) {
                    copy = _tempDiv.style;
                    copy[_transformProp] = v.transform;
                    copy.display = "block";
                    copy.position = "absolute";
                    _doc.body.appendChild(_tempDiv);
                    m2 = _getTransform(_tempDiv, null, false);
                    _doc.body.removeChild(_tempDiv)
                } else {
                    if (typeof (v) === "object") {
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
                                    v[copy] = dr[copy]
                                }
                            } else {
                                v.rotation = dr
                            }
                        }
                        if (typeof (v.x) === "string" && v.x.indexOf("%") !== -1) {
                            m2.x = 0;
                            m2.xPercent = _parseVal(v.x, m1.xPercent)
                        }
                        if (typeof (v.y) === "string" && v.y.indexOf("%") !== -1) {
                            m2.y = 0;
                            m2.yPercent = _parseVal(v.y, m1.yPercent)
                        }
                        m2.rotation = _parseAngle(("rotation" in v) ? v.rotation : ("shortRotation" in v) ? v.shortRotation + "_short" : ("rotationZ" in v) ? v.rotationZ : m1.rotation, m1.rotation, "rotation", endRotations);
                        if (_supports3D) {
                            m2.rotationX = _parseAngle(("rotationX" in v) ? v.rotationX : ("shortRotationX" in v) ? v.shortRotationX + "_short" : m1.rotationX || 0, m1.rotationX, "rotationX", endRotations);
                            m2.rotationY = _parseAngle(("rotationY" in v) ? v.rotationY : ("shortRotationY" in v) ? v.shortRotationY + "_short" : m1.rotationY || 0, m1.rotationY, "rotationY", endRotations)
                        }
                        m2.skewX = (v.skewX == null) ? m1.skewX : _parseAngle(v.skewX, m1.skewX);
                        m2.skewY = (v.skewY == null) ? m1.skewY : _parseAngle(v.skewY, m1.skewY);
                        if ((skewY = m2.skewY - m1.skewY)) {
                            m2.skewX += skewY;
                            m2.rotation += skewY
                        }
                    }
                } if (_supports3D && v.force3D != null) {
                    m1.force3D = v.force3D;
                    hasChange = true
                }
                m1.skewType = v.skewType || m1.skewType || CSSPlugin.defaultSkewType;
                has3D = (m1.force3D || m1.z || m1.rotationX || m1.rotationY || m2.z || m2.rotationX || m2.rotationY || m2.perspective);
                if (!has3D && v.scale != null) {
                    m2.scaleZ = 1
                }
                while (--i > -1) {
                    p = _transformProps[i];
                    orig = m2[p] - m1[p];
                    if (orig > min || orig < -min || _forcePT[p] != null) {
                        hasChange = true;
                        pt = new CSSPropTween(m1, p, m1[p], orig, pt);
                        if (p in endRotations) {
                            pt.e = endRotations[p]
                        }
                        pt.xs0 = 0;
                        pt.plugin = plugin;
                        cssp._overwriteProps.push(pt.n)
                    }
                }
                orig = v.transformOrigin;
                if (orig || (_supports3D && has3D && m1.zOrigin)) {
                    if (_transformProp) {
                        hasChange = true;
                        p = _transformOriginProp;
                        orig = (orig || _getStyle(t, p, _cs, false, "50% 50%")) + "";
                        pt = new CSSPropTween(style, p, 0, 0, pt, -1, "transformOrigin");
                        pt.b = style[p];
                        pt.plugin = plugin;
                        if (_supports3D) {
                            copy = m1.zOrigin;
                            orig = orig.split(" ");
                            m1.zOrigin = ((orig.length > 2 && !(copy !== 0 && orig[2] === "0px")) ? parseFloat(orig[2]) : copy) || 0;
                            pt.xs0 = pt.e = orig[0] + " " + (orig[1] || "50%") + " 0px";
                            pt = new CSSPropTween(m1, "zOrigin", 0, 0, pt, -1, pt.n);
                            pt.b = copy;
                            pt.xs0 = pt.e = m1.zOrigin
                        } else {
                            pt.xs0 = pt.e = orig
                        }
                    } else {
                        _parsePosition(orig + "", m1)
                    }
                }
                if (hasChange) {
                    cssp._transformType = (has3D || this._transformType === 3) ? 3 : 2
                }
                return pt
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
                for (i = 0; i < props.length; i++) {
                    if (this.p.indexOf("border")) {
                        props[i] = _checkPropPrefix(props[i])
                    }
                    bs = bs2 = _getStyle(t, props[i], _cs, false, "0px");
                    if (bs.indexOf(" ") !== -1) {
                        bs2 = bs.split(" ");
                        bs = bs2[0];
                        bs2 = bs2[1]
                    }
                    es = es2 = ea1[i];
                    bn = parseFloat(bs);
                    bsfx = bs.substr((bn + "").length);
                    rel = (es.charAt(1) === "=");
                    if (rel) {
                        en = parseInt(es.charAt(0) + "1", 10);
                        es = es.substr(2);
                        en *= parseFloat(es);
                        esfx = es.substr((en + "").length - (en < 0 ? 1 : 0)) || ""
                    } else {
                        en = parseFloat(es);
                        esfx = es.substr((en + "").length)
                    } if (esfx === "") {
                        esfx = _suffixMap[p] || bsfx
                    }
                    if (esfx !== bsfx) {
                        hn = _convertToPixels(t, "borderLeft", bn, bsfx);
                        vn = _convertToPixels(t, "borderTop", bn, bsfx);
                        if (esfx === "%") {
                            bs = (hn / w * 100) + "%";
                            bs2 = (vn / h * 100) + "%"
                        } else {
                            if (esfx === "em") {
                                em = _convertToPixels(t, "borderLeft", 1, "em");
                                bs = (hn / em) + "em";
                                bs2 = (vn / em) + "em"
                            } else {
                                bs = hn + "px";
                                bs2 = vn + "px"
                            }
                        } if (rel) {
                            es = (parseFloat(bs) + en) + esfx;
                            es2 = (parseFloat(bs2) + en) + esfx
                        }
                    }
                    pt = _parseComplex(style, props[i], bs + " " + bs2, es + " " + es2, false, "0px", pt)
                }
                return pt
            },
            prefix: true,
            formatter: _getFormatter("0px 0px 0px 0px", false, true)
        });
        _registerComplexSpecialProp("backgroundPosition", {
            defaultValue: "0 0",
            parser: function (t, e, p, cssp, pt, plugin) {
                var bp = "background-position",
                    cs = (_cs || _getComputedStyle(t, null)),
                    bs = this.format(((cs) ? _ieVers ? cs.getPropertyValue(bp + "-x") + " " + cs.getPropertyValue(bp + "-y") : cs.getPropertyValue(bp) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                    es = this.format(e),
                    ba, ea, i, pct, overlap, src;
                if ((bs.indexOf("%") !== -1) !== (es.indexOf("%") !== -1)) {
                    src = _getStyle(t, "backgroundImage").replace(_urlExp, "");
                    if (src && src !== "none") {
                        ba = bs.split(" ");
                        ea = es.split(" ");
                        _tempImg.setAttribute("src", src);
                        i = 2;
                        while (--i > -1) {
                            bs = ba[i];
                            pct = (bs.indexOf("%") !== -1);
                            if (pct !== (ea[i].indexOf("%") !== -1)) {
                                overlap = (i === 0) ? t.offsetWidth - _tempImg.width : t.offsetHeight - _tempImg.height;
                                ba[i] = pct ? (parseFloat(bs) / 100 * overlap) + "px" : (parseFloat(bs) / overlap * 100) + "%"
                            }
                        }
                        bs = ba.join(" ")
                    }
                }
                return this.parseComplex(t.style, bs, es, pt, plugin)
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
                if (_ieVers < 9) {
                    cs = t.currentStyle;
                    delim = _ieVers < 8 ? " " : ",";
                    b = "rect(" + cs.clipTop + delim + cs.clipRight + delim + cs.clipBottom + delim + cs.clipLeft + ")";
                    e = this.format(e).split(",").join(delim)
                } else {
                    b = this.format(_getStyle(t, this.p, _cs, false, this.dflt));
                    e = this.format(e)
                }
                return this.parseComplex(t.style, b, e, pt, plugin)
            }
        });
        _registerComplexSpecialProp("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: true,
            multi: true
        });
        _registerComplexSpecialProp("autoRound,strictUnits", {
            parser: function (t, e, p, cssp, pt) {
                return pt
            }
        });
        _registerComplexSpecialProp("border", {
            defaultValue: "0px solid #000",
            parser: function (t, e, p, cssp, pt, plugin) {
                return this.parseComplex(t.style, this.format(_getStyle(t, "borderTopWidth", _cs, false, "0px") + " " + _getStyle(t, "borderTopStyle", _cs, false, "solid") + " " + _getStyle(t, "borderTopColor", _cs, false, "#000")), this.format(e), pt, plugin)
            },
            color: true,
            formatter: function (v) {
                var a = v.split(" ");
                return a[0] + " " + (a[1] || "solid") + " " + (v.match(_colorExp) || ["#000"])[0]
            }
        });
        _registerComplexSpecialProp("borderWidth", {
            parser: _getEdgeParser("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        });
        _registerComplexSpecialProp("float,cssFloat,styleFloat", {
            parser: function (t, e, p, cssp, pt, plugin) {
                var s = t.style,
                    prop = ("cssFloat" in s) ? "cssFloat" : "styleFloat";
                return new CSSPropTween(s, prop, 0, 0, pt, -1, p, false, 0, s[prop], e)
            }
        });
        var _setIEOpacityRatio = function (v) {
            var t = this.t,
                filters = t.filter || _getStyle(this.data, "filter"),
                val = (this.s + this.c * v) | 0,
                skip;
            if (val === 100) {
                if (filters.indexOf("atrix(") === -1 && filters.indexOf("radient(") === -1 && filters.indexOf("oader(") === -1) {
                    t.removeAttribute("filter");
                    skip = (!_getStyle(this.data, "filter"))
                } else {
                    t.filter = filters.replace(_alphaFilterExp, "");
                    skip = true
                }
            }
            if (!skip) {
                if (this.xn1) {
                    t.filter = filters = filters || ("alpha(opacity=" + val + ")")
                }
                if (filters.indexOf("pacity") === -1) {
                    if (val !== 0 || !this.xn1) {
                        t.filter = filters + " alpha(opacity=" + val + ")"
                    }
                } else {
                    t.filter = filters.replace(_opacityExp, "opacity=" + val)
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
                    e = ((e.charAt(0) === "-") ? -1 : 1) * parseFloat(e.substr(2)) + b
                }
                if (isAutoAlpha && b === 1 && _getStyle(t, "visibility", _cs) === "hidden" && e !== 0) {
                    b = 0
                }
                if (_supportsOpacity) {
                    pt = new CSSPropTween(style, "opacity", b, e - b, pt)
                } else {
                    pt = new CSSPropTween(style, "opacity", b * 100, (e - b) * 100, pt);
                    pt.xn1 = isAutoAlpha ? 1 : 0;
                    style.zoom = 1;
                    pt.type = 2;
                    pt.b = "alpha(opacity=" + pt.s + ")";
                    pt.e = "alpha(opacity=" + (pt.s + pt.c) + ")";
                    pt.data = t;
                    pt.plugin = plugin;
                    pt.setRatio = _setIEOpacityRatio
                } if (isAutoAlpha) {
                    pt = new CSSPropTween(style, "visibility", 0, 0, pt, -1, null, false, 0, ((b !== 0) ? "inherit" : "hidden"), ((e === 0) ? "hidden" : "inherit"));
                    pt.xs0 = "inherit";
                    cssp._overwriteProps.push(pt.n);
                    cssp._overwriteProps.push(p)
                }
                return pt
            }
        });
        var _removeProp = function (s, p) {
            if (p) {
                if (s.removeProperty) {
                    if (p.substr(0, 2) === "ms") {
                        p = "M" + p.substr(1)
                    }
                    s.removeProperty(p.replace(_capsExp, "-$1").toLowerCase())
                } else {
                    s.removeAttribute(p)
                }
            }
        }, _setClassNameRatio = function (v) {
                this.t._gsClassPT = this;
                if (v === 1 || v === 0) {
                    this.t.setAttribute("class", (v === 0) ? this.b : this.e);
                    var mpt = this.data,
                        s = this.t.style;
                    while (mpt) {
                        if (!mpt.v) {
                            _removeProp(s, mpt.p)
                        } else {
                            s[mpt.p] = mpt.v
                        }
                        mpt = mpt._next
                    }
                    if (v === 1 && this.t._gsClassPT === this) {
                        this.t._gsClassPT = null
                    }
                } else {
                    if (this.t.getAttribute("class") !== this.e) {
                        this.t.setAttribute("class", this.e)
                    }
                }
            };
        _registerComplexSpecialProp("className", {
            parser: function (t, e, p, cssp, pt, plugin, vars) {
                var b = t.getAttribute("class") || "",
                    cssText = t.style.cssText,
                    difData, bs, cnpt, cnptLookup, mpt;
                pt = cssp._classNamePT = new CSSPropTween(t, p, 0, 0, pt, 2);
                pt.setRatio = _setClassNameRatio;
                pt.pr = -11;
                _hasPriority = true;
                pt.b = b;
                bs = _getAllStyles(t, _cs);
                cnpt = t._gsClassPT;
                if (cnpt) {
                    cnptLookup = {};
                    mpt = cnpt.data;
                    while (mpt) {
                        cnptLookup[mpt.p] = 1;
                        mpt = mpt._next
                    }
                    cnpt.setRatio(1)
                }
                t._gsClassPT = pt;
                pt.e = (e.charAt(1) !== "=") ? e : b.replace(new RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ((e.charAt(0) === "+") ? " " + e.substr(2) : "");
                if (cssp._tween._duration) {
                    t.setAttribute("class", pt.e);
                    difData = _cssDif(t, bs, _getAllStyles(t), vars, cnptLookup);
                    t.setAttribute("class", b);
                    pt.data = difData.firstMPT;
                    t.style.cssText = cssText;
                    pt = pt.xfirst = cssp.parse(t, difData.difs, pt, plugin)
                }
                return pt
            }
        });
        var _setClearPropsRatio = function (v) {
            if (v === 1 || v === 0) {
                if (this.data._totalTime === this.data._totalDuration && this.data.data !== "isFromStart") {
                    var s = this.t.style,
                        transformParse = _specialProps.transform.parse,
                        a, p, i, clearTransform;
                    if (this.e === "all") {
                        s.cssText = "";
                        clearTransform = true
                    } else {
                        a = this.e.split(",");
                        i = a.length;
                        while (--i > -1) {
                            p = a[i];
                            if (_specialProps[p]) {
                                if (_specialProps[p].parse === transformParse) {
                                    clearTransform = true
                                } else {
                                    p = (p === "transformOrigin") ? _transformOriginProp : _specialProps[p].p
                                }
                            }
                            _removeProp(s, p)
                        }
                    } if (clearTransform) {
                        _removeProp(s, _transformProp);
                        if (this.t._gsTransform) {
                            delete this.t._gsTransform
                        }
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
                return pt
            }
        });
        p = "bezier,throwProps,physicsProps,physics2D".split(",");
        i = p.length;
        while (i--) {
            _registerPluginProp(p[i])
        }
        p = CSSPlugin.prototype;
        p._firstPT = null;
        p._onInitTween = function (target, vars, tween) {
            if (!target.nodeType) {
                return false
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
            if (_reqSafariFix) {
                if (style.zIndex === "") {
                    v = _getStyle(target, "zIndex", _cs);
                    if (v === "auto" || v === "") {
                        this._addLazySet(style, "zIndex", 0)
                    }
                }
            }
            if (typeof (vars) === "string") {
                first = style.cssText;
                v = _getAllStyles(target, _cs);
                style.cssText = first + ";" + vars;
                v = _cssDif(target, v, _getAllStyles(target)).difs;
                if (!_supportsOpacity && _opacityValExp.test(vars)) {
                    v.opacity = parseFloat(RegExp.$1)
                }
                vars = v;
                style.cssText = first
            }
            this._firstPT = pt = this.parse(target, vars, null);
            if (this._transformType) {
                threeD = (this._transformType === 3);
                if (!_transformProp) {
                    style.zoom = 1
                } else {
                    if (_isSafari) {
                        _reqSafariFix = true;
                        if (style.zIndex === "") {
                            zIndex = _getStyle(target, "zIndex", _cs);
                            if (zIndex === "auto" || zIndex === "") {
                                this._addLazySet(style, "zIndex", 0)
                            }
                        }
                        if (_isSafariLT6) {
                            this._addLazySet(style, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (threeD ? "visible" : "hidden"))
                        }
                    }
                }
                pt2 = pt;
                while (pt2 && pt2._next) {
                    pt2 = pt2._next
                }
                tpt = new CSSPropTween(target, "transform", 0, 0, null, 2);
                this._linkCSSP(tpt, null, pt2);
                tpt.setRatio = (threeD && _supports3D) ? _set3DTransformRatio : _transformProp ? _set2DTransformRatio : _setIETransformRatio;
                tpt.data = this._transform || _getTransform(target, _cs, true);
                _overwriteProps.pop()
            }
            if (_hasPriority) {
                while (pt) {
                    next = pt._next;
                    pt2 = first;
                    while (pt2 && pt2.pr > pt.pr) {
                        pt2 = pt2._next
                    }
                    if ((pt._prev = pt2 ? pt2._prev : last)) {
                        pt._prev._next = pt
                    } else {
                        first = pt
                    } if ((pt._next = pt2)) {
                        pt2._prev = pt
                    } else {
                        last = pt
                    }
                    pt = next
                }
                this._firstPT = first
            }
            return true
        };
        p.parse = function (target, vars, pt, plugin) {
            var style = target.style,
                p, sp, bn, en, bs, es, bsfx, esfx, isStr, rel;
            for (p in vars) {
                es = vars[p];
                sp = _specialProps[p];
                if (sp) {
                    pt = sp.parse(target, es, p, this, pt, plugin, vars)
                } else {
                    bs = _getStyle(target, p, _cs) + "";
                    isStr = (typeof (es) === "string");
                    if (p === "color" || p === "fill" || p === "stroke" || p.indexOf("Color") !== -1 || (isStr && _rgbhslExp.test(es))) {
                        if (!isStr) {
                            es = _parseColor(es);
                            es = ((es.length > 3) ? "rgba(" : "rgb(") + es.join(",") + ")"
                        }
                        pt = _parseComplex(style, p, bs, es, true, "transparent", pt, 0, plugin)
                    } else {
                        if (isStr && (es.indexOf(" ") !== -1 || es.indexOf(",") !== -1)) {
                            pt = _parseComplex(style, p, bs, es, true, null, pt, 0, plugin)
                        } else {
                            bn = parseFloat(bs);
                            bsfx = (bn || bn === 0) ? bs.substr((bn + "").length) : "";
                            if (bs === "" || bs === "auto") {
                                if (p === "width" || p === "height") {
                                    bn = _getDimension(target, p, _cs);
                                    bsfx = "px"
                                } else {
                                    if (p === "left" || p === "top") {
                                        bn = _calculateOffset(target, p, _cs);
                                        bsfx = "px"
                                    } else {
                                        bn = (p !== "opacity") ? 0 : 1;
                                        bsfx = ""
                                    }
                                }
                            }
                            rel = (isStr && es.charAt(1) === "=");
                            if (rel) {
                                en = parseInt(es.charAt(0) + "1", 10);
                                es = es.substr(2);
                                en *= parseFloat(es);
                                esfx = es.replace(_suffixExp, "")
                            } else {
                                en = parseFloat(es);
                                esfx = isStr ? es.substr((en + "").length) || "" : ""
                            } if (esfx === "") {
                                esfx = (p in _suffixMap) ? _suffixMap[p] : bsfx
                            }
                            es = (en || en === 0) ? (rel ? en + bn : en) + esfx : vars[p];
                            if (bsfx !== esfx) {
                                if (esfx !== "") {
                                    if (en || en === 0) {
                                        if (bn) {
                                            bn = _convertToPixels(target, p, bn, bsfx);
                                            if (esfx === "%") {
                                                bn /= _convertToPixels(target, p, 100, "%") / 100;
                                                if (vars.strictUnits !== true) {
                                                    bs = bn + "%"
                                                }
                                            } else {
                                                if (esfx === "em") {
                                                    bn /= _convertToPixels(target, p, 1, "em")
                                                } else {
                                                    if (esfx !== "px") {
                                                        en = _convertToPixels(target, p, en, esfx);
                                                        esfx = "px"
                                                    }
                                                }
                                            } if (rel) {
                                                if (en || en === 0) {
                                                    es = (en + bn) + esfx
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (rel) {
                                en += bn
                            }
                            if ((bn || bn === 0) && (en || en === 0)) {
                                pt = new CSSPropTween(style, p, bn, en - bn, pt, 0, p, (_autoRound !== false && (esfx === "px" || p === "zIndex")), 0, bs, es);
                                pt.xs0 = esfx
                            } else {
                                if (style[p] === undefined || !es && (es + "" === "NaN" || es == null)) {
                                    _log("invalid " + p + " tween value: " + vars[p])
                                } else {
                                    pt = new CSSPropTween(style, p, en || bn || 0, 0, pt, -1, p, false, 0, bs, es);
                                    pt.xs0 = (es === "none" && (p === "display" || p.indexOf("Style") !== -1)) ? bs : es
                                }
                            }
                        }
                    }
                } if (plugin) {
                    if (pt && !pt.plugin) {
                        pt.plugin = plugin
                    }
                }
            }
            return pt
        };
        p.setRatio = function (v) {
            var pt = this._firstPT,
                min = 0.000001,
                val, str, i;
            if (v === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0)) {
                while (pt) {
                    if (pt.type !== 2) {
                        pt.t[pt.p] = pt.e
                    } else {
                        pt.setRatio(v)
                    }
                    pt = pt._next
                }
            } else {
                if (v || !(this._tween._time === this._tween._duration || this._tween._time === 0) || this._tween._rawPrevTime === -0.000001) {
                    while (pt) {
                        val = pt.c * v + pt.s;
                        if (pt.r) {
                            val = Math.round(val)
                        } else {
                            if (val < min) {
                                if (val > -min) {
                                    val = 0
                                }
                            }
                        } if (!pt.type) {
                            pt.t[pt.p] = val + pt.xs0
                        } else {
                            if (pt.type === 1) {
                                i = pt.l;
                                if (i === 2) {
                                    pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2
                                } else {
                                    if (i === 3) {
                                        pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3
                                    } else {
                                        if (i === 4) {
                                            pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4
                                        } else {
                                            if (i === 5) {
                                                pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4 + pt.xn4 + pt.xs5
                                            } else {
                                                str = pt.xs0 + val + pt.xs1;
                                                for (i = 1; i < pt.l; i++) {
                                                    str += pt["xn" + i] + pt["xs" + (i + 1)]
                                                }
                                                pt.t[pt.p] = str
                                            }
                                        }
                                    }
                                }
                            } else {
                                if (pt.type === -1) {
                                    pt.t[pt.p] = pt.xs0
                                } else {
                                    if (pt.setRatio) {
                                        pt.setRatio(v)
                                    }
                                }
                            }
                        }
                        pt = pt._next
                    }
                } else {
                    while (pt) {
                        if (pt.type !== 2) {
                            pt.t[pt.p] = pt.b
                        } else {
                            pt.setRatio(v)
                        }
                        pt = pt._next
                    }
                }
            }
        };
        p._enableTransforms = function (threeD) {
            this._transformType = (threeD || this._transformType === 3) ? 3 : 2;
            this._transform = this._transform || _getTransform(this._target, _cs, true)
        };
        var lazySet = function (v) {
            this.t[this.p] = this.e;
            this.data._linkCSSP(this, this._next, null, true)
        };
        p._addLazySet = function (t, p, v) {
            var pt = this._firstPT = new CSSPropTween(t, p, 0, 0, this._firstPT, 2);
            pt.e = v;
            pt.setRatio = lazySet;
            pt.data = this
        };
        p._linkCSSP = function (pt, next, prev, remove) {
            if (pt) {
                if (next) {
                    next._prev = pt
                }
                if (pt._next) {
                    pt._next._prev = pt._prev
                }
                if (pt._prev) {
                    pt._prev._next = pt._next
                } else {
                    if (this._firstPT === pt) {
                        this._firstPT = pt._next;
                        remove = true
                    }
                } if (prev) {
                    prev._next = pt
                } else {
                    if (!remove && this._firstPT === null) {
                        this._firstPT = pt
                    }
                }
                pt._next = next;
                pt._prev = prev
            }
            return pt
        };
        p._kill = function (lookup) {
            var copy = lookup,
                pt, p, xfirst;
            if (lookup.autoAlpha || lookup.alpha) {
                copy = {};
                for (p in lookup) {
                    copy[p] = lookup[p]
                }
                copy.opacity = 1;
                if (copy.autoAlpha) {
                    copy.visibility = 1
                }
            }
            if (lookup.className && (pt = this._classNamePT)) {
                xfirst = pt.xfirst;
                if (xfirst && xfirst._prev) {
                    this._linkCSSP(xfirst._prev, pt._next, xfirst._prev._prev)
                } else {
                    if (xfirst === this._firstPT) {
                        this._firstPT = pt._next
                    }
                } if (pt._next) {
                    this._linkCSSP(pt._next, pt._next._next, xfirst._prev)
                }
                this._classNamePT = null
            }
            return TweenPlugin.prototype._kill.call(this, copy)
        };
        var _getChildStyles = function (e, props, targets) {
            var children, i, child, type;
            if (e.slice) {
                i = e.length;
                while (--i > -1) {
                    _getChildStyles(e[i], props, targets)
                }
                return
            }
            children = e.childNodes;
            i = children.length;
            while (--i > -1) {
                child = children[i];
                type = child.type;
                if (child.style) {
                    props.push(_getAllStyles(child));
                    if (targets) {
                        targets.push(child)
                    }
                }
                if ((type === 1 || type === 9 || type === 11) && child.childNodes.length) {
                    _getChildStyles(child, props, targets)
                }
            }
        };
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
                            difs[p] = vars[p]
                        }
                    }
                    results.push(TweenLite.to(targets[i], duration, difs))
                }
            }
            return results
        };
        TweenPlugin.activate([CSSPlugin]);
        return CSSPlugin
    }, true);
    (function () {
        var RoundPropsPlugin = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            priority: -1,
            API: 2,
            init: function (target, value, tween) {
                this._tween = tween;
                return true
            }
        }),
            p = RoundPropsPlugin.prototype;
        p._onInitAllProps = function () {
            var tween = this._tween,
                rp = (tween.vars.roundProps instanceof Array) ? tween.vars.roundProps : tween.vars.roundProps.split(","),
                i = rp.length,
                lookup = {}, rpt = tween._propLookup.roundProps,
                prop, pt, next;
            while (--i > -1) {
                lookup[rp[i]] = 1
            }
            i = rp.length;
            while (--i > -1) {
                prop = rp[i];
                pt = tween._firstPT;
                while (pt) {
                    next = pt._next;
                    if (pt.pg) {
                        pt.t._roundProps(lookup, true)
                    } else {
                        if (pt.n === prop) {
                            this._add(pt.t, prop, pt.s, pt.c);
                            if (next) {
                                next._prev = pt._prev
                            }
                            if (pt._prev) {
                                pt._prev._next = next
                            } else {
                                if (tween._firstPT === pt) {
                                    tween._firstPT = next
                                }
                            }
                            pt._next = pt._prev = null;
                            tween._propLookup[prop] = rpt
                        }
                    }
                    pt = next
                }
            }
            return false
        };
        p._add = function (target, p, s, c) {
            this._addTween(target, p, s, s + c, p, true);
            this._overwriteProps.push(p)
        }
    }());
    _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.3.3",
        init: function (target, value, tween) {
            var p, start, end;
            if (typeof (target.setAttribute) !== "function") {
                return false
            }
            this._target = target;
            this._proxy = {};
            this._start = {};
            this._end = {};
            for (p in value) {
                this._start[p] = this._proxy[p] = start = target.getAttribute(p);
                end = this._addTween(this._proxy, p, parseFloat(start), value[p], p);
                this._end[p] = end ? end.s + end.c : value[p];
                this._overwriteProps.push(p)
            }
            return true
        },
        set: function (ratio) {
            this._super.setRatio.call(this, ratio);
            var props = this._overwriteProps,
                i = props.length,
                lookup = (ratio === 1) ? this._end : ratio ? this._proxy : this._start,
                p;
            while (--i > -1) {
                p = props[i];
                this._target.setAttribute(p, lookup[p] + "")
            }
        }
    });
    _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.2.1",
        API: 2,
        init: function (target, value, tween) {
            if (typeof (value) !== "object") {
                value = {
                    rotation: value
                }
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
                                dif = (dif < 0) ? dif + cap : dif - cap
                            }
                        }
                        if (v.indexOf("_cw") !== -1 && dif < 0) {
                            dif = ((dif + cap * 9999999999) % cap) - ((dif / cap) | 0) * cap
                        } else {
                            if (v.indexOf("ccw") !== -1 && dif > 0) {
                                dif = ((dif - cap * 9999999999) % cap) - ((dif / cap) | 0) * cap
                            }
                        }
                    }
                    if (dif > min || dif < -min) {
                        this._addTween(target, p, start, start + dif, p);
                        this._overwriteProps.push(p)
                    }
                }
            }
            return true
        },
        set: function (ratio) {
            var pt;
            if (ratio !== 1) {
                this._super.setRatio.call(this, ratio)
            } else {
                pt = this._firstPT;
                while (pt) {
                    if (pt.f) {
                        pt.t[pt.p](this.finals[pt.p])
                    } else {
                        pt.t[pt.p] = this.finals[pt.p]
                    }
                    pt = pt._next
                }
            }
        }
    })._autoCSS = true;
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
                return C
            }, _easeReg = Ease.register || function () {}, _wrap = function (name, EaseOut, EaseIn, EaseInOut, aliases) {
                var C = _class("easing." + name, {
                    easeOut: new EaseOut(),
                    easeIn: new EaseIn(),
                    easeInOut: new EaseInOut()
                }, true);
                _easeReg(C, name);
                return C
            }, EasePoint = function (time, value, next) {
                this.t = time;
                this.v = value;
                if (next) {
                    this.next = next;
                    next.prev = this;
                    this.c = next.v - value;
                    this.gap = next.t - time
                }
            }, _createBack = function (n, f) {
                var C = _class("easing." + n, function (overshoot) {
                    this._p1 = (overshoot || overshoot === 0) ? overshoot : 1.70158;
                    this._p2 = this._p1 * 1.525
                }, true),
                    p = C.prototype = new Ease();
                p.constructor = C;
                p.getRatio = f;
                p.config = function (overshoot) {
                    return new C(overshoot)
                };
                return C
            }, Back = _wrap("Back", _createBack("BackOut", function (p) {
                return ((p = p - 1) * p * ((this._p1 + 1) * p + this._p1) + 1)
            }), _createBack("BackIn", function (p) {
                return p * p * ((this._p1 + 1) * p - this._p1)
            }), _createBack("BackInOut", function (p) {
                return ((p *= 2) < 1) ? 0.5 * p * p * ((this._p2 + 1) * p - this._p2) : 0.5 * ((p -= 2) * p * ((this._p2 + 1) * p + this._p2) + 2)
            })),
            SlowMo = _class("easing.SlowMo", function (linearRatio, power, yoyoMode) {
                power = (power || power === 0) ? power : 0.7;
                if (linearRatio == null) {
                    linearRatio = 0.7
                } else {
                    if (linearRatio > 1) {
                        linearRatio = 1
                    }
                }
                this._p = (linearRatio !== 1) ? power : 0;
                this._p1 = (1 - linearRatio) / 2;
                this._p2 = linearRatio;
                this._p3 = this._p1 + this._p2;
                this._calcEnd = (yoyoMode === true)
            }, true),
            p = SlowMo.prototype = new Ease(),
            SteppedEase, RoughEase, _createElastic;
        p.constructor = SlowMo;
        p.getRatio = function (p) {
            var r = p + (0.5 - p) * this._p;
            if (p < this._p1) {
                return this._calcEnd ? 1 - ((p = 1 - (p / this._p1)) * p) : r - ((p = 1 - (p / this._p1)) * p * p * p * r)
            } else {
                if (p > this._p3) {
                    return this._calcEnd ? 1 - (p = (p - this._p3) / this._p1) * p : r + ((p - r) * (p = (p - this._p3) / this._p1) * p * p * p)
                }
            }
            return this._calcEnd ? 1 : r
        };
        SlowMo.ease = new SlowMo(0.7, 0.7);
        p.config = SlowMo.config = function (linearRatio, power, yoyoMode) {
            return new SlowMo(linearRatio, power, yoyoMode)
        };
        SteppedEase = _class("easing.SteppedEase", function (steps) {
            steps = steps || 1;
            this._p1 = 1 / steps;
            this._p2 = steps + 1
        }, true);
        p = SteppedEase.prototype = new Ease();
        p.constructor = SteppedEase;
        p.getRatio = function (p) {
            if (p < 0) {
                p = 0
            } else {
                if (p >= 1) {
                    p = 0.999999999
                }
            }
            return ((this._p2 * p) >> 0) * this._p1
        };
        p.config = SteppedEase.config = function (steps) {
            return new SteppedEase(steps)
        };
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
                    bump = strength
                } else {
                    if (taper === "out") {
                        invX = 1 - x;
                        bump = invX * invX * strength
                    } else {
                        if (taper === "in") {
                            bump = x * x * strength
                        } else {
                            if (x < 0.5) {
                                invX = x * 2;
                                bump = invX * invX * 0.5 * strength
                            } else {
                                invX = (1 - x) * 2;
                                bump = invX * invX * 0.5 * strength
                            }
                        }
                    }
                } if (randomize) {
                    y += (Math.random() * bump) - (bump * 0.5)
                } else {
                    if (i % 2) {
                        y += bump * 0.5
                    } else {
                        y -= bump * 0.5
                    }
                } if (clamp) {
                    if (y > 1) {
                        y = 1
                    } else {
                        if (y < 0) {
                            y = 0
                        }
                    }
                }
                a[cnt++] = {
                    x: x,
                    y: y
                }
            }
            a.sort(function (a, b) {
                return a.x - b.x
            });
            pnt = new EasePoint(1, 1, null);
            i = points;
            while (--i > -1) {
                obj = a[i];
                pnt = new EasePoint(obj.x, obj.y, pnt)
            }
            this._prev = new EasePoint(0, 0, (pnt.t !== 0) ? pnt : pnt.next)
        }, true);
        p = RoughEase.prototype = new Ease();
        p.constructor = RoughEase;
        p.getRatio = function (p) {
            var pnt = this._prev;
            if (p > pnt.t) {
                while (pnt.next && p >= pnt.t) {
                    pnt = pnt.next
                }
                pnt = pnt.prev
            } else {
                while (pnt.prev && p <= pnt.t) {
                    pnt = pnt.prev
                }
            }
            this._prev = pnt;
            return (pnt.v + ((p - pnt.t) / pnt.gap) * pnt.c)
        };
        p.config = function (vars) {
            return new RoughEase(vars)
        };
        RoughEase.ease = new RoughEase();
        _wrap("Bounce", _create("BounceOut", function (p) {
            if (p < 1 / 2.75) {
                return 7.5625 * p * p
            } else {
                if (p < 2 / 2.75) {
                    return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75
                } else {
                    if (p < 2.5 / 2.75) {
                        return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375
                    }
                }
            }
            return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375
        }), _create("BounceIn", function (p) {
            if ((p = 1 - p) < 1 / 2.75) {
                return 1 - (7.5625 * p * p)
            } else {
                if (p < 2 / 2.75) {
                    return 1 - (7.5625 * (p -= 1.5 / 2.75) * p + 0.75)
                } else {
                    if (p < 2.5 / 2.75) {
                        return 1 - (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375)
                    }
                }
            }
            return 1 - (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375)
        }), _create("BounceInOut", function (p) {
            var invert = (p < 0.5);
            if (invert) {
                p = 1 - (p * 2)
            } else {
                p = (p * 2) - 1
            } if (p < 1 / 2.75) {
                p = 7.5625 * p * p
            } else {
                if (p < 2 / 2.75) {
                    p = 7.5625 * (p -= 1.5 / 2.75) * p + 0.75
                } else {
                    if (p < 2.5 / 2.75) {
                        p = 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375
                    } else {
                        p = 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375
                    }
                }
            }
            return invert ? (1 - p) * 0.5 : p * 0.5 + 0.5
        }));
        _wrap("Circ", _create("CircOut", function (p) {
            return Math.sqrt(1 - (p = p - 1) * p)
        }), _create("CircIn", function (p) {
            return -(Math.sqrt(1 - (p * p)) - 1)
        }), _create("CircInOut", function (p) {
            return ((p *= 2) < 1) ? -0.5 * (Math.sqrt(1 - p * p) - 1) : 0.5 * (Math.sqrt(1 - (p -= 2) * p) + 1)
        }));
        _createElastic = function (n, f, def) {
            var C = _class("easing." + n, function (amplitude, period) {
                this._p1 = amplitude || 1;
                this._p2 = period || def;
                this._p3 = this._p2 / _2PI * (Math.asin(1 / this._p1) || 0)
            }, true),
                p = C.prototype = new Ease();
            p.constructor = C;
            p.getRatio = f;
            p.config = function (amplitude, period) {
                return new C(amplitude, period)
            };
            return C
        };
        _wrap("Elastic", _createElastic("ElasticOut", function (p) {
            return this._p1 * Math.pow(2, -10 * p) * Math.sin((p - this._p3) * _2PI / this._p2) + 1
        }, 0.3), _createElastic("ElasticIn", function (p) {
            return -(this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin((p - this._p3) * _2PI / this._p2))
        }, 0.3), _createElastic("ElasticInOut", function (p) {
            return ((p *= 2) < 1) ? -0.5 * (this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin((p - this._p3) * _2PI / this._p2)) : this._p1 * Math.pow(2, -10 * (p -= 1)) * Math.sin((p - this._p3) * _2PI / this._p2) * 0.5 + 1
        }, 0.45));
        _wrap("Expo", _create("ExpoOut", function (p) {
            return 1 - Math.pow(2, -10 * p)
        }), _create("ExpoIn", function (p) {
            return Math.pow(2, 10 * (p - 1)) - 0.001
        }), _create("ExpoInOut", function (p) {
            return ((p *= 2) < 1) ? 0.5 * Math.pow(2, 10 * (p - 1)) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)))
        }));
        _wrap("Sine", _create("SineOut", function (p) {
            return Math.sin(p * _HALF_PI)
        }), _create("SineIn", function (p) {
            return -Math.cos(p * _HALF_PI) + 1
        }), _create("SineInOut", function (p) {
            return -0.5 * (Math.cos(Math.PI * p) - 1)
        }));
        _class("easing.EaseLookup", {
            find: function (s) {
                return Ease.map[s]
            }
        }, true);
        _easeReg(w.SlowMo, "SlowMo", "ease,");
        _easeReg(RoughEase, "RoughEase", "ease,");
        _easeReg(SteppedEase, "SteppedEase", "ease,");
        return Back
    }, true)
});
if (_gsScope._gsDefine) {
    _gsScope._gsQueue.pop()()
}(function (window, moduleName) {
    var _globals = window.GreenSockGlobals = window.GreenSockGlobals || window;
    if (_globals.TweenLite) {
        return
    }
    var _namespace = function (ns) {
        var a = ns.split("."),
            p = _globals,
            i;
        for (i = 0; i < a.length; i++) {
            p[a[i]] = p = p[a[i]] || {}
        }
        return p
    }, gs = _namespace("com.greensock"),
        _tinyNum = 1e-10,
        _slice = function (a) {
            var b = [],
                l = a.length,
                i;
            for (i = 0; i !== l; b.push(a[i++])) {}
            return b
        }, _emptyFunc = function () {}, _isArray = (function () {
            var toString = Object.prototype.toString,
                array = toString.call([]);
            return function (obj) {
                return obj != null && (obj instanceof Array || (typeof (obj) === "object" && !! obj.push && toString.call(obj) === array))
            }
        }()),
        a, i, p, _ticker, _tickerActive, _defLookup = {}, Definition = function (ns, dependencies, func, global) {
            this.sc = (_defLookup[ns]) ? _defLookup[ns].sc : [];
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
                        missing--
                    } else {
                        if (init) {
                            cur.sc.push(this)
                        }
                    }
                }
                if (missing === 0 && func) {
                    a = ("com.greensock." + ns).split(".");
                    n = a.pop();
                    cl = _namespace(a.join("."))[n] = this.gsClass = func.apply(func, _classes);
                    if (global) {
                        _globals[n] = cl;
                        if (typeof (define) === "function" && define.amd) {
                            define((window.GreenSockAMDPath ? window.GreenSockAMDPath + "/" : "") + ns.split(".").pop(), [], function () {
                                return cl
                            })
                        } else {
                            if (ns === moduleName && typeof (module) !== "undefined" && module.exports) {
                                module.exports = cl
                            }
                        }
                    }
                    for (i = 0; i < this.sc.length; i++) {
                        this.sc[i].check()
                    }
                }
            };
            this.check(true)
        }, _gsDefine = window._gsDefine = function (ns, dependencies, func, global) {
            return new Definition(ns, dependencies, func, global)
        }, _class = gs._class = function (ns, func, global) {
            func = func || function () {};
            _gsDefine(ns, [], function () {
                return func
            }, global);
            return func
        };
    _gsDefine.globals = _globals;
    var _baseParams = [0, 0, 1, 1],
        _blankArray = [],
        Ease = _class("easing.Ease", function (func, extraParams, type, power) {
            this._func = func;
            this._type = type || 0;
            this._power = power || 0;
            this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams
        }, true),
        _easeMap = Ease.map = {}, _easeReg = Ease.register = function (ease, names, types, create) {
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
                    _easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease()
                }
            }
        };
    p = Ease.prototype;
    p._calcEnd = false;
    p.getRatio = function (p) {
        if (this._func) {
            this._params[0] = p;
            return this._func.apply(null, this._params)
        }
        var t = this._type,
            pw = this._power,
            r = (t === 1) ? 1 - p : (t === 2) ? p : (p < 0.5) ? p * 2 : (1 - p) * 2;
        if (pw === 1) {
            r *= r
        } else {
            if (pw === 2) {
                r *= r * r
            } else {
                if (pw === 3) {
                    r *= r * r * r
                } else {
                    if (pw === 4) {
                        r *= r * r * r * r
                    }
                }
            }
        }
        return (t === 1) ? 1 - r : (t === 2) ? r : (p < 0.5) ? r / 2 : 1 - (r / 2)
    };
    a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"];
    i = a.length;
    while (--i > -1) {
        p = a[i] + ",Power" + i;
        _easeReg(new Ease(null, null, 1, i), p, "easeOut", true);
        _easeReg(new Ease(null, null, 2, i), p, "easeIn" + ((i === 0) ? ",easeNone" : ""));
        _easeReg(new Ease(null, null, 3, i), p, "easeInOut")
    }
    _easeMap.linear = gs.easing.Linear.easeIn;
    _easeMap.swing = gs.easing.Quad.easeInOut;
    var EventDispatcher = _class("events.EventDispatcher", function (target) {
        this._listeners = {};
        this._eventTarget = target || this
    });
    p = EventDispatcher.prototype;
    p.addEventListener = function (type, callback, scope, useParam, priority) {
        priority = priority || 0;
        var list = this._listeners[type],
            index = 0,
            listener, i;
        if (list == null) {
            this._listeners[type] = list = []
        }
        i = list.length;
        while (--i > -1) {
            listener = list[i];
            if (listener.c === callback && listener.s === scope) {
                list.splice(i, 1)
            } else {
                if (index === 0 && listener.pr < priority) {
                    index = i + 1
                }
            }
        }
        list.splice(index, 0, {
            c: callback,
            s: scope,
            up: useParam,
            pr: priority
        });
        if (this === _ticker && !_tickerActive) {
            _ticker.wake()
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
                    return
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
                    })
                } else {
                    listener.c.call(listener.s || t)
                }
            }
        }
    };
    var _reqAnimFrame = window.requestAnimationFrame,
        _cancelAnimFrame = window.cancelAnimationFrame,
        _getTime = Date.now || function () {
            return new Date().getTime()
        }, _lastUpdate = _getTime();
    a = ["ms", "moz", "webkit", "o"];
    i = a.length;
    while (--i > -1 && !_reqAnimFrame) {
        _reqAnimFrame = window[a[i] + "RequestAnimationFrame"];
        _cancelAnimFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"]
    }
    _class("Ticker", function (fps, useRAF) {
        var _self = this,
            _startTime = _getTime(),
            _useRAF = (useRAF !== false && _reqAnimFrame),
            _lagThreshold = 500,
            _adjustedLag = 33,
            _fps, _req, _id, _gap, _nextTime, _tick = function (manual) {
                var elapsed = _getTime() - _lastUpdate,
                    overlap, dispatch;
                if (elapsed > _lagThreshold) {
                    _startTime += elapsed - _adjustedLag
                }
                _lastUpdate += elapsed;
                _self.time = (_lastUpdate - _startTime) / 1000;
                overlap = _self.time - _nextTime;
                if (!_fps || overlap > 0 || manual === true) {
                    _self.frame++;
                    _nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
                    dispatch = true
                }
                if (manual !== true) {
                    _id = _req(_tick)
                }
                if (dispatch) {
                    _self.dispatchEvent("tick")
                }
            };
        EventDispatcher.call(_self);
        _self.time = _self.frame = 0;
        _self.tick = function () {
            _tick(true)
        };
        _self.lagSmoothing = function (threshold, adjustedLag) {
            _lagThreshold = threshold || (1 / _tinyNum);
            _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0)
        };
        _self.sleep = function () {
            if (_id == null) {
                return
            }
            if (!_useRAF || !_cancelAnimFrame) {
                clearTimeout(_id)
            } else {
                _cancelAnimFrame(_id)
            }
            _req = _emptyFunc;
            _id = null;
            if (_self === _ticker) {
                _tickerActive = false
            }
        };
        _self.wake = function () {
            if (_id !== null) {
                _self.sleep()
            } else {
                if (_self.frame > 10) {
                    _lastUpdate = _getTime() - _lagThreshold + 5
                }
            }
            _req = (_fps === 0) ? _emptyFunc : (!_useRAF || !_reqAnimFrame) ? function (f) {
                return setTimeout(f, ((_nextTime - _self.time) * 1000 + 1) | 0)
            } : _reqAnimFrame;
            if (_self === _ticker) {
                _tickerActive = true
            }
            _tick(2)
        };
        _self.fps = function (value) {
            if (!arguments.length) {
                return _fps
            }
            _fps = value;
            _gap = 1 / (_fps || 60);
            _nextTime = this.time + _gap;
            _self.wake()
        };
        _self.useRAF = function (value) {
            if (!arguments.length) {
                return _useRAF
            }
            _self.sleep();
            _useRAF = value;
            _self.fps(_fps)
        };
        _self.fps(fps);
        setTimeout(function () {
            if (_useRAF && (!_id || _self.frame < 5)) {
                _self.useRAF(false)
            }
        }, 1500)
    });
    p = gs.Ticker.prototype = new gs.events.EventDispatcher();
    p.constructor = gs.Ticker;
    var Animation = _class("core.Animation", function (duration, vars) {
        this.vars = vars = vars || {};
        this._duration = this._totalDuration = duration || 0;
        this._delay = Number(vars.delay) || 0;
        this._timeScale = 1;
        this._active = (vars.immediateRender === true);
        this.data = vars.data;
        this._reversed = (vars.reversed === true);
        if (!_rootTimeline) {
            return
        }
        if (!_tickerActive) {
            _ticker.wake()
        }
        var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
        tl.add(this, tl._time);
        if (this.vars.paused) {
            this.paused(true)
        }
    });
    _ticker = Animation.ticker = new gs.Ticker();
    p = Animation.prototype;
    p._dirty = p._gc = p._initted = p._paused = false;
    p._totalTime = p._time = 0;
    p._rawPrevTime = -1;
    p._next = p._last = p._onUpdate = p._timeline = p.timeline = null;
    p._paused = false;
    var _checkTimeout = function () {
        if (_tickerActive && _getTime() - _lastUpdate > 2000) {
            _ticker.wake()
        }
        setTimeout(_checkTimeout, 2000)
    };
    _checkTimeout();
    p.play = function (from, suppressEvents) {
        if (from != null) {
            this.seek(from, suppressEvents)
        }
        return this.reversed(false).paused(false)
    };
    p.pause = function (atTime, suppressEvents) {
        if (atTime != null) {
            this.seek(atTime, suppressEvents)
        }
        return this.paused(true)
    };
    p.resume = function (from, suppressEvents) {
        if (from != null) {
            this.seek(from, suppressEvents)
        }
        return this.paused(false)
    };
    p.seek = function (time, suppressEvents) {
        return this.totalTime(Number(time), suppressEvents !== false)
    };
    p.restart = function (includeDelay, suppressEvents) {
        return this.reversed(false).paused(false).totalTime(includeDelay ? -this._delay : 0, (suppressEvents !== false), true)
    };
    p.reverse = function (from, suppressEvents) {
        if (from != null) {
            this.seek((from || this.totalDuration()), suppressEvents)
        }
        return this.reversed(true).paused(false)
    };
    p.render = function (time, suppressEvents, force) {};
    p.invalidate = function () {
        return this
    };
    p.isActive = function () {
        var tl = this._timeline,
            startTime = this._startTime,
            rawTime;
        return (!tl || (!this._gc && !this._paused && tl.isActive() && (rawTime = tl.rawTime()) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale))
    };
    p._enabled = function (enabled, ignoreTimeline) {
        if (!_tickerActive) {
            _ticker.wake()
        }
        this._gc = !enabled;
        this._active = this.isActive();
        if (ignoreTimeline !== true) {
            if (enabled && !this.timeline) {
                this._timeline.add(this, this._startTime - this._delay)
            } else {
                if (!enabled && this.timeline) {
                    this._timeline._remove(this, true)
                }
            }
        }
        return false
    };
    p._kill = function (vars, target) {
        return this._enabled(false, false)
    };
    p.kill = function (vars, target) {
        this._kill(vars, target);
        return this
    };
    p._uncache = function (includeSelf) {
        var tween = includeSelf ? this : this.timeline;
        while (tween) {
            tween._dirty = true;
            tween = tween.timeline
        }
        return this
    };
    p._swapSelfInParams = function (params) {
        var i = params.length,
            copy = params.concat();
        while (--i > -1) {
            if (params[i] === "{self}") {
                copy[i] = this
            }
        }
        return copy
    };
    p.eventCallback = function (type, callback, params, scope) {
        if ((type || "").substr(0, 2) === "on") {
            var v = this.vars;
            if (arguments.length === 1) {
                return v[type]
            }
            if (callback == null) {
                delete v[type]
            } else {
                v[type] = callback;
                v[type + "Params"] = (_isArray(params) && params.join("").indexOf("{self}") !== -1) ? this._swapSelfInParams(params) : params;
                v[type + "Scope"] = scope
            } if (type === "onUpdate") {
                this._onUpdate = callback
            }
        }
        return this
    };
    p.delay = function (value) {
        if (!arguments.length) {
            return this._delay
        }
        if (this._timeline.smoothChildTiming) {
            this.startTime(this._startTime + value - this._delay)
        }
        this._delay = value;
        return this
    };
    p.duration = function (value) {
        if (!arguments.length) {
            this._dirty = false;
            return this._duration
        }
        this._duration = this._totalDuration = value;
        this._uncache(true);
        if (this._timeline.smoothChildTiming) {
            if (this._time > 0) {
                if (this._time < this._duration) {
                    if (value !== 0) {
                        this.totalTime(this._totalTime * (value / this._duration), true)
                    }
                }
            }
        }
        return this
    };
    p.totalDuration = function (value) {
        this._dirty = false;
        return (!arguments.length) ? this._totalDuration : this.duration(value)
    };
    p.time = function (value, suppressEvents) {
        if (!arguments.length) {
            return this._time
        }
        if (this._dirty) {
            this.totalDuration()
        }
        return this.totalTime((value > this._duration) ? this._duration : value, suppressEvents)
    };
    p.totalTime = function (time, suppressEvents, uncapped) {
        if (!_tickerActive) {
            _ticker.wake()
        }
        if (!arguments.length) {
            return this._totalTime
        }
        if (this._timeline) {
            if (time < 0 && !uncapped) {
                time += this.totalDuration()
            }
            if (this._timeline.smoothChildTiming) {
                if (this._dirty) {
                    this.totalDuration()
                }
                var totalDuration = this._totalDuration,
                    tl = this._timeline;
                if (time > totalDuration && !uncapped) {
                    time = totalDuration
                }
                this._startTime = (this._paused ? this._pauseTime : tl._time) - ((!this._reversed ? time : totalDuration - time) / this._timeScale);
                if (!tl._dirty) {
                    this._uncache(false)
                }
                if (tl._timeline) {
                    while (tl._timeline) {
                        if (tl._timeline._time !== (tl._startTime + tl._totalTime) / tl._timeScale) {
                            tl.totalTime(tl._totalTime, true)
                        }
                        tl = tl._timeline
                    }
                }
            }
            if (this._gc) {
                this._enabled(true, false)
            }
            if (this._totalTime !== time || this._duration === 0) {
                this.render(time, suppressEvents, false);
                if (_lazyTweens.length) {
                    _lazyRender()
                }
            }
        }
        return this
    };
    p.progress = p.totalProgress = function (value, suppressEvents) {
        return (!arguments.length) ? this._time / this.duration() : this.totalTime(this.duration() * value, suppressEvents)
    };
    p.startTime = function (value) {
        if (!arguments.length) {
            return this._startTime
        }
        if (value !== this._startTime) {
            this._startTime = value;
            if (this.timeline) {
                if (this.timeline._sortChildren) {
                    this.timeline.add(this, value - this._delay)
                }
            }
        }
        return this
    };
    p.timeScale = function (value) {
        if (!arguments.length) {
            return this._timeScale
        }
        value = value || _tinyNum;
        if (this._timeline && this._timeline.smoothChildTiming) {
            var pauseTime = this._pauseTime,
                t = (pauseTime || pauseTime === 0) ? pauseTime : this._timeline.totalTime();
            this._startTime = t - ((t - this._startTime) * this._timeScale / value)
        }
        this._timeScale = value;
        return this._uncache(false)
    };
    p.reversed = function (value) {
        if (!arguments.length) {
            return this._reversed
        }
        if (value != this._reversed) {
            this._reversed = value;
            this.totalTime(((this._timeline && !this._timeline.smoothChildTiming) ? this.totalDuration() - this._totalTime : this._totalTime), true)
        }
        return this
    };
    p.paused = function (value) {
        if (!arguments.length) {
            return this._paused
        }
        if (value != this._paused) {
            if (this._timeline) {
                if (!_tickerActive && !value) {
                    _ticker.wake()
                }
                var tl = this._timeline,
                    raw = tl.rawTime(),
                    elapsed = raw - this._pauseTime;
                if (!value && tl.smoothChildTiming) {
                    this._startTime += elapsed;
                    this._uncache(false)
                }
                this._pauseTime = value ? raw : null;
                this._paused = value;
                this._active = this.isActive();
                if (!value && elapsed !== 0 && this._initted && this.duration()) {
                    this.render((tl.smoothChildTiming ? this._totalTime : (raw - this._startTime) / this._timeScale), true, true)
                }
            }
        }
        if (this._gc && !value) {
            this._enabled(true, false)
        }
        return this
    };
    var SimpleTimeline = _class("core.SimpleTimeline", function (vars) {
        Animation.call(this, 0, vars);
        this.autoRemoveChildren = this.smoothChildTiming = true
    });
    p = SimpleTimeline.prototype = new Animation();
    p.constructor = SimpleTimeline;
    p.kill()._gc = false;
    p._first = p._last = null;
    p._sortChildren = false;
    p.add = p.insert = function (child, position, align, stagger) {
        var prevTween, st;
        child._startTime = Number(position || 0) + child._delay;
        if (child._paused) {
            if (this !== child._timeline) {
                child._pauseTime = child._startTime + ((this.rawTime() - child._startTime) / child._timeScale)
            }
        }
        if (child.timeline) {
            child.timeline._remove(child, true)
        }
        child.timeline = child._timeline = this;
        if (child._gc) {
            child._enabled(true, true)
        }
        prevTween = this._last;
        if (this._sortChildren) {
            st = child._startTime;
            while (prevTween && prevTween._startTime > st) {
                prevTween = prevTween._prev
            }
        }
        if (prevTween) {
            child._next = prevTween._next;
            prevTween._next = child
        } else {
            child._next = this._first;
            this._first = child
        } if (child._next) {
            child._next._prev = child
        } else {
            this._last = child
        }
        child._prev = prevTween;
        if (this._timeline) {
            this._uncache(true)
        }
        return this
    };
    p._remove = function (tween, skipDisable) {
        if (tween.timeline === this) {
            if (!skipDisable) {
                tween._enabled(false, true)
            }
            if (tween._prev) {
                tween._prev._next = tween._next
            } else {
                if (this._first === tween) {
                    this._first = tween._next
                }
            } if (tween._next) {
                tween._next._prev = tween._prev
            } else {
                if (this._last === tween) {
                    this._last = tween._prev
                }
            }
            tween._next = tween._prev = tween.timeline = null;
            if (this._timeline) {
                this._uncache(true)
            }
        }
        return this
    };
    p.render = function (time, suppressEvents, force) {
        var tween = this._first,
            next;
        this._totalTime = this._time = this._rawPrevTime = time;
        while (tween) {
            next = tween._next;
            if (tween._active || (time >= tween._startTime && !tween._paused)) {
                if (!tween._reversed) {
                    tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force)
                } else {
                    tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force)
                }
            }
            tween = next
        }
    };
    p.rawTime = function () {
        if (!_tickerActive) {
            _ticker.wake()
        }
        return this._totalTime
    };
    var TweenLite = _class("TweenLite", function (target, duration, vars) {
        Animation.call(this, duration, vars);
        this.render = TweenLite.prototype.render;
        if (target == null) {
            throw "Cannot tween a null target."
        }
        this.target = target = (typeof (target) !== "string") ? target : TweenLite.selector(target) || target;
        var isSelector = (target.jquery || (target.length && target !== window && target[0] && (target[0] === window || (target[0].nodeType && target[0].style && !target.nodeType)))),
            overwrite = this.vars.overwrite,
            i, targ, targets;
        this._overwrite = overwrite = (overwrite == null) ? _overwriteLookup[TweenLite.defaultOverwrite] : (typeof (overwrite) === "number") ? overwrite >> 0 : _overwriteLookup[overwrite];
        if ((isSelector || target instanceof Array || (target.push && _isArray(target))) && typeof (target[0]) !== "number") {
            this._targets = targets = _slice(target);
            this._propLookup = [];
            this._siblings = [];
            for (i = 0; i < targets.length; i++) {
                targ = targets[i];
                if (!targ) {
                    targets.splice(i--, 1);
                    continue
                } else {
                    if (typeof (targ) === "string") {
                        targ = targets[i--] = TweenLite.selector(targ);
                        if (typeof (targ) === "string") {
                            targets.splice(i + 1, 1)
                        }
                        continue
                    } else {
                        if (targ.length && targ !== window && targ[0] && (targ[0] === window || (targ[0].nodeType && targ[0].style && !targ.nodeType))) {
                            targets.splice(i--, 1);
                            this._targets = targets = targets.concat(_slice(targ));
                            continue
                        }
                    }
                }
                this._siblings[i] = _register(targ, this, false);
                if (overwrite === 1) {
                    if (this._siblings[i].length > 1) {
                        _applyOverwrite(targ, this, null, 1, this._siblings[i])
                    }
                }
            }
        } else {
            this._propLookup = {};
            this._siblings = _register(target, this, false);
            if (overwrite === 1) {
                if (this._siblings.length > 1) {
                    _applyOverwrite(target, this, null, 1, this._siblings)
                }
            }
        } if (this.vars.immediateRender || (duration === 0 && this._delay === 0 && this.vars.immediateRender !== false)) {
            this._time = -_tinyNum;
            this.render(-this._delay)
        }
    }, true),
        _isSelector = function (v) {
            return (v.length && v !== window && v[0] && (v[0] === window || (v[0].nodeType && v[0].style && !v.nodeType)))
        }, _autoCSS = function (vars, target) {
            var css = {}, p;
            for (p in vars) {
                if (!_reservedProps[p] && (!(p in target) || p === "transform" || p === "x" || p === "y" || p === "width" || p === "height" || p === "className" || p === "border") && (!_plugins[p] || (_plugins[p] && _plugins[p]._autoCSS))) {
                    css[p] = vars[p];
                    delete vars[p]
                }
            }
            vars.css = css
        };
    p = TweenLite.prototype = new Animation();
    p.constructor = TweenLite;
    p.kill()._gc = false;
    p.ratio = 0;
    p._firstPT = p._targets = p._overwrittenProps = p._startAt = null;
    p._notifyPluginsOfEnabled = p._lazy = false;
    TweenLite.version = "1.13.1";
    TweenLite.defaultEase = p._ease = new Ease(null, null, 1, 1);
    TweenLite.defaultOverwrite = "auto";
    TweenLite.ticker = _ticker;
    TweenLite.autoSleep = true;
    TweenLite.lagSmoothing = function (threshold, adjustedLag) {
        _ticker.lagSmoothing(threshold, adjustedLag)
    };
    TweenLite.selector = window.$ || window.jQuery || function (e) {
        var selector = window.$ || window.jQuery;
        if (selector) {
            TweenLite.selector = selector;
            return selector(e)
        }
        return (typeof (document) === "undefined") ? e : (document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById((e.charAt(0) === "#") ? e.substr(1) : e))
    };
    var _lazyTweens = [],
        _lazyLookup = {}, _internals = TweenLite._internals = {
            isArray: _isArray,
            isSelector: _isSelector,
            lazyTweens: _lazyTweens
        }, _plugins = TweenLite._plugins = {}, _tweenLookup = _internals.tweenLookup = {}, _tweenLookupNum = 0,
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
        }, _overwriteLookup = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        }, _rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline(),
        _rootTimeline = Animation._rootTimeline = new SimpleTimeline(),
        _lazyRender = _internals.lazyRender = function () {
            var i = _lazyTweens.length;
            _lazyLookup = {};
            while (--i > -1) {
                a = _lazyTweens[i];
                if (a && a._lazy !== false) {
                    a.render(a._lazy, false, true);
                    a._lazy = false
                }
            }
            _lazyTweens.length = 0
        };
    _rootTimeline._startTime = _ticker.time;
    _rootFramesTimeline._startTime = _ticker.frame;
    _rootTimeline._active = _rootFramesTimeline._active = true;
    setTimeout(_lazyRender, 1);
    Animation._updateRoot = TweenLite.render = function () {
        var i, a, p;
        if (_lazyTweens.length) {
            _lazyRender()
        }
        _rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, false, false);
        _rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, false, false);
        if (_lazyTweens.length) {
            _lazyRender()
        }
        if (!(_ticker.frame % 120)) {
            for (p in _tweenLookup) {
                a = _tweenLookup[p].tweens;
                i = a.length;
                while (--i > -1) {
                    if (a[i]._gc) {
                        a.splice(i, 1)
                    }
                }
                if (a.length === 0) {
                    delete _tweenLookup[p]
                }
            }
            p = _rootTimeline._first;
            if (!p || p._paused) {
                if (TweenLite.autoSleep && !_rootFramesTimeline._first && _ticker._listeners.tick.length === 1) {
                    while (p && p._paused) {
                        p = p._next
                    }
                    if (!p) {
                        _ticker.sleep()
                    }
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
            }
        }
        if (tween) {
            a = _tweenLookup[id].tweens;
            a[(i = a.length)] = tween;
            if (scrub) {
                while (--i > -1) {
                    if (a[i] === tween) {
                        a.splice(i, 1)
                    }
                }
            }
        }
        return _tweenLookup[id].tweens
    }, _applyOverwrite = function (target, tween, props, mode, siblings) {
            var i, changed, curTween, l;
            if (mode === 1 || mode >= 4) {
                l = siblings.length;
                for (i = 0; i < l; i++) {
                    if ((curTween = siblings[i]) !== tween) {
                        if (!curTween._gc) {
                            if (curTween._enabled(false, false)) {
                                changed = true
                            }
                        }
                    } else {
                        if (mode === 5) {
                            break
                        }
                    }
                }
                return changed
            }
            var startTime = tween._startTime + _tinyNum,
                overlaps = [],
                oCount = 0,
                zeroDur = (tween._duration === 0),
                globalStart;
            i = siblings.length;
            while (--i > -1) {
                if ((curTween = siblings[i]) === tween || curTween._gc || curTween._paused) {} else {
                    if (curTween._timeline !== tween._timeline) {
                        globalStart = globalStart || _checkOverlap(tween, 0, zeroDur);
                        if (_checkOverlap(curTween, globalStart, zeroDur) === 0) {
                            overlaps[oCount++] = curTween
                        }
                    } else {
                        if (curTween._startTime <= startTime) {
                            if (curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime) {
                                if (!((zeroDur || !curTween._initted) && startTime - curTween._startTime <= 2e-10)) {
                                    overlaps[oCount++] = curTween
                                }
                            }
                        }
                    }
                }
            }
            i = oCount;
            while (--i > -1) {
                curTween = overlaps[i];
                if (mode === 2) {
                    if (curTween._kill(props, target)) {
                        changed = true
                    }
                }
                if (mode !== 2 || (!curTween._firstPT && curTween._initted)) {
                    if (curTween._enabled(false, false)) {
                        changed = true
                    }
                }
            }
            return changed
        }, _checkOverlap = function (tween, reference, zeroDur) {
            var tl = tween._timeline,
                ts = tl._timeScale,
                t = tween._startTime;
            while (tl._timeline) {
                t += tl._startTime;
                ts *= tl._timeScale;
                if (tl._paused) {
                    return -100
                }
                tl = tl._timeline
            }
            t /= ts;
            return (t > reference) ? t - reference : ((zeroDur && t === reference) || (!tween._initted && t - reference < 2 * _tinyNum)) ? _tinyNum : ((t += tween.totalDuration() / tween._timeScale / ts) > reference + _tinyNum) ? 0 : t - reference - _tinyNum
        };
    p._init = function () {
        var v = this.vars,
            op = this._overwrittenProps,
            dur = this._duration,
            immediate = !! v.immediateRender,
            ease = v.ease,
            i, initPlugins, pt, p, startVars;
        if (v.startAt) {
            if (this._startAt) {
                this._startAt.render(-1, true);
                this._startAt.kill()
            }
            startVars = {};
            for (p in v.startAt) {
                startVars[p] = v.startAt[p]
            }
            startVars.overwrite = false;
            startVars.immediateRender = true;
            startVars.lazy = (immediate && v.lazy !== false);
            startVars.startAt = startVars.delay = null;
            this._startAt = TweenLite.to(this.target, 0, startVars);
            if (immediate) {
                if (this._time > 0) {
                    this._startAt = null
                } else {
                    if (dur !== 0) {
                        return
                    }
                }
            }
        } else {
            if (v.runBackwards && dur !== 0) {
                if (this._startAt) {
                    this._startAt.render(-1, true);
                    this._startAt.kill();
                    this._startAt = null
                } else {
                    pt = {};
                    for (p in v) {
                        if (!_reservedProps[p] || p === "autoCSS") {
                            pt[p] = v[p]
                        }
                    }
                    pt.overwrite = 0;
                    pt.data = "isFromStart";
                    pt.lazy = (immediate && v.lazy !== false);
                    pt.immediateRender = immediate;
                    this._startAt = TweenLite.to(this.target, 0, pt);
                    if (!immediate) {
                        this._startAt._init();
                        this._startAt._enabled(false)
                    } else {
                        if (this._time === 0) {
                            return
                        }
                    }
                }
            }
        }
        this._ease = ease = (!ease) ? TweenLite.defaultEase : (ease instanceof Ease) ? ease : (typeof (ease) === "function") ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenLite.defaultEase;
        if (v.easeParams instanceof Array && ease.config) {
            this._ease = ease.config.apply(ease, v.easeParams)
        }
        this._easeType = this._ease._type;
        this._easePower = this._ease._power;
        this._firstPT = null;
        if (this._targets) {
            i = this._targets.length;
            while (--i > -1) {
                if (this._initProps(this._targets[i], (this._propLookup[i] = {}), this._siblings[i], (op ? op[i] : null))) {
                    initPlugins = true
                }
            }
        } else {
            initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op)
        } if (initPlugins) {
            TweenLite._onPluginEvent("_onInitAllProps", this)
        }
        if (op) {
            if (!this._firstPT) {
                if (typeof (this.target) !== "function") {
                    this._enabled(false, false)
                }
            }
        }
        if (v.runBackwards) {
            pt = this._firstPT;
            while (pt) {
                pt.s += pt.c;
                pt.c = -pt.c;
                pt = pt._next
            }
        }
        this._onUpdate = v.onUpdate;
        this._initted = true
    };
    p._initProps = function (target, propLookup, siblings, overwrittenProps) {
        var p, i, initPlugins, plugin, pt, v;
        if (target == null) {
            return false
        }
        if (_lazyLookup[target._gsTweenID]) {
            _lazyRender()
        }
        if (!this.vars.css) {
            if (target.style) {
                if (target !== window && target.nodeType) {
                    if (_plugins.css) {
                        if (this.vars.autoCSS !== false) {
                            _autoCSS(this.vars, target)
                        }
                    }
                }
            }
        }
        for (p in this.vars) {
            v = this.vars[p];
            if (_reservedProps[p]) {
                if (v) {
                    if ((v instanceof Array) || (v.push && _isArray(v))) {
                        if (v.join("").indexOf("{self}") !== -1) {
                            this.vars[p] = v = this._swapSelfInParams(v, this)
                        }
                    }
                }
            } else {
                if (_plugins[p] && (plugin = new _plugins[p]())._onInitTween(target, this.vars[p], this)) {
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
                        propLookup[plugin._overwriteProps[i]] = this._firstPT
                    }
                    if (plugin._priority || plugin._onInitAllProps) {
                        initPlugins = true
                    }
                    if (plugin._onDisable || plugin._onEnable) {
                        this._notifyPluginsOfEnabled = true
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
                    pt.c = (typeof (v) === "string" && v.charAt(1) === "=") ? parseInt(v.charAt(0) + "1", 10) * Number(v.substr(2)) : (Number(v) - pt.s) || 0
                }
            } if (pt) {
                if (pt._next) {
                    pt._next._prev = pt
                }
            }
        }
        if (overwrittenProps) {
            if (this._kill(overwrittenProps, target)) {
                return this._initProps(target, propLookup, siblings, overwrittenProps)
            }
        }
        if (this._overwrite > 1) {
            if (this._firstPT) {
                if (siblings.length > 1) {
                    if (_applyOverwrite(target, this, propLookup, this._overwrite, siblings)) {
                        this._kill(propLookup, target);
                        return this._initProps(target, propLookup, siblings, overwrittenProps)
                    }
                }
            }
        }
        if (this._firstPT) {
            if ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration)) {
                _lazyLookup[target._gsTweenID] = true
            }
        }
        return initPlugins
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
                callback = "onComplete"
            }
            if (duration === 0) {
                if (this._initted || !this.vars.lazy || force) {
                    if (this._startTime === this._timeline._duration) {
                        time = 0
                    }
                    if (time === 0 || prevRawPrevTime < 0 || prevRawPrevTime === _tinyNum) {
                        if (prevRawPrevTime !== time) {
                            force = true;
                            if (prevRawPrevTime > _tinyNum) {
                                callback = "onReverseComplete"
                            }
                        }
                    }
                    this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum
                }
            }
        } else {
            if (time < 1e-7) {
                this._totalTime = this._time = 0;
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
                if (prevTime !== 0 || (duration === 0 && prevRawPrevTime > 0 && prevRawPrevTime !== _tinyNum)) {
                    callback = "onReverseComplete";
                    isComplete = this._reversed
                }
                if (time < 0) {
                    this._active = false;
                    if (duration === 0) {
                        if (this._initted || !this.vars.lazy || force) {
                            if (prevRawPrevTime >= 0) {
                                force = true
                            }
                            this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum
                        }
                    }
                } else {
                    if (!this._initted) {
                        force = true
                    }
                }
            } else {
                this._totalTime = this._time = time;
                if (this._easeType) {
                    var r = time / duration,
                        type = this._easeType,
                        pow = this._easePower;
                    if (type === 1 || (type === 3 && r >= 0.5)) {
                        r = 1 - r
                    }
                    if (type === 3) {
                        r *= 2
                    }
                    if (pow === 1) {
                        r *= r
                    } else {
                        if (pow === 2) {
                            r *= r * r
                        } else {
                            if (pow === 3) {
                                r *= r * r * r
                            } else {
                                if (pow === 4) {
                                    r *= r * r * r * r
                                }
                            }
                        }
                    } if (type === 1) {
                        this.ratio = 1 - r
                    } else {
                        if (type === 2) {
                            this.ratio = r
                        } else {
                            if (time / duration < 0.5) {
                                this.ratio = r / 2
                            } else {
                                this.ratio = 1 - (r / 2)
                            }
                        }
                    }
                } else {
                    this.ratio = this._ease.getRatio(time / duration)
                }
            }
        } if (this._time === prevTime && !force) {
            return
        } else {
            if (!this._initted) {
                this._init();
                if (!this._initted || this._gc) {
                    return
                } else {
                    if (!force && this._firstPT && ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration))) {
                        this._time = this._totalTime = prevTime;
                        this._rawPrevTime = prevRawPrevTime;
                        _lazyTweens.push(this);
                        this._lazy = time;
                        return
                    }
                } if (this._time && !isComplete) {
                    this.ratio = this._ease.getRatio(this._time / duration)
                } else {
                    if (isComplete && this._ease._calcEnd) {
                        this.ratio = this._ease.getRatio((this._time === 0) ? 0 : 1)
                    }
                }
            }
        } if (this._lazy !== false) {
            this._lazy = false
        }
        if (!this._active) {
            if (!this._paused && this._time !== prevTime && time >= 0) {
                this._active = true
            }
        }
        if (prevTime === 0) {
            if (this._startAt) {
                if (time >= 0) {
                    this._startAt.render(time, suppressEvents, force)
                } else {
                    if (!callback) {
                        callback = "_dummyGS"
                    }
                }
            }
            if (this.vars.onStart) {
                if (this._time !== 0 || duration === 0) {
                    if (!suppressEvents) {
                        this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _blankArray)
                    }
                }
            }
        }
        pt = this._firstPT;
        while (pt) {
            if (pt.f) {
                pt.t[pt.p](pt.c * this.ratio + pt.s)
            } else {
                pt.t[pt.p] = pt.c * this.ratio + pt.s
            }
            pt = pt._next
        }
        if (this._onUpdate) {
            if (time < 0) {
                if (this._startAt && this._startTime) {
                    this._startAt.render(time, suppressEvents, force)
                }
            }
            if (!suppressEvents) {
                if (this._time !== prevTime || isComplete) {
                    this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _blankArray)
                }
            }
        }
        if (callback) {
            if (!this._gc || force) {
                if (time < 0 && this._startAt && !this._onUpdate && this._startTime) {
                    this._startAt.render(time, suppressEvents, force)
                }
                if (isComplete) {
                    if (this._timeline.autoRemoveChildren) {
                        this._enabled(false, false)
                    }
                    this._active = false
                }
                if (!suppressEvents && this.vars[callback]) {
                    this.vars[callback].apply(this.vars[callback + "Scope"] || this, this.vars[callback + "Params"] || _blankArray)
                }
                if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) {
                    this._rawPrevTime = 0
                }
            }
        }
    };
    p._kill = function (vars, target) {
        if (vars === "all") {
            vars = null
        }
        if (vars == null) {
            if (target == null || target === this.target) {
                this._lazy = false;
                return this._enabled(false, false)
            }
        }
        target = (typeof (target) !== "string") ? (target || this._targets || this.target) : TweenLite.selector(target) || target;
        var i, overwrittenProps, p, pt, propLookup, changed, killProps, record;
        if ((_isArray(target) || _isSelector(target)) && typeof (target[0]) !== "number") {
            i = target.length;
            while (--i > -1) {
                if (this._kill(vars, target[i])) {
                    changed = true
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
                        break
                    }
                }
            } else {
                if (target !== this.target) {
                    return false
                } else {
                    propLookup = this._propLookup;
                    overwrittenProps = this._overwrittenProps = vars ? this._overwrittenProps || {} : "all"
                }
            } if (propLookup) {
                killProps = vars || propLookup;
                record = (vars !== overwrittenProps && overwrittenProps !== "all" && vars !== propLookup && (typeof (vars) !== "object" || !vars._tempKill));
                for (p in killProps) {
                    if ((pt = propLookup[p])) {
                        if (pt.pg && pt.t._kill(killProps)) {
                            changed = true
                        }
                        if (!pt.pg || pt.t._overwriteProps.length === 0) {
                            if (pt._prev) {
                                pt._prev._next = pt._next
                            } else {
                                if (pt === this._firstPT) {
                                    this._firstPT = pt._next
                                }
                            } if (pt._next) {
                                pt._next._prev = pt._prev
                            }
                            pt._next = pt._prev = null
                        }
                        delete propLookup[p]
                    }
                    if (record) {
                        overwrittenProps[p] = 1
                    }
                }
                if (!this._firstPT && this._initted) {
                    this._enabled(false, false)
                }
            }
        }
        return changed
    };
    p.invalidate = function () {
        if (this._notifyPluginsOfEnabled) {
            TweenLite._onPluginEvent("_onDisable", this)
        }
        this._firstPT = null;
        this._overwrittenProps = null;
        this._onUpdate = null;
        this._startAt = null;
        this._initted = this._active = this._notifyPluginsOfEnabled = this._lazy = false;
        this._propLookup = (this._targets) ? {} : [];
        return this
    };
    p._enabled = function (enabled, ignoreTimeline) {
        if (!_tickerActive) {
            _ticker.wake()
        }
        if (enabled && this._gc) {
            var targets = this._targets,
                i;
            if (targets) {
                i = targets.length;
                while (--i > -1) {
                    this._siblings[i] = _register(targets[i], this, true)
                }
            } else {
                this._siblings = _register(this.target, this, true)
            }
        }
        Animation.prototype._enabled.call(this, enabled, ignoreTimeline);
        if (this._notifyPluginsOfEnabled) {
            if (this._firstPT) {
                return TweenLite._onPluginEvent((enabled ? "_onEnable" : "_onDisable"), this)
            }
        }
        return false
    };
    TweenLite.to = function (target, duration, vars) {
        return new TweenLite(target, duration, vars)
    };
    TweenLite.from = function (target, duration, vars) {
        vars.runBackwards = true;
        vars.immediateRender = (vars.immediateRender != false);
        return new TweenLite(target, duration, vars)
    };
    TweenLite.fromTo = function (target, duration, fromVars, toVars) {
        toVars.startAt = fromVars;
        toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
        return new TweenLite(target, duration, toVars)
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
        })
    };
    TweenLite.set = function (target, vars) {
        return new TweenLite(target, 0, vars)
    };
    TweenLite.getTweensOf = function (target, onlyActive) {
        if (target == null) {
            return []
        }
        target = (typeof (target) !== "string") ? target : TweenLite.selector(target) || target;
        var i, a, j, t;
        if ((_isArray(target) || _isSelector(target)) && typeof (target[0]) !== "number") {
            i = target.length;
            a = [];
            while (--i > -1) {
                a = a.concat(TweenLite.getTweensOf(target[i], onlyActive))
            }
            i = a.length;
            while (--i > -1) {
                t = a[i];
                j = i;
                while (--j > -1) {
                    if (t === a[j]) {
                        a.splice(i, 1)
                    }
                }
            }
        } else {
            a = _register(target).concat();
            i = a.length;
            while (--i > -1) {
                if (a[i]._gc || (onlyActive && !a[i].isActive())) {
                    a.splice(i, 1)
                }
            }
        }
        return a
    };
    TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = function (target, onlyActive, vars) {
        if (typeof (onlyActive) === "object") {
            vars = onlyActive;
            onlyActive = false
        }
        var a = TweenLite.getTweensOf(target, onlyActive),
            i = a.length;
        while (--i > -1) {
            a[i]._kill(vars, target)
        }
    };
    var TweenPlugin = _class("plugins.TweenPlugin", function (props, priority) {
        this._overwriteProps = (props || "").split(",");
        this._propName = this._overwriteProps[0];
        this._priority = priority || 0;
        this._super = TweenPlugin.prototype
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
                pt._next._prev = pt
            }
            return pt
        }
    };
    p.setRatio = function (v) {
        var pt = this._firstPT,
            min = 0.000001,
            val;
        while (pt) {
            val = pt.c * v + pt.s;
            if (pt.r) {
                val = Math.round(val)
            } else {
                if (val < min) {
                    if (val > -min) {
                        val = 0
                    }
                }
            } if (pt.f) {
                pt.t[pt.p](val)
            } else {
                pt.t[pt.p] = val
            }
            pt = pt._next
        }
    };
    p._kill = function (lookup) {
        var a = this._overwriteProps,
            pt = this._firstPT,
            i;
        if (lookup[this._propName] != null) {
            this._overwriteProps = []
        } else {
            i = a.length;
            while (--i > -1) {
                if (lookup[a[i]] != null) {
                    a.splice(i, 1)
                }
            }
        }
        while (pt) {
            if (lookup[pt.n] != null) {
                if (pt._next) {
                    pt._next._prev = pt._prev
                }
                if (pt._prev) {
                    pt._prev._next = pt._next;
                    pt._prev = null
                } else {
                    if (this._firstPT === pt) {
                        this._firstPT = pt._next
                    }
                }
            }
            pt = pt._next
        }
        return false
    };
    p._roundProps = function (lookup, value) {
        var pt = this._firstPT;
        while (pt) {
            if (lookup[this._propName] || (pt.n != null && lookup[pt.n.split(this._propName + "_").join("")])) {
                pt.r = value
            }
            pt = pt._next
        }
    };
    TweenLite._onPluginEvent = function (type, tween) {
        var pt = tween._firstPT,
            changed, pt2, first, last, next;
        if (type === "_onInitAllProps") {
            while (pt) {
                next = pt._next;
                pt2 = first;
                while (pt2 && pt2.pr > pt.pr) {
                    pt2 = pt2._next
                }
                if ((pt._prev = pt2 ? pt2._prev : last)) {
                    pt._prev._next = pt
                } else {
                    first = pt
                } if ((pt._next = pt2)) {
                    pt2._prev = pt
                } else {
                    last = pt
                }
                pt = next
            }
            pt = tween._firstPT = first
        }
        while (pt) {
            if (pt.pg) {
                if (typeof (pt.t[type]) === "function") {
                    if (pt.t[type]()) {
                        changed = true
                    }
                }
            }
            pt = pt._next
        }
        return changed
    };
    TweenPlugin.activate = function (plugins) {
        var i = plugins.length;
        while (--i > -1) {
            if (plugins[i].API === TweenPlugin.API) {
                _plugins[(new plugins[i]())._propName] = plugins[i]
            }
        }
        return true
    };
    _gsDefine.plugin = function (config) {
        if (!config || !config.propName || !config.init || !config.API) {
            throw "illegal plugin definition."
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
            }, Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin", function () {
                TweenPlugin.call(this, propName, priority);
                this._overwriteProps = overwriteProps || []
            }, (config.global === true)),
            p = Plugin.prototype = new TweenPlugin(propName),
            prop;
        p.constructor = Plugin;
        Plugin.API = config.API;
        for (prop in map) {
            if (typeof (config[prop]) === "function") {
                p[map[prop]] = config[prop]
            }
        }
        Plugin.version = config.version;
        TweenPlugin.activate([Plugin]);
        return Plugin
    };
    a = window._gsQueue;
    if (a) {
        for (i = 0; i < a.length; i++) {
            a[i]()
        }
        for (p in _defLookup) {
            if (!_defLookup[p].func) {
                window.console.log("GSAP encountered missing dependency: com.greensock." + p)
            }
        }
    }
    _tickerActive = false
})((typeof (module) !== "undefined" && module.exports && typeof (global) !== "undefined") ? global : this || window, "TweenMax");
(function ($) {
    Lms = {}
})(jQuery);
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
    Menu.load = function (arrayBotones, elementoMensaje) {
        try {
            cargarMenu(arrayBotones, elementoMensaje)
        } catch (error) {
            console.error("Menu.load: " + error)
        }
    };
    Menu.messageTextLoad = function (textos) {
        try {
            almacenarTextosMensajesArray(textos)
        } catch (error) {
            console.error("Menu.messageTextLoad: " + error)
        }
    };
    Menu.functionButtonMenu = function (funciones) {
        try {
            guardarFuncionesBotones(funciones)
        } catch (error) {
            console.error("Menu.functionButtonMenu: " + error)
        }
    };
    Menu.clearDisplay = function (excluir) {
        try {
            cargarElementosExcluir(excluir)
        } catch (error) {
            console.error("Menu.clearDisplay: " + error)
        }
    };
    Menu.position = function (posicionActual) {
        try {
            return obtenerPosicionMenu(posicionActual)
        } catch (error) {
            console.error("Menu.position: " + error)
        }
    };
    Menu.functionReturn = function (funcion) {
        try {
            cargarFunctionReturn(funcion)
        } catch (error) {
            console.error("Menu.functionReturn: " + error)
        }
    };
    Menu.reload = function () {
        try {
            reposicionarMenu()
        } catch (error) {
            console.error("Menu.reload: " + error)
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
        posicionActualMenu = ""
    }

    function convertirStringAElementos(arrayBotones) {
        var arrayBotonesNuevos = [];
        for (var i = 0; i < arrayBotones.length; i++) {
            var boton = Display.get(arrayBotones[i]);
            arrayBotonesNuevos.push(boton)
        }
        return arrayBotonesNuevos
    }

    function cargarPadreMensaje() {
        mensajeEmergente = Display.get(mensajeEmergente);
        contenedorPadreMensaje = mensajeEmergente;
        var contenedorTexto = Display.get(mensajeEmergente.getName(true) + "." + Options.containerText());
        if (!$.isEmptyObject(contenedorTexto)) {
            mensajeEmergente = contenedorTexto
        }
    }

    function cargarPadreMenu() {
        contenedorPadreDeMenu = botonesMenu[0].parent()
    }

    function listener() {
        for (var i = 0; i < botonesMenu.length; i++) {
            var boton = botonesMenu[i];
            boton.click(botonMenuPresionado);
            aplicarMouseEventBoton(boton);
            boton.css({
                cursor: "pointer"
            })
        }
        Button.over(botonesMenu)
    }

    function botonMenuPresionado(botonPresionado) {
        limpiezaDePantalla();
        botonActual = botonPresionado;
        var nombreBotonPresionado = botonPresionado.getName();
        posicionActualMenu = nombreBotonPresionado;
        var funcionRetorno = funcionesBoton[nombreBotonPresionado];
        if (funcionRetorno) {
            funcionRetorno(botonPresionado)
        }
        Display.zIndex(contenedorPadreDeMenu);
        botonesEnEstadoNormal();
        if (botonPresionado.getLabelPosition("activo")) {
            botonPresionado.stop("activo")
        }
        funcionRetornoBotonesPresionados()
    }

    function limpiezaDePantalla() {
        Sound.removePlayButtons();
        Sound.stop();
        Message.remove();
        Presentation.remove();
        Talk.remove();
        if (limpiarPantalla) {
            Display.removeChildAll(elementosExluir)
        }
    }

    function aplicarMouseEventBoton(boton) {
        boton.bind("mouseover", function () {
            cargarTexosMensajeEmergente(boton)
        });
        boton.bind("mouseout", mensajeAnimacionOut)
    }

    function almacenarTextosMensajesArray(objetoTextos) {
        textosMensajesBotones = objetoTextos
    }

    function guardarFuncionesBotones(funciones) {
        funcionesBoton = funciones
    }

    function botonesEnEstadoNormal() {
        for (var i = 0; i < botonesMenu.length; i++) {
            if (botonesMenu[i].getLabelPosition("normal")) {
                botonesMenu[i].stop("normal")
            } else {
                botonesMenu[i].stop(0)
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
                top: posicionBoton.y + "px",
                left: posicionBoton.x + "px",
                position: "absolute"
            });
            TweenMax.to(contenedorPadreMensaje, 0, {
                scaleX: 1,
                scaleY: 1,
                alpha: 1
            });
            mensajeAnimacionIn();
            Text.load(mensajeEmergente, mensajeDeBoton, "middle center")
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
        })
    }

    function mensajeAnimacionOut() {
        TweenMax.to(contenedorPadreMensaje, 0.2, {
            scaleX: 0,
            scaleY: 0,
            alpha: 0
        })
    }

    function cargarElementosExcluir(excluir) {
        excluir = excluir || [];
        limpiarPantalla = true;
        elementosExluir = excluir;
        elementosExluir.push(contenedorPadreDeMenu)
    }

    function obtenerPosicionMenu(posicionActual) {
        if (posicionActual) {
            var botonActual = Display.get(posicionActual);
            if (botonActual.length > 0) {} else {
                posicionActualMenu = ""
            }
            botonesEnEstadoNormal()
        }
        return posicionActualMenu
    }

    function cargarFunctionReturn(funcion) {
        funcionRetornoBotonesPresionados = funcion
    }

    function reposicionarMenu() {
        if (contenedorPadreDeMenu) {
            Display.zIndex(contenedorPadreDeMenu)
        }
    }
})(jQuery);
(function ($) {
    Message = {};
    var contenedorPadre;
    var botonCerrarMensaje;
    var modal = $();
    var contendorCargadoStage = false;
    var funcionRetorno = function () {};
    var modalVisible = true;
    var modalSobreMenu = false;
    Message.load = function (contenedorMensaje, textoMensaje, botonCerrar) {
        try {
            cargarModal();
            cargarContenido(contenedorMensaje, textoMensaje);
            listenerContenedor(botonCerrar)
        } catch (error) {
            console.error("Message.load: " + error)
        }
    };
    Message.remove = function () {
        try {
            eliminarMensaje()
        } catch (error) {
            console.error("Message.remove: " + error)
        }
    };
    Message.modal = function (visible) {
        try {
            activarModal(visible)
        } catch (error) {
            console.error("Message.modal: " + error)
        }
    };
    Message.onMenu = function (sobreMenu) {
        try {
            cargarModalSobreMenu(sobreMenu)
        } catch (error) {
            console.error("Message.onMenu: " + error)
        }
    };
    Message.finish = function (funcion) {
        try {
            cargarFuncionRetorno(funcion)
        } catch (error) {
            console.error("Message.functionReturn: " + error)
        }
    };

    function cargarModal() {
        var html = '<div id="modal-mensaje"></div>';
        if (modalVisible) {
            $("#Stage").append(html);
            modal = $("#modal-mensaje");
            modal.css({
                width: window.innerWidth + "px",
                height: window.innerHeight + "px",
                position: "absolute",
                "background-color": "rgba(136, 135, 135, 0.85)",
                margin: "auto",
                left: window.pageXOffset + "px",
                top: window.pageYOffset + "px",
                cursor: "pointer"
            });
            Display.zIndex(modal)
        }
    }

    function eliminarModal() {
        TweenMax.killTweensOf(modal);
        modal.remove();
        modal = $()
    }

    function cargarContenido(contenedorMensaje, textoMensaje) {
        modalSobreMenu = false;
        funcionRetorno = function () {};
        contendorCargadoStage = false;
        contenedorPadre = Display.get(contenedorMensaje);
        if (contenedorPadre.length === 0) {
            contenedorPadre = Display.addChild(contenedorMensaje);
            contendorCargadoStage = true
        }
        Text.load(contenedorPadre, textoMensaje);
        Display.zIndex(contenedorPadre);
        posicionarContenedor();
        mensajeAnimacionIn();
        Presentation.pause();
        cargarModalSobreMenu()
    }

    function posicionarContenedor() {
        var anchoContenedor = contenedorPadre.width();
        var atloContenedor = contenedorPadre.height();
        var posicionX = 500 - (anchoContenedor / 2);
        var posicionY = 320 - (atloContenedor / 2);
        Display.position(contenedorPadre, posicionX, posicionY)
    }

    function listenerContenedor(botonCerrar) {
        botonCerrarMensaje = Display.get(botonCerrar);
        Event.click(botonCerrarMensaje, cerrarMensaje);
        Button.over(botonCerrarMensaje);
        $(document).keyup(function (teclado) {
            if (teclado.keyCode === 27) {
                cerrarMensaje()
            }
        })
    }

    function cerrarMensaje() {
        removeListenerContenedor();
        mensajeAnimacionOut();
        modalAnimacionOut()
    }

    function removeListenerContenedor() {
        Event.removeClick(botonCerrarMensaje);
        Button.over(botonCerrarMensaje, false)
    }

    function mensajeAnimacionOut() {
        TweenMax.to(contenedorPadre, 0.5, {
            scaleX: 0,
            scaleY: 0,
            ease: Cubic.easeIn,
            onComplete: eliminarMensaje
        })
    }

    function eliminarMensaje() {
        eliminarModal();
        if (contendorCargadoStage) {
            Display.removeChild(contenedorPadre)
        }
        funcionRetorno();
        funcionRetorno = function () {};
        Presentation.play()
    }

    function modalAnimacionOut() {
        TweenMax.to(modal, 0.5, {
            alpha: 0,
            delay: 0.2,
            ease: Cubic.easeIn
        })
    }

    function mensajeAnimacionIn() {
        TweenMax.from(contenedorPadre, 1, {
            scaleX: 0,
            scaleY: 0,
            ease: Cubic.easeOut
        })
    }

    function cargarFuncionRetorno(funcion) {
        funcionRetorno = funcion
    }

    function activarModal(estadoModal) {
        modalVisible = estadoModal
    }

    function cargarModalSobreMenu(sobreMenu) {
        modalSobreMenu = (sobreMenu === undefined) ? false : sobreMenu;
        if (modalSobreMenu) {
            Display.zIndex(modal);
            Display.zIndex(contenedorPadre)
        }
    }
})(jQuery);
(function ($) {
    Options = {};
    var opcionesPaginador = {
        size: 16,
        weight: "normal",
        aling: "center",
        color: "#000000"
    };
    
    var opcionesPresentation = {
        habilitarPasarConteclado: true
    };
    
    var opcionesTitulo = {
        size: 24,
        weight: "bold",
        color: "#000000"
    };
    var opcionesTexto = {
        size: 18,
        aling: "justify",
        sizeFuente: 14,
        lineHeight: 1.2,
        weight: "normal",
        color: "#000000"
    };
    var opcionesBotones = {
        scaleOver: 1.1,
        scaleOut: 1
    };
    var opcionesAudio = {
        tiempoAudio: 5,
        rutaAudio: "media",
        rutaAudioVacio: "media/vacio"
    };
    var opcionesPositionArray = {
        distanciaEntreElementos: 10
    };
    var opcionesColision = {
        intentosMalos: 1,
        duplicarElementos: false,
        ocultarElementos: false,
        ejePosicionEnColision: "y",
        habilitarArrastrarCorrecto:true
    };
    var opcionesInput = {
        intentosMalos: 1,
        opacidadVerificar: 0.5,
        mostrarOpcionesBuenas: true,
        errorPorInput: true,
        intentosFinales: 0
    };
    var opcionesDrag = {
        eje: "xy"
    };
    var opcionesOrdenar = {
        intentosMalos: 1,
        eje: "x",
        errorPorFrase: false
    };
    var fuenteTexto = "Arial, 'Helvetica Neue', Helvetica, sans-serif";
    var nombreContenedorTexto = "contenedor";
    
    Options.presentation = function (opciones) {

        if (opciones !== undefined) {

            opcionesPresentation = $.extend({}, opcionesPresentation, opciones)

        }

        return opcionesPresentation

    };
    
    Options.title = function (opciones) {
        if (opciones !== undefined) {
            opcionesTitulo = $.extend({}, opcionesTitulo, opciones)
        }
        return opcionesTitulo
    };
    Options.text = function (opciones) {
        if (opciones !== undefined) {
            opcionesTexto = $.extend({}, opcionesTexto, opciones)
        }
        return opcionesTexto
    };
    Options.pagination = function (opciones) {
        if (opciones !== undefined) {
            opcionesPaginador = $.extend({}, opcionesPaginador, opciones)
        }
        return opcionesPaginador
    };
    Options.sound = function (opciones) {
        if (opciones !== undefined) {
            opcionesAudio = $.extend({}, opcionesAudio, opciones)
        }
        return opcionesAudio
    };
    Options.font = function (fuente) {
        if (fuente !== undefined && typeof fuente === "string") {
            fuenteTexto = fuente
        }
        return fuenteTexto
    };
    Options.containerText = function (nombre) {
        if (nombre !== undefined && typeof nombre === "string") {
            nombreContenedorTexto = nombre
        }
        return nombreContenedorTexto
    };
    Options.button = function (opciones) {
        if (opciones !== undefined) {
            opcionesBotones = $.extend({}, opcionesBotones, opciones)
        }
        return opcionesBotones
    };
    Options.positionArray = function (opciones) {
        if (opciones !== undefined) {
            opcionesPositionArray = $.extend({}, opcionesPositionArray, opciones)
        }
        return opcionesPositionArray
    };
    Options.collision = function (opciones) {
        if (opciones !== undefined) {
            opcionesColision = $.extend({}, opcionesColision, opciones)
        }
        return opcionesColision
    };
    Options.input = function (opciones) {
        if (opciones !== undefined) {
            opcionesInput = $.extend({}, opcionesInput, opciones)
        }
        return opcionesInput
    };
    Options.drag = function (opciones) {
        if (opciones !== undefined) {
            opcionesDrag = $.extend({}, opcionesDrag, opciones)
        }
        return opcionesDrag
    };
    Options.order = function (opciones) {
        if (opciones !== undefined) {
            opcionesOrdenar = $.extend({}, opcionesOrdenar, opciones)
        }
        return opcionesOrdenar
    }
})(jQuery);
(function ($) {
    Order = {};
    var funcionEstado;
    var funcionFinal;
    var elementosMover;
    var colisionActual;
    var botonVerificar;
    var textosCorrectos;
    var intentosMalos;
    var intentosActuales;
    var contenedorLimite;
    var posicionOrigen;
    var posicionEnDrag;
    var posicionElementoActual;
    var resultado;
    var fraceActualDelDrag;
    Order.load = function (elementos, textos, limite) {
        try {
            cargarOrdenar(elementos, textos, limite)
        } catch (error) {
            console.error("Order.load: " + error)
        }
    };
    Order.button = function (boton) {
        try {
            cargarBoton(boton)
        } catch (error) {
            console.error("Order.button: " + error)
        }
    };
    Order.stateOrder = function (funcion) {
        try {
            cargarFuncionEstado(funcion)
        } catch (error) {
            console.error("Order.stateOrder: " + error)
        }
    };
    Order.finish = function (funcion) {
        try {
            cargarFuncionFinal(funcion)
        } catch (error) {
            console.error("Order.finish: " + error)
        }
    };
    Order.remove = function () {
        try {
            eliminarOrdenar()
        } catch (error) {
            console.error("Order.remove: " + error)
        }
    };

    
    
    function cargarOrdenar(elementos, textos, limite) {
        funcionEstado = function () {};
        funcionFinal = function () {};
        contenedorLimite = limite || "Stage";
        botonVerificar = $();
        elementosMover = elementos.slice();
        textosCorrectos = textos.slice();
        intentosMalos = Options.order().intentosMalos;
        almacenarPosicionOrigen();
        cargarTextos();
        reposicionarElementos();
        cargarDrag()
    }

    function almacenarPosicionOrigen() {
        posicionOrigen = {};
        posicionEnDrag = [];
        for (var fraceActual = 0; fraceActual < elementosMover.length; fraceActual++) {
            var elementosDeFrace = elementosMover[fraceActual];
            var posicionesElementosDeFrace = [];
            for (var i = 0; i < elementosDeFrace.length; i++) {
                var elementoActual = Display.get(elementosDeFrace[i]);
                posicionOrigen[elementoActual.getName()] = elementoActual.position();
                posicionesElementosDeFrace.push(elementoActual.position())
            }
            posicionesElementosDeFrace = Arrays.random(posicionesElementosDeFrace);
            posicionEnDrag.push(posicionesElementosDeFrace)
        }
    }

    function cargarTextos() {
        Text.load(elementosMover, textosCorrectos, "middle center")
    }

    function reposicionarElementos() {
        for (var fraceActual = 0; fraceActual < elementosMover.length; fraceActual++) {
            var elementosDeFrace = elementosMover[fraceActual];
            for (var i = 0; i < elementosDeFrace.length; i++) {
                var elementoActual = Display.get(elementosDeFrace[i]);
                var posicionActual = posicionEnDrag[fraceActual][i];
                Display.position(elementoActual, posicionActual.x, posicionActual.y)
            }
        }
    }

    function cargarDrag() {
        Options.drag({
            eje: Options.order().eje
        });
        for (var fraceActual = 0; fraceActual < elementosMover.length; fraceActual++) {
            var elementosDeFrace = elementosMover[fraceActual];
            Drag.load(elementosDeFrace, false, contenedorLimite)
        }
        Drag.functionReturnStart(almacenarPosicionElementoActual);
        Drag.functionReturnDrag(detectarColisionConElementos);
        Drag.functionReturnDrop(reposicionarElementos)
    }

    function almacenarPosicionElementoActual(elemento) {
        posicionElementoActual = elemento.position();
        for (var fraceActual = 0; fraceActual < elementosMover.length; fraceActual++) {
            var elementosDeFrace = elementosMover[fraceActual];
            for (var i = 0; i < elementosDeFrace.length; i++) {
                var elementoActual = Display.get(elementosDeFrace[i]);
                if (elementoActual.attr("id") === elemento.attr("id")) {
                    fraceActualDelDrag = fraceActual;
                    break
                }
            }
        }
    }

    function detectarColisionConElementos(elemento) {
        for (var fraceActual = 0; fraceActual < elementosMover[fraceActualDelDrag].length; fraceActual++) {
            var elementoActual = Display.get(elementosMover[fraceActualDelDrag][fraceActual]);
            colisionActual = elementoActual;
            if (elementoActual.attr("id") !== elemento.attr("id") && colisionConCursor()) {
                intercambiarPosicionElementos(fraceActualDelDrag)
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
                return true
            }
        } else {
            if (posicionCursor.y >= posicionColision.y && posicionCursor.y <= (altoColision + posicionColision.y)) {
                return true
            }
        }
        return false
    }

    function intercambiarPosicionElementos(fraceActual) {
        var posicionElementoColision = colisionActual.position();
        var posicionArrayColision;
        var posicionArrayActual;
        for (var i = 0; i < posicionEnDrag[fraceActual].length; i++) {
            var posicion = posicionEnDrag[fraceActual][i];
            if (posicion.x === posicionElementoColision.x && Options.order().eje === "x") {
                posicionArrayColision = i
            }
            if (posicion.y === posicionElementoColision.y && Options.order().eje === "y") {
                posicionArrayColision = i
            }
            if (posicion.x === posicionElementoActual.x && Options.order().eje === "x") {
                posicionArrayActual = i
            }
            if (posicion.y === posicionElementoActual.y && Options.order().eje === "y") {
                posicionArrayActual = i
            }
        }
        posicionEnDrag[fraceActual][posicionArrayActual] = posicionElementoColision;
        posicionEnDrag[fraceActual][posicionArrayColision] = posicionElementoActual;
        posicionElementoActual = posicionElementoColision;
        reposicionarElementos()
    }

    function eliminarOrdenar() {
        funcionEstado = function () {};
        eliminarListener();
        Options.drag({
            eje: "xy"
        });
        for (var fraceActual = 0; fraceActual < elementosMover.length; fraceActual++) {
            var elementosDeFrace = elementosMover[fraceActual];
            Drag.remove(elementosMover)
        }
    }

    function cargarBoton(boton) {
        botonVerificar = Display.get(boton);
        cargarListener()
    }

    function cargarListener() {
        botonVerificar.click(verificarOpciones);
        Button.over(botonVerificar)
    }

    function eliminarListener() {
        botonVerificar.removeClick();
        Button.over(botonVerificar, false)
    }

    function cargarFuncionFinal(funcion) {
        funcionFinal = funcion || function () {}
    }

    function cargarFuncionEstado(funcion) {
        funcionEstado = funcion || function () {};
        funcionEstado(intentosMalos)
    }

    function verificarOpciones() {
        intentosActuales = 0;
        var intentoPorFrase = 0;
        for (var fraceActual = 0; fraceActual < elementosMover.length; fraceActual++) {
            var elementosDeFrace = elementosMover[fraceActual];
            for (var i = 0; i < elementosDeFrace.length; i++) {
                var elementoActual = Display.get(elementosDeFrace[i]);
                var posicionActual = elementoActual.position();
                var posicionBien = posicionOrigen[elementoActual.getName()];
                if (posicionBien.x === posicionActual.x && posicionBien.y === posicionActual.y) {
                    detenerFotogramaElementoMovido(elementoActual, "bien")
                } else {
                    detenerFotogramaElementoMovido(elementoActual, "mal");
                    intentoPorFrase += 1
                }
            }
            verificarIntentos(intentoPorFrase);
            intentoPorFrase = 0
        }
        verificarFinJuego();
        funcionEstado(intentosActuales)
    }

    function verificarIntentos(intentoPorFrase) {
        intentoPorFrase = Math.round(intentoPorFrase / 2);
        if (Options.order().errorPorFrase && intentoPorFrase > 0) {
            intentosMalos -= 1
        } else {
            intentosMalos -= intentoPorFrase
        }
        intentosActuales = intentosMalos;
        if (intentosMalos < 0) {
            intentosActuales = 0
        }
    }

    function detenerFotogramaElementoMovido(elemento, fotograma) {
        elemento.stop(fotograma)
    }

    function verificarFinJuego() {
        resultado = true;
        if (intentosMalos < 0) {
            resultado = false;
            finDeJuego()
        }
        if (elementosPosicionadosBien()) {
            finDeJuego()
        }
    }

    function elementosPosicionadosBien(fotograma) {
        for (var fraceActual = 0; fraceActual < elementosMover.length; fraceActual++) {
            var elementosDeFrace = elementosMover[fraceActual];
            for (var i = 0; i < elementosDeFrace.length; i++) {
                var elementoActual = Display.get(elementosDeFrace[i]);
                if (elementoActual.getLabelPosition("bien") !== elementoActual.getPosition()) {
                    return false
                }
            }
        }
        return true
    }

    function finDeJuego() {
        funcionEstado(0);
        eliminarOrdenar();
        funcionFinal(resultado)
    }
})(jQuery);
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
    var timefunction = null;
    
    Presentation.load = function (contenedor, botonAtras, botonAdelante, paginacion) {
        try {
            cargarPresentacion(contenedor, botonAtras, botonAdelante, paginacion)
        } catch (error) {
            console.error("Presentation.load: " + error)
        }
    };
    Presentation.folderText = function (rutaCarpeta, cantidadArchivos) {
        try {
            cargarCarpetaDeTextos(rutaCarpeta, cantidadArchivos)
        } catch (error) {
            console.error("Presentation.folderText: " + error)
        }
    };
    Presentation.remove = function () {
        try {
            eliminarPresentacion()
        } catch (error) {
            console.error("Presentation.remove: " + error)
        }
    };
    Presentation.reload = function (pagina) {
        try {
            recargarPagina(pagina)
        } catch (error) {
            console.error("Presentation.reload: " + error)
        }
    };
    Presentation.functionReturn = function (arrayPaginaFuncion) {
        try {
            arrayFuncionesDeRetorno = arrayPaginaFuncion
        } catch (error) {
            console.error("Presentation.functionReturn: " + error)
        }
    };
    Presentation.finish = function (funcion) {
        try {
            cargarFuncionFinal(funcion)
        } catch (error) {
            console.error("Presentation.finish: " + error)
        }
    };
    Presentation.getCurrentPage = function () {
        return paginaActual
    };
    Presentation.slider = function (contenedor) {
        try {
            cargarSlider(contenedor)
        } catch (error) {
            console.error("Presentation.slider: " + error)
        }
    };
    Presentation.pause = function () {
        try {
            pausarPresentacion()
        } catch (error) {
            console.error("Presentation.pause: " + error)
        }
    };
    Presentation.play = function () {
        try {
            continuarPresentacion()
        } catch (error) {
            console.error("Presentation.play: " + error)
        }
    };

    function cargarPresentacion(contenedor, botonAtrasNuevo, botonAdelanteNuevo, paginacionNueva) {
        eliminarPresentacion();
        botonAtras = Display.get(botonAtrasNuevo);
        botonAdelante = Display.get(botonAdelanteNuevo);
        paginacion = Display.get(paginacionNueva);
        contenedorPresentacion = Display.get(contenedor);
        paginaActual = 1;
        funcionFinal = function () {};
        paginacion.hide();
        verificarContenedorPresentacion()
    }

    function verificarContenedorPresentacion() {
        var contenedorTexto = Display.get(Display.getName(contenedorPresentacion) + "." + Options.containerText());
        if (!$.isEmptyObject(contenedorTexto)) {
            contenedorPresentacion = contenedorTexto
        }
    }

    function cargarCarpetaDeTextos(rutaCarpeta, cantidadArchivos) {
        cantidadDePaginas = cantidadArchivos || 1;
        rutaCarpetaTextos = rutaCarpeta;
        paginaActual = 1;
        arrayTextosCargados = [];
        numeroDeArchivo = 1;
        if (rutaCarpeta === "null" || rutaCarpeta.length < 1) {
            arrayTextosCargados = Arrays.fill("", cantidadArchivos);
            primerArchivoCargado()
        } else {
            cargarArchivo(numeroDeArchivo)
        }
    }

    function cargarArchivo(numeroDeArchivo) {
        var ruta = rutaCarpetaTextos + numeroDeArchivo + ".html";
        $.when($.get(ruta)).then(function (archivo) {
            arrayTextosCargados[numeroDeArchivo - 1] = archivo;
            if (numeroDeArchivo === 1) {
                primerArchivoCargado()
            }
            numeroDeArchivo += 1;
            verificarArchivosCargados(numeroDeArchivo)
        }, function () {
            if (numeroDeArchivo === 1) {
                primerArchivoCargado()
            }
            numeroDeArchivo += 1;
            verificarArchivosCargados(numeroDeArchivo)
        })
    }

    function primerArchivoCargado() {
        cambiarPagina();
        animacionContenedorIn();
        cargarListener();
        verificarPaginaCargada()
    }

    function verificarArchivosCargados(numeroDeArchivo) {
        if (numeroDeArchivo <= cantidadDePaginas) {
            cargarArchivo(numeroDeArchivo)
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
        $("body").unbind("keyup");
        paginaActual = 0;
    }

    function cargarFuncionFinal(funcion) {
        opcionFuncionFinalActivada = true;
        funcionFinal = funcion;
        verificarPaginaCargada()
    }

    function cargarListener() {
        Event.click(botonAdelante, cambiarPaginaConBoton);
        Event.click(botonAtras, cambiarPaginaConBoton);
        if (Options.presentation().habilitarPasarConteclado == true) {
            $("body").bind("keyup", cambiarPaginaConTeclado);
            $("body").focus()
        }
    }

    function eliminarListener() {
        Event.removeClick(botonAdelante);
        Event.removeClick(botonAtras);
        $("body").unbind("keyup")
    }

    function limpiarContenedorDeTextos() {
        Sound.removePlayButtons();
        $("[buttonover]").each(function () {
            if ($(this).attr("id") !== undefined) {
                Button.over($("#" + $(this).attr("id")), false)
            }
        });
        $("[simbolo]").each(function () {
            Display.removeChild($(this).attr("simbolo"))
        })
    }

    function cambiarPaginaConBoton(boton) {
         if (boton.attr("id") === botonAdelante.attr("id")) {
            if (paginaActual === cantidadDePaginas) {
                eliminarPresentacion();
                funcionFinal()
            } else {
                paginaActual += 1;
                verificarPaginaCargada();
                animacionContenedorOut()
            }
        } else {
            paginaActual -= 1;
            verificarPaginaCargada();
            animacionContenedorOut()
        }
    }

      function cambiarPaginaConTeclado(tecla) {
        if (tecla.keyCode === 39) {
            if (paginaActual === cantidadDePaginas && opcionFuncionFinalActivada) {
                eliminarPresentacion();
                funcionFinal()
            } else {
                if (paginaActual < cantidadDePaginas) {
                    paginaActual += 1;
                    verificarPaginaCargada();
                    animacionContenedorOut()
                }
            }
        }
        if (tecla.keyCode === 37) {
            if (paginaActual > 1) {
                paginaActual -= 1;
                verificarPaginaCargada();
                animacionContenedorOut()
            }
        }
    }

    function verificarPaginaCargada() {
        cargarTextoPaginacion();
        mostrarPaginacion();
        visualizarBotones()
    }

    function mostrarPaginacion() {
        if (cantidadDePaginas > 1) {
            paginacion.show()
        }
    }

    function cargarTextoPaginacion() {
        var textoPaginacion = paginaActual + "/" + cantidadDePaginas;
        if (cantidadDePaginas > 9 && paginaActual < 10) {
            textoPaginacion = "<span style='opacity:0;'>0</span>" + paginaActual + "/" + cantidadDePaginas
        }
        Text.load(paginacion, textoPaginacion, "middle center");
        Style.paginacion(paginacion)
    }

    function visualizarBotones() {
        if (paginaActual >= cantidadDePaginas) {
            botonAdelante.hide();
            botonAtras.show()
        } else {
            if (paginaActual <= 1) {
                botonAdelante.show();
                botonAtras.hide()
            } else {
                botonAdelante.show();
                botonAtras.show()
            }
        } if (cantidadDePaginas === 1) {
            botonAtras.hide();
            botonAdelante.hide();
            ocultarPaginacion()
        }
        if (opcionFuncionFinalActivada && paginaActual === cantidadDePaginas) {
            botonAdelante.show()
        }
    }

    function ocultarPaginacion() {
        paginacion.hide()
    }

    function animacionContenedorIn() {
        mostrarPaginacion();
        TweenMax.to(contenedorPresentacion, 0.5, {
            alpha: 1,
            ease: Cubic.easeOut
        })
    }

    function animacionContenedorOut() {
        TweenMax.to(contenedorPresentacion, 0.5, {
            alpha: 0,
            onComplete: animacionContenedorOutCompleta
        })
    }

    function animacionContenedorOutCompleta() {
        cambiarPagina();
        animacionContenedorIn();
        if (botonSliderInactivo) {
            moverPosicionSlide()
        }
    }

    function cambiarPagina() {
        clearTimeout(timefunction);
        limpiarContenedorDeTextos();
        cargarTextosContenedor();
        cargarAudios();
        centrarContenido();
        ocultarEnlacesHtml();
        organizarNivelesTextos();
        mostrarEnlacesHtml();
        animarElementosContenedor();
        cargarFuncionesDeRetorno();
        Html.load()
    }

    function cargarTextosContenedor() {
        Style.presentacion();
        if (arrayTextosCargados[paginaActual - 1] !== undefined) {
            contenedorPresentacion.html("<div>" + arrayTextosCargados[paginaActual - 1] + "</div>")
        } else {
            contenedorPresentacion.html("<div><b><i>Pagina no encontrada.</i></b></div>")
        }
        Style.contenedor(contenedorPresentacion)
    }

    function cargarAudios() {
        if (paginaActual != 0) {
            var rutaAudio = rutaCarpetaTextos.split("/");
            rutaAudio.pop();
            rutaAudio.shift();
            rutaAudio = rutaAudio.toString();
            rutaAudio = rutaAudio.replace(/[,]/g, "/");
            rutaAudio = Options.sound().rutaAudio + "/" + rutaAudio + "/audio" + paginaActual;
            Sound.play(rutaAudio)
        }
    }

    function centrarContenido() {
        $(".contenedor-presentacion .middle").each(function () {
            $(this).parent().addClass("middleparent")
        })
    }

    function ocultarEnlacesHtml() {
        arrayDeEnlacesHtml = $("#" + contenedorPresentacion.attr("id") + " a");
        if (arrayDeEnlacesHtml.length > 0) {
            $(arrayDeEnlacesHtml).hide()
        }
    }

    function organizarNivelesTextos() {
        $("ul[type=none], ol[type=none], li[type=none]").each(function () {
            $(this).css({
                "list-style-type": "none"
            })
        });
        $(".contenedor-presentacion ul, .contenedor-presentacion ol, .contenedor-presentacion ol+ul, .contenedor-presentacion ul+ol").each(function () {
            var anchoElemento = $(this).outerWidth(true);
            var elementoPadre = $(this).parent();
            var anchoPadreDelElemento = elementoPadre.outerWidth(true);
            if (elementoPadre.context.parentNode.localName === "li") {
                elementoPadre = $(elementoPadre.context.parentNode.parentNode);
                anchoPadreDelElemento = elementoPadre.outerWidth(true) + 9
            }
            var diferencia = anchoPadreDelElemento - anchoElemento - 10;
            if ($(this)[0].nodeName === "OL") {
                diferencia = diferencia - 5
            }
            $(this).css({
                "margin-left": "-" + diferencia + "px"
            });
            if (Core.browser.ie || Core.browser.firefox) {
                $(this).css({
                    width: (anchoPadreDelElemento - diferencia + 10) + "px"
                })
            }
        })
    }

    function mostrarEnlacesHtml() {
        if (arrayDeEnlacesHtml.length > 0) {
            $(arrayDeEnlacesHtml).show()
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
                })
            } else {
                TweenMax.fromTo($(this), 0.5, {
                    alpha: 0
                }, {
                    alpha: 1,
                    delay: $(this).attr("delay"),
                    onComplete: $(this).attr("oncomplete")
                })
            }
        })
    }
    
    function cargarFuncionesDeRetorno() {
         timeFunction = setTimeout(function(){
           for (var i = 0; i < arrayFuncionesDeRetorno.length; i++) {
            if (arrayFuncionesDeRetorno[i][0] === paginaActual) {
                arrayFuncionesDeRetorno[i][1]()
            }
            if (arrayFuncionesDeRetorno[i][0] === -1 || arrayFuncionesDeRetorno[i][0] === 0) {
                arrayFuncionesDeRetorno[i][1]()
            }
        }
       },10);
        
    }
    
  

    function recargarPagina(pagina) {
        paginaActual = pagina || 1;
        verificarPaginaCargada();
        animacionContenedorOut()
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
            cursor: "pointer"
        });
        arrayPosicionSlide = [];
        var posicionActual = botonSlider.position().x;
        for (var i = 0; i < cantidadDePaginas; i++) {
            arrayPosicionSlide.push(posicionActual);
            posicionActual += anchoContenedor;
            posicionActual = Math.round(posicionActual)
        }
        botonSlider.draggable({
            axis: "x",
            containment: "#" + idContendor,
            grid: [anchoContenedor, 1],
            start: function () {
                botonSliderInactivo = false
            },
            stop: function () {
                botonSliderInactivo = true
            },
            drag: function () {
                var posicionBoton = Math.round(botonSlider.position().x);
                var posicionDePagina = Arrays.indexOf(arrayPosicionSlide, posicionBoton);
                if (posicionDePagina !== -1) {
                    paginaActual = posicionDePagina + 1;
                    verificarPaginaCargada();
                    animacionContenedorOut()
                }
            }
        })
    }

    function moverPosicionSlide() {
        Display.position(botonSlider, arrayPosicionSlide[paginaActual - 1], 0)
    }

    function pausarPresentacion() {
        eliminarListener()
    }

    function continuarPresentacion() {
        cargarListener()
    }
})(jQuery);
(function ($) {
    Scorm = {};
    var conexionScorm;
    Scorm.initialize = function () {
        try {
            iniciarScorm()
        } catch (error) {
            console.error("Scorm.initialize: No se puede iniciar el conexionScorm en la multimedia" + error)
        }
    };
    Scorm.qualify = function (nota) {
        try {
            calificar(nota)
        } catch (error) {
            console.error("Scorm.Qualify: " + error)
        }
    };
    Scorm.close = function () {
        try {
            cerrarScorm()
        } catch (error) {
            console.error("Scorm.close: " + error)
        }
    };

    function iniciarScorm() {
        conexionScorm = pipwerks.SCORM;
        conexionScorm.init()
    }

    function calificar(nota) {
        if (typeof nota === "number") {
            nota = nota.toString()
        }
        conexionScorm.set("cmi.core.score.raw", nota)
    }

    function cerrarScorm() {
        conexionScorm.set("cmi.core.lesson_status", "completed");
        conexionScorm.quit()
    }
})(jQuery);
(function ($) {
    Sound = {};
    var funcionRetornoAudioTerminado = function () {};
    var cargaAudioAjax = null;
    var estadoMute = false;
    var botonDeSonido = $();
    var estadosDeBotonSonido = {
        normal: 0,
        silencio: 1000
    };
    var tiposDeAudios = {
        mp3: "audio/mpeg",
        ogg: "audio/ogg",
        wav: "audio/wav",
        aac: "audio/aac",
        m4a: "audio/x-m4a"
    };
    var botonesPlay = [];
    var rutaAudiosDeBotones = {};
    var reconocimientoDeVoz;
    var botonMicrofono;
    var conteendorTextoReconocimiento;
    var textoValidarReconocimiento;
    var funcionRetornoReconocimiento;
    Sound.microphone = function () {
        if (navegadorSoportaMedia()) {
            $("body").append("<video id='video' autoplay></video>");
            window.URL = window.URL || window.webkitURL;
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
            navigator.getUserMedia({
                video: true,
                audio: true
            }, function (media) {
                $("video").attr("src", window.URL.createObjectURL(media))
            }, function () {
                console.erro("paila no sirve")
            })
        } else {
            console.error("Sound.microphone: El navegador no soporta esta opcion.")
        }
    };

    function navegadorSoportaMedia() {
        return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia)
    }
    Sound.play = function (rutaAudio, funcionRetorno) {
        try {
            reproducirAudio(rutaAudio, funcionRetorno)
        } catch (error) {
            console.error("Sound.play: " + error)
        }
    };
    Sound.stop = function () {
        try {
            detenerSonido()
        } catch (error) {
            console.error("Sound.stop: " + error)
        }
    };
    Sound.mute = function (estado) {
        try {
            silenciarAudio(estado)
        } catch (error) {
            console.error("Sound.mute: " + error)
        }
    };
    Sound.buttonMute = function (elemento) {
        try {
            cargarBotonMute(elemento)
        } catch (error) {
            console.error("Sound.button: " + error)
        }
    };
    Sound.playButtons = function (botones, audios) {
        try {
            cargarBotonesDeAudios(botones, audios)
        } catch (error) {
            console.error("Sound.playButtons: " + error)
        }
    };
    Sound.stopPlayButtons = function () {
        try {
            pausarAudiosBotonPlay()
        } catch (error) {
            console.error("Sound.stopPlayButtons: " + error)
        }
    };
    Sound.removePlayButtons = function () {
        try {
            eliminarBotonesDeAudios()
        } catch (error) {
            console.error("Sound.removePlayButtons: " + error)
        }
    };
    Sound.controls = function (contenedor) {
        try {
            cargarControlAudio(contenedor)
        } catch (error) {
            console.error("Sound.controls: " + error)
        }
    };
    Sound.speak = function (boton, contenedor) {
        try {
            cargarHablar(boton, contenedor)
        } catch (error) {
            console.error("Sound.speak: " + error)
        }
    };
    Sound.speakText = function (textoValidar) {
        try {
            cargarTextoReconocimiento(textoValidar)
        } catch (error) {
            console.error("Sound.speakText: " + error)
        }
    };
    Sound.speakState = function (funcionRetorno) {
        try {
            cargarFuncionEstadoReconocimiento(funcionRetorno)
        } catch (error) {
            console.error("Sound.speakState: " + error)
        }
    };

    function reproducirAudio(rutaAudio, funcionRetorno) {
        var extension = "mp3";
        if (Core.browser.firefox) {
            extension = "ogg"
        }
        rutaAudio += "." + extension;
        funcionRetornoAudioTerminado = funcionRetorno || function () {};
        detenerSonido();
        var tipoAudio = tiposDeAudios[extension];
        $.when($.get(rutaAudio)).then(function () {
            var etiquetaHtmlAudio = "<audio id='codecraft-audio' preload='auto' type='" + tipoAudio + "'src='" + rutaAudio + "'></audio>";
            $("body").append(etiquetaHtmlAudio);
            if ($("#codecraft-audio").length > 0) {
                document.getElementById("codecraft-audio").muted = estadoMute;
                document.getElementById("codecraft-audio").play();
                $("#codecraft-audio").bind("ended", sonidoFinalizado)
            }
        }, sonidoNoEncontrado)
    }

    function detenerSonido() {
        if (document.getElementById("codecraft-audio") !== null) {
            $("#codecraft-audio").unbind("ended");
            document.getElementById("codecraft-audio").pause()
        }
        $("#codecraft-audio").remove();
        if (cargaAudioAjax !== null) {
            cargaAudioAjax.abort();
            cargaAudioAjax = null
        }
    }

    function silenciarAudio(estado) {
        estadoMute = estado;
        var elementoAudio = document.getElementById("codecraft-audio");
        if (elementoAudio !== null) {
            elementoAudio.muted = estadoMute
        }
        cambiarEstadoDeBoton()
    }

    function cargarBotonMute(elemento) {
        botonDeSonido = Display.get(elemento);
        if (botonDeSonido.getLabelPosition("normal") !== undefined) {
            estadosDeBotonSonido.normal = botonDeSonido.getLabelPosition("normal")
        }
        if (botonDeSonido.getLabelPosition("silencio") !== undefined) {
            estadosDeBotonSonido.silencio = botonDeSonido.getLabelPosition("silencio")
        }
        cambiarEstadoDeBoton();
        botonDeSonido.bind("mouseup", botonSonidoPresionado);
        botonDeSonido.css({
            cursor: "pointer"
        })
    }

    function sonidoFinalizado() {
        $("#codecraft-audio").remove();
        funcionRetornoAudioTerminado();
        funcionRetornoAudioTerminado = function () {}
    }

    function cambiarEstadoDeBoton() {
        if (estadoMute) {
            botonDeSonido.stop(estadosDeBotonSonido.silencio)
        } else {
            botonDeSonido.stop(estadosDeBotonSonido.normal)
        }
    }

    function botonSonidoPresionado() {
        silenciarAudio(!estadoMute)
    }

    function cargarBotonesDeAudios(botones, audios) {
        botonesPlay = botones;
        rutaAudiosDeBotones = {};
        for (var i = 0; i < botonesPlay.length; i++) {
            var botonActual = Display.get(botonesPlay[i]);
            var idDelBoton = botonActual.attr("id");
            rutaAudiosDeBotones[idDelBoton] = audios[i]
        }
        cargarAudiosBotonesPlay()
    }

    function eliminarBotonesDeAudios() {
        pausarAudiosBotonPlay();
        for (var i = 0; i < botonesPlay.length; i++) {
            var botonActual = Display.get(botonesPlay[i]);
            var idDelBoton = botonActual.attr("id");
            $("#audio-" + idDelBoton).remove()
        }
        eliminarListenerBotonesPlay();
        botonesPlay = [];
        rutaAudiosDeBotones = {}
    }

    function cargarAudiosBotonesPlay() {
        for (var i = 0; i < botonesPlay.length; i++) {
            var botonActual = Display.get(botonesPlay[i]);
            var idDelBoton = botonActual.attr("id");
            var nombreDelAudio = rutaAudiosDeBotones[idDelBoton];
            cargarAudioBotonesPlayEnDom(nombreDelAudio, idDelBoton)
        }
        listenerBotonesPlay()
    }

    function cargarAudioBotonesPlayEnDom(rutaAudio, idDelAudio) {
        var extension = "mp3";
        if (Core.browser.firefox) {
            extension = "ogg"
        }
        rutaAudio += "." + extension;
        var tipoAudio = tiposDeAudios[extension];
        var etiquetaHtmlAudio = "<audio id='audio-" + idDelAudio + "' preload='auto' type='" + tipoAudio + "' src='" + rutaAudio + "'></audio>";
        $.ajax({
            url: rutaAudio,
            success: function () {
                $("body").append(etiquetaHtmlAudio);
                rutaAudiosDeBotones[idDelAudio] = document.getElementById("audio-" + idDelAudio);
                if ($("#audio-" + idDelAudio).length > 0) {
                    $("#audio-" + idDelAudio).bind("ended", sonidoBotonesPlayFinalizado)
                }
            }
        })
    }

    function sonidoBotonesPlayFinalizado() {
        pausarAudiosBotonPlay()
    }

    function listenerBotonesPlay() {
        Event.click(botonesPlay, botonPlayPresionado)
    }

    function eliminarListenerBotonesPlay() {
        Event.removeClick(botonesPlay)
    }

    function botonPlayPresionado(botonPresionado) {
        var idDelBoton = botonPresionado.attr("id");
        var audioActual = rutaAudiosDeBotones[idDelBoton];
        if (tipoDeVariable(audioActual) !== "string") {
            if (audioActual.paused) {
                pausarAudiosBotonPlay();
                audioActual.play();
                botonPresionado.stop("pause")
            } else {
                audioActual.pause();
                audioActual.currentTime = 0;
                botonPresionado.stop("play")
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
                audioActual.currentTime = 0
            }
        }
    }
    var cargarControl;
    var contenedorControl = $("body");

    function cargarControlAudio(contenedor) {
        contenedorControl = Display.get(contenedor);
        cargarControl = true
    }

    function sonidoNoEncontrado() {
        $("#codecraft-audio").remove();
        Timer.load(Options.sound().tiempoAudio, funcionRetornoAudioTerminado)
    }

    function tipoDeVariable(elemento) {
        return $.type(elemento)
    }

    function cargarHablar(boton, contenedor) {
        if (soportaReconocimiento()) {
            funcionRetornoReconocimiento = function () {};
            textoValidarReconocimiento = "";
            botonMicrofono = Display.get(boton);
            conteendorTextoReconocimiento = Display.get(contenedor);
            contenedor = Display.get(contenedor + "." + Options.containerText());
            if (contenedor.length > 0) {
                conteendorTextoReconocimiento = contenedor
            }
            reconocimientoDeVoz = new webkitSpeechRecognition();
            reconocimientoDeVoz.onresult = function (event) {
                if (event.results.length > 0) {
                    conteendorTextoReconocimiento.html("<div class='texto'>" + event.results[0][0].transcript + "</div>")
                }
                validarTextoReconocimiento()
            };
            listenerDeReconocimientoDeVoz()
        }
    }

    function soportaReconocimiento() {
        if (Core.browser.chrome) {
            return true
        }
        return false
    }

    function validarTextoReconocimiento() {
        var textoContenedor = conteendorTextoReconocimiento.text().toLowerCase();
        var estadoRespuesta = false;
        if (textoContenedor === textoValidarReconocimiento) {
            estadoRespuesta = true
        }
        funcionRetornoReconocimiento(estadoRespuesta)
    }

    function listenerDeReconocimientoDeVoz() {
        Event.click(botonMicrofono, iniciarReconocimientoDeVoz);
        Button.over(botonMicrofono)
    }

    function iniciarReconocimientoDeVoz() {
        reconocimientoDeVoz.lang = "en-US";
        reconocimientoDeVoz.start()
    }

    function cargarTextoReconocimiento(textoValidar) {
        textoValidarReconocimiento = textoValidar.toLowerCase()
    }

    function cargarFuncionEstadoReconocimiento(funcionRetorno) {
        funcionRetornoReconocimiento = funcionRetorno
    }
})(jQuery);
(function ($) {
    Style = {};
    Style.paginacion = function (paginacion) {
        paginacion = $("#" + paginacion.attr("id") + " div");
        paginacion.css({
            "font-family": Options.font(),
            "font-size": Options.pagination().size + "px",
            "font-weight": Options.pagination().weight,
            "text-align": Options.pagination().aling,
            color: Options.pagination().color
        })
    };
    Style.main = function () {
        var estilo = "<style>a,a:link, a:hover, a:active, a:visited{color: #0000FF; text-decoration: underline !important;}.middle{display: table-cell !important;display: inline-block;vertical-align: middle !important;height: inherit;width: inherit;}.middleparent{display: table;}.center{text-align: center !important;}.left{text-align: left !important;}.right{text-align: right !important;}.negro{color: #000;}.bold{font-weight: bold;}.texto{font-weight: " + Options.text().weight + ";color: " + Options.text().color + ";font-family: " + Options.font() + ";-mz-font-family:" + Options.font() + ";-webkit-font-family:" + Options.font() + ";-ms-font-family:" + Options.font() + ";font-size:" + Options.text().size + "px;text-rendering: optimizelegibility;-webkit-text-rendering: optimizelegibility;-moz-text-rendering: optimizelegibility;-ms-text-rendering: optimizelegibility;text-align: " + Options.text().aling + ";line-height:" + Options.text().lineHeight + ";}#menu{display: none;width: 170px;padding: 5px;background: #FFFFFF;border: 1px solid #D3D3D3;border-radius: 5px;-moz-border-radius: 5px;-webkit-border-radius: 5px;position: absolute;}#menu ul{color: #000000;border: none;list-style-type: none;margin: 0px;padding: 0px;}#menu ul hr{margin: 0px;padding: 0px;}#menu ul li{padding: 7px;font-size: 12px;}  #menu ul li:hover{  background-color: #638fff;  color: #fff;  cursor: pointer;  }.form-control{  color: " + Options.text().color + " !important;font-size:" + Options.text().size + "px !important;display: inherit !important;}.input-mal{border-color: #F00 !important;box-shadow: 0px 0px 7px #F00 !important;}.input-bien{border-color: #75DD6C !important;box-shadow: 0px 0px 7px #75DD6C !important;}#modal-mensaje{width: 1000px;height: 640px;} </style>";
        $("body").prepend(estilo)
    };
    Style.presentacion = function () {
        $("#estilo-codecraft-presentaciones").remove();
        var estiloPresentacion = "<div id='estilo-codecraft-presentaciones'><style>.contenedor-presentacion{font-weight: " + Options.text().weight + ";color: " + Options.text().color + ";font-family: " + Options.font() + ";-mz-font-family:" + Options.font() + ";-webkit-font-family:" + Options.font() + ";-ms-font-family:" + Options.font() + ";font-size:" + Options.text().size + "px;text-rendering: optimizelegibility;-webkit-text-rendering: optimizelegibility;-moz-text-rendering: optimizelegibility;-ms-text-rendering: optimizelegibility;text-align: " + Options.text().aling + ";line-height:" + Options.text().lineHeight + ";}</style><style>.title, .title p, .title span, .title div{font-weight: " + Options.title().weight + " !important;color: " + Options.title().color + ";font-family:" + Options.font() + ";font-size:" + Options.title().size + "px;margin-top: 0px !important;}</style><style>ol,ul {font-weight: bold;font-family: " + Options.font() + ";}</style><style>p,ol p,ul p {font-weight: normal;font-family: " + Options.font() + ";text-align: justify;margin-top: 0px !important;}</style><style>.justify{text-align: justify;}</style><style>.fuente{font-size:" + Options.text().sizeFuente + "px;}</style><style>.center{text-align: center !important;}</style><style>img.center{text-align: center !important;display: block;margin: auto;}</style><style>.none{list-style: none;}</style>";
        if (Core.browser.chrome) {
            estiloPresentacion += "<style>a{word-break:break-all;white-space:pre-wrap;}</style"
        }
        if (Core.browser.firefox) {
            estiloPresentacion += "<style>a{-moz-hyphens: auto;hyphens: auto;}</style"
        }
        if (Core.browser.ie) {
            estiloPresentacion += "<style>a{hyphens: auto;-ms-hyphens: auto;}</style"
        }
        estiloPresentacion += "</div>";
        $("body").prepend(estiloPresentacion)
    };
    Style.contenedor = function (contenedor) {
        contenedor.addClass("contenedor-presentacion");
        $(".contenedor-presentacion>div").css({
            width: "inherit",
            height: "inherit"
        })
    };
    Style.slider = function (boton, contenedorPadre) {
        var anchoAltoBoton = contenedorPadre.height() * 2;
        var marginBoton = anchoAltoBoton / 4;
        contenedorPadre.css({
            "border-radius": "5px",
            border: "1px solid rgb(216, 216, 216)",
            "background-color": "rgb(240, 240, 240)"
        });
        boton.css({
            width: anchoAltoBoton + "px",
            height: anchoAltoBoton + "px",
            border: "2px solid #CACACA",
            "border-radius": "5px",
            "background-color": "#fff",
            "margin-left": "-" + marginBoton + "px",
            "margin-top": "-" + marginBoton + "px",
            position: "absolute",
            top: 0,
            left: 0
        })
    }
})(jQuery);
(function ($) {
    Talk = {};
    var contenedorConversacion;
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
    Talk.load = function (contenedor) {
        try {
            cargarConversacion(contenedor)
        } catch (error) {
            console.error("talk.load: " + error)
        }
    };
    Talk.folderText = function (rutaCarpeta, cantidadArchivos) {
        try {
            cargarCarpetaDeTextos(rutaCarpeta, cantidadArchivos)
        } catch (error) {
            console.error("Talk.folderText: " + error)
        }
    };
    Talk.remove = function () {
        try {
            eliminarConversacion()
        } catch (error) {
            console.error("talk.remove: " + error)
        }
    };
    Talk.reload = function (pagina) {};
    Talk.functionReturn = function (arrayPaginaFuncion) {
        try {
            arrayFuncionesDeRetorno = arrayPaginaFuncion
        } catch (error) {
            console.error("Talk.functionReturn: " + error)
        }
    };
    Talk.finish = function (funcion) {
        try {
            cargarFuncionFinal(funcion)
        } catch (error) {
            console.error("Talk.finish: " + error)
        }
    };

    function cargarFuncionFinal(funcion) {
        opcionFuncionFinalActivada = true;
        funcionFinal = funcion
    }
    Talk.getCurrentPage = function () {
        return paginaActual
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
            contenedor = contenedor.replace(",", ".")
        }
        contenedorPadre = Display.get(contenedor);
        contenedorPadre.stop((paginaActual - 1) * 1000);
        contenedorPadre.hide()
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
        opcionFuncionFinalActivada = false
    }

    function verificarContenedorConversacion() {
        var contenedorTexto = Display.get(contenedorConversacion.getName(true) + "." + Options.containerText());
        if (!$.isEmptyObject(contenedorTexto)) {
            contenedorConversacion = contenedorTexto
        }
    }

    function cargarCarpetaDeTextos(rutaCarpeta, cantidadArchivos) {
        if (rutaCarpeta === "null" || rutaCarpeta.length < 1) {
            arrayTextosCargados = Arrays.fill("", cantidadArchivos);
            primerArchivoCargado()
        } else {
            cantidadDePaginas = cantidadArchivos || 1;
            rutaCarpetaTextos = rutaCarpeta;
            paginaActual = 1;
            arrayTextosCargados = [];
            numeroDeArchivo = 1;
            intervaloTiempo = setInterval(function () {
                cargarArchivo(numeroDeArchivo)
            }, tiempoDelIntervalo)
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
                    primerArchivoCargado()
                }
                numeroDeArchivo += 1;
                clearInterval(intervaloTiempo);
                intervaloTiempo = setInterval(function () {
                    cargarArchivo(numeroDeArchivo)
                }, tiempoDelIntervalo)
            },
            error: function () {
                if (numeroDeArchivo === 1) {
                    primerArchivoCargado()
                }
                numeroDeArchivo += 1;
                clearInterval(intervaloTiempo);
                intervaloTiempo = setInterval(function () {
                    cargarArchivo(numeroDeArchivo)
                }, tiempoDelIntervalo)
            }
        });
        if (numeroDeArchivo > cantidadDePaginas) {
            clearInterval(intervaloTiempo)
        }
    }

    function primerArchivoCargado() {
        cambiarPagina();
        animacionGloboIn()
    }

    function limpiarContenedorDeTextos() {
        $("[simbolo]").each(function () {
            Display.removeChild($(this).attr("simbolo"))
        })
    }

    function audioCompleto() {
        if (paginaActual < cantidadDePaginas) {
            paginaActual += 1;
            animacionGloboOut()
        } else {
            TweenMax.to(contenedorPadre, 0.5, {
                alpha: 0,
                scaleX: 0,
                scaleY: 0,
                onComplete: funcionFinal
            })
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
        })
    }

    function animacionGloboOut() {
        TweenMax.to(contenedorPadre, 0.5, {
            alpha: 0,
            scaleX: 0,
            scaleY: 0,
            onComplete: animacionGloboOutCompleto
        })
    }

    function animacionGloboOutCompleto() {
        contenedorPadre.stop((paginaActual - 1) * 1000);
        cambiarPagina();
        animacionGloboIn()
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
        Html.load()
    }

    function cargarTextosContenedor() {
        Style.presentacion();
        if (arrayTextosCargados[paginaActual - 1] !== undefined) {
            contenedorConversacion.html("<div>" + arrayTextosCargados[paginaActual - 1] + "</div>")
        } else {
            contenedorConversacion.html("<div><b><i>Pagina no encontrada.</i></b></div>")
        }
        Style.contenedor(contenedorConversacion)
    }

    function cargarAudios() {
        var rutaAudio = rutaCarpetaTextos.split("/");
        rutaAudio.pop();
        rutaAudio.shift();
        rutaAudio = rutaAudio.toString();
        rutaAudio = rutaAudio.replace(/[,]/g, "/");
        rutaAudio = Options.sound().rutaAudio + "/" + rutaAudio + "/audio" + paginaActual;
        Sound.play(rutaAudio, audioCompleto)
    }

    function centrarContenido() {
        $(".middle").each(function () {
            $(this).parent().addClass("middleparent")
        })
    }

    function ocultarEnlacesHtml() {
        arrayDeEnlacesHtml = $("#" + contenedorConversacion.attr("id") + " a");
        if (arrayDeEnlacesHtml.length > 0) {
            $(arrayDeEnlacesHtml).hide()
        }
    }

    function organizarNivelesTextos() {
        $("ul[type=none], ol[type=none]").each(function () {
            $(this).css({
                "list-style-type": "none"
            })
        });
        $("ul,ol, ol+ul, ul+ol").each(function () {
            var anchoElemento = $(this).outerWidth(true);
            var elementoPadre = $(this).parent();
            var anchoPadreDelElemento = elementoPadre.outerWidth(true);
            if (elementoPadre.context.parentNode.localName === "li") {
                elementoPadre = $(elementoPadre.context.parentNode.parentNode);
                anchoPadreDelElemento = elementoPadre.outerWidth(true) + 9
            }
            var diferencia = anchoPadreDelElemento - anchoElemento - 10;
            if ($(this)[0].nodeName === "OL") {
                diferencia = diferencia - 5
            }
            $(this).css({
                "margin-left": "-" + diferencia + "px"
            });
            if (Core.browser.ie || Core.browser.firefox) {
                $(this).css({
                    width: (anchoPadreDelElemento - diferencia + 10) + "px"
                })
            }
        })
    }

    function mostrarEnlacesHtml() {
        if (arrayDeEnlacesHtml.length > 0) {
            $(arrayDeEnlacesHtml).show()
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
                })
            } else {
                TweenMax.fromTo($(this), 0.5, {
                    alpha: 0
                }, {
                    alpha: 1,
                    delay: $(this).attr("delay"),
                    onComplete: $(this).attr("oncomplete")
                })
            }
        })
    }

    function cargarFuncionesDeRetorno() {
        for (var i = 0; i < arrayFuncionesDeRetorno.length; i++) {
            if (arrayFuncionesDeRetorno[i][0] === paginaActual) {
                arrayFuncionesDeRetorno[i][1]()
            }
            if (arrayFuncionesDeRetorno[i][0] === -1 || arrayFuncionesDeRetorno[i][0] === 0) {
                arrayFuncionesDeRetorno[i][1]()
            }
        }
    }
})(jQuery);
(function ($) {
    Text = {};
    var arrayTextos;
    var cantidadDeArchivos;
    var numeroDeArchivo;
    var intervaloTiempo = 0;
    var tiempoDelIntervalo = 10;
    Text.load = function (elemento, texto, clasesCss) {
        try {
            cargarTexto(elemento, texto, clasesCss)
        } catch (error) {
            console.error("Text.load: " + error)
        }
    };
    Text.preload = function (textos, variableAlmacenar) {
        try {
            return precargarTexto(textos, variableAlmacenar)
        } catch (error) {
            console.error("Text.preload: " + error)
        }
    };

    function cargarTexto(elemento, texto, clasesCss) {
        if (tipoDeVariable(elemento) === "array") {
            for (var i = 0; i < elemento.length; i++) {
                var nuevoTexto = texto;
                if (tipoDeVariable(texto) === "array") {
                    nuevoTexto = texto[i]
                }
                cargarTexto(elemento[i], nuevoTexto, clasesCss)
            }
        } else {
            texto = String(texto);
            clasesCss = clasesCss || "";
            elemento = Display.get(elemento);
            var nombreElemento = Display.getName(elemento, true);
            var contenedor = $("#" + elemento.attr("id"));
            if ((Display.get(nombreElemento + "." + Options.containerText())).length > 0) {
                contenedor = $("#" + elemento.attr("id") + "_" + Options.containerText())
            }
            if (texto.indexOf("textos/") !== -1) {
                $.when($.get(texto + ".html")).then(function (archivo) {
                    contenedor.html("<div class='" + clasesCss + " texto'>" + archivo + "</div>");
                    AgregarDimensionesContendor(contenedor, clasesCss);
                    Html.load()
                })
            } else {
                contenedor.html("<div class='" + clasesCss + " texto'>" + texto + "</div>");
                AgregarDimensionesContendor(contenedor, clasesCss);
                Html.load()
            }
        }
    }

    function AgregarDimensionesContendor(contenedor, clasesCss) {
        if (contenedor.attr("id")) {
            $("#" + contenedor.attr("id") + ">div").css({
                width: contenedor.width() + "px",
                height: contenedor.height() + "px"
            });
            verificarTamanoFuente(clasesCss, contenedor);
            verificarColorFuente(clasesCss, contenedor)
        }
    }

    function verificarTamanoFuente(clasesCss, contenedor) {
        var arrayClasesCSS = clasesCss.split(" ");
        var tamanoFuente = 0;
        for (var i = 0; i < arrayClasesCSS.length; i++) {
            var claseActual = arrayClasesCSS[i];
            if (claseActual.indexOf("size") !== -1) {
                tamanoFuente = claseActual.substr(4);
                asignarTamanoFuente(tamanoFuente, contenedor)
            }
        }
    }

    function asignarTamanoFuente(tamanoFuente, contenedor) {
        $("#" + contenedor.attr("id") + ">div").css({
            "font-size": tamanoFuente + "px"
        })
    }

    function verificarColorFuente(clasesCss, contenedor) {
        var arrayClasesCSS = clasesCss.split(" ");
        var colorFuente = 0;
        for (var i = 0; i < arrayClasesCSS.length; i++) {
            var claseActual = arrayClasesCSS[i];
            if (claseActual.indexOf("color") !== -1) {
                colorFuente = claseActual.substr(5);
                asignarColorFuente(colorFuente, contenedor)
            }
        }
    }

    function asignarColorFuente(colorFuente, contenedor) {
        $("#" + contenedor.attr("id") + ">div").css({
            color: "#" + colorFuente
        })
    }

    function precargarTexto(texto, contenedorResultado) {
        var resultado;
        window.contenedorResultado = resultado
    }

    function cargarArchivo(rutaArchivo, contenedor, key) {
        rutaArchivo += ".html";
        $.ajax({
            url: rutaArchivo,
            async: false,
            success: function (archivo) {
                if (key !== undefined) {
                    contenedor[key] = archivo
                } else {
                    contenedor = archivo
                }
            }
        })
    }

    function tipoDeVariable(elemento) {
        return $.type(elemento)
    }
})(jQuery);
(function ($) {
    Timer = {};
    var arrayTiempoEnEjecucion = [];
    Timer.chronometer = function (segundos, funcionRetorno, retroceso) {
        try {
            ejecutarCronometro(segundos, funcionRetorno, retroceso)
        } catch (error) {
            console.error("Timer.chronometer: " + error)
        }
    };

    function ejecutarCronometro(segundos, funcionRetorno, retroceso) {}
    Timer.load = function (segundos, funcionRetorno, nombreTimer) {
        try {
            return ejecutarTiempo(segundos, funcionRetorno, nombreTimer)
        } catch (error) {
            console.error("Timer.load: " + error)
        }
    };
    Timer.stop = function (nombreTiempo) {
        try {
            detenerTiempo(nombreTiempo)
        } catch (error) {
            console.error("Timer.stop: " + error)
        }
    };

    function ejecutarTiempo(segundos, funcionRetorno, nombreTimer) {
        nombreTimer = nombreTimer || "timer" + segundos + "-" + Math.floor((Math.random() * 100000000) + 1);
        if (timerNoExiste(nombreTimer)) {
            segundos = segundos * 1000;
            var tiempoEjecucion = setTimeout(function () {
                tiempoCompleto(nombreTimer)
            }, segundos);
            var propiedadesDeTiempo = {
                tiempo: tiempoEjecucion,
                funcion: funcionRetorno,
                nombreTiempo: nombreTimer
            };
            arrayTiempoEnEjecucion.push(propiedadesDeTiempo)
        }
        return nombreTimer
    }

    function timerNoExiste(nombreTiempo) {
        for (var i = 0; i < arrayTiempoEnEjecucion.length; i++) {
            var propiedadesDeTiempo = arrayTiempoEnEjecucion[i];
            if (propiedadesDeTiempo.nombreTiempo === nombreTiempo) {
                return true
            }
        }
        return true
    }

    function tiempoCompleto(nombreTiempo) {
        for (var i = 0; i < arrayTiempoEnEjecucion.length; i++) {
            var propiedadesDeTiempo = arrayTiempoEnEjecucion[i];
            if (propiedadesDeTiempo.nombreTiempo === nombreTiempo) {
                ejecutarFuncionesRetorno(propiedadesDeTiempo.funcion);
                clearTimeout(propiedadesDeTiempo.timeout);
                arrayTiempoEnEjecucion.splice(i, 1);
                return true
            }
        }
    }

    function ejecutarFuncionesRetorno(funcionRetorno) {
        if (tipoDeVariable(funcionRetorno) === "array") {
            for (var i = 0; i < funcionRetorno.length; i++) {
                funcionRetorno[i]()
            }
        } else {
            funcionRetorno()
        }
    }

    function detenerTiempo(nombreTiempo) {
        if (!nombreTiempo) {
            arrayTiempoEnEjecucion.forEach(function (tiempo) {
                clearTimeout(tiempo.timeout)
            });
            arrayTiempoEnEjecucion = []
        } else {
            for (var i = 0; i < arrayTiempoEnEjecucion.length; i++) {
                var propiedadesDeTiempo = arrayTiempoEnEjecucion[i];
                if (propiedadesDeTiempo.nombreTiempo === nombreTiempo) {
                    clearTimeout(propiedadesDeTiempo.timeout);
                    arrayTiempoEnEjecucion.splice(i, 1);
                    break
                }
            }
        }
    }

    function tipoDeVariable(elemento) {
        return $.type(elemento)
    }
})(jQuery);
(function ($) {
    Utils = {};
    var utilsModalActivo = null;
    Utils.modal = function (elemento, escala) {
        try {
            cargarModal(elemento, escala)
        } catch (error) {
            console.error("Utils.modal: " + error)
        }
    };
    Utils.modalActive = function (elemento, escala) {
        try {
            modalActivo(elemento, escala)
        } catch (error) {
            console.error("Utils.modalActive: " + error)
        }
    };
    Utils.numbers = function (numeroInicial, numeroFinal) {
        try {
            return generarNumeros(numeroInicial, numeroFinal)
        } catch (error) {
            console.error("Utils.numbers: " + error)
        }
    };
    Utils.numberRandom = function (numeroInicial, numeroFinal) {
        try {
            return Utils.numberRandom(numeroInicial, numeroFinal)
        } catch (error) {
            console.error("Utils.numberRandom: " + error)
        }
    };
    Utils.typeOf = function (elemento) {
        try {
            return tipoDeVariable(elemento)
        } catch (error) {
            console.error("Utils.typeOf: " + error)
        }
    };

    function cargarModal(elemento, escala) {
        escala = escala || 1;
        if (typeof elemento === "string") {
            elemento = Display.get(elemento)
        }
        elemento.bind("mouseup", function () {
            modalActivo(elemento, escala)
        })
    }

    function modalActivo(elementoModal, escalaElemento) {
        if (tipoDeVariable(elementoModal) === "string" && Display.get(elementoModal).length > 0) {
            var contenedorTexto = "<div id='code-contendor-texto'></div>";
            $("body").append(contenedorTexto);
            contenedorTexto = $("#code-contendor-texto");
            contenedorTexto.append(elementoModal);
            elementoModal = contenedorTexto
        }
        utilsModalActivo = Display.get(elementoModal).clone();
        utilsModalActivo.find(".img-responsive").removeClass("img-responsive");
        utilsModalActivo.find(".row").removeClass("row");
        escalaElemento = escalaElemento || 1;
        var codigoHtml = "<div id='modal-modal'></div><div id='modal-boton-cerrar'><p>x</p></div><div id='modal-panel' class='panel'><div class='center middle' id='modal-contendor-contenido'>" + utilsModalActivo.html() + "</div></div >";
        $("body").append(codigoHtml);
        $("#modal-panel").hide();
        $("#modal-modal").css({
            "z-index": 1000,
            width: window.innerWidth + "px",
            height: window.innerHeight + "px",
            position: "absolute",
            "background-color": "rgba(136, 135, 135, 0.85)",
            margin: "auto",
            left: window.pageXOffset + "px",
            top: window.pageYOffset + "px",
            cursor: "pointer"
        });
        $("#modal-panel").css({
            "z-index": 1001,
            position: "absolute",
            margin: "0px",
            padding: "10px",
            top: ((window.innerHeight - $("#modal-panel").height()) / 2) + "px",
            left: ((window.innerWidth - $("#modal-panel").width()) / 2) + "px",
            "box-shadow": "0px 0px 10px rgba(0, 0, 0, 0.8)",
            border: "none",
            width: (utilsModalActivo.width() + 20) + "px",
            height: (utilsModalActivo.height() + 20) + "px",
            transform: "scale(" + escalaElemento + ", " + escalaElemento + ")"
        });
        $("#modal-boton-cerrar").css({
            "z-index": 1002,
            "font-size": "30px",
            position: "absolute",
            top: "15px",
            left: (window.innerWidth - 45) + "px",
            color: "#fff",
            padding: "0",
            "font-family": "'cursive,Arial'",
            "text-shadow": "2px 2px 4px #DEDEDE",
            cursor: "pointer",
        });
        $("#modal-contendor-contenido").css({
            position: "absolute",
            top: "10px",
            left: "10px"
        });
        Timer.load(0.5, function () {
            $("#modal-panel").show();
            modalReposicionar();
            TweenMax.from($("#modal-panel"), 0.5, {
                scaleX: 0,
                scaleY: 0,
                alpha: 0,
                ease: Cubic.easeout
            })
        });
        $("#modal-boton-cerrar").on("click", function () {
            modalCerrar()
        });
        $("#modal-contenedor").on("click", function () {
            modalCerrar()
        });
        $(window).resize(modalReposicionar);
        $(window).scroll(modalReposicionar);
        $(document).keyup(function (e) {
            if (e.keyCode === 27) {
                modalCerrar()
            }
        });
        if (Presentation.getCurrentPage() !== null) {
            Presentation.pause()
        }
    }

    function modalCerrar() {
        $("#modal-modal").remove();
        $("#modal-panel").remove();
        $("#modal-boton-cerrar").remove();
        $(window).off("resize", modalReposicionar);
        $(window).off("scroll", modalReposicionar);
        if (Presentation.getCurrentPage() !== null) {
            Presentation.play()
        }
    }

    function modalReposicionar() {
        try {
            $("#modal-panel").css({
                top: ((window.innerHeight - $("#modal-panel").height()) / 2) + "px",
                left: ((window.innerWidth - $("#modal-panel").width()) / 2) + "px"
            });
            $("#modal-modal").css({
                width: window.innerWidth + "px",
                height: window.innerHeight + "px",
                left: window.pageXOffset + "px",
                top: window.pageYOffset + "px"
            })
        } catch (error) {
            console.error("modalReposicionar: " + error)
        }
    }

    function generarNumeros(numeroInicial, numeroFinal) {
        numeroInicial = numeroInicial || 0;
        numeroFinal = numeroFinal || 100;
        var arrayDeNumeros = [];
        for (var i = numeroInicial; i < numeroFinal + 1; i++) {
            arrayDeNumeros.push(i)
        }
        return arrayDeNumeros
    }

    function generarNumeroAleatorio(numeroInicial, numeroFinal) {
        numeroInicial = numeroInicial || 0;
        numeroFinal = numeroFinal || 100;
        return Math.floor((Math.random() * numeroFinal) + numeroInicial)
    }

    function tipoDeVariable(elemento) {
        return $.type(elemento)
    }
    
    // funcion de audio
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
    
    
    
})(jQuery);
(function ($) {
    Video = {}
})(jQuery);