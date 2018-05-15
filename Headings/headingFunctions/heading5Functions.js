'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = heading5Function;
function heading5Function(type, props, state, self) {
    var color = props.color;
    var colorRev = props.color;
    var textShadow = props.shadow;
    var fontFamily = props.font;
    var fontSize = props.size || '3.489em';
    var smFontSize = props.smSize || '2.5em';
    var mdFontSize = props.mdSize || '3em';
    var fontWeight = props.weight || '600';
    var fontVariant = props.variant;
    var display = props.display || 'flex';
    var align = props.align || 'center';
    var textAlign = props.textAlign || 'center';
    var padding = props.padding || '0 0 5px 0';
    var margin = props.margin || '1px';
    var width = props.width;
    var height = props.height;
    var maxWidth = props.maxW;
    var maxHeight = props.maxH;
    var bLeft = props.bLeft;
    var bRight = props.bRight;
    var bTop = props.bTop;
    var bBottom = props.bBottom;
    var border = props.border;
    var animationIterationCount = props.aniCount;
    var animationTimingFunction = props.aniTime;
    var animationName = props.aniName;
    var animationDuration = props.aniDur;
    var transform = props.transform;
    var transformOrigin = props.transformOrigin;
    var animationFillMode = props.aniFillMode;
    var smdis = props.smDis || 'flex';
    var mddis = props.mdDis || 'flex';
    var hoverColor = props.hovColor;
    var wordWrap = props.wordWrap || "break-word";
    var cursor = props.cursor;

    switch (type) {
        case '1':
            cursor = props.cursor;
            return {
                heading: {
                    width: width,
                    height: height,
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    color: color,
                    textShadow: textShadow,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    fontFamily: fontFamily,
                    fontSize: fontSize,
                    fontWeight: fontWeight,
                    fontVariant: fontVariant,
                    display: display,
                    alignItems: align,
                    justifyContent: align,
                    textAlign: textAlign,
                    padding: padding,
                    margin: margin,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    flex: "1 0 auto",
                    flexWrap: "wrap",
                    wordWrap: wordWrap,
                    cursor: cursor
                },
                hoverStyle: {
                    color: hoverColor
                },
                smheading: {
                    display: smdis,
                    fontSize: smFontSize,
                    width: width,
                    height: height,
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    color: color,
                    textShadow: textShadow,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    fontFamily: fontFamily,
                    fontWeight: fontWeight,
                    fontVariant: fontVariant,
                    alignItems: align,
                    justifyContent: align,
                    textAlign: textAlign,
                    padding: padding,
                    margin: margin,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    flex: "1 0 auto",
                    flexWrap: "wrap",
                    wordWrap: wordWrap,
                    cursor: cursor

                },
                mdheading: {
                    display: mddis,
                    fontSize: mdFontSize,
                    width: width,
                    height: height,
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    color: color,
                    textShadow: textShadow,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    fontFamily: fontFamily,
                    fontWeight: fontWeight,
                    fontVariant: fontVariant,
                    alignItems: align,
                    justifyContent: align,
                    textAlign: textAlign,
                    padding: padding,
                    margin: margin,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    flex: "1 0 auto",
                    flexWrap: "wrap",
                    wordWrap: wordWrap,
                    cursor: cursor
                }

            };
        case '2':

            fontSize = props.size || '3.489em';
            smFontSize = props.smSize || '2.5em';
            mdFontSize = props.mdSize || '3em';
            fontWeight = props.weight || '600';

            return {
                heading: {
                    width: width,
                    height: height,
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    color: color,
                    textShadow: textShadow,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    fontFamily: fontFamily,
                    fontSize: fontSize,
                    fontWeight: fontWeight,
                    fontVariant: fontVariant,
                    display: display,
                    alignItems: align,
                    justifyContent: align,
                    textAlign: textAlign,
                    padding: padding,
                    margin: margin,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    flex: "1 0 auto",
                    flexWrap: "wrap",
                    wordWrap: wordWrap,
                    cursor: cursor
                },
                hoverStyle: {
                    color: hoverColor
                },
                smheading: {
                    display: smdis,
                    fontSize: smFontSize,
                    width: width,
                    height: height,
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    color: color,
                    textShadow: textShadow,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    fontFamily: fontFamily,
                    fontWeight: fontWeight,
                    fontVariant: fontVariant,
                    alignItems: align,
                    justifyContent: align,
                    textAlign: textAlign,
                    padding: padding,
                    margin: margin,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    flex: "1 0 auto",
                    flexWrap: "wrap",
                    wordWrap: wordWrap,
                    cursor: cursor

                },
                mdheading: {
                    display: mddis,
                    fontSize: mdFontSize,
                    width: width,
                    height: height,
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    color: color,
                    textShadow: textShadow,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    fontFamily: fontFamily,
                    fontWeight: fontWeight,
                    fontVariant: fontVariant,
                    alignItems: align,
                    justifyContent: align,
                    textAlign: textAlign,
                    padding: padding,
                    margin: margin,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    flex: "1 0 auto",
                    flexWrap: "wrap",
                    wordWrap: wordWrap,
                    cursor: cursor
                }

            };
        case '3':

            fontSize = props.size || '3.489em';
            smFontSize = props.smSize || '2.5em';
            mdFontSize = props.mdSize || '3em';
            fontWeight = props.weight || '600';

            return {
                heading: {
                    width: width,
                    height: height,
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    color: color,
                    textShadow: textShadow,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    fontFamily: fontFamily,
                    fontSize: fontSize,
                    fontWeight: fontWeight,
                    fontVariant: fontVariant,
                    display: display,
                    alignItems: align,
                    justifyContent: align,
                    textAlign: textAlign,
                    padding: padding,
                    margin: margin,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    flex: "1 0 auto",
                    flexWrap: "wrap",
                    wordWrap: wordWrap,
                    cursor: cursor
                },
                hoverStyle: {
                    color: hoverColor
                },
                smheading: {
                    display: smdis,
                    fontSize: smFontSize,
                    width: width,
                    height: height,
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    color: color,
                    textShadow: textShadow,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    fontFamily: fontFamily,
                    fontWeight: fontWeight,
                    fontVariant: fontVariant,
                    alignItems: align,
                    justifyContent: align,
                    textAlign: textAlign,
                    padding: padding,
                    margin: margin,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    flex: "1 0 auto",
                    flexWrap: "wrap",
                    wordWrap: wordWrap,
                    cursor: cursor
                },
                mdheading: {
                    display: mddis,
                    fontSize: mdFontSize,
                    width: width,
                    height: height,
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    color: color,
                    textShadow: textShadow,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    fontFamily: fontFamily,
                    fontWeight: fontWeight,
                    fontVariant: fontVariant,
                    alignItems: align,
                    justifyContent: align,
                    textAlign: textAlign,
                    padding: padding,
                    margin: margin,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    flex: "1 0 auto",
                    flexWrap: "wrap",
                    wordWrap: wordWrap,
                    cursor: cursor
                }

            };
        case '4':

            fontSize = props.size || '3.489em';
            smFontSize = props.smSize || '2.5em';
            mdFontSize = props.mdSize || '3em';
            fontWeight = props.weight || '600';

            return {
                heading: {
                    width: width,
                    height: height,
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    color: color,
                    textShadow: textShadow,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    fontFamily: fontFamily,
                    fontSize: fontSize,
                    fontWeight: fontWeight,
                    fontVariant: fontVariant,
                    display: display,
                    alignItems: align,
                    justifyContent: align,
                    textAlign: textAlign,
                    padding: padding,
                    margin: margin,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    flex: "1 0 auto",
                    flexWrap: "wrap",
                    wordWrap: wordWrap,
                    cursor: cursor
                },
                hoverStyle: {
                    color: hoverColor
                },
                smheading: {
                    display: smdis,
                    fontSize: smFontSize,
                    width: width,
                    height: height,
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    color: color,
                    textShadow: textShadow,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    fontFamily: fontFamily,
                    fontWeight: fontWeight,
                    fontVariant: fontVariant,
                    alignItems: align,
                    justifyContent: align,
                    textAlign: textAlign,
                    padding: padding,
                    margin: margin,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    flex: "1 0 auto",
                    flexWrap: "wrap",
                    wordWrap: wordWrap,
                    cursor: cursor

                },
                mdheading: {
                    display: mddis,
                    fontSize: mdFontSize,
                    width: width,
                    height: height,
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    color: color,
                    textShadow: textShadow,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    fontFamily: fontFamily,
                    fontWeight: fontWeight,
                    fontVariant: fontVariant,
                    alignItems: align,
                    justifyContent: align,
                    textAlign: textAlign,
                    padding: padding,
                    margin: margin,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    flex: "1 0 auto",
                    flexWrap: "wrap",
                    wordWrap: wordWrap,
                    cursor: cursor
                }
                // case (type = '5'):
                //     cursor = "pointer"
                //     return {


                //     }
            };default:
            return;
    }
}