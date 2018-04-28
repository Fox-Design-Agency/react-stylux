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

var RaisedButton1 = function (_Component) {
    _inherits(RaisedButton1, _Component);

    function RaisedButton1(props) {
        _classCallCheck(this, RaisedButton1);

        var _this = _possibleConstructorReturn(this, (RaisedButton1.__proto__ || Object.getPrototypeOf(RaisedButton1)).call(this, props));

        _this.state = {
            childs: '',
            backgroundColor: props.background || 'white',
            colorRev: props.background || 'white',
            hovColor: props.hovColor || '#eee',
            color: props.color || 'black',
            frev: props.color || 'black',
            fontSize: props.fontSize,
            onClick: props.onClick,
            id: props.id,
            className: props.className,
            transform: props.transform,
            transformOrigin: props.transformOrigin
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

            var BUTTONSTYLE = _nestingstyles2.default.create({
                buttonstyle: {
                    width: this.state.width,
                    display: 'block',
                    border: 'none',
                    backgroundColor: this.state.backgroundColor,
                    padding: '14px 28px',
                    fontSize: this.state.fontSize,
                    cursor: 'pointer',
                    textAlign: 'center',
                    color: this.state.color,
                    transform: this.state.transform,
                    transformOrigin: this.state.transformOrigin
                },
                '@media screen and (max-width: 768px)': {
                    buttonstyle: {
                        display: this.state.smDis
                    }
                },
                '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                    buttonstyle: {
                        display: this.state.mdDis
                    }
                }
            });
            return _react2.default.createElement(
                'button',
                { style: BUTTONSTYLE.buttonstyle,
                    id: this.state.id,
                    className: this.state.className,
                    onClick: this.state.onClick,
                    onMouseEnter: function onMouseEnter() {
                        return _this2.setState({ backgroundColor: _this2.state.hovColor });
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this2.setState({ backgroundColor: _this2.state.colorRev });
                    } },
                this.state.childs[0]
            );
        }
    }]);

    return RaisedButton1;
}(_react.Component);

exports.default = RaisedButton1;