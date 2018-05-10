'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/reset.css');

require('../css/animations.css');

require('../css/SuperStyleSheet.css');

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

var _buttonFunctions = require('./buttonFunctions/buttonFunctions');

var _buttonFunctions2 = _interopRequireDefault(_buttonFunctions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button(props) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

        _this.state = {
            id: props.id,
            className: props.className,
            onClick: props.onClick,
            box: props.box,
            buttonStyle: '',
            childs: '',
            keys: ''
        };
        _this.renderStuff = _this.renderStuff.bind(_this);
        return _this;
    }

    _createClass(Button, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var props = this.props;
            var state = this.state;
            var styledButton = void 0,
                use = '';
            var self = this;
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            var tempkey = Math.random();
            if (this.state.box === "1") {
                use = (0, _buttonFunctions2.default)("1", props, state, self);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: tempkey,
                        style: use.BUTTONSTYLES.buttonStyles,
                        id: this.state.id, className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: use.changeHover,
                        onMouseOut: use.changeHoverBack
                    },
                    CHILDS[0]
                )];
            } else if (this.state.box === "2") {
                use = (0, _buttonFunctions2.default)("2", props, state, self);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: tempkey,
                        style: use.BUTTONSTYLES.buttonStyles,
                        id: this.state.id,
                        className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: use.changeHover,
                        onMouseLeave: use.changeHoverBack },
                    CHILDS[0]
                )];
            } else if (this.state.box === "3") {
                use = (0, _buttonFunctions2.default)("3", props, state, self);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: tempkey,
                        style: use.BUTTONSTYLES.buttonStyles,
                        id: this.state.id,
                        className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: use.changeHover,
                        onMouseLeave: use.changeHoverBack },
                    CHILDS[0]
                )];
            } else if (this.state.box === "4") {
                use = (0, _buttonFunctions2.default)("4", props, state, self);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: tempkey,
                        style: use.BUTTONSTYLES.buttonStyles,
                        id: this.state.id,
                        className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: use.changeHover,
                        onMouseLeave: use.changeHoverBack },
                    CHILDS[0]
                )];
            } else if (this.state.box === "5") {
                use = (0, _buttonFunctions2.default)("5", props, state, self);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: tempkey,
                        style: use.BUTTONSTYLES.buttonStyles,
                        id: this.state.id,
                        className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: use.changeHover,
                        onMouseLeave: use.changeHoverBack },
                    CHILDS[0]
                )];
            } else {
                use = (0, _buttonFunctions2.default)("custom", props, state, self);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: tempkey, style: use.BUTTONSTYLES.buttonStyles, id: this.state.id, className: this.state.className, onClick: this.state.onClick, onMouseEnter: use.changeHover, onMouseLeave: use.changeHoverBack },
                    CHILDS[0]
                )];
            }

            this.setState({ buttonStyle: styledButton, childs: CHILDS, styleHolder: use, keys: tempkey });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var props = newProps;
            var state = this.state;
            var styledButton = void 0,
                use = '';
            var self = this;
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            if (this.state.box === "1") {
                use = (0, _buttonFunctions2.default)("1", props, state, self);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: this.state.keys,
                        style: use.BUTTONSTYLES.buttonStyles,
                        id: this.state.id, className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: use.changeHover,
                        onMouseLeave: use.changeHoverBack
                    },
                    CHILDS[0]
                )];
            } else if (this.state.box === "2") {
                use = (0, _buttonFunctions2.default)("2", props, state, self);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: this.state.keys,
                        style: use.BUTTONSTYLES.buttonStyles,
                        id: this.state.id,
                        className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: use.changeHover,
                        onMouseLeave: use.changeHoverBack },
                    CHILDS[0]
                )];
            } else if (this.state.box === "3") {
                use = (0, _buttonFunctions2.default)("3", props, state, self);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: this.state.keys,
                        style: use.BUTTONSTYLES.buttonStyles,
                        id: this.state.id,
                        className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: use.changeHover,
                        onMouseLeave: use.changeHoverBack },
                    CHILDS[0]
                )];
            } else if (this.state.box === "4") {
                use = (0, _buttonFunctions2.default)("4", props, state, self);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: this.state.keys,
                        style: use.BUTTONSTYLES.buttonStyles,
                        id: this.state.id,
                        className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: use.changeHover,
                        onMouseLeave: use.changeHoverBack },
                    CHILDS[0]
                )];
            } else if (this.state.box === "5") {
                use = (0, _buttonFunctions2.default)("5", props, state, self);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: this.state.keys,
                        style: use.BUTTONSTYLES.buttonStyles,
                        id: this.state.id,
                        className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: use.changeHover,
                        onMouseLeave: use.changeHoverBack },
                    CHILDS[0]
                )];
            } else {
                use = (0, _buttonFunctions2.default)("custom", props, state, self);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: this.state.keys, style: use.BUTTONSTYLES.buttonStyles, id: this.state.id, className: this.state.className, onClick: this.state.onClick, onMouseEnter: use.changeHover, onMouseLeave: use.changeHoverBack },
                    CHILDS[0]
                )];
            }
            this.setState({ buttonStyle: styledButton, childs: CHILDS, styleHolder: use });
        }
    }, {
        key: 'renderStuff',
        value: function renderStuff() {
            var props = this.props;
            var state = this.state;
            var styledButton = void 0,
                use = '';
            var self = this;
            if (this.state.box === "1") {
                use = (0, _buttonFunctions2.default)("1", props, state, self, arguments[0], arguments[1]);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: this.state.keys,
                        style: use.BUTTONSTYLES.buttonStyles,
                        id: this.state.id, className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: use.changeHover,
                        onMouseOut: use.changeHoverBack
                    },
                    this.state.childs[0]
                )];
            } else if (this.state.box === "2") {
                use = (0, _buttonFunctions2.default)("2", props, state, self, arguments[0], arguments[1], arguments[2]);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: this.state.keys,
                        style: use.BUTTONSTYLES.buttonStyles,
                        id: this.state.id,
                        className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: use.changeHover,
                        onMouseLeave: use.changeHoverBack },
                    this.state.childs[0]
                )];
            } else if (this.state.box === "3") {
                use = (0, _buttonFunctions2.default)("3", props, state, self, arguments[0]);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: this.state.keys,
                        style: use.BUTTONSTYLES.buttonStyles,
                        id: this.state.id,
                        className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: use.changeHover,
                        onMouseLeave: use.changeHoverBack },
                    this.state.childs[0]
                )];
            } else if (this.state.box === "4") {
                use = (0, _buttonFunctions2.default)("4", props, state, self, arguments[0], arguments[1]);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: this.state.keys,
                        style: use.BUTTONSTYLES.buttonStyles,
                        id: this.state.id,
                        className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: use.changeHover,
                        onMouseLeave: use.changeHoverBack },
                    this.state.childs[0]
                )];
            } else if (this.state.box === "5") {
                use = (0, _buttonFunctions2.default)("5", props, state, self, arguments[0]);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: this.state.keys,
                        style: use.BUTTONSTYLES.buttonStyles,
                        id: this.state.id,
                        className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: use.changeHover,
                        onMouseLeave: use.changeHoverBack },
                    this.state.childs[0]
                )];
            } else {
                use = (0, _buttonFunctions2.default)("custom", props, state, self, arguments[0], arguments[1]);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: this.state.keys,
                        style: use.BUTTONSTYLES.buttonStyles,
                        id: this.state.id,
                        className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: use.changeHover,
                        onMouseLeave: use.changeHoverBack },
                    this.state.childs[0]
                )];
            }
            this.setState({ buttonStyle: styledButton });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.state.buttonStyle
            );
        }
    }]);

    return Button;
}(_react2.default.Component);

exports.default = Button;