'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../../css/reset.css');

require('../../css/animations.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modul3 = function (_Component) {
    _inherits(Modul3, _Component);

    function Modul3(props) {
        _classCallCheck(this, Modul3);

        var _this = _possibleConstructorReturn(this, (Modul3.__proto__ || Object.getPrototypeOf(Modul3)).call(this, props));

        _this.state = {
            childs: [],
            buttonText: props.buttonText || 'Modal 3',
            show: false,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode
        };
        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }

    _createClass(Modul3, [{
        key: 'toggle',
        value: function toggle() {
            this.setState({
                show: !this.state.show
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            this.setState({ childs: CHILDS });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            return this.setState({ childs: CHILDS });
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            this.setState({
                show: !this.state.show
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var MODAL = _defineProperty({
                display: this.state.show ? 'flex' : 'none',
                position: 'fixed',
                zIndex: '1',
                right: '0',
                top: '0',
                width: '100vw',
                height: '100vh',
                overflow: 'auto',
                backgroundColor: 'rgb(0,0,0)'
            }, 'backgroundColor', 'rgba(0,0,0,0.4)');
            var MODALCONTENT = {
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#fff',
                margin: 'auto',
                padding: '0',
                border: '1px solid #888',
                width: '80%'
            };
            var MODALHEADER = {
                padding: '2px 16px',
                backgroundColor: '#eee',
                color: 'white'
            };
            var MODALBODY = {
                padding: '2px 16px'
            };
            var MODALFOOTER = {
                padding: '2px 16px',
                position: 'relative',
                backgroundColor: '#eee',
                color: 'white',
                bottom: '0'
            };
            var CLOSEBTN = {
                color: '#000',
                float: 'right',
                fontSize: '28px',
                fontWeight: 'bold',
                cursor: 'pointer'
            };
            var OPENERBTN = {
                cursor: 'pointer'

            };
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { style: OPENERBTN, onClick: this.toggle },
                    this.state.buttonText
                ),
                _react2.default.createElement(
                    'div',
                    { style: MODAL, onClick: this.toggle },
                    _react2.default.createElement(
                        'div',
                        { style: MODALCONTENT },
                        _react2.default.createElement(
                            'div',
                            { style: MODALHEADER },
                            _react2.default.createElement(
                                'span',
                                { style: CLOSEBTN, onClick: this.toggle },
                                '\xD7'
                            ),
                            this.state.childs[0]
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: MODALBODY },
                            this.state.childs[1]
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: MODALFOOTER },
                            this.state.childs[2]
                        )
                    )
                )
            );
        }
    }]);

    return Modul3;
}(_react.Component);

exports.default = Modul3;