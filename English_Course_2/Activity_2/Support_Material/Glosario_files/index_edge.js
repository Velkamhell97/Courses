/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '640px'],
                ["style", "width", '1000px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"btnInicio": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: true,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'btnHome',
                    type: 'image',
                    rect: ['0px', '0px', '78px', '73px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnHome.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '73px'],
                ["style", "width", '78px']
            ],
            "${_btnHome}": [
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"fondo": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: true,
    resizeInstances: false,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '640px'],
                ["style", "overflow", 'visible'],
                ["style", "width", '1000px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"btnSonido": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: true,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '72px', '67px', 'auto', 'auto'],
                    id: 'btnSonidoOff',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnSonidoOff.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0', '0px', '72px', '67px', 'auto', 'auto'],
                    id: 'btnSonidoOn',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnSonidoOn.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_btnSonidoOn}": [
                ["style", "display", 'block']
            ],
            "${_btnSonidoOff}": [
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '67px'],
                ["style", "width", '72px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            labels: {
                "normal": 0,
                "silencio": 1000
            },
            timeline: [
                { id: "eid11", tween: [ "style", "${_btnSonidoOff}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid9", tween: [ "style", "${_btnSonidoOff}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid12", tween: [ "style", "${_btnSonidoOn}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${_btnSonidoOn}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 }            ]
        }
    }
},
"botonAB": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '310px', '160px', 'auto', 'auto'],
                    id: 'btnAB_O',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnAB_O.png', '0px', '0px']
                },
                {
                    display: 'block',
                    type: 'rect',
                    id: 'btnInt',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btnInt',
                symbolName: 'btnAB_Int',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "#symbolStage_btnAB": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_btnAB_O}": [
                ["style", "display", 'none'],
                ["transform", "scaleY", '1.05'],
                ["transform", "scaleX", '1.05']
            ],
            "${_btnInt}": [
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '160px'],
                ["style", "width", '310px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            labels: {
                "out": 0,
                "over": 500
            },
            timeline: [
                { id: "eid280", tween: [ "style", "${_btnInt}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid279", tween: [ "style", "${_btnInt}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeInOutBack" },
                { id: "eid45", tween: [ "style", "${_btnAB_O}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_btnAB_O}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 }            ]
        }
    }
},
"escenario": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'salaEspera',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'creative',
                    type: 'rect',
                    rect: ['43', '534', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'salaEspera',
                symbolName: 'salaEspera',
                autoPlay: {

               }
            },
            {
                id: 'creative',
                symbolName: 'creative'
            }            ]
        },
    states: {
        "Base State": {
            "${_creative}": [
                ["style", "left", '22px'],
                ["style", "top", '569px']
            ],
            "${symbolSelector}": [
                ["style", "height", '640px'],
                ["style", "width", '1000px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
                { id: "eid371", tween: [ "style", "${_creative}", "left", '22px', { fromValue: '22px'}], position: 0, duration: 0 },
                { id: "eid372", tween: [ "style", "${_creative}", "top", '569px', { fromValue: '569px'}], position: 0, duration: 0 }            ]
        }
    }
},
"botonCE": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '310px', '160px', 'auto', 'auto'],
                    id: 'btnCE_O',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnCE_O.png', '0px', '0px']
                },
                {
                    display: 'block',
                    type: 'rect',
                    id: 'btnInt',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btnInt',
                symbolName: 'btnCE_Int',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_btnCE_O}": [
                ["transform", "scaleX", '1.05'],
                ["transform", "scaleY", '1.05'],
                ["style", "display", 'none']
            ],
            "${_btnInt}": [
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '160px'],
                ["style", "width", '310px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            labels: {
                "out": 0,
                "over": 500
            },
            timeline: [
                { id: "eid45", tween: [ "style", "${_btnCE_O}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_btnCE_O}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid283", tween: [ "style", "${_btnInt}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid284", tween: [ "style", "${_btnInt}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeInOutBack" }            ]
        }
    }
},
"botonFH": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '310px', '160px', 'auto', 'auto'],
                    id: 'btnFH_O',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnFH_O.png', '0px', '0px']
                },
                {
                    display: 'block',
                    type: 'rect',
                    id: 'btnInt',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btnInt',
                symbolName: 'btnFH_Int',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_btnInt}": [
                ["style", "display", 'block']
            ],
            "${_btnFH_O}": [
                ["transform", "scaleX", '1.05'],
                ["transform", "scaleY", '1.05'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '160px'],
                ["style", "width", '310px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            labels: {
                "out": 0,
                "over": 500
            },
            timeline: [
                { id: "eid287", tween: [ "style", "${_btnInt}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid288", tween: [ "style", "${_btnInt}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeInOutBack" },
                { id: "eid45", tween: [ "style", "${_btnFH_O}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_btnFH_O}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 }            ]
        }
    }
},
"botonIO": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '310px', '160px', 'auto', 'auto'],
                    id: 'btnIO_O',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnIO_O.png', '0px', '0px']
                },
                {
                    display: 'block',
                    type: 'rect',
                    id: 'btnInt',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btnInt',
                symbolName: 'btnIO_Int',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_btnIO_O}": [
                ["transform", "scaleX", '1.05'],
                ["transform", "scaleY", '1.05'],
                ["style", "display", 'none']
            ],
            "${_btnInt}": [
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '160px'],
                ["style", "width", '310px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            labels: {
                "out": 0,
                "over": 500
            },
            timeline: [
                { id: "eid291", tween: [ "style", "${_btnInt}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid292", tween: [ "style", "${_btnInt}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeInOutBack" },
                { id: "eid45", tween: [ "style", "${_btnIO_O}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_btnIO_O}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 }            ]
        }
    }
},
"botonPS": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '310px', '160px', 'auto', 'auto'],
                    id: 'btnPS_O',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnPS_O.png', '0px', '0px']
                },
                {
                    display: 'block',
                    type: 'rect',
                    id: 'btnInt',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btnInt',
                symbolName: 'btnPS_Int',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '160px'],
                ["style", "width", '310px']
            ],
            "${_btnInt}": [
                ["style", "display", 'block']
            ],
            "${_btnPS_O}": [
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            labels: {
                "out": 0,
                "over": 500
            },
            timeline: [
                { id: "eid295", tween: [ "style", "${_btnInt}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid296", tween: [ "style", "${_btnInt}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeInOutBack" },
                { id: "eid45", tween: [ "style", "${_btnPS_O}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_btnPS_O}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 }            ]
        }
    }
},
"botonTZ": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '310px', '160px', 'auto', 'auto'],
                    id: 'btnTZ_O',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnTZ_O.png', '0px', '0px']
                },
                {
                    display: 'block',
                    type: 'rect',
                    id: 'btnInt',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btnInt',
                symbolName: 'btnTZ_Int',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_btnTZ_O}": [
                ["transform", "scaleX", '1.05'],
                ["transform", "scaleY", '1.05'],
                ["style", "display", 'none']
            ],
            "${_btnInt}": [
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '160px'],
                ["style", "width", '310px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            labels: {
                "out": 0,
                "over": 500
            },
            timeline: [
                { id: "eid297", tween: [ "style", "${_btnInt}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid298", tween: [ "style", "${_btnInt}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeInOutBack" },
                { id: "eid45", tween: [ "style", "${_btnTZ_O}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_btnTZ_O}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 }            ]
        }
    }
},
"btnAudio": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '41px', '41px', 'auto', 'auto'],
                    id: 'btnAudioPause2',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/contenido/btnAudioPause.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '41px', '41px', 'auto', 'auto'],
                    id: 'btnAudioPlay3',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/contenido/btnAudioPlay.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_btnAudioPlay3}": [
                ["style", "top", '0px'],
                ["style", "left", '9px'],
                ["style", "display", 'block']
            ],
            "${_btnAudioPause2}": [
                ["style", "top", '0px'],
                ["style", "left", '9px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '41px'],
                ["style", "width", '60px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            labels: {
                "play": 0,
                "pause": 500
            },
            timeline: [
                { id: "eid302", tween: [ "style", "${_btnAudioPlay3}", "left", '9px', { fromValue: '9px'}], position: 0, duration: 0 },
                { id: "eid245", tween: [ "style", "${_btnAudioPause2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid247", tween: [ "style", "${_btnAudioPause2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid244", tween: [ "style", "${_btnAudioPlay3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid246", tween: [ "style", "${_btnAudioPlay3}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }            ]
        }
    }
},
"btnMicrofono": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0px', '0px', '41px', '41px', 'auto', 'auto'],
                    id: 'btnMicrofonoA2',
                    fill: ['rgba(0,0,0,0)', 'images/contenido/btnMicrofonoA.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0px', '0px', '41px', '41px', 'auto', 'auto'],
                    id: 'btnMicrofonoD2',
                    fill: ['rgba(0,0,0,0)', 'images/contenido/btnMicrofonoD.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_btnMicrofonoA2}": [
                ["style", "top", '0px'],
                ["style", "left", '9px'],
                ["style", "display", 'none']
            ],
            "${_btnMicrofonoD2}": [
                ["style", "top", '0px'],
                ["style", "left", '9px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '41px'],
                ["style", "width", '60px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            labels: {
                "desactivado": 0,
                "activado": 500
            },
            timeline: [
                { id: "eid249", tween: [ "style", "${_btnMicrofonoA2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid251", tween: [ "style", "${_btnMicrofonoA2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid304", tween: [ "style", "${_btnMicrofonoA2}", "left", '9px', { fromValue: '9px'}], position: 500, duration: 0 },
                { id: "eid248", tween: [ "style", "${_btnMicrofonoD2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid250", tween: [ "style", "${_btnMicrofonoD2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }            ]
        }
    }
},
"ventanaPresentacion": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ventanaContenido',
                    type: 'image',
                    rect: ['0', '0', '1000px', '640px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido/ventanaContenido.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'contenedor',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['38px', '93px', '926px', '484px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    id: 'btnNext',
                    type: 'image',
                    rect: ['820px', '583px', '105px', '46px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido/btnNext.png', '0px', '0px']
                },
                {
                    id: 'icono',
                    type: 'rect',
                    rect: ['406', '21', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'icono',
                symbolName: 'icono',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_btnNext}": [
                ["style", "top", '583px'],
                ["style", "left", '820px']
            ],
            "${_contenedor}": [
                ["style", "top", '93px'],
                ["style", "height", '484px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '38px'],
                ["style", "width", '926px']
            ],
            "${symbolSelector}": [
                ["style", "height", '640px'],
                ["style", "width", '1001px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"icono": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0px', '0px', '189px', '98px', 'auto', 'auto'],
                    id: 'btnAB',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnAB.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '190px', '98px', 'auto', 'auto'],
                    id: 'btnCE',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnCE.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '189px', '98px', 'auto', 'auto'],
                    id: 'btnFH',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnFH.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '190px', '98px', 'auto', 'auto'],
                    id: 'btnIO',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnIO.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0px', '0px', '190px', '98px', 'auto', 'auto'],
                    id: 'btnPS',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnPS.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '190px', '98px', 'auto', 'auto'],
                    id: 'btnTZ',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnTZ.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_btnIO}": [
                ["style", "display", 'none'],
                ["style", "height", '98px'],
                ["style", "width", '190px']
            ],
            "${_btnTZ}": [
                ["style", "display", 'none'],
                ["style", "height", '98px'],
                ["style", "width", '190px']
            ],
            "${symbolSelector}": [
                ["style", "height", '98px'],
                ["style", "width", '189px']
            ],
            "${_btnFH}": [
                ["style", "display", 'none'],
                ["style", "height", '98px'],
                ["style", "width", '189px']
            ],
            "${_btnCE}": [
                ["style", "display", 'none'],
                ["style", "height", '98px'],
                ["style", "width", '190px']
            ],
            "${_btnAB}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "height", '98px'],
                ["style", "left", '0px'],
                ["style", "width", '189px']
            ],
            "${_btnPS}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "height", '98px'],
                ["style", "left", '0px'],
                ["style", "width", '190px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: false,
            labels: {
                "botonAB": 500,
                "botonCE": 1000,
                "botonFH": 1500,
                "botonIO": 2000,
                "botonPS": 2500,
                "botonTZ": 3000
            },
            timeline: [
                { id: "eid253", tween: [ "style", "${_btnPS}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid267", tween: [ "style", "${_btnPS}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid268", tween: [ "style", "${_btnPS}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid257", tween: [ "style", "${_btnAB}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid270", tween: [ "style", "${_btnAB}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid258", tween: [ "style", "${_btnAB}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid255", tween: [ "style", "${_btnFH}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid263", tween: [ "style", "${_btnFH}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid264", tween: [ "style", "${_btnFH}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid256", tween: [ "style", "${_btnCE}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid259", tween: [ "style", "${_btnCE}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid262", tween: [ "style", "${_btnCE}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid252", tween: [ "style", "${_btnTZ}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid269", tween: [ "style", "${_btnTZ}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid254", tween: [ "style", "${_btnIO}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid265", tween: [ "style", "${_btnIO}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid266", tween: [ "style", "${_btnIO}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 }            ]
        }
    }
},
"menuInicio": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'btnInicio',
                    type: 'rect',
                    rect: ['551px', '166px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btnSonido',
                    type: 'rect',
                    rect: ['340px', '34px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btnSonido',
                symbolName: 'btnSonido',
                autoPlay: {

               }
            },
            {
                id: 'btnInicio',
                symbolName: 'btnInicio',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_btnSonido}": [
                ["style", "left", '26px'],
                ["style", "top", '8px']
            ],
            "${_btnInicio}": [
                ["style", "left", '901px'],
                ["style", "top", '8px']
            ],
            "${symbolSelector}": [
                ["style", "height", '88px'],
                ["style", "width", '1000px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"ventanaMensaje": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ventanaMensaje',
                    type: 'image',
                    rect: ['100px', '147px', '802px', '394px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido/ventanaMensaje.png', '0px', '0px']
                },
                {
                    rect: ['162px', '179px', '677px', '330px', 'auto', 'auto'],
                    id: 'contenedor',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    id: 'btnClose',
                    type: 'image',
                    rect: ['743px', '495px', '104px', '46px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido/btnClose.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_btnClose}": [
                ["style", "top", '495px'],
                ["style", "left", '743px']
            ],
            "${_contenedor}": [
                ["style", "top", '179px'],
                ["style", "height", '330px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '162px'],
                ["style", "width", '677px']
            ],
            "${_ventanaMensaje}": [
                ["style", "left", '100px'],
                ["style", "top", '147px']
            ],
            "${symbolSelector}": [
                ["style", "height", '640px'],
                ["style", "width", '1001px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"btnCE_Int": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0px', '0px', '310px', '160px', 'auto', 'auto'],
                    id: 'btnCE',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnCE.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0px', '0px', '310px', '160px', 'auto', 'auto'],
                    id: 'btnCE_P',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnCE_P.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_btnCE}": [
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_btnCE_P}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '160px'],
                ["style", "width", '310px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            labels: {
                "normal": 0,
                "press": 500
            },
            timeline: [
                { id: "eid46", tween: [ "style", "${_btnCE}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid48", tween: [ "style", "${_btnCE}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid44", tween: [ "style", "${_btnCE_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid49", tween: [ "style", "${_btnCE_P}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 }            ]
        }
    }
},
"btnFH_Int": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0px', '0px', '310px', '160px', 'auto', 'auto'],
                    id: 'btnFH',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnFH.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0px', '0px', '310px', '160px', 'auto', 'auto'],
                    id: 'btnFH_P',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnFH_P.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_btnFH}": [
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_btnFH_P}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '160px'],
                ["style", "width", '310px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            labels: {
                "normal": 0,
                "press": 500
            },
            timeline: [
                { id: "eid46", tween: [ "style", "${_btnFH}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid48", tween: [ "style", "${_btnFH}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid44", tween: [ "style", "${_btnFH_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid49", tween: [ "style", "${_btnFH_P}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 }            ]
        }
    }
},
"btnIO_Int": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0px', '0px', '310px', '160px', 'auto', 'auto'],
                    id: 'btnIO',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnIO.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0px', '0px', '310px', '160px', 'auto', 'auto'],
                    id: 'btnIO_P',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnIO_P.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_btnIO_P}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_btnIO}": [
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '160px'],
                ["style", "width", '310px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            labels: {
                "normal": 0,
                "press": 500
            },
            timeline: [
                { id: "eid44", tween: [ "style", "${_btnIO_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid49", tween: [ "style", "${_btnIO_P}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid46", tween: [ "style", "${_btnIO}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid48", tween: [ "style", "${_btnIO}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }            ]
        }
    }
},
"btnPS_Int": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0px', '0px', '310px', '160px', 'auto', 'auto'],
                    id: 'btnPS',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnPS.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0px', '0px', '310px', '160px', 'auto', 'auto'],
                    id: 'btnPS_P',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnPS_P.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_btnPS}": [
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_btnPS_P}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '160px'],
                ["style", "width", '310px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            labels: {
                "normal": 0,
                "press": 500
            },
            timeline: [
                { id: "eid46", tween: [ "style", "${_btnPS}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid48", tween: [ "style", "${_btnPS}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid44", tween: [ "style", "${_btnPS_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid49", tween: [ "style", "${_btnPS_P}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 }            ]
        }
    }
},
"btnTZ_Int": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0px', '0px', '310px', '160px', 'auto', 'auto'],
                    id: 'btnTZ',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnTZ.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0px', '0px', '310px', '160px', 'auto', 'auto'],
                    id: 'btnTZ_P',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnTZ_P.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_btnTZ_P}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_btnTZ}": [
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '160px'],
                ["style", "width", '310px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            labels: {
                "normal": 0,
                "press": 500
            },
            timeline: [
                { id: "eid46", tween: [ "style", "${_btnTZ}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid48", tween: [ "style", "${_btnTZ}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid44", tween: [ "style", "${_btnTZ_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid49", tween: [ "style", "${_btnTZ_P}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 }            ]
        }
    }
},
"menuGlosario": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'botonAB',
                    type: 'rect',
                    rect: ['-387px', '-210px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'botonCE',
                    type: 'rect',
                    rect: ['-14px', '-182px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'botonFH',
                    type: 'rect',
                    rect: ['-386px', '25px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'botonIO',
                    type: 'rect',
                    rect: ['153px', '20px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'botonPS',
                    type: 'rect',
                    rect: ['-205px', '178px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'botonTZ',
                    type: 'rect',
                    rect: ['181px', '165px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'botonPS',
                symbolName: 'botonPS',
                autoPlay: {

               }
            },
            {
                id: 'botonCE',
                symbolName: 'botonCE',
                autoPlay: {

               }
            },
            {
                id: 'botonTZ',
                symbolName: 'botonTZ',
                autoPlay: {

               }
            },
            {
                id: 'botonIO',
                symbolName: 'botonIO',
                autoPlay: {

               }
            },
            {
                id: 'botonAB',
                symbolName: 'botonAB',
                autoPlay: {

               }
            },
            {
                id: 'botonFH',
                symbolName: 'botonFH',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_botonFH}": [
                ["style", "top", '-72px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '-139px']
            ],
            "${_botonAB}": [
                ["style", "top", '-72px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '-137px']
            ],
            "${symbolSelector}": [
                ["style", "height", '16px'],
                ["style", "width", '33px']
            ],
            "${_botonCE}": [
                ["style", "top", '-72px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '-138px']
            ],
            "${_botonTZ}": [
                ["style", "top", '-72px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '-138px']
            ],
            "${_botonPS}": [
                ["style", "top", '-72px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '-137px']
            ],
            "${_botonIO}": [
                ["style", "top", '-72px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '-138px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: false,
            labels: {
                "agregarListener": 1000,
                "ocultarMenu": 1500,
                "mostrarText": 2500
            },
            timeline: [
                { id: "eid121", tween: [ "transform", "${_botonFH}", "scaleY", '1', { fromValue: '0.1'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid226", tween: [ "transform", "${_botonFH}", "scaleY", '0.1', { fromValue: '1'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid115", tween: [ "transform", "${_botonTZ}", "scaleY", '1', { fromValue: '0.1'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid211", tween: [ "transform", "${_botonTZ}", "scaleY", '0.1', { fromValue: '1'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid140", tween: [ "style", "${_botonFH}", "left", '-415px', { fromValue: '-139px'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid229", tween: [ "style", "${_botonFH}", "left", '-139px', { fromValue: '-415px'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid153", tween: [ "style", "${_botonTZ}", "top", '141px', { fromValue: '-72px'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid210", tween: [ "style", "${_botonTZ}", "top", '-72px', { fromValue: '141px'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid170", tween: [ "style", "${_botonAB}", "left", '-337px', { fromValue: '-137px'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid239", tween: [ "style", "${_botonAB}", "left", '-137px', { fromValue: '-337px'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid172", tween: [ "style", "${_botonCE}", "left", '58px', { fromValue: '-138px'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid234", tween: [ "style", "${_botonCE}", "left", '-138px', { fromValue: '58px'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid178", tween: [ "style", "${_botonPS}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid218", tween: [ "style", "${_botonPS}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid168", tween: [ "style", "${_botonIO}", "left", '136px', { fromValue: '-138px'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid224", tween: [ "style", "${_botonIO}", "left", '-138px', { fromValue: '136px'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid141", tween: [ "style", "${_botonFH}", "top", '-50px', { fromValue: '-72px'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid225", tween: [ "style", "${_botonFH}", "top", '-72px', { fromValue: '-50px'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid152", tween: [ "style", "${_botonTZ}", "left", '58px', { fromValue: '-138px'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid214", tween: [ "style", "${_botonTZ}", "left", '-138px', { fromValue: '58px'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid110", tween: [ "transform", "${_botonAB}", "scaleX", '1', { fromValue: '0.1'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid237", tween: [ "transform", "${_botonAB}", "scaleX", '0.1', { fromValue: '1'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid116", tween: [ "transform", "${_botonPS}", "scaleX", '1', { fromValue: '0.1'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid217", tween: [ "transform", "${_botonPS}", "scaleX", '0.1', { fromValue: '1'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid117", tween: [ "transform", "${_botonPS}", "scaleY", '1', { fromValue: '0.1'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid216", tween: [ "transform", "${_botonPS}", "scaleY", '0.1', { fromValue: '1'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid111", tween: [ "transform", "${_botonAB}", "scaleY", '1', { fromValue: '0.1'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid236", tween: [ "transform", "${_botonAB}", "scaleY", '0.1', { fromValue: '1'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid112", tween: [ "transform", "${_botonIO}", "scaleX", '1', { fromValue: '0.1'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid222", tween: [ "transform", "${_botonIO}", "scaleX", '0.1', { fromValue: '1'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid176", tween: [ "style", "${_botonIO}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid223", tween: [ "style", "${_botonIO}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid173", tween: [ "style", "${_botonCE}", "top", '-242px', { fromValue: '-72px'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid230", tween: [ "style", "${_botonCE}", "top", '-72px', { fromValue: '-242px'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid179", tween: [ "style", "${_botonTZ}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid213", tween: [ "style", "${_botonTZ}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid120", tween: [ "transform", "${_botonFH}", "scaleX", '1', { fromValue: '0.1'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid227", tween: [ "transform", "${_botonFH}", "scaleX", '0.1', { fromValue: '1'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid113", tween: [ "transform", "${_botonIO}", "scaleY", '1', { fromValue: '0.1'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid221", tween: [ "transform", "${_botonIO}", "scaleY", '0.1', { fromValue: '1'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid114", tween: [ "transform", "${_botonTZ}", "scaleX", '1', { fromValue: '0.1'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid212", tween: [ "transform", "${_botonTZ}", "scaleX", '0.1', { fromValue: '1'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid154", tween: [ "style", "${_botonPS}", "left", '-337px', { fromValue: '-137px'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid219", tween: [ "style", "${_botonPS}", "left", '-137px', { fromValue: '-337px'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid177", tween: [ "style", "${_botonFH}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid228", tween: [ "style", "${_botonFH}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid175", tween: [ "style", "${_botonAB}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid238", tween: [ "style", "${_botonAB}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid174", tween: [ "style", "${_botonCE}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid233", tween: [ "style", "${_botonCE}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid119", tween: [ "transform", "${_botonCE}", "scaleY", '1', { fromValue: '0.1'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid231", tween: [ "transform", "${_botonCE}", "scaleY", '0.1', { fromValue: '1'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid171", tween: [ "style", "${_botonAB}", "top", '-242px', { fromValue: '-72px'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid235", tween: [ "style", "${_botonAB}", "top", '-72px', { fromValue: '-242px'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid169", tween: [ "style", "${_botonIO}", "top", '-50px', { fromValue: '-72px'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid220", tween: [ "style", "${_botonIO}", "top", '-72px', { fromValue: '-50px'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid155", tween: [ "style", "${_botonPS}", "top", '141px', { fromValue: '-72px'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid215", tween: [ "style", "${_botonPS}", "top", '-72px', { fromValue: '141px'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid118", tween: [ "transform", "${_botonCE}", "scaleX", '1', { fromValue: '0.1'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid232", tween: [ "transform", "${_botonCE}", "scaleX", '0.1', { fromValue: '1'}], position: 1500, duration: 1000, easing: "easeInOutBack" }            ]
        }
    }
},
"botonVerb1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0', '0', '310px', '160px', 'auto', 'auto'],
                    id: 'btnVerb_O',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnVerb_O.png', '0px', '0px']
                },
                {
                    display: 'block',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto'],
                    id: 'btnInt'
                },
                {
                    type: 'text',
                    rect: ['18px', '59px', '275px', 'auto', 'auto', 'auto'],
                    id: 'Text',
                    text: 'Irregular verbs',
                    align: 'center',
                    font: ['Arial, Helvetica, sans-serif', 35, 'rgba(0,0,0,1)', '700', 'none', '']
                }
            ],
            symbolInstances: [
            {
                id: 'btnInt',
                symbolName: 'btnVerb_Int',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "top", '59px'],
                ["style", "text-align", 'center'],
                ["style", "width", '275px'],
                ["style", "font-weight", '700'],
                ["style", "left", '18px'],
                ["style", "font-size", '35px']
            ],
            "${_btnVerb_O}": [
                ["style", "display", 'none'],
                ["transform", "scaleY", '1.05'],
                ["transform", "scaleX", '1.05']
            ],
            "${_btnInt}": [
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '160px'],
                ["style", "width", '310px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            labels: {
                "out": 0,
                "over": 500
            },
            timeline: [
                { id: "eid45", tween: [ "style", "${_btnVerb_O}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_btnVerb_O}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid320", tween: [ "style", "${_btnInt}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid321", tween: [ "style", "${_btnInt}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeInOutBack" }            ]
        }
    }
},
"btnVerb_Int": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '310px', '160px', 'auto', 'auto'],
                    id: 'btnVerb',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnVerb.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '310px', '160px', 'auto', 'auto'],
                    id: 'btnVerb_P',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnVerb_P.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_btnVerb_P}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_btnVerb}": [
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '160px'],
                ["style", "width", '310px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            labels: {
                "normal": 0,
                "press": 500
            },
            timeline: [
                { id: "eid46", tween: [ "style", "${_btnVerb}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid48", tween: [ "style", "${_btnVerb}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid44", tween: [ "style", "${_btnVerb_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid276", tween: [ "style", "${_btnVerb_P}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeInOutBack" }            ]
        }
    }
},
"botonVerb2": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0', '0', '310px', '160px', 'auto', 'auto'],
                    id: 'btnVerb_O',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnVerb_O.png', '0px', '0px']
                },
                {
                    display: 'block',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto'],
                    id: 'btnInt'
                },
                {
                    type: 'text',
                    rect: ['0px', '59px', '310px', 'auto', 'auto', 'auto'],
                    id: 'Text',
                    text: 'Regular verbs',
                    align: 'center',
                    font: ['Arial, Helvetica, sans-serif', 35, 'rgba(0,0,0,1)', '700', 'none', '']
                }
            ],
            symbolInstances: [
            {
                id: 'btnInt',
                symbolName: 'btnVerb_Int',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "top", '59px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '35px'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "width", '310px']
            ],
            "${_btnVerb_O}": [
                ["style", "display", 'none'],
                ["transform", "scaleY", '1.05'],
                ["transform", "scaleX", '1.05']
            ],
            "${_btnInt}": [
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '160px'],
                ["style", "width", '310px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            labels: {
                "out": 0,
                "over": 500
            },
            timeline: [
                { id: "eid45", tween: [ "style", "${_btnVerb_O}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_btnVerb_O}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid322", tween: [ "style", "${_btnInt}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid323", tween: [ "style", "${_btnInt}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeInOutBack" }            ]
        }
    }
},
"menuVerbos": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ventanaFondo',
                    type: 'image',
                    rect: ['0px', '69px', '1000px', '569px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido/ventanaContenido.png', '0px', '0px']
                },
                {
                    id: 'botonVerb1',
                    type: 'rect',
                    rect: ['315', '254', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'botonVerb2',
                    type: 'rect',
                    rect: ['721', '406', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btnNext',
                    type: 'image',
                    rect: ['836px', '582px', '105px', '46px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido/btnNext.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'botonVerb2',
                symbolName: 'botonVerb2',
                autoPlay: {

               }
            },
            {
                id: 'botonVerb1',
                symbolName: 'botonVerb1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_botonVerb2}": [
                ["style", "left", '561px'],
                ["style", "top", '275px']
            ],
            "${_btnNext}": [
                ["style", "top", '582px'],
                ["style", "left", '836px']
            ],
            "${_botonVerb1}": [
                ["style", "top", '272px'],
                ["style", "left", '130px']
            ],
            "${symbolSelector}": [
                ["style", "height", '640px'],
                ["style", "width", '1001px']
            ],
            "${_ventanaFondo}": [
                ["style", "left", '0px'],
                ["style", "top", '69px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"btnAB_Int": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0px', '0px', '310px', '160px', 'auto', 'auto'],
                    id: 'btnAB',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnAB.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0px', '0px', '310px', '160px', 'auto', 'auto'],
                    id: 'btnAB_P',
                    fill: ['rgba(0,0,0,0)', 'images/botones/btnAB_P.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '160px'],
                ["style", "width", '310px']
            ],
            "${_btnAB}": [
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_btnAB_P}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            labels: {
                "normal": 0,
                "press": 500
            },
            timeline: [
                { id: "eid46", tween: [ "style", "${_btnAB}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid48", tween: [ "style", "${_btnAB}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid44", tween: [ "style", "${_btnAB_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid276", tween: [ "style", "${_btnAB_P}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeInOutBack" }            ]
        }
    }
},
"persona2": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'mujer1',
                    type: 'image',
                    rect: ['0px', '0px', '123px', '234px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/mujer1.png', '0px', '0px']
                },
                {
                    id: 'brasomujer1',
                    type: 'image',
                    rect: ['11px', '87px', '50px', '23px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/brasomujer1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_mujer1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_brasomujer1}": [
                ["style", "-webkit-transform-origin", [13.95,54.51], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [13.95,54.51],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [13.95,54.51],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [13.95,54.51],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [13.95,54.51],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [13.95,54.51],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '87px'],
                ["style", "left", '11px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '234px'],
                ["style", "width", '123px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3472,
            autoPlay: true,
            timeline: [
                { id: "eid1426", tween: [ "transform", "${_brasomujer1}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 500, duration: 1125 },
                { id: "eid1427", tween: [ "transform", "${_brasomujer1}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 2347, duration: 1125 }            ]
        }
    }
},
"ejecutivo1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ejecutivo1',
                    type: 'image',
                    rect: ['0px', '28px', '84px', '225px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ejecutivo1.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], [], ['48.82%', '6.8032%']],
                    id: 'braosejecut1',
                    type: 'image',
                    rect: ['40px', '42px', '57px', '173px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/braosejecut1.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], [], ['50%', '99.9999%']],
                    id: 'cabejecutivo1',
                    type: 'image',
                    rect: ['24px', '0px', '41px', '48px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cabejecutivo1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_braosejecut1}": [
                ["style", "top", '42px'],
                ["style", "-webkit-transform-origin", [48.82,6.8], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [48.82,6.8],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [48.82,6.8],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [48.82,6.8],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [48.82,6.8],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [48.82,6.8],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '40px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_ejecutivo1}": [
                ["style", "left", '0px'],
                ["style", "top", '28px']
            ],
            "${_cabejecutivo1}": [
                ["style", "top", '0px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '24px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '253px'],
                ["style", "width", '97px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5598,
            autoPlay: true,
            timeline: [
                { id: "eid1482", tween: [ "transform", "${_braosejecut1}", "rotateZ", '9deg', { fromValue: '0deg'}], position: 1402, duration: 1598 },
                { id: "eid1483", tween: [ "transform", "${_braosejecut1}", "rotateZ", '0deg', { fromValue: '9deg'}], position: 4000, duration: 1598 },
                { id: "eid1478", tween: [ "transform", "${_cabejecutivo1}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 0, duration: 1500 },
                { id: "eid1479", tween: [ "transform", "${_cabejecutivo1}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 2750, duration: 1500 }            ]
        }
    }
},
"persona3": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'nino',
                    type: 'image',
                    rect: ['0px', '29px', '79px', '133px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/nino.png', '0px', '0px']
                },
                {
                    id: 'cabezanino',
                    type: 'image',
                    rect: ['7px', '0px', '44px', '46px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cabezanino.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_nino}": [
                ["style", "left", '0px'],
                ["style", "top", '29px']
            ],
            "${_cabezanino}": [
                ["style", "-webkit-transform-origin", [54.62,84.47], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [54.62,84.47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [54.62,84.47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [54.62,84.47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [54.62,84.47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [54.62,84.47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '0px'],
                ["style", "left", '7px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '162px'],
                ["style", "width", '79px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3590,
            autoPlay: true,
            timeline: [
                { id: "eid1430", tween: [ "transform", "${_cabezanino}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 356, duration: 1232 },
                { id: "eid1431", tween: [ "transform", "${_cabezanino}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 2358, duration: 1232 }            ]
        }
    }
},
"globoIntro": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'globo',
                    type: 'image',
                    rect: ['-279px', '-97px', '218px', '155px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/globo.png', '0px', '0px']
                },
                {
                    rect: ['-266px', '-50px', '191px', '50px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    id: 'Text',
                    text: 'To see the contents, click on the top menu.',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_globo}": [
                ["style", "height", '155px'],
                ["style", "top", '-97px'],
                ["style", "left", '-279px'],
                ["style", "width", '218px']
            ],
            "${_Text}": [
                ["style", "top", '-50px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '18px'],
                ["style", "height", '50px'],
                ["style", "opacity", '1'],
                ["style", "left", '-266px'],
                ["style", "width", '191px']
            ],
            "${symbolSelector}": [
                ["style", "height", '116px'],
                ["style", "width", '159px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"animAvion2": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'avion2',
                    type: 'image',
                    rect: ['0px', '0px', '218px', '88px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/avion2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '88px'],
                ["style", "width", '218px']
            ],
            "${_avion2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 20174,
            autoPlay: true,
            timeline: [
                { id: "eid1457", tween: [ "style", "${_avion2}", "top", '-310px', { fromValue: '0px'}], position: 18174, duration: 339 },
                { id: "eid1463", tween: [ "style", "${_avion2}", "top", '-4px', { fromValue: '-310px'}], position: 18924, duration: 370 },
                { id: "eid1454", tween: [ "style", "${_avion2}", "left", '600px', { fromValue: '0px'}], position: 11801, duration: 6293 },
                { id: "eid1460", tween: [ "style", "${_avion2}", "left", '-830px', { fromValue: '600px'}], position: 18513, duration: 411 },
                { id: "eid1474", tween: [ "style", "${_avion2}", "left", '2px', { fromValue: '-830px'}], position: 19294, duration: 880 }            ]
        }
    }
},
"secretaria": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['27px', '31px', '38px', '37px', 'auto', 'auto'],
                    id: 'brasosecret',
                    transform: [[0, 0], [], [], [], ['10.778%', '22.1086%']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/brasosecret.png', '0px', '0px']
                },
                {
                    id: 'cuerposecretaria',
                    type: 'image',
                    rect: ['0px', '18px', '38px', '55px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cuerposecretaria.png', '0px', '0px']
                },
                {
                    rect: ['8px', '0px', '28px', '39px', 'auto', 'auto'],
                    id: 'cabsecretaria',
                    transform: [[0, 0], [], [], [], ['63.0015%', '74.5835%']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cabsecretaria.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_cuerposecretaria}": [
                ["style", "left", '0px'],
                ["style", "top", '18px']
            ],
            "${symbolSelector}": [
                ["style", "height", '73px'],
                ["style", "width", '65px']
            ],
            "${_cabsecretaria}": [
                ["style", "top", '0px'],
                ["style", "-webkit-transform-origin", [63,74.58], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [63,74.58],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [63,74.58],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [63,74.58],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [63,74.58],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [63,74.58],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '8px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_brasosecret}": [
                ["style", "top", '31px'],
                ["style", "-webkit-transform-origin", [10.78,22.11], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [10.78,22.11],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [10.78,22.11],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [10.78,22.11],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [10.78,22.11],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [10.78,22.11],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '27px'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9049,
            autoPlay: true,
            timeline: [
                { id: "eid1557", tween: [ "transform", "${_brasosecret}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 0, duration: 2500 },
                { id: "eid1558", tween: [ "transform", "${_brasosecret}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 4593, duration: 2500 },
                { id: "eid1561", tween: [ "transform", "${_cabsecretaria}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 2322, duration: 2549 },
                { id: "eid1562", tween: [ "transform", "${_cabsecretaria}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 6500, duration: 2549 }            ]
        }
    }
},
"ejecutivos3": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ejecutivos',
                    type: 'image',
                    rect: ['0px', '0px', '322px', '222px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ejecutivos.png', '0px', '0px']
                },
                {
                    id: 'brasoejecutivo',
                    type: 'image',
                    rect: ['75px', '18px', '33px', '66px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/brasoejecutivo.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_brasoejecutivo}": [
                ["style", "top", '18px'],
                ["style", "-webkit-transform-origin", [30.37,90.3], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [30.37,90.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [30.37,90.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [30.37,90.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [30.37,90.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [30.37,90.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '75px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '222px'],
                ["style", "width", '322px']
            ],
            "${_ejecutivos}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4921,
            autoPlay: true,
            timeline: [
                { id: "eid1496", tween: [ "transform", "${_brasoejecutivo}", "rotateZ", '-20deg', { fromValue: '0deg'}], position: 1000, duration: 1421 },
                { id: "eid1497", tween: [ "transform", "${_brasoejecutivo}", "rotateZ", '0deg', { fromValue: '-20deg'}], position: 3500, duration: 1421 }            ]
        }
    }
},
"salaEspera": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'piso',
                    type: 'image',
                    rect: ['-15px', '425px', '1186px', '330px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/piso.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'protectvent',
                    opacity: 0.28443386267922,
                    rect: ['787px', '52px', '382px', '530px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/protectvent.png', '0px', '0px']
                },
                {
                    id: 'paisaje',
                    type: 'image',
                    rect: ['807px', '105px', '368px', '461px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/paisaje.png', '0px', '0px']
                },
                {
                    id: 'animAvion1',
                    type: 'rect',
                    rect: ['-174px', '117px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'animAvion2',
                    type: 'rect',
                    rect: ['591px', '199', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    rect: ['74px', '114px', '780px', '348px', 'auto', 'auto'],
                    id: 'pared',
                    transform: [[0, 0], [], [], ['1.22861']],
                    clip: ['rect(0px 708.625px 348px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/pared.png', '0px', '0px']
                },
                {
                    id: 'vidriovent',
                    type: 'image',
                    rect: ['832px', '96px', '339px', '499px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/vidriovent.png', '0px', '0px']
                },
                {
                    id: 'refvent',
                    type: 'image',
                    rect: ['1017px', '131px', '148px', '168px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/refvent.png', '0px', '0px']
                },
                {
                    id: 'reflejosvent',
                    type: 'image',
                    rect: ['848px', '161px', '130px', '180px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/reflejosvent.png', '0px', '0px']
                },
                {
                    id: 'rejavent',
                    type: 'image',
                    rect: ['829px', '115px', '350px', '401px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/rejavent.png', '0px', '0px']
                },
                {
                    id: 'cielofalso',
                    type: 'image',
                    rect: ['-12px', '-11px', '1186px', '202px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cielofalso.png', '0px', '0px']
                },
                {
                    id: 'columna1',
                    type: 'image',
                    rect: ['96px', '39px', '82px', '414px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/columna1.png', '0px', '0px']
                },
                {
                    id: 'secretaria',
                    type: 'rect',
                    rect: ['51', '308', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'mesa',
                    type: 'image',
                    rect: ['-15px', '313px', '252px', '117px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/mesa.png', '0px', '0px']
                },
                {
                    id: 'columna2',
                    type: 'image',
                    rect: ['207px', '8px', '99px', '449px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/columna2.png', '0px', '0px']
                },
                {
                    id: 'puerta',
                    type: 'image',
                    rect: ['540px', '246px', '196px', '202px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/puerta.png', '0px', '0px']
                },
                {
                    id: 'reflejoventana',
                    type: 'image',
                    rect: ['825px', '412px', '198px', '246px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/reflejoventana.png', '0px', '0px']
                },
                {
                    id: 'columna4',
                    type: 'image',
                    rect: ['968px', '-18px', '96px', '576px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/columna4.png', '0px', '0px']
                },
                {
                    id: 'columna3',
                    type: 'image',
                    rect: ['785px', '25px', '99px', '452px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/columna3.png', '0px', '0px']
                },
                {
                    id: 'tablero12',
                    type: 'rect',
                    rect: ['1209px', '501px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'tablero22',
                    type: 'rect',
                    rect: ['1430px', '511px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'reflejopers',
                    type: 'image',
                    rect: ['690px', '438px', '384px', '288px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/reflejopers.png', '0px', '0px']
                },
                {
                    id: 'usuario',
                    type: 'image',
                    rect: ['113px', '281px', '54px', '131px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/usuario.png', '0px', '0px']
                },
                {
                    id: 'sillas2',
                    type: 'image',
                    rect: ['-52px', '344px', '564px', '304px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sillas2.png', '0px', '0px']
                },
                {
                    id: 'sillas1',
                    type: 'image',
                    rect: ['85px', '424px', '568px', '212px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sillas1.png', '0px', '0px']
                },
                {
                    id: 'persona3',
                    type: 'rect',
                    rect: ['646px', '467', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'persona2',
                    type: 'rect',
                    rect: ['551px', '429', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'lampara2',
                    type: 'image',
                    rect: ['229px', '-16px', '699px', '344px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/lampara2.png', '0px', '0px']
                },
                {
                    id: 'lampara2Copy',
                    type: 'image',
                    rect: ['49px', '91px', '294px', '222px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/lampara2.png', '0px', '0px']
                },
                {
                    id: 'lampara2Copy2',
                    type: 'image',
                    rect: ['-98px', '80px', '294px', '222px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/lampara2.png', '0px', '0px']
                },
                {
                    id: 'fila',
                    type: 'image',
                    rect: ['552px', '303px', '310px', '237px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fila.png', '0px', '0px']
                },
                {
                    id: 'ejecutivos3',
                    type: 'rect',
                    rect: ['970px', '502', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'ejecutivo12',
                    type: 'rect',
                    rect: ['880px', '410', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'ejecutivo2',
                    type: 'rect',
                    rect: ['792px', '420', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'maleta',
                    type: 'image',
                    rect: ['379px', '473px', '74px', '144px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/maleta.png', '0px', '0px']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'globoIntro',
                    rect: ['1427', '553', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'persona1',
                    type: 'rect',
                    rect: ['1369', '390', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'persona2',
                symbolName: 'persona2',
                autoPlay: {

               }
            },
            {
                id: 'persona3',
                symbolName: 'persona3',
                autoPlay: {

               }
            },
            {
                id: 'globoIntro',
                symbolName: 'globoIntro',
                autoPlay: {

               }
            },
            {
                id: 'animAvion2',
                symbolName: 'animAvion2',
                autoPlay: {

               }
            },
            {
                id: 'secretaria',
                symbolName: 'secretaria',
                autoPlay: {

               }
            },
            {
                id: 'ejecutivos3',
                symbolName: 'ejecutivos3',
                autoPlay: {

               }
            },
            {
                id: 'tablero12',
                symbolName: 'tablero1',
                autoPlay: {

               }
            },
            {
                id: 'tablero22',
                symbolName: 'tablero2',
                autoPlay: {

               }
            },
            {
                id: 'ejecutivo12',
                symbolName: 'ejecutivo1',
                autoPlay: {

               }
            },
            {
                id: 'ejecutivo2',
                symbolName: 'ejecutivo2',
                autoPlay: {

               }
            },
            {
                id: 'animAvion1',
                symbolName: 'animAvion1',
                autoPlay: {

               }
            },
            {
                id: 'persona1',
                symbolName: 'persona1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_secretaria}": [
                ["style", "left", '49px'],
                ["style", "top", '290px']
            ],
            "${_lampara2}": [
                ["style", "left", '229px'],
                ["style", "top", '-16px']
            ],
            "${_protectvent}": [
                ["style", "top", '52px'],
                ["style", "opacity", '0.28443386267922'],
                ["style", "left", '787px']
            ],
            "${_columna1}": [
                ["style", "left", '96px'],
                ["style", "top", '39px']
            ],
            "${_persona3}": [
                ["style", "left", '504px'],
                ["style", "top", '426px']
            ],
            "${_ejecutivo12}": [
                ["style", "left", '795px'],
                ["style", "top", '380px']
            ],
            "${_ejecutivos3}": [
                ["style", "top", '422px'],
                ["style", "left", '832px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1']
            ],
            "${_tablero12}": [
                ["style", "left", '455px'],
                ["style", "top", '148px']
            ],
            "${_lampara2Copy}": [
                ["style", "top", '91px'],
                ["style", "height", '222px'],
                ["style", "left", '49px'],
                ["style", "width", '294px']
            ],
            "${_reflejoventana}": [
                ["style", "left", '825px'],
                ["style", "top", '412px']
            ],
            "${_fila}": [
                ["style", "left", '552px'],
                ["style", "top", '303px']
            ],
            "${_cielofalso}": [
                ["style", "top", '-11px'],
                ["style", "height", '202px'],
                ["style", "left", '-12px'],
                ["style", "width", '1186px']
            ],
            "${_piso}": [
                ["style", "top", '425px'],
                ["style", "left", '-15px'],
                ["style", "width", '1186px']
            ],
            "${_reflejopers}": [
                ["style", "left", '690px'],
                ["style", "top", '438px']
            ],
            "${_persona1}": [
                ["style", "left", '158px'],
                ["style", "top", '386px']
            ],
            "${_animAvion1}": [
                ["style", "left", '-176px'],
                ["style", "top", '99px']
            ],
            "${_maleta}": [
                ["style", "left", '379px'],
                ["style", "top", '473px']
            ],
            "${symbolSelector}": [
                ["style", "height", '640px'],
                ["style", "overflow", 'visible'],
                ["style", "width", '1000px']
            ],
            "${_globoIntro}": [
                ["style", "top", '386px'],
                ["style", "left", '509px'],
                ["style", "display", 'none']
            ],
            "${_animAvion2}": [
                ["style", "left", '589px'],
                ["style", "top", '181px']
            ],
            "${_tablero22}": [
                ["style", "left", '624px'],
                ["style", "top", '157px']
            ],
            "${_sillas1}": [
                ["style", "left", '85px'],
                ["style", "top", '424px']
            ],
            "${_columna2}": [
                ["style", "left", '207px'],
                ["style", "top", '8px']
            ],
            "${_puerta}": [
                ["style", "left", '540px'],
                ["style", "top", '246px']
            ],
            "${_rejavent}": [
                ["style", "top", '115px'],
                ["style", "left", '829px'],
                ["style", "width", '350px']
            ],
            "${_vidriovent}": [
                ["style", "top", '96px'],
                ["style", "left", '832px'],
                ["style", "width", '339px']
            ],
            "${_usuario}": [
                ["style", "left", '113px'],
                ["style", "top", '281px']
            ],
            "${_paisaje}": [
                ["style", "left", '807px'],
                ["style", "top", '105px']
            ],
            "${_reflejosvent}": [
                ["style", "left", '848px'],
                ["style", "top", '161px']
            ],
            "${_mesa}": [
                ["style", "left", '-15px'],
                ["style", "top", '313px']
            ],
            "${_refvent}": [
                ["style", "top", '131px'],
                ["style", "left", '1017px']
            ],
            "${_pared}": [
                ["transform", "scaleX", '1.22861'],
                ["style", "top", '114px'],
                ["style", "left", '74px'],
                ["style", "clip", [0,708.625,348,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_sillas2}": [
                ["style", "left", '-52px'],
                ["style", "top", '344px']
            ],
            "${_columna4}": [
                ["style", "left", '968px'],
                ["style", "top", '-18px']
            ],
            "${_ejecutivo2}": [
                ["style", "left", '707px'],
                ["style", "top", '390px']
            ],
            "${_columna3}": [
                ["style", "left", '785px'],
                ["style", "top", '25px']
            ],
            "${_lampara2Copy2}": [
                ["style", "height", '222px'],
                ["style", "top", '80px'],
                ["style", "left", '-98px'],
                ["style", "width", '294px']
            ],
            "${_persona2}": [
                ["style", "left", '409px'],
                ["style", "top", '388px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 20174,
            autoPlay: false,
            timeline: [
                { id: "eid337", tween: [ "style", "${_persona1}", "top", '386px', { fromValue: '386px'}], position: 0, duration: 0 },
                { id: "eid2352", tween: [ "style", "${_globoIntro}", "top", '386px', { fromValue: '386px'}], position: 0, duration: 0 },
                { id: "eid326", tween: [ "style", "${_tablero12}", "left", '457px', { fromValue: '455px'}], position: 0, duration: 17000 },
                { id: "eid362", tween: [ "style", "${_ejecutivo12}", "top", '380px', { fromValue: '380px'}], position: 0, duration: 0 },
                { id: "eid363", tween: [ "style", "${_ejecutivo2}", "left", '707px', { fromValue: '707px'}], position: 0, duration: 0 },
                { id: "eid360", tween: [ "style", "${_ejecutivos3}", "top", '422px', { fromValue: '422px'}], position: 0, duration: 0 },
                { id: "eid343", tween: [ "style", "${_persona2}", "top", '388px', { fromValue: '388px'}], position: 0, duration: 0 },
                { id: "eid334", tween: [ "style", "${_animAvion1}", "left", '-176px', { fromValue: '-176px'}], position: 0, duration: 0 },
                { id: "eid341", tween: [ "style", "${_animAvion2}", "top", '181px', { fromValue: '181px'}], position: 0, duration: 0 },
                { id: "eid2353", tween: [ "style", "${_globoIntro}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid358", tween: [ "transform", "${_ejecutivos3}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid339", tween: [ "style", "${_persona3}", "top", '426px', { fromValue: '426px'}], position: 0, duration: 0 },
                { id: "eid335", tween: [ "style", "${_animAvion1}", "top", '99px', { fromValue: '99px'}], position: 0, duration: 0 },
                { id: "eid364", tween: [ "style", "${_ejecutivo2}", "top", '390px', { fromValue: '390px'}], position: 0, duration: 0 },
                { id: "eid2351", tween: [ "style", "${_globoIntro}", "left", '509px', { fromValue: '509px'}], position: 0, duration: 0 },
                { id: "eid328", tween: [ "style", "${_secretaria}", "left", '49px', { fromValue: '49px'}], position: 0, duration: 0 },
                { id: "eid329", tween: [ "style", "${_secretaria}", "top", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
                { id: "eid359", tween: [ "style", "${_ejecutivos3}", "left", '832px', { fromValue: '832px'}], position: 0, duration: 0 },
                { id: "eid336", tween: [ "style", "${_persona1}", "left", '158px', { fromValue: '158px'}], position: 0, duration: 0 },
                { id: "eid332", tween: [ "style", "${_tablero22}", "left", '626px', { fromValue: '624px'}], position: 0, duration: 17000 },
                { id: "eid327", tween: [ "style", "${_tablero12}", "top", '166px', { fromValue: '148px'}], position: 0, duration: 17000 },
                { id: "eid338", tween: [ "style", "${_persona3}", "left", '504px', { fromValue: '504px'}], position: 0, duration: 0 },
                { id: "eid340", tween: [ "style", "${_animAvion2}", "left", '589px', { fromValue: '589px'}], position: 0, duration: 0 },
                { id: "eid333", tween: [ "style", "${_tablero22}", "top", '175px', { fromValue: '157px'}], position: 0, duration: 17000 },
                { id: "eid361", tween: [ "style", "${_ejecutivo12}", "left", '795px', { fromValue: '795px'}], position: 0, duration: 0 },
                { id: "eid350", tween: [ "transform", "${_ejecutivos3}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid342", tween: [ "style", "${_persona2}", "left", '409px', { fromValue: '409px'}], position: 0, duration: 0 }            ]
        }
    }
},
"animAvion1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'avion1',
                    type: 'image',
                    rect: ['188px', '0px', '1036px', '354px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/avion1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_avion1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '354px'],
                ["style", "width", '1036px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 11437,
            autoPlay: true,
            timeline: [
                { id: "eid1437", tween: [ "style", "${_avion1}", "top", '-490px', { fromValue: '0px'}], position: 10430, duration: 333 },
                { id: "eid1445", tween: [ "style", "${_avion1}", "top", '1px', { fromValue: '-490px'}], position: 11081, duration: 186 },
                { id: "eid1435", tween: [ "style", "${_avion1}", "left", '1378px', { fromValue: '0px'}], position: 0, duration: 10365 },
                { id: "eid1440", tween: [ "style", "${_avion1}", "left", '-872px', { fromValue: '1378px'}], position: 10763, duration: 318 },
                { id: "eid1451", tween: [ "style", "${_avion1}", "left", '-2px', { fromValue: '-872px'}], position: 11267, duration: 170 }            ]
        }
    }
},
"ejecutivo2": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ejecut2',
                    type: 'image',
                    rect: ['17px', '28px', '98px', '215px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ejecut2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], [], ['81.3106%', '18.219%']],
                    id: 'manoeject2',
                    type: 'image',
                    rect: ['0px', '73px', '43px', '37px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/manoeject2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], [], ['51.351%', '86.075%']],
                    id: 'cabeject2',
                    type: 'image',
                    rect: ['32px', '0px', '45px', '45px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cabeject2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '243px'],
                ["style", "width", '115px']
            ],
            "${_cabeject2}": [
                ["style", "top", '0px'],
                ["style", "-webkit-transform-origin", [51.35,86.08], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [51.35,86.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [51.35,86.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [51.35,86.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [51.35,86.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [51.35,86.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '32px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_ejecut2}": [
                ["style", "left", '17px'],
                ["style", "top", '28px']
            ],
            "${_manoeject2}": [
                ["style", "top", '73px'],
                ["style", "-webkit-transform-origin", [81.31,18.22], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [81.31,18.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [81.31,18.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [81.31,18.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [81.31,18.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [81.31,18.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '-20deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5866,
            autoPlay: true,
            timeline: [
                { id: "eid1488", tween: [ "transform", "${_cabeject2}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 1500, duration: 1366 },
                { id: "eid1489", tween: [ "transform", "${_cabeject2}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 4500, duration: 1366 }            ]
        }
    }
},
"tablero2": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'tablero2',
                    type: 'image',
                    rect: ['0px', '0px', '145px', '84px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/tablero2.png', '0px', '0px']
                },
                {
                    id: 'gatetab2',
                    type: 'image',
                    rect: ['44px', '45px', '33px', '21px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gatetab2.png', '0px', '0px']
                },
                {
                    id: 'flechatab2',
                    type: 'image',
                    rect: ['20px', '36px', '23px', '30px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flechatab2.png', '0px', '0px']
                },
                {
                    id: 'flechatab2Copy',
                    type: 'image',
                    rect: ['112px', '41px', '23px', '30px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flechatab2.png', '0px', '0px']
                },
                {
                    id: 'dieztab2',
                    type: 'image',
                    rect: ['79px', '41px', '31px', '29px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/dieztab2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_tablero2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_flechatab2}": [
                ["style", "top", '36px'],
                ["style", "opacity", '1'],
                ["style", "left", '20px']
            ],
            "${symbolSelector}": [
                ["style", "height", '84px'],
                ["style", "width", '145px']
            ],
            "${_flechatab2Copy}": [
                ["style", "top", '41px'],
                ["style", "opacity", '1'],
                ["style", "left", '112px']
            ],
            "${_dieztab2}": [
                ["style", "top", '41px'],
                ["style", "left", '79px']
            ],
            "${_gatetab2}": [
                ["style", "top", '45px'],
                ["style", "left", '44px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3500,
            autoPlay: true,
            timeline: [
                { id: "eid1502", tween: [ "style", "${_flechatab2Copy}", "opacity", '0.29545697773973', { fromValue: '1'}], position: 0, duration: 3500 },
                { id: "eid1500", tween: [ "style", "${_flechatab2}", "opacity", '0.30024614726027', { fromValue: '1'}], position: 0, duration: 3500 }            ]
        }
    }
},
"tablero1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'tablero1',
                    type: 'image',
                    rect: ['0px', '0px', '146px', '83px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/tablero1.png', '0px', '0px']
                },
                {
                    id: 'sillatab1',
                    type: 'image',
                    rect: ['107px', '45px', '31px', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sillatab1.png', '0px', '0px']
                },
                {
                    id: 'teltab1',
                    type: 'image',
                    rect: ['46px', '39px', '32px', '29px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/teltab1.png', '0px', '0px']
                },
                {
                    id: 'flechatab1',
                    type: 'image',
                    rect: ['20px', '42px', '28px', '25px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flechatab1.png', '0px', '0px']
                },
                {
                    id: 'perstab1',
                    type: 'image',
                    rect: ['79px', '43px', '31px', '25px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/perstab1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '83px'],
                ["style", "width", '146px']
            ],
            "${_tablero1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_flechatab1}": [
                ["style", "top", '42px'],
                ["style", "opacity", '1'],
                ["style", "left", '20px']
            ],
            "${_sillatab1}": [
                ["style", "top", '45px'],
                ["style", "opacity", '1'],
                ["style", "left", '107px']
            ],
            "${_teltab1}": [
                ["style", "top", '39px'],
                ["style", "opacity", '1'],
                ["style", "left", '46px']
            ],
            "${_perstab1}": [
                ["style", "top", '43px'],
                ["style", "opacity", '1'],
                ["style", "left", '79px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6912,
            autoPlay: true,
            timeline: [
                { id: "eid1513", tween: [ "style", "${_sillatab1}", "opacity", '0.35', { fromValue: '1'}], position: 5385, duration: 1527 },
                { id: "eid1504", tween: [ "style", "${_flechatab1}", "opacity", '0.3', { fromValue: '1'}], position: 0, duration: 2655 },
                { id: "eid1506", tween: [ "style", "${_teltab1}", "opacity", '0.35', { fromValue: '1'}], position: 2655, duration: 1265 },
                { id: "eid1510", tween: [ "style", "${_perstab1}", "opacity", '0.35', { fromValue: '1'}], position: 3920, duration: 1465 }            ]
        }
    }
},
"persona1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'brasocup1',
                    type: 'image',
                    rect: ['89px', '48px', '122px', '45px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/brasocup12.png', '0px', '0px']
                },
                {
                    id: 'cuerpo1',
                    type: 'image',
                    rect: ['0px', '46px', '196px', '248px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cuerpo12.png', '0px', '0px']
                },
                {
                    id: 'cabeza1cuerpo1',
                    type: 'image',
                    rect: ['46px', '0px', '60px', '70px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cabeza1cuerpo12.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_cuerpo1}": [
                ["style", "left", '0px'],
                ["style", "top", '46px']
            ],
            "${_cabeza1cuerpo1}": [
                ["style", "top", '0px'],
                ["style", "-webkit-transform-origin", [50,91.43], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,91.43],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,91.43],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,91.43],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,91.43],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,91.43],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '46px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_brasocup1}": [
                ["style", "left", '89px'],
                ["style", "top", '48px']
            ],
            "${symbolSelector}": [
                ["style", "height", '294px'],
                ["style", "width", '211px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3133,
            autoPlay: true,
            timeline: [
                { id: "eid1422", tween: [ "transform", "${_cabeza1cuerpo1}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 0, duration: 1189 },
                { id: "eid1423", tween: [ "transform", "${_cabeza1cuerpo1}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 1944, duration: 1189 }            ]
        }
    }
},
"creative": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'cc',
                    type: 'image',
                    rect: ['0px', '0px', '141px', '54px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cc.png', '0px', '0px']
                },
                {
                    id: 'cc2',
                    type: 'rect',
                    rect: ['0px', '-85px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'cc2',
                symbolName: 'cc_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '54px'],
                ["style", "width", '141px']
            ],
            "${_cc}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_cc2}": [
                ["style", "left", '0px'],
                ["style", "top", '-85px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"cc_1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['4', '0', '164', '85', 'auto', 'auto'],
                    id: 'Group',
                    display: 'block',
                    type: 'group',
                    c: [
                    {
                        id: 'over2',
                        type: 'image',
                        rect: ['0px', '0px', '164px', '85px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/over.png', '0px', '0px']
                    },
                    {
                        type: 'text',
                        rect: ['6px', '17px', 'auto', 'auto', 'auto', 'auto'],
                        id: 'Text3',
                        text: 'Atribución - No comercial -<br>Compartir igual.',
                        align: 'left',
                        font: ['Arial, Helvetica, sans-serif', 13, 'rgba(0,0,0,1)', '400', 'none', 'normal']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Group}": [
                ["style", "display", 'block'],
                ["style", "clip", [84.30224609375,164,85,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_over2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '164px']
            ],
            "${_Text3}": [
                ["style", "left", '6px'],
                ["style", "top", '17px']
            ],
            "${symbolSelector}": [
                ["style", "height", '85px'],
                ["style", "width", '168px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            labels: {
                "over": 1000,
                "out": 2000
            },
            timeline: [
                { id: "eid49229", tween: [ "style", "${_Group}", "clip", [-1.9895196601283e-13,164,85,-7.8159700933611e-14], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [84.30224609375,164,85,0]}], position: 1000, duration: 250 },
                { id: "eid49225", tween: [ "style", "${_Group}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-1893301");
