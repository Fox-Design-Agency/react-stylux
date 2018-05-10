"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = pullQuoteFunction;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _nestingstyles = require("nestingstyles");

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pullQuoteFunction(type, props, state, self) {
    var cursor = "";
    var animationIterationCount = props.aniCount;
    var animationTimingFunction = props.aniTime;
    var animationName = props.aniName;
    var animationDuration = props.aniDur;
    var transform = props.transform;
    var transformOrigin = props.transformOrigin;
    var animationFillMode = props.aniFillMode;
    var smdis = props.smDis || 'flex';
    var mddis = props.mdDis || 'flex';
    switch (type) {
        case type = '1':
            cursor = "pointer";
            return {
                PULLQUOTESTYLES: _nestingstyles2.default.create({
                    pullquotestyles: {
                        padding: "0px 12%",
                        margin: "20px 0 40px 0",
                        position: "relative"
                    },
                    cite: {
                        fontSize: "1.333em",
                        paddingLeft: "50px",
                        color: "lightslategray",
                        display: "block",
                        position: "absolute",
                        bottom: "-30px"
                    },
                    '@media (max-width: 768px)': {
                        pullquotestyles: {
                            display: smdis
                        },
                        cite: {
                            display: smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        pullquotestyles: {
                            display: mddis
                        },
                        cite: {
                            display: mddis
                        }
                    }
                })
            };
        case type = '2':
            cursor = "pointer";
            return {
                PULLQUOTESTYLES: _nestingstyles2.default.create({
                    pullquotestyles: {
                        width: "250px",
                        padding: "5px",
                        fontSize: "1.333em",
                        borderTop: "2px solid lightgray",
                        borderBottom: "2px solid lightgray",
                        margin: "0 auto"
                    },
                    text: {
                        fontSize: "1.333em",
                        margin: "5px"
                    },
                    cite: {
                        margin: "5px",
                        color: "lightslategray"
                    },
                    '@media (max-width: 768px)': {
                        pullquotestyles: {
                            display: smdis
                        },
                        text: {
                            display: smdis
                        },
                        cite: {
                            display: smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        pullquotestyles: {
                            display: mddis
                        },
                        text: {
                            display: mddis
                        },
                        cite: {
                            display: mddis
                        }
                    }
                })
            };
        case type = 'custom':
            cursor = "pointer";
            return {
                PULLQUOTESTYLES: _nestingstyles2.default.create({
                    pullquotestyles: {
                        padding: "0px 12%",
                        margin: "20px 0 40px 0",
                        position: "relative"
                    },
                    cite: {
                        fontSize: "1.333em",
                        paddingLeft: "50px",
                        color: "lightslategray",
                        display: "block",
                        position: "absolute",
                        bottom: "-30px"
                    },
                    '@media (max-width: 768px)': {
                        pullquotestyles: {
                            display: smdis
                        },
                        cite: {
                            display: smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        pullquotestyles: {
                            display: mddis
                        },
                        cite: {
                            display: mddis
                        }
                    }
                })
            };
        default:
            return;
    }
}