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

var _reactResponsive = require('react-responsive');

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

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
            vars: props.vars,
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
            var tempkeys = [];
            for (var i = 0; i <= 3; i++) {
                tempkeys.push(tempkeys[i] = Math.random());
            }
            switch (this.state.box) {
                case "1":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _buttonFunctions2.default)("1", props, state, self);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id, className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseOut: use.changeHoverBack
                                    },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id, className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseOut: use.changeHoverBack
                                    },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id, className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseOut: use.changeHoverBack
                                    },
                                    CHILDS[0]
                                )
                            )];
                        default:
                            use = (0, _buttonFunctions2.default)("1", props, state, self);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id, className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseOut: use.changeHoverBack
                                    },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id, className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseOut: use.changeHoverBack
                                    },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id, className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseOut: use.changeHoverBack
                                    },
                                    CHILDS[0]
                                )
                            )];
                    }
                    break;
                case "2":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _buttonFunctions2.default)("2", props, state, self);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            )];
                        default:
                            use = (0, _buttonFunctions2.default)("2", props, state, self);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            )];
                    }
                    break;
                case "3":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _buttonFunctions2.default)("3", props, state, self);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            )];
                        default:
                            use = (0, _buttonFunctions2.default)("3", props, state, self);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            )];
                    }
                    break;
                case "4":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _buttonFunctions2.default)("4", props, state, self);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            )];
                        default:
                            use = (0, _buttonFunctions2.default)("4", props, state, self);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            )];
                    }
                    break;
                case "5":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _buttonFunctions2.default)("5", props, state, self);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            )];
                        default:
                            use = (0, _buttonFunctions2.default)("5", props, state, self);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            )];
                    }
                    break;
                default:
                    use = (0, _buttonFunctions2.default)("1", props, state, self);
                    styledButton = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[0], minWidth: 1224 },
                        _react2.default.createElement(
                            'button',
                            {
                                style: use.buttonStyles,
                                id: this.state.id, className: this.state.className,
                                onClick: this.state.onClick,
                                onMouseEnter: use.changeHover,
                                onMouseOut: use.changeHoverBack
                            },
                            CHILDS[0]
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement(
                            'button',
                            {
                                style: use.mdbuttonStyles,
                                id: this.state.id, className: this.state.className,
                                onClick: this.state.onClick,
                                onMouseEnter: use.changeHover,
                                onMouseOut: use.changeHoverBack
                            },
                            CHILDS[0]
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[2], maxWidth: 767 },
                        _react2.default.createElement(
                            'button',
                            {
                                style: use.smbuttonStyles,
                                id: this.state.id, className: this.state.className,
                                onClick: this.state.onClick,
                                onMouseEnter: use.changeHover,
                                onMouseOut: use.changeHoverBack
                            },
                            CHILDS[0]
                        )
                    )];
            }

            this.setState({ buttonStyle: styledButton, childs: CHILDS, styleHolder: use, keys: tempkeys });
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
            switch (this.state.box) {
                case "1":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _buttonFunctions2.default)("1", props, state, self);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id, className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseOut: use.changeHoverBack
                                    },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id, className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseOut: use.changeHoverBack
                                    },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id, className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseOut: use.changeHoverBack
                                    },
                                    CHILDS[0]
                                )
                            )];
                        default:
                            use = (0, _buttonFunctions2.default)("1", props, state, self);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id, className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseOut: use.changeHoverBack
                                    },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id, className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseOut: use.changeHoverBack
                                    },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id, className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseOut: use.changeHoverBack
                                    },
                                    CHILDS[0]
                                )
                            )];
                    }
                    break;
                case "2":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _buttonFunctions2.default)("2", props, state, self);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            )];
                        default:
                            use = (0, _buttonFunctions2.default)("2", props, state, self);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            )];
                    }
                    break;
                case "3":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _buttonFunctions2.default)("3", props, state, self);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            )];
                        default:
                            use = (0, _buttonFunctions2.default)("3", props, state, self);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            )];
                    }
                    break;
                case "4":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _buttonFunctions2.default)("4", props, state, self);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            )];
                        default:
                            use = (0, _buttonFunctions2.default)("4", props, state, self);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            )];
                    }
                    break;
                case "5":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _buttonFunctions2.default)("5", props, state, self);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            )];
                        default:
                            use = (0, _buttonFunctions2.default)("5", props, state, self);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    CHILDS[0]
                                )
                            )];
                    }
                    break;
                default:
                    use = (0, _buttonFunctions2.default)("1", props, state, self);
                    styledButton = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[0], minWidth: 1224 },
                        _react2.default.createElement(
                            'button',
                            {
                                style: use.buttonStyles,
                                id: this.state.id, className: this.state.className,
                                onClick: this.state.onClick,
                                onMouseEnter: use.changeHover,
                                onMouseOut: use.changeHoverBack
                            },
                            CHILDS[0]
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement(
                            'button',
                            {
                                style: use.mdbuttonStyles,
                                id: this.state.id, className: this.state.className,
                                onClick: this.state.onClick,
                                onMouseEnter: use.changeHover,
                                onMouseOut: use.changeHoverBack
                            },
                            CHILDS[0]
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[2], maxWidth: 767 },
                        _react2.default.createElement(
                            'button',
                            {
                                style: use.smbuttonStyles,
                                id: this.state.id, className: this.state.className,
                                onClick: this.state.onClick,
                                onMouseEnter: use.changeHover,
                                onMouseOut: use.changeHoverBack
                            },
                            CHILDS[0]
                        )
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
            switch (this.state.box) {
                case "1":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _buttonFunctions2.default)("1", props, state, self, arguments[0], arguments[1]);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id, className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseOut: use.changeHoverBack
                                    },
                                    this.state.childs[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id, className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseOut: use.changeHoverBack
                                    },
                                    this.state.childs[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id, className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseOut: use.changeHoverBack
                                    },
                                    this.state.childs[0]
                                )
                            )];
                        default:
                            use = (0, _buttonFunctions2.default)("1", props, state, self, arguments[0], arguments[1]);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id, className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseOut: use.changeHoverBack
                                    },
                                    this.state.childs[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id, className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseOut: use.changeHoverBack
                                    },
                                    this.state.childs[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id, className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseOut: use.changeHoverBack
                                    },
                                    this.state.childs[0]
                                )
                            )];
                    }
                    break;
                case "2":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _buttonFunctions2.default)("2", props, state, self, arguments[0], arguments[1], arguments[2]);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    this.state.childs[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    this.state.childs[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    this.state.childs[0]
                                )
                            )];
                        default:
                            use = (0, _buttonFunctions2.default)("2", props, state, self, arguments[0], arguments[1], arguments[2]);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    this.state.childs[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    this.state.childs[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    this.state.childs[0]
                                )
                            )];
                    }
                    break;
                case "3":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _buttonFunctions2.default)("3", props, state, self, arguments[0]);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    this.state.childs[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    this.state.childs[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    this.state.childs[0]
                                )
                            )];
                        default:
                            use = (0, _buttonFunctions2.default)("3", props, state, self, arguments[0]);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    this.state.childs[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    this.state.childs[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    this.state.childs[0]
                                )
                            )];
                    }
                    break;
                case "4":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _buttonFunctions2.default)("4", props, state, self, arguments[0], arguments[1]);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    this.state.childs[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    this.state.childs[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    this.state.childs[0]
                                )
                            )];
                        default:
                            use = (0, _buttonFunctions2.default)("4", props, state, self, arguments[0], arguments[1]);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    this.state.childs[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    this.state.childs[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    this.state.childs[0]
                                )
                            )];
                    }

                    break;
                case "5":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _buttonFunctions2.default)("5", props, state, self, arguments[0]);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    this.state.childs[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    this.state.childs[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    this.state.childs[0]
                                )
                            )];
                        default:
                            use = (0, _buttonFunctions2.default)("5", props, state, self, arguments[0]);
                            styledButton = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.buttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    this.state.childs[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.mdbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    this.state.childs[0]
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        style: use.smbuttonStyles,
                                        id: this.state.id,
                                        className: this.state.className,
                                        onClick: this.state.onClick,
                                        onMouseEnter: use.changeHover,
                                        onMouseLeave: use.changeHoverBack },
                                    this.state.childs[0]
                                )
                            )];
                    }
                    break;
                default:
                    use = (0, _buttonFunctions2.default)("1", props, state, self, arguments[0], arguments[1]);
                    styledButton = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[0], minWidth: 1224 },
                        _react2.default.createElement(
                            'button',
                            {
                                style: use.buttonStyles,
                                id: this.state.id, className: this.state.className,
                                onClick: this.state.onClick,
                                onMouseEnter: use.changeHover,
                                onMouseOut: use.changeHoverBack
                            },
                            this.state.childs[0]
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement(
                            'button',
                            {
                                style: use.mdbuttonStyles,
                                id: this.state.id, className: this.state.className,
                                onClick: this.state.onClick,
                                onMouseEnter: use.changeHover,
                                onMouseOut: use.changeHoverBack
                            },
                            this.state.childs[0]
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[2], maxWidth: 767 },
                        _react2.default.createElement(
                            'button',
                            {
                                style: use.smbuttonStyles,
                                id: this.state.id, className: this.state.className,
                                onClick: this.state.onClick,
                                onMouseEnter: use.changeHover,
                                onMouseOut: use.changeHoverBack
                            },
                            this.state.childs[0]
                        )
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