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
            color: props.color || 'black',
            fontFamily: props.font || 'serif',
            fontSize: props.size || '1.333em',
            lineHeight: props.lineHeight || '1.5em',
            fontWeight: props.weight || '400',
            paddingLeft: props.paddingLeft,
            listStyleType: props.listStyleType || 'decimal',
            bulletStyleType: props.listStyleType || 'disc',
            squareStyleType: props.listStyleType || 'square',
            listStyleImage: props.listStyleImage || 'none',
            listStylePosition: props.listStylePosition || 'inside',
            id: props.id,
            className: props.className,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            width: props.width || "100%",
            type: props.type,
            styledList: ''

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

            if (this.state.type === "1") {
                listItems = CHILDS.map(function (x) {
                    return x;
                });
                use = (0, _listFunctions2.default)("1", props, state, self);
                var LIST = listItems.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: i, style: use.LISTSTYLE.listitemstyle },
                        x
                    );
                });
                styledList = [_react2.default.createElement(
                    'ul',
                    { style: use.LISTSTYLE.liststyle, id: this.state.id, className: this.state.className },
                    LIST
                )];
            } else if (this.state.type === "2") {
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
                        { key: i, style: use.LISTSTYLE.listitemstyle },
                        x
                    );
                });
                styledList = [_react2.default.createElement(
                    'ol',
                    { style: use.LISTSTYLE.liststyle, id: this.state.id, className: 'bigList ' + this.state.className },
                    _LIST
                )];
            } else if (this.state.type === "3") {
                listItems = CHILDS.map(function (x) {
                    return x;
                });
                use = (0, _listFunctions2.default)("3", props, state, self);
                var _LIST2 = listItems.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: i, style: use.LISTSTYLE.listitemstyle },
                        x
                    );
                });
                styledList = [_react2.default.createElement(
                    'ol',
                    { style: use.LISTSTYLE.liststyle, id: this.state.id, className: this.state.className },
                    _LIST2
                )];
            } else if (this.state.type === "4") {
                listItems = CHILDS.map(function (x) {
                    return x;
                });
                use = (0, _listFunctions2.default)("4", props, state, self);
                var _LIST3 = listItems.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: i, style: use.LISTSTYLE.listitemstyle },
                        x
                    );
                });
                styledList = [_react2.default.createElement(
                    'ul',
                    { style: use.LISTSTYLE.liststyle, id: this.state.id, className: this.state.className },
                    _LIST3
                )];
            } else if (this.state.type === "5") {
                listItems = CHILDS.map(function (x) {
                    return x;
                });
                use = (0, _listFunctions2.default)("5", props, state, self);
                var _LIST4 = listItems.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: i, style: use.LISTSTYLE.listitemstyle },
                        x
                    );
                });
                styledList = [_react2.default.createElement(
                    'ul',
                    { style: use.LISTSTYLE.liststyle, id: this.state.id, className: this.state.className },
                    _LIST4
                )];
            } else {
                use = (0, _listFunctions2.default)("custom", props, state, self);
                var _LIST5 = listItems.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: i, style: use.LISTSTYLE.listitemstyle },
                        x
                    );
                });
                styledList = [_react2.default.createElement(
                    'ul',
                    { style: use.LISTSTYLE.liststyle, id: this.state.id, className: this.state.className },
                    _LIST5
                )];
            }
            this.setState({ listItem: listItems, styledList: styledList });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var props = newProps;
            var state = this.state;
            var styledList = void 0,
                use = '';
            var self = this;
            var listItems = [];
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            listItems = CHILDS.map(function (x) {
                return x;
            });
            if (this.state.type === "1") {
                listItems = CHILDS.map(function (x) {
                    return x;
                });
                use = (0, _listFunctions2.default)("1", props, state, self);
                var LIST = listItems.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: i, style: use.LISTSTYLE.listitemstyle },
                        x
                    );
                });
                styledList = [_react2.default.createElement(
                    'ul',
                    { style: use.LISTSTYLE.liststyle, id: this.state.id, className: this.state.className },
                    LIST
                )];
            } else if (this.state.type === "2") {
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
                var _LIST6 = listItems.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: i, style: use.LISTSTYLE.listitemstyle },
                        x
                    );
                });
                styledList = [_react2.default.createElement(
                    'ol',
                    { style: use.LISTSTYLE.liststyle, id: this.state.id, className: 'bigList ' + this.state.className },
                    _LIST6
                )];
            } else if (this.state.type === "3") {
                listItems = CHILDS.map(function (x) {
                    return x;
                });
                use = (0, _listFunctions2.default)("3", props, state, self);
                var _LIST7 = listItems.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: i, style: use.LISTSTYLE.listitemstyle },
                        x
                    );
                });
                styledList = [_react2.default.createElement(
                    'ol',
                    { style: use.LISTSTYLE.liststyle, id: this.state.id, className: this.state.className },
                    _LIST7
                )];
            } else if (this.state.type === "4") {
                listItems = CHILDS.map(function (x) {
                    return x;
                });
                use = (0, _listFunctions2.default)("4", props, state, self);
                var _LIST8 = listItems.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: i, style: use.LISTSTYLE.listitemstyle },
                        x
                    );
                });
                styledList = [_react2.default.createElement(
                    'ul',
                    { style: use.LISTSTYLE.liststyle, id: this.state.id, className: this.state.className },
                    _LIST8
                )];
            } else if (this.state.type === "5") {
                listItems = CHILDS.map(function (x) {
                    return x;
                });
                use = (0, _listFunctions2.default)("5", props, state, self);
                var _LIST9 = listItems.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: i, style: use.LISTSTYLE.listitemstyle },
                        x
                    );
                });
                styledList = [_react2.default.createElement(
                    'ul',
                    { style: use.LISTSTYLE.liststyle, id: this.state.id, className: this.state.className },
                    _LIST9
                )];
            } else {
                use = (0, _listFunctions2.default)("custom", props, state, self);
                var _LIST10 = listItems.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: i, style: use.LISTSTYLE.listitemstyle },
                        x
                    );
                });
                styledList = [_react2.default.createElement(
                    'ul',
                    { style: use.LISTSTYLE.liststyle, id: this.state.id, className: this.state.className },
                    _LIST10
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