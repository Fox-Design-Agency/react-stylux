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

var _cardFunctions = require('./cardFunctions/cardFunctions');

var _cardFunctions2 = _interopRequireDefault(_cardFunctions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_React$Component) {
    _inherits(Card, _React$Component);

    function Card(props) {
        _classCallCheck(this, Card);

        var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));

        _this.state = {
            childs: '',
            id: props.id,
            className: props.className,
            box: props.box,
            styledCard: '',
            keys: ''
        };
        _this.renderStuff = _this.renderStuff.bind(_this);
        return _this;
    }

    _createClass(Card, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var props = this.props;
            var state = this.state;
            var styledCard = void 0,
                use = '';
            var self = this;
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            var tempkey = Math.random();
            if (this.state.box === "1") {
                use = (0, _cardFunctions2.default)("1", props, state, self);
                styledCard = [_react2.default.createElement(
                    'div',
                    { key: tempkey,
                        style: use.CARDSTYLE.cardstyle,
                        id: this.state.id,
                        className: this.state.className,
                        onMouseEnter: use.changeHover,
                        onMouseLeave: use.changeHoverBack },
                    _react2.default.createElement('img', {
                        src: CHILDS[0],
                        alt: CHILDS[1],
                        style: use.CARDSTYLE.imgstyle }),
                    _react2.default.createElement(
                        'div',
                        { style: use.CARDSTYLE.cardcontent },
                        _react2.default.createElement(
                            'h5',
                            { style: use.CARDSTYLE.cardheading },
                            CHILDS[2]
                        ),
                        _react2.default.createElement(
                            'p',
                            { style: use.CARDSTYLE.cardbody },
                            CHILDS[3]
                        )
                    )
                )];
            } else if (this.state.box === "2") {
                use = (0, _cardFunctions2.default)("2", props, state, self);
                styledCard = [_react2.default.createElement(
                    'div',
                    { key: tempkey,
                        style: use.CARDSTYLE.cardstyle,
                        id: this.state.id,
                        className: this.state.className,
                        onMouseEnter: use.changeHover,
                        onMouseLeave: use.changeHoverBack },
                    _react2.default.createElement('img', {
                        src: CHILDS[0],
                        alt: CHILDS[1],
                        style: use.CARDSTYLE.imgstyle }),
                    _react2.default.createElement(
                        'div',
                        { style: use.CARDSTYLE.cardcontent },
                        _react2.default.createElement(
                            'h5',
                            { style: use.CARDSTYLE.cardheading },
                            CHILDS[2]
                        ),
                        _react2.default.createElement(
                            'p',
                            { style: use.CARDSTYLE.cardbody },
                            CHILDS[3]
                        )
                    ),
                    _react2.default.createElement(
                        'button',
                        { style: use.CARDSTYLE.btnstyle, onClick: this.state.btnOnClick },
                        this.state.btnText
                    )
                )];
            } else if (this.state.box === "3") {
                use = (0, _cardFunctions2.default)("3", props, state, self);
                styledCard = [_react2.default.createElement(
                    'div',
                    { key: tempkey,
                        style: use.CARDSTYLE.cardstyle,
                        id: this.state.id,
                        className: this.state.className,
                        onMouseEnter: use.changeHover,
                        onMouseLeave: use.changeHoverBack },
                    _react2.default.createElement(
                        'ul',
                        { style: use.CARDSTYLE.cardcontent },
                        _react2.default.createElement(
                            'li',
                            { style: use.CARDSTYLE.item },
                            CHILDS[0]
                        ),
                        _react2.default.createElement(
                            'li',
                            { style: use.CARDSTYLE.item },
                            CHILDS[1]
                        ),
                        _react2.default.createElement(
                            'li',
                            { style: use.CARDSTYLE.item },
                            CHILDS[2]
                        ),
                        _react2.default.createElement(
                            'li',
                            { style: use.CARDSTYLE.item },
                            CHILDS[3]
                        ),
                        _react2.default.createElement(
                            'li',
                            { style: use.CARDSTYLE.item },
                            CHILDS[4]
                        ),
                        _react2.default.createElement(
                            'li',
                            { style: use.CARDSTYLE.item },
                            CHILDS[5]
                        ),
                        _react2.default.createElement(
                            'li',
                            { style: use.CARDSTYLE.item },
                            CHILDS[6]
                        )
                    )
                )];
            } else {
                use = (0, _cardFunctions2.default)("1", props, state, self);
                styledCard = [_react2.default.createElement(
                    'div',
                    { key: tempkey,
                        style: use.CARDSTYLE.cardstyle,
                        id: this.state.id,
                        className: this.state.className,
                        onMouseEnter: use.changeHover,
                        onMouseLeave: use.changeHoverBack },
                    _react2.default.createElement('img', {
                        src: CHILDS[0],
                        alt: CHILDS[1],
                        style: use.CARDSTYLE.imgstyle }),
                    _react2.default.createElement(
                        'div',
                        { style: use.CARDSTYLE.cardcontent },
                        _react2.default.createElement(
                            'h5',
                            { style: use.CARDSTYLE.cardheading },
                            CHILDS[2]
                        ),
                        _react2.default.createElement(
                            'p',
                            { style: use.CARDSTYLE.cardbody },
                            CHILDS[3]
                        )
                    )
                )];
            }
            this.setState({ childs: CHILDS, styledCard: styledCard, keys: tempkey });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var props = newProps;
            var state = this.state;
            var styledCard = void 0,
                use = '';
            var self = this;
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            if (this.state.box === "1") {
                use = (0, _cardFunctions2.default)("1", props, state, self);
                styledCard = [_react2.default.createElement(
                    'div',
                    { key: this.state.key,
                        style: use.CARDSTYLE.cardstyle,
                        id: this.state.id,
                        className: this.state.className,
                        onMouseEnter: use.changeHover,
                        onMouseLeave: use.changeHoverBack },
                    _react2.default.createElement('img', {
                        src: CHILDS[0],
                        alt: CHILDS[1],
                        style: use.CARDSTYLE.imgstyle }),
                    _react2.default.createElement(
                        'div',
                        { style: use.CARDSTYLE.cardcontent },
                        _react2.default.createElement(
                            'h5',
                            { style: use.CARDSTYLE.cardheading },
                            CHILDS[2]
                        ),
                        _react2.default.createElement(
                            'p',
                            { style: use.CARDSTYLE.cardbody },
                            CHILDS[3]
                        )
                    )
                )];
            } else if (this.state.box === "2") {
                use = (0, _cardFunctions2.default)("2", props, state, self);
                styledCard = [_react2.default.createElement(
                    'div',
                    { key: this.state.key,
                        style: use.CARDSTYLE.cardstyle,
                        id: this.state.id,
                        className: this.state.className,
                        onMouseEnter: use.changeHover,
                        onMouseLeave: use.changeHoverBack },
                    _react2.default.createElement('img', {
                        src: CHILDS[0],
                        alt: CHILDS[1],
                        style: use.CARDSTYLE.imgstyle }),
                    _react2.default.createElement(
                        'div',
                        { style: use.CARDSTYLE.cardcontent },
                        _react2.default.createElement(
                            'h5',
                            { style: use.CARDSTYLE.cardheading },
                            CHILDS[2]
                        ),
                        _react2.default.createElement(
                            'p',
                            { style: use.CARDSTYLE.cardbody },
                            CHILDS[3]
                        )
                    ),
                    _react2.default.createElement(
                        'button',
                        { style: use.CARDSTYLE.btnstyle, onClick: this.state.btnOnClick },
                        this.state.btnText
                    )
                )];
            } else if (this.state.box === "3") {
                use = (0, _cardFunctions2.default)("3", props, state, self);
                styledCard = [_react2.default.createElement(
                    'div',
                    { key: this.state.key,
                        style: use.CARDSTYLE.cardstyle,
                        id: this.state.id,
                        className: this.state.className,
                        onMouseEnter: use.changeHover,
                        onMouseLeave: use.changeHoverBack },
                    _react2.default.createElement(
                        'ul',
                        { style: use.CARDSTYLE.cardcontent },
                        _react2.default.createElement(
                            'li',
                            { style: use.CARDSTYLE.item },
                            CHILDS[0]
                        ),
                        _react2.default.createElement(
                            'li',
                            { style: use.CARDSTYLE.item },
                            CHILDS[1]
                        ),
                        _react2.default.createElement(
                            'li',
                            { style: use.CARDSTYLE.item },
                            CHILDS[2]
                        ),
                        _react2.default.createElement(
                            'li',
                            { style: use.CARDSTYLE.item },
                            CHILDS[3]
                        ),
                        _react2.default.createElement(
                            'li',
                            { style: use.CARDSTYLE.item },
                            CHILDS[4]
                        ),
                        _react2.default.createElement(
                            'li',
                            { style: use.CARDSTYLE.item },
                            CHILDS[5]
                        ),
                        _react2.default.createElement(
                            'li',
                            { style: use.CARDSTYLE.item },
                            CHILDS[6]
                        )
                    )
                )];
            } else {
                use = (0, _cardFunctions2.default)("1", props, state, self);
                styledCard = [_react2.default.createElement(
                    'div',
                    { key: this.state.key,
                        style: use.CARDSTYLE.cardstyle,
                        id: this.state.id,
                        className: this.state.className,
                        onMouseEnter: use.changeHover,
                        onMouseLeave: use.changeHoverBack },
                    _react2.default.createElement('img', {
                        src: CHILDS[0],
                        alt: CHILDS[1],
                        style: use.CARDSTYLE.imgstyle }),
                    _react2.default.createElement(
                        'div',
                        { style: use.CARDSTYLE.cardcontent },
                        _react2.default.createElement(
                            'h5',
                            { style: use.CARDSTYLE.cardheading },
                            CHILDS[2]
                        ),
                        _react2.default.createElement(
                            'p',
                            { style: use.CARDSTYLE.cardbody },
                            CHILDS[3]
                        )
                    )
                )];
            }
            return this.setState({ childs: CHILDS, styledCard: styledCard });
        }
    }, {
        key: 'renderStuff',
        value: function renderStuff() {
            var props = this.props;
            var state = this.state;
            var styledCard = void 0,
                use = '';
            var self = this;
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            if (this.state.box === "1") {
                use = (0, _cardFunctions2.default)("1", props, state, self, arguments[0]);
                styledCard = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys,
                        style: use.CARDSTYLE.cardstyle,
                        id: this.state.id,
                        className: this.state.className,
                        onMouseEnter: use.changeHover,
                        onMouseLeave: use.changeHoverBack },
                    _react2.default.createElement('img', {
                        src: this.state.childs[0],
                        alt: this.state.childs[1],
                        style: use.CARDSTYLE.imgstyle }),
                    _react2.default.createElement(
                        'div',
                        { style: use.CARDSTYLE.cardcontent },
                        _react2.default.createElement(
                            'h5',
                            { style: use.CARDSTYLE.cardheading },
                            this.state.childs[2]
                        ),
                        _react2.default.createElement(
                            'p',
                            { style: use.CARDSTYLE.cardbody },
                            this.state.childs[3]
                        )
                    )
                )];
            } else if (this.state.box === "2") {
                use = (0, _cardFunctions2.default)("2", props, state, self, arguments[0]);
                styledCard = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys,
                        style: use.CARDSTYLE.cardstyle,
                        id: this.state.id,
                        className: this.state.className,
                        onMouseEnter: use.changeHover,
                        onMouseLeave: use.changeHoverBack },
                    _react2.default.createElement('img', {
                        src: this.state.childs[0],
                        alt: this.state.childs[1],
                        style: use.CARDSTYLE.imgstyle }),
                    _react2.default.createElement(
                        'div',
                        { style: use.CARDSTYLE.cardcontent },
                        _react2.default.createElement(
                            'h5',
                            { style: use.CARDSTYLE.cardheading },
                            this.state.childs[2]
                        ),
                        _react2.default.createElement(
                            'p',
                            { style: use.CARDSTYLE.cardbody },
                            this.state.childs[3]
                        )
                    ),
                    _react2.default.createElement(
                        'button',
                        { style: use.CARDSTYLE.btnstyle, onClick: this.state.btnOnClick },
                        this.state.btnText
                    )
                )];
            } else if (this.state.box === "3") {
                use = (0, _cardFunctions2.default)("3", props, state, self, arguments[0]);
                styledCard = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys,
                        style: use.CARDSTYLE.cardstyle,
                        id: this.state.id,
                        className: this.state.className,
                        onMouseEnter: use.changeHover,
                        onMouseLeave: use.changeHoverBack },
                    _react2.default.createElement(
                        'ul',
                        { style: use.CARDSTYLE.cardcontent },
                        _react2.default.createElement(
                            'li',
                            { style: use.CARDSTYLE.item },
                            this.state.childs[0]
                        ),
                        _react2.default.createElement(
                            'li',
                            { style: use.CARDSTYLE.item },
                            this.state.childs[1]
                        ),
                        _react2.default.createElement(
                            'li',
                            { style: use.CARDSTYLE.item },
                            this.state.childs[2]
                        ),
                        _react2.default.createElement(
                            'li',
                            { style: use.CARDSTYLE.item },
                            this.state.childs[3]
                        ),
                        _react2.default.createElement(
                            'li',
                            { style: use.CARDSTYLE.item },
                            this.state.childs[4]
                        ),
                        _react2.default.createElement(
                            'li',
                            { style: use.CARDSTYLE.item },
                            this.state.childs[5]
                        ),
                        _react2.default.createElement(
                            'li',
                            { style: use.CARDSTYLE.item },
                            this.state.childs[6]
                        )
                    )
                )];
            } else {
                use = (0, _cardFunctions2.default)("1", props, state, self, arguments[0]);
                styledCard = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys,
                        style: use.CARDSTYLE.cardstyle,
                        id: this.state.id,
                        className: this.state.className,
                        onMouseEnter: use.changeHover,
                        onMouseLeave: use.changeHoverBack },
                    _react2.default.createElement('img', {
                        src: this.state.childs[0],
                        alt: this.state.childs[1],
                        style: use.CARDSTYLE.imgstyle }),
                    _react2.default.createElement(
                        'div',
                        { style: use.CARDSTYLE.cardcontent },
                        _react2.default.createElement(
                            'h5',
                            { style: use.CARDSTYLE.cardheading },
                            this.state.childs[2]
                        ),
                        _react2.default.createElement(
                            'p',
                            { style: use.CARDSTYLE.cardbody },
                            this.state.childs[3]
                        )
                    )
                )];
            }
            this.setState({ styledCard: styledCard });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.state.styledCard
            );
        }
    }]);

    return Card;
}(_react2.default.Component);

exports.default = Card;