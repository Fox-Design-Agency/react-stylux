'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Figure = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/reset.css');

require('../css/animations.css');

require('../css/SuperStyleSheet.css');

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

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
            size: props.size || 'sm',
            box: props.box,
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
            display: props.display,
            margin: props.margin || '5px',
            padding: props.padding,
            boxShadow: props.shadow,
            boxShadowRev: props.shadow,
            hoverShadow: props.hovShadow,
            width: props.width,
            height: props.height,
            smwidth: props.smwidth,
            smheight: props.smheight,
            mdwidth: props.mdwidth,
            mdheight: props.mdheight,
            borderRadius: props.borderRadius
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
            var styledImage = '';
            if (this.state.box === "1") {
                var use = (0, _imageFunction2.default)("1", this.state.size, props, state);
                styledImage = [_react2.default.createElement('img', { key: Math.random(),
                    style: use.IMAGESTYLES.imageStyles,
                    id: this.state.id,
                    className: this.state.className,
                    src: CHILDS[0],
                    alt: CHILDS[1],
                    onMouseEnter: function onMouseEnter() {
                        return _this2.setState({ boxShadow: use.IMAGESTYLES.hoverStyle.boxShadow });
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                    } })];
            } else if (this.state.box === "2") {
                var _use = (0, _imageFunction2.default)("2", this.state.size, props, state);
                styledImage = [_react2.default.createElement('img', { key: Math.random(),
                    style: _use.IMAGESTYLES.imageStyles,
                    id: this.state.id,
                    className: this.state.className,
                    src: CHILDS[0],
                    alt: CHILDS[1],
                    onMouseEnter: function onMouseEnter() {
                        return _this2.setState({ boxShadow: _use.IMAGESTYLES.hoverStyle.boxShadow });
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                    } })];
            } else if (this.state.box === "3") {
                var _use2 = (0, _imageFunction2.default)("3", this.state.size, props, state);
                styledImage = [_react2.default.createElement('img', { key: Math.random(),
                    style: _use2.IMAGESTYLES.imageStyles,
                    id: this.state.id,
                    className: this.state.className,
                    src: CHILDS[0],
                    alt: CHILDS[1],
                    onMouseEnter: function onMouseEnter() {
                        return _this2.setState({ boxShadow: _use2.IMAGESTYLES.hoverStyle.boxShadow });
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                    } })];
            } else if (this.state.box === "4") {
                var _use3 = (0, _imageFunction2.default)("4", this.state.size, props, state);
                styledImage = [_react2.default.createElement('img', { key: Math.random(),
                    style: _use3.IMAGESTYLES.imageStyles,
                    id: this.state.id,
                    className: this.state.className,
                    src: CHILDS[0],
                    alt: CHILDS[1],
                    onMouseEnter: function onMouseEnter() {
                        return _this2.setState({ boxShadow: _use3.IMAGESTYLES.hoverStyle.boxShadow });
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                    } })];
            } else if (this.state.box === "5") {

                var _use4 = (0, _imageFunction2.default)("5", this.state.size, props, state);
                styledImage = [_react2.default.createElement('img', { key: Math.random(),
                    style: _use4.IMAGESTYLES.imageStyles,
                    id: this.state.id,
                    className: this.state.className,
                    src: CHILDS[0],
                    alt: CHILDS[1],
                    onMouseEnter: function onMouseEnter() {
                        return _this2.setState({ boxShadow: _use4.IMAGESTYLES.hoverStyle.boxShadow });
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                    } })];
            } else if (this.state.box === "6") {

                var _use5 = (0, _imageFunction2.default)("6", this.state.size, props, state);

                styledImage = [_react2.default.createElement('img', { key: Math.random(),
                    style: _use5.IMAGESTYLES.imageStyles,
                    id: this.state.id,
                    className: this.state.className,
                    src: CHILDS[0],
                    alt: CHILDS[1],
                    onMouseEnter: function onMouseEnter() {
                        return _this2.setState({ boxShadow: _use5.IMAGESTYLES.hoverStyle.boxShadow });
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                    } })];
            } else if (this.state.box === "7") {

                var _use6 = (0, _imageFunction2.default)("7", this.state.size, props, state);

                styledImage = [_react2.default.createElement('img', { key: Math.random(),
                    style: _use6.IMAGESTYLES.imageStyles,
                    id: this.state.id,
                    className: this.state.className,
                    src: CHILDS[0],
                    alt: CHILDS[1],
                    onMouseEnter: function onMouseEnter() {
                        return _this2.setState({ boxShadow: _use6.IMAGESTYLES.hoverStyle.boxShadow });
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                    } })];
            } else if (this.state.box === "8") {
                var _use7 = (0, _imageFunction2.default)("8", this.state.size, props, state);

                styledImage = [_react2.default.createElement('img', { key: Math.random(),
                    style: _use7.IMAGESTYLES.imageStyles,
                    id: this.state.id,
                    className: this.state.className,
                    src: CHILDS[0],
                    alt: CHILDS[1],
                    onMouseEnter: function onMouseEnter() {
                        return _this2.setState({ boxShadow: _use7.IMAGESTYLES.hoverStyle.boxShadow });
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                    } })];
            } else {
                var _use8 = (0, _imageFunction2.default)("custom", this.state.size, props, state);
                styledImage = [_react2.default.createElement('img', { key: Math.random(),
                    style: _use8.IMAGESTYLES.imageStyles,
                    id: this.state.id,
                    className: this.state.className,
                    src: CHILDS[0],
                    alt: CHILDS[1],
                    onMouseEnter: function onMouseEnter() {
                        return _this2.setState({ boxShadow: _use8.IMAGESTYLES.hoverStyle.boxShadow });
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this2.setState({ boxShadow: _this2.state.boxShadowRev });
                    } })];
            }
            return this.setState({ childs: styledImage });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var _this3 = this;

            var props = newProps;
            var state = this.state;
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            var styledImage = '';
            if (this.state.box === "1") {
                var use = (0, _imageFunction2.default)("1", this.state.size, props, state);
                styledImage = [_react2.default.createElement('img', { key: Math.random(),
                    style: use.IMAGESTYLES.imageStyles,
                    id: this.state.id,
                    className: this.state.className,
                    src: CHILDS[0],
                    alt: CHILDS[1],
                    onMouseEnter: function onMouseEnter() {
                        return _this3.setState({ boxShadow: use.IMAGESTYLES.hoverStyle.boxShadow });
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                    } })];
            } else if (this.state.box === "2") {
                var _use9 = (0, _imageFunction2.default)("2", this.state.size, props, state);
                styledImage = [_react2.default.createElement('img', { key: Math.random(),
                    style: _use9.IMAGESTYLES.imageStyles,
                    id: this.state.id,
                    className: this.state.className,
                    src: CHILDS[0],
                    alt: CHILDS[1],
                    onMouseEnter: function onMouseEnter() {
                        return _this3.setState({ boxShadow: _use9.IMAGESTYLES.hoverStyle.boxShadow });
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                    } })];
            } else if (this.state.box === "3") {
                var _use10 = (0, _imageFunction2.default)("3", this.state.size, props, state);
                styledImage = [_react2.default.createElement('img', { key: Math.random(),
                    style: _use10.IMAGESTYLES.imageStyles,
                    id: this.state.id,
                    className: this.state.className,
                    src: CHILDS[0],
                    alt: CHILDS[1],
                    onMouseEnter: function onMouseEnter() {
                        return _this3.setState({ boxShadow: _use10.IMAGESTYLES.hoverStyle.boxShadow });
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                    } })];
            } else if (this.state.box === "4") {
                var _use11 = (0, _imageFunction2.default)("4", this.state.size, props, state);
                styledImage = [_react2.default.createElement('img', { key: Math.random(),
                    style: _use11.IMAGESTYLES.imageStyles,
                    id: this.state.id,
                    className: this.state.className,
                    src: CHILDS[0],
                    alt: CHILDS[1],
                    onMouseEnter: function onMouseEnter() {
                        return _this3.setState({ boxShadow: _use11.IMAGESTYLES.hoverStyle.boxShadow });
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                    } })];
            } else if (this.state.box === "5") {

                var _use12 = (0, _imageFunction2.default)("5", this.state.size, props, state);
                styledImage = [_react2.default.createElement('img', { key: Math.random(),
                    style: _use12.IMAGESTYLES.imageStyles,
                    id: this.state.id,
                    className: this.state.className,
                    src: CHILDS[0],
                    alt: CHILDS[1],
                    onMouseEnter: function onMouseEnter() {
                        return _this3.setState({ boxShadow: _use12.IMAGESTYLES.hoverStyle.boxShadow });
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                    } })];
            } else if (this.state.box === "6") {

                var _use13 = (0, _imageFunction2.default)("6", this.state.size, props, state);

                styledImage = [_react2.default.createElement('img', { key: Math.random(),
                    style: _use13.IMAGESTYLES.imageStyles,
                    id: this.state.id,
                    className: this.state.className,
                    src: CHILDS[0],
                    alt: CHILDS[1],
                    onMouseEnter: function onMouseEnter() {
                        return _this3.setState({ boxShadow: _use13.IMAGESTYLES.hoverStyle.boxShadow });
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                    } })];
            } else if (this.state.box === "7") {

                var _use14 = (0, _imageFunction2.default)("7", this.state.size, props, state);

                styledImage = [_react2.default.createElement('img', { key: Math.random(),
                    style: _use14.IMAGESTYLES.imageStyles,
                    id: this.state.id,
                    className: this.state.className,
                    src: CHILDS[0],
                    alt: CHILDS[1],
                    onMouseEnter: function onMouseEnter() {
                        return _this3.setState({ boxShadow: _use14.IMAGESTYLES.hoverStyle.boxShadow });
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                    } })];
            } else if (this.state.box === "8") {
                var _use15 = (0, _imageFunction2.default)("8", this.state.size, props, state);

                styledImage = [_react2.default.createElement('img', { key: Math.random(),
                    style: _use15.IMAGESTYLES.imageStyles,
                    id: this.state.id,
                    className: this.state.className,
                    src: CHILDS[0],
                    alt: CHILDS[1],
                    onMouseEnter: function onMouseEnter() {
                        return _this3.setState({ boxShadow: _use15.IMAGESTYLES.hoverStyle.boxShadow });
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                    } })];
            } else {
                var _use16 = (0, _imageFunction2.default)("custom", this.state.size, props, state);
                styledImage = [_react2.default.createElement('img', { key: Math.random(),
                    style: _use16.IMAGESTYLES.imageStyles,
                    id: this.state.id,
                    className: this.state.className,
                    src: CHILDS[0],
                    alt: CHILDS[1],
                    onMouseEnter: function onMouseEnter() {
                        return _this3.setState({ boxShadow: _use16.IMAGESTYLES.hoverStyle.boxShadow });
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this3.setState({ boxShadow: _this3.state.boxShadowRev });
                    } })];
            }
            return this.setState({ childs: styledImage });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.state.childs
            );
        }
    }]);

    return Image;
}(_react2.default.Component);

exports.default = Image;

var Figure = exports.Figure = function (_Component) {
    _inherits(Figure, _Component);

    function Figure(props) {
        _classCallCheck(this, Figure);

        var _this4 = _possibleConstructorReturn(this, (Figure.__proto__ || Object.getPrototypeOf(Figure)).call(this, props));

        _this4.state = {
            size: props.size || 'sm',
            figid: props.figid,
            figCapid: props.figCapid,
            figClassName: props.figClassName,
            figCapClassName: props.figCapClassName,
            childs: '',
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            margin: props.margin || '5px',
            padding: props.padding,
            boxShadow: props.shadow,
            boxShadowRev: props.shadow,
            hoverShadow: props.hovShadow
        };
        return _this4;
    }

    _createClass(Figure, [{
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
            var CAPTION = _nestingstyles2.default.create({
                caption: {
                    padding: '10px',
                    color: 'gray',
                    textAlign: 'center'
                },
                '@media screen and (max-width: 768px)': {
                    caption: {
                        display: this.state.smDis,
                        fontSize: '6em'
                    }
                },
                '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                    caption: {
                        display: this.state.mdDis,
                        fontSize: '6em'
                    }
                }
            });
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    'figure',
                    { id: this.state.figid, className: this.state.figClassName },
                    this.state.childs[0],
                    _react2.default.createElement(
                        'figcaption',
                        { style: CAPTION.caption, id: this.state.figCapid, className: this.state.figCapClassName },
                        this.state.childs[1]
                    )
                )
            );
        }
    }]);

    return Figure;
}(Component);