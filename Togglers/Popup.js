'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactResponsive = require('react-responsive');

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

require('../css/reset.css');

require('../css/animations.css');

var _popupFunctions = require('./togglerFunctions/popupFunctions');

var _popupFunctions2 = _interopRequireDefault(_popupFunctions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popup = function (_React$Component) {
    _inherits(Popup, _React$Component);

    function Popup(props) {
        _classCallCheck(this, Popup);

        var _this = _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props));

        _this.state = {
            visibility: "hidden",
            childs: '',
            keys: '',
            styledPopup: '',
            show: false,
            box: props.box,
            vars: props.vars
        };
        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }

    _createClass(Popup, [{
        key: 'toggle',
        value: function toggle() {
            var _this2 = this;

            var props = this.props;
            var state = this.state;
            var styledPopup = void 0,
                use = '';
            var self = this;
            var show = !this.state.show;
            switch (this.state.box) {
                case "1":
                    switch (this.state.vars) {
                        case "1":
                            if (!this.state.show) {
                                setTimeout(function () {
                                    return _this2.toggle();
                                }, 3000);
                            }

                            use = (0, _popupFunctions2.default)("1", props, state, self, show);
                            styledPopup = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK, onClick: this.toggle },
                                    this.state.childs[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        this.state.childs[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK, onClick: this.toggle },
                                    this.state.childs[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        this.state.childs[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK, onClick: this.toggle },
                                    this.state.childs[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        this.state.childs[1]
                                    )
                                )
                            )];
                        default:
                            if (!this.state.show) {
                                setTimeout(function () {
                                    return _this2.toggle();
                                }, 3000);
                            }

                            use = (0, _popupFunctions2.default)("1", props, state, self, show);
                            styledPopup = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK, onClick: this.toggle },
                                    this.state.childs[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        this.state.childs[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK, onClick: this.toggle },
                                    this.state.childs[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        this.state.childs[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK, onClick: this.toggle },
                                    this.state.childs[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        this.state.childs[1]
                                    )
                                )
                            )];
                    }
                    break;
                case "2":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _popupFunctions2.default)("2", props, state, self, show);
                            styledPopup = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK,
                                        onMouseEnter: this.toggle,
                                        onMouseLeave: this.toggle },
                                    this.state.childs[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        this.state.childs[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK,
                                        onMouseEnter: this.toggle,
                                        onMouseLeave: this.toggle },
                                    this.state.childs[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        this.state.childs[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK,
                                        onMouseEnter: this.toggle,
                                        onMouseLeave: this.toggle },
                                    this.state.childs[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        this.state.childs[1]
                                    )
                                )
                            )];
                        default:
                            use = (0, _popupFunctions2.default)("2", props, state, self, show);
                            styledPopup = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK,
                                        onMouseEnter: this.toggle,
                                        onMouseLeave: this.toggle },
                                    this.state.childs[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        this.state.childs[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK,
                                        onMouseEnter: this.toggle,
                                        onMouseLeave: this.toggle },
                                    this.state.childs[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        this.state.childs[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK,
                                        onMouseEnter: this.toggle,
                                        onMouseLeave: this.toggle },
                                    this.state.childs[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        this.state.childs[1]
                                    )
                                )
                            )];
                    }
                    break;
                default:
                    if (!this.state.show) {
                        setTimeout(function () {
                            return _this2.toggle();
                        }, 3000);
                    }

                    use = (0, _popupFunctions2.default)("1", props, state, self, show);
                    styledPopup = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[0], minWidth: 1224 },
                        _react2.default.createElement(
                            'div',
                            { style: use.POPUPCLICK, onClick: this.toggle },
                            this.state.childs[0],
                            _react2.default.createElement(
                                'div',
                                { style: use.POPUPSTYLE },
                                this.state.childs[1]
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement(
                            'div',
                            { style: use.POPUPCLICK, onClick: this.toggle },
                            this.state.childs[0],
                            _react2.default.createElement(
                                'div',
                                { style: use.POPUPSTYLE },
                                this.state.childs[1]
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[2], maxWidth: 767 },
                        _react2.default.createElement(
                            'div',
                            { style: use.POPUPCLICK, onClick: this.toggle },
                            this.state.childs[0],
                            _react2.default.createElement(
                                'div',
                                { style: use.POPUPSTYLE },
                                this.state.childs[1]
                            )
                        )
                    )];

            }
            return this.setState({ visibility: 'visible', styledPopup: styledPopup, show: !this.state.show });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var props = this.props;
            var state = this.state;
            var styledPopup = void 0,
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
                            use = (0, _popupFunctions2.default)("1", props, state, self);
                            styledPopup = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK, onClick: this.toggle },
                                    CHILDS[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK, onClick: this.toggle },
                                    CHILDS[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK, onClick: this.toggle },
                                    CHILDS[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        CHILDS[1]
                                    )
                                )
                            )];
                        default:
                            use = (0, _popupFunctions2.default)("1", props, state, self);
                            styledPopup = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK, onClick: this.toggle },
                                    CHILDS[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK, onClick: this.toggle },
                                    CHILDS[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK, onClick: this.toggle },
                                    CHILDS[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        CHILDS[1]
                                    )
                                )
                            )];
                    }
                    break;

                case "2":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _popupFunctions2.default)("2", props, state, self);
                            styledPopup = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK,
                                        onMouseEnter: this.toggle,
                                        onMouseLeave: this.toggle },
                                    CHILDS[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK,
                                        onMouseEnter: this.toggle,
                                        onMouseLeave: this.toggle },
                                    CHILDS[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK,
                                        onMouseEnter: this.toggle,
                                        onMouseLeave: this.toggle },
                                    CHILDS[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        CHILDS[1]
                                    )
                                )
                            )];
                        default:
                            use = (0, _popupFunctions2.default)("2", props, state, self);
                            styledPopup = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK,
                                        onMouseEnter: this.toggle,
                                        onMouseLeave: this.toggle },
                                    CHILDS[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK,
                                        onMouseEnter: this.toggle,
                                        onMouseLeave: this.toggle },
                                    CHILDS[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK,
                                        onMouseEnter: this.toggle,
                                        onMouseLeave: this.toggle },
                                    CHILDS[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        CHILDS[1]
                                    )
                                )
                            )];
                    }
                    break;
                default:
                    use = (0, _popupFunctions2.default)("1", props, state, self);
                    styledPopup = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[0], minWidth: 1224 },
                        _react2.default.createElement(
                            'div',
                            { style: use.POPUPCLICK, onClick: this.toggle },
                            CHILDS[0],
                            _react2.default.createElement(
                                'div',
                                { style: use.POPUPSTYLE },
                                CHILDS[1]
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement(
                            'div',
                            { style: use.POPUPCLICK, onClick: this.toggle },
                            CHILDS[0],
                            _react2.default.createElement(
                                'div',
                                { style: use.POPUPSTYLE },
                                CHILDS[1]
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[2], maxWidth: 767 },
                        _react2.default.createElement(
                            'div',
                            { style: use.POPUPCLICK, onClick: this.toggle },
                            CHILDS[0],
                            _react2.default.createElement(
                                'div',
                                { style: use.POPUPSTYLE },
                                CHILDS[1]
                            )
                        )
                    )];

            }

            this.setState({ childs: CHILDS, keys: tempkeys, styledPopup: styledPopup });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var props = newProps;
            var state = this.state;
            var styledPopup = void 0,
                use = '';
            var self = this;
            var CHILDS = _react2.default.Children.toArray(newProps.children);

            switch (this.state.box) {
                case "1":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _popupFunctions2.default)("1", props, state, self);
                            styledPopup = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK, onClick: this.toggle },
                                    CHILDS[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK, onClick: this.toggle },
                                    CHILDS[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK, onClick: this.toggle },
                                    CHILDS[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        CHILDS[1]
                                    )
                                )
                            )];
                        default:
                            use = (0, _popupFunctions2.default)("1", props, state, self);
                            styledPopup = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK, onClick: this.toggle },
                                    CHILDS[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK, onClick: this.toggle },
                                    CHILDS[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK, onClick: this.toggle },
                                    CHILDS[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        CHILDS[1]
                                    )
                                )
                            )];
                    }
                    break;

                case "2":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _popupFunctions2.default)("2", props, state, self);
                            styledPopup = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK,
                                        onMouseEnter: this.toggle,
                                        onMouseLeave: this.toggle },
                                    CHILDS[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK,
                                        onMouseEnter: this.toggle,
                                        onMouseLeave: this.toggle },
                                    CHILDS[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK,
                                        onMouseEnter: this.toggle,
                                        onMouseLeave: this.toggle },
                                    CHILDS[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        CHILDS[1]
                                    )
                                )
                            )];
                        default:
                            use = (0, _popupFunctions2.default)("2", props, state, self);
                            styledPopup = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK,
                                        onMouseEnter: this.toggle,
                                        onMouseLeave: this.toggle },
                                    CHILDS[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK,
                                        onMouseEnter: this.toggle,
                                        onMouseLeave: this.toggle },
                                    CHILDS[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.POPUPCLICK,
                                        onMouseEnter: this.toggle,
                                        onMouseLeave: this.toggle },
                                    CHILDS[0],
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.POPUPSTYLE },
                                        CHILDS[1]
                                    )
                                )
                            )];
                    }
                    break;
                default:
                    use = (0, _popupFunctions2.default)("1", props, state, self);
                    styledPopup = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[0], minWidth: 1224 },
                        _react2.default.createElement(
                            'div',
                            { style: use.POPUPCLICK, onClick: this.toggle },
                            CHILDS[0],
                            _react2.default.createElement(
                                'div',
                                { style: use.POPUPSTYLE },
                                CHILDS[1]
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement(
                            'div',
                            { style: use.POPUPCLICK, onClick: this.toggle },
                            CHILDS[0],
                            _react2.default.createElement(
                                'div',
                                { style: use.POPUPSTYLE },
                                CHILDS[1]
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[2], maxWidth: 767 },
                        _react2.default.createElement(
                            'div',
                            { style: use.POPUPCLICK, onClick: this.toggle },
                            CHILDS[0],
                            _react2.default.createElement(
                                'div',
                                { style: use.POPUPSTYLE },
                                CHILDS[1]
                            )
                        )
                    )];

            }

            return this.setState({ childs: CHILDS, styledPopup: styledPopup });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.state.styledPopup
            );
        }
    }]);

    return Popup;
}(_react2.default.Component);

exports.default = Popup;