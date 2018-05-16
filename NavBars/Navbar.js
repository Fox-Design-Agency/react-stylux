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

var _navbarFunctions = require("./navbarFunctions/navbarFunctions");

var _navbarFunctions2 = _interopRequireDefault(_navbarFunctions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
    _inherits(Navbar, _React$Component);

    function Navbar(props) {
        _classCallCheck(this, Navbar);

        var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

        _this.state = {
            top: props.top,
            left: props.left,
            right: props.right,
            bottom: props.bottom,
            position: props.position,
            fontFamily: props.font || 'serif',
            totalWidth: props.totalWidth || '100%',
            navBarWidth: props.navbarWidth || '100%',
            totalHeight: props.height,
            display: props.display || 'flex',
            direction: props.direction || 'row',
            alignItems: props.align || 'center',
            columnAlign: props.columnAlign || 'center',
            margin: props.margin || '0',
            padding: props.padding || '0',
            itemSpaceing: props.itemSpacing || '10px 0',
            mainBackground: props.mainBackground || 'inherit',
            itemBackground: props.itemBackground || 'inherit',
            color: props.color || 'black',
            fontSize: props.fontSize || '1.333em',
            fontWeight: props.fontWeight || '100',
            fontVariant: props.fontVariant || 'none',
            navid: props.navid,
            itemsid: props.itemsid,
            navClassName: props.navClassName,
            itemsClassName: props.itemsClassName,
            childs: '',
            hams: '',
            smdis: props.smDis,
            mddis: props.mdDis || 'flex',
            initialCount: props.count || '0',
            hoverColor: props.hoverColor,
            hamMenuDis: 'none',
            hamShow: false,
            hamTop: props.hamTop || '75px',
            hamLeft: props.hamLeft || '0',
            hamSmDis: props.hamSmDis || 'flex',
            hamMdDis: props.hamMdDis || 'none',
            hamShadow: props.hamShadow || '1px 2px 2px black',
            hamBackground: props.hamBackground || 'white',
            hamPosition: props.hamPosition || 'absolute',
            animationIterationCount: props.aniCount || '1',
            animationTimingFunction: props.aniTime || 'ease-in',
            animationName: props.aniName || 'fadeIn',
            animationDuration: props.aniDur || '0.75s',
            transformOrigin: props.transformOrigin || 'top',
            animationFillMode: props.aniFillMode || 'both',
            keys: '',
            styledNavbar: '',
            box: props.box,
            vars: props.vars
        };
        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }

    _createClass(Navbar, [{
        key: "toggle",
        value: function toggle() {
            var props = this.props;
            var state = this.state;
            var styledNavbar = void 0,
                use = void 0,
                NAVBARACTUAL = void 0,
                NAVBARLG = void 0,
                NAVBARSM = void 0,
                smdis = void 0,
                show = '';
            var self = this;
            if (this.state.box === "1" || this.state.box === "2") {

                smdis = "none";
                show = !this.state.hamShow;
                use = (0, _navbarFunctions2.default)("1", props, state, self, smdis, show);
                switch (this.state.box) {
                    case "1":
                        switch (this.state.var) {
                            case "1":
                                styledNavbar = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], query: "(min-width: 1224px)" },
                                    _react2.default.createElement(
                                        "nav",
                                        {
                                            style: use.navbar, id: this.state.navid, className: this.state.navClassName },
                                        _react2.default.createElement(
                                            "ul",
                                            { style: use.navbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                            this.state.childs
                                        ),
                                        _react2.default.createElement(
                                            "div",
                                            { style: use.HAMNAV, onClick: this.toggle },
                                            _react2.default.createElement("div", { style: use.HAMLINES }),
                                            _react2.default.createElement("div", { style: use.HAMLINES }),
                                            _react2.default.createElement("div", { style: use.HAMLINES })
                                        ),
                                        _react2.default.createElement(
                                            "ul",
                                            { style: use.hamestnav },
                                            this.state.hams
                                        )
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        "nav",
                                        {
                                            style: use.mdnavbar, id: this.state.navid, className: this.state.navClassName },
                                        _react2.default.createElement(
                                            "ul",
                                            { style: use.mdnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                            this.state.childs
                                        ),
                                        _react2.default.createElement(
                                            "div",
                                            { style: use.mdHAMNAV, onClick: this.toggle },
                                            _react2.default.createElement("div", { style: use.HAMLINES }),
                                            _react2.default.createElement("div", { style: use.HAMLINES }),
                                            _react2.default.createElement("div", { style: use.HAMLINES })
                                        ),
                                        _react2.default.createElement(
                                            "ul",
                                            { style: use.mdhamestnav },
                                            this.state.hams
                                        )
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        "nav",
                                        {
                                            style: use.smnavbar, id: this.state.navid, className: this.state.navClassName },
                                        _react2.default.createElement(
                                            "ul",
                                            { style: use.smnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                            this.state.childs
                                        ),
                                        _react2.default.createElement(
                                            "div",
                                            { style: use.smHAMNAV, onClick: this.toggle },
                                            _react2.default.createElement("div", { style: use.HAMLINES }),
                                            _react2.default.createElement("div", { style: use.HAMLINES }),
                                            _react2.default.createElement("div", { style: use.HAMLINES })
                                        ),
                                        _react2.default.createElement(
                                            "ul",
                                            { style: use.smhamestnav },
                                            this.state.hams
                                        )
                                    )
                                )];
                            default:
                                styledNavbar = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], query: "(min-width: 1224px)" },
                                    _react2.default.createElement(
                                        "nav",
                                        {
                                            style: use.navbar, id: this.state.navid, className: this.state.navClassName },
                                        _react2.default.createElement(
                                            "ul",
                                            { style: use.navbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                            this.state.childs
                                        ),
                                        _react2.default.createElement(
                                            "div",
                                            { style: use.HAMNAV, onClick: this.toggle },
                                            _react2.default.createElement("div", { style: use.HAMLINES }),
                                            _react2.default.createElement("div", { style: use.HAMLINES }),
                                            _react2.default.createElement("div", { style: use.HAMLINES })
                                        ),
                                        _react2.default.createElement(
                                            "ul",
                                            { style: use.hamestnav },
                                            this.state.hams
                                        )
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        "nav",
                                        {
                                            style: use.mdnavbar, id: this.state.navid, className: this.state.navClassName },
                                        _react2.default.createElement(
                                            "ul",
                                            { style: use.mdnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                            this.state.childs
                                        ),
                                        _react2.default.createElement(
                                            "div",
                                            { style: use.mdHAMNAV, onClick: this.toggle },
                                            _react2.default.createElement("div", { style: use.HAMLINES }),
                                            _react2.default.createElement("div", { style: use.HAMLINES }),
                                            _react2.default.createElement("div", { style: use.HAMLINES })
                                        ),
                                        _react2.default.createElement(
                                            "ul",
                                            { style: use.mdhamestnav },
                                            this.state.hams
                                        )
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        "nav",
                                        {
                                            style: use.smnavbar, id: this.state.navid, className: this.state.navClassName },
                                        _react2.default.createElement(
                                            "ul",
                                            { style: use.smnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                            this.state.childs
                                        ),
                                        _react2.default.createElement(
                                            "div",
                                            { style: use.smHAMNAV, onClick: this.toggle },
                                            _react2.default.createElement("div", { style: use.HAMLINES }),
                                            _react2.default.createElement("div", { style: use.HAMLINES }),
                                            _react2.default.createElement("div", { style: use.HAMLINES })
                                        ),
                                        _react2.default.createElement(
                                            "ul",
                                            { style: use.smhamestnav },
                                            this.state.hams
                                        )
                                    )
                                )];
                        }
                        break;
                    case "2":
                        switch (this.state.vars) {
                            case "1":
                                styledNavbar = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], query: "(min-width: 1224px)" },
                                    _react2.default.createElement(
                                        "nav",
                                        {
                                            style: use.navbar, id: this.state.navid, className: this.state.navClassName },
                                        _react2.default.createElement(
                                            "ul",
                                            { style: use.navbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                            this.state.childs
                                        ),
                                        _react2.default.createElement(
                                            "div",
                                            { style: use.HAMNAV, onClick: this.toggle },
                                            _react2.default.createElement("div", { style: use.HAMLINES }),
                                            _react2.default.createElement("div", { style: use.HAMLINES }),
                                            _react2.default.createElement("div", { style: use.HAMLINES })
                                        ),
                                        _react2.default.createElement(
                                            "ul",
                                            { style: use.hamestnav },
                                            this.state.hams
                                        )
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        "nav",
                                        {
                                            style: use.mdnavbar, id: this.state.navid, className: this.state.navClassName },
                                        _react2.default.createElement(
                                            "ul",
                                            { style: use.mdnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                            this.state.childs
                                        ),
                                        _react2.default.createElement(
                                            "div",
                                            { style: use.mdHAMNAV, onClick: this.toggle },
                                            _react2.default.createElement("div", { style: use.HAMLINES }),
                                            _react2.default.createElement("div", { style: use.HAMLINES }),
                                            _react2.default.createElement("div", { style: use.HAMLINES })
                                        ),
                                        _react2.default.createElement(
                                            "ul",
                                            { style: use.mdhamestnav },
                                            this.state.hams
                                        )
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        "nav",
                                        {
                                            style: use.smnavbar, id: this.state.navid, className: this.state.navClassName },
                                        _react2.default.createElement(
                                            "ul",
                                            { style: use.smnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                            this.state.childs
                                        ),
                                        _react2.default.createElement(
                                            "div",
                                            { style: use.smHAMNAV, onClick: this.toggle },
                                            _react2.default.createElement("div", { style: use.HAMLINES }),
                                            _react2.default.createElement("div", { style: use.HAMLINES }),
                                            _react2.default.createElement("div", { style: use.HAMLINES })
                                        ),
                                        _react2.default.createElement(
                                            "ul",
                                            { style: use.smhamestnav },
                                            this.state.hams
                                        )
                                    )
                                )];
                            default:
                                styledNavbar = [_react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[0], query: "(min-width: 1224px)" },
                                    _react2.default.createElement(
                                        "nav",
                                        {
                                            style: use.navbar, id: this.state.navid, className: this.state.navClassName },
                                        _react2.default.createElement(
                                            "ul",
                                            { style: use.navbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                            this.state.childs
                                        ),
                                        _react2.default.createElement(
                                            "div",
                                            { style: use.HAMNAV, onClick: this.toggle },
                                            _react2.default.createElement("div", { style: use.HAMLINES }),
                                            _react2.default.createElement("div", { style: use.HAMLINES }),
                                            _react2.default.createElement("div", { style: use.HAMLINES })
                                        ),
                                        _react2.default.createElement(
                                            "ul",
                                            { style: use.hamestnav },
                                            this.state.hams
                                        )
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                    _react2.default.createElement(
                                        "nav",
                                        {
                                            style: use.mdnavbar, id: this.state.navid, className: this.state.navClassName },
                                        _react2.default.createElement(
                                            "ul",
                                            { style: use.mdnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                            this.state.childs
                                        ),
                                        _react2.default.createElement(
                                            "div",
                                            { style: use.mdHAMNAV, onClick: this.toggle },
                                            _react2.default.createElement("div", { style: use.HAMLINES }),
                                            _react2.default.createElement("div", { style: use.HAMLINES }),
                                            _react2.default.createElement("div", { style: use.HAMLINES })
                                        ),
                                        _react2.default.createElement(
                                            "ul",
                                            { style: use.mdhamestnav },
                                            this.state.hams
                                        )
                                    )
                                ), _react2.default.createElement(
                                    _reactResponsive2.default,
                                    { key: this.state.keys[2], maxWidth: 767 },
                                    _react2.default.createElement(
                                        "nav",
                                        {
                                            style: use.smnavbar, id: this.state.navid, className: this.state.navClassName },
                                        _react2.default.createElement(
                                            "ul",
                                            { style: use.smnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                            this.state.childs
                                        ),
                                        _react2.default.createElement(
                                            "div",
                                            { style: use.smHAMNAV, onClick: this.toggle },
                                            _react2.default.createElement("div", { style: use.HAMLINES }),
                                            _react2.default.createElement("div", { style: use.HAMLINES }),
                                            _react2.default.createElement("div", { style: use.HAMLINES })
                                        ),
                                        _react2.default.createElement(
                                            "ul",
                                            { style: use.smhamestnav },
                                            this.state.hams
                                        )
                                    )
                                )];
                        }

                }
                return this.setState({ styledNavbar: styledNavbar, hamShow: !this.state.hamShow });
            } else {
                smdis = "none";
                show = !this.state.hamShow;
                use = (0, _navbarFunctions2.default)("1", props, state, self, smdis, show);
                styledNavbar = [_react2.default.createElement(
                    _reactResponsive2.default,
                    { key: this.state.keys[0], query: "(min-width: 1224px)" },
                    _react2.default.createElement(
                        "nav",
                        {
                            style: use.navbar, id: this.state.navid, className: this.state.navClassName },
                        _react2.default.createElement(
                            "ul",
                            { style: use.navbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                            this.state.childs
                        ),
                        _react2.default.createElement(
                            "div",
                            { style: use.HAMNAV, onClick: this.toggle },
                            _react2.default.createElement("div", { style: use.HAMLINES }),
                            _react2.default.createElement("div", { style: use.HAMLINES }),
                            _react2.default.createElement("div", { style: use.HAMLINES })
                        ),
                        _react2.default.createElement(
                            "ul",
                            { style: use.hamestnav },
                            this.state.hams
                        )
                    )
                ), _react2.default.createElement(
                    _reactResponsive2.default,
                    { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                    _react2.default.createElement(
                        "nav",
                        {
                            style: use.mdnavbar, id: this.state.navid, className: this.state.navClassName },
                        _react2.default.createElement(
                            "ul",
                            { style: use.mdnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                            this.state.childs
                        ),
                        _react2.default.createElement(
                            "div",
                            { style: use.mdHAMNAV, onClick: this.toggle },
                            _react2.default.createElement("div", { style: use.HAMLINES }),
                            _react2.default.createElement("div", { style: use.HAMLINES }),
                            _react2.default.createElement("div", { style: use.HAMLINES })
                        ),
                        _react2.default.createElement(
                            "ul",
                            { style: use.mdhamestnav },
                            this.state.hams
                        )
                    )
                ), _react2.default.createElement(
                    _reactResponsive2.default,
                    { key: this.state.keys[2], maxWidth: 767 },
                    _react2.default.createElement(
                        "nav",
                        {
                            style: use.smnavbar, id: this.state.navid, className: this.state.navClassName },
                        _react2.default.createElement(
                            "ul",
                            { style: use.smnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                            this.state.childs
                        ),
                        _react2.default.createElement(
                            "div",
                            { style: use.smHAMNAV, onClick: this.toggle },
                            _react2.default.createElement("div", { style: use.HAMLINES }),
                            _react2.default.createElement("div", { style: use.HAMLINES }),
                            _react2.default.createElement("div", { style: use.HAMLINES })
                        ),
                        _react2.default.createElement(
                            "ul",
                            { style: use.smhamestnav },
                            this.state.hams
                        )
                    )
                )];
                return this.setState({ styledNavbar: styledNavbar, hamShow: !this.state.hamShow });
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var props = this.props;
            var state = this.state;
            var styledNavbar = void 0,
                use = void 0,
                NAVBARACTUAL = void 0,
                NAVBARLG = void 0,
                NAVBARSM = void 0,
                navbar_navbar_li = void 0,
                smnavbar_navbar_li = void 0,
                mdnavbar_navbar_li = void 0,
                hoverStyle = void 0,
                ham_navbar_li = void 0,
                smham_navbar_li = void 0,
                mdham_navbar_li = void 0,
                LGDIS = void 0,
                SMDIS = void 0,
                smdis = '';
            var self = this;

            var CHILDS = _react2.default.Children.toArray(this.props.children);
            var tempkeys = [];
            for (var _i = 0; _i <= CHILDS.length + 3; _i++) {
                tempkeys.push(tempkeys[_i] = Math.random());
            }
            if (this.state.box === "1" || this.state.box === "2") {
                navbar_navbar_li = {
                    display: this.state.display,
                    flex: "1 0 auto",
                    fontSize: this.state.fontSize,
                    fontWeight: this.state.fontWeight,
                    justifyContent: 'center',
                    margin: this.state.itemSpaceing,
                    background: this.state.itemBackground,
                    fontVariant: this.state.fontVariant
                };
                hoverStyle = {
                    color: this.state.hoverColor
                };
                smnavbar_navbar_li = {
                    display: this.state.smdis

                };
                mdnavbar_navbar_li = {
                    display: this.state.mddis
                };
                ham_navbar_li = {
                    visibility: this.state.hamShow ? 'visible' : 'collaspe',
                    flex: "1 0 auto",
                    fontSize: this.state.fontSize,
                    fontWeight: this.state.fontWeight,
                    justifyContent: 'center',
                    margin: this.state.itemSpaceing,
                    background: this.state.itemBackground,
                    fontVariant: this.state.fontVariant,
                    animationIterationCount: this.state.animationIterationCount,
                    animationTimingFunction: this.state.animationTimingFunction,
                    animationName: this.state.animationName,
                    animationDuration: this.state.animationDuration,
                    transformOrigin: this.state.transformOrigin,
                    animationFillMode: this.state.animationFillMode
                    // hoverStyle= {
                    //     color: this.state.hoverColor
                    // }
                };smham_navbar_li = {
                    visibility: this.state.hamShow ? 'visible' : 'collaspe'

                };
                mdham_navbar_li = {
                    visibility: this.state.hamShow ? 'visible' : 'collaspe'
                };
                if (+this.state.initialCount !== 0) {
                    LGDIS = [];
                    SMDIS = [];
                    for (var x = 0; x < +this.state.initialCount; x += 1) {
                        LGDIS.push(CHILDS[x]);
                    }
                    for (var i = +this.state.initialCount; i < CHILDS.length; i += 1) {
                        SMDIS.push(CHILDS[i]);
                    }
                    NAVBARLG = LGDIS.map(function (x, i) {
                        return _react2.default.createElement(
                            "li",
                            { key: i, style: navbar_navbar_li },
                            x
                        );
                    });
                    NAVBARSM = SMDIS.map(function (x, i) {
                        return _react2.default.createElement(
                            "li",
                            { key: i, style: ham_navbar_li },
                            x
                        );
                    });
                    switch (this.state.box) {
                        case "1":
                            switch (this.state.vars) {
                                case "1":
                                    smdis = "none";
                                    use = (0, _navbarFunctions2.default)("1", props, state, self, smdis);
                                    styledNavbar = [_react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[0], query: "(min-width: 1224px)" },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.navbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.navbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                                NAVBARLG
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { style: use.HAMNAV, onClick: this.toggle },
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES })
                                            ),
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.hamestnav },
                                                NAVBARSM
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.mdnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.mdnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                                NAVBARLG
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { style: use.mdHAMNAV, onClick: this.toggle },
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES })
                                            ),
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.mdhamestnav },
                                                NAVBARSM
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[2], maxWidth: 767 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.smnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.smnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                                NAVBARLG
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { style: use.smHAMNAV, onClick: this.toggle },
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES })
                                            ),
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.smhamestnav },
                                                NAVBARSM
                                            )
                                        )
                                    )];
                                default:
                                    smdis = "none";
                                    use = (0, _navbarFunctions2.default)("1", props, state, self, smdis);
                                    styledNavbar = [_react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[0], query: "(min-width: 1224px)" },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.navbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.navbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                                NAVBARLG
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { style: use.HAMNAV, onClick: this.toggle },
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES })
                                            ),
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.hamestnav },
                                                NAVBARSM
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.mdnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.mdnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                                NAVBARLG
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { style: use.mdHAMNAV, onClick: this.toggle },
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES })
                                            ),
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.mdhamestnav },
                                                NAVBARSM
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[2], maxWidth: 767 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.smnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.smnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                                NAVBARLG
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { style: use.smHAMNAV, onClick: this.toggle },
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES })
                                            ),
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.smhamestnav },
                                                NAVBARSM
                                            )
                                        )
                                    )];
                            }
                            break;
                        case "2":
                            switch (this.state.vars) {
                                case "1":
                                    smdis = "none";
                                    use = (0, _navbarFunctions2.default)("1", props, state, self, smdis);
                                    styledNavbar = [_react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[0], query: "(min-width: 1224px)" },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.navbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.navbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                                NAVBARLG
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { style: use.HAMNAV, onClick: this.toggle },
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES })
                                            ),
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.hamestnav },
                                                NAVBARSM
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.mdnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.mdnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                                NAVBARLG
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { style: use.mdHAMNAV, onClick: this.toggle },
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES })
                                            ),
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.mdhamestnav },
                                                NAVBARSM
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[2], maxWidth: 767 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.smnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.smnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                                NAVBARLG
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { style: use.smHAMNAV, onClick: this.toggle },
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES })
                                            ),
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.smhamestnav },
                                                NAVBARSM
                                            )
                                        )
                                    )];
                                default:
                                    smdis = "none";
                                    use = (0, _navbarFunctions2.default)("1", props, state, self, smdis);
                                    styledNavbar = [_react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[0], query: "(min-width: 1224px)" },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.navbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.navbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                                NAVBARLG
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { style: use.HAMNAV, onClick: this.toggle },
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES })
                                            ),
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.hamestnav },
                                                NAVBARSM
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.mdnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.mdnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                                NAVBARLG
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { style: use.mdHAMNAV, onClick: this.toggle },
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES })
                                            ),
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.mdhamestnav },
                                                NAVBARSM
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[2], maxWidth: 767 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.smnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.smnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                                NAVBARLG
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { style: use.smHAMNAV, onClick: this.toggle },
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES })
                                            ),
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.smhamestnav },
                                                NAVBARSM
                                            )
                                        )
                                    )];
                            }

                    }
                    return this.setState({ childs: NAVBARLG, hams: NAVBARSM, smdis: 'none', keys: tempkeys, styledNavbar: styledNavbar });
                } else {
                    NAVBARACTUAL = CHILDS.map(function (x, i) {
                        return _react2.default.createElement(
                            "li",
                            { key: i, style: navbar_navbar_li },
                            x
                        );
                    });
                    switch (this.state.box) {
                        case "1":
                            switch (this.state.vars) {
                                case "1":
                                    use = (0, _navbarFunctions2.default)("1", props, state, self);
                                    styledNavbar = [_react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[0], query: "(min-width: 1224px)" },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.navbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.navbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                                NAVBARACTUAL
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.mdnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.mdnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                                NAVBARACTUAL
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[2], maxWidth: 767 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.smnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.smnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                                NAVBARACTUAL
                                            )
                                        )
                                    )];
                                default:
                                    use = (0, _navbarFunctions2.default)("1", props, state, self);
                                    styledNavbar = [_react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[0], query: "(min-width: 1224px)" },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.navbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.navbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                                NAVBARACTUAL
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.mdnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.mdnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                                NAVBARACTUAL
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[2], maxWidth: 767 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.smnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.smnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                                NAVBARACTUAL
                                            )
                                        )
                                    )];
                            }
                            break;
                        case "2":
                            switch (this.state.vars) {
                                case "1":
                                    use = (0, _navbarFunctions2.default)("1", props, state, self);
                                    styledNavbar = [_react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[0], query: "(min-width: 1224px)" },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.navbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.navbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                                NAVBARACTUAL
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.mdnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.mdnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                                NAVBARACTUAL
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[2], maxWidth: 767 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.smnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.smnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                                NAVBARACTUAL
                                            )
                                        )
                                    )];
                                default:
                                    use = (0, _navbarFunctions2.default)("1", props, state, self);
                                    styledNavbar = [_react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[0], query: "(min-width: 1224px)" },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.navbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.navbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                                NAVBARACTUAL
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.mdnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.mdnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                                NAVBARACTUAL
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[2], maxWidth: 767 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.smnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.smnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                                NAVBARACTUAL
                                            )
                                        )
                                    )];
                            }
                    }
                    return this.setState({
                        childs: NAVBARACTUAL,
                        hamMenuDis: 'none',
                        hamShow: false,
                        hamSmDis: 'none',
                        hamMdDis: 'none',
                        keys: tempkeys,
                        styledNavbar: styledNavbar
                    });
                }
            } else {
                navbar_navbar_li = {
                    display: this.state.display,
                    flex: "1 0 auto",
                    fontSize: this.state.fontSize,
                    fontWeight: this.state.fontWeight,
                    justifyContent: 'center',
                    margin: this.state.itemSpaceing,
                    background: this.state.itemBackground,
                    fontVariant: this.state.fontVariant
                };
                hoverStyle = {
                    color: this.state.hoverColor
                };
                smnavbar_navbar_li = {
                    display: this.state.smdis

                };
                mdnavbar_navbar_li = {
                    display: this.state.mddis
                };
                ham_navbar_li = {
                    visibility: this.state.hamShow ? 'visible' : 'collaspe',
                    flex: "1 0 auto",
                    fontSize: this.state.fontSize,
                    fontWeight: this.state.fontWeight,
                    justifyContent: 'center',
                    margin: this.state.itemSpaceing,
                    background: this.state.itemBackground,
                    fontVariant: this.state.fontVariant,
                    animationIterationCount: this.state.animationIterationCount,
                    animationTimingFunction: this.state.animationTimingFunction,
                    animationName: this.state.animationName,
                    animationDuration: this.state.animationDuration,
                    transformOrigin: this.state.transformOrigin,
                    animationFillMode: this.state.animationFillMode
                    // hoverStyle= {
                    //     color: this.state.hoverColor
                    // }
                };smham_navbar_li = {
                    visibility: this.state.hamShow ? 'visible' : 'collaspe'

                };
                mdham_navbar_li = {
                    visibility: this.state.hamShow ? 'visible' : 'collaspe'
                };
                if (+this.state.initialCount !== 0) {
                    LGDIS = [];
                    SMDIS = [];
                    for (var x = 0; x < +this.state.initialCount; x += 1) {
                        LGDIS.push(CHILDS[x]);
                    }
                    for (var i = +this.state.initialCount; i < CHILDS.length; i += 1) {
                        SMDIS.push(CHILDS[i]);
                    }
                    NAVBARLG = LGDIS.map(function (x, i) {
                        return _react2.default.createElement(
                            "li",
                            { key: i, style: navbar_navbar_li },
                            x
                        );
                    });
                    NAVBARSM = SMDIS.map(function (x, i) {
                        return _react2.default.createElement(
                            "li",
                            { key: i, style: ham_navbar_li },
                            x
                        );
                    });
                    smdis = "none";
                    use = (0, _navbarFunctions2.default)("1", props, state, self, smdis);
                    styledNavbar = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[0], query: "(min-width: 1224px)" },
                        _react2.default.createElement(
                            "nav",
                            {
                                style: use.navbar, id: this.state.navid, className: this.state.navClassName },
                            _react2.default.createElement(
                                "ul",
                                { style: use.navbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                NAVBARLG
                            ),
                            _react2.default.createElement(
                                "div",
                                { style: use.HAMNAV, onClick: this.toggle },
                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                _react2.default.createElement("div", { style: use.HAMLINES })
                            ),
                            _react2.default.createElement(
                                "ul",
                                { style: use.hamestnav },
                                NAVBARSM
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement(
                            "nav",
                            {
                                style: use.mdnavbar, id: this.state.navid, className: this.state.navClassName },
                            _react2.default.createElement(
                                "ul",
                                { style: use.mdnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                NAVBARLG
                            ),
                            _react2.default.createElement(
                                "div",
                                { style: use.mdHAMNAV, onClick: this.toggle },
                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                _react2.default.createElement("div", { style: use.HAMLINES })
                            ),
                            _react2.default.createElement(
                                "ul",
                                { style: use.mdhamestnav },
                                NAVBARSM
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[2], maxWidth: 767 },
                        _react2.default.createElement(
                            "nav",
                            {
                                style: use.smnavbar, id: this.state.navid, className: this.state.navClassName },
                            _react2.default.createElement(
                                "ul",
                                { style: use.smnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                NAVBARLG
                            ),
                            _react2.default.createElement(
                                "div",
                                { style: use.smHAMNAV, onClick: this.toggle },
                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                _react2.default.createElement("div", { style: use.HAMLINES })
                            ),
                            _react2.default.createElement(
                                "ul",
                                { style: use.smhamestnav },
                                NAVBARSM
                            )
                        )
                    )];

                    return this.setState({ childs: NAVBARLG, hams: NAVBARSM, smdis: 'none', keys: tempkeys, styledNavbar: styledNavbar });
                } else {
                    NAVBARACTUAL = CHILDS.map(function (x, i) {
                        return _react2.default.createElement(
                            "li",
                            { key: i, style: navbar_navbar_li },
                            x
                        );
                    });
                    var _smdis = "flex";
                    use = (0, _navbarFunctions2.default)("1", props, state, self, _smdis);
                    styledNavbar = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[0], query: "(min-width: 1224px)" },
                        _react2.default.createElement(
                            "nav",
                            {
                                style: use.navbar, id: this.state.navid, className: this.state.navClassName },
                            _react2.default.createElement(
                                "ul",
                                { style: use.navbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                NAVBARACTUAL
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement(
                            "nav",
                            {
                                style: use.mdnavbar, id: this.state.navid, className: this.state.navClassName },
                            _react2.default.createElement(
                                "ul",
                                { style: use.mdnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                NAVBARACTUAL
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[2], maxWidth: 767 },
                        _react2.default.createElement(
                            "nav",
                            {
                                style: use.smnavbar, id: this.state.navid, className: this.state.navClassName },
                            _react2.default.createElement(
                                "ul",
                                { style: use.smnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                NAVBARACTUAL
                            )
                        )
                    )];
                }
                return this.setState({
                    childs: NAVBARACTUAL,
                    hamMenuDis: 'none',
                    hamShow: false,
                    hamSmDis: 'none',
                    hamMdDis: 'none',
                    keys: tempkeys,
                    styledNavbar: styledNavbar
                });
            }
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(newProps) {
            var props = newProps;
            var state = this.state;
            var styledNavbar = void 0,
                use = void 0,
                NAVBARACTUAL = void 0,
                NAVBARLG = void 0,
                NAVBARSM = void 0,
                navbar_navbar_li = void 0,
                smnavbar_navbar_li = void 0,
                mdnavbar_navbar_li = void 0,
                hoverStyle = void 0,
                ham_navbar_li = void 0,
                smham_navbar_li = void 0,
                mdham_navbar_li = void 0,
                LGDIS = void 0,
                SMDIS = void 0,
                smdis = '';
            var self = this;
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            var tempkeys = [];
            for (var _i2 = 0; _i2 <= CHILDS.length; _i2++) {
                tempkeys.push(tempkeys[_i2] = Math.random());
            }
            if (this.state.box === "1" || this.state.box === "2") {
                navbar_navbar_li = {
                    display: this.state.display,
                    flex: "1 0 auto",
                    fontSize: this.state.fontSize,
                    fontWeight: this.state.fontWeight,
                    justifyContent: 'center',
                    margin: this.state.itemSpaceing,
                    background: this.state.itemBackground,
                    fontVariant: this.state.fontVariant
                };
                hoverStyle = {
                    color: this.state.hoverColor
                };
                smnavbar_navbar_li = {
                    display: this.state.smdis

                };
                mdnavbar_navbar_li = {
                    display: this.state.mddis
                };
                ham_navbar_li = {
                    visibility: this.state.hamShow ? 'visible' : 'collaspe',
                    flex: "1 0 auto",
                    fontSize: this.state.fontSize,
                    fontWeight: this.state.fontWeight,
                    justifyContent: 'center',
                    margin: this.state.itemSpaceing,
                    background: this.state.itemBackground,
                    fontVariant: this.state.fontVariant,
                    animationIterationCount: this.state.animationIterationCount,
                    animationTimingFunction: this.state.animationTimingFunction,
                    animationName: this.state.animationName,
                    animationDuration: this.state.animationDuration,
                    transformOrigin: this.state.transformOrigin,
                    animationFillMode: this.state.animationFillMode
                    // hoverStyle= {
                    //     color: this.state.hoverColor
                    // }
                };smham_navbar_li = {
                    visibility: this.state.hamShow ? 'visible' : 'collaspe'

                };
                mdham_navbar_li = {
                    visibility: this.state.hamShow ? 'visible' : 'collaspe'
                };
                if (+this.state.initialCount !== 0) {
                    LGDIS = [];
                    SMDIS = [];
                    for (var x = 0; x < +this.state.initialCount; x += 1) {
                        LGDIS.push(CHILDS[x]);
                    }
                    for (var i = +this.state.initialCount; i < CHILDS.length; i += 1) {
                        SMDIS.push(CHILDS[i]);
                    }
                    NAVBARLG = LGDIS.map(function (x, i) {
                        return _react2.default.createElement(
                            "li",
                            { key: i, style: navbar_navbar_li },
                            x
                        );
                    });
                    NAVBARSM = SMDIS.map(function (x, i) {
                        return _react2.default.createElement(
                            "li",
                            { key: i, style: ham_navbar_li },
                            x
                        );
                    });
                    switch (this.state.box) {
                        case "1":
                            switch (this.state.vars) {
                                case "1":
                                    smdis = "none";
                                    use = (0, _navbarFunctions2.default)("1", props, state, self, smdis);
                                    styledNavbar = [_react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[0], query: "(min-width: 1224px)" },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.navbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.navbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                                NAVBARLG
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { style: use.HAMNAV, onClick: this.toggle },
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES })
                                            ),
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.hamestnav },
                                                NAVBARSM
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.mdnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.mdnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                                NAVBARLG
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { style: use.mdHAMNAV, onClick: this.toggle },
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES })
                                            ),
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.mdhamestnav },
                                                NAVBARSM
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[2], maxWidth: 767 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.smnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.smnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                                NAVBARLG
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { style: use.smHAMNAV, onClick: this.toggle },
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES })
                                            ),
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.smhamestnav },
                                                NAVBARSM
                                            )
                                        )
                                    )];
                                default:
                                    smdis = "none";
                                    use = (0, _navbarFunctions2.default)("1", props, state, self, smdis);
                                    styledNavbar = [_react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[0], query: "(min-width: 1224px)" },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.navbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.navbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                                NAVBARLG
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { style: use.HAMNAV, onClick: this.toggle },
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES })
                                            ),
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.hamestnav },
                                                NAVBARSM
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.mdnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.mdnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                                NAVBARLG
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { style: use.mdHAMNAV, onClick: this.toggle },
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES })
                                            ),
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.mdhamestnav },
                                                NAVBARSM
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[2], maxWidth: 767 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.smnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.smnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                                NAVBARLG
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { style: use.smHAMNAV, onClick: this.toggle },
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES })
                                            ),
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.smhamestnav },
                                                NAVBARSM
                                            )
                                        )
                                    )];
                            }
                            break;
                        case "2":
                            switch (this.state.vars) {
                                case "1":
                                    smdis = "none";
                                    use = (0, _navbarFunctions2.default)("1", props, state, self, smdis);
                                    styledNavbar = [_react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[0], query: "(min-width: 1224px)" },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.navbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.navbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                                NAVBARLG
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { style: use.HAMNAV, onClick: this.toggle },
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES })
                                            ),
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.hamestnav },
                                                NAVBARSM
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.mdnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.mdnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                                NAVBARLG
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { style: use.mdHAMNAV, onClick: this.toggle },
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES })
                                            ),
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.mdhamestnav },
                                                NAVBARSM
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[2], maxWidth: 767 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.smnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.smnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                                NAVBARLG
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { style: use.smHAMNAV, onClick: this.toggle },
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES })
                                            ),
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.smhamestnav },
                                                NAVBARSM
                                            )
                                        )
                                    )];
                                default:
                                    smdis = "none";
                                    use = (0, _navbarFunctions2.default)("1", props, state, self, smdis);
                                    styledNavbar = [_react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[0], query: "(min-width: 1224px)" },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.navbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.navbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                                NAVBARLG
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { style: use.HAMNAV, onClick: this.toggle },
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES })
                                            ),
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.hamestnav },
                                                NAVBARSM
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.mdnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.mdnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                                NAVBARLG
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { style: use.mdHAMNAV, onClick: this.toggle },
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES })
                                            ),
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.mdhamestnav },
                                                NAVBARSM
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[2], maxWidth: 767 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.smnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.smnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                                NAVBARLG
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { style: use.smHAMNAV, onClick: this.toggle },
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES }),
                                                _react2.default.createElement("div", { style: use.HAMLINES })
                                            ),
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.smhamestnav },
                                                NAVBARSM
                                            )
                                        )
                                    )];
                            }

                    }
                    return this.setState({ childs: NAVBARLG, hams: NAVBARSM, smdis: 'none', keys: tempkeys, styledNavbar: styledNavbar });
                } else {
                    NAVBARACTUAL = CHILDS.map(function (x, i) {
                        return _react2.default.createElement(
                            "li",
                            { key: i, style: navbar_navbar_li },
                            x
                        );
                    });
                    switch (this.state.box) {
                        case "1":
                            switch (this.state.vars) {
                                case "1":
                                    use = (0, _navbarFunctions2.default)("1", props, state, self);
                                    styledNavbar = [_react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[0], query: "(min-width: 1224px)" },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.navbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.navbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                                NAVBARACTUAL
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.mdnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.mdnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                                NAVBARACTUAL
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[2], maxWidth: 767 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.smnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.smnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                                NAVBARACTUAL
                                            )
                                        )
                                    )];
                                default:
                                    use = (0, _navbarFunctions2.default)("1", props, state, self);
                                    styledNavbar = [_react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[0], query: "(min-width: 1224px)" },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.navbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.navbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                                NAVBARACTUAL
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.mdnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.mdnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                                NAVBARACTUAL
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[2], maxWidth: 767 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.smnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.smnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                                NAVBARACTUAL
                                            )
                                        )
                                    )];
                            }
                            break;
                        case "2":
                            switch (this.state.vars) {
                                case "1":
                                    use = (0, _navbarFunctions2.default)("1", props, state, self);
                                    styledNavbar = [_react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[0], query: "(min-width: 1224px)" },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.navbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.navbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                                NAVBARACTUAL
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.mdnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.mdnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                                NAVBARACTUAL
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[2], maxWidth: 767 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.smnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.smnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                                NAVBARACTUAL
                                            )
                                        )
                                    )];
                                default:
                                    use = (0, _navbarFunctions2.default)("1", props, state, self);
                                    styledNavbar = [_react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[0], query: "(min-width: 1224px)" },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.navbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.navbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                                NAVBARACTUAL
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.mdnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.mdnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                                NAVBARACTUAL
                                            )
                                        )
                                    ), _react2.default.createElement(
                                        _reactResponsive2.default,
                                        { key: tempkeys[2], maxWidth: 767 },
                                        _react2.default.createElement(
                                            "nav",
                                            {
                                                style: use.smnavbar, id: this.state.navid, className: this.state.navClassName },
                                            _react2.default.createElement(
                                                "ul",
                                                { style: use.smnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar" },
                                                NAVBARACTUAL
                                            )
                                        )
                                    )];
                            }
                    }
                    return this.setState({
                        childs: NAVBARACTUAL,
                        hamMenuDis: 'none',
                        hamShow: false,
                        hamSmDis: 'none',
                        hamMdDis: 'none',
                        keys: tempkeys,
                        styledNavbar: styledNavbar
                    });
                }
            } else {
                navbar_navbar_li = {
                    display: this.state.display,
                    flex: "1 0 auto",
                    fontSize: this.state.fontSize,
                    fontWeight: this.state.fontWeight,
                    justifyContent: 'center',
                    margin: this.state.itemSpaceing,
                    background: this.state.itemBackground,
                    fontVariant: this.state.fontVariant
                };
                hoverStyle = {
                    color: this.state.hoverColor
                };
                smnavbar_navbar_li = {
                    display: this.state.smdis

                };
                mdnavbar_navbar_li = {
                    display: this.state.mddis
                };
                ham_navbar_li = {
                    visibility: this.state.hamShow ? 'visible' : 'collaspe',
                    flex: "1 0 auto",
                    fontSize: this.state.fontSize,
                    fontWeight: this.state.fontWeight,
                    justifyContent: 'center',
                    margin: this.state.itemSpaceing,
                    background: this.state.itemBackground,
                    fontVariant: this.state.fontVariant,
                    animationIterationCount: this.state.animationIterationCount,
                    animationTimingFunction: this.state.animationTimingFunction,
                    animationName: this.state.animationName,
                    animationDuration: this.state.animationDuration,
                    transformOrigin: this.state.transformOrigin,
                    animationFillMode: this.state.animationFillMode
                    // hoverStyle= {
                    //     color: this.state.hoverColor
                    // }
                };smham_navbar_li = {
                    visibility: this.state.hamShow ? 'visible' : 'collaspe'

                };
                mdham_navbar_li = {
                    visibility: this.state.hamShow ? 'visible' : 'collaspe'
                };
                if (+this.state.initialCount !== 0) {
                    LGDIS = [];
                    SMDIS = [];
                    for (var x = 0; x < +this.state.initialCount; x += 1) {
                        LGDIS.push(CHILDS[x]);
                    }
                    for (var i = +this.state.initialCount; i < CHILDS.length; i += 1) {
                        SMDIS.push(CHILDS[i]);
                    }
                    NAVBARLG = LGDIS.map(function (x, i) {
                        return _react2.default.createElement(
                            "li",
                            { key: i, style: navbar_navbar_li },
                            x
                        );
                    });
                    NAVBARSM = SMDIS.map(function (x, i) {
                        return _react2.default.createElement(
                            "li",
                            { key: i, style: ham_navbar_li },
                            x
                        );
                    });
                    smdis = "none";
                    use = (0, _navbarFunctions2.default)("1", props, state, self, smdis);
                    styledNavbar = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[0], query: "(min-width: 1224px)" },
                        _react2.default.createElement(
                            "nav",
                            {
                                style: use.navbar, id: this.state.navid, className: this.state.navClassName },
                            _react2.default.createElement(
                                "ul",
                                { style: use.navbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                NAVBARACTUAL
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement(
                            "nav",
                            {
                                style: use.mdnavbar, id: this.state.navid, className: this.state.navClassName },
                            _react2.default.createElement(
                                "ul",
                                { style: use.mdnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                NAVBARACTUAL
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[2], maxWidth: 767 },
                        _react2.default.createElement(
                            "nav",
                            {
                                style: use.smnavbar, id: this.state.navid, className: this.state.navClassName },
                            _react2.default.createElement(
                                "ul",
                                { style: use.smnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                NAVBARACTUAL
                            )
                        )
                    )];

                    return this.setState({ childs: NAVBARLG, hams: NAVBARSM, smdis: 'none', keys: tempkeys, styledNavbar: styledNavbar });
                } else {
                    NAVBARACTUAL = CHILDS.map(function (x, i) {
                        return _react2.default.createElement(
                            "li",
                            { key: i, style: navbar_navbar_li },
                            x
                        );
                    });
                    smdis = "flex";
                    use = (0, _navbarFunctions2.default)("1", props, state, self, smdis);
                    styledNavbar = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[0], query: "(min-width: 1224px)" },
                        _react2.default.createElement(
                            "nav",
                            {
                                style: use.navbar, id: this.state.navid, className: this.state.navClassName },
                            _react2.default.createElement(
                                "ul",
                                { style: use.navbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                NAVBARACTUAL
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement(
                            "nav",
                            {
                                style: use.mdnavbar, id: this.state.navid, className: this.state.navClassName },
                            _react2.default.createElement(
                                "ul",
                                { style: use.mdnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                NAVBARACTUAL
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[2], maxWidth: 767 },
                        _react2.default.createElement(
                            "nav",
                            {
                                style: use.smnavbar, id: this.state.navid, className: this.state.navClassName },
                            _react2.default.createElement(
                                "ul",
                                { style: use.smnavbar_navbar, id: this.state.navid, className: this.state.navClassName + " navbar1-navbar socialness" },
                                NAVBARACTUAL
                            )
                        )
                    )];
                }
                return this.setState({
                    childs: NAVBARACTUAL,
                    hamMenuDis: 'none',
                    hamShow: false,
                    hamSmDis: 'none',
                    hamMdDis: 'none',
                    keys: tempkeys,
                    styledNavbar: styledNavbar
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.state.styledNavbar
            );
        }
    }]);

    return Navbar;
}(_react2.default.Component);

exports.default = Navbar;