'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = tableFunction;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function tableFunction(type, props, state, self) {
    var cursor = "";
    var smdis = props.smDis;
    var mddis = props.mdDis;
    var animationIterationCount = props.aniCount;
    var animationTimingFunction = props.aniTime;
    var animationName = props.aniName;
    var animationDuration = props.aniDur;
    var transformOrigin = props.transformOrigin;
    var animationFillMode = props.aniFillMode;
    var headBorderTop = props.hbordertop;
    var headBorderRight = props.hborderRight;
    var headBorderBottom = props.hborderBottom;
    var headBorderLeft = props.hborderLeft;
    var headBorder = props.hborder || '1px solid black';
    var headVertical = props.hvertical || 'center';
    var headWidth = props.headWidth;
    var headHeight = props.headHeight;
    var headMargin = props.headMargin;
    var headPadding = props.headPadding || '5px';
    var dBorderTop = props.dbordertop;
    var dBorderRight = props.dborderRight;
    var dBorderBottom = props.dborderBottom;
    var dBorderLeft = props.dborderLeft;
    var dBorder = props.dborder || '1px solid black';
    var dVertical = props.dVertical || 'center';
    var dwidth = props.dwidth;
    var dheight = props.dheight;
    var dmargin = props.dmargin;
    var dpadding = props.dpadding || '5px';
    var tableBorderTop = props.tbordertop;
    var tableBorderRight = props.tborderRight;
    var tableBorderBottom = props.tborderBottom;
    var tableBorderLeft = props.tborderLeft;
    var tableBorder = props.tborder || '1px solid black';
    var tableMargin = props.tmargin || '5px';
    var tablePadding = props.tpadding;
    var tableWidth = props.tableWidth;
    var tableHeight = props.tableHeight;
    var tableBorderCollapse = props.borderCollaspe || 'collapse';
    switch (type) {
        case type = '1':
            cursor = "pointer";
            return {
                TABLESTYLE: _nestingstyles2.default.create({
                    tablestyle: {
                        borderTop: tableBorderTop,
                        borderRight: tableBorderRight,
                        borderBottom: tableBorderBottom,
                        borderLeft: tableBorderLeft,
                        border: tableBorder,
                        margin: tableMargin,
                        padding: tablePadding,
                        textAlign: 'center',
                        width: tableWidth,
                        height: tableHeight,
                        borderCollapse: tableBorderCollapse,
                        cursor: 'default'
                    },
                    '@media screen and (max-width: 768px)': {
                        tablestyle: {
                            display: smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        tablestyle: {
                            display: mddis
                        }
                    }
                }),
                TABLERES: _nestingstyles2.default.create({
                    tableres: {
                        overflowX: 'auto'
                    },
                    '@media screen and (max-width: 768px)': {
                        tableres: {
                            display: smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        tableres: {
                            display: mddis
                        }
                    }
                })
            };
        default:
            return;
    }
}