'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/reset.css');

require('../css/animations.css');

var _togglerFunctions = require('./togglerFunctions/togglerFunctions');

var _togglerFunctions2 = _interopRequireDefault(_togglerFunctions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toggler = function (_Component) {
    _inherits(Toggler, _Component);

    function Toggler(props) {
        _classCallCheck(this, Toggler);

        var _this = _possibleConstructorReturn(this, (Toggler.__proto__ || Object.getPrototypeOf(Toggler)).call(this, props));

        _this.state = {
            show: false,
            position: props.position || 'fixed',
            width: props.width,
            height: props.height,
            top: props.top,
            background: props.background || 'white',
            buttonText: props.buttonText || 'toggler1',
            bColor: props.bColor || 'black',
            bBackground: props.bBackground,
            bFontSize: props.bFontSize || '1.333em',
            bFontVariant: props.bFontVariant,
            bFontWeight: props.bFontWeight,
            bTextShadow: props.bTextShadow,
            bMargin: props.bMargin,
            bPadding: props.bPadding,
            bBorderLeft: props.bBorderLeft,
            bBorderRight: props.bBorderRight,
            bBorderTop: props.bBorderTop,
            bBorderBottom: props.bBorderBottom,
            bBorder: props.bBorder,
            border: props.border,
            bLEft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            left: props.left,
            right: props.right,
            mainid: props.mainid,
            toggleid: props.toggleid,
            titleid: props.titleid,
            titleClassName: props.titleClassName,
            mainClassName: props.mainClassName,
            toggleClassName: props.toggleClassName,
            boxShadow: props.shadow || '1px 2px 2px black',
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            childs: [],
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            box: props.box,
            keys: '',
            styledToggler: ''
        };
        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }

    _createClass(Toggler, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var props = this.props;
            var state = this.state;
            var styledToggler = void 0,
                use = '';
            var self = this;
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            var tempKeys = [];
            for (var _i = 0; _i <= CHILDS.length; _i++) {
                tempKeys.push(tempKeys[_i] = Math.random());
            }
            if (this.state.box === "1") {
                use = (0, _togglerFunctions2.default)("1", props, state, self);
                styledToggler = [_react2.default.createElement(
                    'div',
                    { key: tempKeys[0], id: this.state.mainid, className: this.state.mainClassName },
                    _react2.default.createElement(
                        'div',
                        { style: use.CLICKBOX, id: this.state.titleid, className: this.state.titleClassName, onClick: this.toggle },
                        this.state.buttonText
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: use.TOGGLERBOX, id: this.state.toggleid, className: this.state.toggleClassName },
                        CHILDS
                    )
                )];
            } else if (this.state.box === "2") {
                use = (0, _togglerFunctions2.default)("2", props, state, self);
                styledToggler = [_react2.default.createElement(
                    'div',
                    { key: tempKeys[0], id: this.state.mainid, style: use.FULLELEMENT, className: this.state.mainClassName },
                    _react2.default.createElement(
                        'div',
                        { style: use.CLICKBOX, id: this.state.titleid, className: this.state.titleClassName, onClick: this.toggle },
                        this.state.buttonText
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: use.TOGGLERBOX, id: this.state.toggleid, className: this.state.toggleClassName },
                        CHILDS
                    )
                )];
            } else if (this.state.box === "3") {
                var labels = [];
                var text = [];
                for (var i = 0; i < CHILDS.length; i += 1) {
                    if ((i + 1) % 2 === 0) {
                        text.push(CHILDS[i]);
                    } else {
                        labels.push(CHILDS[i]);
                    }
                }
                use = (0, _togglerFunctions2.default)("3", props, state, self);
                var CHECKS = labels.map(function (x, i, arr) {
                    return _react2.default.createElement('input', { key: i, id: 'tab' + (i + 1), type: 'radio', name: 'panel_select', defaultChecked: true, style: use.CHECKSSTYLE });
                });
                var LABELS = labels.map(function (x, i, arr) {
                    return _react2.default.createElement(
                        'label',
                        { key: i, style: use.LABELSSTYLES, htmlFor: 'tab' + (i + 1) },
                        x
                    );
                });
                var TEXT = text.map(function (x, i, arr) {
                    return _react2.default.createElement(
                        'div',
                        { key: i, id: 'panel' + (i + 1), className: _this2.state.panelClassName },
                        _react2.default.createElement(
                            'p',
                            { style: use.TEXTBOX },
                            x
                        )
                    );
                });
                styledToggler = [_react2.default.createElement(
                    'div',
                    { key: tempKeys[0], style: use.PANELS, id: this.state.mainid, className: 'panels ' + this.state.mainClassName },
                    CHECKS,
                    _react2.default.createElement(
                        'nav',
                        { id: this.state.toggleid, className: this.state.toggleClassName },
                        LABELS
                    ),
                    TEXT
                )];
            } else if (this.state.box === "4") {
                use = (0, _togglerFunctions2.default)("4", props, state, self);
                var _labels = [];
                var _text = [];
                for (var i = 0; i < CHILDS.length; i += 1) {
                    if ((i + 1) % 2 === 0) {
                        _text.push(CHILDS[i]);
                    } else {
                        _labels.push(CHILDS[i]);
                    }
                }
                var _CHECKS = _labels.map(function (x, i, arr) {
                    return _react2.default.createElement('input', { key: i, id: 'Vtab' + (i + 1), type: 'radio', name: 'Vpanel_select', defaultChecked: true, style: use.CHECKSSTYLE });
                });
                var _LABELS = _labels.map(function (x, i, arr) {
                    return _react2.default.createElement(
                        'label',
                        { key: i, style: use.LABELSSTYLES, htmlFor: 'Vtab' + (i + 1) },
                        x
                    );
                });
                var _TEXT = _text.map(function (x, i, arr) {
                    return _react2.default.createElement(
                        'div',
                        { key: i, id: 'Vpanel' + (i + 1), className: _this2.state.panelClassName },
                        _react2.default.createElement(
                            'p',
                            { style: use.TEXTBOX },
                            x
                        )
                    );
                });
                styledToggler = [_react2.default.createElement(
                    'div',
                    { key: tempKeys[0], style: use.PANELS, id: this.state.mainid, className: 'vpanels ' + this.state.mainClassName },
                    _CHECKS,
                    _react2.default.createElement(
                        'nav',
                        { style: use.LABELTITLES, id: this.state.toggleid, className: this.state.toggleClassName },
                        _LABELS
                    ),
                    _TEXT
                )];
            } else {
                use = (0, _togglerFunctions2.default)("1", props, state, self);
                styledToggler = [_react2.default.createElement(
                    'div',
                    { key: tempKeys[0], id: this.state.mainid, className: this.state.mainClassName },
                    _react2.default.createElement(
                        'div',
                        { style: use.CLICKBOX, id: this.state.titleid, className: this.state.titleClassName, onClick: this.toggle },
                        this.state.buttonText
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: use.TOGGLERBOX, id: this.state.toggleid, className: this.state.toggleClassName },
                        CHILDS
                    )
                )];
            }
            this.setState({ childs: CHILDS, keys: tempKeys, styledToggler: styledToggler });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var _this3 = this;

            var props = newProps;
            var state = this.state;
            var styledToggler = void 0,
                use = '';
            var self = this;
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            if (this.state.box === "1") {
                use = (0, _togglerFunctions2.default)("1", props, state, self);
                styledToggler = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], id: this.state.mainid, className: this.state.mainClassName },
                    _react2.default.createElement(
                        'div',
                        { style: use.CLICKBOX, id: this.state.titleid, className: this.state.titleClassName, onClick: this.toggle },
                        this.state.buttonText
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: use.TOGGLERBOX, id: this.state.toggleid, className: this.state.toggleClassName },
                        CHILDS
                    )
                )];
            } else if (this.state.box === "2") {
                use = (0, _togglerFunctions2.default)("2", props, state, self);
                styledToggler = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], id: this.state.mainid, style: use.FULLELEMENT, className: this.state.mainClassName },
                    _react2.default.createElement(
                        'div',
                        { style: use.CLICKBOX, id: this.state.titleid, className: this.state.titleClassName, onClick: this.toggle },
                        this.state.buttonText
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: use.TOGGLERBOX, id: this.state.toggleid, className: this.state.toggleClassName },
                        CHILDS
                    )
                )];
            } else if (this.state.box === "3") {
                use = (0, _togglerFunctions2.default)("3", props, state, self);
                var labels = [];
                var text = [];
                for (var i = 0; i < CHILDS.length; i += 1) {
                    if ((i + 1) % 2 === 0) {
                        text.push(CHILDS[i]);
                    } else {
                        labels.push(CHILDS[i]);
                    }
                }
                var CHECKS = labels.map(function (x, i, arr) {
                    return _react2.default.createElement('input', { key: i, id: 'tab' + (i + 1), type: 'radio', name: 'panel_select', defaultChecked: true, style: use.CHECKSSTYLE });
                });
                var LABELS = labels.map(function (x, i, arr) {
                    return _react2.default.createElement(
                        'label',
                        { key: i, style: use.LABELSSTYLES, htmlFor: 'tab' + (i + 1) },
                        x
                    );
                });
                var TEXT = text.map(function (x, i, arr) {
                    return _react2.default.createElement(
                        'div',
                        { key: i, id: 'panel' + (i + 1), className: _this3.state.panelClassName },
                        _react2.default.createElement(
                            'p',
                            { style: use.TEXTBOX },
                            x
                        )
                    );
                });
                styledToggler = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: use.PANELS, id: this.state.mainid, className: 'panels ' + this.state.mainClassName },
                    CHECKS,
                    _react2.default.createElement(
                        'nav',
                        { id: this.state.toggleid, className: this.state.toggleClassName },
                        LABELS
                    ),
                    TEXT
                )];
            } else if (this.state.box === "4") {
                use = (0, _togglerFunctions2.default)("4", props, state, self);
                var _labels2 = [];
                var _text2 = [];
                for (var i = 0; i < CHILDS.length; i += 1) {
                    if ((i + 1) % 2 === 0) {
                        _text2.push(CHILDS[i]);
                    } else {
                        _labels2.push(CHILDS[i]);
                    }
                }
                var _CHECKS2 = _labels2.map(function (x, i, arr) {
                    return _react2.default.createElement('input', { key: i, id: 'Vtab' + (i + 1), type: 'radio', name: 'Vpanel_select', defaultChecked: true, style: use.CHECKSSTYLE });
                });
                var _LABELS2 = _labels2.map(function (x, i, arr) {
                    return _react2.default.createElement(
                        'label',
                        { key: i, style: use.LABELSSTYLES, htmlFor: 'Vtab' + (i + 1) },
                        x
                    );
                });
                var _TEXT2 = _text2.map(function (x, i, arr) {
                    return _react2.default.createElement(
                        'div',
                        { key: i, id: 'Vpanel' + (i + 1), className: _this3.state.panelClassName },
                        _react2.default.createElement(
                            'p',
                            { style: use.TEXTBOX },
                            x
                        )
                    );
                });
                styledToggler = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: use.PANELS, id: this.state.mainid, className: 'vpanels ' + this.state.mainClassName },
                    _CHECKS2,
                    _react2.default.createElement(
                        'nav',
                        { style: use.LABELTITLES, id: this.state.toggleid, className: this.state.toggleClassName },
                        _LABELS2
                    ),
                    _TEXT2
                )];
            } else {
                use = (0, _togglerFunctions2.default)("1", props, state, self);
                styledToggler = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], id: this.state.mainid, className: this.state.mainClassName },
                    _react2.default.createElement(
                        'div',
                        { style: use.CLICKBOX, id: this.state.titleid, className: this.state.titleClassName, onClick: this.toggle },
                        this.state.buttonText
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: use.TOGGLERBOX, id: this.state.toggleid, className: this.state.toggleClassName },
                        CHILDS
                    )
                )];
            }
            this.setState({ childs: CHILDS, styledToggler: styledToggler });
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            var props = this.props;
            var state = this.state;
            var styledToggler = void 0,
                use = '';
            var self = this;
            var show = !this.state.show;
            if (this.state.box === "1") {
                use = (0, _togglerFunctions2.default)("1", props, state, self, show);
                styledToggler = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], id: this.state.mainid, className: this.state.mainClassName },
                    _react2.default.createElement(
                        'div',
                        { style: use.CLICKBOX, id: this.state.titleid, className: this.state.titleClassName, onClick: this.toggle },
                        this.state.buttonText
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: use.TOGGLERBOX, id: this.state.toggleid, className: this.state.toggleClassName },
                        this.state.childs
                    )
                )];
            } else if (this.state.box === "2") {
                use = (0, _togglerFunctions2.default)("2", props, state, self, show);
                styledToggler = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], id: this.state.mainid, style: use.FULLELEMENT, className: this.state.mainClassName },
                    _react2.default.createElement(
                        'div',
                        { style: use.CLICKBOX, id: this.state.titleid, className: this.state.titleClassName, onClick: this.toggle },
                        this.state.buttonText
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: use.TOGGLERBOX, id: this.state.toggleid, className: this.state.toggleClassName },
                        this.state.childs
                    )
                )];
            } else {
                use = (0, _togglerFunctions2.default)("1", props, state, self, show);
                styledToggler = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], id: this.state.mainid, className: this.state.mainClassName },
                    _react2.default.createElement(
                        'div',
                        { style: use.CLICKBOX, id: this.state.titleid, className: this.state.titleClassName, onClick: this.toggle },
                        this.state.buttonText
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: use.TOGGLERBOX, id: this.state.toggleid, className: this.state.toggleClassName },
                        this.state.childs
                    )
                )];
            }
            this.setState({
                show: show,
                styledToggler: styledToggler
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.state.styledToggler
            );
        }
    }]);

    return Toggler;
}(_react.Component);

exports.default = Toggler;