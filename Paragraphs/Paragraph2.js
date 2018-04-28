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

var P2 = function (_Component) {
    _inherits(P2, _Component);

    function P2(props) {
        _classCallCheck(this, P2);

        var _this = _possibleConstructorReturn(this, (P2.__proto__ || Object.getPrototypeOf(P2)).call(this, props));

        _this.state = {
            color: props.color,
            colorRev: props.color,
            textShadow: props.shadow,
            fontFamily: props.font,
            fontSize: props.size || '0.95em',
            smFontSize: props.smSize || '0.95em',
            mdFontSize: props.mdSize || '0.95em',
            lineHeight: props.lineHeight || '1.22em',
            fontWeight: props.weight || '400',
            fontVariant: props.variant,
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '5px',
            margin: props.margin || '1px',
            width: props.width,
            height: props.height,
            maxWidth: props.maxW,
            maxHeight: props.maxH,
            border: props.border,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            id: props.id,
            className: props.className,
            childs: '',
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transform: props.transform,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            hoverColor: props.hovColor,
            wordWrap: props.wordWrap || "break-word"
        };
        return _this;
    }

    _createClass(P2, [{
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

            var PARAGRAPH = _nestingstyles2.default.create({
                paragraph: {
                    width: this.state.width,
                    height: this.state.height,
                    maxWidth: this.state.maxWidth,
                    maxHeight: this.state.maxHeight,
                    color: this.state.color,
                    textShadow: this.state.textShadow,
                    borderLeft: this.state.bLeft,
                    borderRight: this.state.bRight,
                    borderTop: this.state.bTop,
                    borderBottom: this.state.bBottom,
                    border: this.state.border,
                    fontFamily: this.state.fontFamily,
                    fontSize: this.state.fontSize,
                    lineHeight: this.state.lineHeight,
                    fontWeight: this.state.fontWeight,
                    fontVariant: this.state.fontVariant,
                    display: this.state.display,
                    alignItems: this.state.align,
                    justifyContent: this.state.align,
                    textAlign: this.state.textAlign,
                    padding: this.state.padding,
                    margin: this.state.margin,
                    animationIterationCount: this.state.animationIterationCount,
                    animationTimingFunction: this.state.animationTimingFunction,
                    animationName: this.state.animationName,
                    animationDuration: this.state.animationDuration,
                    transform: this.state.transform,
                    transformOrigin: this.state.transformOrigin,
                    animationFillMode: this.state.animationFillMode,
                    flex: 1,
                    flexWrap: "wrap",
                    wordWrap: this.state.wordWrap
                },
                hoverStyle: {
                    color: this.state.hoverColor
                },
                '@media screen and (max-width: 768px)': {
                    paragraph: {
                        display: this.state.smDis,
                        color: this.state.color,
                        fontSize: this.state.smFontSize
                    }
                },
                '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                    paragraph: {
                        display: this.state.mdDis,
                        color: this.state.color,
                        fontSize: this.state.mdFontSize
                    }
                }
            });
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    'p',
                    { style: PARAGRAPH.paragraph, id: this.state.id, className: this.state.className,
                        onMouseEnter: function onMouseEnter() {
                            return _this2.setState({ color: PARAGRAPH.hoverStyle.color });
                        },
                        onMouseLeave: function onMouseLeave() {
                            return _this2.setState({ color: _this2.state.colorRev });
                        } },
                    this.state.childs
                )
            );
        }
    }]);

    return P2;
}(_react.Component);

exports.default = P2;