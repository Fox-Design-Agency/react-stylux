'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = cardFunction;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cardFunction(type, props, state, self) {
    var cursor = "";
    var boxShadow = props.shadow || '1px 4px 8px 0 rgba(0,0,0,0.2)';
    var hovBoxShadow = props.hovShadow || '1px 8px 16px 0 rgba(0,0,0,0.2)';
    var revBoxShadow = props.shadow || '1px 4px 8px 0 rgba(0,0,0,0.2)';
    var borderRadius = props.corners;
    var smDis = props.smDis;
    var mdDis = props.mdDis;

    switch (type) {
        case type = '1':
            cursor = "pointer";
            boxShadow = arguments[4] || boxShadow;
            return {
                changeHover: function changeHover() {
                    var boxShadow = hovBoxShadow;
                    self.renderStuff(boxShadow);
                },
                changeHoverBack: function changeHoverBack() {
                    var boxShadow = revBoxShadow;
                    self.renderStuff(boxShadow);
                },
                CARDSTYLE: _nestingstyles2.default.create({
                    cardstyle: {
                        margin: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: boxShadow,
                        transition: '0.3s',
                        borderRadius: borderRadius
                    },
                    imgstyle: {
                        height: '300px',
                        width: '250px'
                    },
                    cardheading: {
                        textAlign: "center",
                        fontWeight: "900",
                        margin: "2px",
                        maxWidth: "250px"
                    },
                    cardbody: {
                        margin: "2px",
                        maxWidth: "250px",
                        maxHeight: "175px",
                        overflow: "hidden"
                    },
                    cardcontent: {
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '2px 16px',
                        wordWrap: "break-word",
                        maxWidth: "250px"
                    },

                    '@media screen and (max-width: 768px)': {
                        cardstyle: {
                            display: smDis
                        },
                        imgstyle: {
                            display: smDis
                        },
                        cardheading: {
                            display: smDis
                        },
                        cardbody: {
                            display: smDis
                        },
                        cardcontent: {
                            display: smDis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        cardstyle: {
                            display: mdDis
                        },
                        imgstyle: {
                            display: mdDis
                        },
                        cardheading: {
                            display: mdDis
                        },
                        cardbody: {
                            display: mdDis
                        },
                        cardcontent: {
                            display: mdDis
                        }
                    }
                })
            };
        case type = '2':
            cursor = "pointer";
            boxShadow = arguments[4] || boxShadow;
            return {
                changeHover: function changeHover() {
                    var boxShadow = hovBoxShadow;
                    self.renderStuff(boxShadow);
                },
                changeHoverBack: function changeHoverBack() {
                    var boxShadow = revBoxShadow;
                    self.renderStuff(boxShadow);
                },
                CARDSTYLE: _nestingstyles2.default.create({
                    cardstyle: {
                        margin: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: boxShadow,
                        transition: '0.3s',
                        borderRadius: borderRadius
                    },
                    imgstyle: {
                        height: '300px',
                        width: '250px'
                    },
                    cardheading: {
                        textAlign: "center",
                        fontWeight: "900",
                        margin: "2px",
                        maxWidth: "250px"
                    },
                    cardbody: {
                        margin: "2px",
                        maxWidth: "250px",
                        maxHeight: "175px",
                        overflow: "hidden"
                    },
                    cardcontent: {
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '2px 16px',
                        wordWrap: "break-word",
                        maxWidth: "250px"
                    },
                    btnstyle: {
                        backgroundColor: 'black',
                        color: 'white',
                        height: '30px',
                        border: 'none',
                        cursor: 'pointer'
                    },

                    '@media screen and (max-width: 768px)': {
                        cardstyle: {
                            display: smDis
                        },
                        imgstyle: {
                            display: smDis
                        },
                        cardheading: {
                            display: smDis
                        },
                        cardbody: {
                            display: smDis
                        },
                        cardcontent: {
                            display: smDis
                        },
                        btnstyle: {
                            display: smDis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        cardstyle: {
                            display: mdDis
                        },
                        imgstyle: {
                            display: mdDis
                        },
                        cardheading: {
                            display: mdDis
                        },
                        cardbody: {
                            display: mdDis
                        },
                        cardcontent: {
                            display: mdDis
                        },
                        btnstyle: {
                            display: mdDis
                        }
                    }
                })
            };
        case type = '3':
            cursor = "pointer";
            var height = height || '398px';
            var width = width || '250px';
            boxShadow = arguments[4] || boxShadow;
            return {
                changeHover: function changeHover() {
                    var boxShadow = hovBoxShadow;
                    self.renderStuff(boxShadow);
                },
                changeHoverBack: function changeHoverBack() {
                    var boxShadow = revBoxShadow;
                    self.renderStuff(boxShadow);
                },
                CARDSTYLE: _nestingstyles2.default.create({
                    cardstyle: {
                        margin: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: boxShadow,
                        transition: '0.3s',
                        height: height,
                        width: width,
                        borderRadius: borderRadius
                    },
                    cardheading: {
                        textAlign: "center",
                        fontWeight: "900",
                        margin: "2px",
                        maxWidth: "250px"
                    },
                    cardbody: {
                        margin: "2px",
                        maxWidth: "250px",
                        maxHeight: "175px",
                        overflow: "hidden"
                    },
                    cardcontent: {
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '2px 16px',
                        wordWrap: "break-word",
                        maxWidth: "250px"
                    },
                    item: {
                        padding: '20px',
                        borderBottom: '1px solid #eee'
                    },

                    '@media screen and (max-width: 768px)': {
                        cardstyle: {
                            display: smDis
                        },
                        imgstyle: {
                            display: smDis
                        },
                        cardheading: {
                            display: smDis
                        },
                        cardbody: {
                            display: smDis
                        },
                        cardcontent: {
                            display: smDis
                        },
                        item: {
                            display: smDis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        cardstyle: {
                            display: mdDis
                        },
                        imgstyle: {
                            display: mdDis
                        },
                        cardheading: {
                            display: mdDis
                        },
                        cardbody: {
                            display: mdDis
                        },
                        cardcontent: {
                            display: mdDis
                        },
                        item: {
                            display: mdDis
                        }
                    }
                })
            };
        default:
            return;
    }
}