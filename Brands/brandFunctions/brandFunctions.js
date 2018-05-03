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
    var cursor = void 0,
        BRAND = "";

    switch (type) {
        case type = '1':
            cursor = "pointer";
            return {
                BRAND: _nestingstyles2.default.create({
                    brand: {
                        display: state.display,
                        flexDirection: state.direction,
                        //width: '15%',
                        alignItems: 'center',
                        animationIterationCount: state.animationIterationCount,
                        animationTimingFunction: state.animationTimingFunction,
                        animationName: state.animationName,
                        animationDuration: state.animationDuration,
                        transformOrigin: state.transformOrigin,
                        animationFillMode: state.animationFillMode
                    },
                    brand_name: {
                        display: 'flex',
                        fontWeight: '900',
                        animationIterationCount: state.animationIterationCount,
                        animationTimingFunction: state.animationTimingFunction,
                        animationName: state.animationName,
                        animationDuration: state.animationDuration,
                        transformOrigin: state.transformOrigin,
                        animationFillMode: state.animationFillMode

                    },
                    '@media screen and (max-width: 768px)': {
                        brand: {
                            display: state.smDis
                        },
                        brand_name: {
                            display: state.smDis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        brand: {
                            display: state.mdDis
                        },
                        brand_name: {
                            display: state.mdDis
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
                        animationIterationCount: state.animationIterationCount,
                        animationTimingFunction: state.animationTimingFunction,
                        animationName: state.animationName,
                        animationDuration: state.animationDuration,
                        transformOrigin: state.transformOrigin,
                        animationFillMode: state.animationFillMode
                    },
                    '@media screen and (max-width: 768px)': {
                        brand: {
                            display: state.smDis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        brand: {
                            display: state.mdDis
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
                        animationIterationCount: state.animationIterationCount,
                        animationTimingFunction: state.animationTimingFunction,
                        animationName: state.animationName,
                        animationDuration: state.animationDuration,
                        transformOrigin: state.transformOrigin,
                        animationFillMode: state.animationFillMode
                    },
                    '@media screen and (max-width: 768px)': {
                        brand: {
                            display: state.smDis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        brand: {
                            display: state.mdDis
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
                        animationIterationCount: state.animationIterationCount,
                        animationTimingFunction: state.animationTimingFunction,
                        animationName: state.animationName,
                        animationDuration: state.animationDuration,
                        transformOrigin: state.transformOrigin,
                        animationFillMode: state.animationFillMode
                    },
                    '@media screen and (max-width: 768px)': {
                        brand: {
                            display: state.smDis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        brand: {
                            display: state.mdDis
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
                        animationIterationCount: state.animationIterationCount,
                        animationTimingFunction: state.animationTimingFunction,
                        animationName: state.animationName,
                        animationDuration: state.animationDuration,
                        transformOrigin: state.transformOrigin,
                        animationFillMode: state.animationFillMode
                    },
                    '@media screen and (max-width: 768px)': {
                        brand: {
                            display: state.smDis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        brand: {
                            display: state.mdDis
                        }
                    }
                })
            };
        case type = 'custom':
            cursor = "pointer";
            return {
                BRAND: _nestingstyles2.default.create({
                    brand: {
                        display: state.display,
                        flexDirection: state.direction,
                        //width: '15%',
                        alignItems: 'center',
                        animationIterationCount: state.animationIterationCount,
                        animationTimingFunction: state.animationTimingFunction,
                        animationName: state.animationName,
                        animationDuration: state.animationDuration,
                        transformOrigin: state.transformOrigin,
                        animationFillMode: state.animationFillMode
                    },
                    brand_name: {
                        display: 'flex',
                        fontWeight: '900',
                        animationIterationCount: state.animationIterationCount,
                        animationTimingFunction: state.animationTimingFunction,
                        animationName: state.animationName,
                        animationDuration: state.animationDuration,
                        transformOrigin: state.transformOrigin,
                        animationFillMode: state.animationFillMode

                    },
                    '@media screen and (max-width: 768px)': {
                        brand: {
                            display: state.smDis
                        },
                        brand_name: {
                            display: state.smDis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        brand: {
                            display: state.mdDis
                        },
                        brand_name: {
                            display: state.mdDis
                        }
                    }
                })
            };
        default:
            return;
    }
}