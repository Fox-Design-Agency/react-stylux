'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = hrFunction;
function hrFunction(type, props, state, self) {
    var cursor = "";

    var width = props.width || '100%';
    var height = props.height || '5px';
    var mdheight = props.mdheight || height;
    var smheight = props.smheight || height;
    var background = props.background || 'black';
    var padding = props.padding;
    var margin = props.margin || '5px 0px 5px 0px';
    var bLeft = props.bLeft;
    var bRight = props.bRight;
    var bTop = props.bTop;
    var bBottom = props.bBottom;
    var border = props.border;
    var transform = props.transform;
    var transformOrigin = props.transformOrigin;
    var smDis = props.smDis;
    var mdDis = props.mdDis;

    switch (type) {
        case '1':
            cursor = "pointer";
            return {
                STYLES: {
                    width: width,
                    height: height,
                    background: background,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    padding: padding,
                    margin: margin
                },
                smSTYLES: {
                    display: smDis,
                    width: width,
                    height: smheight,
                    background: background,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    padding: padding,
                    margin: margin
                },
                mdSTYLES: {
                    display: mdDis,
                    width: width,
                    height: mdheight,
                    background: background,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    padding: padding,
                    margin: margin
                }
            };
        default:
            return;
    }
}