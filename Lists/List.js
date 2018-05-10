'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

var _listFunctions = require('./listFunctions/listFunctions');

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
            styledList: '',
            keys: ''
        };
        return _this;
    }

    _createClass(List, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var props = this.props;
            var state = this.state;
            var styledList = void 0,
                use = '';
            var self = this;
            var slides = [];
            var listItems = [];
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            var num = CHILDS.length;
            var tempkeys = [];
            for (var i = 0; i <= num; i++) {
                tempkeys.push(tempkeys[i] = Math.random());
            }
            if (this.state.box === "1") {
                listItems = CHILDS.map(function (x) {
                    return x;
                });
                use = (0, _listFunctions2.default)("1", props, state, self);
                var LIST = listItems.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: tempkeys[i], style: use.LISTSTYLE.listitemstyle },
                        x
                    );
                });
                styledList = [_react2.default.createElement(
                    'ul',
                    { key: tempkeys[num], style: use.LISTSTYLE.liststyle, id: this.state.id, className: this.state.className },
                    LIST
                )];
            } else if (this.state.box === "2") {
                var nestedItems = [];
                var tempItems = CHILDS.map(function (x) {
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
                var _LIST = listItems.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: tempkeys[i], style: use.LISTSTYLE.listitemstyle },
                        x
                    );
                });
                styledList = [_react2.default.createElement(
                    'ol',
                    { key: tempkeys[num], style: use.LISTSTYLE.liststyle, id: this.state.id, className: 'bigList ' + this.state.className },
                    _LIST
                )];
            } else if (this.state.box === "3") {
                listItems = CHILDS.map(function (x) {
                    return x;
                });
                use = (0, _listFunctions2.default)("3", props, state, self);
                var _LIST2 = listItems.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: tempkeys[i], style: use.LISTSTYLE.listitemstyle },
                        x
                    );
                });
                styledList = [_react2.default.createElement(
                    'ol',
                    { key: tempkeys[num], style: use.LISTSTYLE.liststyle, id: this.state.id, className: this.state.className },
                    _LIST2
                )];
            } else if (this.state.box === "4") {
                listItems = CHILDS.map(function (x) {
                    return x;
                });
                use = (0, _listFunctions2.default)("4", props, state, self);
                var _LIST3 = listItems.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: tempkeys[i], style: use.LISTSTYLE.listitemstyle },
                        x
                    );
                });
                styledList = [_react2.default.createElement(
                    'ul',
                    { key: tempkeys[num], style: use.LISTSTYLE.liststyle, id: this.state.id, className: this.state.className },
                    _LIST3
                )];
            } else {
                listItems = CHILDS.map(function (x) {
                    return x;
                });
                use = (0, _listFunctions2.default)("3", props, state, self);
                var _LIST4 = listItems.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: tempkeys[i], style: use.LISTSTYLE.listitemstyle },
                        x
                    );
                });
                styledList = [_react2.default.createElement(
                    'ol',
                    { key: tempkeys[num], style: use.LISTSTYLE.liststyle, id: this.state.id, className: this.state.className },
                    _LIST4
                )];
            }
            this.setState({ listItem: listItems, styledList: styledList, keys: tempkeys });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var _this2 = this;

            var props = newProps;
            var state = this.state;
            var styledList = void 0,
                use = '';
            var self = this;
            var listItems = [];
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            var num = CHILDS.length;
            listItems = CHILDS.map(function (x) {
                return x;
            });
            if (this.state.box === "1") {
                listItems = CHILDS.map(function (x) {
                    return x;
                });
                use = (0, _listFunctions2.default)("1", props, state, self);
                var LIST = listItems.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: _this2.state.keys[i], style: use.LISTSTYLE.listitemstyle },
                        x
                    );
                });
                styledList = [_react2.default.createElement(
                    'ul',
                    { key: this.state.keys[num], style: use.LISTSTYLE.liststyle, id: this.state.id, className: this.state.className },
                    LIST
                )];
            } else if (this.state.box === "2") {
                var nestedItems = [];
                var tempItems = CHILDS.map(function (x) {
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
                var _LIST5 = listItems.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: _this2.state.keys[i], style: use.LISTSTYLE.listitemstyle },
                        x
                    );
                });
                styledList = [_react2.default.createElement(
                    'ol',
                    { key: this.state.keys[num], style: use.LISTSTYLE.liststyle, id: this.state.id, className: 'bigList ' + this.state.className },
                    _LIST5
                )];
            } else if (this.state.box === "3") {
                listItems = CHILDS.map(function (x) {
                    return x;
                });
                use = (0, _listFunctions2.default)("3", props, state, self);
                var _LIST6 = listItems.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: _this2.state.keys[i], style: use.LISTSTYLE.listitemstyle },
                        x
                    );
                });
                styledList = [_react2.default.createElement(
                    'ol',
                    { key: this.state.keys[num], style: use.LISTSTYLE.liststyle, id: this.state.id, className: this.state.className },
                    _LIST6
                )];
            } else if (this.state.box === "4") {
                listItems = CHILDS.map(function (x) {
                    return x;
                });
                use = (0, _listFunctions2.default)("4", props, state, self);
                var _LIST7 = listItems.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: _this2.state.keys[i], style: use.LISTSTYLE.listitemstyle },
                        x
                    );
                });
                styledList = [_react2.default.createElement(
                    'ul',
                    { key: this.state.keys[num], style: use.LISTSTYLE.liststyle, id: this.state.id, className: this.state.className },
                    _LIST7
                )];
            } else {
                listItems = CHILDS.map(function (x) {
                    return x;
                });
                use = (0, _listFunctions2.default)("3", props, state, self);
                var _LIST8 = listItems.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: _this2.state.keys[i], style: use.LISTSTYLE.listitemstyle },
                        x
                    );
                });
                styledList = [_react2.default.createElement(
                    'ol',
                    { key: this.state.keys[num], style: use.LISTSTYLE.liststyle, id: this.state.id, className: this.state.className },
                    _LIST8
                )];
            }

            this.setState({ listItem: listItems, styledList: styledList });
        }
    }, {
        key: 'render',
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