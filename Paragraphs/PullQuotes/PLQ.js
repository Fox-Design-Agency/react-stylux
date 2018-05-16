'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../../css/SuperStyleSheet.css');

require('../../css/animations.css');

var _reactResponsive = require('react-responsive');

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

var _pullquoteFunctions = require('./pullquoteFunctions/pullquoteFunctions');

var _pullquoteFunctions2 = _interopRequireDefault(_pullquoteFunctions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PLQ = function (_React$Component) {
    _inherits(PLQ, _React$Component);

    function PLQ(props) {
        _classCallCheck(this, PLQ);

        var _this = _possibleConstructorReturn(this, (PLQ.__proto__ || Object.getPrototypeOf(PLQ)).call(this, props));

        _this.state = {

            id: props.id,
            className: props.className,
            childs: '',
            box: props.box,
            vars: props.vars,
            styledPullQuote: '',
            keys: ''
        };
        return _this;
    }

    _createClass(PLQ, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var props = this.props;
            var state = this.state;
            var styledPullQuote = void 0,
                use = '';
            var self = this;
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            var tempkeys = [];
            for (var i = 0; i <= 3; i++) {
                tempkeys.push(tempkeys[i] = Math.random());
            }
            switch (this.state.box) {
                case "1":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _pullquoteFunctions2.default)("1", props, state, self);
                            styledPullQuote = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], query: '(min-width: 1224px)' },
                                _react2.default.createElement(
                                    'blockquote',
                                    {
                                        style: use.pullquotestyles, id: this.state.id, className: 'pullQuote1 ' + this.state.className },
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.text, className: 'pullQuote1-text' },
                                        CHILDS[0]
                                    ),
                                    _react2.default.createElement(
                                        'cite',
                                        { style: use.cite },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'blockquote',
                                    {
                                        style: use.mdpullquotestyles, id: this.state.id, className: 'pullQuote1 ' + this.state.className },
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.mdtext, className: 'pullQuote1-text' },
                                        CHILDS[0]
                                    ),
                                    _react2.default.createElement(
                                        'cite',
                                        { style: use.mdcite },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'blockquote',
                                    {
                                        style: use.smpullquotestyles, id: this.state.id, className: 'pullQuote1 ' + this.state.className },
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.smtext, className: 'pullQuote1-text' },
                                        CHILDS[0]
                                    ),
                                    _react2.default.createElement(
                                        'cite',
                                        { style: use.smcite },
                                        CHILDS[1]
                                    )
                                )
                            )];
                        default:
                            use = (0, _pullquoteFunctions2.default)("1", props, state, self);
                            styledPullQuote = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], query: '(min-width: 1224px)' },
                                _react2.default.createElement(
                                    'blockquote',
                                    {
                                        style: use.pullquotestyles, id: this.state.id, className: 'pullQuote1 ' + this.state.className },
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.text, className: 'pullQuote1-text' },
                                        CHILDS[0]
                                    ),
                                    _react2.default.createElement(
                                        'cite',
                                        { style: use.cite },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'blockquote',
                                    {
                                        style: use.mdpullquotestyles, id: this.state.id, className: 'pullQuote1 ' + this.state.className },
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.mdtext, className: 'pullQuote1-text' },
                                        CHILDS[0]
                                    ),
                                    _react2.default.createElement(
                                        'cite',
                                        { style: use.mdcite },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'blockquote',
                                    {
                                        style: use.smpullquotestyles, id: this.state.id, className: 'pullQuote1 ' + this.state.className },
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.smtext, className: 'pullQuote1-text' },
                                        CHILDS[0]
                                    ),
                                    _react2.default.createElement(
                                        'cite',
                                        { style: use.smcite },
                                        CHILDS[1]
                                    )
                                )
                            )];
                    }
                    break;
                case "2":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _pullquoteFunctions2.default)("2", props, state, self);
                            styledPullQuote = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], query: '(min-width: 1224px)' },
                                _react2.default.createElement(
                                    'blockquote',
                                    {
                                        style: use.pullquotestyles, id: this.state.id, className: 'pullQuote2 ' + this.state.className },
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.text, className: 'pullQuote2-text' },
                                        CHILDS[0]
                                    ),
                                    _react2.default.createElement(
                                        'cite',
                                        { style: use.cite },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'blockquote',
                                    {
                                        style: use.mdpullquotestyles, id: this.state.id, className: 'pullQuote2 ' + this.state.className },
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.mdtext, className: 'pullQuote2-text' },
                                        CHILDS[0]
                                    ),
                                    _react2.default.createElement(
                                        'cite',
                                        { style: use.mdcite },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'blockquote',
                                    {
                                        style: use.smpullquotestyles, id: this.state.id, className: 'pullQuote2 ' + this.state.className },
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.smtext, className: 'pullQuote2-text' },
                                        CHILDS[0]
                                    ),
                                    _react2.default.createElement(
                                        'cite',
                                        { style: use.smcite },
                                        CHILDS[1]
                                    )
                                )
                            )];
                        default:
                            use = (0, _pullquoteFunctions2.default)("2", props, state, self);
                            styledPullQuote = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], query: '(min-width: 1224px)' },
                                _react2.default.createElement(
                                    'blockquote',
                                    {
                                        style: use.pullquotestyles, id: this.state.id, className: 'pullQuote2 ' + this.state.className },
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.text, className: 'pullQuote2-text' },
                                        CHILDS[0]
                                    ),
                                    _react2.default.createElement(
                                        'cite',
                                        { style: use.cite },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'blockquote',
                                    {
                                        style: use.mdpullquotestyles, id: this.state.id, className: 'pullQuote2 ' + this.state.className },
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.mdtext, className: 'pullQuote2-text' },
                                        CHILDS[0]
                                    ),
                                    _react2.default.createElement(
                                        'cite',
                                        { style: use.mdcite },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'blockquote',
                                    {
                                        style: use.smpullquotestyles, id: this.state.id, className: 'pullQuote2 ' + this.state.className },
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.smtext, className: 'pullQuote2-text' },
                                        CHILDS[0]
                                    ),
                                    _react2.default.createElement(
                                        'cite',
                                        { style: use.smcite },
                                        CHILDS[1]
                                    )
                                )
                            )];
                    }
                    break;
                default:
                    use = (0, _pullquoteFunctions2.default)("2", props, state, self);
                    styledPullQuote = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[0], query: '(min-width: 1224px)' },
                        _react2.default.createElement(
                            'blockquote',
                            {
                                style: use.pullquotestyles, id: this.state.id, className: 'pullQuote2 ' + this.state.className },
                            _react2.default.createElement(
                                'p',
                                { style: use.text, className: 'pullQuote2-text' },
                                CHILDS[0]
                            ),
                            _react2.default.createElement(
                                'cite',
                                { style: use.cite },
                                CHILDS[1]
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement(
                            'blockquote',
                            {
                                style: use.mdpullquotestyles, id: this.state.id, className: 'pullQuote2 ' + this.state.className },
                            _react2.default.createElement(
                                'p',
                                { style: use.mdtext, className: 'pullQuote2-text' },
                                CHILDS[0]
                            ),
                            _react2.default.createElement(
                                'cite',
                                { style: use.mdcite },
                                CHILDS[1]
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[2], maxWidth: 767 },
                        _react2.default.createElement(
                            'blockquote',
                            {
                                style: use.smpullquotestyles, id: this.state.id, className: 'pullQuote2 ' + this.state.className },
                            _react2.default.createElement(
                                'p',
                                { style: use.smtext, className: 'pullQuote2-text' },
                                CHILDS[0]
                            ),
                            _react2.default.createElement(
                                'cite',
                                { style: use.smcite },
                                CHILDS[1]
                            )
                        )
                    )];
            }
            this.setState({ childs: CHILDS, styledPullQuote: styledPullQuote, keys: tempkeys });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var props = newProps;
            var state = this.state;
            var styledPullQuote = void 0,
                use = '';
            var self = this;
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            switch (this.state.box) {
                case "1":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _pullquoteFunctions2.default)("1", props, state, self);
                            styledPullQuote = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], query: '(min-width: 1224px)' },
                                _react2.default.createElement(
                                    'blockquote',
                                    {
                                        style: use.pullquotestyles, id: this.state.id, className: 'pullQuote1 ' + this.state.className },
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.text, className: 'pullQuote1-text' },
                                        CHILDS[0]
                                    ),
                                    _react2.default.createElement(
                                        'cite',
                                        { style: use.cite },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'blockquote',
                                    {
                                        style: use.mdpullquotestyles, id: this.state.id, className: 'pullQuote1 ' + this.state.className },
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.mdtext, className: 'pullQuote1-text' },
                                        CHILDS[0]
                                    ),
                                    _react2.default.createElement(
                                        'cite',
                                        { style: use.mdcite },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'blockquote',
                                    {
                                        style: use.smpullquotestyles, id: this.state.id, className: 'pullQuote1 ' + this.state.className },
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.smtext, className: 'pullQuote1-text' },
                                        CHILDS[0]
                                    ),
                                    _react2.default.createElement(
                                        'cite',
                                        { style: use.smcite },
                                        CHILDS[1]
                                    )
                                )
                            )];
                        default:
                            use = (0, _pullquoteFunctions2.default)("1", props, state, self);
                            styledPullQuote = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], query: '(min-width: 1224px)' },
                                _react2.default.createElement(
                                    'blockquote',
                                    {
                                        style: use.pullquotestyles, id: this.state.id, className: 'pullQuote1 ' + this.state.className },
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.text, className: 'pullQuote1-text' },
                                        CHILDS[0]
                                    ),
                                    _react2.default.createElement(
                                        'cite',
                                        { style: use.cite },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'blockquote',
                                    {
                                        style: use.mdpullquotestyles, id: this.state.id, className: 'pullQuote1 ' + this.state.className },
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.mdtext, className: 'pullQuote1-text' },
                                        CHILDS[0]
                                    ),
                                    _react2.default.createElement(
                                        'cite',
                                        { style: use.mdcite },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'blockquote',
                                    {
                                        style: use.smpullquotestyles, id: this.state.id, className: 'pullQuote1 ' + this.state.className },
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.smtext, className: 'pullQuote1-text' },
                                        CHILDS[0]
                                    ),
                                    _react2.default.createElement(
                                        'cite',
                                        { style: use.smcite },
                                        CHILDS[1]
                                    )
                                )
                            )];
                    }
                    break;
                case "2":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _pullquoteFunctions2.default)("2", props, state, self);
                            styledPullQuote = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], query: '(min-width: 1224px)' },
                                _react2.default.createElement(
                                    'blockquote',
                                    {
                                        style: use.pullquotestyles, id: this.state.id, className: 'pullQuote2 ' + this.state.className },
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.text, className: 'pullQuote2-text' },
                                        CHILDS[0]
                                    ),
                                    _react2.default.createElement(
                                        'cite',
                                        { style: use.cite },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'blockquote',
                                    {
                                        style: use.mdpullquotestyles, id: this.state.id, className: 'pullQuote2 ' + this.state.className },
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.mdtext, className: 'pullQuote2-text' },
                                        CHILDS[0]
                                    ),
                                    _react2.default.createElement(
                                        'cite',
                                        { style: use.mdcite },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'blockquote',
                                    {
                                        style: use.smpullquotestyles, id: this.state.id, className: 'pullQuote2 ' + this.state.className },
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.smtext, className: 'pullQuote2-text' },
                                        CHILDS[0]
                                    ),
                                    _react2.default.createElement(
                                        'cite',
                                        { style: use.smcite },
                                        CHILDS[1]
                                    )
                                )
                            )];
                        default:
                            use = (0, _pullquoteFunctions2.default)("2", props, state, self);
                            styledPullQuote = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], query: '(min-width: 1224px)' },
                                _react2.default.createElement(
                                    'blockquote',
                                    {
                                        style: use.pullquotestyles, id: this.state.id, className: 'pullQuote2 ' + this.state.className },
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.text, className: 'pullQuote2-text' },
                                        CHILDS[0]
                                    ),
                                    _react2.default.createElement(
                                        'cite',
                                        { style: use.cite },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'blockquote',
                                    {
                                        style: use.mdpullquotestyles, id: this.state.id, className: 'pullQuote2 ' + this.state.className },
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.mdtext, className: 'pullQuote2-text' },
                                        CHILDS[0]
                                    ),
                                    _react2.default.createElement(
                                        'cite',
                                        { style: use.mdcite },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'blockquote',
                                    {
                                        style: use.smpullquotestyles, id: this.state.id, className: 'pullQuote2 ' + this.state.className },
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.smtext, className: 'pullQuote2-text' },
                                        CHILDS[0]
                                    ),
                                    _react2.default.createElement(
                                        'cite',
                                        { style: use.smcite },
                                        CHILDS[1]
                                    )
                                )
                            )];
                    }
                    break;
                default:
                    use = (0, _pullquoteFunctions2.default)("2", props, state, self);
                    styledPullQuote = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[0], query: '(min-width: 1224px)' },
                        _react2.default.createElement(
                            'blockquote',
                            {
                                style: use.pullquotestyles, id: this.state.id, className: 'pullQuote2 ' + this.state.className },
                            _react2.default.createElement(
                                'p',
                                { style: use.text, className: 'pullQuote2-text' },
                                CHILDS[0]
                            ),
                            _react2.default.createElement(
                                'cite',
                                { style: use.cite },
                                CHILDS[1]
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement(
                            'blockquote',
                            {
                                style: use.mdpullquotestyles, id: this.state.id, className: 'pullQuote2 ' + this.state.className },
                            _react2.default.createElement(
                                'p',
                                { style: use.mdtext, className: 'pullQuote2-text' },
                                CHILDS[0]
                            ),
                            _react2.default.createElement(
                                'cite',
                                { style: use.mdcite },
                                CHILDS[1]
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[2], maxWidth: 767 },
                        _react2.default.createElement(
                            'blockquote',
                            {
                                style: use.smpullquotestyles, id: this.state.id, className: 'pullQuote2 ' + this.state.className },
                            _react2.default.createElement(
                                'p',
                                { style: use.smtext, className: 'pullQuote2-text' },
                                CHILDS[0]
                            ),
                            _react2.default.createElement(
                                'cite',
                                { style: use.smcite },
                                CHILDS[1]
                            )
                        )
                    )];
            }
            this.setState({ childs: CHILDS, styledPullQuote: styledPullQuote });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.state.styledPullQuote
            );
        }
    }]);

    return PLQ;
}(_react2.default.Component);

exports.default = PLQ;