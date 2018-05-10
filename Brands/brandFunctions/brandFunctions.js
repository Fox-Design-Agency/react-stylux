'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = brandFunction;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function brandFunction(type, props, state, self) {
    var cursor = "";

    var display = props.display || 'flex';
    var direction = props.direction || 'row';
    var animationIterationCount = props.aniCount;
    var animationTimingFunction = props.aniTime;
    var animationName = props.aniName;
    var animationDuration = props.aniDur;
    var transformOrigin = props.transformOrigin;
    var animationFillMode = props.aniFillMode;
    var smdis = props.smDis || 'flex';
    var mddis = props.mdDis || 'flex';

    switch (type) {
        case type = '1':
            cursor = "pointer";
            return {
                BRAND: _nestingstyles2.default.create({
                    brand: {
                        display: display,
                        flexDirection: direction,
                        //width: '15%',
                        alignItems: 'center',
                        animationIterationCount: animationIterationCount,
                        animationTimingFunction: animationTimingFunction,
                        animationName: animationName,
                        animationDuration: animationDuration,
                        transformOrigin: transformOrigin,
                        animationFillMode: animationFillMode
                    },
                    brand_name: {
                        display: 'flex',
                        fontWeight: '900',
                        animationIterationCount: animationIterationCount,
                        animationTimingFunction: animationTimingFunction,
                        animationName: animationName,
                        animationDuration: animationDuration,
                        transformOrigin: transformOrigin,
                        animationFillMode: animationFillMode

                    },
                    '@media screen and (max-width: 768px)': {
                        brand: {
                            display: smdis
                        },
                        brand_name: {
                            display: smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        brand: {
                            display: mddis
                        },
                        brand_name: {
                            display: mddis
                        }
                    }
                })
            };
        case type = '2':
            cursor = "pointer";
            return {
                BRAND: _nestingstyles2.default.create({
                    brand: {
                        display: 'flex',
                        alignItems: 'center',
                        animationIterationCount: animationIterationCount,
                        animationTimingFunction: animationTimingFunction,
                        animationName: animationName,
                        animationDuration: animationDuration,
                        transformOrigin: transformOrigin,
                        animationFillMode: animationFillMode
                    },
                    '@media screen and (max-width: 768px)': {
                        brand: {
                            display: smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        brand: {
                            display: mddis
                        }
                    }
                })
            };
        case type = '3':
            cursor = "pointer";
            return {
                BRAND: _nestingstyles2.default.create({
                    brand: {
                        display: 'flex',
                        alignItems: 'center',
                        animationIterationCount: animationIterationCount,
                        animationTimingFunction: animationTimingFunction,
                        animationName: animationName,
                        animationDuration: animationDuration,
                        transformOrigin: transformOrigin,
                        animationFillMode: animationFillMode
                    },
                    '@media screen and (max-width: 768px)': {
                        brand: {
                            display: smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        brand: {
                            display: mddis
                        }
                    }
                })
            };
        case type = '4':
            cursor = "pointer";
            return {
                BRAND: _nestingstyles2.default.create({
                    brand: {
                        display: 'flex',
                        alignItems: 'center',
                        animationIterationCount: animationIterationCount,
                        animationTimingFunction: animationTimingFunction,
                        animationName: animationName,
                        animationDuration: animationDuration,
                        transformOrigin: transformOrigin,
                        animationFillMode: animationFillMode
                    },
                    '@media screen and (max-width: 768px)': {
                        brand: {
                            display: smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        brand: {
                            display: mddis
                        }
                    }
                })
            };
        case type = '5':
            cursor = "pointer";
            return {
                BRAND: _nestingstyles2.default.create({
                    brand: {
                        display: 'flex',
                        alignItems: 'center',
                        animationIterationCount: animationIterationCount,
                        animationTimingFunction: animationTimingFunction,
                        animationName: animationName,
                        animationDuration: animationDuration,
                        transformOrigin: transformOrigin,
                        animationFillMode: animationFillMode
                    },
                    '@media screen and (max-width: 768px)': {
                        brand: {
                            display: smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        brand: {
                            display: mddis
                        }
                    }
                })
            };
        default:
            return;
    }
}