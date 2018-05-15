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

var _hrFunctions = require('./hrFunctions/hrFunctions');

var _hrFunctions2 = _interopRequireDefault(_hrFunctions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HR = function (_React$Component) {
    _inherits(HR, _React$Component);

    function HR(props) {
        _classCallCheck(this, HR);

        var _this = _possibleConstructorReturn(this, (HR.__proto__ || Object.getPrototypeOf(HR)).call(this, props));

        _this.state = {
            id: props.id,
            className: props.className,
            box: props.box,
            vars: props.vars,
            styledHR: ''

        };
        return _this;
    }

    _createClass(HR, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var props = this.props;
            var state = this.state;
            var styledHR = void 0,
                use = '';
            var self = this;
            var tempkeys = [];
            for (var i = 0; i <= 3; i++) {
                tempkeys.push(tempkeys[i] = Math.random());
            }
            switch (this.state.box) {
                case "1":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _hrFunctions2.default)("1", props, state, self);
                            styledHR = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], query: '(min-width: 1224px)' },
                                _react2.default.createElement('hr', { style: use.STYLES, id: this.state.id, className: this.state.className })
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement('hr', { style: use.mdSTYLES, id: this.state.id, className: this.state.className })
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement('hr', { style: use.smSTYLES, id: this.state.id, className: this.state.className })
                            )];
                        default:
                            use = (0, _hrFunctions2.default)("1", props, state, self);
                            styledHR = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], query: '(min-width: 1224px)' },
                                _react2.default.createElement('hr', { style: use.STYLES, id: this.state.id, className: this.state.className })
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement('hr', { style: use.mdSTYLES, id: this.state.id, className: this.state.className })
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement('hr', { style: use.smSTYLES, id: this.state.id, className: this.state.className })
                            )];
                    }
                    break;
                default:
                    use = (0, _hrFunctions2.default)("1", props, state, self);
                    styledHR = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[0], query: '(min-width: 1224px)' },
                        _react2.default.createElement('hr', { style: use.STYLES, id: this.state.id, className: this.state.className })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement('hr', { style: use.mdSTYLES, id: this.state.id, className: this.state.className })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[2], maxWidth: 767 },
                        _react2.default.createElement('hr', { style: use.smSTYLES, id: this.state.id, className: this.state.className })
                    )];
            }

            this.setState({ styledHR: styledHR });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var props = newProps;
            var state = this.state;
            var styledHR = void 0,
                use = '';
            var self = this;

            switch (this.state.box) {
                case "1":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _hrFunctions2.default)("1", props, state, self);
                            styledHR = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], query: '(min-width: 1224px)' },
                                _react2.default.createElement('hr', { style: use.STYLES, id: this.state.id, className: this.state.className })
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement('hr', { style: use.mdSTYLES, id: this.state.id, className: this.state.className })
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement('hr', { style: use.smSTYLES, id: this.state.id, className: this.state.className })
                            )];
                        default:
                            use = (0, _hrFunctions2.default)("1", props, state, self);
                            styledHR = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], query: '(min-width: 1224px)' },
                                _react2.default.createElement('hr', { style: use.STYLES, id: this.state.id, className: this.state.className })
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement('hr', { style: use.mdSTYLES, id: this.state.id, className: this.state.className })
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement('hr', { style: use.smSTYLES, id: this.state.id, className: this.state.className })
                            )];
                    }
                    break;
                default:
                    use = (0, _hrFunctions2.default)("1", props, state, self);
                    styledHR = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[0], query: '(min-width: 1224px)' },
                        _react2.default.createElement('hr', { style: use.STYLES, id: this.state.id, className: this.state.className })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement('hr', { style: use.mdSTYLES, id: this.state.id, className: this.state.className })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[2], maxWidth: 767 },
                        _react2.default.createElement('hr', { style: use.smSTYLES, id: this.state.id, className: this.state.className })
                    )];
            }

            this.setState({ styledHR: styledHR });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.state.styledHR
            );
        }
    }]);

    return HR;
}(_react2.default.Component);

exports.default = HR;