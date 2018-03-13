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

var Card3 = function (_Component) {
    _inherits(Card3, _Component);

    function Card3(props) {
        _classCallCheck(this, Card3);

        var _this = _possibleConstructorReturn(this, (Card3.__proto__ || Object.getPrototypeOf(Card3)).call(this, props));

        _this.state = {
            childs: '',
            boxShadow: props.shadow || '1px 4px 8px 0 rgba(0,0,0,0.2)',
            hovBoxShadow: props.hovShadow || '1px 8px 16px 0 rgba(0,0,0,0.2)',
            revBoxShadow: props.shadow || '1px 4px 8px 0 rgba(0,0,0,0.2)'

        };
        return _this;
    }

    _createClass(Card3, [{
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

            var CARDSTYLE = {
                margin: '10px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: this.state.boxShadow,
                transition: '0.3s'
            };
            var IMGSTYLE = {
                height: '300px',
                width: '250px'
            };
            var CARDHEADING = {};
            var CARDBODY = {};
            var CARDCONTENT = {
                display: 'flex',
                flexDirection: 'column',
                padding: '2px 16px'
            };
            return _react2.default.createElement(
                'div',
                { style: CARDSTYLE,
                    onMouseEnter: function onMouseEnter() {
                        return _this2.setState({ boxShadow: _this2.state.hovBoxShadow });
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this2.setState({ boxShadow: _this2.state.revBoxShadow });
                    } },
                _react2.default.createElement('img', {
                    src: this.state.childs[0],
                    alt: this.state.childs[1],
                    style: IMGSTYLE }),
                _react2.default.createElement(
                    'div',
                    { style: CARDCONTENT },
                    _react2.default.createElement(
                        'h5',
                        { style: CARDHEADING },
                        this.state.childs[2]
                    ),
                    _react2.default.createElement(
                        'p',
                        { style: CARDBODY },
                        this.state.childs[3]
                    )
                )
            );
        }
    }]);

    return Card3;
}(_react.Component);

exports.default = Card3;