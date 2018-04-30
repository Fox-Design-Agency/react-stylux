'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Button = undefined;

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

var Button = exports.Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button(props) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

        _this.state = {
            onClick: props.onClick,
            type: props.type,
            id: props.id,
            className: props.className,
            width: props.width,
            height: props.height,
            fontSize: props.fontSize || '20px',
            color: props.color || '#000000',
            hoverColor: props.hover || 'white',
            hoverBackground: props.hoverBackground || '#000000',
            revColor: props.color || '#000000',
            frev: props.color || 'white',
            background: props.background || '#ffffff',
            backgroundColor: props.background || 'white',
            revBackground: props.background || '#ffffff',
            borderRadius: props.borderRadius || '28px',
            border: props.border || 'solid #000000 2px',
            padding: props.padding || '10px 20px 10px 20px',
            margin: props.margin || "0 0 17px 0",
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            trandform: props.transform,
            trandformrev: props.transform || 'translateY(-4px)',
            hovBackground: props.hovBackground || '#eee',
            hovBoxShadow: props.hovBoxShadow || '0 5px #666',
            floatBoxShadow: props.boxShadow,
            boxShadow: props.boxShadow || '0 9px #999',
            boxShadowRev: props.boxShadow || '0 9px #999',
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            buttonStyle: '',
            childs: ''
        };
        _this.renderStuff = _this.renderStuff.bind(_this);
        return _this;
    }

    _createClass(Button, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var props = this.props;
            var state = this.state;
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            var styledButton = '';
            var self = this;
            if (this.state.type === "flat") {
                var use = (0, _buttonFunctions2.default)("flat", props, state, self);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: Math.random(),
                        style: use.BUTTONSTYLES.buttonStyles,
                        id: this.state.id, className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: use.changeHoverBack,
                        onMouseOut: use.changeHover
                    },
                    CHILDS[0]
                )];
            } else if (this.state.type === "raised") {
                var _use = (0, _buttonFunctions2.default)("raised", props, state, self);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: Math.random(),
                        style: _use.BUTTONSTYLES.buttonStyles,
                        id: this.state.id,
                        className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: _use.changeHoverBack,
                        onMouseLeave: _use.changeHover },
                    CHILDS[0]
                )];
            } else if (this.state.type === "floating") {
                var _use2 = (0, _buttonFunctions2.default)("floating", props, state, self);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: Math.random(),
                        style: _use2.BUTTONSTYLES.buttonStyles,
                        id: this.state.id,
                        className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: _use2.changeHoverBack,
                        onMouseLeave: _use2.changeHover },
                    CHILDS[0]
                )];
            } else if (this.state.type === "block") {
                var _use3 = (0, _buttonFunctions2.default)("block", props, state, self);
                styledButton = [_react2.default.createElement(
                    'button',
                    { style: _use3.BUTTONSTYLES.buttonStyles,
                        id: this.state.id,
                        className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: _use3.changeHover,
                        onMouseLeave: _use3.changeHoverBack },
                    CHILDS[0]
                )];
            } else if (this.state.type === "text") {
                var _use4 = (0, _buttonFunctions2.default)("text", props, state, self);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: Math.random(),
                        style: _use4.BUTTONSTYLES.buttonStyles,
                        id: this.state.id,
                        className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: _use4.changeHover,
                        onMouseLeave: _use4.changeHoverBack },
                    CHILDS[0]
                )];
            } else {}

            this.setState({ buttonStyle: styledButton, childs: CHILDS });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {
            var props = newProps;
            var state = this.state;
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            var styledButton = '';
            var self = this;
            if (this.state.type === "flat") {
                var use = (0, _buttonFunctions2.default)("flat", props, state, self);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: Math.random(),
                        style: use.BUTTONSTYLES.buttonStyles,
                        id: this.state.id, className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: use.changeHover,
                        onMouseLeave: use.changeHoverBack
                    },
                    CHILDS[0]
                )];
            } else if (this.state.type === "raised") {
                var _use5 = (0, _buttonFunctions2.default)("raised", props, state, self);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: Math.random(),
                        style: _use5.BUTTONSTYLES.buttonStyles,
                        id: this.state.id,
                        className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: _use5.changeHover,
                        onMouseLeave: _use5.changeHoverBack },
                    CHILDS[0]
                )];
            } else if (this.state.type === "floating") {
                var _use6 = (0, _buttonFunctions2.default)("floating", props, state, self);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: Math.random(),
                        style: _use6.BUTTONSTYLES.buttonStyles,
                        id: this.state.id,
                        className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: _use6.changeHover,
                        onMouseLeave: _use6.changeHoverBack },
                    CHILDS[0]
                )];
            } else if (this.state.type === "block") {
                var _use7 = (0, _buttonFunctions2.default)("block", props, state, self);
                styledButton = [_react2.default.createElement(
                    'button',
                    { style: _use7.BUTTONSTYLES.buttonStyles,
                        id: this.state.id,
                        className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: _use7.changeHoverBack,
                        onMouseLeave: _use7.changeHover },
                    CHILDS[0]
                )];
            } else if (this.state.type === "text") {
                var _use8 = (0, _buttonFunctions2.default)("text", props, state, self);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: Math.random(),
                        style: _use8.BUTTONSTYLES.buttonStyles,
                        id: this.state.id,
                        className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: _use8.changeHover,
                        onMouseLeave: _use8.changeHoverBack },
                    CHILDS[0]
                )];
            } else {}
            this.setState({ buttonStyle: styledButton, childs: CHILDS });
        }
    }, {
        key: 'renderStuff',
        value: function renderStuff() {
            var props = this.newProps;
            var state = this.state;
            var styledButton = '';
            var self = this;
            if (this.state.type === "flat") {
                var use = (0, _buttonFunctions2.default)("flat", props, state, self);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: Math.random(),
                        style: use.BUTTONSTYLES.buttonStyles,
                        id: this.state.id, className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: use.changeHoverBack,
                        onMouseOut: use.changeHover
                    },
                    this.state.childs[0]
                )];
            } else if (this.state.type === "raised") {
                var _use9 = (0, _buttonFunctions2.default)("raised", props, state, self);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: Math.random(),
                        style: _use9.BUTTONSTYLES.buttonStyles,
                        id: this.state.id,
                        className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: _use9.changeHover,
                        onMouseLeave: _use9.changeHoverBack },
                    this.state.childs[0]
                )];
            } else if (this.state.type === "floating") {
                var _use10 = (0, _buttonFunctions2.default)("floating", props, state, self);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: Math.random(),
                        style: _use10.BUTTONSTYLES.buttonStyles,
                        id: this.state.id,
                        className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: _use10.changeHoverBack,
                        onMouseLeave: _use10.changeHover },
                    this.state.childs[0]
                )];
            } else if (this.state.type === "block") {
                var _use11 = (0, _buttonFunctions2.default)("block", props, state, self);
                styledButton = [_react2.default.createElement(
                    'button',
                    { style: _use11.BUTTONSTYLES.buttonStyles,
                        id: this.state.id,
                        className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: _use11.changeHover,
                        onMouseLeave: _use11.changeHoverBack },
                    this.state.childs[0]
                )];
            } else if (this.state.type === "text") {
                var _use12 = (0, _buttonFunctions2.default)("text", props, state, self);
                styledButton = [_react2.default.createElement(
                    'button',
                    { key: Math.random(),
                        style: _use12.BUTTONSTYLES.buttonStyles,
                        id: this.state.id,
                        className: this.state.className,
                        onClick: this.state.onClick,
                        onMouseEnter: _use12.changeHover,
                        onMouseLeave: _use12.changeHoverBack },
                    this.state.childs[0]
                )];
            } else {}
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