'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/reset.css');

require('../css/animations.css');

var _popupFunctions = require('./togglerFunctions/popupFunctions');

var _popupFunctions2 = _interopRequireDefault(_popupFunctions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popup1 = function (_Component) {
    _inherits(Popup1, _Component);

    function Popup1(props) {
        _classCallCheck(this, Popup1);

        var _this = _possibleConstructorReturn(this, (Popup1.__proto__ || Object.getPrototypeOf(Popup1)).call(this, props));

        _this.state = {
            visibility: 'hidden',
            childs: ''
        };
        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }

    _createClass(Popup1, [{
        key: 'toggle',
        value: function toggle() {
            var _this2 = this;

            setTimeout(function () {
                return _this2.setState({ visibility: 'hidden' });
            }, 3000);
            return this.setState({ visibility: 'visible' });
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
        key: 'render',
        value: function render() {
            var POPUPCLICK = {
                cursor: 'pointer'
            };
            var POPUPSTYLE = {
                visibility: this.state.visibility,
                backgroundColor: '#333',
                minWidth: '250px',
                color: '#fff',
                textAlign: 'center',
                borderRadius: '2px',
                padding: '16px',
                position: 'fixed',
                // zIndex: '1',
                // left: '50%',
                bottom: '30px'
            };
            return _react2.default.createElement(
                'div',
                { style: POPUPCLICK, onClick: this.toggle },
                this.state.childs[1],
                _react2.default.createElement(
                    'div',
                    { style: POPUPSTYLE },
                    this.state.childs[0]
                )
            );
        }
    }]);

    return Popup1;
}(_react.Component);

exports.default = Popup1;