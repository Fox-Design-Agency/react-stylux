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

var _subnavbarFunctions = require("./navbarFunctions/subnavbarFunctions");

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
            vars: props.vars,
            keys: ''

        };
        return _this;
    }

    _createClass(Subnavbar, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            var props = this.props;
            var state = this.state;
            var styledSubnavbar = void 0,
                use = void 0,
                NAVBAR = void 0,
                subnavbar_navbar_li = void 0,
                smsubnavbar_navbar_li = void 0,
                mdsubnavbar_navbar_li = '';
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
                            _subnavbar_navbar_li = {
                                display: 'flex',
                                flex: "1 0 auto",
                                fontSize: this.state.fontSize,
                                fontWeight: this.state.fontWeight,
                                justifyContent: 'center',
                                margin: this.state.itemSpaceing,
                                background: this.state.itemBackground,
                                fontVariant: this.state.fontVariant
                            };
                            _smsubnavbar_navbar_li = {
                                display: this.state.smdis,
                                flex: "1 0 auto",
                                fontSize: this.state.fontSize,
                                fontWeight: this.state.fontWeight,
                                justifyContent: 'center',
                                margin: this.state.itemSpaceing,
                                background: this.state.itemBackground,
                                fontVariant: this.state.fontVariant

                            };
                            _mdsubnavbar_navbar_li = {
                                display: this.state.mddis,
                                flex: "1 0 auto",
                                fontSize: this.state.fontSize,
                                fontWeight: this.state.fontWeight,
                                justifyContent: 'center',
                                margin: this.state.itemSpaceing,
                                background: this.state.itemBackground,
                                fontVariant: this.state.fontVariant
                            };
                            NAVBAR = CHILDS.map(function (x, i) {
                                return _react2.default.createElement(
                                    "li",
                                    { key: i, style: _subnavbar_navbar_li, id: _this2.state.itemsid, className: _this2.state.itemsClassName },
                                    x
                                );
                            });
                            use = (0, _subnavbarFunctions2.default)("1", props, state, self);
                            styledSubnavbar = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], query: "(min-width: 1224px)" },
                                _react2.default.createElement(
                                    "nav",
                                    { style: use.subnavbar, id: this.state.navid, className: "subnavbar1 socialness " + this.state.navClassName },
                                    _react2.default.createElement(
                                        "ul",
                                        { style: use.subnavbar_navbar, id: this.state.listid, className: "subnavbar1-navbar " + this.state.listClassName },
                                        NAVBAR
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    "nav",
                                    { style: use.mdsubnavbar, id: this.state.navid, className: "subnavbar1 socialness " + this.state.navClassName },
                                    _react2.default.createElement(
                                        "ul",
                                        { style: use.mdsubnavbar_navbar, id: this.state.listid, className: "subnavbar1-navbar " + this.state.listClassName },
                                        NAVBAR
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    "nav",
                                    { style: use.smsubnavbar, id: this.state.navid, className: "subnavbar1 socialness " + this.state.navClassName },
                                    _react2.default.createElement(
                                        "ul",
                                        { style: use.smsubnavbar_navbar, id: this.state.listid, className: "subnavbar1-navbar " + this.state.listClassName },
                                        NAVBAR
                                    )
                                )
                            )];
                        default:
                            _subnavbar_navbar_li = {
                                display: 'flex',
                                flex: "1 0 auto",
                                fontSize: this.state.fontSize,
                                fontWeight: this.state.fontWeight,
                                justifyContent: 'center',
                                margin: this.state.itemSpaceing,
                                background: this.state.itemBackground,
                                fontVariant: this.state.fontVariant
                            };
                            _smsubnavbar_navbar_li = {
                                display: this.state.smdis,
                                flex: "1 0 auto",
                                fontSize: this.state.fontSize,
                                fontWeight: this.state.fontWeight,
                                justifyContent: 'center',
                                margin: this.state.itemSpaceing,
                                background: this.state.itemBackground,
                                fontVariant: this.state.fontVariant

                            };
                            _mdsubnavbar_navbar_li = {
                                display: this.state.mddis,
                                flex: "1 0 auto",
                                fontSize: this.state.fontSize,
                                fontWeight: this.state.fontWeight,
                                justifyContent: 'center',
                                margin: this.state.itemSpaceing,
                                background: this.state.itemBackground,
                                fontVariant: this.state.fontVariant
                            };
                            NAVBAR = CHILDS.map(function (x, i) {
                                return _react2.default.createElement(
                                    "li",
                                    { key: i, style: _subnavbar_navbar_li, id: _this2.state.itemsid, className: _this2.state.itemsClassName },
                                    x
                                );
                            });
                            use = (0, _subnavbarFunctions2.default)("1", props, state, self);
                            styledSubnavbar = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], query: "(min-width: 1224px)" },
                                _react2.default.createElement(
                                    "nav",
                                    { style: use.subnavbar, id: this.state.navid, className: "subnavbar1 socialness " + this.state.navClassName },
                                    _react2.default.createElement(
                                        "ul",
                                        { style: use.subnavbar_navbar, id: this.state.listid, className: "subnavbar1-navbar " + this.state.listClassName },
                                        NAVBAR
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    "nav",
                                    { style: use.mdsubnavbar, id: this.state.navid, className: "subnavbar1 socialness " + this.state.navClassName },
                                    _react2.default.createElement(
                                        "ul",
                                        { style: use.mdsubnavbar_navbar, id: this.state.listid, className: "subnavbar1-navbar " + this.state.listClassName },
                                        NAVBAR
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    "nav",
                                    { style: use.smsubnavbar, id: this.state.navid, className: "subnavbar1 socialness " + this.state.navClassName },
                                    _react2.default.createElement(
                                        "ul",
                                        { style: use.smsubnavbar_navbar, id: this.state.listid, className: "subnavbar1-navbar " + this.state.listClassName },
                                        NAVBAR
                                    )
                                )
                            )];
                    }
                    break;

                // } else if (this.state.box === "2") {
                //     const SUBNAVBAR_NAVBAR_LI = {
                //         display: 'flex',
                //         flex: 1,
                //         fontSize: this.state.fontSize,
                //         fontWeight: this.state.fontWeight,
                //         justifyContent: 'center',
                //         margin: this.state.itemSpaceing,
                //         background: this.state.itemBackground,
                //         fontVariant: this.state.fontVariant,
                //     };
                //     const CHILDS = React.Children.toArray(this.props.children)
                //     const NAVBAR = CHILDS.map((x, i) => {
                //         return <li key={i} style={SUBNAVBAR_NAVBAR_LI} id={this.state.itemsid} className={this.state.itemsClassName}>{x}</li>
                //     })
                //     use = subnavbarFuntion("2", props, state, self)
                //     styledSubnavbar = [
                //         <nav style={use.SUBNAVBAR} className="subnavbar2 socialness">
                //         <Holder>
                //             <ul style={use.SUBNAVBAR_NAVBAR1} id={this.state.navid} className={`subnavbar2-navbar1 ${this.state.navClassName}`}>
                //                 {NAVBAR[0]}
                //                 {NAVBAR[1]}
                //             </ul>
                //             <Holder
                //                 alignBlock1="flex-end"
                //                 alignBlock2="flex-start">
                //                 <div id={this.state.leftItemsid} className={`subnavbar2-globalSearch ${this.state.leftItemsClassName}`}>
                //                     <p>Search Holder</p>
                //                 </div>
                //                 <ul style={use.SUBNAVBAR_NAVBAR2} id={this.state.rightItemsid} className={`subnavbar2-navbar2 ${this.state.rightItemsClassName}`}>
                //                     {NAVBAR}
                //                 </ul>
                //             </Holder>
                //         </Holder>
                //     </nav>
                //     ]


                default:
                    var _subnavbar_navbar_li = {
                        display: 'flex',
                        flex: "1 0 auto",
                        fontSize: this.state.fontSize,
                        fontWeight: this.state.fontWeight,
                        justifyContent: 'center',
                        margin: this.state.itemSpaceing,
                        background: this.state.itemBackground,
                        fontVariant: this.state.fontVariant
                    };
                    var _smsubnavbar_navbar_li = {
                        display: this.state.smdis,
                        flex: "1 0 auto",
                        fontSize: this.state.fontSize,
                        fontWeight: this.state.fontWeight,
                        justifyContent: 'center',
                        margin: this.state.itemSpaceing,
                        background: this.state.itemBackground,
                        fontVariant: this.state.fontVariant

                    };
                    var _mdsubnavbar_navbar_li = {
                        display: this.state.mddis,
                        flex: "1 0 auto",
                        fontSize: this.state.fontSize,
                        fontWeight: this.state.fontWeight,
                        justifyContent: 'center',
                        margin: this.state.itemSpaceing,
                        background: this.state.itemBackground,
                        fontVariant: this.state.fontVariant
                    };
                    NAVBAR = CHILDS.map(function (x, i) {
                        return _react2.default.createElement(
                            "li",
                            { key: i, style: _subnavbar_navbar_li, id: _this2.state.itemsid, className: _this2.state.itemsClassName },
                            x
                        );
                    });
                    use = (0, _subnavbarFunctions2.default)("1", props, state, self);
                    styledSubnavbar = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[0], query: "(min-width: 1224px)" },
                        _react2.default.createElement(
                            "nav",
                            { style: use.subnavbar, id: this.state.navid, className: "subnavbar1 socialness " + this.state.navClassName },
                            _react2.default.createElement(
                                "ul",
                                { style: use.subnavbar_navbar, id: this.state.listid, className: "subnavbar1-navbar " + this.state.listClassName },
                                NAVBAR
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement(
                            "nav",
                            { style: use.mdsubnavbar, id: this.state.navid, className: "subnavbar1 socialness " + this.state.navClassName },
                            _react2.default.createElement(
                                "ul",
                                { style: use.mdsubnavbar_navbar, id: this.state.listid, className: "subnavbar1-navbar " + this.state.listClassName },
                                NAVBAR
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[2], maxWidth: 767 },
                        _react2.default.createElement(
                            "nav",
                            { style: use.smsubnavbar, id: this.state.navid, className: "subnavbar1 socialness " + this.state.navClassName },
                            _react2.default.createElement(
                                "ul",
                                { style: use.smsubnavbar_navbar, id: this.state.listid, className: "subnavbar1-navbar " + this.state.listClassName },
                                NAVBAR
                            )
                        )
                    )];
            }

            this.setState({ childs: NAVBAR, keys: tempkeys, styledSubnavbar: styledSubnavbar });
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(newProps) {
            var _this3 = this;

            var props = newProps;
            var state = this.state;
            var styledSubnavbar = void 0,
                use = void 0,
                NAVBAR = void 0,
                subnavbar_navbar_li = void 0,
                smsubnavbar_navbar_li = void 0,
                mdsubnavbar_navbar_li = '';
            var self = this;
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            switch (this.state.box) {
                case "1":
                    switch (this.state.vars) {
                        case "1":
                            subnavbar_navbar_li = {
                                display: 'flex',
                                flex: "1 0 auto",
                                fontSize: this.state.fontSize,
                                fontWeight: this.state.fontWeight,
                                justifyContent: 'center',
                                margin: this.state.itemSpaceing,
                                background: this.state.itemBackground,
                                fontVariant: this.state.fontVariant
                            };
                            smsubnavbar_navbar_li = {
                                display: this.state.smdis,
                                flex: "1 0 auto",
                                fontSize: this.state.fontSize,
                                fontWeight: this.state.fontWeight,
                                justifyContent: 'center',
                                margin: this.state.itemSpaceing,
                                background: this.state.itemBackground,
                                fontVariant: this.state.fontVariant

                            };
                            mdsubnavbar_navbar_li = {
                                display: this.state.mddis,
                                flex: "1 0 auto",
                                fontSize: this.state.fontSize,
                                fontWeight: this.state.fontWeight,
                                justifyContent: 'center',
                                margin: this.state.itemSpaceing,
                                background: this.state.itemBackground,
                                fontVariant: this.state.fontVariant
                            };
                            NAVBAR = CHILDS.map(function (x, i) {
                                return _react2.default.createElement(
                                    "li",
                                    { key: i, style: subnavbar_navbar_li, id: _this3.state.itemsid, className: _this3.state.itemsClassName },
                                    x
                                );
                            });
                            use = (0, _subnavbarFunctions2.default)("1", props, state, self);
                            styledSubnavbar = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], query: "(min-width: 1224px)" },
                                _react2.default.createElement(
                                    "nav",
                                    { style: use.subnavbar, id: this.state.navid, className: "subnavbar1 socialness " + this.state.navClassName },
                                    _react2.default.createElement(
                                        "ul",
                                        { style: use.subnavbar_navbar, id: this.state.listid, className: "subnavbar1-navbar " + this.state.listClassName },
                                        NAVBAR
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    "nav",
                                    { style: use.mdsubnavbar, id: this.state.navid, className: "subnavbar1 socialness " + this.state.navClassName },
                                    _react2.default.createElement(
                                        "ul",
                                        { style: use.mdsubnavbar_navbar, id: this.state.listid, className: "subnavbar1-navbar " + this.state.listClassName },
                                        NAVBAR
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    "nav",
                                    { style: use.smsubnavbar, id: this.state.navid, className: "subnavbar1 socialness " + this.state.navClassName },
                                    _react2.default.createElement(
                                        "ul",
                                        { style: use.smsubnavbar_navbar, id: this.state.listid, className: "subnavbar1-navbar " + this.state.listClassName },
                                        NAVBAR
                                    )
                                )
                            )];
                        default:
                            subnavbar_navbar_li = {
                                display: 'flex',
                                flex: "1 0 auto",
                                fontSize: this.state.fontSize,
                                fontWeight: this.state.fontWeight,
                                justifyContent: 'center',
                                margin: this.state.itemSpaceing,
                                background: this.state.itemBackground,
                                fontVariant: this.state.fontVariant
                            };
                            smsubnavbar_navbar_li = {
                                display: this.state.smdis,
                                flex: "1 0 auto",
                                fontSize: this.state.fontSize,
                                fontWeight: this.state.fontWeight,
                                justifyContent: 'center',
                                margin: this.state.itemSpaceing,
                                background: this.state.itemBackground,
                                fontVariant: this.state.fontVariant

                            };
                            mdsubnavbar_navbar_li = {
                                display: this.state.mddis,
                                flex: "1 0 auto",
                                fontSize: this.state.fontSize,
                                fontWeight: this.state.fontWeight,
                                justifyContent: 'center',
                                margin: this.state.itemSpaceing,
                                background: this.state.itemBackground,
                                fontVariant: this.state.fontVariant
                            };
                            NAVBAR = CHILDS.map(function (x, i) {
                                return _react2.default.createElement(
                                    "li",
                                    { key: i, style: subnavbar_navbar_li, id: _this3.state.itemsid, className: _this3.state.itemsClassName },
                                    x
                                );
                            });
                            use = (0, _subnavbarFunctions2.default)("1", props, state, self);
                            styledSubnavbar = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], query: "(min-width: 1224px)" },
                                _react2.default.createElement(
                                    "nav",
                                    { style: use.subnavbar, id: this.state.navid, className: "subnavbar1 socialness " + this.state.navClassName },
                                    _react2.default.createElement(
                                        "ul",
                                        { style: use.subnavbar_navbar, id: this.state.listid, className: "subnavbar1-navbar " + this.state.listClassName },
                                        NAVBAR
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    "nav",
                                    { style: use.mdsubnavbar, id: this.state.navid, className: "subnavbar1 socialness " + this.state.navClassName },
                                    _react2.default.createElement(
                                        "ul",
                                        { style: use.mdsubnavbar_navbar, id: this.state.listid, className: "subnavbar1-navbar " + this.state.listClassName },
                                        NAVBAR
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    "nav",
                                    { style: use.smsubnavbar, id: this.state.navid, className: "subnavbar1 socialness " + this.state.navClassName },
                                    _react2.default.createElement(
                                        "ul",
                                        { style: use.smsubnavbar_navbar, id: this.state.listid, className: "subnavbar1-navbar " + this.state.listClassName },
                                        NAVBAR
                                    )
                                )
                            )];
                    }
                    break;
                default:
                    subnavbar_navbar_li = {
                        display: 'flex',
                        flex: "1 0 auto",
                        fontSize: this.state.fontSize,
                        fontWeight: this.state.fontWeight,
                        justifyContent: 'center',
                        margin: this.state.itemSpaceing,
                        background: this.state.itemBackground,
                        fontVariant: this.state.fontVariant
                    };
                    smsubnavbar_navbar_li = {
                        display: this.state.smdis,
                        flex: "1 0 auto",
                        fontSize: this.state.fontSize,
                        fontWeight: this.state.fontWeight,
                        justifyContent: 'center',
                        margin: this.state.itemSpaceing,
                        background: this.state.itemBackground,
                        fontVariant: this.state.fontVariant

                    };
                    mdsubnavbar_navbar_li = {
                        display: this.state.mddis,
                        flex: "1 0 auto",
                        fontSize: this.state.fontSize,
                        fontWeight: this.state.fontWeight,
                        justifyContent: 'center',
                        margin: this.state.itemSpaceing,
                        background: this.state.itemBackground,
                        fontVariant: this.state.fontVariant
                    };
                    NAVBAR = CHILDS.map(function (x, i) {
                        return _react2.default.createElement(
                            "li",
                            { key: i, style: subnavbar_navbar_li, id: _this3.state.itemsid, className: _this3.state.itemsClassName },
                            x
                        );
                    });
                    use = (0, _subnavbarFunctions2.default)("1", props, state, self);
                    styledSubnavbar = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[0], query: "(min-width: 1224px)" },
                        _react2.default.createElement(
                            "nav",
                            { style: use.subnavbar, id: this.state.navid, className: "subnavbar1 socialness " + this.state.navClassName },
                            _react2.default.createElement(
                                "ul",
                                { style: use.subnavbar_navbar, id: this.state.listid, className: "subnavbar1-navbar " + this.state.listClassName },
                                NAVBAR
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement(
                            "nav",
                            { style: use.mdsubnavbar, id: this.state.navid, className: "subnavbar1 socialness " + this.state.navClassName },
                            _react2.default.createElement(
                                "ul",
                                { style: use.mdsubnavbar_navbar, id: this.state.listid, className: "subnavbar1-navbar " + this.state.listClassName },
                                NAVBAR
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[2], maxWidth: 767 },
                        _react2.default.createElement(
                            "nav",
                            { style: use.smsubnavbar, id: this.state.navid, className: "subnavbar1 socialness " + this.state.navClassName },
                            _react2.default.createElement(
                                "ul",
                                { style: use.smsubnavbar_navbar, id: this.state.listid, className: "subnavbar1-navbar " + this.state.listClassName },
                                NAVBAR
                            )
                        )
                    )];

            }
            this.setState({ childs: NAVBAR, styledSubnavbar: styledSubnavbar });
        }
    }, {
        key: "render",
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