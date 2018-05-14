'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = modalFunction;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function modalFunction(type, props, state, self) {
    var cursor = void 0,
        show = "";
    var boxTop = props.boxTop || '40%';
    var boxRight = props.boxRight || '45%';
    var boxLeft = props.boxLeft;
    var boxBottom = props.boxBottom;
    var boxPosition = props.boxPosition || 'fixed';
    var boxBackground = props.boxBackground || 'white';
    var boxHeight = props.boxHeight || '200px';
    var boxWidth = props.boxWidth || '200px';
    var boxAlign = props.boxAlign || 'center';
    var boxJustify = props.boxJustify || 'center';
    var boxShadow = props.boxShadow || '1px 2px 2px black';
    var btnBackground = props.btnBackground || 'white';
    var bColor = props.bColor || 'black';
    var bBackground = props.bBackground;
    var bFontSize = props.bFontSize || '1.333em';
    var bFontVariant = props.bFontVariant;
    var bFontWeight = props.bFontWeight;
    var bTextShadow = props.bTextShadow;
    var bMargin = props.bMargin;
    var bPadding = props.bPadding;
    var bBorderLeft = props.bBorderLeft;
    var bBorderRight = props.bBorderRight;
    var bBorderTop = props.bBorderTop;
    var bBorderBottom = props.bBorderBottom;
    var bBorder = props.bBorder;
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
            show = arguments[4];
            return {
                BOXSTYLES: {
                    width: boxWidth,
                    height: boxHeight,
                    background: boxBackground,
                    position: boxPosition,
                    top: boxTop,
                    left: boxLeft,
                    right: boxRight,
                    bottom: boxBottom,
                    display: show ? 'flex' : 'none',
                    flex: "1 0 auto",
                    alignItems: boxAlign,
                    justifyContent: boxJustify,
                    boxShadow: boxShadow,
                    zIndex: '2000',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode
                },
                CLICKBOX: {
                    display: 'flex',
                    flex: "1 0 auto",
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: bColor,
                    background: bBackground,
                    fontSize: bFontSize,
                    fontVariant: bFontVariant,
                    fontWeight: bFontWeight,
                    textShadow: bTextShadow,
                    margin: bMargin,
                    padding: bPadding,
                    borderLeft: bBorderLeft,
                    borderRight: bBorderRight,
                    borderTop: bBorderTop,
                    borderBottom: bBorderBottom,
                    border: bBorder
                },
                BTNSTYLE: {
                    borderRadius: '100%',
                    cursor: 'pointer',
                    position: 'absolute',
                    left: boxWidth,
                    bottom: boxHeight,
                    background: btnBackground
                }

            };
        case '2':
            cursor = "pointer";
            show = arguments[4];
            return {

                MODAL: _defineProperty({
                    display: show ? 'flex' : 'none',
                    flex: "1 0 auto",
                    position: 'fixed',
                    zIndex: '1',
                    right: '0',
                    top: '0',
                    width: '100vw',
                    height: '100vh',
                    overflow: 'auto',
                    backgroundColor: 'rgb(0,0,0)'
                }, 'backgroundColor', 'rgba(0,0,0,0.4)'),
                MODALCONTENT: {
                    backgroundColor: '#fff',
                    margin: '15% auto',
                    padding: '20px',
                    border: '1px solid #888',
                    width: boxWidth,
                    height: boxHeight
                },
                CLOSEBTN: {
                    color: '#aaa',
                    float: 'right',
                    fontSize: '28px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                },
                OPENERBTN: {
                    cursor: 'pointer'

                }
            };
        case '3':
            cursor = "pointer";
            show = arguments[4];
            return {
                MODAL: _defineProperty({
                    display: show ? 'flex' : 'none',
                    flex: "1 0 auto",
                    position: 'fixed',
                    zIndex: '1',
                    right: '0',
                    top: '0',
                    width: '100vw',
                    height: '100vh',
                    overflow: 'auto',
                    backgroundColor: 'rgb(0,0,0)'
                }, 'backgroundColor', 'rgba(0,0,0,0.4)'),
                MODALCONTENT: {
                    display: 'flex',
                    flex: "1 0 auto",
                    flexDirection: 'column',
                    backgroundColor: '#fff',
                    margin: 'auto',
                    padding: '0',
                    border: '1px solid #888',
                    width: '80%'
                },
                MODALHEADER: {
                    padding: '2px 16px',
                    backgroundColor: '#eee',
                    color: 'white'
                },
                MODALBODY: {
                    padding: '2px 16px'
                },
                MODALFOOTER: {
                    padding: '2px 16px',
                    position: 'relative',
                    backgroundColor: '#eee',
                    color: 'white',
                    bottom: '0'
                },
                CLOSEBTN: {
                    color: '#000',
                    float: 'right',
                    fontSize: '28px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                },
                OPENERBTN: {
                    cursor: 'pointer'

                }

            };
        default:
            return;
    }
}