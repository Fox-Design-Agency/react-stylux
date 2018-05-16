"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactResponsive = require("react-responsive");

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

require("../css/reset.css");

require("../css/animations.css");

var _dropdownnavFunctions = require("./navbarFunctions/dropdownnavFunctions");

var _dropdownnavFunctions2 = _interopRequireDefault(_dropdownnavFunctions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdownnav = function (_React$Component) {
    _inherits(Dropdownnav, _React$Component);

    function Dropdownnav(props) {
        _classCallCheck(this, Dropdownnav);

        var _this = _possibleConstructorReturn(this, (Dropdownnav.__proto__ || Object.getPrototypeOf(Dropdownnav)).call(this, props));

        _this.state = {
            visibility: 'hidden',
            background: props.background,
            boxShadow: props.boxShadow || '1px 2px 2px black',
            borderRadius: props.borderRadius || '0 0 5px 5px',
            offset: props.offset,
            color: props.color || 'black',
            textAlign: props.textAlign || 'left',
            margin: props.margin,
            padding: props.padding,
            width: props.width,
            mainid: props.mainid,
            titleid: props.titleid,
            itemsid: props.itemsid,
            mainClassName: props.mainClassName,
            titleClassName: props.titleClassName,
            itemsClassName: props.itemsClassName,
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime || 'ease-in',
            animationName: props.aniName || 'bounceInDown',
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode || 'both',
            childs: [],
            first: [],
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            keys: '',
            box: props.box,
            styledDropdown: ''
        };
        _this.enter = _this.enter.bind(_this);
        _this.left = _this.left.bind(_this);
        return _this;
    }

    _createClass(Dropdownnav, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            var props = this.props;
            var state = this.state;
            var styledDropdown = void 0,
                use = void 0,
                NAVBAR = void 0,
                FIRST = '';
            var self = this;
            var tempkey = Math.random();

            var CHILDS = _react2.default.Children.toArray(this.props.children);

            if (this.state.box === "1") {
                use = (0, _dropdownnavFunctions2.default)("1", props, state, self);
                var DropDown_NavBar_Li = {
                    color: this.state.color
                };
                NAVBAR = CHILDS.map(function (x, i, arr) {
                    return _react2.default.createElement(
                        "li",
                        { key: i, style: DropDown_NavBar_Li },
                        arr[i + 1]
                    );
                });
                FIRST = CHILDS[0];
                styledDropdown = [_react2.default.createElement(
                    "nav",
                    { key: tempkey, id: this.state.mainid, className: "dropdownnav1 " + this.state.mainClassName },
                    _react2.default.createElement(
                        "li",
                        { id: this.state.titleid, className: "DropDown " + this.state.titleClassName, style: use.HASCHILDS,
                            onMouseOver: function onMouseOver() {
                                return _this2.enter();
                            },
                            onMouseOut: function onMouseOut() {
                                return _this2.left();
                            } },
                        FIRST,
                        _react2.default.createElement(
                            "ul",
                            { style: use.DROPDOWN, id: this.state.itemsid, className: this.state.itemsClassName },
                            NAVBAR
                        )
                    )
                )];
            } else {
                use = (0, _dropdownnavFunctions2.default)("1", props, state, self);
                var _DropDown_NavBar_Li = {
                    color: this.state.color
                };
                NAVBAR = CHILDS.map(function (x, i, arr) {
                    return _react2.default.createElement(
                        "li",
                        { key: i, style: _DropDown_NavBar_Li },
                        arr[i + 1]
                    );
                });
                FIRST = CHILDS[0];
                styledDropdown = [_react2.default.createElement(
                    "nav",
                    { key: tempkey, id: this.state.mainid, className: "dropdownnav1 " + this.state.mainClassName },
                    _react2.default.createElement(
                        "li",
                        { id: this.state.titleid, className: "DropDown " + this.state.titleClassName, style: use.HASCHILDS,
                            onMouseOver: function onMouseOver() {
                                return _this2.enter();
                            },
                            onMouseOut: function onMouseOut() {
                                return _this2.left();
                            } },
                        FIRST,
                        _react2.default.createElement(
                            "ul",
                            { style: use.DROPDOWN, id: this.state.itemsid, className: this.state.itemsClassName },
                            NAVBAR
                        )
                    )
                )];
            }
            this.setState({ childs: NAVBAR, first: FIRST, styledDropdown: styledDropdown, keys: tempkey });
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(newProps) {
            var _this3 = this;

            var props = newProps;
            var state = this.state;
            var styledDropdown = void 0,
                use = void 0,
                NAVBAR = void 0,
                FIRST = '';
            var self = this;
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            if (this.state.box === "1") {
                use = (0, _dropdownnavFunctions2.default)("1", props, state, self);
                var DropDown_NavBar_Li = {
                    color: this.state.color
                };
                NAVBAR = CHILDS.map(function (x, i, arr) {
                    return _react2.default.createElement(
                        "li",
                        { key: i, style: DropDown_NavBar_Li },
                        arr[i + 1]
                    );
                });
                FIRST = CHILDS[0];
                styledDropdown = [_react2.default.createElement(
                    "nav",
                    { key: this.state.keys, id: this.state.mainid, className: "dropdownnav1 " + this.state.mainClassName },
                    _react2.default.createElement(
                        "li",
                        { id: this.state.titleid, className: "DropDown " + this.state.titleClassName, style: use.HASCHILDS,
                            onMouseOver: function onMouseOver() {
                                return _this3.enter();
                            },
                            onMouseOut: function onMouseOut() {
                                return _this3.left();
                            } },
                        this.state.first,
                        _react2.default.createElement(
                            "ul",
                            { style: use.DROPDOWN, id: this.state.itemsid, className: this.state.itemsClassName },
                            NAVBAR
                        )
                    )
                )];
            } else {
                use = (0, _dropdownnavFunctions2.default)("1", props, state, self);
                var _DropDown_NavBar_Li2 = {
                    color: this.state.color
                };
                NAVBAR = CHILDS.map(function (x, i, arr) {
                    return _react2.default.createElement(
                        "li",
                        { key: i, style: _DropDown_NavBar_Li2 },
                        arr[i + 1]
                    );
                });
                FIRST = CHILDS[0];
                styledDropdown = [_react2.default.createElement(
                    "nav",
                    { key: this.state.keys, id: this.state.mainid, className: "dropdownnav1 " + this.state.mainClassName },
                    _react2.default.createElement(
                        "li",
                        { id: this.state.titleid, className: "DropDown " + this.state.titleClassName, style: use.HASCHILDS,
                            onMouseOver: function onMouseOver() {
                                return _this3.enter();
                            },
                            onMouseOut: function onMouseOut() {
                                return _this3.left();
                            } },
                        this.state.first,
                        _react2.default.createElement(
                            "ul",
                            { style: use.DROPDOWN, id: this.state.itemsid, className: this.state.itemsClassName },
                            NAVBAR
                        )
                    )
                )];
            }
            this.setState({ childs: NAVBAR, first: FIRST, styledDropdown: styledDropdown });
        }
    }, {
        key: "enter",
        value: function enter() {
            var _this4 = this;

            var props = this.props;
            var state = this.state;
            var styledDropdown = void 0,
                use = '';
            var self = this;
            if (this.state.box === "1") {
                var show = "visible";
                use = (0, _dropdownnavFunctions2.default)("1", props, state, self, show);
                styledDropdown = [_react2.default.createElement(
                    "nav",
                    { key: this.state.keys, id: this.state.mainid, className: "dropdownnav1 " + this.state.mainClassName },
                    _react2.default.createElement(
                        "li",
                        { id: this.state.titleid, className: "DropDown " + this.state.titleClassName, style: use.HASCHILDS,
                            onMouseOver: function onMouseOver() {
                                return _this4.enter();
                            },
                            onMouseOut: function onMouseOut() {
                                return _this4.left();
                            } },
                        this.state.first,
                        _react2.default.createElement(
                            "ul",
                            { style: use.DROPDOWN, id: this.state.itemsid, className: this.state.itemsClassName },
                            this.state.childs
                        )
                    )
                )];
            } else {
                var _show = "visible";
                use = (0, _dropdownnavFunctions2.default)("1", props, state, self, _show);
                styledDropdown = [_react2.default.createElement(
                    "nav",
                    { key: this.state.keys, id: this.state.mainid, className: "dropdownnav1 " + this.state.mainClassName },
                    _react2.default.createElement(
                        "li",
                        { id: this.state.titleid, className: "DropDown " + this.state.titleClassName, style: use.HASCHILDS,
                            onMouseOver: function onMouseOver() {
                                return _this4.enter();
                            },
                            onMouseOut: function onMouseOut() {
                                return _this4.left();
                            } },
                        this.state.first,
                        _react2.default.createElement(
                            "ul",
                            { style: use.DROPDOWN, id: this.state.itemsid, className: this.state.itemsClassName },
                            this.state.childs
                        )
                    )
                )];
            }
            this.setState({
                styledDropdown: styledDropdown
            });
        }
    }, {
        key: "left",
        value: function left() {
            var _this5 = this;

            var props = this.props;
            var state = this.state;
            var styledDropdown = void 0,
                use = '';
            var self = this;
            if (this.state.box === "1") {
                var show = "hidden";
                use = (0, _dropdownnavFunctions2.default)("1", props, state, self, show);
                styledDropdown = [_react2.default.createElement(
                    "nav",
                    { key: this.state.keys, id: this.state.mainid, className: "dropdownnav1 " + this.state.mainClassName },
                    _react2.default.createElement(
                        "li",
                        { id: this.state.titleid, className: "DropDown " + this.state.titleClassName, style: use.HASCHILDS,
                            onMouseOver: function onMouseOver() {
                                return _this5.enter();
                            },
                            onMouseOut: function onMouseOut() {
                                return _this5.left();
                            } },
                        this.state.first,
                        _react2.default.createElement(
                            "ul",
                            { style: use.DROPDOWN, id: this.state.itemsid, className: this.state.itemsClassName },
                            this.state.childs
                        )
                    )
                )];
            } else {
                var _show2 = "hidden";
                use = (0, _dropdownnavFunctions2.default)("1", props, state, self, _show2);
                styledDropdown = [_react2.default.createElement(
                    "nav",
                    { key: this.state.keys, id: this.state.mainid, className: "dropdownnav1 " + this.state.mainClassName },
                    _react2.default.createElement(
                        "li",
                        { id: this.state.titleid, className: "DropDown " + this.state.titleClassName, style: use.HASCHILDS,
                            onMouseOver: function onMouseOver() {
                                return _this5.enter();
                            },
                            onMouseOut: function onMouseOut() {
                                return _this5.left();
                            } },
                        this.state.first,
                        _react2.default.createElement(
                            "ul",
                            { style: use.DROPDOWN, id: this.state.itemsid, className: this.state.itemsClassName },
                            this.state.childs
                        )
                    )
                )];
            }
            this.setState({
                styledDropdown: styledDropdown
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.state.styledDropdown
            );
        }
    }]);

    return Dropdownnav;
}(_react2.default.Component);

exports.default = Dropdownnav;