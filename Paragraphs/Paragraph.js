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

var P = function (_React$Component) {
    _inherits(P, _React$Component);

    function P(props) {
        _classCallCheck(this, P);

        var _this = _possibleConstructorReturn(this, (P.__proto__ || Object.getPrototypeOf(P)).call(this, props));

        _this.state = {
            color: props.color,
            colorRev: props.color,
            textShadow: props.shadow,
            fontFamily: props.font,
            fontSize: props.size,
            smFontSize: props.smSize || '1.3em',
            mdFontSize: props.mdSize || '1.3em',
            lineHeight: props.lineHeight || '1.5em',
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
            wordWrap: props.wordWrap || "break-word",
            paragraphStyle: '',
            type: props.type
        };
        return _this;
    }

    _createClass(P, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var props = this.props;
            var state = this.state;
            var styledParagraph = void 0,
                use = '';
            var self = this;
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            if (this.state.type === "1") {
                use = paragraphFunction("1", props, state, self);
                styledParagraph = [_react2.default.createElement(
                    'p',
                    { key: Math.random(),
                        style: use.PARAGRAPHSTYLES.paragraph, id: this.state.id, className: this.state.className
                    },
                    CHILDS
                )];
            } else if (this.state.type === "2") {
                use = paragraphFunction("2", props, state, self);
                styledParagraph = [_react2.default.createElement(
                    'p',
                    { key: Math.random(),
                        style: use.PARAGRAPHSTYLES.paragraph, id: this.state.id, className: this.state.className
                    },
                    CHILDS
                )];
            } else if (this.state.type === "3") {
                use = paragraphFunction("3", props, state, self);
                styledParagraph = [_react2.default.createElement(
                    'p',
                    { key: Math.random(),
                        style: use.PARAGRAPHSTYLES.paragraph, id: this.state.id, className: this.state.className
                    },
                    CHILDS
                )];
            } else if (this.state.type === "4") {
                use = paragraphFunction("4", props, state, self);
                styledParagraph = [_react2.default.createElement(
                    'p',
                    { key: Math.random(),
                        style: use.PARAGRAPHSTYLES.paragraph, id: this.state.id, className: this.state.className
                    },
                    CHILDS
                )];
            } else if (this.state.type === "5") {
                use = paragraphFunction("5", props, state, self);
                styledParagraph = [_react2.default.createElement(
                    'p',
                    { key: Math.random(),
                        style: use.PARAGRAPHSTYLES.paragraph, id: this.state.id, className: this.state.className
                    },
                    CHILDS
                )];
            } else {
                use = paragraphFunction("custom", props, state, self);

                styledParagraph = [_react2.default.createElement(
                    'p',
                    { key: Math.random(),
                        style: use.PARAGRAPHSTYLES.paragraph, id: this.state.id, className: this.state.className
                    },
                    CHILDS
                )];
            }
            this.setState({ childs: CHILDS, paragraphStyle: styledParagraph });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var props = this.newProps;
            var state = this.state;
            var styledParagraph = void 0,
                use = '';
            var self = this;
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            if (this.state.type === "1") {
                use = paragraphFunction("1", props, state, self);
                styledParagraph = [_react2.default.createElement(
                    'p',
                    { key: Math.random(),
                        style: use.PARAGRAPHSTYLES.paragraph, id: this.state.id, className: this.state.className
                    },
                    CHILDS
                )];
            } else if (this.state.type === "2") {
                use = paragraphFunction("2", props, state, self);
                styledParagraph = [_react2.default.createElement(
                    'p',
                    { key: Math.random(),
                        style: use.PARAGRAPHSTYLES.paragraph, id: this.state.id, className: this.state.className
                    },
                    CHILDS
                )];
            } else if (this.state.type === "3") {
                use = paragraphFunction("3", props, state, self);
                styledParagraph = [_react2.default.createElement(
                    'p',
                    { key: Math.random(),
                        style: use.PARAGRAPHSTYLES.paragraph, id: this.state.id, className: this.state.className
                    },
                    CHILDS
                )];
            } else if (this.state.type === "4") {
                use = paragraphFunction("4", props, state, self);
                styledParagraph = [_react2.default.createElement(
                    'p',
                    { key: Math.random(),
                        style: use.PARAGRAPHSTYLES.paragraph, id: this.state.id, className: this.state.className
                    },
                    CHILDS
                )];
            } else if (this.state.type === "5") {
                use = paragraphFunction("5", props, state, self);
                styledParagraph = [_react2.default.createElement(
                    'p',
                    { key: Math.random(),
                        style: use.PARAGRAPHSTYLES.paragraph, id: this.state.id, className: this.state.className
                    },
                    CHILDS
                )];
            } else {
                use = paragraphFunction("custom", props, state, self);
                styledParagraph = [_react2.default.createElement(
                    'p',
                    { key: Math.random(),
                        style: use.PARAGRAPHSTYLES.paragraph, id: this.state.id, className: this.state.className
                    },
                    CHILDS
                )];
            }
            this.setState({ childs: CHILDS, paragraphStyle: styledParagraph });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.state.paragraphStyle
            );
        }
    }]);

    return P;
}(_react2.default.Component);

exports.default = P;