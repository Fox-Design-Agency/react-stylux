'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactResponsive = require('react-responsive');

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Block2 = function (_React$Component) {
    _inherits(Block2, _React$Component);

    function Block2(props) {
        _classCallCheck(this, Block2);

        var _this = _possibleConstructorReturn(this, (Block2.__proto__ || Object.getPrototypeOf(Block2)).call(this, props));

        _this.state = {
            keys: '',
            styledBlock: ''
        };
        return _this;
    }

    _createClass(Block2, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var tempkeys = Math.random();
            var block2 = {
                width: '100px',
                height: '100px',
                background: 'black',
                margin: '5px auto'
            };
            var styledBlock = [_react2.default.createElement('div', { key: tempkeys, style: block2 })];
            this.setState({ keys: tempkeys, styledBlock: styledBlock });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.state.styledBlock
            );
        }
    }]);

    return Block2;
}(_react2.default.Component);

exports.default = Block2;