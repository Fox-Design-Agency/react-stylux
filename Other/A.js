'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/reset.css');

require('../css/animations.css');

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var A = function (_React$Component) {
    _inherits(A, _React$Component);

    function A(props) {
        _classCallCheck(this, A);

        var _this = _possibleConstructorReturn(this, (A.__proto__ || Object.getPrototypeOf(A)).call(this, props));

        _this.state = {
            href: props.to || "#",
            childs: '',
            width: props.width,
            height: props.height,
            target: props.target,
            rel: props.rel,
            fontSize: props.fontSize,
            smDis: props.smDis,
            mdDis: props.mdDis,
            transform: props.transform,
            transformOrigin: props.transformOrigin,
            id: props.id,
            className: props.className,
            box: props.box,
            vars: props.vars,
            styledA: '',
            keys: ''
        };
        return _this;
    }

    _createClass(A, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            var tempkeys = [];
            for (var i = 0; i <= 3; i++) {
                tempkeys.push(tempkeys[i] = Math.random());
            }

            var astyle = {
                width: this.state.width,
                height: this.state.height,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: this.state.fontSize,
                transform: this.state.transform,
                transformOrigin: this.state.transformOrigin
            };
            var smastyle = {
                display: this.state.smDis,
                width: this.state.width,
                height: this.state.height,
                justifyContent: "center",
                alignItems: "center",
                fontSize: this.state.fontSize,
                transform: this.state.transform,
                transformOrigin: this.state.transformOrigin
            };
            var mdastyle = {
                display: this.state.mdDis,
                width: this.state.width,
                height: this.state.height,
                justifyContent: "center",
                alignItems: "center",
                fontSize: this.state.fontSize,
                transform: this.state.transform,
                transformOrigin: this.state.transformOrigin
            };

            var styledA = [_react2.default.createElement(
                MediaQuery,
                { key: tempkeys[0], query: '(min-width: 1224px)' },
                _react2.default.createElement(
                    'a',
                    { style: astyle, href: this.state.href, target: this.state.target, rel: this.state.rel,
                        id: this.state.id,
                        className: this.state.className },
                    CHILDS
                )
            ), _react2.default.createElement(
                MediaQuery,
                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                _react2.default.createElement(
                    'a',
                    { style: mdastyle, href: this.state.href, target: this.state.target, rel: this.state.rel,
                        id: this.state.id,
                        className: this.state.className },
                    CHILDS
                )
            ), _react2.default.createElement(
                MediaQuery,
                { key: tempkeys[2], maxWidth: 767 },
                _react2.default.createElement(
                    'a',
                    { style: smastyle, href: this.state.href, target: this.state.target, rel: this.state.rel,
                        id: this.state.id,
                        className: this.state.className },
                    CHILDS
                )
            )];
            this.setState({
                childs: CHILDS,
                styledA: styledA,
                keys: tempkeys
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            var astyle = {
                width: this.state.width,
                height: this.state.height,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: this.state.fontSize,
                transform: this.state.transform,
                transformOrigin: this.state.transformOrigin
            };
            var smastyle = {
                display: this.state.smDis,
                width: this.state.width,
                height: this.state.height,
                justifyContent: "center",
                alignItems: "center",
                fontSize: this.state.fontSize,
                transform: this.state.transform,
                transformOrigin: this.state.transformOrigin
            };
            var mdastyle = {
                display: this.state.mdDis,
                width: this.state.width,
                height: this.state.height,
                justifyContent: "center",
                alignItems: "center",
                fontSize: this.state.fontSize,
                transform: this.state.transform,
                transformOrigin: this.state.transformOrigin
            };

            var styledA = [_react2.default.createElement(
                MediaQuery,
                { key: this.state.keys[0], query: '(min-width: 1224px)' },
                _react2.default.createElement(
                    'a',
                    { style: astyle, href: this.state.href, target: this.state.target, rel: this.state.rel,
                        id: this.state.id,
                        className: this.state.className },
                    CHILDS
                )
            ), _react2.default.createElement(
                MediaQuery,
                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                _react2.default.createElement(
                    'a',
                    { style: mdastyle, href: this.state.href, target: this.state.target, rel: this.state.rel,
                        id: this.state.id,
                        className: this.state.className },
                    CHILDS
                )
            ), _react2.default.createElement(
                MediaQuery,
                { key: this.state.keys[2], maxWidth: 767 },
                _react2.default.createElement(
                    'a',
                    { style: smastyle, href: this.state.href, target: this.state.target, rel: this.state.rel,
                        id: this.state.id,
                        className: this.state.className },
                    CHILDS
                )
            )];
            this.setState({
                childs: CHILDS,
                styledA: styledA
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.state.styledA
            );
        }
    }]);

    return A;
}(_react2.default.Component);

exports.default = A;