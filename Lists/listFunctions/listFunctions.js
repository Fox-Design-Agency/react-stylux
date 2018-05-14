'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = listFunction;
function listFunction(type, props, state, self) {
    var cursor = "";
    var color = props.color || 'black';
    var fontFamily = props.font || 'serif';
    var fontSize = props.size || '1.333em';
    var lineHeight = props.lineHeight || '1.5em';
    var fontWeight = props.weight || '400';
    var paddingLeft = props.paddingLeft;
    var listStyleType = props.listStyleType || 'decimal';
    var bulletStyleType = props.listStyleType || 'disc';
    var squareStyleType = props.listStyleType || 'square';
    var listStyleImage = props.listStyleImage || 'none';
    var listStylePosition = props.listStylePosition || 'inside';
    var smdis = props.smDis;
    var mddis = props.mdDis;
    var animationIterationCount = props.aniCount;
    var animationTimingFunction = props.aniTime;
    var animationName = props.aniName;
    var animationDuration = props.aniDur;
    var transformOrigin = props.transformOrigin;
    var animationFillMode = props.aniFillMode;
    var width = props.width || "100%";
    var itemPadding = props.itemPadding;
    var itemBGImage = props.itemBGImage;
    var itemBGPosition = props.itemBGPosition;
    var itemBGSize = props.itemBGSize;

    switch (type) {
        case '1':
            cursor = "pointer";
            return {
                liststyle: {
                    color: color,
                    fontFamily: fontFamily,
                    fontSize: fontSize,
                    lineHeight: lineHeight,
                    fontWeight: fontWeight,
                    paddingLeft: paddingLeft,
                    listStyleType: listStyleType,
                    listStyleImage: listStyleImage,
                    listStylePosition: listStylePosition,
                    width: width
                },
                listitemstyle: {
                    paddingLeft: itemPadding,
                    backgroundImage: itemBGImage,
                    backgroundPosition: itemBGPosition,
                    backgroundSize: itemBGSize,
                    backgroundRepeat: 'no-repeat'
                },
                smliststyle: {
                    display: smdis,
                    color: color,
                    fontFamily: fontFamily,
                    fontSize: fontSize,
                    lineHeight: lineHeight,
                    fontWeight: fontWeight,
                    paddingLeft: paddingLeft,
                    listStyleType: listStyleType,
                    listStyleImage: listStyleImage,
                    listStylePosition: listStylePosition,
                    width: width
                },
                smlistitemstyle: {
                    display: smdis,
                    paddingLeft: itemPadding,
                    backgroundImage: itemBGImage,
                    backgroundPosition: itemBGPosition,
                    backgroundSize: itemBGSize,
                    backgroundRepeat: 'no-repeat'

                },
                mdliststyle: {
                    display: mddis,
                    color: color,
                    fontFamily: fontFamily,
                    fontSize: fontSize,
                    lineHeight: lineHeight,
                    fontWeight: fontWeight,
                    paddingLeft: paddingLeft,
                    listStyleType: listStyleType,
                    listStyleImage: listStyleImage,
                    listStylePosition: listStylePosition,
                    width: width
                },
                mdlistitemstyle: {
                    display: mddis,
                    paddingLeft: itemPadding,
                    backgroundImage: itemBGImage,
                    backgroundPosition: itemBGPosition,
                    backgroundSize: itemBGSize,
                    backgroundRepeat: 'no-repeat'
                }
            };
        case '2':
            cursor = "pointer";
            return {
                liststyle: {
                    color: color,
                    fontFamily: fontFamily,
                    fontSize: fontSize,
                    lineHeight: lineHeight,
                    fontWeight: fontWeight,
                    paddingLeft: paddingLeft,
                    position: 'relative',
                    width: width

                },
                listitemstyle: {
                    paddingLeft: '70px',
                    counterIncrement: 'aCounter'

                },
                smliststyle: {
                    display: smdis,
                    color: color,
                    fontFamily: fontFamily,
                    fontSize: fontSize,
                    lineHeight: lineHeight,
                    fontWeight: fontWeight,
                    paddingLeft: paddingLeft,
                    position: 'relative',
                    width: width
                },
                smlistitemstyle: {
                    display: smdis,
                    paddingLeft: '70px',
                    counterIncrement: 'aCounter'

                },
                mdliststyle: {
                    display: mddis,
                    color: color,
                    fontFamily: fontFamily,
                    fontSize: fontSize,
                    lineHeight: lineHeight,
                    fontWeight: fontWeight,
                    paddingLeft: paddingLeft,
                    position: 'relative',
                    width: width
                },
                mdlistitemstyle: {
                    display: mddis,
                    paddingLeft: '70px',
                    counterIncrement: 'aCounter'
                }
            };
        case '3':
            cursor = "pointer";
            return {
                liststyle: {
                    color: color,
                    fontFamily: fontFamily,
                    fontSize: fontSize,
                    lineHeight: lineHeight,
                    fontWeight: fontWeight,
                    paddingLeft: paddingLeft,
                    listStyleType: bulletStyleType,
                    listStyleImage: listStyleImage,
                    listStylePosition: listStylePosition,
                    width: width
                },
                listitemstyle: {
                    paddingLeft: itemPadding,
                    backgroundImage: itemBGImage,
                    backgroundPosition: itemBGPosition,
                    backgroundSize: itemBGSize,
                    backgroundRepeat: 'no-repeat'
                },
                smliststyle: {
                    display: smdis,
                    color: color,
                    fontFamily: fontFamily,
                    fontSize: fontSize,
                    lineHeight: lineHeight,
                    fontWeight: fontWeight,
                    paddingLeft: paddingLeft,
                    listStyleType: bulletStyleType,
                    listStyleImage: listStyleImage,
                    listStylePosition: listStylePosition,
                    width: width
                },
                smlistitemstyle: {
                    display: smdis,
                    paddingLeft: itemPadding,
                    backgroundImage: itemBGImage,
                    backgroundPosition: itemBGPosition,
                    backgroundSize: itemBGSize,
                    backgroundRepeat: 'no-repeat'

                },
                mdliststyle: {
                    display: mddis,
                    color: color,
                    fontFamily: fontFamily,
                    fontSize: fontSize,
                    lineHeight: lineHeight,
                    fontWeight: fontWeight,
                    paddingLeft: paddingLeft,
                    listStyleType: bulletStyleType,
                    listStyleImage: listStyleImage,
                    listStylePosition: listStylePosition,
                    width: width
                },
                mdlistitemstyle: {
                    display: mddis,
                    paddingLeft: itemPadding,
                    backgroundImage: itemBGImage,
                    backgroundPosition: itemBGPosition,
                    backgroundSize: itemBGSize,
                    backgroundRepeat: 'no-repeat'
                }
            };
        case '4':
            cursor = "pointer";
            listStyleType = "none";
            var border = props.border || "1px solid black";
            var padding = props.itemPadding || "15px";
            var margin = props.itemMargin || "5px 0 0 0";
            width = props.width;
            var itemWidth = props.itemWidth || "250px";
            return {
                liststyle: {
                    color: color,
                    fontFamily: fontFamily,
                    fontSize: fontSize,
                    lineHeight: lineHeight,
                    fontWeight: fontWeight,
                    paddingLeft: paddingLeft,
                    listStyleType: listStyleType,
                    listStyleImage: listStyleImage,
                    listStylePosition: listStylePosition,
                    width: width
                },
                listitemstyle: {
                    margin: margin,
                    border: border,
                    padding: padding,
                    backgroundImage: itemBGImage,
                    backgroundPosition: itemBGPosition,
                    backgroundSize: itemBGSize,
                    backgroundRepeat: 'no-repeat',
                    width: itemWidth
                },
                smliststyle: {
                    display: smdis,
                    color: color,
                    fontFamily: fontFamily,
                    fontSize: fontSize,
                    lineHeight: lineHeight,
                    fontWeight: fontWeight,
                    paddingLeft: paddingLeft,
                    listStyleType: listStyleType,
                    listStyleImage: listStyleImage,
                    listStylePosition: listStylePosition,
                    width: width
                },
                smlistitemstyle: {
                    display: smdis,
                    margin: margin,
                    border: border,
                    padding: padding,
                    backgroundImage: itemBGImage,
                    backgroundPosition: itemBGPosition,
                    backgroundSize: itemBGSize,
                    backgroundRepeat: 'no-repeat',
                    width: itemWidth

                },
                mdliststyle: {
                    display: mddis,
                    color: color,
                    fontFamily: fontFamily,
                    fontSize: fontSize,
                    lineHeight: lineHeight,
                    fontWeight: fontWeight,
                    paddingLeft: paddingLeft,
                    listStyleType: listStyleType,
                    listStyleImage: listStyleImage,
                    listStylePosition: listStylePosition,
                    width: width
                },
                mdlistitemstyle: {
                    display: mddis,
                    margin: margin,
                    border: border,
                    padding: padding,
                    backgroundImage: itemBGImage,
                    backgroundPosition: itemBGPosition,
                    backgroundSize: itemBGSize,
                    backgroundRepeat: 'no-repeat',
                    width: itemWidth
                }
            };
        default:
            return;
    }
}