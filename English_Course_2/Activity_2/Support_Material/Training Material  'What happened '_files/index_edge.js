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
                ["style", "width", '1000px'],
                ["style", "height", '640px'],
                ["style", "overflow", 'hidden']
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
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'btnInicio',
                    type: 'image',
                    rect: ['0px', '0px', '76px', '69px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/btnInicio.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_btnInicio}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px'],
                ["transform", "scaleX", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '69px'],
                ["style", "width", '76px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: false,
            timeline: [
                { id: "eid1112", tween: [ "transform", "${_btnInicio}", "scaleX", '0.75', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid1118", tween: [ "transform", "${_btnInicio}", "scaleX", '1', { fromValue: '0.75'}], position: 1000, duration: 500 },
                { id: "eid1113", tween: [ "transform", "${_btnInicio}", "scaleY", '0.75', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid1119", tween: [ "transform", "${_btnInicio}", "scaleY", '1', { fromValue: '0.75'}], position: 1000, duration: 500 }            ]
        }
    }
},
"BotonInicio": {
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
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btnInicio',
                symbolName: 'btnInicio',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '69px'],
                ["style", "width", '76px']
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
"icono2": {
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
                    id: 'icono',
                    type: 'image',
                    rect: ['-3px', '-3px', '33px', '38px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/icono2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_icono}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '31px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '27px']
            ],
            "${symbolSelector}": [
                ["style", "height", '31px'],
                ["style", "width", '27px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1250,
            autoPlay: false,
            labels: {
                "sobre": 0,
                "sobreSalir": 750
            },
            timeline: [
                { id: "eid751", tween: [ "transform", "${_icono}", "scaleY", '0.6', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid757", tween: [ "transform", "${_icono}", "scaleY", '1', { fromValue: '0.6'}], position: 750, duration: 500 },
                { id: "eid750", tween: [ "transform", "${_icono}", "scaleX", '0.6', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid756", tween: [ "transform", "${_icono}", "scaleX", '1', { fromValue: '0.6'}], position: 750, duration: 500 }            ]
        }
    }
},
"icono5": {
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
                    id: 'icono',
                    type: 'image',
                    rect: ['-4px', '-3px', '46px', '38px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/icono5.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_icono}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '31px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["style", "width", '37px']
            ],
            "${symbolSelector}": [
                ["style", "height", '31px'],
                ["style", "width", '37px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1250,
            autoPlay: false,
            labels: {
                "sobre": 0,
                "sobreSalir": 750
            },
            timeline: [
                { id: "eid789", tween: [ "transform", "${_icono}", "scaleY", '0.6', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid795", tween: [ "transform", "${_icono}", "scaleY", '1', { fromValue: '0.6'}], position: 750, duration: 500 },
                { id: "eid788", tween: [ "transform", "${_icono}", "scaleX", '0.6', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid794", tween: [ "transform", "${_icono}", "scaleX", '1', { fromValue: '0.6'}], position: 750, duration: 500 }            ]
        }
    }
},
"menuBoton2Ayuda": {
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
                    id: 'bgAyuda',
                    type: 'image',
                    rect: ['1px', '4px', '165px', '46px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/bgAyuda.png', '0px', '0px']
                },
                {
                    rect: ['17px', '16px', '133px', 'auto', 'auto', 'auto'],
                    id: 'Text',
                    text: 'Contextualization',
                    font: ['Arial, Helvetica, sans-serif', 14, 'rgba(0,0,0,1)', '700', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bgAyuda}": [
                ["style", "top", '15px'],
                ["style", "height", '46px'],
                ["transform", "scaleY", '0'],
                ["transform", "skewX", '0deg'],
                ["motion", "location", '92.5px 23px'],
                ["style", "opacity", '0'],
                ["style", "left", '1px'],
                ["style", "width", '165px']
            ],
            "${_Text}": [
                ["style", "font-weight", '700'],
                ["style", "left", '17px'],
                ["style", "font-size", '16px'],
                ["style", "top", '27px'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["motion", "location", '61px 0px'],
                ["style", "opacity", '0'],
                ["style", "width", '136px']
            ],
            "${symbolSelector}": [
                ["style", "height", '60px'],
                ["style", "width", '165px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: false,
            labels: {
                "sobre": 0,
                "sobreSalir": 500
            },
            timeline: [
                { id: "eid183", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 80, duration: 170 },
                { id: "eid184", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 151 },
                { id: "eid2182", tween: [ "transform", "${_bgAyuda}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid2183", tween: [ "transform", "${_bgAyuda}", "scaleY", '0', { fromValue: '1'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid2184", tween: [ "style", "${_bgAyuda}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid2185", tween: [ "style", "${_bgAyuda}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250 }            ]
        }
    }
},
"menuBoton2": {
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
                    id: 'bgOver',
                    type: 'image',
                    rect: ['0px', '0px', '56px', '56px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/bgOver2.png', '0px', '0px']
                },
                {
                    id: 'bgOut',
                    type: 'image',
                    rect: ['0px', '0px', '56px', '56px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/bgOut2.png', '0px', '0px']
                },
                {
                    id: 'icono',
                    type: 'rect',
                    rect: ['14', '12', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['-1px', '-1px', '56px', '56px', 'auto', 'auto'],
                    id: 'colision',
                    stroke: [5, 'rgb(8, 88, 109)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'icono',
                symbolName: 'icono2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_bgOut}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '56px'],
                ["style", "width", '56px']
            ],
            "${_colision}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "top", '-1px'],
                ["style", "height", '56px'],
                ["style", "border-style", 'none'],
                ["style", "left", '-1px'],
                ["style", "width", '56px']
            ],
            "${_bgOver}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px'],
                ["transform", "scaleX", '1']
            ],
            "${_icono}": [
                ["transform", "scaleX", '0.8'],
                ["transform", "scaleY", '0.8']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: false,
            labels: {
                "sobre": 0,
                "sobreSalir": 570
            },
            timeline: [
                { id: "eid893", tween: [ "transform", "${_bgOver}", "scaleX", '0.9', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid905", tween: [ "transform", "${_bgOver}", "scaleX", '1', { fromValue: '0.9'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid836", tween: [ "transform", "${_icono}", "scaleX", '1', { fromValue: '0.8'}], position: 0, duration: 250 },
                { id: "eid835", tween: [ "transform", "${_icono}", "scaleX", '0.8', { fromValue: '1'}], position: 500, duration: 250 },
                { id: "eid891", tween: [ "transform", "${_bgOut}", "scaleX", '0.9', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid903", tween: [ "transform", "${_bgOut}", "scaleX", '1', { fromValue: '0.9'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid892", tween: [ "transform", "${_bgOut}", "scaleY", '0.9', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid904", tween: [ "transform", "${_bgOut}", "scaleY", '1', { fromValue: '0.9'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "style", "${_bgOut}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid50", tween: [ "style", "${_bgOut}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid894", tween: [ "transform", "${_bgOver}", "scaleY", '0.9', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid906", tween: [ "transform", "${_bgOver}", "scaleY", '1', { fromValue: '0.9'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid838", tween: [ "transform", "${_icono}", "scaleY", '1', { fromValue: '0.8'}], position: 0, duration: 250 },
                { id: "eid837", tween: [ "transform", "${_icono}", "scaleY", '0.8', { fromValue: '1'}], position: 500, duration: 250 }            ]
        }
    }
},
"menuBoton3": {
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
                    id: 'bgOver',
                    type: 'image',
                    rect: ['0px', '0px', '56px', '56px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/bgOver2.png', '0px', '0px']
                },
                {
                    id: 'bgOut',
                    type: 'image',
                    rect: ['0px', '0px', '56px', '56px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/bgOut2.png', '0px', '0px']
                },
                {
                    id: 'icono',
                    type: 'rect',
                    rect: ['14', '13', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['-1px', '-1px', '56px', '56px', 'auto', 'auto'],
                    id: 'colision',
                    stroke: [5, 'rgb(8, 88, 109)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'icono',
                symbolName: 'icono3',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_bgOut}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '56px'],
                ["style", "width", '56px']
            ],
            "${_bgOver}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px'],
                ["transform", "scaleX", '1']
            ],
            "${_icono}": [
                ["transform", "scaleX", '0.8'],
                ["transform", "scaleY", '0.8']
            ],
            "${_colision}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "top", '-1px'],
                ["style", "height", '56px'],
                ["style", "border-style", 'none'],
                ["style", "left", '-1px'],
                ["style", "width", '56px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: false,
            labels: {
                "sobre": 0,
                "sobreSalir": 570
            },
            timeline: [
                { id: "eid917", tween: [ "transform", "${_bgOver}", "scaleX", '0.9', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid929", tween: [ "transform", "${_bgOver}", "scaleX", '1', { fromValue: '0.9'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "style", "${_bgOut}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid50", tween: [ "style", "${_bgOut}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid915", tween: [ "transform", "${_bgOut}", "scaleX", '0.9', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid927", tween: [ "transform", "${_bgOut}", "scaleX", '1', { fromValue: '0.9'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid840", tween: [ "transform", "${_icono}", "scaleX", '1', { fromValue: '0.8'}], position: 0, duration: 250 },
                { id: "eid839", tween: [ "transform", "${_icono}", "scaleX", '0.8', { fromValue: '1'}], position: 500, duration: 250 },
                { id: "eid916", tween: [ "transform", "${_bgOut}", "scaleY", '0.9', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid928", tween: [ "transform", "${_bgOut}", "scaleY", '1', { fromValue: '0.9'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid918", tween: [ "transform", "${_bgOver}", "scaleY", '0.9', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid930", tween: [ "transform", "${_bgOver}", "scaleY", '1', { fromValue: '0.9'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid842", tween: [ "transform", "${_icono}", "scaleY", '1', { fromValue: '0.8'}], position: 0, duration: 250 },
                { id: "eid841", tween: [ "transform", "${_icono}", "scaleY", '0.8', { fromValue: '1'}], position: 500, duration: 250 }            ]
        }
    }
},
"menuBoton6": {
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
                    id: 'bgOver',
                    type: 'image',
                    rect: ['0px', '0px', '56px', '56px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/bgOver2.png', '0px', '0px']
                },
                {
                    id: 'bgOut',
                    type: 'image',
                    rect: ['0px', '0px', '56px', '56px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/bgOut2.png', '0px', '0px']
                },
                {
                    id: 'icono',
                    type: 'rect',
                    rect: ['13', '13', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    id: 'colision',
                    stroke: [5, 'rgb(8, 88, 109)', 'none'],
                    rect: ['-5px', '-5px', '65px', '65px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'icono',
                symbolName: 'icono6',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_bgOut}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '56px'],
                ["style", "width", '56px']
            ],
            "${_bgOver}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_icono}": [
                ["transform", "scaleX", '0.8'],
                ["transform", "scaleY", '0.8']
            ],
            "${_colision}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "top", '-5px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '65px'],
                ["style", "border-style", 'none'],
                ["style", "left", '-5px'],
                ["style", "width", '65px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: false,
            labels: {
                "sobre": 0,
                "sobreSalir": 500
            },
            timeline: [
                { id: "eid1003", tween: [ "transform", "${_bgOver}", "scaleX", '0.9', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid1021", tween: [ "transform", "${_bgOver}", "scaleX", '1', { fromValue: '0.9'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid852", tween: [ "transform", "${_icono}", "scaleX", '1', { fromValue: '0.8'}], position: 0, duration: 250 },
                { id: "eid851", tween: [ "transform", "${_icono}", "scaleX", '0.8', { fromValue: '1'}], position: 500, duration: 250 },
                { id: "eid2482", tween: [ "transform", "${_bgOut}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid2491", tween: [ "transform", "${_bgOut}", "scaleX", '0.9', { fromValue: '1'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid1004", tween: [ "transform", "${_bgOver}", "scaleY", '0.9', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid1022", tween: [ "transform", "${_bgOver}", "scaleY", '1', { fromValue: '0.9'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid999", tween: [ "transform", "${_colision}", "scaleX", '0.9', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid1017", tween: [ "transform", "${_colision}", "scaleX", '1', { fromValue: '0.9'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid2484", tween: [ "transform", "${_bgOut}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid2490", tween: [ "transform", "${_bgOut}", "scaleY", '0.9', { fromValue: '1'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid1000", tween: [ "transform", "${_colision}", "scaleY", '0.9', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid1018", tween: [ "transform", "${_colision}", "scaleY", '1', { fromValue: '0.9'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid2470", tween: [ "style", "${_bgOut}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid2473", tween: [ "style", "${_bgOut}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid854", tween: [ "transform", "${_icono}", "scaleY", '1', { fromValue: '0.8'}], position: 0, duration: 250 },
                { id: "eid853", tween: [ "transform", "${_icono}", "scaleY", '0.8', { fromValue: '1'}], position: 500, duration: 250 }            ]
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
                    id: 'icono',
                    type: 'image',
                    rect: ['-3px', '-3px', '38px', '31px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/icono1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_icono}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '25px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '31px']
            ],
            "${symbolSelector}": [
                ["style", "height", '25px'],
                ["style", "width", '31px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1250,
            autoPlay: false,
            labels: {
                "sobre": 0,
                "sobreSalir": 750
            },
            timeline: [
                { id: "eid739", tween: [ "transform", "${_icono}", "scaleY", '0.6', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid745", tween: [ "transform", "${_icono}", "scaleY", '1', { fromValue: '0.6'}], position: 750, duration: 500 },
                { id: "eid738", tween: [ "transform", "${_icono}", "scaleX", '0.6', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid744", tween: [ "transform", "${_icono}", "scaleX", '1', { fromValue: '0.6'}], position: 750, duration: 500 }            ]
        }
    }
},
"bgPressed": {
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
                    id: 'bgPressed',
                    type: 'image',
                    rect: ['0px', '0px', '76px', '76px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/bgPressed.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bgPressed}": [
                ["style", "top", '0px'],
                ["style", "height", '76px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '76px']
            ],
            "${symbolSelector}": [
                ["style", "height", '76px'],
                ["style", "width", '76px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: false,
            labels: {
                "sobre": 0,
                "sobreSalir": 500
            },
            timeline: [
                { id: "eid727", tween: [ "style", "${_bgPressed}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid726", tween: [ "style", "${_bgPressed}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250, easing: "easeOutQuad" }            ]
        }
    }
},
"icono6_1": {
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
                    id: 'icono',
                    type: 'image',
                    rect: ['-3px', '-3px', '36px', '36px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/icono6.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_icono}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '29px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["style", "width", '29px']
            ],
            "${symbolSelector}": [
                ["style", "height", '29px'],
                ["style", "width", '29px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1250,
            autoPlay: false,
            labels: {
                "sobre": 0,
                "sobreSalir": 750
            },
            timeline: [
                { id: "eid801", tween: [ "transform", "${_icono}", "scaleY", '0.6', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid807", tween: [ "transform", "${_icono}", "scaleY", '1', { fromValue: '0.6'}], position: 750, duration: 500 },
                { id: "eid800", tween: [ "transform", "${_icono}", "scaleX", '0.6', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid806", tween: [ "transform", "${_icono}", "scaleX", '1', { fromValue: '0.6'}], position: 750, duration: 500 }            ]
        }
    }
},
"icono3": {
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
                    id: 'icono',
                    type: 'image',
                    rect: ['-4px', '-3px', '35px', '36px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/icono3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_icono}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '29px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["style", "width", '28px']
            ],
            "${symbolSelector}": [
                ["style", "height", '29px'],
                ["style", "width", '28px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1250,
            autoPlay: false,
            labels: {
                "sobre": 0,
                "sobreSalir": 750
            },
            timeline: [
                { id: "eid764", tween: [ "transform", "${_icono}", "scaleX", '0.6', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid770", tween: [ "transform", "${_icono}", "scaleX", '1', { fromValue: '0.6'}], position: 750, duration: 500 },
                { id: "eid765", tween: [ "transform", "${_icono}", "scaleY", '0.6', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid771", tween: [ "transform", "${_icono}", "scaleY", '1', { fromValue: '0.6'}], position: 750, duration: 500 }            ]
        }
    }
},
"menuBoton6Ayuda": {
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
                    id: 'bgAyuda',
                    type: 'image',
                    rect: ['1px', '12px', '165px', '60px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/bgAyuda.png', '0px', '0px']
                },
                {
                    type: 'text',
                    rect: ['46px', '27px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text',
                    text: 'Practice 3',
                    align: 'center',
                    font: ['Arial, Helvetica, sans-serif', 14, 'rgba(0,0,0,1)', '700', 'none', '']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bgAyuda}": [
                ["style", "top", '12px'],
                ["motion", "location", '71.5px 0px'],
                ["transform", "scaleY", '0'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '46px'],
                ["style", "opacity", '0'],
                ["style", "left", '18px'],
                ["style", "width", '127px']
            ],
            "${_Text}": [
                ["style", "line-height", '15px'],
                ["style", "font-weight", '700'],
                ["style", "left", '45px'],
                ["style", "font-size", '16px'],
                ["style", "top", '27px'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["motion", "location", '61px 0px'],
                ["style", "text-align", 'center'],
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '60px'],
                ["style", "width", '165px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: false,
            labels: {
                "sobre": 0,
                "sobreSalir": 500
            },
            timeline: [
                { id: "eid450", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 111, duration: 139 },
                { id: "eid451", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 129 },
                { id: "eid454", tween: [ "style", "${_bgAyuda}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid455", tween: [ "style", "${_bgAyuda}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250 },
                { id: "eid452", tween: [ "transform", "${_bgAyuda}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid453", tween: [ "transform", "${_bgAyuda}", "scaleY", '0', { fromValue: '1'}], position: 500, duration: 250, easing: "easeOutQuad" }            ]
        }
    }
},
"menuBoton6_1": {
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
                    id: 'bgOver',
                    type: 'image',
                    rect: ['0px', '0px', '56px', '56px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/bgOver.png', '0px', '0px']
                },
                {
                    id: 'bgOut',
                    type: 'image',
                    rect: ['0px', '0px', '56px', '56px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/bgOut.png', '0px', '0px']
                },
                {
                    id: 'icono',
                    type: 'rect',
                    rect: ['13', '13', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    id: 'colision',
                    stroke: [5, 'rgb(8, 88, 109)', 'none'],
                    rect: ['-5px', '-5px', '65px', '65px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'icono',
                symbolName: 'icono6_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_bgOut}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '56px'],
                ["style", "width", '56px']
            ],
            "${_bgOver}": [
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "top", '0px']
            ],
            "${_icono}": [
                ["transform", "scaleX", '0.8'],
                ["transform", "scaleY", '0.8']
            ],
            "${_colision}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "top", '-5px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '65px'],
                ["style", "border-style", 'none'],
                ["style", "left", '-5px'],
                ["style", "width", '65px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: false,
            labels: {
                "sobre": 0,
                "sobreSalir": 500
            },
            timeline: [
                { id: "eid1003", tween: [ "transform", "${_bgOver}", "scaleX", '0.9', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid1021", tween: [ "transform", "${_bgOver}", "scaleX", '1', { fromValue: '0.9'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid852", tween: [ "transform", "${_icono}", "scaleX", '1', { fromValue: '0.8'}], position: 0, duration: 250 },
                { id: "eid851", tween: [ "transform", "${_icono}", "scaleX", '0.8', { fromValue: '1'}], position: 500, duration: 250 },
                { id: "eid1001", tween: [ "transform", "${_bgOut}", "scaleX", '0.9', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid1019", tween: [ "transform", "${_bgOut}", "scaleX", '1', { fromValue: '0.9'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid1004", tween: [ "transform", "${_bgOver}", "scaleY", '0.9', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid1022", tween: [ "transform", "${_bgOver}", "scaleY", '1', { fromValue: '0.9'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid999", tween: [ "transform", "${_colision}", "scaleX", '0.9', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid1017", tween: [ "transform", "${_colision}", "scaleX", '1', { fromValue: '0.9'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid1002", tween: [ "transform", "${_bgOut}", "scaleY", '0.9', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid1020", tween: [ "transform", "${_bgOut}", "scaleY", '1', { fromValue: '0.9'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid1000", tween: [ "transform", "${_colision}", "scaleY", '0.9', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid1018", tween: [ "transform", "${_colision}", "scaleY", '1', { fromValue: '0.9'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "style", "${_bgOut}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid50", tween: [ "style", "${_bgOut}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid854", tween: [ "transform", "${_icono}", "scaleY", '1', { fromValue: '0.8'}], position: 0, duration: 250 },
                { id: "eid853", tween: [ "transform", "${_icono}", "scaleY", '0.8', { fromValue: '1'}], position: 500, duration: 250 }            ]
        }
    }
},
"menuBoton1Ayuda": {
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
                    id: 'bgAyuda',
                    type: 'image',
                    rect: ['28px', '5px', '127px', '46px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/bgAyuda.png', '0px', '0px']
                },
                {
                    rect: ['47px', '18px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text',
                    text: 'Introduction',
                    font: ['Arial, Helvetica, sans-serif', 14, 'rgba(0,0,0,1)', '700', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bgAyuda}": [
                ["style", "top", '9px'],
                ["motion", "location", '71.5px 0px'],
                ["transform", "scaleY", '0'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '46px'],
                ["style", "opacity", '0'],
                ["style", "left", '28px'],
                ["style", "width", '127px']
            ],
            "${_Text}": [
                ["style", "top", '20px'],
                ["style", "font-weight", '700'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["motion", "location", '61px 0px'],
                ["style", "opacity", '0'],
                ["style", "left", '47px'],
                ["style", "font-size", '16px']
            ],
            "${symbolSelector}": [
                ["style", "height", '55px'],
                ["style", "width", '146px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: false,
            labels: {
                "sobre": 0,
                "sobreSalir": 500
            },
            timeline: [
                { id: "eid411", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 95, duration: 155 },
                { id: "eid412", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 149 },
                { id: "eid413", tween: [ "transform", "${_bgAyuda}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid414", tween: [ "transform", "${_bgAyuda}", "scaleY", '0', { fromValue: '1'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid415", tween: [ "style", "${_bgAyuda}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid416", tween: [ "style", "${_bgAyuda}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250 }            ]
        }
    }
},
"menuBoton4Ayuda": {
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
                    id: 'bgAyudaCopy2',
                    type: 'image',
                    rect: ['20px', '13px', '118px', '45px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/bgAyuda.png', '0px', '0px']
                },
                {
                    rect: ['42px', '23px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text',
                    text: 'Practice 1',
                    font: ['Arial, Helvetica, sans-serif', 14, 'rgba(0,0,0,1)', '700', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bgAyudaCopy2}": [
                ["style", "top", '13px'],
                ["style", "height", '45px'],
                ["transform", "scaleY", '0'],
                ["transform", "skewX", '0deg'],
                ["motion", "location", '77px 24.5px'],
                ["style", "opacity", '0'],
                ["style", "left", '20px'],
                ["style", "width", '118px']
            ],
            "${_Text}": [
                ["style", "top", '23px'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["motion", "location", '61px 0px'],
                ["style", "font-weight", '700'],
                ["style", "left", '42px'],
                ["style", "font-size", '16px']
            ],
            "${symbolSelector}": [
                ["style", "height", '60px'],
                ["style", "width", '165px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: false,
            labels: {
                "sobre": 0,
                "sobreSalir": 500
            },
            timeline: [
                { id: "eid2193", tween: [ "style", "${_bgAyudaCopy2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid2192", tween: [ "style", "${_bgAyudaCopy2}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250 },
                { id: "eid435", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 89, duration: 161 },
                { id: "eid436", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 150 },
                { id: "eid2191", tween: [ "transform", "${_bgAyudaCopy2}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid2190", tween: [ "transform", "${_bgAyudaCopy2}", "scaleY", '0', { fromValue: '1'}], position: 500, duration: 250, easing: "easeOutQuad" }            ]
        }
    }
},
"icono6": {
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
                    id: 'icono',
                    type: 'image',
                    rect: ['-3px', '-3px', '36px', '36px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/icono62.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_icono}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '29px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["style", "width", '29px']
            ],
            "${symbolSelector}": [
                ["style", "height", '29px'],
                ["style", "width", '29px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1250,
            autoPlay: false,
            labels: {
                "sobre": 0,
                "sobreSalir": 750
            },
            timeline: [
                { id: "eid801", tween: [ "transform", "${_icono}", "scaleY", '0.6', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid807", tween: [ "transform", "${_icono}", "scaleY", '1', { fromValue: '0.6'}], position: 750, duration: 500 },
                { id: "eid800", tween: [ "transform", "${_icono}", "scaleX", '0.6', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid806", tween: [ "transform", "${_icono}", "scaleX", '1', { fromValue: '0.6'}], position: 750, duration: 500 }            ]
        }
    }
},
"menu": {
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
                    id: 'menuFondo6Botones',
                    type: 'image',
                    rect: ['243px', '0px', '515px', '83px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/menuFondo6Botones.png', '0px', '0px']
                },
                {
                    id: 'menuBoton1Over',
                    type: 'rect',
                    rect: ['270px', '2px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.92105', '0.92105']]
                },
                {
                    id: 'menuBoton1Ayuda',
                    type: 'rect',
                    rect: ['216px', '67px', 'auto', 'auto', 'auto', 'auto'],
                    opacity: 1
                },
                {
                    id: 'menuBoton2Over',
                    type: 'rect',
                    rect: ['333px', '3px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.92105', '0.92105']]
                },
                {
                    id: 'menuBoton2Ayuda',
                    type: 'rect',
                    rect: ['289px', '62px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'menuBoton3Over',
                    type: 'rect',
                    rect: ['396px', '3px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.92105', '0.92105']]
                },
                {
                    id: 'menuBoton3Ayuda',
                    type: 'rect',
                    rect: ['349px', '62px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'menuBoton4Over',
                    type: 'rect',
                    rect: ['458px', '3px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.92105', '0.92105']]
                },
                {
                    id: 'menuBoton4Ayuda',
                    type: 'rect',
                    rect: ['413px', '62px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'menuBoton5Over',
                    type: 'rect',
                    rect: ['511px', '3px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.92105', '0.92105']]
                },
                {
                    id: 'menuBoton5Ayuda',
                    type: 'rect',
                    rect: ['475px', '62px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'menuBoton6Over',
                    type: 'rect',
                    rect: ['573px', '3px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.92105', '0.92105']]
                },
                {
                    id: 'menuBoton6Ayuda',
                    type: 'rect',
                    rect: ['530px', '62px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'menuBoton7Over',
                    type: 'rect',
                    rect: ['634px', '3px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.92105', '0.92105']]
                },
                {
                    id: 'menuBoton7Ayuda',
                    type: 'rect',
                    rect: ['596px', '61px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'menuBoton7',
                    type: 'rect',
                    rect: ['645px', '14px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'menuBoton6',
                    type: 'rect',
                    rect: ['585px', '13px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'menuBoton5',
                    type: 'rect',
                    rect: ['525px', '13px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'menuBoton4',
                    type: 'rect',
                    rect: ['466px', '13px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'menuBoton3',
                    type: 'rect',
                    rect: ['405px', '13px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'menuBoton2',
                    type: 'rect',
                    rect: ['344px', '13px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'menuBoton1',
                    type: 'rect',
                    rect: ['284px', '13px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'BotonSonido',
                    type: 'rect',
                    rect: ['93', '128', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'BotonInicio',
                    type: 'rect',
                    rect: ['144', '-48', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'menuBoton6Over',
                symbolName: 'bgPressed',
                autoPlay: {

               }
            },
            {
                id: 'menuBoton2Ayuda',
                symbolName: 'menuBoton2Ayuda',
                autoPlay: {

               }
            },
            {
                id: 'menuBoton2',
                symbolName: 'menuBoton2',
                autoPlay: {

               }
            },
            {
                id: 'menuBoton3',
                symbolName: 'menuBoton3',
                autoPlay: {

               }
            },
            {
                id: 'menuBoton6',
                symbolName: 'menuBoton6',
                autoPlay: {

               }
            },
            {
                id: 'menuBoton2Over',
                symbolName: 'bgPressed',
                autoPlay: {

               }
            },
            {
                id: 'menuBoton1Ayuda',
                symbolName: 'menuBoton1Ayuda',
                autoPlay: {

               }
            },
            {
                id: 'menuBoton4Over',
                symbolName: 'bgPressed',
                autoPlay: {

               }
            },
            {
                id: 'BotonInicio',
                symbolName: 'BotonInicio',
                autoPlay: {

               }
            },
            {
                id: 'menuBoton3Over',
                symbolName: 'bgPressed',
                autoPlay: {

               }
            },
            {
                id: 'menuBoton6Ayuda',
                symbolName: 'menuBoton6Ayuda',
                autoPlay: {

               }
            },
            {
                id: 'menuBoton5Over',
                symbolName: 'bgPressed',
                autoPlay: {

               }
            },
            {
                id: 'BotonSonido',
                symbolName: 'BotonSonido',
                autoPlay: {

               }
            },
            {
                id: 'menuBoton4Ayuda',
                symbolName: 'menuBoton4Ayuda',
                autoPlay: {

               }
            },
            {
                id: 'menuBoton7Ayuda',
                symbolName: 'menuBoton7Ayuda',
                autoPlay: {

               }
            },
            {
                id: 'menuBoton7',
                symbolName: 'menuBoton6_1',
                autoPlay: {

               }
            },
            {
                id: 'menuBoton7Over',
                symbolName: 'bgPressed',
                autoPlay: {

               }
            },
            {
                id: 'menuBoton5',
                symbolName: 'menuBoton5',
                autoPlay: {

               }
            },
            {
                id: 'menuBoton3Ayuda',
                symbolName: 'menuBoton3Ayuda',
                autoPlay: {

               }
            },
            {
                id: 'menuBoton4',
                symbolName: 'menuBoton4',
                autoPlay: {

               }
            },
            {
                id: 'menuBoton1Over',
                symbolName: 'bgPressed',
                autoPlay: {

               }
            },
            {
                id: 'menuBoton5Ayuda',
                symbolName: 'menuBoton5Ayuda',
                autoPlay: {

               }
            },
            {
                id: 'menuBoton1',
                symbolName: 'menuBoton1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_menuBoton4Over}": [
                ["style", "top", '3px'],
                ["transform", "scaleY", '0.92105'],
                ["transform", "scaleX", '0.92105'],
                ["style", "opacity", '1'],
                ["style", "left", '458px']
            ],
            "${_BotonInicio}": [
                ["style", "top", '5px'],
                ["style", "opacity", '0'],
                ["style", "left", '1080px']
            ],
            "${_menuBoton6Over}": [
                ["style", "top", '3px'],
                ["transform", "scaleY", '0.92105'],
                ["transform", "scaleX", '0.92105'],
                ["style", "opacity", '1'],
                ["style", "left", '573px']
            ],
            "${_menuFondo6Botones}": [
                ["style", "left", '243px'],
                ["style", "top", '-85px']
            ],
            "${_menuBoton6}": [
                ["style", "top", '-47px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '585px']
            ],
            "${_menuBoton7Over}": [
                ["style", "top", '3px'],
                ["transform", "scaleY", '0.92105'],
                ["transform", "scaleX", '0.92105'],
                ["style", "opacity", '1'],
                ["style", "left", '634px']
            ],
            "${_menuBoton1Ayuda}": [
                ["style", "top", '67px'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["motion", "location", '71.5px 66px'],
                ["style", "opacity", '1'],
                ["style", "left", '216px']
            ],
            "${_menuBoton7Ayuda}": [
                ["style", "left", '596px'],
                ["style", "top", '61px']
            ],
            "${_menuBoton2Over}": [
                ["style", "top", '3px'],
                ["transform", "scaleY", '0.92105'],
                ["transform", "scaleX", '0.92105'],
                ["style", "opacity", '1'],
                ["style", "left", '333px']
            ],
            "${_menuBoton6Ayuda}": [
                ["style", "top", '62px'],
                ["style", "left", '530px']
            ],
            "${_menuBoton5Over}": [
                ["style", "top", '3px'],
                ["transform", "scaleY", '0.92105'],
                ["transform", "scaleX", '0.92105'],
                ["style", "opacity", '1'],
                ["style", "left", '511px']
            ],
            "${_menuBoton2Ayuda}": [
                ["style", "top", '62px'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["style", "opacity", '1'],
                ["style", "left", '289px']
            ],
            "${_menuBoton2}": [
                ["style", "top", '-47px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '344px']
            ],
            "${_menuBoton5}": [
                ["style", "top", '-47px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '525px']
            ],
            "${_menuBoton4}": [
                ["style", "top", '-47px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '466px']
            ],
            "${_menuBoton4Ayuda}": [
                ["style", "left", '413px'],
                ["style", "top", '62px']
            ],
            "${_menuBoton3Over}": [
                ["style", "top", '3px'],
                ["transform", "scaleY", '0.92105'],
                ["transform", "scaleX", '0.92105'],
                ["style", "opacity", '1'],
                ["style", "left", '396px']
            ],
            "${_menuBoton1Over}": [
                ["style", "top", '2px'],
                ["transform", "scaleY", '0.92105'],
                ["transform", "scaleX", '0.92105'],
                ["style", "opacity", '1'],
                ["style", "left", '270px']
            ],
            "${_BotonSonido}": [
                ["style", "top", '5px'],
                ["style", "opacity", '0'],
                ["style", "left", '-80px']
            ],
            "${_menuBoton3}": [
                ["style", "top", '-47px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '405px']
            ],
            "${_menuBoton7}": [
                ["style", "top", '-46px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '645px']
            ],
            "${_menuBoton5Ayuda}": [
                ["style", "left", '472px'],
                ["style", "top", '67px']
            ],
            "${_menuBoton3Ayuda}": [
                ["style", "top", '62px'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["style", "opacity", '1'],
                ["style", "left", '349px']
            ],
            "${_menuBoton1}": [
                ["style", "top", '-47px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '284px']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "overflow", 'visible'],
                ["style", "width", '1000px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2450,
            autoPlay: false,
            labels: {
                "FinBotones": 2225
            },
            timeline: [
                { id: "eid1100", tween: [ "style", "${_menuBoton7}", "opacity", '1', { fromValue: '0'}], position: 1876, duration: 349, easing: "easeOutQuad" },
                { id: "eid322", tween: [ "style", "${_menuBoton6}", "opacity", '1', { fromValue: '0'}], position: 1701, duration: 349, easing: "easeOutQuad" },
                { id: "eid138", tween: [ "style", "${_menuBoton3}", "opacity", '1', { fromValue: '0'}], position: 841, duration: 350, easing: "easeOutQuad" },
                { id: "eid11", tween: [ "style", "${_BotonSonido}", "top", '5px', { fromValue: '5px'}], position: 2250, duration: 0, easing: "easeOutQuad" },
                { id: "eid9", tween: [ "style", "${_BotonInicio}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 200, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "style", "${_BotonSonido}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 200, easing: "easeOutQuad" },
                { id: "eid83", tween: [ "transform", "${_menuBoton2}", "scaleX", '1', { fromValue: '0.5'}], position: 545, duration: 354, easing: "easeOutQuad" },
                { id: "eid63", tween: [ "transform", "${_menuBoton1}", "scaleX", '1', { fromValue: '0.5'}], position: 250, duration: 358, easing: "easeOutQuad" },
                { id: "eid388", tween: [ "style", "${_menuBoton6}", "top", '13px', { fromValue: '-47px'}], position: 1701, duration: 175, easing: "easeOutQuad" },
                { id: "eid139", tween: [ "transform", "${_menuBoton3}", "scaleY", '1', { fromValue: '0.5'}], position: 841, duration: 350, easing: "easeOutQuad" },
                { id: "eid251", tween: [ "transform", "${_menuBoton4}", "scaleX", '1', { fromValue: '0.5'}], position: 1092, duration: 408, easing: "easeOutQuad" },
                { id: "eid7", tween: [ "style", "${_BotonInicio}", "top", '5px', { fromValue: '5px'}], position: 2250, duration: 0, easing: "easeOutQuad" },
                { id: "eid323", tween: [ "transform", "${_menuBoton6}", "scaleY", '1', { fromValue: '0.5'}], position: 1701, duration: 349, easing: "easeOutQuad" },
                { id: "eid84", tween: [ "style", "${_menuBoton2}", "opacity", '1', { fromValue: '0'}], position: 545, duration: 354, easing: "easeOutQuad" },
                { id: "eid2475", tween: [ "style", "${_menuBoton5Ayuda}", "left", '472px', { fromValue: '472px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid254", tween: [ "transform", "${_menuBoton5}", "scaleX", '1', { fromValue: '0.5'}], position: 1404, duration: 346, easing: "easeOutQuad" },
                { id: "eid376", tween: [ "style", "${_menuBoton2}", "top", '13px', { fromValue: '-47px'}], position: 545, duration: 166, easing: "easeOutQuad" },
                { id: "eid255", tween: [ "style", "${_menuBoton5}", "opacity", '1', { fromValue: '0'}], position: 1404, duration: 346, easing: "easeOutQuad" },
                { id: "eid137", tween: [ "transform", "${_menuBoton3}", "scaleX", '1', { fromValue: '0.5'}], position: 841, duration: 350, easing: "easeOutQuad" },
                { id: "eid373", tween: [ "style", "${_menuBoton1}", "top", '13px', { fromValue: '-47px'}], position: 250, duration: 179, easing: "easeOutQuad" },
                { id: "eid253", tween: [ "transform", "${_menuBoton4}", "scaleY", '1', { fromValue: '0.5'}], position: 1092, duration: 408, easing: "easeOutQuad" },
                { id: "eid1101", tween: [ "transform", "${_menuBoton7}", "scaleY", '1', { fromValue: '0.5'}], position: 1876, duration: 349, easing: "easeOutQuad" },
                { id: "eid382", tween: [ "style", "${_menuBoton4}", "top", '13px', { fromValue: '-47px'}], position: 1092, duration: 193, easing: "easeOutQuad" },
                { id: "eid252", tween: [ "style", "${_menuBoton4}", "opacity", '1', { fromValue: '0'}], position: 1092, duration: 408, easing: "easeOutQuad" },
                { id: "eid68", tween: [ "style", "${_menuBoton1}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 358, easing: "easeOutQuad" },
                { id: "eid385", tween: [ "style", "${_menuBoton5}", "top", '13px', { fromValue: '-47px'}], position: 1404, duration: 162, easing: "easeOutQuad" },
                { id: "eid370", tween: [ "style", "${_menuFondo6Botones}", "top", '0px', { fromValue: '-85px'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid64", tween: [ "transform", "${_menuBoton1}", "scaleY", '1', { fromValue: '0.5'}], position: 250, duration: 358, easing: "easeOutQuad" },
                { id: "eid8", tween: [ "style", "${_BotonInicio}", "left", '914px', { fromValue: '1080px'}], position: 2250, duration: 200, easing: "easeOutQuad" },
                { id: "eid379", tween: [ "style", "${_menuBoton3}", "top", '13px', { fromValue: '-47px'}], position: 841, duration: 170, easing: "easeOutQuad" },
                { id: "eid1102", tween: [ "style", "${_menuBoton7}", "top", '14px', { fromValue: '-46px'}], position: 1875, duration: 175, easing: "easeOutQuad" },
                { id: "eid1099", tween: [ "transform", "${_menuBoton7}", "scaleX", '1', { fromValue: '0.5'}], position: 1876, duration: 349, easing: "easeOutQuad" },
                { id: "eid85", tween: [ "transform", "${_menuBoton2}", "scaleY", '1', { fromValue: '0.5'}], position: 545, duration: 354, easing: "easeOutQuad" },
                { id: "eid2474", tween: [ "style", "${_menuBoton5Ayuda}", "top", '67px', { fromValue: '67px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid256", tween: [ "transform", "${_menuBoton5}", "scaleY", '1', { fromValue: '0.5'}], position: 1404, duration: 346, easing: "easeOutQuad" },
                { id: "eid321", tween: [ "transform", "${_menuBoton6}", "scaleX", '1', { fromValue: '0.5'}], position: 1701, duration: 349, easing: "easeOutQuad" },
                { id: "eid3", tween: [ "style", "${_BotonSonido}", "left", '0px', { fromValue: '-80px'}], position: 2250, duration: 200, easing: "easeOutQuad" }            ]
        }
    }
},
"menuBoton7Ayuda": {
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
                    id: 'bgAyuda',
                    type: 'image',
                    rect: ['-11px', '5px', '135px', '49px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/bgAyuda.png', '0px', '0px']
                },
                {
                    rect: ['33px', '14px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 14, 'rgba(0,0,0,1)', '700', 'none', ''],
                    id: 'Text',
                    text: 'Pronunciation<br>practice',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bgAyuda}": [
                ["style", "top", '5px'],
                ["style", "height", '49px'],
                ["transform", "scaleY", '0'],
                ["transform", "skewX", '0deg'],
                ["motion", "location", '71.5px 0px'],
                ["style", "opacity", '0'],
                ["style", "left", '16px'],
                ["style", "width", '135px']
            ],
            "${_menuBoton7Ayuda}": [
                ["style", "top", '82px']
            ],
            "${_Text}": [
                ["style", "line-height", '15px'],
                ["style", "font-weight", '700'],
                ["style", "left", '33px'],
                ["style", "font-size", '16px'],
                ["style", "top", '14px'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["motion", "location", '61px 0px'],
                ["style", "opacity", '0'],
                ["style", "text-align", 'center']
            ],
            "${symbolSelector}": [
                ["style", "height", '60px'],
                ["style", "width", '165px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: false,
            labels: {
                "sobre": 0,
                "sobreSalir": 500
            },
            timeline: [
                { id: "eid2234", tween: [ "style", "${_bgAyuda}", "left", '16px', { fromValue: '16px'}], position: 278, duration: 0, easing: "easeOutQuad" },
                { id: "eid450", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 111, duration: 139 },
                { id: "eid451", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 129 },
                { id: "eid2229", tween: [ "transform", "${_bgAyuda}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid2230", tween: [ "transform", "${_bgAyuda}", "scaleY", '0', { fromValue: '1'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid2232", tween: [ "style", "${_bgAyuda}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid2233", tween: [ "style", "${_bgAyuda}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250 }            ]
        }
    }
},
"icono4": {
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
                    id: 'icono',
                    type: 'image',
                    rect: ['-4px', '-3px', '41px', '30px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/icono4.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_icono}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '24px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["style", "width", '33px']
            ],
            "${symbolSelector}": [
                ["style", "height", '24px'],
                ["style", "width", '33px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1250,
            autoPlay: false,
            labels: {
                "sobre": 0,
                "sobreSalir": 750
            },
            timeline: [
                { id: "eid777", tween: [ "transform", "${_icono}", "scaleY", '0.6', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid783", tween: [ "transform", "${_icono}", "scaleY", '1', { fromValue: '0.6'}], position: 750, duration: 500 },
                { id: "eid776", tween: [ "transform", "${_icono}", "scaleX", '0.6', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid782", tween: [ "transform", "${_icono}", "scaleX", '1', { fromValue: '0.6'}], position: 750, duration: 500 }            ]
        }
    }
},
"menuBoton3Ayuda": {
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
                    id: 'bgAyuda',
                    type: 'image',
                    rect: ['9px', '13px', '148px', '46px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/bgAyuda.png', '0px', '0px']
                },
                {
                    rect: ['21px', '25px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text',
                    text: 'Comprehension',
                    font: ['Arial, Helvetica, sans-serif', 14, 'rgba(0,0,0,1)', '700', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bgAyuda}": [
                ["style", "top", '13px'],
                ["motion", "location", '71.5px 0px'],
                ["transform", "scaleY", '0'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '46px'],
                ["style", "opacity", '0'],
                ["style", "left", '9px'],
                ["style", "width", '148px']
            ],
            "${_Text}": [
                ["style", "top", '25px'],
                ["style", "font-weight", '700'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["motion", "location", '61px 0px'],
                ["style", "opacity", '0'],
                ["style", "left", '21px'],
                ["style", "font-size", '16px']
            ],
            "${symbolSelector}": [
                ["style", "height", '60px'],
                ["style", "width", '165px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: false,
            labels: {
                "sobre": 0,
                "sobreSalir": 500
            },
            timeline: [
                { id: "eid423", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 94, duration: 156 },
                { id: "eid424", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 166 },
                { id: "eid425", tween: [ "transform", "${_bgAyuda}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid426", tween: [ "transform", "${_bgAyuda}", "scaleY", '0', { fromValue: '1'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid427", tween: [ "style", "${_bgAyuda}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid428", tween: [ "style", "${_bgAyuda}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250 }            ]
        }
    }
},
"menuBoton4": {
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
                    id: 'bgOver',
                    type: 'image',
                    rect: ['0px', '0px', '56px', '56px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/bgOver2.png', '0px', '0px']
                },
                {
                    id: 'bgOut',
                    type: 'image',
                    rect: ['0px', '0px', '56px', '56px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/bgOut2.png', '0px', '0px']
                },
                {
                    id: 'icono',
                    type: 'rect',
                    rect: ['11', '16', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['-1px', '-1px', '56px', '56px', 'auto', 'auto'],
                    id: 'colision',
                    stroke: [5, 'rgb(8, 88, 109)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'icono',
                symbolName: 'icono4',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_bgOut}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '56px'],
                ["style", "width", '56px']
            ],
            "${_colision}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "top", '-1px'],
                ["style", "height", '56px'],
                ["style", "border-style", 'none'],
                ["style", "left", '-1px'],
                ["style", "width", '56px']
            ],
            "${_icono}": [
                ["transform", "scaleX", '0.8'],
                ["transform", "scaleY", '0.8']
            ],
            "${_bgOver}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px'],
                ["transform", "scaleX", '1']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: false,
            labels: {
                "sobre": 0,
                "sobreSalir": 500
            },
            timeline: [
                { id: "eid953", tween: [ "transform", "${_bgOver}", "scaleX", '0.9', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid956", tween: [ "transform", "${_bgOver}", "scaleX", '1', { fromValue: '1'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid844", tween: [ "transform", "${_icono}", "scaleX", '1', { fromValue: '0.8'}], position: 0, duration: 250 },
                { id: "eid843", tween: [ "transform", "${_icono}", "scaleX", '0.8', { fromValue: '1'}], position: 500, duration: 250 },
                { id: "eid951", tween: [ "transform", "${_bgOut}", "scaleX", '0.9', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid955", tween: [ "transform", "${_bgOut}", "scaleX", '1', { fromValue: '1'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid816", tween: [ "style", "${_bgOut}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid817", tween: [ "style", "${_bgOut}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid952", tween: [ "transform", "${_bgOut}", "scaleY", '0.9', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid957", tween: [ "transform", "${_bgOut}", "scaleY", '1', { fromValue: '1'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid954", tween: [ "transform", "${_bgOver}", "scaleY", '0.9', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid958", tween: [ "transform", "${_bgOver}", "scaleY", '1', { fromValue: '1'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid846", tween: [ "transform", "${_icono}", "scaleY", '1', { fromValue: '0.8'}], position: 0, duration: 250 },
                { id: "eid845", tween: [ "transform", "${_icono}", "scaleY", '0.8', { fromValue: '1'}], position: 500, duration: 250 }            ]
        }
    }
},
"menuBoton5": {
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
                    id: 'bgOver',
                    type: 'image',
                    rect: ['0px', '0px', '56px', '56px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/bgOver2.png', '0px', '0px']
                },
                {
                    id: 'bgOut',
                    type: 'image',
                    rect: ['0px', '0px', '56px', '56px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/bgOut2.png', '0px', '0px']
                },
                {
                    id: 'icono',
                    type: 'rect',
                    rect: ['9', '12px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    id: 'colision',
                    stroke: [5, 'rgb(8, 88, 109)', 'none'],
                    rect: ['-1px', '-1px', '56px', '56px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'icono',
                symbolName: 'icono5',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_bgOut}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '56px'],
                ["style", "width", '56px']
            ],
            "${_bgOver}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px'],
                ["transform", "scaleX", '1']
            ],
            "${_icono}": [
                ["transform", "scaleX", '0.8'],
                ["transform", "scaleY", '0.83626'],
                ["style", "top", '12px']
            ],
            "${_colision}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "top", '-1px'],
                ["style", "height", '56px'],
                ["style", "border-style", 'none'],
                ["style", "left", '-1px'],
                ["style", "width", '56px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: false,
            labels: {
                "sobre": 0,
                "sobreSalir": 500
            },
            timeline: [
                { id: "eid1035", tween: [ "transform", "${_bgOver}", "scaleX", '0.9', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1047", tween: [ "transform", "${_bgOver}", "scaleX", '1', { fromValue: '0.9'}], position: 500, duration: 250 },
                { id: "eid6", tween: [ "style", "${_bgOut}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid50", tween: [ "style", "${_bgOut}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid1033", tween: [ "transform", "${_bgOut}", "scaleX", '0.9', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1045", tween: [ "transform", "${_bgOut}", "scaleX", '1', { fromValue: '0.9'}], position: 500, duration: 250 },
                { id: "eid848", tween: [ "transform", "${_icono}", "scaleX", '1', { fromValue: '0.8'}], position: 0, duration: 250 },
                { id: "eid847", tween: [ "transform", "${_icono}", "scaleX", '0.8', { fromValue: '1'}], position: 500, duration: 250 },
                { id: "eid1034", tween: [ "transform", "${_bgOut}", "scaleY", '0.9', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1046", tween: [ "transform", "${_bgOut}", "scaleY", '1', { fromValue: '0.9'}], position: 500, duration: 250 },
                { id: "eid1036", tween: [ "transform", "${_bgOver}", "scaleY", '0.9', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1048", tween: [ "transform", "${_bgOver}", "scaleY", '1', { fromValue: '0.9'}], position: 500, duration: 250 },
                { id: "eid850", tween: [ "transform", "${_icono}", "scaleY", '1', { fromValue: '0.83626'}], position: 0, duration: 250 },
                { id: "eid849", tween: [ "transform", "${_icono}", "scaleY", '0.8', { fromValue: '1'}], position: 500, duration: 250 }            ]
        }
    }
},
"menuBoton5Ayuda": {
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
                    id: 'bgAyuda',
                    type: 'image',
                    rect: ['18px', '11px', '118px', '45px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/bgAyuda.png', '0px', '0px']
                },
                {
                    rect: ['41px', '22px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text',
                    text: 'Practice 2',
                    font: ['Arial, Helvetica, sans-serif', 14, 'rgba(0,0,0,1)', '700', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bgAyuda}": [
                ["style", "top", '11px'],
                ["motion", "location", '71.5px 0px'],
                ["transform", "scaleY", '0'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '45px'],
                ["style", "opacity", '0'],
                ["style", "left", '18px'],
                ["style", "width", '118px']
            ],
            "${_Text}": [
                ["style", "top", '22px'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["motion", "location", '61px 0px'],
                ["style", "font-weight", '700'],
                ["style", "left", '41px'],
                ["style", "font-size", '16px']
            ],
            "${symbolSelector}": [
                ["style", "height", '60px'],
                ["style", "width", '165px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: false,
            labels: {
                "sobre": 0,
                "sobreSalir": 500
            },
            timeline: [
                { id: "eid444", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 80, duration: 170 },
                { id: "eid445", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 178 },
                { id: "eid448", tween: [ "style", "${_bgAyuda}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid449", tween: [ "style", "${_bgAyuda}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250 },
                { id: "eid446", tween: [ "transform", "${_bgAyuda}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid447", tween: [ "transform", "${_bgAyuda}", "scaleY", '0', { fromValue: '1'}], position: 500, duration: 250, easing: "easeOutQuad" }            ]
        }
    }
},
"menuBoton1": {
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
                    id: 'bgOver',
                    type: 'image',
                    rect: ['0px', '0px', '56px', '56px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/bgOver2.png', '0px', '0px']
                },
                {
                    id: 'bgOut',
                    type: 'image',
                    rect: ['0px', '0px', '56px', '56px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/bgOut2.png', '0px', '0px']
                },
                {
                    id: 'icono',
                    type: 'rect',
                    transform: [[0, 0], [], [], ['0.80645', '0.80645']],
                    rect: ['13px', '15px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['0px', '0px', '56px', '56px', 'auto', 'auto'],
                    id: 'colision',
                    stroke: [5, 'rgb(8, 88, 109)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0)']
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
            "${_bgOut}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_Text}": [
                ["style", "top", '19px'],
                ["style", "opacity", '1'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["motion", "location", '83.5px 30px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '37px'],
                ["style", "font-size", '16px']
            ],
            "${symbolSelector}": [
                ["style", "height", '56px'],
                ["style", "width", '56px']
            ],
            "${_bgOver}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px'],
                ["transform", "scaleX", '1']
            ],
            "${_colision}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "top", '0px'],
                ["style", "height", '56px'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '56px']
            ],
            "${_icono}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.8'],
                ["style", "top", '15px'],
                ["transform", "scaleX", '0.8'],
                ["style", "height", '25px'],
                ["style", "left", '13px'],
                ["style", "width", '31px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: false,
            labels: {
                "sobre": 0,
                "sobreSalir": 500
            },
            timeline: [
                { id: "eid869", tween: [ "transform", "${_bgOver}", "scaleX", '0.9', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid881", tween: [ "transform", "${_bgOver}", "scaleX", '1', { fromValue: '0.9'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid822", tween: [ "transform", "${_icono}", "scaleX", '1', { fromValue: '0.8'}], position: 0, duration: 250 },
                { id: "eid833", tween: [ "transform", "${_icono}", "scaleX", '0.8', { fromValue: '1'}], position: 500, duration: 250 },
                { id: "eid867", tween: [ "transform", "${_bgOut}", "scaleX", '0.9', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid879", tween: [ "transform", "${_bgOut}", "scaleX", '1', { fromValue: '0.9'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "style", "${_bgOut}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid50", tween: [ "style", "${_bgOut}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid868", tween: [ "transform", "${_bgOut}", "scaleY", '0.9', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid880", tween: [ "transform", "${_bgOut}", "scaleY", '1', { fromValue: '0.9'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid870", tween: [ "transform", "${_bgOver}", "scaleY", '0.9', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid882", tween: [ "transform", "${_bgOver}", "scaleY", '1', { fromValue: '0.9'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid823", tween: [ "transform", "${_icono}", "scaleY", '1', { fromValue: '0.8'}], position: 0, duration: 250 },
                { id: "eid834", tween: [ "transform", "${_icono}", "scaleY", '0.8', { fromValue: '1'}], position: 500, duration: 250 }            ]
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
                    id: 'btnAudio',
                    type: 'image',
                    rect: ['0px', '0px', '75px', '69px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/btnAudio.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_btnAudio}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '69px'],
                ["style", "width", '75px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: false,
            labels: {
                "sobre": 0,
                "sobreOver": 1000
            },
            timeline: [
                { id: "eid1098", tween: [ "transform", "${_btnAudio}", "scaleX", '0.75', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid1104", tween: [ "transform", "${_btnAudio}", "scaleX", '1', { fromValue: '0.75'}], position: 1000, duration: 500 },
                { id: "eid1099", tween: [ "transform", "${_btnAudio}", "scaleY", '0.75', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid1105", tween: [ "transform", "${_btnAudio}", "scaleY", '1', { fromValue: '0.75'}], position: 1000, duration: 500 }            ]
        }
    }
},
"BotonSonido": {
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
                    display: 'block',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto'],
                    id: 'btnAudio'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto'],
                    id: 'btnaudioSil'
                }
            ],
            symbolInstances: [
            {
                id: 'btnAudio',
                symbolName: 'btnAudio',
                autoPlay: {

               }
            },
            {
                id: 'btnaudioSil',
                symbolName: 'btnaudioSil',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_btnAudio}": [
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '69px'],
                ["style", "width", '75px']
            ],
            "${_btnaudioSil}": [
                ["style", "display", 'none']
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
                { id: "eid1090", tween: [ "style", "${_btnAudio}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1091", tween: [ "style", "${_btnAudio}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid1089", tween: [ "style", "${_btnaudioSil}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1088", tween: [ "style", "${_btnaudioSil}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 }            ]
        }
    }
},
"btnaudioSil": {
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
                    id: 'btnAudioSil',
                    type: 'image',
                    rect: ['0px', '0px', '75px', '69px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Menu/btnAudioSil.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_btnAudioSil}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '69px'],
                ["style", "width", '75px']
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
"contenido5": {
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
                    id: 'ventana',
                    type: 'rect',
                    rect: ['21', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    id: 'contenedor',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['85px', '45px', '830px', '448px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0)']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'Intentos',
                    rect: ['809', '435', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'escribirVerificar',
                    rect: ['752px', '400px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'escribirVerificar',
                symbolName: 'escribirVerificar',
                autoPlay: {

               }
            },
            {
                id: 'ventana',
                symbolName: 'contenedor',
                autoPlay: {

               }
            },
            {
                id: 'Intentos',
                symbolName: 'preguntas1Intentos',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_escribirVerificar}": [
                ["style", "top", '400px'],
                ["style", "left", '752px'],
                ["style", "display", 'none']
            ],
            "${_contenedor}": [
                ["style", "height", '448px'],
                ["style", "top", '45px'],
                ["style", "left", '85px'],
                ["style", "width", '830px']
            ],
            "${_Intentos}": [
                ["style", "top", '408px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '551px'],
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
                { id: "eid283", tween: [ "style", "${_Intentos}", "top", '408px', { fromValue: '408px'}], position: 0, duration: 0 },
                { id: "eid1209", tween: [ "style", "${_Intentos}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid802", tween: [ "style", "${_escribirVerificar}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"contenido1": {
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
                    id: 'ventana',
                    type: 'rect',
                    rect: ['21', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['85px', '45px', '830px', '448px', 'auto', 'auto'],
                    id: 'contenedor',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0)']
                }
            ],
            symbolInstances: [
            {
                id: 'ventana',
                symbolName: 'contenedor',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_contenedor}": [
                ["style", "height", '448px'],
                ["style", "top", '45px'],
                ["style", "left", '85px'],
                ["style", "width", '830px']
            ],
            "${symbolSelector}": [
                ["style", "height", '551px'],
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
"contenedor": {
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
                    rect: ['25px', '19px', '903px', '497px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'FondoBlanco',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    id: 'Contenido',
                    type: 'image',
                    rect: ['-1px', '1px', '958px', '551px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Contenedor/ventana3.png', '0px', '0px']
                },
                {
                    rect: ['344px', '511px', '269px', '41px', 'auto', 'auto'],
                    id: 'barraMenuNav',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/Contenedor/barraMenuNav.png', '0px', '0px']
                },
                {
                    rect: ['390px', '511px', '177px', '41px', 'auto', 'auto'],
                    id: 'pagNav',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/Ventanas/pagNav.png', '0px', '0px']
                },
                {
                    rect: ['445px', '516px', '62px', '27px', 'auto', 'auto'],
                    id: 'paginacion',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    type: 'rect',
                    display: 'block',
                    id: 'botonAdelante',
                    cursor: ['pointer'],
                    rect: ['410px', '432px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    display: 'block',
                    id: 'botonAtras',
                    cursor: ['pointer'],
                    rect: ['94px', '649px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'botonAtras',
                symbolName: 'botonAdelante',
                autoPlay: {

               }
            },
            {
                id: 'botonAdelante',
                symbolName: 'botonAdelante',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_botonAdelante}": [
                ["style", "top", '513px'],
                ["style", "left", '522px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'block']
            ],
            "${_paginacion}": [
                ["style", "top", '516px'],
                ["style", "left", '445px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${_FondoBlanco}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${symbolSelector}": [
                ["style", "height", '551px'],
                ["style", "width", '958px']
            ],
            "${_Contenido}": [
                ["style", "left", '-1px'],
                ["style", "top", '1px']
            ],
            "${_botonAtras}": [
                ["style", "top", '515px'],
                ["transform", "scaleX", '-1'],
                ["style", "display", 'block'],
                ["style", "left", '406px'],
                ["style", "cursor", 'pointer']
            ],
            "${_barraMenuNav}": [
                ["style", "display", 'block'],
                ["style", "height", '41px'],
                ["style", "left", '344px'],
                ["style", "top", '511px']
            ],
            "${_pagNav}": [
                ["style", "display", 'block'],
                ["style", "height", '41px'],
                ["style", "left", '390px'],
                ["style", "top", '511px']
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
                "Juegos": 1000
            },
            timeline: [
                { id: "eid1389", tween: [ "style", "${_pagNav}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1486", tween: [ "style", "${_pagNav}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeInQuad" },
                { id: "eid1390", tween: [ "style", "${_barraMenuNav}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1487", tween: [ "style", "${_barraMenuNav}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeInQuad" },
                { id: "eid1170", tween: [ "style", "${_botonAdelante}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1492", tween: [ "style", "${_botonAdelante}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeInQuad" },
                { id: "eid1387", tween: [ "style", "${_botonAdelante}", "left", '522px', { fromValue: '522px'}], position: 0, duration: 0 },
                { id: "eid1493", tween: [ "style", "${_botonAdelante}", "left", '891px', { fromValue: '522px'}], position: 1000, duration: 0, easing: "easeInQuad" },
                { id: "eid1385", tween: [ "style", "${_botonAtras}", "left", '406px', { fromValue: '406px'}], position: 0, duration: 0 },
                { id: "eid1489", tween: [ "style", "${_botonAtras}", "left", '27px', { fromValue: '406px'}], position: 1000, duration: 0, easing: "easeInQuad" },
                { id: "eid583", tween: [ "style", "${_botonAtras}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1488", tween: [ "style", "${_botonAtras}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeInQuad" },
                { id: "eid1386", tween: [ "style", "${_botonAtras}", "top", '515px', { fromValue: '515px'}], position: 0, duration: 0 },
                { id: "eid1490", tween: [ "style", "${_botonAtras}", "top", '478px', { fromValue: '515px'}], position: 1000, duration: 0, easing: "easeInQuad" },
                { id: "eid580", tween: [ "transform", "${_botonAtras}", "scaleX", '-1', { fromValue: '-1'}], position: 0, duration: 0 },
                { id: "eid1491", tween: [ "transform", "${_botonAtras}", "scaleX", '-1', { fromValue: '-1'}], position: 1000, duration: 0, easing: "easeInQuad" },
                { id: "eid1388", tween: [ "style", "${_botonAdelante}", "top", '513px', { fromValue: '513px'}], position: 0, duration: 0 },
                { id: "eid1494", tween: [ "style", "${_botonAdelante}", "top", '478px', { fromValue: '513px'}], position: 1000, duration: 0, easing: "easeInQuad" }            ]
        }
    }
},
"contenido2": {
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
                    id: 'ventana',
                    type: 'rect',
                    rect: ['21', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['85px', '45px', '830px', '448px', 'auto', 'auto'],
                    id: 'contenedor',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0)']
                }
            ],
            symbolInstances: [
            {
                id: 'ventana',
                symbolName: 'contenedor',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_contenedor}": [
                ["style", "height", '448px'],
                ["style", "top", '45px'],
                ["style", "left", '85px'],
                ["style", "width", '830px']
            ],
            "${symbolSelector}": [
                ["style", "height", '551px'],
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
"contenido3": {
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
                    id: 'ventana',
                    type: 'rect',
                    rect: ['21', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['893', '507', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Intentos'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['135', '243', 'auto', 'auto', 'auto', 'auto'],
                    id: 'BtnNext'
                },
                {
                    rect: ['85px', '45px', '830px', '448px', 'auto', 'auto'],
                    id: 'contenedor',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0)']
                }
            ],
            symbolInstances: [
            {
                id: 'ventana',
                symbolName: 'contenedor',
                autoPlay: {

               }
            },
            {
                id: 'Intentos',
                symbolName: 'preguntas1Intentos',
                autoPlay: {

               }
            },
            {
                id: 'BtnNext',
                symbolName: 'BtnNext',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Intentos}": [
                ["style", "top", '410px'],
                ["style", "left", '806px'],
                ["style", "display", 'none']
            ],
            "${_contenedor}": [
                ["style", "height", '448px'],
                ["style", "top", '45px'],
                ["style", "left", '85px'],
                ["style", "width", '830px']
            ],
            "${_BtnNext}": [
                ["style", "top", '451px'],
                ["style", "left", '775px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '551px'],
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
                { id: "eid279", tween: [ "style", "${_Intentos}", "top", '410px', { fromValue: '410px'}], position: 0, duration: 0 },
                { id: "eid1301", tween: [ "style", "${_Intentos}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid280", tween: [ "style", "${_Intentos}", "left", '806px', { fromValue: '806px'}], position: 0, duration: 0 },
                { id: "eid1307", tween: [ "style", "${_BtnNext}", "top", '451px', { fromValue: '451px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1308", tween: [ "style", "${_BtnNext}", "left", '775px', { fromValue: '775px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1311", tween: [ "style", "${_BtnNext}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" }            ]
        }
    }
},
"contenido4": {
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
                    id: 'ventana',
                    type: 'rect',
                    rect: ['21', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['110px', '46px', '780px', '448px', 'auto', 'auto'],
                    id: 'contenedor',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0)']
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['1843', '236', 'auto', 'auto', 'auto', 'auto'],
                    id: 'intentos'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['1265', '288', 'auto', 'auto', 'auto', 'auto'],
                    id: 'btnVerificar'
                }
            ],
            symbolInstances: [
            {
                id: 'ventana',
                symbolName: 'contenedor',
                autoPlay: {

               }
            },
            {
                id: 'intentos',
                symbolName: 'preguntas1Intentos',
                autoPlay: {

               }
            },
            {
                id: 'btnVerificar',
                symbolName: 'escribirVerificar',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_contenedor}": [
                ["style", "height", '448px'],
                ["style", "top", '46px'],
                ["style", "left", '110px'],
                ["style", "width", '780px']
            ],
            "${_btnVerificar}": [
                ["style", "top", '419px'],
                ["style", "left", '742px'],
                ["style", "display", 'none']
            ],
            "${_intentos}": [
                ["style", "top", '410px'],
                ["style", "left", '812px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '551px'],
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
                { id: "eid1176", tween: [ "style", "${_intentos}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${_intentos}", "top", '410px', { fromValue: '410px'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${_intentos}", "left", '812px', { fromValue: '812px'}], position: 0, duration: 0 },
                { id: "eid1179", tween: [ "style", "${_btnVerificar}", "left", '742px', { fromValue: '742px'}], position: 0, duration: 0 },
                { id: "eid1183", tween: [ "style", "${_btnVerificar}", "top", '419px', { fromValue: '419px'}], position: 0, duration: 0 },
                { id: "eid257", tween: [ "style", "${_btnVerificar}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"contenido6": {
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
                    id: 'ventana',
                    type: 'rect',
                    rect: ['21', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    id: 'contenedor',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['85px', '45px', '830px', '448px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0)']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'Intentos',
                    rect: ['762', '704', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'escribirVerificar',
                    rect: ['116', '462', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'escribirVerificar',
                symbolName: 'escribirVerificar',
                autoPlay: {

               }
            },
            {
                id: 'ventana',
                symbolName: 'contenedor',
                autoPlay: {

               }
            },
            {
                id: 'Intentos',
                symbolName: 'preguntas1Intentos',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_escribirVerificar}": [
                ["style", "top", '431px'],
                ["style", "opacity", '1'],
                ["style", "left", '774px'],
                ["style", "display", 'none']
            ],
            "${_contenedor}": [
                ["style", "height", '448px'],
                ["style", "top", '45px'],
                ["style", "left", '85px'],
                ["style", "width", '830px']
            ],
            "${_Intentos}": [
                ["style", "top", '408px'],
                ["style", "left", '804px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '551px'],
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
                { id: "eid293", tween: [ "style", "${_Intentos}", "top", '408px', { fromValue: '408px'}], position: 0, duration: 0 },
                { id: "eid1208", tween: [ "style", "${_Intentos}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid294", tween: [ "style", "${_Intentos}", "left", '804px', { fromValue: '804px'}], position: 0, duration: 0 },
                { id: "eid1212", tween: [ "style", "${_escribirVerificar}", "top", '431px', { fromValue: '431px'}], position: 0, duration: 0 },
                { id: "eid1210", tween: [ "style", "${_escribirVerificar}", "left", '774px', { fromValue: '774px'}], position: 0, duration: 0 },
                { id: "eid1384", tween: [ "style", "${_escribirVerificar}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1383", tween: [ "style", "${_escribirVerificar}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeInQuad" }            ]
        }
    }
},
"botonAdelante": {
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
                    id: 'btnNav',
                    type: 'image',
                    rect: ['0px', '0px', '37px', '33px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Contenedor/btnNav.png', '0px', '0px']
                },
                {
                    id: 'btnNavOver',
                    type: 'image',
                    rect: ['0px', '1px', '37px', '33px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Contenedor/btnNavOver.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_btnNavOver}": [
                ["style", "top", '1px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px']
            ],
            "${_btnNav}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '33px'],
                ["style", "width", '37px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1250,
            autoPlay: false,
            labels: {
                "sobre": 0,
                "sobreOver": 750
            },
            timeline: [
                { id: "eid1054", tween: [ "style", "${_btnNav}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid1060", tween: [ "style", "${_btnNav}", "opacity", '1', { fromValue: '0.000000'}], position: 750, duration: 500 },
                { id: "eid1051", tween: [ "style", "${_btnNavOver}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 500 },
                { id: "eid1057", tween: [ "style", "${_btnNavOver}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 500 }            ]
        }
    }
},
"mcPrecarga": {
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
                    type: 'rect',
                    id: 'fondo',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '1000px', '640px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    id: 'precarga',
                    type: 'image',
                    rect: ['184px', '241px', '632px', '157px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/objetos/precarga.gif', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_fondo}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_precarga}": [
                ["style", "left", '184px'],
                ["style", "top", '241px']
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
            ]
        }
    }
},
"mcBienvenida": {
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
                    id: 'ventana',
                    type: 'rect',
                    rect: ['21', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    id: 'contenedor',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['85px', '45px', '830px', '448px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0)']
                }
            ],
            symbolInstances: [
            {
                id: 'ventana',
                symbolName: 'contenedor_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '551px'],
                ["style", "width", '1000px']
            ],
            "${_contenedor}": [
                ["style", "top", '45px'],
                ["style", "height", '448px'],
                ["style", "left", '85px'],
                ["style", "width", '830px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1636,
            autoPlay: false,
            labels: {
                "incio": 0,
                "fin": 1542
            },
            timeline: [
            ]
        }
    }
},
"contenido7": {
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
                    id: 'ventana',
                    type: 'rect',
                    rect: ['21', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    id: 'contenedor',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['85px', '45px', '830px', '448px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0)']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'escribirVerificar',
                    rect: ['72px', '440px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'Intentos',
                    rect: ['808px', '412px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'escribirVerificar',
                symbolName: 'escribirVerificar',
                autoPlay: {

               }
            },
            {
                id: 'ventana',
                symbolName: 'contenedor',
                autoPlay: {

               }
            },
            {
                id: 'Intentos',
                symbolName: 'preguntas1Intentos',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_escribirVerificar}": [
                ["style", "top", '440px'],
                ["style", "left", '72px'],
                ["style", "display", 'none']
            ],
            "${_contenedor}": [
                ["style", "top", '45px'],
                ["style", "height", '448px'],
                ["style", "left", '85px'],
                ["style", "width", '830px']
            ],
            "${_Intentos}": [
                ["style", "top", '412px'],
                ["style", "left", '808px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '551px'],
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
                { id: "eid819", tween: [ "style", "${_escribirVerificar}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid820", tween: [ "style", "${_Intentos}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"mcFondo1": {
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
                    id: 'FondoCielo',
                    type: 'image',
                    rect: ['1px', '0px', '1000px', '640px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/FondoCielo.png', '0px', '0px']
                },
                {
                    rect: ['113px', '233px', 'auto', 'auto', 'auto', 'auto'],
                    filter: [0, 0, 2, 0, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'ppalSol',
                    transform: [[], [], [], ['2.49257', '2.49257']],
                    clip: ['rect(-0.29948440194129944px 380px 151.09036254882813px 1.1207252740859985px)'],
                    type: 'rect'
                },
                {
                    id: 'FondoCasa',
                    type: 'image',
                    rect: ['0px', '0px', '1000px', '640px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/FondoCasa.png', '0px', '0px']
                },
                {
                    id: 'ContenedorPajarosCopy',
                    type: 'rect',
                    rect: ['863', '139', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['500px', '378px', '112px', '252px', 'auto', 'auto'],
                    id: 'Personaje1',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/Personaje1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'ppalSol',
                symbolName: 'ppalSol',
                autoPlay: {

               }
            },
            {
                id: 'ContenedorPajarosCopy',
                symbolName: 'ContenedorPajaros',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_FondoCasa}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_ppalSol}": [
                ["style", "top", '233px'],
                ["subproperty", "filter.contrast", '2'],
                ["transform", "scaleY", '2.49257'],
                ["transform", "scaleX", '2.49257'],
                ["style", "left", '113px'],
                ["style", "clip", [-0.29948440194129944,380,151.09036254882812,1.1207252740859985], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["subproperty", "filter.saturate", '0']
            ],
            "${_FondoCielo}": [
                ["style", "top", '0px'],
                ["style", "height", '640px'],
                ["style", "left", '1px'],
                ["style", "width", '1000px']
            ],
            "${symbolSelector}": [
                ["style", "height", '640px'],
                ["style", "width", '1001px']
            ],
            "${_ContenedorPajarosCopy}": [
                ["style", "top", '139px'],
                ["style", "height", '36px'],
                ["style", "left", '863px'],
                ["style", "width", '110px']
            ],
            "${_Personaje1}": [
                ["style", "top", '378px'],
                ["style", "left", '500px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 75000,
            autoPlay: true,
            timeline: [
                { id: "eid2115", tween: [ "style", "${_ContenedorPajarosCopy}", "width", '110px', { fromValue: '110px'}], position: 40000, duration: 0 },
                { id: "eid2111", tween: [ "style", "${_ContenedorPajarosCopy}", "top", '139px', { fromValue: '139px'}], position: 0, duration: 0 },
                { id: "eid2112", tween: [ "style", "${_ContenedorPajarosCopy}", "top", '139px', { fromValue: '139px'}], position: 40000, duration: 0 },
                { id: "eid2113", tween: [ "style", "${_ContenedorPajarosCopy}", "height", '36px', { fromValue: '36px'}], position: 40000, duration: 0 },
                { id: "eid2114", tween: [ "style", "${_ContenedorPajarosCopy}", "left", '-331px', { fromValue: '863px'}], position: 0, duration: 40000 },
                { id: "eid2120", tween: [ "style", "${_Personaje1}", "display", 'block', { fromValue: 'block'}], position: 2500, duration: 0 }            ]
        }
    }
},
"btnFalseTrue": {
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
                    id: 'rectrue',
                    type: 'image',
                    rect: ['0px', '9px', '38px', '37px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/rectrue.png', '0px', '0px']
                },
                {
                    rect: ['6px', '2px', '32px', '36px', 'auto', 'auto'],
                    id: 'recbien',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/recbien.png', '0px', '0px']
                },
                {
                    rect: ['4px', '1px', '36px', '37px', 'auto', 'auto'],
                    id: 'recmal',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/recmal.png', '0px', '0px']
                },
                {
                    id: 'seleccion',
                    type: 'image',
                    rect: ['8px', '15px', '25px', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/chulobien.png', '0px', '0px']
                },
                {
                    rect: ['13px', '5px', '18px', '27px', 'auto', 'auto'],
                    id: 'chulox',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/chulox.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_recmal}": [
                ["style", "top", '9px'],
                ["style", "left", '4px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '37px'],
                ["style", "width", '38px']
            ],
            "${_rectrue}": [
                ["style", "left", '0px'],
                ["style", "top", '9px']
            ],
            "${_recbien}": [
                ["style", "top", '9px'],
                ["style", "left", '6px'],
                ["style", "display", 'none']
            ],
            "${_seleccion}": [
                ["style", "top", '15px'],
                ["style", "left", '8px']
            ],
            "${_chulox}": [
                ["style", "top", '5px'],
                ["style", "left", '13px'],
                ["style", "display", 'none']
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
                "normal": 0,
                "mal": 1000,
                "bien": 2000
            },
            timeline: [
                { id: "eid2492", tween: [ "style", "${_recmal}", "top", '9px', { fromValue: '9px'}], position: 1582, duration: 0 },
                { id: "eid818", tween: [ "style", "${_recmal}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid813", tween: [ "style", "${_recmal}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid2493", tween: [ "style", "${_recbien}", "top", '9px', { fromValue: '9px'}], position: 1582, duration: 0 },
                { id: "eid476", tween: [ "style", "${_chulox}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid477", tween: [ "style", "${_chulox}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid480", tween: [ "style", "${_chulox}", "display", 'none', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid814", tween: [ "style", "${_recbien}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid815", tween: [ "style", "${_recbien}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"escribirVerificar": {
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
                    id: 'verificar',
                    type: 'image',
                    rect: ['22px', '-6px', '152px', '100px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/verificar.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_verificar}": [
                ["style", "top", '-6px'],
                ["style", "left", '22px']
            ],
            "${symbolSelector}": [
                ["style", "height", '75px'],
                ["style", "width", '195px']
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
"escribirCerrar": {
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
                    id: 'botonCerrar',
                    type: 'image',
                    rect: ['0px', '0px', '133px', '63px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/botonCerrar.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_botonCerrar}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '63px'],
                ["style", "width", '133px']
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
"mensaje": {
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
                    rect: ['17px', '12px', '717px', '372px', 'auto', 'auto'],
                    id: 'VentanaCorrecto2',
                    fill: ['rgba(0,0,0,0)', 'images/VentanaCorrecto.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['-60px', '-59px', '717px', '372px', 'auto', 'auto'],
                    id: 'VentanaIncorrecto2',
                    fill: ['rgba(0,0,0,0)', 'images/VentanaIncorrecto.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'contenedor',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['58px', '73px', '440px', '136px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    id: 'cerrar',
                    type: 'rect',
                    rect: ['551', '-13', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'cerrar',
                symbolName: 'escribirCerrar_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '275px'],
                ["style", "width", '601px']
            ],
            "${_VentanaCorrecto2}": [
                ["style", "top", '12px'],
                ["style", "display", 'block'],
                ["style", "height", '270px'],
                ["style", "left", '-1px'],
                ["style", "width", '568px']
            ],
            "${_contenedor}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '58px'],
                ["style", "top", '73px']
            ],
            "${_cerrar}": [
                ["style", "left", '203px'],
                ["style", "top", '227px']
            ],
            "${_VentanaIncorrecto2}": [
                ["style", "top", '11px'],
                ["style", "display", 'none'],
                ["style", "height", '270px'],
                ["style", "left", '0px'],
                ["style", "width", '568px']
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
                "bien": 0,
                "mal": 1000,
                "gano": 2000,
                "perdio": 3000
            },
            timeline: [
                { id: "eid1089", tween: [ "style", "${_VentanaIncorrecto2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1090", tween: [ "style", "${_VentanaIncorrecto2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1092", tween: [ "style", "${_VentanaIncorrecto2}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid1093", tween: [ "style", "${_VentanaIncorrecto2}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid1088", tween: [ "style", "${_VentanaCorrecto2}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid1091", tween: [ "style", "${_VentanaCorrecto2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid1094", tween: [ "style", "${_VentanaCorrecto2}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid2423", tween: [ "style", "${_VentanaIncorrecto2}", "width", '568px', { fromValue: '568px'}], position: 1000, duration: 0 },
                { id: "eid2543", tween: [ "style", "${_VentanaCorrecto2}", "left", '-1px', { fromValue: '-1px'}], position: 0, duration: 0 },
                { id: "eid2426", tween: [ "style", "${_VentanaCorrecto2}", "width", '568px', { fromValue: '568px'}], position: 2000, duration: 0 },
                { id: "eid2427", tween: [ "style", "${_VentanaCorrecto2}", "height", '270px', { fromValue: '270px'}], position: 2000, duration: 0 },
                { id: "eid2428", tween: [ "style", "${_VentanaIncorrecto2}", "left", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
                { id: "eid2429", tween: [ "style", "${_VentanaIncorrecto2}", "top", '11px', { fromValue: '11px'}], position: 1000, duration: 0 },
                { id: "eid2422", tween: [ "style", "${_cerrar}", "top", '227px', { fromValue: '227px'}], position: 0, duration: 0 },
                { id: "eid2542", tween: [ "style", "${_cerrar}", "left", '203px', { fromValue: '203px'}], position: 0, duration: 0 },
                { id: "eid2425", tween: [ "style", "${_VentanaIncorrecto2}", "height", '270px', { fromValue: '270px'}], position: 1000, duration: 0 }            ]
        }
    }
},
"modal": {
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
                    rect: ['0px', '0px', '1000px', '653px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.30)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(192,192,192,0.30)'],
                ["style", "height", '653px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '1000px']
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
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"preguntas1Intentos": {
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
                    id: 'intentos2',
                    type: 'image',
                    rect: ['0px', '0px', '175px', '107px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/intentos.png', '0px', '0px']
                },
                {
                    rect: ['75px', '55px', '37px', '31px', 'auto', 'auto'],
                    id: 'contenedor',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_intentos2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '107px'],
                ["style", "width", '175px']
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
"botonAdelante_1": {
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
                    id: 'btnNav',
                    type: 'image',
                    rect: ['0px', '0px', '37px', '33px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Contenedor/btnNav.png', '0px', '0px']
                },
                {
                    id: 'btnNavOver',
                    type: 'image',
                    rect: ['0px', '1px', '37px', '33px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Contenedor/btnNavOver.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_btnNavOver}": [
                ["style", "top", '1px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px']
            ],
            "${_btnNav}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '33px'],
                ["style", "width", '37px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1250,
            autoPlay: false,
            labels: {
                "sobre": 0,
                "sobreOver": 750
            },
            timeline: [
                { id: "eid1054", tween: [ "style", "${_btnNav}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid1060", tween: [ "style", "${_btnNav}", "opacity", '1', { fromValue: '0.000000'}], position: 750, duration: 500 },
                { id: "eid1051", tween: [ "style", "${_btnNavOver}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 500 },
                { id: "eid1057", tween: [ "style", "${_btnNavOver}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 500 }            ]
        }
    }
},
"contenedor_1": {
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
                    rect: ['25px', '19px', '903px', '497px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'FondoBlanco',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    id: 'Contenido',
                    type: 'image',
                    rect: ['-1px', '1px', '958px', '551px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Contenedor/ventana3.png', '0px', '0px']
                },
                {
                    id: 'barraMenuNav',
                    type: 'image',
                    rect: ['344px', '511px', '269px', '41px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Contenedor/barraMenuNav.png', '0px', '0px']
                },
                {
                    id: 'botonAdelante',
                    type: 'rect',
                    rect: ['409px', '490px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    display: 'none',
                    id: 'botonAtras',
                    cursor: ['pointer'],
                    rect: ['94px', '649px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['445px', '516px', '62px', '27px', 'auto', 'auto'],
                    id: 'paginacion',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'botonAtras',
                symbolName: 'botonAdelante_1',
                autoPlay: {

               }
            },
            {
                id: 'botonAdelante',
                symbolName: 'BtnNext',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_botonAdelante}": [
                ["style", "left", '409px'],
                ["style", "top", '490px']
            ],
            "${symbolSelector}": [
                ["style", "height", '551px'],
                ["style", "width", '958px']
            ],
            "${_botonAtras}": [
                ["style", "top", '513px'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '-1'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '398px']
            ],
            "${_barraMenuNav}": [
                ["style", "top", '511px'],
                ["style", "left", '344px'],
                ["style", "height", '41px']
            ],
            "${_Contenido}": [
                ["style", "left", '-1px'],
                ["style", "top", '1px']
            ],
            "${_FondoBlanco}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_paginacion}": [
                ["style", "top", '516px'],
                ["style", "left", '445px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
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
                { id: "eid583", tween: [ "style", "${_botonAtras}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid580", tween: [ "transform", "${_botonAtras}", "scaleX", '-1', { fromValue: '-1'}], position: 0, duration: 0 },
                { id: "eid586", tween: [ "style", "${_botonAtras}", "left", '398px', { fromValue: '398px'}], position: 0, duration: 0 },
                { id: "eid591", tween: [ "style", "${_botonAtras}", "top", '513px', { fromValue: '513px'}], position: 0, duration: 0 }            ]
        }
    }
},
"btnFalseTrue_1": {
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
                    id: 'rectrue',
                    type: 'image',
                    rect: ['0px', '0px', '38px', '37px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/rectrue2.png', '0px', '0px']
                },
                {
                    id: 'seleccion',
                    type: 'image',
                    rect: ['8px', '6px', '25px', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/chulobien2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['13px', '5px', '18px', '27px', 'auto', 'auto'],
                    id: 'chulox',
                    fill: ['rgba(0,0,0,0)', 'images/chulox2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_chulox}": [
                ["style", "top", '5px'],
                ["style", "left", '13px'],
                ["style", "display", 'none']
            ],
            "${_rectrue}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_seleccion}": [
                ["style", "top", '6px'],
                ["style", "left", '8px']
            ],
            "${symbolSelector}": [
                ["style", "height", '37px'],
                ["style", "width", '38px']
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
                "normal": 0,
                "mal": 1000,
                "bien": 2000
            },
            timeline: [
                { id: "eid476", tween: [ "style", "${_chulox}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid477", tween: [ "style", "${_chulox}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid480", tween: [ "style", "${_chulox}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"pregunta4": {
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
                    id: 'btn1B0',
                    type: 'rect',
                    rect: ['0px', '92px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btn1C0',
                    type: 'rect',
                    rect: ['0px', '141px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['6px', '0px', '297px', '51px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    id: 'Text2Copy26',
                    text: '4. Where did you go on vacation?',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['52px', '47px', '281px', '24px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    id: 'Text2Copy25',
                    text: 'I went to Argentina. It is a beautiful country.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['52px', '99px', '281px', '27px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    id: 'Text2Copy24',
                    text: 'We were at the hospital. My father-in-law was sick.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['52px', '149px', '266px', '26px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    id: 'Text2Copy23',
                    text: 'Yes, they did.',
                    align: 'left',
                    type: 'text'
                },
                {
                    id: 'btn1A1',
                    type: 'rect',
                    rect: ['0px', '41px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btn1C0',
                symbolName: 'btnC',
                autoPlay: {

               }
            },
            {
                id: 'btn1B0',
                symbolName: 'btnB',
                autoPlay: {

               }
            },
            {
                id: 'btn1A1',
                symbolName: 'btnA',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Text2Copy26}": [
                ["style", "line-height", '20px'],
                ["style", "font-size", '18px'],
                ["style", "text-align", 'left'],
                ["style", "top", '0px'],
                ["style", "height", '51px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '6px'],
                ["style", "width", '297px']
            ],
            "${_btn1B0}": [
                ["style", "top", '92px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'auto']
            ],
            "${_Text2Copy24}": [
                ["style", "top", '99px'],
                ["style", "text-align", 'left'],
                ["style", "height", '27px'],
                ["style", "font-size", '18px'],
                ["style", "left", '52px'],
                ["style", "width", '281px']
            ],
            "${_Text2Copy25}": [
                ["style", "top", '47px'],
                ["style", "text-align", 'left'],
                ["style", "height", '24px'],
                ["style", "font-size", '18px'],
                ["style", "left", '52px'],
                ["style", "width", '281px']
            ],
            "${_btn1A1}": [
                ["style", "top", '42px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'auto']
            ],
            "${_btn1C0}": [
                ["style", "top", '141px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'auto']
            ],
            "${_Text2Copy23}": [
                ["style", "top", '149px'],
                ["style", "text-align", 'left'],
                ["style", "height", '26px'],
                ["style", "font-size", '18px'],
                ["style", "left", '52px'],
                ["style", "width", '266px']
            ],
            "${symbolSelector}": [
                ["style", "height", '161px'],
                ["style", "width", '318px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: false,
            timeline: [
                { id: "eid120", tween: [ "style", "${_btn1A1}", "top", '42px', { fromValue: '42px'}], position: 0, duration: 0 }            ]
        }
    }
},
"btnB": {
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
                    id: 'btn',
                    type: 'image',
                    rect: ['0px', '0px', '40px', '34px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btn.png', '0px', '0px']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 20, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    type: 'text',
                    id: 'Text',
                    text: 'B',
                    align: 'center',
                    rect: ['10px', '3px', '25px', '29px', 'auto', 'auto']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['11px', '5px', '22px', '24px', 'auto', 'auto'],
                    id: 'selBien3',
                    fill: ['rgba(0,0,0,0)', 'images/selBien4.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['14px', '5px', '17px', '24px', 'auto', 'auto'],
                    id: 'selMalCopy2',
                    fill: ['rgba(0,0,0,0)', 'images/selMal4.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_selMalCopy2}": [
                ["style", "top", '5px'],
                ["style", "opacity", '0'],
                ["style", "left", '14px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '3px'],
                ["style", "text-align", 'center'],
                ["style", "width", '25px'],
                ["style", "height", '29px'],
                ["style", "opacity", '1'],
                ["style", "left", '9px'],
                ["style", "font-size", '20px']
            ],
            "${symbolSelector}": [
                ["style", "height", '34px'],
                ["style", "width", '40px']
            ],
            "${_selBien3}": [
                ["style", "top", '5px'],
                ["style", "opacity", '0'],
                ["style", "left", '11px'],
                ["style", "display", 'block']
            ],
            "${_btn}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '34px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["style", "width", '40px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            labels: {
                "malo": 500,
                "bueno": 1250,
                "select": 1500,
                "unselect": 2000
            },
            timeline: [
                { id: "eid1285", tween: [ "transform", "${_btn}", "scaleX", '0.8', { fromValue: '1'}], position: 1500, duration: 250 },
                { id: "eid1309", tween: [ "transform", "${_btn}", "scaleX", '1', { fromValue: '0.8'}], position: 2000, duration: 250 },
                { id: "eid1286", tween: [ "transform", "${_btn}", "scaleY", '0.8', { fromValue: '1'}], position: 1500, duration: 250 },
                { id: "eid1310", tween: [ "transform", "${_btn}", "scaleY", '1', { fromValue: '0.8'}], position: 2000, duration: 250 },
                { id: "eid1256", tween: [ "style", "${_selMalCopy2}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid2401", tween: [ "style", "${_Text}", "font-size", '14px', { fromValue: '20px'}], position: 1500, duration: 250 },
                { id: "eid2408", tween: [ "style", "${_Text}", "font-size", '20px', { fromValue: '14px'}], position: 2000, duration: 250 },
                { id: "eid1241", tween: [ "style", "${_selMalCopy2}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 250 },
                { id: "eid1239", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1263", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 250 },
                { id: "eid1280", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 0 },
                { id: "eid2404", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '1'}], position: 2000, duration: 0 },
                { id: "eid1279", tween: [ "style", "${_selBien3}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid2402", tween: [ "style", "${_Text}", "left", '9px', { fromValue: '9px'}], position: 1750, duration: 0 },
                { id: "eid2405", tween: [ "style", "${_Text}", "left", '9px', { fromValue: '9px'}], position: 2250, duration: 0 },
                { id: "eid1261", tween: [ "style", "${_selBien3}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 250 },
                { id: "eid2398", tween: [ "style", "${_Text}", "top", '7px', { fromValue: '3px'}], position: 1500, duration: 250 },
                { id: "eid2407", tween: [ "style", "${_Text}", "top", '3px', { fromValue: '7px'}], position: 2000, duration: 250 }            ]
        }
    }
},
"pregunta3": {
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
                    id: 'btn0B1',
                    type: 'rect',
                    rect: ['0px', '90px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btn0C0',
                    type: 'rect',
                    rect: ['0px', '142px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'text',
                    rect: ['6px', '0px', '297px', '51px', 'auto', 'auto'],
                    id: 'Text2Copy22',
                    text: '3. Where did you stay?',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['52px', '39px', '266px', '24px', 'auto', 'auto'],
                    id: 'Text2Copy21',
                    text: 'Ok, call me at 10.00 pm.',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['52px', '92px', '266px', '27px', 'auto', 'auto'],
                    id: 'Text2Copy20',
                    text: 'I booked a room in a hotel.',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['52px', '150px', '266px', '26px', 'auto', 'auto'],
                    id: 'Text2Copy19',
                    text: 'I went to the beach. It was beautiful.',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal']
                },
                {
                    id: 'btn0A0',
                    type: 'rect',
                    rect: ['0px', '34px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btn0A0',
                symbolName: 'btnA',
                autoPlay: {

               }
            },
            {
                id: 'btn0C0',
                symbolName: 'btnC',
                autoPlay: {

               }
            },
            {
                id: 'btn0B1',
                symbolName: 'btnB',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Text2Copy20}": [
                ["style", "top", '92px'],
                ["style", "text-align", 'left'],
                ["style", "height", '27px'],
                ["style", "font-size", '18px'],
                ["style", "left", '52px'],
                ["style", "width", '266px']
            ],
            "${_btn0C0}": [
                ["style", "top", '142px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'auto']
            ],
            "${_Text2Copy19}": [
                ["style", "top", '150px'],
                ["style", "text-align", 'left'],
                ["style", "height", '26px'],
                ["style", "font-size", '18px'],
                ["style", "left", '52px'],
                ["style", "width", '266px']
            ],
            "${symbolSelector}": [
                ["style", "height", '161px'],
                ["style", "width", '318px']
            ],
            "${_btn0A0}": [
                ["style", "top", '34px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'auto']
            ],
            "${_Text2Copy21}": [
                ["style", "top", '39px'],
                ["style", "text-align", 'left'],
                ["style", "height", '24px'],
                ["style", "font-size", '18px'],
                ["style", "left", '52px'],
                ["style", "width", '266px']
            ],
            "${_btn0B1}": [
                ["style", "top", '90px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'auto']
            ],
            "${_Text2Copy22}": [
                ["style", "line-height", '20px'],
                ["style", "font-size", '18px'],
                ["style", "text-align", 'left'],
                ["style", "top", '0px'],
                ["style", "height", '51px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '6px'],
                ["style", "width", '297px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"btnC": {
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
                    id: 'btnCopy',
                    type: 'image',
                    rect: ['0px', '0px', '40px', '34px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btn.png', '0px', '0px']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 20, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    type: 'text',
                    id: 'TextCopy',
                    text: 'C',
                    align: 'center',
                    rect: ['8px', '4px', '28px', '24px', 'auto', 'auto']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['11px', '5px', '22px', '24px', 'auto', 'auto'],
                    id: 'selBien4',
                    fill: ['rgba(0,0,0,0)', 'images/selBien4.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['14px', '5px', '17px', '24px', 'auto', 'auto'],
                    id: 'selMal',
                    fill: ['rgba(0,0,0,0)', 'images/selMal4.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_selMal}": [
                ["style", "top", '5px'],
                ["style", "opacity", '0'],
                ["style", "left", '14px'],
                ["style", "display", 'block']
            ],
            "${_btnCopy}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '34px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["style", "width", '40px']
            ],
            "${symbolSelector}": [
                ["style", "height", '34px'],
                ["style", "width", '40px']
            ],
            "${_TextCopy}": [
                ["style", "top", '4px'],
                ["style", "width", '28px'],
                ["style", "text-align", 'center'],
                ["style", "height", '24px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '8px'],
                ["style", "font-size", '20px']
            ],
            "${_selBien4}": [
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '11px'],
                ["style", "top", '5px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            labels: {
                "malo": 500,
                "bueno": 1250,
                "select": 1500,
                "unselect": 2000
            },
            timeline: [
                { id: "eid1289", tween: [ "style", "${_selBien4}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid2413", tween: [ "style", "${_TextCopy}", "font-size", '14px', { fromValue: '20px'}], position: 1500, duration: 250 },
                { id: "eid2414", tween: [ "style", "${_TextCopy}", "font-size", '20px', { fromValue: '14px'}], position: 2000, duration: 250 },
                { id: "eid2411", tween: [ "style", "${_TextCopy}", "top", '7px', { fromValue: '4px'}], position: 1500, duration: 250 },
                { id: "eid2412", tween: [ "style", "${_TextCopy}", "top", '4px', { fromValue: '7px'}], position: 2000, duration: 250 },
                { id: "eid1295", tween: [ "transform", "${_btnCopy}", "scaleX", '0.8', { fromValue: '1'}], position: 1500, duration: 250 },
                { id: "eid1315", tween: [ "transform", "${_btnCopy}", "scaleX", '1', { fromValue: '0.8'}], position: 2000, duration: 250 },
                { id: "eid1234", tween: [ "style", "${_selMal}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 250 },
                { id: "eid1296", tween: [ "transform", "${_btnCopy}", "scaleY", '0.8', { fromValue: '1'}], position: 1500, duration: 250 },
                { id: "eid1316", tween: [ "transform", "${_btnCopy}", "scaleY", '1', { fromValue: '0.8'}], position: 2000, duration: 250 },
                { id: "eid1238", tween: [ "style", "${_TextCopy}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1267", tween: [ "style", "${_TextCopy}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 250 },
                { id: "eid1290", tween: [ "style", "${_TextCopy}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 0 },
                { id: "eid1270", tween: [ "style", "${_selBien4}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 250 },
                { id: "eid1264", tween: [ "style", "${_selMal}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 }            ]
        }
    }
},
"btnA": {
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
                    id: 'btn',
                    type: 'image',
                    rect: ['0px', '0px', '40px', '34px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btn.png', '0px', '0px']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 20, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    type: 'text',
                    id: 'Text',
                    text: 'A',
                    align: 'center',
                    rect: ['5px', '4px', '34px', '30px', 'auto', 'auto']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['10px', '5px', '22px', '24px', 'auto', 'auto'],
                    id: 'selBien2',
                    fill: ['rgba(0,0,0,0)', 'images/selBien4.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['14px', '5px', '17px', '24px', 'auto', 'auto'],
                    id: 'selMal',
                    fill: ['rgba(0,0,0,0)', 'images/selMal4.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_selMal}": [
                ["style", "top", '5px'],
                ["style", "opacity", '0'],
                ["style", "left", '14px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '5px'],
                ["style", "font-size", '20px'],
                ["style", "top", '3px'],
                ["style", "text-align", 'center'],
                ["style", "height", '30px'],
                ["transform", "scaleY", '1'],
                ["style", "width", '34px']
            ],
            "${symbolSelector}": [
                ["style", "height", '34px'],
                ["style", "width", '40px']
            ],
            "${_selBien2}": [
                ["style", "top", '5px'],
                ["style", "opacity", '0'],
                ["style", "left", '10px'],
                ["style", "display", 'none']
            ],
            "${_btn}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '34px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["style", "width", '40px']
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
                "malo": 500,
                "bueno": 1250,
                "select": 1750,
                "unselect": 2250
            },
            timeline: [
                { id: "eid1277", tween: [ "transform", "${_btn}", "scaleX", '0.8', { fromValue: '1'}], position: 1750, duration: 250 },
                { id: "eid1303", tween: [ "transform", "${_btn}", "scaleX", '1', { fromValue: '0.8'}], position: 2250, duration: 250 },
                { id: "eid1278", tween: [ "transform", "${_btn}", "scaleY", '0.8', { fromValue: '1'}], position: 1750, duration: 250 },
                { id: "eid1304", tween: [ "transform", "${_btn}", "scaleY", '1', { fromValue: '0.8'}], position: 2250, duration: 250 },
                { id: "eid1247", tween: [ "style", "${_selBien2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1248", tween: [ "style", "${_selBien2}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid1271", tween: [ "style", "${_selBien2}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid2388", tween: [ "style", "${_Text}", "font-size", '14px', { fromValue: '20px'}], position: 1750, duration: 250 },
                { id: "eid2397", tween: [ "style", "${_Text}", "font-size", '20px', { fromValue: '14px'}], position: 2250, duration: 250 },
                { id: "eid1233", tween: [ "style", "${_selMal}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 250 },
                { id: "eid1242", tween: [ "style", "${_selMal}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid1230", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1246", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 250 },
                { id: "eid1272", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 0 },
                { id: "eid1252", tween: [ "style", "${_selBien2}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 250 },
                { id: "eid2393", tween: [ "style", "${_Text}", "top", '6px', { fromValue: '3px'}], position: 1750, duration: 250 },
                { id: "eid2396", tween: [ "style", "${_Text}", "top", '3px', { fromValue: '6px'}], position: 2250, duration: 250 }            ]
        }
    }
},
"pregunta2": {
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
                    id: 'btn1B0',
                    type: 'rect',
                    rect: ['0px', '98px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btn1C1',
                    type: 'rect',
                    rect: ['0px', '149px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy18',
                    text: '2. How was the weather?',
                    align: 'left',
                    rect: ['6px', '0px', '297px', '27px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy17',
                    text: 'It was perfect. I learned many things about global warming.',
                    align: 'left',
                    rect: ['52px', '43px', '266px', '24px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy16',
                    text: 'It is raining and windy.',
                    align: 'left',
                    rect: ['52px', '103px', '266px', '27px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy15',
                    text: 'It rained the first two days, but the rest of the time was sunny.',
                    align: 'left',
                    rect: ['52px', '144px', '297px', '48px', 'auto', 'auto']
                },
                {
                    id: 'btn1A0',
                    type: 'rect',
                    rect: ['0px', '47px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btn1B0',
                symbolName: 'btnB',
                autoPlay: {

               }
            },
            {
                id: 'btn1C1',
                symbolName: 'btnC',
                autoPlay: {

               }
            },
            {
                id: 'btn1A0',
                symbolName: 'btnA',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_btn1C1}": [
                ["style", "top", '149px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'auto']
            ],
            "${_btn1B0}": [
                ["style", "top", '98px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'auto']
            ],
            "${_btn1A0}": [
                ["style", "top", '47px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'auto']
            ],
            "${_Text2Copy18}": [
                ["style", "line-height", '20px'],
                ["style", "font-size", '18px'],
                ["style", "text-align", 'left'],
                ["style", "top", '0px'],
                ["style", "height", '27px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '6px'],
                ["style", "width", '297px']
            ],
            "${_Text2Copy15}": [
                ["style", "top", '144px'],
                ["style", "text-align", 'left'],
                ["style", "height", '48px'],
                ["style", "font-size", '18px'],
                ["style", "left", '52px'],
                ["style", "width", '297px']
            ],
            "${_Text2Copy16}": [
                ["style", "top", '103px'],
                ["style", "text-align", 'left'],
                ["style", "height", '27px'],
                ["style", "font-size", '18px'],
                ["style", "left", '52px'],
                ["style", "width", '266px']
            ],
            "${symbolSelector}": [
                ["style", "height", '192px'],
                ["style", "width", '318px']
            ],
            "${_Text2Copy17}": [
                ["style", "top", '43px'],
                ["style", "text-align", 'left'],
                ["style", "height", '24px'],
                ["style", "font-size", '18px'],
                ["style", "left", '52px'],
                ["style", "width", '266px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"pregunta1": {
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
                    id: 'btn0B1',
                    type: 'rect',
                    rect: ['0px', '96px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btn0C0',
                    type: 'rect',
                    rect: ['0px', '160px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2',
                    text: ' 1. What did you do on vacation?',
                    align: 'left',
                    rect: ['6px', '0px', '297px', '51px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy',
                    text: 'I play soccer every single day.<br>',
                    align: 'left',
                    rect: ['52px', '40px', '266px', '24px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy2',
                    text: 'I visited my parents, I read a book, and I went to the theater.<br>',
                    align: 'left',
                    rect: ['52px', '98px', '278px', '51px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy3',
                    text: 'Well, let’s see what happens.<br>',
                    align: 'left',
                    rect: ['52px', '171px', '278px', '26px', 'auto', 'auto']
                },
                {
                    id: 'btn0A0',
                    type: 'rect',
                    rect: ['0px', '35px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btn0A0',
                symbolName: 'btnA',
                autoPlay: {

               }
            },
            {
                id: 'btn0C0',
                symbolName: 'btnC',
                autoPlay: {

               }
            },
            {
                id: 'btn0B1',
                symbolName: 'btnB',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Text2Copy2}": [
                ["style", "top", '98px'],
                ["style", "text-align", 'left'],
                ["style", "height", '51px'],
                ["style", "font-size", '18px'],
                ["style", "left", '52px'],
                ["style", "width", '278px']
            ],
            "${_btn0C0}": [
                ["style", "top", '160px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'auto']
            ],
            "${_Text2Copy}": [
                ["style", "top", '40px'],
                ["style", "text-align", 'left'],
                ["style", "height", '24px'],
                ["style", "font-size", '18px'],
                ["style", "left", '52px'],
                ["style", "width", '266px']
            ],
            "${_btn0B1}": [
                ["style", "top", '96px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'auto']
            ],
            "${_Text2Copy3}": [
                ["style", "top", '171px'],
                ["style", "text-align", 'left'],
                ["style", "height", '26px'],
                ["style", "font-size", '18px'],
                ["style", "left", '52px'],
                ["style", "width", '278px']
            ],
            "${_btn0A0}": [
                ["style", "top", '35px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'auto']
            ],
            "${_Text2}": [
                ["style", "line-height", '20px'],
                ["style", "font-size", '18px'],
                ["style", "text-align", 'left'],
                ["style", "top", '0px'],
                ["style", "height", '51px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '6px'],
                ["style", "width", '297px']
            ],
            "${symbolSelector}": [
                ["style", "height", '161px'],
                ["style", "width", '318px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"mcJuegoPreguntas1": {
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
                    id: 'pregunta1',
                    type: 'rect',
                    rect: ['19px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'pregunta2',
                    type: 'rect',
                    rect: ['378px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['642px', '332px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'escribirVerificar'
                }
            ],
            symbolInstances: [
            {
                id: 'escribirVerificar',
                symbolName: 'escribirVerificar',
                autoPlay: {

               }
            },
            {
                id: 'pregunta2',
                symbolName: 'pregunta2',
                autoPlay: {

               }
            },
            {
                id: 'pregunta1',
                symbolName: 'pregunta1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_pregunta2}": [
                ["style", "left", '426px'],
                ["style", "top", '65px']
            ],
            "${symbolSelector}": [
                ["style", "height", '390px'],
                ["style", "width", '826px']
            ],
            "${_btn1C1}": [
                ["style", "top", '157px']
            ],
            "${_pregunta1}": [
                ["style", "left", '47px'],
                ["style", "top", '65px']
            ],
            "${_escribirVerificar}": [
                ["style", "top", '278px'],
                ["style", "left", '631px'],
                ["style", "display", 'none']
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
                { id: "eid117", tween: [ "style", "${_escribirVerificar}", "top", '278px', { fromValue: '278px'}], position: 0, duration: 0 },
                { id: "eid290", tween: [ "style", "${_pregunta1}", "top", '65px', { fromValue: '65px'}], position: 0, duration: 0 },
                { id: "eid287", tween: [ "style", "${_pregunta2}", "left", '426px', { fromValue: '426px'}], position: 0, duration: 0 },
                { id: "eid69", tween: [ "style", "${_escribirVerificar}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid116", tween: [ "style", "${_escribirVerificar}", "left", '631px', { fromValue: '631px'}], position: 0, duration: 0 },
                { id: "eid288", tween: [ "style", "${_pregunta1}", "left", '47px', { fromValue: '47px'}], position: 0, duration: 0 },
                { id: "eid286", tween: [ "style", "${_pregunta2}", "top", '65px', { fromValue: '65px'}], position: 0, duration: 0 }            ]
        }
    }
},
"mcJuegoPreguntas2": {
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
                    id: 'pregunta3',
                    type: 'rect',
                    rect: ['74px', '79px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'pregunta4',
                    type: 'rect',
                    rect: ['433px', '74px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['623px', '268px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'escribirVerificar'
                }
            ],
            symbolInstances: [
            {
                id: 'escribirVerificar',
                symbolName: 'escribirVerificar',
                autoPlay: {

               }
            },
            {
                id: 'pregunta4',
                symbolName: 'pregunta4',
                autoPlay: {

               }
            },
            {
                id: 'pregunta3',
                symbolName: 'pregunta3',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_escribirVerificar}": [
                ["style", "top", '268px'],
                ["style", "left", '623px'],
                ["style", "display", 'none']
            ],
            "${_pregunta3}": [
                ["style", "left", '74px'],
                ["style", "top", '79px']
            ],
            "${_pregunta4}": [
                ["style", "left", '433px'],
                ["style", "top", '74px']
            ],
            "${symbolSelector}": [
                ["style", "height", '390px'],
                ["style", "width", '826px']
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
                { id: "eid119", tween: [ "style", "${_escribirVerificar}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"pregunta5": {
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
                    id: 'btn0B0',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['0px', '102px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btn0C1',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['0px', '169px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['6px', '0px', '297px', '51px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    id: 'Text2Copy26',
                    text: '5. Did you travel by car?',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['52px', '47px', '208px', '24px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    id: 'Text2Copy25',
                    text: 'Yes, she was.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['52px', '99px', '172px', '27px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    id: 'Text2Copy24',
                    text: 'Congratulations, your car is great.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['52px', '169px', '208px', '51px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    id: 'Text2Copy23',
                    text: 'No, we didn’t. We traveled by train.',
                    align: 'left',
                    type: 'text'
                },
                {
                    id: 'btn0A0',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['0px', '44px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btn0A0',
                symbolName: 'btnA',
                autoPlay: {

               }
            },
            {
                id: 'btn0B0',
                symbolName: 'btnB',
                autoPlay: {

               }
            },
            {
                id: 'btn0C1',
                symbolName: 'btnC',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Text2Copy26}": [
                ["style", "top", '0px'],
                ["style", "width", '297px'],
                ["style", "text-align", 'left'],
                ["style", "line-height", '20px'],
                ["style", "height", '51px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '6px'],
                ["style", "font-size", '18px']
            ],
            "${_btn0C1}": [
                ["style", "top", '169px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Text2Copy24}": [
                ["style", "top", '99px'],
                ["style", "text-align", 'left'],
                ["style", "height", '27px'],
                ["style", "width", '172px'],
                ["style", "left", '52px'],
                ["style", "font-size", '18px']
            ],
            "${_Text2Copy23}": [
                ["style", "top", '169px'],
                ["style", "text-align", 'left'],
                ["style", "height", '51px'],
                ["style", "width", '208px'],
                ["style", "left", '52px'],
                ["style", "font-size", '18px']
            ],
            "${_Text2Copy25}": [
                ["style", "top", '47px'],
                ["style", "text-align", 'left'],
                ["style", "height", '24px'],
                ["style", "width", '208px'],
                ["style", "left", '52px'],
                ["style", "font-size", '18px']
            ],
            "${_btn0A0}": [
                ["style", "top", '44px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_btn0B0}": [
                ["style", "top", '102px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '224px'],
                ["style", "width", '237px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"pregunta6": {
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
                    id: 'btn1B0',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['0px', '115px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btn1C0',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['0px', '182px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['6px', '0px', '297px', '51px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    id: 'Text2Copy26',
                    text: '6. What did you buy there?',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['52px', '47px', '184px', '51px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    id: 'Text2Copy25',
                    text: 'I bought some earrings and this beautiful hat.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['52px', '129px', '206px', '27px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    id: 'Text2Copy24',
                    text: 'I was born in November.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['52px', '197px', '266px', '26px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    id: 'Text2Copy23',
                    text: 'She was on vacation.',
                    align: 'left',
                    type: 'text'
                },
                {
                    id: 'btn1A1',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['0px', '45px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btn1C0',
                symbolName: 'btnC',
                autoPlay: {

               }
            },
            {
                id: 'btn1B0',
                symbolName: 'btnB',
                autoPlay: {

               }
            },
            {
                id: 'btn1A1',
                symbolName: 'btnA',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Text2Copy26}": [
                ["style", "line-height", '20px'],
                ["style", "font-size", '18px'],
                ["style", "text-align", 'left'],
                ["style", "top", '0px'],
                ["style", "height", '51px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '6px'],
                ["style", "width", '297px']
            ],
            "${_btn1B0}": [
                ["style", "top", '115px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Text2Copy24}": [
                ["style", "top", '129px'],
                ["style", "text-align", 'left'],
                ["style", "height", '27px'],
                ["style", "font-size", '18px'],
                ["style", "left", '52px'],
                ["style", "width", '206px']
            ],
            "${_Text2Copy25}": [
                ["style", "top", '47px'],
                ["style", "text-align", 'left'],
                ["style", "height", '51px'],
                ["style", "font-size", '18px'],
                ["style", "left", '52px'],
                ["style", "width", '184px']
            ],
            "${_btn1A1}": [
                ["style", "top", '45px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_btn1C0}": [
                ["style", "top", '182px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Text2Copy23}": [
                ["style", "top", '197px'],
                ["style", "text-align", 'left'],
                ["style", "height", '26px'],
                ["style", "font-size", '18px'],
                ["style", "left", '52px'],
                ["style", "width", '266px']
            ],
            "${symbolSelector}": [
                ["style", "height", '225px'],
                ["style", "width", '258px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"pregunta7": {
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
                    id: 'btn2B1',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['0px', '112px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btn2C0',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['0px', '181px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy26',
                    text: '7. Did you go to the beach?',
                    align: 'left',
                    rect: ['6px', '0px', '297px', '51px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy25',
                    text: 'We want to go to the movies.',
                    align: 'left',
                    rect: ['52px', '47px', '215px', '24px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy24',
                    text: 'No, I didn’t. I went to the desert.',
                    align: 'left',
                    rect: ['52px', '109px', '215px', '27px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy23',
                    text: 'The flight was long but comfortable.',
                    align: 'left',
                    rect: ['52px', '179px', '215px', '26px', 'auto', 'auto']
                },
                {
                    id: 'btn2A0',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['0px', '51px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btn2B1',
                symbolName: 'btnB',
                autoPlay: {

               }
            },
            {
                id: 'btn2A0',
                symbolName: 'btnA',
                autoPlay: {

               }
            },
            {
                id: 'btn2C0',
                symbolName: 'btnC',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Text2Copy26}": [
                ["style", "top", '0px'],
                ["style", "width", '297px'],
                ["style", "text-align", 'left'],
                ["style", "line-height", '20px'],
                ["style", "height", '51px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '6px'],
                ["style", "font-size", '18px']
            ],
            "${symbolSelector}": [
                ["style", "height", '240px'],
                ["style", "width", '265px']
            ],
            "${_Text2Copy24}": [
                ["style", "top", '109px'],
                ["style", "text-align", 'left'],
                ["style", "height", '27px'],
                ["style", "width", '215px'],
                ["style", "left", '52px'],
                ["style", "font-size", '18px']
            ],
            "${_Text2Copy25}": [
                ["style", "top", '47px'],
                ["style", "text-align", 'left'],
                ["style", "height", '24px'],
                ["style", "width", '215px'],
                ["style", "left", '52px'],
                ["style", "font-size", '18px']
            ],
            "${_btn2C0}": [
                ["style", "top", '181px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_btn2A0}": [
                ["style", "top", '51px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_btn2B1}": [
                ["style", "top", '112px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Text2Copy23}": [
                ["style", "top", '179px'],
                ["style", "text-align", 'left'],
                ["style", "height", '26px'],
                ["style", "width", '215px'],
                ["style", "left", '52px'],
                ["style", "font-size", '18px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"mcJuegoPreguntas3": {
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
                    id: 'pregunta5',
                    type: 'rect',
                    rect: ['27px', '20px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'pregunta6',
                    type: 'rect',
                    rect: ['470px', '15px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'pregunta7',
                    type: 'rect',
                    rect: ['18px', '219px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['631px', '276px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'escribirVerificar'
                }
            ],
            symbolInstances: [
            {
                id: 'escribirVerificar',
                symbolName: 'escribirVerificar',
                autoPlay: {

               }
            },
            {
                id: 'pregunta6',
                symbolName: 'pregunta6',
                autoPlay: {

               }
            },
            {
                id: 'pregunta5',
                symbolName: 'pregunta5',
                autoPlay: {

               }
            },
            {
                id: 'pregunta7',
                symbolName: 'pregunta7',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_escribirVerificar}": [
                ["style", "top", '276px'],
                ["style", "left", '631px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '390px'],
                ["style", "width", '826px']
            ],
            "${_pregunta7}": [
                ["style", "left", '558px'],
                ["style", "top", '49px']
            ],
            "${_pregunta6}": [
                ["style", "left", '271px'],
                ["style", "top", '49px']
            ],
            "${_pregunta5}": [
                ["style", "left", '2px'],
                ["style", "top", '49px']
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
                { id: "eid125", tween: [ "style", "${_pregunta6}", "top", '49px', { fromValue: '49px'}], position: 0, duration: 0 },
                { id: "eid126", tween: [ "style", "${_pregunta7}", "left", '558px', { fromValue: '558px'}], position: 0, duration: 0 },
                { id: "eid115", tween: [ "style", "${_pregunta5}", "left", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
                { id: "eid124", tween: [ "style", "${_pregunta7}", "top", '49px', { fromValue: '49px'}], position: 0, duration: 0 },
                { id: "eid113", tween: [ "style", "${_pregunta6}", "left", '271px', { fromValue: '271px'}], position: 0, duration: 0 },
                { id: "eid127", tween: [ "style", "${_escribirVerificar}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid123", tween: [ "style", "${_pregunta5}", "top", '49px', { fromValue: '49px'}], position: 0, duration: 0 }            ]
        }
    }
},
"mcJuegoPreguntasBoton41": {
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
                    rect: ['26px', '-14px', '814px', '370px', 'auto', 'auto'],
                    id: 'contenedor',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    id: 'audioBotonPlay1',
                    type: 'rect',
                    rect: ['165px', '47px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['600px', '292px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'escribirVerificar'
                },
                {
                    id: 'BtnJuegoPreguntasAudio',
                    type: 'rect',
                    rect: ['1745', '17', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'escribirVerificar',
                symbolName: 'escribirVerificar',
                autoPlay: {

               }
            },
            {
                id: 'BtnJuegoPreguntasAudio',
                symbolName: 'BotonesJuegoAudio',
                autoPlay: {

               }
            },
            {
                id: 'audioBotonPlay1',
                symbolName: 'audioBoton2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_escribirVerificar}": [
                ["style", "display", 'none'],
                ["style", "left", '600px'],
                ["style", "top", '292px']
            ],
            "${_audioBotonPlay1}": [
                ["style", "top", '157px'],
                ["style", "left", '643px']
            ],
            "${symbolSelector}": [
                ["style", "height", '430px'],
                ["style", "width", '834px']
            ],
            "${_contenedor}": [
                ["style", "top", '-14px'],
                ["style", "height", '370px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '26px'],
                ["style", "width", '814px']
            ],
            "${_BtnJuegoPreguntasAudio}": [
                ["style", "left", '94px'],
                ["style", "top", '172px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
                { id: "eid1195", tween: [ "style", "${_BtnJuegoPreguntasAudio}", "top", '172px', { fromValue: '172px'}], position: 0, duration: 0 },
                { id: "eid1193", tween: [ "style", "${_audioBotonPlay1}", "top", '157px', { fromValue: '157px'}], position: 0, duration: 0 },
                { id: "eid1194", tween: [ "style", "${_BtnJuegoPreguntasAudio}", "left", '94px', { fromValue: '94px'}], position: 0, duration: 0 },
                { id: "eid2433", tween: [ "style", "${_escribirVerificar}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1192", tween: [ "style", "${_audioBotonPlay1}", "left", '643px', { fromValue: '643px'}], position: 0, duration: 0 }            ]
        }
    }
},
"BtnCPreguntas": {
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
                    rect: ['13px', '12px', '75px', '56px', 'auto', 'auto'],
                    id: 'BtnC',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/BtnC.png', '0px', '0px']
                },
                {
                    rect: ['14px', '15px', '75px', '56px', 'auto', 'auto'],
                    id: 'BtnCOver2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/BtnCOver.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_BtnC}": [
                ["style", "top", '12px'],
                ["style", "display", 'block'],
                ["style", "height", '56px'],
                ["style", "left", '13px'],
                ["style", "width", '75px']
            ],
            "${_BtnCOver2}": [
                ["style", "top", '15px'],
                ["style", "display", 'none'],
                ["style", "height", '56px'],
                ["style", "left", '14px'],
                ["style", "width", '75px']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '102px']
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
                "click": 1000
            },
            timeline: [
                { id: "eid1055", tween: [ "style", "${_BtnCOver2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1057", tween: [ "style", "${_BtnCOver2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1056", tween: [ "style", "${_BtnC}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1058", tween: [ "style", "${_BtnC}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 }            ]
        }
    }
},
"BtnAPreguntas": {
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
                    rect: ['6px', '4px', '75px', '56px', 'auto', 'auto'],
                    id: 'BtnA3',
                    fill: ['rgba(0,0,0,0)', 'images/BtnA.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['11px', '7px', '75px', '56px', 'auto', 'auto'],
                    id: 'BtnAOver2',
                    fill: ['rgba(0,0,0,0)', 'images/BtnAOver.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_BtnAOver2}": [
                ["style", "top", '7px'],
                ["style", "display", 'none'],
                ["style", "height", '56px'],
                ["style", "left", '11px'],
                ["style", "width", '75px']
            ],
            "${_BtnA3}": [
                ["style", "top", '4px'],
                ["style", "display", 'block'],
                ["style", "height", '56px'],
                ["style", "left", '6px'],
                ["style", "width", '75px']
            ],
            "${symbolSelector}": [
                ["style", "height", '79px'],
                ["style", "width", '106px']
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
                "click": 1000
            },
            timeline: [
                { id: "eid1059", tween: [ "style", "${_BtnAOver2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1061", tween: [ "style", "${_BtnAOver2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1060", tween: [ "style", "${_BtnA3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1062", tween: [ "style", "${_BtnA3}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 }            ]
        }
    }
},
"BtnBPreguntas": {
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
                    rect: ['13px', '14px', '100px', '75px', 'auto', 'auto'],
                    id: 'BtnB',
                    fill: ['rgba(0,0,0,0)', 'images/BtnB.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['13px', '17px', '75px', '56px', 'auto', 'auto'],
                    id: 'BtnBOver2',
                    fill: ['rgba(0,0,0,0)', 'images/BtnBOver.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_BtnB}": [
                ["style", "top", '14px'],
                ["style", "display", 'block'],
                ["style", "height", '56px'],
                ["style", "left", '13px'],
                ["style", "width", '75px']
            ],
            "${_BtnBOver2}": [
                ["style", "top", '17px'],
                ["style", "display", 'none'],
                ["style", "height", '56px'],
                ["style", "left", '13px'],
                ["style", "width", '75px']
            ],
            "${symbolSelector}": [
                ["style", "height", '83px'],
                ["style", "width", '101px']
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
                "click": 1000
            },
            timeline: [
                { id: "eid1065", tween: [ "style", "${_BtnBOver2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1063", tween: [ "style", "${_BtnBOver2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1066", tween: [ "style", "${_BtnB}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1064", tween: [ "style", "${_BtnB}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 }            ]
        }
    }
},
"BtnDPreguntas": {
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
                    rect: ['17px', '12px', '75px', '56px', 'auto', 'auto'],
                    id: 'BtnD',
                    fill: ['rgba(0,0,0,0)', 'images/BtnD.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['16px', '13px', '75px', '56px', 'auto', 'auto'],
                    id: 'BtnDOver2',
                    fill: ['rgba(0,0,0,0)', 'images/BtnDOver.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_BtnD}": [
                ["style", "top", '12px'],
                ["style", "display", 'block'],
                ["style", "height", '56px'],
                ["style", "left", '17px'],
                ["style", "width", '75px']
            ],
            "${_BtnDOver2}": [
                ["style", "top", '13px'],
                ["style", "display", 'none'],
                ["style", "height", '56px'],
                ["style", "left", '16px'],
                ["style", "width", '75px']
            ],
            "${symbolSelector}": [
                ["style", "height", '79px'],
                ["style", "width", '111px']
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
                "click": 1000
            },
            timeline: [
                { id: "eid1051", tween: [ "style", "${_BtnDOver2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1053", tween: [ "style", "${_BtnDOver2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1052", tween: [ "style", "${_BtnD}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1054", tween: [ "style", "${_BtnD}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 }            ]
        }
    }
},
"audioBoton2": {
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
                    id: 'BtnPlay2',
                    type: 'image',
                    rect: ['0px', '0px', '193px', '154px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/BtnPlay.png', '0px', '0px']
                },
                {
                    rect: ['87px', '43px', '47px', '61px', 'auto', 'auto'],
                    id: 'FiguraPlay',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/FiguraPlay.png', '0px', '0px']
                },
                {
                    rect: ['87px', '49px', '39px', '55px', 'auto', 'auto'],
                    id: 'FiguraStop',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/FiguraStop.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_BtnPlay2}": [
                ["style", "top", '0px'],
                ["style", "height", '105px'],
                ["style", "left", '-11px'],
                ["style", "width", '132px']
            ],
            "${_FiguraPlay}": [
                ["style", "top", '32px'],
                ["style", "display", 'block'],
                ["style", "height", '42px'],
                ["style", "left", '48px'],
                ["style", "width", '32px']
            ],
            "${symbolSelector}": [
                ["style", "height", '99px'],
                ["style", "width", '110px']
            ],
            "${_FiguraStop}": [
                ["style", "top", '22px'],
                ["style", "left", '41px'],
                ["style", "display", 'none']
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
                "play": 0,
                "pause": 1000
            },
            timeline: [
                { id: "eid1122", tween: [ "style", "${_FiguraPlay}", "height", '42px', { fromValue: '42px'}], position: 0, duration: 0 },
                { id: "eid1130", tween: [ "style", "${_FiguraStop}", "top", '22px', { fromValue: '22px'}], position: 1000, duration: 0 },
                { id: "eid1128", tween: [ "style", "${_FiguraPlay}", "left", '48px', { fromValue: '48px'}], position: 0, duration: 0 },
                { id: "eid1121", tween: [ "style", "${_BtnPlay2}", "width", '132px', { fromValue: '132px'}], position: 0, duration: 0 },
                { id: "eid1119", tween: [ "style", "${_BtnPlay2}", "height", '105px', { fromValue: '105px'}], position: 0, duration: 0 },
                { id: "eid1129", tween: [ "style", "${_FiguraStop}", "left", '41px', { fromValue: '41px'}], position: 1000, duration: 0 },
                { id: "eid190", tween: [ "style", "${_FiguraPlay}", "top", '32px', { fromValue: '32px'}], position: 0, duration: 0 },
                { id: "eid1124", tween: [ "style", "${_FiguraPlay}", "width", '32px', { fromValue: '32px'}], position: 0, duration: 0 },
                { id: "eid1068", tween: [ "style", "${_FiguraStop}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1069", tween: [ "style", "${_FiguraStop}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1067", tween: [ "style", "${_FiguraPlay}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1070", tween: [ "style", "${_FiguraPlay}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid1120", tween: [ "style", "${_BtnPlay2}", "left", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 }            ]
        }
    }
},
"btnD": {
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
                    transform: [[0, 0], [], [], ['0.8', '0.8']],
                    id: 'btnCopy2',
                    type: 'image',
                    rect: ['0px', '0px', '40px', '34px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btn6.png', '0px', '0px']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 20, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    type: 'text',
                    id: 'TextCopy2',
                    text: 'D',
                    align: 'center',
                    rect: ['13px', '3px', '18px', '29px', 'auto', 'auto']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['11px', '5px', '22px', '24px', 'auto', 'auto'],
                    id: 'selBien4',
                    fill: ['rgba(0,0,0,0)', 'images/selBien4.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['14px', '5px', '17px', '24px', 'auto', 'auto'],
                    id: 'selMal',
                    fill: ['rgba(0,0,0,0)', 'images/selMal4.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_selMal}": [
                ["style", "top", '5px'],
                ["style", "opacity", '0'],
                ["style", "left", '14px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '34px'],
                ["style", "width", '40px']
            ],
            "${_TextCopy2}": [
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '13px'],
                ["style", "font-size", '20px'],
                ["style", "top", '3px'],
                ["style", "text-align", 'center'],
                ["style", "height", '29px'],
                ["transform", "scaleY", '1'],
                ["style", "width", '18px']
            ],
            "${_btnCopy2}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '34px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["style", "width", '40px']
            ],
            "${_selBien4}": [
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '11px'],
                ["style", "top", '5px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            labels: {
                "malo": 500,
                "bueno": 1250,
                "select": 1500,
                "unselect": 2000
            },
            timeline: [
                { id: "eid239", tween: [ "style", "${_selBien4}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid2365", tween: [ "transform", "${_btnCopy2}", "scaleX", '0.8', { fromValue: '1'}], position: 1500, duration: 250 },
                { id: "eid2362", tween: [ "transform", "${_btnCopy2}", "scaleX", '1', { fromValue: '0.8'}], position: 2000, duration: 250 },
                { id: "eid246", tween: [ "transform", "${_TextCopy2}", "scaleX", '0.8', { fromValue: '1'}], position: 1500, duration: 250 },
                { id: "eid247", tween: [ "transform", "${_TextCopy2}", "scaleX", '1', { fromValue: '0.8'}], position: 2000, duration: 250 },
                { id: "eid242", tween: [ "style", "${_TextCopy2}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid241", tween: [ "style", "${_TextCopy2}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 250 },
                { id: "eid243", tween: [ "style", "${_TextCopy2}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 0 },
                { id: "eid238", tween: [ "style", "${_selMal}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 250 },
                { id: "eid244", tween: [ "transform", "${_TextCopy2}", "scaleY", '0.8', { fromValue: '1'}], position: 1500, duration: 250 },
                { id: "eid245", tween: [ "transform", "${_TextCopy2}", "scaleY", '1', { fromValue: '0.8'}], position: 2000, duration: 250 },
                { id: "eid240", tween: [ "style", "${_selBien4}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 250 },
                { id: "eid2368", tween: [ "transform", "${_btnCopy2}", "scaleY", '0.8', { fromValue: '1'}], position: 1500, duration: 250 },
                { id: "eid2364", tween: [ "transform", "${_btnCopy2}", "scaleY", '1', { fromValue: '0.8'}], position: 2000, duration: 250 },
                { id: "eid237", tween: [ "style", "${_selMal}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 }            ]
        }
    }
},
"BotonesJuegoAudio": {
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
                    id: 'btnD',
                    type: 'rect',
                    rect: ['0px', '125px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btnC',
                    type: 'rect',
                    rect: ['0px', '84px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btnB',
                    type: 'rect',
                    rect: ['0px', '46px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btnA',
                    type: 'rect',
                    rect: ['0px', '8px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btnA',
                symbolName: 'btnA',
                autoPlay: {

               }
            },
            {
                id: 'btnD',
                symbolName: 'btnD',
                autoPlay: {

               }
            },
            {
                id: 'btnC',
                symbolName: 'btnC',
                autoPlay: {

               }
            },
            {
                id: 'btnB',
                symbolName: 'btnB',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_btnC}": [
                ["style", "top", '84px'],
                ["style", "left", '0px']
            ],
            "${_btnD}": [
                ["style", "top", '125px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '158px'],
                ["style", "width", '40px']
            ],
            "${_btnA}": [
                ["style", "top", '8px'],
                ["style", "left", '0px']
            ],
            "${_btnB}": [
                ["style", "left", '0px'],
                ["style", "top", '46px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Recuadro": {
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
                    type: 'rect',
                    id: 'Rectangle4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '46px', '816px', '489px', 'auto', 'auto'],
                    fill: ['rgba(239,0,28,0)']
                },
                {
                    rect: ['6px', '127px', '804px', '309px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    id: 'Text4',
                    text: 'Waiter: _______________ sir?<br>Adam: I am not so sure, _______________?<br>W: The Marinara Chicken is quite delicious sir.<br>A: No thanks, I _______________ a big hot dog with fries.<br>W: What _______________ to drink?<br>A: A big coke with ice please.<br>After the meal….<br>W: would you like _______________?<br>A: No thanks. _______________ please.<br>W. Of course.<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ElementosArrastrarLargo1}": [
                ["style", "left", '170px'],
                ["style", "top", '98px']
            ],
            "${_Text4}": [
                ["style", "top", '127px'],
                ["style", "width", '804px'],
                ["style", "height", '309px'],
                ["style", "line-height", '31px'],
                ["style", "left", '6px'],
                ["style", "font-size", '18px']
            ],
            "${_Rectangle4}": [
                ["style", "left", '0px'],
                ["style", "top", '46px']
            ],
            "${symbolSelector}": [
                ["style", "height", '440px'],
                ["style", "width", '816px']
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
"mcRecuadro": {
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
                    id: 'recuadroArrastrar',
                    type: 'image',
                    rect: ['0px', '0px', '131px', '45px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/recuadroArrastrar.png', '0px', '0px']
                },
                {
                    rect: ['9px', '6px', '117px', '35px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRect2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(63,229,141,0.6824)']
                },
                {
                    rect: ['16px', '13px', '104px', '21px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'contenedor',
                    text: ' ',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '45px'],
                ["style", "width", '131px']
            ],
            "${_contenedor}": [
                ["style", "left", '16px'],
                ["style", "top", '13px']
            ],
            "${_RoundRect2}": [
                ["color", "background-color", 'rgba(61,229,72,0.00)'],
                ["style", "left", '9px'],
                ["style", "width", '117px']
            ],
            "${_recuadroArrastrar}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
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
                "normal": 0,
                "bien": 1000,
                "mal": 2000
            },
            timeline: [
                { id: "eid1105", tween: [ "color", "${_RoundRect2}", "background-color", 'rgba(61,229,72,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(61,229,72,0.00)'}], position: 0, duration: 0 },
                { id: "eid1104", tween: [ "color", "${_RoundRect2}", "background-color", 'rgba(61,229,72,0.68)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(61,229,72,0.00)'}], position: 1000, duration: 0 },
                { id: "eid1103", tween: [ "color", "${_RoundRect2}", "background-color", 'rgba(255,0,0,0.35)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(61,229,72,0.68)'}], position: 2000, duration: 0 }            ]
        }
    }
},
"mcRecuadroColision1": {
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
                    rect: ['0px', '0px', '277px', '192px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    type: 'rect',
                    id: 'RoundRect',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'block',
                    fill: ['rgba(163,158,239,0.00)']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    type: 'text',
                    align: 'center',
                    id: 'Text2Copy',
                    text: '3',
                    display: 'none',
                    rect: ['16px', '168px', '36px', '24px', 'auto', 'auto']
                },
                {
                    transform: [[0, 0], [], [], ['1', '1.16611']],
                    id: 'colisionesPronunciacionCopy13',
                    type: 'image',
                    rect: ['-7px', '-55px', '165px', '227px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/colisionesPronunciacion.png', '0px', '0px']
                },
                {
                    rect: ['17px', '-9px', '127px', '3px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRectCopy11',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(119,195,233,1.00)']
                },
                {
                    id: 'BtnPlay0',
                    type: 'rect',
                    rect: ['118px', '-43px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['58px', '-35px', '36px', '32px', 'auto', 'auto'],
                    id: 'contenedor',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'BtnPlay0',
                symbolName: 'BtnPlay',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(163,158,239,0.00)'],
                ["style", "top", '0px'],
                ["style", "height", '192px'],
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "width", '176px']
            ],
            "${_RoundRectCopy11}": [
                ["style", "top", '-9px'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(119,195,233,1)'],
                ["style", "left", '17px'],
                ["style", "width", '127px']
            ],
            "${_BtnPlay0}": [
                ["style", "left", '118px'],
                ["style", "top", '-43px']
            ],
            "${symbolSelector}": [
                ["style", "height", '192px'],
                ["style", "width", '149px']
            ],
            "${_contenedor}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '-35px'],
                ["style", "left", '58px'],
                ["style", "width", '36px']
            ],
            "${_Text2Copy}": [
                ["style", "top", '168px'],
                ["style", "display", 'none']
            ],
            "${_colisionesPronunciacionCopy13}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '1.16611'],
                ["style", "height", '227px'],
                ["style", "top", '-55px'],
                ["style", "left", '-7px'],
                ["style", "width", '165px']
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
                { id: "eid1213", tween: [ "style", "${_RoundRect}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1214", tween: [ "style", "${_Text2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1220", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(163,158,239,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(163,158,239,0.00)'}], position: 0, duration: 0 },
                { id: "eid1218", tween: [ "style", "${_RoundRect}", "width", '176px', { fromValue: '176px'}], position: 0, duration: 0 }            ]
        }
    }
},
"mcRecuadroColision2": {
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
                    rect: ['0px', '0px', '181px', '192px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRect',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(223,232,84,0.00)']
                },
                {
                    rect: ['17px', '167px', '36px', '24px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    display: 'none',
                    id: 'Text2',
                    text: '2',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['-7px', '-55px', '165px', '227px', 'auto', 'auto'],
                    id: 'colisionesPronunciacionCopy14',
                    transform: [[0, 0], [], [], ['1', '1.16611']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/colisionesPronunciacion.png', '0px', '0px']
                },
                {
                    rect: ['17px', '-9px', '127px', '3px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRectCopy12',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(119,195,233,1.00)']
                },
                {
                    id: 'BtnPlay1',
                    type: 'rect',
                    rect: ['118px', '-43px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    id: 'contenedor',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['58px', '-35px', '36px', '32px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'BtnPlay1',
                symbolName: 'BtnPlay',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_RoundRectCopy12}": [
                ["style", "top", '-9px'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(119,195,233,1)'],
                ["style", "left", '17px'],
                ["style", "width", '127px']
            ],
            "${_colisionesPronunciacionCopy14}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '1.16611'],
                ["style", "height", '227px'],
                ["style", "top", '-55px'],
                ["style", "left", '-7px'],
                ["style", "width", '165px']
            ],
            "${symbolSelector}": [
                ["style", "height", '192px'],
                ["style", "width", '149px']
            ],
            "${_Text2}": [
                ["style", "top", '167px'],
                ["style", "left", '17px'],
                ["style", "display", 'none']
            ],
            "${_contenedor}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '-35px'],
                ["style", "left", '58px'],
                ["style", "width", '36px']
            ],
            "${_BtnPlay1}": [
                ["style", "left", '118px'],
                ["style", "top", '-43px']
            ],
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(223,232,84,0.00)'],
                ["style", "height", '192px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '181px']
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
                { id: "eid1215", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"mcRecuadroColision3": {
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
                    rect: ['0px', '0px', '256px', '192px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRect',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(63,229,141,0.00)']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    type: 'text',
                    align: 'center',
                    id: 'Text2',
                    text: '1',
                    display: 'none',
                    rect: ['19px', '156px', '36px', '24px', 'auto', 'auto']
                },
                {
                    transform: [[0, 0], [], [], ['1', '1.16611']],
                    id: 'colisionesPronunciacionCopy19',
                    type: 'image',
                    rect: ['-7px', '-55px', '165px', '227px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/colisionesPronunciacion.png', '0px', '0px']
                },
                {
                    rect: ['17px', '-9px', '127px', '3px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRectCopy15',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(119,195,233,1.00)']
                },
                {
                    id: 'BtnPlay2',
                    type: 'rect',
                    rect: ['118px', '-43px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['58px', '-35px', '36px', '32px', 'auto', 'auto'],
                    id: 'contenedor',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'BtnPlay2',
                symbolName: 'BtnPlay',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_colisionesPronunciacionCopy19}": [
                ["style", "top", '-55px'],
                ["transform", "scaleY", '1.16611'],
                ["style", "height", '227px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-7px'],
                ["style", "width", '165px']
            ],
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(63,229,141,0.00)'],
                ["style", "height", '192px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '256px']
            ],
            "${symbolSelector}": [
                ["style", "height", '192px'],
                ["style", "width", '150px']
            ],
            "${_BtnPlay2}": [
                ["style", "left", '118px'],
                ["style", "top", '-43px']
            ],
            "${_contenedor}": [
                ["style", "top", '-35px'],
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "left", '58px'],
                ["style", "width", '36px']
            ],
            "${_Text2}": [
                ["style", "top", '156px'],
                ["style", "left", '19px'],
                ["style", "display", 'none']
            ],
            "${_RoundRectCopy15}": [
                ["style", "top", '-9px'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(119,195,233,1)'],
                ["style", "left", '17px'],
                ["style", "width", '127px']
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
                { id: "eid1216", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"mcJuegoPreguntasAudios1": {
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
                    rect: ['26px', '-14px', '814px', '370px', 'auto', 'auto'],
                    id: 'contenedor',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    id: 'audioBotonPlay3',
                    type: 'rect',
                    rect: ['532', '68', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'audioBotonPlay2',
                    type: 'rect',
                    rect: ['532', '68', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'pregunta2Audios',
                    type: 'rect',
                    rect: ['456', '171', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'pregunta1Audios',
                    type: 'rect',
                    rect: ['171', '199', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'BotonesJuegoAudio1a',
                    type: 'rect',
                    rect: ['-67', '177', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'BotonesJuegoAudio2a',
                    type: 'rect',
                    rect: ['286', '184', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'BotonesJuegoAudio3a',
                    type: 'rect',
                    rect: ['580', '198', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'audioBotonPlay1',
                    type: 'rect',
                    rect: ['165px', '47px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'pregunta3Audios',
                    type: 'rect',
                    rect: ['-240', '148', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['-16', '438', 'auto', 'auto', 'auto', 'auto'],
                    id: 'escribirVerificar'
                }
            ],
            symbolInstances: [
            {
                id: 'escribirVerificar',
                symbolName: 'escribirVerificar',
                autoPlay: {

               }
            },
            {
                id: 'pregunta1Audios',
                symbolName: 'pregunta1Audios',
                autoPlay: {

               }
            },
            {
                id: 'audioBotonPlay1',
                symbolName: 'audioBoton2',
                autoPlay: {

               }
            },
            {
                id: 'pregunta3Audios',
                symbolName: 'pregunta3Audios',
                autoPlay: {

               }
            },
            {
                id: 'audioBotonPlay2',
                symbolName: 'audioBotona',
                autoPlay: {

               }
            },
            {
                id: 'pregunta2Audios',
                symbolName: 'pregunta2Audios',
                autoPlay: {

               }
            },
            {
                id: 'BotonesJuegoAudio2a',
                symbolName: 'BotonesJuegoAudio_2',
                autoPlay: {

               }
            },
            {
                id: 'BotonesJuegoAudio3a',
                symbolName: 'BotonesJuegoAudio_3',
                autoPlay: {

               }
            },
            {
                id: 'audioBotonPlay3',
                symbolName: 'audioBotona',
                autoPlay: {

               }
            },
            {
                id: 'BotonesJuegoAudio1a',
                symbolName: 'BotonesJuegoAudio_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_escribirVerificar}": [
                ["style", "top", '318px'],
                ["style", "left", '639px'],
                ["style", "display", 'none']
            ],
            "${_pregunta3Audios}": [
                ["style", "left", '585px'],
                ["style", "top", '101px']
            ],
            "${_pregunta1Audios}": [
                ["style", "left", '27px'],
                ["style", "top", '89px']
            ],
            "${_BotonesJuegoAudio1a}": [
                ["style", "top", '94px'],
                ["style", "left", '7px']
            ],
            "${_BotonesJuegoAudio2a}": [
                ["style", "top", '101px'],
                ["style", "left", '269px']
            ],
            "${_BotonesJuegoAudio3a}": [
                ["style", "left", '551px'],
                ["style", "top", '90px']
            ],
            "${_audioBotonPlay1}": [
                ["transform", "scaleX", '0.63636'],
                ["style", "left", '65px'],
                ["transform", "scaleY", '0.63636'],
                ["style", "top", '-4px']
            ],
            "${_pregunta2Audios}": [
                ["style", "left", '269px'],
                ["style", "top", '105px']
            ],
            "${_audioBotonPlay2}": [
                ["transform", "scaleX", '0.63636'],
                ["style", "top", '-4px'],
                ["style", "left", '341px'],
                ["transform", "scaleY", '0.63636']
            ],
            "${symbolSelector}": [
                ["style", "height", '356px'],
                ["style", "width", '834px']
            ],
            "${_contenedor}": [
                ["style", "top", '-14px'],
                ["style", "height", '370px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '26px'],
                ["style", "width", '814px']
            ],
            "${_audioBotonPlay3}": [
                ["transform", "scaleX", '0.63636'],
                ["style", "left", '647px'],
                ["transform", "scaleY", '0.63636'],
                ["style", "top", '-12px']
            ],
            "${_Text2Copy21}": [
                ["style", "top", '55px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
                { id: "eid781", tween: [ "style", "${_escribirVerificar}", "top", '318px', { fromValue: '318px'}], position: 0, duration: 0 },
                { id: "eid763", tween: [ "style", "${_pregunta2Audios}", "top", '105px', { fromValue: '105px'}], position: 0, duration: 0 },
                { id: "eid670", tween: [ "style", "${_BotonesJuegoAudio1a}", "left", '7px', { fromValue: '7px'}], position: 0, duration: 0 },
                { id: "eid762", tween: [ "style", "${_audioBotonPlay3}", "top", '-12px', { fromValue: '-12px'}], position: 0, duration: 0 },
                { id: "eid723", tween: [ "style", "${_escribirVerificar}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid674", tween: [ "style", "${_pregunta1Audios}", "left", '27px', { fromValue: '27px'}], position: 0, duration: 0 },
                { id: "eid695", tween: [ "style", "${_pregunta2Audios}", "left", '269px', { fromValue: '269px'}], position: 0, duration: 0 },
                { id: "eid664", tween: [ "style", "${_audioBotonPlay3}", "left", '647px', { fromValue: '647px'}], position: 0, duration: 0 },
                { id: "eid768", tween: [ "style", "${_audioBotonPlay1}", "top", '-4px', { fromValue: '-4px'}], position: 0, duration: 0 },
                { id: "eid766", tween: [ "style", "${_BotonesJuegoAudio1a}", "top", '94px', { fromValue: '94px'}], position: 0, duration: 0 },
                { id: "eid393", tween: [ "transform", "${_audioBotonPlay1}", "scaleX", '0.63636', { fromValue: '0.63636'}], position: 0, duration: 0 },
                { id: "eid769", tween: [ "style", "${_audioBotonPlay2}", "top", '-4px', { fromValue: '-4px'}], position: 0, duration: 0 },
                { id: "eid773", tween: [ "style", "${_BotonesJuegoAudio2a}", "top", '101px', { fromValue: '101px'}], position: 0, duration: 0 },
                { id: "eid706", tween: [ "style", "${_BotonesJuegoAudio2a}", "left", '269px', { fromValue: '269px'}], position: 0, duration: 0 },
                { id: "eid707", tween: [ "style", "${_BotonesJuegoAudio3a}", "left", '551px', { fromValue: '551px'}], position: 0, duration: 0 },
                { id: "eid666", tween: [ "style", "${_audioBotonPlay2}", "left", '341px', { fromValue: '341px'}], position: 0, duration: 0 },
                { id: "eid658", tween: [ "style", "${_pregunta3Audios}", "left", '585px', { fromValue: '585px'}], position: 0, duration: 0 },
                { id: "eid471", tween: [ "transform", "${_audioBotonPlay3}", "scaleY", '0.63636', { fromValue: '0.63636'}], position: 0, duration: 0 },
                { id: "eid394", tween: [ "transform", "${_audioBotonPlay1}", "scaleY", '0.63636', { fromValue: '0.63636'}], position: 0, duration: 0 },
                { id: "eid772", tween: [ "style", "${_pregunta1Audios}", "top", '89px', { fromValue: '89px'}], position: 0, duration: 0 },
                { id: "eid774", tween: [ "style", "${_BotonesJuegoAudio3a}", "top", '90px', { fromValue: '90px'}], position: 0, duration: 0 },
                { id: "eid470", tween: [ "transform", "${_audioBotonPlay3}", "scaleX", '0.63636', { fromValue: '0.63636'}], position: 0, duration: 0 },
                { id: "eid656", tween: [ "style", "${_escribirVerificar}", "left", '639px', { fromValue: '639px'}], position: 0, duration: 0 },
                { id: "eid767", tween: [ "style", "${_pregunta3Audios}", "top", '101px', { fromValue: '101px'}], position: 0, duration: 0 },
                { id: "eid668", tween: [ "style", "${_audioBotonPlay1}", "left", '65px', { fromValue: '65px'}], position: 0, duration: 0 }            ]
        }
    }
},
"pregunta1Audios": {
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
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy',
                    text: 'Jane has a math test.Jane has a math test.',
                    align: 'left',
                    rect: ['33px', '17px', '178px', '64px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy2',
                    text: 'The cat is hungry.',
                    align: 'left',
                    rect: ['33px', '101px', '178px', '40px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy3',
                    text: 'Jane and Michael are on a summer vacation.',
                    align: 'left',
                    rect: ['33px', '137px', '191px', '53px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2',
                    text: 'The cat is thirsty.',
                    align: 'left',
                    rect: ['33px', '198px', '178px', '24px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text2Copy2}": [
                ["style", "top", '101px'],
                ["style", "text-align", 'left'],
                ["style", "height", '40px'],
                ["style", "width", '178px'],
                ["style", "left", '33px'],
                ["style", "font-size", '18px']
            ],
            "${_Text2Copy}": [
                ["style", "top", '17px'],
                ["style", "text-align", 'left'],
                ["style", "height", '64px'],
                ["style", "width", '178px'],
                ["style", "left", '33px'],
                ["style", "font-size", '18px']
            ],
            "${symbolSelector}": [
                ["style", "height", '202px'],
                ["style", "width", '224px']
            ],
            "${_Text2}": [
                ["style", "top", '198px'],
                ["style", "text-align", 'left'],
                ["style", "height", '24px'],
                ["style", "font-size", '18px'],
                ["style", "left", '33px'],
                ["style", "width", '178px']
            ],
            "${_Text2Copy3}": [
                ["style", "top", '137px'],
                ["style", "text-align", 'left'],
                ["style", "height", '53px'],
                ["style", "width", '191px'],
                ["style", "left", '33px'],
                ["style", "font-size", '18px']
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
"pregunta2Audios": {
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
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy18',
                    text: 'Charlotte didn’t pay the rent.',
                    align: 'left',
                    rect: ['52px', '3px', '189px', '41px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy17',
                    text: 'Amanda is happy.',
                    align: 'left',
                    rect: ['52px', '61px', '152px', '24px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy16',
                    text: 'Amanda didn’t pay the rent on time.',
                    align: 'left',
                    rect: ['52px', '109px', '189px', '48px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy15',
                    text: 'Charlotte paid the rent.',
                    align: 'left',
                    rect: ['52px', '177px', '199px', '26px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text2Copy18}": [
                ["style", "top", '3px'],
                ["style", "width", '189px'],
                ["style", "text-align", 'left'],
                ["style", "line-height", '20px'],
                ["style", "height", '41px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '52px'],
                ["style", "font-size", '18px']
            ],
            "${_Text2Copy15}": [
                ["style", "top", '177px'],
                ["style", "text-align", 'left'],
                ["style", "height", '26px'],
                ["style", "width", '199px'],
                ["style", "left", '52px'],
                ["style", "font-size", '18px']
            ],
            "${_Text2Copy17}": [
                ["style", "top", '61px'],
                ["style", "text-align", 'left'],
                ["style", "height", '24px'],
                ["style", "width", '152px'],
                ["style", "left", '52px'],
                ["style", "font-size", '18px']
            ],
            "${_Text2Copy16}": [
                ["style", "top", '109px'],
                ["style", "text-align", 'left'],
                ["style", "height", '48px'],
                ["style", "width", '189px'],
                ["style", "left", '52px'],
                ["style", "font-size", '18px']
            ],
            "${symbolSelector}": [
                ["style", "height", '192px'],
                ["style", "width", '257px']
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
"pregunta4Audios": {
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
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy26',
                    text: 'A late dinner.<br>',
                    align: 'left',
                    rect: ['6px', '0px', '170px', '27px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy25',
                    text: 'A rock concert.<br>',
                    align: 'left',
                    rect: ['6px', '43px', '281px', '24px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy24',
                    text: 'A late concert.<br>',
                    align: 'left',
                    rect: ['6px', '89px', '281px', '27px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy23',
                    text: 'A children’s party.<br>',
                    align: 'left',
                    rect: ['6px', '131px', '266px', '26px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text2Copy26}": [
                ["style", "top", '0px'],
                ["style", "width", '170px'],
                ["style", "text-align", 'left'],
                ["style", "line-height", '20px'],
                ["style", "height", '27px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '6px'],
                ["style", "font-size", '18px']
            ],
            "${_Text2Copy24}": [
                ["style", "top", '89px'],
                ["style", "text-align", 'left'],
                ["style", "height", '27px'],
                ["style", "width", '281px'],
                ["style", "left", '6px'],
                ["style", "font-size", '18px']
            ],
            "${_Text2Copy25}": [
                ["style", "top", '43px'],
                ["style", "text-align", 'left'],
                ["style", "height", '24px'],
                ["style", "width", '281px'],
                ["style", "left", '6px'],
                ["style", "font-size", '18px']
            ],
            "${symbolSelector}": [
                ["style", "height", '161px'],
                ["style", "width", '318px']
            ],
            "${_Text2Copy23}": [
                ["style", "top", '131px'],
                ["style", "text-align", 'left'],
                ["style", "height", '26px'],
                ["style", "width", '266px'],
                ["style", "left", '6px'],
                ["style", "font-size", '18px']
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
"pregunta5Audios": {
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
                    rect: ['6px', '0px', '297px', '27px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    id: 'Text2Copy26',
                    text: 'Maria needs a favor.<br>',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['6px', '41px', '281px', '24px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    id: 'Text2Copy25',
                    text: '\tJoana is busy.<br>',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['6px', '83px', '281px', '27px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    id: 'Text2Copy24',
                    text: 'Maria didn’t need any favor.<br>',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['6px', '125px', '266px', '26px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    id: 'Text2Copy23',
                    text: 'Maria called me last night.<br>',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text2Copy26}": [
                ["style", "line-height", '20px'],
                ["style", "font-size", '18px'],
                ["style", "text-align", 'left'],
                ["style", "top", '0px'],
                ["style", "height", '27px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '6px'],
                ["style", "width", '297px']
            ],
            "${_Text2Copy24}": [
                ["style", "top", '83px'],
                ["style", "text-align", 'left'],
                ["style", "height", '27px'],
                ["style", "font-size", '18px'],
                ["style", "left", '6px'],
                ["style", "width", '281px']
            ],
            "${_Text2Copy25}": [
                ["style", "top", '41px'],
                ["style", "text-align", 'left'],
                ["style", "height", '24px'],
                ["style", "font-size", '18px'],
                ["style", "left", '6px'],
                ["style", "width", '281px']
            ],
            "${_Text2Copy23}": [
                ["style", "top", '125px'],
                ["style", "text-align", 'left'],
                ["style", "height", '26px'],
                ["style", "font-size", '18px'],
                ["style", "left", '6px'],
                ["style", "width", '266px']
            ],
            "${symbolSelector}": [
                ["style", "height", '161px'],
                ["style", "width", '318px']
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
"pregunta3Audios": {
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
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy22',
                    text: 'A new car.<br>',
                    align: 'left',
                    rect: ['16px', '6px', '223px', '27px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy21',
                    text: 'An anniversary celebration.<br>',
                    align: 'left',
                    rect: ['16px', '61px', '223px', '24px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy20',
                    text: 'A wedding celebration.<br>',
                    align: 'left',
                    rect: ['15px', '116px', '223px', '27px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy19',
                    text: 'A new home.<br>',
                    align: 'left',
                    rect: ['16px', '171px', '223px', '26px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text2Copy19}": [
                ["style", "top", '171px'],
                ["style", "text-align", 'left'],
                ["style", "height", '26px'],
                ["style", "width", '223px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${symbolSelector}": [
                ["style", "height", '161px'],
                ["style", "width", '239px']
            ],
            "${_Text2Copy21}": [
                ["style", "top", '61px'],
                ["style", "text-align", 'left'],
                ["style", "height", '24px'],
                ["style", "width", '223px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_Text2Copy20}": [
                ["style", "top", '116px'],
                ["style", "text-align", 'left'],
                ["style", "height", '27px'],
                ["style", "width", '223px'],
                ["style", "left", '15px'],
                ["style", "font-size", '18px']
            ],
            "${_Text2Copy22}": [
                ["style", "top", '6px'],
                ["style", "width", '223px'],
                ["style", "text-align", 'left'],
                ["style", "line-height", '20px'],
                ["style", "height", '27px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
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
"BotonesJuegoAudio_1": {
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
                    id: 'btn0D0',
                    type: 'rect',
                    rect: ['0px', '125px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btn0C0',
                    type: 'rect',
                    rect: ['0px', '84px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btn0B1',
                    type: 'rect',
                    rect: ['0px', '46px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btn0A0',
                    type: 'rect',
                    rect: ['0px', '28px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btn0A0',
                symbolName: 'btnA',
                autoPlay: {

               }
            },
            {
                id: 'btn0D0',
                symbolName: 'btnD',
                autoPlay: {

               }
            },
            {
                id: 'btn0B1',
                symbolName: 'btnB',
                autoPlay: {

               }
            },
            {
                id: 'btn0C0',
                symbolName: 'btnC',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_btn0C0}": [
                ["style", "top", '137px'],
                ["style", "left", '0px']
            ],
            "${_btn0D0}": [
                ["style", "top", '186px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '182px'],
                ["style", "width", '40px']
            ],
            "${_btn0A0}": [
                ["style", "top", '28px'],
                ["style", "left", '0px']
            ],
            "${_btn0B1}": [
                ["style", "left", '0px'],
                ["style", "top", '90px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
                { id: "eid702", tween: [ "style", "${_btn0C0}", "top", '137px', { fromValue: '137px'}], position: 0, duration: 0 },
                { id: "eid384", tween: [ "style", "${_btn0B1}", "top", '90px', { fromValue: '90px'}], position: 0, duration: 0 },
                { id: "eid390", tween: [ "style", "${_btn0D0}", "top", '186px', { fromValue: '186px'}], position: 0, duration: 0 }            ]
        }
    }
},
"audioBotona": {
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
                    id: 'BtnPlay2',
                    type: 'image',
                    rect: ['0px', '0px', '193px', '154px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/BtnPlay.png', '0px', '0px']
                },
                {
                    rect: ['87px', '43px', '47px', '61px', 'auto', 'auto'],
                    id: 'FiguraPlay',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/FiguraPlay.png', '0px', '0px']
                },
                {
                    rect: ['87px', '49px', '39px', '55px', 'auto', 'auto'],
                    id: 'FiguraStop',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/FiguraStop.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_BtnPlay2}": [
                ["style", "height", '105px'],
                ["style", "top", '0px'],
                ["style", "left", '-11px'],
                ["style", "width", '132px']
            ],
            "${_FiguraPlay}": [
                ["style", "top", '32px'],
                ["style", "height", '42px'],
                ["style", "display", 'block'],
                ["style", "left", '48px'],
                ["style", "width", '32px']
            ],
            "${symbolSelector}": [
                ["style", "height", '99px'],
                ["style", "width", '110px']
            ],
            "${_FiguraStop}": [
                ["style", "top", '22px'],
                ["style", "left", '41px'],
                ["style", "display", 'none']
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
                "play": 0,
                "pause": 1000
            },
            timeline: [
                { id: "eid1122", tween: [ "style", "${_FiguraPlay}", "height", '42px', { fromValue: '42px'}], position: 0, duration: 0 },
                { id: "eid1130", tween: [ "style", "${_FiguraStop}", "top", '22px', { fromValue: '22px'}], position: 1000, duration: 0 },
                { id: "eid1128", tween: [ "style", "${_FiguraPlay}", "left", '48px', { fromValue: '48px'}], position: 0, duration: 0 },
                { id: "eid190", tween: [ "style", "${_FiguraPlay}", "top", '32px', { fromValue: '32px'}], position: 0, duration: 0 },
                { id: "eid1119", tween: [ "style", "${_BtnPlay2}", "height", '105px', { fromValue: '105px'}], position: 0, duration: 0 },
                { id: "eid1129", tween: [ "style", "${_FiguraStop}", "left", '41px', { fromValue: '41px'}], position: 1000, duration: 0 },
                { id: "eid1120", tween: [ "style", "${_BtnPlay2}", "left", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
                { id: "eid1067", tween: [ "style", "${_FiguraPlay}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1070", tween: [ "style", "${_FiguraPlay}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid1068", tween: [ "style", "${_FiguraStop}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1069", tween: [ "style", "${_FiguraStop}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1124", tween: [ "style", "${_FiguraPlay}", "width", '32px', { fromValue: '32px'}], position: 0, duration: 0 },
                { id: "eid1121", tween: [ "style", "${_BtnPlay2}", "width", '132px', { fromValue: '132px'}], position: 0, duration: 0 }            ]
        }
    }
},
"mcJuegoPreguntasAudios2": {
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
                    rect: ['26px', '-14px', '814px', '370px', 'auto', 'auto'],
                    id: 'contenedor',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    id: 'audioBotonPlay1',
                    type: 'rect',
                    rect: ['165px', '47px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'audioBotonPlay2',
                    type: 'rect',
                    rect: ['532', '68', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'pregunta4Audios',
                    type: 'rect',
                    rect: ['600', '180', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'pregunta5Audios',
                    type: 'rect',
                    rect: ['360', '400', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'BotonesJuegoAudio2a',
                    type: 'rect',
                    rect: ['74', '196', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'BotonesJuegoAudio2b',
                    type: 'rect',
                    rect: ['930', '118', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['639px', '314px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'escribirVerificar'
                }
            ],
            symbolInstances: [
            {
                id: 'escribirVerificar',
                symbolName: 'escribirVerificar',
                autoPlay: {

               }
            },
            {
                id: 'pregunta4Audios',
                symbolName: 'pregunta4Audios',
                autoPlay: {

               }
            },
            {
                id: 'audioBotonPlay1',
                symbolName: 'audioBoton2',
                autoPlay: {

               }
            },
            {
                id: 'audioBotonPlay2',
                symbolName: 'audioBotona',
                autoPlay: {

               }
            },
            {
                id: 'BotonesJuegoAudio2a',
                symbolName: 'BotonesJuegoAudio_4',
                autoPlay: {

               }
            },
            {
                id: 'pregunta5Audios',
                symbolName: 'pregunta5Audios',
                autoPlay: {

               }
            },
            {
                id: 'BotonesJuegoAudio2b',
                symbolName: 'BotonesJuegoAudio_5',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_escribirVerificar}": [
                ["style", "top", '314px'],
                ["style", "left", '639px'],
                ["style", "display", 'none']
            ],
            "${_pregunta5Audios}": [
                ["style", "left", '487px'],
                ["style", "top", '143px']
            ],
            "${_pregunta4Audios}": [
                ["style", "left", '104px'],
                ["style", "top", '143px']
            ],
            "${_BotonesJuegoAudio2a}": [
                ["style", "left", '62px'],
                ["style", "top", '129px']
            ],
            "${_BotonesJuegoAudio2b}": [
                ["style", "left", '440px'],
                ["style", "top", '132px']
            ],
            "${_audioBotonPlay1}": [
                ["style", "top", '10px'],
                ["style", "left", '116px']
            ],
            "${_audioBotonPlay2}": [
                ["style", "top", '10px'],
                ["style", "left", '538px']
            ],
            "${_contenedor}": [
                ["style", "top", '-14px'],
                ["style", "height", '370px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '26px'],
                ["style", "width", '814px']
            ],
            "${symbolSelector}": [
                ["style", "height", '367px'],
                ["style", "width", '834px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: false,
            timeline: [
                { id: "eid717", tween: [ "style", "${_BotonesJuegoAudio2b}", "left", '440px', { fromValue: '440px'}], position: 0, duration: 0 },
                { id: "eid786", tween: [ "style", "${_audioBotonPlay2}", "top", '10px', { fromValue: '10px'}], position: 0, duration: 0 },
                { id: "eid535", tween: [ "style", "${_pregunta5Audios}", "left", '487px', { fromValue: '487px'}], position: 0, duration: 0 },
                { id: "eid526", tween: [ "style", "${_audioBotonPlay1}", "left", '116px', { fromValue: '116px'}], position: 0, duration: 0 },
                { id: "eid529", tween: [ "style", "${_audioBotonPlay2}", "left", '538px', { fromValue: '538px'}], position: 0, duration: 0 },
                { id: "eid797", tween: [ "style", "${_escribirVerificar}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid532", tween: [ "style", "${_pregunta4Audios}", "left", '104px', { fromValue: '104px'}], position: 0, duration: 0 },
                { id: "eid787", tween: [ "style", "${_pregunta4Audios}", "top", '143px', { fromValue: '143px'}], position: 0, duration: 0 },
                { id: "eid784", tween: [ "style", "${_audioBotonPlay1}", "top", '10px', { fromValue: '10px'}], position: 0, duration: 0 },
                { id: "eid792", tween: [ "style", "${_BotonesJuegoAudio2a}", "top", '129px', { fromValue: '129px'}], position: 0, duration: 0 },
                { id: "eid791", tween: [ "style", "${_pregunta5Audios}", "top", '143px', { fromValue: '143px'}], position: 0, duration: 0 },
                { id: "eid721", tween: [ "style", "${_BotonesJuegoAudio2a}", "left", '62px', { fromValue: '62px'}], position: 0, duration: 0 },
                { id: "eid785", tween: [ "style", "${_BotonesJuegoAudio2b}", "top", '132px', { fromValue: '132px'}], position: 0, duration: 0 }            ]
        }
    }
},
"BotonesJuegoAudio_2": {
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
                    id: 'btn1D0',
                    type: 'rect',
                    rect: ['0px', '125px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btn1C1',
                    type: 'rect',
                    rect: ['0px', '84px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btn1B0',
                    type: 'rect',
                    rect: ['0px', '46px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btn1A0',
                    type: 'rect',
                    rect: ['0px', '10px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btn1D0',
                symbolName: 'btnD',
                autoPlay: {

               }
            },
            {
                id: 'btn1B0',
                symbolName: 'btnB',
                autoPlay: {

               }
            },
            {
                id: 'btn1C1',
                symbolName: 'btnC',
                autoPlay: {

               }
            },
            {
                id: 'btn1A0',
                symbolName: 'btnA',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_btn1B0}": [
                ["style", "left", '0px'],
                ["style", "top", '64px']
            ],
            "${_btn1A0}": [
                ["style", "top", '10px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '182px'],
                ["style", "width", '40px']
            ],
            "${_btn1C1}": [
                ["style", "top", '121px'],
                ["style", "left", '0px']
            ],
            "${_btn1D0}": [
                ["style", "top", '172px'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
                { id: "eid384", tween: [ "style", "${_btn1B0}", "top", '64px', { fromValue: '64px'}], position: 0, duration: 0 },
                { id: "eid702", tween: [ "style", "${_btn1C1}", "top", '121px', { fromValue: '121px'}], position: 0, duration: 0 },
                { id: "eid390", tween: [ "style", "${_btn1D0}", "top", '172px', { fromValue: '172px'}], position: 0, duration: 0 }            ]
        }
    }
},
"BotonesJuegoAudio_3": {
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
                    id: 'btn2D0',
                    type: 'rect',
                    rect: ['0px', '125px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btn2C0',
                    type: 'rect',
                    rect: ['0px', '84px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btn2B1',
                    type: 'rect',
                    rect: ['0px', '46px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btn2A0',
                    type: 'rect',
                    rect: ['0px', '12px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btn2A0',
                symbolName: 'btnA',
                autoPlay: {

               }
            },
            {
                id: 'btn2B1',
                symbolName: 'btnB',
                autoPlay: {

               }
            },
            {
                id: 'btn2C0',
                symbolName: 'btnC',
                autoPlay: {

               }
            },
            {
                id: 'btn2D0',
                symbolName: 'btnD',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_btn2B1}": [
                ["style", "left", '0px'],
                ["style", "top", '68px']
            ],
            "${symbolSelector}": [
                ["style", "height", '182px'],
                ["style", "width", '40px']
            ],
            "${_btn2C0}": [
                ["style", "top", '122px'],
                ["style", "left", '0px']
            ],
            "${_btn2A0}": [
                ["style", "top", '12px'],
                ["style", "left", '0px']
            ],
            "${_btn2D0}": [
                ["style", "top", '177px'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
                { id: "eid702", tween: [ "style", "${_btn2C0}", "top", '122px', { fromValue: '122px'}], position: 0, duration: 0 },
                { id: "eid384", tween: [ "style", "${_btn2B1}", "top", '68px', { fromValue: '68px'}], position: 0, duration: 0 },
                { id: "eid390", tween: [ "style", "${_btn2D0}", "top", '177px', { fromValue: '177px'}], position: 0, duration: 0 }            ]
        }
    }
},
"BotonesJuegoAudio_4": {
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
                    id: 'btn0D0',
                    type: 'rect',
                    rect: ['0px', '125px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btn0C1',
                    type: 'rect',
                    rect: ['0px', '84px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btn0B0',
                    type: 'rect',
                    rect: ['0px', '46px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btn0A0',
                    type: 'rect',
                    rect: ['0px', '8px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btn0A0',
                symbolName: 'btnA',
                autoPlay: {

               }
            },
            {
                id: 'btn0D0',
                symbolName: 'btnD',
                autoPlay: {

               }
            },
            {
                id: 'btn0B0',
                symbolName: 'btnB',
                autoPlay: {

               }
            },
            {
                id: 'btn0C1',
                symbolName: 'btnC',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_btn0C1}": [
                ["style", "top", '91px'],
                ["style", "left", '0px']
            ],
            "${_btn0D0}": [
                ["style", "top", '136px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '182px'],
                ["style", "width", '40px']
            ],
            "${_btn0A0}": [
                ["style", "top", '8px'],
                ["style", "left", '0px']
            ],
            "${_btn0B0}": [
                ["style", "left", '0px'],
                ["style", "top", '50px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
                { id: "eid390", tween: [ "style", "${_btn0D0}", "top", '136px', { fromValue: '136px'}], position: 0, duration: 0 },
                { id: "eid384", tween: [ "style", "${_btn0B0}", "top", '50px', { fromValue: '50px'}], position: 0, duration: 0 },
                { id: "eid702", tween: [ "style", "${_btn0C1}", "top", '91px', { fromValue: '91px'}], position: 0, duration: 0 }            ]
        }
    }
},
"BotonesJuegoAudio_5": {
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
                    id: 'btn1D0',
                    type: 'rect',
                    rect: ['0px', '125px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btn1C0',
                    type: 'rect',
                    rect: ['0px', '84px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btn1B0',
                    type: 'rect',
                    rect: ['0px', '46px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btn1A1',
                    type: 'rect',
                    rect: ['0px', '8px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btn1C0',
                symbolName: 'btnC',
                autoPlay: {

               }
            },
            {
                id: 'btn1D0',
                symbolName: 'btnD',
                autoPlay: {

               }
            },
            {
                id: 'btn1B0',
                symbolName: 'btnB',
                autoPlay: {

               }
            },
            {
                id: 'btn1A1',
                symbolName: 'btnA',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_btn1B0}": [
                ["style", "left", '0px'],
                ["style", "top", '48px']
            ],
            "${_btn1C0}": [
                ["style", "top", '91px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '182px'],
                ["style", "width", '40px']
            ],
            "${_btn1A1}": [
                ["style", "top", '8px'],
                ["style", "left", '0px']
            ],
            "${_btn1D0}": [
                ["style", "top", '136px'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
                { id: "eid796", tween: [ "style", "${_btn1B0}", "top", '48px', { fromValue: '48px'}], position: 0, duration: 0 },
                { id: "eid702", tween: [ "style", "${_btn1C0}", "top", '91px', { fromValue: '91px'}], position: 0, duration: 0 },
                { id: "eid390", tween: [ "style", "${_btn1D0}", "top", '136px', { fromValue: '136px'}], position: 0, duration: 0 }            ]
        }
    }
},
"mcRecuadroLargo": {
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
                    rect: ['9px', '6px', '117px', '35px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRect2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(63,229,141,0.6824)']
                },
                {
                    rect: ['16px', '13px', '193px', '21px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'contenedor',
                    text: ' ',
                    align: 'center',
                    type: 'text'
                },
                {
                    id: 'recuadroArrastrarLargo',
                    type: 'image',
                    rect: ['-5px', '-2px', '236px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/recuadroArrastrarLargo.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_recuadroArrastrarLargo}": [
                ["style", "left", '-5px'],
                ["style", "top", '-2px']
            ],
            "${_contenedor}": [
                ["style", "top", '13px'],
                ["style", "left", '16px'],
                ["style", "width", '193px']
            ],
            "${_RoundRect2}": [
                ["color", "background-color", 'rgba(61,229,72,0.00)'],
                ["style", "left", '9px'],
                ["style", "width", '117px']
            ],
            "${symbolSelector}": [
                ["style", "height", '45px'],
                ["style", "width", '239px']
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
                "normal": 0,
                "bien": 1000,
                "mal": 2000
            },
            timeline: [
                { id: "eid1105", tween: [ "color", "${_RoundRect2}", "background-color", 'rgba(61,229,72,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(61,229,72,0.00)'}], position: 0, duration: 0 },
                { id: "eid1104", tween: [ "color", "${_RoundRect2}", "background-color", 'rgba(61,229,72,0.68)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(61,229,72,0.00)'}], position: 1000, duration: 0 },
                { id: "eid1103", tween: [ "color", "${_RoundRect2}", "background-color", 'rgba(255,0,0,0.35)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(61,229,72,0.68)'}], position: 2000, duration: 0 }            ]
        }
    }
},
"mcRecuadroLargocolision": {
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
                    id: 'recuadroArrastrarLargo',
                    type: 'image',
                    rect: ['-5px', '-2px', '281px', '58px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/recuadroArrastrarLargo.png', '0px', '0px']
                },
                {
                    rect: ['9px', '6px', '117px', '45px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRect2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(63,229,141,0.6824)']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    type: 'text',
                    id: 'contenedor',
                    text: ' ',
                    align: 'center',
                    rect: ['11px', '7px', '254px', '44px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_recuadroArrastrarLargo}": [
                ["style", "height", '58px'],
                ["style", "top", '-2px'],
                ["style", "left", '-5px'],
                ["style", "width", '281px']
            ],
            "${_contenedor}": [
                ["style", "height", '44px'],
                ["style", "top", '7px'],
                ["style", "left", '11px'],
                ["style", "width", '254px']
            ],
            "${symbolSelector}": [
                ["style", "height", '60px'],
                ["style", "width", '276px']
            ],
            "${_RoundRect2}": [
                ["style", "height", '45px'],
                ["color", "background-color", 'rgba(61,229,72,0.00)'],
                ["style", "left", '7px'],
                ["style", "width", '258px']
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
                "normal": 0,
                "bien": 1000,
                "mal": 2000
            },
            timeline: [
                { id: "eid808", tween: [ "style", "${_RoundRect2}", "left", '7px', { fromValue: '7px'}], position: 0, duration: 0 },
                { id: "eid1105", tween: [ "color", "${_RoundRect2}", "background-color", 'rgba(61,229,72,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(61,229,72,0.00)'}], position: 0, duration: 0 },
                { id: "eid1104", tween: [ "color", "${_RoundRect2}", "background-color", 'rgba(61,229,72,0.68)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(61,229,72,0.00)'}], position: 1000, duration: 0 },
                { id: "eid1103", tween: [ "color", "${_RoundRect2}", "background-color", 'rgba(255,0,0,0.35)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(61,229,72,0.68)'}], position: 2000, duration: 0 },
                { id: "eid810", tween: [ "style", "${_RoundRect2}", "width", '258px', { fromValue: '258px'}], position: 0, duration: 0 }            ]
        }
    }
},
"mcRecuadroLargocolision2": {
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
                    id: 'recuadroArrastrarLargo',
                    type: 'image',
                    rect: ['-5px', '-2px', '236px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/recuadroArrastrarLargo.png', '0px', '0px']
                },
                {
                    rect: ['9px', '6px', '117px', '35px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRect2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(63,229,141,0.6824)']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    type: 'text',
                    id: 'contenedor',
                    text: ' ',
                    align: 'center',
                    rect: ['16px', '13px', '193px', '21px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_recuadroArrastrarLargo}": [
                ["style", "left", '-5px'],
                ["style", "top", '-2px']
            ],
            "${_contenedor}": [
                ["style", "top", '13px'],
                ["style", "left", '16px'],
                ["style", "width", '193px']
            ],
            "${_RoundRect2}": [
                ["color", "background-color", 'rgba(61,229,72,0.00)'],
                ["style", "left", '7px'],
                ["style", "width", '214px']
            ],
            "${symbolSelector}": [
                ["style", "height", '45px'],
                ["style", "width", '239px']
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
                "normal": 0,
                "bien": 1000,
                "mal": 2000
            },
            timeline: [
                { id: "eid810", tween: [ "style", "${_RoundRect2}", "width", '214px', { fromValue: '214px'}], position: 0, duration: 0 },
                { id: "eid1105", tween: [ "color", "${_RoundRect2}", "background-color", 'rgba(61,229,72,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(61,229,72,0.00)'}], position: 0, duration: 0 },
                { id: "eid1104", tween: [ "color", "${_RoundRect2}", "background-color", 'rgba(61,229,72,0.68)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(61,229,72,0.00)'}], position: 1000, duration: 0 },
                { id: "eid1103", tween: [ "color", "${_RoundRect2}", "background-color", 'rgba(255,0,0,0.35)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(61,229,72,0.68)'}], position: 2000, duration: 0 },
                { id: "eid808", tween: [ "style", "${_RoundRect2}", "left", '7px', { fromValue: '7px'}], position: 0, duration: 0 }            ]
        }
    }
},
"BtnPlay": {
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
                    id: 'btn',
                    type: 'image',
                    rect: ['0px', '0px', '26px', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btn7.png', '0px', '0px']
                },
                {
                    rect: ['10px', '3px', '11px', '20px', 'auto', 'auto'],
                    id: 'iconPlay',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/iconPlay.png', '0px', '0px']
                },
                {
                    rect: ['9px', '3px', '12px', '20px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['-1']],
                    id: 'iconPause',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/iconPause.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_iconPlay}": [
                ["style", "top", '3px'],
                ["style", "display", 'block'],
                ["style", "height", '20px'],
                ["style", "left", '10px'],
                ["style", "width", '11px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '26px']
            ],
            "${_btn}": [
                ["style", "top", '0px'],
                ["style", "height", '26px'],
                ["style", "left", '0px'],
                ["style", "width", '26px']
            ],
            "${_iconPause}": [
                ["style", "top", '3px'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '-1'],
                ["style", "height", '20px'],
                ["style", "left", '9px'],
                ["style", "width", '12px']
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
                "play": 0,
                "pause": 1000
            },
            timeline: [
                { id: "eid1378", tween: [ "style", "${_iconPause}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1377", tween: [ "style", "${_iconPause}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1375", tween: [ "style", "${_iconPlay}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1376", tween: [ "style", "${_iconPlay}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 }            ]
        }
    }
},
"btnSubmenu5": {
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
                    rect: ['-19px', '-20px', '130px', '105px', 'auto', 'auto'],
                    id: 'activo3',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/activo.png', '0px', '0px']
                },
                {
                    id: 'btnSubm5',
                    type: 'image',
                    rect: ['0px', '0px', '92px', '65px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btnSubm.png', '0px', '0px']
                },
                {
                    id: 'icono5',
                    type: 'image',
                    rect: ['19px', '0px', '64px', '52px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icono22.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_btnSubm5}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '65px'],
                ["style", "width", '92px']
            ],
            "${_icono5}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '19px'],
                ["transform", "scaleX", '1']
            ],
            "${_activo3}": [
                ["style", "top", '-20px'],
                ["style", "left", '-19px'],
                ["style", "display", 'none']
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
                "activo": 1000
            },
            timeline: [
                { id: "eid1671", tween: [ "transform", "${_icono5}", "scaleY", '0.7', { fromValue: '1'}], position: 0, duration: 1000 },
                { id: "eid1663", tween: [ "style", "${_activo3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1664", tween: [ "style", "${_activo3}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1672", tween: [ "transform", "${_icono5}", "scaleX", '0.7', { fromValue: '1'}], position: 0, duration: 1000 }            ]
        }
    }
},
"btnSubmenu3": {
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
                    rect: ['-18px', '-20px', '130px', '105px', 'auto', 'auto'],
                    id: 'activo',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/activo.png', '0px', '0px']
                },
                {
                    id: 'btnSubm3',
                    type: 'image',
                    rect: ['0px', '0px', '92px', '65px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btnSubm.png', '0px', '0px']
                },
                {
                    id: 'icono3',
                    type: 'image',
                    rect: ['18px', '0', '64px', '54px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icono22.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '65px'],
                ["style", "width", '92px']
            ],
            "${_btnSubm3}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_icono3}": [
                ["transform", "scaleX", '1'],
                ["style", "left", '18px'],
                ["transform", "scaleY", '1']
            ],
            "${_activo}": [
                ["style", "top", '-20px'],
                ["style", "left", '-18px'],
                ["style", "display", 'none']
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
                "desactivado": 1000
            },
            timeline: [
                { id: "eid1651", tween: [ "transform", "${_icono3}", "scaleX", '0.7', { fromValue: '1'}], position: 0, duration: 1000 },
                { id: "eid1643", tween: [ "style", "${_activo}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1644", tween: [ "style", "${_activo}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1652", tween: [ "transform", "${_icono3}", "scaleY", '0.7', { fromValue: '1'}], position: 0, duration: 1000 }            ]
        }
    }
},
"btnSubmenu4": {
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
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'activo2',
                    rect: ['-19px', '-20px', '130px', '105px', 'auto', 'auto'],
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/activo.png', '0px', '0px']
                },
                {
                    id: 'btnSubm4',
                    type: 'image',
                    rect: ['0px', '0px', '92px', '65px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btnSubm.png', '0px', '0px']
                },
                {
                    id: 'icono4',
                    type: 'image',
                    rect: ['13px', '1px', '71px', '53px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icono12.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_icono4}": [
                ["style", "top", '1px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '13px'],
                ["transform", "scaleX", '1']
            ],
            "${_activo2}": [
                ["style", "top", '-20px'],
                ["style", "display", 'none'],
                ["style", "left", '-19px'],
                ["subproperty", "filter.sepia", '0']
            ],
            "${_btnSubm4}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '65px'],
                ["style", "width", '92px']
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
                "normal": 0,
                "activo": 1000,
                "pasar": 2000
            },
            timeline: [
                { id: "eid1662", tween: [ "transform", "${_icono4}", "scaleY", '0.7', { fromValue: '1'}], position: 0, duration: 1000 },
                { id: "eid1653", tween: [ "style", "${_activo2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1654", tween: [ "style", "${_activo2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid2373", tween: [ "style", "${_activo2}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid2381", tween: [ "subproperty", "${_activo2}", "filter.sepia", '0', { fromValue: '0'}], position: 1000, duration: 0 },
                { id: "eid2382", tween: [ "subproperty", "${_activo2}", "filter.sepia", '1', { fromValue: '0'}], position: 2000, duration: 0 },
                { id: "eid1661", tween: [ "transform", "${_icono4}", "scaleX", '0.7', { fromValue: '1'}], position: 0, duration: 1000 }            ]
        }
    }
},
"btnSubmenu9": {
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
                    rect: ['-19px', '-17px', '130px', '105px', 'auto', 'auto'],
                    id: 'activo3',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/activo.png', '0px', '0px']
                },
                {
                    id: 'btnSubm9',
                    type: 'image',
                    rect: ['0px', '0px', '92px', '65px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btnSubm.png', '0px', '0px']
                },
                {
                    id: 'icono9',
                    type: 'image',
                    rect: ['15px', '2px', '61px', '48px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icono42.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_icono9}": [
                ["transform", "scaleX", '1'],
                ["style", "top", '2px'],
                ["style", "left", '15px'],
                ["transform", "scaleY", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '65px'],
                ["style", "width", '92px']
            ],
            "${_btnSubm9}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_activo3}": [
                ["style", "top", '-17px'],
                ["style", "left", '-19px'],
                ["style", "display", 'none']
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
                "activo": 1000
            },
            timeline: [
                { id: "eid1696", tween: [ "style", "${_activo3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1697", tween: [ "style", "${_activo3}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1695", tween: [ "transform", "${_icono9}", "scaleY", '0.7', { fromValue: '1'}], position: 0, duration: 1000 },
                { id: "eid1694", tween: [ "transform", "${_icono9}", "scaleX", '0.7', { fromValue: '1'}], position: 0, duration: 1000 }            ]
        }
    }
},
"over2": {
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
                    id: 'txtOver2',
                    type: 'image',
                    rect: ['-3px', '25px', '126px', '60px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/txtOver.png', '0px', '0px']
                },
                {
                    type: 'text',
                    id: 'Text',
                    text: 'Exercise B',
                    rect: ['17px', '37px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '700', 'none', '']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '82px'],
                ["style", "width", '126px']
            ],
            "${_Text}": [
                ["style", "top", '37px'],
                ["style", "opacity", '0'],
                ["style", "font-weight", '700'],
                ["style", "left", '17px'],
                ["style", "font-size", '18px']
            ],
            "${_txtOver2}": [
                ["style", "top", '25px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '60px'],
                ["style", "opacity", '0'],
                ["style", "left", '-3px'],
                ["style", "width", '126px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: false,
            labels: {
                "over": 1000,
                "out": 3000
            },
            timeline: [
                { id: "eid1426", tween: [ "transform", "${_txtOver2}", "scaleY", '1', { fromValue: '0'}], position: 1101, duration: 250, easing: "easeOutQuad" },
                { id: "eid1427", tween: [ "transform", "${_txtOver2}", "scaleY", '0', { fromValue: '1'}], position: 3250, duration: 250, easing: "easeOutQuad" },
                { id: "eid1325", tween: [ "style", "${_txtOver2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1428", tween: [ "style", "${_txtOver2}", "opacity", '1', { fromValue: '0'}], position: 1101, duration: 250 },
                { id: "eid1429", tween: [ "style", "${_txtOver2}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 250 },
                { id: "eid1324", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1425", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 1232, duration: 155 },
                { id: "eid1424", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 3286, duration: 149 }            ]
        }
    }
},
"btnSubmenu2": {
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
                    rect: ['-18px', '-20px', '130px', '105px', 'auto', 'auto'],
                    id: 'activo2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/activo.png', '0px', '0px']
                },
                {
                    id: 'btnSubm2',
                    type: 'image',
                    rect: ['0px', '0px', '92px', '65px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btnSubm.png', '0px', '0px']
                },
                {
                    id: 'icono2',
                    type: 'image',
                    rect: ['16px', '0px', '64px', '52px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icono12.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '65px'],
                ["style", "width", '92px']
            ],
            "${_activo2}": [
                ["style", "top", '-20px'],
                ["style", "left", '-18px'],
                ["style", "display", 'none']
            ],
            "${_btnSubm2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_icono2}": [
                ["style", "top", '0px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '16px']
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
                "activo": 1000
            },
            timeline: [
                { id: "eid1641", tween: [ "transform", "${_icono2}", "scaleX", '0.7', { fromValue: '1'}], position: 0, duration: 1000 },
                { id: "eid1633", tween: [ "style", "${_activo2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1634", tween: [ "style", "${_activo2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1642", tween: [ "transform", "${_icono2}", "scaleY", '0.7', { fromValue: '1'}], position: 0, duration: 1000 }            ]
        }
    }
},
"over3": {
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
                    id: 'txtOver3',
                    type: 'image',
                    rect: ['-5px', '25px', '126px', '60px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/txtOver.png', '0px', '0px']
                },
                {
                    type: 'text',
                    rect: ['14px', '39px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text2',
                    text: 'Exercise C',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', 'bold', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_txtOver3}": [
                ["style", "top", '25px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '60px'],
                ["style", "opacity", '0'],
                ["style", "left", '-5px'],
                ["style", "width", '126px']
            ],
            "${_Text2}": [
                ["style", "top", '39px'],
                ["style", "opacity", '0'],
                ["style", "left", '14px'],
                ["style", "font-size", '18px']
            ],
            "${symbolSelector}": [
                ["style", "height", '82px'],
                ["style", "width", '126px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: false,
            labels: {
                "over": 1000,
                "out": 3000
            },
            timeline: [
                { id: "eid1329", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1441", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 1263, duration: 155 },
                { id: "eid1440", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 3286, duration: 149 },
                { id: "eid1330", tween: [ "style", "${_txtOver3}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1444", tween: [ "style", "${_txtOver3}", "opacity", '1', { fromValue: '0'}], position: 1132, duration: 250 },
                { id: "eid1445", tween: [ "style", "${_txtOver3}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 250 },
                { id: "eid1442", tween: [ "transform", "${_txtOver3}", "scaleY", '1', { fromValue: '0'}], position: 1132, duration: 250, easing: "easeOutQuad" },
                { id: "eid1443", tween: [ "transform", "${_txtOver3}", "scaleY", '0', { fromValue: '1'}], position: 3250, duration: 250, easing: "easeOutQuad" }            ]
        }
    }
},
"btnSubmenu6": {
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
                    rect: ['-19px', '-19px', '130px', '105px', 'auto', 'auto'],
                    id: 'activo4',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/activo.png', '0px', '0px']
                },
                {
                    id: 'btnSubm6',
                    type: 'image',
                    rect: ['0px', '0px', '92px', '65px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btnSubm.png', '0px', '0px']
                },
                {
                    id: 'icono6',
                    type: 'image',
                    rect: ['21px', '1px', '59px', '54px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icono32.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_icono6}": [
                ["style", "top", '1px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '21px'],
                ["transform", "scaleX", '1']
            ],
            "${_btnSubm6}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_activo4}": [
                ["style", "top", '-19px'],
                ["style", "left", '-19px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '65px'],
                ["style", "width", '92px']
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
                "activo": 1000
            },
            timeline: [
                { id: "eid1673", tween: [ "style", "${_activo4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1674", tween: [ "style", "${_activo4}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1677", tween: [ "transform", "${_icono6}", "scaleX", '0.7', { fromValue: '1'}], position: 0, duration: 1000 },
                { id: "eid1678", tween: [ "transform", "${_icono6}", "scaleY", '0.7', { fromValue: '1'}], position: 0, duration: 1000 }            ]
        }
    }
},
"btnSubmenu8": {
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
                    rect: ['-19px', '-19px', '130px', '105px', 'auto', 'auto'],
                    id: 'activo2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/activo.png', '0px', '0px']
                },
                {
                    id: 'btnSubm8',
                    type: 'image',
                    rect: ['0px', '0px', '92px', '65px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btnSubm.png', '0px', '0px']
                },
                {
                    id: 'icono8',
                    type: 'image',
                    rect: ['12px', '1px', '71px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icono42.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_btnSubm8}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_activo2}": [
                ["style", "top", '-19px'],
                ["style", "left", '-19px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '65px'],
                ["style", "width", '92px']
            ],
            "${_icono8}": [
                ["transform", "scaleX", '1'],
                ["style", "top", '1px'],
                ["style", "left", '12px'],
                ["transform", "scaleY", '1']
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
                "activo": 1000
            },
            timeline: [
                { id: "eid1689", tween: [ "transform", "${_icono8}", "scaleX", '0.7', { fromValue: '1'}], position: 0, duration: 1000 },
                { id: "eid1685", tween: [ "style", "${_activo2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1686", tween: [ "style", "${_activo2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1690", tween: [ "transform", "${_icono8}", "scaleY", '0.7', { fromValue: '1'}], position: 0, duration: 1000 }            ]
        }
    }
},
"btnSubmenu1": {
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
                    rect: ['-17px', '-20px', '130px', '105px', 'auto', 'auto'],
                    id: 'activo',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/activo.png', '0px', '0px']
                },
                {
                    id: 'btnSubm',
                    type: 'image',
                    rect: ['0px', '0px', '92px', '65px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btnSubm.png', '0px', '0px']
                },
                {
                    id: 'icono1',
                    type: 'image',
                    rect: ['19px', '0px', '61px', '53px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icono1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '65px'],
                ["style", "width", '92px']
            ],
            "${_btnSubm}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_icono1}": [
                ["style", "top", '0px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '19px']
            ],
            "${_activo}": [
                ["style", "display", 'none'],
                ["style", "left", '-17px'],
                ["style", "top", '-20px']
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
                "activo": 1000
            },
            timeline: [
                { id: "eid1631", tween: [ "transform", "${_icono1}", "scaleX", '0.7', { fromValue: '1'}], position: 0, duration: 1000 },
                { id: "eid1623", tween: [ "style", "${_activo}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1624", tween: [ "style", "${_activo}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1632", tween: [ "transform", "${_icono1}", "scaleY", '0.7', { fromValue: '1'}], position: 0, duration: 1000 }            ]
        }
    }
},
"over4": {
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
                    rect: ['0px', '0px', '126px', '82px', 'auto', 'auto'],
                    id: 'txtOver4',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/txtOver.png', '0px', '0px']
                },
                {
                    type: 'text',
                    rect: ['11px', '41px', 'auto', 'auto', 'auto', 'auto'],
                    align: 'left',
                    id: 'Text3',
                    text: 'Exercise D<br>',
                    display: 'block',
                    font: ['Arial, Helvetica, sans-serif', 22, 'rgba(0,0,0,1)', 'bold', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text3}": [
                ["style", "top", '41px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '29px'],
                ["style", "font-size", '18px']
            ],
            "${_txtOver4}": [
                ["style", "top", '28px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '60px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '8px'],
                ["style", "width", '126px']
            ],
            "${symbolSelector}": [
                ["style", "height", '82px'],
                ["style", "width", '126px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: false,
            labels: {
                "over": 1000,
                "out": 3000
            },
            timeline: [
                { id: "eid1240", tween: [ "style", "${_txtOver4}", "left", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
                { id: "eid1245", tween: [ "style", "${_txtOver4}", "top", '28px', { fromValue: '28px'}], position: 0, duration: 0 },
                { id: "eid1287", tween: [ "style", "${_txtOver4}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1399", tween: [ "style", "${_txtOver4}", "opacity", '1', { fromValue: '0'}], position: 1119, duration: 250 },
                { id: "eid1400", tween: [ "style", "${_txtOver4}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 250 },
                { id: "eid1249", tween: [ "style", "${_txtOver4}", "height", '60px', { fromValue: '60px'}], position: 0, duration: 0 },
                { id: "eid1237", tween: [ "style", "${_txtOver4}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2160", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid1395", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 155 },
                { id: "eid1396", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '1'}], position: 3286, duration: 149 },
                { id: "eid2159", tween: [ "style", "${_Text3}", "left", '29px', { fromValue: '29px'}], position: 0, duration: 0 },
                { id: "eid2155", tween: [ "style", "${_Text3}", "font-size", '18px', { fromValue: '18px'}], position: 0, duration: 0 },
                { id: "eid1235", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1243", tween: [ "style", "${_txtOver4}", "width", '126px', { fromValue: '126px'}], position: 0, duration: 0 },
                { id: "eid1397", tween: [ "transform", "${_txtOver4}", "scaleY", '1', { fromValue: '0'}], position: 1119, duration: 250, easing: "easeOutQuad" },
                { id: "eid1398", tween: [ "transform", "${_txtOver4}", "scaleY", '0', { fromValue: '1'}], position: 3250, duration: 250, easing: "easeOutQuad" }            ]
        }
    }
},
"btnSubmenu7": {
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
                    rect: ['-18px', '-19px', '130px', '105px', 'auto', 'auto'],
                    id: 'activo',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/activo.png', '0px', '0px']
                },
                {
                    id: 'btnSubm7',
                    type: 'image',
                    rect: ['0px', '0px', '92px', '65px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btnSubm.png', '0px', '0px']
                },
                {
                    id: 'icono7',
                    type: 'image',
                    rect: ['18px', '3px', '56px', '45px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icono32.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_icono7}": [
                ["transform", "scaleX", '1'],
                ["style", "top", '3px'],
                ["style", "left", '18px'],
                ["transform", "scaleY", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '65px'],
                ["style", "width", '92px']
            ],
            "${_btnSubm7}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_activo}": [
                ["style", "top", '-19px'],
                ["style", "left", '-18px'],
                ["style", "display", 'none']
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
                "activo": 1000
            },
            timeline: [
                { id: "eid1683", tween: [ "style", "${_activo}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1684", tween: [ "style", "${_activo}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1682", tween: [ "transform", "${_icono7}", "scaleY", '0.7', { fromValue: '1'}], position: 0, duration: 1000 },
                { id: "eid1681", tween: [ "transform", "${_icono7}", "scaleX", '0.7', { fromValue: '1'}], position: 0, duration: 1000 }            ]
        }
    }
},
"BtnNext": {
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
                    id: 'btnNext',
                    type: 'image',
                    rect: ['0px', '0px', '140px', '62px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Botones/btnNext.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '62px'],
                ["style", "width", '140px']
            ],
            "${_btnNext}": [
                ["style", "height", '62px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '140px']
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
                    type: 'text',
                    rect: ['-266px', '-50px', '191px', '50px', 'auto', 'auto'],
                    id: 'Text',
                    text: 'To see the contents, click on the top menu.',
                    align: 'center',
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', 'normal', 'none', '']
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['-355px', '-344', 'auto', 'auto', 'auto', 'auto'],
                    id: 'flecha'
                }
            ],
            symbolInstances: [
            {
                id: 'flecha',
                symbolName: 'flecha',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_flecha}": [
                ["style", "left", '-355px'],
                ["style", "display", 'none']
            ],
            "${_globo}": [
                ["style", "top", '-97px'],
                ["style", "height", '155px'],
                ["style", "left", '-279px'],
                ["style", "width", '218px']
            ],
            "${_Text}": [
                ["style", "top", '-50px'],
                ["style", "text-align", 'center'],
                ["style", "width", '191px'],
                ["style", "height", '50px'],
                ["style", "opacity", '1'],
                ["style", "left", '-266px'],
                ["style", "font-size", '18px']
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
                { id: "eid2383", tween: [ "style", "${_flecha}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"flecha": {
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
                    id: 'flecha',
                    type: 'image',
                    rect: ['0px', '0px', '109px', '77px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flecha.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '77px'],
                ["style", "width", '109px']
            ],
            "${_flecha}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid598", tween: [ "style", "${_flecha}", "left", '-50px', { fromValue: '0px'}], position: 0, duration: 1000 },
                { id: "eid599", tween: [ "style", "${_flecha}", "left", '0px', { fromValue: '-50px'}], position: 1000, duration: 1000 }            ]
        }
    }
},
"mcEscena1": {
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
                    id: 'mcEscena1_1',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['500px', '346px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'globoIntro',
                    opacity: 1,
                    display: 'block',
                    type: 'rect'
                }
            ],
            symbolInstances: [
            {
                id: 'mcEscena1_1',
                symbolName: 'mcEscena1_1',
                autoPlay: {

               }
            },
            {
                id: 'globoIntro',
                symbolName: 'globoIntro',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_globoIntro}": [
                ["style", "top", '346px'],
                ["style", "opacity", '1'],
                ["style", "left", '500px'],
                ["style", "display", 'block']
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
            duration: 75000,
            autoPlay: false,
            labels: {
                "Escena1": 0,
                "Escena2": 1000,
                "Escena3": 3500
            },
            timeline: [
                { id: "eid825", tween: [ "style", "${_globoIntro}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid1826", tween: [ "style", "${_globoIntro}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1813", tween: [ "style", "${_globoIntro}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid1827", tween: [ "style", "${_globoIntro}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 }            ]
        }
    }
},
"subMenu2": {
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
                    id: 'barraSubmenu',
                    type: 'image',
                    rect: ['163px', '20px', '655px', '52px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/barraSubmenu.png', '0px', '0px']
                },
                {
                    id: 'btnSubmenu1b',
                    type: 'rect',
                    rect: ['151px', '86px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'btnSubmenu2b',
                    rect: ['251px', '86px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'btnSubmenu3b',
                    rect: ['654px', '86px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'btnSubmenu4b',
                    rect: ['858px', '86px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'flecha2',
                    type: 'rect',
                    rect: ['-355px', '-344', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'over1b',
                    rect: ['182px', '-84px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'over2b',
                    rect: ['351px', '-84px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'over3b',
                    rect: ['521px', '-84px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'over4b',
                    rect: ['683px', '-84px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btnSubmenu3b',
                symbolName: 'btnSubmenu7',
                autoPlay: {

               }
            },
            {
                id: 'over2b',
                symbolName: 'over2',
                autoPlay: {

               }
            },
            {
                id: 'btnSubmenu2b',
                symbolName: 'btnSubmenu3',
                autoPlay: {

               }
            },
            {
                id: 'over1b',
                symbolName: 'over1',
                autoPlay: {

               }
            },
            {
                id: 'over3b',
                symbolName: 'over3',
                autoPlay: {

               }
            },
            {
                id: 'over4b',
                symbolName: 'over4',
                autoPlay: {

               }
            },
            {
                id: 'flecha2',
                symbolName: 'flecha',
                autoPlay: {

               }
            },
            {
                id: 'btnSubmenu4b',
                symbolName: 'btnSubmenu9',
                autoPlay: {

               }
            },
            {
                id: 'btnSubmenu1b',
                symbolName: 'btnSubmenu2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_btnSubmenu1b}": [
                ["style", "top", '12px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '198px']
            ],
            "${_over3b}": [
                ["style", "top", '-84px'],
                ["style", "left", '521px'],
                ["style", "display", 'none']
            ],
            "${_over4b}": [
                ["style", "top", '-84px'],
                ["style", "left", '683px'],
                ["style", "display", 'none']
            ],
            "${_btnSubmenu4b}": [
                ["style", "top", '86px'],
                ["transform", "scaleY", '0.5'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '706px'],
                ["transform", "scaleX", '0.5']
            ],
            "${_barraSubmenu}": [
                ["style", "top", '130px'],
                ["transform", "scaleX", '0.01064'],
                ["style", "left", '29px'],
                ["style", "width", '955px']
            ],
            "${_flecha2}": [
                ["style", "top", '1px'],
                ["transform", "scaleY", '0.67532'],
                ["transform", "scaleX", '0.67532'],
                ["style", "opacity", '0'],
                ["style", "left", '33px']
            ],
            "${symbolSelector}": [
                ["style", "height", '72px'],
                ["style", "width", '1000px']
            ],
            "${_over1b}": [
                ["style", "top", '-84px'],
                ["style", "left", '182px'],
                ["style", "display", 'none']
            ],
            "${_btnSubmenu2b}": [
                ["style", "top", '86px'],
                ["transform", "scaleY", '0.5'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '361px'],
                ["transform", "scaleX", '0.5']
            ],
            "${_over2b}": [
                ["style", "top", '-84px'],
                ["style", "left", '351px'],
                ["style", "display", 'none']
            ],
            "${_btnSubmenu3b}": [
                ["style", "top", '86px'],
                ["transform", "scaleY", '0.5'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '533px'],
                ["transform", "scaleX", '0.5']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2750,
            autoPlay: false,
            labels: {
                "fin": 2750
            },
            timeline: [
                { id: "eid2323", tween: [ "style", "${_over4b}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid2326", tween: [ "style", "${_over4b}", "display", 'none', { fromValue: 'none'}], position: 2750, duration: 0, easing: "easeInQuad" },
                { id: "eid941", tween: [ "style", "${_btnSubmenu4b}", "left", '706px', { fromValue: '706px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1971", tween: [ "style", "${_btnSubmenu4b}", "left", '708px', { fromValue: '706px'}], position: 2250, duration: 0, easing: "easeInQuad" },
                { id: "eid1940", tween: [ "style", "${_barraSubmenu}", "top", '25px', { fromValue: '130px'}], position: 0, duration: 325, easing: "easeInQuad" },
                { id: "eid1951", tween: [ "style", "${_barraSubmenu}", "top", '25px', { fromValue: '25px'}], position: 608, duration: 0, easing: "easeInQuad" },
                { id: "eid1939", tween: [ "style", "${_barraSubmenu}", "top", '26px', { fromValue: '25px'}], position: 919, duration: 773, easing: "easeInQuad" },
                { id: "eid1943", tween: [ "transform", "${_barraSubmenu}", "scaleX", '0.01', { fromValue: '0.01064'}], position: 0, duration: 325, easing: "easeInQuad" },
                { id: "eid1942", tween: [ "transform", "${_barraSubmenu}", "scaleX", '0.70302', { fromValue: '0.01'}], position: 919, duration: 773, easing: "easeInQuad" },
                { id: "eid2325", tween: [ "style", "${_over1b}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid2329", tween: [ "style", "${_over1b}", "display", 'none', { fromValue: 'none'}], position: 2750, duration: 0, easing: "easeInQuad" },
                { id: "eid1116", tween: [ "style", "${_btnSubmenu3b}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1973", tween: [ "style", "${_btnSubmenu3b}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeInQuad" },
                { id: "eid1954", tween: [ "transform", "${_btnSubmenu1b}", "scaleX", '1', { fromValue: '0.5'}], position: 1500, duration: 365, easing: "easeInQuad" },
                { id: "eid1621", tween: [ "transform", "${_btnSubmenu4b}", "scaleY", '1', { fromValue: '0.5'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1968", tween: [ "transform", "${_btnSubmenu4b}", "scaleY", '1', { fromValue: '0.5'}], position: 2250, duration: 365, easing: "easeInQuad" },
                { id: "eid1481", tween: [ "transform", "${_btnSubmenu2b}", "scaleX", '1', { fromValue: '0.5'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1959", tween: [ "transform", "${_btnSubmenu2b}", "scaleX", '1', { fromValue: '0.5'}], position: 1750, duration: 365, easing: "easeInQuad" },
                { id: "eid1952", tween: [ "style", "${_btnSubmenu1b}", "top", '-4px', { fromValue: '12px'}], position: 1500, duration: 365, easing: "easeInQuad" },
                { id: "eid1586", tween: [ "transform", "${_btnSubmenu3b}", "scaleY", '1', { fromValue: '0.5'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1963", tween: [ "transform", "${_btnSubmenu3b}", "scaleY", '1', { fromValue: '0.5'}], position: 2000, duration: 365, easing: "easeInQuad" },
                { id: "eid1953", tween: [ "transform", "${_btnSubmenu1b}", "scaleY", '1', { fromValue: '0.5'}], position: 1500, duration: 365, easing: "easeInQuad" },
                { id: "eid1620", tween: [ "transform", "${_btnSubmenu4b}", "scaleX", '1', { fromValue: '0.5'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1969", tween: [ "transform", "${_btnSubmenu4b}", "scaleX", '1', { fromValue: '0.5'}], position: 2250, duration: 365, easing: "easeInQuad" },
                { id: "eid1587", tween: [ "style", "${_btnSubmenu3b}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1965", tween: [ "style", "${_btnSubmenu3b}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 365, easing: "easeInQuad" },
                { id: "eid1955", tween: [ "style", "${_btnSubmenu1b}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 365, easing: "easeInQuad" },
                { id: "eid1117", tween: [ "style", "${_btnSubmenu4b}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1974", tween: [ "style", "${_btnSubmenu4b}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0, easing: "easeInQuad" },
                { id: "eid1584", tween: [ "style", "${_btnSubmenu3b}", "top", '-4px', { fromValue: '86px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1962", tween: [ "style", "${_btnSubmenu3b}", "top", '-4px', { fromValue: '12px'}], position: 2000, duration: 365, easing: "easeInQuad" },
                { id: "eid2322", tween: [ "style", "${_over3b}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid2327", tween: [ "style", "${_over3b}", "display", 'none', { fromValue: 'none'}], position: 2750, duration: 0, easing: "easeInQuad" },
                { id: "eid2324", tween: [ "style", "${_over2b}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid2328", tween: [ "style", "${_over2b}", "display", 'none', { fromValue: 'none'}], position: 2750, duration: 0, easing: "easeInQuad" },
                { id: "eid1115", tween: [ "style", "${_btnSubmenu2b}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1972", tween: [ "style", "${_btnSubmenu2b}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0, easing: "easeInQuad" },
                { id: "eid1585", tween: [ "transform", "${_btnSubmenu3b}", "scaleX", '1', { fromValue: '0.5'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1964", tween: [ "transform", "${_btnSubmenu3b}", "scaleX", '1', { fromValue: '0.5'}], position: 2000, duration: 365, easing: "easeInQuad" },
                { id: "eid1945", tween: [ "style", "${_barraSubmenu}", "left", '-10px', { fromValue: '29px'}], position: 0, duration: 325, easing: "easeInQuad" },
                { id: "eid1946", tween: [ "style", "${_barraSubmenu}", "left", '3px', { fromValue: '-10px'}], position: 325, duration: 283, easing: "easeInQuad" },
                { id: "eid1944", tween: [ "style", "${_barraSubmenu}", "left", '27px', { fromValue: '3px'}], position: 919, duration: 773, easing: "easeInQuad" },
                { id: "eid1482", tween: [ "transform", "${_btnSubmenu2b}", "scaleY", '1', { fromValue: '0.5'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1958", tween: [ "transform", "${_btnSubmenu2b}", "scaleY", '1', { fromValue: '0.5'}], position: 1750, duration: 365, easing: "easeInQuad" },
                { id: "eid1948", tween: [ "style", "${_barraSubmenu}", "width", '1032px', { fromValue: '955px'}], position: 0, duration: 325, easing: "easeInQuad" },
                { id: "eid1949", tween: [ "style", "${_barraSubmenu}", "width", '1008px', { fromValue: '1032px'}], position: 325, duration: 283, easing: "easeInQuad" },
                { id: "eid1947", tween: [ "style", "${_barraSubmenu}", "width", '955px', { fromValue: '1008px'}], position: 919, duration: 773, easing: "easeInQuad" },
                { id: "eid1619", tween: [ "style", "${_btnSubmenu4b}", "top", '-5px', { fromValue: '86px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1967", tween: [ "style", "${_btnSubmenu4b}", "top", '-5px', { fromValue: '11px'}], position: 2250, duration: 365, easing: "easeInQuad" },
                { id: "eid1622", tween: [ "style", "${_btnSubmenu4b}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1970", tween: [ "style", "${_btnSubmenu4b}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 365, easing: "easeInQuad" },
                { id: "eid2147", tween: [ "style", "${_flecha2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid939", tween: [ "style", "${_btnSubmenu2b}", "left", '361px', { fromValue: '361px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1961", tween: [ "style", "${_btnSubmenu2b}", "left", '368px', { fromValue: '361px'}], position: 1750, duration: 0, easing: "easeInQuad" },
                { id: "eid1956", tween: [ "style", "${_btnSubmenu1b}", "left", '198px', { fromValue: '198px'}], position: 1500, duration: 0, easing: "easeInQuad" },
                { id: "eid1966", tween: [ "style", "${_btnSubmenu3b}", "left", '533px', { fromValue: '533px'}], position: 2000, duration: 0, easing: "easeInQuad" },
                { id: "eid1480", tween: [ "style", "${_btnSubmenu2b}", "top", '-5px', { fromValue: '86px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1957", tween: [ "style", "${_btnSubmenu2b}", "top", '-5px', { fromValue: '11px'}], position: 1750, duration: 365, easing: "easeInQuad" },
                { id: "eid1483", tween: [ "style", "${_btnSubmenu2b}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1960", tween: [ "style", "${_btnSubmenu2b}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 365, easing: "easeInQuad" }            ]
        }
    }
},
"subMenu1": {
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
                    id: 'barraSubmenu',
                    type: 'image',
                    rect: ['163px', '20px', '655px', '52px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/barraSubmenu.png', '0px', '0px']
                },
                {
                    id: 'btnSubmenu1a',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['191px', '86px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    id: 'btnSubmenu2a',
                    rect: ['361px', '86px', 'auto', 'auto', 'auto', 'auto'],
                    cursor: ['pointer'],
                    display: 'none'
                },
                {
                    type: 'rect',
                    id: 'btnSubmenu3a',
                    rect: ['522px', '86px', 'auto', 'auto', 'auto', 'auto'],
                    cursor: ['pointer'],
                    display: 'none'
                },
                {
                    type: 'rect',
                    id: 'btnSubmenu4a',
                    rect: ['706px', '86px', 'auto', 'auto', 'auto', 'auto'],
                    cursor: ['pointer'],
                    display: 'none'
                },
                {
                    id: 'flecha1',
                    type: 'rect',
                    rect: ['-355px', '-344', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'over1a',
                    rect: ['182px', '-84px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'over2a',
                    rect: ['351px', '-84px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'over3a',
                    rect: ['521px', '-84px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'over4a',
                    rect: ['683px', '-84px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btnSubmenu3a',
                symbolName: 'btnSubmenu6',
                autoPlay: {

               }
            },
            {
                id: 'btnSubmenu1a',
                symbolName: 'btnSubmenu4',
                autoPlay: {

               }
            },
            {
                id: 'over2a',
                symbolName: 'over2',
                autoPlay: {

               }
            },
            {
                id: 'over4a',
                symbolName: 'over4',
                autoPlay: {

               }
            },
            {
                id: 'btnSubmenu4a',
                symbolName: 'btnSubmenu8',
                autoPlay: {

               }
            },
            {
                id: 'btnSubmenu2a',
                symbolName: 'btnSubmenu5',
                autoPlay: {

               }
            },
            {
                id: 'over3a',
                symbolName: 'over3',
                autoPlay: {

               }
            },
            {
                id: 'over1a',
                symbolName: 'over1',
                autoPlay: {

               }
            },
            {
                id: 'flecha1',
                symbolName: 'flecha',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_flecha1}": [
                ["style", "top", '1px'],
                ["transform", "scaleY", '0.67532'],
                ["transform", "scaleX", '0.67532'],
                ["style", "opacity", '0'],
                ["style", "left", '33px']
            ],
            "${_btnSubmenu4a}": [
                ["style", "top", '86px'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '708px'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_btnSubmenu2a}": [
                ["style", "top", '86px'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '368px'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_over1a}": [
                ["style", "top", '-84px'],
                ["style", "left", '182px'],
                ["style", "display", 'none']
            ],
            "${_btnSubmenu3a}": [
                ["style", "top", '86px'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '533px'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_btnSubmenu1a}": [
                ["style", "top", '2px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '198px'],
                ["style", "cursor", 'pointer']
            ],
            "${_over4a}": [
                ["style", "top", '-84px'],
                ["style", "left", '683px'],
                ["style", "display", 'none']
            ],
            "${_barraSubmenu}": [
                ["style", "top", '130px'],
                ["transform", "scaleX", '0.01064'],
                ["style", "left", '29px'],
                ["style", "width", '955px']
            ],
            "${symbolSelector}": [
                ["style", "height", '72px'],
                ["style", "width", '1000px']
            ],
            "${_over2a}": [
                ["style", "top", '-84px'],
                ["style", "left", '351px'],
                ["style", "display", 'none']
            ],
            "${_over3a}": [
                ["style", "top", '-84px'],
                ["style", "left", '521px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2370,
            autoPlay: false,
            labels: {
                "fin": 2370
            },
            timeline: [
                { id: "eid1524", tween: [ "transform", "${_btnSubmenu2a}", "scaleY", '1', { fromValue: '0.5'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid2004", tween: [ "transform", "${_btnSubmenu2a}", "scaleY", '1', { fromValue: '0.5'}], position: 1500, duration: 365, easing: "easeInQuad" },
                { id: "eid1982", tween: [ "style", "${_barraSubmenu}", "top", '25px', { fromValue: '130px'}], position: 0, duration: 325, easing: "easeInQuad" },
                { id: "eid1983", tween: [ "style", "${_barraSubmenu}", "top", '25px', { fromValue: '25px'}], position: 608, duration: 0, easing: "easeInQuad" },
                { id: "eid1984", tween: [ "style", "${_barraSubmenu}", "top", '26px', { fromValue: '25px'}], position: 919, duration: 773, easing: "easeInQuad" },
                { id: "eid2009", tween: [ "style", "${_btnSubmenu1a}", "top", '-4px', { fromValue: '2px'}], position: 1250, duration: 365, easing: "easeInQuad" },
                { id: "eid1561", tween: [ "style", "${_btnSubmenu3a}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid2000", tween: [ "style", "${_btnSubmenu3a}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 365, easing: "easeInQuad" },
                { id: "eid1523", tween: [ "transform", "${_btnSubmenu2a}", "scaleX", '1', { fromValue: '0.5'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid2005", tween: [ "transform", "${_btnSubmenu2a}", "scaleX", '1', { fromValue: '0.5'}], position: 1500, duration: 365, easing: "easeInQuad" },
                { id: "eid2316", tween: [ "style", "${_over2a}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid2319", tween: [ "style", "${_over2a}", "display", 'none', { fromValue: 'none'}], position: 2370, duration: 0, easing: "easeInQuad" },
                { id: "eid1606", tween: [ "style", "${_btnSubmenu4a}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1994", tween: [ "style", "${_btnSubmenu4a}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 365, easing: "easeInQuad" },
                { id: "eid1604", tween: [ "transform", "${_btnSubmenu4a}", "scaleX", '1', { fromValue: '0.5'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1996", tween: [ "transform", "${_btnSubmenu4a}", "scaleX", '1', { fromValue: '0.5'}], position: 2000, duration: 365, easing: "easeInQuad" },
                { id: "eid1521", tween: [ "style", "${_btnSubmenu2a}", "top", '-5px', { fromValue: '86px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid2003", tween: [ "style", "${_btnSubmenu2a}", "top", '-5px', { fromValue: '11px'}], position: 1500, duration: 365, easing: "easeInQuad" },
                { id: "eid1075", tween: [ "style", "${_btnSubmenu2a}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid2008", tween: [ "style", "${_btnSubmenu2a}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0, easing: "easeInQuad" },
                { id: "eid2007", tween: [ "style", "${_btnSubmenu2a}", "left", '368px', { fromValue: '368px'}], position: 1500, duration: 0, easing: "easeInQuad" },
                { id: "eid2142", tween: [ "transform", "${_flecha1}", "scaleX", '0.67532', { fromValue: '0.67532'}], position: 2365, duration: 0 },
                { id: "eid1603", tween: [ "style", "${_btnSubmenu4a}", "top", '-4px', { fromValue: '86px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1991", tween: [ "style", "${_btnSubmenu4a}", "top", '-4px', { fromValue: '12px'}], position: 2000, duration: 365, easing: "easeInQuad" },
                { id: "eid1605", tween: [ "transform", "${_btnSubmenu4a}", "scaleY", '1', { fromValue: '0.5'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1992", tween: [ "transform", "${_btnSubmenu4a}", "scaleY", '1', { fromValue: '0.5'}], position: 2000, duration: 365, easing: "easeInQuad" },
                { id: "eid2011", tween: [ "transform", "${_btnSubmenu1a}", "scaleX", '1', { fromValue: '0.5'}], position: 1250, duration: 365, easing: "easeInQuad" },
                { id: "eid1560", tween: [ "transform", "${_btnSubmenu3a}", "scaleY", '1', { fromValue: '0.5'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1998", tween: [ "transform", "${_btnSubmenu3a}", "scaleY", '1', { fromValue: '0.5'}], position: 1750, duration: 365, easing: "easeInQuad" },
                { id: "eid2010", tween: [ "transform", "${_btnSubmenu1a}", "scaleY", '1', { fromValue: '0.5'}], position: 1250, duration: 365, easing: "easeInQuad" },
                { id: "eid2001", tween: [ "style", "${_btnSubmenu3a}", "left", '533px', { fromValue: '533px'}], position: 1750, duration: 0, easing: "easeInQuad" },
                { id: "eid2138", tween: [ "style", "${_flecha1}", "top", '1px', { fromValue: '1px'}], position: 2365, duration: 0 },
                { id: "eid1988", tween: [ "style", "${_barraSubmenu}", "width", '1032px', { fromValue: '955px'}], position: 0, duration: 325, easing: "easeInQuad" },
                { id: "eid1989", tween: [ "style", "${_barraSubmenu}", "width", '1008px', { fromValue: '1032px'}], position: 325, duration: 283, easing: "easeInQuad" },
                { id: "eid1990", tween: [ "style", "${_barraSubmenu}", "width", '955px', { fromValue: '1008px'}], position: 919, duration: 773, easing: "easeInQuad" },
                { id: "eid2146", tween: [ "style", "${_flecha1}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid2317", tween: [ "style", "${_over1a}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid2320", tween: [ "style", "${_over1a}", "display", 'none', { fromValue: 'none'}], position: 2370, duration: 0, easing: "easeInQuad" },
                { id: "eid1078", tween: [ "style", "${_btnSubmenu4a}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1993", tween: [ "style", "${_btnSubmenu4a}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeInQuad" },
                { id: "eid1525", tween: [ "style", "${_btnSubmenu2a}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid2006", tween: [ "style", "${_btnSubmenu2a}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 365, easing: "easeInQuad" },
                { id: "eid1559", tween: [ "transform", "${_btnSubmenu3a}", "scaleX", '1', { fromValue: '0.5'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid2002", tween: [ "transform", "${_btnSubmenu3a}", "scaleX", '1', { fromValue: '0.5'}], position: 1750, duration: 365, easing: "easeInQuad" },
                { id: "eid1985", tween: [ "style", "${_barraSubmenu}", "left", '-10px', { fromValue: '29px'}], position: 0, duration: 325, easing: "easeInQuad" },
                { id: "eid1986", tween: [ "style", "${_barraSubmenu}", "left", '3px', { fromValue: '-10px'}], position: 325, duration: 283, easing: "easeInQuad" },
                { id: "eid1987", tween: [ "style", "${_barraSubmenu}", "left", '27px', { fromValue: '3px'}], position: 919, duration: 773, easing: "easeInQuad" },
                { id: "eid2314", tween: [ "style", "${_over3a}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid2318", tween: [ "style", "${_over3a}", "display", 'none', { fromValue: 'none'}], position: 2370, duration: 0, easing: "easeInQuad" },
                { id: "eid1077", tween: [ "style", "${_btnSubmenu3a}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1999", tween: [ "style", "${_btnSubmenu3a}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0, easing: "easeInQuad" },
                { id: "eid2144", tween: [ "transform", "${_flecha1}", "scaleY", '0.67532', { fromValue: '0.67532'}], position: 2365, duration: 0 },
                { id: "eid2315", tween: [ "style", "${_over4a}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid2321", tween: [ "style", "${_over4a}", "display", 'none', { fromValue: 'none'}], position: 2370, duration: 0, easing: "easeInQuad" },
                { id: "eid2140", tween: [ "style", "${_flecha1}", "left", '33px', { fromValue: '33px'}], position: 2365, duration: 0 },
                { id: "eid1558", tween: [ "style", "${_btnSubmenu3a}", "top", '-4px', { fromValue: '86px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1997", tween: [ "style", "${_btnSubmenu3a}", "top", '-4px', { fromValue: '12px'}], position: 1750, duration: 365, easing: "easeInQuad" },
                { id: "eid2013", tween: [ "style", "${_btnSubmenu1a}", "left", '198px', { fromValue: '198px'}], position: 1250, duration: 0, easing: "easeInQuad" },
                { id: "eid2012", tween: [ "style", "${_btnSubmenu1a}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 365, easing: "easeInQuad" },
                { id: "eid1980", tween: [ "transform", "${_barraSubmenu}", "scaleX", '0.01', { fromValue: '0.01064'}], position: 0, duration: 325, easing: "easeInQuad" },
                { id: "eid1981", tween: [ "transform", "${_barraSubmenu}", "scaleX", '0.70302', { fromValue: '0.01'}], position: 919, duration: 773, easing: "easeInQuad" },
                { id: "eid1995", tween: [ "style", "${_btnSubmenu4a}", "left", '708px', { fromValue: '708px'}], position: 2000, duration: 0, easing: "easeInQuad" }            ]
        }
    }
},
"btnSubmenu5_1": {
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
                    rect: ['-19px', '-20px', '130px', '105px', 'auto', 'auto'],
                    id: 'activo3',
                    fill: ['rgba(0,0,0,0)', 'images/activo2.png', '0px', '0px']
                },
                {
                    id: 'btnSubm5',
                    type: 'image',
                    rect: ['0px', '0px', '92px', '65px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btnSubm2.png', '0px', '0px']
                },
                {
                    id: 'icono5',
                    type: 'image',
                    rect: ['19px', '0px', '64px', '52px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icono52.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_btnSubm5}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '65px'],
                ["style", "width", '92px']
            ],
            "${_icono5}": [
                ["transform", "scaleX", '1'],
                ["style", "top", '0px'],
                ["style", "left", '19px'],
                ["transform", "scaleY", '1']
            ],
            "${_activo3}": [
                ["style", "top", '-20px'],
                ["style", "left", '-19px'],
                ["style", "display", 'none']
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
                "activo": 1000
            },
            timeline: [
                { id: "eid1671", tween: [ "transform", "${_icono5}", "scaleY", '0.7', { fromValue: '1'}], position: 0, duration: 1000 },
                { id: "eid1663", tween: [ "style", "${_activo3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1664", tween: [ "style", "${_activo3}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1672", tween: [ "transform", "${_icono5}", "scaleX", '0.7', { fromValue: '1'}], position: 0, duration: 1000 }            ]
        }
    }
},
"btnSubmenu3_1": {
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
                    rect: ['-18px', '-20px', '130px', '105px', 'auto', 'auto'],
                    id: 'activo',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/activo2.png', '0px', '0px']
                },
                {
                    id: 'btnSubm3',
                    type: 'image',
                    rect: ['0px', '0px', '92px', '65px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btnSubm2.png', '0px', '0px']
                },
                {
                    id: 'icono3',
                    type: 'image',
                    rect: ['18px', '0', '64px', '54px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icono22.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '65px'],
                ["style", "width", '92px']
            ],
            "${_btnSubm3}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_icono3}": [
                ["transform", "scaleX", '1'],
                ["style", "left", '18px'],
                ["transform", "scaleY", '1']
            ],
            "${_activo}": [
                ["style", "top", '-20px'],
                ["style", "left", '-18px'],
                ["style", "display", 'none']
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
                "activo": 1000
            },
            timeline: [
                { id: "eid1651", tween: [ "transform", "${_icono3}", "scaleX", '0.7', { fromValue: '1'}], position: 0, duration: 1000 },
                { id: "eid1643", tween: [ "style", "${_activo}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1644", tween: [ "style", "${_activo}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1652", tween: [ "transform", "${_icono3}", "scaleY", '0.7', { fromValue: '1'}], position: 0, duration: 1000 }            ]
        }
    }
},
"btnSubmenu4_1": {
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
                    rect: ['-19px', '-20px', '130px', '105px', 'auto', 'auto'],
                    id: 'activo2',
                    fill: ['rgba(0,0,0,0)', 'images/activo2.png', '0px', '0px']
                },
                {
                    id: 'btnSubm4',
                    type: 'image',
                    rect: ['0px', '0px', '92px', '65px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btnSubm2.png', '0px', '0px']
                },
                {
                    id: 'icono4',
                    type: 'image',
                    rect: ['13px', '1px', '71px', '53px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icono42.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_btnSubm4}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_activo2}": [
                ["style", "top", '-20px'],
                ["style", "left", '-19px'],
                ["style", "display", 'none']
            ],
            "${_icono4}": [
                ["transform", "scaleX", '1'],
                ["style", "top", '1px'],
                ["style", "left", '13px'],
                ["transform", "scaleY", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '65px'],
                ["style", "width", '92px']
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
                "activo": 1000
            },
            timeline: [
                { id: "eid1662", tween: [ "transform", "${_icono4}", "scaleY", '0.7', { fromValue: '1'}], position: 0, duration: 1000 },
                { id: "eid1653", tween: [ "style", "${_activo2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1654", tween: [ "style", "${_activo2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1661", tween: [ "transform", "${_icono4}", "scaleX", '0.7', { fromValue: '1'}], position: 0, duration: 1000 }            ]
        }
    }
},
"subMenu": {
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
                    id: 'barraSubmenu',
                    type: 'image',
                    rect: ['0px', '20px', '1000px', '52px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/barraSubmenu2.png', '0px', '0px']
                },
                {
                    id: 'btnSubmenu1',
                    type: 'rect',
                    rect: ['48px', '86px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btnSubmenu2',
                    type: 'rect',
                    rect: ['151px', '86px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btnSubmenu3',
                    type: 'rect',
                    rect: ['251px', '86px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btnSubmenu4',
                    type: 'rect',
                    rect: ['351px', '86px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btnSubmenu5',
                    type: 'rect',
                    rect: ['451px', '86px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btnSubmenu6',
                    type: 'rect',
                    rect: ['551px', '86px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btnSubmenu7',
                    type: 'rect',
                    rect: ['654px', '86px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btnSubmenu8',
                    type: 'rect',
                    rect: ['756px', '86px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btnSubmenu9',
                    type: 'rect',
                    rect: ['858px', '86px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'over1',
                    type: 'rect',
                    rect: ['26', '-82', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btnSubmenu5',
                symbolName: 'btnSubmenu5_1',
                autoPlay: {

               }
            },
            {
                id: 'btnSubmenu3',
                symbolName: 'btnSubmenu3_1',
                autoPlay: {

               }
            },
            {
                id: 'btnSubmenu4',
                symbolName: 'btnSubmenu4_1',
                autoPlay: {

               }
            },
            {
                id: 'btnSubmenu1',
                symbolName: 'btnSubmenu1_1',
                autoPlay: {

               }
            },
            {
                id: 'btnSubmenu9',
                symbolName: 'btnSubmenu9_1',
                autoPlay: {

               }
            },
            {
                id: 'btnSubmenu2',
                symbolName: 'btnSubmenu2_1',
                autoPlay: {

               }
            },
            {
                id: 'btnSubmenu6',
                symbolName: 'btnSubmenu6_1',
                autoPlay: {

               }
            },
            {
                id: 'btnSubmenu8',
                symbolName: 'btnSubmenu8_1',
                autoPlay: {

               }
            },
            {
                id: 'over1',
                symbolName: 'over1',
                autoPlay: {

               }
            },
            {
                id: 'btnSubmenu7',
                symbolName: 'btnSubmenu7_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_btnSubmenu7}": [
                ["style", "top", '86px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '654px']
            ],
            "${_btnSubmenu9}": [
                ["style", "top", '86px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '861px']
            ],
            "${_btnSubmenu4}": [
                ["style", "top", '86px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '351px']
            ],
            "${_btnSubmenu8}": [
                ["style", "top", '86px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '756px']
            ],
            "${_btnSubmenu6}": [
                ["style", "top", '86px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '551px']
            ],
            "${_barraSubmenu}": [
                ["style", "left", '0px'],
                ["style", "top", '20px']
            ],
            "${_btnSubmenu5}": [
                ["style", "top", '86px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '451px']
            ],
            "${symbolSelector}": [
                ["style", "height", '72px'],
                ["style", "width", '1000px']
            ],
            "${_btnSubmenu3}": [
                ["style", "top", '86px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '251px']
            ],
            "${_btnSubmenu1}": [
                ["style", "top", '86px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '48px']
            ],
            "${_btnSubmenu2}": [
                ["style", "top", '86px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '151px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4750,
            autoPlay: false,
            timeline: [
                { id: "eid1622", tween: [ "style", "${_btnSubmenu9}", "opacity", '1', { fromValue: '0'}], position: 3701, duration: 504, easing: "easeInQuad" },
                { id: "eid1435", tween: [ "style", "${_btnSubmenu1}", "top", '-4px', { fromValue: '86px'}], position: 250, duration: 546, easing: "easeInQuad" },
                { id: "eid1459", tween: [ "transform", "${_btnSubmenu2}", "scaleX", '1', { fromValue: '0.5'}], position: 696, duration: 554, easing: "easeInQuad" },
                { id: "eid1502", tween: [ "style", "${_btnSubmenu4}", "top", '-5px', { fromValue: '86px'}], position: 1550, duration: 539, easing: "easeInQuad" },
                { id: "eid1483", tween: [ "style", "${_btnSubmenu3}", "opacity", '1', { fromValue: '0'}], position: 1131, duration: 512, easing: "easeInQuad" },
                { id: "eid1480", tween: [ "style", "${_btnSubmenu3}", "top", '-5px', { fromValue: '86px'}], position: 1131, duration: 512, easing: "easeInQuad" },
                { id: "eid1524", tween: [ "transform", "${_btnSubmenu5}", "scaleY", '1', { fromValue: '0.5'}], position: 2000, duration: 542, easing: "easeInQuad" },
                { id: "eid1585", tween: [ "transform", "${_btnSubmenu7}", "scaleX", '1', { fromValue: '0.5'}], position: 2883, duration: 517, easing: "easeInQuad" },
                { id: "eid1586", tween: [ "transform", "${_btnSubmenu7}", "scaleY", '1', { fromValue: '0.5'}], position: 2883, duration: 517, easing: "easeInQuad" },
                { id: "eid1621", tween: [ "transform", "${_btnSubmenu9}", "scaleY", '1', { fromValue: '0.5'}], position: 3701, duration: 504, easing: "easeInQuad" },
                { id: "eid1561", tween: [ "style", "${_btnSubmenu6}", "opacity", '1', { fromValue: '0'}], position: 2434, duration: 566, easing: "easeInQuad" },
                { id: "eid1434", tween: [ "transform", "${_btnSubmenu1}", "scaleX", '1', { fromValue: '0.5'}], position: 250, duration: 546, easing: "easeInQuad" },
                { id: "eid1433", tween: [ "transform", "${_btnSubmenu1}", "scaleY", '1', { fromValue: '0.5'}], position: 250, duration: 546, easing: "easeInQuad" },
                { id: "eid1505", tween: [ "style", "${_btnSubmenu4}", "opacity", '1', { fromValue: '0'}], position: 1550, duration: 539, easing: "easeInQuad" },
                { id: "eid1584", tween: [ "style", "${_btnSubmenu7}", "top", '-4px', { fromValue: '86px'}], position: 2883, duration: 517, easing: "easeInQuad" },
                { id: "eid1521", tween: [ "style", "${_btnSubmenu5}", "top", '-5px', { fromValue: '86px'}], position: 2000, duration: 542, easing: "easeInQuad" },
                { id: "eid1523", tween: [ "transform", "${_btnSubmenu5}", "scaleX", '1', { fromValue: '0.5'}], position: 2000, duration: 542, easing: "easeInQuad" },
                { id: "eid1525", tween: [ "style", "${_btnSubmenu5}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 542, easing: "easeInQuad" },
                { id: "eid1457", tween: [ "transform", "${_btnSubmenu2}", "scaleY", '1', { fromValue: '0.5'}], position: 696, duration: 554, easing: "easeInQuad" },
                { id: "eid1482", tween: [ "transform", "${_btnSubmenu3}", "scaleY", '1', { fromValue: '0.5'}], position: 1131, duration: 512, easing: "easeInQuad" },
                { id: "eid1606", tween: [ "style", "${_btnSubmenu8}", "opacity", '1', { fromValue: '0'}], position: 3290, duration: 538, easing: "easeInQuad" },
                { id: "eid1432", tween: [ "style", "${_btnSubmenu1}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 546, easing: "easeInQuad" },
                { id: "eid1504", tween: [ "transform", "${_btnSubmenu4}", "scaleY", '1', { fromValue: '0.5'}], position: 1550, duration: 539, easing: "easeInQuad" },
                { id: "eid1558", tween: [ "style", "${_btnSubmenu6}", "top", '-4px', { fromValue: '86px'}], position: 2434, duration: 566, easing: "easeInQuad" },
                { id: "eid1559", tween: [ "transform", "${_btnSubmenu6}", "scaleX", '1', { fromValue: '0.5'}], position: 2434, duration: 566, easing: "easeInQuad" },
                { id: "eid1503", tween: [ "transform", "${_btnSubmenu4}", "scaleX", '1', { fromValue: '0.5'}], position: 1550, duration: 539, easing: "easeInQuad" },
                { id: "eid1456", tween: [ "style", "${_btnSubmenu2}", "opacity", '1', { fromValue: '0'}], position: 696, duration: 554, easing: "easeInQuad" },
                { id: "eid1587", tween: [ "style", "${_btnSubmenu7}", "opacity", '1', { fromValue: '0'}], position: 2883, duration: 517, easing: "easeInQuad" },
                { id: "eid1560", tween: [ "transform", "${_btnSubmenu6}", "scaleY", '1', { fromValue: '0.5'}], position: 2434, duration: 566, easing: "easeInQuad" },
                { id: "eid1603", tween: [ "style", "${_btnSubmenu8}", "top", '-5px', { fromValue: '86px'}], position: 3290, duration: 538, easing: "easeInQuad" },
                { id: "eid1477", tween: [ "style", "${_btnSubmenu3}", "left", '251px', { fromValue: '251px'}], position: 1131, duration: 0, easing: "easeInQuad" },
                { id: "eid1605", tween: [ "transform", "${_btnSubmenu8}", "scaleY", '1', { fromValue: '0.5'}], position: 3290, duration: 538, easing: "easeInQuad" },
                { id: "eid1460", tween: [ "style", "${_btnSubmenu2}", "top", '-4px', { fromValue: '86px'}], position: 696, duration: 554, easing: "easeInQuad" },
                { id: "eid1619", tween: [ "style", "${_btnSubmenu9}", "top", '-5px', { fromValue: '86px'}], position: 3701, duration: 504, easing: "easeInQuad" },
                { id: "eid1604", tween: [ "transform", "${_btnSubmenu8}", "scaleX", '1', { fromValue: '0.5'}], position: 3290, duration: 538, easing: "easeInQuad" },
                { id: "eid1620", tween: [ "transform", "${_btnSubmenu9}", "scaleX", '1', { fromValue: '0.5'}], position: 3701, duration: 504, easing: "easeInQuad" },
                { id: "eid1481", tween: [ "transform", "${_btnSubmenu3}", "scaleX", '1', { fromValue: '0.5'}], position: 1131, duration: 512, easing: "easeInQuad" },
                { id: "eid1691", tween: [ "style", "${_btnSubmenu9}", "left", '861px', { fromValue: '861px'}], position: 4750, duration: 0 }            ]
        }
    }
},
"btnSubmenu9_1": {
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
                    rect: ['-19px', '-17px', '130px', '105px', 'auto', 'auto'],
                    id: 'activo3',
                    fill: ['rgba(0,0,0,0)', 'images/activo2.png', '0px', '0px']
                },
                {
                    id: 'btnSubm9',
                    type: 'image',
                    rect: ['0px', '0px', '92px', '65px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btnSubm2.png', '0px', '0px']
                },
                {
                    id: 'icono9',
                    type: 'image',
                    rect: ['15px', '0', '61px', '48px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icono92.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_icono9}": [
                ["transform", "scaleX", '1'],
                ["style", "left", '15px'],
                ["transform", "scaleY", '1']
            ],
            "${_activo3}": [
                ["style", "top", '-17px'],
                ["style", "left", '-19px'],
                ["style", "display", 'none']
            ],
            "${_btnSubm9}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '65px'],
                ["style", "width", '92px']
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
                "activo": 1000
            },
            timeline: [
                { id: "eid1696", tween: [ "style", "${_activo3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1697", tween: [ "style", "${_activo3}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1695", tween: [ "transform", "${_icono9}", "scaleY", '0.7', { fromValue: '1'}], position: 0, duration: 1000 },
                { id: "eid1694", tween: [ "transform", "${_icono9}", "scaleX", '0.7', { fromValue: '1'}], position: 0, duration: 1000 }            ]
        }
    }
},
"btnSubmenu2_1": {
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
                    rect: ['-18px', '-20px', '130px', '105px', 'auto', 'auto'],
                    id: 'activo2',
                    fill: ['rgba(0,0,0,0)', 'images/activo2.png', '0px', '0px']
                },
                {
                    id: 'btnSubm2',
                    type: 'image',
                    rect: ['0px', '0px', '92px', '65px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btnSubm2.png', '0px', '0px']
                },
                {
                    id: 'icono2',
                    type: 'image',
                    rect: ['16px', '0px', '64px', '52px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icono22.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '65px'],
                ["style", "width", '92px']
            ],
            "${_activo2}": [
                ["style", "top", '-20px'],
                ["style", "left", '-18px'],
                ["style", "display", 'none']
            ],
            "${_btnSubm2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_icono2}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '16px'],
                ["transform", "scaleX", '1']
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
                "activo": 1000
            },
            timeline: [
                { id: "eid1641", tween: [ "transform", "${_icono2}", "scaleX", '0.7', { fromValue: '1'}], position: 0, duration: 1000 },
                { id: "eid1633", tween: [ "style", "${_activo2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1634", tween: [ "style", "${_activo2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1642", tween: [ "transform", "${_icono2}", "scaleY", '0.7', { fromValue: '1'}], position: 0, duration: 1000 }            ]
        }
    }
},
"btnSubmenu6_1": {
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
                    rect: ['-19px', '-19px', '130px', '105px', 'auto', 'auto'],
                    id: 'activo4',
                    fill: ['rgba(0,0,0,0)', 'images/activo2.png', '0px', '0px']
                },
                {
                    id: 'btnSubm6',
                    type: 'image',
                    rect: ['0px', '0px', '92px', '65px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btnSubm2.png', '0px', '0px']
                },
                {
                    id: 'icono6',
                    type: 'image',
                    rect: ['21px', '1px', '59px', '54px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icono62.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_icono6}": [
                ["transform", "scaleX", '1'],
                ["style", "top", '1px'],
                ["style", "left", '21px'],
                ["transform", "scaleY", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '65px'],
                ["style", "width", '92px']
            ],
            "${_activo4}": [
                ["style", "top", '-19px'],
                ["style", "left", '-19px'],
                ["style", "display", 'none']
            ],
            "${_btnSubm6}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
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
                "activo": 1000
            },
            timeline: [
                { id: "eid1673", tween: [ "style", "${_activo4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1674", tween: [ "style", "${_activo4}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1677", tween: [ "transform", "${_icono6}", "scaleX", '0.7', { fromValue: '1'}], position: 0, duration: 1000 },
                { id: "eid1678", tween: [ "transform", "${_icono6}", "scaleY", '0.7', { fromValue: '1'}], position: 0, duration: 1000 }            ]
        }
    }
},
"btnSubmenu8_1": {
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
                    rect: ['-19px', '-19px', '130px', '105px', 'auto', 'auto'],
                    id: 'activo2',
                    fill: ['rgba(0,0,0,0)', 'images/activo2.png', '0px', '0px']
                },
                {
                    id: 'btnSubm8',
                    type: 'image',
                    rect: ['0px', '0px', '92px', '65px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btnSubm2.png', '0px', '0px']
                },
                {
                    id: 'icono8',
                    type: 'image',
                    rect: ['12px', '1px', '71px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icono82.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_btnSubm8}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_activo2}": [
                ["style", "top", '-19px'],
                ["style", "left", '-19px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '65px'],
                ["style", "width", '92px']
            ],
            "${_icono8}": [
                ["transform", "scaleX", '1'],
                ["style", "left", '12px'],
                ["transform", "scaleY", '1'],
                ["style", "top", '1px']
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
                "activo": 1000
            },
            timeline: [
                { id: "eid1689", tween: [ "transform", "${_icono8}", "scaleX", '0.7', { fromValue: '1'}], position: 0, duration: 1000 },
                { id: "eid1685", tween: [ "style", "${_activo2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1686", tween: [ "style", "${_activo2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1690", tween: [ "transform", "${_icono8}", "scaleY", '0.7', { fromValue: '1'}], position: 0, duration: 1000 }            ]
        }
    }
},
"btnSubmenu1_1": {
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
                    rect: ['-17px', '-20px', '130px', '105px', 'auto', 'auto'],
                    id: 'activo',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/activo2.png', '0px', '0px']
                },
                {
                    id: 'btnSubm',
                    type: 'image',
                    rect: ['0px', '0px', '92px', '65px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btnSubm2.png', '0px', '0px']
                },
                {
                    id: 'icono1',
                    type: 'image',
                    rect: ['19px', '0px', '61px', '53px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icono12.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '65px'],
                ["style", "width", '92px']
            ],
            "${_btnSubm}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_activo}": [
                ["style", "display", 'none'],
                ["style", "left", '-17px'],
                ["style", "top", '-20px']
            ],
            "${_icono1}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '19px'],
                ["transform", "scaleX", '1']
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
                "activo": 1000
            },
            timeline: [
                { id: "eid1631", tween: [ "transform", "${_icono1}", "scaleX", '0.7', { fromValue: '1'}], position: 0, duration: 1000 },
                { id: "eid1623", tween: [ "style", "${_activo}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1624", tween: [ "style", "${_activo}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1632", tween: [ "transform", "${_icono1}", "scaleY", '0.7', { fromValue: '1'}], position: 0, duration: 1000 }            ]
        }
    }
},
"over1": {
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
                    rect: ['2px', '26px', '126px', '60px', 'auto', 'auto'],
                    id: 'txtOver',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/txtOver2.png', '0px', '0px']
                },
                {
                    type: 'text',
                    rect: ['21px', '39px', 'auto', 'auto', 'auto', 'auto'],
                    align: 'justify',
                    id: 'Text',
                    text: 'Exercise A',
                    display: 'block',
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '700', 'none', '']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_txtOver}": [
                ["style", "top", '26px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '60px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '2px'],
                ["style", "width", '126px']
            ],
            "${_Text}": [
                ["style", "top", '39px'],
                ["style", "text-align", 'justify'],
                ["style", "opacity", '0'],
                ["style", "display", 'block'],
                ["style", "font-weight", '700'],
                ["style", "left", '21px'],
                ["style", "font-size", '18px']
            ],
            "${symbolSelector}": [
                ["style", "height", '82px'],
                ["style", "width", '126px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: false,
            labels: {
                "over": 1000,
                "out": 3000
            },
            timeline: [
                { id: "eid1380", tween: [ "style", "${_txtOver}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1484", tween: [ "style", "${_txtOver}", "opacity", '1', { fromValue: '0'}], position: 1136, duration: 250 },
                { id: "eid1485", tween: [ "style", "${_txtOver}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 250 },
                { id: "eid1478", tween: [ "transform", "${_txtOver}", "scaleY", '1', { fromValue: '0'}], position: 1136, duration: 250, easing: "easeOutQuad" },
                { id: "eid1479", tween: [ "transform", "${_txtOver}", "scaleY", '0', { fromValue: '1'}], position: 3250, duration: 250, easing: "easeOutQuad" },
                { id: "eid1699", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1698", tween: [ "style", "${_txtOver}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1379", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1476", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 1267, duration: 155 },
                { id: "eid1475", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 3286, duration: 149 }            ]
        }
    }
},
"btnSubmenu7_1": {
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
                    rect: ['-18px', '-19px', '130px', '105px', 'auto', 'auto'],
                    id: 'activo',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/activo2.png', '0px', '0px']
                },
                {
                    id: 'btnSubm7',
                    type: 'image',
                    rect: ['0px', '0px', '92px', '65px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btnSubm2.png', '0px', '0px']
                },
                {
                    id: 'icono7',
                    type: 'image',
                    rect: ['18px', '3px', '56px', '45px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icono32.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_icono7}": [
                ["transform", "scaleX", '1'],
                ["style", "left", '18px'],
                ["transform", "scaleY", '1'],
                ["style", "top", '3px']
            ],
            "${_btnSubm7}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '65px'],
                ["style", "width", '92px']
            ],
            "${_activo}": [
                ["style", "top", '-19px'],
                ["style", "left", '-18px'],
                ["style", "display", 'none']
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
                "activo": 1000
            },
            timeline: [
                { id: "eid1683", tween: [ "style", "${_activo}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1684", tween: [ "style", "${_activo}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1682", tween: [ "transform", "${_icono7}", "scaleY", '0.7', { fromValue: '1'}], position: 0, duration: 1000 },
                { id: "eid1681", tween: [ "transform", "${_icono7}", "scaleX", '0.7', { fromValue: '1'}], position: 0, duration: 1000 }            ]
        }
    }
},
"subMenu3": {
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
                    transform: [[0, 0], [], [], ['0.68999']],
                    id: 'barraSubmenuCopy2',
                    type: 'image',
                    rect: ['23px', '18px', '955px', '52px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/barraSubmenu3.png', '0px', '0px']
                },
                {
                    id: 'btnSubmenu1c',
                    type: 'rect',
                    rect: ['48px', '86px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'btnSubmenu2c',
                    rect: ['251px', '86px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'btnSubmenu3c',
                    rect: ['654px', '86px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'over1c',
                    rect: ['26', '-82', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'over2c',
                    rect: ['428px', '-87px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'over3c',
                    rect: ['677px', '-84px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'flecha3',
                    type: 'rect',
                    rect: ['-355px', '-344', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btnSubmenu3c',
                symbolName: 'btnSubmenu7_1',
                autoPlay: {

               }
            },
            {
                id: 'btnSubmenu1c',
                symbolName: 'btnSubmenu1_1',
                autoPlay: {

               }
            },
            {
                id: 'flecha3',
                symbolName: 'flecha',
                autoPlay: {

               }
            },
            {
                id: 'over3c',
                symbolName: 'over3',
                autoPlay: {

               }
            },
            {
                id: 'btnSubmenu2c',
                symbolName: 'btnSubmenu3_1',
                autoPlay: {

               }
            },
            {
                id: 'over2c',
                symbolName: 'over2',
                autoPlay: {

               }
            },
            {
                id: 'over1c',
                symbolName: 'over1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_over1c}": [
                ["style", "left", '186px'],
                ["style", "display", 'none']
            ],
            "${_flecha3}": [
                ["style", "top", '1px'],
                ["transform", "scaleY", '0.67532'],
                ["transform", "scaleX", '0.67532'],
                ["style", "opacity", '0'],
                ["style", "left", '33px']
            ],
            "${_over2c}": [
                ["style", "top", '-87px'],
                ["style", "left", '428px'],
                ["style", "display", 'none']
            ],
            "${_btnSubmenu3c}": [
                ["style", "top", '86px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '694px'],
                ["style", "display", 'none']
            ],
            "${_btnSubmenu2c}": [
                ["style", "top", '86px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '445px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '72px'],
                ["style", "width", '1000px']
            ],
            "${_over3c}": [
                ["style", "top", '-84px'],
                ["style", "left", '677px'],
                ["style", "display", 'none']
            ],
            "${_btnSubmenu1c}": [
                ["style", "top", '12px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '208px']
            ],
            "${_barraSubmenuCopy2}": [
                ["style", "top", '75px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '52px'],
                ["transform", "scaleX", '0.01064'],
                ["style", "left", '26px'],
                ["style", "width", '955px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2645,
            autoPlay: false,
            labels: {
                "fin": 2645
            },
            timeline: [
                { id: "eid1482", tween: [ "transform", "${_btnSubmenu2c}", "scaleY", '1', { fromValue: '0.5'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1911", tween: [ "transform", "${_btnSubmenu2c}", "scaleY", '1', { fromValue: '0.5'}], position: 1750, duration: 365, easing: "easeInQuad" },
                { id: "eid1883", tween: [ "style", "${_barraSubmenuCopy2}", "left", '-13px', { fromValue: '26px'}], position: 0, duration: 325, easing: "easeInQuad" },
                { id: "eid1884", tween: [ "style", "${_barraSubmenuCopy2}", "left", '0px', { fromValue: '-13px'}], position: 325, duration: 283, easing: "easeInQuad" },
                { id: "eid1885", tween: [ "style", "${_barraSubmenuCopy2}", "left", '24px', { fromValue: '0px'}], position: 919, duration: 773, easing: "easeInQuad" },
                { id: "eid1143", tween: [ "style", "${_btnSubmenu3c}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1921", tween: [ "style", "${_btnSubmenu3c}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeInQuad" },
                { id: "eid1880", tween: [ "style", "${_barraSubmenuCopy2}", "top", '20px', { fromValue: '75px'}], position: 0, duration: 325, easing: "easeInQuad" },
                { id: "eid1881", tween: [ "style", "${_barraSubmenuCopy2}", "top", '20px', { fromValue: '20px'}], position: 325, duration: 283, easing: "easeInQuad" },
                { id: "eid1882", tween: [ "style", "${_barraSubmenuCopy2}", "top", '21px', { fromValue: '20px'}], position: 919, duration: 773, easing: "easeInQuad" },
                { id: "eid1481", tween: [ "transform", "${_btnSubmenu2c}", "scaleX", '1', { fromValue: '0.5'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1909", tween: [ "transform", "${_btnSubmenu2c}", "scaleX", '1', { fromValue: '0.5'}], position: 1750, duration: 365, easing: "easeInQuad" },
                { id: "eid1892", tween: [ "transform", "${_btnSubmenu1c}", "scaleX", '1', { fromValue: '0.5'}], position: 1500, duration: 365, easing: "easeInQuad" },
                { id: "eid1586", tween: [ "transform", "${_btnSubmenu3c}", "scaleY", '1', { fromValue: '0.5'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1920", tween: [ "transform", "${_btnSubmenu3c}", "scaleY", '1', { fromValue: '0.5'}], position: 2000, duration: 365, easing: "easeInQuad" },
                { id: "eid1587", tween: [ "style", "${_btnSubmenu3c}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1922", tween: [ "style", "${_btnSubmenu3c}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 365, easing: "easeInQuad" },
                { id: "eid2148", tween: [ "style", "${_flecha3}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid1011", tween: [ "style", "${_over1c}", "left", '186px', { fromValue: '186px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1348", tween: [ "style", "${_over1c}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1349", tween: [ "style", "${_over1c}", "display", 'none', { fromValue: 'none'}], position: 1638, duration: 0, easing: "easeInQuad" },
                { id: "eid1979", tween: [ "style", "${_over1c}", "display", 'none', { fromValue: 'none'}], position: 2593, duration: 0, easing: "easeInQuad" },
                { id: "eid2340", tween: [ "style", "${_over3c}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid2338", tween: [ "style", "${_over3c}", "display", 'none', { fromValue: 'none'}], position: 2593, duration: 0, easing: "easeInQuad" },
                { id: "eid1015", tween: [ "style", "${_btnSubmenu2c}", "left", '445px', { fromValue: '445px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1585", tween: [ "transform", "${_btnSubmenu3c}", "scaleX", '1', { fromValue: '0.5'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1923", tween: [ "transform", "${_btnSubmenu3c}", "scaleX", '1', { fromValue: '0.5'}], position: 2000, duration: 365, easing: "easeInQuad" },
                { id: "eid1584", tween: [ "style", "${_btnSubmenu3c}", "top", '-4px', { fromValue: '86px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1919", tween: [ "style", "${_btnSubmenu3c}", "top", '-4px', { fromValue: '2px'}], position: 2000, duration: 365, easing: "easeInQuad" },
                { id: "eid1891", tween: [ "transform", "${_btnSubmenu1c}", "scaleY", '1', { fromValue: '0.5'}], position: 1500, duration: 365, easing: "easeInQuad" },
                { id: "eid1483", tween: [ "style", "${_btnSubmenu2c}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1910", tween: [ "style", "${_btnSubmenu2c}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 365, easing: "easeInQuad" },
                { id: "eid2341", tween: [ "style", "${_over2c}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid2339", tween: [ "style", "${_over2c}", "display", 'none', { fromValue: 'none'}], position: 2593, duration: 0, easing: "easeInQuad" },
                { id: "eid1886", tween: [ "style", "${_barraSubmenuCopy2}", "width", '1032px', { fromValue: '955px'}], position: 0, duration: 325, easing: "easeInQuad" },
                { id: "eid1887", tween: [ "style", "${_barraSubmenuCopy2}", "width", '1008px', { fromValue: '1032px'}], position: 325, duration: 283, easing: "easeInQuad" },
                { id: "eid1888", tween: [ "style", "${_barraSubmenuCopy2}", "width", '955px', { fromValue: '1008px'}], position: 919, duration: 773, easing: "easeInQuad" },
                { id: "eid1454", tween: [ "style", "${_btnSubmenu1c}", "left", '208px', { fromValue: '208px'}], position: 1500, duration: 0, easing: "easeInQuad" },
                { id: "eid1142", tween: [ "style", "${_btnSubmenu2c}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1913", tween: [ "style", "${_btnSubmenu2c}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0, easing: "easeInQuad" },
                { id: "eid1878", tween: [ "transform", "${_barraSubmenuCopy2}", "scaleX", '0.01', { fromValue: '0.01064'}], position: 0, duration: 325, easing: "easeInQuad" },
                { id: "eid1879", tween: [ "transform", "${_barraSubmenuCopy2}", "scaleX", '0.70302', { fromValue: '0.01'}], position: 919, duration: 773, easing: "easeInQuad" },
                { id: "eid1889", tween: [ "style", "${_btnSubmenu1c}", "top", '-4px', { fromValue: '12px'}], position: 1500, duration: 365, easing: "easeInQuad" },
                { id: "eid1480", tween: [ "style", "${_btnSubmenu2c}", "top", '-5px', { fromValue: '86px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1912", tween: [ "style", "${_btnSubmenu2c}", "top", '-5px', { fromValue: '1px'}], position: 1750, duration: 365, easing: "easeInQuad" },
                { id: "eid1890", tween: [ "style", "${_btnSubmenu1c}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 365, easing: "easeInQuad" }            ]
        }
    }
},
"mcJuegoPreguntasBoton42": {
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
                    rect: ['26px', '-14px', '814px', '370px', 'auto', 'auto'],
                    id: 'contenedor',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    id: 'BtnJuegoPreguntasAudio',
                    type: 'rect',
                    rect: ['1745', '17', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'audioBotonPlay2',
                    type: 'rect',
                    rect: ['165px', '47px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['600px', '292px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'escribirVerificar'
                }
            ],
            symbolInstances: [
            {
                id: 'audioBotonPlay2',
                symbolName: 'audioBoton2',
                autoPlay: {

               }
            },
            {
                id: 'BtnJuegoPreguntasAudio',
                symbolName: 'BotonesJuegoAudio',
                autoPlay: {

               }
            },
            {
                id: 'escribirVerificar',
                symbolName: 'escribirVerificar',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_escribirVerificar}": [
                ["style", "display", 'none'],
                ["style", "left", '600px'],
                ["style", "top", '292px']
            ],
            "${_audioBotonPlay2}": [
                ["style", "top", '157px'],
                ["style", "left", '643px']
            ],
            "${_contenedor}": [
                ["style", "top", '-14px'],
                ["style", "height", '370px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '26px'],
                ["style", "width", '814px']
            ],
            "${symbolSelector}": [
                ["style", "height", '430px'],
                ["style", "width", '834px']
            ],
            "${_BtnJuegoPreguntasAudio}": [
                ["style", "left", '124px'],
                ["style", "top", '170px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
                { id: "eid1194", tween: [ "style", "${_BtnJuegoPreguntasAudio}", "left", '124px', { fromValue: '124px'}], position: 0, duration: 0 },
                { id: "eid1196", tween: [ "style", "${_BtnJuegoPreguntasAudio}", "top", '170px', { fromValue: '170px'}], position: 0, duration: 0 },
                { id: "eid2436", tween: [ "style", "${_escribirVerificar}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"mcJuegoPreguntasBoton43": {
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
                    rect: ['26px', '-14px', '814px', '370px', 'auto', 'auto'],
                    id: 'contenedor',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    id: 'BtnJuegoPreguntasAudio',
                    type: 'rect',
                    rect: ['1745', '17', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'audioBotonPlay3',
                    type: 'rect',
                    rect: ['165px', '139px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['600px', '274px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'escribirVerificar'
                }
            ],
            symbolInstances: [
            {
                id: 'escribirVerificar',
                symbolName: 'escribirVerificar',
                autoPlay: {

               }
            },
            {
                id: 'BtnJuegoPreguntasAudio',
                symbolName: 'BotonesJuegoAudio',
                autoPlay: {

               }
            },
            {
                id: 'audioBotonPlay3',
                symbolName: 'audioBoton2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_escribirVerificar}": [
                ["style", "display", 'none'],
                ["style", "left", '600px'],
                ["style", "top", '274px']
            ],
            "${symbolSelector}": [
                ["style", "height", '430px'],
                ["style", "width", '834px']
            ],
            "${_audioBotonPlay3}": [
                ["style", "top", '139px'],
                ["style", "left", '643px']
            ],
            "${_contenedor}": [
                ["style", "top", '-14px'],
                ["style", "height", '370px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '26px'],
                ["style", "width", '814px']
            ],
            "${_BtnJuegoPreguntasAudio}": [
                ["style", "left", '124px'],
                ["style", "top", '146px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
                { id: "eid1202", tween: [ "style", "${_BtnJuegoPreguntasAudio}", "left", '124px', { fromValue: '124px'}], position: 0, duration: 0 },
                { id: "eid1207", tween: [ "style", "${_BtnJuegoPreguntasAudio}", "top", '146px', { fromValue: '146px'}], position: 0, duration: 0 },
                { id: "eid2435", tween: [ "style", "${_escribirVerificar}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"mcJuegoPreguntasBoton44": {
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
                    rect: ['26px', '-14px', '814px', '370px', 'auto', 'auto'],
                    id: 'contenedor',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    id: 'BtnJuegoPreguntasAudio',
                    type: 'rect',
                    rect: ['124px', '17', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'audioBotonPlay4',
                    type: 'rect',
                    rect: ['165px', '131px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['600px', '266px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'escribirVerificar'
                }
            ],
            symbolInstances: [
            {
                id: 'escribirVerificar',
                symbolName: 'escribirVerificar',
                autoPlay: {

               }
            },
            {
                id: 'BtnJuegoPreguntasAudio',
                symbolName: 'BotonesJuegoAudio',
                autoPlay: {

               }
            },
            {
                id: 'audioBotonPlay4',
                symbolName: 'audioBoton2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_escribirVerificar}": [
                ["style", "display", 'none'],
                ["style", "left", '600px'],
                ["style", "top", '266px']
            ],
            "${symbolSelector}": [
                ["style", "height", '430px'],
                ["style", "width", '834px']
            ],
            "${_contenedor}": [
                ["style", "top", '-14px'],
                ["style", "height", '370px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '26px'],
                ["style", "width", '814px']
            ],
            "${_audioBotonPlay4}": [
                ["style", "top", '131px'],
                ["style", "left", '643px']
            ],
            "${_BtnJuegoPreguntasAudio}": [
                ["style", "left", '124px'],
                ["style", "top", '151px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
                { id: "eid2434", tween: [ "style", "${_escribirVerificar}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"mcJuegoPreguntasBoton45": {
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
                    rect: ['26px', '-14px', '814px', '370px', 'auto', 'auto'],
                    id: 'contenedor',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    id: 'BtnJuegoPreguntasAudio',
                    type: 'rect',
                    rect: ['1745', '17', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'audioBotonPlay5',
                    type: 'rect',
                    rect: ['165px', '126px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['600px', '261px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'escribirVerificar'
                }
            ],
            symbolInstances: [
            {
                id: 'audioBotonPlay5',
                symbolName: 'audioBoton2',
                autoPlay: {

               }
            },
            {
                id: 'BtnJuegoPreguntasAudio',
                symbolName: 'BotonesJuegoAudio',
                autoPlay: {

               }
            },
            {
                id: 'escribirVerificar',
                symbolName: 'escribirVerificar',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_escribirVerificar}": [
                ["style", "display", 'none'],
                ["style", "left", '600px'],
                ["style", "top", '261px']
            ],
            "${_audioBotonPlay5}": [
                ["style", "top", '126px'],
                ["style", "left", '643px']
            ],
            "${symbolSelector}": [
                ["style", "height", '430px'],
                ["style", "width", '834px']
            ],
            "${_contenedor}": [
                ["style", "top", '-14px'],
                ["style", "height", '370px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '26px'],
                ["style", "width", '814px']
            ],
            "${_BtnJuegoPreguntasAudio}": [
                ["style", "left", '124px'],
                ["style", "top", '152px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
                { id: "eid1202", tween: [ "style", "${_BtnJuegoPreguntasAudio}", "left", '124px', { fromValue: '124px'}], position: 0, duration: 0 },
                { id: "eid1204", tween: [ "style", "${_BtnJuegoPreguntasAudio}", "top", '152px', { fromValue: '152px'}], position: 0, duration: 0 },
                { id: "eid2437", tween: [ "style", "${_escribirVerificar}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"mcRecuadroColision4": {
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
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '195px', '210px', 'auto', 'auto'],
                    fill: ['rgba(63,229,141,0.00)']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'BtnPlayCopy5',
                    rect: ['151px', '-40px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['-7px', '-55px', '165px', '227px', 'auto', 'auto'],
                    id: 'colisionesPronunciacionCopy23',
                    transform: [[0, 0], [], [], ['1', '1.16611']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/colisionesPronunciacion.png', '0px', '0px']
                },
                {
                    rect: ['17px', '-9px', '127px', '3px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRectCopy19',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(119,195,233,1.00)']
                },
                {
                    type: 'rect',
                    id: 'contenedorCopy20',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['19px', '-43px', '97px', '32px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    id: '_78',
                    type: 'image',
                    rect: ['55px', '-42px', '45px', '24px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/imagenes/78.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'BtnPlayCopy5',
                symbolName: 'BtnPlay',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_colisionesPronunciacionCopy23}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '1.16611'],
                ["style", "height", '227px'],
                ["style", "top", '-55px'],
                ["style", "left", '-7px'],
                ["style", "width", '165px']
            ],
            "${_BtnPlayCopy5}": [
                ["style", "top", '-40px'],
                ["style", "left", '151px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '210px'],
                ["style", "width", '148px']
            ],
            "${__78}": [
                ["style", "left", '55px'],
                ["style", "top", '-42px']
            ],
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["style", "height", '210px'],
                ["color", "background-color", 'rgba(63,229,141,0.00)'],
                ["style", "left", '0px'],
                ["style", "width", '195px']
            ],
            "${_RoundRectCopy19}": [
                ["style", "top", '-9px'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(119,195,233,1)'],
                ["style", "left", '17px'],
                ["style", "width", '127px']
            ],
            "${_contenedorCopy20}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '-43px'],
                ["style", "left", '19px'],
                ["style", "width", '97px']
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
                { id: "eid2180", tween: [ "style", "${_BtnPlayCopy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"mcRecuadroColision5": {
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
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '195px', '210px', 'auto', 'auto'],
                    fill: ['rgba(62,78,229,0.00)']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'BtnPlayCopy6',
                    rect: ['151px', '-40px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['-7px', '-55px', '165px', '227px', 'auto', 'auto'],
                    id: 'colisionesPronunciacionCopy24',
                    transform: [[0, 0], [], [], ['1', '1.16611']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/colisionesPronunciacion.png', '0px', '0px']
                },
                {
                    rect: ['17px', '-9px', '127px', '3px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRectCopy20',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(119,195,233,1.00)']
                },
                {
                    type: 'rect',
                    id: 'contenedorCopy21',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['19px', '-43px', '97px', '32px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    id: '_79Copy',
                    type: 'image',
                    rect: ['54px', '-41px', '44px', '24px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/imagenes/79.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'BtnPlayCopy6',
                symbolName: 'BtnPlay',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_BtnPlayCopy6}": [
                ["style", "top", '-40px'],
                ["style", "left", '151px'],
                ["style", "display", 'none']
            ],
            "${__79Copy}": [
                ["style", "left", '54px'],
                ["style", "top", '-41px']
            ],
            "${symbolSelector}": [
                ["style", "height", '210px'],
                ["style", "width", '149px']
            ],
            "${_colisionesPronunciacionCopy24}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '1.16611'],
                ["style", "height", '227px'],
                ["style", "top", '-55px'],
                ["style", "left", '-7px'],
                ["style", "width", '165px']
            ],
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["style", "height", '210px'],
                ["color", "background-color", 'rgba(62,78,229,0.00)'],
                ["style", "left", '0px'],
                ["style", "width", '195px']
            ],
            "${_RoundRectCopy20}": [
                ["style", "top", '-9px'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(119,195,233,1)'],
                ["style", "left", '17px'],
                ["style", "width", '127px']
            ],
            "${_contenedorCopy21}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '-43px'],
                ["style", "left", '19px'],
                ["style", "width", '97px']
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
                { id: "eid2179", tween: [ "style", "${_BtnPlayCopy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"mcRecuadroColision6": {
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
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '195px', '210px', 'auto', 'auto'],
                    fill: ['rgba(229,62,104,0.00)']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'BtnPlayCopy7',
                    rect: ['151px', '-40px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['-7px', '-55px', '165px', '227px', 'auto', 'auto'],
                    id: 'colisionesPronunciacionCopy25',
                    transform: [[0, 0], [], [], ['1', '1.16611']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/colisionesPronunciacion.png', '0px', '0px']
                },
                {
                    rect: ['17px', '-9px', '127px', '3px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRectCopy21',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(119,195,233,1.00)']
                },
                {
                    type: 'rect',
                    id: 'contenedorCopy22',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['19px', '-43px', '97px', '32px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    id: '_80Copy2',
                    type: 'image',
                    rect: ['49px', '-41px', '63px', '24px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/imagenes/80.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'BtnPlayCopy7',
                symbolName: 'BtnPlay',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_RoundRectCopy21}": [
                ["style", "top", '-9px'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(119,195,233,1)'],
                ["style", "left", '17px'],
                ["style", "width", '127px']
            ],
            "${_contenedorCopy22}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '-43px'],
                ["style", "left", '19px'],
                ["style", "width", '97px']
            ],
            "${symbolSelector}": [
                ["style", "height", '210px'],
                ["style", "width", '148px']
            ],
            "${_colisionesPronunciacionCopy25}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '1.16611'],
                ["style", "height", '227px'],
                ["style", "top", '-55px'],
                ["style", "left", '-7px'],
                ["style", "width", '165px']
            ],
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["style", "height", '210px'],
                ["color", "background-color", 'rgba(229,62,104,0.00)'],
                ["style", "left", '0px'],
                ["style", "width", '195px']
            ],
            "${__80Copy2}": [
                ["style", "top", '-41px'],
                ["style", "left", '49px']
            ],
            "${_BtnPlayCopy7}": [
                ["style", "top", '-40px'],
                ["style", "left", '151px'],
                ["style", "display", 'none']
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
                { id: "eid2178", tween: [ "style", "${_BtnPlayCopy7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"mcRecuadroColision7": {
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
                    display: 'none',
                    type: 'rect',
                    id: 'BtnPlayCopy8',
                    rect: ['151px', '-40px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['-7px', '-55px', '165px', '227px', 'auto', 'auto'],
                    id: 'colisionesPronunciacionCopy26',
                    transform: [[0, 0], [], [], ['1', '1.16611']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/colisionesPronunciacion.png', '0px', '0px']
                },
                {
                    rect: ['17px', '-9px', '127px', '3px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRectCopy22',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(119,195,233,1.00)']
                },
                {
                    type: 'rect',
                    id: 'contenedorCopy23',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['19px', '-43px', '97px', '32px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    id: '_81Copy3',
                    type: 'image',
                    rect: ['43px', '-42px', '65px', '24px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/imagenes/81.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'BtnPlayCopy8',
                symbolName: 'BtnPlay',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_BtnPlayCopy8}": [
                ["style", "top", '-40px'],
                ["style", "left", '151px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '210px'],
                ["style", "width", '148px']
            ],
            "${_colisionesPronunciacionCopy26}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '1.16611'],
                ["style", "height", '227px'],
                ["style", "top", '-55px'],
                ["style", "left", '-7px'],
                ["style", "width", '165px']
            ],
            "${__81Copy3}": [
                ["style", "left", '43px'],
                ["style", "top", '-42px']
            ],
            "${_RoundRectCopy22}": [
                ["style", "top", '-9px'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(119,195,233,1)'],
                ["style", "left", '17px'],
                ["style", "width", '127px']
            ],
            "${_contenedorCopy23}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '-43px'],
                ["style", "left", '19px'],
                ["style", "width", '97px']
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
                { id: "eid2177", tween: [ "style", "${_BtnPlayCopy8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"mcRecuadroColision1a": {
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
                    type: 'rect',
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    rect: ['0px', '0px', '277px', '192px', 'auto', 'auto'],
                    id: 'RoundRect',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'block',
                    fill: ['rgba(163,158,239,0.00)']
                },
                {
                    rect: ['16px', '168px', '36px', '24px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    display: 'none',
                    id: 'Text2Copy',
                    text: '3',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['-7px', '-55px', '165px', '227px', 'auto', 'auto'],
                    id: 'colisionesPronunciacionCopy17',
                    transform: [[0, 0], [], [], ['1', '1.16611']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/colisionesPronunciacion.png', '0px', '0px']
                },
                {
                    rect: ['17px', '-9px', '127px', '3px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRectCopy13',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(119,195,233,1.00)']
                },
                {
                    id: 'BtnPlay0',
                    type: 'rect',
                    rect: ['118px', '-43px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    id: 'contenedor',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['57px', '-35px', '33px', '32px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'BtnPlay0',
                symbolName: 'BtnPlay',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_colisionesPronunciacionCopy17}": [
                ["style", "top", '-55px'],
                ["transform", "scaleY", '1.16611'],
                ["style", "height", '227px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-7px'],
                ["style", "width", '165px']
            ],
            "${_Text2Copy}": [
                ["style", "top", '168px'],
                ["style", "display", 'none']
            ],
            "${_RoundRectCopy13}": [
                ["style", "top", '-9px'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(119,195,233,1)'],
                ["style", "left", '17px'],
                ["style", "width", '127px']
            ],
            "${_BtnPlay0}": [
                ["style", "left", '118px'],
                ["style", "top", '-43px']
            ],
            "${_contenedor}": [
                ["style", "top", '-35px'],
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "left", '57px'],
                ["style", "width", '33px']
            ],
            "${symbolSelector}": [
                ["style", "height", '247px'],
                ["style", "width", '149px']
            ],
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(163,158,239,0.00)'],
                ["style", "display", 'block'],
                ["style", "height", '252px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '252px']
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
                { id: "eid1218", tween: [ "style", "${_RoundRect}", "width", '252px', { fromValue: '252px'}], position: 0, duration: 0 },
                { id: "eid1220", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(163,158,239,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(163,158,239,0.00)'}], position: 0, duration: 0 },
                { id: "eid1214", tween: [ "style", "${_Text2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1221", tween: [ "style", "${_RoundRect}", "height", '252px', { fromValue: '252px'}], position: 0, duration: 0 },
                { id: "eid1213", tween: [ "style", "${_RoundRect}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"mcRecuadroColision2a": {
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
                    rect: ['0px', '0px', '169px', '192px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRect',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(223,232,84,0.00)']
                },
                {
                    rect: ['17px', '167px', '36px', '24px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    display: 'none',
                    id: 'Text2',
                    text: '2',
                    align: 'center',
                    type: 'text'
                },
                {
                    type: 'ellipse',
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    rect: ['10px', '141px', '47px', '53px', 'auto', 'auto'],
                    id: 'Ellipse2Copy2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'none',
                    fill: ['rgba(106,221,127,1.00)']
                },
                {
                    rect: ['-7px', '-55px', '165px', '227px', 'auto', 'auto'],
                    id: 'colisionesPronunciacionCopy18',
                    transform: [[0, 0], [], [], ['1', '1.16611']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/colisionesPronunciacion.png', '0px', '0px']
                },
                {
                    rect: ['17px', '-9px', '127px', '3px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRectCopy14',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(119,195,233,1.00)']
                },
                {
                    id: 'BtnPlay1',
                    type: 'rect',
                    rect: ['118px', '-43px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    id: 'contenedor',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['64px', '-37px', '31px', '32px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'BtnPlay1',
                symbolName: 'BtnPlay',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Ellipse2Copy2}": [
                ["color", "background-color", 'rgba(106,221,127,1.00)'],
                ["style", "display", 'none'],
                ["style", "left", '10px'],
                ["style", "top", '141px']
            ],
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(223,232,84,0.00)'],
                ["style", "height", '192px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '169px']
            ],
            "${_colisionesPronunciacionCopy18}": [
                ["style", "top", '-55px'],
                ["transform", "scaleY", '1.16611'],
                ["style", "height", '227px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-7px'],
                ["style", "width", '165px']
            ],
            "${_RoundRectCopy14}": [
                ["style", "top", '-9px'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(119,195,233,1)'],
                ["style", "left", '17px'],
                ["style", "width", '127px']
            ],
            "${_BtnPlay1}": [
                ["style", "left", '118px'],
                ["style", "top", '-43px']
            ],
            "${_contenedor}": [
                ["style", "top", '-37px'],
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "left", '64px'],
                ["style", "width", '31px']
            ],
            "${_Text2}": [
                ["style", "top", '167px'],
                ["style", "left", '17px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '247px'],
                ["style", "width", '149px']
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
                { id: "eid1215", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2181", tween: [ "style", "${_Ellipse2Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"mcRecuadroColision3a": {
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
                    rect: ['0px', '0px', '152px', '252px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRect',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(63,229,141,0.00)']
                },
                {
                    type: 'rect',
                    id: 'contenedorCopy19',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['19px', '-43px', '97px', '32px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    rect: ['19px', '156px', '36px', '24px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    display: 'none',
                    id: 'Text2',
                    text: '1',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['-7px', '-55px', '165px', '227px', 'auto', 'auto'],
                    id: 'colisionesPronunciacionCopy28',
                    transform: [[0, 0], [], [], ['1', '1.16611']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/colisionesPronunciacion.png', '0px', '0px']
                },
                {
                    rect: ['17px', '-9px', '127px', '3px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRectCopy24',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(119,195,233,1.00)']
                },
                {
                    id: 'BtnPlay2',
                    type: 'rect',
                    rect: ['118px', '-43px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    id: 'contenedor',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['62px', '-33px', '35px', '32px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'BtnPlay2',
                symbolName: 'BtnPlay',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_contenedorCopy19}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '-43px'],
                ["style", "left", '19px'],
                ["style", "width", '97px']
            ],
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(63,229,141,0.00)'],
                ["style", "height", '252px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '152px']
            ],
            "${_colisionesPronunciacionCopy28}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '1.16611'],
                ["style", "height", '227px'],
                ["style", "top", '-55px'],
                ["style", "left", '-7px'],
                ["style", "width", '165px']
            ],
            "${_RoundRectCopy24}": [
                ["style", "top", '-9px'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(119,195,233,1)'],
                ["style", "left", '17px'],
                ["style", "width", '127px']
            ],
            "${_BtnPlay2}": [
                ["style", "left", '118px'],
                ["style", "top", '-43px']
            ],
            "${_contenedor}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '-33px'],
                ["style", "left", '62px'],
                ["style", "width", '35px']
            ],
            "${_Text2}": [
                ["style", "top", '156px'],
                ["style", "left", '19px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '252px'],
                ["style", "width", '152px']
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
                { id: "eid1216", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"mcGato1": {
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
                    id: 'ColaGato1',
                    type: 'image',
                    rect: ['69px', '34px', '55px', '56px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ColaGato1.png', '0px', '0px']
                },
                {
                    id: 'CuerpoGato1',
                    type: 'image',
                    rect: ['0px', '13px', '88px', '97px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/CuerpoGato1.png', '0px', '0px']
                },
                {
                    id: 'mcCabezaGato',
                    type: 'rect',
                    rect: ['17', '-4', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'mcCabezaGato',
                symbolName: 'mcCabezaGato',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_mcCabezaGato}": [
                ["transform", "rotateZ", '0deg']
            ],
            "${_CuerpoGato1}": [
                ["style", "left", '0px'],
                ["style", "top", '13px']
            ],
            "${_ColaGato1}": [
                ["style", "top", '34px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "height", '56px'],
                ["style", "left", '69px'],
                ["style", "width", '55px']
            ],
            "${symbolSelector}": [
                ["style", "height", '110px'],
                ["style", "width", '124px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
                { id: "eid1591", tween: [ "style", "${_ColaGato1}", "width", '55px', { fromValue: '55px'}], position: 0, duration: 0 },
                { id: "eid1589", tween: [ "style", "${_ColaGato1}", "width", '55px', { fromValue: '55px'}], position: 1000, duration: 0 },
                { id: "eid1601", tween: [ "style", "${_ColaGato1}", "top", '33px', { fromValue: '34px'}], position: 0, duration: 1000 },
                { id: "eid1609", tween: [ "style", "${_ColaGato1}", "top", '34px', { fromValue: '33px'}], position: 1000, duration: 1000 },
                { id: "eid1618", tween: [ "style", "${_ColaGato1}", "top", '33px', { fromValue: '34px'}], position: 2000, duration: 1000 },
                { id: "eid1625", tween: [ "style", "${_ColaGato1}", "top", '34px', { fromValue: '33px'}], position: 3000, duration: 1000 },
                { id: "eid1581", tween: [ "transform", "${_ColaGato1}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid1596", tween: [ "transform", "${_ColaGato1}", "scaleX", '1', { fromValue: '1'}], position: 1000, duration: 0 },
                { id: "eid1580", tween: [ "transform", "${_ColaGato1}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid1595", tween: [ "transform", "${_ColaGato1}", "scaleY", '1', { fromValue: '1'}], position: 1000, duration: 0 },
                { id: "eid1565", tween: [ "transform", "${_mcCabezaGato}", "rotateZ", '-7deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid1567", tween: [ "transform", "${_mcCabezaGato}", "rotateZ", '0deg', { fromValue: '-7deg'}], position: 1000, duration: 1000 },
                { id: "eid1569", tween: [ "transform", "${_mcCabezaGato}", "rotateZ", '7deg', { fromValue: '0deg'}], position: 2000, duration: 1000 },
                { id: "eid1571", tween: [ "transform", "${_mcCabezaGato}", "rotateZ", '0deg', { fromValue: '7deg'}], position: 3000, duration: 1000 },
                { id: "eid1600", tween: [ "style", "${_ColaGato1}", "left", '64px', { fromValue: '69px'}], position: 0, duration: 1000 },
                { id: "eid1608", tween: [ "style", "${_ColaGato1}", "left", '69px', { fromValue: '64px'}], position: 1000, duration: 1000 },
                { id: "eid1617", tween: [ "style", "${_ColaGato1}", "left", '64px', { fromValue: '69px'}], position: 2000, duration: 1000 },
                { id: "eid1616", tween: [ "style", "${_ColaGato1}", "left", '69px', { fromValue: '64px'}], position: 3000, duration: 1000 },
                { id: "eid1590", tween: [ "style", "${_ColaGato1}", "height", '56px', { fromValue: '56px'}], position: 0, duration: 0 },
                { id: "eid1588", tween: [ "style", "${_ColaGato1}", "height", '56px', { fromValue: '56px'}], position: 1000, duration: 0 },
                { id: "eid1597", tween: [ "transform", "${_ColaGato1}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid1599", tween: [ "transform", "${_ColaGato1}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 1000, duration: 1000 },
                { id: "eid1627", tween: [ "transform", "${_ColaGato1}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 2000, duration: 1000 },
                { id: "eid1626", tween: [ "transform", "${_ColaGato1}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 3000, duration: 1000 }            ]
        }
    }
},
"mcCabezaGato": {
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
                    id: 'CabezaGato1',
                    type: 'image',
                    rect: ['3px', '0px', '40px', '41px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/CabezaGato1.png', '0px', '0px']
                },
                {
                    id: 'vigotes2Gato1',
                    type: 'image',
                    rect: ['23px', '22px', '24px', '28px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/vigotes2Gato1.png', '0px', '0px']
                },
                {
                    id: 'vigotesGato1',
                    type: 'image',
                    rect: ['-1px', '22px', '24px', '28px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/vigotesGato1.png', '0px', '0px']
                },
                {
                    id: 'bocaGato1',
                    type: 'image',
                    rect: ['15px', '17px', '15px', '22px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bocaGato1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bocaGato1}": [
                ["style", "left", '15px'],
                ["style", "top", '17px']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '46px']
            ],
            "${_CabezaGato1}": [
                ["style", "top", '0px'],
                ["style", "left", '3px']
            ],
            "${_vigotes2Gato1}": [
                ["style", "top", '22px'],
                ["style", "left", '22px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_vigotesGato1}": [
                ["style", "top", '20px'],
                ["style", "left", '-2px'],
                ["transform", "rotateZ", '13deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid1547", tween: [ "style", "${_vigotesGato1}", "left", '0px', { fromValue: '-2px'}], position: 0, duration: 1000 },
                { id: "eid1557", tween: [ "style", "${_vigotesGato1}", "left", '-2px', { fromValue: '0px'}], position: 1000, duration: 1000 },
                { id: "eid1549", tween: [ "transform", "${_vigotesGato1}", "rotateZ", '0deg', { fromValue: '13deg'}], position: 0, duration: 1000 },
                { id: "eid1562", tween: [ "transform", "${_vigotesGato1}", "rotateZ", '13deg', { fromValue: '0deg'}], position: 1000, duration: 1000 },
                { id: "eid1536", tween: [ "transform", "${_vigotes2Gato1}", "rotateZ", '-14deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid1555", tween: [ "transform", "${_vigotes2Gato1}", "rotateZ", '0deg', { fromValue: '-14deg'}], position: 1000, duration: 1000 },
                { id: "eid1545", tween: [ "style", "${_vigotesGato1}", "top", '22px', { fromValue: '20px'}], position: 0, duration: 1000 },
                { id: "eid1556", tween: [ "style", "${_vigotesGato1}", "top", '20px', { fromValue: '22px'}], position: 1000, duration: 1000 },
                { id: "eid1540", tween: [ "style", "${_vigotes2Gato1}", "top", '20px', { fromValue: '22px'}], position: 0, duration: 1000 },
                { id: "eid1553", tween: [ "style", "${_vigotes2Gato1}", "top", '22px', { fromValue: '20px'}], position: 1000, duration: 1000 },
                { id: "eid1539", tween: [ "style", "${_vigotes2Gato1}", "left", '24px', { fromValue: '22px'}], position: 0, duration: 1000 },
                { id: "eid1554", tween: [ "style", "${_vigotes2Gato1}", "left", '22px', { fromValue: '24px'}], position: 1000, duration: 1000 }            ]
        }
    }
},
"mcGato2": {
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
                    id: 'ColaGato2',
                    type: 'image',
                    rect: ['56px', '57px', '47px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ColaGato2.png', '0px', '0px']
                },
                {
                    id: 'Cuerpo2Gato2',
                    type: 'image',
                    rect: ['0px', '21px', '80px', '98px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Cuerpo2Gato2.png', '0px', '0px']
                },
                {
                    id: 'Pata1Gato2',
                    type: 'image',
                    rect: ['9px', '49px', '31px', '66px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Pata1Gato2.png', '0px', '0px']
                },
                {
                    id: 'cabeza2Gato',
                    type: 'image',
                    rect: ['5px', '2px', '45px', '41px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cabeza2Gato.png', '0px', '0px']
                },
                {
                    id: 'Pata2Gato2',
                    type: 'image',
                    rect: ['20px', '70px', '60px', '49px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Pata2Gato2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Pata1Gato2}": [
                ["style", "left", '9px'],
                ["style", "top", '49px']
            ],
            "${_Cuerpo2Gato2}": [
                ["style", "left", '0px'],
                ["style", "top", '21px']
            ],
            "${_ColaGato2}": [
                ["style", "top", '57px'],
                ["style", "left", '56px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Pata2Gato2}": [
                ["style", "left", '20px'],
                ["style", "top", '70px']
            ],
            "${_cabeza2Gato}": [
                ["style", "top", '2px'],
                ["style", "left", '5px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '119px'],
                ["style", "width", '103px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
                { id: "eid1635", tween: [ "transform", "${_cabeza2Gato}", "rotateZ", '-5deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid1637", tween: [ "transform", "${_cabeza2Gato}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 1000, duration: 1000 },
                { id: "eid1639", tween: [ "transform", "${_cabeza2Gato}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 2000, duration: 1000 },
                { id: "eid1645", tween: [ "transform", "${_cabeza2Gato}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 3000, duration: 1000 },
                { id: "eid1648", tween: [ "transform", "${_ColaGato2}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid1650", tween: [ "transform", "${_ColaGato2}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 1000, duration: 1000 },
                { id: "eid1656", tween: [ "transform", "${_ColaGato2}", "rotateZ", '-4deg', { fromValue: '0deg'}], position: 2000, duration: 1000 },
                { id: "eid1658", tween: [ "transform", "${_ColaGato2}", "rotateZ", '0deg', { fromValue: '-4deg'}], position: 3000, duration: 1000 }            ]
        }
    }
},
"mcPersonaje2": {
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
                    id: 'Mano2Personaje',
                    type: 'image',
                    rect: ['90px', '62px', '44px', '61px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Mano2Personaje.png', '0px', '0px']
                },
                {
                    id: 'CuerpoPersonaje2',
                    type: 'image',
                    rect: ['0px', '38px', '279px', '228px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/CuerpoPersonaje2.png', '0px', '0px']
                },
                {
                    id: 'Cabeza2Personaje2',
                    type: 'image',
                    rect: ['28px', '0px', '70px', '64px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Cabeza2Personaje.png', '0px', '0px']
                },
                {
                    id: 'ManosPersonajes2',
                    type: 'image',
                    rect: ['11px', '45px', '192px', '108px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ManosPersonajes2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Mano2Personaje}": [
                ["style", "left", '90px'],
                ["style", "top", '62px']
            ],
            "${symbolSelector}": [
                ["style", "height", '281px'],
                ["style", "width", '279px']
            ],
            "${_Cabeza2Personaje2}": [
                ["style", "top", '0px'],
                ["style", "left", '28px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_ManosPersonajes2}": [
                ["style", "top", '53px'],
                ["style", "left", '10px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_CuerpoPersonaje2}": [
                ["style", "top", '38px'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
                { id: "eid1738", tween: [ "transform", "${_Cabeza2Personaje2}", "rotateZ", '-6deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid1742", tween: [ "transform", "${_Cabeza2Personaje2}", "rotateZ", '0deg', { fromValue: '-6deg'}], position: 1000, duration: 1000 },
                { id: "eid1752", tween: [ "transform", "${_Cabeza2Personaje2}", "rotateZ", '-6deg', { fromValue: '0deg'}], position: 2000, duration: 1000 },
                { id: "eid1751", tween: [ "transform", "${_Cabeza2Personaje2}", "rotateZ", '0deg', { fromValue: '-6deg'}], position: 3000, duration: 1000 },
                { id: "eid1744", tween: [ "style", "${_Cabeza2Personaje2}", "left", '25px', { fromValue: '28px'}], position: 0, duration: 1000 },
                { id: "eid1743", tween: [ "style", "${_Cabeza2Personaje2}", "left", '28px', { fromValue: '25px'}], position: 1000, duration: 1000 },
                { id: "eid1750", tween: [ "style", "${_Cabeza2Personaje2}", "left", '25px', { fromValue: '28px'}], position: 2000, duration: 1000 },
                { id: "eid1749", tween: [ "style", "${_Cabeza2Personaje2}", "left", '28px', { fromValue: '25px'}], position: 3000, duration: 1000 },
                { id: "eid1693", tween: [ "transform", "${_ManosPersonajes2}", "rotateZ", '-7deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid1757", tween: [ "transform", "${_ManosPersonajes2}", "rotateZ", '0deg', { fromValue: '-7deg'}], position: 1000, duration: 1000 },
                { id: "eid1735", tween: [ "style", "${_ManosPersonajes2}", "top", '45px', { fromValue: '53px'}], position: 0, duration: 1000 },
                { id: "eid1756", tween: [ "style", "${_ManosPersonajes2}", "top", '53px', { fromValue: '45px'}], position: 1000, duration: 1000 },
                { id: "eid1736", tween: [ "style", "${_ManosPersonajes2}", "left", '10px', { fromValue: '10px'}], position: 0, duration: 0 },
                { id: "eid1754", tween: [ "style", "${_ManosPersonajes2}", "left", '10px', { fromValue: '10px'}], position: 1000, duration: 0 }            ]
        }
    }
},
"mcPersonaje3": {
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
                    id: 'ManoPersonaje3',
                    type: 'image',
                    rect: ['139px', '75px', '119px', '158px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ManoPersonaje3.png', '0px', '0px']
                },
                {
                    id: 'PersonajePersonaje3',
                    type: 'image',
                    rect: ['0px', '46px', '338px', '327px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/PersonajePersonaje3.png', '0px', '0px']
                },
                {
                    id: 'Mano1Personaje3',
                    type: 'image',
                    rect: ['222px', '87px', '120px', '180px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Mano1Personaje3.png', '0px', '0px']
                },
                {
                    id: 'CabezaPersonaje3',
                    type: 'image',
                    rect: ['234px', '-4px', '81px', '92px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/CabezaPersonaje3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ManoPersonaje3}": [
                ["style", "top", '73px'],
                ["style", "left", '139px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_CabezaPersonaje3}": [
                ["style", "top", '-4px'],
                ["style", "left", '234px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '373px'],
                ["style", "width", '348px']
            ],
            "${_Mano1Personaje3}": [
                ["style", "top", '87px'],
                ["style", "left", '222px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_PersonajePersonaje3}": [
                ["style", "left", '0px'],
                ["style", "top", '46px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            timeline: [
                { id: "eid1778", tween: [ "style", "${_ManoPersonaje3}", "top", '80px', { fromValue: '73px'}], position: 0, duration: 1000 },
                { id: "eid1784", tween: [ "style", "${_ManoPersonaje3}", "top", '73px', { fromValue: '80px'}], position: 1000, duration: 1000 },
                { id: "eid1790", tween: [ "transform", "${_CabezaPersonaje3}", "rotateZ", '-4deg', { fromValue: '0deg'}], position: 0, duration: 750 },
                { id: "eid1791", tween: [ "transform", "${_CabezaPersonaje3}", "rotateZ", '0deg', { fromValue: '-4deg'}], position: 750, duration: 750 },
                { id: "eid1792", tween: [ "transform", "${_CabezaPersonaje3}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 1500, duration: 750 },
                { id: "eid1794", tween: [ "transform", "${_CabezaPersonaje3}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 2250, duration: 750 },
                { id: "eid1774", tween: [ "transform", "${_ManoPersonaje3}", "rotateZ", '-4deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid1786", tween: [ "transform", "${_ManoPersonaje3}", "rotateZ", '0deg', { fromValue: '-4deg'}], position: 1000, duration: 1000 },
                { id: "eid1777", tween: [ "style", "${_ManoPersonaje3}", "left", '140px', { fromValue: '139px'}], position: 0, duration: 1000 },
                { id: "eid1785", tween: [ "style", "${_ManoPersonaje3}", "left", '139px', { fromValue: '140px'}], position: 1000, duration: 1000 },
                { id: "eid1770", tween: [ "transform", "${_Mano1Personaje3}", "rotateZ", '6deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid1788", tween: [ "transform", "${_Mano1Personaje3}", "rotateZ", '0deg', { fromValue: '6deg'}], position: 1000, duration: 1000 },
                { id: "eid1773", tween: [ "style", "${_Mano1Personaje3}", "left", '218px', { fromValue: '222px'}], position: 0, duration: 1000 },
                { id: "eid1787", tween: [ "style", "${_Mano1Personaje3}", "left", '222px', { fromValue: '218px'}], position: 1000, duration: 1000 }            ]
        }
    }
},
"mcGlobo2": {
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
                    rect: ['-419px', '44px', '215px', '155px', 'auto', 'auto'],
                    id: 'globoCopy',
                    fill: ['rgba(0,0,0,0)', 'images/globo.png', '0px', '0px']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    type: 'text',
                    display: 'block',
                    id: 'TextCopy',
                    text: 'To see the contents, click on the top menu.',
                    align: 'center',
                    rect: ['-406px', '91px', '191px', '50px', 'auto', 'auto']
                },
                {
                    id: 'flechaCopy2',
                    type: 'rect',
                    rect: ['-355px', '-344', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'flechaCopy2',
                symbolName: 'flecha'
            }            ]
        },
    states: {
        "Base State": {
            "${_globoCopy}": [
                ["style", "top", '0px'],
                ["transform", "scaleX", '-0.98653'],
                ["style", "display", 'block'],
                ["style", "height", '155px'],
                ["style", "left", '-1px'],
                ["style", "width", '215px']
            ],
            "${_flechaCopy2}": [
                ["style", "top", '-164px'],
                ["style", "opacity", '1'],
                ["style", "left", '-467px']
            ],
            "${_TextCopy}": [
                ["style", "top", '47px'],
                ["style", "font-size", '18px'],
                ["style", "text-align", 'center'],
                ["style", "height", '50px'],
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "left", '12px'],
                ["style", "width", '191px']
            ],
            "${symbolSelector}": [
                ["style", "height", '155px'],
                ["style", "width", '212px']
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
                { id: "eid1865", tween: [ "style", "${_flechaCopy2}", "top", '-164px', { fromValue: '-164px'}], position: 0, duration: 0 },
                { id: "eid1799", tween: [ "style", "${_TextCopy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1801", tween: [ "style", "${_globoCopy}", "top", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
                { id: "eid1804", tween: [ "transform", "${_globoCopy}", "scaleX", '-0.98653', { fromValue: '-0.98653'}], position: 1000, duration: 0 },
                { id: "eid1866", tween: [ "style", "${_flechaCopy2}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid1802", tween: [ "style", "${_TextCopy}", "left", '12px', { fromValue: '12px'}], position: 1000, duration: 0 },
                { id: "eid1800", tween: [ "style", "${_globoCopy}", "left", '-1px', { fromValue: '-1px'}], position: 1000, duration: 0 },
                { id: "eid1803", tween: [ "style", "${_TextCopy}", "top", '47px', { fromValue: '47px'}], position: 1000, duration: 0 },
                { id: "eid1798", tween: [ "style", "${_globoCopy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1864", tween: [ "style", "${_flechaCopy2}", "left", '-467px', { fromValue: '-467px'}], position: 0, duration: 0 }            ]
        }
    }
},
"mcEscena2": {
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
                    id: 'Escena2',
                    type: 'image',
                    rect: ['0px', '0px', '1000px', '640px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Escena2.png', '0px', '0px']
                },
                {
                    id: 'mcGato2',
                    type: 'rect',
                    rect: ['1179px', '153px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'mcPersonaje3',
                    type: 'rect',
                    rect: ['989px', '161px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'mcGlobo2',
                    type: 'rect',
                    rect: ['597px', '179px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'mcGato2',
                symbolName: 'mcGato2',
                autoPlay: {

               }
            },
            {
                id: 'mcGlobo2',
                symbolName: 'mcGlobo2',
                autoPlay: {

               }
            },
            {
                id: 'mcPersonaje3',
                symbolName: 'mcPersonaje3',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_mcPersonaje3}": [
                ["style", "top", '295px'],
                ["style", "left", '536px']
            ],
            "${_Escena2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_mcGlobo2}": [
                ["style", "top", '179px'],
                ["style", "opacity", '0'],
                ["style", "left", '597px']
            ],
            "${symbolSelector}": [
                ["style", "height", '668px'],
                ["style", "width", '1000px']
            ],
            "${_mcGato2}": [
                ["style", "top", '492px'],
                ["style", "left", '80px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"mcEscena3": {
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
                    id: 'Escena3',
                    type: 'image',
                    rect: ['0px', '0px', '1000px', '640px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Escena3.png', '0px', '0px']
                },
                {
                    id: 'mcGato1',
                    type: 'rect',
                    rect: ['650px', '449px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'mcPersonaje2',
                    type: 'rect',
                    rect: ['1315px', '153px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'mcGlobo3',
                    type: 'rect',
                    rect: ['178', '223', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'creative',
                    type: 'rect',
                    rect: ['844px', '573px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'creative',
                symbolName: 'creative'
            },
            {
                id: 'mcGato1',
                symbolName: 'mcGato1',
                autoPlay: {

               }
            },
            {
                id: 'mcPersonaje2',
                symbolName: 'mcPersonaje2',
                autoPlay: {

               }
            },
            {
                id: 'mcGlobo3',
                symbolName: 'mcGlobo3',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_mcGlobo3}": [
                ["style", "opacity", '0.000000']
            ],
            "${_mcGato1}": [
                ["style", "left", '632px'],
                ["style", "top", '449px']
            ],
            "${symbolSelector}": [
                ["style", "height", '640px'],
                ["style", "width", '1000px']
            ],
            "${_Escena3}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_mcPersonaje2}": [
                ["style", "top", '351px'],
                ["style", "left", '114px']
            ],
            "${_creative}": [
                ["style", "left", '844px'],
                ["style", "top", '573px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"mcGlobo3": {
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
                    rect: ['0px', '0px', '215px', '155px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/globo.png', '0px', '0px']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    type: 'text',
                    id: 'Text',
                    text: 'To see the contents, click on the top menu.',
                    align: 'center',
                    rect: ['13px', '47px', '191px', '50px', 'auto', 'auto']
                },
                {
                    id: 'flechaCopy3',
                    type: 'rect',
                    rect: ['-355px', '-344', 'auto', 'auto', 'auto', 'auto'],
                    opacity: 1
                }
            ],
            symbolInstances: [
            {
                id: 'flechaCopy3',
                symbolName: 'flecha',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_flechaCopy3}": [
                ["style", "top", '-201px'],
                ["style", "opacity", '1'],
                ["style", "left", '-63px']
            ],
            "${_globo}": [
                ["style", "top", '0px'],
                ["style", "height", '155px'],
                ["style", "left", '0px'],
                ["style", "width", '215px']
            ],
            "${_Text}": [
                ["style", "top", '47px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '18px'],
                ["style", "height", '50px'],
                ["style", "opacity", '1'],
                ["style", "left", '13px'],
                ["style", "width", '191px']
            ],
            "${symbolSelector}": [
                ["style", "height", '155px'],
                ["style", "width", '215px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: false,
            timeline: [
                { id: "eid1870", tween: [ "style", "${_flechaCopy3}", "left", '-63px', { fromValue: '-63px'}], position: 2000, duration: 0 },
                { id: "eid1871", tween: [ "style", "${_flechaCopy3}", "left", '134px', { fromValue: '134px'}], position: 3000, duration: 0 },
                { id: "eid1868", tween: [ "style", "${_flechaCopy3}", "top", '7px', { fromValue: '-201px'}], position: 3000, duration: 0 }            ]
        }
    }
},
"mcRecuadroPronun": {
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
                    id: 'recuadroArrastrar',
                    type: 'image',
                    rect: ['0px', '-1px', '143px', '45px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/recuadroArrastrar.png', '0px', '0px']
                },
                {
                    rect: ['9px', '5px', '130px', '35px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRect2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(63,229,141,0.6824)']
                },
                {
                    rect: ['16px', '12px', '91px', '21px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'contenedor',
                    text: ' ',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_recuadroArrastrar}": [
                ["style", "top", '-1px'],
                ["style", "left", '0px'],
                ["style", "width", '143px']
            ],
            "${_contenedor}": [
                ["style", "top", '12px'],
                ["style", "left", '16px'],
                ["style", "width", '91px']
            ],
            "${_RoundRect2}": [
                ["style", "top", '5px'],
                ["color", "background-color", 'rgba(61,229,72,0.00)'],
                ["style", "left", '9px'],
                ["style", "width", '130px']
            ],
            "${symbolSelector}": [
                ["style", "height", '41px'],
                ["style", "width", '136px']
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
                "normal": 0,
                "bien": 1000,
                "mal": 2000
            },
            timeline: [
                { id: "eid1105", tween: [ "color", "${_RoundRect2}", "background-color", 'rgba(61,229,72,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(61,229,72,0.00)'}], position: 0, duration: 0 },
                { id: "eid1104", tween: [ "color", "${_RoundRect2}", "background-color", 'rgba(61,229,72,0.68)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(61,229,72,0.00)'}], position: 1000, duration: 0 },
                { id: "eid1103", tween: [ "color", "${_RoundRect2}", "background-color", 'rgba(255,0,0,0.35)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(61,229,72,0.68)'}], position: 2000, duration: 0 }            ]
        }
    }
},
"subMenu4": {
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
                    id: 'barraSubmenu',
                    type: 'image',
                    rect: ['163px', '20px', '655px', '52px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/barraSubmenu.png', '0px', '0px']
                },
                {
                    id: 'btnSubmenu1d',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['191px', '86px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    id: 'btnSubmenu2d',
                    rect: ['361px', '86px', 'auto', 'auto', 'auto', 'auto'],
                    cursor: ['pointer'],
                    display: 'none'
                },
                {
                    type: 'rect',
                    id: 'btnSubmenu3d',
                    rect: ['522px', '86px', 'auto', 'auto', 'auto', 'auto'],
                    cursor: ['pointer'],
                    display: 'none'
                },
                {
                    type: 'rect',
                    id: 'btnSubmenu4d',
                    rect: ['706px', '86px', 'auto', 'auto', 'auto', 'auto'],
                    cursor: ['pointer'],
                    display: 'none'
                },
                {
                    id: 'flecha4',
                    type: 'rect',
                    rect: ['-355px', '-344', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'over1d',
                    rect: ['182px', '-84px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'over2d',
                    rect: ['351px', '-84px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'over3d',
                    rect: ['521px', '-84px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'over4d',
                    rect: ['683px', '-84px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btnSubmenu3d',
                symbolName: 'btnSubmenu6',
                autoPlay: {

               }
            },
            {
                id: 'flecha4',
                symbolName: 'flecha',
                autoPlay: {

               }
            },
            {
                id: 'over3d',
                symbolName: 'over3',
                autoPlay: {

               }
            },
            {
                id: 'btnSubmenu4d',
                symbolName: 'btnSubmenu8',
                autoPlay: {

               }
            },
            {
                id: 'btnSubmenu2d',
                symbolName: 'btnSubmenu5',
                autoPlay: {

               }
            },
            {
                id: 'btnSubmenu1d',
                symbolName: 'btnSubmenu4',
                autoPlay: {

               }
            },
            {
                id: 'over2d',
                symbolName: 'over2',
                autoPlay: {

               }
            },
            {
                id: 'over4d',
                symbolName: 'over4',
                autoPlay: {

               }
            },
            {
                id: 'over1d',
                symbolName: 'over1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_flecha4}": [
                ["style", "top", '1px'],
                ["transform", "scaleY", '0.67532'],
                ["transform", "scaleX", '0.67532'],
                ["style", "opacity", '0'],
                ["style", "left", '33px']
            ],
            "${_btnSubmenu4d}": [
                ["style", "top", '86px'],
                ["transform", "scaleY", '0.5'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '708px'],
                ["style", "cursor", 'pointer']
            ],
            "${_over3d}": [
                ["style", "top", '-84px'],
                ["style", "left", '521px'],
                ["style", "display", 'none']
            ],
            "${_over4d}": [
                ["style", "top", '-84px'],
                ["style", "left", '683px'],
                ["style", "display", 'none']
            ],
            "${_barraSubmenu}": [
                ["transform", "scaleX", '0.01064'],
                ["style", "top", '130px'],
                ["style", "left", '29px'],
                ["style", "width", '955px']
            ],
            "${_btnSubmenu1d}": [
                ["style", "top", '2px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '198px'],
                ["style", "cursor", 'pointer']
            ],
            "${_btnSubmenu3d}": [
                ["style", "top", '86px'],
                ["transform", "scaleY", '0.5'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '533px'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '72px'],
                ["style", "width", '1000px']
            ],
            "${_over2d}": [
                ["style", "top", '-84px'],
                ["style", "left", '351px'],
                ["style", "display", 'none']
            ],
            "${_over1d}": [
                ["style", "top", '-84px'],
                ["style", "left", '182px'],
                ["style", "display", 'none']
            ],
            "${_btnSubmenu2d}": [
                ["style", "top", '86px'],
                ["transform", "scaleY", '0.5'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '368px'],
                ["style", "cursor", 'pointer']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2370,
            autoPlay: false,
            labels: {
                "fin": 2370
            },
            timeline: [
                { id: "eid1524", tween: [ "transform", "${_btnSubmenu2d}", "scaleY", '1', { fromValue: '0.5'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid2004", tween: [ "transform", "${_btnSubmenu2d}", "scaleY", '1', { fromValue: '0.5'}], position: 1500, duration: 365, easing: "easeInQuad" },
                { id: "eid1525", tween: [ "style", "${_btnSubmenu2d}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid2006", tween: [ "style", "${_btnSubmenu2d}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 365, easing: "easeInQuad" },
                { id: "eid1982", tween: [ "style", "${_barraSubmenu}", "top", '25px', { fromValue: '130px'}], position: 0, duration: 325, easing: "easeInQuad" },
                { id: "eid1983", tween: [ "style", "${_barraSubmenu}", "top", '25px', { fromValue: '25px'}], position: 608, duration: 0, easing: "easeInQuad" },
                { id: "eid1984", tween: [ "style", "${_barraSubmenu}", "top", '26px', { fromValue: '25px'}], position: 919, duration: 773, easing: "easeInQuad" },
                { id: "eid1980", tween: [ "transform", "${_barraSubmenu}", "scaleX", '0.01', { fromValue: '0.01064'}], position: 0, duration: 325, easing: "easeInQuad" },
                { id: "eid1981", tween: [ "transform", "${_barraSubmenu}", "scaleX", '0.70302', { fromValue: '0.01'}], position: 919, duration: 773, easing: "easeInQuad" },
                { id: "eid1521", tween: [ "style", "${_btnSubmenu2d}", "top", '-5px', { fromValue: '86px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid2003", tween: [ "style", "${_btnSubmenu2d}", "top", '-5px', { fromValue: '11px'}], position: 1500, duration: 365, easing: "easeInQuad" },
                { id: "eid1603", tween: [ "style", "${_btnSubmenu4d}", "top", '-4px', { fromValue: '86px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1991", tween: [ "style", "${_btnSubmenu4d}", "top", '-4px', { fromValue: '12px'}], position: 2000, duration: 365, easing: "easeInQuad" },
                { id: "eid2001", tween: [ "style", "${_btnSubmenu3d}", "left", '533px', { fromValue: '533px'}], position: 1750, duration: 0, easing: "easeInQuad" },
                { id: "eid1605", tween: [ "transform", "${_btnSubmenu4d}", "scaleY", '1', { fromValue: '0.5'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1992", tween: [ "transform", "${_btnSubmenu4d}", "scaleY", '1', { fromValue: '0.5'}], position: 2000, duration: 365, easing: "easeInQuad" },
                { id: "eid1523", tween: [ "transform", "${_btnSubmenu2d}", "scaleX", '1', { fromValue: '0.5'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid2005", tween: [ "transform", "${_btnSubmenu2d}", "scaleX", '1', { fromValue: '0.5'}], position: 1500, duration: 365, easing: "easeInQuad" },
                { id: "eid2011", tween: [ "transform", "${_btnSubmenu1d}", "scaleX", '1', { fromValue: '0.5'}], position: 1250, duration: 365, easing: "easeInQuad" },
                { id: "eid1078", tween: [ "style", "${_btnSubmenu4d}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1993", tween: [ "style", "${_btnSubmenu4d}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeInQuad" },
                { id: "eid2010", tween: [ "transform", "${_btnSubmenu1d}", "scaleY", '1', { fromValue: '0.5'}], position: 1250, duration: 365, easing: "easeInQuad" },
                { id: "eid1604", tween: [ "transform", "${_btnSubmenu4d}", "scaleX", '1', { fromValue: '0.5'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1996", tween: [ "transform", "${_btnSubmenu4d}", "scaleX", '1', { fromValue: '0.5'}], position: 2000, duration: 365, easing: "easeInQuad" },
                { id: "eid2013", tween: [ "style", "${_btnSubmenu1d}", "left", '198px', { fromValue: '198px'}], position: 1250, duration: 0, easing: "easeInQuad" },
                { id: "eid1075", tween: [ "style", "${_btnSubmenu2d}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid2008", tween: [ "style", "${_btnSubmenu2d}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0, easing: "easeInQuad" },
                { id: "eid1988", tween: [ "style", "${_barraSubmenu}", "width", '1032px', { fromValue: '955px'}], position: 0, duration: 325, easing: "easeInQuad" },
                { id: "eid1989", tween: [ "style", "${_barraSubmenu}", "width", '1008px', { fromValue: '1032px'}], position: 325, duration: 283, easing: "easeInQuad" },
                { id: "eid1990", tween: [ "style", "${_barraSubmenu}", "width", '955px', { fromValue: '1008px'}], position: 919, duration: 773, easing: "easeInQuad" },
                { id: "eid2009", tween: [ "style", "${_btnSubmenu1d}", "top", '-4px', { fromValue: '2px'}], position: 1250, duration: 365, easing: "easeInQuad" },
                { id: "eid2336", tween: [ "style", "${_over1d}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid2337", tween: [ "style", "${_over1d}", "display", 'none', { fromValue: 'none'}], position: 2365, duration: 0, easing: "easeInQuad" },
                { id: "eid2332", tween: [ "style", "${_over3d}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid2333", tween: [ "style", "${_over3d}", "display", 'none', { fromValue: 'none'}], position: 2365, duration: 0, easing: "easeInQuad" },
                { id: "eid1985", tween: [ "style", "${_barraSubmenu}", "left", '-10px', { fromValue: '29px'}], position: 0, duration: 325, easing: "easeInQuad" },
                { id: "eid1986", tween: [ "style", "${_barraSubmenu}", "left", '3px', { fromValue: '-10px'}], position: 325, duration: 283, easing: "easeInQuad" },
                { id: "eid1987", tween: [ "style", "${_barraSubmenu}", "left", '27px', { fromValue: '3px'}], position: 919, duration: 773, easing: "easeInQuad" },
                { id: "eid1561", tween: [ "style", "${_btnSubmenu3d}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid2000", tween: [ "style", "${_btnSubmenu3d}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 365, easing: "easeInQuad" },
                { id: "eid2330", tween: [ "style", "${_over4d}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid2331", tween: [ "style", "${_over4d}", "display", 'none', { fromValue: 'none'}], position: 2365, duration: 0, easing: "easeInQuad" },
                { id: "eid1995", tween: [ "style", "${_btnSubmenu4d}", "left", '708px', { fromValue: '708px'}], position: 2000, duration: 0, easing: "easeInQuad" },
                { id: "eid2334", tween: [ "style", "${_over2d}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid2335", tween: [ "style", "${_over2d}", "display", 'none', { fromValue: 'none'}], position: 2365, duration: 0, easing: "easeInQuad" },
                { id: "eid2149", tween: [ "style", "${_flecha4}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid1558", tween: [ "style", "${_btnSubmenu3d}", "top", '-4px', { fromValue: '86px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1997", tween: [ "style", "${_btnSubmenu3d}", "top", '-4px', { fromValue: '12px'}], position: 1750, duration: 365, easing: "easeInQuad" },
                { id: "eid1559", tween: [ "transform", "${_btnSubmenu3d}", "scaleX", '1', { fromValue: '0.5'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid2002", tween: [ "transform", "${_btnSubmenu3d}", "scaleX", '1', { fromValue: '0.5'}], position: 1750, duration: 365, easing: "easeInQuad" },
                { id: "eid1606", tween: [ "style", "${_btnSubmenu4d}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1994", tween: [ "style", "${_btnSubmenu4d}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 365, easing: "easeInQuad" },
                { id: "eid1560", tween: [ "transform", "${_btnSubmenu3d}", "scaleY", '1', { fromValue: '0.5'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1998", tween: [ "transform", "${_btnSubmenu3d}", "scaleY", '1', { fromValue: '0.5'}], position: 1750, duration: 365, easing: "easeInQuad" },
                { id: "eid2012", tween: [ "style", "${_btnSubmenu1d}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 365, easing: "easeInQuad" },
                { id: "eid2007", tween: [ "style", "${_btnSubmenu2d}", "left", '368px', { fromValue: '368px'}], position: 1500, duration: 0, easing: "easeInQuad" },
                { id: "eid1077", tween: [ "style", "${_btnSubmenu3d}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1999", tween: [ "style", "${_btnSubmenu3d}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0, easing: "easeInQuad" }            ]
        }
    }
},
"ppalSol": {
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
                    id: 'sol2',
                    type: 'image',
                    rect: ['0px', '0px', '380px', '330px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sol.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '330px'],
                ["style", "width", '380px']
            ],
            "${_sol2}": [
                ["style", "top", '0px'],
                ["subproperty", "filter.grayscale", '1'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 75000,
            autoPlay: true,
            timeline: [
                { id: "eid8", tween: [ "transform", "${_sol2}", "rotateZ", '359deg', { fromValue: '0deg'}], position: 0, duration: 75000 },
                { id: "eid3", tween: [ "subproperty", "${_sol2}", "filter.grayscale", '1', { fromValue: '1'}], position: 0, duration: 0 }            ]
        }
    }
},
"Pajaros_symbol_1": {
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
                    id: 'Pajaros',
                    type: 'image',
                    rect: ['0px', '0px', '457px', '357px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Pajaros2.png', '0px', '0px', '457px', '357px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '110px']
            ],
            "${_Pajaros}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '36px'],
                ["style", "background-size", [457,357], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "width", '109px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1750,
            autoPlay: true,
            timeline: [
                { id: "eid2018", tween: [ "style", "${_Pajaros}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2019", tween: [ "style", "${_Pajaros}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2033", tween: [ "style", "${_Pajaros}", "top", '1px', { fromValue: '0px'}], position: 416, duration: 0 },
                { id: "eid2046", tween: [ "style", "${_Pajaros}", "top", '2px', { fromValue: '1px'}], position: 791, duration: 0 },
                { id: "eid2050", tween: [ "style", "${_Pajaros}", "top", '1px', { fromValue: '2px'}], position: 875, duration: 0 },
                { id: "eid2063", tween: [ "style", "${_Pajaros}", "top", '0px', { fromValue: '1px'}], position: 1250, duration: 0 },
                { id: "eid2021", tween: [ "style", "${_Pajaros}", "width", '109px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2038", tween: [ "style", "${_Pajaros}", "width", '110px', { fromValue: '109px'}], position: 541, duration: 0 },
                { id: "eid2059", tween: [ "style", "${_Pajaros}", "width", '109px', { fromValue: '110px'}], position: 1125, duration: 0 },
                { id: "eid2022", tween: [ "style", "${_Pajaros}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
                { id: "eid2023", tween: [ "style", "${_Pajaros}", "background-position", [-109,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 41, duration: 0 },
                { id: "eid2024", tween: [ "style", "${_Pajaros}", "background-position", [-218,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-109,0]}], position: 83, duration: 0 },
                { id: "eid2025", tween: [ "style", "${_Pajaros}", "background-position", [-327,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-218,0]}], position: 125, duration: 0 },
                { id: "eid2026", tween: [ "style", "${_Pajaros}", "background-position", [0,-36], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-327,0]}], position: 166, duration: 0 },
                { id: "eid2027", tween: [ "style", "${_Pajaros}", "background-position", [-109,-36], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-36]}], position: 208, duration: 0 },
                { id: "eid2029", tween: [ "style", "${_Pajaros}", "background-position", [-218,-36], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-109,-36]}], position: 250, duration: 0 },
                { id: "eid2030", tween: [ "style", "${_Pajaros}", "background-position", [-327,-36], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-218,-36]}], position: 291, duration: 0 },
                { id: "eid2031", tween: [ "style", "${_Pajaros}", "background-position", [0,-72], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-327,-36]}], position: 333, duration: 0 },
                { id: "eid2032", tween: [ "style", "${_Pajaros}", "background-position", [-109,-72], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-72]}], position: 375, duration: 0 },
                { id: "eid2035", tween: [ "style", "${_Pajaros}", "background-position", [-218,-72], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-109,-72]}], position: 416, duration: 0 },
                { id: "eid2036", tween: [ "style", "${_Pajaros}", "background-position", [-327,-72], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-218,-72]}], position: 458, duration: 0 },
                { id: "eid2037", tween: [ "style", "${_Pajaros}", "background-position", [0,-107], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-327,-72]}], position: 500, duration: 0 },
                { id: "eid2039", tween: [ "style", "${_Pajaros}", "background-position", [-109,-107], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-107]}], position: 541, duration: 0 },
                { id: "eid2040", tween: [ "style", "${_Pajaros}", "background-position", [-219,-107], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-109,-107]}], position: 583, duration: 0 },
                { id: "eid2042", tween: [ "style", "${_Pajaros}", "background-position", [-329,-107], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-219,-107]}], position: 625, duration: 0 },
                { id: "eid2043", tween: [ "style", "${_Pajaros}", "background-position", [0,-141], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-329,-107]}], position: 666, duration: 0 },
                { id: "eid2044", tween: [ "style", "${_Pajaros}", "background-position", [-110,-141], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-141]}], position: 708, duration: 0 },
                { id: "eid2045", tween: [ "style", "${_Pajaros}", "background-position", [-220,-141], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-110,-141]}], position: 750, duration: 0 },
                { id: "eid2048", tween: [ "style", "${_Pajaros}", "background-position", [-330,-141], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-220,-141]}], position: 791, duration: 0 },
                { id: "eid2049", tween: [ "style", "${_Pajaros}", "background-position", [0,-174], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-330,-141]}], position: 833, duration: 0 },
                { id: "eid2052", tween: [ "style", "${_Pajaros}", "background-position", [-110,-174], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-174]}], position: 875, duration: 0 },
                { id: "eid2053", tween: [ "style", "${_Pajaros}", "background-position", [-220,-174], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-110,-174]}], position: 916, duration: 0 },
                { id: "eid2054", tween: [ "style", "${_Pajaros}", "background-position", [-330,-174], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-220,-174]}], position: 958, duration: 0 },
                { id: "eid2055", tween: [ "style", "${_Pajaros}", "background-position", [0,-207], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-330,-174]}], position: 1000, duration: 0 },
                { id: "eid2057", tween: [ "style", "${_Pajaros}", "background-position", [-110,-207], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-207]}], position: 1041, duration: 0 },
                { id: "eid2058", tween: [ "style", "${_Pajaros}", "background-position", [-220,-207], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-110,-207]}], position: 1083, duration: 0 },
                { id: "eid2060", tween: [ "style", "${_Pajaros}", "background-position", [-330,-207], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-220,-207]}], position: 1125, duration: 0 },
                { id: "eid2061", tween: [ "style", "${_Pajaros}", "background-position", [0,-241], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-330,-207]}], position: 1166, duration: 0 },
                { id: "eid2062", tween: [ "style", "${_Pajaros}", "background-position", [-109,-241], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-241]}], position: 1208, duration: 0 },
                { id: "eid2065", tween: [ "style", "${_Pajaros}", "background-position", [-218,-241], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-109,-241]}], position: 1250, duration: 0 },
                { id: "eid2066", tween: [ "style", "${_Pajaros}", "background-position", [-327,-241], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-218,-241]}], position: 1291, duration: 0 },
                { id: "eid2067", tween: [ "style", "${_Pajaros}", "background-position", [0,-276], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-327,-241]}], position: 1333, duration: 0 },
                { id: "eid2068", tween: [ "style", "${_Pajaros}", "background-position", [-109,-276], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-276]}], position: 1375, duration: 0 },
                { id: "eid2070", tween: [ "style", "${_Pajaros}", "background-position", [-218,-276], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-109,-276]}], position: 1416, duration: 0 },
                { id: "eid2071", tween: [ "style", "${_Pajaros}", "background-position", [-327,-276], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-218,-276]}], position: 1458, duration: 0 },
                { id: "eid2072", tween: [ "style", "${_Pajaros}", "background-position", [0,-312], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-327,-276]}], position: 1500, duration: 0 },
                { id: "eid2073", tween: [ "style", "${_Pajaros}", "background-position", [-109,-312], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-312]}], position: 1541, duration: 0 },
                { id: "eid2074", tween: [ "style", "${_Pajaros}", "background-position", [-218,-312], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-109,-312]}], position: 1583, duration: 0 },
                { id: "eid2075", tween: [ "style", "${_Pajaros}", "background-position", [-327,-312], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-218,-312]}], position: 1625, duration: 0 },
                { id: "eid2020", tween: [ "style", "${_Pajaros}", "height", '36px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2028", tween: [ "style", "${_Pajaros}", "height", '35px', { fromValue: '36px'}], position: 250, duration: 0 },
                { id: "eid2034", tween: [ "style", "${_Pajaros}", "height", '34px', { fromValue: '35px'}], position: 416, duration: 0 },
                { id: "eid2041", tween: [ "style", "${_Pajaros}", "height", '33px', { fromValue: '34px'}], position: 625, duration: 0 },
                { id: "eid2047", tween: [ "style", "${_Pajaros}", "height", '32px', { fromValue: '33px'}], position: 791, duration: 0 },
                { id: "eid2051", tween: [ "style", "${_Pajaros}", "height", '33px', { fromValue: '32px'}], position: 875, duration: 0 },
                { id: "eid2056", tween: [ "style", "${_Pajaros}", "height", '34px', { fromValue: '33px'}], position: 1041, duration: 0 },
                { id: "eid2064", tween: [ "style", "${_Pajaros}", "height", '35px', { fromValue: '34px'}], position: 1250, duration: 0 },
                { id: "eid2069", tween: [ "style", "${_Pajaros}", "height", '36px', { fromValue: '35px'}], position: 1416, duration: 0 }            ]
        }
    }
},
"ContenedorPajaros": {
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
                    id: 'pajaros',
                    type: 'rect',
                    rect: ['157px', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'pajaros',
                symbolName: 'pajaros',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_pajaros}": [
                ["style", "height", '36px'],
                ["style", "top", '0px'],
                ["style", "left", '204px'],
                ["style", "width", '110px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '110px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1750,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"pajaros": {
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
                    id: 'Pajaros_symbol_12',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'Pajaros_symbol_12',
                symbolName: 'Pajaros_symbol_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Pajaros_symbol_12}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '110px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1750,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"mcEscena1_1": {
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
                    display: 'block',
                    type: 'rect',
                    id: 'mcEscena1',
                    rect: ['298px', '228px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'mcEscena3',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'mcEscena2',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'mcEscena3',
                symbolName: 'mcEscena3',
                autoPlay: {

               }
            },
            {
                id: 'mcEscena1',
                symbolName: 'mcFondo1',
                autoPlay: {

               }
            },
            {
                id: 'mcEscena2',
                symbolName: 'mcEscena2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_mcEscena2}": [
                ["style", "opacity", '0']
            ],
            "${_mcEscena3}": [
                ["style", "opacity", '0']
            ],
            "${_mcEscena1}": [
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
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
            duration: 75000,
            autoPlay: true,
            labels: {
                "fin": 12174
            },
            timeline: [
                { id: "eid1825", tween: [ "style", "${_mcEscena1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2110", tween: [ "style", "${_mcEscena1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2109", tween: [ "style", "${_mcEscena1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2125", tween: [ "style", "${_mcEscena3}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid2124", tween: [ "style", "${_mcEscena3}", "opacity", '1', { fromValue: '0'}], position: 9059, duration: 3000 },
                { id: "eid2130", tween: [ "style", "${_mcEscena1}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 8076 },
                { id: "eid2128", tween: [ "style", "${_mcEscena2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid2134", tween: [ "style", "${_mcEscena2}", "opacity", '1', { fromValue: '0'}], position: 6874, duration: 2185 },
                { id: "eid2136", tween: [ "style", "${_mcEscena2}", "opacity", '0', { fromValue: '1'}], position: 9059, duration: 3000 }            ]
        }
    }
},
"BtnPlay2": {
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
                    id: 'btn',
                    type: 'image',
                    rect: ['0px', '-5px', '36px', '36px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btn7.png', '0px', '0px']
                },
                {
                    rect: ['13px', '2px', '12px', '22px', 'auto', 'auto'],
                    id: 'iconPlay',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/iconPlay.png', '0px', '0px']
                },
                {
                    rect: ['14px', '4px', '12px', '20px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['-1']],
                    id: 'iconPause',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/iconPause.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_iconPlay}": [
                ["style", "top", '2px'],
                ["style", "height", '22px'],
                ["style", "display", 'block'],
                ["style", "left", '13px'],
                ["style", "width", '12px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '36px']
            ],
            "${_btn}": [
                ["style", "height", '36px'],
                ["style", "top", '-5px'],
                ["style", "left", '0px'],
                ["style", "width", '36px']
            ],
            "${_iconPause}": [
                ["style", "top", '4px'],
                ["style", "height", '20px'],
                ["transform", "scaleX", '-1'],
                ["style", "display", 'none'],
                ["style", "left", '14px'],
                ["style", "width", '12px']
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
                "play": 0,
                "pause": 1000
            },
            timeline: [
                { id: "eid1375", tween: [ "style", "${_iconPlay}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1376", tween: [ "style", "${_iconPlay}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid1378", tween: [ "style", "${_iconPause}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1377", tween: [ "style", "${_iconPause}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 }            ]
        }
    }
},
"pronunciacionColisiones": {
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
                    id: 'colisionesPronunciacion',
                    rect: ['-39px', '-60px', '200px', '279px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1', '1.16611']],
                    fill: ['rgba(0,0,0,0)', 'images/colisionesPronunciacion.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'contenedor',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['-23px', '-43px', '169px', '32px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    id: 'btnPlay',
                    type: 'rect',
                    rect: ['171', '-59px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['-23px', '-9px', '169px', '2px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRect',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(119,195,233,1.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'btnPlay',
                symbolName: 'btnPlay_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["style", "top", '-9px'],
                ["color", "background-color", 'rgba(119,195,233,1.00)'],
                ["style", "height", '2px']
            ],
            "${_colisionesPronunciacion}": [
                ["style", "top", '-60px'],
                ["transform", "scaleY", '1.16611'],
                ["style", "height", '279px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-39px'],
                ["style", "width", '200px']
            ],
            "${symbolSelector}": [
                ["style", "height", '256px'],
                ["style", "width", '193px']
            ],
            "${_contenedor}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '-23px'],
                ["style", "top", '-43px']
            ],
            "${_btnPlay}": [
                ["style", "top", '-59px'],
                ["transform", "scaleX", '0.37313'],
                ["style", "left", '97px'],
                ["transform", "scaleY", '0.37313']
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
                "largo": 1000
            },
            timeline: [
                { id: "eid2525", tween: [ "style", "${_colisionesPronunciacion}", "height", '279px', { fromValue: '279px'}], position: 0, duration: 0 },
                { id: "eid2527", tween: [ "style", "${_colisionesPronunciacion}", "height", '307px', { fromValue: '279px'}], position: 1000, duration: 0 },
                { id: "eid1454", tween: [ "style", "${_btnPlay}", "left", '97px', { fromValue: '97px'}], position: 0, duration: 0, easing: "easeInQuad" }            ]
        }
    }
},
"btnPlay_1": {
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
                    rect: ['0px', '0px', '67px', '64px', 'auto', 'auto'],
                    id: 'btnPausa',
                    fill: ['rgba(0,0,0,0)', 'images/btnPausa.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0px', '0px', '67px', '64px', 'auto', 'auto'],
                    id: 'btnPlay',
                    fill: ['rgba(0,0,0,0)', 'images/btnPlay2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_btnPausa}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_btnPlay}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '64px'],
                ["style", "width", '67px']
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
                "play": 0,
                "pause": 1000
            },
            timeline: [
                { id: "eid1391", tween: [ "style", "${_btnPlay}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1388", tween: [ "style", "${_btnPlay}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid1390", tween: [ "style", "${_btnPausa}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1389", tween: [ "style", "${_btnPausa}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 }            ]
        }
    }
},
"mcRecuadroColision3b": {
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
                    rect: ['0px', '0px', '152px', '252px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRect',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(63,229,141,0.00)']
                },
                {
                    type: 'rect',
                    id: 'contenedorCopy19',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['19px', '-43px', '97px', '32px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    rect: ['19px', '156px', '36px', '24px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    display: 'none',
                    id: 'Text2',
                    text: '1',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['-7px', '-55px', '165px', '263px', 'auto', 'auto'],
                    id: 'colisionesPronunciacionCopy28',
                    transform: [[0, 0], [], [], ['1', '1.16611']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/colisionesPronunciacion2.png', '0px', '0px']
                },
                {
                    rect: ['17px', '-9px', '127px', '3px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRectCopy24',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(119,195,233,1.00)']
                },
                {
                    id: 'BtnPlay2',
                    type: 'rect',
                    rect: ['118px', '-43px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    id: 'contenedor',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['62px', '-33px', '35px', '32px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'BtnPlay2',
                symbolName: 'BtnPlay',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_colisionesPronunciacionCopy28}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '1.16611'],
                ["style", "height", '263px'],
                ["style", "top", '-55px'],
                ["style", "left", '-7px'],
                ["style", "width", '165px']
            ],
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(63,229,141,0.00)'],
                ["style", "height", '252px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '152px']
            ],
            "${_BtnPlay2}": [
                ["style", "left", '118px'],
                ["style", "top", '-43px']
            ],
            "${_RoundRectCopy24}": [
                ["style", "top", '-9px'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(119,195,233,1)'],
                ["style", "left", '17px'],
                ["style", "width", '127px']
            ],
            "${_contenedorCopy19}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '-43px'],
                ["style", "left", '19px'],
                ["style", "width", '97px']
            ],
            "${_contenedor}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '-33px'],
                ["style", "left", '62px'],
                ["style", "width", '35px']
            ],
            "${_Text2}": [
                ["style", "top", '156px'],
                ["style", "left", '19px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '252px'],
                ["style", "width", '152px']
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
                { id: "eid1216", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"mcRecuadroColision2b": {
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
                    rect: ['0px', '0px', '169px', '192px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRect',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(223,232,84,0.00)']
                },
                {
                    rect: ['17px', '167px', '36px', '24px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    display: 'none',
                    id: 'Text2',
                    text: '2',
                    align: 'center',
                    type: 'text'
                },
                {
                    type: 'ellipse',
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    rect: ['10px', '141px', '47px', '53px', 'auto', 'auto'],
                    id: 'Ellipse2Copy2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'none',
                    fill: ['rgba(106,221,127,1.00)']
                },
                {
                    rect: ['-7px', '-55px', '165px', '259px', 'auto', 'auto'],
                    id: 'colisionesPronunciacionCopy18',
                    transform: [[0, 0], [], [], ['1', '1.16611']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/colisionesPronunciacion.png', '0px', '0px']
                },
                {
                    rect: ['17px', '-9px', '127px', '3px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRectCopy14',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(119,195,233,1.00)']
                },
                {
                    id: 'BtnPlay1',
                    type: 'rect',
                    rect: ['118px', '-43px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    id: 'contenedor',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['64px', '-37px', '31px', '32px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'BtnPlay1',
                symbolName: 'BtnPlay',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Ellipse2Copy2}": [
                ["style", "top", '141px'],
                ["color", "background-color", 'rgba(106,221,127,1.00)'],
                ["style", "left", '10px'],
                ["style", "display", 'none']
            ],
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(223,232,84,0.00)'],
                ["style", "height", '192px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '169px']
            ],
            "${_colisionesPronunciacionCopy18}": [
                ["style", "top", '-55px'],
                ["transform", "scaleY", '1.16611'],
                ["style", "height", '259px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-7px'],
                ["style", "width", '165px']
            ],
            "${_RoundRectCopy14}": [
                ["style", "top", '-9px'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(119,195,233,1)'],
                ["style", "left", '17px'],
                ["style", "width", '127px']
            ],
            "${_BtnPlay1}": [
                ["style", "left", '118px'],
                ["style", "top", '-43px']
            ],
            "${_contenedor}": [
                ["style", "top", '-37px'],
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "left", '64px'],
                ["style", "width", '31px']
            ],
            "${_Text2}": [
                ["style", "top", '167px'],
                ["style", "left", '17px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '247px'],
                ["style", "width", '149px']
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
                { id: "eid1215", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2181", tween: [ "style", "${_Ellipse2Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"mcRecuadroColision1b": {
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
                    type: 'rect',
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    rect: ['0px', '0px', '277px', '192px', 'auto', 'auto'],
                    id: 'RoundRect',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'block',
                    fill: ['rgba(163,158,239,0.00)']
                },
                {
                    rect: ['16px', '168px', '36px', '24px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    display: 'none',
                    id: 'Text2Copy',
                    text: '3',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['-7px', '-55px', '165px', '259px', 'auto', 'auto'],
                    id: 'colisionesPronunciacionCopy17',
                    transform: [[0, 0], [], [], ['1', '1.16611']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/colisionesPronunciacion.png', '0px', '0px']
                },
                {
                    rect: ['17px', '-9px', '127px', '3px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRectCopy13',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(119,195,233,1.00)']
                },
                {
                    id: 'BtnPlay0',
                    type: 'rect',
                    rect: ['118px', '-43px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    id: 'contenedor',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['57px', '-35px', '33px', '32px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'BtnPlay0',
                symbolName: 'BtnPlay',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_colisionesPronunciacionCopy17}": [
                ["style", "top", '-55px'],
                ["transform", "scaleY", '1.16611'],
                ["style", "height", '259px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-7px'],
                ["style", "width", '165px']
            ],
            "${_Text2Copy}": [
                ["style", "top", '168px'],
                ["style", "display", 'none']
            ],
            "${_BtnPlay0}": [
                ["style", "left", '118px'],
                ["style", "top", '-43px']
            ],
            "${symbolSelector}": [
                ["style", "height", '247px'],
                ["style", "width", '149px']
            ],
            "${_contenedor}": [
                ["style", "top", '-35px'],
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "left", '57px'],
                ["style", "width", '33px']
            ],
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(163,158,239,0.00)'],
                ["style", "display", 'block'],
                ["style", "height", '252px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '252px']
            ],
            "${_RoundRectCopy13}": [
                ["style", "top", '-9px'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(119,195,233,1)'],
                ["style", "left", '17px'],
                ["style", "width", '127px']
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
                { id: "eid1218", tween: [ "style", "${_RoundRect}", "width", '252px', { fromValue: '252px'}], position: 0, duration: 0 },
                { id: "eid1220", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(163,158,239,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(163,158,239,0.00)'}], position: 0, duration: 0 },
                { id: "eid1214", tween: [ "style", "${_Text2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1221", tween: [ "style", "${_RoundRect}", "height", '252px', { fromValue: '252px'}], position: 0, duration: 0 },
                { id: "eid1213", tween: [ "style", "${_RoundRect}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"menuPuntero": {
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
                    transform: [[0, 0], [], [], ['0.64', '0.64']],
                    display: 'none',
                    rect: ['80px', '8px', '44px', '44px', 'auto', 'auto'],
                    id: 'circuloPuntero1',
                    fill: ['rgba(0,0,0,0)', 'images/circuloPuntero2.png', '0px', '0px']
                },
                {
                    id: 'manoPuntero',
                    type: 'image',
                    rect: ['-80px', '359px', '64px', '78px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/manoPuntero.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_manoPuntero}": [
                ["style", "top", '648px'],
                ["style", "left", '-133px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1']
            ],
            "${_circuloPuntero1}": [
                ["style", "top", '8px'],
                ["transform", "scaleY", '0.64'],
                ["transform", "scaleX", '0.64'],
                ["style", "opacity", '0'],
                ["style", "left", '80px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '10px'],
                ["style", "width", '56px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4400,
            autoPlay: false,
            labels: {
                "finPuntero": 4400
            },
            timeline: [
                { id: "eid115", tween: [ "style", "${_manoPuntero}", "left", '98px', { fromValue: '-133px'}], position: 0, duration: 1467, easing: "easeOutCubic" },
                { id: "eid124", tween: [ "style", "${_manoPuntero}", "left", '92px', { fromValue: '98px'}], position: 1467, duration: 733, easing: "easeOutCubic" },
                { id: "eid126", tween: [ "style", "${_manoPuntero}", "left", '97px', { fromValue: '92px'}], position: 2200, duration: 733, easing: "easeOutCubic" },
                { id: "eid142", tween: [ "style", "${_manoPuntero}", "left", '486px', { fromValue: '97px'}], position: 2933, duration: 1467, easing: "easeOutCubic" },
                { id: "eid120", tween: [ "transform", "${_manoPuntero}", "scaleY", '0.89', { fromValue: '1'}], position: 1467, duration: 733, easing: "easeOutCubic" },
                { id: "eid127", tween: [ "transform", "${_manoPuntero}", "scaleY", '1', { fromValue: '0.89'}], position: 2200, duration: 733, easing: "easeOutCubic" },
                { id: "eid137", tween: [ "transform", "${_circuloPuntero1}", "scaleX", '1', { fromValue: '0.64'}], position: 1467, duration: 733, easing: "easeInOutQuad" },
                { id: "eid148", tween: [ "transform", "${_circuloPuntero1}", "scaleX", '1.5', { fromValue: '1'}], position: 2200, duration: 733, easing: "easeInOutQuad" },
                { id: "eid132", tween: [ "style", "${_circuloPuntero1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
                { id: "eid130", tween: [ "style", "${_circuloPuntero1}", "display", 'block', { fromValue: 'none'}], position: 1467, duration: 0, easing: "easeOutCubic" },
                { id: "eid103063", tween: [ "style", "${_circuloPuntero1}", "display", 'none', { fromValue: 'block'}], position: 2933, duration: 0, easing: "easeInOutQuad" },
                { id: "eid138", tween: [ "transform", "${_circuloPuntero1}", "scaleY", '1', { fromValue: '0.64'}], position: 1467, duration: 733, easing: "easeInOutQuad" },
                { id: "eid149", tween: [ "transform", "${_circuloPuntero1}", "scaleY", '1.5', { fromValue: '1'}], position: 2200, duration: 733, easing: "easeInOutQuad" },
                { id: "eid146", tween: [ "style", "${_circuloPuntero1}", "opacity", '1', { fromValue: '0'}], position: 1467, duration: 733, easing: "easeInOutQuad" },
                { id: "eid147", tween: [ "style", "${_circuloPuntero1}", "opacity", '0', { fromValue: '1'}], position: 2200, duration: 733, easing: "easeInOutQuad" },
                { id: "eid116", tween: [ "style", "${_manoPuntero}", "top", '23px', { fromValue: '648px'}], position: 0, duration: 1467, easing: "easeOutCubic" },
                { id: "eid123", tween: [ "style", "${_manoPuntero}", "top", '16px', { fromValue: '23px'}], position: 1467, duration: 733, easing: "easeOutCubic" },
                { id: "eid128", tween: [ "style", "${_manoPuntero}", "top", '19px', { fromValue: '16px'}], position: 2200, duration: 733, easing: "easeOutCubic" },
                { id: "eid143", tween: [ "style", "${_manoPuntero}", "top", '670px', { fromValue: '19px'}], position: 2933, duration: 1467, easing: "easeOutCubic" },
                { id: "eid119", tween: [ "transform", "${_manoPuntero}", "scaleX", '0.89', { fromValue: '1'}], position: 1467, duration: 733, easing: "easeOutCubic" },
                { id: "eid125", tween: [ "transform", "${_manoPuntero}", "scaleX", '1', { fromValue: '0.89'}], position: 2200, duration: 733, easing: "easeOutCubic" }            ]
        }
    }
},
"escribirCerrar_1": {
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
                    id: 'recuadroArrastrar2',
                    type: 'image',
                    rect: ['-1px', '1px', '131px', '45px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/recuadroArrastrar2.png', '0px', '0px']
                },
                {
                    type: 'text',
                    rect: ['16px', '12px', '98px', '25px', 'auto', 'auto'],
                    id: 'Text',
                    text: 'Close',
                    align: 'center',
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', 'normal', 'none', '']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '45px'],
                ["style", "width", '131px']
            ],
            "${_Text}": [
                ["style", "line-height", '24px'],
                ["style", "text-align", 'center'],
                ["style", "height", '25px'],
                ["style", "top", '12px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_recuadroArrastrar2}": [
                ["style", "left", '-1px'],
                ["style", "top", '1px']
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
"microfono": {
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
                    id: 'microfonoActivado',
                    type: 'image',
                    rect: ['0px', '0px', '35px', '35px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/microfonoActivado2.png', '0px', '0px']
                },
                {
                    rect: ['0', '0', '96px', '96px', 'auto', 'auto'],
                    id: 'microfonoDesactivado',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/microfonoDesactivado2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_microfonoActivado}": [
                ["style", "height", '35px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '35px']
            ],
            "${symbolSelector}": [
                ["style", "height", '45px'],
                ["style", "width", '35px']
            ],
            "${_microfonoDesactivado}": [
                ["style", "display", 'none'],
                ["style", "height", '35px'],
                ["style", "width", '35px']
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
                "activado": 0,
                "desactivado": 1000
            },
            timeline: [
                { id: "eid1930", tween: [ "style", "${_microfonoDesactivado}", "width", '35px', { fromValue: '35px'}], position: 1000, duration: 0 },
                { id: "eid1929", tween: [ "style", "${_microfonoDesactivado}", "height", '35px', { fromValue: '35px'}], position: 1000, duration: 0 },
                { id: "eid1928", tween: [ "style", "${_microfonoDesactivado}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 }            ]
        }
    }
},
"mensajeCorrecto": {
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
                    id: 'VentanaCorrecto2',
                    type: 'image',
                    rect: ['0px', '0px', '717px', '372px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/VentanaCorrecto2.png', '0px', '0px']
                },
                {
                    type: 'text',
                    id: 'Text',
                    text: 'Congratulations! Right answer!<br>',
                    rect: ['104px', '127px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', '700', 'none', '']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_VentanaCorrecto2}": [
                ["style", "height", '270px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '568px']
            ],
            "${_Text}": [
                ["style", "top", '127px'],
                ["style", "font-weight", '700'],
                ["style", "left", '104px']
            ],
            "${symbolSelector}": [
                ["style", "height", '270px'],
                ["style", "width", '568px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            labels: {
                "bien": 0
            },
            timeline: [
            ]
        }
    }
},
"mensajeIncorrecto": {
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
                    id: 'closemalCopy',
                    type: 'image',
                    rect: ['4px', '5px', '569px', '270px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Ventanas/closemal.png', '0px', '0px']
                },
                {
                    type: 'text',
                    id: 'Text',
                    text: 'Sorry, try again! You can do better!',
                    rect: ['87px', '121px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', '700', 'none', '']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_closemalCopy}": [
                ["style", "top", '5px'],
                ["style", "left", '4px']
            ],
            "${_Text}": [
                ["style", "top", '121px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '87px']
            ],
            "${symbolSelector}": [
                ["style", "height", '275px'],
                ["style", "width", '601px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            labels: {
                "perdio": 0
            },
            timeline: [
            ]
        }
    }
},
"mensajeNavegador": {
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
                    rect: ['0', '0', '1000', '640', 'auto', 'auto'],
                    id: 'fondoMascara',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(162,162,162,0.30)']
                },
                {
                    id: 'VentanaMensaje',
                    type: 'image',
                    rect: ['193px', '173px', '613px', '289px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/VentanaMensaje2.png', '0px', '0px']
                },
                {
                    id: 'cerrar',
                    type: 'image',
                    rect: ['658px', '400px', '101px', '41px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/BtnCerrar23.png', '0px', '0px']
                },
                {
                    rect: ['295px', '275px', '410px', '71px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    id: 'Text',
                    text: 'Para realizar este ejercicio, usted debe hacerlo únicamente a través de Google Chrome, por favor vaya a este navegador y reinicie la práctica.',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_cerrar}": [
                ["style", "left", '658px'],
                ["style", "top", '400px']
            ],
            "${_VentanaMensaje}": [
                ["style", "height", '289px'],
                ["style", "top", '173px'],
                ["style", "left", '193px'],
                ["style", "width", '613px']
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
"mensajeNavegador2": {
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
                    type: 'rect',
                    id: 'fondoMascara',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0', '0', '1000', '640', 'auto', 'auto'],
                    fill: ['rgba(162,162,162,0.30)']
                },
                {
                    id: 'VentanaMensaje',
                    type: 'image',
                    rect: ['193px', '173px', '613px', '289px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/VentanaMensaje2.png', '0px', '0px']
                },
                {
                    id: 'cerrar',
                    type: 'image',
                    rect: ['658px', '400px', '101px', '41px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/BtnCerrar23.png', '0px', '0px']
                },
                {
                    rect: ['295px', '288px', '410px', '45px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    id: 'Text',
                    text: 'Para realizar este ejercicio, usted debe utilizar una diadema con micrófono.',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_cerrar}": [
                ["style", "left", '658px'],
                ["style", "top", '400px']
            ],
            "${_VentanaMensaje}": [
                ["style", "top", '173px'],
                ["style", "height", '289px'],
                ["style", "left", '193px'],
                ["style", "width", '613px']
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
"BtnPlay_1": {
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
                    id: 'btn',
                    type: 'image',
                    rect: ['0px', '0px', '42px', '35px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btn72.png', '0px', '0px']
                },
                {
                    rect: ['10px', '3px', '11px', '20px', 'auto', 'auto'],
                    id: 'iconPlay',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/iconPlay2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['-1']],
                    display: 'none',
                    rect: ['9px', '3px', '12px', '20px', 'auto', 'auto'],
                    id: 'iconPause',
                    fill: ['rgba(0,0,0,0)', 'images/iconPause2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_iconPlay}": [
                ["style", "top", '4px'],
                ["style", "height", '28px'],
                ["style", "display", 'block'],
                ["style", "left", '14px'],
                ["style", "width", '20px']
            ],
            "${_iconPause}": [
                ["style", "top", '8px'],
                ["style", "height", '20px'],
                ["transform", "scaleX", '-1'],
                ["style", "display", 'none'],
                ["style", "left", '18px'],
                ["style", "width", '12px']
            ],
            "${_btn}": [
                ["style", "height", '35px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '42px']
            ],
            "${symbolSelector}": [
                ["style", "height", '37px'],
                ["style", "width", '40px']
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
                "play": 0,
                "pause": 1000
            },
            timeline: [
                { id: "eid2517", tween: [ "style", "${_iconPause}", "top", '8px', { fromValue: '8px'}], position: 1000, duration: 0 },
                { id: "eid2537", tween: [ "style", "${_iconPlay}", "top", '4px', { fromValue: '4px'}], position: 0, duration: 0 },
                { id: "eid2516", tween: [ "style", "${_iconPause}", "left", '18px', { fromValue: '18px'}], position: 1000, duration: 0 },
                { id: "eid1378", tween: [ "style", "${_iconPause}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1377", tween: [ "style", "${_iconPause}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid2523", tween: [ "style", "${_iconPlay}", "left", '14px', { fromValue: '14px'}], position: 0, duration: 0 },
                { id: "eid1375", tween: [ "style", "${_iconPlay}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1376", tween: [ "style", "${_iconPlay}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid2536", tween: [ "style", "${_iconPlay}", "height", '28px', { fromValue: '28px'}], position: 0, duration: 0 },
                { id: "eid2535", tween: [ "style", "${_iconPlay}", "width", '20px', { fromValue: '20px'}], position: 0, duration: 0 }            ]
        }
    }
},
"BtnPlayPrununciacion": {
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
                    id: 'btn',
                    type: 'image',
                    rect: ['0px', '0px', '42px', '35px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btn73.png', '0px', '0px']
                },
                {
                    rect: ['10px', '3px', '11px', '20px', 'auto', 'auto'],
                    id: 'iconPlay',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/iconPlay3.png', '0px', '0px']
                },
                {
                    rect: ['9px', '3px', '12px', '20px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['-1']],
                    id: 'iconPause',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/iconPause3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_iconPlay}": [
                ["style", "top", '4px'],
                ["style", "height", '28px'],
                ["style", "display", 'block'],
                ["style", "left", '14px'],
                ["style", "width", '20px']
            ],
            "${symbolSelector}": [
                ["style", "height", '37px'],
                ["style", "width", '40px']
            ],
            "${_btn}": [
                ["style", "height", '35px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '42px']
            ],
            "${_iconPause}": [
                ["style", "top", '8px'],
                ["style", "height", '20px'],
                ["transform", "scaleX", '-1'],
                ["style", "display", 'none'],
                ["style", "left", '18px'],
                ["style", "width", '12px']
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
                "play": 0,
                "pause": 1000
            },
            timeline: [
                { id: "eid2517", tween: [ "style", "${_iconPause}", "top", '8px', { fromValue: '8px'}], position: 1000, duration: 0 },
                { id: "eid2537", tween: [ "style", "${_iconPlay}", "top", '4px', { fromValue: '4px'}], position: 0, duration: 0 },
                { id: "eid2516", tween: [ "style", "${_iconPause}", "left", '18px', { fromValue: '18px'}], position: 1000, duration: 0 },
                { id: "eid1378", tween: [ "style", "${_iconPause}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1377", tween: [ "style", "${_iconPause}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid2523", tween: [ "style", "${_iconPlay}", "left", '14px', { fromValue: '14px'}], position: 0, duration: 0 },
                { id: "eid1375", tween: [ "style", "${_iconPlay}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1376", tween: [ "style", "${_iconPlay}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid2536", tween: [ "style", "${_iconPlay}", "height", '28px', { fromValue: '28px'}], position: 0, duration: 0 },
                { id: "eid2535", tween: [ "style", "${_iconPlay}", "width", '20px', { fromValue: '20px'}], position: 0, duration: 0 }            ]
        }
    }
},
"escribirCerrar_2": {
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
                    id: 'recuadroArrastrar2',
                    type: 'image',
                    rect: ['-1px', '1px', '131px', '45px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/recuadroArrastrar3.png', '0px', '0px']
                },
                {
                    type: 'text',
                    rect: ['16px', '12px', '98px', '25px', 'auto', 'auto'],
                    id: 'Text',
                    text: 'Close',
                    align: 'center',
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', 'normal', 'none', '']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '45px'],
                ["style", "width", '131px']
            ],
            "${_Text}": [
                ["style", "line-height", '24px'],
                ["style", "text-align", 'center'],
                ["style", "height", '25px'],
                ["style", "top", '12px'],
                ["style", "left", '16px'],
                ["style", "font-size", '18px']
            ],
            "${_recuadroArrastrar2}": [
                ["style", "left", '-1px'],
                ["style", "top", '1px']
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
                    rect: ['-26px', '0', '164', '85', 'auto', 'auto'],
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
                        rect: ['6px', '17px', 'auto', 'auto', 'auto', 'auto'],
                        font: ['Arial, Helvetica, sans-serif', 13, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                        id: 'Text3',
                        text: 'Atribución - No comercial -<br>Compartir igual.',
                        align: 'left',
                        type: 'text'
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
                ["style", "clip", [84.30224609375,164,85,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-26px']
            ],
            "${symbolSelector}": [
                ["style", "height", '85px'],
                ["style", "width", '168px']
            ],
            "${_Text3}": [
                ["style", "left", '6px'],
                ["style", "top", '17px']
            ],
            "${_over2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '164px']
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
})(jQuery, AdobeEdge, "EDGE-389379400");
