'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/reset.css');

require('../css/animations.css');

var _Image = require('../Images/Image');

var _Image2 = _interopRequireDefault(_Image);

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Brand2 = function (_Component) {
    _inherits(Brand2, _Component);

    function Brand2(props) {
        _classCallCheck(this, Brand2);

        var _this = _possibleConstructorReturn(this, (Brand2.__proto__ || Object.getPrototypeOf(Brand2)).call(this, props));

        _this.state = {
            display: props.display || 'flex',
            size: props.size || 'exsm',
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            childs: [],
            id: props.id,
            className: props.className
        };
        return _this;
    }

    _createClass(Brand2, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            return this.setState({ childs: CHILDS });
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
            var BRAND = _nestingstyles2.default.create({
                brand: {
                    display: 'flex',
                    alignItems: 'center',
                    animationIterationCount: this.state.animationIterationCount,
                    animationTimingFunction: this.state.animationTimingFunction,
                    animationName: this.state.animationName,
                    animationDuration: this.state.animationDuration,
                    transformOrigin: this.state.transformOrigin,
                    animationFillMode: this.state.animationFillMode
                },
                '@media screen and (max-width: 768px)': {
                    brand: {
                        display: this.state.smDis
                    }
                },
                '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                    brand: {
                        display: this.state.mdDis
                    }
                }
            });
            return _react2.default.createElement(
                'div',
                { style: BRAND.brand,
                    id: this.state.id,
                    className: this.state.className },
                _react2.default.createElement(
                    _Image2.default,
                    {
                        type: 'rectangle',
                        size: this.state.size },
                    this.state.childs[0],
                    'logo'
                )
            );
        }
    }]);

    return Brand2;
}(_react.Component);

exports.default = Brand2;