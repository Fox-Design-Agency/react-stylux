'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../../css/reset.css');

require('../../css/SuperStyleSheet.css');

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar2 = function (_Component) {
    _inherits(Navbar2, _Component);

    function Navbar2(props) {
        _classCallCheck(this, Navbar2);

        var _this = _possibleConstructorReturn(this, (Navbar2.__proto__ || Object.getPrototypeOf(Navbar2)).call(this, props));

        _this.state = {
            childs: '',
            left: props.left || '-100px',
            leftRev: props.left || '-100px',
            lefthov: '0',
            left1: props.left || '-100px',
            left2: props.left || '-100px',
            left3: props.left || '-100px',
            left4: props.left || '-100px',
            left5: props.left || '-100px',
            left6: props.left || '-100px',
            left7: props.left || '-100px',
            left8: props.left || '-100px',
            left9: props.left || '-100px'
        };
        return _this;
    }

    _createClass(Navbar2, [{
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
        key: 'render',
        value: function render() {
            var _this2 = this;

            var NAVSTYLES = {
                position: 'absolute',
                width: '100%'
            };

            var FIRST = {
                top: '0px',
                position: 'absolute',
                left: this.state.left1,
                padding: '15px',
                width: '120px',
                fontSize: '20px',
                color: 'white',
                borderRadius: '0 5px 5px 0',
                backgroundColor: '#4CAF50',
                transition: '0.4s'
            };
            var SECOND = {
                top: '60px',
                position: 'absolute',
                left: this.state.left2,
                padding: '15px',
                width: '120px',
                fontSize: '20px',
                color: 'white',
                borderRadius: '0 5px 5px 0',
                backgroundColor: '#2196F3',
                transition: '0.4s'

            };
            var THIRD = {
                top: '120px',
                position: 'absolute',
                left: this.state.left3,
                padding: '15px',
                width: '120px',
                fontSize: '20px',
                color: 'white',
                borderRadius: '0 5px 5px 0',
                backgroundColor: '#f44336',
                transition: '0.4s'
            };
            var FOURTH = {
                top: '180px',
                position: 'absolute',
                left: this.state.left4,
                padding: '15px',
                width: '120px',
                fontSize: '20px',
                color: 'white',
                borderRadius: '0 5px 5px 0',
                backgroundColor: '#555',
                transition: '0.4s'
            };
            var FIFTH = {
                top: '240px',
                position: 'absolute',
                left: this.state.left5,
                padding: '15px',
                width: '120px',
                fontSize: '20px',
                color: 'white',
                borderRadius: '0 5px 5px 0',
                backgroundColor: '#4CAF50',
                transition: '0.4s'
            };
            var SIXTH = {
                top: '300px',
                position: 'absolute',
                left: this.state.left6,
                padding: '15px',
                width: '120px',
                fontSize: '20px',
                color: 'white',
                borderRadius: '0 5px 5px 0',
                backgroundColor: '#2196F3',
                transition: '0.4s'
            };
            var SEVENTH = {
                top: '360px',
                position: 'absolute',
                left: this.state.left7,
                padding: '15px',
                width: '120px',
                fontSize: '20px',
                color: 'white',
                borderRadius: '0 5px 5px 0',
                backgroundColor: '#f44336',
                transition: '0.4s'
            };
            var EIGTH = {
                top: '420px',
                position: 'absolute',
                left: this.state.left8,
                padding: '15px',
                width: '120px',
                fontSize: '20px',
                color: 'white',
                borderRadius: '0 5px 5px 0',
                backgroundColor: '#555',
                transition: '0.4s'
            };
            var NINTH = {
                top: '480px',
                position: 'absolute',
                left: this.state.left9,
                padding: '15px',
                width: '120px',
                fontSize: '20px',
                color: 'white',
                borderRadius: '0 5px 5px 0',
                backgroundColor: '#4CAF50',
                transition: '0.4s'
            };
            return _react2.default.createElement(
                'div',
                { style: NAVSTYLES },
                this.state.childs[0] !== undefined ? _react2.default.createElement(
                    'div',
                    { style: FIRST,
                        onMouseEnter: function onMouseEnter() {
                            return _this2.setState({ left1: _this2.state.lefthov });
                        },
                        onMouseLeave: function onMouseLeave() {
                            return _this2.setState({ left1: _this2.state.leftRev });
                        } },
                    this.state.childs[0]
                ) : '',
                this.state.childs[1] !== undefined ? _react2.default.createElement(
                    'div',
                    { style: SECOND,
                        onMouseEnter: function onMouseEnter() {
                            return _this2.setState({ left2: _this2.state.lefthov });
                        },
                        onMouseLeave: function onMouseLeave() {
                            return _this2.setState({ left2: _this2.state.leftRev });
                        } },
                    this.state.childs[1]
                ) : '',
                this.state.childs[2] !== undefined ? _react2.default.createElement(
                    'div',
                    { style: THIRD,
                        onMouseEnter: function onMouseEnter() {
                            return _this2.setState({ left3: _this2.state.lefthov });
                        },
                        onMouseLeave: function onMouseLeave() {
                            return _this2.setState({ left3: _this2.state.leftRev });
                        } },
                    this.state.childs[2]
                ) : '',
                this.state.childs[3] !== undefined ? _react2.default.createElement(
                    'div',
                    { style: FOURTH,
                        onMouseEnter: function onMouseEnter() {
                            return _this2.setState({ left4: _this2.state.lefthov });
                        },
                        onMouseLeave: function onMouseLeave() {
                            return _this2.setState({ left4: _this2.state.leftRev });
                        } },
                    this.state.childs[3]
                ) : '',
                this.state.childs[4] !== undefined ? _react2.default.createElement(
                    'div',
                    { style: FIFTH,
                        onMouseEnter: function onMouseEnter() {
                            return _this2.setState({ left5: _this2.state.lefthov });
                        },
                        onMouseLeave: function onMouseLeave() {
                            return _this2.setState({ left5: _this2.state.leftRev });
                        } },
                    this.state.childs[4]
                ) : '',
                this.state.childs[5] !== undefined ? _react2.default.createElement(
                    'div',
                    { style: SIXTH,
                        onMouseEnter: function onMouseEnter() {
                            return _this2.setState({ left6: _this2.state.lefthov });
                        },
                        onMouseLeave: function onMouseLeave() {
                            return _this2.setState({ left6: _this2.state.leftRev });
                        } },
                    this.state.childs[5]
                ) : '',
                this.state.childs[6] !== undefined ? _react2.default.createElement(
                    'div',
                    { style: SEVENTH,
                        onMouseEnter: function onMouseEnter() {
                            return _this2.setState({ left7: _this2.state.lefthov });
                        },
                        onMouseLeave: function onMouseLeave() {
                            return _this2.setState({ left7: _this2.state.leftRev });
                        } },
                    this.state.childs[6]
                ) : '',
                this.state.childs[7] !== undefined ? _react2.default.createElement(
                    'div',
                    { style: EIGTH,
                        onMouseEnter: function onMouseEnter() {
                            return _this2.setState({ left8: _this2.state.lefthov });
                        },
                        onMouseLeave: function onMouseLeave() {
                            return _this2.setState({ left8: _this2.state.leftRev });
                        } },
                    this.state.childs[7]
                ) : '',
                this.state.childs[8] !== undefined ? _react2.default.createElement(
                    'div',
                    { style: NINTH,
                        onMouseEnter: function onMouseEnter() {
                            return _this2.setState({ left9: _this2.state.lefthov });
                        },
                        onMouseLeave: function onMouseLeave() {
                            return _this2.setState({ left9: _this2.state.leftRev });
                        } },
                    this.state.childs[8]
                ) : ''
            );
        }
    }]);

    return Navbar2;
}(_react.Component);

exports.default = Navbar2;