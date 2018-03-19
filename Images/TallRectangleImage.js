'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/reset.css');

require('../css/animations.css');

require('../css/SuperStyleSheet.css');

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Start of Tall Rectangle Image */
var TallRectangleImage = function (_Component) {
    _inherits(TallRectangleImage, _Component);

    function TallRectangleImage(props) {
        _classCallCheck(this, TallRectangleImage);

        var _this = _possibleConstructorReturn(this, (TallRectangleImage.__proto__ || Object.getPrototypeOf(TallRectangleImage)).call(this, props));

        _this.state = {
            size: props.size || 'sm',
            id: props.id,
            className: props.className,
            childs: '',
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            margin: props.margin || '5px',
            padding: props.padding,
            boxShadow: props.shadow,
            boxShadowRev: props.shadow,
            hoverShadow: props.hovShadow || '1px 2px 3px black'
        };
        return _this;
    }

    _createClass(TallRectangleImage, [{
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
            var _tallrectangleimg,
                _this2 = this;

            var IMAGE = _nestingstyles2.default.create({
                tallrectangleimg: (_tallrectangleimg = {
                    margin: '0 auto',
                    animationIterationCount: this.state.animationIterationCount,
                    animationTimingFunction: this.state.animationTimingFunction,
                    animationName: this.state.animationName,
                    animationDuration: this.state.animationDuration,
                    transformOrigin: this.state.transformOrigin,
                    animationFillMode: this.state.animationFillMode,
                    boxShadow: this.state.boxShadow
                }, _defineProperty(_tallrectangleimg, 'margin', this.state.margin), _defineProperty(_tallrectangleimg, 'padding', this.state.padding), _tallrectangleimg),
                hoverStyle: {
                    boxShadow: this.state.hoverShadow
                },
                '@media screen and (max-width: 440px)': {
                    tallrectangleimg: {
                        display: this.state.smDis
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    tallrectangleimg: {
                        display: this.state.mdDis
                    }
                }
            });
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement('img', { style: IMAGE.tallrectangleimg, id: this.state.id, className: 'tallrecimg-' + this.state.size + ' ' + this.state.className, src: this.state.childs[0], alt: this.state.childs[1],
                    onMouseEnter: function onMouseEnter() {
                        return _this2.setState({ boxShadow: IMAGE.hoverStyle.boxShadow });
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                    } })
            );
        }
    }]);

    return TallRectangleImage;
}(_react.Component);

exports.default = TallRectangleImage;