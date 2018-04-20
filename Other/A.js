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

var A = function (_Component) {
    _inherits(A, _Component);

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
            mdDis: props.mdDis
        };
        return _this;
    }

    _createClass(A, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            this.setState({
                childs: CHILDS
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            return this.setState({ childs: CHILDS });
        }
    }, {
        key: 'render',
        value: function render() {
            var ASTYLE = _nestingstyles2.default.create({
                astyle: {
                    width: this.state.width,
                    height: this.state.height,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: this.state.fontSize
                },
                '@media screen and (max-width: 440px)': {
                    astyle: {
                        display: this.state.smDis
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    astyle: {
                        display: this.state.mdDis
                    }
                }
            });
            return _react2.default.createElement(
                'a',
                { style: ASTYLE.astyle, href: this.state.href, target: this.state.target, rel: this.state.rel },
                this.state.childs
            );
        }
    }]);

    return A;
}(_react.Component);

exports.default = A;