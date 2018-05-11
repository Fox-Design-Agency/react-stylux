'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../../css/reset.css');

require('../../css/animations.css');

var _Holder = require('../../Holders/Holder');

var _Holder2 = _interopRequireDefault(_Holder);

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

var _heroFunctions = require('./heroFunctions/heroFunctions');

var _heroFunctions2 = _interopRequireDefault(_heroFunctions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hero = function (_React$Component) {
    _inherits(Hero, _React$Component);

    function Hero(props) {
        _classCallCheck(this, Hero);

        var _this = _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).call(this, props));

        _this.state = {
            id: props.id,
            className: props.className,
            childs: '',
            box: props.box,
            styledHero: '',
            keys: ''
        };
        return _this;
    }

    _createClass(Hero, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var props = this.props;
            var state = this.state;
            var styledHero = void 0,
                use = '';
            var self = this;
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            var tempkey = Math.random();
            if (this.state.box === "1") {
                use = (0, _heroFunctions2.default)("1", props, state, self);
                styledHero = [_react2.default.createElement(
                    'div',
                    { key: tempkey, style: use.HEROSTYLE.herostyle, id: this.state.id, className: this.state.className },
                    _react2.default.createElement(
                        _Holder2.default,
                        {
                            direction: 'column' },
                        CHILDS[0],
                        CHILDS[2],
                        CHILDS[1]
                    )
                )];
            } else if (this.state.box === "2") {
                use = (0, _heroFunctions2.default)("2", props, state, self);
                styledHero = [_react2.default.createElement(
                    'div',
                    { key: tempkey, style: use.HEROSTYLE.herostyle, id: this.state.heroid, className: this.state.heroClassName },
                    _react2.default.createElement(
                        'div',
                        { style: use.HEROSTYLE.bottombackground },
                        _react2.default.createElement(
                            _Holder2.default,
                            {
                                direction: 'column' },
                            CHILDS[0]
                        )
                    )
                )];
            } else if (this.state.box === "3") {
                use = (0, _heroFunctions2.default)("3", props, state, self);
                styledHero = [_react2.default.createElement(
                    'div',
                    { key: tempkey, style: use.HEROSTYLE.herostyle, id: this.state.id, className: this.state.className },
                    _react2.default.createElement(
                        _Holder2.default,
                        null,
                        CHILDS[0]
                    )
                )];
            } else if (this.state.box === "4") {
                use = (0, _heroFunctions2.default)("4", props, state, self);
                styledHero = [_react2.default.createElement(
                    'div',
                    { key: tempkey, style: use.HEROSTYLE.herostyle, id: this.state.id, className: this.state.className },
                    _react2.default.createElement(
                        _Holder2.default,
                        null,
                        CHILDS[2],
                        CHILDS[0]
                    )
                )];
            } else if (this.state.box === "5") {
                use = (0, _heroFunctions2.default)("5", props, state, self);
                styledHero = [_react2.default.createElement(
                    'div',
                    { key: tempkey, style: use.HEROSTYLE.herostyle, id: this.state.id, className: this.state.className },
                    _react2.default.createElement(
                        _Holder2.default,
                        {
                            direction: 'column' },
                        CHILDS[0],
                        _react2.default.createElement(
                            _Holder2.default,
                            null,
                            CHILDS[1],
                            CHILDS[2],
                            CHILDS[3]
                        ),
                        _react2.default.createElement(
                            _Holder2.default,
                            null,
                            CHILDS[4],
                            CHILDS[5],
                            CHILDS[6]
                        )
                    )
                )];
            } else {
                use = (0, _heroFunctions2.default)("1", props, state, self);
                styledHero = [_react2.default.createElement(
                    'div',
                    { key: tempkey, style: use.HEROSTYLE.herostyle, id: this.state.id, className: this.state.className },
                    _react2.default.createElement(
                        _Holder2.default,
                        {
                            direction: 'column' },
                        CHILDS[0],
                        CHILDS[2],
                        CHILDS[1]
                    )
                )];
            }
            this.setState({ childs: CHILDS, styledHero: styledHero, keys: tempkey });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var props = newProps;
            var state = this.state;
            var styledHero = void 0,
                use = '';
            var self = this;
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            if (this.state.type === "1") {
                use = (0, _heroFunctions2.default)("1", props, state, self);
                styledHero = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys, style: use.HEROSTYLE.herostyle, id: this.state.id, className: this.state.className },
                    _react2.default.createElement(
                        _Holder2.default,
                        {
                            direction: 'column' },
                        CHILDS[0],
                        CHILDS[2],
                        CHILDS[1]
                    )
                )];
            } else if (this.state.box === "2") {
                use = (0, _heroFunctions2.default)("2", props, state, self);
                styledHero = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys, style: use.HEROSTYLE.herostyle, id: this.state.heroid, className: this.state.heroClassName },
                    _react2.default.createElement(
                        'div',
                        { style: use.HEROSTYLE.bottombackground, id: this.state.bottomid, className: this.state.bottomClassName },
                        _react2.default.createElement(
                            _Holder2.default,
                            {
                                direction: 'column' },
                            CHILDS[0]
                        )
                    )
                )];
            } else if (this.state.box === "3") {
                use = (0, _heroFunctions2.default)("3", props, state, self);
                styledHero = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys, style: use.HEROSTYLE.herostyle, id: this.state.id, className: this.state.className },
                    _react2.default.createElement(
                        _Holder2.default,
                        null,
                        CHILDS[0]
                    )
                )];
            } else if (this.state.box === "4") {
                use = (0, _heroFunctions2.default)("4", props, state, self);
                styledHero = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys, style: use.HEROSTYLE.herostyle, id: this.state.id, className: this.state.className },
                    _react2.default.createElement(
                        _Holder2.default,
                        null,
                        CHILDS[2],
                        CHILDS[0]
                    )
                )];
            } else if (this.state.box === "5") {
                use = (0, _heroFunctions2.default)("5", props, state, self);
                styledHero = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys, style: use.HEROSTYLE.herostyle, id: this.state.id, className: this.state.className },
                    _react2.default.createElement(
                        _Holder2.default,
                        {
                            direction: 'column' },
                        CHILDS[0],
                        _react2.default.createElement(
                            _Holder2.default,
                            null,
                            CHILDS[1],
                            CHILDS[2],
                            CHILDS[3]
                        ),
                        _react2.default.createElement(
                            _Holder2.default,
                            null,
                            CHILDS[4],
                            CHILDS[5],
                            CHILDS[6]
                        )
                    )
                )];
            } else {
                use = (0, _heroFunctions2.default)("1", props, state, self);
                styledHero = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys, style: use.HEROSTYLE.herostyle, id: this.state.id, className: this.state.className },
                    _react2.default.createElement(
                        _Holder2.default,
                        {
                            direction: 'column' },
                        CHILDS[0],
                        CHILDS[2],
                        CHILDS[1]
                    )
                )];
            }
            this.setState({ childs: CHILDS, styledHero: styledHero });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.state.styledHero
            );
        }
    }]);

    return Hero;
}(_react2.default.Component);

exports.default = Hero;