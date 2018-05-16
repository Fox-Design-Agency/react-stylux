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

var _togglerFunctions = require('./togglerFunctions/togglerFunctions');

var _togglerFunctions2 = _interopRequireDefault(_togglerFunctions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toggler = function (_React$Component) {
    _inherits(Toggler, _React$Component);

    function Toggler(props) {
        _classCallCheck(this, Toggler);

        var _this = _possibleConstructorReturn(this, (Toggler.__proto__ || Object.getPrototypeOf(Toggler)).call(this, props));

        _this.state = {
            show: false,
            id: props.id,
            className: props.className,
            panelClassName: props.panelClassName,
            toggleClassName: props.toggleClassName,
            childs: [],
            box: props.box,
            vars: props.vars,
            keys: '',
            styledToggler: '',
            first: ''
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
                use = void 0,
                labels = void 0,
                text = void 0,
                CHECKS = void 0,
                LABELS = void 0,
                TEXT = '';
            var self = this;
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            var first = '';
            var tempkeys = [];
            for (var _i = 0; _i <= CHILDS.length + 3; _i++) {
                tempkeys.push(tempkeys[_i] = Math.random());
            }
            switch (this.state.box) {
                case "1":
                    switch (this.state.vars) {
                        case "1":
                            first = CHILDS.shift();
                            use = (0, _togglerFunctions2.default)("1", props, state, self);
                            styledToggler = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        CHILDS
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        CHILDS
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        CHILDS
                                    )
                                )
                            )];
                        default:
                            first = CHILDS.shift();
                            use = (0, _togglerFunctions2.default)("1", props, state, self);
                            styledToggler = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        CHILDS
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        CHILDS
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        CHILDS
                                    )
                                )
                            )];
                    }
                    break;
                case "2":
                    switch (this.state.vars) {
                        case "1":
                            first = CHILDS.shift();
                            use = (0, _togglerFunctions2.default)("2", props, state, self);
                            styledToggler = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { id: this.state.id, style: use.FULLELEMENT, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        CHILDS
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { id: this.state.id, style: use.FULLELEMENT, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        CHILDS
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { id: this.state.id, style: use.FULLELEMENT, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        CHILDS
                                    )
                                )
                            )];
                        default:
                            first = CHILDS.shift();
                            use = (0, _togglerFunctions2.default)("2", props, state, self);
                            styledToggler = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { id: this.state.id, style: use.FULLELEMENT, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        CHILDS
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { id: this.state.id, style: use.FULLELEMENT, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        CHILDS
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { id: this.state.id, style: use.FULLELEMENT, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        CHILDS
                                    )
                                )
                            )];
                    }
                    break;
                case "3":
                    switch (this.state.vars) {
                        case "1":
                            labels = [];
                            text = [];
                            for (var i = 0; i < CHILDS.length; i += 1) {
                                if ((i + 1) % 2 === 0) {
                                    text.push(CHILDS[i]);
                                } else {
                                    labels.push(CHILDS[i]);
                                }
                            }
                            use = (0, _togglerFunctions2.default)("3", props, state, self);
                            CHECKS = labels.map(function (x, i, arr) {
                                return _react2.default.createElement('input', { key: i, id: 'tab' + (i + 1), type: 'radio', name: 'panel_select', defaultChecked: true, style: use.CHECKSSTYLE });
                            });
                            LABELS = labels.map(function (x, i, arr) {
                                return _react2.default.createElement(
                                    'label',
                                    { key: i, style: use.LABELSSTYLES, htmlFor: 'tab' + (i + 1) },
                                    x
                                );
                            });
                            TEXT = text.map(function (x, i, arr) {
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
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.PANELS, id: this.state.mainid, className: 'panels ' + this.state.mainClassName },
                                    CHECKS,
                                    _react2.default.createElement(
                                        'nav',
                                        { id: this.state.toggleid, className: this.state.toggleClassName },
                                        LABELS
                                    ),
                                    TEXT
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.PANELS, id: this.state.mainid, className: 'panels ' + this.state.mainClassName },
                                    CHECKS,
                                    _react2.default.createElement(
                                        'nav',
                                        { id: this.state.toggleid, className: this.state.toggleClassName },
                                        LABELS
                                    ),
                                    TEXT
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.PANELS, id: this.state.mainid, className: 'panels ' + this.state.mainClassName },
                                    CHECKS,
                                    _react2.default.createElement(
                                        'nav',
                                        { id: this.state.toggleid, className: this.state.toggleClassName },
                                        LABELS
                                    ),
                                    TEXT
                                )
                            )];
                        default:
                            labels = [];
                            text = [];
                            for (var i = 0; i < CHILDS.length; i += 1) {
                                if ((i + 1) % 2 === 0) {
                                    text.push(CHILDS[i]);
                                } else {
                                    labels.push(CHILDS[i]);
                                }
                            }
                            use = (0, _togglerFunctions2.default)("3", props, state, self);
                            CHECKS = labels.map(function (x, i, arr) {
                                return _react2.default.createElement('input', { key: i, id: 'tab' + (i + 1), type: 'radio', name: 'panel_select', defaultChecked: true, style: use.CHECKSSTYLE });
                            });
                            LABELS = labels.map(function (x, i, arr) {
                                return _react2.default.createElement(
                                    'label',
                                    { key: i, style: use.LABELSSTYLES, htmlFor: 'tab' + (i + 1) },
                                    x
                                );
                            });
                            TEXT = text.map(function (x, i, arr) {
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
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.PANELS, id: this.state.mainid, className: 'panels ' + this.state.mainClassName },
                                    CHECKS,
                                    _react2.default.createElement(
                                        'nav',
                                        { id: this.state.toggleid, className: this.state.toggleClassName },
                                        LABELS
                                    ),
                                    TEXT
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.PANELS, id: this.state.mainid, className: 'panels ' + this.state.mainClassName },
                                    CHECKS,
                                    _react2.default.createElement(
                                        'nav',
                                        { id: this.state.toggleid, className: this.state.toggleClassName },
                                        LABELS
                                    ),
                                    TEXT
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.PANELS, id: this.state.mainid, className: 'panels ' + this.state.mainClassName },
                                    CHECKS,
                                    _react2.default.createElement(
                                        'nav',
                                        { id: this.state.toggleid, className: this.state.toggleClassName },
                                        LABELS
                                    ),
                                    TEXT
                                )
                            )];
                    }
                    break;
                case "4":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _togglerFunctions2.default)("4", props, state, self);
                            labels = [];
                            text = [];
                            for (var i = 0; i < CHILDS.length; i += 1) {
                                if ((i + 1) % 2 === 0) {
                                    text.push(CHILDS[i]);
                                } else {
                                    labels.push(CHILDS[i]);
                                }
                            }
                            CHECKS = labels.map(function (x, i, arr) {
                                return _react2.default.createElement('input', { key: i, id: 'Vtab' + (i + 1), type: 'radio', name: 'Vpanel_select', defaultChecked: true, style: use.CHECKSSTYLE });
                            });
                            LABELS = labels.map(function (x, i, arr) {
                                return _react2.default.createElement(
                                    'label',
                                    { key: i, style: use.LABELSSTYLES, htmlFor: 'Vtab' + (i + 1) },
                                    x
                                );
                            });
                            TEXT = text.map(function (x, i, arr) {
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
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.PANELS, id: this.state.mainid, className: 'vpanels ' + this.state.mainClassName },
                                    CHECKS,
                                    _react2.default.createElement(
                                        'nav',
                                        { style: use.LABELTITLES, id: this.state.toggleid, className: this.state.toggleClassName },
                                        LABELS
                                    ),
                                    TEXT
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.PANELS, id: this.state.mainid, className: 'vpanels ' + this.state.mainClassName },
                                    CHECKS,
                                    _react2.default.createElement(
                                        'nav',
                                        { style: use.LABELTITLES, id: this.state.toggleid, className: this.state.toggleClassName },
                                        LABELS
                                    ),
                                    TEXT
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.PANELS, id: this.state.mainid, className: 'vpanels ' + this.state.mainClassName },
                                    CHECKS,
                                    _react2.default.createElement(
                                        'nav',
                                        { style: use.LABELTITLES, id: this.state.toggleid, className: this.state.toggleClassName },
                                        LABELS
                                    ),
                                    TEXT
                                )
                            )];
                        default:
                            use = (0, _togglerFunctions2.default)("4", props, state, self);
                            labels = [];
                            text = [];
                            for (var i = 0; i < CHILDS.length; i += 1) {
                                if ((i + 1) % 2 === 0) {
                                    text.push(CHILDS[i]);
                                } else {
                                    labels.push(CHILDS[i]);
                                }
                            }
                            CHECKS = labels.map(function (x, i, arr) {
                                return _react2.default.createElement('input', { key: i, id: 'Vtab' + (i + 1), type: 'radio', name: 'Vpanel_select', defaultChecked: true, style: use.CHECKSSTYLE });
                            });
                            LABELS = labels.map(function (x, i, arr) {
                                return _react2.default.createElement(
                                    'label',
                                    { key: i, style: use.LABELSSTYLES, htmlFor: 'Vtab' + (i + 1) },
                                    x
                                );
                            });
                            TEXT = text.map(function (x, i, arr) {
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
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.PANELS, id: this.state.mainid, className: 'vpanels ' + this.state.mainClassName },
                                    CHECKS,
                                    _react2.default.createElement(
                                        'nav',
                                        { style: use.LABELTITLES, id: this.state.toggleid, className: this.state.toggleClassName },
                                        LABELS
                                    ),
                                    TEXT
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.PANELS, id: this.state.mainid, className: 'vpanels ' + this.state.mainClassName },
                                    CHECKS,
                                    _react2.default.createElement(
                                        'nav',
                                        { style: use.LABELTITLES, id: this.state.toggleid, className: this.state.toggleClassName },
                                        LABELS
                                    ),
                                    TEXT
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.PANELS, id: this.state.mainid, className: 'vpanels ' + this.state.mainClassName },
                                    CHECKS,
                                    _react2.default.createElement(
                                        'nav',
                                        { style: use.LABELTITLES, id: this.state.toggleid, className: this.state.toggleClassName },
                                        LABELS
                                    ),
                                    TEXT
                                )
                            )];
                    }
                    break;
                default:
                    first = CHILDS.shift();
                    use = (0, _togglerFunctions2.default)("1", props, state, self);
                    styledToggler = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[0], minWidth: 1224 },
                        _react2.default.createElement(
                            'div',
                            { id: this.state.id, className: this.state.className },
                            _react2.default.createElement(
                                'div',
                                { style: use.CLICKBOX, onClick: this.toggle },
                                first
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: use.TOGGLERBOX },
                                CHILDS
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement(
                            'div',
                            { id: this.state.id, className: this.state.className },
                            _react2.default.createElement(
                                'div',
                                { style: use.CLICKBOX, onClick: this.toggle },
                                first
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: use.TOGGLERBOX },
                                CHILDS
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[2], maxWidth: 767 },
                        _react2.default.createElement(
                            'div',
                            { id: this.state.id, className: this.state.className },
                            _react2.default.createElement(
                                'div',
                                { style: use.CLICKBOX, onClick: this.toggle },
                                first
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: use.TOGGLERBOX },
                                CHILDS
                            )
                        )
                    )];
            }
            this.setState({ first: first, childs: CHILDS, keys: tempkeys, styledToggler: styledToggler });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var _this3 = this;

            var props = newProps;
            var state = this.state;
            var styledToggler = void 0,
                use = void 0,
                labels = void 0,
                text = void 0,
                CHECKS = void 0,
                LABELS = void 0,
                TEXT = '';
            var self = this;
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            var first = '';
            switch (this.state.box) {
                case "1":
                    switch (this.state.vars) {
                        case "1":
                            first = CHILDS.shift();
                            use = (0, _togglerFunctions2.default)("1", props, state, self);
                            styledToggler = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        CHILDS
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        CHILDS
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        CHILDS
                                    )
                                )
                            )];
                        default:
                            first = CHILDS.shift();
                            use = (0, _togglerFunctions2.default)("1", props, state, self);
                            styledToggler = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        CHILDS
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        CHILDS
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        CHILDS
                                    )
                                )
                            )];
                    }
                    break;
                case "2":
                    switch (this.state.vars) {
                        case "1":
                            first = CHILDS.shift();
                            use = (0, _togglerFunctions2.default)("2", props, state, self);
                            styledToggler = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { id: this.state.id, style: use.FULLELEMENT, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        CHILDS
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { id: this.state.id, style: use.FULLELEMENT, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        CHILDS
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { id: this.state.id, style: use.FULLELEMENT, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        CHILDS
                                    )
                                )
                            )];
                        default:
                            first = CHILDS.shift();
                            use = (0, _togglerFunctions2.default)("2", props, state, self);
                            styledToggler = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { id: this.state.id, style: use.FULLELEMENT, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        CHILDS
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { id: this.state.id, style: use.FULLELEMENT, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        CHILDS
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { id: this.state.id, style: use.FULLELEMENT, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        CHILDS
                                    )
                                )
                            )];
                    }
                    break;
                case "3":
                    switch (this.state.vars) {
                        case "1":
                            labels = [];
                            text = [];
                            for (var i = 0; i < CHILDS.length; i += 1) {
                                if ((i + 1) % 2 === 0) {
                                    text.push(CHILDS[i]);
                                } else {
                                    labels.push(CHILDS[i]);
                                }
                            }
                            use = (0, _togglerFunctions2.default)("3", props, state, self);
                            CHECKS = labels.map(function (x, i, arr) {
                                return _react2.default.createElement('input', { key: i, id: 'tab' + (i + 1), type: 'radio', name: 'panel_select', defaultChecked: true, style: use.CHECKSSTYLE });
                            });
                            LABELS = labels.map(function (x, i, arr) {
                                return _react2.default.createElement(
                                    'label',
                                    { key: i, style: use.LABELSSTYLES, htmlFor: 'tab' + (i + 1) },
                                    x
                                );
                            });
                            TEXT = text.map(function (x, i, arr) {
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
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.PANELS, id: this.state.mainid, className: 'panels ' + this.state.mainClassName },
                                    CHECKS,
                                    _react2.default.createElement(
                                        'nav',
                                        { id: this.state.toggleid, className: this.state.toggleClassName },
                                        LABELS
                                    ),
                                    TEXT
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.PANELS, id: this.state.mainid, className: 'panels ' + this.state.mainClassName },
                                    CHECKS,
                                    _react2.default.createElement(
                                        'nav',
                                        { id: this.state.toggleid, className: this.state.toggleClassName },
                                        LABELS
                                    ),
                                    TEXT
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.PANELS, id: this.state.mainid, className: 'panels ' + this.state.mainClassName },
                                    CHECKS,
                                    _react2.default.createElement(
                                        'nav',
                                        { id: this.state.toggleid, className: this.state.toggleClassName },
                                        LABELS
                                    ),
                                    TEXT
                                )
                            )];
                        default:
                            labels = [];
                            text = [];
                            for (var i = 0; i < CHILDS.length; i += 1) {
                                if ((i + 1) % 2 === 0) {
                                    text.push(CHILDS[i]);
                                } else {
                                    labels.push(CHILDS[i]);
                                }
                            }
                            use = (0, _togglerFunctions2.default)("3", props, state, self);
                            CHECKS = labels.map(function (x, i, arr) {
                                return _react2.default.createElement('input', { key: i, id: 'tab' + (i + 1), type: 'radio', name: 'panel_select', defaultChecked: true, style: use.CHECKSSTYLE });
                            });
                            LABELS = labels.map(function (x, i, arr) {
                                return _react2.default.createElement(
                                    'label',
                                    { key: i, style: use.LABELSSTYLES, htmlFor: 'tab' + (i + 1) },
                                    x
                                );
                            });
                            TEXT = text.map(function (x, i, arr) {
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
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.PANELS, id: this.state.mainid, className: 'panels ' + this.state.mainClassName },
                                    CHECKS,
                                    _react2.default.createElement(
                                        'nav',
                                        { id: this.state.toggleid, className: this.state.toggleClassName },
                                        LABELS
                                    ),
                                    TEXT
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.PANELS, id: this.state.mainid, className: 'panels ' + this.state.mainClassName },
                                    CHECKS,
                                    _react2.default.createElement(
                                        'nav',
                                        { id: this.state.toggleid, className: this.state.toggleClassName },
                                        LABELS
                                    ),
                                    TEXT
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.PANELS, id: this.state.mainid, className: 'panels ' + this.state.mainClassName },
                                    CHECKS,
                                    _react2.default.createElement(
                                        'nav',
                                        { id: this.state.toggleid, className: this.state.toggleClassName },
                                        LABELS
                                    ),
                                    TEXT
                                )
                            )];
                    }
                    break;
                case "4":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _togglerFunctions2.default)("4", props, state, self);
                            labels = [];
                            text = [];
                            for (var i = 0; i < CHILDS.length; i += 1) {
                                if ((i + 1) % 2 === 0) {
                                    text.push(CHILDS[i]);
                                } else {
                                    labels.push(CHILDS[i]);
                                }
                            }
                            CHECKS = labels.map(function (x, i, arr) {
                                return _react2.default.createElement('input', { key: i, id: 'Vtab' + (i + 1), type: 'radio', name: 'Vpanel_select', defaultChecked: true, style: use.CHECKSSTYLE });
                            });
                            LABELS = labels.map(function (x, i, arr) {
                                return _react2.default.createElement(
                                    'label',
                                    { key: i, style: use.LABELSSTYLES, htmlFor: 'Vtab' + (i + 1) },
                                    x
                                );
                            });
                            TEXT = text.map(function (x, i, arr) {
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
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.PANELS, id: this.state.mainid, className: 'vpanels ' + this.state.mainClassName },
                                    CHECKS,
                                    _react2.default.createElement(
                                        'nav',
                                        { style: use.LABELTITLES, id: this.state.toggleid, className: this.state.toggleClassName },
                                        LABELS
                                    ),
                                    TEXT
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.PANELS, id: this.state.mainid, className: 'vpanels ' + this.state.mainClassName },
                                    CHECKS,
                                    _react2.default.createElement(
                                        'nav',
                                        { style: use.LABELTITLES, id: this.state.toggleid, className: this.state.toggleClassName },
                                        LABELS
                                    ),
                                    TEXT
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.PANELS, id: this.state.mainid, className: 'vpanels ' + this.state.mainClassName },
                                    CHECKS,
                                    _react2.default.createElement(
                                        'nav',
                                        { style: use.LABELTITLES, id: this.state.toggleid, className: this.state.toggleClassName },
                                        LABELS
                                    ),
                                    TEXT
                                )
                            )];
                        default:
                            use = (0, _togglerFunctions2.default)("4", props, state, self);
                            labels = [];
                            text = [];
                            for (var i = 0; i < CHILDS.length; i += 1) {
                                if ((i + 1) % 2 === 0) {
                                    text.push(CHILDS[i]);
                                } else {
                                    labels.push(CHILDS[i]);
                                }
                            }
                            CHECKS = labels.map(function (x, i, arr) {
                                return _react2.default.createElement('input', { key: i, id: 'Vtab' + (i + 1), type: 'radio', name: 'Vpanel_select', defaultChecked: true, style: use.CHECKSSTYLE });
                            });
                            LABELS = labels.map(function (x, i, arr) {
                                return _react2.default.createElement(
                                    'label',
                                    { key: i, style: use.LABELSSTYLES, htmlFor: 'Vtab' + (i + 1) },
                                    x
                                );
                            });
                            TEXT = text.map(function (x, i, arr) {
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
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.PANELS, id: this.state.mainid, className: 'vpanels ' + this.state.mainClassName },
                                    CHECKS,
                                    _react2.default.createElement(
                                        'nav',
                                        { style: use.LABELTITLES, id: this.state.toggleid, className: this.state.toggleClassName },
                                        LABELS
                                    ),
                                    TEXT
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.PANELS, id: this.state.mainid, className: 'vpanels ' + this.state.mainClassName },
                                    CHECKS,
                                    _react2.default.createElement(
                                        'nav',
                                        { style: use.LABELTITLES, id: this.state.toggleid, className: this.state.toggleClassName },
                                        LABELS
                                    ),
                                    TEXT
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.PANELS, id: this.state.mainid, className: 'vpanels ' + this.state.mainClassName },
                                    CHECKS,
                                    _react2.default.createElement(
                                        'nav',
                                        { style: use.LABELTITLES, id: this.state.toggleid, className: this.state.toggleClassName },
                                        LABELS
                                    ),
                                    TEXT
                                )
                            )];
                    }
                    break;
                default:
                    first = CHILDS.shift();
                    use = (0, _togglerFunctions2.default)("1", props, state, self);
                    styledToggler = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[0], minWidth: 1224 },
                        _react2.default.createElement(
                            'div',
                            { id: this.state.id, className: this.state.className },
                            _react2.default.createElement(
                                'div',
                                { style: use.CLICKBOX, onClick: this.toggle },
                                first
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: use.TOGGLERBOX },
                                CHILDS
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement(
                            'div',
                            { id: this.state.id, className: this.state.className },
                            _react2.default.createElement(
                                'div',
                                { style: use.CLICKBOX, onClick: this.toggle },
                                first
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: use.TOGGLERBOX },
                                CHILDS
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[2], maxWidth: 767 },
                        _react2.default.createElement(
                            'div',
                            { id: this.state.id, className: this.state.className },
                            _react2.default.createElement(
                                'div',
                                { style: use.CLICKBOX, onClick: this.toggle },
                                first
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: use.TOGGLERBOX },
                                CHILDS
                            )
                        )
                    )];
            }
            this.setState({ first: first, childs: CHILDS, styledToggler: styledToggler });
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
            switch (this.state.box) {
                case "1":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _togglerFunctions2.default)("1", props, state, self, show);
                            styledToggler = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { key: this.state.keys[0], id: this.state.mainid, className: this.state.mainClassName },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, id: this.state.titleid, className: this.state.titleClassName, onClick: this.toggle },
                                        this.state.first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX, id: this.state.toggleid, className: this.state.toggleClassName },
                                        this.state.childs
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { key: this.state.keys[0], id: this.state.mainid, className: this.state.mainClassName },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, id: this.state.titleid, className: this.state.titleClassName, onClick: this.toggle },
                                        this.state.first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX, id: this.state.toggleid, className: this.state.toggleClassName },
                                        this.state.childs
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { key: this.state.keys[0], id: this.state.mainid, className: this.state.mainClassName },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, id: this.state.titleid, className: this.state.titleClassName, onClick: this.toggle },
                                        this.state.first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX, id: this.state.toggleid, className: this.state.toggleClassName },
                                        this.state.childs
                                    )
                                )
                            )];
                        default:
                            use = (0, _togglerFunctions2.default)("1", props, state, self, show);
                            styledToggler = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { key: this.state.keys[0], id: this.state.mainid, className: this.state.mainClassName },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, id: this.state.titleid, className: this.state.titleClassName, onClick: this.toggle },
                                        this.state.first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX, id: this.state.toggleid, className: this.state.toggleClassName },
                                        this.state.childs
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { key: this.state.keys[0], id: this.state.mainid, className: this.state.mainClassName },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, id: this.state.titleid, className: this.state.titleClassName, onClick: this.toggle },
                                        this.state.first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX, id: this.state.toggleid, className: this.state.toggleClassName },
                                        this.state.childs
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { key: this.state.keys[0], id: this.state.mainid, className: this.state.mainClassName },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, id: this.state.titleid, className: this.state.titleClassName, onClick: this.toggle },
                                        this.state.first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX, id: this.state.toggleid, className: this.state.toggleClassName },
                                        this.state.childs
                                    )
                                )
                            )];
                    }
                    break;
                case "2":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _togglerFunctions2.default)("2", props, state, self, show);
                            styledToggler = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { key: this.state.keys[0], id: this.state.id, style: use.FULLELEMENT, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        this.state.first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        this.state.childs
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { key: this.state.keys[0], id: this.state.id, style: use.FULLELEMENT, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        this.state.first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        this.state.childs
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { key: this.state.keys[0], id: this.state.id, style: use.FULLELEMENT, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        this.state.first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        this.state.childs
                                    )
                                )
                            )];
                        default:
                            use = (0, _togglerFunctions2.default)("2", props, state, self, show);
                            styledToggler = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { key: this.state.keys[0], id: this.state.id, style: use.FULLELEMENT, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        this.state.first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        this.state.childs
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { key: this.state.keys[0], id: this.state.id, style: use.FULLELEMENT, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        this.state.first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        this.state.childs
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { key: this.state.keys[0], id: this.state.id, style: use.FULLELEMENT, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CLICKBOX, onClick: this.toggle },
                                        this.state.first
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.TOGGLERBOX },
                                        this.state.childs
                                    )
                                )
                            )];
                    }
                    break;
                default:
                    use = (0, _togglerFunctions2.default)("1", props, state, self, show);
                    styledToggler = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[0], minWidth: 1224 },
                        _react2.default.createElement(
                            'div',
                            { key: this.state.keys[0], id: this.state.mainid, className: this.state.mainClassName },
                            _react2.default.createElement(
                                'div',
                                { style: use.CLICKBOX, id: this.state.titleid, className: this.state.titleClassName, onClick: this.toggle },
                                this.state.first
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: use.TOGGLERBOX, id: this.state.toggleid, className: this.state.toggleClassName },
                                this.state.childs
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement(
                            'div',
                            { key: this.state.keys[0], id: this.state.mainid, className: this.state.mainClassName },
                            _react2.default.createElement(
                                'div',
                                { style: use.CLICKBOX, id: this.state.titleid, className: this.state.titleClassName, onClick: this.toggle },
                                this.state.first
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: use.TOGGLERBOX, id: this.state.toggleid, className: this.state.toggleClassName },
                                this.state.childs
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[2], maxWidth: 767 },
                        _react2.default.createElement(
                            'div',
                            { key: this.state.keys[0], id: this.state.mainid, className: this.state.mainClassName },
                            _react2.default.createElement(
                                'div',
                                { style: use.CLICKBOX, id: this.state.titleid, className: this.state.titleClassName, onClick: this.toggle },
                                this.state.first
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: use.TOGGLERBOX, id: this.state.toggleid, className: this.state.toggleClassName },
                                this.state.childs
                            )
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
}(_react2.default.Component);

exports.default = Toggler;