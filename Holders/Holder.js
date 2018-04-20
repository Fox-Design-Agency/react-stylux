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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Start of Holder 1 Component */
var Holder = function (_Component) {
    _inherits(Holder, _Component);

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
            id: props.id
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
                styledChilds20 = '';
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            var num = CHILDS.length;
            if (num === 1) {
                var use = (0, _holderSwitch0_2.default)(1, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: use.block1styles.block1styles },
                    CHILDS[0]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: use.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1
                )];
            } else if (num === 2) {
                var _use = (0, _holderSwitch0_2.default)(2, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use.block2styles.block2styles },
                    CHILDS[1]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2
                )];
            } else if (num === 3) {
                var _use2 = (0, _holderSwitch0_2.default)(3, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use2.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use2.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use2.block3styles.block3styles },
                    CHILDS[2]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use2.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3
                )];
            } else if (num === 4) {
                var _use3 = (0, _holderSwitch0_2.default)(4, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use3.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use3.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use3.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use3.block4styles.block4styles },
                    CHILDS[3]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use3.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4
                )];
            } else if (num === 5) {
                var _use4 = (0, _holderSwitch0_2.default)(5, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use4.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use4.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use4.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use4.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use4.block5styles.block5styles },
                    CHILDS[4]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use4.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
                    { key: Math.random(), style: _use5.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use5.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use5.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use5.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use5.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use5.block6styles.block6styles },
                    CHILDS[5]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use5.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
                    { key: Math.random(), style: _use6.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use6.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use6.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use6.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use6.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use6.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use6.block7styles.block7styles },
                    CHILDS[6]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use6.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
                    { key: Math.random(), style: _use7.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use7.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use7.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use7.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use7.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use7.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use7.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use7.block8styles.block8styles },
                    CHILDS[7]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use7.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
                    { key: Math.random(), style: _use8.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use8.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use8.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use8.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use8.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use8.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use8.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use8.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use8.block9styles.block9styles },
                    CHILDS[8]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use8.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
                    { key: Math.random(), style: _use9.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use9.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use9.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use9.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use9.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use9.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use9.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use9.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use9.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use9.block10styles.block10styles },
                    CHILDS[9]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use9.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
                    { key: Math.random(), style: _use10.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use10.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use10.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use10.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use10.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use10.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use10.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use10.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use10.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use10.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use10.block11styles.block11styles },
                    CHILDS[10]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use10.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
                    { key: Math.random(), style: _use11.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use11.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use11.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use11.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use11.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use11.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use11.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use11.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use11.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use11.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use11.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use11.block12styles.block12styles },
                    CHILDS[11]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use11.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
                    { key: Math.random(), style: _use12.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use12.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use12.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use12.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use12.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use12.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use12.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use12.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use12.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use12.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use12.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use12.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use12.block13styles.block13styles },
                    CHILDS[12]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use12.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
                    { key: Math.random(), style: _use13.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use13.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use13.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use13.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use13.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use13.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use13.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use13.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use13.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use13.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use13.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use13.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use13.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use13.block14styles.block14styles },
                    CHILDS[13]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use13.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
                    { key: Math.random(), style: _use14.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use14.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use14.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use14.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use14.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use14.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use14.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use14.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use14.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use14.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use14.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use14.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use14.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use14.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use14.block15styles.block15styles },
                    CHILDS[14]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use14.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
                    { key: Math.random(), style: _use15.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use15.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use15.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use15.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use15.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use15.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use15.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use15.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use15.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use15.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use15.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use15.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use15.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use15.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use15.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use15.block16styles.block16styles },
                    CHILDS[15]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use15.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
                    { key: Math.random(), style: _use16.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use16.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use16.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use16.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use16.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use16.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use16.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use16.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use16.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use16.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use16.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use16.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use16.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use16.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use16.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use16.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use16.block17styles.block17styles },
                    CHILDS[16]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use16.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
                    { key: Math.random(), style: _use17.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use17.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use17.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use17.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use17.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use17.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use17.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use17.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use17.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use17.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use17.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use17.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use17.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use17.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use17.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use17.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use17.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use17.block18styles.block18styles },
                    CHILDS[17]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use17.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
                    { key: Math.random(), style: _use18.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use18.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use18.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use18.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use18.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use18.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use18.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use18.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use18.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use18.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use18.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use18.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use18.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use18.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use18.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use18.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use18.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use18.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use18.block19styles.block19styles },
                    CHILDS[18]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use18.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
                    { key: Math.random(), style: _use19.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use19.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use19.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use19.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use19.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use19.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use19.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use19.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use19.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use19.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use19.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use19.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use19.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use19.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use19.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use19.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use19.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use19.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use19.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use19.block20styles.block20styles },
                    CHILDS[19]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use19.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
            } else {
                styledHolder = '';
            }
            return this.setState({ childs: styledHolder });
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
                styledChilds20 = '';
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            var num = CHILDS.length;
            if (num === 1) {
                var use = (0, _holderSwitch0_2.default)(1, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: use.block1styles.block1styles },
                    CHILDS[0]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: use.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1
                )];
            } else if (num === 2) {
                var _use20 = (0, _holderSwitch0_2.default)(2, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use20.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use20.block2styles.block2styles },
                    CHILDS[1]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use20.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2
                )];
            } else if (num === 3) {
                var _use21 = (0, _holderSwitch0_2.default)(3, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use21.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use21.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use21.block3styles.block3styles },
                    CHILDS[2]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use21.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3
                )];
            } else if (num === 4) {
                var _use22 = (0, _holderSwitch0_2.default)(4, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use22.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use22.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use22.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use22.block4styles.block4styles },
                    CHILDS[3]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use22.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4
                )];
            } else if (num === 5) {
                var _use23 = (0, _holderSwitch0_2.default)(5, props, state);

                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use23.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use23.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use23.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use23.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use23.block5styles.block5styles },
                    CHILDS[4]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use23.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5
                )];
            } else if (num === 6) {
                var _use24 = (0, _holderSwitch6_2.default)(6, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use24.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use24.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use24.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use24.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use24.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use24.block6styles.block6styles },
                    CHILDS[5]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use24.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6
                )];
            } else if (num === 7) {
                var _use25 = (0, _holderSwitch6_2.default)(7, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use25.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use25.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use25.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use25.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use25.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use25.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use25.block7styles.block7styles },
                    CHILDS[6]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use25.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
                    styledChilds1,
                    styledChilds2,
                    styledChilds3,
                    styledChilds4,
                    styledChilds5,
                    styledChilds6,
                    styledChilds7
                )];
            } else if (num === 8) {
                var _use26 = (0, _holderSwitch6_2.default)(8, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use26.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use26.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use26.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use26.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use26.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use26.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use26.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use26.block8styles.block8styles },
                    CHILDS[7]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use26.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
                var _use27 = (0, _holderSwitch6_2.default)(9, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use27.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use27.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use27.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use27.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use27.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use27.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use27.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use27.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use27.block9styles.block9styles },
                    CHILDS[8]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use27.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
                var _use28 = (0, _holderSwitch6_2.default)(10, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use28.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use28.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use28.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use28.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use28.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use28.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use28.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use28.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use28.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use28.block10styles.block10styles },
                    CHILDS[9]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use28.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
                var _use29 = (0, _holderSwitch11_2.default)(11, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use29.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use29.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use29.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use29.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use29.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use29.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use29.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use29.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use29.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use29.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use29.block11styles.block11styles },
                    CHILDS[10]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use29.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
                var _use30 = (0, _holderSwitch11_2.default)(12, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use30.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use30.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use30.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use30.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use30.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use30.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use30.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use30.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use30.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use30.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use30.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use30.block12styles.block12styles },
                    CHILDS[11]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use30.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
                var _use31 = (0, _holderSwitch11_2.default)(13, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use31.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use31.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use31.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use31.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use31.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use31.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use31.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use31.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use31.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use31.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use31.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use31.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use31.block13styles.block13styles },
                    CHILDS[12]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use31.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
                var _use32 = (0, _holderSwitch11_2.default)(14, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use32.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use32.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use32.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use32.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use32.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use32.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use32.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use32.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use32.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use32.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use32.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use32.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use32.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use32.block14styles.block14styles },
                    CHILDS[13]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use32.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
                var _use33 = (0, _holderSwitch11_2.default)(15, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use33.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use33.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use33.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use33.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use33.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use33.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use33.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use33.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use33.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use33.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use33.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use33.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use33.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use33.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use33.block15styles.block15styles },
                    CHILDS[14]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use33.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
                var _use34 = (0, _holderSwitch16_2.default)(16, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use34.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use34.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use34.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use34.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use34.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use34.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use34.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use34.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use34.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use34.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use34.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use34.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use34.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use34.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use34.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use34.block16styles.block16styles },
                    CHILDS[15]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use34.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
                var _use35 = (0, _holderSwitch16_2.default)(17, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use35.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use35.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use35.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use35.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use35.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use35.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use35.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use35.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use35.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use35.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use35.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use35.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use35.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use35.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use35.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use35.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use35.block17styles.block17styles },
                    CHILDS[16]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use35.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
                var _use36 = (0, _holderSwitch16_2.default)(18, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use36.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use36.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use36.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use36.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use36.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use36.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use36.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use36.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use36.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use36.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use36.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use36.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use36.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use36.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use36.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use36.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use36.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use36.block18styles.block18styles },
                    CHILDS[17]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use36.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
                var _use37 = (0, _holderSwitch16_2.default)(19, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use37.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use37.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use37.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use37.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use37.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use37.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use37.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use37.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use37.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use37.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use37.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use37.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use37.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use37.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use37.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use37.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use37.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use37.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use37.block19styles.block19styles },
                    CHILDS[18]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use37.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
                var _use38 = (0, _holderSwitch16_2.default)(20, props, state);
                styledChilds1 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use38.block1styles.block1styles },
                    CHILDS[0]
                );
                styledChilds2 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use38.block2styles.block2styles },
                    CHILDS[1]
                );
                styledChilds3 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use38.block3styles.block3styles },
                    CHILDS[2]
                );
                styledChilds4 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use38.block4styles.block4styles },
                    CHILDS[3]
                );
                styledChilds5 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use38.block5styles.block5styles },
                    CHILDS[4]
                );
                styledChilds6 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use38.block6styles.block6styles },
                    CHILDS[5]
                );
                styledChilds7 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use38.block7styles.block7styles },
                    CHILDS[6]
                );
                styledChilds8 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use38.block8styles.block8styles },
                    CHILDS[7]
                );
                styledChilds9 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use38.block9styles.block9styles },
                    CHILDS[8]
                );
                styledChilds10 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use38.block10styles.block10styles },
                    CHILDS[9]
                );
                styledChilds11 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use38.block11styles.block11styles },
                    CHILDS[10]
                );
                styledChilds12 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use38.block12styles.block12styles },
                    CHILDS[11]
                );
                styledChilds13 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use38.block13styles.block13styles },
                    CHILDS[12]
                );
                styledChilds14 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use38.block14styles.block14styles },
                    CHILDS[13]
                );
                styledChilds15 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use38.block15styles.block15styles },
                    CHILDS[14]
                );
                styledChilds16 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use38.block16styles.block16styles },
                    CHILDS[15]
                );
                styledChilds17 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use38.block17styles.block17styles },
                    CHILDS[16]
                );
                styledChilds18 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use38.block18styles.block18styles },
                    CHILDS[17]
                );
                styledChilds19 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use38.block19styles.block19styles },
                    CHILDS[18]
                );
                styledChilds20 = _react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use38.block20styles.block20styles },
                    CHILDS[19]
                );
                styledHolder = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: _use38.holderstyles.holderstyles, className: this.state.className, id: this.state.id },
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
            } else {
                styledHolder = '';
            }
            return this.setState({ childs: styledHolder });
        }
    }, {
        key: 'render',
        value: function render() {
            var HOLDING = {
                width: '100%'
            };
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.state.childs
            );
        }
    }]);

    return Holder;
}(_react.Component);
/* End of Holder Component */


exports.default = Holder;