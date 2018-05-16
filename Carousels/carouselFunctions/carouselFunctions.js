'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = carouselFunction;
function carouselFunction(type, props, state, self) {
    var cursor = "";

    var arrowColor = props.arrowColor || 'white';
    var background = props.background || 'black';
    var padding = props.padding;
    var height = props.height || '450px';
    var animationIterationCount = props.aniCount;
    var animationTimingFunction = props.aniTime;
    var animationName = props.aniName;
    var animationDuration = props.aniDur;
    var transformOrigin = props.transformOrigin;
    var animationFillMode = props.aniFillMode;
    var smdis = props.smDis || 'flex';
    var mddis = props.mdDis || 'flex';

    switch (type) {
        case '1':
            cursor = "pointer";
            return {

                WRAP: {
                    width: '100%',
                    height: height,
                    overflowX: 'hidden',
                    background: background,
                    overflowY: 'hidden',
                    display: 'flex',
                    flex: "1",
                    padding: padding
                },
                LEFT_ARROW: {
                    borderWidth: '30px 40px 30px 0',
                    borderColor: 'transparent ' + arrowColor + ' transparent transparent',
                    left: '0',
                    marginLeft: '30px'
                },
                RIGHT_ARROW: {
                    borderWidth: '30px 0 30px 40px',
                    borderColor: 'transparent transparent transparent ' + arrowColor,
                    right: '0',
                    marginRight: '30px'
                },
                SLIDER: {
                    width: '100%',
                    overflowX: 'hidden',
                    height: height
                },
                SLIDE: {
                    height: height

                },
                SLIDE_CONTENT: {
                    width: '100%',
                    height: height,
                    overflowX: 'hidden',
                    display: 'flex',
                    flex: "1",
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode
                }
            };
        case '2':
            cursor = "pointer";
            return {
                WRAP: {
                    width: '100%',
                    height: height,
                    overflowX: 'hidden',
                    background: background,
                    overflowY: 'hidden',
                    display: 'flex',
                    flex: "1",
                    padding: padding
                },
                SLIDER: {
                    width: '100%',
                    overflowX: 'hidden',
                    height: height
                },
                SLIDE: {
                    // backgroundSize: 'cover',
                    // backgroundPosition: 'center',
                    height: height
                    // display:'block'
                },
                SLIDE_CONTENT: {
                    width: '100%',
                    height: height,
                    overflowX: 'hidden',
                    display: 'flex',
                    flex: "1",
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode
                },
                CIRCLES: {
                    cursor: 'pointer',
                    height: '15px',
                    width: '15px',
                    margin: '2px 2px',
                    backgroundColor: '#bbb',
                    borderRadius: '50%',
                    display: 'inline-block',
                    textAlign: 'center'
                },
                CIRCLESDIV: {
                    textAlign: 'center',
                    width: '100%',
                    position: 'relative'
                }
            };
        case '3':
            cursor = "pointer";
            return {
                LEFT_ARROW: {
                    borderWidth: '30px 40px 30px 0',
                    borderColor: 'transparent ' + arrowColor + ' transparent transparent',
                    left: '0',
                    marginLeft: '30px'
                },
                RIGHT_ARROW: {
                    borderWidth: '30px 0 30px 40px',
                    borderColor: 'transparent transparent transparent ' + arrowColor,
                    right: '0',
                    marginRight: '30px'
                },
                WRAP: {
                    width: '100%',
                    height: height,
                    overflowX: 'hidden',
                    background: background,
                    overflowY: 'hidden',
                    display: 'flex',
                    flex: "1",
                    padding: padding
                },
                SLIDER: {
                    width: '100%',
                    overflowX: 'hidden',
                    height: height
                },
                SLIDE: {
                    // backgroundSize: 'cover',
                    // backgroundPosition: 'center',
                    height: height
                    // display:'block'
                },
                SLIDE_CONTENT: {
                    width: '100%',
                    height: height,
                    overflowX: 'hidden',
                    display: 'flex',
                    flex: "1",
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode
                },
                CIRCLES: {
                    cursor: 'pointer',
                    height: '15px',
                    width: '15px',
                    margin: '2px 2px',
                    backgroundColor: '#bbb',
                    borderRadius: '50%',
                    display: 'inline-block',
                    textAlign: 'center'
                },
                CIRCLESDIV: {
                    textAlign: 'center',
                    width: '100%',
                    position: 'relative'
                }
            };
        case '4':
            cursor = "pointer";
            return {
                LEFT_ARROW: {
                    borderWidth: '30px 40px 30px 0',
                    borderColor: 'transparent ' + arrowColor + ' transparent transparent',
                    left: '0',
                    marginLeft: '30px'
                },
                RIGHT_ARROW: {
                    borderWidth: '30px 0 30px 40px',
                    borderColor: 'transparent transparent transparent ' + arrowColor,
                    right: '0',
                    marginRight: '30px'
                },
                WRAP: {
                    width: '100%',
                    height: height,
                    overflowX: 'hidden',
                    background: background,
                    overflowY: 'hidden',
                    display: 'flex',
                    flex: "1",
                    padding: padding
                },
                SLIDER: {
                    width: '100%',
                    overflowX: 'hidden',
                    height: height
                },
                SLIDE: {
                    // backgroundSize: 'cover',
                    // backgroundPosition: 'center',
                    height: height
                    // display:'block'
                },
                SLIDE_CONTENT: {
                    width: '100%',
                    height: height,
                    overflowX: 'hidden',
                    display: 'flex',
                    flex: "1",
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode
                }
            };
        case '5':
            cursor = "pointer";
            return {
                WRAP: {
                    width: '100%',
                    height: height,
                    overflowX: 'hidden',
                    background: background,
                    overflowY: 'hidden',
                    display: 'flex',
                    flex: "1",
                    padding: padding
                },
                SLIDER: {
                    width: '100%',
                    overflowX: 'hidden',
                    height: height
                },
                SLIDE: {
                    // backgroundSize: 'cover',
                    // backgroundPosition: 'center',
                    height: height
                    // display:'block'
                },
                SLIDE_CONTENT: {
                    width: '100%',
                    height: height,
                    overflowX: 'hidden',
                    display: 'flex',
                    flex: "1",
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode
                }
            };
        default:
            return;
    }
}