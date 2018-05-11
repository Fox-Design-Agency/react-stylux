'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

require('../css/reset.css');

require('../css/animations.css');

var _heading1Functions = require('./headingFunctions.js/heading1Functions');

var _heading1Functions2 = _interopRequireDefault(_heading1Functions);

var _heading2Functions = require('./headingFunctions.js/heading2Functions');

var _heading2Functions2 = _interopRequireDefault(_heading2Functions);

var _heading3Functions = require('./headingFunctions.js/heading3Functions');

var _heading3Functions2 = _interopRequireDefault(_heading3Functions);

var _heading4Functions = require('./headingFunctions.js/heading4Functions');

var _heading4Functions2 = _interopRequireDefault(_heading4Functions);

var _heading5Functions = require('./headingFunctions.js/heading5Functions');

var _heading5Functions2 = _interopRequireDefault(_heading5Functions);

var _heading6Functions = require('./headingFunctions.js/heading6Functions');

var _heading6Functions2 = _interopRequireDefault(_heading6Functions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var H = function (_React$Component) {
    _inherits(H, _React$Component);

    function H(props) {
        _classCallCheck(this, H);

        var _this = _possibleConstructorReturn(this, (H.__proto__ || Object.getPrototypeOf(H)).call(this, props));

        _this.state = {
            id: props.id,
            className: props.className,
            childs: '',
            keys: '',
            styledHeading: '',
            box: props.box,
            vars: props.vars
        };
        return _this;
    }

    _createClass(H, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var props = this.props;
            var state = this.state;
            var styledHeading = void 0,
                use = '';
            var self = this;
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            var tempKeys = Math.random();
            var curs = '';
            if (this.state.hoverColor) {
                curs = "pointer";
                this.setState({ cursor: curs });
            }
            if (this.state.box === "1") {
                if (this.state.vars === "1") {
                    use = (0, _heading1Functions2.default)("1", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h1',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "2") {
                    use = (0, _heading1Functions2.default)("2", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h1',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "3") {
                    use = (0, _heading1Functions2.default)("3", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h1',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "4") {
                    use = (0, _heading1Functions2.default)("4", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h1',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else {
                    use = (0, _heading1Functions2.default)("3", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h1',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                }
            } else if (this.state.box === "2") {
                if (this.state.vars === "1") {
                    use = (0, _heading2Functions2.default)("1", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h2',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "2") {
                    use = (0, _heading2Functions2.default)("2", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h2',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "3") {
                    use = (0, _heading2Functions2.default)("3", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h2',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "4") {
                    use = (0, _heading2Functions2.default)("4", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h2',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else {
                    use = (0, _heading2Functions2.default)("3", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h2',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                }
            } else if (this.state.box === "3") {
                if (this.state.vars === "1") {
                    use = (0, _heading3Functions2.default)("1", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h3',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "2") {
                    use = (0, _heading3Functions2.default)("2", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h3',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "3") {
                    use = (0, _heading3Functions2.default)("3", props, state, self);

                    styledHeading = [_react2.default.createElement(
                        'h3',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "4") {
                    use = (0, _heading3Functions2.default)("4", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h3',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else {
                    use = (0, _heading3Functions2.default)("3", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h3',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                }
            } else if (this.state.box === "4") {

                if (this.state.vars === "1") {
                    use = (0, _heading4Functions2.default)("1", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h4',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "2") {
                    use = (0, _heading4Functions2.default)("2", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h4',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "3") {
                    use = (0, _heading4Functions2.default)("3", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h4',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "4") {
                    use = (0, _heading4Functions2.default)("4", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h4',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else {
                    use = (0, _heading4Functions2.default)("3", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h4',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                }
            } else if (this.state.box === "5") {
                if (this.state.vars === "1") {
                    use = (0, _heading5Functions2.default)("1", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h5',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "2") {
                    use = (0, _heading5Functions2.default)("2", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h5',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "3") {
                    use = (0, _heading5Functions2.default)("3", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h5',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "4") {
                    use = (0, _heading5Functions2.default)("4", props, state, self);

                    styledHeading = [_react2.default.createElement(
                        'h5',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else {
                    use = (0, _heading5Functions2.default)("3", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h5',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                }
            } else if (this.state.box === "6") {
                if (this.state.vars === "1") {
                    use = (0, _heading6Functions2.default)("1", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h6',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "2") {
                    use = (0, _heading6Functions2.default)("2", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h6',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "3") {
                    use = (0, _heading6Functions2.default)("3", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h6',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "4") {
                    use = (0, _heading6Functions2.default)("4", props, state, self);

                    styledHeading = [_react2.default.createElement(
                        'h6',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else {
                    use = (0, _heading6Functions2.default)("3", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h6',
                        { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ color: _this2.state.colorRev });
                            } },
                        CHILDS
                    )];
                }
            } else {
                use = (0, _heading3Functions2.default)("2", props, state, self);
                styledHeading = [_react2.default.createElement(
                    'h3',
                    { key: tempKeys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                        onMouseEnter: function onMouseEnter() {
                            return _this2.setState({ color: use.HEADING.hoverStyle.color });
                        },
                        onMouseLeave: function onMouseLeave() {
                            return _this2.setState({ color: _this2.state.colorRev });
                        } },
                    CHILDS
                )];
            }

            this.setState({
                childs: CHILDS,
                keys: tempKeys,
                styledHeading: styledHeading
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var _this3 = this;

            var props = newProps;
            var state = this.state;
            var styledHeading = void 0,
                use = '';
            var self = this;
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            var curs = '';
            if (this.state.hoverColor) {
                curs = "pointer";
                this.setState({ cursor: curs });
            }
            if (this.state.box === "1") {
                if (this.state.vars === "1") {
                    use = (0, _heading1Functions2.default)("1", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h1',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "2") {
                    use = (0, _heading1Functions2.default)("2", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h1',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "3") {
                    use = (0, _heading1Functions2.default)("3", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h1',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "4") {
                    use = (0, _heading1Functions2.default)("4", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h1',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else {
                    use = (0, _heading1Functions2.default)("3", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h1',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                }
            } else if (this.state.box === "2") {
                if (this.state.vars === "1") {
                    use = (0, _heading2Functions2.default)("1", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h2',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "2") {
                    use = (0, _heading2Functions2.default)("2", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h2',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "3") {
                    use = (0, _heading2Functions2.default)("3", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h2',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "4") {
                    use = (0, _heading2Functions2.default)("4", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h2',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else {
                    use = (0, _heading2Functions2.default)("3", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h2',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                }
            } else if (this.state.box === "3") {
                if (this.state.vars === "1") {
                    use = (0, _heading3Functions2.default)("1", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h3',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "2") {
                    use = (0, _heading3Functions2.default)("2", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h3',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "3") {
                    use = (0, _heading3Functions2.default)("3", props, state, self);

                    styledHeading = [_react2.default.createElement(
                        'h3',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "4") {
                    use = (0, _heading3Functions2.default)("4", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h3',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else {
                    use = (0, _heading3Functions2.default)("3", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h3',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                }
            } else if (this.state.box === "4") {

                if (this.state.vars === "1") {
                    use = (0, _heading4Functions2.default)("1", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h4',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "2") {
                    use = (0, _heading4Functions2.default)("2", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h4',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "3") {
                    use = (0, _heading4Functions2.default)("3", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h4',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "4") {
                    use = (0, _heading4Functions2.default)("4", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h4',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else {
                    use = (0, _heading4Functions2.default)("3", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h4',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                }
            } else if (this.state.box === "5") {
                if (this.state.vars === "1") {
                    use = (0, _heading5Functions2.default)("1", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h5',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "2") {
                    use = (0, _heading5Functions2.default)("2", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h5',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "3") {
                    use = (0, _heading5Functions2.default)("3", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h5',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "4") {
                    use = (0, _heading5Functions2.default)("4", props, state, self);

                    styledHeading = [_react2.default.createElement(
                        'h5',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else {
                    use = (0, _heading5Functions2.default)("3", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h5',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                }
            } else if (this.state.box === "6") {
                if (this.state.vars === "1") {
                    use = (0, _heading6Functions2.default)("1", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h6',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "2") {
                    use = (0, _heading6Functions2.default)("2", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h6',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "3") {
                    use = (0, _heading6Functions2.default)("3", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h6',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else if (this.state.vars === "4") {
                    use = (0, _heading6Functions2.default)("4", props, state, self);

                    styledHeading = [_react2.default.createElement(
                        'h6',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                } else {
                    use = (0, _heading6Functions2.default)("3", props, state, self);
                    styledHeading = [_react2.default.createElement(
                        'h6',
                        { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ color: use.HEADING.hoverStyle.color });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ color: _this3.state.colorRev });
                            } },
                        CHILDS
                    )];
                }
            } else {
                use = (0, _heading3Functions2.default)("2", props, state, self);
                styledHeading = [_react2.default.createElement(
                    'h3',
                    { key: this.state.keys, style: use.HEADING.heading, id: this.state.id, className: this.state.className,
                        onMouseEnter: function onMouseEnter() {
                            return _this3.setState({ color: use.HEADING.hoverStyle.color });
                        },
                        onMouseLeave: function onMouseLeave() {
                            return _this3.setState({ color: _this3.state.colorRev });
                        } },
                    CHILDS
                )];
            }

            return this.setState({ childs: CHILDS, styledHeading: styledHeading });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.state.styledHeading
            );
        }
    }]);

    return H;
}(_react2.default.Component);

exports.default = H;