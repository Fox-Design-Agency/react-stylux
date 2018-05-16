'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactResponsive = require('react-responsive');

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

require('../css/reset.css');

require('../css/animations.css');

require('../css/SuperStyleSheet.css');

var _carouselFunctions = require('./carouselFunctions/carouselFunctions');

var _carouselFunctions2 = _interopRequireDefault(_carouselFunctions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel = function (_React$Component) {
    _inherits(Carousel, _React$Component);

    function Carousel(props) {
        _classCallCheck(this, Carousel);

        var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

        _this.state = {
            sliderImages: [],
            cur: 0,
            slideTimer: props.slideTimer || '5000',
            id: props.id,
            leftArrowid: props.leftArrowid,
            rightArrowid: props.rightArrowid,
            className: props.className,
            leftArrowClassName: props.leftArrowClassName,
            rightArrowClassName: props.rightArrowClassName,
            intervalTime: '',
            box: props.box,
            vars: props.vars,
            styledCarousel: '',
            keys: '',
            dots: ''
        };
        _this.slideLeft = _this.slideLeft.bind(_this);
        _this.slideRight = _this.slideRight.bind(_this);
        _this.currentSlide = _this.currentSlide.bind(_this);
        // this.ishovering = this.ishovering.bind(this);
        // this.isnolongerhovering = this.isnolongerhovering.bind(this);
        return _this;
    }

    _createClass(Carousel, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var props = this.props;
            var state = this.state;
            var styledCarousel = void 0,
                DOTS = void 0,
                use = '';
            var self = this;
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            var intervalTime = setInterval(this.slideRight, this.state.slideTimer);
            var tempKeys = [];
            for (var i = 0; i <= CHILDS.length + 4; i++) {
                tempKeys.push(tempKeys[i] = Math.random());
            }
            var RENDERSLIDES = '';
            switch (this.state.box) {
                case "1":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _carouselFunctions2.default)("1", props, state, self);
                            RENDERSLIDES = CHILDS.map(function (x, i) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: tempKeys[i + 3], style: use.SLIDE },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDE_CONTENT },
                                        x
                                    )
                                );
                            });
                            styledCarousel = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className
                                    },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this2.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this2.slideRight();
                                        } })
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className
                                    },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this2.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this2.slideRight();
                                        } })
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className
                                    },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this2.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this2.slideRight();
                                        } })
                                )
                            )];
                        default:
                            use = (0, _carouselFunctions2.default)("1", props, state, self);
                            RENDERSLIDES = CHILDS.map(function (x, i) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: tempKeys[i + 3], style: use.SLIDE },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDE_CONTENT },
                                        x
                                    )
                                );
                            });
                            styledCarousel = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className
                                    },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this2.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this2.slideRight();
                                        } })
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className
                                    },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this2.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this2.slideRight();
                                        } })
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className
                                    },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this2.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this2.slideRight();
                                        } })
                                )
                            )];
                    }
                    break;
                case "2":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _carouselFunctions2.default)("2", props, state, self);
                            RENDERSLIDES = CHILDS.map(function (x, i) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: tempKeys[i + 3], style: use.SLIDE },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDE_CONTENT },
                                        x
                                    )
                                );
                            });
                            DOTS = CHILDS.map(function (x, i) {
                                return _react2.default.createElement('span', { key: i, style: use.CIRCLES, onClick: function onClick() {
                                        return _this2.currentSlide(i);
                                    } });
                            });
                            styledCarousel = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    DOTS
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    DOTS
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    DOTS
                                )
                            )];
                        default:
                            use = (0, _carouselFunctions2.default)("2", props, state, self);
                            RENDERSLIDES = CHILDS.map(function (x, i) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: tempKeys[i + 3], style: use.SLIDE },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDE_CONTENT },
                                        x
                                    )
                                );
                            });
                            DOTS = CHILDS.map(function (x, i) {
                                return _react2.default.createElement('span', { key: i, style: use.CIRCLES, onClick: function onClick() {
                                        return _this2.currentSlide(i);
                                    } });
                            });
                            styledCarousel = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    DOTS
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    DOTS
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    DOTS
                                )
                            )];
                    }
                    break;
                case "3":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _carouselFunctions2.default)("3", props, state, self);
                            RENDERSLIDES = CHILDS.map(function (x, i) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: tempKeys[i + 3], style: use.SLIDE },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDE_CONTENT },
                                        x
                                    )
                                );
                            });
                            DOTS = CHILDS.map(function (x, i) {
                                return _react2.default.createElement('span', { key: i, style: use.CIRCLES, onClick: function onClick() {
                                        return _this2.currentSlide(i);
                                    } });
                            });
                            styledCarousel = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this2.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this2.slideRight();
                                        } })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    DOTS
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this2.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this2.slideRight();
                                        } })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    DOTS
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this2.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this2.slideRight();
                                        } })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    DOTS
                                )
                            )];
                        default:
                            use = (0, _carouselFunctions2.default)("3", props, state, self);
                            RENDERSLIDES = CHILDS.map(function (x, i) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: tempKeys[i + 3], style: use.SLIDE },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDE_CONTENT },
                                        x
                                    )
                                );
                            });
                            DOTS = CHILDS.map(function (x, i) {
                                return _react2.default.createElement('span', { key: i, style: use.CIRCLES, onClick: function onClick() {
                                        return _this2.currentSlide(i);
                                    } });
                            });
                            styledCarousel = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this2.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this2.slideRight();
                                        } })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    DOTS
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this2.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this2.slideRight();
                                        } })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    DOTS
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this2.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this2.slideRight();
                                        } })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    DOTS
                                )
                            )];
                    }
                    break;

                case "4":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _carouselFunctions2.default)("4", props, state, self);
                            RENDERSLIDES = CHILDS.map(function (x, i, arr) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: tempKeys[i + 3], style: use.SLIDE },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDE_CONTENT },
                                        arr[i],
                                        arr[i + 1],
                                        arr[i + 2],
                                        arr[i + 3]
                                    )
                                );
                            });
                            styledCarousel = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this2.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this2.slideRight();
                                        } })
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this2.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this2.slideRight();
                                        } })
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this2.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this2.slideRight();
                                        } })
                                )
                            )];
                        default:
                            use = (0, _carouselFunctions2.default)("4", props, state, self);
                            RENDERSLIDES = CHILDS.map(function (x, i, arr) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: tempKeys[i + 3], style: use.SLIDE },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDE_CONTENT },
                                        arr[i],
                                        arr[i + 1],
                                        arr[i + 2],
                                        arr[i + 3]
                                    )
                                );
                            });
                            styledCarousel = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this2.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this2.slideRight();
                                        } })
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this2.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this2.slideRight();
                                        } })
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this2.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this2.slideRight();
                                        } })
                                )
                            )];
                    }
                    break;
                case "5":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _carouselFunctions2.default)("5", props, state, self);
                            RENDERSLIDES = CHILDS.map(function (x, i) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: tempKeys[i + 3], style: use.SLIDE },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDE_CONTENT },
                                        x
                                    )
                                );
                            });
                            styledCarousel = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    )
                                )
                            )];
                        default:
                            use = (0, _carouselFunctions2.default)("5", props, state, self);
                            RENDERSLIDES = CHILDS.map(function (x, i) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: tempKeys[i + 3], style: use.SLIDE },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDE_CONTENT },
                                        x
                                    )
                                );
                            });
                            styledCarousel = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempKeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    )
                                )
                            )];
                    }
                    break;
                default:
                    use = (0, _carouselFunctions2.default)("2", props, state, self);
                    RENDERSLIDES = CHILDS.map(function (x, i) {
                        return _react2.default.createElement(
                            'div',
                            { key: tempKeys[i + 3], style: use.SLIDE },
                            _react2.default.createElement(
                                'div',
                                { style: use.SLIDE_CONTENT },
                                x
                            )
                        );
                    });
                    DOTS = CHILDS.map(function (x, i) {
                        return _react2.default.createElement('span', { key: i, style: use.CIRCLES, onClick: function onClick() {
                                return _this2.currentSlide(i);
                            } });
                    });
                    styledCarousel = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempKeys[0], minWidth: 1224 },
                        _react2.default.createElement(
                            'div',
                            { style: use.WRAP, id: this.state.id, className: this.state.className },
                            _react2.default.createElement(
                                'div',
                                { style: use.SLIDER },
                                RENDERSLIDES[this.state.cur]
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: use.CIRCLESDIV },
                            DOTS
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempKeys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement(
                            'div',
                            { style: use.WRAP, id: this.state.id, className: this.state.className },
                            _react2.default.createElement(
                                'div',
                                { style: use.SLIDER },
                                RENDERSLIDES[this.state.cur]
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: use.CIRCLESDIV },
                            DOTS
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempKeys[2], maxWidth: 767 },
                        _react2.default.createElement(
                            'div',
                            { style: use.WRAP, id: this.state.id, className: this.state.className },
                            _react2.default.createElement(
                                'div',
                                { style: use.SLIDER },
                                RENDERSLIDES[this.state.cur]
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: use.CIRCLESDIV },
                            DOTS
                        )
                    )];
            }
            this.setState({
                sliderImages: RENDERSLIDES,
                intervalTime: intervalTime,
                styledCarousel: styledCarousel,
                keys: tempKeys,
                dots: DOTS
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var _this3 = this;

            var props = newProps;
            var state = this.state;
            var styledCarousel = void 0,
                DOTS = void 0,
                use = '';
            var self = this;
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            var intervalTime = setInterval(this.slideRight, this.state.slideTimer);
            var RENDERSLIDES = '';
            switch (this.state.box) {
                case "1":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _carouselFunctions2.default)("1", props, state, self);
                            RENDERSLIDES = CHILDS.map(function (x, i) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: _this3.state.keys[i + 3], style: use.SLIDE },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDE_CONTENT },
                                        x
                                    )
                                );
                            });
                            styledCarousel = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className
                                    },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this3.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this3.slideRight();
                                        } })
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className
                                    },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this3.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this3.slideRight();
                                        } })
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className
                                    },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this3.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this3.slideRight();
                                        } })
                                )
                            )];
                        default:
                            use = (0, _carouselFunctions2.default)("1", props, state, self);
                            RENDERSLIDES = CHILDS.map(function (x, i) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: _this3.state.keys[i + 3], style: use.SLIDE },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDE_CONTENT },
                                        x
                                    )
                                );
                            });
                            styledCarousel = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className
                                    },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this3.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this3.slideRight();
                                        } })
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className
                                    },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this3.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this3.slideRight();
                                        } })
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className
                                    },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this3.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this3.slideRight();
                                        } })
                                )
                            )];
                    }
                    break;
                case "2":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _carouselFunctions2.default)("2", props, state, self);
                            RENDERSLIDES = CHILDS.map(function (x, i) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: _this3.state.keys[i + 3], style: use.SLIDE },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDE_CONTENT },
                                        x
                                    )
                                );
                            });
                            DOTS = CHILDS.map(function (x, i) {
                                return _react2.default.createElement('span', { key: i, style: use.CIRCLES, onClick: function onClick() {
                                        return _this3.currentSlide(i);
                                    } });
                            });
                            styledCarousel = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    DOTS
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    DOTS
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    DOTS
                                )
                            )];
                        default:
                            use = (0, _carouselFunctions2.default)("2", props, state, self);
                            RENDERSLIDES = CHILDS.map(function (x, i) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: _this3.state.keys[i + 3], style: use.SLIDE },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDE_CONTENT },
                                        x
                                    )
                                );
                            });
                            DOTS = CHILDS.map(function (x, i) {
                                return _react2.default.createElement('span', { key: i, style: use.CIRCLES, onClick: function onClick() {
                                        return _this3.currentSlide(i);
                                    } });
                            });
                            styledCarousel = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    DOTS
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    DOTS
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    DOTS
                                )
                            )];
                    }
                    break;
                case "3":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _carouselFunctions2.default)("3", props, state, self);
                            RENDERSLIDES = CHILDS.map(function (x, i) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: _this3.state.keys[i + 3], style: use.SLIDE },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDE_CONTENT },
                                        x
                                    )
                                );
                            });
                            DOTS = CHILDS.map(function (x, i) {
                                return _react2.default.createElement('span', { key: i, style: use.CIRCLES, onClick: function onClick() {
                                        return _this3.currentSlide(i);
                                    } });
                            });
                            styledCarousel = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this3.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this3.slideRight();
                                        } })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    DOTS
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this3.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this3.slideRight();
                                        } })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    DOTS
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this3.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this3.slideRight();
                                        } })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    DOTS
                                )
                            )];
                        default:
                            use = (0, _carouselFunctions2.default)("3", props, state, self);
                            RENDERSLIDES = CHILDS.map(function (x, i) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: _this3.state.keys[i + 3], style: use.SLIDE },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDE_CONTENT },
                                        x
                                    )
                                );
                            });
                            DOTS = CHILDS.map(function (x, i) {
                                return _react2.default.createElement('span', { key: i, style: use.CIRCLES, onClick: function onClick() {
                                        return _this3.currentSlide(i);
                                    } });
                            });
                            styledCarousel = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this3.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this3.slideRight();
                                        } })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    DOTS
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this3.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this3.slideRight();
                                        } })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    DOTS
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this3.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this3.slideRight();
                                        } })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    DOTS
                                )
                            )];
                    }
                    break;

                case "4":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _carouselFunctions2.default)("4", props, state, self);
                            RENDERSLIDES = CHILDS.map(function (x, i, arr) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: _this3.state.keys[i + 3], style: use.SLIDE },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDE_CONTENT },
                                        arr[i],
                                        arr[i + 1],
                                        arr[i + 2],
                                        arr[i + 3]
                                    )
                                );
                            });
                            styledCarousel = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this3.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this3.slideRight();
                                        } })
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this3.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this3.slideRight();
                                        } })
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this3.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this3.slideRight();
                                        } })
                                )
                            )];
                        default:
                            use = (0, _carouselFunctions2.default)("4", props, state, self);
                            RENDERSLIDES = CHILDS.map(function (x, i, arr) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: _this3.state.keys[i + 3], style: use.SLIDE },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDE_CONTENT },
                                        arr[i],
                                        arr[i + 1],
                                        arr[i + 2],
                                        arr[i + 3]
                                    )
                                );
                            });
                            styledCarousel = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this3.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this3.slideRight();
                                        } })
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this3.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this3.slideRight();
                                        } })
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this3.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this3.slideRight();
                                        } })
                                )
                            )];
                    }
                    break;
                case "5":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _carouselFunctions2.default)("5", props, state, self);
                            RENDERSLIDES = CHILDS.map(function (x, i) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: _this3.state.keys[i + 3], style: use.SLIDE },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDE_CONTENT },
                                        x
                                    )
                                );
                            });
                            styledCarousel = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    )
                                )
                            )];
                        default:
                            use = (0, _carouselFunctions2.default)("5", props, state, self);
                            RENDERSLIDES = CHILDS.map(function (x, i) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: _this3.state.keys[i + 3], style: use.SLIDE },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDE_CONTENT },
                                        x
                                    )
                                );
                            });
                            styledCarousel = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        RENDERSLIDES[this.state.cur]
                                    )
                                )
                            )];
                    }
                    break;
                default:
                    use = (0, _carouselFunctions2.default)("2", props, state, self);
                    RENDERSLIDES = CHILDS.map(function (x, i) {
                        return _react2.default.createElement(
                            'div',
                            { key: _this3.state.keys[i + 3], style: use.SLIDE },
                            _react2.default.createElement(
                                'div',
                                { style: use.SLIDE_CONTENT },
                                x
                            )
                        );
                    });
                    DOTS = CHILDS.map(function (x, i) {
                        return _react2.default.createElement('span', { key: i, style: use.CIRCLES, onClick: function onClick() {
                                return _this3.currentSlide(i);
                            } });
                    });
                    styledCarousel = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[0], minWidth: 1224 },
                        _react2.default.createElement(
                            'div',
                            { style: use.WRAP, id: this.state.id, className: this.state.className },
                            _react2.default.createElement(
                                'div',
                                { style: use.SLIDER },
                                RENDERSLIDES[this.state.cur]
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: use.CIRCLESDIV },
                            DOTS
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement(
                            'div',
                            { style: use.WRAP, id: this.state.id, className: this.state.className },
                            _react2.default.createElement(
                                'div',
                                { style: use.SLIDER },
                                RENDERSLIDES[this.state.cur]
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: use.CIRCLESDIV },
                            DOTS
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[2], maxWidth: 767 },
                        _react2.default.createElement(
                            'div',
                            { style: use.WRAP, id: this.state.id, className: this.state.className },
                            _react2.default.createElement(
                                'div',
                                { style: use.SLIDER },
                                RENDERSLIDES[this.state.cur]
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: use.CIRCLESDIV },
                            DOTS
                        )
                    )];
            }
            this.setState({
                sliderImages: RENDERSLIDES,
                intervalTime: intervalTime,
                styledCarousel: styledCarousel,
                dots: DOTS
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            return clearInterval(this.state.intervalTime);
        }
    }, {
        key: 'slideLeft',
        value: function slideLeft() {
            var _this4 = this;

            var styledCarousel = void 0,
                use = '';
            var props = this.props;
            var state = this.state;
            var self = this;
            if (this.state.cur === 0) {
                switch (this.state.box) {
                    case "1":
                        switch (this.state.vars) {
                            case "1":
                                use = (0, _carouselFunctions2.default)("1", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className
                                        },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className
                                        },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className
                                        },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    )
                                )];
                            default:
                                use = (0, _carouselFunctions2.default)("1", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className
                                        },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className
                                        },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className
                                        },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    )
                                )];
                        }
                        break;
                    case "2":
                        switch (this.state.vars) {
                            case "1":
                                use = (0, _carouselFunctions2.default)("2", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                )];
                            default:
                                use = (0, _carouselFunctions2.default)("2", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                )];
                        }
                        break;
                    case "3":
                        switch (this.state.vars) {
                            case "1":
                                use = (0, _carouselFunctions2.default)("3", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                )];
                            default:
                                use = (0, _carouselFunctions2.default)("3", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                )];
                        }
                        break;
                    case "4":
                        switch (this.state.vars) {
                            case "1":
                                use = (0, _carouselFunctions2.default)("4", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    )
                                )];
                            default:
                                use = (0, _carouselFunctions2.default)("4", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    )
                                )];
                        }
                        break;
                    case "5":
                        switch (this.state.vars) {
                            case "1":
                                use = (0, _carouselFunctions2.default)("5", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    )
                                )];
                            default:
                                use = (0, _carouselFunctions2.default)("5", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    )
                                )];
                        }
                        break;
                    default:
                        use = (0, _carouselFunctions2.default)("2", props, state, self);
                        styledCarousel = [_react2.default.createElement(
                            _reactResponsive2.default,
                            { key: this.state.keys[0], minWidth: 1224 },
                            _react2.default.createElement(
                                'div',
                                { style: use.WRAP, id: this.state.id, className: this.state.className },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.SLIDER },
                                    this.state.sliderImages[this.state.cur]
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: use.CIRCLESDIV },
                                this.state.dots
                            )
                        ), _react2.default.createElement(
                            _reactResponsive2.default,
                            { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                            _react2.default.createElement(
                                'div',
                                { style: use.WRAP, id: this.state.id, className: this.state.className },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.SLIDER },
                                    this.state.sliderImages[this.state.cur]
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: use.CIRCLESDIV },
                                this.state.dots
                            )
                        ), _react2.default.createElement(
                            _reactResponsive2.default,
                            { key: this.state.keys[2], maxWidth: 767 },
                            _react2.default.createElement(
                                'div',
                                { style: use.WRAP, id: this.state.id, className: this.state.className },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.SLIDER },
                                    this.state.sliderImages[this.state.cur]
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: use.CIRCLESDIV },
                                this.state.dots
                            )
                        )];
                }
                return this.setState({
                    cur: this.state.sliderImages.length - 1,
                    animationIterationCount: '1',
                    animationTimingFunction: 'ease-in',
                    animationName: 'slideInRight',
                    animationDuration: '0.75s',
                    styledCarousel: styledCarousel
                });
            } else {
                switch (this.state.box) {
                    case "1":
                        switch (this.state.vars) {
                            case "1":
                                use = (0, _carouselFunctions2.default)("1", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className
                                        },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className
                                        },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className
                                        },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    )
                                )];
                            default:
                                use = (0, _carouselFunctions2.default)("1", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className
                                        },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className
                                        },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className
                                        },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    )
                                )];
                        }
                        break;
                    case "2":
                        switch (this.state.vars) {
                            case "1":
                                use = (0, _carouselFunctions2.default)("2", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                )];
                            default:
                                use = (0, _carouselFunctions2.default)("2", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                )];
                        }
                        break;
                    case "3":
                        switch (this.state.vars) {
                            case "1":
                                use = (0, _carouselFunctions2.default)("3", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                )];
                            default:
                                use = (0, _carouselFunctions2.default)("3", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                )];
                        }
                        break;
                    case "4":
                        switch (this.state.vars) {
                            case "1":
                                use = (0, _carouselFunctions2.default)("4", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    )
                                )];
                            default:
                                use = (0, _carouselFunctions2.default)("4", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this4.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this4.slideRight();
                                            } })
                                    )
                                )];
                        }
                        break;
                    case "5":
                        switch (this.state.vars) {
                            case "1":
                                use = (0, _carouselFunctions2.default)("5", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    )
                                )];
                            default:
                                use = (0, _carouselFunctions2.default)("5", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    )
                                )];
                        }
                        break;
                    default:
                        use = (0, _carouselFunctions2.default)("2", props, state, self);
                        styledCarousel = [_react2.default.createElement(
                            _reactResponsive2.default,
                            { key: this.state.keys[0], minWidth: 1224 },
                            _react2.default.createElement(
                                'div',
                                { style: use.WRAP, id: this.state.id, className: this.state.className },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.SLIDER },
                                    this.state.sliderImages[this.state.cur]
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: use.CIRCLESDIV },
                                this.state.dots
                            )
                        ), _react2.default.createElement(
                            _reactResponsive2.default,
                            { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                            _react2.default.createElement(
                                'div',
                                { style: use.WRAP, id: this.state.id, className: this.state.className },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.SLIDER },
                                    this.state.sliderImages[this.state.cur]
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: use.CIRCLESDIV },
                                this.state.dots
                            )
                        ), _react2.default.createElement(
                            _reactResponsive2.default,
                            { key: this.state.keys[2], maxWidth: 767 },
                            _react2.default.createElement(
                                'div',
                                { style: use.WRAP, id: this.state.id, className: this.state.className },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.SLIDER },
                                    this.state.sliderImages[this.state.cur]
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: use.CIRCLESDIV },
                                this.state.dots
                            )
                        )];
                }
                return this.setState({
                    cur: this.state.cur - 1,
                    animationIterationCount: '1',
                    animationTimingFunction: 'ease-in',
                    animationName: 'slideInRight',
                    animationDuration: '0.75s',
                    styledCarousel: styledCarousel
                });
            }
        }
    }, {
        key: 'slideRight',
        value: function slideRight() {
            var _this5 = this;

            var styledCarousel = void 0,
                use = '';
            var props = this.props;
            var state = this.state;
            var self = this;
            if (this.state.cur >= this.state.sliderImages.length - 1) {
                switch (this.state.box) {
                    case "1":
                        switch (this.state.vars) {
                            case "1":
                                use = (0, _carouselFunctions2.default)("1", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className
                                        },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className
                                        },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className
                                        },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    )
                                )];
                            default:
                                use = (0, _carouselFunctions2.default)("1", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className
                                        },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className
                                        },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className
                                        },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    )
                                )];
                        }
                        break;
                    case "2":
                        switch (this.state.vars) {
                            case "1":
                                use = (0, _carouselFunctions2.default)("2", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                )];
                            default:
                                use = (0, _carouselFunctions2.default)("2", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                )];
                        }
                        break;
                    case "3":
                        switch (this.state.vars) {
                            case "1":
                                use = (0, _carouselFunctions2.default)("3", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                )];
                            default:
                                use = (0, _carouselFunctions2.default)("3", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                )];
                        }
                        break;
                    case "4":
                        switch (this.state.vars) {
                            case "1":
                                use = (0, _carouselFunctions2.default)("4", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    )
                                )];
                            default:
                                use = (0, _carouselFunctions2.default)("4", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    )
                                )];
                        }
                        break;
                    case "5":
                        switch (this.state.vars) {
                            case "1":
                                use = (0, _carouselFunctions2.default)("5", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    )
                                )];
                            default:
                                use = (0, _carouselFunctions2.default)("5", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    )
                                )];
                        }
                        break;
                    default:
                        use = (0, _carouselFunctions2.default)("2", props, state, self);
                        styledCarousel = [_react2.default.createElement(
                            _reactResponsive2.default,
                            { key: this.state.keys[0], minWidth: 1224 },
                            _react2.default.createElement(
                                'div',
                                { style: use.WRAP, id: this.state.id, className: this.state.className },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.SLIDER },
                                    this.state.sliderImages[this.state.cur]
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: use.CIRCLESDIV },
                                this.state.dots
                            )
                        ), _react2.default.createElement(
                            _reactResponsive2.default,
                            { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                            _react2.default.createElement(
                                'div',
                                { style: use.WRAP, id: this.state.id, className: this.state.className },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.SLIDER },
                                    this.state.sliderImages[this.state.cur]
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: use.CIRCLESDIV },
                                this.state.dots
                            )
                        ), _react2.default.createElement(
                            _reactResponsive2.default,
                            { key: this.state.keys[2], maxWidth: 767 },
                            _react2.default.createElement(
                                'div',
                                { style: use.WRAP, id: this.state.id, className: this.state.className },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.SLIDER },
                                    this.state.sliderImages[this.state.cur]
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: use.CIRCLESDIV },
                                this.state.dots
                            )
                        )];
                }
                return this.setState({
                    cur: 0,
                    animationIterationCount: '1',
                    animationTimingFunction: 'ease',
                    animationName: 'slideInLeft',
                    animationDuration: '0.75s',
                    styledCarousel: styledCarousel
                });
            } else {
                switch (this.state.box) {
                    case "1":
                        switch (this.state.vars) {
                            case "1":
                                use = (0, _carouselFunctions2.default)("1", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className
                                        },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className
                                        },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className
                                        },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    )
                                )];
                            default:
                                use = (0, _carouselFunctions2.default)("1", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className
                                        },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className
                                        },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className
                                        },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    )
                                )];
                        }
                        break;
                    case "2":
                        switch (this.state.vars) {
                            case "1":
                                use = (0, _carouselFunctions2.default)("2", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                )];
                            default:
                                use = (0, _carouselFunctions2.default)("2", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                )];
                        }
                        break;
                    case "3":
                        switch (this.state.vars) {
                            case "1":
                                use = (0, _carouselFunctions2.default)("3", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                )];
                            default:
                                use = (0, _carouselFunctions2.default)("3", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.CIRCLESDIV },
                                        this.state.dots
                                    )
                                )];
                        }
                        break;
                    case "4":
                        switch (this.state.vars) {
                            case "1":
                                use = (0, _carouselFunctions2.default)("4", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    )
                                )];
                            default:
                                use = (0, _carouselFunctions2.default)("4", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                                return _this5.slideLeft();
                                            } }),
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        ),
                                        _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                                return _this5.slideRight();
                                            } })
                                    )
                                )];
                        }
                        break;
                    case "5":
                        switch (this.state.vars) {
                            case "1":
                                use = (0, _carouselFunctions2.default)("5", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    )
                                )];
                            default:
                                use = (0, _carouselFunctions2.default)("5", props, state, self);
                                styledCarousel = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], minWidth: 1224 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.WRAP, id: this.state.id, className: this.state.className },
                                        _react2.default.createElement(
                                            'div',
                                            { style: use.SLIDER },
                                            this.state.sliderImages[this.state.cur]
                                        )
                                    )
                                )];
                        }
                        break;
                    default:
                        use = (0, _carouselFunctions2.default)("2", props, state, self);
                        styledCarousel = [_react2.default.createElement(
                            _reactResponsive2.default,
                            { key: this.state.keys[0], minWidth: 1224 },
                            _react2.default.createElement(
                                'div',
                                { style: use.WRAP, id: this.state.id, className: this.state.className },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.SLIDER },
                                    this.state.sliderImages[this.state.cur]
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: use.CIRCLESDIV },
                                this.state.dots
                            )
                        ), _react2.default.createElement(
                            _reactResponsive2.default,
                            { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                            _react2.default.createElement(
                                'div',
                                { style: use.WRAP, id: this.state.id, className: this.state.className },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.SLIDER },
                                    this.state.sliderImages[this.state.cur]
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: use.CIRCLESDIV },
                                this.state.dots
                            )
                        ), _react2.default.createElement(
                            _reactResponsive2.default,
                            { key: this.state.keys[2], maxWidth: 767 },
                            _react2.default.createElement(
                                'div',
                                { style: use.WRAP, id: this.state.id, className: this.state.className },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.SLIDER },
                                    this.state.sliderImages[this.state.cur]
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: use.CIRCLESDIV },
                                this.state.dots
                            )
                        )];
                }
                return this.setState({
                    cur: this.state.cur + 1,
                    animationIterationCount: '1',
                    animationTimingFunction: 'ease',
                    animationName: 'slideInLeft',
                    animationDuration: '0.75s',
                    styledCarousel: styledCarousel
                });
            }
        }
    }, {
        key: 'currentSlide',
        value: function currentSlide(x) {
            var _this6 = this;

            var styledCarousel = void 0,
                use = '';
            var props = this.props;
            var state = this.state;
            var self = this;
            switch (this.state.box) {
                case "2":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _carouselFunctions2.default)("2", props, state, self);
                            styledCarousel = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        this.state.sliderImages[x]
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    this.state.dots
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        this.state.sliderImages[x]
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    this.state.dots
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        this.state.sliderImages[x]
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    this.state.dots
                                )
                            )];
                        default:
                            use = (0, _carouselFunctions2.default)("2", props, state, self);
                            styledCarousel = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        this.state.sliderImages[x]
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    this.state.dots
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        this.state.sliderImages[x]
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    this.state.dots
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        this.state.sliderImages[x]
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    this.state.dots
                                )
                            )];
                    }
                    break;
                case "3":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _carouselFunctions2.default)("3", props, state, self);
                            styledCarousel = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this6.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        this.state.sliderImages[x]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this6.slideRight();
                                        } })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    this.state.dots
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this6.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        this.state.sliderImages[x]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this6.slideRight();
                                        } })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    this.state.dots
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this6.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        this.state.sliderImages[x]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this6.slideRight();
                                        } })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    this.state.dots
                                )
                            )];
                        default:
                            use = (0, _carouselFunctions2.default)("3", props, state, self);
                            styledCarousel = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this6.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        this.state.sliderImages[x]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this6.slideRight();
                                        } })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    this.state.dots
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this6.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        this.state.sliderImages[x]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this6.slideRight();
                                        } })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    this.state.dots
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.WRAP, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement('div', { style: use.LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                                            return _this6.slideLeft();
                                        } }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: use.SLIDER },
                                        this.state.sliderImages[x]
                                    ),
                                    _react2.default.createElement('div', { style: use.RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                                            return _this6.slideRight();
                                        } })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { style: use.CIRCLESDIV },
                                    this.state.dots
                                )
                            )];
                    }
                    break;
                default:
                    use = (0, _carouselFunctions2.default)("2", props, state, self);
                    styledCarousel = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[0], minWidth: 1224 },
                        _react2.default.createElement(
                            'div',
                            { style: use.WRAP, id: this.state.id, className: this.state.className },
                            _react2.default.createElement(
                                'div',
                                { style: use.SLIDER },
                                this.state.sliderImages[x]
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: use.CIRCLESDIV },
                            this.state.dots
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement(
                            'div',
                            { style: use.WRAP, id: this.state.id, className: this.state.className },
                            _react2.default.createElement(
                                'div',
                                { style: use.SLIDER },
                                this.state.sliderImages[x]
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: use.CIRCLESDIV },
                            this.state.dots
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[2], maxWidth: 767 },
                        _react2.default.createElement(
                            'div',
                            { style: use.WRAP, id: this.state.id, className: this.state.className },
                            _react2.default.createElement(
                                'div',
                                { style: use.SLIDER },
                                this.state.sliderImages[x]
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: use.CIRCLESDIV },
                            this.state.dots
                        )
                    )];
            }
            this.setState({ cur: x, styledCarousel: styledCarousel });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.state.styledCarousel
            );
        }
    }]);

    return Carousel;
}(_react2.default.Component);

exports.default = Carousel;