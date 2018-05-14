'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = togglerFunction;
function togglerFunction(type, props, state, self) {
    var cursor = void 0,
        display = void 0,
        show = "";

    var position = props.position || 'fixed';
    var width = props.width;
    var height = props.height;
    var top = props.top;
    var background = props.background || 'white';
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
    var border = props.border;
    var bLeft = props.bLeft;
    var bRight = props.bRight;
    var bTop = props.bTop;
    var bBottom = props.bBottom;
    var left = props.left;
    var right = props.right;
    var boxShadow = props.shadow || '1px 2px 2px black';
    var animationIterationCount = props.aniCount;
    var animationTimingFunction = props.aniTime;
    var animationName = props.aniName;
    var animationDuration = props.aniDur;
    var transformOrigin = props.transformOrigin;
    var animationFillMode = props.aniFillMode;
    var smdis = props.smDis || 'flex';
    var mddis = props.mdDis || 'flex';
    var textvertical = props.textVertical || 'center';
    var texthorizontal = props.textHorizontal || 'center';
    var textheight = props.textHeight || '200px';
    var textwidth = props.textWidth || '300px';
    var boxBorderLeft = props.boxBorderLeft;
    var boxBorderRight = props.boxBorderRight;
    var boxBorderTop = props.boxBorderTop;
    var boxBorderBottom = props.boxBorderBottom;
    var boxBorder = props.boxBorder || '1px solid black';
    var boxMargin = props.boxMargin || '5px';
    var padding = props.padding;
    var bWidth = props.bwidth;
    var bHeight = props.bHeight;
    var borderLeft = props.boxBorderLeft;
    var borderRight = props.boxBorderRight;
    var borderTop = props.boxBorderTop;
    var borderBottom = props.boxBorderBottom;
    switch (type) {
        case '1':
            cursor = "pointer";
            show = arguments[4];
            display = show ? 'inline' : 'none';
            height = height || '100%';
            top = top || "0";
            return {
                TOGGLERBOX: {
                    display: display,
                    flex: "1 0 auto",
                    width: width,
                    height: height,
                    boxShadow: boxShadow,
                    position: position,
                    background: background,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    right: right,
                    left: left,
                    top: top,
                    zIndex: 2000,
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode
                },
                CLICKBOX: {
                    cursor: cursor,
                    color: bColor,
                    background: bBackground,
                    fontSize: bFontSize,
                    fontVariant: bFontVariant,
                    fontWeight: bFontWeight,
                    textShadow: bTextShadow,
                    margin: _bMargin,
                    padding: bPadding,
                    borderLeft: bBorderLeft,
                    borderRight: bBorderRight,
                    borderTop: bBorderTop,
                    borderBottom: bBorderBottom,
                    border: bBorder
                }

            };
        case '2':
            cursor = "pointer";
            show = arguments[4];
            display = show ? 'flex' : 'none';
            width = width || '400px';
            var _bMargin = props.bMargin || '-15px 0 0 0';
            var togglePlace = props.togglePlace || 'column';
            var offset = props.offset + '%';
            position = props.position || 'absolute';
            width = props.width || '400px';
            return {
                FULLELEMENT: {
                    display: 'flex',
                    flexDirection: togglePlace,
                    margin: '20px 0 10px 0'
                },
                TOGGLERBOX: {
                    display: display,
                    flex: "1 0 auto",
                    flexDirection: 'column-reverse',
                    alignItems: "center",

                    position: position,
                    width: width,
                    height: height,
                    background: background,
                    padding: padding,
                    margin: '0 0 0 ' + offset,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    boxShadow: boxShadow,
                    overflow: 'hidden',
                    zIndex: 2000,
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
                    width: bWidth,
                    height: bHeight,
                    color: bColor,
                    background: bBackground,
                    fontSize: bFontSize,
                    fontVariant: bFontVariant,
                    fontWeight: bFontWeight,
                    textShadow: bTextShadow,
                    margin: _bMargin,
                    padding: bPadding,
                    borderLeft: bBorderLeft,
                    borderRight: bBorderRight,
                    borderTop: bBorderTop,
                    borderBottom: bBorderBottom,
                    border: bBorder
                }

            };
        case '3':
            cursor = "pointer";
            width = props.width || '400px';
            position = props.position;
            return {
                CHECKSSTYLE: {
                    display: "none"
                },
                PANELS: {
                    display: 'flex',
                    flex: "1 0 auto",
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: position,
                    width: width,
                    height: height,
                    background: background,
                    top: top,
                    overflow: 'hidden'
                },
                TEXTBOX: {
                    height: textheight,
                    width: textwidth,
                    display: 'flex',
                    flex: "1 0 auto",
                    flexDirection: 'column',
                    alignItems: texthorizontal,
                    justifyContent: textvertical,
                    margin: boxMargin,
                    borderLeft: borderLeft,
                    borderRight: borderRight,
                    borderTop: borderTop,
                    borderBottom: borderBottom,
                    border: boxBorder
                },
                LABELSSTYLES: {
                    cursor: 'pointer',
                    borderLeft: '1px solid black',
                    borderRight: '1px solid black',
                    margin: '3px',
                    padding: '5px',
                    trasition: '0.3s'
                }
            };
        case '4':
            cursor = "pointer";
            position = props.position;
            return {
                CHECKSSTYLE: {
                    display: "none"
                },
                PANELS: {
                    display: 'flex',
                    flex: "1 0 auto",
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: position,
                    width: width,
                    height: height,
                    background: background,
                    top: top,
                    overflow: 'hidden'
                },
                TEXTBOX: {
                    height: textheight,
                    width: textwidth,
                    display: 'flex',
                    flex: "1 0 auto",
                    flexDirection: 'column',
                    alignItems: texthorizontal,
                    justifyContent: textvertical,
                    margin: boxMargin,
                    borderLeft: borderLeft,
                    borderRight: borderRight,
                    borderTop: borderTop,
                    borderBottom: borderBottom,
                    border: boxBorder
                },
                LABELSSTYLES: {
                    cursor: 'pointer',
                    borderTop: '1px solid black',
                    borderLeft: '1px solid black',
                    margin: '3px',
                    padding: '5px',
                    width: '150px',
                    trasition: '0.3s'
                },
                LABELTITLES: {
                    display: 'flex',
                    flex: "1 0 auto",
                    flexDirection: 'column'
                }
            };
        default:
            return;
    }
}