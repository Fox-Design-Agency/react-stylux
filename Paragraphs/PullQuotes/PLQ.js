'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../../css/SuperStyleSheet.css');

require('../../css/animations.css');

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

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

            blockid: props.blockid,
            textid: props.textid,
            citeid: props.citeid,
            blockClassName: props.blockClassName,
            textClassName: props.textClassName,
            citeClassName: props.citeClassName,
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
            box: props.box,
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
            var tempkey = Math.random();
            if (this.state.box === "1") {
                use = (0, _pullquoteFunctions2.default)("1", props, state, self);
                styledPullQuote = [_react2.default.createElement(
                    'blockquote',
                    { key: tempkey, style: use.PULLQUOTESTYLES.pullquotestyles, id: this.state.blockid, className: 'pullQuote1 ' + this.state.blockClassName },
                    _react2.default.createElement(
                        'p',
                        { style: use.PULLQUOTESTYLES.text, id: this.state.textid, className: 'pullQuote1-text ' + this.state.textClassName },
                        CHILDS[0]
                    ),
                    _react2.default.createElement(
                        'cite',
                        { style: use.PULLQUOTESTYLES.cite, id: this.state.citeid, className: this.state.citeClassName },
                        CHILDS[1]
                    )
                )];
            } else if (this.state.box === "2") {
                use = (0, _pullquoteFunctions2.default)("2", props, state, self);
                styledPullQuote = [_react2.default.createElement(
                    'blockquote',
                    { key: tempkey, style: use.PULLQUOTESTYLES.pullquotestyles, id: this.state.blockid, className: 'pullQuote2 ' + this.state.blockClassName },
                    _react2.default.createElement(
                        'p',
                        { style: use.PULLQUOTESTYLES.text, id: this.state.textid, className: 'pullQuote2-text ' + this.state.textClassName },
                        CHILDS[0]
                    ),
                    _react2.default.createElement(
                        'cite',
                        { style: use.PULLQUOTESTYLES.cite, id: this.state.citeid, className: this.state.citeClassName },
                        CHILDS[1]
                    )
                )];
            } else {
                use = (0, _pullquoteFunctions2.default)("custom", props, state, self);
                styledPullQuote = [_react2.default.createElement(
                    'blockquote',
                    { key: tempkey, style: use.PULLQUOTESTYLES.pullquotestyles, id: this.state.blockid, className: 'pullQuote1 ' + this.state.blockClassName },
                    _react2.default.createElement(
                        'p',
                        { style: use.PULLQUOTESTYLES.text, id: this.state.textid, className: 'pullQuote1-text ' + this.state.textClassName },
                        CHILDS[0]
                    ),
                    _react2.default.createElement(
                        'cite',
                        { style: use.PULLQUOTESTYLES.cite, id: this.state.citeid, className: this.state.citeClassName },
                        CHILDS[1]
                    )
                )];
            }
            this.setState({ childs: CHILDS, styledPullQuote: styledPullQuote, keys: tempkey });
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
            if (this.state.box === "1") {
                use = (0, _pullquoteFunctions2.default)("1", props, state, self);
                styledPullQuote = [_react2.default.createElement(
                    'blockquote',
                    { key: this.state.keys, style: use.PULLQUOTESTYLES.pullquotestyles, id: this.state.blockid, className: 'pullQuote1 ' + this.state.blockClassName },
                    _react2.default.createElement(
                        'p',
                        { style: use.PULLQUOTESTYLES.text, id: this.state.textid, className: 'pullQuote1-text ' + this.state.textClassName },
                        CHILDS[0]
                    ),
                    _react2.default.createElement(
                        'cite',
                        { style: use.PULLQUOTESTYLES.cite, id: this.state.citeid, className: this.state.citeClassName },
                        CHILDS[1]
                    )
                )];
            } else if (this.state.box === "2") {
                use = (0, _pullquoteFunctions2.default)("2", props, state, self);
                styledPullQuote = [_react2.default.createElement(
                    'blockquote',
                    { key: this.state.keys, style: use.PULLQUOTESTYLES.pullquotestyles, id: this.state.blockid, className: 'pullQuote2 ' + this.state.blockClassName },
                    _react2.default.createElement(
                        'p',
                        { style: use.PULLQUOTESTYLES.text, id: this.state.textid, className: 'pullQuote2-text ' + this.state.textClassName },
                        CHILDS[0]
                    ),
                    _react2.default.createElement(
                        'cite',
                        { style: use.PULLQUOTESTYLES.cite, id: this.state.citeid, className: this.state.citeClassName },
                        CHILDS[1]
                    )
                )];
            } else {
                use = (0, _pullquoteFunctions2.default)("custom", props, state, self);
                styledPullQuote = [_react2.default.createElement(
                    'blockquote',
                    { key: this.state.keys, style: use.PULLQUOTESTYLES.pullquotestyles, id: this.state.blockid, className: 'pullQuote1 ' + this.state.blockClassName },
                    _react2.default.createElement(
                        'p',
                        { style: use.PULLQUOTESTYLES.text, id: this.state.textid, className: 'pullQuote1-text ' + this.state.textClassName },
                        CHILDS[0]
                    ),
                    _react2.default.createElement(
                        'cite',
                        { style: use.PULLQUOTESTYLES.cite, id: this.state.citeid, className: this.state.citeClassName },
                        CHILDS[1]
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