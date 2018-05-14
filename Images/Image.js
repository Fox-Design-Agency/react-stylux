'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/reset.css');

require('../css/animations.css');

var _reactResponsive = require('react-responsive');

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

var _imageFunction = require('./imageFunction/imageFunction');

var _imageFunction2 = _interopRequireDefault(_imageFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = function (_React$Component) {
    _inherits(Image, _React$Component);

    function Image(props) {
        _classCallCheck(this, Image);

        var _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, props));

        _this.state = {
            id: props.id,
            className: props.className,
            size: props.size || "sm",
            box: props.box,
            childs: '',
            keys: '',
            styledImage: ''
        };
        return _this;
    }

    _createClass(Image, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var props = this.props;
            var state = this.state;
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            var num = CHILDS.length;
            var tempkeys = [];
            for (var i = 0; i <= num + 3; i++) {
                tempkeys.push(tempkeys[i] = Math.random());
            }
            var styledImage = void 0,
                use = '';
            switch (this.state.box) {
                case "1":
                    use = (0, _imageFunction2.default)("1", this.state.size, props, state);
                    styledImage = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[0], query: '(min-width: 1224px)' },
                        _react2.default.createElement('img', {
                            style: use.imageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement('img', {
                            style: use.mdimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[2], maxWidth: 767 },
                        _react2.default.createElement('img', {
                            style: use.smimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                            } })
                    )];
                    break;
                case "2":
                    use = (0, _imageFunction2.default)("2", this.state.size, props, state);
                    styledImage = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[0], query: '(min-width: 1224px)' },
                        _react2.default.createElement('img', {
                            style: use.imageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement('img', {
                            style: use.mdimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[2], maxWidth: 767 },
                        _react2.default.createElement('img', {
                            style: use.smimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                            } })
                    )];
                    break;
                case "3":
                    use = (0, _imageFunction2.default)("3", this.state.size, props, state);
                    styledImage = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[0], query: '(min-width: 1224px)' },
                        _react2.default.createElement('img', {
                            style: use.imageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement('img', {
                            style: use.mdimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[2], maxWidth: 767 },
                        _react2.default.createElement('img', {
                            style: use.smimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                            } })
                    )];
                    break;
                case "4":
                    use = (0, _imageFunction2.default)("4", this.state.size, props, state);
                    styledImage = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[0], query: '(min-width: 1224px)' },
                        _react2.default.createElement('img', {
                            style: use.imageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement('img', {
                            style: use.mdimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[2], maxWidth: 767 },
                        _react2.default.createElement('img', {
                            style: use.smimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                            } })
                    )];
                    break;
                case "5":

                    use = (0, _imageFunction2.default)("5", this.state.size, props, state);
                    styledImage = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[0], query: '(min-width: 1224px)' },
                        _react2.default.createElement('img', {
                            style: use.imageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement('img', {
                            style: use.mdimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[2], maxWidth: 767 },
                        _react2.default.createElement('img', {
                            style: use.smimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                            } })
                    )];
                    break;
                case "6":

                    use = (0, _imageFunction2.default)("6", this.state.size, props, state);

                    styledImage = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[0], query: '(min-width: 1224px)' },
                        _react2.default.createElement('img', {
                            style: use.imageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement('img', {
                            style: use.mdimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[2], maxWidth: 767 },
                        _react2.default.createElement('img', {
                            style: use.smimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                            } })
                    )];

                    break;

                case "7":

                    use = (0, _imageFunction2.default)("7", this.state.size, props, state);

                    styledImage = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[0], query: '(min-width: 1224px)' },
                        _react2.default.createElement('img', {
                            style: use.imageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement('img', {
                            style: use.mdimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[2], maxWidth: 767 },
                        _react2.default.createElement('img', {
                            style: use.smimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                            } })
                    )];

                    break;
                case "8":
                    use = (0, _imageFunction2.default)("8", this.state.size, props, state);

                    styledImage = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[0], query: '(min-width: 1224px)' },
                        _react2.default.createElement('img', {
                            style: use.imageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement('img', {
                            style: use.mdimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[2], maxWidth: 767 },
                        _react2.default.createElement('img', {
                            style: use.smimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                            } })
                    )];

                    break;
                default:
                    use = (0, _imageFunction2.default)("4", this.state.size, props, state);
                    styledImage = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[0], query: '(min-width: 1224px)' },
                        _react2.default.createElement('img', {
                            style: use.imageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement('img', {
                            style: use.mdimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[2], maxWidth: 767 },
                        _react2.default.createElement('img', {
                            style: use.smimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this2.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                            } })
                    )];
            }
            return this.setState({ childs: CHILDS, keys: tempkeys, styledImage: styledImage });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var _this3 = this;

            var props = newProps;
            var state = this.state;
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            var styledImage = void 0,
                use = '';
            switch (this.state.box) {
                case "1":
                    use = (0, _imageFunction2.default)("1", this.state.size, props, state);
                    styledImage = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[0], query: '(min-width: 1224px)' },
                        _react2.default.createElement('img', {
                            style: use.imageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement('img', {
                            style: use.mdimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[2], maxWidth: 767 },
                        _react2.default.createElement('img', {
                            style: use.smimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                            } })
                    )];
                    break;
                case "2":
                    use = (0, _imageFunction2.default)("2", this.state.size, props, state);
                    styledImage = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[0], query: '(min-width: 1224px)' },
                        _react2.default.createElement('img', {
                            style: use.imageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement('img', {
                            style: use.mdimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[2], maxWidth: 767 },
                        _react2.default.createElement('img', {
                            style: use.smimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                            } })
                    )];
                    break;
                case "3":
                    use = (0, _imageFunction2.default)("3", this.state.size, props, state);
                    styledImage = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[0], query: '(min-width: 1224px)' },
                        _react2.default.createElement('img', {
                            style: use.imageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement('img', {
                            style: use.mdimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[2], maxWidth: 767 },
                        _react2.default.createElement('img', {
                            style: use.smimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                            } })
                    )];
                    break;
                case "4":
                    use = (0, _imageFunction2.default)("4", this.state.size, props, state);
                    styledImage = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[0], query: '(min-width: 1224px)' },
                        _react2.default.createElement('img', {
                            style: use.imageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement('img', {
                            style: use.mdimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[2], maxWidth: 767 },
                        _react2.default.createElement('img', {
                            style: use.smimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                            } })
                    )];
                    break;
                case "5":

                    use = (0, _imageFunction2.default)("5", this.state.size, props, state);
                    styledImage = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[0], query: '(min-width: 1224px)' },
                        _react2.default.createElement('img', {
                            style: use.imageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement('img', {
                            style: use.mdimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[2], maxWidth: 767 },
                        _react2.default.createElement('img', {
                            style: use.smimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                            } })
                    )];
                    break;
                case "6":

                    use = (0, _imageFunction2.default)("6", this.state.size, props, state);

                    styledImage = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[0], query: '(min-width: 1224px)' },
                        _react2.default.createElement('img', {
                            style: use.imageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement('img', {
                            style: use.mdimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[2], maxWidth: 767 },
                        _react2.default.createElement('img', {
                            style: use.smimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                            } })
                    )];

                    break;

                case "7":

                    use = (0, _imageFunction2.default)("7", this.state.size, props, state);

                    styledImage = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[0], query: '(min-width: 1224px)' },
                        _react2.default.createElement('img', {
                            style: use.imageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement('img', {
                            style: use.mdimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[2], maxWidth: 767 },
                        _react2.default.createElement('img', {
                            style: use.smimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                            } })
                    )];

                    break;
                case "8":
                    use = (0, _imageFunction2.default)("8", this.state.size, props, state);

                    styledImage = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[0], query: '(min-width: 1224px)' },
                        _react2.default.createElement('img', {
                            style: use.imageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement('img', {
                            style: use.mdimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[2], maxWidth: 767 },
                        _react2.default.createElement('img', {
                            style: use.smimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                            } })
                    )];

                    break;
                default:
                    use = (0, _imageFunction2.default)("4", this.state.size, props, state);
                    styledImage = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[0], query: '(min-width: 1224px)' },
                        _react2.default.createElement('img', {
                            style: use.imageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement('img', {
                            style: use.mdimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                            } })
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[2], maxWidth: 767 },
                        _react2.default.createElement('img', {
                            style: use.smimageStyles,
                            id: this.state.id,
                            className: this.state.className,
                            src: CHILDS[0],
                            alt: CHILDS[1],
                            onMouseEnter: function onMouseEnter() {
                                return _this3.setState({ boxShadow: use.hoverStyle.boxShadow });
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                            } })
                    )];
            }
            return this.setState({ childs: CHILDS, styledImage: styledImage });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.state.styledImage
            );
        }
    }]);

    return Image;
}(_react2.default.Component);

exports.default = Image;