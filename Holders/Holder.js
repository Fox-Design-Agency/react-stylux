'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/reset.css');

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

var _holderSwitch0_ = require('./holderFunctions/holderSwitch0_5');

var _holderSwitch0_2 = _interopRequireDefault(_holderSwitch0_);

var _holderSwitch6_ = require('./holderFunctions/holderSwitch6_10');

var _holderSwitch6_2 = _interopRequireDefault(_holderSwitch6_);

var _holderSwitch11_ = require('./holderFunctions/holderSwitch11_15');

var _holderSwitch11_2 = _interopRequireDefault(_holderSwitch11_);

var _holderSwitch16_ = require('./holderFunctions/holderSwitch16_20');

var _holderSwitch16_2 = _interopRequireDefault(_holderSwitch16_);

var _holderSwitch21_ = require('./holderFunctions/holderSwitch21_25');

var _holderSwitch21_2 = _interopRequireDefault(_holderSwitch21_);

var _holderSwitch26_ = require('./holderFunctions/holderSwitch26_30');

var _holderSwitch26_2 = _interopRequireDefault(_holderSwitch26_);

var _holderSwitch31_ = require('./holderFunctions/holderSwitch31_35');

var _holderSwitch31_2 = _interopRequireDefault(_holderSwitch31_);

var _holderSwitch36_ = require('./holderFunctions/holderSwitch36_40');

var _holderSwitch36_2 = _interopRequireDefault(_holderSwitch36_);

var _holderSwitch41_ = require('./holderFunctions/holderSwitch41_45');

var _holderSwitch41_2 = _interopRequireDefault(_holderSwitch41_);

var _holderSwitch46_ = require('./holderFunctions/holderSwitch46_50');

var _holderSwitch46_2 = _interopRequireDefault(_holderSwitch46_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Start of Holder 1 Component */
var Holder = function (_React$Component) {
    _inherits(Holder, _React$Component);

    function Holder(props) {
        _classCallCheck(this, Holder);

        var _this = _possibleConstructorReturn(this, (Holder.__proto__ || Object.getPrototypeOf(Holder)).call(this, props));

        _this.state = {
            display: props.display || 'flex',
            direction: props.direction || 'row',
            height: props.height,
            maxHeight: props.maxHeight,
            width: props.width || "100%",
            maxWidth: props.maxWidth,
            borderLeft: props.bLeft,
            borderRight: props.bRight,
            borderTop: props.bTop,
            borderBottom: props.bBottom,
            border: props.border,
            padding: props.padding || '0',
            margin: props.margin || '10px 0',
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            smflexDir: props.smflexDir || props.direction,
            mdflexDir: props.mdflexDir || props.direction,
            childs: [],
            className: props.className,
            id: props.id,
            keys: ''
        };
        return _this;
    }

    _createClass(Holder, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var props = this.props;
            var state = this.state;
            var styledHolder = void 0,
                styledChilds1 = void 0,
                styledChilds2 = void 0,
                styledChilds3 = void 0,
                styledChilds4 = void 0,
                styledChilds5 = void 0,
                styledChilds6 = void 0,
                styledChilds7 = void 0,
                styledChilds8 = void 0,
                styledChilds9 = void 0,
                styledChilds10 = void 0,
                styledChilds11 = void 0,
                styledChilds12 = void 0,
                styledChilds13 = void 0,
                styledChilds14 = void 0,
                styledChilds15 = void 0,
                styledChilds16 = void 0,
                styledChilds17 = void 0,
                styledChilds18 = void 0,
                styledChilds19 = void 0,
                styledChilds20 = void 0,
                styledChilds21 = void 0,
                styledChilds22 = void 0,
                styledChilds23 = void 0,
                styledChilds24 = void 0,
                styledChilds25 = void 0,
                styledChilds26 = void 0,
                styledChilds27 = void 0,
                styledChilds28 = void 0,
                styledChilds29 = void 0,
                styledChilds30 = void 0,
                styledChilds31 = void 0,
                styledChilds32 = void 0,
                styledChilds33 = void 0,
                styledChilds34 = void 0,
                styledChilds35 = void 0,
                styledChilds36 = void 0,
                styledChilds37 = void 0,
                styledChilds38 = void 0,
                styledChilds39 = void 0,
                styledChilds40 = void 0,
                styledChilds41 = void 0,
                styledChilds42 = void 0,
                styledChilds43 = void 0,
                styledChilds44 = void 0,
                styledChilds45 = void 0,
                styledChilds46 = void 0,
                styledChilds47 = void 0,
                styledChilds48 = void 0,
                styledChilds49 = void 0,
                styledChilds50 = '';
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            var num = CHILDS.length;
            var tempkeys = [];
            for (var i = 0; i <= num + 2; i++) {
                tempkeys.push(tempkeys[i] = Math.random());
            }
            if (num === 1) {
                var use = (0, _holderSwitch0_2.default)(1, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: use.block1styles.block1styles, className: this.state.className, id: this.state.id },
                    CHILDS[0]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: tempkeys[0], style: use.holderstyles.holderstyles },
                    styledChilds1
                )];
            } else if (num === 2) {
                var _use = (0, _holderSwitch0_2.default)(2, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use.block2styles.block2styles },
                    CHILDS[1]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: tempkeys[0], style: _use.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2
                )];
            } else if (num === 3) {
                var _use2 = (0, _holderSwitch0_2.default)(3, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use2.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use2.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use2.block3styles.block3styles },
                    CHILDS[2]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: tempkeys[0], style: _use2.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3
                )];
            } else if (num === 4) {
                var _use3 = (0, _holderSwitch0_2.default)(4, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use3.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use3.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use3.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use3.block4styles.block4styles },
                    CHILDS[3]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: tempkeys[0], style: _use3.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4
                )];
            } else if (num === 5) {
                var _use4 = (0, _holderSwitch0_2.default)(5, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use4.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use4.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use4.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use4.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use4.block5styles.block5styles },
                    CHILDS[4]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: tempkeys[0], style: _use4.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5
                )];
            } else if (num === 6) {
                var _use5 = (0, _holderSwitch6_2.default)(6, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use5.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use5.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use5.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use5.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use5.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use5.block6styles.block6styles },
                    CHILDS[5]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: tempkeys[0], style: _use5.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6
                )];
            } else if (num === 7) {
                var _use6 = (0, _holderSwitch6_2.default)(7, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use6.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use6.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use6.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use6.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use6.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use6.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use6.block7styles.block7styles },
                    CHILDS[6]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: tempkeys[0], style: _use6.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7
                )];
            } else if (num === 8) {
                var _use7 = (0, _holderSwitch6_2.default)(8, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use7.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use7.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use7.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use7.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use7.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use7.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use7.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use7.block8styles.block8styles },
                    CHILDS[7]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: tempkeys[0], style: _use7.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8
                )];
            } else if (num === 9) {
                var _use8 = (0, _holderSwitch6_2.default)(9, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use8.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use8.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use8.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use8.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use8.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use8.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use8.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use8.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use8.block9styles.block9styles },
                    CHILDS[8]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: tempkeys[0], style: _use8.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9
                )];
            } else if (num === 10) {
                var _use9 = (0, _holderSwitch6_2.default)(10, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use9.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use9.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use9.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use9.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use9.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use9.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use9.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use9.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use9.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use9.block10styles.block10styles },
                    CHILDS[9]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: tempkeys[0], style: _use9.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10
                )];
            } else if (num === 11) {
                var _use10 = (0, _holderSwitch11_2.default)(11, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use10.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use10.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use10.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use10.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use10.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use10.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use10.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use10.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use10.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use10.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use10.block11styles.block11styles },
                    CHILDS[10]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: tempkeys[0], style: _use10.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11
                )];
            } else if (num === 12) {
                var _use11 = (0, _holderSwitch11_2.default)(12, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use11.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use11.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use11.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use11.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use11.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use11.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use11.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use11.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use11.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use11.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use11.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use11.block12styles.block12styles },
                    CHILDS[11]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: tempkeys[0], style: _use11.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12
                )];
            } else if (num === 13) {
                var _use12 = (0, _holderSwitch11_2.default)(13, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use12.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use12.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use12.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use12.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use12.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use12.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use12.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use12.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use12.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use12.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use12.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use12.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use12.block13styles.block13styles },
                    CHILDS[12]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: tempkeys[0], style: _use12.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13
                )];
            } else if (num === 14) {
                var _use13 = (0, _holderSwitch11_2.default)(14, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use13.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use13.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use13.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use13.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use13.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use13.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use13.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use13.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use13.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use13.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use13.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use13.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use13.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use13.block14styles.block14styles },
                    CHILDS[13]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: tempkeys[0], style: _use13.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14
                )];
            } else if (num === 15) {
                var _use14 = (0, _holderSwitch11_2.default)(15, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use14.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use14.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use14.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use14.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use14.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use14.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use14.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use14.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use14.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use14.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use14.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use14.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use14.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use14.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use14.block15styles.block15styles },
                    CHILDS[14]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: tempkeys[0], style: _use14.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15
                )];
            } else if (num === 16) {
                var _use15 = (0, _holderSwitch16_2.default)(16, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use15.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use15.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use15.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use15.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use15.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use15.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use15.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use15.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use15.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use15.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use15.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use15.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use15.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use15.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use15.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use15.block16styles.block16styles },
                    CHILDS[15]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: tempkeys[0], style: _use15.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16
                )];
            } else if (num === 17) {
                var _use16 = (0, _holderSwitch16_2.default)(17, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use16.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use16.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use16.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use16.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use16.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use16.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use16.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use16.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use16.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use16.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use16.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use16.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use16.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use16.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use16.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use16.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use16.block17styles.block17styles },
                    CHILDS[16]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: tempkeys[0], style: _use16.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17
                )];
            } else if (num === 18) {
                var _use17 = (0, _holderSwitch16_2.default)(18, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use17.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use17.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use17.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use17.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use17.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use17.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use17.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use17.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use17.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use17.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use17.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use17.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use17.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use17.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use17.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use17.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use17.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use17.block18styles.block18styles },
                    CHILDS[17]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: tempkeys[0], style: _use17.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18
                )];
            } else if (num === 19) {
                var _use18 = (0, _holderSwitch16_2.default)(19, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use18.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use18.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use18.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use18.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use18.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use18.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use18.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use18.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use18.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use18.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use18.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use18.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use18.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use18.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use18.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use18.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use18.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use18.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use18.block19styles.block19styles },
                    CHILDS[18]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: tempkeys[0], style: _use18.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19
                )];
            } else if (num === 20) {
                var _use19 = (0, _holderSwitch16_2.default)(20, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use19.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use19.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use19.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use19.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use19.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use19.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use19.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use19.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use19.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use19.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use19.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use19.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use19.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use19.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use19.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use19.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use19.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use19.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use19.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use19.block20styles.block20styles },
                    CHILDS[19]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: tempkeys[0], style: _use19.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20
                )];
            } else if (num === 21) {
                var _use20 = (0, _holderSwitch21_2.default)(21, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use20.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use20.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use20.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use20.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use20.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use20.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use20.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use20.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use20.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use20.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use20.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use20.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use20.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use20.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use20.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use20.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use20.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use20.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use20.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use20.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use20.block21styles.block21styles },
                    CHILDS[20]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use20.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21
                )];
            } else if (num === 22) {
                var _use21 = (0, _holderSwitch21_2.default)(22, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use21.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use21.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use21.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use21.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use21.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use21.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use21.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use21.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use21.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use21.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use21.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use21.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use21.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use21.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use21.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use21.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use21.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use21.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use21.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use21.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use21.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use21.block22styles.block22styles },
                    CHILDS[21]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use21.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22
                )];
            } else if (num === 23) {
                var _use22 = (0, _holderSwitch21_2.default)(23, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use22.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use22.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use22.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use22.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use22.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use22.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use22.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use22.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use22.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use22.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use22.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use22.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use22.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use22.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use22.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use22.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use22.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use22.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use22.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use22.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use22.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use22.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[23], style: _use22.block23styles.block23styles },
                    CHILDS[22]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use22.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23
                )];
            } else if (num === 24) {
                var _use23 = (0, _holderSwitch21_2.default)(24, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use23.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use23.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use23.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use23.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use23.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use23.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use23.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use23.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use23.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use23.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use23.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use23.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use23.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use23.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use23.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use23.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use23.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use23.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use23.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use23.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use23.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use23.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[23], style: _use23.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[24], style: _use23.block24styles.block24styles },
                    CHILDS[23]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use23.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24
                )];
            } else if (num === 25) {
                var _use24 = (0, _holderSwitch21_2.default)(25, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use24.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use24.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use24.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use24.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use24.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use24.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use24.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use24.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use24.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use24.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use24.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use24.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use24.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use24.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use24.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use24.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use24.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use24.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use24.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use24.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use24.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use24.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[23], style: _use24.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[24], style: _use24.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[25], style: _use24.block25styles.block25styles },
                    CHILDS[24]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use24.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25
                )];
            } else if (num === 26) {
                var _use25 = (0, _holderSwitch26_2.default)(26, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use25.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use25.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use25.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use25.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use25.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use25.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use25.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use25.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use25.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use25.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use25.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use25.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use25.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use25.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use25.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use25.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use25.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use25.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use25.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use25.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use25.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use25.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[23], style: _use25.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[24], style: _use25.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[25], style: _use25.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[26], style: _use25.block26styles.block26styles },
                    CHILDS[25]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use25.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26
                )];
            } else if (num === 27) {
                var _use26 = (0, _holderSwitch26_2.default)(27, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use26.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use26.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use26.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use26.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use26.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use26.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use26.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use26.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use26.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use26.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use26.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use26.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use26.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use26.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use26.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use26.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use26.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use26.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use26.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use26.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use26.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use26.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[23], style: _use26.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[24], style: _use26.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[25], style: _use26.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[26], style: _use26.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[27], style: _use26.block27styles.block27styles },
                    CHILDS[26]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use26.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27
                )];
            } else if (num === 28) {
                var _use27 = (0, _holderSwitch26_2.default)(28, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use27.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use27.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use27.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use27.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use27.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use27.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use27.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use27.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use27.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use27.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use27.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use27.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use27.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use27.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use27.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use27.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use27.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use27.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use27.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use27.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use27.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use27.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[23], style: _use27.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[24], style: _use27.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[25], style: _use27.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[26], style: _use27.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[27], style: _use27.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[28], style: _use27.block28styles.block28styles },
                    CHILDS[27]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use27.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    '}'
                )];
            } else if (num === 29) {
                var _use28 = (0, _holderSwitch26_2.default)(29, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use28.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use28.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use28.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use28.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use28.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use28.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use28.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use28.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use28.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use28.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use28.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use28.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use28.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use28.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use28.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use28.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use28.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use28.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use28.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use28.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use28.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use28.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[23], style: _use28.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[24], style: _use28.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[25], style: _use28.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[26], style: _use28.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[27], style: _use28.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[28], style: _use28.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[29], style: _use28.block29styles.block29styles },
                    CHILDS[28]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use28.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29
                )];
            } else if (num === 30) {
                var _use29 = (0, _holderSwitch26_2.default)(30, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use29.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use29.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use29.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use29.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use29.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use29.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use29.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use29.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use29.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use29.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use29.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use29.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use29.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use29.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use29.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use29.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use29.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use29.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use29.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use29.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use29.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use29.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[23], style: _use29.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[24], style: _use29.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[25], style: _use29.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[26], style: _use29.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[27], style: _use29.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[28], style: _use29.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[29], style: _use29.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[30], style: _use29.block30styles.block30styles },
                    CHILDS[29]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use29.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30
                )];
            } else if (num === 31) {
                var _use30 = (0, _holderSwitch31_2.default)(31, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use30.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use30.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use30.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use30.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use30.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use30.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use30.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use30.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use30.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use30.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use30.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use30.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use30.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use30.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use30.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use30.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use30.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use30.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use30.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use30.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use30.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use30.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[23], style: _use30.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[24], style: _use30.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[25], style: _use30.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[26], style: _use30.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[27], style: _use30.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[28], style: _use30.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[29], style: _use30.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[30], style: _use30.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[31], style: _use30.block31styles.block31styles },
                    CHILDS[30]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use30.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31
                )];
            } else if (num === 32) {
                var _use31 = (0, _holderSwitch31_2.default)(32, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use31.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use31.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use31.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use31.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use31.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use31.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use31.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use31.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use31.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use31.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use31.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use31.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use31.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use31.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use31.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use31.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use31.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use31.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use31.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use31.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use31.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use31.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[23], style: _use31.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[24], style: _use31.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[25], style: _use31.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[26], style: _use31.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[27], style: _use31.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[28], style: _use31.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[29], style: _use31.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[30], style: _use31.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[31], style: _use31.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[32], style: _use31.block32styles.block32styles },
                    CHILDS[31]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use31.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32
                )];
            } else if (num === 33) {
                var _use32 = (0, _holderSwitch31_2.default)(33, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use32.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use32.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use32.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use32.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use32.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use32.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use32.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use32.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use32.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use32.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use32.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use32.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use32.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use32.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use32.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use32.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use32.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use32.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use32.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use32.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use32.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use32.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[23], style: _use32.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[24], style: _use32.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[25], style: _use32.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[26], style: _use32.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[27], style: _use32.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[28], style: _use32.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[29], style: _use32.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[30], style: _use32.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[31], style: _use32.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[32], style: _use32.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[33], style: _use32.block33styles.block33styles },
                    CHILDS[32]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use32.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33
                )];
            } else if (num === 34) {
                var _use33 = (0, _holderSwitch31_2.default)(34, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use33.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use33.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use33.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use33.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use33.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use33.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use33.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use33.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use33.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use33.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use33.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use33.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use33.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use33.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use33.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use33.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use33.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use33.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use33.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use33.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use33.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use33.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[23], style: _use33.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[24], style: _use33.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[25], style: _use33.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[26], style: _use33.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[27], style: _use33.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[28], style: _use33.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[29], style: _use33.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[30], style: _use33.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[31], style: _use33.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[32], style: _use33.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[33], style: _use33.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[34], style: _use33.block34styles.block34styles },
                    CHILDS[33]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use33.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34
                )];
            } else if (num === 35) {
                var _use34 = (0, _holderSwitch31_2.default)(35, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use34.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use34.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use34.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use34.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use34.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use34.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use34.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use34.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use34.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use34.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use34.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use34.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use34.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use34.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use34.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use34.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use34.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use34.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use34.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use34.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use34.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use34.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[23], style: _use34.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[24], style: _use34.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[25], style: _use34.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[26], style: _use34.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[27], style: _use34.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[28], style: _use34.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[29], style: _use34.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[30], style: _use34.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[31], style: _use34.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[32], style: _use34.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[33], style: _use34.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[34], style: _use34.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[35], style: _use34.block35styles.block35styles },
                    CHILDS[34]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use34.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35
                )];
            } else if (num === 36) {
                var _use35 = (0, _holderSwitch36_2.default)(36, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use35.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use35.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use35.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use35.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use35.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use35.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use35.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use35.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use35.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use35.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use35.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use35.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use35.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use35.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use35.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use35.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use35.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use35.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use35.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use35.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use35.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use35.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[23], style: _use35.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[24], style: _use35.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[25], style: _use35.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[26], style: _use35.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[27], style: _use35.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[28], style: _use35.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[29], style: _use35.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[30], style: _use35.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[31], style: _use35.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[32], style: _use35.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[33], style: _use35.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[34], style: _use35.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[35], style: _use35.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[36], style: _use35.block36styles.block36styles },
                    CHILDS[35]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use35.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36
                )];
            } else if (num === 37) {
                var _use36 = (0, _holderSwitch36_2.default)(37, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use36.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use36.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use36.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use36.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use36.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use36.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use36.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use36.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use36.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use36.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use36.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use36.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use36.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use36.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use36.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use36.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use36.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use36.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use36.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use36.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use36.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use36.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[23], style: _use36.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[24], style: _use36.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[25], style: _use36.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[26], style: _use36.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[27], style: _use36.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[28], style: _use36.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[29], style: _use36.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[30], style: _use36.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[31], style: _use36.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[32], style: _use36.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[33], style: _use36.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[34], style: _use36.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[35], style: _use36.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[36], style: _use36.block36styles.block36styles },
                    CHILDS[35]
                );
                styledChilds37 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[37], style: _use36.block37styles.block37styles },
                    CHILDS[36]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use36.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36,
                    styledChilds37
                )];
            } else if (num === 38) {
                var _use37 = (0, _holderSwitch36_2.default)(38, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use37.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use37.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use37.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use37.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use37.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use37.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use37.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use37.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use37.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use37.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use37.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use37.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use37.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use37.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use37.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use37.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use37.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use37.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use37.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use37.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use37.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use37.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[23], style: _use37.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[24], style: _use37.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[25], style: _use37.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[26], style: _use37.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[27], style: _use37.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[28], style: _use37.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[29], style: _use37.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[30], style: _use37.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[31], style: _use37.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[32], style: _use37.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[33], style: _use37.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[34], style: _use37.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[35], style: _use37.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[36], style: _use37.block36styles.block36styles },
                    CHILDS[35]
                );
                styledChilds37 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[37], style: _use37.block37styles.block37styles },
                    CHILDS[36]
                );
                styledChilds38 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[38], style: _use37.block38styles.block38styles },
                    CHILDS[37]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use37.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36,
                    styledChilds37,
                    styledChilds38
                )];
            } else if (num === 39) {
                var _use38 = (0, _holderSwitch36_2.default)(39, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use38.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use38.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use38.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use38.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use38.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use38.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use38.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use38.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use38.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use38.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use38.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use38.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use38.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use38.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use38.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use38.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use38.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use38.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use38.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use38.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use38.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use38.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[23], style: _use38.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[24], style: _use38.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[25], style: _use38.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[26], style: _use38.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[27], style: _use38.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[28], style: _use38.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[29], style: _use38.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[30], style: _use38.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[31], style: _use38.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[32], style: _use38.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[33], style: _use38.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[34], style: _use38.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[35], style: _use38.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[36], style: _use38.block36styles.block36styles },
                    CHILDS[35]
                );
                styledChilds37 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[37], style: _use38.block37styles.block37styles },
                    CHILDS[36]
                );
                styledChilds38 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[38], style: _use38.block38styles.block38styles },
                    CHILDS[37]
                );
                styledChilds39 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[39], style: _use38.block39styles.block39styles },
                    CHILDS[38]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use38.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36,
                    styledChilds37,
                    styledChilds38,
                    styledChilds39
                )];
            } else if (num === 40) {
                var _use39 = (0, _holderSwitch36_2.default)(40, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use39.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use39.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use39.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use39.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use39.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use39.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use39.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use39.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use39.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use39.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use39.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use39.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use39.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use39.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use39.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use39.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use39.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use39.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use39.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use39.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use39.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use39.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[23], style: _use39.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[24], style: _use39.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[25], style: _use39.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[26], style: _use39.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[27], style: _use39.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[28], style: _use39.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[29], style: _use39.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[30], style: _use39.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[31], style: _use39.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[32], style: _use39.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[33], style: _use39.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[34], style: _use39.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[35], style: _use39.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[36], style: _use39.block36styles.block36styles },
                    CHILDS[35]
                );
                styledChilds37 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[37], style: _use39.block37styles.block37styles },
                    CHILDS[36]
                );
                styledChilds38 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[38], style: _use39.block38styles.block38styles },
                    CHILDS[37]
                );
                styledChilds39 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[39], style: _use39.block39styles.block39styles },
                    CHILDS[38]
                );
                styledChilds40 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[40], style: _use39.block40styles.block40styles },
                    CHILDS[39]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use39.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36,
                    styledChilds37,
                    styledChilds38,
                    styledChilds39,
                    styledChilds40
                )];
            } else if (num === 41) {
                var _use40 = (0, _holderSwitch41_2.default)(41, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use40.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use40.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use40.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use40.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use40.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use40.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use40.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use40.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use40.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use40.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use40.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use40.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use40.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use40.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use40.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use40.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use40.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use40.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use40.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use40.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use40.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use40.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[23], style: _use40.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[24], style: _use40.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[25], style: _use40.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[26], style: _use40.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[27], style: _use40.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[28], style: _use40.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[29], style: _use40.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[30], style: _use40.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[31], style: _use40.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[32], style: _use40.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[33], style: _use40.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[34], style: _use40.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[35], style: _use40.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[36], style: _use40.block36styles.block36styles },
                    CHILDS[35]
                );
                styledChilds37 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[37], style: _use40.block37styles.block37styles },
                    CHILDS[36]
                );
                styledChilds38 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[38], style: _use40.block38styles.block38styles },
                    CHILDS[37]
                );
                styledChilds39 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[39], style: _use40.block39styles.block39styles },
                    CHILDS[38]
                );
                styledChilds40 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[40], style: _use40.block40styles.block40styles },
                    CHILDS[39]
                );
                styledChilds41 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[41], style: _use40.block41styles.block41styles },
                    CHILDS[40]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use40.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36,
                    styledChilds37,
                    styledChilds38,
                    styledChilds39,
                    styledChilds40,
                    styledChilds41
                )];
            } else if (num === 42) {
                var _use41 = (0, _holderSwitch41_2.default)(42, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use41.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use41.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use41.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use41.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use41.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use41.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use41.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use41.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use41.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use41.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use41.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use41.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use41.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use41.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use41.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use41.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use41.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use41.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use41.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use41.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use41.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use41.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[23], style: _use41.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[24], style: _use41.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[25], style: _use41.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[26], style: _use41.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[27], style: _use41.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[28], style: _use41.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[29], style: _use41.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[30], style: _use41.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[31], style: _use41.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[32], style: _use41.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[33], style: _use41.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[34], style: _use41.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[35], style: _use41.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[36], style: _use41.block36styles.block36styles },
                    CHILDS[35]
                );
                styledChilds37 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[37], style: _use41.block37styles.block37styles },
                    CHILDS[36]
                );
                styledChilds38 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[38], style: _use41.block38styles.block38styles },
                    CHILDS[37]
                );
                styledChilds39 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[39], style: _use41.block39styles.block39styles },
                    CHILDS[38]
                );
                styledChilds40 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[40], style: _use41.block40styles.block40styles },
                    CHILDS[39]
                );
                styledChilds41 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[41], style: _use41.block41styles.block41styles },
                    CHILDS[40]
                );
                styledChilds42 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[42], style: _use41.block42styles.block42styles },
                    CHILDS[41]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use41.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36,
                    styledChilds37,
                    styledChilds38,
                    styledChilds39,
                    styledChilds40,
                    styledChilds41,
                    styledChilds42
                )];
            } else if (num === 43) {
                var _use42 = (0, _holderSwitch41_2.default)(43, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use42.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use42.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use42.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use42.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use42.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use42.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use42.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use42.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use42.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use42.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use42.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use42.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use42.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use42.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use42.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use42.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use42.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use42.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use42.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use42.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use42.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use42.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[23], style: _use42.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[24], style: _use42.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[25], style: _use42.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[26], style: _use42.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[27], style: _use42.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[28], style: _use42.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[29], style: _use42.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[30], style: _use42.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[31], style: _use42.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[32], style: _use42.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[33], style: _use42.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[34], style: _use42.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[35], style: _use42.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[36], style: _use42.block36styles.block36styles },
                    CHILDS[35]
                );
                styledChilds37 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[37], style: _use42.block37styles.block37styles },
                    CHILDS[36]
                );
                styledChilds38 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[38], style: _use42.block38styles.block38styles },
                    CHILDS[37]
                );
                styledChilds39 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[39], style: _use42.block39styles.block39styles },
                    CHILDS[38]
                );
                styledChilds40 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[40], style: _use42.block40styles.block40styles },
                    CHILDS[39]
                );
                styledChilds41 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[41], style: _use42.block41styles.block41styles },
                    CHILDS[40]
                );
                styledChilds42 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[42], style: _use42.block42styles.block42styles },
                    CHILDS[41]
                );
                styledChilds43 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[43], style: _use42.block43styles.block43styles },
                    CHILDS[42]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use42.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36,
                    styledChilds37,
                    styledChilds38,
                    styledChilds39,
                    styledChilds40,
                    styledChilds41,
                    styledChilds42,
                    styledChilds43
                )];
            } else if (num === 44) {
                var _use43 = (0, _holderSwitch41_2.default)(44, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use43.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use43.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use43.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use43.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use43.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use43.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use43.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use43.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use43.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use43.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use43.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use43.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use43.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use43.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use43.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use43.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use43.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use43.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use43.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use43.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use43.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use43.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[23], style: _use43.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[24], style: _use43.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[25], style: _use43.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[26], style: _use43.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[27], style: _use43.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[28], style: _use43.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[29], style: _use43.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[30], style: _use43.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[231], style: _use43.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[32], style: _use43.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[33], style: _use43.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[34], style: _use43.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[35], style: _use43.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[36], style: _use43.block36styles.block36styles },
                    CHILDS[35]
                );
                styledChilds37 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[37], style: _use43.block37styles.block37styles },
                    CHILDS[36]
                );
                styledChilds38 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[38], style: _use43.block38styles.block38styles },
                    CHILDS[37]
                );
                styledChilds39 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[39], style: _use43.block39styles.block39styles },
                    CHILDS[38]
                );
                styledChilds40 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[40], style: _use43.block40styles.block40styles },
                    CHILDS[39]
                );
                styledChilds41 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[41], style: _use43.block41styles.block41styles },
                    CHILDS[40]
                );
                styledChilds42 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[42], style: _use43.block42styles.block42styles },
                    CHILDS[41]
                );
                styledChilds43 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[43], style: _use43.block43styles.block43styles },
                    CHILDS[42]
                );
                styledChilds44 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[44], style: _use43.block44styles.block44styles },
                    CHILDS[43]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use43.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36,
                    styledChilds37,
                    styledChilds38,
                    styledChilds39,
                    styledChilds40,
                    styledChilds41,
                    styledChilds42,
                    styledChilds43,
                    styledChilds44
                )];
            } else if (num === 45) {
                var _use44 = (0, _holderSwitch41_2.default)(45, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use44.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use44.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use44.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use44.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use44.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use44.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use44.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use44.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use44.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use44.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use44.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use44.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use44.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use44.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use44.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use44.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use44.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use44.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use44.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use44.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use44.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use44.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[23], style: _use44.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[24], style: _use44.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[25], style: _use44.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[26], style: _use44.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[27], style: _use44.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[28], style: _use44.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[29], style: _use44.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[30], style: _use44.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[31], style: _use44.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[32], style: _use44.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[33], style: _use44.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[34], style: _use44.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[35], style: _use44.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[36], style: _use44.block36styles.block36styles },
                    CHILDS[35]
                );
                styledChilds37 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[37], style: _use44.block37styles.block37styles },
                    CHILDS[36]
                );
                styledChilds38 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[38], style: _use44.block38styles.block38styles },
                    CHILDS[37]
                );
                styledChilds39 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[39], style: _use44.block39styles.block39styles },
                    CHILDS[38]
                );
                styledChilds40 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[40], style: _use44.block40styles.block40styles },
                    CHILDS[39]
                );
                styledChilds41 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[41], style: _use44.block41styles.block41styles },
                    CHILDS[40]
                );
                styledChilds42 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[42], style: _use44.block42styles.block42styles },
                    CHILDS[41]
                );
                styledChilds43 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[43], style: _use44.block43styles.block43styles },
                    CHILDS[42]
                );
                styledChilds44 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[44], style: _use44.block44styles.block44styles },
                    CHILDS[43]
                );
                styledChilds45 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[45], style: _use44.block45styles.block45styles },
                    CHILDS[44]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use44.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36,
                    styledChilds37,
                    styledChilds38,
                    styledChilds39,
                    styledChilds40,
                    styledChilds41,
                    styledChilds42,
                    styledChilds43,
                    styledChilds44,
                    styledChilds45
                )];
            } else if (num === 46) {
                var _use45 = (0, _holderSwitch46_2.default)(46, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use45.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use45.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use45.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use45.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use45.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use45.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use45.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use45.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use45.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use45.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use45.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use45.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use45.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use45.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use45.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use45.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use45.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use45.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use45.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use45.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use45.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use45.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[23], style: _use45.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[24], style: _use45.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[25], style: _use45.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[26], style: _use45.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[27], style: _use45.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[28], style: _use45.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[29], style: _use45.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[30], style: _use45.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[31], style: _use45.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[32], style: _use45.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[33], style: _use45.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[34], style: _use45.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[35], style: _use45.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[36], style: _use45.block36styles.block36styles },
                    CHILDS[35]
                );
                styledChilds37 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[37], style: _use45.block37styles.block37styles },
                    CHILDS[36]
                );
                styledChilds38 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[38], style: _use45.block38styles.block38styles },
                    CHILDS[37]
                );
                styledChilds39 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[39], style: _use45.block39styles.block39styles },
                    CHILDS[38]
                );
                styledChilds40 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[40], style: _use45.block40styles.block40styles },
                    CHILDS[39]
                );
                styledChilds41 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[41], style: _use45.block41styles.block41styles },
                    CHILDS[40]
                );
                styledChilds42 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[42], style: _use45.block42styles.block42styles },
                    CHILDS[41]
                );
                styledChilds43 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[43], style: _use45.block43styles.block43styles },
                    CHILDS[42]
                );
                styledChilds44 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[44], style: _use45.block44styles.block44styles },
                    CHILDS[43]
                );
                styledChilds45 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[45], style: _use45.block45styles.block45styles },
                    CHILDS[44]
                );
                styledChilds46 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[46], style: _use45.block46styles.block46styles },
                    CHILDS[45]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use45.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36,
                    styledChilds37,
                    styledChilds38,
                    styledChilds39,
                    styledChilds40,
                    styledChilds41,
                    styledChilds42,
                    styledChilds43,
                    styledChilds44,
                    styledChilds45,
                    styledChilds46
                )];
            } else if (num === 47) {
                var _use46 = (0, _holderSwitch46_2.default)(47, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use46.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use46.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use46.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use46.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use46.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use46.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use46.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use46.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use46.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use46.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use46.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use46.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use46.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use46.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use46.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use46.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use46.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use46.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use46.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use46.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use46.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use46.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[23], style: _use46.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[24], style: _use46.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[25], style: _use46.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[26], style: _use46.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[27], style: _use46.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[28], style: _use46.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[29], style: _use46.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[30], style: _use46.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[31], style: _use46.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[32], style: _use46.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[33], style: _use46.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[34], style: _use46.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[35], style: _use46.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[36], style: _use46.block36styles.block36styles },
                    CHILDS[35]
                );
                styledChilds37 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[37], style: _use46.block37styles.block37styles },
                    CHILDS[36]
                );
                styledChilds38 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[38], style: _use46.block38styles.block38styles },
                    CHILDS[37]
                );
                styledChilds39 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[39], style: _use46.block39styles.block39styles },
                    CHILDS[38]
                );
                styledChilds40 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[40], style: _use46.block40styles.block40styles },
                    CHILDS[39]
                );
                styledChilds41 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[41], style: _use46.block41styles.block41styles },
                    CHILDS[40]
                );
                styledChilds42 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[42], style: _use46.block42styles.block42styles },
                    CHILDS[41]
                );
                styledChilds43 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[43], style: _use46.block43styles.block43styles },
                    CHILDS[42]
                );
                styledChilds44 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[44], style: _use46.block44styles.block44styles },
                    CHILDS[43]
                );
                styledChilds45 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[45], style: _use46.block45styles.block45styles },
                    CHILDS[44]
                );
                styledChilds46 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[46], style: _use46.block46styles.block46styles },
                    CHILDS[45]
                );
                styledChilds47 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[47], style: _use46.block47styles.block47styles },
                    CHILDS[46]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use46.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36,
                    styledChilds37,
                    styledChilds38,
                    styledChilds39,
                    styledChilds40,
                    styledChilds41,
                    styledChilds42,
                    styledChilds43,
                    styledChilds44,
                    styledChilds45,
                    styledChilds46,
                    styledChilds47
                )];
            } else if (num === 48) {
                var _use47 = (0, _holderSwitch46_2.default)(48, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use47.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use47.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use47.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use47.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use47.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use47.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use47.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use47.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use47.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use47.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use47.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use47.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use47.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use47.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use47.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use47.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use47.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use47.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use47.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use47.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use47.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use47.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[23], style: _use47.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[24], style: _use47.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[25], style: _use47.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[26], style: _use47.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[27], style: _use47.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[28], style: _use47.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[29], style: _use47.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[30], style: _use47.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[31], style: _use47.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[32], style: _use47.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[33], style: _use47.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[34], style: _use47.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[35], style: _use47.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[36], style: _use47.block36styles.block36styles },
                    CHILDS[35]
                );
                styledChilds37 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[37], style: _use47.block37styles.block37styles },
                    CHILDS[36]
                );
                styledChilds38 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[38], style: _use47.block38styles.block38styles },
                    CHILDS[37]
                );
                styledChilds39 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[39], style: _use47.block39styles.block39styles },
                    CHILDS[38]
                );
                styledChilds40 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[40], style: _use47.block40styles.block40styles },
                    CHILDS[39]
                );
                styledChilds41 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[41], style: _use47.block41styles.block41styles },
                    CHILDS[40]
                );
                styledChilds42 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[42], style: _use47.block42styles.block42styles },
                    CHILDS[41]
                );
                styledChilds43 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[43], style: _use47.block43styles.block43styles },
                    CHILDS[42]
                );
                styledChilds44 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[44], style: _use47.block44styles.block44styles },
                    CHILDS[43]
                );
                styledChilds45 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[45], style: _use47.block45styles.block45styles },
                    CHILDS[44]
                );
                styledChilds46 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[46], style: _use47.block46styles.block46styles },
                    CHILDS[45]
                );
                styledChilds47 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[47], style: _use47.block47styles.block47styles },
                    CHILDS[46]
                );
                styledChilds48 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[48], style: _use47.block48styles.block48styles },
                    CHILDS[47]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use47.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36,
                    styledChilds37,
                    styledChilds38,
                    styledChilds39,
                    styledChilds40,
                    styledChilds41,
                    styledChilds42,
                    styledChilds43,
                    styledChilds44,
                    styledChilds45,
                    styledChilds46,
                    styledChilds47,
                    styledChilds48
                )];
            } else if (num === 49) {
                var _use48 = (0, _holderSwitch46_2.default)(49, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use48.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use48.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use48.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use48.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use48.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use48.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use48.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use48.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use48.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use48.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use48.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use48.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use48.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use48.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use48.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use48.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use48.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use48.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use48.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use48.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use48.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use48.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[23], style: _use48.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[24], style: _use48.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[25], style: _use48.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[26], style: _use48.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[27], style: _use48.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[28], style: _use48.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[29], style: _use48.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[30], style: _use48.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[31], style: _use48.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[32], style: _use48.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[33], style: _use48.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[34], style: _use48.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[35], style: _use48.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[36], style: _use48.block36styles.block36styles },
                    CHILDS[35]
                );
                styledChilds37 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[37], style: _use48.block37styles.block37styles },
                    CHILDS[36]
                );
                styledChilds38 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[38], style: _use48.block38styles.block38styles },
                    CHILDS[37]
                );
                styledChilds39 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[39], style: _use48.block39styles.block39styles },
                    CHILDS[38]
                );
                styledChilds40 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[40], style: _use48.block40styles.block40styles },
                    CHILDS[39]
                );
                styledChilds41 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[41], style: _use48.block41styles.block41styles },
                    CHILDS[40]
                );
                styledChilds42 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[42], style: _use48.block42styles.block42styles },
                    CHILDS[41]
                );
                styledChilds43 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[43], style: _use48.block43styles.block43styles },
                    CHILDS[42]
                );
                styledChilds44 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[44], style: _use48.block44styles.block44styles },
                    CHILDS[43]
                );
                styledChilds45 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[45], style: _use48.block45styles.block45styles },
                    CHILDS[44]
                );
                styledChilds46 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[46], style: _use48.block46styles.block46styles },
                    CHILDS[45]
                );
                styledChilds47 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[47], style: _use48.block47styles.block47styles },
                    CHILDS[46]
                );
                styledChilds48 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[48], style: _use48.block48styles.block48styles },
                    CHILDS[47]
                );
                styledChilds49 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[49], style: _use48.block49styles.block49styles },
                    CHILDS[48]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use48.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36,
                    styledChilds37,
                    styledChilds38,
                    styledChilds39,
                    styledChilds40,
                    styledChilds41,
                    styledChilds42,
                    styledChilds43,
                    styledChilds44,
                    styledChilds45,
                    styledChilds46,
                    styledChilds47,
                    styledChilds48,
                    styledChilds49
                )];
            } else if (num === 50) {
                var _use49 = (0, _holderSwitch46_2.default)(50, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[1], style: _use49.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[2], style: _use49.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[3], style: _use49.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[4], style: _use49.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[5], style: _use49.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[6], style: _use49.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[7], style: _use49.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[8], style: _use49.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[9], style: _use49.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[10], style: _use49.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[11], style: _use49.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[12], style: _use49.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[13], style: _use49.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[14], style: _use49.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[15], style: _use49.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[16], style: _use49.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[17], style: _use49.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[18], style: _use49.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[19], style: _use49.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[20], style: _use49.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[21], style: _use49.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[22], style: _use49.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[23], style: _use49.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[24], style: _use49.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[25], style: _use49.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[26], style: _use49.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[27], style: _use49.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[28], style: _use49.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[29], style: _use49.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[30], style: _use49.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[31], style: _use49.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[32], style: _use49.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[33], style: _use49.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[34], style: _use49.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[35], style: _use49.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[36], style: _use49.block36styles.block36styles },
                    CHILDS[35]
                );
                styledChilds37 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[37], style: _use49.block37styles.block37styles },
                    CHILDS[36]
                );
                styledChilds38 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[38], style: _use49.block38styles.block38styles },
                    CHILDS[37]
                );
                styledChilds39 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[39], style: _use49.block39styles.block39styles },
                    CHILDS[38]
                );
                styledChilds40 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[40], style: _use49.block40styles.block40styles },
                    CHILDS[39]
                );
                styledChilds41 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[41], style: _use49.block41styles.block41styles },
                    CHILDS[40]
                );
                styledChilds42 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[42], style: _use49.block42styles.block42styles },
                    CHILDS[41]
                );
                styledChilds43 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[43], style: _use49.block43styles.block43styles },
                    CHILDS[42]
                );
                styledChilds44 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[44], style: _use49.block44styles.block44styles },
                    CHILDS[43]
                );
                styledChilds45 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[45], style: _use49.block45styles.block45styles },
                    CHILDS[44]
                );
                styledChilds46 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[46], style: _use49.block46styles.block46styles },
                    CHILDS[45]
                );
                styledChilds47 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[47], style: _use49.block47styles.block47styles },
                    CHILDS[46]
                );
                styledChilds48 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[48], style: _use49.block48styles.block48styles },
                    CHILDS[47]
                );
                styledChilds49 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[49], style: _use49.block49styles.block49styles },
                    CHILDS[48]
                );
                styledChilds50 = _react2.default.createElement(
                    'div',
                    { key: tempkeys[50], style: _use49.block50styles.block50styles },
                    CHILDS[49]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: tempkeys[0], style: _use49.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36,
                    styledChilds37,
                    styledChilds38,
                    styledChilds39,
                    styledChilds40,
                    styledChilds41,
                    styledChilds42,
                    styledChilds43,
                    styledChilds44,
                    styledChilds45,
                    styledChilds46,
                    styledChilds47,
                    styledChilds48,
                    styledChilds49,
                    styledChilds50
                )];
            } else {
                styledHolder = '';
            }
            return this.setState({ childs: styledHolder, keys: tempkeys });
        }
        //below is not done and will most likely not render correctly

    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var props = newProps;
            var state = this.state;
            var styledHolder = void 0,
                styledChilds1 = void 0,
                styledChilds2 = void 0,
                styledChilds3 = void 0,
                styledChilds4 = void 0,
                styledChilds5 = void 0,
                styledChilds6 = void 0,
                styledChilds7 = void 0,
                styledChilds8 = void 0,
                styledChilds9 = void 0,
                styledChilds10 = void 0,
                styledChilds11 = void 0,
                styledChilds12 = void 0,
                styledChilds13 = void 0,
                styledChilds14 = void 0,
                styledChilds15 = void 0,
                styledChilds16 = void 0,
                styledChilds17 = void 0,
                styledChilds18 = void 0,
                styledChilds19 = void 0,
                styledChilds20 = void 0,
                styledChilds21 = void 0,
                styledChilds22 = void 0,
                styledChilds23 = void 0,
                styledChilds24 = void 0,
                styledChilds25 = void 0,
                styledChilds26 = void 0,
                styledChilds27 = void 0,
                styledChilds28 = void 0,
                styledChilds29 = void 0,
                styledChilds30 = void 0,
                styledChilds31 = void 0,
                styledChilds32 = void 0,
                styledChilds33 = void 0,
                styledChilds34 = void 0,
                styledChilds35 = void 0,
                styledChilds36 = void 0,
                styledChilds37 = void 0,
                styledChilds38 = void 0,
                styledChilds39 = void 0,
                styledChilds40 = void 0,
                styledChilds41 = void 0,
                styledChilds42 = void 0,
                styledChilds43 = void 0,
                styledChilds44 = void 0,
                styledChilds45 = void 0,
                styledChilds46 = void 0,
                styledChilds47 = void 0,
                styledChilds48 = void 0,
                styledChilds49 = void 0,
                styledChilds50 = '';
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            var num = CHILDS.length;

            if (num === 1) {
                var use = (0, _holderSwitch0_2.default)(1, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: use.block1styles.block1styles, className: this.state.className, id: this.state.id },
                    CHILDS[0]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: this.state.keys[0], style: use.holderstyles.holderstyles },
                    styledChilds1
                )];
            } else if (num === 2) {
                var _use50 = (0, _holderSwitch0_2.default)(2, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use50.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use50.block2styles.block2styles },
                    CHILDS[1]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: this.state.keys[0], style: _use50.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2
                )];
            } else if (num === 3) {
                var _use51 = (0, _holderSwitch0_2.default)(3, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use51.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use51.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use51.block3styles.block3styles },
                    CHILDS[2]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: this.state.keys[0], style: _use51.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3
                )];
            } else if (num === 4) {
                var _use52 = (0, _holderSwitch0_2.default)(4, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use52.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use52.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use52.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use52.block4styles.block4styles },
                    CHILDS[3]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: this.state.keys[0], style: _use52.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4
                )];
            } else if (num === 5) {
                var _use53 = (0, _holderSwitch0_2.default)(5, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use53.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use53.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use53.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use53.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use53.block5styles.block5styles },
                    CHILDS[4]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: this.state.keys[0], style: _use53.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5
                )];
            } else if (num === 6) {
                var _use54 = (0, _holderSwitch6_2.default)(6, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use54.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use54.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use54.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use54.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use54.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use54.block6styles.block6styles },
                    CHILDS[5]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: this.state.keys[0], style: _use54.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6
                )];
            } else if (num === 7) {
                var _use55 = (0, _holderSwitch6_2.default)(7, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use55.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use55.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use55.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use55.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use55.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use55.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use55.block7styles.block7styles },
                    CHILDS[6]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: this.state.keys[0], style: _use55.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7
                )];
            } else if (num === 8) {
                var _use56 = (0, _holderSwitch6_2.default)(8, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use56.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use56.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use56.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use56.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use56.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use56.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use56.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use56.block8styles.block8styles },
                    CHILDS[7]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: this.state.keys[0], style: _use56.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8
                )];
            } else if (num === 9) {
                var _use57 = (0, _holderSwitch6_2.default)(9, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use57.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use57.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use57.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use57.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use57.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use57.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use57.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use57.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use57.block9styles.block9styles },
                    CHILDS[8]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: this.state.keys[0], style: _use57.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9
                )];
            } else if (num === 10) {
                var _use58 = (0, _holderSwitch6_2.default)(10, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use58.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use58.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use58.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use58.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use58.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use58.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use58.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use58.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use58.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use58.block10styles.block10styles },
                    CHILDS[9]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: this.state.keys[0], style: _use58.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10
                )];
            } else if (num === 11) {
                var _use59 = (0, _holderSwitch11_2.default)(11, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use59.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use59.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use59.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use59.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use59.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use59.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use59.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use59.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use59.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use59.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use59.block11styles.block11styles },
                    CHILDS[10]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: this.state.keys[0], style: _use59.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11
                )];
            } else if (num === 12) {
                var _use60 = (0, _holderSwitch11_2.default)(12, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use60.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use60.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use60.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use60.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use60.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use60.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use60.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use60.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use60.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use60.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use60.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use60.block12styles.block12styles },
                    CHILDS[11]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: this.state.keys[0], style: _use60.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12
                )];
            } else if (num === 13) {
                var _use61 = (0, _holderSwitch11_2.default)(13, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use61.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use61.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use61.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use61.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use61.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use61.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use61.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use61.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use61.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use61.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use61.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use61.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use61.block13styles.block13styles },
                    CHILDS[12]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: this.state.keys[0], style: _use61.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13
                )];
            } else if (num === 14) {
                var _use62 = (0, _holderSwitch11_2.default)(14, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use62.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use62.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use62.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use62.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use62.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use62.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use62.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use62.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use62.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use62.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use62.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use62.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use62.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use62.block14styles.block14styles },
                    CHILDS[13]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: this.state.keys[0], style: _use62.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14
                )];
            } else if (num === 15) {
                var _use63 = (0, _holderSwitch11_2.default)(15, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use63.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use63.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use63.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use63.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use63.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use63.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use63.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use63.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use63.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use63.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use63.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use63.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use63.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use63.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use63.block15styles.block15styles },
                    CHILDS[14]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: this.state.keys[0], style: _use63.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15
                )];
            } else if (num === 16) {
                var _use64 = (0, _holderSwitch16_2.default)(16, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use64.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use64.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use64.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use64.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use64.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use64.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use64.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use64.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use64.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use64.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use64.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use64.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use64.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use64.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use64.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use64.block16styles.block16styles },
                    CHILDS[15]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: this.state.keys[0], style: _use64.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16
                )];
            } else if (num === 17) {
                var _use65 = (0, _holderSwitch16_2.default)(17, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use65.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use65.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use65.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use65.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use65.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use65.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use65.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use65.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use65.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use65.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use65.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use65.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use65.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use65.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use65.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use65.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use65.block17styles.block17styles },
                    CHILDS[16]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: this.state.keys[0], style: _use65.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17
                )];
            } else if (num === 18) {
                var _use66 = (0, _holderSwitch16_2.default)(18, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use66.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use66.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use66.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use66.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use66.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use66.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use66.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use66.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use66.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use66.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use66.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use66.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use66.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use66.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use66.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use66.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use66.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use66.block18styles.block18styles },
                    CHILDS[17]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: this.state.keys[0], style: _use66.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18
                )];
            } else if (num === 19) {
                var _use67 = (0, _holderSwitch16_2.default)(19, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use67.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use67.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use67.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use67.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use67.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use67.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use67.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use67.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use67.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use67.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use67.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use67.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use67.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use67.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use67.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use67.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use67.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use67.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use67.block19styles.block19styles },
                    CHILDS[18]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: this.state.keys[0], style: _use67.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19
                )];
            } else if (num === 20) {
                var _use68 = (0, _holderSwitch16_2.default)(20, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use68.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use68.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use68.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use68.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use68.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use68.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use68.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use68.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use68.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use68.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use68.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use68.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use68.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use68.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use68.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use68.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use68.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use68.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use68.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use68.block20styles.block20styles },
                    CHILDS[19]
                );
                styledHolder = [_react2.default.createElement(
                    'section',
                    { key: this.state.keys[0], style: _use68.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20
                )];
            } else if (num === 21) {
                var _use69 = (0, _holderSwitch21_2.default)(21, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use69.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use69.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use69.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use69.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use69.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use69.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use69.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use69.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use69.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use69.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use69.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use69.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use69.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use69.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use69.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use69.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use69.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use69.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use69.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use69.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use69.block21styles.block21styles },
                    CHILDS[20]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use69.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21
                )];
            } else if (num === 22) {
                var _use70 = (0, _holderSwitch21_2.default)(22, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use70.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use70.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use70.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use70.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use70.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use70.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use70.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use70.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use70.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use70.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use70.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use70.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use70.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use70.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use70.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use70.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use70.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use70.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use70.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use70.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use70.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use70.block22styles.block22styles },
                    CHILDS[21]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use70.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22
                )];
            } else if (num === 23) {
                var _use71 = (0, _holderSwitch21_2.default)(23, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use71.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use71.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use71.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use71.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use71.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use71.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use71.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use71.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use71.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use71.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use71.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use71.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use71.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use71.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use71.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use71.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use71.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use71.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use71.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use71.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use71.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use71.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[23], style: _use71.block23styles.block23styles },
                    CHILDS[22]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use71.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23
                )];
            } else if (num === 24) {
                var _use72 = (0, _holderSwitch21_2.default)(24, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use72.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use72.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use72.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use72.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use72.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use72.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use72.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use72.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use72.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use72.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use72.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use72.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use72.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use72.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use72.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use72.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use72.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use72.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use72.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use72.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use72.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use72.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[23], style: _use72.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[24], style: _use72.block24styles.block24styles },
                    CHILDS[23]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use72.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24
                )];
            } else if (num === 25) {
                var _use73 = (0, _holderSwitch21_2.default)(25, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use73.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use73.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use73.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use73.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use73.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use73.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use73.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use73.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use73.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use73.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use73.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use73.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use73.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use73.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use73.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use73.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use73.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use73.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use73.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use73.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use73.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use73.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[23], style: _use73.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[24], style: _use73.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[25], style: _use73.block25styles.block25styles },
                    CHILDS[24]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use73.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25
                )];
            } else if (num === 26) {
                var _use74 = (0, _holderSwitch26_2.default)(26, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use74.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use74.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use74.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use74.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use74.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use74.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use74.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use74.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use74.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use74.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use74.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use74.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use74.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use74.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use74.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use74.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use74.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use74.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use74.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use74.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use74.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use74.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[23], style: _use74.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[24], style: _use74.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[25], style: _use74.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[26], style: _use74.block26styles.block26styles },
                    CHILDS[25]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use74.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26
                )];
            } else if (num === 27) {
                var _use75 = (0, _holderSwitch26_2.default)(27, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use75.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use75.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use75.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use75.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use75.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use75.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use75.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use75.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use75.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use75.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use75.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use75.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use75.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use75.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use75.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use75.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use75.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use75.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use75.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use75.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use75.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use75.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[23], style: _use75.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[24], style: _use75.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[25], style: _use75.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[26], style: _use75.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[27], style: _use75.block27styles.block27styles },
                    CHILDS[26]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use75.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27
                )];
            } else if (num === 28) {
                var _use76 = (0, _holderSwitch26_2.default)(28, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use76.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use76.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use76.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use76.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use76.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use76.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use76.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use76.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use76.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use76.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use76.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use76.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use76.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use76.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use76.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use76.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use76.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use76.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use76.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use76.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use76.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use76.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[23], style: _use76.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[24], style: _use76.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[25], style: _use76.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[26], style: _use76.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[27], style: _use76.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[28], style: _use76.block28styles.block28styles },
                    CHILDS[27]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use76.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    '}'
                )];
            } else if (num === 29) {
                var _use77 = (0, _holderSwitch26_2.default)(29, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use77.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use77.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use77.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use77.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use77.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use77.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use77.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use77.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use77.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use77.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use77.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use77.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use77.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use77.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use77.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use77.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use77.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use77.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use77.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use77.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use77.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use77.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[23], style: _use77.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[24], style: _use77.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[25], style: _use77.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[26], style: _use77.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[27], style: _use77.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[28], style: _use77.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[29], style: _use77.block29styles.block29styles },
                    CHILDS[28]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use77.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29
                )];
            } else if (num === 30) {
                var _use78 = (0, _holderSwitch26_2.default)(30, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use78.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use78.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use78.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use78.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use78.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use78.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use78.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use78.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use78.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use78.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use78.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use78.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use78.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use78.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use78.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use78.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use78.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use78.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use78.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use78.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use78.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use78.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[23], style: _use78.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[24], style: _use78.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[25], style: _use78.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[26], style: _use78.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[27], style: _use78.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[28], style: _use78.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[29], style: _use78.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[30], style: _use78.block30styles.block30styles },
                    CHILDS[29]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use78.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30
                )];
            } else if (num === 31) {
                var _use79 = (0, _holderSwitch31_2.default)(31, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use79.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use79.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use79.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use79.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use79.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use79.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use79.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use79.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use79.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use79.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use79.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use79.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use79.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use79.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use79.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use79.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use79.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use79.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use79.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use79.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use79.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use79.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[23], style: _use79.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[24], style: _use79.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[25], style: _use79.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[26], style: _use79.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[27], style: _use79.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[28], style: _use79.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[29], style: _use79.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[30], style: _use79.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[31], style: _use79.block31styles.block31styles },
                    CHILDS[30]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use79.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31
                )];
            } else if (num === 32) {
                var _use80 = (0, _holderSwitch31_2.default)(32, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use80.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use80.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use80.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use80.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use80.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use80.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use80.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use80.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use80.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use80.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use80.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use80.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use80.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use80.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use80.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use80.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use80.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use80.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use80.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use80.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use80.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use80.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[23], style: _use80.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[24], style: _use80.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[25], style: _use80.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[26], style: _use80.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[27], style: _use80.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[28], style: _use80.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[29], style: _use80.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[30], style: _use80.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[31], style: _use80.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[32], style: _use80.block32styles.block32styles },
                    CHILDS[31]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use80.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32
                )];
            } else if (num === 33) {
                var _use81 = (0, _holderSwitch31_2.default)(33, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use81.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use81.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use81.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use81.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use81.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use81.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use81.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use81.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use81.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use81.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use81.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use81.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use81.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use81.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use81.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use81.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use81.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use81.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use81.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use81.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use81.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use81.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[23], style: _use81.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[24], style: _use81.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[25], style: _use81.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[26], style: _use81.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[27], style: _use81.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[28], style: _use81.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[29], style: _use81.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[30], style: _use81.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[31], style: _use81.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[32], style: _use81.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[33], style: _use81.block33styles.block33styles },
                    CHILDS[32]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use81.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33
                )];
            } else if (num === 34) {
                var _use82 = (0, _holderSwitch31_2.default)(34, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use82.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use82.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use82.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use82.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use82.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use82.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use82.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use82.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use82.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use82.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use82.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use82.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use82.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use82.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use82.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use82.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use82.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use82.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use82.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use82.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use82.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use82.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[23], style: _use82.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[24], style: _use82.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[25], style: _use82.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[26], style: _use82.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[27], style: _use82.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[28], style: _use82.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[29], style: _use82.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[30], style: _use82.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[31], style: _use82.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[32], style: _use82.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[33], style: _use82.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[34], style: _use82.block34styles.block34styles },
                    CHILDS[33]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use82.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34
                )];
            } else if (num === 35) {
                var _use83 = (0, _holderSwitch31_2.default)(35, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use83.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use83.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use83.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use83.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use83.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use83.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use83.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use83.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use83.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use83.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use83.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use83.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use83.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use83.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use83.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use83.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use83.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use83.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use83.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use83.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use83.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use83.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[23], style: _use83.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[24], style: _use83.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[25], style: _use83.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[26], style: _use83.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[27], style: _use83.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[28], style: _use83.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[29], style: _use83.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[30], style: _use83.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[31], style: _use83.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[32], style: _use83.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[33], style: _use83.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[34], style: _use83.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[35], style: _use83.block35styles.block35styles },
                    CHILDS[34]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use83.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35
                )];
            } else if (num === 36) {
                var _use84 = (0, _holderSwitch36_2.default)(36, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use84.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use84.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use84.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use84.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use84.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use84.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use84.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use84.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use84.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use84.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use84.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use84.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use84.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use84.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use84.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use84.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use84.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use84.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use84.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use84.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use84.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use84.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[23], style: _use84.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[24], style: _use84.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[25], style: _use84.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[26], style: _use84.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[27], style: _use84.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[28], style: _use84.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[29], style: _use84.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[30], style: _use84.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[31], style: _use84.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[32], style: _use84.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[33], style: _use84.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[34], style: _use84.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[35], style: _use84.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[36], style: _use84.block36styles.block36styles },
                    CHILDS[35]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use84.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36
                )];
            } else if (num === 37) {
                var _use85 = (0, _holderSwitch36_2.default)(37, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use85.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use85.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use85.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use85.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use85.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use85.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use85.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use85.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use85.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use85.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use85.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use85.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use85.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use85.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use85.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use85.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use85.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use85.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use85.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use85.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use85.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use85.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[23], style: _use85.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[24], style: _use85.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[25], style: _use85.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[26], style: _use85.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[27], style: _use85.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[28], style: _use85.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[29], style: _use85.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[30], style: _use85.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[31], style: _use85.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[32], style: _use85.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[33], style: _use85.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[34], style: _use85.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[35], style: _use85.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[36], style: _use85.block36styles.block36styles },
                    CHILDS[35]
                );
                styledChilds37 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[37], style: _use85.block37styles.block37styles },
                    CHILDS[36]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use85.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36,
                    styledChilds37
                )];
            } else if (num === 38) {
                var _use86 = (0, _holderSwitch36_2.default)(38, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use86.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use86.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use86.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use86.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use86.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use86.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use86.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use86.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use86.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use86.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use86.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use86.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use86.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use86.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use86.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use86.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use86.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use86.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use86.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use86.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use86.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use86.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[23], style: _use86.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[24], style: _use86.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[25], style: _use86.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[26], style: _use86.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[27], style: _use86.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[28], style: _use86.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[29], style: _use86.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[30], style: _use86.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[31], style: _use86.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[32], style: _use86.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[33], style: _use86.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[34], style: _use86.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[35], style: _use86.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[36], style: _use86.block36styles.block36styles },
                    CHILDS[35]
                );
                styledChilds37 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[37], style: _use86.block37styles.block37styles },
                    CHILDS[36]
                );
                styledChilds38 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[38], style: _use86.block38styles.block38styles },
                    CHILDS[37]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use86.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36,
                    styledChilds37,
                    styledChilds38
                )];
            } else if (num === 39) {
                var _use87 = (0, _holderSwitch36_2.default)(39, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use87.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use87.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use87.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use87.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use87.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use87.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use87.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use87.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use87.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use87.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use87.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use87.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use87.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use87.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use87.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use87.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use87.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use87.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use87.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use87.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use87.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use87.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[23], style: _use87.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[24], style: _use87.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[25], style: _use87.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[26], style: _use87.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[27], style: _use87.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[28], style: _use87.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[29], style: _use87.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[30], style: _use87.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[31], style: _use87.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[32], style: _use87.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[33], style: _use87.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[34], style: _use87.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[35], style: _use87.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[36], style: _use87.block36styles.block36styles },
                    CHILDS[35]
                );
                styledChilds37 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[37], style: _use87.block37styles.block37styles },
                    CHILDS[36]
                );
                styledChilds38 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[38], style: _use87.block38styles.block38styles },
                    CHILDS[37]
                );
                styledChilds39 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[39], style: _use87.block39styles.block39styles },
                    CHILDS[38]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use87.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36,
                    styledChilds37,
                    styledChilds38,
                    styledChilds39
                )];
            } else if (num === 40) {
                var _use88 = (0, _holderSwitch36_2.default)(40, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use88.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use88.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use88.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use88.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use88.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use88.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use88.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use88.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use88.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use88.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use88.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use88.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use88.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use88.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use88.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use88.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use88.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use88.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use88.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use88.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use88.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use88.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[23], style: _use88.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[24], style: _use88.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[25], style: _use88.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[26], style: _use88.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[27], style: _use88.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[28], style: _use88.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[29], style: _use88.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[30], style: _use88.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[31], style: _use88.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[32], style: _use88.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[33], style: _use88.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[34], style: _use88.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[35], style: _use88.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[36], style: _use88.block36styles.block36styles },
                    CHILDS[35]
                );
                styledChilds37 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[37], style: _use88.block37styles.block37styles },
                    CHILDS[36]
                );
                styledChilds38 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[38], style: _use88.block38styles.block38styles },
                    CHILDS[37]
                );
                styledChilds39 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[39], style: _use88.block39styles.block39styles },
                    CHILDS[38]
                );
                styledChilds40 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[40], style: _use88.block40styles.block40styles },
                    CHILDS[39]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use88.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36,
                    styledChilds37,
                    styledChilds38,
                    styledChilds39,
                    styledChilds40
                )];
            } else if (num === 41) {
                var _use89 = (0, _holderSwitch41_2.default)(41, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use89.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use89.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use89.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use89.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use89.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use89.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use89.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use89.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use89.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use89.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use89.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use89.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use89.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use89.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use89.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use89.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use89.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use89.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use89.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use89.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use89.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use89.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[23], style: _use89.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[24], style: _use89.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[25], style: _use89.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[26], style: _use89.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[27], style: _use89.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[28], style: _use89.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[29], style: _use89.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[30], style: _use89.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[31], style: _use89.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[32], style: _use89.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[33], style: _use89.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[34], style: _use89.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[35], style: _use89.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[36], style: _use89.block36styles.block36styles },
                    CHILDS[35]
                );
                styledChilds37 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[37], style: _use89.block37styles.block37styles },
                    CHILDS[36]
                );
                styledChilds38 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[38], style: _use89.block38styles.block38styles },
                    CHILDS[37]
                );
                styledChilds39 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[39], style: _use89.block39styles.block39styles },
                    CHILDS[38]
                );
                styledChilds40 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[40], style: _use89.block40styles.block40styles },
                    CHILDS[39]
                );
                styledChilds41 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[41], style: _use89.block41styles.block41styles },
                    CHILDS[40]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use89.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36,
                    styledChilds37,
                    styledChilds38,
                    styledChilds39,
                    styledChilds40,
                    styledChilds41
                )];
            } else if (num === 42) {
                var _use90 = (0, _holderSwitch41_2.default)(42, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use90.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use90.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use90.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use90.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use90.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use90.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use90.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use90.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use90.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use90.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use90.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use90.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use90.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use90.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use90.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use90.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use90.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use90.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use90.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use90.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use90.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use90.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[23], style: _use90.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[24], style: _use90.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[25], style: _use90.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[26], style: _use90.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[27], style: _use90.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[28], style: _use90.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[29], style: _use90.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[30], style: _use90.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[31], style: _use90.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[32], style: _use90.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[33], style: _use90.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[34], style: _use90.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[35], style: _use90.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[36], style: _use90.block36styles.block36styles },
                    CHILDS[35]
                );
                styledChilds37 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[37], style: _use90.block37styles.block37styles },
                    CHILDS[36]
                );
                styledChilds38 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[38], style: _use90.block38styles.block38styles },
                    CHILDS[37]
                );
                styledChilds39 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[39], style: _use90.block39styles.block39styles },
                    CHILDS[38]
                );
                styledChilds40 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[40], style: _use90.block40styles.block40styles },
                    CHILDS[39]
                );
                styledChilds41 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[41], style: _use90.block41styles.block41styles },
                    CHILDS[40]
                );
                styledChilds42 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[42], style: _use90.block42styles.block42styles },
                    CHILDS[41]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use90.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36,
                    styledChilds37,
                    styledChilds38,
                    styledChilds39,
                    styledChilds40,
                    styledChilds41,
                    styledChilds42
                )];
            } else if (num === 43) {
                var _use91 = (0, _holderSwitch41_2.default)(43, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use91.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use91.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use91.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use91.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use91.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use91.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use91.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use91.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use91.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use91.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use91.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use91.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use91.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use91.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use91.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use91.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use91.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use91.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use91.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use91.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use91.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use91.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[23], style: _use91.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[24], style: _use91.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[25], style: _use91.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[26], style: _use91.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[27], style: _use91.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[28], style: _use91.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[29], style: _use91.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[30], style: _use91.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[31], style: _use91.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[32], style: _use91.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[33], style: _use91.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[34], style: _use91.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[35], style: _use91.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[36], style: _use91.block36styles.block36styles },
                    CHILDS[35]
                );
                styledChilds37 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[37], style: _use91.block37styles.block37styles },
                    CHILDS[36]
                );
                styledChilds38 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[38], style: _use91.block38styles.block38styles },
                    CHILDS[37]
                );
                styledChilds39 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[39], style: _use91.block39styles.block39styles },
                    CHILDS[38]
                );
                styledChilds40 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[40], style: _use91.block40styles.block40styles },
                    CHILDS[39]
                );
                styledChilds41 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[41], style: _use91.block41styles.block41styles },
                    CHILDS[40]
                );
                styledChilds42 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[42], style: _use91.block42styles.block42styles },
                    CHILDS[41]
                );
                styledChilds43 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[43], style: _use91.block43styles.block43styles },
                    CHILDS[42]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use91.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36,
                    styledChilds37,
                    styledChilds38,
                    styledChilds39,
                    styledChilds40,
                    styledChilds41,
                    styledChilds42,
                    styledChilds43
                )];
            } else if (num === 44) {
                var _use92 = (0, _holderSwitch41_2.default)(44, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use92.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use92.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use92.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use92.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use92.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use92.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use92.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use92.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use92.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use92.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use92.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use92.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use92.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use92.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use92.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use92.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use92.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use92.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use92.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use92.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use92.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use92.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[23], style: _use92.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[24], style: _use92.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[25], style: _use92.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[26], style: _use92.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[27], style: _use92.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[28], style: _use92.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[29], style: _use92.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[30], style: _use92.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[231], style: _use92.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[32], style: _use92.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[33], style: _use92.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[34], style: _use92.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[35], style: _use92.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[36], style: _use92.block36styles.block36styles },
                    CHILDS[35]
                );
                styledChilds37 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[37], style: _use92.block37styles.block37styles },
                    CHILDS[36]
                );
                styledChilds38 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[38], style: _use92.block38styles.block38styles },
                    CHILDS[37]
                );
                styledChilds39 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[39], style: _use92.block39styles.block39styles },
                    CHILDS[38]
                );
                styledChilds40 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[40], style: _use92.block40styles.block40styles },
                    CHILDS[39]
                );
                styledChilds41 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[41], style: _use92.block41styles.block41styles },
                    CHILDS[40]
                );
                styledChilds42 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[42], style: _use92.block42styles.block42styles },
                    CHILDS[41]
                );
                styledChilds43 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[43], style: _use92.block43styles.block43styles },
                    CHILDS[42]
                );
                styledChilds44 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[44], style: _use92.block44styles.block44styles },
                    CHILDS[43]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use92.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36,
                    styledChilds37,
                    styledChilds38,
                    styledChilds39,
                    styledChilds40,
                    styledChilds41,
                    styledChilds42,
                    styledChilds43,
                    styledChilds44
                )];
            } else if (num === 45) {
                var _use93 = (0, _holderSwitch41_2.default)(45, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use93.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use93.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use93.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use93.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use93.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use93.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use93.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use93.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use93.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use93.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use93.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use93.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use93.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use93.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use93.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use93.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use93.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use93.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use93.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use93.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use93.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use93.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[23], style: _use93.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[24], style: _use93.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[25], style: _use93.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[26], style: _use93.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[27], style: _use93.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[28], style: _use93.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[29], style: _use93.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[30], style: _use93.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[31], style: _use93.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[32], style: _use93.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[33], style: _use93.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[34], style: _use93.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[35], style: _use93.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[36], style: _use93.block36styles.block36styles },
                    CHILDS[35]
                );
                styledChilds37 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[37], style: _use93.block37styles.block37styles },
                    CHILDS[36]
                );
                styledChilds38 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[38], style: _use93.block38styles.block38styles },
                    CHILDS[37]
                );
                styledChilds39 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[39], style: _use93.block39styles.block39styles },
                    CHILDS[38]
                );
                styledChilds40 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[40], style: _use93.block40styles.block40styles },
                    CHILDS[39]
                );
                styledChilds41 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[41], style: _use93.block41styles.block41styles },
                    CHILDS[40]
                );
                styledChilds42 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[42], style: _use93.block42styles.block42styles },
                    CHILDS[41]
                );
                styledChilds43 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[43], style: _use93.block43styles.block43styles },
                    CHILDS[42]
                );
                styledChilds44 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[44], style: _use93.block44styles.block44styles },
                    CHILDS[43]
                );
                styledChilds45 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[45], style: _use93.block45styles.block45styles },
                    CHILDS[44]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use93.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36,
                    styledChilds37,
                    styledChilds38,
                    styledChilds39,
                    styledChilds40,
                    styledChilds41,
                    styledChilds42,
                    styledChilds43,
                    styledChilds44,
                    styledChilds45
                )];
            } else if (num === 46) {
                var _use94 = (0, _holderSwitch46_2.default)(46, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use94.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use94.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use94.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use94.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use94.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use94.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use94.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use94.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use94.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use94.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use94.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use94.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use94.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use94.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use94.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use94.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use94.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use94.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use94.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use94.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use94.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use94.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[23], style: _use94.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[24], style: _use94.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[25], style: _use94.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[26], style: _use94.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[27], style: _use94.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[28], style: _use94.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[29], style: _use94.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[30], style: _use94.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[31], style: _use94.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[32], style: _use94.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[33], style: _use94.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[34], style: _use94.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[35], style: _use94.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[36], style: _use94.block36styles.block36styles },
                    CHILDS[35]
                );
                styledChilds37 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[37], style: _use94.block37styles.block37styles },
                    CHILDS[36]
                );
                styledChilds38 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[38], style: _use94.block38styles.block38styles },
                    CHILDS[37]
                );
                styledChilds39 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[39], style: _use94.block39styles.block39styles },
                    CHILDS[38]
                );
                styledChilds40 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[40], style: _use94.block40styles.block40styles },
                    CHILDS[39]
                );
                styledChilds41 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[41], style: _use94.block41styles.block41styles },
                    CHILDS[40]
                );
                styledChilds42 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[42], style: _use94.block42styles.block42styles },
                    CHILDS[41]
                );
                styledChilds43 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[43], style: _use94.block43styles.block43styles },
                    CHILDS[42]
                );
                styledChilds44 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[44], style: _use94.block44styles.block44styles },
                    CHILDS[43]
                );
                styledChilds45 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[45], style: _use94.block45styles.block45styles },
                    CHILDS[44]
                );
                styledChilds46 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[46], style: _use94.block46styles.block46styles },
                    CHILDS[45]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use94.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36,
                    styledChilds37,
                    styledChilds38,
                    styledChilds39,
                    styledChilds40,
                    styledChilds41,
                    styledChilds42,
                    styledChilds43,
                    styledChilds44,
                    styledChilds45,
                    styledChilds46
                )];
            } else if (num === 47) {
                var _use95 = (0, _holderSwitch46_2.default)(47, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use95.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use95.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use95.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use95.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use95.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use95.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use95.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use95.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use95.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use95.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use95.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use95.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use95.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use95.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use95.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use95.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use95.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use95.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use95.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use95.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use95.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use95.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[23], style: _use95.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[24], style: _use95.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[25], style: _use95.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[26], style: _use95.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[27], style: _use95.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[28], style: _use95.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[29], style: _use95.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[30], style: _use95.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[31], style: _use95.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[32], style: _use95.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[33], style: _use95.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[34], style: _use95.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[35], style: _use95.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[36], style: _use95.block36styles.block36styles },
                    CHILDS[35]
                );
                styledChilds37 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[37], style: _use95.block37styles.block37styles },
                    CHILDS[36]
                );
                styledChilds38 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[38], style: _use95.block38styles.block38styles },
                    CHILDS[37]
                );
                styledChilds39 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[39], style: _use95.block39styles.block39styles },
                    CHILDS[38]
                );
                styledChilds40 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[40], style: _use95.block40styles.block40styles },
                    CHILDS[39]
                );
                styledChilds41 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[41], style: _use95.block41styles.block41styles },
                    CHILDS[40]
                );
                styledChilds42 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[42], style: _use95.block42styles.block42styles },
                    CHILDS[41]
                );
                styledChilds43 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[43], style: _use95.block43styles.block43styles },
                    CHILDS[42]
                );
                styledChilds44 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[44], style: _use95.block44styles.block44styles },
                    CHILDS[43]
                );
                styledChilds45 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[45], style: _use95.block45styles.block45styles },
                    CHILDS[44]
                );
                styledChilds46 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[46], style: _use95.block46styles.block46styles },
                    CHILDS[45]
                );
                styledChilds47 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[47], style: _use95.block47styles.block47styles },
                    CHILDS[46]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use95.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36,
                    styledChilds37,
                    styledChilds38,
                    styledChilds39,
                    styledChilds40,
                    styledChilds41,
                    styledChilds42,
                    styledChilds43,
                    styledChilds44,
                    styledChilds45,
                    styledChilds46,
                    styledChilds47
                )];
            } else if (num === 48) {
                var _use96 = (0, _holderSwitch46_2.default)(48, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use96.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use96.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use96.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use96.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use96.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use96.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use96.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use96.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use96.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use96.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use96.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use96.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use96.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use96.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use96.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use96.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use96.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use96.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use96.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use96.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use96.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use96.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[23], style: _use96.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[24], style: _use96.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[25], style: _use96.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[26], style: _use96.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[27], style: _use96.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[28], style: _use96.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[29], style: _use96.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[30], style: _use96.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[31], style: _use96.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[32], style: _use96.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[33], style: _use96.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[34], style: _use96.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[35], style: _use96.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[36], style: _use96.block36styles.block36styles },
                    CHILDS[35]
                );
                styledChilds37 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[37], style: _use96.block37styles.block37styles },
                    CHILDS[36]
                );
                styledChilds38 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[38], style: _use96.block38styles.block38styles },
                    CHILDS[37]
                );
                styledChilds39 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[39], style: _use96.block39styles.block39styles },
                    CHILDS[38]
                );
                styledChilds40 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[40], style: _use96.block40styles.block40styles },
                    CHILDS[39]
                );
                styledChilds41 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[41], style: _use96.block41styles.block41styles },
                    CHILDS[40]
                );
                styledChilds42 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[42], style: _use96.block42styles.block42styles },
                    CHILDS[41]
                );
                styledChilds43 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[43], style: _use96.block43styles.block43styles },
                    CHILDS[42]
                );
                styledChilds44 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[44], style: _use96.block44styles.block44styles },
                    CHILDS[43]
                );
                styledChilds45 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[45], style: _use96.block45styles.block45styles },
                    CHILDS[44]
                );
                styledChilds46 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[46], style: _use96.block46styles.block46styles },
                    CHILDS[45]
                );
                styledChilds47 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[47], style: _use96.block47styles.block47styles },
                    CHILDS[46]
                );
                styledChilds48 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[48], style: _use96.block48styles.block48styles },
                    CHILDS[47]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use96.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36,
                    styledChilds37,
                    styledChilds38,
                    styledChilds39,
                    styledChilds40,
                    styledChilds41,
                    styledChilds42,
                    styledChilds43,
                    styledChilds44,
                    styledChilds45,
                    styledChilds46,
                    styledChilds47,
                    styledChilds48
                )];
            } else if (num === 49) {
                var _use97 = (0, _holderSwitch46_2.default)(49, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use97.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use97.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use97.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use97.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use97.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use97.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use97.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use97.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use97.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use97.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use97.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use97.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use97.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use97.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use97.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use97.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use97.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use97.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use97.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use97.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use97.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use97.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[23], style: _use97.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[24], style: _use97.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[25], style: _use97.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[26], style: _use97.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[27], style: _use97.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[28], style: _use97.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[29], style: _use97.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[30], style: _use97.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[31], style: _use97.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[32], style: _use97.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[33], style: _use97.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[34], style: _use97.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[35], style: _use97.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[36], style: _use97.block36styles.block36styles },
                    CHILDS[35]
                );
                styledChilds37 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[37], style: _use97.block37styles.block37styles },
                    CHILDS[36]
                );
                styledChilds38 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[38], style: _use97.block38styles.block38styles },
                    CHILDS[37]
                );
                styledChilds39 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[39], style: _use97.block39styles.block39styles },
                    CHILDS[38]
                );
                styledChilds40 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[40], style: _use97.block40styles.block40styles },
                    CHILDS[39]
                );
                styledChilds41 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[41], style: _use97.block41styles.block41styles },
                    CHILDS[40]
                );
                styledChilds42 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[42], style: _use97.block42styles.block42styles },
                    CHILDS[41]
                );
                styledChilds43 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[43], style: _use97.block43styles.block43styles },
                    CHILDS[42]
                );
                styledChilds44 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[44], style: _use97.block44styles.block44styles },
                    CHILDS[43]
                );
                styledChilds45 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[45], style: _use97.block45styles.block45styles },
                    CHILDS[44]
                );
                styledChilds46 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[46], style: _use97.block46styles.block46styles },
                    CHILDS[45]
                );
                styledChilds47 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[47], style: _use97.block47styles.block47styles },
                    CHILDS[46]
                );
                styledChilds48 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[48], style: _use97.block48styles.block48styles },
                    CHILDS[47]
                );
                styledChilds49 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[49], style: _use97.block49styles.block49styles },
                    CHILDS[48]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use97.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36,
                    styledChilds37,
                    styledChilds38,
                    styledChilds39,
                    styledChilds40,
                    styledChilds41,
                    styledChilds42,
                    styledChilds43,
                    styledChilds44,
                    styledChilds45,
                    styledChilds46,
                    styledChilds47,
                    styledChilds48,
                    styledChilds49
                )];
            } else if (num === 50) {
                var _use98 = (0, _holderSwitch46_2.default)(50, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[1], style: _use98.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[2], style: _use98.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[3], style: _use98.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[4], style: _use98.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[5], style: _use98.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[6], style: _use98.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[7], style: _use98.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[8], style: _use98.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[9], style: _use98.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[10], style: _use98.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[11], style: _use98.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[12], style: _use98.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[13], style: _use98.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[14], style: _use98.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[15], style: _use98.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[16], style: _use98.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[17], style: _use98.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[18], style: _use98.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[19], style: _use98.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[20], style: _use98.block20styles.block20styles },
                    CHILDS[19]
                );
                styledChilds21 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[21], style: _use98.block21styles.block21styles },
                    CHILDS[20]
                );
                styledChilds22 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[22], style: _use98.block22styles.block22styles },
                    CHILDS[21]
                );
                styledChilds23 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[23], style: _use98.block23styles.block23styles },
                    CHILDS[22]
                );
                styledChilds24 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[24], style: _use98.block24styles.block24styles },
                    CHILDS[23]
                );
                styledChilds25 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[25], style: _use98.block25styles.block25styles },
                    CHILDS[24]
                );
                styledChilds26 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[26], style: _use98.block26styles.block26styles },
                    CHILDS[25]
                );
                styledChilds27 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[27], style: _use98.block27styles.block27styles },
                    CHILDS[26]
                );
                styledChilds28 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[28], style: _use98.block28styles.block28styles },
                    CHILDS[27]
                );
                styledChilds29 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[29], style: _use98.block29styles.block29styles },
                    CHILDS[28]
                );
                styledChilds30 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[30], style: _use98.block30styles.block30styles },
                    CHILDS[29]
                );
                styledChilds31 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[31], style: _use98.block31styles.block31styles },
                    CHILDS[30]
                );
                styledChilds32 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[32], style: _use98.block32styles.block32styles },
                    CHILDS[31]
                );
                styledChilds33 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[33], style: _use98.block33styles.block33styles },
                    CHILDS[32]
                );
                styledChilds34 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[34], style: _use98.block34styles.block34styles },
                    CHILDS[33]
                );
                styledChilds35 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[35], style: _use98.block35styles.block35styles },
                    CHILDS[34]
                );
                styledChilds36 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[36], style: _use98.block36styles.block36styles },
                    CHILDS[35]
                );
                styledChilds37 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[37], style: _use98.block37styles.block37styles },
                    CHILDS[36]
                );
                styledChilds38 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[38], style: _use98.block38styles.block38styles },
                    CHILDS[37]
                );
                styledChilds39 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[39], style: _use98.block39styles.block39styles },
                    CHILDS[38]
                );
                styledChilds40 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[40], style: _use98.block40styles.block40styles },
                    CHILDS[39]
                );
                styledChilds41 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[41], style: _use98.block41styles.block41styles },
                    CHILDS[40]
                );
                styledChilds42 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[42], style: _use98.block42styles.block42styles },
                    CHILDS[41]
                );
                styledChilds43 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[43], style: _use98.block43styles.block43styles },
                    CHILDS[42]
                );
                styledChilds44 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[44], style: _use98.block44styles.block44styles },
                    CHILDS[43]
                );
                styledChilds45 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[45], style: _use98.block45styles.block45styles },
                    CHILDS[44]
                );
                styledChilds46 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[46], style: _use98.block46styles.block46styles },
                    CHILDS[45]
                );
                styledChilds47 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[47], style: _use98.block47styles.block47styles },
                    CHILDS[46]
                );
                styledChilds48 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[48], style: _use98.block48styles.block48styles },
                    CHILDS[47]
                );
                styledChilds49 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[49], style: _use98.block49styles.block49styles },
                    CHILDS[48]
                );
                styledChilds50 = _react2.default.createElement(
                    'div',
                    { key: this.state.keys[50], style: _use98.block50styles.block50styles },
                    CHILDS[49]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: _use98.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7,
                    styledChilds8,
                    styledChilds9,
                    styledChilds10,
                    styledChilds11,
                    styledChilds12,
                    styledChilds13,
                    styledChilds14,
                    styledChilds15,
                    styledChilds16,
                    styledChilds17,
                    styledChilds18,
                    styledChilds19,
                    styledChilds20,
                    styledChilds21,
                    styledChilds22,
                    styledChilds23,
                    styledChilds24,
                    styledChilds25,
                    styledChilds26,
                    styledChilds27,
                    styledChilds28,
                    styledChilds29,
                    styledChilds30,
                    styledChilds31,
                    styledChilds32,
                    styledChilds33,
                    styledChilds34,
                    styledChilds35,
                    styledChilds36,
                    styledChilds37,
                    styledChilds38,
                    styledChilds39,
                    styledChilds40,
                    styledChilds41,
                    styledChilds42,
                    styledChilds43,
                    styledChilds44,
                    styledChilds45,
                    styledChilds46,
                    styledChilds47,
                    styledChilds48,
                    styledChilds49,
                    styledChilds50
                )];
            } else {
                styledHolder = '';
            }
            return this.setState({ childs: styledHolder });
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

    return Holder;
}(_react2.default.Component);

exports.default = Holder;