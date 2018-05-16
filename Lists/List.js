"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactResponsive = require("react-responsive");

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

var _listFunctions = require("./listFunctions/listFunctions");

var _listFunctions2 = _interopRequireDefault(_listFunctions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_React$Component) {
    _inherits(List, _React$Component);

    function List(props) {
        _classCallCheck(this, List);

        var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

        _this.state = {
            listAmount: props.listAmount || '1',
            listItem: [],
            id: props.id,
            className: props.className,
            box: props.box,
            vars: props.vars,
            styledList: '',
            keys: ''
        };
        return _this;
    }

    _createClass(List, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var props = this.props;
            var state = this.state;
            var styledList = void 0,
                use = void 0,
                LIST = void 0,
                tempItems = void 0,
                nestedItems = '';
            var self = this;
            var slides = [];
            var listItems = [];
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            var tempkeys = [];
            for (var i = 0; i <= CHILDS.length + 3; i++) {
                tempkeys.push(tempkeys[i] = Math.random());
            }
            switch (this.state.box) {
                case "1":
                    switch (this.state.vars) {
                        case "1":
                            listItems = CHILDS.map(function (x) {
                                return x;
                            });
                            use = (0, _listFunctions2.default)("1", props, state, self);
                            LIST = listItems.map(function (x, i) {
                                return _react2.default.createElement(
                                    "li",
                                    { key: tempkeys[i + 3], style: use.listitemstyle },
                                    x
                                );
                            });
                            styledList = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], query: "(min-width: 1224px)" },
                                _react2.default.createElement(
                                    "ul",
                                    { style: use.liststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    "ul",
                                    { style: use.mdliststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    "ul",
                                    { style: use.smliststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            )];
                        default:
                            listItems = CHILDS.map(function (x) {
                                return x;
                            });
                            use = (0, _listFunctions2.default)("1", props, state, self);
                            LIST = listItems.map(function (x, i) {
                                return _react2.default.createElement(
                                    "li",
                                    { key: tempkeys[i + 3], style: use.listitemstyle },
                                    x
                                );
                            });
                            styledList = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], query: "(min-width: 1224px)" },
                                _react2.default.createElement(
                                    "ul",
                                    { style: use.liststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    "ul",
                                    { style: use.mdliststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    "ul",
                                    { style: use.smliststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            )];
                    }
                    break;
                case "2":
                    switch (this.state.vars) {
                        case "1":
                            nestedItems = [];
                            tempItems = CHILDS.map(function (x) {
                                return x;
                            });
                            for (var q = 0; q < CHILDS.length; q += +this.state.listAmount) {
                                for (var w = 0; w < +this.state.listAmount; w += 1) {
                                    nestedItems.push(tempItems[w]);
                                }
                                listItems.push(nestedItems);
                                nestedItems = [];
                                tempItems.splice(0, this.state.listAmount);
                            }
                            use = (0, _listFunctions2.default)("2", props, state, self);
                            LIST = listItems.map(function (x, i) {
                                return _react2.default.createElement(
                                    "li",
                                    { key: tempkeys[i + 3], style: use.listitemstyle },
                                    x
                                );
                            });
                            styledList = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], query: "(min-width: 1224px)" },
                                _react2.default.createElement(
                                    "ol",
                                    { style: use.liststyle, id: this.state.id, className: "bigList " + this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    "ol",
                                    { style: use.mdliststyle, id: this.state.id, className: "bigList " + this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    "ol",
                                    { style: use.smliststyle, id: this.state.id, className: "bigList " + this.state.className },
                                    LIST
                                )
                            )];
                        default:
                            nestedItems = [];
                            tempItems = CHILDS.map(function (x) {
                                return x;
                            });
                            for (var q = 0; q < CHILDS.length; q += +this.state.listAmount) {
                                for (var w = 0; w < +this.state.listAmount; w += 1) {
                                    nestedItems.push(tempItems[w]);
                                }
                                listItems.push(nestedItems);
                                nestedItems = [];
                                tempItems.splice(0, this.state.listAmount);
                            }
                            use = (0, _listFunctions2.default)("2", props, state, self);
                            LIST = listItems.map(function (x, i) {
                                return _react2.default.createElement(
                                    "li",
                                    { key: tempkeys[i + 3], style: use.listitemstyle },
                                    x
                                );
                            });
                            styledList = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], query: "(min-width: 1224px)" },
                                _react2.default.createElement(
                                    "ol",
                                    { style: use.liststyle, id: this.state.id, className: "bigList " + this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    "ol",
                                    { style: use.mdliststyle, id: this.state.id, className: "bigList " + this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    "ol",
                                    { style: use.smliststyle, id: this.state.id, className: "bigList " + this.state.className },
                                    LIST
                                )
                            )];
                    }
                    break;
                case "3":
                    switch (this.state.vars) {
                        case "1":
                            listItems = CHILDS.map(function (x) {
                                return x;
                            });
                            use = (0, _listFunctions2.default)("3", props, state, self);
                            LIST = listItems.map(function (x, i) {
                                return _react2.default.createElement(
                                    "li",
                                    { key: tempkeys[i + 3], style: use.listitemstyle },
                                    x
                                );
                            });
                            styledList = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], query: "(min-width: 1224px)" },
                                _react2.default.createElement(
                                    "ol",
                                    { style: use.liststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    "ol",
                                    { style: use.mdliststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    "ol",
                                    { style: use.smliststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            )];
                        default:
                            listItems = CHILDS.map(function (x) {
                                return x;
                            });
                            use = (0, _listFunctions2.default)("3", props, state, self);
                            LIST = listItems.map(function (x, i) {
                                return _react2.default.createElement(
                                    "li",
                                    { key: tempkeys[i + 3], style: use.listitemstyle },
                                    x
                                );
                            });
                            styledList = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], query: "(min-width: 1224px)" },
                                _react2.default.createElement(
                                    "ol",
                                    { style: use.liststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    "ol",
                                    { style: use.mdliststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    "ol",
                                    { style: use.smliststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            )];
                    }
                    break;
                case "4":
                    switch (this.state.vars) {
                        case "1":
                            listItems = CHILDS.map(function (x) {
                                return x;
                            });
                            use = (0, _listFunctions2.default)("4", props, state, self);
                            LIST = listItems.map(function (x, i) {
                                return _react2.default.createElement(
                                    "li",
                                    { key: tempkeys[i + 3], style: use.listitemstyle },
                                    x
                                );
                            });
                            styledList = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], query: "(min-width: 1224px)" },
                                _react2.default.createElement(
                                    "ul",
                                    { style: use.liststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    "ul",
                                    { style: use.mdliststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    "ul",
                                    { style: use.smliststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            )];
                        default:
                            listItems = CHILDS.map(function (x) {
                                return x;
                            });
                            use = (0, _listFunctions2.default)("4", props, state, self);
                            LIST = listItems.map(function (x, i) {
                                return _react2.default.createElement(
                                    "li",
                                    { key: tempkeys[i + 3], style: use.listitemstyle },
                                    x
                                );
                            });
                            styledList = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], query: "(min-width: 1224px)" },
                                _react2.default.createElement(
                                    "ul",
                                    { style: use.liststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    "ul",
                                    { style: use.mdliststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    "ul",
                                    { style: use.smliststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            )];
                    }
                    break;
                default:
                    listItems = CHILDS.map(function (x) {
                        return x;
                    });
                    use = (0, _listFunctions2.default)("3", props, state, self);
                    LIST = listItems.map(function (x, i) {
                        return _react2.default.createElement(
                            "li",
                            { key: tempkeys[i + 3], style: use.listitemstyle },
                            x
                        );
                    });
                    styledList = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[0], query: "(min-width: 1224px)" },
                        _react2.default.createElement(
                            "ol",
                            { style: use.liststyle, id: this.state.id, className: this.state.className },
                            LIST
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement(
                            "ol",
                            { style: use.liststyle, id: this.state.id, className: this.state.className },
                            LIST
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[2], maxWidth: 767 },
                        _react2.default.createElement(
                            "ol",
                            { style: use.liststyle, id: this.state.id, className: this.state.className },
                            LIST
                        )
                    )];
            }
            this.setState({ listItem: listItems, styledList: styledList, keys: tempkeys });
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(newProps) {
            var _this2 = this;

            var props = newProps;
            var state = this.state;
            var styledList = void 0,
                use = void 0,
                LIST = void 0,
                tempItems = void 0,
                nestedItems = '';
            var self = this;
            var listItems = [];
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            listItems = CHILDS.map(function (x) {
                return x;
            });
            switch (this.state.box) {
                case "1":
                    switch (this.state.vars) {
                        case "1":
                            listItems = CHILDS.map(function (x) {
                                return x;
                            });
                            use = (0, _listFunctions2.default)("1", props, state, self);
                            LIST = listItems.map(function (x, i) {
                                return _react2.default.createElement(
                                    "li",
                                    { key: _this2.state.keys[i + 3], style: use.listitemstyle },
                                    x
                                );
                            });
                            styledList = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], query: "(min-width: 1224px)" },
                                _react2.default.createElement(
                                    "ul",
                                    { style: use.liststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    "ul",
                                    { style: use.mdliststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    "ul",
                                    { style: use.smliststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            )];
                        default:
                            listItems = CHILDS.map(function (x) {
                                return x;
                            });
                            use = (0, _listFunctions2.default)("1", props, state, self);
                            LIST = listItems.map(function (x, i) {
                                return _react2.default.createElement(
                                    "li",
                                    { key: _this2.state.keys[i + 3], style: use.listitemstyle },
                                    x
                                );
                            });
                            styledList = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], query: "(min-width: 1224px)" },
                                _react2.default.createElement(
                                    "ul",
                                    { style: use.liststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    "ul",
                                    { style: use.mdliststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    "ul",
                                    { style: use.smliststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            )];
                    }
                    break;
                case "2":
                    switch (this.state.vars) {
                        case "1":
                            nestedItems = [];
                            tempItems = CHILDS.map(function (x) {
                                return x;
                            });
                            for (var q = 0; q < CHILDS.length; q += +this.state.listAmount) {
                                for (var w = 0; w < +this.state.listAmount; w += 1) {
                                    nestedItems.push(tempItems[w]);
                                }
                                listItems.push(nestedItems);
                                nestedItems = [];
                                tempItems.splice(0, this.state.listAmount);
                            }
                            use = (0, _listFunctions2.default)("2", props, state, self);
                            LIST = listItems.map(function (x, i) {
                                return _react2.default.createElement(
                                    "li",
                                    { key: _this2.state.keys[i + 3], style: use.listitemstyle },
                                    x
                                );
                            });
                            styledList = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], query: "(min-width: 1224px)" },
                                _react2.default.createElement(
                                    "ol",
                                    { style: use.liststyle, id: this.state.id, className: "bigList " + this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    "ol",
                                    { style: use.mdliststyle, id: this.state.id, className: "bigList " + this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    "ol",
                                    { style: use.smliststyle, id: this.state.id, className: "bigList " + this.state.className },
                                    LIST
                                )
                            )];
                        default:
                            nestedItems = [];
                            tempItems = CHILDS.map(function (x) {
                                return x;
                            });
                            for (var q = 0; q < CHILDS.length; q += +this.state.listAmount) {
                                for (var w = 0; w < +this.state.listAmount; w += 1) {
                                    nestedItems.push(tempItems[w]);
                                }
                                listItems.push(nestedItems);
                                nestedItems = [];
                                tempItems.splice(0, this.state.listAmount);
                            }
                            use = (0, _listFunctions2.default)("2", props, state, self);
                            LIST = listItems.map(function (x, i) {
                                return _react2.default.createElement(
                                    "li",
                                    { key: _this2.state.keys[i + 3], style: use.listitemstyle },
                                    x
                                );
                            });
                            styledList = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], query: "(min-width: 1224px)" },
                                _react2.default.createElement(
                                    "ol",
                                    { style: use.liststyle, id: this.state.id, className: "bigList " + this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    "ol",
                                    { style: use.mdliststyle, id: this.state.id, className: "bigList " + this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    "ol",
                                    { style: use.smliststyle, id: this.state.id, className: "bigList " + this.state.className },
                                    LIST
                                )
                            )];
                    }
                    break;
                case "3":
                    switch (this.state.vars) {
                        case "1":
                            listItems = CHILDS.map(function (x) {
                                return x;
                            });
                            use = (0, _listFunctions2.default)("3", props, state, self);
                            LIST = listItems.map(function (x, i) {
                                return _react2.default.createElement(
                                    "li",
                                    { key: _this2.state.keys[i + 3], style: use.listitemstyle },
                                    x
                                );
                            });
                            styledList = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], query: "(min-width: 1224px)" },
                                _react2.default.createElement(
                                    "ol",
                                    { style: use.liststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    "ol",
                                    { style: use.mdliststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    "ol",
                                    { style: use.smliststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            )];
                        default:
                            listItems = CHILDS.map(function (x) {
                                return x;
                            });
                            use = (0, _listFunctions2.default)("3", props, state, self);
                            LIST = listItems.map(function (x, i) {
                                return _react2.default.createElement(
                                    "li",
                                    { key: _this2.state.keys[i + 3], style: use.listitemstyle },
                                    x
                                );
                            });
                            styledList = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], query: "(min-width: 1224px)" },
                                _react2.default.createElement(
                                    "ol",
                                    { style: use.liststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    "ol",
                                    { style: use.mdliststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    "ol",
                                    { style: use.smliststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            )];
                    }
                    break;
                case "4":
                    switch (this.state.vars) {
                        case "1":
                            listItems = CHILDS.map(function (x) {
                                return x;
                            });
                            use = (0, _listFunctions2.default)("4", props, state, self);
                            LIST = listItems.map(function (x, i) {
                                return _react2.default.createElement(
                                    "li",
                                    { key: _this2.state.keys[i + 3], style: use.listitemstyle },
                                    x
                                );
                            });
                            styledList = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], query: "(min-width: 1224px)" },
                                _react2.default.createElement(
                                    "ul",
                                    { style: use.liststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    "ul",
                                    { style: use.mdliststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    "ul",
                                    { style: use.smliststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            )];
                        default:
                            listItems = CHILDS.map(function (x) {
                                return x;
                            });
                            use = (0, _listFunctions2.default)("4", props, state, self);
                            LIST = listItems.map(function (x, i) {
                                return _react2.default.createElement(
                                    "li",
                                    { key: _this2.state.keys[i + 3], style: use.listitemstyle },
                                    x
                                );
                            });
                            styledList = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], query: "(min-width: 1224px)" },
                                _react2.default.createElement(
                                    "ul",
                                    { style: use.liststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    "ul",
                                    { style: use.mdliststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    "ul",
                                    { style: use.smliststyle, id: this.state.id, className: this.state.className },
                                    LIST
                                )
                            )];
                    }
                    break;
                default:
                    listItems = CHILDS.map(function (x) {
                        return x;
                    });
                    use = (0, _listFunctions2.default)("3", props, state, self);
                    LIST = listItems.map(function (x, i) {
                        return _react2.default.createElement(
                            "li",
                            { key: _this2.state.keys[i + 3], style: use.listitemstyle },
                            x
                        );
                    });
                    styledList = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[0], query: "(min-width: 1224px)" },
                        _react2.default.createElement(
                            "ol",
                            { style: use.liststyle, id: this.state.id, className: this.state.className },
                            LIST
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement(
                            "ol",
                            { style: use.liststyle, id: this.state.id, className: this.state.className },
                            LIST
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[2], maxWidth: 767 },
                        _react2.default.createElement(
                            "ol",
                            { style: use.liststyle, id: this.state.id, className: this.state.className },
                            LIST
                        )
                    )];
            }

            this.setState({ listItem: listItems, styledList: styledList });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.state.styledList
            );
        }
    }]);

    return List;
}(_react2.default.Component);

exports.default = List;