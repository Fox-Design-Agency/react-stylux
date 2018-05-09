'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/reset.css');

require('../css/animations.css');

var _subnavbarFunctions = require('./navbarFunctions/subnavbarFunctions');

var _subnavbarFunctions2 = _interopRequireDefault(_subnavbarFunctions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Subnavbar = function (_React$Component) {
    _inherits(Subnavbar, _React$Component);

    function Subnavbar(props) {
        _classCallCheck(this, Subnavbar);

        var _this = _possibleConstructorReturn(this, (Subnavbar.__proto__ || Object.getPrototypeOf(Subnavbar)).call(this, props));

        _this.state = {
            fontFamily: props.font || 'serif',
            totalWidth: props.totalWidth || '100%',
            navBarWidth: props.navbarWidth || '50%',
            totalHeight: props.height || '30px',
            display: props.display || 'flex',
            direction: props.direction || 'row',
            alignItems: props.align || 'flex-start',
            columnAlign: props.columnAlign || 'center',
            //margin: props.margin || '0',
            padding: props.padding || '0',
            itemSpaceing: props.itemSpacing || '0',
            mainBackground: props.mainBackground || 'black',
            itemBackground: props.itemBackground || 'inherit',
            color: props.color || 'whitesmoke',
            fontSize: props.fontSize || '0.9em',
            fontWeight: props.fontWeight || '100',
            fontVariant: props.fontVariant || 'none',
            navid: props.navid,
            listid: props.listid,
            itemsid: props.itemsid,
            navClassName: props.navClassName,
            listClassName: props.listClassName,
            itemsClassName: props.itemsClassName,
            childs: '',
            smdis: props.smDis || 'none',
            mddis: props.mdDis || 'flex',
            top: props.top || '-1px',
            bottom: props.bottom,
            left: props.left,
            right: props.right,
            position: props.position || "sticky",
            zIndex: props.zIndex || '200',
            styledSubnavbar: '',
            box: props.box,
            keys: ''

        };
        return _this;
    }

    _createClass(Subnavbar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var props = this.props;
            var state = this.state;
            var styledSubnavbar = void 0,
                use = void 0,
                NAVBAR = '';
            var self = this;
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            var tempKeys = [];
            for (var i = 0; i < CHILDS.length; i++) {
                tempKeys.push(tempKeys[i] = Math.random());
            }
            if (this.state.box === "1") {
                var SUBNAVBAR_NAVBAR_LI = StyleSheet.create({
                    subnavbar_navbar_li: {
                        display: 'flex',
                        flex: 1,
                        fontSize: this.state.fontSize,
                        fontWeight: this.state.fontWeight,
                        justifyContent: 'center',
                        margin: this.state.itemSpaceing,
                        background: this.state.itemBackground,
                        fontVariant: this.state.fontVariant
                    },
                    '@media screen and (max-width: 768px)': {
                        subnavbar_navbar_li: {
                            display: this.state.smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        subnavbar_navbar_li: {
                            display: this.state.mddis
                        }
                    }
                });
                NAVBAR = CHILDS.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: i, style: SUBNAVBAR_NAVBAR_LI.subnavbar_navbar_li, id: _this2.state.itemsid, className: _this2.state.itemsClassName },
                        x
                    );
                });
                use = subnavbarFuntion("1", props, state, self);
                styledSubnavbar = [_react2.default.createElement(
                    'nav',
                    { key: tempKeys[0], style: use.SUBNAVBAR.subnavbar, id: this.state.navid, className: 'subnavbar1 socialness ' + this.state.navClassName },
                    _react2.default.createElement(
                        'ul',
                        { style: use.SUBNAVBAR_NAVBAR.subnavbar_navbar, id: this.state.listid, className: 'subnavbar1-navbar ' + this.state.listClassName },
                        NAVBAR
                    )
                )];
            } else {
                var _SUBNAVBAR_NAVBAR_LI = StyleSheet.create({
                    subnavbar_navbar_li: {
                        display: 'flex',
                        flex: 1,
                        fontSize: this.state.fontSize,
                        fontWeight: this.state.fontWeight,
                        justifyContent: 'center',
                        margin: this.state.itemSpaceing,
                        background: this.state.itemBackground,
                        fontVariant: this.state.fontVariant
                    },
                    '@media screen and (max-width: 768px)': {
                        subnavbar_navbar_li: {
                            display: this.state.smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        subnavbar_navbar_li: {
                            display: this.state.mddis
                        }
                    }
                });
                NAVBAR = CHILDS.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: i, style: _SUBNAVBAR_NAVBAR_LI.subnavbar_navbar_li, id: _this2.state.itemsid, className: _this2.state.itemsClassName },
                        x
                    );
                });
                use = subnavbarFuntion("1", props, state, self);
                styledSubnavbar = [_react2.default.createElement(
                    'nav',
                    { key: tempKeys[0], style: use.SUBNAVBAR.subnavbar, id: this.state.navid, className: 'subnavbar1 socialness ' + this.state.navClassName },
                    _react2.default.createElement(
                        'ul',
                        { style: use.SUBNAVBAR_NAVBAR.subnavbar_navbar, id: this.state.listid, className: 'subnavbar1-navbar ' + this.state.listClassName },
                        NAVBAR
                    )
                )];
            }

            this.setState({ childs: NAVBAR, keys: tempKeys, styledSubnavbar: styledSubnavbar });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var _this3 = this;

            var props = newProps;
            var state = this.state;
            var styledSubnavbar = void 0,
                use = void 0,
                NAVBAR = '';
            var self = this;
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            if (this.state.box === "1") {
                var SUBNAVBAR_NAVBAR_LI = StyleSheet.create({
                    subnavbar_navbar_li: {
                        display: 'flex',
                        flex: 1,
                        fontSize: this.state.fontSize,
                        fontWeight: this.state.fontWeight,
                        justifyContent: 'center',
                        margin: this.state.itemSpaceing,
                        background: this.state.itemBackground,
                        fontVariant: this.state.fontVariant
                    },
                    '@media screen and (max-width: 768px)': {
                        subnavbar_navbar_li: {
                            display: this.state.smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        subnavbar_navbar_li: {
                            display: this.state.mddis
                        }
                    }
                });
                NAVBAR = CHILDS.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: i, style: SUBNAVBAR_NAVBAR_LI.subnavbar_navbar_li, id: _this3.state.itemsid, className: _this3.state.itemsClassName },
                        x
                    );
                });
                use = subnavbarFuntion("1", props, state, self);
                styledSubnavbar = [_react2.default.createElement(
                    'nav',
                    { key: this.state.keys[0], style: use.SUBNAVBAR.subnavbar, id: this.state.navid, className: 'subnavbar1 socialness ' + this.state.navClassName },
                    _react2.default.createElement(
                        'ul',
                        { style: use.SUBNAVBAR_NAVBAR.subnavbar_navbar, id: this.state.listid, className: 'subnavbar1-navbar ' + this.state.listClassName },
                        NAVBAR
                    )
                )];
            } else {
                var _SUBNAVBAR_NAVBAR_LI2 = StyleSheet.create({
                    subnavbar_navbar_li: {
                        display: 'flex',
                        flex: 1,
                        fontSize: this.state.fontSize,
                        fontWeight: this.state.fontWeight,
                        justifyContent: 'center',
                        margin: this.state.itemSpaceing,
                        background: this.state.itemBackground,
                        fontVariant: this.state.fontVariant
                    },
                    '@media screen and (max-width: 768px)': {
                        subnavbar_navbar_li: {
                            display: this.state.smdis
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        subnavbar_navbar_li: {
                            display: this.state.mddis
                        }
                    }
                });
                NAVBAR = CHILDS.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: i, style: _SUBNAVBAR_NAVBAR_LI2.subnavbar_navbar_li, id: _this3.state.itemsid, className: _this3.state.itemsClassName },
                        x
                    );
                });
                use = subnavbarFuntion("1", props, state, self);
                styledSubnavbar = [_react2.default.createElement(
                    'nav',
                    { key: this.state.keys[0], style: use.SUBNAVBAR.subnavbar, id: this.state.navid, className: 'subnavbar1 socialness ' + this.state.navClassName },
                    _react2.default.createElement(
                        'ul',
                        { style: use.SUBNAVBAR_NAVBAR.subnavbar_navbar, id: this.state.listid, className: 'subnavbar1-navbar ' + this.state.listClassName },
                        NAVBAR
                    )
                )];
            }
            this.setState({ childs: NAVBAR, styledSubnavbar: styledSubnavbar });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.state.styledSubnavbar
            );
        }
    }]);

    return Subnavbar;
}(_react2.default.Component);

exports.default = Subnavbar;