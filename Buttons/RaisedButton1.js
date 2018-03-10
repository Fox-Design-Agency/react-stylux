'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/reset.css');

require('../css/animations.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RaisedButton1 = function (_Component) {
    _inherits(RaisedButton1, _Component);

    function RaisedButton1(props) {
        _classCallCheck(this, RaisedButton1);

        var _this = _possibleConstructorReturn(this, (RaisedButton1.__proto__ || Object.getPrototypeOf(RaisedButton1)).call(this, props));

        _this.state = {
            childs: '',
            backgroundColor: props.background || 'white',
            backgroundRev: props.background || 'white',
            hovColor: props.hovColor || '#eee',
            color: props.color || 'black',
            frev: props.color || 'black',
            fontSize: props.fontSize,
            onClick: '',
            hovBackground: props.hovBackground || '#eee',
            hovBoxShadow: props.hovBoxShadow || '0 5px #666',
            boxShadow: props.boxShadow || '0 9px #999',
            boxShadowRev: props.boxShadow || '0 9px #999',
            trandform: props.transform,
            trandformrev: props.transform || 'translateY(-4px)'
        };
        return _this;
    }

    _createClass(RaisedButton1, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            this.setState({ childs: CHILDS });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            this.setState({ childs: CHILDS });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var BUTTONSTYLE = {
                display: 'inline-block',
                padding: '15px 25px',
                fontSize: this.state.fontSize,
                cursor: 'pointer',
                textAlign: 'center',
                outline: 'none',
                color: this.state.color,
                backgroundColor: this.state.backgroundColor,
                borderRadius: '15px',
                boxShadow: this.state.boxShadow,
                transform: this.state.transform
            };
            return _react2.default.createElement(
                'button',
                { style: BUTTONSTYLE,
                    onClick: this.state.onClick,
                    onMouseEnter: function onMouseEnter() {
                        return _this2.setState({ backgroundColor: _this2.state.hovBackground, boxShadow: _this2.state.hovBoxShadow, transform: 'translateY(4px)' });
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this2.setState({ backgroundColor: _this2.state.backgroundRev, boxShadow: _this2.state.boxShadowRev, transform: _this2.state.transformrev });
                    } },
                this.state.childs[0]
            );
        }
    }]);

    return RaisedButton1;
}(_react.Component);

exports.default = RaisedButton1;